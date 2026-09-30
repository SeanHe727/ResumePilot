> Here is my resume: bench/planted-defects/tests-final/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 5 experience/project entries for content and wording, plus the full-resume narrative and format. The two education entries had no bullets to review. No job description was provided for a match review.

The main changes to address:
- Reconcile the volatility project’s figures: the 0.20-to-0.15 error change is a 25% reduction, not 33%; the hit rate rose by 6 percentage points, not 6%.
- Recheck the internship’s daily Sharpe annualization calculation; the content review flagged multiplying by 252 as nonstandard.
- Consider shortening or removing the bakery entry so it doesn’t lead the quantitative-research experience; also correct “econometircs” and remove the first-person “my” flagged in a bullet.

The file parses cleanly for ATS. The full review is available in `/report --full`.

> /report
# Review: resume.pdf

**89/100** — format 100 · content 86 · wording 85 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 11 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Sunrise Bakery leads the experience section but does not support the résumé’s quantitative-research direction. *(saves about 45 words if cut)*

**Why**
As the current role, it is likely to shape a recruiter’s first impression of the experience section. Its store-management work does not reinforce the quantitative-research focus, which can distract from the more relevant research experience.

**How to change it**
Shorten the entry to a single line or cut it if it is not needed.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The bullet attributes the full reduction in unsold bread to stock counts and supplier orders without showing that those actions caused it. *(adds about 2–6 words if substantiated; no words if attribution is removed)*

**Why**
Counts and orders can help reduce waste, but the line does not say that production plans changed in response or rule out other causes. The decrease may be accurate, but the stated method does not establish that attribution.

**How to change it**
If measured, add [the comparison periods] and describe how the counts and orders led to production changes; otherwise replace the causal wording with “unsold bread fell from 12% to 7%.”

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The wording attributes the desk book’s Sharpe-ratio increase to the signal without showing that the backtest isolates its contribution. *(adds about 2–5 words if the contribution is explained; otherwise no words)*

**Why**
An out-of-sample backtest estimates a portfolio’s Sharpe ratio under its assumptions, but that result alone does not establish that the signal caused the desk book’s ratio to rise. The attribution may therefore claim more than the backtest demonstrates.

**How to change it**
If the analysis isolates the signal’s contribution, describe [how]; otherwise replace the attribution with wording that reports the 1.1-to-1.5 change as a backtest result.

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Ordinary Diebold–Mariano tests do not reliably confirm forecast gains when the models being compared are nested. *(adds about 2–5 words if a procedure was used; saves words if the claim is removed)*
2. [Important] The forecast gain is not anchored by a metric or its size. *(adds about 3–6 words)*

**Why**
1. Inference from ordinary Diebold–Mariano tests can be distorted for forecasts from nested models. Without a procedure that accounts for nesting, readers cannot rely on the tests as confirmation of the claimed gain.
2. Readers can see that the baseline comparison was tested, but cannot judge what changed in the forecast or how meaningful the result was. A metric and improvement figure would make the claim easier to assess.

**How to change it**
1. If used, name the procedure that accounts for nesting, such as a suitable Clark–West adjustment or bootstrap; otherwise soften or remove the confirmation claim.
2. Add [the forecast metric and improvement versus the baseline], if available.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the standard annualization method. *(no words)*
2. [Important] The bullet names the reporting audience but not what the reported Sharpe figure changed or informed. *(adds about 4–10 words)*

**Why**
1. Standard annualization scales a daily Sharpe ratio by the square root of the number of trading days, not by the number of days. Multiplying by 252 therefore overstates the annualized ratio.
2. Readers cannot see the value of the calculation beyond producing a number for the desk. Without an outcome or decision tied to the reporting, the work’s impact remains unclear.

**How to change it**
1. Replace “252” with “√252,” if standard annualization assumptions apply.
2. Replace the calculation detail with [the reported Sharpe value and what the desk used it to assess], if that is the meaningful outcome.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The bullet uses a first-person pronoun. *(no words)*

**Why**
The résumé bullet does not need a personal pronoun, and “my” breaks the phrase-style construction of the line. It also shifts attention from the proof to the writer.

**How to change it**
Replace “my proof” with “the proof.”

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The download result is separated from the package it describes by a list of other activities. *(no words)*

**Why**
Readers may not know whether the 3,000 downloads refer to the package or another activity in the bullet. The package’s download count is its clearest impact measure, so the link should be immediate.

**How to change it**
Move “which was downloaded 3,000 times in its first year” directly after “high-dimensional covariance estimation.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The claimed 33% improvement is incorrect: reducing forecast error from 0.20 to 0.15 is a 25% reduction. *(no words)*
2. [Important] “Forecast error” does not identify the metric used for the 0.20 and 0.15 values. *(adds about 1–3 words)*

**Why**
1. The decrease is 0.05 divided by the starting value, 0.20, which equals 25%. A 33% reduction from 0.20 would require an ending value of about 0.133, so the stated figures and percentage conflict.
2. Without the metric, readers cannot interpret what those values measure or compare them meaningfully with other forecast results. Naming it would make the reported change assessable.

**How to change it**
1. Replace “33% improvement” with “25% reduction.”
2. Replace “forecast error” with [name of forecast-error metric].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change is a 6-percentage-point increase, not a 6% increase. *(adds about 2 words)*
2. [Important] The temporal convolutional model is repeated from the preceding bullet. *(saves about 5 words)*

**Why**
1. The hit rate rises from 52% to 58%, an absolute difference of 6 percentage points. A reader could interpret “6%” as a relative increase, which would be about 11.5% of the starting rate.
2. The first bullet already names this method. Repeating it here takes space without adding technical context for a scanning reader.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points,” if accurate.
2. Cut “with a temporal convolutional model.”

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The second phrase repeats the team’s ranking. *(saves about 5 words)*

**Why**
“41st of 2,900 teams” already conveys a top-2% placement. Repeating the same result uses space without adding another achievement.

**How to change it**
Cut “finishing in the top 2%.”

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The smaller validation-to-leaderboard gap does not establish that time-grouped folds reduced leakage. *(adds about 2–6 words if the mechanism is specified; otherwise no words)*

**Why**
Time-grouped folds can reduce leakage if they prevent the specific overlap that caused it, but a smaller score gap alone does not show that leakage was reduced. Other changes or ordinary variation could also explain the gap.

**How to change it**
If the folds demonstrably prevent the original leakage mechanism, specify [that mechanism]; otherwise say the score gap narrowed by 0.02 after switching to time-grouped folds.

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.” *(no words)*

**Why**
The typo is visible in a technical skills term and may make readers question the care taken with the résumé. Correcting it keeps the listed method clear and professional.

**How to change it**
Replace “econometircs” with “econometrics.”

## Already working

- s2:e1:b1: Shows the trade-off between lower turnover and retained gross returns.
- s3:e0:b0: Leads with a quantified result and names the baseline and evaluation metric.
- s3:e1:b2: Shows individual ownership, names the selection method, and gives a clear reduction with a validation-score comparison.

## Set aside (9)

9 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-6814bd8a.md.

