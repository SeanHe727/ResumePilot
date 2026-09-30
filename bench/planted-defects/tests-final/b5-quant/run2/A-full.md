# Full review: resume.pdf

**83/100** — format 100 · content 72 · wording 76 · narrative 83

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 10 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998 | Nationality: Indian

**Problem**
[Error] The personal details listed are not appropriate to include as résumé content. *(saves 8 words)*

**Why**
Date of birth and nationality are details a reader is not meant to weigh when assessing the candidate. Including them gives space to information unrelated to the qualifications presented.

**How to change it**
Remove the date of birth and nationality.

*raised by file*

> raised the desk book’s Sharpe ratio from 1.1 to 1.5; Added 0.4 to the Sharpe ratio

**Problem**
[Error] The Northpeak and Kaggle bullets appear to assign the same order-book imbalance Sharpe result to different entries and periods. *(no words if moved; about 5 words if distinguished)*

**Why**
The Northpeak bullet reports a change from 1.1 to 1.5 over 18 months out of sample, while the Kaggle bullet reports a 0.4 gain over 18 months out of sample. A reader may wonder whether this is one achievement attributed to two projects or two genuinely distinct results, which can undermine confidence in both entries.

**How to change it**
Keep the result under the entry that owns it, or distinguish the signals and results so both accounts can be true [with their separate periods and figures, if accurate].

*raised by narrative*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement has no stated comparison or measurement period. *(about 8 words)*

**Why**
Without a baseline, a reader cannot tell what the percentage measures. Without a period, they cannot judge which performance window supports the claim.

**How to change it**
Add the comparison and period, such as [35% relative to the unsmoothed signal over the backtest period], if accurate.

*raised by content*

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not guarantee that every backtest decision used only information available at the time. *(saves about 9 words)*
2. [Important] “Validated the signal” does not state what the validation found. *(about 5 words)*

**Why**
1. These methods can reduce leakage between training and test periods, but they do not establish that the underlying data, features, or execution assumptions were point-in-time accurate. The sentence claims a guarantee that the split methods alone cannot support.
2. The line describes a rigorous test but gives no result that lets a reader judge whether the signal performed well enough to matter. Adding the finding and its comparison would make the validation’s value assessable.

**How to change it**
1. Replace the guarantee with a statement that the splits and embargo reduced leakage. Keep a point-in-time guarantee only if data and decision timestamps were separately verified; otherwise cut the trailing clause.
2. Add the key out-of-sample result and comparison, such as [performance metric versus the desk’s benchmark].

*raised by content, wording*

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The approval result is buried in a relative clause. *(no words)*

**Why**
A reader encounters the presentation before learning its outcome, so the bullet’s result is easy to miss. Stating the approval directly after the presentation makes the consequence of the work clearer.

**How to change it**
Move “approved a small live allocation for the next quarter” out of the “who” clause and state it directly after the presentation.

*raised by wording*

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe selected from 400 backtested configurations is not an unbiased estimate of expected live Sharpe. *(no words)*

**Why**
Selecting the highest Sharpe across many configurations tends to select a result that benefited from backtest noise. Calling that result an expected live Sharpe makes the estimate sound more reliable than the selection process supports.

**How to change it**
Replace “expected live Sharpe” with “best backtested Sharpe.” Keep a live expectation only if it came from an independent or appropriately selection-adjusted estimate, and name that method if used.

*raised by content*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Important] Using the same random seed on every worker ordinarily gives the workers identical random-number sequences, so the runs may be duplicates rather than distinct Monte Carlo replications. *(about 5 words added if clarifying the streams)*

**Why**
Duplicate runs can undermine the study’s estimates and uncertainty assessments, even if parallel execution reduced its runtime. A common master seed is appropriate only if it was used to assign workers distinct streams or substreams, which the bullet does not specify.

**How to change it**
If workers used distinct streams or substreams derived from a common seed, say so; otherwise remove the same-seed claim and report only runs and runtime that were valid.

*raised by content*

> Taught weekly recitations for 60 students in graduate probability and writes the problem sets, earning a 4.8/5 teaching rating.

**Problem**
[Error] “Taught” is past tense, but “writes” is present tense for a role that ended in August 2021. *(no words)*

**Why**
The tense change makes it unclear whether writing problem sets was part of the completed role or is ongoing. That ambiguity can make the work history seem inconsistent.

**How to change it**
Change “writes” to “wrote” to match “Taught” and the role’s end date.

*raised by wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The forecast gain is not interpretable without its benchmark or size. *(about 7 words)*
2. [Important] The significant result is buried after the testing method and correction. *(no words)*

**Why**
1. The significance test indicates that a difference was detected, but the reader cannot tell which forecasts were compared or whether the improvement mattered in practice. Naming the benchmark and metric would make the result assessable.
2. Readers encounter the testing details before the main finding, which makes the result harder to scan. Leading with the outcome puts the strongest evidence first while preserving the supporting methods.

**How to change it**
1. Add [the forecast metric and benchmark] and, if available, [the measured gain versus that benchmark].
2. Move the result clause beginning “after a Holm correction” to the start of the bullet, then give the test and correction.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The feature engineering and model training are described without an outcome. *(about 8 words)*

**Why**
A reader cannot tell whether the approach improved the competition result or otherwise changed the outcome. A result with a comparison would make the contribution assessable.

**How to change it**
Add the competition outcome and its comparison, such as [score or rank improvement versus baseline or prior model].

*raised by content*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The stated score-gap change does not establish that validation leakage was reduced or that the fold change caused the gap to close. *(about 2 words)*
2. [Important] The 0.02 score gap lacks the metric and does not say whether it is an absolute or relative difference. *(about 4 words)*

**Why**
1. Time-grouped folds can reduce leakage, but a change in the score gap can have other causes. As written, the result supports a change in the gap, not a measured reduction in leakage.
2. Without that context, a reader cannot interpret the size of the gap or understand what was brought into alignment. Naming the metric and gap basis makes the evidence usable.

**How to change it**
1. If leakage was independently demonstrated, name the diagnostic; otherwise say that switching to time-grouped folds closed the 0.02 score gap, without claiming it cut leakage.
2. Specify the competition metric and gap basis as [metric] and [absolute or relative difference], if accurate.

*raised by content*

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
[Important] The 0.4 Sharpe gain is presented as established, but the stated 18-month test alone does not establish that the estimate is reliable. *(about 3 words added if qualified)*

**Why**
Sharpe estimates can be noisy, and the line does not say whether the test was untouched, whether the result was selected after repeated testing, or whether realistic costs were included. The gain may be real, but the stated test duration is not enough to show that.

**How to change it**
If the test was untouched and the estimate is reliable, state how the 0.4 gain was calculated and validated; otherwise describe it as an observed out-of-sample estimate or remove the gain.

*raised by content*

## Already working

- s2:e0:b2: Connects a technical deliverable to later research-team reuse.
- s2:e1:b3: Shows adoption with a quantified first-year download count.

## Set aside (15)

- s2:e0:b4: “reported the best one’s Sharpe” names a metric but omits the Sharpe value being reported.
- s3:e0:b0: “delivered robust, actionable insights” does not specify what the study found or what made the insights actionable.
- s3:e0:b0: “a data-driven, research-first approach to volatility modeling” does not identify the modeling approach. (and 1 more like it)
- s2:e1:b1: “tightens the previous bound by a log factor” does not specify the exact logarithmic comparison.
- s2:e1:b1: “Derived a variance bound for a sparse regression estimator” does not say how the bound was derived.
- s2:e1:b2: “earning a 4.8/5 teaching rating” does not say where the rating came from or how many students provided it.
- s3:e1:b2: “Added 0.4 to the Sharpe ratio” gives a change but does not say what the futures book was compared against.
- s2:e1:b0: “running the runs” is repetitive and makes the method clumsy to read.
- s3:e0:b2: “Which was presented” uses passive voice and does not say whether the candidate presented the paper.
- s2:e0:b4: “reported the best one’s Sharpe as the expected live Sharpe” puts the result after the method and “expected live Sharpe” can imply an estimate is a realized result.
- s2:e0:b5: “for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs” delays the central result; lead with the Sharpe improvement and then give the signal and evaluation context.
- s3:e1:b0: “for a market prediction competition” repeats the heading and uses space without adding detail.
- s3:e1:b1: “which closed” delays the quantified result; putting the gap directly after the method would make the line scan faster.
- s3:e1:b2: “tested over 18 months out of sample” is an awkwardly placed test detail that interrupts the result-to-method flow.
- whole resume, dates: The dates show eight months with no study or work listed, from May 2020 to February 2021.
