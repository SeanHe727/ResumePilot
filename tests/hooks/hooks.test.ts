import { describe, expect, it, vi } from 'vitest';

import type { ToolCall } from '../../src/types.js';
import type { CandidateProfile, DiagnosisReport, EntryDiagnosis } from '../../src/domain.js';
import {
  DefaultHookPipeline,
  MetricCollector,
  TOOL_START_TIME,
  createAuditLogHook,
  createBudgetCheckHook,
  createDispatchTraceHook,
  createPathSourceHook,
  createProfileHook,
  createWeakPointHook,
  createPermissionCheckHook,
  createProgressUpdateHook,
  createResultCompressHook,
  type Hook,
  type HookContext,
  type HookOutcome,
} from '../../src/hooks/index.js';
import { grantPathsIn } from '../../src/session/granted-paths.js';
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

describe('what a hook waits for', () => {
  function counting(watches?: readonly string[]): { hook: Hook; ran: string[] } {
    const ran: string[] = [];
    return {
      ran,
      hook: {
        name: 'counter',
        timing: 'post-tool',
        priority: 1,
        ...(watches ? { watches } : {}),
        enabled: true,
        async execute(ctx): Promise<HookOutcome> {
          ran.push(ctx.toolCall.name);
          return { action: 'continue' };
        },
      },
    };
  }

  it('runs only on the tools it declared', async () => {
    const pipeline = new DefaultHookPipeline();
    const { hook, ran } = counting(['review_content']);
    pipeline.register(hook);

    await pipeline.runPost(context('review_content'));
    await pipeline.runPost(context('query_knowledge_base'));

    expect(ran).toEqual(['review_content']);
  });

  it('runs on everything when it declared nothing', async () => {
    const pipeline = new DefaultHookPipeline();
    const { hook, ran } = counting();
    pipeline.register(hook);

    await pipeline.runPost(context('review_content'));
    await pipeline.runPost(context('query_knowledge_base'));

    expect(ran).toHaveLength(2);
  });

  it('lists what each one is waiting for', async () => {
    // Declaring it is only half of it: a name no tool provides has to be
    // readable from outside, or it is the same silent nothing as before.
    const pipeline = new DefaultHookPipeline();
    pipeline.register(counting(['review_content']).hook);

    expect(pipeline.list()[0]?.watches).toEqual(['review_content']);
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

describe('path-source', () => {
  async function asked(said: string | undefined, path: string) {
    const ctx = context('parse_resume', { path });
    if (said !== undefined) grantPathsIn(said, ctx.session);
    return createPathSourceHook().execute(ctx);
  }

  it('opens a file the candidate named', async () => {
    const outcome = await asked('have a look at ./resume.pdf', './resume.pdf');

    expect(outcome.action).toBe('continue');
  });

  it('opens one named with directories in front of it', async () => {
    const outcome = await asked('it is at ~/Documents/cv.pdf', '~/Documents/cv.pdf');

    expect(outcome.action).toBe('continue');
  });

  it.each(['~/Documents/cv.docx', 'docs/resume.md', './notes.txt', 'cv.docx'])(
    'grants nothing for %s, which is not a format this reads',
    async (path) => {
      // A grant is standing permission to open a file. Handing one out for a
      // format the parser refuses buys nothing and widens what one sentence
      // can unlock. The suffix used to be checked only on a bare filename, so
      // the same name with a directory in front of it was granted.
      const outcome = await asked(`it is at ${path}`, path);

      expect(outcome.action).not.toBe('continue');
    },
  );

  it('takes the expanded form of a path they wrote', async () => {
    // Someone types a relative path and the model sends the absolute one. Both
    // sides resolve the same way, so it is one entry rather than a near miss.
    const outcome = await asked('try ./resume.pdf', `${process.cwd()}/resume.pdf`);

    expect(outcome.action).toBe('continue');
  });

  it('refuses a path the model produced on its own', async () => {
    // The permission rule that lets this tool through says the path comes from
    // the candidate, and nothing checked. A model holding a résumé full of
    // third-party text is not the place to decide which files get opened.
    const outcome = await asked('what do you think of my resume?', '/etc/passwd');

    expect(outcome.action).toBe('block');
  });

  it('refuses a neighbour of a file they did name', async () => {
    // The first version compared basenames, so naming `resume.pdf` opened any
    // `resume.pdf` anywhere. Resolving at grant time makes the check exact.
    const outcome = await asked('read ./resume.pdf', '/somewhere/else/resume.pdf');

    expect(outcome.action).toBe('block');
  });

  it('refuses when nothing has been granted at all', async () => {
    expect((await asked(undefined, '/etc/passwd')).action).toBe('block');
  });

  it('keeps a grant past the turn it was made in', async () => {
    // A path given at message three is still theirs at message ten. Checking
    // only the current turn meant re-pasting it every time.
    const ctx = context('parse_resume', { path: './resume.pdf' });
    grantPathsIn('here it is: ./resume.pdf', ctx.session);
    // Several turns go by, saying nothing about files.
    grantPathsIn('what do you think?', ctx.session);
    grantPathsIn('and the second bullet?', ctx.session);

    expect((await createPathSourceHook().execute(ctx)).action).toBe('continue');
  });

  it('leaves every other tool alone', async () => {
    expect(createPathSourceHook().watches).toEqual(['parse_resume']);
  });
});

describe('dispatch-trace', () => {
  function traced() {
    const written: string[] = [];
    return { written, hook: createDispatchTraceHook((line) => written.push(line)) };
  }

  it('shows what a specialist was pointed at, while it is being sent', async () => {
    // The briefing is written fresh on every dispatch, so nothing about a
    // result explains what produced it — and everything else about a sub-agent
    // run is already invisible: the audit log stops at the tool boundary and
    // the cache keeps only final answers.
    const { written, hook } = traced();

    await hook.execute(
      context('review_content', {
        entryId: 'experience:0',
        understanding: 'an inference-optimisation internship',
        goal: 'check the technical depth',
      }),
    );

    expect(written[0]).toContain('review_content experience:0');
    expect(written[0]).toContain('understood as: an inference-optimisation internship');
    expect(written[0]).toContain('asked for: check the technical depth');
  });

  it('says so when a dispatch carried no aim at all', async () => {
    // Printing nothing would make an empty briefing and an absent one look
    // identical, which is the distinction a trace exists to show.
    const { written, hook } = traced();

    await hook.execute(context('review_narrative', {}));

    expect(written[0]).toContain('whole document');
    expect(written[0]).toContain('(no briefing)');
  });

  it('names the dispatches it waits for rather than filtering inside itself', async () => {
    expect(traced().hook.watches).toContain('review_content');
    expect(traced().hook.watches).not.toContain('query_knowledge_base');
  });

  it('is off until someone turns it on', async () => {
    // On demand rather than on disk: the audit log summarises to 200 characters
    // precisely so it does not become a second copy of the resume, and this
    // would undo that if it were always on.
    expect(traced().hook.enabled).toBe(false);
  });
});

describe('who reads before who rewrites', () => {
  it('lets the memory writes see the result before it is compressed', async () => {
    // `result-compress` guts nested structure to fit a budget. It ran first, so
    // the memory hooks read a report whose `summary` had been compressed away,
    // threw on it, and were logged and skipped — nothing reached long-term
    // memory and the run printed one stderr line and looked fine.
    const { DEFAULT_HOOK_ORDER } = await import('../../src/hooks/types.js');
    const priority = (name: string) =>
      DEFAULT_HOOK_ORDER.find((h) => h.name === name)?.priority ?? Infinity;

    for (const reader of ['audit-log', 'memory-weak-point', 'memory-profile']) {
      expect(priority(reader), `${reader} must read before the rewrite`).toBeLessThan(
        priority('result-compress'),
      );
    }
  });

  it('runs them in that order for real, not only on paper', async () => {
    const pipeline = new DefaultHookPipeline();
    const order: string[] = [];
    for (const name of ['result-compress', 'memory-profile', 'audit-log']) {
      pipeline.register({
        name,
        timing: 'post-tool',
        priority:
          (await import('../../src/hooks/types.js')).DEFAULT_HOOK_ORDER.find((h) => h.name === name)
            ?.priority ?? 0,
        enabled: true,
        async execute(): Promise<HookOutcome> {
          order.push(name);
          return { action: 'continue' };
        },
      });
    }

    await pipeline.runPost(context('generate_report'));

    expect(order.indexOf('result-compress')).toBe(order.length - 1);
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

describe('the memory writes', () => {
  function stores() {
    const store = new SqliteMemoryStore<CandidateProfile>(':memory:');
    const triggers = new MemoryTriggers(store);
    return { store, weakPoint: createWeakPointHook(triggers), profile: createProfileHook(triggers) };
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
        issues: [{ what: 'no measurable outcome', costWords: 4 }],
        strengths: [],
      },
    ],
    narrative: { redundantPairs: [], weakLead: false, coherence: { score: 40, detail: '' } },
  };

  it('says which tool it is waiting for, rather than checking inside itself', async () => {
    // These were one hook with two `if (toolCall.name === ...)` branches, and
    // one of those names stopped existing. Nothing failed: the hook ran, found
    // no match, and returned, every time. Declared, a stale name is visible.
    const { weakPoint, profile } = stores();

    expect(weakPoint.watches).toEqual(['review_content']);
    expect(profile.watches).toEqual(['generate_report']);
  });

  it('files a weak entry under the dimension it actually scored worst on', async () => {
    // Read off the result rather than off a tool argument: nothing chooses a
    // rule family out here any more — that happens inside a specialist, whose
    // tool calls never reach this pipeline.
    const { store, weakPoint } = stores();
    const ctx = context('review_content');
    ctx.result = { success: true, data: weakEntry };

    await weakPoint.execute(ctx);

    // measurement is the lowest of the three, and that is its shelf.
    expect(store.retrieve({ type: 'weak_point', minConfidence: 0 })[0]?.key).toBe(
      'impact-quantification',
    );
  });

  it('writes nothing for an entry with no bullets to score', async () => {
    const { store, weakPoint } = stores();
    const ctx = context('review_content');
    ctx.result = { success: true, data: { ...weakEntry, bullets: [] } };

    await weakPoint.execute(ctx);

    expect(store.getStats().total).toBe(0);
  });

  it('records the run when the report lands', async () => {
    const { store, profile } = stores();
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

    await profile.execute(ctx);

    expect(store.getProfile().lastOverallScore).toBe(42);
    expect(store.retrieve({ type: 'diagnosis_summary' })).toHaveLength(1);
  });

  it('writes nothing when the tool failed', async () => {
    const { store, profile } = stores();
    const ctx = context('generate_report');
    ctx.result = { success: false, error: { code: 'model_error', message: 'x' } };

    await profile.execute(ctx);

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
