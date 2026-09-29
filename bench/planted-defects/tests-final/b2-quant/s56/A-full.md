# Full review: resume.pdf

**89/100** — format 100 · content 84 · wording 90 · narrative 71

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 20 important, 15 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Assistant Store Manager

**Problem**
[Important] Placing the current assistant store manager role first makes the chronology read as an unexplained pivot away from quantitative work and a backward step in field-specific seniority. *(saves about 25 words)*

**Why**
The dates show continuous employment, but the immediate move from a quantitative internship to retail management invites questions about your present career direction. Giving unrelated retail work the first position also delays the experience most relevant to quantitative recruiters.

**How to change it**
Move Sunrise Bakery out of the main Experience sequence and place it as a one-line Additional Experience entry after Projects.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
1. [Polish] The line states the size of the management responsibility without showing how labour was managed. *(about 3 words)*
2. [Polish] The labour-budget result does not show how long budget control was sustained. *(about 4 words)*
3. [Polish] The current role incorrectly begins with the past-tense verb "Managed." *(no words)*

**Why**
1. The team size establishes scope, but an assistant store manager is judged on the staffing decision or operating practice used to control labour. Without that method, the reader may interpret the work as routine shift coverage rather than active management.
2. A weekly benchmark is useful, but it could describe one successful week or consistent performance throughout the role. That ambiguity weakens the evidence of reliable cost control.
3. The entry runs through "Present," so the tense makes an ongoing responsibility sound finished. Consistent present tense makes the chronology immediately clear.

**How to change it**
1. Replace "Managed opening shifts" with [specific scheduling or staffing-control action]. If accurate, "adjust shift coverage to demand" would make the method concrete while retaining the team size.
2. Add "for [number of consecutive weeks]" after "weekly labour budget" if that period can be supported.
3. Replace "Managed" with "Manage."

*raised by content, wording*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
1. [Important] The stronger quantified inventory result should open the entry. *(no words)*
2. [Polish] The current role incorrectly uses the past-tense verb "Ran." *(no words)*

**Why**
1. The reduction from 12% to 7% is the entry's clearest evidence of operating impact. Leading with it gives the reader a measurable result before the less specific staffing line.
2. Because the role is ongoing, the past tense suggests that the stock-count and ordering responsibility has ended. Present tense keeps the line aligned with the entry dates.

**How to change it**
1. Move this bullet above the opening-shift bullet.
2. Replace "Ran" with "Run."

*raised by narrative, wording*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
1. [Important] The 35% improvement does not identify either the risk-adjusted performance metric or its baseline. *(about 6 words)*
2. [Important] The line names the position smoother's purpose but not its technical approach. *(about 2 words)*

**Why**
1. A quantitative hiring manager cannot tell whether this means Sharpe, return per unit of volatility, or another measure. The reader also cannot determine whether the comparison was against the unsmoothed signal, a prior implementation, or another strategy.
2. The reader can see that the component considered costs, but not what modeling or optimization work was involved. That prevents a technical reviewer from judging the depth of the implementation.

**How to change it**
1. Replace "risk-adjusted returns" with [specific metric] and add "versus [baseline strategy or prior implementation]." If supported, use the actual from-to comparison instead of only the percentage.
2. Replace "position smoother" with [specific smoothing or optimization method]. Retain "cost-aware" only if transaction costs entered the objective or constraints.

*raised by content*

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo period do not establish that every backtest decision used only information available at the time. *(saves about 3 words)*
2. The concluding backtest clause is unnecessarily wordy. *(saves about 3 words)*

**Why**
1. Purging and embargoing reduce leakage caused by overlap and dependence between training and validation observations. They do not prevent look-ahead through feature construction, feed timing, execution assumptions, data revisions, or other non-point-in-time inputs, so the current claim overstates what the validation design proves.
2. The long construction delays the point and makes an already technical line harder to scan. Tightening it would improve readability, although it would not correct the unsupported methodological claim on its own.

**How to change it**
1. Replace the unsupported clause with "to reduce leakage from overlapping observations." If applicable, add the actual [point-in-time data, event-time, latency, and execution controls] used to prevent look-ahead.
2. If the claim is independently supportable, replace it with "ensuring each backtest decision used only then-available information." Otherwise use the more limited leakage wording specified above.

*raised by content, wording*

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Polish] The approved live allocation is too vaguely sized to show the deployment's scale. *(about 3 words)*
2. [Polish] The phrase "to the portfolio managers" is heavier than necessary. *(saves 1 word)*

**Why**
1. Approval by portfolio managers is strong evidence of impact, but "small" does not reveal the commercial or risk significance of the decision. A permitted scale measure would let the reader distinguish a token trial from a meaningful allocation.
2. The definite article adds no information and slightly slows an otherwise direct line. Removing it keeps attention on the approved allocation.

**How to change it**
1. If disclosure is permitted, replace "small" with [allocation amount, percentage of risk budget, or another permitted scale measure]. Otherwise retain the wording because the approval itself remains useful.
2. Replace "to the portfolio managers" with "to portfolio managers."

*raised by content, wording*

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] The best Sharpe selected from 400 backtested configurations is not a valid estimate of expected live Sharpe. *(about 1 word)*
2. [Important] The line omits the selected Sharpe value and a benchmark or held-out comparison. *(about 8 words)*
3. [Important] The parameter-selection activity does not say what decision or outcome it supported. *(about 6 words)*
4. [Polish] The phrase "the best one's Sharpe" has a vague antecedent. *(no words)*

**Why**
1. Selecting the maximum creates multiple-testing bias and winner's curse, so the chosen backtest Sharpe will generally overstate expected live performance. Calling it an expectation without untouched evaluation or a selection-bias adjustment signals a serious validation error.
2. The 400 configurations show the breadth of the search, not the quality of the selected result. Without a performance anchor, the reader cannot judge what the parameter selection achieved.
3. A hiring manager cannot tell whether the work changed the model, informed a risk decision, or advanced deployment. Without a consequence, the line contributes little beyond the stronger smoother and live-allocation bullets.
4. The reader must pause to infer that "one" means one of the 400 configurations. Naming the configuration directly makes the technical comparison precise.

**How to change it**
1. Replace "expected live Sharpe" with "selected configuration's backtest Sharpe." Use "expected live Sharpe" only if supported by [an untouched holdout, nested walk-forward evaluation, or a documented selection-bias adjustment].
2. After "Sharpe," add [reported Sharpe and the baseline or held-out result it was compared against], using only the estimate actually presented to the desk.
3. Add [research, risk, or deployment decision supported] if an immediate consequence occurred. Otherwise remove this line.
4. Replace "the best one's Sharpe" with "the best configuration's Sharpe."

*raised by content, wording*

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
1. [Error] The order-book imbalance achievement is attributed inconsistently to both the 2025 internship and a 2023 project. *(no words)*
2. [Error] The phrase "over 18 months of out-of-sample backtest" is grammatically awkward. *(saves about 1 word)*
3. [Important] The entry's strongest quantified result should appear before the other Northpeak bullets. *(no words)*
4. [Important] The principal Sharpe result is buried after the signal description. *(no words)*
5. [Polish] The modifier "after costs" has an uncertain attachment. *(about 1 word)*

**Why**
1. The Northpeak line reports a move from 1.1 to 1.5, exactly the 0.4 improvement claimed elsewhere, and both lines use the same signal type, futures context, and 18-month out-of-sample horizon. If this was one piece of work, dating it under two unrelated entries damages confidence in the résumé's attribution; if the work was separate, the current wording does not distinguish it.
2. The construction treats "backtest" awkwardly as a duration and interrupts a technically strong result. A standard adjectival construction is easier to parse.
3. The Sharpe increase, out-of-sample horizon, and cost treatment provide the clearest summary of research impact. Once its attribution is corrected, leading with it would establish the internship's value before the supporting validation and infrastructure details.
4. Recruiters scanning the line encounter implementation detail before its clearest outcome. Moving the from-to result nearer the opening makes the impact immediately visible.
5. The reader has to infer whether costs apply to the signal, the Sharpe calculation, or the test as a whole. Standard performance terminology states the treatment more clearly.

**How to change it**
1. Keep the result only under the entry where it occurred. If these were separate signals, distinguish this one using the true [market, dataset, implementation, test period, or separate result].
2. Replace it with "in an 18-month out-of-sample backtest."
3. If the result belongs to Northpeak, move this bullet to the top of the entry. If it does not, remove it from this entry instead.
4. Move "raised the desk book's Sharpe ratio from 1.1 to 1.5" nearer the beginning of the bullet, provided the result is retained under this entry.
5. Replace "after costs" with "net of costs."

*raised by content, narrative, wording*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Error] Using the same random seed on every worker does not produce 2,000 distinct Monte Carlo replications unless independent random-number substreams were configured. *(saves about 1 word)*
2. [Polish] The phrase "running the runs in parallel" is repetitive. *(saves about 2 words)*
3. The line says the study was parallelized without identifying how parallel execution was implemented. *(about 3 words)*

**Why**
1. Identically initialized workers produce identical pseudorandom sequences, duplicating corresponding runs and reducing the effective number of independent replications. Parallel execution can explain the runtime reduction, but the stated seeding scheme invalidates the 2,000-run design as written.
2. Repeating "run" makes the line sound less polished and distracts from the reduction from three days to five hours. A more concise verb preserves the meaning.
3. The runtime improvement is substantial, but "in parallel" does not reveal the execution design or tool that produced it. One concrete implementation detail would make the computational contribution easier to assess.

**How to change it**
1. If independent substreams were used, replace the seeding phrase with "reproducible independent random-number streams." Otherwise rerun with distinct valid streams and remove the same-seed claim.
2. Replace the phrase with "executing them in parallel" or "parallelizing execution."
3. Add [parallel framework or execution design] if that detail is accurate and useful.

*raised by content, wording*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The variance-bound result should open the research-assistant entry. *(no words)*
2. [Polish] The variance-bound line does not identify the mathematical approach used to derive it. *(about 5 words)*
3. [Polish] The phrase "is now Section 3 of a paper" is awkward and wordy. *(no words)*
4. [Polish] The personal pronoun "my" breaks the résumé's phrase-based style. *(no words)*

**Why**
1. Tightening a previous theoretical bound and contributing the proof to a paper under review at JASA are the entry's strongest research signals. Placing this first would foreground field-relevant intellectual contribution rather than computational support.
2. For a statistical learning research role, the proof technique is direct evidence of theoretical skill. Without it, a specialist sees the result but has no technical entry point for judging or discussing the work.
3. A proof does not naturally become a numbered section, and "now" adds little. More direct wording preserves the publication context without distracting from the result.
4. The rest of the résumé presents accomplishments directly without first-person narration. The shift to "my proof" is unnecessary and makes this line stylistically inconsistent.

**How to change it**
1. Move this bullet to the top of the entry.
2. Add "using [principal proof technique or analytical tool]" after "sparse regression estimator," choosing the single method most central to the derivation.
3. Replace the phrase with "appears in Section 3 of a paper."
4. Replace "my proof" with "the proof" or restructure the clause around "tightening the previous bound."

*raised by narrative, content, wording, file*

> Released an open-source R package for high-dimensional covariance estimation with shrinkage and factor models, downloaded 3,000 times in its first year.

**Problem**
[Important] The download count establishes adoption but not what the package enabled for users. *(about 6 words)*

**Why**
Three thousand downloads show reach, but they do not indicate whether the package made estimation easier, faster, more reproducible, or newly possible. A documented user outcome would turn popularity into evidence of practical value.

**How to change it**
Retain the download figure and add "enabling [specific research or user capability]" if that outcome is documented.

*raised by content*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
1. [Important] The out-of-sample QLIKE result does not identify the forecast horizon. *(about 2 words)*
2. [Polish] The abbreviations "HAR-RV" and "QLIKE" are unexplained on first use. *(about 8 words)*

**Why**
1. Forecasting performance depends materially on whether the target is next-day, weekly, or another horizon. Without that information, a reader cannot fully interpret the 7% improvement or compare it with other volatility forecasts.
2. A specialist audience may know both terms, but other recruiters or quantitative readers may not expand them immediately. Unexplained abbreviations can hide an otherwise strong and specific forecasting result.

**How to change it**
1. Replace "out-of-sample QLIKE loss" with "out-of-sample [forecast horizon]-ahead QLIKE loss."
2. Expand both terms on first use unless the intended audience can safely be assumed to know them.

*raised by content, wording*

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The two crisis periods are not identified. *(about 3 words)*
2. [Important] The testing method appears before the more important significance result. *(no words)*

**Why**
1. Without names or dates, the reader cannot tell which stress regimes the robustness result covers. That limits the value of the claim that the gain survived both periods.
2. The current opening makes the reader process the procedure before learning that the gain held on 24 indices. Leading with that finding would make the result easier to scan while retaining the Diebold-Mariano and Holm details as support.

**How to change it**
1. Replace "both crisis periods" with [names or dates of the two crisis periods].
2. Move the clause stating that the gain held at the 5% level on 24 indices to the beginning, and place the testing method afterward.

*raised by content, wording*

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
1. [Important] The seminar wording leaves both the presenter and the host department unidentified. *(about 4 words)*
2. [Polish] The opening "Wrote up" is less direct and forceful than "Authored." *(saves 1 word)*

**Why**
1. A reader cannot tell whether you delivered the presentation or only authored a paper presented by someone else. The unnamed department also provides little context for judging the venue.
2. The line describes a substantial 12-page working paper, so an informal phrasal verb understates the deliverable. A direct verb gives the work more appropriate weight.

**How to change it**
1. If you presented it, replace the passive construction with "and presented it at [institution or department name]'s financial econometrics seminar." Otherwise identify [presenter or presentation context] accurately.
2. Replace "Wrote up" with "Authored."

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The modeling line gives no outcome from the feature engineering or model training. *(about 7 words)*
2. [Important] The line does not identify the most meaningful feature family or modeling choice. *(about 3 words)*
3. [Important] The phrase "for a market prediction competition" repeats information already supplied by the heading. *(saves 5 words)*

**Why**
1. The reader cannot tell whether the work improved predictive performance, produced a competitive submission, or merely completed the pipeline. Without an outcome, the line does not establish the contribution's effectiveness.
2. The general workflow is clear, but it does not show what substantive technical judgment you contributed. Specificity would give a hiring manager a better basis for assessing your modeling skill.
3. The entry title already identifies both the competition and its market-prediction topic. Repeating that context uses space that would be better spent on a metric, feature family, or result.

**How to change it**
1. Add the strongest available result as [change in competition metric against baseline] or [final leaderboard result].
2. Replace "features" with [most consequential feature family] and, if useful, replace "gradient-boosting models" with [specific algorithm].
3. Remove "for a market prediction competition."

*raised by content, wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 validation gap does not identify the metric being compared. *(about 3 words)*
2. [Important] The validation-leakage result should open the competition entry. *(no words)*

**Why**
1. A difference of 0.02 can be large or negligible depending on the competition metric. Without the metric, the reader cannot interpret the significance of closing the local-to-leaderboard gap.
2. Closing a measured gap between local validation and leaderboard performance is the entry's clearest competition-specific outcome. Leading with it would show diagnostic judgment and impact before the generic modeling activity.

**How to change it**
1. Replace "0.02 gap" with "0.02 gap in [competition metric]."
2. Move this bullet above the feature-engineering bullet.

*raised by content, narrative*

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Error] The futures-book Sharpe result is attributed inconsistently and is not connected to the Kaggle competition. *(no words)*
2. [Polish] The phrase "Added 0.4 to the Sharpe ratio" is less direct than necessary. *(no words)*

**Why**
1. The same signal type, 0.4 Sharpe improvement, and 18-month out-of-sample horizon appear under the later Northpeak internship. The first two Kaggle bullets describe competition work, while this line suddenly describes a futures book, making it look misplaced or duplicated and undermining confidence in the attribution.
2. The current wording makes a straightforward performance change sound indirect. A stronger verb presents the quantified result more cleanly if the line is retained under the correct entry.

**How to change it**
1. Keep the result only under the entry where it occurred. If it was separate Kaggle work, replace the line with the project's distinct [competition metric, result, and evaluation period].
2. Replace it with "Raised the Sharpe ratio by 0.4."

*raised by content, narrative, wording*

## Skills

> econometircs

**Problem**
[Error] "econometircs" is misspelled. *(no words)*

**Why**
The error appears in a methods label directly related to the candidate's field. A visible typo in technical skills weakens the impression of precision.

**How to change it**
Replace "econometircs" with "econometrics."

*raised by narrative*

> Kafka

**Problem**
[Important] Kafka is listed as a programming skill without supporting evidence elsewhere in the résumé. *(saves 1 word)*

**Why**
No experience or project line shows or necessarily implies its use. The unsupported listing may prompt a technical interviewer to question the depth or recency of that skill.

**How to change it**
Name Kafka in the relevant experience or project line if it was materially used; otherwise remove it from Programming.

*raised by narrative*

## Already working

- s2:e1:b2: Combines implementation scope with a checkable downstream adoption result.
- s2:e2:b2: Combines instructional scope, material development, and learner feedback in one compact line.

## Set aside (2)

- s2:e2:b0: "running the runs in parallel" names the strategy but not how it was implemented.
- s2:e1:b1: “so every backtest decision used only information available at the time” is wordy; “ensuring each backtest decision used only then-available information” is tighter.
