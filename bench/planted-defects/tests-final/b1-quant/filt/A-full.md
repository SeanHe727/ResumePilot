# Full review: resume.pdf

**87/100** — format 100 · content 83 · wording 82 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 13 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Important] The feature-store outcome and package-download result are buried beneath methods or unrelated duties. *(no words if only moved; saves words if duties are cut)*

**Why**
The feature-store bullet leads with a long list of implementation details before saying the team reused the result. The package bullet likewise places its download result after unrelated duties, delaying the outcomes a reader needs to notice.

**How to change it**
In the Northpeak bullet, move “built a feature store the team reused in two later projects” to the front, change “Joining” to “Joined” or “By joining,” and keep the method details after it. In the lab bullet, move “downloaded 3,000 times in its first year” directly after the package mention and remove or separate the intervening duties.

*raised by wording*

> B.S. in Mathematics

**Problem**
[Important] The education entries are not in newest-first order. *(no words)*

**Why**
The Ph.D. entry is newer than the B.S. entry, but appears after it. That breaks the newest-first ordering used elsewhere and makes the education timeline less consistent to scan.

**How to change it**
Move the Ph.D. entry above the B.S. entry.

*raised by narrative*

> team of 6 bakers and cashiers

**Problem**
[Important] The Sunrise Bakery entry takes more than one line despite not advancing the résumé’s quantitative-research direction. *(saves about 14 words)*

**Why**
The operational experience is less relevant to the quantitative-research direction established by the rest of the page. Giving it two bullets takes space from the more directly relevant research and technical work.

**How to change it**
Keep the role heading and one concise bullet, and cut the other bakery bullet.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Polish] The budget claim gives no figure showing how closely labour spending matched the budget. *(adds about 4–8 words)*

**Why**
A reader can see that the store stayed within budget, but not the actual spend or the size of the variance. Without that context, the line does not show how much cost control the result represents.

**How to change it**
Add [actual weekly labour spend versus budget, or the variance] after this phrase, if you can substantiate it.

*raised by content*

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Polish] The past-tense verbs may make ongoing responsibilities in this present role sound completed. *(no words)*

**Why**
The role is listed as present, but “Managed” and “Ran” describe completed actions. A reader may therefore be unsure whether these responsibilities are ongoing or belonged to an earlier period.

**How to change it**
If these responsibilities are ongoing, change “Managed” to “Manage” and “Ran” to “Run.”

*raised by wording*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The causal link between the stock counts and orders and the reduction in unsold bread is unclear. *(adds about 3–8 words if naming the action)*

**Why**
Stock counts can inform actions that reduce unsold bread, but do not reduce it on their own; supplier orders usually concern inputs rather than finished bread. Without the mechanism, a reader cannot tell what drove the reduction or how your work contributed to it.

**How to change it**
Name the action that reduced unsold bread [if it involved production adjustments, markdowns, rotation, or another sell-through measure]; otherwise describe the counts and orders without attributing the reduction to them.

*raised by content*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] The standard Diebold–Mariano test does not provide usual valid inference for this comparison with a nested HAR-RV baseline. *(adds about 2–5 words if naming the procedure)*
2. [Important] “The forecast gain” does not state what improved or by how much. *(adds about 3–6 words)*
3. [Polish] “Standard” is filler before the named Diebold–Mariano tests. *(saves 1 word)*

**Why**
1. For nested forecast models, the standard Diebold–Mariano test’s null distribution can differ from the usual one, so it may not reliably establish a statistically significant forecast gain. The line names the nested baseline but no nested-model procedure or correction, leaving the inference unsupported.
2. The baseline and test show that a comparison was made, but a reader cannot judge its practical importance without the measured improvement. The vague result also makes it harder to understand what the tests were intended to confirm.
3. The test name already identifies the method, so “standard” adds no useful detail. Keeping it also makes the phrasing less concise.

**How to change it**
1. If used, name the appropriate nested-model test or correction; otherwise describe the observed forecast difference without saying the tests confirmed a gain.
2. Name the forecast-error change against the nested HAR-RV baseline and add [the measured improvement].
3. Delete “Standard.”

*raised by content, wording*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] “Joining” does not form a grammatical construction with “built” as written. *(no words)*

**Why**
The opening phrase is left without a grammatical link to the main verb. That makes the feature-store result harder to follow and distracts from the contribution.

**How to change it**
Change “Joining” to “Joined” or use “By joining.”

*raised by wording*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the standard annualization under the usual uncorrelated-returns assumption. *(no words)*
2. [Important] The reporting detail does not show what the annualized Sharpe calculation contributed to a desk assessment or decision. *(adds about 4–8 words, or saves about 8 words if cut)*

**Why**
1. Under that assumption, annualization multiplies the daily Sharpe ratio by √252, not 252. Serial dependence can require a dependence-aware adjustment, so the stated calculation may overstate the reported annualized Sharpe.
2. A reader can see that a calculation was reported to the desk, but not what it enabled or what value resulted. Without that outcome, the line reads as a routine task rather than a research contribution.

**How to change it**
1. Use √252 under the uncorrelated-returns assumption, or report the dependence-aware annualization method actually used.
2. If the calculation informed a specific desk assessment or decision, replace this ending with [the assessment or decision it informed] and include [the reported annualized Sharpe value]; if this was routine reporting, consider cutting the line.

*raised by content, wording*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] The onboarding outcome is buried after the documentation detail. *(no words)*

**Why**
The reader encounters the wiki and its contents before learning that the next intern cohort used the documentation to onboard. That delays the result and makes the sentence’s main contribution less immediate.

**How to change it**
Move the onboarding benefit to the start of the bullet and shorten the clause about the wiki; keep the stated documentation topics.

*raised by wording*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Polish] The first-person pronoun “my” does not belong in this résumé bullet. *(no words)*

**Why**
The pronoun makes the bullet read like a sentence in personal prose rather than a résumé phrase. It also adds no information beyond the stated proof contribution.

**How to change it**
Replace “my proof” with “the proof” or remove “my” if the sentence remains grammatical.

*raised by file, wording*

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Polish] The teaching rating lacks the number of student responses behind it. *(adds about 2–4 words)*

**Why**
Without a response count, a reader cannot judge how broadly the 4.8/5 rating reflects the class. That missing denominator limits how much weight the reader can give the score.

**How to change it**
Add [number of student responses] after the rating, if available.

*raised by content*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package description names its application but not the technical work it contains. *(adds about 3–8 words)*
2. [Important] The package’s download result is buried after unrelated duties, and “which” has an unclear referent. *(no words if only moved; saves words if duties are cut)*
3. [Polish] The lab duties interrupt the package achievement with unrelated responsibilities. *(saves about 13 words if cut; no words if moved)*

**Why**
1. A reader can tell that the package addresses high-dimensional covariance estimation, but not which statistical or implementation skill you contributed. One distinctive technical detail would help establish the substance of the release.
2. The reader must pass through the cluster, reading-group, and grading duties before reaching the package’s result. Because “which” follows that list, it is also less clear that the downloads refer to the package.
3. The package release is a distinct contribution, but the line shifts from it to cluster maintenance, reading-group organization, and grading. That interruption makes the software result harder to follow and the bullet read like a list of unrelated tasks.

**How to change it**
1. Add the package’s main estimator or technical contribution, if accurate: [the specific estimation method or technical feature].
2. Move “downloaded 3,000 times in its first year” directly after the package mention, and remove or separate the intervening duties.
3. Remove this duty list from the package bullet or place the duties in a separate bullet.

*raised by content, wording*

> while maintaining the lab’s shared cluster

**Problem**
[Important] The final bullet bundles the package release with distinct lab duties, making the entry read like a task list. *(no words if only reorganized; saves words if duties are cut)*

**Why**
The entry already covers research and teaching, while the final bullet joins a software release to cluster maintenance, reading-group organization, and grading. That bundle obscures the distinct contributions and makes it harder to see the package’s result.

**How to change it**
Separate the package contribution from the cluster, reading-group, and grading duties; keep the software result with the package and group the other duties separately or remove them.

*raised by narrative*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
1. [Polish] The 7% result does not say how it is summarized across the 30 indices. *(adds about 1–5 words)*
2. [Polish] “QLIKE” is specialized jargon that may slow readers unfamiliar with the metric. *(adds about 1–2 words)*

**Why**
1. A reader cannot tell whether 7% is an average, median, or another aggregate. That choice affects how the comparison should be interpreted.
2. A reader who does not know the acronym may not understand what the model beat. Without a brief explanation, the comparison is less accessible even though the result is quantified.

**How to change it**
1. Add the aggregation used, such as “average” or “median,” if accurate; otherwise specify [how the 7% is summarized across indices].
2. Spell out “QLIKE” or briefly identify it as a loss metric; use “quasi-likelihood loss” if that is accurate.

*raised by content, wording*

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The 33% improvement misstates the reduction from 0.20 to 0.15. *(no words)*
2. [Important] The 0.20 and 0.15 values do not identify the forecast-error metric. *(adds about 2–6 words)*
3. [Important] The second bullet repeats realized-volatility features already named in the preceding bullet. *(saves about 3 words)*

**Why**
1. The reduction is 0.05, which is 25% of the original 0.20 error. Calling it a 33% improvement uses the final value as the denominator, so the stated percentage conflicts with the endpoints.
2. Different error metrics have different scales and interpretations, so the values alone do not let a reader judge the result. The line also needs to make clear what the change is compared against if it is not the same model before adding the features and loss.
3. The preceding bullet already tells the reader that the model uses realized-volatility features. Repeating the method in this result takes space without distinguishing the error reduction.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [the name of the error metric] and clarify what the change is compared against, if it is not the same model before adding the features and loss.
3. Delete “adding realized-volatility features” from the second bullet; retain the asymmetric-loss detail if it distinguishes this result.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change from 52% to 58% is six percentage points, not a 6% increase. *(adds 2 words)*
2. [Important] The second bullet repeats the indices and model context already given in the first bullet. *(saves about 9 words)*

**Why**
1. The two values differ by six percentage points. The relative increase from 52% is about 11.5%, so “by 6%” mislabels the change and may lead a reader to interpret it as a relative increase.
2. The first bullet already identifies 30 equity indices and a temporal convolutional model. Repeating both details here adds length without distinguishing the directional hit-rate result.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points,” if that is the intended description.
2. Delete “on 30 equity indices” and “with a temporal convolutional model” from the second bullet.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The placement and top-2% statement report the same competition result. *(saves about 5 words)*

**Why**
A reader can infer the top-2% standing from 41st place out of 2,900 teams. Repeating the outcome uses space that could be saved or used for a distinct contribution.

**How to change it**
Delete either “Placed 41st of 2,900 teams” or “finishing in the top 2%.”

*raised by wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Polish] The 0.02 gap does not name the scoring metric or its scale. *(adds about 2–5 words)*

**Why**
Without that context, a reader cannot tell what a 0.02 difference means or judge the size of the change. The numerical claim is therefore difficult to interpret.

**How to change it**
Name the scoring metric and scale behind “0.02 gap,” using [metric and scale] if needed; keep the comparison between local validation and leaderboard scores.

*raised by content*

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.” *(no words)*

**Why**
The listed spelling, “econometircs,” is incorrect. A visible spelling error can distract the reader and undermine confidence in the care taken with the document.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

## Already working

- s2:e1:b0: Connects a specific research contribution to a desk-level performance result.
- s2:e1:b1: Shows the trade-off between reduced trading and retained returns.

## Set aside (2)

- s2:e2:b1: “tightens the previous bound by a log factor” does not say which logarithmic term or under what conditions the bounds are compared.
- s3:e1:b1: The claim that time-grouped folds “cut validation leakage” is not established by the stated 0.02 gap closure.
