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