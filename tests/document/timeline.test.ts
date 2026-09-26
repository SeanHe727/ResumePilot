import { describe, expect, it } from 'vitest';

import type { ResumeDocument } from '../../src/domain.js';
import { buildTimeline, renderTimeline, timelineIssues } from '../../src/document/timeline.js';

/**
 * Dates worked out rather than read. Measured on the first benchmark batch:
 * the career reader called an out-of-order Experience section newest-first,
 * and missed sixteen months straight after a degree.
 */
const section = (kind: string, headers: string[]) => ({
  id: kind, kind, heading: kind.toUpperCase(), looseLines: [], span: { start: 0, end: 1 },
  entries: headers.map((h, i) => ({ id: `${kind}:${i}`, sectionId: kind, index: i, headerLines: [h], bullets: [], span: { start: 0, end: 1 } })),
});
const doc = (...sections: ReturnType<typeof section>[]) => ({ sections }) as unknown as ResumeDocument;
const now = new Date('2026-09-26');

describe('buildTimeline', () => {
  it('finds an older role listed above a newer one', () => {
    const t = buildTimeline(doc(section('experience', ['A | Engineer | Oct 2023 - Jul 2024', 'B | Intern | Oct 2024 - May 2025'])), now);
    expect(t.outOfOrder).toHaveLength(1);
    expect(timelineIssues(t)[0]).toContain('not newest-first');
  });

  it('accepts newest-first, with the ongoing role on top', () => {
    const t = buildTimeline(doc(section('experience', ['A | Lead | Jan 2025 - Present', 'B | Engineer | 2022.08 - 2024.12'])), now);
    expect(t.outOfOrder).toEqual([]);
  });

  it('finds the months after a degree that nothing covers', () => {
    const t = buildTimeline(
      doc(
        section('education', ['Uni | M.S. | Sep 2024 - Expected Jun 2026', 'Uni | B.S. | Sep 2018 - Jun 2022']),
        section('experience', ['B | Intern | Oct 2024 - May 2025', 'A | Engineer | Oct 2023 - Jul 2024']),
      ),
      now,
    );
    expect(t.gaps.map((g) => g.months)).toEqual([15]);
    expect(renderTimeline(t)).toContain('15 months with no study or work listed, from Jun 2022 to Oct 2023');
  });

  it('does not count a short move between roles as a gap', () => {
    const t = buildTimeline(
      doc(section('education', ['Uni | B.S. | Sep 2018 - Jun 2022']), section('experience', ['A | Engineer | Aug 2022 - Jul 2024'])),
      now,
    );
    expect(t.gaps).toEqual([]);
  });

  it('finds a range that ends before it starts', () => {
    const t = buildTimeline(doc(section('project', ['Kaggle | Team | Jun 2023 - Mar 2023'])), now);
    expect(t.impossible).toHaveLength(1);
    expect(timelineIssues(t)[0]).toContain('end before they start');
  });

  it('reads Chinese dates', () => {
    const t = buildTimeline(doc(section('experience', ['公司 | 实习 | 2024年6月至今', '公司 | 工程师 | 2022年7月 - 2024年5月'])), now);
    expect(t.spans).toHaveLength(2);
    expect(t.outOfOrder).toEqual([]);
  });

  it('says nothing about a page without years', () => {
    const t = buildTimeline(doc(section('experience', ['A | Engineer | Oct 20XX - May 20XX'])), now);
    expect(renderTimeline(t)).toBe('');
    expect(timelineIssues(t)).toEqual([]);
  });
});
