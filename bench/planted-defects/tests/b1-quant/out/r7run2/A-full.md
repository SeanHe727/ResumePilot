# Full review: resume.pdf

**87/100** — format 100 · content 83 · wording 85 · narrative 63

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The bullet uses a first-person pronoun in "my proof," which does not belong in a résumé bullet.**
   > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
   The pronoun makes the line read like a sentence from a personal narrative rather than a concise résumé phrase. It adds no useful ownership information because the bullet already presents the proof as part of your contribution.
   **How to change it:** Replace "my proof" with "the proof."
2. **Standard Diebold–Mariano tests are invalid for this nested-model forecast comparison.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   The standard test does not use the null distribution appropriate when one forecast model is nested within the other. A nested-model comparison also needs treatment of serial dependence and the structure of testing across 30 indices; using the wrong test undermines the claim that the forecast gain was confirmed.
   **How to change it:** Replace "standard Diebold-Mariano tests" with an appropriate nested-forecast test, such as Clark–West, while retaining the comparison across the 30 indices if that remains the tested structure. If no appropriate nested-model test was run, remove the claim that the gain was confirmed.
3. **The Sharpe-ratio annualization is wrong: multiplying a daily Sharpe ratio by 252 materially overstates it.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is conventionally annualized by multiplying by the square root of 252, not by 252. Multiplication by 252 applies to annualizing an expected daily return, so the reported performance metric would be materially inflated.
   **How to change it:** Replace "252" with "√252" and, if retained, make clear that this is the annualization of the daily Sharpe ratio under the appropriate dependence assumptions.

## Already working

- s2:e1:b0: Combines ownership, strategy type, asset class, performance impact, evaluation period, and transaction-cost treatment in one line.
- s3:e0:b0: Leads with a concrete comparative outcome rather than a description of activity.
- s3:e1:b0: Leads with a highly credible outcome rather than a task description.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

### The bullet does not quantify how far labour costs were under or within the weekly budget.

> within its weekly labour budget

A hiring manager can see the budget target but not how effectively you managed against it. Without the actual variance, the cost-control result is less credible and harder to compare with other management achievements.

**How to change it:** Replace "keeping the store within its weekly labour budget" with the most defensible comparison, such as [weekly labour cost as a percentage or dollar amount under or within the budget].

*raised by content, wording · costs about 5 words to add*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### Standard Diebold–Mariano tests are invalid for this nested-model forecast comparison.

> standard Diebold-Mariano tests

The standard test does not use the null distribution appropriate when one forecast model is nested within the other. A nested-model comparison also needs treatment of serial dependence and the structure of testing across 30 indices; using the wrong test undermines the claim that the forecast gain was confirmed.

**How to change it:** Replace "standard Diebold-Mariano tests" with an appropriate nested-forecast test, such as Clark–West, while retaining the comparison across the 30 indices if that remains the tested structure. If no appropriate nested-model test was run, remove the claim that the gain was confirmed.

*raised by content · costs about 1 word to add*

### The forecast-validation bullet does not state the size or practical meaning of the gain over the nested HAR-RV baseline.

> confirmed the forecast gain

A hiring reader can see that validation occurred but cannot tell whether the improvement was material enough to support the signal's use. "Confirmed" is an indirect summary, so the line makes the reader infer the result rather than showing the measured comparison.

**How to change it:** Replace "confirmed the forecast gain" with the measured improvement versus the nested HAR-RV baseline, such as "improved forecast accuracy by [effect size] versus the nested HAR-RV baseline," if accurate.

*raised by content · costs about 3 words to add*

### The line names the test but omits its result, significance outcome, or forecast-error comparison.

> standard Diebold-Mariano tests across the 30 indices

The test name establishes the method, not the evidence. Without a result anchor, the reader cannot judge how strongly the baseline was beaten across the 30 indices or whether the observed gain was statistically meaningful.

**How to change it:** After the corrected nested-model test, add one defensible result anchor: "[test result or p-value]" or "[forecast-error reduction] versus the nested HAR-RV baseline."

*raised by content · costs about 3 words to add*

### The Sharpe-ratio annualization is wrong: multiplying a daily Sharpe ratio by 252 materially overstates it.

> multiplying it by 252

A daily Sharpe ratio is conventionally annualized by multiplying by the square root of 252, not by 252. Multiplication by 252 applies to annualizing an expected daily return, so the reported performance metric would be materially inflated.

**How to change it:** Replace "252" with "√252" and, if retained, make clear that this is the annualization of the daily Sharpe ratio under the appropriate dependence assumptions.

*raised by content · costs no words*

### The annualization bullet reports a calculation instead of the resulting Sharpe performance and its comparison.

> before reporting it to the desk

The calculation instruction gives the reader no usable evidence of how the signal performed. It also leaves the central metric unavailable for comparison with a benchmark or another desk result, while "before reporting it to the desk" makes the bullet sound like a reporting step rather than completed research.

**How to change it:** Replace the calculation and reporting description with "reported annualized Sharpe of [value] versus [comparison]." If no defensible result or comparison is available, remove this line and retain the underlying performance result in the stronger bullet.

*raised by content · costs about 2 words to add*

### The feature-store bullet begins with a dangling participial phrase that does not grammatically align the opening action with its subject.

> Joining 120 microstructure features

The line does not clearly assign the joining and deduplication work to the person who built the feature store. The construction also makes the reader work through several methods before reaching the result that the team reused the store in two later projects.

**How to change it:** Replace "Joining" with "Joined" and make the subsequent actions finite as well, such as "deduplicated" and "versioned," before stating that you built the feature store. Move "reused in two later projects" closer to the front of the bullet if possible.

*raised by wording · costs no words*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The bullet uses a first-person pronoun in "my proof," which does not belong in a résumé bullet.

> my proof

The pronoun makes the line read like a sentence from a personal narrative rather than a concise résumé phrase. It adds no useful ownership information because the bullet already presents the proof as part of your contribution.

**How to change it:** Replace "my proof" with "the proof."

*raised by file, wording · costs no words*

### The package bullet identifies the deliverable but not the technical work inside it.

> high-dimensional covariance estimation

For a statistical-learning role, an open-source package is stronger evidence when the reader can see what method or capability you implemented. The current wording gives an adoption signal through 3,000 downloads but leaves the technical contribution at the level of a subject area.

**How to change it:** Replace some of the secondary-duty wording with [the package's key estimator, algorithm, or user-facing capability], if accurate, and attach "downloaded 3,000 times in its first year" directly to the package.

*raised by content · costs about 4 words to add*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The reduction from 0.20 to 0.15 is 25%, not a 33% improvement.

> a 33% improvement

The absolute reduction is 0.05, and 0.05 divided by the original error of 0.20 equals 25%. Using 0.15 as the denominator produces the 33% figure, so the claim is internally inconsistent and weakens confidence in the other reported metrics.

**How to change it:** Replace "a 33% improvement" with "a 25% reduction."

*raised by content, wording · costs saves about 1 word*

### The change from 52% to 58% is 6 percentage points, not a 6% relative improvement.

> by 6%

The stated endpoints differ by six percentage points. Expressed as a relative increase, the change is approximately 11.5% of the original 52% hit rate, so "by 6%" uses the wrong unit and leaves the result ambiguous.

**How to change it:** Replace "by 6%" with "by 6 percentage points." If you intend a relative comparison instead, use approximately 11.5% and retain the original 52% denominator explicitly.

*raised by content, wording · costs about 1 word to add*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The bullet overstates what the validation-to-leaderboard comparison establishes by claiming that the fold change cut leakage.

> Cut validation leakage

A smaller local-validation-to-leaderboard gap does not prove that time-grouped folds caused the improvement. Other pipeline changes, feature leakage, distribution shift, or ordinary leaderboard variation could explain the difference, and time grouping alone does not rule out future-derived features or overlapping-label leakage.

**How to change it:** Replace the causal wording with "Switched to time-grouped folds; the local-validation-to-leaderboard gap changed by 0.02" and add [the metric, direction, and whether all other pipeline elements were held constant].

*raised by content · costs about 4 words to add*

## Across the whole résumé

### The Methods skills line misspells "econometrics."

> econometircs

The error is visible in a section recruiters often scan for keyword matches. It can make the document look careless and may prevent the correctly spelled discipline from matching a search or reader expectation.

**How to change it:** Replace "econometircs" with "econometrics."

*raised by narrative · costs no words*

## Set aside (10)

- s2:e1:b4: The line says "before reporting it to the desk" but does not state what the reporting enabled or changed.
- s2:e1:b5: The phrase "for future interns" describes the intended audience but not the effect of the research wiki. (and 1 more like it)
- s2:e2:b0, s2:e2:b1: The phrase "Built the lab’s simulation pipeline on the shared cluster" identifies the setting but not how you engineered the speedup. (and 1 more like it)
- s2:e2:b3: The phrases "maintaining the lab’s shared cluster," "organizing the weekly reading group" and "grading for two courses" state responsibilities without saying what changed because of them.
- s3:e0:b1, s3:e0:b2, s3:e1:b1, s3:e1:b2: The phrase "forecast error" does not specify what error metric was reduced from 0.20 to 0.15. (and 3 more like it)
- s2:e0:b1, s2:e2:b0, s2:e2:b1, s2:e2:b3, s2:e1:b2, s2:e1:b3, s2:e1:b4, s2:e1:b5, s3:e0:b1, s3:e0:b2, s3:e1:b0, s3:e1:b1, s3:e1:b2: Ran does not naturally describe supplier orders, so the two actions should use more precise verbs. (and 15 more like it)
- whole resume, order: Within EXPERIENCE, move Northpeak Capital and Ridgeway University research ahead of Sunrise Bakery for a quantitative target; place Sunrise last or reduce it to a single line. (and 2 more like it)
- skills: SQL is listed under Programming, but no entry describes SQL use or work that could not plausibly have been done without it. (and 3 more like it)
- s2:e2, s3:e0: The entry combines statistical research, computing infrastructure, teaching, software release, and course administration, so it reads as several roles rather than one focused research contribution. (and 1 more like it)
- s3:e1:b0: The phrase "with a gradient-boosting ensemble on 300 engineered features" describes the team approach but not your individual contribution.
