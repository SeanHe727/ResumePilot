import { describe, expect, it } from 'vitest';

import {
  columnAwareReadingOrder,
  detectColumns,
  detectDecorativeBullets,
  detectMarginContent,
  naiveReadingOrder,
  readingOrderDivergence,
  type PageGeometry,
  type PositionedLine,
} from '../../src/document/layout.js';

const PAGE: PageGeometry = { width: 612, height: 792 };

function line(x: number, y: number, width = 200, text = 'x'): PositionedLine {
  return { text, x, y, width, page: 1 };
}

/** Left band at x=72, right band at x=340, both spanning the same y range. */
function twoColumnPage(): PositionedLine[] {
  const ys = [700, 680, 660, 640, 620, 600];
  return [...ys.map((y) => line(72, y, 180)), ...ys.map((y) => line(340, y, 180))];
}

describe('detectColumns', () => {
  it('finds the gutter in a genuine two-column layout', () => {
    const report = detectColumns(twoColumnPage(), PAGE);

    expect(report.multiColumn).toBe(true);
    expect(report.leftLines).toBe(6);
    expect(report.rightLines).toBe(6);
    expect(report.gutter!.from).toBeGreaterThan(250);
    expect(report.gutter!.to).toBeLessThan(345);
  });

  it('does not flag a single column', () => {
    const lines = [700, 680, 660, 640, 620, 600].map((y) => line(72, y, 460));

    expect(detectColumns(lines, PAGE).multiColumn).toBe(false);
  });

  it('does not flag short ragged lines as columns', () => {
    // Every line starts at the left margin; the whitespace on the right is a
    // ragged edge, not a gutter with content beyond it.
    const lines = [700, 680, 660, 640, 620, 600].map((y, i) => line(72, y, 120 + i * 40));

    expect(detectColumns(lines, PAGE).multiColumn).toBe(false);
  });

  it('does not flag a right-hand block that sits below the left one', () => {
    // A gutter with content only above-left and below-right is one column with
    // an indented block — flagging it would cry wolf on ordinary resumes.
    const lines = [
      ...[700, 680, 660].map((y) => line(72, y, 180)),
      ...[400, 380, 360].map((y) => line(340, y, 180)),
    ];

    expect(detectColumns(lines, PAGE).multiColumn).toBe(false);
  });

  it('ignores margin whitespace, which is not a gutter', () => {
    const lines = [700, 680, 660, 640].map((y) => line(300, y, 100));

    expect(detectColumns(lines, PAGE).multiColumn).toBe(false);
  });

  it('needs real content on both sides', () => {
    const lines = [...[700, 680, 660, 640, 620].map((y) => line(72, y, 180)), line(340, 700, 180)];

    expect(detectColumns(lines, PAGE).multiColumn).toBe(false);
  });

  it('reports nothing for a near-empty page', () => {
    expect(detectColumns([line(72, 700)], PAGE).multiColumn).toBe(false);
  });
});

describe('reading order', () => {
  it('reads straight across the page the way a naive parser does', () => {
    const lines = twoColumnPage();
    const naive = naiveReadingOrder(lines);

    // Same baseline, so left and right interleave — this is the garbling.
    expect(naive[0]!.x).toBe(72);
    expect(naive[1]!.x).toBe(340);
  });

  it('reads one column at a time the way a human does', () => {
    const ordered = columnAwareReadingOrder(twoColumnPage(), 300);

    expect(ordered.slice(0, 6).every((l) => l.x === 72)).toBe(true);
    expect(ordered.slice(6).every((l) => l.x === 340)).toBe(true);
  });

  it('measures how much the two orders disagree', () => {
    const lines = twoColumnPage();
    const divergence = readingOrderDivergence(
      naiveReadingOrder(lines),
      columnAwareReadingOrder(lines, 300),
    );

    expect(divergence).toBeGreaterThan(0.3);
  });

  it('reports no divergence for a single column', () => {
    const lines = [700, 680, 660, 640].map((y) => line(72, y, 460));
    const divergence = readingOrderDivergence(
      naiveReadingOrder(lines),
      columnAwareReadingOrder(lines, 300),
    );

    expect(divergence).toBe(0);
  });
});

describe('detectMarginContent', () => {
  it('finds text in the header and footer bands', () => {
    const lines = [line(72, 780, 200, 'header'), line(72, 400, 200, 'body'), line(72, 20, 200, 'footer')];
    const margin = detectMarginContent(lines, PAGE);

    expect(margin.map((l) => l.text)).toEqual(['header', 'footer']);
  });

  it('leaves body text alone', () => {
    expect(detectMarginContent([line(72, 400)], PAGE)).toHaveLength(0);
  });
});

describe('detectDecorativeBullets', () => {
  it('accepts the glyphs parsers reliably understand', () => {
    expect(detectDecorativeBullets(['- a', '• b', '* c', '· d'])).toEqual([]);
  });

  it('flags decorative glyphs, which tokenize as unknown entities', () => {
    expect(detectDecorativeBullets(['➤ a', '✔ b'])).toEqual(['➤', '✔']);
  });

  it('ignores ordinary text and numbered lists', () => {
    expect(detectDecorativeBullets(['Experience', '1. a', '2025.06'])).toEqual([]);
  });
});
