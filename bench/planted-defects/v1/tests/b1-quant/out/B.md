Your resume has strong quant/statistics content, but it currently includes several credibility, clarity, and formatting problems. I would make these changes first.

## Highest-priority changes

### 1. Remove personal information
Delete:

- Age
- Marital status
- Hobbies

These are not relevant to hiring and can introduce bias. Keep your name, phone, email, location, LinkedIn/GitHub/portfolio.

Use a clearer link label, such as:

> GitHub: github.com/mpatel

rather than `example.com/code/mpatel`, unless that is genuinely your public portfolio.

---

### 2. Fix the date error
This entry is impossible:

> Kaggle Market Prediction Competition | Jun 2023 - Mar 2023

Change it to the correct dates. It may be:

- Jun 2022 – Mar 2023, or
- Jun 2023 – Mar 2024

Verify all dates for consistency.

---

### 3. Remove duplicated bullets
These two Northpeak bullets describe the same work:

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period...

> Tested the signal on six years of tick-level data using purged walk-forward splits...

Keep one. The first is slightly stronger and more concise.

You also repeat the order-book imbalance project under the Kaggle project. Remove it unless it was genuinely a separate project.

---

### 4. Remove or rewrite exaggerated claims
This bullet will likely hurt your credibility:

> Single-handedly built the firm’s entire trading infrastructure, which is now used by every desk across equities, rates and commodities.

It sounds implausible, especially for an intern. Replace it with a precise description of your actual contribution, for example:

> Built and deployed components of the firm’s research and backtesting infrastructure, improving workflow support for multiple trading desks.

Or, if accurate:

> Developed a reusable backtesting module adopted by research teams across equities, rates, and commodities.

Avoid “single-handedly” unless you truly owned the entire system and can defend the claim in detail.

---

### 5. Replace vague corporate language
This bullet should be deleted:

> Leveraged cutting-edge quantitative synergies and next-generation modeling paradigms to unlock alpha-driven innovation.

It says nothing measurable and reads like filler. Replace it with the actual method, data, and result. For example:

> Compared LSTM, temporal convolutional, and gradient-boosting models for volatility forecasting across 30 equity indices.

Only include models you actually used.

---

### 6. Remove unexplained internal jargon
This bullet is difficult to understand:

> Ported the VX-9 stack onto QRT under the Helix program, coordinating with the Atlas and Borealis teams.

Unless these names are recognized externally, translate them into plain language. For example:

> Integrated the volatility forecasting pipeline into the team’s production research platform and coordinated testing with two partner teams.

If the work is confidential, describe the technical contribution without internal code names.

---

### 7. Make metrics more specific
Your metrics are strong, but some need context.

Instead of:

> added 0.4 Sharpe

write something like:

> Improved annualized out-of-sample Sharpe by 0.40 after estimated transaction costs over an 18-month backtest.

If appropriate, also specify:

- Baseline strategy
- Asset class
- Whether Sharpe is annualized
- Whether the result is simulated or live
- Whether the result is confidential

Similarly, “keeping 90% of gross returns” could be clarified as:

> Reduced turnover from 34% to 21% while retaining 90% of gross backtest returns and reducing estimated slippage by 33%.

---

## Content and structure recommendations

### Use a more targeted section order
For a quant research role, use:

1. Name/contact
2. Education
3. Experience
4. Research/projects
5. Publications or selected research
6. Technical skills

If applying to academic roles, use a CV instead and expand publications, teaching, talks, and research.

### Consider adding a publications section
Your variance-bound work and R package are valuable. If the paper has a title, add:

> **Selected Research**  
> “Paper Title,” manuscript under review at *Journal of the American Statistical Association*, coauthor(s), year.

Do not say “Section 3 of a paper under review” on the resume. That is an internal description, not a useful accomplishment.

### Clarify the Ph.D. status
Use:

> Ph.D. in Statistics, expected May 2026

If you have passed qualifying exams or defended a proposal, include that only if relevant.

### Reconsider the skills categories
Currently, Kubernetes and Kafka are listed under “Infrastructure,” while Haskell is also there. A clearer format would be:

> **Programming:** Python, C++, R, SQL, Haskell  
> **Machine Learning/Statistics:** Time-series econometrics, Bayesian inference, gradient boosting, PyTorch  
> **Infrastructure:** Kubernetes, Kafka, distributed computing

Only list technologies you can discuss technically in an interview.

---

## Suggested revised version

### Morgan Patel  
+1 (555) 010-4410 | morgan.patel@example.com | GitHub: github.com/mpatel

### EDUCATION

**Ridgeway University**, Metro City, USA  
**Ph.D. in Statistics**, expected May 2026 | Sep 2021–Present

**B.S. in Mathematics** | May 2020

### EXPERIENCE

**Northpeak Capital**, Metro City, USA  
**Quantitative Research Intern** | Jun 2025–Aug 2025

- Developed a short-horizon order-book imbalance signal for liquid index futures, improving annualized out-of-sample Sharpe by 0.40 after estimated transaction costs over an 18-month backtest.
- Reduced signal turnover from 34% to 21% using a cost-aware position smoother while retaining 90% of gross backtest returns and reducing estimated slippage by one-third.
- Validated the signal on six years of tick data using purged walk-forward splits and an embargo period to prevent look-ahead leakage.
- Documented backtest assumptions, transaction-cost methodology, and identified failure regimes for future research.
- [Replace the infrastructure bullet with a precise description of your actual contribution.]

**Ridgeway University, Statistical Learning Lab**, Metro City, USA  
**Graduate Research Assistant** | Oct 2021–Aug 2022

- Built a reproducible simulation pipeline on a shared computing cluster, reducing a 2,000-run Monte Carlo study from three days to five hours.
- Derived a variance bound for a sparse regression estimator that improves the prior bound by a logarithmic factor; manuscript under review at *JASA*.
- Taught weekly recitations for 60 graduate students in probability, authored 12 problem sets, and received a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation using shrinkage and factor models; downloaded more than 3,000 times in its first year.

### RESEARCH PROJECTS

**Volatility Forecasting Study** | Python, PyTorch | Jan 2024–Present

- Evaluated volatility forecasting models across 30 equity indices using time-series cross-validation.
- Used Diebold–Mariano tests to compare forecast accuracy; observed statistically significant improvements at the 5% level on 24 of 30 indices, including both examined crisis periods.
- [Replace the internal-jargon bullet with a plain-language description of the implementation or deployment work.]

**Kaggle Market Prediction Competition** | Team of 3 | Correct dates

- Improved validation reliability by replacing random folds with time-grouped folds, reducing the gap between local validation and leaderboard performance by 0.02.
- [Add your final ranking or percentile if strong and verifiable.]
- [Delete the repeated order-book signal bullet unless it was separate work.]

### TECHNICAL SKILLS

**Programming:** Python, C++, R, SQL, Haskell  
**Statistics and Machine Learning:** Time-series econometrics, Bayesian inference, gradient boosting, PyTorch  
**Infrastructure:** Kubernetes, Kafka, distributed computing

## Overall assessment

The underlying experience is excellent: market microstructure, backtesting, statistical learning, teaching, research, and open-source work. The main issue is not lack of substance; it is that the resume mixes impressive evidence with duplicated content, vague jargon, an impossible date range, and one or two claims that may appear inflated. Make every bullet specific, defensible, and understandable to someone outside your organization.