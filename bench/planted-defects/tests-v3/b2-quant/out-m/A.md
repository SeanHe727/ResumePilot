> Here is my resume: bench/planted-defects/tests-v3/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all 5 entries with bullets, both education entries as headers only, the full narrative, and the PDF format. No job-description match was run because no posting was provided. The file parses cleanly as a one-page, 549-word resume.

The most important changes are:

1. **Reorder the experience section**
   - Sunrise Bakery currently appears first and disrupts the statistics-to-quantitative-research narrative.
   - Move it below the quantitative experience and projects, place it in an additional-experience subsection, or remove it if space is needed.

2. **Resolve duplicated or conflicting quantitative claims**
   - The Northpeak internship and Kaggle project both describe an order-book imbalance signal improving a futures book’s Sharpe over 18 months.
   - Keep the achievement in one place or clearly distinguish the portfolios, evaluation periods, and results.
   - Clarify whether the reported 35% return improvement is out-of-sample, backtested, live, or another type of result.

3. **Clarify performance metrics and comparison bases**
   - Define what “35% improvement in risk-adjusted returns” means.
   - Specify whether the 0.4 Sharpe change is an absolute increase and identify the before-and-after values.
   - Clarify whether the 7% QLIKE result is a relative reduction or percentage-point difference.
   - Replace or explain the claim that a backtested Sharpe was the “expected live Sharpe.”

4. **Correct methodological or attribution issues**
   - The Statistical Learning Lab bullet about using “the same random seed on every worker” needs correction or explanation; the reviewer flagged this as methodologically problematic.
   - Avoid implying that stock counts and supplier orders alone caused the bakery waste reduction unless the operational change is stated.
   - The Kaggle bullet should identify the outcome of the feature engineering and model training, not only the activities.

5. **Tighten wording and consistency**
   - Remove the first-person phrase “my proof.”
   - Replace awkward wording such as “running the runs in parallel” and “supplier orders.”
   - Make clear whether you presented the volatility-forecasting paper.
   - Correct **“econometircs”** to **“econometrics.”**
   - Either document Kafka in an experience/project entry or remove it from Skills.

The strongest existing material is the quantified research work, especially the out-of-sample comparisons, adoption of the research tooling, and measurable project outputs. The complete specialist report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 79 · wording 86 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 17 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.
> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
[Error] The best Sharpe from 400 backtested configurations cannot be reported as the expected live Sharpe, and the 0.4 Sharpe change is not labeled as an absolute or relative increase. *(about 8 words to add)*

**Why**
Selecting the maximum from 400 trials creates multiple-testing and selection bias, so that result is an optimistically selected backtest statistic rather than an unbiased forecast of future performance. The missing Sharpe value and unclear relationship between the backtest and live expectation prevent a reader from judging the performance or the validity of the Kaggle comparison.

**How to change it**
Report the actual [Sharpe value] as the best in-sample backtest Sharpe, or use an independently validated or search-adjusted estimate for expected live performance; in the Kaggle line, identify whether 0.4 is an absolute Sharpe-point increase or a relative percentage and give the comparison values if accurate.

> Sunrise Bakery

**Problem**
[Important] Sunrise Bakery appears before the quantitative experience and projects, making an unrelated role dominate the career story. *(no words)*

**Why**
A recruiter scanning for statistics, quantitative research, and modeling experience encounters the bakery role first and may form the wrong impression about the candidate's target. The relevant research evidence is consequently less prominent even though it is stronger for the intended career.

**How to change it**
Move Sunrise Bakery below the quantitative experience and projects into an additional experience subsection, or cut it if space is limited.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] "Keeping the store within its weekly labour budget" does not show the scale or business value of that control. *(about 5 words to add)*

**Why**
A recruiter can see that the budget was respected but cannot tell whether this reflects routine compliance or meaningful labour efficiency. Without a comparison, the outcome gives little sense of the size of the management achievement.

**How to change it**
Replace the outcome with [the percentage or amount under budget] or [the amount or percentage of weekly labour overruns prevented], if accurate.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
1. [Important] "Ran daily stock counts and supplier orders" does not identify the inventory decision made from those records and makes orders sound as though they were run. *(about 2 words to add)*
2. [Important] The line attributes the reduction in unsold bread to stock counts and supplier orders without establishing that those actions caused it. *(saves about 2 words)*

**Why**
1. The reader sees routine counting and ordering activity but not the operational judgment that demonstrates skill. The wording also obscures whether the candidate placed, adjusted, or managed supplier orders, weakening the connection between the method and the result.
2. The reduction could also reflect production volume, demand, product mix, promotions, seasonality, stockouts, markdowns, or other changes. Without consistent definitions, measurement periods, and evidence linking the reduction to the ordering changes, the causal claim may be discounted.

**How to change it**
1. Replace the phrase with the actual action, such as [adjusted order quantities or delivery timing based on daily demand], if accurate, and use "placed" or "managed" rather than "ran" for supplier orders.
2. State the before-and-after result without causal attribution, or add [the measurement period, consistent definitions and records, and evidence linking the reduction specifically to the stock-count and ordering changes].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Error] The claim that risk-adjusted returns improved by 35% does not define the metric, baseline, period, or validation status. *(about 8 words to add)*

**Why**
A reader cannot tell whether the figure refers to Sharpe, return divided by risk, or another metric, nor whether it compares the smoother with the unsmoothed signal, a prior version, or a benchmark. The nearby claim that the best configuration's Sharpe was an expected live Sharpe makes the 35% result especially difficult to classify as an achieved out-of-sample result or a selected backtest estimate.

**How to change it**
Replace or qualify the phrase with the actual [risk-adjusted metric], baseline, comparison period, and out-of-sample or live status; label the 400-configuration result separately as backtest performance or as an independently validated expected-live estimate if such a test exists.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
[Error] Purged walk-forward splits and an embargo period do not establish that every backtest decision used only information available at the time. *(saves about 8 words)*

**Why**
These techniques reduce leakage between overlapping training and test observations, but they do not automatically make feature construction, preprocessing, label formation, or parameter selection point-in-time. A reader may therefore doubt the strength of the validation claim and the reliability of the reported backtest.

**How to change it**
If the entire pipeline was point-in-time and parameter selection was nested, say so explicitly; otherwise cut the trailing claim and limit the line to reduced train-test leakage from purged walk-forward splits with an embargo period.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.
> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Important] The six-year validation and the 400-configuration search report research process without stating the resulting validation outcome or decision. *(about 10 words to add)*

**Why**
A reader can see that the test used a careful design and that a substantial parameter search was performed, but cannot tell whether the signal survived validation or what the search enabled. The bullets therefore emphasize effort rather than the evidence supporting deployment or performance.

**How to change it**
Add the resulting [out-of-sample result] versus [baseline] or [decision supported by the validation] after the six-year test, and add the resulting [validated result] or [decision enabled by the parameter selection] after the 400-configuration search.

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.
> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The strongest adoption result is placed after the feature-store implementation details and the live-allocation result is placed after the presentation details. *(no words)*

**Why**
Readers scanning the bullets may notice the technical activity before the evidence that others reused the work or approved it for deployment. The consequential outcomes therefore have less immediate impact than they should.

**How to change it**
Move "reused in two later signal projects" immediately after the feature-store result, and move the live-allocation outcome before or into the main clause of the presentation bullet.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] "Approved a small live allocation" leaves the size of the deployment unspecified. *(about 3 words to add)*

**Why**
The approval shows that the work passed an investment decision gate, but "small" does not let a reader judge the scale of the deployment or what the capacity estimate demonstrated. The strongest business outcome is therefore difficult to measure.

**How to change it**
Replace "small" with [the allocation size or range] and add [the capacity estimate] if it helps measure the deployment outcome.

> added 0.4 to the Sharpe ratio

**Problem**
[Error] The resume presents the same order-book signal achievement under Northpeak Capital and the Kaggle project, while Northpeak also repeats the same type of Sharpe improvement within its own bullets. *(saves about 15 words)*

**Why**
The 1.1-to-1.5 result and the 0.4 increase describe the same apparent book, period, and signal, so a reader may count one achievement twice or doubt the provenance of the result. The repeated performance story also takes space from distinct evidence of research impact.

**How to change it**
Keep the achievement in one entry, or distinguish the books, periods, signals, and results so the two claims cannot be mistaken for duplicates; remove or replace the repeated Northpeak performance bullet if it describes the same work.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Error] Using the same random seed on every worker does not provide valid independent Monte Carlo replications. *(about 5 words to add)*

**Why**
Workers using the same seed generally produce duplicated or overlapping pseudorandom streams, so the study does not establish 2,000 independent runs and its standard errors or uncertainty estimates would be invalid. The five-hour runtime may still demonstrate a computational speedup, but not a valid Monte Carlo study under this seeding scheme.

**How to change it**
Report the runtime reduction separately and state that the workers used independent, nonoverlapping, or properly split random-number streams if that was done; otherwise remove the validity claim and replace the repetitive phrase "running the runs in parallel" with a direct description of parallel execution.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The bullet uses a first-person pronoun in "my proof," which breaks the resume's phrase-based format. *(no words)*
2. [Important] "Tightens the previous bound by a log factor" does not state the compared bounds or the exact form of the improvement. *(about 6 words to add)*

**Why**
1. The pronoun makes this line read like prose while the surrounding bullets use concise resume phrases. It adds no ownership information because the bullet already begins with "Derived," so it creates a small but visible inconsistency.
2. A reader may not know whether the result is substantial or how to interpret the logarithmic tightening. The paper's review status supports credibility but does not measure the mathematical contribution itself.

**How to change it**
1. Replace "my proof" with "the proof" or move the ownership into the existing verb phrase without using a personal pronoun.
2. Replace or supplement the phrase with [the previous bound] to [the new bound] or [the exact logarithmic improvement], if accurate, while keeping the result before the JASA status.

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Polish] The teaching outcome is limited to a 4.8/5 rating and does not show educational impact. *(about 8 words to add)*

**Why**
The rating shows student satisfaction, but not whether students learned more or performed better as a result of the recitations and problem sets. The line therefore demonstrates activity and approval more clearly than teaching effectiveness.

**How to change it**
Retain the rating and add [a student learning outcome measured against a stated baseline or assessment], if available.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] "Beat ... by 7%" does not say whether the QLIKE improvement is relative or a percentage-point difference. *(about 1 word to add)*

**Why**
The reader can see the direction and nominal size of the gain but cannot interpret the figure precisely. The 30-index scope shows where the model was tested, not what the 7% means numerically.

**How to change it**
Clarify whether the result is a relative reduction or percentage-point difference; if available, give [baseline QLIKE] to [model QLIKE] or add the accurate qualifier "relative."

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The Holm correction is stated for the 30 indices, but the line does not establish that the crisis-period significance tests were included in that correction. *(about 5 words to add)*
2. [Important] "In both crisis periods" does not identify the periods used for the robustness test. *(about 2 words to add)*

**Why**
1. A Holm correction across the index tests does not automatically control the family-wise error rate for additional tests conducted separately in two crisis periods. A reader may therefore reject the joint 5% significance claim even though the index-level result is properly reported.
2. A reader can see that stressed markets were included but cannot tell which events or windows were tested. Naming the periods would make the robustness claim assessable without materially expanding the bullet.

**How to change it**
1. If the crisis-period tests were included in the same multiplicity correction, say so explicitly; otherwise separate the corrected 30-index result from the crisis-period result and report the latter with its appropriate adjustment or as descriptive.
2. Replace the phrase with [the names or dates of the two crisis periods], if accurate.

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
[Polish] "Wrote up the method, robustness checks and results" lists broad paper contents without identifying the most relevant analytical contribution. *(no words)*

**Why**
The reader can confirm that a working paper was produced but cannot tell what research skill the writing demonstrates. Since the earlier bullets already establish the modeling and testing, this line should use its limited space to identify one specific documented robustness or analytical step.

**How to change it**
Replace one generic item in that list with [one named robustness check or analytical contribution], while keeping the working-paper and seminar outcomes.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The feature-engineering bullet gives no competition result, and "for a market prediction competition" repeats the heading instead of showing an outcome. *(about 6 words to add)*

**Why**
A reader can see the modeling activity but cannot tell whether the models performed well, improved a baseline, or produced a meaningful rank or score. The bullet therefore contributes little evidence of impact despite taking space.

**How to change it**
Replace the generic competition phrase with [the evaluation metric and result compared with a baseline or final leaderboard result], if available, and remove the repeated competition context.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] Switching to time-grouped folds does not by itself prove that leakage caused or eliminated the 0.02 validation-to-leaderboard gap. *(about 8 words to add)*
2. [Important] "Closed a 0.02 gap" does not identify the scoring metric or clarify whether 0.02 is an absolute score difference. *(about 3 words to add)*

**Why**
1. Time-grouped folds can reduce temporal leakage, but the method change alone does not establish the causal mechanism or show that the gap was closed. The missing scoring metric and unclear meaning of 0.02 also prevent a reader from assessing the size of the change.
2. A reader cannot judge the size or meaning of the change without knowing what was scored and how the gap was calculated. The figure therefore sounds precise while remaining difficult to interpret.

**How to change it**
1. If measured, state the before-and-after local and leaderboard scores, the specific leakage mechanism, and [the evaluation metric]; otherwise say that time-grouped folds reduced the local-validation/leaderboard discrepancy by 0.02 and clarify whether that is an absolute difference.
2. Name [the evaluation metric] and, if accurate, state the before-and-after values or that the absolute validation-to-leaderboard difference fell from 0.02 to [remaining gap].

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
The resume repeats an order-book performance result without clearly distinguishing the comparison portfolio or the before-and-after Sharpe ratios. *(about 6 words to add)*

**Why**
A reader cannot tell whether 0.4 is an absolute Sharpe-point increase, a relative change, or the same 1.1-to-1.5 result already reported under Northpeak. That ambiguity weakens confidence in both the contribution and the consistency of the performance claims.

**How to change it**
State the comparison portfolio and the starting and resulting Sharpe ratios, if accurate, and label whether the change is absolute; if this is the Northpeak result, keep it only in that entry.

> Added 0.4 to the Sharpe ratio

**Problem**
[Important] The first two bullets describe one leakage-control modeling workflow, while the final bullet introduces a separate futures-signal achievement. *(no words)*

**Why**
The abrupt shift makes the project difficult to understand as a single contribution and leaves the reader unsure whether the futures result belongs to the competition. It also duplicates the Northpeak signal story rather than strengthening the competition narrative.

**How to change it**
Move the futures-signal result to the entry where that work belongs, or distinguish it as a separate project so all bullets under the competition entry support one coherent workflow.

## Skills

> econometircs

**Problem**
[Error] "econometircs" is misspelled; the correct spelling is "econometrics." *(no words)*

**Why**
A misspelled methods term can make a reader question the care taken with technical details and can interfere with keyword matching. The correction removes that avoidable distraction without changing the claimed skill.

**How to change it**
Replace "econometircs" with "econometrics" in the Methods skills list.

> Kafka

**Problem**
[Important] Kafka appears in the Programming skills without any resume entry showing its use. *(saves 1 word if removed)*

**Why**
A reader cannot verify the skill or see what level of work it represents. The unsupported keyword may look inflated, while removing it would avoid inviting questions about an unsubstantiated technology.

**How to change it**
Add an entry showing how Kafka was used, if accurate; otherwise remove Kafka from the skills list.

## Already working

- s2:e2:b3: Shows a concrete deliverable rather than only describing research activity.

## Set aside (4)

4 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c7931dae.md.

