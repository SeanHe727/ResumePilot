# Full review: resume.pdf

**86/100** — format 100 · content 78 · wording 84 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 10 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Aug 2022 - Jul 2024

**Problem**
[Important] Experience is not listed newest-first. *(no words)*

**Why**
The more recent Mobility Systems Company role appears below the older Eastern Robotics Co. role, so a recruiter may miss the graduate-level ML experience that best matches the current direction. The software-to-ML progression is therefore less immediate to see.

**How to change it**
Move the Mobility Systems Company entry above Eastern Robotics Co. in EXPERIENCE.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The monitoring-dashboard and on-call bullet does not show what changed or improved as a result. *(about 6 words to add)*

**Why**
A reader cannot tell whether the work improved detection, response, reliability, or another operational result. 'Owned' describes responsibility, while 'across two major releases' shows scope rather than effectiveness, so the contribution reads more like an assignment than an evaluated outcome.

**How to change it**
Replace 'Owned' with a concrete action and add [a measured change compared with the prior process], such as [reduced incident-detection time by X]; replace or supplement 'across two major releases' with that outcome.

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The claim that the changes 'removed the nightly backlogs' overstates what the listed work establishes. *(about 4 words to add)*
2. [Important] The migration, logging rewrite, onboarding, and on-call responsibilities are stacked together without making their relationship to the result clear. *(about 3 words to add)*
3. [Important] The backlog result is not quantified. *(about 6 words to add)*

**Why**
1. The migration may have addressed a cron-related bottleneck, but the line does not establish that events were not missed, duplicated, delayed, or failed. Without before-and-after queue or dispatch evidence, the absolute claim can make the result appear unsupported.
2. A reader cannot tell which technical work addressed the backlog and which activities were separate contributions. The ambiguous 'which' also leaves the cause of the result unclear, while the weekend on-call duty interrupts the main technical accomplishment.
3. The reader can understand the direction of improvement but cannot judge its size or consistency. The '30 robot-fleet services' figure measures migration scale, not the operational change in backlog or dispatch performance.

**How to change it**
1. Either soften the claim to say the changes were intended to remove the nightly backlogs, or add [before-and-after backlog and queue-lag measurements] plus evidence that morning dispatches were completed on time.
2. Keep the migration and logging work beside the dispatch outcome, and move the onboarding and weekend on-call details into a separate clause; clarify the result's subject or add [the specific operational result each responsibility produced], if accurate.
3. Add [the backlog or dispatch measure before and after the change], such as delayed jobs, delay duration, or the percentage of on-time morning dispatches.

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The pending-case backlog reduction lacks a baseline or ending count. *(about 4 words to add)*

**Why**
A reader can see a 68% improvement but cannot tell whether it came from a substantial queue or a small number of cases. The result is therefore harder to judge operationally.

**How to change it**
Add [baseline pending cases] to [ending pending cases], if accurate.

*raised by content*

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] The edge-inference latency reduction lacks measured before-and-after p95 values. *(about 6 words to add)*

**Why**
The percentage communicates direction and size, but milliseconds would show whether the resulting latency was operationally significant. Without those values, the reader cannot judge the final performance level.

**How to change it**
Add the measured values: from [baseline p95 latency] to [final p95 latency], if accurate.

*raised by content*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The latency result is buried after several method clauses and does not identify the affected workflow or measurement condition. *(about 10 words to add)*

**Why**
A scanning reader encounters implementation details before learning what the work achieved, and the grammatical subject appears to be the methods rather than the candidate. 'End-to-end latency' and '5%' do not tell the reader which system became faster or whether the comparison was representative.

**How to change it**
Move the latency result to the opening, name [the measured pipeline or workflow], and add [baseline] to [final] under [workload or evaluation condition]; retain only the one or two method details most important to showing the contribution.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] The claim that sampling a single rollout stabilized GRPO training is incorrect as written. *(about 5 words to add)*
2. [Important] The claimed training stabilization is undefined and has no measured evidence. *(about 7 words to add)*

**Why**
1. One rollout per prompt does give each update one scored trajectory, but it removes the within-prompt group comparison GRPO uses to reduce variance. With sparse rewards, one sample generally increases gradient variance rather than stabilizing training, so the current wording could misstate the method.
2. A reader cannot tell whether stability meant lower reward variance, fewer failed runs, faster convergence, or another outcome. The rollout choice alone does not show that the stated problem was solved.

**How to change it**
1. If multiple rollouts were used, say GRPO was stabilized by sampling multiple rollouts per prompt and forming group-relative advantages. If only one rollout was used, say it 'used exactly one scored trajectory per prompt' and remove the stabilization claim.
2. Replace or qualify 'stabilised' with [the specific stability improvement] and add [a comparison against the prior rollout setup], such as reward variance, successful-run rate, convergence measure, or failure rate.

*raised by content, wording*

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Polish] The runbook's adoption is not quantified. *(about 5 words to add)*

**Why**
The line shows that the documentation was accepted, but not whether that meant informal approval or consistent operational use. A broader adoption measure would make the effect of the documentation more credible.

**How to change it**
Add [an adoption anchor], such as [all on-call reviewers used it] or that it guided reviews across [X incidents or weeks], if accurate.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The bullet uses broad phrases instead of identifying the engineering practice, outcome, or measurement. *(about 8 words to add)*

**Why**
A reader cannot tell what 'AI-first engineering practices' introduced across the platform or whether delivery became faster, more reliable, cheaper, or more capable. Without a baseline or downstream effect, the central adoption claim is difficult to judge and does not demonstrate the underlying engineering work.

**How to change it**
Replace the broad phrases with [the specific workflow, platform capability, or engineering process introduced] and [a delivery metric from baseline to result or a specific downstream-team outcome].

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The latency reduction is mathematically incorrect: reducing latency from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction. *(no words)*

**Why**
The absolute change is 300 ms, which is one third of the 900 ms baseline. The incorrect percentage can undermine confidence in the otherwise strong quantified performance claim.

**How to change it**
Replace 'a 50% reduction' with 'a 33.3% reduction,' or report the absolute change as '300 ms.'

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The task-completion change is a 12-percentage-point increase, not a 12% relative increase. *(about 1 word to add)*

**Why**
The endpoints move from 71% to 83%, which is a 12-percentage-point increase; the relative increase is approximately 16.9%. Leaving 'by 12%' beside those endpoints may make the reader question the calculation or the intended measure.

**How to change it**
Replace 'by 12%' with 'by 12 percentage points'; if a relative increase is intended instead, use [verified relative percentage increase].

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Error] The sentence is grammatically incomplete because 'Showed the evaluator tracks' is missing 'that.' *(about 1 word to add)*

**Why**
A reader must supply the missing conjunction to parse the sentence, creating an avoidable interruption in a technical result. The correction makes the evaluator's finding immediately clear without changing the claim.

**How to change it**
Insert 'that' after 'Showed.'

*raised by wording*

## Already working

- s2:e0:b1: Leads with a concrete production outcome and gives a clear baseline.
- s2:e0:b2: Connects a specific engineering change to a strong delivery outcome.
- s2:e1:b1: Leads with a quantified outcome and gives both the baseline and final result.

## Set aside (4)

- s3:e1:b0, s3:e1:b1, s3:e1:b2: "Upstreamed 8 citation and faithfulness metrics" identifies the contribution but not how the metrics were implemented or integrated. (and 3 more like it)
- s2:e1:b4: "so each update used exactly one scored trajectory" explains the implementation at length without clarifying the resulting training improvement.
- s3:e1:b0: "where they now run" uses an indirect relative clause and makes the relationship between the metrics and the benchmark less immediate.
- s3:e1:b2: "Defects in stability, sourcing and parameter handling" makes the defect relationship to those areas difficult to parse. (and 1 more like it)
