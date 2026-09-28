## Highest-priority changes

1. **Remove or substantially correct the “best of 400 configurations” bullet.** Selecting the best backtest and treating its Sharpe as expected live performance signals severe multiple-testing bias and poor research judgment.
2. **Correct the Monte Carlo random-seed bullet.** Using the same seed on every worker can duplicate simulations and invalidate effective sample size unless independent substreams were created.
3. **Remove the order-book imbalance bullet from the Kaggle project.** It duplicates the internship result and appears unrelated to Kaggle, which creates a credibility problem.
4. **Clarify ambiguous performance claims.** The 35% return improvement, 0.4 Sharpe addition, and 7% QLIKE improvement need precise comparison bases and test conditions.
5. **Move the bakery role out of the main quantitative experience sequence.** It is valid work experience, but its current placement obscures your strongest qualifications.
6. **Fix the typo in “econometircs” and standardize spelling, punctuation, dates, and line wrapping.**

---

## Header

### Name
- No substantive change needed.

### Phone, email, portfolio
- Replace the generic portfolio URL with the actual link if this is not anonymized.
- Identify what the link leads to—GitHub, personal site, or code portfolio—through formatting or link text. Recruiters should not have to infer it.
- Add LinkedIn only if it is complete and consistent with the resume.
- Consider adding your city or region if location matters for the roles you are targeting.
- Ensure the links are clickable in the submitted PDF.

---

## Education

### Ph.D. line
- Change the degree status formatting so the degree and field are immediately scannable, with the expected completion date clearly attached to the degree.
- Use a consistent date style throughout; an en dash is more polished than a hyphen.
- Consider adding a dissertation area, advisor, or a short research-focus phrase if directly relevant to quantitative research.
- Verify whether “candidate” is institutionally accurate. Some universities reserve that term for students who have passed candidacy exams.

### B.S. line
- Add honors, GPA, or relevant distinctions only if they are strong and useful.
- If space becomes tight, this line can be compressed because the Ph.D. is now the primary credential.
- Confirm that no graduate degree or enrollment period is missing. The research-assistant role begins immediately after the B.S. but before the listed Ph.D., which may prompt questions.

---

## Experience structure

- For quantitative roles, place **Northpeak Capital first** despite the bakery role being more recent, or divide the section into relevant quantitative experience and additional experience.
- The current reverse-chronological order makes a reader encounter retail management before the strongest evidence of fit.
- Within Northpeak, lead with the strongest genuine research outcome, then validation, implementation, deployment, and presentation.
- Keep verb tense consistent: present tense for ongoing responsibilities and past tense for completed achievements.

---

## Sunrise Bakery

### Role heading
- Keep the role if it prevents an apparent employment gap or demonstrates ongoing work during the Ph.D.
- Move it to an additional-experience section or reduce it to less space for quantitative applications.
- Check whether full-time or part-time status should be shown, particularly because it overlaps with the Ph.D.

### Opening-shift/team bullet
- Change “labour” to the spelling convention used in the country where you are applying; the resume otherwise uses U.S. conventions.
- Quantify the budget outcome more precisely if possible—such as consistency, variance, or period covered.
- Remove the forced line break in the middle of the sentence. ATS systems and human readers both benefit from natural wrapping.
- The management scope is useful, but keep this bullet concise because it is not central to a quant application.

### Stock/waste bullet
- Clarify whether the decline from 12% to 7% means percentage points rather than percent.
- Add the time period over which the reduction occurred.
- If you can substantiate financial impact, include that metric rather than relying only on production waste.
- Clarify your contribution if supplier ordering was shared with others.

---

## Northpeak Capital

### Role heading
- No major change needed.
- If permitted, specify the desk, asset class, or strategy area in the title or nearby context.
- Ensure none of the metrics or strategy details violate confidentiality obligations.

### Risk-adjusted returns / position smoother bullet
- Define what “improved risk-adjusted returns by 35%” actually measures. It could refer to Sharpe, return per unit risk, or another internal metric.
- State the comparison baseline and evaluation period.
- Clarify whether the result is backtested, paper-traded, or live.
- “Position smoother” may be clear to specialists, but the bullet should make its portfolio function unambiguous without unnecessary jargon.
- Avoid leading with this claim if the methodology involved choosing the best of 400 configurations without a separate final test set.

### Tick-data validation bullet
- Keep the validation detail; it is highly relevant.
- Clarify what was purged and how the embargo related to the prediction horizon if space permits.
- Avoid an absolute claim that no leakage occurred unless you can defend every part of the pipeline. Describe the controls rather than asserting certainty.
- Specify whether the six years formed training, validation, and untouched testing periods.
- Remove the hard line break.

### Feature-store bullet
- Keep this bullet because it demonstrates reusable engineering impact.
- Clarify whether you designed the data model, implemented the pipeline, or both.
- Add scale or performance metrics if meaningful: instruments, data volume, refresh time, or reduction in research time.
- Explain the form of reuse more precisely if you can verify it.
- Check whether “feature store” is technically accurate rather than a general feature-generation library.

### Presentation/live-allocation bullet
- Keep the approval outcome; it demonstrates communication and business impact.
- Clarify whether approval was conditional and whether the allocation actually went live.
- Consider quantifying the allocation only if disclosure is allowed.
- Make the timing logically consistent with the internship dates and the phrase “next quarter.”
- Include commas consistently in the list of signal, capacity, and failure cases.

### 400 configurations / expected Sharpe bullet
- Remove this bullet in its current form.
- The process described is classic backtest overfitting: selecting the best performer from many configurations and reporting that result as expected live performance.
- If the actual process included nested validation, multiple-testing adjustment, deflated Sharpe, a locked holdout, or model-selection penalties, describe those controls instead.
- If it did not, do not present this as an accomplishment. Be prepared to discuss what you learned and how you would correct the methodology in an interview.
- Reconcile this bullet with the earlier claim about purged walk-forward validation. Together, they currently suggest leakage was controlled but selection bias was not.

### Order-book imbalance bullet
- This is probably your strongest technical result and should appear earlier within the internship.
- Clarify whether “added 0.4 Sharpe” means an increase in the total book’s Sharpe or the standalone signal’s Sharpe.
- State whether the 18 months were a genuinely untouched out-of-sample period.
- Clarify the post-cost assumptions, including fees and slippage, if defensible.
- Avoid implying causality beyond what the portfolio test establishes.
- Remove the duplicated version from the Kaggle section.

---

## Ridgeway University research role

### Role heading
- Verify the title and dates. “Graduate Research Assistant” begins before the listed Ph.D. program, so the chronology may look inconsistent.
- If the title was official, retain it but be ready to explain the appointment status.
- If the role was associated with another degree or predoctoral appointment, that context is currently missing.
- The role ends just before the Ph.D. starts, which is plausible, but the relationship should be clear.

### Monte Carlo bullet
- Correct this urgently.
- The same random seed on every worker can generate identical streams or duplicate runs, undermining the claimed 2,000-run study.
- Determine whether you actually used independent deterministic substreams, worker-specific seeds, or a parallel-safe random-number generator.
- Describe reproducibility without implying duplicated simulation paths.
- If identical paths were used, rerun the study correctly before retaining the result.
- The runtime improvement is strong, but validity matters more than speed.

### Variance-bound bullet
- Keep this bullet; it is strong evidence of theoretical ability.
- Clarify whether you are an author of the paper.
- Replace first-person phrasing with the same impersonal style used elsewhere.
- Verify the submission status and update it when it changes.
- Confirm that naming JASA is acceptable and accurate; do not imply endorsement merely from being under review.
- Add the paper title or a publication/preprint link elsewhere if publicly available.
- Be prepared to explain exactly which assumptions allow the log-factor improvement.

### Teaching bullet
- Decide whether teaching is important enough to keep in the main research role. It is useful, but less relevant than research for most quant positions.
- Clarify whether you created all 12 problem sets or contributed to them.
- Identify the source of the 4.8/5 rating and, if possible, the response basis.
- Consider shortening this before cutting stronger research content.

### R-package bullet
- Keep it; it combines implementation, statistical methods, and adoption.
- Add your ownership level and contribution if it was collaborative.
- Link the package through the header portfolio or a publications/software section.
- Clarify the download source and measurement period so the 3,000 figure is verifiable.
- Add testing, documentation, citation, or user-adoption evidence if stronger than raw download count.

---

## Projects

### Volatility project heading
- “Present” should be used only if the work is genuinely ongoing.
- If a working paper and seminar presentation already exist, state the current next step through the project status rather than leaving the timeline open-ended indefinitely.
- Consider linking the working paper or repository.
- Ensure the technology labels reflect the actual project; include other important tools only if materially used.

### QLIKE result bullet
- Keep the quantified result.
- Clarify whether the 7% figure is an average across indices, median improvement, pooled result, or another aggregation.
- Define the out-of-sample design and date range.
- State whether model and hyperparameter selection were completed without using the final test period.
- Be precise about whether all 30 indices improved or only the aggregate metric did.
- Avoid “beat” if the statistical evidence is mixed; the exact breadth of improvement matters.

### Diebold–Mariano bullet
- Correct the inference details if needed for multiple comparisons across 30 indices.
- Explain whether the 5% threshold was adjusted for multiplicity; otherwise, 24 significant results may be overstated.
- Check the Diebold–Mariano implementation for overlapping forecast horizons, serial correlation, and small-sample corrections.
- Define the two crisis periods by dates or named events.
- Clarify whether significance held in each crisis period independently or in pooled crisis observations.
- Remove the hard line break.

### Working-paper/seminar bullet
- Keep the dissemination evidence.
- Clarify whether you presented it personally.
- Consider adding a link if public.
- The page count is less important than the paper’s status, reproducibility, or feedback; remove it first if space is needed.
- Use consistent serial-comma punctuation in the list.

---

## Kaggle project

### Heading
- Name the specific competition if disclosure is possible.
- Add the final rank, percentile, medal, or score. Without an outcome, the project appears incomplete.
- Clarify your individual contribution within the team of three.
- If there was no strong placement, emphasize the validated methodological work but avoid overstating the project.

### Generic feature/model bullet
- This is too broad compared with the rest of the resume.
- Add the feature families, modeling decisions, or responsibility that differentiated your contribution.
- Include an outcome or remove the bullet if the following leakage bullet already captures the strongest contribution.
- Avoid merely listing routine modeling tasks that are already implied by the project title and skills.

### Validation-leakage bullet
- Keep this; it demonstrates sound experimental judgment.
- Clarify what the 0.02 gap measures.
- State whether the gap was reduced to near zero or merely reduced by 0.02.
- Explain why time-grouped folds matched the competition’s data-generating or test structure.
- Be careful with “leakage”: a validation mismatch is not necessarily information leakage. Use that term only if future or group information actually crossed folds.

### Futures-book Sharpe bullet
- Remove it from this project.
- It duplicates the Northpeak order-book result almost exactly.
- It appears unrelated to the Kaggle competition and could make readers suspect copy-paste inflation or double-counting.
- If it is actually a separate project, give it its own heading and clearly distinguish the data, market, period, and methodology.

---

## Skills

### Programming line
- Separate programming languages from platforms and infrastructure. Kafka is not a programming language.
- Order items by relevance and proficiency.
- Retain C++ only if you can comfortably handle technical questions and write/debug it in an interview.
- Consider whether Git, Linux, cloud tools, distributed computing, or relevant databases are more informative than a generic technology list.
- Avoid listing tools that are already obvious unless they strengthen keyword coverage.

### Methods line
- Correct the spelling of “econometrics.”
- Standardize capitalization: methods and software frameworks should follow a consistent convention.
- PyTorch belongs with software/frameworks rather than statistical methods.
- Expand this line to reflect the strongest evidence in the resume, such as market microstructure, time-series validation, high-dimensional statistics, Monte Carlo methods, or portfolio research—but include only areas you can defend deeply.
- “Bayesian inference” currently has no supporting evidence elsewhere; either substantiate it in the experience/projects or remove it.
- “Gradient boosting” is supported only by the generic Kaggle bullet, so make that project more specific if you retain the skill.

---

## Formatting and consistency

- Eliminate manual line breaks inside bullets; let the document wrap text naturally.
- Use one date format and one dash style throughout.
- Use consistent U.S. or British spelling based on the target market.
- Keep punctuation consistent at the end of all bullets.
- Aim for one page unless you add meaningful publications.
- If applying to quant research roles, consider a compact publications/research section for the JASA submission and working paper.
- Check every metric for auditability: comparison baseline, period, dataset split, costs, statistical treatment, and whether it was backtested or live.
- Make sure the strongest impression is **rigorous validation**, not simply high backtest performance.