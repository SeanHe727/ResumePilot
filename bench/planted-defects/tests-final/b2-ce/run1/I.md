## Highest-priority changes

1. **Remove the date of birth and nationality** for a US-focused resume. They create privacy and discrimination concerns and do not help recruiters assess qualifications. Handle work authorization separately if relevant.
2. **Delete the duplicated fine-tuning bullet** in the internship.
3. **Delete the duplicated backlog bullet** under the Research-Agent project; it belongs to the internship and is unrelated to that project.
4. **Verify the “4x” GPU-memory claim.** Moving from FP32 to BF16 alone generally implies roughly a 2x reduction for affected tensors, so the current attribution may appear technically implausible.
5. **Replace the vague first Agent Runtime Suite bullet** with specific, verifiable scope or impact—or remove it.
6. **Fix tense, spelling, and metric ambiguities** throughout.

---

## Header

### `Jordan Lee`
- No change needed.

### Phone, email, and code-profile URL
- Keep all three, but ensure the URL is clickable and leads directly to a polished GitHub profile or portfolio.
- If `example.com` is only anonymized here, no issue. If it appears this way on the actual resume, replace it with a recognizable platform or personal domain.
- Consider adding LinkedIn only if it is current and adds useful information.

### Date of birth and nationality
- Remove both for US applications.
- Nationality is not the same as work authorization, so it does not answer the question most US employers care about.
- If you are applying in a country where these details are customary or required, maintain a separate localized version.

---

## Education

### Western State University line
- Keep the expected-graduation status, but standardize the date punctuation with the rest of the resume.
- Make sure the degree name exactly matches the university’s official terminology.
- Add GPA only if it is strong and helps your candidacy.
- Consider adding a research area, thesis, or a small number of relevant courses only if they directly support the ML/agent roles you are targeting.

### Eastern Institute of Technology line
- Replace `Country` with the actual country in the real document.
- Use the same date style and location formatting as the master’s entry.
- GPA, honors, or relevant distinctions may be added if strong; otherwise the line is sufficient.

---

## Experience: Mobility Systems Company

### Company/title/date line
- No substantive change needed.
- Ensure the company and location can be understood if the organization is not widely known. A brief industry descriptor can help, but only if space permits.

### Diagnostic-accuracy bullet
- Define what “35%” means: relative improvement, absolute percentage-point improvement, or error reduction.
- Identify the baseline and evaluation set sufficiently to make the number credible.
- Clarify what “diagnostic accuracy” measures if it is not ordinary classification accuracy.
- Keep the assistant-only loss-masking detail in only one bullet; it currently appears twice.

### Routing-layer bullet
- Clarify whether the drop from 14% to 6% is an 8-percentage-point reduction or a relative reduction. The current phrasing implies the former, but stating the metric precisely avoids ambiguity.
- Explain how disagreement was measured or on how many cases, if space allows.
- Simplify the sentence structure. It currently asks the reader to track three specialists, a reviewer, signal restrictions, and an outcome in one line.
- Verify that limiting the independent reviewer’s signals is technically accurate; a reviewer is often expected to have broader visibility, so this may invite questions.

### GRPO triage-agent bullet
- Add the missing grammatical connector before the 18% reduction.
- Standardize `penalises` to US English because the resume is aimed at US-based roles and otherwise uses US conventions.
- Define the evaluation conditions behind “equal accuracy,” such as the same held-out set or operating threshold.
- Keep GRPO if the target roles are deeply technical; otherwise ensure the accomplishment remains understandable to readers unfamiliar with the acronym.
- Consider shortening the implementation detail if the bullet continues to wrap across four lines.

### Evaluation-harness bullet
- This is a strong ownership-and-quality bullet; keep it.
- Clarify how citation quality was measured, especially because citation evaluation is not obviously connected to industrial diagnostics.
- Add a serial comma for punctuation consistency.
- If the harness became part of CI or continued to be used after the checkpoint comparison, state that scope rather than making it sound like a one-time script.
- Confirm that “before release” refers to production release rather than an internal experiment.

### Second assistant-only loss-masking bullet
- Delete it or merge its unique information into the first diagnostic-accuracy bullet.
- It repeats the same method without adding a separate quantified result.
- Reconsider the phrase about reproducing tool outputs. A model normally learns to produce assistant responses conditioned on tool outputs, not necessarily to reproduce the outputs themselves. Make the technical behavior precise.

### Backlog-reduction bullet
- Move this to the first or second position because it shows deployed product impact and operational scale.
- Clarify whether 800+ signals means raw signals, derived features, or both.
- Indicate the comparison point for the 68% backlog reduction so readers know whether other operational changes contributed.
- Keep only this occurrence of the accomplishment; remove its duplicate from Projects.

---

## Experience: Eastern Robotics Co.

### Company/title/date line
- No substantive change needed.
- Verify that “Junior” is the official title. Do not downgrade or modify an official title unnecessarily.

### GPU-memory bullet
- Validate the 4x reduction carefully.
- BF16 uses half the storage of FP32 for affected tensors, so BF16 alone usually does not explain a 4x total-memory reduction. If other changes contributed—optimizer state handling, activation changes, checkpointing, or reduced batch-related overhead—the attribution must reflect that.
- Specify whether the measurement is peak allocated memory, peak reserved memory, or model-state memory.
- Add the practical result, such as enabling a larger batch or fitting training on fewer/smaller GPUs, if true.

### API-latency bullet
- Strong and specific; keep it.
- Clarify the workload or concurrency level used for the p95 measurement if available.
- Make sure the cache did not change result freshness or correctness; be prepared to explain invalidation.
- The build threshold is useful evidence of durability, so retain it.

### CI-pipeline bullet
- Fix the tense mismatch: `Maintained` is past tense, while `adds` is present tense.
- Clarify whether release cycles were shortened **to** three days or **by** three days.
- Add the prior release-cycle duration if available; without it, the size of the improvement is unclear.
- State whether you personally created the automated checks or only maintained them.

### Service-migration bullet
- Strong infrastructure bullet; keep it.
- Verify that “30 services” is accurate and that they were truly separate services rather than 30 scheduled jobs.
- Quantify the eliminated backlog or dispatch delay if that data is available.
- Prevent `dead-letter` from being split across lines in the final PDF. Forced word breaks can interfere with ATS extraction.

---

## Projects: Agent Runtime Suite

### Project title/role/technology/date line
- Replace `Owner` with the most accurate conventional role designation if this is an open-source or personal project; “Owner” can sound vague.
- Add a repository link if public.
- Consider listing the concrete runtime technologies rather than only the broad field of multi-agent systems.
- Ensure `Present` is accurate when submitting.

### AI-first engineering-practices bullet
- Replace or delete this bullet.
- It contains broad claims—“accelerating delivery” and “improving outcomes”—without evidence, scale, or a clear description of what you built.
- Avoid organizational-transformation language unless you can quantify adoption, users, teams, release speed, or another observable result.
- This is currently the weakest bullet on the resume.

### Context-management bullet
- Clarify what “raw conversation grew 100x” is measured against.
- State what quality or task-performance check confirmed that compaction did not discard necessary information.
- Define whether the 10K-token figure refers to every model call, the active prompt, or stored state.
- Keep the 100-turn stress test because it provides useful evaluation scope.

### Concurrency/cache bullet
- Strong technical bullet; keep it.
- Clarify whether the failures were reproduced in a stress test, observed in production, or caught through automated testing.
- Add a durability measure if available, such as repeated runs with zero failures or a regression test added to CI.
- Make sure `50-way fan-out` is immediately understandable in the project documentation, even if it stays concise on the resume.

---

## Projects: Research-Agent Evaluation Framework

### Project title/role/technology/date line
- Add the project or repository link if it is public.
- If “Contributor” means accepted upstream contributions, make that clear through scope elsewhere in the entry.
- Consider naming more specific evaluation areas in the technology field if they are central to your target roles.

### Eight-metrics integration bullet
- Identify whether you implemented the metrics, integrated existing implementations, or both.
- Mention accepted pull requests, releases, or test coverage if applicable; these make open-source contribution claims more verifiable.
- Consider naming a small number of the most important metrics if they are recognized and relevant, rather than relying entirely on the count.

### Kendall-correlation bullet
- Specify the exact statistic, likely Kendall’s tau, rather than saying only “Kendall correlation.”
- Indicate whether 0.89 was statistically significant or include uncertainty if that analysis exists.
- Clarify how degradation severity was ordered and how many reports or degradation levels produced the 400+ trials.
- The degradation types are useful; keep them.
- Replace `report-level trials` with more precise terminology in your own revision if each report generated multiple corrupted variants.

### Backlog-reduction bullet
- Delete it from this project.
- It duplicates the internship accomplishment almost verbatim and is unrelated to research-agent evaluation.
- The duplication can make recruiters question whether bullets were accidentally copied or whether the project description is reliable.

---

## Skills

### `Programming: Python, TypeScript, Git`
- Move Git out of Programming because it is a version-control tool, not a programming language.
- Add other languages only if you can use them confidently in an interview.
- If applicable, distinguish languages from developer tooling.

### `ML & Agents: PyTorch, LoRA, GRPO, agent evaluation`
- Separate libraries/frameworks from methods or concepts. PyTorch is a framework, while LoRA and GRPO are techniques.
- Make `agent evaluation` more specific if possible; it is broad and difficult to assess.
- Add relevant tools already demonstrated in the resume if you have meaningful proficiency, such as model-serving, experiment-tracking, data, container, or cloud tools.
- Do not add a long keyword list unsupported by the experience bullets.

---

## Resume-wide consistency

- Use US English throughout: the clearest current inconsistency is `penalises`.
- Use one date format and one dash style everywhere, preferably with true en dashes in the polished document.
- Avoid forced mid-word line breaks such as `dead-` / `letter`.
- Keep bullets to roughly two lines where possible; several current bullets are dense enough to slow scanning.
- Order bullets by impact: deployed product/business outcomes first, then technical methods, then supporting infrastructure.
- Define percentage changes precisely: relative percentage, percentage points, or reduction from one explicit value to another.
- Retain metrics, but make sure each has a baseline, measurement definition, and defensible attribution.
- The overall profile is strongest for applied ML, agent infrastructure, and evaluation roles. The resume will improve substantially once duplication, metric ambiguity, and the few technically questionable claims are resolved.