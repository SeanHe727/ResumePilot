## Overall issues to address first

1. **Resolve the apparent duplication between Northpeak and the Kaggle project.**  
   The “order-book imbalance signal” appears in both places, with the same 18-month out-of-sample period and nearly identical performance framing. If it is the same work, presenting it twice can look like double-counting. If it is different work, make the distinction unmistakable through the data, venue, dates, or objective.

2. **Fix the backtest-selection claim.**  
   Saying you selected from 400 configurations and then treated the best Sharpe as the expected live Sharpe is a serious methodological problem. It describes selection bias and likely backtest overfitting. This line could undermine the credibility of the stronger validation claims elsewhere. Either remove it or accurately describe how you controlled for multiple testing, selection bias, or a held-out evaluation period.

3. **Correct the Monte Carlo seed statement.**  
   Using the same random seed on every worker can cause workers to generate identical or correlated simulations, depending on the implementation. That may invalidate the claimed speedup study. Change this to reflect the actual reproducibility method, such as independent random streams or distinct worker seeds, if that is what you used.

4. **Make the resume’s target clearer.**  
   The content is highly quantitative and finance-oriented, but the current bakery role is prominent and there is no summary or indication of the target role. For quantitative research, statistical modeling, or financial econometrics positions, make the technical experience visually dominant and explain the bakery role only as much as necessary.

5. **Standardize terminology, spelling, and formatting.**  
   You use “labour,” which is unusual for a U.S.-based resume; “econometircs” is misspelled; and some bullets wrap awkwardly. Check capitalization, punctuation, date formatting, and the rendering of long lines in the final PDF.

---

## Header and contact information

### `+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel`

- **Verify that the code URL is complete and functional.** Include the protocol if needed by the application system, and ensure the repository contains the projects and packages mentioned in the resume.
- **Consider adding a LinkedIn or professional profile only if it is current and consistent with the resume.**
- **Do not use a placeholder-looking domain or phone number in the submitted version.** If these are anonymized for review, that is fine here, but replace them in the actual resume.

---

## Education

### `Ridgeway University | Ph.D. candidate in Statistics | ... | Sep 2021 - Expected May 2026`

- **Clarify your actual academic status if “candidate” has a specific institutional meaning.** Some employers interpret “Ph.D. candidate” as having completed qualifying exams; others use it loosely.
- **Add your research area, dissertation topic, or relevant specialization if it supports the target role.** This is especially useful because your experience spans statistical learning, financial econometrics, and quantitative finance.
- **Consider including an expected completion date only if it is current and credible.** Update it as your timeline changes.
- **Add selected coursework only if it fills an obvious gap.** Given the strong research experience, coursework is probably less important than technical methods, publications, or research output.

### `Ridgeway University | B.S. in Mathematics | ...`

- This is clear and appropriately concise.
- **Check whether the Ph.D. and B.S. should be listed in reverse chronological order based on the institution’s official degree titles.**
- **Consider including honors, distinction, or a relevant concentration only if notable and useful for the target role.**

---

## Experience

### Sunrise Bakery — `Assistant Store Manager`

This role is legitimate work experience, but it currently receives space that may be more valuable for your technical background.

#### `Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.`

- **Clarify the scope of your management responsibility.** “A team of 6” could mean direct reports, people scheduled per shift, or everyone working under you.
- **Quantify the budget result if possible.** “Keeping within budget” is less persuasive than a measurable improvement or consistent operating result.
- **Use consistent U.S. spelling.** Change “labour” if the rest of the resume targets U.S. employers.
- **Consider shortening or deprioritizing this bullet for technical applications.** It demonstrates management and operations, but it does not contribute much to your quantitative profile.

#### `Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.`

- This is the strongest bakery bullet because it includes a measurable operational outcome.
- **Specify the comparison period and measurement basis somewhere in the underlying documentation.** Employers may wonder whether this was a temporary fluctuation, seasonal effect, or sustained result.
- **Make sure “of production” is the correct denominator and that the reduction is attributable to your process rather than broader changes.**
- If space is limited, retain this bullet and reduce the emphasis on the first one.

---

### Northpeak Capital — `Quantitative Research Intern`

This is the most important section for quantitative roles, but it contains both strong evidence and credibility risks.

#### `Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.`

- **Define the metric.** “Risk-adjusted returns” could mean Sharpe ratio, information ratio, return divided by volatility, or something else.
- **State the comparison basis and evaluation period.** The reader needs to know whether the result was in-sample, out-of-sample, simulated, or live.
- **Clarify whether transaction costs, market impact, and capacity were included.**
- **Check this against the later Sharpe-ratio claim.** The two metrics may be describing the same work, but the relationship is currently unclear.
- “Position smoother” and “desk’s futures signal” are domain-specific terms; keep them only if the intended audience will understand them or if surrounding detail makes them clear.

#### `Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.`

- This is technically strong and relevant.
- **Avoid absolute claims unless you can defend every aspect of the implementation.** “Every backtest decision” is broader than simply saying you used purged splits and an embargo period.
- **Add the number of folds or evaluation windows if space allows and if it demonstrates rigor.**
- **Make sure the claim is consistent with the 400-configuration selection bullet.** Selecting the best configuration from many trials can still leak information across evaluation decisions even when individual folds are time-aware.

#### `Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.`

- This is one of the strongest bullets.
- **Clarify your ownership and the scale of the system if relevant.** For example, employers may care about data volume, latency, productionization, or testing.
- **Add the technology used if it is not obvious from the skills section.** Kafka alone does not tell the reader whether you built the system with SQL, Spark, cloud infrastructure, or another stack.
- **Include a repository or project link if the work can be shown without violating confidentiality.**

#### `Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.`

- **Verify that you are permitted to disclose this information.** The statement may reveal internal investment processes or confidential results.
- **Clarify your role in the approval and deployment process.** “Who approved” can sound like you are attributing an investment decision to a group, while your actual contribution may have been presenting research.
- **Replace vague scale language only if disclosure rules permit it.** “Small live allocation” is not very informative, but you should not add sensitive capital figures merely for specificity.
- This is a valuable bullet because it shows research-to-decision impact, so retain it if accurate and permissible.

#### `Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.`

- **Change or remove this bullet.** As written, it explicitly presents the maximum observed backtest Sharpe as the expected live Sharpe, which is not statistically defensible.
- **Do not describe a selected in-sample maximum as an expectation without an independent validation procedure.**
- If this was an intentional mistake you identified and corrected, the resume should emphasize the correction rather than the flawed practice. Otherwise, this line will likely be viewed negatively by a quantitative interviewer.

#### `Built a short-horizon order-book imbalance signal ... that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.`

- This is specific and compelling, but it appears to duplicate the Kaggle project.
- **Resolve whether this is separate work.**
- **Clarify the baseline and attribution.** Was 1.1 the existing desk book and 1.5 the book with your signal, or were these two different model configurations?
- **Specify whether the 18 months were entirely held out from development.**
- **Be careful with “raised.”** A backtest result shows an observed simulated improvement, not necessarily a realized or causal improvement.
- If the result is the same as the Kaggle line, retain it in the more credible or relevant section and remove the duplicate.

---

### Ridgeway University — `Research Assistant, Statistical Learning Lab`

#### `Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.`

- **Correct the random-seed methodology or revise the claim.** The same seed on every worker may generate duplicate simulations or undermine independence.
- **State the parallelization environment if relevant.** The result is more useful if employers can see whether this involved multiprocessing, a cluster, cloud computing, or a specific framework.
- **Retain the runtime reduction because it is a strong result, but ensure the statistical validity of the experiment.**

#### `Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.`

- This is technically impressive, but **clarify your authorship and contribution** if the work is collaborative.
- **Avoid implying acceptance.** “Under review” is appropriately cautious, but make sure the journal title and manuscript status are accurate.
- “Now Section 3” is less useful to a recruiter than the mathematical contribution. Consider changing the emphasis toward the result’s significance, but do not overstate it.
- **Use the exact official journal name or accepted abbreviation consistently.**
- Add a publication or preprint link if one is publicly available.

#### `Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.`

- This is clear and quantified.
- **Specify the rating source or response basis if the number could be questioned.** A rating from a small response pool can mean something different from a full-class evaluation.
- For research or industry applications, consider giving it less space than the research bullets unless teaching is relevant to the role.

#### `Released an open-source R package for high-dimensional covariance estimation with shrinkage and factor models, downloaded 3,000 times in its first year.`

- This is a strong bullet.
- **Add the package name and link if it is publicly available.**
- **Clarify what “downloaded” means** if the count comes from a package repository and could include automated downloads.
- Consider adding tests, documentation, users, citations, or downstream adoption if those are stronger indicators than raw download count.

---

## Projects

### `Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present`

- The title and technology are clear.
- **Consider adding R, data tools, or econometrics tools only if they were materially used.**
- Since this project overlaps with your Ph.D. period, **label it consistently with your academic status** if it is part of your dissertation or university research rather than independent work.

#### `Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.`

- This is a strong quantitative result.
- **Make clear that lower QLIKE is better.** Not every reader will know how to interpret the metric.
- **Specify the forecast horizon and evaluation period if space permits.**
- “Beat” is somewhat informal; use terminology consistent with the rest of the resume.
- **Clarify whether the model and baseline used identical information sets and evaluation windows.**

#### `Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.`

- This demonstrates unusually good statistical discipline.
- **Check the wording around “in both crisis periods.”** It is unclear whether significance held for all 24 indices in both periods, or whether the result held at the aggregate level.
- **Explain how dependence across indices and repeated testing across crisis periods were handled.** A sophisticated reader may ask about those issues.
- Keep this only if the statistical procedure is fully defensible and reproducible.

#### `Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.`

- This is useful evidence of communication and research maturity.
- **Add a link if the paper is available publicly.**
- **Clarify whether you were the sole author or one of several authors.**
- The page count is less important than the paper’s status, audience, or availability; retain it only if it adds value.

---

### `Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023`

- This project is currently weaker than the rest of the resume because it does not identify the competition, ranking, dataset scale, or final result.
- **Add the competition name and outcome if they are favorable and verifiable.**
- If the project has no meaningful ranking or external result, consider removing it in favor of more directly relevant research.

#### `Engineered features and trained gradient-boosting models for a market prediction competition.`

- This is too generic compared with your other bullets.
- **Add scale, feature count, modeling objective, ranking, or measurable improvement.**
- If you cannot add a concrete result, this is a candidate for removal.

#### `Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.`

- This is a useful lesson in validation methodology.
- **Clarify what metric the 0.02 refers to and whether the gap decreased because the local score fell, the leaderboard score rose, or both.**
- **Explain why the original folds leaked information.**
- Be careful with the word “closed”: if the gap merely narrowed, describe the actual change accurately.

#### `Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.`

- This is the major problem in this project section.
- It appears to duplicate the Northpeak bullet almost exactly.
- **Remove it from one section unless the work was genuinely separate.**
- If it is separate, the resume needs enough detail to prove that it used different data, dates, instruments, or methodology.
- **Clarify the baseline Sharpe and whether costs, capacity, and selection effects were handled.**
- The chronology also deserves attention: this project predates the Northpeak internship, so a reader may question how the same signal was later presented as internship work.

---

## Skills

### `Programming: Python, R, PyTorch, Kafka`

- **Separate programming languages from frameworks and infrastructure tools.** Python and R are languages; PyTorch and Kafka are tools or platforms.
- **Add proficiency only if you can defend it technically.** Avoid vague self-ratings unless the application requests them.
- **Include key tools actually used in the experience bullets**, such as SQL, Git, Linux, cloud platforms, distributed computing, or relevant data libraries, but do not add a long keyword list without evidence elsewhere.
- Kafka is unusual in this list unless it was used meaningfully in a project; make sure the resume demonstrates that usage.

### `Methods: time-series econometircs, high-dimensional statistics, gradient boosting`

- **Correct the spelling of “econometrics.”**
- **Use consistent capitalization and naming conventions.**
- The methods list is incomplete relative to the resume. You appear to have evidence for time-series validation, volatility modeling, Monte Carlo methods, sparse regression, covariance estimation, microstructure features, and statistical testing.
- **Only add methods you can discuss in an interview.**
- Consider whether “gradient boosting” belongs under methods while items such as point-in-time data handling, purged cross-validation, and multiple-testing correction may be more valuable for the roles you are targeting.

---

## Recommended priority order

1. Remove or correct the 400-configuration/expected-Sharpe bullet.
2. Correct the same-seed Monte Carlo bullet.
3. Resolve the duplicated order-book signal claims.
4. Fix the spelling and formatting issues.
5. Strengthen the generic Kaggle bullets or remove that project.
6. Add links to the code, package, and paper where appropriate.
7. Quantify or reduce the bakery experience depending on the target role.
8. Add missing context to the strongest quantitative claims: baseline, evaluation period, costs, out-of-sample status, and metric definition.