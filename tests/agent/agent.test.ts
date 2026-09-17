import { describe, expect, it } from 'vitest';

import type { ResumeDocument, ResumeEntry, SectionKind } from '../../src/domain.js';
import {
  DefaultOrchestrator,
  ENTRY_SUBSTANCE_AGENT,
  ENTRY_WORDING_AGENT,
  SemaphorePool,
  SubAgentRuntime,
  type SubAgentConfig,
} from '../../src/agent/index.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { MapToolRegistry, createToolRegistry } from '../../src/tools/index.js';
import type { SearchProvider } from '../../src/tools/search-provider.js';
import type { ToolRegistry } from '../../src/tools/types.js';

const entry: ResumeEntry = {
  id: 'experience:0',
  sectionId: 'experience',
  index: 0,
  organization: 'ByteDance',
  title: 'Backend Engineer Intern',
  headerLines: ['ByteDance — Backend Engineer Intern | 2025.06 – 2025.09'],
  bullets: [
    { id: 'experience:0:0', entryId: 'experience:0', index: 0, text: 'Responsible for the order query service', span: { start: 0, end: 38 } },
  ],
  span: { start: 0, end: 100 },
};

const SUBSTANCE_JSON = JSON.stringify({
  bullets: [
    {
      bulletId: 'experience:0:0',
      overallScore: 20,
      dimensions: { impact: { score: 20, detail: 'a duty' }, measurement: { score: 0, detail: 'no figure' }, method: { score: 10, detail: '' } },
      issues: ['no measurable outcome'],
      strengths: [],
    },
  ],
  narrative: { redundantPairs: [], weakLead: true, coherence: { score: 40, detail: '' } },
});

const WORDING_JSON = JSON.stringify({
  perBullet: [
    { bulletId: 'experience:0:0', verbStrength: { score: 20, detail: '' }, concision: { score: 60, detail: '' }, issues: ['bystander opener'] },
  ],
});

const usage = { inputTokens: 10, outputTokens: 20 };

/** Replies in the order given; records what it was asked. */
function scriptedEngine(...replies: ParsedResponse[]) {
  const seen: QueryParams[] = [];
  const engine: QueryEngine = {
    async query(params) {
      seen.push(params);
      return replies[Math.min(seen.length - 1, replies.length - 1)]!;
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
  return { engine, seen };
}

const text = (content: string): ParsedResponse => ({ type: 'text', content, usage, stopReason: 'end_turn' });
const toolUse = (name: string, input: Record<string, unknown>): ParsedResponse => ({
  type: 'tool_use',
  toolCalls: [{ id: 'tc1', name, input }],
  usage,
  stopReason: 'tool_use',
});

function runtimeWith(
  engine: QueryEngine,
  hits: unknown[] = [],
  registry?: ToolRegistry,
  search?: SearchProvider,
) {
  const sessions = new SqliteSessionManager();
  const searches: Array<{ query: string; dimension?: string }> = [];
  const runtime = new SubAgentRuntime({
    queryEngine: engine,
    toolRegistry: registry ?? createToolRegistry(),
    ...(search ? { search } : {}),
    knowledge: {
      async search(query: string, opts?: { dimension?: string }) {
        searches.push({ query, ...(opts?.dimension ? { dimension: opts.dimension } : {}) });
        return hits as never;
      },
    } as never,
    session: sessions.create({ sourcePath: 'resume.md' }),
  });
  return { runtime, searches };
}

describe('SemaphorePool', () => {
  it('never runs more than the limit at once', async () => {
    const pool = new SemaphorePool(2);
    let running = 0;
    let peak = 0;

    await pool.runAll(
      Array.from({ length: 8 }, () => async () => {
        running += 1;
        peak = Math.max(peak, running);
        await new Promise((r) => setTimeout(r, 5));
        running -= 1;
      }),
    );

    expect(peak).toBe(2);
  });

  it('hands a freed slot to whoever was waiting', async () => {
    const pool = new SemaphorePool(1);
    const order: number[] = [];

    await pool.runAll([1, 2, 3].map((n) => async () => { order.push(n); }));

    expect(order).toEqual([1, 2, 3]);
    expect(pool.getStats()).toEqual({ running: 0, queued: 0, max: 1 });
  });

  it('frees the slot when a task throws', async () => {
    // Without the `finally`, one failure would leak a slot and a pool of one
    // would deadlock on the next task.
    const pool = new SemaphorePool(1);

    await expect(pool.run(async () => { throw new Error('boom'); })).rejects.toThrow('boom');
    expect(await pool.run(async () => 'ok')).toBe('ok');
  });

  it('refuses a pool that can run nothing', () => {
    expect(() => new SemaphorePool(0)).toThrow(/at least 1/);
  });
});

describe('SubAgentRuntime', () => {
  it('returns parsed JSON when the agent answers directly', async () => {
    const { engine } = scriptedEngine(text(SUBSTANCE_JSON));
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(result.success).toBe(true);
    expect(result.turns).toBe(1);
    expect((result.output as { bullets: unknown[] }).bullets).toHaveLength(1);
    expect(result.usage).toEqual(usage);
  });

  it('reads a fenced JSON block', async () => {
    const { engine } = scriptedEngine(text(`Here you go:\n\`\`\`json\n${SUBSTANCE_JSON}\n\`\`\``));
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect((result.output as { narrative: unknown }).narrative).toBeDefined();
  });

  it('finds the JSON inside a reply that wraps it in prose', async () => {
    // A greedy `/\{[\s\S]*\}/` runs from the first brace to the last one in the
    // whole reply, so a closing sentence containing a brace turns a good
    // answer into an unparseable one.
    const { engine } = scriptedEngine(
      text(`Here is the diagnosis:\n\n${SUBSTANCE_JSON}\n\nLet me know if you want {more} detail.`),
    );
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect((result.output as { bullets: unknown[] }).bullets).toHaveLength(1);
  });

  it('treats an answer that never arrived as a failure', async () => {
    // A thinking model can spend a whole turn reasoning and write nothing.
    // Reported as success it becomes an entry scoring zero, which reads as a
    // verdict on the resume rather than as a gap in the diagnosis.
    const { engine } = scriptedEngine({
      type: 'text',
      content: '   ',
      reasoning: 'Let me work through each bullet in turn...',
      usage,
      stopReason: 'end_turn',
    });
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(result.success).toBe(false);
    expect(result.error).toMatch(/finished its reasoning without writing an answer/);
  });

  it('says so when the answer was cut off at the output limit', async () => {
    // Truncated JSON parses as prose, and the report then blames the model's
    // formatting rather than the cap it ran into.
    const { engine } = scriptedEngine({
      type: 'text',
      content: '{"bullets": [{"bulletId": "x", "overall',
      usage,
      stopReason: 'max_tokens',
    });
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(result.success).toBe(false);
    expect(result.error).toMatch(/cut off at the output limit/);
  });

  it('keeps the prose when there is no JSON in it at all', async () => {
    const { engine } = scriptedEngine(text('The bullet reads fine to me.'));
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(typeof result.output).toBe('string');
  });

  it('loops: calls a tool, reads the result, then answers', async () => {
    // This is the whole reason the layer exists — the agent chooses what to
    // look up after seeing the bullet, rather than the pipeline choosing first.
    const { engine, seen } = scriptedEngine(
      toolUse('query_knowledge_base', { query: 'no outcome', dimension: 'impact-quantification' }),
      text(SUBSTANCE_JSON),
    );
    const { runtime, searches } = runtimeWith(engine, [
      { id: 'k1', dimension: 'impact-quantification', dimensionLabel: 'Impact', question: 'q', weakAnswer: 'w', strongAnswer: 's', gapAnalysis: 'g', keywords: [], similarity: 0.8, matchedBy: 'both' },
    ]);

    const result = await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(result.turns).toBe(2);
    expect(result.success).toBe(true);
    expect(searches[0]?.dimension).toBe('impact-quantification');
    // The tool result came back into the agent's own window, not the parent's.
    expect(seen[1]?.messages.some((m) => m.role === 'tool')).toBe(true);
  });

  it('asks the router for the kind of work its role actually is', async () => {
    // Without this every role ran as `diagnose_bullet`, so wording — no
    // retrieval, and already routed to the cheap model at low effort in the
    // table — was paying for the top tier on every entry.
    const { engine, seen } = scriptedEngine(text(WORDING_JSON));
    const { runtime } = runtimeWith(engine);

    await runtime.run({ agentConfig: ENTRY_WORDING_AGENT, input: 'judge' });
    expect(seen[0]?.task).toBe('judge_wording');

    seen.length = 0;
    await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });
    expect(seen[0]?.task).toBe('diagnose_bullet');
  });

  it('offers only the tools its role declares', async () => {
    const { engine, seen } = scriptedEngine(text(SUBSTANCE_JSON));
    const { runtime } = runtimeWith(engine);

    await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(seen[0]?.tools?.map((t) => t.name)).toEqual(['query_knowledge_base']);
  });

  it('offers an optional tool once something is behind it', async () => {
    const { engine, seen } = scriptedEngine(text(SUBSTANCE_JSON));
    const search = { name: 'fake', async search() { return []; } };
    const { runtime } = runtimeWith(engine, [], createToolRegistry({ search: search as never }));

    await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(seen[0]?.tools?.map((t) => t.name)).toEqual(['query_knowledge_base', 'web_search']);
  });

  it('does not promise a capability the run does not have', async () => {
    // Telling a model it can search and handing it no search tool is worse
    // than saying nothing: it spends budget reasoning about a way out it does
    // not have, or reports that it would have looked something up.
    const { engine, seen } = scriptedEngine(text(SUBSTANCE_JSON));
    const search = { name: 'fake', async search() { return []; } };

    const { runtime: without } = runtimeWith(engine);
    await without.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    const { runtime: with_ } = runtimeWith(
      engine,
      [],
      createToolRegistry({ search: search as never }),
    );
    await with_.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(seen[0]?.systemPrompt).not.toMatch(/web_results/);
    expect(seen[1]?.systemPrompt).toMatch(/web_results/);
  });

  it('hands the search provider to the tool it registered it for', async () => {
    // A sub-agent builds its own ToolContext instead of going through the
    // Dispatcher. Wiring the provider into the Dispatcher alone left the
    // fan-out — the path a diagnosis actually runs on — calling web_search and
    // getting "not configured" back in a millisecond.
    const calls: Array<Record<string, unknown>> = [];
    const provider = {
      name: 'fake',
      async search(query: string) {
        calls.push({ query });
        return [];
      },
    };
    const registry = createToolRegistry({ search: provider as never });
    const { engine } = scriptedEngine(
      toolUse('web_search', { query: 'int8 vram' }),
      text(SUBSTANCE_JSON),
    );
    const { runtime } = runtimeWith(engine, [], registry, provider as never);

    await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(calls).toEqual([{ query: 'int8 vram' }]);
  });

  it('compacts its own window once a run fills it', async () => {
    // The main loop always did this; a sub-agent never did, so the compaction
    // ladder could not run on the one path that actually fills a window — the
    // fan-out, where a role makes several lookups and carries every result
    // forward. Level 2 is visible from outside as a `summarize` query.
    // A bare registry holding one heavy tool: the real one cannot be replaced,
    // and re-registering a name is refused on purpose.
    //
    // Sized just under `toolResultBudget`, because `compressToolOutput` does
    // not compress *to* a budget — over it, it guts the JSON structurally,
    // cutting every string to 120 characters. A payload built to be oversized
    // therefore arrives tiny and never fills anything. Real search results
    // land under the budget and pass through whole, which is the case worth
    // testing.
    const huge = 'x'.repeat(23_000);
    const registry = new MapToolRegistry();
    registry.register({
      name: 'query_knowledge_base',
      description: 'stand-in that returns more than a window can hold',
      parameters: { type: 'object', properties: {}, additionalProperties: false },
      async execute() {
        return { success: true, data: { hits: [{ gap: huge }] } };
      },
    } as never);

    // Three lookups a turn, which is what a searching role actually does.
    const lookup: ParsedResponse = {
      type: 'tool_use',
      toolCalls: [1, 2, 3].map((n) => ({ id: `c${n}`, name: 'query_knowledge_base', input: { query: 'q' } })),
      usage,
      stopReason: 'tool_use',
    };
    const { engine, seen } = scriptedEngine(
      lookup, lookup, lookup, lookup, lookup, text(SUBSTANCE_JSON),
    );
    const { runtime } = runtimeWith(engine, [], registry);

    await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    // Asserted on the window rather than on which rung was reached: level 1
    // re-compresses tool output for free and usually settles it there, and a
    // test that demanded the model call of level 2 would be asserting that
    // the cheap fix failed.
    const size = (i: number) =>
      (seen[i]?.messages ?? []).reduce((n, m) => n + m.content.length, 0);

    expect(size(1)).toBeGreaterThan(size(2));
  });

  it('passes down only the keys on the boundary list', async () => {
    // A sub-agent handed the parent's whole context pays for it every turn and
    // diagnoses worse.
    const { engine, seen } = scriptedEngine(text(SUBSTANCE_JSON));
    const { runtime } = runtimeWith(engine);

    await runtime.run({
      agentConfig: ENTRY_WORDING_AGENT,
      input: 'judge',
      context: { entry: 'ByteDance — Backend Intern', secretPlan: 'do not leak', previousFindings: 'nope' },
    });

    const sent = JSON.stringify(seen[0]);
    expect(sent).toContain('ByteDance');
    expect(sent).not.toContain('do not leak');
    expect(sent).not.toContain('nope');
  });

  it('takes the tools away on the last turn so an answer always comes back', async () => {
    // An agent that spends its whole allowance looking things up used to
    // return nothing, and the entry it was reading scored zero — which in the
    // report reads as a verdict rather than as a gap.
    const { engine, seen } = scriptedEngine(
      toolUse('query_knowledge_base', { query: 'x' }),
      text(WORDING_JSON),
    );
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({
      agentConfig: { ...ENTRY_WORDING_AGENT, maxTurns: 2 },
      input: 'judge',
    });

    expect(result.success).toBe(true);
    expect(result.turns).toBe(2);
    expect(seen[0]?.tools).toBeDefined();
    expect(seen[1]?.tools).toBeUndefined();
    // Taking the tools away is not enough: a model that was about to look
    // something up writes about what it would have looked up instead.
    expect(seen[1]?.messages.at(-1)?.content).toMatch(/No more lookups/);
  });

  it('does not nudge an agent that answered on its first turn', async () => {
    const { engine, seen } = scriptedEngine(text(SUBSTANCE_JSON));
    const { runtime } = runtimeWith(engine);

    await runtime.run({ agentConfig: ENTRY_WORDING_AGENT, input: 'judge' });

    expect(JSON.stringify(seen[0])).not.toContain('No more lookups');
  });

  it('fails cleanly when the last turn asks for another tool instead of answering', async () => {
    // Tools are not offered on the last turn, so a reply that carries only
    // calls carries no answer. Saying so lets the orchestrator run it again.
    const { engine } = scriptedEngine(
      toolUse('query_knowledge_base', { query: 'x' }),
      toolUse('query_knowledge_base', { query: 'y' }),
    );
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({
      agentConfig: { ...ENTRY_WORDING_AGENT, maxTurns: 2 },
      input: 'judge',
    });

    expect(result.turns).toBe(2);
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/returned nothing/);
  });

  it('hands a tool failure back as a result the agent can read', async () => {
    // Thrown, it would end the run. Returned, the agent can ask differently —
    // which is the point of having a loop at all.
    const { engine } = scriptedEngine(
      toolUse('query_knowledge_base', {}),
      text(SUBSTANCE_JSON),
    );
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(result.success).toBe(true);
    expect(result.turns).toBe(2);
  });

  it('reports a tool the role cannot reach', async () => {
    const rogue: SubAgentConfig = { ...ENTRY_SUBSTANCE_AGENT, maxTurns: 2 };
    const { engine } = scriptedEngine(toolUse('rewrite_bullet', {}), text(SUBSTANCE_JSON));
    const { runtime } = runtimeWith(engine);

    // The registry has the tool, but the turn still completes rather than
    // throwing, and the agent gets to see that it went nowhere.
    const result = await runtime.run({ agentConfig: rogue, input: 'diagnose' });
    expect(result.turns).toBe(2);
  });
});

describe('DefaultOrchestrator', () => {
  function orchestrator(engine: QueryEngine, config = {}) {
    const { runtime } = runtimeWith(engine);
    return new DefaultOrchestrator(runtime, config);
  }

  const bothRoles = { roles: ['entry-substance', 'entry-wording'] as const, reasons: {} };

  it('runs the per-entry roles together and aggregates them', async () => {
    let call = 0;
    const engine: QueryEngine = {
      async query(params) {
        call += 1;
        // Substance and wording ask for different JSON; reply to whichever asked.
        const wantsWording = params.systemPrompt?.includes('resume editor');
        return text(wantsWording ? WORDING_JSON : SUBSTANCE_JSON);
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };

    const verdict = await orchestrator(engine).diagnoseEntry(entry, bothRoles);

    expect(call).toBe(2);
    expect(verdict.substance?.bullets[0]?.issues).toEqual(['no measurable outcome']);
    expect(verdict.wording?.perBullet[0]?.verbStrength.score).toBe(20);
    expect(verdict.overallScore).toBe(30);
    expect(verdict.agentStats.map((s) => s.name).sort()).toEqual(['Entry Substance', 'Entry Wording']);
  });

  it('does not dispatch an entry with no bullets', async () => {
    // A degree is a header with no bullets, and both per-entry roles score
    // bullets. Sending it buys two calls that can only come back empty.
    const { engine, seen } = scriptedEngine(text(SUBSTANCE_JSON));
    const verdict = await orchestrator(engine).diagnoseEntry(
      { ...entry, bullets: [] },
      bothRoles,
    );

    expect(seen).toHaveLength(0);
    expect(verdict.agentStats).toEqual([]);
    expect(verdict.substance).toBeNull();
  });

  it('keeps the surviving role when the other fails', async () => {
    const engine: QueryEngine = {
      async query(params) {
        if (params.systemPrompt?.includes('resume editor')) throw new Error('provider down');
        return text(SUBSTANCE_JSON);
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };

    const verdict = await orchestrator(engine).diagnoseEntry(entry, bothRoles);

    expect(verdict.substance).not.toBeNull();
    expect(verdict.wording).toBeNull();
    expect(verdict.agentStats.find((s) => s.name === 'Entry Wording')?.success).toBe(false);
  });

  it('fails the batch under fail_fast', async () => {
    const engine: QueryEngine = {
      async query() { throw new Error('provider down'); },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };

    await expect(
      orchestrator(engine, { failureStrategy: 'fail_fast' }).diagnoseEntry(entry, bothRoles),
    ).rejects.toThrow(/failed: provider down/);
  });

  it('tries once more under retry', async () => {
    let attempts = 0;
    const engine: QueryEngine = {
      async query() {
        attempts += 1;
        if (attempts === 1) throw new Error('flaky');
        return text(SUBSTANCE_JSON);
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };

    const verdict = await orchestrator(engine, { failureStrategy: 'retry' }).diagnoseEntry(
      entry,
      { roles: ['entry-substance'], reasons: {} },
    );

    expect(attempts).toBe(2);
    expect(verdict.substance).not.toBeNull();
  });

  it('does not turn prose into an empty diagnosis', async () => {
    // A sub-agent that answered in words returns a string; reading fields off
    // it would report a bullet with no findings as a bullet with no problems.
    const { engine } = scriptedEngine(text('The bullet looks fine to me.'));
    const verdict = await orchestrator(engine).diagnoseEntry(entry, bothRoles);

    expect(verdict.substance).toBeNull();
    expect(verdict.wording).toBeNull();
    expect(verdict.overallScore).toBe(0);
  });

  it('does not deadlock when entries and roles both want the pool', async () => {
    // The reference shares one pool between the two levels: an entry takes a
    // slot, then its roles ask the same pool for another. Fill the outer level
    // and every inner task waits on a slot no outer task will release.
    const { engine } = scriptedEngine(text(SUBSTANCE_JSON));
    const entries = Array.from({ length: 6 }, (_, i) => ({ ...entry, id: `experience:${i}` }));

    const verdicts = await orchestrator(engine, { maxConcurrency: 2 }).diagnoseAll(entries, bothRoles);

    expect(verdicts).toHaveLength(6);
  });

  it('reports progress as entries land', async () => {
    const { engine } = scriptedEngine(text(SUBSTANCE_JSON));
    const seen: Array<[number, number]> = [];
    const entries = [entry, { ...entry, id: 'experience:1' }, { ...entry, id: 'experience:2' }];

    const verdicts = await orchestrator(engine).diagnoseAll(
      entries,
      { roles: ['entry-substance'], reasons: {} },
      (done, total) => seen.push([done, total]),
    );

    expect(verdicts).toHaveLength(3);
    expect(seen.map(([d]) => d)).toEqual([1, 2, 3]);
    expect(seen.every(([, t]) => t === 3)).toBe(true);
  });
});

describe('whole-document roles', () => {
  const NARRATIVE_JSON = JSON.stringify({
    overallScore: 55,
    arc: 'Backend intern to backend intern, no visible progression.',
    gaps: ['Eight months between the two internships, unexplained'],
    orderingNotes: ['Lead with ByteDance, the stronger of the two'],
  });

  const JD_JSON = JSON.stringify({
    overallScore: 40,
    covered: [{ keyword: 'Go', locations: ['ByteDance bullet 2'] }],
    missing: [{ keyword: 'Kubernetes', required: true, suggestedSection: 'experience' }],
    gaps: ['Posting asks for five years; the resume shows two internships'],
  });

  function orch(engine: QueryEngine) {
    const { runtime } = runtimeWith(engine);
    return new DefaultOrchestrator(runtime);
  }

  /** A one-section document around whatever entries the test cares about. */
  function doc(
    entries: ResumeEntry[],
    kind: SectionKind = 'experience',
    heading = 'EXPERIENCE',
  ): ResumeDocument {
    return {
      sourcePath: 'r.md',
      format: 'markdown',
      rawText: '',
      sections: [{ id: kind, kind, heading, entries, looseLines: [], span: { start: 0, end: 1 } }],
      meta: { wordCount: 10, quality: 'clean', layoutWarnings: [] },
    };
  }

  it('reads the entries in sequence', async () => {
    const { engine, seen } = scriptedEngine(text(NARRATIVE_JSON));
    const entries = [entry, { ...entry, id: 'experience:1', organization: 'Tencent' }];

    const narrative = await orch(engine).assessNarrative(doc(entries));

    expect(narrative?.arc).toMatch(/no visible progression/);
    expect(narrative?.gaps).toHaveLength(1);
    // Both entries reached the agent, wrapped as data rather than instructions.
    expect(seen[0]?.messages.some((m) => m.content.includes('<resume_content>'))).toBe(true);
  });

  it('shows the agent which section each entry sits under', async () => {
    // Without the heading, the one role whose job is document-level structure
    // cannot see any, and spends an ordering note asking for a section the
    // resume already has.
    const { engine, seen } = scriptedEngine(text(NARRATIVE_JSON));

    await orch(engine).assessNarrative(doc([entry], 'project', 'PROJECTS'));

    const sent = seen[0]?.messages.map((m) => m.content).join('\n') ?? '';
    expect(sent).toContain('PROJECTS');
  });

  it('keeps the contact block away from the agent', async () => {
    // The only section carrying a phone number and an email, and no career arc
    // is decided by either.
    const { engine, seen } = scriptedEngine(text(NARRATIVE_JSON));
    const resume = doc([entry]);
    resume.sections.unshift({
      id: 'contact', kind: 'contact', heading: '',
      entries: [{ ...entry, id: 'contact:0', sectionId: 'contact', headerLines: ['+1 555 0100 | a@b.com'], bullets: [] }],
      looseLines: [], span: { start: 0, end: 1 },
    });

    await orch(engine).assessNarrative(resume);

    const sent = seen[0]?.messages.map((m) => m.content).join('\n') ?? '';
    expect(sent).not.toContain('a@b.com');
    expect(sent).toContain('ByteDance');
  });

  it('has nothing to read with no entries', async () => {
    const { engine, seen } = scriptedEngine(text(NARRATIVE_JSON));

    expect(await orch(engine).assessNarrative(doc([]))).toBeNull();
    expect(seen).toHaveLength(0);
  });

  it('scores keyword coverage against the posting', async () => {
    const { engine, seen } = scriptedEngine(text(JD_JSON));
    const resume = {
      sourcePath: 'r.md', format: 'markdown' as const, rawText: '',
      sections: [{ id: 'experience', kind: 'experience' as const, heading: 'Experience', entries: [entry], looseLines: [], span: { start: 0, end: 1 } }],
      meta: { wordCount: 10, quality: 'clean' as const, layoutWarnings: [] },
    };

    const match = await orch(engine).matchJd(resume, {
      rawText: 'We need Go and Kubernetes, five years experience.',
      requiredKeywords: [], preferredKeywords: [],
    });

    expect(match?.overallScore).toBe(40);
    expect(match?.missing[0]?.required).toBe(true);
    expect(JSON.stringify(seen[0])).toContain('Kubernetes');
  });

  it('returns null rather than a confident zero when the agent fails', async () => {
    // An empty assessment would print as a real score of 0 in the report.
    const engine: QueryEngine = {
      async query() { throw new Error('provider down'); },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };

    expect(await orch(engine).assessNarrative(doc([entry, entry]))).toBeNull();
  });

  it('survives an agent that answered in prose', async () => {
    const { engine } = scriptedEngine(text('The career looks fine overall.'));

    expect(await orch(engine).assessNarrative(doc([entry, entry]))).toBeNull();
  });
});
