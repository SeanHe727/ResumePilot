> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Content review:** all 4 entries with bullets
- **Wording review:** all 4 bullet-bearing entries
- **Narrative review:** entire resume
- **Format/ATS review:** entire file
- **Education:** no bullet-level review was applicable
- **JD match:** not run because no job posting was provided

The full detailed report is available with `/report --full`.

### Changes to make first

1. **Fix the experience order**
   - Put **Mobility Systems Company (Oct 2024–May 2025)** above **Eastern Robotics Co. (Aug 2022–Jul 2024)**.
   - The current order breaks reverse chronology.

2. **Clarify the overlapping project timeline**
   - The **Research-Agent Evaluation Framework** overlaps with both the internship and master’s program.
   - Add context so it is clear this was a concurrent project, not an unexplained employment gap.

3. **Correct inconsistent figures**
   - The Agent Runtime Suite claim of reducing latency from **900 ms to 600 ms** represents approximately a **33% reduction**, not 50%.
   - The increase from **71% to 83%** is a **12-percentage-point increase**, not a 12% increase.
   - These are the most important factual corrections.

4. **Strengthen unsupported outcome claims**
   Specialists flagged bullets that describe responsibility or activity without showing the result, particularly:
   - Ownership of monitoring dashboards and the on-call rotation
   - Broad claims about “accelerating delivery” and “improving outcomes”
   - Stabilising GRPO training
   - Removing nightly dispatch backlogs
   - Adoption of documentation as a team runbook

   Add measurable outcomes where you have them, or narrow those claims to what the work demonstrably did.

5. **Make technical causality more precise**
   - The load tests should not appear to be what maintained the latency target.
   - The dynamic-batching bullet currently attributes a single-request latency reduction to a serving method that may not logically explain that result.
   - Define what “diagnostic accuracy” measures.
   - Clarify what the Kendall correlation compares.
   - Explain how upstream fixes were verified.

6. **Improve scanability**
   - Lead several bullets with their measurable result rather than a long list of methods.
   - The GRPO latency bullet currently places the result after several technical clauses.
   - The final robotics bullet mixes migration work with hiring and on-call responsibilities.
   - Remove the repeated one-rollout explanation in the GRPO training bullet.
   - Correct **“on- call”** to **“on-call.”**
   - Fix the grammatical construction in “Showed the evaluator tracks…”
   - Clarify the pronoun reference in “their modules.”

7. **Check the Skills section**
   - The narrative review found no supporting evidence in the body for **Kubernetes** or **SQL**.
   - Either add relevant evidence to an experience/project entry or remove those skills.

### What is already technically sound

- The file is one page, parses cleanly, and has no layout or ATS blockers.
- The resume uses consistent formatting.
- Many bullets include concrete measurements and before/after comparisons.
- The overall career progression—from electrical engineering to software engineering, machine learning, and agent/LLM systems—is understandable.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 69 · wording 84 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The Experience entries are not ordered newest-first.**
   > Eastern Robotics Co. | Junior Software Engineer
   Eastern Robotics ends in Jul 2024, while Mobility Systems runs through May 2025, so the current order makes the career chronology harder to scan. A recruiter may see the most recent and most relevant internship only after an older role.
   **How to change it:** Move the Mobility Systems Company entry above Eastern Robotics Co. so the Experience section runs from May 2025 back to Jul 2024.
2. **The 900 ms-to-600 ms latency claim incorrectly calls the reduction 50%.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The latency fell by 300 ms, which is 33.3% of the original 900 ms, not 50%; 600 ms is 66.7% of the baseline. A technical reader who catches this arithmetic error may question the reliability of the rest of the performance claim.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction" while keeping the stated 900 ms and 600 ms measurements, or remove the parenthetical.
3. **The task-completion improvement is 12 percentage points, not 12%.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   Subtracting the 71% baseline from the 83% result gives a 12-percentage-point increase; the relative increase is approximately 16.9%. The current wording can therefore mislead a technical reader about the size and type of improvement.
   **How to change it:** Replace "by 12%" with "by 12 percentage points" and keep "from 71% to 83%"; use approximately 17% only if a relative increase is intended and verified.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The load tests are described as preserving the 180 ms latency even though tests only detect regressions unless an enforcement mechanism acted on them.** *(about 2 words to add, plus [the workload or control])*
  > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
  Load tests measure performance and can expose regressions, but they do not keep production behavior at a target by themselves. As written, the line claims more causal effect than the evidence supports, which may prompt a technical reader to ask for the actual gate, alert, or remediation process.
  **How to change it:** Replace that phrase with "added load tests to detect regressions under [the representative workload]"; if enforcement existed, name the actual [CI gate, deployment block, alert, or remediation process].
- **The diagnostics-dashboard and on-call ownership claims responsibility but provide no operational outcome.** *(about 8 words to add)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on- call rotation that used them.
  The reader can see the scope of accountability, but "across two major releases" measures release coverage rather than whether diagnostics, incident response, or reliability improved. Without a baseline, delta, or adoption figure, ownership alone does not demonstrate value.
  **How to change it:** Replace or supplement "across two major releases" with [the reduction in diagnostic time, incident duration, recurring incidents, or on-call escalations], and change "on- call" to "on-call".
- **The dispatch-backlog result is stated without its frequency or magnitude and is buried after secondary duties.** *(saves about 11 words and adds about 8 words)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  The reader understands the direction of the operational improvement but cannot judge whether backlogs disappeared consistently or how much dispatch delay was removed. The migration scope is concrete, while onboarding and weekend on-call duties dilute the result during scanning.
  **How to change it:** Move the dispatch result earlier, add [the number of backlog events, delayed dispatches, or hours of delay eliminated per week], and cut "onboarding two new hires and taking over the weekend on-call rotation" unless it is essential.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The single-request latency result is technically misattributed to dynamic batching.** *(about 5 words to replace, plus [the measured workload])*
  > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
  Dynamic batching has no other request to combine with in an isolated single-request workload and can leave latency unchanged or increase it. INT8 may reduce latency on suitable hardware, but the line currently presents dynamic batching as the cause of a result it cannot explain by itself.
  **How to change it:** If the 40% result came from batched traffic, replace "single-request edge inference" with [the actual batched workload]. If it was genuinely single-request latency, attribute the reduction to [the measured INT8 or other latency optimization] and report dynamic batching against [the throughput or batched-latency metric it improved].
- **The GRPO line claims that one rollout stabilized training, although one rollout usually removes the within-prompt comparison GRPO relies on.** *(about 7 words to replace, plus [the mechanism])*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  Standard GRPO generally uses multiple rollouts per prompt to compare relative rewards and form an informative advantage signal. A single rollout usually increases variance or makes that signal uninformative unless a nonstandard comparison or dense-reward mechanism was used, so an interviewer may challenge the stabilization claim.
  **How to change it:** Replace the causal claim with the actual stabilization mechanism, or state [the nonstandard comparison or reward mechanism] that made one rollout valid; do not claim stabilization from the rollout count alone.
- **The 5% latency result is buried after a long method list and does not identify whose latency changed or under what workload.** *(about 8 words to add)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  A scanning reader may not reach the outcome after the grouped-rollout, reward, and reference-policy clauses. Without a workload, percentile, or baseline, "end-to-end latency" is too vague to show whether this was a meaningful system improvement or a small experimental difference.
  **How to change it:** Move "reduced end-to-end latency 5%" to the opening, then retain only the method detail needed to identify your contribution and add [the affected workload] plus [the before-and-after latency or percentile].
- **The single-rollout GRPO line asserts stabilization without measuring what became more stable.** *(about 6 words to add)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  One rollout per prompt and one scored trajectory per update describe process volume, not convergence, reward variance, failed updates, or training reliability. A reader cannot tell whether stability means lower variance, fewer failures, faster convergence, or another observed change.
  **How to change it:** Replace the assertion with [the observed training-stability metric] and [the comparison with the prior rollout setup], and keep the single-rollout detail only if it was the valid mechanism behind that measured result.
- **The pending-case backlog reduction is not clearly connected to the triage branch's impact.** *(about 8 words to add)*
  > Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.
  A backlog can fall because of staffing changes, lower intake, or a changed case definition rather than because of the branch. Without a defined comparison, a hiring manager cannot distinguish the branch's contribution from a coincident operational change.
  **How to change it:** Keep the 68% result, but connect it to [the comparable pre-launch period or control group's backlog change] and, if available, define the pending-case population.
- **The runbook adoption claim has no evidence that reviewers actually used it.** *(about 5 words to add)*
  > Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.
  Documenting abstention rules and escalation paths proves that a runbook exists, not that it changed on-call behavior. A hiring manager needs an observable adoption signal to believe the operational effect.
  **How to change it:** Add [the number of reviewers or incidents using the runbook] after the adoption claim, or replace the claim with that observable usage evidence.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The evaluator's sensitivity to injected degradation is quantified but not tied to the evaluation conclusion it enabled.** *(about 8 words to add)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  A Kendall correlation of 0.89 and 400-plus trials show a strong result, but the line does not identify what was correlated or what decision the result supported. A hiring manager may therefore see a statistical experiment without knowing whether it established benchmark validity, detected missing evidence, or improved evaluator confidence.
  **How to change it:** Change this to "Showed that the evaluator tracks injected degradation," identify the two variables behind the Kendall correlation, clarify the expected severity ordering for the removed citations, sources, and claims, and add [the validation or evaluation decision enabled].
- **The eight metrics and their default-benchmark adoption show delivery and reuse but not the evaluation capability they added.** *(about 8 words to add)*
  > Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
  A reader can verify that the metrics were upstreamed and run on every release, but cannot tell whether they expanded coverage, enabled a missing check, or changed release confidence. The contribution therefore reads as accepted implementation rather than a concrete improvement to evaluation quality.
  **How to change it:** Keep the default-benchmark adoption as the impact anchor and add [the evaluation coverage or release decision the metrics enabled], while briefly naming [the technical work behind the eight metrics] if space allows.

## Set aside (14)

Worth knowing, and not worth the space on this page:

- format: Experience is not newest-first: "Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024" is listed above the more recent "Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025".
- s2:e1:b0: "68% in the first quarter after launch" gives a delta and timeframe but no starting backlog or definition of a pending case.
- s2:e1:b1: "diagnostic accuracy" does not specify which accuracy definition or task metric was used.
- s3:e1:b0: "Upstreamed 8 citation and faithfulness metrics" identifies the deliverable but not the technical work behind it.
- s3:e1:b1, s3:e1:b2: "a Kendall correlation of 0.89" does not identify the two variables being correlated. (and 3 more like it)
- s3:e0:b0: "accelerating delivery and improving outcomes for downstream teams" describes benefits without saying what changed for those teams. (and 2 more like it)
- s3:e0:b0: "accelerating delivery and improving outcomes for downstream teams" makes broad claims without stating what improved or by how much; replace it with a concrete result or remove it. (and 1 more like it)
- s2:e0:b0: "Owned the diagnostics service’s monitoring dashboards" uses duty framing, describing what the candidate was in charge of rather than what they changed or built. (and 1 more like it)
- s2:e0:b2, s2:e0:b3: "Maintained the CI pipeline" frames the work as a duty rather than leading with the concrete improvement, the automated regression checks. (and 2 more like it)
- s2:e1:b4: "by sampling a single rollout per prompt, so each update used exactly one scored trajectory" repeats the same one-rollout constraint; the line can end after "per prompt".
- …and 4 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-18e291dc.md.

