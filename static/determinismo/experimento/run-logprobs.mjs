#!/usr/bin/env node
// Slide 7: distribuição real do primeiro token (logprobs) e frequência de 50 amostras em temperature=1.
// Modelo: Llama 4 Maverick via OpenRouter, provedor Parasail fixado. Prompt congelado antes de rodar (o do slide 6).
// Uso: node run-logprobs.mjs [--prompt="..."] [--samples=50] [--delay=2500] [--out=results.logprobs.json]
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
for (const f of [path.join(dir, '../../../.env'), path.join(dir, '.env')]) { try { process.loadEnvFile(f); } catch { /* ausente */ } }
const arg = (n) => process.argv.slice(2).find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const N = +(arg('samples') ?? 50), DELAY = +(arg('delay') ?? 2500), OUT = arg('out') ?? 'results.logprobs.json';
const KEY = process.env.OPENROUTER_API_KEY;
if (!KEY) { console.error('Defina OPENROUTER_API_KEY no .env da raiz.'); process.exit(1); }

// Prompts usados: (1) 'O cliente pode cancelar? Resposta:' (fechado: 99,95% em um token, sem graça) e (2) o prompt aberto abaixo, definido depois de ver (1).
const PROMPT = arg('prompt') ?? 'O cliente pode cancelar? Resposta:';
const MODEL = 'meta-llama/llama-4-maverick';
const out = { startedAt: new Date().toISOString(), model: MODEL, provider: 'Parasail (fixado)', prompt: PROMPT, temperature: 1, maxTokens: 1, topLogprobs: 10, results: [] };
for (let i = 1; i <= N; i++) {
  const body = { model: MODEL, max_tokens: 1, temperature: 1, logprobs: true, top_logprobs: 10, provider: { order: ['Parasail'], allow_fallbacks: false }, messages: [{ role: 'user', content: PROMPT }] };
  const t0 = Date.now(); let res, text = '', json = null;
  try { res = await fetch('https://openrouter.ai/api/v1/chat/completions', { method: 'POST', signal: AbortSignal.timeout(60000), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` }, body: JSON.stringify(body) }); text = await res.text(); try { json = JSON.parse(text); } catch { /* não-JSON */ } }
  catch (e) { text = String(e.message); }
  const lp = json?.choices?.[0]?.logprobs?.content?.[0];
  const rec = { run: i, at: new Date().toISOString(), ms: Date.now() - t0, status: res?.status ?? 0, ok: !!lp, provider: json?.provider ?? null, token: lp?.token ?? json?.choices?.[0]?.message?.content ?? null, top: lp?.top_logprobs?.map((t) => ({ token: t.token, p: Math.exp(t.logprob) })) ?? null, error: res?.ok ? null : (json?.error ?? text.slice(0, 200)) };
  out.results.push(rec);
  process.stdout.write(`${i}/${N} ${rec.ok ? JSON.stringify(rec.token) : 'ERRO ' + rec.status}\n`);
  await writeFile(path.join(dir, OUT), JSON.stringify(out, null, 2));
  if (DELAY) await new Promise((r) => setTimeout(r, DELAY));
}
out.finishedAt = new Date().toISOString();
await writeFile(path.join(dir, OUT), JSON.stringify(out, null, 2));
console.log('Gravado em', OUT);
