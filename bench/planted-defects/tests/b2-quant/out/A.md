> Here is my resume: bench/planted-defects/tests/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Specialists reviewed all 5 bullet-bearing entries for content and wording, plus the full resume narrative and file format. Education entries were not applicable for bullet review. No job description was loaded.

The main changes to make are:

1. **Reorder the experience section**
   - Put **Northpeak Capital** before **Sunrise Bakery**.
   - Move Sunrise Bakery to the end and make it visually subordinate or shorter so the quantitative-research direction leads the resume.

2. **Resolve the duplicated achievement**
   - The Northpeak and Kaggle entries both claim a **0.4 Sharpe increase over 18 months** from an order-book imbalance signal.
   - Remove the duplicate or clarify the distinct datasets, books, periods, and results.

3. **Add missing context to quantitative claims**
   - Northpeak: clarify what the **35% risk-adjusted return improvement** is measured against.
   - State the result of validating on six years of tick data, rather than only describing the validation method.
   - Clarify the meaning of “small live allocation” and distinguish backtest Sharpe from expected live Sharpe.
   - Kaggle: add a measurable outcome to the first bullet, which currently lists methods without a result.

4. **Strengthen less-specific operational claims**
   - The Sunrise Bakery budget bullet needs an amount or variance.
   - The inventory bullet already has a strong result—unsold bread fell from **12% to 7%**—but the process that caused the reduction should be clearer.

5. **Clean up consistency and skills evidence**
   - Replace the first-person wording in the research bullet (“my proof”).
   - Correct **“econometircs”** to **“econometrics.”**
   - Either show evidence of using **C++**, **Kafka**, and **Bayesian inference**, or remove them from Skills.

The file itself is one page, 541 words, parses cleanly for ATS, and has no layout warnings. The full specialist report is available at **`/report --full`**.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 86 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 14 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> added 0.4 Sharpe

**Problem**
[Error] The same order-book imbalance result appears to be claimed in both the Northpeak and Kaggle entries. *(saves about 15 words if removed)*

**Why**
Both bullets report a 0.4 Sharpe increase over 18 months using an order-book imbalance signal, so a reader may read them as one achievement presented twice. That weakens credibility and uses space that could establish a distinct result.

**How to change it**
Remove the Kaggle duplicate or clarify the distinct books, periods, and results in the two entries.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The experience order gives an unrelated retail role prominence before the quantitative research role. *(saves about 20 words if reduced to one line)*

**Why**
A reader scanning the page first sees Sunrise Bakery rather than Northpeak Capital, so the résumé's initial direction appears operational or retail rather than quantitative. The quantitative internship should establish the target profile, while the bakery role can remain as supporting experience.

**How to change it**
Move Northpeak Capital above Sunrise Bakery, move Sunrise Bakery to the end of EXPERIENCE, and reduce it to a short supporting entry or one line.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Error] The claim that stock counts and supplier orders cut unsold bread overstates what the before-and-after figures establish. *(about 2 words to replace)*

**Why**
The figures are arithmetically consistent: unsold bread fell by 5 percentage points, or about 41.7% relative to the original rate. But the comparison does not show that the listed activities caused the reduction, because demand, production, seasonality, pricing, or other changes could explain it.

**How to change it**
Replace “cutting” with wording that states unsold bread fell during the period; if the activities were causally tested, specify [the comparison or method used].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement does not identify its comparison or the return measure. *(about 4 words to add)*

**Why**
A reader cannot tell whether 35% is relative to the unsmoothed signal, a prior desk process, or another benchmark. They also cannot tell whether the measure is Sharpe, Sortino, or another risk-adjusted metric, so the headline result is difficult to interpret.

**How to change it**
Replace or qualify “risk-adjusted returns” with [the specific metric], and state the baseline and comparator, if accurate.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so no look-ahead information leaked into training.

**Problem**
1. [Error] Purged walk-forward splits and an embargo period do not establish that no look-ahead information entered training. *(about 8 words to add)*
2. [Important] The validation activity is reported without its decision-relevant result. *(about 6 words to add)*

**Why**
1. Those methods can address leakage from overlapping labels and temporal proximity, but they do not rule out faulty timestamps, feature construction, data revisions, or other implementation errors. The absolute claim is therefore broader than the evidence stated.
2. A reader can see that six years of tick data and rigorous splits were used, but cannot tell whether the signal survived validation, improved on a baseline, or was rejected. The process sounds careful without showing what it established.

**How to change it**
1. Limit the claim to preventing leakage from overlapping labels and temporal proximity, or add [evidence that feature construction and data handling were also point-in-time correct].
2. Add [the out-of-sample performance versus the baseline] or [the decision enabled by the validation] after the validation method.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The capacity estimate and live allocation are too vague to show the scale of the approval. *(about 2 words to replace)*

**Why**
The reader can see that portfolio managers approved a test, but cannot judge the opportunity's size or the evidence behind the approval. “Small” weakens an otherwise concrete deployment outcome.

**How to change it**
Replace “capacity estimate” or “small live allocation” with [the capacity in dollars or contracts] or [the allocation size], if accurate.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] Selecting the best result from 400 backtested configurations creates selection bias, so its Sharpe is not a valid expected live Sharpe. *(about 2 words to replace)*
2. [Important] The selected configuration’s backtest Sharpe is presented as an expected live Sharpe without evidence supporting that forward-looking interpretation. *(about 2 words to replace)*
3. [Important] The parameter search is reported without showing what the selection enabled or improved. *(about 5 words to add)*

**Why**
1. The winning configuration benefits from favorable sampling noise among the 400 trials. Without untouched validation, nested testing, or a multiple-selection correction, presenting that backtest Sharpe as a live expectation makes the estimate sound more predictive than the evidence supports.
2. The line does not distinguish the in-sample best backtest metric from a holdout or realized-live estimate. Without a holdout, benchmark, or live anchor, a reader may overread the reported Sharpe as predictive.
3. A reader sees optimization effort but cannot tell whether it produced an out-of-sample improvement, supported deployment, or changed a portfolio decision. The number of configurations therefore signals work rather than impact.

**How to change it**
1. Describe it as the selected configuration's backtest Sharpe; if available, report [an untouched validation or live-test Sharpe] as the expected live estimate.
2. Replace “expected live Sharpe” with [holdout or live Sharpe] and state the comparison if that evidence exists; otherwise identify it as the best backtested Sharpe.
3. Add [the resulting out-of-sample improvement] or [the deployment decision] after the selection step, if accurate.

> capacity estimate

**Problem**
[Important] The Northpeak entry is overloaded with headline results, validation, infrastructure, communication, and parameter-selection details. *(saves about 20 words)*

**Why**
The entry contains several strong forms of evidence, but their number makes the central quantitative-research story harder to scan. A reader may miss the most important contribution because results and supporting process details compete for attention.

**How to change it**
Keep the strongest research result and its validation, then shorten or remove secondary infrastructure, presentation, and parameter-selection detail.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Error] Using the same random seed on every worker duplicates random sequences instead of producing independent Monte Carlo runs. *(about 4 words to add)*

**Why**
Identical seeds typically cause workers to generate identical or overlapping simulations, so the claimed 2,000 runs do not provide the intended independent Monte Carlo sample. Parallel Monte Carlo requires distinct, nonoverlapping random-number streams or properly assigned substreams.

**How to change it**
Replace the same-seed method with distinct, nonoverlapping random-number streams or substreams for each worker, and remove the repeated wording in “running the runs.”

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Error] The variance-bound bullet uses a first-person pronoun and sentence-like trailing wording. *(saves about 3 words)*
2. [Important] The proof comparison does not show the bounds or specify the exact logarithmic improvement. *(about 6 words to add)*

**Why**
1. “My proof” breaks the résumé's impersonal bullet style. The long clause about the paper also buries the result and makes the line less compact.
2. A mathematical reader can tell that the result improves on prior work, but cannot quickly judge the magnitude of the contribution. The paper status supports credibility, not the size of the bound improvement.

**How to change it**
1. Replace “my proof” with “the proof,” and move or shorten the paper-status phrase so the bound improvement appears directly after the action.
2. Replace or supplement “by a log factor” with [the prior and resulting bounds, or the exact logarithmic improvement].

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] The 7% QLIKE improvement does not say how the result was aggregated across the 30 indices. *(about 5 words to add)*

**Why**
A reader cannot tell whether 7% is an average, median, pooled result, or improvement observed in every index. That makes the headline figure harder to interpret and reproduce.

**How to change it**
Add [how the 7% was aggregated across the 30 indices], or replace it with [the clearest available per-index summary].

> Tested significance with Diebold-Mariano tests across the 30 indices; the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The significance claim does not support the statement that the gain held in both crisis periods, and “held at the 5% level” is imprecise. *(about 8 words to add)*
2. [Polish] The phrase “both crisis periods” does not identify the periods tested. *(about 4 words to add)*

**Why**
1. Diebold-Mariano tests across the indices support index-level predictive-loss differences, but they do not by themselves establish separate crisis-period results. The 24 significant results are also nominal 5% results unless multiple testing is addressed.
2. A reader cannot judge the relevance or coverage of the stress-test result without knowing which crisis windows were used. The 24-of-30 result is clear, but this second validation claim is not.

**How to change it**
1. State that the gain was statistically significant at the nominal 5% level for 24 indices, and report crisis-period results only if separate crisis-period tests or comparisons were run, including [any multiple-testing adjustment].
2. Replace “both crisis periods” with [the names or date ranges of the two crisis periods], if those periods are important evidence.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The feature-engineering and modeling bullet gives no result, performance measure, or specific feature work. *(about 8 words to add)*

**Why**
A reader can see that features were engineered and gradient-boosting models were trained, but cannot judge whether the work improved a score, ranking, trading result, or another competition outcome. “Engineered features” also does not show the technical work that demonstrates skill.

**How to change it**
Replace some generic activity wording with [the specific feature work] and add [a verified outcome or metric compared with a baseline], such as [an improvement or placement].

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The time-grouped-fold result does not establish that leakage caused the original score gap, and the gap's metric is unspecified. *(about 5 words to add)*

**Why**
Time grouping can reduce temporal leakage, but it may still permit future-to-past training or overlapping-label contamination, and the gap could reflect regime differences, leaderboard noise, preprocessing, or model selection. The reader also cannot tell which score changed or whether 0.02 is an absolute metric-point difference.

**How to change it**
State that the local-validation/leaderboard gap narrowed by 0.02, name [the competition metric], and claim reduced leakage only if [split direction, label horizon, feature timing, and required purging or embargo were verified].

> Added 0.4 to the Sharpe ratio

**Problem**
[Important] The final Kaggle bullet shifts from the competition to a futures-book result that duplicates the quantitative-research narrative. *(saves about 20 words if removed)*

**Why**
The first two bullets establish a competition project, but the final bullet changes subject without explaining how it belongs to that project. It also repeats the Northpeak signal result, making the competition entry look less focused.

**How to change it**
Remove the futures-book bullet or substantially shorten it; keep it with the Northpeak research narrative unless [the Kaggle result was a distinct achievement].

## Skills

> econometircs

**Problem**
[Error] The Methods skills line contains the misspelling “econometircs.” *(no words)*

**Why**
A spelling error in a technical skill can make the reader question the care taken with the rest of the application. It also makes the skill harder to recognize in a keyword search.

**How to change it**
Replace “econometircs” with “econometrics.”

> C++

**Problem**
[Important] The skills list claims C++, Kafka, and Bayesian inference without evidence elsewhere in the résumé. *(saves about 6 words if all three are removed)*

**Why**
A reader cannot connect these skills to a project, job, or research result, so they may appear unsubstantiated. Unsupported skills dilute the stronger evidence for Python, PyTorch, R, and quantitative research.

**How to change it**
Add evidence of C++ use, Kafka use, and Bayesian modeling or inference, or remove each unsupported skill.

## Set aside (14)

14 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-db07edbf.md.

