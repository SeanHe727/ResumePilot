import { describe, expect, it } from 'vitest';

import { assemble } from '../../src/document/assemble.js';
import { checkGrouping, groupingPrompt, toArrays } from '../../src/document/model-grouping.js';
import type { Checked, Grouped } from '../../src/document/model-grouping.js';
import type { VisualRow } from '../../src/document/types.js';

/**
 * The grouping a model returns, and what has to be true of it.
 *
 * The rules could not make this judgement: a project title set in body type with
 * a masked date is indistinguishable from a wrapped bullet however the geometry
 * is read, and every rule added to close that gap closed one shape and left the
 * next open. So a model groups, and the deterministic half of the work is
 * refusing an answer that would quietly lose part of a résumé.
 */
function rows(texts: string[]): VisualRow[] {
  let start = 0;
  return texts.map((text, i) => {
    const row: VisualRow = {
      text,
      x: 0,
      y: 700 - i * 12,
      page: 1,
      span: { start, end: start + text.length, page: 1 },
      dominant: { fontSize: 10, bold: false },
      runs: [],
    } as unknown as VisualRow;
    start += text.length + 1;
    return row;
  });
}

/** One position with a heading inside it, which is the case that matters. */
const DOCUMENT = rows([
  'EXPERIENCE',
  'A Company | Engineer | 2024 - Present',
  'Selected Projects',
  '- Built the routing layer',
  'which dispatched work to role-specific agents',
  '- Cut latency 71%',
]);

const GROUPED: Grouped = {
  sections: [
    {
      headingRowIds: [0],
      entries: [{ headerRowIds: [1], infoRowIds: [2], bulletRowIds: [3, 4, 5] }],
      looseRowIds: [],
    },
  ],
};

/**
 * Why it was refused, not merely that it was.
 *
 * These checks run in order, so an answer with two faults is caught by whichever
 * comes first — and a test that only asserts `ok: false` passes even when the
 * check it is about has been removed.
 */
const why = (result: Checked): string => (result.ok ? 'accepted' : result.because);

describe('refusing an answer that would lose part of the résumé', () => {
  it('takes one that accounts for every row', () => {
    expect(checkGrouping(GROUPED, DOCUMENT)).toMatchObject({ ok: true });
  });

  it('refuses a row claimed twice, which would print a line in two places', () => {
    const twice: Grouped = {
      sections: [{ headingRowIds: [0], entries: [{ headerRowIds: [1], bulletRowIds: [1, 2, 3, 4, 5] }] }],
    };

    expect(why(checkGrouping(twice, DOCUMENT))).toMatch(/claimed twice/);
  });

  it('refuses a row claimed by nobody, which would lose a line', () => {
    const missing: Grouped = {
      sections: [{ headingRowIds: [0], entries: [{ headerRowIds: [1], bulletRowIds: [3, 4, 5] }] }],
    };

    expect(why(checkGrouping(missing, DOCUMENT))).toMatch(/row 2 is claimed by nobody/);
  });

  it('refuses text where a row number belongs, because the words are already right', () => {
    const rewritten = {
      sections: [{ headingRowIds: ['EXPERIENCE'], entries: [{ headerRowIds: [1] }] }],
    };

    expect(why(checkGrouping(rewritten, DOCUMENT))).toMatch(/not a whole number/);
  });

  it('refuses an id that was never given', () => {
    const invented: Grouped = {
      sections: [{ headingRowIds: [0], entries: [{ headerRowIds: [1], bulletRowIds: [2, 3, 4, 5, 99] }] }],
    };

    expect(why(checkGrouping(invented, DOCUMENT))).toMatch(/one of the rows/);
  });

  it('refuses a resequenced list, which moves a paragraph under another heading', () => {
    const shuffled: Grouped = {
      sections: [{ headingRowIds: [0], entries: [{ headerRowIds: [1], bulletRowIds: [5, 3, 4, 2] }] }],
    };

    expect(why(checkGrouping(shuffled, DOCUMENT))).toMatch(/out of order/);
  });

  it('refuses a section whose rows are not one unbroken run', () => {
    // The assembler cuts a section out of the rows by range, so interleaved
    // sections cannot be cut at all.
    const interleaved: Grouped = {
      sections: [
        { headingRowIds: [0], entries: [{ headerRowIds: [1], bulletRowIds: [5] }] },
        { entries: [{ headerRowIds: [2], bulletRowIds: [3, 4] }] },
      ],
    };

    expect(why(checkGrouping(interleaved, DOCUMENT))).toMatch(/contiguous/);
  });

  it('refuses an answer that folds a named heading into the block above it', () => {
    // The one judgement not asked of the model: the named rows are given to it,
    // so an answer that swallows one is not an answer to the question. Measured
    // twice on one document with the same prompt — a `SUMMARY` heading kept once
    // and folded the next time — and losing a section satisfies every other rule
    // here, because it is a judgement rather than an accounting error.
    const folded: Grouped = {
      sections: [{ entries: [{ headerRowIds: [0, 1], infoRowIds: [2], bulletRowIds: [3, 4, 5] }] }],
    };

    expect(why(checkGrouping(folded, DOCUMENT, [0]))).toMatch(/row 0 names a section/);
  });

  it('takes the same answer when no heading was named', () => {
    const folded: Grouped = {
      sections: [{ entries: [{ headerRowIds: [0, 1], infoRowIds: [2], bulletRowIds: [3, 4, 5] }] }],
    };

    expect(checkGrouping(folded, DOCUMENT)).toMatchObject({ ok: true });
  });

  it('refuses an entry with no header, which would have nothing to be called', () => {
    const headerless: Grouped = {
      sections: [{ headingRowIds: [0], entries: [{ headerRowIds: [], bulletRowIds: [1, 2, 3, 4, 5] }] }],
    };

    expect(why(checkGrouping(headerless, DOCUMENT))).toMatch(/no header/);
  });
});

describe('converting it into what the assembler already takes', () => {
  it('names the section by its heading and covers its body', () => {
    const { boundaries } = toArrays(GROUPED, DOCUMENT);

    expect(boundaries).toEqual([
      expect.objectContaining({ index: 0, headingRow: 0, fromRow: 1, toRow: 6 }),
    ]);
  });

  it('opens the entry on the first header row only', () => {
    const two: Grouped = {
      sections: [{ headingRowIds: [0], entries: [{ headerRowIds: [1, 2], bulletRowIds: [3, 4, 5] }] }],
    };

    const { labels } = toArrays(two, DOCUMENT);

    expect(labels.filter((l) => l.startsEntry).map((l) => l.rowIndex)).toEqual([1]);
    expect(labels[0]).toMatchObject({ rowIndex: 1, role: 'header', owner: 'entry' });
    expect(labels[1]).toMatchObject({ rowIndex: 2, role: 'header', owner: 'entry' });
  });

  it('calls a line without a marker the rest of the bullet above it', () => {
    // The model is not asked which rows are wrapped remainders. Whether a line
    // carries a marker is mechanical, and asking would be asking it to do the
    // one part of this that is not a judgement.
    const { labels } = toArrays(GROUPED, DOCUMENT);

    // The section's heading row carries no label: the boundary names it, which
    // is how the rules leave it too.
    expect(labels.map((l) => `${l.rowIndex}:${l.role}`)).toEqual([
      '1:header',
      '2:info',
      '3:bullet',
      '4:continuation',
      '5:bullet',
    ]);
  });

  it('gives a bullet the offset its own words start at', () => {
    const { labels } = toArrays(GROUPED, DOCUMENT);

    expect(labels.find((l) => l.rowIndex === 3)?.contentFrom).toBe(2);
    expect(labels.find((l) => l.rowIndex === 4)?.contentFrom).toBeUndefined();
  });

  it('assembles into one entry, joining the wrapped line onto its bullet', () => {
    const { boundaries, labels } = toArrays(GROUPED, DOCUMENT);

    const sections = assemble(DOCUMENT, boundaries, labels);

    expect(sections).toHaveLength(1);
    expect(sections[0]!.entries).toHaveLength(1);
    expect(sections[0]!.entries[0]!.bullets.map((b) => b.text)).toEqual([
      'Built the routing layer which dispatched work to role-specific agents',
      'Cut latency 71%',
    ]);
  });

  it('keeps a heading inside a position inside that position', () => {
    // The regression this whole change is for. `Selected Projects` has bullets
    // under it and is not a second job; the rule that reads "a row with bullets
    // beneath it is naming them" cannot tell the difference, and a model reading
    // the page can.
    const { boundaries, labels } = toArrays(GROUPED, DOCUMENT);

    const sections = assemble(DOCUMENT, boundaries, labels);

    expect(sections[0]!.entries).toHaveLength(1);
    expect(sections[0]!.entries[0]!.infoLines).toContain('Selected Projects');
  });

  it('files a section that holds its own lines under the section', () => {
    const skills = rows(['SKILLS', 'Languages: TypeScript, Python', '- Go']);
    const flat: Grouped = { sections: [{ headingRowIds: [0], looseRowIds: [1, 2] }] };

    const { labels } = toArrays(flat, skills);

    expect(labels.map((l) => `${l.rowIndex}:${l.role}/${l.owner}`)).toEqual([
      '1:info/section',
      '2:bullet/section',
    ]);
  });
});

describe('what the model is shown', () => {
  it('numbers every row and says how it is set, without saying what it is', () => {
    const prompt = groupingPrompt(DOCUMENT, 10);

    expect(prompt).toContain('[0] size=1.00 plain gap=top :: EXPERIENCE');
    expect(prompt).toContain('[3] size=1.00 plain gap=1.2 :: - Built the routing layer');
    // No answer handed over: nothing in the prompt calls a row a header.
    expect(prompt).not.toMatch(/\[\d+\][^:]*header/);
  });

  it('says the rules that make an answer checkable', () => {
    const prompt = groupingPrompt(DOCUMENT, 10);

    expect(prompt).toContain('appears exactly once');
    expect(prompt).toContain('Return numbers only');
    expect(prompt).toContain('ascending order');
    expect(prompt).toContain('unbroken run');
  });

  it('warns about the case the rules get wrong', () => {
    expect(groupingPrompt(DOCUMENT, 10)).toContain('Selected Projects');
  });
});
