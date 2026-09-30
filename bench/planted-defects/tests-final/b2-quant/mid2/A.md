> Here is my resume: bench/planted-defects/tests-final/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five experience/project entries with bullets, plus the resume’s narrative and format. The file is one page and parses cleanly for ATS. No job description was provided, so I did not assess fit to a specific role.

The main changes to address:
- **Resolve an apparent duplicate result:** the Northpeak internship and 2023 Kaggle project both report an order-book imbalance signal adding 0.4 Sharpe over 18 months out of sample. Clarify whether these are separate results and attribute them consistently.
- **Revisit the live-Sharpe claim:** the Northpeak bullet reports the best Sharpe from 400 backtests as the “expected live Sharpe”; the content review flagged that as unsupported as written. The review also called for clearer comparison points or outcomes for some other performance claims.
- **Tighten the focus and presentation:** the narrative review suggests shortening or removing the bakery entry so the quantitative-research direction stays prominent. It also caught “econometircs” in Skills; the format review flagged a first-person “my” in a research bullet.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 80 · wording 84 · narrative 74

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 8 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> order-book imbalance signal

**Problem**
[Error] The order-book-imbalance Sharpe results appear to describe the same achievement under different entries and dates.

**Why**
Northpeak reports a rise from 1.1 to 1.5 over 18 months out of sample, while Kaggle reports adding 0.4 over 18 months out of sample. Those figures and periods appear to overlap, so a reader may question whether these are separate results or the same achievement attributed twice.

**How to change it**
Clarify whether this is one achievement and attribute it consistently, or distinguish the signals, books, and results if they are separate.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The most recent bakery role draws attention away from the résumé’s quantitative research direction.

**Why**
Because Sunrise Bakery is the most recent role, it can attract attention before the more directly relevant quantitative work. Keeping the entry to one line or removing it would reduce that emphasis.

**How to change it**
Shorten the Sunrise Bakery entry to one line or remove it.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Polish] The labour-budget result has no figure to show how much or how consistently costs were controlled.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Polish] The unsold-bread reduction is buried after the methods instead of leading the line.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement does not identify the comparison behind it.

**Why**
A reader cannot tell whether the change is relative to the unsmoothed signal, another benchmark, or a different period. Without the comparison, the result is hard to interpret.

**How to change it**
After “by 35%,” add the relevant comparison, such as versus [the unsmoothed signal or other comparison used].

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
[Important] The validation description gives no result, and its closing explanation repeats safeguards already named.

**Why**
A reader can see that the signal was tested on six years of tick data using purged walk-forward splits and an embargo, but cannot tell what the validation showed or what decision it supported. The final explanation restates what those safeguards are intended to ensure and pushes the missing result further back.

**How to change it**
Cut the closing explanation and add the main finding after the split description: [the result or decision supported by the validation].

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The feature-store reuse result is delayed in a relative clause.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Polish] The live allocation’s scale is unclear, and the approval is buried in a trailing clause.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] The best backtested Sharpe from 400 configurations is not a valid estimate of expected live Sharpe as written.
2. [Polish] The selected Sharpe has no stated value or comparison, and the indirect ending makes the result difficult to scan.

**Why**
1. Selecting the top result from many configurations creates selection bias, so its backtested Sharpe is likely to overstate future performance. The line does not describe a selection-bias correction or separate validation that would support calling it an expected live Sharpe.

**How to change it**
1. Describe it as the best backtested Sharpe among 400 configurations; call it an expected live Sharpe only if supported by a suitable selection-bias correction or genuinely separate validation.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The Sharpe improvement is buried after several signal and evaluation details.

**Why**
The change from 1.1 to 1.5 is the central outcome, but readers encounter it after the instrument, signal, horizon, and testing qualifiers. That delays the strongest result in the bullet.

**How to change it**
Move the Sharpe increase to the start of the bullet, keeping the signal, futures, out-of-sample period, and after-cost details with it.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Error] Using the same random seed on every worker can produce duplicate or overlapping random-number sequences if each worker initializes the same generator independently.

**Why**
Workers initialized identically can generate duplicate or overlapping sequences, so the 2,000 runs may not be independent Monte Carlo replicates. A shared master seed is valid only when the random-number generator assigns workers distinct streams or substreams.

**How to change it**
If the workers used distinct streams or substreams derived from a master seed, say so; otherwise, remove the claim that every worker used the same seed. Replace “running the runs” with “running the simulations” to avoid repetition.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Polish] “My proof” uses a first-person possessive and redundantly restates the derivation.
2. [Polish] The bound-tightening result is not the opening of the bullet.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Polish] The past-tense “Beat” conflicts with the present-tense framing of an ongoing study.

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Error] The crisis-period significance claim is not supported by the stated Holm correction across the 30 index tests, and the wording does not clarify whether each period was tested separately.
2. [Important] The main significance result follows the methods and correction, making it slower to scan.
3. [Polish] The past-tense “Tested” conflicts with the present-tense framing of an ongoing study.

**Why**
1. The described correction across the indices does not establish significance within crisis subperiods; those claims require period-specific tests and a correction covering the relevant crisis-period tests. As written, a reader also cannot tell whether significance held separately in each crisis period or whether those periods merely describe when the tests were run.
2. The result—significance at the 5% level on 24 indices—is the key outcome, but readers reach it only after the tests and correction. Its position makes the finding easier to miss.

**How to change it**
1. If you ran period-specific Diebold–Mariano tests with a correction covering those tests, state that scope and whether significance held separately in each period. Otherwise, remove the 5%-significance claim for the crisis periods or describe the crisis-period result without claiming significance.
2. Move the result ahead of the test and correction details, keeping the same scope and qualification.

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
[Polish] The past-tense “Wrote” conflicts with the present-tense framing of an ongoing study, and “which was presented” uses passive voice without naming the presenter.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The competition modeling work has no stated result.

**Why**
A reader can see that features were engineered and gradient-boosting models were trained, but cannot tell what the work achieved or how it compared with other entries. Without an outcome, the contribution is difficult to evaluate.

**How to change it**
Add [final rank or score, compared with the field or a baseline] after the method, if available.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 gap does not identify the score metric or whether it is the gap before or after the change.

**Why**
Without the metric and the gap’s before-and-after context, a reader cannot tell what the number measures or how much closer the scores became. That makes the validation-leakage improvement difficult to interpret.

**How to change it**
Name the [score metric] and clarify whether the gap went from [before] to [after], keeping 0.02 in its correct role. Move that result ahead of the method and relative clause for quicker scanning.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
[Important] The 0.4 Sharpe increase does not name its comparison, and the method precedes the result.

**Why**
A reader cannot tell whether the increase is relative to the same futures book without the signal or to another benchmark. The result is also slower to find because the signal and testing details come first.

**How to change it**
Lead with the 0.4 increase and name [the futures-book Sharpe without the signal], if that is the actual baseline; retain the 18-month out-of-sample detail.

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled in the Methods skills line.

**Why**
The spelling error is visible in a skills heading and can distract from the technical content. It is a straightforward correction.

**How to change it**
Replace “econometircs” with “econometrics.”

## Already working

- s2:e2:b2: Pairs a concrete teaching contribution with a clear student rating.
- s2:e2:b3: Combines a concrete research tool with a first-year reach measure.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-bc8d9f6e.md.

