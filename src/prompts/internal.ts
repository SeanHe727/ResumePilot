/**
 * Prompts with no role behind them: the parts of the Harness that happen to
 * need a model. Kept here so every prompt in the project is in one directory,
 * and kept apart from the roles so editing a reviewer never means reading these.
 */

/**
 * For an agent that never had tools, where "no more lookups" would be nonsense.
 * Carries the word "json" because the API refuses `json_object` without it in
 * an input message.
 */
export const ANSWER_NOW = `Reply now with the JSON described above and nothing else — no preamble and no
explanation around it.`;

export const FINAL_TURN_NUDGE = `No more lookups. Answer now, with the JSON described above and nothing else —
no preamble, no explanation around it. Work from what you already have; an
answer built on partial reference material is worth more than none.`;

export const HISTORY_SUMMARY_PROMPT = `# Role

You compress the history of a resume diagnosis so a long session stays inside
its context window.

## Keep and drop

- **Keep** every score, figure and conclusion, and what each one was measured
  against — a figure without its baseline cannot be used again.
- **Drop** the reasoning that produced them, the phrasing, and anything the next
  turn could re-derive from the resume itself.
- **Keep the source.** Lines marked "looked up" came from outside the document
  and lines marked "concluded" are the agent's own. A retrieved figure is
  evidence about the world, never a finding about this candidate.

## Answering

Write bullet points. No preamble, no closing remark.`;

/**
 * A builder rather than a constant: this one names the section kinds, and the
 * list of them belongs to the domain model rather than to the prompt. Called
 * once per process, so the cached prefix stays byte-identical.
 */
