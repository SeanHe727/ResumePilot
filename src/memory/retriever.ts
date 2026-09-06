import type { CandidateProfile } from '../domain.js';
import type {
  MemoryEntry,
  MemoryRetriever,
  MemoryStore,
  RetrievedMemories,
  WeakPointRecord,
} from './types.js';

/**
 * Recall must be more selective than storage.
 *
 * Everything remembered could be injected into every request, and that is the
 * failure mode: the profile block would grow until it crowded out the entry
 * being diagnosed, and the model would weigh a stale finding from three résumé
 * versions ago as heavily as the line in front of it. So recall is capped, and
 * gated on confidence.
 */
export class DefaultMemoryRetriever implements MemoryRetriever<CandidateProfile> {
  constructor(private readonly store: MemoryStore<CandidateProfile>) {}

  /**
   * The `0.6` gate is the restraint rule made mechanical: a memory is created
   * at 0.5 and gains 0.1 each time it recurs, so nothing is recalled until it
   * has been seen twice. One bad bullet is a line to fix; the same weakness
   * across two résumé versions is a fact about the candidate.
   */
  retrieveForDiagnosis(dimension?: string): RetrievedMemories<CandidateProfile> {
    return {
      profile: this.store.getProfile(),
      weakPoints: this.store.retrieve({
        type: 'weak_point',
        ...(dimension === undefined ? {} : { key: dimension }),
        limit: 3,
        minConfidence: 0.6,
      }),
      history: this.store.retrieve({ type: 'diagnosis_summary', limit: 2 }),
    };
  }

  /** Rendered into the Context's profile layer, which budgets 500 tokens. */
  formatForContext(memories: RetrievedMemories<CandidateProfile>): string {
    const { profile, weakPoints } = memories;
    const parts: string[] = [];

    if (profile.targetRole) parts.push(`Target role: ${profile.targetRole}`);
    if (profile.targetLevel) parts.push(`Level: ${profile.targetLevel}`);
    if (profile.techStack?.length) parts.push(`Tech stack: ${profile.techStack.join(', ')}`);
    if (profile.yearsExperience !== undefined) {
      parts.push(`Experience: ${profile.yearsExperience} years`);
    }
    if (profile.weakDimensions?.length) {
      parts.push(`Weak across versions: ${profile.weakDimensions.join(', ')}`);
    }
    if (profile.totalDiagnoses) {
      const trend = formatTrend(profile.scoreHistory);
      parts.push(`Diagnosed ${profile.totalDiagnoses}x, last scored ${profile.lastOverallScore ?? '?'}${trend}`);
    }
    if (weakPoints.length > 0) {
      parts.push(
        `Seen before:\n${weakPoints.map((w) => `- ${describe(w)}`).join('\n')}`,
      );
    }

    return parts.join('\n');
  }
}

/**
 * Only the direction, not the series.
 *
 * The whole history is stored, but a reader needs to know whether the candidate
 * is improving; the numbers themselves would cost more of the profile budget
 * than they are worth.
 */
function formatTrend(history: CandidateProfile['scoreHistory']): string {
  if (!history || history.length < 2) return '';

  const latest = history[history.length - 1]?.score ?? 0;
  const previous = history[history.length - 2]?.score ?? 0;
  const delta = latest - previous;

  if (delta === 0) return ' (flat)';
  return delta > 0 ? ` (up ${delta})` : ` (down ${-delta})`;
}

function describe(entry: MemoryEntry): string {
  const value = entry.value as Partial<WeakPointRecord>;
  return value.description ?? entry.key;
}
