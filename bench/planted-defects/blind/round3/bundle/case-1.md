# case-1

## Résumé

```
Jordan Lee
+1 (555) 010-2468 | jordan.lee@example.com | example.com/code/jordan-lee
EDUCATION
Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026
Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022
EXPERIENCE
Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024
- Owned the diagnostics service’s monitoring dashboards across two major releases and the on-
call rotation that used them.
- Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor
reads, and added load tests to keep it there.
- Maintained the CI pipeline for the perception team’s model releases, adding automated
regression checks that shortened release cycles from 2 weeks to 3 days.
- Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared
logging library, onboarding two new hires and taking over the weekend on-call rotation,
which removed the nightly backlogs that delayed morning dispatch.
Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025
- Built a diagnostics triage branch for an industrial inspection system that screens 800+
sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in
the first quarter after launch.
- Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain
adapter on validated tool-use trajectories with assistant-only loss masking.
- Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with
dynamic batching.
- Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and
call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
- Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each
update used exactly one scored trajectory.
- Documented the triage branch’s abstention rules and escalation paths for the on-call
reviewers, who adopted them as the team’s runbook.
PROJECTS
Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present
- Drove adoption of AI-first engineering practices across the platform, accelerating delivery
and improving outcomes for downstream teams.
- Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results
and reusing completed sub-agent answers.
- Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by
retrying failed sub-agent calls with their partial context.
Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025
- Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework,
where they now run in the default benchmark for every release.
- Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across
400+ report-level trials that removed citations, sources and claims.
- Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their
modules with layered instrumentation; each was fixed upstream.
SKILLS
Programming: Python, TypeScript, SQL, Bash, Git
ML & Agents: PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation, Kubernetes
```

## Reviewer 1

## Top priorities

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

## What already works

- “Reduced p95 API latency from 420…”: Provides a baseline, final value, percentile, and concrete implementation methods.
- “Built a diagnostics triage branch for…”: Connects a concrete engineering deliverable to a business or operational result.
- “Cut p95 tool-call latency from 900…”: It gives a clear p95 metric with both baseline and resulting latency.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- **The migration bullet stacks several unrelated actions together and repeats the on-call responsibility from the preceding bullet.**
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  The migration, logging rewrite, onboarding, on-call duty, and dispatch outcome compete for attention, making the strongest engineering result harder to scan. Repeating on-call ownership also makes the role look less focused and leaves the reader unsure which contribution mattered most.
  **Instead:** Split the migration and logging work into separate bullets and remove the repeated on-call detail
- **The dashboard bullet describes responsibility and scope but not the operational improvement it produced.**
  > Owned the diagnostics service’s monitoring dashboards across two major releases and the on- call rotation that used them.
  A hiring reader can see that the dashboards were maintained across releases and used during on-call, but cannot tell whether they improved detection, diagnosis, reliability, or incident response. Without an operational anchor, ownership alone does not demonstrate value.
  **Instead:** Lead with the concrete incident-response, reliability, or diagnostics improvement
- **The load-test wording incorrectly implies that tests themselves maintained production latency.**
  > Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.
  Load tests expose regressions under defined test conditions; they do not by themselves keep production p95 latency at 180 ms. An engineering reader may therefore see the causal claim as technically imprecise.
  **Instead:** Say the load tests caught or prevented latency regressions
- **The regression checks are too unspecified to show what CI risk they controlled.**
  > Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.
  A reader cannot tell whether the checks validated model quality, performance, compatibility, or deployment behavior. That missing dimension makes the CI contribution harder to assess even though the release-cycle improvement is concrete.
  **Instead:** Name the regression dimension validated
- **The dispatch improvement lacks a scale marker for the backlog problem it removed.**
  > Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.
  The reader understands that morning dispatch improved but cannot judge how large or frequent the nightly backlogs were. One anchor such as backlog volume, delay duration, or affected dispatches would make the operational result more credible.
  **Instead:** Add the backlog volume, delay duration, or dispatches affected

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- **The GRPO training claim uses a single rollout per prompt, which is inconsistent with standard group-relative advantage calculation.**
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  Standard GRPO compares multiple completions for the same prompt; with one rollout, the within-prompt relative advantage is zero or undefined unless a different baseline or estimator is used. The claim also conflicts with the preceding bullet's grouped-rollout setup, so an interviewer may question whether the method was implemented or described correctly.
  **Instead:** Report the multi-rollout GRPO configuration or name the alternative advantage estimator
- **The stabilization claim gives no observable result and treats a configuration detail as evidence of improvement.**
  > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
  A reader cannot tell whether stabilization meant fewer failed runs, lower reward variance, smoother loss, or better convergence. The number of scored trajectories describes how the loop was configured but does not show that training became more stable or by how much.
  **Instead:** Add the observed failure, variance, or convergence improvement
- **The end-to-end latency result does not identify the affected workflow or provide enough measurement context to judge it.**
  > Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
  A reader cannot tell whether the faster result applies to a diagnostic request, model generation, tool execution, or total request processing. Because the neighboring bullet reports a separate edge-inference improvement, the missing scope, baseline, percentile, workload, and comparison policy make this result difficult to interpret.
  **Instead:** Name the diagnostic workflow and add its latency statistic and before-and-after comparison
- **The edge-inference latency claim needs one concrete measurement anchor beyond the relative percentage.**
  > Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.
  The reader cannot tell whether latency moved from a materially slow baseline or from a value already near the system limit. The p95 label and deployment setting are useful, but a before-and-after latency or measured workload is needed to make the result independently judgeable.
  **Instead:** Add the before-and-after p95 latency or measured request workload

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- **The platform-ownership claim is too generic to show what you introduced or how it helped downstream teams.**
  > Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.
  A hiring reader cannot distinguish a meaningful platform change from a broad claim about AI adoption and delivery. Without naming the practices, affected teams, adoption scale, or measured delivery result, the line provides no checkable evidence of impact.
  **Instead:** Name the workflow change, adopting teams, and measured delivery outcome

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- **The evaluation bullet gives a strong correlation and perturbation count without explaining the comparison or controlled trial design.**
  > Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.
  A reader cannot tell whether the 0.89 correlation tracks ordered degradation against paired intact reports or merely separates deletion conditions. Without the paired or controlled structure, repeated variants of the same report may make the trial count look more independent than it is, and the result does not show what decision or capability the evaluator enabled.
  **Instead:** State that scores tracked ordered degradation against paired intact reports
- **The contribution bullet does not say what integration work made the eight metrics run in the default benchmark.**
  > Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.
  A technical reader can see that the metrics were upstreamed, but cannot tell whether you implemented adapters, wired evaluation hooks, or validated the integrations. That missing ownership detail weakens an otherwise durable and externally checkable contribution.
  **Instead:** Name the integration or validation work enabling the default benchmark

## Lower priority (8)

- “Using grouped tool-use rollouts, a composite…”: "a composite reward over accuracy, citation validity and call count" does not explain how those reward terms caused lower latency.
- “Showed the evaluator tracks injected degradation…”, “Traced 3 structural pipeline defects in…”: "Showed the evaluator tracks injected degradation" describes a validation result but not what capability or decision that result enabled. (and 1 more like it)
- “Using grouped tool-use rollouts, a composite…”: "Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced" uses a dangling introductory phrase and does not identify who performed the reduction; begin with an active subject and verb, such as "Reduced end-to-end latency 5% by using grouped tool-use rollouts, a composite reward, and a GRPO loop with a frozen SFT reference." (and 1 more like it)
- “Migrated 30 robot-fleet services from cron…”, “Documented the triage branch’s abstention rules…”, “Upstreamed 8 citation and faithfulness metrics…”, “Showed the evaluator tracks injected degradation…”, “Traced 3 structural pipeline defects in…”: "taking over the weekend on-call rotation" frames an assigned responsibility rather than an action with a clear result; replace it with a more direct action or remove it from this bullet. (and 4 more like it)
- whole resume, dates, whole resume, order: Jun 2022 to Aug 2022: approximately two months between the B.S. and the Junior Software Engineer role. (and 3 more like it)
- SQL — no experience or project bullet shows SQL usage. (and 8 more like it)
- Experience is not newest-first: "Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024" is listed above the more recent "Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025".
- Agent Runtime Suite: The measurable runtime results belong together, but b0 is generic and does not establish a specific connection to the latency and benchmark improvements.

## Reviewer 2

Your resume is already strong: it is metric-heavy, technically credible in many places, and focused on outcomes. The biggest opportunities are correcting inconsistencies, simplifying jargon, and prioritizing your strongest bullets.

## Highest-priority changes

### 1. Put experience in reverse chronological order

Your internship is more recent than Eastern Robotics, so it should appear first:

1. Mobility Systems Company — Oct 2024–May 2025  
2. Eastern Robotics Co. — Aug 2022–Jul 2024

### 2. Correct two metric statements

These will be noticed immediately:

- **900 ms to 600 ms is a 33% reduction, not 50%.**
- **71% to 83% is an increase of 12 percentage points**, not simply “12%.” It is approximately a 17% relative increase.

Use:

> Reduced p95 tool-call latency 33%, from 900 ms to 600 ms, by caching tool results and reusing completed sub-agent responses.

> Increased benchmark task-completion rate by 12 percentage points, from 71% to 83%, by retrying failed sub-agent calls with partial context.

### 3. Resolve the apparent GRPO contradiction

These bullets conflict:

- “Using grouped tool-use rollouts… and a GRPO loop…”
- “sampling a single rollout per prompt…”

GRPO typically relies on multiple outputs in a group to calculate relative advantages. A technical reviewer may challenge this. Clarify what “single rollout” means—for example, one trajectory per sampling call but multiple trajectories grouped for each update—or avoid calling the method GRPO if there was genuinely only one completion per prompt.

Also, the first GRPO bullet is too method-heavy for a 5% result. Consider removing it unless you are targeting research-heavy LLM roles.

### 4. Clarify the dynamic-batching claim

This wording may sound contradictory:

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

Dynamic batching usually improves throughput or concurrent-request performance, not isolated single-request latency. If the reduction came from INT8 quantization, engine compilation, optimized serving, or micro-batching under production traffic, name the actual mechanism accurately.

For example:

> Reduced p95 edge-inference latency 40% by deploying an INT8-optimized engine and tuning the serving pipeline.

### 5. Remove the vague “AI-first” bullet

This is much weaker than the rest of the resume:

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

It contains no concrete action, scope, or result. Replace it with adoption metrics—users, teams, releases, GitHub stars, tasks completed—or delete it.

## Improve readability and concision

Several bullets are overloaded with multiple unrelated accomplishments. Keep each bullet to one primary accomplishment and ideally no more than two lines.

### Eastern Robotics migration bullet

Current version combines:

- 30-service migration
- logging-library rewrite
- onboarding two hires
- weekend on-call
- backlog elimination

Split or prioritize the strongest result:

> Eliminated nightly processing backlogs that delayed morning dispatch by migrating 30 robot-fleet services from cron jobs to an event-driven queue.

Then, if space permits:

> Rewrote the shared logging library and onboarded two engineers to the new event-driven architecture.

Taking over weekend on-call is less valuable unless you can connect it to reliability, incident response, or reduced downtime.

### Mobility Systems

You currently have six bullets. Reduce this to four or five, prioritizing:

1. 68% backlog reduction  
2. Accuracy increase from 71% to 79%  
3. 40% latency reduction  
4. Runbook adoption  
5. One accurate GRPO accomplishment, only if important for the target role

A cleaner version:

- Reduced the diagnostic-case backlog 68% in the first quarter after launch by building an ML triage path that screened 800+ sensor signals per case.
- Improved held-out diagnostic accuracy from 71% to 79% across 1,200 cases by fine-tuning a domain adapter on validated tool-use trajectories.
- Reduced p95 edge-inference latency 40% by deploying an INT8-optimized engine and tuning the serving pipeline.
- Authored abstention and escalation procedures adopted as the on-call review team’s runbook.

“Assistant-only loss masking” is a valid technical detail, but it may be better saved for interviews unless it was central to the improvement.

## Suggested bullet revisions

### Eastern Robotics Co.

- Reduced p95 API latency from 420 ms to 180 ms by caching requests and batching sensor reads; added load tests to prevent performance regressions.
- Shortened perception-model release cycles from two weeks to three days by adding automated regression checks to the CI pipeline.
- Eliminated nightly backlogs that delayed morning dispatch by migrating 30 robot-fleet services from cron jobs to an event-driven queue.
- Owned diagnostics monitoring and on-call operations across two major releases.

The final bullet would be stronger with an outcome such as fewer incidents, faster detection, or reduced mean time to recovery.

### Agent Runtime Suite

Change “Owner” to **Creator** or **Creator and Maintainer** if accurate.

- Reduced p95 tool-call latency 33%, from 900 ms to 600 ms, by caching tool results and reusing completed sub-agent responses.
- Increased benchmark task-completion rate by 12 percentage points, from 71% to 83%, by retrying failed sub-agent calls with partial context.

Add a scope or adoption bullet if possible:

- Number of users or teams
- Number of agents/tools supported
- Requests or tasks processed
- Open-source stars, forks, or contributors
- Production deployment or benchmark size

### Research-Agent Evaluation Framework

This is one of your strongest sections. Tighten the wording slightly:

- Contributed eight citation and faithfulness metrics to an open-source research-agent framework; the metrics now run in the default release benchmark.
- Validated evaluator sensitivity to injected degradation, achieving Kendall’s τ of 0.89 across 400+ report-level trials involving removed citations, sources, and claims.
- Identified three pipeline defects in stability, source handling, and parameter propagation using layered instrumentation; all three were fixed upstream.

## Reorganize the skills section

Git is not a programming language, and Kubernetes does not belong under “ML & Agents.” Use:

**Languages:** Python, TypeScript, SQL, Bash  
**ML/LLM:** PyTorch, LoRA, RAG, LangGraph, GRPO, agent evaluation  
**Infrastructure & Tools:** Kubernetes, Git, CI/CD

Only retain GRPO if you can explain the implementation clearly in an interview. Add C/C++ only if you are genuinely comfortable using them; they may be valuable for computer engineering and robotics roles.

## Formatting and consistency

- Use American spelling for U.S. applications: **“stabilized,” not “stabilised.”**
- Use consistent date formatting, preferably `Sep 2024 – Jun 2026`.
- Label your code link clearly as **GitHub**, **Portfolio**, or **Personal Site** rather than displaying an ambiguous URL.
- Keep punctuation consistent: either end every bullet with a period or none.
- Consider adding GPA only if it is strong.
- Do not add a summary unless you need to clarify a specific target, such as “ML systems engineer specializing in agent evaluation and inference optimization.”

## Recommended overall order

1. Education  
2. Experience  
   - Mobility Systems Company  
   - Eastern Robotics Co.  
3. Projects  
4. Skills  

Your main positioning should be **ML systems / LLM infrastructure engineer with prior production software and robotics experience**. The resume already supports that story; it mainly needs tighter wording and removal of claims that could create technical credibility questions.

## Reviewer 3

# Resume Review

## Overall assessment

You have a strong technical foundation for **ML engineering, applied AI, agent systems, or AI infrastructure roles**. The resume contains unusually good quantitative results—latency reductions, accuracy gains, backlog reduction, benchmark improvements, and upstream open-source contributions.

The biggest problem is not lack of achievement. It is **positioning and prioritization**:

1. There is no summary or target-role headline.
2. Your experience is ordered incorrectly.
3. The resume mixes robotics software, ML engineering, and agent systems without explaining the connecting story.
4. A few bullets are vague or technically imprecise.
5. One metric is mathematically inconsistent: reducing latency from 900 ms to 600 ms is a **33% reduction**, not 50%.
6. Several strong technical bullets need clearer outcomes.

With revision, this could become a strong early-career **ML/AI systems engineer resume**.

---

# 1. Likely reviewer perspective

Because there is no job description, I am assuming you are targeting roles such as:

- Machine Learning Engineer
- Applied ML Engineer
- AI/Agent Systems Engineer
- ML Infrastructure Engineer
- Software Engineer, AI Platform

A hiring manager for these roles will likely be interested in:

- Production ML systems
- Evaluation and benchmarking
- Inference optimization
- Agent/tool-use systems
- Reliability and observability
- Python and TypeScript engineering
- Measurable system improvements
- Ability to move research ideas into production

Your strongest differentiator is the combination of:

> production software reliability + ML inference optimization + agent evaluation and tool-use systems

That connection is present, but the resume currently makes the reader assemble it themselves.

---

# 2. Five-perspective review

## ATS / keyword scan

Without a job description, an exact keyword match rate cannot be calculated. For common AI/ML engineering roles, you have strong coverage in:

- Python
- TypeScript
- SQL
- Bash
- Git
- PyTorch
- LoRA
- GRPO
- RAG
- Agent evaluation
- Kubernetes
- Inference optimization
- Dynamic batching
- Quantization / INT8
- Monitoring
- CI/CD
- Caching
- Event queues
- Load testing

Potentially missing keywords, depending on the role:

- Docker
- AWS, GCP, or Azure
- REST APIs
- FastAPI
- PostgreSQL or other databases
- TensorFlow or JAX
- Model serving
- Distributed systems
- Data pipelines
- Experiment tracking
- Prometheus/Grafana
- Ray, vLLM, Triton, or similar tools
- Unit/integration testing

Only add these if you have actually used them. Do not add keywords just for coverage.

### Important skills-section issue

Your current skills section mixes tools, methods, and concepts:

> `ML & Agents: PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation, Kubernetes`

This is understandable, but stronger group names would make your capabilities easier to scan:

```text
Languages: Python, TypeScript, SQL, Bash
ML & LLMs: PyTorch, LoRA, GRPO, RAG, INT8 quantization, dynamic batching
Agents & Evaluation: LangGraph, multi-agent systems, tool-use evaluation, citation/faithfulness metrics
Systems: Kubernetes, CI/CD, event-driven services, caching, load testing, observability
```

Only use the specific terms if they accurately describe your work.

---

## Recruiter glance

**Verdict: Maybe, with good potential to become Forward.**

A recruiter can see credible engineering experience and strong metrics, but the first glance does not immediately answer:

- What role is Jordan targeting?
- Is this primarily a software engineer, ML engineer, or research engineer?
- What is the candidate’s current technical specialty?

There is no title or summary beneath the contact information. Add a two-line summary that gives the recruiter the answer immediately.

### Suggested headline

```text
ML Engineer | Agent Systems, Model Evaluation, and Production Inference
```

### Suggested summary

```text
ML engineer and software engineer building production diagnostics, agent runtimes, and evaluation systems. Improved model accuracy from 71% to 79%, reduced edge-inference latency by 40%, and upstreamed evaluation metrics adopted by an open-source framework.
```

This is specific, readable, and uses your strongest evidence.

---

## HR screen

**Verdict: Phone screen, after minor revision.**

The resume demonstrates:

- Relevant software engineering experience
- Relevant ML engineering experience
- Production systems exposure
- Quantified impact
- Current graduate study in computer engineering

However, HR may see the chronology as confusing because the dates are not ordered correctly. The internship from October 2024 to May 2025 appears after a full-time role that ended in July 2024. Reverse chronological order should place the internship first.

Also, your projects overlap with your degree and internship. That is normal, but label them clearly as:

- Academic project
- Open-source contribution
- Independent project

This helps establish what was professional employment versus personal or research work.

---

## Hiring manager

**Verdict: Interview, assuming the role is related to ML systems or agent infrastructure.**

### Top three observations

1. **Strong production impact**
   - 420 ms to 180 ms API latency
   - Two-week release cycle reduced to three days
   - 30 services migrated
   - 68% reduction in pending cases
   - 40% inference latency reduction

2. **Good breadth across systems and ML**
   You have experience with monitoring, CI, event queues, inference serving, model adaptation, reinforcement learning, agent evaluation, and open-source contributions.

3. **The narrative is underdeveloped**
   The resume currently looks like a collection of strong projects rather than a deliberate progression toward AI systems engineering.

### Predicted first interview questions

- “Can you explain how you improved diagnostic accuracy from 71% to 79%?”
- “Why did dynamic batching improve latency in this system?”
- “How did you validate that the 68% backlog reduction was caused by the triage branch?”
- “What did the GRPO loop optimize, and why did one rollout per prompt stabilize training?”
- “What exactly did you contribute to the open-source evaluation framework?”

---

## Technical reviewer

**Verdict: Strong interest, with a few credibility and clarity checks.**

### Issues requiring correction

| Resume claim | Issue | Recommended correction |
|---|---|---|
| “900 ms to 600 ms, a 50% reduction” | Mathematically incorrect | “a 33% reduction” |
| “from 71% to 83%” | Ambiguous whether percentage points or relative improvement | Use “by 12 percentage points” |
| “accelerating delivery and improving outcomes” | Unsupported and generic | Replace with a concrete outcome |
| “Using grouped tool-use rollouts…” | Awkward sentence fragment and no clear result | Rewrite with subject, method, and outcome |
| “Drove adoption of AI-first engineering practices” | Buzzword-heavy and difficult to verify | State exactly what you implemented or changed |

### Claims that should be clarified in interviews

- What does “diagnostic accuracy” measure?
- What was the baseline and evaluation protocol for the 68% backlog reduction?
- What is the benchmark suite and how large is it?
- What does “adoption” mean for the Agent Runtime Suite?
- Were the open-source metrics accepted through a pull request, released, or merely proposed?
- Did you own the full GRPO training pipeline or contribute to one component?

---

# 3. Most important structural changes

## 1. Add a summary

This is the single biggest omission. Your experience is good enough that the top of the resume should immediately frame you as an ML/AI systems engineer.

Use something like:

```text
ML engineer and software engineer building production diagnostics, agent runtimes, and evaluation systems. Improved model accuracy from 71% to 79%, reduced edge-inference latency by 40%, cut operational backlogs by 68%, and contributed evaluation metrics adopted by an open-source framework.
```

Avoid describing yourself as an “AI enthusiast,” “passionate engineer,” or similar generic language.

---

## 2. Fix experience order

Use reverse chronological order:

1. Mobility Systems Company — Machine Learning Engineering Intern  
   Oct 2024 – May 2025

2. Eastern Robotics Co. — Junior Software Engineer  
   Aug 2022 – Jul 2024

The current order makes the resume look mechanically inconsistent.

---

## 3. Correct the latency metric

Current:

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction

Correct version:

> Cut p95 tool-call latency from 900 ms to 600 ms, a 33% reduction, by caching tool results and reusing completed sub-agent answers.

Alternatively, avoid the percentage:

> Cut p95 tool-call latency from 900 ms to 600 ms by caching tool results and reusing completed sub-agent answers.

The second version is cleaner.

---

## 4. Replace vague project bullets

Current:

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

This is the weakest bullet on the resume. It uses broad language but gives no concrete evidence.

Replace it with a specific implementation or result. For example:

```text
Built reusable agent-runtime components for tool execution, result caching, and sub-agent context reuse, enabling downstream teams to integrate multi-agent workflows through a shared TypeScript platform.
```

If you have a specific adoption metric, use it:

```text
Built a shared TypeScript agent runtime adopted by [N] downstream teams, standardizing tool execution, result caching, and sub-agent context reuse.
```

Do not claim adoption unless you can support it.

---

# 4. Bullet-by-bullet recommendations

## Mobility Systems Company

### Current

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.

This is already strong. Slightly tighten it:

```text
Built an ML diagnostics-triage branch for an industrial inspection system processing 800+ sensor signals per case, reducing the pending-case backlog 68% in the first quarter after launch.
```

### Current

> Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

Strong technical bullet. Make the metric precise:

```text
Raised diagnostic accuracy from 71% to 79% on 1,200 held-out cases by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.
```

If this means a 8-percentage-point gain, say so explicitly:

```text
Improved diagnostic accuracy by 8 percentage points, from 71% to 79%, on 1,200 held-out cases...
```

### Current

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

Good. Slightly more direct:

```text
Reduced p95 single-request edge-inference latency 40% by serving an INT8 engine with dynamic batching.
```

If you have the actual milliseconds, include them. For example:

```text
Reduced p95 single-request edge-inference latency from X ms to Y ms by serving an INT8 engine with dynamic batching.
```

### Current

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

This needs a major rewrite. It lacks a clear subject and is difficult to parse.

Possible revision:

```text
Reduced end-to-end tool-use latency 5% by training with grouped rollouts and a composite reward over answer accuracy, citation validity, and tool-call count using GRPO with a frozen SFT reference.
```

If the 5% reduction was not the result of training itself, separate the engineering and modeling claims:

```text
Improved tool-use efficiency 5% by combining grouped rollouts, a composite accuracy/citation/call-count reward, and GRPO with a frozen SFT reference.
```

Be prepared to explain exactly how “latency” was measured and why the reward affected it.

### Current

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

This is technically interesting but currently has no measured outcome. It may be valuable for research-oriented roles, but it is less compelling for general ML engineering roles.

Possible revision:

```text
Stabilized GRPO training under sparse rewards by sampling one rollout per prompt, ensuring each update used exactly one scored trajectory.
```

If you measured variance, convergence speed, reward improvement, or failure-rate reduction, include it. Otherwise, consider combining this with the previous GRPO bullet.

### Current

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

Good operational and communication signal:

```text
Defined abstention rules and escalation paths for the diagnostics triage branch; on-call reviewers adopted the documentation as the team runbook.
```

---

## Eastern Robotics Co.

These bullets are strong and show production engineering maturity.

### Current

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

“Owned” is acceptable, but the bullet would be stronger with a result:

```text
Owned monitoring dashboards and on-call workflows for the diagnostics service across two major releases, improving visibility into production failures and service health.
```

Only use “improving” if you can substantiate it. If you have alert-volume, incident-response, or uptime data, use that instead.

### Current

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.

Strong. Tighten the ending:

```text
Reduced p95 API latency from 420 ms to 180 ms by caching requests and batching sensor reads; added load tests to prevent regression.
```

### Current

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

Excellent bullet. Minor edit:

```text
Maintained the perception team’s model-release CI pipeline and added automated regression checks, shortening release cycles from two weeks to three days.
```

### Current

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

This contains too many achievements. Split or simplify:

```text
Migrated 30 robot-fleet services from cron jobs to an event queue and rewrote the shared logging library, eliminating nightly backlogs that delayed morning dispatch.
```

Then add the people/on-call information separately if space permits:

```text
Onboarded two engineers and took over the weekend on-call rotation during the migration.
```

The first version has a clearer technical impact.

---

## Research-Agent Evaluation Framework

These bullets are among the most distinctive on the resume.

### Current

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

Strong. Consider emphasizing external adoption:

```text
Upstreamed eight citation and faithfulness metrics to an open-source research-agent framework; the metrics now run in the default benchmark for every release.
```

If the framework has a meaningful number of users or contributors, include that only if verifiable.

### Current

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

Good, but “injected degradation” is slightly compressed:

```text
Validated that the evaluator tracks controlled degradation with Kendall correlation τ=0.89 across 400+ report-level trials removing citations, sources, and claims.
```

### Current

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

Strong contribution signal:

```text
Used layered instrumentation to trace three structural defects in stability, sourcing, and parameter handling to their responsible modules; all three were fixed upstream.
```

---

# 5. Skills section revision

Suggested structure:

```text
SKILLS

Languages: Python, TypeScript, SQL, Bash, Git
ML & LLMs: PyTorch, LoRA, GRPO, RAG, INT8 inference, dynamic batching
Agents & Evaluation: LangGraph, multi-agent systems, tool-use evaluation, citation and faithfulness metrics
Systems: Kubernetes, CI/CD, event-driven services, caching, load testing, monitoring
```

Important: do not list “CI/CD,” “monitoring,” or “event-driven services” unless you are comfortable discussing them technically. Your experience bullets support them, but they are not currently listed as skills.

---

# 6. Scoring

| Dimension | Score | Notes |
|---|---:|---|
| ATS keyword readiness | 7.5/10 | Strong technical terms, but no target-role framing and no JD-specific optimization |
| Summary | 4/10 | No summary currently |
| Skills section | 7/10 | Good tools, but grouping can better signal systems and evaluation expertise |
| Bullet quality | 8/10 | Strong metrics and technical depth; several bullets need tightening |
| Project quality | 8/10 | Highly relevant, especially evaluation framework; one vague project bullet |
| Narrative coherence | 7/10 | Strong underlying story, but the resume does not explicitly connect robotics, ML, and agents |
| Formatting and structure | 7/10 | Clean text structure, but experience ordering should be fixed |
| Credibility signals | 8/10 | Good quantitative results and open-source contribution; clarify provenance and evaluation methods |

### Overall: 7.3/10

This is a strong foundation. The resume is not suffering from weak experience; it is losing value through **missing framing, ordering, vague wording, and one incorrect metric**.

---

# 7. Priority changes

## Tier 1 — Make these changes

### 1. Add a summary and target-role headline

**Expected impact:** Very high

```text
ML Engineer | Agent Systems, Model Evaluation, and Production Inference

ML engineer and software engineer building production diagnostics, agent runtimes, and evaluation systems. Improved model accuracy from 71% to 79%, reduced edge-inference latency by 40%, cut operational backlogs by 68%, and contributed evaluation metrics adopted by an open-source framework.
```

### 2. Correct the experience order

**Expected impact:** High

Put Mobility Systems Company before Eastern Robotics Co.

### 3. Correct the 900 ms to 600 ms percentage

**Expected impact:** High credibility improvement

Change “50% reduction” to “33% reduction.”

### 4. Replace the “AI-first engineering practices” bullet

**Expected impact:** High

Replace it with a concrete description of what you built, integrated, or enabled.

### 5. Rewrite the GRPO bullet

**Expected impact:** Medium to high

Give it a clear subject and explain the relationship between the method and result.

---

## Tier 2 — Recommended

1. Clarify whether improvements such as 71% to 79% are percentage-point gains or relative gains.
2. Add a “Systems” or “Infrastructure” skills category.
3. Use “eight” and “three” instead of numerals for small numbers if that matches your formatting style.
4. Add benchmark size, user count, or adoption numbers where available.
5. Label projects as independent, academic, or open-source if their context is not obvious.
6. Include exact latency values whenever possible, not only percentage improvements.
7. Consider moving the Research-Agent Evaluation Framework above Agent Runtime Suite if targeting evaluation or research engineering roles.

---

## Tier 3 — Optional polish

1. Replace “Owned” with a more specific responsibility where possible.
2. Avoid repeated use of “reduced,” “raised,” and “cut” by varying verbs slightly.
3. Standardize punctuation across all bullets.
4. Use consistent capitalization for terms such as “edge inference,” “tool use,” and “on-call.”

---

# 8. Interview bridge points

| Resume topic | How to frame it in an interview |
|---|---|
| Robotics diagnostics | “The robotics work taught me to build systems where observability, failure handling, and operational workflows matter as much as model quality.” |
| ML diagnostics triage | “I treated the model as part of a larger decision system, including abstention rules, escalation paths, and reviewer workflows.” |
| INT8 and dynamic batching | “The core problem was improving inference efficiency under production latency constraints, not just optimizing an offline model.” |
| Agent runtime | “The runtime work focused on making tool-using agents faster and more reusable by caching results and preserving useful sub-agent context.” |
| Evaluation framework | “I focused on whether an evaluator could detect meaningful degradation, not just whether it produced a single aggregate score.” |
| GRPO training | “The main challenge was making optimization stable when rewards were sparse and each trajectory had multiple quality dimensions.” |
| Robotics CI and event queues | “My systems background helps me think about ML services as production software, with regression testing, deployment safety, queues, and on-call ownership.” |

---

# Recommended final positioning

Your resume should present you as:

> **An ML systems engineer who combines production software engineering with model optimization, agent runtimes, and rigorous evaluation.**

That is more compelling and differentiated than presenting yourself separately as a robotics engineer, ML intern, and agent-project contributor.

The highest-value revision is to make that story explicit at the top, correct the chronology and metric error, and replace the vague project bullet with a concrete engineering outcome.

## Reviewer 4

Your resume has strong technical depth and unusually good quantification, especially around latency, accuracy, throughput, and operational impact. The main issues are **ordering, clarity, a numerical inconsistency, and several bullets that are too dense or vague**.

## Highest-priority changes

### 1. Fix the numerical inconsistency

You wrote:

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction

That is a **33% reduction**, not 50%. Change it to:

> Reduced p95 tool-call latency from 900 ms to 600 ms, a 33% reduction, by caching tool results and reusing completed sub-agent answers.

Or, if the actual reduction was 50%, the ending latency should be 450 ms.

### 2. Reorder experience chronologically

Your Mobility Systems internship, ending May 2025, should appear **above** Eastern Robotics, which ended July 2024.

Recommended order:

1. Mobility Systems Company — Oct 2024–May 2025  
2. Eastern Robotics Co. — Aug 2022–Jul 2024

The overlap with your M.S. is acceptable, but clarify whether the internship was part-time, remote, or concurrent if relevant.

### 3. Replace vague or low-value language

This bullet is too generic:

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

It does not say what you built, how many teams adopted it, or what improved. Replace it with a concrete contribution, such as:

> Built and maintained a TypeScript agent-runtime toolkit used by [X] engineers to standardize tool calling, retries, caching, and sub-agent execution.

Only include the adoption metric if you can substantiate it.

### 4. Reduce jargon or explain it through outcomes

The internship section currently reads like a research log. Terms such as:

- assistant-only loss masking
- grouped tool-use rollouts
- composite reward
- GRPO
- frozen SFT reference
- sparse rewards

can be valuable for an ML/research role, but several appear without enough context. Keep the strongest technical details, but connect them to the result.

For example, instead of:

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

Use:

> Improved agentic diagnostic latency by 5% through GRPO fine-tuning with rewards for accuracy, citation validity, and tool-call efficiency.

This preserves the substance while making the accomplishment easier to scan.

### 5. Make the accuracy improvement precise

This is mostly good:

> Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79%

Consider adding “8 percentage points” to avoid ambiguity:

> Improved diagnostic accuracy by 8 percentage points, from 71% to 79%, across 1,200 held-out cases by fine-tuning a domain adapter on validated tool-use trajectories.

## Suggested revised experience section

### Mobility Systems Company — Machine Learning Engineering Intern  
Metro City, USA | Oct 2024–May 2025

- Built a machine-learning diagnostic triage branch for an industrial inspection system that analyzed 800+ sensor signals per case, reducing the pending-case backlog by 68% in its first quarter.
- Improved diagnostic accuracy by 8 percentage points, from 71% to 79%, across 1,200 held-out cases by fine-tuning a domain adapter on validated tool-use trajectories.
- Reduced p95 latency for single-request edge inference by 40% by deploying an INT8 engine with dynamic batching.
- Improved agentic diagnostic latency by 5% through GRPO fine-tuning with rewards for accuracy, citation validity, and tool-call efficiency.
- Stabilized sparse-reward GRPO training by using one scored rollout per prompt, producing consistent single-trajectory updates.
- Documented abstention rules and escalation paths for on-call reviewers; the documentation became the team’s diagnostic triage runbook.

### Eastern Robotics Co. — Junior Software Engineer  
Metro City, Country | Aug 2022–Jul 2024

- Owned monitoring dashboards for the diagnostics service across two major releases and supported the on-call rotation that relied on them.
- Reduced p95 API latency from 420 ms to 180 ms by caching requests and batching sensor reads; added load tests to prevent regression.
- Automated model-release regression checks in the perception team’s CI pipeline, reducing release cycles from two weeks to three days.
- Migrated 30 robot-fleet services from cron jobs to an event queue and rewrote the shared logging library, eliminating nightly backlogs that delayed morning dispatch.
- Onboarded two new hires and assumed responsibility for the weekend on-call rotation.

The final bullet in your original version combines too many accomplishments. Splitting it improves readability and makes each contribution easier to evaluate.

## Suggested revised projects section

### Agent Runtime Suite — Owner  
TypeScript, Multi-Agent Systems | Aug 2025–Present

- Built a TypeScript runtime for tool calling, caching, retries, and multi-agent task execution.
- Reduced p95 tool-call latency from 900 ms to 600 ms—a 33% reduction—by caching tool results and reusing completed sub-agent answers.
- Improved benchmark task-completion rate from 71% to 83% by retrying failed sub-agent calls with preserved partial context.

### Research-Agent Evaluation Framework — Contributor  
LLM Evaluation | Feb 2025–Jul 2025

- Contributed eight citation and faithfulness metrics to an open-source research-agent framework; the metrics now run in the default release benchmark.
- Demonstrated that the evaluator detected injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials.
- Used layered instrumentation to identify three pipeline defects involving stability, sourcing, and parameter handling; all three were fixed upstream.

## Formatting and structure changes

### Use consistent date formatting

Use en dashes and consistent month formatting:

- `Sep 2024 – Expected Jun 2026`
- `Aug 2022 – Jul 2024`

Avoid mixing hyphen styles.

### Consider adding a short summary

For ML engineering, applied AI, or agent-infrastructure roles, a two-line summary could help position you:

> Machine learning engineer and computer engineering graduate student focused on agentic systems, model evaluation, inference optimization, and production robotics software. Experience improving diagnostic accuracy, latency, CI/CD reliability, and fleet operations.

Skip the summary if you need the space for stronger accomplishments.

### Improve the skills section

Your current skills are good but could be organized more precisely:

**Languages:** Python, TypeScript, SQL, Bash  
**ML/Deep Learning:** PyTorch, LoRA, GRPO, model fine-tuning, INT8 inference  
**Agents/LLM Systems:** RAG, LangGraph, tool-use agents, agent evaluation  
**Infrastructure:** Kubernetes, Git, CI/CD, distributed systems

Only add technologies you can discuss in an interview. If you used Docker, cloud platforms, message queues, or specific databases, include them—but avoid listing them unless they are supported by your experience bullets.

### Make the portfolio URL clickable and complete

Instead of:

> example.com/code/jordan-lee

Use the full URL, and add LinkedIn or GitHub if relevant:

> GitHub: github.com/jordan-lee  
> LinkedIn: linkedin.com/in/jordan-lee

## Potential concerns to address

- **Current M.S. and internship overlap:** Not a problem, but be prepared to explain the arrangement.
- **Project dates overlap with employment and school:** Also fine, especially for open-source or personal work, but label the project as open source if applicable.
- **“Owner” may be ambiguous:** Use “Creator,” “Lead Developer,” or “Maintainer” if that more accurately describes your role.
- **“Junior” title:** Keep your official title, but let the bullets demonstrate that you performed beyond entry-level scope.
- **Highly technical ML claims:** Be ready to explain the training setup, evaluation methodology, baseline, and whether metrics were offline or production metrics.

Overall, the resume is strong for **ML engineering, LLM/agent infrastructure, robotics software, and applied research engineering**. The biggest immediate win is to make it easier to scan: lead with impact, shorten the dense technical bullets, reorder the experience, and correct the 900-to-600 ms percentage.
