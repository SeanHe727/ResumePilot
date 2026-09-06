import type { PermissionGate } from '../../permission/types.js';
import type { Hook, HookContext, HookOutcome } from '../types.js';

/**
 * First in the chain, so nothing else spends effort on a call that will not run.
 *
 * Catches its own failures rather than leaning on the pipeline's. The pipeline
 * logs a throwing hook and carries on, which is right for every other hook here
 * and exactly wrong for this one: a gate that opens when it breaks is not a gate.
 */
export function createPermissionCheckHook(gate: PermissionGate): Hook {
  return {
    name: 'permission-check',
    timing: 'pre-tool',
    priority: 10,
    enabled: true,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      try {
        const decision = await gate.checkTool(ctx.toolCall, ctx.session.id);
        // Handed downstream so the audit hook can record why, without asking again.
        ctx.metadata.set('permissionDecision', decision);

        return decision.allowed
          ? { action: 'continue' }
          : { action: 'block', reason: `${decision.rule.name}: ${decision.rule.reason}` };
      } catch (err) {
        return {
          action: 'block',
          reason: `permission check failed: ${err instanceof Error ? err.message : String(err)}`,
        };
      }
    },
  };
}
