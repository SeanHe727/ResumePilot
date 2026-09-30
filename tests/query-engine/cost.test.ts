import { describe, expect, it } from 'vitest';

import { estimateCostUsd } from '../../src/config.js';

describe('estimateCostUsd', () => {
  it('bills cached input at the cached rate where the model has one', () => {
    // gpt-5.6-luna: $0.20 input, $0.02 cached input, $1.20 output per 1M tokens.
    const full = estimateCostUsd('gpt-5.6-luna', { inputTokens: 1_000_000, outputTokens: 0 });
    const cached = estimateCostUsd('gpt-5.6-luna', { inputTokens: 1_000_000, outputTokens: 0, cacheReadTokens: 400_000 });
    expect(full).toBeCloseTo(0.2);
    expect(cached).toBeCloseTo(0.6 * 0.2 + 0.4 * 0.02);
  });

  it('charges cached tokens as input where the model has no cached rate', () => {
    const a = estimateCostUsd('deepseek-v4-pro', { inputTokens: 1_000_000, outputTokens: 0 });
    const b = estimateCostUsd('deepseek-v4-pro', { inputTokens: 1_000_000, outputTokens: 0, cacheReadTokens: 500_000 });
    expect(b).toBeCloseTo(a);
  });
});
