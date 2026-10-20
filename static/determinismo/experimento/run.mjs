#!/usr/bin/env node
// Experimento: 4 modelos x N execuções, com e sem especificação.
// Uso:
//   OPENROUTER_API_KEY=... node experimento/run.mjs --list      confere IDs dos modelos
//   node experimento/run.mjs --dry                              mostra o plano, sem chamar a API
//   OPENROUTER_API_KEY=... node experimento/run.mjs             roda tudo e grava results.json
// Regras: prompts fixos antes de rodar, uma chamada por execução, sem retentativa, sem descartar saída.
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
// Chaves ficam no .env da raiz do repositório (ignorado pelo Git e fora de static/, que é publicado).
for (const f of [path.join(dir, '../../../.env'), path.join(dir, '.env')]) { try { process.loadEnvFile(f); } catch { /* arquivo ausente */ } }
const cfg = JSON.parse(await readFile(path.join(dir, 'config.json'), 'utf8'));
const args = new Set(process.argv.slice(2));
const arg = (n) => process.argv.slice(2).find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const ONLY = arg('only');            // filtra modelos pelo label (substring)
const OUT = arg('out') ?? 'results.json';
const DELAY = +(arg('delay') ?? 0);          // pausa (ms) entre chamadas: evita 429; não é retentativa
const GROUPS_ONLY = arg('groups')?.split(',');
const sha = (s) => createHash('sha256').update(s, 'utf8').digest('hex');
const MODELS = cfg.models.filter((m) => !ONLY || m.label.includes(ONLY));
const route = (m) => cfg.routes[m.via];
const keyOf = (m) => process.env[route(m).keyEnv];

// ---- Prompts (congelados) ----------------------------------------------------
const SPEC_SYSTEM = [
  'Você é o módulo de classificação de um chat de suporte. Siga a política billing.cancellation.v3.',
  'Política:',
  '- "cancelar" significa encerrar a assinatura ao fim do ciclo atual.',
  '- "reembolso do mês passado" significa reembolsar o ciclo de cobrança anterior.',
  '- Intenções permitidas: billing_agent, tech_support, security_review.',
  '- Ações permitidas: cancel_subscription, refund_previous_cycle. Liste em ordem alfabética.',
  'Responda somente com o JSON do schema. Nunca escreva texto fora do JSON.'
].join('\n');

const SPEC_SCHEMA = {
  name: 'decisao',
  strict: true,
  schema: {
    type: 'object',
    additionalProperties: false,
    required: ['intent', 'actions', 'refund_cycle'],
    properties: {
      intent: { type: 'string', enum: ['billing_agent', 'tech_support', 'security_review'] },
      actions: { type: 'array', items: { type: 'string', enum: ['cancel_subscription', 'refund_previous_cycle'] } },
      refund_cycle: { type: 'string', enum: ['previous'] }
    }
  }
};

const CONTROL_SYSTEM = 'Você atende clientes de uma assinatura. Responda ao cliente.';

const GROUPS = {
  spec: (input) => ({ messages: [{ role: 'system', content: SPEC_SYSTEM }, { role: 'user', content: input }], response_format: { type: 'json_schema', json_schema: SPEC_SCHEMA } }),
  control: (input) => ({ messages: [{ role: 'system', content: CONTROL_SYSTEM }, { role: 'user', content: input }] })
};

// ---- API ---------------------------------------------------------------------
async function api(m, pathname, init) {
  const r = route(m), key = keyOf(m);
  const res = await fetch(r.base + pathname, { ...init, signal: AbortSignal.timeout(180000), headers: { 'Content-Type': 'application/json', ...(key ? { Authorization: `Bearer ${key}` } : {}) } });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* corpo não-JSON */ }
  return { ok: res.ok, status: res.status, json, text };
}

async function catalog(m) {
  const r = await api(m, '/models');
  if (!r.ok) throw new Error(`/models falhou em ${m.via}: ${r.status}`);
  return new Map(r.json.data.map((x) => [x.id, x]));
}

async function plan() {
  const cats = {};
  const out = [];
  for (const m of MODELS) {
    cats[m.via] ??= await catalog(m);
    const x = cats[m.via].get(m.model);
    const sp = x?.supported_parameters ?? null;
    out.push({ ...m, exists: !!x, temperature: m.temperature ?? (sp ? sp.includes('temperature') : m.via === '9router'), pricing: x?.pricing ?? null });
  }
  return out;
}

if (args.has('--list')) {
  console.table((await plan()).map(({ pricing, ...r }) => r));
  process.exit(0);
}

if (args.has('--dry')) {
  console.log(JSON.stringify({ input: cfg.input, runsPerModel: cfg.runsPerModel, models: MODELS, calls: MODELS.length * cfg.runsPerModel * 2, out: OUT, groups: Object.keys(GROUPS) }, null, 2));
  console.log('\nSPEC system:\n' + SPEC_SYSTEM + '\n\nSCHEMA:\n' + JSON.stringify(SPEC_SCHEMA.schema));
  process.exit(0);
}

for (const m of MODELS) if (!keyOf(m)) { console.error(`Defina ${route(m).keyEnv} (em experimento/.env ou no ambiente).`); process.exit(1); }

const ps = await plan();
const missing = ps.filter((p) => !p.exists);
if (missing.length) { console.error('Modelos não encontrados:', missing.map((m) => `${m.via}:${m.model}`).join(', '), '\nUse --list e ajuste config.json.'); process.exit(1); }

const out = { startedAt: new Date().toISOString(), input: cfg.input, runsPerModel: cfg.runsPerModel, models: ps, prompts: { specSystem: SPEC_SYSTEM, specSchema: SPEC_SCHEMA, controlSystem: CONTROL_SYSTEM }, runs: [] };
const file = path.join(dir, OUT);

for (const p of ps) {
  for (const group of Object.keys(GROUPS).filter((g) => !GROUPS_ONLY || GROUPS_ONLY.includes(g))) {
    for (let i = 1; i <= cfg.runsPerModel; i++) {
      const body = { model: p.model, [route(p).tokensParam ?? 'max_tokens']: 4000, ...(route(p).stream === false ? { stream: false } : {}), ...GROUPS[group](cfg.input), ...(p.temperature ? { temperature: 0 } : {}), ...(p.provider ? { provider: p.provider } : {}) };
      const t0 = Date.now();
      let r;
      try { r = await api(p, '/chat/completions', { method: 'POST', body: JSON.stringify(body) }); }
      catch (e) { r = { ok: false, status: 0, json: null, text: String(e.message) }; }
      const content = r.json?.choices?.[0]?.message?.content ?? null;
      const rec = { model: p.label, via: p.via, requested: p.model, providerPinned: p.provider?.order?.[0] ?? null, group, run: i, at: new Date().toISOString(), ms: Date.now() - t0, status: r.status, ok: r.ok && content !== null, servedBy: r.json?.model ?? null, provider: r.json?.provider ?? null, usage: r.json?.usage ?? null, temperatureSent: p.temperature ? 0 : null, content, sha256: content === null ? null : sha(content), canonicalSha256: null, error: r.ok ? null : (r.json?.error ?? r.json?.message ?? r.text.slice(0, 300)) };
      if (group === 'spec' && content !== null) { try { rec.canonicalSha256 = sha(JSON.stringify(JSON.parse(content))); } catch { rec.canonicalSha256 = null; } }
      out.runs.push(rec);
      process.stdout.write(`${p.label} ${group} ${i}/${cfg.runsPerModel} ${rec.ok ? (rec.sha256 ?? '').slice(0, 8) : 'ERRO ' + rec.status}\n`);
      await writeFile(file, JSON.stringify(out, null, 2));
      if (DELAY) await new Promise((res) => setTimeout(res, DELAY));
    }
  }
}

out.finishedAt = new Date().toISOString();
await writeFile(file, JSON.stringify(out, null, 2));
console.log('\nGravado em', file, '\nRode: node experimento/analyze.mjs', OUT);
