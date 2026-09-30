> Here is my resume: bench/planted-defects/tests-final/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets for content and wording, plus the resume’s narrative and format. The education entries have no bullets to review. No job-description match was run because no posting was provided.

Changes to prioritize:
- **Clarify the quantitative claims:** For the 35% return improvement, name the metric and comparison baseline. For the “expected live Sharpe,” address the concern that it uses the best result selected from 400 configurations. Also define the metric behind the Kaggle 0.02 gap and the comparison behind its 0.4 Sharpe increase.
- **Resolve a possible duplicate:** The Northpeak and Kaggle entries describe a similar order-book signal and 0.4 Sharpe result. Clarify whether these are separate projects; if not, keep the achievement under the correct entry.
- **Make the story more focused:** Move Experience above Education, shorten or remove the unrelated bakery entry, and either support the Kafka skill with an example or remove it. Correct “econometircs” to “econometrics.”
- **Tighten a few lines:** Lead with key results where they’re currently buried, and remove the personal pronoun flagged in the research bullet.

The file is one page and parses cleanly for ATS. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 80 · wording 84 · narrative 69

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 16 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery

**Problem**
[Important] Shorten the Sunrise Bakery entry to one line or remove it unless it is important to the story this résumé should tell. *(saves about 10–20 words if shortened to one line; more if removed)*

**Why**
The bakery role takes space before the quantitative experience, while the review identifies the latter as more relevant to lead the page. Keeping the bakery entry brief leaves more room for that relevant work.

**How to change it**
Reduce the entry to one line or cut it if it is not important to the story you want this résumé to tell.

> Ph.D. candidate in Statistics

**Problem**
[Important] Experience should appear above Education so the relevant quantitative work leads the page. *(no words)*

**Why**
Education currently comes before the experience entries. A reader scanning from the top reaches the relevant quantitative work later than necessary.

**How to change it**
Move the Experience section above Education.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement is uninterpretable without the risk-adjusted-return metric and comparison baseline. *(about 4–8 words to add)*

**Why**
Different metrics and baselines can produce materially different percentage improvements. Without the metric, comparator, and period, a reader cannot interpret or check what the 35% represents.

**How to change it**
After “35%,” name [the risk-adjusted-return metric], [the baseline or comparison], and [the comparison period], if accurate.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Important] The purged splits and embargo do not guarantee that every backtest decision used only information available at the time. *(saves about 9 words)*
2. [Important] The six-year validation claim gives no outcome. *(about 5–10 words to add)*

**Why**
1. Purging and embargoing reduce leakage across split boundaries, but they do not guarantee point-in-time correctness throughout the backtest. A reader could still question whether timestamps, feature construction, or other implementation details introduced look-ahead.
2. The reader can see how long the signal was tested, but not whether it passed validation or what the test established. Without an outcome, the testing detail does not show whether the signal performed well.

**How to change it**
1. Replace that clause with a brief description of the splits and embargo as leakage controls; retain a point-in-time claim only if the data and implementation were independently checked for look-ahead.
2. Add [the most useful out-of-sample result versus a stated benchmark], if available.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The approval outcome is placed after the presentation details. *(no words)*

**Why**
A scanning reader encounters the presentation before learning that the portfolio managers approved an allocation. That delays the clearest indication of what the presentation achieved.

**How to change it**
Move the approval phrase to the beginning of the bullet, ahead of the presentation details.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe selected from 400 backtested configurations is not an unbiased estimate of expected live Sharpe. *(no words)*

**Why**
Choosing the highest result across many configurations makes it likely that the winning Sharpe is inflated by backtest noise. A reader could question the live-performance estimate because the selected backtest result alone does not establish it.

**How to change it**
Replace “expected live Sharpe” with “best backtested Sharpe”; call it an expected live Sharpe only if it was estimated on an independent, untouched evaluation or with a suitable adjustment for selection bias.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Important] The phrase “the same random seed on every worker” risks describing workers initialized with identical random-number-generator states. *(about 3–8 words to add if accurate)*

**Why**
If the workers generated the same sequence, the 2,000 runs may repeat draws rather than provide 2,000 independent replications. The line does not establish that the workers used distinct streams.

**How to change it**
If the workers used distinct streams derived from a common seed, say so; otherwise verify that the runs used independent or properly separated streams and revise the claim. If they did not, do not present them as 2,000 independent runs.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] “My proof” uses a first-person pronoun, and the result that the proof tightens the bound is buried after the opening action. *(saves 1 word; no words for moving text)*

**Why**
The pronoun makes the résumé line read like a sentence rather than a concise phrase. A scanning reader also reaches the result after the description of the derivation.

**How to change it**
Remove “my” and move the result about tightening the bound ahead of the opening action.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
[Important] The significance result comes after the testing method, so a scanning reader may miss the main finding. *(no words)*

**Why**
The reader encounters the test description before learning that the gain held at the 5% level on 24 indices. That delays the central result of the bullet.

**How to change it**
Move the result about the 24 indices and 5% level ahead of the Diebold–Mariano test and Holm-correction details.

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
[Important] “Which was presented” uses passive voice and leaves unclear whether you presented the paper. *(no words)*

**Why**
The phrase does not identify who presented the working paper at the seminar. A reader may not know whether you presented it or someone else did, which obscures your role.

**How to change it**
If you presented the paper, replace “which was presented” with “presented”; otherwise name [who presented it].

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The competition bullet does not state what the modeling work achieved or what feature work you did. *(about 6–12 words to add)*

**Why**
A reader cannot tell whether the models performed well or how your contribution mattered to the competition. The generic phrase “Engineered features” also gives no indication of the feature work involved.

**How to change it**
Add [the competition result, such as rank or score, and what it was compared with]; if no result is available, name the specific modeling or feature contribution.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 gap has no score metric or scale, so its size cannot be interpreted. *(about 2–5 words to add)*
2. [Important] The result follows the method, so readers scanning quickly may miss the 0.02 improvement. *(no words)*

**Why**
1. A reader cannot judge what the gap measures or how meaningful it is without knowing the score metric. Naming the measure would make the local-validation and leaderboard comparison interpretable.
2. The bullet explains the switch to time-grouped folds before stating the gap it closed. That puts the outcome later than the method in a quick scan.

**How to change it**
1. Specify [the score metric and, if needed, its scale] after “0.02 gap.”
2. Move the 0.02-gap result ahead of the time-grouped-folds explanation.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Important] The 0.4 Sharpe increase is not established without its comparison book and calculation details. *(about 8–12 words to add)*
2. [Important] “Tested over 18 months out of sample” is a clipped trailing phrase with an unclear attachment. *(no words)*

**Why**
1. A reader cannot tell whether the comparison is against the futures book without the signal, another strategy, or another baseline. The 18-month out-of-sample period alone does not show that the increase survives realistic trading costs and execution assumptions.
2. A reader may not know whether the period describes the signal, the Sharpe increase, or the test itself. That ambiguity makes the result harder to interpret.

**How to change it**
1. Specify [the baseline used for the increase], the Sharpe definition and annualization, and whether the result is net of realistic costs and execution. If those checks were not done, describe it more narrowly as a backtest observation.
2. Attach the 18-month out-of-sample period directly to the signal test or its result.

> order-book imbalance signal; Added 0.4 to the Sharpe ratio

**Problem**
[Error] The matching futures-signal description and 0.4 Sharpe increase make one achievement appear under two different entries. *(no words for moving; about 4–8 words if distinguishing separate projects)*

**Why**
Northpeak’s bullet and the Kaggle bullet both describe an order-book imbalance signal tested over 18 months out of sample with a 0.4 Sharpe increase. A reader could wonder whether these are separate projects or the same result presented twice, which makes the ownership and context unclear.

**How to change it**
Clarify [whether these are separate projects]; if they are, distinguish the work and results, or keep the achievement under the correct entry. Lead the competition bullet with its strongest result and make its connection to the leakage fix clear.

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled; the correct spelling is “econometrics.” *(no words)*

**Why**
The typo is in a Methods skill, where a reader may notice it while scanning technical qualifications. It can distract from the skill itself.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Important] Kafka is listed under Programming without supporting work elsewhere in the résumé. *(saves 1 word if removed; about 5–10 words to add supporting experience)*

**Why**
A reader cannot see how the skill was used or assess it against an example. That can make the listing less credible than skills supported by the experience entries.

**How to change it**
Add supporting experience if accurate; otherwise remove Kafka from Programming.

## Already working

- s3:e0:b0: Pairs a quantified result with its baseline and evaluation measure.
- s2:e2:b3: Shows both the package's technical focus and a concrete first-year adoption measure.

## Set aside (11)

11 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-16a933ee.md.

