import { describe, expect, it } from 'vitest';

import type { ResumeEntry } from '../../src/domain.js';
import {
  DefaultOrchestrator,
  DefaultRoleSelector,
  ENTRY_SUBSTANCE_AGENT,
  ENTRY_WORDING_AGENT,
  SemaphorePool,
  SubAgentRuntime,
  type SubAgentConfig,
} from '../../src/agent/index.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { createToolRegistry } from '../../src/tools/index.js';

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

function runtimeWith(engine: QueryEngine, hits: unknown[] = []) {
  const sessions = new SqliteSessionManager();
  const searches: Array<{ query: string; dimension?: string }> = [];
  const runtime = new SubAgentRuntime({
    queryEngine: engine,
    toolRegistry: createToolRegistry(),
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

  it('offers only the tools its role declares', async () => {
    const { engine, seen } = scriptedEngine(text(SUBSTANCE_JSON));
    const { runtime } = runtimeWith(engine);

    await runtime.run({ agentConfig: ENTRY_SUBSTANCE_AGENT, input: 'diagnose' });

    expect(seen[0]?.tools?.map((t) => t.name)).toEqual(['query_knowledge_base']);
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

  it('gives up after maxTurns and says why', async () => {
    const { engine } = scriptedEngine(toolUse('query_knowledge_base', { query: 'x' }));
    const { runtime } = runtimeWith(engine);

    const result = await runtime.run({ agentConfig: ENTRY_WORDING_AGENT, input: 'judge' });

    expect(result.success).toBe(false);
    expect(result.turns).toBe(2);
    expect(result.error).toMatch(/stopped after 2 turns/);
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

describe('DefaultRoleSelector', () => {
  it('runs both per-entry roles on a clean resume', () => {
    const selection = new DefaultRoleSelector().select({ entryCount: 4, hasJd: false, quality: 'clean' });

    expect(selection.roles).toEqual(['entry-substance', 'entry-wording']);
  });

  it('drops wording when the text was barely readable', () => {
    // Judging verb choice on a degraded extraction reports the extractor's
    // mistakes as the candidate's.
    const selection = new DefaultRoleSelector().select({ entryCount: 4, hasJd: false, quality: 'degraded' });

    expect(selection.roles).toEqual(['entry-substance']);
    expect(selection.reasons['entry-wording']).toMatch(/degraded/);
  });

  it('runs nothing when there are no entries, and says so', () => {
    const selection = new DefaultRoleSelector().select({ entryCount: 0, hasJd: false, quality: 'clean' });

    expect(selection.roles).toEqual([]);
    expect(selection.reasons['entry-substance']).toMatch(/no entries/);
  });

  it('says why the unbuilt roles did not run', () => {
    const selection = new DefaultRoleSelector().select({ entryCount: 2, hasJd: true, quality: 'clean' });

    expect(selection.reasons['jd-match']).toMatch(/no agent implemented/);
    expect(selection.reasons['narrative']).toMatch(/no agent implemented/);
  });
});
