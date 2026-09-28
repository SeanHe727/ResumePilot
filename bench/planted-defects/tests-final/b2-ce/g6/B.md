## Highest-priority changes

1. **Remove your date of birth and nationality.** They aren’t needed for most applications and can invite irrelevant screening bias. Keep location or work authorization only if the application or role requires it.
2. **Resolve the repeated content.** The assistant-only loss-masking method appears in two internship bullets, and the backlog result appears in both Experience and Projects. Repetition makes the resume look padded and obscures your distinct contributions.
3. **Make the metrics interpretable.** Several strong numbers lack a baseline, definition, or evaluation context. Clarifying those will make the results more credible.
4. **Fix the tense error in the Junior Software Engineer section.** One bullet switches from past tense to present tense.
5. **Replace or substantiate the vague Agent Runtime Suite bullet.** It makes broad impact claims without showing what changed or how you measured it.

## Contact and Education

- **Contact line:** The code URL looks like a placeholder. Use a working, professional link, and consider adding a LinkedIn profile if relevant. If the sample details are only anonymized for this review, disregard this point.
- **Education entries:** These are clear. Keep the expected graduation date, and make sure it remains updated as your timeline changes.
- **Locations:** Use a consistent format for city and country across entries. If the company or university names are anonymized here, use their real names on the submitted resume unless confidentiality prevents it.

## Experience

### Mobility Systems Company

- **Diagnostic-accuracy bullet:** Specify what “accuracy” measures, the comparison baseline, and whether the 35% increase is relative or in percentage points. “Validated tool-use trajectories” may also need brief context so readers understand what was validated.
- **Routing-layer bullet:** Clarify what “in-scope signals” means and how reviewer disagreement was calculated. State whether the change from 14% to 6% is a percentage-point change or a relative reduction.
- **GRPO bullet:** The result is useful, but explain how “equal accuracy” was established—for example, what evaluation set or comparison was used. Keep spelling consistent with the rest of the resume; “penalises” uses British spelling while the resume otherwise uses US locations and conventions.
- **Evaluation-harness bullet:** Clarify what “citation quality” measures, or name the evaluation criteria if they are important to the role. If possible, show why catching two regressions mattered, rather than leaving the impact at detection alone.
- **Assistant-only loss-masking bullet:** This repeats the method already mentioned in the diagnostic-accuracy bullet. Remove or consolidate one of these points so the section doesn’t repeat the same work.
- **Diagnostics-triage bullet:** The 68% backlog reduction is compelling. Clarify your individual contribution and how the reduction was measured or attributed to the launch. The “800+ sensor signals per case” detail is useful if it shows scale; make sure readers can tell what the system does with those signals.

### Eastern Robotics Co.

- **GPU-memory bullet:** State what the 4× reduction refers to—such as peak memory per training run—and, if relevant, whether it affected model quality or training capacity. “FP32 to BF16 mixed precision” may be technically unclear; verify that it accurately describes the change you made.
- **Latency bullet:** This has a clear before-and-after result. Clarify the load-test conditions or traffic level if that context materially affects the 420 ms and 180 ms figures. The 200 ms build threshold is useful, but make clear it applies after the optimization.
- **CI-pipeline bullet:** Correct the tense inconsistency between “Maintained” and “adds.” Also clarify what “release cycles to 3 days” measures and how the automated checks contributed to that outcome.
- **Fleet-services bullet:** Quantify the operational effect if you have reliable data—for example, how often or how long dispatch was delayed before the migration. Also make clear whether you led the migration or contributed to it.

## Projects

### Agent Runtime Suite

- **“Drove adoption…” bullet:** This is broad and difficult to verify. Add concrete evidence of adoption and outcomes, or remove it. As written, it is less persuasive than your technical bullets.
- **Context-window bullet:** Define what “working context” means and how you measured the 10K-token limit and 100× growth. The stress-test setup matters for interpreting the result.
- **Concurrency bullet:** Clarify the practical effect of removing deadlocks and lost results, such as reliability or completion impact, if measured. “50-way fan-out” may need a little context for readers unfamiliar with the system.

### Research-Agent Evaluation Framework

- **Metrics-integration bullet:** Clarify what the metrics assess and your contribution to integrating them. The count of eight is useful, but the bullet could better communicate the scope or use of the work.
- **Kendall-correlation bullet:** Explain what the evaluator’s score was correlated with and what the 400+ trials represent. Without that reference, the 0.89 figure is hard to interpret.
- **Backlog bullet:** This duplicates the triage result in your internship section, including the same sensor-signal scale. Keep the result in the section that best represents the work, or make clear that this project involved a genuinely separate system and outcome.

## Skills

- **Programming:** Git is a version-control tool rather than a programming language; separate it from programming languages. Add other relevant languages or tools only if you can discuss them confidently.
- **ML & Agents:** This list is very short relative to your experience. Consider including additional relevant frameworks, infrastructure, evaluation, or deployment tools you’ve used, while avoiding a long inventory of technologies you can’t substantiate.
- **Proficiency and specificity:** “Agent evaluation” is broad. Make the skills section specific enough to help with keyword screening, and ensure every listed skill is supported by your experience or projects.