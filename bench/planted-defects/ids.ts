// Writes tests/<id>/ids.json: each line id the parser gave, with the line's text,
// so the blind bundle can name a line by its words rather than by its id.
import { writeFileSync } from 'node:fs';
import { DefaultResumeParser } from '../../src/document/parser.js';
for (const t of process.argv.slice(2)) {
  const doc = await new DefaultResumeParser().parse(`bench/planted-defects/tests/${t}/resume.pdf`);
  const ids: Record<string, string> = {};
  for (const s of doc.sections) for (const e of s.entries) {
    ids[e.id] = e.headerLines[0] ?? e.id;
    for (const b of e.bullets) ids[b.id] = b.text;
  }
  writeFileSync(`bench/planted-defects/tests/${t}/ids.json`, JSON.stringify(ids, null, 2));
  console.log(t, Object.keys(ids).length);
}
