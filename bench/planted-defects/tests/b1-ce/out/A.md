> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Coverage: content and wording reviewed 4 entries; narrative reviewed all 6; format checked; JD match not run because no posting was provided. Education entries had no bullets to review.

Main changes to make:

1. **Fix chronology:** Move Mobility Systems Company (Oct 2024–May 2025) above Eastern Robotics Co. (Aug 2022–Jul 2024).
2. **Correct two figures in Agent Runtime Suite:**
   - 900 ms → 600 ms is a **33.3% reduction**, not 50%.
   - 71% → 83% is a **12-percentage-point increase**, or approximately a 16.9% relative increase—not simply 12%.
3. **Strengthen bullets that describe responsibility without outcomes:**
   - The diagnostics dashboards/on-call bullet does not show what changed.
   - The Agent Runtime Suite adoption bullet uses broad phrases such as “AI-first engineering practices” and “improving outcomes” without evidence.
   - The GRPO-training bullet describes a setup but does not show its effect.
4. **Clarify dense or ambiguous wording:** Several bullets combine multiple actions, making it unclear which action produced the result—especially the robotics migration/on-call bullet and the ML internship’s training bullet.
5. **Add baselines where feasible:** The ML internship includes percentage improvements without before-and-after values in several places, including backlog reduction, latency reduction, and end-to-end latency.
6. **Reorder bullets for impact:** Lead entries with measured engineering outcomes, then supporting ownership or process bullets.

The file is one page, parses cleanly for ATS, and has no layout warnings. The full combined report is available through `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · wording 81 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The claim that reducing latency from 900 ms to 600 ms is a 50% reduction is mathematically wrong.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The reduction is 300 ms, which is 33.3% of the original 900 ms. A 50% reduction from 900 ms would produce 450 ms, so the incorrect percentage can make the reader question the reliability of the resume's other metrics.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction"; alternatively, remove the percentage.
2. **The resume reports the 900 ms-to-600 ms latency change as a 50% reduction even though the figures show a 33.3% reduction.**
   > from 900 ms to 600 ms
   The inconsistency is visible both within the bullet and across the resume's presentation of quantitative results. A wrong percentage can undermine confidence in otherwise strong performance metrics, especially for a technical reader checking the arithmetic.
   **How to change it:** Change "50%" to "33.3%" or revise the latency figures so that they support the stated percentage.
3. **The increase from 71% to 83% is 12 percentage points, not 12%.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The absolute change is 12 percentage points, while the relative increase is approximately 16.9%. Using the wrong form makes the achievement mathematically inconsistent and can distract a technical reader from the strong benchmark result.
   **How to change it:** Replace "by 12%" with "by 12 percentage points"; if a relative increase is intended, use approximately "17%" instead.

## Already working

- s2:e0:b1: The from-and-to p95 figures make the performance improvement immediately credible and interpretable.
- s2:e0:b2: The bullet connects a concrete engineering intervention to a clear release-process outcome.
- s2:e1:b0: Leads with a concrete system contribution and a clear operational outcome.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The diagnostics-dashboard line states ownership and scope but not the operational result or the technical work that produced it.** *(about 10 words to add)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.
  A reader can see the assignment but cannot tell whether monitoring or on-call work improved incident detection, response time, reliability, or another outcome. "Across two major releases" measures duration of responsibility rather than contribution, while the dashboard and rotation wording gives little evidence of how the system was built or operated.
  **How to change it:** Replace "Owned" with a concrete action such as "Built" or "Managed," state the on-call work directly, and add [telemetry, alerting, log aggregation, or incident-triage mechanism] plus [specific incident, detection, response, or reliability improvement].
- **The sentence makes the event-queue migration, logging rewrite, onboarding, and on-call work collectively appear to have removed the nightly backlogs.** *(no words)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  A scanning reader may not know which engineering action produced the dispatch improvement. The strongest operational result is therefore separated from the migration that appears most directly connected to it, weakening the line's cause-and-effect evidence.
  **How to change it:** Move "which removed the nightly backlogs that delayed morning dispatch" immediately after the event-queue migration, then keep the logging, onboarding, and on-call details afterward if they must remain.
- **The operational improvements in both backlog claims lack a baseline or endpoint that shows their magnitude.** *(about 8 words to add)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  > Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.
  The reader can see the direction of improvement but cannot judge how large the nightly backlog was or what the 68% pending-case reduction meant in practice. The first-quarter timeframe helps, but counts before and after the changes would make both results more concrete.
  **How to change it:** Add [number of queued jobs or dispatch-delay frequency before and after the migration] and add [backlog count before launch] and [backlog count after the first quarter] to the 68% claim.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The statement that single-rollout sampling stabilised GRPO training is technically incorrect as written.** *(about 3 words to add)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  Standard GRPO computes relative advantages by comparing multiple completions for the same prompt. With one rollout, its reward equals the group mean, producing a zero relative advantage and no useful GRPO learning signal; singleton sampling therefore cannot, by itself, stabilise GRPO training.
  **How to change it:** State that training used [multiple rollouts per prompt], or specify the [additional baseline, reward signal, or alternative policy-gradient method] that made single-rollout updates valid.
- **The 5% latency result is buried after dense method details and does not identify the affected end-to-end path or its baseline and endpoint.** *(about 6 words to add)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  A scanning reader may miss the only outcome in the bullet. Without knowing whether the measurement covers inference, tool use, evaluation, or another workflow, and without an absolute before-and-after value, the operational meaning of 5% is difficult to judge.
  **How to change it:** Move the latency result to the opening, name [what end-to-end latency measured], and add [baseline end-to-end latency] and [resulting end-to-end latency]. Keep the rollout, reward, and GRPO details after the result.
- **The claim that GRPO training was stabilised gives no measured training outcome, and the single-rollout setup describes the method rather than proving the effect.** *(about 6 words to add)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  A reader cannot tell whether stability meant fewer failed runs, lower reward variance, faster convergence, or another observable change. Without a comparison against the prior setup, the claimed improvement has no evidence by which its scale can be judged.
  **How to change it:** Replace or supplement "Stabilised" with [stability measure or training outcome] compared with [prior sampling setup or baseline].

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **The line uses broad language for the work, its outcome, and its scale without identifying a concrete engineering change or measurement.** *(about 8 words to add)*
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  A reader cannot tell what "AI-first engineering practices" involved or whether delivery became faster, more reliable, or easier for downstream teams. Without an adoption figure, baseline, or specific result, "Drove adoption" reads more like a claim of influence than evidence of platform engineering impact.
  **How to change it:** Replace the broad method and outcome with [specific platform capability or workflow] and [delivery or downstream-team result], then add [adoption measure or before-and-after metric].

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The metrics contribution does not explain how the eight metrics were implemented or integrated.** *(about 5 words to add)*
  > Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
  The default-benchmark outcome shows sustained adoption, but a reader still cannot distinguish substantive metric development or adaptation from simply submitting changes. One technical implementation detail would make the contribution more credible without weakening the clear adoption result.
  **How to change it:** After identifying the eight metrics, add [how the metrics were implemented, adapted, validated, or integrated].

## Across the whole résumé

- **The Experience entries are not ordered newest-first.** *(no words)*
  > Eastern Robotics Co. | Junior Software Engineer
  Eastern Robotics Co. is listed before Mobility Systems Company even though the internship ran from October 2024 to May 2025 and the robotics role ended in July 2024. A recruiter scanning from the top may therefore miss the more recent experience or read the chronology incorrectly.
  **How to change it:** Move the Mobility Systems Company entry above Eastern Robotics Co. within Experience.
- **The resume describes the change from 71% to 83% as a 12% increase even though it is a 12-percentage-point increase.** *(no words)*
  > from 71% to 83%
  The figures support either a 12-percentage-point increase or an approximately 16.9% relative increase. Leaving the current wording makes the quantitative claims inconsistent and may cause a technical reader to question the precision of the benchmark reporting.
  **How to change it:** Change "12%" to "12 percentage points," or use approximately "16.9%" if the relative increase is intended.

## Set aside (9)

9 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9b027c6e.md.

