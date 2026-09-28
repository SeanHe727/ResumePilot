# Full review: resume.pdf

**87/100** — format 100 · content 81 · wording 84 · narrative 69

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 8 important, 1 polish. Errors are marked [Error]; fix those first.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold-Mariano inference does not validly confirm a forecast gain in a nested-model comparison. *(about 3 words, plus any method and adjustment details)*
2. [Important] The line does not give the size of the forecast gain or the outcome of the tests. *(about 4 words, plus [forecast-error change and test result])*

**Why**
1. Standard DM tests can have incorrect size for nested forecasts, so the test named here does not by itself establish a gain. Testing across 30 indices also does not establish a gain across the set unless the inference accounts for multiple comparisons.
2. A reader can see that a comparison was made, but cannot judge the size of the claimed advantage. Naming the test and the number of indices does not show its result.

**How to change it**
1. If used, name the nested-model-appropriate inference method and any multiple-testing adjustment actually applied; otherwise soften the confirmation claim.
2. Replace “Confirmed the forecast gain” with the measured forecast-error improvement versus the nested HAR-RV baseline and its test outcome [forecast-error change and test result]; keep the test and index count as supporting context.

*raised by content*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] The opening participial phrase dangles instead of clearly connecting the feature-joining actions to building the store. *(no words)*
2. [Important] The reuse outcome comes after several implementation details, making the clearest evidence of value easy to miss. *(no words)*

**Why**
1. As written, the phrase beginning “Joining” appears to modify an unstated actor, while “built” introduces a different subject. A reader may have to pause to work out who did the joining and deduplication.
2. A scanning reader may not reach the adoption result before moving on. The implementation details are useful, but leading with reuse would make the feature store’s value more visible.

**How to change it**
1. Change the opening to “Built a feature store by joining...” and retain the relevant deduplication and schema-versioning details.
2. Move “the team reused in two later projects” to the front, then keep only the one or two implementation details that best explain the reusable feature store.

*raised by wording, content*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
[Error] Multiplying the daily Sharpe ratio by 252 does not correctly annualize it. *(no words)*

**Why**
The usual annualization for daily returns multiplies the daily Sharpe ratio by √252, not 252. That scaling assumes daily returns are sufficiently uncorrelated; serial correlation requires an annualization that accounts for it.

**How to change it**
Replace “252” with “√252” if the uncorrelated-returns assumption holds; otherwise use an annualization that accounts for serial correlation.

*raised by content*

> Documented the backtest assumptions

**Problem**
[Important] The feature-store, annualization, and onboarding details pull attention from the internship’s signal and trading-cost results. *(saves 17 words for the annualization line, plus any onboarding cuts)*

**Why**
The signal result, turnover improvement, and statistical validation form a clear core, but these other bullets branch away from it. The annualization bullet distracts from the research narrative, and the onboarding detail is less central.

**How to change it**
Remove the annualization bullet and shorten or cut the onboarding detail.

*raised by narrative*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
[Important] “The previous bound” does not identify the comparator or setting for the log-factor improvement. *(about 3 words, plus [specific comparator or setting])*

**Why**
The log-factor tightening is the central evidence of the contribution, but a reader cannot place its significance without knowing which bound or setting anchors the comparison. The claim is therefore hard to assess.

**How to change it**
Name the prior bound or the problem setting in which the improvement holds: [specific comparator or setting].

*raised by content*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The estimator result is the strongest research contribution, but the package, cluster, teaching, and course duties read as a mixed task list. *(no words if moved; any duty cuts save words)*

**Why**
The list of duties separates the package’s adoption evidence from the release, so a scanning reader may miss the result or its connection to the package. The strongest research contribution also risks being overshadowed by routine responsibilities.

**How to change it**
Lead with the estimator result; move the download phrase directly after “open-source R package,” and separate the package achievement from the bundled routine duties by trimming or relocating them.

*raised by narrative, content, wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The stated 33% improvement is wrong: a decrease from 0.20 to 0.15 is a 25% reduction. *(no words)*
2. [Important] The line does not name the forecast-error metric or say what the 0.20 value represents. *(about 3 words, plus [error metric] and [comparison model or prior version])*

**Why**
1. The decrease is 0.05. Relative to the original error of 0.20, that is a 25% reduction, not 33%, so the stated improvement overstates the change.
2. Without the metric, a reader cannot interpret what the values measure. Without the comparison context, it is hard to tell what changed.

**How to change it**
1. Change “33%” to “25%” (or describe it as “a decrease of 0.05”).
2. Replace “forecast error” with [error metric], and clarify what the 0.20 value represents, such as [comparison model or prior version], if accurate.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The hit rate rose by 6 percentage points, not 6% relative to its original value. *(adds 1 word)*
2. [Polish] The temporal convolutional model detail repeats information from the first bullet and adds little here. *(saves 5 words)*

**Why**
1. The rate moved from 52% to 58%, a rise of 6 percentage points. Relative to the original 52% rate, the increase is about 11.5%, so “by 6%” misstates the change.
2. The first bullet already names the model type. Repeating it in this result takes space without helping the reader distinguish the contribution.

**How to change it**
1. Change “by 6%” to “by 6 percentage points”; keep the stated values “from 52% to 58%.”
2. Remove “with a temporal convolutional model.”

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] “Finishing in the top 2%” repeats the information in the rank of 41st out of 2,900. *(saves 5 words)*

**Why**
The rank already communicates the placement. The extra phrase takes space without adding information.

**How to change it**
Cut “finishing in the top 2%.”

*raised by wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The gap closing does not establish that validation leakage was reduced or that the fold change caused the closure. *(about 4 words, plus any leakage-path and comparison details)*

**Why**
Time grouping can block some temporal leakage but may leave other leakage paths open. The validation-to-leaderboard gap can also change because of sampling variation, distribution shift, or evaluation differences.

**How to change it**
If a controlled comparison supports the causal claim, specify the leakage path and comparison; otherwise describe the fold change and observed 0.02 gap closure without attributing the closure to reduced leakage.

*raised by content*

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.” *(no words)*

**Why**
The misspelling is visible in a skills line that should make methods expertise easy to scan. It can distract a reader from the skills themselves.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

## Already working

- s2:e0:b0: Leads with a concrete performance change and gives the reader the comparison and backtest context needed to interpret it.
- s2:e0:b1: Connects a trading-cost improvement to the performance retained, making the trade-off clear.
- s3:e0:b0: Pairs a quantified outcome with an explicit out-of-sample baseline comparison.

## Set aside (7)

- s2:e0:b4: “before reporting it to the desk” describes a reporting endpoint, not what the work changed or enabled. (and 1 more like it)
- s2:e1:b0, s2:e0:b5: “the reproducibility checks other students relied on” does not explain what those checks enabled or prevented. (and 1 more like it)
- s2:e1:b2: “earning a 4.8/5 teaching rating” gives no indication of how many student responses produced the rating.
- s3:e0:b2: “from 52% to 58%” does not identify what the 52% hit rate represents.
- s3:e1:b1: “a 0.02 gap between local validation and leaderboard scores” does not identify the metric or what scale the gap uses.
- whole resume, dates: The dates show an eight-month gap from May 2020, when the B.S. ended, to February 2021, when the Research Assistant role began.
- s2:e1:b0: “Owned” frames the work as responsibility rather than naming the actions taken on the pipeline and checks.
