import { describe, expect, it } from 'vitest';

import {
  analyseLayout,
  unsupportedLayout,
  type PageLayout,
  type StyledLine,
} from '../../src/document/extractors/pdf.js';
import { detectColumns, type PageGeometry } from '../../src/document/layout.js';

/**
 * A0: every geometric check runs against the page it is measuring.
 *
 * The extractor kept one `geometry`, reassigned each time round the page loop,
 * so the margin band and the column gutter both came from whichever page was
 * parsed last. These tests are built from synthetic pages rather than PDFs
 * because the thing under test is the arithmetic, not pdf.js.
 */
function styled(
  page: number,
  rows: Array<{ text: string; x: number; y: number; width?: number }>,
): StyledLine[] {
  return rows.map((r) => ({
    line: { text: r.text, x: r.x, y: r.y, width: r.width ?? 150, page },
    fontSize: 10,
    bold: false,
  }));
}

function pageOf(number: number, geometry: PageGeometry, lines: StyledLine[]): PageLayout {
  return {
    number,
    geometry,
    // One run per line: these pages are built line by line, so the runs the
    // rebuild would start from and the lines the guard measures coincide.
    runs: lines.map((s) => ({ ...s.line, fontSize: s.fontSize, bold: s.bold })),
    styled: lines,
    columns: detectColumns(
      lines.map((s) => s.line),
      geometry,
    ),
  };
}

/** Three lines each side, overlapping vertically: a real two-column page. */
function twoColumnRows(): Array<{ text: string; x: number; y: number }> {
  return [
    { text: 'left 1', x: 72, y: 700 },
    { text: 'left 2', x: 72, y: 670 },
    { text: 'left 3', x: 72, y: 640 },
    { text: 'right 1', x: 340, y: 700 },
    { text: 'right 2', x: 340, y: 670 },
    { text: 'right 3', x: 340, y: 640 },
  ];
}

const A4: PageGeometry = { width: 600, height: 800 };

describe('per-page layout', () => {
  it('measures the margin band against the page the line is on', () => {
    // Mid-page on a tall first page, followed by a short last page. Measured
    // against the short page's height the same line sits in the footer band,
    // which is the false positive a single shared geometry produced.
    const tall = pageOf(1, A4, styled(1, [{ text: 'sean@example.com', x: 72, y: 400 }]));
    const short = pageOf(2, { width: 600, height: 200 }, styled(2, [{ text: 'body', x: 72, y: 100 }]));

    expect(analyseLayout([tall, short])).toEqual([]);
  });

  it('still flags contact details that are in their own page footer', () => {
    const page = pageOf(1, A4, styled(1, [{ text: 'sean@example.com', x: 72, y: 20 }]));

    expect(analyseLayout([page])).toContainEqual(
      expect.stringContaining('page header or footer'),
    );
  });

  it('refuses the document when any page is in two columns', () => {
    const pages = [
      pageOf(1, A4, styled(1, [{ text: 'single column', x: 72, y: 700 }])),
      pageOf(2, A4, styled(2, twoColumnRows())),
    ];

    expect(unsupportedLayout(pages)).toContain('multi-column layout detected');
    expect(unsupportedLayout(pages)).toContain('page 2');
  });

  it('names no page when the document is one page', () => {
    const refusal = unsupportedLayout([pageOf(1, A4, styled(1, twoColumnRows()))]);

    expect(refusal).toContain('multi-column layout detected (');
    expect(refusal).not.toContain('page 1');
  });

  it('passes a single-column document through', () => {
    const pages = [pageOf(1, A4, styled(1, [{ text: 'single column', x: 72, y: 700 }]))];

    expect(unsupportedLayout(pages)).toBeNull();
  });

  it('leaves the multi-column verdict out of the warnings', () => {
    // Columns are a refusal upstream. Reported here as well they would also be
    // a 25-point blocker on a document that was never built.
    const pages = [pageOf(1, A4, styled(1, twoColumnRows()))];

    expect(analyseLayout(pages)).toEqual([]);
  });
});
