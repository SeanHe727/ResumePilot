import { CLAIMS_PROMPT } from './claims.js';
import { CONSISTENCY_PROMPT } from './consistency.js';
import { CONTENT_PROMPT, CONTENT_SEARCH_TRIGGERS } from './content.js';
import { RETRIEVAL_ADDENDUM, WEB_SEARCH_CORE } from './fragments.js';
import { NARRATIVE_PROMPT, NARRATIVE_SEARCH_TRIGGERS } from './narrative.js';
import { WORDING_PROMPT } from './wording.js';

/**
 * The ablation, not the product: every specialist's prompt, merged, for one
 * agent that does all their readings in one context.
 *
 * The role prompts are included unchanged, so the only thing that differs from
 * the multi-agent run is the architecture. What had to be added is what the
 * merge itself needs: how the sections relate, and the one answer that
 * replaces five.
 */
const ARRANGEMENT = `# How these instructions are arranged

This review is normally done by five separate readers, each with its own
instructions. You are all five, in one pass over the whole resume.

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
  with all three per-entry readings.`;

export const SINGLE_AGENT_PROMPT: string = [
  ARRANGEMENT,
  `# Reading 1: content (per entry)\n\n${CONTENT_PROMPT}`,
  `# Reading 2: claims (per entry)\n\n${CLAIMS_PROMPT}`,
  `# Reading 3: wording (per entry)\n\n${WORDING_PROMPT}`,
  `# Reading 4: narrative (whole resume)\n\n${NARRATIVE_PROMPT}`,
  `# Reading 5: consistency (whole resume)\n\n${CONSISTENCY_PROMPT}`,
  RETRIEVAL_ADDENDUM,
  ANSWER,
].join('\n\n');

/** The searching roles' triggers together, for when a search provider exists. */
export const SINGLE_AGENT_SEARCH = [WEB_SEARCH_CORE, CONTENT_SEARCH_TRIGGERS, NARRATIVE_SEARCH_TRIGGERS].join('\n\n');

/**
 * The flat variant: the same agent with no sub-agent beneath it. The claims
 * section names two tools that each run a model of their own; here the checks
 * they describe are the agent's to do in its own context.
 */
const FLAT = `# Checking without helpers

\`verify_claims\` and \`examine_technical_depth\`, named in Reading 2, are not
available here. Do the checks they describe yourself: write each standalone
question, answer it from what you know, and read the answer against the line
the way Reading 2 says.`;

export const FLAT_AGENT_PROMPT = `${SINGLE_AGENT_PROMPT}\n\n${FLAT}`;
