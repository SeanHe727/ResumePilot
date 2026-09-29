# Full review: resume.pdf

**87/100** — format 100 · content 80 · wording 80 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 8 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

**Problem**
[Important] Experience is not ordered newest-first. *(no words)*

**Why**
The Aug 2022–Jul 2024 role appears before the Oct 2024–May 2025 role. A reader scanning for your most recent employment could overlook the later internship.

**How to change it**
Move the Mobility Systems Company entry above the Eastern Robotics Co. entry in Experience.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
1. [Important] The dashboard description states ownership without identifying a change you made. *(about 5 words)*
2. [Polish] The on-call description adds a responsibility without showing what you did or what changed. *(about 8 words)*

**Why**
1. A reader can see the responsibility but not the engineering work behind it. That makes the dashboard contribution harder to distinguish from routine maintenance.
2. Saying the rotation used the dashboards does not tell a reader whether their use improved diagnosis or response. Without an observed outcome, the on-call work reads as a duty rather than a contribution.

**How to change it**
1. Replace “Owned” with [the action you took] and name [the most consequential dashboard change], if accurate.
2. Replace this phrase with [what you did during on-call] and, if substantiated, [the observed change in diagnosis or response].

*raised by content, wording*

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
1. [Polish] “Automated regression checks” does not identify the model-release regression being checked. *(about 4 words)*
2. [Polish] The line opens with a general maintenance duty instead of the change and its result. *(no words)*

**Why**
1. The shorter release cycle is clear, but a reader cannot picture what the checks protected against. Naming one consequential check would make the perception-team work easier to discuss.
2. A scanning reader reaches the CI responsibility before the regression checks and the shorter release cycle. Leading with the change makes the contribution apparent sooner.

**How to change it**
1. Replace “automated regression checks” with “automated checks for [the most consequential regression tested],” if accurate.
2. Move “adding automated regression checks” to the opening, followed by the change from “2 weeks to 3 days”; retain the CI-pipeline context afterward.

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The list of separate activities makes it unclear which work removed the nightly backlogs. *(saves about 21 words)*
2. [Important] The backlog result is buried after the other activities. *(no words)*
3. [Polish] The entry does not open with its strongest contribution. *(no words)*

**Why**
1. Logging, onboarding and weekend on-call appear between the migration and its result. A reader may mistakenly attribute the backlog improvement to the combined list rather than the event-queue migration.
2. A scanning reader may miss that removing nightly backlogs was the consequence of the migration. Placing the result beside the event-queue change makes that connection clear.
3. The migration has both a defined scale and an operational result. Leading with it would give a scanning reader that evidence before the less specific dashboard responsibility.

**How to change it**
1. Cut this clause from the migration bullet; if the other activities merit space, put them in a separate bullet.
2. Move “which removed the nightly backlogs that delayed morning dispatch” directly after the event-queue migration.
3. Move this bullet above the dashboard bullet within the Eastern Robotics Co. entry.

*raised by wording, content, narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Polish] “ML-extracted features” does not explain how the features informed triage. *(about 7 words)*

**Why**
The signal count and backlog reduction establish scale and outcome, but not the decision the branch made. One concrete routing or flagging decision would show the ML engineering contribution.

**How to change it**
Replace “with ML-extracted features” with [how the features determined which cases were flagged or routed].

*raised by content*

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Error] Dynamic batching cannot explain a 40% latency reduction for single-request edge inference. *(about 2 words)*

**Why**
Batching combines concurrent requests; an isolated request has nothing to batch with. A reader familiar with inference serving will question the measurement unless the stated workload matches the mechanism.

**How to change it**
If the single-request gain was measured, replace “by serving the INT8 engine with dynamic batching” with [the change actually responsible]. If the gain came from dynamic batching under concurrent load, replace “single-request edge inference” with “loaded-service edge inference.”

*raised by content*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The method-heavy opening buries the 5% latency result. *(saves about 8 words)*
2. [Polish] The 5% end-to-end latency result does not say what workflow was timed. *(about 5 words)*

**Why**
1. A scanning reader must get through the rollout, reward and reference details before reaching the outcome. Putting the result first makes the reason for including the training work clear.
2. A reader cannot tell whether the measure covers a diagnostic case, a tool-use sequence or another workflow. That uncertainty makes the size of the gain difficult to interpret.

**How to change it**
1. Move “reduced end-to-end latency 5%” to the opening. Keep afterward only the method components needed to explain that result.
2. Add [the workflow whose end-to-end latency was measured] beside the 5% result.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] A single scored rollout per prompt cannot provide the group-relative reward comparison used by standard GRPO. *(about 3 words)*
2. [Polish] “Stabilised” does not identify the instability resolved or an observable improvement. *(about 6 words)*

**Why**
1. GRPO compares multiple scored rollouts for the same prompt; with one, the within-group advantage is zero or undefined, so there is no reward-driven GRPO update. The claim also conflicts with the grouped rollouts described in the preceding bullet, making the training account internally inconsistent.
2. The line gives a sampling choice but no way to judge what it accomplished. A concrete training result would let a reader assess the stability claim.

**How to change it**
1. If you used GRPO, replace “a single rollout per prompt” with [the actual number of scored rollouts per prompt]. If updates used one trajectory per prompt, replace “GRPO” with [the training method or advantage estimator actually used].
2. Replace “Stabilised” with [the observed training improvement] and, if available, [its before-and-after measure]; keep the rollout choice only if it correctly explains that improvement.

*raised by content, narrative*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The adoption claim does not identify the practice introduced or how you spread it. *(about 5 words)*
2. [Important] The delivery and downstream benefits are too vague to show what changed. *(about 5 words)*

**Why**
1. A reader cannot tell what you built or changed across the platform. That leaves the skill demonstrated by the adoption work unclear.
2. Neither benefit identifies a workflow or a prior state against which to judge the improvement. One checkable outcome would make the contribution more credible than two broad claims.

**How to change it**
1. Replace “AI-first engineering practices” with [the specific practice introduced], and replace “Drove adoption” with [the action you took to roll it out], if accurate.
2. Replace this phrase with [a specific delivery or downstream workflow change] and [evidence compared with its prior state].

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The stated 50% reduction is mathematically wrong: 900 ms to 600 ms is about a 33% reduction. *(no words)*

**Why**
The decrease is 300 ms, measured against the original 900 ms. A reader who checks the arithmetic may doubt the care taken with the other performance claims.

**How to change it**
Replace “a 50% reduction” with “a 33% reduction,” or remove the percentage and keep the before-and-after figures.

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The stated 12% increase is wrong: 71% to 83% is an increase of 12 percentage points. *(about 1 word)*
2. [Polish] The benchmark reference does not identify the tasks behind the completion rate. *(about 3 words)*
3. [Polish] The entry does not open with its strongest measured outcome. *(no words)*

**Why**
1. A relative increase from the original 71% rate would be about 16.9%, not 12%. Using the wrong unit can make a reader question the benchmark result despite the clear before-and-after rates.
2. The rates are easy to compare, but a reader cannot tell what kind of work the runtime completed. A brief task description would help them judge the scope of the improvement.
3. The task-completion bullet gives a before-and-after result tied to a specific runtime change. Placing it first would show a scanning reader concrete evidence before the broad adoption claim.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points,” retaining “from 71% to 83%.”
2. Replace “the benchmark suite” with [the benchmark name or type of tasks evaluated].
3. After correcting “by 12%” to “by 12 percentage points,” move this bullet to the top of the Agent Runtime Suite entry.

*raised by content, wording, narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The correlation does not identify the reference ordering used for comparison. *(about 6 words)*
2. [Polish] The wording makes the trials sound like the actor removing material. *(about 2 words)*

**Why**
1. A reader needs to know what the evaluator’s scores were ranked against to interpret the 0.89 result. Without that reference, the figure does not fully establish what the evaluator tracked.
2. The intended test is understandable, but the phrasing briefly misdirects the reader about what happened in the trials. Naming the removal as part of the trial setup makes the evaluation easier to parse.

**How to change it**
1. Add “against [the reference ordering used for the correlation]” after “0.89”; if accurate, name the injected-degradation ordering.
2. Replace “trials that removed” with “trials involving the removal of.”

*raised by content, wording*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] The defect categories do not show what any defect caused. *(about 4 words)*
2. [Polish] “Layered instrumentation” does not identify the signal that located the defects. *(about 4 words)*
3. [Polish] The upstream-fix wording obscures who made the fixes. *(about 2 words)*

**Why**
1. A reader can see that fixes landed but cannot picture the failure they addressed. One representative failure would give the debugging work a concrete consequence.
2. The phrase names an approach but not the observation that led you to the modules. One trace point or diagnostic signal would make the debugging contribution more credible.
3. A reader may take the clause to mean you fixed the defects, although the line only establishes that you traced them. Clarifying the sequence preserves the result without implying ownership of the fixes.

**How to change it**
1. Replace one of these broad categories with [one representative failure the defect caused], keeping the upstream-fix result.
2. Replace “layered instrumentation” with [the most telling trace point or diagnostic signal used], if it fits briefly.
3. If known, name [who made the fixes]; otherwise replace “each was fixed upstream” with “all three were subsequently fixed upstream.”

*raised by content, wording*

## Already working

- s2:e0:b1: Connects a substantial before-and-after result to specific engineering changes.
- s2:e1:b1: Pairs a clear evaluation result with the method used to achieve it.
- s3:e1:b0: Connects a specific contribution to ongoing use in the release benchmark.
