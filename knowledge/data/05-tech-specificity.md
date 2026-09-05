# Technical specificity

The **Z** in XYZ. The FAANG bullet formula is **verb + what you built + which technology +
measurable impact** — the technology segment is not decoration, it is the evidence that you are the
one who did this.

The bar is a single question: **could a reader roughly reconstruct your approach?**

---

### Q: Is more technology name-dropping better

> Source: FAANG bullet conventions

**Weak**: "Developed backend services using Spring Boot, MyBatis, Redis, Kafka, Elasticsearch,
Docker and Kubernetes."

**Strong**:

"Decoupled order events from inventory deduction with Kafka, cutting the checkout endpoint's
synchronous dependencies from 4 to 1 and lifting peak-sale checkout success from 92% to 99.7%."

- Names **one** technology, but says what it solved and what that bought
- In the weak version, a reader cannot tell which of the 7 names was your decision and which was
  simply the company's existing stack

**Gap**: Stacked technology names communicate "I have seen these things", not "I solved problems
with them". Recruiters are not interested in the former — **the skills section already covered it,
and repeating the list in the body wastes lines.** A technology name earns its place in the body
only when bound to why it was chosen and what it fixed.

---

### Q: What counts as having explained the method

> Source: Google XYZ Formula — the reconstructability bar for Z

**Weak**: "Optimised slow queries using a variety of optimisation techniques."

**Strong**:

"Traced 3 full-table scans on the reports page, added composite indexes, split them into paged
queries and cached the results, taking P99 from 5.4s to 700ms."

- "A variety of techniques" becomes three concrete actions, each answerable on its own
- An interviewer can follow up with "why composite and not covering indexes?"

**Gap**: "Using a variety of techniques", "through technical optimisation", "adopting an advanced
approach" carry zero information, and they are worse than silence — **they advertise that you
cannot name what you did.** A bullet nobody can ask a follow-up about does not exist in an
interview.

---

### Q: Should I explain why I chose that technology

> Source: FAANG — architectural judgement is a core senior signal

**Weak**: "Used Redis for caching, improving query performance."

**Strong**:

"Chose Redis over a local cache for product-detail reads because 6 instances needed cache
coherence; 94% hit rate cut origin QPS from 8,000 to 500."

- "Over a local cache, because…" states the **trade-off** in half a sentence
- This is one of the clearest dividing lines between a junior and a mid-level resume

**Gap**: "Used Redis" proves you can operate a tool. "Chose Redis over X because Y" proves you can
make a decision. The extra length is half a line; the difference in signalled capability is a
level. **Not every bullet needs it, but a resume should contain one or two.**
