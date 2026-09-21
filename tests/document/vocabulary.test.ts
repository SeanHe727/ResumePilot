import { describe, expect, it } from 'vitest';

import {
  DATE_RANGE,
  EMAIL,
  PHONE,
  isBulletLine,
  stripBulletMarker,
} from '../../src/document/vocabulary.js';

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

  it('reads an end date the resume has not reached yet', () => {
    // `Sep 2025 - Expected Jun 2027` is how a degree in progress is written,
    // and both resumes to hand have one. The qualifier sits exactly where the
    // closing date was expected, so without it the range matched nothing at
    // all — and the entry it dates stopped counting as education.
    expect(DATE_RANGE.exec('M.S. in Computer Engineering Sep 2025 - Expected Jun 2027')?.[0]).toBe(
      'Sep 2025 - Expected Jun 2027',
    );
  });

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

describe('recognising a way to reach someone', () => {
  it.each(['+1 (555) 010-2468', '+86 138 0000 0000', '(563) 772 9355', '555-010-2468', '13800000000'])(
    'reads %s as a phone number',
    (text) => expect(PHONE.test(text)).toBe(true),
  );

  it.each([
    // Counting characters from a class of digits, spaces, parens and hyphens
    // — which is what this did — reads both of these as phone numbers.
    'on COCO-2017 (100K images) through target-layer distillation',
    '2025.06 - 2025.09',
    'Reduced peak VRAM by 68% (8,400 to 2,700 MB)',
    'M.S. in Engineering Sep 2021 - Jun 2025',
    'a 100-turn stress test',
    'Kendall rank correlation of 0.89',
  ])('reads no phone number in %s', (text) => expect(PHONE.test(text)).toBe(false));

  it.each(['jordan.lee@example.com', 'chenh727@uw.edu', 'a.b+tag@sub.domain.co.uk'])(
    'reads %s as an address',
    (text) => expect(EMAIL.test(text)).toBe(true),
  );

  it.each(['Amazon x UW', 'TypeScript, Python, Go', '8.5pp mean absolute deviation'])(
    'reads no address in %s',
    (text) => expect(EMAIL.test(text)).toBe(false),
  );
});
