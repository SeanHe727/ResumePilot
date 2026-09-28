// Lists what one review says is wrong with which line, for code to score.
// Usage: TESTS=tests-v3 tsx bench/planted-defects/extract-claims.ts <test> <arm>
import OpenAI from 'openai';
import { readFileSync, writeFileSync } from 'node:fs';

const [test, arm] = process.argv.slice(2) as [string, string];
const dir = `bench/planted-defects/${process.env.TESTS ?? 'tests'}/${test}`;
let review = readFileSync(`${dir}/out/${arm}.md`, 'utf8');
// ResumePilot's file holds the conversation; the review is the report in it.
if (arm === 'A' && review.includes('# Review')) review = review.slice(review.indexOf('# Review'));
const lines = readFileSync(`${dir}/source.txt`, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);
const numbered = lines.map((l, i) => `L${i + 1}: ${l}`).join('\n');

const prompt = `Below is a résumé with numbered lines, and a review of it. List every problem the review raises about the résumé.

For each problem give:
- line: the number of the résumé line it is about (use 0 when it is about the page as a whole: section order, dates across entries, overall length, an entry as a whole with no single line).
- kind:
  - "error" when the review says something on the line is wrong: a figure or calculation that is incorrect, a claim that is false, contradicted by the page or technically invalid, a method that cannot do what is claimed, a result that is misattributed or duplicated elsewhere, a misspelling, or content a résumé should not contain.
  - "suggestion" when the review says the line could be better: missing detail, vague wording, weak verb, order, length, style, anything to add, clarify or reword.
- says: the problem in one short sentence, in the review's own terms.

One item per distinct problem per line. Leave out praise, advice to keep something as it is, and general advice not tied to anything on the page. Report what the review says, not your own opinion of the résumé.

Reply with JSON only: {"items":[{"line":3,"kind":"error","says":"..."}]}

<resume>
${numbered}
</resume>

<review>
${review}
</review>`;

const client = new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY, baseURL: 'https://api.deepseek.com' });
const res = await client.chat.completions.create({
  model: 'deepseek-v4-pro',
  messages: [{ role: 'user', content: prompt }],
  response_format: { type: 'json_object' },
  temperature: 0,
});
const items = JSON.parse(res.choices[0]!.message.content ?? '{}').items ?? [];
writeFileSync(`${dir}/out/${arm}.claims.json`, JSON.stringify({ lines, items, usage: res.usage }, null, 2));
console.log(test, arm, items.length, 'items', items.filter((i: { kind: string }) => i.kind === 'error').length, 'errors');
