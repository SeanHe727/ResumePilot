# Full review: resume.pdf

**88/100** — format 100 · content 82 · wording 85 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 11 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998

**Problem**
[Error] The date of birth and nationality should be removed. *(saves about 8 words)*

**Why**
These are personal details a reader is not meant to weigh when assessing the résumé. Including them adds irrelevant information and may distract from the candidate’s qualifications.

**How to change it**
Remove “Date of birth: 21 Jul 1998 | Nationality: Indian” from the résumé.

*raised by file*

> Ridgeway University | Research Assistant, Statistical Learning Lab

**Problem**
[Important] The experience entries are not in newest-first order. *(no words)*

**Why**
The 2020–2021 Ridgeway role appears above the more recent 2025 Northpeak internship. Readers expect recent experience first, so the current order makes the chronology less clear and gives older experience earlier visibility.

**How to change it**
Move the Northpeak Capital internship and its bullets above the Ridgeway University Research Assistant entry.

*raised by file, narrative*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package’s strongest result is buried after a list of separate duties. *(no words)*
2. [Important] The download count shows reach but not what the package helped users do. *(about 5 words to add)*
3. [Important] The package’s outcome is delayed until after the separate duty list. *(no words)*

**Why**
1. A reader reaches the download figure only after the cluster, reading-group, and grading duties. That makes the package’s outcome less visible on a quick scan.
2. A reader can tell that people accessed the package, but not what task or analysis it enabled. Without that context, the practical value of the contribution is hard to judge.
3. The download result is the clearest outcome attached to the package, but its position makes the reader pass through several other responsibilities first. That weakens the package’s impact on a quick scan.

**How to change it**
1. Move the download result directly after the package achievement, before the duty list; place the duties in a separate bullet.
2. Add [the main task or analysis the package enabled] if you know a concise, accurate description.
3. Move the download clause to immediately follow the package achievement, before the duty list.

*raised by wording, content*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] The usual Diebold–Mariano test is not valid for confirming a forecast gain against a nested HAR-RV baseline. *(about 3 words to add)*
2. [Important] The comparison gives neither the size of the forecast gain nor the test result. *(about 4 words to add)*

**Why**
1. The usual test does not account for the special distribution of loss differences when forecasts come from nested models. Testing across 30 indices can also require adjustments for multiple comparisons and cross-index dependence, so the reported confirmation may not support the claim as written.
2. A reader can see that the model was compared with HAR-RV, but cannot judge the size of the difference or what the tests established. That leaves the claimed gain difficult to assess.

**How to change it**
1. If used, name a test appropriate for nested forecasts and the adjustments for multiple testing and cross-index dependence; otherwise soften “Confirmed” to describe the comparison without claiming confirmation.
2. Replace “forecast gain” with [forecast-error change versus HAR-RV] and add one concise test result if it supports the comparison.

*raised by content*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] The opening participle does not grammatically connect to the main clause. *(no words)*

**Why**
“Joining” introduces an action, but the sentence then says that action “built” the feature store. This makes it unclear who performed the joining, deduplication, and versioning.

**How to change it**
Move “Built a feature store” to the start, then make the remaining actions describe how it was built.

*raised by wording*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 uses the wrong annualization factor under the usual independence assumption. *(about 4 words to add)*
2. [Important] The reporting destination does not show what impact the annualization had. *(saves about 6 words if cut)*

**Why**
1. Under that assumption, annualization multiplies a daily Sharpe ratio by the square root of the number of trading days, not the number of days itself. Serial dependence may require a different adjustment, so the calculation as stated can overstate the annualized ratio.
2. A reader can tell where the calculation was reported, but not what decision it informed or what changed as a result. The line therefore ends on process detail rather than the contribution’s relevance.

**How to change it**
1. Replace “252” with the square root of 252 under the usual independence assumption; if accounting for serial dependence, state the adjustment used.
2. Replace the phrase with [the decision it informed or outcome it changed] if accurate; otherwise cut the clause or the line.

*raised by content, wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The stated 33% improvement is arithmetically wrong: the reduction from 0.20 to 0.15 is 25%. *(no words)*
2. [Important] “Forecast error” does not identify the metric measured by the 0.20 and 0.15 values. *(about 2 words to add)*

**Why**
1. The decrease is 0.05, which is 25% of the starting error of 0.20. A 33% reduction would not produce the stated final value, so the mismatch can undermine confidence in the result.
2. Without the metric name, a reader cannot tell what those values represent or compare this change with other forecasting results. The percentage calculation is also harder to interpret without knowing the measure.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [the metric used], if accurate.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The increase from 52% to 58% is 6 percentage points, not a 6% relative increase. *(about 2 words to add)*
2. [Important] This bullet repeats the index count and model type already given in the first bullet. *(saves about 9 words)*

**Why**
1. The difference between the two hit rates is 6 percentage points; relative to the starting rate of 52%, the increase is about 11.5%. Calling it “6%” can make the size of the result seem different from what the figures show.
2. The repeated details take space without distinguishing this result from the earlier forecast comparison. That makes the hit-rate outcome less prominent.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points” to match the reported figures.
2. Cut “on 30 equity indices” and “with a temporal convolutional model” from this bullet.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 reduction in the score gap does not establish that validation leakage was cut. *(about 1 word to add)*
2. [Important] The 0.02 gap is not interpretable without the score metric and its scale. *(about 4 words to add)*
3. [Important] The result is delayed in the “which closed” clause. *(no words)*

**Why**
1. A smaller gap shows that the local validation and leaderboard scores became closer, but does not show that leakage caused the original gap or that the new folds removed it. Distribution differences or leaderboard variability could also explain the change, so the causal claim is not established.
2. A reader cannot tell what the gap measures or judge its significance from the number alone. Naming the metric would make the comparison easier to understand.
3. The 0.02-gap change is the main result, but it appears after the explanation of the fold change. A reader scanning the bullet may miss the outcome.

**How to change it**
1. If split-design and data-timing checks confirm leakage was reduced, describe those checks; otherwise say that switching to time-grouped folds reduced the score gap by 0.02, without claiming it cut leakage.
2. Add [the score metric and scale] if needed to interpret the gap.
3. Move the 0.02-gap result to the start of the bullet, before the time-grouped-fold explanation.

*raised by content, wording*

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled; the correct spelling is “econometrics.” *(no words)*

**Why**
The typo appears in the Methods skills line, where readers expect accurate terminology. It can distract from the skills being presented and weaken confidence in the résumé’s proofreading.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

## Already working

- s2:e1:b0: Clearly states the strategy result and its baseline.
- s2:e1:b1: Connects a specific intervention to multiple quantified outcomes.
- s3:e1:b0: Pairs a clear competition result with its scale.

## Set aside (7)

- s2:e0:b0: “the reproducibility checks other students relied on” does not say how many people or what work depended on the checks.
- s2:e0:b1: “Derived a variance bound for a sparse regression estimator” does not say how you derived it.
- s3:e1:b2: “without losing validation score” does not identify the score metric or its scale.
- s2:e0:b0: “Owned the lab’s simulation pipeline” frames the work as responsibility rather than naming what you did with the pipeline.
- s2:e0:b0: “other students relied on” is a broad, unmeasured claim that adds little to “reproducibility checks.”
- s2:e1:b2: “standard” is an unnecessary qualifier that does not clarify what the tests established.
- s2:e1:b5: “which the next intern cohort used to onboard in their first week” delays the outcome after the documentation details.
