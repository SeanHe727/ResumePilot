import { describe, expect, it } from 'vitest';

import type { Briefing, EntryVerdict, RoleSelection } from '../../src/agent/types.js';
import type { ResumeDocument, ResumeEntry } from '../../src/domain.js';
import { createToolRegistry } from '../../src/tools/index.js';
import {
  reviewContentTool,
  reviewFormatTool,
  reviewNarrativeTool,
  reviewWordingTool,
} from '../../src/tools/review.js';
import { applyRevisionTool, recordFactTool } from '../../src/tools/working-state.js';
import type { ToolContext } from '../../src/tools/types.js';

const ENTRY: ResumeEntry = {
  id: 'experience:0',
  sectionId: 'experience',
  index: 0,
  organization: 'NIO Inc.',
  headerLines: ['NIO Inc. | AI Research Intern'],
  bullets: [
    { id: 'experience:0:0', entryId: 'experience:0', index: 0, text: 'Reduced context contamination', span: { start: 0, end: 1 } },
    { id: 'experience:0:1', entryId: 'experience:0', index: 1, text: 'Improved accuracy by 9%', span: { start: 2, end: 3 } },
  ],
  span: { start: 0, end: 4 },
};

const DEGREE: ResumeEntry = {
  id: 'education:0',
  sectionId: 'education',
  index: 0,
  organization: 'University of Washington',
  headerLines: ['University of Washington | M.S. | Sep 2025 - Jun 2027'],
  bullets: [],
  span: { start: 5, end: 6 },
};

const RESUME: ResumeDocument = {
  sourcePath: 'r.pdf',
  format: 'pdf',
  rawText: '',
  sections: [
    { id: 'experience', kind: 'experience', heading: 'EXPERIENCE', entries: [ENTRY], looseLines: [], span: { start: 0, end: 4 } },
    { id: 'education', kind: 'education', heading: 'EDUCATION', entries: [DEGREE], looseLines: [], span: { start: 5, end: 6 } },
  ],
  meta: { wordCount: 20, quality: 'clean', layoutWarnings: [] },
};

/** Records the entry and roles it was dispatched, so a test can read them back. */
function ctxWith(options: { orchestrator?: boolean; resume?: ResumeDocument } = {}) {
  const seen: Array<{ entry: ResumeEntry; roles: RoleSelection; briefing?: Briefing }> = [];
  const narrative: Briefing[] = [];
  const orchestrator = {
    async diagnoseEntry(
      entry: ResumeEntry,
      roles: RoleSelection,
      briefing?: Briefing,
    ): Promise<EntryVerdict> {
      seen.push({ entry, roles, ...(briefing ? { briefing } : {}) });
      return {
        entryId: entry.id,
        substance: { entryId: entry.id, bullets: [] },
        wording: { entryId: entry.id, perBullet: [] },
        overallScore: 71,
        agentStats: [],
      } as unknown as EntryVerdict;
    },
    async assessNarrative(_resume: ResumeDocument, briefing?: Briefing) {
      narrative.push(briefing ?? {});
      return { overallScore: 80, arc: 'one career', gaps: [], orderingNotes: [] };
    },
  };

  const ctx = {
    session: { state: options.resume === undefined ? { resume: RESUME } : { resume: options.resume } },
    ...(options.orchestrator === false ? {} : { orchestrator }),
    abortSignal: new AbortController().signal,
  } as unknown as ToolContext;

  return { ctx, seen, narrative };
}

describe('one tool per specialist', () => {
  it('dispatches only the specialist that was called', async () => {
    // A single tool taking a list of roles makes the coordinator argue with
    // itself about which to include. Five tools make the choice by being
    // chosen, so someone who wants the content read pays for the content.
    const { ctx, seen } = ctxWith();

    await reviewContentTool.execute({ entryId: 'experience:0' }, ctx);
    await reviewWordingTool.execute({ entryId: 'experience:0' }, ctx);

    expect(seen.map((s) => s.roles.roles)).toEqual([['content'], ['wording']]);
  });

  it('returns the specialist that was asked for, not the whole verdict', async () => {
    const { ctx } = ctxWith();

    const content = await reviewContentTool.execute({ entryId: 'experience:0' }, ctx);
    const wording = await reviewWordingTool.execute({ entryId: 'experience:0' }, ctx);

    expect((content as { data: { bullets: unknown } }).data).toHaveProperty('bullets');
    expect((wording as { data: { perBullet: unknown } }).data).toHaveProperty('perBullet');
  });

  it('carries the coordinator\'s aim down with the dispatch', async () => {
    // The specialist works without any of this — its own prompt is what makes
    // it able to do the job. This only says which way to point it.
    const { ctx, seen } = ctxWith();

    await reviewContentTool.execute(
      {
        entryId: 'experience:0',
        understanding: 'an inference-optimisation internship on edge hardware',
        supplied: 'the 9% was measured on held-out cases',
        goal: 'they want the technical depth checked',
      },
      ctx,
    );

    expect(seen[0]?.briefing).toEqual({
      understanding: 'an inference-optimisation internship on edge hardware',
      supplied: 'the 9% was measured on held-out cases',
      goal: 'they want the technical depth checked',
    });
  });

  it('dispatches with nothing when the coordinator said nothing', async () => {
    const { ctx, seen } = ctxWith();

    await reviewContentTool.execute({ entryId: 'experience:0' }, ctx);

    expect(seen[0]?.briefing).toBeUndefined();
  });

  it('reaches the whole-document specialists without an entry id', async () => {
    const { ctx, narrative } = ctxWith();

    const result = await reviewNarrativeTool.execute({ goal: 'does this read as one career?' }, ctx);

    expect(result.success).toBe(true);
    expect(narrative[0]).toEqual({ goal: 'does this read as one career?' });
  });

  it('judges the line the candidate just rewrote, not the one on file', async () => {
    const { ctx, seen } = ctxWith();

    await reviewContentTool.execute(
      {
        entryId: 'experience:0',
        revisedBullets: [{ bulletId: 'experience:0:0', text: 'Cut cross-role leakage from 12% to 3%' }],
      },
      ctx,
    );

    expect(seen[0]?.entry.bullets[0]?.text).toBe('Cut cross-role leakage from 12% to 3%');
    // And the session's own copy is untouched: a review is not an edit.
    expect(ENTRY.bullets[0]?.text).toBe('Reduced context contamination');
  });

  it('drops a revision naming a bullet that is not there', async () => {
    // An id the model invented would become a line the candidate never wrote,
    // scored and reported back as theirs.
    const { ctx, seen } = ctxWith();

    await reviewContentTool.execute(
      {
        entryId: 'experience:0',
        revisedBullets: [{ bulletId: 'experience:0:9', text: 'Invented a line' }],
      },
      ctx,
    );

    expect(seen[0]?.entry.bullets).toHaveLength(2);
    expect(JSON.stringify(seen[0]?.entry.bullets)).not.toContain('Invented a line');
  });

  it('names the entries it does have when asked for one it does not', async () => {
    const { ctx } = ctxWith();

    const result = await reviewContentTool.execute({ entryId: 'experience:9' }, ctx);

    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('experience:0');
  });

  it('says why a degree cannot be scored', async () => {
    const { ctx } = ctxWith();

    const result = await reviewContentTool.execute({ entryId: 'education:0' }, ctx);

    expect(result.success).toBe(false);
    expect(result.error?.message).toMatch(/no bullets/);
  });

  it('refuses on a path where the specialists cannot be reached', async () => {
    const { ctx } = ctxWith({ orchestrator: false });

    const result = await reviewContentTool.execute({ entryId: 'experience:0' }, ctx);

    expect(result.success).toBe(false);
    expect(result.error?.code).toBe('service_error');
  });

  it('checks the file itself without a specialist at all', async () => {
    // Layout is decided by reading the file, not by judging it. Putting a model
    // in front of that buys an opinion about something already known.
    const { ctx } = ctxWith();

    const result = await reviewFormatTool.execute({}, ctx);

    expect(result.success).toBe(true);
  });

  it('are offered only where the specialists can be reached', async () => {
    const bare = createToolRegistry();
    const full = createToolRegistry({ orchestrator: true } as never);

    for (const name of ['review_content', 'review_wording', 'review_narrative', 'review_format']) {
      expect(bare.has(name), name).toBe(false);
      expect(full.has(name), name).toBe(true);
    }
  });
});

describe('the working copy', () => {
  function sessionCtx() {
    const session = { state: { resume: RESUME } as Record<string, unknown> };
    return { session, ctx: { session, abortSignal: new AbortController().signal } as unknown as ToolContext };
  }

  it('keeps a supplied figure so it is not asked for twice', async () => {
    // A conversation outruns its own window: a number given at message four is
    // evicted by message twenty, and asking again is how a tool stops being
    // worth talking to.
    const { session, ctx } = sessionCtx();

    await recordFactTool.execute(
      { fact: 'contamination went from 12% to 3% on the same cases', bulletId: 'experience:0:0' },
      ctx,
    );
    const result = await recordFactTool.execute({ fact: 'the reviewer was a separate model' }, ctx);

    expect(result.data?.total).toBe(2);
    const facts = (session.state as { suppliedFacts?: Array<{ fact: string; bulletId?: string }> }).suppliedFacts ?? [];
    expect(facts[0]?.bulletId).toBe('experience:0:0');
    expect(facts[1]?.bulletId).toBeUndefined();
  });

  it('replaces the line the candidate settled on, and reports what it replaced', async () => {
    const { session, ctx } = sessionCtx();

    const result = await applyRevisionTool.execute(
      { bulletId: 'experience:0:0', text: 'Cut cross-role context leakage from 12% to 3%' },
      ctx,
    );

    expect(result.data?.before).toBe('Reduced context contamination');
    const resume = (session.state as { resume: ResumeDocument }).resume;
    expect(resume.sections[0]?.entries[0]?.bullets[0]?.text).toBe('Cut cross-role context leakage from 12% to 3%');
    // Rebuilt, not mutated: the document is handed to tools and rendered into
    // the window every turn, so editing in place would change what a caller
    // already held mid-turn.
    expect(RESUME.sections[0]?.entries[0]?.bullets[0]?.text).toBe('Reduced context contamination');
  });

  it('refuses a bullet id that is not in the document', async () => {
    // An invented id would otherwise silently write nothing and report success.
    const { ctx } = sessionCtx();

    const result = await applyRevisionTool.execute({ bulletId: 'experience:9:9', text: 'x' }, ctx);

    expect(result.success).toBe(false);
    expect(result.error?.message).toMatch(/rather than guessing it/);
  });

  it('offers both writes only on the conversational path', async () => {
    for (const name of ['record_fact', 'apply_revision']) {
      expect(createToolRegistry().has(name), name).toBe(false);
      expect(createToolRegistry({ orchestrator: true }).has(name), name).toBe(true);
    }
  });
});
