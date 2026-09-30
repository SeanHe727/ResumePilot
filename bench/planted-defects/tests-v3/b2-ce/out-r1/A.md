> Here is my resume: bench/planted-defects/tests-v3/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Review completed. The resume is one page, ATS-readable, and consistently formatted. Content, wording, narrative, and formatting were reviewed; no job-description comparison was run because no posting was provided.

The most important changes are:

1. **Remove or consolidate duplicated achievements**
   - The internship bullets on assistant-only loss masking overlap.
   - The internship and Research-Agent project both claim the same sensor-triage/backlog result, with inconsistent figures: **68%** versus **two-thirds**.
   - Keep one version and ensure the figure is consistent.

2. **Clarify or substantiate metrics**
   - Add baselines, endpoints, or evaluation context for claims such as:
     - “Improved diagnostic accuracy by 35%”
     - “Cut GPU memory … by 4x”
     - “shortened release cycles to 3 days”
     - “catching 2 accuracy regressions”
   - Avoid presenting intended effects as demonstrated outcomes, especially in the loss-masking bullet.

3. **Strengthen the project entries**
   - Replace the broad opening claim about “AI-first engineering practices” with a concrete contribution or measurable result.
   - Explain what the evaluation framework enabled, not only that it integrated eight metrics.
   - Remove the unrelated triage bullet from the Research-Agent project or clarify its relationship to that project.

4. **Address the timeline**
   - The narrative review identified an unexplained period from **June 2022 to May 2023**. Add relevant work, study, or other context if applicable.

5. **Tighten wording**
   - Use consistent past tense for completed roles.
   - Clarify compressed phrases such as “under 50-way fan-out” and “kept working context.”
   - Correct “Showed the evaluator tracks” to grammatical wording.
   - Avoid ambiguous phrasing such as “reduced by 4x.”

6. **Check personal details**
   - The format review flagged “Date of birth” and “Nationality” as details generally omitted from resumes unless specifically required.

The full specialist report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 78 · wording 85 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 13 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999 | Nationality: Canadian

**Problem**
[Error] Personal details a reader is not meant to weigh should be left off the résumé. *(saves about 9 words)*

**Why**
Date of birth and nationality do not help a reader assess the qualifications shown here and can introduce irrelevant screening considerations. Including them uses space without strengthening the application.

**How to change it**
Delete the date-of-birth and nationality text rather than adding it to the résumé.

> Jun 2022

**Problem**
[Important] The résumé timeline has an unexplained 10-month gap between the B.S. and the Junior Software Engineer role. *(adds about 5–15 words if a single activity is added)*

**Why**
The education entry ends in Jun 2022 and the next listed role begins in May 2023, leaving a reader unsure what occupied that period. The gap can prompt questions about availability or experience before the reader reaches the stronger accomplishments.

**How to change it**
Add [the candidate's study, work, project, or other relevant activity] for the period between Jun 2022 and May 2023, if applicable; otherwise leave the dates unchanged and be ready to explain the gap.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement lacks a baseline, endpoint, and evaluation-set context. *(adds about 6–12 words)*

**Why**
A hiring reader cannot judge the size or credibility of the improvement without knowing what accuracy changed from and to. The missing case or evaluation-set context also makes it difficult to distinguish a broad result from a narrow test.

**How to change it**
Replace or supplement "by 35%" with [baseline accuracy] to [final accuracy] on [evaluation set or case count], keeping the fine-tuning method after the result.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The phrase "each of 3 specialist agents" uses awkward number styling in a dense sentence. *(no words)*

**Why**
The numeral interrupts an already technical clause and makes the reader parse the count while reading the routing design. Spelling out the number improves flow without changing the claim.

**How to change it**
Replace "3" with "three."

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The grouped-rollout method chain delays the two measurable results in the GRPO bullet. *(saves about 5 words)*

**Why**
The reader must move through several method details before reaching the tool-call and latency reductions. Compressing the reward description preserves the mechanism while making the outcomes easier to scan.

**How to change it**
Compress the method description to "using a redundancy-penalising reward" so the mechanism remains while the two results arrive sooner.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
1. [Important] The evaluation harness bullet shows that two regressions were detected but not what decision or consequence followed. *(adds about 4–8 words)*
2. [Important] The phrase "Wrote the evaluation harness" does not identify the technical capability that made the harness effective. *(adds about 3–7 words)*
3. [Polish] The phrase "the team used to compare 14 adapter checkpoints" is indirect and adds filler. *(saves about 3 words)*

**Why**
1. A reader can see that the harness found problems, but cannot tell whether it prevented a degraded release, changed checkpoint selection, or protected a user-facing metric. The missing consequence limits the evidence of impact despite the concrete detection count.
2. It establishes ownership of an artifact but gives limited evidence of evaluation or software-engineering skill. A reader cannot tell what the harness automated or standardized beyond the later checkpoint count.
3. The wording separates the harness from its purpose, so the reader has to parse who used it before reaching the evaluation task. A direct infinitive connects the artifact and its function more quickly.

**How to change it**
1. Keep that phrase and add [the resulting decision or prevented consequence], such as [selected the prior checkpoint] or [blocked a degraded release], if accurate.
2. Replace or supplement it with [one distinctive capability], such as [automated side-by-side checkpoint scoring] or [standardized tool-call replay], if accurate.
3. Replace it with "to compare 14 adapter checkpoints."

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Error] Assistant-only loss masking does not train the model to reproduce tool outputs more faithfully. *(saves about 6 words if the bullet is removed)*

**Why**
Assistant-only masking excludes tool-output tokens from the supervised loss, so it directly trains assistant responses conditioned on tool outputs rather than the tool outputs themselves. Claiming improved tool-output reproduction therefore misstates what the method optimizes and leaves the reader without a valid result for this bullet.

**How to change it**
Replace that claim with training focused on the assistant's responses conditioned on tool outputs; claim improved tool-output reproduction only if a direct tool-output objective or evaluation was used, otherwise remove the bullet as redundant with [s2:e0:b0].

> assistant-only loss masking

**Problem**
[Error] The résumé repeats the same adapter fine-tuning achievement in [s2:e0:b0] and [s2:e0:b4]. *(saves about 18 words if b4 is removed)*

**Why**
Both bullets describe fine-tuning the same domain adapter with assistant-only loss masking, so a reader may interpret the second as duplicated content rather than a separate result. That repetition uses a bullet on a method already stated in the accuracy result and makes the internship appear to contain fewer distinct achievements.

**How to change it**
Combine the method from [s2:e0:b4] into [s2:e0:b0] or remove [s2:e0:b4]; keep it separate only if the bullets describe separate experiments and label that distinction.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Important] The claim that switching from FP32 to BF16 mixed precision cut total GPU memory by 4x is likely overstated and ambiguous. *(adds about 4–10 words)*

**Why**
BF16 reduces the storage of converted tensors, while full-parameter fine-tuning can retain FP32 master weights and optimizer states that dominate memory. Without additional memory-saving changes or a specified configuration, a 4x total reduction is difficult to support; "by 4x" also does not clearly say whether memory fell to one-quarter of baseline.

**How to change it**
Report the measured reduction for [the measured component] or replace the claim with "from [baseline GPU memory] to [resulting GPU memory]"; if the total reduction depended on additional changes, name them, and use "to one-quarter of baseline" only if accurate.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Important] The load-test safeguard is appended after the main latency result, making the validation evidence easy to miss. *(no words)*

**Why**
The p95 improvement is prominent, but the build-gating condition is important proof that the target was enforced rather than merely observed once. Moving the safeguard closer to the result improves scanability.

**How to change it**
Move the load-test safeguard immediately after the latency result or lead with the build gate before describing the cache and batching changes.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The phrase "Maintained ... and adds" mixes past and present tense in a role that ended in July 2024. *(no words)*
2. [Important] The release-cycle result gives only a three-day endpoint and does not show the work performed beyond adding regression checks. *(adds about 5–12 words)*

**Why**
1. The tense shift makes the bullet appear mechanically unedited and creates uncertainty about whether the automated checks were part of the completed role or ongoing work. Consistent past tense presents the accomplishment as finished.
2. A reader cannot judge the size of the acceleration without the prior release cadence. "Maintained the CI pipeline" frames the work as routine responsibility rather than identifying the concrete automation change that produced the result.

**How to change it**
1. Replace "adds" with "added."
2. Lead with the automated regression checks and [the specific CI or release-automation change implemented], then state the cadence as "from [prior release-cycle duration] to 3 days" if the baseline is known.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The AI-first-practices bullet makes unsupported, broad causal claims without identifying the practices, adoption scale, or measured outcomes. *(adds about 5–15 words if measurements are available)*

**Why**
A reader cannot tell what was introduced, how many people or teams adopted it, or whether delivery actually improved compared with a baseline. "Accelerating delivery and improving outcomes" therefore reads as promotional language rather than checkable project impact.

**How to change it**
Replace the generic phrase with [the one or two specific practices or platform changes], and either add [adoption reach and a measured delivery or downstream outcome] or remove the causal outcome claims.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Important] The phrase "Kept working context under 10K tokens" does not clearly identify the context being controlled or why the limit mattered. *(adds about 5–10 words)*

**Why**
The system result is concrete, but a reader cannot tell whether it prevented context failures, reduced cost or latency, or enabled longer tasks. The separate "100x" growth claim also lacks a stated baseline, making its scale difficult to interpret.

**How to change it**
Replace "working context" with the specific context being measured and connect the limit to [the failure, latency, cost, or task-continuity problem avoided]; state the baseline for the raw conversation growth if retaining "100x."

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The concurrency fix does not establish how extensively deadlocks and lost tool results were removed, and "under 50-way fan-out" is compressed. *(adds about 5–10 words)*

**Why**
Separating pools and gating cache writes describe the mechanism, but they do not show whether the defects were occasional or frequent or whether the fix eliminated them. The reader also cannot tell whether the failures occurred at or below 50 concurrent branches.

**How to change it**
Replace it with "at [or below] 50 concurrent branches" and add [the deadlock or lost-result rate before and after] or [the number of successful runs], if accurate.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The evaluation-framework contribution says that eight metrics were integrated but does not state what capability or outcome the integration enabled. *(adds about 5–12 words)*

**Why**
The count shows the scale of the contribution, but a reader cannot tell whether it expanded evaluation coverage, improved reproducibility, or enabled downstream use. The bullet therefore demonstrates implementation work without showing its value to the framework.

**How to change it**
Add [the single resulting evaluation capability, coverage improvement, reproducibility benefit, or downstream use] after "evaluation module."

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Error] The phrase "Showed the evaluator tracks" is grammatically incomplete. *(adds 1 word)*
2. [Important] The Kendall correlation supports a strong rank-order association with injected degradation, not the broader claim that the evaluator tracks degradation. *(adds about 5–12 words)*

**Why**
1. The missing conjunction makes the result read as an editing error and briefly interrupts comprehension of an otherwise technical finding. A small grammatical correction makes the relationship between the evidence and conclusion explicit.
2. A correlation of 0.89 across manipulated reports does not by itself establish calibration, causal validity, agreement with human judgments, or generalization to naturally occurring degradation. The line also omits the reference ordering or severity levels against which the evaluator was correlated, making the statistic difficult to interpret.

**How to change it**
1. Replace it with "Showed that the evaluator tracks" or "Demonstrated that the evaluator tracks."
2. Replace the claim with a statement that the evaluator's scores showed a strong rank-order association with injected degradation, add [the reference ordering or known severity levels], and retain the 0.89 Kendall correlation across 400+ trials.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The résumé repeats the same triage-branch achievement with inconsistent backlog figures. *(saves about 20 words if the duplicate bullet is removed)*
2. The phrase "ML-extracted" uses an unexplained abbreviation and makes the method less accessible. *(adds about 1 word)*

**Why**
1. The two bullets both describe screening 800+ sensor signals per case and reducing the pending-case backlog, so the repeated achievement can look copied into the project entry. Reporting 68% in one place and two-thirds in another makes a reader question which measurement is correct.
2. Readers outside the immediate machine-learning context may not know that ML means machine learning. Expanding the term avoids an unnecessary interpretation step in the already dense method description.

**How to change it**
1. Retain the achievement in one entry and remove the duplicate; use either "68%" or "approximately two-thirds" consistently, based on the underlying calculation.
2. Replace "ML-extracted" with "machine-learning-extracted" if the abbreviation has not been defined elsewhere.

> Cut the pending-case backlog by two-thirds

**Problem**
[Important] The Research-Agent Evaluation Framework entry is weakened by a copied diagnostics bullet unrelated to its evaluation contribution. *(saves about 19 words if the copied bullet is removed)*

**Why**
The first two bullets establish an evaluation-framework story, but the third switches to diagnostics triage and repeats the internship's backlog result. A reader may therefore see the project as assembled from unrelated work rather than as a focused evaluation contribution.

**How to change it**
Remove the diagnostics/backlog bullet from this entry or move it to the relevant internship, leaving the citation and faithfulness evaluation work as the standalone project story.

## Set aside (4)

4 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c6b41705.md.

