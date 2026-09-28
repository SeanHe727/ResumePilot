# Full review: resume.pdf

**84/100** — format 100 · content 76 · wording 78 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 7 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Aug 2022 - Jul 2024

**Problem**
[Important] The Experience entries are not in newest-first order. *(no words)*

**Why**
Eastern Robotics, dated August 2022 to July 2024, appears above Mobility Systems, dated October 2024 to May 2025. The older-to-newer order interrupts the timeline.

**How to change it**
Move Mobility Systems Company above Eastern Robotics Co. in the Experience section.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
1. [Important] The dashboard and on-call responsibilities have no stated outcome. *(about 8 words)*
2. [Polish] “Owned” names responsibility rather than the action you took. *(no words)*
3. [Polish] “That used them” is an unnecessary trailing clause. *(saves 3 words)*

**Why**
1. A reader can see what you owned, but not whether it improved monitoring or incident response. The two-release scope shows scale, not the value of the work.
2. The reader learns that the dashboards and rotation were yours, but not what you did with them. Naming the action makes your contribution easier to assess.
3. The clause only identifies which rotation you mean, so it adds no useful information. Removing it tightens the bullet without losing its point.

**How to change it**
1. After “on-call rotation,” add [a specific monitoring or incident-response outcome and how it was measured].
2. Replace “Owned” with [the specific action you took on the dashboards or rotation], if accurate.
3. Cut “that used them.”

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The dispatch result comes after several methods and responsibilities, making the main outcome easy to miss. *(no words to move; about 6 words if adding a measure)*
2. [Polish] The logging, onboarding, and on-call details obscure the main migration achievement. *(saves 17 words)*

**Why**
1. A scanning reader may not reach the result after the migration, logging rewrite, onboarding, and on-call details. Without a measure, the scale of the improvement is also hard to judge.
2. The bullet combines several additional activities with the migration, making its central contribution harder to scan. The extra details compete with the migration result for attention.

**How to change it**
1. Move the result closer to the start of the bullet; if tracked, add [backlog frequency or dispatch delay before and after].
2. Cut “while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation” from this bullet.

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The opening delays the latency result and makes the sentence’s subject hard to follow. *(saves about 10 words)*
2. [Important] The 5% latency result lacks a comparison or evaluation context. *(about 5 words)*

**Why**
1. The reader must work through several training details before reaching the 5% result. That makes the contribution less visible on a quick scan.
2. The percentage gives a result, but not the workload or baseline against which it was measured. A reader cannot tell what the improvement applies to.

**How to change it**
1. Move “reduced end-to-end latency 5%” to the opening, then retain only the most telling method detail.
2. Add [the latency comparison or evaluation workload], if available.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] One rollout per prompt cannot provide the usual GRPO group-relative learning signal, and one rollout per prompt does not mean one trajectory per update. *(about 5 words)*
2. [Polish] “Stabilised” is a broad training outcome without evidence. *(about 7 words)*
3. [Polish] The clause about one scored trajectory restates the single-rollout detail. *(saves 8 words)*

**Why**
1. With a group of one, there is no within-prompt reward comparison to produce an informative relative advantage. An update may also contain multiple prompts, so the sentence conflates rollouts per prompt with trajectories per update.
2. A reader cannot see what changed in training or how stability was assessed. A concrete comparison would make the claimed benefit more credible.
3. The sentence already says there was one rollout per prompt. Repeating the same detail costs space without adding information.

**How to change it**
1. If using standard GRPO, describe [the actual multiple rollouts per prompt and trajectories per update]; if using a different advantage estimator, name it and do not claim stabilization unless the training results support it.
2. Add [an observable stability result compared with the prior training setup], such as a relevant change in update variance or training failures, if you have it.
3. Cut “so each update used exactly one scored trajectory.”

*raised by content, wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] “AI-first engineering practices” does not identify the practices you drove adoption of. *(about 2 words)*
2. [Important] The benefits for downstream teams are broad and unsupported by a specific change or evidence. *(about 7 words)*

**Why**
1. A reader cannot tell what work you did or what skill it demonstrates. Naming one representative practice would make your contribution easier to understand.
2. A reader cannot judge or verify what improved, so the value of your work remains unclear. A concrete change and its clearest evidence would make the claim more credible.

**How to change it**
1. Replace “AI-first engineering practices” with [the specific practice you introduced], if accurate; describe it plainly for readers outside the team.
2. Replace “accelerating delivery and improving outcomes for downstream teams” with [a specific change for downstream teams] and, if available, [one measure compared with its baseline].

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The claimed 50% reduction is mathematically wrong: latency fell from 900 ms to 600 ms, a 33.3% reduction. *(no words)*

**Why**
The change is a 300 ms decrease, which is 33.3% of the original 900 ms. A 50% reduction would mean a final latency of 450 ms.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction” or “a 300 ms reduction.”

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The change from 71% to 83% is 12 percentage points, not a 12% relative increase. *(about 1 word)*

**Why**
Relative to the starting rate of 71%, the increase is about 16.9%. The current wording does not distinguish percentage points from a relative percent change.

**How to change it**
Replace “by 12%” with “by 12 percentage points”; if describing the relative increase instead, use “about 16.9%.”

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
1. [Polish] The line gives no detail on how you developed or integrated the metrics. *(about 6 words)*
2. [Polish] The result that the metrics run in every release’s default benchmark comes after a long description of where they were added. *(no words)*

**Why**
1. A reader can see the contribution and its adoption, but not the technical work that demonstrates your skill. One telling implementation detail would make the contribution easier to assess.
2. A scanning reader may miss the adoption outcome before reaching the end of the line. Leading with it would make the result more visible.

**How to change it**
1. Add one concise detail about [how you designed or integrated the metrics], if accurate, while keeping the recurring benchmark adoption as the outcome.
2. Move “where they now run in the default benchmark for every release” to the opening of the bullet.

*raised by content, wording*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Polish] “A Kendall correlation of 0.89” does not identify what was correlated with what. *(about 6 words)*

**Why**
Without the comparison, a reader cannot interpret what the correlation demonstrates. Naming the reference used would make the result more meaningful.

**How to change it**
Clarify what the evaluator’s scores or rankings were compared against by adding [the reference or expected ordering used], if accurate.

*raised by content*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] The clause about the defect areas and instrumentation delays the result that all three defects were fixed upstream. *(no words)*
2. [Polish] “Layered instrumentation” does not specify what signal or instrumentation helped trace the defects. *(about 4 words)*

**Why**
1. A scanning reader may reach the technical details before seeing the important outcome. The fix is easy to miss at the end of the line.
2. A reader can tell you used a diagnostic approach, but cannot picture the technical skill involved. One concrete tracing detail would make the method more credible without requiring a list of tools.

**How to change it**
1. Move “each was fixed upstream” to the opening, then retain the details about the defects and tracing method.
2. Replace “layered instrumentation” with [the most telling instrumentation layer or trace signal you used], if accurate.

*raised by wording, content*

## Already working

- s2:e0:b1: Shows a direct before-and-after performance result.
- s2:e1:b1: Pairs a clear outcome with a held-out evaluation and a specific training approach.
- s2:e1:b2: Clearly identifies the latency measure and inference context.

## Set aside (4)

- s2:e0:b2: The claim that automated regression checks “shortened release cycles from 2 weeks to 3 days” attributes the full reduction to the checks without establishing that regression testing was the release bottleneck.
- s2:e0:b3: The claim that the combined work “removed the nightly backlogs that delayed morning dispatch” does not establish that the queue migration, logging rewrite, onboarding, or on-call changes removed those backlogs.
- s2:e1:b0: “Cutting the pending-case backlog 68%” attributes the decline to the triage branch, but the line gives only the timing after launch, not evidence that the branch caused the reduction.
- s2:e1:b3: “Using” the listed training setup “reduced end-to-end latency 5%” makes a causal claim that the setup does not establish. The reward includes call count, but does not directly optimize latency.
