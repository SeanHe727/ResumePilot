import OpenAI from 'openai';

import type { KnowledgeEntry } from './types.js';

/** The embeddings endpoint accepts far more, but a smaller batch fails cheaper. */
const BATCH_SIZE = 64;
/** Enough of the strong version to carry its meaning without paying for all of it. */
const STRONG_ANSWER_CHARS = 600;

export interface EmbeddingProvider {
  embed(texts: string[]): Promise<Float32Array[]>;
  readonly model: string;
}

export class OpenAIEmbeddingProvider implements EmbeddingProvider {
  private readonly client: OpenAI;

  constructor(
    apiKey: string,
    readonly model = 'text-embedding-3-small',
  ) {
    this.client = new OpenAI({ apiKey });
  }

  async embed(texts: string[]): Promise<Float32Array[]> {
    const response = await this.client.embeddings.create({ model: this.model, input: texts });
    // The API does not guarantee response order, but does return an index.
    return [...response.data]
      .sort((a, b) => a.index - b.index)
      .map((d) => new Float32Array(d.embedding));
  }
}

/**
 * What actually gets vectorised.
 *
 * The question alone is too short to carry meaning; the whole entry is mostly
 * explanation, which dilutes it. Question plus the opening of the strong
 * version is the part a resume bullet is being compared against.
 *
 * This text is part of the retrieval contract: change it and every stored
 * vector must be regenerated, or new queries will be compared against
 * embeddings of something else.
 */
export function buildEmbeddingText(entry: KnowledgeEntry): string {
  return `问题：${entry.question}\n答案：${entry.strongAnswer.slice(0, STRONG_ANSWER_CHARS)}`;
}

export async function generateEmbeddings(
  entries: KnowledgeEntry[],
  provider: EmbeddingProvider,
  onProgress?: (done: number, total: number) => void,
): Promise<KnowledgeEntry[]> {
  const out: KnowledgeEntry[] = [];

  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    const vectors = await provider.embed(batch.map(buildEmbeddingText));

    batch.forEach((entry, j) => {
      const embedding = vectors[j];
      out.push(embedding ? { ...entry, embedding } : entry);
    });

    onProgress?.(Math.min(i + BATCH_SIZE, entries.length), entries.length);
  }

  return out;
}

/**
 * Cosine similarity, unnormalised inputs assumed.
 *
 * Returns 0 for a length mismatch rather than throwing: a corpus rebuilt after
 * an embedding-model change leaves rows of the old width, and one stale row
 * should drop out of the ranking, not take the whole search down.
 */
export function cosineSimilarity(a: Float32Array, b: Float32Array): number {
  if (a.length !== b.length || a.length === 0) return 0;

  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i]! * b[i]!;
    normA += a[i]! * a[i]!;
    normB += b[i]! * b[i]!;
  }

  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}
