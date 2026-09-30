# case-1

## Résumé

```
Jordan Lee
+1 (555) 010-2468 | jordan.lee@example.com | example.com/code/jordan-lee
Date of birth: 14 Mar 1999 | Nationality: Canadian
EDUCATION
Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026
Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022
EXPERIENCE
Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025
- Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use
trajectories with assistant-only loss masking.
- Designed a routing layer that limits each of 3 specialist agents and an independent reviewer
to their in-scope signals, cutting reviewer disagreement with specialist findings from 14%
to 6%.
- Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises
redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT
baseline at equal accuracy.
- Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy,
citation quality and latency, catching 2 accuracy regressions before release.
- Fine-tuned the adapter with assistant-only loss masking so the model would learn to
reproduce the tool outputs more faithfully.
- Built a diagnostics triage branch for an industrial inspection system that screens 800+
sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in
the eight weeks after launch.
Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024
- Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16
mixed precision.
- Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor
reads, with load tests that fail the build if p95 exceeds 200 ms.
- Maintained the CI pipeline for the perception team’s model releases and adds automated
regression checks that shortened release cycles to 3 days.
- Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-
letter handling, removing the nightly backlogs that delayed morning dispatch.
PROJECTS
Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present
- Drove adoption of AI-first engineering practices across the platform, accelerating delivery
and improving outcomes for downstream teams.
- Kept working context under 10K tokens across a 100-turn stress test while the raw
conversation grew 100x, using budgeted context layers and staged compaction.
- Separated concurrency pools and gated cache writes on stream completion, removing nested-
pool deadlocks and lost tool results under 50-way fan-out.
Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025
- Integrated 8 citation and faithfulness metrics into an open-source research-agent
framework’s evaluation module.
- Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across
400+ report-level trials that removed citations, sources and claims.
- Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor
signals per case using ML-extracted features.
SKILLS
Programming: Python, TypeScript, Git
ML & Agents: PyTorch, LoRA, GRPO, agent evaluation
```

## Reviewer 1

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

## Reviewer 2

# Résumé critique

## Overall assessment

**Best-fit role suggested by the résumé:** machine-learning engineer focused on LLM agents, evaluation, or applied ML systems. There is not enough information to tailor this to a particular job or employer.

The résumé has strong technical substance and several useful outcome metrics. Its main weaknesses are **repeated achievements, a few vague or unsupported impact claims, and limited context for interpreting the metrics**. The biggest immediate fixes are to remove duplication, make the strongest work easier to find, and correct the tense error in the Junior Software Engineer section.

I’ve identified the bullets by their opening words rather than rewriting them. I’m not proposing replacement wording.

## Role lens and limitations

- **Likely reviewer:** an ML engineering hiring manager or technical recruiter screening for applied ML/agent experience. They will look for evidence that you can build, evaluate, and operate systems—not only experiment with models.
- **Company context:** no target company was provided, so I can’t assess company-specific priorities or vocabulary.
- **Job-description terms:** no job description was provided, so a true keyword match, fatal-gap ranking, or company-specific vocabulary map isn’t possible.
- **Likely competitive candidate:** someone with direct production experience deploying LLM or agent systems, clear evaluation methodology, and concrete reliability or business outcomes.
- **Your differentiators:** hands-on agent work, reinforcement-learning-based tool use, measurable evaluation work, and production-oriented engineering. The résumé needs to make those strengths distinct rather than repeat the same result across sections.

### Main gaps by importance

- **Potentially serious, depending on the job:** no explicit cloud/platform, model-serving, or deployment-stack experience is listed. Add these only if you have them; otherwise, treat them as genuine gaps rather than trying to imply them.
- **Fixable presentation gaps:** unclear metric definitions, unclear project provenance, and repeated accomplishments.
- **Not inherently a gap:** no publications section. For the likely industry role, that is not a problem unless the job asks for research credentials.

## What to change, section by section

### Header and personal details

- **Remove date of birth and nationality.** They are generally unnecessary for a U.S.-style résumé, disclose personal information that isn’t relevant to the work, and may invite bias. If work authorization is important for an application, address that separately and only as appropriate.
- **Make sure the code link goes directly to a maintained portfolio or profile.** A link is useful only if it lets a reviewer quickly inspect relevant work.
- **Consider adding a brief target-role descriptor or summary.** The résumé currently begins with education and does not immediately say whether you are positioning yourself for ML engineering, agent engineering, or general software roles. Keep any summary factual and specific; don’t use it to repeat bullets.

### Education

- **Clarify the in-progress master’s degree at a glance.** “Expected Jun 2026” does indicate this, but ensure the presentation makes clear that it is not yet completed.
- **Check the location formatting for consistency.** One institution is listed in the U.S. and the other in “Country.” Use consistent location detail if those are actual locations, or omit location where it adds no value.
- **Keep education above experience only if it is strategically important for the roles you’re pursuing.** You have relevant work experience now, so experience may deserve earlier placement for industry ML engineering applications.

### Mobility Systems Company — Machine Learning Engineering Intern

- **“Improved diagnostic accuracy by 35%…”** Specify what the 35% measures and how it was calculated: for example, whether it is a relative improvement or a percentage-point increase, what evaluation set was used, and what baseline it compares against. Without that context, a large result is hard to assess.
- **“Designed a routing layer…”** Explain how “reviewer disagreement” was measured and over what evaluation sample. The result is promising, but the metric is not self-explanatory. Also make the relationship between the three specialist agents and the independent reviewer easy to understand.
- **“Trained the triage agent with GRPO…”** Keep this if you can explain the experiment and baseline clearly. Clarify how “equal accuracy” was established and whether the latency and tool-call reductions were measured consistently. This is technically strong but dense; make sure the main result is easy to extract on a quick read.
- **“Wrote the evaluation harness…”** Clarify whether this was adopted in a release process or used for a one-time comparison. The two caught regressions are valuable evidence, but a reader needs to know what the harness evaluated and how the regressions were detected.
- **“Fine-tuned the adapter with assistant-only loss masking…”** This appears to repeat the assistant-only loss-masking work already described in the first bullet. Remove the duplicate or make the second bullet demonstrate a separate contribution. As written, it uses space without adding much evidence.
- **“Built a diagnostics triage branch…”** This achievement is repeated again under the Research-Agent Evaluation Framework project. Keep the accomplishment in the section that best reflects where and how the work was done, and remove the duplicate elsewhere. Also consider moving this higher within the internship if this was a shipped system with a clear operational result; it currently appears last despite its strong impact metric.
- **Across the role:** Six bullets is a lot for an internship, especially with repeated subject matter. After removing overlap, prioritize distinct contributions: system impact, agent/model work, evaluation, and engineering execution.

### Eastern Robotics Co. — Junior Software Engineer

- **“Cut GPU memory…by 4x…”** Add enough context to show why the change mattered: model or workload scale, whether it enabled a larger model/batch, or whether it reduced infrastructure needs. Keep the claim bounded to what you measured.
- **“Reduced p95 API latency…”** This is one of the clearest bullets. Preserve the before/after metric and the build-time threshold. If space allows, make sure the reader can tell whether the tests represented production-like load.
- **“Maintained the CI pipeline…and adds…”** Correct the tense inconsistency. The role is described in the past tense, but this bullet switches to present tense. Also clarify what the regression checks covered and how the three-day release-cycle figure was measured.
- **“Migrated 30 robot-fleet services…”** Explain the operational meaning of “removing the nightly backlogs” if you can quantify it—for example, how often they occurred or what dispatch delay they caused. The migration itself is concrete, but the outcome is currently less measurable than your other bullets.
- **Ordering:** Consider placing the strongest role-relevant achievements first. The current order is reasonable, but the latency and fleet-migration work may be more immediately legible to a general engineering reviewer than the precision/memory detail.

### Projects

- **Agent Runtime Suite — “Drove adoption of AI-first engineering practices…”** This is the vaguest bullet in the résumé. “Drove adoption,” “accelerating delivery,” and “improving outcomes” are not supported by a measurable result or a specific change. Add evidence if you have it; otherwise, remove it in favor of the more concrete runtime bullets.
- **“Kept working context under 10K tokens…”** Define how the stress test was run and what “raw conversation grew 100x” means. Also clarify what behavior or quality was preserved while the context was reduced; token reduction alone does not establish system quality.
- **“Separated concurrency pools…”** This is a strong technical reliability claim, but it would benefit from the test conditions and an indication of how often or under what workload the deadlocks and lost results occurred. “50-way fan-out” helps; give enough context to make it interpretable.
- **Research-Agent Evaluation Framework — “Integrated 8 citation and faithfulness metrics…”** Identify the framework or project clearly enough that a reviewer can verify the contribution. “Contributor” is broad; make your personal scope apparent.
- **“Showed the evaluator tracks injected degradation…”** Explain how the degradation trials were designed and what the correlation indicates. A Kendall correlation of 0.89 is potentially impressive, but the résumé currently leaves readers to infer whether it demonstrates robust sensitivity, ranking agreement, or something else.
- **“Cut the pending-case backlog…”** This duplicates the internship triage-branch result. Remove one instance or make the project’s contribution demonstrably distinct. If this was the same work, don’t present it as a separate achievement in a way that could look like double-counting.

### Skills

- **Expand the section only with skills you can substantiate.** For an ML/agent engineering target, the current list is thin relative to the experience described. Relevant areas to consider listing, if accurate, include model serving, deployment or cloud infrastructure, data processing, evaluation methods, and testing/observability tools.
- **Use specific tool or method names where they matter.** “Agent evaluation” is broad. Your project bullets mention citation, faithfulness, and correlation-based evaluation; make sure the skills section accurately reflects the methods and libraries you can discuss.
- **Keep the claims aligned with the experience section.** Don’t add a technology merely because it appears in a job description if you have not used it.

## Five-perspective read-through

### ATS: illustrative keyword scan, not a job-specific score

Because there is no job description, this is only a rough scan against common ML/agent engineering terms—not a reliable ATS pass rate.

| Common term | Resume evidence |
|---|---|
| Python | Present |
| TypeScript | Present |
| PyTorch | Present |
| Large language models / LLMs | Implied, not named directly |
| Fine-tuning | Present |
| LoRA | Present |
| GRPO | Present |
| Multi-agent systems | Present |
| Tool use | Present |
| Model evaluation | Present |
| Retrieval / RAG | Not present |
| Model serving | Not present |
| Inference optimization | Partially present through latency and batching work |
| APIs | Present |
| GPU optimization | Present through BF16 and memory work |
| CI/CD | Present |
| Production deployment | Partially evidenced; the deployment context is not always explicit |
| Experimentation / benchmarking | Present |
| Observability | Not present |
| Cloud infrastructure | Not present |

**Illustrative coverage:** roughly 14/20 concepts are present or partially represented. This is not a genuine ATS match rate; the actual result depends on the target posting and the employer’s screening rules.

### Recruiter glance

**Verdict: Forward, with some uncertainty.** The ML engineering internship and quantified technical work are credible signals. The personal details consume space, and the opening does not immediately establish your intended role or strongest specialization.

### HR screen

**Verdict: Borderline to phone screen.** The experience appears relevant, but the résumé does not provide a concise role-positioning statement, and the skills list may undersell the breadth implied by the bullets. Whether you meet basic requirements cannot be determined without a job description.

### Hiring manager

**Verdict: Interview, if the work is well substantiated.**

1. **Strongest signal:** hands-on work spanning agent behavior, evaluation, inference efficiency, and operational systems.
2. **Main concern:** repeated results and ambiguous metrics make it harder to distinguish separate contributions from the same work.
3. **Likely follow-up:** how the 35% accuracy improvement was measured and validated.

### Technical reviewer

**Truthfulness:** Not externally verifiable from the résumé alone. The quantitative claims need definitions and supporting evaluation details; I see no basis to call them false, but several are currently difficult to audit.

**Consistency issues to fix:**
- Assistant-only loss masking appears in two internship bullets.
- The triage-backlog result appears in both experience and projects.
- The CI bullet has a present-tense verb inside a past-tense role.
- Some metrics lack baselines, test conditions, or definitions.

## Provisional scoring

These scores are **resume-only estimates** for the inferred ML/agent engineering direction, not a judgment against a specific job. The publication category is treated as general evidence selection because publications are not necessarily expected for this target.

| Dimension | Score | Weight | Weighted | Notes |
|---|---:|---:|---:|---|
| ATS keywords | 6.5/10 | 15% | 0.98 | Relevant terms are present, but no JD-specific match is possible. |
| Summary | 5.5/10 | 10% | 0.55 | No summary or immediate target-role framing. |
| Skills | 5.5/10 | 10% | 0.55 | Likely underspecified relative to the experience. |
| Bullet quality | 7.0/10 | 25% | 1.75 | Strong metrics and technical detail; repetition and unclear measurement weaken it. |
| Evidence selection | 7.0/10 | 10% | 0.70 | No publication issue for an inferred industry target; project provenance needs clarity. |
| Narrative coherence | 6.5/10 | 15% | 0.98 | Strong technical direction, but overlapping work blurs the story. |
| Page fill & visual | 7.0/10 | 5% | 0.35 | Plain text is insufficient to assess layout or page fit. |
| Credibility signals | 7.5/10 | 10% | 0.75 | Good quantitative claims, though several need more context. |
| **Total** |  | **100%** | **6.61/10** | **Provisional; not JD-specific.** |

## Interview likelihood

These are directional estimates only; without a job description, location/work-authorization context, or résumé layout, they should not be treated as actual probabilities.

| Reader | Estimated likelihood | Main factor |
|---|---:|---|
| ATS | 50–70% | Depends heavily on the target posting’s required terms. |
| Recruiter | 65% | Relevant internship title and measurable outcomes help; missing role positioning weakens the first impression. |
| HR | 55–65% | Relevant experience is visible, but basic-qualification fit depends on the posting. |
| Hiring manager | 60–70% | Strong technical material, tempered by duplicate claims and unclear measurement details. |
| Technical panel | 65–75% | The methods could be compelling if you can explain the baselines, tests, and personal ownership precisely. |

**Provisional ceiling:** the résumé could become materially stronger through clearer evidence and de-duplication. A specific ceiling or score increase would be false precision without a target job.

## Actionable changes, ranked

### High impact

1. **Remove or distinguish the repeated assistant-only loss-masking claim.** It currently looks like the same contribution is being counted twice.
2. **Remove or distinguish the repeated triage-backlog result.** The same outcome appears in both employment and projects, which risks looking inflated even if both sections describe related work.
3. **Define the largest metrics.** For the 35% accuracy gain, 14%-to-6% disagreement change, 0.89 correlation, and 100x context growth, add enough evaluation detail that a technical reader can interpret and compare them.
4. **Replace or remove the vague “AI-first engineering practices” bullet.** It makes broad impact claims without showing a specific contribution or result.
5. **Fix the tense inconsistency in the CI bullet.** It is a straightforward polish issue and could suggest insufficient review.
6. **Remove date of birth and nationality.** These details do not help establish technical fit and expose unnecessary personal information.

### Medium impact

1. **Reorder the internship bullets so the clearest, most substantial results are easy to find.** The backlog reduction and evaluation work may be more immediately legible than some of the implementation detail.
2. **Clarify project identity and ownership.** Name the open-source framework where possible and specify your scope as a contributor.
3. **Strengthen the skills section with verified, relevant specifics.** The current list does not fully reflect the work described.
4. **Clarify the Junior Software Engineer outcomes.** Add context for the memory reduction, release-cycle improvement, and removal of nightly backlogs.
5. **Add concise role positioning if you are applying to a consistent role family.** This helps readers distinguish agent/ML systems work from general software engineering.

### Cosmetic

1. **Standardize location formatting** across the education entries.
2. **Check date and title formatting** for consistency across sections.
3. **Review the portfolio link** to ensure it leads to relevant, accessible work.

## Interview preparation points

These are topics to be ready to explain, not suggested scripts:

| Resume topic | What to be ready to explain |
|---|---|
| Diagnostic-accuracy improvement | Metric definition, evaluation set, baseline, your specific contribution, and whether the gain generalized. |
| Agent routing and reviewer disagreement | How disagreements were defined, what the routing policy controlled, and what trade-offs it introduced. |
| GRPO and tool-call reduction | Training setup, reward design, baseline, equal-accuracy comparison, and latency measurement. |
| Evaluation harness | What the 14 checkpoints represented, which tests caught the regressions, and how the team used the results. |
| Context management stress test | Test setup, meaning of the 100x increase, quality checks, and the limitations of the result. |
| Concurrency and cache reliability | Failure conditions, how the fix was validated, and whether it addressed observed production incidents or stress-test failures. |
| Fleet-service migration | Why the event queue was needed, how retries and dead-letter handling worked, and how you measured the operational improvement. |

**Verdict:** Prioritize removing duplicated claims, strengthening metric definitions, correcting the tense error, and removing unnecessary personal information. Then expand the skills and project context only with details you can substantiate.

## Reviewer 3

6 errors, 9 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> "Date of birth: 14 Mar 1999 | Nationality: Canadian"

**Problem**
[Error] The résumé includes personal details that are conventionally left off.

**Why**
A reader does not need your date of birth or nationality to assess your qualifications. Including them gives attention to information that does not help weigh your experience or fit.

**How to change it**
Remove the date of birth and nationality.

> "pending-case backlog 68%" / "pending-case backlog by two-thirds"

**Problem**
[Error] The same triage achievement is reported with two different backlog-reduction figures.

**Why**
The internship and project bullets both describe a triage branch screening 800+ signals per case, but one reports a 68% reduction and the other two-thirds. A reader may doubt which figure is accurate, and the repeated claim makes it unclear whether these are separate achievements.

**How to change it**
Confirm [the correct backlog-reduction figure], then consolidate the repeated achievement or make both entries agree.

> "M.S. in Computer Engineering"

**Problem**
[Important] The education section appears before the work experience that should lead the page.

**Why**
Your listed roles and project work are more relevant to a reader assessing your practical experience. Leading with education delays that evidence.

**How to change it**
Move the experience section above education.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The diagnostic-accuracy improvement has no named comparison point.

**Why**
A reader cannot tell whether the 35% is relative to the untuned model, another baseline, or a different evaluation. Without the comparison, the size of the improvement is difficult to interpret.

**How to change it**
After the result, add [the baseline used for the accuracy comparison], if available.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Error] Assistant-only loss masking does not train the model to reproduce tool outputs when those outputs are non-assistant messages.

**Why**
Assistant-only masking excludes non-assistant tokens from the training loss. It can train the model to respond based on tool outputs, but that is different from learning to reproduce them.

**How to change it**
If the training loss included tool-output tokens, specify how; otherwise, change the claim to say the masking trained the model to respond to tool outputs rather than reproduce them.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The backlog reduction is attributed to the triage branch without evidence that the branch caused it. *(no words if you replace the causal wording)*

**Why**
The backlog may also have changed because of incoming case volume, staffing, or other workflow changes. Saying it fell after launch establishes timing, not that the branch produced the reduction.

**How to change it**
Credit the branch only if [a suitable comparison supporting attribution] is available; otherwise, report that the backlog fell 68% in the eight weeks after launch.

> "assistant-only loss masking"

**Problem**
[Error] The two internship bullets repeat the same adapter fine-tuning method.

**Why**
Both bullets mention fine-tuning the adapter with assistant-only loss masking, while the first already gives an accuracy result. The second does not establish a distinct outcome, so it reads as duplicated work rather than additional evidence.

**How to change it**
Cut the repeated method from one bullet; if the bullets describe distinct work, clarify how they differ.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Error] Switching from FP32 to BF16 mixed precision alone does not support the claimed fourfold GPU-memory reduction.

**Why**
BF16 uses half as many bytes per value as FP32, but mixed-precision training may retain FP32 master weights and optimizer state. That switch does not generally reduce total GPU memory fourfold, so a reader may doubt the result.

**How to change it**
Report the measured memory reduction from the actual run, if available; otherwise, describe the use of BF16 mixed precision without claiming a 4x reduction.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet shifts from past tense to present tense in a role that ended in July 2024.
2. [Important] The claim that regression checks shortened release cycles to three days is not supported by evidence that they caused the change. *(no words if you remove the causal attribution)*
3. [Important] The three-day release-cycle duration has no previous duration for comparison.

**Why**
1. “Maintained” describes completed work, but “adds” makes the second action sound ongoing. That tense mismatch disrupts the timeline and weakens the clarity of what you did in the role.
2. Other steps may determine release-cycle time, so adding checks alone does not establish that they produced the three-day cycle. A reader may question the causal claim.
3. A reader can see the new duration but cannot tell how much faster releases became. Without a baseline, the scale of the improvement is unclear.

**How to change it**
1. Replace “adds” with “added” to keep the bullet in past tense.
2. Add evidence that isolates the checks’ effect, if available; otherwise, say the checks were added and release cycles were 3 days without attributing the duration to them.
3. Add [previous release-cycle duration] before “to 3 days.”

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The claim that the migration removed nightly backlogs is stronger than the line establishes, and the operational change is unmeasured.

**Why**
An event queue with retries and dead-letter handling can help with scheduling or transient-failure backlogs, but it does not ensure backlogs disappear if capacity or downstream services are constrained. The line gives no evidence that the backlogs were eliminated or how much morning dispatch delay changed.

**How to change it**
If the backlogs were eliminated, add evidence for that; otherwise, replace “removing” with softer wording and add [dispatch delay before and after], if available.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The claimed delivery and downstream improvements are vague and lack a supporting measure or comparison.

**Why**
A reader cannot tell what became faster or better, or how much it changed. Without a measured result and a basis for comparison, the claimed impact is difficult to judge.

**How to change it**
Replace that phrase with [a specific delivery or downstream result and what it was compared against], if substantiated; otherwise, remove the generic outcome claims.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The line does not establish that the changes eliminated nested-pool deadlocks or lost tool results under 50-way fan-out. *(no words if you replace the claim; about 6 words if adding test results)*

**Why**
Deadlocks can still occur through waits or resources shared across pools, and stream completion alone does not ensure that tool results were recorded successfully. The stated scale does not show how either failure was assessed.

**How to change it**
If validated, add the test conditions and results supporting the 50-way claim; otherwise, replace “removing” with wording that says the changes addressed these failure modes.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Important] The triage-branch backlog result is inconsistently attributed to this project and the internship.

**Why**
The matching backlog and sensor-signal details strongly suggest this is the same work, but the research-agent evaluation project is presented separately. As written, the attribution may make a reader doubt what this project delivered.

**How to change it**
Confirm which effort owned the triage branch; if it was the internship, remove this claim from the project entry, and if it was this project, distinguish its result from the internship claim.

## Reviewer 4

## Highest-priority changes

1. **Remove your date of birth and nationality.** They’re generally unnecessary on a résumé and can expose personal information or invite bias. If work authorization is relevant to the roles you’re applying for, address that separately and only as needed.
2. **Remove duplicated accomplishments.** The assistant-only loss-masking work appears twice in your internship bullets, and the backlog reduction appears in both Experience and Projects. Keep each accomplishment once, in the section that best demonstrates your role and impact.
3. **Replace the generic Agent Runtime Suite bullet.** It makes broad claims about adoption and outcomes without showing what changed or how you know it worked.
4. **Clarify several metrics and claims.** In particular, define the accuracy improvement, the disagreement rate, what “equal accuracy” means, and the evaluation behind the reported correlations.
5. **Fix the tense inconsistency** in the Eastern Robotics CI bullet.

## Header and education

- **Contact details:** Make sure the code/portfolio link is live, clickable, and relevant to the jobs you want. Keep the phone number in a format usable by your target employers.
- **Education dates and locations:** Use consistent formatting for dates and locations. Make sure “Expected Jun 2026” is still accurate when you submit the résumé. Include GPA or relevant coursework only if it strengthens your application.
- **Degree and institution names:** Use the official names. If the company or school names here are anonymized for sharing, no change is needed; on the submitted résumé, avoid placeholder-like names.

## Experience — Mobility Systems Company

- **“Improved diagnostic accuracy by 35%…”** Specify whether 35% is a relative increase or a percentage-point increase, and what data or benchmark the comparison uses. “Diagnostic accuracy” is broad; make sure the reader can understand what was measured.
- **“Designed a routing layer…”** Clarify how the 14% and 6% disagreement rates were calculated, including the evaluation set or denominator. Also make clear what the routing layer restricts and how you determined the signals were in scope.
- **“Trained the triage agent with GRPO…”** Explain what “equal accuracy” means and how it was established. The tool-call and latency improvements are useful, but readers need enough context to judge whether the comparison was controlled and meaningful.
- **“Wrote the evaluation harness…”** Say what the harness evaluated or enabled beyond the checkpoint count, if that’s important to your target role. Be precise about what “catching 2 accuracy regressions” means; avoid implying the harness prevented releases unless it actually did.
- **“Fine-tuned the adapter with assistant-only loss masking…”** This repeats the method in your first bullet. Remove the duplicate or consolidate the information into one bullet. Also check the technical wording: assistant-only masking does not necessarily train the model on tool-generated outputs, depending on which messages are included in the loss.
- **“Built a diagnostics triage branch…”** This overlaps with the backlog-reduction bullet in Projects. Keep the accomplishment in one place, preferably where you can explain your direct contribution and the launch context. If you keep it here, clarify how the backlog reduction was measured and what “pending-case backlog” refers to.

## Experience — Eastern Robotics Co.

- **“Cut GPU memory… by 4x…”** Verify and explain the memory measurement. Switching from FP32 to BF16 alone would not usually explain a fourfold reduction in all memory use, so specify what memory was measured and what else contributed, if applicable. Mention model-quality impact only if you measured it.
- **“Reduced p95 API latency…”** This is a strong, specific result. Clarify the conditions for the before-and-after measurements if they aren’t otherwise obvious. The build-failing load test is a separate contribution; retain it if there’s room and it reflects work you personally did.
- **“Maintained the CI pipeline… and adds…”** Correct the tense mismatch: the role is dated in the past, but “adds” is present tense. Also explain what “release cycles to 3 days” measures and what the prior cycle time was, if you can substantiate a comparison.
- **“Migrated 30 robot-fleet services…”** The scope is clear, but the benefit is qualitative. Add a measurable effect if you have one—such as fewer delayed dispatches or reduced backlog—or make sure the operational impact is otherwise clear.

## Projects — Agent Runtime Suite

- **Project details:** Clarify whether this is an independent, open-source, or work-related project, and what “Owner” means. Add a repository or demo link if available. Verify that “Aug 2025 – Present” is accurate for the date you submit the résumé.
- **“Drove adoption of AI-first engineering practices…”** This is too broad to assess: it gives no concrete evidence of adoption, delivery speed, or downstream outcomes. Replace it with a specific, verifiable contribution or result rather than keeping a general impact claim.
- **“Kept working context under 10K tokens…”** Define what counted as “working context” and how you measured the 100-turn test. Explain “raw conversation grew 100x” in a way that makes the comparison interpretable. If you measured task quality or completion, include that context so the efficiency claim doesn’t stand alone.
- **“Separated concurrency pools…”** The technical detail is useful. Clarify how you tested the 50-way fan-out and how you established that deadlocks and lost tool results were removed, rather than merely not observed in a limited test.

## Projects — Research-Agent Evaluation Framework

- **Project details:** If it’s open source, link the framework or your contribution. Clarify your contribution enough to distinguish your work from the overall project.
- **“Integrated 8 citation and faithfulness metrics…”** Name or categorize the kinds of metrics only if that helps show relevance to your target roles; otherwise, the count alone is not very informative.
- **“Showed the evaluator tracks injected degradation…”** Clarify what the Kendall correlation compares, what direction of degradation the evaluator tracked, and how the 400+ trials were constructed. This will help readers interpret the result and judge the evaluation’s rigor.
- **“Cut the pending-case backlog…”** This duplicates the Mobility Systems Company accomplishment. Remove it here if you retain the fuller, more directly attributable version under Experience.

## Skills

- **Expand selectively:** The list is short relative to the work described. Add relevant tools, frameworks, infrastructure, or evaluation methods that you have actually used and can discuss in an interview. Don’t add technologies just to increase the list.
- **Make skill labels specific:** “Agent evaluation” is broad. Use categories or terms that make your actual capabilities and tools easier to scan, while keeping the section concise.

## Final pass

- Put the most relevant, strongest evidence first within each role or project.
- Use consistent date, location, punctuation, and spelling conventions.
- Tailor which bullets and skills you emphasize to each job description; the résumé currently spans ML systems, agents, robotics, and evaluation, so relevance will depend on the role.
