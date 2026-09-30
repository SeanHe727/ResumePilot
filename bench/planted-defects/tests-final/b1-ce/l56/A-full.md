# Full review: resume.pdf

**86/100** — format 100 · content 78 · wording 82 · narrative 84

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 16 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer

**Problem**
[Important] Experience is not ordered newest first. *(no words)*

**Why**
Eastern Robotics Co. from Aug 2022 to Jul 2024 appears above Mobility Systems Company from Oct 2024 to May 2025. This breaks the expected reverse-chronological scan and can make the reader miss the more recent ML engineering experience.

**How to change it**
Move the entire Mobility Systems Company entry above Eastern Robotics Co. within EXPERIENCE.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
1. [Important] The monitoring-dashboard and on-call work has no measurable operational result. *(about 8 words to add)*
2. [Polish] "Owned" frames the work as a duty, and "the on-call rotation that used them" describes the dashboard-rotation relationship awkwardly. *(no words)*

**Why**
1. A reader can see the responsibility but not why it mattered to the robotics operation or engineering team. "Across two major releases" shows scope or duration, not whether detection, response, or alert coverage improved, so ownership alone does not establish value.
2. The opening makes the bullet sound like an assigned responsibility rather than a concrete contribution. The reader may also have to stop to determine whether the dashboards supported the rotation, whether the candidate owned the rotation, or both.

**How to change it**
1. Replace or follow the responsibility statement with the most direct resulting change, such as [reduced time to detect or resolve incidents] or [improved alert coverage], and add [the number of services or alerts covered] or a before-and-after operational measure.
2. Replace "Owned" with a concrete action such as "Built" or "Improved," if accurate, and state directly that the dashboards supported the on-call rotation rather than using "that used them."

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
1. [Important] The strongest achievement is not the opening phrase. *(no words)*
2. [Polish] "fail the build" is in the present tense inside a past-tense bullet. *(no words)*

**Why**
1. The latency result is the clearest quantified technical outcome in the entry. Leading with the responsibility statement delays the evidence most likely to make a recruiter continue reading.
2. The ended role is described in the past tense, so the present-tense phrase creates a small consistency error. It can make the reader wonder whether the load-test gate is still active or whether the tense was accidental.

**How to change it**
1. Move the latency bullet beginning "Reduced p95 API latency from 420 ms to 180 ms" above this bullet.
2. Change "fail the build" to "failed the build" if the tests were configured during the role and the sentence is describing that completed work.

*raised by narrative, wording*

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
[Polish] "Maintained" delays the concrete CI change and its release-cycle result. *(saves about 3 words)*

**Why**
The opening frames the work as a continuing duty rather than the automated regression checks that changed the process. A scanning reader reaches the strongest action and measurable result later than necessary.

**How to change it**
Move "adding automated regression checks" to the front and cut or move "Maintained the CI pipeline" after the concrete change.

*raised by wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog result is not quantified against a before-and-after comparison. *(about 5 words to add)*
2. [Polish] The morning-dispatch result is buried among several unrelated responsibilities, and "which removed" has an unclear antecedent. *(saves about 4 words)*

**Why**
1. The reader can understand that morning dispatch was no longer delayed, but cannot judge how consistently or materially the problem was resolved. "30 robot-fleet services" measures scope, not the reduction in nightly backlog.
2. The reader must pass through the migration, logging rewrite, onboarding, and on-call work before reaching the operational benefit. "Which" could refer to any of those actions, so the bullet does not clearly identify what removed the backlog.

**How to change it**
1. Add one compact anchor after the outcome, such as [backlog count or frequency before and after], measured across [the relevant operating period].
2. Move the dispatch result immediately after the event-queue migration and replace "which removed" with a direct result clause tied to that migration; move or cut the onboarding and on-call details if space is limited.

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The accuracy bullet contains several fine-tuning details without making the primary technical contribution easy to scan. *(saves about 8 words)*

**Why**
A hiring reader can see that specialized fine-tuning was involved, but may not quickly identify which method mattered most to the increase from 71% to 79%. The technical density competes with the strongest evidence, the held-out-case result.

**How to change it**
Keep the accuracy result prominent and retain only the most differentiating method; if accurate, keep "assistant-only loss masking" as the specific technique and move or cut the less essential detail.

*raised by content*

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
1. [Error] Dynamic batching cannot explain a 40% latency reduction for single-request inference. *(no words)*
2. [Important] The latency result gives only a relative change and uses a dense workload phrase. *(about 4 words to add)*

**Why**
1. Dynamic batching improves throughput by combining concurrent requests, while a single request cannot benefit from batching and may incur batch-formation delay. INT8 execution can reduce computation time, but dynamic batching alone does not support this single-request claim.
2. A reader cannot judge the resulting response time without baseline and final p95 values. "Single-request edge inference" also makes the scope of the comparison hard to identify on a quick scan.

**How to change it**
1. Attribute the measured reduction to INT8 optimization only if that was the tested cause, or change the condition to concurrent inference if dynamic batching was measured under load; otherwise remove or soften the unsupported claim.
2. Add [baseline-to-result p95 latency] if available, or specify the relevant [request or model workload] after the inference description; replace the dense compound phrase with that clearer scope.

*raised by content, wording*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Error] The stated GRPO reward cannot directly support the claimed 5% latency reduction. *(saves about 5 words)*
2. [Important] The bullet leads with three method details, so the result and the candidate's specific action are easy to miss. *(no words)*
3. [Important] "Reduced end-to-end latency 5%" lacks a baseline or comparison point. *(about 3 words to add)*

**Why**
1. The composite reward contains accuracy, citation validity, and call count, but not latency, so the training loop had no direct latency signal. Fewer calls might indirectly reduce latency, but that does not establish a measured 5% reduction without a separate latency measurement and demonstrated relationship.
2. A scanning reader reaches the outcome only after the grouped rollouts, composite reward, and GRPO reference are listed. The opening also does not make clear which design choice the candidate owned.
3. The reader cannot tell the starting latency, final latency, or comparison condition. Even if the result is separately validated, the magnitude is harder to assess without that anchor.

**How to change it**
1. Remove the latency outcome, or report it only if latency was separately measured and its relationship to the trained policy was demonstrated; otherwise state the reward or quality outcome the setup actually optimized.
2. Move the measured outcome to the front and retain only the one or two method details that best show the contribution; if accurate, add [the component or workflow whose latency changed].
3. Add [baseline-to-result latency] or [the comparison condition] if available, while retaining the 5% figure only if it is supported by that measurement.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] Sampling one rollout per prompt does not stabilize standard GRPO training. *(saves about 3 words)*
2. [Important] "Stabilised GRPO training" does not identify an observable training result. *(about 4 words to add)*
3. [Polish] "Sampling a single rollout per prompt" and "exactly one scored trajectory" repeat the same fact. *(saves about 5 words)*

**Why**
1. GRPO relies on multiple rollouts per prompt to compare relative rewards and estimate within-prompt advantages. With one rollout, that comparison disappears, making sparse-reward updates high-variance or uninformative rather than stabilized.
2. The reader cannot tell whether stability meant fewer failed updates, lower reward variance, more consistent convergence, or another measurable change. Without an observable outcome, the claim is difficult to verify or discuss technically.
3. The second phrase adds no new result or explanation after the first has already established the rollout count. The repetition uses space that could support an observable training outcome or a clearer method description.

**How to change it**
1. Remove the stabilization claim, or describe a different estimator if one was actually used; standard GRPO stabilization requires multiple scored rollouts per prompt.
2. Replace the phrase with [the observable training-stability outcome] measured against [the prior or alternative rollout setup], keeping the rollout explanation only if it accurately shows the contribution.
3. Cut either the single-rollout phrase or the exactly-one-trajectory phrase, subject to correcting the unsupported stabilization claim.

*raised by content, wording*

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Polish] The runbook adoption statement does not show its scope or duration. *(about 5 words to add)*

**Why**
The reader can see that the documentation was accepted, but cannot tell whether it became the standard for all on-call reviewers or was used only temporarily. That leaves the operational reach of the documentation unclear.

**How to change it**
If accurate, add [the number or scope of on-call reviewers] or [the period during which the runbook remained in use] after the adoption statement.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The AI-first adoption claim gives no specific practice, beneficiary, or measurable outcome. *(about 7 words to add)*
2. [Important] "AI-first engineering practices" does not identify the practices or the platform change that enabled adoption. *(about 5 words to add)*

**Why**
1. A hiring reader cannot tell whether the work affected release speed, reliability, developer throughput, adoption, or another outcome. Without a baseline, delta, reach, or concrete practice, the bullet reads as general praise rather than evidence of platform value.
2. The phrase signals a theme but not a technical contribution that a specialist can understand or discuss in an interview. The reader cannot distinguish whether the candidate introduced tooling, workflow changes, testing practices, or something else.

**How to change it**
1. Replace the broad outcome language with [the specific change and beneficiary], such as [delivery metric changed for downstream team], and add [the number of downstream teams using the practice] or another measured anchor.
2. Replace the phrase with [one or two specific practices implemented] and state the platform change that enabled adoption, if accurate.

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The reduction from 900 ms to 600 ms is 33.3%, not 50%. *(no words)*

**Why**
The latency decreased by 300 ms, and 300 divided by the original 900 ms equals 33.3%. A reader checking the arithmetic may question the reliability of the other performance claims.

**How to change it**
Replace "a 50% reduction" with "a 33.3% reduction."

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The change from 71% to 83% is 12 percentage points, not an unqualified 12% increase. *(adds 1 word)*
2. [Important] The strongest achievement is not the opening bullet. *(no words)*

**Why**
1. The figures show a rise of 12 percentage points, while the relative increase is approximately 16.9%. The current wording can make the reader wonder whether the percentage statement or the endpoint figures is intended.
2. The task-completion result has a clear benchmark, baseline, endpoint, and technical intervention. Leading with the broader adoption claim delays the most concrete evidence of runtime impact.

**How to change it**
1. Replace "by 12%" with "by 12 percentage points."
2. Move the bullet beginning "Raised the runtime’s task-completion rate" above this bullet.

*raised by content, wording, narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The metrics contribution shows adoption but not the evaluation capability it added or how it was integrated. *(about 8 words to add)*

**Why**
The reader can see that eight metrics were accepted into the default benchmark, but cannot tell what the metrics enabled the framework to detect or how they were implemented. That leaves the technical depth of the contribution unclear.

**How to change it**
Keep the default-benchmark adoption outcome and add [the specific evaluation capability or coverage gain], plus [the single most technical integration or validation step] if it demonstrates work beyond submitting the metrics.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify the two things being correlated. *(about 5 words to add)*
2. [Important] "Tracks injected degradation" does not explain how the evaluator was tested. *(about 6 words to add)*
3. [Polish] "Injected degradation" is compressed jargon that slows interpretation. *(about 3 words to add)*

**Why**
1. A reader cannot tell whether evaluator scores were compared with degradation severity, another ranking, or reference judgments. Without that relationship, the strength of the 0.89 result is difficult to interpret.
2. The removed citations, sources, and claims show the perturbations, but not the evaluation or ranking procedure that connected degradation severity to evaluator behavior. A technical reader may ask how the correlation was established.
3. A recruiter scanning quickly may not immediately understand what was removed or altered in the reports. The surrounding list already contains the clearer experimental conditions, so the shorthand does not save much space.

**How to change it**
1. Replace or expand the phrase with [what the evaluator score was correlated against], retaining the trial count if it is the main validation scale.
2. Replace the compressed result with [the evaluation or ranking procedure used to compare degradation severity with evaluator scores], if accurate.
3. Replace "injected degradation" with a plain description tied to the listed removals, such as [reports with citations, sources, or claims removed], if accurate.

*raised by content, wording*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] The three defect categories are too broad to show what failed or where the tracing led. *(saves about 4 words)*
2. [Polish] "Each was fixed upstream" confirms resolution but gives no post-fix result. *(about 5 words to add)*
3. [Polish] "Layered instrumentation" does not quickly explain what the candidate did. *(about 4 words to add)*

**Why**
1. The reader sees that debugging occurred but cannot picture the specific failure modes or components isolated by the instrumentation. "Stability" and "sourcing" especially do not explain what behavior was defective.
2. The reader can see that the defects were addressed, but cannot judge their practical importance or whether stability, sourcing, or parameter handling improved. The line therefore ends with closure rather than evidence of impact.
3. The phrase is specialized and leaves the diagnostic action implicit. A reader may understand that instrumentation was involved but still not know whether the candidate added tracing, compared stages, or isolated module-level failures.

**How to change it**
1. Replace the broad category list with [the most representative defect or affected module], retaining the count if useful.
2. Add [the most telling post-fix result], measured against [the affected behavior before the fix], if one was recorded.
3. Replace the phrase with [the specific tracing or instrumentation step performed], if accurate.

*raised by content, wording*

## Skills

> Kubernetes

**Problem**
[Important] Kubernetes appears in ML & Agents without supporting experience or project evidence. *(no words)*

**Why**
A recruiter may expect to find Kubernetes in an experience or project bullet and question whether the skill was used substantively. The unsupported listing weakens confidence in the skills section.

**How to change it**
Add evidence of Kubernetes use to the relevant experience or project entry if accurate; otherwise remove Kubernetes from ML & Agents.

*raised by narrative*

## Already working

- s2:e1:b0: Connects a concrete ML system contribution to a substantial operational outcome.
