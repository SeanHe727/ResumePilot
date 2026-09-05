import { describe, expect, it } from 'vitest';

import { loadConfig } from '../../src/config.js';
import { QueryCache } from '../../src/query-engine/cache.js';
import { ModelRouter } from '../../src/query-engine/router.js';
import { TokenCounter } from '../../src/query-engine/token-counter.js';
import type { ParsedResponse, StreamParams } from '../../src/query-engine/types.js';

const baseParams: StreamParams = {
  model: 'claude-opus-5',
  messages: [{ role: 'user', content: 'diagnose this bullet' }],
};

const response: ParsedResponse = {
  type: 'text',
  content: 'Missing a measurable outcome.',
  usage: { inputTokens: 1_200, outputTokens: 300 },
  stopReason: 'end_turn',
};

describe('QueryCache', () => {
  it('returns a stored response and counts the hit', () => {
    const cache = new QueryCache(':memory:');
    const key = cache.generateKey(baseParams);

    expect(cache.get(key)).toBeNull();
    cache.set(key, response, 60);
    expect(cache.get(key)).toEqual(response);
    expect(cache.getStats()).toMatchObject({ entries: 1, hits: 1, misses: 1 });
  });

  it('produces a stable key for identical parameters', () => {
    const cache = new QueryCache(':memory:');

    expect(cache.generateKey(baseParams)).toBe(cache.generateKey({ ...baseParams }));
  });

  it.each([
    ['model', { model: 'claude-sonnet-5' }],
    ['effort', { effort: 'max' as const }],
    ['maxTokens', { maxTokens: 512 }],
    ['systemPrompt', { systemPrompt: 'be harsh' }],
    ['messages', { messages: [{ role: 'user' as const, content: 'different' }] }],
  ])('changes the key when %s changes', (_label, patch) => {
    const cache = new QueryCache(':memory:');

    expect(cache.generateKey({ ...baseParams, ...patch })).not.toBe(cache.generateKey(baseParams));
  });

  it('changes the key when the offered tool set changes', () => {
    const cache = new QueryCache(':memory:');
    const withTool: StreamParams = {
      ...baseParams,
      tools: [{ name: 'query_knowledge_base', description: '', parameters: { type: 'object' } }],
    };

    expect(cache.generateKey(withTool)).not.toBe(cache.generateKey(baseParams));
  });

  it('isolates namespaces so one tenant cannot read another', () => {
    // Redaction collapses different people's text to the same placeholders, so
    // the hash alone is not a safe boundary once this is not single-user.
    const a = new QueryCache(':memory:', 'tenant-a');
    const key = a.generateKey(baseParams);
    a.set(key, response, 60);

    const b = new QueryCache(':memory:', 'tenant-b');
    expect(b.get(b.generateKey(baseParams))).toBeNull();
  });

  it('does not serve an expired entry', () => {
    const cache = new QueryCache(':memory:');
    const key = cache.generateKey(baseParams);

    cache.set(key, response, -1);
    expect(cache.get(key)).toBeNull();
    expect(cache.evictExpired()).toBe(1);
  });
});

describe('ModelRouter', () => {
  const config = loadConfig({ RESUMEPILOT_MAX_COST_USD: '2' } as NodeJS.ProcessEnv);
  const router = new ModelRouter(config);

  it('sends judgement-heavy work to the primary model', () => {
    expect(router.resolve('diagnose_bullet').model).toBe(config.models.primary);
    expect(router.resolve('rewrite_bullet').model).toBe(config.models.primary);
  });

  it('sends mechanical restructuring to the cheap model', () => {
    expect(router.resolve('split_bullets').model).toBe(config.models.cheap);
    expect(router.resolve('summarize').model).toBe(config.models.cheap);
  });

  it('spends the most effort on rewriting, where fabrication is the risk', () => {
    expect(router.resolve('rewrite_bullet').effort).toBe('xhigh');
    expect(router.resolve('split_bullets').effort).toBe('low');
  });

  it('resolves the provider alongside the model', () => {
    expect(router.resolve('split_bullets').provider).toBe('deepseek');
    expect(router.resolve('diagnose_bullet').provider).toBe('claude');
  });

  it('falls back to the primary model for an unrouted task', () => {
    const route = router.resolve();

    expect(route.model).toBe(config.models.primary);
    expect(route.reason).toMatch(/fell back/);
  });

  it('lets the caller override the model outright', () => {
    expect(router.resolve('split_bullets', 'claude-opus-5').model).toBe('claude-opus-5');
  });

  it('accepts rule overrides', () => {
    const custom = new ModelRouter(config, [
      { task: 'split_bullets', model: 'claude-haiku-4-5', reason: 'testing' },
    ]);

    expect(custom.resolve('split_bullets').model).toBe('claude-haiku-4-5');
  });
});

describe('TokenCounter', () => {
  it('accumulates spend across requests', () => {
    const counter = new TokenCounter({ maxTotalCostUsd: 1 });

    counter.record({ inputTokens: 1_000_000, outputTokens: 0 }, 'claude-opus-5');

    // 1M input tokens on Opus 5 is $5.00 — well past a $1 ceiling.
    expect(counter.snapshot().spent.totalCostUsd).toBeCloseTo(5, 5);
    expect(counter.snapshot().spent.requests).toBe(1);
  });

  it('prices the cheap model far below the primary one', () => {
    const opus = new TokenCounter();
    const deepseek = new TokenCounter();
    const usage = { inputTokens: 100_000, outputTokens: 20_000 };

    opus.record(usage, 'claude-opus-5');
    deepseek.record(usage, 'deepseek-v4-flash');

    expect(deepseek.snapshot().spent.totalCostUsd).toBeLessThan(
      opus.snapshot().spent.totalCostUsd / 5,
    );
  });

  it('stays open until the ceiling is actually reached', () => {
    const counter = new TokenCounter({ maxTotalCostUsd: 1 });

    counter.record({ inputTokens: 100_000, outputTokens: 0 }, 'claude-opus-5'); // $0.50
    expect(counter.checkBudget().ok).toBe(true);
    expect(counter.fractionUsed()).toBeCloseTo(0.5, 5);
  });

  it('closes once the cost ceiling is crossed', () => {
    const counter = new TokenCounter({ maxTotalCostUsd: 0.1 });

    counter.record({ inputTokens: 100_000, outputTokens: 0 }, 'claude-opus-5');
    const check = counter.checkBudget();

    expect(check.ok).toBe(false);
    expect(check.reason).toMatch(/cost ceiling/);
  });

  it('closes on the token ceiling independently of cost', () => {
    const counter = new TokenCounter({ maxInputTokens: 100, maxTotalCostUsd: 999 });

    counter.record({ inputTokens: 200, outputTokens: 0 }, 'deepseek-v4-flash');

    expect(counter.checkBudget()).toMatchObject({ ok: false });
  });
});
