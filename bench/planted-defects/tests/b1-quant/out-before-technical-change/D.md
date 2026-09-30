# TECH RESUME REVIEW

Your resume has a strong profile for quantitative research, systematic trading, and statistical/ML roles. The best parts are the quantified results, research depth, and evidence of working with financial time series. However, several bullets currently create credibility problems—especially around backtesting methodology and statistical claims. Fix those before polishing wording.

## Highest-priority changes

### 1. Correct the backtesting methodology issue

This bullet is a serious concern:

> Tuned the signal’s parameters on the full 6-year sample, then reported the Sharpe of a walk-forward test over the same period as out-of-sample.

That is not genuinely out-of-sample if the parameters were tuned using the entire period. A quantitative researcher will likely notice this immediately.

Change the underlying analysis, not just the wording:

- Use expanding- or rolling-window walk-forward validation.
- Tune parameters only within each training window.
- Evaluate on the subsequent unseen period.
- Reserve a final untouched test period if possible.
- Report train, validation, and test periods clearly.

A defensible bullet could be:

> Evaluated signal performance using expanding-window walk-forward validation, tuning parameters only on prior data and measuring performance on subsequent unseen periods across six years of tick data.

Only use this wording if you actually rerun the analysis that way.

### 2. Remove or correct the statistical claim about leakage

This bullet is technically problematic:

> Validated the signal on 6 years of tick data, using a Sharpe-ratio test for heteroskedasticity to confirm there was no look-ahead leakage.

A Sharpe-ratio test does not establish that a backtest is free of look-ahead bias. Heteroskedasticity and look-ahead leakage are different issues.

Use a more accurate description, depending on what you actually did:

> Audited the six-year tick-data pipeline for timestamp alignment, feature availability, and execution timing to prevent look-ahead bias; incorporated transaction costs and slippage in evaluation.

If you performed statistical testing, describe it separately:

> Applied heteroskedasticity- and autocorrelation-robust inference when assessing risk-adjusted returns.

Do not claim that a statistical test “confirmed” the absence of leakage.

### 3. Fix the volatility-project metric inconsistency

You wrote:

> Cut forecast error from 0.20 to 0.15, a 33% improvement

The reduction from 0.20 to 0.15 is 25%, not 33%. Also, “forecast error” needs a metric name: RMSE, MAE, QLIKE, or something else.

Correct version:

> Reduced [RMSE/MAE] from 0.20 to 0.15, a 25% reduction, by adding realized-volatility features and an asymmetric loss.

However, if you already report a 7% QLIKE improvement, the additional forecast-error bullet may be redundant. Use clearly distinct metrics or remove one.

### 4. Eliminate duplicate project bullets

The first and third volatility bullets substantially overlap:

- “temporal convolutional model trained on realized-volatility features”
- “improved directional hit rate ... with a temporal convolutional model”

Combine the project into two or three stronger bullets focused on different outcomes:

- Benchmark performance
- Model/method contribution
- Robustness or directional usefulness

### 5. Fix wording and typos

- `Joining 120 microstructure features` → `Joined 120 point-in-time microstructure features`
- `time-series econometircs` → `time-series econometrics`
- Avoid line breaks inside words such as `walk- forward`.
- “Sharpe” should generally be written as “Sharpe ratio” or “0.40 Sharpe points.”
- Clarify whether “0.4 Sharpe” means an increase of 0.40 annualized Sharpe points.

---

# Recommended resume structure

For your background, I would use:

1. Name and contact information  
2. Education  
3. Experience  
4. Research/Projects  
5. Technical Skills  
6. Publications, if applicable  

Because you are a Ph.D. candidate and have a paper under review, consider adding a short **Research/Publications** section. A paper under review can be listed, but label it accurately:

> Patel, M. “Title of Paper.” Manuscript under review at the *Journal of the American Statistical Association*, 2025.

Do not imply acceptance or publication.

---

# Suggested revised version

## Contact

Add LinkedIn and GitHub if relevant. Your current link:

> `example.com/code/mpatel`

should be labeled clearly, such as:

> GitHub: github.com/mpatel  
> LinkedIn: linkedin.com/in/morganpatel

Use the actual URLs rather than a generic “code” link.

---

## Education

Your education section is generally good. Consider adding dissertation or research focus if relevant:

```text
RIDGEWAY UNIVERSITY — Metro City, USA
Ph.D. Candidate in Statistics, Expected May 2026
Research: Statistical learning, time-series modeling, financial econometrics

B.S. in Mathematics, May 2020
```

You can omit the start dates unless required. If you have a strong GPA, qualifying exams, fellowship, or relevant coursework, add only the most relevant items.

---

## Experience

### Northpeak Capital — Quantitative Research Intern  
Metro City, USA | Jun 2025 – Aug 2025

Suggested revision:

```text
• Developed a short-horizon order-book imbalance signal for liquid index futures, adding 0.40 annualized Sharpe points to the desk portfolio in an after-cost backtest over 18 months of unseen data.
• Reduced signal turnover from 34% to 21% using a cost-aware position smoother, retaining 90% of gross returns and reducing estimated slippage by approximately one-third.
• Built a point-in-time feature pipeline for 120 microstructure features across six venues, resolving late-print duplication and versioning schemas; the resulting feature store supported two subsequent research projects.
• Evaluated signal performance on six years of tick data using [expanding/rolling]-window walk-forward validation, with transaction costs and execution timing incorporated into the backtest.
• Documented backtest assumptions, transaction-cost methodology, validation design, and observed failure regimes in the desk research wiki.
```

Important: only include “unseen data” and “walk-forward validation” after correcting the analysis. If the original 18-month result was not truly held out, describe it more cautiously.

Also consider adding technologies if accurate:

> Python, pandas, NumPy, SQL, Kafka, [specific backtesting or data tools]

The current bullets show excellent results but do not tell the reader enough about the implementation stack.

---

### Ridgeway University — Graduate Research Assistant, Statistical Learning Lab  
Metro City, USA | Jun 2021 – Aug 2021

Your current fourth bullet combines too many unrelated responsibilities. Split it:

```text
• Built and parallelized the lab’s simulation pipeline on a shared compute cluster, reducing a 2,000-run Monte Carlo study from three days to five hours and making experiments reproducible through seeded runs.
• Derived a variance bound for a sparse regression estimator, tightening the prior bound by a logarithmic factor; the result became Section 3 of a manuscript under review at JASA.
• Developed and released an open-source R package for high-dimensional covariance estimation, reaching 3,000 downloads in its first year.
• Taught weekly graduate-probability recitations for 60 students, authored 12 problem sets, and earned a 4.8/5 teaching rating.
```

Remove or de-emphasize these items unless you have space:

> maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses

They are less valuable than the research, package, and teaching results. If the cluster administration was technically substantial, make it its own bullet and specify what you automated or maintained.

---

### Sunrise Bakery — Assistant Store Manager  
Metro City, USA | Jun 2020 – May 2021

This experience is useful because it demonstrates management and operational responsibility, but it should be compact:

```text
• Managed opening operations and a six-person team while maintaining weekly labor-budget targets.
• Improved inventory planning and supplier ordering, reducing unsold bread from 12% to 7% of production.
```

For a highly technical two-page resume, this section can remain short. For a one-page resume, keep only the second bullet or combine both.

---

# Projects

## Volatility Forecasting Study | Python, PyTorch  
Jan 2024 – Present

Suggested rewrite:

```text
• Built a temporal convolutional model for realized-volatility forecasting across 30 equity indices, improving out-of-sample QLIKE loss by 7% versus a HAR-RV baseline.
• Improved directional forecast accuracy from 52% to 58% by incorporating realized-volatility features and an asymmetric loss function.
• Reduced [RMSE/MAE] from 0.20 to 0.15, a 25% reduction, after [specific modeling improvement].
```

Only retain the third bullet if the metric is different from QLIKE and adds useful information. Otherwise, the first two bullets are sufficient.

Also clarify:

- What time period was used?
- Were the 30 indices evaluated with a panel model or separate models?
- Were splits chronological?
- Were hyperparameters selected without using the test period?

Those details do not all need to be on the resume, but you should be ready to explain them in interviews.

---

## Kaggle Market Prediction Competition | Python  
Team of 3 | Mar 2023 – Jun 2023

This is already strong:

```text
• Ranked 41st out of 2,900 teams—top 2%—using a gradient-boosting ensemble trained on 300 engineered features.
• Reduced validation leakage by replacing random folds with time-grouped cross-validation, closing the gap between local validation and leaderboard scores from 0.02 to [final value, if known].
• Built a permutation-importance feature-selection pipeline that reduced 900 candidate features to 300 without reducing validation performance.
```

The second bullet is slightly unclear because “closed a 0.02 gap” does not say what the final gap became. If you know the final value, include it. Otherwise:

> Replaced random folds with time-grouped cross-validation to align local validation with leaderboard performance and reduce leakage risk.

---

# Skills section

Your current skills section is too short for a technical quantitative resume and has a typo. Organize it by category:

```text
TECHNICAL SKILLS

Languages: Python, R, SQL, C++
Machine Learning: PyTorch, gradient boosting, time-series modeling
Statistics: Statistical learning, Bayesian inference, high-dimensional statistics, time-series econometrics
Data/Infrastructure: Kafka, distributed computing, Monte Carlo simulation
```

Add specific libraries only if you can discuss them in an interview:

```text
Python: NumPy, pandas, scikit-learn, statsmodels
```

If applicable, also include:

- Git
- Linux
- Docker
- Spark
- PostgreSQL
- AWS
- Jupyter
- CI/CD or experiment-tracking tools

Do not list tools merely because you used them once. For quantitative research roles, recruiters will likely care about:

- Python and numerical computing
- Statistical inference
- Time-series methods
- Optimization
- Market microstructure
- Backtesting
- Data engineering
- C++ or performance optimization

You could add a separate methods category:

```text
Quantitative Methods: Market microstructure, signal research, walk-forward validation, volatility modeling, Bayesian inference, Monte Carlo simulation, high-dimensional statistics
```

---

# Content gaps to address

## 1. Add technical implementation details

Your accomplishments are quantified, but the resume often omits the technologies used. For example:

> Built a feature store...

Add the relevant stack if accurate:

> Built a point-in-time feature pipeline in Python and Kafka...

Likewise, specify whether the simulation pipeline used multiprocessing, SLURM, Dask, Ray, or another cluster technology.

## 2. Add a publications/research section

Your research credentials are stronger than the current format shows. Add:

```text
RESEARCH

Patel, M. “[Paper Title].” Manuscript under review at the Journal of the American Statistical Association.

Open-source software: R package for high-dimensional covariance estimation, 3,000 downloads in first year.
```

If the paper has coauthors, include them. If the manuscript is not publicly available, do not add a link unless permitted.

## 3. Clarify the target role

The resume could support several paths:

- Quantitative researcher
- Quantitative developer
- Machine learning researcher
- Statistical researcher
- Data scientist
- Financial machine learning researcher

For quant research roles, emphasize:

- Signal design
- Backtesting integrity
- Transaction costs
- Market microstructure
- Time-series validation
- Statistical inference
- Risk and portfolio impact

For ML roles, emphasize:

- Model architecture
- Feature engineering
- Training and evaluation pipelines
- Reproducibility
- Distributed computation
- Productionization

You may want two tailored versions rather than one generic resume.

# Overall assessment

Your underlying experience is strong—probably stronger than the current presentation suggests. The main risk is not lack of achievement; it is that a technical reviewer may question the validity of the backtest and volatility metrics.

Prioritize these changes:

1. Correct the full-sample tuning/walk-forward issue.
2. Remove the inaccurate Sharpe-ratio/leakage statement.
3. Correct the 0.20-to-0.15 calculation.
4. Split overloaded research bullets.
5. Add tools and technical implementation details.
6. Add publications or research output.
7. Remove redundant project bullets and tailor the resume to quant research versus ML roles.