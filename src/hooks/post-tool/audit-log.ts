import type { AuditLogger } from '../../permission/types.js';
import type { Hook, HookContext, HookOutcome } from '../types.js';

/**
 * Records what the tool did, which is not what the permission gate recorded.
 *
 * The gate logged a decision — whether this call was allowed. This logs the
 * outcome: whether it worked. A run where everything was permitted and half of
 * it failed looks identical in the first log and obvious in the second.
 */
export function createAuditLogHook(logger: AuditLogger): Hook {
  return {
    name: 'audit-log',
    timing: 'post-tool',
    priority: 10,
    enabled: true,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      // Runs first among post hooks, so what is recorded is what the tool
      // actually returned rather than what later hooks compressed it into.
      if (ctx.result) logger.logExecution(ctx.session.id, ctx.toolCall, ctx.result);

      return { action: 'continue' };
    },
  };
}
