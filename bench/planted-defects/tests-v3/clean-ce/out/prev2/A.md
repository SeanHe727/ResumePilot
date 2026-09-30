> Here is my resume: bench/planted-defects/tests-v3/clean-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume:

- **Format:** clean one-page PDF, ATS-readable, consistent, and well quantified.
- **Content and wording:** all four experience/project entries were reviewed.
- **Narrative:** coherent progression from electrical engineering and robotics into ML, LLM evaluation, and agent systems.
- **Job-match review:** not run because no job posting was provided.

The most important changes are:

1. **Move PROJECTS above EXPERIENCE** so the current ML/LLM direction is visible earlier. Keep EDUCATION first because the current master’s program supports that transition.
2. **Add baselines or counts where claims are currently qualitative or incomplete**, especially:
   - the 68% backlog reduction,
   - the nightly backlog removal,
   - the concurrency reliability result,
   - the impact of the per-sensor error-budget dashboards.
3. **Clarify dense or indirect wording** in several bullets, particularly the agent scope, CI regression checks, evaluation metrics, and “upstream” defect fixes.
4. **Make outcomes appear earlier in long bullets** and replace responsibility-focused openings such as “Maintained” where the specific engineering work is more substantial.
5. **Clarify technical measurement terms**, including what “working context,” “grew 100x,” and the Kendall correlation compare.

The complete review is available in `/report --full`.

> /report
# Review: resume.pdf

**91/100** — format 100 · content 86 · wording 89 · narrative 84

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

1 error, 12 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Machine Learning Engineering Intern

**Problem**
[Important] The PROJECTS section should appear above EXPERIENCE so the current ML/LLM direction is established before the older engineering roles. *(no words)*

**Why**
Agent Runtime Suite and Research-Agent Evaluation Framework are the most direct evidence of the candidate's current ML/LLM direction. Leaving them below the older software-engineering experience makes the transition less immediate, while the current master's program should remain first because it anchors that transition.

**How to change it**
Move the PROJECTS section above EXPERIENCE, while keeping EDUCATION first.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The pending-case backlog reduction gives a percentage but not the starting and ending backlog counts. *(about 5 words to add, plus [two candidate-supplied counts])*

**Why**
A reader can see the direction and timeframe but cannot judge the scale of the reduction or what the 68% was measured against. The missing counts weaken an otherwise concrete operational result.

**How to change it**
Add “from [starting pending-case count] to [ending pending-case count]” after the percentage, keeping the eight-week timeframe if it is the relevant comparison.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Important] The result “catching 2 accuracy regressions before release” appears after a long list of harness functions, and “the team used to” adds filler. *(saves about 3 words)*

**Why**
The strongest evidence of impact is buried after the implementation details, reducing its scanning impact. “The team used to” adds no ownership or technical meaning and consumes space that could bring the result forward.

**How to change it**
Move “catching 2 accuracy regressions before release” earlier in the bullet, and cut “the team used to” so the harness is described directly as comparing the 14 adapter checkpoints.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Rebuilt the diagnostics service’s monitoring dashboards around per-sensor error budgets, cutting mean time to detect incidents from 40 to 12 minutes.

**Problem**
[Important] “Rebuilt the diagnostics service’s monitoring dashboards around per-sensor error budgets” does not show what the error-budget design enabled the dashboards to do. *(about 2 words to add, plus [candidate-supplied capability])*

**Why**
A robotics engineering reader can see the technical concept but not the specific engineering contribution behind the rebuild. Without the resulting capability, “around” leaves the role of the per-sensor budgets unclear and makes the dashboard work harder to assess.

**How to change it**
Keep “per-sensor error budgets” and, if accurate, replace or supplement “around” with the specific capability it enabled, such as [alerting, prioritization, or drill-down by sensor].

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Important] “With load tests that fail the build if p95 exceeds 200 ms” is grammatically attached to the latency reduction, so the build-gate purpose is slightly buried. *(no words)*

**Why**
A reader may initially read the load-test clause as another description of how latency was reduced rather than as a release safeguard. Making the gate function direct would clarify the engineering control behind the result.

**How to change it**
Move the load-test clause so it directly follows the latency result as a build-gate function, or replace it with wording that explicitly says the tests blocked builds when p95 exceeded 200 ms.

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
1. [Important] “Adding automated regression checks” does not identify what behavior or artifact those checks validated. *(about 1 word to add, plus [candidate-supplied check type])*
2. [Important] “Maintained the CI pipeline” frames the bullet as a responsibility instead of leading with the automation work that produced the result. *(saves about 5 words)*

**Why**
1. The outcome is strong, but the method gives limited evidence of the software-engineering skill involved in maintaining model-release quality. A reader cannot distinguish model validation from inference, data-quality, or integration testing.
2. The reader sees ownership of a pipeline before seeing the specific engineering change. That opening weakens the evidence of initiative and makes the shortened release cycle less immediately connected to the candidate's work.

**How to change it**
1. Replace or qualify “automated regression checks” with the most relevant check type, if accurate: [model-accuracy, inference, data-quality, or integration checks].
2. Cut “Maintained the CI pipeline for” and begin with the automated regression checks or the CI automation added for the model releases.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] “Removing the nightly backlogs that delayed morning dispatch” gives a qualitative result but no measure of the backlog or delay. *(about 4 words to add, plus [candidate-supplied figure])*

**Why**
A reader can understand the operational direction but cannot judge how large or frequent the problem was or how much the migration improved dispatch reliability. The line therefore shows the consequence without establishing its scale.

**How to change it**
Add one anchor: [backlog count or dispatch-delay duration before versus after the migration]. Keep “delayed morning dispatch” if it is the clearest operational consequence.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Important] “Kept working context under 10K tokens” does not identify what the context measures or what practical consequence the limit enabled. *(about 4 words to add, plus [candidate-supplied detail])*

**Why**
A reader cannot tell whether “working context” means the model's active prompt, retained state, or another runtime measure. The line also does not show whether the limit prevented context-window failures, preserved long-horizon operation, or enabled another capability, so the engineering value remains unclear.

**How to change it**
Replace “working context” with [the specific runtime measure, such as active prompt or retained state], and add the single substantiated consequence immediately after the 10K-token result: [failure prevented or capability enabled].

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] “Removing nested-pool deadlocks and lost tool results under 50-way fan-out” gives the test scale but no failure-rate or before-and-after evidence. *(about 4 words to add, plus [candidate-supplied rates])*

**Why**
A reader can see that the system was exercised at 50-way fan-out, but cannot judge whether the fix eliminated frequent failures or an isolated edge case. The result therefore demonstrates stress-test conditions without measuring the improvement.

**How to change it**
Replace or supplement “under 50-way fan-out” with [deadlock or lost-tool-result rate before and after the change, measured at 50-way fan-out].

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The line gives no method beyond “Upstreamed 8 citation and faithfulness metrics.” *(about 5 words to add, plus [candidate-supplied detail])*

**Why**
A technical reader can see the contribution and its adoption but cannot tell what technical work demonstrated the candidate's evaluation or engineering skill. Without a validation or integration detail, the achievement reads more like a contribution count than evidence of how the metrics were made reliable.

**How to change it**
Add one compact detail after the outcome describing [the most technically meaningful integration or validation step used].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Error] The claim that the evaluator “tracks injected degradation” is stronger than the reported Kendall correlation alone supports, and the correlation's comparison is unspecified. *(about 3 words to add, plus [candidate-supplied detail])*

**Why**
A Kendall correlation of 0.89 shows strong rank-order agreement with the imposed perturbation ordering, but it does not establish that the evaluator measures the intended degradation. A reader also cannot tell whether 0.89 compares evaluator scores with degradation severity, trial rankings, or another variable, which makes the validation claim difficult to assess.

**How to change it**
Replace the claim with wording that says the evaluator's scores were strongly rank-correlated with the imposed perturbation ordering, and replace “with a Kendall correlation of 0.89” with “a Kendall rank correlation of 0.89” plus [the two correlated variables and how degradation severity was established]. Describe the trials as removing citations, sources, and claims rather than as trials that removed them; claim that it tracked intended degradation only if supported by [additional controls, human judgments, and appropriate clustered uncertainty].

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Important] “Structural pipeline defects in stability, sourcing and parameter handling” is abstract, and “Each was fixed upstream” is passive and unclear. *(about 2 words to add, plus [candidate-supplied detail])*

**Why**
The category labels make the defects and their relationship to the pipeline difficult to parse for a scanning reader. “Upstream” is also not immediately clear outside the project context, while the passive construction hides who made the fixes.

**How to change it**
Replace the abstract category labels with [the specific defects or affected pipeline modules], and replace “Each was fixed upstream” with an active description of who fixed them and [the precise repository or framework location, if relevant].

## Already working

- s2:e0:b1: States the result before the implementation detail becomes dense.

## Set aside (5)

5 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-73b07b30.md.

