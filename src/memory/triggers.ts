import type { CandidateProfile, DiagnosisDimension, DiagnosisReport, EntryDiagnosis } from '../domain.js';
import type { DiagnosisSummaryRecord, MemoryStore, WeakPointRecord } from './types.js';

/**
 * When to write, decided in code rather than by the model.
 *
 * The failure mode of a memory layer is writing too much: recall then returns
 * noise, and the profile block spends the context budget on things that were
 * never worth carrying. So writes follow a whitelist — profile changes, one
 * summary per diagnosis, and weaknesses that recur — and everything else (full
 * per-entry diagnoses, tool output, intermediate reasoning, anything the
 * knowledge base can be re-queried for) is deliberately dropped.
 */
export class MemoryTriggers {
  constructor(private readonly store: MemoryStore<CandidateProfile>) {}

  /** Fires once, when a diagnosis completes. */
  afterDiagnosis(report: DiagnosisReport): void {
    const profile = this.store.getProfile();
    const today = new Date().toISOString().slice(0, 10);

    this.store.updateProfile({
      lastOverallScore: report.summary.overallScore,
      totalDiagnoses: (profile.totalDiagnoses ?? 0) + 1,
      // Capped at twenty: the trend is what matters, and an uncapped array
      // would grow the profile layer without bound across sessions.
      scoreHistory: [
        ...(profile.scoreHistory ?? []),
        { date: today, score: report.summary.overallScore },
      ].slice(-20),
    });

    const summary: DiagnosisSummaryRecord = {
      date: today,
      totalEntries: report.summary.totalEntries,
      overallScore: report.summary.overallScore,
      formatScore: report.summary.formatScore,
      substanceAvg: report.summary.substanceAvg,
      wordingAvg: report.summary.wordingAvg,
      topWeaknesses: report.summary.topWeaknesses.slice(0, 3),
    };
    this.store.create('diagnosis_summary', `diag-${today}`, summary);
  }

  /**
   * Fires per entry, and only on a weak one.
   *
   * A first sighting is recorded but stays below the recall threshold; the
   * second raises its confidence past it. So a one-off weakness never reaches
   * a future session, and a habit does.
   */
  afterEntry(diagnosis: EntryDiagnosis, dimension: DiagnosisDimension): void {
    if (diagnosis.overallScore >= WEAK_ENTRY_SCORE) return;

    const description = diagnosis.bullets.flatMap((b) => b.issues)[0];
    if (!description) return;

    const existing = this.store.retrieve({ type: 'weak_point', key: dimension });
    const match = existing.find(
      (e) => (e.value as Partial<WeakPointRecord>).description === description,
    );

    if (match) {
      this.store.update(match.id, match.value, true);
      return;
    }

    const record: WeakPointRecord = { dimension, score: diagnosis.overallScore, description };
    this.store.create('weak_point', dimension, record);

    this.rememberWeakDimension(dimension);
  }

  /** Fires when the user states something about themselves. */
  onUserInfo(info: Partial<CandidateProfile>): void {
    this.store.updateProfile(info);
  }

  private rememberWeakDimension(dimension: DiagnosisDimension): void {
    const profile = this.store.getProfile();
    const dimensions = new Set(profile.weakDimensions ?? []);
    dimensions.add(dimension);

    this.store.updateProfile({ weakDimensions: [...dimensions].slice(-MAX_WEAK_DIMENSIONS) });
  }
}

/** Below this an entry is weak enough to be worth remembering. */
const WEAK_ENTRY_SCORE = 50;

/** Beyond five, "weak across versions" stops narrowing anything down. */
const MAX_WEAK_DIMENSIONS = 5;
