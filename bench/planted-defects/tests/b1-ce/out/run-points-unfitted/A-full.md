# Full review: resume.pdf

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

### Replace broad dashboard ownership language with the monitoring improvement and operational result, such as the incidents detected, triaged, or resolved through the dashboards.

> Owned the diagnostics service’s monitoring dashboards

The current line establishes responsibility but does not show what changed for the diagnostics team or what the on-call rotation could do better.

*raised by content, wording · costs about 10 words to add*

### Remove the on-call reference from b0 or b3 so on-call ownership is stated once, with the stronger operational scope retained in the better-supported bullet.

> the on-call rotation that used them

Mentioning the dashboard rotation and then separately taking over weekend on-call makes the same responsibility appear twice without adding distinct evidence.

*raised by narrative · costs saves about 7 words*

### Specify the API endpoint or request type, traffic conditions, and load-test threshold or execution point for the latency result.

> p95 API latency

A reader cannot tell whether 420 ms and 180 ms were measured on comparable workloads or whether the tests continuously protected a defined performance target.

*raised by content, wording · costs about 12 words to add*

### Name the regression validation automated and identify the manual release bottleneck it replaced.

> automated regression checks

“Automated regression checks” says how the work was implemented but not what model behavior was protected or why the release process became faster.

*raised by content · costs about 8 words to add*

### Clarify whether the two-week-to-three-day comparison is elapsed release time, and state how many model releases were measured.

> release cycles from 2 weeks to 3 days

The result is difficult to assess if the reader does not know what part of the release cycle was timed or whether it reflects one release or a repeated process.

*raised by content · costs about 8 words to add*

### Make the 30-service migration the main sentence and move the logging, onboarding, and weekend on-call work into a separate bullet or supporting clause with its own result.

> Migrated 30 robot-fleet services

The current line combines several substantial responsibilities, so the architecture change and the outcomes of the other work compete for attention.

*raised by wording · costs about 3 words to add if split into a new bullet*

### Replace the relative clause with a direct outcome and quantify the nightly backlog or dispatch delays eliminated.

> removed the nightly backlogs that delayed morning dispatch

The reader needs the operational scale of the result, not only the general claim that morning dispatch was no longer delayed.

*raised by content, wording · costs about 6 words to add*

### Explain how moving 30 services to an event queue removed the backlog or improved reliability, such as by eliminating missed schedules, queue buildup, or failed jobs.

> from cron jobs to an event queue

The architectural change is concrete, but the causal link to morning dispatch remains an assumption unless the reliability mechanism or measured improvement is stated.

*raised by content · costs about 9 words to add*

### Give a result for the shared logging rewrite, onboarding, and weekend on-call takeover, or cut responsibilities that do not have a measurable outcome.

> onboarding two new hires

These additions show breadth but currently make the bullet longer without showing what they improved for the team.

*raised by content · costs about 7 words to add, or saves about 10 words if unsupported responsibilities are cut*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

### Add the starting pending-case volume and a precise measurement period to the 68% backlog reduction.

> cutting the pending-case backlog 68%

The percentage is strong, but a reader cannot judge its operational scale from “first quarter after launch” without knowing how many cases were pending or over what measured interval.

*raised by content · costs about 7 words to add*

### Define diagnostic accuracy and identify the domain-adaptation or training change that produced the improvement.

> diagnostic accuracy

The reader cannot tell whether 71% to 79% is exact-case accuracy, label accuracy, or another measure, nor what your fine-tuning contributed beyond naming a domain adapter.

*raised by content · costs about 12 words to add*

### Report the before-and-after latency, concurrency or traffic conditions, and the measurement boundary for edge inference.

> single-request edge inference

A 40% p95 reduction is hard to interpret if “single-request” could mean an isolated request, while dynamic batching normally depends on concurrent traffic.

*raised by content · costs about 12 words to add*

### Lead with the 5% result, define grouped rollouts as multiple completions or trajectories per prompt if that is what they mean, and name the end-to-end latency boundary.

> grouped tool-use rollouts

The current wording hides the result behind implementation detail and leaves both the grouping method and the measured latency path unclear.

*raised by content, wording · costs about 9 words to add*

### Compress the reward description to the three optimized terms and state their weighting or the ablation that links the training change to the latency result.

> a composite reward over accuracy, citation validity and call count

The reader cannot tell whether accuracy, citation validity, and call count were equally weighted or which part of the setup produced the reported improvement.

*raised by content, wording · costs about 8 words to add*

### Merge b4 into the GRPO bullet and explain what estimator replaced the usual group comparison when one rollout was sampled per prompt.

> sampling a single rollout per prompt

Single-rollout GRPO removes the normal within-group comparison, so an interviewer will want to know how the update signal was computed rather than seeing the constraint repeated twice.

*raised by content, wording, narrative · costs saves about 8 words and adds about 8 words*

### Replace “stabilised” with evidence such as lower update variance, fewer training collapses, or higher reward than the prior setup.

> Stabilised GRPO training

The current verb asserts an improvement without showing what became more stable or how the prior configuration performed.

*raised by content · costs about 7 words to add*

### Quantify the reviewers reached or the period during which they used the abstention and escalation runbook.

> the team's runbook

Adoption establishes acceptance, but its reach and durability remain unclear without the number of reviewers or evidence that it stayed in use.

*raised by content · costs about 6 words to add*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

### Replace “AI-first engineering practices” with the specific practices, teams, and ownership you drove, then add one concrete adoption or delivery result.

> Drove adoption of AI-first engineering practices

A reader cannot reconstruct the work or assess the platform-level influence from generic claims about accelerating delivery and improving downstream outcomes.

*raised by content, wording · costs about 15 words to add*

### Correct the latency percentage: reducing p95 latency from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction.

> a 50% reduction

A technical reader can verify the arithmetic immediately, so leaving the error in place weakens confidence in the otherwise clear baseline-to-result comparison.

*raised by content · costs saves about 3 words if the percentage is removed*

### Add the tool-call workload, traffic or concurrency, and comparison conditions for the 900-to-600 ms p95 measurement.

> p95 tool-call latency

The result cannot be reproduced or fairly compared without knowing what calls were measured and under what load.

*raised by content · costs about 8 words to add*

### Call the 71% to 83% change a 12-percentage-point increase, or calculate and label it as a 16.9% relative increase.

> Raised the runtime’s task-completion rate by 12%

“By 12%” is ambiguous because the displayed values support two different calculations, and the reader should not have to resolve which one you mean.

*raised by content, wording · costs saves about 2 words if replaced with “from 71% to 83%”*

### Name the benchmark suite and state its task count, evaluation scope, or other boundary for the task-completion result.

> on the benchmark suite

The reader cannot judge how broad or representative the improvement is from the generic phrase “the benchmark suite.”

*raised by content · costs about 8 words to add*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

### Identify the capabilities measured by the eight citation and faithfulness metrics and quantify their release or evaluation reach after upstreaming.

> 8 citation and faithfulness metrics

The count demonstrates contribution, but the reader cannot tell what technical coverage the metrics add or how widely they run.

*raised by content, wording · costs about 12 words to add*

### State what the evaluator score was correlated against and define the ordered severity scale used for the injected degradation.

> a Kendall correlation of 0.89

A Kendall correlation of 0.89 has no clear interpretation unless the comparison target and meaning of more or less severe degradation are explicit.

*raised by content · costs about 10 words to add*

### Clarify whether the 400+ report-level trials were independent or repeated across reports and seeds, and describe the perturbations as an ordered evidence-removal scale if that is what they represent.

> across 400+ report-level trials

The current count may overstate independent evidence, and removing citations, sources, and claims does not by itself establish comparable degradation severity.

*raised by content · costs about 12 words to add*

### Replace broad defect categories with the concrete stability, sourcing, and parameter-handling failures that were found.

> stability, sourcing and parameter handling

The reader can see that three areas were affected but cannot understand what actually broke in the pipeline.

*raised by content · costs about 9 words to add*

### Name the diagnostic layers or signals that isolated the defects, or remove the instrumentation detail if it does not distinguish your contribution.

> with layered instrumentation

“Layered instrumentation” describes a method without showing how it narrowed the failures to particular modules.

*raised by content, wording · costs about 8 words to add, or saves about 3 words to remove it*

### Add the resulting improvement after each upstream fix, such as failures prevented, tests restored, or reliability gained.

> each was fixed upstream

“Each was fixed upstream” proves resolution but does not show why the fixes mattered to users or future releases.

*raised by content · costs about 8 words to add*

## Across the whole résumé

### Move Mobility Systems Company above Eastern Robotics Co. so Experience is reverse chronological and your transition into ML work is immediately visible.

> Eastern Robotics Co. ... Aug 2022 - Jul 2024

Recruiters typically scan the most recent experience first, so the current order makes your more recent ML internship look older than the robotics role.

*raised by file, narrative · costs no words*

### Either connect each listed skill to a résumé line or remove skills whose use is not demonstrated in the experience or project entries.

> SQL, Bash, Git, PyTorch, LoRA, LangGraph, RAG, Kubernetes, Python

A reader may treat SQL, Bash, Git, PyTorch, LoRA, LangGraph, RAG, Kubernetes, and Python as unverified keyword claims when no entry shows how you used them.

*raised by narrative · costs about 5 words to add per skill you substantiate, or saves about 9 words to remove unsupported skills*

## Set aside (6)

- s3:e1:b1: "removed citations, sources and claims" mixes different perturbation types without showing that they formed a comparable ordered degradation scale.
- s2:e0:b0, s2:e0:b1: "Owned" is broad ownership language, while "that used them" is an indirect way to describe the relationship between the dashboards and the rotation. (and 1 more like it)
- s2:e1:b1: "on 1,200 held-out cases" adds useful context but makes the result clause heavier than necessary if space is tight.
- s2:e1:b3: "Using grouped tool-use rollouts" buries the main action and should be replaced with a finite result-led verb such as "Reduced".
- s3:e1:b1, s3:e1:b2: "Showed the evaluator tracks injected degradation" is generic and slightly awkward because "showed" does not identify the validation action precisely. (and 3 more like it)
- whole resume, dates: The timeline shows a gap between the B.S. ending in Jun 2022 and the robotics role beginning in Aug 2022. (and 1 more like it)
