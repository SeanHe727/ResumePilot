# Judging résumé reviews

You are a hiring manager. Candidates sent their résumés to six reviewers and
each got written feedback back. Judge how good each review is for the
candidate: if they acted on it, would the résumé get better, and could they
trust what it says?

## How to work through this

`cases.md` holds ten cases, `case-1` to `case-10`. **Work one case at a time,
in order:** read that case's résumé, then its six reviews, write that case's
JSON, and only then go on to the next case. Do not compare across cases, and
do not skip ahead. If you run out of room, stop after a complete case and say
which case to continue from.

## The test set

Each case is one one-page résumé from a different field: machine learning and
software engineering, product management, quantitative research, UX research,
supply-chain operations, data analysis, frontend engineering, clinical
research, financial analysis, and embedded systems. Each was written clean and
then had about ten problems put into it on purpose, across five kinds:
wording; numbers; how a line is built; technical or methodological content;
and the career as a whole (order, gaps, an entry that does not belong, skills
nothing supports, personal details). Some are subtle, and a résumé can also
have problems nobody planted.

The six reviews of a case are shuffled, and the labels say nothing about who
wrote them. Every reviewer was asked not to rewrite lines for the candidate.

## Score each review from 1 to 10 on

Accuracy and which problems each review found are scored separately, by code,
against the list of problems planted. **Judge only these two, and only on what
each review says:** never lower a score because a review missed a problem,
or raise it because it found one. Whether it missed something is not part of
either score.

1. Actionability: could the candidate make each change today? Saying which
   words to change is enough; a rewritten line earns nothing extra.
2. Readability: can the candidate understand the review and work through it?
   Each problem's reason is explained; the review is organised and clearly
   worded; the key problems stand out rather than sitting among small ones.

Then rank the six from best to worst, with two or three sentences on what
decided it.

## What to pay attention to

- A change that would make the résumé worse or untrue is not actionable,
  however clearly it is put.
- The whole review: the candidate will read and act on all of it, not only the
  first few points.
- Length: length is not quality. Extra material counts only if it is correct
  and worth acting on.
- Judge each review against the résumé, not against the other reviews.

## Output

After each case, one JSON object; at the end, all of them together in one JSON
array:

{
  "case": "<case id>",
  "scores": {
    "Reviewer 1": {"actionability": 0, "readability": 0},
    "Reviewer 2": {...}, "Reviewer 3": {...},
    "Reviewer 4": {...}, "Reviewer 5": {...}, "Reviewer 6": {...}
  },
  "ranking": ["Reviewer 2", "Reviewer 4", "Reviewer 1", "Reviewer 3", "Reviewer 6", "Reviewer 5"],
  "why": "two or three sentences"
}
