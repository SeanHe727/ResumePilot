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
export const ANSWER_NOW = `Answer now in JSON only, as described above. Nothing else.`;

export const FINAL_TURN_NUDGE = `Stop looking things up. Build your answer from what you already have (a
partial answer beats none) and reply in JSON only, as described above. Nothing
else.`;

export const HISTORY_SUMMARY_PROMPT = `# Role

You compress the history of a resume review so a long session stays inside its
context window.

## Keep and drop

- Keep: every score, figure and conclusion, with what makes it usable (its
  baseline, what the figure measures, how it was worked out).
- Drop: long reasoning and text that carries no information (greetings, filler).
- **Keep the source:** lines marked "looked up" came from outside the document;
  lines marked "concluded" are the agent's own. Where content has a source you
  can point to, keep the source and a short note of what is there.

## How to compress

- Keep the structure:
  - Never merge separate messages or outputs.
  - A message with several paragraphs is compressed paragraph by paragraph (one
    sentence per paragraph).
  - Structured content keeps its schema; only long free-text fields inside it
    are compressed.
- Compress the content: keep the main points and the actions taken.

## Answer

Bullet points. No preamble, no closing remark.`;

/**
 * A builder rather than a constant: this one names the section kinds, and the
 * list of them belongs to the domain model rather than to the prompt. Called
 * once per process, so the cached prefix stays byte-identical.
 */
