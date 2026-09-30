> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Content and wording specialists reviewed all 5 bullet-bearing entries; the narrative and format specialists reviewed the full resume. JD matching did not run because no job posting was provided. Education entries were not applicable for bullet review.

The most important changes are:

1. **Reorder the experience section for a quantitative target.**  
   Put Northpeak Capital and the Statistical Learning Lab before Sunrise Bakery. Move the bakery role to “Additional Experience,” shorten it, or otherwise de-emphasize it so the current retail role does not lead the quantitative story.

2. **Fix the numerical inconsistencies in the volatility project.**  
   The change from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement. The change from 52% to 58% is **six percentage points**—or approximately an 11.5% relative increase—not simply “6%.” Also identify the error metric used.

3. **Add outcomes to technically incomplete bullets.**  
   The specialists flagged bullets about:
   - Diebold–Mariano testing without the resulting significance or forecast-error result
   - annualizing Sharpe ratio without the resulting figure or comparison
   - research-wiki documentation without its effect
   - cluster maintenance, reading groups, and grading without outcomes

4. **Clean up wording and grammar.**  
   Remove the first-person pronoun in “my proof,” correct “econometircs” to “econometrics,” clarify the ambiguous “which” in the research-assistant entry, and fix the dangling construction beginning “Joining 120 microstructure features…”

5. **Audit the Skills section.**  
   SQL, C++, Kafka, and Bayesian inference are listed but are not supported by the experience or project bullets. Either connect them to specific work or remove them.

6. **Tighten repetitive project bullets.**  
   The Kaggle project repeats the same ranking result in both “41st of 2,900” and “top 2%.” The volatility project repeats the model description across bullets; consolidate the strongest result and use the remaining space for distinct evidence.

The PDF itself is one page, parses cleanly for ATS systems, and has no layout warnings. The full combined report is available with `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 83 · wording 85 · narrative 63

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The bullet uses a first-person pronoun in "my proof," which does not belong in a résumé bullet.**
   > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
   The pronoun makes the line read like a sentence from a personal narrative rather than a concise résumé phrase. It adds no useful ownership information because the bullet already presents the proof as part of your contribution.
   **How to change it:** Replace "my proof" with "the proof."
2. **Standard Diebold–Mariano tests are invalid for this nested-model forecast comparison.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   The standard test does not use the null distribution appropriate when one forecast model is nested within the other. A nested-model comparison also needs treatment of serial dependence and the structure of testing across 30 indices; using the wrong test undermines the claim that the forecast gain was confirmed.
   **How to change it:** Replace "standard Diebold-Mariano tests" with an appropriate nested-forecast test, such as Clark–West, while retaining the comparison across the 30 indices if that remains the tested structure. If no appropriate nested-model test was run, remove the claim that the gain was confirmed.
3. **The Sharpe-ratio annualization is wrong: multiplying a daily Sharpe ratio by 252 materially overstates it.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is conventionally annualized by multiplying by the square root of 252, not by 252. Multiplication by 252 applies to annualizing an expected daily return, so the reported performance metric would be materially inflated.
   **How to change it:** Replace "252" with "√252" and, if retained, make clear that this is the annualization of the daily Sharpe ratio under the appropriate dependence assumptions.

## Already working

- s2:e1:b0: Combines ownership, strategy type, asset class, performance impact, evaluation period, and transaction-cost treatment in one line.
- s3:e0:b0: Leads with a concrete comparative outcome rather than a description of activity.
- s3:e1:b0: Leads with a highly credible outcome rather than a task description.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- **The bullet does not quantify how far labour costs were under or within the weekly budget.** *(about 5 words to add)*
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  A hiring manager can see the budget target but not how effectively you managed against it. Without the actual variance, the cost-control result is less credible and harder to compare with other management achievements.
  **How to change it:** Replace "keeping the store within its weekly labour budget" with the most defensible comparison, such as [weekly labour cost as a percentage or dollar amount under or within the budget].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The forecast-validation bullet does not state the size or practical meaning of the gain over the nested HAR-RV baseline.** *(about 3 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  A hiring reader can see that validation occurred but cannot tell whether the improvement was material enough to support the signal's use. "Confirmed" is an indirect summary, so the line makes the reader infer the result rather than showing the measured comparison.
  **How to change it:** Replace "confirmed the forecast gain" with the measured improvement versus the nested HAR-RV baseline, such as "improved forecast accuracy by [effect size] versus the nested HAR-RV baseline," if accurate.
- **The line names the test but omits its result, significance outcome, or forecast-error comparison.** *(about 3 words to add)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  The test name establishes the method, not the evidence. Without a result anchor, the reader cannot judge how strongly the baseline was beaten across the 30 indices or whether the observed gain was statistically meaningful.
  **How to change it:** After the corrected nested-model test, add one defensible result anchor: "[test result or p-value]" or "[forecast-error reduction] versus the nested HAR-RV baseline."
- **The annualization bullet reports a calculation instead of the resulting Sharpe performance and its comparison.** *(about 2 words to add)*
  > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
  The calculation instruction gives the reader no usable evidence of how the signal performed. It also leaves the central metric unavailable for comparison with a benchmark or another desk result, while "before reporting it to the desk" makes the bullet sound like a reporting step rather than completed research.
  **How to change it:** Replace the calculation and reporting description with "reported annualized Sharpe of [value] versus [comparison]." If no defensible result or comparison is available, remove this line and retain the underlying performance result in the stronger bullet.
- **The feature-store bullet begins with a dangling participial phrase that does not grammatically align the opening action with its subject.** *(no words)*
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  The line does not clearly assign the joining and deduplication work to the person who built the feature store. The construction also makes the reader work through several methods before reaching the result that the team reused the store in two later projects.
  **How to change it:** Replace "Joining" with "Joined" and make the subsequent actions finite as well, such as "deduplicated" and "versioned," before stating that you built the feature store. Move "reused in two later projects" closer to the front of the bullet if possible.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The package bullet identifies the deliverable but not the technical work inside it.** *(about 4 words to add)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  For a statistical-learning role, an open-source package is stronger evidence when the reader can see what method or capability you implemented. The current wording gives an adoption signal through 3,000 downloads but leaves the technical contribution at the level of a subject area.
  **How to change it:** Replace some of the secondary-duty wording with [the package's key estimator, algorithm, or user-facing capability], if accurate, and attach "downloaded 3,000 times in its first year" directly to the package.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The reduction from 0.20 to 0.15 is 25%, not a 33% improvement.** *(saves about 1 word)*
  > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
  The absolute reduction is 0.05, and 0.05 divided by the original error of 0.20 equals 25%. Using 0.15 as the denominator produces the 33% figure, so the claim is internally inconsistent and weakens confidence in the other reported metrics.
  **How to change it:** Replace "a 33% improvement" with "a 25% reduction."
- **The change from 52% to 58% is 6 percentage points, not a 6% relative improvement.** *(about 1 word to add)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The stated endpoints differ by six percentage points. Expressed as a relative increase, the change is approximately 11.5% of the original 52% hit rate, so "by 6%" uses the wrong unit and leaves the result ambiguous.
  **How to change it:** Replace "by 6%" with "by 6 percentage points." If you intend a relative comparison instead, use approximately 11.5% and retain the original 52% denominator explicitly.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The bullet overstates what the validation-to-leaderboard comparison establishes by claiming that the fold change cut leakage.** *(about 4 words to add)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  A smaller local-validation-to-leaderboard gap does not prove that time-grouped folds caused the improvement. Other pipeline changes, feature leakage, distribution shift, or ordinary leaderboard variation could explain the difference, and time grouping alone does not rule out future-derived features or overlapping-label leakage.
  **How to change it:** Replace the causal wording with "Switched to time-grouped folds; the local-validation-to-leaderboard gap changed by 0.02" and add [the metric, direction, and whether all other pipeline elements were held constant].

## Across the whole résumé

- **The Methods skills line misspells "econometrics."** *(no words)*
  > econometircs
  The error is visible in a section recruiters often scan for keyword matches. It can make the document look careless and may prevent the correctly spelled discipline from matching a search or reader expectation.
  **How to change it:** Replace "econometircs" with "econometrics."

## Set aside (10)

10 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-abbed5c2.md.

