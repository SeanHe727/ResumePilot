# Full review: resume.pdf

**88/100** — format 100 · content 83 · wording 85 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The Diebold–Mariano result is not valid as stated for nested forecasts and does not establish a confirmed gain across 30 indices.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   An unmodified Diebold–Mariano test can give invalid inference when the forecasts being compared are nested, as they are here. Testing 30 indices also requires accounting for multiple comparisons and dependence; unadjusted per-index tests do not support the word “confirmed,” so a quantitative reader may question the statistical claim.
   **How to change it:** If run, replace the testing description with a nested-model procedure such as a Clark–West adjustment or suitable nested-model bootstrap, and state that inference across the 30 indices was multiplicity-adjusted. Otherwise remove or soften “confirmed.”
2. **The daily Sharpe ratio was annualized incorrectly by multiplying it by 252.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is conventionally annualized by multiplying it by the square root of 252, not by 252. The stated method materially overstates the annualized Sharpe unless a nonstandard ratio definition was used, and the bullet describes a reporting action rather than a research effect.
   **How to change it:** Replace “multiplying it by 252” with “multiplying it by the square root of 252.” If the bullet has no substantive result beyond reporting the figure, remove it.
3. **The claim that reducing forecast error from 0.20 to 0.15 was a 33% improvement is mathematically incorrect.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The reduction is 0.05, which is 0.05 divided by the original 0.20, or 25%. Calling it a 33% improvement gives the reader an inflated result and makes the surrounding quantitative claims less credible.
   **How to change it:** Replace “a 33% improvement” with “a 25% reduction.” Replace “forecast error” with [the metric name] and identify [the baseline or model being compared], if accurate.

## Already working

- s2:e1:b0: Uses a risk-adjusted result with an explicit out-of-sample and transaction-cost context.
- s2:e2:b3: The open-source package is a concrete artifact with measurable external reach.
- s3:e1:b0: Leads with a concrete competitive result.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

### The labour-budget statement gives no actual budget result.

> within its weekly labour budget

A reader can tell that spending stayed within a constraint, but cannot judge whether the store merely met the budget or came in materially under it. The line therefore shows compliance without quantifying the achievement.

**How to change it:** Replace the phrase with [amount or percentage under the weekly labour budget], measured against the weekly budget, if accurate.

*raised by content, wording · costs about 3–6 words to add*

### The bullet uses “ran” for two different activities and attributes the full waste reduction to those activities without establishing causation.

> Ran daily stock counts and supplier orders

“Ran daily stock counts and supplier orders” makes the supplier-ordering action imprecise. The reduction is meaningful only if both percentages use the same definition and denominator, and other material conditions such as production, demand, or promotions did not also change.

**How to change it:** Replace “ran” with separate precise verbs, such as “conducted” for stock counts and [the accurate supplier-ordering verb]. If other material conditions were unchanged, state that the practices reduced unsold bread; otherwise say unsold bread fell from 12% to 7% during the period after they were introduced.

*raised by content, wording · costs about 2–5 words to add*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The Diebold–Mariano result is not valid as stated for nested forecasts and does not establish a confirmed gain across 30 indices.

> standard Diebold-Mariano tests

An unmodified Diebold–Mariano test can give invalid inference when the forecasts being compared are nested, as they are here. Testing 30 indices also requires accounting for multiple comparisons and dependence; unadjusted per-index tests do not support the word “confirmed,” so a quantitative reader may question the statistical claim.

**How to change it:** If run, replace the testing description with a nested-model procedure such as a Clark–West adjustment or suitable nested-model bootstrap, and state that inference across the 30 indices was multiplicity-adjusted. Otherwise remove or soften “confirmed.”

*raised by content · costs about 3 words to add*

### The test description does not give the size or consistency of the forecast improvement.

> forecast gain

A reader can see how the comparison was tested, but cannot tell whether the gain was small, substantial, or present across most of the indices. The result therefore spends valuable space on methodology without showing the evidence that would make the claim persuasive.

**How to change it:** Keep the HAR-RV baseline and corrected test, then add the single most useful result: [forecast-error reduction or effect size versus HAR-RV], or [number of indices with statistically significant improvement].

*raised by content, wording · costs about 4–8 words to add*

### The entry disperses a strong signal narrative across infrastructure, validation, documentation, and a distracting calculation note.

> Annualized the signal’s daily Sharpe ratio

The opening signal and trading results establish a clear quantitative-research story, but the later bullets make the reader reconstruct how the work progressed from signal to implementation to validation. The annualization note is a routine calculation rather than a contribution, so it weakens the entry's research focus.

**How to change it:** Order the bullets as signal result, trading-cost improvement, validation evidence, reusable feature-store contribution, and documentation. Move the annualization note out of the entry or remove it; if retained, place it only after correcting the calculation.

*raised by narrative · costs saves about 16 words if the calculation note is removed; otherwise no words*

### The daily Sharpe ratio was annualized incorrectly by multiplying it by 252.

> multiplying it by 252

A daily Sharpe ratio is conventionally annualized by multiplying it by the square root of 252, not by 252. The stated method materially overstates the annualized Sharpe unless a nonstandard ratio definition was used, and the bullet describes a reporting action rather than a research effect.

**How to change it:** Replace “multiplying it by 252” with “multiplying it by the square root of 252.” If the bullet has no substantive result beyond reporting the figure, remove it.

*raised by content, wording · costs about 3 words to add, or saves about 10 words if removed*

### The feature-store bullet begins with an ill-formed participial construction and buries the reusable outcome.

> Joining 120 microstructure features

“Joining” does not clearly attach to the subject, so the reader must work out who joined the features and built the store. The sequence of implementation steps also delays the result that matters most: a reusable asset adopted in two later projects.

**How to change it:** Move “built a feature store” to the front of the bullet and follow it with the joining, deduplication, and schema-versioning details. Keep the reuse in two later projects immediately after the outcome.

*raised by wording · costs no words*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The phrase “my proof” uses a first-person pronoun in a resume bullet.

> my proof

Resume bullets are written as phrases rather than first-person sentences, and “my” adds no ownership beyond the verb “Derived.” The pronoun makes the line feel less consistent with the rest of the document.

**How to change it:** Delete “my” and retain the ownership already conveyed by “Derived.”

*raised by file, wording · costs saves 1 word*

### “Making runs reproducible by seed” overstates what seed control alone guarantees.

> reproducible by seed

A fixed seed can reproduce random-number streams, but cluster scheduling, software versions, hardware, and nondeterministic numerical operations can still change results. A technically informed reader may therefore doubt the reproducibility claim even though the runtime reduction is clear.

**How to change it:** If those settings were controlled, replace the phrase with “making stochastic runs reproducible through controlled seeds and execution settings.” If not, soften it to “adding seeded, repeatable runs.”

*raised by content, wording · costs about 3–6 words to add*

### The 4.8/5 rating is not attributed to a clear teaching activity or evaluation source.

> earning a 4.8/5 teaching rating

A reader cannot tell whether the score evaluated your recitations, your teaching specifically, or the course overall. Without that context, the strongest evidence in the bullet may not be confidently attributable to your work.

**How to change it:** Replace or qualify “teaching rating” with the accurate context, such as [student rating for my recitations] or [course evaluation rating attributable to my teaching].

*raised by content · costs about 2–5 words to add*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The claim that reducing forecast error from 0.20 to 0.15 was a 33% improvement is mathematically incorrect.

> a 33% improvement

The reduction is 0.05, which is 0.05 divided by the original 0.20, or 25%. Calling it a 33% improvement gives the reader an inflated result and makes the surrounding quantitative claims less credible.

**How to change it:** Replace “a 33% improvement” with “a 25% reduction.” Replace “forecast error” with [the metric name] and identify [the baseline or model being compared], if accurate.

*raised by content, wording · costs about 1 word to add*

### The directional hit-rate increase is 6 percentage points, not 6%.

> by 6%

The hit rate moved from 52% to 58%, which is a six-percentage-point increase; expressed relatively, it is approximately 11.5%. Writing “by 6%” is ambiguous and makes the result harder to interpret quickly, especially because the same line already supplies the two percentages.

**How to change it:** Replace “by 6%” with “by 6 percentage points.” If the technical choice is material and accurate, name the [modeling or loss-function choice] that connected the temporal convolutional model to this result; otherwise remove the repeated model phrase.

*raised by content, wording · costs about 1 word to add*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The feature-selection result is buried after the method and feature counts, and “without losing validation score” does not identify the evaluation measure.

> without losing validation score

A scanning reader first sees the script, permutation importance, and feature counts rather than the outcome. The phrase also leaves unclear whether the score stayed exactly unchanged or was statistically equivalent, so the preservation claim is difficult to assess.

**How to change it:** Lead with the preserved result, then name the permutation-importance method and feature reduction. Replace the vague ending with “preserving [validation metric] at [score or score change],” if accurate.

*raised by wording · costs about 3–6 words to add*

## Across the whole résumé

### Sunrise Bakery currently leads the resume with an unrelated career direction.

> Sunrise Bakery | Assistant Store Manager

Because it is the newest role and appears first in the experience section, it shapes a recruiter's initial impression before the quantitative research work. That ordering can obscure the statistics and quantitative-finance profile that the rest of the page supports.

**How to change it:** Move Sunrise Bakery into an “Additional Experience” subsection below the quantitative experience, or compress it to one line if it must remain in the main section.

*raised by narrative · costs no words*

### The methods skill is misspelled as “econometircs.”

> econometircs

The misspelling is visible in a high-scan section and can make a reader question attention to detail. It also obscures the intended technical subject at the point where skills are being screened.

**How to change it:** Replace “econometircs” with “econometrics.”

*raised by narrative · costs no words*

### Several quantitative results state percentages or score changes without naming the metric, comparison, or outcome precisely enough.

> closed a 0.02 gap

In the HAR-RV, volatility-study, and Kaggle bullets, a reader can see that performance changed but cannot always tell whether the percentage is relative, what the loss or score measures, or whether a gap was eliminated or merely narrowed. Adding the relevant metric, baseline-to-result values, or number of significant indices would make the claims easier to verify and compare without relying on inference.

**How to change it:** For the HAR-RV comparison, add [forecast-error reduction or effect size] or [number of indices with statistically significant improvement]. For the volatility and Kaggle bullets, name [the evaluation metric], add [baseline and model loss values] where accurate, and clarify whether the 0.02 gap was reduced to zero or only narrowed.

*raised by content, wording · costs about 12–20 words to add*

## Set aside (15)

- s2:e1:b4: "Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk" describes a reporting action rather than an effect of the work. (and 1 more like it)
- s2:e1:b5: "for future interns" identifies the intended audience but not what the documentation enabled or improved for them. (and 1 more like it)
- s2:e2:b3: The clauses "maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" describe responsibilities but give no result for those activities. (and 1 more like it)
- s3:e0:b2: The phrase "with a temporal convolutional model" names the model but does not show what technical choice connected it to the directional hit-rate improvement.
- s3:e0:b2: The repeated phrase "with a temporal convolutional model" adds little after the same model is named in the first bullet.
- s2:e2:b1: "is now Section 3 of a paper under review at JASA" puts secondary publication context after the technical result and makes the ending heavier than necessary.
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" adds an overloaded list of duties that obscures the main achievement. (and 1 more like it)
- s2:e2:b3: "which was downloaded 3,000 times" appears after several intervening duties, so a scanning reader may not immediately know that "which" refers to the R package.
- s2:e1:b0: The relative clause "that added 0.4 Sharpe" is slightly less direct than stating the measured result after the action.
- s2:e1:b1: "Keeping 90% of gross returns" is ambiguous because it does not specify whether this means returns, gross P&L, or signal performance.
- s2:e1:b2: "Forecast gain" is vague and does not tell the reader what metric improved. (and 1 more like it)
- s2:e1:b3: The sequence of joining, deduplicating, versioning, and building buries the reusable outcome at the end.
- s3:e1:b0: The phrase "on 300 engineered features" makes it unclear whether the ensemble used or produced those features.
- s3:e1:b1: "Validation leakage" is specialized shorthand that may not be immediately clear to a reader outside machine learning.
- skills: Bayesian inference — listed under Methods, but no experience or project entry describes Bayesian modeling or inference.
