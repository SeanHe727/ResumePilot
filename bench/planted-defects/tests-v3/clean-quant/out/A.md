> Here is my resume: bench/planted-defects/tests-v3/clean-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the resume and generated the full report at `/report --full`.

Specialist coverage:
- Content: 4 experience/project entries
- Wording: 4 experience/project entries
- Narrative: complete resume
- Format/ATS: complete
- Job-description match: not run because no posting was provided
- Education entries were not bullet-reviewed

The main changes to make are:

1. **Clarify evidence and causality**
   - In the Northpeak bullet ending “so every backtest decision used only information available at the time,” the validation methods do not fully establish that claim.
   - In the Kaggle bullet, clarify whether the “0.02 gap” is an absolute score difference and what caused it to close.
   - In the volatility project, clarify whether the 7% QLIKE result is a relative reduction or percentage-point difference.

2. **Make results easier to scan**
   - Move the Northpeak live-allocation approval earlier in its bullet.
   - Reduce technical lead-ins that delay the outcome, particularly the volatility-project bullet describing the Diebold–Mariano tests and Holm correction.
   - Consider reordering the Northpeak bullets so the strongest result and validation appear before implementation and documentation details.

3. **Tighten imprecise or passive wording**
   - Replace or clarify “tightens the previous bound by a log factor.”
   - Avoid “wrote up” and “which was presented” in the volatility project.
   - Clarify “without losing validation score” in the Kaggle project.
   - Remove the duplicate ranking information in “Placed 41st of 2,900 teams” and “top 2%.”

The format review found clean ATS parsing, consistent formatting, one-page length, and no layout warnings.

> /report
# Review: resume.pdf

**93/100** — format 100 · content 89 · wording 89 · narrative 89

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

2 errors, 14 important, 4 polish. Errors are marked [Error]; fix those first.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Polish] The phrase "lowering estimated slippage by a third" is less precise than the percentage format used elsewhere in the entry. *(no words)*

**Why**
A reader must translate "a third" into a percentage before comparing it with the other quantified results. Using the exact percentage format makes the magnitude easier to scan and keeps the bullet's metrics consistent.

**How to change it**
Replace "by a third" with the equivalent exact percentage, if accurate.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo period do not justify the claim that every backtest decision used only information available at the time. *(saves about 10 words)*
2. [Important] The validation method is described, but the bullet does not say what the validation demonstrated. *(about 8 words to add)*

**Why**
1. Those controls address leakage from overlapping labels and nearby training observations, but they do not prevent revised data, feature construction, universe selection, corporate actions, preprocessing, or execution timestamps from introducing future information. The broader claim therefore overstates the validation and can make a technically careful reader question the backtest pipeline.
2. A reader can see that the test design was careful, but cannot tell whether the signal remained effective, stable, or usable after that validation. The method is credible evidence of process, not the resulting value by itself, so the bullet leaves the main research outcome unstated.

**How to change it**
1. Replace the claim with a statement that the splits and embargo reduced leakage from overlapping observations and adjacent training data. If the full pipeline was also point-in-time controlled, state those specific controls; otherwise remove the broader contemporaneous-information claim.
2. Keep the validation method, then add the single most useful result, such as [out-of-sample performance or stability result, measured against the in-sample or baseline result].

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Important] The phrase "small live allocation" gives no concrete measure of the allocation or capacity estimate. *(about 5 words to add)*
2. [Important] The approval outcome is buried after the presentation details. *(no words)*

**Why**
1. Approval is meaningful, but "small" is relative and leaves the reader unable to judge the scale of the trust placed in the work. One concrete scale measure would make the outcome more credible without requiring the full presentation detail.
2. The live allocation is the strongest evidence of impact in this bullet, but the reader reaches it only after the signal, capacity estimate, and failure cases. Leading with the approval makes the consequence of the work easier to scan while preserving the supporting context.

**How to change it**
1. Replace or supplement "small live allocation" with [allocation size or capacity estimate, measured in capital, risk budget, or percentage of the desk book], if accurate.
2. Move the approved live-allocation outcome to the start of the bullet and retain the presentation detail afterward.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The phrase "tightens the previous bound by a log factor" does not specify the exact comparison or the scale of the improvement. *(about 6 words to add)*
2. [Important] The pronoun "it" has an unclear antecedent because it could refer to the variance bound or the estimator. *(no words)*
3. [Polish] The paper-status clause is wordier than necessary and arrives after the technical result. *(saves about 3 words)*

**Why**
1. A reader can tell that the result improves prior theory but cannot confidently judge the size or form of the improvement. The paper status supports the result's relevance, but it does not substitute for a precise mathematical comparison.
2. A technical reader may not know whether Section 3 contains the new bound or the estimator itself. That ambiguity weakens an otherwise strong theoretical contribution by making the paper's relationship to the result harder to parse.
3. The mathematical contribution should remain the main point, while the paper status should support it without interrupting the comparison. The current clause makes the bullet slightly slower to scan.

**How to change it**
1. Replace "by a log factor" with [the exact improvement and the quantity or prior bound it is measured against], if the comparison can be stated compactly.
2. Replace "it" with the specific subject, such as "the bound" or "the result," depending on what Section 3 contains.
3. Shorten the status clause and attach it directly to the correctly named bound or result, retaining "under review at JASA" as the supporting status detail.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] The phrase "Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%" does not specify whether 7% is a relative reduction in loss or a percentage-point difference. *(about 2 words to add)*

**Why**
A technical reader needs to know how the improvement was calculated to interpret its size consistently. QLIKE is a loss, so stating the direction and calculation explicitly would make the comparison easier to trust.

**How to change it**
Replace "by 7%" with the precise comparison, such as "by a relative 7%" or "from [baseline QLIKE] to [model QLIKE]," if accurate and available.

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Error] The stated full-sample Diebold–Mariano tests and Holm correction do not support the additional claim that the gain held at the 5% level in both crisis periods. *(saves about 5 words)*
2. [Important] The phrase "and in both crisis periods" does not identify the periods or show how the gain held within them. *(about 5 words to add)*
3. [Important] The result appears only after a long testing and correction clause. *(no words)*

**Why**
1. Significance in the full sample does not imply significance within each crisis subperiod. Separate crisis-period forecast-loss tests are required, with a multiple-testing correction covering the crisis-period hypotheses; otherwise the claim overstates the evidence.
2. A reader cannot judge the robustness of the result without knowing which periods were tested or whether the statement means significance in both periods across all indices. One compact identifier or count would make the evidence more usable.
3. The reader must pass through the Diebold–Mariano tests and Holm correction before reaching the outcome. Leading with the result would make the evidence easier to notice while retaining the method as support.

**How to change it**
1. Limit the claim to the 24 indices for which the corrected full-sample tests were significant. If separate crisis-period tests were run with appropriate correction, report those results instead.
2. Replace "both crisis periods" with [names of the two crisis periods] or, if accurate, add "in [number] of [number] indices in each period."
3. Move the forecast-gain result to the start of the bullet and retain the test and correction details afterward.

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
1. [Important] The research deliverable is described, but the bullet does not state what it established or enabled. *(about 6 words to add)*
2. [Important] The phrase "method, robustness checks and results" does not name the analytical work performed. *(about 2 words to add)*
3. [Polish] "Wrote up" is informal and "which was presented" uses passive voice. *(saves about 2 words)*

**Why**
1. A reader can see that the work was documented and shared, but not why that output mattered or what conclusion it communicated. The preceding bullets contain the substantive finding, so this line should make the paper's value or audience evidence explicit.
2. A specialist gets no clear technical detail to associate with the research skill. One named robustness check would make the work more credible without turning the bullet into a methods section.
3. "Wrote up" contributes little meaning in a resume bullet, while the passive construction obscures who presented the work. More direct verbs would make the deliverable and the candidate's role easier to identify.

**How to change it**
1. Replace the generic presentation outcome with the concrete research conclusion the paper communicated or, if accurate, the resulting audience outcome such as [feedback, follow-on use or selected audience].
2. Replace "robustness checks" with one concrete check, such as [specific robustness check], if accurate; keep the paper and seminar outcome after that detail.
3. Replace "Wrote up" with "Documented" or "Prepared," and replace "which was presented" with an active construction naming the candidate as the presenter.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The 41st-place ranking and the top-2% description repeat nearly the same result, while the percentage is less precise. *(saves about 9 words)*

**Why**
The exact rank already communicates the competition outcome and lets the reader assess it against the stated field of 2,900 teams. The second ranking adds little and consumes space that could support a more useful technical or team contribution detail.

**How to change it**
Cut "finishing in the top 2% of the private leaderboard" and keep the more precise "Placed 41st of 2,900 teams."

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] Switching to time-grouped folds alone does not establish that leakage was reduced or that it caused the 0.02 score-gap improvement. *(about 5 words to add)*
2. [Important] The phrase "closed a 0.02 gap between local validation and leaderboard scores" does not identify the metric or what the 0.02 represents. *(about 3 words to add)*

**Why**
1. Time-grouped folds can reduce temporal leakage, but look-ahead features, overlapping labels, rolling calculations, or globally fitted preprocessing can still leak information. The score change cannot be attributed to the fold change without holding the model, features, preprocessing, and other settings constant and comparing the relevant scores.
2. A reader cannot tell whether 0.02 is an absolute difference in a named evaluation score, a relative percentage, or another quantity. Naming the metric would make the result defensible and interpretable.

**How to change it**
1. Use a controlled before-and-after comparison to state that time-grouped folds reduced the local-to-leaderboard gap by 0.02; otherwise soften the claim to say they were intended to reduce temporal leakage.
2. Replace or expand the phrase with "[evaluation metric] gap of 0.02" or, if accurate, state the before-and-after gap using the metric's units.

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
1. [Important] "Without losing validation score" does not name the score or clarify the comparison baseline. *(about 3 words to add)*
2. [Polish] "Without losing validation score" is awkward and imprecise. *(saves about 1 word)*

**Why**
1. The reader can see that feature count fell, but cannot tell what performance was preserved or whether it was compared with the full 900-feature set. Naming the metric and baseline would make the result easier to verify.
2. The wording makes the performance result sound informal and leaves the evaluation standard unnamed. A more natural phrase would state that validation performance was preserved while remaining compatible with the metric-specific clarification needed elsewhere in the bullet.

**How to change it**
1. Replace "validation score" with [evaluation metric] and, if accurate, clarify that it was unchanged relative to the 900-feature set.
2. Replace "without losing validation score" with "without reducing validation performance."

## Already working

- s2:e0:b0: Combines a specific research contribution with a consequential desk-level result.
- s2:e1:b3: Shows both technical depth and evidence that the work was used.

## Set aside (2)

2 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-7ae047cf.md.

