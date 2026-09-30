# Full review: resume.pdf

**87/100** — format 100 · content 80 · wording 83 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 12 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Aug 2022 - Jul 2024

**Problem**
[Important] Experience is not listed in reverse chronological order. *(no words)*

**Why**
Eastern Robotics Co. appears above the more recent Mobility Systems Company role, so the reader may miss the candidate’s current ML transition. The ordering also conflicts with the standard scanning pattern recruiters use for experience sections.

**How to change it**
Move Mobility Systems Company above Eastern Robotics Co. within EXPERIENCE.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The monitoring-dashboard and on-call ownership has no stated operational result. *(about 8 words to add)*

**Why**
The reader can see the responsibility and its scope across two releases, but cannot tell whether the work improved detection, response, uptime, or reliability. Ownership and release count do not show the value of the contribution.

**How to change it**
Replace or follow the ownership statement with [the key operational metric and its baseline or comparison], such as [reduced mean time to detect from A to B], and keep “across two major releases” only if space allows.

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
[Important] The release-cycle measurement does not define what starts or ends the cycle. *(about 6 words to add)*

**Why**
A reader can understand that releases became faster, but cannot tell whether the comparison covers model training, validation, approval, deployment, or the full path to production. That ambiguity makes the three-day result harder to interpret and verify.

**How to change it**
Specify the boundaries as [from the relevant starting event to the relevant release event], if accurate—for example, from model commit to production deployment.

*raised by content*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The claim that the combined changes removed the nightly backlogs is not supported by the line. *(about 5 words to add)*
2. [Important] The dispatch outcome is buried after several unrelated actions and has an ambiguous “which removed” antecedent. *(no words)*
3. [Important] The phrase “removed the nightly backlogs” gives no magnitude or comparison for the improvement. *(about 7 words to add)*

**Why**
1. Moving services to an event queue could eliminate a backlog caused by cron-based scheduling, but rewriting a logging library, onboarding hires, and changing on-call coverage do not by themselves establish that result. Without a measured before-and-after backlog or dispatch-delay figure, the reader may doubt both the causal link and the operational value.
2. A scanning reader may not know whether the queue migration, logging rewrite, on-call change, or all three caused the dispatch improvement. The result is also easy to miss because onboarding and weekend on-call duties interrupt the technical achievement.
3. The reader cannot tell how often or how large the backlogs were before the migration, so the operational value is difficult to judge. The count of 30 services shows scope, not the size of the result.

**How to change it**
1. State the measured backlog outcome with [the before-and-after backlog or dispatch-delay figure], or soften the claim to say that the migration was intended to reduce nightly backlogs.
2. Move the dispatch outcome immediately after the queue-migration action and replace “which removed” with a direct connection to that action; place the onboarding and weekend on-call details afterward only if they support the same result.
3. Add [the number or percentage of backlog incidents before and after the migration], or [the number of mornings or dispatches no longer delayed], if accurate.

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] Dynamic batching is an unclear basis for a 40% reduction in “single-request” edge-inference p95 latency, and the comparison lacks latency endpoints or workload conditions. *(about 8 words to add)*

**Why**
Dynamic batching benefits overlapping concurrent requests, while a genuinely isolated request can incur queueing delay rather than gain from batching. Without the workload and baseline-to-result latency, the reader cannot judge whether the reduction reflects representative traffic, batching, INT8 conversion, or another factor.

**How to change it**
Specify the concurrent-load and batching conditions and add [baseline latency] to [resulting latency] under [representative workload]; attribute the reduction only to the component measured to produce it.

*raised by content*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The line attributes a 5% end-to-end latency reduction to a GRPO setup whose stated reward does not include latency. *(about 8 words to add)*
2. [Important] The 5% result is buried after a dense list of process details. *(no words)*

**Why**
1. The reward lists accuracy, citation validity, and call count, so it does not directly optimize end-to-end latency. Call count may indirectly affect latency, but without evaluation conditions and a measured comparison the causal link is not established.
2. Leading with grouped rollouts and several coordinated methods makes the main achievement harder to find in a scan. The reader may reach the result without understanding which action mattered most.

**How to change it**
1. State the measured 5% result with [baseline and resulting latency] or [evaluation workload and comparison condition], and explain the link through reduced call count; include latency in the objective only if it was actually optimized.
2. Move the measured latency result to the start of the bullet, then follow it with the grouped-rollout, reward, and GRPO details as supporting method information.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] Sampling exactly one rollout per prompt did not stabilise standard GRPO training as stated. *(saves about 6 words if the claim is removed)*
2. [Important] The claim that training was stabilised is vague and has no measurement. *(about 7 words to add)*

**Why**
1. Standard GRPO compares multiple sampled rollouts for the same prompt. With one rollout, its reward equals the group mean and the group standard deviation is zero, producing no useful normalized advantage or causing a numerical failure; a different baseline or advantage estimator would be needed.
2. The single-rollout detail shows what changed, but not what stability meant or whether the change improved model development. A reader cannot distinguish fewer failed updates, more consistent convergence, or improved evaluation quality from an unmeasured impression.

**How to change it**
1. If another baseline or advantage estimator was used, name it; otherwise remove the claim that single-rollout sampling stabilised GRPO training.
2. Replace or qualify “Stabilised” with [observable training outcome] and add [the one before-and-after training or evaluation measure]; if no such measure exists, state only the concrete training behavior that changed.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The claim that AI-first practices accelerated delivery and improved downstream outcomes is unsupported and too broad. *(about 10 words to add)*

**Why**
Adoption activity alone does not demonstrate faster delivery or better downstream results. The reader cannot tell what practices changed, which outcome improved, or whether the claim reflects a measured platform-wide result rather than an impression.

**How to change it**
Replace the category and broad outcome language with [the specific practice or practices introduced] and [measured delivery or downstream-team outcome evidence] against [a baseline or comparison]; otherwise state only that the practices were adopted.

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The reduction from 900 ms to 600 ms is 33.3%, not 50%. *(about 1 word to add)*

**Why**
The decrease is 300 ms, which is 33.3% of the original 900 ms. A 50% reduction from 900 ms would result in 450 ms, so the current figure creates a direct credibility problem.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction,” or omit the percentage and retain the two latency values.

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The increase from 71% to 83% is 12 percentage points, not a 12% increase. *(about 1 word to add)*

**Why**
The absolute change is 12 percentage points, while the relative increase is approximately 16.9%. Leaving “12%” beside percentage endpoints can make the reader interpret the result as a relative change and doubt the precision of the claim.

**How to change it**
Replace “by 12%” with “by 12 percentage points” and retain the explicit “from 71% to 83%” comparison; use approximately 16.9% only if a relative increase is intended.

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] A Kendall correlation of 0.89 shows rank association but does not by itself establish that the evaluator tracks injected degradation. *(about 5 words to add)*

**Why**
The evaluator could be responding to confounds from removing citations, sources, and claims, such as changes in length, formatting, coherence, or lexical cues. The line also does not say whether the correlation was against degradation severity or another condition ranking, so the evidence is difficult to interpret as evaluator validation.

**How to change it**
Use “Observed a Kendall correlation of 0.89 between evaluator scores and the injected-degradation levels” unless [controlled perturbations, matched controls, severity definitions, and robustness analyses] support the stronger claim; if accurate, name the degradation-severity or condition-ranking measure.

*raised by content*

## Already working

- s2:e1:b1: Combines a clear outcome, baseline, endpoint, and evaluation-set size.
- s2:e1:b5: Shows influence beyond implementation through adoption by the on-call team.

## Set aside (11)

- s2:e1:b0: The method is vague in the phrase "with ML-extracted features."
- s2:e1:b4: "so each update used exactly one scored trajectory" restates the preceding sampling decision without adding a separate outcome.
- s2:e0:b0: "Owned" frames the work as responsibility rather than showing what you did with the dashboards or rotation. (and 1 more like it)
- s2:e0:b1: "with load tests that fail the build" shifts to present tense inside an otherwise past-tense bullet, making the timeframe inconsistent.
- s2:e0:b2: "Maintained" leads with an ongoing duty rather than the more distinctive change introduced by the automated regression checks.
- s2:e0:b3: "onboarding two new hires and taking over the weekend on-call rotation" adds separate duties to the technical achievement and makes the bullet carry too many ideas.
- s3:e1:b0: "Where they now run in the default benchmark for every release" is a wordy relative clause that delays and slightly obscures the integration result.
- s3:e1:b1: "Showed the evaluator tracks injected degradation" is grammatically compressed and can momentarily read as though "evaluator tracks" were a noun phrase.
- s3:e1:b2: "Structural pipeline defects in stability, sourcing and parameter handling" makes "in stability" sound like a defect location rather than a clear category.
- s3:e1:b2: "Each was fixed upstream" uses passive voice and does not show whether the candidate fixed the defects or only identified them for upstream maintainers.
- skills: Kubernetes is listed under ML & Agents, but no experience or project entry mentions using Kubernetes or work that clearly required it.
