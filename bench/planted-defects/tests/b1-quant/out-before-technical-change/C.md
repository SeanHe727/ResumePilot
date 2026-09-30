Your resume has strong quantitative content and unusually good use of metrics. The biggest issue is credibility: a few methodology claims are incorrect or internally inconsistent. Fix those before polishing the wording.

## Highest-priority changes

### 1. Correct the backtest methodology claim

These two bullets conflict:

- “18 months of out-of-sample backtest”
- “Tuned the signal’s parameters on the full 6-year sample, then reported … the same period as out-of-sample.”

If parameters were tuned on the full dataset, results from that period are **not out-of-sample**. This will be a major red flag for a quant interviewer.

Ideally, rerun the analysis using:

- Rolling or expanding training windows
- A separate validation period for parameter selection
- A final untouched test period
- Embargo/purging where labels overlap

Then write something like:

> Tuned parameters using rolling training and validation windows, then evaluated the locked specification on an untouched 18-month test set.

If you cannot rerun it, describe the result as a **walk-forward simulation** or **in-sample/pseudo-out-of-sample analysis**, not a true out-of-sample result.

### 2. Remove the claim that a Sharpe-ratio test proves no look-ahead leakage

A test robust to heteroskedasticity can assess statistical significance; it cannot confirm the absence of look-ahead leakage. Leakage must be addressed through data construction and validation design.

Separate the ideas:

> Audited timestamps and point-in-time joins across six venues to prevent look-ahead leakage and used HAC-robust inference to assess the signal’s Sharpe ratio.

Be prepared to explain publication timestamps, late prints, timestamp conventions, label overlap, and train/test separation.

### 3. Fix the arithmetic in the volatility project

A decline from 0.20 to 0.15 is a **25% reduction**, not 33%:

\[
(0.20-0.15)/0.20=25\%
\]

Also, the three bullets appear to describe the same model and dataset. Consolidate them so they do not look like three versions of one result.

Suggested version:

> Improved out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices using a temporal convolutional network with realized-volatility features.  
> Increased directional accuracy from 52% to 58% and reduced forecast error from 0.20 to 0.15.

Name the forecast-error metric if possible—RMSE, MAE, or another measure.

### 4. Verify the Graduate Research Assistant dates

The role is listed as only **Jun 2021–Aug 2021**, but the bullets cover:

- A theoretical result in a paper under review
- Weekly teaching
- 12 problem sets
- An R package with first-year download totals
- Cluster administration
- Reading-group organization
- Grading for two courses

That is a lot for a three-month appointment and may look inaccurate. If the work continued during your Ph.D., use the actual longer date range, such as **Jun 2021–Present**. If it truly lasted only three months, distinguish later outcomes from work completed during the appointment.

## Content and wording changes

### Northpeak Capital

Use four or five bullets, prioritizing signal performance, evaluation design, turnover reduction, and data engineering. Remove the documentation bullet first if space is tight.

The feature-store bullet has a dangling construction:

> Joining 120 microstructure features … built a feature store

Rewrite it:

> Built a point-in-time feature store covering 120 microstructure features across six venues; deduplicated late prints and versioned schemas for reuse in two subsequent projects.

Other wording improvements:

- Replace “added 0.4 Sharpe” with **“increased portfolio Sharpe by 0.4”** if that is exactly what was measured.
- Say **“after estimated transaction costs”**, since backtest costs are modeled rather than realized.
- Clarify whether 34% and 21% refer to daily one-way turnover.

A stronger version, after correcting the evaluation design, could look like:

> Developed a short-horizon order-book imbalance signal for liquid index futures that increased portfolio Sharpe by 0.4 over an untouched 18-month test period after estimated transaction costs.  
> Reduced daily turnover from 34% to 21% using cost-aware position smoothing while retaining 90% of gross returns and lowering estimated slippage by 33%.  
> Evaluated robustness across six years of tick data using rolling time-series validation and HAC-adjusted performance inference.  
> Built a point-in-time feature store covering 120 microstructure features across six venues; deduplicated late prints and versioned schemas for reuse in two subsequent projects.

Only use this wording if it accurately reflects the revised analysis.

### Graduate Research Assistant

The last bullet is overloaded. The package is the strongest part; remove unrelated administrative tasks or give them a separate bullet if important.

Current:

> Released an open-source R package … while maintaining … organizing … and grading …

Better:

> Released an open-source R package for high-dimensional covariance estimation, reaching 3,000 downloads in its first year.

The theoretical bullet is strong, but consider adding a paper title, coauthors, or preprint link:

> Derived a variance bound for a sparse regression estimator, improving the previous rate by a logarithmic factor; incorporated as Section 3 of a manuscript under review at *JASA*.

Use “improving the previous rate” only if that is mathematically precise.

### Sunrise Bakery

This is useful evidence of leadership but is less relevant now. Compress it to one bullet if you need space:

> Supervised six employees and managed inventory and supplier orders, reducing unsold bread from 12% to 7% while meeting weekly labor budgets.

### Projects

The Kaggle section is good. Minor edit:

> Placed 41st among 2,900 teams—top 2% on the private leaderboard—using a gradient-boosting ensemble trained on 300 engineered features.

If your code is public, add direct repository links to both projects. For quant roles, reproducible code, a concise README, and a clearly documented validation design add substantial value.

## Skills section

Correct the typo:

- “econometircs” → **econometrics**

Consider reorganizing:

> **Languages:** Python, C++, SQL, R  
> **Tools:** PyTorch, Kafka, Git, Linux  
> **Methods:** Time-series econometrics, Bayesian inference, gradient boosting, Monte Carlo methods

Only include Kafka if you can discuss using it in practice. Likewise, add Git, Linux, Docker, cloud platforms, or relevant Python libraries only if you have genuine experience with them.

“PyTorch” is a tool, not a method.

## Education and formatting

Use a cleaner format:

> **Ridgeway University**, Metro City, USA  
> Ph.D. Candidate in Statistics, Expected May 2026  
> B.S. in Mathematics, May 2020

Additional recommendations:

- Add your dissertation topic or research area if relevant to quantitative research.
- Add GPA only if it is strong.
- Replace the generic code URL with a labeled GitHub link; include LinkedIn only if it is polished.
- Use en dashes consistently in dates: “Jun 2025–Aug 2025.”
- Keep the resume to one page for most industry quant applications.
- Avoid awkward line breaks such as “walk- / forward.”
- Use periods on all bullets or none; consistency matters more than the choice.

## Recommended order of work

1. Fix the backtest and leakage claims.
2. Correct the 33% arithmetic error.
3. Verify the research-assistant dates.
4. Consolidate repetitive project bullets.
5. Reduce Northpeak to the strongest four or five bullets.
6. Simplify the research and bakery sections.
7. Correct and reorganize the skills section.
8. Clean up formatting and add project/preprint links.

The underlying profile is competitive for quantitative research roles, but interviewers will scrutinize the evaluation methodology closely. Correcting those claims will improve the resume more than any stylistic rewrite.