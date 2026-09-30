> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **5 eligible entries** reviewed for content and wording
- **Education** was not eligible for bullet review
- **Narrative review** completed
- **Format/ATS review** completed
- **No job-description match review** was run because no posting was provided

The file parses cleanly as a one-page, 555-word resume with no ATS blockers.

### Changes to make first

1. **Fix the quantitative errors in the volatility project**
   - The change from **0.20 to 0.15** is a **25% reduction**, not a 33% improvement.
   - The change from **52% to 58%** is a **6-percentage-point increase**, not 6%.
   - Avoid presenting the same temporal-convolutional model result across multiple bullets; consolidate overlapping performance claims.

2. **Rework the career narrative**
   - The current **Sunrise Bakery** role interrupts the statistics/quantitative-research trajectory. The narrative review recommends moving it to **Additional Experience**, reducing it to one line, or otherwise visually separating it from the quantitative roles.
   - The resume does not explain the period between **August 2021 and June 2025**. Your 2023 competition and ongoing 2024 project provide activity, but the timeline still needs clarification.
   - Consider adding a short summary connecting the Ph.D., statistical-learning research, quantitative-finance internship, and volatility-forecasting work.

3. **Correct the Northpeak Capital bullets**
   - The Diebold–Mariano bullet says the test “confirmed” the forecast gain but does not report the test result. State the actual result or avoid implying more than the test established.
   - The feature-store bullet leads with a long technical process before its outcome; make the result or adoption clearer.
   - The annualized Sharpe-ratio calculation using multiplication by **252** is incorrect and should be corrected.
   - The documentation bullet needs a clearer benefit or evidence of use.

4. **Tighten the research-assistant entry**
   - The Monte Carlo pipeline result is useful, but the bullet currently makes the implementation appear before the main outcome.
   - Remove the first-person wording in the proof bullet.
   - Separate or reduce the package release, cluster maintenance, reading group, and grading responsibilities; they currently read as an unrelated task list.
   - The teaching bullet shows scope and a rating, but does not establish an educational outcome beyond satisfaction.

5. **Fix wording and consistency**
   - Because Sunrise Bakery is current, its bullets should use present tense rather than past tense.
   - Correct the spelling of **“econometircs”** to **“econometrics.”**
   - **Kafka** appears in Skills without being demonstrated elsewhere. Either connect it to a project or remove it.
   - Clarify whether percentage improvements are relative percentages or percentage-point changes.
   - Several bullets would read more directly if the result appeared before the method.

The detailed report, including the entry-by-entry findings and quoted bullets, is available in the full report file via `/report --full`.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 84 · wording 86 · narrative 62

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The Diebold–Mariano claim is technically overstated.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   A standard Diebold–Mariano test is not generally valid without adjustment when the competing forecasting models are nested, because parameter estimation changes the null distribution. Testing across 30 indices also requires suitable treatment of multiple comparisons and cross-index dependence before the result can support a claim of confirmation.
   **How to change it:** Replace “with standard Diebold-Mariano tests” with a description of the appropriate nested-model adjustment, and state how the 30-index results were corrected for [multiple comparisons and cross-index dependence]. Do not call the gain “confirmed” unless those adjusted tests support that wording.
2. **The daily Sharpe ratio is annualized with the wrong factor.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is normally annualized by multiplying by the square root of 252, not by 252. Multiplying by 252 substantially overstates the annualized Sharpe ratio and is an error a quantitative-finance reader would catch immediately.
   **How to change it:** Replace “multiplying it by 252” with “multiplying it by √252.” Keep the calculation only if the bullet needs to explain the correction; otherwise use the corrected annualized result directly.
3. **The forecast-error change is arithmetically wrong.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   Reducing the value from 0.20 to 0.15 is (0.20 − 0.15) / 0.20 = 25%, not 33%; 33% results from dividing the difference by the ending value. The current percentage conflicts with the stated endpoints and can make the reader doubt the accuracy of the other quantitative claims.
   **How to change it:** Replace “a 33% improvement” with “a 25% reduction.” Keep “reduction” rather than “improvement,” because the quantity being reduced is forecast error.

## Already working

- s2:e1:b0: Leads with a concrete trading outcome rather than a research task.
- s3:e0:b0: Names a meaningful baseline rather than presenting an isolated model score.
- s3:e1:b0: Leads with a highly legible competitive result.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- **Sunrise Bakery should be moved out of the main Experience sequence or reduced to one line.** *(saves about 20 words if reduced to one line)*
  > Sunrise Bakery
  The two bullets make the entry read as a substantial move toward retail management rather than as supporting experience alongside quantitative research. Its current position interrupts the research narrative and may make the candidate’s intended direction less clear.
  **How to change it:** Move the role into a brief Additional Experience section at the bottom, or reduce it to one line containing the title, employer, and dates. Do not give it two accomplishment bullets in the main sequence unless retail management is part of the target career.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The bullet does not identify what forecast performance improved or what the tests found.** *(about 15 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  “Confirmed the forecast gain” tells a recruiter that the model won a comparison but not whether the gain affected forecast loss, accuracy, or a trading decision. The number of indices gives scope rather than evidence; without a test result, the reader cannot judge whether the improvement was statistically meaningful.
  **How to change it:** Replace “forecast gain” with [the exact forecast-error or trading-performance measure and its change versus HAR-RV], then add [the single most telling adjusted test result, such as a p-value, test statistic, or percentage of indices showing significant improvement]. Replace “Confirmed” with the precise supported claim.
- **The Sharpe-ratio bullet reports a calculation rather than what the calculation changed or enabled.** *(about 10 words to add; saves about 6 words)*
  > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
  “Annualized the signal’s daily Sharpe ratio” describes routine metric handling, not an analytical or investment outcome. The reader also cannot judge the result because the annualized Sharpe value and the return series or benchmark it describes are missing.
  **How to change it:** Replace the reporting step with [the decision or comparison the annualized Sharpe supported], and add [the resulting annualized Sharpe value and the return series or benchmark it describes]. Cut “before reporting it to the desk,” which adds no useful evidence.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The final bullet combines the package release with unrelated duties and leaves its strongest result buried at the end.** *(about 5 words to add; saves about 8 words if unsupported duties are cut)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  The package, cluster maintenance, reading group, and grading are different kinds of work, so the line reads as an unordered task list rather than a focused research accomplishment. A reader may miss the open-source package’s technical impact because the 3,000-download result arrives only after several supporting responsibilities.
  **How to change it:** Make the package release its own bullet, lead with “Released an open-source R package for high-dimensional covariance estimation,” and move “the package reached 3,000 downloads in its first year” immediately after it. Put cluster maintenance, reading-group organization, and grading in a separate bullet only if they have [a concrete outcome]; otherwise cut them.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The forecast-error bullet does not name the error measure or the model that received the added features and loss.** *(about 5 words to add)*
  > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
  A technical reader cannot tell whether 0.20 and 0.15 are QLIKE, MAE, RMSE, or another metric, so the size and meaning of the change are difficult to judge. The line also does not say whether the additions modified the temporal-convolutional model, a baseline, or another setup.
  **How to change it:** Replace “forecast error” with [the exact error metric], retain the from-to values, and identify [the model or baseline modified] immediately before “by adding realized-volatility features and an asymmetric loss.”
- **The directional hit-rate increase is 6 percentage points, not 6 percent.** *(about 2 words to add)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The endpoints rise from 52% to 58%, which is a six-percentage-point increase; expressed as a relative increase, it is approximately 11.5%. Calling it “6%” can make readers interpret the result as a relative change and misread the size of the improvement.
  **How to change it:** Replace “improved the model’s directional hit rate by 6%” with “improved the model’s directional hit rate by 6 percentage points, from 52% to 58%.” If a relative percentage is preferred, use approximately 11.5% instead.
- **The third volatility-study bullet repeats the temporal-convolutional model description from the preceding bullet.** *(saves about 6 words)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The preceding bullet already establishes the model context, so repeating it spends words on setup rather than adding distinct evidence. The repeated wording also contributes to the project’s broader pattern of multiple closely related performance claims.
  **How to change it:** Cut “with a temporal convolutional model” from this bullet and use the saved space for [distinct methodological detail], or retain the stronger of the overlapping performance claims and use the other bullet for a different contribution.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The competition result repeats itself by giving both the precise rank and a less precise top-2% description.** *(saves about 8 words)*
  > Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.
  “Placed 41st of 2,900 teams” already communicates the result more precisely than “finishing in the top 2%.” Keeping both spends words on the same evidence rather than on the modeling work or its outcome.
  **How to change it:** Keep “Placed 41st of 2,900 teams” and remove “finishing in the top 2% of the private leaderboard.”
- **The validation bullet leads with a technical condition and does not define what the 0.02 gap measures or how it changed.** *(about 8 words to add)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  A recruiter may understand that leakage is undesirable but still cannot see what became more trustworthy or useful after the fold change. Without the score metric and before-and-after gap, the numerical result is difficult to interpret or compare.
  **How to change it:** Lead with “Closed a 0.02 gap between local validation and leaderboard scores by switching to time-grouped folds.” Then specify [the score metric] and, if available, replace the single 0.02 figure with [the original gap and final gap]; add [the decision or model-selection outcome that became more reliable] only if the candidate has that fact.

## Across the whole résumé

- **The résumé does not explain the candidate’s primary status or activity between August 2021 and June 2025.** *(about 8 words to add)*
  > Aug 2021
  The dates leave a visible gap after the Graduate Research Assistant role, while the 2023 competition and 2024 project only partially account for that period. A reader may wonder whether important work, study, or employment is missing, which weakens confidence in the career timeline.
  **How to change it:** Add the candidate’s primary status or activity for the gap period, using [the relevant degree, research, employment, or other activity and its dates]. If the competition and independent study were the main activities, make their role in that period explicit rather than leaving them to imply it.
- **The résumé needs a short summary that connects the Statistics Ph.D., statistical-learning research, quantitative-finance internship, and volatility-forecasting work.** *(about 25 words to add)*
  > Ph.D. candidate in Statistics
  Those experiences currently appear as separate entries, so a recruiter must infer the quantitative-research narrative for themselves. A summary would make the candidate’s direction legible before the reader reaches the detailed evidence and would prevent the bakery role from becoming an early framing point.
  **How to change it:** Add a two-line summary before Education that states the candidate’s Statistics Ph.D. focus and connects [the statistical-learning research, quantitative-finance internship, and volatility-forecasting work].
- **The Methods skills heading contains a spelling error.** *(no words)*
  > econometircs
  The misspelled technical term is immediately visible to a recruiter screening for quantitative skills. It creates an avoidable impression of carelessness in a résumé whose work depends on technical precision.
  **How to change it:** Replace “econometircs” with “econometrics.”

## Set aside (20)

Worth knowing, and not worth the space on this page:

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e0:b0: "keeping the store within its weekly labour budget" gives a benchmark but not a concrete measure of how closely the budget was met.
- s2:e2:b2: "Taught weekly recitations for 60 students in graduate probability" describes the responsibility, while "earning a 4.8/5 teaching rating" measures satisfaction rather than the educational result.
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" lists additional responsibilities without saying what changed because of them.
- s2:e1:b3: "the team reused in two later projects" shows adoption but not what changed because the feature store existed.
- s2:e1:b5: "for future interns" identifies the intended audience but not the benefit of the documentation. (and 1 more like it)
- s2:e0:b0, s2:e0:b1: "Managed" and "keeping" are past-tense verbs even though the role is listed as current; use present tense: "Manage opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget." (and 1 more like it)
- s2:e0:b1: "Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production" puts the measurable result after the methods; lead with the result: "Cut unsold bread from 12% to 7% of production by running daily stock counts and supplier orders."
- s2:e1:b2: "the forecast gain" does not say what improved, while "HAR-RV" is unexplained jargon for readers outside the immediate research context. (and 1 more like it)
- s2:e1:b3: "Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store" puts a long method list before the result; lead with "Built a feature store" and move the methods after it.
- …and 10 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-7348c1a9.md.

