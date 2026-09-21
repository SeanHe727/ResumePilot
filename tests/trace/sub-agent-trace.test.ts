import { describe, expect, it } from 'vitest';

import {
  CONTENT_AGENT,
  DEEP_RESEARCH_AGENT,
  DefaultOrchestrator,
  SemaphorePool,
  SubAgentRuntime,
} from '../../src/agent/index.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import type { Tool, ToolRegistry } from '../../src/tools/types.js';
import { NoTrace, RecordingTrace } from '../../src/trace/index.js';
import type { TraceEvent } from '../../src/trace/index.js';

/**
 * The layer the hook pipeline deliberately does not see.
 *
 * A sub-agent is already inside a call the gate approved, so its inner tool
 * calls are not hooked — which is right for permission and audit, and leaves
 * the arguments a specialist chose and the result it read existing nowhere.
 * Between this and the query engine, a specialist's whole run is now on the
 * record: what it was sent, what it asked the model, what it reached for, what
 * came back, and what it finally returned.
 */
const usage = { inputTokens: 10, outputTokens: 20 };
const text = (content: string): ParsedResponse => ({
  type: 'text',
  content,
  usage,
  stopReason: 'end_turn',
});
const toolUse = (name: string, input: Record<string, unknown>): ParsedResponse => ({
  type: 'tool_use',
  toolCalls: [{ id: 'tc1', name, input }],
  usage,
  stopReason: 'tool_use',
});

const DIAGNOSIS = JSON.stringify({
  bullets: [{ bulletId: 'experience:0:0', overallScore: 40, issues: [], strengths: [] }],
  narrative: { redundantPairs: [], weakLead: false, coherence: { score: 70, detail: '' } },
});

function scriptedEngine(...replies: ParsedResponse[]): QueryEngine {
  const seen: QueryParams[] = [];
  return {
    async query(params) {
      seen.push(params);
      return replies[Math.min(seen.length - 1, replies.length - 1)]!;
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
}

/** A registry holding exactly the tools a case needs. */
function registryOf(...tools: Tool[]): ToolRegistry {
  const byName = new Map(tools.map((tool) => [tool.name, tool]));
  return {
    register: () => {},
    resolve: (name) => byName.get(name)!,
    has: (name) => byName.has(name),
    getSchemas: () => [],
    getSchemasFor: (names) =>
      names
        .filter((name) => byName.has(name))
        .map((name) => ({
          name,
          description: byName.get(name)!.description,
          parameters: byName.get(name)!.parameters,
        })),
    list: () => [],
  };
}

const lookup = (answer: unknown, ok = true): Tool => ({
  name: 'query_knowledge_base',
  description: 'Look up what the candidate said',
  parameters: { type: 'object', properties: {} },
  async execute() {
    return ok ? { success: true, data: answer } : { success: false, error: { code: 'x', message: 'the store was unreachable' } };
  },
});

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

function runtimeWith(engine: QueryEngine, registry: ToolRegistry, trace?: RecordingTrace) {
  return new SubAgentRuntime({
    queryEngine: engine,
    toolRegistry: registry,
    knowledge: { async search() { return []; } } as never,
    session: new SqliteSessionManager().create({ sourcePath: 'resume.md' }),
    ...(trace ? { trace } : {}),
  });
}

const of = (events: TraceEvent[], phase: string): TraceEvent[] =>
  events.filter((e) => e.phase === phase);

describe('a specialist on the record', () => {
  it('puts everything it did under its own name', async () => {
    const { trace, events } = recorder();
    const runtime = runtimeWith(scriptedEngine(text(DIAGNOSIS)), registryOf(), trace);

    await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose entry 0' });

    for (const event of events) {
      expect(event.actor).toEqual({ kind: 'specialist', id: 'content' });
    }
  });

  it('records which role was chosen and what it was allowed to reach for', async () => {
    // Not the briefing text — that is in the first model call's prompt, whole.
    // This is what no prompt says: the role, its remit and its deadline.
    const { trace, events } = recorder();
    const runtime = runtimeWith(scriptedEngine(text(DIAGNOSIS)), registryOf(), trace);

    await runtime.run({
      agentConfig: CONTENT_AGENT,
      input: 'diagnose entry 0',
      context: { entry: 'a bullet', briefing: 'one page' },
    });

    expect(of(events, 'dispatch')[0]?.input).toMatchObject({
      role: 'content',
      tools: ['query_knowledge_base', 'examine_technical_depth'],
      contextKeys: ['entry', 'briefing'],
      allowedContextKeys: ['briefing', 'entry', 'previousFindings'],
      maxTurns: 6,
    });
  });

  it('records what it was asked, not only which keys were allowed through', async () => {
    // A second copy of what the first model call also carries, and worth it:
    // the copy in the prompt only exists if there was a prompt.
    const { trace, events } = recorder();
    const runtime = runtimeWith(scriptedEngine(text(DIAGNOSIS)), registryOf(), trace);

    await runtime.run({
      agentConfig: CONTENT_AGENT,
      input: 'diagnose entry 0',
      context: { entry: 'Reduced p99 latency', secrets: 'not in the boundary' },
    });

    const sent = of(events, 'dispatch')[0]?.input as { task: string; briefing: string };
    expect(sent.task).toBe('diagnose entry 0');
    expect(sent.briefing).toContain('Reduced p99 latency');
    // The boundary is what crossed, so the record shows what crossed.
    expect(sent.briefing).not.toContain('not in the boundary');
  });

  it('still says what it was asked when it fails before asking anything', async () => {
    // Building the context or resolving the tool list can throw, and then
    // there is no first model call to hold the briefing.
    const { trace, events } = recorder();
    const broken: ToolRegistry = {
      ...registryOf(),
      getSchemasFor: () => {
        throw new Error('the registry is in a bad state');
      },
    };
    const runtime = runtimeWith(scriptedEngine(text(DIAGNOSIS)), broken, trace);

    await expect(
      runtime.run({
        agentConfig: CONTENT_AGENT,
        input: 'diagnose entry 0',
        context: { entry: 'Reduced p99 latency' },
      }),
    ).rejects.toThrow(/bad state/);

    expect((of(events, 'dispatch')[0]?.input as { task: string }).task).toBe('diagnose entry 0');
    expect(of(events, 'span-end')[0]).toMatchObject({ status: 'error' });
  });

  it('records the structured result, which is not the answer the model wrote', async () => {
    // Parsing and validation sit between them, and the orchestrator reads this
    // one. A report is built from findings that were never the raw text.
    const { trace, events } = recorder();
    const runtime = runtimeWith(scriptedEngine(text(DIAGNOSIS)), registryOf(), trace);

    const result = await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    expect(of(events, 'result')[0]?.output).toEqual(result);
    expect(of(events, 'result')[0]).toMatchObject({ status: 'success' });
  });

  it('records a run that produced nothing usable as the failure it is', async () => {
    // A specialist that failed and one that found nothing wrong reach the
    // report the same way otherwise.
    const { trace, events } = recorder();
    // JSON-shaped and broken, which is a different fault from prose: prose is
    // a model ignoring the schema, this is one bad character.
    const runtime = runtimeWith(
      scriptedEngine(text('```json\n{"bullets": [ {"bulletId": }]\n```')),
      registryOf(),
      trace,
    );

    const result = await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    expect(result.success).toBe(false);
    expect(of(events, 'failure')[0]).toMatchObject({ status: 'error' });
    expect(of(events, 'failure')[0]?.error?.message).toMatch(/would not parse/);
  });
});

describe('the inner tool calls nothing else sees', () => {
  it('keeps both halves whole', async () => {
    // The hook pipeline keeps 200 characters of a main-loop tool call and does
    // not see this layer at all. A research answer cut at 200 characters
    // cannot be checked against the finding it produced.
    const long = 'findings about the domain. '.repeat(400);
    const { trace, events } = recorder();
    const runtime = runtimeWith(
      scriptedEngine(toolUse('query_knowledge_base', { question: 'which latency figure' }), text(DIAGNOSIS)),
      registryOf(lookup(long)),
      trace,
    );

    await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    const asked = of(events, 'tool')[0];
    expect(asked?.input).toEqual({ question: 'which latency figure' });
    expect(asked?.tool).toBe('query_knowledge_base');
    const answered = of(events, 'result')[0];
    expect(String(answered?.output)).toContain(long);
  });

  it('marks a tool that answered with a failure as a failure', async () => {
    const { trace, events } = recorder();
    const runtime = runtimeWith(
      scriptedEngine(toolUse('query_knowledge_base', { question: 'x' }), text(DIAGNOSIS)),
      registryOf(lookup(null, false)),
      trace,
    );

    await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    const failed = of(events, 'failure').find((e) => e.tool === 'query_knowledge_base');
    expect(failed?.status).toBe('error');
    expect(String(failed?.output)).toContain('the store was unreachable');
  });

  it('records a tool the agent asked for and does not have', async () => {
    const { trace, events } = recorder();
    const runtime = runtimeWith(
      scriptedEngine(toolUse('no_such_tool', { q: 1 }), text(DIAGNOSIS)),
      registryOf(),
      trace,
    );

    await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    expect(of(events, 'tool')[0]?.tool).toBe('no_such_tool');
    expect(String(of(events, 'failure')[0]?.output)).toContain('no tool called');
  });
});

describe('an agent started by another agent', () => {
  /** What `examine_technical_depth` does: runs a second agent inside a turn. */
  const examine = (): Tool => ({
    name: 'examine_technical_depth',
    description: 'Ask a researcher one question',
    parameters: { type: 'object', properties: {} },
    async execute(_input, ctx) {
      const inner = await (ctx as { subAgents: SubAgentRuntime }).subAgents.run({
        agentConfig: DEEP_RESEARCH_AGENT,
        input: 'how hard is this really',
      });
      return { success: true, data: inner.output };
    },
  });

  it('nests under the tool call that started it, not beside it', async () => {
    // Adjacency in a file is not a link. The question "what made Deep Research
    // run" is the one a reader has when the bill arrives.
    const { trace, events } = recorder();
    const runtime = runtimeWith(
      scriptedEngine(toolUse('examine_technical_depth', { question: 'depth?' }), text(DIAGNOSIS)),
      registryOf(examine()),
      trace,
    );

    await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    const research = of(events, 'span').find((e) => e.actor.id === 'deep-research');
    expect(research?.actor.kind).toBe('nested');
    const toolCall = of(events, 'tool').find((e) => e.tool === 'examine_technical_depth');
    expect(research?.parentEventId).toBe(toolCall?.parentEventId);
  });

  it('keeps the researcher’s own work under the researcher', async () => {
    const { trace, events } = recorder();
    const runtime = runtimeWith(
      scriptedEngine(toolUse('examine_technical_depth', { question: 'depth?' }), text(DIAGNOSIS)),
      registryOf(examine()),
      trace,
    );

    await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    const dispatches = of(events, 'dispatch');
    expect(dispatches.map((e) => e.actor)).toEqual([
      { kind: 'specialist', id: 'content' },
      { kind: 'nested', id: 'deep-research' },
    ]);
  });

  it('leaves every parent resolvable', async () => {
    const { trace, events } = recorder();
    const runtime = runtimeWith(
      scriptedEngine(toolUse('examine_technical_depth', { question: 'depth?' }), text(DIAGNOSIS)),
      registryOf(examine()),
      trace,
    );

    await runtime.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    const ids = new Set(events.map((e) => e.eventId));
    for (const event of events) {
      if (event.parentEventId === undefined) continue;
      expect(ids.has(event.parentEventId), `${event.phase} has an unresolvable parent`).toBe(true);
    }
    expect(of(events, 'span')).toHaveLength(of(events, 'span-end').length);
  });
});

describe('what the orchestrator made of it', () => {
  it('records the failed result it hands on when an agent throws', async () => {
    // The agent's own span closed when it threw. Without this the file ends at
    // `span-end error`, and the object a report gets built around — zeroes
    // where the usage and the turns would be — appears nowhere.
    const { trace, events } = recorder();
    const engine: QueryEngine = {
      async query() {
        throw new Error('the provider fell over');
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };
    const runtime = runtimeWith(engine, registryOf(), trace);
    const orchestrator = new DefaultOrchestrator(runtime, {}, new SemaphorePool(1));

    await orchestrator.diagnoseEntry(
      {
        id: 'experience:0',
        headerLines: ['A Company — Engineer'],
        bullets: [{ id: 'experience:0:0', text: 'Reduced p99 latency' }],
      } as never,
      { roles: ['content'] } as never,
    );

    const handed = events.find((e) => e.purpose?.includes('orchestrator'));
    expect(handed).toMatchObject({ phase: 'failure', status: 'error' });
    expect(handed?.output).toMatchObject({
      agentId: 'content',
      success: false,
      turns: 0,
      usage: { inputTokens: 0, outputTokens: 0 },
    });
    expect(handed?.actor).toEqual({ kind: 'specialist', id: 'content' });
  });
});

describe('with no trace attached', () => {
  it('runs the same and records nothing', async () => {
    const engine = scriptedEngine(
      toolUse('query_knowledge_base', { question: 'x' }),
      text(DIAGNOSIS),
    );
    const traced = runtimeWith(engine, registryOf(lookup('an answer')), recorder().trace);
    const plain = new SubAgentRuntime({
      queryEngine: scriptedEngine(
        toolUse('query_knowledge_base', { question: 'x' }),
        text(DIAGNOSIS),
      ),
      toolRegistry: registryOf(lookup('an answer')),
      knowledge: { async search() { return []; } } as never,
      session: new SqliteSessionManager().create({ sourcePath: 'resume.md' }),
      trace: new NoTrace(),
    });

    const one = await traced.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });
    const two = await plain.run({ agentConfig: CONTENT_AGENT, input: 'diagnose' });

    expect(one.success).toBe(two.success);
    expect(one.output).toEqual(two.output);
    expect(one.turns).toBe(two.turns);
  });
});
