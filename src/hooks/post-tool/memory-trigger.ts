import type { DiagnosisDimension, DiagnosisReport, EntryDiagnosis } from '../../domain.js';
import { DIAGNOSIS_DIMENSIONS } from '../../domain.js';
import type { MemoryTriggers } from '../../memory/triggers.js';
import type { Hook, HookContext, HookOutcome } from '../types.js';

/** Where the Skill records which dimension the current entry was retrieved against. */
export const CURRENT_DIMENSION = 'currentDimension';

/**
 * The one place long-term memory is written.
 *
 * Keeping it in a hook rather than inside the tools is what makes the
 * whitelist enforceable: a tool cannot decide on its own that something is
 * worth remembering, because tools have no handle on the store.
 */
export function createMemoryTriggerHook(triggers: MemoryTriggers): Hook {
  return {
    name: 'memory-trigger',
    timing: 'post-tool',
    priority: 30,
    enabled: true,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      if (!ctx.result?.success) return { action: 'continue' };

      if (ctx.toolCall.name === 'analyze_entry') {
        const dimension = readDimension(ctx);
        // Without one there is no shelf to file the finding on, and an
        // unscoped weak point is never recalled — so nothing is written.
        if (dimension) triggers.afterEntry(ctx.result.data as EntryDiagnosis, dimension);
      }

      if (ctx.toolCall.name === 'generate_report') {
        triggers.afterDiagnosis(ctx.result.data as DiagnosisReport);
      }

      return { action: 'continue' };
    },
  };
}

/** Metadata is an untyped side channel, so what comes out of it is checked. */
function readDimension(ctx: HookContext): DiagnosisDimension | null {
  const raw = ctx.metadata.get(CURRENT_DIMENSION);
  return typeof raw === 'string' && (DIAGNOSIS_DIMENSIONS as readonly string[]).includes(raw)
    ? (raw as DiagnosisDimension)
    : null;
}
