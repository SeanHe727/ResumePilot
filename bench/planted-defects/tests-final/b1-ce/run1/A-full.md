# Full review: resume.pdf

**86/100** — format 100 · content 79 · wording 80 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 12 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer

**Problem**
[Important] Experience is not listed newest-first. *(no words)*

**Why**
Eastern Robotics, dated August 2022 to July 2024, appears above Mobility Systems, dated October 2024 to May 2025. That reverses the date order and makes the work history harder to scan chronologically.

**How to change it**
Move the Mobility Systems Company entry above the Eastern Robotics Co. entry.

*raised by file, narrative*

> Western State University | M.S. in Computer Engineering

**Problem**
[Important] Education appears before Experience even though the roles provide more evidence for the career direction. *(no words)*

**Why**
A reader encounters the degrees before the work evidence. This delays the more relevant career information and makes the resume’s strongest evidence less prominent.

**How to change it**
Move the Experience section above the Education section.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
1. [Important] The dashboard and on-call responsibilities are stated without showing a result. *(about 6 words added)*
2. [Important] The monitoring-dashboard phrase does not show what diagnostic capability you maintained. *(about 6 words added)*

**Why**
1. A reader cannot tell whether this work improved diagnosis, incident response, or service reliability. The two-release count shows scope or duration, not what changed because of your contribution.
2. The artifact is clear, but the reader gets little evidence of the technical or domain skill involved. A specific capability would show how the dashboards helped on-call diagnosis.

**How to change it**
1. Add [a supported change in diagnostic, incident-response, or reliability outcomes] to show what the work changed.
2. Add [the key diagnostic signal or alerting behavior you implemented], if accurate.

*raised by content*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog outcome has no before-and-after measure. *(about 8 words added)*
2. [Important] The bullet bundles distinct responsibilities with the migration and obscures the main accomplishment. *(saves about 15 words if the unrelated details are cut)*

**Why**
1. A reader can understand the operational benefit but cannot gauge its scale. A comparison would make the effect on backlog or dispatch delay more concrete.
2. The migration’s operational result appears after several other activities, so the central accomplishment is harder to find. The logging-library rewrite, hiring, and on-call details also make the entry feel less like a focused progression.

**How to change it**
1. Add [a measure of backlog frequency or dispatch delay before and after the migration], if available.
2. Move “removed the nightly backlogs that delayed morning dispatch” immediately after the migration result, then cut or separate details that are not central to that accomplishment.

*raised by content, wording, narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The latency result is buried after a list of methods, and “Using” leaves your action implicit. *(saves about 8 words if the method details are cut)*
2. [Important] The 5% latency reduction has no named comparison setup. *(about 4 words added)*

**Why**
1. A scanning reader must get through several method details before seeing the 5% reduction, making the main contribution easy to miss. The opening also does not state what you did.
2. Without knowing what the reduction is compared against, a reader cannot tell which change the result measures. The percentage therefore lacks a clear reference.

**How to change it**
1. Move “reduced end-to-end latency 5%” to the beginning, replace “Using” with [an accurate action], and keep only the one or two method details most useful for explaining the result.
2. Add [the baseline or comparison setup] so the percentage has a clear reference.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
[Error] One scored rollout per prompt is incompatible with standard GRPO’s group-relative reward comparisons. *(no words if the method is corrected without added detail)*

**Why**
GRPO estimates advantages by comparing multiple rollouts for the same prompt. With exactly one scored trajectory, there is no within-prompt group comparison, so this setup cannot stabilize training through GRPO’s usual mechanism.

**How to change it**
Use multiple scored rollouts per prompt for GRPO; if only one rollout was used, name the actual training method or remove the GRPO claim.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The claims of faster delivery and better downstream outcomes are unsupported and do not name a specific change. *(about 6 words added if measured, or saves about 8 words if the unsupported claim is cut)*

**Why**
Driving adoption does not by itself establish that delivery accelerated or downstream outcomes improved. Without a concrete result and evidence, a reader cannot tell what became faster or better, or assess the value of the adoption work.

**How to change it**
If measured, replace the broad claim with [the specific delivery or downstream outcome] and [the measure and comparison that show the change]; otherwise, describe the adoption work without claiming those results.

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] A drop from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction. *(no words)*

**Why**
The decrease is 300 ms, which is one-third of the 900 ms starting value. A 50% reduction would be 450 ms, so the current wording makes the reported result mathematically inconsistent.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction.”

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The change from 71% to 83% is 12 percentage points, not a 12% relative increase. *(about 2 words added if using “12 percentage points”; no words if using “about 16.9%”)*

**Why**
Subtracting the two rates gives 12 percentage points. Relative to the starting rate of 71%, the increase is about 16.9%, so “12%” can misstate the comparison.

**How to change it**
Replace “by 12%” with “by 12 percentage points” if the absolute difference is intended, or “by about 16.9%” if the relative increase is intended.

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The line does not explain how you created or implemented the eight metrics. *(about 8 words added)*

**Why**
A reader can see the contribution’s scope and adoption, but not what evaluation skill the work demonstrates. One implementation detail would make your contribution more legible.

**How to change it**
Add [one distinctive implementation detail, such as the key signal or calculation used for one metric], if it helps show your contribution.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The 0.89 Kendall correlation does not identify the two quantities being compared. *(about 6 words added)*

**Why**
Without knowing what the evaluator’s results were compared against, a reader cannot interpret what the correlation demonstrates. Naming both ranked quantities would give the figure a clear meaning.

**How to change it**
Keep the figure and add [the two ranked quantities compared], if accurate.

*raised by content*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Important] “Layered instrumentation” does not specify the instrumentation or diagnostic signal used. *(about 6 words added)*

**Why**
A reader can see that you localized defects, but the method is too broad to show the technical skill behind that result. A specific signal or instrumentation layer would clarify how you isolated the modules.

**How to change it**
Replace “layered instrumentation” with [the most telling instrumentation layer or signal used to isolate the modules], if accurate.

*raised by content*

## Already working

- s2:e1:b0: Connects a concrete system contribution to a substantial, time-bounded operational result.
- s2:e1:b1: Pairs a quantified result with a named evaluation set and sample size.
- s2:e1:b2: Links a measured latency improvement to concrete implementation choices.

## Set aside (10)

- s2:e1:b4: “Stabilised GRPO training” does not specify what changed in observable terms.
- s3:e0:b0: “AI-first engineering practices” does not name a specific practice. (and 1 more like it)
- s2:e0:b0: “Owned” frames the opening as responsibility for areas rather than naming what you did; lead with a concrete action such as “Built” or “Maintained” if accurate.
- s2:e0:b0: “that used them” is unnecessary explanatory wording and can be removed.
- s2:e0:b1: The clause “with load tests that fail the build if p95 exceeds 200 ms” comes after the main result and adds a second detail that can be shortened or removed.
- s2:e0:b3: The result “removed the nightly backlogs that delayed morning dispatch” is buried after several separate activities; move it immediately after the migration result or split unrelated work into separate bullets.
- s2:e1:b4: “Sampling a single rollout per prompt” already conveys the one-trajectory constraint, making “so each update used exactly one scored trajectory” redundant.
- s3:e1:b0: “where they now run” is wordy and makes the release benchmark relationship less direct.
- s3:e1:b1: The result is buried after “across 400+ report-level trials”; lead with the correlation, then state how it was measured. (and 1 more like it)
- s3:e1:b2: “with layered instrumentation” is technical jargon that may slow readers outside the team; use a plainer description if possible.
