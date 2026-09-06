import { describe, expect, it } from 'vitest';

import type { CandidateProfile, DiagnosisReport, EntryDiagnosis } from '../../src/domain.js';
import {
  DefaultMemoryRetriever,
  MemoryTriggers,
  SqliteMemoryStore,
  type DiagnosisSummaryRecord,
  type WeakPointRecord,
} from '../../src/memory/index.js';

function store() {
  return new SqliteMemoryStore<CandidateProfile>(':memory:');
}

function report(overrides: Partial<DiagnosisReport['summary']> = {}): DiagnosisReport {
  return {
    summary: {
      totalEntries: 4,
      totalBullets: 14,
      overallScore: 42,
      substanceAvg: 34,
      wordingAvg: 40,
      formatScore: 70,
      topStrengths: [],
      topWeaknesses: ['no measurable outcome', 'opens with a bystander verb', 'method not stated'],
      ...overrides,
    },
    perEntry: [],
    format: {} as DiagnosisReport['format'],
    improvementPlan: { immediate: [], shortTerm: [], longTerm: [] },
  };
}

function entry(score: number, issue = 'no measurable outcome'): EntryDiagnosis {
  return {
    entryId: 'e1',
    overallScore: score,
    bullets: [
      {
        bulletId: 'b0',
        overallScore: score,
        dimensions: {
          impact: { score, detail: '' },
          measurement: { score, detail: '' },
          method: { score, detail: '' },
        },
        issues: [issue],
        strengths: [],
      },
    ],
    narrative: { redundantPairs: [], weakLead: false, coherence: { score: 50, detail: '' } },
  };
}

describe('SqliteMemoryStore', () => {
  it('round-trips a structured value', () => {
    const s = store();
    s.create('preference', 'rewrite', { rule: 'never rename my projects' });

    const [found] = s.retrieve({ type: 'preference' });
    expect(found?.value).toEqual({ rule: 'never rename my projects' });
    expect(found?.confidence).toBe(0.5);
    expect(found?.accessCount).toBe(0);
  });

  it('keeps ids distinct inside one millisecond', () => {
    // Diagnosing several entries writes several weak points in the same tick;
    // a `${type}:${key}:${Date.now()}` id would collide on the primary key.
    const s = store();
    for (let i = 0; i < 50; i++) s.create('weak_point', 'xyz-structure', { i });

    expect(s.retrieve({ type: 'weak_point' })).toHaveLength(50);
  });

  it('reads limit: 0 as "none", not as "no limit"', () => {
    // A truthiness test on the option inverts it: a zero limit falls through
    // to no LIMIT clause at all, and the caller gets every row instead of none.
    const s = store();
    s.create('weak_point', 'xyz-structure', { description: 'x' });

    expect(s.retrieve({ limit: 0 })).toHaveLength(0);
    expect(s.retrieve({ limit: 1 })).toHaveLength(1);
  });

  it('filters on confidence', () => {
    const s = store();
    s.create('weak_point', 'xyz-structure', { description: 'x' });

    expect(s.retrieve({ minConfidence: 0.6 })).toHaveLength(0);
    expect(s.retrieve({ minConfidence: 0.5 })).toHaveLength(1);
  });

  it('counts each recall', () => {
    const s = store();
    s.create('preference', 'p', {});
    s.retrieve({ type: 'preference' });
    s.retrieve({ type: 'preference' });

    expect(s.retrieve({ type: 'preference' })[0]?.accessCount).toBe(2);
  });

  it('raises confidence on a boosted update, capped at 1', () => {
    const s = store();
    const id = s.create('weak_point', 'xyz-structure', { description: 'x' });
    for (let i = 0; i < 20; i++) s.update(id, { description: 'x' }, true);

    expect(s.retrieve({ type: 'weak_point' })[0]?.confidence).toBe(1);
  });

  it('hides expired memories but keeps the ones with no expiry', () => {
    const s = store();
    s.create('preference', 'live', {});
    s.db
      .prepare("INSERT INTO memories (id, type, key, value, expires_at) VALUES (?,?,?,?,?)")
      .run('x', 'preference', 'dead', '{}', '2000-01-01 00:00:00');

    expect(s.retrieve({ type: 'preference' })).toHaveLength(1);
    expect(s.evictExpired()).toBe(1);
  });

  it('lets the most-trusted profile entry win the merge', () => {
    // `retrieve` orders by confidence descending, so a straight fold would let
    // the least-trusted value overwrite the rest.
    const s = store();
    const stale = s.create('user_profile', 'main', { targetRole: 'Frontend' });
    s.create('user_profile', 'imported', { targetRole: 'SRE' });
    s.update(stale, { targetRole: 'Frontend' }, true);

    expect(s.getProfile().targetRole).toBe('Frontend');
  });

  it('merges a profile patch instead of replacing the profile', () => {
    const s = store();
    s.updateProfile({ targetRole: 'SRE' });
    s.updateProfile({ techStack: ['Go'] });

    expect(s.getProfile()).toEqual({ targetRole: 'SRE', techStack: ['Go'] });
  });

  it('reports totals by type', () => {
    const s = store();
    s.create('weak_point', 'a', {});
    s.create('weak_point', 'b', {});
    s.create('preference', 'c', {});

    expect(s.getStats()).toEqual({ total: 3, byType: { weak_point: 2, preference: 1 } });
  });

  it('clears one type without touching the others', () => {
    const s = store();
    s.create('weak_point', 'a', {});
    s.updateProfile({ targetRole: 'SRE' });
    s.deleteAll('weak_point');

    expect(s.getStats().total).toBe(1);
    expect(s.getProfile().targetRole).toBe('SRE');
  });
});

describe('MemoryTriggers', () => {
  it('records one summary per diagnosis, not the report', () => {
    const s = store();
    new MemoryTriggers(s).afterDiagnosis(report());

    const [summary] = s.retrieve({ type: 'diagnosis_summary' });
    const value = summary?.value as DiagnosisSummaryRecord;
    expect(value.overallScore).toBe(42);
    expect(value.topWeaknesses).toHaveLength(3);
    expect(Object.keys(value)).not.toContain('perEntry');
  });

  it('accumulates a score history, capped at twenty', () => {
    const s = store();
    const triggers = new MemoryTriggers(s);
    for (let i = 0; i < 25; i++) triggers.afterDiagnosis(report({ overallScore: 40 + i }));

    const profile = s.getProfile();
    expect(profile.totalDiagnoses).toBe(25);
    expect(profile.scoreHistory).toHaveLength(20);
    expect(profile.scoreHistory?.at(-1)?.score).toBe(64);
    expect(profile.lastOverallScore).toBe(64);
  });

  it('ignores an entry that scored well', () => {
    const s = store();
    new MemoryTriggers(s).afterEntry(entry(78), 'xyz-structure');

    expect(s.retrieve({ type: 'weak_point' })).toHaveLength(0);
  });

  it('records a weak entry once and boosts it on a repeat', () => {
    const s = store();
    const triggers = new MemoryTriggers(s);
    triggers.afterEntry(entry(30), 'xyz-structure');
    triggers.afterEntry(entry(28), 'xyz-structure');

    const points = s.retrieve({ type: 'weak_point' });
    expect(points).toHaveLength(1);
    expect(points[0]?.confidence).toBeCloseTo(0.6);
  });

  it('files a different finding separately', () => {
    const s = store();
    const triggers = new MemoryTriggers(s);
    triggers.afterEntry(entry(30, 'no measurable outcome'), 'xyz-structure');
    triggers.afterEntry(entry(30, 'method not stated'), 'xyz-structure');

    expect(s.retrieve({ type: 'weak_point' })).toHaveLength(2);
  });

  it('keeps at most five weak dimensions', () => {
    const s = store();
    const triggers = new MemoryTriggers(s);
    const dimensions = [
      'xyz-structure', 'impact-quantification', 'action-verbs', 'scope-ownership',
      'tech-specificity', 'conciseness-language', 'red-flags',
    ] as const;
    for (const d of dimensions) triggers.afterEntry(entry(30, `weak at ${d}`), d);

    expect(s.getProfile().weakDimensions).toHaveLength(5);
  });

  it('writes what the user says about themselves', () => {
    const s = store();
    new MemoryTriggers(s).onUserInfo({ targetRole: 'SRE', yearsExperience: 0 });

    expect(s.getProfile().targetRole).toBe('SRE');
  });
});

describe('DefaultMemoryRetriever', () => {
  it('withholds a weakness seen only once', () => {
    // The restraint rule, made mechanical: born at 0.5, recalled at 0.6, so a
    // one-off never reaches the next session and a habit does.
    const s = store();
    const triggers = new MemoryTriggers(s);
    const retriever = new DefaultMemoryRetriever(s);

    triggers.afterEntry(entry(30), 'xyz-structure');
    expect(retriever.retrieveForDiagnosis('xyz-structure').weakPoints).toHaveLength(0);

    triggers.afterEntry(entry(28), 'xyz-structure');
    expect(retriever.retrieveForDiagnosis('xyz-structure').weakPoints).toHaveLength(1);
  });

  it('scopes weak points to the dimension being diagnosed', () => {
    const s = store();
    const triggers = new MemoryTriggers(s);
    for (let i = 0; i < 2; i++) triggers.afterEntry(entry(30, 'no figure'), 'xyz-structure');
    for (let i = 0; i < 2; i++) triggers.afterEntry(entry(30, 'weak verb'), 'action-verbs');

    const recalled = new DefaultMemoryRetriever(s).retrieveForDiagnosis('action-verbs');
    expect(recalled.weakPoints).toHaveLength(1);
    expect((recalled.weakPoints[0]?.value as WeakPointRecord).description).toBe('weak verb');
  });

  it('renders nothing when nothing is known', () => {
    const s = store();
    const retriever = new DefaultMemoryRetriever(s);

    expect(retriever.formatForContext(retriever.retrieveForDiagnosis())).toBe('');
  });

  it('renders the profile as the context layer sees it', () => {
    const s = store();
    s.updateProfile({
      targetRole: 'SRE',
      techStack: ['Go', 'Kubernetes'],
      totalDiagnoses: 2,
      lastOverallScore: 61,
      scoreHistory: [
        { date: '2026-08-01', score: 42 },
        { date: '2026-09-01', score: 61 },
      ],
    });
    const retriever = new DefaultMemoryRetriever(s);
    const text = retriever.formatForContext(retriever.retrieveForDiagnosis());

    expect(text).toContain('Target role: SRE');
    expect(text).toContain('Tech stack: Go, Kubernetes');
    expect(text).toContain('Diagnosed 2x, last scored 61 (up 19)');
  });

  it('stays inside the profile layer budget on a full history', () => {
    // 500 tokens is what the Context layer allows this block.
    const s = store();
    const triggers = new MemoryTriggers(s);
    for (let i = 0; i < 25; i++) triggers.afterDiagnosis(report({ overallScore: 40 + i }));
    for (const d of ['xyz-structure', 'action-verbs', 'red-flags'] as const) {
      for (let i = 0; i < 2; i++) triggers.afterEntry(entry(30, `weak at ${d}`.repeat(20)), d);
    }
    const retriever = new DefaultMemoryRetriever(s);
    const text = retriever.formatForContext(retriever.retrieveForDiagnosis('xyz-structure'));

    expect(text.length).toBeLessThan(2_000);
  });
});

describe('across sessions', () => {
  it('carries the trend and the recurring weakness into the next diagnosis', () => {
    const s = store();
    const triggers = new MemoryTriggers(s);
    const retriever = new DefaultMemoryRetriever(s);

    // Session 1
    triggers.onUserInfo({ targetRole: 'Backend', techStack: ['Go'] });
    triggers.afterEntry(entry(30), 'xyz-structure');
    triggers.afterDiagnosis(report({ overallScore: 42 }));

    // Session 2, same weakness again
    triggers.afterEntry(entry(35), 'xyz-structure');
    triggers.afterDiagnosis(report({ overallScore: 61 }));

    const text = retriever.formatForContext(retriever.retrieveForDiagnosis('xyz-structure'));
    expect(text).toContain('Target role: Backend');
    expect(text).toContain('Weak across versions: xyz-structure');
    expect(text).toContain('(up 19)');
    expect(text).toContain('no measurable outcome');
  });
});
