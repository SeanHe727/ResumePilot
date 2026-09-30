> Here is my resume: bench/planted-defects/tests-final/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The specialists reviewed all five experience/project entries, the full career narrative, and the file format. No job-description match was run because no posting was provided.

Changes to prioritize:
- **Resolve a possible duplicate:** the Northpeak and Kaggle entries describe the same order-book signal and Sharpe improvement. Clarify whether they are separate achievements, then distinguish them or keep the result under the correct entry.
- **Clarify or qualify backtest claims:** the Northpeak review flagged an unsupported comparison for the 35% risk-adjusted return, a claim that validation guarantees no look-ahead, and presenting the best of 400 configurations as an expected live Sharpe. The desk-book Sharpe increase also needs to be clearly framed as a backtest result.
- **Refocus ordering:** consider shortening Sunrise Bakery or moving it to “Other Experience”; put the quant-research and research achievements first. The narrative review also flagged Kafka as unsupported by the experience bullets.
- **Make smaller edits:** fix “econometircs” to “econometrics,” clarify the labor-budget action, and make the proof/runtime wording more direct.

The file is one page, parses cleanly for ATS, and has no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 82 · wording 83 · narrative 76

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

2 errors, 19 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Managed opening shifts

**Problem**
[Important] The Sunrise Bakery role takes space from experience more directly relevant to quantitative research. *(saves about 15 words if shortened)*

**Why**
The operational work is clear, but it does not support the résumé’s quantitative-research direction. Its current space may draw attention away from the more relevant research and modeling work.

**How to change it**
Shorten Sunrise Bakery to one line or move it to a brief Other Experience section.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] “By 35%” gives an improvement figure without identifying the comparison. *(about 5 words, plus the comparison and period)*

**Why**
A reader cannot tell whether the risk-adjusted returns were compared with the unsmoothed signal, another benchmark, or a different period. Without that comparison, the size of the improvement is difficult to interpret.

**How to change it**
Replace “by 35%” with “by 35% versus [comparison] over [evaluation period],” if accurate.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Important] The splits and embargo do not establish that every backtest decision used only information available at the time. *(saves about 8 words if the guarantee is removed)*
2. [Important] “Validated the signal” does not state what the validation found. *(about 8 words, plus the result)*

**Why**
1. Purged walk-forward splits and an embargo can reduce leakage between training and test data, but they do not rule out look-ahead in feature construction, timestamps, or other backtest decisions. The current wording makes a broader point-in-time validity claim than the stated methods support.
2. The reader can see how the test was structured, but not whether the signal performed consistently or what conclusion the work supported. A concise result would show why the validation mattered.

**How to change it**
1. Replace the guarantee with a statement that the splits and embargo were used to reduce leakage; retain the stronger claim only if an audit confirmed point-in-time validity for every backtest decision.
2. After the split details, add [out-of-sample performance or stability result, compared with a baseline], if available.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Important] Reporting the best Sharpe from 400 backtested configurations as an expected live Sharpe treats a selected backtest result as a live-performance expectation. *(about 1 word)*
2. [Important] The selected Sharpe is presented as an expected live result without giving its value or evaluation basis. *(about 8 words, plus the result)*

**Why**
1. Selecting the highest Sharpe across many configurations tends to select for favorable noise and can inflate the estimate. Without independent validation or an adjustment for that selection, the best backtest result does not establish expected live Sharpe.
2. Without the actual result and its evaluation basis, a reader cannot judge its magnitude or what evidence supports the expectation. The line also leaves the selected smoother’s practical result unstated.

**How to change it**
1. Replace “expected live Sharpe” with “best observed backtest Sharpe”; retain a live expectation only if independent validation or a selection-bias adjustment supports it.
2. Replace that phrase with [selected Sharpe value and evaluation basis, compared with a baseline], if available; otherwise state the concrete result of the selected smoother without calling it an expected live Sharpe.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
1. [Important] The backtest Sharpe change is presented as an established impact on the desk book. *(no words)*
2. [Important] The Sharpe improvement is buried after the signal description and the out-of-sample and cost qualifiers. *(no words)*

**Why**
1. An 18-month out-of-sample backtest after costs is evidence, but by itself it does not establish that the signal caused the desk book’s Sharpe increase. The result may be noisy and depends on a valid comparison and attribution.
2. Readers scanning the bullet may reach the result only after the technical description and evaluation details. Moving the quantified impact forward would make it easier to notice.

**How to change it**
1. Describe the 1.1-to-1.5 change as a backtest comparison rather than a desk-book impact; retain the stronger claim only if live or otherwise appropriate attribution supports it.
2. Move the 1.1-to-1.5 Sharpe result closer to the start of the bullet, keeping the out-of-sample and after-cost qualifiers with it.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Important] Using the same random seed on every worker can make workers repeat or overlap random-number streams. *(about 2 words to name a method, if applicable)*
2. [Important] “Running the runs” is repetitive and makes the method sound awkward. *(saves about 2 words)*

**Why**
1. If each worker starts the same generator from the same seed and consumes values alike, nominal runs may be repeats rather than independent Monte Carlo replicates. The time reduction may be real, but it does not establish a valid speedup for independent simulations.
2. The repeated word draws attention to the phrasing rather than the parallelization that produced the time reduction. A more direct method description will be easier to scan.

**How to change it**
1. If the workers used a stream-splitting method that produced independent streams, name it; otherwise rerun with independent worker streams and report the resulting timing.
2. Replace “running the runs in parallel” with “parallelizing the simulation.”

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The bullet uses a first-person pronoun, breaking the résumé’s verb-led phrase format. *(no words)*
2. [Important] “By a log factor” does not specify the logarithmic improvement or the term it improves relative to. *(about 6 words, plus the specific improvement)*
3. [Important] The paper-status clause already follows the tightened-bound result, so the suggested reordering is unnecessary. *(no words)*

**Why**
1. “My proof” shifts the line into first person while the surrounding résumé bullets use concise, verb-led phrasing. That inconsistency makes the entry read less cleanly.
2. A reader can tell the result is an improvement, but cannot judge its size or understand what was tightened. The paper status supports credibility but does not clarify the comparison itself.
3. The line states that the proof tightens the previous bound before saying it is Section 3 of a paper under review. Readers therefore encounter the result before the paper status, as the finding recommends.

**How to change it**
1. Replace “my proof” with “the proof,” or restructure the clause without a first-person pronoun.
2. Replace “by a log factor” with [the specific logarithmic improvement and the term it improves relative to], if you can state that compactly.
3. No reordering is needed; the result already precedes the paper-status clause.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The stated Holm correction across 30 indices does not establish that the gain was significant in both crisis periods. *(about 3 words if the test scope is added)*
2. [Important] “Both crisis periods” does not identify which periods were tested. *(about 3 words, plus the names or dates)*
3. [Important] The result comes after the test methods and correction, making the finding easier to miss. *(no words)*

**Why**
1. Holm correction controls the familywise error rate only for the hypotheses included in the correction. If the crisis-period results were separate tests and were not included, the correction across indices does not support a 5% significance claim for those periods.
2. A reader cannot tell which market conditions the robustness result covers. That makes this part of the evidence harder to interpret.
3. Readers may not reach the main result until after the validation details. Leading with the finding would make the outcome easier to scan, with the methods still available as supporting evidence.

**How to change it**
1. If the crisis-period tests were included in the Holm correction, state that; otherwise remove or qualify the 5% significance claim for those periods.
2. Replace “both crisis periods” with [name the two crisis periods], if accurate.
3. Move the result—“The forecast gain held at the 5% level on 24 of 30 indices and in both crisis periods”—before the Diebold–Mariano test and Holm-correction details.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The competition entry gives no competition result. *(about 7 words, plus the result)*
2. [Polish] “For a market prediction competition” repeats context already given in the project title. *(saves about 5 words)*

**Why**
1. A reader can see what work was done, but not whether it improved predictions or how the entry performed. A result tied to a comparison would make the contribution easier to evaluate.
2. The title already tells the reader that this is a market prediction competition. Repeating that context uses space without adding information about the work.

**How to change it**
1. After the work described, add [competition result, such as rank or score, compared with a baseline], if available.
2. Cut “for a market prediction competition” from the bullet.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The claim that switching to time-grouped folds “closed a 0.02 gap” attributes the leaderboard gap to validation leakage without establishing that cause. *(no words)*

**Why**
Time-grouped folds can reduce leakage when random folds mix time periods, but the gap can also come from distribution shift, sampling noise, or other causes. The line does not establish that leakage caused the gap.

**How to change it**
If a comparison supports the attribution, specify how the fold change affected leakage and the gap; otherwise say the gap narrowed from 0.02 after switching to time-grouped folds.

> order-book imbalance signal

**Problem**
[Error] The same order-book signal achievement appears under two different entries without a clear distinction. *(saves about 17 words if removed from one entry)*

**Why**
The matching signal description, 18-month out-of-sample period, and 0.4 Sharpe increase make the Northpeak and Kaggle bullets look like the same achievement. A reader may question whether the work is duplicated or misattributed, which can weaken confidence in both entries.

**How to change it**
Clarify whether these are separate projects; if they are, distinguish their work and results, or keep the achievement under the correct entry.

## Skills

> econometircs

**Problem**
[Error] The Methods skill is misspelled: “econometircs” should be “econometrics.” *(no words)*

**Why**
A spelling error in a technical skill can make the résumé look insufficiently checked. It may also distract readers from the expertise the skill is meant to signal.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Important] Kafka is listed as a programming skill without supporting experience in the entries. *(saves 1 word if removed)*

**Why**
A reader cannot see where the candidate used Kafka or what they did with it. Without that context, the skill may appear unsubstantiated.

**How to change it**
Add supporting experience if accurate; otherwise remove Kafka from the skills list.

## Already working

- s2:e1:b2: Connects a defined technical contribution to subsequent team reuse.
- s3:e0:b0: Leads with a quantified result and a clear baseline.
- s3:e1:b2: Pairs a clear performance change with a named signal and an out-of-sample evaluation period.

## Set aside (8)

8 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-4d0beaee.md.

