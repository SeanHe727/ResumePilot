> Here is my resume: bench/planted-defects/tests-final/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all four entries with bullets, the resume’s overall narrative, and its formatting; the two education entries have no bullets to assess. No job description was provided, so job-match review wasn’t run.

The main changes to consider:
- **Resolve repeated or conflicting claims.** The triage/backlog result appears in both the internship and project, with “68%” in one place and “two-thirds” in the other. The internship also has two bullets describing assistant-only loss masking.
- **Add context or verify figures.** Reviewers flagged the 35% accuracy gain without a baseline or evaluation set, the 4× GPU-memory reduction, and the exact 180 ms p95 claim. They also noted missing comparison context for the three-day release cycle.
- **Make project impact more specific.** The “AI-first engineering practices” bullet doesn’t say what changed or what result followed; the evaluation-framework bullet gives the integration work but no outcome beyond that.
- **Consider broader edits.** The narrative review suggests placing Experience before Education and addressing the 10-month gap between the B.S. and first listed job. The format review also flagged date of birth and nationality.

The file parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 77 · wording 83 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 20 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that are conventionally left off. *(saves about 8 words)*

**Why**
A reader is not meant to weigh your date of birth or nationality when assessing your qualifications. Including them takes attention away from the information relevant to the role.

**How to change it**
Remove “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

> cutting the pending-case backlog 68%

**Problem**
[Error] The two entries report conflicting reductions for the same triage achievement. *(no words if only aligning the figures; saves about 12 words if consolidated)*

**Why**
The Mobility Systems Company bullet reports a 68% reduction, while the research-agent project reports two-thirds for the same triage branch and signals per case. A reader may question which figure is accurate and whether the achievement is being credited twice.

**How to change it**
Verify [the figure] and use the same result in both places, or consolidate the repeated achievement into one entry.

> Machine Learning Engineering Intern

**Problem**
[Important] The experience section appears after education even though the engineering roles establish your career direction more directly. *(no words)*

**Why**
A recruiter scanning the résumé may encounter your degrees before your most direct evidence of engineering work. Moving experience forward would make that evidence easier to find while keeping the current M.S. visible.

**How to change it**
Move EXPERIENCE above EDUCATION; this only changes section order.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy improvement lacks a comparison baseline and evaluation set. *(about 5 words added)*

**Why**
Without those anchors, a reader cannot tell whether 35% is a relative increase or a percentage-point gain, or how the change was measured. That makes it harder to judge the result’s significance.

**How to change it**
Clarify whether 35% is a relative or percentage-point change and add [baseline accuracy] and [evaluation set].

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Important] The pronoun “their” makes it unclear whose signal scope the routing layer enforces. *(about 1 word added)*

**Why**
The phrase refers to both specialist agents and an independent reviewer, leaving readers to infer whether the signals belong to the agents, the reviewer, or both. That ambiguity obscures how the routing layer works.

**How to change it**
Replace “their in-scope signals” with “the signals in that role’s scope” to make the restriction apply clearly to each agent and the reviewer.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Important] The reductions in tool calls and latency come after the rollout and reward details. *(no words)*

**Why**
A scanning reader may reach the technical setup before noticing the measured outcomes. That buries the clearest evidence of the work’s impact.

**How to change it**
Move the outcome clause to the beginning of the bullet, then state the GRPO training, grouped rollouts, and reward details.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Error] The two bullets repeat the same adapter fine-tuning work. *(saves about 19 words if the second bullet is removed)*

**Why**
Both bullets mention assistant-only loss masking, so readers may see them as duplicate descriptions rather than separate contributions. The second bullet’s stated purpose—reproducing tool outputs more faithfully—does not add a distinct result, which can make the experience section feel repetitive.

**How to change it**
Keep the result-bearing bullet, s2:e0:b0, and cut s2:e0:b4 unless it describes distinct work; if it does, clarify [how that work differed].

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The claim that switching from FP32 to BF16 cut GPU memory by 4x overstates what the precision change alone typically achieves. *(no words)*
2. [Polish] The repeated “by” makes the relationship between the reduction and the method clunky. *(no words)*

**Why**
1. BF16 stores each converted value in roughly half the space of FP32, so the direct reduction for those tensors is about 2x. Other fine-tuning memory, such as optimizer state, may remain in FP32, making the total reduction smaller rather than 4x.
2. The line uses “by” for both the size of the reduction and the method that produced it. Readers have to work through the repeated construction before reaching the precision change.

**How to change it**
1. Say the change reduced memory by about 2x if that is what was measured; retain 4x only if [the additional methods or measurement supporting the 4x reduction] are established.
2. Replace “by switching” with “after switching.”

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Important] The stated load-test threshold does not establish the exact p95 value of 180 ms. *(about 3 words added if including test conditions)*

**Why**
A test that fails only when p95 exceeds 200 ms establishes, on a passing run, that the measured p95 is at most 200 ms. It does not by itself show that the result was 180 ms, so readers may question the precision of the reported improvement.

**How to change it**
If the load test recorded 180 ms, state that measured result and [test conditions]; otherwise report only the threshold the passing test establishes.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] “Maintained” is past tense but “adds” is present tense in a role that has ended. *(no words)*
2. [Important] The line attributes the three-day release cycle to the regression checks without showing that they caused it. *(about 4 words added if including before-and-after times)*
3. [Important] The three-day cycle length lacks a comparison point. *(about 3 words added)*
4. [Important] The checks’ three-day release-cycle result gives the new duration but not the previous duration. *(about 3 words added)*
5. [Important] “Automated regression checks” does not say what the checks cover. *(about 3 words added)*
6. [Important] The line does not specify what the automated regression checks cover. *(about 3 words added)*

**Why**
1. The shift from completed work to present tense can look like an editing oversight and distract from the CI contribution.
2. Automated checks can reduce manual validation, but they do not necessarily determine the duration of the full release cycle. Without supporting records, readers may doubt that the checks produced the stated outcome.
3. Without the previous duration, readers cannot tell how large the change was. A verified before-and-after comparison would make the result more persuasive.
4. Without the earlier cycle length, readers cannot tell how large the improvement was. A before-and-after comparison would anchor the result.
5. Readers can see that checks were added but cannot tell what failure modes or model behavior they guarded against. Naming a relevant regression would make the engineering contribution clearer.
6. A reader can see that checks were added but not what model behavior or failure mode they guard against. Naming the most relevant check would make the contribution easier to understand.

**How to change it**
1. Change “adds” to “added” to keep the verbs in past tense.
2. If release-cycle records support the attribution, state [measured before-and-after cycle times]; otherwise describe the checks without claiming they shortened cycles.
3. Add [previous release-cycle duration] before the three-day result, if you can verify it.
4. Add [previous release-cycle duration] before the three-day result, if you can verify it.
5. Replace the general phrase with [the key regression the checks catch], if you can name one.
6. Replace the general phrase with [the key regression the checks catch], if you can name one.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The line credits the event-queue migration with eliminating nightly backlogs without establishing that it caused their removal. *(saves about 8 words if the outcome claim is removed)*
2. [Important] The backlog and dispatch outcome has no before-and-after measure. *(about 5 words added)*

**Why**
1. Queues, retries, and dead-letter handling can help manage scheduled bursts and transient failures, but do not guarantee that backlogs disappear if work arrives faster than it can be processed or other failures persist. The line provides no evidence that the migration eliminated the backlogs.
2. Readers can understand what improved but cannot judge the size of the operational benefit. The count of 30 services shows scale, not how much the backlog or dispatch delay changed.

**How to change it**
1. If backlog records confirm elimination after the migration, state [the measured outcome]; otherwise describe the migration and its handling of retries and dead letters without claiming the backlogs were removed.
2. Add [backlog volume or dispatch-delay change before and after], using whichever measure best captures the improvement.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Polish] “AI-first engineering practices” does not specify what you introduced or changed. *(about 4 words added)*
2. [Polish] “Accelerating delivery and improving outcomes” gives no specific result or evidence. *(about 8 words added for a specific result; more if including a baseline)*

**Why**
1. A reader cannot picture your contribution or tell what skill you used to drive adoption. The broad phrase makes it difficult to assess what the platform teams actually adopted.
2. Readers cannot assess those benefits without knowing what changed or what the comparison was. The general claim may therefore carry little weight as evidence of impact.

**How to change it**
1. Replace the broad phrase with [the specific practice or workflow change you introduced].
2. Replace the general benefits with [a specific downstream change] and, if available, [a delivery measure compared with its baseline].

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Important] The context limit appears after the stress-test conditions instead of leading with the result. *(no words)*

**Why**
Readers encounter the test setup before the main result, so a scanning reader may miss the under-10K context limit. Leading with that limit would make the achievement easier to spot.

**How to change it**
Move “under 10K tokens” to the beginning of the bullet, then give the 100-turn test and 100x conversation growth.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The changes do not by themselves establish that all nested-pool deadlocks and lost tool results were eliminated. *(about 5 words added if specifying tested conditions; no words if narrowing the claim)*
2. [Important] The 50-way fan-out load does not show how consistently the failures were eliminated. *(about 5 words added)*
3. [Important] The failure outcome appears after the implementation details. *(no words)*

**Why**
1. Separating pools can prevent deadlocks caused by nested work starving its own pool, but other cyclic waits can still deadlock. Gating cache writes until stream completion can prevent caching partial streams, but does not by itself ensure tool results are durably stored and correctly correlated.
2. The load condition shows scale, not by itself the evidence for the claimed fix. Readers still cannot tell whether failures stopped reliably under that load.
3. A reader encounters the pool and cache changes before learning what they were intended to fix. That ordering can make the result harder to spot when scanning the project entry.

**How to change it**
1. If testing confirmed the outcome, specify [the tested conditions] and how tool results were persisted and correlated. Otherwise, describe the narrower mechanisms: separated pools to address nested-pool starvation and completion-gated cache writes to avoid caching partial streams.
2. Add [a verification result, such as the failure rate before and after or successful runs under this load], if available.
3. Move the outcome phrase to the beginning of the bullet, then state the pool separation and completion-gated cache writes.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metrics-integration bullet gives no outcome beyond the integration itself. *(about 5 words added)*

**Why**
Readers can see what you added but not what it enabled or improved for the framework or its users. Without an outcome, the contribution’s value is hard to judge.

**How to change it**
After “evaluation module,” add [the specific evaluation capability, use, or improvement this enabled].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify what it compares. *(about 5 words added)*
2. [Important] “Showed the evaluator tracks” is an awkward construction that makes the result harder to parse. *(about 3 words added)*

**Why**
1. Without the two rankings or values, readers cannot tell what the result validates or interpret its relevance. Naming both sides of the comparison would make the metric meaningful.
2. The phrasing makes readers work through an unnatural verb construction before they reach the degradation result. A direct description of what the evaluation demonstrated would be easier to scan.

**How to change it**
1. After “Kendall correlation,” add [the two compared rankings or values], such as the evaluator’s ranking and [the reference ranking, if accurate].
2. Replace “Showed the evaluator tracks” with “Validated the evaluator’s ability to track.”

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Important] The backlog-triage bullet repeats the internship result and does not fit the evaluation-framework project. *(saves about 19 words if the bullet is removed)*

**Why**
The Mobility Systems Company entry attributes the 800+ sensor signals and backlog reduction to an industrial inspection system. This entry’s other bullets describe evaluation metrics and degradation testing, so repeating the triage result leaves its attribution unclear and may look like double credit.

**How to change it**
Remove this bullet unless the framework project separately produced the result; if it did, distinguish [that work and its result] from the industrial inspection system claim.

## Already working

- s2:e0:b5: The line links a deployed diagnostics capability to a quantified backlog reduction over a defined period.
- s2:e0:b3: It shows both what the evaluation covered and a concrete use of the harness.

## Set aside (4)

4 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8afd1797.md.

