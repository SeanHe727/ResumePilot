> Here is my resume: bench/planted-defects/tests-final/b4-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets for content and wording, plus the resume’s overall narrative and format. Education entries had no bullets to review. No job description was loaded, so there’s no role-specific match assessment.

The main changes flagged:
- **Reconcile the backlog figures:** the internship and project sections appear to describe the same reduction but give different figures.
- **Clarify the career story:** the move from software engineering to an ML internship, then to mechanical design, is unexplained. The narrative review also suggests moving Projects ahead of Experience and Education.
- **Revisit specific claims:** define the evaluation basis for the 35% diagnostic-accuracy improvement, remove or substantiate the claim about assistant-only loss masking improving tool-output reproduction, and add outcomes where bullets describe activities without results.

The format review found that the file parses cleanly as a one-page resume. It also flagged date of birth and nationality as personal details to remove. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 76 · wording 84 · narrative 55

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 14 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The file includes personal details that readers are not meant to weigh.

**Why**
Date of birth and nationality do not help a reader assess the candidate’s qualifications for these roles. Including them adds personal information without strengthening the case for the application.

**How to change it**
Remove “Date of birth: 14 Mar 1999” and “Nationality: Canadian” from the file.

> pending-case backlog 68%

**Problem**
[Error] The two triage bullets give different figures for the same backlog reduction.

**Why**
The Mobility Systems Company bullet reports a 68% reduction in eight weeks, while the Research-Agent Evaluation Framework bullet reports a two-thirds reduction. A reader may wonder whether these refer to different results or whether one figure is inaccurate.

**How to change it**
Use the same verified backlog-reduction figure in both bullets.

> Education

**Problem**
[Important] Projects should precede Experience, with Education after both.

**Why**
The agent and evaluation work makes the clearest case for the direction implied by the degree and skills. Putting Education before that work makes the strongest evidence for that direction less visible.

**How to change it**
Move Projects ahead of Experience and place Education after both sections.

> Machine Learning Engineering Intern

**Problem**
[Important] The move from the software-engineering role to the ML internship reads as a title-level step backward without context.

**Why**
The dates and titles show a move from Junior Software Engineer to Machine Learning Engineering Intern, which can read as a reduction in seniority. If this was an intentional pivot, the missing context may leave readers unsure how to interpret it.

**How to change it**
If this was an intentional pivot, add [brief context for the move].

> Mechanical Design Engineer

**Problem**
[Important] The move from the ML internship to mechanical design is unexplained, and the Lakeside entry should be shortened.

**Why**
The Mechanical Design Engineer role follows an ML internship and sits apart from the résumé’s ML and agent direction. Without context, readers may not understand how the move fits the intended direction; the entry also takes space that could be reduced.

**How to change it**
Shorten the Lakeside Auto Parts entry to one line and add [brief context for the move into mechanical design or how it connects to the intended ML/agent direction].

## Lakeside Auto Parts | Mechanical Design Engineer | Metro City, Country | Jun 2025 - Present

> Ran tolerance stack-up analyses for 12 production parts and signed off first-article inspections with the supplier.

**Problem**
[Important] The analyses and inspections have no reported outcome.

**Why**
A reader can see what you worked on, but not whether the analyses or inspections resolved a production issue, verified a design, or changed a decision. Without a concrete outcome, the scope of the work is clear but its value is not.

**How to change it**
Add the most telling result of the analyses or sign-off, such as [what the analysis identified or prevented] or [what the inspection confirmed, measured against the applicable acceptance criterion].

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement has no evaluation basis or percentage interpretation.

**Why**
Without that anchor, a reader cannot tell what accuracy was assessed or how to interpret the size of the improvement. The figure is prominent, but its meaning is difficult to judge.

**How to change it**
Clarify “by 35%” with [whether this is a relative or percentage-point change] and [the evaluation baseline or set].

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The routing constraint is difficult to parse on a scan.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The GRPO method detail precedes the results it produced.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] “The team used to” is unnecessary filler.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Error] Assistant-only loss masking does not train the model to reproduce tool outputs, and this bullet repeats the masking method already described in the accuracy bullet.

**Why**
Assistant-only loss masking removes tool-output tokens from the direct training loss, so the method alone does not train the model to reproduce those outputs. The bullet also repeats the method in the preceding accuracy claim, while presenting faithful reproduction as an intention rather than a demonstrated result.

**How to change it**
Remove this bullet and keep the version in b0 that reports the accuracy improvement. If another part of the training setup explicitly trained faithful reproduction and you want to retain that claim, name that setup instead of attributing the effect to masking.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Important] The triage result would land more strongly if this bullet opened the entry.
2. [Polish] “ML-extracted features” does not identify the extraction approach and uses compressed jargon.

**Why**
1. The backlog reduction and the scale of the system make this a strong lead for the internship entry. Leaving it later means readers may not see that impact first.

**How to change it**
1. Move this bullet to the beginning of the Mobility Systems Company bullets.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Error] Switching from FP32 to BF16 mixed precision alone does not support a 4× GPU-memory reduction.

**Why**
BF16 uses half the storage per value compared with FP32, not one quarter. Mixed-precision fine-tuning can also retain FP32 optimizer states and other memory, so this switch alone does not establish a 4× reduction in total GPU memory.

**How to change it**
Report the measured memory reduction if available; otherwise remove “by 4x” and describe the change as switching from FP32 to BF16 mixed precision.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Important] The p95 latency result would land more strongly if this bullet opened the entry.

**Why**
The drop from 420 ms to 180 ms gives a clear, quantified result. Leading with it lets readers see the impact before the other work in the role.

**How to change it**
Move this bullet to the beginning of the Eastern Robotics Co. bullets.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The verb tenses are inconsistent for this ended role: “Maintained” is past tense, but “adds” is present tense.
2. [Important] The three-day release-cycle duration has no earlier duration for comparison.
3. [Polish] The automated regression checks are not described specifically.

**Why**
1. The shift in tense can make the reader wonder whether the role or the work is still ongoing, despite the end date. A consistent past-tense description will make the timeline easier to follow.
2. A reader can see the resulting duration, but cannot judge how much faster releases became. Without a baseline, the improvement is difficult to assess.

**How to change it**
1. Replace “adds” with “added.”
2. Add [previous release-cycle duration] before “to 3 days,” if you can verify the earlier cycle length.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Polish] The removed nightly backlogs and delayed dispatches are not quantified.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The bullet names AI-first practices and downstream benefits without identifying the practice or a specific, assessed change.

**Why**
A reader cannot picture what you introduced, what became faster or better, or how the result was assessed. That makes both the technical contribution and its impact difficult to judge.

**How to change it**
Replace “AI-first engineering practices” with [the specific practice or workflow you introduced], and replace “accelerating delivery and improving outcomes for downstream teams” with [a specific delivery or downstream change and a comparison showing its effect, if available].

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] The 100× growth in raw conversation is hard to interpret without a comparison baseline.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] This bullet would land more strongly if it opened the entry.
2. [Polish] “Nested-pool deadlocks” and “50-way fan-out” use specialized shorthand that may be unclear outside the team.
3. The bullet gives a 50-way test condition but does not say how often deadlocks or lost results occurred before or after the change.

**Why**
1. Removing deadlocks and lost tool results is a concrete reliability outcome. Placing it first would put that result before the other project details.
3. A reader cannot tell how reliably the change removed these failures under the stated condition. Without a before-and-after frequency, the operational effect is difficult to gauge.

**How to change it**
1. Move this bullet to the beginning of the Agent Runtime Suite bullets.
3. If tracked, add [how often deadlocks or lost tool results occurred before and after the change under this test condition].

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The integration describes the number of metrics but not what changed for the framework or its users.

**Why**
A reader can see the scope of the contribution, but not what the integration enabled or why it mattered. The metric count alone does not show its value.

**How to change it**
Add the most telling outcome, such as what evaluation capability the integration enabled and [a measure of its effect, compared with the previous state].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The evaluator finding and correlation are delayed until after the trial details, and this bullet would land more strongly first in the entry.
2. [Important] The 0.89 Kendall correlation does not identify the two variables being correlated.

**Why**
1. Readers encounter the scope of the trials before the main result. Leading with the finding and correlation would make the result easier to scan, while putting the bullet first would foreground the project’s clearest evidence.
2. Without knowing what was compared, a reader cannot tell what the result demonstrates about the evaluator. The trial count gives scale but does not resolve that ambiguity.

**How to change it**
1. Move this bullet to the beginning of the Research-Agent Evaluation Framework bullets, and move the trial scope after the finding and correlation.
2. Replace “tracks injected degradation” with [the degradation measure compared with the evaluator output], and retain the correlation and trial count.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Important] The screening description does not show how the branch uses the sensor signals to triage cases.
2. [Polish] “With a triage branch that” is a wordy bridge between the reduction and the screening action.

**Why**
1. The signal count shows scale, but not how the method produces the backlog reduction. One decision detail would help readers understand the technical contribution.

**How to change it**
1. Replace “screens 800+ sensor signals per case” with [the key triage decision made from the signals], if accurate.

## Already working

- s2:e0:b0: Connects a specific design contribution to a measured production improvement.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-253f5a9d.md.

