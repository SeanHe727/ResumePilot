# Job-description alignment

The last stage of an ATS pipeline is **field mapping and relevance scoring** — it matches the
parsed fields against the job description. This is the one place where tailoring a resume to a
specific posting has a clear mechanical payoff.

The boundary is sharp: **adjusting presentation is alignment; adding experience you do not have is
fabrication.**

---

### Q: What exactly should be aligned

> Source: ATS field mapping / relevance scoring

**Weak**: "Stuff every keyword from the JD into the resume."

**Strong**:

Three things, in order of payoff:
1. **Vocabulary** — the JD says "distributed transactions", you wrote "cross-database
   consistency"; the machine will not match, so make both appear
2. **Order** — move the experience and bullets matching the JD's emphasis earlier
3. **Depth** — give a relevant entry one more bullet; cut an irrelevant one to a single line

- None of the three changes a fact; all three change **presentation**

**Gap**: Keyword stuffing treats the JD as a fill-in-the-blank exercise and backfires: the padding
is obvious the moment a human screens, and modern ATS flag **abnormal keyword density**. What
actually works is **describing things you really did using the JD's vocabulary.**

---

### Q: I only meet some of the requirements

> Source: hiring practice — required vs preferred

**Weak**: Either not applying unless every requirement is met, or listing skills you lack.

**Strong**:

Separate the JD's **required** items from its **preferred** ones. Covering 70%+ of the required
list is worth applying on; missing preferred items is normal.

For a missing requirement where you have **adjacent** experience, say so in adjacent terms:
"Familiar with Kafka delivery semantics and consumer offset management" ← you used RocketMQ, the
principles carry, and you can answer follow-ups.

**Gap**: Both extremes fail. Not applying discards an opportunity — a JD usually describes an ideal
candidate, and few people match it fully. Listing what you cannot do surfaces in the first technical
round, at a cost far exceeding the benefit. **Adjacent experience is the honest middle, on the
condition that you can genuinely answer the follow-up.**

---

### Q: Can one resume serve several postings

> Source: ATS relevance scoring

**Weak**: One general resume sent everywhere.

**Strong**:

Keep 2–3 versions by role family (backend, data, platform), adjusting only skills order and the
summary within each family.

- No need to rewrite per application, but one resume for everything is not right either
- Keep a separate diagnosis history per version so you can compare which performs better

**Gap**: A general resume costs you **a 60% match everywhere**. Rewriting for every application is
not realistic either. Splitting by role family is the balance point: within a family the core
requirements overlap heavily, and small adjustments are enough.
