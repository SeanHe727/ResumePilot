# Review Workflow TODO

> Baseline: PDF parsing restructure A0-B5 is complete, and the report path is
> committed, through `84d7421`.
> Parser follow-ups live in `parse-restructure-plan.md`; this document contains
> only the remaining review, agent, report, and observability work.
>
> Human walkthrough: [`review-conversation-sample.md`](./review-conversation-sample.md)

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
attached when something needs looking at and absent otherwise, it stores
prompts and results in full, and it has nothing to do with the audit log.

## What is already true, measured against the code

Checked before planning, because three of the items below were written against
assumptions that turned out to be partly stale.

| Claim | State |
|---|---|
| A specialist failure can return an outer success | True — `review.ts:247` returns `{ success: true, data: found }` where `found` may be `undefined` |
| Inner tool calls bypass the hook pipeline | True, and deliberate: `sub-agent.ts:159` explains that re-running permission, audit and memory per inner call multiplies all three |
| There is no correlated trace | True. `AuditEntry` and `ExecutionRecord` are flat: `sessionId` + `toolName`, no trace id, no parent, no actor |
| `pageRoom` is not propagated deterministically | **False, already done.** `review.ts:66` derives it from the session's `formatDiagnosis`. Only `suppliedFacts` is still copied by the Main Agent |

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

### What is visible today

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

## Immediate work

### 1. Finish and commit the report path — done

Committed as `84d7421`. One canonical finding set written at full length, with
the brief derived from it; the quoting pass that hands the résumé to the report
writer is redacted like every other prompt. What remains open is making it
explicit in conversation when a selection is being shown rather than the whole
report, which belongs with item 6.

### 2. Add one detachable trace

Not a new store bolted onto the audit tables, and not a hook set of its own.
One interface, a no-op by default, injected at the composition root:

```ts
interface Trace {
  event(e: TraceEvent): void;
}
```

Three insertion points cover the entire system, because the call graph already
funnels through three places:

| Insertion point | Covers |
|---|---|
| `QueryEngine.query()` | **Every** model call — Main Agent, every specialist, Deep Research, the report writer. Nothing reaches a model any other way |
| `SubAgent.callTool()` | Every inner tool call made by a specialist or by Deep Research |
| The existing hook pipeline | Main-loop tool calls, which are already hooked — forward them whole rather than truncated |

Order matters: `QueryEngine` first. It is the single largest yield and it needs
no per-agent instrumentation. Adding correlation ids before there are events to
correlate builds an empty skeleton.

```ts
interface TraceEvent {
  traceId: string;
  eventId: string;
  parentEventId?: string;
  sessionId: string;
  turn: number;
  actor:
    | 'main-agent'
    | 'content'
    | 'wording'
    | 'narrative'
    | 'format'
    | 'jd-match'
    | 'deep-research'
    | 'report-writer';
  phase: 'input' | 'decision' | 'dispatch' | 'tool' | 'result' | 'failure' | 'output';
  target?: { sectionId?: string; entryId?: string; bulletId?: string };
  purpose?: string;
  promptVersion?: string;
  model?: string;
  tool?: string;
  /** The whole prompt and the whole result. This is the point of the trace. */
  input?: unknown;
  output?: unknown;
  success?: boolean;
  durationMs?: number;
  inputTokens?: number;
  outputTokens?: number;
  affectedFindingIds?: string[];
}
```

- Parent-child comes from the call stack rather than from bookkeeping: a
  `SubAgent` run already has a boundary, so it opens a span and everything
  beneath it inherits the id.
- `purpose` is a short stated reason such as "check whether this technical
  metric is credible", not hidden chain-of-thought.
- Record prompt/config/model versions so behaviour can be compared across
  changes.
- Written as JSONL to a gitignored directory. No redaction and no truncation —
  a trace that cannot reconstruct what happened answers nothing.
- The privacy line already in place is unaffected: it governs what is *sent to
  a model*, and the trace records what was already sent.
- Production injects the no-op, which costs nothing. Removing the facility
  entirely is deleting three call sites.

### 3. Cover Main-Agent behaviour

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

### 4. Cover specialist and nested-agent behaviour

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

### 5. Make specialist briefing deterministic

- ~~Populate `pageRoom` from the parsed document~~ — already done in
  `review.ts:66`.
- Select relevant `suppliedFacts` from session state automatically; do not rely
  on the Main Agent copying them into `supplied` on every dispatch. This is the
  only half of this item still outstanding.
- Keep `understanding` and `goal` as Main-Agent inputs because they express the
  user's conversational intent.
- Trace the final briefing actually sent, not merely the fields requested by
  the Main Agent.
- Ensure a repeated review after user corrections uses updated facts and
  constraints rather than stale briefing data.

### 6. Make completion and failure observable

Track actual coverage independently from conversational prose. The existing
`ReportCoverage` counts (`contentReviewed: number`) cannot distinguish "not
run" from "ran and failed", which is the distinction that matters:

```ts
interface ReviewCoverage {
  eligibleEntries: number;
  content: { reviewed: string[]; failed: string[]; notRun: string[] };
  wording: { reviewed: string[]; failed: string[]; notRun: string[] };
  narrative: 'reviewed' | 'failed' | 'not-run' | 'not-applicable';
  format: 'reviewed' | 'failed' | 'not-run' | 'not-applicable';
  jdMatch: 'reviewed' | 'failed' | 'not-run' | 'not-applicable';
}
```

- Do not return a successful outer review with empty data after a specialist
  failure. `review.ts:247` does this today.
- Do not let failed roles disappear and make a run look intentionally partial.
- Link coverage changes to the trace events that produced them.
- A report requested as comprehensive must either have complete coverage or
  state what failed or was not run.
- Show the same coverage in conversation, `/report`, and exported reports, and
  say when conversation is showing a selection rather than the whole report.

## Verification before spending

### 7. Add mechanical trace and workflow tests

Moved ahead of the live run: these use stubbed agents, cost nothing, and catch
the structural faults that would otherwise be discovered by paying for a
ten-step conversation and reading a broken trace.

- Every agent/tool event has one trace id and a valid parent chain.
- The trace can reconstruct dispatch order, results, retries, and failures.
- Prompt versions and the effective context are inspectable.
- **The trace reconciles against itself.** Format checks are not enough. What
  will actually go wrong is semantic: five specialists dispatched and four in
  the trace; an `affectedFindingIds` pointing at a finding the report does not
  contain. This is the same failure the parser's integrity pass exists for —
  every layer did what it was asked and the loss lives in the seam between
  them. Record dispatched vs completed vs failed, and require every
  `affectedFindingIds` to resolve to a finding that reached the report.
- Specialist failure remains visible in coverage and report generation.
- Report citations and IDs resolve to the parsed résumé.
- Conversation, `/report`, and export use one canonical finding set.
- PDF → diagnosis → follow-up → partial rerun → report works through the
  composition root.

These tests verify mechanics, not whether an agent's judgement was sensible.

## Real long-conversation evaluation

### 8. Run one realistic end-to-end user scenario

**This spends real money and needs a budget agreed before it runs.** A four-agent
diagnosis measured at roughly $0.13–0.17 and ten minutes; this scenario is
multi-specialist with Deep Research and a second review pass, so expect several
times that per run, and expect to run it more than once before the trace is
worth reading.

Exercise the system as a user would, using real agents and tools rather than a
script that preselects the correct route:

1. User provides a PDF in chat.
2. Main Agent parses and reads it.
3. Main Agent decides what diagnosis work to start.
4. Multiple specialists inspect the résumé.
5. Content Agent decides whether to invoke Deep Research and its inner tools.
6. Results are aggregated into a report.
7. User reads the report, questions findings, and supplies missing facts or new
   constraints.
8. Main Agent decides what can be reused and what needs to run again.
9. User changes one bullet, entry, or section and requests another review.
10. The system performs an appropriately scoped follow-up and updates the
    report without pretending stale work is fresh.

The output of this exercise is the conversation, final report, coverage, and
complete hierarchical trace.

### 9. Review the trace manually

Use the trace to answer:

- What context did the Main Agent have when it selected each role?
- Did it widen or narrow the request at a sensible moment?
- Did specialists receive the right facts, goals, and page constraints?
- Why did Content call or skip Deep Research?
- Did inner-tool results actually affect the Content diagnosis?
- Were any failures hidden by aggregation?
- Was a report generated before the required work finished?
- After user corrections, was unaffected work reused and affected work rerun?
- Were cost and latency proportionate to what the user asked?

Only after reviewing real traces should routing prompts, confirmation policy,
or automatic full-versus-focused rules be changed.

### 10. Build diagnosis-quality evals after tracing works

- Maintain a small fixed-résumé set with expected important findings.
- Evaluate omissions, unsupported claims, citation/ID accuracy, and run-to-run
  score variance.
- Compare prompt changes against the eval set before accepting them.
- Use traces to locate whether a failure came from context, routing, briefing,
  specialist reasoning, nested tools, aggregation, or report writing.

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

**The root one.** Intended work, actual calls, coverage, and final findings
cannot be followed as one causal chain. Most of what follows is a symptom of
it, which is why the trace comes before any change to routing or policy.

1. There is no single trace across Main Agent, specialists, nested agents,
   tools, aggregation, and reporting.
2. Deep Research and its inner tool calls are entirely opaque — three layers
   deep and not one of them recorded.
3. Model prompts and responses are recorded nowhere at all. The audit log stops
   at the tool boundary and keeps 200 characters of each side.
4. Candidate-supplied facts are not propagated deterministically.
5. Partial, failed, reused, and complete work can be presented too similarly.
6. Report surfaces are not yet guaranteed to render one canonical finding set.
