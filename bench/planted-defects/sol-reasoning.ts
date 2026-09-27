// Runs arm C once with OpenAI's reasoning summary on, to see how it reads a resume.
// Usage: tsx bench/planted-defects/sol-reasoning.ts <test>
import OpenAI from 'openai';
import { readFileSync, writeFileSync } from 'node:fs';

const [test] = process.argv.slice(2);
const resume = readFileSync(`bench/planted-defects/tests/${test}/resume.txt`, 'utf8');
const ask =
  `Please review my resume and tell me what to change. Don't rewrite my lines or give example ` +
  `rewrites — tell me what to change in each and why.\n\n${resume}`;
const res = await new OpenAI().responses.create({
  model: 'gpt-5.6-sol',
  input: ask,
  reasoning: { effort: 'medium', summary: 'detailed' },
});
const summary = res.output
  .filter((o) => o.type === 'reasoning')
  .flatMap((o) => ('summary' in o ? o.summary.map((s) => s.text) : []))
  .join('\n\n');
const dir = `bench/planted-defects/tests/${test}/out`;
writeFileSync(`${dir}/C-reasoning.md`, `# Reasoning summary\n\n${summary}\n\n# Answer\n\n${res.output_text}`);
console.log(JSON.stringify(res.usage));
