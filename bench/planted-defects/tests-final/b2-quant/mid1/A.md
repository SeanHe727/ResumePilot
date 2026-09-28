> Here is my resume: bench/planted-defects/tests-final/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all **5 entries with bullets** for content and wording, plus the full resume’s narrative and format. The two education entries had no bullets to review. No job-description match was run because no posting was provided.

The main changes flagged:
- **Resolve the repeated Sharpe result:** the internship and Kaggle entries appear to claim the same order-book signal result, despite different project dates. Clarify whether they refer to one achievement or distinct results.
- **Clarify or qualify research claims:** specify the comparison behind the internship’s “35%” improvement, revisit the claim that the best of 400 backtests represents expected live Sharpe, and tighten what the validation safeguards establish.
- **Reorder the experience section:** the narrative review suggests moving the bakery role to the end and compressing it—or removing it if it doesn’t support the roles you’re targeting.
- **Fix the “econometircs” typo** and specify which bound term improved in the research-assistant bullet.

The file parses cleanly as a one-page resume, with no layout warnings. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 81 · wording 84 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs / Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal

**Problem**
[Error] The same order-book imbalance result appears under two entries with different dates.

**Why**
Northpeak reports a rise in the desk book’s Sharpe from 1.1 to 1.5 over 18 months out of sample; Kaggle reports a 0.4 Sharpe increase for a futures book over 18 months out of sample. A reader may conclude that the same achievement is being presented twice, but cannot tell which entry or date is accurate.

**How to change it**
Clarify whether these describe one achievement and attribute it consistently, or distinguish the signals, books, and results.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The Sunrise Bakery role gives unrelated work more prominence than the quantitative experience.

**Why**
The role currently appears before the quantitative internship and research experience. For quantitative roles, that ordering can lead a reader to focus on work less relevant to the target before reaching the stronger evidence.

**How to change it**
Move Sunrise Bakery to the end of Experience and compress it to one line, or remove it if it does not support the roles being targeted.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The labour-budget claim does not show actual spending against the budget.

**Why**
A reader can see the budget was met, but not how performance was measured or how consistently it was met. Without the comparison, the claim is harder to judge.

**How to change it**
Add [actual labour spending or variance against the weekly budget] if you can substantiate it.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Polish] The stronger stock-and-waste result should come before the opening-shift responsibility.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement has no stated comparison point.

**Why**
A reader cannot judge the result without knowing what it improved on. The comparison is what makes the percentage interpretable.

**How to change it**
Specify the comparison point, such as [risk-adjusted returns versus the prior strategy or an unsmoothed signal], and clarify whether 35% is a relative change or a percentage-point change.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not establish that every backtest decision used only information available at the time.
2. [Important] The validation bullet gives the test procedure but no validation result.
3. [Polish] The explanation of the validation’s purpose delays the main point.

**Why**
1. Those safeguards address particular forms of temporal leakage, but do not by themselves prevent leakage through revised data, feature construction, preprocessing, or execution timing. The categorical claim requires point-in-time controls across the full backtest pipeline.
2. A reader can see how the signal was evaluated, but not whether it passed or what performance the validation supported. Without an outcome and comparison, the test details do not show what the work achieved.

**How to change it**
1. Replace the categorical claim with a statement that the splits and embargo reduced temporal leakage; retain the categorical claim only if [the full pipeline used point-in-time data and features, causal preprocessing, and correct decision and execution timing].
2. Add [the key out-of-sample finding and its comparison point, such as performance versus the desk baseline]; keep the split details only if space allows.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Important] The live-allocation approval is buried after the presentation details.
2. [Polish] The word “small” does not quantify the approved live allocation.

**Why**
1. Approval for a live allocation is the clearest outcome in this bullet. Leaving it in the trailing clause makes that outcome slower to find.

**How to change it**
1. Move the approval outcome before the presentation details, then retain the capacity estimate and failure cases as supporting context.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe from 400 backtested configurations is not an expected live Sharpe.

**Why**
Searching many configurations tends to select one with favorable noise, inflating its observed Sharpe. That selected maximum is not an unbiased estimate of expected live performance, and the bullet gives no usable observed result or consequence.

**How to change it**
Describe it as the best observed backtest Sharpe; call it an expected live Sharpe only if [estimated on an independent, untouched evaluation with selection bias accounted for]. If available, report [the out-of-sample Sharpe result and its comparison point] instead.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The order-book signal result should precede the less conclusive bullets.

**Why**
This bullet gives a specific, after-cost increase in the desk book’s Sharpe from 1.1 to 1.5 over 18 months out of sample. The earlier bullets do not lead with an equally clear result, so this evidence may be missed if it stays last.

**How to change it**
Move this bullet before the less conclusive bullets in the internship entry.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Polish] The parallelization wording is redundant and does not clearly explain the seed setup.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The variance-bound bullet should lead the entry’s research-assistant bullets.
2. [Important] “By a log factor” does not specify which term in the variance bound improved.
3. [Polish] “My proof” uses a first-person pronoun and repeats ownership already implied by “Derived.”

**Why**
1. It states a theoretical result, its improvement over prior work, and its placement in a paper under review. The other bullets describe useful work, but this is the strongest research contribution to put first.
2. A reader can tell that the result is tighter, but cannot judge the scale of the theoretical improvement from this shorthand. The bound terms are needed to make the comparison precise.

**How to change it**
1. Move this bullet before the Monte Carlo study, teaching, and package bullets.
2. Replace “by a log factor” with [the exact prior and new bound terms], if the comparison can be stated compactly.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Polish] The 7% QLIKE reduction does not say how the result is summarized across the 30 indices.

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
[Error] The stated index-level tests do not support a claim of significance in both crisis periods.

**Why**
Holm-adjusted tests across indices establish significance for those index-level comparisons, not separately for each crisis period. Claiming significance in both periods requires period-specific tests and an appropriate correction for the hypotheses being claimed.

**How to change it**
If you ran period-specific Diebold–Mariano tests with an appropriate multiple-testing correction, report those results; otherwise remove the claim about significance in both crisis periods.

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
1. [Polish] The working-paper bullet names generic contents rather than a specific method or robustness check.
2. [Polish] The relative clause delays the seminar-presentation detail.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The modeling bullet gives no result or measure of competition performance.
2. [Important] The competition-modeling bullet names broad activities without showing a specific technical contribution.
3. [Polish] The bullet repeats competition context already stated in the heading.

**Why**
1. Without an outcome, a reader cannot tell whether the modeling improved prediction or competition performance. A measured result would make the contribution easier to judge.
2. A reader can identify the general workflow, but cannot distinguish your work from a generic competition modeling effort. A specific feature or modeling choice would make your contribution clearer.

**How to change it**
1. Add [result and metric, compared with a relevant baseline or competition outcome] after the modeling work.
2. Replace one general phrase with [the most telling specific feature or modeling decision].

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Important] The Sharpe increase has no stated comparison point.
2. [Important] The order-book signal result should come before the broader competition contributions.

**Why**
1. A reader cannot tell whether the increase is against the futures book without the signal, another strategy, or a benchmark. Without that comparison, the improvement is harder to interpret.
2. This bullet gives a quantified Sharpe increase tested over 18 months out of sample. The modeling bullet is broader and has no stated result, so leading with it makes the clearest outcome less prominent.

**How to change it**
1. Clarify the comparison, such as [baseline futures book without the signal], if accurate.
2. Move this bullet before the modeling and validation bullets.

> Engineered features and trained gradient-boosting models

**Problem**
[Polish] The competition entry presents separate contributions without a clear project progression.

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled in the Methods skills line.

**Why**
The typo is an avoidable error in a technical skill. It can distract a reader and undermine confidence in the care taken with the application.

**How to change it**
Correct “econometircs” to “econometrics.”

## Already working

- s2:e1:b2: Pairs a clear technical contribution with evidence that other projects reused it.
- s2:e2:b3: Connects a technical package release to measurable early adoption.
- s3:e1:b1: Connects a validation change to a measurable reduction in the local-to-leaderboard discrepancy.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b6ca692c.md.

