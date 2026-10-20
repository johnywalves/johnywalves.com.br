#!/usr/bin/env node
// Slide 28 (roteamento por confiança): 24 mensagens, 3 chamadas cada, pergunta `choice` de intenção.
// Mensagens, rótulos esperados e faixas de confiança CONGELADOS antes de rodar. Rótulos feitos por um humano (revisar).
// Faixas: Alta >= 0,90 | Média 0,60 a 0,89 | Baixa < 0,60.
// Uso: node run-jev-roteamento.mjs [--reps=3] [--out=results.jev-roteamento.json]
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
for (const f of [path.join(dir, '../../../.env'), path.join(dir, '.env')]) { try { process.loadEnvFile(f); } catch { /* ausente */ } }
const arg = (n) => process.argv.slice(2).find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const REPS = +(arg('reps') ?? 3), OUT = arg('out') ?? 'results.jev-roteamento.json';
const { JEV_API_URL: URL_, JEV_API_KEY: KEY } = process.env;
if (!URL_ || !KEY) { console.error('Defina JEV_API_URL e JEV_API_KEY no .env da raiz.'); process.exit(1); }

const MODEL = 'openrouter/typesafe/jev-1.13';
const QUESTION = { type: 'choice', instructions: 'Qual é a intenção do cliente?', criteria: { billing_agent: 'cobrança, fatura, plano, cancelamento ou reembolso', tech_support: 'problema técnico ou erro no produto', security_review: 'acesso indevido, conta invadida ou segurança da conta' } };
const B = 'billing_agent', T = 'tech_support', S = 'security_review';
// grupo: claro (1 rótulo) | ambigua (2 rótulos aceitáveis) | fora (nenhum rótulo serve)
const MSGS = [
  ['claro', 'quero cancelar e pedir reembolso do mês passado', [B]],
  ['claro', 'fui cobrado duas vezes no cartão este mês', [B]],
  ['claro', 'preciso da segunda via da fatura de agosto', [B]],
  ['claro', 'quero trocar meu plano para o anual', [B]],
  ['claro', 'o aplicativo fecha sozinho quando abro a tela de relatórios', [T]],
  ['claro', 'não consigo fazer upload de arquivos maiores que 10 MB', [T]],
  ['claro', 'a página de login fica carregando sem parar', [T]],
  ['claro', 'o botão de exportar para PDF não faz nada', [T]],
  ['claro', 'acho que alguém acessou minha conta sem permissão', [S]],
  ['claro', 'recebi um e-mail de login de um país onde nunca estive', [S]],
  ['claro', 'quero ativar a verificação em duas etapas', [S]],
  ['claro', 'perdi meu celular e preciso revogar meus acessos', [S]],
  ['ambigua', 'meu cartão foi cobrado e não consigo mais acessar a conta', [B, T]],
  ['ambigua', 'não reconheço uma cobrança e acho que invadiram minha conta', [B, S]],
  ['ambigua', 'o sistema travou na hora de pagar e perdi o acesso', [B, T]],
  ['ambigua', 'mudaram meu e-mail de cobrança e eu não fiz isso', [B, S]],
  ['ambigua', 'o login falha e recebi um aviso de tentativa suspeita', [T, S]],
  ['ambigua', 'preciso corrigir o CPF da fatura, mas o formulário dá erro', [B, T]],
  ['fora', 'qual é a capital da Austrália?', []],
  ['fora', 'me recomenda um filme para hoje à noite', []],
  ['fora', 'vocês têm vaga para desenvolvedor?', []],
  ['fora', 'quero falar com o setor comercial sobre uma parceria', []],
  ['fora', 'obrigado, ótimo atendimento!', []],
  ['fora', 'como faço bolo de cenoura?', []]
];
const out = { startedAt: new Date().toISOString(), model: MODEL, question: QUESTION, bands: { alta: '>= 0,90', media: '0,60 a 0,89', baixa: '< 0,60' }, reps: REPS, results: [] };
for (const [group, state, expected] of MSGS) {
  for (let rep = 1; rep <= REPS; rep++) {
    const t0 = Date.now(); let res, text = '', json = null;
    try { res = await fetch(URL_, { method: 'POST', signal: AbortSignal.timeout(60000), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` }, body: JSON.stringify({ model: MODEL, state, questions: { q: QUESTION } }) }); text = await res.text(); try { json = JSON.parse(text); } catch { /* não-JSON */ } }
    catch (e) { text = String(e.message); }
    const a = json?.answers?.q;
    out.results.push({ group, state, expected, rep, at: new Date().toISOString(), ms: Date.now() - t0, status: res?.status ?? 0, ok: !!a, servedBy: json?.model ?? null, choice: a?.choice ?? null, confidence: a?.confidence ?? null, probabilities: a?.probabilities ?? null, error: res?.ok ? null : (json?.error ?? text.slice(0, 200)) });
    process.stdout.write(`${group} ${rep} ${a ? a.choice + ' ' + a.confidence : 'ERRO'}\n`);
  }
  await writeFile(path.join(dir, OUT), JSON.stringify(out, null, 2));
}
out.finishedAt = new Date().toISOString();
await writeFile(path.join(dir, OUT), JSON.stringify(out, null, 2));
console.log('Gravado em', OUT);
