import type { ResumeDocument, ResumeSessionState, Revision, SuppliedFact } from '../domain.js';
import type { Tool, ToolResult } from './types.js';

/**
 * The two writes a conversation makes.
 *
 * Everything else in this registry reads the resume and returns a judgement.
 * These change what the session holds — one records something the candidate
 * said that is not on the page, the other accepts a rewrite as the line to
 * keep. Both are what turns a discussion into a document that improved.
 *
 * Neither reaches the file on disk. The session is the working copy, and a
 * conversation that has gone wrong is undone by not saving it.
 */

interface RecordFactInput {
  fact: string;
  bulletId?: string;
  entryId?: string;
}

interface RecordFactOutput {
  recorded: SuppliedFact;
  total: number;
}

export const recordFactTool: Tool<RecordFactInput, RecordFactOutput> = {
  name: 'record_fact',
  description:
    'Record something the candidate has told you that is not on the resume — a figure they ' +
    'measured, a baseline, what a system replaced, who else worked on it. Recorded facts stay ' +
    'in view for the rest of the session, so a number given once does not have to be given ' +
    'again. Attach it to the bullet or entry it is about when you know which.',
  parameters: {
    type: 'object',
    properties: {
      fact: {
        type: 'string',
        description: 'What the candidate said, in their terms, not summarised into a claim',
      },
      bulletId: { type: 'string', description: 'The bullet it is about, if it is about one' },
      entryId: { type: 'string', description: 'The entry it is about, if it is broader than a bullet' },
    },
    required: ['fact'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<RecordFactOutput>> {
    const fact = input?.fact?.trim();
    if (!fact) {
      return { success: false, error: { code: 'input_error', message: 'fact must not be empty' } };
    }

    const state = ctx.session?.state as ResumeSessionState | undefined;
    if (!state) {
      return { success: false, error: { code: 'service_error', message: 'no session state to write to' } };
    }

    const recorded: SuppliedFact = {
      fact,
      ...(input.bulletId ? { bulletId: input.bulletId } : {}),
      ...(input.entryId ? { entryId: input.entryId } : {}),
    };

    const facts = [...(state.suppliedFacts ?? []), recorded];
    ctx.session.state = { ...state, suppliedFacts: facts };

    return { success: true, data: { recorded, total: facts.length } };
  },
};

interface ApplyRevisionInput {
  bulletId: string;
  text: string;
}

interface ApplyRevisionOutput {
  bulletId: string;
  before: string;
  after: string;
}

export const applyRevisionTool: Tool<ApplyRevisionInput, ApplyRevisionOutput> = {
  name: 'apply_revision',
  description:
    'Replace a bullet in the working copy with wording the candidate has given for it. ' +
    'Use it whenever they give a line its new wording — "I rewrote it, it now reads …", ' +
    '"change it to …" — without asking whether they are sure: every change is a new version ' +
    'and `revert_revision` takes it back, so tell them the version and that they can undo it. ' +
    'Only when they want several wordings compared, without choosing, pass them to ' +
    '`review_content` as `revisedBullets` drafts instead. Later turns see the new text.',
  parameters: {
    type: 'object',
    properties: {
      bulletId: { type: 'string', description: 'The bullet to replace, as shown in the resume content' },
      text: { type: 'string', description: 'The wording the candidate gave' },
    },
    required: ['bulletId', 'text'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<ApplyRevisionOutput>> {
    const bulletId = input?.bulletId?.trim();
    const text = input?.text?.trim();
    if (!bulletId || !text) {
      return {
        success: false,
        error: { code: 'input_error', message: 'bulletId and text are both required' },
      };
    }

    const state = ctx.session?.state as ResumeSessionState | undefined;
    const resume = state?.resume;
    if (!resume) {
      return {
        success: false,
        error: { code: 'input_error', message: 'no resume in this session — upload one first' },
      };
    }

    const before = findBullet(resume, bulletId);
    if (before === null) {
      return {
        success: false,
        error: {
          code: 'input_error',
          message: `no bullet ${bulletId} — quote the id from the resume content rather than guessing it`,
        },
      };
    }

    ctx.session.state = revise(state, resume, bulletId, before, text);
    return { success: true, data: { bulletId, before, after: text } };
  },
};

/**
 * The working copy with one line changed, as a new version.
 *
 * Shared by keeping a wording and by undoing one, so both leave the same trail.
 */
function revise(
  state: ResumeSessionState,
  resume: ResumeDocument,
  bulletId: string,
  before: string,
  after: string,
  reverts?: number,
): ResumeSessionState {
  const version = (state.documentVersion ?? 1) + 1;
  const revision: Revision = {
    version,
    bulletId,
    before,
    after,
    at: new Date().toISOString(),
    ...(reverts === undefined ? {} : { reverts }),
  };
  return {
    ...state,
    resume: withRevision(resume, bulletId, after),
    documentVersion: version,
    revisions: [...(state.revisions ?? []), revision],
  };
}

/**
 * The newest revision still in effect: not itself an undo, and not undone.
 *
 * So undoing twice goes back two changes rather than redoing the first.
 */
export function lastUndoable(revisions: readonly Revision[], bulletId?: string): Revision | undefined {
  const undone = new Set(revisions.flatMap((r) => (r.reverts === undefined ? [] : [r.reverts])));
  return [...revisions]
    .reverse()
    .find((r) => r.reverts === undefined && !undone.has(r.version) && (!bulletId || r.bulletId === bulletId));
}

/**
 * Takes back the newest change still in effect, as a new version.
 *
 * Readings are filed by the text they read, so the line's earlier readings
 * become current again the moment its earlier text is back — nothing is
 * reviewed a second time.
 */
export function revertLast(
  state: ResumeSessionState,
  bulletId?: string,
): { state: ResumeSessionState; undone: Revision } | { error: string } {
  const resume = state.resume;
  if (!resume) return { error: 'no resume in this session' };
  const target = lastUndoable(state.revisions ?? [], bulletId);
  if (!target) return { error: bulletId ? `no change to ${bulletId} left to undo` : 'no change left to undo' };
  const now = findBullet(resume, target.bulletId);
  if (now === null) return { error: `no bullet ${target.bulletId} in the working copy` };
  return { state: revise(state, resume, target.bulletId, now, target.before, target.version), undone: target };
}

interface RevertRevisionInput {
  bulletId?: string;
}

interface RevertRevisionOutput {
  bulletId: string;
  restored: string;
  version: number;
}

export const revertRevisionTool: Tool<RevertRevisionInput, RevertRevisionOutput> = {
  name: 'revert_revision',
  description:
    'Undo the most recent change to the working copy that is still in effect — of one bullet, ' +
    'if you name it — putting the earlier wording back as a new version. Use it when the ' +
    'candidate wants a change taken back. Calling it again goes back one change further.',
  parameters: {
    type: 'object',
    properties: {
      bulletId: { type: 'string', description: 'Only undo changes to this bullet' },
    },
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<RevertRevisionOutput>> {
    const state = ctx.session?.state as ResumeSessionState | undefined;
    if (!state || !ctx.session) {
      return { success: false, error: { code: 'input_error', message: 'no resume in this session' } };
    }
    const result = revertLast(state, input?.bulletId?.trim() || undefined);
    if ('error' in result) return { success: false, error: { code: 'input_error', message: result.error } };
    ctx.session.state = result.state;
    return {
      success: true,
      data: {
        bulletId: result.undone.bulletId,
        restored: result.undone.before,
        version: result.state.documentVersion ?? 0,
      },
    };
  },
};

function findBullet(resume: ResumeDocument, bulletId: string): string | null {
  for (const section of resume.sections) {
    for (const entry of section.entries) {
      for (const bullet of entry.bullets) {
        if (bullet.id === bulletId) return bullet.text;
      }
    }
  }
  return null;
}

/**
 * Rebuilt rather than mutated.
 *
 * The parsed document is handed to tools, held in session state and rendered
 * into the window every turn; editing it in place would change what a caller
 * already had a reference to, mid-turn.
 */
function withRevision(resume: ResumeDocument, bulletId: string, text: string): ResumeDocument {
  return {
    ...resume,
    sections: resume.sections.map((section) => ({
      ...section,
      entries: section.entries.map((entry) => ({
        ...entry,
        bullets: entry.bullets.map((bullet) =>
          bullet.id === bulletId ? { ...bullet, text } : bullet,
        ),
      })),
    })),
  };
}
