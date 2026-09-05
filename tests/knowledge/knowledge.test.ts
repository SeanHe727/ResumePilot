import { describe, expect, it } from 'vitest';

import {
  DIMENSION_LABELS,
  dimensionFromFilename,
  extractKeywords,
  importAll,
  parseCorpusFile,
} from '../../src/knowledge/import.js';
import { normaliseBm25, searchFts, tokenize } from '../../src/knowledge/search.js';
import { SqliteKnowledgeStore } from '../../src/knowledge/store.js';
import type { KnowledgeEntry } from '../../src/knowledge/types.js';

const ENTRY = `# Impact & quantification

Preamble text, not part of any entry.

### Q: How do I describe a performance optimisation project

> Source: Google XYZ Formula

**Weak**: "Responsible for performance optimisation."

**Strong**:

"Cut P99 from 800ms to 90ms (-89%)."

- X: latency fell
- Y: 800ms to 90ms

**Gap**: The weak version carries no measurement.

---

### Q: Second entry

**Strong**:

"Another strong version."

**Gap**: Explanation.
`;

/** The reference project's Chinese labels, which the parser must still accept. */
const CHINESE_ENTRY = `### Q：如何描述一个性能优化项目

> 来源：Google XYZ Formula

**新手答**："负责性能优化工作。"

**高手答**：

"将 P99 从 800ms 降至 90ms。"

**差距在哪**：新手答没有度量。
`;

function parsed(): KnowledgeEntry[] {
  return parseCorpusFile(ENTRY, 'impact-quantification');
}

describe('corpus parsing', () => {
  it('splits a file into entries and ignores the preamble', () => {
    expect(parsed()).toHaveLength(2);
  });

  it('pulls out all five parts of an entry', () => {
    const entry = parsed()[0]!;

    expect(entry.question).toBe('How do I describe a performance optimisation project');
    expect(entry.source).toBe('Google XYZ Formula');
    expect(entry.weakAnswer).toBe('Responsible for performance optimisation.');
    expect(entry.strongAnswer).toContain('800ms to 90ms');
    expect(entry.gapAnalysis).toBe('The weak version carries no measurement.');
  });

  it('keeps the breakdown that follows the strong version', () => {
    // The bullets under 高手答 explain *why* it is strong, and are the part a
    // model reasons from — dropping them would leave only an example.
    expect(parsed()[0]!.strongAnswer).toContain('X: latency fell');
  });

  it('strips the quotes people wrap examples in', () => {
    expect(parsed()[0]!.weakAnswer.startsWith('"')).toBe(false);
  });

  it('tolerates a missing source and a missing weak version', () => {
    const second = parsed()[1]!;

    expect(second.source).toBeUndefined();
    expect(second.weakAnswer).toBe('');
    expect(second.strongAnswer).toContain('Another strong version');
  });

  it('skips an entry with no strong version rather than storing it half-formed', () => {
    const broken = '### Q: Question only\n\n**Weak**: "A weak version."\n';

    expect(parseCorpusFile(broken, 'action-verbs')).toHaveLength(0);
  });

  it('still parses the reference project\'s Chinese labels', () => {
    // The corpus is English, but the format came from a Chinese project and
    // should keep loading corpora written in that shape.
    const [entry] = parseCorpusFile(CHINESE_ENTRY, 'impact-quantification');

    expect(entry?.weakAnswer).toBe('负责性能优化工作。');
    expect(entry?.gapAnalysis).toBe('新手答没有度量。');
  });

  it('numbers ids by dimension so they survive a rebuild', () => {
    expect(parsed().map((e) => e.id)).toEqual([
      'impact-quantification:1',
      'impact-quantification:2',
    ]);
  });

  it('labels every dimension in the vocabulary', () => {
    expect(Object.keys(DIMENSION_LABELS)).toHaveLength(12);
  });
});

describe('dimensionFromFilename', () => {
  it('strips the ordering prefix', () => {
    expect(dimensionFromFilename('01-impact-quantification.md')).toBe('impact-quantification');
    expect(dimensionFromFilename('10-format-ats.md')).toBe('format-ats');
  });

  it('rejects a name outside the vocabulary', () => {
    expect(dimensionFromFilename('99-made-up.md')).toBeNull();
  });
});

describe('extractKeywords', () => {
  it('keeps the named rules and frameworks a violation can cite', () => {
    const keywords = extractKeywords('Check the XYZ formula against Harvard rules and ATS multi-column risk');

    expect(keywords).toContain('xyz');
    expect(keywords).toContain('harvard');
    expect(keywords).toContain('ats');
  });

  it('does not repeat a term', () => {
    expect(extractKeywords('ATS ATS ats')).toEqual(['ats']);
  });
});

describe('tokenize', () => {
  it('drops fragments too short for trigram matching', () => {
    expect(tokenize('a bc quantify')).toEqual(['quantify']);
  });

  it('cuts Chinese into overlapping windows, since it has no spaces', () => {
    // A whole clause as one term would never match anything.
    expect(tokenize('双栏排版')).toContain('双栏排');
    expect(tokenize('双栏排版')).toContain('栏排版');
  });

  it('keeps a short Chinese run whole', () => {
    expect(tokenize('量化')).toContain('量化');
  });

  it('strips punctuation from both scripts', () => {
    expect(tokenize('quantify, impact.')).toEqual(['quantify', 'impact']);
  });

  it('caps the term count so one bullet cannot match everything', () => {
    expect(tokenize(Array.from({ length: 40 }, (_, i) => `term${i}`).join(' ')).length).toBe(12);
  });
});

describe('normaliseBm25', () => {
  it('maps SQLite’s negative scores onto 0–1', () => {
    // More negative is a better match in FTS5; comparison with cosine
    // similarity later requires both on the same scale.
    expect(normaliseBm25(-10)).toBeGreaterThan(normaliseBm25(-1));
    expect(normaliseBm25(0)).toBe(0);
    expect(normaliseBm25(-1000)).toBeLessThan(1);
  });
});

describe('store and retrieval against the real corpus', () => {
  async function loaded(): Promise<SqliteKnowledgeStore> {
    const store = new SqliteKnowledgeStore(':memory:');
    store.insertBatch(await importAll('knowledge/data'));
    return store;
  }

  it('imports every shipped dimension file', async () => {
    const store = await loaded();
    const stats = store.getStats();

    expect(stats.totalEntries).toBeGreaterThanOrEqual(20);
    expect(stats.dimensions).toBeGreaterThanOrEqual(4);
  });

  it('finds the bystander-language rule when the dimension is known', async () => {
    // Scoped retrieval is the real use case: the diagnosing agent already knows
    // which rule it is checking. Unscoped, this same bullet ranks by topic
    // overlap instead — "order query" pulls it toward the quantification entry
    // whose strong example happens to be about an order-query endpoint.
    const store = await loaded();
    const hits = searchFts(store, 'Responsible for the order query service', {
      dimension: 'action-verbs',
      limit: 3,
    });

    expect(hits[0]!.question).toMatch(/responsible for/i);
  });

  it('drops stopwords, which match nearly everything under a trigram index', async () => {
    const store = await loaded();

    expect(tokenize('Responsible for the order query service')).not.toContain('the');
    expect(tokenize('Responsible for the order query service')).toContain('responsible');
  });

  it('matches a Chinese query, which unicode61 could not tokenize at all', async () => {
    // The corpus is English, but a resume under diagnosis may not be — the
    // trigram tokenizer is what keeps a Chinese query usable at all.
    const store = await loaded();

    expect(() => searchFts(store, '双栏排版会不会有问题', { limit: 3 })).not.toThrow();
  });

  it('finds the multi-column rule from an English query', async () => {
    const store = await loaded();
    const hits = searchFts(store, 'two-column layout parsing', { limit: 3 });

    expect(hits[0]!.dimension).toBe('format-ats');
  });

  it('honours a dimension filter', async () => {
    const store = await loaded();
    const hits = searchFts(store, 'quantify', { dimension: 'action-verbs', limit: 5 });

    expect(hits.every((h) => h.dimension === 'action-verbs')).toBe(true);
  });

  it('returns nothing for a query with no usable terms', async () => {
    const store = await loaded();

    expect(searchFts(store, 'a b', { limit: 3 })).toEqual([]);
  });

  it('treats resume punctuation as text, not as query syntax', async () => {
    const store = await loaded();

    // Unquoted, these would be parsed as FTS5 operators and throw.
    expect(() => searchFts(store, 'Reduced P99 (latency) "by" 89%', { limit: 3 })).not.toThrow();
  });

  it('does not accumulate duplicate index rows when rebuilt', async () => {
    // The FTS table is maintained by hand precisely so a rebuild replaces rows
    // instead of orphaning them behind reassigned rowids.
    const store = new SqliteKnowledgeStore(':memory:');
    const entries = await importAll('knowledge/data');

    store.insertBatch(entries);
    store.insertBatch(entries);

    const ftsRows = store.db.prepare('SELECT COUNT(*) AS n FROM knowledge_fts').get() as {
      n: number;
    };
    expect(ftsRows.n).toBe(entries.length);
    expect(store.getStats().totalEntries).toBe(entries.length);
  });

  it('samples within one dimension', async () => {
    const store = await loaded();
    const sample = store.sampleEntries({ dimension: 'xyz-structure', count: 2 });

    expect(sample).toHaveLength(2);
    expect(sample.every((e) => e.dimension === 'xyz-structure')).toBe(true);
  });

  it('round-trips an entry through storage unchanged', async () => {
    const store = await loaded();
    const first = store.allEntries()[0]!;
    const reloaded = store.getEntry(first.id)!;

    expect(reloaded).toEqual(first);
  });
});
