# Full review: resume.pdf

**85/100** — format 100 · content 79 · wording 82 · narrative 66

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 14 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “order-book imbalance signal”; “tested over 18 months out of sample”

**Problem**
[Error] The Northpeak and Kaggle bullets appear to list the same futures signal achievement under two different entries. *(about 5 words added if distinct; saves about 20 words if duplicate removed)*

**Why**
Both describe an order-book imbalance signal for a futures book tested over 18 months, and the Kaggle bullet reports a 0.4 Sharpe increase while the Northpeak bullet gives a Sharpe change from 1.1 to 1.5. A reader may wonder whether the work is duplicated or whether these are separate results, which can undermine confidence in both entries.

**How to change it**
If these are separate projects, distinguish their work and results [how they differ]; if they are the same achievement, keep it under the correct entry and remove the duplicate.

*raised by narrative*

> “Sunrise Bakery”

**Problem**
[Important] Sunrise Bakery leads the experience section with work unrelated to the résumé’s quantitative focus. *(saves about 15 words)*

**Why**
As the first experience entry, the bakery role shapes a reader’s initial impression before they reach the quantitative research. Its two bullets take space that could foreground more relevant experience.

**How to change it**
Shorten the Sunrise Bakery entry to one line or remove it.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] “Keeping the store within its weekly labour budget” gives no figure showing the budget result. *(about 6 words added)*

**Why**
A reader cannot tell whether labour costs were just at the limit or meaningfully under budget, or how consistent the result was. A figure would make the management outcome easier to assess.

**How to change it**
Add [the typical amount or percentage under budget, compared with the weekly labour budget] if you can support it.

*raised by content*

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] “Managed” and “Ran” are past tense even though this is a current role. *(no words)*

**Why**
Past-tense verbs make ongoing responsibilities sound completed. Present tense makes clear that the work continues in the current role.

**How to change it**
Change “Managed” to “Manage” and “Ran” to “Run.”

*raised by wording*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line attributes the reduction in unsold bread to stock counts and supplier orders without explaining how they changed production or ordering decisions. *(about 4 words added if accurate)*

**Why**
Counts and orders can reduce unsold bread if they inform bake quantities or product mix, but the bullet does not establish that link. Without comparable measurement periods, demand changes or other factors could explain the reduction instead.

**How to change it**
If the counts and orders informed production adjustments, say how and specify the comparison periods; otherwise report the change in unsold bread without attributing it to those activities.

*raised by content*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] “Risk-adjusted returns by 35%” does not name the metric or its comparison. *(about 3 words added)*

**Why**
A reader cannot tell whether the change refers to Sharpe or another risk-adjusted measure, or what baseline the 35% is measured against. Without that context, the result is difficult to interpret.

**How to change it**
Replace “risk-adjusted returns” with [risk-adjusted metric and comparison, such as Sharpe before versus after], if accurate; retain 35% only if it describes that comparison.

*raised by content*

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Important] Purged walk-forward splits and an embargo do not guarantee that every backtest decision used only information available at the time. *(saves about 10 words if the guarantee is cut)*
2. [Important] “Validated the signal” does not say what the validation found. *(about 6 words added)*

**Why**
1. Those procedures can reduce leakage from overlapping observations, but do not by themselves guarantee point-in-time validity. Future information can still enter through timestamps, data revisions, feature construction, or execution assumptions.
2. A reader can see that you tested the signal carefully, but not whether it held up or what conclusion the test supported. A concise out-of-sample finding would show why the validation mattered.

**How to change it**
1. If all inputs and decisions were reconstructed using only information available at each decision time, specify that point-in-time control; otherwise remove or soften the guarantee and cut the wordy explanation.
2. After “Validated the signal,” add [the key out-of-sample finding], such as whether performance held up against a stated baseline.

*raised by content, wording*

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe among 400 backtested configurations is not an expected live Sharpe. *(no words)*

**Why**
Choosing the strongest result from many configurations tends to inflate its measured Sharpe. That result alone does not establish expected live performance, so a reader may doubt the claim’s reliability.

**How to change it**
Replace “expected live Sharpe” with “observed backtest Sharpe”; call it an expected live Sharpe only if supported by an adjustment for selection and genuinely unseen validation.

*raised by content, wording*

> “risk-adjusted returns by 35%”; “raised the desk book’s Sharpe ratio from 1.1 to 1.5”

**Problem**
[Important] The two Northpeak bullets appear to claim roughly the same improvement in the futures book’s risk-adjusted performance. *(saves about 10 words if combined)*

**Why**
One bullet reports a 35% improvement in risk-adjusted returns, while another reports the futures book’s Sharpe rising from 1.1 to 1.5. A reader may not know whether these are separate results or two descriptions of the same achievement.

**How to change it**
Combine the bullets if they describe the same result; if they are distinct, make clear [how the results differ].

*raised by narrative*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Error] Using the same random seed on every worker can duplicate random-number streams, so it does not establish 2,000 independent Monte Carlo trials. *(about 3 words added if accurate)*

**Why**
Workers initialized with the same seed and generator can produce identical random-number sequences, which means the runs may not be independent. The line gives no indication that the workers used separately managed random streams.

**How to change it**
If the workers used independently managed random streams, say so; otherwise, do not claim 2,000 independent Monte Carlo runs.

*raised by content*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] “My proof” uses a first-person pronoun and splits the result across clauses. *(saves about 3 words)*

**Why**
The phrasing shifts attention away from the tightened bound and makes the result less direct. It also turns a résumé phrase into a first-person sentence.

**How to change it**
Replace the clause beginning “my proof” with a phrase foregrounding the bound tightened by a log factor, followed by the compact status “Section 3 of a paper under review at JASA.”

*raised by file, wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
[Important] The stated Diebold–Mariano tests across 30 indices do not establish that the gain was significant within both crisis periods. *(about 4 words added if accurate)*

**Why**
A full-sample test does not establish statistical significance within a crisis-period subsample. If significance is claimed separately for the crisis periods, the relevant tests and the scope of the multiplicity correction need to cover those comparisons.

**How to change it**
If crisis-period tests were run and appropriately corrected, specify that; otherwise remove the 5%-significance claim for the crisis periods or describe only the observed forecast gains there.

*raised by content*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The competition modeling bullet gives no result from the work. *(about 6 words added)*
2. [Important] “For a market prediction competition” repeats context already stated in the project title. *(saves 5 words)*

**Why**
1. A reader cannot tell whether the modeling improved prediction or how it contributed to the competition. A concrete outcome would make the work’s value easier to assess.
2. The title already tells the reader that this is a market prediction competition. Repeating that context uses space without adding information.

**How to change it**
1. Add [competition score or rank, with the relevant comparison] if available; otherwise name another concrete result of the modeling.
2. Delete “for a market prediction competition.”

*raised by content, wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The score change does not establish that the new folds reduced leakage or caused the 0.02 gap to close. *(saves about 4 words if the attribution is cut)*

**Why**
Time-grouped folds can reduce leakage when related observations cross folds, but leaderboard gaps can also arise from distribution shift, noise, or other evaluation differences. The claimed causal link depends on the split design and evidence that leakage was the source of the gap.

**How to change it**
Describe the observed validation and leaderboard score change without attributing it to leakage, unless you can identify how the split prevented leakage and show that it caused the gap to close.

*raised by content*

## Skills

> “econometircs”

**Problem**
[Error] “econometircs” is misspelled; the correct spelling is “econometrics.” *(no words)*

**Why**
A spelling error in a Methods skill is immediately visible and can make the skills section look insufficiently checked. It also makes the method harder to find in a quick scan.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

> “Kafka”

**Problem**
[Important] Kafka is listed as a programming skill without supporting experience elsewhere in the résumé. *(saves 1 word if removed)*

**Why**
A reader cannot see where you used Kafka or assess the depth of your experience with it. That can make the skill list feel less credible.

**How to change it**
Add supporting experience [relevant Kafka use] if accurate; otherwise remove Kafka from Programming.

*raised by narrative*

## Already working

- s2:e1:b2: Connects a technical deliverable to later team reuse and gives a clear scale signal.
- s3:e0:b0: Connects a quantified result to a named baseline and out-of-sample metric.

## Set aside (16)

- s2:e0:b0: “Managed opening shifts and a team of 6 bakers and cashiers” names responsibilities but not a management practice you used.
- s2:e1:b3: “small live allocation” leaves the size of the approved allocation unspecified.
- s2:e1:b4: “reported the best one’s Sharpe” does not include the Sharpe value or a comparison for interpreting it.
- s2:e2:b2: The basis for “earning a 4.8/5 teaching rating” is unclear.
- s3:e0:b1: “in both crisis periods” does not say which crisis periods were tested.
- s3:e1:b0: “Engineered features” does not identify what kind of features you created.
- s3:e1:b1: “0.02 gap” does not identify which competition score the gap refers to or whether it is an absolute or relative difference. (and 1 more like it)
- s3:e1:b2: “Added 0.4 to the Sharpe ratio” is not established as a meaningful out-of-sample improvement without a defined comparison portfolio and Sharpe calculation; “tested over 18 months out of sample” alone does not establish that the result is robust or executable. (and 2 more like it)
- s2:e0:b1: “Ran ... supplier orders” is imprecise because it does not say whether the orders were placed or managed.
- s3:e0:b2: “which was presented” uses a passive construction that obscures who presented the paper.
- s2:e2:b0: “the runs” is repetitive after “2,000-run,” and the seed clause is wordy; tighten the method phrase.
- s2:e2:b3: “in its first year” is a wordy time phrase that can be reduced to “in year one.”
- s2:e1:b3: “who approved a small live allocation for the next quarter” is a wordy relative clause that makes the result less direct.
- s2:e1:b5: The Sharpe improvement is buried at the end after the signal description and testing details, so the result should lead the bullet.
- s2:e2: The entry mixes a theoretical result, software, computing improvements and teaching rather than presenting one connected piece of work.
- s3:e1: The competition and validation bullets fit together, but the generic modeling line does not establish how it connects to the reported signal result.
