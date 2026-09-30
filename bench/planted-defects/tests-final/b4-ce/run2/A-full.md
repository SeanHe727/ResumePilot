# Full review: resume.pdf

**85/100** — format 100 · content 78 · wording 85 · narrative 62

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 15 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.
> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Important] The completed-role bullets mix past and present tense: “Maintained” and “adds” in one role, and “screens” in another. *(no words)*

**Why**
The inconsistent verbs make the timeline less clear for work in roles that have ended. Readers may have to pause to work out whether the described tasks are ongoing or completed.

**How to change it**
Change “adds” to “added” and “screens” to “screened.”

*raised by wording*

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh and that are conventionally left off. *(saves about 8 words)*

**Why**
A reader does not need the date of birth or nationality to assess the candidate’s qualifications. Including them takes space from relevant information and asks the reader to consider details that are not part of the résumé’s evidence.

**How to change it**
Delete “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

*raised by file*

> “cutting the pending-case backlog 68%”; “by two-thirds”

**Problem**
[Error] The same diagnostics triage branch is credited with different backlog reductions: 68% in one place and two-thirds in another. *(about 3 words)*

**Why**
The descriptions appear to refer to the same branch and result, but the figures do not match. A reader may question whether these are separate measurements or an inconsistency, which can undermine confidence in both claims.

**How to change it**
Use [the same measured figure] in both places if they describe the same result; if they are separate results, clarify how the branch or measurement differs.

*raised by narrative*

> Mechanical Design Engineer

**Problem**
[Important] The newest Mechanical Design Engineer entry redirects the page away from its ML and agent-engineering direction. *(saves about 12 words)*

**Why**
As the most recent role, it makes the reader weigh mechanical design before seeing the candidate’s current technical direction. Without a clear link to that direction, a recruiter may be less certain which roles the résumé targets.

**How to change it**
Shorten this entry to a line, or add [how the role fits the intended career direction].

*raised by narrative*

> Western State University

**Problem**
[Important] Experience appears after Education even though the candidate has several years of work experience. *(no words)*

**Why**
The current technical direction is easier to read from the roles first. With Education leading, readers must pass over it before seeing the work that establishes that direction.

**How to change it**
Move the Experience section ahead of Education.

*raised by narrative*

## Lakeside Auto Parts | Mechanical Design Engineer | Metro City, Country | Jun 2025 - Present

> Designed stamping dies for automotive brackets in SolidWorks, cutting the scrap rate from 6% to 4% on two press lines.

**Problem**
[Important] The bullet attributes the scrap-rate reduction to the die design without establishing that the redesign caused it or that the result was validated on both lines. *(about 2 words)*

**Why**
A die redesign can reduce scrap when tooling causes defects, but the line does not establish that cause or validation on both press lines. A reader may question whether other process or material changes explain the reduction, weakening the result’s credibility.

**How to change it**
If trials confirmed the reduction on both lines and linked it to the die redesign, retain the attribution; otherwise describe the measured scrap-rate change without crediting the redesign.

*raised by content*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement has no stated comparison or evaluation set. *(about 9 words)*

**Why**
Without a baseline or measurement context, a reader cannot tell what the percentage represents or how to interpret it. The improvement is a strong headline, but its significance is hard to judge.

**How to change it**
After “by 35%,” add [from X% to Y% on the same evaluation set], if accurate.

*raised by content*

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.
> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.
> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.
> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The outcome figures come after long method and implementation descriptions, making them harder to spot while scanning. *(no words)*

**Why**
The 14%-to-6% disagreement reduction, tool-call and latency reductions, two regressions caught, and 68% backlog reduction are the most immediately legible results. When readers meet lengthy design or setup details first, they may miss those outcomes or give them less weight.

**How to change it**
Move each result phrase to the beginning of its bullet, then follow it with the routing design, training method, harness details, or branch inputs.

*raised by wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Important] This bullet repeats the assistant-only loss-masking method from the first bullet without adding a distinct result or contribution. *(saves about 19 words)*

**Why**
A reader sees the same fine-tuning method in both bullets and gets no new outcome from the second mention. That repetition uses space that could carry new information about the work.

**How to change it**
Remove this bullet unless it contains a distinct contribution or result not covered by the first bullet; if so, replace the repeated method description with that information.

*raised by narrative, wording*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Error] The 4× GPU-memory reduction is not supported by switching from FP32 to BF16 mixed precision alone. *(about 3 words)*

**Why**
BF16 uses half the storage per value of FP32, not one quarter. Mixed-precision training can also retain FP32 master weights and optimizer states, so total GPU-memory savings are not automatically 4×.

**How to change it**
Change the figure to 2× only if you mean storage per value; otherwise report total-memory reduction only if it was measured, and specify the training setup.

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
[Important] The 3-day release-cycle duration has no comparison point. *(about 4 words)*

**Why**
Without the previous duration, a reader cannot judge the size of the improvement. The 3-day result is useful, but its significance remains unclear.

**How to change it**
Replace this phrase with the before-and-after duration, using [prior release-cycle duration] to 3 days if accurate.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The opening claim names broad benefits and “AI-first” practices without saying what changed, while also failing to connect the claim to the concrete runtime improvements below. *(about 3 words)*

**Why**
A reader cannot tell what improved or how to assess the impact, and the phrase does not show what you introduced or changed. Since the two runtime bullets give concrete technical results, the opener’s abstract language makes the project’s contribution harder to understand.

**How to change it**
Replace “AI-first engineering practices” with [the specific AI-enabled workflow you introduced] and replace the broad benefits phrase with [one specific outcome and its comparison], connecting it to the runtime results only if they support it.

*raised by content, wording, narrative*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Important] The key context-window result is separated from the method by a lengthy comparison about raw conversation growth. *(saves about 4 words)*

**Why**
Readers scanning for the result meet the raw-conversation comparison before the method and result are easy to take in together. That delays the concrete 10K-token outcome and makes the bullet slower to scan.

**How to change it**
Move “Kept working context under 10K tokens” to the start of the bullet and compress the raw-conversation comparison.

*raised by wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The bullet claims the listed changes removed deadlocks and lost tool results under 50-way fan-out without showing that both outcomes were verified in that workload. *(about 5 words)*

**Why**
Separate pools prevent pool-starvation deadlocks only when the dependency graph and shared resources still allow progress. Gating cache writes on stream completion does not ensure fan-in delivers every tool result when tasks fail, are cancelled, or queues overflow, so the broad result claim may invite questions about what was actually tested.

**How to change it**
If testing confirmed both outcomes under the 50-way fan-out workload, specify that tested scope; otherwise say the changes addressed nested-pool deadlocks and incomplete cache writes, and identify what was verified.

*raised by content*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The integration claim gives no result beyond the contribution itself. *(about 6 words)*

**Why**
A reader can see what you integrated, but not what the contribution changed or enabled. That makes the value of the work difficult to judge.

**How to change it**
Add [the evaluation capability enabled or downstream use], if you can substantiate it.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The 0.89 Kendall correlation does not identify the variables being correlated. *(about 5 words)*
2. [Polish] “Showed the evaluator tracks” is indirect and makes the reported relationship harder to scan. *(no words)*

**Why**
1. Without the paired variables, a reader cannot interpret what the coefficient demonstrates about the evaluator. The number alone does not make clear what relationship the trials showed.
2. The wording makes readers parse the claim before they reach the correlation result. A more direct construction would make the evaluator’s demonstrated behavior clearer at a glance.

**How to change it**
1. After the coefficient, add [the two variables correlated, such as evaluator score and injected degradation severity], if accurate.
2. Replace “Showed the evaluator tracks” with “The evaluator tracked.”

*raised by content, wording*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Important] The two-thirds backlog reduction has no measurement period or before-and-after case counts. *(about 5 words)*
2. [Important] The completed-project bullet uses present tense for the triage branch. *(no words)*

**Why**
1. The reduction is useful evidence, but readers cannot tell the timeframe or scale of the backlog it describes. That leaves the size and context of the result unclear.
2. The project ended in July 2025, so present-tense “screens” makes the work’s timeline unclear. A reader may wonder whether the branch is still being developed or operated.

**How to change it**
1. Add [the measurement period or before-and-after backlog counts], if available.
2. Change “screens” to “screened.”

*raised by content, wording*

## Already working

- s2:e2:b1: Shows a clear before-and-after performance result.

## Set aside (9)

- s2:e0:b1: “signed off first-article inspections with the supplier” gives a signoff milestone but does not make its consequence clear.
- s2:e2:b3: “removing the nightly backlogs that delayed morning dispatch” describes the outcome but gives no measure of the backlog or delay change.
- s2:e1:b1: “limits each of 3 specialist agents and an independent reviewer to their in-scope signals” does not show how signal scope was assigned or enforced.
- s2:e1:b3: “catching 2 accuracy regressions before release” does not explain what counted as a regression.
- s2:e1:b4: “Assistant-only loss masking” does not, by itself, train the model to reproduce tool-role outputs. (and 1 more like it)
- s2:e1:b5: “with ML-extracted features” names the features’ source but not what technical approach produced or used them.
- s3:e1:b0: “citation and faithfulness metrics” names broad categories rather than showing how you integrated them.
- s3:e1:b2: “screens 800+ sensor signals per case using ML-extracted features” does not explain how the features informed triage.
- s2:e1:b2: “GRPO” and “SFT” may be opaque to readers outside the immediate team.
