> Here is my resume: bench/planted-defects/tests-final/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the full-resume narrative and format. The two education entries have no bullets to review. No job-description match was run because no posting was provided.

The main changes flagged:
- For a quant-focused version, move Experience above Education and shorten or remove the bakery role.
- Verify the quantitative claims: the review flagged the Sharpe-ratio annualization method, the forecasting “33% improvement” calculation, the 52%→58% hit-rate description, and the wording around the Diebold–Mariano tests.
- Correct the “econometircs” typo and remove the first-person “my” in the research bullet.

The file parses cleanly and has no layout warnings. The full review is available in `/report --full`.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 85 · wording 85 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 14 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Ridgeway University | Ph.D. candidate in Statistics

**Problem**
[Important] Education appears before the quantitative internship and research experience. *(no words)*

**Why**
A recruiter scanning for quantitative experience encounters the education entries before the work most directly relevant to that direction. Moving Experience earlier would make the internship and research work visible sooner.

**How to change it**
Move the Experience section above Education without changing the entry text.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The Sunrise Bakery entry is the clearest departure from the résumé’s quantitative focus. *(saves about 20 words)*

**Why**
The store-management role draws attention away from the quantitative internship and research work. Keeping its current two-bullet detail gives that less relevant experience more space than a quant-focused version needs.

**How to change it**
For a quant-focused version, shorten the entry to a single line or remove it.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line attributes the reduction in unsold bread to the stock counts and supplier orders without establishing that they caused it. *(no words)*

**Why**
Those practices could reduce waste if overordering was a substantial cause, but the line does not establish that. Changes in demand, production, or other operations could also explain the reduction, so a reader may question the attribution.

**How to change it**
If the counts and orders were shown to drive the reduction, retain the attribution; otherwise report the 12%-to-7% change without attributing it to those actions. Lead with the reduction so it is not buried after the methods.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The line attributes the Sharpe-ratio increase to the signal without showing that the backtest establishes that causal comparison. *(about 2 words)*

**Why**
A before-and-after Sharpe comparison alone does not show that the signal caused the increase. Without a suitable signal-on versus signal-off comparison using consistent portfolio construction and costs, and an assessment of uncertainty and robustness, a reader may discount the attribution.

**How to change it**
If the backtest included the suitable comparison, describe it; otherwise replace the attribution with the stated comparison: the desk book’s Sharpe ratio was 1.5 with the signal versus 1.1 in the comparison.

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] The Diebold–Mariano tests do not establish the claimed forecast gain over a nested baseline. *(about 5 words to add)*
2. [Important] The line does not give the size of the forecast gain being tested. *(about 5 words to add)*

**Why**
1. Standard Diebold–Mariano tests are generally not valid for comparisons against a nested forecast model without adjustment. Testing across 30 indices also raises dependence and multiple-comparison concerns, so a reader cannot treat these tests as confirmation of a general gain.
2. A reader can see that a comparison was tested, but cannot tell whether the measured improvement was material. The test and the index count do not substitute for the size of the gain or the metric used to measure it.

**How to change it**
1. If run, name an appropriate nested-model procedure, such as a Clark–West test or suitable bootstrap, and say how dependence and multiple comparisons were addressed; otherwise soften or remove the confirmation claim.
2. Replace “forecast gain” with [measured forecast-error improvement versus the nested HAR-RV baseline], using the result and metric actually reported.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] The opening verb uses the wrong tense for a completed internship and makes the construction ungrammatical. *(no words)*

**Why**
“Joining” sets up an opening phrase that does not connect grammatically to “built.” A reader has to work through the long introductory construction before reaching the feature-store result.

**How to change it**
Recast the opening so the completed actions use past-tense verbs, including changing “Joining” to “Joined,” and make “built” part of the same grammatical construction.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the usual annualization calculation. *(no words)*
2. [Important] The line gives no reported annualized Sharpe value, so the calculation is not evidence of an outcome. *(about 4 words to add)*
3. [Polish] The phrase “before reporting it to the desk” describes a routine step rather than a meaningful result. *(saves about 6 words)*

**Why**
1. Under the usual independent-return convention, the annualization factor is the square root of 252, not 252. Serial dependence can call for a different adjustment, but does not make multiplication by 252 the standard calculation.
2. A reader cannot tell what performance measure the desk saw from the calculation alone. Without the resulting value, the line also does not show what the reporting step contributed.
3. The reader learns that a calculation was reported, but not what the desk learned or did with it. That leaves the line focused on process instead of the outcome of the analysis.

**How to change it**
1. Replace the multiplication by the square root of 252 under the usual convention, or name the dependence-aware annualization method actually used.
2. Replace the calculation description with [reported annualized Sharpe value] and, if it changed a decision, [what desk decision or use it informed].
3. Cut “before reporting it to the desk” and use the space for a substantive result only if one is available.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Important] Seeds and configuration files alone do not establish that every run is reproducible. *(about 3 words to add)*

**Why**
On a shared cluster, reproducibility can also depend on the software environment, random-number generators and their stream assignments, and nondeterministic parallel or numerical operations. The claim could hold if these factors were controlled or captured, but the line does not say that.

**How to change it**
If the full environment and random-stream setup were controlled and recorded, specify that; otherwise soften the claim to say that each run’s seed and configuration were recorded.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The personal possessive “my” adds no information and does not fit the résumé’s phrase-style lines. *(no words)*

**Why**
The possessive shifts the line into a first-person construction without clarifying who proved the result. Removing it keeps the accomplishment in the résumé’s established style.

**How to change it**
Replace “my proof” with “the proof” or omit “my proof.”

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The entry reads as a mixed task list, burying the research work among teaching and operational duties. *(saves about 12 words)*
2. [Important] The download figure does not clearly identify the package as what was downloaded. *(saves about 12 words)*

**Why**
1. The package is a clear research accomplishment, but cluster maintenance, reading-group organization, and grading compete with it for attention. A reader scanning the entry may miss the work most relevant to the research profile.
2. After a list of other activities, a reader has to infer that the 3,000 downloads belong to the package. That makes the evidence for the package’s reach less immediate.

**How to change it**
1. Separate the package accomplishment from the unrelated responsibilities, or remove the lower-priority duties from this entry.
2. Move the download result next to “open-source R package” and replace “which” with “the package”; cut the unrelated cluster, reading-group, and grading duties from this line or place them elsewhere.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The stated percentage is wrong: the reduction from 0.20 to 0.15 is 25%, not 33%. *(no words)*
2. [Important] The line does not identify which forecast-error metric the values measure. *(about 2 words to add)*

**Why**
1. The error falls by 0.05 from an original 0.20, and 0.05 divided by 0.20 is 0.25. A reader checking the arithmetic may doubt the accuracy of the result.
2. Without the metric, a reader cannot tell what forecasting property improved or compare the result with other forecasting results. The values alone do not make the performance change interpretable.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [the error metric used] and, if needed to identify the comparison, add [the evaluation set or period].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change from 52% to 58% is a 6-percentage-point increase, not a 6% increase. *(about 2 words to add)*
2. [Important] The line repeats the temporal convolutional model named in the preceding bullet. *(saves about 6 words)*

**Why**
1. The relative increase from a starting hit rate of 52% is about 11.5%; the stated 6% matches the absolute difference in percentage points. Calling it 6% gives a reader the wrong interpretation of the result.
2. The repeated method adds no new information after the preceding bullet has already identified the model. It takes space that could help the reader focus on the hit-rate result.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points,” matching the 52%-to-58% change.
2. Cut “with a temporal convolutional model” from this bullet.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] “Cut validation leakage” is unclear because the 0.02 figure describes a score gap, not an amount of leakage. *(no words)*
2. [Important] The 0.02 score gap is uninterpretable without the scoring metric and whether the gap is absolute or relative. *(about 3 words to add)*

**Why**
1. A reader cannot tell from the line how leakage was measured or how much it fell. The stated gap between validation and leaderboard scores does not, by itself, quantify leakage reduction.
2. A reader cannot tell what the 0.02 represents or judge its size without knowing the metric and scale. Naming both would make the reported change comparable and meaningful.

**How to change it**
1. Replace “Cut validation leakage” with the concrete action—switching to time-grouped folds—and describe the 0.02 score-gap result without calling it a reduction in leakage.
2. Clarify the phrase with [the scoring metric] and [whether the 0.02 gap is absolute or relative].

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.” *(no words)*

**Why**
A spelling error in a skills label can distract a reader and make the line look insufficiently checked. The intended term is clear from the misspelling.

**How to change it**
Replace “econometircs” with “econometrics.”

## Already working

- s2:e1:b1: Shows the trade-off between reducing turnover and preserving gross returns.
- s3:e0:b0: Pairs a named evaluation metric with a direct baseline comparison.

## Set aside (8)

8 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-de3f03a1.md.

