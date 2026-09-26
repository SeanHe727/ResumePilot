> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed:

- **Format/ATS:** the full resume; it parses cleanly as a one-page, 521-word document.
- **Content and wording:** all four entries with bullets:
  - Eastern Robotics Co.
  - Mobility Systems Company
  - Agent Runtime Suite
  - Research-Agent Evaluation Framework
- **Narrative:** the full document.
- **Education:** listed, but there are no bullets for the content specialists to assess.
- **JD match:** not reviewed because no job posting was provided.

The detailed findings are available with `/report --full`. The main changes identified are:

1. **Reverse the Experience order.**  
   Mobility Systems Company, dated Oct 2024–May 2025, should appear before Eastern Robotics Co., dated Aug 2022–Jul 2024.

2. **Correct the Agent Runtime Suite latency figure.**  
   The resume says latency dropped from **900 ms to 600 ms**, a **33.3% reduction**, not 50%. Also clarify whether the 71% to 83% result is a 12-percentage-point or relative increase.

3. **Make vague impact claims concrete.**  
   The opening Agent Runtime Suite bullet refers to “accelerating delivery and improving outcomes for downstream teams” without identifying the specific change or result.

4. **Clarify measurement definitions and conditions.**  
   The reviewers flagged:
   - “diagnostic accuracy” in the ML internship
   - p95 latency measurements and their workload conditions
   - the composite reward and latency result from the GRPO work
   - the Kendall correlation and degradation setup in the evaluation-framework project

5. **Reduce overlap and crowded bullets.**
   - The robotics entry repeats on-call ownership across two bullets.
   - Its final bullet combines service migration, logging-library work, onboarding, on-call duties, and the dispatch outcome.
   - Two ML-internship bullets both describe the GRPO training work and may need to be combined or distinguished.

6. **Strengthen result evidence for responsibility-focused bullets.**  
   In particular, the dashboard-ownership bullet describes responsibility but not what the dashboards enabled the team to detect or resolve. The runbook bullet shows adoption but does not quantify its reach.

7. **Align the Skills section with evidence in the entries.**  
   The narrative review found that SQL, Bash, Git, PyTorch, LoRA, LangGraph, RAG, Kubernetes, and Python are listed without explicit supporting mentions in the experience or project bullets. Either add evidence where accurate or reconsider listing unsupported items.

8. **Decide whether the timeline needs context.**  
   The dates leave two short intervals unexplained: Jun–Aug 2022 and Jul–Oct 2024. The latter overlaps with the start of the M.S. program, so the resume may need to make that relationship clear if relevant.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 69 · wording 83 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Correct the latency percentage: reducing p95 latency from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction.
   A technical reader can verify the arithmetic immediately, so leaving the error in place weakens confidence in the otherwise clear baseline-to-result comparison.
2. Call the 71% to 83% change a 12-percentage-point increase, or calculate and label it as a 16.9% relative increase.
   “By 12%” is ambiguous because the displayed values support two different calculations, and the reader should not have to resolve which one you mean.
3. Move Mobility Systems Company above Eastern Robotics Co. so Experience is reverse chronological and your transition into ML work is immediately visible.
   Recruiters typically scan the most recent experience first, so the current order makes your more recent ML internship look older than the robotics role.

## Already working

- s2:e0:b1: Uses a strong baseline-to-result performance comparison.
- s2:e1:b0: Combines a concrete system contribution with a clear operational outcome.
- s3:e1:b0: Shows a specific contribution rather than generic participation.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- Replace broad dashboard ownership language with the monitoring improvement and operational result, such as the incidents detected, triaged, or resolved through the dashboards. *(about 10 words to add)*
  The current line establishes responsibility but does not show what changed for the diagnostics team or what the on-call rotation could do better.
- Remove the on-call reference from b0 or b3 so on-call ownership is stated once, with the stronger operational scope retained in the better-supported bullet. *(saves about 7 words)*
  Mentioning the dashboard rotation and then separately taking over weekend on-call makes the same responsibility appear twice without adding distinct evidence.
- Specify the API endpoint or request type, traffic conditions, and load-test threshold or execution point for the latency result. *(about 12 words to add)*
  A reader cannot tell whether 420 ms and 180 ms were measured on comparable workloads or whether the tests continuously protected a defined performance target.
- Name the regression validation automated and identify the manual release bottleneck it replaced. *(about 8 words to add)*
  “Automated regression checks” says how the work was implemented but not what model behavior was protected or why the release process became faster.
- Clarify whether the two-week-to-three-day comparison is elapsed release time, and state how many model releases were measured. *(about 8 words to add)*
  The result is difficult to assess if the reader does not know what part of the release cycle was timed or whether it reflects one release or a repeated process.
- Make the 30-service migration the main sentence and move the logging, onboarding, and weekend on-call work into a separate bullet or supporting clause with its own result. *(about 3 words to add if split into a new bullet)*
  The current line combines several substantial responsibilities, so the architecture change and the outcomes of the other work compete for attention.
- Replace the relative clause with a direct outcome and quantify the nightly backlog or dispatch delays eliminated. *(about 6 words to add)*
  The reader needs the operational scale of the result, not only the general claim that morning dispatch was no longer delayed.
- Explain how moving 30 services to an event queue removed the backlog or improved reliability, such as by eliminating missed schedules, queue buildup, or failed jobs. *(about 9 words to add)*
  The architectural change is concrete, but the causal link to morning dispatch remains an assumption unless the reliability mechanism or measured improvement is stated.
- Give a result for the shared logging rewrite, onboarding, and weekend on-call takeover, or cut responsibilities that do not have a measurable outcome. *(about 7 words to add, or saves about 10 words if unsupported responsibilities are cut)*
  These additions show breadth but currently make the bullet longer without showing what they improved for the team.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- Add the starting pending-case volume and a precise measurement period to the 68% backlog reduction. *(about 7 words to add)*
  The percentage is strong, but a reader cannot judge its operational scale from “first quarter after launch” without knowing how many cases were pending or over what measured interval.
- Define diagnostic accuracy and identify the domain-adaptation or training change that produced the improvement. *(about 12 words to add)*
  The reader cannot tell whether 71% to 79% is exact-case accuracy, label accuracy, or another measure, nor what your fine-tuning contributed beyond naming a domain adapter.
- Report the before-and-after latency, concurrency or traffic conditions, and the measurement boundary for edge inference. *(about 12 words to add)*
  A 40% p95 reduction is hard to interpret if “single-request” could mean an isolated request, while dynamic batching normally depends on concurrent traffic.
- Lead with the 5% result, define grouped rollouts as multiple completions or trajectories per prompt if that is what they mean, and name the end-to-end latency boundary. *(about 9 words to add)*
  The current wording hides the result behind implementation detail and leaves both the grouping method and the measured latency path unclear.
- Compress the reward description to the three optimized terms and state their weighting or the ablation that links the training change to the latency result. *(about 8 words to add)*
  The reader cannot tell whether accuracy, citation validity, and call count were equally weighted or which part of the setup produced the reported improvement.
- Merge b4 into the GRPO bullet and explain what estimator replaced the usual group comparison when one rollout was sampled per prompt. *(saves about 8 words and adds about 8 words)*
  Single-rollout GRPO removes the normal within-group comparison, so an interviewer will want to know how the update signal was computed rather than seeing the constraint repeated twice.
- Replace “stabilised” with evidence such as lower update variance, fewer training collapses, or higher reward than the prior setup. *(about 7 words to add)*
  The current verb asserts an improvement without showing what became more stable or how the prior configuration performed.
- Quantify the reviewers reached or the period during which they used the abstention and escalation runbook. *(about 6 words to add)*
  Adoption establishes acceptance, but its reach and durability remain unclear without the number of reviewers or evidence that it stayed in use.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- Replace “AI-first engineering practices” with the specific practices, teams, and ownership you drove, then add one concrete adoption or delivery result. *(about 15 words to add)*
  A reader cannot reconstruct the work or assess the platform-level influence from generic claims about accelerating delivery and improving downstream outcomes.
- Add the tool-call workload, traffic or concurrency, and comparison conditions for the 900-to-600 ms p95 measurement. *(about 8 words to add)*
  The result cannot be reproduced or fairly compared without knowing what calls were measured and under what load.
- Name the benchmark suite and state its task count, evaluation scope, or other boundary for the task-completion result. *(about 8 words to add)*
  The reader cannot judge how broad or representative the improvement is from the generic phrase “the benchmark suite.”

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- Identify the capabilities measured by the eight citation and faithfulness metrics and quantify their release or evaluation reach after upstreaming. *(about 12 words to add)*
  The count demonstrates contribution, but the reader cannot tell what technical coverage the metrics add or how widely they run.
- State what the evaluator score was correlated against and define the ordered severity scale used for the injected degradation. *(about 10 words to add)*
  A Kendall correlation of 0.89 has no clear interpretation unless the comparison target and meaning of more or less severe degradation are explicit.
- Clarify whether the 400+ report-level trials were independent or repeated across reports and seeds, and describe the perturbations as an ordered evidence-removal scale if that is what they represent. *(about 12 words to add)*
  The current count may overstate independent evidence, and removing citations, sources, and claims does not by itself establish comparable degradation severity.
- Replace broad defect categories with the concrete stability, sourcing, and parameter-handling failures that were found. *(about 9 words to add)*
  The reader can see that three areas were affected but cannot understand what actually broke in the pipeline.
- Name the diagnostic layers or signals that isolated the defects, or remove the instrumentation detail if it does not distinguish your contribution. *(about 8 words to add, or saves about 3 words to remove it)*
  “Layered instrumentation” describes a method without showing how it narrowed the failures to particular modules.
- Add the resulting improvement after each upstream fix, such as failures prevented, tests restored, or reliability gained. *(about 8 words to add)*
  “Each was fixed upstream” proves resolution but does not show why the fixes mattered to users or future releases.

## Across the whole résumé

- Either connect each listed skill to a résumé line or remove skills whose use is not demonstrated in the experience or project entries. *(about 5 words to add per skill you substantiate, or saves about 9 words to remove unsupported skills)*
  A reader may treat SQL, Bash, Git, PyTorch, LoRA, LangGraph, RAG, Kubernetes, and Python as unverified keyword claims when no entry shows how you used them.

## Set aside (6)

Worth knowing, and not worth the space on this page:

- s3:e1:b1: "removed citations, sources and claims" mixes different perturbation types without showing that they formed a comparable ordered degradation scale.
- s2:e0:b0, s2:e0:b1: "Owned" is broad ownership language, while "that used them" is an indirect way to describe the relationship between the dashboards and the rotation. (and 1 more like it)
- s2:e1:b1: "on 1,200 held-out cases" adds useful context but makes the result clause heavier than necessary if space is tight.
- s2:e1:b3: "Using grouped tool-use rollouts" buries the main action and should be replaced with a finite result-led verb such as "Reduced".
- s3:e1:b1, s3:e1:b2: "Showed the evaluator tracks injected degradation" is generic and slightly awkward because "showed" does not identify the validation action precisely. (and 3 more like it)
- whole resume, dates: The timeline shows a gap between the B.S. ending in Jun 2022 and the robotics role beginning in Aug 2022. (and 1 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-59f29c5c.md.

