# Full review: resume.pdf

**86/100** — format 100 · content 80 · wording 80 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 10 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Western State University

**Problem**
[Important] Move the experience entries before the education entries so relevant work history leads the résumé. *(no words)*

**Why**
The education entries currently appear before the work history. As a result, readers encounter the degrees before the candidate’s relevant professional experience.

**How to change it**
Move the experience entries above the education entries.

*raised by narrative*

> Aug 2022 - Jul 2024

**Problem**
[Important] Within experience, the older Eastern Robotics role appears before the more recent Mobility Systems role. *(no words)*

**Why**
The Eastern Robotics role ends in July 2024, while the Mobility Systems internship runs from October 2024 to May 2025. Listing the older role first breaks newest-first chronology and makes the experience sequence harder to scan.

**How to change it**
Move the Mobility Systems Company entry above the Eastern Robotics Co. entry.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The dashboards and on-call responsibility are described without saying what changed or what you did. *(about 5 words)*

**Why**
A reader can see the scope of responsibility, but not the result or your specific contribution to the dashboards or rotation. The two-release count shows scale, not why the work mattered, so the technical value is difficult to assess.

**How to change it**
Replace “Owned” and the generic dashboard and rotation phrasing with the specific dashboard capability or on-call work you performed. Add [the clearest result, measured against the prior process] if available.

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The lengthy load-test clause weakens the scan-friendly latency result. *(saves about 12 words)*

**Why**
The p95 change and its implementation are already the main result, but the build-failure condition makes the sentence harder to scan. A reader may miss the impact while processing the extra testing detail.

**How to change it**
Cut the load-test clause or shorten it to the threshold detail only if that detail is important to retain.

*raised by wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog outcome is buried after secondary activities, and the sentence does not clearly identify what removed the backlogs. *(no words)*
2. [Polish] The backlog outcome lacks a measure of its magnitude. *(about 5 words)*

**Why**
1. The migration of 30 services is the central change, but the logging rewrite, onboarding, and on-call work come before the outcome. After that long list, “which” could refer to several actions, leaving the cause of the improvement unclear.
2. A reader cannot tell how often the nightly backlogs occurred or how much they delayed dispatch. Without a before-and-after measure, the scale of the improvement is hard to judge.

**How to change it**
1. Move the migration and backlog result ahead of the secondary activities, and replace “which” with a direct link between the migration and the result if accurate. Keep the secondary activities after the outcome.
2. Add [backlog frequency or dispatch delay before and after the change] if available.

*raised by narrative, wording, content*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Polish] “ML-extracted features” does not identify the feature-extraction or triage approach. *(about 2 words)*

**Why**
The phrase establishes that machine learning was involved but does not show your technical contribution to the system. One distinctive method would give a reader a clearer basis for assessing that contribution.

**How to change it**
Replace the generic phrase with [the specific feature-extraction or triage method], if accurate.

*raised by content*

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Error] The 40% single-request p95 latency reduction is incorrectly attributed to dynamic batching. *(about 3 words)*

**Why**
Dynamic batching primarily improves throughput under concurrent load; an isolated request does not provide that concurrent workload, and waiting to form a batch can add latency. INT8 may reduce computation time, but the line does not separate its effect from batching.

**How to change it**
If the measurement used concurrent requests, specify that workload. Otherwise, report the measured INT8 effect separately and remove dynamic batching as the explanation for the single-request latency reduction.

*raised by content*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The 5% end-to-end latency result lacks a statistic and comparison setup, and its opening phrase has no subject. *(about 6 words)*

**Why**
Without knowing what end-to-end latency covers or what configuration it was compared with, a reader cannot interpret the 5% change. The opening “Using” phrase also leaves unclear who performed the work, while the long list of methods pushes the result out of view.

**How to change it**
Put the 5% result first, replace “Using” with a subject and action, and add [the latency statistic and comparison setup] if accurate.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] A single rollout per prompt cannot provide the within-group relative advantage required for standard GRPO learning. *(no words)*
2. [Important] The claim that GRPO training stabilized has no evidence of the stability change. *(about 6 words)*
3. [Polish] The final clause repeats the single-rollout detail. *(saves about 9 words)*

**Why**
1. Standard GRPO compares rewards within a prompt’s rollout group, and one scored trajectory provides no such comparison. The stated method therefore does not support the claim that it stabilized standard GRPO on sparse rewards.
2. The line describes the procedure but does not show whether training became more stable or how that was assessed. A reader cannot distinguish a measured improvement from a method description.
3. “Each update used exactly one scored trajectory” restates that there was a single rollout per prompt. The repetition adds length without giving the reader another result.

**How to change it**
1. Use multiple scored rollouts per prompt, or name the different baseline or learning signal actually used. If neither applies, remove the claim that single-rollout sampling stabilized GRPO.
2. Keep the method only if accurate and add [the clearest training-stability measure, compared with the prior setup].
3. Cut the final “so” clause.

*raised by content, wording*

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Polish] The reviewers’ adoption of the guidance should lead the bullet. *(no words)*

**Why**
The adoption result is the clearest evidence that the documentation was useful, but it appears only at the end. A scanning reader may miss that outcome before reaching the implementation details.

**How to change it**
Move the reviewers’ adoption of the guidance to the beginning of the bullet, before the documentation details.

*raised by wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] “AI-first engineering practices” does not identify a practice, and the claimed benefits do not say what changed. *(about 6 words)*

**Why**
A reader cannot tell what practice was adopted or what delivery or downstream outcome followed. Those broad claims are hard to assess, leaving the value of the work unclear.

**How to change it**
Replace the practice phrase with [one specific practice introduced] and replace the benefits phrase with [a specific delivery or downstream outcome, measured against a baseline or comparison], if accurate.

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
1. [Error] The 50% reduction is incorrect: the change from 900 ms to 600 ms is a 33.3% reduction. *(no words)*
2. [Important] The latency result should lead the entry’s technical results. *(no words)*

**Why**
1. The reduction is 300 ms from a 900 ms baseline, which is 33.3%. A 50% reduction would bring p95 latency to 450 ms, so the current percentage conflicts with the stated endpoints.
2. The latency and task-completion results establish the runtime project, while this line opens with a broad adoption claim. Leading with the concrete latency result would make the strongest technical impact easier to find.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction,” or verify and report the correct endpoint if the reduction was 50%.
2. Move this result ahead of the AI-first adoption claim.

*raised by content, wording, narrative*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The change from 71% to 83% is 12 percentage points, not a 12% relative increase. *(about 2 words)*

**Why**
The absolute change is 12 percentage points. Relative to the 71% baseline, the increase is about 16.9%, so “by 12%” does not match the stated figures.

**How to change it**
Say “raised the task-completion rate by 12 percentage points, from 71% to 83%,” or “raised it by 16.9% relative to baseline.”

*raised by content, wording*

> Drove adoption of AI-first engineering practices

**Problem**
[Polish] The adoption claim reads as a separate broad outcome rather than part of the runtime’s technical results. *(no words)*

**Why**
The two following bullets give concrete runtime measures, but this claim does not connect adoption to those results. A reader may understand it as a separate assertion rather than evidence of the project’s technical impact.

**How to change it**
If the adoption claim is supported by the latency or task-completion work, connect it to that result; otherwise keep it separate only if you can state its specific outcome.

*raised by narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The line does not show how the eight metrics were implemented or validated. *(about 6 words)*

**Why**
The fact that the metrics run in the default benchmark for every release establishes adoption, but not what technical work made them yours. One implementation or validation detail would make your contribution easier to assess.

**How to change it**
Add [one concise, distinctive implementation or validation detail].

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The Kendall correlation does not identify the two variables being compared. *(about 3 words)*

**Why**
Without knowing what the evaluator’s results were compared with, a reader cannot interpret what the 0.89 demonstrates. “Injected degradation” is also abstract, so the deliberate change may not be immediately clear.

**How to change it**
Name what the evaluator’s scores or rankings were correlated with, such as [injected degradation severity] if accurate, and replace “injected degradation” with a plain description of what was deliberately worsened.

*raised by content, wording*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Polish] “Layered instrumentation” does not identify the diagnostic method and may be opaque outside the team. *(about 2 words)*

**Why**
The phrase does not show what instrumentation helped localize the defects, so a reader cannot picture the technical tracing work. Its process jargon may obscure an otherwise concrete result.

**How to change it**
Replace “layered instrumentation” with [the specific instrumentation or signal used to localize the defects].

*raised by content, wording*

## Already working

- s2:e0:b2: Clearly connects a specific engineering change to a quantified improvement in release cadence.
- s2:e1:b1: Reports a clear accuracy change on a named held-out evaluation set.
