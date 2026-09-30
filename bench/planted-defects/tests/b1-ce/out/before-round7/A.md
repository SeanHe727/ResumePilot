> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed **4 experience/project entries for content**, **4 for wording**, **the full resume narrative**, and **the file format**. **JD matching was not run because no job posting was provided.** Full report: `/report --full`.

Most important changes:

1. **Fix the numerical claims in Agent Runtime Suite**
   - 900 ms to 600 ms is a **33.3% reduction**, not 50%.
   - 71% to 83% is a **12-percentage-point increase**, or approximately a 16.9% relative increase—not simply 12%.

2. **Clarify the timeline and reorder Experience**
   - Place Mobility Systems Company above Eastern Robotics Co.
   - Explain the overlap between the master’s program and internship, as well as the overlapping project dates.
   - Address the one-month gaps after the bachelor’s degree and before the master’s program if relevant.

3. **Strengthen the weaker bullets with concrete outcomes**
   - The robotics monitoring-dashboard bullet describes ownership but not what changed or resulted.
   - The first Agent Runtime Suite bullet uses broad claims about “AI-first engineering practices” without a specific result.
   - The GRPO-training bullet describes the method but not the observable outcome demonstrating stability.
   - The robotics fleet-migration bullet would benefit from quantifying the removed backlog or delay.

Additional format changes:

- Add an email address and phone number; neither appears in the resume body.
- Resolve the two lines the parser could not place cleanly.
- Keep the strongest quantified bullets prominent. The resume is one page and has consistent formatting, but the ATS check identified parsing risk.
- Review the Skills section: the narrative review found that **LangGraph, RAG, and Kubernetes** are not supported elsewhere in the resume. Either add supporting experience or remove them.

> /report
# Review: resume.pdf

**81/100** — format 85 · content 79 · wording 80 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The résumé makes an unsupported causal claim for the backlog reduction, attributes single-request latency improvement to dynamic batching, and reports the two Agent Runtime percentage changes incorrectly.**
   > Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.
   > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   A before-and-after backlog change does not show that the triage branch caused the reduction, and dynamic batching primarily improves concurrent throughput rather than single-request latency. Also, 900 ms to 600 ms is a 33.3% reduction, while 71% to 83% is a 12-percentage-point increase, not a 12% relative increase. These errors make otherwise strong quantitative claims look unreliable.
   **How to change it:** Change the backlog result to "associated with a 68% reduction" unless the candidate has [controlled rollout or comparison evidence supporting causation]. Attribute the 40% single-request latency reduction to the INT8 engine only if [the measured experiment identifies it as the cause], and describe dynamic batching as a throughput optimization. Replace "a 50% reduction" with "a 33.3% reduction" and "by 12%" with "by 12 percentage points".

## Already working

- s1:e0:b1: Provides a strong before-and-after performance measure.
- s1:e1:b1: Provides an explicit before-and-after result.
- s2:e1:b1: Uses a strong statistical result instead of an unsupported quality claim.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The line claims that single-rollout sampling stabilized sparse-reward GRPO training, but that sampling removes the within-prompt comparison signal and no observable stability result is given.** *(about 8 words)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  GRPO uses relative comparisons among rollouts to form a useful advantage signal; using one scored trajectory per prompt generally increases update variance rather than stabilizing training. A reader also cannot tell whether stability meant fewer failed updates, lower reward variance or more reliable convergence, so the implementation detail does not establish the claimed benefit.
  **How to change it:** Do not attribute stabilization to single-rollout sampling alone. State that each update used one scored trajectory, and add [the external baseline or other variance-reduction mechanism] plus [the measured stability outcome against the prior setup].

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The line claims that three defects were fixed upstream without evidence that upstream changes and regression validation confirmed the fixes, and it does not explain how the instrumentation localized them.** *(about 8 words)*
  > Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.
  Tracing defects to modules shows localization, not that each defect was fixed. A hiring reader needs evidence of implemented upstream changes followed by regression testing or repeated instrumentation showing that the original failures no longer occur.
  **How to change it:** Keep the three defect areas and module tracing, add [the specific layered-instrumentation step that localized them], and add [evidence of the upstream fixes and regression validation].
- **The citation and faithfulness metrics contribution does not show how the metrics were integrated or validated.** *(about 6 words)*
  > Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
  The count and default-benchmark adoption show reach, but not the technical or evaluation work that made the metrics usable. A recruiter may therefore see an upstream contribution without being able to judge the candidate's personal implementation skill.
  **How to change it:** Add [the single most telling integration or validation step that made the metrics run in the default benchmark].

## Across the whole résumé

- **The timeline contains two unexplained one-month gaps and three unexplained overlaps between the master's program, internship, contributor project and current project.** *(about 10 words)*
  > Sep 2024 - Expected Jun 2026
  A reader cannot tell whether the gaps reflect ordinary transitions or missing experience. The overlaps also leave open whether the work was part-time, academic, completed during leave, or accidentally dated, which can create doubts about the timeline's accuracy.
  **How to change it:** Add [the reason for the Jun 2022–Aug 2022 gap] and [the reason for the Jul 2024–Sep 2024 gap]. Add part-time, academic, leave or other accurate context to the overlapping entries, or revise the dates if they are not accurate.
- **Experience is not listed newest-first.** *(no words)*
  > Eastern Robotics Co. | Junior Software Engineer
  Eastern Robotics appears before the more recent Mobility Systems internship, so the reader encounters older software work before the résumé's newer ML and agent-systems direction. That weakens the first impression of current relevance.
  **How to change it:** Move the Mobility Systems Company entry above Eastern Robotics Co. in EXPERIENCE.
- **Several results are buried after long method lists or attached through ambiguous clauses, weakening scan order across the résumé.** *(saves about 10 words)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  > Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
  > Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.
  A scanning reader may stop before reaching the measurable result when a bullet opens with implementation details. In the robotics and evaluation bullets, pronouns and delayed relative clauses also make it harder to identify which action produced the outcome.
  **How to change it:** Move "reduced end-to-end latency 5%" to the beginning of that bullet and retain only the one or two most useful method details. Move the nightly-backlog result and benchmark-adoption result closer to their actions, replace ambiguous "which" and "them" references with explicit nouns, and shorten the method chain where needed.
- **The dashboard, platform-practice and downstream-impact claims lack both concrete implementation detail and measurable outcomes.** *(about 12 words)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  The reader can see areas of responsibility but not what was built or changed within the dashboards and on-call process. Broad claims about AI-first practices, delivery and downstream outcomes do not show what changed or how substantial the result was, making the engineering contribution difficult to assess.
  **How to change it:** Add [the most important monitoring, alerting or diagnostic capability implemented] and [the specific operational improvement] to the dashboard bullet. Replace "AI-first engineering practices" with [the specific practice or platform change introduced], and replace the broad outcome phrase with [one measurable delivery or downstream outcome compared with its baseline].

## Set aside (3)

Worth knowing, and not worth the space on this page:

- s1:e0:b0, s1:e0:b1, s1:e0:b2, s1:e0:b3: "Owned" frames the work as a duty rather than naming what was built, improved, or operated. (and 5 more like it)
- s2:e0:b2, s2:e1:b1, s2:e1:b2: “Raised the runtime’s task-completion rate by 12%” is ambiguous alongside “from 71% to 83%.” (and 5 more like it)
- s2:e0:b0, s2:e0:b1, s2:e0:b2, s1:e1:b0, s1:e1:b2, s1:e1:b4: "Accelerating delivery and improving outcomes for downstream teams" makes broad claims without stating the specific result or measurement; replace it with a concrete outcome. (and 5 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b33cc4b5.md.

