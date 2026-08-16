import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.resolve(__dirname, '../../../dist/apps/web');
const targets = [
	path.resolve(__dirname, '../dist'),
];

function copyEntry(sourcePath, destinationPath) {
	const stat = fs.statSync(sourcePath);
	if (stat.isDirectory()) {
		fs.mkdirSync(destinationPath, { recursive: true });
		for (const entry of fs.readdirSync(sourcePath)) {
			copyEntry(path.join(sourcePath, entry), path.join(destinationPath, entry));
		}
		return;
	}
	fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
	fs.copyFileSync(sourcePath, destinationPath);
}

for (const target of targets) {
	fs.rmSync(target, { recursive: true, force: true });
	copyEntry(source, target);
	console.log(`Copied build output to ${target}`);
}
