# Full review: resume.pdf

**85/100** — format 100 · content 77 · wording 81 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 7 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jun 2022

**Problem**
[Polish] The dates leave an unexplained 10-month gap between the B.S. and first listed role. *(about 3 words)*

**Why**
A reader may wonder what you were doing between June 2022 and May 2023. Without context, the gap may invite questions that the résumé does not answer.

**How to change it**
If relevant, add [what you were doing] with its dates.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Polish] The 35% accuracy increase is unclear without its metric, evaluation set and comparison. *(about 6 words)*

**Why**
A reader cannot tell what was measured or whether 35% means a relative increase or a percentage-point change. Without the metric and comparison, the size and meaning of the result are harder to judge.

**How to change it**
Add [accuracy metric], [baseline] and [result], and identify [evaluation set]; specify whether the change is relative or in percentage points.

*raised by content*

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
1. [Important] The reviewer-disagreement rate does not define how disagreement was counted. *(about 4 words)*
2. [Polish] The routing description is cumbersome to parse. *(no words)*

**Why**
1. A reader cannot tell whether the percentages are based on cases, signals or another unit. That makes the comparison harder to interpret and assess.
2. The phrase makes the reader work through the count and the reviewer’s role before the routing rule is clear. That can slow a quick scan of the technical contribution.

**How to change it**
1. Add the measured unit, such as [disagreements per reviewed case] or [number of cases assessed], if accurate.
2. Replace “each of 3” with “three” for a cleaner read.

*raised by content, wording*

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The method details come before the call and latency reductions. *(no words)*

**Why**
A scanning reader may miss the results while working through the training setup. The measured improvements are the clearest evidence of the contribution and should be easier to find.

**How to change it**
Move the GRPO, rollout and reward details after the reductions in tool calls and latency.

*raised by wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not by itself teach the model to reproduce tool outputs faithfully. *(about 4 words)*
2. [Error] This bullet repeats the adapter fine-tuning method already stated with the accuracy result. *(saves about 18 words)*

**Why**
1. Assistant-only loss masking determines which tokens contribute to training loss; tool outputs are not directly supervised unless they are included in the assistant targets. The method alone therefore does not establish the stated effect, and describing an intended effect does not show that it occurred.
2. Both bullets mention fine-tuning the adapter with assistant-only loss masking, so a reader may see this as the same achievement repeated. The extra bullet takes space without establishing a distinct contribution or result.

**How to change it**
1. If tool outputs were included in the assistant training targets, specify that; otherwise remove or soften the claim about reproducing them.
2. Keep the accuracy result in the first bullet and cut this repeated method; if there is distinct tool-output detail, fold it into the first bullet only if accurate.

*raised by content, narrative, wording*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Important] The description does not explain how the extracted features support triage. *(about 5 words)*
2. [Important] The backlog reduction needs “by” to express its size clearly. *(1 word)*
3. [Polish] The strongest achievement in this entry is not the opening bullet. *(no words)*

**Why**
1. A reader can see that machine learning was involved but cannot tell what the system did with the features to support inspection. That leaves the mechanism behind the backlog result unclear.
2. Without “by,” the phrase does not clearly state the amount of the reduction. A small grammatical change makes the result easier to read.
3. The triage branch and its backlog result provide a concrete, quantified achievement. Leaving them until the end makes that evidence less likely to be noticed early in a scan.

**How to change it**
1. If it materially distinguishes your work, name [the model or decision rule used to flag or rank cases].
2. Insert “by” before “68%.”
3. Move this bullet to the top of the role’s bullets.

*raised by content, wording, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The FP32-to-BF16 change alone does not establish a 4× reduction in total fine-tuning GPU memory. *(about 5 words)*
2. [Polish] The long fine-tuning modifier slows the reader before the result. *(saves about 5 words)*

**Why**
1. BF16 stores each value in half the bytes of FP32, but total fine-tuning memory also includes activations, gradients and optimizer state. The overall reduction varies with what is stored, so the dtype change alone cannot support an exact 4× claim.
2. The result is the central point of the bullet, but the reader must pass through a lengthy description of what the models are for first. Trimming that phrase would make the result quicker to reach.

**How to change it**
1. Use [the measured total-memory reduction], if available; otherwise replace the total-memory claim with the accurate statement that BF16 uses half the bytes per value compared with FP32.
2. Cut the modifier if it is not needed to distinguish the work.

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test result is buried in a long trailing clause. *(no words)*

**Why**
The latency reduction and the build-failing test are separate useful results. Tucking the test at the end makes it easier for a reader to miss.

**How to change it**
Move the load-test detail closer to the latency result so the two outcomes are easier to scan.

*raised by wording*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet shifts from past to present tense and describes ongoing maintenance instead of a specific action. *(about 1 word)*
2. [Polish] The three-day release-cycle duration lacks a comparison and a definition. *(about 5 words)*

**Why**
1. The role ended in July 2024, so “adds” conflicts with the past-tense framing. “Maintained” also emphasizes a continuing responsibility rather than showing what you specifically did.
2. A reader cannot tell how much faster releases became or what interval the three days measures. Without that context, the size of the improvement is difficult to judge.

**How to change it**
1. Change “adds” to “added” and replace “Maintained” with [the specific action you took], if accurate.
2. If available, add [the previous cycle length] and clarify what interval the release cycle measures.

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog and dispatch-delay result has no measure. *(about 5 words)*
2. [Polish] The migration result is not the opening achievement in this entry. *(no words)*

**Why**
1. The operational benefit is clear, but the reader cannot judge its scale. A before-and-after measure would make the result more concrete.
2. Migrating 30 services and removing the nightly backlog gives a concrete account of the work and its operational benefit. Putting it first makes that evidence more visible to a scanning reader.

**How to change it**
1. If tracked, add [backlog volume or dispatch delay before and after].
2. Move this bullet to the top of the role’s bullets.

*raised by content, narrative*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] “AI-first engineering practices” does not identify the practice you introduced. *(about 2 words)*
2. [Important] The claimed delivery and downstream benefits are vague and unsupported by a specific result. *(about 6 words)*

**Why**
1. A reader cannot tell what you built or changed as the project owner. Without a specific practice, the technical contribution is difficult to understand.
2. Broad benefits are hard to evaluate or distinguish from a general claim. A reader cannot tell what changed or how the work helped downstream teams, which weakens the evidence of impact.

**How to change it**
1. Replace the phrase with [the specific practice you introduced], if accurate.
2. Replace the broad benefit with [a specific delivery or downstream outcome] and, if available, [the result measured against a baseline or prior state].

*raised by content, wording*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] “Budgeted context layers” is specialist shorthand that may not be clear outside the team. *(about 2 words)*

**Why**
A reader unfamiliar with the term may not understand how the context was managed. That can obscure the method behind the stress-test result.

**How to change it**
Replace the shorthand with a plain-language description of the context layers, if accurate.

*raised by wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Polish] The concurrency and cache-write result is not the opening achievement in this entry. *(no words)*
2. [Polish] “50-way fan-out” is specialist shorthand that may slow readers unfamiliar with the term. *(about 2 words)*

**Why**
1. This bullet names the specific changes and the failures they removed. Placing it first makes the concrete engineering contribution easier to notice.
2. A reader may not know what is being fanned out or what the number describes. That can make the conditions under which the deadlocks and lost results were fixed less clear.

**How to change it**
1. Move this bullet to the top of the project’s bullets.
2. Replace the shorthand with a plain-language description of the 50 concurrent operations, if accurate.

*raised by narrative, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Polish] The metrics contribution names broad categories but no representative metric or resulting capability. *(about 6 words)*

**Why**
A reader can see that eight metrics were added but cannot tell which evaluation techniques they were or what the addition enabled. The count shows the contribution’s size, not its effect or technical character.

**How to change it**
Name one representative metric, if accurate, and add [what the integration enabled or improved, and how you know].

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The 0.89 Kendall correlation does not identify the two quantities being compared. *(about 5 words)*
2. [Polish] The degradation-trial result is not the opening achievement in this entry. *(no words)*

**Why**
1. Without the compared rankings or measures, a reader cannot interpret what the coefficient demonstrates about the evaluator. Naming both quantities would make the result meaningful.
2. The correlation and trial count provide concrete evidence of what the evaluator tracked. Leading with that result would make the project’s strongest evidence easier to see.

**How to change it**
1. Name the two compared quantities after the figure, such as injected degradation severity and evaluator scores, if accurate.
2. Move this bullet above the metrics-integration bullet.

*raised by content, narrative*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
The line does not explain what the screening determines, and “triage branch” is jargon. *(about 5 words)*

**Why**
A reader cannot tell what the system does with the signals or how the features guide a triage decision. The technical contribution is therefore difficult to picture.

**How to change it**
If this claim is retained, explain in plain language what the screening determines and replace “triage branch” with [a clear description of the mechanism], if accurate.

*raised by content, wording*

> pending-case backlog by two-thirds

**Problem**
[Error] This sensor-triage claim repeats the backlog achievement from the Mobility Systems role and is unrelated to this project. *(saves about 20 words)*

**Why**
The résumé gives the same backlog reduction and signal count in both entries, so a reader may be unsure where the work belongs or whether it is one achievement credited twice. It also breaks the connection between this project’s evaluation metrics and degradation trials.

**How to change it**
Remove this claim from this project entry; if it describes a distinct project, clarify the distinct outcome and its relationship to the other result.

*raised by narrative*

## Already working

- s2:e0:b3: Shows what the harness evaluated and how extensively it was used.

## Set aside (4)

- s3:e1:b2: “triage branch” is jargon that may not tell readers what the mechanism does; clarify it in plain language if possible.
- s3:e1:b2: “screens 800+ sensor signals per case using ML-extracted features” does not say what the screening determines or does with the signals.
- s2:e0:b4: The phrase "so the model would learn to reproduce the tool outputs more faithfully" describes an intended effect, not an observed result.
- s2:e0:b4: “Fine-tuned the adapter with assistant-only loss masking” repeats the method in the first bullet, so this line spends space without adding a distinct contribution or result.
