// Offline smoke test: evaluate lib/client.js with stubbed browser/module env
// and exercise the trigger source + store logic.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const registered = [];
globalThis.window = { __ModuleLoader__: { load: (def) => registered.push(def) } };
const storage = new Map();
globalThis.localStorage = {
	getItem: (k) => (storage.has(k) ? storage.get(k) : null),
	setItem: (k, v) => storage.set(k, v),
};
const jsxStub = (type, props, key) => ({ type, props, key });
const reactStub = {
	useSyncExternalStore: () => ({}),
	useState: (init) => [typeof init === 'function' ? init() : init, () => {}],
	useEffect: () => {},
};
const requireStub = (spec) => {
	if (spec === 'react') return reactStub;
	if (spec === 'react/jsx-runtime') return { jsx: jsxStub, jsxs: (t, p, k) => jsxStub(t, { ...p, children: [p.children] }, k) };
	throw new Error('unexpected require: ' + spec);
};

// Evaluate the bundle (classic script: no import/export inside).
const code = readFileSync(join(root, 'lib/client.js'), 'utf8');
new Function('window', code)(globalThis.window);

if (registered.length !== 1 || registered[0].id !== 'dsh-quick-phrases') {
	console.error('FAIL: module registration', registered.map((r) => r.id));
	process.exit(1);
}
const exports_ = registered[0].factory(requireStub);

let source;
const ctx = {
	get: (key) => {
		if (key !== 'inputTriggers') throw new Error('unexpected service: ' + key);
		return { registerSource: (src) => { source = src; return () => {}; } };
	},
	effect: (fn) => { fn(); return () => {}; },
	slots: {
		inject: (name, factory) => {
			if (name !== 'conversation.input.dock' && name !== 'settings.section') throw new Error('unexpected slot: ' + name);
			factory();
		},
		register: (decl, component) => {
			if (decl.id !== 'quick-phrases') throw new Error('bad slot decl: ' + decl.name);
			if (typeof component !== 'function') throw new Error('component missing for ' + decl.name);
			if (decl.name === 'settings.section') {
				if (typeof decl.label !== 'function' || decl.label() !== '快捷短语') throw new Error('bad settings label');
				console.log('ok   settings section registered: #', decl.id, 'order', decl.order, 'label', decl.label());
				return;
			}
			console.log('ok   slot registered:', decl.name, '#', decl.id, 'order', decl.order);
		},
	},
};
exports_.apply(ctx);
if (!source || source.trigger !== '/' || source.name !== '短语') {
	console.error('FAIL: source not registered correctly', source?.name);
	process.exit(1);
}
console.log('ok   source registered:', source.trigger, source.name, 'order', source.order);

const signal = { aborted: false };
const all = await source.candidates({}, { query: '', signal });
console.log(`ok   candidates('') = ${all.length} (slash-on: ${all.map((c) => c.name).join('/')}), pinned first: ${all[0].name} (icon ${all[0].icon})`);
if (all.length !== 3 || all[0].name !== '继续' || all[0].icon !== '★') { console.error('FAIL: slash gate / pinned-first ordering', all); process.exit(1); }

// v0.3.0: / 菜单成员开关 —— slash:false 的短语不进菜单，置 slash:true 后加入。
const hidden = await source.candidates({}, { query: '复查', signal });
if (hidden.length !== 0) { console.error('FAIL: slash-off phrase should not appear in / menu', hidden); process.exit(1); }
console.log('ok   slash gate: 复查 (slash:false) hidden from / menu');
const storeHook0 = exports_.__store;
storeHook0.update((draft) => { const p = draft.phrases.find((x) => x.name === '复查'); if (p) p.slash = true; });
const joined = await source.candidates({}, { query: '复查', signal });
if (joined.length !== 1 || joined[0].name !== '复查') { console.error('FAIL: slash toggle should add to / menu', joined); process.exit(1); }
console.log('ok   slash toggle: 复查 joins / menu after slash=true');

const hit = await source.candidates({}, { query: '日报', signal });
if (hit.length !== 1 || hit[0].name !== '日报') { console.error('FAIL: query filter', hit); process.exit(1); }
console.log('ok   candidates(\'日报\') =', hit.map((c) => c.name).join(','));

const pick = source.onPick({ candidate: { value: 'd-continue' } });
if (pick?.text !== '继续上面的工作，从上次中断的地方接着做。') { console.error('FAIL: onPick', pick); process.exit(1); }
console.log('ok   onPick → text arm');

const enter = source.matchEnter({}, '/继续');
if (enter?.text !== '继续上面的工作，从上次中断的地方接着做。') { console.error('FAIL: matchEnter', enter); process.exit(1); }
if (source.matchEnter({}, '/不存在') !== undefined) { console.error('FAIL: matchEnter should miss'); process.exit(1); }
if (source.matchEnter({}, '普通消息') !== undefined) { console.error('FAIL: matchEnter non-slash'); process.exit(1); }
console.log('ok   matchEnter /继续 → expand; miss → undefined');

// autoSubmit: default 继续 is ➤, and the flag persists through localStorage JSON.
const storeHook = exports_.__store;
const cont = storeHook.get().phrases.find((p) => p.name === '继续');
if (cont?.autoSubmit !== true) { console.error('FAIL: default 继续 should have autoSubmit'); process.exit(1); }
storeHook.update((draft) => { draft.phrases[1].autoSubmit = true; });
const persisted = JSON.parse(storage.get('dsh-quick-phrases:v2'));
if (persisted.phrases[1].autoSubmit !== true || persisted.phrases[0].autoSubmit !== true || persisted.barVisible !== true) {
	console.error('FAIL: autoSubmit persistence', persisted);
	process.exit(1);
}
console.log('ok   autoSubmit default + persistence');

// v0.7.3: chips bar 位置持久化 —— barPos {offsetX,offsetY} 写入 store 并落 localStorage。
storeHook.update((draft) => { draft.barPos = { offsetX: 50, offsetY: -80 }; });
const persisted2b = JSON.parse(storage.get('dsh-quick-phrases:v2'));
if (persisted2b.barPos?.offsetX !== 50 || persisted2b.barPos?.offsetY !== -80) { console.error('FAIL: barPos offset persistence', persisted2b); process.exit(1); }
console.log('ok   chips bar offset position persistence (offsetX/offsetY in localStorage)');

// --- hydrate #1: host file missing → seed from localStorage, POST to host ---
let posted = null;
globalThis.fetch = async (url, opts = {}) => {
	if (opts.method === 'POST') {
		posted = JSON.parse(opts.body);
		return { ok: true, json: async () => ({ ok: true }) };
	}
	return { ok: true, json: async () => ({ missing: true }) };
};
const exports2 = registered[0].factory(requireStub);
exports2.apply(ctx);
const store2 = exports2.__store;
await new Promise((resolve) => setTimeout(resolve, 600)); // debounce is 400ms
if (posted === null || !Array.isArray(posted.phrases) || posted.phrases.length !== 6) {
	console.error('FAIL: hydrate did not seed the host file', posted);
	process.exit(1);
}
if (store2.get().phrases.length !== 6 || store2.get().phrases[0].autoSubmit !== true) {
	console.error('FAIL: hydrate seed state wrong');
	process.exit(1);
}
if (store2.get().barPos?.offsetX !== 50) { console.error('FAIL: hydrate seed should keep barPos offset', store2.get().barPos); process.exit(1); }
console.log('ok   hydrate: host-missing → seeded from localStorage + durable POST');

// --- hydrate #2: host file exists → host wins over localStorage ---
globalThis.fetch = async (url, opts = {}) => {
	if (opts.method === 'POST') return { ok: true, json: async () => ({ ok: true }) };
	return {
		ok: true,
		json: async () => ({
			version: 2,
			barVisible: false,
			phrases: [{ name: '主机', text: '来自宿主文件', pinned: true, autoSubmit: false }]
		})
	};
};
const exports3 = registered[0].factory(requireStub);
exports3.apply(ctx);
await new Promise((resolve) => setTimeout(resolve, 30));
const store3 = exports3.__store;
if (store3.get().phrases.length !== 1 || store3.get().phrases[0].name !== '主机' || store3.get().barVisible !== false) {
	console.error('FAIL: host state should win', store3.get());
	process.exit(1);
}
console.log('ok   hydrate: host file wins over localStorage');

// v0.7.0 迁移默认：宿主文件没有 barPos 字段 → sanitize 成 null（chips bar 用默认底部居中位）。
if (store3.get().barPos !== null) { console.error('FAIL: missing host barPos should sanitize to null', store3.get().barPos); process.exit(1); }
console.log('ok   barPos sanitize: host without barPos → null');

// v0.6.0: bar 开关 —— 旧表无 bar 字段迁移默认显示；置 false 后持久化。
if (store3.get().phrases[0].bar !== true) { console.error('FAIL: legacy phrase should default bar=true', store3.get().phrases[0]); process.exit(1); }
console.log('ok   bar default: legacy phrase (no bar field) shows in quick bar');
store3.update((draft) => { draft.phrases[0].bar = false; });
const persisted3 = JSON.parse(storage.get('dsh-quick-phrases:v2'));
if (persisted3.phrases[0].bar !== false) { console.error('FAIL: bar persistence', persisted3.phrases[0]); process.exit(1); }
console.log('ok   bar toggle persistence');

// v0.3.0 迁移默认：宿主/旧表里没有 slash 字段的短语，默认不进 / 菜单。
const legacyMenu = await source.candidates({}, { query: '', signal });
if (legacyMenu.length !== 0) { console.error('FAIL: legacy phrase without slash should stay out of / menu', legacyMenu); process.exit(1); }
console.log('ok   sanitize default: legacy phrase (no slash field) stays out of / menu');

console.log('SMOKE OK');
