> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed:

- **5 experience/project entries** for content and wording
- **Full resume narrative**
- **File format and ATS parsing**
- Education entries were not bullet-reviewed because they contain no bullets
- No job description was loaded, so this was not a job-match review

The PDF is one page, extracts cleanly, and has no layout or ATS blockers. The main changes are:

1. **Fix the Sharpe-ratio calculation**
   - The Northpeak bullet saying the daily Sharpe ratio was annualized by multiplying by 252 is technically incorrect.
   - Remove that bullet or correct the calculation and define whether the reported `0.4 Sharpe` is live, simulated, or backtested.
   - Clarify the comparison baseline for the `0.4 Sharpe` result.

2. **Correct percentage terminology**
   - The volatility-project change from `0.20 to 0.15` is a **25% reduction**, not a 33% improvement.
   - The hit-rate change from `52% to 58%` is **6 percentage points**, not 6%.
   - Clarify the aggregation method and forecast horizon for the reported 7% improvement.

3. **Make the quantitative-research narrative more prominent**
   - The Assistant Store Manager role currently appears first and interrupts the quantitative progression.
   - Move it to a shortened **Additional Experience** section after the quantitative roles and projects, or reduce it to one line.
   - Within Northpeak, retain the sequence of result → trading-cost improvement → validation → reusable infrastructure → documentation.
   - The forecasting project has three bullets describing closely related results; consolidate or distinguish them more clearly.

4. **Add context to several metrics**
   - State the baseline or measurement conditions for:
     - `90% of gross returns`
     - `lowering estimated slippage by a third`
     - the `0.02 gap` between local validation and leaderboard scores
     - the `4.8/5 teaching rating`
     - the `3,000 downloads`
   - Clarify whether download counts are unique downloads or another measure.

5. **Remove or substantiate unsupported skills**
   - The narrative review found no supporting experience for **SQL, C++, Kafka, or Bayesian inference**.
   - Either connect those skills to a specific project/role or remove them.
   - Correct the spelling of **“time-series econometrics.”**

6. **Clean up wording issues**
   - Remove first-person wording from the research bullet containing **“my proof.”**
   - Put outcomes before long method lists where possible, particularly in the Sunrise Bakery and feature-store bullets.
   - The Kaggle result currently states both `41st of 2,900 teams` and `top 2%`; these communicate essentially the same outcome, so one may be enough.

The detailed specialist findings and entry-by-entry notes are available through `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · wording 89 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The line incorrectly uses a standard Diebold–Mariano test to validate a forecast gain against a nested HAR-RV baseline.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   Standard Diebold–Mariano inference is generally not calibrated for nested model comparisons, so the reported confirmation may have invalid significance. Comparing 30 indices also requires handling cross-sectional dependence and, where relevant, multiple testing, which affects how credible the performance claim is.
   **How to change it:** Replace "standard Diebold-Mariano tests" with the valid procedure actually used, such as [the appropriate nested-model test or panel/bootstrap correction], and remove the confirmation claim unless the corrected test supports it; frame the result as methodological support for the headline signal result.
2. **The résumé reports an unreliable Sharpe result because it annualizes a daily Sharpe by multiplying by 252 instead of using the square root of 252.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   Under the standard independent-daily-return approximation, annualization uses the square root of the number of trading days, not the number itself. The current wording materially overstates the Sharpe and makes the result in the Northpeak headline difficult to trust.
   **How to change it:** Remove the annualization bullet and state the Sharpe definition and correct annualization consistently in the Northpeak headline, using "the square root of 252" or the appropriate adjusted convention if returns were autocorrelated or overlapping.
3. **The line incorrectly calls the change from 0.20 to 0.15 a 33% improvement.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The decrease is 0.05 relative to 0.20, which is a 25% reduction, not 33%. An incorrect calculation undermines confidence in the other reported forecasting results.
   **How to change it:** Replace "a 33% improvement" with "a 25% reduction" and describe the direction explicitly as a reduction in forecast error.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- **The labour-budget claim gives no figure showing the scale of the operational or financial result.** *(about 5 words to add)*
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  A hiring manager can see that labour was controlled, but cannot tell whether this meant avoiding a meaningful overrun, achieving savings, or simply meeting an expected baseline. A concrete variance would make the claim defensible and comparable.
  **How to change it:** Move the outcome to the front and replace or qualify the phrase with [amount or percentage under budget] or [average weekly labour-cost variance versus budget], while retaining the team-management detail.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The reported 0.4 Sharpe increment does not identify its comparison baseline or whether it came from a live allocation or backtest.** *(about 10 words to add)*
  > Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
  A quantitative reader cannot tell whether this is an incremental contribution to an existing book, a standalone signal result, or only a simulated portfolio result. Without the comparison and uncertainty, the size and investment relevance of the 18-month estimate are difficult to judge.
  **How to change it:** Replace or qualify "to the desk’s book" with [incremental Sharpe versus the desk book] or [signal Sharpe versus the baseline], and add [baseline Sharpe before adding the signal] or [confidence interval or statistical significance of the Sharpe difference] without implying live deployment if this was only backtested.
- **The return-retention and slippage claims do not identify their denominators or measurement conditions.** *(about 8 words to add)*
  > Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.
  A reader cannot tell whether 90% means 90% of the unsmoothed signal's gross returns or another return figure. Estimated slippage is model-dependent, so the reader also needs the baseline slippage estimate or comparison strategy to judge whether the reduction is meaningful.
  **How to change it:** Replace the retention phrase with "90% of the unsmoothed strategy’s gross returns" or the actual denominator, and state the baseline estimated slippage and comparison conditions, such as [the unsmoothed strategy’s estimated slippage].
- **The test bullet names a procedure but gives no loss metric, test result, or significance outcome.** *(about 6 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  Naming a test does not show the size or reliability of the forecast gain. A hiring manager cannot tell whether the result was statistically meaningful across the 30 indices or merely observed in the backtest.
  **How to change it:** Add [loss metric] and [corrected significance result or number of indices showing a significant gain] after the valid comparison procedure.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The proof claim does not identify which bound improved or the assumptions under which the log-factor improvement holds.** *(about 8 words to add)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  A log-factor improvement can be substantial or immaterial depending on the estimator, sparsity regime, probability statement, and comparison bound. Without that anchor, a statistics reader cannot assess the theoretical contribution from the line alone.
  **How to change it:** Replace the general comparison with [the prior and new bound or the parameter regime in which the logarithmic improvement holds], and retain the paper-status detail only if space allows.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The change from 52% to 58% is 6 percentage points, not a 6% relative increase.** *(no words)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The current wording is numerically wrong or ambiguous because a relative increase would be approximately 11.5%. That distinction matters when a reader compares the reported hit-rate improvement with other performance claims.
  **How to change it:** Replace "by 6%" with "by 6 percentage points"; use approximately 11.5% only if the study actually reports a relative increase.
- **The 7% QLIKE result does not say how the improvement was aggregated or what forecast horizon it covers.** *(about 5 words to add)*
  > Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.
  A technical reader cannot tell whether the result is an average across indices, a pooled result, or the outcome for one selected horizon. That makes the comparison harder to reproduce or judge.
  **How to change it:** Specify the aggregation or horizon if it materially clarifies the result, such as [average QLIKE reduction across the 30 indices] or [forecast horizon].
- **The error-reduction claim attributes the result to two changes without showing the comparison or an ablation of either change.** *(about 8 words to add)*
  > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
  A reader cannot tell whether the result was measured against the model before both changes or whether the realized-volatility features and asymmetric loss were evaluated separately. The line therefore overstates what can be attributed to each component.
  **How to change it:** Clarify the comparison with [whether the result was measured against the model before both changes or through an ablation of each change], only if the study supports that distinction.
- **The phrase "directional hit rate" does not define what direction is being predicted.** *(about 6 words to add)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  A reader cannot tell whether direction means an increase versus decrease from the previous period, a thresholded movement, or another target. Hit rate evaluates direction rather than the accuracy of the volatility level or magnitude, so the target definition affects how the result is interpreted.
  **How to change it:** Add [the reference used to define an upward or downward volatility move] if that target definition is important to the study.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The 0.02 validation-to-leaderboard gap does not identify the score metric or whether the difference is absolute.** *(about 12 words to add)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  A hiring manager cannot tell whether 0.02 means two percentage points, a difference in a loss metric, or a relative change. Without the metric and before-and-after scores, the leakage fix is difficult to verify.
  **How to change it:** Name the evaluation metric and replace the vague gap with the actual comparison: [metric name] moved from [local-validation score and leaderboard score before the change] to [scores after the change].
- **The feature-selection result does not identify the validation metric or show the score before and after trimming the features.** *(about 8 words to add)*
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  The reader can see that performance was intended to remain stable, but cannot tell whether this means accuracy, a ranking metric, or a loss value. The claim is less persuasive without the actual unchanged comparison.
  **How to change it:** Name the validation metric and add [metric name] held at [validation score before] versus [validation score after].

## Across the whole résumé

- **Sunrise Bakery should move to a shortened Additional Experience section after the quantitative research experience and projects, or be reduced to one line.** *(no words)*
  > Sunrise Bakery | Assistant Store Manager
  Its current top position makes the résumé appear to move from quantitative research into retail management. That ordering can obscure the stronger fit provided by Northpeak, the research assistantship, and the technical projects.
  **How to change it:** Move the Sunrise Bakery entry below the quantitative research experience and projects and shorten it to one line if space requires; retain the quantitative roles and projects as the main experience sequence.

## Set aside (7)

Worth knowing, and not worth the space on this page:

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e1:b3, s2:e1:b4, s2:e1:b5, s2:e2:b0, s2:e2:b2, s2:e2:b3, s3:e0:b1: "the team reused in two later projects" shows adoption but not what the feature store improved for those projects. (and 10 more like it)
- s2:e0:b0, s2:e0:b1, s2:e2:b3, s2:e1:b3, s3:e1:b1: "keeping the store within its weekly labour budget" buries the outcome after the methods; move it forward so the result is visible during a scan: "Kept the store within its weekly labour budget while managing opening shifts and a team of 6 bakers and cashiers." (and 4 more like it)
- s3:e1:b0: "Placed 41st of 2,900 teams" and "finishing in the top 2% of the private leaderboard" redundantly state the same ranking outcome.
- skills: SQL — no experience or project bullet shows SQL use. (and 3 more like it)
- skills: time-series econometircs — the skill is misspelled; the forecasting work supports time-series methods, but the listed spelling should be corrected to time-series econometrics.
- s2:e2, s3:e0: s2:e2:b0 and s2:e2:b3 repeat: Both mention maintaining or building shared research infrastructure on the lab cluster; separate the cluster work from the R-package and service responsibilities. (and 3 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-0d31a7d8.md.

