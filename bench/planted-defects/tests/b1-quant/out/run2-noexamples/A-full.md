# Full review: resume.pdf

**85/100** — format 100 · content 75 · wording 87 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The Sharpe-ratio annualization uses the wrong scaling factor and should be removed from the research narrative.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   Under the standard independent daily-return convention, a daily Sharpe ratio is annualized by multiplying by the square root of 252, not by 252. This is a field-level calculation error that directly undermines trust in the reported research, and the process statement is also an outlier from the surrounding result-and-validation progression.
   **How to change it:** Delete this bullet rather than include the incorrect calculation; if the calculation is needed elsewhere, use “multiplying it by √252” unless serial correlation or time-varying volatility requires a documented adjustment.
2. **The forecast-error claim is mathematically wrong: the change from 0.20 to 0.15 is a 25% reduction, not a 33% improvement.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The reduction is (0.20 - 0.15) / 0.20 = 25%. A reader who checks the arithmetic may distrust the other reported results, especially because the line also labels the metric only as “forecast error.”
   **How to change it:** Replace “a 33% improvement” with “a 25% reduction,” and replace “forecast error” with [the exact error metric and whether the values are out-of-sample, including the forecast horizon if material].
3. **The directional-performance claim describes a six-percentage-point increase as a 6% improvement without defining the target or horizon.**
   > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
   The endpoints show 52% to 58%, which is six percentage points; a relative increase would be approximately 11.5%. Without specifying what direction means for the next-period realized-volatility target, a reader cannot reproduce or independently interpret the hit rates.
   **How to change it:** Replace “by 6%” with “by 6 percentage points,” and define the target and horizon: [state whether direction means an increase or decrease in the next-period realized-volatility target and how ties or thresholds were handled].

## Already working

- s2:e1:b0: Shows a concrete trading result rather than only describing research activity.
- s2:e1:b3: Shows reusable research infrastructure rather than only an isolated analysis.
- s3:e1:b0: The 41st-place result is a concrete, high-signal outcome.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

### The labour-budget claim gives no measurable size for the cost result.

> within its weekly labour budget

A reader cannot tell whether staying within budget meant barely meeting the target, consistently underspending, or simply following an existing schedule. The six-person team shows scope, but the budget outcome needs a concrete comparison to demonstrate management impact.

**How to change it:** Replace the general phrase with the actual weekly budget amount or variance: [the weekly labour-budget amount or variance you maintained].

*raised by content · costs about 5 words to add*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The Sharpe-ratio annualization uses the wrong scaling factor and should be removed from the research narrative.

> multiplying it by 252

Under the standard independent daily-return convention, a daily Sharpe ratio is annualized by multiplying by the square root of 252, not by 252. This is a field-level calculation error that directly undermines trust in the reported research, and the process statement is also an outlier from the surrounding result-and-validation progression.

**How to change it:** Delete this bullet rather than include the incorrect calculation; if the calculation is needed elsewhere, use “multiplying it by √252” unless serial correlation or time-varying volatility requires a documented adjustment.

*raised by content, narrative · costs saves about 17 words*

### The headline trading result does not define what the 0.4 Sharpe increase is compared with.

> added 0.4 Sharpe

A quantitative reader cannot tell whether 0.4 means an absolute Sharpe-point increase, a relative change, or another unit, nor which book or benchmark is on the other side of the comparison. Without that anchor, the result cannot be judged as evidence that the desk’s book improved.

**How to change it:** Replace the unanchored phrase with the exact comparison and unit: [baseline book Sharpe and whether the result is an absolute Sharpe-point increase].

*raised by content · costs about 8 words to add*

### The turnover result does not identify whose gross returns were retained or how that figure relates to slippage.

> keeping 90% of gross returns

A reader cannot tell whether 90% refers to the original unsmoothed signal’s gross returns, another backtest, or net returns. That ambiguity makes it difficult to weigh the trade-off between lower turnover, retained performance, and the reported slippage reduction.

**How to change it:** Specify that the figure is [the percentage of the original unsmoothed signal’s gross returns retained], and keep the gross-versus-net distinction explicit alongside the slippage result.

*raised by content · costs about 8 words to add*

### The Diebold-Mariano result states that a forecast gain was confirmed but gives no measured outcome.

> Confirmed the forecast gain

A reader cannot tell what forecast improvement the tests found or whether the result was statistically meaningful across the 30 indices. “Standard” does not substitute for the test outcome, so the validation claim carries less evidentiary weight than the rest of the research bullets.

**How to change it:** Replace the generic confirmation with the most useful result: [forecast loss difference or test significance result across the 30 indices], and omit “standard.”

*raised by content · costs about 6 words to add*

### The documentation bullet identifies the audience but not what the documentation enabled.

> for future interns

“For future interns” describes intended readership, while documenting assumptions and failure regimes is an activity rather than an outcome. A reader still cannot tell whether the wiki was used, reused, or changed later research practice.

**How to change it:** Delete “for future interns” and replace the endpoint with [the research decision, reuse, or workflow improvement enabled by the documentation], if available.

*raised by content · costs about 6 words to add*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The theoretical improvement is described only as tightening a bound by a log factor, without naming the old and new terms.

> tightens the previous bound by a log factor

A statistics reader cannot judge the size or significance of the improvement from that phrase alone. The claim may be technically valid, but the comparison is not reproducible enough to carry much evidentiary weight.

**How to change it:** Replace the generic phrase with [the exact logarithmic-term comparison in the previous and new bounds].

*raised by content · costs about 6 words to add*

### The teaching bullet gives a positive rating but no measured student or course outcome.

> earning a 4.8/5 teaching rating

A 4.8/5 rating shows that students evaluated the teaching positively, but it does not establish learning or instructional effectiveness. A hiring reader can see responsibility and reception, but not what the 60 students or course achieved.

**How to change it:** Keep the rating as supporting evidence and add [the single strongest measured student or course outcome], or replace the rating with that outcome if it is more meaningful.

*raised by content · costs about 6 words to add*

### The package result is buried in an overloaded bullet that combines unrelated duties and does not show adoption beyond downloads.

> while maintaining the lab’s shared cluster

The reader must work through cluster maintenance, reading-group organization, and grading before reaching the package outcome, and the ambiguous “which” can attach the downloads to any of those activities. Downloads show reach but not unique users, sustained use, or downstream adoption, while the other duties have no outcomes.

**How to change it:** Remove or separate the cluster, reading-group, and grading duties, move “downloaded 3,000 times in its first year” immediately after “released an open-source R package,” and add [unique users, dependent projects, citations, or documented use] if available.

*raised by content · costs saves about 10 words and adds about 5 words*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The forecast-error claim is mathematically wrong: the change from 0.20 to 0.15 is a 25% reduction, not a 33% improvement.

> a 33% improvement

The reduction is (0.20 - 0.15) / 0.20 = 25%. A reader who checks the arithmetic may distrust the other reported results, especially because the line also labels the metric only as “forecast error.”

**How to change it:** Replace “a 33% improvement” with “a 25% reduction,” and replace “forecast error” with [the exact error metric and whether the values are out-of-sample, including the forecast horizon if material].

*raised by content, wording · costs about 8 words to add*

### The directional-performance claim describes a six-percentage-point increase as a 6% improvement without defining the target or horizon.

> by 6% ... from 52% to 58%

The endpoints show 52% to 58%, which is six percentage points; a relative increase would be approximately 11.5%. Without specifying what direction means for the next-period realized-volatility target, a reader cannot reproduce or independently interpret the hit rates.

**How to change it:** Replace “by 6%” with “by 6 percentage points,” and define the target and horizon: [state whether direction means an increase or decrease in the next-period realized-volatility target and how ties or thresholds were handled].

*raised by content, wording · costs about 12 words to add*

### The three bullets repeat model-performance claims without a clear progression from method to primary result to secondary evaluation.

> temporal convolutional model

The QLIKE result and forecast-error result both present improvements for the same volatility study, while the directional hit-rate result again describes the temporal-convolutional model across the same 30 indices. The repetition makes the project look less structured and weakens the distinction between its primary and secondary evaluation metrics.

**How to change it:** Combine the overlapping QLIKE and forecast-error claims or clearly label one as the primary out-of-sample result and the other as a secondary metric; retain the directional result only as a separately defined evaluation.

*raised by narrative · costs saves about 10 words*

### The 7% QLIKE improvement does not state how the 30-index result was aggregated.

> by 7% on 30 equity indices

QLIKE performance can differ substantially depending on whether observations or indices are weighted equally. Without the aggregation convention, a technical reader cannot reproduce or fully interpret the reported comparison.

**How to change it:** Add the aggregation convention immediately after the figure: [state whether the 7% is a relative reduction in pooled QLIKE or in the equal-weighted average across the 30 indices].

*raised by content · costs about 8 words to add*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The competition bullets do not anchor their validation results to named metrics, before-and-after scores, or leakage-safe feature-importance evaluation.

> closed a 0.02 gap

A reader cannot tell what metric the 0.02 gap measures, what the local and leaderboard scores were before and after time-grouped folds, or whether “without losing validation score” means exactly unchanged or merely not materially worse. The feature-selection claim also leaves unclear whether permutation importance was computed within folds or on untouched data, so the predictive result and leakage control cannot be independently judged.

**How to change it:** Name [the competition metric] and give [the before and after local-versus-leaderboard values]; replace “without losing validation score” with [the metric and score before and after trimming, or the validated change], and state that permutation importance was computed [within each training fold or on untouched data].

*raised by content · costs about 20 words to add*

## Across the whole résumé

### Sunrise Bakery should not appear as the first and only current role in a résumé aimed at quantitative work.

> Sunrise Bakery | Assistant Store Manager

Its current position makes an unrelated store-management job dominate the career story, even though the strongest evidence points to quantitative research, statistics, and machine learning. A recruiter may therefore misread the candidate’s direction before reaching the more relevant experience.

**How to change it:** Move Sunrise Bakery into an “Additional Experience” section after quantitative experience and projects, or compress it to one line.

*raised by narrative · costs no words*

### The Skills section misspells “econometrics.”

> econometircs

The error is immediately visible in a technical skills list and can make the document appear less carefully reviewed. It also risks weakening keyword matching for a relevant quantitative discipline.

**How to change it:** Replace “econometircs” with “econometrics.”

*raised by narrative · costs no words*

## Set aside (11)

- format: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..."
- s2:e1:b5: "for future interns" identifies the intended audience but not an outcome from the documentation. (and 1 more like it)
- s2:e2:b3: The line combines "Released an open-source R package" with "maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses," but gives an outcome only for the package.
- s3:e1:b0, s3:e1:b1: "Placed 41st of 2,900 teams with a gradient-boosting ensemble" reports the team's result but not the candidate's contribution to achieving it. (and 1 more like it)
- s3:e1:b2: "using permutation importance" does not say whether feature importance was computed within folds or evaluated on untouched data.
- s2:e0:b0, s2:e0:b1, s2:e2:b0, s2:e2:b1, s3:e0:b0, s3:e0:b1, s3:e0:b2: "Managed" is past tense even though the role is current; use "Manage" to match "Sep 2025 - Present." (and 7 more like it)
- s2:e2:b1: The first-person phrase "my proof" violates resume style and adds no information after the opening verb; use "the proof."
- s2:e2:b3: The phrase "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" combines three unrelated responsibilities into one overloaded bullet; remove the secondary duties or separate them into distinct bullets.
- s2:e2:b3, s2:e1:b3: The clause "which was downloaded 3,000 times in its first year" has an ambiguous antecedent because "which" follows several activities; attach the result directly to "R package" or lead with "Downloaded 3,000 times in its first year, released an open-source R package...". (and 2 more like it)
- s2:e1:b1, s2:e1:b2, s2:e1:b3, s2:e1:b4, s2:e1:b5, s3:e0:b1, s3:e1:b1, s3:e1:b2: "by a third" uses a less precise number format than the surrounding percentages, so the magnitude is slower to scan; replace it with "by 33%" or the exact measured percentage. (and 8 more like it)
- skills: SQL — no experience or project bullet shows SQL use. (and 3 more like it)
