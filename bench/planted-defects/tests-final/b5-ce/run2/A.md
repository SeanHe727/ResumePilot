> Here is my resume: bench/planted-defects/tests-final/b5-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience/project entries for content and wording, plus the resume’s narrative and formatting. The education entries had no bullets to assess; no job description was provided for a match review.

The main changes to consider:
- **Resolve duplicated claims:** the internship bullets repeat the adapter fine-tuning work, and the two project/experience entries appear to describe the same sensor-triage backlog reduction, with figures stated as 68% and two-thirds.
- **Clarify evidence behind key numbers:** specialists flagged the 35% accuracy gain, disagreement rates, and 4× GPU-memory reduction as needing clearer definitions or support.
- **Tighten project relevance and chronology:** the research-agent project includes a sensor-triage claim that appears elsewhere; the timeline also leaves a gap after the B.S. and shows a move from a junior engineer role to an internship that may need context.

The format review found clean parsing and no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 83 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 9 important, 1 polish. Errors are marked [Error]; fix those first.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy gain is not interpretable without its comparison basis and evaluation set. *(about 6 words)*

**Why**
A reader cannot tell whether 35% is a relative gain or a percentage-point increase. Without knowing the evaluation set, they also cannot judge what the result was measured on.

**How to change it**
Clarify whether the gain is relative or in percentage points, and add [evaluation set].

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.
> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.
> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.
> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The results in four bullets come after lengthy setup instead of leading. *(no words)*

**Why**
In each bullet, readers reach the measurable outcome only after the routing constraints, training details, checkpoint and metric list, or system description. Leading with the results would let readers assess the impact before parsing how the work was done.

**How to change it**
Move each quoted result to the opening of its bullet, then briefly describe the existing method or system details.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] The two bullets report the same fine-tuning work as separate achievements. *(saves about 19 words)*
2. [Error] Assistant-only loss masking does not directly train the model to reproduce tool outputs. *(saves about 12 words)*

**Why**
1. Both describe fine-tuning the adapter with assistant-only loss masking, and the first bullet already reports an accuracy result. A reader may ask whether the second bullet describes a distinct training effort; without that distinction, it reads as duplicate space rather than additional evidence.
2. The masking excludes tool-output tokens from the loss, so the model receives no direct supervision to reproduce those outputs. It may learn from assistant responses that refer to tool outputs, but that is not the same as learning to reproduce the outputs themselves.

**How to change it**
1. Merge any genuinely distinct detail from the second bullet into the first, or remove the duplicate. Keep the second bullet separately only if you can clarify how the two efforts differed [how they differed].
2. Remove the claim about reproducing tool outputs, or name the separate training signal or evaluation that supports it [separate signal or evaluation].

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Error] The 4x GPU-memory reduction overstates what switching from FP32 to BF16 mixed precision alone establishes. *(about 3 words)*

**Why**
BF16 values use half the memory of FP32 values, not one quarter. Mixed-precision fine-tuning may also retain some data in FP32, so total GPU-memory use does not generally fall by 4x from the precision change alone.

**How to change it**
Replace “by 4x” with [measured reduction] based on a before-and-after measurement for the same workload; otherwise say that switching to BF16 reduced memory use without specifying a factor.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Important] The three-day release-cycle duration has no prior duration to show the size of the change. *(about 3 words)*
2. [Polish] The past-tense role description shifts from “Maintained” to “adds,” leaving the timing of the regression checks unclear. *(no words)*

**Why**
1. Readers can see the new duration but cannot tell how much shorter it is than the old cycle. Without that baseline, they cannot judge the scale of the improvement.
2. The role ended in July 2024, but the present-tense verb makes the checks sound current. A reader may not know whether they were added during the role or afterward.

**How to change it**
1. Add the prior duration as [from X days/weeks] alongside “to 3 days,” if you can substantiate it.
2. Change “adds” to “added” so both verbs use past tense.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The claimed downstream impact does not identify what improved. *(about 4 words)*

**Why**
Readers cannot tell what downstream teams gained or how the platform work changed their results. Without a specific outcome, they cannot judge the claimed impact.

**How to change it**
Replace the vague impact phrase with [what improved for downstream teams]; add [a delivery or outcome measure compared with its baseline] if available.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The claim that the changes removed deadlocks and lost tool results overstates what the described safeguards establish. *(no words)*

**Why**
Separate pools address particular starvation dependencies, not every deadlock pattern. Completion-gated cache writes can prevent partial output from being cached, but do not by themselves ensure results survive failures, cancellation, or retries.

**How to change it**
If tests verified the outcome, scope it to the tested workload and failure conditions; otherwise say the changes mitigated nested-pool deadlocks and partial-result caching.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
1. [Important] The eight metrics are not identified, so the technical substance of the integration is unclear. *(about 2 words)*
2. [Important] The integration is described without saying what it changed for the framework or its users. *(about 7 words)*

**Why**
1. Readers can see how many metrics were added, but not what kinds of evaluation they support. One representative metric would make the implementation more concrete than the count alone.
2. Readers can see what you added, but not why it mattered. The metric count shows the size of the contribution, not its effect on the framework or its users.

**How to change it**
1. Replace the count or supplement it with the name of the most representative metric [metric name], if accurate.
2. Add the clearest outcome after the integration [evaluation result or user-facing improvement, compared with the prior module].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify what the evaluator’s scores are being compared against. *(about 4 words)*
2. [Important] “Tracks injected degradation” does not say clearly what was measured. *(about 2 words)*

**Why**
1. The correlation is useful evidence, but readers cannot tell what the evaluator’s agreement represents without a reference ranking or measure. The trial count shows test volume, not what the statistic is anchored to.
2. Readers may not know whether the evaluator tracked the injected degradation itself or the change in evaluator scores. That ambiguity makes it harder to understand what the correlation validates.

**How to change it**
1. Name the reference used for the correlation [reference ranking or measure].
2. Replace that phrase with “evaluator scores tracked deliberately introduced degradation.”

> “cutting the pending-case backlog 68% in the eight weeks after launch” / “Cut the pending-case backlog by two-thirds”

**Problem**
[Error] The evaluation-framework entry repeats a triage achievement already reported in the internship, with a different backlog-reduction figure. *(saves about 20 words)*

**Why**
The evaluator implementation and validation results form a coherent project story, but the triage bullet shifts to an unrelated achievement. Readers may wonder whether it is the same work as the internship bullet and whether 68% and two-thirds describe the same result; that repetition and mismatch weaken the credibility of both entries.

**How to change it**
Remove the triage bullet from the evaluation-framework entry. If it is the same achievement, keep it only once and use one consistent figure [68% or two-thirds, whichever is accurate].

## Already working

- s2:e1:b1: Combines a measured performance gain with the implementation and a concrete regression safeguard.
- s3:e0:b1: Pairs a clear technical result with specific stress-test conditions.

## Set aside (7)

7 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-731e2682.md.

