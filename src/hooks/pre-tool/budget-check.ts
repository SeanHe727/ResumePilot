import type { QueryEngine } from '../../query-engine/types.js';
import type { Hook, HookContext, HookOutcome } from '../types.js';

/**
 * Stops a run before it spends past what the user agreed to.
 *
 * Checked per tool call rather than per session, because a diagnosis fans out
 * over every entry and the overrun would otherwise only be discovered once it
 * was already paid for.
 */
export function createBudgetCheckHook(engine: QueryEngine): Hook {
  return {
    name: 'budget-check',
    timing: 'pre-tool',
    priority: 30,
    enabled: true,

    async execute(_ctx: HookContext): Promise<HookOutcome> {
      const budget = engine.checkBudget();

      return budget.ok
        ? { action: 'continue' }
        : {
            action: 'block',
            reason: `budget exhausted: ${budget.reason ?? 'limit reached'} — raise maxCostUsd to continue`,
          };
    },
  };
}
