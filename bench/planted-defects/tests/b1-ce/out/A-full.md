# Full review: resume.pdf

**86/100** — format 100 · content 79 · wording 80 · narrative 79

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **Sampling exactly one scored trajectory per prompt does not provide the within-group comparison required by GRPO and therefore does not itself stabilize sparse-reward training.**
   > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
   GRPO forms a relative advantage by comparing multiple sampled rollouts for the same prompt. With one trajectory, that comparison is unavailable, so the claimed stabilization can produce high-variance or uninformative updates and a technical reader may challenge the method.
   **How to change it:** State the actual stabilizing mechanism, or revise the method to use multiple scored rollouts per prompt; add [the stability measure that improved] after "stabilised" if that evidence is available.
2. **Load tests cannot keep production p95 latency at 180 ms after deployment.**
   > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
   Load tests measure performance under defined conditions and can detect regressions or block a release, but they do not maintain production latency. A reader may question whether the 180 ms result persisted and what operational controls supported it, weakening an otherwise precise performance claim.
   **How to change it:** Replace "keep it there" with "detect performance regressions"; if accurate, add [the production monitoring, capacity-management, configuration, or remediation mechanism] that maintained the target.
3. **The latency reduction is 33.3%, not 50%.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The result falls by 300 ms from a 900 ms baseline, which is one-third of the original latency. The stated percentage conflicts with the visible figures, so a recruiter may question the reliability of the other measurements.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction."

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

### Load tests cannot keep production p95 latency at 180 ms after deployment.

> added load tests to keep it there

Load tests measure performance under defined conditions and can detect regressions or block a release, but they do not maintain production latency. A reader may question whether the 180 ms result persisted and what operational controls supported it, weakening an otherwise precise performance claim.

**How to change it:** Replace "keep it there" with "detect performance regressions"; if accurate, add [the production monitoring, capacity-management, configuration, or remediation mechanism] that maintained the target.

*raised by content, wording · costs about 2 words to add, plus any words for the mechanism*

### The dashboard and on-call ownership has no measured operational result.

> Owned the diagnostics service’s monitoring dashboards

The line shows responsibility for a production diagnostic system, but a reader cannot tell whether detection, diagnosis, reliability, or response improved. Without an outcome, the ownership reads as maintenance rather than engineering value.

**How to change it:** Replace the duty-focused wording with the concrete improvement you made, and add [the most meaningful result] measured against [a baseline]; keep "two major releases" only if it supports that result.

*raised by content, wording · costs about 6 words to add, plus the result*

### The two-week-to-three-day comparison does not identify what interval those durations measure.

> release cycles

A hiring reader cannot tell whether the change covers code change to model release, approval to release, or release cadence. That ambiguity makes the strong delivery improvement harder to compare and defend.

**How to change it:** Replace "release cycles" with [the exact interval being measured], while retaining "2 weeks" and "3 days" if accurate.

*raised by content · costs about 2 words to add*

### The migration result is not quantified, and the long list of parallel work obscures which actions produced it.

> removed the nightly backlogs

The reader understands that the migration helped morning dispatch, but cannot judge the size or reliability of the improvement. Rewriting the logging library, onboarding hires, and taking weekend on-call appear in the same sequence, so the main infrastructure achievement is harder to scan.

**How to change it:** Move the migration result closer to the start of the bullet, separate or shorten the unrelated workstreams, and add [the backlog or dispatch-delay measure] compared with [the pre-migration baseline].

*raised by content, wording · costs about 5 words to add, plus the figure*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

### Sampling exactly one scored trajectory per prompt does not provide the within-group comparison required by GRPO and therefore does not itself stabilize sparse-reward training.

> sampling a single rollout per prompt

GRPO forms a relative advantage by comparing multiple sampled rollouts for the same prompt. With one trajectory, that comparison is unavailable, so the claimed stabilization can produce high-variance or uninformative updates and a technical reader may challenge the method.

**How to change it:** State the actual stabilizing mechanism, or revise the method to use multiple scored rollouts per prompt; add [the stability measure that improved] after "stabilised" if that evidence is available.

*raised by content · costs about 5 words to add, plus the corrected method or measure*

### The 5% latency result is buried after a dense method list and does not identify the workflow or latency path measured.

> reduced end-to-end latency 5%

A scanning reader may miss the only outcome while working through the rollout, reward, and reference-model clauses. The dense opening also frames the bullet around methods rather than ownership, and "end-to-end" leaves unclear what process became faster.

**How to change it:** Move "reduced end-to-end latency 5%" to the front, replace "end-to-end" with [the measured workflow or latency path] if accurate, and follow the result with the existing method details.

*raised by content, wording · costs no words*

### The phrase "with ML-extracted features" does not show what feature-extraction or modeling work you performed.

> with ML-extracted features

A hiring reader can see the system context and scale but cannot identify your machine-learning contribution beyond using extracted features. That leaves the technical ownership of the triage branch unclear.

**How to change it:** Replace "ML-extracted features" with [the specific feature-extraction or modeling contribution], if accurate.

*raised by content · costs about 2 words to add*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

### The latency reduction is 33.3%, not 50%.

> a 50% reduction

The result falls by 300 ms from a 900 ms baseline, which is one-third of the original latency. The stated percentage conflicts with the visible figures, so a recruiter may question the reliability of the other measurements.

**How to change it:** Replace "a 50% reduction" with "a 33.3% reduction."

*raised by content, wording · costs no words*

### The task-completion increase is 12 percentage points, not 12% relative growth.

> by 12% on the benchmark suite

The benchmark rate rises from 71% to 83%, which is a 12-percentage-point increase and approximately 16.9% relative growth. Leaving the delta as "12%" makes the reader reconcile two different interpretations of an otherwise strong before-and-after result.

**How to change it:** Replace "by 12%" with "by 12 percentage points" and retain the 71%-to-83% figures; use the relative change only if that is the intended measurement.

*raised by content, wording · costs about 1 word to add*

### The line claims broad adoption and benefits without identifying the practices, work, or measured result.

> AI-first engineering practices

A reader cannot tell whether delivery speed, reliability, throughput, adoption, or another outcome improved. The broad phrase "AI-first engineering practices" reads as jargon and leaves the ownership claim difficult to evaluate as technical work.

**How to change it:** Replace "AI-first engineering practices" with [the one or two specific practices introduced or enabled], and replace the broad benefits with [the specific downstream result] measured against [its baseline or comparison].

*raised by content, wording · costs about 4 words to add, plus the practices and result*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

### The phrase "Showed the evaluator tracks" is grammatically incorrect.

> Showed the evaluator tracks

The missing "that" makes the sentence read as though "evaluator tracks" were a noun phrase rather than a clause. The awkward construction interrupts an otherwise credible statistical validation result.

**How to change it:** Replace "Showed the evaluator tracks" with "Showed that the evaluator tracked" or "Demonstrated that the evaluator tracked."

*raised by wording · costs about 1 word to add*

### The metric implementation is not described beyond the count of metrics that were upstreamed.

> Upstreamed 8 citation and faithfulness metrics

The default-benchmark adoption proves the contribution was used, but a reader cannot tell what technical skill you demonstrated in integrating the metrics. The bullet therefore shows impact more clearly than implementation ownership.

**How to change it:** Add one compact implementation detail after the metric count, such as [the specific integration, test, or interface work that made the metrics compatible with the default benchmark].

*raised by content · costs about 5 words to add*

### The evaluator result does not state what validation decision or framework capability it enabled.

> Showed the evaluator tracks injected degradation

The correlation and trial count show that the evaluator tracked the injected changes, but the reader must infer why that mattered to the project. Naming the consequence would connect the strong measurement to a practical use.

**How to change it:** Replace or supplement "Showed" with [the validation consequence or decision enabled by confirming that the evaluator tracked the degradation].

*raised by content · costs about 5 words to add*

### The phrase "with layered instrumentation" does not identify what signals or comparisons localized the defects.

> with layered instrumentation

A technical reader can tell the diagnosis was systematic but cannot judge the specific debugging skill behind it. The technique name supplies process without showing how the three defects were exposed.

**How to change it:** Replace "layered instrumentation" with [the single most revealing instrumentation or tracing technique used to localize the defects].

*raised by content · costs about 3 words to add*

### The line says the defects were fixed upstream without measuring what improved afterward.

> each was fixed upstream

The count establishes the scope of the debugging contribution, but not the value of resolving the defects. A reader cannot tell whether the fixes changed tests, benchmark behavior, stability, or reproducibility.

**How to change it:** Replace the passive ending with an active ending such as "and drove each fix upstream," then add [the one observable post-fix result] compared with [its pre-fix state].

*raised by content · costs about 5 words to add, plus the result*

## Across the whole résumé

### Experience appears below Education, so the career direction is established after the degrees rather than before them.

> Western State University

A recruiter scanning the document first sees the academic timeline and must look farther down to find the two years of software engineering and the subsequent machine-learning internship. That delays the evidence most relevant to the candidate's current direction.

**How to change it:** Move the EXPERIENCE section above EDUCATION.

*raised by narrative · costs no words*

### Experience is not in newest-first order.

> Aug 2022 - Jul 2024

The Oct 2024–May 2025 Mobility Systems Company role appears below the Aug 2022–Jul 2024 Eastern Robotics Co. role. The backward chronology can make the work history look careless and makes the recent machine-learning experience easier to overlook.

**How to change it:** Within EXPERIENCE, move Mobility Systems Company above Eastern Robotics Co.

*raised by file, narrative · costs no words*

## Set aside (8)

- s3:e1:b1: "Injected degradation" is abstract and the sequence "citations, sources and claims" makes it unclear what was removed in each trial.
- s3:e1:b2: "Each was fixed upstream" uses passive voice and hides who made the fixes; use an active ending such as "and drove each fix upstream."
- s3:e1:b2: "Defects in stability" is vague because stability is an outcome rather than a clearly named pipeline component.
- s2:e0:b3: "while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation" combines unrelated workstreams, making the scope and main achievement difficult to scan.
- s2:e0:b3: The result in "which removed the nightly backlogs" appears only after a long sequence of methods and does not clearly indicate which actions caused it.
- s2:e1:b2: "Single-request edge inference" compresses several concepts into a phrase that may require interpretation outside the immediate team.
- s2:e1:b3: "Composite reward over accuracy, citation validity and call count" is dense jargon that makes the sentence harder to scan.
- s2:e1:b4: "So each update used exactly one scored trajectory" restates the preceding method without explaining an additional outcome.
