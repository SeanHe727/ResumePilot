> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all 5 experience/project entries for content and wording, plus the full resume narrative and file format. Education was not content-reviewed because it has no bullets. No job-description match was run because no posting was provided.

The full report is available with `/report --full`. The main changes to make are:

### Correct factual or mathematical issues

- **Volatility project:** The change from forecast error **0.20 to 0.15** is a **25% reduction**, not a 33% improvement.
- **Directional hit rate:** The change from **52% to 58%** is **6 percentage points**, not a relative 6% increase.
- **Sharpe calculation:** The Northpeak bullet says daily Sharpe was annualized by multiplying by **252**. The wording specialist flagged this as mathematically incorrect; daily Sharpe annualization uses the square root of 252. Correct or remove this bullet.
- Clarify whether the **7% QLIKE result** is a relative reduction or a percentage-point difference.
- The claim about confirming a forecast gain with **Diebold–Mariano tests** needs technical correction or clearer explanation.

### Improve the quantitative-research entries

- In the Northpeak entry, bring the measurable outcomes closer to the beginning of the bullets.
- Explain what the feature store enabled beyond listing its construction and later reuse.
- Remove or substantially revise the annualized-Sharpe bullet unless you can state the correct calculation and its purpose.
- Make the documentation bullet show what the documentation changed or enabled rather than only saying it was written.
- In the research-assistant entry, separate the proof contribution from the other responsibilities. Clarify what bound was improved and by how much.
- Separate the R-package work from cluster maintenance, reading-group organization, and grading. The current final bullet contains several unrelated responsibilities, which obscures the package’s adoption result.

### Reduce repetition in the projects section

- The volatility project has three bullets describing closely related model improvements. Make each bullet serve a different purpose—such as objective, method, and distinct result—rather than repeating the same model-and-performance story.
- The Kaggle project repeats the competition result through both placement and percentile. Retain the clearest evidence and use the space to explain the validation-leakage correction.
- The feature-selection bullet should make the reduction from **900 to 300 features** more prominent.

### Improve structure and positioning

- Split the combined Education line into separate Ph.D. and B.S. entries, with the Ph.D. first.
- Because the bakery role is unrelated to the quantitative trajectory, shorten it or place it in a brief additional-experience section. Keep enough information to explain the current timeline.
- Consider adding a concise summary connecting statistics, statistical learning, time-series forecasting, and quantitative research.
- In Skills, correct **“econometircs”** to **“econometrics.”**
- The narrative review also flagged **Kafka** as unsupported elsewhere in the resume; either remove it or show where you used it.

### What is already working technically

- The file is one page, extracts cleanly, and has no layout or ATS blockers.
- Most bullets contain measurable figures.
- The strongest evidence is concentrated in the quantitative internship, statistical-learning research, and forecasting projects. The main need is to clarify technical claims and reduce overloaded or repetitive bullets rather than add more content indiscriminately.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 83 · wording 85 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The nested-forecast comparison uses a methodologically incorrect standard Diebold–Mariano test and does not report the strength of the evidence.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   The standard Diebold–Mariano test is not generally valid for comparing nested forecasts because its null distribution is distorted. Testing 30 indices also requires handling dependence and multiple comparisons, while the current wording gives no result showing how large or reliable the gain was.
   **How to change it:** Replace “standard Diebold-Mariano tests” with [a valid nested-forecast comparison such as a Clark-West test or appropriate bootstrap, with suitable multiple-comparison treatment], and replace “confirmed the forecast gain” with [the measured forecast-error reduction or other gain] plus [the most telling statistical result across the 30 indices].
2. **The Sharpe-ratio annualization is mathematically wrong: a daily Sharpe ratio should be multiplied by √252, not 252.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   Multiplying by 252 substantially overstates the annualized Sharpe ratio and is an error a quantitative research reader will catch immediately. Because the line presents the calculation as research work, the mistake undermines confidence in the rest of the reported metrics.
   **How to change it:** Replace “multiplying it by 252” with “multiplying it by √252,” subject to the usual return-dependence assumptions, and remove the reporting detail unless it led to a measurable desk decision.
3. **The bullet reports a 33% improvement even though the stated reduction from 0.20 to 0.15 is 25%.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The reduction is 0.05, and 0.05 divided by the original 0.20 equals 25%. A reader will notice that 33% uses the reduced value as the denominator, creating an arithmetic inconsistency that weakens trust in the reported results.
   **How to change it:** Replace “a 33% improvement” with “a 25% reduction,” or remove the percentage and retain only the change from 0.20 to 0.15.

## Already working

- s2:e1:b0: Combines a meaningful performance metric with out-of-sample and after-cost validation.
- s2:e0:b1: Shows a strong, directly relevant waste-reduction outcome.
- s3:e1:b0: Leads with a strong, highly legible outcome.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- **The stock-control bullet lists recurring tasks without explaining the operational change that produced the waste reduction.** *(no words)*
  > Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
  “Ran daily stock counts and supplier orders” shows responsibility, but not the judgment or process change connecting that work to unsold bread falling from 12% to 7%. The measurable result is strong, yet the reader cannot tell what action was responsible for it.
  **How to change it:** Lead with the result and replace the general task description with [the specific ordering, forecasting, production-planning, or stock-control change used], such as: “Cut unsold bread from 12% to 7% of production by [specific change].”

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The feature-store bullet shows reuse but not the benefit that reuse produced.** *(adds about 6 words)*
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  “Two later projects” proves that the artifact was adopted, but a hiring manager still cannot tell whether it saved research time, prevented data defects, or enabled faster experimentation. The implementation details therefore receive more emphasis than the result.
  **How to change it:** Keep the reuse evidence and add [the single strongest benefit of that reuse, such as research time saved, data defects prevented, or experiments enabled].
- **The Sharpe-ratio bullet ends with reporting activity rather than a research or trading outcome.** *(saves about 5 words)*
  > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
  “Before reporting it to the desk” describes communication, not what changed because the metric was calculated. Without a decision, model choice, or measured reporting consequence, the line shows a calculation but not contribution.
  **How to change it:** Remove “before reporting it to the desk” and replace it with [the desk decision or measurable reporting consequence enabled by the correctly annualized metric, compared with the prior method].
- **The documentation bullet names future interns but gives no evidence that the documentation was used or helped anyone.** *(adds about 6 words)*
  > Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.
  Listing the assumptions, cost model, and failure regimes proves scope, but not effectiveness. A reader needs one adoption or outcome measure to know whether the wiki improved onboarding, reproducibility, reuse, or error prevention.
  **How to change it:** Replace or supplement “for future interns” with [the strongest available result, such as onboarding time reduced, later users or projects, time saved, or a research error avoided].

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The R-package result is separated from the package contribution by several unrelated duties, making its 3,000 downloads ambiguous.** *(no words)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  A reader has to determine whether the downloads measure the package or the broader set of lab responsibilities. The long sequence also delays the strongest evidence, so the software accomplishment can read like one item in an unordered task list rather than a distinct research contribution.
  **How to change it:** Place “downloaded 3,000 times in its first year” immediately after the R-package contribution, make the result explicitly refer to the package, and move the cluster, reading-group, and grading duties into a separate bullet or clause.
- **The proof's log-factor improvement is not quantified against the prior and resulting bounds.** *(adds about 6 words)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  A specialist may understand the direction of the improvement, but a recruiter or non-specialist hiring manager cannot judge its size or significance from “by a log factor.” The paper status establishes credibility but does not measure the research result.
  **How to change it:** Replace the general comparison with [the prior bound and resulting bound, or the exact log-factor improvement relative to the prior result], and change “my proof” to “the proof.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The directional hit-rate change should be described as 6 percentage points, not 6%.** *(adds about 2 words)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The stated change from 52% to 58% is an increase of six percentage points. Calling it a 6% improvement suggests a relative increase, which would be approximately 11.5% against the original 52% hit rate.
  **How to change it:** Replace “improved the model’s directional hit rate by 6%” with “improved the model’s directional hit rate by 6 percentage points,” and remove the repeated “with a temporal convolutional model” if the preceding bullet already establishes that method.

## Across the whole résumé

- **Add a concise summary connecting statistical learning, time-series forecasting, and quantitative research.** *(adds about 18 words)*
  > Ph.D. candidate in Statistics
  The relevant work is present across the degree, research assistantship, internship, and independent study, but the reader must infer the intended direction. A short summary would make the quantitative-research fit visible before the reader parses every entry.
  **How to change it:** Add a concise summary stating the candidate’s focus in statistical learning, time-series forecasting, and quantitative research, using only [the strongest methods, domains, or results supported elsewhere in the résumé].
- **Split the compressed Education line into two separately formatted degrees, with the Ph.D. first and the B.S. second.** *(no words)*
  > Ph.D. candidate in Statistics
  The current line makes two academic milestones compete for attention and forces the reader to parse both degrees in a continuous sequence. Separate entries would make the academic progression and expected Ph.D. completion easier to scan.
  **How to change it:** Separate the Ph.D. and B.S. into two degree lines or entries, keeping the Ph.D. first and its dates and institution together, followed by the B.S. with its own dates and institution.
- **Correct the misspelled Methods skill “econometircs” to “econometrics.”** *(no words)*
  > econometircs
  The misspelling is immediately visible in a skills section and can make a reader question attention to detail. It is especially avoidable because the correction changes no substantive content.
  **How to change it:** Replace “econometircs” with “econometrics.”

## Set aside (17)

Worth knowing, and not worth the space on this page:

- format, s2:e2:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e0:b0, s2:e0:b1: The phrase "keeping the store within its weekly labour budget" does not show the amount or margin by which the budget was met. (and 1 more like it)
- s2:e2:b2: "Taught weekly recitations" describes the activity, while "earning a 4.8/5 teaching rating" gives feedback without stating what changed for the students.
- s2:e2:b3: "Released an open-source R package for high-dimensional covariance estimation" says what the package concerns, but not how you implemented the technical work.
- s2:e1:b4: "multiplying it by 252" does not specify what kind of Sharpe ratio was calculated or what convention the desk required.
- s3:e0:b0: "Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%" does not say whether 7% is a relative reduction or a percentage-point difference.
- s3:e0:b1, s3:e0:b2: "Cut forecast error from 0.20 to 0.15" does not identify what "forecast error" measures. (and 1 more like it)
- s3:e1:b1: "Cut validation leakage" names a technical problem, but does not clearly state what became more trustworthy or what decision the change enabled. (and 1 more like it)
- s2:e1:b2: "Confirmed the forecast gain over the nested HAR-RV baseline" uses dense research jargon that makes the result harder to parse quickly.
- s2:e1:b3: "Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store" buries the main result behind three methods and makes the opening participial phrase awkward. (and 1 more like it)
- …and 7 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-62355f66.md.

