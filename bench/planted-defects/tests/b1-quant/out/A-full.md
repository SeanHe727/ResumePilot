# Full review: resume.pdf

**83/100** — format 100 · content 73 · wording 84 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The daily Sharpe annualization uses the wrong scaling rule and weakens the credibility of the surrounding performance claims.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   Annualizing a daily Sharpe ratio assumes square-root-of-time scaling under the usual return assumptions, not direct multiplication by 252. A quantitative reader could therefore question the reported comparison with the 0.4 Sharpe improvement and treat the desk report as quantitatively unreliable.
   **Instead:** Annualize with the square root of 252, or remove the bullet
2. **The forecast-study results use inconsistent metrics and contain two quantitative ambiguities, including an incorrect percentage.**
   > Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
   “By 7%” does not say whether the QLIKE change is relative or absolute, while “forecast error” does not identify the metric, so the two performance claims cannot be compared cleanly. The change from 0.20 to 0.15 is a 25% reduction, not 33%, and 52% to 58% is a six-percentage-point increase; a technical reader who catches either error may question the other results.
   **Instead:** Name the error metrics, label the 7% as relative if accurate, say 25% reduction, and say 6 percentage points

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

### The bakery bullets need one operating measure and one decision mechanism to make the management impact checkable.

> keeping the store within its weekly labour budget

“Within budget” identifies the constraint but not the size or duration of the result, so a hiring manager cannot judge how far the store operated within target. The stock-count activity and bread reduction are strong, but the line does not show which ordering or production decision the candidate changed, leaving ownership of the improvement partly unproven.

**Instead:** Add the budget variance or period, and name the inventory or ordering adjustment

*raised by content · costs about 8 words to add*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### The daily Sharpe annualization uses the wrong scaling rule and weakens the credibility of the surrounding performance claims.

> multiplying it by 252

Annualizing a daily Sharpe ratio assumes square-root-of-time scaling under the usual return assumptions, not direct multiplication by 252. A quantitative reader could therefore question the reported comparison with the 0.4 Sharpe improvement and treat the desk report as quantitatively unreliable.

**Instead:** Annualize with the square root of 252, or remove the bullet

*raised by content, narrative, wording · costs saves about 12 words if removed*

### The 0.4 Sharpe contribution lacks the comparison needed to interpret its size.

> added 0.4 Sharpe to the desk’s book

A quantitative reader cannot tell whether 0.4 is incremental Sharpe versus the existing desk book, a standalone signal Sharpe, or an attributed contribution. Those interpretations imply materially different performance, so the result is harder to assess than its precision suggests.

**Instead:** State the desk-book baseline or attribution comparison

*raised by content · costs about 5 words to add*

### The 90% return-retention claim does not identify the return series being retained.

> keeping 90% of gross returns

The reader cannot tell whether the smoothed signal retained 90% of the unsmoothed signal's gross returns, a benchmark's returns, or some other reference. Without that baseline, the turnover and slippage trade-off cannot be judged.

**Instead:** Name the reference return for the 90% retention

*raised by content · costs about 4 words to add*

### The Diebold–Mariano result is too vague to connect the statistical test to the trading signal's practical improvement.

> Confirmed the forecast gain

The bullet does not say what was forecast, how large the gain was, or whether the test supported it, so the test name alone provides little evidence of economic value. It also leaves unclear whether HAR-RV was compared on realized-volatility forecasts or on the return forecast used by the signal.

**Instead:** Name the forecast target, measured gain, and decisive test result

*raised by content · costs about 10 words to add*

### The feature-store bullet describes construction and reuse without showing what the later projects gained from it.

> the team reused in two later projects

Reuse establishes that the artifact survived beyond the original task, but it does not show whether it saved research time, improved data integrity, or enabled faster project setup. The dangling construction also makes the ownership of the work harder to read.

**Instead:** State the single downstream benefit of reuse

*raised by content · costs about 5 words to add*

### The documentation bullet states what was written and who might use it, but not a demonstrated result.

> for future interns

“For future interns” describes intended audience rather than evidence that the wiki improved onboarding, prevented mistakes, or preserved research knowledge. Without reuse, onboarding, or error-reduction evidence, the bullet ends on context instead of measurable value.

**Instead:** Replace the audience phrase with one measured reuse or onboarding result

*raised by content, wording · costs saves about 3 words if replaced*

### The feature-store and documentation bullets repeat adjacent research-workflow support without showing distinct downstream value.

> the team reused in two later projects

Both bullets describe infrastructure or knowledge-preservation work, so ending the internship entry with them as separate achievements can make the research narrative feel diluted. A reader needs either one measurable consequence for each or a shorter combined support point.

**Instead:** Combine or shorten them around distinct reuse outcomes

*raised by content · costs saves about 10 words if combined*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The variance-bound bullet does not identify the estimator, comparison, or assumptions behind the claimed log-factor improvement.

> my proof tightens the previous bound by a log factor

“By a log factor” could mean removing a logarithmic term, dividing the prior bound by one, or changing only part of the rate, and different sparse-regression estimators and targets produce materially different results. Without the old and new bounds and the key condition or target, a specialist cannot verify the contribution and a non-specialist may overread its scope.

**Instead:** Name the estimator and target, state the old-versus-new bound, and replace “my proof” with “the proof”

*raised by content · costs about 12 words to add*

### The simulation bullet names the cluster but not the technical mechanism behind the runtime improvement.

> simulation pipeline on the shared cluster

A reader can see the three-day-to-five-hour result and reproducibility benefit, but cannot tell whether parallelization, scheduling, vectorization, or another implementation choice produced it. That omission makes the infrastructure achievement less technically assessable.

**Instead:** Name the mechanism that produced the speedup

*raised by content · costs about 4 words to add*

### The package bullet names a topic and download count but not the implemented capability or the meaning of the adoption metric.

> an open-source R package for high-dimensional covariance estimation

Downloads show retrieval or attention, not what users could do with the package or what research outcome it enabled. The count may also include repeated downloads, and the surrounding cluster, reading-group, and grading duties dilute the package's central technical contribution.

**Instead:** Name the estimator or capability, clarify the download metric, and separate or remove the unrelated duties

*raised by content · costs saves about 12 words if the unrelated duties are removed*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The forecast-study results use inconsistent metrics and contain two quantitative ambiguities, including an incorrect percentage.

> from 0.20 to 0.15, a 33% improvement

“By 7%” does not say whether the QLIKE change is relative or absolute, while “forecast error” does not identify the metric, so the two performance claims cannot be compared cleanly. The change from 0.20 to 0.15 is a 25% reduction, not 33%, and 52% to 58% is a six-percentage-point increase; a technical reader who catches either error may question the other results.

**Instead:** Name the error metrics, label the 7% as relative if accurate, say 25% reduction, and say 6 percentage points

*raised by content · costs about 5 words to replace*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The validation bullet overclaims what the fold change proved and leaves the gap's metric and time-safety details unspecified.

> Cut validation leakage

Time-grouped folds can reduce temporal leakage without proving that every leakage source was eliminated or that the fold change alone closed the leaderboard discrepancy. Without the score metric, absolute-difference basis, and strictly chronological holdout detail, a technical reader cannot judge the 0.02 result.

**Instead:** Describe the observed metric gap reduction and specify chronological time-held-out folds

*raised by content · costs about 7 words to add*

### The feature-selection result does not identify which validation performance was preserved relative to the 900-feature version.

> without losing validation score

“Without losing validation score” could refer to any score or to a comparison that is not directly between the 300- and 900-feature models. Naming the metric and comparison would make the trimming result independently checkable.

**Instead:** Name the metric and compare the 300-feature result with the 900-feature version

*raised by content · costs about 5 words to add*

### The competition bullet repeats the same ranking information in both absolute and percentile form.

> Placed 41st of 2,900 teams

The rank already gives a precise position with its denominator, while the top-2% statement communicates the same achievement less precisely. Keeping both spends space without adding evidence to the result.

**Instead:** Keep the 41st-of-2,900 rank and remove the percentile

*raised by wording · costs saves about 6 words*

## Across the whole résumé

### Sunrise Bakery should follow the quantitative and research work in a compressed Additional Experience section.

> Sunrise Bakery | Assistant Store Manager

Leading with the bakery role makes the candidate appear to be moving away from quantitative work before the reader sees the stronger research evidence. Moving and compressing it preserves the management experience while making the intended career direction immediately clear.

**Instead:** Move it after the research entries under Additional Experience

*raised by narrative · costs no words*

### The Northpeak HAR-RV validation and Volatility Forecasting Study HAR-RV comparison appear duplicative unless their project relationship is made explicit.

> over the nested HAR-RV baseline

Both entries describe an HAR-RV comparison across 30 indices, so a reader may think the same forecast result has been presented twice. That duplication weakens the narrative and makes it unclear which entry owns the result and which merely supports it.

**Instead:** Identify the relationship and assign each result to the correct entry

*raised by narrative · costs about 3 words to add*

## Set aside (9)

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e1:b4: "before reporting it to the desk" describes a reporting action but does not say what the corrected report changed or enabled. (and 1 more like it)
- s2:e2:b0: "Built the lab’s simulation pipeline on the shared cluster" identifies the setting but not the technical mechanism that produced the speedup.
- s2:e2:b3, s2:e1, s2:e2: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" places several responsibilities alongside the package release without clarifying their separate ownership or results. (and 4 more like it)
- s3:e1:b2, s3:e1:b1: "without losing validation score" does not specify which score was preserved or how the selected-feature result compared with the 900-feature version. (and 2 more like it)
- s2:e0:b1, s2:e2:b0, s2:e2:b1, s2:e2:b3, s2:e1:b1, s2:e1:b2, s2:e1:b3, s3:e0:b0, s3:e0:b1, s3:e0:b2: "Ran daily stock counts and supplier orders" uses an awkward verb-object pairing because orders are placed rather than run; change it to "Conducted daily stock counts and placed supplier orders." (and 15 more like it)
- skills: SQL — no experience or project bullet shows SQL usage; either add a concrete example or remove it. (and 3 more like it)
- skills: time-series econometircs — the skill is misspelled; it should be "time-series econometrics." The research entries suggest related work, but the misspelling still needs correction.
- s2:e1, s3:e0: s2:e1:b0 and s2:e1:b2 repeat: Both describe validating the same forecasting signal against a benchmark; make the validation bullet explicitly support the headline signal result rather than presenting it as a separate achievement. (and 2 more like it)
