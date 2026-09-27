> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed:

- All 5 entries with bullets: 3 experience entries and 2 projects
- Education section: no bullets to review
- Full-document narrative
- Formatting and ATS extraction
- No job-description match review, because no posting was provided

The file is one page, extracts cleanly, and has no layout or ATS blockers.

### Changes to make first

1. **Fix quantitative inconsistencies**
   - In the volatility forecasting project, the change from **0.20 to 0.15** is a **25% reduction**, not a 33% improvement.
   - Clarify or remove the line describing annualized daily Sharpe as daily Sharpe multiplied by 252; the specialist identified this as technically incorrect.
   - Make the Sharpe improvement’s baseline and calculation convention explicit.
   - Clarify what “90% of gross returns” refers to.

2. **Rework the Northpeak Capital entry**
   - The first five bullets all concern the trading signal, but the entry currently mixes headline results, implementation, statistical testing, and documentation.
   - Make the forecast gain and statistical test report an actual result rather than only saying the gain was “confirmed.”
   - Fix the grammatical construction beginning with “Joining 120 microstructure features…”
   - Consider removing or consolidating procedural detail that does not show an outcome.

3. **Reposition Sunrise Bakery**
   - Its placement as the first experience makes the career sequence appear interrupted.
   - Put it under an **Additional Experience** section after the quantitative experience and projects, reduce it to one line, or remove it if space is needed.
   - The inventory bullet has a clear measured outcome. The labour-budget bullet does not state how far under budget or how consistently that result was achieved.

4. **Tighten the research assistant entry**
   - Separate or reduce the unrelated cluster maintenance, reading-group, and grading responsibilities.
   - Move the R package’s **3,000 first-year downloads** closer to the package achievement.
   - Replace the first-person wording in “my proof.”
   - Add the number of teaching-rating respondents if available.

5. **Tighten the volatility forecasting project**
   - Correct the 0.20-to-0.15 percentage calculation.
   - Name the error metric in the second bullet.
   - Define the forecast horizon or directional target for the hit-rate result.
   - Avoid repeating the same model and 30-index context in multiple bullets.

6. **Clarify the competition project**
   - State your personal contribution to the team’s 41st-of-2,900 result.
   - Identify which score or metric had the 0.02 validation-to-leaderboard gap.

7. **Audit the Skills section**
   - The narrative review found that **SQL, C++, Kafka, and Bayesian inference** are not supported elsewhere in the resume. Remove them unless you can connect them to actual experience.
   - Correct **“econometircs”** to **“econometrics.”**

The detailed report contains the entry-by-entry findings and supporting rationale; it is available through `/report --full`.

> /report
# Review: resume.pdf

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

- **The 0.4-Sharpe result does not identify the baseline or how the incremental figure was calculated.** *(about 5 words to add)*
  > Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
  A reader cannot tell whether 0.4 is the signal's standalone Sharpe, the portfolio's change in Sharpe, or an attribution estimate. Without the comparison, the 18-month backtest does not make the size of the contribution fully defensible.
  **How to change it:** Specify whether 0.4 is the incremental portfolio contribution and add [desk-book Sharpe before adding the signal] or [the uncertainty interval for the incremental Sharpe].
- **The turnover result does not identify the return comparison or the before-and-after slippage values.** *(about 8 words to add)*
  > Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.
  The reader can calculate that turnover fell from 34% to 21%, but cannot judge the return trade-off behind retaining 90% of gross returns. Because slippage is only described as estimated, its baseline and cost-model basis are needed to assess the claim.
  **How to change it:** Replace the unsupported comparisons with [gross returns before smoothing] versus [gross returns after smoothing] and [slippage before smoothing] to [slippage after smoothing], while retaining the turnover change.
- **The forecast-gain bullet gives no magnitude or statistical result.** *(about 7 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  A reader cannot tell whether the improvement was economically meaningful or consistent across the 30 indices. Naming a test without reporting what it produced does not establish the strength of the result.
  **How to change it:** Add [forecast-loss improvement versus HAR-RV] and [the valid test's significance result or number of indices improved].
- **The feature-store bullet begins with a dangling construction instead of a clear subject and result.** *(no words)*
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  "Joining" does not grammatically connect to the subject performing "built," so the reader has to reconstruct who did what. The three technical methods also delay the feature-store outcome, weakening the ownership and impact of the infrastructure work.
  **How to change it:** Lead with the feature-store outcome and retain only the most useful supporting detail; at minimum replace the opening with "Joined 120 microstructure features point-in-time across six venues, deduplicated late prints, versioned each schema, and built".

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The teaching rating needs a response count or response rate.** *(about 5 words to add)*
  > Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.
  A reader cannot tell whether the 4.8/5 rating represents most of the 60 students or only a small subset. Without that denominator, the rating is weaker evidence of teaching quality than the scope and deliverables in the same bullet.
  **How to change it:** Add [the number or response rate of students who submitted the evaluation] after the rating.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The hit-rate change should be stated as 6 percentage points, and its forecast target or horizon is undefined.** *(about 5 words to add)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The rate rose from 52% to 58%, which is a six-percentage-point increase and an approximately 11.5% relative increase, so calling it a 6% improvement is technically incorrect if percentage means relative change. Without the forecast horizon or directional target, the reader cannot interpret what the hit rate measures.
  **How to change it:** Replace "by 6%" with "by 6 percentage points" and add [the forecast horizon or definition of the directional target] if it materially distinguishes the evaluation.
- **The QLIKE comparison lacks an evaluation horizon or sample period.** *(about 4 words to add)*
  > Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.
  A reader cannot tell whether the out-of-sample result covers daily, weekly, or another forecast horizon, or how much data supports it. Naming the evaluation window would make the comparison more credible without adding several extra conditions.
  **How to change it:** Add [the forecast horizon or out-of-sample period] immediately after the QLIKE result.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The competition result does not show which part of the team submission the candidate owned.** *(about 5 words to add)*
  > Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.
  Because the entry identifies a team of three, the ranking alone does not tell a recruiter whether the candidate built the model, engineered features, evaluated it, or contributed in another way. The result remains credible, but the candidate's personal relevance to it is unclear.
  **How to change it:** Keep the ranking as the outcome and replace or follow the model description with [the modeling, feature-engineering, or evaluation component you owned].
- **The 0.02 validation gap does not identify the competition metric or the direction of the gap.** *(about 5 words to add)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  A reader cannot tell whether 0.02 is a loss, correlation, ranking metric, or another score, nor whether local validation initially exceeded or fell below the leaderboard score. Without that anchor, the size and meaning of the improvement are difficult to judge.
  **How to change it:** Name [the validation metric] and specify [whether local validation initially exceeded or fell below the leaderboard score].

## Across the whole résumé

- **Move Sunrise Bakery out of the lead position and into a reduced Additional Experience section.** *(saves about 15 words if reduced; no words if moved)*
  > Sunrise Bakery
  Opening with a bakery management role makes the résumé appear to be moving away from quantitative work, even though the stronger evidence for the target career comes later. A recruiter may therefore miss the quantitative profile before reaching the relevant experience and projects.
  **How to change it:** Move the entry after the quantitative experience and projects, label it Additional Experience, and reduce it to one line; remove it entirely if space is constrained.
- **Correct the spelling of "econometircs" to "econometrics" in Skills > Methods.** *(no words)*
  > econometircs
  The misspelling is immediately visible in a section recruiters scan for technical fit. It can make the candidate appear careless about a named field even though the underlying quantitative work is strong.
  **How to change it:** Replace "econometircs" with "econometrics".
- **Remove the first-person pronoun from the mathematical research bullet.** *(no words)*
  > my proof
  The phrase "my proof" breaks the résumé's otherwise direct, phrase-based construction. It also makes the line read more like a sentence than the surrounding bullets.
  **How to change it:** Replace "my proof" with "the proof".

## Set aside (19)

Worth knowing, and not worth the space on this page:

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
- …and 9 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b669eca7.md.

