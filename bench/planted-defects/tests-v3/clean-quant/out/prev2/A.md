> Here is my resume: bench/planted-defects/tests-v3/clean-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume:

- **Content:** all 4 entries with bullets
- **Wording:** all 4 entries with bullets
- **Narrative:** complete resume
- **Format/ATS:** complete
- **Education entries:** headers only, so no bullet review applied
- **Job-description match:** not run because no posting was provided

The main changes to make are:

1. **Clarify comparison baselines and periods.**  
   For example, the Northpeak bullet mentioning “keeping 90% of gross returns” and reducing slippage “by a third” needs the relevant comparison period or baseline.

2. **Reduce overclaiming in validation language.**  
   The statement that the backtest used “only information available at the time” is stronger than what the described purged splits and embargo establish. Make the claim match exactly what was tested.

3. **Clarify technically dense research claims.**  
   The “tightens the previous bound by a log factor” statement needs a more explicit comparison, and the Kaggle bullet should identify what the “0.02 gap” measures.

4. **Improve project outcomes.**  
   The volatility-forecasting project’s final bullet emphasizes a “12-page working paper” but does not explain the result or consequence of the seminar presentation.

5. **Reorder selected bullets.**  
   In the statistical-learning lab entry, put the theoretical contribution first, followed by computational infrastructure, software release, and teaching. In the Northpeak entry, move implementation/adoption before documentation.

6. **Fix a few wording issues.**  
   The wording specialist flagged the explanatory clause after the backtesting methods, the phrase “which the next intern cohort used to onboard,” and passive wording such as “which was presented.”

The file is already **one page, consistently formatted, ATS-readable, and free of layout warnings**. The full combined report is available at **`/report --full`**.

> /report
# Review: resume.pdf

**91/100** — format 100 · content 86 · wording 90 · narrative 88

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

2 errors, 8 important, 2 polish. Errors are marked [Error]; fix those first.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Important] The return-retention and slippage figures lack a comparison period and baseline. *(adds about 4 words)*

**Why**
The turnover change is clear, but a reader cannot tell whether the 90% return retention and one-third slippage reduction use the same test or compare the smoother with the unsmoothed strategy. Without that context, those figures carry less evidence of the smoother's value.

**How to change it**
Tie both figures to [the shared backtest period] and, if available, identify the original slippage baseline or the smoothed-versus-unsmoothed comparison.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo period did not establish that every backtest decision used only information available at the time. *(saves about 6 words)*
2. [Important] The bullet does not state what the validation established or enabled. *(adds about 6 words)*

**Why**
1. Those controls address leakage between overlapping observations and nearby training and test periods, but they do not by themselves control feature construction, data timestamps, universe selection, parameter tuning, or research choices informed by later results. The stronger guarantee therefore overstates the validation evidence and could make a quantitative reader question the rest of the backtest design.
2. A hiring reader can see that the test was rigorous, but cannot tell whether the signal remained effective, failed in particular regimes, or earned approval for further use. The bullet therefore demonstrates process without showing the research value of that process.

**How to change it**
1. Replace that clause with a direct statement that the splits and embargo reduced leakage from overlapping observations, or add the specific point-in-time controls and audits that established the stronger claim.
2. After the validation method, add [the most important out-of-sample performance or robustness finding] or [the decision the validation enabled], if one exists.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The capacity estimate and approved live allocation are not quantified. *(adds about 3 words)*

**Why**
A reader can tell that the signal passed an investment-governance hurdle, but cannot gauge the practical scale of that approval. One concrete scale anchor would make the transition from research to deployment more meaningful.

**How to change it**
Replace or supplement that phrase with [the approved allocation size] or add [the capacity estimate's key scale measure], if the detail can be disclosed.

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] The onboarding outcome is phrased as though the intern cohort onboarded someone else. *(adds about 3 words)*

**Why**
The phrase makes the cohort's use of the documentation momentarily ambiguous. That weakens an otherwise useful downstream-adoption result by obscuring that the documentation helped the interns get up to speed.

**How to change it**
Replace "onboard" with wording that says the cohort used the documentation to get up to speed in its first week.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Important] A seed and configuration file alone do not guarantee that every run is reproducible. *(adds about 5 words)*

**Why**
Reproduction can also depend on software and package versions, input data, numerical libraries, hardware, parallel scheduling, and nondeterministic operations. The absolute claim may therefore prompt a technical reader to ask what execution controls were actually in place.

**How to change it**
Limit the claim to reproducibility from the seeds and configuration files within the controlled execution environment, or add the environment and determinism controls that were actually used.

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The claim that the variance bound improves the previous bound by a logarithmic factor is not verifiable as written and may be misleading. *(adds about 10 words)*

**Why**
The two bounds must concern the same quantity under comparable estimators, assumptions, confidence levels, and asymptotic regimes. A better-looking logarithmic term could instead reflect stronger assumptions, a different target, or worse hidden dependence elsewhere, so a research reader cannot assess the result's validity or significance.

**How to change it**
Replace the phrase with [the exact old and new rates and comparison conditions], including the estimator, target quantity, logarithm's argument, and assumptions; if those details are not available, soften the claim to a variance bound for a sparse regression estimator.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
[Error] The reported Diebold–Mariano tests do not establish that the gain was significant in both crisis periods. *(saves about 3 words)*

**Why**
Tests across 30 indices showing significance for 24 do not establish significance within either crisis period. Each crisis-period claim requires its own appropriately specified subsample or interaction analysis, with multiple-testing control covering those tests as well.

**How to change it**
State that the gain was significant at the corrected 5% level on 24 of 30 indices in the full sample. Retain the crisis-period claim only if separate crisis-period tests were run and appropriately corrected; otherwise remove it.

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.
> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
[Important] The research bullet leads with testing and paper length, uses passive presentation wording, and omits the consequence of the presentation. *(saves about 8 words and adds [the consequence])*

**Why**
The outcome appears after the method instead of leading with the finding, while "12-page" measures document length rather than research value. "Which was presented" also hides the candidate's role, and the bullet gives no evidence that the seminar produced meaningful review, follow-up, or use.

**How to change it**
Move the forecast result to the front, replace the passive clause with an active statement that the candidate presented the work, and cut or de-emphasize the paper length and section list. Add [the resulting audience response, invitation, follow-up, or use], if one exists.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Polish] The bullet repeats the same ranking information in both the placement and top-percentile claims. *(saves about 9 words)*

**Why**
A reader learns essentially the same competitive result twice, so the ending spends words restating the ranking rather than adding evidence about the model or team contribution. The redundancy slightly reduces the bullet's efficiency.

**How to change it**
Keep either the exact placement or the top-2% result, and remove the other ranking statement.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 validation gap is not interpretable because its metric, unit, and before-and-after change are unspecified. *(adds about 3 words)*

**Why**
A hiring reader cannot tell whether 0.02 means absolute score points, a relative percentage, or another measure. The reader also cannot tell how much the gap changed, making the evidence for improved validation reliability harder to assess.

**How to change it**
Replace "0.02 gap" with [the relevant metric and unit], and, if available, state the before-and-after gap rather than only the amount closed.

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] The phrase "without losing validation score" gives no score, metric, or comparison point. *(adds about 5 words)*

**Why**
The reduction from 900 to 300 features is clear, but the reader cannot judge how strong the retained model performance was or how closely it matched the original feature set. A measured performance comparison would make the feature-selection result more credible.

**How to change it**
Replace the qualitative phrase with [the relevant validation metric] and [the measured difference from the 900-feature baseline], if space and evidence permit.

## Already working

- s2:e0:b0: Leads with a specific investment outcome rather than the implementation details.
- s2:e0:b3: Connects a technical infrastructure contribution to downstream team adoption.

## Set aside (3)

3 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c9c95e1f.md.

