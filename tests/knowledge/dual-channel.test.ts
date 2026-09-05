import { describe, expect, it, vi } from 'vitest';

import {
  buildEmbeddingText,
  cosineSimilarity,
  generateEmbeddings,
  type EmbeddingProvider,
} from '../../src/knowledge/embed.js';
import { importAll } from '../../src/knowledge/import.js';
import { DualChannelSearch, mergeResults } from '../../src/knowledge/search.js';
import { SqliteKnowledgeStore } from '../../src/knowledge/store.js';
import type { KnowledgeEntry, SearchResult } from '../../src/knowledge/types.js';

/**
 * A deterministic stand-in for the embeddings API.
 *
 * Vectors are a bag-of-characters histogram, so texts sharing characters score
 * as similar. Crude next to a real model, but it exercises every path the
 * pipeline has — batching, storage round-trip, ranking, merging — without a
 * network call or an API key.
 */
class FakeEmbeddingProvider implements EmbeddingProvider {
  readonly model = 'fake';
  calls = 0;

  async embed(texts: string[]): Promise<Float32Array[]> {
    this.calls += 1;
    return texts.map((text) => {
      const vector = new Float32Array(64);
      for (const char of text) vector[char.charCodeAt(0) % 64]! += 1;
      return vector;
    });
  }
}

function result(id: string, similarity: number, matchType: SearchResult['matchType']): SearchResult {
  return {
    id,
    dimension: 'impact-quantification',
    dimensionLabel: 'Impact & quantification',
    question: id,
    weakAnswer: '',
    strongAnswer: '',
    gapAnalysis: '',
    keywords: [],
    similarity,
    matchType,
  };
}

describe('cosineSimilarity', () => {
  it('scores identical vectors as 1', () => {
    const v = new Float32Array([1, 2, 3]);

    expect(cosineSimilarity(v, v)).toBeCloseTo(1, 6);
  });

  it('scores orthogonal vectors as 0', () => {
    expect(cosineSimilarity(new Float32Array([1, 0]), new Float32Array([0, 1]))).toBe(0);
  });

  it('returns 0 for a length mismatch instead of throwing', () => {
    // A corpus rebuilt after an embedding-model change leaves rows of the old
    // width; one stale row should drop out of the ranking, not break search.
    expect(cosineSimilarity(new Float32Array([1, 2]), new Float32Array([1, 2, 3]))).toBe(0);
  });

  it('returns 0 for a zero vector rather than dividing by zero', () => {
    expect(cosineSimilarity(new Float32Array([0, 0]), new Float32Array([1, 1]))).toBe(0);
  });
});

describe('buildEmbeddingText', () => {
  it('vectorises the question together with the strong version', () => {
    const entry = {
      question: 'How do I quantify impact',
      strongAnswer: 'x'.repeat(1000),
    } as KnowledgeEntry;
    const text = buildEmbeddingText(entry);

    expect(text).toContain('How do I quantify impact');
    // The question alone is too short to carry meaning; the whole entry is
    // mostly explanation and dilutes it.
    expect(text.length).toBeLessThan(700);
  });
});

describe('generateEmbeddings', () => {
  it('attaches a vector to every entry', async () => {
    const entries = await importAll('knowledge/data');
    const provider = new FakeEmbeddingProvider();
    const embedded = await generateEmbeddings(entries, provider);

    expect(embedded).toHaveLength(entries.length);
    expect(embedded.every((e) => e.embedding instanceof Float32Array)).toBe(true);
  });

  it('batches rather than issuing one request per entry', async () => {
    const entries = await importAll('knowledge/data');
    const provider = new FakeEmbeddingProvider();
    await generateEmbeddings(entries, provider);

    expect(provider.calls).toBeLessThan(entries.length);
  });

  it('reports progress for a long build', async () => {
    const onProgress = vi.fn();
    await generateEmbeddings(await importAll('knowledge/data'), new FakeEmbeddingProvider(), onProgress);

    expect(onProgress).toHaveBeenCalled();
  });
});

describe('mergeResults', () => {
  it('promotes an entry both channels agree on', () => {
    const merged = mergeResults([result('a', 0.5, 'fts')], [result('a', 0.5, 'embedding')], 3);

    expect(merged).toHaveLength(1);
    expect(merged[0]!.matchType).toBe('both');
    expect(merged[0]!.similarity).toBeCloseTo(0.6, 6);
  });

  it('never lets the boost push a score past 1', () => {
    const merged = mergeResults([result('a', 0.95, 'fts')], [result('a', 0.95, 'embedding')], 3);

    expect(merged[0]!.similarity).toBe(1);
  });

  it('keeps entries only one channel found', () => {
    const merged = mergeResults([result('a', 0.9, 'fts')], [result('b', 0.8, 'embedding')], 3);

    expect(merged.map((r) => r.id)).toEqual(['a', 'b']);
  });

  it('orders by score and honours the limit', () => {
    const merged = mergeResults(
      [result('a', 0.3, 'fts')],
      [result('b', 0.9, 'embedding'), result('c', 0.6, 'embedding')],
      2,
    );

    expect(merged.map((r) => r.id)).toEqual(['b', 'c']);
  });
});

describe('DualChannelSearch', () => {
  async function loaded(withProvider: boolean) {
    const store = new SqliteKnowledgeStore(':memory:');
    const provider = new FakeEmbeddingProvider();
    const entries = await importAll('knowledge/data');
    store.insertBatch(withProvider ? await generateEmbeddings(entries, provider) : entries);
    return new DualChannelSearch(store, withProvider ? provider : undefined);
  }

  it('degrades to literal matching when no provider is configured', async () => {
    // A knowledge base built without an OpenAI key must still be usable.
    const search = await loaded(false);
    const hits = await search.search('Responsible for the order query service', { limit: 3 });

    expect(hits.length).toBeGreaterThan(0);
    expect(hits.every((h) => h.matchType === 'fts')).toBe(true);
  });

  it('returns semantic hits when a provider is configured', async () => {
    const search = await loaded(true);
    // The fake's vectors are character histograms, not calibrated semantics, so
    // its scores sit far below the default cut-off. The threshold is what is
    // being neutralised here, not the ranking.
    const hits = await search.search('quantify impact', { limit: 3, threshold: 0 });

    expect(hits.length).toBeGreaterThan(0);
    expect(hits.some((h) => h.matchType !== 'fts')).toBe(true);
  });

  it('surfaces entries the literal channel alone would have missed', async () => {
    const search = await loaded(true);
    const query = 'this entry reads like a task list';

    const literalOnly = new Set(search.searchFts(query, { limit: 9 }).map((h) => h.id));
    const merged = await search.search(query, { limit: 9, threshold: 0 });

    expect(merged.some((h) => !literalOnly.has(h.id))).toBe(true);
  });

  it('respects the dimension filter across both channels', async () => {
    const search = await loaded(true);
    const hits = await search.search('quantify', {
      dimension: 'format-ats',
      limit: 5,
      threshold: 0,
    });

    expect(hits.every((h) => h.dimension === 'format-ats')).toBe(true);
  });

  it('never returns more than the requested limit', async () => {
    const search = await loaded(true);

    expect((await search.search('resume', { limit: 2, threshold: 0 })).length).toBeLessThanOrEqual(2);
  });

  it('round-trips a stored vector through SQLite without corrupting it', async () => {
    // better-sqlite3 hands back a view into a shared pool; reinterpreting it as
    // floats without slicing the byte range reads neighbouring data.
    const store = new SqliteKnowledgeStore(':memory:');
    const provider = new FakeEmbeddingProvider();
    const embedded = await generateEmbeddings(await importAll('knowledge/data'), provider);
    store.insertBatch(embedded);

    const original = embedded[0]!;
    const reloaded = store.getEntry(original.id)!;

    expect(reloaded.embedding).toEqual(original.embedding);
    expect(cosineSimilarity(reloaded.embedding!, original.embedding!)).toBeCloseTo(1, 6);
  });
});
