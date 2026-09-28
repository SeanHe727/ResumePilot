# Resume review

You have strong technical material: measurable outcomes, relevant ML/agent work, and evidence of systems engineering. The biggest improvements are removing duplicated claims, clarifying how some metrics were measured, and making your skills and project entries more specific.

## Header and section order

- **Remove your date of birth.** It is not relevant to evaluating your technical qualifications and can introduce unnecessary bias.
- **Remove nationality unless you have a specific reason to disclose it.** If work authorization is relevant to the roles you’re applying for, state your authorization status only if accurate and useful.
- **Label your code link clearly** and make sure it leads directly to your GitHub or portfolio. Consider adding LinkedIn if you use it professionally.
- **Move Technical Skills closer to the top**, likely after your contact information. This makes your role-relevant keywords easier for recruiters and ATS to find.
- **Consider placing Experience before Education.** Your internships are substantive and directly relevant; lead with them unless you are applying mainly through campus recruiting, where Education-first can still make sense.

## Education

- **Keep the current degree’s expected completion date clearly marked**, as it is now. Make date formatting consistent across the resume.
- **Consider adding GPA only if it is strong and useful** for the roles or recruiting programs you’re targeting. Relevant coursework is optional, and likely lower priority given your experience.

## Experience

### Mobility Systems Company — Machine Learning Engineering Intern

1. **Accuracy improvement bullet:** Keep the result, but clarify whether “35%” is a relative improvement or a percentage-point increase. Include the evaluation-set size or other context if available.  
   **Why:** The metric is compelling, but its magnitude is hard to interpret without a definition and evaluation context.

2. **Routing-layer bullet:** Define what “reviewer disagreement” means and how it was measured. If space allows, specify the evaluation scope or sample size.  
   **Why:** The reduction from 14% to 6% is strong, but readers need to understand what counted as a disagreement and whether the comparison was robust.

3. **GRPO/tool-calls bullet:** Clarify the latency statistic or measurement setup, and give the number or type of cases used if available. Explain what “equal accuracy” means in the comparison.  
   **Why:** You report three outcomes—tool-call reduction, latency reduction, and maintained accuracy—but the basis for comparing them is not yet clear.

4. **Evaluation-harness bullet:** Add context on what the evaluation covered, such as the test-set scale or how you defined an accuracy regression, if you have room.  
   **Why:** Comparing 14 checkpoints and catching regressions shows useful engineering judgment; more context would make the impact easier to assess.

5. **Assistant-only loss-masking bullet:** Remove this bullet or replace it with a genuinely distinct contribution. It substantially repeats the first bullet’s method.  
   **Why:** Repeating the same technique takes space away from other accomplishments and may make the first result seem double-counted.

6. **Diagnostics-triage/backlog bullet:** Keep this achievement in one place only; it is repeated almost verbatim in the Research-Agent project. Add the backlog’s starting scale or define what “pending-case backlog” measures if available.  
   **Why:** The 68% reduction is valuable, but repeating it can look like the same result is being claimed twice. More context would also help readers understand the operational impact.

### Eastern Robotics Co. — Junior Software Engineer

1. **GPU-memory bullet:** Verify that the 4× reduction is attributable to the change as described, and include comparable training conditions if possible.  
   **Why:** A move from FP32 to BF16 alone does not always explain a 4× reduction, so technical reviewers may question the figure without context.

2. **Latency bullet:** This is one of your clearest bullets. Consider adding the load-test traffic profile or request volume if you have space.  
   **Why:** The before-and-after p95 figures and build threshold are strong; the workload context would make the result more reproducible and meaningful.

3. **CI-pipeline bullet:** Fix the tense mismatch between “Maintained” and “adds.” Clarify what “release cycles to 3 days” means and, if possible, give the prior duration or frequency.  
   **Why:** The tense inconsistency is distracting, and the outcome could mean either shorter release lead time or more frequent releases.

4. **Event-queue migration bullet:** Name the queue technology if relevant and quantify the effect of eliminating nightly backlogs, such as dispatch delays avoided or workload handled.  
   **Why:** Migrating 30 services is a useful scale indicator, but the operational benefit is currently described broadly.

## Projects

### Agent Runtime Suite

- **First bullet:** Rework or remove this claim unless you can make the contribution and outcomes concrete. “AI-first practices,” “accelerating delivery,” and “improving outcomes” are broad and not supported by specific evidence here.  
  **Why:** It is less convincing than your technical bullets and uses space without showing what you personally built or what changed.

- **Second bullet:** Explain what grew 100×, and how the 10K-token context limit and 100-turn stress test were measured. If relevant, note whether task quality was maintained.  
  **Why:** The compression result is distinctive, but the growth comparison and its practical significance are unclear.

- **Third bullet:** Clarify what “50-way fan-out” represents and the scope of testing that demonstrated the deadlock and lost-result fixes.  
  **Why:** The technical work is strong; a little more context would help readers assess the concurrency challenge and its impact.

- **Project heading:** Add a repository or demo link if available, and list concrete technologies or libraries where appropriate.  
  **Why:** “Multi-Agent Systems” describes the subject, but not the implementation stack; a link lets technical reviewers inspect the work.

### Research-Agent Evaluation Framework

- **Project heading:** Identify the open-source framework by name and link to the project or your contribution. Include concrete technologies if they are relevant.  
  **Why:** The current title is generic, making it difficult to verify the project or understand its technical context.

- **Citation-and-faithfulness-metrics bullet:** Name the metrics or otherwise specify what you integrated.  
  **Why:** The number of metrics is useful, but their names would better demonstrate your evaluation expertise and provide searchable technical keywords.

- **Kendall-correlation bullet:** Explain which quantities were correlated—for example, what the evaluator score was compared against—and briefly clarify the degradation experiment.  
  **Why:** A correlation of 0.89 sounds strong, but without knowing what was correlated, readers cannot interpret the result.

- **Backlog bullet:** Remove it from this project entry if you keep the same achievement under Mobility Systems Company.  
  **Why:** Repeating the same backlog result risks appearing to double-count work across experience and projects.

## Skills

- **Expand the section only with technologies you can discuss confidently.** Your experience mentions training precision, CI, caching, queues, and evaluation, but the skills list currently covers only a small part of that work.
- **Organize skills into useful categories** such as languages, ML frameworks and methods, evaluation, infrastructure, and databases—using categories that reflect your actual experience.
- **Replace or supplement broad phrases such as “agent evaluation” with specific tools, frameworks, or methods you have used**, if applicable.  
  **Why:** Specific terms are more informative to technical reviewers and more likely to match ATS searches.
- **Keep the list selective.** Don’t add tools merely because they appear in a job description; be prepared to explain your level of experience with each one.

## Highest-priority changes

1. Remove the personal details from the header.
2. Eliminate the repeated loss-masking and backlog claims.
3. Add measurement context to the strongest metrics, especially accuracy, disagreement, latency, and memory reduction.
4. Fix the CI bullet’s tense mismatch and clarify its release-cycle result.
5. Strengthen the vague Agent Runtime Suite claim and identify the research framework.
6. Expand the skills section with specific, genuinely used technologies.