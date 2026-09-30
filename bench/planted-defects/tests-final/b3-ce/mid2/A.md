> Here is my resume: bench/planted-defects/tests-final/b3-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 entries with bullets for content and wording, plus narrative and format. Education entries have no bullets to review; no job-description match was run because no posting was provided.

The main changes to address:
- **Resolve conflicting metrics:** the Agent Runtime Suite figures show 900 ms to 600 ms, which is a 33% reduction, not 50%; the change from 71% to 83% is 12 percentage points, not 12%.
- **Clarify results and methods:** check the API load-test threshold against the claimed 180 ms p95, and clarify the GRPO training description—the reviewer flagged that one rollout per prompt may conflict with GRPO’s group-relative calculation.
- **Reorder for recency and focus:** list Mobility Systems above Eastern Robotics, and consider moving Projects ahead of Experience. The narrative review also noted the gap between the 2022 degree and 2023 role.

The format check found the file parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 79 · wording 82 · narrative 77

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 7 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> May 2023 - Jul 2024; Oct 2024 - May 2025

**Problem**
[Important] Experience is not in newest-first order.

**Why**
The Mobility Systems role ran from October 2024 to May 2025, later than the Eastern Robotics role ending in July 2024. Listing the older role first conflicts with reverse chronology and can make the experience sequence harder to follow.

**How to change it**
Move Mobility Systems Company above Eastern Robotics Co. in Experience.

> Agent Runtime Suite

**Problem**
[Polish] Projects should precede Experience to foreground the current agent-runtime work.

> Jun 2022; May 2023

**Problem**
[Polish] The dates show no listed study or work between June 2022 and May 2023.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Error] The 200 ms build gate does not establish the claimed 180 ms p95.

**Why**
A test that fails only above 200 ms establishes that a passing result is at or below 200 ms, not that it is 180 ms. As written, the test does not support the specific post-change figure, which may make a reader question the measurement.

**How to change it**
If a separate measurement showed 180 ms, identify it; otherwise replace the 180 ms claim with the supported result that the load tests kept p95 at or below 200 ms.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Important] The release-cycle result gives no baseline for judging the improvement.
2. [Polish] The past-tense role description uses inconsistent verb tenses.

**Why**
1. A reader can see the resulting cycle length but cannot tell how much shorter it became. Without the prior cycle length, the three-day result does not show the size of the improvement.

**How to change it**
1. Add the prior cycle length as [previous release cycle length], if known; otherwise retain the three-day result without implying a quantified reduction.

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The extra duties crowd the migration result, and “which” does not clearly identify what removed the backlogs.
2. [Polish] The backlog result has no measure of how much backlog or dispatch delay was removed.

**Why**
1. The migration is the main accomplishment, but the logging rewrite, onboarding, and on-call work interrupt it. A reader may also be unsure whether the migration or one of those other duties removed the nightly backlogs.

**How to change it**
1. Move the logging, onboarding, and on-call duties to a separate bullet, and replace “which” with a clear subject for the backlog result.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The 5% result is buried after method details instead of leading the line.
2. [Important] The 5% latency reduction does not identify what it was compared against.

**Why**
1. The result is the main reason this work matters, but a scanning reader may move on before reaching it. Leading with the outcome would make the impact easier to see.
2. Without a baseline or evaluation context, a reader cannot tell which system or result improved. That makes the reported reduction difficult to interpret.

**How to change it**
1. Move “reduced end-to-end latency 5%” to the start of the line, then retain only the most telling method details.
2. Add [baseline or prior system used for comparison] and, if needed, [evaluation workload or conditions].

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] Using one scored rollout per prompt is incompatible with standard GRPO’s group-relative advantage calculation.
2. [Polish] “Stabilised” does not name a training outcome or how stability was measured.

**Why**
1. Standard GRPO compares rewards within a group of rollouts for each prompt. One scored rollout provides no within-prompt group of rewards to compare, and the line says each update used exactly one scored trajectory.

**How to change it**
1. If standard GRPO was used, describe the multiple rollouts per prompt used to compute group-relative advantages. Otherwise, name the single-rollout method actually used and how its learning signal was computed.

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Polish] The runbook adoption result appears at the end instead of leading the line.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The broad delivery and downstream-benefit claims do not specify what changed or how it was measured.
2. [Polish] “AI-first engineering practices” does not identify the practices and may be jargon to readers outside the team.

**Why**
1. A reader cannot judge what improved or how much the work mattered. Without a concrete outcome and comparison point, the claimed impact is not assessable.

**How to change it**
1. Replace the broad benefits with [the specific delivery or downstream outcome] and, if available, [the change measured against its baseline or comparison].

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The decrease from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction.

**Why**
The decrease is 300 ms, which is one-third of the original 900 ms. A 50% reduction from 900 ms would result in 450 ms, so the stated figures conflict.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction”; if the reduction was 50%, use 450 ms as the endpoint instead.

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The change from 71% to 83% is 12 percentage points, not a 12% relative increase.
2. [Important] The strongest accomplishment is not the opening bullet in this project.

**Why**
1. The figures differ by 12 percentage points. Relative to the original 71%, the increase is about 16.9%, so “by 12%” misstates the change if it means a relative increase.
2. The task-completion result gives a specific benchmark change and a method, while the opening bullet makes a broad claim. A reader may encounter the less concrete claim first and miss the stronger result.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points” to match the figures from 71% to 83%.
2. Move the task-completion bullet to the start of the Agent Runtime Suite bullets.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Polish] The eight metrics are named only by broad categories, without an example of the evaluation work.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Polish] The line does not identify the two quantities in the Kendall correlation.
2. [Polish] “Showed” is generic and makes the evaluator’s specific behavior harder to scan.

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] “Layered instrumentation” does not specify how the defects were traced.
2. [Polish] “Each was fixed upstream” uses passive voice and does not identify who fixed the defects.

## Already working

- s2:e1:b0: Connects the triage branch to a concrete operational outcome: a 68% reduction in pending cases.
- s2:e1:b1: Pairs an interpretable before-and-after result with the size and held-out nature of the evaluation set.
- s2:e1:b2: States a quantified latency improvement and identifies the inference context.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9ecb0986.md.

