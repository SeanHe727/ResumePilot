Your resume has strong quantitative research content, but it currently mixes excellent evidence with a few technical red flags, redundant bullets, and wording that may make a recruiter question the analysis. The biggest issue is the Sharpe-ratio bullet.

## Highest-priority changes

### 1. Remove the incorrect Sharpe-ratio bullet

> “Annualized the signal’s daily Sharpe ratio by multiplying it by 252…”

This is incorrect under the usual assumptions. A daily Sharpe ratio is generally annualized by multiplying by **√252**, not 252. More importantly, this bullet describes a basic reporting step rather than an accomplishment and could undermine confidence in the rest of the analysis.

Delete it. If you need to mention annualization, incorporate it into the first bullet:

> Built a short-horizon order-book imbalance signal for liquid index futures that improved the desk’s out-of-sample Sharpe by 0.4 over an 18-month backtest after transaction costs.

If the 0.4 figure is an absolute Sharpe improvement, say so explicitly.

### 2. Remove redundancy in the volatility forecasting project

These bullets overlap substantially:

- “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%…”
- “Cut forecast error from 0.20 to 0.15…”
- “Improved the model’s directional hit rate…”

They appear to describe the same model and dataset. The “forecast error” metric is also unclear: Is it RMSE, MAE, or something else? QLIKE is already a meaningful volatility-forecasting metric.

Use two bullets with clearly defined metrics:

> - Reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices using a temporal convolutional model trained on realized-volatility features.  
> - Improved directional accuracy from 52% to 58% using an asymmetric loss, with evaluation based on rolling time-series splits.

Only retain the 0.20-to-0.15 result if you name the metric and explain why it is not redundant with QLIKE.

### 3. Clarify statistical significance

“Confirmed the forecast gain … with standard Diebold-Mariano tests” is weaker than reporting the result.

If accurate, use:

> - Demonstrated statistically significant forecast improvement versus a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices; report the test specification and adjusted p-values if relevant.

Avoid implying significance unless you can provide p-values or confidence intervals. Also clarify whether tests were adjusted for multiple comparisons.

### 4. Fix the overloaded research-assistant bullet

This bullet contains too many unrelated accomplishments:

> “Released an open-source R package… while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses…”

Split it into separate bullets. For example:

> - Released an open-source R package for high-dimensional covariance estimation, downloaded more than 3,000 times in its first year.  
> - Maintained the lab’s shared computing cluster and built reproducible workflows for simulation studies.  
> - Organized the weekly reading group and graded for two graduate courses.

You may not need all three. For a quant or research role, prioritize the package and computing work.

## Suggested revised experience section

### Northpeak Capital — Quantitative Research Intern

- Built a short-horizon order-book imbalance signal for liquid index futures that improved the desk’s out-of-sample Sharpe by 0.4 over an 18-month backtest after transaction costs.
- Reduced daily turnover from 34% to 21% with a cost-aware position smoother, retaining 90% of gross returns while reducing estimated slippage by one-third.
- Evaluated forecast performance against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices; report p-values or confidence intervals if available.
- Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted by two subsequent projects.
- Documented backtest assumptions, transaction-cost methodology, and known failure regimes in the desk’s research wiki.

“Joining 120 features” is awkward. “Integrated,” “aligned,” or “joined” the data sources is clearer. Also explain what “point-in-time” means only if the audience may not know it; for quant roles, it is appropriate terminology.

### Statistical Learning Lab — Graduate Research Assistant

- Built a reproducible cluster-based simulation pipeline, reducing a 2,000-run Monte Carlo study from three days to five hours.
- Derived a variance bound for a sparse regression estimator, tightening the prior result by a logarithmic factor; the proof appears in Section 3 of a manuscript under review at JASA.
- Released an open-source R package for high-dimensional covariance estimation, downloaded more than 3,000 times in its first year.
- Taught weekly recitations for 60 graduate probability students, wrote 12 problem sets, and received a 4.8/5 teaching rating.

The JASA statement is fine if accurate, but “manuscript under review” is not the same as publication. Consider adding a separate **Publications / Research** section if you have a title, coauthors, or preprint link.

## Improve the project section

The projects are strong but would benefit from more methodological precision.

### Volatility Forecasting Study

Use something like:

> - Reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices using a temporal convolutional model and realized-volatility features.  
> - Increased directional accuracy from 52% to 58% using an asymmetric loss and rolling time-series evaluation.

Specify the train/test design, such as “rolling-origin evaluation” or “walk-forward validation,” if space permits. This is especially important for time-series work.

### Kaggle project

This is already effective. Slightly tighten it:

> - Ranked 41st among 2,900 teams—top 2%—with a gradient-boosting ensemble using 300 engineered features.  
> - Eliminated validation leakage by switching to time-grouped folds, reducing the local-validation/leaderboard gap by 0.02.  
> - Automated permutation-importance-based feature selection, reducing 900 candidate features to 300 without degrading validation performance.

Be careful with “eliminated” unless leakage was fully removed. “Reduced” or “addressed” is safer.

## Fix the skills section

There is a typo:

> “time-series econometircs”

should be:

> **time-series econometrics**

Consider organizing the skills as:

**Programming:** Python, C++, R, SQL, Kafka  
**Machine Learning:** PyTorch, gradient boosting, time-series forecasting  
**Statistics:** Bayesian inference, statistical learning, volatility modeling, hypothesis testing

Only list tools you can discuss in an interview. If you used specific Python libraries—such as pandas, NumPy, scikit-learn, statsmodels, or Polars—you could include the most relevant ones.

## Formatting and content recommendations

- Use consistent date formatting: `Jun 2025 – Aug 2025` throughout.
- Put the location on the same line as the employer or omit it if space is tight.
- Make sure `example.com/code/mpatel` is a real, polished portfolio or GitHub link.
- Consider adding a one-line dissertation topic under the Ph.D. if it is relevant to the target role.
- Add an expected graduation date prominently: `Ph.D. Candidate in Statistics, expected May 2026`.
- If applying to quant research roles, consider adding a **Research / Publications** section with your JASA submission, preprints, or dissertation work.
- The bakery role is fine, especially if it fills an employment gap, but it should probably have only one or two concise bullets.
- Avoid unexplained claims such as “added 0.4 Sharpe” unless you define whether this is an absolute increase, annualized figure, net-of-costs result, or marginal contribution.

## Overall assessment

The strongest material is:

1. The Northpeak signal research and turnover reduction.
2. The sparse-regression theoretical result.
3. The reproducible simulation pipeline.
4. The Kaggle ranking.

The main improvements are to remove the incorrect Sharpe calculation, consolidate duplicate model results, define evaluation methodology, and make the technical claims more precise. With those changes, the resume would present as substantially more credible and polished for quantitative research or statistical machine-learning roles.