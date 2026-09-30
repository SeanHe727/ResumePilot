> Here is my resume: bench/planted-defects/tests-v3/clean-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the resume and generated the full report at `/report --full`.

Main changes to make:

1. **Clarify attribution and causality**
   - In the ML internship, the 68% backlog reduction currently appears fully attributed to the triage branch.
   - In the Agent Runtime project, the 82%→94% improvement similarly needs clearer attribution.
   - Avoid implying that instrumentation alone definitively located defects unless that is what the evidence supports.

2. **Add missing scale or downstream impact**
   - Quantify the effect of migrating 30 services from cron jobs to an event queue.
   - Clarify the consequence of catching the two accuracy regressions.
   - Indicate how broadly the documented runbook was adopted.

3. **Simplify ambiguous or dense wording**
   - Fix the past/present-tense inconsistency in the robotics role.
   - Replace or clarify terms such as “upstreamed,” “injected degradation,” “budgeted context layers,” and “50-way fan-out.”
   - Make unclear pronouns and metric definitions more explicit.

4. **Adjust ordering**
   - Consider placing **Projects above Experience**, led by **Agent Runtime Suite**, since it most directly establishes your current multi-agent-systems direction.
   - Within entries, lead with the strongest measured outcomes where noted in the report.

The file itself is one page, parses cleanly for ATS, has no layout warnings, and contains strong quantitative evidence: 15 of 16 bullets include figures. No job-description comparison was performed because no posting was provided.

> /report
# Review: resume.pdf

**92/100** — format 100 · content 89 · wording 88 · narrative 87

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

0 errors, 12 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.
> Raised defect localization on a 120-case benchmark from 82% to 94% by dispatching tasks to role-specialized sub-agents with isolated prompts, toolsets and contexts.

**Problem**
[Important] The two bullets attribute their full measured improvements to the described ML or agent architecture without establishing causation. *(about 8 words)*

**Why**
The post-launch backlog change could also reflect demand, staffing, case mix, workflow changes, or seasonality, and the benchmark gain could reflect factors beyond role-specialized dispatch. Without controlled comparisons using the same cases, scoring, tools, and other settings, the claims may overstate what the evidence demonstrates.

**How to change it**
Change the backlog wording to "with the pending-case backlog 68% lower in the eight weeks after launch," and change the defect-localization claim to state the controlled comparison that supports attribution; otherwise use the softer result-focused wording based on 94% localization with the listed sub-agent design.

> Machine Learning Engineering Intern

**Problem**
[Important] The resume order lets older software and infrastructure work define the page before the most current multi-agent work. *(no words)*

**Why**
A recruiter scanning from the top may not immediately see that multi-agent systems are the candidate's current direction. The Agent Runtime Suite is the most recent project and gives the strongest context for interpreting the earlier software role as supporting evidence rather than the main focus.

**How to change it**
Keep EDUCATION first, then move PROJECTS above EXPERIENCE and place Agent Runtime Suite first. Present the earlier software role after the current ML and agent work so it supports that direction.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Important] The reviewer-disagreement result does not immediately identify what the 14% and 6% percentages measure. *(about 2 words to add)*

**Why**
A reader may hesitate over whether the percentages refer to cases, findings, or another unit. That ambiguity makes the routing layer's effect harder to interpret and weakens an otherwise concrete before-and-after comparison.

**How to change it**
Replace the phrase with a wording that names the measured unit, such as disagreement cases or findings, if that is what the percentages represent.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Important] The comparison qualifier that the reductions preserved accuracy appears too late in the GRPO bullet. *(no words)*

**Why**
A scanning reader may notice the reductions in tool calls and latency without seeing that they were measured at equal accuracy against the SFT baseline. Moving that condition earlier makes the result read as an efficiency improvement rather than a possible quality tradeoff.

**How to change it**
Move "at equal accuracy versus the SFT baseline" immediately before the tool-call and latency outcomes, leaving the GRPO and rollout details after or later in the sentence.

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Important] The strongest outcome in the runbook bullet is buried after the documentation details. *(no words)*

**Why**
A reader first sees a documentation task and may miss that the rules became the team's runbook. The current order also leaves the practical change for on-call reviewers less prominent than the technical content being documented.

**How to change it**
Move the runbook-adoption result to the front of the bullet, then identify the abstention rules and escalation paths as the material that was documented; add the reviewer or workflow scope only if available.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
[Important] The CI bullet leads with an ongoing maintenance duty instead of the specific improvement performed. *(about 2 words)*

**Why**
“Maintained” makes the work sound routine and does not foreground the automated regression checks that produced the release-cycle result. A hiring reader may therefore underweight the candidate's direct engineering contribution.

**How to change it**
Lead with "Added automated regression checks to the perception team's model-release pipeline" and retain the release-cycle reduction. In the latency bullet, change "fail the build" to "failed the build" if describing completed work.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The migration bullet gives no measured change in the nightly backlog or morning-dispatch delay. *(about 6 words to add)*

**Why**
A robotics hiring reader can understand the operational benefit but cannot judge its scale or distinguish a complete fix from a small reduction. One before-and-after operational measure would make the migration's value more credible.

**How to change it**
Replace or follow that phrase with [the backlog or morning-dispatch delay reduction, measured against the pre-migration baseline], if the evidence is available.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The concurrency and cache changes do not by themselves establish that nested deadlocks and lost tool results were completely eliminated. *(about 1 word)*
2. [Important] The 50-way test scale is given without a failure-rate or before-and-after comparison. *(about 8 words to add)*

**Why**
1. Separate pools can remove one resource-wait cycle, and completion gating can prevent incomplete results from being cached, but failures, cancellation, timeouts, retries, ordering, correlation, fan-in accounting, and idempotent commits still affect these guarantees. The current wording therefore claims more reliability than the described changes alone prove.
2. A reader can see that the system was exercised at 50-way fan-out but cannot judge whether the result addressed frequent failures or a rare edge case. One failure measure would make the reliability improvement materially more credible.

**How to change it**
1. If testing supports it, replace "removing" with "eliminating observed" and specify the 50-way test conditions. Otherwise, describe the separated pools and completion-gated cache writes without claiming complete elimination.
2. Add the strongest available comparison after the result, such as [reduced deadlocks or tool-result loss from X to Y under the same 50-way test] or [completed N of N runs without either failure].

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The contribution's technical ownership is unclear because the bullet says the metrics were upstreamed without saying what was implemented, adapted, integrated, or validated. *(about 5 words to add)*

**Why**
A reader can see that the contribution reached the default benchmark but cannot tell what technical work the candidate personally performed. That makes the reach credible but the candidate's individual skill harder to assess.

**How to change it**
Keep the contribution and add [the single most technically distinctive integration, implementation, or validation detail], if accurate. Replace "upstreamed" with a clearer term such as "integrated" only if it precisely describes the contribution, and make the following pronoun explicitly refer to the metrics.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation establishes rank association in the trial setup, not broad evaluator validity or causal sensitivity. *(about 5 words)*
2. The metric result does not say what capability the validated evaluator enabled or changed. *(about 4 words to add)*

**Why**
1. A Kendall correlation of 0.89 shows strong ordinal association between evaluator scores and the imposed degradation ordering in these trials. It does not by itself show that the evaluator responded to the removals rather than correlated artifacts, or establish calibration, general validity, or causation.
2. The correlation gives a reader evidence about association but leaves the practical consequence unclear. Without that consequence, the result can read as an isolated statistic rather than evidence that the framework can detect citation, source, or claim degradation.

**How to change it**
1. State that evaluator scores showed strong rank association with the imposed degradation levels, with Kendall's correlation of 0.89 across 400+ report-level trials; add [controls, confidence interval, and replication details] only if claiming broader validation.
2. Name what was degraded by replacing the compressed phrase with the specific citation, source, and claim removals already described in the bullet, and state the evaluation capability this supported if the candidate has that fact.

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Important] The bullet may claim root-cause localization and confirmed fixes that layered instrumentation alone does not establish. *(about 2 words)*

**Why**
Instrumentation can show where a failure manifests or which module is implicated, but it does not by itself prove that module is the defect's root cause. The claim that every issue was fixed also needs reproducible before-and-after or regression evidence to establish that the diagnosis and fix were valid.

**How to change it**
Say that layered instrumentation localized three defects to implicated modules and that upstream fixes were made [if reproducibility and regression tests confirmed each fix]. Replace the process-heavy instrumentation wording with the specific trace or module evidence only if accurate.

## Already working

- s2:e0:b1: Uses a strong from-to comparison on a clearly identified held-out dataset.

## Set aside (26)

26 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-dc0ea78a.md.

