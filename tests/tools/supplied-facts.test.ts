import { describe, expect, it } from 'vitest';

import type { Briefing, SubAgentResult } from '../../src/agent/types.js';
import type { ResumeSessionState } from '../../src/domain.js';
import { generateReportTool, reviewContentTool } from '../../src/tools/index.js';
import type { ToolContext } from '../../src/tools/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';

/**
 * A figure the candidate handed over, reaching the reader who needs it.
 *
 * `record_fact` writes to the session, and the readers of that field were a
 * rewrite tool and the coordinator's own context layer. So a specialist saw a
 * supplied figure only if the coordinator remembered to retype it into
 * `supplied`, and a review it forgot scored the line as though the figure had
 * never been given. The trace showed the fact recorded in turn 2 and no
 * re-review afterwards, so nothing ever proved the path worked — because it did
 * not.
 */
const ENTRY = {
  id: 'experience:0',
  sectionId: 'experience',
  index: 0,
  headerLines: ['A Company | Engineer'],
  span: { start: 0, end: 1 },
  bullets: [
    { id: 'experience:0:0', entryId: 'experience:0', index: 0, text: 'Cut latency', span: { start: 0, end: 1 } },
  ],
};

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
      entries: [ENTRY, { ...ENTRY, id: 'experience:1', index: 1, bullets: [{ ...ENTRY.bullets[0]!, id: 'experience:1:0', entryId: 'experience:1' }] }],
    },
  ],
  meta: { wordCount: 200, quality: 'clean', layoutWarnings: [] },
};

function dispatched(facts: ResumeSessionState['suppliedFacts'], input: Record<string, unknown> = {}) {
  const session = new SqliteSessionManager().create({ sourcePath: 'r.pdf' });
  session.state = { resume: RESUME, ...(facts ? { suppliedFacts: facts } : {}) } as never;
  let seen: Briefing | undefined;

  const ctx = {
    session,
    orchestrator: {
      failures: new Map<string, string>(),
      async diagnoseEntry(_entry: unknown, _roles: unknown, briefing?: Briefing) {
        seen = briefing;
        return {
          entryId: 'experience:0',
          substance: { entryId: 'experience:0', overallScore: 60, bullets: [] },
          wording: null,
          overallScore: 60,
          agentStats: [],
        };
      },
    },
    abortSignal: new AbortController().signal,
  } as unknown as ToolContext;

  return reviewContentTool
    .execute({ entryId: 'experience:0', ...input } as never, ctx)
    .then(() => seen);
}

describe('facts reaching the reader that needs them', () => {
  it('sends a fact recorded against a bullet of this entry', async () => {
    const briefing = await dispatched([
      { fact: 'p99 latency went from 800ms to 90ms', bulletId: 'experience:0:0' },
    ]);

    expect(briefing?.supplied).toContain('800ms to 90ms');
  });

  it('quotes it, because it is their words and not what the line says', async () => {
    // A specialist has to tell the two apart: this is something to judge the
    // line against, not something the line claims.
    const briefing = await dispatched([{ fact: 'the backlog was 40k cases', entryId: 'experience:0' }]);

    expect(briefing?.supplied).toBe('"the backlog was 40k cases"');
  });

  it('sends a general fact to every entry, since it constrains all of them', async () => {
    const briefing = await dispatched([{ fact: 'I cannot share revenue figures' }]);

    expect(briefing?.supplied).toContain('cannot share revenue figures');
  });

  it('keeps another entry’s fact out of this one', async () => {
    // Both ways a fact can name its target: by the bullet it is about, and by
    // the entry.
    for (const other of [
      { fact: 'this one is about the other role', bulletId: 'experience:1:0' },
      { fact: 'this one is about the other role', entryId: 'experience:1' },
    ]) {
      expect(await dispatched([other])).toBeUndefined();
    }
  });

  it('keeps what the coordinator said as well as what was recorded', async () => {
    // They are different things: one is what it took from the conversation, the
    // other is what the candidate actually said.
    const briefing = await dispatched(
      [{ fact: 'p99 went from 800ms to 90ms', bulletId: 'experience:0:0' }],
      { supplied: 'they mentioned the team was three people' },
    );

    expect(briefing?.supplied).toContain('three people');
    expect(briefing?.supplied).toContain('800ms to 90ms');
  });

  it('sends nothing when nothing was recorded', async () => {
    expect(await dispatched(undefined)).toBeUndefined();
  });
});

describe('the plan knowing a figure is already in hand', () => {
  it('shows the supplied facts to the model that splits by what it costs', async () => {
    // A finding that needs a number, filed under "go and find one" while the
    // number is already on the session, tells the candidate to look for
    // something they have handed over.
    const asked: string[] = [];
    const session = new SqliteSessionManager().create({ sourcePath: 'r.pdf' });
    session.state = {
      resume: RESUME,
      formatDiagnosis: { overallScore: 90, metrics: { length: { wordCount: 200, pageCount: 1 } }, issues: ['two fonts'] },
      entryDiagnoses: [
        { entryId: 'experience:0', overallScore: 40, bullets: [{ bulletId: 'experience:0:0', overallScore: 30, issues: [{ what: 'no figure', costWords: 6 }] }] },
      ],
      suppliedFacts: [{ fact: 'p99 went from 800ms to 90ms', bulletId: 'experience:0:0' }],
    } as never;

    await generateReportTool.execute({} as never, {
      session,
      queryEngine: {
        async query(params: { messages: Array<{ content: string }> }) {
          asked.push(params.messages[0]!.content);
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
    } as unknown as ToolContext);

    expect(asked[0]).toContain('800ms to 90ms');
    expect(asked[0]).toContain('a fix that only needs one of them is a fix they can make now');
  });
});
