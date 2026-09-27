> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Format/ATS:** reviewed; it parses cleanly as a one-page, 521-word resume with no layout blockers.
- **Content:** all 4 experience/project entries reviewed.
- **Wording:** all 4 experience/project entries reviewed.
- **Narrative:** reviewed.
- **Job-description match:** not reviewed because no posting was provided.
- **Education:** present, but there are no bullets requiring content review.

### Changes to make first

1. **Reverse the Experience section order**
   - Put **Mobility Systems Company — Machine Learning Engineering Intern** before **Eastern Robotics Co. — Junior Software Engineer**.
   - The current order places the older role above the newer one.

2. **Correct the Agent Runtime Suite figures**
   - The change from **900 ms to 600 ms** is approximately a **33% reduction**, not 50%.
   - The change from **71% to 83%** is a **12-percentage-point increase**. Clarify whether you intend percentage points or relative percentage growth.

3. **Strengthen or remove the first Agent Runtime Suite bullet**
   - “Drove adoption,” “accelerating delivery,” and “improving outcomes for downstream teams” are not tied to a specific measured result.
   - Add a concrete adoption or delivery result if you have one; otherwise, make the bullet more specific or remove it.

4. **Separate overloaded Eastern Robotics claims**
   - The bullet covering the shared logging library, onboarding, and weekend on-call combines several unrelated responsibilities.
   - The reviewers also found overlap between the diagnostics-dashboard bullet and the on-call responsibility. Clarify the distinct accomplishment of each or consolidate them.

5. **Clarify causal claims in the ML internship**
   - The latency bullets attribute improvements directly to particular methods without enough measurement context.
   - Add before-and-after latency values or comparison conditions where available.
   - The GRPO-training bullet claims improved stability but provides no stability measure.
   - Either provide the observed stability result or avoid presenting the training change as a demonstrated improvement.

6. **Clarify the project overlap**
   - The Research-Agent Evaluation Framework ran from February–July 2025 while the internship ran from October 2024–May 2025.
   - If the project was academic, part-time, open source, or otherwise concurrent, label that relationship so the timeline is clear.

7. **Check the Skills section against the evidence**
   - The narrative review found no supporting evidence in the entries for **SQL, LoRA, LangGraph, RAG, or Kubernetes**.
   - Either add supporting experience where accurate or remove skills that are not demonstrated elsewhere.

8. **Improve the weakest quantified claims**
   - For the internship backlog result, include the starting backlog or comparison period if available.
   - For the evaluation framework, explain what the **0.89 Kendall correlation** was measuring and how the injected degradation was controlled.
   - For the defect-fixing bullet, clarify what the instrumentation revealed and what “fixed upstream” means.

The detailed findings and supporting quotes are available in the full report. No job-description comparison was performed; provide the target posting if you want that review.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 68 · wording 84 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The latency percentage is arithmetically incorrect.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The reduction from 900 ms to 600 ms is 300 ms, or 33.3% of the 900 ms baseline, not 50%. A technical reader can check this immediately, so the error may make the other measurements in the résumé less credible.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction" or "a 300 ms reduction"; keep the stated endpoint values if they are correct.
2. **The task-completion change is labeled as a relative percentage when it is a percentage-point increase.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The stated endpoints rise from 71% to 83%, which is 12 percentage points but approximately a 16.9% relative increase. Leaving "by 12%" beside those endpoints can make a technical reader think the calculation is wrong or that the benchmark is being presented imprecisely.
   **How to change it:** Replace "by 12%" with "by 12 percentage points"; alternatively, write the relative result as "+16.9% relative".
3. **The single-rollout GRPO claim is technically wrong or unsupported and lacks a stability measure.**
   > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
   Standard GRPO needs within-prompt groups to form relative advantages; with one scored trajectory, that comparison collapses or requires an unstated alternative estimator and baseline. The line also gives no definition of “stabilised,” so a reader cannot tell whether loss variance, failed updates, or reward consistency improved.
   **How to change it:** Replace the claimed mechanism with the actual stabilization method and add [stability metric] versus [prior configuration]. If single-rollout sampling was used, identify the alternative baseline, normalization, and training method; otherwise correct the rollout count. Remove "so each update used exactly one scored trajectory" because it repeats the first clause.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The load-test wording incorrectly implies that tests directly maintained the 180 ms latency.** *(saves about 3 words)*
  > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
  Load tests expose regressions under representative load, but they do not by themselves keep production latency at a target. A technical reader will ask whether a deployment gate, monitoring alert, or remediation process actually controlled future latency.
  **How to change it:** Replace "to keep it there" with "to detect latency regressions"; if a control prevented regressions, name it as [deployment gate or monitoring alert].
- **The dashboard and on-call bullet describes responsibility without showing an operational result or concrete scale.** *(about 6 words to add; saves about 4 words)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.
  “Owned” and “the on-call rotation that used them” tell the reader what was assigned to you, but not whether the dashboards improved detection, resolution, or incident handling. With no metric or other anchor, the reader cannot judge the effectiveness or scale of the ownership, and the on-call responsibility repeats the later bullet.
  **How to change it:** Replace the duty framing with the dashboard or operational change, add [reduction in detection or resolution time], [services or alerts covered], or [incidents handled], and retain the on-call detail only in the stronger supporting bullet rather than repeating it.
- **The dashboard and fleet-migration bullets repeat on-call ownership and the longer fleet bullet chains too many secondary actions around its result.** *(saves about 8 words)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  The résumé presents on-call responsibility in both the dashboard bullet and the fleet-migration bullet, which dilutes the strongest version of that ownership. The fleet bullet also places rewriting, onboarding, and weekend coverage in one clause, making the dispatch outcome harder to identify.
  **How to change it:** Keep the strongest on-call statement in one bullet and make the other line support it with the operational result. Split or trim the secondary actions around the fleet migration, and move the dispatch outcome immediately after the migration result.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The end-to-end latency claim does not establish that GRPO caused the result and gives too little measurement context.** *(about 8 words to add; no words for the move)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  Serving configuration, batching, hardware, or software changes could explain a 5% latency difference, so a technical reader would need an ablation or controlled comparison before accepting the causal attribution. The relative figure alone also hides the actual latency scale and the workload or measurement window.
  **How to change it:** Move "reduced end-to-end latency 5%" to the front, then either remove the GRPO attribution or add [controlled comparison or ablation result]. Add [latency before the change], [latency after the change], and [comparable workload or evaluation window], and distinguish this end-to-end result from the single-request edge-inference result in the adjacent bullet.
- **The edge-inference latency claim lacks baseline and workload details, and “single-request” is ambiguous beside dynamic batching.** *(about 8 words to add)*
  > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
  A p95 percentage is hard to interpret without before-and-after values and the request rate or concurrency used for both measurements. Dynamic batching can improve throughput under concurrent traffic but can add delay to an isolated request, so the current wording leaves the measurement condition unclear.
  **How to change it:** Replace "single-request" with [the actual workload condition] and add [p95 before the change], [p95 after the change], and [request rate or concurrency]. State whether the result came from INT8, dynamic batching, or both.
- **The pending-backlog percentage needs its starting count and comparison window.** *(about 6 words to add)*
  > Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.
  The 68% figure identifies when it was observed but not the baseline used to calculate it. Without the initial and final counts, a recruiter cannot judge the operational scale or reproduce the result.
  **How to change it:** Add [starting pending-case count] and the corresponding ending count, or at least the starting count, and name [comparison period] alongside "in the first quarter after launch."
- **The runbook adoption claim shows implementation but not operational effect or scale.** *(about 5 words to add)*
  > Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.
  A reader can see that the reviewers accepted the abstention and escalation rules, but cannot tell whether triage became faster or more consistent or how broadly the runbook was used. Adoption alone is weaker evidence than an operational result, user count, usage period, or case volume.
  **How to change it:** Add [measured operational outcome] if tracked; otherwise add [number of reviewers or team members], [period of use], or [number of cases handled under the runbook].

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **The adoption and impact claim is too broad and has no measurable result.** *(about 8 words to add)*
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  “AI-first engineering practices” does not tell a hiring reader what was introduced, while “accelerating delivery and improving outcomes for downstream teams” does not identify a measurable change or its beneficiaries. The line therefore asserts broad ownership without showing what was implemented or how large the contribution was.
  **How to change it:** Replace the broad label with [the specific practices introduced], and replace the vague outcome with [adoption count or rate] plus [delivery-time or downstream result]. Remove "improving outcomes for downstream teams" if no concrete result is available.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The evaluator-correlation claim does not define either the degradation scale or the variable paired with the evaluator score.** *(about 10 words to add)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  A Kendall correlation is meaningful here only if the perturbations have an independently ordered severity and the other variable is clearly identified. Without a controlled baseline and defined degradation levels, the 0.89 figure may reflect arbitrary edits rather than evidence that the evaluator tracks quality loss.
  **How to change it:** Name [the evaluator score] correlated with [the independently defined degradation level or quality score], and add [baseline report and defined degradation levels or perturbation protocol] for the removals.
- **The upstream-contribution claims do not establish the verified adoption boundary or the integration and validation work.** *(about 8 words to add)*
  > Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
  “Upstreamed” shows that code was contributed, but does not prove that the metrics are enabled in the maintained default benchmark for every release. The bullet also gives no evidence of how the metrics were integrated or tested, so the technical depth of the contribution is difficult to assess.
  **How to change it:** Replace the broad adoption claim with [verified release, version, or number of releases] in which the metrics ran in the maintained default benchmark, and add [integration or test work used to validate the metrics].
- **The defect-diagnosis wording is awkward and the upstream-fix claim does not show what improved.** *(about 6 words to add)*
  > Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.
  Defects affect stability, sourcing, and parameter handling; they are not literally “in” those qualities. Saying they were “fixed upstream” also uses project jargon and tells the reader where the change went without showing whether a failing behavior was restored or a released version adopted it.
  **How to change it:** Replace "structural pipeline defects in stability, sourcing and parameter handling" with "structural pipeline defects affecting stability, sourcing, and parameter handling," and replace "fixed upstream" with "fixed in the upstream project." Add [failing behavior or test that passed] or [released version containing the fixes].

## Across the whole résumé

- **Experience is not listed newest-first.** *(no words)*
  > Aug 2022 - Jul 2024
  Eastern Robotics Co. appears above the more recent Mobility Systems Company internship, so the reader encounters an older role before the later experience. That makes the career progression harder to scan and conflicts with the expected reverse-chronological structure.
  **How to change it:** Move the Mobility Systems Company entry, dated Oct 2024–May 2025, above the Eastern Robotics Co. entry, dated Aug 2022–Jul 2024.
- **The overlap between the internship and research project should be explained if both were concurrent work.** *(about 2 words to add)*
  > Feb 2025 - Jul 2025
  The dates show the Research-Agent Evaluation Framework project overlapping the Mobility Systems Company internship from February through May 2025. Without a label, a reader may wonder whether the dates are inaccurate or whether the project was part-time, academic, or open source alongside the internship.
  **How to change it:** Add a short label such as [part-time], [academic], or [open source] to the Research-Agent Evaluation Framework entry if that accurately describes the concurrent work.
- **The operational-outcome bullets need their results moved forward and quantified across the two roles.** *(about 8 words to add)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  > Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.
  “Removed the nightly backlogs that delayed morning dispatch” is buried after several unrelated actions, while the 68% pending-case reduction lacks its starting count and comparison period. A scanning reader can miss the stronger operational outcomes and cannot judge their scale.
  **How to change it:** Move the dispatch outcome earlier in the Eastern Robotics bullet and add [number of backlog items], [dispatch-delay reduction], or [mornings no longer delayed]. Add [starting pending-case count] and [comparison period] to the Mobility Systems bullet.

## Set aside (7)

Worth knowing, and not worth the space on this page:

- s2:e0:b2: "shortened release cycles from 2 weeks to 3 days" gives the endpoints but not what the cycle-time measurement covers.
- s2:e0:b3: "while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation" chains unrelated actions under one "while" clause and makes the primary accomplishment difficult to identify.
- s3:e1:b1: "Showed the evaluator tracks injected degradation" is awkward because "tracks" can be read as a noun or as a present-tense verb; corrected form: "Demonstrated that the evaluator tracked injected degradation."
- s3:e1:b2: "with layered instrumentation" does not identify what was instrumented or how the traces localized the defects.
- whole resume, dates: Jun 2022 to Aug 2022: two months between the bachelor's degree and the first full-time role. (and 1 more like it)
- skills: SQL — no experience or project bullet shows database querying or SQL development. (and 4 more like it)
- s3:e0:b2: "their partial context" has an unclear antecedent because the nearest subject is "failed sub-agent calls" rather than the sub-agents supplying the context.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-e8e1f5a8.md.

