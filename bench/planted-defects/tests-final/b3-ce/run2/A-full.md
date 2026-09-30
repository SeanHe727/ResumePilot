# Full review: resume.pdf

**87/100** — format 100 · content 81 · wording 80 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 10 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024; Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

**Problem**
[Important] Experience is not listed newest first: the October 2024–May 2025 internship appears below the May 2023–July 2024 role. *(no words)*

**Why**
Readers expect the most recent experience first, so the current order makes the timeline harder to scan. The entries’ dates show that Mobility Systems Company is the more recent role.

**How to change it**
Move the Mobility Systems Company entry above Eastern Robotics Co. so the Experience section runs newest first.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
[Error] “adds” is present tense in a role that ended in July 2024, and the line does not establish that the checks produced the three-day release cycle. *(no words)*

**Why**
The role is described in the past tense, so “adds” makes the timeline inconsistent. The line also gives no basis for attributing the three-day cycle to the checks, leaving a reader unsure whether the checks produced that result.

**How to change it**
Change “adds” to “added.” Keep the causal link only if release-cycle data supports it; otherwise remove or soften the claim that the checks shortened the cycle.

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The operational result comes after a long sequence of activities, making the main impact easy to miss. *(no words)*
2. [Important] “Removed the nightly backlogs” gives no measure of the backlog or dispatch delay before and after. *(about 4 words)*

**Why**
1. A scanning reader may not reach the outcome after the migration, library rewrite, onboarding, and on-call details. Moving it nearer to the migration makes the operational value of that work clearer.
2. The reader can see the kind of operational improvement, but cannot judge its scale. A before-and-after measure would make the impact more concrete.

**How to change it**
1. Move “which removed the nightly backlogs that delayed morning dispatch” directly after “Migrated 30 robot-fleet services from cron jobs to an event queue.”
2. Add [backlog volume or dispatch delay before and after] if you have a defensible comparison.

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] “Single-request edge inference” does not establish how “dynamic batching” produced the latency reduction. *(about 3 words)*

**Why**
Dynamic batching can help when multiple requests are grouped, but cannot provide that benefit for a single request and can add waiting time. INT8 may reduce single-request latency, so the line does not establish that batching produced the reported reduction.

**How to change it**
If requests were batched, specify that workload; otherwise attribute the measured single-request reduction to INT8 only, if that is what the measurement supports.

*raised by content*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The 5% end-to-end latency reduction does not identify the workflow being measured. *(about 3 words)*

**Why**
Without knowing what the measurement spans, a reader cannot tell which user or system path improved. Naming the evaluated workflow would make the result easier to interpret.

**How to change it**
Add [workflow measured] after the latency result.

*raised by content*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] One scored rollout per prompt cannot provide the within-prompt comparisons GRPO uses to form its group-relative advantage. *(saves about 11 words if the claim is removed)*
2. [Important] The line claims GRPO training was stabilized without specifying what became more stable. *(about 4 words)*

**Why**
1. GRPO uses relative comparisons among multiple rollouts for a prompt to form its group-relative advantage. With only one scored trajectory, there is no within-prompt comparison, so the stated setup cannot provide the claimed GRPO stabilization.
2. A reader cannot judge the value of the change without an observable outcome, such as fewer failed runs or lower training variation. The method is present, but the result it produced is not demonstrated.

**How to change it**
1. If training used multiple scored rollouts per prompt, state the actual number and method; otherwise remove the GRPO stabilization claim or describe the training method actually used.
2. Replace “Stabilised” with [measured stability outcome compared with the prior setup], if you have a defensible result.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] “AI-first engineering practices” does not identify the practices adopted or the specific action you took. *(about 2 words)*
2. [Important] The line claims broad delivery and downstream benefits without evidence of what changed or how those effects were measured. *(saves about 8 words if removed)*

**Why**
1. A reader cannot tell what technical or process work you did, or what skill it demonstrates. The broad phrase “Drove adoption” does not make your individual contribution clear.
2. Adoption alone does not establish those effects or show that the practices caused them. Without a concrete result and a basis for comparison, a reader cannot judge the value or scale of the claim.

**How to change it**
1. Replace “AI-first engineering practices” with [the specific practice you introduced], if accurate; replace “Drove adoption” with the specific action you took.
2. Replace the benefit phrase with [one delivery or downstream outcome] and [its comparison or evidence], if available; otherwise remove it.

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The change from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction. *(no words)*

**Why**
The decrease is 300 ms, which is 300/900 = 33.3% of the starting latency. A 50% reduction from 900 ms would end at 450 ms.

**How to change it**
Replace “50% reduction” with “33.3% reduction,” or report the correct endpoint if the reduction was 50%.

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The increase from 71% to 83% is 12 percentage points, not 12%. *(adds about 1 word)*

**Why**
Subtracting the rates gives 83% − 71% = 12 percentage points. The relative increase is about 16.9%.

**How to change it**
Replace “by 12%” with “by 12 percentage points.”

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] “Citation and faithfulness metrics” names the categories but not how you built or implemented them. *(about 5 words)*

**Why**
A reader can see that the contribution was adopted, but cannot tell what evaluation skill or technical work it demonstrates. One distinctive example would make the contribution more legible without listing all eight metrics.

**How to change it**
After “metrics,” add [one representative metric’s computation or implementation detail], if accurate.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The Kendall correlation of 0.89 does not specify the two quantities being correlated. *(about 5 words)*

**Why**
Without those quantities, a reader cannot tell what the correlation demonstrates about the evaluator. Naming the relationship makes the reported result interpretable.

**How to change it**
Clarify what evaluator output was correlated with what measure of injected degradation: [the two correlated quantities], if accurate.

*raised by content*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Polish] The result appears after the method, and “each was fixed upstream” does not say who fixed the defects. *(about 3 words)*

**Why**
A reader encounters the instrumentation before learning that the defects were fixed, which buries the outcome. The passive phrasing also leaves the contributor responsible for the fixes unclear.

**How to change it**
Move “each was fixed upstream” before “with layered instrumentation,” and name [who fixed the defects] if you know.

*raised by wording*

## Already working

- s2:e1:b0: Connects a specific system contribution to a quantified operational result.
- s2:e1:b1: Pairs a before-and-after result with the size and type of evaluation set.
- s2:e0:b1: Pairs a measurable performance gain with specific implementation details and a regression safeguard.

## Set aside (14)

- s2:e0:b0: The claim that rebuilding the dashboards cut mean time to detect from 40 to 12 minutes attributes the change to the dashboards without establishing that they caused it.
- s2:e0:b2: “shortened release cycles to 3 days” gives the new cycle length but not what it was shortened from.
- s2:e0:b3: The claim that the listed changes “removed the nightly backlogs” does not establish that those changes caused the backlogs to disappear.
- s3:e0:b1: The line credits caching and answer reuse with the latency reduction without showing that they caused it.
- s3:e0:b2: The line credits retries with the completion-rate increase without showing that they caused it.
- whole resume, dates: The dates show 10 months with no study or work listed, from June 2022 to May 2023.
- s3:e1:b2: “with layered instrumentation” names a method without showing what the instrumentation involved.
- s2:e0:b3: “while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation” stacks several secondary activities into the same line and obscures the main accomplishment.
- s2:e1:b3: “Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%” delays the result and leaves the actor unclear.
- s2:e1:b4: “by sampling a single rollout per prompt, so each update used exactly one scored trajectory” repeats the single-rollout idea and costs space.
- s2:e1:b5: “for the on-call reviewers, who adopted them as the team’s runbook” uses a relative clause where a shorter phrase would make the adoption result easier to scan.
- s3:e1:b0: "where they now run in the default benchmark for every release" is wordy; state the adoption result directly.
- s3:e1:b1: "Showed the evaluator tracks" uses a vague opening and an awkward construction; lead with the evaluation result.
- s3:e1:b1: "injected degradation" is jargon that may be unclear to readers outside the team.
