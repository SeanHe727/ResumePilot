> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed **4 bullet-bearing entries** with content and wording specialists, plus the full narrative and format. **Education entries were not applicable; JD matching was not run because no job posting was provided.** Full report: `/report --full`.

Most important changes:

1. **Reverse the experience order**
   - Put **Mobility Systems Company (Oct 2024–May 2025)** above **Eastern Robotics Co. (Aug 2022–Jul 2024)**.
   - The current order makes the timeline appear to move backward.

2. **Clarify weak or overloaded bullets**
   - Eastern Robotics: the monitoring-dashboard bullet describes ownership but not the operational result.
   - Its final bullet combines service migration, logging-library work, onboarding, and on-call duties; separate or prioritize these.
   - Agent Runtime Suite: the opening “AI-first engineering practices” bullet is broad and lacks a concrete outcome.

3. **Correct and clarify metrics**
   - Reducing latency from **900 ms to 600 ms** is a **33.3% reduction**, not 50%.
   - Raising task completion from **71% to 83%** is a **12-percentage-point increase**, not simply “12%.”
   - Clarify the measurement conditions or baseline/endpoints for several latency and training results.

4. **Improve result-first wording**
   - Several bullets bury the outcome after long technical method lists.
   - Replace vague or overloaded phrasing such as “keep it there,” “improving outcomes,” and “stabilised” without a measured result.
   - Reduce dense jargon where it obscures your specific contribution.

The file itself is **one page, ATS-readable, consistently formatted, and contains no layout warnings**.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 78 · wording 83 · narrative 84

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 13 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Aug 2022 - Jul 2024

**Problem**
[Important] Experience is not ordered newest-first. *(no words)*

**Why**
The later internship appears after the earlier role, making the career progression appear to move backward.

**How to change it**
Move Mobility Systems Company above Eastern Robotics Co.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The dashboard ownership line gives neither an outcome nor a concrete operating method. *(adds about 6 words)*

**Why**
It reads as a duty, not an achievement, and does not show the engineering behind it.

**How to change it**
Add [result] and one method, such as [alert design or instrumentation]; replace the unclear on-call wording.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.

**Problem**
[Important] The load-test description does not identify its coverage or enforced threshold. *(adds about 3 words)*

**Why**
The reader cannot tell how the tests protected the reported latency.

**How to change it**
Replace it with [the threshold or regression condition], or “to prevent regression.”

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
[Polish] The CI bullet leads with routine maintenance instead of the stronger action. *(no words)*

**Why**
That framing understates the contribution that produced the release-cycle improvement.

**How to change it**
Lead with “Added automated regression checks to the CI pipeline.”

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The migration bullet crowds the technical result with unrelated duties and gives no backlog measure. *(saves about 11 words)*
2. [Important] The phrase “which removed the nightly backlogs” has an ambiguous antecedent and buries the result. *(no words)*

**Why**
1. The causal link to dispatch is hard to follow, and the scale of the improvement is not judgeable.
2. The reader cannot tell which action caused the improvement.

**How to change it**
1. Put [backlog or delay comparison] directly after the migration, retain only the relevant logging work, and remove or separate onboarding and on-call duties.
2. Attach the dispatch result directly to the migration and move it immediately after that action.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] The edge-inference result gives no latency values or test conditions. *(adds about 5 words)*

**Why**
The reader cannot judge the resulting product performance or benchmark difficulty.

**How to change it**
Use “from [starting latency] to [ending latency]” and add “under [representative request load]” if accurate; remove the repeated “by.”

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The end-to-end latency result is buried after methods and lacks a statistic, baseline, or endpoint. *(adds about 4 words)*

**Why**
The impact is hard to scan and cannot be compared with the separate p95 result.

**How to change it**
Lead with the result and specify [measurement type], replacing it with “from [starting latency] to [ending latency]”; retain only the key method details.

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
[Error] The claim that one rollout per prompt stabilized GRPO training is incorrect as written and has no stability measure. *(saves about 4 words)*

**Why**
Standard GRPO needs multiple completions for within-prompt relative rewards; one rollout makes that signal degenerate or unavailable. The bullet also gives no evidence that stability improved.

**How to change it**
Remove the claim, or name the alternative estimator or baseline and add [stability comparison]; remove the restatement about one scored trajectory.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The delivery benefits are generic, unmeasured, and jargon-heavy. *(adds about 5 words)*
2. [Important] The adoption claim does not name the practices or implementation work. *(adds about 5 words)*

**Why**
1. The reader cannot tell what changed or why the ownership mattered.
2. The technical or operational skill behind adoption remains invisible.

**How to change it**
1. Replace both broad outcome phrases with [specific result] and, if available, [baseline metric].
2. Add [one specific practice, workflow, or platform change].

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The 50% latency reduction is arithmetically incorrect. *(saves about 1 word)*

**Why**
900 ms to 600 ms is a 33.3% reduction, not 50%; the stated figure undermines confidence in the result.

**How to change it**
Replace it with “a 33% reduction” or “a 33.3% reduction.”

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The stated 12% task-completion increase conflicts with the figures. *(adds about 1 word)*

**Why**
71% to 83% is a 12-percentage-point increase, or about 16.9% relative growth.

**How to change it**
Say “by 12 percentage points,” or “by 16.9%” if expressing relative change.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The metrics contribution does not show the integration or validation work, and “upstreamed” is repository jargon. *(adds about 4 words)*

**Why**
The reader cannot distinguish substantive engineering from submitting existing metrics.

**How to change it**
Use “Contributed” or “Integrated,” state that they became part of the default release benchmark, and add [technical detail].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation overstates what the experiment establishes. *(adds about 8 words)*
2. [Important] The correlation does not identify its comparison or practical consequence. *(adds about 8 words)*

**Why**
1. It supports a strong ordinal association in tested trials, not causal sensitivity, specificity, or generalization beyond the tested manipulations.
2. The figure is difficult to interpret, and the reader cannot tell what benchmark or decision it informed.

**How to change it**
1. Say “Found a Kendall correlation of 0.89 between evaluator scores and injected-degradation severity”; retain the stronger claim only with the stated controls.
2. Name [evaluator score] and [known degradation level], then add [benchmark, release, or evaluation decision] if accurate.

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Important] The debugging method and defect description are vague, and “fixed upstream” is passive jargon. *(adds about 5 words)*

**Why**
The reader cannot see what the instrumentation measured, what the defects affected, or where the fixes landed.

**How to change it**
Replace it with [specific tracing technique], clarify the affected defects, and name the fix destination if accurate.

## Already working

- s2:e1:b5: Shows that the work became part of team operations rather than remaining documentation.

## Set aside (6)

6 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b027e4cb.md.

