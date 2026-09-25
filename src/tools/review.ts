import type { Briefing, EntryVerdict } from '../agent/types.js';
import type {
  Bullet,
  EntryDiagnosis,
  ResumeEntry,
  ResumeSessionState,
  WordingDiagnosis,
} from '../domain.js';
import { analyzeFormat } from './analyze-format.js';
import type { Tool, ToolContext, ToolResult } from './types.js';

/**
 * One tool per specialist, and that is the dispatch mechanism.
 *
 * A single `review` tool taking a list of roles would make the coordinator
 * argue with itself about which to include; five tools make the choice by being
 * chosen. Someone who only wants the technical content looked at gets one call,
 * and nothing has to decide on their behalf that the career arc was also worth
 * a model.
 *
 * Each carries the same three optional briefing fields. They are an add-on: the
 * specialist's own prompt is what makes it able to do the job, and a review with
 * no briefing is a review on the merits rather than a failure.
 */

interface WithBriefing {
  understanding?: string;
  supplied?: string;
  goal?: string;
}

interface EntryReviewInput extends WithBriefing {
  entryId: string;
  /** Replacement text for bullets the candidate has just edited. */
  revisedBullets?: Array<{ bulletId: string; text: string }>;
}

const BRIEFING_PROPS = {
  understanding: {
    type: 'string',
    description: 'What you take this work to be, in a sentence or two. Not a judgement of it.',
  },
  supplied: {
    type: 'string',
    description: 'What the candidate has told you that the resume itself does not say.',
  },
  goal: {
    type: 'string',
    description: 'What they asked to have looked at, in their own terms.',
  },
} as const;

/**
 * Undefined rather than an empty object when the coordinator said nothing.
 *
 * A dispatch with no aim and one whose aim came out blank are different things,
 * and only the second is worth looking at in a trace.
 */
/**
 * How much room is left on the page, if anything has looked.
 *
 * Sent down with the review rather than left to the coordinator, because it is
 * a measurement rather than a judgement — and because the reader that makes the
 * demands is the only one that cannot see the page it is spending.
 */
function pageRoom(ctx: ToolContext): string | undefined {
  const format = (ctx.session?.state as ResumeSessionState | undefined)?.formatDiagnosis;
  const length = format?.metrics.length;
  if (!length) return undefined;

  const room = length.pageCount <= 1 ? Math.max(0, 650 - length.wordCount) : 0;
  return (
    `The resume runs ${length.wordCount} words over ${length.pageCount} page(s). ` +
    (room > 0
      ? `Roughly ${room} words of room are left before it spills onto another page.`
      : 'It is already at or over its length, so anything added has to displace something.')
  );
}

function briefingFrom(input: WithBriefing | undefined, recorded: string[] = []): Briefing | undefined {
  // The coordinator's own words first, then the facts on the session. Both,
  // because they are different things: what it says here is what it took from
  // the conversation, and `record_fact` is what the candidate actually said.
  const supplied = [input?.supplied?.trim(), ...recorded].filter(
    (line): line is string => Boolean(line && line.length > 0),
  );

  const briefing: Briefing = {
    ...(input?.understanding?.trim() ? { understanding: input.understanding.trim() } : {}),
    ...(supplied.length > 0 ? { supplied: supplied.join('\n') } : {}),
    ...(input?.goal?.trim() ? { goal: input.goal.trim() } : {}),
  };
  return Object.keys(briefing).length > 0 ? briefing : undefined;
}

/**
 * What the candidate has said that bears on this entry.
 *
 * Selected here rather than left to the coordinator to copy. `record_fact`
 * writes to the session and the readers of that field were a rewrite tool and
 * the coordinator's own context layer — so a figure the candidate supplied
 * reached a specialist only if the coordinator remembered to retype it into
 * `supplied`, and a review it forgot scored the line as though the figure had
 * never been given.
 *
 * Quoted, because the field is their words rather than a claim distilled out of
 * them, and a specialist has to be able to tell the two apart: this is
 * something to judge the line against, not something the line says.
 */
function factsFor(ctx: ToolContext, entryId: string): string[] {
  const facts = (ctx.session?.state as ResumeSessionState | undefined)?.suppliedFacts ?? [];

  return facts
    .filter((fact) => {
      // A fact about a bullet is a fact about the entry holding it. One about
      // neither is general — a constraint, something they cannot share — and
      // bears on every entry.
      if (fact.bulletId) return fact.bulletId.startsWith(`${entryId}:`);
      if (fact.entryId) return fact.entryId === entryId;
      return true;
    })
    .map((fact) => `"${fact.fact}"`);
}

/**
 * One line in the product's own ledger of what it tried.
 *
 * Deliberately not the trace: the trace is a development instrument and is
 * absent in production, so anything a report has to disclose is written here,
 * when it happens.
 */
function attempted(
  ctx: ToolContext,
  role: string,
  target: string,
  outcome: 'rejected' | 'failed',
  reason: string,
): void {
  remember(ctx, (state) => {
    state.reviewAttempts = [...(state.reviewAttempts ?? []), { role, target, outcome, reason }];
  });
}

function resumeFrom(ctx: ToolContext) {
  return (ctx.session?.state as ResumeSessionState | undefined)?.resume;
}

/**
 * Every review leaves its result on the session, and that is how a report gets
 * written.
 *
 * The alternative is the coordinator passing each diagnosis back as a tool
 * argument, which means the model reproducing them — and a diagnosis retyped by
 * a model is a diagnosis of text nobody wrote. It reads them back off the
 * session instead, so what reaches the report is what the specialist returned.
 */
function remember(ctx: ToolContext, change: (state: ResumeSessionState) => void): void {
  if (!ctx.session) return;
  const state = (ctx.session.state ?? {}) as ResumeSessionState;
  change(state);
  ctx.session.state = state;
}

/** One per entry, replacing any earlier reading of the same one. */
function upsert<T extends { entryId: string }>(existing: T[] | undefined, next: T): T[] {
  const kept = (existing ?? []).filter((d) => d.entryId !== next.entryId);
  return [...kept, next];
}

type EntryRole = 'content' | 'wording';

/**
 * Which half of a verdict each role produced, and where it goes, as a table.
 *
 * It was an `if (role === 'content')` with the other case falling
 * through, which is typed and still wrong in the way that matters: a third
 * per-entry role would compile, run, and quietly file its reading under
 * wording. A `Record` keyed by the role union makes that a compile error.
 */
const VERDICT_FOR: Record<
  EntryRole,
  {
    read: (verdict: EntryVerdict) => EntryDiagnosis | WordingDiagnosis | null;
    store: (state: ResumeSessionState, found: never) => void;
  }
> = {
  'content': {
    read: (verdict) => verdict.substance,
    store: (state, found: EntryDiagnosis) => {
      state.entryDiagnoses = upsert(state.entryDiagnoses, found);
    },
  },
  'wording': {
    read: (verdict) => verdict.wording,
    store: (state, found: WordingDiagnosis) => {
      state.wordingDiagnoses = upsert(state.wordingDiagnoses, found);
    },
  },
};

function noResume(): ToolResult<never> {
  return {
    success: false,
    error: { code: 'input_error', message: 'no resume in this session — upload one first' },
  };
}

function noOrchestrator(): ToolResult<never> {
  return {
    success: false,
    error: { code: 'service_error', message: 'the specialists are not reachable on this path' },
  };
}

/**
 * A copy carrying the edits, so the session's own resume is untouched.
 *
 * A revision naming a bullet that is not in this entry is dropped rather than
 * appended: an id the model invented would otherwise become a line the
 * candidate never wrote, scored and reported back as theirs.
 */
function applyRevisions(
  entry: ResumeEntry,
  revisions: Array<{ bulletId: string; text: string }>,
): ResumeEntry {
  if (revisions.length === 0) return entry;

  const byId = new Map(revisions.map((r) => [r.bulletId, r.text]));
  const bullets: Bullet[] = entry.bullets.map((bullet) => {
    const revised = byId.get(bullet.id);
    return revised ? { ...bullet, text: revised } : bullet;
  });

  return { ...entry, bullets };
}

function entryReview(name: string, role: EntryRole, description: string): Tool<EntryReviewInput, unknown> {
  return {
    name,
    description,
    parameters: {
      type: 'object',
      properties: {
        entryId: { type: 'string', description: 'The entry to review, as shown in the resume content' },
        revisedBullets: {
          type: 'array',
          description: 'Bullets the candidate has just rewritten, to be judged instead of the filed text',
          items: {
            type: 'object',
            properties: { bulletId: { type: 'string' }, text: { type: 'string' } },
            required: ['bulletId', 'text'],
            additionalProperties: false,
          },
        },
        ...BRIEFING_PROPS,
      },
      required: ['entryId'],
      additionalProperties: false,
    },

    async execute(input, ctx): Promise<ToolResult<unknown>> {
      const entryId = input?.entryId?.trim();
      if (!entryId) {
        return { success: false, error: { code: 'input_error', message: 'entryId must not be empty' } };
      }
      if (!ctx.orchestrator) return noOrchestrator();

      const resume = resumeFrom(ctx);
      if (!resume) return noResume();

      const entry = resume.sections.flatMap((s) => s.entries).find((e) => e.id === entryId);
      if (!entry) {
        const known = resume.sections.flatMap((s) => s.entries).map((e) => e.id);
        // Written down, not only returned. The refusal reaches the model and
        // stops there; a report that cannot see it cannot tell "nothing was
        // wrong with that entry" from "the review never ran".
        attempted(ctx, role, entryId, 'rejected', `no entry ${entryId}`);
        return {
          success: false,
          error: { code: 'input_error', message: `no entry ${entryId}. This resume has: ${known.join(', ')}` },
        };
      }

      const target = applyRevisions(entry, input.revisedBullets ?? []);
      if (target.bullets.length === 0) {
        return {
          success: false,
          error: {
            code: 'input_error',
            message: `${entryId} has no bullets to score — a degree is a header and dates`,
          },
        };
      }

      try {
        const verdict = await ctx.orchestrator.diagnoseEntry(
          target,
          { roles: [role], reasons: { [role]: 'dispatched from the conversation' } },
          briefingFrom(input, factsFor(ctx, entryId)),
        );

        const { read, store } = VERDICT_FOR[role];
        const found = read(verdict);
        if (!found) {
          // A specialist that produced nothing is not a review that succeeded.
          // Reported as success with `data: undefined`, this left the
          // coordinator believing the entry had been read, the count saying it
          // had not, and nobody able to say which was true.
          const reason = ctx.orchestrator.failures?.get(role) ?? 'the reader returned nothing';
          attempted(ctx, role, entryId, 'failed', reason);
          return { success: false, error: { code: 'service_error', message: `${role} produced no reading of ${entryId}: ${reason}` } };
        }
        remember(ctx, (state) => store(state, found as never));

        return { success: true, data: found };
      } catch (err) {
        attempted(ctx, role, entryId, 'failed', err instanceof Error ? err.message : String(err));
        return {
          success: false,
          error: {
            code: 'service_error',
            message: `review failed: ${err instanceof Error ? err.message : String(err)}`,
          },
        };
      }
    },
  };
}

export const reviewContentTool = entryReview(
  'review_content',
  'content',
  'Have the content specialist read one entry: whether each line says what was done and what came ' +
    'of it, and whether its figures mean what they appear to. Needs an entry with lines under it — ' +
    'a degree is a header and dates, and there is nothing here for this to read.',
);

export const reviewWordingTool = entryReview(
  'review_wording',
  'wording',
  'Have the wording specialist read one entry: opening verbs and whether the words carry their ' +
    'weight. Says nothing about whether the content is any good. Needs an entry with lines under ' +
    'it, for the same reason.',
);

export const reviewNarrativeTool: Tool<WithBriefing, unknown> = {
  name: 'review_narrative',
  description:
    'Have the narrative specialist read the whole resume in sequence: whether the positions form ' +
    'one career, what the dates leave unexplained, and what would land better reordered.',
  parameters: { type: 'object', properties: { ...BRIEFING_PROPS }, additionalProperties: false },

  async execute(input, ctx): Promise<ToolResult<unknown>> {
    if (!ctx.orchestrator) return noOrchestrator();
    const resume = resumeFrom(ctx);
    if (!resume) return noResume();

    const assessment = await ctx.orchestrator.assessNarrative(resume, briefingFrom(input));
    if (assessment) remember(ctx, (state) => { state.narrative = assessment; });
    return assessment
      ? { success: true, data: assessment }
      : { success: false, error: { code: 'service_error', message: 'the narrative specialist returned nothing' } };
  },
};

export const reviewJdMatchTool: Tool<WithBriefing, unknown> = {
  name: 'review_jd_match',
  description:
    'Have the job-description specialist compare the resume against the posting it is being sent ' +
    'to. Needs a job description loaded — /jd puts one on the session.',
  parameters: { type: 'object', properties: { ...BRIEFING_PROPS }, additionalProperties: false },

  async execute(input, ctx): Promise<ToolResult<unknown>> {
    if (!ctx.orchestrator) return noOrchestrator();
    const state = ctx.session?.state as ResumeSessionState | undefined;
    const resume = state?.resume;
    if (!resume) return noResume();
    if (!state?.jd) {
      return {
        success: false,
        error: { code: 'input_error', message: 'no job description loaded — use /jd <file> first' },
      };
    }

    const match = await ctx.orchestrator.matchJd(resume, state.jd, briefingFrom(input));
    if (match) remember(ctx, (s) => { s.jdMatch = match; });
    return match
      ? { success: true, data: match }
      : { success: false, error: { code: 'service_error', message: 'the posting specialist returned nothing' } };
  },
};

/**
 * The one review with no specialist behind it.
 *
 * Layout is decided by reading the file, not by judging it: whether the text
 * came out in one column, whether a parser will find the headings. That is
 * ordinary code, and putting a model in front of it would buy an opinion about
 * something already known.
 */
export const reviewFormatTool: Tool<Record<string, never>, unknown> = {
  name: 'review_format',
  description:
    'Check how the file itself reads to a machine: extraction quality, layout warnings, and what ' +
    'an applicant tracking system will make of it. Cheap and deterministic.',
  parameters: { type: 'object', properties: {}, additionalProperties: false },

  async execute(_input, ctx): Promise<ToolResult<unknown>> {
    const resume = resumeFrom(ctx);
    if (!resume) return noResume();

    const diagnosis = analyzeFormat(resume);
    remember(ctx, (state) => { state.formatDiagnosis = diagnosis; });
    return { success: true, data: diagnosis };
  },
};
