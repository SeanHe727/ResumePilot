import type { ResumeDocument, ResumeSessionState, SuppliedFact } from '../domain.js';
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
    'Replace a bullet in the working copy with the version the candidate has settled on. ' +
    'Use it once they have said which wording they are keeping, never to try one out — ' +
    '`review_entry` judges a draft without committing to it. Later turns see the new text.',
  parameters: {
    type: 'object',
    properties: {
      bulletId: { type: 'string', description: 'The bullet to replace, as shown in the resume content' },
      text: { type: 'string', description: 'The wording the candidate is keeping' },
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

    ctx.session.state = { ...state, resume: withRevision(resume, bulletId, text) };
    return { success: true, data: { bulletId, before, after: text } };
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
