> Here is my resume: bench/planted-defects/tests-final/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all **5 entries with bullets** for content and wording, plus the overall narrative and file format. The 2 education entries had no bullets to review. Job-description matching was not run because no posting was provided.

Most important changes:

1. **Resolve the duplicated trading result.** The Northpeak internship and Kaggle project both claim the same order-book signal, 18-month test, and **0.4 Sharpe improvement**. Keep it under the correct entry or clearly distinguish the two results.
2. **Reposition Sunrise Bakery.** Move it below the quantitative experience and projects—ideally into a brief **Additional Experience** section—so the quant internship leads your career story.
3. **Correct credibility-sensitive methodology claims.** In particular, selecting the best of 400 configurations does not establish “expected live Sharpe,” and using the same random seed on every worker needs clarification if the 2,000 simulations were distinct.
4. Fix **“econometircs” → “econometrics,”** remove the first-person phrase **“my proof,”** and either show where **Kafka** was used or remove it from Skills.
5. Add missing context to several figures: define the 35% risk-adjusted-return metric and baseline, identify the competition metric behind the 0.02 gap, and specify the forecast horizon and crisis periods in the volatility study.

The PDF itself is one page, parses cleanly, and has no ATS or layout blockers. The complete findings are available in **`/report --full`**.

> /report
# Review: resume.pdf

**89/100** — format 100 · content 84 · wording 90 · narrative 71

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 20 important, 15 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Assistant Store Manager

**Problem**
[Important] Placing the current assistant store manager role first makes the chronology read as an unexplained pivot away from quantitative work and a backward step in field-specific seniority.

**Why**
The dates show continuous employment, but the immediate move from a quantitative internship to retail management invites questions about your present career direction. Giving unrelated retail work the first position also delays the experience most relevant to quantitative recruiters.

**How to change it**
Move Sunrise Bakery out of the main Experience sequence and place it as a one-line Additional Experience entry after Projects.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
1. [Polish] The line states the size of the management responsibility without showing how labour was managed.
2. [Polish] The labour-budget result does not show how long budget control was sustained.
3. [Polish] The current role incorrectly begins with the past-tense verb "Managed."

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
1. [Important] The stronger quantified inventory result should open the entry.
2. [Polish] The current role incorrectly uses the past-tense verb "Ran."

**Why**
1. The reduction from 12% to 7% is the entry's clearest evidence of operating impact. Leading with it gives the reader a measurable result before the less specific staffing line.

**How to change it**
1. Move this bullet above the opening-shift bullet.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
1. [Important] The 35% improvement does not identify either the risk-adjusted performance metric or its baseline.
2. [Important] The line names the position smoother's purpose but not its technical approach.

**Why**
1. A quantitative hiring manager cannot tell whether this means Sharpe, return per unit of volatility, or another measure. The reader also cannot determine whether the comparison was against the unsmoothed signal, a prior implementation, or another strategy.
2. The reader can see that the component considered costs, but not what modeling or optimization work was involved. That prevents a technical reviewer from judging the depth of the implementation.

**How to change it**
1. Replace "risk-adjusted returns" with [specific metric] and add "versus [baseline strategy or prior implementation]." If supported, use the actual from-to comparison instead of only the percentage.
2. Replace "position smoother" with [specific smoothing or optimization method]. Retain "cost-aware" only if transaction costs entered the objective or constraints.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo period do not establish that every backtest decision used only information available at the time.
2. The concluding backtest clause is unnecessarily wordy.

**Why**
1. Purging and embargoing reduce leakage caused by overlap and dependence between training and validation observations. They do not prevent look-ahead through feature construction, feed timing, execution assumptions, data revisions, or other non-point-in-time inputs, so the current claim overstates what the validation design proves.
2. The long construction delays the point and makes an already technical line harder to scan. Tightening it would improve readability, although it would not correct the unsupported methodological claim on its own.

**How to change it**
1. Replace the unsupported clause with "to reduce leakage from overlapping observations." If applicable, add the actual [point-in-time data, event-time, latency, and execution controls] used to prevent look-ahead.
2. If the claim is independently supportable, replace it with "ensuring each backtest decision used only then-available information." Otherwise use the more limited leakage wording specified above.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Polish] The approved live allocation is too vaguely sized to show the deployment's scale.
2. [Polish] The phrase "to the portfolio managers" is heavier than necessary.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] The best Sharpe selected from 400 backtested configurations is not a valid estimate of expected live Sharpe.
2. [Important] The line omits the selected Sharpe value and a benchmark or held-out comparison.
3. [Important] The parameter-selection activity does not say what decision or outcome it supported.
4. [Polish] The phrase "the best one's Sharpe" has a vague antecedent.

**Why**
1. Selecting the maximum creates multiple-testing bias and winner's curse, so the chosen backtest Sharpe will generally overstate expected live performance. Calling it an expectation without untouched evaluation or a selection-bias adjustment signals a serious validation error.
2. The 400 configurations show the breadth of the search, not the quality of the selected result. Without a performance anchor, the reader cannot judge what the parameter selection achieved.
3. A hiring manager cannot tell whether the work changed the model, informed a risk decision, or advanced deployment. Without a consequence, the line contributes little beyond the stronger smoother and live-allocation bullets.

**How to change it**
1. Replace "expected live Sharpe" with "selected configuration's backtest Sharpe." Use "expected live Sharpe" only if supported by [an untouched holdout, nested walk-forward evaluation, or a documented selection-bias adjustment].
2. After "Sharpe," add [reported Sharpe and the baseline or held-out result it was compared against], using only the estimate actually presented to the desk.
3. Add [research, risk, or deployment decision supported] if an immediate consequence occurred. Otherwise remove this line.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
1. [Error] The order-book imbalance achievement is attributed inconsistently to both the 2025 internship and a 2023 project.
2. [Error] The phrase "over 18 months of out-of-sample backtest" is grammatically awkward.
3. [Important] The entry's strongest quantified result should appear before the other Northpeak bullets.
4. [Important] The principal Sharpe result is buried after the signal description.
5. [Polish] The modifier "after costs" has an uncertain attachment.

**Why**
1. The Northpeak line reports a move from 1.1 to 1.5, exactly the 0.4 improvement claimed elsewhere, and both lines use the same signal type, futures context, and 18-month out-of-sample horizon. If this was one piece of work, dating it under two unrelated entries damages confidence in the résumé's attribution; if the work was separate, the current wording does not distinguish it.
2. The construction treats "backtest" awkwardly as a duration and interrupts a technically strong result. A standard adjectival construction is easier to parse.
3. The Sharpe increase, out-of-sample horizon, and cost treatment provide the clearest summary of research impact. Once its attribution is corrected, leading with it would establish the internship's value before the supporting validation and infrastructure details.
4. Recruiters scanning the line encounter implementation detail before its clearest outcome. Moving the from-to result nearer the opening makes the impact immediately visible.

**How to change it**
1. Keep the result only under the entry where it occurred. If these were separate signals, distinguish this one using the true [market, dataset, implementation, test period, or separate result].
2. Replace it with "in an 18-month out-of-sample backtest."
3. If the result belongs to Northpeak, move this bullet to the top of the entry. If it does not, remove it from this entry instead.
4. Move "raised the desk book's Sharpe ratio from 1.1 to 1.5" nearer the beginning of the bullet, provided the result is retained under this entry.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Error] Using the same random seed on every worker does not produce 2,000 distinct Monte Carlo replications unless independent random-number substreams were configured.
2. [Polish] The phrase "running the runs in parallel" is repetitive.
3. The line says the study was parallelized without identifying how parallel execution was implemented.

**Why**
1. Identically initialized workers produce identical pseudorandom sequences, duplicating corresponding runs and reducing the effective number of independent replications. Parallel execution can explain the runtime reduction, but the stated seeding scheme invalidates the 2,000-run design as written.
3. The runtime improvement is substantial, but "in parallel" does not reveal the execution design or tool that produced it. One concrete implementation detail would make the computational contribution easier to assess.

**How to change it**
1. If independent substreams were used, replace the seeding phrase with "reproducible independent random-number streams." Otherwise rerun with distinct valid streams and remove the same-seed claim.
3. Add [parallel framework or execution design] if that detail is accurate and useful.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The variance-bound result should open the research-assistant entry.
2. [Polish] The variance-bound line does not identify the mathematical approach used to derive it.
3. [Polish] The phrase "is now Section 3 of a paper" is awkward and wordy.
4. [Polish] The personal pronoun "my" breaks the résumé's phrase-based style.

**Why**
1. Tightening a previous theoretical bound and contributing the proof to a paper under review at JASA are the entry's strongest research signals. Placing this first would foreground field-relevant intellectual contribution rather than computational support.

**How to change it**
1. Move this bullet to the top of the entry.

> Released an open-source R package for high-dimensional covariance estimation with shrinkage and factor models, downloaded 3,000 times in its first year.

**Problem**
[Important] The download count establishes adoption but not what the package enabled for users.

**Why**
Three thousand downloads show reach, but they do not indicate whether the package made estimation easier, faster, more reproducible, or newly possible. A documented user outcome would turn popularity into evidence of practical value.

**How to change it**
Retain the download figure and add "enabling [specific research or user capability]" if that outcome is documented.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
1. [Important] The out-of-sample QLIKE result does not identify the forecast horizon.
2. [Polish] The abbreviations "HAR-RV" and "QLIKE" are unexplained on first use.

**Why**
1. Forecasting performance depends materially on whether the target is next-day, weekly, or another horizon. Without that information, a reader cannot fully interpret the 7% improvement or compare it with other volatility forecasts.

**How to change it**
1. Replace "out-of-sample QLIKE loss" with "out-of-sample [forecast horizon]-ahead QLIKE loss."

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The two crisis periods are not identified.
2. [Important] The testing method appears before the more important significance result.

**Why**
1. Without names or dates, the reader cannot tell which stress regimes the robustness result covers. That limits the value of the claim that the gain survived both periods.
2. The current opening makes the reader process the procedure before learning that the gain held on 24 indices. Leading with that finding would make the result easier to scan while retaining the Diebold-Mariano and Holm details as support.

**How to change it**
1. Replace "both crisis periods" with [names or dates of the two crisis periods].
2. Move the clause stating that the gain held at the 5% level on 24 indices to the beginning, and place the testing method afterward.

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
1. [Important] The seminar wording leaves both the presenter and the host department unidentified.
2. [Polish] The opening "Wrote up" is less direct and forceful than "Authored."

**Why**
1. A reader cannot tell whether you delivered the presentation or only authored a paper presented by someone else. The unnamed department also provides little context for judging the venue.

**How to change it**
1. If you presented it, replace the passive construction with "and presented it at [institution or department name]'s financial econometrics seminar." Otherwise identify [presenter or presentation context] accurately.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The modeling line gives no outcome from the feature engineering or model training.
2. [Important] The line does not identify the most meaningful feature family or modeling choice.
3. [Important] The phrase "for a market prediction competition" repeats information already supplied by the heading.

**Why**
1. The reader cannot tell whether the work improved predictive performance, produced a competitive submission, or merely completed the pipeline. Without an outcome, the line does not establish the contribution's effectiveness.
2. The general workflow is clear, but it does not show what substantive technical judgment you contributed. Specificity would give a hiring manager a better basis for assessing your modeling skill.
3. The entry title already identifies both the competition and its market-prediction topic. Repeating that context uses space that would be better spent on a metric, feature family, or result.

**How to change it**
1. Add the strongest available result as [change in competition metric against baseline] or [final leaderboard result].
2. Replace "features" with [most consequential feature family] and, if useful, replace "gradient-boosting models" with [specific algorithm].
3. Remove "for a market prediction competition."

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 validation gap does not identify the metric being compared.
2. [Important] The validation-leakage result should open the competition entry.

**Why**
1. A difference of 0.02 can be large or negligible depending on the competition metric. Without the metric, the reader cannot interpret the significance of closing the local-to-leaderboard gap.
2. Closing a measured gap between local validation and leaderboard performance is the entry's clearest competition-specific outcome. Leading with it would show diagnostic judgment and impact before the generic modeling activity.

**How to change it**
1. Replace "0.02 gap" with "0.02 gap in [competition metric]."
2. Move this bullet above the feature-engineering bullet.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Error] The futures-book Sharpe result is attributed inconsistently and is not connected to the Kaggle competition.
2. [Polish] The phrase "Added 0.4 to the Sharpe ratio" is less direct than necessary.

**Why**
1. The same signal type, 0.4 Sharpe improvement, and 18-month out-of-sample horizon appear under the later Northpeak internship. The first two Kaggle bullets describe competition work, while this line suddenly describes a futures book, making it look misplaced or duplicated and undermining confidence in the attribution.

**How to change it**
1. Keep the result only under the entry where it occurred. If it was separate Kaggle work, replace the line with the project's distinct [competition metric, result, and evaluation period].

## Skills

> econometircs

**Problem**
[Error] "econometircs" is misspelled.

**Why**
The error appears in a methods label directly related to the candidate's field. A visible typo in technical skills weakens the impression of precision.

**How to change it**
Replace "econometircs" with "econometrics."

> Kafka

**Problem**
[Important] Kafka is listed as a programming skill without supporting evidence elsewhere in the résumé.

**Why**
No experience or project line shows or necessarily implies its use. The unsupported listing may prompt a technical interviewer to question the depth or recency of that skill.

**How to change it**
Name Kafka in the relevant experience or project line if it was materially used; otherwise remove it from Programming.

## Already working

- s2:e1:b2: Combines implementation scope with a checkable downstream adoption result.
- s2:e2:b2: Combines instructional scope, material development, and learner feedback in one compact line.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-eb8164ba.md.

