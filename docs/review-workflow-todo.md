# Review Workflow TODO

> Baseline: PDF parsing restructure A0-B5 is complete (`84d7421`), and the
> detachable trace is complete and measured against one real conversation
> (`a003950` … `4d084d9`).
> Parser follow-ups live in `parse-restructure-plan.md`; this document contains
> only the remaining review, agent, report, and observability work.
>
> Everything in Part 2 was found by reading that run rather than by reading the
> code, which is what the trace was built for. Evidence:
> [`trace-long-conversation-review.md`](./trace-long-conversation-review.md) (behaviour),
> [`架构分析报告.md`](./架构分析报告.md) (structure),
> [`记录框架.md`](./记录框架.md) (how the trace is shaped).
>
> Human walkthrough: [`review-conversation-sample.md`](./review-conversation-sample.md)
>
> **The finish line.** Part 3 is what closes this project: one pre-registered,
> mechanically scored comparison against a general-purpose agent on the same
> résumés. Not "does it give better advice" — that is taste, and a good
> universal agent gives good advice. The claim that can be proved is narrower
> and stronger: *every statement it makes is anchored to a real line, carries
> no invented figure, and is accounted for — and all three can be checked
> without a human re-reading the résumé.*

## Primary objective: complete observability

Do not require the Main Agent to classify a request as `focused`, `full`, or
`ambiguous`. Those are useful labels for a human reviewer after the fact, not
runtime states the agent must choose correctly in advance.

Instead, record one correlated trace across the whole system so a reviewer can
see:

- what each agent could see at the moment it acted;
- which action, role, target, or tool it chose;
- the short stated purpose of that choice;
- what the call returned or why it failed;
- how the result changed later dispatches, the answer, and the report.

This applies equally to the Main Agent, every specialist, Deep Research, inner
tool calls, aggregation, and report generation. Do not replace human review of
these traces with a scripted judgement of whether an agent acted too early or
too late.

**The trace is a development instrument, not a product feature.** It is
attached only for an explicit debug run and absent otherwise. It stores the
model-visible prompts and results in full, so it is a second, high-sensitivity
copy of résumé and conversation data even though it remains separate from the
audit log. Gitignore is not its security boundary: owner-only files, a
session-scoped directory, explicit retention/deletion, and credential removal
are part of the first implementation.

**The first version does not record reasoning.** Runtime behaviour is unchanged
and providers may still carry reasoning state between turns, but the trace
writer omits `ParsedResponse.reasoning`, every historical `Message.reasoning`,
and provider `encrypted_content`. Visible prompts, messages, tool calls, model
content and results are enough for the first human review. If they are not,
reasoning summaries can be evaluated later as a separate feature.

## What is already true, measured against the code

Checked before planning, because three of the items below were written against
assumptions that turned out to be partly stale.

| Claim | State |
|---|---|
| A specialist failure can return an outer success | True — `review.ts:247` returns `{ success: true, data: found }` where `found` may be `undefined` |
| Inner tool calls bypass the hook pipeline | True, and deliberate: `sub-agent.ts:159` explains that re-running permission, audit and memory per inner call multiplies all three |
| There is no correlated trace | Was true; **fixed**. `AuditEntry` and `ExecutionRecord` are still flat by design — the trace is a separate facility, not a column added to them |
| `pageRoom` is not propagated deterministically | **Still true**, verified again after the trace work. `review.ts:66` defines a calculation, nothing calls it, `briefingFrom()` does not add it, `briefingContext()` does not render it. See item 10 |

Two further findings shape the work:

**The audit store is designed for the opposite purpose.** Its own comment says
so: *"How much of an argument or a result is kept. Enough to recognise, not to
reconstruct."* Arguments are sanitised and both sides truncated to 200
characters, because a log that stores résumé text verbatim becomes a second
copy of everything the user gave us. Reconstruction is exactly what a trace is
for. The two cannot share a store without one of them losing its point, so the
audit layer stays as it is and the trace is separate.

**The reference project has no prior art for this.** Its hook set is
`permission-check`, `input-sanitize`, `budget-check`, `audit-log`,
`result-compress`, `memory-trigger`, `progress-update`, `metric-emit` — the
same governance set this project already has, plus nothing. What is worth
taking from it is the hook *pattern*: a pluggable unit that the dispatcher does
not know the name of. A detachable trace is that pattern applied to a different
question.

### What was visible before the trace

```text
user message                                  not recorded
  main agent model call (prompt/response)     not recorded
    tool call                                 recorded, truncated to 200 chars
      review_content
        Content specialist
          briefing it received                not recorded*
          its model calls                     not recorded
          examine_technical_depth             not recorded
            Deep Research agent
              its model calls                 not recorded
              its inner tool calls            not recorded
          structured result it returned       recorded, truncated to 200 chars
```

\* `dispatch-trace` can print the briefing, but it is off by default, writes to
a console callback rather than to disk, covers four review tools, and prints
three fields.

Dispatching a specialist *is* a tool call, so that boundary is hooked. What is
invisible is everything on the far side of it.

### What is visible now

Measured on the real run, not asserted:

```text
user turn                                     recorded, with session id and turn number
  main agent model call                       recorded whole: prompt, full tool schemas, settings
    each retry attempt                        recorded, with its own structured error
    tool call                                 recorded whole — arguments as the model issued them
      hook decisions                          recorded when a hook refuses or rewrites
      review_content
        Content specialist                    own span; everything inside attributed to it
          dispatch                            role, remit, limits, and the briefing that crossed
          its model calls                     recorded whole
          examine_technical_depth             own span, so what it starts hangs off it
            Deep Research agent               nested under the tool call that asked
              its model calls                 recorded whole
              its inner tool calls            recorded whole, untruncated
          structured result it returned        recorded whole, and it is not the model's raw answer
  aggregation and report acceptance           findings offered, plan's set, point-by-point sources
```

Still outside: the startup parse, and slash commands. Both are item 11.
Reasoning is excluded by design, not by omission.

## Part 1 — Observability, done

### 1. Finish and commit the report path — done

Committed as `84d7421`. One canonical finding set written at full length, with
the brief derived from it; the quoting pass that hands the résumé to the report
writer is redacted like every other prompt. What remains open is making it
explicit in conversation when a selection is being shown rather than the whole
report, which belongs with item 7.

### 2. Add one detachable trace — done

Built as designed, across `a003950`…`dcc8594`. `Trace` has three methods, the
no-op is the default, and the switch is one directory
(`RESUMEPILOT_TRACE_DIR`). Spans propagate through `AsyncLocalStorage`. The
four boundaries below are all instrumented; a fifth is missing and is item 10.

What the design below did not anticipate, and what the implementation added:

- `event` takes a **factory**, so a switched-off run does not copy messages,
  gather tool schemas or snapshot answers and throw all of it away.
- Recording can never reach the work being recorded. A full disk used to arrive
  inside `query()`, be classified as a model failure, and be retried three
  times against the API. Both the factory and the sink are caught; the first
  loss goes to stderr and the rest are counted.
- Every retry attempt is its own event with its own structured error. `status`
  replaced `success`, because a call can return 200 and be wrong, and a run the
  user stopped is neither.
- `stage` distinguishes a budget ceiling, an unroutable task, a missing key and
  a provider refusal — all of which arrive as one exception.
- A span writes its own opening and closing records, so the tree rebuilds from
  the file rather than from memory. Measured on the real run: 107 spans, all
  closed, no unresolvable parent.
- The cap counts bytes, not characters, and keeps room for the line that says
  recording stopped. Default 2 GiB: it is there for an agent stuck in a loop,
  not as a budget for the file.
- The sweep needs two pieces of evidence before deleting anything (a run-shaped
  name and a `trace.jsonl` inside), because `dir` is whatever an environment
  variable pointed at.

The original design, for reference:

Not a new store bolted onto the audit tables, and not a hook set of its own.
One interface, a no-op by default, injected at the composition root. A trace
context carries the current span across asynchronous calls; a writer only
persists events when an explicit debug run enables it:

```ts
interface Trace {
  event(e: TraceEvent): void;
  span<T>(context: TraceSpan, run: () => Promise<T>): Promise<T>;
}
```

Use explicit propagation or Node `AsyncLocalStorage`; do not assume a JavaScript
call stack gives asynchronous work a parent automatically. This is also what
keeps future concurrent specialists in separate branches of the same trace.

Three call funnels capture execution, and one acceptance boundary captures
whether execution affected the product:

| Insertion point | Covers |
|---|---|
| `QueryEngine.query()` | **Every** model call — Main Agent, every specialist, Deep Research, the report writer. Nothing reaches a model any other way |
| `SubAgent.callTool()` | Every inner tool call made by a specialist or by Deep Research |
| The existing hook pipeline | Main-loop tool calls, which are already hooked — forward them whole rather than truncated |
| Diagnosis aggregation and report acceptance | Stable finding provenance: which specialist result became which accepted finding and which report point |

Order matters: build the minimal `TraceContext` and secure writer together with
the first `QueryEngine` instrumentation. `QueryEngine` is still the largest
yield and needs no per-agent instrumentation, but its current parameters do not
contain `sessionId`, actor, turn, target or parent id; without trace context it
would produce complete prompts that cannot be attributed to a run. Record a
query span, selected route/model, cache hit, retry attempts, final response or
failure.

```ts
interface TraceEvent {
  traceId: string;
  eventId: string;
  parentEventId?: string;
  sessionId: string;
  turn: number;
  actor: {
    kind: 'main' | 'specialist' | 'nested' | 'system';
    id: string; // e.g. content, deep-research, report-writer, history-summary
  };
  phase: 'input' | 'decision' | 'dispatch' | 'tool' | 'result' | 'failure' | 'output';
  target?: { sectionId?: string; entryId?: string; bulletId?: string };
  purpose?: string;
  promptVersion?: string;
  model?: string;
  tool?: string;
  /** The whole visible prompt and result, with reasoning and credentials omitted. */
  input?: unknown;
  output?: unknown;
  success?: boolean;
  durationMs?: number;
  inputTokens?: number;
  outputTokens?: number;
  sourceFindingIds?: string[];
  reportPointIds?: string[];
}
```

- A user turn opens the root span. Main Agent, tool, specialist and nested-agent
  boundaries open children; every QueryEngine and tool event inherits the
  current trace context.
- `purpose` is a short stated reason such as "check whether this technical
  metric is credible", not hidden chain-of-thought.
- Record prompt/config/model versions so behaviour can be compared across
  changes.
- Record full model-visible text without truncation, but serialise a deliberate
  request/response snapshot rather than raw runtime objects: exclude callbacks,
  `AbortSignal`, credentials, `Message.reasoning`, `ParsedResponse.reasoning`
  and provider opaque/encrypted reasoning state.
- Write JSONL into a gitignored, session-scoped directory with owner-only file
  permissions, a bounded retention policy, explicit deletion, and a size cap or
  content-addressed deduplication for repeated prompts. The trace is still
  sensitive even when every field was already sent to a model.
- Production injects the no-op, which costs nothing. Removing the facility
  entirely removes the trace context/writer and the four instrumentation
  boundaries above without changing agent behaviour.

### 3. Cover Main-Agent behaviour — done

`835b7ae`, with fixes in `dcc8594`. The turn is the outermost span and the only
place a session id and a turn number exist; everything below inherits both.
Main-loop tool calls are recorded whole, with the governance decisions beside
them: a call a hook refused, a call it rewrote before running, a result it
substituted after. Turn numbers come from a counter seeded by the session's
progress, because progress only moves after an answer and a turn that threw
would otherwise share its number with the next thing the user said.

The requirements as originally written:


For each Main-Agent turn, make visible:

- the user message and effective conversation/résumé context it received;
- the review tools and targets available at that point;
- every selected role and target, with its short stated purpose;
- which roles or targets it did not call, without requiring it to enumerate a
  formal "skipped" list on every turn;
- whether it clarified, reused existing findings, dispatched new work, or
  generated a report;
- the tool results it saw before making the next decision.

A human reviewer should be able to infer afterward whether the behaviour was a
focused review, full diagnosis, unnecessary expansion, insufficient coverage,
or premature report. The agent does not need to declare one of those labels.

### 4. Cover specialist and nested-agent behaviour — done

`446028c`, with fixes in `4633d04`. One span per agent, opened where the agent
starts, so the query engine's records arrive attributed without the engine
knowing anything about roles. Deep Research runs through the same class from
inside a specialist's tool call and therefore nests under it with no rule
naming it as special: the level is a fact about the caller. Each inner tool call
gets its own span, because adjacency in a file is not a link.

The hook boundary was not extended, as required below.

The requirements as originally written:


Apply the same trace to Content, Wording, Narrative, JD Match, and report
agents:

- exact target and final briefing received;
- prompt/config/model version;
- tool availability and each tool call;
- retries, validation failures, timeouts, and final structured result;
- which findings were produced and whether aggregation/reporting used them.

For Content Agent → `examine_technical_depth` → Deep Research → inner tools,
preserve the full parent-child chain.

**Do not extend the hook boundary to reach these calls.** The current
arrangement is deliberate and the reason is sound: a sub-agent is already
inside a call the gate approved, and re-running permission, audit and memory
per inner call would multiply confirmations, audit rows and memory writes. The
trace records; it does not govern. `SubAgent.callTool()` is where it attaches.

### 5. Add stable finding identity and provenance — done

`ad8a66e`, reworked in `0ec58b6`. Ids are minted once and unique
(`content_finding_<uuid>`, `report_point_<uuid>`), carried as objects so the
plan and the write-up cannot be handed different ids for the same reading. The
report writer cites findings by id; citations are checked against what was
offered, and an id that was never on the list is dropped and recorded.
Sections are filed under a target the model picks from a list — the heading is
built from the parse, because a heading a model writes is an employer, a title
and a date it re-derived from text it was shown.

Three records join the ends: what the readers raised, which set the plan
weighed, and point-by-point links from report point to source findings, plus
`unused`, `invented`, `unsourced` and `unknownTargets`.

Measured on the real run: 42 findings → 16 report points, 12 unused (10 of them
explicitly set aside by the plan), 2 invented citations rejected, 0 unsourced.
Existence is all that is checked; whether a point follows from the finding it
cites is a judgement nothing here is in a position to make.

The requirements as originally written:


Execution trace alone cannot answer whether a specialist result survived
aggregation or became a report claim. Today most specialist findings are
strings, and `FullReportPoint` has no stable id; a report-writing pass may
rewrite or merge the text, so text matching cannot provide that link.

- Give each accepted source finding a stable `findingId`, its source role and
  résumé target (`sectionId` / `entryId` / `bulletId` where applicable), and
  the trace event that produced it.
- Give each report point its own stable id and `sourceFindingIds`. A report
  point may combine several findings, but it must not invent a source id.
- Pass the allowlisted source ids through the report-writer contract and
  validate every returned id before accepting the report.
- Emit acceptance events at aggregation and report construction, using
  `sourceFindingIds` and `reportPointIds` to connect execution to product
  output.

This is provenance, not a requirement that wording remain unchanged from
specialist output to report prose.

## Part 2 — What the first traced run exposed

One conversation, four turns, 462 events, $0.10, all of it in
`tmp/trace/421eb049-…/trace.jsonl`. Nothing here came from reading the code.

The run's own summary: the hierarchy worked (main → tool → specialist → nested
researcher → web search, every prompt and result whole), the roles chosen were
reasonable, and eight failures were all wrong tool *targets* rather than model
or API failures. Those eight are what the rest of this part is about, because
each of them reached the user as silence.

### 6. Make every line addressable, or say it is not

**The finding.** The fixture's `PROJECTS` section parsed as `entries: 0,
infoLines: 4, section bullets: 6`. The text was not lost — six bullets sit
under the section with no owner, and they have ids (`s3:b0`…`s3:b5`). But
`render.ts:81` renders a section-level bullet as `- text` while an entry's
bullet renders as `- [id] text`: **the ids exist in the document and are
withheld from the model.** So the Main Agent could read six project bullets and
had no legal target for any of them, and put the project *titles* into
`entryId` instead — four dispatches rejected, six bullets never scored.

`render.ts`'s own comment is the argument against its behaviour: *"Ids are part
of the document rather than part of any one prompt … an agent that never gets
them cannot say 'these two repeat each other'."*

This is not a prompt problem. Telling the Main Agent "do not invent ids" while
leaving it nothing to name converts four visible failures into silence.

- Render section-level bullets with their ids, like every other line.
- Decide what may be reviewed. `review_content` takes an entry id; six ownerless
  bullets need either a section-level review target or a parse that rebuilds
  project entries. This is a product decision, not a bug fix: if a résumé writes
  its projects as description lines under one heading, is that a shape we read,
  or a shape we tell the candidate to change?
- The real résumé parses its projects into two entries with three bullets each
  under the same code, so this is a fragile shape rather than a general failure —
  and the anonymised fixture, which every parsing test uses, is the fragile one.
  Rebuild it to keep the structure it was anonymised out of, and add the missing
  case: a projects section whose entries carry bullets.

### 7. Make integrity see ownership, not just placement

`placedRows: 55/55`, every check empty, and the parse had just filed six
project bullets under a section and two project titles as prose. `placedRows`
asks whether a row was claimed once and labelled; it does not ask **who**
claimed it. Format scored the same document 100 with no blockers, which is
correct — ownership is not the format check's job — and that is precisely why
integrity has to carry it.

- Treat a section holding bullets, no entries, and heading-shaped prose lines as
  an anomaly with a name, not as a clean parse.
- A row placed under an owner that cannot be reviewed is not the same as a row
  placed correctly; the reconciliation should be able to say so.

### 8. Tighten target contracts so a model cannot miss them

Content passed `s2:e0:b0`…`b3` — bullet ids — into
`examine_technical_depth`'s `entryId`, four times, and Deep Research never ran
for the entry holding four bullets and every percentage in the résumé. On the
next entry it changed strategy by itself (entry id in the field, bullet id in
the question) and three researches ran.

The tool's description says `entryId: The entry being reviewed`, while the
Content prompt says every line has an addressable id. Both are true and the
combination is a trap.

- Prefer the interface fix over the prompt fix: take a `bulletId` when the
  question is about a bullet and resolve the parent entry in code.
- Audit every tool schema for a field whose legal values a model has to infer.
  Give the ones that matter a right and a wrong example.
- A rejected target should come back with what *would* have been legal, when
  that is knowable.

### 9. Make completion and failure observable

The report said `eligibleEntries: 2, contentReviewed: 2, wordingReviewed: 2` —
complete, by its own accounting — on a run where four dispatches failed and six
bullets were never scored. The Main Agent's prose did disclose it; a consumer
reading the structured coverage would not.

The shape below is the one previously planned, plus the category the run proved
missing: all three lists hold entry ids, and the material that failed here was
never an entry at all.

```ts
interface ReviewCoverage {
  eligibleEntries: number;
  content: { reviewed: string[]; failed: string[]; notRun: string[] };
  wording: { reviewed: string[]; failed: string[]; notRun: string[] };
  narrative: 'reviewed' | 'failed' | 'not-run' | 'not-applicable';
  format: 'reviewed' | 'failed' | 'not-run' | 'not-applicable';
  jdMatch: 'reviewed' | 'failed' | 'not-run' | 'not-applicable';
  /** Parsed, carrying content, and not reviewable as it stands. */
  unaddressable: Array<{ id: string; kind: 'section-bullet' | 'section-prose'; heading: string }>;
  /** Dispatches that named a target that does not exist. */
  rejectedTargets: Array<{ role: string; target: string; reason: string }>;
}
```

- Do not return a successful outer review with empty data after a specialist
  failure. `review.ts:247` still does this.
- A report requested as comprehensive either has complete coverage or states
  what failed, what did not run, and what could not be addressed.
- Show the same coverage in conversation, `/report` and exports, and say when
  conversation is showing a selection.
- Link coverage entries to the trace events that produced them.

### 10. Make the specialist briefing deterministic

- `pageRoom` is **still dead code**, verified again: `review.ts:66` defines the
  calculation and nothing calls it; `briefingFrom()` does not add it and
  `briefingContext()` does not render it. Derive it from `resume.meta` at
  dispatch so it does not depend on `review_format` having run.
- **A recorded fact can be silently lost.** Turn 2 wrote `800ms → 90ms` to
  `suppliedFacts` via `record_fact`. The readers of that field are
  `rewrite-bullet.ts:40` and the Main Agent's own context layer
  (`loop.ts:278`); `generate_report` does not read it, and dispatch does not
  either — a specialist sees it only if the Main Agent retypes it into
  `supplied`. Select relevant facts automatically at dispatch, and mark them as
  candidate-supplied rather than as something the résumé says.
- Keep `understanding` and `goal` as Main-Agent inputs: they express the user's
  intent, which nothing else has.
- Trace the final briefing actually sent, not the fields requested.
- A repeated review after corrections must use the updated facts.

### 11. Record the two entry points still outside the trace

The most consequential finding of the whole run — why the projects section had
no entries — **could not be produced from the trace**. Both reviewers had to
step outside it and re-run the parser by hand. That is the gap to close before
the next paid run, or the same class of problem will again be provable only by
accident.

- `app.ts` parses the résumé through a `ToolContext` with no trace, outside any
  turn span. Give the startup parse its own span and record the stage shapes:
  rows, boundaries, labels, the final section/entry/bullet tree, and integrity.
- Slash commands (`/report`, `/export`, `/new`) return from
  `commands.execute()` before `runMainAgent`, so they produce no span at all.
  Decide whether a command is part of the conversation's record; if it is,
  give it one.

### 12. Reduce what a model has to copy

Two of sixteen report points cited finding ids that did not exist, one of them a
mangled uuid (37 characters). Long unique ids are safe to store and expensive to
echo.

- Keep uuids internally; show the model a short alias (`c3`, `w7`) and map it
  back on acceptance. Uniqueness and copyability stop competing.
- Keep validating every citation regardless: the alias reduces the error rate,
  it does not remove the need to check.

## Part 3 — Proving it, then stopping

### 13. Verification before spending — done

Mechanical tests came first, deliberately: they cost nothing and catch the
structural faults that would otherwise be found by paying for a ten-step
conversation and reading a broken trace. 102 trace tests inside a suite of 938,
plus a mutation battery in which every guard has a test that turns red when the
guard is removed.

They also caught three prompts whose JSON example was not parseable — a range
where a value belongs, an inline `or`, and a trailing comma — in the two
prompts every bullet in a run passes through. A model copying the shape it was
told to copy exactly would have produced a reply nothing could read, and
`typeof !== 'number'` substitutes zero, which reads in a report as a verdict on
the line rather than as a parse that gave up.

What these tests do not verify is whether any agent's judgement was sensible.
That is what item 14 is for, and item 15 is how it is proved to anyone else.

### 14. Finish the conversation scenarios the first run missed

The first run covered steps 1–6 of the scenario below and stopped: the script
said "I rewrote that bullet" without supplying the text, the Main Agent
correctly asked for it rather than reviewing an imagined edit, and so **no
partial re-review and no report update were exercised at all.** The résumé was
also pre-loaded by the harness rather than named in chat.

Two runs, cheap, with a budget agreed first (the first cost $0.10):

- **A fact only.** Supply a figure, change nothing in the document, ask whether
  it changes the verdict. A new fact can change a judgement about a line whose
  text is identical, and the answer must say the figure is candidate-supplied
  rather than something the résumé states.
- **A real edit.** Paste the rewritten bullet, ask for a scoped re-review and an
  updated report. Watch what the Main Agent chooses to reuse and to rerun; do
  not script the route, and do not add branching rules to make it choose
  correctly. Then compare the two reports and check that nothing stale is
  presented as fresh.

Also exercise the path a user actually takes: name the file in chat rather than
pre-loading it, so the parse and the upload are inside the trace.

### 15. Prove it against a general-purpose agent

**This is the finish line.** A capable universal agent given a résumé writes
sensible advice, and arguing about whose advice reads better is unfalsifiable.
So the comparison is not about advice. It is about the three properties a
document used in hiring actually needs, each of which can be measured without
anyone re-reading the résumé:

1. every statement resolves to a real line;
2. no proposed rewrite contains a figure the candidate never gave;
3. what was not examined is stated.

**Arms**, on identical input — the text our parser extracted, so PDF reading is
not the variable:

| Arm | What it is |
|---|---|
| A | ResumePilot, full run, trace on |
| B | The same model, one call: résumé text plus "review this résumé and tell me what to fix". What a candidate actually does today |
| C | The same model, one call, our best hand-written prompt, web search available. Separates the scaffolding's contribution from the prompt's |

**Measures**, all mechanical:

| Measure | How |
|---|---|
| Anchoring | Share of findings that resolve to a real line of the document |
| **Fabricated figures** | Figures in proposed rewrites present in neither the résumé nor the supplied facts. The decisive one: this is the failure that puts a lie on a hiring document |
| Erased figures | Real figures a rewrite silently drops |
| Coverage | Share of scorable lines given a line-anchored judgement, and whether the arm *states* what it left out |
| Page budget | Net words the "do now" items add, against the room measured on the page |
| Claim checking | For claims needing outside knowledge, whether a source was consulted and named |
| Stability | Overlap of anchored line ids across two runs of the same input |
| PII egress | Whether contact details left the machine |

**Scoring honestly.** B and C answer in prose, so scoring them needs an
extractor that turns prose into `(claim, quoted line, proposed rewrite)`
triples — a model call, and therefore a bias risk. Rules: one extractor, one
fixed prompt, blind to which arm produced the text, run once per output, with a
hand-checked sample and the disagreement rate reported. **Pre-register the
measures and the pass bar before the first run**, so a win cannot be
retrofitted.

**Pass bar**, pre-registered: zero fabricated figures for A on every résumé;
anchoring at or above 95% for A; coverage stated by A every time. If B or C also
score zero fabrications, say so plainly and the claim narrows to anchoring,
coverage and checkability — which is still a claim a universal agent cannot
make, because its output cannot be verified at all without a human reading the
document.

**Inputs**: four or five résumés of different shapes — the real one, one whose
projects are description lines (the shape item 6 is about), one two-column, one
sparse entry-level — each run twice per arm. Roughly $0.10 per A run and a few
cents per B/C run, so the whole matrix is a few dollars. Report where B and C
win too: latency, cost, no setup, and one conversation instead of a pipeline.

### 16. Wrap up

Once item 15 has numbers: write them into the README with the method beside
them, remove dead commands and configuration, and stop. A fixed-résumé quality
eval with expected findings (the old item 11) is only worth building if the
project continues past this point.

## Later work

- Add role, entry, and independent inner-tool concurrency after trace and
  completion semantics are stable.
- Add a constrained rewrite flow that may use only résumé text and
  candidate-supplied facts.
- Cache repeated web searches with purpose-aware TTLs.
- Persist usage accounting if budgets are intended to survive restarts.
- Version or migrate session state before making new fields required.
- Clean stale commands, comments, README claims, dead configuration, and
  legacy history files.
- Improve context compression only when measured long conversations require it.

## Current quality risks

The root one — that intended work, actual calls, coverage and final findings
could not be followed as one causal chain — is **closed**. Risks 1 to 4 below
were symptoms of it and are gone; what the trace then showed is that the
remaining risks are about *addressing and accounting*, not about visibility.

1. ~~No single trace across the layers.~~ Closed.
2. ~~Deep Research and its inner calls opaque.~~ Closed: three layers deep,
   every prompt and result whole.
3. ~~Model prompts and responses recorded nowhere.~~ Closed.
4. ~~Findings and report points have no stable identity.~~ Closed, with
   point-by-point provenance and citation validation.
5. **Content the pipeline can read and cannot address.** Six project bullets
   with ids, rendered without them, reviewed by nobody. Item 6.
6. **Accounting that reads as complete when it is not.** Four rejected
   dispatches and six unscored bullets, and a coverage block that says 2/2.
   Items 7 and 9.
7. `pageRoom` is dead code and a recorded fact reaches a specialist only if the
   Main Agent retypes it. Item 10.
8. Two entry points are outside the trace, and one of them is the parse that
   decides everything downstream. Item 11.
9. Partial, failed, reused and complete work can still be presented too
   similarly, and no run has yet exercised reuse. Items 9 and 14.
