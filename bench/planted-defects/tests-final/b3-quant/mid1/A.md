> Here is my resume: bench/planted-defects/tests-final/b3-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all **4 entries with bullets** for content and wording, plus the full resume’s narrative and formatting. Education entries have no bullets to review; no job description was provided for a match review.

Changes to prioritize:
- **Correct two metric descriptions** in the volatility project: the change from 0.20 to 0.15 is a 25% reduction, not 33%; 52% to 58% is a 6-percentage-point increase, not 6%.
- **Clarify the internship’s forecast result:** specify which forecast metric improved and by how much, and revisit the claim that the Diebold–Mariano tests confirmed a gain over a nested baseline. The Sharpe annualization bullet also needs attention; the reviewer flags both its calculation and its lack of a stated outcome.
- **Make some experience bullets clearer:** specify your role in building the lab simulation pipeline, and separate the package’s download result from the other duties in that bullet. The internship review also flags an ambiguous reference in the documentation bullet.
- **Fix “econometircs”** in Skills. The narrative review also notes an unexplained eight-month gap between the B.S. and research assistant dates.

Formatting and ATS parsing were clean. The full report is available at **`/report --full`**.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 82 · wording 82 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 5 important, 6 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> May 2020; Feb 2021

**Problem**
[Polish] The listed education and work dates leave an eight-month period with no study or work shown.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] A standard Diebold–Mariano test alone does not establish a valid forecast comparison against a nested HAR-RV model.
2. [Important] “Forecast gain” does not identify the forecast metric or the size of the improvement.

**Why**
1. The usual Diebold–Mariano test does not by itself provide valid confirmation for nested-model forecast comparisons. A reader may therefore question whether the reported gain is statistically supported, which weakens the evidence for the result.
2. The baseline and test explain how the comparison was made, but a reader cannot judge the result’s size or relevance without knowing what improved and by how much. That leaves the main outcome difficult to assess.

**How to change it**
1. If you used a test or adjustment designed for nested forecasts, name it; otherwise remove or soften the confirmation claim.
2. Replace “forecast gain” with [forecast metric and improvement versus the nested HAR-RV baseline].

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] “Joining” is not the correct verb form for this completed action.
2. [Polish] The long method list delays the feature-store outcome.

**Why**
1. The sentence describes a finished internship contribution, so the opening participle does not clearly state the action. This makes the line read awkwardly before the reader reaches the feature-store result.

**How to change it**
1. Replace “Joining” with “Joined.”

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the standard annualization.
2. [Polish] The bullet foregrounds a reporting calculation without showing a meaningful result or use.

**Why**
1. Under the standard convention, annualized Sharpe scales by the square root of the number of trading days, not by the number of days. Multiplying by 252 would substantially overstate the annualized Sharpe.

**How to change it**
1. Replace “252” with “√252” under the standard convention, or specify a different annualization method if one was used.

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] “Which” makes it unclear that the documentation, rather than the wiki, supported onboarding.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks other students relied on.

**Problem**
[Important] “Owned the lab’s simulation pipeline” does not name the workflow component you acted on, and “reproducibility checks” does not show what those checks ensured or how broadly they were used.

**Why**
The line identifies areas of responsibility, but a reader cannot tell which technical part of the simulation workflow you built or maintained. Reliance on the checks suggests value, yet without an outcome or scope the reader cannot assess what they demonstrated.

**How to change it**
Replace “Owned the lab’s simulation pipeline” with an action verb and [the specific workflow step or component you built or maintained]. Clarify the checks with [the reproducibility outcome they ensured or the number of lab users who relied on them].

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The variance-bound result is not the opening line of the entry, though it is the strongest line identified by the review.

**Why**
The finding establishes that this result would land harder first. Keeping it after the simulation-pipeline bullet gives the entry’s strongest research contribution less immediate visibility.

**How to change it**
Move this variance-bound bullet before the simulation-pipeline bullet.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The package’s download result is buried after unrelated duties, making its connection to the package unclear on a quick scan.

**Why**
The download figure follows several other activities, so a reader may not immediately connect it to the package release. The cluster, reading-group, and grading duties also distract from the package’s impact.

**How to change it**
Move “which was downloaded 3,000 times in its first year” directly after “open-source R package for high-dimensional covariance estimation.” Cut or move the cluster, reading-group, and grading duties if they do not support this contribution.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] A decrease from 0.20 to 0.15 is a 25% reduction, not a 33% improvement.
2. [Important] “Forecast error” does not identify the metric represented by 0.20 and 0.15.

**Why**
1. The difference is 0.05, which is 25% of the starting error of 0.20. The stated percentage therefore overstates the result and may make a reader question the calculation.
2. Without the error metric, a reader cannot interpret or compare the before-and-after values. Naming it would make the result assessable.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [forecast-error metric].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
[Error] The change from 52% to 58% is 6 percentage points, not 6%.

**Why**
The absolute difference between the rates is six percentage points; relative to the starting 52% rate, the increase is about 11.5%. Calling it “6%” can therefore misstate the size of the result and confuse readers about which comparison is intended.

**How to change it**
Replace “by 6%” with “by 6 percentage points.”

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Polish] The 0.02 gap does not identify the competition’s scoring metric or scale.
2. [Polish] The result follows the method and is introduced by the indirect phrase “which closed.”

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled; the correct spelling is “econometrics.”

**Why**
A spelling error in the Methods skills line can distract a reader and make the skills section appear less carefully checked. It may also make the listed method harder to recognize at a glance.

**How to change it**
Replace “econometircs” with “econometrics.”

## Already working

- s2:e0:b0: Gives a clear before-and-after performance result.
- s2:e0:b1: Shows the trade-off between lower trading costs and retained returns.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-588b1365.md.

