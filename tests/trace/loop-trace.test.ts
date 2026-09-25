import { describe, expect, it } from 'vitest';

import { handleInput, type LoopDeps } from '../../src/agent/loop.js';
import type { ParsedResponse, QueryEngine } from '../../src/query-engine/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import type { Session } from '../../src/session/types.js';
import { DefaultHookPipeline } from '../../src/hooks/index.js';
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

  it('gives a turn that fell over its own number, not the next one\u2019s', async () => {
    // The session's progress only moves after an answer, so a turn whose model
    // call threw leaves it where it was — and the next thing the user says
    // lands under the number the failed turn already used. That is exactly the
    // pair of turns a reader wants to tell apart.
    let asked = 0;
    const engine: QueryEngine = {
      async query() {
        asked += 1;
        if (asked === 1) throw new Error('the provider fell over');
        return text('Looks reasonable.');
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };
    const { deps, session, events } = loopWith([text('unused')]);
    (deps as { queryEngine: QueryEngine }).queryEngine = engine;

    await expect(handleInput('first question', session, deps)).rejects.toThrow(/fell over/);
    await handleInput('second question', session, deps);

    const asked1 = events.find((e) => (e.input as { message?: string })?.message === 'first question');
    const asked2 = events.find((e) => (e.input as { message?: string })?.message === 'second question');
    expect(asked1?.turn).toBe(1);
    expect(asked2?.turn).toBe(2);
  });

  it('carries on numbering where a resumed session left off', async () => {
    const { deps, session, events } = loopWith([text('Looks reasonable.')]);
    // What a session loaded from disk looks like: three exchanges already had.
    session.progress.phase = 'in conversation (3 exchanges)';

    await handleInput('the fourth thing they said', session, deps);

    expect(of(events, 'input')[0]?.turn).toBe(4);
  });

  it('records what the user actually typed', async () => {
    // It reaches the model inside the window, but only if there is a window.
    // This is the record that survives a turn that fell over being assembled.
    const { deps, session, events } = loopWith([text('Looks reasonable.')]);

    await handleInput('how is the first bullet?', session, deps);

    expect(of(events, 'input')[0]?.input).toEqual({ message: 'how is the first bullet?' });
  });
});

describe('a command, which never reaches the coordinator', () => {
  /** A command path: the commands parser claims the input and answers it. */
  function withCommand(output: string, action?: string) {
    const { deps, session, events } = loopWith([text('unused')]);
    (deps as { commands: unknown }).commands = {
      isCommand: (input: string) => input.startsWith('/'),
      execute: async () => ({ output, ...(action ? { action } : {}) }),
    };
    return { deps, session, events };
  }

  it('records what the user typed and what they were shown', async () => {
    // Commands returned before the turn began, so a session where the user read
    // a report, objected to it and asked for an export showed three answers and
    // one of the three inputs.
    // Long on purpose: the question is which version they saw, and a truncated
    // record cannot tell the brief from the full one.
    const report =
      '# Full review: r.pdf\n\n**83/100** — format 100 · content 72 · wording 81\n\n' +
      'Read 2 of 2 entries for content, 2 for wording.\n\n' +
      '## Mobility Systems Company\n\n### The 68% reduction has no starting count.\n';
    const { deps, session, events } = withCommand(report);

    await handleInput('/report --full', session, deps);

    expect(of(events, 'input')[0]?.input).toEqual({ message: '/report --full' });
    const shown = of(events, 'result')[0];
    expect(shown?.tool).toBe('/report');
    expect(shown?.input).toEqual({ args: ['--full'] });
    // Whole, because the question this answers is which version of a report the
    // user saw, at which length.
    expect((shown?.output as { text: string }).text).toBe(report);
    expect((shown?.output as { text: string }).text).toContain('no starting count');
  });

  it('files it under the user operating the machine, not under the agent', async () => {
    // No model was asked anything. Calling it a main-agent turn would put an
    // actor on a decision nobody made.
    const { deps, session, events } = withCommand('ok');

    await handleInput('/export', session, deps);

    for (const event of events) {
      expect(event.actor).toEqual({ kind: 'system', id: 'command' });
    }
  });

  it('takes a turn number, so two inputs never share one', async () => {
    const { deps, session, events } = withCommand('ok');

    await handleInput('/report', session, deps);
    await handleInput('/export', session, deps);

    expect(of(events, 'input').map((e) => e.turn)).toEqual([1, 2]);
  });

  it('records the session swap a command can cause', async () => {
    // `/new` empties the memory store and hands back a different session.
    // Reading a trace across it without this looks like one conversation.
    const { deps, session, events } = withCommand('started a new session', 'new_session');

    await handleInput('/new', session, deps);

    expect((of(events, 'result')[0]?.output as { action?: string }).action).toBe('new_session');
  });

  it('closes its span, like any other', async () => {
    const { deps, session, events } = withCommand('ok');

    await handleInput('/report', session, deps);

    expect(of(events, 'span')).toHaveLength(1);
    expect(of(events, 'span-end')).toHaveLength(1);
    const ids = new Set(events.map((e) => e.eventId));
    for (const event of events) {
      if (event.parentEventId === undefined) continue;
      expect(ids.has(event.parentEventId)).toBe(true);
    }
  });

  it('calls no model to do it', async () => {
    // The point of typing `/report` rather than asking for one. Routing commands
    // through the coordinator would buy a model call and a chance of it changing
    // its mind, for something that is free and immediate.
    let asked = 0;
    const { deps, session } = withCommand('ok');
    (deps as { queryEngine: unknown }).queryEngine = {
      async query() {
        asked += 1;
        return text('should not happen');
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };

    await handleInput('/report', session, deps);

    expect(asked).toBe(0);
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

  it('keeps both the result the tool produced and the one the model was given', async () => {
    // A compression hook rewrites what the model reads. With only the
    // delivered copy, which part it removed cannot be read off — and checking
    // a finding against the evidence is the whole point of having the file.
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

    expect(of(events, 'result')[0]?.output).toMatchObject({
      success: true,
      data: 'the long original',
    });
    expect(of(events, 'decision')[0]).toMatchObject({
      purpose: 'rewritten by a hook after it ran',
      output: { success: true, data: 'compressed' },
    });
  });

  it('freezes what the tool produced before any hook can edit it', async () => {
    // A hook that reaches into the result it was handed, rather than
    // substituting one, would otherwise rewrite the record of what the tool
    // returned — and the comparison that decides whether to say so.
    const hooks = {
      async runPre(): Promise<HookOutcome> {
        return { action: 'continue' };
      },
      async runPost(ctx: HookContext): Promise<HookOutcome> {
        (ctx.result as { data: unknown }).data = 'edited in place';
        return { action: 'continue' };
      },
    } as unknown as HookPipeline;
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo('what the tool actually returned'), hooks },
    );

    await handleInput('review the first entry', session, deps);

    expect(of(events, 'result')[0]?.output).toMatchObject({
      data: 'what the tool actually returned',
    });
    expect(of(events, 'decision')[0]?.output).toMatchObject({ data: 'edited in place' });
  });

  it('does not call an untouched result rewritten, against the real pipeline', async () => {
    // `runPost` answers `modify_result` whenever a result exists at all — every
    // call, touched or not. Taking that as the signal marks every tool call in
    // every real run as rewritten, and a governance label that is always on
    // says nothing. The fake pipelines above cannot catch it; this one can.
    const { deps, session, events } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: echo('untouched'), hooks: new DefaultHookPipeline() },
    );

    await handleInput('review the first entry', session, deps);

    expect(of(events, 'decision')).toHaveLength(0);
    expect(of(events, 'result')[0]?.output).toMatchObject({ data: 'untouched' });
  });

  it('records the refusal the model is actually handed', async () => {
    // The model reads this and plans its next turn from it. A record of the
    // decision without it explains the decision and not the conversation that
    // follows from it.
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

    expect(of(events, 'failure')[0]?.output).toEqual({
      success: false,
      error: { code: 'permission_denied', message: 'the candidate declined that path' },
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

  it('hands the tool the trace, so a tool that chooses can say what it chose', async () => {
    // The report writer records which findings reached the page. It can only
    // do that if the context it runs in carries the trace.
    let seen: unknown;
    const spy: Tool = {
      name: 'review_content',
      description: 'Dispatch a reader at one entry',
      parameters: { type: 'object', properties: {} },
      async execute(_input, ctx) {
        seen = (ctx as { trace?: unknown }).trace;
        return { success: true, data: 'ok' };
      },
    };
    const { deps, session } = loopWith(
      [toolUse('review_content', { entryId: 'experience:0' }), text('Done.')],
      { tool: spy },
    );

    await handleInput('review the first entry', session, deps);

    expect(seen).toBe((deps as { trace?: unknown }).trace);
    expect(seen).toBeDefined();
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
