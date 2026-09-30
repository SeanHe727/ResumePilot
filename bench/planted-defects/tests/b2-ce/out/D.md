# Resume Review

## Overall assessment

You have a strong technical foundation for **machine learning engineering, LLM/agent evaluation, or applied AI engineering** roles. The strongest evidence is your combination of:

- Measurable ML and systems outcomes
- Tool-use and agent-evaluation experience
- Performance optimization
- Production-oriented engineering
- A coherent interest in reliable AI systems

The main problems are **redundancy, unclear ownership, one unsupported-sounding project bullet, inconsistent grammar, and insufficient positioning at the top of the resume**. The resume currently reads like a collection of strong experiments rather than a tightly selected case for one target role.

---

# Highest-priority changes

## 1. Remove personal information that does not belong

Remove:

- Date of birth
- Nationality

### Why

These details do not help establish technical qualifications and can create discrimination, privacy, or application-screening concerns. Nationality should only be included if a specific application requires work authorization information. If relevant, use a separate, accurate work-authorization statement rather than nationality.

Also consider adding:

- A LinkedIn profile, if strong and current
- A GitHub or portfolio link that leads directly to relevant code or projects
- Work authorization only if it is important for the target market or job

---

## 2. Add a target-position headline or short summary

The resume currently begins with contact information and education. A recruiter has to infer whether you are targeting:

- Machine learning engineering
- LLM engineering
- Applied research engineering
- Agent infrastructure
- ML platform engineering

### What to change

Add a concise positioning section immediately below the contact information that identifies:

- Your target technical area
- Your strongest methods or systems experience
- One or two high-value outcomes

Do not make it a generic objective statement. Its purpose is to make your intended role obvious within seconds.

### Why

Your experience spans model fine-tuning, agent systems, evaluation, infrastructure, and backend performance. That breadth is valuable, but without a clear framing it may look unfocused.

---

## 3. Eliminate duplicated achievements

The following accomplishments appear more than once:

- Fine-tuning with assistant-only loss masking
- The industrial diagnostics triage branch
- Screening 800+ sensor signals
- Reducing the pending-case backlog by approximately two-thirds

The duplication is especially serious because the triage work appears under:

- Mobility Systems Company
- Research-Agent Evaluation Framework

### What to change

Keep each achievement in only one place unless the two entries genuinely describe different implementations or contributions. If they are different, make the distinction explicit through the surrounding context, such as:

- Production system versus research framework
- Original implementation versus later adaptation
- Individual ownership versus contribution to another project

### Why

Repeated achievements make the resume look padded and create uncertainty about where the work actually occurred. A technical reviewer may question the accuracy of the experience history.

---

## 4. Fix chronology and project credibility

The `Agent Runtime Suite` is listed as beginning in August 2025, while the Mobility Systems internship ended in May 2025. That is not inherently a problem, but the project is marked “Present” while your master’s degree is also in progress.

### What to change

Clarify whether the project is:

- An independent project
- A university project
- Open-source work
- A startup or commercial project
- Work performed during employment

Also clarify the scope of “Owner.” If you are the sole developer, say so through the project role label or project context. If it is a team project, “Owner” may overstate your responsibility.

### Why

The project contains some of your most distinctive evidence, but its status and ownership are currently ambiguous.

---

# Section-by-section review

## Header and education

### Name and contact details

The contact line is clean, but `example.com/code/jordan-lee` looks like a placeholder or a generic code link.

### What to change

Use a verified, directly accessible portfolio or repository URL. Make sure it contains:

- The projects named on the resume
- Documentation
- Evidence of your individual contribution
- Results or evaluation details
- No broken links or empty repositories

### Why

Your projects are important to your candidacy. A reviewer who clicks the link should be able to validate the technical claims.

---

### Education

The education section is appropriately near the top for a current master’s student.

### What to change

Consider adding only relevant information if available:

- Relevant coursework for ML or systems roles
- Research focus
- Thesis topic
- Academic honors
- Teaching or research assistantship

Do not add coursework if it makes the resume crowded or is not relevant to the role.

### Why

Your professional experience is already stronger than a typical student resume. Education should support the technical story rather than dominate it.

### Potential issue

The locations use both `USA` and `Country`, and `Metro City` appears repeatedly.

### What to change

Use a consistent location format throughout. If the anonymized text reflects the actual resume, replace generic or placeholder locations with accurate city and country information.

### Why

Inconsistent or obviously placeholder locations can reduce credibility and create uncertainty about where you worked.

---

# Experience review

## Mobility Systems Company — Machine Learning Engineering Intern

This is currently the strongest section, but it contains six bullets, several overlapping concepts, and repeated fine-tuning work.

### Bullet 1: Diagnostic accuracy improvement

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

### What to change

Keep this as one of the leading bullets. Clarify, if possible:

- What “diagnostic accuracy” measures
- The evaluation set or test conditions
- Whether the 35% is relative or absolute improvement
- Your exact ownership of the fine-tuning and evaluation work

### Why

This is a strong quantified result, but “35%” can mean very different things. Technical reviewers will want to know whether it means a 35-percentage-point gain or a 35% relative improvement.

Also, “domain adapter” may be less immediately understandable than the underlying model adaptation method. Make sure the skills section and surrounding bullets explain the approach clearly.

---

### Bullet 2: Multi-agent routing and traceability

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, keeping every finding traceable to its source data.

### What to change

Clarify the result or operational benefit of the routing layer. The current bullet describes architecture and a design principle, but does not show whether it improved:

- Accuracy
- Citation or evidence quality
- Error isolation
- Safety
- Latency
- Debuggability
- Review time

Also explain whether “independent reviewer” means a separate model, a human review process, or another agent.

### Why

The architecture is relevant to reliable agent systems, but the value is currently implied rather than demonstrated.

---

### Bullet 3: GRPO and latency improvement

> Applied GRPO with grouped tool-use rollouts and a composite reward, cutting end-to-end latency 5% versus the SFT baseline with no loss in diagnostic accuracy.

### What to change

Keep this if the target role values reinforcement learning or agent training. Clarify:

- What the composite reward measured
- Why latency changed as a result of the method
- Whether the comparison used the same hardware and workload
- How “no loss” was established

### Why

This is technically interesting, but the relationship between GRPO and reduced latency is not immediately obvious. Without experimental context, a reviewer may wonder whether the latency improvement came from the training method, the rollout configuration, or an unrelated system change.

---

### Bullet 4: Evaluation harness

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency before each release.

### What to change

Keep this bullet and consider giving it higher priority. Add the engineering scope if available, such as:

- Test automation
- Reproducibility
- Dataset size
- Continuous integration
- Release gating
- Number of users or teams

Correct the punctuation by adding a comma between “accuracy” and “citation quality.”

### Why

This is one of your best production-engineering bullets. It demonstrates that you did not only train models; you created a repeatable process for deciding whether models were ready to release.

---

### Bullet 5: Duplicate fine-tuning claim

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

### What to change

Remove this bullet or replace it with a distinct accomplishment that is not already covered by the first bullet.

### Why

It repeats the method from the first bullet without adding a new result. It also weakens the section because it spends valuable space explaining a mechanism already associated with a quantified achievement.

---

### Bullet 6: Industrial inspection triage system

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.

### What to change

Keep this as a major bullet, but clarify:

- Whether you built the full system or a specific branch
- What “triage branch” means
- The baseline period for the 68% reduction
- Whether the reduction was attributable solely to your work
- Whether this was deployed in production

### Why

This is an excellent systems-impact result. However, the terminology may be internal and difficult for an external reader to understand. It should be the only version of this achievement unless the project entry describes a genuinely separate implementation.

---

## Eastern Robotics Co. — Junior Software Engineer

This section provides useful systems evidence, but the first bullet should probably be the most role-relevant one for your target position.

### Bullet 1: BF16 memory reduction

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

### What to change

Keep it, but clarify:

- Whether the 4x reduction was measured at the same batch size
- Whether model quality or training throughput changed
- Whether you implemented the training changes or primarily configured an existing framework

### Why

This is a strong quantified optimization result. The phrase “by switching” may make the contribution sound simpler than it was if you also handled compatibility, stability, monitoring, or training validation.

---

### Bullet 2: API latency reduction

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.

### What to change

Keep this bullet. Separate the performance result from the testing or reliability work if the line becomes too dense. Clarify:

- Request volume
- Cache behavior
- Whether the measurement was production or benchmark data
- What “keep it there” means operationally

### Why

This is one of the clearest software engineering bullets. It has a baseline, an endpoint, a concrete intervention, and a validation practice.

---

### Bullet 3: CI and regression checks

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

### What to change

Fix the tense and grammar: the subject is past-tense, so “adds” is inconsistent. Also clarify what the original release cycle was and whether “3 days” means three days total or a three-day reduction.

### Why

The grammatical error is noticeable, and the impact is ambiguous. “Maintained” may also undersell your contribution if you designed or substantially extended the regression system.

---

### Bullet 4: Event queue migration

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

### What to change

Keep this bullet. Clarify:

- The queue technology, if relevant to the target role
- Whether you designed the migration or implemented an existing design
- How you validated the absence of backlogs
- Whether there were reliability or operational metrics

### Why

This is a strong distributed-systems bullet and differentiates you from candidates whose experience is limited to model experimentation.

---

# Projects review

## Agent Runtime Suite

### Bullet 1: Generic adoption claim

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

### What to change

Replace this type of claim with a concrete technical or measurable result. Specify:

- What practices you introduced
- How many engineers or teams adopted them
- What changed in delivery time, quality, or developer productivity
- How you measured the improvement

### Why

This is the weakest bullet in the resume. “AI-first,” “accelerating delivery,” and “improving outcomes” are broad claims without evidence. It also sounds like marketing language rather than an engineering accomplishment.

If you cannot substantiate the adoption and outcome claims, remove the bullet.

---

### Bullet 2: Context management

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

### What to change

Keep this bullet. Clarify:

- Whether the 100x growth refers to token count, message count, or another quantity
- How answer quality or tool-use reliability changed
- Whether the 10K-token limit was a design target or a hard system constraint
- How the stress test was constructed

### Why

This is a distinctive and relevant agent-infrastructure achievement. The result is compelling, but the measurement needs to be precise enough for a reviewer to reproduce or understand it.

---

### Bullet 3: Concurrency and cache correctness

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under fan-out load.

### What to change

Keep this bullet. Add an operational measure if available, such as:

- Failure rate before and after
- Concurrent request volume
- Stress-test size
- Number of reproduced failures eliminated
- Throughput impact

Also clarify whether you diagnosed an existing production issue or designed the system before deployment.

### Why

This bullet demonstrates real systems understanding. A metric would make the impact easier to evaluate, but the technical substance is already strong.

---

## Research-Agent Evaluation Framework

### Bullet 1: Evaluation metrics

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

### What to change

Clarify:

- Whether you authored the integrations or adapted existing implementations
- Whether the work was merged upstream
- Whether the metrics were validated against known failure cases
- Which metric categories were included

### Why

The bullet is relevant, but “integrated” does not establish the depth of the contribution. Open-source acceptance or adoption would provide important credibility if applicable.

---

### Bullet 2: Kendall correlation

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

### What to change

Keep this as the strongest project bullet. Clarify:

- What the correlation was between
- Whether 0.89 is statistically significant
- How degradation levels were generated
- Whether the trials were independent
- What “removed citations, sources and claims” means methodologically

### Why

This is a strong research-style result, but the current wording assumes the reader understands the evaluation setup. Technical reviewers will care about the experimental design and what the correlation validates.

---

### Bullet 3: Duplicate triage achievement

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

### What to change

Remove this bullet from the project unless it represents a genuinely separate contribution from the Mobility Systems work. If it is separate, clearly distinguish the dataset, system, role, and result.

### Why

As written, it appears to repeat the Mobility Systems internship bullet almost exactly. This is the largest credibility problem in the document.

---

# Skills section

## Programming

> Python, TypeScript, SQL, Bash, Git

### What to change

Keep the list, but organize it according to the target role. If you have meaningful experience with relevant tools, consider including categories for:

- Model training and inference
- Distributed systems or backend services
- Testing and evaluation
- Cloud or deployment
- Databases and queues

Only include technologies you can discuss in an interview.

### Why

The current skills section is accurate but underspecified relative to your experience. Your resume demonstrates more than general programming, but the skills section does not expose the full technical profile.

---

## ML & Agents

> PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation

### What to change

Separate frameworks, methods, and areas of expertise rather than placing them in one undifferentiated list. Ensure that every prominent skill is supported by an experience or project bullet.

Also consider whether `RAG` is sufficiently demonstrated in the resume. If it is not directly used in one of the listed projects or jobs, either add supporting evidence or remove it.

### Why

Recruiters and ATS systems scan skill categories quickly. Clear group names help them understand whether you are focused on:

- Model adaptation
- Reinforcement learning
- Agent orchestration
- Retrieval systems
- Evaluation methodology

The current category is useful but too broad.

---

# Narrative and positioning

## What is working

Your strongest narrative is:

1. Electrical and computer engineering foundation
2. Software and robotics systems experience
3. ML optimization and deployment
4. LLM fine-tuning and tool-use systems
5. Agent runtime and evaluation infrastructure

That is a compelling progression toward applied AI or ML systems engineering.

## What is missing

The resume does not explicitly connect these stages. A recruiter may see separate topics rather than a deliberate progression.

### What to change

Make the ordering and emphasis communicate that you build **reliable, evaluated, production-oriented ML and agent systems**, rather than simply listing exposure to many current technologies.

### Why

The resume’s differentiator is not just that you know LLM terms. It is that you connect:

- Model training
- Tool use
- Evaluation
- Systems reliability
- Production performance

That combination should be obvious before the reader reaches the final project bullet.

---

# Formatting and language issues

Fix the following:

- Inconsistent tense in the CI bullet: “adds” conflicts with the past-tense experience section.
- Missing comma in “accuracy, citation quality and latency.”
- Check whether `dead-letter` is consistently hyphenated.
- Ensure line breaks do not split words or create awkward visual wraps.
- Keep bullet punctuation consistent.
- Use consistent date formatting throughout.
- Check whether “Present” projects are sorted by relevance rather than merely by date.
- Avoid excessive use of internal terminology such as “triage branch” unless it is explained elsewhere.
- Verify that every numerical result has a clear baseline or comparison point.

---

# Recommended bullet ordering

Within each role, lead with the evidence most relevant to the role you want.

For an ML/LLM engineering target, the Mobility Systems section should prioritize:

1. Model or diagnostic accuracy improvement
2. Evaluation harness and release process
3. Agent routing and traceability
4. GRPO or tool-use training
5. Production triage impact

For a general software or ML systems target, Eastern Robotics could prioritize:

1. GPU memory reduction
2. API latency improvement
3. Event-driven fleet migration
4. CI and model-release reliability

The current ordering is reasonable, but the duplicated bullets consume space that should be used for differentiated evidence.

---

# Scores

| Dimension | Score | Main reason |
|---|---:|---|
| ATS readiness | 7/10 | Strong technical terms, but no target job description and limited role positioning |
| Summary/first impression | 4/10 | No summary or headline; target role must be inferred |
| Skills section | 7/10 | Relevant tools listed, but categories are broad and incomplete |
| Bullet quality | 7.5/10 | Several excellent quantified bullets, weakened by duplication and vague claims |
| Project quality | 7/10 | Strong technical work, but one generic bullet and one duplicated achievement |
| Narrative coherence | 7/10 | Good underlying progression, not explicitly framed |
| Credibility and consistency | 6/10 | Duplicate triage claim and unclear ownership reduce confidence |
| Presentation | 7/10 | Generally clean, assuming the rendered formatting is consistent |

**Overall: 6.8–7.2/10**

This is a strong foundation, but it needs a focused editing pass before submission.

---

# Change order

## Tier 1: Do these first

1. Remove the duplicated triage and fine-tuning claims.
2. Remove date of birth and nationality.
3. Add a clear target-role headline or summary.
4. Replace or remove the generic “AI-first engineering practices” bullet.
5. Resolve whether the triage achievement belongs to the internship, the project, or both.
6. Fix the grammar and punctuation errors.
7. Clarify the ownership and status of the `Agent Runtime Suite`.
8. Add baselines or definitions for the 35%, 68%, 4x, 5%, 0.89, and 100x figures where needed.

## Tier 2: Do next

1. Strengthen the evaluation-harness bullet with scope or adoption evidence.
2. Add outcomes to the agent-routing bullet.
3. Add validation context to the GRPO result.
4. Expand skills categories to reflect evaluation, deployment, testing, and systems work.
5. Make project contributions and open-source status explicit.
6. Standardize location, date, punctuation, and tense formatting.

## Tier 3: Optional polish

1. Improve the portfolio link and repository documentation.
2. Reorder bullets for the specific target role.
3. Add selected coursework or research information only if it supports the target job.
4. Reduce internal terminology that an external recruiter would not understand.

**Bottom line:** Keep the technical substance. The largest gains will come from removing repetition, making ownership and measurement precise, and presenting the resume as a focused application for ML/LLM systems engineering rather than as a broad list of AI-related work.