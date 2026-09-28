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