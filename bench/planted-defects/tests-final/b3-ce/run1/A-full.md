# Full review: resume.pdf

**86/100** — format 100 · content 80 · wording 81 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 13 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

**Problem**
[Important] Experience is not listed newest-first. *(no words)*

**Why**
The Eastern Robotics role from May 2023 to July 2024 appears above the Mobility Systems role from October 2024 to May 2025. That order makes the experience chronology harder to scan.

**How to change it**
Reverse the two Experience entries: list Mobility Systems Company before Eastern Robotics Co.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Rebuilt the diagnostics service’s monitoring dashboards around per-sensor error budgets, cutting mean time to detect incidents from 40 to 12 minutes.

**Problem**
[Important] The dashboard change alone does not establish that it caused mean time to detect to fall from 40 to 12 minutes. *(about 8 words to add)*

**Why**
Dashboards can improve visibility, but detection time also depends on alerting and whether responders act on the signals. Without a measurement basis, a reader may doubt that the dashboard rebuild produced the stated reduction.

**How to change it**
If measured under comparable conditions, add [how mean time to detect was measured before and after]; otherwise soften the causal claim so it reports the change without attributing it to the dashboards.

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet shifts from past tense to present tense in a role that ended in July 2024. *(no words)*
2. [Important] The line does not establish that the automated regression checks shortened release cycles to three days. *(about 8 words to add)*
3. [Important] “Shortened release cycles to 3 days” gives an endpoint but no starting duration. *(about 4 words to add)*

**Why**
1. “Maintained” describes completed work, but “adds” makes the automated checks sound like a current responsibility. That tense shift can make the timeline of your contribution unclear.
2. Checks can shorten cycles when manual testing or regression-related rework is a major bottleneck, but the line does not show that was the case. Without a baseline, a reader cannot tell how much the cycles changed or whether the checks drove that change.
3. A reader cannot tell how large the improvement was without the prior cycle time. A before-and-after comparison would make the result easier to interpret.

**How to change it**
1. Replace “adds” with “added.”
2. If measured, add [how the cycle time was measured before and after]; otherwise soften “shortened” to describe the three-day duration without claiming the checks caused it.
3. If accurate, add “from [prior cycle duration]” before “to 3 days.”

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The line does not establish that the listed changes removed the nightly backlogs. *(about 10 words to add)*
2. [Important] The bullet lists several contributions before linking them to the backlog result, obscuring which change caused it and what you owned. *(saves about 12 words if unrelated details are cut)*
3. [Polish] The backlog result comes after a long list of actions and responsibilities. *(no words)*

**Why**
1. An event queue can smooth bursts caused by cron scheduling, but it will not necessarily clear a backlog if downstream processing capacity is the bottleneck. The line does not identify the backlog’s cause or show that capacity or throughput changed.
2. A reader cannot tell whether the migration, logging rewrite, onboarding, or on-call work produced the improvement. That makes your technical contribution harder to understand and credit.
3. A scanning reader has to get through the logging, onboarding, and on-call details before reaching the result. Moving the outcome closer to the migration makes the result visible sooner.

**How to change it**
1. If verified, add [the before-and-after backlog measure] and [the evidence linking its removal to the migration]; otherwise qualify the causal claim.
2. Keep the change that removed the backlogs next to the outcome and clarify your ownership with [which change eliminated the nightly backlogs]. Cut the onboarding or on-call detail if it did not contribute to that result.
3. Move the backlog outcome directly after the migration clause, before the logging, onboarding, and on-call details.

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The phrase “cutting the pending-case backlog 68%” attributes the entire reduction to the triage branch based only on the eight-week period after launch. *(about 4 words to add)*

**Why**
A backlog can also change with incoming case volume, staffing, or other process changes. The timing alone does not establish that the branch caused the reduction, so a reader may question the strength of the impact claim.

**How to change it**
If a comparison supports the causal claim, add [how it was measured]; otherwise replace “cutting” with “the pending-case backlog fell” and retain “68% in the eight weeks after launch.”

*raised by content*

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] The phrase “single-request edge inference” conflicts with crediting dynamic batching for the latency reduction. *(about 6 words to add)*

**Why**
A lone request cannot benefit from being batched with other requests, and batching wait can add latency. INT8 may still reduce latency, but the line does not separate that effect from dynamic batching.

**How to change it**
If the 40% reduction was measured for single requests, attribute it to [the change measured to produce that reduction]; otherwise specify [the workload in which requests were batched], if accurate.

*raised by content*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The listed reward components do not establish the claimed 5% end-to-end latency reduction. *(about 6 words to add)*
2. [Important] The 5% latency change lacks a workload and baseline latency. *(about 6 words to add)*
3. [Important] The method-first opening leaves the actor responsible for the latency reduction unclear. *(about 1 word to add)*

**Why**
1. Accuracy, citation validity, and call count could affect latency indirectly, but they do not show that latency was measured or reduced. Without a comparable end-to-end measurement, a reader may doubt that the result follows from the training setup.
2. Without that context, a reader cannot tell what system or evaluation the improvement describes. A workload or baseline anchor would make the result easier to interpret.
3. The line begins with a list of training details rather than identifying who or what produced the result. A reader has to infer the actor, which makes the achievement harder to scan and credit.

**How to change it**
1. If measured, state [the comparison used for the 5% result]; otherwise remove the latency-reduction claim or describe it as an observed change without attributing causation.
2. Add [evaluated workload] and, if available, [baseline end-to-end latency] beside the 5% result.
3. Move the latency result to the opening and name the actor as [team, model, or system], if accurate; move the method details after the result.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] One scored rollout per prompt cannot provide the within-prompt comparisons used by standard GRPO. *(about 4 words to add if naming the method)*
2. [Important] The clause “so each update used exactly one scored trajectory” repeats the one-rollout detail without adding a distinct result. *(saves about 8 words)*

**Why**
1. Standard GRPO estimates relative advantages from multiple rollouts for the same prompt. With exactly one scored trajectory per prompt, there is no within-prompt group variation for that calculation.
2. The preceding phrase already says that training sampled one rollout per prompt. Repeating the same detail takes space without clarifying what became more stable.

**How to change it**
1. If this was standard GRPO, use multiple rollouts per prompt; if training truly used one rollout per prompt, name the actual estimator or training method instead.
2. Cut “so each update used exactly one scored trajectory.”

*raised by content, wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The move from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction. *(no words)*

**Why**
The decrease is 300 ms out of the 900 ms starting value, which is 33.3%. A 50% reduction would bring latency to 450 ms, so the stated percentage conflicts with the figures.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction,” or verify and correct the latency figures.

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The change from 71% to 83% is 12 percentage points, not a 12% increase. *(about 2 words to add)*

**Why**
Relative to the 71% starting rate, the increase is about 16.9%. The figures support a 12-percentage-point increase, and “12%” implies a different calculation.

**How to change it**
Replace “by 12%” with “by 12 percentage points.”

*raised by content, wording*

> Drove adoption of AI-first engineering practices

**Problem**
[Polish] The opening adoption claim is generic beside the concrete latency and task-completion results. *(saves about 9 words if cut; no words if moved)*

**Why**
The two quantified results form a coherent runtime story, while the adoption claim names no specific outcome. Keeping it first draws attention away from the more concrete evidence.

**How to change it**
Remove the opening adoption claim or move it after the latency and task-completion results.

*raised by narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Polish] The ongoing benchmark adoption result comes after a long clause. *(no words)*

**Why**
A scanning reader reaches the contribution and its adoption only after reading the full description of the metrics. Bringing the adoption result forward makes the impact visible sooner.

**How to change it**
Move the default-benchmark adoption result to the start of the bullet, before the metric details.

*raised by wording*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify what was correlated with what. *(about 7 words to add)*
2. [Polish] The correlation result is delayed behind methodological detail. *(no words)*

**Why**
1. Without the reference measure or ranking, a reader cannot tell what the correlation demonstrates about the evaluator. Naming that comparison would make the result interpretable.
2. The reader must pass the trial description before seeing the main finding. Foregrounding the correlation makes the result easier to notice.

**How to change it**
1. If accurate, add [the ground-truth degradation ordering or severity measure used for comparison].
2. Move “a Kendall correlation of 0.89” nearer the start of the bullet, before the trial details.

*raised by content, wording*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Polish] The upstream fixes appear after the instrumentation detail. *(no words)*

**Why**
The outcome is the clearest evidence of the defects’ resolution, but it is currently placed at the end. Moving it nearer the start helps a scanning reader find the result.

**How to change it**
Move “each was fixed upstream” nearer the start of the bullet, before the instrumentation detail.

*raised by wording*

## Already working

- s2:e1:b1: Pairs a measurable accuracy improvement with the evaluation set size.

## Set aside (6)

- s2:e1:b4: “Stabilised GRPO training” does not specify what became more stable.
- s3:e0:b0: The claim that AI-first practices accelerated delivery and improved downstream outcomes is not established by the line. (and 4 more like it)
- s2:e0:b1: The 420 ms-to-180 ms comparison does not specify that the p95 measurements used comparable workloads, environments, and definitions.
- s3:e1:b2: The phrase “with layered instrumentation” does not specify what instrumentation helped trace the defects.
- whole resume, dates: The dates show 10 months with no study or work listed, from the B.S. ending in June 2022 to the first listed role beginning in May 2023.
- s2:e1:b5: “who adopted them as the team’s runbook” is wordy and makes “them” refer back to two separate items; say the reviewers adopted the documentation as the runbook.
