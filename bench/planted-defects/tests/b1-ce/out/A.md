> Here is my resume: tmp/bench/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
I reviewed the complete file.

**Coverage:** format check, full narrative review, and content/wording reviews for all four entries with bullets. The two education entries had no bullets to review. No job-description match was run because no posting was provided. The detailed report is available through `/report --full`.

## Changes to make first

### 1. Fix chronology and explain the gap

- Move **Mobility Systems Company** above **Eastern Robotics Co.** in the Experience section. The dates currently appear out of reverse chronological order.
- The resume leaves **June 2022–October 2023** unexplained. Add the relevant work, study, or other explanation if appropriate.
- Keep the project order newest-first as it currently appears.

### 2. Rework the Eastern Robotics entry

The specialists identified these changes:

- Replace the dashboard/on-call responsibility bullet with the specific dashboard or monitoring work performed and its operational result.
- For the API latency bullet:
  - Remove first-person phrasing such as “I worked” and “I also wrote.”
  - Identify the actual optimization that changed latency.
  - Separate testing from performance improvement if testing was for regression protection.
  - Add measured before-and-after latency or another verified result instead of “I think” and “a lot faster.”
- Preserve the CI bullet’s concrete result: the model-release cycle decreased from two weeks to three days.
- For the Falcon/NGX/KRT migration bullet, state what improved or was protected after cutover and define internal terms that an outside reader would not know.

### 3. Clarify the Mobility Systems claims

- Keep the bullet showing the **68% reduction in the pending-case backlog**; it provides a clear result.
- Define what “improved model performance by 35%” means:
  - metric,
  - baseline,
  - evaluation set,
  - and whether the figure is a relative improvement or percentage-point change.
- For the multi-agent routing bullet, explain how source-data traceability was verified—for example, through an audit result or another measurable check.
- Narrow the claim that you “single-handedly built the company’s entire ML platform.” Identify the specific platform area you owned and provide an adoption or usage measure if one exists.
- The runbook/documentation bullet is clear; only minor tightening is needed.

### 4. Rework the Agent Runtime Suite project

- Replace the opening bullet’s broad phrases such as “cutting-edge AI synergies,” “next-generation agentic paradigms,” “drive innovation,” and “unlock value” with the actual runtime work performed and a verified outcome.
- For the context-management bullet:
  - Explain what information was retained or discarded during compaction.
  - Connect the under-10K-token result to agent task success or another behavioral measure, ideally against a full-history baseline.
- For the Falcon migration bullet:
  - Define “NGX” and “KRT” for an external reader.
  - State the post-migration result, such as reliability, cost, speed, or deployment impact.

### 5. Rework the Research-Agent Evaluation Framework project

- Keep the contribution involving eight citation and faithfulness metrics, but add how the metrics were validated if that information is available.
- Replace or remove the bullet beginning with **“Was involved in the process of helping to support…”**. It does not identify a concrete contribution. State the actual evaluation, annotation, error-analysis, or framework work performed and its scope.
- Keep the bullet about tracing three structural defects, but add the downstream effect of fixing them if you can verify one.

### 6. Reconcile the Skills section with the experience

The narrative review found that these skills are listed without explicit evidence in the entries:

- Python
- SQL
- Bash
- Git
- PyTorch
- LoRA
- LangGraph
- RAG

Either connect each important skill to a project or role, or remove skills that you cannot support from the resume.

## Format

The file extracts cleanly, fits on one page, and has no layout or ATS parsing blockers. The format itself does not require a major change. The format review did flag:

- personal-pronoun usage in the API bullet;
- age, gender, or photo information if those items are present in the contact section;
- the incorrect Experience ordering noted above.

> /report
# Review: resume.pdf

**73/100** — format 100 · content 58 · wording 67 · narrative 58

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Remove age, gender, and photo details from the résumé.
2. Move Mobility Systems Company above Eastern Robotics Co. so Experience reads in reverse chronological order.
3. Replace the claim of single-handedly building the entire ML platform with the specific component you owned and the team context.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Oct 2023 - Jul 2024

- Replace the hedged speed claim with the affected endpoint's measured p95 or p99 latency before and after deployment. *(saves about 11 words, adds about 5 words)*
- Size the morning-dispatch backlog improvement with before-and-after counts or on-time dispatch rates. *(about 6 words to add)*
- Add a checkable operational result to the dashboard and weekly-reporting work. *(about 6 words to add)*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- Replace the claim of single-handedly building the entire ML platform with the specific component you owned and the team context. *(about 7 words to replace)*
- Add the latency percentile and held-out accuracy measure to the 5% SFT comparison. *(about 8 words to add)*
- Name the metric and comparison baseline behind the 35% model-performance improvement. *(about 6 words to add)*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- Tie the under-10K-token context bound to task-success rate versus a full-history baseline. *(about 8 words to add)*
- Add one verified post-migration outcome to show what the Falcon cutover improved or protected. *(about 6 words to add)*
- Replace the buzzword-heavy description with the actual runtime capability built. *(saves about 13 words, adds about 5 words)*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- Add the number of downstream failures eliminated after the upstream fixes, or another observed result. *(about 8 words to add)*
- Add the number of reports evaluated and the resulting error, coverage, or decision change. *(about 8 words to add)*
- Replace the passive filler with the specific evaluation task you personally owned. *(saves about 20 words, adds about 3 words)*

## Across the whole résumé

- Move Mobility Systems Company above Eastern Robotics Co. so Experience reads in reverse chronological order. *(no words)*
- Explain the 15-month gap between the B.S. and Junior Software Engineer role. *(about 8 words to add)*
- Remove age, gender, and photo details from the résumé. *(saves about 10 words)*

## Set aside (37)

Worth knowing, and not worth the space on this page:

- format: uses a personal pronoun; resume lines are phrases, not sentences — "I worked on improving the latency of our API and I also wrote tests..."
- s2:e0:b1: "I also wrote tests for it" is not a latency-improvement method; name the deployed optimization that changed the request path.
- s2:e0:b3: "with retries and dead- letter handling" names reliability features but not the capacity or scheduling change that removed the burst bottleneck; add [consumer concurrency, batching, or other causal change] if true.
- s2:e1:b2: "keeping every finding traceable to its source data" is an asserted property rather than evidence; add [the audit-confirmed attribution rate or reviewer-effort reduction].
- s2:e1:b3: "composite reward" does not show whether latency was explicitly optimized rather than changing incidentally; add [the latency term or constraint in the reward].
- s2:e1:b4: "used by every team across engineering, operations and research" gives broad reach but no adoption evidence; add [the number of teams, users, or usage period]. (and 1 more like it)
- s2:e1:b5: "who adopted them as the team’s runbook" shows acceptance but not operational value; add [the reviewer population or reduction in inconsistent escalations or review time].
- s2:e1:b5: "who adopted them as the team’s runbook" can be shortened to "adopted as the team runbook."
- s3:e0:b0: The bullet has no measurable proof; add [one verified outcome metric].
- s3:e0:b0: The claim "drive innovation and unlock value across the organization" is generic aspiration rather than a concrete result; state what changed for users or the system.
- …and 27 more, in `/report --full`.


