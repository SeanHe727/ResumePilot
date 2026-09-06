import type { QueryEngine } from '../../query-engine/types.js';
import type { Command, CommandResult } from '../types.js';

export function createBudgetCommand(engine: QueryEngine): Command {
  return {
    name: 'budget',
    aliases: [],
    description: 'Show what this session has spent and what is left',
    args: [],
    examples: ['/budget'],

    async execute(_args, session): Promise<CommandResult> {
      const check = engine.checkBudget();

      return {
        output:
          `${engine.getUsageSummary()}\n` +
          `  limit $${session.config.maxCostUsd.toFixed(2)}  ` +
          (check.ok ? 'within budget' : `over: ${check.reason ?? 'limit reached'}`),
      };
    },
  };
}
