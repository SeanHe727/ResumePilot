# Resume Review

You have strong material: measurable performance improvements, ML/LLM experimentation, production ownership, and open-source contributions. The main issues are **ordering, clarity, a few inaccurate calculations, and several bullets that are either too vague or too jargon-heavy**.

## Highest-priority changes

### 1. Fix experience order

Your roles should be reverse chronological:

1. Mobility Systems Company — ML Engineering Intern — Oct 2024–May 2025  
2. Eastern Robotics Co. — Junior Software Engineer — Aug 2022–Jul 2024  

The internship currently appears after the older full-time role.

Because the internship overlaps with your M.S., clarify the arrangement if relevant:

> Machine Learning Engineering Intern, part-time during M.S. program

Otherwise, recruiters may wonder how the dates fit.

### 2. Correct the latency percentage

You wrote:

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction

That is a **33% reduction**, not 50%. Say:

> Cut p95 tool-call latency from 900 ms to 600 ms—a 33% reduction—by caching tool results and reusing completed sub-agent answers.

Your diagnostic accuracy improvement should also use percentage-point language:

> Raised diagnostic accuracy from 71% to 79%—an 8-percentage-point, or 11% relative, improvement.

### 3. Replace vague claims with measurable engineering work

This bullet is too generic:

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

It does not explain what you built or how adoption was measured. Replace it with a concrete technical contribution, or remove it. For example:

> Built reusable agent-runtime components for tool execution, result caching, and sub-agent context reuse, enabling downstream teams to integrate multi-agent workflows through a common TypeScript API.

Only use this if accurate. Ideally add a metric such as number of teams, workflows, users, or time saved.

### 4. Reorganize and expand the skills section

Your current categories mix unrelated technologies:

> ML & Agents: PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation, Kubernetes

Kubernetes is infrastructure, not ML/agents. Also, “Git” should not be listed as a programming skill.

Use:

```text
Languages: Python, TypeScript, SQL, Bash
ML/AI: PyTorch, LoRA, GRPO, RAG, LLM fine-tuning, agent evaluation
Frameworks: LangGraph
Infrastructure/Tools: Kubernetes, Git, CI/CD
```

Add technologies from your experience if you can discuss them in an interview, such as:

- Request caching technology
- Event queue or message broker
- Load-testing tools
- Model-serving stack
- INT8/ONNX/TensorRT, if applicable
- Docker
- Cloud platform
- Testing frameworks
- Observability tools

Do not add technologies merely because they appeared indirectly in a project.

### 5. Use real links and improve the header

Your header currently has only a code link:

```text
example.com/code/jordan-lee
```

For technical roles, use:

```text
Jordan Lee
Metro City, USA | +1 (555) 010-2468 | jordan.lee@example.com
github.com/jordan-lee | linkedin.com/in/jordan-lee | jordanlee.dev
```

Use actual GitHub and LinkedIn URLs if available. “Code” is less recognizable than GitHub.

---

# Suggested structure

For your profile, I would use:

1. Contact information  
2. Technical skills  
3. Experience  
4. Projects / Open Source  
5. Education  

Because you are currently pursuing an M.S., Education can remain near the top, but your experience and projects are strong enough that they should receive more visual emphasis.

A short summary is optional. If included, tailor it to the target role:

> Machine learning engineer and software engineer with experience building production diagnostics systems, LLM agents, model-serving infrastructure, and evaluation frameworks. Improved inference latency, diagnostic accuracy, release cycles, and robot-fleet reliability across robotics and industrial inspection systems.

Avoid a summary if you need to keep the resume to one page.

---

# Recommended bullet revisions

## Mobility Systems Company — Machine Learning Engineering Intern

Your content is strong, but the bullets should be ordered from broad product impact to technical depth.

### Revised version

- Built an ML-assisted diagnostics triage branch for an industrial inspection system processing 800+ sensor signals per case, reducing the pending-case backlog by 68% in the first quarter after launch.
- Improved diagnostic accuracy from 71% to 79% on 1,200 held-out cases by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.
- Reduced p95 edge-inference latency by 40% by serving an INT8 engine with dynamic batching.
- Reduced end-to-end triage latency by 5% by implementing grouped tool-use rollouts, a composite reward for accuracy, citation validity, and call count, and a GRPO loop with a frozen SFT reference.
- Stabilized sparse-reward GRPO training by sampling one rollout per prompt, ensuring each update used exactly one scored trajectory.
- Documented abstention rules and escalation paths for the triage branch; the on-call review team adopted the documentation as its operational runbook.

### Notes

The GRPO bullets are technically interesting but highly specialized. Keep them for:

- LLM/agent research roles
- Applied scientist roles
- ML infrastructure roles involving reinforcement learning

For a general software engineering resume, combine or shorten them. For example:

> Improved GRPO training stability and reduced end-to-end triage latency by 5% through single-rollout updates, grouped tool-use sampling, composite rewards, and a frozen SFT reference.

The phrase “assistant-only loss masking” is appropriate for an LLM-focused resume, but be prepared to explain exactly what was masked and why.

---

## Eastern Robotics Co. — Junior Software Engineer

### Revised version

- Owned monitoring dashboards for the diagnostics service across two major releases and maintained the on-call rotation supporting the service.
- Reduced p95 API latency from 420 ms to 180 ms by adding request caching and batching sensor reads; added load tests to prevent regression.
- Maintained the perception team’s CI pipeline and added automated model-regression checks, shortening release cycles from two weeks to three days.
- Migrated 30 robot-fleet services from cron jobs to an event-driven queue and rewrote the shared logging library, eliminating nightly processing backlogs that delayed morning dispatch.
- Onboarded two new hires and assumed responsibility for the weekend on-call rotation.

The last sentence from your original bullet was overloaded. Separating the mentoring/on-call work makes the scope easier to understand.

If you have the numbers, make these bullets stronger by specifying:

- Number of dashboard users or services
- Number of API requests
- Cache hit rate
- Queue technology
- Number of nightly jobs
- Deployment frequency
- Number of incidents or MTTR improvement

For example:

> Migrated 30 robot-fleet services from cron jobs to Kafka-based event processing, eliminating nightly backlogs across X daily jobs and removing morning dispatch delays.

Only include the named technology if it is accurate.

---

# Projects

## Agent Runtime Suite

### Current problems

- “Owner” is not very useful as a project role.
- “AI-first engineering practices” is vague and somewhat buzzword-heavy.
- The latency percentage is incorrect.
- “Benchmark suite” should ideally be named.

### Revised version

```text
Agent Runtime Suite | TypeScript, LangGraph, Multi-Agent Systems | Aug 2025–Present
- Built reusable runtime components for multi-agent tool execution, result caching, and sub-agent context reuse.
- Cut p95 tool-call latency from 900 ms to 600 ms—a 33% reduction—by caching tool results and reusing completed sub-agent answers.
- Increased task-completion rate from 71% to 83% on the [benchmark name] benchmark by retrying failed sub-agent calls with preserved partial context.
```

If this project is not yet active because August 2025 is in the future, do not list it as “Present” until work has actually begun. Use an accurate status.

Also, if the project is hosted on GitHub, include the repository link.

## Research-Agent Evaluation Framework

This is an excellent project for ML, LLM evaluation, and applied research roles.

### Revised version

```text
Research-Agent Evaluation Framework | Python, LLM Evaluation | Feb 2025–Jul 2025
- Contributed eight citation and faithfulness metrics to an open-source research-agent framework; the metrics now run in the default release benchmark.
- Validated evaluator sensitivity to injected degradation with Kendall’s τ = 0.89 across 400+ report-level trials involving removed citations, sources, and claims.
- Used layered instrumentation to trace three structural defects in stability, sourcing, and parameter handling to their responsible modules; all three were fixed upstream.
```

Use the actual metric notation only if the audience will understand it. Otherwise:

> Demonstrated a strong Kendall correlation of 0.89...

This project should probably be labeled **Open Source** if that accurately describes your contribution.

---

# Education

Your education section is clear. I would format it as:

```text
Western State University — M.S. Computer Engineering
Metro City, USA | Expected Jun 2026

Eastern Institute of Technology — B.S. Electrical Engineering
Metro City, Country | Jun 2022
```

Consider adding relevant coursework only if you are targeting software or ML roles and have room:

```text
Relevant coursework: Machine Learning, Distributed Systems, Computer Architecture, Algorithms
```

Do not include a GPA unless it is strong or required.

---

# Formatting and ATS recommendations

- Remove manual line-break hyphenation such as `on-` at the end of a line. Let the document editor wrap the text naturally.
- Use standard headings: `EDUCATION`, `TECHNICAL SKILLS`, `EXPERIENCE`, `PROJECTS`.
- Keep dates consistently formatted, such as `Oct 2024–May 2025`.
- Use one bullet style throughout.
- Avoid tables, text boxes, icons, graphics, and skill bars.
- Keep the resume to one page if you have fewer than roughly five years of experience.
- Use present tense only for current roles and projects; use past tense for completed work.
- Include repository links for both projects.
- Make sure every listed technology is something you can explain in an interview.

## Overall assessment

Your strongest positioning is likely:

> **Machine Learning Engineer / Applied ML Engineer with production software engineering experience**

You also have a credible path toward:

- LLM/agent infrastructure engineer
- Applied scientist
- ML platform engineer
- Robotics software engineer with ML focus

The most important improvements are to **put the internship first, correct the metrics, remove vague project language, separate the overloaded robotics bullet, and make the skills section more structured and ATS-friendly**.