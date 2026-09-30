> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed **4 experience/project entries for content and wording**, the **full narrative**, and **format/ATS parsing**. Education entries were not applicable to bullet review; no job-description match review ran because no posting was loaded.

### Highest-priority changes

1. **Fix ordering**
   - Move **Mobility Systems Company (Oct 2024–May 2025)** above **Eastern Robotics Co. (Aug 2022–Jul 2024)**.
   - This is the main format and narrative issue; the resume should read newest-first.

2. **Correct the Agent Runtime Suite metrics**
   - The claim that latency fell from **900 ms to 600 ms** should not say “a 50% reduction.” That change is approximately **33.3%**.
   - “Raised task-completion rate by 12% from 71% to 83%” needs clarification: this is a **12-percentage-point** increase, not a 12% relative increase.

3. **Make vague or unsupported outcomes concrete**
   - The diagnostics-dashboard bullet says what you owned but not what changed.
   - The Agent Runtime Suite opening bullet uses broad claims such as “accelerating delivery” and “improving outcomes” without a specific result.
   - The GRPO-training bullet describes the method but does not state the resulting improvement.
   - Where possible, add baselines, endpoints, scale, adoption, or operational impact.

4. **Separate overloaded bullets**
   - The robotics bullet combining the service migration, logging-library rewrite, onboarding, and weekend on-call work is too dense. Distinguish the engineering work from the operational/team responsibilities, or remove the less relevant material.
   - The ML internship’s GRPO bullet similarly leads with too much implementation detail before the result.

5. **Clarify technical claims**
   - Explain what the load tests preserved rather than implying that they alone maintained latency.
   - Clarify what was correlated in the **Kendall correlation of 0.89** claim.
   - Replace ambiguous references such as “their partial context,” “where they now run,” and “each was fixed upstream” with explicit subjects.

### What is already working

- The file is **one page, 521 words, cleanly parsed, and ATS-readable**.
- **12 of 16 bullets contain figures**, giving the resume a strong quantitative base.
- The strongest bullets include concrete before/after results, such as API latency, release-cycle duration, model evaluation, and task-completion rates.
- The overall career progression—from electrical engineering to software, ML, and agent/LLM systems—is coherent.

The complete specialist report is available with **`/report --full`**.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 76 · wording 81 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **“Added load tests to keep it there” overstates what load tests can do.**
   > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
   Load tests measure performance under simulated workloads and can detect regressions or gate releases, but they cannot directly keep a production API’s p95 latency at 180 ms. Production latency can vary with cache-hit rates, traffic, dependencies, and capacity, so the current wording weakens the credibility of the otherwise strong latency result.
   **How to change it:** Replace “keep it there” with “validate the improvement and detect regressions.”
2. **The reduction from 900 ms to 600 ms is 33.3%, not 50%.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The decrease is 300 ms, which is 33.3% of the original 900 ms. A 50% reduction would have reduced latency to 450 ms, so the current figure creates an immediately visible credibility problem.
   **How to change it:** Replace “a 50% reduction” with “a 33.3% reduction.”
3. **The increase from 71% to 83% is 12 percentage points, not 12%.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The figures show an increase of 12 percentage points. Relative to 71%, the increase is approximately 16.9%, so the current wording makes the size of the benchmark improvement mathematically ambiguous.
   **How to change it:** Replace “by 12%” with “by 12 percentage points.”

## Already working

- s2:e0:b2: The release-cycle improvement is stated as a concrete business and engineering outcome.
- s2:e1:b1: Pairs a measurable result with technically specific model-training choices.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The migration, logging-library rewrite, onboarding, and on-call work are bundled into one long sequence, leaving the result’s cause unclear.** *(saves about 8 words)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  A scanning reader may not know which work produced the dispatch improvement or which contribution best demonstrates software-engineering skill. The long chain also buries the result and makes “which removed” ambiguous.
  **How to change it:** Keep the event-queue migration and logging-library rewrite together, and move or cut “onboarding two new hires” and “taking over the weekend on-call rotation” unless they directly support the same outcome. Attach the dispatch result directly to the technical work.
- **The monitoring-dashboard and on-call ownership claim gives no measurable outcome or implementation detail.** *(about 8 words to add)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.
  Ownership alone leaves the reader unable to judge whether reliability, incident response, or operational visibility improved. “Across two major releases” supplies scope but no result, while “monitoring dashboards” does not show the technical observability contribution.
  **How to change it:** Add [one outcome figure] tied to [a baseline, target, or prior period], and name [the telemetry, alerting, or dashboard system used] if it demonstrates the technical contribution.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **Dynamic batching does not support the stated isolated single-request latency claim without additional measurement context.** *(about 8 words to add)*
  > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
  Dynamic batching requires multiple requests arriving together; for a truly isolated request, it runs at batch size one or adds batching-window delay. The 40% reduction could be valid under concurrent load, but the current wording does not identify that condition or establish that dynamic batching caused a batch-size-one improvement.
  **How to change it:** Replace the isolated claim with a result for [specified concurrent load, batching policy, hardware, and baseline], or attribute the reduction to [the specific INT8 or serving change that improved batch-size-one latency].
- **Sampling one rollout per prompt cannot provide the standard GRPO within-prompt learning signal.** *(about 7 words to add)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  Standard GRPO computes a relative advantage from multiple sampled rollouts for each prompt. With one rollout, the within-prompt advantage is zero or its normalization is undefined, so the claimed GRPO stabilization is not supported and conflicts with the preceding bullet’s grouped-rollout description if both describe the same regime.
  **How to change it:** Describe the method as [a GRPO-derived objective with an explicit alternative baseline or normalization] if one rollout was used, or report the multiple-rollout group size used by standard GRPO.
- **The 5% end-to-end latency result is buried after a long method list and lacks measurement context.** *(about 6 words to add)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  A scanning reader may reach the technical details without quickly seeing what changed. Without the affected workflow, evaluation workload, baseline, or resulting latency, the reader cannot tell whether the reduction occurred during training, inference, or a production workflow or how large the absolute change was.
  **How to change it:** Move “reduced end-to-end latency by 5%” before the method details, then retain only the most distinctive details and add [affected workflow or request type] plus [baseline end-to-end latency] and [resulting latency], if available.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **“Accelerating delivery” and “improving outcomes for downstream teams” are generic benefits, and the adoption claim names no mechanism.** *(about 8 words to add)*
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  A hiring reader cannot tell whether delivery became faster, more reliable, less costly, or easier for other teams to use. The reader also cannot evaluate the technical or leadership contribution behind adopting “AI-first engineering practices.”
  **How to change it:** Replace the generic benefits with [specific delivery result] and [specific downstream result], each tied to a comparison or baseline, and add [the specific practice, workflow, or mechanism] that drove adoption.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **A Kendall correlation of 0.89 supports strong rank association with the tested degradation conditions, but does not by itself establish that the evaluator validly or generally tracks degradation.** *(about 10 words to add)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  The statistic does not establish causal validity, magnitude sensitivity, or generalizability. It also leaves unclear whether repeated perturbations of the same reports were treated as dependent observations, so the claim currently overstates what the experiment shows.
  **How to change it:** Replace the claim with a statement that evaluator scores were strongly rank-associated with the injected degradation conditions, retaining the 0.89 result; add [confidence interval, dependence handling, and validation across held-out reports and perturbation types].
- **“Showed the evaluator tracks” is grammatically incorrect for a completed study.** *(about 1 word to add)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  The clause needs “that” before the finding and a past-tense verb for the completed study. The current construction makes the strongest research result read as unfinished or unpolished.
  **How to change it:** Insert “that” after “showed” and change “tracks” to “tracked.”
- **The correlation claim does not identify the two variables being compared.** *(about 6 words to add)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  Without the evaluator output and the injected degradation level or ordering, a reader cannot tell whether 0.89 measures agreement with severity, ranking consistency, or another evaluator property. The result therefore remains difficult to interpret even after the grammar is corrected.
  **How to change it:** Name [the evaluator output] and [the injected degradation level or ordering] as the two correlated variables, retaining the 0.89 result and 400+ trial count.
- **The defect description uses abstract categories and process language, while the passive fix statement does not identify what changed.** *(about 10 words to add)*
  > Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.
  A reader cannot tell what was actually defective in stability, sourcing, or parameter handling, or what behavior improved after the fixes. “Layered instrumentation” signals debugging skill but gives little evidence of what was instrumented or how the modules were isolated, and “each was fixed upstream” leaves implementation ownership unclear.
  **How to change it:** Replace the abstract categories with [the specific defects], qualify “layered instrumentation” with [the single most telling tracing or instrumentation technique], and replace “each was fixed upstream” with the active description of who implemented [the fixes] and [the observable post-fix improvement], if measured.

## Across the whole résumé

- **Experience is not listed newest-first.** *(no words)*
  > Eastern Robotics Co. | Junior Software Engineer
  Eastern Robotics Co. runs from August 2022 to July 2024, while Mobility Systems Company runs from October 2024 to May 2025. Keeping the older role above the newer one makes the career progression harder to scan.
  **How to change it:** Move the Mobility Systems Company entry above the Eastern Robotics Co. entry within EXPERIENCE.

## Set aside (13)

13 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-674a3fe9.md.

