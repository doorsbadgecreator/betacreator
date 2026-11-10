// Run before publishing: node scripts/check-assets.cjs
// A missing renderer or a case mismatch can leave the preview working while export fails.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const references = new Set([
  ...Array.from(html.matchAll(/(?:src|href)=["'](\/?assets\/[^"']+)["']/g), m => m[1]),
  ...Array.from(html.matchAll(/url\(["']?(\/?assets\/[^"')]+)["']?\)/g), m => m[1]),
]);
let failed = false;
for (const reference of references) {
  if (!fs.existsSync(path.join(root, reference.replace(/^\//, '')))) {
    console.error('Missing asset (paths are case sensitive): ' + reference);
    failed = true;
  }
}
for (const [, source] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
  new vm.Script(source);
}
const renderer = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/vendor/html-to-image-1.11.13.js'), 'utf8'), renderer);
if (typeof renderer.htmlToImage?.toBlob !== 'function') {
  console.error('PNG renderer does not expose htmlToImage.toBlob');
  failed = true;
}
if (failed) process.exitCode = 1;
else console.log('Local assets, page JavaScript, and PNG renderer passed.');
