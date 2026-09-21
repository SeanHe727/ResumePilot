# End-to-End Conversation Sample

> Purpose: a human review artifact for judging Main Agent scope, role selection,
> timing, nested Deep Research, reuse, and re-review decisions.
>
> This is not an automated test and it does not expose private chain-of-thought.
> `Decision summary` is the short rationale the product should make observable.
> Tool payloads and results are shortened, but keep the shapes used by the
> current code. `[CURRENT GAP]` marks behaviour the current implementation
> cannot expose or keep consistent yet.

## Resume used in the sample

The fictional PDF parses into:

```yaml
source: /Users/sean/Documents/jordan-lee-resume.pdf
sections:
  - EDUCATION:
      - s1:e0: Western State University, M.S. Computer Engineering
  - EXPERIENCE:
      - s2:e0: NIO Inc. — Senior Engineer
        bullets: [s2:e0:b0, s2:e0:b1, s2:e0:b2]
      - s2:e1: Amazon x UW — Research Assistant
        bullets: [s2:e1:b0, s2:e1:b1]
  - PROJECTS:
      - s3:e0: Agent Runtime Suite
        bullets: [s3:e0:b0, s3:e0:b1]
  - SKILLS:
      infoLines:
        - "Programming: Python, TypeScript, SQL, Bash"
        - "ML Systems: PyTorch, ONNX, CUDA, LoRA"
```

There are three entries eligible for Content/Wording review. Education has no
bullets, so it remains visible to Narrative but is not sent to the per-entry
readers.

---

## Phase 1 — Load the resume and interpret the request

### User

> Here is my resume: `/Users/sean/Documents/jordan-lee-resume.pdf`. Please give
> me a complete review before I apply. I care most about whether the technical
> claims are convincing, but I also want wording, overall story, and ATS/file
> issues checked. I do not have a job description yet.

### Observable Main Agent decision summary

```yaml
interpretation: full diagnosis
scope: whole resume
roles:
  format: requested ATS/file check
  content: requested technical-claim review, for all 3 eligible entries
  wording: explicitly requested, for all 3 eligible entries
  narrative: explicitly requested overall story
  jd-match: skipped — no posting is attached
report: generate after selected coverage completes
deep-research: not selected here — Content decides per entry if it needs it
```

This is a reasonable full diagnosis: the user explicitly asked for every
available dimension except JD Match. Asking again whether they want a full
review may be unnecessary friction; a short cost/latency notice is enough if
the product requires one.

### ResumePilot

> I’ll parse the PDF, then review the three entries with Content and Wording,
> read the resume once for overall narrative, and run the deterministic format
> check. There is no JD comparison because no posting is attached. Technical
> entries may invoke a deeper domain specialist when the normal Content reader
> cannot settle a claim itself.

### Outer tool call

```ts
parse_resume({ path: "/Users/sean/Documents/jordan-lee-resume.pdf" })
```

### Tool result summary

```yaml
success: true
quality: clean
wordCount: 548
layoutWarnings: []
entryCount: 4
sections:
  - { heading: EDUCATION, entries: [{ id: s1:e0, bullets: 0 }] }
  - { heading: EXPERIENCE, entries: [{ id: s2:e0, bullets: 3 }, { id: s2:e1, bullets: 2 }] }
  - { heading: PROJECTS, entries: [{ id: s3:e0, bullets: 2 }] }
  - { heading: SKILLS, entries: [] }
```

`Session.state.resume` now holds the structured document. Previous diagnoses
and the previous report, if any, are cleared by a new parse.

The Main Agent derives three eligible entries from the returned bullet counts.
The full resume text is kept in session/task context rather than copied into the
tool result.

---

## Phase 2 — Format review

### Outer tool call

```ts
review_format({})
```

### Tool result summary

```yaml
overallScore: 92
metrics:
  length: { score: 100, pageCount: 1, wordCount: 548 }
  atsParsability: { score: 100, blockers: [] }
  consistency:
    score: 70
    inconsistencies: ["2/7 bullets end with a full stop"]
  quantifiedRatio: { ratio: 0.57 }
  verbFirstRatio: { ratio: 0.86 }
issues:
  - "mixed bullet punctuation"
```

No model or sub-agent is needed here because these are measurable file/text
signals.

---

## Phase 3 — Content review, including a Deep Research call

### Outer tool call for NIO

```ts
review_content({
  entryId: "s2:e0",
  understanding: "a vehicle-inspection workflow and inference optimisation role",
  goal: "judge the technical depth and whether the stated results are credible"
})
```

### Briefing actually available today

```yaml
understanding: present
goal: present
supplied: absent
pageRoom: absent
```

`pageRoom` should say that roughly 102 words remain, but it is currently not
wired into the specialist briefing. `[CURRENT GAP]`

### Content Agent reads the complete entry

```text
[s2:e0] NIO Inc. | Senior Engineer | Sep 2025 - Present
  - [s2:e0:b0] Built a multi-agent vehicle inspection workflow across four services.
  - [s2:e0:b1] Reduced pending-inspection backlog by 71% using batched edge inference.
  - [s2:e0:b2] Added failure recovery and replay for inspection jobs.
```

### Observable Content Agent decision summary

```yaml
normal_review:
  - b0: method is named; impact is not established
  - b2: capability is clear; operational result is missing
needs_deeper_review:
  bullet: s2:e0:b1
  reason: "71% depends on the queue baseline, batch size, hardware, and measurement window"
question: "Under what conditions does a 71% backlog reduction support the claimed inference improvement?"
```

The deeper call is reasonable because the unresolved question is about whether
the method and metric support each other, not merely whether the line contains
a number.

### Inner tool call — currently invisible to outer hooks

```ts
examine_technical_depth({
  entryId: "s2:e0",
  question:
    "Under what queue baseline, batch size, hardware and measurement window " +
    "would a 71% backlog reduction support the claimed inference improvement?"
})
```

`examine_technical_depth` creates a temporary Deep Research Agent with:

```yaml
systemPrompt: practitioner-focused deep research prompt
context:
  entry: "NIO Inc. | Senior Engineer | Sep 2025 - Present"
input:
  question: the single question above
  resume_content: the complete s2:e0 entry with bullet ids
availableTools: [web_search, if configured]
maxTurns: 6
```

### Optional inner search

```ts
web_search({
  query: "edge inference batching vehicle inspection queue latency throughput conditions",
  purpose: "method"
})
```

### Deep Research result

```json
{
  "domain": "edge inference for asynchronous inspection pipelines",
  "findings": [
    {
      "bulletId": "s2:e0:b1",
      "what": "Backlog reduction is a queue-level outcome; it supports an inference claim only if arrival rate, hardware, batch size, and observation window stayed comparable.",
      "why": "Without those conditions, the result may come from workload changes or queue policy rather than the inference method."
    }
  ]
}
```

This JSON returns to the Content Agent as a tool result. It does not go directly
to the Main Agent.

### Content Agent final result

```yaml
entryId: s2:e0
overallScore: 72
bullets:
  - bulletId: s2:e0:b0
    overallScore: 68
    dimensions:
      impact: { score: 55, detail: "The workflow exists, but the operational change is absent." }
      measurement: { score: 45, detail: "Four services is scale context, not an outcome." }
      method: { score: 85, detail: "The architecture is concrete enough to understand." }
  - bulletId: s2:e0:b1
    overallScore: 74
    dimensions:
      impact: { score: 88, detail: "The backlog outcome is clear." }
      measurement: { score: 70, detail: "The 71% result lacks its comparison conditions." }
      method: { score: 65, detail: "Batching is named, but the causal link is not established." }
    issues:
      - what: "State the comparable queue or measurement window behind the 71%."
        costWords: 6
    claimsToVerify:
      - kind: method
        claim: "71% backlog reduction using batched edge inference"
        basis: "queue conditions and batching configuration"
        finding: "The result needs comparable arrival rate, hardware, batch size and time window."
```

The Main Agent receives this `EntryDiagnosis`, not the raw Deep Research
exchange. The current system retains no explicit statement that Deep Research
was called or which part of its answer was adopted. `[CURRENT GAP]`

### Remaining Content calls

```ts
review_content({ entryId: "s2:e1", understanding: "applied ML research", goal: "full content review" })
review_content({ entryId: "s3:e0", understanding: "an agent runtime project", goal: "full content review" })
```

Condensed results:

```yaml
s2:e1: { score: 78, primaryIssue: "the evaluation baseline is unnamed" }
s3:e0: { score: 76, primaryIssue: "adoption and reliability impact are not established" }
```

Education is deliberately skipped because it has no bullets to score. Skills
remain visible to the whole-document reader but have no dedicated Content
review in the current architecture.

---

## Phase 4 — Wording review

### Observable Main Agent decision summary

```yaml
scope: the same 3 eligible entries
role: wording
reason: the user explicitly requested wording, and no Content finding substitutes for it
```

### Outer calls

```ts
review_wording({ entryId: "s2:e0", goal: "full wording review" })
review_wording({ entryId: "s2:e1", goal: "full wording review" })
review_wording({ entryId: "s3:e0", goal: "full wording review" })
```

### Condensed results

```yaml
s2:e0:
  score: 82
  issues:
    s2:e0:b0: ["The opening verb is strong, but 'across four services' lands before the value."]
s2:e1:
  score: 79
  issues:
    s2:e1:b1: ["Two method clauses delay the result."]
s3:e0:
  score: 84
  issues:
    s3:e0:b0: ["The line repeats 'agent' three times."]
```

No Deep Research is appropriate here: this role judges language, not whether a
technical claim holds.

---

## Phase 5 — Whole-resume Narrative review

### Outer call

```ts
review_narrative({
  understanding: "an ML systems candidate moving from applied research into production agent infrastructure",
  goal: "judge the career story, ordering, gaps, and within-entry coherence"
})
```

### Result summary

```yaml
overallScore: 76
arc: "The resume moves coherently from ML research into production inference and agent infrastructure, but the project section currently reads as a side project rather than the continuation of that arc."
gaps: []
orderingNotes:
  - "Move Agent Runtime Suite closer to Experience or make its production use explicit."
withinEntries:
  - entryId: s2:e0
    coherence: { score: 80, detail: "The bullets describe one inspection system." }
    suggestedOrder: [s2:e0:b1, s2:e0:b0, s2:e0:b2]
```

This is resume-level but it is one diagnostic dimension. A request asking only
for this would still be a partial diagnosis, despite reading the whole resume.

---

## Phase 6 — Generate and present the report

### Coverage check before reporting

```yaml
eligibleEntries: 3
contentReviewed: 3
wordingReviewed: 3
narrative: done
format: done
jdMatch: no-posting
intendedCoverageComplete: true
```

### Outer call

```ts
generate_report({})
```

The tool reads diagnoses directly from `Session.state`, calculates scores and
coverage, asks a model to prioritize the improvement plan, then writes the full
report. The long form remains in `latestReport.full`; the Main Agent receives
the shorter structured report.

### ResumePilot

> The full review is complete: all three eligible entries were read for Content
> and Wording, Narrative and Format both ran, and JD Match was not applicable
> because no posting was attached.
>
> **Overall: 81/100** — Format 92, Content 75, Wording 82, Narrative 76.
>
> The strongest through-line is ML systems work moving from research into
> production inference and agent infrastructure. The biggest weakness is that
> several strong figures do not state the baseline or conditions that make
> them credible. The first priority is the NIO backlog result; six additional
> words could establish the comparison. Next, move the Agent Runtime project
> closer to Experience or make its real use explicit. Wording issues are mostly
> clause order and repetition rather than weak verbs.
>
> `/report` shows the complete brief. `/report --full` writes the evidence and
> reasoning behind each point.

### Stored state after the report

```yaml
state:
  resume: ResumeDocument
  entryDiagnoses: [s2:e0, s2:e1, s3:e0]
  wordingDiagnoses: [s2:e0, s2:e1, s3:e0]
  formatDiagnosis: present
  narrative: present
  jdMatch: absent
  suppliedFacts: []
  latestReport:
    summary: present
    coverage: present
    perEntry: present
    improvementPlan: present
    full: present
```

---

## Phase 7 — The user questions one finding

### User

> Why did you say the 71% is weak? The number is already there.

### Observable Main Agent decision summary

```yaml
next: answer from existing diagnosis
newReviewNeeded: false
reason: the question asks what an existing finding means; no new evidence or changed text was supplied
```

### ResumePilot

> The result itself is not weak. The Content reader scored its impact highly.
> The lower score is about what the 71% compares: backlog is affected by arrival
> rate, hardware, batching and the observation window. The line currently lets
> a reader see the improvement but not tell whether the before and after cases
> were comparable. That is why the recommended fix is small—identify the stable
> baseline or window, rather than add another result.

No specialist should be called here. Re-running Content with no new information
would spend money and likely return a differently worded version of the same
finding.

---

## Phase 8 — The user supplies new evidence

### User

> It was the same 200-vehicle daily queue, on the same edge hardware, measured
> over four weeks before and four weeks after. Batch size went from 1 to 8.

### Observable Main Agent decision summary

```yaml
newInformation: true
affectedTarget: s2:e0:b1
rolesToRerun:
  content: yes — the new facts directly change credibility and method judgement
  wording: no — the resume text has not changed
  narrative: no — career ordering/story has not changed
  format: no — the PDF has not changed
fullRerun: no
```

### Outer calls

```ts
record_fact({
  bulletId: "s2:e0:b1",
  fact:
    "The comparison used the same 200-vehicle daily queue and edge hardware, " +
    "measured over four weeks before and after; batch size changed from 1 to 8."
})

review_content({
  entryId: "s2:e0",
  understanding: "a vehicle-inspection workflow and inference optimisation role",
  supplied:
    "For s2:e0:b1, the same 200-vehicle daily queue and edge hardware were measured " +
    "for four weeks before and after; batch size changed from 1 to 8.",
  goal: "reassess only the credibility and method judgement changed by this evidence"
})
```

### Updated Content result

```yaml
entryId: s2:e0
overallScore: 82
s2:e0:b1:
  overallScore: 91
  impact: 90
  measurement: 92
  method: 90
  remainingIssue:
    what: "Put the stable comparison into the line; the conversation now establishes it, but the resume does not."
    costWords: 8
```

### ResumePilot

> That changes the judgement materially. The comparison is controlled well
> enough for the 71% to be meaningful; the remaining problem is only that the
> resume line does not carry the evidence you just supplied. I re-ran Content
> for the NIO entry only. Wording, Narrative and Format were not rerun because
> neither the document nor its ordering changed.

`record_fact` keeps the evidence in session state. However, relevant stored
facts are not automatically injected into future specialist briefings; the Main
Agent had to copy them into `supplied`. `[CURRENT GAP]`

The old `latestReport` also remains stored even though one diagnosis changed.
There is no freshness marker saying the report is stale. `[CURRENT GAP]`

---

## Phase 9 — Review a proposed revision without saving it

### User

> What if I change it to: “Reduced the four-week pending-inspection backlog by
> 71% by increasing edge-inference batch size from 1 to 8 across the same
> 200-vehicle daily queue.” Do not save it yet; just check this version.

### Observable Main Agent decision summary

```yaml
scope: one changed bullet, analysed inside entry s2:e0
roles:
  content: yes — check that the new line preserves the evidence and causal claim
  wording: yes — the user supplied new wording and asked whether it works
  narrative: no — one draft line does not require a whole-resume reread yet
  format: no — the working copy has not changed
commit: no — the user explicitly said not to save it
```

### Outer calls

```ts
review_content({
  entryId: "s2:e0",
  revisedBullets: [{
    bulletId: "s2:e0:b1",
    text: "Reduced the four-week pending-inspection backlog by 71% by increasing edge-inference batch size from 1 to 8 across the same 200-vehicle daily queue."
  }],
  supplied: "The before/after windows and hardware were comparable.",
  goal: "judge the proposed line without committing it"
})

review_wording({
  entryId: "s2:e0",
  revisedBullets: [{
    bulletId: "s2:e0:b1",
    text: "Reduced the four-week pending-inspection backlog by 71% by increasing edge-inference batch size from 1 to 8 across the same 200-vehicle daily queue."
  }],
  goal: "judge the proposed line without committing it"
})
```

### ResumePilot

> The draft fixes the credibility problem: result, time window, queue scale and
> method now appear together. Content rises because the comparison is visible.
> Wording still flags the double “by” and the line’s density. No full rerun was
> needed because this is an uncommitted draft affecting one entry.

The current tools nevertheless upsert the draft diagnoses into session state
even though `Session.state.resume` still contains the old bullet. A report
generated at this exact point could combine the old resume text with the draft
scores. `[CURRENT GAP]`

---

## Phase 10 — Commit the revision

### User

> Keep this shorter version instead: “Cut the four-week pending-inspection
> backlog 71% by batching edge inference from 1 to 8 for the same 200-vehicle
> daily queue.”

### Observable Main Agent decision summary

```yaml
userAcceptedText: true
action: update the session working copy
reviewNeededBeforeCommit: no — the user explicitly selected the text
```

### Outer call

```ts
apply_revision({
  bulletId: "s2:e0:b1",
  text: "Cut the four-week pending-inspection backlog 71% by batching edge inference from 1 to 8 for the same 200-vehicle daily queue."
})
```

### ResumePilot

> Saved that wording in the session working copy. The source PDF on disk is
> unchanged.

`apply_revision` currently changes the in-session bullet but does not invalidate
the old report, Format result, Narrative result, or diagnoses for the affected
entry. It also does not update `rawText`/word-count metadata. `[CURRENT GAP]`

---

## Phase 11 — Request a limited re-review after the edit

### User

> Recheck the edited entry and update the report, but do not rerun the other
> entries or the full career review.

### Observable Main Agent decision summary

```yaml
scope: entry s2:e0
roles:
  content: rerun — accepted text differs from the previously scored draft
  wording: rerun — accepted text differs from the previously scored draft
  format: rerun — deterministic and the bullet-level text signals changed
  narrative: reuse requested by user, but mark stale relative to the edit
otherEntries: reuse existing diagnoses
report: regenerate as a partial update, not a wholly fresh full diagnosis
```

### Outer calls

```ts
review_content({
  entryId: "s2:e0",
  supplied: "The before/after windows and hardware were comparable.",
  goal: "recheck the accepted revision only"
})

review_wording({
  entryId: "s2:e0",
  goal: "recheck the accepted revision only"
})

review_format({})

generate_report({})
```

### ResumePilot

> I refreshed Content and Wording for the edited NIO entry and reran the cheap
> deterministic format pass. The other entry readings were reused. I did not
> rerun Narrative, as requested, so its 76 score belongs to the previous
> wording rather than a fresh whole-resume read. The updated report should be
> treated as a partial refresh, not a newly completed full diagnosis.

The current `DiagnosisReport` cannot record which results were reused or stale,
and `generate_report` will mix them without warning. The response above is the
correct product behaviour, but the current state/report types cannot enforce
it. `[CURRENT GAP]`

---

## Phase 12 — Add a new resume-level instruction

### User

> One more constraint: I am targeting ML infrastructure roles now, not general
> applied ML. Do I need to rerun everything?

### Observable Main Agent decision summary

```yaml
newConstraint: target positioning changed
documentChanged: false
roles:
  narrative: rerun — the question changes how the resume-level arc should be read
  content: no — technical truth and bullet-level evidence did not change
  wording: no — language did not change
  format: no — file did not change
  jd-match: no — no concrete posting exists
fullRerun: no
```

### ResumePilot

> No. The new target changes the resume-level positioning, so Narrative is the
> relevant reread. It does not change whether the existing technical claims are
> supported, how the sentences are written, or how the PDF parses. Without a
> concrete posting, JD Match would be speculative.

### Outer call

```ts
review_narrative({
  understanding: "an ML systems candidate targeting ML infrastructure roles",
  supplied: "The target is ML infrastructure rather than general applied ML.",
  goal: "reassess positioning and ordering for the new target without rescoring bullets"
})
```

### Updated Narrative result

```yaml
overallScore: 84
arc: "The production inference and agent-runtime work now form a clear ML infrastructure direction."
orderingNotes:
  - "Place Agent Runtime Suite immediately after NIO so the infrastructure through-line is visible before research."
```

This is a resume-level partial re-review: it reads the whole document, but uses
only one role because only one judgement changed.

The target constraint currently has no dedicated persistent field. Passing it
as `supplied` works for this call, but a long conversation can lose it unless it
is incorrectly stored as a candidate fact. `[CURRENT GAP]`

---

## Human review checklist for this conversation

The reviewer should decide:

1. Was a full diagnosis justified in Phase 1, or should the agent have asked a
   separate confirmation despite the explicit request?
2. Was Content right to invoke Deep Research for the 71% claim?
3. Was the Deep Research question narrow enough to justify the extra latency?
4. Did the Content Agent integrate the finding rather than merely repeat it?
5. Were Wording and Narrative appropriately separated from Content?
6. Was it correct to answer Phase 7 from existing results without any new call?
7. Was Content-only re-review correct after the user supplied evidence?
8. Was Content + Wording the right scope for an uncommitted rewritten bullet?
9. After committing the edit, should Narrative have been rerun despite the
   user's request, or was a clearly labelled stale result acceptable?
10. Was Narrative-only re-review sufficient when the target changed to ML
    infrastructure without a concrete JD?
11. At any point did the system present reused or stale work as freshly
    completed?
12. Which decision summaries should be shown live to the user, and which should
    exist only in a review trace?

## Architecture gaps exposed by the sample

1. Main Agent role/scope rationale is not captured as a durable trace.
2. Inner Content → Deep Research → Search calls are not visible to hooks.
3. `pageRoom` is computed but never delivered to specialists.
4. `suppliedFacts` are not automatically selected into specialist briefings.
5. Draft review can store diagnoses against text that was never committed.
6. Accepted edits do not invalidate dependent diagnoses and reports.
7. Results have no input-version/provenance marker, so fresh and stale readings
   can be mixed in one report.
8. User preferences and targeting constraints have no persistent structured
   home distinct from factual claims.
9. Skills, Summary, section bullets and info-only entries lack a dedicated
   content/wording review path.
10. The current report can state coverage, but not whether coverage is fresh for
    the current working copy.
