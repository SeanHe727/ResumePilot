> Here is my resume: bench/planted-defects/tests-final/b4-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five experience/project entries for content and wording, plus the full-resume narrative and format. Education entries had no bullets to review. No job-description match was run because no posting was provided.

The main changes flagged:
- Clarify the baseline or comparison behind the 35% diagnostic-accuracy gain, and the outcome of the tolerance analyses and inspections.
- Resolve the apparently repeated pending-case backlog result: it appears in the internship and project sections, with reductions of 68% and two-thirds.
- Remove or distinguish the repeated assistant-only loss-masking point, and make the Agent Runtime Suite’s broad benefit claims more concrete.

The narrative review also suggests moving Experience above Education and addressing the current mechanical-design role’s connection to an ML/software direction, if that is your target. The PDF parses cleanly for ATS; the format review also flags date of birth and nationality as personal details to consider removing.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 84 · narrative 58

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 15 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that are conventionally left off and are not meant to be weighed. *(saves about 10 words)*

**Why**
Date of birth and nationality do not help a reader assess the experience or qualifications presented here. Including them gives attention to personal details rather than the evidence relevant to the application.

**How to change it**
Remove “Date of birth: 14 Mar 1999 | Nationality: Canadian” from the résumé.

> pending-case backlog 68%; “pending-case backlog by two-thirds”

**Problem**
[Error] The triage branch is credited with different backlog reductions in two entries, although the findings indicate they appear to be the same result. *(about 4 words to add)*

**Why**
The internship reports a 68% reduction, while the project reports a two-thirds reduction, and the matching branch details suggest a single accomplishment. A reader may question which figure is correct and whether the work is being credited twice.

**How to change it**
Use the same backlog figure in both places if they describe the same result, or clarify that they are separate results if that is accurate.

> M.S. in Computer Engineering

**Problem**
[Important] Experience should appear above Education so readers see the career evidence before the degrees. *(no words)*

**Why**
Education currently comes first, ahead of the work history and projects that show the candidate’s applied experience. Moving Experience up makes that evidence visible sooner.

**How to change it**
Move the Experience section above Education.

> Mechanical Design Engineer

**Problem**
[Important] The Lakeside Auto Parts role pulls the page toward mechanical design if the intended direction is ML or software engineering. *(saves about 15 words if shortened)*

**Why**
The title and work described there center on mechanical design, stamping dies, and inspections. Without a connection to the intended direction, this role can distract from the ML and software evidence elsewhere on the résumé.

**How to change it**
If ML/software engineering is the intended direction, shorten this role to a line or explain its connection to that direction, if accurate.

## Lakeside Auto Parts | Mechanical Design Engineer | Metro City, Country | Jun 2025 - Present

> Ran tolerance stack-up analyses for 12 production parts and signed off first-article inspections with the supplier.

**Problem**
[Important] The tolerance analyses and first-article inspections have no stated outcome. *(about 6 words to add)*

**Why**
A reader can see the scope of the work, but not whether it resolved a fit issue, prevented rework, or enabled production. Without an outcome, the value of this work is hard to judge.

**How to change it**
Add the main outcome after the task, such as [fit issue resolved or rework avoided]; if there is a defensible measure, include [result and what it is compared against].

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
1. [Important] The 35% accuracy improvement has no comparison baseline or evaluation set. *(about 8 words to add)*
2. [Important] The diagnostic accuracy change lacks a comparison baseline and evaluation set. *(about 8 words to add)*

**Why**
1. A reader cannot tell what the 35% represents or how to interpret the improvement. Without a baseline and evaluation set, the figure is difficult to assess.
2. A reader cannot tell what the 35% represents or how to interpret the improvement. Without those anchors, the figure is difficult to assess.

**How to change it**
1. Replace “by 35%” with a comparison such as [baseline accuracy] to [final accuracy] on [evaluation set], if accurate.
2. Replace “by 35%” with [baseline accuracy] to [final accuracy] on [evaluation set], if accurate.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Important] The method repeats the previous bullet, and the purpose adds no separate accomplishment. *(saves about 19 words)*

**Why**
Both bullets describe fine-tuning with assistant-only loss masking, and the earlier bullet already connects that method to an accuracy result. The stated purpose in this bullet is not a distinct achieved result, so keeping it uses space without adding evidence.

**How to change it**
Remove this bullet; the earlier accuracy bullet already includes the method.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Important] The backlog reduction gives no reference level or comparison period. *(about 6 words to add)*
2. [Important] The backlog reduction is buried after the system context and signal count. *(no words)*
3. [Polish] “ML-extracted features” does not identify the feature-extraction approach. *(about 3 words to add)*

**Why**
1. The eight-week timeframe tells the reader when the reduction was observed, but not what it was measured against. Without that reference, the 68% figure is hard to interpret.
2. The reduction is the strongest result in the bullet, but a scanning reader reaches it only after the system description and scope. That delays the most persuasive evidence of impact.
3. That is the only stated technical method in the line. Naming the relevant approach would make the ML work easier to assess.

**How to change it**
1. Add [the backlog at launch or the comparison period used] so the 68% has a clear reference point.
2. Move the backlog reduction to the start of the bullet, ahead of the system context and signal count.
3. Replace “ML-extracted features” with [the feature-extraction method or model], if it adds useful technical specificity.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Important] The GPU-memory reduction is attributed to the FP32-to-BF16 switch alone, which does not establish a 4x reduction. *(about 8 words to add)*

**Why**
In common fine-tuning setups, FP32 parameters, gradients, and optimizer states may remain in memory, while BF16 typically halves the storage of tensors represented in BF16. A 4x reduction generally needs other changes or an unusual baseline, neither of which this line identifies.

**How to change it**
If the 4x figure came from measured GPU-memory usage, specify [the measurement scope] and [any other changes that contributed]. Otherwise, state [the measured reduction attributable to the precision switch alone].

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The latency result comes after the implementation details, slowing its discovery for a scanning reader. *(no words)*

**Why**
The improvement from 420 ms to 180 ms is the main result, but the reader encounters the cache and batching details first. Leading with the measured change would make the impact easier to find.

**How to change it**
Move the 420 ms-to-180 ms latency result to the start of the bullet, ahead of the cache and batching details.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] “Maintained” is past tense but “adds” is present tense in a role that ended in July 2024. *(no words)*
2. [Polish] The three-day release-cycle duration has no prior duration for comparison. *(about 4 words to add)*

**Why**
1. The tense shift makes it unclear whether the automated checks are part of the same completed work or are still being added. The role dates establish that this job has ended.
2. A reader can see the new duration, but not whether three days represents a substantial improvement or a small change. The missing baseline makes the impact difficult to judge.

**How to change it**
1. Replace “adds” with “added” to keep the bullet in past tense.
2. Add [prior release-cycle length] as a comparison before “to 3 days.”

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The line describes removing dispatch backlogs without showing how much backlog or delay was removed. *(about 6 words to add)*

**Why**
A reader can see the operational problem the migration addressed, but cannot gauge the size of the improvement. The 30-service count shows the scale of the work, not the result.

**How to change it**
Add [backlog or dispatch-delay reduction, measured against the pre-migration level], if available.

> Migrated 30 robot-fleet services

**Problem**
[Polish] The bullets list separate improvements without establishing one project or stretch of work. *(about 4 words to add)*

**Why**
The bullets describe model-memory, API-latency, release-pipeline, and robot-fleet changes as distinct accomplishments. A reader cannot tell whether they formed a connected initiative or simply occurred during the same role.

**How to change it**
If these improvements belonged to one initiative or stretch of work, identify that shared context; otherwise, keep them as separate accomplishments rather than implying a single project.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] “AI-first engineering practices” does not specify what practices you drove adoption of. *(about 8 words to add)*

**Why**
The phrase signals a broad area but does not let a reader picture your contribution or recognize the relevant skill. The bullet also presents delivery and downstream benefits as achieved without identifying evidence of a change.

**How to change it**
Replace the general phrase with [one specific practice or workflow you introduced]. If the benefits were measured, name [the delivery or downstream outcome and its change]; otherwise, describe the practice without claiming those results.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] “The raw conversation grew 100x” gives a ratio without a comparison basis. *(about 5 words to add)*

**Why**
A reader cannot tell what the raw conversation size is 100 times larger than. Without that reference, the scale of the stress test is difficult to interpret.

**How to change it**
Clarify the comparison basis after “grew 100x” with [what the raw conversation size is compared with].

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] Separating pools and gating cache writes do not by themselves establish that deadlocks and lost tool results were eliminated. *(about 8 words to add)*

**Why**
Separate pools can still leave dependency cycles or starvation, and completion-gated writes do not prevent loss from cancellation, write failures, or retry and concurrency races. The line does not establish that these failure modes were eliminated under 50-way fan-out.

**How to change it**
If testing supports the claim, specify [the conditions and failure cases tested] and say the changes prevented the observed failures there. Otherwise, soften the claim to describe the failure modes addressed.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metric integration has no stated outcome or capability it enabled. *(about 8 words to add)*

**Why**
A reader can see the contribution and the number of metrics, but not the value to the framework or its users. The metric count shows scope, not what changed.

**How to change it**
Add the main evaluation capability or outcome this enabled, such as [what users could evaluate or what evaluation limitation it addressed].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The Kendall correlation does not say which two variables or rankings were correlated. *(about 5 words to add)*

**Why**
Without the comparison, a reader cannot interpret what the correlation demonstrates about the evaluator. Naming the reference or degradation measure would make the evidence usable.

**How to change it**
Clarify what the evaluator’s results were correlated against, for example [the degradation severity or reference ranking used].

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Important] The two-thirds backlog claim repeats the industrial-inspection result and is not established as part of this project. *(saves about 20 words if removed)*

**Why**
The matching backlog, sensor-signal count, and ML-extracted features make this appear to be the same accomplishment credited under the internship. The résumé does not establish that the triage branch belonged to this research-agent evaluation project, so this attribution can raise questions about the accuracy of the project entry.

**How to change it**
Remove this line from the project entry unless the triage work was genuinely part of this project; otherwise, keep the accomplishment under the role where it belongs.

## Already working

- s2:e0:b0: Connects a specific design contribution to a quantified production improvement.
- s2:e1:b2: The outcome, comparison baseline, accuracy condition, and training mechanism are all easy to identify.

## Set aside (5)

5 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-5d08fccc.md.

