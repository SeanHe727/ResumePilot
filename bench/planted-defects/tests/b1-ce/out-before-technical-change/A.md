> Here is my resume: bench/planted-defects/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed:

- **All 6 entries** for narrative and chronology
- **All 4 entries with bullets** for content and wording
- **Format/ATS extraction**
- No job-description match review, because no posting was provided

The PDF is one page, parses cleanly, and has no layout or ATS blockers. The main changes to make are:

### 1. Fix experience chronology

Reverse the two Experience entries:

1. Mobility Systems Company — Oct 2024–May 2025  
2. Eastern Robotics Co. — Aug 2022–Jul 2024

The current order makes the career progression harder to follow.

### 2. Correct the Agent Runtime Suite percentage

The line reporting a change from **900 ms to 600 ms** describes approximately a **33.3% reduction**, not a 50% reduction.

The change from **71% to 83%** should be described as a **12-percentage-point increase**, unless you specifically intend to report the relative percentage increase.

### 3. Correct or clarify the ML evaluation methodology

The most important technical issue is the statement that the classifier was trained with **early stopping on the test set** and that the result was reported as held-out performance. Early stopping should use a validation split; the test set should remain untouched until final evaluation.

Clarify the actual split and evaluation procedure before keeping the 91% figure.

Also review the statement that cross-entropy was used to rank findings “by statistical significance.” The specialist flagged that these are not automatically equivalent concepts.

### 4. Add outcomes to responsibility-focused bullets

Several bullets establish ownership but do not state what changed as a result:

- Monitoring dashboards and the on-call rotation
- The agent-routing component
- Adoption of AI-first engineering practices

Where available, add operational results such as incident-detection time, review time, adoption scope, or downstream delivery impact.

### 5. Make measurements more interpretable

Clarify the measurement boundaries behind claims such as:

- 68% backlog reduction
- 5% latency reduction
- 12% or 12-percentage-point benchmark improvement
- 0.89 Kendall correlation
- 91% test accuracy

For each, identify the relevant baseline, dataset or benchmark, percentile, endpoint, or evaluation protocol where needed.

### 6. Reduce redundancy and improve bullet focus

The Eastern Robotics entry repeats on-call ownership in two bullets. The migration bullet also combines migration work, logging-library work, onboarding, and weekend on-call responsibilities, which obscures its main accomplishment.

The wording review also flagged generic openings such as:

- “Owned…”
- “Maintained…”
- “Drove adoption…”

These should be replaced with the specific engineering action only if you choose to revise them.

### 7. Reconsider unsupported skills

The skills section lists technologies that are not explicitly demonstrated in the bullets, including:

- SQL
- Bash
- Git
- Python
- PyTorch
- LoRA
- LangGraph
- RAG
- Kubernetes

Either connect these technologies to specific experience or project work, or remove any that you cannot substantiate from the resume.

The detailed specialist findings have been incorporated into the generated report.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 70 · wording 81 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Reverse the Experience entries so Mobility Systems Company (Oct 2024–May 2025) appears before Eastern Robotics Co. (Aug 2022–Jul 2024).
2. Replace the incorrect 50% latency claim with the accurate approximately 33.3% reduction and identify the task-completion change as a 12-percentage-point increase.
3. Combine the two on-call references and replace broad responsibility language with the concrete dashboard, CI, and operational work performed.

## Already working

- s2:e0:b1: Uses a strong baseline-to-result latency comparison.
- s2:e1:b0: Shows ownership of a shipped diagnostics workflow.
- s3:e0:b1: The bullet clearly states the performance outcome and uses a relevant p95 measure.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

- Combine the two on-call references and replace broad responsibility language with the concrete dashboard, CI, and operational work performed. *(saves about 8 words)*
- Add the operational result and scope of the diagnostics dashboards, including how many alerts, incidents, services, or engineers they covered and what they improved. *(about 8 words to add)*
- Specify the compared endpoint or workload and explain what the load tests enforced or caught after reducing p95 API latency from 420 ms to 180 ms. *(about 10 words to add)*
- Name what the automated regression checks tested and define the release-cycle boundary behind the change from 2 weeks to 3 days. *(about 8 words to add)*
- Separate the migration, logging rewrite, onboarding, and on-call work or identify which change removed the nightly backlog, then quantify the affected jobs, robots, or dispatches. *(about 10 words to add)*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- Correct the triage evaluation protocol by using a validation split for early stopping and reserving the test set for untouched final evaluation. *(about 6 words to add)*
- Clarify the evaluation measure and size of the diagnostic-accuracy result, including whether 71% to 79% means exact match, top-k, or another metric and how many cases were in each split. *(about 8 words to add)*
- State the starting and ending pending-case backlog alongside the 68% reduction. *(about 5 words to add)*
- Replace the training-detail opening with a direct action and explain how the composite reward produced the 5% latency improvement, including its latency baseline, percentile, and measured boundary. *(about 12 words to add)*
- Replace the cross-entropy and statistical-significance wording with the actual confidence or ranking method, then add the routing result such as review-time or selection-accuracy improvement. *(about 10 words to add)*
- Quantify the reach of the adopted abstention rules and escalation paths by naming the number or roles of reviewers who used the runbook. *(about 5 words to add)*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- Replace the incorrect 50% latency claim with the accurate approximately 33.3% reduction and identify the task-completion change as a 12-percentage-point increase. *(saves about 2 words)*
- Replace the vague AI-first initiative statement with specific actions and a concrete delivery or downstream-team result, while adding the platform scope. *(about 10 words to add)*
- Change the tool-call result to a 33.3% reduction from 900 ms to 600 ms and remove the redundant percentage restatement. *(saves about 3 words)*
- Describe the task-completion result as a 12-percentage-point increase and identify the benchmark suite’s size or evaluation basis. *(about 5 words to add)*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- Show the implementation work behind the eight upstreamed metrics and quantify the releases, evaluations, or reports covered by the default benchmark. *(about 10 words to add)*
- Replace the awkward validation wording with a direct result that identifies what the Kendall correlation of 0.89 was measured against and how it validated the evaluator for regression or benchmark use. *(about 12 words to add)*
- Compress the defect description and instrumentation wording, then add the resulting test, failure-rate, or release outcome after the three defects were fixed upstream. *(about 6 words to add)*

## Across the whole résumé

- Reverse the Experience entries so Mobility Systems Company (Oct 2024–May 2025) appears before Eastern Robotics Co. (Aug 2022–Jul 2024). *(no words)*
- Tighten the repeated wording across the résumé by leading with direct action verbs, shortening dense clauses, and removing redundant restatements of results. *(saves about 35 words)*
- Add the missing scope and comparison conditions behind the résumé’s metrics wherever available, including workload, cycle boundary, latency baseline, backlog size, benchmark basis, and adoption reach. *(about 25 words to add)*

## Set aside (7)

Worth knowing, and not worth the space on this page:

- format: Experience is not newest-first: "Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024" is listed above the more recent "Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025".
- s2:e1:b3: The line lists several training details without explaining how optimizing accuracy, citation validity, and call count produced a latency reduction.
- s3:e1:b2: "with layered instrumentation" identifies a valid debugging approach but is too broad to show what evidence localized the defects.
- s2:e1:b1: "with assistant-only loss masking" adds specialized process detail after the main result and slightly reduces scanability.
- s2:e0:b3: "while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation" stacks three additional activities onto the migration, obscuring the primary accomplishment.
- whole resume, dates: The timeline shows a two-month interval between the B.S. ending in Jun 2022 and the first role beginning in Aug 2022. (and 2 more like it)
- skills: SQL — no experience or project entry shows database querying or SQL development; a reader would expect it in a data, backend, or evaluation bullet. (and 8 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-09f60a95.md.

