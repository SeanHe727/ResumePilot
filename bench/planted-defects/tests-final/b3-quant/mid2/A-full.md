# Full review: resume.pdf

**87/100** — format 100 · content 82 · wording 80 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 10 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Northpeak Capital | Quantitative Research Intern; Ridgeway University | Ph.D. candidate in Statistics

**Problem**
[Important] The experience section should precede education so the applied research experience leads. *(no words)*

**Why**
The Ph.D. remains important context, but the experience section provides the clearest evidence of the candidate’s current direction. Leading with experience would bring that evidence to the reader sooner.

**How to change it**
Move EXPERIENCE ahead of EDUCATION, keeping the Ph.D. in the résumé.

*raised by narrative*

> May 2020; Feb 2021

**Problem**
[Polish] The listed dates show an eight-month gap between the B.S. ending in May 2020 and the Research Assistant role beginning in February 2021. *(about 4 words)*

**Why**
A reader may wonder what happened during that period. If the time was spent on relevant work, study or another activity, omitting it leaves the timeline unexplained.

**How to change it**
If accurate, add [the relevant activity during the gap]; otherwise leave the dates as they are rather than inventing an explanation.

*raised by narrative*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
[Important] “Confirmed the forecast gain” does not state the size or clearly foreground the outcome of the comparison. *(about 5 words)*

**Why**
A reader can see that a test was used across 30 indices, but not whether the gain was small or substantial. Without its magnitude, the result is harder to assess and the key evidence is easy to miss.

**How to change it**
Replace “forecast gain” with [gain size versus the nested HAR-RV baseline, in the forecast metric], if accurate; lead with the comparison or its outcome.

*raised by content, wording*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] “Joining 120 microstructure features point-in-time” is grammatically incorrect in this construction. *(no words)*
2. [Important] The long method list delays the feature-store result. *(no words)*

**Why**
1. As written, “Joining” does not form a grammatical modifier for the features. The reader has to work out how the opening method phrase connects to the main clause.
2. The reader encounters several implementation details before learning what they produced. That makes the reusable feature store—the line’s clearest outcome—harder to scan.

**How to change it**
1. Replace the opening with “Built a feature store ... by joining 120 microstructure features point-in-time,” keeping the existing details.
2. Move “built a feature store the team reused in two later projects” to the front, then follow it with the existing details about joining features, deduplicating prints and versioning schemas.

*raised by wording*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 does not correctly annualize it. *(no words)*
2. [Polish] The reporting action is given, but the line does not say what the reported result changed or informed. *(about 4 words)*

**Why**
1. Under the usual assumption of uncorrelated daily returns, a Sharpe ratio scales by the square root of the number of periods, not by the number of periods itself. Multiplying by 252 materially overstates the annualized ratio.
2. Readers see an arithmetic and reporting task but cannot tell why it mattered to the desk. Without the annualized value or its use, the line offers little evidence of research impact.

**How to change it**
1. Replace “multiplying it by 252” with multiplying the daily Sharpe ratio by √252 under the usual assumption of uncorrelated daily returns; if daily returns are serially dependent, use an appropriate dependence-adjusted annualization.
2. Add [reported annualized Sharpe value] and, if the report informed a specific decision, [decision it informed]; otherwise consider removing the line.

*raised by content, wording*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] The onboarding clause is unnecessarily long. *(saves about 4 words)*

**Why**
The relative clause adds words after the documentation details without making the uptake clearer. A shorter phrase would make the reuse easier to scan.

**How to change it**
Replace the clause with “used by the next intern cohort for first-week onboarding.”

*raised by wording*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks other students relied on.

**Problem**
1. [Important] The simulation pipeline and reproducibility checks are described without naming what was implemented or what the checks verified. *(about 8 words)*
2. [Polish] “Owned the lab’s simulation pipeline” describes responsibility rather than an action performed. *(no words)*

**Why**
1. Readers can see that other students relied on the checks, but cannot judge what they helped verify or what changed. One concrete implementation detail and outcome would make the work easier to assess.
2. A reader learns that the pipeline was yours to oversee, but not what you did to it. That makes the technical contribution less apparent.

**How to change it**
1. Replace or supplement one general phrase with [the specific check or pipeline feature you built] and add [what the checks verified or what problem they prevented]; include [a result such as fewer failed runs or less rerun work] if available.
2. Replace “Owned” with the action you performed on the pipeline, such as “built,” “maintained” or “optimized,” if accurate.

*raised by content, wording*

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The comparison does not identify the prior bound’s rate or the setting where the log-factor improvement applies. *(about 6 words)*
2. [Important] The research contribution should lead this entry rather than follow the opening lab-duty line. *(no words)*

**Why**
1. A reader may not know what was tightened or when the improvement holds. A brief specification would make the theoretical result more interpretable without requiring a proof summary.
2. The variance-bound result and its place in a paper under review are the entry’s strongest research evidence. Leading with them would make the contribution more immediate to a reader.

**How to change it**
1. Clarify with [the prior bound’s rate or the setting in which the log-factor improvement holds], if space permits.
2. Move the variance-bound line to the first position in the entry.

*raised by content, narrative*

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Polish] The 4.8/5 teaching rating has no stated source or basis. *(about 4 words)*

**Why**
Without knowing what the rating reflects, a reader cannot interpret its significance. Naming the source is enough if it came from a recognizable course evaluation.

**How to change it**
Add [the rating source, such as student course evaluations, if accurate]; include a response count only if it helps interpret the score.

*raised by content*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package’s download result is separated from the package claim by a list of other duties. *(saves about 13 words)*
2. [Polish] The package is described by its purpose but not by its technical approach. *(about 5 words)*

**Why**
1. The 3,000-download figure is useful evidence of uptake, but readers may not immediately connect it to the package. The additional duties also crowd the achievement and make the entry read like a task list.
2. The purpose identifies the domain, but one distinctive technical detail would better show research or implementation skill. Extra method detail is useful only if it distinguishes your contribution.

**How to change it**
1. Move “which was downloaded 3,000 times in its first year” directly after “an open-source R package,” if those downloads refer to that package; cut or move the intervening duties.
2. If accurate, add [the specific estimator, algorithm or distinctive package capability] that best shows your approach.

*raised by content, wording, narrative*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The change from 0.20 to 0.15 is a 25% reduction, not a 33% improvement. *(no words)*
2. [Important] “Forecast error” does not identify the metric used for the 0.20 and 0.15 values. *(about 1 word)*

**Why**
1. The error falls by 0.05, which is 25% of the original 0.20. The stated percentage conflicts with the endpoints and makes the result appear numerically unreliable.
2. Readers cannot tell what aspect of forecast performance those values measure. Without the metric, the size and meaning of the change are harder to interpret.

**How to change it**
1. Replace “33% improvement” with “25% improvement.”
2. Replace “forecast error” with [name of forecast-error metric], if accurate.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
[Important] The change from 52% to 58% is 6 percentage points, not 6%. *(about 2 words)*

**Why**
A reader may interpret “6%” as a relative increase, while the stated endpoints describe a six-percentage-point change. The wording makes the size of the improvement ambiguous.

**How to change it**
Replace “by 6%” with “by 6 percentage points.”

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Polish] “Top 2%” repeats the result already conveyed by the 41st-place ranking. *(saves about 9 words)*

**Why**
The rank and team count already establish the competition result. Repeating it uses space that could be reserved for other evidence.

**How to change it**
Cut the phrase “finishing in the top 2% of the private leaderboard.”

*raised by wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 gap has no named score metric or units. *(about 4 words)*

**Why**
Without that context, readers cannot judge the size of the gap or interpret what closing it means. Naming the metric and whether the difference is absolute or relative would make the result easier to assess.

**How to change it**
After “0.02,” add [score metric and whether the difference is absolute or relative].

*raised by content*

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled. *(no words)*

**Why**
The typo is visible in the Methods skills line and may distract a reader from the listed skills. The correct spelling is “econometrics.”

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

## Already working

- s2:e0:b0: Connects a specific signal to a clearly measured improvement in the desk book’s performance.
- s2:e0:b1: Shows the trade-off between lower turnover and retained returns rather than presenting the turnover reduction alone.
