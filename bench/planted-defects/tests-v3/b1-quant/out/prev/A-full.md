# Full review: resume.pdf

**88/100** — format 100 · content 83 · wording 85 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 20 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The feature-store result is hidden after a long sequence of implementation details. *(no words)*

**Why**
A scanning reader may reach the joining, deduplication and versioning details before seeing that the delivered feature store was reused in two later projects. The strongest evidence of usefulness therefore has less impact than the technical process.

**How to change it**
Move “built a feature store the team reused in two later projects” to the start of the bullet, then retain only the most telling implementation details.

*raised by content, wording*

> Sunrise Bakery

**Problem**
[Important] Sunrise Bakery appears before the quantitative roles, making retail look like the candidate's primary direction. *(no words)*

**Why**
The first experience entry receives the strongest initial attention, so a recruiter seeking quantitative research or modeling experience may misread the candidate's trajectory. The relevant Northpeak, research-assistant and project work should establish that direction first.

**How to change it**
Move Sunrise Bakery below the quantitative roles, or reduce it to a one-line Additional Experience entry.

*raised by narrative*

> Volatility Forecasting Study

**Problem**
[Important] The quantitative projects are separated from Northpeak Capital instead of reinforcing the visible research and modeling trajectory. *(no words)*

**Why**
Putting the projects later makes the page's strongest technical evidence less immediate after the quantitative internship. A recruiter can more quickly connect the projects to the research experience when they appear together.

**How to change it**
Place the quantitative projects directly after Northpeak Capital and before the shortened bakery entry.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] “Within its weekly labour budget” does not show how closely labour spending matched the budget. *(about 3 words to add, plus [the figure])*

**Why**
A hiring manager can see responsibility for labour control but cannot tell whether the result was marginal or substantial. One concrete comparison would make the claim more credible without adding much space.

**How to change it**
Replace or follow the phrase with [weekly labour spend compared with the budget, or the budget variance].

*raised by content, wording*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] “Ran daily stock counts and supplier orders” does not say what changed in the ordering process and makes supplier orders sound counted rather than placed. *(about 2 words to add, plus [the detail])*

**Why**
The reduction in unsold bread is strong, but a reader cannot tell whether it came from demand forecasting, changed order quantities, changed timing or another inventory decision. The grammatical ambiguity also weakens the connection between the activity and the result.

**How to change it**
Replace “supplier orders” with “placed supplier orders” and add [the specific ordering or forecasting change you introduced], if accurate.

*raised by content, wording*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Important] “Keeping 90% of gross returns” does not identify the return measure or comparison behind the retention figure. *(about 3 words to add, plus [the comparison])*

**Why**
A reader cannot tell whether the 90% is relative to the unsmoothed signal, the original strategy or another return measure. That makes the smoother's performance tradeoff open to interpretation despite the otherwise useful turnover and slippage figures.

**How to change it**
Replace the phrase with [the return measure retained versus the unsmoothed signal], if that is the intended comparison.

*raised by content*

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold–Mariano tests do not by themselves validly confirm a forecast gain against a nested HAR-RV model across 30 indices. *(about 2 words to add, plus any figure)*
2. [Important] The bullet says the forecast gain was confirmed without stating how large the gain was or what changed. *(about 4 words to add, plus [the figure])*
3. “Nested HAR-RV baseline” and “Diebold-Mariano tests” obscure the plain-language result for a general reader. *(no words)*

**Why**
1. The standard test has a nonstandard null distribution for nested forecast models, and testing 30 indices also creates a multiple-comparisons problem. A quantitative reader may therefore doubt the statistical confirmation even if the underlying forecast result is strong.
2. A reader can see that the result was tested but cannot judge the value of the forecast improvement from this line alone. The test provides evidence for a result; it does not replace the result itself.
3. The technical labels may be meaningful to a specialist but make the bullet harder to scan for a broader hiring audience. The reader may focus on decoding the methods rather than noticing what improved.

**How to change it**
1. Replace the standard tests with a nested-model-appropriate procedure such as a Clark-West adjustment or suitable bootstrap, with an appropriate multiple-testing correction; otherwise replace “confirmed” with “compared.”
2. Add [the forecast-improvement figure or statistical result, measured against the HAR-RV baseline] immediately after “forecast gain.”
3. Keep the technical terms if they are important for the target role, but state [the forecast result] before the method and test details.

*raised by content, wording*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] The construction “Joining 120 microstructure features ... built” is grammatically incorrect and leaves the subject of the work unclear. *(about 1 word to add)*

**Why**
The opening participial phrase does not attach cleanly to the candidate, so the reader must work to understand who joined, deduplicated, versioned and built what. The compressed sequence also obscures the delivered feature store.

**How to change it**
Replace the opening construction with a direct subject-and-verb construction, such as “Built a feature store by joining 120 microstructure features ...,” and retain only the most telling implementation details.

*raised by wording*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] The daily Sharpe ratio was annualized with the wrong factor: daily Sharpe ratios scale by the square root of time, not by 252. *(saves about 3 words if the reporting phrase is removed)*
2. [Important] Multiplying the daily Sharpe ratio by 252 provides no performance comparison, validation result or downstream measure. *(saves about 10 words if the bullet is removed)*

**Why**
1. Under the usual independent daily-return assumption, multiplying by 252 overstates the annualized Sharpe ratio by approximately 15.9 times. This is a technical error in a performance metric that a quantitative-research reader is likely to catch immediately.
2. The number describes how the metric was presented rather than what the analysis demonstrated. Reporting a correctly annualized figure is still administrative unless it supported a research conclusion or desk decision.

**How to change it**
1. Replace “252” with “√252” and remove or replace the reporting action if it did not lead to a substantive decision or conclusion.
2. Replace the calculation and reporting detail with [the desk decision or research conclusion enabled by the analysis], if one exists; otherwise remove the bullet.

*raised by content, wording*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
1. [Important] The wiki's onboarding use is stated without showing what improvement it produced. *(about 4 words to add, plus [the comparison])*
2. The result that the wiki enabled faster onboarding is placed at the end after several documentation details. *(no words)*

**Why**
1. A reader can infer that the documentation was useful but cannot tell whether it reduced onboarding time, prevented errors or simply existed during that week. One comparison would make the operational value more convincing.
2. A scanning reader may miss the operational impact before reaching the end of the bullet. Leading with the onboarding result would make the documentation contribution more visible.

**How to change it**
1. Replace or supplement “in their first week” with [the onboarding improvement measured against the previous process], if that comparison is known.
2. Move the onboarding result to the start of the bullet, then retain only the most important documentation details.

*raised by content, wording*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Error] A seed and configuration file alone do not guarantee that every shared-cluster run is reproducible. *(about 8 words to add, or saves about 8 words if removed)*

**Why**
Changed code or dependencies, inputs, random-number stream assignment, parallel reduction order, hardware or floating-point behavior can change results. The current wording makes a guarantee broader than the controls named in the bullet.

**How to change it**
Say that every run was reproducible when the code version, software environment, inputs, random-number settings and execution configuration were fixed or recorded; if those controls were not in place, remove or soften the reproducibility claim.

*raised by content*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Error] The phrase “my proof” violates the résumé's phrase-style bullet format. *(no words)*
2. [Important] The bound improvement is stated without the exact old-versus-new bound or asymptotic comparison. *(about 3 words to add, plus [the comparison])*
3. The phrase “is now Section 3 of a paper” is awkward and makes the publication status harder to scan. *(about 2 words to add)*

**Why**
1. The personal pronoun makes this bullet read like prose rather than the other résumé lines. It also puts attention on ownership wording instead of the proof's result.
2. A research reader can see that the result is stronger but cannot quickly judge what “by a log factor” means mathematically. A precise comparison would make the proof contribution more credible.
3. Readers must parse the section placement before understanding that the work is in a paper under review. The result and status would be clearer if the section reference and review status were expressed directly.

**How to change it**
1. Replace “my proof” with “the proof” and replace “is now Section 3 of a paper” with the more scannable publication-status wording [if accurate].
2. Replace or supplement “by a log factor” with [the exact prior and new bound, or the precise asymptotic improvement], if accurate.
3. Replace the phrase with “included as Section 3 in a paper under review at JASA,” if accurate.

*raised by file, wording, content*

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Important] The teaching bullet describes recitations and problem sets without showing the instructional method or learning result. *(about 4 words to add, plus [the detail])*

**Why**
A reader can see the volume of teaching but not what the candidate did in the classroom beyond delivering sessions and preparing materials. One concrete method or documented student outcome would make the teaching skill more distinctive.

**How to change it**
Replace or supplement the activity description with [one concrete instructional method or documented student-learning outcome], if accurate.

*raised by content*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The final bullet bundles the package, cluster, reading group and grading into an unordered task list. *(saves about 8 words if one duty is removed)*
2. [Important] The R package is named without indicating the distinctive technical work implemented inside it. *(about 3 words to add, plus [the detail])*
3. [Important] The package's 3,000-download result is grammatically separated from the product it measures. *(no words)*

**Why**
1. The package has a visible outcome, but the other responsibilities read as duties without showing what changed because of them. Combining them also hides the strongest result and makes the bullet harder to scan.
2. The R and covariance-estimation terms establish a topic but not the candidate's analytical or engineering contribution. A technical reader has little basis for judging what the package actually demonstrates.
3. The intervening list of responsibilities makes “which” slightly ambiguous, so a scanning reader may not immediately connect the metric to the R package. Direct attribution would make the strongest result easier to use.

**How to change it**
1. Keep the package contribution and its download result together, move “downloaded 3,000 times in its first year” directly after the package description, and replace one of the other duty descriptions with [the most concrete outcome it produced], if available.
2. Add [the single most technically distinctive method, algorithm or validation feature implemented in the package], if accurate.
3. Move “downloaded 3,000 times in its first year” directly after the R package description, or replace “which” with “[the package]” if accurate.

*raised by content, wording, narrative*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is a 25% reduction, not a 33% improvement. *(no words)*
2. [Important] “Forecast error” does not identify the metric that changed from 0.20 to 0.15. *(about 1 word to add, plus [the metric])*
3. [Important] The second volatility-study bullet repeats “adding realized-volatility features” without showing that it was a separate experiment. *(saves about 3 words if deleted)*

**Why**
1. The absolute reduction is 0.05, and 0.05 divided by the original 0.20 equals 25%. The stated percentage is mathematically inconsistent with the reported values and can undermine confidence in the rest of the quantitative claims.
2. A forecasting reader cannot tell whether the values are MAE, RMSE, MSE or another measure. Without the metric, the improvement is harder to interpret and compare with the QLIKE result in the preceding bullet.
3. The preceding bullet already presents the model as trained on realized-volatility features, so a reader may see this as duplicated method rather than a distinct contribution. The repetition uses space without clarifying what produced the 0.20-to-0.15 result.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with the specific metric, such as “[MAE]” or “[RMSE]” if accurate, while retaining the existing values and corrected percentage.
3. Delete “adding realized-volatility features” or distinguish the separate experiment, if it was one.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
[Error] The change from 52% to 58% is an increase of 6 percentage points, not 6%. *(about 1 word to add)*

**Why**
A relative percentage increase would be approximately 11.5% over the original 52% hit rate. Using “6%” leaves readers unsure whether the line means percentage points or relative improvement.

**How to change it**
Replace “by 6%” with “by 6 percentage points,” or remove the change phrase and retain “from 52% to 58%.”

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The competition placement and top-2% statement communicate nearly the same result. *(saves about 6 words)*

**Why**
Both figures establish relative ranking, so retaining both uses space without adding a distinct accomplishment. The saved words could support a method, metric or result that differentiates the modeling work.

**How to change it**
Keep either “41st of 2,900 teams” or “top 2% of the private leaderboard,” not both.

*raised by wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 gap is not identified by metric or described with a clear before-and-after comparison. *(about 2 words to add, plus [the metric and values])*
2. [Important] “Cut validation leakage” is abstract, and the measurable score-gap reduction is buried after the method. *(no words)*

**Why**
1. A reader cannot tell whether 0.02 means score points, a percentage or another measure, nor whether it is the original or remaining gap. That makes the effect of time-grouped folds difficult to judge.
2. A scanning reader may miss that the main result was a 0.02 change between local validation and the leaderboard. Leading with the outcome would make the competition result more direct and persuasive.

**How to change it**
1. Name the score metric and clarify the comparison, such as reducing the [metric] gap from [before value] to [after value], or eliminating a [metric] gap of 0.02.
2. Lead with the 0.02 [metric] gap reduction, then state that time-grouped folds produced it; replace “validation leakage” with the specific score-comparison language if accurate.

*raised by content, wording*

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] “Without losing validation score” does not name the metric or state the comparison with the 900-feature model. *(about 3 words to add, plus [the metric and comparison])*

**Why**
The reader can see that features were removed but cannot tell how the 300-feature model performed relative to the original 900-feature version. Naming the metric and baseline would make the no-drop claim defensible.

**How to change it**
Replace or supplement the phrase with the relevant [validation metric] and its comparison to the 900-feature baseline, using [the metric value or change] if available.

*raised by content, wording*

## Already working

- s3:e0:b0: Leads with a directly comparable result rather than a description of activity.

## Set aside (7)

- skills: Kafka is listed under Programming, but no entry mentions or clearly indicates its use; a reader would expect it in the Northpeak Capital feature-store work or another bullet.
- s2:e2:b1: The phrase "is now Section 3 of a paper" is awkward and makes the publication status harder to scan.
- s2:e1:b0: "desk book’s Sharpe ratio" is awkward and makes the ownership of the performance measure less immediately clear.
- s2:e1:b2: "Nested HAR-RV baseline" and "Diebold-Mariano tests" are dense technical labels that obscure the plain-language result for a general reader.
- s2:e1:b3: The sequence of joining, deduplicating, versioning, and building is compressed into one opening phrase, so the reader must work to identify what was actually delivered.
- s2:e1:b5: The result that the wiki enabled faster onboarding is placed at the end after three documentation items, weakening its visibility during a quick scan.
- skills: econometircs in the Methods skills line; correct spelling: econometrics.
