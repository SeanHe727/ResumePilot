import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  statSync,
  utimesSync,
  writeFileSync,
} from 'node:fs';
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
        trace.event(() => ({ phase: 'result', model: 'a-model', status: 'success' }));
      })
      .then(() => {
        // The span's own opening and closing records bracket it.
        expect(events.map((e) => e.phase)).toEqual(['span', 'result', 'span-end']);
        expect(events[1]).toMatchObject({
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
      trace.event(() => ({ phase: 'result', status: 'success' }));
    });

    expect(spanId).toBeDefined();
    // The opening record carries that id, so the parent resolves inside the file.
    expect(events[0]).toMatchObject({ phase: 'span', eventId: spanId });
    expect(events[1]?.parentEventId).toBe(spanId);
  });

  it('keeps a nested agent under the one that called it', async () => {
    const { sink, events } = collect();
    const trace = new RecordingTrace(sink, root);

    await trace.span({ actor: { kind: 'specialist', id: 'content' } }, async () => {
      const outer = trace.current()!.eventId;
      await trace.span({ actor: { kind: 'nested', id: 'deep-research' } }, async () => {
        expect(trace.current()?.parentEventId).toBe(outer);
        trace.event(() => ({ phase: 'tool', tool: 'web_search', status: 'success' }));
      });
    });

    expect(events.find((e) => e.phase === 'tool')?.actor).toEqual({
      kind: 'nested',
      id: 'deep-research',
    });
  });

  it('keeps two specialists running at once in separate branches', async () => {
    // The orchestrator fans out through a semaphore pool. Interleaved spans
    // would put one agent's prompt under another agent's name.
    const { sink, events } = collect();
    const trace = new RecordingTrace(sink, root);

    const run = (id: string, delay: number) =>
      trace.span({ actor: { kind: 'specialist', id } }, async () => {
        await new Promise((resolve) => setTimeout(resolve, delay));
        trace.event(() => ({ phase: 'result', status: 'success', purpose: id }));
      });

    await Promise.all([run('content', 4), run('wording', 1), run('narrative', 2)]);

    for (const event of events.filter((e) => e.purpose !== undefined)) {
      expect(event.actor.id, 'an event landed under the wrong agent').toBe(event.purpose);
    }
  });

  it('leaves an event with no span parentless rather than inventing one', () => {
    // An orphan is a finding about the instrumentation. A made-up parent is a
    // finding about nothing.
    const { sink, events } = collect();
    new RecordingTrace(sink, root).event(() => ({ phase: 'input' }));

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

describe('when the recording itself fails', () => {
  it('does not let a broken sink reach the work being recorded', async () => {
    // A full disk used to arrive inside `query()`, where it was classified as
    // a model failure, retried three times against the API, and recorded as a
    // provider that would not answer.
    const warnings: string[] = [];
    const trace = new RecordingTrace(
      () => {
        throw new Error('ENOSPC: no space left on device');
      },
      root,
      (text) => warnings.push(text),
    );

    const answer = await trace.span({ actor: { kind: 'main', id: 'main-agent' } }, async () => {
      trace.event(() => ({ phase: 'result', status: 'success' }));
      return 'the work carried on';
    });

    expect(answer).toBe('the work carried on');
    expect(trace.dropped).toBeGreaterThan(0);
  });

  it('says so once, rather than silently or every time', () => {
    // Silence would leave a reader drawing conclusions from gaps we created;
    // one line per lost event would bury the run's own output.
    const warnings: string[] = [];
    const trace = new RecordingTrace(
      () => {
        throw new Error('EACCES');
      },
      root,
      (text) => warnings.push(text),
    );

    for (let i = 0; i < 5; i++) trace.event(() => ({ phase: 'input' }));

    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toMatch(/incomplete/);
    expect(trace.dropped).toBe(5);
  });

  it('survives an instrumentation point that throws while building an event', () => {
    const trace = new RecordingTrace(collect().sink, root, () => {});

    expect(() =>
      trace.event(() => {
        throw new Error('a getter blew up');
      }),
    ).not.toThrow();
    expect(trace.dropped).toBe(1);
  });
});

describe('the trace that is switched off', () => {
  it('records nothing and changes nothing', async () => {
    const trace = new NoTrace();

    let built = 0;
    trace.event(() => {
      built += 1;
      return { phase: 'input' };
    });

    // Not "records nothing": never built. The argument is the expensive part —
    // a copy of the messages, the tool schemas, a snapshot of the answer — and
    // a switched-off run that still paid for all of it is the reason this takes
    // a factory rather than a value.
    expect(built).toBe(0);
    expect(trace.enabled).toBe(false);
    expect(trace.current()).toBeUndefined();
    await expect(
      trace.span({ actor: { kind: 'main', id: 'main-agent' } }, async () => 42),
    ).resolves.toBe(42);
  });
});

describe('storing a second copy of a résumé', () => {
  const temp = (): string => mkdtempSync(join(tmpdir(), 'trace-test-'));

  /** A directory shaped like one of ours, optionally older than the window. */
  function run(dir: string, name: string, opts: { aged?: boolean; file?: boolean } = {}): string {
    const path = join(dir, name);
    mkdirSync(path, { recursive: true });
    if (opts.file !== false) writeFileSync(join(path, 'trace.jsonl'), '{}\n');
    if (opts.aged) {
      const ancient = new Date(Date.now() - 40 * 24 * 60 * 60 * 1000);
      utimesSync(path, ancient, ancient);
    }
    return path;
  }

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

  it('leaves alone anything it did not write', () => {
    // `dir` is whatever an environment variable pointed at, and this deletes
    // things. A directory one level too high turns a debug switch into a
    // delete command over somebody's own folders.
    const dir = temp();
    const notARun = run(dir, 'my-notes', { aged: true });
    const namedLikeARunButEmpty = run(dir, '0f9c1a77-3333-4aaa-8bbb-0123456789ab', {
      aged: true,
      file: false,
    });

    new JsonlTraceWriter({ dir, traceId: 'run-1', keepDays: 7 });

    expect(existsSync(notARun)).toBe(true);
    expect(existsSync(namedLikeARunButEmpty)).toBe(true);
  });

  it('leaves this run alone even when its directory is older than the window', () => {
    // A debug session resumed under the same trace id appends to a directory
    // the sweep would otherwise be entitled to delete — and `mkdir` on an
    // existing directory does not make it look recent.
    const dir = temp();
    // Shaped like what the app generates, so the sweep would otherwise be
    // entitled to it — and `mkdir` on an existing directory does not make it
    // look recent.
    const id = '0f9c1a77-4444-4aaa-8bbb-0123456789ab';
    const reused = run(dir, id, { aged: true });

    const writer = new JsonlTraceWriter({ dir, traceId: id, keepDays: 7 });

    expect(existsSync(reused)).toBe(true);
    expect(writer.path).toContain(join(id, 'trace.jsonl'));
  });

  it('clears runs past the retention window, and leaves this one', () => {
    const dir = temp();
    const old = run(dir, '0f9c1a77-1111-4aaa-8bbb-0123456789ab', { aged: true });
    const recent = run(dir, '0f9c1a77-2222-4aaa-8bbb-0123456789ab');

    new JsonlTraceWriter({ dir, traceId: 'run-1', keepDays: 7 });

    expect(existsSync(old)).toBe(false);
    expect(existsSync(recent)).toBe(true);
    expect(existsSync(join(dir, 'run-1'))).toBe(true);
  });
});

describe('the last boundary before disk', () => {
  const temp = (): string => mkdtempSync(join(tmpdir(), 'trace-writer-'));
  const event = (extra: Partial<TraceEvent>): TraceEvent => ({
    traceId: 'run-1',
    eventId: 'e1',
    sessionId: 's1',
    turn: 1,
    actor: { kind: 'main', id: 'main-agent' },
    phase: 'result',
    timestamp: new Date().toISOString(),
    ...extra,
  });

  it('withholds a model working under any of the names a provider gives it', () => {
    // The engine already drops the two fields it can see typed. This is the
    // same rule at the file, because the next instrumentation points are
    // written by someone reading the plan rather than this file, and one of
    // them recording a raw provider payload is how an opaque blob arrives in a
    // file we said would not hold one.
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1' });
    writer.write(
      event({
        output: {
          content: 'the visible answer',
          reasoning: 'A',
          reasoning_content: 'B',
          encrypted_content: 'C',
          thinking: 'D',
          responses_items: [{ type: 'reasoning', summary: 'E' }],
        },
      }),
    );

    const written = readFileSync(writer.path, 'utf8');
    for (const secret of ['"A"', '"B"', '"C"', '"D"', '"E"']) {
      expect(written, `left in: ${secret}`).not.toContain(secret);
    }
    expect(written).toContain('the visible answer');
  });

  it('marks what it withheld rather than deleting the key', () => {
    // A field that vanishes reads exactly like a field the model never
    // returned, and a reader drawing a conclusion from an absence we created
    // is the failure this whole facility exists to prevent.
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1' });
    writer.write(event({ output: { reasoning: 'at length' } }));

    const line = JSON.parse(readFileSync(writer.path, 'utf8').trim()) as TraceEvent;
    expect((line.output as { reasoning: string }).reasoning).toBe('[reasoning omitted]');
  });

  it('counts bytes, so a résumé in Chinese does not overrun the cap it declares', () => {
    // `line.length` counts characters. Chinese is three bytes each and an emoji
    // four, so a cap counted that way lets the file reach several times the
    // size it promises — on exactly the documents this product is for.
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1', maxBytes: 600 });

    for (let i = 0; i < 10; i++) {
      writer.write(event({ eventId: `e${i}`, output: '负责后端服务的性能优化🚀'.repeat(8) }));
    }

    expect(statSync(writer.path).size).toBeLessThanOrEqual(600);
    expect(readFileSync(writer.path, 'utf8')).toContain('trace stopped at');
  });

  it('stays inside the cap it declares, note included', () => {
    // The note saying recording stopped used to be appended unconditionally,
    // which put the file over the one number this promises by exactly its own
    // length. Room is kept back for it instead.
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1', maxBytes: 900 });

    for (let i = 0; i < 40; i++) {
      writer.write(event({ eventId: `e${i}`, output: 'x'.repeat(100) }));
    }

    expect(statSync(writer.path).size).toBeLessThanOrEqual(900);
    expect(readFileSync(writer.path, 'utf8')).toContain('trace stopped at');
  });

  it('writes nothing at all rather than overrun an absurd cap', () => {
    // Below the room kept back for the note, even the note does not fit. The
    // cap is the promise, so it wins: an empty file is the honest outcome.
    const dir = temp();
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1', maxBytes: 100 });

    writer.write(event({ output: 'x'.repeat(50) }));

    const size = existsSync(writer.path) ? statSync(writer.path).size : 0;
    expect(size).toBeLessThanOrEqual(100);
  });

  it('counts what the file already holds when a run is resumed into it', () => {
    // Starting the count at zero lets a reused directory grow to a multiple of
    // the cap, which is the one number this promises.
    // Sized so exactly one line fits inside the budget: the second writer must
    // refuse the next one, and only will if it knows what is already there.
    const dir = temp();
    const first = new JsonlTraceWriter({ dir, traceId: 'run-1', maxBytes: 1_000 });
    first.write(event({ output: 'x'.repeat(300) }));
    const afterFirst = statSync(first.path).size;

    const second = new JsonlTraceWriter({ dir, traceId: 'run-1', maxBytes: 1_000 });
    second.write(event({ output: 'y'.repeat(300) }));

    expect(statSync(second.path).size).toBeLessThan(afterFirst * 2);
    expect(statSync(second.path).size).toBeLessThanOrEqual(1_000);
    expect(readFileSync(second.path, 'utf8')).toContain('trace stopped at');
  });
});
