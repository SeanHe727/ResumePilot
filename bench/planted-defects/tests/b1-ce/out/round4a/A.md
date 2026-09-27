> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all 4 entries with bullets for content and wording, plus the full resume narrative and file format. The two education entries had no bullets to review. No job-description comparison was run because no posting was loaded.

### Changes to make first

1. **Reorder Experience chronologically**
   - Put **Mobility Systems Company (Oct 2024–May 2025)** above **Eastern Robotics Co. (Aug 2022–Jul 2024)**.
   - This also better supports the progression toward ML, LLM, and agent work.

2. **Correct two project figures**
   - The change from **900 ms to 600 ms** is a **33% reduction**, not 50%.
   - The change from **71% to 83%** is a **12-percentage-point increase**, not a 12% increase.

3. **Clarify the weakest or most general claims**
   - The Agent Runtime Suite bullet beginning with “Drove adoption…” does not identify which practices were introduced or how widely they were adopted.
   - The dashboard bullet describes ownership but not what changed because of that work.
   - The Research-Agent bullet about the Kendall correlation needs to explain what was correlated and how degradation was measured.
   - The “Stabilised GRPO training…” bullet needs evidence for what “stabilised” means; its relationship to the preceding GRPO bullet is also unclear.

4. **Reduce duplication**
   - In the robotics role, distinguish the monitoring-dashboard work from the later on-call responsibility.
   - In the ML internship, distinguish the two GRPO bullets or combine them if they describe the same training setup.

5. **Make outcomes easier to verify**
   - Add baselines, test conditions, traffic volume, or comparison conditions where available for:
     - the 40% p95 latency reduction;
     - the 5% end-to-end latency reduction;
     - the 8-metric benchmark contribution;
     - the three upstream defects fixed.
   - The existing latency and accuracy figures are useful, but their measurement context is not always stated.

6. **Fix wording and consistency**
   - Use present tense for the current Agent Runtime Suite project: the bullets currently begin with past-tense verbs.
   - Correct the split “on- call” to **“on-call.”**
   - The wording specialist also flagged dense method lists in the GRPO bullet, passive wording in the “fixed upstream” claim, and jargon such as “runbook” and “AI-first engineering practices.”

7. **Align the skills section with evidence**
   - The narrative review flagged skills including Python, SQL, Bash, Git, PyTorch, LoRA, LangGraph, RAG, and Kubernetes as not explicitly demonstrated in the entries. Either connect those skills to specific experience/project bullets or remove any that you cannot substantiate.

### What is already structurally sound

- The PDF is one page, extracts cleanly, and has no ATS parsing blockers.
- Formatting and consistency are intact.
- The resume presents a recognizable progression from robotics software engineering to ML engineering and then agent/LLM evaluation work.

The complete specialist findings are available through `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 68 · wording 83 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The GRPO stabilization claim attributes improvement to a single-rollout choice that generally increases training-signal variance and provides no stability result.**
   > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
   With sparse rewards, one rollout per prompt removes within-prompt comparison and usually makes the advantage estimate noisier, so a technical reader may question the stated causal explanation. The line also reports the sampling setup rather than fewer failed runs, lower reward variance, or more reliable convergence, making the claimed stabilization difficult to evaluate.
   **How to change it:** Replace the causal clause with [the validated intervention that reduced variance or training failures], and add [the before-and-after stability metric]. Keep the single-rollout detail only as an experimental condition, and combine it with the method described in b3 rather than repeating the sampling setup.
2. **The runtime latency bullet contains an arithmetic error: 900 ms to 600 ms is a 33.3% reduction, not 50%.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The reduction is 300 ms divided by the 900 ms baseline, or 33.3%. An incorrect percentage in a central performance claim can make a reader question the accuracy of the other results.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction," or remove the percentage and retain the correct 900 ms-to-600 ms comparison.
3. **The task-completion result confuses a 12-percentage-point increase with a 12% relative increase.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The rates move from 71% to 83%, which is a 12-percentage-point change. Calling it a 12% increase can mislead a reader because the relative increase is approximately 16.9%.
   **How to change it:** Replace "by 12%" with "by 12 percentage points," or use "by approximately 16.9%" if the relative increase is intended.

## Already working

- s2:e0:b1: The baseline and result are concrete and easy to compare.
- s2:e0:b2: It connects a specific engineering action to a substantial, easy-to-understand delivery improvement.
- s2:e1:b0: Shows a concrete production outcome rather than only describing implementation.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The diagnostics-dashboard bullet shows responsibility and scope but not the operational result or your exact on-call responsibility.** *(about 12 words to add)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on- call rotation that used them.
  A reader can see that you maintained an important production area across two releases, but cannot tell whether the dashboards improved detection, triage, uptime, or incident response. The phrase about the rotation also leaves unclear whether you maintained dashboards, administered the rotation, or personally handled incidents.
  **How to change it:** Replace "Owned" with the specific action, such as "Managed" or "Built" where accurate, and replace the on-call phrase with "dashboards and alerts used by the rotation." Add [the escalation or response responsibility you personally held] and [the strongest measurable operational result].
- **The API-latency bullet needs one workload or measurement anchor and should state the ongoing result directly.** *(about 6 words to add)*
  > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
  The 420 ms-to-180 ms comparison is concrete, but a reader cannot tell whether both p95 values came from comparable production traffic or a controlled load test. The phrase "keep it there" is also vague about what was maintained, while caching and batching may alter freshness or tail-latency behavior.
  **How to change it:** Replace "keep it there" with "maintain p95 latency at 180 ms" and add [comparable request volume, workload, or production-versus-load-test context].
- **The event-queue bullet combines too many responsibilities and leaves the backlog outcome unmeasured.** *(saves about 10 words; about 6 words to add)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  A reader cannot tell whether the migration, logging rewrite, onboarding, or on-call work removed the nightly backlog. The stacked process chain also distracts from the technically substantial migration and gives no measure of how much dispatch delay was eliminated.
  **How to change it:** Keep the 30-service migration and logging-library work with the backlog result, add [the number of backlogged jobs, hours of delay, or frequency of delayed mornings], and move or cut the onboarding and weekend on-call details unless one directly caused the result.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The GRPO latency bullet leads with a dense method list and leaves its grammatical subject unclear.** *(no words)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  Starting with several mechanisms makes the reader work to find the result and obscures who performed the work. The technical details are useful, but they will be more persuasive after the outcome and a clear subject establish what the method achieved.
  **How to change it:** Move the 5% latency outcome to the front, use a direct subject such as "Reduced," and follow it with the grouped-rollout, composite-reward, and frozen-reference details.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **The opening adoption bullet is generic and does not establish a specific project, while the following bullets already describe one coherent runtime project with concrete results.** *(saves about 8 words)*
  > AI-first engineering practices
  The latency and task-completion bullets show what changed in the runtime, but "AI-first engineering practices" and downstream outcomes do not identify a comparable technical action. The generic opener therefore weakens the project narrative and uses space without adding evidence of impact.
  **How to change it:** Cut the generic opening bullet, or replace it with the specific platform workflow or engineering practice changed and [the measurable adoption or delivery result] that connects it to the two runtime bullets.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The evaluation bullet overstates what a Kendall correlation of 0.89 demonstrates and does not identify the correlated variables or controls.** *(about 20 words to add)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  The reported correlation supports a strong rank association under the tested synthetic perturbations, not general faithfulness tracking, calibration, robustness, or real-world validity. Without the evaluator score, degradation-severity scale, report-independence information, and controls for shorter or differently formatted reports, the 400+ trials may be difficult to interpret or may overstate the effective sample size.
  **How to change it:** Replace the broad conclusion with a qualified statement that the evaluator showed monotonic sensitivity to the specified synthetic degradations. Name [the variables correlated], [the degradation-severity scale], and whether trials used independent or repeated reports; add [paired controls, sham edits, and held-out reports or topics] if available.
- **The claim that all eight metrics run in every release makes adoption sound universal without verified execution evidence.** *(about 6 words to add)*
  > Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
  Upstreaming the metrics shows an accepted contribution, but availability in a framework is different from execution by the default benchmark path. A reader may also question a claim covering every release, including releases the candidate cannot yet verify.
  **How to change it:** Replace "for every release" with [the number or names of verified releases], and state that the default benchmark path executed all eight metrics.
- **The three upstream defect fixes lack evidence that the diagnosed failures were corrected and accepted by the owning project.** *(about 10 words to add)*
  > Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.
  Finding defects through layered instrumentation establishes localization, but not that the changes fixed the behavior. A technical reader will look for a reproduced failure, targeted regression test, upstream merge or release, and verified post-fix result.
  **How to change it:** Replace the unsupported completion claim with [the upstream PR or commit and release/version evidence], and add [the verified post-fix behavior or regression result].

## Across the whole résumé

- **The Experience entries are not in newest-first order, and the more recent, more relevant Mobility Systems role should appear first.** *(no words)*
  > Eastern Robotics Co. | Junior Software Engineer
  Eastern Robotics is dated Aug 2022–Jul 2024, while Mobility Systems is dated Oct 2024–May 2025. Keeping the older role first makes the résumé harder to scan and delays the experience most aligned with the current agent and LLM direction.
  **How to change it:** Move the full Mobility Systems Company entry above Eastern Robotics Co. within Experience.
- **The latency bullets omit the workload and measurement conditions needed to interpret their percentage improvements.** *(about 18 words to add)*
  > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
  > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  The p95 values could have been measured under different traffic, concurrency, batching, or timing boundaries, so a reader cannot tell whether the comparisons reflect a real serving improvement. This affects the API result, edge-inference result, and end-to-end GRPO result differently, but each needs one clear comparison anchor.
  **How to change it:** For the API and edge-inference bullets, add the most useful baseline and workload context such as [comparable request volume or concurrency] and [measurement boundary]. For the GRPO bullet, add [baseline end-to-end latency or comparison configuration] plus [request-load and timing conditions].

## Set aside (6)

Worth knowing, and not worth the space on this page:

- s2:e0:b1, s2:e1:b0, s2:e1:b2, s3:e0:b0, s2:e1:b3: "added a request cache and batching sensor reads" names the mechanisms but does not show the relevant cache or sensor-read constraint. (and 7 more like it)
- s3:e0:b0, s3:e0:b1, s3:e0:b2, s2:e0:b0, s2:e0:b1, s2:e0:b3, s2:e1:b5, s3:e1:b1, s3:e1:b2: "Drove" is past tense even though the entry is a current role; use present tense. (and 11 more like it)
- s3:e1:b2: "defects in stability, sourcing and parameter handling" names broad outcome areas rather than the concrete failures or modules found by the instrumentation.
- skills: Python — no entry explicitly identifies Python use; a reader would expect it in the ML internship or agent projects. (and 8 more like it)
- format: Experience is not newest-first: "Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024" is listed above the more recent "Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025".
- s3:e0:b0: "accelerating delivery and improving outcomes for downstream teams" is a filler claim without a specific measure or defined outcome.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9a48e9f4.md.

