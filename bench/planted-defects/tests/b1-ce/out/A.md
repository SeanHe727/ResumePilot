> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume through the format, narrative, content, and wording specialists.

**Coverage**
- Content and wording reviewed: all 4 entries with bullets
- Narrative reviewed: entire resume
- Format/ATS check completed
- Education entries were not content-reviewed because they contain no bullets
- No job-description match was run because no posting was provided

**Changes to make first**

1. **Reverse the Experience entries**
   - Put Mobility Systems Company (Oct 2024–May 2025) before Eastern Robotics Co. (Aug 2022–Jul 2024).
   - The current order interrupts the otherwise clear progression from software engineering to ML engineering.

2. **Correct the Agent Runtime Suite figures**
   - The change from **900 ms to 600 ms** is approximately a one-third reduction, not 50%.
   - The change from **71% to 83%** is a **12-percentage-point increase**, not simply a 12% increase.
   - These are the most important credibility issues identified.

3. **Resolve the edge-inference latency claim**
   - The resume connects a “single-request” latency reduction with dynamic batching, which the content reviewer found technically inconsistent.
   - Verify the actual workload and measurement condition, then make the claim describe that condition accurately.

4. **Rework the GRPO bullets**
   - Two bullets cover closely related GRPO training work and should be consolidated or clearly differentiated.
   - Verify the claim about using one rollout per prompt; the reviewer flagged it as potentially incompatible with the stated GRPO setup.
   - Clarify what the reported 5% latency reduction measures.

5. **Make responsibility-only bullets show an outcome**
   - The diagnostics-dashboard bullet describes ownership but not what improved because of the work.
   - The Agent Runtime Suite opening bullet refers to accelerating delivery and improving downstream outcomes without identifying a concrete result.
   - Add the specific operational or adoption result if you have it.

6. **Clarify technical scope and causality**
   - The robotics entry combines service migration, logging-library work, onboarding, and on-call responsibilities in one bullet. Separate the major work or make the relationship between the changes and the dispatch outcome clearer.
   - The ML internship’s “ML-extracted features” phrase does not identify the technical approach.
   - The research-agent project should clarify what “upstreamed,” “layered instrumentation,” and “fixed upstream” mean in that project.

7. **Clean up wording details**
   - Correct “on- call” to “on-call.”
   - Remove vague references such as “keep it there” and ambiguous “which” constructions.
   - Reduce jargon where it may not be understood outside the project team, particularly “upstreamed,” “report-level,” and “upstream.”
   - Check tense consistency in the Research-Agent project.

**What is already confirmed by the format review**
- The document is one page and extracts cleanly.
- No layout or ATS parsing blockers were found.
- The formatting is consistent throughout.
- The main structural issue is the non-chronological Experience order.

The complete specialist findings and per-bullet details are available in the generated report.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 67 · wording 84 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The dynamic-batching latency claim is technically incorrect as written because it assigns the result to single-request inference.**
   > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
   If the request is processed alone, dynamic batching provides no batching benefit and may add scheduling delay, so a technically knowledgeable reader may distrust this result and the rest of the entry. The method and workload condition need to describe the same experiment.
   **How to change it:** Replace "single-request edge inference" with the actual batched workload condition, such as [the concurrency or request-load condition], and keep "INT8 engine with dynamic batching" only if requests were actually processed in batches; otherwise name the method that produced the single-request result or report throughput instead.
2. **The claim that single-rollout sampling stabilised GRPO training is technically unsupported and conflicts with standard GRPO's group-relative advantage calculation.**
   > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
   With one rollout per prompt, the reward equals the group mean and the group variance is zero, making the standard advantage zero or numerically degenerate rather than demonstrating useful stabilization. Without a measured stability result or a named nonstandard estimator, an ML reader may treat the line as an algorithmic error.
   **How to change it:** If this was standard GRPO, replace the stabilization claim and single-rollout description with [the actual number of rollouts per prompt]; if it used a modified estimator, name [the alternative baseline or cross-prompt normalization] and add [the measured change in update variance, convergence, or downstream quality]. Remove the repeated clause beginning "so each update".
3. **The latency percentage is incorrect: 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The decrease is 300 ms out of the 900 ms baseline, which is approximately one-third. An arithmetic contradiction in a prominent performance bullet undermines confidence in the rest of the entry's measurements.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction"; the existing baseline, endpoint, and millisecond unit are otherwise clear.

## Already working

- s2:e1:b0: Pairs a substantial operational result with concrete workload scale.
- s2:e1:b1: Makes the before-and-after accuracy comparison explicit.
- s2:e0:b3: Shows meaningful production scope through 30 robot-fleet services.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The load tests did not themselves keep production latency at 180 ms, so "to keep it there" misstates their causal role.** *(saves about 2 words)*
  > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
  Load tests can detect regressions or gate releases, but they do not maintain production runtime latency after deployment. An engineering reader may therefore question the otherwise clear 420 ms to 180 ms measurement.
  **How to change it:** Replace "to keep it there" with "to catch regressions" or state the actual control that preserved the result, such as [a performance gate or production alert].
- **The monitoring-dashboard and on-call ownership bullet gives no operational outcome or scale measure.** *(saves about 5 words if the release-count phrase is replaced, plus a bracketed measure)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on- call rotation that used them.
  Responsibility across two releases shows involvement but does not show whether the dashboards improved detection, response, reliability, or incident prevention. A hiring reader needs one outcome-linked figure to distinguish meaningful operational ownership from maintenance.
  **How to change it:** Keep the ownership phrase only if useful, then add [reduction in mean time to detect], [reduction in incident response time], [number of incidents caught before customer impact], or [number of services or engineers using the dashboards]. Replace "Across two major releases" with that stronger measure if space is limited.
- **The migration bullet does not clearly connect the event-queue change to the removal of nightly backlogs or show the scale of the improvement.** *(about 5 words to add, plus a bracketed operational measure)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  The logging-library rewrite, onboarding, and on-call work are bundled with the migration, so a reader cannot tell which change addressed dispatch delays. The binary outcome also gives no indication of how often or how severely the backlog occurred.
  **How to change it:** Tie the backlog result directly to the event-queue change, retain the logging-library rewrite only if it supported that result, and add [number of jobs previously backlogged nightly], [typical dispatch delay before migration], or [number of mornings affected].

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The 5% end-to-end latency result does not identify the measured workflow, baseline, workload, or evaluation condition.** *(about 8 words to add, plus bracketed measurement details)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  A reader cannot tell whether this means tool-call latency, inference latency, workflow completion time, or another boundary, so the value of the result is difficult to judge. Without a before-and-after comparison or workload condition, the result is hard to assess for reproducibility or significance.
  **How to change it:** Qualify "end-to-end latency" with [the measured latency boundary or workflow], and add [the before-and-after latency or comparison condition] after the 5% result. Keep only the reward and training details that explain that specific measurement.
- **The phrase "with ML-extracted features" does not show what technical approach you built or applied.** *(about 2 words to replace, plus a bracketed approach)*
  > Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.
  The bullet demonstrates a strong operational result and workload scale, but a hiring reader cannot distinguish feature engineering from model integration, routing logic, or another contribution. That makes your individual technical role in the triage system harder to assess.
  **How to change it:** Replace "ML-extracted features" with [the specific model or triage approach used], such as the model, routing method, or integration you implemented.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **The task-completion result is a 12-percentage-point increase, not a 12% increase.** *(adds about 1 word)*
  > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
  The stated endpoints move from 71% to 83%, a difference of 12 percentage points. Calling it a 12% increase uses the wrong unit and may make a reader interpret the result as either a percentage-point gain or an approximately 16.9% relative increase.
  **How to change it:** Replace "by 12%" with "by 12 percentage points"; use "by approximately 16.9%" only if you intend to report the relative increase instead.
- **The retry method does not identify which failures were retried or how partial context was validated or resumed.** *(about 6 words to add, plus bracketed method details)*
  > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
  Retries can help with transient or ambiguous failures but can harm deterministic errors, stale context, duplicate side effects, or unbounded retry loops. Without those boundaries, the reader cannot tell whether the method plausibly supports the benchmark gain.
  **How to change it:** Add [the failure types that retries addressed] and [how the retained context was validated or resumed] after the existing method phrase.
- **The adoption claim is too broad to show what AI-first practices were introduced or what changed for downstream teams.** *(saves about 3 words, plus bracketed specifics)*
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  The bullet names platform-wide adoption and benefits but gives no concrete practice, delivery metric, baseline, or downstream outcome. A reader cannot tell whether delivery became faster, more reliable, cheaper, or easier, so the claim reads as filler beside the stronger quantitative bullets.
  **How to change it:** Replace "AI-first engineering practices" with [the specific practices introduced], and replace both broad outcome phrases with [the delivery metric that improved] and [the concrete downstream-team outcome], including [a baseline or delta] if available.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The Kendall correlation result does not define the degradation levels or comparison that produced it.** *(about 8 words to add, plus bracketed experiment details)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  Without the known severity ordering, matched underlying reports, number of independent base reports, or an uncertainty estimate, a reader cannot tell whether the statistic reflects evaluator sensitivity or correlated synthetic variants. The perturbation list sounds concrete but is not reproducible enough to interpret.
  **How to change it:** Specify [the controlled degradation levels or removal protocol] and add the strongest available anchor: [the defined severity ordering], [number of independent base reports], or [confidence interval or significance estimate]. If measured, report separate correlations for citations, sources, and claims.
- **The bullet does not establish whether the three traced defects were merged into the canonical project or whether the fixes were verified after remediation.** *(saves about 1 word if jargon is cut, plus bracketed verification details)*
  > Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.
  For an open-source contribution, accepted upstream changes and released fixes demonstrate shipped impact, while a contributor-branch patch may only show proposed work. The abstract defect categories and "layered instrumentation" also make it difficult to see how module-level localization was established.
  **How to change it:** Replace "each was fixed upstream" with the verifiable status—[merged in upstream pull requests], [released in version], or [patched in the contributor branch]—and add [regression tests added] or another post-fix proof. Replace "structural pipeline defects" and "layered instrumentation" with the concrete failure or module descriptions and the concise evidence used to localize them.

## Across the whole résumé

- **The Experience entries are not in reverse-chronological order.** *(no words)*
  > Aug 2022 - Jul 2024
  The older Eastern Robotics role appears before the newer Mobility Systems role, so a reader scanning from the top sees your career sequence out of order. That can make the résumé look less carefully maintained and can hide your most recent experience from a quick review.
  **How to change it:** Move the entire Mobility Systems Company entry above Eastern Robotics Co.; no text needs to change.

## Set aside (18)

Worth knowing, and not worth the space on this page:

- s2:e1:b5: "who adopted them as the team's runbook" shows adoption but not its scope or use.
- s2:e0:b1: “Reduced p95 API latency from 420 ms to 180 ms” gives the comparison but not the request workload, traffic level, or measurement context.
- s3:e0:b0: "AI-first engineering practices" does not say what practices were introduced.
- s3:e1:b0: "Upstreamed 8 citation and faithfulness metrics" does not make clear whether the implementations were merged into the framework's canonical repository or connected as an external package. (and 1 more like it)
- s3:e1:b1: "Showed the evaluator tracks injected degradation" does not specify whether this means rank-order sensitivity to known severity or broader validity on research-agent reports.
- s3:e1:b2: "layered instrumentation" and "structural pipeline defects" do not tell the reader what boundaries were instrumented or what evidence localized the failures to their modules.
- s2:e0:b0: "Owned" is duty framing that states what the candidate was in charge of rather than what they did; replace it with a concrete action such as "Built and maintained" or "Managed."
- s2:e0:b0: "on- call" contains an incorrect space in the compound term; correct it to "on-call."
- s2:e0:b0: "that used them" is vague and indirect because "them" forces the reader to infer that the dashboards supported the rotation; a tighter correction is "supporting the on-call rotation."
- s2:e0:b3: "while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation" chains three additional responsibilities onto the migration, weakening scanability; split the work or remove the least relevant clause. (and 2 more like it)
- …and 8 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-e0ca8d4f.md.

