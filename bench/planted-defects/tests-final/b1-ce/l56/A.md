> Here is my resume: bench/planted-defects/tests-final/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume: 4 experience/project entries for content and wording, the whole career narrative, and formatting/ATS parsing. Education entries were not applicable for bullet review. No job description was loaded.

The main changes to make are:

1. **Reorder Experience**
   - Move Mobility Systems Company above Eastern Robotics Co.; the resume should be reverse chronological.

2. **Fix numerical accuracy**
   - Agent Runtime Suite: 900 ms to 600 ms is a **33.3% reduction**, not 50%.
   - 71% to 83% is a **12-percentage-point increase**, not unambiguously a 12% increase.

3. **Clarify or substantiate weaker bullets**
   - Add a measurable result to the diagnostics dashboards/on-call bullet.
   - Quantify the “nightly backlogs” removed through the 30-service migration.
   - Replace vague outcomes such as “accelerating delivery” and “improving outcomes” with specific effects.
   - Clarify what “stabilised GRPO training” means and ensure the stated method actually supports the latency claim.

4. **Improve focus and scanability**
   - Put outcomes before long lists of technical methods, particularly in the Mobility Systems internship.
   - Remove repeated information in the GRPO bullet.
   - Make the technical language around “injected degradation,” sourcing, and parameter handling more explicit.

5. **Check the Skills section**
   - Kubernetes appears unsupported by the experience and project entries. Either add evidence of its use or remove it.

The file is one page, parses cleanly for ATS systems, and has no layout warnings. The complete specialist report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 78 · wording 82 · narrative 84

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 16 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer

**Problem**
[Important] Experience is not ordered newest first.

**Why**
Eastern Robotics Co. from Aug 2022 to Jul 2024 appears above Mobility Systems Company from Oct 2024 to May 2025. This breaks the expected reverse-chronological scan and can make the reader miss the more recent ML engineering experience.

**How to change it**
Move the entire Mobility Systems Company entry above Eastern Robotics Co. within EXPERIENCE.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
1. [Important] The monitoring-dashboard and on-call work has no measurable operational result.
2. [Polish] "Owned" frames the work as a duty, and "the on-call rotation that used them" describes the dashboard-rotation relationship awkwardly.

**Why**
1. A reader can see the responsibility but not why it mattered to the robotics operation or engineering team. "Across two major releases" shows scope or duration, not whether detection, response, or alert coverage improved, so ownership alone does not establish value.

**How to change it**
1. Replace or follow the responsibility statement with the most direct resulting change, such as [reduced time to detect or resolve incidents] or [improved alert coverage], and add [the number of services or alerts covered] or a before-and-after operational measure.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
1. [Important] The strongest achievement is not the opening phrase.
2. [Polish] "fail the build" is in the present tense inside a past-tense bullet.

**Why**
1. The latency result is the clearest quantified technical outcome in the entry. Leading with the responsibility statement delays the evidence most likely to make a recruiter continue reading.

**How to change it**
1. Move the latency bullet beginning "Reduced p95 API latency from 420 ms to 180 ms" above this bullet.

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
[Polish] "Maintained" delays the concrete CI change and its release-cycle result.

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog result is not quantified against a before-and-after comparison.
2. [Polish] The morning-dispatch result is buried among several unrelated responsibilities, and "which removed" has an unclear antecedent.

**Why**
1. The reader can understand that morning dispatch was no longer delayed, but cannot judge how consistently or materially the problem was resolved. "30 robot-fleet services" measures scope, not the reduction in nightly backlog.

**How to change it**
1. Add one compact anchor after the outcome, such as [backlog count or frequency before and after], measured across [the relevant operating period].

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The accuracy bullet contains several fine-tuning details without making the primary technical contribution easy to scan.

**Why**
A hiring reader can see that specialized fine-tuning was involved, but may not quickly identify which method mattered most to the increase from 71% to 79%. The technical density competes with the strongest evidence, the held-out-case result.

**How to change it**
Keep the accuracy result prominent and retain only the most differentiating method; if accurate, keep "assistant-only loss masking" as the specific technique and move or cut the less essential detail.

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
1. [Error] Dynamic batching cannot explain a 40% latency reduction for single-request inference.
2. [Important] The latency result gives only a relative change and uses a dense workload phrase.

**Why**
1. Dynamic batching improves throughput by combining concurrent requests, while a single request cannot benefit from batching and may incur batch-formation delay. INT8 execution can reduce computation time, but dynamic batching alone does not support this single-request claim.
2. A reader cannot judge the resulting response time without baseline and final p95 values. "Single-request edge inference" also makes the scope of the comparison hard to identify on a quick scan.

**How to change it**
1. Attribute the measured reduction to INT8 optimization only if that was the tested cause, or change the condition to concurrent inference if dynamic batching was measured under load; otherwise remove or soften the unsupported claim.
2. Add [baseline-to-result p95 latency] if available, or specify the relevant [request or model workload] after the inference description; replace the dense compound phrase with that clearer scope.

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Error] The stated GRPO reward cannot directly support the claimed 5% latency reduction.
2. [Important] The bullet leads with three method details, so the result and the candidate's specific action are easy to miss.
3. [Important] "Reduced end-to-end latency 5%" lacks a baseline or comparison point.

**Why**
1. The composite reward contains accuracy, citation validity, and call count, but not latency, so the training loop had no direct latency signal. Fewer calls might indirectly reduce latency, but that does not establish a measured 5% reduction without a separate latency measurement and demonstrated relationship.
2. A scanning reader reaches the outcome only after the grouped rollouts, composite reward, and GRPO reference are listed. The opening also does not make clear which design choice the candidate owned.
3. The reader cannot tell the starting latency, final latency, or comparison condition. Even if the result is separately validated, the magnitude is harder to assess without that anchor.

**How to change it**
1. Remove the latency outcome, or report it only if latency was separately measured and its relationship to the trained policy was demonstrated; otherwise state the reward or quality outcome the setup actually optimized.
2. Move the measured outcome to the front and retain only the one or two method details that best show the contribution; if accurate, add [the component or workflow whose latency changed].
3. Add [baseline-to-result latency] or [the comparison condition] if available, while retaining the 5% figure only if it is supported by that measurement.

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] Sampling one rollout per prompt does not stabilize standard GRPO training.
2. [Important] "Stabilised GRPO training" does not identify an observable training result.
3. [Polish] "Sampling a single rollout per prompt" and "exactly one scored trajectory" repeat the same fact.

**Why**
1. GRPO relies on multiple rollouts per prompt to compare relative rewards and estimate within-prompt advantages. With one rollout, that comparison disappears, making sparse-reward updates high-variance or uninformative rather than stabilized.
2. The reader cannot tell whether stability meant fewer failed updates, lower reward variance, more consistent convergence, or another measurable change. Without an observable outcome, the claim is difficult to verify or discuss technically.

**How to change it**
1. Remove the stabilization claim, or describe a different estimator if one was actually used; standard GRPO stabilization requires multiple scored rollouts per prompt.
2. Replace the phrase with [the observable training-stability outcome] measured against [the prior or alternative rollout setup], keeping the rollout explanation only if it accurately shows the contribution.

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Polish] The runbook adoption statement does not show its scope or duration.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The AI-first adoption claim gives no specific practice, beneficiary, or measurable outcome.
2. [Important] "AI-first engineering practices" does not identify the practices or the platform change that enabled adoption.

**Why**
1. A hiring reader cannot tell whether the work affected release speed, reliability, developer throughput, adoption, or another outcome. Without a baseline, delta, reach, or concrete practice, the bullet reads as general praise rather than evidence of platform value.
2. The phrase signals a theme but not a technical contribution that a specialist can understand or discuss in an interview. The reader cannot distinguish whether the candidate introduced tooling, workflow changes, testing practices, or something else.

**How to change it**
1. Replace the broad outcome language with [the specific change and beneficiary], such as [delivery metric changed for downstream team], and add [the number of downstream teams using the practice] or another measured anchor.
2. Replace the phrase with [one or two specific practices implemented] and state the platform change that enabled adoption, if accurate.

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The reduction from 900 ms to 600 ms is 33.3%, not 50%.

**Why**
The latency decreased by 300 ms, and 300 divided by the original 900 ms equals 33.3%. A reader checking the arithmetic may question the reliability of the other performance claims.

**How to change it**
Replace "a 50% reduction" with "a 33.3% reduction."

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The change from 71% to 83% is 12 percentage points, not an unqualified 12% increase.
2. [Important] The strongest achievement is not the opening bullet.

**Why**
1. The figures show a rise of 12 percentage points, while the relative increase is approximately 16.9%. The current wording can make the reader wonder whether the percentage statement or the endpoint figures is intended.
2. The task-completion result has a clear benchmark, baseline, endpoint, and technical intervention. Leading with the broader adoption claim delays the most concrete evidence of runtime impact.

**How to change it**
1. Replace "by 12%" with "by 12 percentage points."
2. Move the bullet beginning "Raised the runtime’s task-completion rate" above this bullet.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The metrics contribution shows adoption but not the evaluation capability it added or how it was integrated.

**Why**
The reader can see that eight metrics were accepted into the default benchmark, but cannot tell what the metrics enabled the framework to detect or how they were implemented. That leaves the technical depth of the contribution unclear.

**How to change it**
Keep the default-benchmark adoption outcome and add [the specific evaluation capability or coverage gain], plus [the single most technical integration or validation step] if it demonstrates work beyond submitting the metrics.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify the two things being correlated.
2. [Important] "Tracks injected degradation" does not explain how the evaluator was tested.
3. [Polish] "Injected degradation" is compressed jargon that slows interpretation.

**Why**
1. A reader cannot tell whether evaluator scores were compared with degradation severity, another ranking, or reference judgments. Without that relationship, the strength of the 0.89 result is difficult to interpret.
2. The removed citations, sources, and claims show the perturbations, but not the evaluation or ranking procedure that connected degradation severity to evaluator behavior. A technical reader may ask how the correlation was established.

**How to change it**
1. Replace or expand the phrase with [what the evaluator score was correlated against], retaining the trial count if it is the main validation scale.
2. Replace the compressed result with [the evaluation or ranking procedure used to compare degradation severity with evaluator scores], if accurate.

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] The three defect categories are too broad to show what failed or where the tracing led.
2. [Polish] "Each was fixed upstream" confirms resolution but gives no post-fix result.
3. [Polish] "Layered instrumentation" does not quickly explain what the candidate did.

## Skills

> Kubernetes

**Problem**
[Important] Kubernetes appears in ML & Agents without supporting experience or project evidence.

**Why**
A recruiter may expect to find Kubernetes in an experience or project bullet and question whether the skill was used substantively. The unsupported listing weakens confidence in the skills section.

**How to change it**
Add evidence of Kubernetes use to the relevant experience or project entry if accurate; otherwise remove Kubernetes from ML & Agents.

## Already working

- s2:e1:b0: Connects a concrete ML system contribution to a substantial operational outcome.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8c15db14.md.

