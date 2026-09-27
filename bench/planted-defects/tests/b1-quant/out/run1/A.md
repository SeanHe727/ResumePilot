> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Content review:** all 5 entries with bullets
- **Wording review:** all 5 entries with bullets
- **Narrative review:** complete resume
- **Format/ATS review:** complete file
- **Education entry:** not applicable because it has no bullets
- **Job-description match:** not run; no posting was provided

The detailed report is available in `/report --full`.

### Changes to prioritize

1. **Reposition Sunrise Bakery**
   - Move it to an **Additional Experience** section below the quantitative and research work, or reduce it substantially.
   - Its current placement makes the resume appear to lead with retail management rather than statistics and quantitative research.

2. **Correct the Northpeak Capital annualization claim**
   - The bullet currently says daily Sharpe was annualized by multiplying by **252**.
   - The wording specialist flagged this as mathematically incorrect; daily Sharpe annualization uses the square root of 252.
   - Remove the “before reporting it to the desk” ending unless you can state what resulted from the report.

3. **Correct the project percentage descriptions**
   - The change from forecast error **0.20 to 0.15** is a **25% reduction**, not a 33% improvement.
   - The change in directional hit rate from **52% to 58%** is a **6-percentage-point increase**, not simply a 6% increase.

4. **Add context to major quantitative claims**
   The reviewers specifically flagged:
   - “added 0.4 Sharpe” — clarify the comparison basis or original/reference Sharpe.
   - “keeping 90% of gross returns” — identify what the 90% is relative to.
   - “lowering estimated slippage by a third” — identify the baseline.
   - “confirmed the forecast gain” — provide the gain magnitude and test result.
   - “within its weekly labour budget” — provide the budget, actual cost/hours, or resulting variance if available.

5. **Clarify causal claims**
   - The bakery bullet attributes the reduction in unsold bread directly to stock counts and supplier orders.
   - Either establish that causal connection or describe the operational change and result more cautiously.

6. **Reduce repetition and improve bullet ordering**
   - The volatility-forecasting project repeats the same model, data scope, and performance context across multiple bullets.
   - The Kaggle project repeats its ranking in both exact-rank and percentile form.
   - In the Northpeak entry, the feature-store result should be surfaced earlier, and the annualization bullet should be corrected or removed.

7. **Tighten the research-assistant entry**
   - Separate or remove lower-priority duties such as cluster maintenance, reading-group organization, and grading.
   - The R-package distribution result should appear closer to the package description.
   - “Making runs reproducible by seed” was flagged as unclear.
   - Remove the first-person pronoun in “my proof.”

8. **Check the skills section**
   - The narrative review found that **SQL, C++, Kafka, and Bayesian inference** are not demonstrated elsewhere in the resume.
   - Remove them unless you can connect them to actual experience or projects.
   - Correct **“econometircs”** to **“econometrics.”**

The file itself parses cleanly for ATS use, fits on one page, and has no layout blockers.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 71 · wording 86 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The annualized Sharpe calculation is incorrect, and the phrase about reporting it adds no substantive outcome.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is normally annualized by multiplying by the square root of 252, not by 252. The stated calculation would materially overstate risk-adjusted performance, and "before reporting it to the desk" only describes delivery without showing what changed as a result.
   **How to change it:** Replace "multiplying it by 252" with "multiplying it by √252" under the usual independent-daily-return convention; add a qualification only if return dependence required a different treatment. Delete "before reporting it to the desk."
2. **The stated 33% improvement is mathematically wrong, and the bullet does not name the error metric.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The decrease from 0.20 to 0.15 is 0.05 divided by the original 0.20, which is a 25% reduction, not 33%. A reader who checks that arithmetic may distrust the other reported results, while "forecast error" does not say which metric produced the two values.
   **How to change it:** Replace "a 33% improvement" with "a 25% reduction" and replace "forecast error" with [the metric name that produced 0.20 and 0.15]. Keep the before-and-after values as supporting evidence.
3. **The hit-rate change is six percentage points, not a 6% increase.**
   > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
   The figures show an absolute change from 52% to 58%. Calling it a 6% increase is technically inaccurate and may lead a reader to interpret it as a relative increase, which would be approximately 11.5%.
   **How to change it:** Replace "Improved the model’s directional hit rate by 6%" with wording that says "by 6 percentage points" and retain "from 52% to 58%" as the supporting measurement.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- **The labour-budget result is not quantified, and the bullet attributes the bread-waste reduction directly to stock counts and supplier orders.** *(adds about 12 words)*
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  > Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
  A reader cannot tell whether staying within budget means avoiding a small overage or producing a meaningful saving because the budget, actual cost or hours, and variance are missing. Stock counts and supplier orders may have influenced inventory, but they do not by themselves establish that they caused unsold bread to fall; production volume, deliveries, transfers, and measurement timing may also have changed.
  **How to change it:** Add [the weekly labour budget and actual labour cost or hours, or the amount and percentage under budget]. Replace "cutting" with "while unsold bread fell" unless you can add [the intervention or comparison that established your contribution]. Lead with the measured reduction, for example by moving the result before the stock-count and ordering methods.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The 0.4-Sharpe result does not identify the comparison or calculation that produced it.** *(adds about 10 words)*
  > Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
  A quantitative reader cannot tell whether 0.4 is the change in the desk book's Sharpe, the signal's standalone Sharpe, or another attribution measure. The 18-month out-of-sample period and transaction-cost treatment establish useful context, but they do not identify the baseline or denominator behind the number.
  **How to change it:** Replace "added 0.4 Sharpe to the desk’s book" with [the desk book's Sharpe before and after adding the signal, or the defined incremental-Sharpe calculation and its baseline]. Keep the 18-month out-of-sample and after-cost qualification if it applies to that comparison.
- **The retention and slippage percentages do not state what each percentage is measured against.** *(adds about 10 words)*
  > Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.
  A reader cannot determine whether retaining 90% means retaining 90% of the unsmoothed signal's gross return or another reference. Likewise, reducing slippage by a third is uninterpretable without the original slippage estimate and matching period, even though the turnover change from 34% to 21% is clear.
  **How to change it:** Keep the turnover comparison, then identify [the unsmoothed or other gross-return baseline and period] for "90%" and [the original slippage estimate and period] for "a third." Do not leave either percentage without its reference.
- **The nested-model comparison uses a technically unsuitable standard Diebold–Mariano test and reports neither the size of the forecast gain nor the supporting test result.** *(adds about 14 words)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  A standard Diebold–Mariano test has important limitations for nested-model comparisons, so it does not directly support the claim that the gain was confirmed. The reader sees that 30 indices were tested but cannot tell how much the forecast improved or what adjusted evidence supported the conclusion.
  **How to change it:** Replace "standard Diebold-Mariano tests" with [the nested-model-adjusted test or bootstrap procedure actually used]. Replace "Confirmed the forecast gain" with [the loss improvement relative to HAR-RV and the corresponding adjusted-test result, or the proportion of indices showing a significant gain]. Delete "standard" rather than retaining it as a generic qualifier.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The reproducibility claim incorrectly treats a seed as sufficient.** *(adds about 10 words)*
  > Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours and making runs reproducible by seed.
  A fixed seed controls the random-number stream but does not preserve the code, libraries, inputs, hardware behaviour, or execution configuration. A technical reader may therefore distrust the claim that the entire simulation run was reproducible.
  **How to change it:** Change "making runs reproducible by seed" to "making runs reproducible with fixed seeds" only if that is all you can support. Otherwise keep fixed seeds as one part of the method and add [the documented software environment, data inputs, and execution configuration that made reruns reproducible].
- **The theoretical result gives no explicit old-versus-new bound or assumptions, and its contribution is separated from its payoff by first-person wording.** *(adds about 10 words)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  A log-factor improvement is meaningful only relative to comparable assumptions and a defined parameter regime. Without the relevant terms, a reader cannot judge how substantial the result is; "my proof" also breaks the résumé's impersonal style and makes the contribution harder to scan.
  **How to change it:** Lead with the result by replacing the generic comparison with [the specific logarithmic term or old-versus-new bound and the key assumptions under which it holds]. Replace "my proof" with "the proof" or remove the possessive, and place the Section 3 JASA detail directly after the result.
- **The teaching rating lacks the response count, survey context, and comparison baseline needed to interpret it.** *(saves about 6 words if removed)*
  > Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.
  A 4.8/5 score may be persuasive, but a reader cannot tell whether it came from three responses or a full class, what the survey measured, or whether it compares favourably with a relevant course or department baseline. The class size and 12 problem sets already provide clearer evidence of scope and ownership.
  **How to change it:** Keep the rating only if you can add [the number of respondents, what the survey measured, and the relevant course or department comparison baseline]. Otherwise remove the rating and retain the class-size and problem-set measures.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The leakage correction does not identify the score or explain what useful result changed after the gap closed.** *(adds about 12 words)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  A 0.02 difference is ambiguous without the scoring metric, its units, and which score was higher. Closing the gap shows that the evaluation became more aligned, but a hiring reader still cannot tell whether this produced more reliable model selection, better leaderboard performance, or only a diagnostic correction.
  **How to change it:** Name [the scoring metric, its units, and which score was higher]. Keep the leakage correction, but replace or supplement the closing clause with [the concrete model-selection or leaderboard consequence that followed from using time-grouped folds].
- **The feature-selection result does not identify the validation score or show that the preserved performance was checked independently of feature selection.** *(adds about 8 words)*
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  A reader cannot tell what score was preserved. Because selecting features based on validation results can make that same validation score optimistic, "without losing validation score" may describe only performance on the tuning set rather than a robust held-out result.
  **How to change it:** Name [the validation metric]. If available, replace the same-set claim with [the held-out or nested-validation result obtained after feature selection]; otherwise state clearly that the score was preserved on the validation set used for selection.

## Across the whole résumé

- **The résumé leads with retail management even though its stronger direction is quantitative research.** *(no words)*
  > Sunrise Bakery | Assistant Store Manager
  Putting Sunrise Bakery first can make the document appear oriented toward store operations rather than statistics and quantitative research. The relevant experience should remain in reverse chronology, with Northpeak Capital before the Ridgeway research assistantship.
  **How to change it:** Move Sunrise Bakery into a separate "Additional Experience" section below the quantitative and research experience, or reduce it to a single line. Do not reverse Northpeak Capital and Ridgeway University within the relevant experience sequence.
- **The skills list includes SQL, C++, Kafka, and Bayesian inference without evidence in the experience or project entries, and misspells econometrics.** *(saves about 4 words)*
  > econometircs
  A recruiter may look for a project or role demonstrating each listed skill and question unsupported claims when none appears elsewhere. The spelling error in the Methods list is immediately visible and weakens the polish of the document.
  **How to change it:** Correct "econometircs" to "econometrics." Remove SQL, C++, Kafka, and Bayesian inference unless you add a corresponding experience or project entry demonstrating each one.
- **The résumé repeats shared context across related bullets and bundles secondary research-assistant duties into a long line.** *(saves about 15 words)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  The Northpeak bullets describe the same signal, so the second should read as a follow-on optimization rather than another standalone achievement. The cluster work appears in both the simulation-pipeline and research-assistant bullets, while the forecasting bullets repeat the model and 30-index setup; the long R-package line also buries its strongest result after unrelated duties.
  **How to change it:** Frame the turnover bullet as an optimization of the signal introduced in the preceding bullet. Remove or split the cluster maintenance, reading-group, and grading duties; move "downloaded 3,000 times" directly after "open-source R package." State the shared temporal-convolutional-model and 30-index context once in the forecasting entry, then use the remaining bullets for their distinct metrics.
- **The research-assistant bullet uses a personal pronoun in a résumé phrase rather than a sentence.** *(saves 1 word)*
  > my proof
  The phrase "my proof" breaks the document's otherwise impersonal résumé style. The contribution can be attributed directly through the verb and proof reference without the pronoun.
  **How to change it:** Replace "my proof" with "the proof" or remove the possessive entirely.

## Set aside (7)

Worth knowing, and not worth the space on this page:

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e1:b4, s2:e1:b5, s2:e2:b3, s3:e0:b1, s3:e1:b1: "before reporting it to the desk" describes delivery but gives no consequence of the reporting. (and 5 more like it)
- s2:e0:b1, s2:e2:b0, s2:e2:b1, s2:e2:b3, s2:e1:b2, s2:e1:b3, s2:e1:b5, s3:e1:b0, s3:e1:b1, s3:e1:b2: In "Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production," the result is buried after the methods; lead with the 5-percentage-point reduction so a scanner sees the outcome first. (and 11 more like it)
- whole resume, order: Move Sunrise Bakery into a separate "Additional Experience" section below the quantitative and research experience, or reduce it to a single line. Its current first position makes the resume appear to lead with retail management despite the stronger statistics and quantitative-research direction. (and 1 more like it)
- skills: SQL — no experience or project entry shows SQL use. (and 3 more like it)
- skills: econometircs in the Methods skills list; correct spelling: econometrics
- s2:e1, s2:e2, s3:e0: s2:e1:b0 and s2:e1:b1 repeat: Both describe improvements to the same trading signal; they are complementary, but the second should clearly read as a follow-on optimization rather than another standalone achievement. (and 3 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f1299776.md.

