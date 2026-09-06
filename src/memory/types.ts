export type MemoryType =
  /** Who the user is and what they are aiming at. */
  | 'user_profile'
  /** One entry per completed diagnosis: score and headline weaknesses only. */
  | 'diagnosis_summary'
  /** A weakness seen often enough to be worth pre-empting. */
  | 'weak_point'
  /** An explicit instruction, e.g. "never rewrite my project names". */
  | 'preference';

export interface MemoryEntry<T = unknown> {
  id: string;
  type: MemoryType;
  key: string;
  value: T;
  /** Raised each time the observation repeats; recall filters on it. */
  confidence: number;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  accessCount: number;
}

/**
 * The `value` of a `weak_point` memory.
 *
 * Keyed by dimension so recall can be scoped the same way knowledge retrieval
 * is. `description` holds the finding verbatim, which is what makes a repeat
 * sighting recognisable.
 *
 * No label for the entry it came from: that was stored for a while and read by
 * nothing, which is the only reason it is gone.
 */
export interface WeakPointRecord {
  dimension: string;
  score: number;
  description: string;
}

/**
 * The `value` of a `diagnosis_summary` memory: the data points worth carrying
 * to the next session, never the report itself.
 */
export interface DiagnosisSummaryRecord {
  date: string;
  totalEntries: number;
  overallScore: number;
  formatScore: number;
  substanceAvg: number;
  wordingAvg: number;
  topWeaknesses: string[];
}

export interface MemoryStore<TProfile = Record<string, unknown>> {
  create<T>(type: MemoryType, key: string, value: T): string;
  retrieve(opts?: {
    type?: MemoryType;
    key?: string;
    limit?: number;
    minConfidence?: number;
  }): MemoryEntry[];
  update<T>(id: string, value: T, boostConfidence?: boolean): void;
  delete(id: string): void;
  deleteAll(type?: MemoryType): void;
  getProfile(): TProfile;
  updateProfile(patch: Partial<TProfile>): void;
  evictExpired(): number;
  getStats(): { total: number; byType: Record<string, number> };
}

export interface RetrievedMemories<TProfile = Record<string, unknown>> {
  profile: TProfile;
  weakPoints: MemoryEntry[];
  history: MemoryEntry[];
}

export interface MemoryRetriever<TProfile = Record<string, unknown>> {
  /** `dimension` is an opaque tag here; the domain decides what tags exist. */
  retrieveForDiagnosis(dimension?: string): RetrievedMemories<TProfile>;
  /** Renders recalled memory into the Context's profile block. */
  formatForContext(memories: RetrievedMemories<TProfile>): string;
}
