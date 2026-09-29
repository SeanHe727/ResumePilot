# Full review: resume.pdf

**84/100** — format 100 · content 75 · wording 87 · narrative 63

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 8 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The Sunrise Bakery entry interrupts the quantitative trajectory and is positioned too prominently for a quantitative research target. *(saves about 20 words if cut)*

**Why**
Placed alongside the quantitative experience, the assistant-manager role makes an otherwise coherent research and modeling trajectory appear to reverse. A recruiter may spend attention on unrelated retail operations before reaching the evidence most relevant to the target role.

**How to change it**
Cut the entry, or reduce it to a single line under an “Additional Experience” subsection below the quantitative experience and projects.

*raised by narrative*

> Ridgeway University | Ph.D. candidate in Statistics

**Problem**
[Polish] For quantitative research roles, the quant-focused experience and projects should appear before education. *(no words)*

**Why**
The current order is acceptable for a doctoral candidate, but it makes the reader pass through education before seeing the strongest applied evidence. After removing or demoting the bakery role, leading with quantitative work would make the target fit clearer.

**How to change it**
After removing or demoting the bakery role, move the quantitative experience and projects before the education section.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] “Keeping the store within its weekly labour budget” gives no measure of the financial result. *(about 5 words to add)*

**Why**
A hiring manager can see the responsibility but cannot judge how close to, below, or consistently within the approved budget the store operated. The team of six establishes staffing scope, not the size of the budget outcome.

**How to change it**
Keep the team-size detail, but replace or follow this phrase with [amount or percentage under the weekly labour budget, measured against the approved weekly budget], if accurate.

*raised by content*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] “Improved risk-adjusted returns by 35%” does not identify the measure or comparison. *(about 3 words to add)*

**Why**
A quantitative reader needs to distinguish a Sharpe improvement from a return increase or another metric. Without a baseline or comparison, the 35% figure is difficult to interpret and weakens the credibility of the result.

**How to change it**
Replace “risk-adjusted returns” with the actual measure and anchor the change to the comparison, such as [metric] from [baseline] to [result], if accurate.

*raised by content*

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
[Error] The claim that the validation procedure ensured every backtest decision used only information available at the time is too strong, and the line gives no validation result. *(about 4 words to add)*

**Why**
Purged walk-forward splits and an embargo period address leakage from overlapping labels and dependence between train and test observations, but they do not by themselves control feature timestamps, data revisions, vendor availability, or future-derived preprocessing. The six years of tick data shows the scale of the test, but not whether the signal survived it or what decision the work supported.

**How to change it**
Replace the explanatory clause with a statement that the procedure reduced leakage from overlapping observations, and add [out-of-sample performance measure] versus [baseline or threshold]. Claim a full point-in-time guarantee only if all inputs, transformations, and selection steps were independently timestamped and constructed causally.

*raised by content, wording*

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The adoption result is buried in a relative clause. *(no words)*

**Why**
The feature store and its 120 features are clear, but the reader must reach the end of the bullet to learn that the research team reused it. That delays the strongest evidence that the implementation had value beyond being completed.

**How to change it**
Move the reuse result immediately after the action, and retain “in two later signal projects” as the concrete adoption measure.

*raised by wording*

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Polish] The capacity estimate and allocation are not measurable, and the deployment result is buried behind vague wording. *(about 2 words to add)*

**Why**
The reader can see that the presentation supported a deployment decision, but cannot judge the strategy's scale or the approved allocation. “Small” provides no usable risk or capital context, while the relative clause makes the approval easy to miss.

**How to change it**
Replace “capacity estimate” and “small” with [capacity estimate] and [approved allocation or risk limit], if those details can be disclosed, and move the approval result earlier in the bullet.

*raised by content, wording*

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] Reporting the best Sharpe from 400 configurations as the expected live Sharpe is invalid. *(about 4 words to add)*

**Why**
Selecting the maximum from 400 trials introduces multiple-testing and selection bias, so that Sharpe is optimistically biased. The same backtest results cannot both select the configuration and provide an unbiased estimate of its live performance, and the current wording gives no independent holdout or adjustment.

**How to change it**
Describe it as the best in-sample or backtest Sharpe, or replace it with [independent out-of-sample or held-out Sharpe] or [adjusted live-performance estimate] produced through untouched evaluation data or a properly nested validation procedure. Add [validated performance improvement] or [downstream use or approval] to show what the selection achieved, if accurate.

*raised by content, wording*

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Polish] The strongest result is delayed by a long method description. *(no words)*

**Why**
A scanning reader may miss the increase from 1.1 to 1.5, which is the bullet's clearest evidence of performance. Leading with the result would make the signal, testing period, and after-cost condition easier to connect to the achievement.

**How to change it**
Move the Sharpe result to the opening of the bullet and follow it with the signal, liquid index-futures scope, 18-month out-of-sample period, and after-cost qualification.

*raised by wording, narrative*

> Improved risk-adjusted returns by 35%

**Problem**
[Important] The entry repeats the same signal-smoothing achievement in bullets b0 and b5. *(saves about 15 words)*

**Why**
Both bullets describe an order-book or futures signal whose risk-adjusted performance improved, so the reader may interpret them as duplicate claims rather than separate contributions. Repetition uses space that could establish a distinct research, validation, or deployment result.

**How to change it**
Consolidate the overlapping claim with bullet b5 into one result, keeping the more specific signal, Sharpe, period, and after-cost details if they describe the same work.

*raised by narrative*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Error] Using the same random seed on every worker can produce duplicate random-number streams, so the study may not contain 2,000 distinct Monte Carlo runs. *(about 5 words to add)*

**Why**
With ordinary pseudorandom-generator initialization, identical seeds produce identical sequences rather than independent or appropriately varied replicates. That makes the nominal run count and resulting uncertainty estimates invalid unless the parallel framework explicitly derives independent substreams from the common seed; the current wording also does not identify the framework or worker assignment.

**How to change it**
Replace the seed detail with [parallelization framework] and state that the runs used independent, reproducibly spawned random-number streams from a common master seed, if accurate. If that was not done, remove or correct the 2,000-run claim.

*raised by content, wording*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Polish] “Tightens the previous bound by a log factor” does not specify the old and new bound forms, and “my proof” breaks resume-bullet style. *(about 2 words to add)*

**Why**
A reader cannot tell whether the result removes a logarithmic term, reduces its exponent, or achieves another asymptotic improvement. The main mathematical result is also buried after the estimator description, while the first-person pronoun makes the line inconsistent with the rest of the resume.

**How to change it**
Surface the bound improvement immediately after the action, replace “my proof” with “the proof,” and replace “by a log factor” with [previous bound form] to [new bound form], using the shortest notation that makes the comparison explicit.

*raised by content, wording, narrative, file*

> Released an open-source R package for high-dimensional covariance estimation with shrinkage and factor models, downloaded 3,000 times in its first year.

**Problem**
[Important] The package's reach is quantified, but its user value and your implementation ownership are unclear. *(about 8 words to add)*

**Why**
Downloads show exposure, not whether users adopted the methods, replaced another tool, or gained a capability. “Released” also leaves unclear whether you authored the package and implemented its methods or mainly published existing code, weakening the evidence of hands-on research and software skill.

**How to change it**
Change “Released” to “Built and released” if accurate, add [your specific implementation or ownership contribution], and follow the download figure with [what users used the package to do, what it replaced, or what research workflow it enabled].

*raised by content*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Polish] The past-tense opening is inconsistent with the study's current status. *(no words)*

**Why**
The heading says the study is ongoing, so past tense can imply that the work has ended. That creates an avoidable inconsistency in how the candidate presents current research.

**How to change it**
Change the opening verb to present tense, if the study and result remain current.

*raised by wording*

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
[Polish] The crisis-period scope is unclear, and the result is stated less directly than statistical significance. *(about 3 words to add)*

**Why**
A reader cannot tell whether the 24-of-30 result applies to each crisis period or whether the crisis-period analysis used a separate scope. The test and correction details also precede the strongest result, while “held at the 5% level” is less direct than saying the gain remained statistically significant.

**How to change it**
Use present tense, state that the gain remained statistically significant, and specify [the names of the crisis periods] plus whether the 24-of-30 result applies overall, within each period, or under a separate crisis-period test. Move the 24-of-30 result before the test details.

*raised by content, wording*

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
[Polish] The line gives no concrete consequence of the study or presentation and uses a generic description of the analytical work. *(about 6 words to add)*

**Why**
A hiring reader can see that the work was documented and presented, but not why it mattered beyond completion. “The method, robustness checks and results” does not identify the distinctive research skill shown, and the page count and seminar venue measure format rather than contribution.

**How to change it**
Use present tense, replace the generic phrase with [the most distinctive analytical method or robustness procedure documented in the paper], and replace or supplement “12-page” and the venue with [specific research outcome, decision, feedback, follow-on use, or audience response]. If retaining the presentation, say whether you presented it rather than using passive voice.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The feature-engineering and modeling activity has no stated competition result, and the final phrase repeats information already given in the heading. *(about 5 words to add)*

**Why**
A reader can see the work performed but cannot tell whether the models performed well or what the team contributed to the competition outcome. The competition context is already clear from the title, so the closing phrase uses space without adding evidence.

**How to change it**
Cut the redundant competition phrase and add [competition score or ranking compared with a baseline], if available.

*raised by content, wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 gap is not interpretable because the metric and before-and-after values are missing, and the result is buried after the method. *(about 4 words to add)*

**Why**
A reader cannot tell what 0.02 represents or how substantial the change was without the competition metric and the gap before versus after the change. Leading with the reduction would make the leakage-control result easier to scan.

**How to change it**
Move the gap reduction to the opening, identify [competition metric], and, if accurate, specify that the gap fell from [before] to [after].

*raised by content, wording, narrative*

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
[Important] The 0.4 Sharpe increase lacks a comparison point. *(about 5 words to add)*

**Why**
Without a baseline strategy, prior model, or prior period, the reader cannot judge the starting level or resulting risk-adjusted performance. The validation wording also makes the out-of-sample scope harder to scan.

**How to change it**
Add [baseline or comparison period] and, if available, the resulting value so the change is expressed from [before] to [after]. Replace “tested over 18 months out of sample” with a more direct statement of the 18-month out-of-sample test.

*raised by content, wording*

> order-book imbalance signal

**Problem**
[Error] This bullet repeats the Northpeak internship's order-book signal and 18-month out-of-sample result without distinguishing the project. *(saves about 18 words if cut)*

**Why**
The two entries appear to claim the same work, with the same signal type, testing period, and 0.4 Sharpe change implied by the Northpeak figures. That creates a credibility problem: a reviewer cannot tell which project produced the result or whether one claim is incorrect.

**How to change it**
Cut this bullet if it is the Northpeak result, or revise it with the distinct [data, book, period, and performance figure] for the competition project.

*raised by narrative*

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled. *(no words)*

**Why**
A spelling error in a Methods skill is especially conspicuous on a quantitative research resume because it concerns the field itself. It can make the skills section look insufficiently proofread.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

> Kafka

**Problem**
[Polish] Kafka is listed under Programming without supporting evidence elsewhere in the resume. *(saves 1 word)*

**Why**
A recruiter may question whether Kafka is a genuine working skill or an unsubstantiated keyword. The absence of a project or experience line showing its use weakens the credibility of the skills section.

**How to change it**
Remove Kafka unless the candidate can add a truthful supporting project or experience detail showing how it was used.

*raised by narrative*

## Already working

- s2:e0:b1: Shows a clear before-and-after result with a defined denominator.
- s2:e2:b2: Combines teaching responsibility, audience size, produced materials, and evaluation.

## Set aside (1)

- s2:e1:b5: the strongest line is not the opening one: “Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.” would land harder first
