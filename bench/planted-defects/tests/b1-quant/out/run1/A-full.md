# Full review: resume.pdf

**83/100** — format 100 · content 73 · wording 86 · narrative 61

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The Sharpe-ratio annualization uses the wrong factor.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   Multiplying a daily Sharpe ratio by 252 scales it far too aggressively; the conventional annualization multiplies it by the square root of 252. A quantitative hiring manager is likely to treat this as a serious credibility error because the line presents the incorrect calculation as a deliberate reporting step.
   **How to change it:** Replace "multiplying it by 252" with "multiplying it by √252" and recompute any annualized Sharpe reported elsewhere from that corrected procedure.
2. **The forecast-error result is mathematically wrong: reducing 0.20 to 0.15 is a 25% reduction, not a 33% improvement.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The absolute decrease is 0.05, and 0.05 divided by the original 0.20 equals 25%. An incorrect percentage undermines confidence in the other reported research results.
   **How to change it:** Replace "a 33% improvement" with "a 25% reduction" and identify [the forecast-error metric] after "forecast error".
3. **The directional hit-rate increase is 6 percentage points, not an unqualified 6% improvement.**
   > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
   The values move from 52% to 58%, which is a six-percentage-point increase. Calling it a 6% improvement is mathematically ambiguous; the relative increase would be approximately 11.5%.
   **How to change it:** Replace "by 6%" with "by 6 percentage points"; use approximately 11.5% only if a relative improvement is intended and label it accordingly.

## Already working

- s2:e1:b0: States the asset class, horizon, out-of-sample duration, and after-cost condition.
- s2:e2:b0: Provides both workload scale and an exact runtime comparison.
- s3:e0:b0: Uses an out-of-sample QLIKE result, which is an appropriate evaluation setup for volatility forecasting.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

### The bakery role does not quantify the weekly labour-budget result.

> within its weekly labour budget

A reader can see that spending stayed controlled, but cannot judge whether this meant avoiding a small overspend or managing a substantial staffing budget. The team size establishes scope, but it does not measure the budget outcome.

**How to change it:** Keep "team of 6 bakers and cashiers" and add [amount under the weekly labour budget] or [percentage under the weekly labour budget].

*raised by content · costs about 6 words to add*

### The stock-count bullet names the activities but not the ordering change that produced the reduction in unsold bread.

> Ran daily stock counts and supplier orders

The reader can see the responsibility and the 12%-to-7% result, but cannot tell what decision changed or how the daily counts affected ordering or production. Without that link, the result can look coincidental rather than personally driven.

**How to change it:** Lead with the result and replace or supplement the activity phrase with [the ordering or production adjustment made after reviewing stock counts].

*raised by content · costs about 8 words to add*

### Move Sunrise Bakery out of the first position or compress it so the quantitative-research narrative leads.

> Sunrise Bakery

The two bakery bullets form a coherent store-operations entry, but that work does not support the quantitative-research direction. Keeping it first makes an unrelated role dominate the reader's first impression before the research experience and projects appear.

**How to change it:** Move the bakery entry into a short Additional Experience section after the research-focused experience and projects, or reduce it to one line.

*raised by narrative · costs no words if moved; saves about 15 words if compressed*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The Sharpe-ratio annualization uses the wrong factor.

> multiplying it by 252

Multiplying a daily Sharpe ratio by 252 scales it far too aggressively; the conventional annualization multiplies it by the square root of 252. A quantitative hiring manager is likely to treat this as a serious credibility error because the line presents the incorrect calculation as a deliberate reporting step.

**How to change it:** Replace "multiplying it by 252" with "multiplying it by √252" and recompute any annualized Sharpe reported elsewhere from that corrected procedure.

*raised by content, wording · costs no words*

### The Diebold-Mariano bullet names a test without reporting its result or clearly defining the forecast comparison.

> standard Diebold-Mariano tests

The test name alone does not show whether the forecast difference was statistically meaningful, what was being forecast, or how the 30-index comparisons were evaluated. A reader cannot judge the size or reliability of the claimed gain from the current wording.

**How to change it:** Remove "standard" and add [loss function], [forecast target], and [adjusted p-value or number of indices with significant improvement].

*raised by content · costs about 8 words to add*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The variance-bound bullet uses a first-person pronoun in an otherwise phrase-based résumé.

> my proof

The phrase "my proof" makes the line read like a sentence and breaks the compact style used elsewhere. It also draws attention to authorship in a less polished way than a direct noun phrase.

**How to change it:** Replace "my proof" with "the proof" or "a proof".

*raised by file, wording · costs no words*

### The variance-bound improvement is not measurable because "by a log factor" does not state the bounds or exact factor.

> by a log factor

A statistics reader cannot tell how substantial the improvement is or under which assumptions it holds. The paper's review status supports credibility, but it does not substitute for the numerical comparison.

**How to change it:** Replace "by a log factor" with [the exact previous and new bounds, or the precise logarithmic improvement and parameter regime].

*raised by content · costs about 8 words to add*

### The R-package bullet shows release and download reach but not what the package enabled or improved.

> downloaded 3,000 times

Downloads are evidence of scale, not of the contribution's outcome. A reader cannot tell whether the package improved covariance estimation, supported downstream research, or was adopted by users beyond the download event.

**How to change it:** Keep the release and technical purpose, then replace or supplement the download evidence with [the package's measured result, downstream adoption, citations, or users]; move the other lab duties to a separate line if they remain.

*raised by content · costs about 8 words to add*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The forecast-error result is mathematically wrong: reducing 0.20 to 0.15 is a 25% reduction, not a 33% improvement.

> a 33% improvement

The absolute decrease is 0.05, and 0.05 divided by the original 0.20 equals 25%. An incorrect percentage undermines confidence in the other reported research results.

**How to change it:** Replace "a 33% improvement" with "a 25% reduction" and identify [the forecast-error metric] after "forecast error".

*raised by content, wording · costs about 2 words to add*

### The directional hit-rate increase is 6 percentage points, not an unqualified 6% improvement.

> by 6%

The values move from 52% to 58%, which is a six-percentage-point increase. Calling it a 6% improvement is mathematically ambiguous; the relative increase would be approximately 11.5%.

**How to change it:** Replace "by 6%" with "by 6 percentage points"; use approximately 11.5% only if a relative improvement is intended and label it accordingly.

*raised by content, wording · costs about 1 word to add*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The validation bullet incorrectly treats the local-to-leaderboard gap as proof that leakage was the cause.

> Cut validation leakage

A discrepancy can also result from distribution shift, sampling variation, leaderboard noise, metric differences, or preprocessing problems. The stated observation does not establish that leakage was cut, so the causal claim may make the result look methodologically unsound.

**How to change it:** Replace the causal claim with the directly supported result: describe the switch to time-grouped folds and state that it reduced or closed the discrepancy only if that before-and-after comparison was actually observed.

*raised by content · costs about 2 words to add*

### The feature-selection result does not identify the validation metric or provide the before-and-after comparison.

> without losing validation score

A reader cannot tell whether the preserved result concerns accuracy, ranking, loss, or another metric. Without the scores or a named metric, the practical value of reducing 900 features to 300 is difficult to judge.

**How to change it:** Replace "validation score" with [the validation metric] and add [the score with 900 features] and [the score with 300 features], or state that the scores were unchanged under the same validation design.

*raised by content · costs about 8 words to add*

## Across the whole résumé

### The résumé presents the bakery job and Ph.D. as substantial overlapping commitments without explaining how they fit together.

> Sep 2025 - Present

The dates show the bakery role continuing during the Ph.D., so a reader may question whether the role was part-time, taken during leave, or otherwise compatible with doctoral study. Without that context, the timeline can look inconsistent and create doubt about the scope of both commitments.

**How to change it:** Add [part-time status, leave period, or other compatibility context] to the bakery entry, or correct the dates if the overlap is not accurate.

*raised by narrative · costs about 3 words to add*

### The résumé does not distinguish the two HAR-RV comparisons across 30 indices, so the results may look repeated.

> HAR-RV baseline

The Northpeak bullet and the independent study both mention a HAR-RV comparison across 30 indices, but the page does not identify different datasets, periods, or models. A reader may therefore read the second result as duplicated evidence rather than separate work.

**How to change it:** Add [the distinct dataset, evaluation period, or model for each comparison] to distinguish the studies, or combine the evidence if they use the same setup.

*raised by narrative · costs about 6 words to add*

### The Methods skills list contains a spelling error: "econometircs" should be "econometrics".

> econometircs

A misspelled technical field is immediately visible in a skills section and can undermine confidence in attention to detail. It is especially costly because the correction requires no substantive revision.

**How to change it:** Replace "econometircs" with "econometrics".

*raised by narrative · costs no words*

## Set aside (6)

- s2:e0:b1, s2:e1:b0, s2:e1:b1, s2:e1:b2, s2:e1:b4, s2:e1:b5, s2:e2:b2, s2:e2:b3, s3:e0:b1, s3:e0:b2, s3:e1:b1, s3:e1:b2: “cutting unsold bread from 12% to 7% of production” gives the two rates but not the periods over which they were measured. (and 12 more like it)
- s2:e0:b1, s2:e1:b2, s2:e1:b3, s2:e1:b4, s3:e1:b0, s3:e1:b1: "Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production" places the result after the methods; lead with the result instead, such as "Cut unsold bread from 12% to 7% of production by running daily stock counts and supplier orders." (and 6 more like it)
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" bundles unrelated activities into the package achievement, reducing scanability; move the result forward and separate or remove the extra duties. (and 1 more like it)
- skills: C++ — no experience or project bullet shows C++ use. (and 3 more like it)
- s2:e1, s2:e2, s3:e0: s2:e1:b0 and s2:e1:b1 repeat: Both describe the same trading signal and its performance; b1 works best as the implementation and risk-control follow-up to b0. (and 6 more like it)
- s2:e1:b2: "Confirmed the forecast gain" states that an improvement existed but gives no size for the gain.
