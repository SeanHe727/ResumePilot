import { CONSISTENCY_PROMPT } from './consistency.js';
import { CONTENT_PROMPT, CONTENT_SEARCH_TRIGGERS } from './content.js';
import { RETRIEVAL_ADDENDUM, WEB_SEARCH_CORE } from './fragments.js';
import { NARRATIVE_PROMPT, NARRATIVE_SEARCH_TRIGGERS } from './narrative.js';
import { WORDING_PROMPT } from './wording.js';
import { MAIN_AGENT_PROMPT } from './main-agent.js';
import { DEEP_RESEARCH_PLAN_PROMPT, DEEP_RESEARCH_PROMPT } from './deep-research.js';

/**
 * The ablation, not the product: every specialist's prompt, merged, for one
 * agent that does all their readings in one context.
 *
 * The role prompts are included unchanged, so the only thing that differs from
 * the multi-agent run is the architecture. What had to be added is what the
 * merge itself needs: how the sections relate, and the one answer that
 * replaces four.
 */
const ARRANGEMENT = `# How these instructions are arranged

This review is normally done by four separate readers, each with its own
instructions. You are all four, in one pass over the whole resume.

- Sections: each reader's instructions follow unchanged, one section each.
- Other readers: where a section says another reader covers something, that
  reader is another section here, and so you. Report the finding once, in the
  part of the answer that section owns.
- One entry: sections written for one entry apply to every entry in turn. The
  whole resume is in front of you throughout.
- Answer: each section ends with the answer its reader would give. Give all of
  them together, in the one JSON object described at the end.`;

const ANSWER = `# Answer

This replaces each section's own Answer.

- One object: JSON only, in the shape the user message gives. Nothing outside
  the object.
- Parts: each reading goes in its own part, with the fields its section names.
- Coverage: one item in \`entries\` for every entry the user message lists,
  with both per-entry readings.`;

export const SINGLE_AGENT_PROMPT: string = [
  ARRANGEMENT,
  `# Reading 1: content (per entry)\n\n${CONTENT_PROMPT}`,
  `# Reading 2: wording (per entry)\n\n${WORDING_PROMPT}`,
  `# Reading 3: narrative (whole resume)\n\n${NARRATIVE_PROMPT}`,
  `# Reading 4: consistency (whole resume)\n\n${CONSISTENCY_PROMPT}`,
  RETRIEVAL_ADDENDUM,
  ANSWER,
].join('\n\n');

/** The searching roles' triggers together, for when a search provider exists. */
export const SINGLE_AGENT_SEARCH = [WEB_SEARCH_CORE, CONTENT_SEARCH_TRIGGERS, NARRATIVE_SEARCH_TRIGGERS].join('\n\n');

/**
 * The flat variant: the same agent with no sub-agent beneath it. The content
 * section sends its questions to specialists, each an agent of its own; here
 * the checking is the agent's to do in its own context.
 */
const FLAT = `# Checking without helpers

\`examine_technical_depth\`, named in Reading 1, is not available here. Do the
checking it describes yourself: write each standalone question, answer it from
what you know, and read the answer against the line the way Reading 1 says.`;

export const FLAT_AGENT_PROMPT = `${SINGLE_AGENT_PROMPT}\n\n${FLAT}`;

/**
 * The combined answer, in the specialists' own shapes field for field, so the
 * same readers parse it.
 */
export const SINGLE_AGENT_SCHEMA = `Every score is a whole number from 0 to 100; the zeros below are placeholders.
Ids are given back verbatim, without brackets.

Return JSON of exactly this shape:

{
  "entries": [
    {
      "entryId": "<an entry id from the list above>",
      "content": {
        "bullets": [
          {
            "bulletId": "<a line id in this entry>",
            "overallScore": 0,
            "dimensions": {
              "impact":      { "score": 0, "detail": "one sentence" },
              "measurement": { "score": 0, "detail": "one sentence" },
              "method":      { "score": 0, "detail": "one sentence" }
            },
            "issues": [
              {
                "axis": "impact | measurement | method",
                "kind": "wrong | missing | unclear",
                "what": "the problem, one sentence, quoting the line's words",
                "why": "why it is a problem for a reader, one or two sentences",
                "fix": "how to change the line: which words to move, cut or replace and with what, in a sentence or two; a fact only the candidate has goes in [brackets] — nothing the resume does not contain",
                "costWords": 0
              }
            ],
            "strengths": ["..."],
            "claimsToVerify": [
              {
                "kind": "technology|figure|method",
                "claim": "what you checked, quoted from the bullet where possible",
                "basis": "the technology, figure source or approach it rests on",
                "finding": "what the check showed, or what came back empty"
              }
            ]
          }
        ]
      },
      "wording": {
        "perBullet": [
          {
            "bulletId": "<a line id in this entry>",
            "verbStrength": { "score": 0, "detail": "one sentence" },
            "concision":    { "score": 0, "detail": "one sentence" },
            "issues": [{ "kind": "wrong | missing | unclear", "what": "what is wrong with the wording, one sentence", "savesWords": 0 }]
          }
        ]
      }
    }
  ],
  "narrative": {
    "overallScore": 0,
    "arc": "one or two sentences",
    "gaps": ["what the dates show, one per item"],
    "orderingNotes": ["entries or sections to move, and why; not individual bullets"],
    "withinEntries": [
      {
        "entryId": "<the entry id>",
        "redundantPairs": [{ "bulletA": "<id>", "bulletB": "<id>", "note": "what repeats" }],
        "coherence": { "score": 0, "detail": "one sentence" },
        "suggestedOrder": ["<id>", "<id>"]
      }
    ]
  },
  "consistency": {
    "conflicts": ["two or more places that cannot all be true, naming each, why a reader would notice, and how to make them agree"],
    "unsupportedSkills": ["a listed skill no entry could plausibly have used, and where a reader would have expected to see it"],
    "misspellings": ["the misspelled word as written, where it is, and the correct spelling"]
  }
}

"savesWords" is roughly how many words fixing that wording issue would take off
the line — 0 where the fix changes words without removing any.`;

/**
 * The `one` ablation: the coordinator does every reading itself, in the
 * session's one context, with no agent or isolated model call beneath it. The
 * helpers' prompts are included as method, since their work is now its own.
 */
const ONE_ARRANGEMENT = `# How these instructions are arranged

This review is normally done by a coordinator, four readers beneath it, and
research specialists beneath them, each with its own instructions and its own
context. You are all of them, in this one conversation.

- Coordinator: the first section is the coordinator's. Where it says you do not
  review, that no longer holds: the readings are yours. Everything else in it
  (the conversation, the report, the working copy) still applies.
- Readings: the four readers' instructions follow unchanged. Where a section
  says another reader covers something, that reader is another section here, and
  so you. Report the finding once, in the part of the answer that section owns.
  Sections written for one entry apply to every entry in turn.
- Specialists: \`examine_technical_depth\`, named in Reading 1, is not a tool
  here. The specialists' instructions are included as method: when a claim
  needs checking, research it yourself the way they describe, searching the web
  where you can. Their Answer sections do not apply.
- Handing in: when the readings are done, call \`submit_review\` once with the
  whole answer as one JSON string, in the shape given at the end. That is what
  \`generate_report\` reads; there is no review tool to dispatch.`;

export const ONE_AGENT_PROMPT: string = [
  ONE_ARRANGEMENT,
  `# Coordinator\n\n${MAIN_AGENT_PROMPT}`,
  `# Reading 1: content (per entry)\n\n${CONTENT_PROMPT}`,
  `# Reading 2: wording (per entry)\n\n${WORDING_PROMPT}`,
  `# Reading 3: narrative (whole resume)\n\n${NARRATIVE_PROMPT}`,
  `# Reading 4: consistency (whole resume)\n\n${CONSISTENCY_PROMPT}`,
  `# Method: planning research (was examine_technical_depth)\n\n${DEEP_RESEARCH_PLAN_PROMPT}`,
  `# Method: answering from research (was examine_technical_depth)\n\n${DEEP_RESEARCH_PROMPT}`,
  RETRIEVAL_ADDENDUM,
  SINGLE_AGENT_SEARCH,
  `# The review you submit\n\nEvery entry with lines under it gets one item in \`entries\`, with both per-entry readings.\n\n${SINGLE_AGENT_SCHEMA}`,
].join('\n\n');
