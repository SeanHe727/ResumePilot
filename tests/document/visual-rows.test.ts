import { describe, expect, it } from 'vitest';

import { layOutRows, type PageLayout } from '../../src/document/extractors/pdf.js';
import type { TextRun } from '../../src/document/types.js';

/**
 * A1: a visual row is everything on one baseline, not everything the file drew
 * in a row.
 *
 * pdf.js hands back the content stream's drawing order, and a resume built
 * with a right-aligned date commonly emits that date after the line below it.
 * Merged by drawing order it became a row of its own, set in a larger size
 * than the title beside it, and the structure builder then picked the date as
 * the entry's name — a real resume parsed into four entries, two of them empty
 * shells and two named after a date range, where there were two.
 *
 * Built from synthetic runs rather than PDFs: the thing under test is the
 * regrouping, and a fixture would only put pdf.js in front of it.
 */
function run(text: string, x: number, y: number, style: Partial<TextRun> = {}): TextRun {
  return {
    text,
    x,
    y,
    width: text.length * 5,
    page: 1,
    fontSize: 10,
    bold: false,
    ...style,
  };
}

function page(runs: TextRun[], number = 1): PageLayout {
  return {
    number,
    geometry: { width: 612, height: 792 },
    runs: runs.map((r) => ({ ...r, page: number })),
    // `layOutRows` reads `runs` and nothing else. `styled` is the naive view
    // the column guard measures, and the guard has already had its say by the
    // time rows are rebuilt — that ordering is what makes the rebuild sound.
    styled: [],
    columns: { multiColumn: false, leftLines: runs.length, rightLines: 0 },
  };
}

describe('rebuilding visual rows', () => {
  it('puts a run drawn after the line below back on its own baseline', () => {
    const { rows } = layOutRows([
      page([
        run('ByteDance - Backend Intern', 72, 640, { width: 120, fontSize: 11 }),
        run('- Reduced P99 latency', 72, 624, { width: 110 }),
        run('2025.06 - 2025.09', 430, 640, { width: 90, fontSize: 12 }),
      ]),
    ]);

    expect(rows.map((r) => r.text)).toEqual([
      'ByteDance - Backend Intern 2025.06 - 2025.09',
      '- Reduced P99 latency',
    ]);
  });

  it('orders a row left to right even when its runs sit a point apart', () => {
    // Reading order sorts by baseline before x, so the runs of a row whose
    // baselines differ by a point arrive grouped but not in reading order.
    const { rows } = layOutRows([
      page([
        run('Seattle, WA', 430, 700.5, { width: 50 }),
        run('Amazon x UW', 72, 699, { width: 60 }),
      ]),
    ]);

    expect(rows[0]!.text).toBe('Amazon x UW Seattle, WA');
  });

  it('numbers the rows in reading order across pages', () => {
    const { rows } = layOutRows([
      page([run('second', 72, 400), run('first', 72, 700)], 1),
      page([run('third', 72, 700)], 2),
    ]);

    expect(rows.map((r) => r.text)).toEqual(['first', 'second', 'third']);
    expect(rows.map((r) => r.index)).toEqual([0, 1, 2]);
  });

  it('never joins rows on different pages that share a baseline', () => {
    const { rows } = layOutRows([page([run('page one', 72, 700)], 1), page([run('page two', 72, 700)], 2)]);

    expect(rows.map((r) => r.text)).toEqual(['page one', 'page two']);
    expect(rows.map((r) => r.page)).toEqual([1, 2]);
  });

  it('takes the largest size and any bold on the row', () => {
    // An emphasized word makes the row emphasized: section detection reads one
    // size per row, and the smaller half of a mixed row would hide the signal.
    const { rows } = layOutRows([
      page([
        run('Company', 72, 700, { width: 40, bold: true }),
        run('2025', 200, 700, { width: 20, fontSize: 12 }),
      ]),
    ]);

    expect(rows[0]!.fontSize).toBe(12);
    expect(rows[0]!.bold).toBe(true);
  });

  it('spans the row from its leftmost run to its rightmost', () => {
    const { rows } = layOutRows([
      page([run('left', 72, 700, { width: 40 }), run('right', 430, 700, { width: 90 })]),
    ]);

    expect(rows[0]!.x).toBe(72);
    expect(rows[0]!.width).toBe(448);
  });
});

describe('putting runs back into words', () => {
  it('does not invent a space where a word was split mid-kerning', () => {
    // pdf.js splits a run wherever the kerning changes, so half the words on a
    // page arrive in two pieces.
    const { rows } = layOutRows([
      page([run('Bench', 72, 700, { width: 30 }), run('marking', 102, 700, { width: 40 })]),
    ]);

    expect(rows[0]!.text).toBe('Benchmarking');
  });

  it('inserts a space where the page left one', () => {
    const { rows } = layOutRows([
      page([run('Sean', 72, 700, { width: 20 }), run('Chen', 100, 700, { width: 20 })]),
    ]);

    expect(rows[0]!.text).toBe('Sean Chen');
  });

  it('holds a word together across a float-sized difference', () => {
    // A size is recovered as `hypot` of the text matrix, so two runs set in the
    // same font can differ in the last bits. Compared exactly, that reads as a
    // change of type and puts a space in the middle of a word.
    const { rows } = layOutRows([
      page([
        run('Bench', 72, 700, { width: 30, fontSize: 10 }),
        run('marking', 102, 700, { width: 40, fontSize: 10.000000000000002 }),
      ]),
    ]);

    expect(rows[0]!.text).toBe('Benchmarking');
  });

  it('separates runs the page set in different sizes, gap or no gap', () => {
    // Measured on a real resume: a full-width entry header whose right-aligned
    // date begins, to a tenth of a point, exactly where the description ends.
    // On the gap alone the two join into a word nobody wrote, and the date
    // parser then reads the tail of the previous word as a month name.
    const { rows } = layOutRows([
      page([
        run('Agent Benchmarking', 286.6, 215.1, { width: 212.8 }),
        run('Feb 2026 - Jul 2026', 499.3, 215.1, { width: 93.6, fontSize: 10.9 }),
      ]),
    ]);

    expect(rows[0]!.text).toBe('Agent Benchmarking Feb 2026 - Jul 2026');
  });

  it('trims the row at its ends without moving the offsets inside it', () => {
    const { rows, rawText } = layOutRows([
      page([run('  Skills:', 72, 700, { width: 40 }), run('TypeScript  ', 120, 700, { width: 60 })]),
    ]);

    expect(rawText).toBe('Skills: TypeScript\n');
    expect(rows[0]!.text).toBe('Skills: TypeScript');
  });
});

describe('how a row reads', () => {
  it('does not let a larger date on the right carry the whole row', () => {
    // `fontSize` is the maximum, which answers "is anything here emphasized".
    // For "is this a section heading" that is the wrong question: a body row
    // with a date set a point larger reads as a heading through the maximum.
    const { rows } = layOutRows([
      page([
        run('Machine Learning Engineer, EdgeDiffuse Capstone', 72, 700, { width: 250 }),
        run('Dec 2025 - Jun 2026', 430, 700, { width: 90, fontSize: 12 }),
      ]),
    ]);

    expect(rows[0]!.fontSize).toBe(12);
    expect(rows[0]!.dominant.fontSize).toBe(10);
    expect(rows[0]!.leading.fontSize).toBe(10);
  });

  it('does not let one bold word carry the whole row', () => {
    const { rows } = layOutRows([
      page([
        run('Programming: ', 72, 700, { width: 60 }),
        run('Python', 140, 700, { width: 30, bold: true }),
        run(', TypeScript, SQL, Bash, Git', 180, 700, { width: 140 }),
      ]),
    ]);

    expect(rows[0]!.bold).toBe(true);
    expect(rows[0]!.dominant.bold).toBe(false);
    expect(rows[0]!.leading.bold).toBe(false);
  });

  it('counts the dominant style in characters, not in runs', () => {
    // A run is however much text the file emitted in one go: a date on the
    // right is one run and the sentence beside it is often four.
    const { rows } = layOutRows([
      page([
        run('a', 72, 700, { width: 5, fontSize: 14 }),
        run('bb', 100, 700, { width: 10, fontSize: 14 }),
        run('cccccccccc', 140, 700, { width: 50, fontSize: 10 }),
      ]),
    ]);

    expect(rows[0]!.dominant.fontSize).toBe(10);
    expect(rows[0]!.leading.fontSize).toBe(14);
  });

  it('reads a genuine heading through every measure', () => {
    const { rows } = layOutRows([page([run('EXPERIENCE', 72, 700, { width: 70, fontSize: 13 })])]);

    expect(rows[0]!.fontSize).toBe(13);
    expect(rows[0]!.dominant.fontSize).toBe(13);
    expect(rows[0]!.leading.fontSize).toBe(13);
  });
});

describe('row provenance', () => {
  const laid = layOutRows([
    page([
      run('Sean Chen', 72, 720, { width: 80, fontSize: 16, bold: true }),
      run('ByteDance - Backend Intern', 72, 640, { width: 120, fontSize: 11 }),
      run('2025.06 - 2025.09', 430, 640, { width: 90, fontSize: 12 }),
    ]),
    page([run('- Migrated 12 services', 72, 700, { width: 110 })], 2),
  ]);

  it('resolves every row back to the text it was rendered into', () => {
    for (const row of laid.rows) {
      expect(laid.rawText.slice(row.span.start, row.span.end)).toBe(row.text);
    }
  });

  it('resolves every fragment back to its own characters', () => {
    // The old lookup was keyed on object identity, so nothing survived the
    // merge. Fragments carry the offsets, which is what lets a finding point
    // at the run it came from rather than at the line it ended up in.
    const fragments = laid.rows.flatMap((r) => r.fragments);
    expect(fragments).toHaveLength(4);

    for (const fragment of fragments) {
      expect(laid.rawText.slice(fragment.span.start, fragment.span.end)).toBe(fragment.text);
    }
  });

  it('keeps each fragment\'s page and style', () => {
    const header = laid.rows[1]!;

    expect(header.fragments.map((f) => f.fontSize)).toEqual([11, 12]);
    expect(laid.rows[2]!.fragments.every((f) => f.page === 2)).toBe(true);
  });
});
