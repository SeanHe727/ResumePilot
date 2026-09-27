# case-3

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
- Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4
Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
- Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping
90% of gross returns and lowering estimated slippage by a third.
- Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano
tests across the 30 indices.
- Joining 120 microstructure features point-in-time across six venues, deduplicating late
prints and versioning each schema, built a feature store the team reused in two later
projects.
- Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to
the desk.
- Documented the backtest assumptions, transaction-cost model and known failure regimes in the
desk’s research wiki for future interns.
Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo
study from 3 days to 5 hours and making runs reproducible by seed.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous
bound by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets
and earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while
maintaining the lab’s shared cluster, organizing the weekly reading group and grading for
two courses, which was downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility
features and an asymmetric loss.
- Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with
a temporal convolutional model.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features,
finishing in the top 2% of the private leaderboard.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between
local validation and leaderboard scores.
- Wrote the team’s feature-selection script using permutation importance, trimming 900
candidate features to 300 without losing validation score.
SKILLS
Programming: Python, R, SQL, C++, Kafka
Methods: time-series econometircs, Bayesian inference, gradient boosting, PyTorch
```

## Reviewer 1

## Highest-priority fixes

1. **Correct or remove the Sharpe annualization bullet immediately.** A daily Sharpe ratio is normally annualized using \(\sqrt{252}\), not 252. This error could disqualify you for quantitative roles and casts doubt on the other calculations.
2. **Reconcile the education and research-assistant dates.** Your Graduate Research Assistant position ends when the Ph.D. begins, even though it is described as graduate-level work. If the dates are accurate, explain the affiliation or degree context; if not, correct them.
3. **Fix the volatility-project arithmetic.** A decline from 0.20 to 0.15 is a 25% reduction relative to 0.20, not 33%.
4. **Fix the hit-rate terminology.** Moving from 52% to 58% is an increase of 6 percentage points, not 6%.
5. **Correct “econometircs.”** A typo in a core technical skill is particularly damaging.
6. **Check the validity of the Diebold–Mariano claim.** Standard DM tests can be inappropriate for nested forecasting models. Make sure your test choice, standard errors, and multiple-comparison treatment are defensible.
7. **Resolve the apparent gap in Ph.D.-period research.** Your listed university research role ends in August 2021, while your Ph.D. runs from September 2021 to 2026. For a Ph.D. candidate seeking quantitative work, having no listed research or teaching role during the degree is conspicuous.

---

## Header

### Name
No change needed.

### Phone and email
No substantive change needed. Make sure the email is professional and the phone number is the one you reliably answer.

### Code link
- Use a direct, recognizable repository or portfolio URL rather than a generic-looking path.
- Ensure the destination has polished pinned projects, documentation, and no unfinished or low-quality public repositories.
- Consider adding LinkedIn only if it is complete and consistent with the resume.

---

## Education

### Ph.D. line
- Verify that “candidate” is formally accurate. Some universities reserve that term for students who have passed qualifying or candidacy requirements.
- Reconcile the start date with the Graduate Research Assistant dates.
- Add your research area, dissertation topic, or advisor if relevant to quantitative research roles. The degree alone does not show what you have studied during the last several years.
- Use consistent date punctuation and preferably typographic en dashes throughout.

### B.S. line
- Keep it concise.
- Add honors or GPA only if they are strong and useful.
- If the 2020–2021 research position was connected to a master’s program, post-baccalaureate appointment, or another status, that missing context needs to appear somewhere.

---

## Experience

### Sunrise Bakery — position line
- Keep this role if it is your current employment, but allocate less space to it than to quantitative work.
- If you are targeting quant roles, two bullets are sufficient; the role should demonstrate leadership and operational discipline without dominating the page.
- Be prepared to explain how you are simultaneously completing the Ph.D. and working in this role.

### “Managed opening shifts…”
- Change “labour” to “labor” for consistency with the stated U.S. location.
- Clarify whether you directly supervised all six employees or coordinated a six-person shift.
- The budget outcome is useful, but “keeping within budget” is less differentiated than a quantified improvement. Add a stronger result only if one is available and supportable.

### “Ran daily stock counts…”
- Keep the 12% to 7% result.
- Specify the measurement period and how “unsold bread” was calculated if space permits; otherwise the number may appear selectively chosen.
- Make clear whether the change was attributable to your ordering decisions rather than a broader change in sales or production.

---

## Northpeak Capital

### Position line
- This is your strongest directly relevant experience and should remain prominent.
- Confirm that every performance figure and description is permitted under the employer’s confidentiality rules.
- If Northpeak is not widely known, a brief indication of the firm or desk type may help, but only if permitted.

### “Built a short-horizon order-book imbalance signal…”
- Clarify what “added 0.4 Sharpe” means: incremental portfolio Sharpe, change in the book’s Sharpe, or standalone signal Sharpe.
- Verify that the 18-month period was genuinely out of sample and not used repeatedly for model selection.
- Make sure “after costs” includes a defensible transaction-cost and market-impact model.
- Consider whether “the desk’s book” discloses proprietary information or overstates production adoption.
- Check consistency with the later reference to 30 indices; there may not be 30 genuinely liquid index-futures markets in the intended universe.

### “Cut the signal’s daily turnover…”
- Define the turnover convention internally and be able to explain it in interviews; turnover percentages are calculated in several different ways.
- Verify that 90% of gross returns and one-third lower estimated slippage were measured on the same evaluation sample.
- Retain the word “estimated” for slippage unless you have live execution evidence.
- Ensure the smoother was tested without tuning to the final out-of-sample period.

### “Confirmed the forecast gain…with standard Diebold–Mariano tests…”
- Revisit the statistical method. If the models are nested, a standard Diebold–Mariano test may not have the appropriate null distribution; a nested-model adjustment may be needed.
- State “test” or “tests” consistently with what you actually ran.
- Account for serial correlation with an appropriate long-run variance estimate.
- If you tested 30 markets separately, address multiple testing rather than implying that all results independently confirmed the same conclusion.
- Clarify whether “30 indices” means equity indices, index futures, or another universe.

### “Joining 120 microstructure features…”
- Fix the grammar: the bullet currently lacks a clear subject and main-sentence construction.
- Separate the data-engineering actions from the resulting feature-store outcome conceptually.
- Preserve the reuse result; adoption in two later projects is the most valuable part.
- Clarify what “point-in-time” guarantees were implemented, since this is an important anti-leakage claim.
- Keep the venue count only if it is not confidential.

### “Annualized the signal’s daily Sharpe ratio…”
- Remove this bullet even after correcting the formula. Correct annualization is a basic calculation, not a resume-level accomplishment.
- Recalculate every Sharpe figure elsewhere using the proper convention. The usual scaling is by \(\sqrt{252}\), subject to the return frequency and assumptions.
- Check whether autocorrelation in a short-horizon strategy requires a more careful annualization method than simple square-root scaling.

### “Documented the backtest assumptions…”
- Keep this only if space allows after stronger research bullets.
- Quantify use or adoption if possible; “for future interns” describes intended value rather than demonstrated impact.
- Make sure the documented failure regimes do not contradict the strength of the earlier performance claims.

---

## Ridgeway University — Graduate Research Assistant

### Position line
- Correct or explain the dates relative to the Ph.D.
- Verify that “Graduate Research Assistant” was the formal title if you had not yet started the listed graduate degree.
- If this work continued during the Ph.D., update the dates and distinguish changing responsibilities if necessary.

### “Built the lab’s simulation pipeline…”
- This is a strong bullet.
- Confirm that the three-day and five-hour measurements used comparable compute resources and workloads.
- If reproducibility involved more than fixed seeds—such as environment pinning, configuration tracking, or workflow management—make that scope clear elsewhere or in interviews.
- Avoid implying that fixed seeds alone guarantee full reproducibility.

### “Derived a variance bound…”
- Remove first-person wording for consistency with the rest of the resume.
- Clarify your individual contribution if the paper has multiple authors.
- Make sure “tightens…by a log factor” is accurate under the same assumptions as the previous bound.
- Verify that naming JASA is permitted while the paper is under review; some journals use double-anonymous review.
- Consider giving the paper its own publications or research section, especially if it is central to your Ph.D.

### “Taught weekly recitations…”
- Keep the 4.8/5 rating because it provides external evidence of effectiveness.
- Confirm whether you wrote all 12 problem sets or contributed to them; avoid implying sole authorship if they were collaborative.
- If space is tight for a quant resume, this is less important than research, publications, and technical work.

### “Released an open-source R package…while maintaining…”
- Split or substantially simplify this content. It currently combines package development, cluster administration, reading-group organization, grading, and download statistics.
- Ensure the 3,000-download result clearly applies only to the package.
- Prioritize the package and its adoption; the unrelated administrative tasks dilute the accomplishment.
- Identify the source of the download count and make sure automated dependency downloads are not being presented as active users.
- Move cluster administration into another bullet only if it involved meaningful technical ownership.

---

## Projects

### Volatility Forecasting Study — heading
- State what remains ongoing if the project has been listed as active since January 2024.
- Add a repository, paper, or reproducible artifact if available.
- Make sure this independent project is clearly distinct from the Northpeak work and does not use employer data, code, or ideas that could create an intellectual-property concern.
- Consider moving it into a research section if it is part of your Ph.D.

### “Beat a HAR-RV baseline…”
- Keep this as the lead project result.
- Specify whether the 7% is a relative QLIKE reduction and use the same convention throughout.
- Confirm that the baseline was properly tuned and evaluated on identical rolling or expanding windows.
- Describe uncertainty or statistical significance somewhere in the project if the difference is central.
- Use consistent terminology for the 30 assets: “equity indices” here versus “indices” or “index futures” elsewhere.

### “Cut forecast error from 0.20 to 0.15…”
- Correct the percentage: this is a 25% reduction relative to 0.20.
- Identify the error metric; “forecast error” is too vague, especially after the previous bullet specifically names QLIKE.
- Do not attribute the improvement jointly to added features and a changed loss unless you ran ablations that isolate each contribution.
- Resolve the redundancy with the first bullet, which already says the model was trained on realized-volatility features.
- Check whether 0.20 and 0.15 are comparable across all 30 indices or are averages with a stated aggregation method.

### “Improved the model’s directional hit rate…”
- Change “6%” to “6 percentage points,” unless you intend to report the approximately 11.5% relative increase.
- Define the predicted direction. For volatility, direction could mean change in volatility, movement relative to a threshold, or another target.
- Verify that 58% is statistically distinguishable from 50% after accounting for serial dependence and repeated testing.
- This bullet may be redundant if the QLIKE result is the project’s primary objective; retain it only if directional accuracy is economically relevant.

---

## Kaggle Market Prediction Competition

### Heading
- Use the actual competition name if disclosure is allowed. The current title is too generic to verify or understand.
- If the competition is well known, include the platform result in a form recruiters can confirm.

### “Placed 41st of 2,900 teams…”
- This is a strong and specific result.
- Top 2% is mathematically accurate, though the exact rank already communicates it.
- Confirm that 41st was the final private-leaderboard rank rather than an interim position.
- Make clear that this was a team result and avoid implying sole ownership of the entire model.

### “Cut validation leakage…”
- Use “leakage” only if information from the validation period actually entered model training or feature construction.
- Closing the local-to-leaderboard gap does not by itself prove leakage; it may reflect a more representative validation design.
- Verify that time-grouped folds respected both temporal ordering and any entity/group dependence.
- Explain the score scale if a 0.02 gap is not obviously material for that competition.

### “Wrote the team’s feature-selection script…”
- This is a good individual-contribution bullet.
- Confirm that permutation importance was calculated only within properly isolated training or validation folds.
- Quantify “without losing validation score” more precisely if there was a small change rather than literally zero change.
- Ensure that the reduction from 900 to 300 did not use private-leaderboard feedback.

---

## Skills

### “Programming: Python, R, SQL, C++, Kafka”
- Move Kafka out of the programming-language category; it is a platform/tool.
- Separate languages from frameworks, libraries, and infrastructure.
- Keep C++ only if you can handle technical interview questions in it.
- Add proficiency evidence through projects rather than expanding the list indiscriminately.

### “Methods: time-series econometircs…”
- Correct “econometircs” to “econometrics.”
- Move PyTorch out of “Methods”; it is a framework.
- Standardize capitalization and hyphenation.
- Ensure the methods list reflects demonstrated work. Market microstructure, forecasting, statistical learning, backtesting, and transaction-cost modeling may be more directly supported than a generic framework name.
- Add Bayesian inference only if it appears in your research or you can discuss substantive applications.

---

## Structural changes

- Add a **Research/Publications** section if the JASA submission, dissertation work, or independent volatility study is substantive. Your current resume does not adequately show what you did during most of the Ph.D.
- Put the most relevant quantitative material first. Depending on your target, education followed by quantitative experience/research may be stronger than leading the experience section with the bakery role.
- Reduce duplication across the three volatility-project bullets.
- Use consistent U.S. spelling, date formatting, punctuation, and terminology.
- Check all percentages for whether they represent relative changes or percentage-point changes.
- Be prepared to defend every performance claim with evaluation windows, baselines, transaction costs, uncertainty estimates, and leakage controls. Quant reviewers will scrutinize those details closely.

## Reviewer 2

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

## Reviewer 3

# Resume Review

**Target role inferred from the resume:** Quantitative Researcher / Quantitative Analyst, likely in systematic trading, market microstructure, or quantitative finance.

Because there is no job description, I cannot assess exact ATS keyword coverage or company-specific fit. I’m evaluating the resume against a typical quantitative-research role.

## Overall assessment

You have a strong technical foundation and several unusually good quantitative results:

- 0.4 Sharpe improvement after costs
- 34% to 21% turnover reduction
- 7% QLIKE improvement across 30 indices
- Top 2% competition result
- Reproducible research infrastructure
- Statistical theory and machine-learning research

The main problems are **credibility errors, unclear prioritization, missing context, and a few statements that could cause a technical reviewer to distrust the entire resume**. Fix those before making stylistic improvements.

---

## Highest-priority changes

### 1. Correct or remove the Sharpe-ratio bullet

**What to change:** The bullet stating that you annualized daily Sharpe by multiplying by 252.

**Why:** This is mathematically incorrect. Daily Sharpe is generally annualized using the square root of the number of periods, not the number itself. A quant reviewer will notice immediately. Worse, the bullet currently reads like an intentional methodological error rather than an accidental typo.

**Priority:** Critical. Correct the calculation and verify every reported Sharpe figure derived from it.

---

### 2. Correct the volatility-forecasting percentage

**What to change:** The bullet stating that reducing forecast error from 0.20 to 0.15 was a 33% improvement.

**Why:** That is a 0.05 reduction from a 0.20 baseline, which corresponds to a 25% reduction. The stated 33% figure does not follow from the numbers shown. A reviewer may interpret this as metric inflation.

Also clarify whether this result is distinct from the 7% QLIKE improvement. At present, the project appears to report several metrics without explaining how they relate.

**Priority:** Critical. Recalculate the percentage and make sure the metric, baseline, and evaluation period are internally consistent.

---

### 3. Fix the “Joining 120 microstructure features” bullet

**What to change:** The opening wording and the sentence structure of this bullet.

**Why:** The current construction is grammatically incorrect or incomplete. It also combines several substantial activities:

- point-in-time feature joining
- late-print deduplication
- schema versioning
- feature-store construction
- adoption in two later projects

Those are valuable accomplishments, but the current sentence makes them difficult to parse and obscures what you personally built.

**Why:** This is one of your strongest evidence points for production-quality quantitative research, but its current wording makes it look careless.

**Priority:** High.

---

### 4. Reconsider the current bakery role’s placement and explanation

**What to change:** The way the Sunrise Bakery role is presented, not necessarily the role itself.

**Why:** A quantitative-research recruiter will see a current assistant-store-manager role above a highly relevant quant internship and may immediately wonder:

- Is the Ph.D. still active?
- Is the candidate pursuing quant research full time?
- Why is the current role outside finance or research?
- Is there a gap, financial necessity, or career change?

The role demonstrates management, operations, budgeting, and inventory control, but those skills are not central to quant hiring. Its presence is not automatically negative; the issue is that the resume currently provides no context.

**What to change:** Make the chronology and current academic status unambiguous. Consider whether the role needs all of its current space. Keep the most transferable evidence—team management, budgeting, operational measurement—but avoid allowing it to dominate the top of the experience section.

**Priority:** High.

---

### 5. Add a concise professional summary

**What to change:** Add a short summary immediately below your contact information.

**Why:** The resume currently forces the reader to infer your target identity from several sections. A recruiter has to reconcile:

- Ph.D. candidate in Statistics
- quantitative-research internship
- independent volatility research
- bakery management
- theoretical statistics research

Your strongest positioning is not obvious in the first ten seconds. The summary should establish that you are a statistics Ph.D. candidate focused on quantitative research, time-series modeling, market microstructure, and empirical validation.

**Why:** This would resolve the largest narrative problem without changing your underlying experience.

**Priority:** High.

---

## Section-by-section review

## Header and contact information

### What to change

- Label the code link clearly as a professional repository or portfolio.
- Confirm that the linked material is polished, accessible, and consistent with the resume.
- Consider adding a professional networking profile if you have one.
- Add a location only if it helps with hiring logistics; otherwise the current city information in the experience and education sections is sufficient.

### Why

The code link is valuable for a quantitative candidate, but `example.com/code/mpatel` does not immediately tell a recruiter whether it contains research code, competition work, packages, or general programming projects. The link should make the intended evidence obvious.

Also, make sure every public repository is free of:

- unfinished notebooks
- hard-coded credentials
- inconsistent results
- undocumented backtests
- code that contradicts the resume’s reported numbers

---

## Education

### Ph.D. candidate in Statistics

### What to change

- Add a dissertation or research-area descriptor if it is relevant to quantitative research.
- Clarify whether you are enrolled full time and whether the expected completion date is firm.
- Consider adding selected coursework only if it includes highly relevant subjects not demonstrated elsewhere.
- Make the relationship between your statistical-learning research and your finance work easier to see.

### Why

The Ph.D. is your strongest credential, but “Statistics” alone does not tell a quant recruiter whether your work is theoretical statistics, machine learning, econometrics, time series, or something else. Your experience suggests a useful combination of statistical theory, simulation, forecasting, and financial modeling, but the education section does not help connect those areas.

### Timeline issue

Your education and experience timeline needs clarification:

- B.S. ends in May 2020.
- Graduate Research Assistant role begins in June 2020.
- Ph.D. begins in September 2021.

This may be perfectly reasonable, but the resume currently leaves the transition unexplained. Make sure the reader can tell whether the research-assistant role was a predoctoral research position, a university staff role, or part of an earlier graduate program.

---

## Experience

## Sunrise Bakery

### First bullet: team and labour budget

### What to change

- Retain the management and budget evidence, but make its relevance to the target role less prominent than your quantitative work.
- Ensure “labour” follows the spelling convention used throughout the rest of the resume and your target market.
- Clarify whether you owned the budget, monitored it, or merely operated within it.

### Why

This is credible evidence of responsibility, but “keeping the store within its weekly labour budget” is less distinctive than your research results. A quant recruiter will value it mainly as evidence of reliability, operational discipline, and people management.

### Second bullet: unsold bread

### What to change

- Keep the quantified inventory result.
- Specify the measurement period or comparison period if available.
- Make clear whether the reduction came from forecasting, ordering changes, production changes, or supplier coordination.

### Why

The 12% to 7% result is useful because it shows operational measurement and optimization. Without the mechanism, however, it reads as a generic store-management result rather than evidence of analytical decision-making.

---

## Northpeak Capital

This is the most important section of the resume and should receive the greatest visual and narrative emphasis.

### Order-book imbalance signal

### What to change

- Verify the definition of “added 0.4 Sharpe to the desk’s book.”
- Clarify whether this was an incremental Sharpe contribution, a standalone strategy Sharpe, or a change in portfolio-level Sharpe.
- State clearly that the result was out of sample and after costs, as you already do.
- Confirm that the 18-month period was not used in model selection or parameter tuning.

### Why

This is potentially your strongest finance accomplishment. It is also the kind of claim a technical interviewer will interrogate. “Added 0.4 Sharpe to the desk’s book” can mean several different things, and the distinction matters.

The bullet should be retained only if you can defend:

- the portfolio construction method
- the benchmark
- the transaction-cost assumptions
- the statistical significance
- the turnover treatment
- the degree of your personal ownership

### Turnover and position smoother

### What to change

- Explain what “keeping 90% of gross returns” means relative to the unsmoothed signal.
- Ensure the one-third slippage reduction and the 34% to 21% turnover reduction are calculated on the same sample and definition.
- Clarify whether the result was simulated, paper-traded, or deployed.

### Why

This is a strong signal of practical quant judgment. It demonstrates that you considered trading costs rather than optimizing only predictive accuracy. However, the bullet contains several metrics, and the reader may not know which is the primary outcome.

### HAR-RV and Diebold–Mariano testing

### What to change

- Define the baseline clearly the first time it appears, unless your target audience is strictly technical.
- Explain what was tested: forecast accuracy, return forecasts, volatility forecasts, or another quantity.
- Add statistical interpretation only if you can support it, such as significance level or the direction of the test result.
- Ensure that “across the 30 indices” refers to 30 independent evaluation series and not merely repeated observations pooled together.

### Why

The use of Diebold–Mariano tests is a good differentiator. It shows more rigor than simply reporting a model improvement. But the current bullet gives the test name without enough context to establish what the test validates.

### Feature store

### What to change

- Fix the grammar.
- Clarify the technical stack if relevant: storage layer, orchestration, data format, or versioning system.
- Distinguish what you designed from what you merely used.
- Retain the adoption evidence that the team reused it in two later projects.

### Why

This bullet bridges research and production engineering, which is highly valuable for quant roles. It should be easier to find and understand.

### Annualized Sharpe bullet

As noted above, correct or remove it. Do not leave it in its current form.

### Documentation bullet

### What to change

- Keep the bullet, but specify whether the documentation was used by the research team, reviewed by senior researchers, or incorporated into the desk’s standard process.
- Consider whether “future interns” understates the audience and importance of the work.

### Why

Documentation is useful evidence of research maturity, but the current wording makes it sound like an administrative task. The important point is reproducibility, risk disclosure, and transfer of research knowledge.

---

## Ridgeway University research role

### Simulation pipeline

### What to change

- Keep this near the top of the role because it demonstrates engineering and computational efficiency.
- Identify the cluster environment or relevant tools if they are material to the target role.
- Explain what changed technically to reduce runtime from three days to five hours.
- State whether the pipeline was adopted by other lab members.

### Why

This is an excellent quantitative-research bullet. The 2,000-run scale and runtime reduction are concrete, and reproducibility by seed is directly relevant to reliable research.

### Variance bound and JASA paper

### What to change

- Keep the theoretical result.
- Make the publication status unmistakably clear.
- Add authorship position if it is favorable and accurate.
- Include the paper in a separate Publications or Research Output section rather than leaving it only inside a job bullet.
- Verify whether “my proof” accurately describes your contribution relative to coauthors.

### Why

A JASA submission can be a major credibility signal, but the current presentation buries it. A quant research hiring manager may care about rigorous statistical thinking, and this is your clearest evidence of that.

Do not imply acceptance or publication. “Under review” must remain explicit until the status changes.

### Teaching bullet

### What to change

- Keep it if the role values communication, mentoring, or leadership.
- Consider reducing its space relative to the more technically relevant bullets.
- Retain the 60 students and teaching rating because those are concrete.

### Why

This is credible but not central to most quant researcher applications. It is useful as supporting evidence, not as one of the main reasons to interview you.

### R package, cluster, reading group, and grading bullet

### What to change

- Separate the software contribution from the administrative and teaching responsibilities.
- Verify the 3,000-download figure and define whether it means total downloads, unique users, or package downloads.
- Add a repository or package name if it is publicly available.
- Do not let maintaining the cluster, organizing the reading group, and grading dilute the package achievement.

### Why

The open-source package is valuable evidence of software quality and external adoption. The current bullet hides it inside a long list of unrelated activities.

---

## Projects

## Volatility Forecasting Study

This is relevant, but it currently repeats itself.

### First bullet

### What to change

- Retain the 7% QLIKE result if it is correctly measured.
- State the evaluation design clearly: rolling or expanding window, train/test separation, and whether the results are truly out of sample.
- Clarify whether the 30 indices overlap with the Northpeak work or represent an independent study.

### Why

This is your strongest independent project for demonstrating direct financial modeling experience. The methodological evaluation matters more than simply naming PyTorch.

### Second bullet

### What to change

- Correct the percentage calculation.
- Explain how “forecast error” was defined.
- Determine whether this metric adds information beyond QLIKE.
- Remove it if it is merely a restatement of the first bullet using another presentation of the same result.

### Why

Three bullets currently make the project look repetitive. A technical reader may wonder whether the reported improvements are separate experiments or different summaries of one experiment.

### Third bullet

### What to change

- Clarify how directional hit rate relates to volatility forecasting.
- Explain what “directional” means in this context.
- Confirm that this is not a target mismatch: predicting volatility magnitude and predicting direction are not necessarily the same task.
- Consider whether this result belongs in the project if it was not part of the original model objective.

### Why

The 52% to 58% improvement sounds attractive, but a reviewer may question whether directional hit rate is an appropriate evaluation criterion for a volatility model. It could create more skepticism than value unless the connection is clear.

### Overall project changes

- Reduce repetition among the three bullets.
- Make the evaluation methodology more prominent.
- Include data provenance and leakage controls if the project is public.
- Link to code or a report.
- Clarify whether the model was developed independently or adapted from published work.

---

## Kaggle competition

### Placement result

### What to change

- Keep this result.
- State whether 41st of 2,900 teams was on the private leaderboard, since you already mention that.
- Clarify your individual contribution within the team of three.

### Why

Top 2% is a strong external validation signal, but team competitions require attribution. A recruiter will want to know what you personally designed or implemented.

### Leakage-control bullet

### What to change

- Keep it.
- Explain whether the time-grouped folds were your idea and implementation.
- Make sure the reported 0.02 gap is defined clearly.
- Highlight this as evidence of validation discipline, not merely a score-improvement trick.

### Why

This is one of the better bullets in the project because it shows that you understand temporal leakage, a frequent failure mode in financial machine learning.

### Feature-selection bullet

### What to change

- Clarify why there were 900 candidate features but 300 engineered features in the earlier bullet.
- Explain whether permutation importance was computed within each training fold to avoid leakage.
- State whether the script was used by the whole team or only for your own experiments.

### Why

The technical idea is relevant, but the relationship between the feature counts is unclear. A quant reviewer will be alert to selection leakage and will want to know whether feature selection used information from validation or leaderboard data.

---

## Skills

### What to change

- Correct the spelling of “econometrics.”
- Use technically standard category names.
- Remove or de-emphasize tools that are not supported elsewhere in the resume unless you can demonstrate meaningful proficiency.
- Add the specific quantitative tools that are genuinely central to your work, such as time-series forecasting, market microstructure, volatility modeling, backtesting, statistical testing, or data engineering—provided you can defend each one.
- Consider listing relevant libraries separately from programming languages.
- Indicate proficiency only if the format remains clean and defensible.

### Why

The skills section currently includes:

- Python
- R
- SQL
- C++
- Kafka
- time-series econometrics
- Bayesian inference
- gradient boosting
- PyTorch

But the experience section gives no evidence for some of these, especially Kafka and C++. Conversely, your resume demonstrates several skills that are not named explicitly, including:

- market microstructure
- order-book modeling
- volatility forecasting
- transaction-cost modeling
- feature stores
- point-in-time data handling
- Monte Carlo simulation
- reproducible research
- statistical forecast comparison

That mismatch weakens ATS coverage and makes the skills section look less curated.

### Important concern

Do not add every technology you have touched. For a quant role, unsupported tools can invite questions and make the resume appear keyword-oriented rather than experience-oriented.

---

## Narrative and positioning

### What the resume currently communicates

The document appears to tell four different stories:

1. A statistics Ph.D. candidate doing theoretical and machine-learning research.
2. A quantitative researcher with direct trading and market-microstructure experience.
3. A machine-learning practitioner focused on volatility forecasting.
4. An operations manager in retail.

All four are true, but the target-role story is not sufficiently dominant.

### What to change

Make the following progression visually and substantively clear:

1. Statistical and computational foundation.
2. Applied quantitative research.
3. Financial modeling and empirical validation.
4. Production-quality data and research infrastructure.
5. Leadership and communication as supporting evidence.

### Why

The strongest differentiator is the combination of:

- rigorous statistics
- financial time-series research
- market microstructure
- research engineering
- reproducibility

That combination is more compelling than presenting yourself as a generic machine-learning candidate.

---

## Missing or underdeveloped sections

### Publications or research output

**What to change:** Add a compact Publications, Working Papers, or Research Output section.

**Why:** You mention a JASA paper under review but do not give the reader a formal publication entry. For a statistics Ph.D. candidate, this omission is significant.

Include only accurate statuses:

- published
- accepted
- under review
- working paper
- manuscript in preparation

Do not imply that the JASA paper has been accepted.

### Research interests

**What to change:** Consider a short research-interest line if applying to research-heavy roles.

**Why:** It would help connect your theoretical statistics work, market microstructure, and volatility forecasting. Avoid making this a long list of keywords.

### Academic status

**What to change:** Make your current Ph.D. status and availability unmistakable.

**Why:** The current bakery role makes this particularly important. Recruiters should not have to infer whether you are seeking internships, full-time work after graduation, or part-time research employment.

---

## Technical credibility audit

Before submitting, verify these claims carefully:

| Claim | Main concern |
|---|---|
| 0.4 Sharpe added to the desk’s book | Attribution and portfolio-level definition |
| 18 months out of sample | Whether model selection contaminated the period |
| 90% of gross returns retained | Definition of gross returns and comparison baseline |
| Slippage reduced by one third | Cost model and sample consistency |
| 30 indices | Whether results are independent and correctly aggregated |
| 2,000 runs reduced from three days to five hours | Reproducibility and actual cause of speedup |
| JASA paper under review | Accurate status and authorship |
| 3,000 package downloads | Definition and source of download count |
| 7% QLIKE improvement | Evaluation design and baseline |
| 33% forecast-error improvement | Arithmetic inconsistency |
| 6 percentage-point hit-rate increase | Relevance to volatility forecasting |
| 41st of 2,900 teams | Individual contribution and private leaderboard details |

A technical reviewer will likely ask about several of these. The resume should contain only numbers you can reproduce from code, logs, papers, or documented analyses.

---

## Suggested priority order

### Tier 1: Do these first

1. Correct the Sharpe annualization error.
2. Correct the 33% forecast-error calculation.
3. Fix the malformed feature-store bullet.
4. Clarify the Ph.D., research-assistant, and bakery timeline.
5. Add a targeted summary.
6. Add the JASA paper to a formal research-output section.
7. Verify and clarify the 0.4 Sharpe claim.
8. Resolve the relationship among the three volatility-project results.

### Tier 2: Do next

1. Reorder or shorten the bakery section so quant experience leads the narrative.
2. Separate the R package achievement from administrative duties.
3. Clarify personal contributions to the Kaggle project.
4. Strengthen the skills taxonomy and correct “econometrics.”
5. Add demonstrated quantitative-finance skills that are currently absent from the skills section.
6. Add data-split, leakage-control, and backtesting details where relevant.
7. Make the code portfolio easier to interpret.

### Tier 3: Polish after the above

1. Improve line wrapping and prevent bullets from breaking awkwardly.
2. Standardize punctuation and capitalization.
3. Standardize spelling conventions, including “labour/labor.”
4. Reduce repeated use of “cut,” “improved,” and similar verbs.
5. Ensure each bullet contains one primary accomplishment rather than several loosely connected tasks.

---

## Likely hiring outcomes

| Reader | Likely reaction |
|---|---|
| Recruiter | Interested if the summary makes the quant target explicit; otherwise uncertain because of the bakery role |
| HR screen | Likely positive once Ph.D. status and availability are clarified |
| Quant hiring manager | Strong interest in the Northpeak work, volatility study, and simulation pipeline |
| Technical interviewer | Likely to probe the Sharpe calculation, forecast-error arithmetic, leakage controls, and metric definitions |
| Research-oriented reviewer | Positive about the statistical theory and JASA submission, but may want formal publication details |

## Bottom line

Your resume has the substance for a strong quantitative-research application. The biggest risk is not lack of achievement; it is that **a few technical inconsistencies undermine trust in otherwise impressive results**.

Fix the two mathematical inconsistencies first, clarify ownership and evaluation methodology, make the Ph.D.-to-quant narrative explicit, and give the research output more formal prominence. Do not add more technologies or more bullets until the existing claims are internally precise and easy to verify.

## Reviewer 4

## Top priorities

1. **The claim uses standard Diebold–Mariano tests incorrectly for a nested-model comparison and does not report the result that supposedly confirms the gain.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   Standard Diebold–Mariano tests generally do not have the correct null distribution for nested forecasting models because parameter estimation affects the comparison. Testing 30 indices also requires multiple-comparison handling, so a reader cannot judge whether the reported gain is statistically supported or how large it was.
   **How to change it:** Replace the standard nested-model comparison with an appropriate procedure such as a Clark–West adjustment or valid bootstrap, include multiple-comparison handling across the 30 indices, and add [the validated test result or significance level].
2. **The annualized Sharpe calculation is wrong, and the line reports a calculation without showing what result or decision it enabled.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is annualized by multiplying by the square root of 252, not by 252, so the current wording materially overstates the reported performance. A reader also sees an activity—reporting a metric—but no validated result, comparison, or research conclusion that demonstrates its value.
   **How to change it:** Replace "252" with "√252" and replace "before reporting it to the desk" with [the validated annualized performance result and the comparison it supported].
3. **The stated 33% improvement is mathematically incorrect, and the line does not name the forecast-error metric.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   A reduction from 0.20 to 0.15 is 0.05 divided by 0.20, or a 25% reduction, not 33%. Without the metric name, a reader cannot tell whether the values are RMSE, MAE, MAPE, or another measure, so the result is difficult to interpret.
   **How to change it:** Replace "a 33% improvement" with "a 25% reduction" and replace "forecast error" with [the specific error metric].

## What already works

- “Built a short-horizon order-book imbalance signal…”: Pairs a concrete performance result with out-of-sample validation and transaction costs.
- “Joining 120 microstructure features point-in-time across…”: Shows technically specific ownership of difficult point-in-time market-data preparation.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: Uses a direct baseline comparison rather than an unsupported performance claim.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The feature-store bullet begins with a dangling modifier and puts the reusable outcome after too many implementation details.**
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  The opening participial phrase has no grammatical subject that performs the joining, deduplication, and versioning, so the sentence is grammatically unstable. A scanning reader also encounters data-preparation methods before seeing that the work produced a reusable capability adopted in two later projects.
  **How to change it:** Move "built a feature store the team reused in two later projects" to the start of the bullet, make the feature store the grammatical subject of the implementation work, and retain only the most telling implementation detail.
- **The documentation bullet states what was recorded but not what the documentation enabled.**
  > Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.
  A reader can see the assumptions, cost model, and failure regimes, but cannot tell whether the wiki improved reuse, handoff, debugging, or later research. Ending with "for future interns" describes a narrow audience rather than a concrete benefit.
  **How to change it:** Replace "for future interns" with [the single most concrete reuse or benefit the wiki enabled].

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The phrase "making runs reproducible by seed" overstates what seeding alone establishes.**
  > Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours and making runs reproducible by seed.
  A seed can make random-number generation repeatable, but parallel execution, software versions, inputs, configuration, and cluster settings can still change results. A reader may therefore doubt the reproducibility claim because the line does not identify the controls that made the full study repeatable.
  **How to change it:** Replace the phrase with wording that says the runs were reproducible with fixed seeds and add [recorded code, dependencies, inputs, configuration, and controlled parallel random-number handling].
- **The bullet uses a first-person pronoun, breaking the resume's phrase-based style.**
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  The rest of the resume presents accomplishments without first-person narration, so "my proof" makes this line look less polished and less consistent. It also draws attention to the writer instead of the mathematical contribution.
  **How to change it:** Replace "my proof" with "the proof" or remove the pronoun, keeping the publication detail attached to the contribution.
- **The teaching rating does not identify the basis on which the 4.8/5 score was collected.**
  > Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.
  A reader cannot tell whether the rating came from student course evaluations, a subset of responses, or another source. Without that context, the number is harder to interpret as evidence of teaching effectiveness.
  **How to change it:** Add [the rating's response basis] immediately after the teaching rating.
- **The package's download result is separated from the package contribution by several unrelated duties.**
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  The downloads show the package's reach, but the line leaves the effect of maintaining the cluster, organizing the reading group, and grading unstated. Combining those duties also makes the stronger software accomplishment harder to scan and connect to its outcome.
  **How to change it:** Place "which was downloaded 3,000 times in its first year" immediately after the package contribution, then remove the unrelated duties or add [the single most meaningful outcome of those duties] if they must remain.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The directional hit-rate change should be stated in percentage points, and the result is quantified redundantly.**
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The change from 52% to 58% is six percentage points, while the relative increase is approximately 11.5%, so "6%" is ambiguous and can appear mathematically inconsistent. Giving both the change and the endpoints also repeats the same result.
  **How to change it:** Replace "by 6%" with "by 6 percentage points" and remove either the endpoint values or the percentage-point statement; retain only one form of the result.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The validation and leaderboard comparisons use unnamed metrics, so the reported gaps and preserved performance are not interpretable.**
  > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  A reader cannot tell what the 0.02 gap measures or whether the preserved validation score is an error, ranking, or another evaluation metric. Naming each metric would make the before-and-after comparisons credible without requiring another result.
  **How to change it:** Replace "0.02 gap" with "a 0.02 [validation metric] gap" and replace "validation score" with [the validation metric] if accurate.

## Across the whole résumé

- **The Methods skills line misspells "econometrics."**
  > econometircs
  The error is immediately visible in a compact skills section, where recruiters often scan for keywords quickly. The misspelling can prevent matching against the correctly spelled term and weakens the document's presentation.
  **How to change it:** Replace "econometircs" with "econometrics."

## Lower priority (11)

- “Managed opening shifts and a team…”: The phrase "keeping the store within its weekly labour budget" does not show the size of the budget result.
- “Derived a variance bound for a…”: "my proof tightens the previous bound by a log factor" does not show the specific bounds being compared.
- “Taught weekly recitations for 60 students…”: "earning a 4.8/5 teaching rating" does not identify the rating's response basis.
- “Managed opening shifts and a team…”, “Ran daily stock counts and supplier…”: "Managed" is past tense even though the role is current. (and 1 more like it)
- “Derived a variance bound for a…”: "is now Section 3 of a paper under review at JASA" puts the publication detail after a dense technical clause and makes the bullet harder to scan.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: "QLIKE" is unexplained specialist shorthand; write "QLIKE loss" only if the audience knows the metric, or spell out the metric on first use.
- “Improved the model’s directional hit rate…”: "with a temporal convolutional model" repeats the model description in bullet 0 without adding a distinct action or result.
- “Placed 41st of 2,900 teams with…”: "Placed 41st of 2,900 teams" and "finishing in the top 2%" repeat the ranking rather than adding distinct information.
- “Cut validation leakage by switching to…”, “Wrote the team’s feature-selection script using…”: The result appears after the implementation detail, making the measurable improvement harder to scan. (and 2 more like it)
- Move Sunrise Bakery to a brief Additional Experience line at the bottom, or cut it if it is not needed. Its current placement makes the career appear to move backward from Quantitative Research Intern to Assistant Store Manager.
- …and 1 more.
