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
Lakeside Auto Parts | Mechanical Design Engineer | Metro City, Country | Jun 2025 - Present
- Designed stamping dies for automotive brackets in SolidWorks, cutting the scrap rate from 6% to 4%
on two press lines.
- Ran tolerance stack-up analyses for 12 production parts and signed off first-article inspections
with the supplier.
Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025
- Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use
trajectories with assistant-only loss masking.
- Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to
their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.
- Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises
redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline
at equal accuracy.
- Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation
quality and latency, catching 2 accuracy regressions before release.
- Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the
tool outputs more faithfully.
- Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor
signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight
weeks after launch.
Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024
- Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed
precision.
- Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads,
with load tests that fail the build if p95 exceeds 200 ms.
- Maintained the CI pipeline for the perception team’s model releases and adds automated regression
checks that shortened release cycles to 3 days.
- Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter
handling, removing the nightly backlogs that delayed morning dispatch.
PROJECTS
Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present
- Drove adoption of AI-first engineering practices across the platform, accelerating delivery and
improving outcomes for downstream teams.
- Kept working context under 10K tokens across a 100-turn stress test while the raw conversation
grew 100x, using budgeted context layers and staged compaction.
- Separated concurrency pools and gated cache writes on stream completion, removing nested-pool
deadlocks and lost tool results under 50-way fan-out.
Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025
- Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s
evaluation module.
- Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+
report-level trials that removed citations, sources and claims.
- Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals
per case using ML-extracted features.
SKILLS
Programming: Python, TypeScript, Git
ML & Agents: PyTorch, LoRA, GRPO, agent evaluation
```

## Reviewer 1

# Résumé critique

**Inferred target:** ML/AI engineering, especially agent systems, model evaluation, or applied ML. I’m inferring this from the résumé’s projects and ML experience; there’s no job description, so I can’t assess fit for a particular role or give a meaningful JD keyword match rate.

## Overall assessment

You have several strong, quantified ML and systems achievements, but the résumé currently makes a recruiter work to understand what role you’re pursuing. The biggest fixes are to clarify your target, remove or explain duplicated claims, and resolve the mismatch between the role your experience section leads with and the ML work you want to foreground.

## Domain and target-role lens

- **Likely first reader:** A recruiter or engineering manager hiring for ML engineering, applied AI, or agent systems. They’ll look for evidence of model development, evaluation, production deployment, and ownership.
- **Likely role expectations:** Your résumé itself signals hands-on Python/TypeScript, model fine-tuning, tool-using agents, evaluation, and production systems. It does not identify a specific employer’s priorities.
- **Your strongest differentiators:** Quantified evaluation and latency results, agent-routing and tool-use work, and experience spanning ML and robotics systems.
- **Main competitive gap:** Candidates for agent/LLM roles may show a clearer, consistent record of ML-focused employment, shipped AI products, or research. Your résumé has relevant projects and internship work, but your current role is mechanical design.
- **Vocabulary guidance:** Keep the specific methods and systems you actually used visible—such as fine-tuning, GRPO, tool-use trajectories, agent evaluation, latency, and production deployment. Don’t add terms just because they are common in AI job postings.

## Five-perspective read-through

### ATS and keyword scan

Without a JD, this is only a résumé-content check, not an ATS match score.

| Inferred role term | Evidence in résumé | Assessment |
|---|---|---|
| Python | Skills | Present |
| TypeScript | Skills; project title/details | Present |
| PyTorch | Skills | Present |
| Model fine-tuning | Experience | Present |
| LoRA | Skills | Present |
| GRPO | Experience; skills | Present |
| Agent systems | Experience and projects | Present |
| Tool use | Experience | Present |
| Model evaluation | Experience and project | Present |
| Accuracy | Experience | Present |
| Latency | Experience | Present |
| Citation quality / faithfulness | Experience and project | Present |
| Production deployment | Experience | Partial; clarify what launched and your role |
| APIs | Experience | Present |
| GPU optimization | Experience | Present |
| CI/CD | Experience | Present |
| Robotics | Experience | Present |
| Sensor data | Experience | Present |
| SolidWorks | Experience, but absent from Skills | Present in experience only |
| SQL, cloud, or data pipelines | Not shown | Absent; include only if you have relevant experience |

### Recruiter glance

**Verdict: Maybe.** The education and technical experience are credible, but the résumé doesn’t state a target role or summarize the ML profile. The current Mechanical Design Engineer title may lead a recruiter to categorize you as a mechanical candidate before they reach the ML internship.

### HR screen

**Verdict: Borderline to phone screen, depending on the role.** The résumé shows relevant ML work and an in-progress M.S., but the career story is unclear. The simultaneous graduate-school, internship, and current mechanical-engineering dates may prompt questions; clarify the arrangement if any roles were part-time, internships, or concurrent.

### Hiring manager

**Verdict: Maybe, with a plausible path to interview for applied ML or agent engineering.**

1. The strongest evidence is the quantified work on diagnostic accuracy, agent routing, evaluation, and latency.
2. The duplicate-looking assistant-only loss-masking claims and repeated backlog result could raise doubts about how many distinct projects the résumé represents.
3. The mechanical role and projects need a clearer relationship to your intended ML role.

**Likely first question:** Which of the agent and diagnostic systems did you personally build, and what was your contribution versus the team’s?

### Technical reviewer

**Truthfulness:** Not independently verifiable from résumé text alone. Be ready to substantiate baselines, measurement methods, and your individual contribution for each metric.

**Consistency issues to fix:**
- The assistant-only loss-masking method appears in two bullets in the same internship. Make clear whether these describe distinct contributions or the same work.
- The backlog reduction and 800+ sensor-signal triage result appear under both the internship and a separate project. If they refer to the same system, avoid presenting them as separate achievements.
- The sensor-triage bullet under “Research-Agent Evaluation Framework” seems unrelated to that project’s title and other bullets. Verify that it belongs there.
- One Eastern Robotics bullet shifts from past tense to present tense (“Maintained … and adds”). Correct the tense inconsistency.
- The first Agent Runtime Suite bullet makes broad claims about adoption and improved outcomes but gives no evidence. Substantiate it or reconsider its prominence.

## Content and structure: what to change and why

### Header and personal details
- **Remove your date of birth.** It isn’t needed to evaluate your qualifications and can introduce irrelevant personal information into screening.
- **Remove nationality unless a specific application requires it.** If work authorization is relevant, communicate that directly and accurately instead.
- **Add a clear target-role identifier near the top.** At present, the reader must infer whether you’re pursuing mechanical design, robotics, ML engineering, or agent systems.
- **Consider a short professional summary.** Use it to connect your ML/robotics experience to the role you want; don’t use it to repeat the skills list.

### Education and chronology
- **Clarify the expected graduation date and current enrollment status.** The degree is in progress, so keep that status unambiguous.
- **Explain overlapping dates where necessary.** The M.S., ML internship, and current mechanical role overlap. Add context such as internship or part-time status only if accurate.
- **Use consistent location and date formatting.** The education entries use different country formats, and the résumé mixes a future expected date with completed date ranges. Consistency helps scanning.

### Experience
- **Reconsider the ordering or prominence of the current mechanical role for an ML application.** Its placement first is conventional, but its title and duties may make the résumé appear less ML-focused. Keep the chronology accurate while making the target relevance apparent.
- **Differentiate the two loss-masking bullets.** They appear to describe the same method; repetition can make the internship seem padded and obscure the distinct result.
- **Resolve the duplicated triage achievement.** Repeating the same system and backlog metric under two headings can look like double-counting. Keep one clear account, or explain the separate scope if they are genuinely different.
- **Clarify the basis for important metrics.** For the 35% accuracy improvement, reviewer-disagreement reduction, tool-call reduction, and latency result, be prepared to explain the baseline, measurement method, and test conditions.
- **Make deployment and ownership clear where relevant.** The backlog result says the system launched, but a reviewer may still wonder what you personally delivered and how the impact was measured.
- **Correct the tense mismatch in the CI bullet.** It currently combines a past-tense description with a present-tense verb.
- **Add context to the memory reduction claim.** A reviewer may ask what memory measure, workload, and model configuration the 4× comparison used.
- **Keep the mechanical achievements if they support your story.** They show manufacturing and engineering experience, but for an ML-targeted résumé, they should not crowd out your most relevant ML evidence.

### Projects
- **Remove or substantiate the broad adoption claim.** As written, it doesn’t show what changed, how adoption was measured, or what outcomes improved.
- **Clarify the 100× context-growth comparison.** A technical reader will want to understand what grew 100× and how the 10K-token limit was measured.
- **Check the project heading against its third bullet.** The sensor-triage work appears to duplicate an internship achievement rather than describe research-agent evaluation.
- **Clarify your role as “Contributor.”** The label is appropriately cautious; make sure the bullets distinguish your contribution from the framework’s overall capabilities.

### Skills
- **Expand the skills section only with tools you can discuss in depth.** It is currently brief relative to the technical detail in your experience. Relevant technologies already evidenced elsewhere—such as SolidWorks, mixed-precision training, or API work—could be represented if they matter to the target role and you have practical proficiency.
- **Make the categories help a recruiter scan for the target role.** The current “ML & Agents” category combines tools, methods, and a broad capability. Organize categories around the kinds of skills the roles you’re applying for request.
- **Don’t add a tool merely because it is common in job postings.** Unsupported skills can create problems in a technical screen.

### Layout and presentation
- **Check the rendered document, not just the text.** Line breaks split several bullets, but plain text doesn’t show whether the layout is clean. Confirm that wrapped bullets, spacing, and page breaks are easy to scan.
- **Use a consistent visual treatment for dates, locations, titles, and project details.** I can’t assess typography or page fill from the supplied text.

## Provisional scoring

These scores are directional, not a JD-specific assessment.

| Dimension | Score | Main reason |
|---|---:|---|
| ATS keywords | 6/10 | Strong role-relevant terms, but no JD to compare against |
| Summary | 3/10 | No summary or target-role statement |
| Skills | 5/10 | Relevant foundation, but sparse |
| Bullet quality | 7/10 | Good quantified evidence, weakened by repetition and unclear attribution |
| Publications | N/A | No publication section; cannot tell whether one is relevant or expected |
| Narrative coherence | 5/10 | ML/robotics strengths compete with the current mechanical-role signal |
| Page fill and visual | Not assessable | Source text doesn’t show the rendered layout |
| Credibility signals | 7/10 | Strong metrics, but they need clearer provenance and distinct project boundaries |

## Interview likelihood

Without a specific job description, these are broad impressions rather than reliable probabilities.

| Reader | Directional outcome | Main factor |
|---|---|---|
| ATS | Uncertain | Relevant keywords appear, but role-specific requirements are unknown |
| Recruiter | Maybe | The current title and missing target-role summary create ambiguity |
| HR | Borderline to phone screen | Relevant experience is present, but chronology and focus need clarification |
| Hiring manager | Maybe | Strong technical evidence, with duplication and ownership questions |
| Technical panel | Possible, with probing | Metrics and methods invite detailed questions about baselines and contribution |

**Ceiling:** The underlying experience appears stronger than the current presentation. The largest improvement is likely to come from clarifying your target, eliminating apparent double-counting, and making ownership and measurement clear—not from adding more keywords.

## Prioritized changes

### High impact
1. **Make the intended role clear near the top.** This resolves the mismatch between the mechanical title and ML-heavy content.
2. **Resolve the repeated loss-masking and triage claims.** This improves credibility and makes the distinct achievements easier to evaluate.
3. **Clarify overlapping work and study dates.** This prevents readers from guessing about employment status and chronology.
4. **Remove unsupported or broad claims, or provide evidence.** This applies especially to the adoption claim and any metric whose scope or baseline is unclear.
5. **Check that every project bullet belongs under its stated project.** The sensor-triage bullet currently appears misplaced or duplicated.

### Medium impact
1. **Strengthen the skills section using only substantiated, role-relevant skills.**
2. **Add context for major metrics where needed.** Focus on what was measured, against what baseline, and under what conditions.
3. **Make the contribution and deployment status explicit for team-built systems.**

### Cosmetic
1. Standardize dates, locations, and tense.
2. Remove birth date and usually nationality.
3. Review line wrapping and page breaks in the final layout.

## Interview preparation: bridge points

| Résumé topic | Connection to an ML/agent role to explain |
|---|---|
| Diagnostic-accuracy improvement | How the fine-tuning method, data validation, and evaluation process transferred to an applied model task |
| Agent routing and reviewer agreement | How scoped access to signals and independent review affected system reliability |
| GRPO and reduced tool calls | How you designed the reward and evaluated efficiency without sacrificing accuracy |
| Evaluation harness | How checkpoint comparisons and regression detection informed release decisions |
| Context management under stress testing | How you measured and controlled context growth in a long-running agent system |
| Robotics services and API latency | How production constraints, reliability, and latency shaped your engineering decisions |
| Mechanical design and tolerance analysis | Whether this experience contributes to your engineering approach or is a separate part of your career history |

**Bottom line:** Prioritize focus, de-duplication, and clarity of ownership. The résumé has solid technical material; its main problem is that a reader may not know which work is distinct, what you personally owned, or which role you want.

## Reviewer 2

3 errors, 15 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.
> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Important] The completed-role bullets mix past and present tense: “Maintained” and “adds” in one role, and “screens” in another.

**Why**
The inconsistent verbs make the timeline less clear for work in roles that have ended. Readers may have to pause to work out whether the described tasks are ongoing or completed.

**How to change it**
Change “adds” to “added” and “screens” to “screened.”

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh and that are conventionally left off.

**Why**
A reader does not need the date of birth or nationality to assess the candidate’s qualifications. Including them takes space from relevant information and asks the reader to consider details that are not part of the résumé’s evidence.

**How to change it**
Delete “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

> “cutting the pending-case backlog 68%”; “by two-thirds”

**Problem**
[Error] The same diagnostics triage branch is credited with different backlog reductions: 68% in one place and two-thirds in another.

**Why**
The descriptions appear to refer to the same branch and result, but the figures do not match. A reader may question whether these are separate measurements or an inconsistency, which can undermine confidence in both claims.

**How to change it**
Use [the same measured figure] in both places if they describe the same result; if they are separate results, clarify how the branch or measurement differs.

> Mechanical Design Engineer

**Problem**
[Important] The newest Mechanical Design Engineer entry redirects the page away from its ML and agent-engineering direction.

**Why**
As the most recent role, it makes the reader weigh mechanical design before seeing the candidate’s current technical direction. Without a clear link to that direction, a recruiter may be less certain which roles the résumé targets.

**How to change it**
Shorten this entry to a line, or add [how the role fits the intended career direction].

> Western State University

**Problem**
[Important] Experience appears after Education even though the candidate has several years of work experience.

**Why**
The current technical direction is easier to read from the roles first. With Education leading, readers must pass over it before seeing the work that establishes that direction.

**How to change it**
Move the Experience section ahead of Education.

## Lakeside Auto Parts | Mechanical Design Engineer | Metro City, Country | Jun 2025 - Present

> Designed stamping dies for automotive brackets in SolidWorks, cutting the scrap rate from 6% to 4% on two press lines.

**Problem**
[Important] The bullet attributes the scrap-rate reduction to the die design without establishing that the redesign caused it or that the result was validated on both lines.

**Why**
A die redesign can reduce scrap when tooling causes defects, but the line does not establish that cause or validation on both press lines. A reader may question whether other process or material changes explain the reduction, weakening the result’s credibility.

**How to change it**
If trials confirmed the reduction on both lines and linked it to the die redesign, retain the attribution; otherwise describe the measured scrap-rate change without crediting the redesign.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement has no stated comparison or evaluation set.

**Why**
Without a baseline or measurement context, a reader cannot tell what the percentage represents or how to interpret it. The improvement is a strong headline, but its significance is hard to judge.

**How to change it**
After “by 35%,” add [from X% to Y% on the same evaluation set], if accurate.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.
> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.
> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.
> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The outcome figures come after long method and implementation descriptions, making them harder to spot while scanning.

**Why**
The 14%-to-6% disagreement reduction, tool-call and latency reductions, two regressions caught, and 68% backlog reduction are the most immediately legible results. When readers meet lengthy design or setup details first, they may miss those outcomes or give them less weight.

**How to change it**
Move each result phrase to the beginning of its bullet, then follow it with the routing design, training method, harness details, or branch inputs.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Important] This bullet repeats the assistant-only loss-masking method from the first bullet without adding a distinct result or contribution.

**Why**
A reader sees the same fine-tuning method in both bullets and gets no new outcome from the second mention. That repetition uses space that could carry new information about the work.

**How to change it**
Remove this bullet unless it contains a distinct contribution or result not covered by the first bullet; if so, replace the repeated method description with that information.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Error] The 4× GPU-memory reduction is not supported by switching from FP32 to BF16 mixed precision alone.

**Why**
BF16 uses half the storage per value of FP32, not one quarter. Mixed-precision training can also retain FP32 master weights and optimizer states, so total GPU-memory savings are not automatically 4×.

**How to change it**
Change the figure to 2× only if you mean storage per value; otherwise report total-memory reduction only if it was measured, and specify the training setup.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
[Important] The 3-day release-cycle duration has no comparison point.

**Why**
Without the previous duration, a reader cannot judge the size of the improvement. The 3-day result is useful, but its significance remains unclear.

**How to change it**
Replace this phrase with the before-and-after duration, using [prior release-cycle duration] to 3 days if accurate.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The opening claim names broad benefits and “AI-first” practices without saying what changed, while also failing to connect the claim to the concrete runtime improvements below.

**Why**
A reader cannot tell what improved or how to assess the impact, and the phrase does not show what you introduced or changed. Since the two runtime bullets give concrete technical results, the opener’s abstract language makes the project’s contribution harder to understand.

**How to change it**
Replace “AI-first engineering practices” with [the specific AI-enabled workflow you introduced] and replace the broad benefits phrase with [one specific outcome and its comparison], connecting it to the runtime results only if they support it.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Important] The key context-window result is separated from the method by a lengthy comparison about raw conversation growth.

**Why**
Readers scanning for the result meet the raw-conversation comparison before the method and result are easy to take in together. That delays the concrete 10K-token outcome and makes the bullet slower to scan.

**How to change it**
Move “Kept working context under 10K tokens” to the start of the bullet and compress the raw-conversation comparison.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The bullet claims the listed changes removed deadlocks and lost tool results under 50-way fan-out without showing that both outcomes were verified in that workload.

**Why**
Separate pools prevent pool-starvation deadlocks only when the dependency graph and shared resources still allow progress. Gating cache writes on stream completion does not ensure fan-in delivers every tool result when tasks fail, are cancelled, or queues overflow, so the broad result claim may invite questions about what was actually tested.

**How to change it**
If testing confirmed both outcomes under the 50-way fan-out workload, specify that tested scope; otherwise say the changes addressed nested-pool deadlocks and incomplete cache writes, and identify what was verified.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The integration claim gives no result beyond the contribution itself.

**Why**
A reader can see what you integrated, but not what the contribution changed or enabled. That makes the value of the work difficult to judge.

**How to change it**
Add [the evaluation capability enabled or downstream use], if you can substantiate it.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The 0.89 Kendall correlation does not identify the variables being correlated.
2. [Polish] “Showed the evaluator tracks” is indirect and makes the reported relationship harder to scan.

**Why**
1. Without the paired variables, a reader cannot interpret what the coefficient demonstrates about the evaluator. The number alone does not make clear what relationship the trials showed.
2. The wording makes readers parse the claim before they reach the correlation result. A more direct construction would make the evaluator’s demonstrated behavior clearer at a glance.

**How to change it**
1. After the coefficient, add [the two variables correlated, such as evaluator score and injected degradation severity], if accurate.
2. Replace “Showed the evaluator tracks” with “The evaluator tracked.”

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Important] The two-thirds backlog reduction has no measurement period or before-and-after case counts.
2. [Important] The completed-project bullet uses present tense for the triage branch.

**Why**
1. The reduction is useful evidence, but readers cannot tell the timeframe or scale of the backlog it describes. That leaves the size and context of the result unclear.
2. The project ended in July 2025, so present-tense “screens” makes the work’s timeline unclear. A reader may wonder whether the branch is still being developed or operated.

**How to change it**
1. Add [the measurement period or before-and-after backlog counts], if available.
2. Change “screens” to “screened.”

## What already works

- “Reduced p95 API latency from 420…”: Shows a clear before-and-after performance result.

## Reviewer 3

## Highest-priority changes

1. **Remove your date of birth and nationality.** They are generally unnecessary on a North American resume and can introduce privacy and bias concerns. If work authorization is relevant, state that separately and only if it helps your application.
2. **Remove duplicated or conflicting accomplishments.** The assistant-only loss-masking claim appears twice in the Mobility Systems role, and the sensor-triage backlog claim appears in both Experience and Projects.
3. **Make the target role clearer.** Your resume spans mechanical design, robotics software, and ML/agents. For each application, emphasize the most relevant work and explain any details that might otherwise seem surprising—especially your current mechanical design role alongside a computer engineering master’s program.
4. **Define the metrics behind your strongest claims.** Several percentages lack a stated baseline, evaluation set, or measurement period. Without that context, readers may not know what the numbers mean.

## Header and education

- **Contact details:** Make sure the code portfolio link works, is professional, and leads directly to relevant work. Consider adding a LinkedIn profile if it supports your application.
- **Date of birth and nationality:** Remove both, as noted above.
- **M.S. entry:** Keep the expected completion date clearly marked as expected. If you are applying for roles in a different country from your university, make your location or relocation status clear elsewhere if relevant.
- **B.S. entry:** The location format differs from the M.S. entry. Use a consistent city-and-country format throughout.
- **Dates across education and employment:** The master’s program overlaps with the internship and current job. That can be entirely valid, but clarify the arrangement if the dates and locations could make the work history seem implausible—for example, if a role was part-time, remote, or otherwise concurrent with study.
- **Overall relevance:** For ML or software applications, the electrical engineering degree is relevant, but the mechanical-design role may need context. For mechanical roles, the reverse may be true. Tailor what you emphasize rather than presenting every experience as equally central.

## Experience

### Lakeside Auto Parts — Mechanical Design Engineer

- **“Designed stamping dies…”** The scrap-rate result is useful. Clarify the measurement period or comparison basis so readers can interpret the change; also distinguish the percentage-point change from the relative reduction if you report either.
- **“Ran tolerance stack-up analyses…”** The number of parts gives scope, but the outcome is unclear. Explain what the analyses or first-article sign-offs enabled or prevented, if you can support that claim. Make your responsibility in the supplier sign-off process precise.
- **Role and timeline:** Because this is a mechanical design role while you are pursuing a computer engineering degree and have recent ML experience, make sure the dates, location, and employment arrangement are accurate and easy to understand.

### Mobility Systems Company — Machine Learning Engineering Intern

- **“Improved diagnostic accuracy by 35%…”** State whether this is a relative or absolute increase and what evaluation set, baseline, or metric supports it. “Validated tool-use trajectories” and “assistant-only loss masking” are specialized terms; retain them if they matter to your target roles, but ensure the result is understandable without assuming the reader knows your training setup.
- **“Designed a routing layer…”** Clarify how “reviewer disagreement” was measured and over what sample. A lower disagreement rate is not automatically better, so explain why the reduction indicates an improvement. The scope of the agents and their “in-scope signals” could also be more concrete.
- **“Trained the triage agent with GRPO…”** This is technically detailed, but the key evidence is spread across several clauses. Make the benchmark or test conditions behind “equal accuracy” clear, and clarify how calls per case and latency were measured. Check that the stated accuracy comparison is meaningful for the same workload and evaluation set.
- **“Wrote the evaluation harness…”** This is a strong, specific contribution. Clarify what counted as an accuracy regression and whether the two regressions were caught before deployment or release. The 14-checkpoint figure is useful if the comparison process is central to your target role.
- **“Fine-tuned the adapter with assistant-only loss masking…”** This repeats the technique already mentioned in the first bullet. Remove the duplication or retain only the distinct contribution; as written, it reads like the same work is being claimed twice. Also verify that the stated purpose accurately describes what the masking changed during training.
- **“Built a diagnostics triage branch…”** The scale and backlog result are strong, but the backlog claim is duplicated in the Research-Agent project below. Keep the result in only the most appropriate place. Clarify the backlog measurement period and how the triage branch contributed to the reduction; “ML-extracted features” is broad unless the reader can infer what role the features played.

### Eastern Robotics Co. — Junior Software Engineer

- **“Cut GPU memory…by 4x…”** Clarify whether memory use fell to one-quarter of its prior level or whether you are using “4x” another way. Because changing from FP32 to BF16 alone may not explain a fourfold change in every setup, make sure the measurement and attribution are defensible.
- **“Reduced p95 API latency…”** This has a clear before-and-after measure and a concrete implementation. Add the load-test conditions if they are important to interpreting the result; otherwise the 200 ms build threshold already gives useful context.
- **“Maintained the CI pipeline…and adds…”** Fix the tense inconsistency: the other bullets describe completed work, but this one switches to present tense. Also define what “release cycles to 3 days” measures and the prior comparison point, if available.
- **“Migrated 30 robot-fleet services…”** The scope and operational benefit are clear. If possible, quantify the effect of removing the nightly backlog or clarify how it affected morning dispatch. Avoid implying you personally delivered the entire migration if it was a team effort.

## Projects

### Agent Runtime Suite

- **“Drove adoption of AI-first engineering practices…”** This is broad and difficult to verify. Either substantiate the adoption and outcome with concrete evidence or remove it. It is less informative than your technical bullets as written.
- **“Kept working context under 10K tokens…”** Clarify what “raw conversation grew 100x” compares and how context size was measured. If you have evidence that the system remained useful—not just within the token limit—make that evaluation visible.
- **“Separated concurrency pools…”** This is one of the more concrete project claims. Clarify the test conditions behind “50-way fan-out” and, if available, how you verified that deadlocks and lost tool results were eliminated.

### Research-Agent Evaluation Framework

- **“Integrated 8 citation and faithfulness metrics…”** Identify the framework or repository so readers can understand the project’s context and your contribution. Make clear whether you implemented the metrics, connected existing ones, or both.
- **“Showed the evaluator tracks injected degradation…”** Explain what the Kendall correlation is between—for example, which evaluator output and which degradation measure—and how the 400+ trials were constructed. The figure is compelling only if readers can interpret what it validates.
- **“Cut the pending-case backlog…”** This duplicates the sensor-triage result under Mobility Systems and appears unrelated to the research-agent evaluation project. Remove it from this project unless it was genuinely part of the project; if it was, clearly distinguish the work and outcome from the Experience claim.

## Skills

- **Programming:** The list is very short compared with the experience shown. Include relevant languages and tools only if you have actually used them and can discuss them in an interview. If you have substantial experience with systems, APIs, robotics, or design software, the current list does not show it.
- **ML & Agents:** These entries are broad. Make sure the skills section reflects the specific methods, frameworks, and evaluation tools you used in the bullets, rather than relying on general labels.
- **Consistency:** Use consistent naming and capitalization for tools and methods. Avoid adding skills solely to match a job posting unless you can substantiate them.

Finally, verify that every date is accurate and that any “Present” role or project is still active when you submit the resume.

## Reviewer 4

Your strongest material is the measured engineering work. I’d focus on removing duplication, making the results easier to verify, and making your target role clear. I’m assuming you’re applying for ML/software roles; if you’re targeting mechanical design roles, the emphasis should change.

### Header and education
- **Date of birth and nationality:** Remove these for U.S. applications unless specifically requested. They generally do not help assess your qualifications and take space from relevant information. Check local conventions for applications elsewhere.
- **Contact link:** Make sure it leads directly to a current portfolio or code profile with work you want recruiters to see.
- **Education entries:** Keep both. If your master’s is relevant to the roles you want, consider adding a small amount of relevant coursework or research *only if* it strengthens the application. Check that the degree names and expected graduation date match your official records.

### Experience
**Lakeside Auto Parts**
- **Stamping-die bullet:** Keep the 6%-to-4% result. Clarify whether that is the scrap rate for both lines combined and, if you can, the period over which it was measured; that makes the impact more credible.
- **Tolerance/inspection bullet:** Clarify your role in “signed off” if final approval belonged to someone else. For ML/software applications, keep this section brief so it does not crowd out more relevant experience.
- **Role alongside the master’s:** The dates and locations may prompt a question about how the current job and degree overlap. Make the arrangement clear if it is not obvious from the actual locations and work setup.

**Mobility Systems Company**
- **Diagnostic-accuracy bullet:** Specify the accuracy measure, baseline, and whether 35% is a relative improvement or a percentage-point gain. Without that context, the number is hard to interpret.
- **Routing-layer bullet:** Keep the 14%-to-6% result. Define “reviewer disagreement” more plainly, and make sure the reviewer’s restricted access does not make “independent” misleading.
- **GRPO bullet:** Strong technical evidence, but dense. Prioritize the training change, comparison, and outcome; keep the reward detail only if it matters to the role. Confirm “equal accuracy” is supported by the evaluation.
- **Evaluation-harness bullet:** Keep it. Explain what counted as an accuracy regression if that is not self-evident from the metric, and be ready to substantiate the pre-release catch.
- **Second adapter-fine-tuning bullet:** Remove or substantially change it. It repeats the first bullet, and “assistant-only loss masking” does not, by itself, support the claim that the model learned to reproduce tool outputs more faithfully.
- **Triage-branch bullet:** Keep the backlog result, but distinguish your contribution from the broader launch if others built the branch. Use this result here rather than repeating it under a different project.

**Eastern Robotics Co.**
- **GPU-memory bullet:** Verify the 4× figure and its attribution. A switch from FP32 to BF16 alone would not ordinarily explain a 4× reduction; mention any other changes responsible if the number is correct.
- **API-latency bullet:** Strong as written. Check that the 420 ms and 180 ms figures came from comparable conditions.
- **CI bullet:** Fix the tense mismatch (“Maintained” versus “adds”). Clarify whether the three-day release cycle was a reduction and what the prior cycle was, if known.
- **Event-queue bullet:** Keep it. The scale, technical change, and operational effect are clear.

### Projects
**Agent Runtime Suite**
- **Adoption bullet:** Remove it unless you can name the practices, your specific contribution, and an observable result. It is much vaguer than the two technical bullets below it.
- **Context-management bullet:** Keep the test result, but clarify what “working context” and “raw conversation grew 100x” were measured against. That will make the claim easier to assess.
- **Concurrency bullet:** Keep it. Clarify how you verified the deadlocks and lost results were eliminated, if space allows.

**Research-Agent Evaluation Framework**
- **Metrics bullet:** Identify the most important metrics or what you implemented, rather than relying on the count of eight alone.
- **Correlation bullet:** Keep the validation result. State what was correlated with injected degradation and ensure the trial count and Kendall statistic are reproducible.
- **Backlog bullet:** Remove it. It repeats the Mobility Systems result and appears unrelated to this project.

### Skills
- Move **Git** out of “Programming”; it is a tool, not a programming language.
- Add only skills you can discuss confidently and that are supported by the bullets. Tailor the order to each target role.
- Across the resume, use consistent tense, punctuation, and date formatting. Your quantified results are an asset; giving each one a clear baseline and scope will make them more persuasive.
