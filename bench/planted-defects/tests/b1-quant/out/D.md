# Resume Review

You have strong quantitative research experience and unusually good metrics. The main issues are **targeting, technical credibility, redundancy, and a few factual/wording errors**.

## Highest-priority changes

### 1. Remove the incorrect Sharpe-ratio bullet

This bullet is mathematically wrong:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

A daily Sharpe ratio is generally annualized by multiplying by **√252**, not 252. More importantly, this bullet makes the resume look less credible and may suggest poor research hygiene.

**Delete it entirely.**

---

### 2. Correct the spelling and categorization in Skills

Current:

> Methods: time-series econometircs, Bayesian inference, gradient boosting, PyTorch

Change to:

> **Programming:** Python, R, SQL, C++, Kafka  
> **Machine Learning:** PyTorch, gradient boosting, temporal convolutional networks  
> **Statistics/Methods:** Time-series econometrics, Bayesian inference, Monte Carlo simulation, volatility modeling  
> **Quantitative Finance:** Order-book modeling, market microstructure, backtesting, transaction-cost modeling

Kafka should not be listed under Programming. Put it under **Data/Infrastructure** if you have meaningful experience with it.

Also, only list Kafka if you can discuss how you used it. If not, remove it.

---

### 3. Add a target-oriented summary

For quant research, quantitative developer, or ML research roles, a short summary would help connect the Ph.D., research, and trading experience.

Example:

> **Statistics Ph.D. candidate with experience in quantitative research, market microstructure, time-series modeling, and statistical learning. Built and evaluated trading signals across 30 futures/index markets, developed reproducible simulation and feature pipelines, and published open-source statistical software.**

Use a summary only if it is tailored to the role. For a highly academic research position, you could omit it and use the space for publications or research interests.

---

### 4. Make the Northpeak role the centerpiece

This is your strongest experience, but several bullets need correction or tightening.

#### Current

> Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.

#### Improved

> Developed a short-horizon order-book imbalance signal for liquid index futures that improved portfolio Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.

Be precise about whether it improved **portfolio Sharpe**, **strategy Sharpe**, or **incremental Sharpe**. “Added 0.4 Sharpe” can be ambiguous.

#### Current

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

#### Improved

> Reduced daily turnover from 34% to 21% with a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by 33%.

This is already strong; the revised version is simply more direct.

#### Current

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-M Mariano tests across the 30 indices.

There is a typo in “Diebold-M Mariano.” It should be **Diebold–Mariano**.

Also, “confirmed” is too strong unless the result was statistically significant.

#### Improved

> Evaluated forecast improvements against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices; report statistical significance and p-values if available.

For example:

> Evaluated forecast improvements against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices, with improvements statistically significant at the 5% level in 24 markets.

Only include that version if accurate.

#### Current

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

“Joining” is incorrect here.

#### Improved

> Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted by two subsequent projects.

If possible, include the technologies used—for example, Python, SQL, Kafka, Parquet, Spark, or a database—but only if accurate.

#### Current

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.

#### Improved

> Documented backtest assumptions, transaction-cost methodology, and known failure regimes in the desk’s research wiki, improving reproducibility for future researchers.

This is a good collaboration and research-rigor bullet. Keep it.

---

## Recommended Northpeak version

```text
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 – Aug 2025
• Developed a short-horizon order-book imbalance signal for liquid index futures that improved portfolio Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.
• Reduced daily turnover from 34% to 21% with a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by 33%.
• Evaluated forecast improvements against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices.
• Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted by two subsequent projects.
• Documented backtest assumptions, transaction-cost methodology, and known failure regimes in the desk’s research wiki for future researchers.
```

Use four bullets if you need to keep the resume to one page; use five if applying to quant research roles and the resume can be two pages.

---

## 5. Fix the project redundancies and metric inconsistency

The Volatility Forecasting Study currently says essentially the same thing three times:

- Beat HAR-RV by 7% on QLIKE
- Cut forecast error from 0.20 to 0.15
- Improved directional hit rate using a temporal convolutional model

The second and third bullets repeat the model description. Also, reducing error from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement:

\[
(0.20 - 0.15) / 0.20 = 25\%
\]

More importantly, QLIKE loss and “forecast error” may be different metrics. Name the metric explicitly.

### Recommended version

```text
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 – Present
• Trained a temporal convolutional network on realized-volatility features, reducing out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices.
• Reduced [specified error metric] from 0.20 to 0.15, a 25% improvement, using realized-volatility features and an asymmetric loss function.
• Improved directional hit rate from 52% to 58% across 30 indices; evaluated robustness across rolling time-series splits.
```

Avoid saying “forecast error” unless you specify whether it is RMSE, MAE, MAPE, QLIKE, or another measure.

Also, “Jan 2024 – Present” should be accurate. If the project is complete, use an end date.

---

## 6. Improve the research assistant section

The current final bullet combines too many unrelated responsibilities:

> Released an open-source R package... while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses...

Split it into separate bullets or remove lower-value duties. The package and download count are valuable; routine grading and reading-group organization are less important for quantitative roles.

### Recommended version

```text
Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 – Aug 2021
• Built a reproducible simulation pipeline on a shared computing cluster, reducing a 2,000-run Monte Carlo study from 3 days to 5 hours.
• Derived a variance bound for a sparse regression estimator, tightening the prior bound by a logarithmic factor; proof incorporated as Section 3 of a JASA manuscript under review.
• Developed and released an open-source R package for high-dimensional covariance estimation, downloaded 3,000 times in its first year.
• Taught weekly graduate-probability recitations for 60 students, writing 12 problem sets and earning a 4.8/5 teaching rating.
```

If the JASA paper has a title, coauthors, or a public preprint, add a **Publications** section. A paper under review is especially valuable for quant research, statistics, and ML research applications.

---

## 7. Reconsider how you present the bakery position

For a quant or technical application, this role creates an apparent career-transition question because it is your current position after a quantitative research internship.

Do not hide it, but make the context clear. Possible explanations include:

- You are working temporarily while completing the Ph.D.
- You are returning to school or between research roles.
- The role is part-time.
- You are seeking a transition into quantitative research.

If true, label it:

> **Assistant Store Manager, Part-Time**

or add a short context line in the cover letter.

The bullets are reasonable, but they are not very relevant to technical roles. Keep only two concise bullets:

```text
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 – Present
• Supervise opening operations and a team of six bakers and cashiers while maintaining weekly labor-budget targets.
• Managed daily inventory counts and supplier orders, reducing unsold bread from 12% to 7% of production.
```

Use **labor** rather than **labour** if applying to U.S. employers.

If space is limited, place this role under an **Additional Experience** section after your technical experience.

---

## 8. Add GitHub, LinkedIn, or research links

Your contact line currently includes:

> example.com/code/mpatel

That looks like a generic code link rather than an identifiable GitHub or portfolio URL. Use direct links:

```text
Morgan Patel
Metro City, USA | +1 (555) 010-4410 | morgan.patel@example.com
github.com/mpatel | linkedin.com/in/morganpatel | morganpatel.github.io
```

For your profile and projects, include links to:

- The R package
- The volatility forecasting repository
- The Kaggle profile
- A Google Scholar profile or publication/preprint
- A technical portfolio, if available

Do not include links to private or inaccessible repositories.

---

# Suggested overall structure

For quant research, quantitative developer, or ML roles:

```text
NAME AND CONTACT
SUMMARY
TECHNICAL SKILLS
EXPERIENCE
PROJECTS / RESEARCH
PUBLICATIONS
EDUCATION
```

For an academic or research-heavy role:

```text
NAME AND CONTACT
RESEARCH INTERESTS
EDUCATION
RESEARCH EXPERIENCE
PUBLICATIONS
PROJECTS
TEACHING
TECHNICAL SKILLS
```

Your Ph.D. should likely be listed before work experience if applying to research-oriented positions.

---

## Main issues to fix before submitting

- Delete the incorrect Sharpe annualization bullet.
- Correct **econometrics** spelling.
- Correct **Diebold–Mariano** spelling.
- Change “Joining 120...” to “Joined 120...”
- Correct 0.20 to 0.15 from **33%** to **25%** improvement.
- Specify the exact error metric in the forecasting project.
- Remove repetitive project bullets.
- Clarify whether the Northpeak Sharpe improvement is portfolio, strategy, or incremental Sharpe.
- Add statistical significance or p-values for Diebold–Mariano tests if available.
- Add direct GitHub/LinkedIn/research links.
- Explain or de-emphasize the current bakery role for technical applications.
- Add a publications section if the JASA paper or other research is publicly available.

Overall, the resume has a strong foundation for **quantitative research, quantitative development, statistical machine learning, and financial data science**. Its biggest weakness is not lack of achievement; it is that a few imprecise or incorrect statements could undermine an otherwise highly technical profile.