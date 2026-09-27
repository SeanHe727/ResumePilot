> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Format/ATS:** format check completed. It is one page, extracts cleanly, and has no layout or parsing blockers.
- **Content:** all 5 experience/project entries reviewed.
- **Wording:** all 5 experience/project entries reviewed.
- **Narrative:** full-resume review completed.
- **Job-match review:** not run because no job description was provided.
- **Education:** not reviewed for bullet content because both entries contain only degree/date information.

### Changes to prioritize

1. **Correct the Sharpe-ratio annualization line.**  
   The resume currently says daily Sharpe was multiplied by 252. The content and wording reviews both flag this as technically incorrect; the conventional conversion uses the square root of 252.

2. **Correct the forecasting percentages.**
   - Reducing forecast error from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement.
   - Moving directional hit rate from 52% to 58% is a **6-percentage-point increase**, not simply “6%.”

3. **Clarify comparison baselines and measurement definitions.**  
   Several claims need their reference point or metric defined, including:
   - “added 0.4 Sharpe”
   - “keeping 90% of gross returns”
   - “lowering estimated slippage by a third”
   - the 0.02 validation/leaderboard gap
   - the forecast-error metric
   - the 12%–7% waste measurement period
   - the weekly labour-budget result

4. **Remove or revise unsupported skills.**  
   The narrative review found skills such as **C++, SQL, and Kafka** that are not demonstrated in the experience or project bullets. Either substantiate them elsewhere in the resume or remove them. It also identified a spelling error: **“econometircs”** should be **“econometrics.”**

5. **Reconsider the placement of Sunrise Bakery.**  
   The narrative review found that the role does not naturally support the quantitative-research progression. Consider placing it in an **Additional Experience** section after the research-focused material, or otherwise reducing its prominence.

6. **Address the Ph.D./employment overlap.**  
   The resume lists the Ph.D. as ongoing while also showing the Sunrise Bakery role as present. Add context if both were concurrent, or make the timeline clearer.

7. **Reduce repetition between Northpeak Capital and the volatility project.**  
   Both describe a HAR-RV comparison. Distinguish the internship work from the independent project so they do not appear to duplicate one another.

8. **Improve a few wording issues.**
   - Remove the first-person phrase **“my proof.”**
   - Fix the grammatically awkward opening of the feature-store bullet.
   - Lead with outcomes where possible instead of placing the result after a long list of methods.
   - Avoid repeating both “41st of 2,900 teams” and “top 2%,” since they communicate nearly the same result.

The complete specialist findings, including the supporting observations for each bullet, are available in the full report via `/report --full`.

> /report
# Review: resume.pdf

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

- **The bakery role does not quantify the weekly labour-budget result.** *(about 6 words to add)*
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  A reader can see that spending stayed controlled, but cannot judge whether this meant avoiding a small overspend or managing a substantial staffing budget. The team size establishes scope, but it does not measure the budget outcome.
  **How to change it:** Keep "team of 6 bakers and cashiers" and add [amount under the weekly labour budget] or [percentage under the weekly labour budget].
- **The stock-count bullet names the activities but not the ordering change that produced the reduction in unsold bread.** *(about 8 words to add)*
  > Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
  The reader can see the responsibility and the 12%-to-7% result, but cannot tell what decision changed or how the daily counts affected ordering or production. Without that link, the result can look coincidental rather than personally driven.
  **How to change it:** Lead with the result and replace or supplement the activity phrase with [the ordering or production adjustment made after reviewing stock counts].
- **Move Sunrise Bakery out of the first position or compress it so the quantitative-research narrative leads.** *(no words if moved; saves about 15 words if compressed)*
  > Sunrise Bakery
  The two bakery bullets form a coherent store-operations entry, but that work does not support the quantitative-research direction. Keeping it first makes an unrelated role dominate the reader's first impression before the research experience and projects appear.
  **How to change it:** Move the bakery entry into a short Additional Experience section after the research-focused experience and projects, or reduce it to one line.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The Diebold-Mariano bullet names a test without reporting its result or clearly defining the forecast comparison.** *(about 8 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  The test name alone does not show whether the forecast difference was statistically meaningful, what was being forecast, or how the 30-index comparisons were evaluated. A reader cannot judge the size or reliability of the claimed gain from the current wording.
  **How to change it:** Remove "standard" and add [loss function], [forecast target], and [adjusted p-value or number of indices with significant improvement].

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The variance-bound bullet uses a first-person pronoun in an otherwise phrase-based résumé.** *(no words)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  The phrase "my proof" makes the line read like a sentence and breaks the compact style used elsewhere. It also draws attention to authorship in a less polished way than a direct noun phrase.
  **How to change it:** Replace "my proof" with "the proof" or "a proof".
- **The variance-bound improvement is not measurable because "by a log factor" does not state the bounds or exact factor.** *(about 8 words to add)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  A statistics reader cannot tell how substantial the improvement is or under which assumptions it holds. The paper's review status supports credibility, but it does not substitute for the numerical comparison.
  **How to change it:** Replace "by a log factor" with [the exact previous and new bounds, or the precise logarithmic improvement and parameter regime].
- **The R-package bullet shows release and download reach but not what the package enabled or improved.** *(about 8 words to add)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  Downloads are evidence of scale, not of the contribution's outcome. A reader cannot tell whether the package improved covariance estimation, supported downstream research, or was adopted by users beyond the download event.
  **How to change it:** Keep the release and technical purpose, then replace or supplement the download evidence with [the package's measured result, downstream adoption, citations, or users]; move the other lab duties to a separate line if they remain.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The validation bullet incorrectly treats the local-to-leaderboard gap as proof that leakage was the cause.** *(about 2 words to add)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  A discrepancy can also result from distribution shift, sampling variation, leaderboard noise, metric differences, or preprocessing problems. The stated observation does not establish that leakage was cut, so the causal claim may make the result look methodologically unsound.
  **How to change it:** Replace the causal claim with the directly supported result: describe the switch to time-grouped folds and state that it reduced or closed the discrepancy only if that before-and-after comparison was actually observed.
- **The feature-selection result does not identify the validation metric or provide the before-and-after comparison.** *(about 8 words to add)*
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  A reader cannot tell whether the preserved result concerns accuracy, ranking, loss, or another metric. Without the scores or a named metric, the practical value of reducing 900 features to 300 is difficult to judge.
  **How to change it:** Replace "validation score" with [the validation metric] and add [the score with 900 features] and [the score with 300 features], or state that the scores were unchanged under the same validation design.

## Across the whole résumé

- **The résumé presents the bakery job and Ph.D. as substantial overlapping commitments without explaining how they fit together.** *(about 3 words to add)*
  > Sep 2025 - Present
  The dates show the bakery role continuing during the Ph.D., so a reader may question whether the role was part-time, taken during leave, or otherwise compatible with doctoral study. Without that context, the timeline can look inconsistent and create doubt about the scope of both commitments.
  **How to change it:** Add [part-time status, leave period, or other compatibility context] to the bakery entry, or correct the dates if the overlap is not accurate.
- **The résumé does not distinguish the two HAR-RV comparisons across 30 indices, so the results may look repeated.** *(about 6 words to add)*
  > HAR-RV baseline
  The Northpeak bullet and the independent study both mention a HAR-RV comparison across 30 indices, but the page does not identify different datasets, periods, or models. A reader may therefore read the second result as duplicated evidence rather than separate work.
  **How to change it:** Add [the distinct dataset, evaluation period, or model for each comparison] to distinguish the studies, or combine the evidence if they use the same setup.
- **The Methods skills list contains a spelling error: "econometircs" should be "econometrics".** *(no words)*
  > econometircs
  A misspelled technical field is immediately visible in a skills section and can undermine confidence in attention to detail. It is especially costly because the correction requires no substantive revision.
  **How to change it:** Replace "econometircs" with "econometrics".

## Set aside (6)

Worth knowing, and not worth the space on this page:

- s2:e0:b1, s2:e1:b0, s2:e1:b1, s2:e1:b2, s2:e1:b4, s2:e1:b5, s2:e2:b2, s2:e2:b3, s3:e0:b1, s3:e0:b2, s3:e1:b1, s3:e1:b2: “cutting unsold bread from 12% to 7% of production” gives the two rates but not the periods over which they were measured. (and 12 more like it)
- s2:e0:b1, s2:e1:b2, s2:e1:b3, s2:e1:b4, s3:e1:b0, s3:e1:b1: "Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production" places the result after the methods; lead with the result instead, such as "Cut unsold bread from 12% to 7% of production by running daily stock counts and supplier orders." (and 6 more like it)
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" bundles unrelated activities into the package achievement, reducing scanability; move the result forward and separate or remove the extra duties. (and 1 more like it)
- skills: C++ — no experience or project bullet shows C++ use. (and 3 more like it)
- s2:e1, s2:e2, s3:e0: s2:e1:b0 and s2:e1:b1 repeat: Both describe the same trading signal and its performance; b1 works best as the implementation and risk-control follow-up to b0. (and 6 more like it)
- s2:e1:b2: "Confirmed the forecast gain" states that an improvement existed but gives no size for the gain.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-aad6f788.md.

