> Here is my resume: bench/planted-defects/tests-final/b5-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four experience/project entries for content and wording, plus the resume’s narrative and format. The file parses cleanly, and no job description was provided for a match review.

The main changes to address:
- Clarify the basis for the “35%” risk-adjusted-return improvement, and don’t present the best result from 400 backtested configurations as an expected live Sharpe.
- Resolve the apparent duplicate futures Sharpe result listed under both the 2025 internship and the 2023 competition; also clarify what the competition’s “0.4” Sharpe change means.
- Make the volatility project’s opening claim more concrete. The format review also flagged date of birth and nationality as details to remove; the narrative review noted an unexplained eight-month gap after the B.S.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 70 · wording 80 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998 | Nationality: Indian

**Problem**
[Error] The résumé includes personal details conventionally omitted from a résumé. *(saves about 7 words)*

**Why**
A reader is not meant to weigh date of birth or nationality when assessing the candidate’s qualifications. Including them uses space without supporting the application.

**How to change it**
Remove the personal-details line.

> raised the desk book’s Sharpe ratio from 1.1 to 1.5; Added 0.4 to the Sharpe ratio

**Problem**
[Error] The same order-book imbalance result appears in entries with different dates and project contexts. *(no words)*

**Why**
The Northpeak entry describes a signal raising Sharpe from 1.1 to 1.5 over 18 months out of sample, while the Kaggle entry says an order-book signal added 0.4 to a futures book’s Sharpe over 18 months out of sample. A reader may question which entry owns the result or whether these are distinct achievements.

**How to change it**
Clarify [which entry owns the result], or distinguish [how the signals and results differ] so both accounts can be true.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] “Improved risk-adjusted returns by 35%” does not identify the metric or comparison behind the percentage. *(about 4 words added)*

**Why**
A reader cannot tell whether the percentage refers to Sharpe, another risk-adjusted metric, or something else. Without a comparison basis, the size and significance of the result are difficult to assess.

**How to change it**
Replace “risk-adjusted returns” with [risk-adjusted metric] and add [comparison baseline and evaluation period] if space permits.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not guarantee that every backtest decision used only information available at the time. *(saves about 9 words)*
2. [Important] “Validated the signal” gives no result from the validation. *(about 5 words added)*

**Why**
1. Those techniques reduce leakage between training and validation windows, but they do not ensure that every feature, timestamp, universe choice, or execution assumption was historically available. The absolute claim therefore goes beyond what the stated validation method supports.
2. The reader can see the testing method and period, but not what the test established. Without an outcome and comparison, the validation detail does not show whether the signal performed well.

**How to change it**
1. Replace that explanation with wording that the splits and embargo were used to reduce leakage; retain the stronger claim only if you can verify point-in-time availability for all inputs and decisions.
2. After “embargo period,” add [out-of-sample result and comparison baseline]; keep the information-timing explanation only if room remains.

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The feature-store reuse result is delayed in a wordy relative clause. *(saves about 1 word)*

**Why**
The clause makes the reader work through the sentence before reaching the evidence of adoption. Putting the reuse result directly after the feature-store description makes that outcome easier to spot.

**How to change it**
Replace the relative clause with a direct phrase such as “reused by the research team in two later signal projects.”

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Important] “Small live allocation” does not say how large the approved allocation was. *(about 2 words added)*
2. [Polish] The approval outcome is buried in a long relative clause. *(saves about 1 word)*

**Why**
1. Approval is meaningful evidence that the work was taken forward, but the reader cannot tell how much capital or what share of the book it represented. That leaves the scale of the outcome unclear.
2. The sentence spends extra words connecting the presentation to the result instead of stating the result directly. This makes the live-allocation approval less immediate.

**How to change it**
1. If disclosable, replace “small” with [allocation size or share of the book].
2. Replace the clause with a direct result such as “secured approval for a small live allocation for the next quarter.”

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe from 400 backtested configurations is not, by itself, an unbiased estimate of expected live Sharpe. *(about 2 words added)*

**Why**
Selecting the highest Sharpe across many configurations creates selection bias: the winner is likely to look unusually strong by chance. A reader cannot treat its backtested result as an estimate of expected live performance without independent validation.

**How to change it**
Replace “the expected live Sharpe” with “the best backtested Sharpe among 400 configurations”; describe it as expected live Sharpe only if an independent validation method to estimate that result was run.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Important] Using the same random seed on every worker can produce duplicate random-number streams rather than independent Monte Carlo runs. *(no words)*

**Why**
With the same generator and setup, workers initialized with the same seed produce identical streams if they consume random numbers in the same way. That can make the effective number of independent runs smaller than 2,000 and undermine Monte Carlo estimates based on independent replicates.

**How to change it**
If the workers used distinct, properly separated random streams, state that; otherwise, do not describe the study as 2,000 independent Monte Carlo runs.

> Taught weekly recitations for 60 students in graduate probability and writes the problem sets, earning a 4.8/5 teaching rating.

**Problem**
[Error] “Writes” is present tense in a role that ended in August 2021 and conflicts with “Taught.” *(no words)*

**Why**
The dates place the work in the past, while “writes” suggests an ongoing responsibility. That makes the timing of the claimed work inconsistent.

**How to change it**
Change “writes” to “wrote.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Pioneered a data-driven, research-first approach to volatility modeling that delivered robust, actionable insights.

**Problem**
[Important] “Pioneered a data-driven, research-first approach” is self-assessing, and “robust, actionable insights” does not say what the study found or how it was used. *(saves about 6 words before the replacement)*

**Why**
A reader cannot judge the value of the work from broad claims of robustness or usefulness. A concrete finding or resulting decision would make the outcome assessable.

**How to change it**
Cut “Pioneered a data-driven, research-first approach” and replace “robust, actionable insights” with [the study’s main finding and, if applicable, what decision or use it informed].

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] “The forecast gain” does not identify the forecast measure or the baseline it improved on. *(about 4 words added)*
2. [Important] The statistical result is buried after the method. *(no words)*

**Why**
1. Without the metric and comparison, readers cannot interpret what the reported significance establishes. Naming the comparison would make the result easier to assess.
2. The finding that the gain held at the 5% level on 24 of 30 indices is the clearest evidence of the result. Leading with it lets the reader see that evidence before the test details.

**How to change it**
1. Clarify “the forecast gain” with [forecast-error metric] compared with [baseline model].
2. Move the finding that the gain held at the 5% level on 24 of 30 indices to the start of the bullet, then name the Diebold-Mariano tests and Holm correction.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The feature and model work has no stated outcome or evidence of what it achieved. *(about 5 words added)*
2. [Polish] “For a market prediction competition” repeats the project context already stated in the title. *(saves about 5 words)*

**Why**
1. A reader can see the activity, but not whether the model performed well or improved on anything. One result with a useful comparison would make the contribution easier to assess.
2. The title already identifies this as a market prediction competition. Repeating that context uses space without adding information about the work.

**How to change it**
1. Add [competition rank or prediction metric versus baseline] to show the model’s result.
2. Cut “for a market prediction competition.”

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The fold change is credited with reducing leakage and closing the score gap without evidence that it caused either result. *(saves about 13 words if the unsupported result claims are cut)*

**Why**
Time-grouped folds can reduce leakage when they prevent the relevant information from crossing time boundaries, but switching folds alone does not establish that leakage was reduced. Nor does it show that the change caused the gap to close without comparable before-and-after evaluations.

**How to change it**
If comparable evaluations showed this, specify the leakage mechanism and the scores before and after the change; otherwise, describe the switch to time-grouped folds without claiming it cut leakage or closed the gap.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Important] The competition work described does not establish that the order-book signal was evaluated as a futures strategy. *(saves about 11 words if the unsupported claim is removed)*
2. [Important] The 0.4 Sharpe increase has no stated comparison strategy or book. *(about 6 words added)*
3. [Important] “Added 0.4 to the Sharpe ratio” is ambiguous about whether the ratio increased by 0.4 or reached 0.4. *(no words)*

**Why**
1. Engineering features and training prediction models do not by themselves show that an order-book imbalance signal was evaluated as a futures strategy. An 18-month out-of-sample period alone also does not establish that the reported Sharpe increase is attributable to the signal under realistic trading assumptions.
2. A reader needs the comparison to understand what changed when the signal was added and how to interpret the reported gain. Without it, the number does not show what performance it improved on.
3. A reader cannot tell whether 0.4 is the size of the change or the resulting Sharpe ratio. That ambiguity affects the meaning of the reported performance result.

**How to change it**
1. If a separate futures-book backtest produced this result, identify the evaluation and its relevant assumptions; otherwise remove the Sharpe claim or describe only the competition model results.
2. Name the comparison behind the increase, such as the same book without the signal, if accurate, and retain the 18-month out-of-sample period.
3. If the ratio increased by 0.4, say “increased Sharpe by 0.4”; if it reached 0.4, say “raised Sharpe to 0.4.”

## Already working

- s2:e1:b3: The line states both what the package does and the methods it supports.

## Set aside (10)

10 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8bffcb97.md.

