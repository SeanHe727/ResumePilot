# Full review: resume.pdf

**84/100** — format 100 · content 75 · wording 86 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

8 errors, 13 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] Personal details such as date of birth and nationality should be left off the résumé. *(saves about 9 words)*

**Why**
These details are not normally part of a hiring reader’s evaluation and can introduce irrelevant or legally sensitive considerations. Including them uses scarce header space without strengthening the candidate’s qualifications.

**How to change it**
Remove “Date of birth: 14 Mar 1999 | Nationality: Canadian” from the résumé.

*raised by file*

> pending-case backlog

**Problem**
[Error] The triage achievement is repeated in two places with inconsistent reduction figures. *(saves about 18 words)*

**Why**
The résumé assigns the same 800+ sensor-signal triage result to both the internship and the evaluation-framework project, reporting 68% in one place and two-thirds in the other. This makes ownership unclear and can make the figures look unreliable.

**How to change it**
Retain the achievement under Mobility Systems Company, remove the duplicate from Research-Agent Evaluation Framework, and use one documented reduction figure consistently.

*raised by narrative*

> Jun 2022

**Problem**
[Important] The dates leave a 10-month period with no listed study or work between the B.S. and the Junior Software Engineer role. *(adds about 3–8 words)*

**Why**
A reader may wonder whether the period between the B.S. end date and the Junior Software Engineer start date reflects unemployment, further education, or an omitted role. The unexplained gap can create a question before the reader reaches the stronger technical evidence.

**How to change it**
Add [the activity covering the period between Jun 2022 and May 2023], or leave the dates unchanged only if there is no relevant experience to include.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The diagnostic-accuracy improvement does not identify its baseline or evaluation set. *(adds about 3–8 words)*

**Why**
A reader cannot tell whether “35%” means a relative increase or a percentage-point increase, or whether the comparison is against the original model, another baseline, or a held-out test set. Without that context, the magnitude and reliability of the result are difficult to judge.

**How to change it**
Replace “by 35%” with “from [baseline accuracy] to [result accuracy] on [held-out evaluation set]” if accurate.

*raised by content*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Important] Assistant-only loss masking does not, by itself, make a model reproduce tool outputs more faithfully. *(saves about 8–15 words)*
2. [Important] The bullet states the intended training behavior rather than the result achieved. *(saves about 3–10 words)*

**Why**
1. Assistant-only masking normally excludes environment-provided tool-result tokens from the training loss; it trains assistant calls and responses conditioned on those results, not direct reproduction of the tool outputs. The claimed fidelity improvement would require assistant-generated tool outputs as targets or a held-out evaluation showing the improvement.
2. A reader cannot tell whether the intervention worked or why it mattered to the system. The line needs a measured effect from this intervention, not only its training rationale.

**How to change it**
1. If measured, say the masking improved [a defined tool-use or response-fidelity metric] under a controlled comparison; otherwise remove the claim that it makes the model reproduce tool outputs more faithfully.
2. Replace the purpose clause with the observed result, such as “[improved tool-output fidelity by X% versus the baseline],” if that result was measured; otherwise remove the clause.

*raised by content*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The 68% backlog reduction is attributed to the triage branch based only on a post-launch before-and-after change. *(adds about 2–6 words)*

**Why**
Case inflow, staffing, triage policy, launch-related process changes, or the backlog definition could also explain the reduction. The current wording presents an association over eight weeks as proof that the branch caused the result.

**How to change it**
Say the backlog fell 68% in the eight weeks after launch; claim that the branch caused it only if supported by [a controlled or time-series analysis accounting for inflow, staffing, and process changes].

*raised by content*

> assistant-only loss masking

**Problem**
[Error] The same adapter fine-tuning achievement is repeated in two bullets, making the work appear duplicated. *(saves about 15 words)*

**Why**
Both bullets describe assistant-only loss masking applied to the same adapter, so a reader may think the résumé is padding one experiment rather than showing two distinct results. The repetition also leaves the quantified 35% accuracy result competing with a method-only explanation.

**How to change it**
Retain the quantified accuracy result in s2:e0:b0 and remove s2:e0:b4, unless these were separate experiments; if they were separate, identify the distinction and keep only the relevant result for each.

*raised by narrative*

> assistant-only loss masking

**Problem**
[Error] The same adapter fine-tuning achievement is repeated in two bullets, making the work appear duplicated. *(saves about 15 words)*

**Why**
Both bullets describe assistant-only loss masking applied to the same adapter, so a reader may think the résumé is padding one experiment rather than showing two distinct results. The repetition also leaves the quantified 35% accuracy result competing with a method-only explanation.

**How to change it**
Retain the quantified accuracy result in s2:e0:b0 and remove s2:e0:b4, unless these were separate experiments; if they were separate, identify the distinction and keep only the relevant result for each.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] Switching from FP32 to BF16 mixed precision alone does not support the claim that total fine-tuning GPU memory fell by 4x. *(no words)*
2. The GPU-memory reduction is not connected to what it enabled. *(adds about 5–10 words)*

**Why**
1. BF16 usually halves storage for eligible tensors, while mixed-precision training commonly retains FP32 master weights, optimizer states, and other buffers. A 4x total reduction would require additional memory-saving changes or unusually favorable implementation details that the bullet does not state.
2. The reader sees a resource improvement but cannot tell whether it enabled larger models, longer sequences, more training examples, or lower infrastructure cost. Without that consequence, the significance of the optimization is harder to judge.

**How to change it**
1. Replace “4x” with the measured reduction attributable to BF16 mixed precision; if no other memory-saving changes were made, remove the 4x claim.
2. After the measured reduction, add [the verified capability or operational result it enabled].

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The regression checks are described in the present tense inside an otherwise past-tense bullet. *(no words)*
2. [Important] The release-cycle bullet gives the endpoint but not the starting point. *(adds about 3–6 words)*

**Why**
1. “Adds” interrupts the historical framing established by “Maintained” and “shortened.” The tense break makes the bullet read as if the work is still happening rather than as a completed contribution.
2. A reader cannot tell whether reducing release cycles to three days was a major improvement or a marginal change. The result is less persuasive than the résumé’s other before-and-after measurements.

**How to change it**
1. Replace “and adds automated regression checks” with “and added automated regression checks.”
2. Add the prior duration or change amount: “from [prior release-cycle duration] to 3 days” or “by [cycle-time reduction] to 3 days.”

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
The bullet says that nightly backlogs were removed but does not quantify the backlog or dispatch delay. *(adds about 4–8 words)*

**Why**
A reader cannot judge the scale of the operational problem or the benefit to morning dispatch. The qualitative claim is weaker than the quantified service and latency outcomes elsewhere in the experience section.

**How to change it**
Add [the backlog volume or dispatch-delay measure] and its before-and-after change, if documented.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The claim that AI-first practices were adopted across the platform and accelerated delivery or improved downstream outcomes is not established by the line. *(adds about 5–15 words)*

**Why**
The bullet gives no adoption coverage, delivery comparison, or downstream outcome evidence, so the organization-wide and causal claims must be taken on trust. It also does not identify what was actually introduced, making the contribution difficult for a technical reader to evaluate.

**How to change it**
Replace the broad phrase with one or two concrete practices or platform changes, and add [adoption coverage, delivery metric, and downstream outcome evidence] only if documented; otherwise remove the broad impact claims.

*raised by content, wording*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
The context-size bullet does not show what capability the bounded context enabled or the achieved value below the 10K threshold. *(adds about 4–10 words)*

**Why**
“Working context” is specialized and ambiguous without identifying what context was bounded. A reader sees a constraint but cannot tell whether the system retained the information needed for correct work, what the actual peak was, or what user-facing benefit resulted.

**How to change it**
Name the bounded context, replace “under 10K” with the measured peak if available, and add [the verified capability or user-facing benefit enabled].

*raised by content, wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] Separating concurrency pools and gating cache writes cannot by itself support the unqualified claim that the changes removed deadlocks and lost tool results. *(adds about 4–12 words)*
2. [Important] “Under 50-way fan-out” states the test scale but not the size or consistency of the reliability improvement. *(adds about 4–10 words)*

**Why**
1. Separate pools address executor self-starvation, and completion-gated writes prevent incomplete streams from being cached, but locks, queues, permits, service limits, cancellation, retries, fan-in, or crashes can still cause failures. The bullet therefore needs bounded test conditions or reliability evidence for the broader claim.
2. A reader can see that the design handled substantial concurrency but cannot tell whether failures were eliminated consistently or merely observed less often. “Lost results” is also grammatically awkward because results are prevented from being lost, not removed.

**How to change it**
1. Limit the result to the tested workload, such as [removed the observed nested-pool deadlocks and incomplete cache writes under the 50-way test], or add [failure-injection and reliability evidence] supporting the broader claim.
2. State that the fix held at or handled 50-way fan-out, and add [failure rate before and after, number of successful stress runs, or another direct reliability comparison]. Replace “removing lost tool results” with “preventing lost tool results” if accurate.

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
1. [Important] The evaluation-module contribution does not state what changed as a result. *(adds about 5–10 words)*
2. [Important] The integration description does not show how it was implemented. *(adds about 3–8 words)*

**Why**
1. A reader can see that eight metrics were added, but cannot tell why the contribution mattered to users, maintainers, or evaluation quality. The count establishes scope without showing a resulting improvement or adoption outcome.
2. The line identifies the destination but not the technical mechanism that made the contribution credible or reusable. A technical reader cannot tell whether the work involved an interface, abstraction, pipeline, or another implementation detail.

**How to change it**
1. After the module contribution, add [the single strongest resulting change], such as an evaluation-coverage, defect-detection, or downstream-adoption outcome.
2. Replace or supplement the broad integration description with [the interface, abstraction, or evaluation-pipeline mechanism used].

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Error] “Showed the evaluator tracks” is grammatically incorrect and overstates what the correlation establishes. *(adds about 4–8 words)*
2. [Important] The bullet does not identify which evaluator output was correlated with which degradation measure, and “injected degradation” is compressed jargon. *(adds about 4–10 words)*

**Why**
1. The clause needs “that,” and “tracks” conflicts with the past-tense framing of “Showed.” More importantly, a Kendall correlation of 0.89 supports a strong monotonic association under the tested conditions, not broad evaluator validity or proof that the evaluator reliably tracks degradation in general.
2. A reader can see that the relationship was strong but cannot interpret what the 0.89 measures. The phrase also hides that the trials deliberately removed citations, sources, and claims, making the test design harder to understand.

**How to change it**
1. Change the clause to “Observed a Kendall correlation of 0.89 between the evaluator score and [the degradation-severity measure] across the tested trials.”
2. Replace it with the concrete test description, such as “trials that removed citations, sources, and claims,” and name [the evaluator score and degradation-severity measure used].

*raised by content, wording*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Error] The final bullet misattributes the industrial-inspection backlog result to the evaluation-framework project. *(saves about 18 words)*

**Why**
The other entry assigns the same result to a diagnostics triage branch that screened 800+ sensor signals and reduced the backlog by 68%. Nothing in this project entry connects the LLM evaluation framework to that industrial inspection system, sensor workflow, or operational backlog, so the project’s subject and ownership become unreliable.

**How to change it**
Remove this bullet from the project and retain the result under Mobility Systems Company; if the project genuinely contributed, state the documented connection and separate the project’s contribution from the production outcome.

*raised by content*

> a triage branch

**Problem**
[Important] The first two bullets establish an evaluation-framework project, but the final bullet changes subject to the internship’s diagnostics work. *(saves about 18 words)*

**Why**
A reader expects all bullets under this project to explain evaluation-framework contributions. The unrelated triage bullet breaks the project narrative and weakens confidence that the listed work belongs to this entry.

**How to change it**
Remove the final triage bullet from this project, or replace it with a verified result from the evaluation framework.

*raised by narrative*

## Set aside (12)

- s2:e1:b0: The line says "Cut GPU memory for fine-tuning the perception models by 4x" but does not state what the reduction enabled.
- s2:e1:b3, s2:e0:b5: The line says "removing the nightly backlogs that delayed morning dispatch" but does not quantify the backlog or the dispatch delay. (and 1 more like it)
- s2:e0:b3: "catching 2 accuracy regressions before release" states what the harness detected but not what changed because they were caught.
- s3:e0:b1: The line establishes a context-size result but not that the system retained all information needed for correct work while the raw conversation grew "100x." (and 2 more like it)
- s3:e1:b2: "Cut the pending-case backlog by two-thirds" gives a relative change without stating the measurement period or baseline volume. (and 1 more like it)
- s3:e1:b1: "injected degradation" is compressed jargon that does not immediately explain that the trials deliberately removed citations, sources, and claims.
- s3:e1:b2, s2:e0:b5: "triage branch" is unexplained internal jargon, so a reader may not know whether it means a workflow, code branch, or decision path. (and 2 more like it)
- s3:e0:b1: "Working context" is specialized and potentially ambiguous because the bullet does not identify what context was being bounded.
- s3:e0:b2: "Removing ... lost tool results" makes the result grammatically awkward because lost results are prevented rather than removed. (and 1 more like it)
- s2:e1:b1, s2:e0:b1, s2:e0:b2, s2:e0:b3: "load tests that fail the build if p95 exceeds 200 ms" shifts into present tense within an otherwise past-tense bullet; use "failed the build when p95 exceeded 200 ms" for consistent historical framing. (and 3 more like it)
- s2:e0:b4: "so the model would learn to reproduce the tool outputs more faithfully" is a vague purpose clause that adds no checkable result and duplicates bullet b0.
- whole resume, order: Move PROJECTS above EXPERIENCE so the recent agent/LLM direction leads the page; the internship and software role can then establish the engineering foundation behind those projects.
