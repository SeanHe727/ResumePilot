# Skills section

In ATS entity recognition, **SKILL is the least accurate field** (70–90%, against 90%+ for
PERSON and ORG), because skills are an open class, compositional, and context-dependent.

So how the skills section is written directly determines whether a machine can tell what you know.

---

### Q: Should I rate my proficiency

> Source: Harvard FAS — "fact-based (quantify and qualify)"

**Weak**: "Python ★★★★☆  Java ★★★☆☆  Proficient in Redis, expert in MySQL"

**Strong**:

"Languages: Python, Go, TypeScript
Infrastructure: Kubernetes, Kafka, PostgreSQL, Redis
Data: Flink, Airflow, ClickHouse"

- Grouped, listed, no self-rating
- Proficiency is proved by the experience section instead

**Gap**: Stars and "expert" are **unverifiable self-assessments**, failing both halves of Harvard's
fact-based requirement — neither quantifiable nor checkable. The practical problem is worse:
"expert in MySQL" invites an interviewer to go as deep as they like, while "familiar with" reads as
hedging. **Better to say nothing and let "cut slow-query P99 from 5.4s to 700ms" do the arguing.**

---

### Q: How many skills should I list

> Source: ATS SKILL extraction accuracy / JD keyword matching

**Weak**: 40 skills listed, including Word, Excel, PowerPoint and Photoshop.

**Strong**:

12–18 kept for the target role, in 3–4 groups, each traceable to something in the body.

- Anything unrelated to the target role is deleted
- **What appears in the skills section should be corroborated in the body**

**Gap**: 40 skills read as **dilution**, not breadth — the recruiter sees no focus rather than
universal competence. And a skills section disconnected from the body is the most common tell:
Kubernetes in the list, absent from every bullet, and the interviewer asks directly and discovers
you have run `kubectl` twice.

---

### Q: How do I align the skills section with a job description

> Source: ATS field mapping / JD keyword coverage

**Weak**: One skills section sent to every posting.

**Strong**:

Adjust **order and wording** to the JD's stated requirements — if the JD says "K8s", do not write
only "Kubernetes"; write both.

- ATS matching is literal; **synonyms are not expanded for you**
- Reordering puts what the JD emphasises first, without changing any fact

**Gap**: This is the one place where tailoring to a JD costs almost nothing and pays reliably. But
the boundary matters: **reordering and rewording is alignment; adding skills you lack is
fabrication** — and the latter surfaces in the first question of a technical screen.
