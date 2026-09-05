import { estimateCostUsd } from '../config.js';
import type { TokenUsage } from '../types.js';
import type { TokenBudget } from './types.js';

export interface BudgetCheck {
  ok: boolean;
  reason?: string;
}

const DEFAULTS = {
  maxInputTokens: 2_000_000,
  maxOutputTokens: 400_000,
  maxTotalCostUsd: 2.0,
};

/**
 * Running total for one session, and the gate that stops it running away.
 *
 * The failure this prevents is specific: a retry loop or a sub-agent that will
 * not converge, quietly spending until someone notices the bill. The ceiling is
 * checked before every request, so the worst case is one request over budget.
 */
export class TokenCounter {
  private readonly budget: TokenBudget;

  constructor(budget: Partial<Omit<TokenBudget, 'spent'>> = {}) {
    this.budget = {
      maxInputTokens: budget.maxInputTokens ?? DEFAULTS.maxInputTokens,
      maxOutputTokens: budget.maxOutputTokens ?? DEFAULTS.maxOutputTokens,
      maxTotalCostUsd: budget.maxTotalCostUsd ?? DEFAULTS.maxTotalCostUsd,
      spent: { inputTokens: 0, outputTokens: 0, totalCostUsd: 0, requests: 0 },
    };
  }

  record(usage: TokenUsage, modelId: string): void {
    const { spent } = this.budget;
    spent.inputTokens += usage.inputTokens;
    spent.outputTokens += usage.outputTokens;
    spent.totalCostUsd += estimateCostUsd(modelId, usage);
    spent.requests += 1;
  }

  checkBudget(): BudgetCheck {
    const { spent, maxTotalCostUsd, maxInputTokens, maxOutputTokens } = this.budget;

    if (spent.totalCostUsd >= maxTotalCostUsd) {
      return {
        ok: false,
        reason: `cost ceiling reached: $${spent.totalCostUsd.toFixed(4)} of $${maxTotalCostUsd.toFixed(2)}`,
      };
    }
    if (spent.inputTokens >= maxInputTokens) {
      return { ok: false, reason: `input token ceiling reached: ${spent.inputTokens}` };
    }
    if (spent.outputTokens >= maxOutputTokens) {
      return { ok: false, reason: `output token ceiling reached: ${spent.outputTokens}` };
    }
    return { ok: true };
  }

  /** 0–1. `/status` renders this so spend is visible before it becomes a surprise. */
  fractionUsed(): number {
    const { spent, maxTotalCostUsd } = this.budget;
    return Math.min(1, spent.totalCostUsd / maxTotalCostUsd);
  }

  snapshot(): TokenBudget {
    return { ...this.budget, spent: { ...this.budget.spent } };
  }

  getSummary(): string {
    const { spent, maxTotalCostUsd } = this.budget;
    return (
      `${spent.requests} requests · ` +
      `${spent.inputTokens.toLocaleString()} in / ${spent.outputTokens.toLocaleString()} out · ` +
      `$${spent.totalCostUsd.toFixed(4)} of $${maxTotalCostUsd.toFixed(2)}`
    );
  }
}
