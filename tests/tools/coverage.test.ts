import { describe, expect, it } from 'vitest';

import type { DiagnosisReport, ResumeSessionState } from '../../src/domain.js';
import { generateReportTool, reviewContentTool } from '../../src/tools/index.js';
import type { ToolContext } from '../../src/tools/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { renderFull } from '../../src/skills/render-full.js';

/**
 * What the counts cannot say.
 *
 * Every number in `ReportCoverage` counts entries, so a run once reported two of
 * two entries read while six bullets under a projects heading had been scored by
 * nobody, and four dispatches had been refused. Both facts existed only in a
 * trace that production does not have. A report claiming more than it did is the
 * one failure a reader cannot detect for themselves.
 */
const ENTRY = {
  id: 'experience:0',
  sectionId: 'experience',
  index: 0,
  headerLines: ['A Company | Engineer'],
  span: { start: 0, end: 1 },
  bullets: [
    { id: 'experience:0:0', entryId: 'experience:0', index: 0, text: 'Cut latency 71%', span: { start: 0, end: 1 } },
  ],
};

const resume = (over: Record<string, unknown> = {}) => ({
  sourcePath: 'r.pdf',
  format: 'pdf',
  rawText: '',
  sections: [
    {
      id: 'experience',
      kind: 'experience',
      heading: 'EXPERIENCE',
      looseLines: [],
      span: { start: 0, end: 1 },
      entries: [ENTRY],
    },
    {
      id: 's3',
      kind: 'project',
      heading: 'PROJECTS',
      looseLines: [],
      infoLines: ['Agent Runtime Suite | Owner'],
      span: { start: 1, end: 2 },
      entries: [],
      bullets: [
        { id: 's3:b0', text: 'Improved localization 82% to 94%', span: { start: 1, end: 2 } },
        { id: 's3:b1', text: 'Hardened a runtime', span: { start: 1, end: 2 } },
      ],
    },
  ],
  meta: { wordCount: 200, quality: 'clean', layoutWarnings: [] },
  ...over,
});

function ctx(state: Partial<ResumeSessionState>) {
  const session = new SqliteSessionManager().create({ sourcePath: 'r.pdf' });
  session.state = {
    resume: resume(),
    formatDiagnosis: { overallScore: 90, metrics: { length: { wordCount: 200, pageCount: 1 } }, issues: [] },
    entryDiagnoses: [{ entryId: 'experience:0', overallScore: 60, bullets: [] }],
    ...state,
  } as never;

  return {
    session,
    queryEngine: {
      async query() {
        return {
          type: 'text',
          content: JSON.stringify({ immediate: [], shortTerm: [], longTerm: [] }),
          usage: { inputTokens: 0, outputTokens: 0 },
          stopReason: 'end_turn',
        };
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    },
    abortSignal: new AbortController().signal,
  } as unknown as ToolContext;
}

const reportFor = async (state: Partial<ResumeSessionState>): Promise<DiagnosisReport> => {
  const result = await generateReportTool.execute({} as never, ctx(state));
  return result.data as DiagnosisReport;
};

describe('coverage says what it could not address', () => {
  it('counts bullets that belong to no entry, which no count of entries can', async () => {
    const report = await reportFor({});

    expect(report.coverage?.unaddressable).toEqual([
      { sectionId: 's3', heading: 'PROJECTS', bullets: 2 },
    ]);
    // And the entry counts still read as complete, which is exactly why the
    // line above has to exist.
    expect(report.coverage?.contentReviewed).toBe(report.coverage?.eligibleEntries);
  });

  it('counts a stray bullet even where the section did open entries', async () => {
    // The same correction mutation testing forced on the integrity check: two
    // entries that look right, and one bullet left at the section's own level,
    // is the harder case to notice by eye and just as unreviewable.
    const report = await reportFor({
      resume: resume({
        sections: [
          {
            id: 's3',
            kind: 'project',
            heading: 'PROJECTS',
            looseLines: [],
            span: { start: 1, end: 2 },
            entries: [{ ...ENTRY, id: 's3:e0', sectionId: 's3' }],
            bullets: [{ id: 's3:b0', text: 'a bullet nobody owns', span: { start: 1, end: 2 } }],
          },
        ],
      }),
      entryDiagnoses: [{ entryId: 's3:e0', overallScore: 60, bullets: [] }],
    } as never);

    expect(report.coverage?.unaddressable).toEqual([
      { sectionId: 's3', heading: 'PROJECTS', bullets: 1 },
    ]);
  });

  it('says so in the report a person reads', async () => {
    const report = await reportFor({});

    const text = renderFull(report, 'r.pdf');
    expect(text).toContain('2 lines under "PROJECTS" were not scored');
    expect(text).toContain('title line');
  });

  it('keeps quiet when every bullet belongs to an entry', async () => {
    const report = await reportFor({
      resume: resume({
        sections: [
          {
            id: 'experience',
            kind: 'experience',
            heading: 'EXPERIENCE',
            looseLines: [],
            span: { start: 0, end: 1 },
            entries: [ENTRY],
          },
        ],
      }),
    } as never);

    expect(report.coverage?.unaddressable).toBeUndefined();
    expect(renderFull(report, 'r.pdf')).not.toContain('were not scored');
  });
});

describe('coverage says what was asked for and did not run', () => {
  it('carries a refused dispatch through to the report', async () => {
    // The refusal reaches the model and stops there. A report that cannot see it
    // cannot tell "nothing was wrong with that entry" from "the review never ran".
    const report = await reportFor({
      reviewAttempts: [
        { role: 'content', target: 'Agent Runtime Suite', outcome: 'rejected', reason: 'no entry' },
      ],
    });

    expect(report.coverage?.rejectedTargets).toEqual([
      { role: 'content', target: 'Agent Runtime Suite' },
    ]);
    expect(renderFull(report, 'r.pdf')).toContain('which is not in this résumé');
  });

  it('carries a review that ran and produced nothing', async () => {
    const report = await reportFor({
      reviewAttempts: [
        { role: 'wording', target: 'experience:0', outcome: 'failed', reason: 'the model returned nothing' },
      ],
    });

    expect(report.coverage?.failedTargets).toEqual([
      { role: 'wording', target: 'experience:0', reason: 'the model returned nothing' },
    ]);
    expect(renderFull(report, 'r.pdf')).toContain('produced nothing');
  });
});

describe('a review that found nothing is not a review that succeeded', () => {
  it('reports a specialist that returned no reading as a failure', async () => {
    // It used to return `{ success: true, data: undefined }`, which left the
    // coordinator believing the entry had been read, the count saying it had
    // not, and nobody able to say which was true.
    const c = ctx({});
    const orchestrator = {
      failures: new Map([['content', 'the model finished its reasoning without writing an answer']]),
      async diagnoseEntry() {
        return { entryId: 'experience:0', substance: null, wording: null, overallScore: 0, agentStats: [] };
      },
    };

    const result = await reviewContentTool.execute(
      { entryId: 'experience:0' } as never,
      { ...c, orchestrator } as unknown as ToolContext,
    );

    expect(result.success).toBe(false);
    expect(result.error?.message).toMatch(/produced no reading of experience:0/);
    expect(result.error?.message).toMatch(/without writing an answer/);
  });

  it('writes that failure where the report can find it', async () => {
    const c = ctx({});
    const orchestrator = {
      failures: new Map<string, string>(),
      async diagnoseEntry() {
        return { entryId: 'experience:0', substance: null, wording: null, overallScore: 0, agentStats: [] };
      },
    };

    await reviewContentTool.execute(
      { entryId: 'experience:0' } as never,
      { ...c, orchestrator } as unknown as ToolContext,
    );

    const state = c.session!.state as ResumeSessionState;
    expect(state.reviewAttempts).toEqual([
      { role: 'content', target: 'experience:0', outcome: 'failed', reason: 'the reader returned nothing' },
    ]);
  });

  it('records a target that does not exist, before refusing it', async () => {
    const c = ctx({});

    const result = await reviewContentTool.execute(
      { entryId: 'Agent Runtime Suite' } as never,
      { ...c, orchestrator: { failures: new Map(), async diagnoseEntry() { throw new Error('never'); } } } as unknown as ToolContext,
    );

    expect(result.success).toBe(false);
    expect((c.session!.state as ResumeSessionState).reviewAttempts).toEqual([
      { role: 'content', target: 'Agent Runtime Suite', outcome: 'rejected', reason: 'no entry Agent Runtime Suite' },
    ]);
  });
});
