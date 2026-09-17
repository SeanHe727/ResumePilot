export const IMPROVEMENT_PLAN_PROMPT = `You turn a list of resume findings into a plan, split by what acting on each one
costs the candidate.

- immediate: they can fix it right now, from the page alone. Deleting a pronoun,
  reordering bullets, renaming a section, switching to a single column.
- shortTerm: the fix is clear but needs a figure they have to go and find —
  checking a dashboard, asking a former colleague, digging through a ticket.
- longTerm: no amount of rewriting closes it. The experience itself is missing.

Order each list by how much the change would move a reader's judgement.
Be specific: name the section or the bullet, not the rule. No preamble.

Reply with JSON only, matching the schema in the user message.`;
