> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Content and wording specialists reviewed 5 experience/project entries; narrative and format reviews are complete; education entries were not applicable; no job-description match was run because no posting was provided.

The main changes to make are:

- **Fix the quantitative inconsistencies in “Volatility Forecasting Study.”** A change from 0.20 to 0.15 is a **25% reduction**, not 33%. A change from 52% to 58% is a **6-percentage-point increase**, not 6%.
- **Clarify unsupported or incomplete outcomes.** The internship bullet mentioning Diebold–Mariano tests needs the actual test result, and the Sharpe-ratio annualization bullet currently describes a procedure without an outcome.
- **Reposition Sunrise Bakery.** The narrative specialist found that its current placement makes the career appear to move backward from quantitative research. Move it to a brief additional-experience section or remove it if unnecessary.
- **Tighten the research-assistant entry.** Remove the first-person phrasing in “my proof,” clarify what the reproducibility claim means, and separate the software-package accomplishment from unrelated lab duties.
- **Clean up wording and skills.** Address the dangling modifier in the feature-store bullet, use present tense for the current bakery role, correct “econometircs” to “econometrics,” and either support or remove skills such as SQL, C++, Kafka, and Bayesian inference that are not demonstrated elsewhere.

The file itself is machine-readable, one page, and consistently formatted. The full specialist report is available with `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 83 · wording 85 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The claim uses standard Diebold–Mariano tests incorrectly for a nested-model comparison and does not report the result that supposedly confirms the gain.**
   > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
   Standard Diebold–Mariano tests generally do not have the correct null distribution for nested forecasting models because parameter estimation affects the comparison. Testing 30 indices also requires multiple-comparison handling, so a reader cannot judge whether the reported gain is statistically supported or how large it was.
   **How to change it:** Replace the standard nested-model comparison with an appropriate procedure such as a Clark–West adjustment or valid bootstrap, include multiple-comparison handling across the 30 indices, and add [the validated test result or significance level].
2. **The annualized Sharpe calculation is wrong, and the line reports a calculation without showing what result or decision it enabled.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   A daily Sharpe ratio is annualized by multiplying by the square root of 252, not by 252, so the current wording materially overstates the reported performance. A reader also sees an activity—reporting a metric—but no validated result, comparison, or research conclusion that demonstrates its value.
   **How to change it:** Replace "252" with "√252" and replace "before reporting it to the desk" with [the validated annualized performance result and the comparison it supported].
3. **The stated 33% improvement is mathematically incorrect, and the line does not name the forecast-error metric.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   A reduction from 0.20 to 0.15 is 0.05 divided by 0.20, or a 25% reduction, not 33%. Without the metric name, a reader cannot tell whether the values are RMSE, MAE, MAPE, or another measure, so the result is difficult to interpret.
   **How to change it:** Replace "a 33% improvement" with "a 25% reduction" and replace "forecast error" with [the specific error metric].

## Already working

- s2:e1:b0: Pairs a concrete performance result with out-of-sample validation and transaction costs.
- s2:e1:b3: Shows technically specific ownership of difficult point-in-time market-data preparation.
- s3:e0:b0: Uses a direct baseline comparison rather than an unsupported performance claim.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The feature-store bullet begins with a dangling modifier and puts the reusable outcome after too many implementation details.** *(saves about 8 words)*
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  The opening participial phrase has no grammatical subject that performs the joining, deduplication, and versioning, so the sentence is grammatically unstable. A scanning reader also encounters data-preparation methods before seeing that the work produced a reusable capability adopted in two later projects.
  **How to change it:** Move "built a feature store the team reused in two later projects" to the start of the bullet, make the feature store the grammatical subject of the implementation work, and retain only the most telling implementation detail.
- **The documentation bullet states what was recorded but not what the documentation enabled.** *(about 4 words to add)*
  > Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.
  A reader can see the assumptions, cost model, and failure regimes, but cannot tell whether the wiki improved reuse, handoff, debugging, or later research. Ending with "for future interns" describes a narrow audience rather than a concrete benefit.
  **How to change it:** Replace "for future interns" with [the single most concrete reuse or benefit the wiki enabled].

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The phrase "making runs reproducible by seed" overstates what seeding alone establishes.** *(about 6 words to add)*
  > Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours and making runs reproducible by seed.
  A seed can make random-number generation repeatable, but parallel execution, software versions, inputs, configuration, and cluster settings can still change results. A reader may therefore doubt the reproducibility claim because the line does not identify the controls that made the full study repeatable.
  **How to change it:** Replace the phrase with wording that says the runs were reproducible with fixed seeds and add [recorded code, dependencies, inputs, configuration, and controlled parallel random-number handling].
- **The bullet uses a first-person pronoun, breaking the resume's phrase-based style.** *(no words)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  The rest of the resume presents accomplishments without first-person narration, so "my proof" makes this line look less polished and less consistent. It also draws attention to the writer instead of the mathematical contribution.
  **How to change it:** Replace "my proof" with "the proof" or remove the pronoun, keeping the publication detail attached to the contribution.
- **The teaching rating does not identify the basis on which the 4.8/5 score was collected.** *(about 3 words to add)*
  > Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.
  A reader cannot tell whether the rating came from student course evaluations, a subset of responses, or another source. Without that context, the number is harder to interpret as evidence of teaching effectiveness.
  **How to change it:** Add [the rating's response basis] immediately after the teaching rating.
- **The package's download result is separated from the package contribution by several unrelated duties.** *(saves about 10 words)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  The downloads show the package's reach, but the line leaves the effect of maintaining the cluster, organizing the reading group, and grading unstated. Combining those duties also makes the stronger software accomplishment harder to scan and connect to its outcome.
  **How to change it:** Place "which was downloaded 3,000 times in its first year" immediately after the package contribution, then remove the unrelated duties or add [the single most meaningful outcome of those duties] if they must remain.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- **The directional hit-rate change should be stated in percentage points, and the result is quantified redundantly.** *(saves about 3 words)*
  > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
  The change from 52% to 58% is six percentage points, while the relative increase is approximately 11.5%, so "6%" is ambiguous and can appear mathematically inconsistent. Giving both the change and the endpoints also repeats the same result.
  **How to change it:** Replace "by 6%" with "by 6 percentage points" and remove either the endpoint values or the percentage-point statement; retain only one form of the result.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The validation and leaderboard comparisons use unnamed metrics, so the reported gaps and preserved performance are not interpretable.** *(about 3 words to add)*
  > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  A reader cannot tell what the 0.02 gap measures or whether the preserved validation score is an error, ranking, or another evaluation metric. Naming each metric would make the before-and-after comparisons credible without requiring another result.
  **How to change it:** Replace "0.02 gap" with "a 0.02 [validation metric] gap" and replace "validation score" with [the validation metric] if accurate.

## Across the whole résumé

- **The Methods skills line misspells "econometrics."** *(no words)*
  > econometircs
  The error is immediately visible in a compact skills section, where recruiters often scan for keywords quickly. The misspelling can prevent matching against the correctly spelled term and weakens the document's presentation.
  **How to change it:** Replace "econometircs" with "econometrics."

## Set aside (11)

Worth knowing, and not worth the space on this page:

- s2:e0:b0: The phrase "keeping the store within its weekly labour budget" does not show the size of the budget result.
- s2:e2:b1: "my proof tightens the previous bound by a log factor" does not show the specific bounds being compared.
- s2:e2:b2: "earning a 4.8/5 teaching rating" does not identify the rating's response basis.
- s2:e0:b0, s2:e0:b1: "Managed" is past tense even though the role is current. (and 1 more like it)
- s2:e2:b1: "is now Section 3 of a paper under review at JASA" puts the publication detail after a dense technical clause and makes the bullet harder to scan.
- s3:e0:b0: "QLIKE" is unexplained specialist shorthand; write "QLIKE loss" only if the audience knows the metric, or spell out the metric on first use.
- s3:e0:b2: "with a temporal convolutional model" repeats the model description in bullet 0 without adding a distinct action or result.
- s3:e1:b0: "Placed 41st of 2,900 teams" and "finishing in the top 2%" repeat the ranking rather than adding distinct information.
- s3:e1:b1, s3:e1:b2: The result appears after the implementation detail, making the measurable improvement harder to scan. (and 2 more like it)
- whole resume, order: Move Sunrise Bakery to a brief Additional Experience line at the bottom, or cut it if it is not needed. Its current placement makes the career appear to move backward from Quantitative Research Intern to Assistant Store Manager.
- …and 1 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-e32d9b22.md.

