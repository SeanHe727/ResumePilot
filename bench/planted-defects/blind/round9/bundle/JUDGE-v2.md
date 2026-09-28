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

1. Accuracy: is what it says about the résumé true? Invented figures, results,
   scope or methods presented as the candidate's count against it (a word
   offered for the candidate to choose, or a bracketed placeholder to fill, is
   not invention).
2. Problems found: does it catch what actually weakens this résumé? An error a
   practitioner in the field would catch outweighs a wording issue; a review
   that misses one, or praises or keeps it, has missed what matters most.
3. Actionability: could the candidate make each change today? Saying which
   words to change is enough; a rewritten line earns nothing extra.
4. Readability: can the candidate understand the review and work through it?
   Each problem's reason is explained; the review is organised and clearly
   worded; the key problems stand out rather than sitting among small ones.

Then rank the four from best to worst, with two or three sentences on what
decided it.

## What to pay attention to

- Check: verify what a review claims against the résumé yourself (the
  arithmetic, the dates, what a line actually says).
- The whole review: the candidate will read and act on all of it, not only the
  first few points.
- Length: length is not quality. Extra material counts only if it is correct
  and worth acting on.
- Judge each review against the résumé, not against the other reviews.

## Output

Reply with JSON for each case:

{
  "case": "<case id>",
  "scores": {
    "Reviewer 1": {"accuracy": 0, "problems": 0, "actionability": 0, "readability": 0},
    "Reviewer 2": {...}, "Reviewer 3": {...}, "Reviewer 4": {...}
  },
  "invented": {"Reviewer 1": ["each invented fact, figure or method, quoted"], "Reviewer 2": [], ...},
  "ranking": ["Reviewer 2", "Reviewer 4", "Reviewer 1", "Reviewer 3"],
  "why": "two or three sentences"
}
