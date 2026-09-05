import type { DiagnosisDimension } from '../domain.js';
import { cosineSimilarity, type EmbeddingProvider } from './embed.js';
import { rowToEntry, type SqliteKnowledgeStore } from './store.js';
import type { KnowledgeSearch, SearchOptions, SearchResult } from './types.js';

/**
 * Trigram FTS needs at least three characters to match on, and a query built
 * from too many fragments matches everything.
 */
const MIN_TERM_LENGTH = 3;
const MAX_TERMS = 12;

/**
 * Words too common to discriminate between entries.
 *
 * Under a trigram tokenizer these are worse than useless: "the" matches as a
 * substring of nearly every entry in an English corpus, so a query OR-ing it
 * together with real terms returns everything ranked by noise. The problem does
 * not exist in Chinese, which is why it only surfaced when the corpus switched
 * languages — a reminder that tokenisation is a property of the corpus, not of
 * the code.
 */
const STOPWORDS = new Set([
  'the', 'and', 'for', 'with', 'that', 'this', 'from', 'was', 'are', 'has', 'have', 'had',
  'not', 'but', 'you', 'your', 'its', 'our', 'their', 'them', 'they', 'she', 'his', 'her',
  'all', 'any', 'can', 'will', 'would', 'should', 'could', 'more', 'most', 'than', 'then',
  'when', 'what', 'which', 'who', 'how', 'why', 'into', 'onto', 'over', 'under', 'about',
  'been', 'being', 'were', 'does', 'did', 'done', 'each', 'some', 'such', 'only', 'also',
  'one', 'two', 'out', 'off', 'per', 'via', 'use', 'used', 'using', 'get', 'got',
]);

/**
 * The literal-match channel.
 *
 * It answers "does this text contain these exact words" — which is what catches
 * a bullet opening with "Responsible for", or a query naming `format-ats`.
 * Paraphrase is the embedding channel's job; asking one mechanism to do both is
 * how retrieval ends up mediocre at each.
 */
export function searchFts(
  store: SqliteKnowledgeStore,
  query: string,
  opts: { dimension?: DiagnosisDimension; limit: number },
): SearchResult[] {
  const terms = tokenize(query);
  if (terms.length === 0) return [];

  // FTS5 treats double quotes as phrase delimiters, so each term is quoted to
  // stop punctuation in a resume bullet being read as query syntax.
  const match = terms.map((t) => `"${t.replace(/"/g, '""')}"`).join(' OR ');

  const params: unknown[] = [match];
  let sql = `
    SELECT k.*, bm25(knowledge_fts) AS score
    FROM knowledge_fts
    JOIN knowledge k ON k.id = knowledge_fts.id
    WHERE knowledge_fts MATCH ?
  `;
  if (opts.dimension) {
    sql += ' AND k.dimension = ?';
    params.push(opts.dimension);
  }
  sql += ' ORDER BY score LIMIT ?';
  params.push(opts.limit);

  const rows = store.db.prepare(sql).all(...params) as Array<{ score: number }>;

  return rows.map((row) => ({
    ...rowToEntry(row),
    similarity: normaliseBm25(row.score),
    matchType: 'fts' as const,
  }));
}

/**
 * Splits a query into terms trigram FTS can use.
 *
 * CJK is handled by taking overlapping character windows: Chinese has no spaces,
 * so a whole clause would otherwise arrive as a single unmatchable term.
 */
export function tokenize(text: string): string[] {
  const cleaned = text.replace(/[，。？！、；：""''（）《》【】,.?!;:()[\]{}"']/g, ' ');
  const terms = new Set<string>();

  for (const chunk of cleaned.split(/\s+/)) {
    if (!chunk) continue;

    if (/^[一-鿿]+$/.test(chunk)) {
      // A run of Chinese: emit sliding 3-character windows, plus the run itself
      // when it is already short enough to be a term on its own.
      if (chunk.length <= 4) terms.add(chunk);
      for (let i = 0; i + 3 <= chunk.length; i++) terms.add(chunk.slice(i, i + 3));
    } else if (chunk.length >= MIN_TERM_LENGTH) {
      const lower = chunk.toLowerCase();
      if (!STOPWORDS.has(lower)) terms.add(lower);
    }
  }

  return [...terms].slice(0, MAX_TERMS);
}

/**
 * BM25 in SQLite is a negative score where more negative is better. Mapped onto
 * 0–1 so it can be compared with cosine similarity when the channels merge.
 */
export function normaliseBm25(score: number): number {
  return 1 - 1 / (1 + Math.max(0, -score));
}

/**
 * The semantic channel.
 *
 * Brute-force cosine over every stored vector. At corpus scale — tens to low
 * hundreds of entries — that is well under a millisecond, and an approximate
 * index would add a dependency and a build step to save nothing. Revisit past
 * a few thousand entries, not before.
 */
export async function searchEmbedding(
  store: SqliteKnowledgeStore,
  query: string,
  provider: EmbeddingProvider,
  opts: { dimension?: DiagnosisDimension; limit: number; threshold: number },
): Promise<SearchResult[]> {
  const [queryVector] = await provider.embed([query]);
  if (!queryVector) return [];

  const scored: SearchResult[] = [];
  for (const entry of store.allEntries(opts.dimension)) {
    if (!entry.embedding) continue;
    const similarity = cosineSimilarity(queryVector, entry.embedding);
    if (similarity >= opts.threshold) {
      scored.push({ ...entry, similarity, matchType: 'embedding' });
    }
  }

  return scored.sort((a, b) => b.similarity - a.similarity).slice(0, opts.limit);
}

/** Agreement across independent channels is evidence, so a shared hit is promoted. */
const BOTH_CHANNEL_BOOST = 1.2;

/**
 * Merges the two channels.
 *
 * Semantic results seed the map because paraphrase is the common case — a
 * resume bullet rarely repeats the corpus's wording. Literal hits then fill in
 * what embeddings miss: named rules, model identifiers, exact terminology.
 */
export function mergeResults(
  fts: SearchResult[],
  embedding: SearchResult[],
  limit: number,
): SearchResult[] {
  const merged = new Map<string, SearchResult>();

  for (const result of embedding) merged.set(result.id, { ...result });

  for (const result of fts) {
    const existing = merged.get(result.id);
    if (existing) {
      existing.similarity = Math.min(1, existing.similarity * BOTH_CHANNEL_BOOST);
      existing.matchType = 'both';
    } else {
      merged.set(result.id, { ...result });
    }
  }

  return [...merged.values()].sort((a, b) => b.similarity - a.similarity).slice(0, limit);
}

/**
 * Both channels, merged.
 *
 * Without an embedding provider it degrades to literal matching rather than
 * failing — a knowledge base built with no OpenAI key is still useful, just
 * blind to paraphrase.
 *
 * **Scope queries by dimension wherever the caller knows it.** Measured on the
 * real corpus, dimension-scoped retrieval returns the right entry every time,
 * while the same queries unscoped pick the wrong dimension for roughly a third
 * of them. That is not a tuning problem: the corpus explains *rules* and a
 * query is an *instance*, so similarity tracks topic overlap more than rule
 * applicability. Deciding which rule a bullet breaks is a classification the
 * model should make; retrieval's job is to find the best entry once that is
 * decided.
 */
export class DualChannelSearch implements KnowledgeSearch {
  constructor(
    private readonly store: SqliteKnowledgeStore,
    private readonly provider?: EmbeddingProvider,
  ) {}

  async search(query: string, opts: SearchOptions = {}): Promise<SearchResult[]> {
    const limit = opts.limit ?? 3;
    const threshold = opts.threshold ?? 0.25;
    // Each channel over-fetches so the merge has room to reorder.
    const perChannel = limit * 3;

    const literal = this.searchFts(query, { ...opts, limit: perChannel });
    if (!this.provider) return literal.slice(0, limit);

    const semantic = await this.searchEmbedding(query, {
      ...opts,
      limit: perChannel,
      threshold,
    });

    return mergeResults(literal, semantic, limit);
  }

  searchFts(
    query: string,
    opts: { dimension?: DiagnosisDimension; limit: number },
  ): SearchResult[] {
    return searchFts(this.store, query, opts);
  }

  async searchEmbedding(
    query: string,
    opts: { dimension?: DiagnosisDimension; limit: number; threshold: number },
  ): Promise<SearchResult[]> {
    if (!this.provider) return [];
    return searchEmbedding(this.store, query, this.provider, opts);
  }
}
