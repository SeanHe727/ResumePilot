# Full review: resume.pdf

**84/100** — format 100 · content 74 · wording 81 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The claim that reducing latency from 900 ms to 600 ms is a 50% reduction is mathematically wrong.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The reduction is 300 ms, which is 33.3% of the original 900 ms. A 50% reduction from 900 ms would produce 450 ms, so the incorrect percentage can make the reader question the reliability of the resume's other metrics.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction"; alternatively, remove the percentage.
2. **The resume reports the 900 ms-to-600 ms latency change as a 50% reduction even though the figures show a 33.3% reduction.**
   > from 900 ms to 600 ms
   The inconsistency is visible both within the bullet and across the resume's presentation of quantitative results. A wrong percentage can undermine confidence in otherwise strong performance metrics, especially for a technical reader checking the arithmetic.
   **How to change it:** Change "50%" to "33.3%" or revise the latency figures so that they support the stated percentage.
3. **The increase from 71% to 83% is 12 percentage points, not 12%.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The absolute change is 12 percentage points, while the relative increase is approximately 16.9%. Using the wrong form makes the achievement mathematically inconsistent and can distract a technical reader from the strong benchmark result.
   **How to change it:** Replace "by 12%" with "by 12 percentage points"; if a relative increase is intended, use approximately "17%" instead.

## Already working

- s2:e0:b1: The from-and-to p95 figures make the performance improvement immediately credible and interpretable.
- s2:e0:b2: The bullet connects a concrete engineering intervention to a clear release-process outcome.
- s2:e1:b0: Leads with a concrete system contribution and a clear operational outcome.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

### The diagnostics-dashboard line states ownership and scope but not the operational result or the technical work that produced it.

> monitoring dashboards

A reader can see the assignment but cannot tell whether monitoring or on-call work improved incident detection, response time, reliability, or another outcome. "Across two major releases" measures duration of responsibility rather than contribution, while the dashboard and rotation wording gives little evidence of how the system was built or operated.

**How to change it:** Replace "Owned" with a concrete action such as "Built" or "Managed," state the on-call work directly, and add [telemetry, alerting, log aggregation, or incident-triage mechanism] plus [specific incident, detection, response, or reliability improvement].

*raised by content, wording · costs about 10 words to add*

### The sentence makes the event-queue migration, logging rewrite, onboarding, and on-call work collectively appear to have removed the nightly backlogs.

> which removed the nightly backlogs

A scanning reader may not know which engineering action produced the dispatch improvement. The strongest operational result is therefore separated from the migration that appears most directly connected to it, weakening the line's cause-and-effect evidence.

**How to change it:** Move "which removed the nightly backlogs that delayed morning dispatch" immediately after the event-queue migration, then keep the logging, onboarding, and on-call details afterward if they must remain.

*raised by content, wording · costs no words*

### The operational improvements in both backlog claims lack a baseline or endpoint that shows their magnitude.

> removed the nightly backlogs

The reader can see the direction of improvement but cannot judge how large the nightly backlog was or what the 68% pending-case reduction meant in practice. The first-quarter timeframe helps, but counts before and after the changes would make both results more concrete.

**How to change it:** Add [number of queued jobs or dispatch-delay frequency before and after the migration] and add [backlog count before launch] and [backlog count after the first quarter] to the 68% claim.

*raised by content · costs about 8 words to add*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

### The statement that single-rollout sampling stabilised GRPO training is technically incorrect as written.

> a single rollout per prompt

Standard GRPO computes relative advantages by comparing multiple completions for the same prompt. With one rollout, its reward equals the group mean, producing a zero relative advantage and no useful GRPO learning signal; singleton sampling therefore cannot, by itself, stabilise GRPO training.

**How to change it:** State that training used [multiple rollouts per prompt], or specify the [additional baseline, reward signal, or alternative policy-gradient method] that made single-rollout updates valid.

*raised by content · costs about 3 words to add*

### The 5% latency result is buried after dense method details and does not identify the affected end-to-end path or its baseline and endpoint.

> reduced end-to-end latency 5%

A scanning reader may miss the only outcome in the bullet. Without knowing whether the measurement covers inference, tool use, evaluation, or another workflow, and without an absolute before-and-after value, the operational meaning of 5% is difficult to judge.

**How to change it:** Move the latency result to the opening, name [what end-to-end latency measured], and add [baseline end-to-end latency] and [resulting end-to-end latency]. Keep the rollout, reward, and GRPO details after the result.

*raised by content, wording · costs about 6 words to add*

### The claim that GRPO training was stabilised gives no measured training outcome, and the single-rollout setup describes the method rather than proving the effect.

> Stabilised GRPO training

A reader cannot tell whether stability meant fewer failed runs, lower reward variance, faster convergence, or another observable change. Without a comparison against the prior setup, the claimed improvement has no evidence by which its scale can be judged.

**How to change it:** Replace or supplement "Stabilised" with [stability measure or training outcome] compared with [prior sampling setup or baseline].

*raised by content · costs about 6 words to add*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

### The claim that reducing latency from 900 ms to 600 ms is a 50% reduction is mathematically wrong.

> a 50% reduction

The reduction is 300 ms, which is 33.3% of the original 900 ms. A 50% reduction from 900 ms would produce 450 ms, so the incorrect percentage can make the reader question the reliability of the resume's other metrics.

**How to change it:** Replace "a 50% reduction" with "a 33.3% reduction"; alternatively, remove the percentage.

*raised by content, wording · costs no words*

### The increase from 71% to 83% is 12 percentage points, not 12%.

> by 12%

The absolute change is 12 percentage points, while the relative increase is approximately 16.9%. Using the wrong form makes the achievement mathematically inconsistent and can distract a technical reader from the strong benchmark result.

**How to change it:** Replace "by 12%" with "by 12 percentage points"; if a relative increase is intended, use approximately "17%" instead.

*raised by content, wording · costs no words*

### The line uses broad language for the work, its outcome, and its scale without identifying a concrete engineering change or measurement.

> AI-first engineering practices

A reader cannot tell what "AI-first engineering practices" involved or whether delivery became faster, more reliable, or easier for downstream teams. Without an adoption figure, baseline, or specific result, "Drove adoption" reads more like a claim of influence than evidence of platform engineering impact.

**How to change it:** Replace the broad method and outcome with [specific platform capability or workflow] and [delivery or downstream-team result], then add [adoption measure or before-and-after metric].

*raised by content, wording · costs about 8 words to add*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

### The metrics contribution does not explain how the eight metrics were implemented or integrated.

> 8 citation and faithfulness metrics

The default-benchmark outcome shows sustained adoption, but a reader still cannot distinguish substantive metric development or adaptation from simply submitting changes. One technical implementation detail would make the contribution more credible without weakening the clear adoption result.

**How to change it:** After identifying the eight metrics, add [how the metrics were implemented, adapted, validated, or integrated].

*raised by content · costs about 5 words to add*

## Across the whole résumé

### The Experience entries are not ordered newest-first.

> Eastern Robotics Co. | Junior Software Engineer

Eastern Robotics Co. is listed before Mobility Systems Company even though the internship ran from October 2024 to May 2025 and the robotics role ended in July 2024. A recruiter scanning from the top may therefore miss the more recent experience or read the chronology incorrectly.

**How to change it:** Move the Mobility Systems Company entry above Eastern Robotics Co. within Experience.

*raised by narrative · costs no words*

### The resume reports the 900 ms-to-600 ms latency change as a 50% reduction even though the figures show a 33.3% reduction.

> from 900 ms to 600 ms

The inconsistency is visible both within the bullet and across the resume's presentation of quantitative results. A wrong percentage can undermine confidence in otherwise strong performance metrics, especially for a technical reader checking the arithmetic.

**How to change it:** Change "50%" to "33.3%" or revise the latency figures so that they support the stated percentage.

*raised by narrative · costs no words*

### The resume describes the change from 71% to 83% as a 12% increase even though it is a 12-percentage-point increase.

> from 71% to 83%

The figures support either a 12-percentage-point increase or an approximately 16.9% relative increase. Leaving the current wording makes the quantitative claims inconsistent and may cause a technical reader to question the precision of the benchmark reporting.

**How to change it:** Change "12%" to "12 percentage points," or use approximately "16.9%" if the relative increase is intended.

*raised by narrative · costs no words*

## Set aside (9)

- s3:e0:b1, s3:e0:b2: The line says "from 900 ms to 600 ms, a 50% reduction." (and 1 more like it)
- s2:e1:b0, s2:e1:b2: The method is compressed into "with ML-extracted features," without showing what part of the diagnostic triage branch you engineered. (and 1 more like it)
- s2:e1:b5: The phrase "who adopted them as the team’s runbook" shows acceptance but does not specify the scope or evidence of adoption.
- s3:e1:b1, s3:e1:b2: The phrase "with a Kendall correlation of 0.89" does not say what the evaluator's scores were correlated against. (and 2 more like it)
- s3:e0:b1, s3:e0:b2: "reusing completed sub-agent answers" is imprecise because it does not clearly identify whether answers were cached, deduplicated, or reused across calls. (and 1 more like it)
- s2:e0:b1, s2:e0:b2: "Keep it there" does not clearly identify whether the cache, batching, or the load tests maintained the 180 ms latency; replace it with "prevent regressions" or a specific maintenance result. (and 1 more like it)
- s2:e1:b4, s2:e1:b5: The phrase "so each update used exactly one scored trajectory" restates the preceding method rather than adding a distinct result; tighten it to "Stabilised GRPO training on sparse rewards by using one rollout per prompt in each update." (and 1 more like it)
- s3:e1:b0, s3:e1:b1, s3:e1:b2: "where they now run" makes the antecedent of "they" slightly ambiguous between the metrics and the framework. (and 5 more like it)
- format: Experience is not newest-first: "Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024" is listed above the more recent "Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025".
