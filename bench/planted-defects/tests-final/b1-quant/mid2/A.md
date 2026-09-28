> Here is my resume: bench/planted-defects/tests-final/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the resume’s narrative and formatting. Education entries had no bullets to review. No job description was provided, so I couldn’t assess role match.

The main changes to address:
- **Correct and clarify the project metrics:** the forecasting error change from 0.20 to 0.15 is a 25% reduction, not a 33% improvement; 52% to 58% is a 6-percentage-point increase. Name the forecast-error metric, too.
- **Recheck the internship’s statistical claims:** the reviewer flagged the Diebold–Mariano test claim against a nested baseline and the method used to annualize the daily Sharpe ratio. Clarify the evidence and report the resulting metrics.
- **Reorder and tighten:** put Experience before Education, consider shortening or moving the bakery role, and correct “econometircs” in Skills to “econometrics.”

The format check found that the one-page file parses cleanly. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**89/100** — format 100 · content 85 · wording 86 · narrative 73

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 7 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Ridgeway University | Ph.D. candidate in Statistics

**Problem**
[Important] Education appears before the quantitative research experience, and the bakery role is not shortened or placed after the relevant experience.

**Why**
Readers encounter education before the research work that is most relevant to a quantitative role. The bakery entry also takes space before that experience, which can weaken the first impression.

**How to change it**
Move Experience ahead of Education. Shorten the bakery role to a line or cut it; if retained, place it after the relevant experience.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The budget claim gives no figure for how actual labour costs compared with the approved budget.

**Why**
A reader can see that the store met its budget, but not the size or consistency of that result. Without a variance or spend figure, the claim is harder to assess.

**How to change it**
Replace “within its weekly labour budget” with [weekly labour spend or variance] measured against the approved budget, if available.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Ordinary Diebold–Mariano tests do not validly confirm a gain over a nested forecast baseline.
2. [Important] “The forecast gain” does not identify the forecast metric or the size of the improvement.

**Why**
1. For nested models, the ordinary DM reference distribution can be invalid under the null that the larger model’s extra parameters add no predictive value. Testing across 30 indices does not correct that problem, so the stated confirmation may not support the claim.
2. The baseline and test identify how the comparison was made, but not what changed or by how much. Without those details, a reader cannot judge whether the gain is meaningful.

**How to change it**
1. If the comparison used squared-error loss, name an appropriate nested-model procedure such as a Clark–West test and say how inference across the 30 indices was handled; otherwise soften the claim.
2. Replace “the forecast gain” with [forecast metric and measured improvement versus the baseline], keeping the test as supporting validation.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] The feature-store result is buried after implementation details, and “Joining … built” does not clearly connect the work to the main action.

**Why**
The opening construction makes it unclear how the feature work led to the store. The reusable result is the clearest contribution, but readers reach it only after several technical details.

**How to change it**
Move “built a feature store the team reused in two later projects” to the start, then recast the implementation detail to begin with “Joined” or another clear action verb.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the usual annualization method.
2. [Polish] The bullet gives no resulting annualized Sharpe value.
3. [Polish] The bullet says the result was reported but not what changed because of it.
4. [Polish] The method and reporting phrase is longer than needed.

**Why**
1. Under the usual independent daily-return assumption, the annualization factor for Sharpe is the square root of 252, not 252. Multiplying by 252 annualizes the mean, not the risk-adjusted ratio.

**How to change it**
1. Replace “252” with “√252” under the usual independent-return assumption; if daily returns are serially dependent, use an appropriate dependence-adjusted annualization instead.

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] The onboarding result is buried in a long trailing clause.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Polish] The variance-bound result does not say what the tighter bound enables or changes.
2. [Polish] The phrase “my proof” uses a first-person pronoun in a résumé bullet.

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Important] The teaching rating has no stated source.

**Why**
Without its source, a reader cannot tell what the score measures or how to interpret it. Naming the source would make the rating easier to assess.

**How to change it**
After “teaching rating,” add [student evaluations] if that is the source; add a response count only if readily available.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package’s purpose is named, but its method or technical capability is not.
2. [Polish] The download count shows reach but not what the package enabled users to do.
3. [Polish] The download result is buried after unrelated duties, and “which was downloaded” has an unclear antecedent.

**Why**
1. A reader sees the application area but gets little evidence of the technical skill involved. One distinctive method or capability would make the package contribution easier to evaluate.

**How to change it**
1. After the package’s purpose, add [one key algorithm, method, or technical feature], if accurate; omit routine implementation details.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The change from 0.20 to 0.15 is a 25% reduction, not a 33% improvement.
2. [Important] “Forecast error” does not identify the metric measured by the values 0.20 and 0.15.

**Why**
1. The decrease is 0.05, which is 25% of the original 0.20. The stated 33% figure does not follow from the values, so it undermines confidence in the result.
2. A reader cannot tell what kind of error was measured, which makes the numerical result harder to interpret or compare. Naming the metric would clarify what the reduction represents.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [the metric name, such as RMSE or MAE, if accurate].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change from 52% to 58% is 6 percentage points, not a 6% relative increase.
2. [Polish] “With a temporal convolutional model” repeats the method already given in the first bullet.

**Why**
1. The stated rates differ by 6 percentage points; relative to 52%, the increase is about 11.5%. Calling it “6%” can therefore mislead readers about the size of the change.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points.”

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Polish] The 41st-place ranking and “top 2%” statement communicate nearly the same result.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 gap does not name the score metric.

**Why**
Without the metric, a reader cannot tell what the 0.02 measures or judge its significance. Naming it makes the comparison interpretable without a lengthy explanation.

**How to change it**
Replace “scores” with [the metric name], if accurate.

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Polish] “Without losing validation score” is a wordy way to say the score was maintained.

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled in the Methods skills line.

**Why**
The spelling error is visible in a skills term a reader may scan for quickly. It can distract from the candidate’s quantitative qualifications.

**How to change it**
Replace “econometircs” with “econometrics.”

## Already working

- s2:e1:b0: Leads with a concrete performance change and enough context to interpret it.
- s2:e1:b1: Shows a trade-off clearly: lower turnover and slippage with 90% of gross returns retained.
- s3:e0:b0: Connects a quantified outcome to a named baseline and an out-of-sample evaluation.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-a2153438.md.

