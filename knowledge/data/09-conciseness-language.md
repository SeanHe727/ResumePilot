# Concision & language

Harvard FAS, verbatim: **"written to express not impress"**, **"articulate rather than 'flowery'"**,
and **"written for people who / systems that scan quickly"**.

A recruiter scans for six seconds. Every word carrying no information spends part of those six
seconds.

---

### Q: Which words are pure waste

> Source: Harvard FAS — express not impress

**Weak**: "In this project, what I was mainly responsible for was the relevant development work
concerning the user centre module, and relatively good results were achieved."

**Strong**:

"Rebuilt the user-centre auth flow, collapsing login from 4 serial RPCs to 1 and cutting P99 by
62%."

- Deleted: "in this project", "I", "mainly", "what … was", "concerning", "relevant", "work",
  "relatively good results were achieved"
- From 28 words to 18, and from zero numbers to three

**Gap**: English resumes inflate through **hedges and category nouns**: "relevant work concerning
X" uses three words to point at X, and deleting them changes nothing. The same family includes
"performed the operation of", "implemented the functionality of", "played a role in".

---

### Q: How long should one bullet be

> Source: FAANG — one to two lines

**Weak**: A bullet running four lines, covering background, process, reasoning and result.

**Strong**:

One to two lines. Past two, process narration has crept in — and process belongs in the
interview.

"Rewrote the order state machine as 12 explicit states, replacing 40+ scattered if-else
branches; state-related defects fell from 6 per month to 0."

**Gap**: An over-long bullet is nearly always the result of writing "what I was thinking" rather
than "what got done". A resume exists to **win a conversation**, not to conclude one. Writing the
deliberation in costs lines and demonstrates nothing — real judgement only shows when an
interviewer digs.

---

### Q: Can I use abbreviations and jargon

> Source: Harvard FAS — no abbreviations / ATS literal matching

**Weak**: "Responsible for CI/CD and K8s related work; optimised QPS and RT."

**Strong**:

"Built a GitLab CI/CD pipeline covering 12 services, raising deploy frequency from weekly to 3x
daily; cut gateway P99 response time (RT) from 400ms to 120ms."

- Industry-standard abbreviations get a full form or enough context on first use
- ATS matching is literal: if the JD says "Kubernetes" and you write only "K8s", it will not match

**Gap**: Harvard bans abbreviations outright, which a technical resume cannot fully honour. The
workable compromise: **use the ones that cannot be misread (API, SQL, CI/CD) directly; for anything
ambiguous, or anything the JD spells out, let both forms appear once.** That satisfies the human
reader and the machine matcher at the same time.
