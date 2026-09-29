# Full review: resume.pdf

**87/100** — format 100 · content 80 · wording 83 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 7 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999 | Nationality: Canadian

**Problem**
[Error] The file includes personal details that should be left off the résumé. *(saves about 9 words)*

**Why**
A reader is not meant to weigh date of birth or nationality when assessing your qualifications. Including them draws attention away from your work and education.

**How to change it**
Remove “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

*raised by file*

> Sep 2018 - Jun 2022

**Problem**
[Polish] The timeline has no listed study or work between the bachelor’s degree ending in June 2022 and the job starting in May 2023. *(about 6 words)*

**Why**
A reader comparing the dated entries may ask what happened during that interval. Relevant activity, if there was any, could answer the question without requiring an elaborate explanation.

**How to change it**
If there was relevant activity in the interval, add [brief activity and dates] in the appropriate section.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement has no stated comparison. *(about 7 words)*

**Why**
A reader cannot tell what the improvement was measured against or whether the evaluation cases were comparable. That makes a prominent result harder to assess.

**How to change it**
Add “versus [baseline on the same evaluation cases]” after “35%.” If relevant, specify whether the change is relative or in percentage points.

*raised by content*

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
1. [Polish] The routing result is buried after the description of the rules. *(no words)*
2. [Polish] The grouping of agents and reviewer makes it unclear who was limited to in-scope signals. *(about 1 word)*

**Why**
1. The drop from 14% to 6% is the reason to keep reading, but a recruiter has to pass through the agent configuration to reach it. Leading with the result makes the contribution easier to scan.
2. A reader may pause over whether the limit applied to all four participants or only the specialist agents. That uncertainty interrupts an otherwise specific technical claim.

**How to change it**
1. Move the disagreement reduction immediately after “Designed a routing layer,” then give the routing rules.
2. If the limit applied to all four, replace the grouping with “three specialist agents and an independent reviewer.” Otherwise, separate the reviewer’s rule from the agents’ rule.

*raised by wording*

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The GRPO method detail delays both measured gains. *(no words)*

**Why**
The tool-call and latency reductions establish the value of the work before the training detail explains it. In the current order, a scanning reader may miss those results.

**How to change it**
Move the reductions in tool calls and latency ahead of the GRPO and reward description.

*raised by wording*

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The evaluation-harness bullet uses expendable framing before stating its purpose. *(saves about 3 words)*

**Why**
The comparison of 14 checkpoints and detection of regressions already show why the harness mattered. “The team used to” slows the reader before those specifics.

**How to change it**
Replace “Wrote the evaluation harness the team used to compare” with “Wrote an evaluation harness to compare.”

*raised by wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not itself train the model to reproduce tool outputs more faithfully. *(saves about 3 words)*
2. [Important] This bullet repeats the adapter fine-tuning and masking already stated earlier in the entry. *(saves about 20 words)*

**Why**
1. The mask excludes tool-output tokens from the training loss; it trains on assistant turns instead. Faithful reproduction would require that behavior in the assistant targets, so attributing it to masking makes the training claim technically misleading.
2. Repeating the same action spends a bullet without adding a distinct achievement. It also gives the inaccurate explanation of masking more prominence.

**How to change it**
1. Replace the purpose clause with “to train assistant responses conditioned on tool results.” If the assistant targets contained faithful reproductions, describe that separately; otherwise, remove the reproduction claim.
2. Keep the fine-tuning and masking in the earlier bullet. Move any distinct, supportable detail about assistant responses there, then cut this bullet.

*raised by content, narrative, wording*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Polish] The backlog reduction appears too late in the diagnostics bullet. *(no words)*
2. [Polish] The strongest internship bullet is not first. *(no words)*
3. [Polish] The feature description does not show how sensor signals became useful triage inputs. *(about 2 words)*

**Why**
1. The 68% reduction shows the impact of building the branch, but it follows a long account of the system and its inputs. Moving it forward lets the reader grasp the result before the implementation detail.
2. The diagnostics branch combines a concrete system, its scale and an eight-week outcome. Opening with it would establish the internship’s impact before the narrower model-training bullets.
3. “ML-extracted” identifies a broad source of features but not the relevant technical contribution. One defining technique would help a reader understand what you built without requiring a lengthy methods account.

**How to change it**
1. Move the backlog reduction immediately after “Built a diagnostics triage branch,” then explain what the branch screens.
2. Move this bullet to the first position under the internship.
3. If accurate, replace “ML-extracted features” with [the most relevant feature-extraction method] in similarly few words.

*raised by wording, narrative, content*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Polish] The repeated “by” makes the memory reduction awkward to read. *(no words)*

**Why**
The 4x result and precision change are clear, but the repeated preposition interrupts a compact achievement. A small edit preserves both details.

**How to change it**
Replace “by 4x by switching” with “4x through a switch.”

*raised by wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test wording hides that you added the tests. *(about 1 word)*

**Why**
The current attachment can make the tests read like background conditions rather than work you performed. Naming the action gives you credit for the build safeguard as well as the latency reduction.

**How to change it**
Replace “with load tests that fail the build” with “and added load tests that fail the build.”

*raised by wording*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] “Maintained” and “adds” incorrectly mix past and present tense for an ended role. *(no words)*
2. [Important] The three-day release cycle lacks its previous duration. *(about 4 words)*
3. [Polish] The release-cycle result is delayed by routine-sounding CI framing. *(no words)*
4. [Polish] The regression checks do not identify what was checked. *(about 2 words)*

**Why**
1. The mismatch makes the timeline of the CI work look unedited. Consistent past tense keeps attention on the release result.
2. A reader can see the new cadence but not how much faster releases became. The earlier duration would make the size of the improvement checkable.
3. Maintaining a pipeline gives less immediate evidence of impact than the checks and three-day cycle. Leading with the change helps a reader see what your contribution achieved.
4. For perception-model releases, the kind of regression is the detail that establishes relevant engineering skill. Without it, the checks remain too generic to distinguish your contribution.

**How to change it**
1. Replace “adds” with “added.”
2. If available, replace “to 3 days” with “from [previous release-cycle duration] to 3 days.”
3. Move the automated checks and their release-cycle result ahead of “Maintained the CI pipeline.”
4. Replace “automated regression checks” with “[specific perception-model regression checked] checks.”

*raised by wording, content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The AI-first-practices claim does not identify either the practice or the action you took. *(about 3 words)*
2. [Important] The delivery-speed claim has no comparison or checkable anchor. *(about 6 words)*
3. [Important] The claimed improvement for downstream teams does not name an outcome. *(about 2 words)*

**Why**
1. A reader cannot tell what changed on the platform or what you personally did to bring it about. That makes it difficult to assess your ownership of the claimed adoption.
2. A reader cannot tell whether delivery became faster or what evidence supports the change. The broad result language therefore weakens the impact claimed for the practice.
3. A reader cannot see what those teams gained or distinguish this benefit from the delivery claim. A specific result would make the effect assessable.

**How to change it**
1. Replace “Drove adoption of AI-first engineering practices” with [the action you took] and [one specific practice adopted], if you can name them.
2. Add [delivery measure before versus after the practice]. If delivery was not tracked, replace “accelerating delivery” with [a checkable adoption fact].
3. Replace “improving outcomes” with [the specific result downstream teams experienced], or cut the phrase if the delivery result already captures the benefit.

*raised by content, wording*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] The strongest runtime-suite bullet is not first. *(no words)*

**Why**
The context-limit bullet gives a measured stress-test result and names the approach behind it. Opening with that evidence would establish the project’s substance before the broader adoption claim.

**How to change it**
Move this bullet to the first position under the project.

*raised by narrative*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Polish] The concurrency bullet delays its result until after two implementation details. *(no words)*

**Why**
Eliminating deadlocks and lost results is the consequence a reader needs first. Starting with the pool and cache changes makes the line harder to scan for impact.

**How to change it**
Move the result about deadlocks and lost tool results ahead of the pool and cache-write changes.

*raised by wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
1. [Polish] The metrics integration does not say what the framework could do afterward. *(about 6 words)*
2. [Polish] The integration claim leaves the technical work behind it unspecified. *(about 3 words)*

**Why**
1. Eight metrics show the scope of the work, but not why the integration mattered to users of the evaluation module. A short capability or outcome would connect the implementation to its value.
2. A reader cannot tell whether you implemented an important connection or configured existing metrics. One concrete decision would make your contribution easier to distinguish.

**How to change it**
1. Add [what the framework could evaluate or distinguish afterward] after “evaluation module.”
2. If accurate and space permits, replace “Integrated” with [the most telling implementation or integration decision].

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify the two rankings compared. *(about 5 words)*
2. [Polish] The trial wording makes the trials appear to remove the report content themselves. *(about 1 word)*

**Why**
1. A reader can see that 0.89 is a validation result but cannot tell exactly what it validates. Naming both rankings makes the claim interpretable rather than merely impressive-looking.
2. The intended relationship is between the test procedure and the removals. Clarifying it helps a reader understand how the evaluator was challenged.

**How to change it**
1. Add “[evaluator ranking] versus [reference ranking]” beside “Kendall correlation of 0.89,” using the quantities actually ranked.
2. Replace “trials that removed” with “trials involving removal of.”

*raised by content, wording*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Error] The diagnostic-backlog achievement is incorrectly attributed to the research-agent evaluation project. *(saves about 26 words)*

**Why**
Screening sensor signals and reducing a pending-case backlog do not fit the citation and faithfulness evaluation work described here. The same specific triage achievement appears under the industrial inspection internship, so repeating it here raises doubt about where the work occurred.

**How to change it**
Remove this bullet from the research-agent evaluation entry and keep the diagnostic result under the internship. The remaining two bullets then tell one evaluation story.

*raised by content, narrative*

## Already working

- s2:e1:b3: Shows the migration scope, the reliability mechanisms and the dispatch problem it resolved.

## Set aside (7)

- s2:e0:b3: "Wrote the evaluation harness" names the tool but not how it identified regressions.
- s2:e0:b4: "so the model would learn to reproduce the tool outputs more faithfully" describes a goal rather than what happened.
- s3:e0:b2: "under 50-way fan-out" gives the test load but not the evidence behind "removing nested-pool deadlocks and lost tool results."
- s3:e1:b2: "pending-case backlog" does not identify what kind of cases were awaiting triage.
- s3:e1:b2: "using ML-extracted features" does not show how the features informed screening.
- s3:e1:b2: “triage branch” is team-specific jargon that does not tell an outside reader what was built; name the mechanism in plain language if possible.
- s2:e0:b4: “so the model would learn to reproduce the tool outputs more faithfully” is a wordy purpose clause; shorten it to “to improve reproduction of tool outputs.”
