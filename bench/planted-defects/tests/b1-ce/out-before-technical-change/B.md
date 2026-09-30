Your resume has strong technical depth and unusually good quantified impact. The main issues are **credibility, metric accuracy, chronology, and density**. A few bullets currently create red flags for a technical reviewer.

## Highest-priority changes

### 1. Fix the metric inconsistencies

This bullet is mathematically incorrect:

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction

That is a **33.3% reduction**. Use:

> Cut p95 tool-call latency from 900 ms to 600 ms, a 33% reduction, by caching tool results and reusing completed sub-agent answers.

This one also needs clarification:

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%

Going from 71% to 83% is:

- **+12 percentage points**, or
- **16.9% relative improvement**

Use:

> Increased benchmark task-completion rate by 12 percentage points, from 71% to 83%, by retrying failed sub-agent calls with partial context.

Similarly, distinguish “accuracy percentage points” from “relative improvement” throughout the resume.

---

### 2. Remove or correct the test-set leakage bullet

This is the most serious issue:

> Trained the triage classifier with early stopping on the test set, then reported its 91% test accuracy as held-out performance.

Early stopping on the test set means the test set is no longer a valid unbiased evaluation set. Calling it “held-out performance” is technically incorrect and will likely concern ML reviewers.

Best option: **remove this bullet and rerun the evaluation properly** using:

- training set for model fitting,
- validation set for early stopping and hyperparameter selection,
- untouched test set for final reporting.

If you cannot rerun it, write it transparently:

> Achieved 91% accuracy on a test split used during early-stopping decisions; identified the need for a new untouched evaluation set for unbiased reporting.

That is honest, but it is still weaker than omitting the result.

---

### 3. Reverse the experience order

Your experience should be listed newest first:

1. Mobility Systems Company — Oct 2024–May 2025  
2. Eastern Robotics Co. — Aug 2022–Jul 2024  

The current order makes the resume look out of sequence.

You may also want to clarify the overlapping dates between your M.S. and internship if relevant, for example:

> Machine Learning Engineering Intern, part-time / during M.S. program

Only add this if it helps explain the overlap.

---

### 4. Replace vague language with concrete technical impact

This bullet is too generic:

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

It contains no verifiable action or measurement. Replace it with something specific, such as:

> Built reusable agent-runtime patterns for tool invocation, retries, caching, and evaluation, enabling downstream teams to prototype multi-agent workflows without duplicating infrastructure.

Or, if you have a measurable result:

> Standardized agent-runtime patterns used by [X] downstream teams, reducing implementation time for new workflows by [Y]%.

Avoid phrases such as:

- “improving outcomes”
- “accelerating delivery”
- “AI-first”
- “drove adoption”

unless they are supported by a specific result.

---

### 5. Simplify the ML bullets for readability

Your Mobility Systems internship is technically impressive, but several bullets are very dense. Recruiters may not understand them quickly, while technical interviewers may question imprecise wording.

This bullet is questionable:

> Designed a routing layer that uses cross-entropy to rank the 3 specialist agents’ findings by statistical significance before the reviewer sees them.

Cross-entropy is generally a loss function, not a measure of statistical significance. If you mean model confidence or likelihood, say that:

> Designed a routing layer that ranks findings from three specialist agents by calibrated confidence before reviewer inspection.

If you genuinely performed a statistical significance calculation, name the method, such as p-values, likelihood ratios, or confidence intervals.

This bullet is also overly compressed:

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

Rewrite it as:

> Reduced end-to-end latency by 5% by training with grouped tool-use rollouts and a composite reward for diagnostic accuracy, citation validity, and tool-call efficiency, using GRPO with a frozen SFT reference model.

The result should come first, followed by the method.

---

## Recommended revised experience section

### Mobility Systems Company — Machine Learning Engineering Intern  
Metro City, USA | Oct 2024–May 2025

- Built an ML-assisted diagnostics triage branch for an industrial inspection system processing 800+ sensor signals per case; reduced the pending-case backlog by 68% in the first quarter after launch.
- Improved diagnostic accuracy from 71% to 79% on 1,200 held-out cases by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.
- Designed a routing layer that ranks findings from three specialist agents by calibrated confidence before reviewer inspection.
- Reduced end-to-end latency by 5% using grouped tool-use rollouts and a composite reward for accuracy, citation validity, and tool-call efficiency in a GRPO training loop.
- Documented abstention rules and escalation paths for on-call reviewers; the resulting runbook was adopted by the team.

### Eastern Robotics Co. — Junior Software Engineer  
Metro City, Country | Aug 2022–Jul 2024

- Owned monitoring dashboards for the diagnostics service across two major releases and supported the associated on-call rotation.
- Reduced p95 API latency from 420 ms to 180 ms by adding request caching and batching sensor reads; added load tests to prevent regression.
- Automated regression checks for perception-model releases, reducing release cycles from two weeks to three days.
- Migrated 30 robot-fleet services from cron jobs to an event queue and rewrote the shared logging library, eliminating nightly backlogs that delayed morning dispatch.
- Onboarded two new hires and assumed responsibility for the weekend on-call rotation.

The last Eastern Robotics bullet in your original version combines too many accomplishments. Splitting it makes the scope clearer.

---

## Recommended revised projects section

### Agent Runtime Suite — Developer  
TypeScript, Multi-Agent Systems | Aug 2025–Present

- Built reusable agent-runtime infrastructure for tool invocation, retries, caching, and sub-agent context reuse.
- Cut p95 tool-call latency from 900 ms to 600 ms, a 33% reduction, by caching tool results and reusing completed sub-agent answers.
- Increased benchmark task-completion rate by 12 percentage points, from 71% to 83%, by retrying failed sub-agent calls with partial context.

“Owner” is acceptable, but **Developer**, **Project Lead**, or **Creator** may be clearer depending on what you actually did.

### Research-Agent Evaluation Framework — Contributor  
LLM Evaluation | Feb 2025–Jul 2025

- Contributed eight citation and faithfulness metrics to an open-source research-agent framework; they now run in the default benchmark for every release.
- Demonstrated that the evaluator detected injected degradation with Kendall’s τ = 0.89 across 400+ report-level trials involving removed citations, sources, and claims.
- Used layered instrumentation to identify three pipeline defects involving stability, sourcing, and parameter handling; all three were fixed upstream.

“Upstreamed” is technically understood by engineers, but “contributed” or “merged upstream” is clearer for a general reader.

---

## Formatting and organization

### Header

Your header is fine, but consider making the code link more descriptive:

> Jordan Lee  
> phone | email | GitHub | LinkedIn

If `example.com/code/jordan-lee` is a portfolio rather than GitHub, label it:

> Portfolio: example.com/code/jordan-lee

### Education

Your education section is appropriately placed at the top because your M.S. is current. Consider adding a specialization or relevant coursework only if it supports the target role:

> M.S. in Computer Engineering, expected Jun 2026  
> Focus: Machine Learning Systems, Distributed Systems, Computer Architecture

Do not add coursework if it makes the resume longer without adding value.

### Skills

Your current skills are good, but they could be grouped more precisely:

> **Programming:** Python, TypeScript, SQL, Bash, Git  
> **ML/Deep Learning:** PyTorch, LoRA, GRPO  
> **Agents and Evaluation:** LangGraph, RAG, multi-agent systems, agent evaluation  
> **Infrastructure:** Kubernetes, CI/CD, distributed systems

Only list Kubernetes if you can discuss how you used it in an interview. You may also want to add technologies demonstrated in the bullets, such as:

- request caching
- event queues
- load testing
- CI/CD
- observability
- model evaluation

Avoid listing too many tools that do not appear elsewhere in the resume.

---

## Additional content improvements

- Add links to relevant projects, repositories, papers, or demos where possible.
- Include the specific event-queue technology, cache, CI system, and cloud/platform tools if they are relevant to the role.
- Replace “800+ sensor signals per case” with “800+ signals per case” if “sensor” is redundant.
- Use consistent punctuation: either end every bullet with a period or omit periods from all bullets.
- Keep the resume to one page if you have less than roughly five years of experience.
- For software/ML roles, lead with **Experience**, then **Projects**, then **Education**, unless the graduate degree is particularly central to the position.

## Overall assessment

The resume could be very strong for software engineering, ML engineering, or agent-infrastructure roles. The most important fixes are:

1. Correct the 900 ms → 600 ms percentage.
2. Change 71% → 83% to “12 percentage points.”
3. Remove or transparently correct the test-set early-stopping bullet.
4. Reorder experience chronologically.
5. Replace vague “AI-first engineering” language with concrete technical work.
6. Clarify the cross-entropy/statistical-significance claim.
7. Reduce jargon density and put outcomes before implementation details.