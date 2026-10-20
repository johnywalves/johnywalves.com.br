#!/usr/bin/env node
// Slide 9: mesma pergunta, temperature=0 vs temperature=1. Dados reais, uma chamada por execução, sem retentativa.
// Prompts usados: (1) 'Qual é a capital da França? Responda em uma frase.' (fechado) e (2) 'Descreva Paris em uma frase.' (aberto).
// Uso: node run-temperatura.mjs [--prompt="..."] [--only=gemini] [--runs=10] [--delay=0] [--out=results.temperatura.json]
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
for (const f of [path.join(dir, '../../../.env'), path.join(dir, '.env')]) { try { process.loadEnvFile(f); } catch { /* ausente */ } }
const cfg = JSON.parse(await readFile(path.join(dir, 'config.json'), 'utf8'));
const arg = (n) => process.argv.slice(2).find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const ONLY = arg('only'), RUNS = +(arg('runs') ?? 10), DELAY = +(arg('delay') ?? 0), OUT = arg('out') ?? 'results.temperatura.json';
const PROMPT = arg('prompt') ?? 'Qual é a capital da França? Responda em uma frase.';
const TEMPS = [0, 1];
const sha = (s) => createHash('sha256').update(s, 'utf8').digest('hex');
// Só modelos que aceitam temperature.
const models = cfg.models.filter((m) => m.temperature !== false && m.label !== 'openai/gpt-6-luna' && (!ONLY || m.label.includes(ONLY)));
const out = { startedAt: new Date().toISOString(), prompt: PROMPT, runs: RUNS, temps: TEMPS, models: models.map((m) => ({ label: m.label, via: m.via, model: m.model })), results: [] };
const file = path.join(dir, OUT);

for (const m of models) {
  const r = cfg.routes[m.via], key = process.env[r.keyEnv];
  if (!key) { console.error(`Defina ${r.keyEnv} no .env da raiz.`); process.exit(1); }
  for (const temperature of TEMPS) {
    for (let i = 1; i <= RUNS; i++) {
      const body = { model: m.model, [r.tokensParam ?? 'max_tokens']: 4000, temperature, messages: [{ role: 'user', content: PROMPT }], ...(r.stream === false ? { stream: false } : {}), ...(m.provider ? { provider: m.provider } : {}) };
      const t0 = Date.now(); let res, text = '', json = null;
      try { res = await fetch(r.base + '/chat/completions', { method: 'POST', signal: AbortSignal.timeout(180000), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body: JSON.stringify(body) }); text = await res.text(); try { json = JSON.parse(text); } catch { /* não-JSON */ } }
      catch (e) { text = String(e.message); }
      const content = json?.choices?.[0]?.message?.content ?? null;
      const rec = { model: m.label, via: m.via, temperature, run: i, at: new Date().toISOString(), ms: Date.now() - t0, status: res?.status ?? 0, ok: !!res?.ok && content !== null, servedBy: json?.model ?? null, provider: json?.provider ?? null, usage: json?.usage ?? null, content, sha256: content === null ? null : sha(content), error: res?.ok ? null : (json?.error ?? json?.message ?? text.slice(0, 200)) };
      out.results.push(rec);
      process.stdout.write(`${m.label} t=${temperature} ${i}/${RUNS} ${rec.ok ? rec.sha256.slice(0, 8) : 'ERRO ' + rec.status}\n`);
      await writeFile(file, JSON.stringify(out, null, 2));
      if (DELAY) await new Promise((r2) => setTimeout(r2, DELAY));
    }
  }
}
out.finishedAt = new Date().toISOString();
await writeFile(file, JSON.stringify(out, null, 2));
console.log('\nGravado em', file);
