import { describe, expect, it } from 'vitest';

import { parseResumeTool } from '../../src/tools/index.js';
import type { ToolContext } from '../../src/tools/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { RecordingTrace } from '../../src/trace/index.js';
import type { TraceEvent } from '../../src/trace/index.js';

/**
 * The shape the whole run then proceeds on.
 *
 * The most consequential finding of the first paid run — why a projects section
 * produced no entries, and therefore why four dispatches were rejected — could
 * not be produced from the trace at all. Both reviewers had to step outside it
 * and re-run the parser by hand. This is the record that closes that.
 *
 * Row-level detail is deliberately not here: the parser is deterministic and
 * the file is still on disk, so anyone can re-run it. What cannot be recovered
 * afterwards is which shape a particular run was reading when it chose what to
 * dispatch.
 */
type Shape = {
  quality: string;
  sections: Array<{
    id: string;
    kind: string;
    entries: Array<{ id: string; bullets: number }>;
    sectionBullets: number;
    infoLines: number;
  }>;
  integrity: { anomalies: Array<{ kind: string; at: string }>; placedRows: number };
};

function ctxWith(trace?: RecordingTrace): ToolContext {
  return {
    session: new SqliteSessionManager().create({ sourcePath: '' }),
    queryEngine: {
      query: async () => {
        throw new Error('parsing reads the page; it asks no model anything');
      },
    },
    ...(trace ? { trace } : {}),
    abortSignal: new AbortController().signal,
  } as unknown as ToolContext;
}

function recorder() {
  const events: TraceEvent[] = [];
  return {
    events,
    trace: new RecordingTrace((e) => events.push(e), {
      traceId: 't1',
      sessionId: 's1',
      turn: 0,
    }),
  };
}

const parsed = (events: TraceEvent[]): Shape =>
  events.find((e) => e.tool === 'parse_resume' && e.phase === 'result')?.output as Shape;

describe('what the parse leaves on the record', () => {
  it('records the section shape the run will be reading', async () => {
    const { trace, events } = recorder();

    await parseResumeTool.execute({ path: 'tests/fixtures/resume_example.pdf' }, ctxWith(trace));

    const shape = parsed(events);
    expect(shape.quality).toBe('clean');
    const experience = shape.sections.find((s) => s.kind === 'experience')!;
    expect(experience.entries.map((e) => e.bullets)).toEqual([4, 3]);
  });

  it('records the counts that would explain a rejected dispatch', async () => {
    // `entries: 0, sectionBullets: 6` was the whole story of the first run's
    // four failures, and it took a hand-run parser to find it. The labeller
    // reads those titles now, so the numbers here are the answer rather than
    // the symptom — and they are the numbers that would show the symptom again.
    const { trace, events } = recorder();

    await parseResumeTool.execute({ path: 'tests/fixtures/resume_example.pdf' }, ctxWith(trace));

    const projects = parsed(events).sections.find((s) => s.kind === 'project')!;
    expect(projects.entries.map((e) => e.bullets)).toEqual([3, 3]);
    expect(projects.sectionBullets).toBe(0);
  });

  it('carries the reconciliation, anomalies included', async () => {
    const { trace, events } = recorder();

    await parseResumeTool.execute({ path: 'tests/fixtures/resume_example.pdf' }, ctxWith(trace));

    const { integrity } = parsed(events);
    expect(integrity.placedRows).toBeGreaterThan(0);
    // The list is there whether or not it has anything in it: a reader asking
    // "was this parse clean" needs the answer recorded, not inferred from a
    // missing field.
    expect(Array.isArray(integrity.anomalies)).toBe(true);
  });

  it('records a file that opened and gave nothing back', async () => {
    // Otherwise the record shows a session that simply never had a document.
    const { trace, events } = recorder();

    const result = await parseResumeTool.execute({ path: 'tests/fixtures/scanned.pdf' }, ctxWith(trace));

    expect(result.success).toBe(false);
    const failure = events.find((e) => e.phase === 'failure');
    expect(failure?.tool).toBe('parse_resume');
    expect(failure?.error?.message).toMatch(/scanned image|no readable text/i);
  });

  it('records a path that is not there as a failure of the parse', async () => {
    const { trace, events } = recorder();

    await parseResumeTool.execute({ path: 'tests/fixtures/nope.pdf' }, ctxWith(trace));

    expect(events.find((e) => e.phase === 'failure')?.error?.message).toBeTruthy();
  });

  it('changes nothing when no trace is attached', async () => {
    const result = await parseResumeTool.execute(
      { path: 'tests/fixtures/resume_example.pdf' },
      ctxWith(),
    );

    expect(result.success).toBe(true);
  });
});
