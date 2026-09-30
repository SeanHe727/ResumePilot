> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Content review:** all 4 entries with bullets
- **Wording review:** all 4 entries with bullets
- **Narrative review:** full resume
- **Format/ATS review:** full file
- **Job-description match:** not run because no posting was provided
- **Education entries:** not content-reviewed because they contain only headings and dates

The file is one page, parses cleanly, and has no layout or ATS blockers. The main changes to make are:

1. **Reverse the Experience order.**  
   List Mobility Systems Company (**Oct 2024–May 2025**) before Eastern Robotics Co. (**Aug 2022–Jul 2024**) so the section is newest-first.

2. **Correct the Agent Runtime Suite metrics.**
   - A change from **900 ms to 600 ms** is a **33.3% reduction**, not 50%.
   - A change from **71% to 83%** is a **12-percentage-point increase**, not simply “12%.”

3. **Clarify the unexplained date gaps.**  
   The narrative review identified gaps between:
   - Jun 2022 and Aug 2022
   - Jul 2024 and Oct 2024
   - May 2025 and Aug 2025  
   Add context if these periods involved study, research, internships, relocation, or independent work.

4. **Replace responsibility-only framing with outcomes where possible.**  
   In the Eastern Robotics entry, the line beginning **“Owned the diagnostics service’s monitoring dashboards…”** describes responsibility but not what changed as a result. The review also found that the monitoring/on-call material overlaps with the later migration bullet.

5. **Separate overloaded bullets.**  
   The Eastern Robotics bullet combining the migration, logging-library rewrite, onboarding two hires, and weekend on-call work contains several distinct actions. Consider keeping only the most relevant achievement or separating the work if space permits.

6. **Clarify technical outcomes in the ML internship.**
   - The bullet about reducing end-to-end latency by 5% does not identify the system or user-facing process affected.
   - The GRPO-training bullet needs technical verification: the wording about one rollout and one scored trajectory was flagged as potentially inconsistent with standard group-relative training.
   - “Single-request edge inference” is difficult to scan and should be made grammatically clearer.

7. **Remove vague project language unless you can support it.**  
   The Agent Runtime Suite bullet beginning **“Drove adoption of AI-first engineering practices…”** does not identify the practices, the adoption measure, or the downstream teams affected.

8. **Make evaluation claims more interpretable.**  
   In the Research-Agent Evaluation Framework entry, the Kendall correlation of **0.89 across 400+ trials** needs its comparison target or baseline. The reader should understand what was correlated and what conclusion the result supports.

9. **Check the Skills section against the evidence.**  
   The narrative review found that the resume’s entries do not explicitly demonstrate several listed skills, including SQL, Bash, Git, Python, PyTorch, LoRA, LangGraph, RAG, and Kubernetes. Either connect those technologies to specific experience/project bullets or remove skills that are not relevant to the target role.

The detailed specialist findings and quoted bullet-level reasoning are available in the full report via `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 73 · wording 83 · narrative 70

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The latency percentage is arithmetically incorrect.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The reduction is 300 ms divided by the 900 ms baseline, which equals 33.3%, not 50%. A reader who checks the arithmetic may distrust the rest of the technical claims.
   **Instead:** State a 33% reduction
2. **The task-completion result should be expressed in percentage points rather than as a percentage increase.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The rate rises from 71% to 83%, which is a 12-percentage-point increase; the relative increase is approximately 16.9%. Mixing these forms makes the result technically imprecise and may make a technical reader question the measurement.
   **Instead:** Say by 12 percentage points
3. **The Experience entries are not in reverse chronological order.**
   > Eastern Robotics Co. | Junior Software Engineer
   The older Eastern Robotics role appears above the more recent Mobility Systems internship, so the timeline looks out of sequence at a glance. This is also a file-level formatting issue that can make the document appear less carefully maintained.
   **Instead:** Move Mobility Systems Company above Eastern Robotics Co.

## Already working

- s2:e0:b1: Provides a baseline, final value, percentile, and concrete implementation methods.
- s2:e1:b0: Connects a concrete engineering deliverable to a business or operational result.
- s3:e0:b1: It gives a clear p95 metric with both baseline and resulting latency.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The migration bullet stacks several unrelated actions together and repeats the on-call responsibility from the preceding bullet.** *(saves about 4 words)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  The migration, logging rewrite, onboarding, on-call duty, and dispatch outcome compete for attention, making the strongest engineering result harder to scan. Repeating on-call ownership also makes the role look less focused and leaves the reader unsure which contribution mattered most.
  **Instead:** Split the migration and logging work into separate bullets and remove the repeated on-call detail
- **The dashboard bullet describes responsibility and scope but not the operational improvement it produced.** *(about 6 words to add)*
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on- call rotation that used them.
  A hiring reader can see that the dashboards were maintained across releases and used during on-call, but cannot tell whether they improved detection, diagnosis, reliability, or incident response. Without an operational anchor, ownership alone does not demonstrate value.
  **Instead:** Lead with the concrete incident-response, reliability, or diagnostics improvement
- **The load-test wording incorrectly implies that tests themselves maintained production latency.** *(about 2 words)*
  > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
  Load tests expose regressions under defined test conditions; they do not by themselves keep production p95 latency at 180 ms. An engineering reader may therefore see the causal claim as technically imprecise.
  **Instead:** Say the load tests caught or prevented latency regressions
- **The regression checks are too unspecified to show what CI risk they controlled.** *(about 2 words to add)*
  > Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.
  A reader cannot tell whether the checks validated model quality, performance, compatibility, or deployment behavior. That missing dimension makes the CI contribution harder to assess even though the release-cycle improvement is concrete.
  **Instead:** Name the regression dimension validated
- **The dispatch improvement lacks a scale marker for the backlog problem it removed.** *(about 4 words to add)*
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  The reader understands that morning dispatch improved but cannot judge how large or frequent the nightly backlogs were. One anchor such as backlog volume, delay duration, or affected dispatches would make the operational result more credible.
  **Instead:** Add the backlog volume, delay duration, or dispatches affected

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The GRPO training claim uses a single rollout per prompt, which is inconsistent with standard group-relative advantage calculation.** *(about 5 words to add)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  Standard GRPO compares multiple completions for the same prompt; with one rollout, the within-prompt relative advantage is zero or undefined unless a different baseline or estimator is used. The claim also conflicts with the preceding bullet's grouped-rollout setup, so an interviewer may question whether the method was implemented or described correctly.
  **Instead:** Report the multi-rollout GRPO configuration or name the alternative advantage estimator
- **The stabilization claim gives no observable result and treats a configuration detail as evidence of improvement.** *(about 6 words to add)*
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  A reader cannot tell whether stabilization meant fewer failed runs, lower reward variance, smoother loss, or better convergence. The number of scored trajectories describes how the loop was configured but does not show that training became more stable or by how much.
  **Instead:** Add the observed failure, variance, or convergence improvement
- **The end-to-end latency result does not identify the affected workflow or provide enough measurement context to judge it.** *(about 10 words to add)*
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  A reader cannot tell whether the faster result applies to a diagnostic request, model generation, tool execution, or total request processing. Because the neighboring bullet reports a separate edge-inference improvement, the missing scope, baseline, percentile, workload, and comparison policy make this result difficult to interpret.
  **Instead:** Name the diagnostic workflow and add its latency statistic and before-and-after comparison
- **The edge-inference latency claim needs one concrete measurement anchor beyond the relative percentage.** *(about 6 words to add)*
  > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
  The reader cannot tell whether latency moved from a materially slow baseline or from a value already near the system limit. The p95 label and deployment setting are useful, but a before-and-after latency or measured workload is needed to make the result independently judgeable.
  **Instead:** Add the before-and-after p95 latency or measured request workload

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **The platform-ownership claim is too generic to show what you introduced or how it helped downstream teams.** *(about 8 words to add)*
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  A hiring reader cannot distinguish a meaningful platform change from a broad claim about AI adoption and delivery. Without naming the practices, affected teams, adoption scale, or measured delivery result, the line provides no checkable evidence of impact.
  **Instead:** Name the workflow change, adopting teams, and measured delivery outcome

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The evaluation bullet gives a strong correlation and perturbation count without explaining the comparison or controlled trial design.** *(about 8 words to add)*
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  A reader cannot tell whether the 0.89 correlation tracks ordered degradation against paired intact reports or merely separates deletion conditions. Without the paired or controlled structure, repeated variants of the same report may make the trial count look more independent than it is, and the result does not show what decision or capability the evaluator enabled.
  **Instead:** State that scores tracked ordered degradation against paired intact reports
- **The contribution bullet does not say what integration work made the eight metrics run in the default benchmark.** *(about 6 words to add)*
  > Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
  A technical reader can see that the metrics were upstreamed, but cannot tell whether you implemented adapters, wired evaluation hooks, or validated the integrations. That missing ownership detail weakens an otherwise durable and externally checkable contribution.
  **Instead:** Name the integration or validation work enabling the default benchmark

## Set aside (8)

Worth knowing, and not worth the space on this page:

- s2:e1:b3: "a composite reward over accuracy, citation validity and call count" does not explain how those reward terms caused lower latency.
- s3:e1:b1, s3:e1:b2: "Showed the evaluator tracks injected degradation" describes a validation result but not what capability or decision that result enabled. (and 1 more like it)
- s2:e1:b3: "Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced" uses a dangling introductory phrase and does not identify who performed the reduction; begin with an active subject and verb, such as "Reduced end-to-end latency 5% by using grouped tool-use rollouts, a composite reward, and a GRPO loop with a frozen SFT reference." (and 1 more like it)
- s2:e0:b3, s2:e1:b5, s3:e1:b0, s3:e1:b1, s3:e1:b2: "taking over the weekend on-call rotation" frames an assigned responsibility rather than an action with a clear result; replace it with a more direct action or remove it from this bullet. (and 4 more like it)
- whole resume, dates, whole resume, order: Jun 2022 to Aug 2022: approximately two months between the B.S. and the Junior Software Engineer role. (and 3 more like it)
- skills: SQL — no experience or project bullet shows SQL usage. (and 8 more like it)
- format: Experience is not newest-first: "Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024" is listed above the more recent "Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025".
- s3:e0: The measurable runtime results belong together, but b0 is generic and does not establish a specific connection to the latency and benchmark improvements.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-70c74a7a.md.

