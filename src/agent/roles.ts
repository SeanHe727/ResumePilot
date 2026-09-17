import {
  ENTRY_SUBSTANCE_PROMPT,
  ENTRY_WORDING_PROMPT,
  JD_MATCH_PROMPT,
  JD_SEARCH_TRIGGERS,
  NARRATIVE_PROMPT,
  NARRATIVE_SEARCH_TRIGGERS,
  RETRIEVAL_ADDENDUM,
  SUBSTANCE_SEARCH_TRIGGERS,
  WEB_SEARCH_CORE,
} from '../prompts/index.js';
import type { SubAgentConfig } from './types.js';

/**
 * What each specialist is, rather than what it is told.
 *
 * The prompts live in `src/prompts`, one file per role. They were here, and a
 * role config is the wrong place to read six paragraphs of instruction from:
 * the turn count and the deadline are the things worth seeing side by side.
 */
export const ENTRY_SUBSTANCE_AGENT: SubAgentConfig = {
  id: 'entry-substance',
  task: 'diagnose_bullet',
  name: 'Entry Substance',
  description: 'Scores one entry on the three parts of the XYZ formula and reads it as a whole',
  systemPrompt: `${ENTRY_SUBSTANCE_PROMPT}\n\n${RETRIEVAL_ADDENDUM}`,
  // Retrieval only. Giving this role `analyze_entry` would mean the model
  // reproducing the entry as a tool argument, and a paraphrased bullet is a
  // diagnosis of text the candidate never wrote.
  tools: ['query_knowledge_base'],
  optionalTools: ['web_search'],
  optionalPrompt: `${WEB_SEARCH_CORE}\n\n${SUBSTANCE_SEARCH_TRIGGERS}`,
  maxTurns: 6,
  // 180s was 2-3x a measured peak of 67s — measured before this role could
  // search. Checking a figure against the world costs a turn per claim, and on
  // the two entries with the densest technical figures the deadline stopped
  // being headroom and started being the thing that failed them: peak 165s on
  // the entries that finished, `Request aborted` on the two that did not.
  // Loosened well past the new peak deliberately; tighten it once a full run
  // has been measured with searching in it rather than around it.
  timeoutMs: 420_000,
  contextBoundary: ['briefing', 'entry', 'previousFindings'],
};

export const ENTRY_WORDING_AGENT: SubAgentConfig = {
  id: 'entry-wording',
  task: 'judge_wording',
  name: 'Entry Wording',
  description: 'Judges verb strength and concision, without touching content',
  systemPrompt: `${ENTRY_WORDING_PROMPT}\n\n${RETRIEVAL_ADDENDUM}`,
  tools: ['query_knowledge_base'],
  // Three, not two. This role has two rule families worth consulting, and at
  // two turns it spent the first looking them up and met the forced final turn
  // on the second — every time. A thinking model handed "answer now, nothing
  // else" with a full window behind it reasons at length and writes nothing,
  // so the role that always lands there always fails. The third turn is the
  // one where it answers of its own accord.
  maxTurns: 6,
  timeoutMs: 180_000,
  contextBoundary: ['briefing', 'entry'],
};

/**
 * Reads the whole document rather than one entry.
 *
 * The per-entry agent already reports the narrative *inside* an entry —
 * redundant bullets, a weak opening line. This is the other axis: whether the
 * positions in sequence read as a career going somewhere, which no amount of
 * per-entry scoring can see.
 */
export const NARRATIVE_AGENT: SubAgentConfig = {
  id: 'narrative',
  task: 'assess_narrative',
  name: 'Career Narrative',
  description: 'Reads the entries in sequence and judges the arc, the gaps and the ordering',
  systemPrompt: NARRATIVE_PROMPT,
  tools: ['query_knowledge_base'],
  optionalTools: ['web_search'],
  optionalPrompt: `${WEB_SEARCH_CORE}\n\n${NARRATIVE_SEARCH_TRIGGERS}`,
  maxTurns: 6,
  // The deadline covers queueing as well as the call, and this role reads
  // every entry at once while the per-entry fan-out is still running.
  //
  // Every limit here is about 2-3x what a measured run actually used: peak 67s
  // and 3 turns for the heaviest role, against 180s and 5. The margin is for
  // the resumes not in the sample, not for the one that was.
  timeoutMs: 180_000,
  contextBoundary: ['briefing', 'entries'],
};

/**
 * The only role that needs something the resume does not contain.
 *
 * Keyword coverage is what an applicant tracking system scores on, and it is
 * the one judgement here that is about the target rather than the document.
 */
export const JD_MATCH_AGENT: SubAgentConfig = {
  id: 'jd-match',
  task: 'match_jd',
  name: 'JD Match',
  description: 'Scores the resume against a job description, and names what is missing',
  systemPrompt: JD_MATCH_PROMPT,
  tools: ['query_knowledge_base'],
  optionalTools: ['web_search'],
  optionalPrompt: `${WEB_SEARCH_CORE}\n\n${JD_SEARCH_TRIGGERS}`,
  maxTurns: 6,
  timeoutMs: 180_000,
  contextBoundary: ['briefing', 'resume', 'jobDescription'],
};

export const ROLES: Readonly<Record<string, SubAgentConfig>> = {
  'entry-substance': ENTRY_SUBSTANCE_AGENT,
  'entry-wording': ENTRY_WORDING_AGENT,
  narrative: NARRATIVE_AGENT,
  'jd-match': JD_MATCH_AGENT,
};
