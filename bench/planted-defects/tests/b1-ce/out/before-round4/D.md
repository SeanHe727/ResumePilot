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