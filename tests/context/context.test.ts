import { describe, expect, it } from 'vitest';

import type { Message } from '../../src/types.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import {
  Compressor,
  DEFAULT_CONTEXT_CONFIG,
  LayeredContextManager,
  countMessageTokens,
  estimateTokens,
} from '../../src/context/index.js';

function fakeEngine(reply = '- entry 1: 20/100, no measurement') {
  const seen: QueryParams[] = [];
  const engine: QueryEngine = {
    async query(params: QueryParams): Promise<ParsedResponse> {
      seen.push(params);
      return {
        type: 'text',
        content: reply,
        usage: { inputTokens: 0, outputTokens: 0 },
        stopReason: 'end_turn',
      };
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
  return { engine, seen };
}

const said = (content: string): Message => ({ role: 'assistant', content });

describe('token estimation', () => {
  it('counts CJK far heavier than Latin', () => {
    // One ratio for both is wrong by ~6x on a Chinese resume, which is enough
    // to make a window that fits look overfull, or the reverse.
    const cjk = estimateTokens('简'.repeat(100));
    const latin = estimateTokens('a'.repeat(100));

    expect(cjk).toBe(150);
    expect(latin).toBe(25);
  });

  it('splits a mixed string rather than picking one rate', () => {
    expect(estimateTokens('简历' + 'a'.repeat(8))).toBe(5);
  });

  it('sums a conversation', () => {
    expect(countMessageTokens([said('a'.repeat(40)), said('a'.repeat(40))])).toBe(20);
  });
});

describe('Compressor', () => {
  const compressor = new Compressor();

  it('marks the gap when it truncates', () => {
    const out = compressor.truncate('a'.repeat(4000), 100);

    expect(out).toMatch(/\[\.\.\. truncated\]$/);
    expect(estimateTokens(out)).toBeLessThanOrEqual(100);
  });

  it('returns short text untouched', () => {
    expect(compressor.truncate('short', 100)).toBe('short');
  });

  it('keeps a tool result parseable instead of cutting mid-structure', () => {
    // Truncating the JSON text would leave the model something it cannot read.
    const output = JSON.stringify({
      bullets: Array.from({ length: 40 }, (_, i) => ({ id: `b${i}`, detail: 'x'.repeat(400) })),
    });
    const compressed = compressor.compressToolOutput(output, 200);
    const parsed = JSON.parse(compressed) as { bullets: unknown[] };

    expect(parsed.bullets).toHaveLength(4);
    expect(parsed.bullets[3]).toBe('... 37 more');
    expect((parsed.bullets[0] as { detail: string }).detail).toMatch(/\.\.\.$/);
    expect((parsed.bullets[0] as { id: string }).id).toBe('b0');
  });

  it('falls back to truncation when the output is not JSON', () => {
    const out = compressor.compressToolOutput('plain text '.repeat(400), 50);

    expect(out).toMatch(/\[\.\.\. truncated\]$/);
  });

  it('leaves a result that already fits alone', () => {
    const output = JSON.stringify({ ok: true });

    expect(compressor.compressToolOutput(output, 500)).toBe(output);
  });
});

describe('layer budgets', () => {
  it('truncates each layer to its own allowance', () => {
    const cm = new LayeredContextManager({
      systemPromptBudget: 20,
      profileBudget: 10,
      taskBudget: 30,
    });
    cm.setSystemPrompt('s'.repeat(4000));
    cm.setProfile('p'.repeat(4000));
    cm.setTaskContext('t'.repeat(4000));

    const { layers } = cm.build();
    expect(layers.system).toBeLessThanOrEqual(20);
    expect(layers.profile).toBeLessThanOrEqual(10);
    expect(layers.task).toBeLessThanOrEqual(30);
  });

  it('puts the task block in the messages, not the cached system prefix', () => {
    // It changes every entry, so it must sit after the cache breakpoint.
    const cm = new LayeredContextManager();
    cm.setSystemPrompt('You diagnose resumes.');
    cm.setTaskContext('Entry: ByteDance backend intern');

    const window = cm.build();
    expect(window.systemPrompt).not.toContain('ByteDance');
    expect(window.messages[0]?.role).toBe('user');
    expect(window.messages[0]?.content).toContain('ByteDance');
    expect(window.messages[1]?.role).toBe('assistant');
  });

  it('keeps the profile and history in the system block', () => {
    const cm = new LayeredContextManager();
    cm.setSystemPrompt('You diagnose resumes.');
    cm.setProfile('New grad, backend.');

    expect(cm.build().systemPrompt).toContain('New grad, backend.');
  });
});

describe('sliding window', () => {
  it('drops the oldest turns once recent exceeds its budget', () => {
    const cm = new LayeredContextManager({ recentBudget: 100 });
    for (let i = 0; i < 40; i++) cm.addMessage(said(`turn ${i} ${'x'.repeat(60)}`));

    const kept = cm.getRecentMessages();
    expect(countMessageTokens(kept)).toBeLessThanOrEqual(100);
    expect(kept.at(-1)?.content).toContain('turn 39');
    expect(kept.some((m) => m.content.includes('turn 0'))).toBe(false);
  });

  it('never evicts the only message, however large', () => {
    const cm = new LayeredContextManager({ recentBudget: 10 });
    cm.addMessage(said('x'.repeat(4000)));

    expect(cm.getRecentMessages()).toHaveLength(1);
  });

  it('folds every evicted turn into the history layer as it goes', () => {
    // Regression: eviction used to only park messages in an array, so the
    // history layer stayed at zero, the layer budgets capped the total below
    // the compaction threshold, and levels 2 and 3 were unreachable code.
    const cm = new LayeredContextManager({ recentBudget: 100 });
    for (let i = 0; i < 40; i++) cm.addMessage(said(`turn ${i} ${'x'.repeat(60)}`));

    expect(cm.build().layers.history).toBeGreaterThan(0);
  });

  it('compresses a tool result on the way in rather than at compaction time', () => {
    const cm = new LayeredContextManager({ toolResultBudget: 50, recentBudget: 5000 });
    cm.addToolResult('c1', JSON.stringify({ items: Array.from({ length: 50 }, () => 'x'.repeat(300)) }));

    const [message] = cm.getRecentMessages();
    expect(message?.role).toBe('tool');
    expect(message?.toolCallId).toBe('c1');
    expect(estimateTokens(message?.content ?? '')).toBeLessThanOrEqual(50);
  });
});

describe('autoCompact', () => {
  const tight = {
    maxTotalTokens: 1_000,
    outputReserve: 200,
    systemPromptBudget: 50,
    profileBudget: 20,
    taskBudget: 100,
    historyBudget: 100,
    recentBudget: 5_000,
    toolResultBudget: 400,
  };

  it('does nothing while the window still has room', async () => {
    const cm = new LayeredContextManager(tight);
    cm.setSystemPrompt('You diagnose resumes.');
    const { engine, seen } = fakeEngine();

    expect(await cm.autoCompact(engine)).toBeNull();
    expect(seen).toHaveLength(0);
  });

  it('stops at level 1 when re-compressing tool output is enough', async () => {
    const cm = new LayeredContextManager(tight);
    cm.setSystemPrompt('You diagnose resumes.');
    // Added raw, as an already-resident result would be after a config change.
    cm.addMessage({
      role: 'tool',
      toolCallId: 'c1',
      content: JSON.stringify({
        bullets: Array.from({ length: 60 }, (_, i) => ({ id: `b${i}`, detail: 'x'.repeat(60) })),
      }),
    });
    const { engine, seen } = fakeEngine();

    expect(cm.needsCompaction()).toBe(true);
    expect(await cm.autoCompact(engine)).toBe(1);
    expect(cm.needsCompaction()).toBe(false);
    // Level 1 is free; it must not have cost a model call.
    expect(seen).toHaveLength(0);
  });

  it('escalates to level 2, summarising the tail and keeping the last three verbatim', async () => {
    const cm = new LayeredContextManager(tight);
    cm.setSystemPrompt('You diagnose resumes.');
    for (let i = 0; i < 30; i++) {
      cm.addMessage(said(`entry ${i} scored ${20 + i}, no measurement. ${'x'.repeat(60)}`));
    }
    const { engine, seen } = fakeEngine();

    expect(cm.needsCompaction()).toBe(true);
    expect(await cm.autoCompact(engine)).toBe(2);
    expect(cm.needsCompaction()).toBe(false);
    expect(cm.getRecentMessages()).toHaveLength(3);
    expect(cm.getRecentMessages().at(-1)?.content).toContain('entry 29');
    expect(seen).toHaveLength(1);
    expect(seen[0]?.task).toBe('summarize');
    expect(cm.build().systemPrompt).toContain('no measurement');
  });

  it('escalates to level 3 and compresses the task block last', async () => {
    // Last because it costs a call and risks detail about the entry under
    // diagnosis — the one thing the turn is actually about.
    // The task block alone overruns the window, so levels 1 and 2 cannot
    // reclaim enough however much they compress.
    const cm = new LayeredContextManager({ ...tight, taskBudget: 800 });
    cm.setSystemPrompt('You diagnose resumes.');
    cm.setTaskContext('Entry: ByteDance. ' + 'Responsible for the order query service. '.repeat(100));
    for (let i = 0; i < 6; i++) cm.addMessage(said(`entry ${i} scored ${20 + i}`));
    const before = cm.build().layers.task;
    const { engine } = fakeEngine('ByteDance entry, order query service.');

    expect(await cm.autoCompact(engine)).toBe(3);
    expect(cm.build().layers.task).toBeLessThan(before);
  });

  it('does not spend a call summarising a task block that was never set', async () => {
    // Regression: the ladder is walked unconditionally, so with no task block
    // level 3 summarised an empty string and wrote the reply back as the task,
    // growing the window on every call instead of shrinking it.
    const cm = new LayeredContextManager({
      ...tight,
      systemPromptBudget: 900,
      recentBudget: 50,
    });
    cm.setSystemPrompt('You diagnose resumes. '.repeat(200));
    cm.addMessage(said('entry 1 scored 34'));
    const { engine, seen } = fakeEngine('a summary of nothing at all');

    const before = cm.build().tokenCount;
    expect(await cm.autoCompact(engine)).toBe(3);

    expect(cm.build().layers.task).toBe(0);
    expect(cm.build().tokenCount).toBeLessThanOrEqual(before);
    expect(seen).toHaveLength(0);
  });

  it('rebuilds one running summary rather than one per round', async () => {
    const cm = new LayeredContextManager(tight);
    cm.setSystemPrompt('You diagnose resumes.');
    const { engine } = fakeEngine();

    for (let round = 0; round < 3; round++) {
      for (let i = 0; i < 30; i++) {
        cm.addMessage(said(`round ${round} entry ${i}, no measurement. ${'x'.repeat(60)}`));
      }
      await cm.autoCompact(engine);
    }

    expect(cm.build().tokenCount).toBeLessThan(tight.maxTotalTokens);
  });

  it('stops escalating after maxCompactions, without spending more calls', async () => {
    // Past a couple of rounds the ladder stops paying: level 3 would summarise
    // its own summary, losing entry detail on every pass for another call.
    const cm = new LayeredContextManager({ ...tight, maxCompactions: 2 });
    cm.setSystemPrompt('You diagnose resumes.');
    cm.setTaskContext('Entry: ByteDance. ' + 'Responsible for the order query service. '.repeat(20));
    const { engine, seen } = fakeEngine();
    const levels: Array<number | null> = [];

    for (let round = 0; round < 5; round++) {
      for (let i = 0; i < 30; i++) {
        cm.addMessage(said(`round ${round} entry ${i}, no measurement. ${'x'.repeat(60)}`));
      }
      levels.push(await cm.autoCompact(engine));
    }

    expect(levels.filter((l) => l !== null)).toHaveLength(2);
    expect(levels.slice(2)).toEqual([null, null, null]);
    const callsAtLimit = seen.length;
    await cm.autoCompact(engine);
    expect(seen).toHaveLength(callsAtLimit);
  });

  it('counts the compactions in the stats line, once there are any', async () => {
    const cm = new LayeredContextManager(tight);
    cm.setSystemPrompt('You diagnose resumes.');
    expect(cm.getStats()).not.toContain('compacted');

    for (let i = 0; i < 30; i++) {
      cm.addMessage(said(`entry ${i} scored 20, no measurement. ${'x'.repeat(60)}`));
    }
    await cm.autoCompact(fakeEngine().engine);

    expect(cm.getStats()).toContain('compacted 1x');
  });
});

describe('bounds without compaction', () => {
  it('holds the window at the layer caps once compaction is out of rounds', async () => {
    // This is what makes the round limit safe to impose: every layer is capped
    // by something other than `autoCompact` — truncate on the first three, the
    // sliding window on recent, keepNewestLines on history. Giving up on
    // compaction stops the window shrinking; it cannot make it grow.
    const cm = new LayeredContextManager({
      maxTotalTokens: 1_000,
      outputReserve: 100,
      systemPromptBudget: 50,
      profileBudget: 20,
      taskBudget: 100,
      historyBudget: 100,
      recentBudget: 200,
      toolResultBudget: 100,
      maxCompactions: 0,
    });
    cm.setSystemPrompt('You diagnose resumes. '.repeat(50));
    cm.setProfile('New grad, backend. '.repeat(50));
    cm.setTaskContext('Entry: ByteDance. '.repeat(50));

    for (let i = 0; i < 100; i++) cm.addMessage(said(`entry ${i} scored 20. ${'x'.repeat(80)}`));
    const settled = cm.build().tokenCount;

    for (let i = 100; i < 600; i++) cm.addMessage(said(`entry ${i} scored 20. ${'x'.repeat(80)}`));
    const after = cm.build().tokenCount;

    expect(await cm.autoCompact(fakeEngine().engine)).toBeNull();
    expect(after).toBeLessThanOrEqual(settled);
    // 470 of layer budget plus the block headers and the synthetic ack. Not a
    // fixed number: history and recent keep whole messages, so both settle just
    // under their caps rather than exactly on them.
    expect(after).toBeLessThan(550);
  });
});

describe('getStats', () => {
  it('reports the total and every layer, for the CLI footer', () => {
    const cm = new LayeredContextManager();
    cm.setSystemPrompt('You diagnose resumes.');

    expect(cm.getStats()).toMatch(
      /^context \d+\/16000 \(\d+%\) · system \d+ profile \d+ task \d+ history \d+ recent \d+$/,
    );
  });
});

describe('defaults', () => {
  it('leaves compaction reachable when every layer is full', () => {
    // If the budgets summed below the threshold, no combination of full layers
    // could ever trip `needsCompaction`, and levels 2 and 3 would be dead code.
    // That is exactly what happened while the history layer had no way to grow.
    const c = DEFAULT_CONTEXT_CONFIG;
    const layers =
      c.systemPromptBudget + c.profileBudget + c.taskBudget + c.historyBudget + c.recentBudget;

    expect(layers).toBeGreaterThan((c.maxTotalTokens - c.outputReserve) * 0.9);
  });

  it('caps the history layer, which is the only one that grows on its own', () => {
    const cm = new LayeredContextManager({ historyBudget: 40, recentBudget: 60 });
    for (let i = 0; i < 200; i++) cm.addMessage(said(`entry ${i} scored 20, no measurement`));

    expect(cm.build().layers.history).toBeLessThanOrEqual(40);
    // The newest lines are the ones kept.
    expect(cm.build().systemPrompt).toContain('entry 19');
    expect(cm.build().systemPrompt).not.toContain('entry 0 ');
  });
});
