# Full review: resume.pdf

**86/100** — format 100 · content 79 · wording 83 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 11 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998 | Nationality: Indian

**Problem**
[Error] The résumé omits personal details that are not expected in a résumé. *(saves about 11 words)*

**Why**
Date of birth and nationality are not details a reader needs to weigh the candidate’s qualifications. Including them can introduce personal information unrelated to the role.

**How to change it**
Leave these personal details off the résumé.

*raised by file*

> Ridgeway University | Research Assistant, Statistical Learning Lab

**Problem**
[Important] Experience appears after Education, and the Experience entries are not in newest-first order. *(no words)*

**Why**
The older Ridgeway research-assistant role appears above the more recent Northpeak internship, and the relevant internship is delayed by the Education section. Readers may not reach the most recent quantitative research experience as quickly.

**How to change it**
Move Experience above Education and list Northpeak Capital before the Ridgeway research-assistant role.

*raised by file, narrative*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks other students relied on.

**Problem**
1. [Important] The simulation-pipeline bullet describes ownership but not the specific action or technical work you did. *(about 6 words to add)*
2. [Important] The reproducibility checks are not tied to a clear function or outcome. *(about 7 words to add)*
3. [Polish] The line gives no measure of the checks’ reach or effect. *(about 4 words to add)*

**Why**
1. A reader can see that the pipeline ran on a shared cluster, but not what you built, ran, or improved. Without a technical detail, the line gives little evidence of the skills behind the responsibility.
2. “Other students relied on” signals that the checks were useful but does not say what they helped students do or verify. A reader cannot judge their practical value from that phrase alone.
3. Even if the checks’ function is clear, the line does not indicate how many people used them or what observable result they supported. Without an anchor, readers have difficulty assessing the scale of the contribution.

**How to change it**
1. Replace “Owned” with the specific action you took and add [one technical change or check you implemented], if accurate.
2. Replace “other students relied on” with what the checks enabled students to reproduce or validate, such as [the work they helped other students reproduce or validate], if accurate.
3. Add [the number of users or a concrete result the checks enabled], if you can substantiate it.

*raised by content, wording*

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The entry does not lead with its strongest research result. *(no words)*
2. [Important] The log-factor improvement does not identify the setting in which the bound comparison holds. *(about 5 words to add)*
3. [Polish] “It is now Section 3 of” is wordier than needed to describe the paper connection. *(saves about 2 words)*

**Why**
1. The entry covers research, teaching, lab operations, and a package release, so the research result can be obscured by less consequential work. Leading with the variance-bound result and then the package release would make the most important contributions easier to find.
2. The improvement is the central evidence for the result, but readers cannot tell what quantity or conditions the comparison concerns. That makes it harder to interpret the technical significance of the bound.
3. The phrase delays the information that the result appears in the paper. A more direct formulation makes the connection easier to scan without changing the claim.

**How to change it**
1. Move this bullet to the top of the entry and place the package-release bullet next; moving bullets adds no words.
2. Keep the log-factor comparison and add [the parameter or conditions under which the bound improves].
3. Replace “it is now Section 3 of” with “included in Section 3 of.”

*raised by narrative, content, wording*

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Polish] The teaching rating has no source or collection method. *(about 2 words to add)*

**Why**
Readers cannot tell whether 4.8/5 represents student evaluations, a supervisor’s rating, or another measure. Briefly naming the source would let them interpret the score.

**How to change it**
Replace “teaching rating” with [the rating source, such as student evaluations], if accurate.

*raised by content*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package’s technical contribution is not distinguished from other covariance-estimation tools. *(about 5 words to add)*
2. [Important] The long list of duties buries the package release and download result. *(no words)*
3. [Polish] The package’s downloads show reach, not what it enabled users to do. *(about 5 words to add)*
4. [Polish] The sentence leaves the referent of “which” unclear. *(about 1 word to add)*

**Why**
1. The domain is clear, but a specialist cannot tell what approach or capability the package contributes. A specific technical detail would make the release more informative.
2. The package and its reach are the most scannable outcome, but they appear after several unrelated responsibilities. Readers may miss the release’s impact before reaching the end of the sentence.
3. A download count establishes distribution but does not show the package’s practical value to its users. A concrete user outcome would make the contribution more meaningful.
4. Several items precede the clause, so a reader could momentarily mistake what was downloaded. Naming the package directly removes that ambiguity.

**How to change it**
1. Add [the package’s distinguishing estimation method or capability], if accurate.
2. Lead with the package release and its download result, and move the cluster, reading-group, and grading duties to separate bullets.
3. Add [one outcome the package enabled for its users], if known; otherwise retain the download figure as evidence of reach.
4. Replace “which was downloaded 3,000 times” with wording that explicitly says the package was downloaded 3,000 times.

*raised by content, wording*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold–Mariano tests do not provide a valid standard significance test for gains over a nested forecast baseline. *(about 5 words to add)*
2. [Important] The line does not report the size of the forecast gain or the test result. *(about 6 words to add)*
3. [Polish] The specialist terms may obscure the finding for readers outside quantitative research. *(about 4 words to add)*

**Why**
1. The usual Diebold–Mariano test does not account for the estimation effect in nested forecast models, so its standard null distribution can give misleading significance. Testing across 30 indices also raises a multiple-comparisons issue that an unadjusted set of tests does not resolve.
2. Readers can see that a comparison was made across 30 indices, but cannot judge the size of the improvement or what the tests showed. The index count gives scope, not the strength of the evidence.
3. A reader unfamiliar with HAR-RV or Diebold–Mariano tests may not understand the comparison or what the tests establish. That can make the result less accessible even when the underlying work is relevant.

**How to change it**
1. If you tested nested forecasts, name an appropriate test such as Clark–West and state how you handled multiple comparisons; otherwise remove “confirmed” and describe only the observed forecast comparison.
2. Replace “forecast gain” with [the forecast improvement versus the baseline] and add [the relevant test result, such as a p-value], if available.
3. Briefly explain the baseline and test in plain language for broader readers, and remove “standard,” which adds no information.

*raised by content, wording*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Important] The feature-store sentence makes its subject unclear and delays the reusable result. *(no words)*

**Why**
The opening phrase makes “built” appear to modify the act of joining features rather than the candidate. The processing-method list also comes before the feature store’s reuse, which is the clearest outcome.

**How to change it**
Lead with “Built a feature store” and its reuse in two later projects, then place the feature-processing details after that result.

*raised by wording*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 does not correctly annualize it. *(no words)*
2. [Important] The bullet describes a reporting calculation but not its result or value. *(about 8 words to add)*

**Why**
1. Under the usual assumption of independent daily returns, annualized Sharpe scales by the square root of the number of trading days, not by the number of days. Multiplying by 252 overstates the annualized ratio.
2. A reader cannot tell what annualized Sharpe result the desk received or whether it affected a decision. The trailing reporting detail takes space without showing the contribution’s outcome.

**How to change it**
1. Use the daily Sharpe ratio multiplied by √252, if the usual scaling assumptions are appropriate.
2. Replace the process-only claim with [the reported annualized Sharpe result] compared with [a relevant benchmark or prior figure], and add [how the result affected the desk], if accurate; cut “before reporting it to the desk.”

*raised by content, wording*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] The final clause is wordy and delays the value of the documentation. *(saves about 5 words)*

**Why**
The reader must reach the end of the sentence to learn that the documentation helped the next intern cohort onboard. A shorter statement would bring that use into focus sooner.

**How to change it**
Shorten the final clause while retaining that the next intern cohort used the wiki to onboard in its first week.

*raised by wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is a 25% reduction, not a 33% improvement. *(no words)*
2. [Important] “Forecast error” does not name the metric or evaluation basis for the values. *(about 2 words to add)*

**Why**
1. The difference is 0.05, which is 25% of the original error of 0.20. The 33% figure divides by the new error instead, so it overstates the reduction relative to the starting value.
2. Readers cannot interpret or compare 0.20 and 0.15 without knowing which error metric they represent. Naming the metric is the most useful detail; the evaluation set can be added if space allows.

**How to change it**
1. Replace “33% improvement” with “25% reduction.”
2. Replace “forecast error” with [the specific error metric] and, if needed, identify [the evaluation set].

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change from 52% to 58% is 6 percentage points, not a 6% relative increase. *(about 2 words to add)*
2. [Polish] The final clause repeats the model type already stated in the first bullet. *(saves about 5 words)*

**Why**
1. A relative increase from 52% to 58% is about 11.5%. “By 6%” therefore confuses the percentage-point difference with a relative percent change.
2. The first bullet already names the temporal convolutional model. Repeating it here uses space without adding distinct information about the hit-rate result.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points” if that is the intended description; alternatively, say “increased by about 11.5% relative to baseline.”
2. Remove the repeated model phrase from this bullet.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Polish] The 0.02 gap does not identify the score metric or scale. *(about 4 words to add)*

**Why**
Without that context, readers cannot interpret the size of 0.02 or compare it with the competition result. Naming the metric and scale would make the measurement meaningful.

**How to change it**
Keep the 0.02 figure and add [the score metric and scale], clarifying whether it is an absolute score difference, if accurate.

*raised by content*

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled in the Methods skills line. *(no words)*

**Why**
The typo is visible in a skills section, where a reader may use the listed methods to assess the candidate’s qualifications. Correcting it avoids distracting from the content.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

## Already working

- s2:e1:b0: Pairs a clear contribution with a measured desk-level result.
- s3:e0:b0: Pairs a quantified result with a named baseline and evaluation metric.
- s3:e1:b0: The placement and comparison group make the competition result immediately legible.
