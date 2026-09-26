// Scores one arm output. Usage: tsx bench/planted-defects/judge.ts <file.md>
import OpenAI from 'openai';
import { readFileSync, writeFileSync } from 'node:fs';

const [test, arm] = process.argv.slice(2) as [string, string];
const file = `bench/planted-defects/tests/${test}/out/${arm}.md`;
const output = readFileSync(file, 'utf8');
const resume = readFileSync(`bench/planted-defects/tests/${test}/resume.txt`, 'utf8');
const key = JSON.parse(readFileSync(`bench/planted-defects/tests/${test}/key.json`, 'utf8')) as Array<{ id: string; line: string; defect: string }>;

const judge = new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY, baseURL: 'https://api.deepseek.com' });
const prompt = `You are grading a resume review. Below are the resume, a list of known defects, and the review.

Use exactly the defect ids listed below (${key.map((d) => d.id).join(', ')}), one entry each.

For each defect, decide whether the review identifies THAT problem on THAT line (or, for section-level defects, that problem in the resume). Credit it only if the review names the problem itself, not merely mentions the line or rewrites it in passing. A rewrite of the line that silently fixes the defect without saying what was wrong counts as found only if the rewrite clearly removes that specific defect.

Also report:
- coverage: does the review say what it did and did not look at (e.g. which parts were reviewed, what could not be checked)? true/false
- suggestions: how many distinct change suggestions the review makes (an integer)
- rewrites: every rewritten bullet or line the review proposes, copied verbatim (empty list if none)
- falsePositives: suggestions that claim a problem the resume does not actually have — asking for something the line already states, misreading a line, or a factual error about the resume. Not suggestions you merely disagree with. Quote each briefly.

Reply with JSON only:
{"defects":[{"id":"${key[0]!.id}","found":true,"evidence":"short quote from the review"}],"coverage":false,"suggestions":0,"rewrites":["..."],"falsePositives":["..."]}

<resume>
${resume}
</resume>

<defects>
${key.map((d) => `${d.id} — line: ${d.line}\n  defect: ${d.defect}`).join('\n')}
</defects>

<review>
${output}
</review>`;

const res = await judge.chat.completions.create({
  model: 'deepseek-v4-pro',
  messages: [{ role: 'user', content: prompt }],
  response_format: { type: 'json_object' },
  temperature: 0,
});
const verdict = JSON.parse(res.choices[0]!.message.content ?? '{}');
// Only ids from the key count. Measured: a judge once answered D1..D10 for a
// key of W/A/S/T/N ids, and every defect read as found.
const ids = new Set(key.map((d) => d.id));
const unknownIds = (verdict.defects ?? []).map((d: { id: string }) => d.id).filter((id: string) => !ids.has(id));
if (unknownIds.length > 0) throw new Error(`judge used ids not in the key: ${unknownIds.join(', ')}`);

// Mechanical checks.
const norm = (s: string) => s.toLowerCase().replace(/-\n/g, '').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ');
const hay = norm(resume);
const quotes = [...output.matchAll(/["\u201c]([^"\u201d\n]{12,300})["\u201d]/g)]
  .map((m) => m[1]!.replace(/(\.\.\.|\u2026|[.,;:])+$/, '').trim())
  .filter((q) => q.split(/\s+/).length >= 4);
const grounded = quotes.filter((q) => hay.includes(norm(q)));
const resumeNumbers = new Set((resume.replace(/,/g, '').match(/\d+(\.\d+)?/g) ?? []));
const invented = (verdict.rewrites as string[] ?? []).flatMap((r) =>
  (r.replace(/\[[^\]]*\]/g, ' ').replace(/\bp(50|90|95|99)\b/gi, ' ').replace(/,/g, '').match(/\d+(\.\d+)?/g) ?? []).filter((n) => !resumeNumbers.has(n)),
);

const result = {
  file,
  recall: (verdict.defects as Array<{ found: boolean }>).filter((d) => d.found).length,
  found: (verdict.defects as Array<{ id: string; found: boolean }>).filter((d) => d.found).map((d) => d.id),
  coverage: verdict.coverage,
  suggestions: verdict.suggestions,
  words: output.split(/\s+/).filter(Boolean).length,
  quotes: quotes.length,
  grounded: grounded.length,
  rewrites: (verdict.rewrites ?? []).length,
  inventedNumbers: invented,
  falsePositives: verdict.falsePositives ?? [],
  total: key.length,
  judgeUsage: res.usage,
  verdict,
};
writeFileSync(file.replace(/\.md$/, '.judge.json'), JSON.stringify(result, null, 2));
console.log(JSON.stringify({ test, arm, fp: result.falsePositives.length, recall: result.recall, found: result.found, coverage: result.coverage, suggestions: result.suggestions, words: result.words, grounded: `${grounded.length}/${quotes.length}`, invented }));
