# Full review: resume.pdf

**92/100** — format 100 · content 88 · wording 89 · narrative 88

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

2 errors, 13 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Agent Runtime Suite | Owner

**Problem**
[Important] The resume places EXPERIENCE before PROJECTS even though the two projects are the strongest evidence of the target direction. *(no words)*

**Why**
A recruiter scanning from the top reaches the internship and earlier software role before seeing Agent Runtime Suite and Research-Agent Evaluation Framework. Moving PROJECTS immediately after EDUCATION would surface the most relevant multi-agent and evaluation work sooner, then let the experience section provide supporting evidence.

**How to change it**
Move the PROJECTS section above EXPERIENCE, with Agent Runtime Suite and Research-Agent Evaluation Framework immediately after EDUCATION, followed by the ML internship and earlier software engineering role.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.
> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Important] The bullets do not state what operational result followed from detecting regressions or adopting the runbook. *(about 5 words per affected bullet)*

**Why**
A hiring reader can see that the harness found two problems and that reviewers adopted the documentation, but cannot tell whether either action prevented a faulty release or changed on-call handling. Without that consequence, the bullets show useful activity but leave their practical value unmeasured.

**How to change it**
Keep the two-regression result and, if accurate, add [preventing those checkpoints from reaching production] or [triggering rollback before release]. After "the team’s runbook," add one resulting change in brackets, such as [reducing reviewer escalation time] or [standardizing abstention decisions], if accurate.

*raised by content*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Rebuilt the diagnostics service’s monitoring dashboards around per-sensor error budgets, cutting mean time to detect incidents from 40 to 12 minutes.

**Problem**
[Important] The dashboard rebuild is presented as having cut mean time to detect incidents from 40 to 12 minutes, but the dashboard change does not itself establish that reduction. *(about 4 words)*

**Why**
A dashboard can improve visibility while leaving detection time unchanged, or it can change how detection is recorded. The claim needs comparable incident timestamps and an unchanged metric definition; otherwise a reader may treat the figures as a measurement change rather than faster detection.

**How to change it**
If comparable incident data supports the reduction, retain the figures and state that the dashboard rebuild was followed by mean time to detect falling from 40 to 12 minutes. Otherwise replace the reduction claim with improved monitoring visibility.

*raised by content*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Important] The specific p95 result of 180 ms is not supported by the separate load-test build gate. *(about 2 words)*

**Why**
A build that fails when p95 exceeds 200 ms shows only that the tested configuration met a threshold; it does not establish a p95 of 180 ms or show that the result matches production conditions. A reader needs the workload and measurement context to trust the 420-to-180 comparison.

**How to change it**
Report the 420 ms to 180 ms result with the workload or environment used to measure it, and move the 200 ms limit into a separate regression-guard phrase. Replace "with load tests that fail the build if p95 exceeds 200 ms" with a shorter form such as "enforcing a 200 ms p95 build threshold."

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
1. [Important] The automated regression checks are presented as causing release cycles to fall from 2 weeks to 3 days, but that causal attribution is not established by the method described. *(about 3 words)*
2. [Important] Opening with "Maintained the CI pipeline" frames the bullet as a responsibility before naming the specific improvement. *(no words)*

**Why**
1. Regression checks can remove manual validation work, but review, deployment, approvals, and release scope also affect cycle time. Without comparable release records, a reader cannot tell whether the checks caused the full reduction or merely accompanied it.
2. The strongest information in the bullet is the automated regression work and its release impact, while maintenance sounds like routine ownership. Leading with the responsibility makes the result less immediate and less scannable.

**How to change it**
1. If release records support the attribution, change the causal claim to say the checks contributed to cycles falling from 2 weeks to 3 days. Otherwise state the direct outcome of adding automated regression checks without attributing the full cycle reduction to them.
2. Move "adding automated regression checks" to the opening and cut or move "Maintained the CI pipeline" after the improvement, so the bullet leads with the change rather than the duty.

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The migration is stated to have removed the nightly backlogs and morning-dispatch delays, but the queue design does not itself establish that outcome. *(about 4 words)*

**Why**
Retries and dead-letter handling can improve reliability, but failed work can still accumulate or move into a dead-letter queue. A reader needs post-migration queue and dispatch data to know that the relevant jobs completed without residual backlog and that the delays disappeared.

**How to change it**
Retain the removal claim only if post-migration queue and dispatch data confirms it, preferably with a measured change. Otherwise describe the migration and its retry and dead-letter behavior without claiming complete removal.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Raised defect localization on a 120-case benchmark from 82% to 94% by dispatching tasks to role-specialized sub-agents with isolated prompts, toolsets and contexts.

**Problem**
[Important] The increase from 82% to 94% is attributed to the dispatch design without establishing a controlled comparison against a defined baseline. *(about 5 words)*

**Why**
Role-specialized sub-agents and isolated prompts describe the implementation, but they do not by themselves show that the design caused the improvement. The claim is credible only if the same 120-case benchmark was evaluated under comparable baseline and treatment conditions; otherwise the result should be stated without causal wording.

**How to change it**
If a controlled comparison was run, state the baseline and comparable evaluation conditions. Otherwise say the specialized-agent design achieved 94% localization on the 120-case benchmark, or soften the causal wording.

*raised by content*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Important] The context-control result does not say what keeping the working context under 10K tokens enabled or prevented. *(about 4 words)*

**Why**
A reader can see that a resource constraint was controlled but cannot tell why it mattered to the runtime. Adding one consequence would connect the token result to continued operation or avoidance of context-limit failures.

**How to change it**
After the token result, add [continued successful operation through the test] or [avoided context-limit failures], if accurate. Clarify "working context" or "budgeted context layers" if a general reader would not recognize those terms.

*raised by content*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The line overstates what the concurrency-pool and cache-write changes establish when it says they removed both deadlocks and lost tool results under 50-way fan-out. *(about 4 words)*

**Why**
Separate pools can address a particular nested-pool starvation pattern, while completion gating can prevent premature cache publication, but neither mechanism alone rules out dependency cycles, result mix-ups, concurrent overwrites, or non-atomic commits. Also, "under 50-way fan-out" states a concurrency scale rather than measuring removal of either failure class.

**How to change it**
If verification covered only a defined workload, say the changes eliminated the observed deadlocks and lost results under the tested 50-way fan-out, and replace that jargon with "50 concurrent branches." Otherwise specify the required correlation, ownership, fan-in, and atomic-commit mechanisms or soften the claim.

*raised by content*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Important] The line does not say what the evaluator's tracking or the upstream fixes changed or enabled, and it lacks the method detail behind the metrics and defect tracing. *(about 12 words)*

**Why**
A reader can see a correlation, eight contributed metrics, and three fixed defects, but cannot tell what evaluation capability resulted or what engineering work you personally performed to integrate and validate the metrics. "Layered instrumentation" also does not identify the signal that located the modules, while "each was fixed upstream" confirms resolution without showing what improved.

**How to change it**
Add one compact implementation or validation detail after the metrics outcome, and replace "with layered instrumentation" with [the most telling instrumentation layer or diagnostic signal used to locate the modules]. After "fixed upstream," add [the resulting improvement in stability, sourcing, parameter handling, or framework reliability], and replace "tracks injected degradation" with [the evaluation capability or decision this enabled], if accurate.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Error] The phrase "Showed the evaluator tracks" is grammatically incomplete because the subordinate clause needs "that." *(adds 1 word)*
2. [Important] The claim that the evaluator "tracks injected degradation" is stronger than a Kendall correlation of 0.89 supports. *(about 6 words)*
3. [Important] The result does not identify what the evaluator's Kendall correlation of 0.89 was calculated against. *(about 4 words)*

**Why**
1. The missing conjunction makes the sentence read as a grammatical error rather than a clear evaluation result. That small interruption can make a technical reader pause before reaching the correlation and its evidence.
2. Kendall correlation establishes a strong rank association, not that the evaluator measures genuine degradation or responds to degradation rather than artifacts from removing citations, sources, and claims. The conclusion also depends on the degradation scale, trial independence or clustering, ties, controls for injection artifacts, and whether the result holds across removal types.
3. The figure sounds persuasive, but a reader cannot interpret what it proves without knowing whether evaluator scores were correlated with degradation severity, an error rate, or another measure. Naming both variables would make the result technically interpretable.

**How to change it**
1. Insert "that" after "evaluator."
2. Replace the claim with a statement that the evaluator scores showed a Kendall correlation of 0.89 with the injected degradation ordering across 400+ report-level trials. Claim that it tracks degradation only if [the degradation scale was validated and the trials used appropriate controls, replication, and clustered analysis].
3. Specify the second variable after the correlation, such as [evaluator score against injected-degradation severity], if accurate.

*raised by wording, content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Error] The phrases "citations, sources and claims" and "stability, sourcing and parameter handling" omit the consistent serial comma. *(adds 2 words)*

**Why**
The inconsistent list punctuation makes the wording look lightly edited rather than deliberate. Applying the same punctuation convention improves polish in two technical bullets without changing their content.

**How to change it**
Change the first list to "citations, sources, and claims" and the second to "stability, sourcing, and parameter handling."

*raised by wording*

## Already working

- s2:e0:b1: Presents a clear before-and-after result on a named evaluation set.
- s2:e0:b2: Shows ownership of an architectural intervention rather than only model training.

## Set aside (13)

- s2:e1:b3: "removing the nightly backlogs that delayed morning dispatch" describes the outcome without measuring how much the backlog or delay changed.
- s3:e0:b2: The phrase "under 50-way fan-out" measures concurrency scale, not the claimed removal of "nested-pool deadlocks and lost tool results."
- s2:e1:b1: The phrase "with load tests that fail the build if p95 exceeds 200 ms" is cumbersome and makes the quality-control action less scannable.
- s3:e0:b1: "Grew 100x" does not state the conversation's starting size, so the scale of that comparison is difficult to judge.
- s3:e0:b1: "Working context" and "budgeted context layers" are specialist phrases whose meaning is not immediately clear to a general resume reader.
- s3:e0:b2: "50-way fan-out" is team-specific jargon and may not be immediately understandable without knowing that it means 50 concurrent branches.
- s2:e0:b0: "with ML-extracted features" can ambiguously modify either the inspection system or the screening process.
- s2:e0:b3: "at equal accuracy" arrives at the end and makes the comparison condition harder to scan than the primary results.
- s2:e0:b4: "the team used to compare" makes the harness's function less direct than a participial construction.
- s3:e1:b1: "Tracks injected degradation" is less direct than stating what the evaluator detected or measured, making the result harder to scan.
- s3:e1:b2: "Structural pipeline defects in stability, sourcing and parameter handling" uses abstract category nouns without clearly stating what was defective.
- s3:e1:b2: "With layered instrumentation" appears after the defect count and module result, so the method is detached from the action it explains.
- s3:e1:b2: "Each was fixed upstream" is passive and leaves unclear who fixed the defects and what "upstream" refers to.
