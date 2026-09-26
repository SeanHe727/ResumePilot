Your resume has strong technical material and several excellent quantified accomplishments. The biggest issues are weak/vague bullets mixed with strong ones, an implausible claim, excessive jargon, and unnecessary personal information.

## Highest-priority changes

### 1. Remove personal information
Delete:

> Age: 26 | Marital status: Single | Hobbies: watching TV, sleeping in

Age and marital status are inappropriate on a U.S. resume and can introduce hiring bias. The hobbies are also not helping your candidacy.

Use a header such as:

> Jordan Lee  
> Metro City, USA | (555) 010-2468 | jordan.lee@example.com | GitHub: example.com/code/jordan-lee

Add LinkedIn if it is polished.

### 2. Put experience in reverse chronological order
The Mobility Systems internship ended in May 2025, so it should appear before Eastern Robotics, which ended in July 2024.

### 3. Remove or substantially revise the “single-handedly” claim
This bullet is likely to damage credibility:

> Single-handedly built the company’s entire ML platform, which is now used by every team across engineering, operations and research.

It is unusually broad for an internship and conflicts with the more focused accomplishments around diagnostics. Replace it with a scoped, verifiable statement:

> Built and deployed a shared ML workflow for [training/evaluation/inference], adopted by X teams for [specific use case].

If you truly built a company-wide platform, explain its components, adoption, and impact without saying “single-handedly.”

### 4. Replace vague bullets with concrete actions and outcomes
These bullets are weak:

> Responsible for the monitoring dashboards...

> I worked on improving the latency...

> Was involved in the process of helping to support...

Avoid “responsible for,” first-person language, “worked on,” “helping,” and “I think.” State what you changed and what happened.

For example:

- Built and maintained diagnostics dashboards tracking **[metrics]**, enabling the on-call team to identify **[failure mode]** and produce weekly reliability reports.
- Reduced API **p95 latency from X ms to Y ms** by **[optimization]**; added **[number/type]** automated tests to prevent regressions.
- Evaluated generated research reports for citation accuracy and faithfulness, identifying **[number]** failure patterns that informed pipeline fixes.

If you do not have measurements, describe scope and technical mechanism rather than inventing numbers.

### 5. Eliminate buzzword-heavy or opaque project bullets
This says almost nothing:

> Leveraged cutting-edge AI synergies and next-generation agentic paradigms to drive innovation and unlock value across the organization.

Delete it.

This is also too opaque:

> Led the Project Falcon migration to NGX on the KRT stack, coordinating the cutover of the Orion and Vega pipelines.

A recruiter cannot tell what these systems do. Spell out the technical work and outcome:

> Migrated two agent-processing pipelines from **[old architecture]** to **[new architecture]**, preserving **[capability]** while reducing **[latency/cost/failure rate]** by X%.

If the names are confidential, use descriptive generic terms rather than unexplained internal codenames.

---

## Bullet-level feedback

### Mobility Systems Company

Your first four bullets are technically strong, but some claims need clearer definitions.

Current:

> Improved model performance by 35%...

Specify the metric and whether the improvement is relative or absolute:

> Improved diagnostic **F1 from X to Y** by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

Current:

> Designed a routing layer that limits each of 3 specialist agents...

Good architecture, but add an outcome if possible:

> Designed a routing layer that restricted three specialist agents and an independent reviewer to authorized signal groups, preserving source-level traceability for every finding and reducing **[unsupported findings/review time]** by X%.

Current:

> Applied GRPO... cutting end-to-end latency 5%...

Explain why GRPO affected latency—such as fewer tool calls or shorter trajectories—because the connection is not immediately obvious:

> Applied GRPO with grouped tool-use rollouts and a composite reward, reducing unnecessary tool calls by X% and end-to-end latency by 5% without lowering diagnostic accuracy.

The runbook bullet is useful but less impressive than your technical bullets. Keep it only if space permits.

### Eastern Robotics

Your last two bullets are strong and should come first:

1. Migrated 30 services...
2. Maintained the CI pipeline...
3. API latency improvement, once quantified
4. Dashboards/on-call reporting, once made specific

Consider revising the CI bullet slightly:

> Added automated regression checks to the perception team’s model-release pipeline, reducing release cycles from two weeks to three days.

The migration bullet is already excellent.

### Agent Runtime Suite

The 10K-token bullet is promising but needs clarification:

> Maintained a context window below 10K tokens during a 100-turn stress test, despite 100× growth in raw conversation history, using budgeted context layers and staged compaction.

Add a link, benchmark methodology, or comparison if available. Also replace “Owner” with “Creator,” “Lead Developer,” or “Independent Project.”

For an ongoing project, use present tense where appropriate.

### Research-Agent Evaluation Framework

The first and third bullets are strong. Delete or rewrite the second because it adds no meaningful information.

A cleaner version:

- Contributed eight citation-quality and faithfulness metrics to an open-source research-agent framework; the metrics now run in its default release benchmark.
- Identified three pipeline defects affecting stability, source attribution, and parameter handling using layered instrumentation; fixes were accepted upstream.
- Evaluated generated reports for citation accuracy and faithfulness, documenting **[number]** recurring failure modes.

If this is open source, include the repository link and, if meaningful, stars, downloads, merged pull requests, or number of contributors.

---

## Skills improvements

Git is not a programming language. Reorganize this section:

**Languages:** Python, TypeScript, SQL, Bash  
**ML/AI:** PyTorch, LoRA, GRPO, RAG, LangGraph, agent evaluation  
**Tools:** Git, **[Docker, Linux, CI/CD platform, cloud services, databases—if genuinely used]**

Only list technologies you can discuss in depth during an interview. Consider spelling out niche terms if the target role may not use them.

---

## Formatting and consistency

- Use consistent date formatting: `Sep 2024 – Jun 2026 (Expected)`.
- Use an en dash consistently rather than a hyphen.
- Keep each bullet to roughly one or two lines where possible.
- Avoid first-person pronouns; bullets conventionally begin with action verbs.
- Use past tense for completed roles and present tense for ongoing work.
- Keep it to one page at your experience level.
- Use a simple one-column ATS-friendly layout.
- Write out `September` or abbreviate all months consistently.
- Make sure the country/location treatment is consistent.
- Add links to projects or merged open-source contributions when possible.

## Recommended section order

1. Contact information  
2. Education  
3. Experience  
4. Projects/Open Source  
5. Skills  

Because you are currently completing a relevant master’s degree, keeping Education near the top is reasonable. After graduation or with more full-time experience, Experience should generally move above Education.

## Stronger opening portion

A revised structure could begin like this:

**Jordan Lee**  
Metro City, USA | (555) 010-2468 | jordan.lee@example.com | GitHub

### EDUCATION
**Western State University**, Metro City, USA  
M.S. in Computer Engineering, Expected Jun 2026

**Eastern Institute of Technology**, Metro City, Country  
B.S. in Electrical Engineering, Jun 2022

### EXPERIENCE
**Mobility Systems Company**, Metro City, USA  
**Machine Learning Engineering Intern** | Oct 2024 – May 2025

- Built an ML-based diagnostics triage system that screened 800+ sensor signals per case, reducing the pending-case backlog by 68% in its first quarter.
- Improved **[specific model metric]** by 35% by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.
- Designed a routing layer for three specialist agents and an independent reviewer, maintaining source-level traceability for every diagnostic finding.
- Applied GRPO with grouped tool-use rollouts and a composite reward, reducing end-to-end latency by 5% versus the SFT baseline without lowering diagnostic accuracy.
- Documented abstention criteria and escalation paths adopted as the on-call review team’s runbook.

Overall, the resume has unusually strong material for an early-career ML/software candidate. Tightening credibility, defining metrics, and removing vague language will make the strongest accomplishments stand out.