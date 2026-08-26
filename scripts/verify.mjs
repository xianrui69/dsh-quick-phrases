#!/usr/bin/env node
/**
 * Sanity checks for dsh-quick-phrases without a running DSH:
 * 1. both lib entries parse (node --check equivalent via new Function is not
 *    ESM-safe, so we spawn `node --check`);
 * 2. package.json exports map contains the `./client` face the client module
 *    system requires;
 * 3. the client bundle registers under the expected module id.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let failed = false;

const checkSyntax = (rel) => {
	try {
		execFileSync(process.execPath, ['--check', join(root, rel)], { stdio: 'pipe' });
		console.log(`ok   syntax: ${rel}`);
	} catch (error) {
		failed = true;
		console.error(`FAIL syntax: ${rel}\n${error.stderr?.toString() ?? error.message}`);
	}
};

checkSyntax('lib/index.js');
checkSyntax('lib/client.js');

const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
if (pkg.exports?.['./client'] === undefined) {
	failed = true;
	console.error('FAIL package.json: exports["./client"] missing — client-modules requires it');
} else {
	console.log(`ok   exports["./client"] = ${pkg.exports['./client']}`);
}
if (pkg.dsh?.client?.platform !== 'web') {
	failed = true;
	console.error('FAIL package.json: dsh.client.platform must be "web"');
} else {
	console.log('ok   dsh.client.platform = web');
}

const client = readFileSync(join(root, 'lib/client.js'), 'utf8');
if (!client.includes('id: "dsh-quick-phrases"')) {
	failed = true;
	console.error('FAIL lib/client.js: module id mismatch');
} else {
	console.log('ok   client bundle id = dsh-quick-phrases');
}

process.exit(failed ? 1 : 0);
