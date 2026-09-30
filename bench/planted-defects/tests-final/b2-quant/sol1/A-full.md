# Full review: resume.pdf

**88/100** — format 100 · content 84 · wording 86 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 12 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The bakery role appears before the quantitative research internship and research assistant role. *(no words)*

**Why**
That ordering makes the current store-management job define the page’s direction before a reader reaches the research experience. For a quantitative research reader, the most relevant work arrives later than it needs to.

**How to change it**
Move the Northpeak and research assistant entries ahead of Sunrise Bakery. Keep Sunrise Bakery brief under Additional Experience after the relevant experience and projects.

*raised by narrative*

> Sep 2025 - Present

**Problem**
[Polish] The dates show a shift into bakery management immediately after the quantitative research internship without explaining the change in direction. *(about 6 words)*

**Why**
A reader following the chronology may wonder how the current role fits your quantitative research path. Without context, the transition can draw attention away from the research experience you want them to consider.

**How to change it**
If there is relevant context, add [brief, accurate context for the move] where you explain your career direction; otherwise, keep the chronology accurate and let the experience ordering emphasize research.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The opening-shift description does not show what you did to keep labour costs within budget. *(about 5 words)*

**Why**
A reader sees the size of the team and the budget outcome, but not the staffing decision connecting them. That leaves the management skill behind the result hard to assess.

**How to change it**
If accurate, replace “Managed opening shifts” with [specific scheduling or staffing action that helped keep labour costs on budget].

*raised by content, wording*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
1. [Important] The 35% improvement does not identify the risk-adjusted metric or its comparison strategy. *(about 4 words)*
2. [Polish] The description does not show how costs affected the position smoother. *(about 6 words)*

**Why**
1. A quant reader cannot tell what rose by 35% or what the smoother improved upon. Without both, the size of the result is difficult to interpret.
2. “Cost-aware” signals a technical design choice but does not identify it. A concrete constraint would let a reader assess your contribution rather than infer how the smoother worked.

**How to change it**
1. Replace “risk-adjusted returns” with [risk-adjusted metric] and identify [reference strategy] for the 35% comparison.
2. If accurate, add [the cost or turnover constraint the smoother used] beside “position smoother.”

*raised by content*

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] The claim that every backtest decision used only information available at the time is not established by purged splits and an embargo. *(saves about 4 words)*
2. [Important] The explanatory clause makes the validation line longer without adding a necessary result. *(saves 12 words)*
3. [Important] The six-year validation description does not state what the test found. *(about 8 words)*

**Why**
1. Purging and embargoes address leakage between training and test periods, particularly from overlapping labels. They do not establish decision-time availability for every feature, transformation and simulated execution, so the sentence overstates what the validation proves.
2. After the named splits and embargo, the clause spends space explaining their intended effect. Cutting it would leave room for what the validation found, which is more consequential to a reader.
3. The data span shows the scale of the exercise, not its outcome. A reader still cannot tell what the out-of-sample test established or what decision it supported.

**How to change it**
1. Replace that clause with “to reduce leakage between training and test periods.” If [the full backtest pipeline was separately checked for decision-time availability], describe that check separately.
2. Cut the clause if the distinction does not need spelling out here.
3. Add [the principal out-of-sample finding or decision the validation supported], using space freed from the explanatory clause if needed.

*raised by content, wording*

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The reuse result is buried after the description of the feature store. *(no words)*

**Why**
The later use by the research team is evidence that the work mattered beyond its initial build. Placing it first lets a reader grasp that outcome before the implementation details.

**How to change it**
Move the reuse result ahead of the feature-store description, adjusting the reference to the store.

*raised by wording*

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The live-allocation approval is buried after the presentation details. *(no words)*

**Why**
Approval tells a reader what followed the presentation. Leading with it makes the consequence clear before listing what you presented to the portfolio managers.

**How to change it**
Move the approval ahead of “Presented the signal, its capacity estimate and failure cases.”

*raised by wording*

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] The best backtested Sharpe among 400 configurations is not an expected live Sharpe without further validation. *(saves about 2 words)*
2. [Important] The reported Sharpe has no stated value. *(about 2 words)*
3. [Polish] The line stops at reporting the selected result rather than saying whether it changed a decision. *(about 5 words)*

**Why**
1. Selecting the highest result from 400 configurations introduces selection bias. That winning result is an observed backtest Sharpe, not a defensible live-performance expectation.
2. The 400 configurations show how many alternatives were tested, not how the selected one performed. A reader cannot assess the reported result without its figure.
3. A reader cannot tell whether the analysis informed further research or trading. That limits the apparent consequence of the parameter-selection work.

**How to change it**
1. Call it the best backtested Sharpe among 400 configurations, not the expected live Sharpe. If [an untouched evaluation or selection-bias adjustment was performed], use that result for a qualified live-performance estimate.
2. If useful to this point, add [the reported backtest Sharpe] beside “best one’s Sharpe.”
3. If the analysis informed a decision, replace some reporting detail with [the decision or research action that followed].

*raised by content*

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
1. [Important] The desk book’s Sharpe improvement is buried after the signal description. *(no words)*
2. [Important] The strongest Northpeak bullet is not the first bullet in the entry. *(no words)*

**Why**
1. The change from 1.1 to 1.5 is the line’s clearest measured result. A reader scanning the opening words reaches the signal design before seeing what it achieved.
2. The opening bullet gives a 35% improvement without naming its metric or comparator, while this one states a before-and-after Sharpe ratio and its test context. A reader encountering the entry in order misses that more concrete result at first.

**How to change it**
1. Move the Sharpe result to the start of the bullet, then give the order-book imbalance signal as its explanation.
2. Move this bullet ahead of the current opening bullet.

*raised by wording, narrative*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Polish] “Running the runs” repeats the same word awkwardly. *(saves 1 word)*

**Why**
The repetition interrupts an otherwise direct account of the speed improvement. A pronoun keeps the parallelization detail without making the reader parse the repeated term.

**How to change it**
Replace “running the runs in parallel” with “running them in parallel.”

*raised by wording*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Polish] The variance-bound result is not the opening bullet of the research assistant entry. *(no words)*
2. [Polish] “My proof tightens” uses a personal pronoun and present tense for work in a past role. *(no words)*

**Why**
1. The tighter bound and its place in a paper under review show a research contribution beyond the entry’s opening speed improvement. Leading with this bullet would establish that contribution sooner.
2. The first-person phrasing stands out from the résumé’s other bullet-style statements. The present tense also shifts away from the past-role account, distracting from the bound and the paper.

**How to change it**
1. Move this bullet ahead of the Monte Carlo bullet.
2. Replace “my proof tightens” with “the proof tightened.”

*raised by narrative, wording, file*

> Released an open-source R package for high-dimensional covariance estimation with shrinkage and factor models, downloaded 3,000 times in its first year.

**Problem**
[Polish] The download count shows reach but not what users gained from the package. *(about 7 words)*

**Why**
A reader can see interest in the release, but downloads alone do not establish how the package was used. Naming an enabled task would clarify its practical value without treating downloads as proof of adoption.

**How to change it**
Keep the download figure and, if known, add [specific estimation task or workflow the package enabled] near “high-dimensional covariance estimation.”

*raised by content*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The finding on 24 indices is buried after the description of the significance tests. *(no words)*
2. [Polish] The two crisis periods used for the robustness claim are not identified. *(about 3 words)*
3. [Polish] “Them” makes the reader look back to identify what the 24 refers to. *(saves 1 word)*

**Why**
1. The number of indices retaining the gain is the result a reader is looking for. Starting with the tests delays that result and makes the line harder to scan.
2. A reader cannot tell which market conditions the claim covers. That makes the scope of this part of the finding difficult to evaluate.
3. The line has already introduced 30 indices, but the pronoun makes the result less immediately clear. Naming the unit keeps the finding intelligible when scanned on its own.

**How to change it**
1. Move the result on 24 indices ahead of the Diebold-Mariano tests and Holm correction.
2. If the periods are worth naming on the page, replace “both crisis periods” with [names or dates of the two crisis periods].
3. Replace “24 of them” with “24 indices.”

*raised by wording, content*

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
1. [Polish] The passive wording leaves it unclear whether you presented the paper yourself. *(no words)*
2. [Polish] “Wrote up” is a conversational opening for the working-paper contribution. *(saves 1 word)*

**Why**
1. A seminar presentation could demonstrate your own communication of the research, or only that the paper was presented by someone else. Without the presenter identified, a reader cannot credit that part of the contribution confidently.
2. The paper and seminar are substantial outputs, but the opening sounds less direct than the surrounding research bullets. A precise verb lets the contribution register immediately.

**How to change it**
1. If accurate, replace “which was presented” with “and presented it.” Otherwise, specify [your role in the presentation].
2. Replace “Wrote up” with “Authored.”

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The modeling description does not say what the models achieved. *(about 3 words)*
2. [Polish] The feature work is too broad to show what you contributed technically. *(about 2 words)*
3. [Polish] The bullet repeats the competition context already stated in the entry heading. *(saves 5 words)*

**Why**
1. Training models establishes the activity but not whether it improved performance or produced a competitive result. The missing outcome leaves a reader unable to judge the contribution.
2. A reader sees that you engineered features but cannot picture their type. One telling example would make the work easier to assess and discuss.
3. The heading tells a reader what the project was. Repeating it in the bullet uses space that could carry a result instead.

**How to change it**
1. If available, replace “for a market prediction competition” with [competition metric or rank, compared with a baseline].
2. If accurate, replace “Engineered features” with “Engineered [one telling feature type].”
3. Cut “for a market prediction competition.”

*raised by content, wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 validation-to-leaderboard gap does not name its scoring metric. *(about 1 word)*
2. [Polish] The validation-leakage result is not the opening bullet of the competition entry. *(no words)*

**Why**
1. A reader cannot interpret the units or importance of the gap without knowing what was scored. Naming the metric would make the reported validation change assessable.
2. The current opening bullet describes modeling without an outcome, whereas this one states what the change to time-grouped folds accomplished. Leading with the validation result would give the reader a concrete contribution first.

**How to change it**
1. Replace “a 0.02 gap” with “a 0.02 [scoring metric] gap.”
2. Move this bullet ahead of the feature-engineering bullet.

*raised by content, narrative*

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
[Error] The 2023 competition bullet wrongly attributes the futures-book order-book signal result also credited to the 2025 Northpeak internship. *(saves 24 words)*

**Why**
The internship reports the same 0.4 Sharpe-ratio increase, from 1.1 to 1.5, over an 18-month out-of-sample backtest. Assigning that desk-book result to a competition ending two years earlier makes the achievement and its provenance doubtful.

**How to change it**
Remove this bullet and keep the result under Northpeak. If it was a separate competition result, replace it with [the distinct book, evaluation period, and measured result].

*raised by content, narrative*

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled. *(no words)*

**Why**
The error appears in Methods, where a reader may scan for specific technical skills. The misspelling can distract from the skill and make the section look unchecked.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

> Kafka

**Problem**
[Polish] The Kafka listing does not have supporting messaging or streaming work in the experience entries. *(about 7 words)*

**Why**
A reader would look to the Northpeak tick-data or feature-store work for evidence of Kafka use, but neither bullet names it. Without that connection, the listed skill is difficult to assess.

**How to change it**
If accurate, add [the messaging or streaming work you did with Kafka] to the relevant Northpeak bullet; otherwise, remove “Kafka” from Programming.

*raised by narrative*

## Already working

- s2:e0:b1: Connects a concrete inventory practice to a measured reduction in waste.
- s3:e0:b0: Leads with the result and gives a direct comparison against HAR-RV.
- s2:e2:b2: Shows teaching scope and a direct measure of student response.
