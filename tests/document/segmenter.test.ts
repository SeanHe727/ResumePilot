import { describe, expect, it } from 'vitest';

import {
  HeuristicStructureBuilder,
  ModelDocumentSegmenter,
} from '../../src/document/index.js';
import type { ExtractionResult, LabelledLine, TextBlock } from '../../src/document/types.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';

function blocks(...lines: string[]): TextBlock[] {
  let offset = 0;
  return lines.map((text) => {
    const span = { start: offset, end: offset + text.length };
    offset += text.length + 1;
    return { text, page: 1, span };
  });
}

function extraction(lines: string[]): ExtractionResult {
  return {
    format: 'pdf',
    rawText: lines.join('\n'),
    blocks: blocks(...lines),
    quality: 'clean',
    layoutWarnings: [],
  };
}

function engineReturning(content: string) {
  const seen: QueryParams[] = [];
  const engine: QueryEngine = {
    async query(params) {
      seen.push(params);
      return {
        type: 'text',
        content,
        usage: { inputTokens: 0, outputTokens: 0 },
        stopReason: 'end_turn',
      } satisfies ParsedResponse;
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
  return { engine, seen };
}

const LINES = [
  'Sean He',
  'EXPERIENCE',
  'NIO Inc. Hefei, China',
  '- Built the workflow: orchestrated a topology forming a',
  'three-stage pipeline that flags issues from 1,000+ signals.',
  'SKILLS',
  'Python, TypeScript, SQL',
];

const LABELS: LabelledLine[] = [
  { index: 0, role: 'loose' },
  { index: 1, role: 'section-heading', kind: 'experience' },
  { index: 2, role: 'entry-header' },
  { index: 3, role: 'bullet' },
  { index: 4, role: 'continuation' },
  { index: 5, role: 'section-heading', kind: 'skills' },
  { index: 6, role: 'loose' },
];

describe('ModelDocumentSegmenter', () => {
  it('labels every line, by number', async () => {
    const { engine, seen } = engineReturning(JSON.stringify({ lines: LABELS }));

    const labels = await new ModelDocumentSegmenter(engine).segment(extraction(LINES));

    expect(labels).toEqual(LABELS);
    expect(seen[0]?.task).toBe('split_sections');
    // Constrained generation, because the reply is parsed as JSON.
    expect(seen[0]?.jsonMode).toBe(true);
  });

  it('sends the line numbers the labels come back against', async () => {
    const { engine, seen } = engineReturning(JSON.stringify({ lines: LABELS }));

    await new ModelDocumentSegmenter(engine).segment(extraction(LINES));

    const sent = seen[0]?.messages[0]?.content ?? '';
    expect(sent).toContain('1: EXPERIENCE');
    // Wrapped in tags, like every other place resume text reaches a model.
    expect(sent).toContain('<resume_lines>');
  });

  it('gives up rather than labelling half a document', async () => {
    // A line with no role is a line the builder has to guess about, which is
    // the rules applied to a document they were not asked about, mixed with
    // labels they know nothing of.
    const { engine } = engineReturning(JSON.stringify({ lines: LABELS.slice(0, 3) }));

    expect(await new ModelDocumentSegmenter(engine).segment(extraction(LINES))).toBeNull();
  });

  it('rejects a role it does not recognise', async () => {
    const rows = [...LABELS];
    rows[2] = { index: 2, role: 'employer' as never };
    const { engine } = engineReturning(JSON.stringify({ lines: rows }));

    expect(await new ModelDocumentSegmenter(engine).segment(extraction(LINES))).toBeNull();
  });

  it('rejects duplicate line numbers', async () => {
    const rows = LABELS.map((l) => ({ ...l, index: 0 }));
    const { engine } = engineReturning(JSON.stringify({ lines: rows }));

    expect(await new ModelDocumentSegmenter(engine).segment(extraction(LINES))).toBeNull();
  });

  it('falls back rather than failing when the call does', async () => {
    const engine = {
      async query() {
        throw new Error('provider down');
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    } as unknown as QueryEngine;

    expect(await new ModelDocumentSegmenter(engine).segment(extraction(LINES))).toBeNull();
  });

  it('does not send a document too large to be a resume', async () => {
    const { engine, seen } = engineReturning('{}');
    const huge = Array.from({ length: 500 }, (_, i) => `line ${i}`);

    expect(await new ModelDocumentSegmenter(engine).segment(extraction(huge))).toBeNull();
    expect(seen).toHaveLength(0);
  });
});

describe('building from labels', () => {
  function build(labels: LabelledLine[]) {
    return new HeuristicStructureBuilder().build(extraction(LINES), [], 'resume.pdf', labels);
  }

  it('assembles sections, entries and bullets from the roles alone', () => {
    const doc = build(LABELS);

    expect(doc.sections.map((s) => s.kind)).toEqual(['contact', 'experience', 'skills']);
    expect(doc.sections[1]?.entries).toHaveLength(1);
    expect(doc.sections[1]?.entries[0]?.bullets).toHaveLength(1);
  });

  it('joins a continuation onto the bullet above it', () => {
    // PDF extraction gives one block per visual line and only the first
    // carries the marker, so a wrapped bullet arrives as two or three blocks.
    const doc = build(LABELS);
    const bullet = doc.sections[1]?.entries[0]?.bullets[0];

    expect(bullet?.text).toContain('forming a three-stage pipeline');
    expect(bullet?.text).toMatch(/1,000\+ signals\.$/);
  });

  it('puts what precedes the first heading in the contact block', () => {
    const doc = build(LABELS);

    expect(doc.sections[0]?.looseLines).toEqual(['Sean He']);
  });

  it('keeps a skills list as lines rather than inventing an entry', () => {
    const doc = build(LABELS);

    expect(doc.sections[2]?.entries).toEqual([]);
    expect(doc.sections[2]?.looseLines).toEqual(['Python, TypeScript, SQL']);
  });

  it('falls back to the rules when the labels do not cover the document', () => {
    // A short count means the model and the extractor disagree about what the
    // document is, and half a labelling is worse than none.
    const doc = new HeuristicStructureBuilder().build(
      extraction(LINES),
      [{ kind: 'experience', heading: 'EXPERIENCE', confidence: 1, span: { start: 8, end: 18 } }],
      'resume.pdf',
      LABELS.slice(0, 2),
    );

    expect(doc.sections.some((s) => s.heading === 'EXPERIENCE')).toBe(true);
  });
});
