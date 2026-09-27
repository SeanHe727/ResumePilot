## Highest-priority changes

1. **Remove or correct the Sharpe-ratio bullet.** Multiplying a daily Sharpe ratio by 252 is incorrect; annualization normally uses the square root of the number of trading days, approximately √252. As written, this seriously undermines the credibility of the quantitative research section.
2. **Reduce redundancy in the Volatility Forecasting Study.** All three bullets repeat the same model, dataset, and improvement theme, while the metrics may not be directly comparable.
3. **Fix the grammar and tense in the feature-store bullet.** “Joining 120 microstructure features…” is not grammatically correct in context.
4. **Correct “econometircs” to “econometrics.”**
5. **Clarify the quantitative claims.** Several results are impressive but lack the details needed to establish that they are valid: evaluation period, baseline, metric definition, statistical significance, and whether the result is incremental or total performance.

---

## Header

### Contact information

- **Verify that the code URL is a real, accessible portfolio link.** If it contains relevant repositories, papers, notebooks, or documentation, it supports your claims; if it is only a placeholder or empty profile, it weakens the resume.
- **Consider adding a LinkedIn profile or Google Scholar link if relevant.** For quantitative research and statistics roles, a publication or research profile may be more valuable than a general social profile.
- **Do not include a full mailing address.** The current location format is sufficient.

---

## Education

### Ridgeway University — Ph.D. candidate in Statistics

- **Keep the expected completion date.** It is useful for employers assessing availability.
- **Add a research focus, dissertation area, advisor, or selected coursework only if they strengthen your target role.** The resume currently shows strong technical work but does not immediately connect the Ph.D. to quantitative finance, machine learning, or time-series research.
- **Clarify the timeline if necessary.** Your graduate research assistant role ends in August 2021, and the Ph.D. begins in September 2021. That sequence is plausible, but the resume does not explain the transition. A reader may wonder whether the assistantship was undergraduate research, a predoctoral role, or part of the Ph.D.
- **Consider adding publications, working papers, or conference presentations in a separate section.** The JASA paper reference is currently buried inside an experience bullet.

### Ridgeway University — B.S. in Mathematics

- **Consider adding the graduation distinction, GPA, honors, or relevant coursework only if strong and relevant.** Otherwise, the entry is appropriately concise.
- **Check whether the Ph.D. and B.S. entries should include more detail than the employment at Sunrise Bakery.** For research-oriented applications, academic qualifications should receive more visual emphasis than unrelated operational work.

---

## Experience

### Sunrise Bakery — Assistant Store Manager

- **Decide whether this role belongs on the version of the resume intended for quantitative or research positions.** It demonstrates management, operations, and budgeting, but it is not directly relevant to your target technical roles. If you need it to account for your current employment or avoid a gap, keep it concise; otherwise, move it to an “Additional Experience” section or omit it.
- **Clarify your management scope in the first bullet.** The bullet could be read as though you managed both opening shifts and six employees, but the exact responsibility is not fully clear.
- **Add scale or frequency where possible.** The labor-budget result would be stronger with a specific budget variance, store volume, or period of performance.
- **Clarify the denominator in the second bullet.** “12% to 7% of production” could mean units, revenue, or weight. Also distinguish between a five-percentage-point reduction and a percentage reduction.
- **Make your role in the outcome clear.** Stock counting and supplier ordering may have contributed to the reduction, but the causal connection is currently implied rather than demonstrated.

### Northpeak Capital — Quantitative Research Intern

#### Order-book imbalance signal

- **Clarify whether 0.4 Sharpe is an incremental contribution or the signal’s standalone Sharpe.** “Added 0.4 Sharpe to the desk’s book” is ambiguous and potentially misleading because Sharpe ratios are not generally additive.
- **Specify the backtest period and sample construction.** “Over 18 months” is useful, but readers will want to know whether the period was entirely out of sample, walk-forward, or a single holdout.
- **State the universe and implementation assumptions more precisely.** You mention liquid index futures, but not the number of contracts, trading frequency, holding period, or key cost assumptions.
- **Check whether “after costs” is supported by a defensible transaction-cost model.** Since the rest of the section emphasizes implementation, this is important for credibility.

#### Turnover and position smoother

- **Clarify what “keeping 90% of gross returns” means.** It could mean retaining 90% of the original gross return, or achieving 90% of the original performance after smoothing. The distinction matters.
- **Keep the performance measures on a consistent basis.** Turnover, gross returns, and estimated slippage should use the same evaluation period and portfolio construction assumptions.
- **Explain whether the one-third slippage reduction is estimated or observed.** If estimated, label it consistently as a model-based result.

#### Diebold–Mariano testing

- **Add the result of the statistical test, not only the name of the test.** Include the relevant p-values, confidence level, or proportion of indices showing significant improvement.
- **Clarify the forecast horizon and loss differential.** A Diebold–Mariano test is more persuasive when the forecast horizon, loss function, and comparison procedure are explicit.
- **Address multiple comparisons across 30 indices.** Testing 30 markets raises a multiple-testing issue. State whether you adjusted for it or summarize the result in a way that does not imply all 30 findings are independently significant.
- **Review the phrase “nested HAR-RV baseline.”** Confirm that the statistical relationship is technically correct. If the model is not truly nested relative to the baseline, this wording may invite criticism.

#### Feature-store bullet

- **Fix the grammatical construction beginning with “Joining 120 microstructure features.”** The current wording makes it unclear whether you joined features, built the store, or both.
- **Make the tense consistent.** The sentence currently combines a present-participial construction with past-tense actions.
- **Quantify the benefit of the feature store.** Reuse in two later projects is helpful, but add scale or time saved if available: ingestion time, number of records, researchers supported, or reduction in repeated data work.
- **Clarify “point-in-time.”** This is valuable in quantitative research, but specify that the feature construction avoided look-ahead bias if that is what you mean.
- **Explain the significance of schema versioning and late-print handling.** These are strong engineering details, but their value is not immediately obvious without a stated outcome.

#### Sharpe annualization bullet

- **Delete this bullet unless it is replaced with a technically correct and meaningful analysis.** The stated calculation is wrong, and the bullet describes a reporting operation rather than substantive research. It also contradicts the credibility of the other quantitative claims.

#### Documentation bullet

- **Keep the substance, but make the impact more concrete.** Documentation of assumptions, costs, and failure regimes is valuable. The phrase “for future interns” makes the contribution sound narrower than it may have been.
- **Mention reproducibility or reviewability if applicable.** This would better connect the documentation to research quality and team use.
- **Consider whether this should be combined with the feature-store or backtest bullet.** The section has many bullets, and this one is less valuable than the core research results unless you can quantify its use.

---

### Ridgeway University — Graduate Research Assistant

#### Simulation pipeline

- **Keep this bullet.** It has a clear technical intervention, measurable speed improvement, and reproducibility benefit.
- **Add the computing environment or tools if relevant.** The shared cluster, scheduler, parallelization approach, or programming language may matter for research-engineering roles.
- **Clarify whether the speed comparison used equivalent computational settings.** This is a minor credibility point, but the large reduction from three days to five hours invites interest.

#### Sparse regression proof

- **Define the estimator or research problem more specifically.** “Sparse regression estimator” is broad; readers should understand what area of statistics the result belongs to.
- **Clarify what “by a log factor” means mathematically.** The phrase is potentially imprecise. State the exact nature of the improvement in the final version.
- **Be cautious about the JASA status.** “Under review” is appropriate if accurate, but do not imply acceptance or publication. Add a publications or working-papers section if the paper is important to your candidacy.
- **Clarify your authorship and contribution if there are coauthors.** The current wording may make the full paper appear to be solely yours.

#### Teaching

- **Keep this bullet if applying for academic, statistical, or research roles.** It demonstrates communication and responsibility.
- **Specify how the 4.8/5 rating was collected if space permits.** The source and number of respondents can affect how readers interpret it.
- **Consider whether “writing 12 problem sets” is the strongest use of space.** It is useful, but teaching scope, course level, and student outcomes may be more relevant depending on the role.

#### Open-source R package and additional duties

- **Split or substantially narrow this bullet.** It currently combines four unrelated responsibilities: package development, cluster maintenance, reading-group organization, and grading.
- **Make the package the primary focus if it is relevant.** Include package scope, testing/documentation, repository activity, or users if available.
- **Be precise about “downloaded 3,000 times.”** Downloads are not the same as users or installations. If the number comes from a package repository, identify the relevant measure accurately.
- **Move cluster maintenance, reading-group organization, and grading into a separate bullet or remove them.** Combining them makes the technical accomplishment harder to find and makes the sentence unwieldy.
- **Add a repository link if the package is public.** This is one of your strongest verifiable technical credentials.

---

## Projects

### Volatility Forecasting Study

- **Reduce the three bullets to distinct accomplishments.** The first and third both describe a temporal convolutional model on 30 equity indices, and the second may describe the same experiment. Repetition makes the project look less substantial rather than more substantial.
- **Reconcile the metrics.** You report:
  - a 7% improvement in QLIKE loss,
  - forecast error falling from 0.20 to 0.15, described as a 33% improvement,
  - directional hit rate increasing from 52% to 58%.
  
  These may all be valid, but the resume does not explain whether they come from the same model, the same test set, or different experiments.
- **Check the arithmetic and terminology.** A reduction from 0.20 to 0.15 is a 25% reduction relative to 0.20, not a 33% improvement, unless “improvement” is defined against a different denominator. This should be corrected or explained.
- **Clarify “forecast error.”** Identify the error metric. QLIKE, MSE, MAE, and other metrics are not interchangeable.
- **Question whether directional hit rate is appropriate for a volatility-forecasting project.** It can be meaningful if you define the direction being predicted, but the current wording leaves that unclear.
- **Describe the evaluation design.** Include walk-forward or rolling evaluation, forecast horizon, train/test separation, and leakage controls. These details are particularly important because you are presenting an out-of-sample financial result.
- **Avoid repeating “on 30 equity indices” in multiple bullets.** State the dataset once and use the space for methodology or robustness.

### Kaggle Market Prediction Competition

#### Competition result

- **Keep this bullet.** The ranking is concrete and easy to understand.
- **Check the description of the leaderboard.** A rank of 41 out of 2,900 is approximately the top 1.4%, so “top 2%” is directionally correct but less precise. Make sure “private leaderboard” is accurate and that the ranking was not from a public leaderboard.
- **Clarify your individual contribution if this was a team result.** The heading says team of three, but the bullet does not distinguish your work from the team’s work.

#### Validation leakage

- **Review the phrase “cut validation leakage.”** Changing the fold structure may have reduced optimistic validation bias, but it did not necessarily remove leakage. Use technically accurate terminology.
- **Explain what caused the 0.02 gap.** The reader should know whether the gap was caused by random folds, temporal dependence, duplicated entities, or another issue.
- **State which metric the 0.02 refers to.** Without the metric, the magnitude cannot be interpreted.
- **Make clear whether the time-grouped folds were your contribution or a team-wide change.**

#### Feature selection

- **Clarify the distinction between 900 candidate features and 300 engineered features.** The current wording could imply that the team engineered 300 features from 900, or selected 300 from 900. Make the process unambiguous.
- **Explain how permutation importance was computed.** If it was calculated using the full dataset before cross-validation, it may itself introduce leakage. State that selection occurred within training folds if that is true.
- **Replace “without losing validation score” with a more rigorous comparison if possible.** A single validation score is weak evidence; repeated folds, a held-out score, or leaderboard stability would be stronger.
- **Clarify your role relative to the team.** This is especially important because the competition result is shared but the feature-selection script appears to be your individual contribution.

---

## Skills

### Programming

- **Correct capitalization and formatting consistently.** “Python,” “R,” “SQL,” “C++,” and “Kafka” are fine, but make sure the section format is uniform.
- **Only list skills you can support through the resume.** Python and R are strongly supported. SQL, C++, and Kafka are currently not demonstrated elsewhere, which may lead interviewers to test them more aggressively.
- **Add relevant technical tools only if you actually used them.** Examples would include Git, Linux, cluster schedulers, Docker, databases, cloud platforms, or specific Python/R libraries—but do not add them merely for keyword coverage.

### Methods

- **Correct “time-series econometircs” to “time-series econometrics.”**
- **Review whether the listed methods reflect your strongest and most relevant capabilities.** The experience supports time-series forecasting, statistical learning, market microstructure, Monte Carlo simulation, sparse regression, and covariance estimation, but several of these are absent from the skills section.
- **Avoid listing PyTorch under Methods if it is a programming framework.** Keep the categories conceptually consistent, or use a separate tools/frameworks category.
- **Consider adding your level of proficiency only if the format supports it without subjective ratings.** Evidence elsewhere is generally more credible than labels such as “advanced.”

---

## Structure and positioning

- **Put the most relevant material first.** For quantitative research roles, the likely order should emphasize the Ph.D., Northpeak Capital, research work, selected projects, publications, and technical skills. Sunrise Bakery should be visually de-emphasized if retained.
- **Consider adding a Publications/Working Papers section.** The JASA submission and any public R package or research repository deserve more visibility.
- **Add links to code, papers, packages, or notebooks where appropriate.** Quantitative claims are much stronger when the work can be inspected.
- **Use consistent date and location formatting throughout.**
- **Keep the resume to two pages if needed rather than compressing the technical work into dense, overloaded bullets.** You have enough research content for a focused two-page academic or quantitative resume.
- **Prioritize verifiable, decision-relevant results.** Remove claims that are mathematically incorrect, ambiguous, redundant, or based only on process rather than impact.