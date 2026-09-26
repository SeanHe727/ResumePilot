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