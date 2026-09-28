# case-4

## Résumé

```
Jordan Lee
+1 (555) 010-2468 | jordan.lee@example.com | example.com/code/jordan-lee
Date of birth: 14 Mar 1999 | Nationality: Canadian
EDUCATION
Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026
Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022
EXPERIENCE
Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025
- Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use
trajectories with assistant-only loss masking.
- Designed a routing layer that limits each of 3 specialist agents and an independent reviewer
to their in-scope signals, keeping every finding traceable to its source data.
- Applied GRPO with grouped tool-use rollouts and a composite reward, cutting end-to-end
latency 5% versus the SFT baseline with no loss in diagnostic accuracy.
- Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy,
citation quality and latency before each release.
- Fine-tuned the adapter with assistant-only loss masking so the model would learn to
reproduce the tool outputs more faithfully.
- Built a diagnostics triage branch for an industrial inspection system that screens 800+
sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in
the first quarter after launch.
Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024
- Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16
mixed precision.
- Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor
reads, and added load tests to keep it there.
- Maintained the CI pipeline for the perception team’s model releases and adds automated
regression checks that shortened release cycles to 3 days.
- Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-
letter handling, removing the nightly backlogs that delayed morning dispatch.
PROJECTS
Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present
- Drove adoption of AI-first engineering practices across the platform, accelerating delivery
and improving outcomes for downstream teams.
- Kept working context under 10K tokens across a 100-turn stress test while the raw
conversation grew 100x, using budgeted context layers and staged compaction.
- Separated concurrency pools and gated cache writes on stream completion, removing nested-
pool deadlocks and lost tool results under fan-out load.
Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025
- Integrated 8 citation and faithfulness metrics into an open-source research-agent
framework’s evaluation module.
- Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across
400+ report-level trials that removed citations, sources and claims.
- Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor
signals per case using ML-extracted features.
SKILLS
Programming: Python, TypeScript, SQL, Bash, Git
ML & Agents: PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation
```

## Reviewer 1

9 errors, 22 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] Personal details that are not relevant to hiring are included and should be removed.

**Why**
Date of birth and nationality are not part of the evidence a reader is meant to weigh for these roles. Including them adds potentially sensitive information without strengthening the candidacy.

**How to change it**
Delete the entire personal-details phrase, including “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

> Cut the pending-case backlog by two-thirds

**Problem**
[Error] The diagnostics triage achievement is repeated with inconsistent backlog-reduction figures.

**Why**
The two bullets describe the same screening method, signal volume, and backlog outcome, so a reader may interpret them as duplicated claims rather than separate work. The different figures—68% and two-thirds—also create doubt about which result is correct.

**How to change it**
Remove or replace the repeated bullet in Research-Agent Evaluation Framework, or use one consistent percentage in both bullets if they describe the same achievement; if they are separate, add the distinguishing scope or context.

> Cut the pending-case backlog by two-thirds

**Problem**
[Error] The diagnostics triage achievement is repeated with inconsistent backlog-reduction figures.

**Why**
The two bullets describe the same screening method, signal volume, and backlog outcome, so a reader may interpret them as duplicated claims rather than separate work. The different figures—68% and two-thirds—also create doubt about which result is correct.

**How to change it**
Use one consistent percentage in the two bullets, or clarify the separate scope and outcome if these were genuinely different achievements.

> Jun 2022 ... May 2023

**Problem**
[Important] The résumé leaves a ten-month period unexplained between the B.S. and the first listed job. *(adds about 4–10 words plus dates)*

**Why**
The dates show the B.S. ending in June 2022 and the Junior Software Engineer role beginning in May 2023, so a reader may wonder whether the period reflects employment, study, or another activity. An unexplained gap can prompt questions before the reader reaches the stronger technical evidence.

**How to change it**
Add the candidate’s actual [study, work, project, or other activity] for that period, with dates, if it is relevant and can be documented; otherwise leave the timeline unchanged rather than inventing an explanation.

> Agent Runtime Suite

**Problem**
[Important] PROJECTS should appear above EXPERIENCE so the current agent-systems work establishes the résumé’s direction first.

**Why**
Agent Runtime Suite is the current role and Research-Agent Evaluation Framework is recent, while the listed employment is older. Leading with the projects would make the present machine-learning and agent-systems focus easier to identify during a quick scan.

**How to change it**
Move the complete PROJECTS section above EXPERIENCE, keeping Agent Runtime Suite before Research-Agent Evaluation Framework.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The diagnostic-accuracy improvement has no baseline or evaluation context. *(adds about 4–10 words)*

**Why**
A hiring reader cannot judge the size or credibility of a 35% improvement without knowing what it was measured against. The percentage could represent a relative increase, an absolute-point increase, or a comparison across different evaluation conditions.

**How to change it**
Add the comparison in brackets, such as “from [baseline accuracy] to [post-tuning accuracy] on [evaluation set]”; use absolute values or clarify that 35% is a relative increase if accurate.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, keeping every finding traceable to its source data.

**Problem**
1. [Error] The routing design does not establish end-to-end provenance merely by restricting agents to in-scope signals.
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

> Applied GRPO with grouped tool-use rollouts and a composite reward, cutting end-to-end latency 5% versus the SFT baseline with no loss in diagnostic accuracy.

**Problem**
[Important] The accuracy claim should state that accuracy was maintained relative to the SFT baseline. *(adds about 3 words)*

**Why**
“No loss” is indirect and leaves the comparison implicit. Naming the SFT baseline makes the result easier to verify and ties the claim directly to the experiment.

**How to change it**
Replace “with no loss in diagnostic accuracy” with “while maintaining diagnostic accuracy relative to the SFT baseline.”

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency before each release.

**Problem**
1. [Important] The checkpoint-comparison harness has no stated decision or improvement resulting from its use. *(adds about 3–8 words)*
2. [Important] The evaluation-harness bullet uses duty framing and omits the serial comma.

**Why**
1. The reader can see that the team used the harness to compare 14 checkpoints, but not whether it selected a release candidate, caught regressions, or improved release confidence. Adoption shows usefulness only indirectly.
2. “Wrote the evaluation harness the team used” foregrounds a responsibility instead of the stronger result—comparison of 14 checkpoints. The list also lacks the serial comma if the résumé is using standard serial-comma punctuation elsewhere.

**How to change it**
1. Add the resulting decision or benefit in brackets, such as “enabling [release selection, regression detection, or other concrete outcome].”
2. Lead with the comparison result by moving “compare 14 adapter checkpoints” earlier, and change the list to “accuracy, citation quality, and latency.”

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Important] The assistant-only loss-masking bullet describes an intention rather than an observed result and repeats the fine-tuning work in b0.

**Why**
A hiring reader needs to know what improved after the training intervention, not only what the model was meant to learn. Without an evaluation criterion, “more faithfully” cannot establish whether tool-output reproduction actually changed.

**How to change it**
Remove this duplicate bullet or fold the implementation detail into b0; if retained as distinct work, replace the intended-effect ending with the observed outcome in brackets and add [metric] versus [baseline].

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.

**Problem**
[Polish] The phrase “with ML-extracted features” does not identify the specific technical contribution supporting triage.

**Why**
The 68% backlog result establishes value, but a machine-learning engineering reader still cannot tell how the model or features supported the triage decision. The compressed phrase also makes the mechanism harder to scan.

**How to change it**
Replace “ML-extracted features” with [model or feature-extraction method]-derived features, if accurate; if space permits, simplify “pending-case backlog” to “backlog of pending cases.”

> assistant-only loss masking

**Problem**
[Error] The adapter fine-tuning achievement is repeated in two bullets without a distinct outcome.

**Why**
Both bullets describe assistant-only loss masking during adapter fine-tuning, so the reader may think the same work is being claimed twice. The duplicate consumes space that could instead establish a separate technical contribution or result.

**How to change it**
Retain the accuracy result in b0 and remove b4, or fold b4’s implementation detail into b0 only if it describes the same training run; otherwise distinguish the work with a separate measured outcome.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The claimed 4x total fine-tuning-memory reduction from switching FP32 to BF16 is incorrect.
2. [Polish] The phrase “by 4x by switching” repeats the same connector and interrupts the result-method structure.

**Why**
1. BF16 uses roughly half the bytes of FP32 for eligible tensors, but mixed-precision fine-tuning commonly retains FP32 parameter copies, gradients, optimizer state, or other buffers. Precision switching alone therefore does not generally establish a 4x reduction in total fine-tuning memory, and the current claim can undermine technical credibility.
2. The duplicated “by” makes the sentence harder to scan and briefly obscures whether 4x describes the result or the method. A cleaner construction would present the reduction once and then name the precision change.

**How to change it**
1. Change the figure to the measured reduction attributable to the change; if no separate measurement exists, state that BF16 reduced memory for eligible tensors by approximately 2x rather than claiming a 4x total reduction.
2. Replace the second “by” with “after” or remove the repeated connector, subject to the corrected memory figure.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.

**Problem**
1. [Error] The latency bullet incorrectly credits load tests with keeping production p95 latency at 180 ms.
2. [Important] The load-test claim does not say what the tests measured or what latency threshold they enforced. *(adds about 3–8 words)*
3. The latency bullet uses vague wording and a long chain of methods that weakens scanning clarity.

**Why**
1. Caching and batching can produce the stated reduction under a representative workload, but load tests only measure behavior under tested conditions. They do not provide ongoing production control or monitoring, so the current wording overstates what the tests established.
2. A technical reader can identify the testing activity but cannot tell how it protected the 180 ms result. Without the workload, metric, or threshold, the testing contribution is difficult to assess.
3. “Keep it there” does not identify what the tests prevent or how they relate to 180 ms. Placing the result before multiple methods also makes the operational impact less immediately readable.

**How to change it**
1. If 180 ms was measured only in load tests, replace the ending with “in load tests”; if production monitoring confirmed the result, name that monitoring instead of saying load tests kept the latency there.
2. Replace or supplement the ending with [load-test condition or p95 latency threshold], if accurate.
3. Replace “keep it there” with [specific test threshold or condition], and cut or move the secondary testing detail if needed so the latency result remains easy to scan.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The past-tense opening conflicts with the present-tense verb in an ended role.
2. [Important] The release-cycle result gives an endpoint but no baseline or size of improvement. *(adds about 2–6 words)*
3. [Important] “Maintained the CI pipeline” is too broad and frames the work as a technical responsibility rather than a concrete improvement.
4. [Important] “Maintained the CI pipeline” frames the work as a responsibility rather than leading with what was changed or improved.

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

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog and dispatch improvement is stated without a measure of how much it changed. *(adds about 3–8 words)*
2. [Important] The operational impact is buried after a long methods list.

**Why**
1. The reader understands the operational benefit but cannot judge its size or verify how much dispatch reliability improved. A before-and-after count, delay, or percentage would make the result more credible.
2. A scanner may reach “migrated 30 robot-fleet services” and miss the more important dispatch result at the end. Leading with or moving the impact closer to the migration result would make the bullet’s value clearer.

**How to change it**
1. Add [backlog count or dispatch delay before and after], or [the percentage of dispatches no longer delayed], if measured; move this impact earlier in the bullet if space permits.
2. Move the backlog or dispatch result immediately after the migration result, without changing the underlying claim.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The AI-first adoption claim does not identify the practices introduced or a concrete result. *(adds about 5–12 words)*

**Why**
“AI-first engineering practices” gives no evidence of the technical or organizational work behind the adoption claim. “Accelerating delivery and improving outcomes” is a generalization without a scale, so a reader cannot tell what changed for downstream teams.

**How to change it**
Add one specific practice or implementation detail after “AI-first engineering practices,” such as [concrete workflow, platform capability, or engineering process introduced], and replace the broad outcome with [delivery improvement] and, if accurate, [specific downstream-team outcome].

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

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under fan-out load.

**Problem**
1. [Important] The concurrency and cache changes do not by themselves establish that all deadlocks and lost results were removed.
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

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metrics integration has no stated outcome or capability enabled. *(adds about 3–8 words)*

**Why**
The reader can see that eight metrics were added but cannot tell why the integration mattered to the framework or its users. The count establishes scope, not value.

**How to change it**
Add the resulting capability or change after “evaluation module,” such as [evaluation workflow, coverage, or user-facing capability enabled], using a measurable result if one exists.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not by itself establish that the evaluator validly tracks degradation.
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

> triage branch

**Problem**
[Important] The triage/backlog bullet is out of place in Research-Agent Evaluation Framework and repeats the internship achievement.

**Why**
The other bullets establish a coherent citation and faithfulness evaluation project, while this line describes industrial diagnostics operations. Its placement makes the project narrative less focused and weakens the apparent connection between the project title and its work.

**How to change it**
Remove or replace this bullet under Research-Agent Evaluation Framework; keep the diagnostics achievement under Mobility Systems Company unless the candidate has a distinct project-specific result to state.

> triage branch

**Problem**
[Important] The evaluator project should not include the unrelated triage/backlog achievement.

**Why**
The metrics integration and injected-degradation experiment form a coherent evaluation narrative, but the triage line describes industrial diagnostics operations. Keeping it here makes the project’s focus unclear and duplicates the internship achievement.

**How to change it**
Remove or replace b2 with work that belongs to the evaluation framework; keep the diagnostics result under Mobility Systems Company unless it represents a distinct project achievement.

## Reviewer 2

## Highest-priority changes

1. **Remove date of birth and nationality.**  
   They are not needed for most Canadian/U.S. technical applications and can introduce bias or create work-authorization questions. Include work authorization only if relevant to the application.

2. **Remove the duplicated fine-tuning claim.**  
   The first and fifth Mobility Systems bullets both describe assistant-only loss masking. Keep the stronger, quantified result and replace or remove the other. Repeating the same technical contribution makes the experience look padded.

3. **Investigate the duplicated backlog metric.**  
   The Mobility Systems role and Research-Agent Evaluation Framework both claim reducing a pending-case backlog involving 800+ sensor signals. This looks like an accidental copy, an attribution problem, or an implausible overlap. Keep the accomplishment under the correct entry and replace the other bullet with a distinct result.

4. **Correct the grammar error in the Eastern Robotics CI bullet.**  
   “Maintained” and “adds” are inconsistent in tense. Make the entire bullet past tense.

5. **Clarify the relationship between the projects and your employment.**  
   The projects contain work that appears closely related to the Mobility Systems role, especially the sensor-triage bullet. Identify whether each project was independent, open-source, academic, or part of your employment. This prevents recruiters from questioning ownership or double-counting.

6. **Add links where they strengthen credibility.**  
   The code URL should be a clickable, complete URL. For the open-source evaluation framework, include the repository, pull request, or contribution link if available. For the Agent Runtime Suite, add a link only if the work is public and safe to disclose.

---

## Header

### `Jordan Lee`
- Keep the name prominent.
- Use consistent formatting for the phone number, email address, and link.
- Verify that the code portfolio URL works without requiring unusual navigation.
- Consider adding a LinkedIn profile only if it is complete and consistent with the resume.

### `Date of birth: 14 Mar 1999`
- Remove it.
- It does not help qualify you for ML/software roles and may create unnecessary screening issues.

### `Nationality: Canadian`
- Remove it unless a specific application explicitly requests it.
- If you need to establish eligibility, use a separate work-authorization statement tailored to the country and job.

---

## Education

### `Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026`
- Keep the expected graduation date; it is useful for recruiting.
- Add a specialization, thesis, or selected coursework only if it directly supports the target roles and you have space.
- Make sure the degree format is consistent with the bachelor’s entry.
- If your current program is the most relevant credential, placing Education before Experience is reasonable; otherwise, put relevant Experience first.

### `Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022`
- Verify the location. The use of “USA” for one institution and “Country” for another looks unfinished or anonymized.
- Consider adding honors, GPA, or relevant coursework only if strong and relevant. Do not add them merely to fill space.
- If the degree included robotics, controls, embedded systems, signal processing, or ML coursework relevant to your target roles, surface that selectively.

---

## Mobility Systems Company

### Role and dates
`Machine Learning Engineering Intern | ... | Oct 2024 - May 2025`
- The title is clear.
- If this was a part-time, research, or co-op position, indicate that only if it helps explain the arrangement.
- Ensure the dates do not conflict with your master’s enrollment unless the work was part-time or during a scheduled break.

### `Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.`
- Keep the 35% result, but specify what “diagnostic accuracy” means elsewhere in the bullet or surrounding context: for example, the evaluation measure or baseline definition.
- Clarify whether this was a relative or percentage-point improvement. The distinction matters.
- Explain “domain adapter” and “validated tool-use trajectories” enough for a general ML recruiter to understand the contribution.
- Keep the loss-masking detail if the target roles are LLM/agent-focused; otherwise, it may be too implementation-heavy without additional context.
- This is currently one of the strongest bullets, but it needs a clearer evaluation context.

### `Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, keeping every finding traceable to its source data.`
- Clarify the practical result of the routing layer. The current bullet explains the design and intended benefit but not whether it improved accuracy, reduced unsupported findings, or improved auditability.
- Specify whether the “3 specialist agents” and reviewer were deployed, evaluated experimentally, or only prototyped.
- Replace vague wording such as “in-scope signals” with a term that is understandable to readers outside the project, or define it elsewhere.
- Keep the traceability claim only if you can explain how it was measured or enforced.

### `Applied GRPO with grouped tool-use rollouts and a composite reward, cutting end-to-end latency 5% versus the SFT baseline with no loss in diagnostic accuracy.`
- This is technically distinctive and should remain for LLM/agent roles.
- Clarify whether GRPO itself caused the latency reduction or whether the rollout/training configuration did. The causal relationship is not obvious.
- Define the evaluation conditions behind the latency comparison: same hardware, workload, and model size if relevant.
- “No loss” is weaker than a quantified accuracy comparison. Add the numerical comparison if available.
- Avoid overloading the bullet with unexplained acronyms if applying to general software roles.

### `Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency before each release.`
- Keep this bullet.
- Add the scale or operational consequence if available: runtime, number of test cases, release frequency, or defects caught.
- Use consistent punctuation in the metric list; the current list should be grammatically parallel.
- Clarify whether the harness was automated in CI or run manually. That distinction materially affects its engineering value.
- “Before each release” is useful, but specify whether it became a required release gate.

### `Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.`
- Remove this bullet because it duplicates the first bullet.
- If it represents a separate contribution, distinguish it by adding a different result, dataset, or evaluation finding rather than repeating the method.
- The phrase “more faithfully” is qualitative and weaker than the quantified accuracy result already present.

### `Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.`
- Keep this if it belongs to the internship.
- Clarify what “triage branch” means to a reader unfamiliar with the system.
- Explain whether the 68% reduction was measured against a pre-launch baseline and whether other process changes contributed.
- The combination of 800+ signals and a 68% operational result is compelling; preserve both if accurate.
- Make sure the same accomplishment is not repeated in the Research-Agent project.

---

## Eastern Robotics Co.

### `Junior Software Engineer | ... | May 2023 - Jul 2024`
- The title is clear.
- Consider whether “Junior” helps or unnecessarily undersells you now. Retain the official title if accuracy is important, but you can emphasize the technical scope through the bullets.

### `Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.`
- Keep the quantified improvement.
- Clarify whether “4x” means 75% lower memory usage or a fourfold reduction in consumption. Recruiters may interpret the wording differently.
- Add the practical impact if available: larger batch size, larger model, longer sequence, or ability to run on a particular GPU class.
- “Perception models” is broad; identify the relevant model type or workload if space permits.

### `Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.`
- Keep this; it is one of the clearest engineering bullets.
- Consider separating the performance change and the testing/maintenance result only if the line becomes too dense.
- Clarify the traffic or test scale so the latency improvement has context.
- “Keep it there” is informal and should be replaced with more precise wording about regression prevention or performance monitoring.
- State whether the 420 ms and 180 ms values were measured under comparable load.

### `Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.`
- Correct the tense inconsistency: the bullet begins in past tense but switches to present tense.
- Clarify whether you maintained an existing pipeline, redesigned it, or added the checks yourself.
- Explain what “3 days” measures: total release time, time between releases, or time from code merge to deployment.
- Identify the regression checks if relevant, such as accuracy, latency, memory, or model compatibility.
- This bullet may be stronger if the ownership and measurable result are more clearly connected.

### `Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.`
- Keep this; it demonstrates system design and operational impact.
- Clarify whether you led the migration or contributed as part of a team.
- Add the queue technology only if it is relevant and not already obvious from the skills section.
- Quantify the operational improvement if available: failed jobs, dispatch delay, processing time, or incident reduction.
- Define “dead-letter handling” only if applying to a non-infrastructure audience; otherwise, it is a useful technical detail.

---

## Projects

### `Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present`
- “Owner” is ambiguous. Clarify whether this means sole developer, project lead, maintainer, or product owner.
- The start date is in the future relative to some possible resume timelines, so verify that it is accurate and consistent with the current date.
- Include a repository or demo link if public.
- The technology field should include only tools you actually used in the listed bullets. Consider adding concurrency, caching, or orchestration technologies if they are central and truthful.

### `Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.`
- Remove or substantially replace this bullet.
- It is vague, promotional, and unsupported by metrics. “AI-first,” “accelerating delivery,” and “improving outcomes” do not tell the reader what you built or what changed.
- If you retain the accomplishment, quantify adoption, delivery time, usage, or downstream impact. Otherwise, use the space for a concrete technical contribution.

### `Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.`
- Keep this if the project targets agent-runtime or LLM infrastructure roles.
- Clarify what “working context” includes and how it was measured.
- Explain the baseline or comparison point for the 100x growth. As written, the claim is technically interesting but difficult to interpret.
- State the quality or task-completion effect of compaction. Keeping the context small is less persuasive if it degraded agent performance.
- Avoid mixing “tokens,” “turns,” and “100x” without defining the test conditions.

### `Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under fan-out load.`
- Keep this; it shows debugging and systems design.
- Quantify the frequency or severity of the deadlocks/lost results before and after the change if possible.
- Clarify what “fan-out load” means in terms of concurrent tasks, agents, or requests.
- Explain whether the fix was validated through stress tests, production use, or both.
- This bullet is strongest when paired with a measurable reliability or throughput result.

---

## Research-Agent Evaluation Framework

### `Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025`
- “Contributor” is acceptable for open-source work, but specify your ownership if you authored a module, led a pull request, or maintained a feature.
- Add the repository or merged pull-request link.
- Clarify whether the dates represent your contribution period or the project’s overall duration.
- Make sure the dates and contribution do not misleadingly imply employment if this was an independent project.

### `Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.`
- Keep this.
- Specify whether you implemented, adapted, or merely configured the metrics.
- Add the effect on the project if available: evaluation coverage, runtime, accepted pull requests, or number of users.
- Clarify “citation and faithfulness metrics” enough to distinguish citation correctness, source attribution, claim support, and general answer quality.

### `Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.`
- Keep the 0.89 and 400+ figures.
- Explain what the correlation was between: injected degradation level and evaluator score, for example. The current wording requires the reader to infer the comparison.
- Clarify whether 0.89 is statistically significant or whether confidence intervals were calculated, if relevant.
- Make the degradation categories parallel and precise. “Removed citations, sources and claims” may refer to different experimental manipulations.
- State why the result matters: it demonstrates sensitivity, ranking quality, or robustness of the evaluator.

### `Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.`
- Remove this unless it is genuinely part of this project.
- It appears to duplicate the Mobility Systems internship bullet and does not fit naturally with a research-agent evaluation framework.
- If this belongs to the internship, move it there and use this project space for an evaluation-specific result.
- If the two projects used the same system, explicitly distinguish your contribution and the project context so it does not look like duplicated credit.

---

## Skills

### `Programming: Python, TypeScript, SQL, Bash, Git`
- Separate Git from programming languages; it is a version-control tool.
- Add proficiency levels only if the format is consistent and defensible; otherwise, omit levels.
- Include languages or tools demonstrated in the bullets, such as C/C++, Java, Docker, Linux, or cloud platforms, only if you genuinely use them and want those roles.
- The current list is credible but may undersell your systems and deployment experience.

### `ML & Agents: PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation`
- Keep the specialized items because they align with the experience.
- Organize the skills into clearer categories, such as ML frameworks, fine-tuning, agent frameworks, and evaluation, so recruiters can scan them more easily.
- Add technologies that are directly demonstrated in the bullets, such as mixed precision, model serving, distributed inference, queues, caching, or CI/CD, if accurate.
- Avoid listing concepts such as RAG or agent evaluation without indicating the tools or implementation depth elsewhere in the resume.
- Ensure every prominent skill is supported by either a bullet, project, coursework item, or portfolio evidence.

---

## Formatting and positioning

- Use a consistent date format throughout.
- Keep bullets to roughly one or two lines where possible; several currently wrap because they contain too many clauses.
- Lead each bullet with the contribution, then the method, then the measurable result. Your strongest bullets already follow this pattern.
- Use past tense for completed roles and projects; use present tense only for the current project.
- Put the most relevant experience before Education if applying for engineering roles, unless the master’s program is central to the target position.
- Consider removing the generic “Projects” entry for a project that does not show measurable technical work, especially the AI-first practices bullet.
- Prioritize demonstrated impact over tool names. The resume is strongest when it shows accuracy, latency, memory, release, reliability, or backlog results.
- Be careful with confidential industrial details. Confirm that the company names, system descriptions, metrics, and model-training methods are permitted for external use.

## Reviewer 3

# Resume Review

## Overall assessment

You have a strong technical foundation for **machine learning engineering, LLM/agent evaluation, or applied AI engineering** roles. The strongest evidence is your combination of:

- Measurable ML and systems outcomes
- Tool-use and agent-evaluation experience
- Performance optimization
- Production-oriented engineering
- A coherent interest in reliable AI systems

The main problems are **redundancy, unclear ownership, one unsupported-sounding project bullet, inconsistent grammar, and insufficient positioning at the top of the resume**. The resume currently reads like a collection of strong experiments rather than a tightly selected case for one target role.

---

# Highest-priority changes

## 1. Remove personal information that does not belong

Remove:

- Date of birth
- Nationality

### Why

These details do not help establish technical qualifications and can create discrimination, privacy, or application-screening concerns. Nationality should only be included if a specific application requires work authorization information. If relevant, use a separate, accurate work-authorization statement rather than nationality.

Also consider adding:

- A LinkedIn profile, if strong and current
- A GitHub or portfolio link that leads directly to relevant code or projects
- Work authorization only if it is important for the target market or job

---

## 2. Add a target-position headline or short summary

The resume currently begins with contact information and education. A recruiter has to infer whether you are targeting:

- Machine learning engineering
- LLM engineering
- Applied research engineering
- Agent infrastructure
- ML platform engineering

### What to change

Add a concise positioning section immediately below the contact information that identifies:

- Your target technical area
- Your strongest methods or systems experience
- One or two high-value outcomes

Do not make it a generic objective statement. Its purpose is to make your intended role obvious within seconds.

### Why

Your experience spans model fine-tuning, agent systems, evaluation, infrastructure, and backend performance. That breadth is valuable, but without a clear framing it may look unfocused.

---

## 3. Eliminate duplicated achievements

The following accomplishments appear more than once:

- Fine-tuning with assistant-only loss masking
- The industrial diagnostics triage branch
- Screening 800+ sensor signals
- Reducing the pending-case backlog by approximately two-thirds

The duplication is especially serious because the triage work appears under:

- Mobility Systems Company
- Research-Agent Evaluation Framework

### What to change

Keep each achievement in only one place unless the two entries genuinely describe different implementations or contributions. If they are different, make the distinction explicit through the surrounding context, such as:

- Production system versus research framework
- Original implementation versus later adaptation
- Individual ownership versus contribution to another project

### Why

Repeated achievements make the resume look padded and create uncertainty about where the work actually occurred. A technical reviewer may question the accuracy of the experience history.

---

## 4. Fix chronology and project credibility

The `Agent Runtime Suite` is listed as beginning in August 2025, while the Mobility Systems internship ended in May 2025. That is not inherently a problem, but the project is marked “Present” while your master’s degree is also in progress.

### What to change

Clarify whether the project is:

- An independent project
- A university project
- Open-source work
- A startup or commercial project
- Work performed during employment

Also clarify the scope of “Owner.” If you are the sole developer, say so through the project role label or project context. If it is a team project, “Owner” may overstate your responsibility.

### Why

The project contains some of your most distinctive evidence, but its status and ownership are currently ambiguous.

---

# Section-by-section review

## Header and education

### Name and contact details

The contact line is clean, but `example.com/code/jordan-lee` looks like a placeholder or a generic code link.

### What to change

Use a verified, directly accessible portfolio or repository URL. Make sure it contains:

- The projects named on the resume
- Documentation
- Evidence of your individual contribution
- Results or evaluation details
- No broken links or empty repositories

### Why

Your projects are important to your candidacy. A reviewer who clicks the link should be able to validate the technical claims.

---

### Education

The education section is appropriately near the top for a current master’s student.

### What to change

Consider adding only relevant information if available:

- Relevant coursework for ML or systems roles
- Research focus
- Thesis topic
- Academic honors
- Teaching or research assistantship

Do not add coursework if it makes the resume crowded or is not relevant to the role.

### Why

Your professional experience is already stronger than a typical student resume. Education should support the technical story rather than dominate it.

### Potential issue

The locations use both `USA` and `Country`, and `Metro City` appears repeatedly.

### What to change

Use a consistent location format throughout. If the anonymized text reflects the actual resume, replace generic or placeholder locations with accurate city and country information.

### Why

Inconsistent or obviously placeholder locations can reduce credibility and create uncertainty about where you worked.

---

# Experience review

## Mobility Systems Company — Machine Learning Engineering Intern

This is currently the strongest section, but it contains six bullets, several overlapping concepts, and repeated fine-tuning work.

### Bullet 1: Diagnostic accuracy improvement

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

### What to change

Keep this as one of the leading bullets. Clarify, if possible:

- What “diagnostic accuracy” measures
- The evaluation set or test conditions
- Whether the 35% is relative or absolute improvement
- Your exact ownership of the fine-tuning and evaluation work

### Why

This is a strong quantified result, but “35%” can mean very different things. Technical reviewers will want to know whether it means a 35-percentage-point gain or a 35% relative improvement.

Also, “domain adapter” may be less immediately understandable than the underlying model adaptation method. Make sure the skills section and surrounding bullets explain the approach clearly.

---

### Bullet 2: Multi-agent routing and traceability

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, keeping every finding traceable to its source data.

### What to change

Clarify the result or operational benefit of the routing layer. The current bullet describes architecture and a design principle, but does not show whether it improved:

- Accuracy
- Citation or evidence quality
- Error isolation
- Safety
- Latency
- Debuggability
- Review time

Also explain whether “independent reviewer” means a separate model, a human review process, or another agent.

### Why

The architecture is relevant to reliable agent systems, but the value is currently implied rather than demonstrated.

---

### Bullet 3: GRPO and latency improvement

> Applied GRPO with grouped tool-use rollouts and a composite reward, cutting end-to-end latency 5% versus the SFT baseline with no loss in diagnostic accuracy.

### What to change

Keep this if the target role values reinforcement learning or agent training. Clarify:

- What the composite reward measured
- Why latency changed as a result of the method
- Whether the comparison used the same hardware and workload
- How “no loss” was established

### Why

This is technically interesting, but the relationship between GRPO and reduced latency is not immediately obvious. Without experimental context, a reviewer may wonder whether the latency improvement came from the training method, the rollout configuration, or an unrelated system change.

---

### Bullet 4: Evaluation harness

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency before each release.

### What to change

Keep this bullet and consider giving it higher priority. Add the engineering scope if available, such as:

- Test automation
- Reproducibility
- Dataset size
- Continuous integration
- Release gating
- Number of users or teams

Correct the punctuation by adding a comma between “accuracy” and “citation quality.”

### Why

This is one of your best production-engineering bullets. It demonstrates that you did not only train models; you created a repeatable process for deciding whether models were ready to release.

---

### Bullet 5: Duplicate fine-tuning claim

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

### What to change

Remove this bullet or replace it with a distinct accomplishment that is not already covered by the first bullet.

### Why

It repeats the method from the first bullet without adding a new result. It also weakens the section because it spends valuable space explaining a mechanism already associated with a quantified achievement.

---

### Bullet 6: Industrial inspection triage system

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.

### What to change

Keep this as a major bullet, but clarify:

- Whether you built the full system or a specific branch
- What “triage branch” means
- The baseline period for the 68% reduction
- Whether the reduction was attributable solely to your work
- Whether this was deployed in production

### Why

This is an excellent systems-impact result. However, the terminology may be internal and difficult for an external reader to understand. It should be the only version of this achievement unless the project entry describes a genuinely separate implementation.

---

## Eastern Robotics Co. — Junior Software Engineer

This section provides useful systems evidence, but the first bullet should probably be the most role-relevant one for your target position.

### Bullet 1: BF16 memory reduction

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

### What to change

Keep it, but clarify:

- Whether the 4x reduction was measured at the same batch size
- Whether model quality or training throughput changed
- Whether you implemented the training changes or primarily configured an existing framework

### Why

This is a strong quantified optimization result. The phrase “by switching” may make the contribution sound simpler than it was if you also handled compatibility, stability, monitoring, or training validation.

---

### Bullet 2: API latency reduction

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.

### What to change

Keep this bullet. Separate the performance result from the testing or reliability work if the line becomes too dense. Clarify:

- Request volume
- Cache behavior
- Whether the measurement was production or benchmark data
- What “keep it there” means operationally

### Why

This is one of the clearest software engineering bullets. It has a baseline, an endpoint, a concrete intervention, and a validation practice.

---

### Bullet 3: CI and regression checks

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

### What to change

Fix the tense and grammar: the subject is past-tense, so “adds” is inconsistent. Also clarify what the original release cycle was and whether “3 days” means three days total or a three-day reduction.

### Why

The grammatical error is noticeable, and the impact is ambiguous. “Maintained” may also undersell your contribution if you designed or substantially extended the regression system.

---

### Bullet 4: Event queue migration

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

### What to change

Keep this bullet. Clarify:

- The queue technology, if relevant to the target role
- Whether you designed the migration or implemented an existing design
- How you validated the absence of backlogs
- Whether there were reliability or operational metrics

### Why

This is a strong distributed-systems bullet and differentiates you from candidates whose experience is limited to model experimentation.

---

# Projects review

## Agent Runtime Suite

### Bullet 1: Generic adoption claim

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

### What to change

Replace this type of claim with a concrete technical or measurable result. Specify:

- What practices you introduced
- How many engineers or teams adopted them
- What changed in delivery time, quality, or developer productivity
- How you measured the improvement

### Why

This is the weakest bullet in the resume. “AI-first,” “accelerating delivery,” and “improving outcomes” are broad claims without evidence. It also sounds like marketing language rather than an engineering accomplishment.

If you cannot substantiate the adoption and outcome claims, remove the bullet.

---

### Bullet 2: Context management

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

### What to change

Keep this bullet. Clarify:

- Whether the 100x growth refers to token count, message count, or another quantity
- How answer quality or tool-use reliability changed
- Whether the 10K-token limit was a design target or a hard system constraint
- How the stress test was constructed

### Why

This is a distinctive and relevant agent-infrastructure achievement. The result is compelling, but the measurement needs to be precise enough for a reviewer to reproduce or understand it.

---

### Bullet 3: Concurrency and cache correctness

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under fan-out load.

### What to change

Keep this bullet. Add an operational measure if available, such as:

- Failure rate before and after
- Concurrent request volume
- Stress-test size
- Number of reproduced failures eliminated
- Throughput impact

Also clarify whether you diagnosed an existing production issue or designed the system before deployment.

### Why

This bullet demonstrates real systems understanding. A metric would make the impact easier to evaluate, but the technical substance is already strong.

---

## Research-Agent Evaluation Framework

### Bullet 1: Evaluation metrics

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

### What to change

Clarify:

- Whether you authored the integrations or adapted existing implementations
- Whether the work was merged upstream
- Whether the metrics were validated against known failure cases
- Which metric categories were included

### Why

The bullet is relevant, but “integrated” does not establish the depth of the contribution. Open-source acceptance or adoption would provide important credibility if applicable.

---

### Bullet 2: Kendall correlation

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

### What to change

Keep this as the strongest project bullet. Clarify:

- What the correlation was between
- Whether 0.89 is statistically significant
- How degradation levels were generated
- Whether the trials were independent
- What “removed citations, sources and claims” means methodologically

### Why

This is a strong research-style result, but the current wording assumes the reader understands the evaluation setup. Technical reviewers will care about the experimental design and what the correlation validates.

---

### Bullet 3: Duplicate triage achievement

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

### What to change

Remove this bullet from the project unless it represents a genuinely separate contribution from the Mobility Systems work. If it is separate, clearly distinguish the dataset, system, role, and result.

### Why

As written, it appears to repeat the Mobility Systems internship bullet almost exactly. This is the largest credibility problem in the document.

---

# Skills section

## Programming

> Python, TypeScript, SQL, Bash, Git

### What to change

Keep the list, but organize it according to the target role. If you have meaningful experience with relevant tools, consider including categories for:

- Model training and inference
- Distributed systems or backend services
- Testing and evaluation
- Cloud or deployment
- Databases and queues

Only include technologies you can discuss in an interview.

### Why

The current skills section is accurate but underspecified relative to your experience. Your resume demonstrates more than general programming, but the skills section does not expose the full technical profile.

---

## ML & Agents

> PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation

### What to change

Separate frameworks, methods, and areas of expertise rather than placing them in one undifferentiated list. Ensure that every prominent skill is supported by an experience or project bullet.

Also consider whether `RAG` is sufficiently demonstrated in the resume. If it is not directly used in one of the listed projects or jobs, either add supporting evidence or remove it.

### Why

Recruiters and ATS systems scan skill categories quickly. Clear group names help them understand whether you are focused on:

- Model adaptation
- Reinforcement learning
- Agent orchestration
- Retrieval systems
- Evaluation methodology

The current category is useful but too broad.

---

# Narrative and positioning

## What is working

Your strongest narrative is:

1. Electrical and computer engineering foundation
2. Software and robotics systems experience
3. ML optimization and deployment
4. LLM fine-tuning and tool-use systems
5. Agent runtime and evaluation infrastructure

That is a compelling progression toward applied AI or ML systems engineering.

## What is missing

The resume does not explicitly connect these stages. A recruiter may see separate topics rather than a deliberate progression.

### What to change

Make the ordering and emphasis communicate that you build **reliable, evaluated, production-oriented ML and agent systems**, rather than simply listing exposure to many current technologies.

### Why

The resume’s differentiator is not just that you know LLM terms. It is that you connect:

- Model training
- Tool use
- Evaluation
- Systems reliability
- Production performance

That combination should be obvious before the reader reaches the final project bullet.

---

# Formatting and language issues

Fix the following:

- Inconsistent tense in the CI bullet: “adds” conflicts with the past-tense experience section.
- Missing comma in “accuracy, citation quality and latency.”
- Check whether `dead-letter` is consistently hyphenated.
- Ensure line breaks do not split words or create awkward visual wraps.
- Keep bullet punctuation consistent.
- Use consistent date formatting throughout.
- Check whether “Present” projects are sorted by relevance rather than merely by date.
- Avoid excessive use of internal terminology such as “triage branch” unless it is explained elsewhere.
- Verify that every numerical result has a clear baseline or comparison point.

---

# Recommended bullet ordering

Within each role, lead with the evidence most relevant to the role you want.

For an ML/LLM engineering target, the Mobility Systems section should prioritize:

1. Model or diagnostic accuracy improvement
2. Evaluation harness and release process
3. Agent routing and traceability
4. GRPO or tool-use training
5. Production triage impact

For a general software or ML systems target, Eastern Robotics could prioritize:

1. GPU memory reduction
2. API latency improvement
3. Event-driven fleet migration
4. CI and model-release reliability

The current ordering is reasonable, but the duplicated bullets consume space that should be used for differentiated evidence.

---

# Scores

| Dimension | Score | Main reason |
|---|---:|---|
| ATS readiness | 7/10 | Strong technical terms, but no target job description and limited role positioning |
| Summary/first impression | 4/10 | No summary or headline; target role must be inferred |
| Skills section | 7/10 | Relevant tools listed, but categories are broad and incomplete |
| Bullet quality | 7.5/10 | Several excellent quantified bullets, weakened by duplication and vague claims |
| Project quality | 7/10 | Strong technical work, but one generic bullet and one duplicated achievement |
| Narrative coherence | 7/10 | Good underlying progression, not explicitly framed |
| Credibility and consistency | 6/10 | Duplicate triage claim and unclear ownership reduce confidence |
| Presentation | 7/10 | Generally clean, assuming the rendered formatting is consistent |

**Overall: 6.8–7.2/10**

This is a strong foundation, but it needs a focused editing pass before submission.

---

# Change order

## Tier 1: Do these first

1. Remove the duplicated triage and fine-tuning claims.
2. Remove date of birth and nationality.
3. Add a clear target-role headline or summary.
4. Replace or remove the generic “AI-first engineering practices” bullet.
5. Resolve whether the triage achievement belongs to the internship, the project, or both.
6. Fix the grammar and punctuation errors.
7. Clarify the ownership and status of the `Agent Runtime Suite`.
8. Add baselines or definitions for the 35%, 68%, 4x, 5%, 0.89, and 100x figures where needed.

## Tier 2: Do next

1. Strengthen the evaluation-harness bullet with scope or adoption evidence.
2. Add outcomes to the agent-routing bullet.
3. Add validation context to the GRPO result.
4. Expand skills categories to reflect evaluation, deployment, testing, and systems work.
5. Make project contributions and open-source status explicit.
6. Standardize location, date, punctuation, and tense formatting.

## Tier 3: Optional polish

1. Improve the portfolio link and repository documentation.
2. Reorder bullets for the specific target role.
3. Add selected coursework or research information only if it supports the target job.
4. Reduce internal terminology that an external recruiter would not understand.

**Bottom line:** Keep the technical substance. The largest gains will come from removing repetition, making ownership and measurement precise, and presenting the resume as a focused application for ML/LLM systems engineering rather than as a broad list of AI-related work.

## Reviewer 4

## Highest-priority changes

1. Remove date of birth and nationality; they are generally inappropriate for a U.S.-focused résumé and can introduce bias.
2. Remove the duplicated fine-tuning bullet in the internship.
3. Remove the duplicated backlog bullet from the research project.
4. Replace or substantiate the generic “AI-first engineering practices” project bullet.
5. Fix the tense error in “maintained … and adds.”
6. Clarify ambiguous metrics such as “35%,” “4x,” and claims that problems were completely “removed.”
7. Reduce dense internal jargon so a recruiter can understand the work without knowing your system.

## Header

### Name
- **No change needed.** It is prominent and professional.

### Phone, email, portfolio/code URL
- Label the code URL or use a recognizable GitHub/portfolio domain. An unlabeled generic URL gives recruiters little reason to click.
- Add LinkedIn only if it is complete and consistent with the résumé.
- Make sure all links are clickable in the PDF and remain readable when parsed by an ATS.

### Date of birth and nationality
- **Remove both.** For most U.S. applications, neither belongs on a résumé.
- If work authorization is important, address that separately only when it is accurate and strategically useful. Nationality does not clearly communicate work authorization.

## Education

### Western State University
- Keep the degree, institution, location, and expected graduation date.
- Use consistent date punctuation throughout the document; your current hyphens should be standardized.
- Consider adding GPA only if it is strong and helps your candidacy.
- Since this is your current degree, relevant research, thesis work, or advanced coursework may be worth adding only if it directly supports the jobs you are targeting.

### Eastern Institute of Technology
- Keep the entry, but use the actual country name rather than a generic country label.
- GPA, honors, or distinctions should be included only if they are notable.
- Ensure the location format matches the master’s entry.

## Mobility Systems Company

### Company/title/date line
- The structure is good.
- Confirm that the internship end date is clearly historical and that the official title matches employment records.
- If the company is not recognizable, a short company descriptor may help, but only if space permits.

### “Improved diagnostic accuracy by 35%…”
- Clarify whether 35% is an absolute percentage-point increase or a relative improvement. The current wording is ambiguous.
- Identify the baseline or evaluation set sufficiently to make the result credible.
- Reduce or explain specialized phrases such as “domain adapter,” “validated tool-use trajectories,” and “assistant-only loss masking” if the target reader may not be an LLM specialist.
- Keep this bullet only if it is the main fine-tuning result; it overlaps heavily with the fifth bullet.

### “Designed a routing layer…”
- Clarify the practical impact beyond traceability. The architecture is described, but the business or evaluation benefit is not quantified.
- Simplify the wording around signal scope so the sentence is easier to parse.
- Explain what “independent reviewer” means if that role is technically important.
- Avoid “every finding” unless you verified complete coverage; absolute claims invite scrutiny.

### “Applied GRPO… cutting end-to-end latency 5%…”
- State how latency was measured and under what workload if possible.
- Clarify whether “no loss” means statistically unchanged, within a tolerance, or exactly unchanged.
- Explain the relationship between GRPO and latency. Reviewers may question how a training method directly reduced runtime latency unless the reward changed tool use, reasoning length, or routing behavior.
- Consider whether a 5% improvement is strong enough to lead with; it is useful, but less compelling than the accuracy and backlog results.

### “Wrote the evaluation harness…”
- Keep the checkpoint count; it adds useful scope.
- Add the effect on release quality, review time, or defect detection if you can substantiate it.
- Clarify whether you created the harness from scratch or extended an existing system.
- Use the serial comma consistently in lists.

### “Fine-tuned the adapter with assistant-only loss masking…”
- **Delete or consolidate this bullet.** It repeats the method already stated in the first bullet and does not add a separate outcome.
- Reconsider “reproduce the tool outputs.” That wording can imply the model memorized or generated tool results rather than correctly invoking and using tools. Make the actual objective technically precise.
- If retained, it needs a distinct measurement that is not already covered by diagnostic accuracy.

### “Built a diagnostics triage branch…”
- Move this higher, potentially to the first or second position, because it has the clearest operational impact.
- Clarify your individual contribution if this was a team effort.
- Connect the 68% reduction to a defined baseline and case volume so the result is credible.
- Ensure the claim does not over-attribute the entire backlog reduction to your component if other operational changes contributed.
- Keep the first-quarter time frame; it strengthens the result.

## Eastern Robotics Co.

### Company/title/date line
- No major structural change is needed.
- If “Junior” undersells work that was performed independently, do not change the official title; instead, let the scope of the bullets demonstrate level.
- Keep location and date formatting consistent with the rest of the résumé.

### “Cut GPU memory… by 4x…”
- Change “by 4x” because it is mathematically ambiguous. State the reduction in an unambiguous way.
- Add peak memory figures, model scale, or hardware context if available.
- Verify the technical attribution. BF16 mixed precision alone often does not produce a fourfold reduction from FP32, so be prepared to explain whether optimizer state, gradients, checkpointing, or another change contributed.
- Use consistent terminology for the models rather than “the perception models” if only one system was involved.

### “Reduced p95 API latency from 420 ms to 180 ms…”
- This is a strong bullet and should remain near the top.
- Add traffic volume, concurrency, or test conditions if available.
- Replace the informal phrase “keep it there” with a precise description of what the load tests prevented or enforced.
- Clarify whether caching and batching contributed separately or were deployed together, especially if you may be asked to explain the measurement.

### “Maintained the CI pipeline… and adds…”
- Fix the tense mismatch: “maintained” is past tense, while “adds” is present tense.
- Clarify whether the regression checks, rather than general pipeline maintenance, caused the release-cycle reduction.
- State the prior release-cycle duration if available; “shortened to 3 days” lacks a baseline.
- Consider separating maintenance from the higher-impact automation work conceptually, since routine maintenance is less compelling.

### “Migrated 30 robot-fleet services…”
- Keep the service count and reliability mechanisms; they demonstrate scale and engineering depth.
- Clarify whether these were actual services or scheduled jobs. Calling cron jobs “services” may be challenged if they were scripts or tasks.
- Quantify the eliminated backlog or dispatch delay if possible.
- Avoid “removing” as an absolute unless monitoring showed no recurrence over a meaningful period.
- Ensure “dead-letter” is not split across lines in the final PDF; line-break hyphenation can hurt ATS parsing.

## Projects

### Agent Runtime Suite title/role/technology/date line
- Replace “Owner” with a role label that communicates what you actually did and is understandable to recruiters.
- Add a repository or demo link if the project is public.
- Clarify whether this is personal, open-source, academic, or company work. “Across the platform” makes it sound organizational, which may be confusing under Projects.
- Confirm that “Multi-Agent Systems” is serving a useful technology-label function rather than acting as a broad keyword.

### “Drove adoption of AI-first engineering practices…”
- **Delete or substantially change this bullet.** It is generic, leadership-heavy, and unsupported.
- Specify the concrete practices, the people or teams affected, and measurable delivery or quality changes.
- Remove phrases such as “AI-first,” “accelerating delivery,” and “improving outcomes” unless they are backed by evidence.
- Ensure the scope matches a project you list as “Owner”; otherwise, it can sound inflated.

### “Kept working context under 10K tokens…”
- This is technically interesting, but define what “working context” and “raw conversation grew 100x” mean.
- Explain how the 100-turn stress test was constructed or evaluated.
- Clarify whether the 10K-token threshold was a requirement, a benchmark target, or an observed maximum.
- Add the effect on quality, cost, or latency if measured. Context compression is more compelling when paired with retained task performance.
- Use consistent capitalization and number formatting for token counts.

### “Separated concurrency pools…”
- Keep the concrete technical mechanisms.
- Add the load level or test scale under which the failures occurred.
- Avoid absolute claims such as “removing” unless validated by sustained production data or comprehensive stress tests.
- Explain the consequence of the deadlocks and lost results if it was operationally significant.
- Reduce the density of terms such as “nested-pool,” “stream completion,” and “fan-out load” if applying to broader software-engineering roles.

### Research-Agent Evaluation Framework title/role/technology/date line
- Add a repository, publication, or pull-request link if public.
- “Contributor” is appropriate, but make sure the bullets clearly distinguish your work from the broader framework.
- Consider naming the actual framework if disclosure is allowed; a generic name is less verifiable.

### “Integrated 8 citation and faithfulness metrics…”
- Specify whether the metrics were implemented, adapted, or connected from existing libraries.
- Add evidence that the contribution was accepted, tested, or used.
- Consider naming only the most important metric categories if all eight names would create clutter.
- Clarify the scope of the evaluation module affected.

### “Showed the evaluator tracks injected degradation…”
- This is a strong research-oriented bullet.
- Specify the Kendall statistic correctly and consistently, including the variant if relevant.
- Clarify what was ranked and how degradation levels were constructed.
- Note whether the correlation was statistically reliable if you have that analysis.
- Tighten the relationship among removed citations, sources, and claims; these may represent different degradation types and should not appear interchangeable.
- Keep the 400+ trial count because it adds credibility.

### “Cut the pending-case backlog…”
- **Remove this bullet from the project.** It duplicates the internship bullet and appears unrelated to the research-agent framework.
- Keep the achievement only under the role where the work occurred.
- Duplication wastes space and can make reviewers question whether the project and employment work are being conflated.

## Skills

### Programming: Python, TypeScript, SQL, Bash, Git
- Move Git out of “Programming”; it is a version-control tool, not a programming language.
- Consider separating languages from tools.
- Order items by relevance and proficiency for the target role, not alphabetically.
- Include only skills you can discuss confidently in an interview.
- If you have substantial experience with testing, APIs, CI/CD, distributed systems, queues, or cloud services, consider representing those areas because they are visible in your experience but absent here.

### ML & Agents: PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation
- Separate frameworks, methods, and areas of expertise; the current list mixes categories.
- Be cautious with GRPO if your experience is limited to one project. Specialized methods invite detailed questioning.
- Keep “agent evaluation” only if you can discuss benchmark design, metric validity, degradation testing, and statistical interpretation.
- Add core ML skills only if supported by your work; the section currently appears narrowly optimized around recent LLM terminology.
- Avoid excessive keyword density. Your experience bullets already demonstrate many of these concepts.

## Document-wide changes

- Keep the résumé to one page if possible at your experience level.
- Use consistent punctuation: either end all bullets with periods or omit them consistently.
- Use consistent date separators and dash characters.
- Prevent forced line breaks inside phrases such as “tool-use” and “dead-letter.”
- Reorder bullets so each role begins with the strongest measurable outcome.
- Distinguish relative percentages from percentage-point changes.
- Add baselines to metrics whenever feasible.
- Limit absolute wording such as “every,” “no loss,” “removing,” and “eliminated” unless rigorously supported.
- Reduce repetition of “fine-tuned,” “tool-use,” “signals,” and “backlog.”
- Make sure a general technical recruiter can understand each bullet before an LLM specialist evaluates the details.
