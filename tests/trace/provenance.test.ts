import { describe, expect, it } from 'vitest';

import type {
  DiagnosisReport,
  FullReport,
  ResumeSessionState,
  SourceFinding,
} from '../../src/domain.js';
import { everyFinding, generateReportTool } from '../../src/tools/generate-report.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { writeFullReport } from '../../src/tools/write-report.js';
import type { ToolContext } from '../../src/tools/types.js';
import { RecordingTrace } from '../../src/trace/index.js';
import type { TraceEvent } from '../../src/trace/index.js';

/**
 * Whether a reading reached the report.
 *
 * The call trace shows a specialist answering and a report being written, and
 * cannot join the two: both the plan model and the report writer restate
 * everything in their own words, so nothing downstream matches back by text.
 * Ids are what make "the researcher found this and nobody used it" a fact
 * rather than an impression.
 */
const INPUT = {
  resume: { sections: [] },
  format: { overallScore: 90, metrics: { length: { wordCount: 400, pageCount: 1 } }, issues: ['two fonts on one page'] },
  entries: [
    {
      entryId: 'experience:0',
      overallScore: 40,
      bullets: [
        {
          bulletId: 'experience:0:0',
          overallScore: 30,
          issues: [{ what: 'no measurable outcome', costWords: 6 }],
        },
        { bulletId: 'experience:0:1', overallScore: 50, issues: [{ what: 'no method named' }] },
      ],
    },
  ],
  wording: [
    {
      entryId: 'experience:0',
      overallScore: 60,
      perBullet: [{ bulletId: 'experience:0:0', issues: ['opens with "Responsible for"'] }],
    },
  ],
} as never;

function recorder() {
  const events: TraceEvent[] = [];
  return {
    events,
    trace: new RecordingTrace((e) => events.push(e), {
      traceId: 't1',
      sessionId: 's1',
      turn: 1,
    }),
  };
}

/** Answers the report writer with whatever the case wants it to claim. */
function ctxWith(reply: unknown, trace?: RecordingTrace): ToolContext {
  return {
    queryEngine: {
      async query() {
        return {
          type: 'text',
          content: JSON.stringify(reply),
          usage: { inputTokens: 0, outputTokens: 0 },
          stopReason: 'end_turn',
        };
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    },
    ...(trace ? { trace } : {}),
    abortSignal: new AbortController().signal,
  } as unknown as ToolContext;
}

const REPORT = {
  summary: {},
  perEntry: [],
  format: { overallScore: 90, metrics: {}, issues: ['two fonts on one page'] },
  improvementPlan: { immediate: ['name the figure'], shortTerm: [], longTerm: [] },
} as unknown as DiagnosisReport;

const STATE = { resume: undefined } as unknown as ResumeSessionState;

const point = (what: string, from: string[]) => ({
  what,
  why: 'a reader would ask for the number',
  evidence: 'Reduced latency',
  from,
  cost: 'about 6 words',
});

describe('a finding that can be followed', () => {
  it('numbers each reader separately, so one finding more does not renumber the rest', async () => {
    const findings = everyFinding(INPUT);

    expect(findings.map((f) => f.id)).toEqual(['f1', 'c1', 'c2', 'w1']);
    expect(findings.map((f) => f.role)).toEqual(['file', 'content', 'content', 'wording']);
    expect(findings[1]).toMatchObject({
      target: 'experience:0:0',
      what: 'no measurable outcome',
      costWords: 6,
    });
  });

  it('shows the plan model exactly the lines it saw before ids existed', async () => {
    // Changing what this model reads while changing what depends on it would
    // make any difference in the output unattributable.
    const findings = everyFinding(INPUT);
    const line = (f: SourceFinding): string =>
      `- [${f.target}${f.costWords === undefined ? '' : `, ~${f.costWords} words`}] ${f.what}`;

    expect(line(findings[1]!)).toBe('- [experience:0:0, ~6 words] no measurable outcome');
    expect(line(findings[3]!)).toBe('- [experience:0:0, wording] opens with "Responsible for"');
    expect(line(findings[0]!)).toBe('- [format] two fonts on one page');
  });
});

describe('accepting what the report writer claims', () => {
  it('gives every point an id and the sources it rests on', async () => {
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [{ heading: 'NIO Inc.', points: [point('No starting count.', ['c1', 'w1'])] }],
      }),
    );

    expect(full?.sections[0]?.points[0]).toMatchObject({
      id: 'r1',
      sourceFindingIds: ['c1', 'w1'],
    });
  });

  it('drops a source that was never offered', async () => {
    // A provenance chain nobody checks is a chain of whatever the model found
    // convenient to write.
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [{ heading: 'NIO Inc.', points: [point('No starting count.', ['c1', 'c99'])] }],
      }),
    );

    expect(full?.sections[0]?.points[0]?.sourceFindingIds).toEqual(['c1']);
  });

  it('derives which readers raised it from the sources that checked out', async () => {
    // Asked for separately, the two answers disagree — and the one that can be
    // verified should be the one that decides what the report prints.
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [{ heading: 'NIO Inc.', points: [point('No starting count.', ['c1', 'c2', 'w1'])] }],
      }),
    );

    expect(full?.sections[0]?.points[0]?.from).toEqual(['content', 'wording']);
  });

  it('keeps a point that cites nothing, rather than losing real content to a slip', async () => {
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [{ heading: 'NIO Inc.', points: [point('No starting count.', [])] }],
      }),
    );

    expect(full?.sections[0]?.points[0]?.what).toBe('No starting count.');
    expect(full?.sections[0]?.points[0]?.from).toEqual([]);
  });
});

describe('through the tool that actually runs it', () => {
  /** The whole path: aggregate, choose a plan, write it up. */
  async function runReport(trace?: RecordingTrace) {
    const asked: Array<{ systemPrompt?: string; content: string }> = [];
    const session = new SqliteSessionManager().create({ sourcePath: 'resume.md' });
    session.state = {
      resume: {
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
            entries: [
              {
                id: 'experience:0',
                sectionId: 'experience',
                index: 0,
                headerLines: ['A Company — Engineer'],
                span: { start: 0, end: 1 },
                bullets: [
                  {
                    id: 'experience:0:0',
                    entryId: 'experience:0',
                    index: 0,
                    text: 'Reduced latency',
                    span: { start: 0, end: 1 },
                  },
                ],
              },
            ],
          },
        ],
        meta: { wordCount: 400, quality: 'clean', layoutWarnings: [] },
      },
      formatDiagnosis: INPUT.format,
      entryDiagnoses: INPUT.entries,
      wordingDiagnoses: INPUT.wording,
    } as never;

    const ctx = {
      session,
      queryEngine: {
        async query(params: { systemPrompt?: string; messages: Array<{ content: string }> }) {
          asked.push({
            ...(params.systemPrompt ? { systemPrompt: params.systemPrompt } : {}),
            content: params.messages[0]!.content,
          });
          const plan = { immediate: ['name the figure'], shortTerm: [], longTerm: [] };
          const written = {
            sections: [
              { heading: 'A Company', points: [point('No starting count.', ['c1', 'w1'])] },
            ],
          };
          return {
            type: 'text',
            content: JSON.stringify(asked.length === 1 ? plan : written),
            usage: { inputTokens: 0, outputTokens: 0 },
            stopReason: 'end_turn',
          };
        },
        getUsageSummary: () => '',
        checkBudget: () => ({ ok: true }),
      },
      ...(trace ? { trace } : {}),
      abortSignal: new AbortController().signal,
    } as unknown as ToolContext;

    const result = await generateReportTool.execute({} as never, ctx);
    // The long form deliberately never comes back through the tool result —
    // it would put a whole report in the coordinator's window. It is left on
    // the session, which is where `/report` and `/export` read it.
    const saved = (session.state as { latestReport?: { full?: FullReport } }).latestReport;
    return { result, asked, full: saved?.full };
  }

  it('shows the plan model the lines it has always seen', async () => {
    // Read off the prompt that actually goes out, not off a copy of the
    // formatting rule: the point is that this model's input did not change.
    const { asked } = await runReport();

    expect(asked[0]?.content).toContain('- [experience:0:0, ~6 words] no measurable outcome');
    expect(asked[0]?.content).toContain('- [experience:0:0, wording] opens with "Responsible for"');
    expect(asked[0]?.content).not.toContain('- c1 [');
  });

  it('hands the report writer the same findings the plan was chosen from', async () => {
    // Recomputed on each side they would drift the moment the session did, and
    // an id that means one thing here and another there is worse than none.
    const { asked, full } = await runReport();

    expect(asked[1]?.content).toContain('c1 [content, experience:0:0] no measurable outcome');
    expect(full?.sections[0]?.points[0]?.sourceFindingIds).toEqual(['c1', 'w1']);
  });
});

describe('where each reading ended up', () => {
  it('records what was offered, what was used and what nobody picked up', async () => {
    const { trace, events } = recorder();
    const findings = everyFinding(INPUT);

    await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith(
        {
          sections: [
            { heading: 'NIO Inc.', points: [point('No starting count.', ['c1'])] },
            { heading: 'The file', points: [point('Two fonts.', ['f1', 'nope'])] },
          ],
        },
        trace,
      ),
    );

    const accepted = events.find((e) => e.purpose === 'report points accepted');
    expect(accepted?.output).toMatchObject({
      offered: ['f1', 'c1', 'c2', 'w1'],
      reportPointIds: ['r1', 'r2'],
      sourceFindingIds: ['c1', 'f1'],
      // The two ways this goes wrong: a reading nobody picked up, and a
      // citation to something never said.
      unused: ['c2', 'w1'],
      invented: ['nope'],
      unsourced: [],
    });
  });

  it('names the points that rest on nothing', async () => {
    const { trace, events } = recorder();

    await writeFullReport(
      REPORT,
      STATE,
      everyFinding(INPUT),
      ctxWith(
        { sections: [{ heading: 'NIO Inc.', points: [point('No starting count.', [])] }] },
        trace,
      ),
    );

    expect((events[0]?.output as { unsourced: string[] }).unsourced).toEqual(['r1']);
  });

  it('records nothing when no trace is attached', async () => {
    const full = await writeFullReport(
      REPORT,
      STATE,
      everyFinding(INPUT),
      ctxWith({ sections: [{ heading: 'NIO Inc.', points: [point('No starting count.', ['c1'])] }] }),
    );

    expect(full?.sections[0]?.points[0]?.id).toBe('r1');
  });
});
