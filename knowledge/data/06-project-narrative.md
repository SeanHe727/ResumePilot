# Entry narrative

The 3–6 bullets under one position are not an unordered list — together they should tell one story.

This dimension can only be judged with **all the bullets of one entry side by side**, which is why
ResumePilot diagnoses at entry granularity rather than per bullet.

---

### Q: How should bullets within one entry be ordered

> Source: six-second scans; the eye settles on the opening words of each line

**Weak**:

- Attended weekly technical reviews and requirements discussions
- Wrote unit tests, raising coverage to 80%
- Led the payment path rebuild, cutting timeout rate from 3% to 0.1%

**Strong**:

- Led the payment path rebuild, cutting timeout rate from 3% to 0.1%
- Raised critical-path unit test coverage to 80%, with zero rollbacks during the rebuild
- Chaired weekly reviews, driving 3 designs into reuse across 2 business lines

- The strongest result goes **first**
- The other two are reframed as support for it rather than as unrelated errands

**Gap**: Reader attention decays fastest over the **first line or two** of each entry. Burying the
heaviest result in the third bullet forfeits the most valuable position. The weak version has a
second problem: **the three bullets have no relationship to each other** — three random tasks
rather than one coherent stretch of work.

---

### Q: What if two bullets are saying the same thing

> Source: cross-bullet redundancy

**Weak**:

- Optimised the performance of the order query endpoint
- Reduced order query response time by introducing caching

**Strong**:

- Cut order-query P99 from 800ms to 90ms with a Redis second-level cache and an N+1 rewrite

- Two bullets merge into one, freeing a line for **something else**
- The merged version is denser and now carries numbers

**Gap**: Redundancy is the most invisible kind of waste. It looks like substance (two bullets!)
while **spending two lines on one line's worth of content**, and the total line budget is fixed.
Two bullets covering the same ground usually means the entry has only one writable achievement —
which is an argument for writing that one properly, not for padding it into two.

---

### Q: How many bullets should one entry have

> Source: FAANG — the line budget of a one-page resume

**Weak**: An internship written up with 8 bullets, 5 of which are routine duties.

**Strong**:

Three bullets for the same internship: one headline result, one technical depth, one
collaboration or influence.

- Recent and relevant entries get 4–5; distant or unrelated ones get 1–2
- Routine duties ("attended standups", "wrote documentation") get zero

**Gap**: More lines is not better, because **the budget is fixed**. Five duty bullets out of eight
spend five lines telling the reader you were an ordinary employee, while crowding out the space
another entry needed. **The test is: if this line were deleted, would the reader's judgement of you
change?** If not, delete it.
