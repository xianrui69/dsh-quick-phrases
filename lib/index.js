/**
 * dsh-quick-phrases — host entry.
 *
 * The phrase table is persisted HOST-SIDE (durable across browser storage
 * wipes and host restarts) as JSON at:
 *
 *   $DSH_HOME/storages/dsh-quick-phrases/phrases.json
 *
 * Two fenced HTTP routes serve the browser client:
 *   GET  /plugins/dsh-quick-phrases/phrases  → {missing:true} or the state
 *   POST /plugins/dsh-quick-phrases/phrases  → validate + atomic write
 *
 * Routes register lazily once the web server service binds (a headless
 * profile keeps the plugin inert). The browser client falls back to
 * localStorage when the host is unreachable.
 *
 * @module dsh-quick-phrases
 */
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

export const name = 'dsh-quick-phrases';

const WEB_SERVER_KEYS = ['webServer', 'httpServer'];
const ROUTE = '/plugins/dsh-quick-phrases/phrases';
const MAX_BODY_BYTES = 1 << 20;

const dataDir = () => join(process.env.DSH_HOME ?? join(homedir(), '.dsh'), 'storages', 'dsh-quick-phrases');
const fileOf = () => join(dataDir(), 'phrases.json');

/** Loopback + same-origin fence (mirrors dsh-sidebar-qa's request trust check). */
function headerOf(headers, name) {
	const value = headers[name];
	return typeof value === 'string' ? value : undefined;
}
function isLoopbackHostname(hostname) {
	if (hostname === 'localhost' || hostname === '[::1]') return true;
	const parts = hostname.split('.');
	return parts.length === 4 && parts[0] === '127' && parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) <= 255);
}
function fence(req) {
	const host = headerOf(req.headers, 'host');
	if (host === undefined) return false;
	let hostUrl;
	try {
		hostUrl = new URL(`http://${host}`);
	} catch {
		return false;
	}
	if (!isLoopbackHostname(hostUrl.hostname)) return false;
	if (headerOf(req.headers, 'sec-fetch-site') === 'cross-site') return false;
	const origin = headerOf(req.headers, 'origin');
	if (origin === undefined) return true;
	try {
		return new URL(origin).host === hostUrl.host;
	} catch {
		return false;
	}
}

function writeJson(res, status, body) {
	res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
	res.end(JSON.stringify(body));
}

/**
 * Plugin body: mount the durable phrase-file routes.
 * @param {import('@deepseek-ai/cordis').Context} ctx - host plugin context.
 */
export function apply(ctx) {
	let registered = false;
	const registerSurface = () => {
		if (registered) return;
		const webServer = ctx.get(WEB_SERVER_KEYS[0]) ?? ctx.get(WEB_SERVER_KEYS[1]);
		if (webServer === undefined) return;
		registered = true;
		ctx.effect(() => webServer.register({
			kind: 'exact',
			path: ROUTE,
			handler: async (req, res) => {
				if (!fence(req)) {
					writeJson(res, 403, { ok: false, error: { code: 'forbidden', message: 'forbidden' } });
					return;
				}
				if (req.method === 'GET') {
					const file = fileOf();
					if (!existsSync(file)) {
						writeJson(res, 200, { missing: true });
						return;
					}
					try {
						const parsed = JSON.parse(readFileSync(file, 'utf8'));
						writeJson(res, 200, parsed);
					} catch (error) {
						ctx.logger?.warn?.(`quick-phrases: state read failed: ${String(error)}`);
						writeJson(res, 200, { missing: true });
					}
					return;
				}
				if (req.method === 'POST') {
					const chunks = [];
					let total = 0;
					for await (const chunk of req) {
						const buffer = typeof chunk === 'string' ? Buffer.from(chunk) : chunk;
						total += buffer.length;
						if (total > MAX_BODY_BYTES) {
							writeJson(res, 413, { ok: false, error: { code: 'too-large', message: 'request body too large' } });
							return;
						}
						chunks.push(buffer);
					}
					let parsed;
					try {
						parsed = JSON.parse(Buffer.concat(chunks).toString('utf8'));
					} catch {
						writeJson(res, 400, { ok: false, error: { code: 'bad-json', message: 'body is not valid JSON' } });
						return;
					}
					if (parsed === null || typeof parsed !== 'object' || !Array.isArray(parsed.phrases)) {
						writeJson(res, 400, { ok: false, error: { code: 'bad-shape', message: 'phrases[] required' } });
						return;
					}
					try {
						mkdirSync(dataDir(), { recursive: true });
						const file = fileOf();
						const tmp = `${file}.tmp`;
						writeFileSync(tmp, JSON.stringify(parsed));
						renameSync(tmp, file);
						writeJson(res, 200, { ok: true });
					} catch (error) {
						ctx.logger?.warn?.(`quick-phrases: state write failed: ${String(error)}`);
						writeJson(res, 500, { ok: false, error: { code: 'write-failed', message: String(error) } });
					}
					return;
				}
				writeJson(res, 405, { ok: false, error: { code: 'method', message: 'method not allowed' } });
			},
		}), 'quick-phrases: phrases route');
	};
	registerSurface();
	ctx.on('internal/service', (serviceName) => {
		if (WEB_SERVER_KEYS.includes(serviceName)) registerSurface();
	});
}
