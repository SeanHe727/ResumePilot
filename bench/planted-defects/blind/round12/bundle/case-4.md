# case-4

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

## Highest-priority changes

1. **Remove date of birth and nationality**
   - Delete both unless a specific application requires them.
   - They are generally irrelevant to technical hiring and can create unnecessary bias or privacy concerns.

2. **Remove or substantially revise the duplicate backlog claim**
   - The Mobility Systems experience bullet and the Research-Agent project bullet both claim reducing a backlog involving 800+ sensor signals.
   - This looks duplicated or potentially inconsistent. Keep the accomplishment under the role where the work actually occurred, or clearly distinguish the systems, time periods, and contributions.

3. **Remove the vague Agent Runtime Suite bullet**
   - “Drove adoption of AI-first engineering practices…” is broad, promotional, and unsupported by a measurable result.
   - Replace it with a concrete technical contribution, adoption measure, performance improvement, or user outcome.

4. **Resolve the duplicated loss-masking bullets**
   - The first Mobility Systems bullet and the later loss-masking bullet describe closely related work.
   - Either combine the technical detail into the stronger accomplishment or remove the later bullet. Six bullets is also somewhat long for one internship, especially when two overlap.

5. **Correct the grammar error in the CI bullet**
   - “Maintained…” is past tense, but “adds” is present-tense and does not agree with the subject.
   - Fix the verb tense and make clear whether you personally implemented the regression checks or merely maintained an existing pipeline.

---

## Header and personal information

### Contact details
- Keep the phone number, email, and code portfolio.
- Make sure the code link is a complete, working URL and leads directly to relevant repositories or a portfolio landing page.
- If the repositories are not publicly understandable, add concise project descriptions or documentation there.

### Date of birth and nationality
- Remove both.
- They do not strengthen your candidacy for engineering roles and are usually not requested on North American resumes.

---

## Education

### Western State University — M.S. in Computer Engineering
- Keep the expected graduation date.
- If the degree is highly relevant to the positions you are targeting, consider adding one line for specialization, thesis, or particularly relevant coursework—but only if it adds information not already demonstrated in the experience section.
- Since this degree overlaps with your internship, that is fine, but be prepared to explain whether the program is full-time, part-time, or structured around employment if the dates raise questions.

### Eastern Institute of Technology — B.S. in Electrical Engineering
- Keep it as written if the institution and location are accurate.
- Consider adding academic honors, a strong GPA, or relevant coursework only if they are genuinely competitive and you have space.
- Standardize the location format. “Metro City, USA” and “Metro City, Country” currently look inconsistent; use the actual country names or a consistent anonymization convention.

---

## Mobility Systems Company

### “Improved diagnostic accuracy by 35%...”
Change:
- Specify what “accuracy” means: for example, a named evaluation metric, diagnostic success rate, or error reduction.
- Identify the comparison point: previous model, SFT baseline, production system, or validation set.
- Clarify the size and nature of the evaluation data if possible.

Why:
- “Accuracy” can mean many things, and a 35% improvement is difficult to assess without a metric and baseline.
- “Validated tool-use trajectories” and “assistant-only loss masking” are technically specific but currently more detailed than the business or model outcome.

### “Designed a routing layer...”
Change:
- Define “reviewer disagreement” more precisely.
- State whether the reduction was measured on a held-out evaluation set, production cases, or an internal audit.
- Clarify whether limiting agents to in-scope signals also affected recall, coverage, or latency.

Why:
- The result is promising, but the reader needs to understand what disagreement means and whether the routing introduced tradeoffs.
- The sentence is also dense; ensure the role of the three specialists and the reviewer is immediately clear.

### “Trained the triage agent with GRPO...”
Change:
- Explain what “equal accuracy” means and identify the evaluation metric.
- State whether the latency comparison was against an SFT-only model, an earlier production version, or another controlled baseline.
- If available, include the number of cases or rollouts used for the comparison.
- Consider clarifying the reward design only if it is central to the role; otherwise prioritize the measurable production effect.

Why:
- This is one of the strongest technical bullets, but its credibility depends on a clearly controlled comparison.
- The combination of GRPO, grouped rollouts, rewards, tool-call reduction, latency, and accuracy makes it information-dense.

### “Wrote the evaluation harness...”
Change:
- Clarify whether the harness was used only by your team or adopted more broadly.
- State how the two regressions were identified and whether they were prevented from release.
- If possible, include the evaluation runtime, automation level, or number of test cases.

Why:
- “Catching 2 accuracy regressions” is useful, but the hiring manager will want to know the practical consequence of the harness.
- This bullet demonstrates engineering rigor and should be made more concrete.

### “Fine-tuned the adapter with assistant-only loss masking...”
Change:
- Remove it if it duplicates the first bullet.
- If you keep it, distinguish it from the first bullet by emphasizing a separate experiment, model behavior improvement, or evaluation finding.
- Avoid claiming that loss masking improved faithfulness unless you have a measured result supporting that claim.

Why:
- As written, it describes a method rather than an outcome.
- It repeats the main technical detail from the first bullet without adding a measurable accomplishment.

### “Built a diagnostics triage branch...”
Change:
- Verify that this is not the same project or outcome described under Research-Agent Evaluation Framework.
- Clarify your individual contribution versus the team’s contribution.
- Explain how the 68% backlog reduction was measured and over what baseline or period.
- Move this bullet earlier if it represents the largest production impact.

Why:
- The impact is strong, but the duplication elsewhere creates a credibility problem.
- “800+ sensor signals per case” demonstrates scale, while “68% backlog reduction” demonstrates business impact; both are valuable if tied clearly to your work.

### Overall section
- Consider reducing this internship to four or five bullets.
- Prioritize: production impact, model-training contribution, evaluation infrastructure, and systems design.
- Put the strongest measurable outcomes first.
- Avoid having two bullets explain the same model-training technique.

---

## Eastern Robotics Co.

### “Cut GPU memory...”
Change:
- Specify what “4x” means: reduction to one-quarter of prior usage or a fourfold decrease.
- State whether the reduction enabled larger batches, larger models, lower infrastructure cost, or a specific hardware deployment.
- Clarify whether BF16 was used with hardware-supported acceleration and whether model quality remained unchanged.

Why:
- The impact is clear, but the practical consequence and quality tradeoff are missing.
- This is a strong systems/ML optimization bullet when tied to what the memory reduction enabled.

### “Reduced p95 API latency...”
Change:
- Keep the before-and-after latency numbers.
- Clarify the workload, request volume, or endpoint involved.
- Explain whether the 200 ms build threshold was applied to all relevant endpoints or just one.
- Mention any correctness or freshness safeguards for the cache if relevant.

Why:
- This is one of the clearest bullets because it includes a baseline, result, and testing mechanism.
- Additional scope would make the scale of the optimization easier to judge.

### “Maintained the CI pipeline...”
Change:
- Correct the tense inconsistency in “maintained” and “adds.”
- Clarify what you changed in the pipeline rather than only stating that you maintained it.
- Explain what “release cycles to 3 days” means: reduced by a certain amount, or standardized at three days.
- If regression checks caught failures, quantify that outcome.

Why:
- The current bullet mixes ownership, automation, and release speed without clearly connecting cause and effect.
- The grammar issue makes the line look less polished.

### “Migrated 30 robot-fleet services...”
Change:
- Clarify your role in the migration and whether you designed the queue architecture or implemented the migration.
- Quantify the operational effect if available: failure recovery rate, dispatch delay reduction, incidents avoided, or queue volume.
- “Removing the nightly backlogs” is useful, but specify how that was observed or measured.

Why:
- This demonstrates meaningful distributed-systems work.
- The current wording gives a strong technical summary but leaves the reliability and business impact somewhat qualitative.

---

## Projects

### Agent Runtime Suite — Owner
- Verify that “Owner” accurately reflects your role and that the project is genuinely active as of the date listed.
- Add a link if the project is public and sufficiently documented.
- If it is a personal or open-source project, indicate the scale of usage, contributors, users, or tests where possible.

### “Drove adoption of AI-first engineering practices...”
Change:
- Remove or replace with a specific technical or adoption result.
- Avoid phrases such as “AI-first,” “accelerating delivery,” and “improving outcomes” unless you support them with concrete measurements.

Why:
- This is the least informative line in the resume.
- It sounds like a general claim rather than evidence of engineering work.

### “Kept working context under 10K tokens...”
Change:
- Define what “working context” includes and how it was measured.
- Clarify what “raw conversation grew 100x” means and whether the comparison is based on characters, tokens, messages, or elapsed turns.
- Explain the evaluation setup enough to establish that the 100-turn stress test is meaningful.
- Include the effect on cost, latency, task success, or failure rate if you measured one.

Why:
- The result is technically interesting, but the measurement terms are ambiguous.
- The line may invite skepticism because “raw conversation grew 100x” is unusually large without a clear definition.

### “Separated concurrency pools...”
Change:
- Quantify the improvement if possible: failure rate before and after, number of reproduced deadlocks, throughput, or successful fan-out runs.
- Clarify whether the fix was tested in production, a load test, or a synthetic stress test.
- Explain what “50-way fan-out” represents: concurrent agents, tool calls, requests, or tasks.

Why:
- This is a strong systems bullet, but the claimed benefit is currently qualitative.
- The specific failure modes are useful; adding scale or test evidence would make the result more credible.

---

## Research-Agent Evaluation Framework

### “Integrated 8 citation and faithfulness metrics...”
Change:
- Name the categories or types of metrics somewhere if they are not obvious from the project title.
- Clarify whether you implemented the metrics, integrated existing implementations, or built the evaluation interface around them.
- State whether the work was merged upstream or used by external contributors.

Why:
- “Integrated” can describe a wide range of contribution levels.
- Open-source adoption or upstream acceptance would make this project substantially stronger.

### “Showed the evaluator tracks injected degradation...”
Change:
- Use the precise name of the statistical measure, if applicable, and include significance or confidence information if available.
- Clarify the degradation protocol: what was removed, how severity was controlled, and what the evaluator score represented.
- Specify whether the 400+ trials were independent reports, repeated runs, or multiple perturbations of the same reports.

Why:
- This is a strong validation result, but the experimental design is not fully clear.
- The reader needs to distinguish genuine evaluator validity from correlation caused by the test construction.

### “Cut the pending-case backlog...”
Change:
- Remove it if it duplicates the Mobility Systems bullet.
- If it describes separate work, specify how the project’s triage branch differs from the production diagnostics system.
- Make the ownership and timeline explicit.

Why:
- Repeating the same accomplishment in two sections can make the resume appear padded or inconsistent.
- A project should add new evidence, not repeat the main internship achievement.

---

## Skills

### Programming
- “Python, TypeScript, Git” is reasonable, but Git is a tool rather than a programming language.
- Consider organizing skills by category so languages, tools, and frameworks are distinguishable.
- Add technologies demonstrated in the experience section only if you used them substantially and can discuss them in an interview.
- Do not add every technology mentioned incidentally; keep the list defensible.

### ML & Agents
- “PyTorch, LoRA, GRPO, agent evaluation” is relevant.
- Consider adding the model-serving, data-processing, testing, or infrastructure tools that are central to your experience, but only if they are genuinely part of your working knowledge.
- “Agent evaluation” is broad; make sure the rest of the resume demonstrates the specific evaluation capabilities you mean.
- If you list GRPO, LoRA, and multi-agent systems, expect detailed interview questions about training setup, reward design, evaluation leakage, failure modes, and deployment constraints.

---

## Consistency and presentation checks

- Use consistent date formatting throughout.
- Ensure all bullets use past tense for completed roles and present tense only for ongoing projects.
- Keep punctuation consistent; either use periods on all bullets or omit them consistently.
- Watch line wrapping around hyphenated terms such as “dead-letter”; avoid awkward visual breaks where possible.
- If the company and university names are anonymized for this review, restore the real names on the actual resume unless confidentiality requires otherwise.
- Check that every metric has a baseline, timeframe, evaluation population, or operational context where appropriate.
- Make your individual contribution clear when the result may have been team-wide.
- Order bullets by relevance and impact, not by chronology of the work.
- Your resume currently has many advanced technical terms. That is appropriate for ML systems roles, but each term should be understandable enough that a non-specialist recruiter can still identify the outcome.

## Reviewer 2

## Highest-priority changes

1. Remove date of birth and nationality.
2. Delete the duplicated backlog bullet under the research-agent project.
3. Remove or consolidate the two overlapping loss-masking bullets in the internship.
4. Replace the vague “AI-first engineering practices” project bullet with concrete, verifiable information.
5. Correct the tense error in the CI-pipeline bullet.
6. Clarify technically questionable or ambiguous claims, especially the tool-output/loss-masking claim and “4x” memory reduction.
7. Expand and reorganize the skills section so it reflects the technologies demonstrated elsewhere.

## Header

### Name
- **Keep.** The presentation is straightforward.

### Phone, email, and portfolio/code link
- Make the code link’s destination immediately recognizable and ensure it is clickable in the PDF.
- If it is a GitHub profile, portfolio, or personal site, identify that clearly rather than displaying a generic-looking path.
- Confirm that the email address is professional and that the phone number includes the appropriate country code for international applications.

### Date of birth and nationality
- **Remove both for US and Canadian applications.**
- They are generally unnecessary, consume space, and can expose you to unconscious bias.
- If employers need to understand your eligibility to work in the target country, address work authorization instead—but only if it is accurate and strategically useful.

## Education

### Western State University line
- Keep the degree, institution, location, and expected graduation date.
- Standardize the date separator throughout the resume; use proper dashes rather than spaced hyphens.
- Make the “expected” status visually unambiguous and apply a consistent date format across all sections.
- Consider adding GPA only if it is strong and helps your candidacy.
- If your graduate focus is directly relevant to ML engineering, consider adding it only if the degree title does not already make that clear.

### Eastern Institute of Technology line
- Keep it, but use the same formatting and date conventions as the graduate degree.
- Make sure the country is named explicitly on the real resume if the institution may be unfamiliar to US recruiters.
- Do not add coursework unless you need to compensate for limited experience; your current experience is already stronger evidence.

## Experience

### Mobility Systems Company heading
- Keep the role, company, location, and dates.
- Because the internship ended, all bullets should use past tense consistently.
- If the company name is not well known, a brief industry descriptor may help, provided it does not make the heading cumbersome.
- Verify that the October-to-May timeline does not conflict with how the internship was formally classified.

### Diagnostic accuracy bullet
- Define what “diagnostic accuracy” means: case-level accuracy, top-1 classification, fault localization, or another metric.
- State the evaluation basis, such as the number of cases or the held-out test set, if disclosure is allowed.
- Clarify whether 35% is a relative increase or a percentage-point increase. The current wording can materially overstate the result.
- Explain your individual contribution if fine-tuning was part of a larger team effort.
- Consider whether “validated tool-use trajectories” will be understood by the target audience; retain the technical term only if it is central to the role.

### Routing-layer bullet
- Clarify what “in-scope signals” means operationally and how the routing layer enforced those boundaries.
- Explain why reduced reviewer disagreement represents better performance rather than merely greater agreement.
- Identify the evaluation size or time window behind the 14% and 6% figures.
- Make clear whether you designed and implemented the layer or only designed it.
- The bullet is technically strong, but it contains several concepts; trim secondary implementation detail if readability suffers.

### GRPO triage-agent bullet
- Define GRPO at least once if the jobs you are targeting may include general software or conventional ML recruiters.
- Clarify the number of grouped rollouts, cases, or evaluation runs if possible.
- State whether the 18% and 5% reductions are relative reductions.
- Support “equal accuracy” with the relevant test set or tolerance; otherwise it can sound asserted rather than measured.
- Use US spelling for US applications, including the spelling of “penalises.”
- Keep this bullet if reinforcement learning for agents is important to your target roles; otherwise, simplify the terminology and emphasize the operational result.

### Evaluation-harness bullet
- Clarify whether you built the harness from scratch or extended an existing system.
- Identify the scope of “citation quality,” since that can refer to correctness, completeness, entailment, or formatting.
- Add the number of evaluation cases if it strengthens the claim.
- Clarify how the regressions were caught and what release risk they prevented.
- Keep this bullet; it demonstrates infrastructure ownership and practical quality control.

### Second assistant-only loss-masking bullet
- **Remove or merge the underlying information into the first fine-tuning bullet.** It repeats the same technique without adding a separate outcome.
- More importantly, verify the technical accuracy of the claim. Assistant-only loss masking normally excludes non-assistant tokens from the loss; saying that it taught the model to reproduce tool outputs may be inconsistent if tool outputs were in a separate tool-role channel.
- If the model was actually learning to cite, summarize, or use tool outputs rather than reproduce them, describe the correct behavior in the final resume.
- Do not keep both loss-masking bullets unless each represents a clearly separate experiment and outcome.

### Diagnostics-triage/backlog bullet
- Keep the operational result, but establish whether the 68% backlog reduction was attributable to your branch rather than to simultaneous process changes.
- Include the baseline number of pending cases if available; a percentage alone can hide scale.
- Clarify whether “800+ sensor signals per case” refers to raw inputs, derived features, or signals screened after feature extraction.
- “In the eight weeks after launch” is useful; retain a defined measurement period.
- Consider moving this bullet higher because it combines scale, launch ownership, and business impact.

### Eastern Robotics Co. heading
- Keep it.
- All bullets should remain in past tense because the role ended.
- If this was your first full-time role after graduation, no additional explanation is needed.

### GPU-memory bullet
- Replace the ambiguous “by 4x” framing with an unambiguous reduction measurement.
- Clarify whether memory was measured per model, per GPU, or per training run.
- State what the reduction enabled, such as larger batches, larger models, lower hardware requirements, or faster experimentation.
- Verify that BF16 was truly mixed precision and not simply BF16 training; use the technically accurate description.
- Mention the hardware or model family only if it adds useful credibility and is not confidential.

### API-latency bullet
- Keep the before-and-after p95 values; they are strong and specific.
- Add the test load or request volume so the latency result has context.
- Clarify the cache’s correctness or invalidation strategy if caching could have affected data freshness.
- Explain whether batching and caching were independently measured or only evaluated together.
- Retain the build threshold because it shows that you prevented regression rather than making a one-time optimization.

### CI-pipeline bullet
- Fix the verb-tense inconsistency: “Maintained” and “adds” do not match.
- Clarify what release-cycle duration was before it became three days.
- Specify the types of automated regression checks if they were meaningful, such as model quality, latency, memory, or compatibility.
- “Maintained” can undersell ownership; accurately indicate whether you merely operated the pipeline or materially improved it.
- Make sure “three days” refers to a repeatable release cycle, not a single release.

### Service-migration bullet
- Keep the scale of 30 services.
- Clarify your role in architecture, implementation, migration planning, and rollout.
- Add evidence that retries and dead-letter handling improved reliability, if measured.
- “Removing” the backlog is an absolute claim; verify that there were truly no recurrences during a defined observation period.
- Resolve the awkward PDF line break in “dead-letter”; avoid forced hyphenation that looks like a typo.

## Projects

### Agent Runtime Suite heading
- Replace or clarify “Owner.” It does not reveal whether you created the project, led a team, maintain the repository, or own the production system.
- Add a repository link if the work is public.
- Consider naming the principal runtime/framework technologies in the technology list, not just the language and broad domain.
- Confirm that the August 2025 start date is accurate and not future-dated for the application date.

### AI-first engineering-practices bullet
- **Remove or substantially replace the content.**
- It is vague, uses broad organizational language, and provides no specific implementation, metric, scope, or verifiable result.
- “Accelerating delivery” and “improving outcomes” are unsupported claims.
- Focus this slot on a concrete capability you built, an adoption measure, or a measured delivery improvement.
- Avoid “AI-first” unless the term has a precise meaning in the project.

### Context-management bullet
- Define what “raw conversation grew 100x” is relative to; the current comparison lacks a baseline.
- Explain how token counts were measured and whether the 10K limit includes system instructions, tool results, and retrieved context.
- Clarify why 100 turns is representative or useful.
- Add the quality-retention result if you measured whether compaction preserved task performance.
- Keep the architectural concepts, but make the measurement methodology defensible.

### Concurrency/cache bullet
- Keep it; it demonstrates nontrivial systems engineering.
- Clarify how you verified that deadlocks and lost tool results were eliminated, including test duration or run count if available.
- Define “50-way fan-out” if the target audience may not understand whether that means agents, tool calls, tasks, or streams.
- State whether this was a production issue, stress-test issue, or both.
- Avoid absolute language unless the fix was validated over a meaningful period.

### Research-Agent Evaluation Framework heading
- Clarify the nature of your contribution: code contributor, research contributor, maintainer, or another role.
- Include a repository or publication link if public.
- Add the main implementation language or framework if it helps with keyword matching.
- Since the project ended, all bullets should remain in past tense.

### Eight-metric integration bullet
- Name a small number of the most important metrics if they are recognizable or technically meaningful.
- Explain whether your contribution was merged upstream, released, or used by other contributors.
- Clarify whether you implemented the metrics, integrated existing libraries, or designed the evaluation interface.
- Add test coverage or evaluation scale if available.
- Keep the number eight only if all eight metrics were meaningfully integrated and validated.

### Kendall-correlation bullet
- Specify which Kendall statistic was used and what two rankings or variables were correlated.
- Explain what “injected degradation” means at a high level; the current phrase is understandable to researchers but less clear to general recruiters.
- Clarify whether 0.89 was computed across all 400 trials, across degradation levels, or across report rankings.
- Indicate whether the correlation was statistically significant or had a confidence interval if this is intended as a research-grade result.
- This is a strong bullet once the evaluation design is made clear.

### Backlog bullet under the research-agent project
- **Delete it.**
- It duplicates the internship’s diagnostics-triage work and is unrelated to the research-agent evaluation framework.
- Its presence suggests copy-and-paste error, which can damage credibility.
- If the project genuinely reused that system, explain the relationship elsewhere rather than repeating the same result.

## Skills

### Programming line
- Move Git out of “Programming”; it is a version-control tool, not a programming language.
- Add other languages only if you can use them confidently in interviews and they are supported by your experience.
- Consider separating languages from tools and infrastructure.
- Your experience mentions APIs, event queues, CI, and caching, but the skills section currently does not reflect those areas.

### ML & Agents line
- Keep PyTorch, LoRA, and GRPO if they are relevant to the roles you are targeting and you can discuss implementation details.
- “Agent evaluation” is broad; make the category more specific to the evaluation work actually performed.
- Include the multi-agent and tool-use concepts demonstrated in the experience section if they are important target keywords.
- Consider adding model-evaluation, fine-tuning, and inference-related skills evidenced by the bullets.
- Do not overload this section with every term in the resume; prioritize searchable, defensible skills.

## Formatting and consistency

- Use one spelling convention throughout. For US applications, use US English.
- Use consistent past tense for completed roles and projects; reserve present tense for ongoing work.
- Standardize date formatting and replace spaced hyphens with proper date-range dashes.
- Prevent awkward wrapped compounds such as “tool-use” and “dead-letter.”
- Ensure all bullets fit cleanly in the final PDF and are not broken by manual line returns.
- Put the most impressive, outcome-driven bullet first within each role.
- Avoid duplicated claims across sections.
- Verify every percentage, absolute claim, and before/after metric so you can explain its baseline, dataset, and measurement method in an interview.

## Reviewer 3

6 errors, 13 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999 | Nationality: Canadian

**Problem**
[Error] Personal details a reader is not meant to weigh should be left off the résumé.

**Why**
Date of birth and nationality do not help a reader assess the qualifications shown here and can introduce irrelevant screening considerations. Including them uses space without strengthening the application.

**How to change it**
Delete the date-of-birth and nationality text rather than adding it to the résumé.

> Jun 2022

**Problem**
[Important] The résumé timeline has an unexplained 10-month gap between the B.S. and the Junior Software Engineer role. *(adds about 5–15 words if a single activity is added)*

**Why**
The education entry ends in Jun 2022 and the next listed role begins in May 2023, leaving a reader unsure what occupied that period. The gap can prompt questions about availability or experience before the reader reaches the stronger accomplishments.

**How to change it**
Add [the candidate's study, work, project, or other relevant activity] for the period between Jun 2022 and May 2023, if applicable; otherwise leave the dates unchanged and be ready to explain the gap.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement lacks a baseline, endpoint, and evaluation-set context. *(adds about 6–12 words)*

**Why**
A hiring reader cannot judge the size or credibility of the improvement without knowing what accuracy changed from and to. The missing case or evaluation-set context also makes it difficult to distinguish a broad result from a narrow test.

**How to change it**
Replace or supplement "by 35%" with [baseline accuracy] to [final accuracy] on [evaluation set or case count], keeping the fine-tuning method after the result.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The phrase "each of 3 specialist agents" uses awkward number styling in a dense sentence.

**Why**
The numeral interrupts an already technical clause and makes the reader parse the count while reading the routing design. Spelling out the number improves flow without changing the claim.

**How to change it**
Replace "3" with "three."

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The grouped-rollout method chain delays the two measurable results in the GRPO bullet.

**Why**
The reader must move through several method details before reaching the tool-call and latency reductions. Compressing the reward description preserves the mechanism while making the outcomes easier to scan.

**How to change it**
Compress the method description to "using a redundancy-penalising reward" so the mechanism remains while the two results arrive sooner.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
1. [Important] The evaluation harness bullet shows that two regressions were detected but not what decision or consequence followed. *(adds about 4–8 words)*
2. [Important] The phrase "Wrote the evaluation harness" does not identify the technical capability that made the harness effective. *(adds about 3–7 words)*
3. [Polish] The phrase "the team used to compare 14 adapter checkpoints" is indirect and adds filler.

**Why**
1. A reader can see that the harness found problems, but cannot tell whether it prevented a degraded release, changed checkpoint selection, or protected a user-facing metric. The missing consequence limits the evidence of impact despite the concrete detection count.
2. It establishes ownership of an artifact but gives limited evidence of evaluation or software-engineering skill. A reader cannot tell what the harness automated or standardized beyond the later checkpoint count.
3. The wording separates the harness from its purpose, so the reader has to parse who used it before reaching the evaluation task. A direct infinitive connects the artifact and its function more quickly.

**How to change it**
1. Keep that phrase and add [the resulting decision or prevented consequence], such as [selected the prior checkpoint] or [blocked a degraded release], if accurate.
2. Replace or supplement it with [one distinctive capability], such as [automated side-by-side checkpoint scoring] or [standardized tool-call replay], if accurate.
3. Replace it with "to compare 14 adapter checkpoints."

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Error] Assistant-only loss masking does not train the model to reproduce tool outputs more faithfully.

**Why**
Assistant-only masking excludes tool-output tokens from the supervised loss, so it directly trains assistant responses conditioned on tool outputs rather than the tool outputs themselves. Claiming improved tool-output reproduction therefore misstates what the method optimizes and leaves the reader without a valid result for this bullet.

**How to change it**
Replace that claim with training focused on the assistant's responses conditioned on tool outputs; claim improved tool-output reproduction only if a direct tool-output objective or evaluation was used, otherwise remove the bullet as redundant with [“Improved diagnostic accuracy by 35% after…”].

> assistant-only loss masking

**Problem**
[Error] The résumé repeats the same adapter fine-tuning achievement in [“Improved diagnostic accuracy by 35% after…”] and [“Fine-tuned the adapter with assistant-only loss…”].

**Why**
Both bullets describe fine-tuning the same domain adapter with assistant-only loss masking, so a reader may interpret the second as duplicated content rather than a separate result. That repetition uses a bullet on a method already stated in the accuracy result and makes the internship appear to contain fewer distinct achievements.

**How to change it**
Combine the method from [“Fine-tuned the adapter with assistant-only loss…”] into [“Improved diagnostic accuracy by 35% after…”] or remove [“Fine-tuned the adapter with assistant-only loss…”]; keep it separate only if the bullets describe separate experiments and label that distinction.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Important] The claim that switching from FP32 to BF16 mixed precision cut total GPU memory by 4x is likely overstated and ambiguous. *(adds about 4–10 words)*

**Why**
BF16 reduces the storage of converted tensors, while full-parameter fine-tuning can retain FP32 master weights and optimizer states that dominate memory. Without additional memory-saving changes or a specified configuration, a 4x total reduction is difficult to support; "by 4x" also does not clearly say whether memory fell to one-quarter of baseline.

**How to change it**
Report the measured reduction for [the measured component] or replace the claim with "from [baseline GPU memory] to [resulting GPU memory]"; if the total reduction depended on additional changes, name them, and use "to one-quarter of baseline" only if accurate.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Important] The load-test safeguard is appended after the main latency result, making the validation evidence easy to miss.

**Why**
The p95 improvement is prominent, but the build-gating condition is important proof that the target was enforced rather than merely observed once. Moving the safeguard closer to the result improves scanability.

**How to change it**
Move the load-test safeguard immediately after the latency result or lead with the build gate before describing the cache and batching changes.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The phrase "Maintained ... and adds" mixes past and present tense in a role that ended in July 2024.
2. [Important] The release-cycle result gives only a three-day endpoint and does not show the work performed beyond adding regression checks. *(adds about 5–12 words)*

**Why**
1. The tense shift makes the bullet appear mechanically unedited and creates uncertainty about whether the automated checks were part of the completed role or ongoing work. Consistent past tense presents the accomplishment as finished.
2. A reader cannot judge the size of the acceleration without the prior release cadence. "Maintained the CI pipeline" frames the work as routine responsibility rather than identifying the concrete automation change that produced the result.

**How to change it**
1. Replace "adds" with "added."
2. Lead with the automated regression checks and [the specific CI or release-automation change implemented], then state the cadence as "from [prior release-cycle duration] to 3 days" if the baseline is known.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The AI-first-practices bullet makes unsupported, broad causal claims without identifying the practices, adoption scale, or measured outcomes. *(adds about 5–15 words if measurements are available)*

**Why**
A reader cannot tell what was introduced, how many people or teams adopted it, or whether delivery actually improved compared with a baseline. "Accelerating delivery and improving outcomes" therefore reads as promotional language rather than checkable project impact.

**How to change it**
Replace the generic phrase with [the one or two specific practices or platform changes], and either add [adoption reach and a measured delivery or downstream outcome] or remove the causal outcome claims.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Important] The phrase "Kept working context under 10K tokens" does not clearly identify the context being controlled or why the limit mattered. *(adds about 5–10 words)*

**Why**
The system result is concrete, but a reader cannot tell whether it prevented context failures, reduced cost or latency, or enabled longer tasks. The separate "100x" growth claim also lacks a stated baseline, making its scale difficult to interpret.

**How to change it**
Replace "working context" with the specific context being measured and connect the limit to [the failure, latency, cost, or task-continuity problem avoided]; state the baseline for the raw conversation growth if retaining "100x."

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The concurrency fix does not establish how extensively deadlocks and lost tool results were removed, and "under 50-way fan-out" is compressed. *(adds about 5–10 words)*

**Why**
Separating pools and gating cache writes describe the mechanism, but they do not show whether the defects were occasional or frequent or whether the fix eliminated them. The reader also cannot tell whether the failures occurred at or below 50 concurrent branches.

**How to change it**
Replace it with "at [or below] 50 concurrent branches" and add [the deadlock or lost-result rate before and after] or [the number of successful runs], if accurate.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The evaluation-framework contribution says that eight metrics were integrated but does not state what capability or outcome the integration enabled. *(adds about 5–12 words)*

**Why**
The count shows the scale of the contribution, but a reader cannot tell whether it expanded evaluation coverage, improved reproducibility, or enabled downstream use. The bullet therefore demonstrates implementation work without showing its value to the framework.

**How to change it**
Add [the single resulting evaluation capability, coverage improvement, reproducibility benefit, or downstream use] after "evaluation module."

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Error] The phrase "Showed the evaluator tracks" is grammatically incomplete. *(adds 1 word)*
2. [Important] The Kendall correlation supports a strong rank-order association with injected degradation, not the broader claim that the evaluator tracks degradation. *(adds about 5–12 words)*

**Why**
1. The missing conjunction makes the result read as an editing error and briefly interrupts comprehension of an otherwise technical finding. A small grammatical correction makes the relationship between the evidence and conclusion explicit.
2. A correlation of 0.89 across manipulated reports does not by itself establish calibration, causal validity, agreement with human judgments, or generalization to naturally occurring degradation. The line also omits the reference ordering or severity levels against which the evaluator was correlated, making the statistic difficult to interpret.

**How to change it**
1. Replace it with "Showed that the evaluator tracks" or "Demonstrated that the evaluator tracks."
2. Replace the claim with a statement that the evaluator's scores showed a strong rank-order association with injected degradation, add [the reference ordering or known severity levels], and retain the 0.89 Kendall correlation across 400+ trials.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The résumé repeats the same triage-branch achievement with inconsistent backlog figures.
2. The phrase "ML-extracted" uses an unexplained abbreviation and makes the method less accessible. *(adds about 1 word)*

**Why**
1. The two bullets both describe screening 800+ sensor signals per case and reducing the pending-case backlog, so the repeated achievement can look copied into the project entry. Reporting 68% in one place and two-thirds in another makes a reader question which measurement is correct.
2. Readers outside the immediate machine-learning context may not know that ML means machine learning. Expanding the term avoids an unnecessary interpretation step in the already dense method description.

**How to change it**
1. Retain the achievement in one entry and remove the duplicate; use either "68%" or "approximately two-thirds" consistently, based on the underlying calculation.
2. Replace "ML-extracted" with "machine-learning-extracted" if the abbreviation has not been defined elsewhere.

> Cut the pending-case backlog by two-thirds

**Problem**
[Important] The Research-Agent Evaluation Framework entry is weakened by a copied diagnostics bullet unrelated to its evaluation contribution.

**Why**
The first two bullets establish an evaluation-framework story, but the third switches to diagnostics triage and repeats the internship's backlog result. A reader may therefore see the project as assembled from unrelated work rather than as a focused evaluation contribution.

**How to change it**
Remove the diagnostics/backlog bullet from this entry or move it to the relevant internship, leaving the citation and faithfulness evaluation work as the standalone project story.

## Reviewer 4

# Resume Review

Because no job description was provided, I’m evaluating this as an **ML Engineer / LLM Agent Engineer** resume, based on the experience and project content. I’m not rewriting any lines; the recommendations below describe **what to change and why**.

## Overall assessment

You have strong technical evidence for ML/agent engineering roles: measurable model improvements, evaluation work, tool use, reinforcement learning, latency optimization, and production systems. The main problems are:

1. **No summary or target-role positioning**
2. **Several duplicate or overlapping accomplishments**
3. **A few vague, unsupported, or generic claims**
4. **Some bullets mix unrelated achievements or appear in the wrong section**
5. **Important context is missing from the metrics**
6. **The resume currently looks more like a collection of experiments than a clearly prioritized engineering narrative**

The strongest version of this resume should emphasize:

- Production ML systems
- LLM/tool-use evaluation
- Agent reliability and routing
- Inference and systems optimization
- Quantified engineering outcomes

---

# Section-by-section changes

## Header

### Remove date of birth

**Change:** Delete the date of birth.

**Why:** It is not relevant to hiring and can create unnecessary age-discrimination or privacy concerns. It also consumes attention in a section that should establish your professional identity.

### Remove nationality unless it is required

**Change:** Remove nationality unless a specific application requires it.

**Why:** Nationality is generally not useful on a North American technical resume. If work authorization matters, state work authorization separately and only when relevant.

### Add a professional title or summary

**Change:** Add a brief summary beneath your contact information that identifies you as an ML/LLM/agent engineer and highlights your strongest technical themes.

**Why:** A recruiter currently has to infer your target role from the bullets. Your work supports several adjacent profiles—ML engineer, applied scientist, LLM engineer, agent infrastructure engineer—but the resume does not tell the reader which one you are pursuing.

### Check whether the portfolio URL is useful

**Change:** Keep the code portfolio only if it contains relevant, accessible projects and evidence of your claims. Otherwise, replace it with a more relevant public profile or remove it.

**Why:** A link creates an expectation that the reviewer can quickly verify your projects. An empty, private, or unrelated repository weakens credibility.

---

# Education

## Western State University

**Change:** Keep the degree and expected graduation date. Consider adding one compact line of relevant coursework, research, or specialization only if it directly supports ML systems, deep learning, distributed systems, or LLM work.

**Why:** The degree is current and relevant, but the resume gives no indication of what your graduate specialization contributes to your target role.

**Change:** Make the expected status visually clear and ensure the date does not look like a completed degree.

**Why:** Recruiters may otherwise misread the degree as completed.

## Eastern Institute of Technology

**Change:** Keep it concise. Add academic distinction, honors, or a relevant capstone only if it is genuinely strong.

**Why:** The B.S. establishes your engineering foundation, but additional detail is only worthwhile if it improves your technical positioning.

---

# Experience

## Mobility Systems Company — Machine Learning Engineering Intern

The experience is technically strong, but the bullets need better prioritization and deduplication.

### Bullet 1: diagnostic accuracy improvement

**Change:** Keep this bullet, but specify the evaluation context more clearly: what “accuracy” means, what the comparison baseline was, and whether the result came from a held-out or production-validated set.

**Why:** A 35% improvement is compelling, but “diagnostic accuracy” can mean absolute percentage points, relative improvement, or a particular classification metric. The reviewer needs enough context to judge the result.

**Change:** Explain or simplify the phrase describing validated tool-use trajectories and assistant-only loss masking if space permits.

**Why:** It is technically interesting but dense. A recruiter may not understand which part produced the improvement, while a technical reviewer will want to know exactly what was trained and evaluated.

### Bullet 2: routing layer and reviewer disagreement

**Change:** Keep this bullet, but clarify the operational purpose of the routing layer and the meaning of “reviewer disagreement.”

**Why:** The reduction from 14% to 6% is strong, but the reader needs to understand whether disagreement means false positives, conflicting diagnoses, invalid tool outputs, or another reliability measure.

**Change:** Make the relationship between the three specialists, the reviewer, and the input signals easier to understand.

**Why:** The architecture is a differentiator, but the current phrasing requires the reader to reconstruct the system design.

### Bullet 3: GRPO and tool-call reduction

**Change:** Keep this as one of the most important bullets. Add the evaluation conditions that make the comparison credible, especially dataset or case count, whether accuracy was statistically comparable, and whether the latency result was measured in production or offline.

**Why:** This is highly relevant to current agent-engineering roles. The strongest part is not merely that you used GRPO; it is that you reduced tool use and latency without sacrificing accuracy.

**Change:** Avoid presenting GRPO as the main achievement unless the results are clearly tied to system-level value.

**Why:** Recruiters may treat algorithm names as buzzwords. The measurable efficiency and quality outcome should remain the focus.

### Bullet 4: evaluation harness

**Change:** Keep this bullet, but add the consequence of catching the two regressions if you can substantiate it—for example, whether they were prevented from reaching release or production.

**Why:** Evaluation infrastructure is valuable, but the current bullet stops just before the business or engineering impact.

**Change:** Identify whether you owned the harness, designed the evaluation methodology, or implemented part of a larger system.

**Why:** The ownership level matters, especially because the rest of the resume uses strong ownership language.

### Bullet 5: repeated assistant-only loss masking

**Change:** Remove this bullet from this position, or merge its distinct contribution into the earlier fine-tuning bullet.

**Why:** It repeats the technical method already mentioned in the first bullet without adding a new outcome. Repetition makes the resume appear padded and reduces space for more differentiated work.

**Change:** If the second bullet represents a genuinely separate experiment, explain the separate result rather than repeating the method.

**Why:** Methods without a distinct result are weaker than achievements with measurable impact.

### Bullet 6: diagnostics triage branch and backlog reduction

**Change:** Keep this bullet only if it is genuinely separate from the backlog-reduction bullet in the Research-Agent Evaluation Framework project.

**Why:** The project section contains nearly the same achievement: a triage branch, 800+ sensor signals, ML-extracted features, and a two-thirds backlog reduction. The duplication raises questions about which team owned the work and where the result occurred.

**Change:** If this is the same work, keep it in only one location—probably Experience—and remove the duplicate from Projects.

**Why:** Production work should generally receive more prominence than a project entry.

**Change:** Explain what the 68% reduction is measured against and over what period.

**Why:** You include “in the eight weeks after launch,” which is helpful, but the baseline and operational significance should be unambiguous.

---

## Eastern Robotics Co. — Junior Software Engineer

These bullets show valuable production engineering skills, but the section currently feels split between ML optimization, service reliability, and infrastructure. That is acceptable for an ML engineer role, but the ordering should make the intended story clear.

### Bullet 1: BF16 memory reduction

**Change:** Keep this bullet. Add the practical consequence if available: larger model or batch size, fewer out-of-memory failures, lower infrastructure cost, or faster training.

**Why:** A fourfold memory reduction is impressive, but the reader needs to know what it enabled.

**Change:** Clarify whether the 4x figure refers to peak GPU memory, allocated memory, or another measurement.

**Why:** Precise technical metrics improve credibility with technical reviewers.

### Bullet 2: API latency reduction

**Change:** Keep this bullet near the top of the position.

**Why:** It combines a strong before-and-after metric with concrete engineering actions and a regression safeguard. It is one of the clearest production engineering bullets in the resume.

**Change:** Clarify whether the p95 values were measured under the same workload and traffic conditions.

**Why:** Latency comparisons are only meaningful when the load and test conditions are comparable.

**Change:** Keep the build-failure safeguard, but make sure it was actually enforced in CI rather than merely documented.

**Why:** The safeguard is a strong reliability signal if it was automated and routinely used.

### Bullet 3: CI pipeline

**Change:** Correct the grammar and tense inconsistency in the phrase describing what the pipeline does.

**Why:** The current wording shifts from past tense to present-tense third-person wording and reads like an editing error.

**Change:** Clarify what “release cycles to 3 days” means—three days from code completion to release, or a reduction to a three-day cycle.

**Why:** The current phrasing is ambiguous and may be interpreted differently by different readers.

**Change:** Quantify the prior cycle length or the number of releases if available.

**Why:** The impact is difficult to assess without a baseline.

### Bullet 4: event queue migration

**Change:** Keep this bullet, but state the operational result more precisely if possible: fewer failed jobs, elimination of a recurring backlog, improved dispatch reliability, or reduced manual intervention.

**Why:** The migration demonstrates distributed-systems judgment, retries, and failure handling. The outcome should show why the architecture mattered.

**Change:** Clarify your ownership of the migration across 30 services.

**Why:** “Migrated 30 services” implies substantial ownership. Make sure the wording accurately reflects whether you led it, implemented it, or contributed to a larger team effort.

**Change:** Fix the line-break artifact in “dead-letter handling.”

**Why:** Hyphenation caused by PDF or source formatting should not appear as an awkward split in the final document.

---

# Projects

The projects section contains good material, but it currently includes one vague bullet and one likely duplicate of professional experience.

## Agent Runtime Suite

### Bullet 1: AI-first engineering practices

**Change:** Remove this bullet or replace it with a concrete technical or adoption metric—not a rewritten version of the sentence, but an actual measurable result such as number of users, repositories, teams, pull requests, deployment time, or reliability improvement.

**Why:** “Drove adoption,” “AI-first,” “accelerating delivery,” and “improving outcomes” are all broad claims without evidence. This is the weakest bullet in the resume and may make the project sound inflated.

**Change:** If there is no measurable adoption or engineering outcome, omit the bullet.

**Why:** The other two bullets already demonstrate substantial technical depth. A vague leadership claim lowers the quality of the section.

### Bullet 2: context under 10K tokens

**Change:** Keep this bullet, but explain the constraint and comparison more clearly.

**Why:** The 100-turn test and context limit are interesting, but “raw conversation grew 100x” is difficult to interpret. The reader needs to know what grew 100x and what capability was preserved.

**Change:** State what the context-management design enabled—cost control, stable latency, successful task completion, or avoidance of context-window failure.

**Why:** The implementation technique matters less than the resulting system behavior.

**Change:** Make sure the stress test is representative enough to support the claim.

**Why:** A technical reviewer may ask whether the test used realistic tool calls, message sizes, and workloads.

### Bullet 3: concurrency pools and cache writes

**Change:** Keep this bullet. Add the conditions under which the deadlocks and lost results occurred, if that can be done concisely.

**Why:** This is a strong systems bullet because it demonstrates diagnosis and resolution of concurrency failures.

**Change:** Clarify whether “50-way fan-out” was a tested upper bound, production workload, or stress-test configuration.

**Why:** The number is useful, but its meaning depends on context.

**Change:** Identify the effect on reliability or throughput if measured.

**Why:** Removing failures is good; demonstrating improved successful completion or throughput would make the result more compelling.

---

## Research-Agent Evaluation Framework

### Bullet 1: integrated eight metrics

**Change:** Keep this bullet, but identify the nature of the contribution: implementation, metric adaptation, test coverage, API design, or integration into the framework.

**Why:** “Integrated” is accurate but broad. A technical reviewer will want to know what you actually built.

**Change:** Include the public repository or project link if it is genuinely open source and accessible.

**Why:** Open-source contribution is a credibility signal only when reviewers can verify it.

### Bullet 2: Kendall correlation

**Change:** Keep this bullet. Add what the correlation means operationally—for example, whether the evaluator correctly ranked degraded outputs or detected quality loss.

**Why:** The statistic is strong, but many readers will not immediately understand what a Kendall correlation of 0.89 demonstrates.

**Change:** Clarify the unit of analysis and the source of the 400+ trials if possible.

**Why:** “Report-level trials” is useful, but the reviewer may want to know whether these were synthetic, human-authored, or production-like reports.

### Bullet 3: duplicate diagnostics triage result

**Change:** Remove this bullet from the project unless the project truly produced this result independently.

**Why:** It duplicates the Mobility Systems Company achievement in wording, inputs, and outcome. If it is the same work, the duplication creates a credibility problem.

**Change:** If this was a separate contribution, distinguish it through different ownership, data, evaluation setting, or result.

**Why:** Otherwise, the resume appears to count one accomplishment twice.

---

# Skills

## Programming

**Change:** Keep only tools you can use comfortably in an interview or practical assessment.

**Why:** The list is credible but short. That is preferable to including technologies you cannot defend.

**Change:** Consider separating languages from development tools if you add more substantiated skills.

**Why:** Programming languages, version control, and infrastructure tools signal different capabilities.

## ML & Agents

**Change:** Keep PyTorch, LoRA, GRPO, and agent evaluation.

**Why:** These are well supported by the experience bullets.

**Change:** Add only technologies clearly demonstrated elsewhere in the resume, such as model fine-tuning, tool-use systems, inference optimization, evaluation harnesses, or distributed systems.

**Why:** The current skills section does not fully capture the strongest technical themes already present in the experience.

**Change:** Avoid adding broad labels such as “AI,” “machine learning,” or “LLMs” without supporting specifics.

**Why:** Broad labels add little value and can make the skills section look generic.

**Change:** Consider adding testing, CI/CD, APIs, caching, queues, or GPU optimization only if you can discuss the implementation details.

**Why:** These are real strengths shown in your bullets, but they should not become a keyword list detached from evidence.

---

# Narrative and ordering

## Add a clearer technical progression

**Change:** Order the most relevant bullets first within each role.

For your target profile, the priority should generally be:

1. Production ML or agent impact
2. Model quality or evaluation
3. Systems reliability and latency
4. Infrastructure and deployment work
5. Less differentiated implementation detail

**Why:** Recruiters often read only the first bullet or two under each position. Your strongest evidence should not be buried.

## Reduce the number of concepts competing for attention

**Change:** Decide whether the primary story is:

- ML/LLM engineering,
- agent infrastructure,
- applied research/evaluation, or
- general software engineering for ML systems.

You can retain supporting evidence from the other areas, but one should be dominant.

**Why:** The resume currently supports all four interpretations. That breadth is useful, but without prioritization it may make your target unclear.

## Remove duplicated claims

At minimum, review these overlaps:

- Assistant-only loss masking appears twice.
- The diagnostics triage/backlog reduction appears in both Experience and Projects.
- The resume has multiple evaluation and reliability claims that may be describing related work.

**Why:** Duplicate content reduces perceived breadth and can raise questions about whether metrics are being counted more than once.

---

# Five-perspective assessment

## ATS

**Assessment:** Likely reasonable for general ML engineer or LLM engineer searches, but impossible to score precisely without a job description.

**Strengths:**

- PyTorch
- LoRA
- GRPO
- agent evaluation
- fine-tuning
- tool use
- mixed precision
- latency
- CI
- queues
- caching
- model releases

**Weaknesses:**

- No explicit target title in a summary
- Skills section underrepresents systems and evaluation work
- Some important concepts appear only in bullets rather than in grouped skills
- Exact match performance will depend heavily on the employer’s terminology

**Change:** Add a target-oriented summary and organize skills around the capabilities your experience actually demonstrates.

## Recruiter glance

**Verdict:** Maybe to forward, with strong potential.

**Why:** The experience includes unusually concrete metrics, but the header does not immediately tell the recruiter what role you want. The lack of a summary forces interpretation.

## HR screen

**Verdict:** Likely phone-screenable for an ML or software role, assuming work authorization and degree timing meet the requirements.

**Why:** You show relevant education, production experience, and measurable outcomes. The main concern is that some claims are dense or duplicated.

## Hiring manager

**Verdict:** Likely interview, but with questions about ownership and metric validity.

**Top observations:**

1. You have practical experience with agent reliability, tool use, evaluation, and optimization.
2. You understand both model-level and systems-level performance.
3. Some achievements may be overstated or duplicated unless the boundaries between projects are clarified.

**Likely first question:**  
What exactly did you own in the agent-based diagnostic system, and how were the accuracy, disagreement, latency, and backlog metrics measured?

## Technical reviewer

**Verdict:** Positive, with credibility checks.

**Likely questions:**

- What was the GRPO reward function and how did you prevent reward hacking?
- What did assistant-only loss masking change relative to the baseline?
- How was diagnostic accuracy defined?
- What caused the reviewer disagreement?
- How did you measure the 4x GPU memory reduction?
- What did the Kendall correlation evaluate?
- Was the diagnostics triage project work or professional work?

---

# Eight-dimension score

These scores are approximate because there is no target job description.

| Dimension | Score | Assessment |
|---|---:|---|
| ATS keyword match | 7/10 | Strong technical terminology, but no JD-specific targeting |
| Summary | 4/10 | No summary or explicit positioning |
| Skills section | 6.5/10 | Accurate but underdeveloped relative to the experience |
| Bullet quality | 7.5/10 | Strong metrics and technical depth; some vague and duplicate bullets |
| Publication selection | N/A | No publications listed |
| Narrative coherence | 6.5/10 | Strong raw material, but the target identity is not prioritized |
| Page fill and visual structure | 7/10 | Likely efficient, though formatting and line-break artifacts need checking |
| Credibility signals | 7.5/10 | Good metrics and technical specificity; ownership and duplication need clarification |

**Overall estimated score: 6.8–7.2/10**

The resume is technically stronger than its presentation. The largest gains will come from prioritization, not from adding more technologies.

---

# Prioritized changes

## Tier 1: Make these changes

1. **Add a target-role summary.**  
   The resume currently lacks a clear professional identity.

2. **Remove duplicate bullets and consolidate overlapping work.**  
   Repeated claims create both space problems and credibility concerns.

3. **Remove or substantiate the “AI-first engineering practices” bullet.**  
   It is vague and weaker than the rest of the project.

4. **Add context to the major metrics.**  
   Clarify baselines, evaluation sets, measurement definitions, and production versus offline conditions.

5. **Resolve the ownership and location of the diagnostics triage achievement.**  
   It must appear in only one place unless it was genuinely separate work.

6. **Correct the CI bullet’s grammar and clarify the three-day release-cycle result.**

7. **Remove date of birth and probably nationality.**

## Tier 2: Strongly consider

1. Reorder bullets so the strongest ML and agent achievements appear first.
2. Expand the skills section to reflect demonstrated systems capabilities.
3. Add public links for open-source projects where appropriate.
4. Clarify the meaning of the context-window stress test.
5. Add practical consequences to the BF16 memory reduction.
6. Explain the operational meaning of the Kendall correlation.
7. Clarify whether the 50-way fan-out was a stress test or production condition.

## Tier 3: Lower priority

1. Minor terminology and capitalization consistency.
2. Cosmetic tightening of section labels.
3. Additional tools in Skills without corresponding evidence.
4. More metrics where the existing bullets are already sufficiently quantified.

---

# Interview bridge points to prepare

Prepare concise explanations for these connections:

| Resume topic | What the interviewer will want to understand |
|---|---|
| Tool-use fine-tuning | How the training setup improved reliable tool behavior rather than merely reproducing data |
| Specialist routing | How routing reduced conflicting outputs and how signal scope was enforced |
| GRPO optimization | How the reward was designed and how you confirmed accuracy did not degrade |
| Evaluation harness | How the metrics were selected and how regressions were detected |
| BF16 optimization | What memory was reduced and what the reduction enabled |
| Agent runtime | How context management and concurrency controls improved reliability |
| Research-agent evaluation | Whether the metrics detect meaningful quality degradation rather than synthetic artifacts |

## Bottom line

Do not add more impressive-sounding technologies yet. First:

- establish the target role,
- remove duplication,
- make metrics defensible,
- replace vague claims with evidence or delete them,
- and make the distinction between professional work and personal projects unmistakable.

The underlying experience is strong enough to support interviews for ML engineer, LLM engineer, agent infrastructure, and applied ML systems roles, but the current resume makes the reader work too hard to identify that strength.
