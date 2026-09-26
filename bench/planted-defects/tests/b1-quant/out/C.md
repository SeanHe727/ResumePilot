Your resume has strong quantitative content and unusually good use of metrics. The main problems are a serious Sharpe-ratio error, several numerical/wording inconsistencies, and prioritization that places the bakery role above your more relevant experience.

## Highest-priority corrections

### 1. Remove or correct the Sharpe annualization bullet

This is the most important issue:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252...

Under the usual independence assumption, daily Sharpe is annualized by multiplying by **√252**, not 252. For autocorrelated returns, use an appropriately adjusted calculation.

This bullet would be a major red flag for a quant reviewer. Delete it entirely and recompute any Sharpe figures that depended on that calculation.

### 2. Correct the project percentages

> Cut forecast error from 0.20 to 0.15, a 33% improvement

That is a **25% reduction**:  
\((0.20 - 0.15) / 0.20 = 25\%\)

> Improved directional hit rate by 6%, from 52% to 58%

That is an increase of **6 percentage points**, not 6%. The relative increase is approximately 11.5%.

### 3. Fix the typo

Change:

> time-series econometircs

to:

> time-series econometrics

### 4. Repair the malformed feature-store bullet

Current:

> Joining 120 microstructure features point-in-time across six venues... built a feature store...

Rewrite:

> Built a reusable point-in-time feature store by joining 120 microstructure features across six venues, deduplicating late prints, and versioning schemas; the team reused it in two subsequent projects.

### 5. Use US spelling consistently

Because the resume is set in the USA, change **“labour”** to **“labor.”**

---

## Reposition the experience

For quant roles, the bakery position should not be the first experience recruiters see. Consider splitting the section:

### QUANTITATIVE EXPERIENCE
- Northpeak Capital
- Ridgeway University

### ADDITIONAL EXPERIENCE
- Sunrise Bakery

This preserves your current employment and leadership experience without letting it overshadow your quant background. Keep the bakery role to one or two bullets.

---

## Tighten the Northpeak bullets

You have six bullets, but four strong bullets would be more effective. Also be precise about what “added 0.4 Sharpe to the desk’s book” means. If you only backtested a stand-alone signal, do not imply it was incorporated into the live portfolio.

Suggested version:

**Northpeak Capital | Quantitative Research Intern | Jun 2025–Aug 2025**
- Developed a short-horizon order-book imbalance signal for liquid index futures, improving net out-of-sample Sharpe by 0.4 over an 18-month walk-forward backtest after modeled transaction costs.
- Reduced daily turnover from 34% to 21% with a cost-aware position smoother while retaining 90% of gross returns and lowering estimated slippage by 33%.
- Built a reusable point-in-time feature store by joining 120 microstructure features across six venues, deduplicating late prints, and versioning schemas; the team reused it in two subsequent projects.
- Evaluated forecast performance against a HAR-RV baseline using Diebold–Mariano tests and documented backtest assumptions, transaction costs, and failure regimes.

A few cautions:

- Replace “walk-forward” with your actual validation design if different.
- Say whether the 0.4 improvement refers to stand-alone Sharpe, incremental portfolio Sharpe, or another measure.
- If you tested 30 instruments separately, be prepared to discuss multiple-testing corrections and cross-sectional dependence.
- Avoid disclosing confidential data, methods, or results that Northpeak has not approved.

---

## Consolidate the volatility project

The three bullets partly repeat the same result and create ambiguity about which model or feature set produced each improvement. One or two precise bullets would be stronger.

Suggested version:

**Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024–Present**
- Developed a temporal convolutional model for realized-volatility forecasting across 30 equity indices, reducing out-of-sample QLIKE loss by 7% relative to a HAR-RV baseline.
- Reduced forecast error from 0.20 to 0.15 and increased directional accuracy from 52% to 58% through realized-volatility features and an asymmetric loss function.

Only retain both QLIKE and “forecast error” if they are distinct metrics; otherwise, this appears duplicative. Name the second error metric—for example, RMSE or MAE—instead of saying “forecast error.”

Also, the project closely resembles the Northpeak work: both involve HAR-RV, 30 indices, and volatility forecasting. Make clear that the independent project uses public data and predates the internship, or reviewers may wonder about employer intellectual property.

---

## Improve the research-assistant entry

The final bullet combines too many unrelated responsibilities:

> Released an open-source R package... while maintaining the lab’s shared cluster, organizing the weekly reading group and grading...

Focus on the strongest result—the package—and omit lower-value administrative details if space is limited.

Suggested version:

**Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Jun 2020–Aug 2021**
- Built a reproducible cluster-based simulation pipeline, reducing runtime for a 2,000-run Monte Carlo study from three days to five hours.
- Derived a variance bound for a sparse regression estimator that improves the previous result by a logarithmic factor; the proof appears in Section 3 of a manuscript under review at *JASA*.
- Released an open-source R package for high-dimensional covariance estimation that received 3,000 downloads in its first year.
- Led weekly probability recitations for 60 graduate students, developed 12 problem sets, and earned a 4.8/5 teaching rating.

If the paper is public, add a **Selected Publications** or **Research** section with the title, coauthors, status, and link. Also be ready to explain why this position predates the start of your Ph.D.; the dates may prompt questions, though they are not inherently problematic.

---

## Refine the skills section

Kafka is not a programming language. Reorganize the section:

**Programming:** Python, R, SQL, C++  
**Libraries/Tools:** PyTorch, Kafka, Git, Linux  
**Methods:** Time-series econometrics, Bayesian inference, gradient boosting, statistical learning

Only list tools you can discuss comfortably in an interview. Add relevant libraries such as pandas, NumPy, scikit-learn, statsmodels, or Polars only if they strengthen your candidacy and you have room.

---

## Additional presentation changes

- Use en dashes consistently: `Sep 2021–Expected May 2026`.
- Capitalize consistently: `Ph.D. Candidate in Statistics`.
- Replace the generic code URL label with `GitHub: github.com/...` if that is what it is.
- If applying to quant research roles, include your dissertation topic, advisor, or selected publications.
- Keep bullets to roughly one or two lines where possible.
- Use either periods on every bullet or no periods; you currently use periods consistently, so retain that style.
- Aim for one page if possible, though two pages can be acceptable for a Ph.D. candidate with publications and substantive research.

## Overall assessment

The underlying profile is strong: Ph.D.-level statistics, a relevant quant internship, measurable research output, programming, and competition performance. Fixing the Sharpe calculation and percentage errors is essential. After that, the biggest improvement will come from putting quant experience first, reducing repetition, and making every metric statistically precise.