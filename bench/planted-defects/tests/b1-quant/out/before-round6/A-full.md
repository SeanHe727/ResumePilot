# Full review: resume.pdf

**89/100** — format 100 · content 85 · wording 87 · narrative 67

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The Diebold-Mariano claim is technically wrong for the nested HAR-RV comparison, and the line also needs the actual forecast result and its statistical evidence.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   The usual Diebold-Mariano null distribution is not generally valid when the forecasts come from nested models, so a technical reader may reject the stated confirmation method. The line also says neither what forecast metric improved nor what the tests found across the 30 indices, leaving the statistical procedure more visible than the research result.
   **How to change it:** Replace the test description with an appropriate nested-forecast comparison such as a Clark-West test, apply suitable dependence and multiple-comparison treatment across the 30 indices, and add [the forecast metric and key result, such as the p-value or percentage of indices with significant improvement].
2. **The Sharpe-ratio annualization is technically wrong: a daily Sharpe ratio must be multiplied by the square root of 252, not by 252.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   Multiplying the Sharpe ratio directly by 252 substantially overstates annualized risk-adjusted performance. Because the line presents the calculation as a research result, a quantitative reader may doubt the reliability of the reported signal evaluation.
   **How to change it:** Replace "multiplying it by 252" with "multiplying it by the square root of 252," subject to the usual return-dependence assumptions, after verifying the calculation basis.
3. **Replace "making runs reproducible by seed" because a seed alone does not establish reproducible cluster runs.**
   > Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours and making runs reproducible by seed.
   A fixed seed controls the random-number stream, but results can still differ with changes in software, dependencies, numerical libraries, hardware, configuration, or parallel execution. Claiming full reproducibility from the seed alone may therefore draw scrutiny from a technical reader even though the 14.4-fold speedup is correct.
   **How to change it:** Replace it with "making random draws reproducible under a fixed seed" or, if verified, state the additional environment and execution controls that made the full runs reproducible; use "enabling seed-based reproducibility" only if that narrower claim is intended.

## Already working

- s2:e1:b0: Combines contribution, asset class, evaluation period, out-of-sample validation, and costs in one credible line.
- s2:e1:b3: Includes downstream adoption rather than stopping at construction of the feature store.
- s3:e0:b0: Names a credible forecasting baseline, evaluation metric, out-of-sample setting, and evaluation scope.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

### Shorten Sunrise Bakery because it is unrelated to the quantitative direction and currently receives the résumé's most prominent position.

> Assistant Store Manager

The two bullets make a coherent store-operations entry, but the move from graduate research to store management can make the career direction look uncertain when this role appears first. Its recent dates and two-bullet treatment give it more attention than the quantitative research that supports the target path.

**How to change it:** Move Sunrise Bakery to a one-line Additional Experience entry at the bottom, or reduce it to one bullet; do not develop the entry further.

*raised by narrative · costs saves about 20 words*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The Diebold-Mariano claim is technically wrong for the nested HAR-RV comparison, and the line also needs the actual forecast result and its statistical evidence.

> standard Diebold-Mariano tests

The usual Diebold-Mariano null distribution is not generally valid when the forecasts come from nested models, so a technical reader may reject the stated confirmation method. The line also says neither what forecast metric improved nor what the tests found across the 30 indices, leaving the statistical procedure more visible than the research result.

**How to change it:** Replace the test description with an appropriate nested-forecast comparison such as a Clark-West test, apply suitable dependence and multiple-comparison treatment across the 30 indices, and add [the forecast metric and key result, such as the p-value or percentage of indices with significant improvement].

*raised by content, wording · costs about 8 words to add*

### The feature-store outcome should lead the line, and the opening should use a finite past-tense verb instead of "Joining."

> built a feature store the team reused in two later projects

A scanner currently encounters three implementation details before reaching the evidence that the work was reused. The awkward opening also makes the sentence harder to parse, so the contribution can look like a list of data-handling tasks rather than an adopted research asset.

**How to change it:** Move "built a feature store the team reused in two later projects" to the front, replace "Joining" with "Joined" or another finite past-tense verb, and retain only the most telling implementation detail after the outcome.

*raised by content, wording · costs saves about 8 words*

### The Sharpe-ratio annualization is technically wrong: a daily Sharpe ratio must be multiplied by the square root of 252, not by 252.

> multiplying it by 252

Multiplying the Sharpe ratio directly by 252 substantially overstates annualized risk-adjusted performance. Because the line presents the calculation as a research result, a quantitative reader may doubt the reliability of the reported signal evaluation.

**How to change it:** Replace "multiplying it by 252" with "multiplying it by the square root of 252," subject to the usual return-dependence assumptions, after verifying the calculation basis.

*raised by content · costs no words*

### The Sharpe-ratio line describes a calculation and a reporting endpoint but does not show the resulting performance or decision it enabled.

> before reporting it to the desk

A factor such as 252 is not enough for a reader to judge the signal's performance, and "before reporting it to the desk" establishes only that a number was delivered. The line needs the resulting annualized Sharpe and the comparison or desk decision that made the calculation consequential.

**How to change it:** Replace the reporting endpoint with [the desk decision or research outcome enabled], and add [the resulting annualized Sharpe and the comparison it supported], using the verified square-root-of-252 convention.

*raised by content · costs about 10 words to add*

### The documentation bullet names what was written but not whether it was used or improved later work, and "known failure regimes" may be unclear outside a trading desk.

> for future interns

A reader can see careful research documentation, but cannot tell whether it changed onboarding, supported later projects, or was merely completed for future interns. The specialized phrase may also slow a non-specialist reader who does not immediately recognize it as conditions under which the signal failed.

**How to change it:** Replace or supplement "for future interns" with [the clearest adoption or outcome measure, such as projects or interns using the documentation or onboarding time reduced], and replace "known failure regimes" with "known failure conditions" if that is technically accurate.

*raised by content, wording · costs about 4 words to add*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### Replace "making runs reproducible by seed" because a seed alone does not establish reproducible cluster runs.

> making runs reproducible by seed

A fixed seed controls the random-number stream, but results can still differ with changes in software, dependencies, numerical libraries, hardware, configuration, or parallel execution. Claiming full reproducibility from the seed alone may therefore draw scrutiny from a technical reader even though the 14.4-fold speedup is correct.

**How to change it:** Replace it with "making random draws reproducible under a fixed seed" or, if verified, state the additional environment and execution controls that made the full runs reproducible; use "enabling seed-based reproducibility" only if that narrower claim is intended.

*raised by content, wording · costs saves about 2 words*

### Specify the exact logarithmic terms behind "tightens the previous bound by a log factor."

> by a log factor

A mathematical reader can tell that the result is stronger, but cannot judge the size or form of the improvement from the current phrase. Without the old and new logarithmic terms, the contribution sounds less precise than the underlying proof.

**How to change it:** Replace or supplement "by a log factor" with [the exact previous and new logarithmic terms or the specific log-factor improvement], and replace "my proof" with "the proof."

*raised by content, wording · costs about 4 words to add*

### Add a learning outcome to the recitation bullet or make the teaching rating the clearly stated primary outcome.

> earning a 4.8/5 teaching rating

The line establishes weekly responsibility, student reach, materials created, and satisfaction, but it does not show what students learned or whether their performance changed. A hiring reader can therefore judge teaching activity more readily than teaching effectiveness.

**How to change it:** Add [one student-learning or course-performance outcome attributable to the recitations] after the teaching activity; if none is available, retain the rating as the primary outcome without implying a learning effect.

*raised by content · costs about 8 words to add*

### Separate the package release from the unrelated lab duties and move the download result immediately after the package description.

> while maintaining the lab’s shared cluster

The package is a strong technical output with meaningful adoption, but the cluster, reading-group, and grading duties make the bullet read like an unordered list. Placing the 3,000-download result after those duties also makes its referent less immediate and weakens the package's impact.

**How to change it:** End the package clause with "downloaded 3,000 times in its first year," then place the cluster, reading-group, and grading duties in a separate bullet or remove them from this line; add [the estimator, algorithm, or validation method implemented] after identifying the package.

*raised by content, wording, narrative · costs saves about 10 words*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The forecast-error claim is arithmetically wrong and does not name the error metric.

> a 33% improvement

The reduction from 0.20 to 0.15 is 0.05 divided by 0.20, or a 25% reduction, not a 33% improvement. A forecasting reader also cannot tell whether the values are MAE, MSE, RMSE, or another measure, so the result is both incorrect and less interpretable.

**How to change it:** Replace "a 33% improvement" with "a 25% reduction in [name of the error metric]"; keep the stated values 0.20 and 0.15 unless they are themselves being revised.

*raised by content, wording, narrative · costs no words*

### Describe the hit-rate change as 6 percentage points, not 6%.

> improved the model’s directional hit rate by 6%

The increase from 52% to 58% is six percentage points; expressed as a relative increase, it is approximately 11.5%. The current wording mixes those conventions and can make a technical reader question the arithmetic of an otherwise clear result.

**How to change it:** Replace "by 6%" with "by 6 percentage points" and retain "from 52% to 58%."

*raised by content, wording, narrative · costs adds 1 word*

### Avoid repeating closely related model-performance claims in the Volatility Forecasting Study.

> with a temporal convolutional model

The QLIKE result and directional hit-rate result both describe the same temporal-convolutional model across the same 30 indices, so two bullets can make the project feel repetitive rather than broader. A recruiter has less room to notice the distinct evaluation dimensions when the central model description is repeated.

**How to change it:** Keep the stronger QLIKE comparison as the lead result, then retain the hit-rate result only if it adds a distinct decision-relevant outcome; otherwise combine or cut the repeated model description.

*raised by narrative · costs saves about 10 words*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### Clarify what the 0.02 validation-to-leaderboard gap measures and show the before-and-after scores if available.

> closed a 0.02 gap

The reader can see that time-grouped folds improved evaluation alignment, but cannot tell whether 0.02 is a score-point difference, a loss difference, or another unit. Without the before-and-after relationship, the extent of the correction and whether the gap was eliminated remain unclear.

**How to change it:** Replace or supplement the phrase with [the validation and leaderboard score values or the exact labeled score-point gap before and after the fold change].

*raised by content · costs about 6 words to add*

## Across the whole résumé

### Make the intended quantitative career direction explicit because the Ph.D., store-manager role, and independent research overlap in a way that can otherwise look like a career pivot.

> Assistant Store Manager | Metro City, USA | Sep 2025 - Present

The dates do not show a major unexplained education gap, but they do show a move from graduate research to store management immediately after the quantitative internship. Since the store role overlaps with the Ph.D. and independent research, a recruiter may not know whether quantitative work is the intended path or an occasional side interest.

**How to change it:** Add a concise quantitative target or research-focused summary near the top, and use the shorter Additional Experience treatment for Sunrise Bakery so the dates support rather than dominate the intended direction.

*raised by narrative · costs about 12 words to add*

### Remove Kafka from Programming unless the résumé identifies where it was used, and correct "econometircs" to "econometrics."

> econometircs

An unsubstantiated technology can make the skills section look inflated when no experience or project bullet demonstrates Kafka. The spelling error in a methods skill is immediately visible and can undermine confidence in the care taken with technical details.

**How to change it:** Add [the Kafka use, most naturally in the Northpeak feature-store work] or remove Kafka from Programming, and change "econometircs" to "econometrics."

*raised by narrative · costs no words*

### Remove the personal pronoun from the research bullet so the résumé maintains its direct, phrase-based style.

> my proof

The rest of the résumé presents accomplishments without first-person possessives, while "my proof" makes this line read more like prose than a résumé phrase. The inconsistency is small but visible in a technical research bullet that should sound especially precise.

**How to change it:** Replace "my proof" with "the proof."

*raised by file · costs saves 1 word*

## Set aside (11)

- format, s2:e2:b0, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 2 more like it)
- s2:e0:b0, s2:e0:b1: "keeping the store within its weekly labour budget" gives a comparison point but not the size of the result. (and 1 more like it)
- s2:e2:b3, s2:e2: The ending "which was downloaded 3,000 times in its first year" follows "maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses," so its referent is not immediate. (and 3 more like it)
- s2:e1:b3: The opening "Joining 120 microstructure features point-in-time across six venues" is grammatically awkward and should use a finite past-tense verb.
- s2:e1:b5: The phrase "known failure regimes" is specialized jargon that may be unclear to readers outside the desk.
- s3:e1:b2: The result is buried after "Wrote the team’s feature-selection script using permutation importance," so a scanning reader reaches the method before the measurable reduction; lead with "trimmed 900 candidate features to 300" and follow with how it was done.
- whole resume, dates: The dates show no major unexplained education gap: the Ph.D. runs from Sep 2021 to May 2026 and covers the period without a listed full-time research role.
- whole resume, dates: The dates show a move from Graduate Research Assistant to Assistant Store Manager, with the quantitative internship occurring immediately before the store role; this pivot needs either a brief explanation or a less prominent presentation. (and 1 more like it)
- skills: Kafka is listed under Programming, but no experience or project bullet shows Kafka being used. Add a bullet identifying its use, most naturally in the Northpeak feature-store work, or remove it from the skills section.
- skills: econometircs in [SKILLS] > Methods is misspelled; the correct spelling is econometrics.
- s3:e0: s3:e0:b0 and s3:e0:b1 repeat: Both lines describe improved forecasting performance from the same study and spend two bullets on closely related model-performance results. (and 1 more like it)
