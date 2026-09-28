> Here is my resume: bench/planted-defects/tests-final/b4-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the full resume for narrative and format. Education has no bullets to review. No job description was provided, so there’s no job-match review. The report gives an overall score of 87; the full breakdown is available in `/report --full`.

Changes to prioritize:
- Put Northpeak Capital above Ridgeway University in Experience.
- Remove the listed date of birth and nationality; correct “econometircs” to “econometrics.”
- Resolve key measurement issues: the 0.20-to-0.15 error reduction is 25%, not 33%; 52% to 58% is a 6-percentage-point increase. The reviewers also flagged the Sharpe-ratio claims for clarification.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 81 · wording 84 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 15 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998

**Problem**
[Error] The résumé includes personal details readers are not meant to weigh. *(saves about 8 words)*

**Why**
Date of birth and nationality are personal details that are not relevant to assessing the listed qualifications and experience. Including them can distract from the evidence the résumé should foreground.

**How to change it**
Remove “Date of birth: 21 Jul 1998” and “Nationality: Indian.”

> Research Assistant, Statistical Learning Lab

**Problem**
[Important] Experience is not listed newest-first: the 2025 internship appears below the 2020–2021 research role. *(no words)*

**Why**
A reader expects the more recent experience first and may otherwise have to scan past an older role to find the internship. The current order makes the chronology harder to follow.

**How to change it**
Move the Northpeak Capital | Quantitative Research Intern entry above the Ridgeway University | Research Assistant entry.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks other students relied on.

**Problem**
1. [Important] The wording does not say what you did to create or maintain the reproducibility checks or what they enabled. *(about 8–15 words added)*
2. [Important] The pipeline claim names the setting but not the specific work you did, and “Owned” frames it as responsibility rather than action. *(about 2–6 words added)*

**Why**
1. Saying that other students relied on the checks suggests they were useful, but does not tell a reader whether they helped reproduce results, catch errors, or support a particular research workflow. That leaves the value of the work hard to judge.
2. A reader can identify the broad area of work but cannot see the technical skill behind owning the pipeline. Naming one concrete task would make your contribution more legible.

**How to change it**
1. Replace the general reliance claim with [what the checks enabled or improved] and, if available, [one measure of their use or effect]; name what you did to create or maintain them.
2. Replace “Owned the lab’s simulation pipeline” with [one specific pipeline task or check you implemented].

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
[Polish] The phrase “it is now Section 3” puts the paper context after the result and uses an indirect reference. *(no words)*

**Why**
A reader reaches the result before learning that it appears in a paper under review at JASA. The indirect “it” also makes the connection less immediate, slowing down a quick scan.

**How to change it**
Move “Section 3 of a paper under review at JASA” before the bound result and cut “it is now.”

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The package result is buried after unrelated duties, and “which” has an unclear referent. *(no words if moved; about 5 words added to clarify the referent)*

**Why**
The package’s uptake is the line’s clearest evidence of impact, but it comes after a list of other work. A reader may also have to pause to work out what was downloaded.

**How to change it**
Move the open-source R package and its download result together to the start of the line, explicitly naming the package as the item downloaded; cut or separate the other duties.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The claim that the signal raised the desk book’s Sharpe ratio overstates what the stated backtest establishes. *(about 5 words added)*

**Why**
An 18-month out-of-sample backtest can estimate a historical change, but by itself does not establish that the signal raised the desk’s book Sharpe. That conclusion depends on a like-for-like comparison and on the result being robust rather than sample-specific.

**How to change it**
Describe this as a backtested change in the book’s Sharpe, and specify the comparison if available: [how the with-signal and without-signal books were compared].

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Important] The line says “confirmed” a gain with a standard Diebold-Mariano test over a nested baseline, which does not justify that conclusion as written. *(about 4–8 words added)*
2. [Important] The line does not state how large the forecast gain was or what the tests found. *(about 5–10 words added)*

**Why**
1. Usual Diebold-Mariano inference can be invalid for nested forecast models under the null, so a standard test does not necessarily confirm the gain. Testing across 30 indices can also require addressing multiple comparisons.
2. The reader sees that a comparison was made but cannot judge the size or strength of the improvement from the test description alone. That leaves the outcome vague.

**How to change it**
1. If used, name the appropriate nested-model adjustment, such as a Clark-West test, and explain [how the 30 comparisons were handled]. If you did not use a suitable adjustment, soften or remove “confirmed.”
2. Replace “Confirmed the forecast gain” with [forecast-error improvement versus nested HAR-RV and the test result across indices].

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] “Joining ... built” is grammatically incorrect because the participial opening does not agree with the main clause. *(about 2 words added)*
2. [Important] The long sequence of methods comes before the feature-store result, so the key outcome arrives late. *(no words)*

**Why**
1. The opening phrase makes the joining appear to be the subject of “built,” rather than describing an action by you. That grammatical mismatch can interrupt a reader’s understanding of the accomplishment.
2. Readers encounter the joining, deduplication, and versioning details before learning what they produced. That delays the concrete result in a quick scan.

**How to change it**
1. Make the opening a finite clause with “I joined,” and supply “I” as the subject of “built.”
2. Move “built a feature store” before the sequence of methods, leaving those methods after the result.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the conventional annualization method and substantially overstates the annualized Sharpe. *(no words)*
2. [Important] The line ends with a routine reporting step instead of a meaningful outcome. *(saves about 6 words)*

**Why**
1. Under the usual assumption of independent daily returns with stable variance, annualization uses the square root of the number of trading days, not the number itself. Multiplying by 252 therefore produces a much larger figure than the conventional annualized Sharpe.
2. “Before reporting it to the desk” does not show what changed or how the annualized figure was used. It spends space on process without giving the reader a result.

**How to change it**
1. Replace “252” with “√252,” assuming the standard annualization assumptions apply.
2. Cut “before reporting it to the desk.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reported change from 0.20 to 0.15 is a 25% reduction, not a 33% improvement. *(about 1 word added)*
2. [Important] The line does not identify the error metric represented by 0.20 and 0.15. *(about 1–3 words added)*

**Why**
1. The reduction is 0.05, which is 25% of the original error of 0.20. A 33% reduction would require a different starting value or endpoint, so the percentage contradicts the reported figures.
2. A reader cannot interpret or compare the result without knowing what was measured. Naming the metric gives the figures a usable anchor.

**How to change it**
1. Change “33% improvement” to “25% reduction,” or provide the correct figures if they differ.
2. Replace “forecast error” with [the error metric used to calculate 0.20 and 0.15]; if relevant, add [the evaluation baseline or comparison].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The increase from 52% to 58% is 6 percentage points, not a 6% relative increase. *(about 2 words added)*
2. [Important] The line repeats the index count and model details from the first bullet without adding a distinct result. *(saves about 10 words)*

**Why**
1. The figures show a six-percentage-point gain, which is about an 11.5% relative increase from 52%. Calling it “6%” can therefore misstate the result and leave the unit ambiguous.
2. “On 30 equity indices” and “with a temporal convolutional model” repeat information already given in the first bullet. Keeping those details here costs space without distinguishing this result.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points,” if accurate; use “by about 11.5%” only if you mean the relative increase.
2. Cut “on 30 equity indices” and “with a temporal convolutional model” from this bullet.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The 41st-place finish already establishes a top-2% result, making the final phrase repetitive. *(saves about 5 words)*

**Why**
A reader can see the placement and total number of teams directly. Restating the percentile does not add a distinct result.

**How to change it**
Cut “finishing in the top 2%.”

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 score gap does not establish that switching folds cut validation leakage. *(no words)*

**Why**
A smaller gap is compatible with reduced leakage, but it can also result from leaderboard noise, sampling variation, or other changes. The gap alone does not show that leakage was reduced.

**How to change it**
If a separate check showed that leakage decreased, describe that check; otherwise, say that switching to time-grouped folds closed the 0.02 score gap.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] The 0.02 gap and unchanged validation score do not identify their scoring metrics. *(about 1 metric name per phrase)*

**Why**
Without the metric name, a reader cannot interpret what a 0.02 difference means or compare the result with other competition outcomes. The preserved “validation score” is likewise unclear without its metric.

**How to change it**
Replace “scores” and “validation score” with [the name of the scoring metric] and [the name of the validation metric], respectively.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The result is buried after the explanation of the fold change. *(no words)*

**Why**
The reader reaches the 0.02 gap only after the method and the claim about leakage. Leading with the observed result makes the point quicker to scan.

**How to change it**
Move the result about closing the 0.02 score gap before the explanation that you switched to time-grouped folds.

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled in the Methods skills line. *(no words)*

**Why**
The spelling error is visible in a skills label and can distract a reader from the technical knowledge the section is meant to show.

**How to change it**
Replace “econometircs” with “econometrics.”

## Already working

- s2:e1:b1: The line links a named intervention to multiple measurable outcomes.
- s3:e0:b0: Connects a measured result to a named baseline and out-of-sample evaluation.

## Set aside (3)

3 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ffd90e0a.md.

