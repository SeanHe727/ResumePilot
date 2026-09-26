// Runs the direct-model arms. Usage: tsx bench/planted-defects/arms.ts <arm> <run>
import OpenAI from 'openai';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const [arm, test] = process.argv.slice(2);
const resume = readFileSync(`bench/planted-defects/tests/${test}/resume.txt`, 'utf8');
const ask = `Please review my resume and tell me what to change.\n\n${resume}`;
const ARMS: Record<string, { model: string; instructions?: string }> = {
  B: { model: 'gpt-5.6-luna' },
  C: { model: 'gpt-5.6-sol' },
  D: { model: 'gpt-5.6-luna', instructions: readFileSync('bench/planted-defects/skill-tech-resume-optimizer.md', 'utf8') },
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
const dir = `bench/planted-defects/tests/${test}/out`;
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/${arm}.md`, res.output_text);
writeFileSync(
  `${dir}/${arm}.usage.json`,
  JSON.stringify({ model: cfg.model, usage: res.usage, seconds: (Date.now() - started) / 1000 }, null, 2),
);
console.log(test, arm, 'done', res.usage?.input_tokens, res.usage?.output_tokens, ((Date.now() - started) / 1000).toFixed(0) + 's');
