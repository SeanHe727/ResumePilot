# Full review: resume.pdf

**87/100** — format 100 · content 82 · wording 86 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The line incorrectly annualizes a daily Sharpe ratio by multiplying it by 252 and gives neither the resulting value nor what the report supported.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is annualized with the square root of 252, so multiplying by 252 overstates the reported risk-adjusted performance. The bullet therefore foregrounds an incorrect calculation while leaving the reader unable to judge the signal's actual result or its effect on the desk.
   **How to change it:** Replace "252" with "the square root of 252," cut "before reporting it to the desk," and add [the resulting annualized Sharpe] compared with [a desk, benchmark, or prior value] plus [the decision or conclusion it supported], if available.
2. **The line incorrectly calls the reduction from 0.20 to 0.15 a 33% improvement and does not identify the forecast-error metric.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The reduction is 0.05, which is 25% of the original 0.20; 33.3% results from dividing by the final value, 0.15. Without the metric name, a technical reader also cannot tell whether the values are RMSE, MAE, QLIKE, or another measure, making the result difficult to compare.
   **How to change it:** Replace "a 33% improvement" with "a 25% reduction" and replace "forecast error" with [RMSE, MAE, or another metric if accurate]; identify [the comparison model] if 0.20 is a baseline value.

## Already working

- s2:e1:b0: Combines a concrete performance result with an out-of-sample, after-cost evaluation.
- s2:e1:b1: Uses multiple linked before-and-after measures to show the trade-off between cost reduction and return retention.
- s3:e0:b0: Combines a named baseline, evaluation metric, relative result, and out-of-sample context.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

### The line uses "ran" ambiguously for supplier orders and attributes the fall in unsold bread to stock counts and orders without evidence of causation.

> cutting unsold bread from 12% to 7%

Running counts and placing orders may coincide with the decrease, but changes in demand, production, pricing, promotions, seasonality, product mix, or counting practices could also explain it. The reader therefore cannot tell whether the five-percentage-point fall was caused by the stated actions or merely observed alongside them.

**How to change it:** Replace "Ran daily stock counts and supplier orders" with separate, parallel actions such as [conducted daily stock counts] and [placed supplier orders], then state that unsold bread fell from 12% to 7%; add [comparable baseline and post-change records and controls supporting causation] before claiming the actions cut it.

*raised by content, wording · costs about 2 words to add*

### The labour-budget result has no figure showing how closely or materially the store met its budget.

> within its weekly labour budget

The team size establishes scope, but "within" the budget does not distinguish barely meeting the target from materially controlling labour costs. Without a variance or time period, the reader cannot judge the management result.

**How to change it:** Replace the phrase with "within its weekly labour budget by [amount or percentage versus the budget]" if accurate; if no variance is available, add [the period over which this was maintained].

*raised by content · costs about 5 words to add*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The line incorrectly annualizes a daily Sharpe ratio by multiplying it by 252 and gives neither the resulting value nor what the report supported.

> multiplying it by 252

A daily Sharpe ratio is annualized with the square root of 252, so multiplying by 252 overstates the reported risk-adjusted performance. The bullet therefore foregrounds an incorrect calculation while leaving the reader unable to judge the signal's actual result or its effect on the desk.

**How to change it:** Replace "252" with "the square root of 252," cut "before reporting it to the desk," and add [the resulting annualized Sharpe] compared with [a desk, benchmark, or prior value] plus [the decision or conclusion it supported], if available.

*raised by content, narrative · costs about 5 words to add*

### The claim of a forecast gain is tested with a standard Diebold-Mariano test even though the forecasts are nested, and the bullet does not report the gain or test result.

> standard Diebold-Mariano tests

A standard Diebold-Mariano test is not generally valid for nested forecasts because parameter estimation changes the null distribution. Testing 30 indices also requires suitable treatment of cross-index dependence and multiple comparisons; without the result and its magnitude, the reader cannot assess whether the improvement is practically or statistically meaningful.

**How to change it:** Replace the test description with a nested-model-appropriate comparison, such as a Clark-West adjustment or suitable bootstrap, and add [the forecast metric improvement], [the test result or significance outcome], and [an appropriate dependence and/or multiple-comparisons correction across 30 indices], if used.

*raised by content · costs about 8 words to add*

### The feature-store bullet delays its main result behind an awkward chain of participles and process details.

> Joining 120 microstructure features

Starting with "Joining" makes the work sound like an ongoing duty rather than a completed deliverable. The joining, deduplicating, and versioning steps also make a scanning reader work to find the reusable feature store and its adoption in two later projects.

**How to change it:** Start with the past-tense action "Built," move the feature-store result and reuse in two later projects earlier, and retain the joining, deduplication, and schema-versioning details afterward as supporting method.

*raised by wording · costs no words*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The research-assistant entry combines several unrelated responsibilities, and its strongest theoretical and software results are buried in task-inventory wording.

> while maintaining the lab’s shared cluster

A reader has to parse infrastructure, teaching, package development, cluster maintenance, reading-group organization, and grading before seeing the main research contributions. In the package bullet, the 3,000-download result is separated from the package it measures and is expressed through a passive relative clause, so the clearest evidence of impact is easy to miss.

**How to change it:** Lead the entry with the theoretical result and computational pipeline, move "which was downloaded 3,000 times in its first year" immediately after "R package" in active wording, and separate or cut the cluster, reading-group, and grading duties if they are not central.

*raised by narrative, content, wording · costs saves about 8 words*

### The phrase "tightens the previous bound by a log factor" does not give the precise improvement, and the entry's publication context follows the result too closely.

> my proof tightens the previous bound by a log factor

A specialist can see that the proof improves prior work but cannot judge the size of the improvement from a generic logarithmic description. The first-person phrasing also breaks the resume's otherwise consistent style, while placing the paper status after the result makes the contribution less direct.

**How to change it:** Replace "my proof" with a resume-style phrase, replace "by a log factor" with [the exact old and new bounds or precise logarithmic improvement], and move the Section 3 and JASA-under-review detail after the quantified contribution.

*raised by content, wording · costs about 3 words to add*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The line incorrectly calls the reduction from 0.20 to 0.15 a 33% improvement and does not identify the forecast-error metric.

> a 33% improvement

The reduction is 0.05, which is 25% of the original 0.20; 33.3% results from dividing by the final value, 0.15. Without the metric name, a technical reader also cannot tell whether the values are RMSE, MAE, QLIKE, or another measure, making the result difficult to compare.

**How to change it:** Replace "a 33% improvement" with "a 25% reduction" and replace "forecast error" with [RMSE, MAE, or another metric if accurate]; identify [the comparison model] if 0.20 is a baseline value.

*raised by content, wording, narrative · costs about 2 words to add*

### The line describes the increase from 52% to 58% as a 6% improvement instead of a 6-percentage-point increase.

> by 6%

The hit rate rises by six percentage points, while its relative increase from the original 52% is approximately 11.5%. The current wording is numerically inconsistent and can make the result look less precise to a quantitative reader.

**How to change it:** Replace "by 6%" with "by 6 percentage points" and remove the repeated "with a temporal convolutional model" if the preceding bullet already establishes that method.

*raised by content, wording · costs about 2 words to add*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The competition bullets attribute the closed validation-to-leaderboard gap to reduced leakage without proving that cause, and they omit the metrics and comparison baseline needed to interpret the changes.

> closed a 0.02 gap

A smaller gap after switching folds could also reflect changed sample composition, sampling variation, leaderboard noise, or closer alignment with the private-test regime. The reader also cannot judge a 0.02 difference without the score metric and scale, or tell what performance was preserved after reducing 900 features to 300.

**How to change it:** Change "Cut validation leakage" to the supported result, such as switching to time-grouped folds and eliminating the gap; add [the evaluation metric and score scale], and replace "without losing validation score" with "without losing [metric] score versus all 900 features" if accurate. Verify that leakage reduction, rather than other changes or sampling effects, caused the improvement before retaining that attribution.

*raised by content · costs about 6 words to add*

### The phrase "300 engineered features" does not show what feature-engineering skill produced the competition result.

> 300 engineered features

The model and rank are clear, but a recruiter cannot tell whether the team used domain transformations, temporal features, or another meaningful technique. The feature count alone therefore undersells the technical contribution.

**How to change it:** Replace "300 engineered features" with "300 [most distinctive engineered feature type]" if one feature-engineering choice best represents the work; otherwise retain the compact wording.

*raised by content · costs about 1 word to add*

## Across the whole résumé

### The Methods skills list misspells "econometrics."

> econometircs

A spelling error in a named technical field can make the skills list look less careful and may hinder keyword matching for quantitative roles. The correction is straightforward and does not change the claimed skill.

**How to change it:** Replace "econometircs" with "econometrics."

*raised by narrative · costs no words*

## Set aside (11)

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e1:b5: The phrase "for future interns" describes an intended audience rather than what changed because of the documentation. (and 1 more like it)
- s2:e2:b2: "earning a 4.8/5 teaching rating" shows positive evaluation but does not identify whether it reflects the recitations or the broader course.
- s3:e0:b2, s3:e1:b2: The repeated temporal-convolutional-model phrase adds method detail already stated in the preceding bullet without clarifying a distinct action. (and 1 more like it)
- s2:e2:b0: "making runs reproducible by seed" is compressed and could mean either assigning seeds or reproducing results using fixed seeds.
- s2:e2:b1: "is now Section 3 of a paper under review at JASA" buries the result after publication context and makes the sentence less direct.
- s2:e1:b2: The phrase standard Diebold-Mariano tests adds little because the named test already identifies the method. (and 1 more like it)
- s2:e1:b4: The phrase 'by multiplying it by 252' explains the calculation instead of stating the reporting action concisely. (and 1 more like it)
- s3:e1:b1: The phrase “which closed a 0.02 gap” makes the relationship between the fold change and the score difference slightly indirect.
- whole resume, order: Move Northpeak Capital ahead of Sunrise Bakery so the quantitative research trajectory leads the Experience section rather than the unrelated current job. (and 1 more like it)
- skills: C++ is listed under Programming, but no entry shows C++ being used or describes work that could not plausibly have been done without it. (and 1 more like it)
