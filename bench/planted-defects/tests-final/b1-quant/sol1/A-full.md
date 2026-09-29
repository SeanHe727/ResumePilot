# Full review: resume.pdf

**89/100** — format 100 · content 84 · wording 86 · narrative 75

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 9 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Leading Experience with the bakery role delays the quantitative internship. *(saves about 30 words)*

**Why**
A recruiter scanning for quantitative research reaches the less relevant role first, despite the internship’s directly comparable results. The current order makes the résumé’s quantitative focus less immediate.

**How to change it**
Move Sunrise Bakery to a one-line Additional Experience entry after Projects. Let Northpeak Capital lead Experience while keeping the Ph.D. first.

*raised by narrative*

> Sep 2025 - Present

**Problem**
[Polish] The transition from the quantitative internship to the bakery role has no explanation. *(about 5 words)*

**Why**
The internship ends in Aug 2025 and the assistant store manager role begins in Sep 2025. A quantitative hiring reader may wonder whether that sequence reflects a change in direction, taking attention away from the research experience.

**How to change it**
If there is a brief, accurate explanation, add [context for the change in direction] where the transition is addressed; do not invent a reason.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Polish] The opening-shift description does not show what you did to keep labour costs within budget. *(about 1 word)*

**Why**
A store manager can see the responsibility and the budget result, but not the staffing decision behind them. That leaves your labour-cost management skill hard to assess.

**How to change it**
If accurate, replace “Managed opening shifts” with “Adjusted opening-shift staffing”; otherwise, name the [staffing decision] that helped keep the store within budget.

*raised by content*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Polish] “Ran” does not work naturally for supplier orders. *(about 2 words)*

**Why**
The verb fits the stock counts less awkwardly than it fits the orders. The phrasing makes a straightforward operating responsibility take extra effort to read.

**How to change it**
Replace the phrase with “Conducted daily stock counts and placed supplier orders.”

*raised by wording*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold-Mariano tests do not generally establish a forecast gain over an estimated nested HAR-RV baseline. *(about 5 words)*
2. [Important] The claimed forecast gain has no stated magnitude. *(about 6 words)*

**Why**
1. Estimating a larger nested model adds forecast noise, so the usual Diebold-Mariano null distribution can be invalid. A reader familiar with forecast evaluation will question the claimed confirmation unless the test or a design that justifies it is specified.
2. The reader can see that a comparison was made but cannot judge how much performance changed against HAR-RV. “30 indices” gives the scope of evaluation, not the size of the gain.

**How to change it**
1. If you ran a valid nested-model test, replace “standard Diebold-Mariano tests” with [test name] and give [its result]. If a fixed-window design justified the standard test, specify [that design]; otherwise, remove “Confirmed” and the unsupported test claim.
2. Add [forecast-performance metric and improvement versus the nested HAR-RV baseline] beside “forecast gain,” retaining a valid test as the method if one was used.

*raised by content*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Important] The feature store and its reuse are buried behind implementation details. *(no words)*

**Why**
A scanning reader encounters the joins, late prints and schemas before learning what you delivered. Leading with the feature store makes the later reuse visible before the technical explanation.

**How to change it**
Move “built a feature store the team reused in two later projects” to the front. Follow it with the most telling existing details, such as point-in-time joining and late-print deduplication.

*raised by content, wording*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 does not annualize it correctly. *(no words)*
2. [Polish] The line ends with reporting the figure rather than saying what the report informed. *(about 2 words)*

**Why**
1. Under the usual approximation of uncorrelated daily returns, the multiplier is √252, not 252; serial dependence may require a further adjustment. The stated method therefore makes the reported performance calculation look unreliable.
2. A hiring reader cannot tell whether the calculation contributed to an assessment or decision. Without that consequence, the line offers little evidence beyond completing a reporting task.

**How to change it**
1. If that is what was actually calculated, replace “multiplying it by 252” with “multiplying it by √252.” Otherwise, recalculate using [the appropriate return-series adjustment] before describing the method.
2. If there was a consequence, replace the phrase with [specific assessment or decision the reported figure informed]. Otherwise, omit the line.

*raised by content*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] The first-week onboarding use appears too late in the documentation bullet. *(no words)*

**Why**
The reader sees a list of documented materials before discovering that another cohort used them. Moving the use closer to the action makes the value of the wiki easier to catch.

**How to change it**
Move “the next intern cohort used to onboard in their first week” closer to “Documented,” then keep the existing list of documented materials after it.

*raised by wording*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Important] The cluster location does not explain your technical contribution to the simulation speedup. *(about 4 words)*

**Why**
The runtime reduction is substantial, but “on the shared cluster” says where the pipeline ran rather than what made it faster. A statistical computing reader cannot tell which part of the improvement came from your work.

**How to change it**
If accurate, add [main parallelization or job-scheduling technique] near “simulation pipeline”; keep the existing runtime comparison.

*raised by content*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The entry opens with the pipeline rather than its strongest research result. *(no words)*
2. [Polish] The comparison behind the log-factor improvement is unnamed. *(about 2 words)*
3. [Polish] The proof result has no distinguishing technique attached to it. *(about 3 words)*
4. [Polish] “My proof” breaks the bullet’s implied third-person résumé voice. *(no words)*

**Why**
1. The proof has a defined mathematical improvement and a place in a paper under review, so it gives a research reader the clearest reason to keep reading. The current order delays that evidence and leaves teaching ahead of the package result.
2. A research reader cannot tell which earlier result the proof improves. That makes the size and significance of the advance harder to judge.
3. The bullet says what the proof establishes but gives no indication of the mathematical approach you contributed. One concise detail could make the skill behind the result more legible.
4. The personal pronoun stands out among otherwise impersonal achievement bullets. It distracts from the proof and makes the presentation less consistent.

**How to change it**
1. Move the proof bullet to the start of this entry, followed by the simulation pipeline. Keep the R package distinct from the administrative duties and place the teaching bullet last.
2. If the reference is recognizable and fits, replace “previous bound” with [prior result or authors].
3. If there is a concise, distinctive technique, add [key proof technique] near “Derived”; omit it if the explanation would crowd out the result.
4. Replace “my proof” with “the proof.”

*raised by narrative, content, wording, file*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package description names a field but not what the package implements. *(about 2 words)*
2. [Important] Separate duties interrupt the package result and leave the download clause far from its referent. *(no words)*
3. [Polish] The download count shows reach but not what the package changed for users. *(about 6 words)*

**Why**
1. A statistical learning reader knows the area of work but cannot identify the software’s technical contribution. The download count does not supply that missing description.
2. The reader must pass through cluster maintenance, the reading group and grading before reaching the package’s uptake. At that distance, “which” briefly becomes ambiguous, weakening an otherwise clear result.
3. Downloads do not establish whether the package supported research or improved a workflow. A concrete use, if known, would make its practical contribution clearer.

**How to change it**
1. If accurate, replace that phrase with a compact description naming [estimator or algorithm implemented].
2. Move “downloaded 3,000 times in its first year” immediately after “R package.” Put the maintenance, reading-group and grading duties in a separate line only if they merit space.
3. Keep the download figure; if known, use space freed by separating the other duties to add [concrete research use or workflow the package enabled].

*raised by content, wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is 25%, not 33%. *(no words)*
2. [Important] The before-and-after forecast-error values have no named metric. *(about 2 words)*

**Why**
1. The error fell by 0.05, and 0.05 divided by the starting value of 0.20 is 25%. The incorrect percentage makes a directly checkable result look unreliable.
2. A reader cannot tell what 0.20 and 0.15 measure. That also prevents a clear comparison with the QLIKE result elsewhere in this entry.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [name of the error metric], retaining the existing values.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] A rise from 52% to 58% is 6 percentage points, not a 6% increase. *(about 2 words)*
2. [Polish] The directional hit rate does not identify what was predicted to rise or fall. *(about 2 words)*
3. [Polish] The model and index-scope details repeat the preceding bullet. *(saves about 10 words)*

**Why**
1. Six percentage points is the difference between the two rates; relative to 52%, the increase is about 11.5%. Calling it 6% understates the relative change and uses the wrong unit for the stated difference.
2. In a volatility study, a correct directional prediction has no clear meaning until its target is named. The reader therefore cannot interpret the hit-rate result.
3. If the bullets cover the same evaluation, repeating those details uses space without clarifying the new hit-rate result. Removing them would bring the distinct measure forward.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points.”
2. Qualify “directional hit rate” with [what increased or decreased]; if accurate, identify it as realized volatility.
3. If both bullets describe the same evaluation and model, remove “on 30 equity indices” and “with a temporal convolutional model” here.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
1. [Important] The ensemble description does not separate your contribution from the three-person team’s approach. *(about 4 words)*
2. [Polish] The top-2% clause repeats the placement already given. *(saves about 10 words)*

**Why**
1. The placement is a team result, while the modeling phrase could imply that you personally built the ensemble. A reader needs to know which part of that result reflects your work.
2. “41st of 2,900 teams” already lets a reader see the strength of the finish. Restating its percentile takes space that could distinguish your role.

**How to change it**
1. If accurate, replace part of that phrase with [your specific contribution to the ensemble]. Otherwise, identify your feature-selection contribution here without implying that you built the model.
2. Delete “finishing in the top 2% of the private leaderboard.”

*raised by content, wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Polish] The validation-to-leaderboard gap has no named scoring metric. *(about 2 words)*

**Why**
A difference of 0.02 means little without knowing which competition score it refers to. Naming the metric would let the reader assess the gap while preserving the explanation of how the fold change closed it.

**How to change it**
Add [competition scoring metric] beside “0.02 gap.”

*raised by content*

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled in the Methods skills line. *(no words)*

**Why**
A reader scanning the skills line may notice the spelling error before assessing the method itself. It makes an otherwise straightforward qualification look less carefully presented.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

## Already working

- s2:e1:b0: Leads with the contribution and gives a directly comparable result.
- s2:e1:b1: Shows the benefit and its return trade-off in one line.
- s3:e0:b0: Connects a specific result to a named baseline and a recognizable forecasting method.
