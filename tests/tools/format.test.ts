import { describe, expect, it } from 'vitest';

import { DefaultResumeParser } from '../../src/document/index.js';
import { analyzeFormat } from '../../src/tools/analyze-format.js';
import { RULES, violation } from '../../src/tools/rules.js';
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

const rulesIn = (d: FormatDiagnosis): Set<string> => new Set(d.issues.map((i) => i.rule));

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

describe('rule catalogue', () => {
  it('enforces every rule it defines', async () => {
    // A catalogue entry nothing checks is a rule the product claims to apply
    // and silently does not.
    const src = await import('node:fs').then((fs) =>
      fs.readFileSync('src/tools/analyze-format.ts', 'utf-8'),
    );
    const enforced = new Set([...src.matchAll(/violation\('([^']+)'/g)].map((m) => m[1]));

    expect([...Object.keys(RULES)].filter((r) => !enforced.has(r))).toEqual([]);
  });

  it('gives every rule an id matching its key', () => {
    for (const [key, rule] of Object.entries(RULES)) expect(rule.id).toBe(key);
  });

  it('namespaces every rule by where it comes from', () => {
    for (const rule of Object.values(RULES)) {
      expect(rule.id).toMatch(/^(harvard|google|faang|ats)\./);
      expect(rule.source.length).toBeGreaterThan(10);
    }
  });

  it('carries the evidence through verbatim', () => {
    // The report quotes this back; a paraphrase the reader cannot find in their
    // own resume costs trust in the whole diagnosis.
    const v = violation('faang.bystander-language', 'Responsible for');

    expect(v.evidence).toBe('Responsible for');
    expect(v.dimension).toBe('action-verbs');
  });

  it('lets a caller override severity for context', () => {
    expect(violation('ats.length', '3 pages', { severity: 'high' }).severity).toBe('high');
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

    expect(rulesIn(d).has('faang.bystander-language')).toBe(true);
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

    expect(rulesIn(messy).has('faang.bystander-language')).toBe(true);
    expect(rulesIn(messy).has('harvard.no-pronouns')).toBe(true);
    expect(messy.metrics.quantifiedRatio.ratio).toBeGreaterThan(0);
  });

  it.each([
    ['ats.unknown-heading', 'a heading outside the known vocabulary'],
    ['harvard.missing-contact', 'no email or phone in the body'],
    ['faang.self-rating', 'star ratings in the skills section'],
    ['ats.inconsistent-dates', 'two date formats in one resume'],
    ['faang.weak-verb', '"assisted" as an opener'],
    ['faang.overlong-bullet', 'a bullet running past two lines'],
    ['harvard.date-first-line', 'a bullet opening with a year'],
  ])('reports %s (%s)', async (rule) => {
    expect(rulesIn(await diagnose('messy-resume.md')).has(rule)).toBe(true);
  });
});

describe('analyzeFormat scoring', () => {
  it('zeroes parsability and cites the file when there is no text layer', async () => {
    const d = await diagnose('scanned.pdf');

    expect(d.metrics.atsParsability.score).toBe(0);
    expect(rulesIn(d).has('ats.no-text-layer')).toBe(true);
  });

  it('flags a multi-column layout as a parsing blocker', async () => {
    const d = await diagnose('two-column.pdf');

    expect(rulesIn(d).has('ats.multi-column')).toBe(true);
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
