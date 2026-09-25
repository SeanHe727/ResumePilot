import { describe, expect, it } from 'vitest';

import type { TraceEvent } from '../../src/trace/index.js';
import { renderTraceSummary, summariseTrace } from '../../src/trace/summary.js';

/**
 * The counts a review of a paid run starts from.
 *
 * Built from events shaped the way the writers produce them, because each of
 * these was once counted by hand from the first traced run and counted
 * differently by the two people who did it.
 */
let n = 0;
function ev(partial: Partial<TraceEvent> & Pick<TraceEvent, 'phase'>): TraceEvent {
  n += 1;
  return {
    traceId: 't',
    eventId: `e${n}`,
    sessionId: 's',
    turn: 1,
    actor: { kind: 'main', id: 'main-agent' },
    timestamp: '2026-09-25T00:00:00Z',
    ...partial,
  };
}

describe('summariseTrace', () => {
  it('pairs a refused dispatch with its reason, whichever field named the target', () => {
    const events = [
      ev({ phase: 'input', input: { message: 'review it' } }),
      ev({ phase: 'tool', tool: 'review_content', toolCallId: 'a', input: { entryId: 'Agent Runtime Suite' } }),
      ev({
        phase: 'failure',
        tool: 'review_content',
        toolCallId: 'a',
        output: { success: false, error: { code: 'input_error', message: 'no entry Agent Runtime Suite' } },
      }),
      ev({ phase: 'tool', tool: 'examine_technical_depth', toolCallId: 'b', input: { about: 's2:e0:b1' } }),
    ];

    const [turn] = summariseTrace(events).turns;

    expect(turn?.said).toBe('review it');
    expect(turn?.calls).toEqual([
      { tool: 'review_content', target: 'Agent Runtime Suite', status: 'error', error: 'no entry Agent Runtime Suite' },
      // Never answered: a run cut off mid-call, and it must not read as a success.
      { tool: 'examine_technical_depth', target: 's2:e0:b1', status: 'unfinished' },
    ]);
  });

  it('says which sub-agents were briefed with what the candidate supplied', () => {
    const span = ev({ phase: 'span', actor: { kind: 'specialist', id: 'content' } });
    const events = [
      span,
      ev({
        phase: 'dispatch',
        parentEventId: span.eventId,
        actor: { kind: 'specialist', id: 'content' },
        target: { entryId: 's2:e0' },
        input: { role: 'content', briefing: 'What the candidate has said, which the page does not: p99 800→90 ms' },
      }),
      ev({ phase: 'result', parentEventId: span.eventId, actor: { kind: 'specialist', id: 'content' }, durationMs: 4000 }),
      ev({ phase: 'span-end', parentEventId: span.eventId, actor: { kind: 'specialist', id: 'content' } }),
    ];

    const summary = summariseTrace(events);

    expect(summary.turns[0]?.agents).toEqual([
      { role: 'content', kind: 'specialist', status: 'success', durationMs: 4000, withSuppliedFacts: true, target: 's2:e0' },
    ]);
    expect(summary.spans).toEqual({ opened: 1, closed: 1, unclosed: 0, orphans: 0 });
  });

  it('prices model calls, and charges nothing for a cached answer', () => {
    const usage = { inputTokens: 1_000_000, outputTokens: 0 };
    const events = [
      ev({ phase: 'result', stage: 'request', model: 'claude-opus-5', usage, attempts: 3 }),
      ev({ phase: 'result', stage: 'request', model: 'claude-opus-5', usage, cached: true, attempts: 0 }),
      ev({ phase: 'failure', stage: 'request', model: 'claude-opus-5', error: { message: '429' }, attempts: 1 }),
    ];

    const { model } = summariseTrace(events);

    expect(model).toMatchObject({ calls: 3, cached: 1, failed: 1, retries: 2, inputTokens: 1_000_000 });
    expect(model.costUsd).toBeCloseTo(5, 5);
  });

  it('flags an unclosed span, an orphan, and a trace the writer cut short', () => {
    const events = [
      ev({ phase: 'span' }),
      ev({ phase: 'input', parentEventId: 'nowhere' }),
      ev({ phase: 'failure', error: { message: 'trace stopped at 1024 bytes; the run continued' } }),
    ];

    const summary = summariseTrace(events);

    expect(summary.spans).toMatchObject({ unclosed: 1, orphans: 1 });
    expect(summary.truncated).toBe(true);
    expect(renderTraceSummary(summary)).toContain('TRUNCATED');
  });

  it('keeps what the report writer said about findings and points', () => {
    const events = [
      ev({
        phase: 'decision',
        purpose: 'report points accepted',
        output: { offered: ['a', 'b', 'c'], unused: ['c'], invented: ['zz'], unsourced: [], unknownTargets: [] },
      }),
    ];

    expect(summariseTrace(events).turns[0]?.reportLinks).toEqual({
      offered: 3,
      unused: 1,
      invented: ['zz'],
      unsourced: [],
      unknownTargets: [],
    });
  });
});
