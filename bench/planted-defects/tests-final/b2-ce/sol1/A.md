> Here is my resume: bench/planted-defects/tests-final/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all four entries with bullets for content and wording, plus the full résumé’s career narrative and file format. The two education entries have no bullets to review. No job-description comparison ran because you haven’t supplied a posting.

The specialists’ priorities are:

1. **Resolve the duplicated achievement.** The 800+ sensor-signal triage result appears under both your internship and the Research-Agent Evaluation Framework project. Keep it where the work occurred, or clarify the connection.
2. **Check the fine-tuning claim.** One internship bullet says assistant-only loss masking helped the model reproduce tool outputs. The content reviewer flagged that the stated method does not, by itself, support that outcome. Clarify what was trained and what improved.
3. **Cut or substantiate broad claims.** The Agent Runtime Suite’s “AI-first engineering practices” bullet lacks a specific action or measured result; its two runtime-engineering bullets tell the project story more concretely.

The format check found the PDF parses cleanly, but recommends removing the date of birth and nationality. The full review is in `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 80 · wording 83 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 7 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999 | Nationality: Canadian

**Problem**
[Error] The file includes personal details that should be left off the résumé.

**Why**
A reader is not meant to weigh date of birth or nationality when assessing your qualifications. Including them draws attention away from your work and education.

**How to change it**
Remove “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

> Sep 2018 - Jun 2022

**Problem**
[Polish] The timeline has no listed study or work between the bachelor’s degree ending in June 2022 and the job starting in May 2023.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement has no stated comparison.

**Why**
A reader cannot tell what the improvement was measured against or whether the evaluation cases were comparable. That makes a prominent result harder to assess.

**How to change it**
Add “versus [baseline on the same evaluation cases]” after “35%.” If relevant, specify whether the change is relative or in percentage points.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
1. [Polish] The routing result is buried after the description of the rules.
2. [Polish] The grouping of agents and reviewer makes it unclear who was limited to in-scope signals.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The GRPO method detail delays both measured gains.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The evaluation-harness bullet uses expendable framing before stating its purpose.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not itself train the model to reproduce tool outputs more faithfully.
2. [Important] This bullet repeats the adapter fine-tuning and masking already stated earlier in the entry.

**Why**
1. The mask excludes tool-output tokens from the training loss; it trains on assistant turns instead. Faithful reproduction would require that behavior in the assistant targets, so attributing it to masking makes the training claim technically misleading.
2. Repeating the same action spends a bullet without adding a distinct achievement. It also gives the inaccurate explanation of masking more prominence.

**How to change it**
1. Replace the purpose clause with “to train assistant responses conditioned on tool results.” If the assistant targets contained faithful reproductions, describe that separately; otherwise, remove the reproduction claim.
2. Keep the fine-tuning and masking in the earlier bullet. Move any distinct, supportable detail about assistant responses there, then cut this bullet.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Polish] The backlog reduction appears too late in the diagnostics bullet.
2. [Polish] The strongest internship bullet is not first.
3. [Polish] The feature description does not show how sensor signals became useful triage inputs.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Polish] The repeated “by” makes the memory reduction awkward to read.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test wording hides that you added the tests.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] “Maintained” and “adds” incorrectly mix past and present tense for an ended role.
2. [Important] The three-day release cycle lacks its previous duration.
3. [Polish] The release-cycle result is delayed by routine-sounding CI framing.
4. [Polish] The regression checks do not identify what was checked.

**Why**
1. The mismatch makes the timeline of the CI work look unedited. Consistent past tense keeps attention on the release result.
2. A reader can see the new cadence but not how much faster releases became. The earlier duration would make the size of the improvement checkable.

**How to change it**
1. Replace “adds” with “added.”
2. If available, replace “to 3 days” with “from [previous release-cycle duration] to 3 days.”

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The AI-first-practices claim does not identify either the practice or the action you took.
2. [Important] The delivery-speed claim has no comparison or checkable anchor.
3. [Important] The claimed improvement for downstream teams does not name an outcome.

**Why**
1. A reader cannot tell what changed on the platform or what you personally did to bring it about. That makes it difficult to assess your ownership of the claimed adoption.
2. A reader cannot tell whether delivery became faster or what evidence supports the change. The broad result language therefore weakens the impact claimed for the practice.
3. A reader cannot see what those teams gained or distinguish this benefit from the delivery claim. A specific result would make the effect assessable.

**How to change it**
1. Replace “Drove adoption of AI-first engineering practices” with [the action you took] and [one specific practice adopted], if you can name them.
2. Add [delivery measure before versus after the practice]. If delivery was not tracked, replace “accelerating delivery” with [a checkable adoption fact].
3. Replace “improving outcomes” with [the specific result downstream teams experienced], or cut the phrase if the delivery result already captures the benefit.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] The strongest runtime-suite bullet is not first.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Polish] The concurrency bullet delays its result until after two implementation details.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
1. [Polish] The metrics integration does not say what the framework could do afterward.
2. [Polish] The integration claim leaves the technical work behind it unspecified.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify the two rankings compared.
2. [Polish] The trial wording makes the trials appear to remove the report content themselves.

**Why**
1. A reader can see that 0.89 is a validation result but cannot tell exactly what it validates. Naming both rankings makes the claim interpretable rather than merely impressive-looking.

**How to change it**
1. Add “[evaluator ranking] versus [reference ranking]” beside “Kendall correlation of 0.89,” using the quantities actually ranked.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Error] The diagnostic-backlog achievement is incorrectly attributed to the research-agent evaluation project.

**Why**
Screening sensor signals and reducing a pending-case backlog do not fit the citation and faithfulness evaluation work described here. The same specific triage achievement appears under the industrial inspection internship, so repeating it here raises doubt about where the work occurred.

**How to change it**
Remove this bullet from the research-agent evaluation entry and keep the diagnostic result under the internship. The remaining two bullets then tell one evaluation story.

## Already working

- s2:e1:b3: Shows the migration scope, the reliability mechanisms and the dispatch problem it resolved.

## Set aside (7)

7 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9f800f0a.md.

