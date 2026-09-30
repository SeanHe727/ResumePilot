> Here is my resume: bench/planted-defects/tests-final/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Content and wording specialists reviewed all 4 entries with bullets; narrative and format specialists reviewed the full resume. The 2 education entries have no bullets to review. Job-description matching did not run because no posting was provided.

The changes to make first are:

1. **Correct the figures in Agent Runtime Suite:** 900 ms to 600 ms is a 33% reduction, not 50%; 71% to 83% is a 12-percentage-point increase, not 12%.
2. **Resolve the training-method conflict:** the Mobility Systems bullets describe grouped GRPO rollouts but also say there was one rollout per prompt. Check which count or method is accurate before editing.
3. **Put Experience in newest-first order:** move Mobility Systems above Eastern Robotics. Then make the dashboard-ownership and “AI-first engineering practices” bullets describe specific actions and observed results.

The PDF parsed cleanly. The full review is in `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 80 · wording 80 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 8 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

**Problem**
[Important] Experience is not ordered newest-first.

**Why**
The Aug 2022–Jul 2024 role appears before the Oct 2024–May 2025 role. A reader scanning for your most recent employment could overlook the later internship.

**How to change it**
Move the Mobility Systems Company entry above the Eastern Robotics Co. entry in Experience.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
1. [Important] The dashboard description states ownership without identifying a change you made.
2. [Polish] The on-call description adds a responsibility without showing what you did or what changed.

**Why**
1. A reader can see the responsibility but not the engineering work behind it. That makes the dashboard contribution harder to distinguish from routine maintenance.

**How to change it**
1. Replace “Owned” with [the action you took] and name [the most consequential dashboard change], if accurate.

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
1. [Polish] “Automated regression checks” does not identify the model-release regression being checked.
2. [Polish] The line opens with a general maintenance duty instead of the change and its result.

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The list of separate activities makes it unclear which work removed the nightly backlogs.
2. [Important] The backlog result is buried after the other activities.
3. [Polish] The entry does not open with its strongest contribution.

**Why**
1. Logging, onboarding and weekend on-call appear between the migration and its result. A reader may mistakenly attribute the backlog improvement to the combined list rather than the event-queue migration.
2. A scanning reader may miss that removing nightly backlogs was the consequence of the migration. Placing the result beside the event-queue change makes that connection clear.

**How to change it**
1. Cut this clause from the migration bullet; if the other activities merit space, put them in a separate bullet.
2. Move “which removed the nightly backlogs that delayed morning dispatch” directly after the event-queue migration.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Polish] “ML-extracted features” does not explain how the features informed triage.

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Error] Dynamic batching cannot explain a 40% latency reduction for single-request edge inference.

**Why**
Batching combines concurrent requests; an isolated request has nothing to batch with. A reader familiar with inference serving will question the measurement unless the stated workload matches the mechanism.

**How to change it**
If the single-request gain was measured, replace “by serving the INT8 engine with dynamic batching” with [the change actually responsible]. If the gain came from dynamic batching under concurrent load, replace “single-request edge inference” with “loaded-service edge inference.”

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The method-heavy opening buries the 5% latency result.
2. [Polish] The 5% end-to-end latency result does not say what workflow was timed.

**Why**
1. A scanning reader must get through the rollout, reward and reference details before reaching the outcome. Putting the result first makes the reason for including the training work clear.

**How to change it**
1. Move “reduced end-to-end latency 5%” to the opening. Keep afterward only the method components needed to explain that result.

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] A single scored rollout per prompt cannot provide the group-relative reward comparison used by standard GRPO.
2. [Polish] “Stabilised” does not identify the instability resolved or an observable improvement.

**Why**
1. GRPO compares multiple scored rollouts for the same prompt; with one, the within-group advantage is zero or undefined, so there is no reward-driven GRPO update. The claim also conflicts with the grouped rollouts described in the preceding bullet, making the training account internally inconsistent.

**How to change it**
1. If you used GRPO, replace “a single rollout per prompt” with [the actual number of scored rollouts per prompt]. If updates used one trajectory per prompt, replace “GRPO” with [the training method or advantage estimator actually used].

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The adoption claim does not identify the practice introduced or how you spread it.
2. [Important] The delivery and downstream benefits are too vague to show what changed.

**Why**
1. A reader cannot tell what you built or changed across the platform. That leaves the skill demonstrated by the adoption work unclear.
2. Neither benefit identifies a workflow or a prior state against which to judge the improvement. One checkable outcome would make the contribution more credible than two broad claims.

**How to change it**
1. Replace “AI-first engineering practices” with [the specific practice introduced], and replace “Drove adoption” with [the action you took to roll it out], if accurate.
2. Replace this phrase with [a specific delivery or downstream workflow change] and [evidence compared with its prior state].

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The stated 50% reduction is mathematically wrong: 900 ms to 600 ms is about a 33% reduction.

**Why**
The decrease is 300 ms, measured against the original 900 ms. A reader who checks the arithmetic may doubt the care taken with the other performance claims.

**How to change it**
Replace “a 50% reduction” with “a 33% reduction,” or remove the percentage and keep the before-and-after figures.

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The stated 12% increase is wrong: 71% to 83% is an increase of 12 percentage points.
2. [Polish] The benchmark reference does not identify the tasks behind the completion rate.
3. [Polish] The entry does not open with its strongest measured outcome.

**Why**
1. A relative increase from the original 71% rate would be about 16.9%, not 12%. Using the wrong unit can make a reader question the benchmark result despite the clear before-and-after rates.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points,” retaining “from 71% to 83%.”

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The correlation does not identify the reference ordering used for comparison.
2. [Polish] The wording makes the trials sound like the actor removing material.

**Why**
1. A reader needs to know what the evaluator’s scores were ranked against to interpret the 0.89 result. Without that reference, the figure does not fully establish what the evaluator tracked.

**How to change it**
1. Add “against [the reference ordering used for the correlation]” after “0.89”; if accurate, name the injected-degradation ordering.

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] The defect categories do not show what any defect caused.
2. [Polish] “Layered instrumentation” does not identify the signal that located the defects.
3. [Polish] The upstream-fix wording obscures who made the fixes.

## Already working

- s2:e0:b1: Connects a substantial before-and-after result to specific engineering changes.
- s2:e1:b1: Pairs a clear evaluation result with the method used to achieve it.
- s3:e1:b0: Connects a specific contribution to ongoing use in the release benchmark.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-1e0be37d.md.

