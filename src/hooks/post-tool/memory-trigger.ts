import type { DiagnosisDimension, DiagnosisReport, EntryDiagnosis } from '../../domain.js';
import type { MemoryTriggers } from '../../memory/triggers.js';
import type { Hook, HookContext, HookOutcome } from '../types.js';

/**
 * The two places long-term memory is written, and each says what it waits for.
 *
 * Written in a hook rather than inside the tools because that is what makes the
 * whitelist enforceable: a tool cannot decide on its own that something is worth
 * remembering, since tools hold no handle on the store.
 *
 * They were one hook with two `if (toolCall.name === ...)` branches inside it,
 * and one of those names stopped existing. Nothing failed — the hook ran, found
 * no match, and returned, every time, for as long as it took someone to ask why
 * the profile layer had stopped growing. What a hook waits for is declared now.
 */
export function createWeakPointHook(triggers: MemoryTriggers): Hook {
  return {
    name: 'memory-weak-point',
    timing: 'post-tool',
    priority: 20,
    watches: ['review_content'],
    enabled: true,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      if (!ctx.result?.success) return { action: 'continue' };

      const diagnosis = ctx.result.data as EntryDiagnosis | null;
      const dimension = diagnosis ? weakestDimension(diagnosis) : null;
      // Without one there is no shelf to file the finding on, and an unscoped
      // weak point is never recalled — so nothing is written.
      if (diagnosis && dimension) triggers.afterEntry(diagnosis, dimension);

      return { action: 'continue' };
    },
  };
}

export function createProfileHook(triggers: MemoryTriggers): Hook {
  return {
    name: 'memory-profile',
    timing: 'post-tool',
    priority: 21,
    watches: ['generate_report'],
    enabled: true,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      if (ctx.result?.success) triggers.afterDiagnosis(ctx.result.data as DiagnosisReport);
      return { action: 'continue' };
    },
  };
}

/**
 * The dimension an entry scored worst on, which is what a weak point is about.
 *
 * It used to be read off a tool argument, because the model had just chosen
 * which rule family to consult. Nothing chooses one here any more — the choice
 * happens inside a specialist, whose tool calls never reach this pipeline — so
 * it comes from the scores that are already in the result.
 */
function weakestDimension(diagnosis: EntryDiagnosis): DiagnosisDimension | null {
  if (!diagnosis.bullets || diagnosis.bullets.length === 0) return null;

  const totals = { impact: 0, measurement: 0, method: 0 };
  for (const bullet of diagnosis.bullets) {
    totals.impact += bullet.dimensions.impact.score;
    totals.measurement += bullet.dimensions.measurement.score;
    totals.method += bullet.dimensions.method.score;
  }

  const worst = (Object.entries(totals).sort(([, a], [, b]) => a - b)[0]?.[0] ??
    'impact') as keyof typeof totals;
  const shelves = {
    impact: 'xyz-structure',
    measurement: 'impact-quantification',
    method: 'tech-specificity',
  } as const;
  return shelves[worst];
}
