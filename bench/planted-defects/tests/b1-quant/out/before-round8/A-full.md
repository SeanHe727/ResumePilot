# Full review: resume.pdf

**87/100** — format 100 · content 83 · wording 84 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The claim that standard Diebold–Mariano tests confirmed the gain is technically incorrect for a nested baseline and does not account for dependence or multiple testing across 30 indices.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   Standard Diebold–Mariano inference is not generally valid when the competing forecast is nested, so the stated tests alone do not support the word "confirmed." Testing 30 indices also raises dependence and multiplicity questions, which can make the apparent evidence less reliable and invite a technically informed reader to challenge the result.
   **How to change it:** Replace the claim of confirmation with the result of a nested-model-appropriate forecast test using dependence-robust inference and an appropriate cross-index multiplicity or aggregate-hypothesis adjustment; add [test outcome and forecast-gain figure] before making the confirmation claim.
2. **The daily Sharpe ratio was annualized incorrectly by multiplying it by 252 instead of by the square root of 252.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is conventionally annualized by multiplying by the square root of the number of trading days, not by the number itself. Multiplying by 252 annualizes a mean rather than a Sharpe ratio, so the reported risk-adjusted performance is materially overstated.
   **How to change it:** Replace "multiplying it by 252" with "multiplying it by √252," subject to the usual assumptions about daily-return dependence.
3. **The line incorrectly calls the reduction from 0.20 to 0.15 a 33% improvement.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The reduction is 0.05, and 0.05 divided by the original 0.20 equals 25%, not 33%. Calling it a 33% improvement creates a mathematical error that can undermine confidence in the other quantitative claims.
   **How to change it:** Replace "a 33% improvement" with "a 25% reduction."

## Already working

- s2:e1:b0: Leads with a specific research contribution and its risk-adjusted impact.
- s3:e0:b0: Uses a named benchmark and an out-of-sample result, making the comparison credible.
- s3:e1:b0: Leads with a highly specific, externally understandable outcome.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The claim that standard Diebold–Mariano tests confirmed the gain is technically incorrect for a nested baseline and does not account for dependence or multiple testing across 30 indices.

> standard Diebold-Mariano tests

Standard Diebold–Mariano inference is not generally valid when the competing forecast is nested, so the stated tests alone do not support the word "confirmed." Testing 30 indices also raises dependence and multiplicity questions, which can make the apparent evidence less reliable and invite a technically informed reader to challenge the result.

**How to change it:** Replace the claim of confirmation with the result of a nested-model-appropriate forecast test using dependence-robust inference and an appropriate cross-index multiplicity or aggregate-hypothesis adjustment; add [test outcome and forecast-gain figure] before making the confirmation claim.

*raised by content · costs about 8 words to add*

### The feature-store bullet opens with a dangling participial phrase, and the reuse result is buried after three implementation details without saying what the reuse enabled.

> Joining 120 microstructure features

The opening does not attach grammatically to the subject of "built," so the reader has to reconstruct who joined, deduplicated, and versioned the features. Although reuse in two later projects shows that the asset had value, the reader still cannot tell whether it accelerated research, improved data quality, or changed a later result.

**How to change it:** Move the implementation details after the subject and make the result lead or follow the feature-store contribution; replace or supplement "reused in two later projects" with [specific research or operational benefit enabled by the reuse].

*raised by wording · costs about 5 words to add*

### The daily Sharpe ratio was annualized incorrectly by multiplying it by 252 instead of by the square root of 252.

> multiplying it by 252

A daily Sharpe ratio is conventionally annualized by multiplying by the square root of the number of trading days, not by the number itself. Multiplying by 252 annualizes a mean rather than a Sharpe ratio, so the reported risk-adjusted performance is materially overstated.

**How to change it:** Replace "multiplying it by 252" with "multiplying it by √252," subject to the usual assumptions about daily-return dependence.

*raised by content, wording · costs no words*

### The Sharpe-ratio bullet presents a reporting calculation as an achievement without stating the resulting performance or what decision the analysis enabled.

> before reporting it to the desk

Annualizing a ratio is a routine reporting step, not evidence of research contribution by itself. Without the resulting figure and a comparison point, a reader cannot judge the signal's quality, improvement, or credibility.

**How to change it:** Replace the calculation and reporting procedure with [annualized Sharpe result] compared with [relevant benchmark or prior estimate], or state [validated performance result or research decision enabled by the analysis] if that evidence is available.

*raised by content, wording · costs about 4 words to add*

### The documentation bullet gives no evidence that the wiki entry was used or improved a later workflow.

> for future interns

The reader can see that the assumptions, cost model, and failure regimes were documented for future interns, but not whether anyone reused the material or whether it improved reproducibility or onboarding. The intended audience therefore does not demonstrate impact.

**How to change it:** Add [specific reuse, decision, or workflow improvement enabled by the wiki] after the documentation purpose.

*raised by content · costs about 6 words to add*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The research-assistant entry mixes research, systems work, teaching, grading, reading-group organization, and cluster maintenance, so the operational responsibilities have no stated result and obscure the main contribution.

> maintaining the lab’s shared cluster

The package, proof, teaching, and lab-service activities read as one undifferentiated list rather than a clear research narrative. The cluster, reading-group, and grading responsibilities take up substantial space without showing what improved, leaving the reader unable to judge their value.

**How to change it:** Add [one concrete result of the most important operational or teaching responsibility], or cut the responsibility that cannot be tied to a meaningful outcome so the research contribution leads the bullet.

*raised by content · costs about 6 words to add*

### The phrase "tightens the previous bound by a log factor" does not specify what quantity improved or how the new bound compares with the old one.

> by a log factor

A specialist can recognize this as theoretical progress, but a reader scanning quickly cannot judge the size or significance of the improvement from the phrase alone. The missing quantity and comparison weaken the evidence for the claimed contribution.

**How to change it:** Replace or supplement "by a log factor" with [the specific old and new bound, or the exact log-factor improvement and the quantity it measures], if accurate.

*raised by content · costs about 5 words to add*

### The R-package bullet names the deliverable but not the technical contribution inside it.

> for high-dimensional covariance estimation

The reader can identify the package's subject area and download reach, but cannot tell what estimator, algorithm, capability, or user problem the package addressed. That makes the strongest externally visible outcome harder to connect to the candidate's technical work.

**How to change it:** Replace or supplement "for high-dimensional covariance estimation" with [the specific estimator, algorithm, or user-facing capability implemented].

*raised by content · costs about 4 words to add*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The line incorrectly calls the reduction from 0.20 to 0.15 a 33% improvement.

> a 33% improvement

The reduction is 0.05, and 0.05 divided by the original 0.20 equals 25%, not 33%. Calling it a 33% improvement creates a mathematical error that can undermine confidence in the other quantitative claims.

**How to change it:** Replace "a 33% improvement" with "a 25% reduction."

*raised by content, wording · costs saves about 1 word*

### The phrase "forecast error" does not identify the metric or the comparison underlying the change from 0.20 to 0.15.

> Cut forecast error from 0.20 to 0.15

A quantitative reader cannot tell whether the values are QLIKE, MAE, RMSE, or another metric, or whether they compare with a baseline or an earlier model version. That makes this result difficult to interpret alongside the study's separate QLIKE comparison.

**How to change it:** Replace "forecast error" with [specific error metric] and clarify the comparison as "from 0.20 to 0.15 versus [comparison model or prior version]" if accurate.

*raised by content · costs about 2 words to add*

### The change from 52% to 58% is 6 percentage points, not a 6% improvement.

> improved the model’s directional hit rate by 6%

The absolute change is six percentage points. Relative to the starting 52% hit rate, the increase is approximately 11.5%, so the current wording misstates the result and can make the quantitative reporting look careless.

**How to change it:** Replace "by 6%" with "by 6 percentage points"; alternatively, say "by approximately 11.5% relative" if that is the intended comparison.

*raised by content, wording · costs about 1 word to add*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The 0.02 validation-to-leaderboard gap and the preserved validation score do not identify the evaluation metric, so the competition results are difficult to interpret.

> a 0.02 gap

A reader cannot tell whether 0.02 refers to AUC, log loss, accuracy, or another competition metric, or what "without losing validation score" means. Naming the metric would make the validation improvement and the preserved performance more credible with little added space.

**How to change it:** Replace "a 0.02 gap" with "a 0.02 [evaluation-metric] gap" and replace "validation score" with [specific validation metric], if accurate; clarify whether the gap was reduced by 0.02 or to zero.

*raised by content · costs about 3 words to add*

## Across the whole résumé

### The Methods skill is misspelled: "econometircs" should be "econometrics."

> econometircs

A spelling error in a named technical field is immediately visible in a skills scan. It can distract from the otherwise quantitative profile and make the skills section look less carefully checked.

**How to change it:** Replace "econometircs" with "econometrics."

*raised by narrative · costs no words*

### SQL, C++, Kafka, and Bayesian inference are listed as skills without corresponding evidence anywhere in the résumé.

> SQL

A recruiter cannot verify whether these are practiced skills or simply keywords because no entry describes work using them. Unsupported skills dilute the connection between the skills section and the demonstrated quantitative experience.

**How to change it:** Remove SQL, C++, Kafka, and Bayesian inference unless the résumé can add [specific work using each skill]; retain only skills supported by an entry.

*raised by narrative · costs saves about 4 words if removed*

## Set aside (11)

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e0:b0, s2:e0:b1: The phrase "keeping the store within its weekly labour budget" does not show how far under or on target the labour spend was. (and 3 more like it)
- s2:e1:b2: The phrase "confirmed the forecast gain" does not state the size or practical meaning of the gain. (and 1 more like it)
- s2:e1:b2: The line says "with standard Diebold-Mariano tests across the 30 indices" but gives no test outcome. (and 1 more like it)
- s2:e2:b3: "which was downloaded 3,000 times in its first year" follows several different activities, so its subject is not immediately clear. (and 1 more like it)
- s2:e2:b1: "is now Section 3 of a paper under review at JASA" buries the contribution in a publication-status detail and could be shortened to "appearing as Section 3 of a JASA paper under review."
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" combines four separate responsibilities in one sentence and obscures the primary accomplishment.
- s3:e1:b1, s3:e1:b2: "Closed a 0.02 gap between local validation and leaderboard scores" does not say whether the gap was reduced to zero or merely reduced by 0.02. (and 2 more like it)
- whole resume, order: Separate Sunrise Bakery into an "Additional Experience" section below the quantitative roles, or compress it to a single line. Keeping it first makes the page read as though store management is the candidate's current direction.
- s2:e2: The entry mixes research, systems work, teaching, grading, reading-group organization, and cluster maintenance, so it reads more like a collection of duties than one research narrative.
- s3:e0: s3:e0:b0 and s3:e0:b1 repeat: Both present model-driven forecasting-error improvement as the primary achievement; retain distinct metrics only if each adds a materially different point.
