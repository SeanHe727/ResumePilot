Your resume has strong quantitative content, but it currently contains a few credibility issues that a quant recruiter or technical interviewer would notice quickly. The biggest problem is not wording—it is the validity and consistency of the research claims.

## Highest-priority changes

### 1. Fix the backtest contradiction

These two bullets conflict:

- “added 0.4 Sharpe … over 18 months of out-of-sample backtest”
- “Tuned the signal’s parameters on the full 6-year sample, then reported the Sharpe of a walk-forward test over the same period as out-of-sample.”

If parameters were tuned on the full six-year sample, that period cannot also be fully out-of-sample. This may look like data leakage or inflated performance reporting.

Replace the second bullet with a methodologically accurate description, such as:

> Designed a walk-forward evaluation with rolling training windows and untouched test windows across six years of tick data; reported performance only on periods not used for parameter selection.

If the 0.4 Sharpe result came from a genuine untouched 18-month holdout, say so explicitly:

> Developed a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over an untouched 18-month holdout after transaction costs.

If it did not come from an untouched holdout, remove “out-of-sample.”

### 2. Remove or correct the “Sharpe-ratio test for heteroskedasticity”

This phrase is technically incorrect or at least very unusual:

> using a Sharpe-ratio test for heteroskedasticity

Sharpe-ratio tests evaluate risk-adjusted performance; they are not standard tests for heteroskedasticity or look-ahead bias. Look-ahead leakage is generally addressed through timestamp audits, point-in-time feature construction, purged/embargoed validation, and careful train/test boundaries.

Use something like:

> Validated six years of tick data with point-in-time feature construction, timestamp audits, and walk-forward testing to eliminate look-ahead leakage.

Only mention a statistical test if you can name the actual test—for example, White’s test, Breusch–Pagan, or a specific Sharpe inference procedure.

### 3. Eliminate duplicate or overlapping project bullets

The volatility project currently says essentially the same thing twice:

- “with a temporal convolutional model trained on realized-volatility features”
- “with a temporal convolutional model”

Combine the results into two or three distinct bullets. Also, “cut forecast error from 0.20 to 0.15, a 33% improvement” is mathematically ambiguous. That is a 25% reduction relative to 0.20. Use:

> Reduced forecast error from 0.20 to 0.15, a 25% reduction.

If the metric is not named, specify it: RMSE, MAE, MAPE, etc.

### 4. Correct the feature-store bullet

This bullet has a grammatical error:

> Joining 120 microstructure features...

It should probably be “Joining” only if you mean combining datasets, but the construction is awkward. Use:

> Integrated 120 point-in-time microstructure features across six venues; deduplicated late prints, versioned schemas, and built a reusable feature store adopted by two subsequent projects.

Be careful with “point-in-time.” It is a strong claim, so make sure the data truly reflected only information available at each timestamp.

### 5. Clarify unsupported performance claims

Several impressive metrics need context:

- “added 0.4 Sharpe”
- “keeping 90% of gross returns”
- “lowering estimated slippage by a third”
- “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%”
- “Improved directional hit rate by 6%”

These are useful, but recruiters may ask:

- Over what period?
- On what universe?
- Before or after costs?
- What exactly is the baseline?
- Was the result statistically significant?
- How was the train/test split constructed?

You do not need to include every detail on the resume, but make the claims precise enough to be defensible.

## Suggested revised experience section

### Northpeak Capital — Quantitative Research Intern  
Metro City, USA | Jun 2025–Aug 2025

- Developed a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over an untouched 18-month holdout after transaction costs.
- Reduced daily turnover from 34% to 21% using a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by one-third.
- Integrated 120 point-in-time microstructure features across six venues; deduplicated late prints, versioned schemas, and built a reusable feature store adopted by two subsequent projects.
- Built a six-year tick-data validation pipeline with timestamp audits and walk-forward evaluation to prevent look-ahead leakage.
- Documented backtest assumptions, transaction-cost modeling, validation design, and known failure regimes in the desk’s research wiki.

You could omit the final documentation bullet if space is tight. It is useful, but less differentiated than the research bullets.

### Ridgeway University — Graduate Research Assistant, Statistical Learning Lab  
Metro City, USA | Jun 2021–Aug 2021

- Built a reproducible cluster-based simulation pipeline, reducing a 2,000-run Monte Carlo study from three days to five hours.
- Derived a variance bound for a sparse-regression estimator, tightening the prior bound by a logarithmic factor; the result became Section 3 of a manuscript under review at JASA.
- Developed and released an open-source R package for high-dimensional covariance estimation, downloaded more than 3,000 times in its first year.
- Taught weekly recitations for 60 graduate probability students, authored 12 problem sets, and received a 4.8/5 teaching rating.

The original fourth bullet combines too many unrelated responsibilities:

> Released an open-source R package ... while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses...

Split it or remove the less relevant duties. For a quant research role, the package and simulation work matter more than grading and reading-group administration.

## Suggested revised projects section

### Volatility Forecasting Study — Independent Research  
Python, PyTorch | Jan 2024–Present

- Trained a temporal convolutional model on realized-volatility features and reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices.
- Reduced [RMSE/MAE/etc.] from 0.20 to 0.15, a 25% reduction, using realized-volatility features and an asymmetric loss.
- Improved directional accuracy from 52% to 58% under a time-based evaluation split.

Make sure the three metrics are genuinely from the same evaluation design. If the second bullet refers to a different dataset or metric, state that.

### Kaggle Market Prediction Competition — Team of 3  
Python | Mar 2023–Jun 2023

- Placed 41st of 2,900 teams, ranking in the top 2% of the private leaderboard, with a gradient-boosting ensemble using 300 engineered features.
- Replaced random validation with time-grouped folds, reducing the local-validation/private-leaderboard gap by 0.02.
- Built a permutation-importance feature-selection pipeline that reduced 900 candidate features to 300 without reducing validation performance.

## Skills changes

Correct the typo:

> time-series econometircs

to:

> time-series econometrics

Also consider grouping skills more conventionally:

**Programming:** Python, C++, R, SQL  
**ML/Statistics:** PyTorch, time-series econometrics, Bayesian inference, gradient boosting  
**Data/Infrastructure:** Kafka, distributed computing, feature engineering, backtesting

Only list Kafka, C++, or PyTorch if you can discuss a substantive project involving each. You might also add specific tools such as NumPy, pandas, scikit-learn, JAX, Git, Linux, or Spark if relevant and if you have room.

## Education changes

Your education section is fine, but for a quant or research role, the Ph.D. entry could be stronger with a research focus:

> **Ph.D. Candidate in Statistics**, Ridgeway University — Expected May 2026  
> Research focus: statistical learning, time series, high-dimensional inference

You could also add:

- Dissertation title or research area
- Advisor, if notable
- Relevant coursework, if you are applying to industry roles and have space
- Publications, preprints, or conference presentations

If the Ph.D. has already been completed, update “Ph.D. candidate” and the expected date immediately.

## Formatting and positioning

- Use a full portfolio URL, such as `https://example.com/code/mpatel`.
- Keep the resume to one page for most industry quant applications; two pages can be justified for research-heavy roles.
- Put **Projects** above **Experience** only if you are targeting research/ML roles and the projects are stronger than the non-quant work.
- If applying to quant research, consider renaming “Methods” to **Statistical Modeling** or **Quantitative Methods**.
- The bakery role is acceptable, especially early in your career, but compress it to one or two bullets. It demonstrates management and operational discipline but should not take space away from research.

## Most important overall recommendation

Before submitting, make every validation claim internally consistent. Your resume currently reads as highly accomplished, but the backtest wording creates a serious risk that a technically sophisticated reviewer will question the entire internship. Use precise language around:

- Holdout versus walk-forward testing
- Parameter-selection periods
- Transaction costs
- Point-in-time data
- Leakage prevention
- The exact definition of each performance metric

Once those are corrected, the resume will present a strong profile for quantitative research, systematic trading, or statistical machine learning roles.