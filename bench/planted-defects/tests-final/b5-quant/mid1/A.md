> Here is my resume: bench/planted-defects/tests-final/b5-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience/project entries for content and wording, plus the full resume narrative and ATS formatting. No job-match review was run because no posting was provided.

The main changes to address:
- **Resolve the apparent duplicate result:** the order-book imbalance/Sharpe result appears under both Northpeak and the Kaggle project, with different dates and framing. Clarify whether these are separate results.
- **Clarify key finance claims:** specify what the 35% return improvement measures and its comparison; give the validation result; and don’t present the best Sharpe from 400 configurations as expected live Sharpe without support.
- **Make project outcomes more concrete:** the volatility study’s opening claim is vague, and the competition bullets need a clearer result or metric context.

The reviewers also flagged the eight-month gap between the B.S. and research assistant role and the listed date of birth and nationality. Formatting and ATS parsing were otherwise clean. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 70 · wording 79 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 15 important, 8 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “Date of birth: 21 Jul 1998 | Nationality: Indian”

**Problem**
[Error] The résumé includes personal details that are conventionally left off.

**Why**
Date of birth and nationality are not details a reader is meant to weigh when assessing the résumé. Including them can distract from the candidate’s qualifications.

**How to change it**
Remove the date of birth and nationality.

> “raised the desk book’s Sharpe ratio from 1.1 to 1.5” / “Added 0.4 to the Sharpe ratio of a futures book”

**Problem**
[Error] The Northpeak and Kaggle bullets appear to describe the same order-book imbalance result with different dates and framing.

**Why**
The Northpeak bullet reports that the signal raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months, while the Kaggle bullet reports an increase of 0.4 over 18 months. A reader may wonder whether these are separate results or the same achievement placed under inconsistent entries.

**How to change it**
Confirm [whether these are separate results and which entry and dates are correct]. If they are the same result, keep one consistent account under the correct entry; if separate, add [what distinguishes the results], using only accurate details.

> “Sep 2016 - May 2020” / “Feb 2021 - Aug 2021”

**Problem**
[Polish] The dates leave an eight-month gap between the B.S. and the Research Assistant role.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] “Improved risk-adjusted returns by 35%” does not identify the return measure, comparison point, or period.

**Why**
Without those anchors, a reader cannot tell what the 35% represents or how to interpret the gain. That makes the headline result difficult to assess or compare.

**How to change it**
Replace “risk-adjusted returns” with [specific return measure] and add [comparison point] and [period].

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not guarantee that every backtest decision used only information available at the time.
2. [Important] The point-in-time explanation is lengthy but does not state a separate validation result.
3. [Important] “Validated the signal” does not state the validation result.

**Why**
1. Purging and embargoing can reduce leakage from overlapping labels or nearby observations, but they do not verify the full data and feature pipeline. A reader may doubt the point-in-time claim because other sources of look-ahead can remain.
2. The explanation does not tell the reader what the validation established. That leaves the outcome of testing six years of data unstated.
3. A reader can see how the signal was tested, but not whether it held up or what the test established. That leaves the outcome of the six-year validation unclear.

**How to change it**
1. Replace the guarantee with a description that the splits and embargo addressed overlap-related leakage. Keep the full point-in-time claim only if the pipeline and timestamps were verified; then add [how they were verified].
2. Cut that clause and add [out-of-sample result and metric], if available.
3. Add [out-of-sample result and the metric it is measured by], if available.

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The feature-store reuse outcome is delayed by a bulky relative clause.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Polish] The live-allocation outcome is delayed until after the presentation details.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] The best Sharpe from 400 backtested configurations is not a valid estimate of expected live Sharpe as written.
2. [Important] The line gives neither the best Sharpe value nor a clear basis for calling it a live estimate.

**Why**
1. Selecting the best result from many configurations tends to select for backtest noise, making its Sharpe upward-biased. The selected result alone does not establish expected live performance.
2. A reader cannot assess the result or distinguish a measured backtest figure from a live-performance expectation. That ambiguity is especially costly because the line presents the figure as a forecast.

**How to change it**
1. Report a Sharpe from an independent, untouched evaluation or an estimate that accounts for the configuration search, naming [the evaluation or correction used]. If neither was done, describe it as the best in-sample backtest Sharpe, not expected live Sharpe.
2. Replace this phrase with [Sharpe value] and identify its evaluation set or period; call it a live expectation only if that estimate was actually established.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
1. [Important] The Sharpe improvement is buried after the signal description and evaluation details.
2. [Polish] “Desk book” is team-specific jargon that may not be clear to outside readers.

**Why**
1. The increase from 1.1 to 1.5 is the line’s clearest result, but it appears only after several qualifiers. A reader scanning the entry may miss the outcome.

**How to change it**
1. Move the Sharpe improvement before the signal description and qualifying details.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Error] Using the same random seed on every worker can produce identical or overlapping random streams and invalidate the Monte Carlo study.
2. [Polish] “By running the runs in parallel” repeats “runs” and makes the method cumbersome.

**Why**
1. If every worker initializes the same generator from that seed, workers can duplicate simulations or undermine their independence. The reported speedup does not establish that the simulations are valid.

**How to change it**
1. If the workers used independent substreams or a parallel-safe random-number generator, name that setup instead. Otherwise, rerun the study with a parallel-safe scheme before claiming its results.

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The comparison for the claimed log-factor improvement is unidentified.
2. [Important] The variance-bound contribution should lead this entry rather than appear after the other bullets.
3. [Polish] The paper-status clause follows the main result and makes the sentence less direct.

**Why**
1. A reader cannot tell which result the new bound improves on, so the size of the contribution is hard to interpret. The relevant comparison may also depend on a particular regime.
2. The bound and its claimed improvement are the clearest research contribution in this entry. Leaving it later makes a reader wait to find the strongest evidence of the work.

**How to change it**
1. Replace “the previous bound” with [the prior bound or result being compared]; add [the relevant regime] if the improvement holds only under particular conditions.
2. Move this bullet before the other bullets in the Research Assistant entry.

> Taught weekly recitations for 60 students in graduate probability and writes the problem sets, earning a 4.8/5 teaching rating.

**Problem**
1. [Error] “Taught … and writes” mixes past and present tense in a completed role.
2. [Important] The 4.8/5 teaching rating lacks its source and response count.

**Why**
1. The role is dated February to August 2021, but “writes” makes the problem-set work sound current. A reader may wonder whether the responsibilities continued after the role ended.
2. Without that context, a reader cannot judge how the rating was gathered or how representative it is. The unexplained score is less persuasive as evidence of teaching effectiveness.

**How to change it**
1. Replace “writes” with “wrote” to match “Taught.”
2. Add [evaluation source] and [number of responses], if available, after the rating.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Pioneered a data-driven, research-first approach to volatility modeling that delivered robust, actionable insights.

**Problem**
1. [Important] The opening claim is vague and does not connect its claimed impact to the study’s concrete research sequence.
2. [Important] The opening does not identify the modeling approach used.

**Why**
1. “Robust, actionable insights” does not say what changed or how anyone used the result, while the study’s testing and seminar presentation appear in later bullets. A reader cannot tell what the opening line contributes beyond broad claims, so it does little to establish the study’s value.
2. “Data-driven” and “research-first” do not let a reader picture the technical work or recognize the modeling skill involved. The line therefore offers little technical evidence about the study.

**How to change it**
1. Replace the broad opening claim with [the specific forecast finding or decision it informed]; add [measured improvement versus a named benchmark] if available.
2. Replace that phrase with [the main modeling technique or model comparison used], if accurate.

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The significance result does not define the forecast gain, its size, or the benchmark.
2. [Important] The 24-index result is buried after the test and correction, and “The 30 indices” includes an unnecessary article.

**Why**
1. Statistical significance does not show whether the improvement was large enough to matter. Without the forecast-error change and comparison, a reader cannot judge the practical value of the result.
2. The number of indices with a significant gain is the main result, but a reader reaches it only after the testing method and correction. That delays the finding on a quick scan.

**How to change it**
1. Add [forecast-error change] versus [named benchmark model or forecast] so the result has a clear comparison and magnitude.
2. Move the 24-index result to the start of the bullet, then describe the test and correction; remove “The” before “30 indices.”

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
[Polish] The passive phrase “which was presented” leaves unclear who presented the paper.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The competition entry gives no result from the feature-engineering and modeling work.

**Why**
The setting alone does not tell a reader whether the models were competitive or what the work achieved. Without a placement or score relative to the field, the contribution is difficult to assess.

**How to change it**
Replace that phrase with [competition placement or score relative to the field], if available.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 gap has no named score metric or scale.

**Why**
A reader cannot tell what the difference measures or whether 0.02 is large. The number is therefore difficult to interpret or compare.

**How to change it**
Add [score metric and scale] next to “0.02 gap.”

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Important] The most concrete competition outcome appears last in the entry.
2. [Polish] “Tested over 18 months out of sample” has an unclear referent.

**Why**
1. The Sharpe result is the clearest measurable outcome, but a reader has to reach the final bullet to find it. Leading with it would make the entry’s value easier to see on a quick scan.

**How to change it**
1. Move this bullet before the modeling and validation bullets.

## Already working

- s2:e1:b3: Connects a released research tool to a measurable first-year usage figure.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-1b9e5810.md.

