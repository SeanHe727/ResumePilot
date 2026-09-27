# Judging résumé reviews

You are a hiring manager. Candidates sent their résumés to four reviewers and
each got written feedback back. Judge how good each review is for the
candidate: if they acted on it, would the résumé get better, and could they
trust what it says?

## The test set

Each case is one early-career, one-page résumé from one of three fields:
machine learning and software engineering, product management, or
quantitative research. Each was written clean and then had about ten problems
put into it on purpose, across five kinds: wording; numbers; how a line is
built; technical or methodological content; and the career as a whole (order,
gaps, an entry that does not belong, skills nothing supports, personal
details). Some are subtle, and a résumé can also have problems nobody planted.

The four reviews of a case are shuffled, and the labels say nothing about who
wrote them. Every reviewer was asked not to rewrite lines for the candidate.

## Score each review from 1 to 10 on

1. Accuracy: is what it says about the résumé true?
2. Problems found: does it catch what actually weakens this résumé?
3. Explanation: does the candidate understand why each problem matters?
4. Actionability: could the candidate make the change today?
5. Prioritization: is it clear what matters most?
6. Faithfulness: does it avoid presenting invented facts as the
   candidate's?

Then rank the four from best to worst, with two or three sentences on what
decided it.

## What to pay attention to

- Check: verify what a review claims against the résumé yourself (the
  arithmetic, the dates, what a line actually says).
- An error a practitioner in the field would catch outweighs a wording issue.
  A review that misses one, or praises or keeps it, has missed what matters
  most.
- Invention: invention means figures, results, scope or methods presented as the
  candidate's. A word offered for the candidate to choose from, or a bracketed
  placeholder to fill, is not invention; if what it suggests contradicts the
  résumé, count that under accuracy.
- Suggestions: saying which words to change is actionable enough; a rewritten line earns
  nothing extra.
- Length: length is not quality. Extra material counts only if it is correct and worth
  acting on.
- Judge each review against the résumé, not against the other reviews.

## Output

Reply with JSON for each case:

{
  "case": "<case id>",
  "scores": {
    "Reviewer 1": {"accuracy": 0, "problems": 0, "explanation": 0, "actionability": 0, "prioritization": 0, "faithfulness": 0},
    "Reviewer 2": {...}, "Reviewer 3": {...}, "Reviewer 4": {...}
  },
  "invented": {"Reviewer 1": ["each invented fact, figure or method, quoted"], "Reviewer 2": [], ...},
  "ranking": ["Reviewer 2", "Reviewer 4", "Reviewer 1", "Reviewer 3"],
  "why": "two or three sentences"
}
