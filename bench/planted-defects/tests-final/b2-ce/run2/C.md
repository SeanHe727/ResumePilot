Your strongest material is the measured engineering work. The main changes are to remove two repeated claims, clarify what several metrics measure, and fix one technical inconsistency. I’ll point to each line rather than rewrite it.

### Header and education
- **Contact line:** Replace the example URL and contact details if these are placeholders. Make sure the link leads directly to work you want a reviewer to see.
- **Date of birth and nationality:** Remove these from a US-focused resume unless an application specifically requests them. They are generally not needed for screening; if work authorization is relevant, address it where the application asks.
- **M.S. entry:** Check that “Expected Jun 2026” is still accurate when you apply. The degree and dates are otherwise clear.
- **B.S. entry:** Replace “Country” if it is a placeholder. Use consistent location formatting across both schools and jobs.

### Mobility Systems Company
1. **Diagnostic accuracy / domain adapter:** Define what “35%” compares with—relative improvement or percentage points—and briefly identify the evaluation set. Otherwise, the result is hard to judge.
2. **Routing layer:** Clarify what “reviewer disagreement” measures and why restricting signals improved it. The 14%-to-6% change is useful, but readers need to know what was counted.
3. **GRPO triage agent:** Keep the baseline and equal-accuracy comparison; they make the result credible. Clarify whether the 18% and 5% reductions came from the same evaluation, and expand or contextualize GRPO if your target audience may not know it.
4. **Evaluation harness:** Specify what “citation quality” means if citations matter to the role. This is a strong bullet because it connects your work to a release decision.
5. **Second assistant-only loss-masking bullet:** Remove it or replace it with a distinct contribution; it repeats bullet 1. Also check the technical claim: assistant-only loss masking does not, by itself, explain why a model would reproduce *tool outputs* more faithfully. State only the behavior your evaluation actually established.
6. **Diagnostics triage branch:** Keep this version of the backlog result, but clarify whether the 68% drop can reasonably be attributed to the branch and what period or baseline the backlog was measured against. Delete the repeat under **Research-Agent Evaluation Framework**.

### Eastern Robotics Co.
1. **GPU memory:** Clarify whether “4x” means memory fell to one-quarter of the original use, and whether the change affected model quality or training throughput.
2. **API latency:** Strong, concrete result. Check that the build-failing load test uses conditions representative of the reported p95; otherwise, distinguish the test threshold from production latency.
3. **CI pipeline:** Change “adds” to past tense to match the role and other bullets. Explain what the three-day release cycle is compared with.
4. **Service migration:** Good operational detail. If possible, quantify the backlog or dispatch improvement rather than saying only that delays were removed.

### Projects
- **Agent Runtime Suite, adoption bullet:** Remove or substantiate it. “AI-first engineering practices,” “accelerating delivery,” and “improving outcomes” are too broad without a specific action and observed result.
- **Agent Runtime Suite, context bullet:** Explain what remained under 10K tokens and how useful context was preserved; size alone does not establish quality. Check that “grew 100x” has a meaningful starting point.
- **Agent Runtime Suite, concurrency bullet:** Strong technical detail. Clarify whether the deadlocks and lost results were observed in tests or production, and what “50-way fan-out” refers to.
- **Research-Agent Evaluation Framework, metrics bullet:** Identify the most important metrics or what decisions they enabled; “8 metrics” alone gives limited insight.
- **Research-Agent Evaluation Framework, correlation bullet:** Specify what was ranked for the Kendall correlation and whether the 400+ trials were independent reports or variants. That makes the validation claim easier to assess.
- **Research-Agent Evaluation Framework, backlog bullet:** Delete it. It duplicates the Mobility Systems result and appears unrelated to this project.

### Skills and final pass
- **Programming:** Move Git out of “Programming”; it is a tool, not a programming language.
- **ML & Agents:** Keep skills you can discuss in depth, and consider adding technologies already evidenced by your bullets if relevant to the jobs you’re targeting.
- **Consistency:** Use one spelling convention throughout (“penalises” differs from the otherwise US-oriented presentation), consistent past tense for completed work, and consistent hyphenation and date formatting.
- **Prioritization:** If space is tight, cut the broad or duplicate bullets before cutting the measured results.