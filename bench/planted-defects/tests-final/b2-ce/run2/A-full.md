# Full review: resume.pdf

**84/100** — format 100 · content 75 · wording 79 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 9 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> "Date of birth: 14 Mar 1999 | Nationality: Canadian"

**Problem**
[Error] The résumé includes personal details that are conventionally left off. *(saves about 8 words)*

**Why**
A reader does not need your date of birth or nationality to assess your qualifications. Including them gives attention to information that does not help weigh your experience or fit.

**How to change it**
Remove the date of birth and nationality.

*raised by file*

> "pending-case backlog 68%" / "pending-case backlog by two-thirds"

**Problem**
[Error] The same triage achievement is reported with two different backlog-reduction figures. *(saves about 20 words if you remove the repeated achievement)*

**Why**
The internship and project bullets both describe a triage branch screening 800+ signals per case, but one reports a 68% reduction and the other two-thirds. A reader may doubt which figure is accurate, and the repeated claim makes it unclear whether these are separate achievements.

**How to change it**
Confirm [the correct backlog-reduction figure], then consolidate the repeated achievement or make both entries agree.

*raised by narrative*

> "M.S. in Computer Engineering"

**Problem**
[Important] The education section appears before the work experience that should lead the page. *(no words)*

**Why**
Your listed roles and project work are more relevant to a reader assessing your practical experience. Leading with education delays that evidence.

**How to change it**
Move the experience section above education.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The diagnostic-accuracy improvement has no named comparison point. *(about 5 words)*

**Why**
A reader cannot tell whether the 35% is relative to the untuned model, another baseline, or a different evaluation. Without the comparison, the size of the improvement is difficult to interpret.

**How to change it**
After the result, add [the baseline used for the accuracy comparison], if available.

*raised by content*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Error] Assistant-only loss masking does not train the model to reproduce tool outputs when those outputs are non-assistant messages. *(about 3 words to add if specifying how tool-output tokens were included)*

**Why**
Assistant-only masking excludes non-assistant tokens from the training loss. It can train the model to respond based on tool outputs, but that is different from learning to reproduce them.

**How to change it**
If the training loss included tool-output tokens, specify how; otherwise, change the claim to say the masking trained the model to respond to tool outputs rather than reproduce them.

*raised by content*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The backlog reduction is attributed to the triage branch without evidence that the branch caused it. *(no words if you replace the causal wording)*

**Why**
The backlog may also have changed because of incoming case volume, staffing, or other workflow changes. Saying it fell after launch establishes timing, not that the branch produced the reduction.

**How to change it**
Credit the branch only if [a suitable comparison supporting attribution] is available; otherwise, report that the backlog fell 68% in the eight weeks after launch.

*raised by content*

> "assistant-only loss masking"

**Problem**
[Error] The two internship bullets repeat the same adapter fine-tuning method. *(saves about 17 words if you cut the repeated bullet)*

**Why**
Both bullets mention fine-tuning the adapter with assistant-only loss masking, while the first already gives an accuracy result. The second does not establish a distinct outcome, so it reads as duplicated work rather than additional evidence.

**How to change it**
Cut the repeated method from one bullet; if the bullets describe distinct work, clarify how they differ.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Error] Switching from FP32 to BF16 mixed precision alone does not support the claimed fourfold GPU-memory reduction. *(about 5 words if adding a measured figure)*

**Why**
BF16 uses half as many bytes per value as FP32, but mixed-precision training may retain FP32 master weights and optimizer state. That switch does not generally reduce total GPU memory fourfold, so a reader may doubt the result.

**How to change it**
Report the measured memory reduction from the actual run, if available; otherwise, describe the use of BF16 mixed precision without claiming a 4x reduction.

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet shifts from past tense to present tense in a role that ended in July 2024. *(no words)*
2. [Important] The claim that regression checks shortened release cycles to three days is not supported by evidence that they caused the change. *(no words if you remove the causal attribution)*
3. [Important] The three-day release-cycle duration has no previous duration for comparison. *(about 3 words)*

**Why**
1. “Maintained” describes completed work, but “adds” makes the second action sound ongoing. That tense mismatch disrupts the timeline and weakens the clarity of what you did in the role.
2. Other steps may determine release-cycle time, so adding checks alone does not establish that they produced the three-day cycle. A reader may question the causal claim.
3. A reader can see the new duration but cannot tell how much faster releases became. Without a baseline, the scale of the improvement is unclear.

**How to change it**
1. Replace “adds” with “added” to keep the bullet in past tense.
2. Add evidence that isolates the checks’ effect, if available; otherwise, say the checks were added and release cycles were 3 days without attributing the duration to them.
3. Add [previous release-cycle duration] before “to 3 days.”

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The claim that the migration removed nightly backlogs is stronger than the line establishes, and the operational change is unmeasured. *(about 5 words if adding the before-and-after measure)*

**Why**
An event queue with retries and dead-letter handling can help with scheduling or transient-failure backlogs, but it does not ensure backlogs disappear if capacity or downstream services are constrained. The line gives no evidence that the backlogs were eliminated or how much morning dispatch delay changed.

**How to change it**
If the backlogs were eliminated, add evidence for that; otherwise, replace “removing” with softer wording and add [dispatch delay before and after], if available.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The claimed delivery and downstream improvements are vague and lack a supporting measure or comparison. *(saves about 8 words if you remove the generic claims)*

**Why**
A reader cannot tell what became faster or better, or how much it changed. Without a measured result and a basis for comparison, the claimed impact is difficult to judge.

**How to change it**
Replace that phrase with [a specific delivery or downstream result and what it was compared against], if substantiated; otherwise, remove the generic outcome claims.

*raised by content, wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The line does not establish that the changes eliminated nested-pool deadlocks or lost tool results under 50-way fan-out. *(no words if you replace the claim; about 6 words if adding test results)*

**Why**
Deadlocks can still occur through waits or resources shared across pools, and stream completion alone does not ensure that tool results were recorded successfully. The stated scale does not show how either failure was assessed.

**How to change it**
If validated, add the test conditions and results supporting the 50-way claim; otherwise, replace “removing” with wording that says the changes addressed these failure modes.

*raised by content*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Important] The triage-branch backlog result is inconsistently attributed to this project and the internship. *(saves about 17 words if you remove the claim)*

**Why**
The matching backlog and sensor-signal details strongly suggest this is the same work, but the research-agent evaluation project is presented separately. As written, the attribution may make a reader doubt what this project delivered.

**How to change it**
Confirm which effort owned the triage branch; if it was the internship, remove this claim from the project entry, and if it was this project, distinguish its result from the internship claim.

*raised by content, narrative*

## Set aside (21)

- s2:e0:b1: “limits each of 3 specialist agents and an independent reviewer to their in-scope signals” does not explain what determined which signals were in scope.
- s2:e0:b3: “catching 2 accuracy regressions before release” does not say what changed after they were caught.
- s2:e0:b4: “so the model would learn to reproduce the tool outputs more faithfully” states an aim, not what changed.
- s2:e0:b5: “with ML-extracted features” does not identify what feature approach was used.
- s3:e1:b0: “Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module” says what you added, but not what it enabled or changed.
- s3:e1:b1: “a Kendall correlation of 0.89 across 400+ report-level trials” does not say what the correlation compares.
- s3:e1:b2: “Cut the pending-case backlog by two-thirds” gives a reduction but not the baseline or period over which it was measured.
- s3:e0:b0: “AI-first engineering practices” does not say which practice you introduced.
- s3:e0:b1: “the raw conversation grew 100x” does not say what that growth is relative to.
- s2:e1:b0: “the perception models” uses a needless article that adds no useful detail.
- s2:e1:b1: “with load tests that fail the build if p95 exceeds 200 ms” is wordy and places a secondary safeguard after the main result; move or shorten it for faster scanning.
- s2:e1:b3: “the nightly backlogs that delayed morning dispatch” is a wordy outcome phrase that can be shortened while keeping the result prominent.
- s3:e0:b1: “Working context” and “raw conversation” are specialized terms that may slow readers outside the team; consider plainer wording such as “active context” and “conversation history.”
- s3:e1:b1: “Showed the evaluator tracks” is an indirect construction that obscures the validation action and makes the result harder to scan.
- s3:e1:b2: “With a triage branch that” is a wordy bridge between the outcome and how it was achieved; “by screening” states the method more directly.
- s2:e0:b1: “limits each of 3 specialist agents and an independent reviewer to their in-scope signals” is a dense, awkwardly phrased description that slows scanning.
- s2:e0:b2: The result appears after a lengthy description of training details, making the impact harder to find on a scan.
- s2:e0:b3: “the team used to compare” is unnecessary setup that delays the result of catching regressions.
- s2:e0:b4: This repeats the fine-tuning method from the first bullet, while “so the model would learn to reproduce the tool outputs more faithfully” describes an aim rather than a distinct result.
- s2:e0:b5: The 68% backlog reduction is buried at the end of a long description, so a scanning reader may miss the main result.
- whole resume, dates: The dates show about 10 months with no study or work listed between the B.S. ending in Jun 2022 and the Eastern Robotics role starting in May 2023.
