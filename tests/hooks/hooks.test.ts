import { describe, expect, it, vi } from 'vitest';

import type { ToolCall } from '../../src/types.js';
import type { CandidateProfile, DiagnosisReport, EntryDiagnosis } from '../../src/domain.js';
import {
  CURRENT_DIMENSION,
  DefaultHookPipeline,
  MetricCollector,
  TOOL_START_TIME,
  createAuditLogHook,
  createBudgetCheckHook,
  createMemoryTriggerHook,
  createPermissionCheckHook,
  createProgressUpdateHook,
  createResultCompressHook,
  type Hook,
  type HookContext,
  type HookOutcome,
} from '../../src/hooks/index.js';
import { MemoryTriggers, SqliteMemoryStore } from '../../src/memory/index.js';
import { DefaultPermissionGate, SqliteAuditLogger } from '../../src/permission/index.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import type { Session } from '../../src/session/types.js';
import type { QueryEngine } from '../../src/query-engine/types.js';
import type { ToolResult } from '../../src/tools/types.js';

function session(): Session {
  return new SqliteSessionManager().create({ sourcePath: 'resume.md' });
}

function context(name = 'analyze_format', input: Record<string, unknown> = {}): HookContext {
  return {
    toolCall: { id: `c-${name}`, name, input } satisfies ToolCall,
    session: session(),
    metadata: new Map<string, unknown>(),
  };
}

function spyHook(
  name: string,
  priority: number,
  timing: Hook['timing'],
  outcome: HookOutcome | (() => HookOutcome),
  log?: string[],
): Hook {
  return {
    name,
    timing,
    priority,
    enabled: true,
    async execute() {
      log?.push(name);
      return typeof outcome === 'function' ? outcome() : outcome;
    },
  };
}

const cont: HookOutcome = { action: 'continue' };

describe('DefaultHookPipeline', () => {
  it('runs by priority, lowest first', async () => {
    const order: string[] = [];
    const pipeline = new DefaultHookPipeline();
    pipeline.register(spyHook('third', 30, 'pre-tool', cont, order));
    pipeline.register(spyHook('first', 10, 'pre-tool', cont, order));
    pipeline.register(spyHook('second', 20, 'pre-tool', cont, order));

    await pipeline.runPre(context());

    expect(order).toEqual(['first', 'second', 'third']);
  });

  it('runs only the hooks for that timing', async () => {
    const order: string[] = [];
    const pipeline = new DefaultHookPipeline();
    pipeline.register(spyHook('pre', 10, 'pre-tool', cont, order));
    pipeline.register(spyHook('post', 10, 'post-tool', cont, order));

    await pipeline.runPre(context());

    expect(order).toEqual(['pre']);
  });

  it('stops the chain on block', async () => {
    const order: string[] = [];
    const pipeline = new DefaultHookPipeline();
    pipeline.register(spyHook('gate', 10, 'pre-tool', { action: 'block', reason: 'nope' }, order));
    pipeline.register(spyHook('after', 20, 'pre-tool', cont, order));

    const outcome = await pipeline.runPre(context());

    expect(outcome).toEqual({ action: 'block', reason: 'nope' });
    expect(order).toEqual(['gate']);
  });

  it('stops the chain on skip but lets the tool run', async () => {
    const order: string[] = [];
    const pipeline = new DefaultHookPipeline();
    pipeline.register(spyHook('bail', 10, 'pre-tool', { action: 'skip' }, order));
    pipeline.register(spyHook('after', 20, 'pre-tool', cont, order));

    expect(await pipeline.runPre(context())).toEqual({ action: 'continue' });
    expect(order).toEqual(['bail']);
  });

  it('shows a later hook what an earlier one changed', async () => {
    const pipeline = new DefaultHookPipeline();
    let observed: unknown;
    pipeline.register(
      spyHook('rewrite', 10, 'pre-tool', { action: 'modify_input', input: { path: 'changed' } }),
    );
    pipeline.register({
      name: 'observe',
      timing: 'pre-tool',
      priority: 20,
      enabled: true,
      async execute(ctx) {
        observed = ctx.toolCall.input;
        return cont;
      },
    });

    const ctx = context('analyze_format', { path: 'original' });
    await pipeline.runPre(ctx);

    expect(observed).toEqual({ path: 'changed' });
    expect(ctx.toolCall.input).toEqual({ path: 'changed' });
  });

  it('carries on when a hook throws', async () => {
    // A broken governance hook must not take the diagnosis down with it.
    const order: string[] = [];
    const stderr = vi.spyOn(process.stderr, 'write').mockReturnValue(true);
    const pipeline = new DefaultHookPipeline();
    pipeline.register({
      name: 'broken',
      timing: 'pre-tool',
      priority: 10,
      enabled: true,
      async execute() {
        throw new Error('boom');
      },
    });
    pipeline.register(spyHook('after', 20, 'pre-tool', cont, order));

    expect(await pipeline.runPre(context())).toEqual({ action: 'continue' });
    expect(order).toEqual(['after']);
    expect(stderr).toHaveBeenCalledWith(expect.stringContaining('broken'));
    stderr.mockRestore();
  });

  it('skips a disabled hook, and only in the pipeline that disabled it', async () => {
    // Hooks are copied on register. Sharing the object would mean disabling a
    // hook in one pipeline switched it off everywhere in the process.
    const shared = spyHook('shared', 10, 'pre-tool', cont);
    const a = new DefaultHookPipeline();
    const b = new DefaultHookPipeline();
    a.register(shared);
    b.register(shared);

    a.disable('shared');

    expect(a.list()[0]?.enabled).toBe(false);
    expect(b.list()[0]?.enabled).toBe(true);
    expect(shared.enabled).toBe(true);
  });

  it('refuses to register the same name twice', () => {
    const pipeline = new DefaultHookPipeline();
    pipeline.register(spyHook('one', 10, 'pre-tool', cont));

    expect(() => pipeline.register(spyHook('one', 20, 'pre-tool', cont))).toThrow(/already registered/);
  });

  it('drops a hook on unregister', async () => {
    const order: string[] = [];
    const pipeline = new DefaultHookPipeline();
    pipeline.register(spyHook('gone', 10, 'pre-tool', cont, order));
    pipeline.unregister('gone');

    await pipeline.runPre(context());

    expect(order).toEqual([]);
    expect(pipeline.list()).toEqual([]);
  });
});

describe('permission-check', () => {
  it('blocks a tool no rule allows, naming the rule', async () => {
    const hook = createPermissionCheckHook(new DefaultPermissionGate());
    const outcome = await hook.execute(context('delete_everything'));

    expect(outcome.action).toBe('block');
    expect(outcome).toMatchObject({ reason: expect.stringContaining('No matching rule') });
  });

  it('passes the decision to the hooks behind it', async () => {
    const ctx = context('analyze_format');
    await createPermissionCheckHook(new DefaultPermissionGate()).execute(ctx);

    expect(ctx.metadata.get('permissionDecision')).toMatchObject({ allowed: true });
  });

  it('blocks when the gate itself fails', async () => {
    // The pipeline logs a throwing hook and carries on, which for this one
    // would mean the tool runs unchecked.
    const broken = {
      async checkTool() {
        throw new Error('database is locked');
      },
    } as never;
    const outcome = await createPermissionCheckHook(broken).execute(context('analyze_format'));

    expect(outcome.action).toBe('block');
    expect(outcome).toMatchObject({ reason: expect.stringContaining('database is locked') });
  });
});

describe('budget-check', () => {
  const engine = (ok: boolean, reason?: string) =>
    ({ checkBudget: () => (reason === undefined ? { ok } : { ok, reason }) }) as unknown as QueryEngine;

  it('lets a call through while there is budget', async () => {
    expect(await createBudgetCheckHook(engine(true)).execute(context())).toEqual(cont);
  });

  it('blocks once the budget is gone, and says how to continue', async () => {
    const outcome = await createBudgetCheckHook(engine(false, '$1.02 of $1.00')).execute(context());

    expect(outcome.action).toBe('block');
    expect(outcome).toMatchObject({ reason: expect.stringContaining('maxCostUsd') });
  });
});

describe('audit-log', () => {
  it('records the outcome, which the permission log does not', async () => {
    const logger = new SqliteAuditLogger();
    const ctx = context('analyze_entry', { entryId: 'e1' });
    ctx.result = { success: false, error: { code: 'model_error', message: 'bad json' } };

    await createAuditLogHook(logger).execute(ctx);

    const [record] = logger.getSessionExecutions(ctx.session.id);
    expect(record?.toolName).toBe('analyze_entry');
    expect(record?.success).toBe(false);
    expect(record?.outputSummary).toContain('bad json');
  });

  it('records nothing when the tool produced no result', async () => {
    const logger = new SqliteAuditLogger();
    const ctx = context('analyze_entry');

    await createAuditLogHook(logger).execute(ctx);

    expect(logger.getSessionExecutions(ctx.session.id)).toHaveLength(0);
  });
});

describe('result-compress', () => {
  it('leaves a result that already fits', async () => {
    const ctx = context('analyze_entry');
    ctx.result = { success: true, data: { score: 30 } };

    expect(await createResultCompressHook(1_000).execute(ctx)).toEqual(cont);
  });

  it('shrinks an oversized result while keeping it parseable', async () => {
    const ctx = context('analyze_entry');
    ctx.result = {
      success: true,
      data: { bullets: Array.from({ length: 80 }, (_, i) => ({ id: `b${i}`, detail: 'x'.repeat(200) })) },
    };

    const outcome = await createResultCompressHook(200).execute(ctx);

    expect(outcome.action).toBe('modify_result');
    const data = (outcome as { result: ToolResult }).result.data as { bullets: unknown[] };
    expect(data.bullets).toHaveLength(4);
    expect(data.bullets[3]).toBe('... 77 more');
  });

  it('survives a result that structural compression cannot shrink', async () => {
    // Many short keys: `compressValue` keeps every one, so the output stays
    // oversized and falls back to truncation — which is not valid JSON.
    // Parsing it blind throws, the pipeline swallows the throw, and the result
    // travels on uncompressed with nothing to show the hook gave up.
    const ctx = context('analyze_entry');
    ctx.result = {
      success: true,
      data: Object.fromEntries(Array.from({ length: 4_000 }, (_, i) => [`k${i}`, i])),
    };

    const outcome = await createResultCompressHook(100).execute(ctx);

    expect(outcome.action).toBe('modify_result');
    expect((outcome as { result: ToolResult }).result.data).toMatchObject({ truncated: true });
  });
});

describe('memory-trigger', () => {
  function triggers() {
    const store = new SqliteMemoryStore<CandidateProfile>(':memory:');
    return { store, hook: createMemoryTriggerHook(new MemoryTriggers(store)) };
  }

  const weakEntry: EntryDiagnosis = {
    entryId: 'e1',
    overallScore: 30,
    bullets: [
      {
        bulletId: 'b0',
        overallScore: 30,
        dimensions: {
          impact: { score: 30, detail: '' },
          measurement: { score: 0, detail: '' },
          method: { score: 20, detail: '' },
        },
        issues: ['no measurable outcome'],
        strengths: [],
      },
    ],
    narrative: { redundantPairs: [], weakLead: false, coherence: { score: 40, detail: '' } },
  };

  it('files a weak entry under the dimension the skill retrieved against', async () => {
    const { store, hook } = triggers();
    const ctx = context('analyze_entry');
    ctx.result = { success: true, data: weakEntry };
    ctx.metadata.set(CURRENT_DIMENSION, 'xyz-structure');

    await hook.execute(ctx);

    expect(store.retrieve({ type: 'weak_point', minConfidence: 0 })[0]?.key).toBe('xyz-structure');
  });

  it('writes nothing when no dimension was set', async () => {
    // An unscoped weak point is never recalled, so storing one is pure noise.
    const { store, hook } = triggers();
    const ctx = context('analyze_entry');
    ctx.result = { success: true, data: weakEntry };

    await hook.execute(ctx);

    expect(store.getStats().total).toBe(0);
  });

  it('ignores a dimension that is not one of ours', async () => {
    const { store, hook } = triggers();
    const ctx = context('analyze_entry');
    ctx.result = { success: true, data: weakEntry };
    ctx.metadata.set(CURRENT_DIMENSION, 'made-up-dimension');

    await hook.execute(ctx);

    expect(store.getStats().total).toBe(0);
  });

  it('records the run when the report lands', async () => {
    const { store, hook } = triggers();
    const ctx = context('generate_report');
    ctx.result = {
      success: true,
      data: {
        summary: {
          totalEntries: 4,
          totalBullets: 12,
          overallScore: 42,
          substanceAvg: 34,
          wordingAvg: 40,
          formatScore: 70,
          topStrengths: [],
          topWeaknesses: ['no measurable outcome'],
        },
        perEntry: [],
        format: {} as DiagnosisReport['format'],
        improvementPlan: { immediate: [], shortTerm: [], longTerm: [] },
      } satisfies DiagnosisReport,
    };

    await hook.execute(ctx);

    expect(store.getProfile().lastOverallScore).toBe(42);
    expect(store.retrieve({ type: 'diagnosis_summary' })).toHaveLength(1);
  });

  it('writes nothing when the tool failed', async () => {
    const { store, hook } = triggers();
    const ctx = context('generate_report');
    ctx.result = { success: false, error: { code: 'model_error', message: 'x' } };

    await hook.execute(ctx);

    expect(store.getStats().total).toBe(0);
  });
});

describe('progress-update', () => {
  it('counts one per diagnosed entry', async () => {
    const hook = createProgressUpdateHook();
    const ctx = context('analyze_entry');
    ctx.session.progress = { total: 4, done: 1, current: 2, phase: '' };
    ctx.result = { success: true, data: {} };

    await hook.execute(ctx);

    expect(ctx.session.progress).toMatchObject({ done: 2, current: 3, phase: 'diagnosing entries (2/4)' });
  });

  it('does not count the wording pass or the report', async () => {
    // Each entry gets two model calls and the run ends with a third; counting
    // all of them would put `done` past `total`.
    const hook = createProgressUpdateHook();
    for (const name of ['analyze_wording', 'generate_report', 'analyze_format']) {
      const ctx = context(name);
      ctx.session.progress = { total: 4, done: 1, current: 2, phase: '' };
      ctx.result = { success: true, data: {} };

      await hook.execute(ctx);
      expect(ctx.session.progress.done, name).toBe(1);
    }
  });

  it('never reports more done than there are entries', async () => {
    const hook = createProgressUpdateHook();
    const ctx = context('analyze_entry');
    ctx.session.progress = { total: 4, done: 4, current: 4, phase: '' };
    ctx.result = { success: true, data: {} };

    await hook.execute(ctx);

    expect(ctx.session.progress.done).toBe(4);
  });
});

describe('MetricCollector', () => {
  it('reports nothing before anything has run', () => {
    expect(new MetricCollector().getSummary()).toEqual({
      totalCalls: 0,
      avgDurationMs: 0,
      successRate: 0,
      byTool: {},
    });
  });

  it('times a call from the stamp the dispatcher left', async () => {
    const collector = new MetricCollector();
    const ctx = context('analyze_entry');
    ctx.metadata.set(TOOL_START_TIME, Date.now() - 250);
    ctx.result = { success: true, data: {} };

    await collector.createHook().execute(ctx);

    expect(collector.getSummary().byTool.analyze_entry?.avgMs).toBeGreaterThanOrEqual(250);
  });

  it('records zero rather than inventing a duration', async () => {
    const collector = new MetricCollector();
    const ctx = context('analyze_entry');
    ctx.result = { success: true, data: {} };

    await collector.createHook().execute(ctx);

    expect(collector.getSummary().avgDurationMs).toBe(0);
  });

  it('splits successes from failures per tool', async () => {
    const collector = new MetricCollector();
    const hook = collector.createHook();

    for (const success of [true, true, false]) {
      const ctx = context('analyze_entry');
      ctx.result = success
        ? { success: true, data: {} }
        : { success: false, error: { code: 'model_error', message: 'x' } };
      await hook.execute(ctx);
    }

    const summary = collector.getSummary();
    expect(summary.totalCalls).toBe(3);
    expect(summary.successRate).toBeCloseTo(2 / 3);
    expect(summary.byTool.analyze_entry).toMatchObject({ calls: 3, failures: 1 });
  });
});
