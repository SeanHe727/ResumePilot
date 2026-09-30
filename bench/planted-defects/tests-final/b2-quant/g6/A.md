> Here is my resume: bench/planted-defects/tests-final/b2-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five experience/project entries for content and wording, plus the resume’s narrative and format. The two education entries have no bullets to review. No job description was provided for a match review.

The main changes to address:
- **Clarify and reconcile the order-book signal results:** the Northpeak and Kaggle bullets appear to claim the same 18-month Sharpe improvement. The reviews also flagged uncertainty around the “expected live Sharpe” and “risk-adjusted returns by 35%” claims.
- **Tighten research claims:** specify what the signal validation found, avoid overstating what the backtest safeguards establish, and clarify the validation-gap metric.
- **Refocus the experience section:** the narrative review suggests shortening or removing the bakery role for a quantitative-research application. It also flagged Kafka as unsupported by the experience/project bullets and a spelling error in “econometrics.”

The file parses cleanly as a one-page resume. The full report, including entry-level notes, is available at `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 82 · wording 83 · narrative 74

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 13 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.
> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.
> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The outcomes are delayed in the volatility-study, Northpeak, and Kaggle bullets. *(no words)*

**Why**
In the volatility-study and Kaggle bullets, the result appears after test or method details, making it easier to miss while scanning. In the Northpeak bullet, the approved allocation is held until the end, obscuring the outcome.

**How to change it**
Move the finding of significance on 24 of 30 indices to the start of the volatility-study bullet, the approved allocation to the start of the Northpeak bullet, and the 0.02 gap closure to the start of the Kaggle bullet.

> “order-book imbalance signal” and “raised the desk book’s Sharpe ratio from 1.1 to 1.5”; “an order-book imbalance signal” and “Added 0.4 to the Sharpe ratio of a futures book”

**Problem**
[Error] The Northpeak and Kaggle bullets read like the same order-book imbalance achievement credited to two different projects. *(about 3–10 words added)*

**Why**
Both bullets describe an order-book imbalance signal, a futures book, and an 18-month out-of-sample result; the Northpeak Sharpe increase is also 0.4. A reader may question which entry owns the work and whether the results are distinct.

**How to change it**
Clarify [whether these are the same work] and align the attribution, or distinguish the results if they are separate.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The Sunrise Bakery entry takes the lead position in Experience despite not supporting the quantitative-research direction. *(saves about 20 words if cut)*

**Why**
A reader scanning for quantitative research sees this unrelated role before the relevant experience. Giving it the same space as research roles can weaken the first impression.

**How to change it**
Reduce the entry to a one-line role, employer, and dates entry, or remove it.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% change does not identify the risk-adjusted metric or its comparison point. *(about 5–10 words added)*

**Why**
A reader cannot tell which measure changed or what the percentage is relative to. Without those details, the result is difficult to assess or verify.

**How to change it**
Name the risk-adjusted metric and replace “by 35%” with [baseline and ending value, plus evaluation window], if available.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Important] Purged walk-forward splits and an embargo do not by themselves guarantee that every backtest decision used only information available at the time. *(saves about 8 words)*
2. [Important] “Validated the signal” does not state what the validation found. *(about 5–10 words added)*

**Why**
1. Purging and embargoing address leakage across split boundaries, but they do not by themselves prevent look-ahead in feature construction, preprocessing, or other research decisions. The broader claim is supportable only if the full feature and decision pipeline was also kept point-in-time.
2. The data span and split design describe how the signal was tested, but they do not show the result supporting the validation claim. A reader is left without a finding to judge.

**How to change it**
1. Limit the claim to the leakage addressed by the splits and embargo, or retain the broader claim only if the full pipeline was verified as point-in-time.
2. Add the key [out-of-sample result or robustness finding, with its comparison point], if available.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The selected best backtest Sharpe is not an unbiased estimate of expected live Sharpe. *(about 2 words added)*

**Why**
Selecting the maximum across 400 configurations makes it likely that the winning backtest Sharpe is inflated by noise. That selected result alone does not establish expected live performance, so a reader may question the credibility of the estimate.

**How to change it**
Replace “expected live Sharpe” with “best configuration’s backtested Sharpe”; describe it as an expected live Sharpe only if it came from an independent, untouched evaluation or a justified selection-bias adjustment.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The wording attributes the desk book’s Sharpe increase to the signal, but the stated evidence is an out-of-sample backtest result. *(about 2 words added)*

**Why**
An out-of-sample result after costs does not by itself isolate the signal’s contribution from other changes or selection. Without a stated controlled comparison, a reader may doubt that the signal caused the increase.

**How to change it**
If the signal’s incremental contribution was isolated, state the comparison; otherwise describe a backtest in which the desk book’s Sharpe was 1.1 versus 1.5 with the signal.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Important] Using the same random seed on every worker does not establish that the Monte Carlo runs used independent random streams. *(about 3–8 words added)*

**Why**
Workers using the same generator and seed can repeat the same random stream. In that case, the 2,000 runs would not represent 2,000 independent replicates, even if parallel execution reduced elapsed time.

**How to change it**
If the workers used independent substreams derived from a common seed, say so; otherwise verify the stream setup and number of valid independent runs [and revise the claim accordingly].

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The bullet uses a first-person pronoun. *(no words)*

**Why**
“My proof” makes the resume bullet read like a sentence rather than a concise phrase. It also draws attention to the writer instead of the result.

**How to change it**
Replace “my proof” with “the proof” or “proof.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The stated Holm correction across 30 indices does not establish that the significance claim for both crisis periods is corrected for multiple testing. *(about 3–8 words added)*
2. [Important] “Both crisis periods” does not identify the periods covered by the result. *(about 2–6 words added)*

**Why**
1. Holm correction controls the family-wise error rate only for the hypotheses included in its correction family. If the crisis-period tests were separate and excluded, correcting the index tests alone would not substantiate significance in both periods.
2. A reader cannot tell which market conditions the robustness result represents. Naming the periods would make the finding easier to interpret and compare.

**How to change it**
1. If the correction included the crisis-period tests, state how the correction family was defined; otherwise apply an appropriate correction to those tests or remove the significance claim for the crisis periods.
2. Replace “both crisis periods” with [names or dates of the two crisis periods].

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] “Cut validation leakage” is stronger than the stated change establishes. *(about 2 words added)*
2. [Important] The 0.02 gap does not identify the score metric or whether the gap is absolute or relative. *(about 4–8 words added)*

**Why**
1. Time-grouped folds can reduce leakage when the original folds mixed time periods, but closing the validation-to-leaderboard gap does not show that leakage caused the gap or that leakage was reduced. Distribution shift or leaderboard noise could also explain the change.
2. Without that context, a reader cannot interpret the size of the discrepancy or compare it with other results. Naming the metric and how the gap is measured would make it easier to judge.

**How to change it**
1. If a comparison isolated leakage as the cause, state how it was measured; otherwise say that switching to time-grouped folds closed the 0.02 score gap.
2. Clarify the gap with [score metric and whether the gap is absolute or relative].

## Skills

> econometircs

**Problem**
[Error] The Methods spelling “econometircs” is incorrect. *(no words)*

**Why**
A spelling error in a listed method can make the skills section look insufficiently checked. It may distract from the quantitative expertise the term is meant to convey.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Important] Kafka is listed under Programming, but no experience or project entry shows it being used. *(about 3–8 words added, or saves 1 word if removed)*

**Why**
Without an example, a reader cannot judge the level or context of the skill. The listing may raise questions about whether it is a practical capability or only familiarity.

**How to change it**
Add [an example of where or how you used Kafka], or remove it.

## Already working

- s2:e0:b0: Connects team and shift responsibility to a concrete budget outcome.
- s2:e2:b2: Combines teaching scope with evidence of student response.
- s3:e0:b0: Leads with a quantified result and identifies the benchmark and evaluation setting.

## Set aside (17)

17 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b26e462f.md.

