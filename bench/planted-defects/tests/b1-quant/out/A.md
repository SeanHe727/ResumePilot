> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Format/ATS:** reviewed; it parses cleanly as a one-page, 555-word resume with no layout blockers.
- **Content:** reviewed all 5 entries with bullets.
- **Wording:** reviewed all 5 entries with bullets.
- **Narrative:** reviewed the complete timeline.
- **Job-description match:** not reviewed because no posting was provided.

The main changes to make are:

1. **Reduce the prominence of the bakery role.**  
   Move it to an **Additional Experience** section below the quantitative research and projects, or place it last. Its current position makes the resume initially read as retail management rather than statistics or quantitative finance.

2. **Correct the technical and numerical credibility issues.**
   - The Northpeak bullet describing annualized Sharpe is technically incorrect: multiplying a daily Sharpe ratio by 252 is not the standard annualization method.
   - In the volatility project, reducing error from **0.20 to 0.15** is a **25% reduction**, not a 33% improvement.
   - Changing directional hit rate from **52% to 58%** should be described as a **6-percentage-point increase**, not simply a 6% improvement.

3. **Add definitions and conditions around performance figures.**
   Clarify:
   - What the “0.4 Sharpe” is measured against.
   - The metric represented by forecast error values of 0.20 and 0.15.
   - The time period, forecast horizon, and evaluation split for the forecasting results.
   - Whether results across 30 indices are pooled, averaged, or another aggregation.
   - What the 0.02 Kaggle score gap represents.

4. **Add timeframes or baselines to operational results.**
   The bakery result of reducing unsold bread from 12% to 7% needs a measurement period or comparable baseline. The labor-budget claim would be more informative with the actual variance or cost result, if available.

5. **Separate overloaded bullets.**
   The final graduate-research bullet combines:
   - R-package development,
   - cluster maintenance,
   - reading-group organization,
   - grading.  
   Separate these or remove lower-priority responsibilities so the research-software contribution is not buried.

6. **Clarify the research contribution.**
   The “log factor” improvement needs to specify what changed mathematically and what estimator or variance target was involved. Also remove the personal pronoun in “my proof.”

7. **Strengthen outcome evidence for infrastructure and documentation.**
   The feature-store and intern-wiki bullets describe substantial work, but should indicate adoption or practical effect—such as users, projects supported, time saved, or reduced rework—if you have those figures.

8. **Check the skills section against the evidence.**
   The narrative review found no supporting entries for **SQL, C++, Kafka, Bayesian inference**, or time-series econometrics. Either document those skills elsewhere in the resume or remove unsupported items. Also correct the apparent spelling of “econometrics.”

The resume’s strongest documented material is the quantitative-research arc: the statistics Ph.D., statistical-learning lab, quantitative-finance internship, volatility study, and market-prediction project. The full specialist reasoning and bullet-by-bullet notes are available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 74 · wording 85 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Delete the incorrect Sharpe-calculation bullet and replace it with a validated performance comparison.
   Multiplying a daily Sharpe ratio by 252 is technically wrong and turns a procedural bullet into a credibility problem.
2. Correct 33% to a 25% reduction and identify the error metric, evaluation split, and forecast horizon.
   The percentage is mathematically wrong, and the missing conditions prevent independent judgment of the result.
3. Move Sunrise Bakery below the quantitative research and project material or into Additional Experience.
   Its current position gives an unrelated role more prominence than the experience relevant to quantitative research.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- Add the labour-budget variance and explain the inventory decision and timeframe behind the reduction in unsold bread. *(about 8 words to add)*
  The reader cannot judge the scale of the labour result or how the listed activities caused the waste reduction.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Define the Sharpe comparison and add the baseline and practical consequence for slippage and retained returns. *(about 12 words to add)*
  The reader cannot judge the economic significance without knowing what the figures are measured against.
- State the measured forecast gain and lead with the reusable feature-store outcome rather than dense implementation details. *(about 8 words to add)*
  The test name does not show improvement, and the infrastructure result can be missed before the main verb appears.
- Replace “for future interns” with evidence that the documentation enabled reproducible handoff or reduced onboarding and rework. *(about 5 words to add)*
  The current wording states an intended audience, not a result.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- Name the technical change behind the simulation speedup. *(about 5 words to add)*
  The runtime result is strong, but the reader cannot tell what produced it.
- Specify the estimator, variance target, and exact meaning of the logarithmic tightening. *(about 8 words to add)*
  A technical reader cannot assess the scope or significance of the theoretical result from the current terms.
- Separate the package contribution from unrelated duties and replace downloads with evidence of ownership and adoption. *(saves about 8 words)*
  The overloaded bullet hides the strongest software result, while downloads alone do not show use or maintenance.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Change “by 6%” to “by 6 percentage points” and state how the 30-index rates were aggregated. *(saves about 2 words)*
  The current percentage is ambiguous and does not show whether the result is pooled or averaged.
- Consolidate the repeated volatility-model bullets and distinguish QLIKE loss, forecast error, and hit rate. *(saves about 10 words)*
  The same model story currently occupies several bullets without clearly separated contributions.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- Explain the technical choice behind the 300 features and remove the redundant top-2% ranking phrase. *(saves about 7 words)*
  The rank is already clear, while the modeling choice would better demonstrate quantitative skill.
- Replace the leakage claim with its specific temporal mechanism and document fold-wise preprocessing, feature engineering, and feature selection. *(about 10 words to add)*
  Without these details, the reader cannot verify that time-grouped folds actually prevented leakage.

## Across the whole résumé

- Remove unsupported skills and correct “time-series econometircs” to “time-series econometrics.” *(saves about 5 words)*
  Unsupported skills broaden the profile without evidence, and the misspelling is immediately visible.
- Remove the personal pronoun from the proof bullet. *(saves 1 word)*
  It makes one résumé line read like a sentence instead of a consistent phrase.

## Set aside (9)

Worth knowing, and not worth the space on this page:

- s2:e1:b2: The phrase "standard Diebold-Mariano tests" does not say which forecast loss or comparison statistic was used, leaving the validation method only partly reconstructable. (and 1 more like it)
- s2:e2:b2: The bullet measures student reach and satisfaction but not whether the teaching improved student performance or course outcomes.
- s3:e1:b0: The phrase "on 300 engineered features" gives scale but not the specific modeling or feature-engineering choice that connects the method to the placement.
- s3:e1:b2: The line should clarify that permutation importance was calculated inside each training fold, if that is how leakage was prevented during feature selection.
- whole resume, order: The dates show no literal employment gap: the Ph.D. runs from September 2021 to the present period, including the interval without listed research employment. However, the resume shows no Ph.D.-period research activity between August 2021 and the Northpeak internship in June 2025, so the academic timeline reads thinner than the degree title suggests.
- s2:e0: The two bullets form a coherent store-operations entry, but the role is disconnected from the quantitative-research story and should not lead the relevant experience.
- s2:e2:b1: "my proof" adds a possessive that is unnecessary because the bullet already establishes ownership through "Derived".
- s3:e0:b2: "Improved" is a generic opening verb that describes the result without specifying the action taken.
- s3:e1:b2: "without losing validation score" can be compressed to "with no validation-score loss" without changing the meaning.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-3f884781.md.

