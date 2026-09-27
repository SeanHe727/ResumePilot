> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Coverage: content reviewed for 5 entries, wording for 5 entries, narrative for the full resume, and format/ATS. No job-description match was run because no posting was provided. Education entries were not applicable to bullet review.

The specialists’ main recommended changes:

1. **Reframe the experience order**
   - Move Northpeak Capital before Sunrise Bakery, or reduce the bakery role to a short “Additional Experience” entry.
   - The current bakery role is the first and most prominent experience, while the rest of the resume points toward quantitative research.
   - Correct the skills typo **“econometircs” → “econometrics.”**
   - Either support or remove skills not demonstrated elsewhere: SQL, C++, Kafka, and Bayesian inference.

2. **Correct quantitative claims**
   - The Northpeak bullet saying **“Added 0.4 Sharpe to the desk’s book”** treats Sharpe ratios as additive; verify and re-express the underlying result.
   - Verify the forecast-validation method for the nested HAR-RV comparison; the reviewer flagged standard Diebold–Mariano testing as inappropriate for that comparison.
   - The annualization bullet uses an incorrect factor and does not show the resulting metric or decision impact.
   - In the volatility project, **0.20 to 0.15 is a 25% reduction**, not a 33% improvement.
   - **52% to 58% is a 6-percentage-point increase**, not simply a 6% increase.

3. **Make outcomes more specific**
   - Add the actual labor-budget result for Sunrise Bakery if available.
   - Identify the error metric in the volatility project.
   - State what the statistical tests showed, rather than only naming the tests.
   - Explain what the documentation, cluster maintenance, reading group, and grading enabled.
   - Replace vague outcomes such as “before reporting it to the desk” and “for future interns” with the resulting decision or benefit.

4. **Tighten wording and structure**
   - Remove the first-person phrase **“my proof.”**
   - Fix the awkward wording around “supplier orders.”
   - Split or simplify the overloaded research-assistant bullet.
   - Lead bullets with their strongest result where possible.
   - Clarify ambiguous references such as **“which was downloaded 3,000 times.”**

The file itself is clean: one page, 555 words, ATS-readable, with no layout warnings. The full combined report is available through `/report --full`.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 85 · wording 85 · narrative 67

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The line claims that stock counts and supplier orders caused the reduction in unsold bread without evidence isolating their effect.**
   > Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
   Daily stock counts and supplier orders alone do not establish that these actions caused the reduction; other changes could explain the decrease. Without a comparison or analysis isolating their effect, the strong result is less credible to a reader.
   **How to change it:** Replace the causal construction with “Ran daily stock counts and supplier orders; unsold bread fell from 12% to 7% of production,” or add [evidence isolating how these actions caused the reduction]. Clarify “supplier orders” as the specific ordering change, such as [adjusted order quantities or ordering frequency based on daily counts], if accurate.
2. **“Added 0.4 Sharpe to the desk’s book” treats Sharpe ratios as additive.**
   > Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
   Portfolio Sharpe ratios do not add directly; the combined result depends on the signal’s volatility, correlation with existing positions, sizing, and combination method. Without a defined attribution method, the 0.4 figure does not establish the signal’s contribution to the desk’s Sharpe ratio.
   **How to change it:** Report the desk’s Sharpe ratio before and after the signal, or specify [the portfolio attribution method used to calculate the 0.4 improvement].
3. **“Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests” uses an inappropriate test for a nested model comparison.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   Standard Diebold-Mariano tests are not generally valid when one forecast model nests the other because estimation noise from the additional model terms distorts the usual null distribution. The comparison also needs appropriate treatment of multiple comparisons across the 30 indices.
   **How to change it:** Replace “standard Diebold-Mariano tests” with “Clark-West tests” or another valid nested-model forecast comparison, and add [an appropriate multiple-testing or joint-testing procedure across the 30 indices].

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- **“Keeping the store within its weekly labour budget” does not show the actual budget result.** *(about 3 words to add)*
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  Staying within budget could mean barely meeting it or substantially underspending. Without a specific variance or budget amount, the management outcome is difficult to assess.
  **How to change it:** Replace or supplement this phrase with [weekly labour-budget variance or amount under budget, measured against the approved budget].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The bullet says there was a “forecast gain” but does not quantify the improvement over the nested HAR-RV baseline or state the test result.** *(about 5 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  A quantitative-research reader cannot judge the value of the model comparison from a qualitative reference to a gain alone. The reader also sees that validation was attempted but not whether the improvement was statistically supported across the instruments.
  **How to change it:** Replace “forecast gain” with [improvement in the forecast metric relative to the nested HAR-RV baseline], and replace “standard” with [the test result or significance outcome across the 30 indices].
- **“Joining 120 microstructure features” uses the wrong tense for a completed internship and creates a dangling modifier before “built.”** *(no words)*
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  “Joining” makes the completed work sound ongoing and grammatically attaches the feature-joining action ambiguously to “built.” The long opening clause also delays the feature store’s reuse, which is the clearest evidence of impact.
  **How to change it:** Replace “Joining” with “Joined,” and move “built a feature store” to the start of the bullet or immediately after the subject so the reuse result appears earlier.
- **“Annualized the signal’s daily Sharpe ratio by multiplying it by 252” uses the wrong annualization factor.** *(about 3 words to add)*
  > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
  Under the usual daily-Sharpe convention, a daily Sharpe ratio is annualized by multiplying it by the square root of 252, not by 252. Multiplication by 252 annualizes a mean return and materially overstates a Sharpe ratio.
  **How to change it:** Replace “multiplying it by 252” with “multiplying it by the square root of 252.”
- **The annualized-Sharpe bullet gives no actual Sharpe value or comparison and ends with reporting the calculation rather than its research or trading value.** *(about 6 words to add)*
  > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
  A reader cannot assess the result from “annualized the signal’s daily Sharpe ratio” without the resulting value or a comparison. “Before reporting it to the desk” describes where the calculation went, not what decision, evaluation, or downstream use it enabled.
  **How to change it:** Add [the annualized Sharpe value or comparison] and replace the reporting-focused ending with [the decision, evaluation, or downstream use enabled by the annualized Sharpe figure].

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **“My proof” introduces a personal pronoun and makes the research result less direct in a résumé bullet.** *(saves about 1 word)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  Résumé lines are phrases rather than first-person sentences, so the pronoun weakens the formal style. It also places the important result after the estimator description instead of presenting the tightened bound as the direct continuation of the action.
  **How to change it:** Delete “my” and move the result into a direct continuation of the action, such as “Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **“Cut forecast error from 0.20 to 0.15, a 33% improvement” contains an incorrect percentage and does not identify the error metric.** *(about 1 word to add)*
  > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
  The reduction is 0.05, which is 25% of the original 0.20, not 33%. Without naming the metric, a reader cannot interpret the two values or compare this claim with the QLIKE result elsewhere in the study.
  **How to change it:** Replace “a 33% improvement” with “a 25% reduction,” and replace “forecast error” with [forecast-error metric].
- **“Improved the model’s directional hit rate by 6%” is numerically misleading, and the repeated model reference does not say what produced the higher hit rate.** *(about 2 words to add)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The change from 52% to 58% is an increase of 6 percentage points, not 6% in relative terms; the relative increase is approximately 11.5%. Repeating “with a temporal convolutional model” does not explain what was done with the model to produce this result.
  **How to change it:** Replace “by 6%” with “by 6 percentage points,” and replace the repeated model phrase with [the specific training, feature, objective, or evaluation change that produced the higher hit rate].
- **All three bullets repeat the model-performance theme instead of establishing a headline result followed by supporting technical detail.** *(saves about 5 words)*
  > Improved the model’s directional hit rate
  The overlapping QLIKE, forecast-error, and directional-hit-rate claims make the study read as three similar performance assertions. The entry would be easier to scan if one result led and the other metrics supported it with distinct technical detail.
  **How to change it:** Keep one headline performance result first, then use the remaining bullets for the distinct error metric and the specific modeling or feature change that supports it.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **“Closed a 0.02 gap between local validation and leaderboard scores” does not identify the score or metric represented by 0.02.** *(about 2 words to add)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  An ML reader can understand the direction of improvement but cannot judge the size or meaning of the change without the metric or score scale. “Which closed” also makes the causal relationship less direct than stating the improvement as the result of the fold change.
  **How to change it:** Replace “a 0.02 gap” with “[metric] gap of 0.02,” and replace “which closed” with a direct result such as “reducing the [metric] gap to [remaining gap],” if accurate.

## Across the whole résumé

- **Sunrise Bakery currently appears before Northpeak Capital, making an unrelated current role the first and most prominent experience entry.** *(no words)*
  > Sunrise Bakery | Assistant Store Manager
  A recruiter scanning for quantitative work encounters bakery management before the quantitative research internship. That ordering can obscure the experience most relevant to the target role.
  **How to change it:** Move Northpeak Capital ahead of Sunrise Bakery, or place Sunrise Bakery under a shortened additional-experience section.
- **Sunrise Bakery receives two bullets despite being unrelated to the quantitative work.** *(saves about 15 words)*
  > Assistant Store Manager
  The two-bullet treatment gives the role similar visual weight to the quantitative research and statistical-learning experience. Its prominence can make the résumé’s professional direction less clear.
  **How to change it:** Shorten Sunrise Bakery to one line, or add a brief explanation of its relevance if it must remain prominent.
- **The skills list includes SQL, C++, Kafka, and Bayesian inference without supporting evidence elsewhere in the résumé.** *(saves about 4 words)*
  > SQL
  No entry describes use of these tools or methods, so a reader cannot verify whether they were applied in substantive work. Unsupported skills take space that could instead reinforce the methods demonstrated by the experience and projects.
  **How to change it:** Remove SQL, C++, Kafka, and Bayesian inference unless the résumé adds work that demonstrates their use.
- **“econometircs” is misspelled.** *(no words)*
  > econometircs
  The misspelling is visible in a skills section and can make the document look insufficiently proofread. It also prevents the field from appearing correctly in a keyword scan.
  **How to change it:** Replace “econometircs” with “econometrics.”

## Set aside (12)

12 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-804132ea.md.

