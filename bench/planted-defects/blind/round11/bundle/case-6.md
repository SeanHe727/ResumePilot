# case-6

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its
weekly labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of
production.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s
futures signal.
- Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo
period, so no look-ahead information leaked into training.
- Wrote a feature store for 120 microstructure features with point-in-time joins, which the
research team reused in two later signal projects.
- Presented the signal, its capacity estimate and failure cases to the portfolio managers, who
approved a small live allocation for the next quarter.
- Selected the smoother’s parameters from 400 backtested configurations and reported the best
one’s Sharpe as the expected live Sharpe.
- Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4
Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel
with the same random seed on every worker.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous
bound by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets
and earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation with shrinkage
and factor models, downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Tested significance with Diebold-Mariano tests across the 30 indices; the forecast gain held
at the 5% level on 24 of them and in both crisis periods.
- Wrote up the method, robustness checks and results as a 12-page working paper, which was
presented at the department’s financial econometrics seminar.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Engineered features and trained gradient-boosting models for a market prediction
competition.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between
local validation and leaderboard scores.
- Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested
over 18 months out of sample.
SKILLS
Programming: Python, R, SQL, C++, Kafka
Methods: time-series econometircs, Bayesian inference, gradient boosting, PyTorch
```

## Reviewer 1

Overall, the resume has strong quantitative experience, but it currently raises several credibility and presentation concerns. The biggest issues are duplicated accomplishments, possible data-leakage or selection-bias claims, vague metrics, and a few technical inaccuracies.

## Header

- **Verify the code URL is real and professional.** A placeholder-style domain will undermine the application if this is the actual version.
- **Make the link clickable in the PDF.** Recruiters should be able to reach your code without copying the URL.
- **Consider adding LinkedIn only if it is complete and consistent with the resume.** Do not add it simply to fill space.

## Education

### Ph.D. candidate in Statistics

- **Add a research focus, dissertation topic, or relevant specialization if targeting quantitative research roles.** The degree alone does not show whether your work is relevant to markets, machine learning, time series, or statistical theory.
- **Make sure the expected graduation date is current.** An outdated expected date can create doubts about your status.
- **Consider adding selected relevant coursework only if it fills a gap.** For example, this could help if your research bullets do not clearly establish time-series, optimization, or machine-learning expertise. Do not add generic coursework.

### B.S. in Mathematics

- **Consider omitting the B.S. if space is tight.** Once the Ph.D. is prominent, the undergraduate degree is less important unless it supports a particular application.
- **Add honors, GPA, or distinctions only if they are genuinely strong and relevant.** Otherwise, the current entry is adequate.

## Experience

### Sunrise Bakery — Assistant Store Manager

This role is unrelated to the rest of the resume, but because it is current, leaving it out could create an unexplained employment gap.

#### “Managed opening shifts and a team of 6 bakers and cashiers…”

- **Clarify the scope of the team and your responsibility.** It is not fully clear whether six people were under your direct supervision or simply present on opening shifts.
- **Add a timeframe or operating scale if available.** The budget result is more persuasive if the reader knows whether it applied weekly, monthly, or across a particular period.
- **Keep this bullet only if you need to demonstrate management experience or explain current employment.** For a quant-focused resume, it should receive much less space than the technical work.

#### “Ran daily stock counts and supplier orders…”

- **Define “unsold bread.”** Specify whether this means percentage of units produced, revenue, or inventory value. The current wording is understandable but not fully precise.
- **Add the period over which the reduction occurred.** A change from 12% to 7% is meaningful, but the reader needs to know whether this happened over two weeks or six months.
- **Retain this because it contains a clear operational improvement.** It is stronger than a generic description of bakery duties.

### Northpeak Capital — Quantitative Research Intern

This is the strongest section, but it needs technical tightening.

#### “Improved risk-adjusted returns by 35% with a cost-aware position smoother…”

- **Specify the risk-adjusted metric and comparison period.** “Risk-adjusted returns” could mean Sharpe ratio, information ratio, return per unit of volatility, or something else.
- **Clarify the baseline and whether the improvement was in-sample, validation, or out-of-sample.** Without that context, the 35% figure is difficult to evaluate.
- **Explain the term “position smoother” elsewhere in the resume or portfolio.** It may be familiar to specialists but is not universally clear.
- **Avoid presenting a percentage improvement without the underlying values if space permits.** Quantitative readers will want to know whether this was a meaningful change or a small-metric effect.

#### “Validated the signal on 6 years of tick data…”

- **Specify the validation structure more concretely.** The use of purged walk-forward splits and an embargo is a strong point; the resume should make clear that these were used to address overlapping observations and leakage.
- **State whether the six years were fully out of sample or divided into training, validation, and test periods.** “Validated” alone does not establish that the result was genuinely out of sample.
- **Check that the embargo length was appropriate for the forecast horizon.** Technical interviewers may ask about this.

#### “Wrote a feature store for 120 microstructure features…”

- **Add the technologies used if they are relevant.** The accomplishment would be more useful if the resume connected it to the programming and infrastructure skills listed below.
- **Clarify what “reused” means.** Adoption in two later projects is good, but the reader may want to know whether this reduced research time, prevented point-in-time errors, or standardized data processing.
- **Check whether “feature store” accurately describes the system.** If it was a research data library or pipeline rather than a production feature store, the terminology may invite unnecessary scrutiny.

#### “Presented the signal, its capacity estimate and failure cases…”

- **Keep this bullet.** It demonstrates communication with portfolio managers, understanding of capacity, and influence on investment decisions.
- **Clarify the status and size of the live allocation if you can do so without violating confidentiality.** “Small live allocation” is credible but vague.
- **Make sure the allocation actually occurred, rather than merely being approved.** The current wording distinguishes approval from deployment, which is good; do not imply realized live performance unless you have it.

#### “Selected the smoother’s parameters from 400 backtested configurations…”

- **Change this substantially or remove it.** Selecting the best configuration from 400 backtests and then calling its Sharpe the “expected live Sharpe” is a serious selection-bias problem.
- **Do not describe the best backtest result as an expected live result unless you used a genuinely untouched test set or another correction for multiple testing.**
- **If the analysis was intentionally designed to demonstrate overfitting or model-selection bias, explain that purpose.** Otherwise, this bullet will make the preceding performance claims less credible.

#### “Built a short-horizon order-book imbalance signal…”

- **Resolve the relationship between this bullet and the identical-looking bullet in the Kaggle project.** The same signal, same 18-month period, and same 0.4 Sharpe improvement appearing in two places looks like double counting or accidental duplication.
- **Keep the accomplishment in only one section unless the two efforts were genuinely different.** If they were different, distinguish their datasets, models, time periods, or roles very clearly.
- **Define what “added 0.4 Sharpe to the desk’s book” means.** It could mean an increase in the portfolio Sharpe ratio, a standalone signal Sharpe, or an incremental contribution under a particular portfolio construction method.
- **Specify that the result was after transaction costs and genuinely out of sample only if those conditions are accurate and defensible.**

### Ridgeway University — Graduate Research Assistant

#### “Cut a 2,000-run Monte Carlo study from 3 days to 5 hours…”

- **Correct or clarify the random-seed methodology.** Using the same random seed on every worker can produce identical or correlated random streams, compromising the independence of simulations. You should indicate that reproducibility was maintained with independent, properly managed random streams.
- **Keep the speedup result, but identify the computational approach or environment if relevant.** Parallelization alone is useful, but the technical implementation would make it more credible.
- **Check whether the 2,000 runs were statistically equivalent before and after the change.** The resume should not imply a speed improvement if the simulation design changed.

#### “Derived a variance bound for a sparse regression estimator…”

- **Make the mathematical claim more precise.** “Tightens the previous bound by a log factor” is potentially ambiguous: it could mean removing a logarithmic factor, reducing its exponent, or improving a constant.
- **Clarify your authorship and the manuscript’s status.** Being “Section 3 of a paper under review” is not the same as being published. Make sure the paper’s authorship and journal status are represented accurately.
- **Consider separating publications or manuscripts into their own section if this research is central to your applications.** That would make the contribution easier to find.

#### “Taught weekly recitations for 60 students…”

- **Keep this if applying to academic, research, or teaching-oriented roles.** It demonstrates communication and responsibility.
- **Clarify whether the 4.8/5 rating came from a formal university evaluation and how many responses it represents.** Without the response count, the rating may seem anecdotal.
- **Consider shortening or removing it for highly technical industry applications if space is limited.** It is solid, but less relevant than your research and quantitative-finance work.

#### “Released an open-source R package…”

- **Add the package name and a link if it is publicly available.** This is one of the most verifiable and valuable accomplishments on the resume.
- **Clarify what the download count represents.** Repository downloads, package-manager downloads, and unique users are different measures.
- **Mention testing, documentation, or maintenance only if those were substantial.** The current line establishes impact, but not software quality.

## Projects

### Volatility Forecasting Study

#### “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%…”

- **Specify the evaluation period and forecast horizon.** These are essential for interpreting volatility-forecasting results.
- **Clarify how the 30 indices were split and whether model choices were made using data separate from the reported test results.**
- **Explain whether the comparison used equal weighting across indices or another aggregation method.**
- **Check that the benchmark implementation is standard and correctly specified.** Quantitative readers may scrutinize the HAR-RV comparison.

#### “Tested significance with Diebold-Mariano tests…”

- **Address multiple testing across 30 indices.** Reporting significance for 24 individual tests at the 5% level can be misleading without a multiple-comparison procedure or a clearly stated interpretation.
- **Define the crisis periods.** “Both crisis periods” is too vague unless the periods are obvious from the paper.
- **Clarify whether the tests used a correction for serial correlation and whether the loss differential was handled appropriately.** This matters for forecast-comparison tests.
- **Keep the result, but only if the statistical interpretation is defensible.** The current wording may invite questions about p-value inflation.

#### “Wrote up the method, robustness checks and results…”

- **Add a link to the working paper or presentation materials if publicly available.**
- **Clarify the seminar’s selectivity only if it is meaningful and verifiable.** The presentation itself is useful; unsupported prestige claims are not necessary.
- **Consider moving this project into a research or publications section if the working paper is an important part of your profile.**

### Kaggle Market Prediction Competition

#### “Engineered features and trained gradient-boosting models…”

- **Replace this with a concrete competition result or remove it.** As written, it is a generic activity description and does not show the outcome, ranking, score, or scale of the work.
- **Include your individual contribution rather than only broad team activity.** “Team of 3” is helpful, but the reader needs to understand what you personally built.

#### “Cut validation leakage by switching to time-grouped folds…”

- **Clarify what the 0.02 gap represents and why reducing it demonstrates improvement.** A smaller validation-to-leaderboard gap is not automatically better if the new validation score also declined.
- **Be precise about the source of the leakage.** Explain whether it came from repeated entities, temporal overlap, grouped instruments, or another structure.
- **Make sure the competition’s evaluation design supports the claim.** Kaggle leaderboard behavior can be noisy, so do not overstate the result.

#### “Added 0.4 to the Sharpe ratio of a futures book…”

- **Remove this unless it is demonstrably distinct from the Northpeak accomplishment.** In its current form, it appears duplicated.
- **Check the chronology.** The project ended in June 2023, while the internship occurred in 2025. If this was the same signal or same backtest, the dates create a serious credibility problem.
- **Do not use “out of sample” without identifying the training, validation, and test periods.** This is especially important because the line makes a strong investment-performance claim.

## Skills

### “Programming: Python, R, SQL, C++, Kafka”

- **Separate programming languages from tools and infrastructure.** Kafka is not a programming language; placing it in the same category makes the skills section look less precise.
- **Remove skills that you cannot support elsewhere in the resume or code portfolio.** SQL, C++, and Kafka do not appear in the experience bullets, so the reader has no evidence of proficiency.
- **Order skills by relevance and strength.** Put the technologies most relevant to the target role first.
- **Consider adding libraries or frameworks only when they are genuinely used in the listed work.** For example, your projects appear to involve PyTorch, but the experience section does not show the surrounding data or modeling stack.

### “Methods: time-series econometircs…”

- **Correct the spelling of “econometrics.”** This is a visible error in a technical skills section.
- **Use consistent category logic.** Bayesian inference and gradient boosting are methods, while PyTorch is a framework; PyTorch should not be mixed with methods.
- **Ensure every listed method is demonstrated somewhere in the resume or portfolio.** Otherwise, the section can appear inflated.
- **Consider adding statistical validation, forecasting, optimization, or market-microstructure methods only if you can substantiate them.** Your existing experience appears to support several of these, but the list should reflect actual depth rather than keyword coverage.

## Highest-priority changes

1. **Remove or fix the duplicated order-book imbalance claim.**
2. **Correct the parameter-selection bullet that equates the best of 400 backtests with expected live Sharpe.**
3. **Fix the Monte Carlo seed statement so it does not imply correlated or invalid simulations.**
4. **Correct “econometircs.”**
5. **Add precise definitions, baselines, time periods, and out-of-sample methodology to the performance claims.**
6. **Replace the generic Kaggle bullet with a concrete result or remove the project.**
7. **Add links to the package, working paper, and relevant code.**
8. **Decide whether the bakery role belongs under main experience or a less prominent additional-experience section.**

## Reviewer 2

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

## Reviewer 3

7 errors, 14 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> added 0.4 Sharpe

**Problem**
[Error] The same order-book imbalance result appears to be claimed in both the Northpeak and Kaggle entries.

**Why**
Both bullets report a 0.4 Sharpe increase over 18 months using an order-book imbalance signal, so a reader may read them as one achievement presented twice. That weakens credibility and uses space that could establish a distinct result.

**How to change it**
Remove the Kaggle duplicate or clarify the distinct books, periods, and results in the two entries.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The experience order gives an unrelated retail role prominence before the quantitative research role.

**Why**
A reader scanning the page first sees Sunrise Bakery rather than Northpeak Capital, so the résumé's initial direction appears operational or retail rather than quantitative. The quantitative internship should establish the target profile, while the bakery role can remain as supporting experience.

**How to change it**
Move Northpeak Capital above Sunrise Bakery, move Sunrise Bakery to the end of EXPERIENCE, and reduce it to a short supporting entry or one line.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Error] The claim that stock counts and supplier orders cut unsold bread overstates what the before-and-after figures establish.

**Why**
The figures are arithmetically consistent: unsold bread fell by 5 percentage points, or about 41.7% relative to the original rate. But the comparison does not show that the listed activities caused the reduction, because demand, production, seasonality, pricing, or other changes could explain it.

**How to change it**
Replace “cutting” with wording that states unsold bread fell during the period; if the activities were causally tested, specify [the comparison or method used].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement does not identify its comparison or the return measure.

**Why**
A reader cannot tell whether 35% is relative to the unsmoothed signal, a prior desk process, or another benchmark. They also cannot tell whether the measure is Sharpe, Sortino, or another risk-adjusted metric, so the headline result is difficult to interpret.

**How to change it**
Replace or qualify “risk-adjusted returns” with [the specific metric], and state the baseline and comparator, if accurate.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so no look-ahead information leaked into training.

**Problem**
1. [Error] Purged walk-forward splits and an embargo period do not establish that no look-ahead information entered training.
2. [Important] The validation activity is reported without its decision-relevant result.

**Why**
1. Those methods can address leakage from overlapping labels and temporal proximity, but they do not rule out faulty timestamps, feature construction, data revisions, or other implementation errors. The absolute claim is therefore broader than the evidence stated.
2. A reader can see that six years of tick data and rigorous splits were used, but cannot tell whether the signal survived validation, improved on a baseline, or was rejected. The process sounds careful without showing what it established.

**How to change it**
1. Limit the claim to preventing leakage from overlapping labels and temporal proximity, or add [evidence that feature construction and data handling were also point-in-time correct].
2. Add [the out-of-sample performance versus the baseline] or [the decision enabled by the validation] after the validation method.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The capacity estimate and live allocation are too vague to show the scale of the approval.

**Why**
The reader can see that portfolio managers approved a test, but cannot judge the opportunity's size or the evidence behind the approval. “Small” weakens an otherwise concrete deployment outcome.

**How to change it**
Replace “capacity estimate” or “small live allocation” with [the capacity in dollars or contracts] or [the allocation size], if accurate.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] Selecting the best result from 400 backtested configurations creates selection bias, so its Sharpe is not a valid expected live Sharpe.
2. [Important] The selected configuration’s backtest Sharpe is presented as an expected live Sharpe without evidence supporting that forward-looking interpretation.
3. [Important] The parameter search is reported without showing what the selection enabled or improved.

**Why**
1. The winning configuration benefits from favorable sampling noise among the 400 trials. Without untouched validation, nested testing, or a multiple-selection correction, presenting that backtest Sharpe as a live expectation makes the estimate sound more predictive than the evidence supports.
2. The line does not distinguish the in-sample best backtest metric from a holdout or realized-live estimate. Without a holdout, benchmark, or live anchor, a reader may overread the reported Sharpe as predictive.
3. A reader sees optimization effort but cannot tell whether it produced an out-of-sample improvement, supported deployment, or changed a portfolio decision. The number of configurations therefore signals work rather than impact.

**How to change it**
1. Describe it as the selected configuration's backtest Sharpe; if available, report [an untouched validation or live-test Sharpe] as the expected live estimate.
2. Replace “expected live Sharpe” with [holdout or live Sharpe] and state the comparison if that evidence exists; otherwise identify it as the best backtested Sharpe.
3. Add [the resulting out-of-sample improvement] or [the deployment decision] after the selection step, if accurate.

> capacity estimate

**Problem**
[Important] The Northpeak entry is overloaded with headline results, validation, infrastructure, communication, and parameter-selection details.

**Why**
The entry contains several strong forms of evidence, but their number makes the central quantitative-research story harder to scan. A reader may miss the most important contribution because results and supporting process details compete for attention.

**How to change it**
Keep the strongest research result and its validation, then shorten or remove secondary infrastructure, presentation, and parameter-selection detail.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Error] Using the same random seed on every worker duplicates random sequences instead of producing independent Monte Carlo runs.

**Why**
Identical seeds typically cause workers to generate identical or overlapping simulations, so the claimed 2,000 runs do not provide the intended independent Monte Carlo sample. Parallel Monte Carlo requires distinct, nonoverlapping random-number streams or properly assigned substreams.

**How to change it**
Replace the same-seed method with distinct, nonoverlapping random-number streams or substreams for each worker, and remove the repeated wording in “running the runs.”

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Error] The variance-bound bullet uses a first-person pronoun and sentence-like trailing wording.
2. [Important] The proof comparison does not show the bounds or specify the exact logarithmic improvement.

**Why**
1. “My proof” breaks the résumé's impersonal bullet style. The long clause about the paper also buries the result and makes the line less compact.
2. A mathematical reader can tell that the result improves on prior work, but cannot quickly judge the magnitude of the contribution. The paper status supports credibility, not the size of the bound improvement.

**How to change it**
1. Replace “my proof” with “the proof,” and move or shorten the paper-status phrase so the bound improvement appears directly after the action.
2. Replace or supplement “by a log factor” with [the prior and resulting bounds, or the exact logarithmic improvement].

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] The 7% QLIKE improvement does not say how the result was aggregated across the 30 indices.

**Why**
A reader cannot tell whether 7% is an average, median, pooled result, or improvement observed in every index. That makes the headline figure harder to interpret and reproduce.

**How to change it**
Add [how the 7% was aggregated across the 30 indices], or replace it with [the clearest available per-index summary].

> Tested significance with Diebold-Mariano tests across the 30 indices; the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The significance claim does not support the statement that the gain held in both crisis periods, and “held at the 5% level” is imprecise.
2. [Polish] The phrase “both crisis periods” does not identify the periods tested.

**Why**
1. Diebold-Mariano tests across the indices support index-level predictive-loss differences, but they do not by themselves establish separate crisis-period results. The 24 significant results are also nominal 5% results unless multiple testing is addressed.
2. A reader cannot judge the relevance or coverage of the stress-test result without knowing which crisis windows were used. The 24-of-30 result is clear, but this second validation claim is not.

**How to change it**
1. State that the gain was statistically significant at the nominal 5% level for 24 indices, and report crisis-period results only if separate crisis-period tests or comparisons were run, including [any multiple-testing adjustment].
2. Replace “both crisis periods” with [the names or date ranges of the two crisis periods], if those periods are important evidence.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The feature-engineering and modeling bullet gives no result, performance measure, or specific feature work.

**Why**
A reader can see that features were engineered and gradient-boosting models were trained, but cannot judge whether the work improved a score, ranking, trading result, or another competition outcome. “Engineered features” also does not show the technical work that demonstrates skill.

**How to change it**
Replace some generic activity wording with [the specific feature work] and add [a verified outcome or metric compared with a baseline], such as [an improvement or placement].

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The time-grouped-fold result does not establish that leakage caused the original score gap, and the gap's metric is unspecified.

**Why**
Time grouping can reduce temporal leakage, but it may still permit future-to-past training or overlapping-label contamination, and the gap could reflect regime differences, leaderboard noise, preprocessing, or model selection. The reader also cannot tell which score changed or whether 0.02 is an absolute metric-point difference.

**How to change it**
State that the local-validation/leaderboard gap narrowed by 0.02, name [the competition metric], and claim reduced leakage only if [split direction, label horizon, feature timing, and required purging or embargo were verified].

> Added 0.4 to the Sharpe ratio

**Problem**
[Important] The final Kaggle bullet shifts from the competition to a futures-book result that duplicates the quantitative-research narrative.

**Why**
The first two bullets establish a competition project, but the final bullet changes subject without explaining how it belongs to that project. It also repeats the Northpeak signal result, making the competition entry look less focused.

**How to change it**
Remove the futures-book bullet or substantially shorten it; keep it with the Northpeak research narrative unless [the Kaggle result was a distinct achievement].

## Skills

> econometircs

**Problem**
[Error] The Methods skills line contains the misspelling “econometircs.”

**Why**
A spelling error in a technical skill can make the reader question the care taken with the rest of the application. It also makes the skill harder to recognize in a keyword search.

**How to change it**
Replace “econometircs” with “econometrics.”

> C++

**Problem**
[Important] The skills list claims C++, Kafka, and Bayesian inference without evidence elsewhere in the résumé.

**Why**
A reader cannot connect these skills to a project, job, or research result, so they may appear unsubstantiated. Unsupported skills dilute the stronger evidence for Python, PyTorch, R, and quantitative research.

**How to change it**
Add evidence of C++ use, Kafka use, and Bayesian modeling or inference, or remove each unsupported skill.

## Reviewer 4

# Resume Review

## Overall assessment

This is a strong quantitative-research resume in terms of technical substance, but it currently has three serious problems:

1. **Credibility risk:** One bullet openly describes selecting the best Sharpe from 400 configurations and presenting it as expected live Sharpe. That reads as backtest overfitting and could undermine the rest of the resume.
2. **Duplication:** The order-book imbalance result appears in both the Northpeak internship and the Kaggle project, almost identically.
3. **Target-role ambiguity:** The resume points toward quantitative research, but the summary is absent, the skills section is thin, and the current bakery role is visually prominent. A recruiter must infer the intended role rather than being told immediately.

The underlying experience is good enough for quantitative research, quantitative developer, or financial machine-learning roles, but the document needs tighter prioritization and a more careful presentation of validation methodology.

---

# Section-level changes

## Header

### Contact information

**Change:** Add a location or clarify whether you are open to relocation, if relevant. Consider whether the code-link label makes its purpose obvious.

**Why:** Quantitative-research recruiters generally expect a location, and a generic code URL gives no indication whether it contains research code, publications, or unrelated projects.

**Change:** Verify that the code site contains projects corresponding to the claims in the resume, especially the feature store, volatility forecasting, and R package work.

**Why:** The resume makes unusually specific technical claims. A technical reviewer may check the link.

---

## Education

### Ridgeway University — Ph.D. candidate in Statistics

**Change:** Make the research area or specialization visible near the degree.

**Why:** “Ph.D. candidate in Statistics” is relevant but broad. The rest of the resume shows statistical learning, time series, volatility forecasting, and financial econometrics. Those areas should be immediately connected to the degree.

**Change:** Clarify whether the Ph.D. is ongoing despite the graduate research assistantship ending in August 2021.

**Why:** The dates create a potential question: the Ph.D. begins in September 2021, but the listed university research role ends in August 2021. This may be correct, but the timeline currently makes the relationship between the program and the research lab unclear.

### Ridgeway University — B.S. in Mathematics

**Change:** Keep this only if needed for completeness or if the institution is a meaningful credential. Give the Ph.D. more visual emphasis.

**Why:** For quantitative research roles, the current doctoral program is much more important than the undergraduate degree. The undergraduate entry should not compete with it for attention.

---

# Experience

## Sunrise Bakery — Assistant Store Manager

### “Managed opening shifts and a team of 6 bakers and cashiers…”

**Change:** Keep this role for employment continuity, but reduce its visual and bullet-level prominence if applying to quantitative roles.

**Why:** It demonstrates operations management and responsibility, but it is not directly relevant to quantitative research. Its current placement above the most relevant technical experience may cause a quick reader to wonder whether you are primarily pursuing retail operations.

**Change:** Make sure “weekly labour budget” uses spelling consistent with the rest of the resume and target market.

**Why:** The resume otherwise uses US conventions. Inconsistent spelling can look careless, especially in an application to a detail-oriented firm.

**Change:** Quantify the budget outcome if you have a defensible figure; otherwise avoid giving this bullet more space than the technical roles.

**Why:** The bullet states that you kept the store within budget but does not show the scale or result. It is less persuasive than your other quantified achievements.

### “Ran daily stock counts and supplier orders…”

**Change:** Keep only if you need to demonstrate current employment or operational ownership. Place less emphasis on it than on finance and research work.

**Why:** The reduction from 12% to 7% is concrete and credible, but the achievement is unrelated to the target quantitative domain. It should not displace relevant research evidence.

**Change:** Clarify whether the percentages refer to unsold units, revenue, or production volume if there is any possible ambiguity.

**Why:** “12% to 7% of production” is understandable, but operational metrics need a clearly defined denominator.

---

## Northpeak Capital — Quantitative Research Intern

This is the strongest section and should remain the centerpiece of the resume.

### “Improved risk-adjusted returns by 35%…”

**Change:** Define the exact metric behind “risk-adjusted returns,” the comparison baseline, and whether the result is in-sample, validation, or out-of-sample.

**Why:** “Risk-adjusted returns” is vague, and a 35% improvement is a high-impact claim that will attract scrutiny. The reader needs to know whether this means Sharpe ratio, return per unit of volatility, or another measure.

**Change:** State the costs, constraints, and evaluation period associated with the result if they are not already clear elsewhere.

**Why:** A trading result is only meaningful when the reader knows whether transaction costs, capacity, turnover, and realistic execution assumptions were included.

### “Validated the signal on 6 years of tick data…”

**Change:** Keep this bullet and make it one of the first bullets in the internship.

**Why:** This is one of the most valuable claims in the resume. Purged walk-forward splits and an embargo period signal awareness of leakage and time-series validation, which are central to quantitative research.

**Change:** Clarify the relationship between the six years of data, training windows, validation windows, and the final test period.

**Why:** “Validated on six years” is not enough to establish that the result was genuinely out of sample. A technical reviewer will want to know how the data was partitioned.

### “Wrote a feature store for 120 microstructure features…”

**Change:** Keep this bullet. Add the production or research workflow impact if you can substantiate it, such as reproducibility, reduced feature-generation time, or reduced point-in-time errors.

**Why:** This shows platform-building ability rather than only model experimentation. Reuse by two later projects is useful evidence of adoption, but the bullet could better establish why the feature store mattered.

**Change:** Ensure “point-in-time joins” is technically accurate for the implementation.

**Why:** This is a strong domain-specific phrase, but it invites technical questioning about timestamp handling, data revisions, corporate actions, and leakage controls.

### “Presented the signal…”

**Change:** Keep this bullet, but distinguish clearly between research approval and actual deployment or trading.

**Why:** Approval for a small live allocation is a valuable credibility signal, but the current wording may be interpreted as evidence of realized live performance when it only establishes authorization.

**Change:** Include the size, duration, or status of the live allocation only if those details are permitted and verifiable.

**Why:** Without deployment scale or outcome, the claim demonstrates communication and internal trust but not necessarily production success.

### “Selected the smoother’s parameters from 400 backtested configurations…”

**Change:** Remove this bullet or substantially change its role in the resume by presenting it as a methodological limitation or model-selection problem, not as a positive achievement.

**Why:** In its current form, this is the most damaging line on the resume. Selecting the best configuration from 400 backtests and calling its Sharpe the expected live Sharpe is classic multiple-testing or backtest-overfitting risk. A quantitative researcher may conclude that the reported performance is unreliable.

**Change:** If the selection procedure was corrected later, describe the correction elsewhere in the experience or project material, but do not present the uncorrected best result as expected performance.

**Why:** The issue is not merely wording. It concerns statistical validity. This bullet can cause a technical reviewer to discount the other performance claims.

### “Built a short-horizon order-book imbalance signal…”

**Change:** Keep the achievement in only one location. It should probably remain under Northpeak if it was performed during the internship.

**Why:** This is a strong, domain-relevant result, but duplicating it under the Kaggle project makes the resume look padded and raises uncertainty about where the work was actually done.

**Change:** Verify that “added 0.4 Sharpe” has a precisely defined comparison, period, and cost model.

**Why:** Sharpe improvements are highly sensitive to annualization, portfolio construction, turnover, leverage, and transaction-cost assumptions. The claim needs to be defensible in an interview.

**Change:** Avoid presenting the same result as both an internship achievement and a competition achievement unless the two efforts are genuinely separate.

**Why:** The current duplication could be interpreted as double-counting one project or misrepresenting ownership.

---

## Ridgeway University — Graduate Research Assistant

### “Cut a 2,000-run Monte Carlo study from 3 days to 5 hours…”

**Change:** Keep this bullet, but clarify whether the speedup came from parallelization alone or also from hardware, code, algorithm, or implementation changes.

**Why:** It demonstrates computational efficiency, but the phrase “same random seed on every worker” deserves careful treatment. Using the identical seed on every worker may create correlated or duplicate random streams depending on the implementation.

**Change:** Verify that the reproducibility claim is statistically and technically correct.

**Why:** A technical reviewer may question whether identical seeds preserve independent Monte Carlo draws. This is a potential credibility issue.

### “Derived a variance bound for a sparse regression estimator…”

**Change:** Keep this as a high-value research bullet, but clarify your authorship and the status of the JASA paper.

**Why:** The mathematical contribution is impressive, but “my proof” may overstate ownership if the paper has multiple authors. The resume should make individual contribution and publication status unambiguous.

**Change:** Make sure the paper is explicitly identified as under review rather than accepted or published.

**Why:** “Under review at JASA” is appropriate if accurate. Do not allow formatting elsewhere to imply publication.

**Change:** Explain the significance of the log-factor improvement only if a technical audience is expected.

**Why:** For quant research roles, the result signals mathematical depth. For less technical screening, the current wording may be difficult to interpret, so it should be balanced by more obviously applied accomplishments elsewhere.

### “Taught weekly recitations for 60 students…”

**Change:** Keep this only if applying to research, academic, or highly technical roles where communication and teaching matter. Otherwise reduce its prominence.

**Why:** It demonstrates communication, responsibility, and technical explanation, but it is less relevant than your modeling, validation, and software work.

**Change:** Verify that the 4.8/5 rating is based on a meaningful number of responses and that the institution permits its use.

**Why:** Course evaluations can be viewed as weak evidence if the response count is not known.

### “Released an open-source R package…”

**Change:** Keep this bullet and consider giving it more prominence.

**Why:** This is one of the strongest credibility signals on the resume: independent software, a technically relevant method, and measurable adoption.

**Change:** Clarify whether the 3,000 downloads are package downloads, unique users, or another platform metric.

**Why:** Adoption metrics are persuasive only when their meaning is clear. A technical reviewer may distinguish downloads from active use or external citations.

**Change:** Include evidence of maintenance, documentation, tests, or external users if available.

**Why:** Those details would establish software quality and sustained adoption rather than one-time release activity.

---

# Projects

## Volatility Forecasting Study

This is a highly relevant project and should remain prominent.

### “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%…”

**Change:** Keep this bullet, but specify the data period and ensure “out-of-sample” is used accurately.

**Why:** The comparison is highly relevant to financial econometrics. However, a reviewer will want to know whether the 30 indices were evaluated over a genuinely untouched test period and whether model choices were made before seeing those results.

**Change:** Clarify whether the 30 indices were treated as separate series, pooled, or used in a cross-sectional training setup.

**Why:** That distinction affects how generalizable the result is and how much information may have been shared across assets.

**Change:** Add the economic or operational relevance only if supported by the research design.

**Why:** A lower forecast loss does not automatically imply trading value. Do not let the bullet imply trading performance unless the study tested it.

### “Tested significance with Diebold-Mariano tests…”

**Change:** Keep this bullet, but verify whether the multiple-index testing procedure accounts for multiple comparisons and cross-sectional dependence.

**Why:** Reporting significance for 24 of 30 indices is useful, but a technical reviewer may ask whether the 5% threshold was adjusted and whether the tests are independent.

**Change:** Clarify what “both crisis periods” means and whether those periods were pre-specified.

**Why:** Post hoc selection of crisis periods could weaken the claim. Pre-specified evaluation periods are more credible.

### “Wrote up the method…”

**Change:** Keep this as supporting evidence, but make the working-paper and seminar status explicit and consistent.

**Why:** It demonstrates communication and research maturity. It should not be confused with peer-reviewed publication.

**Change:** Consider whether the 12-page length adds value.

**Why:** Page count is less persuasive than the paper’s availability, technical quality, or seminar audience. Keep the fact only if it signals substantial work rather than padding.

---

## Kaggle Market Prediction Competition

### “Engineered features and trained gradient-boosting models…”

**Change:** Add the competition result, ranking, or measurable outcome if one exists.

**Why:** As written, this is a generic activity statement. It does not show how well the work performed or what you contributed relative to the team.

**Change:** Clarify your individual contribution within the team of three.

**Why:** Team projects require ownership boundaries. This is especially important because another bullet duplicates work listed under Northpeak.

### “Cut validation leakage by switching to time-grouped folds…”

**Change:** Keep this bullet, but explain whether the change improved leaderboard performance, reduced the validation-to-leaderboard gap, or both.

**Why:** This is a strong methodological point. The current claim shows a 0.02 gap closing, but the reader needs to understand whether the resulting validation estimate became more realistic.

**Change:** Ensure “leakage” is technically accurate and not simply a change in split strategy.

**Why:** Time-grouped folds can reduce temporal leakage, but the exact source of leakage should be clear if questioned.

### “Added 0.4 to the Sharpe ratio…”

**Change:** Remove this bullet from the project unless it represents a separate result from the Northpeak work.

**Why:** It appears to duplicate the internship bullet almost exactly. This is the clearest structural problem in the resume.

**Change:** If it is genuinely separate, distinguish the data, period, strategy, ownership, and evaluation setup.

**Why:** Without those distinctions, a reviewer may conclude that one achievement has been counted twice.

---

# Skills

## Programming

**Change:** Put the most role-relevant tools first and distinguish regularly used tools from merely familiar tools.

**Why:** Python, SQL, and C++ are likely more important for quantitative research than Kafka unless the target role specifically involves data infrastructure or streaming systems.

**Change:** Add relevant libraries and tooling only if you can discuss them technically.

**Why:** A quantitative recruiter may expect common numerical, machine-learning, data, and backtesting tooling. However, listing tools you cannot defend is worse than omitting them.

**Change:** Consider adding version control, testing, Linux, cloud, or distributed-computing tools if they are genuinely part of your experience.

**Why:** The experience bullets imply research infrastructure and parallel computation, but the skills section does not currently expose that engineering capability.

## Methods

**Change:** Correct the spelling of “time-series econometrics.”

**Why:** The current spelling error is especially damaging because it is a core target-domain method.

**Change:** Group methods by type rather than presenting a short undifferentiated list.

**Why:** Time-series econometrics, Bayesian inference, gradient boosting, and PyTorch represent different categories. Clear grouping helps both ATS parsing and human scanning.

**Change:** Add the specific methods demonstrated in the experience if accurate, such as purged walk-forward validation, embargoed validation, volatility modeling, market microstructure, feature engineering, and statistical testing.

**Why:** These are stronger signals for quantitative research than generic “gradient boosting.” They are already evidenced in the experience section and should be easier to find.

**Change:** Do not add “quantitative research,” “algorithmic trading,” or similar labels unless the rest of the document supports them—which it generally does—but ensure the terminology is consistent.

**Why:** The resume currently implies the target field without explicitly naming it in a summary or heading.

---

# Missing summary

**Change:** Add a concise professional summary at the top that identifies the target role, doctoral status, core quantitative domain, and strongest evidence of research or trading impact.

**Why:** This is the single biggest presentation gap. Without a summary, the recruiter must infer whether you are seeking a quantitative researcher, quant developer, data scientist, or academic role.

**Change:** Make the first two lines carry your strongest signals: doctoral statistics training, quantitative research experience, time-series or market-microstructure expertise, and validated modeling results.

**Why:** Recruiters may spend only a few seconds deciding whether to continue. The resume currently opens with education rather than a clear professional identity.

**Change:** Do not use the summary to claim live-trading expertise beyond what the resume can substantiate.

**Why:** The resume has real quant-research evidence, but the live-allocation claim is limited. Keep the positioning ambitious but precise.

---

# Ordering and prioritization

**Change:** Consider moving the most relevant quantitative experience and research projects ahead of the bakery role, or visually separating the bakery position as additional experience.

**Why:** The current chronology is reasonable, but the most recent job is not the most relevant one. For a quant application, relevance should be immediately visible.

**Change:** Put the strongest Northpeak bullets first, followed by the volatility project, then the R package and statistical-learning work.

**Why:** The reader should encounter market validation, point-in-time data handling, production-oriented research infrastructure, and financial forecasting before less relevant operational or teaching work.

**Change:** Do not include every technically interesting result if it creates contradictions or excessive density.

**Why:** Six bullets for a three-month internship is a lot, especially when one is actively damaging and another is duplicated elsewhere. Selectivity will make the credible achievements stronger.

---

# Technical credibility issues to resolve before submitting

These require factual review, not merely editing:

1. **Parameter selection from 400 configurations:** Determine whether the reported Sharpe was adjusted for multiple testing or evaluated on untouched data. The current presentation is a major red flag.
2. **Duplicate order-book signal:** Establish whether the Northpeak and Kaggle bullets describe the same work.
3. **35% risk-adjusted return improvement:** Define the metric, baseline, period, and out-of-sample status.
4. **0.4 Sharpe improvement:** Define how Sharpe was calculated and whether costs, turnover, and capacity were included.
5. **Monte Carlo random seeds:** Confirm that identical worker seeds did not produce duplicate or correlated simulations.
6. **Statistical significance across 30 indices:** Check multiple-testing and dependence issues.
7. **JASA paper status and authorship:** Make contribution and publication status exact.
8. **3,000 R-package downloads:** Define the metric and confirm the number.

---

# Five-perspective assessment

## ATS scan

**Likely result for a quantitative-research posting:** Marginal to strong, depending on the job description.

**Strengths:**
- Python, R, SQL, C++
- PyTorch and gradient boosting
- Time-series modeling
- Microstructure and order-book features
- Walk-forward validation
- Point-in-time joins
- Sharpe and QLIKE metrics
- Statistical testing

**Weaknesses:**
- No explicit target-role title
- No summary
- “Time-series econometrics” is misspelled
- Skills section omits several methods demonstrated in the experience
- No explicit mention of backtesting, portfolio construction, or algorithmic trading terminology, if those are appropriate to the intended role

## Recruiter glance

**Verdict: Maybe, with potential to become Forward.**

The doctoral degree and Northpeak internship are credible signals, but the recruiter may not immediately understand the intended role. The bakery position as the current job creates ambiguity, and the absence of a summary makes the document less immediately targeted.

## HR screen

**Verdict: Likely phone screen for quant-research roles, assuming the technical claims are accurate.**

The resume shows doctoral training, relevant internship experience, strong quantitative projects, and measurable outcomes. The main risks are unclear positioning, duplicate achievements, and the potentially problematic model-selection bullet.

## Hiring manager

**Verdict: Maybe to Interview, depending heavily on the target role.**

The hiring manager will notice:
1. Strong awareness of leakage and time-series validation.
2. Practical work with microstructure data and feature infrastructure.
3. Significant risk in the claim involving selection from 400 backtests.
4. Possible double-counting of the order-book signal.
5. Good combination of mathematical theory, software, and applied financial modeling.

**Likely first interview question:** How did you prevent overfitting and account for multiple testing when selecting among the 400 configurations?

## Technical reviewer

**Verdict: Interested but cautious.**

The technical depth is promising, but the reviewer will likely investigate the statistical validity of the performance claims before trusting the results. The parameter-selection bullet may cause them to scrutinize every backtest claim.

---

# Recommended change order

## Highest priority

1. Resolve or remove the 400-configuration model-selection bullet.
2. Remove the duplicated order-book achievement or establish that the two results are different.
3. Add a targeted summary identifying the intended quantitative role.
4. Correct “econometircs.”
5. Define the evaluation methodology behind the 35% and 0.4 Sharpe claims.
6. Clarify the timeline between the Ph.D. and the graduate research assistantship.

## Medium priority

1. Reorder or visually de-emphasize the bakery role.
2. Strengthen the skills section using methods already demonstrated in the resume.
3. Clarify ownership in the Kaggle team project.
4. Add measurable outcomes to the generic Kaggle modeling bullet.
5. Clarify the R-package adoption metric.
6. Make publication and working-paper status consistent and precise.

## Low priority

1. Improve the code-link labeling.
2. Add location or relocation information if useful.
3. Reduce less relevant teaching or retail detail depending on available space.
4. Standardize spelling and terminology throughout.

## Bottom line

Do not submit this version unchanged. The resume has strong raw material, especially the Northpeak internship, volatility study, R package, and statistical-learning work. But the uncorrected model-selection claim and duplicated trading result create avoidable credibility problems. Fix those first, then add a clear quant-research identity at the top and make the validation methodology the central narrative.
