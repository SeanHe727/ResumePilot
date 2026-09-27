> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Format/ATS:** format review completed; it is one page, parses cleanly, and has no layout blockers.
- **Content and wording:** all four entries with bullets reviewed:
  - Eastern Robotics Co.
  - Mobility Systems Company
  - Agent Runtime Suite
  - Research-Agent Evaluation Framework
- **Narrative:** reviewed across all six entries.
- **Job-description match:** not run because no posting was provided.

### Changes to make first

1. **Correct the Agent Runtime Suite arithmetic**
   - The reduction from **900 ms to 600 ms** is approximately **33%**, not 50%.
   - The increase from **71% to 83%** should be described as a **12-percentage-point increase**, unless you intend to state the relative percentage increase.

2. **Fix the GRPO bullet**
   - The content review flagged the claim that using **one rollout per prompt** “stabilised GRPO training” as technically questionable for standard GRPO.
   - Either substantiate the specific training behavior and result or remove the stabilization claim.

3. **Make unsupported outcomes measurable**
   - The opening Agent Runtime Suite bullet claims adoption, faster delivery, and improved downstream outcomes without evidence.
   - Replace those general outcomes with the specific adoption, delivery, or team result you can document.

4. **Strengthen the first Robotics bullet**
   - It currently describes ownership of monitoring dashboards and on-call work but does not state what changed as a result.
   - Add the operational effect, or use the space for a more consequential contribution.

5. **Separate or clarify overlapping responsibilities**
   - The Robotics entry contains overlapping on-call claims.
   - The Mobility Systems entry has two highly technical training bullets whose relationship is unclear.
   - Explain whether the Research-Agent project ran concurrently with the Mobility internship and whether the Agent Runtime Suite was part of your master’s work, independent work, or employment.

6. **Reorder entries chronologically**
   - Within **Experience**, list Mobility Systems before Eastern Robotics.
   - Within **Projects**, list Agent Runtime Suite before Research-Agent Evaluation Framework.
   - If you are targeting agent/LLM roles, the narrative review found that placing Projects before Experience may foreground the most relevant work.

7. **Review date gaps**
   - The resume leaves approximately two months after the bachelor’s degree, three months between the Robotics role and internship, and one month between the two projects unexplained.
   - Add context only if those periods involved relevant work, study, relocation, or another useful explanation.

8. **Align the skills section with the evidence**
   - The narrative review identified **LangGraph** as listed but not demonstrated in any entry.
   - Either show where you used it or remove it from Skills.

The detailed report contains the bullet-level findings and reasoning. No revisions were applied to the resume.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 79 · wording 82 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The GRPO bullet makes a technically incorrect claim: standard GRPO cannot produce a within-prompt learning signal from exactly one rollout.**
   > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
   GRPO compares multiple rollouts for the same prompt to compute a relative reward or normalized advantage; with one rollout, its reward equals the group mean, so there is no within-prompt comparison, and normalization may be undefined. Calling this standard GRPO could be caught by a technical interviewer and undermine confidence in the surrounding training claims.
   **How to change it:** Remove the claim that single-rollout sampling stabilized GRPO, or replace it with the actual multi-rollout stabilization mechanism and measured result. If the objective truly used one rollout, identify it as [the actual alternative objective or baseline], not GRPO, and remove the redundant procedure wording.
2. **The tool-call latency percentage is mathematically incorrect: falling from 900 ms to 600 ms is a 33.3% reduction, not 50%.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The decrease is 300 ms, and 300 divided by the original 900 ms is 33.3%; a 50% reduction would produce 450 ms. Leaving the error in a current project with quantitative claims can make the rest of the benchmark results less trustworthy.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction" or remove the percentage. Because the project is current, change "Cut" to "Reduce" only if the improvement describes an ongoing responsibility.
3. **The task-completion result should say that the rate rose by 12 percentage points, not by 12%.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The endpoints move from 71% to 83%, which is a 12-percentage-point increase; expressed as relative growth, it is approximately 16.9%. Without the unit, a reader may interpret the claim as either relative growth or a percentage-point change and misjudge the improvement.
   **How to change it:** Replace "by 12%" with "by 12 percentage points," retaining "from 71% to 83%." If the intended measure is relative growth instead, use "16.9% relative" and verify that interpretation; change "Raised" to "Raise" only if the work is ongoing.

## Already working

- s2:e0:b2: Provides a strong before-and-after release-cycle measure.
- s2:e1:b1: The result comes before the technical detail, so the value is visible during a quick scan.
- s3:e1:b0: Connects the contribution to a durable adoption outcome rather than merely stating that code was submitted.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The monitoring-dashboard bullet states ownership and release scope but does not show an operational result.** *(about 3 words to add)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.
  A hiring reader can see that you were responsible for the dashboards and on-call process, but cannot tell whether they improved incident detection, response time, reliability, or another outcome. The two-release count shows duration or scope rather than the value of the work, so the bullet asks the reader to infer impact.
  **How to change it:** Replace "Owned" with an action such as "Built and maintained," and add [the clearest operational result or checkable usage fact]. Keep "across two major releases" only if it supports that result, and change "the on-call rotation that used them" to "supporting the on-call rotation."
- **The load tests are incorrectly described as maintaining the API at 180 ms.** *(no words)*
  > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
  Load tests measure performance under defined workloads and detect regressions; they do not control production latency. Saying they kept the latency at 180 ms assigns the tests an operational effect they cannot provide unless an explicit enforcement process connects them to deployment or operations.
  **How to change it:** Replace "to keep it there" with "to detect latency regressions" or "to prevent latency regressions," making clear that the tests verify the improvement rather than maintain production latency.
- **The fleet-migration bullet buries an unmeasured dispatch outcome beneath several secondary responsibilities.** *(saves about 8 words if secondary duties are removed)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  The reader can see the technical scope of migrating 30 services, but cannot judge how often or how severely the nightly backlogs had affected dispatch. The logging rewrite, onboarding, and on-call duties make the main migration result harder to scan, while the unmeasured outcome limits its credibility.
  **How to change it:** Move the dispatch result immediately after "30 robot-fleet services" and add [the before-and-after backlog frequency, processing delay, or number of delayed dispatches]. Remove or separate the logging-library, onboarding, and weekend-on-call details unless one directly supports the measured result.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The 5% latency result does not identify the workflow or workload being measured, and the method-first construction makes the result difficult to scan.** *(about 4 words to add)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  A reader cannot tell whether the comparison covers model execution, tool calls, preprocessing, or the complete diagnostic workflow, so the size and relevance of the improvement are unclear. Leading with a long list of rollout and reward details also delays the main achievement and obscures the subject of "reduced."
  **How to change it:** Move the result to the front as "Reduced [the measured workflow] latency 5% using..." and replace "end-to-end" with [the exact workflow and workload]. Add [the before-and-after latency values] if available.
- **The edge-inference latency bullet gives only a relative reduction and omits the before-and-after p95 values.** *(about 4 words to add)*
  > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
  The reader knows latency improved by 40% but cannot judge whether the starting system was materially slow or whether the resulting latency met a requirement. Absolute values under the same workload would make the performance claim more concrete and comparable.
  **How to change it:** Add [the before-and-after p95 latency values in milliseconds, measured under the same edge-inference workload] after "40%."
- **The feature-extraction phrase does not identify the technical approach behind the triage system.** *(about 2 words to add)*
  > Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.
  A hiring reader can tell that machine learning was involved, but cannot tell what you engineered or which technical decision produced the backlog reduction. The phrase therefore contributes little evidence for the technical depth of the system.
  **How to change it:** Replace or qualify "ML-extracted features" with [the model or feature-extraction approach you implemented or used].

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **The adoption bullet uses vague benefit language without identifying what practices changed or how widely they were adopted.** *(about 6 words to add)*
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  A recruiter cannot tell what "AI-first engineering practices" actually involved, whether delivery became faster, or what downstream teams changed. Without a reach or outcome measure, "Drove adoption" and "accelerating delivery" remain assertions rather than evidence of platform impact.
  **How to change it:** Replace the generic benefit phrase with [the specific delivery, adoption, quality, or downstream-team outcome and its comparison], and add [the number of teams or engineers adopting the practices or a before-and-after delivery measure].

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The Kendall correlation is overstated as proof that the evaluator tracks degradation, and the compared variables and resulting capability are not named.** *(about 6 words to add)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  A Kendall correlation of 0.89 supports a strong monotonic association between evaluator scores and the specified injected degradation, but does not establish accurate measurement, causation, or generalization beyond those perturbations. Without saying what rankings were compared or what evaluation capability the result enabled, the figure is difficult to interpret and its practical value remains unclear.
  **How to change it:** Replace that phrase with "Observed a Kendall correlation of 0.89 between [the evaluator-score ranking and the injected-degradation ranking] across 400+ report-level trials," and add [the concrete evaluation capability or downstream decision this enabled]. Add "that" only if retaining the original sentence structure.
- **The defect bullet measures findings but not the post-fix effect, and its passive wording hides whether you made the upstream fixes.** *(saves about 3 words if process wording is removed)*
  > Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.
  The three defect areas show useful debugging scope, but the reader cannot judge whether the fixes reduced failures, changed pipeline behavior, or improved test results. "Each was fixed upstream" also leaves your contribution to the resolution ambiguous, while "with layered instrumentation" adds process detail without showing its value.
  **How to change it:** Keep the three-defect count and named areas, remove "with layered instrumentation" unless it is essential, and replace "each was fixed upstream" with "upstreamed fixes for each" if you made the fixes. Add [the downstream behavior, failure reduction, or test result that changed after the fixes].

## Across the whole résumé

- **Experience is not in newest-first order: the 2024–2025 internship appears below the 2022–2024 software role.** *(no words)*
  > Aug 2022 - Jul 2024
  A reader scanning the document expects the most recent role first, so the current order makes the career progression appear to move backward. The older robotics role also leads attention away from the newer machine-learning experience.
  **How to change it:** Move Mobility Systems Company, dated "Oct 2024 - May 2025," above Eastern Robotics Co. within Experience.
- **The résumé does not explain the overlap between the Mobility Systems internship and the Research-Agent Evaluation Framework project.** *(about 3 words to add)*
  > Feb 2025 - Jul 2025
  The internship runs from October 2024 to May 2025 while the contributor project runs from February to July 2025, so a reader may wonder whether the project was part-time, academic, or dated inaccurately. Leaving the overlap unexplained creates uncertainty about the scope and timing of both experiences.
  **How to change it:** Add [a brief part-time, academic, or concurrent-project explanation] to the project or correct the dates to reflect when the work actually occurred.

## Set aside (16)

Worth knowing, and not worth the space on this page:

- s2:e1:b3: "Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%" puts the result after a long list of methods. (and 1 more like it)
- s2:e1:b5: "who adopted them as the team’s runbook" shows adoption but does not indicate how broadly or consistently it was used.
- s3:e0:b0: "AI-first engineering practices" does not identify what you actually introduced or changed. (and 1 more like it)
- s2:e0:b0: "the on-call rotation that used them" is indirect and makes the relationship between the dashboards and the rotation harder to scan; use "supporting the on-call rotation" instead.
- s2:e0:b3: "while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation" strings together three secondary responsibilities, obscuring the migration's main point; separate the strongest supporting result or remove the less relevant duties.
- s2:e1:b4: "so each update used exactly one scored trajectory" restates "sampling a single rollout per prompt" rather than adding a distinct result; delete it or replace it with a measured training outcome.
- s3:e0:b0, s3:e0:b1, s3:e0:b2: "Drove" is past tense even though the role is current; use present tense, such as "Drive," unless this work has ended. (and 2 more like it)
- s3:e1:b1: "Showed the evaluator tracks injected degradation" is missing "that" before the dependent clause, making the sentence read as though "the evaluator" is the object of "showed." Corrected form: "Showed that the evaluator tracks injected degradation..."
- s3:e1:b2: "each was fixed upstream" uses passive voice and hides who performed the fixes; if the candidate made them, write "fixed each upstream" or "upstreamed fixes for each." (and 1 more like it)
- whole resume, dates: Jun 2022–Aug 2022: approximately two months between the bachelor's degree and the first listed role; add a brief explanation only if there was a relevant activity. (and 2 more like it)
- …and 6 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-019a02d2.md.

