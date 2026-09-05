# Impact & quantification

The **Y** in Google's XYZ formula: you claim you made something better — what makes that
believable?

The working FAANG standard: **at Senior and above, fewer than half your bullets carrying a number
is a red flag.** A bullet with no measurement gives a recruiter scanning for six seconds almost
nothing to hold on to.

---

### Q: How do I describe a performance optimisation project

> Source: Google XYZ Formula / FAANG L5 bar

**Weak**: "Responsible for backend performance optimisation, improving system performance."

**Strong**:

"Cut order-query P99 latency from 800ms to 90ms (-89%) across 2M daily calls by adding a
Redis second-level cache and rewriting N+1 queries."

- X (outcome): latency fell — not "did optimisation work"
- Y (measure): 800ms → 90ms, -89%, 2M calls/day — three verifiable numbers
- Z (method): Redis second-level cache, N+1 rewrite — down to the technical decision

**Gap**: The weak version makes three mistakes at once. "Responsible for" is bystander language
with no ownership; "improving system performance" carries no measurement; and nothing reveals what
was actually done. All three axes empty — the line occupies space without saying anything.

---

### Q: My project genuinely has no impressive numbers

> Source: Harvard FAS Mignone Center — "fact-based (quantify and qualify)"

**Weak**: "Improved the internal tool's user experience; the team responded positively."

**Strong**:

"Cut average query time in an internal log-search tool from 40s to 6s for a 30-person
engineering team; the tool became the team's default entry point for incident triage."

- No revenue figure, but three checkable facts: duration, reach, adoption
- "became the default entry point" is adoption stated concretely, far harder than "responded
  positively"

**Gap**: Most "I have no numbers" is really "I did not go looking". Quantifiable axes go well
beyond revenue: time, frequency, headcount reached, incidents, lines of code, review rounds,
release cadence, test coverage, adoption. When genuinely none exist, replace subjective praise with
a **checkable fact** — who uses it, for how long, what it replaced. "The team responded positively"
cannot be verified; "became the default entry point" can.

---

### Q: Does writing "large-scale" or "massive data" count as quantifying

> Source: FAANG resume conventions — recruiters skim for hard numbers

**Weak**: "Processed massive data on a large-scale distributed system supporting high concurrency."

**Strong**:

"Built a Flink pipeline over 4TB/day of event data, peaking at 120k QPS with end-to-end
latency held under 2s."

- "large-scale" becomes 4TB/day, "massive" becomes 120k QPS, "high concurrency" becomes 2s
  end-to-end
- All three adjectives replaced with figures a reader can judge for themselves

**Gap**: "Large-scale" is a **relative word**. What counts as large in a student project is small
to the person reading. An adjective hands the judgement to the reader's imagination, and that
imagination defaults low. Writing the number takes the judgement back.

---

### Q: There is a number, but no way to tell whether it is good

> Source: Google XYZ Formula — Y must be independently judgeable

**Weak**: "Optimised the endpoint response time to 200ms and processed 5,000 records."

**Strong**:

"Cut product-detail P95 response from 1.2s to 200ms (-83%), lowering bounce rate on that page
by 11 percentage points."

- Gives a **baseline** (1.2s), which is what makes 200ms mean anything
- Gives a **business consequence** (bounce -11pp), landing the technical metric on value

**Gap**: An isolated number is not quantification. Whether 200ms came down from 210ms or from 5s
is the difference between noise and an achievement, and "processed 5,000 records" does not even
establish an order of magnitude. **A usable Y needs at least one of: a baseline, a delta, or a
downstream effect** — ideally the full "from A to B (change C)" form.

---

### Q: How do I quantify leading a team or mentoring interns

> Source: Harvard FAS — "Led team of 8", not "I led a team"

**Weak**: "As team lead, led the team to complete the project."

**Strong**:

"Led a 3-person team to ship a payment reconciliation module in 6 weeks, splitting the work
into 27 tasks and chairing weekly reviews; post-launch reconciliation error rate fell from 0.3%
to 0.02%."

- Team size (3), duration (6 weeks), workload (27 tasks), mechanism (weekly reviews)
- Still lands on a **result** (-93% error rate) rather than stopping at "completed"

**Gap**: Leadership experience is the easiest thing to write as pure process. In "led the team to
complete the project", how large, how long, and what came of it are all blank. **Size and duration
are the two easiest numbers to recover** — nearly everyone remembers them, and nearly nobody
writes them down.
