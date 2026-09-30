> Here is my resume: bench/planted-defects/tests-final/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four experience/project entries for content and wording, plus the full resume’s narrative and formatting. No job description was provided, so I did not assess job match.

The main changes to consider:
- Resolve the repeated triage result across Mobility Systems and the research-agent project; the narrative review also flags repeated adapter fine-tuning detail within the internship.
- Clarify the claims specialists questioned, including the 35% accuracy gain, the 4× GPU-memory reduction, and what the assistant-only loss-masking work actually demonstrated.
- Put Experience before Education, and explain the June 2022–May 2023 period if there’s relevant context to add.
- Remove the date of birth and nationality listed in the contact details.

The file parses cleanly for ATS. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 83 · narrative 70

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 9 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that are conventionally left off.

**Why**
Date of birth and nationality are not details a reader is meant to weigh in this résumé. Including them takes space and draws attention away from professional evidence.

**How to change it**
Remove the date of birth and nationality.

> Western State University

**Problem**
[Important] Education appears before the recent engineering experience.

**Why**
The recent engineering work is the strongest evidence for the candidate’s current direction. Leading with education delays that evidence.

**How to change it**
Move the experience section above education and keep both degrees.

> Jun 2022

**Problem**
[Polish] The dates show a 10-month period with no study or work listed.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy gain lacks a baseline and evaluation context.

**Why**
A reader cannot tell whether 35% means a relative increase or percentage points. Without the starting and resulting accuracy or the evaluation context, the gain is difficult to interpret or verify.

**How to change it**
Add [baseline and resulting accuracy] and [evaluation set or condition], and state whether the change is relative or in percentage points.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The disagreement reduction is buried after the routing-layer description.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The tool-call and latency reductions are buried after a long method description.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The release-safety result is buried after the evaluation scope.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not train the model to reproduce tool-output tokens.
2. [Error] This bullet repeats the assistant-only loss-masking work already described in the first bullet.
3. [Important] The purpose clause describes an intended result, not a measured improvement.

**Why**
1. Assistant-only loss masking excludes tool-output tokens from the training loss, so it does not directly teach the model to reproduce those outputs. It can train the model to respond to tool outputs supplied in context.
2. Both bullets describe fine-tuning with assistant-only loss masking, so a reader may interpret them as the same work presented twice. The repetition uses space that could distinguish separate contributions.
3. A reader cannot tell whether fine-tuning improved tool-output fidelity. Without a comparison point and evaluation context, the line does not establish that the intended result occurred.

**How to change it**
1. If the objective was to reproduce tool outputs, use a loss that includes those tokens; otherwise, change the claim to say the model learned to respond to or use tool outputs more faithfully.
2. Combine this detail with the first bullet or remove this bullet; clarify how the efforts differ only if they were separate.
3. Replace the purpose clause with [measured change in tool-output fidelity versus a baseline, on an evaluation set], if available.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Polish] The 68% backlog reduction comes after the system description instead of leading with the result.
2. [Polish] “ML-extracted features” does not identify the feature-extraction approach.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] Switching from FP32 to BF16 mixed precision alone does not support a fourfold reduction in total GPU memory.
2. [Polish] The two nearby uses of “by” make the sentence awkward.

**Why**
1. BF16 uses about half the storage per value compared with FP32, but fine-tuning memory also includes components such as optimizer states. Mixed precision by itself does not guarantee a fourfold reduction in total GPU memory.

**How to change it**
1. Say the change reduced memory used by FP32-stored tensors by about half. State a total-memory reduction only if supported by a measurement of the fine-tuning run; if measured, give [the measured reduction].

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Important] The release-cycle claim gives the endpoint but no starting point.
2. [Polish] The sentence shifts from past tense to present tense.

**Why**
1. A reader can see that cycles reached three days but cannot tell how much faster they became. A before-and-after comparison would make the claimed improvement easier to judge.

**How to change it**
1. Replace the phrase with “cut release cycles from [previous duration] to 3 days,” if accurate.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The dispatch improvement has no measure of the backlog or delay change.
2. [Polish] The migration result is not the opening focus of the bullet.

**Why**
1. The 30-service count shows the migration’s scope, not how much morning dispatch improved. Without a before-and-after measure, the operational value remains difficult to judge.

**How to change it**
1. Add [change in backlog volume or dispatch delay compared with before migration] after “morning dispatch,” using a measure you can support.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The claimed downstream benefits do not say what changed or how it was measured.
2. [Polish] “AI-first engineering practices” does not identify a practice used to drive adoption.

**Why**
1. “Accelerating delivery” and “improving outcomes” do not identify a specific change. A reader cannot judge the value of the adoption work or what downstream teams gained.

**How to change it**
1. Replace the broad benefits with [the concrete delivery or team outcome that changed and how it was measured], if available.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Polish] The context limit is not connected to an outcome it enabled.
2. [Polish] “The raw conversation grew 100x” does not make clear what grew by 100 times.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The line gives the concurrency condition but not how much the fix reduced failures.
2. [Polish] The concurrency fix and its result do not lead the bullet.
3. [Polish] “50-way fan-out” is specialized jargon that may obscure the test scale.

**Why**
1. The 50-way condition shows the scale at which the issue was tested, but not how frequently deadlocks or lost results occurred or how much the change reduced them. A measured comparison would make the result easier to judge.

**How to change it**
1. If measured, add [deadlock or lost-result rate before and after the change under the same fan-out]; otherwise, keep the 50-way condition as the scale.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The integration’s outcome is missing, and the metric categories do not show what the metrics measure.

**Why**
The count shows the scope of the contribution, but not why the metrics mattered to the framework or its users. Without an example, a reader also cannot tell what evaluation capability the metrics provide.

**How to change it**
Name one or two specific metrics, if accurate, and add [what the metrics let users evaluate or compare].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The correlation is not defined clearly enough to interpret the validation result.
2. [Polish] The strongest evaluation result is not the opening focus of the bullet.
3. [Polish] The validation result does not say what the evaluator’s ability enabled.

**Why**
1. A reader cannot tell which two quantities produced the 0.89 statistic or how it relates to the 400+ trials. The description also leaves unclear exactly what was removed in those trials, making the validation harder to assess.

**How to change it**
1. Clarify what the correlation compares, such as [evaluator scores versus injected-degradation severity or ranking], if accurate; also clarify what was removed and how the trials relate to the statistic.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] This bullet repeats the industrial-inspection triage result under the research-agent project and gives a slightly different reduction figure.
2. The backlog reduction has no time period or comparison point.
3. The line does not say what the triage branch screens the signals for.
4. The bullet uses present tense for a project dated Feb–Jul 2025.

**Why**
1. The matching 800+ signal count and backlog outcome identify this as the same triage achievement already listed under Mobility Systems Company. The different wording of the reduction makes the repetition noticeable and can leave the reader unsure which figure is correct.
2. The two-thirds figure is not tied to a duration or a stated comparison point. A reader cannot tell over what period the reduction occurred or what it was measured against.
3. The signal count and feature detail describe inputs to the branch but not the condition or issue it identifies. A reader cannot tell what the triage is meant to detect.
4. The project dates indicate that the work has ended, while “screens” reads as an ongoing action. That mismatch can make the timeline unclear.

**How to change it**
1. Remove this bullet from the Research-Agent Evaluation Framework entry, or identify the separate project and result if this was a distinct triage branch.
2. If this was a distinct result, add [the time period and comparison point] for the backlog reduction.
3. If this was a distinct result, add [what the triage branch screens the signals for].
4. If the project has ended, change “screens” to “screened.”

## Already working

- s2:e1:b1: The before-and-after latency figures give readers a clear comparison.

## Set aside (5)

5 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8b981898.md.

