# Full review: resume.pdf

**86/100** — format 100 · content 80 · wording 85 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 15 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Northpeak Capital should appear above Sunrise Bakery in EXPERIENCE so the most relevant quantitative role leads the section. *(no words)*

**Why**
The quantitative internship is more relevant to the target profile than the assistant store manager role. Leading with Sunrise Bakery makes the first impression less aligned with quantitative research and may cause a recruiter to miss the strongest evidence before reaching Northpeak.

**How to change it**
Move the Northpeak Capital entry above Sunrise Bakery.

*raised by narrative*

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Sunrise Bakery should be separated from the main quantitative experience sequence and shortened unless it explains current employment. *(saves about 20 words)*

**Why**
Its current placement makes the experience section look less focused on quantitative work. A separate Additional Experience section preserves the employment history while keeping the research narrative dominant.

**How to change it**
Move Sunrise Bakery to an Additional Experience section at the end and shorten it to one line unless the role is needed to explain current employment.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The measurable result is buried after the methods, so the bullet’s strongest evidence of impact is easy to miss. *(no words)*

**Why**
A scanning reader reaches the 12%-to-7% reduction only after two activities. That delays the proof of value and makes the line read more like a task description than an achievement.

**How to change it**
Move the reduction to the front of the bullet, then identify the stock-count and ordering work after it.

*raised by wording*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Important] The 90% return figure and one-third slippage reduction lack explicit comparison baselines. *(about 6 words to add)*

**Why**
A reader cannot tell whether 90% is relative to the unsmoothed signal, the original gross return, or another benchmark. The slippage reduction is also difficult to evaluate without its before-and-after estimates or measurement basis.

**How to change it**
Replace the two phrases with [return baseline and comparison] and [before-and-after slippage estimate], if those details are available.

*raised by content*

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] The line uses an inappropriate Diebold–Mariano procedure for comparing a model with a nested HAR-RV baseline. *(about 8 words to add)*
2. [Important] The bullet says a forecast gain was confirmed but does not state the size or consequence of that gain. *(about 5 words to add)*

**Why**
1. The usual Diebold–Mariano test has a nonstandard null distribution when one forecast model is nested within the other, so the stated significance result can be misleading. Testing 30 indices also requires an appropriate treatment of dependence and multiple testing; without it, the claim of confirmation is vulnerable to methodological challenge.
2. A hiring reader cannot judge the research contribution from “gain” alone. The test and 30-index scope are visible, but the result they supposedly confirmed is not, leaving the central outcome unevaluable.

**How to change it**
1. Replace the test description with an appropriate nested-model procedure, such as a Clark–West adjustment or suitable bootstrap, and state how dependence and multiple-index testing were handled; otherwise soften the claim to a comparison of forecast losses.
2. Replace or follow “forecast gain” with [forecast-error improvement or performance difference versus the HAR-RV baseline], if available.

*raised by content, wording*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] The feature-store bullet uses an ungrammatical participial construction that obscures the main action and result. *(no words)*
2. [Important] The feature store’s reuse is stated, but its downstream effect is not. *(about 6 words to add)*

**Why**
1. “Joining,” “deduplicating,” and “versioning” are stacked before “built,” so the reader has to reconstruct who did what. The implementation details also arrive before the feature store and its reuse, weakening the clearest evidence of ownership and impact.
2. Reuse in two later projects shows that the output was useful, but not whether it saved research time, reduced data errors, or enabled a capability. One concrete downstream benefit would make the contribution easier to judge.

**How to change it**
1. Make “built a feature store” the main clause, then move the 120-feature, deduplication, and schema-versioning details after it; retain the reuse result close to the main action.
2. Keep “reused in two later projects” and add [the single clearest time, quality, or capability benefit], if available.

*raised by wording, content*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] The daily Sharpe ratio was incorrectly annualized by multiplying it by 252. *(about 1 word to add)*
2. [Important] The annualization calculation has no reported result or comparison, and the reporting clause supplies no accomplishment. *(about 8 words to add)*

**Why**
1. Under the usual daily-return assumptions, an annualized Sharpe ratio is the daily Sharpe ratio multiplied by the square root of 252. Multiplication by 252 annualizes a mean return, not a Sharpe ratio, so the reported figure is materially misstated.
2. The reader cannot tell what annualized Sharpe value reached the desk or whether it changed a decision. “Before reporting it to the desk” describes an activity rather than a measurable contribution, so the calculation does not establish impact.

**How to change it**
1. Replace “multiplying it by 252” with “multiplying it by √252,” subject to an appropriate adjustment if daily returns are materially autocorrelated.
2. Replace the reporting clause with [what the desk used the reported figure to decide or change], and add [the resulting reported Sharpe and its comparison point]; if neither exists, remove the line.

*raised by content, wording*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Important] The onboarding result is buried after several documentation details and does not say what the documentation enabled. *(about 6 words to add)*

**Why**
A reader can see that the wiki was adopted, but not whether it reduced ramp-up time, enabled independent research, or prevented setup errors. Because the outcome appears after the assumptions and failure-regime details, the strongest evidence of influence is easy to miss.

**How to change it**
Move the onboarding result closer to the start of the bullet and replace or supplement it with [the specific onboarding outcome achieved in that week], if available.

*raised by content, wording*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Error] The first-person pronoun makes the proof claim read like prose rather than a resume bullet. *(saves about 1 word)*

**Why**
Resume bullets use compact achievement phrasing, while “my proof” introduces a personal narrative voice. That inconsistency makes the line less scan-friendly and distracts from the mathematical contribution.

**How to change it**
Delete “my” and make the proof’s relationship to the paper direct, such as by replacing “is now Section 3 of a paper” with “appears as Section 3 of a paper under review at JASA,” if accurate.

*raised by file, wording*

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Polish] The teaching rating lacks the number of respondents, so its breadth cannot be judged. *(about 3 words to add)*

**Why**
A 4.8/5 rating is more persuasive when a reader knows whether it reflects a broad class response or only a small number of evaluations. Without that context, the metric’s evidentiary weight is unclear.

**How to change it**
Add [number of respondents] immediately after the rating if available.

*raised by content*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The package release is diluted by an overloaded list of secondary duties, and its download result is too remote from the main action. *(saves about 10 words)*

**Why**
A scanning reader may not quickly distinguish the technical contribution from cluster maintenance, reading-group organization, and grading. The long intervening list also gives “which was downloaded” a distant antecedent, making the strongest result easy to miss.

**How to change it**
Keep the package release and “high-dimensional covariance estimation” together, move or cut the cluster, reading-group, and grading duties unless one has a stronger result, and place the 3,000-download result immediately after the package release.

*raised by content, wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] The QLIKE improvement is stated without the model and baseline loss values or a clear denominator. *(about 5 words to add)*

**Why**
A percentage improvement is harder to interpret when the reader cannot see the two underlying losses. Raw before-and-after values would make the comparison independently judgeable and clarify what the 7% measures against.

**How to change it**
If available, replace “by 7%” with “from [HAR-RV QLIKE loss] to [model QLIKE loss] ([relative change])” while retaining the out-of-sample context.

*raised by content*

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
[Error] The reduction from 0.20 to 0.15 is 25%, not 33%, and the error metric and comparison condition are unnamed. *(about 2 words to add)*

**Why**
The reduction is 0.05, and 0.05 divided by the original 0.20 equals 25%. The reader also cannot tell which forecast-error measure was used or whether the comparison is against a baseline, earlier model, or another evaluation condition.

**How to change it**
Replace “a 33% improvement” with “a 25% reduction,” replace “forecast error” with [name of error metric], and add “versus [baseline or prior model]” if accurate.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The increase from 52% to 58% is a 6-percentage-point increase, not a 6% improvement. *(about 3 words to add)*
2. [Important] The second bullet repeats the temporal-convolutional-model method already stated in the first bullet instead of adding distinct information. *(saves about 5 words)*

**Why**
1. The relative improvement is approximately 11.5%, calculated as 6 divided by 52. Calling it 6% can make a hiring reader interpret the change as relative rather than percentage-point, and the comparison represented by the two rates is not identified.
2. Repeating the method consumes space without explaining a new result. The line would scan more efficiently if it used that space to identify what changed because of the model or to clarify the comparison.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points” if accurate, or “an approximately 11.5% relative improvement,” and add “versus [baseline or prior model]” if that is the comparison represented by 52% and 58%.
2. Cut “with a temporal convolutional model” from this bullet; the method is already identified in the preceding bullet.

*raised by content, wording*

> Cut forecast error from 0.20 to 0.15

**Problem**
[Important] The QLIKE and forecast-error bullets repeat improved volatility-forecast performance from the same modeling approach and should be one primary achievement. *(saves about 8 words)*

**Why**
Two bullets describing the same modeling result can make the project appear to contain less distinct work. Keeping one primary achievement would give the section more room for a distinct contribution or a clearer comparison.

**How to change it**
Combine the QLIKE and forecast-error evidence into one primary achievement, retaining the stronger metric and the other only if it adds a genuinely distinct evaluation result.

*raised by narrative*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Polish] The competition bullet repeats the same ranking outcome in both absolute and percentile form. *(saves about 5 words)*

**Why**
“41st of 2,900” already establishes a top-ranking result, so “top 2%” adds little new information. The saved space could highlight the ensemble or another distinct contribution.

**How to change it**
Keep either “Placed 41st of 2,900 teams” or “finished in the top 2%,” and use the freed space for a distinct result if available.

*raised by wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The wording claims that leakage was cut even though the stated result only establishes closer agreement between validation and leaderboard scores. *(about 2 words to add)*
2. [Important] The 0.02 validation-to-leaderboard gap does not identify the score metric or its units. *(about 2 words to add)*

**Why**
1. The 0.02 gap could also reflect distribution shift, model-selection overfitting, leaderboard noise, or other differences between the validation and private test sets. Time-grouped folds can reduce temporal leakage, but the bullet gives no diagnostic showing that leakage caused the original gap or that the new folds removed it.
2. The reader can see that the discrepancy changed but cannot interpret what 0.02 represents or how large it is. Naming the metric would make the result more credible without requiring a longer explanation.

**How to change it**
1. Replace the causal claim with “Switched to time-grouped folds, eliminating the 0.02 gap between local validation and leaderboard scores”; claim reduced leakage only if a timestamp and feature-availability audit or controlled temporal-fold comparison established it.
2. Replace “0.02 gap” with “0.02 [validation-metric units] gap”; if accurate and available, use the before-and-after scores instead.

*raised by content*

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] The phrase “without losing validation score” does not name the score or the tolerance for preservation. *(about 2 words to add)*

**Why**
A reader can understand that performance was maintained but cannot judge which validation result was preserved. Naming the metric or giving a compact before-and-after value would make the claim more defensible.

**How to change it**
Replace “validation score” with [validation metric] and, if accurate and available, add the before-and-after score or allowed change.

*raised by content*

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.” *(no words)*

**Why**
A spelling error in a named quantitative field can undermine confidence in the care taken with technical details. It also makes the skill harder to find in keyword screening.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

> Kafka

**Problem**
[Polish] Kafka is listed under Programming but is not connected to any work in the résumé. *(about 1 word to add)*

**Why**
A reader expects a listed tool to be supported by an entry or bullet. Without that connection, Kafka can look unsubstantiated and the feature-store work appears not to demonstrate the skill.

**How to change it**
If Kafka was used in the Northpeak feature-store work or another project, mention it in that entry; otherwise remove it from Programming.

*raised by narrative*

## Already working

- s2:e1:b0: Gives a directly comparable baseline and result: Sharpe 1.1 to 1.5.

## Set aside (4)

- s2:e0:b0, s2:e0:b1: The phrase "within its weekly labour budget" does not show the budget amount or the actual variance. (and 3 more like it)
- s2:e1:b2: The phrase "with standard Diebold-Mariano tests across the 30 indices" identifies the test and scope but not its result.
- s2:e2:b1: The phrase "tightens the previous bound by a log factor" does not identify the precise prior bound or the comparison represented by the log factor.
- s3:e0:b2: "with a temporal convolutional model" identifies the model but not what changed because of using it.
