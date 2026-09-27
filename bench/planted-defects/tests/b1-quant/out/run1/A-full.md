# Full review: resume.pdf

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

### The labour-budget result is not quantified, and the bullet attributes the bread-waste reduction directly to stock counts and supplier orders.

> cutting unsold bread

A reader cannot tell whether staying within budget means avoiding a small overage or producing a meaningful saving because the budget, actual cost or hours, and variance are missing. Stock counts and supplier orders may have influenced inventory, but they do not by themselves establish that they caused unsold bread to fall; production volume, deliveries, transfers, and measurement timing may also have changed.

**How to change it:** Add [the weekly labour budget and actual labour cost or hours, or the amount and percentage under budget]. Replace "cutting" with "while unsold bread fell" unless you can add [the intervention or comparison that established your contribution]. Lead with the measured reduction, for example by moving the result before the stock-count and ordering methods.

*raised by content, wording · costs adds about 12 words*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The 0.4-Sharpe result does not identify the comparison or calculation that produced it.

> added 0.4 Sharpe

A quantitative reader cannot tell whether 0.4 is the change in the desk book's Sharpe, the signal's standalone Sharpe, or another attribution measure. The 18-month out-of-sample period and transaction-cost treatment establish useful context, but they do not identify the baseline or denominator behind the number.

**How to change it:** Replace "added 0.4 Sharpe to the desk’s book" with [the desk book's Sharpe before and after adding the signal, or the defined incremental-Sharpe calculation and its baseline]. Keep the 18-month out-of-sample and after-cost qualification if it applies to that comparison.

*raised by content · costs adds about 10 words*

### The retention and slippage percentages do not state what each percentage is measured against.

> keeping 90% of gross returns

A reader cannot determine whether retaining 90% means retaining 90% of the unsmoothed signal's gross return or another reference. Likewise, reducing slippage by a third is uninterpretable without the original slippage estimate and matching period, even though the turnover change from 34% to 21% is clear.

**How to change it:** Keep the turnover comparison, then identify [the unsmoothed or other gross-return baseline and period] for "90%" and [the original slippage estimate and period] for "a third." Do not leave either percentage without its reference.

*raised by content · costs adds about 10 words*

### The nested-model comparison uses a technically unsuitable standard Diebold–Mariano test and reports neither the size of the forecast gain nor the supporting test result.

> standard Diebold-Mariano tests

A standard Diebold–Mariano test has important limitations for nested-model comparisons, so it does not directly support the claim that the gain was confirmed. The reader sees that 30 indices were tested but cannot tell how much the forecast improved or what adjusted evidence supported the conclusion.

**How to change it:** Replace "standard Diebold-Mariano tests" with [the nested-model-adjusted test or bootstrap procedure actually used]. Replace "Confirmed the forecast gain" with [the loss improvement relative to HAR-RV and the corresponding adjusted-test result, or the proportion of indices showing a significant gain]. Delete "standard" rather than retaining it as a generic qualifier.

*raised by content, wording · costs adds about 14 words*

### The annualized Sharpe calculation is incorrect, and the phrase about reporting it adds no substantive outcome.

> multiplying it by 252

A daily Sharpe ratio is normally annualized by multiplying by the square root of 252, not by 252. The stated calculation would materially overstate risk-adjusted performance, and "before reporting it to the desk" only describes delivery without showing what changed as a result.

**How to change it:** Replace "multiplying it by 252" with "multiplying it by √252" under the usual independent-daily-return convention; add a qualification only if return dependence required a different treatment. Delete "before reporting it to the desk."

*raised by content, wording · costs saves about 7 words*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The reproducibility claim incorrectly treats a seed as sufficient.

> reproducible by seed

A fixed seed controls the random-number stream but does not preserve the code, libraries, inputs, hardware behaviour, or execution configuration. A technical reader may therefore distrust the claim that the entire simulation run was reproducible.

**How to change it:** Change "making runs reproducible by seed" to "making runs reproducible with fixed seeds" only if that is all you can support. Otherwise keep fixed seeds as one part of the method and add [the documented software environment, data inputs, and execution configuration that made reruns reproducible].

*raised by content, wording · costs adds about 10 words*

### The theoretical result gives no explicit old-versus-new bound or assumptions, and its contribution is separated from its payoff by first-person wording.

> my proof tightens the previous bound

A log-factor improvement is meaningful only relative to comparable assumptions and a defined parameter regime. Without the relevant terms, a reader cannot judge how substantial the result is; "my proof" also breaks the résumé's impersonal style and makes the contribution harder to scan.

**How to change it:** Lead with the result by replacing the generic comparison with [the specific logarithmic term or old-versus-new bound and the key assumptions under which it holds]. Replace "my proof" with "the proof" or remove the possessive, and place the Section 3 JASA detail directly after the result.

*raised by content, wording · costs adds about 10 words*

### The teaching rating lacks the response count, survey context, and comparison baseline needed to interpret it.

> earning a 4.8/5 teaching rating

A 4.8/5 score may be persuasive, but a reader cannot tell whether it came from three responses or a full class, what the survey measured, or whether it compares favourably with a relevant course or department baseline. The class size and 12 problem sets already provide clearer evidence of scope and ownership.

**How to change it:** Keep the rating only if you can add [the number of respondents, what the survey measured, and the relevant course or department comparison baseline]. Otherwise remove the rating and retain the class-size and problem-set measures.

*raised by content · costs saves about 6 words if removed*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The stated 33% improvement is mathematically wrong, and the bullet does not name the error metric.

> a 33% improvement

The decrease from 0.20 to 0.15 is 0.05 divided by the original 0.20, which is a 25% reduction, not 33%. A reader who checks that arithmetic may distrust the other reported results, while "forecast error" does not say which metric produced the two values.

**How to change it:** Replace "a 33% improvement" with "a 25% reduction" and replace "forecast error" with [the metric name that produced 0.20 and 0.15]. Keep the before-and-after values as supporting evidence.

*raised by content, wording · costs adds about 2 words*

### The hit-rate change is six percentage points, not a 6% increase.

> by 6%

The figures show an absolute change from 52% to 58%. Calling it a 6% increase is technically inaccurate and may lead a reader to interpret it as a relative increase, which would be approximately 11.5%.

**How to change it:** Replace "Improved the model’s directional hit rate by 6%" with wording that says "by 6 percentage points" and retain "from 52% to 58%" as the supporting measurement.

*raised by content, wording · costs adds 1 word*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The leakage correction does not identify the score or explain what useful result changed after the gap closed.

> closed a 0.02 gap

A 0.02 difference is ambiguous without the scoring metric, its units, and which score was higher. Closing the gap shows that the evaluation became more aligned, but a hiring reader still cannot tell whether this produced more reliable model selection, better leaderboard performance, or only a diagnostic correction.

**How to change it:** Name [the scoring metric, its units, and which score was higher]. Keep the leakage correction, but replace or supplement the closing clause with [the concrete model-selection or leaderboard consequence that followed from using time-grouped folds].

*raised by content, wording · costs adds about 12 words*

### The feature-selection result does not identify the validation score or show that the preserved performance was checked independently of feature selection.

> without losing validation score

A reader cannot tell what score was preserved. Because selecting features based on validation results can make that same validation score optimistic, "without losing validation score" may describe only performance on the tuning set rather than a robust held-out result.

**How to change it:** Name [the validation metric]. If available, replace the same-set claim with [the held-out or nested-validation result obtained after feature selection]; otherwise state clearly that the score was preserved on the validation set used for selection.

*raised by content · costs adds about 8 words*

## Across the whole résumé

### The résumé leads with retail management even though its stronger direction is quantitative research.

> Sunrise Bakery | Assistant Store Manager

Putting Sunrise Bakery first can make the document appear oriented toward store operations rather than statistics and quantitative research. The relevant experience should remain in reverse chronology, with Northpeak Capital before the Ridgeway research assistantship.

**How to change it:** Move Sunrise Bakery into a separate "Additional Experience" section below the quantitative and research experience, or reduce it to a single line. Do not reverse Northpeak Capital and Ridgeway University within the relevant experience sequence.

*raised by narrative · costs no words*

### The skills list includes SQL, C++, Kafka, and Bayesian inference without evidence in the experience or project entries, and misspells econometrics.

> econometircs

A recruiter may look for a project or role demonstrating each listed skill and question unsupported claims when none appears elsewhere. The spelling error in the Methods list is immediately visible and weakens the polish of the document.

**How to change it:** Correct "econometircs" to "econometrics." Remove SQL, C++, Kafka, and Bayesian inference unless you add a corresponding experience or project entry demonstrating each one.

*raised by narrative · costs saves about 4 words*

### The résumé repeats shared context across related bullets and bundles secondary research-assistant duties into a long line.

> while maintaining the lab’s shared cluster

The Northpeak bullets describe the same signal, so the second should read as a follow-on optimization rather than another standalone achievement. The cluster work appears in both the simulation-pipeline and research-assistant bullets, while the forecasting bullets repeat the model and 30-index setup; the long R-package line also buries its strongest result after unrelated duties.

**How to change it:** Frame the turnover bullet as an optimization of the signal introduced in the preceding bullet. Remove or split the cluster maintenance, reading-group, and grading duties; move "downloaded 3,000 times" directly after "open-source R package." State the shared temporal-convolutional-model and 30-index context once in the forecasting entry, then use the remaining bullets for their distinct metrics.

*raised by narrative, wording · costs saves about 15 words*

### The research-assistant bullet uses a personal pronoun in a résumé phrase rather than a sentence.

> my proof

The phrase "my proof" breaks the document's otherwise impersonal résumé style. The contribution can be attributed directly through the verb and proof reference without the pronoun.

**How to change it:** Replace "my proof" with "the proof" or remove the possessive entirely.

*raised by file · costs saves 1 word*

## Set aside (7)

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e1:b4, s2:e1:b5, s2:e2:b3, s3:e0:b1, s3:e1:b1: "before reporting it to the desk" describes delivery but gives no consequence of the reporting. (and 5 more like it)
- s2:e0:b1, s2:e2:b0, s2:e2:b1, s2:e2:b3, s2:e1:b2, s2:e1:b3, s2:e1:b5, s3:e1:b0, s3:e1:b1, s3:e1:b2: In "Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production," the result is buried after the methods; lead with the 5-percentage-point reduction so a scanner sees the outcome first. (and 11 more like it)
- whole resume, order: Move Sunrise Bakery into a separate "Additional Experience" section below the quantitative and research experience, or reduce it to a single line. Its current first position makes the resume appear to lead with retail management despite the stronger statistics and quantitative-research direction. (and 1 more like it)
- skills: SQL — no experience or project entry shows SQL use. (and 3 more like it)
- skills: econometircs in the Methods skills list; correct spelling: econometrics
- s2:e1, s2:e2, s3:e0: s2:e1:b0 and s2:e1:b1 repeat: Both describe improvements to the same trading signal; they are complementary, but the second should clearly read as a follow-on optimization rather than another standalone achievement. (and 3 more like it)
