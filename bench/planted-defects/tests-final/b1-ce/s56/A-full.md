# Full review: resume.pdf

**88/100** — format 100 · content 81 · wording 86 · narrative 86

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 11 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Aug 2022 - Jul 2024

**Problem**
[Important] The experience section is not ordered newest first. *(no words)*

**Why**
The August 2022–July 2024 role appears above the October 2024–May 2025 role. This reverses the expected chronology and delays the more recent machine-learning experience.

**How to change it**
Move the Mobility Systems Company entry above the Eastern Robotics Co. entry.

*raised by file, narrative*

> M.S. in Computer Engineering

**Problem**
[Important] Education appears before the more relevant experience and project sections. *(no words)*

**Why**
Your work now shows a robotics-to-ML-to-agent progression that is more useful to recruiters than the degree information as an opening. Leading with education delays the strongest evidence of current technical scope and impact.

**How to change it**
Reorder the sections as EXPERIENCE, PROJECTS, EDUCATION, SKILLS.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
1. [Important] The duty framing in "Owned the diagnostics service’s monitoring dashboards" does not identify the technical work performed. *(about 4 words)*
2. [Polish] "Owned the diagnostics service’s monitoring dashboards" gives no operational result. *(about 10 words)*

**Why**
1. A reader sees responsibility for monitoring but cannot tell whether you built dashboards, redesigned alerts, added instrumentation, or merely administered existing assets. That ambiguity hides the engineering contribution behind the ownership claim.
2. A hiring manager cannot tell whether this work improved incident detection, recovery time, reliability, or release quality. Without that result, the line reads as scope of responsibility rather than evidence of impact.

**How to change it**
1. Replace "Owned" with the accurate action, such as "Built," "maintained," or "redesigned," and replace "monitoring dashboards" with "[alerts or dashboards changed] in [monitoring tool]."
2. After "the on-call rotation that used them," add [change in incident detection, recovery time, reliability, or escaped issues compared with the prior baseline].

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] "Load tests that fail the build" incorrectly shifts to present tense in an ended role. *(no words)*

**Why**
The role ended in July 2024, so the present-tense verb disrupts the résumé’s timeline. A reader may wonder whether the tests still run under your ownership or whether this is simply a tense error.

**How to change it**
Replace "fail" with "failed."

*raised by wording*

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
1. [Important] "Maintained the CI pipeline" buries the stronger release-cycle result behind routine responsibility. *(no words)*
2. [Polish] "Automated regression checks" does not identify the model property or release risk being tested. *(about 2 words)*

**Why**
1. A scanning reader first registers maintenance work rather than the reduction from two weeks to three days. Leading with the measured change makes the line’s value clear before the implementation detail.
2. The phrase establishes automation but not the perception or ML release-engineering skill involved. One domain-specific detail would tell a technical reader what failure the pipeline prevented and what expertise to probe.

**How to change it**
1. Move "shortened release cycles from 2 weeks to 3 days" to the opening, then place the CI-pipeline work after it as the method.
2. If accurate, replace it with "automated [model quality, latency, or safety metric] regression checks."

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The result "removed the nightly backlogs that delayed morning dispatch" is buried and attached ambiguously to several preceding actions. *(saves about 1 word)*
2. [Important] "While rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation" overloads the migration bullet with three secondary achievements. *(no words)*
3. [Important] The strongest Eastern Robotics bullet is not placed first. *(no words)*

**Why**
1. A reader must pass through the migration, logging, onboarding, and on-call details before reaching the operational reason the work mattered. After that list, "which" could refer to the migration or to the combined activities, weakening the causal claim.
2. These details compete with the migration and backlog result rather than strengthening their causal story. The reader is left unsure which work belongs together and may miss potentially valuable logging, mentoring, or operational contributions.
3. The 30-service migration combines substantial scope with a concrete dispatch outcome, so it establishes technical ownership more quickly than the dashboard line. Leaving it last weakens the entry’s first impression for a scanning recruiter.

**How to change it**
1. Move "removed the nightly backlogs that delayed morning dispatch" directly after "Migrated 30 robot-fleet services," then give the event-queue migration as the method. This also removes the ambiguous "which."
2. Move these three details into separate bullets, or retain only the detail directly tied to eliminating the backlog and cut the others.
3. Move this entire bullet to the first position within the Eastern Robotics entry.

*raised by content, wording, narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Polish] "ML-extracted features" does not identify the model or feature-extraction technique used. *(about 3 words)*

**Why**
A technical reader can see that machine learning was involved but cannot determine what you designed or implemented. That leaves no specific modeling skill to assess or explore in an interview.

**How to change it**
Replace it with "features extracted by [specific model or technique]" if accurate.

*raised by content*

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Error] "Dynamic batching" cannot explain a latency reduction for truly "single-request edge inference." *(about 3 words)*

**Why**
At concurrency one, there are no other requests to combine, and a batching scheduler may instead add batch-formation delay. Dynamic batching can reduce per-request p95 latency under concurrent load through better throughput, but that is a different workload from single-request inference.

**How to change it**
If requests were concurrent, replace "single-request" with "per-request" and add "under [load/concurrency]." If the test used concurrency one, replace "dynamic batching" with [the mechanism actually responsible for the reduction].

*raised by content*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The method-heavy opening buries "reduced end-to-end latency 5%" at the end of the line. *(no words)*
2. [Polish] "GRPO" and "SFT" are not expanded on first use. *(about 6 words)*

**Why**
1. A scanning reader encounters grouped rollouts, a composite reward, and two training acronyms before learning what changed. That makes the measurable result easier to miss despite the technical depth of the work.
2. Readers outside the immediate training specialty may not decode both abbreviations quickly. Expanding them once preserves the technical specificity without making the reader infer the terminology.

**How to change it**
1. Move "reduced end-to-end latency 5%" to the opening, followed by "using," and keep the existing methods after it.
2. Replace the first uses with "group relative policy optimization (GRPO)" and "supervised fine-tuning (SFT)."

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] Sampling "a single rollout per prompt" cannot stabilize standard GRPO when each update has exactly one scored trajectory, and it conflicts with the preceding claim of grouped rollouts. *(about 5 words)*
2. [Polish] "Stabilised GRPO training" provides no measurable definition of stability. *(about 5 words)*
3. [Polish] "Sampling a single rollout per prompt, so each update used exactly one scored trajectory" repeats the same one-trajectory idea. *(saves about 5 words)*

**Why**
1. Standard GRPO computes a group-relative advantage from multiple scored rollouts; with one rollout, its reward equals the group mean and the centered advantage is zero. An epsilon can avoid division by zero but cannot restore the reward-driven learning signal, while the incompatible rollout counts make readers question whether the two bullets describe the same experiment accurately.
2. A reader cannot tell whether stability means fewer collapsed runs, lower reward variance, more successful completions, or another observable change. Without a criterion, the claimed improvement cannot be evaluated.
3. The second clause restates rather than develops the method, making an already technical line heavier. If the one-rollout description remains after the technical correction, it should appear only once.

**How to change it**
1. If standard GRPO was used, replace "a single rollout" with the actual count, [more than one], and make it consistent with "grouped tool-use rollouts." If this was a separate experiment or used one rollout, identify that stage and name [the nonstandard baseline or objective that supplied a nonzero advantage]; otherwise remove the stabilization claim.
2. If recorded, replace it with "reduced [most relevant instability metric] from [before] to [after]."
3. If that description is technically accurate, compress it to "using one scored rollout per prompt and update."

*raised by content, narrative, wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] "AI-first engineering practices" is undefined jargon that does not identify the workflow, tooling, or platform capability introduced. *(about 4 words)*
2. [Important] "Accelerating delivery and improving outcomes for downstream teams" states vague benefits without a checkable result. *(about 2 words)*

**Why**
1. A technical reader cannot determine what you implemented or what multi-agent expertise the work demonstrates. The broad label therefore consumes space without establishing a concrete engineering contribution.
2. The reader cannot tell what became faster, which outcome improved, or whether downstream teams adopted the change. That makes the claimed impact sound promotional rather than demonstrated.

**How to change it**
1. Replace the phrase with [the specific practice or platform capability introduced], including only the one or two implementation details that best demonstrate the work.
2. Replace the phrase with [delivery metric and comparison] or [checkable downstream-team adoption outcome].

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] "A 50% reduction" is mathematically wrong for a decrease from 900 ms to 600 ms. *(no words)*

**Why**
The decrease is 300 ms against a 900 ms baseline, which is 33.3%. The visible arithmetic error can make a reader distrust otherwise strong performance measurements.

**How to change it**
Replace "a 50% reduction" with "a 33% reduction."

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] "By 12%" incorrectly describes the change from 71% to 83%. *(about 1 word)*
2. [Important] The strongest Agent Runtime Suite bullet is not placed first. *(no words)*
3. [Polish] "The benchmark suite" does not identify the tasks or workload represented by the completion rate. *(about 3 words)*

**Why**
1. The absolute change is 12 percentage points, while the relative increase from the 71% baseline is approximately 16.9%. Using percent for the point difference overstates or ambiguously labels the result.
2. The task-completion line presents a direct product-quality result, a baseline, and a concrete multi-agent intervention. Opening with the vague adoption claim instead delays the project’s clearest evidence of value.
3. Without knowing what was evaluated, a technical reader cannot judge the relevance or difficulty of the 71% to 83% improvement. The missing context weakens an otherwise concrete metric.

**How to change it**
1. Replace "by 12%" with "by 12 percentage points."
2. After correcting the percentage-point wording, move this entire bullet to the first position in the entry.
3. Replace it with [benchmark name or brief description of the evaluated task type].

*raised by content, wording, narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Polish] "Upstreamed 8 citation and faithfulness metrics" does not identify the technical work that enabled the contribution. *(about 8 words)*

**Why**
A technical reader cannot tell whether you designed the metrics, integrated them into the framework, developed tests, or changed configuration. That uncertainty hides the engineering depth behind the accepted upstream result.

**How to change it**
After "metrics," add "by [single implementation detail that enabled their integration into the default benchmark]."

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Polish] "A Kendall correlation of 0.89" does not name the two rankings or variables being correlated. *(about 7 words)*
2. [Polish] "Showed" is less precise than the experimental action described. *(no words)*

**Why**
1. The statistic sounds strong, but a reader cannot fully interpret what it demonstrates about evaluator validity without the comparison. Naming both variables connects the coefficient to the degradation experiment.
2. The line reports a structured degradation study across more than 400 trials, not a general observation. A more exact verb makes the validation work explicit at the start.

**How to change it**
1. If accurate, replace it with "Kendall τ=0.89 between [evaluator score or ranking] and [injected degradation severity or order]."
2. If the experiment was intended to establish evaluator validity, replace "Showed" with "Validated."

*raised by content, wording*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] "Their modules with layered instrumentation" leaves both the responsible modules and the diagnostic method unspecified. *(about 4 words)*
2. [Polish] "Each was fixed upstream" uses passive voice and hides who fixed the defects. *(about 2 words)*

**Why**
1. The pronoun has no clear referent, while "layered instrumentation" does not tell an outside reader whether you used traces, logs, assertions, or tests. As a result, the line reports successful debugging without revealing the skill or evidence that isolated the defects.
2. A reader cannot tell whether you implemented the fixes, collaborated on them, or only reported the defects. That ambiguity prevents the line from accurately showing the extent of your ownership.

**How to change it**
1. Replace the phrase with "[specific modules] using [the most diagnostic trace, log, assertion, or test]." If module names are not useful, use "the responsible modules" or "their respective modules."
2. If you participated, replace the phrase with [your specific role in implementing the upstream fixes]. Otherwise use "prompting upstream fixes to all three."

*raised by content, wording*

## Already working

- s2:e1:b1: Provides a complete baseline-to-result comparison on a held-out evaluation set.
- s2:e1:b5: Shows that the documentation became an adopted operating artifact.
