> Here is my resume: bench/planted-defects/tests-final/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the résumé’s four experience/project entries for content and wording, plus its overall narrative and ATS formatting. Education has no bullets to assess. No job description was provided, so I did not run a role-specific match.

The main changes to address:

- **Resolve duplicated claims.** The internship and research-agent project both describe the same triage work, but report the backlog reduction as **68%** and **two-thirds**. Confirm the figure and keep the achievement in one place, or clarify why it appears in both. The internship also has two bullets describing assistant-only loss masking; the narrative review flagged them as potentially redundant.
- **Clarify how results were measured.** The content review flagged the 35% diagnostic-accuracy improvement, the 14%-to-6% disagreement reduction, and the two regressions caught before release for missing context such as baselines, denominators, or comparison points.
- **Rework or remove broad claims.** The runtime-suite opening bullet claims faster delivery and better downstream outcomes without saying what changed or how those effects were measured. The research-agent project’s backlog bullet also appears out of place beside its evaluation-framework work.
- **Address the timeline and personal details.** The narrative review noted no listed activity between June 2022 and May 2023. The format review flagged the date of birth and nationality; it also found the file parses cleanly for ATS.

The full review and per-entry findings are in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 77 · wording 81 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 15 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh. *(saves about 8 words)*

**Why**
Date of birth and nationality are not relevant to assessing the qualifications presented here. Their inclusion can distract from the work and education that should guide a reader’s evaluation.

**How to change it**
Remove “Date of birth: 14 Mar 1999” and “Nationality: Canadian.”

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy change lacks a comparison and assessment context. *(about 9 words)*

**Why**
A reader cannot tell whether 35% means a relative increase or a percentage-point gain, or what result it is compared with. Without a comparison and assessment context, the size and meaning of the improvement are difficult to judge.

**How to change it**
Clarify whether the figure is relative or in percentage points and add [baseline and post-tuning accuracy on the same evaluation set].

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
1. [Important] The 14%-to-6% reviewer-disagreement rates lack the cases or denominator used to calculate them. *(about 7 words)*
2. [Important] The routing-layer method appears before the disagreement reduction it produced. *(no words)*

**Why**
1. A reader cannot tell which cases the rates cover, making it harder to judge how representative the reduction is. Naming the evaluation cohort would give the comparison a useful anchor.
2. A scanning reader must get through the method before reaching the 14%-to-6% result. That delays the clearest evidence of the bullet’s impact.

**How to change it**
1. Add [type or number of cases used to calculate the disagreement rates].
2. Move the disagreement reduction to the start of the bullet, before the routing-layer description; the text only moves.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Important] The GRPO rollout and reward details precede the reductions in tool calls and latency. *(no words)*

**Why**
Readers encounter the method before the 18% tool-call and 5% latency results. This buries the outcomes that show the value of the work.

**How to change it**
Move the tool-call and latency reductions to the start of the bullet, ahead of the rollout and reward details; the text only moves.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
1. [Important] The two accuracy regressions are not tied to a stated reference. *(about 5 words)*
2. [Important] The harness description and evaluation criteria come before the result of catching regressions. *(no words)*

**Why**
1. A reader cannot tell whether the regressions were measured against an earlier checkpoint, a release target, or another reference. Without that comparison, the significance of catching them is unclear.
2. A reader reaches the impact only after the implementation and criteria. Putting the result first would make the contribution clearer on a quick scan.

**How to change it**
1. Name the reference used to identify regressions, such as [baseline checkpoint or release threshold].
2. Move “catching 2 accuracy regressions before release” to the start of the bullet, before the harness description and criteria; the text only moves.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not train the model to reproduce tool outputs more faithfully. *(about 3 words)*
2. [Error] The internship repeats the same assistant-only-masking work in bullets b0 and b4. *(saves about 19 words)*

**Why**
1. Assistant-only masking excludes tool-role output tokens from the loss, so the model gets no direct training signal to reproduce them. A reader may question whether the stated method supports the claimed effect, weakening the technical credibility of the bullet.
2. Both bullets say the adapter was fine-tuned with assistant-only loss masking, so b4 does not read as a distinct accomplishment. The repeated method takes space from other evidence of your work.

**How to change it**
1. Replace that claim with training assistant-authored calls or responses conditioned on tool outputs; if tool-output tokens were explicitly included in the loss, state that instead.
2. Keep the result in b0 and remove b4; retain any distinct rationale only if it adds information not already covered by b0.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Error] The same backlog result is reported as both 68% and two-thirds. *(about 4 words)*
2. [Important] The system description and technical detail come before the 68% backlog reduction. *(no words)*

**Why**
1. Two-thirds is about 66.7%, so these figures differ for what appears to be the same result. A reader may wonder whether they are approximate descriptions or conflicting measurements, which weakens confidence in the accomplishment.
2. The result is the strongest evidence of impact in the bullet, but readers encounter it only after the system and method details. This delays the outcome on a quick scan.

**How to change it**
1. Confirm [verified backlog reduction] and use the same measured figure in both locations, or consolidate the repeated accomplishment.
2. Move the backlog reduction to the start of the bullet, ahead of the system description and technical detail; the text only moves.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Important] The 4× GPU-memory reduction is not established by the stated FP32-to-BF16 change alone. *(about 8 words)*

**Why**
BF16 halves storage for tensors converted to that format, but common fine-tuning setups retain substantial FP32 weights, gradients, or optimizer state. A reader may doubt that this change alone explains a 4× reduction in total memory, which can undermine confidence in the figure.

**How to change it**
Give [measured memory metric and before/after values] and identify any additional optimization; if this was only standard FP32-to-BF16 mixed precision, report the measured reduction it actually produced.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
[Important] The three-day release-cycle duration has no stated prior duration. *(about 4 words)*

**Why**
Without a baseline, readers cannot judge how much the release cycle shortened. The three-day result is useful, but the size of the improvement remains unknown.

**How to change it**
Add [prior release-cycle duration] before “to 3 days,” if accurate and available.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The backlog and dispatch-delay outcome is not measured. *(about 8 words)*

**Why**
Readers can see what improved, but cannot gauge the scale of the operational change. A before-and-after measure would make the outcome more concrete.

**How to change it**
Add one verified comparison, such as [backlog count or dispatch delay before and after migration], if available.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] Pool separation and completion-gated cache writes alone do not establish that deadlocks and lost results were eliminated. *(about 2 words)*

**Why**
Separate pools can address a particular starvation deadlock, and waiting for stream completion can prevent caching an unfinished stream. Other dependency cycles or result-handling failures can still cause deadlocks or lost results, so the broad claim may prompt a reader to ask what was tested.

**How to change it**
If tests demonstrated these outcomes, specify the tested conditions and scope; otherwise replace “removing” with wording that says the changes reduced the risk of these failures.

> AI-first engineering practices

**Problem**
[Important] The broad AI-first adoption claim does not clearly connect to the runtime results in the other bullets. *(saves about 17 words)*

**Why**
The specific work in b1 and b2 concerns runtime engineering, while b0 claims platform-wide adoption and downstream benefits without showing how they connect. That broad claim may distract from the concrete results a reader can assess.

**How to change it**
Lead with b1 and b2, then cut b0 or explicitly connect it to those results if accurate.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The integration of eight metrics names the contribution but not its result. *(about 8 words)*

**Why**
A reader can see what was added, but not what the integration made possible or improved. The metric count establishes scope, not the value of the work.

**How to change it**
Keep the integration and metric count, then add [what the metrics enabled or improved, such as evaluator coverage or use].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The Kendall correlation lacks a stated reference ranking or target. *(about 6 words)*

**Why**
Without knowing what the evaluator’s results were correlated against, a reader cannot interpret what 0.89 measures. The trial count and degradation setup do not resolve that ambiguity.

**How to change it**
Specify the comparison after the correlation, such as [the reference ranking or expected degradation ordering], if accurate.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Important] The two-thirds backlog-reduction claim repeats the internship accomplishment and does not belong in this evaluation-framework entry. *(saves about 20 words)*

**Why**
The matching outcome, signal count, and method make the claim appear to be the same triage work attributed to the industrial-inspection role. As written, it risks making a reader doubt which project produced the result.

**How to change it**
Remove b2 from this entry; if this project had a separate backlog reduction, include its distinct, verified result instead.

## Already working

- s2:e1:b1: Pairs a measured latency reduction with concrete implementation details and a regression guard.
- s3:e0:b1: Pairs a concrete context limit with a demanding conversation-growth test.

## Set aside (7)

7 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b5f5921c.md.

