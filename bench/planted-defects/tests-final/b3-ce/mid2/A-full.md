# Full review: resume.pdf

**86/100** — format 100 · content 79 · wording 82 · narrative 77

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 7 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> May 2023 - Jul 2024; Oct 2024 - May 2025

**Problem**
[Important] Experience is not in newest-first order. *(no words)*

**Why**
The Mobility Systems role ran from October 2024 to May 2025, later than the Eastern Robotics role ending in July 2024. Listing the older role first conflicts with reverse chronology and can make the experience sequence harder to follow.

**How to change it**
Move Mobility Systems Company above Eastern Robotics Co. in Experience.

*raised by file, narrative*

> Agent Runtime Suite

**Problem**
[Polish] Projects should precede Experience to foreground the current agent-runtime work. *(no words)*

**Why**
The Agent Runtime Suite is current, and leading with it would foreground the direction the résumé is moving toward. Keeping Projects later in the document makes that work less prominent.

**How to change it**
Move Projects ahead of Experience; no line text needs to change.

*raised by narrative*

> Jun 2022; May 2023

**Problem**
[Polish] The dates show no listed study or work between June 2022 and May 2023. *(about 5 words)*

**Why**
A reader may ask what happened after the bachelor’s degree and before the first listed role. Leaving the interval unexplained can raise questions about the timeline.

**How to change it**
Add [study, work, or other context for Jun 2022–May 2023], if there is relevant context to include.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Error] The 200 ms build gate does not establish the claimed 180 ms p95. *(about 2 words)*

**Why**
A test that fails only above 200 ms establishes that a passing result is at or below 200 ms, not that it is 180 ms. As written, the test does not support the specific post-change figure, which may make a reader question the measurement.

**How to change it**
If a separate measurement showed 180 ms, identify it; otherwise replace the 180 ms claim with the supported result that the load tests kept p95 at or below 200 ms.

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Important] The release-cycle result gives no baseline for judging the improvement. *(about 4 words)*
2. [Polish] The past-tense role description uses inconsistent verb tenses. *(no words)*

**Why**
1. A reader can see the resulting cycle length but cannot tell how much shorter it became. Without the prior cycle length, the three-day result does not show the size of the improvement.
2. “Maintained” describes completed work, while “adds” shifts to present tense despite the role ending in July 2024. That inconsistency can make the timing of the work unclear.

**How to change it**
1. Add the prior cycle length as [previous release cycle length], if known; otherwise retain the three-day result without implying a quantified reduction.
2. Change “adds” to “added” to keep the completed role in past tense.

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The extra duties crowd the migration result, and “which” does not clearly identify what removed the backlogs. *(no words)*
2. [Polish] The backlog result has no measure of how much backlog or dispatch delay was removed. *(about 5 words)*

**Why**
1. The migration is the main accomplishment, but the logging rewrite, onboarding, and on-call work interrupt it. A reader may also be unsure whether the migration or one of those other duties removed the nightly backlogs.
2. The operational benefit is clear, but a reader cannot gauge its size. A measure of the backlog or delay would make the result more specific and credible.

**How to change it**
1. Move the logging, onboarding, and on-call duties to a separate bullet, and replace “which” with a clear subject for the backlog result.
2. Add one measure, if available, such as [backlog or dispatch delay before and after]; if no defensible comparison is available, keep the result qualitative.

*raised by wording, content*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The 5% result is buried after method details instead of leading the line. *(no words)*
2. [Important] The 5% latency reduction does not identify what it was compared against. *(about 6 words)*

**Why**
1. The result is the main reason this work matters, but a scanning reader may move on before reaching it. Leading with the outcome would make the impact easier to see.
2. Without a baseline or evaluation context, a reader cannot tell which system or result improved. That makes the reported reduction difficult to interpret.

**How to change it**
1. Move “reduced end-to-end latency 5%” to the start of the line, then retain only the most telling method details.
2. Add [baseline or prior system used for comparison] and, if needed, [evaluation workload or conditions].

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] Using one scored rollout per prompt is incompatible with standard GRPO’s group-relative advantage calculation. *(about 5 words)*
2. [Polish] “Stabilised” does not name a training outcome or how stability was measured. *(about 5 words)*

**Why**
1. Standard GRPO compares rewards within a group of rollouts for each prompt. One scored rollout provides no within-prompt group of rewards to compare, and the line says each update used exactly one scored trajectory.
2. A reader cannot tell what became more stable or distinguish an improvement from a procedural change. Without an observed outcome, the claimed benefit is hard to assess.

**How to change it**
1. If standard GRPO was used, describe the multiple rollouts per prompt used to compute group-relative advantages. Otherwise, name the single-rollout method actually used and how its learning signal was computed.
2. Replace “Stabilised” with the concrete training outcome and add [stability measure compared with the prior setup].

*raised by content*

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Polish] The runbook adoption result appears at the end instead of leading the line. *(no words)*

**Why**
The reviewers’ adoption is a visible outcome, but a scanning reader encounters it only after the documentation details. Leading with adoption would make the result more prominent.

**How to change it**
Move the adoption result to the start of the line, before the documentation details.

*raised by wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The broad delivery and downstream-benefit claims do not specify what changed or how it was measured. *(about 8 words)*
2. [Polish] “AI-first engineering practices” does not identify the practices and may be jargon to readers outside the team. *(about 3 words)*

**Why**
1. A reader cannot judge what improved or how much the work mattered. Without a concrete outcome and comparison point, the claimed impact is not assessable.
2. A reader cannot tell what work you did or what capability you brought to it. Naming one specific practice would make the contribution more understandable and credible.

**How to change it**
1. Replace the broad benefits with [the specific delivery or downstream outcome] and, if available, [the change measured against its baseline or comparison].
2. Replace “AI-first engineering practices” with [the specific practice you introduced] and, if useful, briefly say how you rolled it out.

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The decrease from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction. *(no words)*

**Why**
The decrease is 300 ms, which is one-third of the original 900 ms. A 50% reduction from 900 ms would result in 450 ms, so the stated figures conflict.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction”; if the reduction was 50%, use 450 ms as the endpoint instead.

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The change from 71% to 83% is 12 percentage points, not a 12% relative increase. *(about 2 words)*
2. [Important] The strongest accomplishment is not the opening bullet in this project. *(no words)*

**Why**
1. The figures differ by 12 percentage points. Relative to the original 71%, the increase is about 16.9%, so “by 12%” misstates the change if it means a relative increase.
2. The task-completion result gives a specific benchmark change and a method, while the opening bullet makes a broad claim. A reader may encounter the less concrete claim first and miss the stronger result.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points” to match the figures from 71% to 83%.
2. Move the task-completion bullet to the start of the Agent Runtime Suite bullets.

*raised by content, wording, narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Polish] The eight metrics are named only by broad categories, without an example of the evaluation work. *(about 6 words)*

**Why**
A reader can see the scale and adoption of the contribution, but not the technical or research skill behind building the metrics. One representative example would make the work easier to understand.

**How to change it**
After “metrics,” add [one representative metric and what it measures or how it is computed].

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Polish] The line does not identify the two quantities in the Kendall correlation. *(about 8 words)*
2. [Polish] “Showed” is generic and makes the evaluator’s specific behavior harder to scan. *(no words)*

**Why**
1. Without knowing what was correlated, a reader cannot tell what the 0.89 value demonstrates about the evaluator. Naming the reference signal would make the statistic interpretable.
2. The line says the evaluator tracks degradation, but the generic verb does not make that behavior stand out. A more precise verb would let a reader understand the finding more quickly.

**How to change it**
1. After “Kendall correlation,” clarify [evaluator scores and the known ordering or severity of injected degradation], if accurate.
2. Replace “Showed” with a verb that states the measured behavior, such as “validated,” if that accurately describes the work.

*raised by content, wording*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] “Layered instrumentation” does not specify how the defects were traced. *(about 3 words)*
2. [Polish] “Each was fixed upstream” uses passive voice and does not identify who fixed the defects. *(about 2 words)*

**Why**
1. A reader can see that defects were located and fixed, but cannot picture the diagnostic skill behind the result. One specific technique or instrumentation layer would make the method more concrete.
2. The reader cannot tell who acted on the findings. Naming the actor would clarify the upstream result without implying that you fixed the defects yourself.

**How to change it**
1. Replace “layered instrumentation” with [the specific instrumentation or tracing technique that helped identify the defects], if accurate.
2. Replace “each was fixed upstream” with an active phrase naming [who fixed the defects], if known; for example, “the upstream team fixed each,” if accurate.

*raised by content, wording*

## Already working

- s2:e1:b0: Connects the triage branch to a concrete operational outcome: a 68% reduction in pending cases.
- s2:e1:b1: Pairs an interpretable before-and-after result with the size and held-out nature of the evaluation set.
- s2:e1:b2: States a quantified latency improvement and identifies the inference context.
