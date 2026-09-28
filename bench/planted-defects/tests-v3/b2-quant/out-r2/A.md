> Here is my resume: bench/planted-defects/tests-v3/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed 5 bullet-bearing entries, plus narrative and format. Education entries had no bullets to review; no job description was loaded.

The main changes to make are:

1. **Reorder the resume’s story**
   - Move Sunrise Bakery to an “Additional Experience” section after the quantitative research experience and projects, or condense it substantially.
   - Keep Northpeak Capital and the research assistantship prominent.

2. **Resolve duplicated or unclear results**
   - The Northpeak and Kaggle entries appear to report the same order-book imbalance result: a 0.4 increase in Sharpe over 18 months.
   - Clarify whether these are separate projects; otherwise keep the result in only one entry.
   - Define the baseline and metric behind Northpeak’s “35% improvement in risk-adjusted returns.”

3. **Correct or qualify methodological claims**
   - The “best Sharpe” among 400 configurations should not be presented as the expected live Sharpe without qualification.
   - Revisit the claim that using the same random seed produced independent Monte Carlo runs.
   - Avoid claiming that time-grouped folds alone caused the full validation improvement.

4. **Strengthen vague bullets**
   - Add baselines, metric names, and outcomes where currently missing, especially the Kaggle feature-engineering bullet.
   - Clarify “small live allocation,” “within its weekly labour budget,” and “added 0.4 to the Sharpe ratio.”

5. **Clean up details**
   - Correct the “econometircs” typo to “econometrics.”
   - Either document Kafka experience or remove Kafka from Skills.
   - Remove the first-person “my proof” phrasing.

The PDF itself is one page, parses cleanly for ATS systems, and has no layout warnings. The full specialist report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 79 · wording 86 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 30 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> raised the desk book’s Sharpe ratio from 1.1 to 1.5

**Problem**
[Error] The order-book imbalance result appears duplicated under Northpeak Capital and the Kaggle competition. *(saves about 12 words if consolidated)*

**Why**
Northpeak reports a rise from 1.1 to 1.5 over 18 months out of sample, while Kaggle reports adding 0.4 over the same period to a futures book. A reader may therefore question whether the work was duplicated or whether the candidate's ownership and project scope are unclear.

**How to change it**
Keep this achievement in one entry, or distinguish the books, periods, and results in the two bullets so the figures cannot be mistaken for the same work.

> Improved risk-adjusted returns by 35%

**Problem**
[Error] The 35% risk-adjusted-return result is not labeled consistently with the selected backtest estimate in the same role. *(about 4 words to add)*

**Why**
The reader cannot tell whether the 35% improvement is an achieved out-of-sample result or a selected backtest estimate. That ambiguity makes the performance claim appear stronger than the evidence may support and undermines confidence in the evaluation.

**How to change it**
Name the risk-adjusted metric and baseline, and label the result consistently as out-of-sample, backtest-selected, or another accurate evaluation status in relation to the configuration search.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Sunrise Bakery currently receives top billing as the newest role even though the target profile is quantitative research. *(no words)*

**Why**
Its chronological placement makes the résumé appear to be moving away from quantitative work. A recruiter scanning the first experience entry may misread the candidate's current direction before reaching the stronger research evidence.

**How to change it**
Move Sunrise Bakery into an "Additional Experience" subsection after the quantitative experience and projects, or condense it to a single line.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The phrase "within its weekly labour budget" does not show how far under or at budget the store finished. *(about 4 words to add)*

**Why**
The reader can see the budget target but not the scale of the result. A variance or percentage would make the budget-control claim more credible without requiring much additional space.

**How to change it**
Keep the budget comparison and add [the amount or percentage under or within the weekly labour budget], if available.

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The bullets use broad or imprecise verbs for managing shifts, a team, and supplier orders. *(no words)*

**Why**
"Managed opening shifts and a team" combines separate responsibilities without showing the specific actions, while "ran" does not reveal whether orders were placed, managed, or processed. The reader therefore gets less evidence of operational ownership than the work may warrant.

**How to change it**
Separate the shift and team responsibilities with specific verbs, and replace "Ran" with the accurate action for supplier orders, such as placed, managed, or processed.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The inventory practices are presented as causing the reduction in unsold bread without establishing that causal link. *(about 3 words to add)*

**Why**
Daily counts and supplier orders can contribute to better production planning, but demand, production volume, product mix, promotions, seasonality, and measurement rules can also change the unsold rate. Without comparable records or controls for those factors, the figures support an association rather than causal attribution.

**How to change it**
If the records support causal attribution, specify the measurement period, product scope, denominator, and relevant controls. Otherwise, change "cutting" to wording that says unsold bread fell during the period of daily stock counts and supplier ordering.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement does not identify the risk-adjusted metric or its baseline. *(about 4 words to add)*

**Why**
A hiring manager cannot tell what the figure represents or reproduce the comparison from the line. Naming the metric and baseline would make the result interpretable and prevent the percentage from sounding larger or more definitive than it is.

**How to change it**
Replace "risk-adjusted returns" with [specific risk-adjusted metric] and state that the improvement was measured against [comparison baseline], if accurate.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not establish that every backtest decision used only information available at the time. *(saves about 8 words)*
2. [Important] The validation method is described without stating what the validation showed. *(about 6 words to add)*

**Why**
1. These methods reduce leakage between overlapping observations and nearby training and test periods, but they do not guarantee point-in-time validity for data revisions, feature construction, universe selection, or researcher-driven parameter selection. The configuration search described elsewhere in this entry can still leak future performance into the final decision, weakening the claim's credibility.
2. The reader can see that the process was careful, but not whether the signal survived validation or produced a useful result. Methodological rigor needs a concise outcome to demonstrate research value and support the investment decision.

**How to change it**
1. Replace that claim with a statement that the splits and embargo reduced temporal leakage. Retain the stronger point-in-time claim only if data provenance and nested, out-of-sample configuration selection were also verified.
2. Keep the validation method and add [validated out-of-sample result, such as the relevant performance metric and comparison] after it.

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Important] The feature-store adoption result is buried at the end of the bullet. *(no words)*

**Why**
The team's reuse in two later projects is the clearest evidence that the artifact mattered, but a scanning reader encounters it only after the implementation detail. Moving the consequence earlier would make the contribution more visible.

**How to change it**
Move the reuse result immediately after "feature store" or otherwise place the two-project adoption before the point-in-time-join detail.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Important] The phrase "small live allocation" leaves the scale of the approved deployment vague. *(about 2 words to add)*
2. [Important] The bullet delays the live-allocation outcome and uses a vague size qualifier. *(saves about 3 words)*

**Why**
1. A reader cannot distinguish a meaningful deployment decision from a token test. One defensible scale detail would make the approval more credible without adding much space.
2. The approval is the most important result, but it appears after the presentation details and the time period. A scanner may miss the adoption decision, while "small" weakens an otherwise concrete outcome.

**How to change it**
1. Replace "small" with [approved allocation size or risk-budget measure], if it can be stated accurately; otherwise keep the approval and remove the vague size qualifier.
2. Move the approval earlier in the bullet, replace "small" with [approved allocation size or risk-budget measure] if accurate, and move or cut "for the next quarter" if it is less important.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] Reporting the best Sharpe from 400 backtested configurations as the expected live Sharpe is statistically invalid. *(about 4 words to add)*
2. [Important] The line gives neither the selected Sharpe value nor its comparison. *(about 4 words to add)*
3. [Important] The parameter-selection bullet does not say what the work changed or enabled. *(about 4 words to add)*
4. [Important] The phrase "the best one’s Sharpe as the expected live Sharpe" is ambiguous about both the configuration and the estimate. *(about 3 words to add)*
5. [Polish] The bullet foregrounds the 400-configuration search before stating the result. *(no words)*

**Why**
1. Selecting the maximum result across 400 configurations introduces multiple-testing and selection bias, so the winning Sharpe contains performance luck from the search and will generally overstate live performance. The same backtest data used for selection cannot provide an unbiased estimate of future performance.
2. Calling a configuration best is not enough to assess the result, particularly when 400 configurations were tested. The metric and comparison need to be visible so the reader can distinguish a meaningful result from search luck.
3. It reads as an internal research step rather than a contribution with a consequence. The reader needs the resulting decision, validated improvement, or deployment outcome to understand why the search mattered.
4. "The best one" does not identify what was selected, and "expected live Sharpe" incorrectly blurs a selected backtest result with a future-performance estimate. The reader cannot tell what was measured or how it should be interpreted.
5. The search process is supporting detail, while the Sharpe result is what a recruiter is most likely to notice. Leading with the configuration count makes the achievement harder to scan and can emphasize selection bias before the reader sees the metric.

**How to change it**
1. Replace the live-expectation claim with the selected backtest Sharpe, or use an untouched outer test period or forward-live period after freezing the parameters. If available, a deflated Sharpe, reality check, or SPA analysis can account for the search.
2. Replace that phrase with [Sharpe value] versus [comparison baseline or benchmark], if accurate, and retain the 400-configuration detail only if space allows.
3. Add [resulting research or investment outcome] after the parameter-selection method, choosing one consequence the candidate can defend.
4. Name the selected configuration or smoother explicitly and describe the number as the selected backtest Sharpe unless an unbiased live estimate was obtained on untouched data.
5. Move the 400-configuration detail after the reported metric and its evaluation status, or cut it if space is limited.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The entry's clearest quantified result appears after several implementation and validation bullets. *(no words)*

**Why**
The order-book signal's rise from 1.1 to 1.5 is the strongest evidence of investment impact, but a scanner may not reach it. Leading with the result would make the entry communicate value before process detail.

**How to change it**
Move this bullet ahead of the implementation and validation bullets, and retain the technical details below it.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Error] Using the same random seed on every worker does not produce appropriately independent Monte Carlo replicates. *(about 2 words to add)*
2. [Important] The phrase "running the runs in parallel" repeats the same word and obscures the actual action. *(no words)*

**Why**
1. Workers generally replay identical pseudorandom sequences, which can substantially reduce the effective number of distinct simulations and invalidate Monte Carlo uncertainty estimates. Reproducibility does not make duplicated random streams independent.
2. The repetition makes the performance improvement harder to scan and does not clearly describe what was parallelized. A direct reference to the simulations or Monte Carlo jobs would make the technical action clearer.

**How to change it**
1. Replace that phrase with "reproducible, independent, non-overlapping random-number streams" only if those streams were implemented. Otherwise, remove the claim that this was a valid 2,000-run Monte Carlo study.
2. Replace the repeated phrase with "running the simulations in parallel" or the accurate name of the parallelized jobs.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Error] The phrase "my proof" uses a first-person pronoun, which does not belong in a résumé bullet. *(saves 1 word)*
2. [Important] The phrase "by a log factor" does not identify the specific bound or term that changed. *(about 5 words to add)*
3. [Important] The publication-status clause delays the main mathematical result and makes the ending dense. *(saves about 2 words)*

**Why**
1. First-person wording breaks the résumé's otherwise phrase-based style and draws attention to sentence form rather than the mathematical result. It also makes the bullet feel less concise and less consistent with the surrounding entries.
2. A statistical-learning reader can recognize a logarithmic improvement but cannot independently judge its size or exact contribution from this wording. Naming the prior and new terms would make the mathematical result assessable.
3. The important contribution is the tightened bound, but the reader reaches it alongside a compressed statement about the paper's status. Reordering the result and publication status would make the achievement easier to scan.

**How to change it**
1. Delete "my" so the bound is described directly, then separate or reorder the publication-status clause if needed.
2. Replace "by a log factor" with [the exact prior-versus-new bound or the specific rate term improved], if available.
3. Move the bound-tightening result before the paper-status clause, and shorten the status wording while retaining that it is under review at JASA.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] The forecasting setup does not identify the prediction horizon or target. *(about 3 words to add)*

**Why**
The reader can identify the model family and realized-volatility inputs but cannot tell what was forecast. Adding the horizon or target would make the result technically reproducible and easier to evaluate.

**How to change it**
Add [forecast horizon] ahead volatility or the accurate forecast target after "realized-volatility features."

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The claim that the gain held at the 5% level in both crisis periods is not established by the described tests across 30 indices. *(saves about 5 words if limited)*
2. [Important] The phrase "in both crisis periods" does not identify the periods tested. *(about 4 words to add)*
3. [Important] The significance-testing wording is redundant, and the relationship between the 24-index result and the crisis-period result is unclear. *(about 2 words to add)*

**Why**
1. Full-sample Diebold-Mariano significance does not imply significance within separate crisis-period subsets. Each crisis period needs its own valid tests and inclusion in the explicitly defined multiplicity-correction family; otherwise the Holm correction described may not support that claim.
2. A reader cannot judge the economic relevance or reproduce the crisis-period result without knowing which periods are meant. Naming the periods would also clarify whether the claim refers to separate subset tests.
3. "Tested significance with Diebold-Mariano tests" repeats the testing concept instead of stating the analytical action precisely. The ending can also be read as saying either that all 24 indices held in both crises or that the crisis result is a separate claim.

**How to change it**
1. If separate crisis-period tests were run and included in the correction, state the crisis definitions and correction family. Otherwise, limit the claim to the 24 of 30 indices that remained significant after Holm correction.
2. Replace the phrase with [names or dates of the two crisis periods], if accurate.
3. Replace the redundant testing phrase with a precise action such as applying Diebold-Mariano tests, and separate the 24-index result from the crisis-period result unless they refer to the same tested set.

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
1. [Important] The line describes authoring a paper without identifying the specific method or robustness work carried out. *(about 2 words to add)*
2. [Important] The bullet uses informal wording and passive voice for the paper and seminar presentation. *(no words)*

**Why**
1. The writing task is clear, but a scanning reader sees documentation rather than analytical work. One specific method or robustness check would provide technical evidence beyond the results already stated.
2. "Wrote up" understates the more precise action of authoring the paper, while "which was presented" leaves unclear whether the candidate presented it. The result is less direct and less evidence of ownership than it could be.

**How to change it**
1. Replace the generic list with [one specific method or robustness check] if it adds technical evidence not already shown elsewhere.
2. Replace "Wrote up" with "Authored" or another accurate verb, and replace the passive presentation clause with an active statement only if the candidate presented the paper.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The competition project gives no result for the feature engineering and gradient-boosting work. *(about 6 words to add)*
2. [Important] The competition bullet repeats its setting and gives no measurable outcome. *(saves about 6 words)*
3. [Important] The bullet names broad methods without showing the concrete feature or modeling decision that demonstrates skill. *(about 3 words to add)*

**Why**
1. A hiring reader cannot see whether the models were competitive or produced a meaningful improvement. The competition setting is not a substitute for a score, ranking, or comparison, so the project currently shows process without evidence of value.
2. The heading already identifies the project as a market prediction competition, so repeating that context uses space without showing what the work achieved. The reader still cannot judge the value of the feature engineering or models.
3. A reader can identify the general workflow but cannot tell what was actually built or decided. A specific representative detail would make the technical contribution more memorable than two generic process labels.

**How to change it**
1. Add [the competition result or model improvement], such as the final ranking, score, or change versus [the relevant baseline], and [the primary competition metric and score]. Replace the repeated competition-setting phrase if space is needed.
2. Cut the repeated competition-setting phrase and use the saved space for [the competition result or model improvement].
3. Replace or qualify the broad method with [the most important feature type or modeling decision]; if accurate, name the specific gradient-boosting implementation or modeling technique used.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] Switching to time-grouped folds does not by itself establish that leakage was reduced or that the 0.02 gap was closed because of the switch. *(about 2 words to add)*
2. [Important] The 0.02 validation-to-leaderboard gap does not identify the competition metric or what the number represents. *(about 4 words to add)*
3. [Polish] The result is buried in a subordinate clause after the method. *(no words)*

**Why**
1. Leakage can remain through future-valued features, global preprocessing, overlapping label horizons, or repeated tuning. The gap could also reflect leaderboard noise or distribution shift unless the other modeling conditions were held constant in a controlled comparison.
2. A reader cannot tell whether 0.02 means score points, percentage points, log loss, Sharpe, or another measure. Clarifying the comparison would make the result independently interpretable.
3. The 0.02 gap change is the bullet's measurable achievement, but a scanner may focus on the fold change and miss it. Making the result the main clause would give the project a clearer outcome.

**How to change it**
1. Replace the causal wording with a factual description that the observed local-validation-to-leaderboard gap decreased by 0.02. Keep the stronger claims only if [a controlled comparison confirmed them].
2. Identify [the competition metric] and, if accurate, state whether 0.02 was an absolute-score difference or [the relevant percentage or relative change].
3. Move the gap result before or immediately after the time-grouped-fold action so it is the main outcome rather than a subordinate clause.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Important] The 0.4 Sharpe increase does not identify the starting Sharpe or the comparison baseline. *(about 5 words to add)*
2. [Polish] "Added 0.4 to the Sharpe ratio" is less idiomatic and less precise than describing an increase by 0.4. *(no words)*

**Why**
1. A reader cannot tell whether the change was relative to an existing strategy, a benchmark, or a no-signal version. The 18-month test period adds credibility but does not define what the increase measures.
2. The wording can make the reader wonder whether 0.4 was added as a value or represented a measured change. More direct language would make the quantitative result easier to scan.

**How to change it**
1. Specify that the increase was measured against [the prior strategy, benchmark, or no-signal baseline], and include [the baseline and resulting Sharpe ratios] if available and accurate.
2. Replace "Added 0.4 to" with "increased ... by 0.4" and connect the futures-book result to the competition only if it belongs to this project.

> Added 0.4 to the Sharpe ratio of a futures book

**Problem**
[Important] The Kaggle entry starts as a competition project but ends with an order-book signal result that duplicates the Northpeak achievement, making the project's scope and ownership unclear. *(saves about 12 words if removed)*

**Why**
The competition methods and the futures-book Sharpe result do not visibly belong to the same project, while the result resembles the Northpeak bullet. A reader may not know which work was done for the competition or what contribution the candidate made there.

**How to change it**
Remove that result from the competition entry if it belongs to Northpeak, or identify the competition-specific book, period, and contribution so its scope is distinct.

## Skills

> econometircs

**Problem**
[Error] The Methods skills list misspells econometrics. *(no words)*

**Why**
The misspelling is immediately visible in a technical skills section and can make a reader question attention to detail. It also weakens a term that is directly relevant to the volatility-forecasting work.

**How to change it**
Replace "econometircs" with "econometrics".

> Kafka

**Problem**
[Important] Kafka is listed under Programming without evidence of Kafka use elsewhere in the résumé. *(saves 1 word if removed)*

**Why**
A recruiter cannot verify whether Kafka is a genuine working skill or an unsupported keyword. The unsupported item takes attention away from better-evidenced quantitative tools and may invite questions about experience that the résumé does not answer.

**How to change it**
Add an entry showing how Kafka was used, if accurate, or remove Kafka from the skills list.

## Already working

- s2:e2:b3: Connects an artifact, its technical purpose, and external adoption in one line.

## Set aside (5)

5 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-28a34603.md.

