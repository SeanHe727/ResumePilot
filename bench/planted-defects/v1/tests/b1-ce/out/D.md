# Resume Review

You have strong technical material—robotics, ML systems, agent orchestration, evaluation, CI/CD, and event-driven architecture—but the resume currently undersells it through vague language, credibility issues, and inconsistent organization.

## Highest-priority changes

### 1. Remove personal information that should not be on a U.S. resume

Delete:

```text
Age: 26
Marital status: Single
Hobbies: watching TV, sleeping in
```

These details are unnecessary and can introduce bias. Hobbies should only be included if they are relevant, distinctive, or help demonstrate leadership/community involvement.

Your header should look more like:

```text
Jordan Lee
Metro City, USA | +1 (555) 010-2468 | jordan.lee@example.com
GitHub: github.com/... | LinkedIn: linkedin.com/... | Portfolio: example.com/...
```

Use real, clickable links rather than `example.com/code/jordan-lee`.

---

### 2. Fix the reverse-chronological order of experience

Your more recent role should appear first:

1. Mobility Systems Company — Machine Learning Engineering Intern  
2. Eastern Robotics Co. — Junior Software Engineer  

Also, your master’s degree overlaps with the internship:

```text
M.S. Sep 2024 – Expected Jun 2026
Internship Oct 2024 – May 2025
```

That is completely possible, but clarify it if it was part-time, remote, a co-op, or conducted alongside the degree. For example:

```text
Machine Learning Engineering Intern, Part-Time
```

Only use that description if accurate.

---

### 3. Remove unsupported or exaggerated claims

This bullet is a major credibility risk:

> Single-handedly built the company’s entire ML platform, which is now used by every team across engineering, operations and research.

It sounds implausibly broad, especially for an intern, and “entire ML platform” is not specific enough to evaluate. Replace it with the actual components you built and quantify adoption:

```text
Built [specific platform components—e.g., evaluation, orchestration, deployment, or monitoring services] used by [number] engineering, operations, and research teams to [specific outcome].
```

If you truly built the initial platform, use:

```text
Built the initial ML platform foundation—including [components]—that became the shared workflow for engineering, operations, and research teams.
```

This preserves the impact without sounding inflated.

---

### 4. Replace vague and passive language

Several bullets use phrases that do not demonstrate ownership or technical depth:

- “Responsible for…”
- “I worked on…”
- “Was involved in…”
- “Leveraged cutting-edge AI synergies…”
- “Kept working context…”

Use direct action verbs and describe the implementation.

Avoid first person throughout the resume. Resume bullets should generally begin with verbs such as:

- Built
- Designed
- Implemented
- Migrated
- Optimized
- Instrumented
- Fine-tuned
- Automated
- Integrated
- Diagnosed
- Upstreamed

---

## Suggested rewritten experience section

### Mobility Systems Company — Machine Learning Engineering Intern  
*Metro City, USA | Oct 2024 – May 2025*

- Built an ML-powered diagnostics triage workflow for an industrial inspection system, processing 800+ sensor signals per case and reducing the pending-case backlog by 68% during the first quarter after launch.
- Fine-tuned a domain adapter on validated tool-use trajectories with assistant-only loss masking, improving **[specific evaluation metric]** by 35%.
- Designed a routing layer that constrained three specialist agents and an independent reviewer to in-scope signals, preserving source-level traceability for each diagnostic finding.
- Applied GRPO with grouped tool-use rollouts and a composite reward function, reducing end-to-end latency by 5% versus the SFT baseline while maintaining diagnostic accuracy.
- Built **[specific ML platform components]** adopted by **[number or percentage]** of engineering, operations, and research teams.
- Documented abstention rules and escalation paths for the triage workflow; converted them into the on-call team’s operational runbook.

### Eastern Robotics Co. — Junior Software Engineer  
*Metro City, Country | Oct 2023 – Jul 2024*

Replace the first two bullets:

> Responsible for the monitoring dashboards...

> I worked on improving the latency...

with measurable, technical versions. For example:

- Maintained monitoring dashboards for the diagnostics service and automated weekly reliability reports used by the on-call team to track **[availability, incidents, latency, or error-rate metrics]**.
- Optimized API **[queries/handlers/caching/request flow]** and added **[unit/integration/load]** tests, reducing p95 latency by **[X% or from X ms to Y ms]**.
- Maintained the perception team’s CI pipeline and added automated regression checks, shortening model release cycles from two weeks to three days.
- Migrated 30 robot-fleet services from cron-based execution to an event-driven queue with retries and dead-letter handling, eliminating nightly backlogs that delayed morning dispatch.

The third and fourth bullets are already strong. They include technologies or architectural decisions, scope, and outcomes.

---

## Suggested rewritten projects section

### Agent Runtime Suite  
*TypeScript, Multi-Agent Systems | Aug 2025 – Present*

Remove this bullet entirely:

> Leveraged cutting-edge AI synergies and next-generation agentic paradigms to drive innovation and unlock value across the organization.

It is generic, buzzword-heavy, and provides no evidence of technical work.

Rewrite the remaining bullets as:

- Designed budgeted context layers and staged compaction to keep working context below 10K tokens across a 100-turn stress test, despite 100× growth in the raw conversation history.
- Led the migration of the Orion and Vega pipelines to the NGX runtime on the KRT stack, coordinating the Project Falcon cutover across **[systems/teams]**.
- **[Add one bullet describing the runtime architecture, tool orchestration, evaluation, reliability, or performance improvements.]**

“Owner” is not necessary. If you were the primary developer, you can use:

```text
Lead Developer
```

or simply omit the role label.

Be careful with acronyms such as NGX, KRT, Orion, and Vega. If they are internal technologies, briefly explain their function unless the target employer will recognize them.

### Research-Agent Evaluation Framework  
*Contributor | LLM Evaluation | Feb 2025 – Jul 2025*

Remove:

> Was involved in the process of helping to support the evaluation of the reports that were being produced by the pipeline at the time.

It is passive and unclear.

Use:

- Contributed eight citation and faithfulness metrics to an open-source research-agent framework; the metrics now run in the default benchmark suite for every release.
- Instrumented the evaluation pipeline across stability, sourcing, and parameter-handling stages, tracing three structural defects to their responsible modules and contributing fixes upstream.
- **[Add scale if available: number of evaluations, reports, releases, contributors, or benchmark runs.]**

This project is one of the strongest parts of the resume because it demonstrates open-source contribution and upstream impact. Include the GitHub or project link if available.

---

## Skills section

Your current skills section is a good start, but it should be reorganized for ATS scanning and should include technologies demonstrated in your experience.

Suggested structure:

```text
Languages: Python, TypeScript, SQL, Bash
Machine Learning: PyTorch, LoRA, GRPO, supervised fine-tuning, model evaluation
LLM/Agent Systems: LangGraph, RAG, tool-use agents, multi-agent orchestration, context management
Software Engineering: REST APIs, event-driven systems, CI/CD, automated testing, monitoring
Tools: Git, [Docker], [cloud platform], [message queue], [database], [testing frameworks]
```

Only add items such as Docker, AWS, Kubernetes, pytest, Kafka, Redis, PostgreSQL, or similar if you have genuinely used them and can discuss them in an interview.

You can also add:

```text
Evaluation: Citation evaluation, faithfulness evaluation, regression testing, reward design
```

Avoid listing “Multi-Agent Systems” as a technology category by itself. It is better represented as a specialization or capability under `LLM/Agent Systems`.

---

## Education

Your education section is acceptable. Consider adding your expected graduation date more prominently:

```text
Western State University — M.S. Computer Engineering  
Metro City, USA | Expected Jun 2026

Eastern Institute of Technology — B.S. Electrical Engineering  
Metro City, Country | Jun 2022
```

Include a GPA only if it is strong, generally 3.5/4.0 or higher. Relevant coursework is optional; it may help for early-career roles:

```text
Relevant Coursework: Machine Learning, Distributed Systems, Computer Architecture, Algorithms
```

Do not include coursework if it displaces stronger project or experience content.

---

## Content and formatting recommendations

- Keep the resume to one page if you have less than several years of full-time experience.
- Use consistent punctuation: either end all bullets with periods or none of them.
- Avoid line breaks inside bullets where possible.
- Use standard section names: `Education`, `Experience`, `Projects`, `Technical Skills`.
- Use actual links for GitHub, LinkedIn, portfolio, and open-source contributions.
- Add numbers wherever possible:
  - API latency reduction
  - Number of dashboard users
  - Number of CI runs or releases
  - Number of teams using the ML platform
  - Number of benchmark runs
  - Number of reports evaluated
  - Accuracy or quality metric for the model
- Do not claim technical tools in the skills section unless they appear in your experience or projects.
- Make sure you can explain every acronym, model-training method, reward function, and architectural decision during an interview.

## Overall assessment

Your strongest themes are:

1. **Applied ML and LLM-agent systems**
2. **Evaluation and reliability of AI workflows**
3. **Event-driven robotics software**
4. **Performance and release automation**
5. **Open-source technical contribution**

Position the resume toward **Machine Learning Engineer, Applied AI Engineer, LLM Engineer, or Software Engineer—AI Infrastructure** roles. The biggest improvement will come from replacing vague claims with precise implementation details and verified metrics.