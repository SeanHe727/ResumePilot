# Full review: resume.pdf

**84/100** — format 100 · content 74 · wording 88 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The stated use of standard Diebold-Mariano tests is technically unsuitable for the nested HAR-RV comparison.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   Standard Diebold-Mariano inference generally is not valid for nested forecasts because the loss-difference process has nonstandard behavior under the null. A technically informed reader may therefore distrust the claimed confirmation even if the underlying forecast comparison was sound.
   **How to change it:** Replace "standard Diebold-Mariano tests" with the nested-model procedure actually used, such as [the Clark-West adjustment or an appropriate nested-model bootstrap test], and do not name a method that was not run.
2. **Delete the incorrect Sharpe-annualization bullet and use one consistent Sharpe convention in the signal result.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   The résumé reports a 0.4 Sharpe improvement in one bullet but says the daily Sharpe was multiplied by 252 in another, making the definition and calculation unclear. A technically informed reader may treat this as a fundamental research error and question the other quantitative results.
   **How to change it:** Delete the bullet beginning "Annualized the signal’s daily Sharpe ratio" and clarify in the 0.4-Sharpe bullet whether the figure is daily or annualized, using the corrected convention and [the resulting annualized Sharpe] only if it was actually calculated.
3. **The forecast-error metric is unnamed and the stated 33% improvement is mathematically incorrect.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   A decrease from 0.20 to 0.15 is 0.05 divided by 0.20, or a 25% reduction, not 33%. Without the metric name, a reader also cannot tell whether this result is comparable to the QLIKE loss in the first bullet, which undermines confidence in the reported evaluation.
   **How to change it:** Replace "forecast error" with [the name of the error metric] and replace "a 33% improvement" with "a 25% reduction"; if it is not the QLIKE metric, identify it explicitly.

## Already working

- s2:e1:b0: Names the market, signal family, evaluation horizon, out-of-sample design, and cost treatment.
- s2:e1:b1: Shows an explicit trade-off between trading costs and retained performance rather than claiming an unqualified improvement.
- s3:e1:b0: The ranking and denominator make the competition result independently judgeable.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

### Delete the incorrect Sharpe-annualization bullet and use one consistent Sharpe convention in the signal result.

> multiplying it by 252

The résumé reports a 0.4 Sharpe improvement in one bullet but says the daily Sharpe was multiplied by 252 in another, making the definition and calculation unclear. A technically informed reader may treat this as a fundamental research error and question the other quantitative results.

**How to change it:** Delete the bullet beginning "Annualized the signal’s daily Sharpe ratio" and clarify in the 0.4-Sharpe bullet whether the figure is daily or annualized, using the corrected convention and [the resulting annualized Sharpe] only if it was actually calculated.

*raised by content, narrative · costs saves about 14 words*

### The stated use of standard Diebold-Mariano tests is technically unsuitable for the nested HAR-RV comparison.

> standard Diebold-Mariano tests

Standard Diebold-Mariano inference generally is not valid for nested forecasts because the loss-difference process has nonstandard behavior under the null. A technically informed reader may therefore distrust the claimed confirmation even if the underlying forecast comparison was sound.

**How to change it:** Replace "standard Diebold-Mariano tests" with the nested-model procedure actually used, such as [the Clark-West adjustment or an appropriate nested-model bootstrap test], and do not name a method that was not run.

*raised by content · costs about 3 words to add*

### The 0.4-Sharpe result does not identify the baseline or how the incremental figure was calculated.

> added 0.4 Sharpe

A reader cannot tell whether 0.4 is the signal's standalone Sharpe, the portfolio's change in Sharpe, or an attribution estimate. Without the comparison, the 18-month backtest does not make the size of the contribution fully defensible.

**How to change it:** Specify whether 0.4 is the incremental portfolio contribution and add [desk-book Sharpe before adding the signal] or [the uncertainty interval for the incremental Sharpe].

*raised by content · costs about 5 words to add*

### The turnover result does not identify the return comparison or the before-and-after slippage values.

> keeping 90% of gross returns

The reader can calculate that turnover fell from 34% to 21%, but cannot judge the return trade-off behind retaining 90% of gross returns. Because slippage is only described as estimated, its baseline and cost-model basis are needed to assess the claim.

**How to change it:** Replace the unsupported comparisons with [gross returns before smoothing] versus [gross returns after smoothing] and [slippage before smoothing] to [slippage after smoothing], while retaining the turnover change.

*raised by content · costs about 8 words to add*

### The forecast-gain bullet gives no magnitude or statistical result.

> Confirmed the forecast gain

A reader cannot tell whether the improvement was economically meaningful or consistent across the 30 indices. Naming a test without reporting what it produced does not establish the strength of the result.

**How to change it:** Add [forecast-loss improvement versus HAR-RV] and [the valid test's significance result or number of indices improved].

*raised by content · costs about 7 words to add*

### The feature-store bullet begins with a dangling construction instead of a clear subject and result.

> Joining 120 microstructure features

"Joining" does not grammatically connect to the subject performing "built," so the reader has to reconstruct who did what. The three technical methods also delay the feature-store outcome, weakening the ownership and impact of the infrastructure work.

**How to change it:** Lead with the feature-store outcome and retain only the most useful supporting detail; at minimum replace the opening with "Joined 120 microstructure features point-in-time across six venues, deduplicated late prints, versioned each schema, and built".

*raised by wording · costs no words*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

### The teaching rating needs a response count or response rate.

> 4.8/5 teaching rating

A reader cannot tell whether the 4.8/5 rating represents most of the 60 students or only a small subset. Without that denominator, the rating is weaker evidence of teaching quality than the scope and deliverables in the same bullet.

**How to change it:** Add [the number or response rate of students who submitted the evaluation] after the rating.

*raised by content · costs about 5 words to add*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### The forecast-error metric is unnamed and the stated 33% improvement is mathematically incorrect.

> 0.20 to 0.15, a 33% improvement

A decrease from 0.20 to 0.15 is 0.05 divided by 0.20, or a 25% reduction, not 33%. Without the metric name, a reader also cannot tell whether this result is comparable to the QLIKE loss in the first bullet, which undermines confidence in the reported evaluation.

**How to change it:** Replace "forecast error" with [the name of the error metric] and replace "a 33% improvement" with "a 25% reduction"; if it is not the QLIKE metric, identify it explicitly.

*raised by content · costs about 2 words to add*

### The hit-rate change should be stated as 6 percentage points, and its forecast target or horizon is undefined.

> directional hit rate by 6%

The rate rose from 52% to 58%, which is a six-percentage-point increase and an approximately 11.5% relative increase, so calling it a 6% improvement is technically incorrect if percentage means relative change. Without the forecast horizon or directional target, the reader cannot interpret what the hit rate measures.

**How to change it:** Replace "by 6%" with "by 6 percentage points" and add [the forecast horizon or definition of the directional target] if it materially distinguishes the evaluation.

*raised by content · costs about 5 words to add*

### The QLIKE comparison lacks an evaluation horizon or sample period.

> out-of-sample QLIKE loss by 7%

A reader cannot tell whether the out-of-sample result covers daily, weekly, or another forecast horizon, or how much data supports it. Naming the evaluation window would make the comparison more credible without adding several extra conditions.

**How to change it:** Add [the forecast horizon or out-of-sample period] immediately after the QLIKE result.

*raised by content · costs about 4 words to add*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### The competition result does not show which part of the team submission the candidate owned.

> Placed 41st of 2,900 teams

Because the entry identifies a team of three, the ranking alone does not tell a recruiter whether the candidate built the model, engineered features, evaluated it, or contributed in another way. The result remains credible, but the candidate's personal relevance to it is unclear.

**How to change it:** Keep the ranking as the outcome and replace or follow the model description with [the modeling, feature-engineering, or evaluation component you owned].

*raised by content · costs about 5 words to add*

### The 0.02 validation gap does not identify the competition metric or the direction of the gap.

> closed a 0.02 gap

A reader cannot tell whether 0.02 is a loss, correlation, ranking metric, or another score, nor whether local validation initially exceeded or fell below the leaderboard score. Without that anchor, the size and meaning of the improvement are difficult to judge.

**How to change it:** Name [the validation metric] and specify [whether local validation initially exceeded or fell below the leaderboard score].

*raised by content · costs about 5 words to add*

## Across the whole résumé

### Move Sunrise Bakery out of the lead position and into a reduced Additional Experience section.

> Sunrise Bakery

Opening with a bakery management role makes the résumé appear to be moving away from quantitative work, even though the stronger evidence for the target career comes later. A recruiter may therefore miss the quantitative profile before reaching the relevant experience and projects.

**How to change it:** Move the entry after the quantitative experience and projects, label it Additional Experience, and reduce it to one line; remove it entirely if space is constrained.

*raised by narrative · costs saves about 15 words if reduced; no words if moved*

### Correct the spelling of "econometircs" to "econometrics" in Skills > Methods.

> econometircs

The misspelling is immediately visible in a section recruiters scan for technical fit. It can make the candidate appear careless about a named field even though the underlying quantitative work is strong.

**How to change it:** Replace "econometircs" with "econometrics".

*raised by narrative · costs no words*

### Remove the first-person pronoun from the mathematical research bullet.

> my proof

The phrase "my proof" breaks the résumé's otherwise direct, phrase-based construction. It also makes the line read more like a sentence than the surrounding bullets.

**How to change it:** Replace "my proof" with "the proof".

*raised by file · costs no words*

## Set aside (19)

- s2:e0:b0: "keeping the store within its weekly labour budget" does not say how far under or how consistently within budget the store was.
- s2:e1:b3: "built a feature store the team reused in two later projects" describes reuse but not what changed because of the store.
- s2:e1:b4: "before reporting it to the desk" identifies an audience but no result of the reporting.
- s2:e1:b5: "for future interns" names the intended audience but not what the documentation enabled or improved. (and 1 more like it)
- s2:e2:b0: "making runs reproducible by seed" implies that recording the seed alone guarantees reproducibility.
- s2:e2:b1: "my proof tightens the previous bound by a log factor" does not specify the exact comparison or the assumptions under which it is tighter.
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" lists substantial responsibilities without saying what changed because of them.
- s2:e0:b1: "Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production" buries the result after the methods; move the outcome to the front: "Cut unsold bread from 12% to 7% of production by running daily stock counts and supplier orders."
- s2:e2:b1: "my proof" uses first-person language inside the bullet and interrupts the otherwise direct construction; replace it with "the proof."
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" piles unrelated duties into the package achievement and weakens its focus. (and 1 more like it)
- s2:e1:b3: "Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema" buries the result behind three methods, so lead with the feature-store outcome and retain only the most useful supporting detail.
- s2:e1:b4: "before reporting it to the desk" is procedural filler that does not strengthen the action or result; delete it unless the reporting step is essential.
- skills: SQL — no experience or project bullet shows SQL use. (and 3 more like it)
- s2:e1: s2:e1:b0 and s2:e1:b1 repeat: Both describe improvements to the same trading signal; keep both only if the second is clearly framed as implementation supporting the headline result.
- s2:e1: The first five bullets concern the signal, but the incorrect or unclear Sharpe-calculation bullet undermines the entry and the feature-store and documentation lines read as secondary work rather than a deliberate research narrative.
- s2:e2: s2:e2:b0 and s2:e2:b3 repeat: Both mention maintaining or operating the shared cluster; the cluster-maintenance detail in s2:e2:b3 is buried inside a separate bundle of duties and should be removed or separated.
- s2:e2: The entry demonstrates strong research and teaching, but s2:e2:b3 combines a software release, cluster maintenance, reading-group organization, and grading into one unordered line.
- s3:e0: s3:e0:b0 and s3:e0:b2 repeat: Both repeat that a temporal convolutional model improved results on 30 equity indices; retain the distinct metrics but avoid repeating the model and dataset context in full.
- s3:e0:b1: "from 0.20 to 0.15, a 33% improvement" is mathematically inconsistent: the decrease from 0.20 to 0.15 is 25%, so the correction is "from 0.20 to 0.15, a 25% reduction."
