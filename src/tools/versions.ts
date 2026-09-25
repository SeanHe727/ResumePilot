import { createHash } from 'node:crypto';

import type { ResumeDocument, ResumeEntry, ResumeSessionState } from '../domain.js';

/**
 * Which text a reading was of, and whether that is still the text.
 *
 * A reading used to be filed under its entry id alone, so a review of a draft
 * the candidate never kept replaced the review of the line on the page, and a
 * review of the old line stood in for the new one after a revision. Both then
 * reached a report as findings about the current page. Measured on the second
 * item-14 run: the report counted four of four entries read when one had been
 * re-read and three reused, and nothing in the session could say which.
 *
 * The text is the version. A reading carries a hash of the bullets it read, and
 * it is current exactly when that hash matches the entry as it now stands —
 * derived by comparison rather than kept in step by bookkeeping, so a path that
 * forgets to update a counter cannot make a stale reading look fresh.
 */
export function entryTextHash(entry: Pick<ResumeEntry, 'bullets'>): string {
  const hash = createHash('sha256');
  for (const bullet of entry.bullets) hash.update(`${bullet.id}\u0000${bullet.text}\u0000`);
  return hash.digest('hex').slice(0, 16);
}

/** What a stored reading carries about the text it read. */
export interface Stamped {
  entryId: string;
  /** Hash of the bullets as read. Absent on readings stored before this existed. */
  readHash?: string;
  /** When the reading was filed. */
  readAt?: string;
}

/**
 * Filed by entry and by text, so a reading of one version never replaces a
 * reading of another. A draft reviewed and never kept sits beside the reading
 * of the line on the page instead of overwriting it; if the draft is kept, its
 * reading becomes the current one without being run again.
 */
export function fileReading<T extends Stamped>(existing: T[] | undefined, next: T): T[] {
  const kept = (existing ?? []).filter(
    (d) => !(d.entryId === next.entryId && d.readHash === next.readHash),
  );
  return [...kept, next];
}

export interface Sorted<T> {
  /** One per entry, read on the text the entry has now. */
  current: T[];
  /** Entries whose every reading is of text they no longer have. */
  stale: string[];
}

/**
 * The readings a report may use, and the entries it has to say it cannot.
 *
 * A reading without a hash predates this and is taken as current, because the
 * alternative — calling every existing session stale — would be a claim nothing
 * measured.
 */
export function sortReadings<T extends Stamped>(readings: readonly T[], resume: ResumeDocument): Sorted<T> {
  const entries = new Map(resume.sections.flatMap((s) => s.entries).map((e) => [e.id, e] as const));
  const current = new Map<string, T>();
  const seen = new Set<string>();

  for (const reading of readings) {
    const entry = entries.get(reading.entryId);
    if (!entry) continue;
    seen.add(reading.entryId);
    if (reading.readHash !== undefined && reading.readHash !== entryTextHash(entry)) continue;
    // Later filings win: `fileReading` appends, so the last one is the newest.
    current.set(reading.entryId, reading);
  }

  return {
    current: [...current.values()],
    stale: [...seen].filter((id) => !current.has(id)),
  };
}

/** The readings of each kind the report may use, off the session. */
export function currentReadings(state: ResumeSessionState): {
  content: Sorted<NonNullable<ResumeSessionState['entryDiagnoses']>[number]>;
  wording: Sorted<NonNullable<ResumeSessionState['wordingDiagnoses']>[number]>;
} {
  const resume = state.resume;
  if (!resume) return { content: { current: [], stale: [] }, wording: { current: [], stale: [] } };
  return {
    content: sortReadings(state.entryDiagnoses ?? [], resume),
    wording: sortReadings(state.wordingDiagnoses ?? [], resume),
  };
}

/**
 * What has changed since a report was written: the lines revised and the facts
 * given after it. Empty when the report is still about the page as it stands.
 */
export function changesSince(
  report: { documentVersion?: number; factsKnown?: number },
  state: ResumeSessionState,
): { revised: string[]; facts: string[] } {
  const version = report.documentVersion ?? 0;
  const revised = [
    ...new Set((state.revisions ?? []).filter((r) => r.version > version).map((r) => r.bulletId)),
  ];
  const facts = (state.suppliedFacts ?? [])
    .slice(report.factsKnown ?? 0)
    .map((f) => f.bulletId ?? f.entryId ?? 'the résumé as a whole');
  return { revised, facts };
}
