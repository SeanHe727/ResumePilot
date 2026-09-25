import { describe, expect, it } from 'vitest';

import type { DiagnosisReport, ResumeDocument, ResumeSessionState } from '../../src/domain.js';
import { createReportCommand } from '../../src/command/handlers/report.js';
import { renderBrief } from '../../src/skills/render-full.js';
import { applyRevisionTool, generateReportTool } from '../../src/tools/index.js';
import type { ToolContext } from '../../src/tools/types.js';
import {
  changesSince,
  entryTextHash,
  fileReading,
  sortReadings,
} from '../../src/tools/versions.js';
import { SqliteSessionManager } from '../../src/session/index.js';

/**
 * A reading is of a text, and a report is of a version.
 *
 * Measured on the item-14 runs: a review of a draft replaced the review of the
 * line on the page; a report after one revision counted four of four entries
 * read when three were reused; and `/report` after a supplied fact printed the
 * earlier report with nothing to say it was older than the conversation.
 */
const bullet = (id: string, text: string) => ({ id, entryId: id.split(':').slice(0, 2).join(':'), index: 0, text, span: { start: 0, end: 1 } });

const doc = (b0: string): ResumeDocument =>
  ({
    sourcePath: 'r.pdf',
    format: 'pdf',
    rawText: '',
    sections: [
      {
        id: 's2',
        kind: 'experience',
        heading: 'EXPERIENCE',
        looseLines: [],
        span: { start: 0, end: 1 },
        entries: [
          { id: 's2:e0', sectionId: 's2', index: 0, headerLines: ['A | Engineer'], span: { start: 0, end: 1 }, bullets: [bullet('s2:e0:b0', b0)] },
          { id: 's2:e1', sectionId: 's2', index: 1, headerLines: ['B | Engineer'], span: { start: 0, end: 1 }, bullets: [bullet('s2:e1:b0', 'Shipped a thing')] },
        ],
      },
    ],
    meta: { wordCount: 200, quality: 'clean', layoutWarnings: [] },
  }) as unknown as ResumeDocument;

const OLD = 'Built a triage branch; backlog fell 68%';
const NEW = 'Cut the backlog 68% by building a triage branch';
const entryOf = (resume: ResumeDocument, id: string) => resume.sections[0]!.entries.find((e) => e.id === id)!;

const reading = (entryId: string, text: string | undefined, score: number, at = '2026-01-01T00:00:00.000Z') => ({
  entryId,
  overallScore: score,
  bullets: [],
  ...(text === undefined ? {} : { readHash: entryTextHash({ bullets: [bullet(`${entryId}:b0`, text)] }) }),
  readAt: at,
});

describe('which text a reading was of', () => {
  it('hashes the bullets, so any change to a line is a new version', () => {
    expect(entryTextHash(entryOf(doc(OLD), 's2:e0'))).not.toBe(entryTextHash(entryOf(doc(NEW), 's2:e0')));
    expect(entryTextHash(entryOf(doc(OLD), 's2:e0'))).toBe(entryTextHash(entryOf(doc(OLD), 's2:e0')));
  });

  it('files a draft beside the reading of the page instead of over it', () => {
    const page = reading('s2:e0', OLD, 60);
    const draft = reading('s2:e0', NEW, 80);
    const filed = fileReading(fileReading(undefined, page), draft);

    expect(filed).toHaveLength(2);
    // Still on the old text: the page's reading is the current one.
    expect(sortReadings(filed, doc(OLD)).current).toEqual([page]);
    // The draft kept: its reading becomes current without being run again.
    expect(sortReadings(filed, doc(NEW)).current).toEqual([draft]);
  });

  it('replaces a reading of the same text, and keeps the newest', () => {
    const first = reading('s2:e0', OLD, 60);
    const again = reading('s2:e0', OLD, 70);
    expect(fileReading(fileReading(undefined, first), again)).toEqual([again]);
  });

  it('calls an entry stale when every reading of it is of text it no longer has', () => {
    const sorted = sortReadings([reading('s2:e0', OLD, 60), reading('s2:e1', 'Shipped a thing', 70)], doc(NEW));
    expect(sorted.stale).toEqual(['s2:e0']);
    expect(sorted.current.map((r) => r.entryId)).toEqual(['s2:e1']);
  });

  it('takes a reading from before hashes existed as current', () => {
    expect(sortReadings([reading('s2:e0', undefined, 60)], doc(NEW)).current).toHaveLength(1);
  });
});

function ctx(state: Partial<ResumeSessionState>): ToolContext {
  const session = new SqliteSessionManager().create({ sourcePath: 'r.pdf' });
  session.state = {
    formatDiagnosis: { overallScore: 90, metrics: { length: { wordCount: 200, pageCount: 1 } }, issues: [] },
    documentVersion: 1,
    ...state,
  } as never;
  return {
    session,
    queryEngine: {
      async query() {
        return {
          type: 'text',
          content: JSON.stringify({ immediate: [], shortTerm: [], longTerm: [] }),
          usage: { inputTokens: 0, outputTokens: 0 },
          stopReason: 'end_turn',
        };
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    },
    abortSignal: new AbortController().signal,
  } as unknown as ToolContext;
}

const state = (c: ToolContext) => c.session!.state as ResumeSessionState;

describe('a report knows what it was written against', () => {
  it('leaves out readings of text that is gone, and says so', async () => {
    const c = ctx({
      resume: doc(NEW),
      entryDiagnoses: [reading('s2:e0', OLD, 60), reading('s2:e1', 'Shipped a thing', 70)],
    });
    const report = (await generateReportTool.execute({} as never, c)).data as DiagnosisReport;

    expect(report.coverage.contentReviewed).toBe(1);
    expect(report.coverage.contentStale).toEqual(['s2:e0']);
    expect(report.perEntry.find((e) => e.entryId === 's2:e0')?.status).toBe('not-run');
    expect(renderBrief(report, 'r.pdf')).toContain('`s2:e0` changed after the content review read it');
  });

  it('carries an id, the version and the facts known, and keeps every report in order', async () => {
    const c = ctx({ resume: doc(OLD), entryDiagnoses: [reading('s2:e0', OLD, 60)], suppliedFacts: [{ fact: 'p99 800 ms to 90 ms' }] });
    await generateReportTool.execute({} as never, c);
    await generateReportTool.execute({} as never, c);

    const reports = state(c).reports!;
    expect(reports).toHaveLength(2);
    expect(reports[0]!.id).not.toBe(reports[1]!.id);
    expect(reports[1]).toMatchObject({ documentVersion: 1, factsKnown: 1 });
    expect(state(c).latestReport).toBe(reports[1]);
  });

  it('says how much of a later report was read for it and how much was reused', async () => {
    const c = ctx({
      resume: doc(OLD),
      entryDiagnoses: [reading('s2:e0', OLD, 60, '2026-01-01T00:00:00.000Z'), reading('s2:e1', 'Shipped a thing', 70, '2026-01-01T00:00:00.000Z')],
    });
    await generateReportTool.execute({} as never, c);
    // One entry read again after the first report.
    state(c).entryDiagnoses = fileReading(state(c).entryDiagnoses, reading('s2:e0', OLD, 65, '2999-01-01T00:00:00.000Z'));
    const second = (await generateReportTool.execute({} as never, c)).data as DiagnosisReport;

    expect(second.coverage.contentReadSincePrevious).toBe(1);
    expect(renderBrief(second, 'r.pdf')).toContain('1 read for this report, 1 unchanged since the last one and reused');
  });
});

describe('what changed after a report', () => {
  it('counts a kept revision as a new version', async () => {
    const c = ctx({ resume: doc(OLD) });
    await applyRevisionTool.execute({ bulletId: 's2:e0:b0', text: NEW }, c);

    expect(state(c).documentVersion).toBe(2);
    expect(state(c).revisions).toEqual([expect.objectContaining({ version: 2, bulletId: 's2:e0:b0' })]);
    expect(changesSince({ documentVersion: 1, factsKnown: 0 }, state(c)).revised).toEqual(['s2:e0:b0']);
  });

  it('/report says so above a report the conversation has moved past', async () => {
    const c = ctx({ resume: doc(OLD), entryDiagnoses: [reading('s2:e0', OLD, 60)] });
    await generateReportTool.execute({} as never, c);
    state(c).suppliedFacts = [{ fact: 'p99 went from 800 ms to 90 ms', bulletId: 's2:e0:b0' }];

    const out = await createReportCommand().execute({ positional: [], flags: {} } as never, c.session as never);
    expect(out.output).toContain('This report is older than the conversation');
    expect(out.output).toContain('1 fact was given (about s2:e0:b0)');
  });

  it('/report says nothing extra when nothing has changed', async () => {
    const c = ctx({ resume: doc(OLD), entryDiagnoses: [reading('s2:e0', OLD, 60)] });
    await generateReportTool.execute({} as never, c);

    const out = await createReportCommand().execute({ positional: [], flags: {} } as never, c.session as never);
    expect(out.output).not.toContain('older than the conversation');
  });
});
