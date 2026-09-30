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