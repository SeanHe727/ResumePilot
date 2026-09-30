# Full review: resume.pdf

**85/100** — format 100 · content 78 · wording 83 · narrative 70

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 9 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that are conventionally left off. *(saves about 8 words)*

**Why**
Date of birth and nationality are not details a reader is meant to weigh in this résumé. Including them takes space and draws attention away from professional evidence.

**How to change it**
Remove the date of birth and nationality.

*raised by file*

> Western State University

**Problem**
[Important] Education appears before the recent engineering experience. *(no words)*

**Why**
The recent engineering work is the strongest evidence for the candidate’s current direction. Leading with education delays that evidence.

**How to change it**
Move the experience section above education and keep both degrees.

*raised by narrative*

> Jun 2022

**Problem**
[Polish] The dates show a 10-month period with no study or work listed. *(about 5 words to add)*

**Why**
A reader may wonder what happened between Jun 2022 and May 2023. If there is relevant activity from that period, listing it can clarify the timeline.

**How to change it**
If you had study, work, or other relevant activity during that period, add [the activity and dates]; otherwise, leave the timeline as is.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy gain lacks a baseline and evaluation context. *(about 8 words to add)*

**Why**
A reader cannot tell whether 35% means a relative increase or percentage points. Without the starting and resulting accuracy or the evaluation context, the gain is difficult to interpret or verify.

**How to change it**
Add [baseline and resulting accuracy] and [evaluation set or condition], and state whether the change is relative or in percentage points.

*raised by content*

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The disagreement reduction is buried after the routing-layer description. *(no words)*

**Why**
A scanning reader may reach the detailed agent and signal constraints without noticing the 14%-to-6% result. That makes the clearest impact of the work easier to miss.

**How to change it**
Move the 14%-to-6% disagreement reduction to the opening, before the routing-layer description.

*raised by wording*

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The tool-call and latency reductions are buried after a long method description. *(no words)*

**Why**
The reader has to get through the GRPO and reward details before seeing the results. Moving the reductions forward makes the impact easier to spot.

**How to change it**
Move the tool-call and latency reductions closer to the opening, before the GRPO and reward details.

*raised by wording*

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The release-safety result is buried after the evaluation scope. *(no words)*

**Why**
The reader sees the checkpoint count and evaluation criteria before learning that the harness caught regressions. That delays the most direct evidence of the harness’s value.

**How to change it**
Move “catching 2 accuracy regressions” to the opening, before the checkpoint-comparison details.

*raised by wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not train the model to reproduce tool-output tokens. *(no words)*
2. [Error] This bullet repeats the assistant-only loss-masking work already described in the first bullet. *(saves about 15 words)*
3. [Important] The purpose clause describes an intended result, not a measured improvement. *(about 10 words to add)*

**Why**
1. Assistant-only loss masking excludes tool-output tokens from the training loss, so it does not directly teach the model to reproduce those outputs. It can train the model to respond to tool outputs supplied in context.
2. Both bullets describe fine-tuning with assistant-only loss masking, so a reader may interpret them as the same work presented twice. The repetition uses space that could distinguish separate contributions.
3. A reader cannot tell whether fine-tuning improved tool-output fidelity. Without a comparison point and evaluation context, the line does not establish that the intended result occurred.

**How to change it**
1. If the objective was to reproduce tool outputs, use a loss that includes those tokens; otherwise, change the claim to say the model learned to respond to or use tool outputs more faithfully.
2. Combine this detail with the first bullet or remove this bullet; clarify how the efforts differ only if they were separate.
3. Replace the purpose clause with [measured change in tool-output fidelity versus a baseline, on an evaluation set], if available.

*raised by content, wording, narrative*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Polish] The 68% backlog reduction comes after the system description instead of leading with the result. *(no words)*
2. [Polish] “ML-extracted features” does not identify the feature-extraction approach. *(about 2 words to add)*

**Why**
1. The backlog reduction is the clearest outcome, but a scanning reader encounters it only after the system and signal details. Leading with the result makes the impact more apparent.
2. The phrase signals machine learning but gives a technical reader little sense of the method used. One accurate detail would make the implementation more concrete.

**How to change it**
1. Move the 68% backlog reduction to the opening, then briefly explain what the triage branch did.
2. Replace “ML-extracted features” with [the most relevant feature-extraction approach], if accurate.

*raised by wording, narrative, content*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] Switching from FP32 to BF16 mixed precision alone does not support a fourfold reduction in total GPU memory. *(about 2 words to add)*
2. [Polish] The two nearby uses of “by” make the sentence awkward. *(no words)*

**Why**
1. BF16 uses about half the storage per value compared with FP32, but fine-tuning memory also includes components such as optimizer states. Mixed precision by itself does not guarantee a fourfold reduction in total GPU memory.
2. The repeated construction makes the method and result harder to read smoothly. The technical memory claim is addressed separately; this is a wording issue.

**How to change it**
1. Say the change reduced memory used by FP32-stored tensors by about half. State a total-memory reduction only if supported by a measurement of the fine-tuning run; if measured, give [the measured reduction].
2. Remove the first “by” construction and use “Cut GPU memory used to fine-tune perception models 4x, switching from FP32 to BF16 mixed precision” only if the 4x result is supported.

*raised by content, wording*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Important] The release-cycle claim gives the endpoint but no starting point. *(about 3 words to add)*
2. [Polish] The sentence shifts from past tense to present tense. *(no words)*

**Why**
1. A reader can see that cycles reached three days but cannot tell how much faster they became. A before-and-after comparison would make the claimed improvement easier to judge.
2. “Maintained” describes completed work, while “adds” switches to present tense within the same bullet. The shift makes the timeline less consistent.

**How to change it**
1. Replace the phrase with “cut release cycles from [previous duration] to 3 days,” if accurate.
2. Change “adds” to “added.”

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The dispatch improvement has no measure of the backlog or delay change. *(about 6 words to add)*
2. [Polish] The migration result is not the opening focus of the bullet. *(no words)*

**Why**
1. The 30-service count shows the migration’s scope, not how much morning dispatch improved. Without a before-and-after measure, the operational value remains difficult to judge.
2. The technical change and its operational result are both useful, but the key improvement appears at the end. Leading with the migration and its result would make the contribution easier to scan.

**How to change it**
1. Add [change in backlog volume or dispatch delay compared with before migration] after “morning dispatch,” using a measure you can support.
2. Keep the migration and result as the opening focus, ahead of less important detail.

*raised by content, narrative*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The claimed downstream benefits do not say what changed or how it was measured. *(about 6 words to add)*
2. [Polish] “AI-first engineering practices” does not identify a practice used to drive adoption. *(about 3 words to add)*

**Why**
1. “Accelerating delivery” and “improving outcomes” do not identify a specific change. A reader cannot judge the value of the adoption work or what downstream teams gained.
2. Without an example, the reader cannot tell what you introduced or what engineering skill the work demonstrated. Naming one specific practice would make the contribution more concrete.

**How to change it**
1. Replace the broad benefits with [the concrete delivery or team outcome that changed and how it was measured], if available.
2. Replace the general phrase with [the specific practice or workflow change you introduced], if accurate.

*raised by content, wording*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Polish] The context limit is not connected to an outcome it enabled. *(about 6 words to add)*
2. [Polish] “The raw conversation grew 100x” does not make clear what grew by 100 times. *(about 2 words to add)*

**Why**
1. A reader can see that the working context stayed below 10K tokens, but not why that mattered to the runtime or its users. A direct consequence would show the value of the technical result.
2. A reader may not know what quantity the 100x describes, so the stress-test condition is difficult to interpret. Clarifying what grew would make the scale of the test more meaningful.

**How to change it**
1. Add [the task or runtime outcome this enabled, measured against a prior result or failure rate], if available.
2. Replace “the raw conversation grew 100x” with [the specific quantity that grew 100 times], if accurate.

*raised by content, wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The line gives the concurrency condition but not how much the fix reduced failures. *(about 6 words to add)*
2. [Polish] The concurrency fix and its result do not lead the bullet. *(no words)*
3. [Polish] “50-way fan-out” is specialized jargon that may obscure the test scale. *(about 2 words to add)*

**Why**
1. The 50-way condition shows the scale at which the issue was tested, but not how frequently deadlocks or lost results occurred or how much the change reduced them. A measured comparison would make the result easier to judge.
2. The line’s specific technical change and the failures it removed are its strongest evidence. Putting that result first would make the contribution clearer to a scanning reader.
3. Readers unfamiliar with concurrency terminology may not understand what the phrase means. A plain-language description would make the condition easier to grasp.

**How to change it**
1. If measured, add [deadlock or lost-result rate before and after the change under the same fan-out]; otherwise, keep the 50-way condition as the scale.
2. Move the concurrency fix and the failures it removed to the opening.
3. Replace “50-way fan-out” with [a plain-language description of the concurrency scale], if accurate.

*raised by content, narrative, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The integration’s outcome is missing, and the metric categories do not show what the metrics measure. *(about 7 words to add)*

**Why**
The count shows the scope of the contribution, but not why the metrics mattered to the framework or its users. Without an example, a reader also cannot tell what evaluation capability the metrics provide.

**How to change it**
Name one or two specific metrics, if accurate, and add [what the metrics let users evaluate or compare].

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The correlation is not defined clearly enough to interpret the validation result. *(about 8 words to add)*
2. [Polish] The strongest evaluation result is not the opening focus of the bullet. *(no words)*
3. [Polish] The validation result does not say what the evaluator’s ability enabled. *(about 5 words to add)*

**Why**
1. A reader cannot tell which two quantities produced the 0.89 statistic or how it relates to the 400+ trials. The description also leaves unclear exactly what was removed in those trials, making the validation harder to assess.
2. The measured correlation and trial scale are the clearest evidence in this line. Leading with that result would let a scanning reader see the validation contribution sooner.
3. A reader can infer that the evaluator responds to deliberately degraded reports, but not why that matters to users of the framework. Naming a concrete use would make the value of the validation clearer.

**How to change it**
1. Clarify what the correlation compares, such as [evaluator scores versus injected-degradation severity or ranking], if accurate; also clarify what was removed and how the trials relate to the statistic.
2. Move the evaluator’s validation result to the opening, before the trial details.
3. After the result, add [what this validation enabled or established for users], if there is a concise, accurate consequence.

*raised by content, wording, narrative*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] This bullet repeats the industrial-inspection triage result under the research-agent project and gives a slightly different reduction figure. *(saves about 20 words)*
2. The backlog reduction has no time period or comparison point. *(about 5 words to add)*
3. The line does not say what the triage branch screens the signals for. *(about 4 words to add)*
4. The bullet uses present tense for a project dated Feb–Jul 2025. *(no words)*

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

*raised by content, narrative, wording*

## Already working

- s2:e1:b1: The before-and-after latency figures give readers a clear comparison.

## Set aside (5)

- s3:e1:b2: “Cut the pending-case backlog by two-thirds” gives no time period or comparison point.
- s3:e1:b2: “screens 800+ sensor signals per case using ML-extracted features” does not say what the triage branch screens the signals for.
- s3:e1:b2: “screens” uses present tense for a project dated Feb–Jul 2025, which appears to have ended.
- s2:e0:b4: This duplicates the assistant-only loss-masking detail in the first bullet and states a goal instead of a result; combine it with the first bullet or remove it.
- s2:e0:b4: “so the model would learn to” is a wordy purpose clause that delays the point.
