import { describe, expect, it } from 'vitest';

import { handleInput, type LoopDeps } from '../../src/agent/loop.js';
import type { ParsedResponse, QueryEngine } from '../../src/query-engine/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import type { Session } from '../../src/session/types.js';
import type { HookContext, HookOutcome, HookPipeline } from '../../src/hooks/types.js';
import type { Tool, ToolRegistry } from '../../src/tools/types.js';
import { RecordingTrace } from '../../src/trace/index.js';
import type { TraceEvent } from '../../src/trace/index.js';

/**
 * The turn is the outermost span, and the only place a session id and a turn
 * number exist at all: the query engine knows neither, and a specialist knows
 * only what it was sent. Everything below inherits both from here — which is
 * what makes a long conversation readable by session and by turn rather than
 * as one undifferentiated stream of prompts.
 */
const usage = { inputTokens: 0, outputTokens: 0 };
const text = (content: string): ParsedResponse => ({
  type: 'text',
  content,
  usage,
  stopReason: 'end_turn',
});
const toolUse = (name: string, input: Record<string, unknown>): ParsedResponse => ({
  type: 'tool_use',
  toolCalls: [{ id: 'call_1', name, input }],
  usage,
  stopReason: 'tool_use',
});

const passthrough = (): HookPipeline =>
  ({
    async runPre(): Promise<HookOutcome> {
      return { action: 'continue' };
    },
    async runPost(): Promise<HookOutcome> {
      return { action: 'continue' };
    },
  }) as unknown as HookPipeline;

function registryOf(tool?: Tool): ToolRegistry {
  return {
    register: () => {},
    resolve: () => tool!,
    has: (name) => tool !== undefined && name === tool.name,
    getSchemas: () => [],
    getSchemasFor: () =>
      tool ? [{ name: tool.name, description: tool.description, parameters: tool.parameters }] : [],
    list: () => [],
  };
}

function recorder() {
  const events: TraceEvent[] = [];
  return {
    events,
    trace: new RecordingTrace((e) => events.push(e), {
      traceId: 't1',
      sessionId: 'not-a-session',
      turn: 0,
    }),
  };
}

function loopWith(
  replies: ParsedResponse[],
  opts: { tool?: Tool; hooks?: HookPipeline } = {},
): { deps: LoopDeps; session: Session; events: TraceEvent[] } {
  let call = 0;
  const engine: QueryEngine = {
    async query() {
      return replies[Math.min(call++, replies.length - 1)]!;
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
  const { trace, events } = recorder();
  const sessions = new SqliteSessionManager();

  return {
    events,
    session: sessions.create({ sourcePath: 'resume.md' }),
    deps: {
      queryEngine: engine,
      tools: registryOf(opts.tool),
      hooks: opts.hooks ?? passthrough(),
      sessions,
      print: () => {},
      commands: { isCommand: () => false, execute: async () => ({ output: '' }) },
      trace,
    } as unknown as LoopDeps,
  };
}

const of = (events: TraceEvent[], phase: string): TraceEvent[] =>
  events.filter((e) => e.phase === phase);

const echo = (payload: unknown): Tool => ({
  name: 'review_content',
  description: 'Dispatch a reader at one entry',
  parameters: { type: 'object', properties: {} },
  async execute() {
    return { success: true, data: payload };
  },
});

describe('the turn', () => {
  it('stamps the session and the turn on everything under it', async () => {
    const { deps, session, events } = loopWith([text('Looks reasonable.')]);

    await handleInput('how is the first bullet?', session, deps);

    expect(events.length).toBeGreaterThan(0);
    for (const event of events) {
      expect(event.sessionId).toBe(session.id);
      expect(event.turn).toBe(1);
      expect(event.actor).toEqual({ kind: 'main', id: 'main-agent' });
    }
  });

  it('counts the turn up as the conversation goes on', async () => {
    // Read off the session's own progress rather than a counter of our own, so
    // a resumed session carries on numbering where it left off.
    const { deps, session, events } = loopWith([text('Looks reasonable.')]);

    await handleInput('first question', session, deps);
    await handleInput('second question', session, deps);

    expect([...new Set(events.map((e) => e.turn))]).toEqual([1, 2]);
  });

  it('records what the user actually typed', async () => {
    // It reaches the model inside the window, but only if there is a window.
    // This is the record that survives a turn that fell over being assembled.
    const { deps, session, events } = loopWith([text('Looks reasonable.')]);

    await handleInput('how is the first bullet?', session, deps);

    expect(of(events, 'input')[0]?.input).toEqual({ message: 'how is the first bullet?' });
  });
});

describe('a tool call in the main loop', () => {
  it('keeps both halves whole, where the audit log keeps 200 characters', async () => {
    const long = 'a finding about one bullet. '.repeat(200);
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo(long) },
    );

    await handleInput('review the first entry', session, deps);

    expect(of(events, 'tool')[0]).toMatchObject({
      tool: 'review_content',
      toolCallId: 'call_1',
      input: { entryId: 'experience:0' },
    });
    expect(JSON.stringify(of(events, 'result')[0]?.output)).toContain(long);
  });

  it('records a call a hook refused, rather than leaving a gap', async () => {
    // A refusal is a decision about the run. Without it the file shows a model
    // that asked for something and a turn that carried on as if it had not.
    const hooks = {
      async runPre(): Promise<HookOutcome> {
        return { action: 'block', reason: 'the candidate declined that path' };
      },
      async runPost(): Promise<HookOutcome> {
        return { action: 'continue' };
      },
    } as unknown as HookPipeline;
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo('never runs'), hooks },
    );

    await handleInput('review the first entry', session, deps);

    expect(of(events, 'failure')[0]).toMatchObject({
      tool: 'review_content',
      purpose: 'blocked before it ran',
      status: 'error',
    });
    expect(of(events, 'failure')[0]?.error?.message).toMatch(/declined that path/);
  });

  it('keeps what the model asked for when a hook rewrites it in place', async () => {
    // The pipeline mutates `ctx.toolCall.input`. Holding the same object would
    // make the record of the model's own request change underneath it, and
    // read as though the model had asked for what the hook decided.
    const hooks = {
      async runPre(ctx: HookContext): Promise<HookOutcome> {
        ctx.toolCall.input = { entryId: 'experience:1' };
        return { action: 'continue' };
      },
      async runPost(): Promise<HookOutcome> {
        return { action: 'continue' };
      },
    } as unknown as HookPipeline;
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo('ok'), hooks },
    );

    await handleInput('review the first entry', session, deps);

    expect(of(events, 'tool')[0]?.input).toEqual({ entryId: 'experience:0' });
    expect(of(events, 'decision')[0]).toMatchObject({
      purpose: 'rewritten by a hook before it ran',
      input: { entryId: 'experience:1' },
    });
  });

  it('holds a copy, so a hook editing the arguments in place cannot rewrite history', async () => {
    // The pipeline assigns a new object today, and a hook reaching into the
    // one it was handed would change what the record says the model asked for.
    // A copy of the top level, which is the shape arguments come in.
    const hooks = {
      async runPre(ctx: HookContext): Promise<HookOutcome> {
        (ctx.toolCall.input as Record<string, unknown>).entryId = 'experience:9';
        return { action: 'continue' };
      },
      async runPost(): Promise<HookOutcome> {
        return { action: 'continue' };
      },
    } as unknown as HookPipeline;
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo('ok'), hooks },
    );

    await handleInput('review the first entry', session, deps);

    expect(of(events, 'tool')[0]?.input).toEqual({ entryId: 'experience:0' });
    expect(of(events, 'decision')[0]?.input).toEqual({ entryId: 'experience:9' });
  });

  it('records the result a post hook substituted, which is what the model reads', async () => {
    const hooks = {
      async runPre(): Promise<HookOutcome> {
        return { action: 'continue' };
      },
      async runPost(): Promise<HookOutcome> {
        return { action: 'modify_result', result: { success: true, data: 'compressed' } };
      },
    } as unknown as HookPipeline;
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo('the long original'), hooks },
    );

    await handleInput('review the first entry', session, deps);

    expect(of(events, 'result')[0]).toMatchObject({
      purpose: 'rewritten by a hook after it ran',
      output: { success: true, data: 'compressed' },
    });
  });

  it('gives the call its own span, so what it starts hangs off it', async () => {
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo('ok') },
    );

    await handleInput('review the first entry', session, deps);

    const turn = of(events, 'span')[0];
    const toolSpan = of(events, 'span')[1];
    expect(toolSpan?.parentEventId).toBe(turn?.eventId);
    expect(of(events, 'tool')[0]?.parentEventId).toBe(toolSpan?.eventId);
  });

  it('leaves every parent resolvable', async () => {
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo('ok') },
    );

    await handleInput('review the first entry', session, deps);

    const ids = new Set(events.map((e) => e.eventId));
    for (const event of events) {
      if (event.parentEventId === undefined) continue;
      expect(ids.has(event.parentEventId), `${event.phase} has an unresolvable parent`).toBe(true);
    }
  });
});
