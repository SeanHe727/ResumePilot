# XYZ structure

Laszlo Bock, former SVP of People Operations at Google, gave the formula:

> **Accomplished [X] as measured by [Y] by doing [Z]**

- **X — outcome**: the change you created, not the task you were handed
- **Y — measure**: the number that proves it
- **Z — action**: the method, tool or decision that got you there

All three present, and a six-second scan yields result, evidence and method at once. Missing any
one, the bullet is incomplete.

---

### Q: Which of the three is missing most often

> Source: Google XYZ Formula

**Weak**: "Rebuilt the order system using Redis and message queues, adopting a microservice
architecture."

**Strong**:

"Split the order system into 6 services with Redis caching and Kafka buffering, lifting
peak-sale checkout success from 92% to 99.7% and cutting timeout tickets by 80%."

- The weak version has only **Z**; X and Y are both absent
- The strong version adds X (success rate rose) and Y (92% → 99.7%, -80% tickets)

**Gap**: Engineers most often drop **X and Y**, because Z is the comfortable part — the stack is
what you know best. But "used Redis and Kafka" only proves exposure to those tools, not that you
solved anything with them. **Z alone reads as a stack choice made by fashion rather than by
judgement.**

---

### Q: Is outcome without method good enough

> Source: Google XYZ Formula — Z is what makes it credible

**Weak**: "Raised system availability from 99.5% to 99.99%."

**Strong**:

"Raised payment-gateway availability from 99.5% to 99.99% by splitting a single-point database
into read/write replicas, adding circuit breaking with graceful degradation, and moving releases to
staged rollout."

- X and Y were already there; Z is what makes the bullet **credible and answerable**
- All three actions are interview topics an interviewer can dig into

**Gap**: A bullet with only X+Y has a hidden problem: **the reader cannot tell how much of that
outcome was yours.** Availability may have improved because of your architecture work, or because
the company changed cloud providers. **Z is the rope tying the outcome to you**, and it also gives
the interviewer somewhere to start — a bullet nobody can ask a follow-up about does not exist in an
interview.

---

### Q: Won't three parts make the bullet too long

> Source: FAANG bar — one to two lines per bullet

**Weak**: "In the course of being responsible for building the company's data platform, through
in-depth research and several rounds of technology selection, I ultimately adopted Flink as the
stream processing engine and built a complete monitoring and alerting system, so that the
platform's stability and data quality were both significantly improved, earning recognition from
business stakeholders."

**Strong**:

"Rebuilt the real-time warehouse on Flink, cutting data-ready time from T+1 to 5 minutes across
8 business lines."

- One line, three numbers, X/Y/Z all present
- Deleted: "in the course of", "through in-depth research and several rounds of selection",
  "significantly", "earning recognition"

**Gap**: XYZ is not three sentences, it is **three kinds of information**, and one line usually
holds them. In that 60-word weak version, only "Flink" and "stability improved" belong to X/Y/Z;
the rest is **process narration and self-assessment**. An over-long bullet is almost always process
rather than result — **nobody hiring cares how much you deliberated, only what you chose and what
it bought.**

---

### Q: How specific does Z need to be

> Source: FAANG — verb + what you built + which technology + measurable impact

**Weak**: "Optimised homepage load speed through technical means, improving it by 50%."

**Strong**:

"Cut homepage first-paint from 3.2s to 1.6s via route-level code splitting, inlined critical
CSS, and WebP lazy-loaded images."

- "Technical means" becomes three concrete actions, each independently answerable
- Note that **Z here is three parallel actions** — considerably more credible than one vague verb

**Gap**: "Through technical means", "using an advanced approach", "leveraging relevant technology"
carry no information, and they are worse than leaving Z out — **they advertise that you cannot name
what you did.** The bar for Z is: **a reader should be able to roughly reconstruct your approach.**
Below that, it is not specific enough.

---

### Q: Must the three parts appear in X-Y-Z order

> Source: how the XYZ formula is used in practice

**Weak**: "By introducing caching, optimising SQL and adding indexes, the endpoint ended up much
faster."

**Strong**:

"Cut report-endpoint P99 from 5.4s to 700ms (-87%) by adding a query cache, rewriting 3
full-table scans, and filling in composite indexes."

- Outcome and numbers go **first**; method follows
- The weak version leads with three methods, pushing the conclusion to the end without a number

**Gap**: The formula's literal order is X-Y-Z, but what actually matters is that **the outcome
comes first**. Recruiters scan, and the eye settles on the **opening words of each line**. Leading
with a method list spends the most valuable position on three technology names, while "ended up
much faster" — the part that should land — sits where nobody reaches.
