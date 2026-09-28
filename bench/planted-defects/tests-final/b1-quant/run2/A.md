> Here is my resume: bench/planted-defects/tests-final/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five experience/project entries for content and wording, plus the resume’s narrative and formatting. The two education entries have no bullets to review. No job description was provided, so I did not assess role match.

The main changes to address:
- **Correct or substantiate quantitative claims.** The reviewers flagged the forecasting study’s “33% improvement” against the 0.20-to-0.15 change and “6%” against 52%-to-58%; they also questioned whether some reported gains are attributable to the described methods.
- **Reorder and trim for the quant-research story.** Put Northpeak Capital ahead of Sunrise Bakery, and consider shortening the bakery entry if it is not needed to explain your current employment.
- **Clarify and clean up individual lines.** Explain the Sharpe-ratio annualization, clarify what “the forecast gain” and “which” refer to, remove the first-person pronoun, and correct “econometircs” to “econometrics.”

The file parses cleanly for ATS, with no layout warnings. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**89/100** — format 100 · content 85 · wording 86 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 13 important, 1 polish. Errors are marked [Error]; fix those first.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line does not establish that stock counts and supplier orders caused unsold bread to fall from 12% to 7%. *(about 10 words added)*

**Why**
Counts and orders could inform decisions that reduce waste, but the bullet does not say they led to changes in production volume or product mix. It also gives no measurement period or method to show that the two rates are comparable, so a reader may question the causal claim.

**How to change it**
Name the production or other operational changes the counts informed and how the before-and-after rates were measured; if they did not establish the causal link, remove that attribution.

> Assistant Store Manager

**Problem**
[Important] The Sunrise Bakery entry interrupts the résumé’s quantitative-research direction. *(about 10 words saved if shortened)*

**Why**
The two bullets fit together as store operations, but the entry does not support the quantitative-research direction. As written, it takes space and attention from more relevant experience; keep it only if it is needed to account for current employment.

**How to change it**
Shorten the Sunrise Bakery entry to one line, or cut it if it is not needed to account for current employment.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The Sharpe-ratio increase is attributed to the signal without establishing that the rest of the book and evaluation conditions stayed fixed. *(about 8 words added)*

**Why**
A reader cannot tell whether the rest of the book, risk constraints, or evaluation method changed between configurations. If they did, the Sharpe improvement could reflect those changes rather than the signal’s incremental contribution.

**How to change it**
If the rest of the book, risk constraints, and evaluation method were held fixed, state that; otherwise, describe the Sharpe figures as a comparison between backtest configurations.

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Important] The phrase “keeping 90% of gross returns” does not specify what the 90% is relative to. *(about 1 word added)*

**Why**
A reader cannot tell whether this means 90% of the original gross returns or another measure. That ambiguity makes the trade-off between lower turnover and retained returns difficult to interpret.

**How to change it**
Clarify what the 90% is relative to; if accurate, replace “gross returns” with “original gross returns.”

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Important] Standard Diebold-Mariano inference may not validly confirm a gain over a nested forecast baseline. *(about 3 words added)*
2. [Important] The bullet does not state what the forecast-gain test found. *(about 5 words added)*

**Why**
1. Standard DM inference can fail for nested forecast models, so the test named here may not support the claim as stated. Testing across 30 indices also does not establish a joint gain unless multiple comparisons and dependence were suitably addressed.
2. A reader cannot tell how large the gain was or whether the tests supported it across the indices. The test name and index count describe the evaluation, not its result, so the claimed confirmation lacks a stated outcome.

**How to change it**
1. If used, name the appropriate nested-model test and the inference adjustments actually run; otherwise, soften the claim to say the tests indicated a gain rather than confirmed it.
2. Replace “Confirmed the forecast gain” with [forecast-error improvement and test result across the indices], if accurate.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 overstates the annualized Sharpe under the usual independent daily-return assumption. *(about 4 words added)*
2. [Important] The reporting step is process detail without a stated result or consequence. *(about 6 words added)*

**Why**
1. Under that assumption, the annualization factor is the square root of 252, not 252. The current calculation therefore materially overstates the reported annualized Sharpe, which can undermine confidence in the result.
2. A reader sees that the Sharpe ratio was reported, but not what value was reported or what it informed. Without a resulting metric or decision, the step provides little evidence of impact.

**How to change it**
1. Replace “252” with “the square root of 252,” if using the usual annualization convention.
2. Replace the reporting clause with [the resulting reported metric and what it informed], if there was a meaningful use or outcome.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Polish] The bullet uses a first-person pronoun. *(no words)*

**Why**
“My proof” introduces first-person wording into a résumé bullet. It also makes the line less consistent with the résumé’s phrasing elsewhere.

**How to change it**
Replace “my proof” with “the proof.”

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package’s download result is separated from its release by a list of unrelated duties, and “which” has an unclear referent. *(no words)*
2. [Important] The list of unrelated duties interrupts the package-release result. *(about 12 words saved if removed)*

**Why**
1. After the duties are listed, a scanning reader may not connect the download count to the R package. That weakens the clearest evidence of the package’s reach.
2. The cluster, reading-group, and grading duties shift attention away from the open-source package before its download result appears. Separating or removing them would keep the adoption evidence next to the work it measures.

**How to change it**
1. Move the download clause directly after “R package” and make its referent explicit: “The package was downloaded 3,000 times in its first year.” Split the duties into a separate bullet or remove them.
2. Move the duties to a separate bullet or remove them, and put the download result next to the package release.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is 25%, not a 33% improvement. *(no words)*
2. [Important] The bullet gives forecast-error values without naming the error metric. *(about 2 words added)*
3. [Important] The realized-volatility method repeats information in the preceding bullet. *(saves about 4 words)*

**Why**
1. The reduction is 0.05, which is 25% of the original 0.20. A 33% reduction from 0.20 would produce an error of about 0.13, so the stated percentage conflicts with the figures.
2. A reader cannot tell what the values measure or compare this result with other forecasting results. Naming the metric would make the change interpretable.
3. The preceding bullet already names realized-volatility features. Repeating the method here adds clutter without distinguishing this result.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [name of forecast-error metric].
3. Remove “by adding realized-volatility features,” or use that space for distinct detail.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The hit rate increased by 6 percentage points, not 6% relative to its original value. *(about 2 words added)*
2. [Important] The model description repeats information in the first bullet. *(saves about 5 words)*

**Why**
1. The figures show a change from 52% to 58%, which is a 6-percentage-point increase. Relative to 52%, the increase is about 11.5%, so “by 6%” misstates or obscures the size of the result.
2. The first bullet already identifies the temporal convolutional model. Repeating it here takes space from the result and makes the entry less easy to scan.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points,” keeping the stated figures from 52% to 58%.
2. Remove “with a temporal convolutional model.”

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The closing 0.02 gap after switching folds does not establish that validation leakage was reduced. *(about 2 words added)*

**Why**
Time-grouped folds can prevent leakage across time, but they also change the validation estimate. A smaller gap alone does not show that leakage caused the original gap or that the change reduced it.

**How to change it**
If a controlled comparison identified a leakage pathway that the new folds blocked, describe that evidence; otherwise, say the folds closed the 0.02 gap without attributing the change to reduced leakage.

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled; the correct spelling is “econometrics.” *(no words)*

**Why**
The typo appears in the Methods skills line and may make a reader question the care taken with the résumé. Correcting it preserves the intended skill while removing a visible error.

**How to change it**
Replace “econometircs” with “econometrics.”

## Already working

- s2:e2:b0: Pairs a concrete time reduction with the 2,000-run study it affected.
- s3:e0:b0: States a measurable out-of-sample result against a named forecasting baseline.
- s3:e1:b0: Shows a clear competition result with both rank and field size.

## Set aside (9)

9 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ff8ebdc0.md.

