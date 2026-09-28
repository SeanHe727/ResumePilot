## Highest-priority changes

1. **Choose a target role and tailor the resume to it.** The resume combines mechanical design, software engineering, and ML/agent work. That range can be valuable, but the current version doesn’t make clear which role you’re seeking. For ML/software roles, foreground the relevant engineering work and projects; for mechanical roles, foreground the design experience and CAD skills. Keep a separate version for each target if needed.

2. **Remove or reconcile repeated achievements.** The assistant-only loss-masking work appears twice under Mobility Systems, and the backlog reduction appears under both Mobility Systems and the Research-Agent project. Repetition makes the resume look padded and leaves it unclear whether these were separate efforts.

3. **Make the results easier to trust and interpret.** Several strong numbers lack context: define whether “35%” means a relative improvement or percentage points, what was measured, and against what baseline. Add enough evaluation context to support the claims without turning each bullet into a methods section.

## Header and personal information

- **Name and contact details:** Keep these, but make sure the code/portfolio link is a complete, clickable URL and goes to a polished, relevant page. Consider adding your current location if it helps clarify where you’re based.
- **Date of birth and nationality:** Remove both. They generally aren’t needed for a resume and can introduce privacy or bias concerns. If work authorization is relevant to the roles you’re applying for, address that separately and only if useful.
- **Placeholder locations:** Replace “Country” and any generic or anonymized location details with accurate information in the version you submit.

## Education

- **M.S. entry:** Keep the expected graduation date while the degree is in progress, and update it once you graduate or if the date changes. Use consistent date formatting throughout the resume.
- **B.S. entry:** Make the location specific rather than leaving “Country” as a placeholder.
- **Section order:** For ML/software applications, consider putting Experience before Education because you have several years of relevant work. For early-career or academic applications, Education first can still make sense.

## Experience

### Lakeside Auto Parts — Mechanical Design Engineer

- **Role relevance:** This is your most recent role, but it’s mechanical-design-focused while much of the rest of the resume targets ML/software. For ML/software applications, make the relevance of the role clear where possible; don’t force a connection if there isn’t one. For mechanical applications, give this role more emphasis.
- **Scrap-rate bullet:** Clarify whether the change from 6% to 4% is a two-percentage-point reduction, and give enough context to understand the production scope. The result is concrete, but readers may otherwise interpret the size of the improvement differently.
- **Tolerance-analysis bullet:** “Ran” and “signed off” communicate activity, but not the outcome. Add the consequence or value of the work if you can substantiate it, such as what the analyses or inspections enabled. Make clear what you personally owned.

### Mobility Systems Company — Machine Learning Engineering Intern

- **Diagnostic-accuracy bullet:** Explain what “35%” measures—relative improvement or percentage points—and identify the evaluation basis or comparison point. The technique is specific, but the result needs context to be meaningful.
- **Routing-layer bullet:** Clarify how disagreement was measured and why lowering it is a good outcome. Less disagreement is not automatically better unless the reviewer’s judgment was validated against a reliable standard. Also clarify what “in-scope signals” means if that isn’t obvious to your target audience.
- **GRPO bullet:** The comparison with the SFT baseline is useful. Make sure the accuracy comparison is supported by a clear evaluation set or conditions, and clarify that the latency figure is a reduction. Retain this bullet if you can explain the experimental setup in an interview.
- **Evaluation-harness bullet:** This is a strong, concrete contribution. If space permits, add context about what the two regressions involved or why catching them mattered. Make clear whether you built the harness independently or contributed to a team effort.
- **Assistant-only loss-masking bullet:** This repeats the technique in the diagnostic-accuracy bullet. Combine the information or keep only the version that best conveys your contribution and result. As it stands, the separate, unquantified bullet adds little and can make the work appear duplicated.
- **Triage-branch bullet:** The backlog reduction is a useful impact measure, but explain how it was measured and whether other changes contributed. This result is repeated in the Research-Agent project section; don’t present the same achievement twice unless the project entry describes clearly distinct work.
- **Bullet order and count:** There are six bullets here, including a duplicate. Remove redundancy and order the remaining bullets by relevance to the roles you’re targeting. This should make the section easier to scan.

### Eastern Robotics Co. — Junior Software Engineer

- **BF16 bullet:** Keep the fourfold memory reduction, but provide context if available, such as the relevant hardware or whether model quality was maintained. Otherwise, readers may not know what the comparison covers.
- **API-latency bullet:** The before-and-after p95 figures are strong. Clarify the load-test conditions if they materially affect the result; the 200 ms build threshold is useful but does not explain the conditions behind the 180 ms measurement.
- **CI-pipeline bullet:** Fix the tense mismatch between “Maintained” and “adds.” Also clarify what the three-day release-cycle figure is measured against; without a baseline, the impact is hard to judge.
- **Robot-fleet migration bullet:** This is a solid systems accomplishment. If you have a defensible measure of the resulting reduction in backlogs or dispatch delays, include it; otherwise, the stated operational outcome is still useful.
- **Ordering:** Put the bullets most relevant to the target role first. For ML/software roles, the latency, model-memory, and service-migration work may be more immediately relevant than release-process maintenance.

## Projects

### Agent Runtime Suite

- **“AI-first engineering practices” bullet:** This is vague and reads as a broad claim rather than a specific accomplishment. Either substantiate it with concrete evidence or remove it; “accelerating delivery” and “improving outcomes” need measurable or otherwise verifiable support.
- **Context-management bullet:** The 10K-token and 100-turn figures are useful, but “the raw conversation grew 100x” is unclear without saying what the 100x is relative to. Also clarify what quality or capability was preserved while context was reduced.
- **Concurrency bullet:** The technical problem and result are compelling. Add enough information about how the 50-way fan-out was tested and how you verified that deadlocks and lost results were resolved.
- **“Owner” label:** Make sure this accurately describes your role and will be understood by readers. It can be unclear whether it means project owner, sole developer, or something else.

### Research-Agent Evaluation Framework

- **Project identification:** Name the open-source framework and link to the project or relevant contribution if available. “An open-source research-agent framework” is too general for readers who may want to verify your work.
- **Metrics bullet:** Identify the metrics or at least make clear what kinds of citation and faithfulness measures you integrated. “Eight metrics” alone does not show their relevance.
- **Kendall-correlation bullet:** Explain what relationship the 0.89 correlation represents and what the evaluator was expected to track. The figure is impressive but difficult to interpret without that context.
- **Backlog bullet:** This duplicates the result under Mobility Systems. Remove it here unless this project involved a genuinely separate system, dataset, or outcome; if it did, make that distinction clear.
- **Date overlap:** This project overlaps with your internship. That is fine if it was concurrent, but be prepared to explain the relationship—for example, whether it was independent, open-source, or part of your internship work.

## Skills

- **Coverage:** The skills list is very short relative to the experience described. Add only tools and technologies you can confidently discuss, including relevant CAD tools such as SolidWorks if you’re applying for mechanical roles.
- **Relevance:** Tailor the skills to each target role. The current list includes ML/agent terms but little context for the mechanical-design experience or the software-infrastructure work.
- **Specificity:** Keep skill categories and names consistent, and avoid listing broad or trendy terms unless you can support them with work shown elsewhere on the resume.

## Consistency and presentation

- Use consistent date formatting, punctuation, and dash styles throughout.
- Use present tense for ongoing responsibilities and past tense for completed work. Check the bullets under current roles for this distinction.
- The displayed line breaks split several bullets mid-sentence. In the final document, make sure the layout wraps text naturally and that each bullet remains intact in the PDF and when copied into an application system.
- Before submitting, update all “Present” dates and the expected graduation date to reflect the submission date.