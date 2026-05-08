// patch-runtime.mjs
// Patches nodejs18.x to nodejs20.x in Vercel output after build.
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

function patchDir(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) { patchDir(full); continue; }
    if (entry.name === '.vc-config.json') {
      const raw = readFileSync(full, 'utf8');
      if (raw.includes('nodejs18.x')) {
        writeFileSync(full, raw.replace(/nodejs18\.x/g, 'nodejs20.x'));
        console.log('Patched:', full);
      }
    }
  }
}

patchDir('.vercel/output/functions');
console.log('patch-runtime.mjs complete');
