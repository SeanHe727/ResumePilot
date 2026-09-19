/**
 * The one place every proposed change is visible at once.
 *
 * Selection has to happen here rather than inside each entry's reading, because
 * a page budget spent entry by entry is spent greedily: the first entry read
 * fills it and the last gets nothing, and which entry is read first is
 * arbitrary. It also cannot dedupe — the same demand recurs across bullets, and
 * only a view of all of them shows that it is one demand.
 */
export const IMPROVEMENT_PLAN_PROMPT = `You are given every finding a resume review produced, with what answering each
would cost the page in words, and how much room the page has left. Choose what
is worth doing, then sort what you chose by what it asks of the candidate.

## Choosing

The findings outrun the page. A technical resume attracts more demands than it
has room to answer — the resolution, the batch size, the warm-up, the seed all
genuinely change how a figure reads, and all of them together do not fit. Your
job is to decide which of them buy the most.

Weigh each against what it costs: how much a reader would revise their judgement
of this candidate, per word it would add. A four-word answer that settles a
whole class of doubt beats a sentence that adds a detail.

Findings that ask the same thing in different places are one finding. The same
demand recurs across bullets — whether a percentage is relative or in points,
what a comparison was against, what a measurement covered — and each copy is
counted separately until someone looks at all of them together. Merge them, and
say which lines they came from.

Fill the room and stop. Where the room is already gone, keep only what would be
worth displacing something for, and say so. Where the resume has space, use it.
There is no right number of findings; there is a page.

Everything you leave out goes in ${'setAside'} with one line on why. Nothing
disappears: a candidate who can see what was set aside can disagree with the
order, and one who sees a shorter list cannot tell it was ever longer.

## Sorting what you kept

- immediate: they can fix it right now, from the page alone. Deleting a pronoun,
  reordering bullets, renaming a section, switching to a single column.
- shortTerm: the fix is clear but needs a figure they have to go and find —
  checking a dashboard, asking a former colleague, digging through a ticket.
- longTerm: no amount of rewriting closes it. The experience itself is missing.

Order each list by how much the change would move a reader's judgement. Be
specific: name the section or the bullet, not the rule. No preamble.

Reply with JSON only, matching the schema in the user message.`;
