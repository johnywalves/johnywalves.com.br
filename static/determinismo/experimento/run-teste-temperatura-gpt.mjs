#!/usr/bin/env node
// Teste: o gpt-6.1-sol aceita `temperature`? Mesma rota e mesmo corpo do run.mjs (grupo spec),
// variando só o parâmetro. Sem retentativa. Grava status e erro, nunca a chave.
// Uso: node run-teste-temperatura-gpt.mjs [--out=results.teste-temperatura-gpt.json]
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
for (const f of [path.join(dir, '../../../.env'), path.join(dir, '.env')]) { try { process.loadEnvFile(f); } catch { /* ausente */ } }
const OUT = process.argv.slice(2).find((a) => a.startsWith('--out='))?.split('=')[1] ?? 'results.teste-temperatura-gpt.json';
const cfg = JSON.parse(await readFile(path.join(dir, 'config.json'), 'utf8'));
const m = cfg.models.find((x) => x.label === 'openai/gpt-6.1-sol');
const route = cfg.routes[m.via];
const KEY = process.env[route.keyEnv];
if (!KEY) { console.error(`Defina ${route.keyEnv} no .env.`); process.exit(1); }

const SPEC_SYSTEM = (await readFile(path.join(dir, 'run.mjs'), 'utf8')).match(/const SPEC_SYSTEM = \[([\s\S]*?)\]\.join/)[1];
const system = eval('[' + SPEC_SYSTEM + '].join("\\n")');
const prompts = (await import('node:fs')).readFileSync(path.join(dir, 'results.gpt61.json'), 'utf8');
const { specSchema } = JSON.parse(prompts).prompts;
const base = { model: m.model, [route.tokensParam]: 4000, messages: [{ role: 'system', content: system }, { role: 'user', content: cfg.input }], response_format: { type: 'json_schema', json_schema: specSchema } };

const casos = [
  { caso: 'sem temperature (como no experimento)', extra: {} },
  { caso: 'temperature: 0', extra: { temperature: 0 } },
  { caso: 'temperature: 1 (valor padrão)', extra: { temperature: 1 } }
];
const out = { startedAt: new Date().toISOString(), model: m.model, base: route.base, results: [] };
for (const c of casos) {
  for (let rep = 1; rep <= 3; rep++) {
    const t0 = Date.now(); let res, text = '', json = null;
    try { res = await fetch(route.base + '/chat/completions', { method: 'POST', signal: AbortSignal.timeout(120000), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` }, body: JSON.stringify({ ...base, ...c.extra }) }); text = await res.text(); try { json = JSON.parse(text); } catch { /* não-JSON */ } }
    catch (e) { text = String(e.message); }
    const content = json?.choices?.[0]?.message?.content ?? null;
    out.results.push({ caso: c.caso, temperatureSent: c.extra.temperature ?? null, rep, at: new Date().toISOString(), ms: Date.now() - t0, status: res?.status ?? 0, ok: !!res?.ok && content !== null, servedBy: json?.model ?? null, sha256: content ? createHash('sha256').update(content, 'utf8').digest('hex') : null, content, error: res?.ok ? null : (json?.error ?? text.slice(0, 300)) });
    const r = out.results.at(-1);
    console.log(`${c.caso} #${rep}: ${r.status} ${r.ok ? r.sha256.slice(0, 8) : JSON.stringify(r.error)}`);
  }
}
out.finishedAt = new Date().toISOString();
await writeFile(path.join(dir, OUT), JSON.stringify(out, null, 2));
console.log('Gravado em', OUT);
