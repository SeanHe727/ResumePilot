// Runs the direct-model arms. Usage: tsx bench/planted-defects/arms.ts <arm> <run>
import OpenAI from 'openai';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const [arm, test] = process.argv.slice(2);
const resume = readFileSync(`bench/planted-defects/${process.env.TESTS ?? 'tests'}/${test}/resume.txt`, 'utf8');
// No rewritten lines or example rewrites: ResumePilot gives none, and a judge
// comparing reviews should compare what each found and explained, not one
// side's sample sentences against the other's silence.
const ask =
  `Please review my resume and tell me what to change. Don't rewrite my lines or give example ` +
  `rewrites — tell me what to change in each and why.\n\n${resume}`;
const ARMS: Record<string, { model: string; instructions?: string }> = {
  B: { model: 'gpt-6-luna' },
  C: { model: 'gpt-6-sol' },
  D: { model: 'gpt-6-luna', instructions: readFileSync('bench/planted-defects/skill-critique-framework.md', 'utf8') },
  // Three published résumé skills, each on luna as its system prompt.
  E: { model: 'gpt-6-luna', instructions: readFileSync('bench/planted-defects/skill-cyber-resume-reviewer.md', 'utf8') },
  F: { model: 'gpt-6-luna', instructions: readFileSync('bench/planted-defects/skill-resumeskills-tech-optimizer.md', 'utf8') },
  G: { model: 'gpt-6-luna', instructions: readFileSync('bench/planted-defects/skill-llm-intern.md', 'utf8') },
};
const cfg = ARMS[arm!]!;
const client = new OpenAI();
const started = Date.now();
const res = await client.responses.create({
  model: cfg.model,
  ...(cfg.instructions ? { instructions: cfg.instructions } : {}),
  input: ask,
  // Medium, as ResumePilot's readers run, so the arms differ in scaffolding
  // rather than in how hard each model is allowed to think.
  reasoning: { effort: 'medium' },
});
const dir = `bench/planted-defects/${process.env.TESTS ?? 'tests'}/${test}/${process.env.OUT ?? 'out'}`;
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/${arm}.md`, res.output_text);
writeFileSync(
  `${dir}/${arm}.usage.json`,
  JSON.stringify({ model: cfg.model, usage: res.usage, seconds: (Date.now() - started) / 1000 }, null, 2),
);
console.log(test, arm, 'done', res.usage?.input_tokens, res.usage?.output_tokens, ((Date.now() - started) / 1000).toFixed(0) + 's');
