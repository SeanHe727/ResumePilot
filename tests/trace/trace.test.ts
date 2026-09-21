import { mkdtempSync, mkdirSync, readFileSync, statSync, utimesSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { JsonlTraceWriter, NoTrace, RecordingTrace } from '../../src/trace/index.js';
import type { TraceEvent } from '../../src/trace/index.js';

/**
 * The trace exists to answer whether an agent behaved sensibly, which nothing
 * else in the system can: the audit log is built to keep enough of a call to
 * recognise it and deliberately not enough to reconstruct it.
 *
 * So these test two things. That an event can be attributed — to a run, a
 * turn, an agent, and whatever span it happened inside — because a complete
 * prompt nobody can place answers nothing. And that a second copy of somebody's
 * résumé is stored the way one should be.
 */
function collect(): { sink: (e: TraceEvent) => void; events: TraceEvent[] } {
  const events: TraceEvent[] = [];
  return { sink: (e) => events.push(e), events };
}

const root = { traceId: 't1', sessionId: 's1', turn: 3 };

describe('attributing an event', () => {
  it('takes the run, the turn and the agent from the span it happened in', () => {
    // `QueryParams` names a task and nothing else, so an event recorded at the
    // query engine has no idea whose call it was. The span supplies it.
    const { sink, events } = collect();
    const trace = new RecordingTrace(sink, root);

    return trace
      .span({ actor: { kind: 'specialist', id: 'content' } }, async () => {
        trace.event({ phase: 'result', model: 'a-model', success: true });
      })
      .then(() => {
        expect(events).toHaveLength(1);
        expect(events[0]).toMatchObject({
          traceId: 't1',
          sessionId: 's1',
          turn: 3,
          actor: { kind: 'specialist', id: 'content' },
        });
      });
  });

  it('names the span an event happened inside as its parent', async () => {
    const { sink, events } = collect();
    const trace = new RecordingTrace(sink, root);
    let spanId: string | undefined;

    await trace.span({ actor: { kind: 'main', id: 'main-agent' } }, async () => {
      spanId = trace.current()?.eventId;
      trace.event({ phase: 'result', success: true });
    });

    expect(spanId).toBeDefined();
    expect(events[0]?.parentEventId).toBe(spanId);
  });

  it('keeps a nested agent under the one that called it', async () => {
    const { sink, events } = collect();
    const trace = new RecordingTrace(sink, root);

    await trace.span({ actor: { kind: 'specialist', id: 'content' } }, async () => {
      const outer = trace.current()!.eventId;
      await trace.span({ actor: { kind: 'nested', id: 'deep-research' } }, async () => {
        expect(trace.current()?.parentEventId).toBe(outer);
        trace.event({ phase: 'tool', tool: 'web_search', success: true });
      });
    });

    expect(events[0]?.actor).toEqual({ kind: 'nested', id: 'deep-research' });
  });

  it('keeps two specialists running at once in separate branches', async () => {
    // The orchestrator fans out through a semaphore pool. Interleaved spans
    // would put one agent's prompt under another agent's name.
    const { sink, events } = collect();
    const trace = new RecordingTrace(sink, root);

    const run = (id: string, delay: number) =>
      trace.span({ actor: { kind: 'specialist', id } }, async () => {
        await new Promise((resolve) => setTimeout(resolve, delay));
        trace.event({ phase: 'result', success: true, purpose: id });
      });

    await Promise.all([run('content', 4), run('wording', 1), run('narrative', 2)]);

    for (const event of events) {
      expect(event.actor.id, 'an event landed under the wrong agent').toBe(event.purpose);
    }
  });

  it('leaves an event with no span parentless rather than inventing one', () => {
    // An orphan is a finding about the instrumentation. A made-up parent is a
    // finding about nothing.
    const { sink, events } = collect();
    new RecordingTrace(sink, root).event({ phase: 'input' });

    expect(events[0]?.parentEventId).toBeUndefined();
    expect(events[0]?.actor).toEqual({ kind: 'system', id: 'unknown' });
  });

  it('returns what the traced body returned', async () => {
    const trace = new RecordingTrace(collect().sink, root);

    await expect(
      trace.span({ actor: { kind: 'main', id: 'main-agent' } }, async () => 'answer'),
    ).resolves.toBe('answer');
  });
});

describe('the trace that is switched off', () => {
  it('records nothing and changes nothing', async () => {
    const trace = new NoTrace();

    trace.event();
    expect(trace.current()).toBeUndefined();
    await expect(
      trace.span({ actor: { kind: 'main', id: 'main-agent' } }, async () => 42),
    ).resolves.toBe(42);
  });
});

describe('storing a second copy of a résumé', () => {
  const temp = (): string => mkdtempSync(join(tmpdir(), 'trace-test-'));

  it('writes one run per directory, readable only by its owner', () => {
    // `.gitignore` is a convention about version control, not a permission.
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1' });
    writer.write({
      traceId: 'run-1',
      eventId: 'e1',
      sessionId: 's1',
      turn: 1,
      actor: { kind: 'main', id: 'main-agent' },
      phase: 'input',
      timestamp: new Date().toISOString(),
    });

    expect(writer.path).toContain(join('run-1', 'trace.jsonl'));
    expect(statSync(writer.path).mode & 0o777).toBe(0o600);
    expect(statSync(join(dir, 'run-1')).mode & 0o777).toBe(0o700);
  });

  it('keeps a credential out, wherever it is nested', () => {
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1' });
    writer.write({
      traceId: 'run-1',
      eventId: 'e1',
      sessionId: 's1',
      turn: 1,
      actor: { kind: 'main', id: 'main-agent' },
      phase: 'tool',
      input: { headers: { authorization: 'Bearer sk-live-1234' }, apiKey: 'sk-also-this' },
      timestamp: new Date().toISOString(),
    });

    const written = readFileSync(writer.path, 'utf8');
    expect(written).not.toContain('sk-live-1234');
    expect(written).not.toContain('sk-also-this');
    expect(written).toContain('[redacted]');
  });

  it('drops runtime plumbing that would serialise to nothing useful', () => {
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1' });
    writer.write({
      traceId: 'run-1',
      eventId: 'e1',
      sessionId: 's1',
      turn: 1,
      actor: { kind: 'main', id: 'main-agent' },
      phase: 'tool',
      input: { onTextDelta: () => {}, abortSignal: new AbortController().signal, keep: 'this' },
      timestamp: new Date().toISOString(),
    });

    const line = JSON.parse(readFileSync(writer.path, 'utf8').trim()) as TraceEvent;
    expect(line.input).toEqual({ keep: 'this' });
  });

  it('stops at its size cap and says so, rather than filling the disk', () => {
    // A stuck agent loops, and a trace of a loop is useless and unbounded.
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1', maxBytes: 400 });
    const event = (i: number): TraceEvent => ({
      traceId: 'run-1',
      eventId: `e${i}`,
      sessionId: 's1',
      turn: 1,
      actor: { kind: 'main', id: 'main-agent' },
      phase: 'result',
      output: 'x'.repeat(200),
      timestamp: new Date().toISOString(),
    });

    for (let i = 0; i < 10; i++) writer.write(event(i));

    const lines = readFileSync(writer.path, 'utf8').trim().split('\n');
    expect(lines.length).toBeLessThan(10);
    expect(lines.at(-1)).toContain('trace stopped at');
    expect(lines.at(-1)).toContain('the run continued');
  });

  it('leaves this run alone even when its directory is older than the window', () => {
    // A debug session resumed under the same trace id appends to a directory
    // the sweep would otherwise be entitled to delete — and `mkdir` on an
    // existing directory does not make it look recent.
    const dir = temp();
    const reused = join(dir, 'run-1');
    mkdirSync(reused, { recursive: true });
    const ancient = new Date(Date.now() - 40 * 24 * 60 * 60 * 1000);
    utimesSync(reused, ancient, ancient);

    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1', keepDays: 7 });

    expect(existsSync(reused)).toBe(true);
    expect(writer.path).toContain(join('run-1', 'trace.jsonl'));
  });

  it('clears runs past the retention window, and leaves this one', () => {
    const dir = temp();
    const old = join(dir, 'last-month');
    mkdirSync(old, { recursive: true });
    const ancient = new Date(Date.now() - 40 * 24 * 60 * 60 * 1000);
    utimesSync(old, ancient, ancient);

    const recent = join(dir, 'yesterday');
    mkdirSync(recent, { recursive: true });

    new JsonlTraceWriter({ dir, traceId: 'run-1', keepDays: 7 });

    expect(existsSync(old)).toBe(false);
    expect(existsSync(recent)).toBe(true);
    expect(existsSync(join(dir, 'run-1'))).toBe(true);
  });
});
