# Full review: resume.pdf

**85/100** — format 100 · content 76 · wording 84 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

9 errors, 22 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] Personal details that are not relevant to hiring are included and should be removed. *(saves about 9 words)*

**Why**
Date of birth and nationality are not part of the evidence a reader is meant to weigh for these roles. Including them adds potentially sensitive information without strengthening the candidacy.

**How to change it**
Delete the entire personal-details phrase, including “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

*raised by file*

> Cut the pending-case backlog by two-thirds

**Problem**
[Error] The diagnostics triage achievement is repeated with inconsistent backlog-reduction figures. *(saves about 20 words if the duplicate is removed)*

**Why**
The two bullets describe the same screening method, signal volume, and backlog outcome, so a reader may interpret them as duplicated claims rather than separate work. The different figures—68% and two-thirds—also create doubt about which result is correct.

**How to change it**
Remove or replace the repeated bullet in Research-Agent Evaluation Framework, or use one consistent percentage in both bullets if they describe the same achievement; if they are separate, add the distinguishing scope or context.

*raised by narrative*

> Cut the pending-case backlog by two-thirds

**Problem**
[Error] The diagnostics triage achievement is repeated with inconsistent backlog-reduction figures. *(about 2–6 words to clarify)*

**Why**
The two bullets describe the same screening method, signal volume, and backlog outcome, so a reader may interpret them as duplicated claims rather than separate work. The different figures—68% and two-thirds—also create doubt about which result is correct.

**How to change it**
Use one consistent percentage in the two bullets, or clarify the separate scope and outcome if these were genuinely different achievements.

*raised by narrative*

> Jun 2022 ... May 2023

**Problem**
[Important] The résumé leaves a ten-month period unexplained between the B.S. and the first listed job. *(adds about 4–10 words plus dates)*

**Why**
The dates show the B.S. ending in June 2022 and the Junior Software Engineer role beginning in May 2023, so a reader may wonder whether the period reflects employment, study, or another activity. An unexplained gap can prompt questions before the reader reaches the stronger technical evidence.

**How to change it**
Add the candidate’s actual [study, work, project, or other activity] for that period, with dates, if it is relevant and can be documented; otherwise leave the timeline unchanged rather than inventing an explanation.

*raised by narrative*

> Agent Runtime Suite

**Problem**
[Important] PROJECTS should appear above EXPERIENCE so the current agent-systems work establishes the résumé’s direction first. *(no words)*

**Why**
Agent Runtime Suite is the current role and Research-Agent Evaluation Framework is recent, while the listed employment is older. Leading with the projects would make the present machine-learning and agent-systems focus easier to identify during a quick scan.

**How to change it**
Move the complete PROJECTS section above EXPERIENCE, keeping Agent Runtime Suite before Research-Agent Evaluation Framework.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The diagnostic-accuracy improvement has no baseline or evaluation context. *(adds about 4–10 words)*

**Why**
A hiring reader cannot judge the size or credibility of a 35% improvement without knowing what it was measured against. The percentage could represent a relative increase, an absolute-point increase, or a comparison across different evaluation conditions.

**How to change it**
Add the comparison in brackets, such as “from [baseline accuracy] to [post-tuning accuracy] on [evaluation set]”; use absolute values or clarify that 35% is a relative increase if accurate.

*raised by content*

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, keeping every finding traceable to its source data.

**Problem**
1. [Error] The routing design does not establish end-to-end provenance merely by restricting agents to in-scope signals. *(saves about 8 words or adds about 8–15 words)*
2. [Important] The routing bullet claims traceability without showing the user impact or a measurement. *(adds about 4–10 words)*
3. The routing bullet is unclear about whether the independent reviewer is also restricted, and “in-scope signals” is unexplained jargon. *(adds about 2–6 words)*

**Why**
1. Restricting access controls which signals agents can use, but it does not guarantee that every finding is linked to exact source signals, transformations, tool outputs, and claim-to-evidence records. An independent reviewer also does not by itself prove that every finding was validated.
2. The architecture is clear, but the reader cannot tell whether it reduced unsupported findings, review time, or investigation errors. An absolute statement such as “every” is difficult to assess without an audit result or test scope.
3. The phrase “each of 3 specialist agents and an independent reviewer” makes the scope of the restriction ambiguous. An outside reader may also not know what signals are considered “in scope,” so the architecture is harder to understand quickly.

**How to change it**
1. Retain the routing-layer claim, but remove the guarantee unless it was measured; if implemented, add the separate provenance mechanism that links each finding to its source data and validates those links.
2. Replace or supplement the ending with [concrete user or review outcome] and add [traceability rate or audit result] across [evaluation scope], if measured.
3. Clarify whether the reviewer is included in the restriction and replace “in-scope signals” with [plain-language description of the permitted signals], if accurate.

*raised by content, wording*

> Applied GRPO with grouped tool-use rollouts and a composite reward, cutting end-to-end latency 5% versus the SFT baseline with no loss in diagnostic accuracy.

**Problem**
[Important] The accuracy claim should state that accuracy was maintained relative to the SFT baseline. *(adds about 3 words)*

**Why**
“No loss” is indirect and leaves the comparison implicit. Naming the SFT baseline makes the result easier to verify and ties the claim directly to the experiment.

**How to change it**
Replace “with no loss in diagnostic accuracy” with “while maintaining diagnostic accuracy relative to the SFT baseline.”

*raised by wording*

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency before each release.

**Problem**
1. [Important] The checkpoint-comparison harness has no stated decision or improvement resulting from its use. *(adds about 3–8 words)*
2. [Important] The evaluation-harness bullet uses duty framing and omits the serial comma. *(no words)*

**Why**
1. The reader can see that the team used the harness to compare 14 checkpoints, but not whether it selected a release candidate, caught regressions, or improved release confidence. Adoption shows usefulness only indirectly.
2. “Wrote the evaluation harness the team used” foregrounds a responsibility instead of the stronger result—comparison of 14 checkpoints. The list also lacks the serial comma if the résumé is using standard serial-comma punctuation elsewhere.

**How to change it**
1. Add the resulting decision or benefit in brackets, such as “enabling [release selection, regression detection, or other concrete outcome].”
2. Lead with the comparison result by moving “compare 14 adapter checkpoints” earlier, and change the list to “accuracy, citation quality, and latency.”

*raised by content, wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Important] The assistant-only loss-masking bullet describes an intention rather than an observed result and repeats the fine-tuning work in b0. *(saves about 16 words if removed, or adds about 3–8 words if retained)*

**Why**
A hiring reader needs to know what improved after the training intervention, not only what the model was meant to learn. Without an evaluation criterion, “more faithfully” cannot establish whether tool-output reproduction actually changed.

**How to change it**
Remove this duplicate bullet or fold the implementation detail into b0; if retained as distinct work, replace the intended-effect ending with the observed outcome in brackets and add [metric] versus [baseline].

*raised by content*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.

**Problem**
[Polish] The phrase “with ML-extracted features” does not identify the specific technical contribution supporting triage. *(about 1–5 words to replace)*

**Why**
The 68% backlog result establishes value, but a machine-learning engineering reader still cannot tell how the model or features supported the triage decision. The compressed phrase also makes the mechanism harder to scan.

**How to change it**
Replace “ML-extracted features” with [model or feature-extraction method]-derived features, if accurate; if space permits, simplify “pending-case backlog” to “backlog of pending cases.”

*raised by content*

> assistant-only loss masking

**Problem**
[Error] The adapter fine-tuning achievement is repeated in two bullets without a distinct outcome. *(saves about 16 words if b4 is removed)*

**Why**
Both bullets describe assistant-only loss masking during adapter fine-tuning, so the reader may think the same work is being claimed twice. The duplicate consumes space that could instead establish a separate technical contribution or result.

**How to change it**
Retain the accuracy result in b0 and remove b4, or fold b4’s implementation detail into b0 only if it describes the same training run; otherwise distinguish the work with a separate measured outcome.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The claimed 4x total fine-tuning-memory reduction from switching FP32 to BF16 is incorrect. *(about 2 words to replace the figure)*
2. [Polish] The phrase “by 4x by switching” repeats the same connector and interrupts the result-method structure. *(no words)*

**Why**
1. BF16 uses roughly half the bytes of FP32 for eligible tensors, but mixed-precision fine-tuning commonly retains FP32 parameter copies, gradients, optimizer state, or other buffers. Precision switching alone therefore does not generally establish a 4x reduction in total fine-tuning memory, and the current claim can undermine technical credibility.
2. The duplicated “by” makes the sentence harder to scan and briefly obscures whether 4x describes the result or the method. A cleaner construction would present the reduction once and then name the precision change.

**How to change it**
1. Change the figure to the measured reduction attributable to the change; if no separate measurement exists, state that BF16 reduced memory for eligible tensors by approximately 2x rather than claiming a 4x total reduction.
2. Replace the second “by” with “after” or remove the repeated connector, subject to the corrected memory figure.

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.

**Problem**
1. [Error] The latency bullet incorrectly credits load tests with keeping production p95 latency at 180 ms. *(saves about 4 words or adds about 2–6 words)*
2. [Important] The load-test claim does not say what the tests measured or what latency threshold they enforced. *(adds about 3–8 words)*
3. The latency bullet uses vague wording and a long chain of methods that weakens scanning clarity. *(saves about 2–6 words or adds about 3–8 words)*

**Why**
1. Caching and batching can produce the stated reduction under a representative workload, but load tests only measure behavior under tested conditions. They do not provide ongoing production control or monitoring, so the current wording overstates what the tests established.
2. A technical reader can identify the testing activity but cannot tell how it protected the 180 ms result. Without the workload, metric, or threshold, the testing contribution is difficult to assess.
3. “Keep it there” does not identify what the tests prevent or how they relate to 180 ms. Placing the result before multiple methods also makes the operational impact less immediately readable.

**How to change it**
1. If 180 ms was measured only in load tests, replace the ending with “in load tests”; if production monitoring confirmed the result, name that monitoring instead of saying load tests kept the latency there.
2. Replace or supplement the ending with [load-test condition or p95 latency threshold], if accurate.
3. Replace “keep it there” with [specific test threshold or condition], and cut or move the secondary testing detail if needed so the latency result remains easy to scan.

*raised by content, wording*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The past-tense opening conflicts with the present-tense verb in an ended role. *(no words)*
2. [Important] The release-cycle result gives an endpoint but no baseline or size of improvement. *(adds about 2–6 words)*
3. [Important] “Maintained the CI pipeline” is too broad and frames the work as a technical responsibility rather than a concrete improvement. *(about 1–5 words to replace)*
4. [Important] “Maintained the CI pipeline” frames the work as a responsibility rather than leading with what was changed or improved. *(about 1–5 words to replace)*

**Why**
1. “Maintained” establishes past tense, but “adds” shifts to present tense, making the sentence grammatically inconsistent. The mismatch is small but can make the bullet look insufficiently edited.
2. A reader cannot tell whether cycles fell from weeks, five days, or only slightly. Without the prior duration or another comparison, the value of the regression checks is difficult to judge.
3. Maintaining a pipeline could mean monitoring, debugging, or redesigning it, so the reader cannot see the engineering skill behind the ownership. The broad opening also hides the stronger contribution—the automated regression checks.
4. The opening tells the reader what area was owned, but not what engineering action produced the release-cycle result. This duty framing makes the contribution sound routine and weakens the impact of the automated regression checks.

**How to change it**
1. Change “adds” to “added.”
2. Add [previous release-cycle duration] before “to 3 days,” or state [the release delay or failure that the checks eliminated], if accurate.
3. Replace “Maintained the CI pipeline” with [specific pipeline improvement or automation you owned], while retaining “automated regression checks” if that is the central method.
4. Replace the responsibility framing with [specific pipeline improvement or automation you owned], leading with the change rather than with maintenance.

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog and dispatch improvement is stated without a measure of how much it changed. *(adds about 3–8 words)*
2. [Important] The operational impact is buried after a long methods list. *(no words)*

**Why**
1. The reader understands the operational benefit but cannot judge its size or verify how much dispatch reliability improved. A before-and-after count, delay, or percentage would make the result more credible.
2. A scanner may reach “migrated 30 robot-fleet services” and miss the more important dispatch result at the end. Leading with or moving the impact closer to the migration result would make the bullet’s value clearer.

**How to change it**
1. Add [backlog count or dispatch delay before and after], or [the percentage of dispatches no longer delayed], if measured; move this impact earlier in the bullet if space permits.
2. Move the backlog or dispatch result immediately after the migration result, without changing the underlying claim.

*raised by content, wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The AI-first adoption claim does not identify the practices introduced or a concrete result. *(adds about 5–12 words)*

**Why**
“AI-first engineering practices” gives no evidence of the technical or organizational work behind the adoption claim. “Accelerating delivery and improving outcomes” is a generalization without a scale, so a reader cannot tell what changed for downstream teams.

**How to change it**
Add one specific practice or implementation detail after “AI-first engineering practices,” such as [concrete workflow, platform capability, or engineering process introduced], and replace the broad outcome with [delivery improvement] and, if accurate, [specific downstream-team outcome].

*raised by content, wording*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Important] The context-window result has no baseline, target, or downstream consequence. *(adds about 3–8 words)*
2. [Polish] The phrase “The raw conversation grew 100x” does not state the baseline or exactly what grew. *(adds about 2–6 words)*

**Why**
1. The reader can see the 10K-token limit and 100-turn test but cannot judge whether this improved on the prior design or what capability it enabled. The result therefore reads as a constraint rather than a demonstrated engineering gain.
2. Without the starting size or a clear object of measurement, the scale claim is difficult to interpret. A reader cannot tell whether the increase refers to tokens, messages, turns, or another quantity.

**How to change it**
1. Keep the existing figures and add [prior context size, reduction from baseline, or downstream performance/reliability effect].
2. Specify the baseline and the measured quantity after “raw conversation,” using [starting and ending token, message, or turn counts] if available.

*raised by content, wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under fan-out load.

**Problem**
1. [Important] The concurrency and cache changes do not by themselves establish that all deadlocks and lost results were removed. *(about 3–8 words to replace)*
2. [Important] The deadlock and lost-result improvement has no scale or comparison. *(adds about 3–8 words)*
3. [Polish] “Under fan-out load” is too specialized without a scope signal. *(adds about 2–6 words)*

**Why**
1. The changes can address pool-exhaustion deadlocks and prevent incomplete results from entering the cache, but other dependency cycles, shared-resource contention, cancellation paths, retries, or failure handling can still cause these failures. The absolute claim therefore overstates what the implementation alone proves.
2. The reader can understand what broke but cannot judge how often it occurred, how much load was involved, or how substantial the fix was. A failure-rate change or reproduced fan-out level would make the result more persuasive.
3. The phrase tells a technical reader the condition but not how demanding it was. Concurrency, request volume, or test conditions would make the result easier to assess.

**How to change it**
1. Soften the claim to “Reduced nested-pool deadlocks and lost tool results under fan-out load by separating concurrency pools and gating cache writes on successful stream completion,” or report the measured reduction if one was established.
2. Add [before-and-after failure rate, reproduced fan-out level, or number of affected tool calls] after the result, if measured.
3. Add [concurrency, request volume, or test condition] after the phrase, if measured.

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metrics integration has no stated outcome or capability enabled. *(adds about 3–8 words)*

**Why**
The reader can see that eight metrics were added but cannot tell why the integration mattered to the framework or its users. The count establishes scope, not value.

**How to change it**
Add the resulting capability or change after “evaluation module,” such as [evaluation workflow, coverage, or user-facing capability enabled], using a measurable result if one exists.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not by itself establish that the evaluator validly tracks degradation. *(about 2–6 words to replace)*
2. [Error] The phrase “Showed the evaluator tracks” is grammatically incorrect for a completed project. *(adds 1 word)*
3. [Polish] The degradation experiment is described abstractly and does not say what the evaluator capability enabled. *(adds about 3–8 words)*

**Why**
1. A Kendall correlation of 0.89 demonstrates a strong monotonic association between degradation and evaluator scores, but validity also depends on the degradation design, score direction, trial independence, and statistical uncertainty. The current wording therefore claims more than the statistic alone supports.
2. The construction is missing “that,” and “tracks” conflicts with the completed-project framing. The grammatical error can distract from the otherwise specific experimental result.
3. A reader must parse the experimental manipulation before reaching the practical meaning of the result. Even after that, “tracks injected degradation” does not show whether the capability supported validation, regression testing, or another workflow.

**How to change it**
1. State that the evaluator’s scores showed a Kendall correlation of 0.89 with injected degradation across 400+ report-level trials, or add [supporting validation and uncertainty analysis] if available.
2. Change the phrase to “Showed that the evaluator tracked,” then use the more precise correlation wording if the result was measured as described.
3. Describe the manipulation in plain language if possible and add [evaluation decision or workflow enabled] while retaining the Kendall correlation as proof.

*raised by content, wording*

> triage branch

**Problem**
[Important] The triage/backlog bullet is out of place in Research-Agent Evaluation Framework and repeats the internship achievement. *(saves about 20 words if removed)*

**Why**
The other bullets establish a coherent citation and faithfulness evaluation project, while this line describes industrial diagnostics operations. Its placement makes the project narrative less focused and weakens the apparent connection between the project title and its work.

**How to change it**
Remove or replace this bullet under Research-Agent Evaluation Framework; keep the diagnostics achievement under Mobility Systems Company unless the candidate has a distinct project-specific result to state.

*raised by narrative*

> triage branch

**Problem**
[Important] The evaluator project should not include the unrelated triage/backlog achievement. *(saves about 20 words if removed)*

**Why**
The metrics integration and injected-degradation experiment form a coherent evaluation narrative, but the triage line describes industrial diagnostics operations. Keeping it here makes the project’s focus unclear and duplicates the internship achievement.

**How to change it**
Remove or replace b2 with work that belongs to the evaluation framework; keep the diagnostics result under Mobility Systems Company unless it represents a distinct project achievement.

*raised by narrative*

## Set aside (8)

- s2:e1:b0: The phrase "by 4x" quantifies the reduction but does not show the original or resulting GPU-memory usage.
- s2:e1:b1: "Keep it there" does not clearly state what the load tests prevent or how they relate to the 180 ms latency. (and 1 more like it)
- s3:e1:b2, s2:e0:b5: “Cut the pending-case backlog by two-thirds with a triage branch” presents a causal impact that the line does not substantiate. (and 4 more like it)
- s2:e0:b1: The phrase "each of 3 specialist agents and an independent reviewer" makes it unclear whether the reviewer is also limited to in-scope signals. (and 1 more like it)
- s2:e0:b4: The bullet repeats "fine-tuning" and "assistant-only loss masking" from b0 without adding a distinct outcome. (and 1 more like it)
- s2:e0:b5: "ML-extracted features" is compressed technical phrasing that would be clearer as "features extracted by ML models."
- whole resume, order: Within PROJECTS, keep Agent Runtime Suite before Research-Agent Evaluation Framework; its Aug 2025–Present dates already make it the clearest current work.
- skills: LangGraph is listed under ML & Agents, but no entry names or clearly describes its use; a reader would expect it to appear in the Agent Runtime Suite or Research-Agent Evaluation Framework work. (and 1 more like it)
