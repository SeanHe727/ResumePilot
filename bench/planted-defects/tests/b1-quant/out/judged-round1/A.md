> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume:

- **5 experience/project entries** reviewed for content and wording
- **Narrative review** completed
- **Format/ATS review** completed
- Education entries contain no bullets to review
- **No job-description match** was run because no posting was provided

### Change these first

1. **Correct the Sharpe-ratio calculation in the Northpeak entry.**  
   The bullet saying Sharpe was calculated by multiplying by 252 is technically incorrect. Verify whether the reported **0.4 Sharpe** was affected, then remove or replace that calculation detail.

2. **Fix the volatility-project arithmetic.**  
   A change from **0.20 to 0.15** is a **25% reduction**, not a 33% improvement. Also identify what the error metric represents.

3. **Clarify the statistical-testing claim.**  
   The Northpeak bullet uses Diebold–Mariano tests against a nested HAR-RV baseline. Specify the appropriate nested-model correction, evaluation metric, and—if applicable—multiplicity control across the 30 indices.

4. **Make major performance figures interpretable.**  
   Clarify:
   - whether the **0.4 Sharpe** is incremental or standalone;
   - what “keeping 90% of gross returns” is compared with;
   - how the one-third slippage reduction was measured;
   - whether the **6% hit-rate gain** means six percentage points;
   - what the **0.20-to-0.15** metric measures.

5. **Separate personal contributions from team results.**  
   This is especially important for the Kaggle project and the Northpeak feature-store work. Make clear which modeling, data, validation, and implementation work you personally owned.

6. **Strengthen the research-assistant entry with the exact theoretical improvement.**  
   “Improved the bound by a log factor” needs the old and new rates, under the same assumptions. The JASA submission status is supporting context, not the main result.

7. **Add missing context to supporting figures.**
   - Include the number of respondents for the **4.8/5 teaching rating**.
   - Add the time period for the bakery’s reduction in unsold bread.
   - Explain the measurable result of maintaining the lab cluster, reading group, and grading responsibilities, or keep those responsibilities separate from the package-release result.

8. **Reduce repetition in the volatility project.**  
   Its three bullets all present model-performance gains on the same study. Make the sequence distinguish the headline result, method, and secondary validation rather than repeating success metrics.

9. **Address the timeline gap.**  
   The projects show one ending in June 2023 and the next beginning in January 2024. The Ph.D. provides general context, but the resume does not explain July–December 2023.

10. **Reorder for industry quant or ML applications.**  
    Put **Experience before Education**, with Northpeak and the statistical-learning research leading. Within Northpeak, lead with the signal result, then implementation/research validation, and remove the distracting annualization bullet.

### Skills and presentation

- The file is **one page, ATS-readable, and cleanly extracted**.
- There are no layout or parsing blockers.
- The resume has strong numerical coverage: **17 of 18 bullets contain figures**.
- The format review flagged one personal pronoun: **“my proof…”**.
- The narrative review found skills such as **SQL, C++, Kafka, and Bayesian inference** unsupported by the entries. Remove them or add evidence elsewhere.
- Correct the spelling of **“time-series econometrics.”**

The full specialist report contains the entry-by-entry reasoning and all bullet-level findings; use `/report --full` to read it.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 74 · wording 85 · narrative 80

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Replace the generic Diebold-Mariano claim with the nested-model correction actually used, report the forecast gain, loss function, and statistical result, and explain whether the 30-index tests used multiplicity control or a joint evaluation.
2. Correct the Sharpe annualization: multiplying a daily Sharpe by 252 is wrong because annualization uses the square root of the number of periods, so verify the calculation and whether the 0.4 figure was independently computed.

## Already working

- s2:e0:b0: Combines a trading-relevant result with a defined asset class and signal type.
- s2:e0:b0: Uses out-of-sample and after-cost qualifiers rather than presenting an unqualified backtest result.
- s3:e1:b0: The placement is a highly legible and credible impact signal.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Correct the Sharpe annualization: multiplying a daily Sharpe by 252 is wrong because annualization uses the square root of the number of periods, so verify the calculation and whether the 0.4 figure was independently computed. *(saves about 10 words)*
- Clarify whether “0.4 Sharpe” is the signal’s standalone Sharpe or its incremental contribution relative to the pre-existing book, and state the attribution basis if needed. *(about 8 words to add)*
- Define the 90% return-retention comparison and identify the baseline or estimation method behind the one-third slippage reduction. *(about 12 words to add)*
- Replace the generic Diebold-Mariano claim with the nested-model correction actually used, report the forecast gain, loss function, and statistical result, and explain whether the 30-index tests used multiplicity control or a joint evaluation. *(about 18 words to add)*
- Lead with your ownership of the feature-store work and state the measurable benefit of its reuse rather than opening with the feature-joining process. *(about 10 words to add)*
- Replace “for future interns” with a checkable reuse or onboarding outcome and state whether the documentation became a review or handoff standard. *(about 8 words to add)*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2021 - Aug 2021

- Replace “my proof tightens the previous bound by a log factor” with the old and new rates under the same assumptions, because “log factor” does not reveal whether the improvement removes log(p), changes the logarithm’s argument, or improves only a constant. *(about 12 words to add)*
- State the theorem’s practical or theoretical consequence rather than relying on its placement as Section 3 of a JASA-submitted paper. *(about 8 words to add)*
- Remove the personal pronoun and tighten the bullet to “Derived a variance bound for a sparse regression estimator, tightening the previous bound by a log factor.” *(saves about 4 words)*
- Add the number of respondents to the 4.8/5 teaching evaluation and compress the wording to “rated 4.8/5 by students.” *(about 3 words to add)*
- Separate the R-package release from cluster maintenance, reading-group organization, and grading, and attach the 3,000-download result directly to the package. *(saves about 8 words)*
- Add the capability or user problem enabled by the open-source R package instead of naming only high-dimensional covariance estimation. *(about 8 words to add)*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Jun 2020 - May 2021

- Keep the Sunrise Bakery entry compact because its management work is internally consistent but less relevant to the quantitative arc. *(saves about 5 words)*
- Add the weekly labour-budget variance, savings, or budget amount and specify the staffing or scheduling action behind the result. *(about 10 words to add)*
- Add the period over which unsold bread fell from 12% to 7% and identify the ordering adjustment that connected stock counts and supplier orders to the reduction. *(about 8 words to add)*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Rewrite the HAR-RV result as a 7% reduction in average out-of-sample QLIKE loss and add the forecast horizon and evaluation design. *(about 8 words to add)*
- Define “forecast error,” correct the 0.20-to-0.15 reduction from 33% to 25%, and avoid presenting the absolute change and percentage as redundant versions of the same result. *(saves about 4 words)*
- Do not attribute the error reduction to both realized-volatility features and an asymmetric loss unless separate tests show each contribution. *(about 6 words to add)*
- Define whose direction the hit rate predicts, report the change as 6 percentage points from 52% to 58%, and identify the comparable baseline or evaluation that supports attributing the gain to the model. *(about 10 words to add)*
- Consolidate the three overlapping performance bullets into distinct results, because the QLIKE reduction, forecast-error reduction, and hit-rate increase all describe the same 30-index study and repeat the temporal-convolutional-model framing. *(saves about 18 words)*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- Identify your own contribution to the team’s gradient-boosting result instead of presenting the ensemble and 300 features as an undifferentiated team accomplishment. *(about 8 words to add)*
- Replace “cut validation leakage” with the supported observation about the local-validation-to-leaderboard gap, naming the metric and whether 0.02 is absolute or relative, and state the time key and fold-contained feature work if applicable. *(about 14 words to add)*
- State the validation score or comparison basis for the 900-to-300 feature reduction and clarify that permutation importance and selection were fit within each training fold if that is how leakage was prevented. *(about 12 words to add)*
- Keep one ranking expression rather than both “41st of 2,900 teams” and “top 2% of the private leaderboard.” *(saves about 8 words)*

## Across the whole résumé

- For an industry quant or ML application, move EXPERIENCE above EDUCATION so the Northpeak internship and statistical-learning research lead the document, with the Ph.D. immediately afterward as supporting credentials. *(no words)*
- Explain the Jul-Dec 2023 gap between the Kaggle competition and the volatility study if there was relevant work, coursework, or research during that period. *(about 5 words to add)*
- Remove SQL, C++, Kafka, and Bayesian inference unless another résumé line can substantiate them, and correct “time-series econometircs” to “time-series econometrics.” *(saves about 8 words)*

## Set aside (5)

Worth knowing, and not worth the space on this page:

- s2:e1:b3: “while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses” bundles three additional jobs into the package bullet without showing what changed because of them.
- s2:e1:b3: “which was downloaded 3,000 times in its first year” measures adoption but not whether the downloads represented active users, research use, or a meaningful technical outcome.
- s2:e0:b0: "over 18 months of out-of-sample backtest after costs" still leaves the backtest frequency, number of observations, and attribution method unclear if the Sharpe figure is challenged.
- s2:e2:b0, s2:e2:b1: The phrase "keeping the store within its weekly labour budget" gives no measurable scale; add the weekly variance, savings, or budget amount that proves the result. (and 3 more like it)
- s3:e0:b1, s3:e0:b2: "by adding realized-volatility features and an asymmetric loss" attributes the outcome to two interventions without showing whether either was tested separately. (and 1 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-98a2b548.md.

