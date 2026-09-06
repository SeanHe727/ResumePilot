import { ENTRY_SUBSTANCE_PROMPT, ENTRY_WORDING_PROMPT } from '../tools/prompts.js';
import type { SubAgentConfig } from './types.js';

/**
 * What a role is told about looking things up.
 *
 * The instruction to consider overclaiming is not decoration. Asked which rule
 * family fits a bullet, models route "Improved system performance by 300%
 * through architectural optimization" to impact-quantification — they see a
 * figure and treat it as a strength. Left to itself the loop never consults
 * red-flags, so the prompt has to say it out loud.
 */
const RETRIEVAL_ADDENDUM = `You have a knowledge base of resume-writing rules, each with a weak example, a
strong example, and the gap between them. Consult it before scoring: the
examples are what make a score defensible rather than a guess.

Pass \`dimension\` on every lookup. Unscoped lookups rank by topic overlap and
surface the wrong rule family about a third of the time.

Look up the families that address what is actually wrong with the bullet, not
the ones describing what it happens to contain. A bullet full of figures may
still belong under red-flags, if the figures are unverifiable or the claim is
implausible — always ask that question, because nothing in the text will
prompt you to.

If the first lookup returns rules that do not fit, look up a different family
rather than scoring against material you know is off-target.

When you have what you need, stop calling tools and reply with the JSON.`;

export const ENTRY_SUBSTANCE_AGENT: SubAgentConfig = {
  id: 'entry-substance',
  name: 'Entry Substance',
  description: 'Scores one entry on the three parts of the XYZ formula and reads it as a whole',
  systemPrompt: `${ENTRY_SUBSTANCE_PROMPT}\n\n${RETRIEVAL_ADDENDUM}`,
  // Retrieval only. Giving this role `analyze_entry` would mean the model
  // reproducing the entry as a tool argument, and a paraphrased bullet is a
  // diagnosis of text the candidate never wrote.
  tools: ['query_knowledge_base'],
  maxTurns: 4,
  timeoutMs: 60_000,
  contextBoundary: ['entry', 'previousFindings'],
};

export const ENTRY_WORDING_AGENT: SubAgentConfig = {
  id: 'entry-wording',
  name: 'Entry Wording',
  description: 'Judges verb strength and concision, without touching content',
  systemPrompt: `${ENTRY_WORDING_PROMPT}\n\n${RETRIEVAL_ADDENDUM}`,
  tools: ['query_knowledge_base'],
  // Two rather than four: wording has two rule families worth consulting
  // (action-verbs, conciseness-language) and no reason to circle back.
  maxTurns: 2,
  timeoutMs: 30_000,
  contextBoundary: ['entry'],
};

export const ROLES: Readonly<Record<string, SubAgentConfig>> = {
  'entry-substance': ENTRY_SUBSTANCE_AGENT,
  'entry-wording': ENTRY_WORDING_AGENT,
};
