// Lists what one review says is wrong with which line, for code to score.
// Usage: TESTS=tests-v3 tsx bench/planted-defects/extract-claims.ts <test> <arm>
import OpenAI from 'openai';
import { readFileSync, writeFileSync } from 'node:fs';

const [test, arm] = process.argv.slice(2) as [string, string];
const dir = `bench/planted-defects/${process.env.TESTS ?? 'tests'}/${test}`;
const out = `${dir}/${process.env.OUT ?? 'out'}`;
const suffix = process.env.CLAIMS ?? (process.env.EXTRACTOR?.startsWith('sol') ? '.sol' : '');
let review = readFileSync(`${out}/${arm}.md`, 'utf8');
// ResumePilot's file holds the conversation; the review is the report in it.
if (arm === 'A' && review.includes('# Review')) review = review.slice(review.indexOf('# Review'));
const lines = readFileSync(`${dir}/source.txt`, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);
const numbered = lines.map((l, i) => `L${i + 1}: ${l}`).join('\n');

const prompt = `Below is a résumé with numbered lines, and a review of it. List every problem the review raises about the résumé.

For each problem give:
- line: the number of the résumé line it is about (use 0 when it is about the page as a whole: section order, dates across entries, overall length, an entry as a whole with no single line).
- kind:
  - "error" when the review says something on the line is wrong: a figure or calculation that is incorrect, a claim that is false, contradicted by the page or technically invalid, a method that cannot do what is claimed, a result that is misattributed or duplicated elsewhere, a misspelling, or content a résumé should not contain. A claim the review calls unsupported, unproven or not shown to be causal, without saying it is false, is a suggestion, unless the review itself marks that problem as an error (a label such as [Error], or calling it an error).
  - "suggestion" when the review says the line could be better: missing detail, vague wording, weak verb, order, length, style, anything to add, clarify or reword.
- says: the problem in one short sentence, in the review's own terms.
- because: the reason the review gives for it, in one short sentence in the review's own terms (empty when it gives none).

One item per distinct problem per line. Leave out praise, advice to keep something as it is, and general advice not tied to anything on the page. Report what the review says, not your own opinion of the résumé.

Reply with JSON only: {"items":[{"line":3,"kind":"error","says":"...","because":"..."}]}

<resume>
${numbered}
</resume>

<review>
${review}
</review>`;

// GPT-4.1 by default: no arm runs on it, so it reads every review as an outsider.
// EXTRACTOR=sol for gpt-6-sol at medium effort, sol-high for high (written beside, as .sol);
// EXTRACTOR=deepseek for the extractor the first F1 run used.
const which = process.env.EXTRACTOR ?? 'gpt';
let content = '';
let usage: unknown;
if (which.startsWith('sol')) {
  const res = await new OpenAI().responses.create({
    model: 'gpt-6-sol',
    input: prompt,
    reasoning: { effort: which === 'sol-high' ? 'high' : 'medium' },
    text: { format: { type: 'json_object' } },
  });
  content = res.output_text;
  usage = res.usage;
} else {
  const deepseek = which === 'deepseek';
  const client = deepseek
    ? new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY, baseURL: 'https://api.deepseek.com' })
    : new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const res = await client.chat.completions.create({
    model: deepseek ? 'deepseek-v4-pro' : 'gpt-4.1',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' },
    temperature: 0,
  });
  content = res.choices[0]!.message.content ?? '';
  usage = res.usage;
}
const items = JSON.parse(content || '{}').items ?? [];
writeFileSync(`${out}/${arm}.claims${suffix}.json`, JSON.stringify({ lines, items, usage }, null, 2));
console.log(test, arm, items.length, 'items', items.filter((i: { kind: string }) => i.kind === 'error').length, 'errors');
