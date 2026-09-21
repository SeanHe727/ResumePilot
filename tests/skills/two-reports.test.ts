import { describe, expect, it } from 'vitest';

import type { DiagnosisReport } from '../../src/domain.js';
import { renderBrief, renderFull } from '../../src/skills/render-full.js';

const REPORT = {
  summary: {
    totalEntries: 2,
    totalBullets: 3,
    overallScore: 71,
    substanceAvg: 60,
    wordingAvg: 80,
    formatScore: 90,
    topStrengths: [],
    topWeaknesses: [],
  },
  coverage: {
    eligibleEntries: 2,
    notApplicableEntries: 1,
    contentReviewed: 2,
    wordingReviewed: 1,
    narrative: 'done',
    jdMatch: 'no-posting',
    format: 'done',
  },
  perEntry: [],
  format: { overallScore: 90, metrics: {}, issues: [] },
  improvementPlan: {
    immediate: [],
    shortTerm: [],
    longTerm: [],
    setAside: [{ what: 'the batch size', because: 'no room left' }],
  },
  full: {
    sections: [
      {
        heading: 'NIO Inc.',
        points: [
          {
            what: 'The 74% reduction has no starting count.',
            why: 'A percentage with nothing on the other side cannot be sized.',
            evidence: 'cut the pending-inspection vehicle backlog by 74%',
            from: ['content'],
            cost: 'about 6 words',
          },
          {
            what: 'The opening line narrates process before its result.',
            why: 'The reader reaches the outcome last.',
            from: ['wording'],
            cost: 'no words',
          },
        ],
      },
    ],
  },
} as unknown as DiagnosisReport;

describe('the brief and the full review', () => {
  it('makes the brief out of the full one, not separately', async () => {
    // A brief written on its own can claim something the long report does not,
    // and nothing here would notice. Every line of one has to come from the
    // other.
    const brief = renderBrief(REPORT, 'cv.pdf');

    for (const section of REPORT.full!.sections) {
      expect(brief).toContain(section.heading);
      for (const point of section.points) expect(brief).toContain(point.what);
    }
  });

  it('keeps the reasoning and the quotes out of the brief', async () => {
    // The brief is read through; the full one is looked things up in.
    const brief = renderBrief(REPORT, 'cv.pdf');
    const point = REPORT.full!.sections[0]!.points[0]!;

    expect(brief).not.toContain(point.why);
    expect(brief).not.toContain(point.evidence!);
  });

  it('carries all of it in the full one', async () => {
    const full = renderFull(REPORT, 'cv.pdf');
    const point = REPORT.full!.sections[0]!.points[0]!;

    expect(full).toContain(point.what);
    expect(full).toContain(point.why);
    expect(full).toContain(point.evidence!);
    expect(full).toContain('content');
  });

  it('says in both how much of the resume was read', async () => {
    for (const rendered of [renderBrief(REPORT, 'cv.pdf'), renderFull(REPORT, 'cv.pdf')]) {
      expect(rendered).toContain('Read 2 of 2 entries');
      expect(rendered).toContain('no-posting');
    }
  });

  it('shows what was set aside, in the one meant to be read through', async () => {
    // A list nobody can see was trimmed reads as a short list.
    expect(renderBrief(REPORT, 'cv.pdf')).toContain('the batch size');
  });
});
