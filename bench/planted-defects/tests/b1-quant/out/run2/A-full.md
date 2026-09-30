# Full review: resume.pdf

**88/100** — format 100 · content 84 · wording 86 · narrative 62

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The Diebold–Mariano claim is technically overstated.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   A standard Diebold–Mariano test is not generally valid without adjustment when the competing forecasting models are nested, because parameter estimation changes the null distribution. Testing across 30 indices also requires suitable treatment of multiple comparisons and cross-index dependence before the result can support a claim of confirmation.
   **How to change it:** Replace “with standard Diebold-Mariano tests” with a description of the appropriate nested-model adjustment, and state how the 30-index results were corrected for [multiple comparisons and cross-index dependence]. Do not call the gain “confirmed” unless those adjusted tests support that wording.
2. **The daily Sharpe ratio is annualized with the wrong factor.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is normally annualized by multiplying by the square root of 252, not by 252. Multiplying by 252 substantially overstates the annualized Sharpe ratio and is an error a quantitative-finance reader would catch immediately.
   **How to change it:** Replace “multiplying it by 252” with “multiplying it by √252.” Keep the calculation only if the bullet needs to explain the correction; otherwise use the corrected annualized result directly.
3. **The forecast-error change is arithmetically wrong.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   Reducing the value from 0.20 to 0.15 is (0.20 − 0.15) / 0.20 = 25%, not 33%; 33% results from dividing the difference by the ending value. The current percentage conflicts with the stated endpoints and can make the reader doubt the accuracy of the other quantitative claims.
   **How to change it:** Replace “a 33% improvement” with “a 25% reduction.” Keep “reduction” rather than “improvement,” because the quantity being reduced is forecast error.

## Already working

- s2:e1:b0: Leads with a concrete trading outcome rather than a research task.
- s3:e0:b0: Names a meaningful baseline rather than presenting an isolated model score.
- s3:e1:b0: Leads with a highly legible competitive result.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

### Sunrise Bakery should be moved out of the main Experience sequence or reduced to one line.

> Sunrise Bakery

The two bullets make the entry read as a substantial move toward retail management rather than as supporting experience alongside quantitative research. Its current position interrupts the research narrative and may make the candidate’s intended direction less clear.

**How to change it:** Move the role into a brief Additional Experience section at the bottom, or reduce it to one line containing the title, employer, and dates. Do not give it two accomplishment bullets in the main sequence unless retail management is part of the target career.

*raised by narrative · costs saves about 20 words if reduced to one line*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The Diebold–Mariano claim is technically overstated.

> standard Diebold-Mariano tests

A standard Diebold–Mariano test is not generally valid without adjustment when the competing forecasting models are nested, because parameter estimation changes the null distribution. Testing across 30 indices also requires suitable treatment of multiple comparisons and cross-index dependence before the result can support a claim of confirmation.

**How to change it:** Replace “with standard Diebold-Mariano tests” with a description of the appropriate nested-model adjustment, and state how the 30-index results were corrected for [multiple comparisons and cross-index dependence]. Do not call the gain “confirmed” unless those adjusted tests support that wording.

*raised by content · costs about 12 words to add*

### The bullet does not identify what forecast performance improved or what the tests found.

> Confirmed the forecast gain

“Confirmed the forecast gain” tells a recruiter that the model won a comparison but not whether the gain affected forecast loss, accuracy, or a trading decision. The number of indices gives scope rather than evidence; without a test result, the reader cannot judge whether the improvement was statistically meaningful.

**How to change it:** Replace “forecast gain” with [the exact forecast-error or trading-performance measure and its change versus HAR-RV], then add [the single most telling adjusted test result, such as a p-value, test statistic, or percentage of indices showing significant improvement]. Replace “Confirmed” with the precise supported claim.

*raised by content, wording · costs about 15 words to add*

### The daily Sharpe ratio is annualized with the wrong factor.

> multiplying it by 252

A daily Sharpe ratio is normally annualized by multiplying by the square root of 252, not by 252. Multiplying by 252 substantially overstates the annualized Sharpe ratio and is an error a quantitative-finance reader would catch immediately.

**How to change it:** Replace “multiplying it by 252” with “multiplying it by √252.” Keep the calculation only if the bullet needs to explain the correction; otherwise use the corrected annualized result directly.

*raised by content · costs saves about 3 words if the operation is replaced by the result*

### The Sharpe-ratio bullet reports a calculation rather than what the calculation changed or enabled.

> Annualized the signal’s daily Sharpe ratio

“Annualized the signal’s daily Sharpe ratio” describes routine metric handling, not an analytical or investment outcome. The reader also cannot judge the result because the annualized Sharpe value and the return series or benchmark it describes are missing.

**How to change it:** Replace the reporting step with [the decision or comparison the annualized Sharpe supported], and add [the resulting annualized Sharpe value and the return series or benchmark it describes]. Cut “before reporting it to the desk,” which adds no useful evidence.

*raised by content, wording · costs about 10 words to add; saves about 6 words*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The final bullet combines the package release with unrelated duties and leaves its strongest result buried at the end.

> while maintaining the lab’s shared cluster

The package, cluster maintenance, reading group, and grading are different kinds of work, so the line reads as an unordered task list rather than a focused research accomplishment. A reader may miss the open-source package’s technical impact because the 3,000-download result arrives only after several supporting responsibilities.

**How to change it:** Make the package release its own bullet, lead with “Released an open-source R package for high-dimensional covariance estimation,” and move “the package reached 3,000 downloads in its first year” immediately after it. Put cluster maintenance, reading-group organization, and grading in a separate bullet only if they have [a concrete outcome]; otherwise cut them.

*raised by content, wording, narrative · costs about 5 words to add; saves about 8 words if unsupported duties are cut*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The forecast-error change is arithmetically wrong.

> a 33% improvement

Reducing the value from 0.20 to 0.15 is (0.20 − 0.15) / 0.20 = 25%, not 33%; 33% results from dividing the difference by the ending value. The current percentage conflicts with the stated endpoints and can make the reader doubt the accuracy of the other quantitative claims.

**How to change it:** Replace “a 33% improvement” with “a 25% reduction.” Keep “reduction” rather than “improvement,” because the quantity being reduced is forecast error.

*raised by content, narrative, wording · costs saves 1 word*

### The forecast-error bullet does not name the error measure or the model that received the added features and loss.

> Cut forecast error from 0.20 to 0.15

A technical reader cannot tell whether 0.20 and 0.15 are QLIKE, MAE, RMSE, or another metric, so the size and meaning of the change are difficult to judge. The line also does not say whether the additions modified the temporal-convolutional model, a baseline, or another setup.

**How to change it:** Replace “forecast error” with [the exact error metric], retain the from-to values, and identify [the model or baseline modified] immediately before “by adding realized-volatility features and an asymmetric loss.”

*raised by content · costs about 5 words to add*

### The directional hit-rate increase is 6 percentage points, not 6 percent.

> by 6%

The endpoints rise from 52% to 58%, which is a six-percentage-point increase; expressed as a relative increase, it is approximately 11.5%. Calling it “6%” can make readers interpret the result as a relative change and misread the size of the improvement.

**How to change it:** Replace “improved the model’s directional hit rate by 6%” with “improved the model’s directional hit rate by 6 percentage points, from 52% to 58%.” If a relative percentage is preferred, use approximately 11.5% instead.

*raised by content, narrative, wording · costs about 2 words to add*

### The third volatility-study bullet repeats the temporal-convolutional model description from the preceding bullet.

> with a temporal convolutional model

The preceding bullet already establishes the model context, so repeating it spends words on setup rather than adding distinct evidence. The repeated wording also contributes to the project’s broader pattern of multiple closely related performance claims.

**How to change it:** Cut “with a temporal convolutional model” from this bullet and use the saved space for [distinct methodological detail], or retain the stronger of the overlapping performance claims and use the other bullet for a different contribution.

*raised by wording · costs saves about 6 words*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The competition result repeats itself by giving both the precise rank and a less precise top-2% description.

> finishing in the top 2%

“Placed 41st of 2,900 teams” already communicates the result more precisely than “finishing in the top 2%.” Keeping both spends words on the same evidence rather than on the modeling work or its outcome.

**How to change it:** Keep “Placed 41st of 2,900 teams” and remove “finishing in the top 2% of the private leaderboard.”

*raised by wording · costs saves about 8 words*

### The validation bullet leads with a technical condition and does not define what the 0.02 gap measures or how it changed.

> Cut validation leakage

A recruiter may understand that leakage is undesirable but still cannot see what became more trustworthy or useful after the fold change. Without the score metric and before-and-after gap, the numerical result is difficult to interpret or compare.

**How to change it:** Lead with “Closed a 0.02 gap between local validation and leaderboard scores by switching to time-grouped folds.” Then specify [the score metric] and, if available, replace the single 0.02 figure with [the original gap and final gap]; add [the decision or model-selection outcome that became more reliable] only if the candidate has that fact.

*raised by content, wording · costs about 8 words to add*

## Across the whole résumé

### The résumé does not explain the candidate’s primary status or activity between August 2021 and June 2025.

> Aug 2021

The dates leave a visible gap after the Graduate Research Assistant role, while the 2023 competition and 2024 project only partially account for that period. A reader may wonder whether important work, study, or employment is missing, which weakens confidence in the career timeline.

**How to change it:** Add the candidate’s primary status or activity for the gap period, using [the relevant degree, research, employment, or other activity and its dates]. If the competition and independent study were the main activities, make their role in that period explicit rather than leaving them to imply it.

*raised by narrative · costs about 8 words to add*

### The résumé needs a short summary that connects the Statistics Ph.D., statistical-learning research, quantitative-finance internship, and volatility-forecasting work.

> Ph.D. candidate in Statistics

Those experiences currently appear as separate entries, so a recruiter must infer the quantitative-research narrative for themselves. A summary would make the candidate’s direction legible before the reader reaches the detailed evidence and would prevent the bakery role from becoming an early framing point.

**How to change it:** Add a two-line summary before Education that states the candidate’s Statistics Ph.D. focus and connects [the statistical-learning research, quantitative-finance internship, and volatility-forecasting work].

*raised by narrative · costs about 25 words to add*

### The Methods skills heading contains a spelling error.

> econometircs

The misspelled technical term is immediately visible to a recruiter screening for quantitative skills. It creates an avoidable impression of carelessness in a résumé whose work depends on technical precision.

**How to change it:** Replace “econometircs” with “econometrics.”

*raised by narrative · costs no words*

## Set aside (20)

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e0:b0: "keeping the store within its weekly labour budget" gives a benchmark but not a concrete measure of how closely the budget was met.
- s2:e2:b2: "Taught weekly recitations for 60 students in graduate probability" describes the responsibility, while "earning a 4.8/5 teaching rating" measures satisfaction rather than the educational result.
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" lists additional responsibilities without saying what changed because of them.
- s2:e1:b3: "the team reused in two later projects" shows adoption but not what changed because the feature store existed.
- s2:e1:b5: "for future interns" identifies the intended audience but not the benefit of the documentation. (and 1 more like it)
- s2:e0:b0, s2:e0:b1: "Managed" and "keeping" are past-tense verbs even though the role is listed as current; use present tense: "Manage opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget." (and 1 more like it)
- s2:e0:b1: "Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production" puts the measurable result after the methods; lead with the result: "Cut unsold bread from 12% to 7% of production by running daily stock counts and supplier orders."
- s2:e1:b2: "the forecast gain" does not say what improved, while "HAR-RV" is unexplained jargon for readers outside the immediate research context. (and 1 more like it)
- s2:e1:b3: "Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store" puts a long method list before the result; lead with "Built a feature store" and move the methods after it.
- s2:e2:b0: "Built the lab’s simulation pipeline on the shared cluster" leads with the method and makes the stronger result, "cutting a 2,000-run Monte Carlo study from 3 days to 5 hours," arrive later than it should. (and 1 more like it)
- s2:e2:b1: "is now Section 3 of a paper under review at JASA" places the supporting publication detail after the technical result and can be shortened to "appearing as Section 3 of a JASA paper under review."
- s2:e2:b2: "writing 12 problem sets and earning a 4.8/5 teaching rating" makes the reader pass through supporting activities before reaching the strongest evidence of effectiveness.
- s2:e2:b3: "which was downloaded 3,000 times in its first year" places the strongest quantified outcome at the end instead of leading with it. (and 1 more like it)
- s3:e0:b2: "with a temporal convolutional model" repeats the model description from the preceding bullet and spends words restating context instead of adding new information.
- s3:e1:b1: "Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap" buries the result after the method; lead with the result: "Closed a 0.02 gap between local validation and leaderboard scores by switching to time-grouped folds."
- s3:e1:b2: "without losing validation score" is a vague claim because it does not state whether the score stayed exactly constant or give the relevant metric; specify the score or remove the phrase.
- whole resume, dates: The Experience section shows no role between the Graduate Research Assistant position ending in Aug 2021 and the Quantitative Research Internship beginning in Jun 2025; the 2023 competition and 2024-present project partially cover that period but do not explain the candidate's primary status or activity across it.
- skills: Kafka is listed under Programming, but no experience or project bullet shows Kafka being used. Add a bullet identifying its use, most naturally in the Northpeak feature-store work, or remove it from the skills section.
- s3:e0: s3:e0:b0 and s3:e0:b2 repeat: Both bullets present the same temporal-convolutional volatility model on 30 equity indices as evidence of improvement; retain the stronger metric and use the other line for distinct methodological detail. (and 1 more like it)
