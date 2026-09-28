> Here is my resume: bench/planted-defects/tests-v3/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the resume’s format, narrative, content, and wording for all five entries with bullets. The education entries were not applicable to bullet-level review. No job description was loaded, so this is not a job-match review.

The full report is available at `/report --full`.

Most important changes:

1. **Reorder Experience**
   - Put **Northpeak Capital** before **Sunrise Bakery**.
   - Consider moving Sunrise Bakery into an **Additional Experience** subsection or shortening it. Its current position makes the career direction appear less focused despite the strong quantitative background.

2. **Resolve duplicated or ambiguous claims**
   - The Northpeak and Kaggle entries appear to describe the same order-book imbalance result: a Sharpe improvement over an 18-month out-of-sample period.
   - Clarify whether these are separate projects or keep the result in only one entry.
   - Clarify the baseline for the “35% improvement in risk-adjusted returns” and distinguish achieved out-of-sample performance from a backtested estimate.

3. **Correct technical credibility issues**
   - Rework the Northpeak statement that reports the best Sharpe among 400 configurations as the expected live Sharpe.
   - Clarify the statistical claims in the volatility study, including whether the 7% QLIKE result is relative or percentage-point improvement and which crisis periods were tested.
   - The statistical learning entry says the same random seed was used on every worker; verify that this accurately describes the Monte Carlo implementation.

4. **Strengthen bullets that lack outcomes**
   - The first Kaggle bullet describes feature engineering and model training but gives no result.
   - The volatility-study presentation bullet describes documentation and presentation but not what resulted from them.
   - The Sunrise Bakery labor-budget result needs a more precise comparison or outcome.

5. **Clean up wording and skills**
   - Remove the first-person wording in “my proof.”
   - Replace imprecise phrasing such as “Ran daily stock counts and supplier orders.”
   - Fix the spelling of **econometrics**.
   - Either support **Kafka** with an experience/project reference or remove it from Skills.
   - Several bullets would scan better if their main result appeared earlier.

The file itself is one page, extracts cleanly for ATS, has consistent layout, and contains many quantified bullets.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 81 · wording 87 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

8 errors, 19 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> raised the desk book’s Sharpe ratio from 1.1 to 1.5

**Problem**
[Error] The résumé attributes the same order-book imbalance result to both the internship and competition entries. *(saves about 4 words)*

**Why**
Northpeak reports a rise from 1.1 to 1.5 over 18 months out of sample, while the competition entry reports an added 0.4 over the same period. The matching signal, period, and improvement make the claims look duplicated and can cause a reader to question the accuracy of the accomplishments.

**How to change it**
Keep the result in only one entry, or distinguish the claims with [the different book, period, baseline, or experiment] so the figures cannot be mistaken for duplicated work.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Northpeak Capital should lead the experience section, with Sunrise Bakery moved to Additional Experience or shortened substantially. *(no words)*

**Why**
The current lead entry makes the career appear to be moving from quantitative research into retail management. Leading with the relevant quantitative internship would establish the target direction before presenting the unrelated current role.

**How to change it**
Move the Northpeak Capital entry above Sunrise Bakery, then move Sunrise Bakery to an Additional Experience subsection or shorten it substantially.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The measurable labour-budget result is buried after the shift and team details. *(about 3 words to add)*

**Why**
A scanning reader reaches the responsibility and team size before the outcome. The budget claim is also too vague to show how closely spending tracked the budget or what changed because of the work.

**How to change it**
Move the labour-budget result to the start of the bullet and replace or follow it with [weekly labour spend or variance against budget], if accurate; retain the team size only if it establishes useful scope.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Polish] “Ran” is imprecise for supplier orders. *(no words)*

**Why**
Orders are normally placed, managed, or coordinated, so “ran” leaves the responsibility unclear. A more precise verb will make the operational scope easier to understand.

**How to change it**
Replace “Ran” before “supplier orders” with “placed” or “managed,” if accurate; keep “Ran” only for the stock counts if needed.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement in risk-adjusted returns has no stated comparator. *(about 6 words to add)*

**Why**
A quantitative reader cannot tell whether the figure is versus the original signal, an unsmoothed position, a benchmark, or another baseline. Without that comparison, the size and defensibility of the result are unclear.

**How to change it**
Replace or expand “by 35%” with [35% improvement in risk-adjusted returns versus the actual baseline].

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] The validation claim is too strong: purged walk-forward splits and an embargo period do not establish that every backtest decision used only information available at the time. *(saves about 11 words)*
2. [Important] The validation method is presented without stating what result or research decision it produced. *(about 6 words to add)*
3. [Important] The explanatory clause about information availability delays the technical validation point without adding a checkable result. *(saves about 11 words)*

**Why**
1. Those techniques address temporal overlap and some label leakage, but they do not by themselves rule out leakage from feature construction, data revisions, universe selection, preprocessing, or later-informed choices. The absolute claim can therefore make a quantitative reader question the research controls rather than credit the validation design.
2. A hiring reader can see that the process was careful, but not whether it confirmed robustness, rejected the signal, supported deployment, or changed the research direction. The technical method therefore carries more weight than the outcome.
3. The purged splits and embargo period already identify the validation approach, while the absolute explanation overstates what those methods prove. Keeping the clause makes the bullet longer and invites scrutiny of an unsupported claim instead of highlighting the actual method.

**How to change it**
1. Replace that clause with wording that says the splits and embargo reduced temporal leakage, or add evidence that every input, transformation, and selection rule was point-in-time controlled.
2. Add [out-of-sample performance result, robustness finding, or decision the validation supported] after the validation method.
3. Cut the clause after “embargo period,” or replace it with a shorter, accurate statement that the methods reduced temporal leakage.

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The reuse clause is grammatically attached to the point-in-time joins rather than clearly to the feature store. *(no words)*

**Why**
A reader could interpret the sentence as saying the joins were reused, not the feature store. That weakens the evidence that the deliverable itself had continuing value.

**How to change it**
Move “reused in two later signal projects” so it immediately follows “feature store,” or replace “which” with a clause explicitly referring to the store.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The approval result is buried after the presentation details. *(about 3 words to add)*

**Why**
The live-allocation approval is the strongest evidence of impact, but the bullet opens with the presentation activity. A reader scanning the internship section may miss the deployment consequence.

**How to change it**
Move the approval result to the beginning of the bullet and follow it with the presentation details; replace “small” with [allocation size, capital range, or risk budget], if disclosable.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] Selecting the best Sharpe from 400 backtested configurations makes it selection-period performance, not an expected live Sharpe. *(saves about 3 words)*
2. [Important] The reported Sharpe has no identified comparison or evaluation set supporting the live expectation. *(about 6 words to add)*
3. [Important] The phrase about reporting the best Sharpe as the expected live Sharpe conflates a backtested result with a live expectation and obscures the intended action. *(saves about 5 words)*
4. [Important] The parameter-selection process does not state what decision or outcome it enabled. *(about 5 words to add)*

**Why**
1. Taking the maximum across many configurations creates selection bias and makes the reported Sharpe optimistically biased. It is not an unbiased live-performance estimate unless the selected configuration is evaluated on genuinely untouched data or the search is otherwise accounted for.
2. The 400 configurations establish search breadth, but the reader cannot tell whether the figure came from training data, an unseen period, or a benchmark. That distinction is essential to interpreting the measurement and its credibility.
3. A reader cannot tell whether the line describes a reporting error, a deployment decision, or a genuine live-performance forecast. The wording therefore makes the bullet difficult to interpret even before the selection bias is considered.
4. The reader sees an optimization task but not its consequence. Without a deployment decision, robustness finding, or out-of-sample result, the bullet adds process detail without showing why the selection mattered.

**How to change it**
1. Replace “expected live Sharpe” with “best selection-period Sharpe,” or report [selected configuration’s holdout Sharpe] only if it comes from an untouched holdout, nested validation, or another method accounting for the 400-way search.
2. Replace or expand the final clause with [selected configuration’s holdout Sharpe] versus [baseline or benchmark holdout Sharpe], if those facts are available.
3. Cut the phrase or replace it with a clear action and evaluation label, such as reporting the best selection-period Sharpe or using [selected configuration’s holdout Sharpe] for the live expectation if supported.
4. Add [deployment decision, robustness finding, or out-of-sample performance result] after the selection.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The main Sharpe improvement is buried at the end of the bullet. *(no words)*

**Why**
The result is the strongest evidence of value, but the reader must first pass through the signal description and test period. Leading with the improvement would make the achievement easier to scan without adding words.

**How to change it**
Move the Sharpe improvement to the beginning of the bullet and place the signal description and test context after it.

> Improved risk-adjusted returns by 35%

**Problem**
[Error] The 35% performance claim and the selected Sharpe are not labelled consistently as achieved out-of-sample performance or selected backtest performance. *(about 4 words to add)*

**Why**
One bullet sounds like an achieved return improvement, while another explicitly describes choosing the best result from 400 configurations. A reader cannot tell whether the 35% figure is also selection-biased or whether it was independently evaluated, which weakens trust in both claims.

**How to change it**
Label the 35% result with its actual comparator and evaluation status, and label the Sharpe as selection-period or holdout performance so both claims use the same performance terminology.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Error] The Monte Carlo method is invalid as written because every worker uses the same random seed. *(about 8 words to add)*
2. [Polish] “Running the runs” repeats the same noun and makes the parallelization description indirect. *(saves about 1 word)*

**Why**
1. Initializing every worker with the same seed normally produces identical or overlapping pseudorandom streams, so the nominal 2,000 runs may contain duplicate simulations rather than independent replicates. Parallel execution explains the runtime reduction, but not with independently valid Monte Carlo sampling under this seeding scheme.
2. The phrase draws attention to the wording instead of the computational method. A direct description would make the speed improvement easier to scan.

**How to change it**
1. Replace that phrase with “independent worker-specific random-number streams or nonoverlapping substreams derived from a master seed,” while retaining the 3-day-to-5-hour runtime result.
2. Replace “running the runs” with “executing simulations” or “running simulations,” subject to the corrected independent-stream description.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The bullet uses a first-person pronoun and breaks the résumé’s impersonal style. *(saves about 1 word)*

**Why**
“My proof” makes this line stylistically inconsistent with the other résumé bullets. It also adds ownership wording without changing the mathematical evidence.

**How to change it**
Replace “my proof” with “the proof” or remove the possessive before “tightens the previous bound.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] The 7% QLIKE improvement is ambiguous between a relative reduction and a percentage-point difference. *(about 2 words to add)*

**Why**
A quantitative reader needs to know how the improvement was calculated before judging its size. Without that distinction, the figure can be interpreted in more than one way.

**How to change it**
Clarify the phrase as [7% relative reduction in QLIKE loss] or [7-percentage-point reduction], using the actual calculation.

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Error] The Diebold–Mariano tests across the 30 indices do not support the claim that the gain was significant in both crisis periods. *(saves about 6 words)*
2. [Important] The two crisis periods are not identified. *(about 4 words to add)*

**Why**
1. A full-sample DM test evaluates the average loss difference over the full evaluation period and cannot establish significance within specific subperiods. Separate crisis-period tests, with multiplicity correction covering those additional hypotheses, are required; correcting only the 30 index-level tests does not support the crisis-period claim.
2. A reader cannot assess the robustness claim if the periods cannot be located or distinguished. Naming them would make the subperiod comparison verifiable without adding much detail.

**How to change it**
1. Report only the Holm-adjusted result for 24 of 30 indices unless separate crisis-period tests were run with an appropriate correction; if they were, name that correction family.
2. Replace “both crisis periods” with [the names or date ranges of the two crisis periods], if accurate; otherwise remove the claim.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The competition modeling line states activity but no achievement or comparison. *(about 6 words to add)*

**Why**
A reader can see that features were engineered and models trained, but cannot judge whether the work improved the submission or produced a competitive result. The heading already supplies the competition context, so the ending uses space without adding evidence.

**How to change it**
Cut the repeated competition context and add [competition placement, leaderboard percentile, score improvement, or final score] versus [the relevant baseline or field].

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 reduction cannot be attributed entirely to switching fold design without a controlled comparison. *(saves about 2 words)*
2. [Important] The 0.02 gap does not identify the score or metric being compared. *(about 1 word to add)*

**Why**
1. The change could also reflect sampling variation, model or feature changes, leaderboard noise, or temporal distribution shift. Time-grouped folds can reduce some temporal leakage, but they do not by themselves prove that the fold change caused the smaller gap.
2. The reader can see the before-and-after discrepancy but cannot tell whether 0.02 is large or small or what evaluation measure it uses. Naming the metric would make the comparison interpretable.

**How to change it**
1. If the comparison was controlled, say the switch was associated with or produced an observed 0.02 reduction; otherwise remove the causal attribution.
2. Add [evaluation metric] immediately before “scores,” if accurate, while retaining the 0.02 comparison.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Error] The competition bullet appears to duplicate the internship’s order-book signal result. *(saves about 4 words)*
2. [Important] “Added 0.4 to the Sharpe ratio” does not identify the baseline or whether 0.4 means ratio points or a relative increase. *(about 5 words to add)*

**Why**
1. Both entries claim the same signal type, 18-month out-of-sample period, and 0.4 Sharpe improvement, even though the entries have different dates and contexts. A reader may therefore doubt whether the work was performed twice or whether one entry is taking credit for the other.
2. The reader cannot interpret the size of the improvement without knowing what the ratio was before the signal or what it was compared against. The unit of the change is also ambiguous.

**How to change it**
1. Credit the result in only the entry where the experiment was performed, or distinguish it with [the different baseline, period, book, or experiment].
2. Replace the phrase with [increased Sharpe from baseline to result] or add [baseline futures book, benchmark, or prior strategy] and specify whether 0.4 means ratio points or a relative increase.

> Added 0.4 to the Sharpe ratio

**Problem**
[Important] The competition project mixes a modeling workflow with a separate futures-signal result. *(saves about 8 words)*

**Why**
The feature-engineering and gradient-boosting work belongs to the competition heading, while the order-book signal reads like a different research experiment. The combination makes the project appear unfocused and leaves the relationship between the two accomplishments unclear.

**How to change it**
Keep the competition modeling bullets under this entry and move the futures-signal result to the entry where it was actually performed, or distinguish it with [the different book, period, or experiment].

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled; the correct spelling is “econometrics.” *(no words)*

**Why**
The error is visible in the Methods skills list and can make the candidate appear less careful in a field where terminology matters. It also weakens keyword matching for the correctly spelled method.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Important] Kafka is listed under Programming without evidence of use elsewhere in the résumé. *(about 4 words to add)*

**Why**
A reader cannot verify how Kafka was used or whether the skill is relevant to the candidate’s demonstrated work. The unsupported keyword can reduce confidence in the skills list.

**How to change it**
Add an entry showing [Kafka use and the related work], if accurate; otherwise remove Kafka from the skills list.

## Set aside (9)

9 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8f9559a0.md.

