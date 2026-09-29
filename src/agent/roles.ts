import {
  CONTENT_PROMPT,
  DEEP_RESEARCH_PLAN_PROMPT,
  CLAIMS_PROMPT,
  CONSISTENCY_PROMPT,
  DEEP_RESEARCH_PROMPT,
  WORDING_PROMPT,
  JD_MATCH_PROMPT,
  JD_SEARCH_TRIGGERS,
  NARRATIVE_PROMPT,
  NARRATIVE_SEARCH_TRIGGERS,
  RETRIEVAL_ADDENDUM,
  CONTENT_SEARCH_TRIGGERS,
  WEB_SEARCH_CORE,
  SINGLE_AGENT_PROMPT,
  SINGLE_AGENT_SEARCH,
  FLAT_AGENT_PROMPT,
} from '../prompts/index.js';
import type { SubAgentConfig } from './types.js';

/**
 * What each specialist is, rather than what it is told.
 *
 * The prompts live in `src/prompts`, one file per role. They were here, and a
 * role config is the wrong place to read six paragraphs of instruction from:
 * the turn count and the deadline are the things worth seeing side by side.
 */
export const CONTENT_AGENT: SubAgentConfig = {
  id: 'content',
  task: 'diagnose_bullet',
  name: 'Entry Substance',
  description: 'Scores one entry on the three parts of the XYZ formula and reads it as a whole',
  systemPrompt: `${CONTENT_PROMPT}\n\n${RETRIEVAL_ADDENDUM}`,
  // Retrieval only. Giving this role `analyze_entry` would mean the model
  // reproducing the entry as a tool argument, and a paraphrased bullet is a
  // diagnosis of text the candidate never wrote.
  // `examine_technical_depth` runs a second agent inside one of these turns.
  // It takes no pool slot, so it costs latency and a call rather than a place
  // in the fan-out.
  // Checking whether a claim holds is the claims reader's; this one looks up
  // rules and, where it can, the world.
  tools: ['query_knowledge_base'],
  optionalTools: ['web_search'],
  optionalPrompt: `${WEB_SEARCH_CORE}\n\n${CONTENT_SEARCH_TRIGGERS}`,
  // One more than before for the claim check, which is a turn of its own.
  maxTurns: 7,
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

export const WORDING_AGENT: SubAgentConfig = {
  id: 'wording',
  task: 'judge_wording',
  name: 'Entry Wording',
  description: 'Judges verb strength and concision, without touching content',
  systemPrompt: `${WORDING_PROMPT}\n\n${RETRIEVAL_ADDENDUM}`,
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
  contextBoundary: ['briefing', 'entries', 'timeline'],
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

/**
 * Created by the content reader for one question, and gone when it answers.
 *
 * Deliberately absent from `ROLES` and from `RoleId`: nothing dispatches it, the
 * coordinator cannot reach it, and it is not one of the four specialists. It is
 * what `examine_technical_depth` runs, and its whole life is that call.
 */
export const DEEP_RESEARCH_AGENT: SubAgentConfig = {
  id: 'deep-research',
  task: 'research_domain',
  name: 'Deep Research',
  description: 'Answers one question about the field an entry comes from, from searches already run',
  systemPrompt: DEEP_RESEARCH_PROMPT,
  // No tools: the searching is done before it is asked, by the tool that
  // created it, so each of its calls is one turn.
  tools: [],
  maxTurns: 1,
  // Nested inside a content review, whose own deadline is running. Kept well
  // under it so a slow specialist fails on its own rather than taking the
  // review down with it.
  timeoutMs: 120_000,
  contextBoundary: ['entry'],
};

/** The first of its two calls: what the first search leaves open. */
export const DEEP_RESEARCH_PLANNER: SubAgentConfig = {
  ...DEEP_RESEARCH_AGENT,
  name: 'Deep Research (plan)',
  description: 'Decides what one question still needs, after a first search',
  systemPrompt: DEEP_RESEARCH_PLAN_PROMPT,
  timeoutMs: 60_000,
};

/**
 * Whether one entry's claims hold, checked one by one.
 *
 * Runs beside the content reader on every entry that reader is sent, and its
 * errors join that reader's findings. Not in `ROLES`: nothing dispatches it
 * on its own, because a check without the reading beside it is half a review.
 */
export const CLAIMS_AGENT: SubAgentConfig = {
  id: 'claims',
  task: 'diagnose_bullet',
  name: 'Claim Check',
  description: 'Checks whether each claim in one entry can be true',
  systemPrompt: CLAIMS_PROMPT,
  tools: ['verify_claims', 'examine_technical_depth'],
  // Lists, one check call, a confirmation or two, and the answer.
  maxTurns: 6,
  timeoutMs: 420_000,
  contextBoundary: ['briefing', 'entry'],
};

/**
 * The whole page checked against itself. Runs beside the career reader, and
 * fills the parts of its reading that are checks rather than judgement.
 */
export const CONSISTENCY_AGENT: SubAgentConfig = {
  id: 'consistency',
  task: 'assess_narrative',
  name: 'Consistency Check',
  description: 'Checks the page against itself: dates, repeated figures, skills, spelling',
  systemPrompt: CONSISTENCY_PROMPT,
  tools: [],
  maxTurns: 1,
  timeoutMs: 180_000,
  contextBoundary: ['entries', 'timeline'],
};

/**
 * The single-agent ablation: content, claims, wording, narrative and
 * consistency in one agent and one context, with the union of their tools.
 *
 * Not in `ROLES`, and reached only through `review_resume`, which the
 * coordinator is offered only when `RESUMEPILOT_SINGLE_AGENT` is set. It exists
 * to measure what the split into specialists buys, not to be used.
 */
export const SINGLE_AGENT: SubAgentConfig = {
  id: 'single',
  // The content reader's route, so the model and effort match the heaviest role.
  task: 'diagnose_bullet',
  name: 'Single Reviewer',
  description: 'Every per-entry and whole-page reading, in one context',
  systemPrompt: SINGLE_AGENT_PROMPT,
  tools: ['query_knowledge_base', 'verify_claims', 'examine_technical_depth'],
  optionalTools: ['web_search'],
  optionalPrompt: SINGLE_AGENT_SEARCH,
  // Roughly what the specialists take for two entries between them; the
  // lookups for a whole resume are shared rather than repeated per entry.
  maxTurns: 20,
  timeoutMs: 1_200_000,
  contextBoundary: ['briefing', 'timeline'],
  // One window for everything five readers held apart. The system prompt is
  // the five prompts together and must not be truncated.
  context: {
    maxTotalTokens: 200_000,
    recentBudget: 180_000,
    taskBudget: 8_000,
    systemPromptBudget: 24_000,
    outputReserve: 16_000,
  },
  // The answer carries every entry's three readings at once.
  maxTokens: 64_000,
};

/**
 * The single agent with no layer beneath it: the claim check and the nested
 * research, each of which runs a model of its own, are gone. Lookups that are
 * not agents (the knowledge base, web search) stay.
 */
export const FLAT_AGENT: SubAgentConfig = {
  ...SINGLE_AGENT,
  name: 'Flat Reviewer',
  description: 'Every reading in one context, with no sub-agent beneath it',
  systemPrompt: FLAT_AGENT_PROMPT,
  tools: ['query_knowledge_base'],
};

export const ROLES: Readonly<Record<string, SubAgentConfig>> = {
  'content': CONTENT_AGENT,
  'wording': WORDING_AGENT,
  narrative: NARRATIVE_AGENT,
  'jd-match': JD_MATCH_AGENT,
};
