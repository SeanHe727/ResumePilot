> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Content and wording specialists reviewed 4 experience/project entries; education entries were not applicable. Narrative and format reviews ran. JD matching was not run because no job posting was provided.

The main changes to make are:

1. **Reorder Experience chronologically:** put Mobility Systems Company (Oct 2024–May 2025) above Eastern Robotics Co. (Aug 2022–Jul 2024).
2. **Correct the Agent Runtime metrics:** 900 ms to 600 ms is a **33.3% reduction**, not 50%. The increase from 71% to 83% is **12 percentage points**, not simply 12%.
3. **Clarify bullets with broad or buried claims:** especially the diagnostics-dashboard bullet, the Agent Runtime “AI-first engineering practices” bullet, and the GRPO-training bullets. State the specific action and measurable result more directly.
4. **Add evidence where results are currently unsupported:** the evaluator-stabilization bullet says training was stabilized but gives no measurement; the dashboard and monitoring bullet describes ownership without an outcome.
5. **Make long bullets easier to scan:** several combine multiple workstreams—particularly the robotics migration/on-call bullet and the grouped-tool-use training bullet.
6. **Check the skills section against the evidence:** the narrative review found no supporting resume entries for LangGraph, RAG, or Kubernetes.

The file is one page, parses cleanly for ATS systems, and has no layout warnings. The full combined report is available with `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 75 · wording 82 · narrative 80

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **Load tests cannot by themselves keep a production p95 latency at 180 ms.**
   > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
   Load tests can validate latency under simulated workloads and expose regressions, but production traffic, cache behavior, deployments, infrastructure, and monitoring determine whether the target persists. The current wording overstates what the test suite guaranteed and may make the performance claim sound operationally unsupported.
   **How to change it:** Replace “to keep it there” with wording that says the load tests validated the target or guarded against regressions; if production monitoring and operational controls were also used, name them, otherwise remove the durability claim.
2. **The latency reduction is 33.3%, not 50%.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The decrease is 300 ms out of the original 900 ms, which is 33.3%. A 50% reduction from 900 ms would result in 450 ms, so the current figure is mathematically incorrect and can undermine confidence in the other benchmark claims.
   **How to change it:** Replace “a 50% reduction” with “a 33.3% reduction.”
3. **The task-completion increase is 12 percentage points, not 12% as written.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The rate rises from 71% to 83%, a change of 12 percentage points. Relative to the 71% baseline, the increase is approximately 16.9%, so the current wording is both mathematically wrong and ambiguous beside the endpoint values.
   **How to change it:** Replace “by 12%” with “by 12 percentage points” if that accurately describes the result, or use “approximately 16.9%” for a relative increase; consider retaining either the delta or the endpoint comparison rather than both.

## Already working

- s2:e0:b2: The 2-week-to-3-day comparison makes the claimed improvement easy to assess.
- s2:e1:b1: Uses an explicit baseline, outcome, and evaluation-set size.
- s2:e0:b3: The 30-service figure communicates meaningful migration scope.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The dispatch improvement is attributed ambiguously across the migration, logging rewrite, onboarding, and on-call work.** *(no words)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  Onboarding new hires and taking over weekend on-call do not themselves remove a nightly processing backlog, so a reader may not know which contribution produced the operational result. The result is also buried after several unrelated actions, weakening the line's most valuable evidence.
  **How to change it:** Attribute the backlog removal specifically to the event-queue migration if that was the cause, move the result immediately after that migration, and place the onboarding and on-call details after it or elsewhere.
- **The phrase “automated regression checks” does not identify what the checks tested.** *(about 1 to 4 words)*
  > Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.
  A hiring reader can understand that the CI pipeline became more automated, but cannot tell what engineering judgment went into designing the checks. The generic wording leaves the technical contribution less legible despite the strong two-week-to-three-day result.
  **How to change it:** If accurate, replace the generic phrase with the most informative check category, such as [automated model-accuracy or inference-regression checks].
- **The dashboard and on-call ownership shows responsibility but not the resulting operational change.** *(about 8 to 15 words)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.
  A reader can see that the candidate owned an important operational area across two releases, but cannot tell whether the work improved detection, response, reliability, or another outcome. Responsibility alone does not demonstrate the value of the contribution.
  **How to change it:** Replace or follow the ownership statement with the most consequential result, such as [reduced incident detection or response time by X compared with the prior process] or [prevented X recurring failures].

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **Sampling exactly one rollout per prompt does not stabilize standard GRPO as stated.** *(about 3 words)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  Standard GRPO requires multiple completions per prompt to calculate a group-relative advantage. With one trajectory, the within-prompt relative signal is zero or undefined, so the method claim is technically incorrect unless this was a modified single-rollout objective with a separate baseline or value estimator.
  **How to change it:** Use multiple rollouts per prompt for standard GRPO. If a modified single-rollout objective was used, name its separate baseline or value estimator; otherwise remove or soften the GRPO stabilization claim.
- **The latency result is buried after a long method list and gives insufficient context for attribution.** *(about 6 to 15 words)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  The training choices do not directly measure or optimize end-to-end latency; latency also depends on generation, tool execution, orchestration, network conditions, batching, retries, and workload. A reader therefore needs a controlled comparison, the measured workflow, and absolute values to judge whether the 5% reduction is attributable and practically meaningful.
  **How to change it:** Move the latency result to the front, identify [the measured workflow or latency stage], and add [end-to-end latency before and after the change] or [the workload and evaluation context]. If a fixed comparison was run, state that it was versus the frozen SFT baseline and include [measured accuracy and citation validity] if preserved; otherwise remove the latency result or report only the measured training outcomes.
- **The dynamic-batching attribution is unclear for “single-request” p95 latency.** *(about 5 to 10 words)*
  > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
  Dynamic batching can add batching-wait overhead when no concurrent requests are available, so it does not generally reduce the latency of an isolated request. The claim is credible only if “single-request” means request-level latency under concurrent or bursty traffic and the INT8 and batching effects were separately controlled.
  **How to change it:** If measured under concurrent or bursty traffic, clarify [the measured workload] and add [p95 latency before and after the change]. Otherwise remove the dynamic-batching attribution or report the measured INT8 result separately.
- **The phrase “so each update used exactly one scored trajectory” repeats the sampling detail without adding a result.** *(saves about 8 words)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  The preceding clause already states that one rollout was sampled per prompt, so the trailing explanation does not provide separate evidence of stabilization. It uses space without showing a measurable training improvement.
  **How to change it:** Cut the trailing phrase and use the saved space for evidence of stabilization, such as [a measured training metric], if that evidence exists.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **The adoption and delivery claim is vague and has no measurable scale.** *(about 5 to 12 words)*
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  “AI-first engineering practices” does not tell the reader what changed, while “accelerating delivery and improving outcomes for downstream teams” does not identify the affected teams or outcome. Without an adoption indicator or before-and-after delivery metric, the reader has no evidence that the initiative produced a meaningful result.
  **How to change it:** Replace the broad method and outcome with [specific engineering practices] and [specific delivery or downstream outcome], then add [number or share of teams adopting the practices] or [delivery metric before and after] against its baseline.

## Across the whole résumé

- **Experience is not listed in reverse chronological order.** *(no words)*
  > Eastern Robotics Co. | Junior Software Engineer
  Eastern Robotics Co. ends in July 2024 but appears above Mobility Systems Company, which runs through May 2025. A recruiter scanning the section may misread the career sequence, and the more recent machine-learning role does not land before the older robotics role.
  **How to change it:** Move Mobility Systems Company above Eastern Robotics Co. within EXPERIENCE.

## Set aside (12)

12 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-25219277.md.

