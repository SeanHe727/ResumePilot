## Overall assessment

**Fit verdict: risky fit** for clinical research or biostatistics roles as written. You have useful, quantified experience in trial coordination, data quality, safety reporting, and survey work. But two bullets describe methods that could undermine confidence in the underlying research: the survival estimate is not a valid way to estimate median survival, and assigning treatment by odd/even admission day is predictable allocation—not robust randomization. The asthma project also makes causal claims that the information given doesn’t establish.

I’ll identify what to change and why, without rewriting your lines.

## Header and education

- **Date of birth:** Remove it unless an application specifically requires it. It is generally unnecessary on a US resume and can invite age bias.
- **Nationality:** Remove it unless it is relevant to the role or needed to clarify work authorization. If work authorization matters, state that directly rather than relying on nationality.
- **Contact details:** These are clear. Make sure the profile link is a live, professional page and that the email and phone number are current.
- **Education entry:** This is clear, but specify the degree’s official name if “M.P.H. in Biostatistics” is not exactly how the university confers it. Add relevant coursework, thesis, or academic distinction only if it strengthens your fit and you can substantiate it.

## Meridian Heart Institute — Clinical Research Coordinator

- **Three-site trial, enrollment, and follow-up bullet:** Clarify your personal responsibilities, what “4 months early” is measured against, and the denominator and time point for the 94% figure. “Follow-up visits completed” is different from the percentage of participants retained, so keep the metric precise. Be ready to document the enrollment timeline and visit-completion calculation.
- **Data-entry errors bullet:** Define how errors were measured—especially the sample or audit period behind the field-level percentages—and distinguish the impact of range checks from the impact of double entry. The current wording gives a useful result but not enough context to assess it.
- **Median-survival bullet:** Do not present this as a valid median-survival estimate. Averaging observed follow-up times among only patients who died and excluding censored patients does not estimate median survival; it can produce a biased and misleading result. Reanalyze with an appropriate time-to-event method, such as Kaplan–Meier estimation, if the data and your role support that. Otherwise, remove the claim. This is the most important technical issue on the resume.
- **Adverse-event bullet:** Fix the tense: the bullet starts with a present-tense participle while the surrounding entries describe completed work. Also clarify what “unresolved safety queries” counts and over what period. The reduction is strong, but the current sentence makes it hard to separate the reconciliation work from the result.
- **Safety-reporting bullet:** “All 4 reviews passed” is vague and may overstate what committee review means. Explain what those reviews were and avoid treating the absence of a protocol change as proof that the reports or trial were successful. State your contribution to the reports clearly.
- **Nurse-training bullet:** Clarify whether you trained all nine nurses yourself or contributed to training, and what audit scope supports “no consent deviations.” Avoid implying the training alone caused that result unless you can demonstrate the connection.

## Northgate University Hospital — Research Assistant

- **Odd/even assignment bullet:** This is not robust randomization: admission day is predictable and can be associated with other differences between patients or staffing. Do not describe this as randomized assignment. If this was the actual study design, characterize it accurately and disclose the design limitation; if you are responsible for a later analysis, do not treat the groups as randomized.
- **Missed-visits interview bullet:** Clarify how the 25 interviewees were selected, when no-show rates were measured, and whether the change from 18% to 11% was observed after reminders were introduced. The current wording suggests the interviews and reminders caused the reduction; only make that claim if the study design supports it.
- **Data-dictionary bullet:** Add enough context to show the scale and your contribution—for example, whether you defined, documented, or maintained the variables. Clarify that two later studies reused it if you can verify that.
- **Data-cleaning and administrative-duties bullet:** The sentence combines several unrelated responsibilities, so the data-cleaning result is easy to miss. Separate the analytical contribution from scheduling, supplies, minutes, and front-desk coverage. Explain what “1,200 mismatched patient identifiers” means and how you resolved or verified the matches; identifier reconciliation is not necessarily the same as resolving 1,200 distinct patient records.

## Projects

### Asthma Readmission Analysis

- **“Harnessed cutting-edge analytics…” bullet:** Remove this. It is generic promotional language and tells the reader nothing about the analysis, methods, data, or your contribution.
- **Readmission bullet:** The arithmetic is wrong: moving from 12% to 8% is a **4 percentage-point** decrease and a **33.3% relative** decrease, not a 50% reduction. More importantly, “cut” implies that follow-up caused the change. State the study design and the evidence for any causal interpretation; adjustment for age and insurance alone does not establish causation. Include the sample size, data source, outcome definition, model or method, and uncertainty estimates if available. Also clarify what “7-day follow-up” means.
- **SMS response-rate bullet:** A change from 35% to 55% is **20 percentage points**, not a 20% relative increase. Clarify the number invited, the time period, how response was defined, and whether there was a comparison group. As with the readmission result, don’t imply SMS caused the increase unless your design supports that conclusion.
- **Project dates and independence:** Since this project overlaps with your Meridian role, make clear that it was independent and not employer work, if that is accurate. Be prepared to explain the data source, analysis, and your individual contribution.

### Community Health Survey

- **Survey-design and response-count bullet:** Clarify whether the 1,100 responses were complete responses, how residents were recruited, and what neighborhoods or population they represent. A survey can provide an estimate, but representativeness depends on the sampling and response process.
- **Translation and pilot bullet:** State what you personally did in the translation and pilot process, if you were responsible for those tasks. Twenty pilot participants may help identify issues, but don’t imply that this alone validated the survey.
- **Codebook bullet:** Clarify your role in creating the codebook and how its reuse was confirmed. If the follow-up survey used it with changes, distinguish reuse from unchanged adoption.

## Skills

- **Tools:** R and REDCap are relevant, but the resume doesn’t show what you can do in either tool. Add only specific capabilities you can demonstrate in an interview or work sample.
- **Methods:** The list includes regression and mixed-effects models, but the experience bullets don’t demonstrate them clearly. Connect these methods to real work or projects, and be prepared to explain model choice, assumptions, interpretation, and limitations. Given the survival-analysis bullet, make sure your stated methods accurately reflect your actual training and experience.

## Highest-priority changes

1. **Resolve or remove the median-survival claim.**
2. **Correct the description of the odd/even assignment design.**
3. **Correct the asthma project’s percentage calculation and remove unsupported causal wording.**
4. **Add enough study context—sample size, timeframe, denominators, and your specific contribution—to make the strongest metrics credible.**
5. **Remove generic promotional language and the personal details that aren’t needed for the roles you’re targeting.**

The fastest useful improvement is to verify the study designs and metric calculations before polishing wording. Those are more consequential than formatting because they are likely to draw direct technical questions.