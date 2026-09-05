import type { DiagnosisDimension } from '../domain.js';

/**
 * One knowledge base entry, parsed from Markdown that follows the same
 * three-part shape the reference project used: a weak version, a strong
 * version, and an explanation of the distance between them.
 */
export interface KnowledgeEntry {
  /** `${dimension}:${index}`, stable across rebuilds. */
  id: string;
  dimension: DiagnosisDimension;
  dimensionLabel: string;
  /** The question or scenario the entry answers. */
  question: string;
  /** Which public rule this is grounded in, e.g. "Google XYZ Formula". */
  source?: string;
  weakAnswer: string;
  strongAnswer: string;
  gapAnalysis: string;
  keywords: string[];
  /** Float32 vector over `question + strongAnswer`, stored as a BLOB. */
  embedding?: Float32Array;
}

export interface SearchOptions {
  dimension?: DiagnosisDimension;
  limit?: number;
  /**
   * Minimum cosine similarity for the embedding channel. Default 0.25.
   *
   * Measured against `text-embedding-3-small` on this corpus with a labelled
   * query set: deliberately unrelated queries ("what is for dinner tonight")
   * topped out at 0.181, while dimension-scoped correct hits landed between
   * 0.415 and 0.765. The cut-off sits in the gap.
   *
   * Re-measure whenever the embedding model **or the corpus** changes — both
   * move this number. Switching the corpus from Chinese to English shifted the
   * unrelated ceiling from 0.203 to 0.181 on its own.
   */
  threshold?: number;
}

export interface SearchResult extends KnowledgeEntry {
  similarity: number;
  /** `both` scores higher — agreement across channels is evidence. */
  matchType: 'fts' | 'embedding' | 'both';
}

export interface KnowledgeStore {
  insertBatch(entries: KnowledgeEntry[]): void;
  allEntries(dimension?: DiagnosisDimension): KnowledgeEntry[];
  getEntry(id: string): KnowledgeEntry | null;
  getDimensions(): Array<{ id: string; label: string; count: number }>;
  getStats(): { totalEntries: number; dimensions: number; withEmbedding: number };
  sampleEntries(opts: { dimension?: DiagnosisDimension; count: number }): KnowledgeEntry[];
}

/**
 * Two channels, merged. FTS5 catches exact terminology; embeddings catch
 * paraphrase. Either alone leaves a class of misses on the table.
 */
export interface KnowledgeSearch {
  search(query: string, opts?: SearchOptions): Promise<SearchResult[]>;
  searchFts(query: string, opts: { dimension?: DiagnosisDimension; limit: number }): SearchResult[];
  searchEmbedding(
    query: string,
    opts: { dimension?: DiagnosisDimension; limit: number; threshold: number },
  ): Promise<SearchResult[]>;
}
