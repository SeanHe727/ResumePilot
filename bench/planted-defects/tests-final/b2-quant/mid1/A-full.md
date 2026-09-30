# Full review: resume.pdf

**87/100** — format 100 · content 81 · wording 84 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs / Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal

**Problem**
[Error] The same order-book imbalance result appears under two entries with different dates. *(no words)*

**Why**
Northpeak reports a rise in the desk book’s Sharpe from 1.1 to 1.5 over 18 months out of sample; Kaggle reports a 0.4 Sharpe increase for a futures book over 18 months out of sample. A reader may conclude that the same achievement is being presented twice, but cannot tell which entry or date is accurate.

**How to change it**
Clarify whether these describe one achievement and attribute it consistently, or distinguish the signals, books, and results.

*raised by narrative*

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The Sunrise Bakery role gives unrelated work more prominence than the quantitative experience. *(saves about 10 words if compressed)*

**Why**
The role currently appears before the quantitative internship and research experience. For quantitative roles, that ordering can lead a reader to focus on work less relevant to the target before reaching the stronger evidence.

**How to change it**
Move Sunrise Bakery to the end of Experience and compress it to one line, or remove it if it does not support the roles being targeted.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The labour-budget claim does not show actual spending against the budget. *(about 5 words to add)*

**Why**
A reader can see the budget was met, but not how performance was measured or how consistently it was met. Without the comparison, the claim is harder to judge.

**How to change it**
Add [actual labour spending or variance against the weekly budget] if you can substantiate it.

*raised by content*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Polish] The stronger stock-and-waste result should come before the opening-shift responsibility. *(no words)*

**Why**
The current first bullet leads with a responsibility, while the next bullet gives a measurable result: unsold bread fell from 12% to 7% of production. Putting that result first would make the entry’s clearest evidence of impact easier to notice.

**How to change it**
Move the stock-counts and supplier-orders bullet before the opening-shifts bullet.

*raised by narrative*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement has no stated comparison point. *(about 5 words to add)*

**Why**
A reader cannot judge the result without knowing what it improved on. The comparison is what makes the percentage interpretable.

**How to change it**
Specify the comparison point, such as [risk-adjusted returns versus the prior strategy or an unsmoothed signal], and clarify whether 35% is a relative change or a percentage-point change.

*raised by content*

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not establish that every backtest decision used only information available at the time. *(saves about 10 words)*
2. [Important] The validation bullet gives the test procedure but no validation result. *(about 6 words to add)*
3. [Polish] The explanation of the validation’s purpose delays the main point. *(saves about 10 words)*

**Why**
1. Those safeguards address particular forms of temporal leakage, but do not by themselves prevent leakage through revised data, feature construction, preprocessing, or execution timing. The categorical claim requires point-in-time controls across the full backtest pipeline.
2. A reader can see how the signal was evaluated, but not whether it passed or what performance the validation supported. Without an outcome and comparison, the test details do not show what the work achieved.
3. The closing clause explains what the safeguards were intended to ensure rather than stating a result. It takes space from the validation details without establishing that every part of the pipeline was leakage-free.

**How to change it**
1. Replace the categorical claim with a statement that the splits and embargo reduced temporal leakage; retain the categorical claim only if [the full pipeline used point-in-time data and features, causal preprocessing, and correct decision and execution timing].
2. Add [the key out-of-sample finding and its comparison point, such as performance versus the desk baseline]; keep the split details only if space allows.
3. Cut this explanatory clause, or replace it with the narrower statement that the splits and embargo reduced temporal leakage.

*raised by content, wording*

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Important] The live-allocation approval is buried after the presentation details. *(no words)*
2. [Polish] The word “small” does not quantify the approved live allocation. *(about 2 words to replace)*

**Why**
1. Approval for a live allocation is the clearest outcome in this bullet. Leaving it in the trailing clause makes that outcome slower to find.
2. A reader cannot tell how meaningful the approval was from “small” alone. A shareable size or proportion would make the decision easier to judge.

**How to change it**
1. Move the approval outcome before the presentation details, then retain the capacity estimate and failure cases as supporting context.
2. Replace “small” with [allocation size or proportion of the book, if shareable]; keep the timing if it clarifies that this was approval for a future allocation.

*raised by wording, content*

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe from 400 backtested configurations is not an expected live Sharpe. *(about 6 words to add)*

**Why**
Searching many configurations tends to select one with favorable noise, inflating its observed Sharpe. That selected maximum is not an unbiased estimate of expected live performance, and the bullet gives no usable observed result or consequence.

**How to change it**
Describe it as the best observed backtest Sharpe; call it an expected live Sharpe only if [estimated on an independent, untouched evaluation with selection bias accounted for]. If available, report [the out-of-sample Sharpe result and its comparison point] instead.

*raised by content, wording*

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The order-book signal result should precede the less conclusive bullets. *(no words)*

**Why**
This bullet gives a specific, after-cost increase in the desk book’s Sharpe from 1.1 to 1.5 over 18 months out of sample. The earlier bullets do not lead with an equally clear result, so this evidence may be missed if it stays last.

**How to change it**
Move this bullet before the less conclusive bullets in the internship entry.

*raised by narrative*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Polish] The parallelization wording is redundant and does not clearly explain the seed setup. *(saves about 3 words)*

**Why**
“The runs” repeats the 2,000-run study description, while “the same random seed on every worker” can suggest identical random-number streams rather than a controlled parallel simulation. That wording leaves the parallelization detail unclear.

**How to change it**
Cut “the runs” and replace “with the same random seed on every worker” with [the accurate seed-handling approach].

*raised by wording*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The variance-bound bullet should lead the entry’s research-assistant bullets. *(no words)*
2. [Important] “By a log factor” does not specify which term in the variance bound improved. *(about 4 words to replace)*
3. [Polish] “My proof” uses a first-person pronoun and repeats ownership already implied by “Derived.” *(saves about 1 word)*

**Why**
1. It states a theoretical result, its improvement over prior work, and its placement in a paper under review. The other bullets describe useful work, but this is the strongest research contribution to put first.
2. A reader can tell that the result is tighter, but cannot judge the scale of the theoretical improvement from this shorthand. The bound terms are needed to make the comparison precise.
3. The pronoun is unnecessary in a résumé bullet and makes the line read more like a sentence than a concise description of work. The proof’s result and its paper placement are harder to scan when they follow this repeated ownership wording.

**How to change it**
1. Move this bullet before the Monte Carlo study, teaching, and package bullets.
2. Replace “by a log factor” with [the exact prior and new bound terms], if the comparison can be stated compactly.
3. Remove “my” and reorder the clause so the bound improvement and paper placement follow “Derived” directly; for example, use “the proof” only if needed.

*raised by narrative, content, wording, file*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Polish] The 7% QLIKE reduction does not say how the result is summarized across the 30 indices. *(about 1 word to add)*

**Why**
A reader cannot tell whether 7% is a mean, median, or another aggregate. That distinction affects how to interpret the reported performance gain.

**How to change it**
Replace “by 7%” with [mean/median QLIKE reduction], if accurate.

*raised by content*

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
[Error] The stated index-level tests do not support a claim of significance in both crisis periods. *(about 5 words to add, or saves about 4 words if removed)*

**Why**
Holm-adjusted tests across indices establish significance for those index-level comparisons, not separately for each crisis period. Claiming significance in both periods requires period-specific tests and an appropriate correction for the hypotheses being claimed.

**How to change it**
If you ran period-specific Diebold–Mariano tests with an appropriate multiple-testing correction, report those results; otherwise remove the claim about significance in both crisis periods.

*raised by content*

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
1. [Polish] The working-paper bullet names generic contents rather than a specific method or robustness check. *(about 4 words to add)*
2. [Polish] The relative clause delays the seminar-presentation detail. *(saves about 2 words)*

**Why**
1. The paper and seminar presentation establish communication, but the listed contents do not show what technical or analytical work the write-up contains. One distinctive method or check would give the reader more evidence of that work.
2. The wording adds a wordy link between the paper and its presentation. That slows the reader’s scan of a useful outcome.

**How to change it**
1. Replace the generic contents list with [one distinctive method or robustness check], if it adds useful detail alongside the paper and presentation.
2. Replace “which was presented at” with the shorter “presented at.”

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The modeling bullet gives no result or measure of competition performance. *(about 5 words to add)*
2. [Important] The competition-modeling bullet names broad activities without showing a specific technical contribution. *(about 3 words to add)*
3. [Polish] The bullet repeats competition context already stated in the heading. *(saves about 5 words)*

**Why**
1. Without an outcome, a reader cannot tell whether the modeling improved prediction or competition performance. A measured result would make the contribution easier to judge.
2. A reader can identify the general workflow, but cannot distinguish your work from a generic competition modeling effort. A specific feature or modeling choice would make your contribution clearer.
3. The heading identifies the market prediction competition, so repeating that context does not add much. The space could instead carry a result or technical detail.

**How to change it**
1. Add [result and metric, compared with a relevant baseline or competition outcome] after the modeling work.
2. Replace one general phrase with [the most telling specific feature or modeling decision].
3. Cut “for a market prediction competition.”

*raised by content, wording*

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Important] The Sharpe increase has no stated comparison point. *(about 5 words to add)*
2. [Important] The order-book signal result should come before the broader competition contributions. *(no words)*

**Why**
1. A reader cannot tell whether the increase is against the futures book without the signal, another strategy, or a benchmark. Without that comparison, the improvement is harder to interpret.
2. This bullet gives a quantified Sharpe increase tested over 18 months out of sample. The modeling bullet is broader and has no stated result, so leading with it makes the clearest outcome less prominent.

**How to change it**
1. Clarify the comparison, such as [baseline futures book without the signal], if accurate.
2. Move this bullet before the modeling and validation bullets.

*raised by content, narrative*

> Engineered features and trained gradient-boosting models

**Problem**
[Polish] The competition entry presents separate contributions without a clear project progression. *(no words)*

**Why**
The entry moves from broad modeling work to a validation change and then a Sharpe result, without showing how those contributions fit together. A reader may see a set of separate outcomes rather than one clearly ordered project narrative.

**How to change it**
Order the modeling, validation, and result details to show their relationship, using only the connection that accurately describes the work.

*raised by narrative*

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled in the Methods skills line. *(no words)*

**Why**
The typo is an avoidable error in a technical skill. It can distract a reader and undermine confidence in the care taken with the application.

**How to change it**
Correct “econometircs” to “econometrics.”

*raised by narrative*

## Already working

- s2:e1:b2: Pairs a clear technical contribution with evidence that other projects reused it.
- s2:e2:b3: Connects a technical package release to measurable early adoption.
- s3:e1:b1: Connects a validation change to a measurable reduction in the local-to-leaderboard discrepancy.
