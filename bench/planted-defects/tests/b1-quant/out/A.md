> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Content and wording specialists reviewed 5 entries with bullets; narrative and format reviews also ran. Education entries were not applicable. No job-description match was run because no posting was provided.

The most important changes are:

1. **Reorder Experience**
   - Put **Northpeak Capital** before **Sunrise Bakery**.
   - Consider shortening Sunrise Bakery to one line or moving it to an Additional Experience section; its current placement and length interrupt the quantitative-research narrative.

2. **Correct quantitative inconsistencies**
   - In the volatility project, **0.20 to 0.15 is a 25% reduction**, not a 33% improvement.
   - “From 52% to 58%” is a **6-percentage-point increase**, not a 6% increase.
   - In the Northpeak bullet, verify the claim that annualizing a daily Sharpe ratio involved multiplying by 252; the specialist flagged this calculation for correction.

3. **Make outcomes more specific**
   - State the size or statistical result of the Diebold–Mariano tests rather than saying you “confirmed the forecast gain.”
   - Add the actual labour-budget result for Sunrise Bakery, if available.
   - Identify the error metric in “cut forecast error from 0.20 to 0.15.”
   - Clarify what the annualized Sharpe result enabled or changed.
   - Define what the 0.02 validation gap and the project validation score measure.

4. **Separate unrelated responsibilities**
   - The Ridgeway research entry combines theoretical research, computational infrastructure, software release, teaching, cluster maintenance, reading-group organization, and grading.
   - The Northpeak entry similarly places feature-store and documentation work alongside the main research results. Separating or prioritizing these will make the main contributions easier to identify.

5. **Fix wording and resume consistency**
   - Remove the first-person phrase “my proof.”
   - Revise the Sunrise Bakery wording where “ran” is used for supplier orders.
   - Correct **“econometircs”** to **“econometrics.”**
   - Verify whether **C++** and **Kafka** belong in Skills, since the reviewed entries do not show where they were used.

The file itself parses cleanly as a one-page, 555-word resume with no layout or ATS blockers. The full combined report is available with `/report --full`.

> /report
# Review: resume.pdf

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

- **The line uses "ran" ambiguously for supplier orders and attributes the fall in unsold bread to stock counts and orders without evidence of causation.** *(about 2 words to add)*
  > Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
  Running counts and placing orders may coincide with the decrease, but changes in demand, production, pricing, promotions, seasonality, product mix, or counting practices could also explain it. The reader therefore cannot tell whether the five-percentage-point fall was caused by the stated actions or merely observed alongside them.
  **How to change it:** Replace "Ran daily stock counts and supplier orders" with separate, parallel actions such as [conducted daily stock counts] and [placed supplier orders], then state that unsold bread fell from 12% to 7%; add [comparable baseline and post-change records and controls supporting causation] before claiming the actions cut it.
- **The labour-budget result has no figure showing how closely or materially the store met its budget.** *(about 5 words to add)*
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  The team size establishes scope, but "within" the budget does not distinguish barely meeting the target from materially controlling labour costs. Without a variance or time period, the reader cannot judge the management result.
  **How to change it:** Replace the phrase with "within its weekly labour budget by [amount or percentage versus the budget]" if accurate; if no variance is available, add [the period over which this was maintained].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The claim of a forecast gain is tested with a standard Diebold-Mariano test even though the forecasts are nested, and the bullet does not report the gain or test result.** *(about 8 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  A standard Diebold-Mariano test is not generally valid for nested forecasts because parameter estimation changes the null distribution. Testing 30 indices also requires suitable treatment of cross-index dependence and multiple comparisons; without the result and its magnitude, the reader cannot assess whether the improvement is practically or statistically meaningful.
  **How to change it:** Replace the test description with a nested-model-appropriate comparison, such as a Clark-West adjustment or suitable bootstrap, and add [the forecast metric improvement], [the test result or significance outcome], and [an appropriate dependence and/or multiple-comparisons correction across 30 indices], if used.
- **The feature-store bullet delays its main result behind an awkward chain of participles and process details.** *(no words)*
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  Starting with "Joining" makes the work sound like an ongoing duty rather than a completed deliverable. The joining, deduplicating, and versioning steps also make a scanning reader work to find the reusable feature store and its adoption in two later projects.
  **How to change it:** Start with the past-tense action "Built," move the feature-store result and reuse in two later projects earlier, and retain the joining, deduplication, and schema-versioning details afterward as supporting method.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The research-assistant entry combines several unrelated responsibilities, and its strongest theoretical and software results are buried in task-inventory wording.** *(saves about 8 words)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  A reader has to parse infrastructure, teaching, package development, cluster maintenance, reading-group organization, and grading before seeing the main research contributions. In the package bullet, the 3,000-download result is separated from the package it measures and is expressed through a passive relative clause, so the clearest evidence of impact is easy to miss.
  **How to change it:** Lead the entry with the theoretical result and computational pipeline, move "which was downloaded 3,000 times in its first year" immediately after "R package" in active wording, and separate or cut the cluster, reading-group, and grading duties if they are not central.
- **The phrase "tightens the previous bound by a log factor" does not give the precise improvement, and the entry's publication context follows the result too closely.** *(about 3 words to add)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  A specialist can see that the proof improves prior work but cannot judge the size of the improvement from a generic logarithmic description. The first-person phrasing also breaks the resume's otherwise consistent style, while placing the paper status after the result makes the contribution less direct.
  **How to change it:** Replace "my proof" with a resume-style phrase, replace "by a log factor" with [the exact old and new bounds or precise logarithmic improvement], and move the Section 3 and JASA-under-review detail after the quantified contribution.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The line describes the increase from 52% to 58% as a 6% improvement instead of a 6-percentage-point increase.** *(about 2 words to add)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The hit rate rises by six percentage points, while its relative increase from the original 52% is approximately 11.5%. The current wording is numerically inconsistent and can make the result look less precise to a quantitative reader.
  **How to change it:** Replace "by 6%" with "by 6 percentage points" and remove the repeated "with a temporal convolutional model" if the preceding bullet already establishes that method.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The competition bullets attribute the closed validation-to-leaderboard gap to reduced leakage without proving that cause, and they omit the metrics and comparison baseline needed to interpret the changes.** *(about 6 words to add)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  A smaller gap after switching folds could also reflect changed sample composition, sampling variation, leaderboard noise, or closer alignment with the private-test regime. The reader also cannot judge a 0.02 difference without the score metric and scale, or tell what performance was preserved after reducing 900 features to 300.
  **How to change it:** Change "Cut validation leakage" to the supported result, such as switching to time-grouped folds and eliminating the gap; add [the evaluation metric and score scale], and replace "without losing validation score" with "without losing [metric] score versus all 900 features" if accurate. Verify that leakage reduction, rather than other changes or sampling effects, caused the improvement before retaining that attribution.
- **The phrase "300 engineered features" does not show what feature-engineering skill produced the competition result.** *(about 1 word to add)*
  > Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.
  The model and rank are clear, but a recruiter cannot tell whether the team used domain transformations, temporal features, or another meaningful technique. The feature count alone therefore undersells the technical contribution.
  **How to change it:** Replace "300 engineered features" with "300 [most distinctive engineered feature type]" if one feature-engineering choice best represents the work; otherwise retain the compact wording.

## Across the whole résumé

- **The Methods skills list misspells "econometrics."** *(no words)*
  > econometircs
  A spelling error in a named technical field can make the skills list look less careful and may hinder keyword matching for quantitative roles. The correction is straightforward and does not change the claimed skill.
  **How to change it:** Replace "econometircs" with "econometrics."

## Set aside (11)

11 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-58b6444f.md.

