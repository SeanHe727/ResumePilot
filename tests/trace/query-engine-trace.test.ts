import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { loadConfig } from '../../src/config.js';
import { QueryEngine } from '../../src/query-engine/engine.js';
import { QueryEngineError } from '../../src/query-engine/types.js';
import type { LLMProvider, QueryParams, StreamEvent } from '../../src/query-engine/types.js';
import { JsonlTraceWriter, RecordingTrace } from '../../src/trace/index.js';
import type { Trace, TraceEvent, TraceRequest } from '../../src/trace/index.js';
import type { ToolSchema } from '../../src/types.js';

/**
 * Every model call in the system passes through `query()` — the main agent,
 * each specialist, Deep Research, the report writer. So this is where a trace
 * either sees the whole conversation or misses part of it silently.
 *
 * What these check is the difference from the audit log, which records the
 * same calls and is built to keep too little of them to reconstruct: here the
 * request is whole enough to re-issue, every try is on the record with what it
 * hit, and the one thing deliberately left out stays out.
 */

/** Each turn is either a stream to replay or a failure to throw. */
type Turn = StreamEvent[] | Error;

function sequence(turns: Turn[]): LLMProvider {
  let call = 0;
  return {
    name: 'claude',
    async *stream(): AsyncIterable<StreamEvent> {
      const turn = turns[Math.min(call, turns.length - 1)]!;
      call += 1;
      if (turn instanceof Error) throw turn;
      for (const event of turn) yield event;
    },
    async countTokens() {
      return 0;
    },
  };
}

const answered: StreamEvent[] = [
  { type: 'text_delta', content: '{"verdict":"no figure"}' },
  { type: 'message_end', usage: { inputTokens: 900, outputTokens: 120 }, stopReason: 'end_turn' },
];

const overloaded = () => new QueryEngineError('service overloaded', 'overloaded', true);

/** Seeded straight into the private provider map, as the other engine tests do. */
function engineWith(provider: LLMProvider, trace?: Trace, env: Record<string, string> = {}) {
  const engine = new QueryEngine({
    config: loadConfig(env as never),
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

const phases = (events: TraceEvent[]): string[] => events.map((e) => e.phase);
const of = (events: TraceEvent[], phase: string): TraceEvent[] =>
  events.filter((e) => e.phase === phase);

const searchTool: ToolSchema = {
  name: 'query_knowledge_base',
  description: 'Look up what the candidate has already told us about a claim.',
  parameters: {
    type: 'object',
    properties: { question: { type: 'string', description: 'What to look up' } },
    required: ['question'],
  },
};

describe('the request, as the model saw it', () => {
  it('keeps the prompt whole, where the audit log keeps 200 characters of it', async () => {
    const { trace, events } = recorder();
    const long = 'Reduced p99 latency. '.repeat(60);

    await engineWith(sequence([answered]), trace).query({
      task: 'diagnose_bullet',
      systemPrompt: 'You read one bullet and score it.',
      messages: [{ role: 'user', content: long }],
    });

    const input = of(events, 'input')[0]?.input as TraceRequest;
    expect(input.systemPrompt).toBe('You read one bullet and score it.');
    expect((input.messages[0] as { content: string }).content).toBe(long);
  });

  it('records the tools whole, not their names', async () => {
    // Names until a review asked what the model had actually been offered: a
    // model choosing badly among good tools and a model offered a
    // badly-described one are the same line in a record that kept only names,
    // and they call for opposite fixes.
    const { trace, events } = recorder();

    await engineWith(sequence([answered]), trace).query({
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
      tools: [searchTool],
    });

    const input = of(events, 'input')[0]?.input as TraceRequest;
    expect(input.tools).toEqual([searchTool]);
    expect(input.tools?.[0]?.parameters).toEqual(searchTool.parameters);
  });

  it('records the settings that decide what the call costs and whether it ran at all', async () => {
    const { trace, events } = recorder();

    await engineWith(sequence([answered]), trace).query({
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
      maxTokens: 512,
      jsonMode: true,
      effort: 'low',
      useCache: false,
      cacheTtlSeconds: 90,
      cacheSystemPrompt: false,
    });

    expect(of(events, 'input')[0]?.input).toMatchObject({
      task: 'diagnose_bullet',
      maxTokens: 512,
      jsonMode: true,
      effort: 'low',
      useCache: false,
      cacheTtlSeconds: 90,
      cacheSystemPrompt: false,
    });
  });

  it('names the model that answered, not the one that was asked for', async () => {
    // The router picks per task. A trace naming the requested model would
    // explain neither the cost nor the answer.
    const { trace, events } = recorder();

    await engineWith(sequence([answered]), trace).query({
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
    });

    const input = of(events, 'input')[0]?.input as TraceRequest;
    expect(input.model).toBeTruthy();
    expect(input.provider).toBe('claude');
    expect(input.model).toBe(events[0]?.model);
  });

  it('carries no callback, signal or key into the record', async () => {
    const { trace, events } = recorder();

    await engineWith(sequence([answered]), trace).query({
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
      onTextDelta: () => {},
      abortSignal: new AbortController().signal,
    });

    const input = of(events, 'input')[0]?.input as Record<string, unknown>;
    expect(input.onTextDelta).toBeUndefined();
    expect(input.abortSignal).toBeUndefined();
    expect(JSON.stringify(events)).not.toContain('apiKey');
  });

  it('writes the prompt once, however many tries the call takes', async () => {
    // Three attempts carrying three copies of a résumé is three times the
    // exposure and a file nobody can read.
    const { trace, events } = recorder();
    const engine = engineWith(sequence([overloaded(), overloaded(), answered]), trace);

    await engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'a bullet' }] });

    expect(events.filter((e) => e.input !== undefined)).toHaveLength(1);
  });

  it('keeps the tool call the model made, with its id and its arguments', async () => {
    const { trace, events } = recorder();
    const engine = engineWith(
      sequence([
        [
          { type: 'tool_use_start', id: 'call_1', name: 'query_knowledge_base' },
          { type: 'tool_use_delta', input: '{"question":"which latency figure"}' },
          { type: 'tool_use_end' },
          { type: 'message_end', usage: { inputTokens: 5, outputTokens: 5 }, stopReason: 'tool_use' },
        ],
      ]),
      trace,
    );

    await engine.query({
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
      tools: [searchTool],
    });

    const output = of(events, 'result')[0]?.output as { toolCalls: unknown[] };
    expect(output.toolCalls).toEqual([
      { id: 'call_1', name: 'query_knowledge_base', input: { question: 'which latency figure' } },
    ]);
  });
});

describe('every try, and how it ended', () => {
  it('records each attempt separately, with what that attempt hit', async () => {
    // Three tries that failed differently — a rate limit, a dropped socket, a
    // refusal — are three findings, and one summary line keeps one of them.
    const { trace, events } = recorder();
    const engine = engineWith(sequence([overloaded(), overloaded(), answered]), trace);

    await engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'a bullet' }] });

    expect(phases(events)).toEqual(['input', 'attempt', 'attempt', 'attempt', 'result']);
    const attempts = of(events, 'attempt');
    expect(attempts.map((e) => e.attempt)).toEqual([1, 2, 3]);
    expect(attempts.map((e) => e.status)).toEqual(['error', 'error', 'success']);
    expect(attempts[0]?.error).toMatchObject({
      category: 'overloaded',
      message: 'service overloaded',
      retryable: true,
    });
    expect(attempts[0]?.durationMs).toBeGreaterThanOrEqual(0);
  });

  it('keeps the earlier failures on the answer that eventually came back', async () => {
    // A call that succeeded on its third try is a different fact about a run
    // than one that succeeded on its first, and the summary is where a reader
    // looking for slow specialists will be.
    const { trace, events } = recorder();
    const engine = engineWith(sequence([overloaded(), overloaded(), answered]), trace);

    await engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'a bullet' }] });

    const result = of(events, 'result')[0];
    expect(result).toMatchObject({ status: 'success', attempts: 3 });
    expect(result?.priorErrors).toHaveLength(2);
    expect(result?.priorErrors?.[0]).toMatchObject({ category: 'overloaded' });
  });

  it('records a call that never came back, with every try under it', async () => {
    const { trace, events } = recorder();
    const engine = engineWith(sequence([overloaded()]), trace);

    await expect(
      engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'a bullet' }] }),
    ).rejects.toThrow();

    expect(phases(events)).toEqual(['input', 'attempt', 'attempt', 'attempt', 'failure']);
    expect(of(events, 'failure')[0]).toMatchObject({
      stage: 'request',
      status: 'error',
      attempts: 3,
    });
    expect(of(events, 'failure')[0]?.priorErrors).toHaveLength(2);
  });

  it('calls a stopped run stopped, rather than failed', async () => {
    // A run the user interrupted is not a failure of the system, and counting
    // it as one puts every interrupted session in with the refusals.
    const { trace, events } = recorder();
    const stopped = Object.assign(new Error('Request was aborted'), { name: 'AbortError' });
    const aborted = new AbortController();
    aborted.abort();
    const engine = engineWith(sequence([stopped]), trace);

    await expect(
      engine.query({
        task: 'diagnose_bullet',
        messages: [{ role: 'user', content: 'a bullet' }],
        abortSignal: aborted.signal,
      }),
    ).rejects.toThrow();

    expect(of(events, 'attempt')[0]?.status).toBe('cancelled');
    expect(of(events, 'failure')[0]?.status).toBe('cancelled');
  });

  it('ties every event of one call to the same span', async () => {
    const { trace, events } = recorder();
    const engine = engineWith(sequence([overloaded(), answered]), trace);

    await engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'a bullet' }] });

    const parents = new Set(events.map((e) => e.parentEventId));
    expect(parents.size).toBe(1);
    expect([...parents][0]).toBeDefined();
  });

  it('attributes the whole call to the agent whose span it ran in', async () => {
    const { trace, events } = recorder();
    const engine = engineWith(sequence([answered]), trace);

    await trace.span({ actor: { kind: 'nested', id: 'deep-research' } }, async () => {
      await engine.query({ task: 'diagnose_bullet', messages: [{ role: 'user', content: 'x' }] });
    });

    for (const event of events) {
      expect(event.actor).toEqual({ kind: 'nested', id: 'deep-research' });
    }
  });
});

describe('failures before anything was sent', () => {
  it('separates a budget ceiling from a provider that refused', async () => {
    // Both arrive as an exception and they are different findings: one is the
    // run hitting its own limit, the other is the service saying no.
    const { trace, events } = recorder();
    const engine = engineWith(sequence([
      [{ type: 'text_delta', content: 'ok' },
       { type: 'message_end', usage: { inputTokens: 400_000, outputTokens: 400_000 }, stopReason: 'end_turn' }],
    ]), trace, { RESUMEPILOT_MAX_COST_USD: '0.01' });
    const params: QueryParams = {
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
      useCache: false,
    };

    await engine.query(params);
    events.length = 0;
    await expect(engine.query(params)).rejects.toThrow(/Budget exhausted/);

    expect(events).toHaveLength(1);
    expect(events[0]).toMatchObject({ phase: 'failure', stage: 'budget', attempts: 0 });
    // With what it was about to ask: a ceiling hit halfway through a fan-out
    // looks, from the conversation, like a specialist that chose to say nothing.
    expect((events[0]?.input as TraceRequest).messages).toHaveLength(1);
  });

  it('records an unroutable model as a routing failure, not a provider one', async () => {
    const { trace, events } = recorder();
    const engine = engineWith(sequence([answered]), trace);

    await expect(
      engine.query({ model: 'no-such-model', messages: [{ role: 'user', content: 'x' }] }),
    ).rejects.toThrow(/Unknown model/);

    expect(events).toHaveLength(1);
    expect(events[0]).toMatchObject({ phase: 'failure', stage: 'routing' });
    expect((events[0]?.input as TraceRequest).model).toBe('no-such-model');
  });

  it('records a missing key as a failure to build the provider', async () => {
    const { trace, events } = recorder();
    // Routed to OpenAI with no key in the config; the Claude stub is not reached.
    const engine = engineWith(sequence([answered]), trace);

    await expect(
      engine.query({ model: 'gpt-4.1', messages: [{ role: 'user', content: 'x' }] }),
    ).rejects.toThrow(/OPENAI_API_KEY/);

    expect(of(events, 'failure')[0]).toMatchObject({
      stage: 'provider-init',
      model: 'gpt-4.1',
      provider: 'openai',
    });
    // The request is already on the span; a second copy of the prompt is the
    // one thing this is careful not to write.
    expect(of(events, 'failure')[0]?.input).toBeUndefined();
  });
});

describe('an answer that was not asked for', () => {
  it('marks a cached answer as one, with no attempt behind it', async () => {
    // Two identical questions costing different amounts is a thing a reader
    // will ask about, and the conversation looks the same either way.
    const { trace, events } = recorder();
    const engine = engineWith(sequence([answered]), trace);
    const params: QueryParams = {
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
    };

    await engine.query(params);
    events.length = 0;
    await engine.query(params);

    expect(phases(events)).toEqual(['input', 'result']);
    expect(events[1]).toMatchObject({ cached: true, attempts: 0, status: 'success' });
    expect(events[1]?.output).toMatchObject({ content: '{"verdict":"no figure"}' });
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
    const trace = new RecordingTrace(writer.write, {
      traceId: 'run-1',
      sessionId: 's1',
      turn: 1,
    });

    const engine = engineWith(
      sequence([[{ type: 'reasoning_delta', content: 'REASONING-OUT-LOUD' }, ...answered]]),
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

  it('leaves it out of the event itself, not only out of the file', async () => {
    // Two layers, tested separately on purpose: the writer masks anything
    // named like reasoning as a last resort, and this is the engine dropping
    // it where the type that carries it is still in view. Checked at the sink,
    // where the writer's net cannot cover for a hole here.
    const { trace, events } = recorder();
    const engine = engineWith(
      sequence([[{ type: 'reasoning_delta', content: 'REASONING-OUT-LOUD' }, ...answered]]),
      trace,
    );

    await engine.query({
      task: 'diagnose_bullet',
      messages: [
        { role: 'assistant', content: 'earlier answer', reasoning: 'REASONING-IN-HISTORY' },
        { role: 'user', content: 'a bullet' },
      ],
    });

    const input = of(events, 'input')[0]?.input as TraceRequest;
    expect(input.messages[0]).not.toHaveProperty('reasoning');
    expect(of(events, 'result')[0]?.output).not.toHaveProperty('reasoning');
    expect((input.messages[0] as { content: string }).content).toBe('earlier answer');
  });
});

describe('what the switch may not change', () => {
  it('answers, retries and throws the same either way', async () => {
    // A trace that alters the thing it is measuring is worse than none: every
    // finding from a debug run would have to be re-checked without it.
    const scenarios: Turn[][] = [
      [answered],
      [overloaded(), answered],
      [overloaded()],
    ];

    for (const turns of scenarios) {
      const { trace } = recorder();
      const traced = engineWith(sequence(turns.map((t) => (t instanceof Error ? overloaded() : t))), trace);
      const plain = engineWith(sequence(turns.map((t) => (t instanceof Error ? overloaded() : t))));
      const params: QueryParams = {
        task: 'diagnose_bullet',
        messages: [{ role: 'user', content: 'a bullet' }],
        useCache: false,
      };

      const one = await traced.query(params).catch((err: Error) => err);
      const two = await plain.query(params).catch((err: Error) => err);

      if (one instanceof Error || two instanceof Error) {
        expect(one).toBeInstanceOf(Error);
        expect(two).toBeInstanceOf(Error);
        expect((one as Error).message).toBe((two as Error).message);
      } else {
        expect(one).toEqual(two);
      }
    }
  });

  it('counts the same attempts with the trace attached as without it', async () => {
    const seen: number[] = [];
    const counting = (): LLMProvider => {
      let calls = 0;
      return {
        name: 'claude',
        async *stream(): AsyncIterable<StreamEvent> {
          calls += 1;
          seen[seen.length - 1] = calls;
          throw overloaded();
        },
        async countTokens() {
          return 0;
        },
      };
    };
    const params: QueryParams = {
      task: 'diagnose_bullet',
      messages: [{ role: 'user', content: 'a bullet' }],
      useCache: false,
    };

    seen.push(0);
    await engineWith(counting(), recorder().trace).query(params).catch(() => {});
    seen.push(0);
    await engineWith(counting()).query(params).catch(() => {});

    expect(seen[0]).toBe(seen[1]);
    expect(seen[0]).toBe(3);
  });
});
