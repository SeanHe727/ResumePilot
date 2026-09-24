import { describe, expect, it } from 'vitest';

import type {
  DiagnosisReport,
  FullReport,
  ResumeSessionState,
  SourceFinding,
} from '../../src/domain.js';
import { everyFinding, generateReportTool } from '../../src/tools/generate-report.js';
import { writeFullReport } from '../../src/tools/write-report.js';
import type { ToolContext } from '../../src/tools/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { renderFull } from '../../src/skills/render-full.js';
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
  format: {
    overallScore: 90,
    metrics: { length: { wordCount: 400, pageCount: 1 } },
    issues: ['two fonts on one page'],
  },
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

/** Two entries, one of whose header lines carries contact details. */
const RESUME = {
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
          headerLines: ['Mobility Systems Company | AI Research Intern | Oct 2024 - May 2025'],
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
        {
          id: 'experience:1',
          sectionId: 'experience',
          index: 1,
          headerLines: ['A Second Company | Engineer | reach me on 138 0000 0000'],
          span: { start: 1, end: 2 },
          bullets: [],
        },
      ],
    },
  ],
  meta: { wordCount: 400, quality: 'clean', layoutWarnings: [] },
};

const STATE = { resume: RESUME } as unknown as ResumeSessionState;

const REPORT = {
  summary: {},
  perEntry: [],
  format: { overallScore: 90, metrics: {}, issues: ['two fonts on one page'] },
  improvementPlan: { immediate: ['name the figure'], shortTerm: [], longTerm: [] },
} as unknown as DiagnosisReport;

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

const point = (what: string, from: string[]) => ({
  what,
  why: 'a reader would ask for the number',
  evidence: 'Reduced latency',
  from,
  cost: 'about 6 words',
});

const entrySection = (entryId: string, ...points: unknown[]) => ({
  about: { type: 'entry', entryId },
  points,
});
const wideSection = (...points: unknown[]) => ({ about: { type: 'resume' }, points });

const accepted = (events: TraceEvent[]) =>
  events.find((e) => e.purpose === 'report points accepted')?.output as {
    offered: string[];
    links: Array<{ reportPointId: string; sourceFindingIds: string[] }>;
    unused: string[];
    invented: string[];
    unsourced: string[];
    unknownTargets: string[];
  };

describe('a finding that can be followed', () => {
  it('gives every finding an id that means something on its own', async () => {
    // A number is only meaningful beside the list that produced it: the same
    // reading gets a different one the moment another reader finds one more,
    // and two ids from different runs collide while meaning nothing to each
    // other. These are the lists this is meant to be read across.
    const findings = everyFinding(INPUT);
    const ids = findings.map((f) => f.id);

    expect(new Set(ids).size).toBe(ids.length);
    expect(ids[0]).toMatch(/^file_finding_[0-9a-f-]{36}$/);
    expect(ids[1]).toMatch(/^content_finding_[0-9a-f-]{36}$/);
    expect(ids[3]).toMatch(/^wording_finding_[0-9a-f-]{36}$/);
    expect(findings[1]).toMatchObject({
      role: 'content',
      target: 'experience:0:0',
      what: 'no measurable outcome',
      costWords: 6,
    });
  });

  it('mints a fresh set each time it is asked, so nothing is reused by accident', () => {
    // Two diagnoses of the same résumé raise similar things; calling them the
    // same finding is a judgement nobody has made yet.
    const first = everyFinding(INPUT).map((f) => f.id);
    const second = everyFinding(INPUT).map((f) => f.id);

    expect(first).not.toEqual(second);
  });
});

describe('through the tool that actually runs it', () => {
  /** The whole path: aggregate, choose a plan, write it up. */
  async function runReport(trace?: RecordingTrace) {
    const asked: string[] = [];
    const session = new SqliteSessionManager().create({ sourcePath: 'resume.md' });
    session.state = {
      resume: RESUME,
      formatDiagnosis: (INPUT as { format: unknown }).format,
      entryDiagnoses: (INPUT as { entries: unknown }).entries,
      wordingDiagnoses: (INPUT as { wording: unknown }).wording,
    } as never;

    const ctx = {
      session,
      queryEngine: {
        async query(params: { messages: Array<{ content: string }> }) {
          asked.push(params.messages[0]!.content);
          if (asked.length === 1) {
            return {
              type: 'text',
              content: JSON.stringify({ immediate: ['name the figure'], shortTerm: [], longTerm: [] }),
              usage: { inputTokens: 0, outputTokens: 0 },
              stopReason: 'end_turn',
            };
          }
          // Cites two findings by the short ids it was actually shown.
          const shown = [...asked[1]!.matchAll(/^- (\w\d+) \[/gm)].map((m) => m[1]!);
          return {
            type: 'text',
            content: JSON.stringify({
              sections: [entrySection('experience:0', point('No starting count.', [shown[1]!, shown[3]!]))],
            }),
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

    await generateReportTool.execute({} as never, ctx);
    // The long form never comes back through the tool result — it would put a
    // whole report in the coordinator's window. It is left on the session.
    const saved = (session.state as { latestReport?: { full?: FullReport } }).latestReport;
    return { asked, full: saved?.full };
  }

  it('shows the plan model the lines it has always seen', async () => {
    // Read off the prompt that actually goes out, not off a copy of the
    // formatting rule: the point is that this model's input did not change.
    const { asked } = await runReport();

    expect(asked[0]).toContain('- [experience:0:0, ~6 words] no measurable outcome');
    expect(asked[0]).toContain('- [experience:0:0, wording] opens with "Responsible for"');
    expect(asked[0]).not.toMatch(/_finding_/);
  });

  it('carries one set of ids across both model calls', async () => {
    // Minted twice, the plan and the write-up would hold different ids for the
    // same reading and every link between them would be a coincidence. The
    // plan model is shown no ids at all, so the only way to see that it and
    // the writer were handed the same set is to record both.
    const { trace, events } = recorder();
    const { asked, full } = await runReport(trace);

    const collected = (
      events.find((e) => e.purpose === 'findings collected')?.output as {
        findings: Array<{ id: string }>;
      }
    ).findings.map((f) => f.id);
    const weighed = (
      events.find((e) => e.purpose === 'plan chosen')?.input as { fromFindingIds: string[] }
    ).fromFindingIds;

    expect(weighed).toEqual(collected);
    expect(accepted(events).offered).toEqual(collected);
    // The writer sees short aliases and the record keeps the real ids, so the
    // two are joined by the mapping rather than by the model's copying.
    expect(asked[1]).not.toMatch(/_finding_[0-9a-f-]{36}/);
    expect(full?.sections[0]?.points[0]?.sourceFindingIds.every((id) => collected.includes(id))).toBe(true);
  });

  it('shows an example that is itself valid JSON', async () => {
    // "Return JSON of exactly this shape" followed by something that is not
    // JSON: the example had two alternatives for `about` written inline with
    // an `or` between them, so a model copying the shape it was given would
    // produce a reply that cannot be parsed and a report that never appears.
    // The mocks in these tests hand back valid JSON, so nothing else here
    // would ever notice.
    const { asked } = await runReport();
    const example = (prompt: string): unknown => {
      const tail = prompt.slice(prompt.lastIndexOf('Return JSON of exactly this shape:'));
      return JSON.parse(tail.slice(tail.indexOf('{'), tail.lastIndexOf('}') + 1));
    };

    // Both prompts, because they are the same mistake waiting in two places.
    expect(() => example(asked[0]!)).not.toThrow();
    expect(() => example(asked[1]!)).not.toThrow();

    const shape = example(asked[1]!) as {
      sections: Array<{ about: { type: string; entryId?: string }; points: unknown[] }>;
    };
    expect(shape.sections[0]?.about.type).toBe('entry');
    expect(shape.sections[0]?.about.entryId).toBeTruthy();
    expect(shape.sections[0]?.points).toHaveLength(1);
    // The other form is described in prose, where it cannot break the example.
    expect(asked[1]).toContain('{ "type": "resume" }');
  });

  it('titles the section from the parse, not from the model', async () => {
    const { full } = await runReport();

    expect(full?.sections[0]?.heading).toBe(
      'Mobility Systems Company | AI Research Intern | Oct 2024 - May 2025',
    );
    expect(full?.sections[0]?.target).toEqual({ type: 'entry', entryId: 'experience:0' });
  });
});

describe('the ids the model is asked to copy', () => {
  it('shows short aliases rather than uuids', async () => {
    // Of sixteen points in the first real run, two cited ids that did not
    // exist, and one of those was a uuid copied wrong: 37 characters where 36
    // were shown. Uuids are right for storing and expensive to echo.
    const { trace, events } = recorder();
    const findings = everyFinding(INPUT);
    let shown = '';

    await writeFullReport(REPORT, STATE, findings, {
      ...ctxWith({ sections: [] }, trace),
      queryEngine: {
        async query(params: { messages: Array<{ content: string }> }) {
          shown = params.messages[0]!.content;
          return {
            type: 'text',
            content: JSON.stringify({ sections: [] }),
            usage: { inputTokens: 0, outputTokens: 0 },
            stopReason: 'end_turn',
          };
        },
        getUsageSummary: () => '',
        checkBudget: () => ({ ok: true }),
      },
    } as unknown as ToolContext);

    expect(shown).not.toMatch(/_finding_[0-9a-f-]{36}/);
    expect(shown).toMatch(/^- f1 \[file, format\]/m);
    expect(shown).toMatch(/^- c1 \[content, experience:0:0\]/m);
    expect(shown).toMatch(/^- w1 \[wording, experience:0:0, wording\]/m);
  });

  it('stores the real id, never the alias', async () => {
    // The alias belongs to one prompt and means nothing outside it.
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({ sections: [entrySection('experience:0', point('No starting count.', ['c1']))] }),
    );

    expect(full?.sections[0]?.points[0]?.sourceFindingIds).toEqual([findings[1]!.id]);
  });

  it('still understands a real uuid, if one comes back instead', async () => {
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [entrySection('experience:0', point('No starting count.', [findings[1]!.id]))],
      }),
    );

    expect(full?.sections[0]?.points[0]?.sourceFindingIds).toEqual([findings[1]!.id]);
  });

  it('still counts an alias that was never offered as invented', async () => {
    const { trace, events } = recorder();

    await writeFullReport(
      REPORT,
      STATE,
      everyFinding(INPUT),
      ctxWith({ sections: [entrySection('experience:0', point('No starting count.', ['c9']))] }, trace),
    );

    expect(accepted(events).invented).toEqual(['c9']);
  });
});

describe('accepting what the report writer claims', () => {
  it('lets one finding stand behind several points', async () => {
    const findings = everyFinding(INPUT);
    const shared = findings[1]!.id;
    const { trace, events } = recorder();

    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith(
        {
          sections: [
            entrySection(
              'experience:0',
              point('No starting count.', [shared]),
              point('And no method.', [shared, findings[2]!.id]),
            ),
          ],
        },
        trace,
      ),
    );

    const points = full!.sections[0]!.points;
    expect(points).toHaveLength(2);
    expect(points.every((p) => p.sourceFindingIds.includes(shared))).toBe(true);
    expect(accepted(events).links.filter((l) => l.sourceFindingIds.includes(shared))).toHaveLength(2);
  });

  it('drops a source that was never offered', async () => {
    // A provenance chain nobody checks is a chain of whatever the model found
    // convenient to write. Existence only: whether the point follows from the
    // finding is a judgement nothing here can make.
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [
          entrySection('experience:0', point('No starting count.', [findings[1]!.id, 'made_up'])),
        ],
      }),
    );

    expect(full?.sections[0]?.points[0]?.sourceFindingIds).toEqual([findings[1]!.id]);
  });

  it('derives which readers raised it from the sources that checked out', async () => {
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [
          entrySection(
            'experience:0',
            point('No starting count.', [findings[1]!.id, findings[2]!.id, findings[3]!.id]),
          ),
        ],
      }),
    );

    expect(full?.sections[0]?.points[0]?.from).toEqual(['content', 'wording']);
  });
});

describe('filing a point under something real', () => {
  it('keeps a point filed under an entry that does not exist, and says so', async () => {
    // Losing the writing over a bad id would be the worse failure of the two,
    // and a silent one.
    const { trace, events } = recorder();
    const findings = everyFinding(INPUT);

    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith(
        { sections: [entrySection('experience:99', point('Still worth saying.', [findings[1]!.id]))] },
        trace,
      ),
    );

    expect(full?.sections[0]?.heading).toBe('Across the whole résumé');
    expect(full?.sections[0]?.points[0]?.what).toBe('Still worth saying.');
    expect(accepted(events).unknownTargets).toEqual(['experience:99']);
  });

  it('shows the parsed header and keeps a phone number out of it', async () => {
    // The heading is the parse's own words, and a header is exactly where a
    // contact detail ends up when a block was cut in with the entries.
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [entrySection('experience:1', point('Nothing to show here.', []))],
      }),
    );

    expect(full?.sections[0]?.heading).toContain('A Second Company');
    expect(full?.sections[0]?.heading).not.toContain('138 0000 0000');
    expect(renderFull({ ...REPORT, full }, 'r.pdf')).not.toContain('138 0000 0000');
  });

  it('files the whole-résumé points under one fixed title, after the entries', async () => {
    const findings = everyFinding(INPUT);
    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith({
        sections: [
          wideSection(point('The dates leave a gap.', [findings[0]!.id])),
          // Out of order on purpose: the second entry first.
          entrySection('experience:1', point('Nothing to show.', [])),
          entrySection('experience:0', point('No starting count.', [findings[1]!.id])),
        ],
      }),
    );

    expect(full?.sections.map((s) => s.heading)).toEqual([
      'Mobility Systems Company | AI Research Intern | Oct 2024 - May 2025',
      'A Second Company | Engineer | reach me on [phone]',
      'Across the whole résumé',
    ]);
  });
});

describe('what an empty answer must not leave behind', () => {
  it('mints nothing for a section with no usable points', async () => {
    // Numbering a point and counting its citations, and only then finding out
    // its section was empty, leaves ids belonging to nothing in the statistics
    // the whole record is read through.
    const { trace, events } = recorder();
    const findings = everyFinding(INPUT);

    const full = await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith(
        {
          sections: [
            entrySection('experience:0', { what: '   ', from: ['made_up'] }),
            entrySection('experience:0', point('The one real point.', [findings[1]!.id])),
          ],
        },
        trace,
      ),
    );

    expect(full?.sections[0]?.points).toHaveLength(1);
    expect(accepted(events).links).toHaveLength(1);
    // The discarded point's invented citation is not in the count either.
    expect(accepted(events).invented).toEqual([]);
  });

  it('returns nothing at all when no section holds a usable point', async () => {
    const full = await writeFullReport(
      REPORT,
      STATE,
      everyFinding(INPUT),
      ctxWith({ sections: [entrySection('experience:0', { what: '' }), wideSection()] }),
    );

    expect(full).toBeNull();
  });
});

describe('where each reading ended up', () => {
  it('answers which finding reached which point, not just which were used', async () => {
    const { trace, events } = recorder();
    const findings = everyFinding(INPUT);

    await writeFullReport(
      REPORT,
      STATE,
      findings,
      ctxWith(
        {
          sections: [
            entrySection('experience:0', point('No starting count.', [findings[1]!.id])),
            wideSection(point('Two fonts.', [findings[0]!.id, 'made_up'])),
          ],
        },
        trace,
      ),
    );

    const record = accepted(events);
    expect(record.links).toHaveLength(2);
    expect(record.links[0]?.sourceFindingIds).toEqual([findings[1]!.id]);
    expect(record.links[1]?.sourceFindingIds).toEqual([findings[0]!.id]);
    expect(record.offered).toEqual(findings.map((f) => f.id));
    expect(record.unused).toEqual([findings[2]!.id, findings[3]!.id]);
    expect(record.invented).toEqual(['made_up']);
    expect(record.unsourced).toEqual([]);
  });

  it('names the points that rest on nothing', async () => {
    const { trace, events } = recorder();

    const full = await writeFullReport(
      REPORT,
      STATE,
      everyFinding(INPUT),
      ctxWith({ sections: [entrySection('experience:0', point('No starting count.', []))] }, trace),
    );

    expect(accepted(events).unsourced).toEqual([full!.sections[0]!.points[0]!.id]);
  });

  it('records nothing when no trace is attached', async () => {
    const full = await writeFullReport(
      REPORT,
      STATE,
      everyFinding(INPUT),
      ctxWith({ sections: [entrySection('experience:0', point('No starting count.', []))] }),
    );

    expect(full?.sections[0]?.points[0]?.id).toMatch(/^report_point_[0-9a-f-]{36}$/);
  });
});

describe('a report written before any of this', () => {
  it('still renders, without ids or sources on its points', () => {
    // Sessions hold reports from before provenance existed, and `/report`
    // reads them back.
    const old = {
      ...REPORT,
      full: {
        sections: [
          {
            heading: 'Mobility Systems Company',
            points: [{ what: 'No starting count.', why: 'ask for it', from: ['content'] }],
          },
        ],
      },
    } as unknown as DiagnosisReport;

    const text = renderFull(old, 'r.pdf');

    expect(text).toContain('No starting count.');
    expect(text).toContain('raised by content');
  });
});
