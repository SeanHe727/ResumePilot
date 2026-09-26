import { readdirSync, readFileSync } from 'node:fs';
import { DefaultResumeParser } from '../../src/document/parser.js';
import { buildTimeline, renderTimeline } from '../../src/document/timeline.js';
const now = new Date('2026-09-26');
for (const t of readdirSync('bench/planted-defects/tests').filter((d) => !d.endsWith('.json')).sort()) {
  const doc = await new DefaultResumeParser().parse(`bench/planted-defects/tests/${t}/resume.pdf`);
  const tl = buildTimeline(doc, now);
  let key: string[] = [];
  try { key = JSON.parse(readFileSync(`bench/planted-defects/tests/${t}/key.json`, 'utf8')).map((k: { id: string }) => k.id); } catch {}
  const want = ['D7', 'D10', 'D14'].filter((d) => key.includes(d));
  const got = [tl.outOfOrder.length ? 'D7' : '', tl.gaps.length ? 'D10' : '', tl.impossible.length ? 'D14' : ''].filter(Boolean);
  console.log(t.padEnd(12), 'expected', want.join(',') || '-', '| computed', got.join(',') || '-', want.join() === got.join() ? 'OK' : 'MISMATCH');
  if (t === 'b1-quant') console.log(renderTimeline(tl));
}
