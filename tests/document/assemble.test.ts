import { describe, expect, it } from 'vitest';

import { assemble } from '../../src/document/assemble.js';
import { PdfExtractor } from '../../src/document/extractors/pdf.js';
import { labelRows } from '../../src/document/row-labels.js';
import { findSectionBoundaries } from '../../src/document/section-boundaries.js';
import type { RowLabel, RowOwner, RowRole, SectionBoundary, VisualRow } from '../../src/document/types.js';

/**
 * B3: folding labelled rows into sections and entries.
 *
 * Built from labels written out by hand rather than from a page, because the
 * thing under test is that the assembler does what the labels say and nothing
 * else. A test that had to produce the labels first would pass or fail on B2's
 * judgement instead of on this.
 */
function rows(texts: string[]): VisualRow[] {
  let start = 0;
  return texts.map((text, index) => {
    const span = { start, end: start + text.length, page: 1 };
    start += text.length + 1;
    const style = { fontSize: 10, bold: false };

    return {
      index,
      text,
      page: 1,
      x: 72,
      y: 700 - index * 12,
      width: 200,
      fontSize: 10,
      bold: false,
      leading: style,
      dominant: style,
      fragments: [],
      span,
    };
  });
}

/**
 * `owner/role`, with `*` for `startsEntry` and `>n` for a content offset.
 *
 * One entry per body row: row 0 is the section heading, which B1 settled and
 * B2 never labels.
 */
function labels(spec: string[]): RowLabel[] {
  return spec.map((text, i) => {
    const rowIndex = i + 1;
    const [pair, ...flags] = text.split(' ');
    const [owner, role] = pair!.split('/') as [RowOwner, RowRole];
    const offset = flags.find((f) => f.startsWith('>'));

    return {
      rowIndex,
      role,
      owner,
      ...(flags.includes('*') ? { startsEntry: true } : {}),
      ...(offset ? { contentFrom: Number(offset.slice(1)) } : {}),
      confidence: 0.9,
      evidence: [],
    };
  });
}

function oneSection(document: VisualRow[], headed = true): SectionBoundary[] {
  return [
    {
      index: 0,
      ...(headed ? { headingRow: 0 } : {}),
      fromRow: headed ? 1 : 0,
      toRow: document.length,
      confidence: 0.95,
      evidence: [],
    },
  ];
}

describe('placing a row where its label says', () => {
  it('gives a section its own bullets and an entry its own', () => {
    const document = rows([
      'SUMMARY',
      '- Backend engineer with six years on payments',
      'NIO Inc. Hefei, China',
      '- Built an agent system that cut the backlog by 74%',
    ]);
    const [section] = assemble(
      document,
      oneSection(document),
      labels(['section/bullet >2', 'entry/header *', 'entry/bullet >2']),
    );

    expect(section!.bullets!.map((b) => b.text)).toEqual([
      'Backend engineer with six years on payments',
    ]);
    expect(section!.entries[0]!.bullets.map((b) => b.text)).toEqual([
      'Built an agent system that cut the backlog by 74%',
    ]);
  });

  it('separates what an entry is called from what it says about itself', () => {
    const document = rows([
      'PROJECTS',
      'ResumePilot | Owner',
      'Aug 2026 - Present',
      'github.com/sean/resumepilot',
      '- Improved defect localization from 27% to 73%',
    ]);
    const entry = assemble(
      document,
      oneSection(document),
      labels(['entry/header *', 'entry/header', 'entry/info', 'entry/bullet >2']),
    )[0]!.entries[0]!;

    expect(entry.headerLines).toEqual(['ResumePilot | Owner', 'Aug 2026 - Present']);
    expect(entry.infoLines).toEqual(['github.com/sean/resumepilot']);
    expect(entry.bullets).toHaveLength(1);
  });

  it('opens an entry only where the label says one starts', () => {
    const document = rows([
      'EDUCATION',
      'A University Seattle, WA',
      'M.S. in Engineering  2025 - 2027',
      'B University Nanjing, China',
      'B.S. in Engineering  2021 - 2025',
    ]);
    const [section] = assemble(
      document,
      oneSection(document),
      labels(['entry/header *', 'entry/header', 'entry/header *', 'entry/header']),
    );

    expect(section!.entries.map((e) => e.headerLines)).toEqual([
      ['A University Seattle, WA', 'M.S. in Engineering  2025 - 2027'],
      ['B University Nanjing, China', 'B.S. in Engineering  2021 - 2025'],
    ]);
  });

  it('slices the marker off by the offset it was given, without matching one', () => {
    // The judgement about what counts as a marker was made upstream. Repeating
    // it here would be a second opinion that could disagree with the first.
    const document = rows(['SUMMARY', '‣ A glyph no pattern here knows']);
    const [section] = assemble(
      document,
      oneSection(document),
      labels(['section/bullet >2']),
    );

    expect(section!.bullets!.map((b) => b.text)).toEqual(['A glyph no pattern here knows']);
  });

  it('leaves a row nobody labelled out, rather than placing it somewhere', () => {
    // Dropping it silently is the failure this pipeline exists to make
    // visible, so the coverage check downstream is left something to find.
    const document = rows(['EXPERIENCE', 'NIO Inc.', 'an unlabelled row', '- a bullet']);
    const [section] = assemble(document, oneSection(document), [
      { rowIndex: 1, role: 'header', owner: 'entry', startsEntry: true, confidence: 0.9, evidence: [] },
      { rowIndex: 3, role: 'bullet', owner: 'entry', contentFrom: 2, confidence: 0.9, evidence: [] },
    ]);

    expect(section!.entries[0]!.headerLines).toEqual(['NIO Inc.']);
    expect(section!.entries[0]!.bullets.map((b) => b.text)).toEqual(['a bullet']);
    expect(section!.infoLines).toEqual([]);
  });
});

describe('a continuation joins what the row above it went into', () => {
  function tail(spec: string[], texts: string[]): string[] {
    const document = rows(['HEADING', ...texts]);
    const [section] = assemble(document, oneSection(document), labels(spec));

    return [
      ...section!.infoLines!,
      ...section!.bullets!.map((b) => b.text),
      ...section!.entries.flatMap((e) => [...e.headerLines, ...(e.infoLines ?? []), ...e.bullets.map((b) => b.text)]),
    ];
  }

  it("joins the tail of a section's bullets", () => {
    expect(
      tail(['section/bullet >2', 'section/continuation'], ['- one that wraps', 'onto a second line']),
    ).toEqual(['one that wraps onto a second line']);
  });

  it("joins the tail of a section's prose", () => {
    expect(
      tail(['section/info', 'section/continuation'], ['a line that wraps', 'onto a second line']),
    ).toEqual(['a line that wraps onto a second line']);
  });

  it("joins the tail of an entry's bullets", () => {
    expect(
      tail(
        ['entry/header *', 'entry/bullet >2', 'entry/continuation'],
        ['NIO Inc.', '- one that wraps', 'onto a second line'],
      ),
    ).toEqual(['NIO Inc.', 'one that wraps onto a second line']);
  });

  it("joins the tail of an entry's header", () => {
    expect(
      tail(['entry/header *', 'entry/continuation'], ['NIO Inc. and a name that', 'wraps onto a second line']),
    ).toEqual(['NIO Inc. and a name that wraps onto a second line']);
  });

  it("joins the tail of an entry's own prose", () => {
    expect(
      tail(
        ['entry/header *', 'entry/info', 'entry/continuation'],
        ['NIO Inc.', 'a description that', 'wraps onto a second line'],
      ),
    ).toEqual(['NIO Inc.', 'a description that wraps onto a second line']);
  });

  it('keeps a continuation with nothing above it rather than dropping it', () => {
    // The words are the candidate's either way.
    expect(tail(['section/continuation'], ['nothing above this'])).toEqual(['nothing above this']);
  });
});

describe('what the assembler refuses to decide', () => {
  it('names no section', () => {
    // `kind` is read from the assembled shape, one stage later. A stage that
    // could both place a row and name its section would decide it twice.
    const document = rows(['EXPERIENCE', 'NIO Inc.', '- a bullet']);
    const [section] = assemble(
      document,
      oneSection(document),
      labels(['entry/header *', 'entry/bullet >2']),
    );

    expect(section!.kind).toBe('other');
    expect(section!.heading).toBe('EXPERIENCE');
  });

  it('keeps a row owned by an entry that no label opened', () => {
    // The rules never say this; a model's labels can. The choice is between
    // losing the row and holding an entry that named itself nothing.
    const document = rows(['EXPERIENCE', '- a bullet with no entry above it']);
    const [section] = assemble(document, oneSection(document), labels(['entry/bullet >2']));

    expect(section!.entries).toHaveLength(1);
    expect(section!.entries[0]!.headerLines).toEqual([]);
    expect(section!.entries[0]!.bullets.map((b) => b.text)).toEqual(['a bullet with no entry above it']);
  });
});

describe('what the document can be read back by', () => {
  const document = rows(['SKILLS', 'Python, TypeScript, SQL', '- Kubernetes']);
  const [section] = assemble(
    document,
    oneSection(document),
    labels(['section/info', 'section/bullet >2']),
  );

  it('numbers sections, entries and bullets so an id survives a re-parse', () => {
    const withEntry = rows(['EXPERIENCE', 'NIO Inc.', '- one', '- two']);
    const built = assemble(
      withEntry,
      oneSection(withEntry),
      labels(['entry/header *', 'entry/bullet >2', 'entry/bullet >2']),
    )[0]!;

    expect(built.id).toBe('s0');
    expect(built.entries[0]!.id).toBe('s0:e0');
    expect(built.entries[0]!.bullets.map((b) => b.id)).toEqual(['s0:e0:b0', 's0:e0:b1']);
    expect(built.entries[0]!.bullets.map((b) => b.entryId)).toEqual(['s0:e0', 's0:e0']);
  });

  it("writes a section's lines under both names while old sessions are read back", () => {
    expect(section!.infoLines).toEqual(['Python, TypeScript, SQL']);
    expect(section!.looseLines).toEqual(section!.infoLines);
  });

  it('points a bullet at its own words, past the marker', () => {
    const bullet = section!.bullets![0]!;
    const text = document.map((r) => r.text).join('\n');

    expect(text.slice(bullet.span.start, bullet.span.end)).toBe('Kubernetes');
  });

  it('covers the heading and the body in the section span', () => {
    const text = document.map((r) => r.text).join('\n');

    expect(text.slice(section!.span.start, section!.span.end)).toBe(text);
  });
});

describe('the sections a PDF actually produces', () => {
  async function build(name: string) {
    const extracted = await new PdfExtractor().extract(`tests/fixtures/${name}`);
    const document = extracted.rows!;
    const cut = findSectionBoundaries(document);
    return assemble(document, cut, labelRows(document, cut));
  }

  it('folds a real page into sections, entries and bullets', async () => {
    const sections = await build('hanging-indent.pdf');

    expect(
      sections.map((s) => ({
        heading: s.heading,
        info: s.infoLines!.length,
        bullets: s.bullets!.length,
        entries: s.entries.length,
      })),
    ).toEqual([
      { heading: '', info: 2, bullets: 0, entries: 0 },
      { heading: 'SUMMARY', info: 0, bullets: 1, entries: 0 },
      { heading: 'EXPERIENCE', info: 0, bullets: 0, entries: 1 },
      { heading: 'PROJECTS', info: 0, bullets: 0, entries: 1 },
      { heading: 'AWARDS', info: 2, bullets: 0, entries: 0 },
    ]);
  });

  it("joins a real page's wrapped bullet back into one bullet", async () => {
    const sections = await build('hanging-indent.pdf');

    expect(sections[1]!.bullets![0]!.text).toBe(
      'Backend engineer with six years on payment systems, measuring what shipped rather than what was planned.',
    );
  });

  it('keeps a bare date range with the entry it dates', async () => {
    const entry = (await build('hanging-indent.pdf'))[3]!.entries[0]!;

    expect(entry.headerLines).toEqual(['ResumePilot | Owner | TypeScript', 'Aug 2026 - Present']);
    expect(entry.bullets).toHaveLength(1);
  });

  it('resolves every bullet on a real page back to the text it came from', async () => {
    const extracted = await new PdfExtractor().extract('tests/fixtures/hanging-indent.pdf');
    const document = extracted.rows!;
    const cut = findSectionBoundaries(document);

    for (const section of assemble(document, cut, labelRows(document, cut))) {
      for (const bullet of [...section.bullets!, ...section.entries.flatMap((e) => e.bullets)]) {
        expect(extracted.rawText.slice(bullet.span.start, bullet.span.start + 10)).toBe(
          bullet.text.slice(0, 10),
        );
      }
    }
  });
});
