# Full review: resume.pdf

**88/100** — format 100 · content 82 · narrative 72

Read 4 of 4 entries for content, 0 for wording. Career reading done, posting comparison no-posting.

6 errors, 8 important, 4 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “Date of birth: 21 Jul 1998 | Nationality: Indian”

**Problem**
[Error] The résumé includes date of birth and nationality, personal details that are left off by convention. *(saves about 8 words)*

**Why**
These details are not meant to be weighed by a reader assessing the candidate’s qualifications. Including them uses space without strengthening the case for the role.

**How to change it**
Remove the date of birth and nationality.

*raised by file*

> “Ridgeway University | Research Assistant”

**Problem**
[Important] Experience is not newest-first: the older Ridgeway role appears above the more recent Northpeak internship. *(no words)*

**Why**
A reader encounters the older role before the more recent internship, making the experience chronology harder to follow. The internship is also more directly relevant to the apparent direction of the résumé.

**How to change it**
Move the Northpeak Capital entry above the Ridgeway University entry within EXPERIENCE.

*raised by file, narrative*

> “EDUCATION”

**Problem**
[Important] EXPERIENCE should appear above EDUCATION so the recent quantitative research internship is the first substantive section. *(no words)*

**Why**
A reader currently reaches education before the recent internship. Moving experience first brings the most relevant recent work forward.

**How to change it**
Move the EXPERIENCE section above EDUCATION.

*raised by narrative*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks other students relied on.

**Problem**
[Important] The opening bullet claims ownership of the pipeline and checks without showing what changed or what improved. *(about 10 words)*

**Why**
A reader can see that other students relied on the checks, but not what became more reliable or efficient as a result. The cluster gives context, but without a concrete pipeline or validation task, the technical work behind the ownership claim is hard to assess.

**How to change it**
Replace the broad ownership wording with [specific pipeline or validation step you implemented], and replace the reliance claim with [change in reproducibility or failed runs, compared with before the checks].

*raised by content*

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The research result and package work are stronger opening material than the current operations-focused opening. *(no words)*
2. “By a log factor” does not state the exact logarithmic term or the conditions for the comparison. *(about 6 words)*

**Why**
1. The entry mixes research, lab operations, teaching, and an open-source release, so the current opening does not establish the clearest research arc. The publication-linked bound and the package work give a reader stronger evidence of that arc, and the bound would land harder first.
2. Without the term and conditions, a reader cannot assess the scope or strength of the comparison with the previous bound. The result is difficult to evaluate precisely without those details.

**How to change it**
1. Move the variance-bound bullet above the current opening, then place the package result immediately after it and leave the operations and teaching bullets later.
2. Replace “by a log factor” with [exact logarithmic term] and add [conditions for the comparison]; if you cannot specify them, soften the comparison.

*raised by narrative, content*

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Polish] The teaching rating is given without its source or response count. *(about 4 words)*

**Why**
A reader cannot tell whether the 4.8/5 reflects broad student feedback or a small number of responses. Without its basis, the figure is harder to assess.

**How to change it**
Add [the number of student responses or the rating source] after the rating.

*raised by content*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Polish] The package download result is delayed by the cluster, reading-group, and grading duties. *(saves about 13 words)*

**Why**
The downloads are the clearest evidence of the package’s reach, but the intervening duties make that result less immediate on a scan. A reader has to pass several unrelated responsibilities before reaching the outcome.

**How to change it**
Move the download clause directly after “high-dimensional covariance estimation” and cut the intervening duties from this line.

*raised by content*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold-Mariano tests do not generally provide valid inference for forecasts from estimated nested models such as the HAR-RV baseline. *(about 4 words)*
2. [Important] “The forecast gain” does not identify the metric or the size of the improvement over the baseline. *(about 6 words)*

**Why**
1. Under common estimation schemes, the usual DM reference distribution can be invalid for nested forecasts. Because the line does not specify a setup that makes the inference valid, the tests as described do not establish the forecast gain.
2. A reader can see that the result was tested but cannot judge the size of the gain those tests supported. Without the metric and measured difference, the line offers little basis for assessing the result.

**How to change it**
1. If used, name a nested-model-appropriate test or adjustment and ensure its assumptions fit the evaluation design; otherwise remove or soften “Confirmed.”
2. Replace “the forecast gain” with [forecast metric and measured improvement versus the nested HAR-RV baseline].

*raised by content*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the standard way to annualize it. *(no words)*
2. [Important] The line gives no annualized Sharpe value or comparison for the result reported to the desk. *(about 6 words)*

**Why**
1. Under the usual iid-return approximation, the daily Sharpe is multiplied by the square root of 252, not 252. The stated operation therefore misstates the annualized ratio.
2. Without the reported result, a reader cannot tell what the calculation contributed to the desk’s understanding or decision-making. The reporting claim has no stated outcome to assess.

**How to change it**
1. Replace 252 with √252; if returns are serially dependent, use a dependence-aware adjustment.
2. If this reporting is important to retain, add [reported annualized Sharpe value and relevant reference or comparison].

*raised by content*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is 25%, not a 33% improvement. *(no words)*
2. [Important] “Forecast error” does not identify the metric or the setup for the before-and-after values. *(about 4 words)*
3. [Polish] The line does not identify which model received the realized-volatility features and asymmetric loss. *(about 2 words)*

**Why**
1. The reduction is 0.05, which is 25% of the original error of 0.20. A 33% reduction would require a new error of about 0.133.
2. Readers cannot interpret the scale of 0.20 to 0.15 without knowing the metric. They also need to know what setup produced each value to understand what changed.
3. A reader can see the interventions but not the model context in which they were applied. Naming the model would make the technical contribution easier to picture.

**How to change it**
1. Change “33%” to “25%,” or verify the underlying error figures.
2. Replace “forecast error” with [error metric] and clarify the comparison as [comparison setup].
3. Add [model] after “by adding,” if the model is not already clear from the surrounding entry.

*raised by content*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change from 52% to 58% is a 6-percentage-point increase, not an improvement by 6%. *(about 1 word)*
2. [Important] The line does not identify the model, baseline, or setup represented by the two hit rates. *(about 4 words)*

**Why**
1. The relative increase from 52% to 58% is about 11.5%, not 6%. The stated 6 is the difference between the rates in percentage points.
2. The values show a change, but the reader cannot tell what produced the starting rate or what it was compared against. Naming the comparison would make the result interpretable.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points.”
2. Clarify what the rates represent with [comparison model or setup], if accurate.

*raised by content*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Polish] The 0.02 gap between local validation and leaderboard scores does not identify the score metric or its scale. *(about 3 words)*

**Why**
A reader cannot judge whether a 0.02 difference is substantial or minor without knowing what was scored. Naming the metric makes the comparison interpretable.

**How to change it**
Replace “a 0.02 gap” with “a [score metric] gap of 0.02 [scale, if needed].”

*raised by content*

## Skills

> “econometircs”

**Problem**
[Error] “Econometircs” is misspelled; it should be “econometrics.” *(no words)*

**Why**
The typo can distract a reader and undermine confidence in the care taken with the résumé. Correcting it preserves the intended methods skill without changing the claim.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

## Already working

- s2:e1:b0: Clear before-and-after result tied to the desk book.
- s2:e1:b1: Shows both a cost-related improvement and the return tradeoff.
- s3:e1:b0: Gives a concrete, comparable competition outcome.

## Set aside (1)

- s2:e0:b1: “tightens the previous bound by a log factor” does not identify the exact logarithmic term or the conditions for the comparison.
