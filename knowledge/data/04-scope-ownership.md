# Scope & ownership

Two questions: **how big was this?** and **how much of it was yours?**

Those are exactly what a FAANG bar raiser keeps circling back to. Without scope, a reader cannot
judge difficulty; without ownership, a reader cannot credit you with the result.

---

### Q: How do I make the difficulty visible

> Source: FAANG bar-raiser patterns — scope signals

**Weak**: "Responsible for developing and maintaining the company's order system."

**Strong**:

"Maintained the order core path at 3M orders/day across 8 downstream systems, holding 99.95%
availability at a peak-sale load of 12k QPS."

- Three scope signals: volume (3M/day), complexity (8 downstreams), pressure (12k QPS)
- "Maintained the order system" means something entirely different at 300 orders/day

**Gap**: "Order system" is **a noun with no magnitude**. A campus project and Alipay share the
name and differ by six orders of magnitude. **Scope signals are free credibility** — they do not
require you to have done better work, only to state facts you already have.

---

### Q: How do I describe team work without claiming it all

> Source: FAANG — avoiding bystander language without overclaiming

**Weak**: "Our team rebuilt the whole recommendation system and improved results by 20%."

**Strong**:

"Owned the recall layer in a 5-person recommender rebuild, widening the candidate set from
2,000 to 10,000 and adding vector retrieval; offline experiments attributed 12 of the 20-point CTR
lift to the recall side."

- States team size and your module first, then the **attributable** number
- "Offline experiments attributed" shows the attribution is measured, not invented

**Gap**: A bullet opening with "our team" has a fatal problem: the interviewer will ask what *you*
did, and the sentence itself cannot answer. Honestly drawing your own boundary is more persuasive
than vaguely sharing the whole result — **being able to state the boundary is itself a seniority
signal.**

---

### Q: I only executed someone else's design — can that show ownership

> Source: Harvard FAS — "specific rather than general"

**Weak**: "Completed the coding of the caching module according to the architect's design."

**Strong**:

"Implemented a multi-level cache and, during load testing, identified a cache-penetration risk
in the original design; proposed and shipped a Bloom filter, cutting penetrating requests from 8%
to 0.2%."

- Even when the design was not yours, **the problems you found while building it are**
- Four steps — found, proposed, shipped, measured — all yours

**Gap**: Execution roles are the easiest to write as if you were a tool. But any real
implementation contains judgement: what you hit, what you changed, why. **Those are the genuinely
scarce contents of a resume**, and "completed the coding according to the design" deletes every one
of them.

---

### Q: I am a student with no large-scale experience

> Source: Harvard FAS — education and early-career sections

**Weak**: "Took part in some course projects and lab projects while at university."

**Strong**:

"Built a distributed KV store solo (3,000 lines of Go) implementing Raft leader election and
log replication; passed all 42 consistency tests and placed 2nd in a class of 30."

- Magnitude expressed in what a student *has*: lines of code, test count, ranking
- "Solo" states ownership unambiguously

**Gap**: No large-scale experience does not mean no scope signal. **A student's magnitudes are
different magnitudes, but they are still magnitudes** — lines of code, tests passed, concurrency,
data volume, ranking, review rounds. The problem with "took part in some projects" is not that the
experience is thin; it is that **even the substance it does have has gone unwritten.**
