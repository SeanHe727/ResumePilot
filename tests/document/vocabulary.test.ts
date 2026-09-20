import { describe, expect, it } from 'vitest';

import { DATE_RANGE, isBulletLine, stripBulletMarker } from '../../src/document/vocabulary.js';

/**
 * What a bullet and a date look like, in words rather than in layout.
 *
 * Shared by the pass that cuts sections and the pass that labels rows, which
 * is why they are tested apart from either.
 */
describe('recognising a bullet', () => {
  it.each(['- item', '* item', '• item', '1. item', '2) item', '  ◦ item'])(
    'treats %s as a bullet',
    (line) => expect(isBulletLine(line)).toBe(true),
  );

  it.each(['Experience', '2025.06 – 2025.09', 'Languages: TypeScript'])(
    'does not treat %s as a bullet',
    (line) => expect(isBulletLine(line)).toBe(false),
  );

  it('strips the marker and nothing else', () => {
    expect(stripBulletMarker('  - Reduced P99 latency by 90%')).toBe('Reduced P99 latency by 90%');
  });
});

describe('recognising a date range', () => {
  it.each([
    '2025.06 - 2025.09',
    'Jun 2024 - Sep 2024',
    '2023 - Present',
    'Aug 2026 - Present',
    '2024年6月至2025年3月',
    '2024年6月至今',
  ])('reads %s as a range', (text) => expect(DATE_RANGE.test(text)).toBe(true));

  it('matches both ends of a range rather than stopping at the year', () => {
    // Written asymmetrically — a month allowed on the start and not the end —
    // the pattern still matches, just short, silently dropping the closing
    // month from `2025.06 – 2025.09`.
    expect(DATE_RANGE.exec('2025.06 - 2025.09')?.[0]).toBe('2025.06 - 2025.09');
  });

  it.each(['Metro City, USA', 'TypeScript, Python, Go', 'Aug 20XX - Present'])(
    'reads no range in %s',
    (text) => expect(DATE_RANGE.test(text)).toBe(false),
  );
});
