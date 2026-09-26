# RESUME REVIEW

You have strong technical content and unusually good metrics, but the resume currently has a few credibility, clarity, and consistency problems that should be fixed before applying.

## Highest-priority changes

### 1. Remove or correct the test-set leakage bullet

This bullet is a serious red flag:

> Trained the triage classifier with early stopping on the test set, then reported its 91% test accuracy as held-out performance.

Using the test set for early stopping means it is no longer a valid held-out evaluation set. A technical recruiter or ML interviewer may interpret this as poor experimental methodology or inflated results.

**Replace it with the accurate version**, for example:

> Trained the triage classifier with early stopping on a validation split and reported 91% accuracy on a separate held-out test set.

Only use this if that is what actually happened. Otherwise, remove the metric entirely and describe the evaluation protocol accurately.

### 2. Fix the latency percentage

You wrote:

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction

That is a **33% reduction**, not 50%.

Use:

> Reduced p95 tool-call latency from 900 ms to 600 ms—a 33% reduction—by caching tool results and reusing completed sub-agent answers.

### 3. Clarify the 71% to 83% improvement

This is either:

- **12 percentage points**, or
- **16.9% relative improvement**

Write:

> Increased benchmark task-completion rate from 71% to 83%—a 12-percentage-point improvement—by retrying failed sub-agent calls with partial context.

Avoid saying “raised by 12%” because it is ambiguous and technically inaccurate if you mean percentage points.

### 4. Reorder the experience section

Your dates currently place the 2024–2025 internship after the 2022–2024 full-time role. Use reverse chronological order:

1. Mobility Systems Company — ML Engineering Intern
2. Eastern Robotics Co. — Junior Software Engineer
3. Projects
4. Education

If the internship occurred while you were enrolled in your M.S., make that clear through the dates. Also verify that the project dates are correct: **Agent Runtime Suite begins Aug 2025**, while the M.S. began Sep 2024.

### 5. Replace vague or inflated language

This bullet is too generic:

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

It lacks a concrete result and sounds like résumé marketing language. Replace it with a technical contribution:

> Built reusable TypeScript runtime components for tool invocation, sub-agent coordination, retries, and result caching, enabling downstream teams to integrate multi-agent workflows.

If you have adoption metrics, add them:

> Integrated by 4 downstream teams to standardize tool invocation, retries, and sub-agent coordination.

## Bullet-by-bullet recommendations

### Mobility Systems Company

Current:

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.

Strong bullet. Make the technical implementation clearer:

> Built an ML-assisted diagnostics triage pipeline that analyzed 800+ sensor signals per case, reducing the pending-case backlog by 68% during the first quarter after launch.

Current:

> Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

Strong, but “domain adapter” may be unclear. If technically accurate, specify the model or method:

> Improved diagnostic accuracy from 71% to 79% on 1,200 held-out cases by fine-tuning a parameter-efficient domain adapter on validated tool-use trajectories with assistant-only loss masking.

Current:

> Designed a routing layer that uses cross-entropy to rank the 3 specialist agents’ findings by statistical significance before the reviewer sees them.

This is technically unclear. Cross-entropy is generally a loss function, not something normally described as ranking findings by statistical significance. Clarify what was actually implemented:

> Designed a routing layer that scored and prioritized findings from three specialist agents before human review, reducing reviewer workload and surfacing the most relevant evidence first.

If the model actually produced calibrated probabilities, say so:

> Designed a routing layer that used calibrated classifier probabilities to rank findings from three specialist agents before human review.

Current:

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

This is dense and grammatically incomplete. Rewrite:

> Applied grouped tool-use rollouts and GRPO with a frozen SFT reference, optimizing a composite reward for accuracy, citation validity, and tool-call efficiency; reduced end-to-end latency by 5%.

Consider splitting it into two bullets if the RL work is central to the role.

Current:

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

Good cross-functional bullet. Make it more direct:

> Authored abstention rules and escalation paths for on-call reviewers; the documentation was adopted as the team’s operating runbook.

### Eastern Robotics Co.

Current:

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

“Owned” is acceptable, but the impact is unclear. Add the monitoring technology or operational outcome:

> Built and maintained monitoring dashboards for the diagnostics service across two major releases, supporting the on-call rotation and incident triage.

Better still, quantify alerts, services, uptime, or incident response if available.

Current:

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.

Excellent. Slightly tighten:

> Reduced p95 API latency from 420 ms to 180 ms by caching requests and batching sensor reads; added load tests to prevent regression.

Current:

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

Strong. Specify the CI tool if relevant:

> Maintained the perception team’s model-release CI pipeline and added automated regression checks, reducing release cycles from two weeks to three days.

Current:

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

This contains too many accomplishments in one sentence. Split it:

> Migrated 30 robot-fleet services from cron jobs to an event-driven queue, eliminating nightly backlogs that delayed morning dispatch.  
> Rewrote the shared logging library and onboarded two new hires while taking over the weekend on-call rotation.

That gives the important systems result more prominence.

## Suggested structure

For your target audience—SWE, ML Engineer, or Applied AI roles—I would use:

```text
Jordan Lee
Metro City, USA | phone | email
GitHub | LinkedIn | Portfolio

TECHNICAL SKILLS

EXPERIENCE

PROJECTS

EDUCATION
```

Because you are currently pursuing an M.S., you can also put **Education directly below Skills** if you are applying primarily to internships or new-grad roles. For experienced software engineering applications, keep Experience first.

## Suggested skills rewrite

Your current skills section is good but too compressed. Also, Kubernetes does not naturally belong under “ML & Agents.”

```text
Languages: Python, TypeScript, SQL, Bash
ML/AI: PyTorch, LoRA, GRPO, RAG, Multi-Agent Systems, Agent Evaluation
Frameworks/Tools: LangGraph, Git, Kubernetes
```

Add technologies only if you can discuss them in an interview. Consider including relevant items that appear in your bullets, such as:

- CI/CD technology
- Message queue or event-streaming technology
- Caching technology
- Cloud platform
- Databases
- Testing tools

For example:

```text
Languages: Python, TypeScript, SQL, Bash
ML/AI: PyTorch, LoRA, GRPO, RAG, Multi-Agent Systems, Agent Evaluation
Backend/Systems: Event-Driven Architecture, Caching, REST APIs, Load Testing
Infrastructure: Kubernetes, CI/CD, Git
```

Do not add these unless they are genuinely part of your experience.

## Example revised version

```text
Jordan Lee
+1 (555) 010-2468 | jordan.lee@example.com
GitHub: [actual GitHub URL] | LinkedIn: [URL] | Portfolio: [URL]

TECHNICAL SKILLS
Languages: Python, TypeScript, SQL, Bash
ML/AI: PyTorch, LoRA, GRPO, RAG, Multi-Agent Systems, Agent Evaluation
Backend/Systems: REST APIs, Event-Driven Architecture, Caching, Load Testing
Infrastructure: Kubernetes, CI/CD, Git

EXPERIENCE

Mobility Systems Company — Machine Learning Engineering Intern
Metro City, USA | Oct 2024 – May 2025
• Built an ML-assisted diagnostics triage pipeline that analyzed 800+ sensor signals per case, reducing the pending-case backlog by 68% during the first quarter after launch.
• Improved diagnostic accuracy from 71% to 79% on 1,200 held-out cases by fine-tuning a parameter-efficient domain adapter on validated tool-use trajectories with assistant-only loss masking.
• Designed a routing layer that scored and prioritized findings from three specialist agents before human review.
• Applied grouped tool-use rollouts and GRPO with a frozen SFT reference, optimizing a composite reward for accuracy, citation validity, and tool-call efficiency; reduced end-to-end latency by 5%.
• Trained the triage classifier with early stopping on a validation split and evaluated it on a separate held-out test set, achieving 91% accuracy.
• Authored abstention rules and escalation paths for on-call reviewers; the documentation was adopted as the team’s operating runbook.

Eastern Robotics Co. — Junior Software Engineer
Metro City, Country | Aug 2022 – Jul 2024
• Built and maintained monitoring dashboards for the diagnostics service across two major releases, supporting the on-call rotation and incident triage.
• Reduced p95 API latency from 420 ms to 180 ms by caching requests and batching sensor reads; added load tests to prevent regression.
• Maintained the perception team’s model-release CI pipeline and added automated regression checks, reducing release cycles from two weeks to three days.
• Migrated 30 robot-fleet services from cron jobs to an event-driven queue, eliminating nightly backlogs that delayed morning dispatch.
• Rewrote the shared logging library, onboarded two new hires, and took over the weekend on-call rotation.

PROJECTS

Agent Runtime Suite — Owner
TypeScript, Multi-Agent Systems | Aug 2025 – Present
• Built reusable runtime components for tool invocation, sub-agent coordination, retries, and result caching.
• Reduced p95 tool-call latency from 900 ms to 600 ms—a 33% reduction—by caching tool results and reusing completed sub-agent answers.
• Increased benchmark task-completion rate from 71% to 83%, a 12-percentage-point improvement, by retrying failed sub-agent calls with partial context.

Research-Agent Evaluation Framework — Contributor
LLM Evaluation | Feb 2025 – Jul 2025
• Upstreamed eight citation and faithfulness metrics to an open-source research-agent framework; the metrics now run in the default release benchmark.
• Demonstrated that the evaluator detected injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials.
• Traced three structural defects in stability, sourcing, and parameter handling to their respective modules using layered instrumentation; all three were fixed upstream.

EDUCATION

Western State University — M.S. Computer Engineering
Metro City, USA | Expected Jun 2026

Eastern Institute of Technology — B.S. Electrical Engineering
Metro City, Country | Jun 2022
```

## Additional recommendations

- Replace `example.com/code/jordan-lee` with a real GitHub, LinkedIn, or portfolio URL.
- Add a GitHub link if you are applying for software engineering roles.
- Use a consistent bullet style and avoid line breaks inside words such as `on- call`.
- Keep the resume to one page if possible; two pages are acceptable if you are targeting specialized ML/AI roles and the content remains highly relevant.
- Tailor the skills and first three bullets to each job description.
- Be prepared to explain every metric, especially the 68% backlog reduction, 79% accuracy, 91% accuracy, GRPO setup, and benchmark methodology.
- Verify all future or potentially inconsistent dates, particularly the Aug 2025 project start date and the overlap between the M.S., internship, and projects.