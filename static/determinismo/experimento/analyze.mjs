#!/usr/bin/env node
// Resume results.json: execuções, hashes únicos e se todos os modelos convergiram.
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const d = JSON.parse(await readFile(path.join(dir, process.argv[2] ?? 'results.json'), 'utf8'));
const by = (arr, f) => arr.reduce((m, x) => ((m[f(x)] ??= []).push(x), m), {});
const rows = [];
for (const [group, runs] of Object.entries(by(d.runs, (r) => r.group))) {
  for (const [model, rs] of Object.entries(by(runs, (r) => r.model))) {
    const ok = rs.filter((r) => r.ok);
    const counts = by(ok, (r) => r.sha256);
    const top = Object.values(counts).sort((a, b) => b.length - a.length)[0]?.length ?? 0;
    rows.push({ grupo: group, modelo: model, execucoes: rs.length, ok: ok.length, hashes_unicos: Object.keys(counts).length, iguais_ao_mais_comum: top });
  }
}
console.table(rows);
for (const group of ['spec', 'control']) {
  const ok = d.runs.filter((r) => r.group === group && r.ok);
  const raw = new Set(ok.map((r) => r.sha256)), canon = new Set(ok.map((r) => r.canonicalSha256).filter(Boolean));
  console.log(`${group}: ${ok.length}/${d.runs.filter((r) => r.group === group).length} ok · hashes únicos (bytes): ${raw.size}${group === 'spec' ? ' · únicos (JSON canônico): ' + canon.size : ''}`);
  if (raw.size === 1) console.log('  hash único:', [...raw][0]);
}
const failed = d.runs.filter((r) => !r.ok);
if (failed.length) console.log('\nFalhas:', failed.map((r) => `${r.model} ${r.group} #${r.run} (${r.status})`).join(', '));
