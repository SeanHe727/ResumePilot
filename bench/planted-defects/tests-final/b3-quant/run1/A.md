> Here is my resume: bench/planted-defects/tests-final/b3-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the full resume’s narrative and format. Education entries have no bullets to review; no job description was provided.

The main changes to address:
- **Correct the metrics:** the volatility-study error drop from 0.20 to 0.15 is 25%, not 33%; clarify the hit-rate change from 52% to 58%. The content reviewer also flagged the daily Sharpe annualization (“multiplying it by 252”) as incorrect.
- **Clarify statistical claims:** the Northpeak bullet saying Diebold–Mariano tests “confirmed” a gain may overstate what the tests establish; report the test result and gain size more specifically if available.
- **Tighten a few bullets:** clarify what the lab reproducibility checks enabled, separate the package result from unrelated duties, and remove repeated competition/model details.
- **Fix the typo** “econometircs” to “econometrics.” The narrative review also noted an unexplained May 2020–February 2021 gap, if there is relevant activity to include.

The file parses cleanly as a one-page resume with no layout or ATS blockers. The complete report is available at `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 81 · wording 80 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 9 important, 1 polish. Errors are marked [Error]; fix those first.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Important] The claim that the tests “Confirmed” the gain is stronger than the stated evidence supports. *(no words if softened)*
2. [Important] The line gives neither the size of the gain nor the Diebold–Mariano test result. *(adds about 4 words)*

**Why**
1. Separate tests across 30 indices can produce nominally significant results without establishing an overall gain, particularly if results were selected after testing. The line does not say whether the gain was significant on each index or whether multiple comparisons were accounted for.
2. A reader can see that the forecast was tested against a baseline but cannot tell how large or statistically supported the improvement was. The number of indices shows breadth, not the result.

**How to change it**
1. If a multiple-comparison adjustment was used, name it; otherwise report the per-index test results or replace “Confirmed” with “evaluated.”
2. Add one anchor, such as [forecast-error improvement relative to HAR-RV] or [Diebold-Mariano test result].

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] “Joining” is an ungrammatical opening for this past-tense sentence. *(no words)*
2. [Important] The long list of implementation details delays the feature-store result. *(no words)*

**Why**
1. The opening reads as an unfinished action phrase before the sentence reaches “built.” A reader may have to pause to work out how the listed actions connect to the feature-store result.
2. The line gives several implementation details before reaching the feature store reused in later projects. That makes the main result less immediate to a reader scanning the entry.

**How to change it**
1. Replace “Joining” with “Joined” and make the remaining listed actions parallel past-tense verbs.
2. Move “built a feature store” and its reuse in two later projects to the start of the bullet, before the implementation details.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
[Error] Multiplying a daily Sharpe ratio by 252 is not the correct annualization. *(adds about 4 words if accurate)*

**Why**
Under the usual independent-return assumption, annualizing a daily Sharpe ratio means multiplying by the square root of 252. Multiplying by 252 scales the mean return, so a reader may question the reported Sharpe ratio.

**How to change it**
If that is what you did, replace “252” with “the square root of 252”; otherwise report the daily Sharpe ratio.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks other students relied on.

**Problem**
1. [Important] The line names the shared-cluster pipeline without showing what you built or how you made it reproducible. *(adds about 3–8 words if accurate)*
2. [Important] The line says other students relied on the checks without saying what the checks enabled or prevented. *(adds about 3–8 words)*

**Why**
1. It claims ownership of technical work but gives no implementation or validation detail. A reader cannot judge the technical contribution from the system name alone.
2. Reliance alone does not show what changed for lab users or why the checks mattered. A concrete outcome would help a reader judge the contribution.

**How to change it**
1. If you implemented one, add [one concrete pipeline or reproducibility technique you implemented]; otherwise soften the ownership claim to the work you can substantiate.
2. Replace “other students relied on” with [what the checks enabled or prevented], and, if available, add one measure of their use or effect.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The placement of “which was downloaded” leaves the package’s adoption measure with an unclear referent. *(no words)*

**Why**
The download count is useful evidence of package adoption, but the sentence puts it after unrelated duties. A reader may connect “which” to those duties rather than to the package.

**How to change it**
Move “which was downloaded 3,000 times in its first year” directly after “open-source R package.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is 25%, not 33%. *(no words)*
2. [Important] The line does not identify the measure represented by “forecast error.” *(adds about 1–3 words)*

**Why**
1. The decrease is 0.05, which is 25% of the starting error of 0.20. The stated 33% improvement contradicts the figures and may make a reader doubt the calculation.
2. A reader cannot interpret or compare the values without knowing what was measured. Naming the metric is the key detail needed to make the result useful.

**How to change it**
1. Replace “33% improvement” with “25% reduction” if the figures are correct.
2. Replace “forecast error” with [metric used], if accurate.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change from 52% to 58% is 6 percentage points, not a 6% increase. *(adds about 2 words)*
2. [Polish] The second bullet repeats the index count and model already given in the first bullet. *(saves about 9 words)*

**Why**
1. Those values show a 6-percentage-point increase; the relative increase from 52% is about 11.5%. Readers may otherwise interpret “6%” as a relative change and misread the result.
2. A reader has already seen that the study covers 30 equity indices and uses a temporal convolutional model. Repeating those details takes space that could distinguish this result from the first bullet.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points” to match the reported values.
2. Cut “on 30 equity indices” and “with a temporal convolutional model” from the second bullet.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The line describes the team’s approach without identifying your specific contribution. *(adds about 3–6 words)*

**Why**
The entry identifies this as a team project, so a reader cannot tell whether you built the model, engineered features, or contributed another part of the work. That makes your individual role difficult to assess.

**How to change it**
Replace or qualify this approach phrase with [your specific contribution to the model or features].

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The line does not identify the score metric or what kind of difference 0.02 represents. *(adds about 2–5 words)*

**Why**
Without that context, a reader cannot interpret the size of the gap or compare the two scores meaningfully. The number alone does not show whether it is an absolute score difference or another comparison.

**How to change it**
After “0.02,” add [score metric and difference type].

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled. *(no words)*

**Why**
The spelling error is visible in the Methods skills line. It can distract readers from the skills being presented.

**How to change it**
Replace “econometircs” with “econometrics.”

## Already working

- s2:e0:b1: Makes the trade-off from reducing turnover legible with multiple relevant measures.
- s3:e0:b0: Pairs a quantified result with a named baseline and out-of-sample evaluation.
- s3:e1:b2: The feature-count comparison makes the scale of the reduction concrete.

## Set aside (12)

12 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-30c1f353.md.

