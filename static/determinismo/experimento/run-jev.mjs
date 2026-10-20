#!/usr/bin/env node
// System One (Jev): 3 tipos de pergunta sobre a mesma mensagem, N chamadas idênticas. Dados reais, sem retentativa.
// Lê JEV_API_URL e JEV_API_KEY do .env da raiz do repositório (ignorado pelo Git).
// Uso: node run-jev.mjs [--runs=40] [--out=results.jev.json]
import { createHash } from 'node:crypto';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
for (const f of [path.join(dir, '../../../.env'), path.join(dir, '.env')]) { try { process.loadEnvFile(f); } catch { /* ausente */ } }
const arg = (n) => process.argv.slice(2).find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const RUNS = +(arg('runs') ?? 40), OUT = arg('out') ?? 'results.jev.json';
const { JEV_API_URL: URL_, JEV_API_KEY: KEY } = process.env;
if (!URL_ || !KEY) { console.error('Defina JEV_API_URL e JEV_API_KEY no .env da raiz.'); process.exit(1); }

const MODEL = 'openrouter/typesafe/jev-1.13';
const STATE = 'quero cancelar e pedir reembolso do mês passado';
const QUESTIONS = {
  urgente: { type: 'noul', instructions: 'O cliente pede uma ação urgente?' },
  intencao: { type: 'choice', instructions: 'Qual é a intenção do cliente?', criteria: { billing_agent: 'cobrança, cancelamento ou reembolso', tech_support: 'problema técnico', security_review: 'questão de segurança' } },
  grau: { type: 'score', instructions: 'Quão urgente é o pedido?', criteria: ['sem pressa', 'precisa de resposta hoje', 'crítico, perda imediata'] }
};
const sha = (s) => createHash('sha256').update(s, 'utf8').digest('hex');
const out = { startedAt: new Date().toISOString(), model: MODEL, state: STATE, questions: QUESTIONS, runs: RUNS, results: [] };
for (let i = 1; i <= RUNS; i++) {
  const t0 = Date.now(); let res, text = '', json = null;
  try { res = await fetch(URL_, { method: 'POST', signal: AbortSignal.timeout(60000), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` }, body: JSON.stringify({ model: MODEL, state: STATE, questions: QUESTIONS }) }); text = await res.text(); try { json = JSON.parse(text); } catch { /* não-JSON */ } }
  catch (e) { text = String(e.message); }
  out.results.push({ run: i, at: new Date().toISOString(), ms: Date.now() - t0, status: res?.status ?? 0, ok: !!res?.ok && !!json?.answers, servedBy: json?.model ?? null, provider: json?.provider ?? null, usage: json?.usage ?? null, answers: json?.answers ?? null, sha256: json?.answers ? sha(JSON.stringify(json.answers)) : null, error: res?.ok ? null : (json?.error ?? text.slice(0, 200)) });
  process.stdout.write(`${i}/${RUNS} ${out.results.at(-1).ok ? out.results.at(-1).sha256.slice(0, 8) : 'ERRO'}\n`);
  await writeFile(path.join(dir, OUT), JSON.stringify(out, null, 2));
}
out.finishedAt = new Date().toISOString();
await writeFile(path.join(dir, OUT), JSON.stringify(out, null, 2));
console.log('Gravado em', OUT);
