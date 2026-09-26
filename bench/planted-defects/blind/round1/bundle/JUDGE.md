# Blind review of résumé feedback

You are judging written feedback on résumés. For each case you get the résumé,
exactly as the reviewers saw it, and four reviews of it, labelled Reviewer 1 to
4. The labels are shuffled per case and say nothing about who wrote them.

Judge each review as the candidate would receive it: would acting on it make
this résumé better, and could they trust it?

## For each case

Score each review from 1 to 10 on:

1. **Accuracy** — is everything it says about the résumé true? Deduct for
   misreading a line, calling a correct method wrong, or advice built on a
   mistake.
2. **Important problems found** — does it catch what actually weakens this
   résumé, including technical and methodological errors a practitioner in the
   field would notice, numbers that do not add up, and a career story that
   does not hold together?
3. **Explanation** — for each problem, does the candidate understand why it is
   a problem, not only what to change?
4. **Actionability** — could the candidate make the change today? Specific
   beats general.
5. **Prioritization** — is it clear what matters most, and does the length fit
   what a one-page résumé can take?
6. **Faithfulness** — does it avoid inventing facts or figures the résumé does
   not contain? Placeholders the candidate must fill are fine; made-up numbers
   presented as theirs are not.

Length is not quality. A longer review is better only if the extra material is
correct and worth acting on.

Then rank the four from best to worst, and give two or three sentences on what
decided the ranking.

## Output

Reply with JSON for each case:

{
  "case": "<case id>",
  "scores": {
    "Reviewer 1": {"accuracy": 0, "problems": 0, "explanation": 0, "actionability": 0, "prioritization": 0, "faithfulness": 0},
    "Reviewer 2": {...}, "Reviewer 3": {...}, "Reviewer 4": {...}
  },
  "ranking": ["Reviewer 2", "Reviewer 4", "Reviewer 1", "Reviewer 3"],
  "why": "two or three sentences"
}
