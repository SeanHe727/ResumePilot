> Here is my resume: bench/planted-defects/tests-final/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 experience/project entries for content and wording, plus the full-resume narrative and format. Education was not applicable to bullet review. No job-description match was run because no posting was provided.

The main changes to address:
- Correct the mismatched math: 900 ms to 600 ms is a 33% reduction, not 50%; 71% to 83% is a 12-percentage-point increase, not 12%.
- Clarify or substantiate technical claims, especially the single-rollout-per-prompt GRPO description and the causal links between methods and reported results.
- Add an outcome to the dashboards/on-call bullet, and clarify baselines for several reported improvements.
- Reorder the resume so Experience comes before Education, and list the newer role first.

The file parses cleanly and has no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 78 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 15 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.
> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.
> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The results in these bullets are buried after methods and actions, and the latency bullet’s “which” has an unclear antecedent. *(no words for moving text; about 1 word if adding a subject)*

**Why**
A scanning reader may miss the p95 latency reduction, shortened release cycle, and removal of nightly backlogs because each result comes after its methods or a long list of actions. In the last bullet, “which” does not clearly identify what removed the backlogs.

**How to change it**
Move each result to the opening of its bullet. In the backlog bullet, state the result directly after the relevant action rather than attaching it with “which”; for the latency bullet, name the subject of “reduced.”

> "Eastern Robotics Co. | Junior Software Engineer"

**Problem**
[Important] The Experience entries are not in newest-first order. *(no words)*

**Why**
The August 2022–July 2024 role appears above the October 2024–May 2025 role. That reverses the chronology and makes the experience sequence harder to follow.

**How to change it**
Move the Mobility Systems Company entry (Oct 2024–May 2025) above the Eastern Robotics Co. entry (Aug 2022–Jul 2024).

> "Western State University"

**Problem**
[Important] Education appears before the relevant professional experience. *(no words)*

**Why**
The résumé’s professional experience establishes the candidate’s direction more quickly. Placing Education first delays that context for the reader.

**How to change it**
Move Experience before Education.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The dashboard and on-call responsibility has no stated outcome. *(about 8 words added)*

**Why**
A reader can see what you owned, but not whether the dashboards improved diagnostics or helped the on-call team. Without a result, the value of that ownership is hard to judge.

**How to change it**
Add [the most telling result of the dashboards or rotation], with [what it was measured against] if available.

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The onboarding and weekend on-call duties crowd the migration bullet and obscure its outcome. *(saves about 11 words)*
2. [Important] The nightly-backlog outcome has no measure of its scale. *(about 8 words added)*

**Why**
1. These are separate duties from the migration, and adding them to an already long list of actions makes the backlog result harder to notice. That weakens the focus on the operational outcome.
2. A reader can tell that dispatch was affected, but cannot judge how often or how much the backlogs delayed it. One measure of the change would make the operational value more credible.

**How to change it**
1. Cut that duty phrase from this bullet so the migration and its outcome stay in focus.
2. Add [one backlog or dispatch-delay measure before the change] and [the measure after the change].

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The 68% backlog reduction has no stated baseline or endpoint count. *(about 8 words added)*

**Why**
A reader cannot tell which before-and-after counts support the percentage. Naming the comparison point would make the result easier to interpret and verify.

**How to change it**
Add [the pending-case count immediately before launch] and [the count after eight weeks], if available.

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] The 40% latency reduction does not identify its comparison baseline. *(about 4 words added)*

**Why**
Without the prior setup, readers cannot tell what changed or how to interpret the percentage. The line also attributes the reduction to dynamic batching without establishing that requests could coalesce or that batching reduced latency under the measured workload.

**How to change it**
Add [the baseline inference configuration], if that was the comparison used; retain the batching attribution only if requests could coalesce and the measured workload supports it.

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The result is buried after a long method list, and “Using … reduced” leaves the subject unstated. *(no words for moving text; about 1 word if adding a subject)*
2. [Important] The 5% latency reduction lacks a comparison setup and measurement context. *(about 7 words added)*

**Why**
1. A scanning reader may not reach the end of the bullet, where the clearest statement of what changed appears. The opening also makes it unclear who or what reduced latency.
2. A reader cannot tell what configuration the reduction is compared with or how latency was summarized. The listed reward components do not themselves establish the latency result.

**How to change it**
1. Move that result to the beginning, state the subject if needed, and follow it with only the most telling method details.
2. Add [the comparison setup] and [the latency statistic or evaluation context], if available.

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] One rollout per prompt cannot provide the within-prompt group-relative advantage used by standard GRPO. *(about 5 words if naming an alternative estimator; no words if removing the claim)*
2. [Important] The sentence repeats that each update used one scored trajectory after already saying there was a single rollout per prompt. *(saves about 8 words)*
3. [Important] The claim that training stabilized has no stated evidence. *(about 6 words added)*

**Why**
1. With a group of one, the centered advantage is zero and its within-group variance is unavailable. Without a different estimator or an additional baseline, that sampling choice cannot provide a reward-driven standard GRPO update; it also appears inconsistent with “grouped tool-use rollouts” in the preceding bullet if both describe the same configuration.
2. Those phrases describe the same sampling choice, so the second clause adds no new information. The repetition costs space that could be used for evidence of what stabilized.
3. A reader cannot tell what instability improved or how you assessed the change. Without a concrete outcome, the stabilization claim is difficult to judge.

**How to change it**
1. If training used an alternative baseline or estimator, name it and clarify how it differs from standard group-relative GRPO. Otherwise, use multiple rollouts per prompt or remove the claim that single-rollout sampling stabilized training.
2. Cut “so each update used exactly one scored trajectory.”
3. Add [the training-stability measure or observable outcome and its comparison], if available.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The broad phrase does not say which engineering practices you introduced. *(about 3 words)*
2. [Polish] The claimed downstream improvements are not specific enough to show what changed. *(about 4 words)*

**Why**
1. A reader cannot tell what work “AI-first engineering practices” refers to or what engineering skill it demonstrates. That leaves the main contribution difficult to assess.
2. “Accelerating delivery and improving outcomes” does not tell a reader what improved for downstream teams. Without a concrete result or a comparison, the impact is hard to assess.

**How to change it**
1. Replace that phrase with [the most telling specific practice or workflow you introduced].
2. Replace that phrase with [the clearest result for downstream teams] and, if available, [the result compared with its baseline].

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The stated reduction is mathematically wrong: a drop from 900 ms to 600 ms is 33.3%, not 50%. *(no words)*

**Why**
The decrease is 300 ms, which is one-third of the 900 ms baseline. A 50% reduction would be 450 ms, so the stated percentage conflicts with the before-and-after figures and can make readers question the accuracy of the result.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction.”

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The stated 12% increase is wrong: the change from 71% to 83% is 12 percentage points. *(about 2 words added)*

**Why**
The two rates differ by 12 percentage points; relative to the original 71%, the increase is about 16.9%. Readers could interpret the improvement differently depending on whether they rely on “by 12%” or the listed rates.

**How to change it**
Replace “by 12%” with “by 12 percentage points,” if that is accurate.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The metric categories do not give an example of the technical work involved. *(about 5 words)*

**Why**
A research-agent reader can see that the contribution is used upstream, but not what technical skill went into creating or integrating the metrics. A representative detail would make that contribution clearer.

**How to change it**
If space permits, replace the broad category label with [one representative metric calculation or integration detail].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The Kendall correlation does not identify the two quantities being correlated. *(about 8 words added)*

**Why**
Without those quantities, readers cannot tell what the coefficient says about the evaluator’s performance. “Tracks injected degradation” also leaves the reported result difficult to interpret.

**How to change it**
After the correlation figure, add [the evaluator output] and [the reference quantity it was correlated with].

## Already working

- s2:e1:b1: Pairs a clear accuracy lift with a defined held-out evaluation set.
- s2:e1:b5: Shows that the documentation was used in team operations, not merely produced.

## Set aside (5)

5 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9c4eaf19.md.

