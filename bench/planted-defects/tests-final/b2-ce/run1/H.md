## Highest-priority changes

1. **Remove your date of birth and nationality.** They are generally irrelevant to hiring decisions and can introduce bias. Include them only if a specific country, visa, government, or application process requires them.
2. **Remove or consolidate duplicate accomplishments.**
   - Assistant-only loss masking appears twice in the internship.
   - The sensor-signal triage/backlog result appears in both the internship and the research project.
3. **Fix the grammatical error in the CI bullet.**
4. **Clarify metrics, baselines, and ownership.** Several bullets have strong numbers but do not define the comparison point, evaluation set, or your exact contribution.
5. **Remove vague claims that lack evidence.** The first Agent Runtime Suite bullet is too generic compared with the rest of the resume.

---

# Header

### Contact information
- Keep the phone number, email, and code/portfolio link.
- Make sure the code link leads directly to a polished profile or repository list. A bare URL is acceptable, but it should show relevant projects and documentation.
- Consider adding LinkedIn only if it is complete and consistent with the resume.

### Date of birth
- Delete it.
- It does not help establish your qualifications and may create unnecessary hiring bias.

### Nationality
- Delete it unless the application specifically requires it.
- If work authorization is important, state authorization or visa status separately and only when relevant.

---

# Education

### Western State University — M.S. in Computer Engineering
- Keep the expected graduation date.
- Because this degree overlaps with your internship and projects, make sure the dates are accurate and explainable. The internship ending in May 2025 while the degree is ongoing is normal, but recruiters may still check the timeline.
- If the degree is particularly relevant to the target role, consider adding a specialization, thesis, or a small number of highly relevant courses—but only if they strengthen the application.

### Eastern Institute of Technology — B.S. in Electrical Engineering
- This is clear and relevant.
- If you have a strong academic distinction, major project, or coursework directly related to ML/software, add it only if you have room and it is more valuable than weaker project content.

### Location consistency
- You use “Metro City, USA” for some entries and “Metro City, Country” for others. Use the actual country names consistently.
- If “Country” is a placeholder, replace it before submitting.

---

# Experience

## Mobility Systems Company — Machine Learning Engineering Intern

### “Improved diagnostic accuracy by 35%...”
- Keep the result, but clarify what “accuracy” means: exact match, classification accuracy, recall, resolution rate, or another metric.
- Identify the evaluation basis: held-out cases, production cases, benchmark set, or another dataset.
- Clarify what changed besides the adapter fine-tuning if other interventions were involved.
- “Validated tool-use trajectories” may be unclear to readers outside your team. Define what made the trajectories validated or indicate their source.
- The bullet is technically substantive, but it currently requires the reader to infer too much about the task and evaluation.

### “Designed a routing layer...”
- Keep the 14% to 6% result.
- Clarify what “reviewer disagreement” means and how it was measured.
- The phrase “each of 3 specialist agents and an independent reviewer” is somewhat difficult to parse. Make the architecture and routing responsibility easier to understand.
- State whether the reduction came from the routing layer alone or from routing plus prompt/model changes.
- If “in-scope signals” is an internal term, explain it in more generally understandable language.

### “Trained the triage agent with GRPO...”
- This is one of the strongest bullets because it includes method, objective, and outcomes.
- Clarify the accuracy comparison: “equal accuracy” should indicate whether it was statistically equivalent, exactly matched, or within a specified tolerance.
- Define what “grouped tool-use rollouts” means if the resume is aimed at general ML engineering roles.
- Explain whether the 18% tool-call reduction and 5% latency reduction were measured on a fixed test set or in production.
- Be careful not to overemphasize specialized algorithm terminology unless the target roles value LLM post-training.

### “Wrote the evaluation harness...”
- Keep this, but make your ownership more explicit through the scope of the harness: test execution, metrics, reporting, checkpoint comparison, or release gating.
- Clarify what “citation quality” measured.
- Explain the significance of catching two regressions: were they prevented from production release, or merely identified during experimentation?
- “14 adapter checkpoints” is useful evidence of scale.

### “Fine-tuned the adapter with assistant-only loss masking...”
- Remove this bullet because the same technique already appears in the first bullet.
- It also contains a technical accuracy concern: assistant-only loss masking generally means the model is trained on assistant-generated tokens while conditioning on other messages; it does not necessarily mean the model is trained to reproduce tool outputs. Verify that the stated causal explanation matches the implementation.
- If this technique materially contributed to the 35% improvement, keep it integrated into the first bullet rather than presenting it separately.

### “Built a diagnostics triage branch...”
- Keep the backlog result, but this bullet overlaps heavily with the research-project bullet later.
- Decide where the accomplishment belongs based on where the work actually happened. It should not appear in both places.
- Clarify what “pending-case backlog” means and how the eight-week comparison was calculated.
- “800+ sensor signals per case” establishes scale, but explain whether the system processed, ranked, filtered, or classified those signals.
- If the 68% reduction was influenced by operational changes beyond your branch, avoid implying sole causation.

---

## Eastern Robotics Co. — Junior Software Engineer

### “Cut GPU memory...”
- Keep the 4x result.
- Clarify whether the measurement refers to peak allocated memory, reserved memory, or total training memory.
- State whether model quality, training throughput, or convergence remained unchanged if that was verified.
- “BF16 mixed precision” is technically useful, but readers may want to know whether the change affected training stability.

### “Reduced p95 API latency...”
- This is strong and concrete.
- Keep both the before-and-after latency and the automated regression threshold.
- Clarify whether the 420 ms and 180 ms figures were measured under the same traffic profile.
- Explain whether caching and batching were both necessary to achieve the reduction, or whether one was the primary cause.
- The build-failure safeguard is valuable because it shows you operationalized the performance target.

### “Maintained the CI pipeline...”
- Fix the subject-verb agreement. The sentence currently combines a plural subject with a singular verb.
- Clarify whether you maintained an existing pipeline, redesigned it, or added new release checks.
- “Shortened release cycles to 3 days” is ambiguous. Specify whether that means three days from change to release, three releases per week, or another cadence.
- Explain what the regression checks covered: model quality, latency, memory, compatibility, or deployment health.
- This bullet is currently less polished than the others because the result and time period are not clearly defined.

### “Migrated 30 robot-fleet services...”
- Keep this bullet; it shows meaningful production engineering ownership.
- Clarify what “removing the nightly backlogs” means operationally and how you measured the improvement.
- If there were measurable effects on failed jobs, dispatch time, reliability, or on-call incidents, those would be stronger than the qualitative outcome currently provided.
- “Dead-letter handling” is useful technical detail for backend/platform roles, but it may be less important for an ML-focused resume unless you are targeting ML infrastructure or production engineering positions.

---

# Projects

## Agent Runtime Suite — Owner

### “Drove adoption of AI-first engineering practices...”
- Remove or substantially substantiate this bullet.
- It uses broad phrases such as “AI-first,” “accelerating delivery,” and “improving outcomes” without a measurable result.
- It also does not show what you built, what changed, or how adoption was measured.
- Compared with your other bullets, this one makes an unsupported leadership claim and weakens the section.

### “Kept working context under 10K tokens...”
- Keep this; it demonstrates an interesting systems constraint and measurable design outcome.
- Clarify what “raw conversation grew 100x” means. The reader needs to know whether this refers to token count, message count, or input history size.
- Explain how the 100-turn stress test was constructed and whether the system preserved task performance while compacting context.
- “Budgeted context layers” and “staged compaction” are useful technical concepts, but make sure the surrounding project description makes their purpose understandable.

### “Separated concurrency pools...”
- Keep this; it shows debugging and reliability work in a concurrent agent system.
- Clarify how you verified the removal of deadlocks and lost tool results. For example, the reader should understand whether this came from stress testing, production incidents, or both.
- “50-way fan-out” is useful, but explain whether that is concurrent agents, tool calls, or requests.
- If you have reliability numbers, failure-rate reductions, or test duration, they would make this result more persuasive.

## Research-Agent Evaluation Framework — Contributor

### “Integrated 8 citation and faithfulness metrics...”
- Keep it if the project is publicly visible and you can identify the framework or repository.
- Name the general categories of metrics or link directly to the implementation if the repository demonstrates the work.
- Clarify whether you designed the integrations, implemented existing metric definitions, or contributed to a broader team effort.
- “Contributor” is accurate but undersells the work if you owned the evaluation module changes. Use the actual level of responsibility.

### “Showed the evaluator tracks injected degradation...”
- Keep this; it is one of the most analytically specific bullets.
- Explain what the Kendall correlation is correlating: evaluator scores against known degradation levels, human judgments, or another reference.
- Clarify what “injected degradation” means and whether the 400+ trials were independent reports, perturbations, or evaluation runs.
- If available, include statistical significance, confidence intervals, or the degradation range. Do not add these unless you actually measured them.

### “Cut the pending-case backlog by two-thirds...”
- Remove this from the project section because it duplicates the Mobility Systems internship bullet almost exactly.
- It also appears to describe an industrial diagnostics system rather than a research-agent evaluation framework, which creates uncertainty about project boundaries and ownership.
- Keeping it here may make recruiters think the same result has been counted twice or that the project descriptions are conflated.

---

# Skills

### Programming
- The list is too short relative to the experience shown.
- Add only technologies you can discuss in an interview and that are demonstrated in the experience or projects.
- Based on the resume, consider whether you should include relevant areas such as Linux, APIs, distributed systems, databases, testing, CI/CD, or cloud/deployment tools—but do not add anything you have not actually used.
- “Git” is useful, but it is a basic tool and may be less valuable than a demonstrated engineering capability if space is limited.

### ML & Agents
- This section is directionally good but somewhat narrow.
- Consider separating frameworks/libraries from methods or areas of expertise so the reader can distinguish tools from concepts.
- “Agent evaluation” is broad. Specify the types of evaluation you have actually performed, such as citation quality, faithfulness, latency, tool-use efficiency, or regression testing.
- Include technologies clearly demonstrated elsewhere, such as mixed precision, distributed/concurrent execution, evaluation harnesses, or model serving, if relevant to your target roles.
- Do not list every library used incidentally; prioritize skills supported by substantial bullets.

---

# Structure and positioning

- Your experience is strongest for **ML engineering, LLM systems, agent infrastructure, and evaluation** roles. Make sure the resume’s title or summary, if you add one, targets that direction rather than presenting you as a general software engineer.
- The most impressive themes are:
  - measurable model and system improvements;
  - evaluation and regression prevention;
  - tool-use efficiency and latency;
  - production reliability;
  - concurrent agent infrastructure.
- The resume currently mixes industrial diagnostics, robotics, and research-agent work without always explaining the relationship. This is acceptable, but each project should make its context and ownership unmistakable.
- Use consistent punctuation and formatting across bullets. Some bullets wrap naturally, but make sure no words are split awkwardly by manual hyphenation, such as “dead-letter.”
- Consider ordering projects by relevance to the target role rather than only by date.
- If space is limited, prioritize the strongest quantified bullets and remove vague or duplicative content before reducing font size or margins.