# Resume Review

## Overall assessment

You have strong raw material for **quantitative research, systematic trading, or quantitative developer roles**, especially:

- A Ph.D. in Statistics in progress
- Direct quant research internship experience
- Strong, quantified backtest results
- Time-series, volatility, machine learning, and market microstructure work
- Research and reproducibility experience
- A top-2% competition result
- An open-source package and paper under review

The main problem is **positioning**. The resume currently makes your most recent role—Assistant Store Manager—the most prominent item. A recruiter scanning for quant talent may initially see a retail operations candidate rather than a statistics Ph.D. with trading research experience.

Your biggest improvements should be:

1. Put quant/research experience before the bakery role.
2. Remove or fix the mathematically incorrect Sharpe-ratio bullet.
3. Add a concise summary and a more complete technical-skills section.
4. Clarify your Ph.D. research and current status.
5. Tighten several bullets to sound more precise and research-oriented.

---

## Likely reviewer perspective

### Recruiter glance

**Current verdict: Maybe**

The degree and Northpeak internship are credible, but the first role shown is Assistant Store Manager. That creates an immediate narrative problem:

> “Is this person currently pursuing quant research, or did they move into retail management?”

The answer may be obvious after reading the full resume, but recruiters often do not spend that long on the first pass.

### Hiring manager

**Likely verdict: Interview, if the resume is repositioned**

A quant hiring manager will notice the strongest parts:

- Order-book imbalance signal
- Out-of-sample testing after costs
- Turnover and slippage reduction
- Point-in-time feature engineering
- HAR-RV benchmark comparisons
- Statistical testing
- Cluster-based simulation infrastructure

They will also ask about:

- Whether the 0.4 Sharpe improvement was genuinely incremental and robust
- How transaction costs and market impact were modeled
- Whether the volatility models avoided look-ahead leakage
- Why you are currently working as an assistant store manager
- What your Ph.D. research is about and why it is not listed more prominently

---

# Highest-priority changes

## 1. Reorder the experience section

Do not lead with the bakery role. Use one of these structures:

### Preferred structure

```text
EDUCATION
RESEARCH AND QUANTITATIVE EXPERIENCE
Northpeak Capital
Ridgeway University, Statistical Learning Lab
SELECTED PROJECTS
ADDITIONAL EXPERIENCE
Sunrise Bakery
SKILLS
```

Alternatively, keep reverse chronology but create an **Additional Experience** section for Sunrise Bakery.

The bakery role should not be hidden, especially if it explains your current employment, but it should not define the top of the resume.

You could reduce it to one bullet:

```text
- Managed opening operations and a six-person team while maintaining weekly labor and inventory budgets; reduced unsold production from 12% to 7%.
```

The second bullet is more useful than the first because it contains a measurable operational result.

---

## 2. Delete the Sharpe-ratio bullet immediately

This bullet is mathematically incorrect:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

Annualizing a Sharpe ratio normally uses:

\[
\text{Annualized Sharpe} = \text{Daily Sharpe} \times \sqrt{252}
\]

Multiplying by 252 is a serious credibility problem for a statistics/quantitative research candidate. It could cause a technical reviewer to question the rest of the backtest.

If this was an actual mistake in the analysis, do not try to preserve it. Remove the bullet. If the intended statement was different, replace it with an accurate version, such as:

```text
- Standardized daily-to-annual performance reporting using a 252-trading-day convention and square-root-of-time Sharpe annualization.
```

Only use that replacement if it is factually true.

---

## 3. Add a summary

Your first page needs to immediately identify you as a quant researcher. For example:

```text
Statistics Ph.D. candidate with quantitative research experience in market microstructure, volatility forecasting, time-series modeling, and statistical learning. Built and evaluated transaction-cost-aware signals for liquid index futures, including point-in-time feature pipelines and out-of-sample validation across 30 indices. Proficient in Python, R, SQL, PyTorch, and statistical modeling.
```

Avoid saying “expert” or making claims that are not supported by the rest of the resume.

---

## 4. Clarify the Ph.D. research story

Your education says:

> Ph.D. candidate in Statistics

But the research experience ends in August 2021, immediately before the Ph.D. began. The reader may wonder what you have done during the Ph.D.

Add a current research entry or a brief dissertation line if truthful:

```text
Ridgeway University | Ph.D. Candidate in Statistics
Sep 2021 – Expected May 2026
- Research focus: statistical learning, high-dimensional inference, volatility forecasting, and time-series methods.
- Dissertation work examines [specific problem], using [methods] to [research objective].
```

Do not invent a dissertation topic. But some explanation of your current research is essential.

If the Volatility Forecasting Study is part of your doctoral work, label it accordingly rather than making it appear disconnected:

```text
Volatility Forecasting Study | Doctoral Research Project
```

---

# Bullet-level recommendations

## Northpeak Capital

This is the strongest section and should be near the top. Several bullets can be made more precise.

### Current

> Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.

### Suggested

```text
- Developed a short-horizon order-book imbalance signal for liquid index futures that improved the desk portfolio’s out-of-sample Sharpe by 0.40 over an 18-month backtest after transaction costs.
```

Be careful with “improved the desk portfolio’s Sharpe.” If you mean the standalone signal’s Sharpe, say that instead. The distinction matters.

Possible alternatives:

```text
- Developed a short-horizon order-book imbalance signal for liquid index futures with a 0.40 out-of-sample Sharpe contribution over 18 months after transaction costs.
```

Use the version that accurately reflects the analysis.

### Current

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

### Suggested

```text
- Reduced signal turnover from 34% to 21% using a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by one-third.
```

This is already strong; it mainly needs tightening.

### Current

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

### Suggested

```text
- Compared forecast errors against a nested HAR-RV benchmark across 30 indices using Diebold–Mariano tests; report statistical significance or confidence levels if available.
```

The current version says you used the test but not what it showed. Add the result if you can:

```text
- Confirmed lower forecast loss than the nested HAR-RV baseline across 30 indices using Diebold–Mariano tests, with significance at [threshold] for [number] indices.
```

Do not add a significance claim unless you have the underlying results.

### Current

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

Problems:

- “Joining” is probably a typo or grammatical error.
- The sentence is awkward.
- “Point-in-time” should be connected clearly to avoiding look-ahead bias.

### Suggested

```text
- Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted in two subsequent projects.
```

If the feature store explicitly prevented look-ahead bias, say so:

```text
- Built a point-in-time feature store for 120 microstructure features across six venues, deduplicating late prints and versioning schemas to prevent look-ahead leakage; reused in two subsequent projects.
```

### Current

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.

### Suggested

```text
- Documented backtest assumptions, transaction-cost modeling, validation procedures, and known failure regimes in the desk research wiki.
```

This is useful, but it should come after the technical achievements.

---

## Ridgeway University research experience

These are good bullets, but the section currently looks like an old job rather than part of your ongoing academic profile.

### Current

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours and making runs reproducible by seed.

### Suggested

```text
- Built a reproducible cluster-based simulation pipeline that reduced a 2,000-run Monte Carlo study from 3 days to 5 hours through parallel execution and seed-controlled experiments.
```

Only mention parallel execution if that is what produced the speedup.

### Current

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

### Suggested

```text
- Derived a variance bound for a sparse regression estimator that improves the prior bound by a logarithmic factor; result appears in Section 3 of a manuscript under review at the Journal of the American Statistical Association.
```

This is a strong research bullet. “My proof” is less formal than “derived” or “established.”

### Current

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

This combines too many unrelated achievements.

Split it:

```text
- Released an open-source R package for high-dimensional covariance estimation, downloaded 3,000 times in its first year.
- Maintained the lab’s shared cluster and organized its weekly statistical learning reading group.
```

You can omit the grading responsibility unless teaching is important for the target role.

---

# Projects

The projects are relevant, but the first project repeats itself.

You currently say:

- Beat HAR-RV QLIKE loss by 7%
- Cut forecast error from 0.20 to 0.15
- Improved directional hit rate by 6%

All three bullets mention the same model and dataset. Keep two or three only if they demonstrate distinct skills.

Suggested revision:

```text
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 – Present
- Developed a temporal convolutional model for realized-volatility forecasting, reducing out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices.
- Reduced forecast error from 0.20 to 0.15 and improved directional hit rate from 52% to 58% using realized-volatility features and an asymmetric loss.
- Evaluated robustness across rolling time splits and documented feature availability to avoid look-ahead bias.
```

Only include the third bullet if you actually performed those checks. For quant roles, validation methodology is often more valuable than another performance metric.

Also clarify what “forecast error” means. Is it RMSE, MAE, or another metric? Use the exact metric:

```text
- Reduced out-of-sample RMSE from 0.20 to 0.15...
```

Do not call two different metrics “forecast error” without naming them.

---

## Kaggle project

This is strong and should probably remain.

Suggested revision:

```text
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 – Jun 2023
- Placed 41st of 2,900 teams—top 2%—using a gradient-boosting ensemble over 300 engineered features.
- Eliminated a 0.02 local-validation/leaderboard gap by switching to time-grouped cross-validation, reducing validation leakage.
- Built a permutation-importance feature-selection pipeline that reduced 900 candidate features to 300 without lowering validation performance.
```

“Closed the gap” can sound like optimizing to the leaderboard. “Reduced validation leakage” is clearer.

---

# Skills section

There is a typo:

> time-series econometircs

Correct it to:

> time-series econometrics

Your skills section is too short for a quant resume and the categories could be stronger.

Possible structure:

```text
Programming: Python, R, SQL, C++
Machine Learning: PyTorch, gradient boosting, feature selection, temporal convolutional networks
Statistics: Time-series econometrics, volatility modeling, Bayesian inference, statistical learning, high-dimensional inference
Quantitative Finance: Market microstructure, order-book signals, transaction-cost modeling, backtesting, realized volatility
Data/Infrastructure: Kafka, Linux, Git, distributed computing, reproducible simulation
```

Only include tools you can discuss technically in an interview. If you used NumPy, pandas, scikit-learn, Jupyter, Docker, Git, Linux, or a cloud platform, include them. For quant roles, omitting common implementation tools can make the technical profile look incomplete.

Also consider replacing “Methods” with “Statistical Modeling” or “Quantitative Methods.” Category names themselves help communicate fit.

---

# Publications and research output

The under-review JASA manuscript is a major credibility signal, but it is buried inside a bullet. Add a small publications section:

```text
PUBLICATIONS
Patel, M. et al. “[Paper title].” Under review at the Journal of the American Statistical Association.
```

Use the actual author list and title. Do not imply acceptance or publication.

If your role was not sole-author, avoid language that suggests you independently conducted every part of the paper. “Derived” is appropriate for your specific contribution if accurate.

You could also include:

```text
Research Software
- Open-source R package for high-dimensional covariance estimation; 3,000 downloads in first year.
```

That may be more valuable than placing the package only in an old experience bullet.

---

# ATS and keyword assessment

There is no job description, so an exact ATS match rate cannot be calculated. For the quant-research roles implied by your resume, you already have strong coverage of:

- Statistical learning
- Time-series modeling
- Volatility forecasting
- Market microstructure
- Order-book signals
- Backtesting
- Transaction costs
- Python
- R
- SQL
- PyTorch
- Gradient boosting
- Bayesian inference
- Feature engineering
- Out-of-sample validation

Potentially missing terms, if truthful:

- NumPy
- pandas
- scikit-learn
- Git
- Linux
- C++ development
- Portfolio construction
- Risk modeling
- Market impact
- Execution modeling
- Distributed computing
- Data pipelines
- Docker or cloud infrastructure

Do not add keywords merely because they are common. Add only technologies and methods you have actually used.

---

# Narrative and credibility issues

## Current narrative

The current order tells this story:

1. I manage a bakery.
2. I previously interned in quant research.
3. I did statistics research several years ago.
4. I have independent quant projects.

That is not the story you want.

## Better narrative

The revised resume should tell this story:

1. I am a Statistics Ph.D. candidate.
2. I conduct quantitative research in market microstructure, volatility, and statistical learning.
3. I have direct experience building cost-aware trading signals.
4. I validate models rigorously out of sample.
5. I can build reproducible research infrastructure.
6. I also have measurable operational and leadership experience.

That narrative is much more compelling for quant research roles.

---

# Suggested section order

```text
Morgan Patel
Contact information and GitHub/portfolio

SUMMARY

EDUCATION

QUANTITATIVE RESEARCH EXPERIENCE
Northpeak Capital
Ridgeway University, Statistical Learning Lab

SELECTED PROJECTS
Volatility Forecasting Study
Kaggle Market Prediction Competition

PUBLICATIONS / RESEARCH SOFTWARE

ADDITIONAL EXPERIENCE
Sunrise Bakery

TECHNICAL SKILLS
```

If the resume must fit on two pages, combine Publications and Research Software or keep them as one compact section.

---

# Eight-dimension score

These scores assume a quantitative research or systematic trading target, not a specific job description.

| Dimension | Score | Comments |
|---|---:|---|
| Target-keyword coverage | 8/10 | Strong quant vocabulary, though exact JD coverage is unknown |
| Summary | 3/10 | No summary or immediate target-role framing |
| Skills section | 6/10 | Relevant but sparse; typo and weak category labels |
| Bullet quality | 7/10 | Strong metrics, but one serious mathematical error and several awkward bullets |
| Research credibility | 8/10 | Ph.D., JASA manuscript, open-source package, strong projects |
| Narrative coherence | 5/10 | Bakery role dominates the first impression |
| Page/visual structure | 6/10 | Text structure appears workable, but needs hierarchy and section reordering |
| Credibility signals | 7/10 | Good results, but backtest claims need methodological detail |

**Overall: approximately 6.5–7/10 currently.**

With the ordering, summary, Sharpe correction, and research-positioning changes, this could become an **8/10 quant-research resume**.

---

# Priority action list

## Tier 1 — Do these first

1. Move Sunrise Bakery to Additional Experience.
2. Remove the incorrect Sharpe annualization bullet.
3. Add a three-line quant-focused summary.
4. Explain your current Ph.D. research.
5. Correct “econometircs” and “Joining.”
6. Add a publications/research-software section.
7. Name the exact metrics used for “forecast error.”
8. Clarify whether the 0.4 Sharpe figure is signal Sharpe, portfolio contribution, or portfolio improvement.

## Tier 2 — Strong improvements

1. Add statistical significance or confidence results to the Diebold–Mariano bullet if available.
2. Add point-in-time and leakage-prevention language where technically accurate.
3. Expand skills with actual tools such as pandas, NumPy, scikit-learn, Git, and Linux.
4. Split the overloaded open-source package/cluster/reading-group bullet.
5. Reduce repeated descriptions of the temporal convolutional model.

## Tier 3 — Lower priority

1. Replace “cut” with “reduced” in formal research bullets.
2. Use consistent en dashes in dates.
3. Standardize metric formatting: `0.40`, `7%`, `52% to 58%`.
4. Replace `example.com/code/mpatel` with a real GitHub or portfolio link if available.

---

# Interview bridges

| Resume evidence | How to frame it in an interview |
|---|---|
| Order-book imbalance signal | “I worked on extracting short-horizon predictive information from order-book state while accounting for transaction costs and execution effects.” |
| Position smoother | “The modeling problem was not only predictive accuracy; it was converting forecasts into positions without allowing turnover and slippage to erase the edge.” |
| Point-in-time feature store | “I treated data timing and schema versioning as part of the research problem because otherwise a backtest can look strong while containing subtle look-ahead leakage.” |
| HAR-RV comparison | “I used HAR-RV as a transparent, domain-relevant baseline rather than evaluating the neural model in isolation.” |
| Monte Carlo pipeline | “The cluster pipeline let us run large simulation studies reproducibly, with controlled random seeds and substantially shorter iteration cycles.” |
| Sparse-regression proof | “The theoretical work strengthened my understanding of estimator behavior and complements my empirical model-validation experience.” |
| Bakery management | “Although outside the technical domain, the role gave me direct experience managing people, inventory, operating constraints, and budgets under time pressure.” |

The most important change is not adding more content. It is making the existing technical content appear first, removing the credibility-damaging Sharpe bullet, and making the document unmistakably read as a **statistics Ph.D. candidate pursuing quantitative research**.