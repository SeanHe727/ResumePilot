# Resume Review

You have a strong quantitative research profile: rigorous statistical work, relevant market modeling, meaningful backtesting results, and a top-2% competition result. The main problems are **one serious technical error, a few credibility/clarity issues, and some redundancy**.

## Highest-priority changes

### 1. Remove the Sharpe-ratio annualization bullet

This bullet is incorrect:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

For a daily Sharpe ratio, annualization is typically:

\[
\text{Annualized Sharpe} = \text{Daily Sharpe} \times \sqrt{252}
\]

More importantly, this bullet makes the resume look like it contains a deliberate trap or an uncorrected methodological mistake. Remove it entirely unless you actually corrected the calculation and can describe the correction.

### 2. Fix the numerical inconsistency in the volatility project

You wrote:

> Cut forecast error from 0.20 to 0.15, a 33% improvement

The reduction from 0.20 to 0.15 is **25%**, not 33%:

\[
(0.20 - 0.15) / 0.20 = 25\%
\]

Also specify what “forecast error” means: RMSE, MAE, QLIKE, or another metric. Since you already report QLIKE, avoid adding an ambiguous second metric unless it demonstrates something distinct.

### 3. Reduce repetitive project bullets

These two bullets overlap:

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%...

> Improved the model’s directional hit rate by 6%... with a temporal convolutional model.

Both describe the same model improvement. Combine them or use the second bullet to explain the technical contribution: architecture, validation design, loss function, or robustness testing.

### 4. Correct terminology and typos

- `econometircs` → **econometrics**
- “Joining 120 microstructure features” → **Joined 120 microstructure features**
- “added 0.4 Sharpe” → **increased the book’s Sharpe ratio by 0.4** or **contributed 0.4 to the book’s Sharpe ratio**
- “daily Sharpe ratio” is awkward. Use **annualized Sharpe ratio**, **daily Sharpe ratio**, or simply **Sharpe ratio**, depending on what you actually calculated.

### 5. Clarify whether the results are real, simulated, or hypothetical

Your Northpeak bullet says:

> added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.

A backtest does not literally add to a live book. Use wording such as:

> Improved simulated book Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.

If the signal was deployed or paper-traded, say that explicitly. Also clarify whether the 0.4 figure is:
- an absolute increase in Sharpe,
- an incremental contribution,
- or a standalone signal Sharpe.

Quant recruiters will scrutinize this distinction.

---

# Suggested structure

For quant research, I would use:

1. Contact information  
2. Education  
3. Technical skills  
4. Experience  
5. Research/projects  

Your Ph.D. is highly relevant, so putting **Education first** is appropriate. Put skills above experience if you are targeting roles with strict technical screening.

Your contact line should also label the link:

```text
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com
GitHub: example.com/code/mpatel
```

If this is GitHub, use the actual GitHub URL and label it “GitHub.” Add LinkedIn if relevant.

---

# Suggested rewritten version

Below is a tightened version using your existing information. I have not added unsupported technologies or results.

## EDUCATION

**Ridgeway University**, Metro City, USA  
**Ph.D. Candidate in Statistics**, expected May 2026 | Sep 2021–Present  
**B.S. in Mathematics**, May 2020 | Sep 2016–May 2020

If relevant, add a dissertation title, research focus, or selected coursework such as:

```text
Research Areas: Statistical learning, time-series modeling, high-dimensional statistics
```

Do not add coursework if you already have substantial research experience and need space.

## TECHNICAL SKILLS

```text
Programming: Python, R, SQL, C++
Machine Learning: PyTorch, gradient boosting, sparse regression
Statistics: Time-series econometrics, Bayesian inference, volatility modeling, high-dimensional statistics
Data/Infrastructure: Kafka, distributed computing, simulation pipelines
```

Only include Kafka if you can discuss how you used it. If not, remove it. You could also list relevant Python libraries if accurate, such as NumPy, pandas, scikit-learn, or statsmodels.

## EXPERIENCE

### Northpeak Capital — Quantitative Research Intern  
Metro City, USA | Jun 2025–Aug 2025

- Developed a short-horizon order-book imbalance signal for liquid index futures that improved simulated book Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.
- Reduced signal turnover from 34% to 21% using a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by one-third.
- Evaluated forecast improvements against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices; include significance levels if available.
- Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted by two subsequent projects.
- Documented backtest assumptions, transaction-cost methodology, validation procedures, and known failure regimes in the desk’s research wiki.

The fourth bullet is strong but dense. If space is tight, shorten it:

> Built a reusable feature store by joining 120 point-in-time microstructure features across six venues, deduplicating late prints, and versioning schemas; adopted by two subsequent projects.

### Ridgeway University — Graduate Research Assistant, Statistical Learning Lab  
Metro City, USA | Jun 2021–Aug 2021

- Built a reproducible cluster-based simulation pipeline that reduced a 2,000-run Monte Carlo study from 3 days to 5 hours.
- Derived a variance bound for a sparse regression estimator, tightening the previous bound by a logarithmic factor; proof included as Section 3 of a JASA manuscript under review.
- Developed and released an open-source R package for high-dimensional covariance estimation, downloaded 3,000 times in its first year.
- Taught weekly graduate probability recitations for 60 students, authored 12 problem sets, and earned a 4.8/5 teaching rating.

The original fourth bullet combined too many unrelated responsibilities:

> ...while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses...

Unless these activities are important for the target role, omit them. The research, software, and teaching bullets are stronger.

### Sunrise Bakery — Assistant Store Manager  
Metro City, USA | Jun 2020–May 2021

- Managed opening operations and a team of six bakers and cashiers while maintaining weekly labor-budget targets.
- Managed inventory counts and supplier orders, reducing unsold bread from 12% to 7% of daily production.

This is fine as a short section. For quant roles, keep it to one or two bullets.

## PROJECTS

### Volatility Forecasting Study — Python, PyTorch  
Independent Research | Jan 2024–Present

- Developed a temporal convolutional model for realized-volatility forecasting that reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices.
- Improved directional hit rate from 52% to 58% using realized-volatility features and an asymmetric loss function.
- Evaluated model performance using time-aware out-of-sample validation; report the test period and confidence intervals if available.

Only retain the third bullet if you actually performed this validation and it adds information beyond the first bullet. If “forecast error” is an important separate result, write it with the correct metric:

> Reduced **[RMSE/MAE/etc.]** from 0.20 to 0.15, a 25% reduction.

Do not describe the model as “trained on realized-volatility features” in one bullet and “improved by adding realized-volatility features” in another unless the distinction is clear.

### Kaggle Market Prediction Competition — Python  
Team of 3 | Mar 2023–Jun 2023

- Placed 41st out of 2,900 teams, ranking in the top 2% of the private leaderboard, using a gradient-boosting ensemble and 300 engineered features.
- Reduced validation leakage by implementing time-grouped cross-validation, closing the gap between local validation and leaderboard scores from 0.02.
- Built a permutation-importance feature-selection pipeline that reduced 900 candidate features to 300 without reducing validation performance.

This is already strong. If the competition has a name, include it. Also specify the competition platform instead of saying only “Kaggle Market Prediction Competition.”

---

# Additional recommendations

## Add research outputs if available

For a Ph.D. candidate, consider adding a small section for:

```text
PUBLICATIONS & PRESENTATIONS
- Patel, M. “Title.” Manuscript under review at Journal of the American Statistical Association.
- [Conference presentation or working paper]
```

Do not overstate the JASA status. Use the exact status, such as:
- “Manuscript under review”
- “Submitted”
- “Working paper”

## Add a dissertation or research-interest line

For quant research applications, a short line can help target the resume:

```text
Research Interests: Financial econometrics, volatility forecasting, market microstructure, statistical learning
```

Place it under your Ph.D. or in a short summary. A summary is optional; your background is strong enough that the resume can work without one.

## Be prepared to explain every quantitative claim

Be ready to discuss:

- How the 0.4 Sharpe contribution was calculated
- Whether transaction costs were fully incorporated
- How you avoided look-ahead bias and survivorship bias
- Why the HAR-RV baseline was appropriate
- How the Diebold–Mariano tests were conducted
- Whether you adjusted for multiple comparisons across 30 indices
- How the feature store enforced point-in-time correctness
- Why QLIKE was selected for volatility forecasting
- How the temporal convolutional model compared with simpler alternatives

## Overall assessment

This is a strong resume for quantitative research, systematic trading, financial machine learning, or statistical modeling roles. The primary concern is not lack of experience; it is **technical precision**. Remove the incorrect Sharpe annualization bullet, correct the 25%/33% discrepancy, define ambiguous metrics, and consolidate repetitive project content. Those changes will make the resume substantially more credible to technical reviewers.