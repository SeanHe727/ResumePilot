import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { loadConfig } from '../../src/config.js';
import { QueryEngine } from '../../src/query-engine/engine.js';
import { QueryEngineError } from '../../src/query-engine/types.js';
import type { LLMProvider, StreamEvent } from '../../src/query-engine/types.js';
import { JsonlTraceWriter, RecordingTrace } from '../../src/trace/index.js';
import type { Trace, TraceEvent } from '../../src/trace/index.js';

/**
 * Every model call in the system passes through `query()` — the main agent,
 * each specialist, Deep Research, the report writer. So this is where a trace
 * either sees the whole conversation or misses part of it silently.
 *
 * What these check is the difference from the audit log, which records the
 * same calls and is built to keep too little of them to reconstruct: here the
 * prompt is whole, the failure is on the record, and the one thing deliberately
 * left out stays out.
 */
const stream = (events: StreamEvent[]): LLMProvider => ({
  name: 'claude',
  async *stream(): AsyncIterable<StreamEvent> {
    for (const event of events) yield event;
  },
  async countTokens() {
    return 0;
  },
});

const failing = (err: unknown): LLMProvider => ({
  name: 'claude',
  // eslint-disable-next-line require-yield
  async *stream(): AsyncIterable<StreamEvent> {
    throw err;
  },
  async countTokens() {
    return 0;
  },
});

/** Seeded straight into the private provider map, as the other engine tests do. */
function engineWith(provider: LLMProvider, trace?: Trace) {
  const engine = new QueryEngine({
    config: loadConfig({}),
    cachePath: ':memory:',
    retry: { maxRetries: 2, baseDelayMs: 0, maxDelayMs: 0, backoffMultiplier: 1 },
    ...(trace ? { trace } : {}),
  });
  (engine as unknown as { providers: Map<string, LLMProvider> }).providers.set('claude', provider);
  return engine;
}

function recorder(): { trace: RecordingTrace; events: TraceEvent[] } {
  const events: TraceEvent[] = [];
  return {
    trace: new RecordingTrace((e) => events.push(e), {
      traceId: 't1',
      sessionId: 's1',
      turn: 1,
    }),
    events,
  };
}

const answered: StreamEvent[] = [
  { type: 'text_delta', content: '{"verdict":"no figure"}' },
  { type: 'message_end', usage: { inputTokens: 900, outputTokens: 120 }, stopReason: 'end_turn' },
];

describe('what the query engine puts on the record', () => {
  it('keeps the prompt whole, where the audit log keeps 200 characters of it', async () => {
    const { trace, events } = recorder();
    const long = 'Reduced p99 latency. '.repeat(60);
    const engine = engineWith(stream(answered), trace);

    await engine.query({
      task: 'diagnose_bullet',
      systemPrompt: 'You read one bullet and score it.',
      messages: [{ role: 'user', content: long }],
    });

    const [event] = events;
    expect(event?.phase).toBe('result');
    const input = event?.input as { systemPrompt: string; messages: Array<{ content: string }> };
    expect(input.systemPrompt).toBe('You read one bullet and score it.');
    expect(input.messages[0]?.content).toBe(long);
    expect(event?.output).toMatchObject({ content: '{"verdict":"no figure"}' });
    expect(event?.usage).toEqual({ inputTokens: 900, outputTokens: 120 });
  });

  it('records which model actually answered, not which one was asked for', async () => {
    // The router picks per task. A trace naming the requested model would
    // explain neither the cost nor the answer.
    const { trace, events } = recorder();

    await engineWith(stream(answered), trace).query({
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
    });

    expect(events[0]?.model).toBeTruthy();
    expect(events[0]?.provider).toBe('claude');
  });

  it('puts a failed call on the record, with what was asked and how often', async () => {
    // The half a reader most often needs explained, and the half that leaves
    // no trace anywhere else: a call that threw returned nothing to log.
    const { trace, events } = recorder();
    const engine = engineWith(
      failing(new QueryEngineError('overloaded', 'overloaded', true)),
      trace,
    );

    await expect(
      engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'a bullet' }] }),
    ).rejects.toThrow();

    expect(events).toHaveLength(1);
    expect(events[0]).toMatchObject({ phase: 'failure', success: false, attempts: 3 });
    expect(events[0]?.error).toContain('overloaded');
    expect((events[0]?.input as { messages: unknown[] }).messages).toHaveLength(1);
  });

  it('marks an answer that came from cache as one', async () => {
    // Two identical questions costing different amounts is a thing a reader
    // will ask about, and the conversation looks the same either way.
    const { trace, events } = recorder();
    const engine = engineWith(stream(answered), trace);
    const params = { task: 'diagnose_bullet' as const, messages: [{ role: 'user' as const, content: 'a bullet' }] };

    await engine.query(params);
    await engine.query(params);

    expect(events).toHaveLength(2);
    expect(events[0]?.cached).toBeUndefined();
    expect(events[1]?.cached).toBe(true);
    expect(events[1]?.output).toMatchObject({ content: '{"verdict":"no figure"}' });
  });

  it('attributes the call to the agent whose span it ran in', async () => {
    const { trace, events } = recorder();
    const engine = engineWith(stream(answered), trace);

    await trace.span({ actor: { kind: 'nested', id: 'deep-research' } }, async () => {
      await engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'x' }] });
    });

    expect(events[0]?.actor).toEqual({ kind: 'nested', id: 'deep-research' });
  });

  it('records nothing at all when no trace was attached', async () => {
    // Production gets the no-op. Nothing here should depend on a trace being
    // present, and nothing should be written when one is not.
    const engine = engineWith(stream(answered));

    await expect(
      engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'x' }] }),
    ).resolves.toMatchObject({ content: '{"verdict":"no figure"}' });
  });
});

describe('the one thing left out', () => {
  it('writes neither the model reasoning nor the reasoning carried in history', async () => {
    // First version deliberately: reasoning is the provider's private state,
    // some of it opaque or encrypted, and a visible prompt plus a visible
    // answer is enough to review a decision. Checked through the writer
    // because the file is the artefact that would leak.
    const dir = mkdtempSync(join(tmpdir(), 'trace-engine-'));
    const writer = new JsonlTraceWriter({ dir, traceId: 'run-1' });
    const trace = new RecordingTrace((e) => writer.write(e), {
      traceId: 'run-1',
      sessionId: 's1',
      turn: 1,
    });

    const engine = engineWith(
      stream([
        { type: 'reasoning_delta', content: 'REASONING-OUT-LOUD' },
        ...answered,
      ]),
      trace,
    );

    const response = await engine.query({
      task: 'diagnose_bullet',
      messages: [
        { role: 'assistant', content: 'earlier answer', reasoning: 'REASONING-IN-HISTORY' },
        { role: 'user', content: 'a bullet' },
      ],
    });

    // The runtime still has it — only the trace declines to keep it.
    expect(response.reasoning).toContain('REASONING-OUT-LOUD');

    const written = readFileSync(writer.path, 'utf8');
    expect(written).not.toContain('REASONING-OUT-LOUD');
    expect(written).not.toContain('REASONING-IN-HISTORY');
    expect(written).toContain('earlier answer');
  });
});
