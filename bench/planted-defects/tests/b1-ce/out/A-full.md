# Full review: resume.pdf

**82/100** — format 100 · content 68 · wording 84 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The latency percentage is arithmetically incorrect.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The reduction from 900 ms to 600 ms is 300 ms, or 33.3% of the 900 ms baseline, not 50%. A technical reader can check this immediately, so the error may make the other measurements in the résumé less credible.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction" or "a 300 ms reduction"; keep the stated endpoint values if they are correct.
2. **The task-completion change is labeled as a relative percentage when it is a percentage-point increase.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The stated endpoints rise from 71% to 83%, which is 12 percentage points but approximately a 16.9% relative increase. Leaving "by 12%" beside those endpoints can make a technical reader think the calculation is wrong or that the benchmark is being presented imprecisely.
   **How to change it:** Replace "by 12%" with "by 12 percentage points"; alternatively, write the relative result as "+16.9% relative".
3. **The single-rollout GRPO claim is technically wrong or unsupported and lacks a stability measure.**
   > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
   Standard GRPO needs within-prompt groups to form relative advantages; with one scored trajectory, that comparison collapses or requires an unstated alternative estimator and baseline. The line also gives no definition of “stabilised,” so a reader cannot tell whether loss variance, failed updates, or reward consistency improved.
   **How to change it:** Replace the claimed mechanism with the actual stabilization method and add [stability metric] versus [prior configuration]. If single-rollout sampling was used, identify the alternative baseline, normalization, and training method; otherwise correct the rollout count. Remove "so each update used exactly one scored trajectory" because it repeats the first clause.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

### The load-test wording incorrectly implies that tests directly maintained the 180 ms latency.

> to keep it there

Load tests expose regressions under representative load, but they do not by themselves keep production latency at a target. A technical reader will ask whether a deployment gate, monitoring alert, or remediation process actually controlled future latency.

**How to change it:** Replace "to keep it there" with "to detect latency regressions"; if a control prevented regressions, name it as [deployment gate or monitoring alert].

*raised by content, wording · costs saves about 3 words*

### The dashboard and on-call bullet describes responsibility without showing an operational result or concrete scale.

> Owned the diagnostics service’s monitoring dashboards

“Owned” and “the on-call rotation that used them” tell the reader what was assigned to you, but not whether the dashboards improved detection, resolution, or incident handling. With no metric or other anchor, the reader cannot judge the effectiveness or scale of the ownership, and the on-call responsibility repeats the later bullet.

**How to change it:** Replace the duty framing with the dashboard or operational change, add [reduction in detection or resolution time], [services or alerts covered], or [incidents handled], and retain the on-call detail only in the stronger supporting bullet rather than repeating it.

*raised by content, wording, narrative · costs about 6 words to add; saves about 4 words*

### The dashboard and fleet-migration bullets repeat on-call ownership and the longer fleet bullet chains too many secondary actions around its result.

> taking over the weekend on-call rotation

The résumé presents on-call responsibility in both the dashboard bullet and the fleet-migration bullet, which dilutes the strongest version of that ownership. The fleet bullet also places rewriting, onboarding, and weekend coverage in one clause, making the dispatch outcome harder to identify.

**How to change it:** Keep the strongest on-call statement in one bullet and make the other line support it with the operational result. Split or trim the secondary actions around the fleet migration, and move the dispatch outcome immediately after the migration result.

*raised by wording, narrative · costs saves about 8 words*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

### The single-rollout GRPO claim is technically wrong or unsupported and lacks a stability measure.

> Stabilised GRPO training

Standard GRPO needs within-prompt groups to form relative advantages; with one scored trajectory, that comparison collapses or requires an unstated alternative estimator and baseline. The line also gives no definition of “stabilised,” so a reader cannot tell whether loss variance, failed updates, or reward consistency improved.

**How to change it:** Replace the claimed mechanism with the actual stabilization method and add [stability metric] versus [prior configuration]. If single-rollout sampling was used, identify the alternative baseline, normalization, and training method; otherwise correct the rollout count. Remove "so each update used exactly one scored trajectory" because it repeats the first clause.

*raised by content, wording · costs about 8 words to add; saves about 8 words*

### The end-to-end latency claim does not establish that GRPO caused the result and gives too little measurement context.

> reduced end-to-end latency 5%

Serving configuration, batching, hardware, or software changes could explain a 5% latency difference, so a technical reader would need an ablation or controlled comparison before accepting the causal attribution. The relative figure alone also hides the actual latency scale and the workload or measurement window.

**How to change it:** Move "reduced end-to-end latency 5%" to the front, then either remove the GRPO attribution or add [controlled comparison or ablation result]. Add [latency before the change], [latency after the change], and [comparable workload or evaluation window], and distinguish this end-to-end result from the single-request edge-inference result in the adjacent bullet.

*raised by content, wording, narrative · costs about 8 words to add; no words for the move*

### The edge-inference latency claim lacks baseline and workload details, and “single-request” is ambiguous beside dynamic batching.

> single-request edge inference

A p95 percentage is hard to interpret without before-and-after values and the request rate or concurrency used for both measurements. Dynamic batching can improve throughput under concurrent traffic but can add delay to an isolated request, so the current wording leaves the measurement condition unclear.

**How to change it:** Replace "single-request" with [the actual workload condition] and add [p95 before the change], [p95 after the change], and [request rate or concurrency]. State whether the result came from INT8, dynamic batching, or both.

*raised by content · costs about 8 words to add*

### The pending-backlog percentage needs its starting count and comparison window.

> cutting the pending-case backlog 68%

The 68% figure identifies when it was observed but not the baseline used to calculate it. Without the initial and final counts, a recruiter cannot judge the operational scale or reproduce the result.

**How to change it:** Add [starting pending-case count] and the corresponding ending count, or at least the starting count, and name [comparison period] alongside "in the first quarter after launch."

*raised by content · costs about 6 words to add*

### The runbook adoption claim shows implementation but not operational effect or scale.

> the team’s runbook

A reader can see that the reviewers accepted the abstention and escalation rules, but cannot tell whether triage became faster or more consistent or how broadly the runbook was used. Adoption alone is weaker evidence than an operational result, user count, usage period, or case volume.

**How to change it:** Add [measured operational outcome] if tracked; otherwise add [number of reviewers or team members], [period of use], or [number of cases handled under the runbook].

*raised by content · costs about 5 words to add*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

### The latency percentage is arithmetically incorrect.

> a 50% reduction

The reduction from 900 ms to 600 ms is 300 ms, or 33.3% of the 900 ms baseline, not 50%. A technical reader can check this immediately, so the error may make the other measurements in the résumé less credible.

**How to change it:** Replace "a 50% reduction" with "a 33.3% reduction" or "a 300 ms reduction"; keep the stated endpoint values if they are correct.

*raised by content, wording, narrative · costs no words*

### The task-completion change is labeled as a relative percentage when it is a percentage-point increase.

> by 12%

The stated endpoints rise from 71% to 83%, which is 12 percentage points but approximately a 16.9% relative increase. Leaving "by 12%" beside those endpoints can make a technical reader think the calculation is wrong or that the benchmark is being presented imprecisely.

**How to change it:** Replace "by 12%" with "by 12 percentage points"; alternatively, write the relative result as "+16.9% relative".

*raised by content, wording, narrative · costs no words*

### The adoption and impact claim is too broad and has no measurable result.

> AI-first engineering practices

“AI-first engineering practices” does not tell a hiring reader what was introduced, while “accelerating delivery and improving outcomes for downstream teams” does not identify a measurable change or its beneficiaries. The line therefore asserts broad ownership without showing what was implemented or how large the contribution was.

**How to change it:** Replace the broad label with [the specific practices introduced], and replace the vague outcome with [adoption count or rate] plus [delivery-time or downstream result]. Remove "improving outcomes for downstream teams" if no concrete result is available.

*raised by content, wording · costs about 8 words to add*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

### The evaluator-correlation claim does not define either the degradation scale or the variable paired with the evaluator score.

> a Kendall correlation of 0.89

A Kendall correlation is meaningful here only if the perturbations have an independently ordered severity and the other variable is clearly identified. Without a controlled baseline and defined degradation levels, the 0.89 figure may reflect arbitrary edits rather than evidence that the evaluator tracks quality loss.

**How to change it:** Name [the evaluator score] correlated with [the independently defined degradation level or quality score], and add [baseline report and defined degradation levels or perturbation protocol] for the removals.

*raised by content · costs about 10 words to add*

### The upstream-contribution claims do not establish the verified adoption boundary or the integration and validation work.

> default benchmark for every release

“Upstreamed” shows that code was contributed, but does not prove that the metrics are enabled in the maintained default benchmark for every release. The bullet also gives no evidence of how the metrics were integrated or tested, so the technical depth of the contribution is difficult to assess.

**How to change it:** Replace the broad adoption claim with [verified release, version, or number of releases] in which the metrics ran in the maintained default benchmark, and add [integration or test work used to validate the metrics].

*raised by content · costs about 8 words to add*

### The defect-diagnosis wording is awkward and the upstream-fix claim does not show what improved.

> fixed upstream

Defects affect stability, sourcing, and parameter handling; they are not literally “in” those qualities. Saying they were “fixed upstream” also uses project jargon and tells the reader where the change went without showing whether a failing behavior was restored or a released version adopted it.

**How to change it:** Replace "structural pipeline defects in stability, sourcing and parameter handling" with "structural pipeline defects affecting stability, sourcing, and parameter handling," and replace "fixed upstream" with "fixed in the upstream project." Add [failing behavior or test that passed] or [released version containing the fixes].

*raised by content, wording · costs about 6 words to add*

## Across the whole résumé

### Experience is not listed newest-first.

> Aug 2022 - Jul 2024

Eastern Robotics Co. appears above the more recent Mobility Systems Company internship, so the reader encounters an older role before the later experience. That makes the career progression harder to scan and conflicts with the expected reverse-chronological structure.

**How to change it:** Move the Mobility Systems Company entry, dated Oct 2024–May 2025, above the Eastern Robotics Co. entry, dated Aug 2022–Jul 2024.

*raised by file, narrative · costs no words*

### The overlap between the internship and research project should be explained if both were concurrent work.

> Feb 2025 - Jul 2025

The dates show the Research-Agent Evaluation Framework project overlapping the Mobility Systems Company internship from February through May 2025. Without a label, a reader may wonder whether the dates are inaccurate or whether the project was part-time, academic, or open source alongside the internship.

**How to change it:** Add a short label such as [part-time], [academic], or [open source] to the Research-Agent Evaluation Framework entry if that accurately describes the concurrent work.

*raised by narrative · costs about 2 words to add*

### The operational-outcome bullets need their results moved forward and quantified across the two roles.

> removed the nightly backlogs

“Removed the nightly backlogs that delayed morning dispatch” is buried after several unrelated actions, while the 68% pending-case reduction lacks its starting count and comparison period. A scanning reader can miss the stronger operational outcomes and cannot judge their scale.

**How to change it:** Move the dispatch outcome earlier in the Eastern Robotics bullet and add [number of backlog items], [dispatch-delay reduction], or [mornings no longer delayed]. Add [starting pending-case count] and [comparison period] to the Mobility Systems bullet.

*raised by content, wording · costs about 8 words to add*

## Set aside (7)

- s2:e0:b2: "shortened release cycles from 2 weeks to 3 days" gives the endpoints but not what the cycle-time measurement covers.
- s2:e0:b3: "while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation" chains unrelated actions under one "while" clause and makes the primary accomplishment difficult to identify.
- s3:e1:b1: "Showed the evaluator tracks injected degradation" is awkward because "tracks" can be read as a noun or as a present-tense verb; corrected form: "Demonstrated that the evaluator tracked injected degradation."
- s3:e1:b2: "with layered instrumentation" does not identify what was instrumented or how the traces localized the defects.
- whole resume, dates: Jun 2022 to Aug 2022: two months between the bachelor's degree and the first full-time role. (and 1 more like it)
- skills: SQL — no experience or project bullet shows database querying or SQL development. (and 4 more like it)
- s3:e0:b2: "their partial context" has an unclear antecedent because the nearest subject is "failed sub-agent calls" rather than the sub-agents supplying the context.
