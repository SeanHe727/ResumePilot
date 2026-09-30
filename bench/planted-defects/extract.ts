import { readdirSync, writeFileSync } from 'node:fs';
import { PdfExtractor } from '../../src/document/index.js';
for (const id of readdirSync(`bench/planted-defects/${process.env.TESTS ?? 'tests'}`)) {
  if (id.endsWith('.json')) continue;
  const ex = await new PdfExtractor().extract(`bench/planted-defects/${process.env.TESTS ?? 'tests'}/${id}/resume.pdf`);
  writeFileSync(`bench/planted-defects/${process.env.TESTS ?? 'tests'}/${id}/resume.txt`, ex.rawText);
  console.log(id, ex.quality, ex.pageCount, ex.rawText.split(/\s+/).filter(Boolean).length, 'words');
}
