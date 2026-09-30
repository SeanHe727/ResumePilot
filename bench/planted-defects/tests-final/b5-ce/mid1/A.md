> Here is my resume: bench/planted-defects/tests-final/b5-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience and project entries for content and wording, plus the resume’s narrative and formatting. The education entries have no bullets to review. No job description was provided, so I did not assess job match.

The main changes to make:
- **Resolve repeated claims:** The internship repeats the assistant-only loss-masking work, and the research-agent project appears to repeat the internship’s backlog-reduction result. Clarify whether these were distinct achievements or keep each claim in one place.
- **Clarify evidence and methods:** Define the metric and evaluation set behind the 35% accuracy gain, explain what the Kendall correlation compares, and verify the claim that BF16 reduced GPU memory by 4×. The loss-masking bullet describes an intended effect rather than a measured result.
- **Make project impact more specific:** “AI-first engineering practices” and “accelerating delivery and improving outcomes” don’t say what changed or how. The metric-integration bullet also needs to show what capability or result it enabled.
- **Address the timeline:** The resume has an unexplained 10-month gap after the B.S. and before the first listed role; the move from software engineer to engineering intern may also prompt questions.

Formatting and ATS parsing are clean. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 77 · wording 81 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 7 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jun 2022

**Problem**
[Polish] The dates leave an unexplained 10-month gap between the B.S. and first listed role.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Polish] The 35% accuracy increase is unclear without its metric, evaluation set and comparison.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
1. [Important] The reviewer-disagreement rate does not define how disagreement was counted.
2. [Polish] The routing description is cumbersome to parse.

**Why**
1. A reader cannot tell whether the percentages are based on cases, signals or another unit. That makes the comparison harder to interpret and assess.

**How to change it**
1. Add the measured unit, such as [disagreements per reviewed case] or [number of cases assessed], if accurate.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The method details come before the call and latency reductions.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not by itself teach the model to reproduce tool outputs faithfully.
2. [Error] This bullet repeats the adapter fine-tuning method already stated with the accuracy result.

**Why**
1. Assistant-only loss masking determines which tokens contribute to training loss; tool outputs are not directly supervised unless they are included in the assistant targets. The method alone therefore does not establish the stated effect, and describing an intended effect does not show that it occurred.
2. Both bullets mention fine-tuning the adapter with assistant-only loss masking, so a reader may see this as the same achievement repeated. The extra bullet takes space without establishing a distinct contribution or result.

**How to change it**
1. If tool outputs were included in the assistant training targets, specify that; otherwise remove or soften the claim about reproducing them.
2. Keep the accuracy result in the first bullet and cut this repeated method; if there is distinct tool-output detail, fold it into the first bullet only if accurate.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Important] The description does not explain how the extracted features support triage.
2. [Important] The backlog reduction needs “by” to express its size clearly.
3. [Polish] The strongest achievement in this entry is not the opening bullet.

**Why**
1. A reader can see that machine learning was involved but cannot tell what the system did with the features to support inspection. That leaves the mechanism behind the backlog result unclear.
2. Without “by,” the phrase does not clearly state the amount of the reduction. A small grammatical change makes the result easier to read.

**How to change it**
1. If it materially distinguishes your work, name [the model or decision rule used to flag or rank cases].
2. Insert “by” before “68%.”

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The FP32-to-BF16 change alone does not establish a 4× reduction in total fine-tuning GPU memory.
2. [Polish] The long fine-tuning modifier slows the reader before the result.

**Why**
1. BF16 stores each value in half the bytes of FP32, but total fine-tuning memory also includes activations, gradients and optimizer state. The overall reduction varies with what is stored, so the dtype change alone cannot support an exact 4× claim.

**How to change it**
1. Use [the measured total-memory reduction], if available; otherwise replace the total-memory claim with the accurate statement that BF16 uses half the bytes per value compared with FP32.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test result is buried in a long trailing clause.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet shifts from past to present tense and describes ongoing maintenance instead of a specific action.
2. [Polish] The three-day release-cycle duration lacks a comparison and a definition.

**Why**
1. The role ended in July 2024, so “adds” conflicts with the past-tense framing. “Maintained” also emphasizes a continuing responsibility rather than showing what you specifically did.

**How to change it**
1. Change “adds” to “added” and replace “Maintained” with [the specific action you took], if accurate.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog and dispatch-delay result has no measure.
2. [Polish] The migration result is not the opening achievement in this entry.

**Why**
1. The operational benefit is clear, but the reader cannot judge its scale. A before-and-after measure would make the result more concrete.

**How to change it**
1. If tracked, add [backlog volume or dispatch delay before and after].

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] “AI-first engineering practices” does not identify the practice you introduced.
2. [Important] The claimed delivery and downstream benefits are vague and unsupported by a specific result.

**Why**
1. A reader cannot tell what you built or changed as the project owner. Without a specific practice, the technical contribution is difficult to understand.
2. Broad benefits are hard to evaluate or distinguish from a general claim. A reader cannot tell what changed or how the work helped downstream teams, which weakens the evidence of impact.

**How to change it**
1. Replace the phrase with [the specific practice you introduced], if accurate.
2. Replace the broad benefit with [a specific delivery or downstream outcome] and, if available, [the result measured against a baseline or prior state].

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] “Budgeted context layers” is specialist shorthand that may not be clear outside the team.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Polish] The concurrency and cache-write result is not the opening achievement in this entry.
2. [Polish] “50-way fan-out” is specialist shorthand that may slow readers unfamiliar with the term.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Polish] The metrics contribution names broad categories but no representative metric or resulting capability.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The 0.89 Kendall correlation does not identify the two quantities being compared.
2. [Polish] The degradation-trial result is not the opening achievement in this entry.

**Why**
1. Without the compared rankings or measures, a reader cannot interpret what the coefficient demonstrates about the evaluator. Naming both quantities would make the result meaningful.

**How to change it**
1. Name the two compared quantities after the figure, such as injected degradation severity and evaluator scores, if accurate.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
The line does not explain what the screening determines, and “triage branch” is jargon.

**Why**
A reader cannot tell what the system does with the signals or how the features guide a triage decision. The technical contribution is therefore difficult to picture.

**How to change it**
If this claim is retained, explain in plain language what the screening determines and replace “triage branch” with [a clear description of the mechanism], if accurate.

> pending-case backlog by two-thirds

**Problem**
[Error] This sensor-triage claim repeats the backlog achievement from the Mobility Systems role and is unrelated to this project.

**Why**
The résumé gives the same backlog reduction and signal count in both entries, so a reader may be unsure where the work belongs or whether it is one achievement credited twice. It also breaks the connection between this project’s evaluation metrics and degradation trials.

**How to change it**
Remove this claim from this project entry; if it describes a distinct project, clarify the distinct outcome and its relationship to the other result.

## Already working

- s2:e0:b3: Shows what the harness evaluated and how extensively it was used.

## Set aside (4)

4 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9d4af54d.md.

