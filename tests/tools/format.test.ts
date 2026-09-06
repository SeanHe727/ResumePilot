import { describe, expect, it } from 'vitest';

import { DefaultResumeParser } from '../../src/document/index.js';
import { analyzeFormat } from '../../src/tools/analyze-format.js';
import {
  bystanderOpener,
  dateFormat,
  estimateLines,
  hasMeasurement,
  hasPronoun,
  isPassive,
  selfRating,
  startsWithActionVerb,
  startsWithDate,
  mentionsReferences,
  personalDetail,
  weakVerb,
} from '../../src/tools/text-signals.js';
import type { FormatDiagnosis, ResumeDocument } from '../../src/domain.js';

async function diagnose(fixture: string): Promise<FormatDiagnosis> {
  const doc = await new DefaultResumeParser().parse(`tests/fixtures/${fixture}`);
  return analyzeFormat(doc);
}

/** Findings are plain sentences, so tests match on what they say. */
const mentions = (d: FormatDiagnosis, phrase: string): boolean =>
  d.issues.some((i) => i.toLowerCase().includes(phrase.toLowerCase()));

describe('text signals', () => {
  it.each([
    ['Responsible for the order query service', 'responsible for'],
    ['Worked on backend systems', 'worked on'],
    ['Participated in architecture discussions', 'participated in'],
  ])('flags %s as bystander language', (text, opener) => {
    expect(bystanderOpener(text)).toBe(opener);
  });

  it('does not flag a real action', () => {
    expect(bystanderOpener('Rebuilt the auth flow')).toBeNull();
  });

  it.each(['helped', 'assisted', 'supported'])('flags %s as a weak verb', (verb) => {
    expect(weakVerb(`${verb} the team ship a release`)).toBe(verb);
  });

  it.each(['Rebuilt the auth flow', 'Cut P99 latency', 'Led a 3-person team'])(
    'recognises %s as verb-first',
    (text) => expect(startsWithActionVerb(text)).toBe(true),
  );

  it.each(['The pipeline was rebuilt', 'Responsible for delivery'])(
    'does not call %s verb-first',
    (text) => expect(startsWithActionVerb(text)).toBe(false),
  );

  it('finds first-person pronouns', () => {
    expect(hasPronoun('I helped the team')).toBe(true);
    expect(hasPronoun('our team shipped it')).toBe(true);
    expect(hasPronoun('Shipped the release')).toBe(false);
  });

  it.each([
    'The pipeline was rebuilt by the team',
    'The service was migrated to Kubernetes',
    'The document was written by the team',
  ])('finds the passive in %s', (text) => {
    // Irregular participles matter most here: a `-ed` suffix alone would read
    // "was rebuilt" and "was written" as active, which is exactly backwards.
    expect(isPassive(text)).toBe(true);
  });

  it('leaves an active line alone', () => {
    expect(isPassive('Rebuilt the pipeline')).toBe(false);
    expect(isPassive('Migrated 12 services')).toBe(false);
  });

  it('treats a bare year as a date, not a measurement', () => {
    // Otherwise a resume of pure duties scores as quantified on its dates alone.
    expect(hasMeasurement('Joined the payments team in 2023')).toBe(false);
    expect(hasMeasurement('Migrated 12 services in 2023')).toBe(true);
    expect(hasMeasurement('Cut P99 from 800ms to 90ms')).toBe(true);
  });

  it('spots a line opening with a date', () => {
    expect(startsWithDate('2024 joined the payments squad')).toBe(true);
    expect(startsWithDate('Jun 2024 shipped the release')).toBe(true);
    expect(startsWithDate('Shipped the release in Jun 2024')).toBe(false);
  });

  it.each([
    ['Python ★★★★☆', 'star rating'],
    ['Python ████████░░ 80%', 'progress bar'],
    ['Expert in MySQL', 'proficiency wording'],
  ])('spots %s as a self-rating', (text, kind) => {
    expect(selfRating(text)).toBe(kind);
  });

  it('leaves a plain skills list alone', () => {
    expect(selfRating('Languages: TypeScript, Python, Go')).toBeNull();
  });

  it.each([
    ['2025.06 – 2025.09', 'iso-dot'],
    ['Jun 2024 - Sep 2024', 'month-name'],
    ['2021 – 2025', 'year-only'],
  ])('classifies %s as %s', (range, expected) => {
    expect(dateFormat(range)).toBe(expected);
  });

  it('estimates line count from length', () => {
    expect(estimateLines('short')).toBe(1);
    expect(estimateLines('x'.repeat(200))).toBeGreaterThan(2);
  });
});

describe('convention signals', () => {
  it.each([
    'References available upon request',
    'References furnished on request',
    'References:',
  ])('spots %s', (text) => expect(mentionsReferences(text)).toBe(true));

  it('does not flag a bullet that merely mentions a referee', () => {
    expect(mentionsReferences('Referred 3 candidates who were hired')).toBe(false);
  });

  it.each([
    ['Age: 27', 'age'],
    ['27 years old', 'age'],
    ['Gender: male', 'gender'],
    ['Date of birth: 1998-04-02', 'date of birth'],
  ])('spots %s as an excluded personal detail', (text, label) => {
    expect(personalDetail(text)).toBe(label);
  });

  it('leaves ordinary resume lines alone', () => {
    expect(personalDetail('Cut P99 latency from 800ms to 90ms')).toBeNull();
  });
});

describe('analyzeFormat on a clean resume', () => {
  it('scores it well overall', async () => {
    const d = await diagnose('sample-resume.md');

    expect(d.overallScore).toBeGreaterThan(70);
    expect(d.metrics.atsParsability.score).toBe(100);
  });

  it('still catches the bystander openers it contains', async () => {
    const d = await diagnose('sample-resume.md');

    expect(mentions(d, 'assigned slot')).toBe(true);
  });

  it('reports the quantified ratio it measured', async () => {
    const d = await diagnose('sample-resume.md');

    expect(d.metrics.quantifiedRatio.ratio).toBeCloseTo(0.5, 1);
    expect(d.metrics.quantifiedRatio.detail).toMatch(/bullets carry a figure/);
  });
});

describe('analyzeFormat on a messy resume', () => {
  it('scores it far lower', async () => {
    const clean = await diagnose('sample-resume.md');
    const messy = await diagnose('messy-resume.md');

    expect(messy.overallScore).toBeLessThan(clean.overallScore - 20);
  });

  it('diagnoses content under a heading it could not classify', async () => {
    // "My Journey" parses as `other`. Treating that as prose would drop its
    // bullets into looseLines, where every check below ignores them — one
    // unrecognised heading would silently cost the whole content diagnosis.
    const messy = await diagnose('messy-resume.md');

    expect(mentions(messy, 'assigned slot')).toBe(true);
    expect(mentions(messy, 'personal pronoun')).toBe(true);
    expect(messy.metrics.quantifiedRatio.ratio).toBeGreaterThan(0);
  });

  it.each([
    ['a heading outside the known vocabulary', 'outside the vocabulary'],
    ['no email or phone in the body', 'no email or phone'],
    ['star ratings in the skills section', 'proficiency ratings'],
    ['two date formats in one resume', 'mixed date formats'],
    ['"assisted" as an opener', 'does not name an action'],
    ['a bullet running past two lines', 'narrating process'],
    ['a bullet opening with a year', 'opens with a date'],
  ])('reports %s', async (_label, phrase) => {
    expect(mentions(await diagnose('messy-resume.md'), phrase)).toBe(true);
  });
});

describe('analyzeFormat scoring', () => {
  it('zeroes parsability and cites the file when there is no text layer', async () => {
    const d = await diagnose('scanned.pdf');

    expect(d.metrics.atsParsability.score).toBe(0);
    expect(mentions(d, 'no text layer')).toBe(true);
  });

  it('flags a multi-column layout as a parsing blocker', async () => {
    const d = await diagnose('two-column.pdf');

    expect(mentions(d, 'multi-column layout')).toBe(true);
    expect(d.metrics.atsParsability.score).toBeLessThan(100);
  });

  it('survives a document with no bullets at all', () => {
    const empty: ResumeDocument = {
      sourcePath: 'empty.md',
      format: 'markdown',
      rawText: '',
      sections: [],
      meta: { wordCount: 0, quality: 'clean', layoutWarnings: [] },
    };
    const d = analyzeFormat(empty);

    expect(d.metrics.quantifiedRatio.score).toBe(0);
    expect(d.metrics.quantifiedRatio.detail).toBe('no bullets found');
  });
});
