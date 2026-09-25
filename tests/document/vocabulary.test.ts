import { describe, expect, it } from 'vitest';

import {
  DATE_RANGE,
  EMAIL,
  PHONE,
  isBulletLine,
  stripBulletMarker,
  withoutContactDetails,
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
  it.each(['+1 (555) 010-2468', '+86 138 0000 0000', '(555) 013-0100', '555-010-2468', '13800000000'])(
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

  // Shapes, not addresses. A real one was here — a university address that would
  // have gone into a public repository and been scraped out of it — and the test
  // wanted nothing from it that `first.last@school.edu` does not give.
  it.each(['jordan.lee@example.com', 'first.last@school.edu', 'a.b+tag@sub.domain.co.uk'])(
    'reads %s as an address',
    (text) => expect(EMAIL.test(text)).toBe(true),
  );

  it.each(['Amazon x UW', 'TypeScript, Python, Go', '8.5pp mean absolute deviation'])(
    'reads no address in %s',
    (text) => expect(EMAIL.test(text)).toBe(false),
  );
});

describe('taking a way to reach someone out of a sentence', () => {
  // Detecting a number and cutting one out are different jobs, and they had
  // been sharing a pattern. Eight digits with something between them is a low
  // enough bar to ask whether a resume gives a number, and far too low to cut.
  it.each([
    ['+1 (555) 010-2468', '[phone]'],
    ['+86 138 0000 0000', '[phone]'],
    ['(555) 013-0100', '[phone]'],
    ['555-010-2468', '[phone]'],
    ['13800000000', '[phone]'],
  ])('takes %s out', (text, expected) => {
    expect(withoutContactDetails(text)).toBe(expected);
  });

  it.each([
    // The dates of a job, in the header of the entry that holds it. A reader
    // asked whether a career reads in order lost them without being told.
    'Mobility Systems Company | ML Engineer | 2025-2026',
    'Scaled to 10000000 users across three regions',
    'Employee ID 12345678',
    'M.S. in Engineering Sep 2021 - Jun 2025',
    'Reduced peak VRAM by 68% (8,400 to 2,700 MB)',
    'on COCO-2017 (100K images) through target-layer distillation',
  ])('leaves %s alone', (text) => {
    expect(withoutContactDetails(text)).toBe(text);
  });

  it.each(['2021-06-2022', '2021-06-2022-09'])(
    'leaves %s alone because it is a date range, whatever shape it is',
    (text) => {
      // Ten digits in three groups, which is what a dialled number looks like.
      // Nothing about the shape saves these; being a range does.
      expect(DATE_RANGE.exec(text)?.[0]).toBe(text);
      expect(withoutContactDetails(text)).toBe(text);
    },
  );

  it('takes an address out wherever it sits in a line', () => {
    expect(withoutContactDetails('Questions to jordan.lee@example.com, any time')).toBe(
      'Questions to [email], any time',
    );
  });

  it('leaves the rest of the line exactly as it was', () => {
    expect(withoutContactDetails('Jordan Lee | +1 (555) 010-2468 | Metro City')).toBe(
      'Jordan Lee | [phone] | Metro City',
    );
  });
});
