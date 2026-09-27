> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the complete resume.

**Coverage**
- Format/ATS review: completed
- Content review: all 5 entries with bullets
- Wording review: all 5 entries with bullets
- Narrative review: completed
- Education entry: not applicable because it has no bullets
- Job-description match: not run because no posting was provided

The full report is available in `/report --full`.

### Changes to prioritize

1. **Make the career direction clearer**
   - The current Sunrise Bakery role appears first and dominates the page, while the rest of the resume points toward quantitative research.
   - Move it into an **Additional Experience** section, place it after the quantitative experience/projects, or compress it.
   - Correct the tense of its bullets because the role is current.

2. **Clarify quantitative claims**
   - Define what the “0.4 Sharpe” increase is relative to and whether it means absolute Sharpe points.
   - Specify what “90% of gross returns” refers to.
   - Add the measured improvement from the Diebold–Mariano tests.
   - Clarify the metric behind the 0.02 validation/leaderboard gap.
   - State what “forecast error” measures in the volatility project.
   - Distinguish percentage-point changes from relative percentage changes.

3. **Correct the volatility-project arithmetic and tense**
   - The change from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement.
   - The change from 52% to 58% is a **6-percentage-point increase**, not simply a 6% increase.
   - The project is ongoing, so its bullets should use consistent present tense.

4. **Remove or fix the Sharpe annualization bullet**
   - The content specialist identified the statement that annualizes daily Sharpe by multiplying by 252 as technically incorrect.
   - It also describes a reporting step without showing what the reporting changed.

5. **Reduce overloaded bullets**
   - The research-assistantship bullet combines the R package, cluster maintenance, reading group, and grading.
   - Separate the package result from unrelated responsibilities or remove the lower-priority duties.
   - Put the package’s download result directly next to the package contribution.

6. **Improve research narrative and ordering**
   - The quantitative internship bullets should progress from signal result, to implementation, to validation, rather than including the annualization line as a separate process step.
   - The volatility project currently repeats closely related performance claims; make the method, primary result, and secondary evaluation distinct.

7. **Clean up resume-wide details**
   - Remove the first-person pronoun in the research-assistantship bullet.
   - Correct “econometircs” to “econometrics.”
   - The format is ATS-readable and fits on one page, so the main work is content precision and career positioning rather than layout.

> /report
# Review: resume.pdf

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

- **The labour-budget claim gives no measurable size for the cost result.** *(about 5 words to add)*
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  A reader cannot tell whether staying within budget meant barely meeting the target, consistently underspending, or simply following an existing schedule. The six-person team shows scope, but the budget outcome needs a concrete comparison to demonstrate management impact.
  **How to change it:** Replace the general phrase with the actual weekly budget amount or variance: [the weekly labour-budget amount or variance you maintained].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The headline trading result does not define what the 0.4 Sharpe increase is compared with.** *(about 8 words to add)*
  > Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
  A quantitative reader cannot tell whether 0.4 means an absolute Sharpe-point increase, a relative change, or another unit, nor which book or benchmark is on the other side of the comparison. Without that anchor, the result cannot be judged as evidence that the desk’s book improved.
  **How to change it:** Replace the unanchored phrase with the exact comparison and unit: [baseline book Sharpe and whether the result is an absolute Sharpe-point increase].
- **The turnover result does not identify whose gross returns were retained or how that figure relates to slippage.** *(about 8 words to add)*
  > Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.
  A reader cannot tell whether 90% refers to the original unsmoothed signal’s gross returns, another backtest, or net returns. That ambiguity makes it difficult to weigh the trade-off between lower turnover, retained performance, and the reported slippage reduction.
  **How to change it:** Specify that the figure is [the percentage of the original unsmoothed signal’s gross returns retained], and keep the gross-versus-net distinction explicit alongside the slippage result.
- **The Diebold-Mariano result states that a forecast gain was confirmed but gives no measured outcome.** *(about 6 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  A reader cannot tell what forecast improvement the tests found or whether the result was statistically meaningful across the 30 indices. “Standard” does not substitute for the test outcome, so the validation claim carries less evidentiary weight than the rest of the research bullets.
  **How to change it:** Replace the generic confirmation with the most useful result: [forecast loss difference or test significance result across the 30 indices], and omit “standard.”
- **The documentation bullet identifies the audience but not what the documentation enabled.** *(about 6 words to add)*
  > Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.
  “For future interns” describes intended readership, while documenting assumptions and failure regimes is an activity rather than an outcome. A reader still cannot tell whether the wiki was used, reused, or changed later research practice.
  **How to change it:** Delete “for future interns” and replace the endpoint with [the research decision, reuse, or workflow improvement enabled by the documentation], if available.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The theoretical improvement is described only as tightening a bound by a log factor, without naming the old and new terms.** *(about 6 words to add)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  A statistics reader cannot judge the size or significance of the improvement from that phrase alone. The claim may be technically valid, but the comparison is not reproducible enough to carry much evidentiary weight.
  **How to change it:** Replace the generic phrase with [the exact logarithmic-term comparison in the previous and new bounds].
- **The teaching bullet gives a positive rating but no measured student or course outcome.** *(about 6 words to add)*
  > Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.
  A 4.8/5 rating shows that students evaluated the teaching positively, but it does not establish learning or instructional effectiveness. A hiring reader can see responsibility and reception, but not what the 60 students or course achieved.
  **How to change it:** Keep the rating as supporting evidence and add [the single strongest measured student or course outcome], or replace the rating with that outcome if it is more meaningful.
- **The package result is buried in an overloaded bullet that combines unrelated duties and does not show adoption beyond downloads.** *(saves about 10 words and adds about 5 words)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  The reader must work through cluster maintenance, reading-group organization, and grading before reaching the package outcome, and the ambiguous “which” can attach the downloads to any of those activities. Downloads show reach but not unique users, sustained use, or downstream adoption, while the other duties have no outcomes.
  **How to change it:** Remove or separate the cluster, reading-group, and grading duties, move “downloaded 3,000 times in its first year” immediately after “released an open-source R package,” and add [unique users, dependent projects, citations, or documented use] if available.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The three bullets repeat model-performance claims without a clear progression from method to primary result to secondary evaluation.** *(saves about 10 words)*
  > temporal convolutional model
  The QLIKE result and forecast-error result both present improvements for the same volatility study, while the directional hit-rate result again describes the temporal-convolutional model across the same 30 indices. The repetition makes the project look less structured and weakens the distinction between its primary and secondary evaluation metrics.
  **How to change it:** Combine the overlapping QLIKE and forecast-error claims or clearly label one as the primary out-of-sample result and the other as a secondary metric; retain the directional result only as a separately defined evaluation.
- **The 7% QLIKE improvement does not state how the 30-index result was aggregated.** *(about 8 words to add)*
  > Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.
  QLIKE performance can differ substantially depending on whether observations or indices are weighted equally. Without the aggregation convention, a technical reader cannot reproduce or fully interpret the reported comparison.
  **How to change it:** Add the aggregation convention immediately after the figure: [state whether the 7% is a relative reduction in pooled QLIKE or in the equal-weighted average across the 30 indices].

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The competition bullets do not anchor their validation results to named metrics, before-and-after scores, or leakage-safe feature-importance evaluation.** *(about 20 words to add)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  A reader cannot tell what metric the 0.02 gap measures, what the local and leaderboard scores were before and after time-grouped folds, or whether “without losing validation score” means exactly unchanged or merely not materially worse. The feature-selection claim also leaves unclear whether permutation importance was computed within folds or on untouched data, so the predictive result and leakage control cannot be independently judged.
  **How to change it:** Name [the competition metric] and give [the before and after local-versus-leaderboard values]; replace “without losing validation score” with [the metric and score before and after trimming, or the validated change], and state that permutation importance was computed [within each training fold or on untouched data].

## Across the whole résumé

- **Sunrise Bakery should not appear as the first and only current role in a résumé aimed at quantitative work.** *(no words)*
  > Sunrise Bakery | Assistant Store Manager
  Its current position makes an unrelated store-management job dominate the career story, even though the strongest evidence points to quantitative research, statistics, and machine learning. A recruiter may therefore misread the candidate’s direction before reaching the more relevant experience.
  **How to change it:** Move Sunrise Bakery into an “Additional Experience” section after quantitative experience and projects, or compress it to one line.
- **The Skills section misspells “econometrics.”** *(no words)*
  > econometircs
  The error is immediately visible in a technical skills list and can make the document appear less carefully reviewed. It also risks weakening keyword matching for a relevant quantitative discipline.
  **How to change it:** Replace “econometircs” with “econometrics.”

## Set aside (11)

Worth knowing, and not worth the space on this page:

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
- …and 1 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-d0c71736.md.

