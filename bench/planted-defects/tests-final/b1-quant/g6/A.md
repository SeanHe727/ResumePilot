> Here is my resume: bench/planted-defects/tests-final/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the five experience and project entries for content and wording, plus the resume’s overall narrative and formatting. I didn’t run a job-match review because no job description was provided.

The main changes to address:
- **Correct or clarify quantitative claims.** In the volatility project, the change from 0.20 to 0.15 is a 25% reduction, not 33%; 52% to 58% is a six-percentage-point increase, not 6%. Name the error metric, too. The internship’s forecast-test and annualized-Sharpe claims also need verification.
- **Reorder and tighten for your quantitative research direction.** Put Experience before Education, and consider shortening or removing the bakery role if it doesn’t support your target. The narrative review also flagged Kafka as unsupported elsewhere on the resume and a misspelling of “econometrics.”
- **Clarify evidence and attribution.** Add context for the student feedback rating and the labour-budget result, and avoid implying that one inventory change alone caused the full reduction in unsold bread.

The file parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 84 · wording 84 · narrative 71

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 17 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Assistant Store Manager

**Problem**
[Important] Sunrise Bakery is the most recent role and currently pulls the résumé away from quantitative research. *(saves about 8 words if shortened; more if removed)*

**Why**
A recruiter sees this role before the older quantitative experience, so its prominence can steer the initial impression away from the target direction. The role may still be worth keeping, but the current space given to it should support that direction.

**How to change it**
Shorten Sunrise Bakery to one line or remove it if it does not support the target direction.

> Ph.D. candidate in Statistics

**Problem**
[Important] Education leads the résumé ahead of the more relevant experience. *(no words)*

**Why**
The research assistantship and quantitative internship give a reader relevant work to assess. Leading with credentials delays that evidence and makes the résumé's first impression less aligned with quantitative research.

**How to change it**
Move Experience before Education; this is a section-order change and adds no text.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The budget claim gives no frequency or amount, so the reader cannot gauge the result. *(about 3 words to add)*

**Why**
Staying within budget is a useful benchmark, but the line does not show whether that happened consistently or by a meaningful margin. Without either measure, the scale of the achievement is unclear.

**How to change it**
Replace the phrase with [number of weeks within budget] or [amount or percentage under budget], if you can substantiate one.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
1. [Important] The bread reduction is attributed entirely to stock counts and supplier orders without showing that those actions caused it. *(no words if separated; about 3 words if the method is specified)*
2. [Important] The outcome appears after the methods, making the reduction in unsold bread easy to miss when scanning. *(no words)*

**Why**
1. Daily counts and supplier orders can help reduce excess stock, but the line does not show how they produced the change. Demand changes or production adjustments could also explain the reduction, so the attribution may prompt a reader to question the result.
2. A reader scanning the bullet encounters the stock-count and ordering tasks before the result. That delays the most concrete evidence of impact and weakens the line's immediate relevance.

**How to change it**
1. If accurate, specify how the counts or orders changed production or purchasing; otherwise separate the actions from the result and use [confirm attribution] before retaining the figures.
2. Move the unsold-bread result to the opening of the bullet; the move itself need not add words.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold-Mariano tests do not generally validate a forecast gain over a nested HAR-RV baseline. *(about 2 words to add if naming a test)*
2. [Important] The line does not identify the forecast metric, the size of the gain, or what the tests showed. *(about 4 words to add)*

**Why**
1. The usual Diebold-Mariano null distribution can fail when comparing nested forecast models. As written, the tests do not establish the claimed gain, and a reader may question the validity of the confirmation.
2. “The forecast gain” tells a reader that a comparison was made but not what improved or by how much. Without the test result, the reader also cannot judge the evidence for the claim.

**How to change it**
1. If used, name a nested-model-appropriate test or adjustment, such as Clark-West for squared-error comparisons; otherwise remove or soften the confirmation claim.
2. Replace “the forecast gain” with [forecast metric and gain versus the nested HAR-RV baseline], and include the test result only if it helps establish the finding.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] The feature-joining phrase has a dangling participle that makes it sound as though the feature store joined the features. *(no words)*

**Why**
The opening phrase, “Joining 120 microstructure features,” does not clearly attach to the person who performed the work. A reader can misread the feature store as the actor, obscuring your contribution.

**How to change it**
Move “built a feature store the team reused in two later projects” to the opening, then make the feature-joining and schema details a clear clause about your work.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 overstates its annualized value under the conventional square-root-of-time assumption. *(about 3 words to add)*
2. [Important] The annualization bullet reports the calculation step but gives no resulting annualized Sharpe value. *(about 3 words to add)*
3. [Polish] The reporting-step phrase is expendable process detail that does not strengthen the action. *(saves about 6 words)*

**Why**
1. Under that assumption, daily Sharpe is multiplied by the square root of 252, not by 252. The stated calculation therefore produces an incorrect annualized ratio and could undermine confidence in the performance reporting.
2. Without the value, the reader cannot judge the signal's reported performance or why the calculation mattered to the desk. The reporting process alone does not demonstrate an outcome.
3. The bullet already says the ratio was annualized before mentioning the desk. The extra reporting step uses space without showing a result or adding useful context.

**How to change it**
1. Replace “multiplying it by 252” with “multiplying it by the square root of 252,” if using the usual square-root-of-time assumption.
2. Replace the reporting-step wording with [annualized Sharpe value reported to the desk] and, if applicable, [decision or action it informed].
3. Cut “before reporting it to the desk”; use the space for the reported value only if you can provide it.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The proof bullet uses a first-person pronoun. *(no words)*
2. [Important] The proof comparison does not specify the logarithmic term or the prior bound being improved. *(about 4 words to add)*

**Why**
1. “My proof” shifts the bullet into first person, unlike the résumé's phrase-style presentation. It draws attention to wording rather than to the technical contribution.
2. A research reader cannot judge the size or nature of the improvement from “a log factor” alone. The paper's status gives context, but does not clarify the mathematical result.

**How to change it**
1. Replace “my proof” with “the proof” or remove the pronoun.
2. Replace “by a log factor” with [the precise logarithmic term and the prior bound it improves], if accurate.

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Important] The teaching rating has no response count, so its representativeness is unclear. *(about 3 words to add)*

**Why**
The class size of 60 does not show how many students submitted ratings. Without that count, a reader cannot tell how much evidence supports the 4.8/5 score.

**How to change it**
Add [number of student responses] after the rating, if available.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The package result is buried among unrelated duties, and “which” has an unclear referent. *(no words)*

**Why**
The download figure follows several activities, so a reader may not know what was downloaded. Placing it directly after the release would make the package's reach easier to see.

**How to change it**
Move the download result directly after “Released an open-source R package” and name the package as the thing downloaded.

> Released an open-source R package

**Problem**
[Important] The research achievements are mixed with teaching and lab-service work, and the package bullet combines unrelated duties. *(no words if reorganized)*

**Why**
A reader looking for research evidence has to sort the proof, teaching, software, and service contributions from one another. In the package bullet, the extra duties also obscure the release and its reach.

**How to change it**
Separate research achievements from teaching and lab service, and separate the package release from the cluster, reading-group, and grading duties; keep each existing fact with its relevant work.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The 33% improvement is wrong: a fall from 0.20 to 0.15 is a 25% reduction relative to the original error. *(no words)*
2. [Important] “Forecast error” does not identify the metric represented by 0.20 and 0.15. *(about 2 words to add)*

**Why**
1. The reduction is 0.05, which is 25% of 0.20. The 33% figure divides by the new value instead, so the stated improvement uses the wrong base and misrepresents the result.
2. A reader cannot interpret or compare the values without knowing what was measured. Naming the metric would make the before-and-after result meaningful.

**How to change it**
1. Replace “33% improvement” with “25% reduction.”
2. Replace “forecast error” with [name of forecast-error metric], if accurate.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The hit-rate change is 6 percentage points, not a 6% relative improvement. *(about 2 words to add)*
2. [Polish] The model phrase repeats the method already stated in the first bullet. *(saves about 5 words)*

**Why**
1. The rates of 52% and 58% differ by six percentage points; the relative increase from 52% is about 11.5%. Using “6%” beside those rates gives readers two different interpretations of the change.
2. The first bullet has already named the temporal convolutional model. Repeating it here takes space from the result without adding useful detail.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points.”
2. Cut “with a temporal convolutional model” from this bullet.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] “Top 2%” repeats the placement already given and adds little information. *(saves about 9 words)*

**Why**
The 41st-place ranking among 2,900 teams already communicates a top-2% result. Keeping both claims uses space without giving the reader a distinct achievement.

**How to change it**
Cut “finishing in the top 2% of the private leaderboard.”

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The line attributes the 0.02 gap change to time-grouped folds without establishing that validation leakage caused the gap. *(no words if separated; about 4 words if the comparison is specified)*

**Why**
Time-grouped folds can reduce temporal leakage, but a local-to-leaderboard gap can have other causes. The fold change alone does not establish that it produced the reported change, so the causal claim may be questioned.

**How to change it**
If a before-and-after comparison supports the attribution, describe that comparison; otherwise say that time-grouped folds reduced leakage and report the 0.02 gap separately.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] Neither the 0.02 gap nor the preserved validation score names its metric or scale. *(about 6 words to add)*

**Why**
A reader cannot interpret a 0.02 difference without knowing the score metric and scale. The feature-count reduction is clear, but “without losing validation score” likewise does not show what performance measure was maintained.

**How to change it**
Add [score metric and scale] next to “0.02 gap,” and replace “validation score” with [validation metric and comparison], if available.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Polish] “Cut validation leakage” is jargon-like and does not clearly describe the fold change. *(about 2 words to add)*

**Why**
A reader may not understand what was changed or how the phrase relates to the score gap. The wording also risks implying a result that is not established by the line.

**How to change it**
Replace “Cut validation leakage” with a direct description such as “switched to time-grouped folds to reduce leakage”; keep the gap separate unless a before-and-after comparison supports the attribution.

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled; the correct spelling is “econometrics.” *(no words)*

**Why**
The typo is visible in a technical skills term and can distract from the candidate's attention to detail. It also makes the skill harder to scan and recognize.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Important] Kafka is listed under Programming without visible evidence of its use in the experience or project entries. *(saves 1 word)*

**Why**
A reader cannot connect the skill to any work described in the résumé. Without an example, the listing may be treated as an unsupported skill claim.

**How to change it**
Remove “Kafka” unless you can add accurate experience showing how you used it.

## Already working

- s2:e1:b0: Pairs a concrete performance change with a defined out-of-sample, after-costs evaluation context.
- s2:e1:b1: Balances multiple outcomes to show the trade-off rather than presenting lower turnover alone.
- s3:e0:b0: Connects a quantified forecast result to a named baseline and evaluation setting.

## Set aside (4)

4 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-66d63500.md.

