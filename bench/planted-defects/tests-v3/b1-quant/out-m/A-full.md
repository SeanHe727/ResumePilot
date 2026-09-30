# Full review: resume.pdf

**87/100** — format 100 · content 82 · wording 85 · narrative 61

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Northpeak Capital should lead the experience section, while Sunrise Bakery should be reduced or moved to Additional Experience. *(no words)*

**Why**
The quantitative research internship is more relevant to the apparent research and quantitative direction of the résumé. Giving the bakery role equal or greater prominence makes the page’s direction unclear before a recruiter reaches the stronger technical evidence.

**How to change it**
Move Northpeak Capital above Sunrise Bakery; move Sunrise Bakery to a short Additional Experience section at the end or reduce it to a single line.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The phrase "keeping the store within its weekly labour budget" does not establish that managing the shifts and team produced the budget result or show its scale. *(about 5 words to add, if quantified)*

**Why**
Labour performance also depends on scheduled hours, wage rates, overtime, absences and staffing requirements, so the duties alone do not prove the budget was met. Without the budget amount or variance, a reader cannot judge whether this was routine compliance or a meaningful result.

**How to change it**
If verified, add [the weekly labour budget amount and actual variance or saving] with a comparison period; otherwise replace the phrase with "scheduling within the weekly labour budget."

*raised by content, wording*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line attributes the reduction in unsold bread to stock counts and supplier orders without stating the comparison period. *(about 3 words to add)*

**Why**
Those activities can help measure or manage inventory, but production volume, demand, promotions and the definition of unsold bread can also affect the result. Without comparable periods, the reader cannot judge whether the stated reduction is attributable to this work.

**How to change it**
If the causal effect was demonstrated, name the comparable periods and measurement basis; otherwise change "cutting" to an observed result such as "unsold bread was 7% of production, down from 12% in [comparison period]."

*raised by content*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The statement that the resulting desk book’s Sharpe ratio rose from 1.1 to 1.5 attributes the entire increase to the new signal. *(about 3 words to add)*

**Why**
An out-of-sample backtest can show that the resulting book had a higher Sharpe ratio, but it does not isolate the signal’s causal contribution. Portfolio construction, data handling, implementation, costs or the comparison portfolio could account for some or all of the difference.

**How to change it**
Change the claim to a comparison stating that the resulting desk-book backtest had a Sharpe ratio of 1.5 versus 1.1 for the comparison, or report a like-for-like ablation if one established the causal increase.

*raised by content*

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Important] The claims that the smoother retained 90% of gross returns and reduced estimated slippage by a third lack defined reference and calculation bases. *(about 3 words to add)*

**Why**
The figures are credible only if they use the same sample, portfolio, return denominator and validated transaction-cost model before and after smoothing. In particular, a reader cannot tell whether 90% refers to the unsmoothed signal’s gross returns, a target or another result.

**How to change it**
Report the figures only if measured on the same portfolio and evaluation period with defined metrics; replace the phrase with "retaining 90% of [the unsmoothed signal’s gross returns]" if accurate, or report only the measured turnover and net-performance change.

*raised by content*

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
[Important] The claim that standard Diebold-Mariano tests "confirmed" the forecast gain does not state the measured improvement or the test result. *(about 8 words to add, if the results are available)*

**Why**
A Diebold-Mariano conclusion depends on the loss function, treatment of serial dependence or overlapping horizons, and the resulting statistic and p-value. Testing 30 indices also requires a stated multiple-testing treatment, so naming the test alone proves that testing occurred rather than that the gain was supported.

**How to change it**
Replace "forecast gain" with [the measured improvement over the nested HAR-RV baseline] and add [the loss, dependence treatment, multiple-testing adjustment and significance result], if accurate; otherwise soften the claim to an unadjusted comparison.

*raised by content, wording*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] The feature-store bullet begins with a dangling modifier and does not clearly say what was joined to what. *(no words if text is moved; about 2 words to add for a subject)*

**Why**
The grammatical subject of "Joining" is unstated, so the reader must reconstruct who performed the work. The long method sequence also delays the reusable feature-store result, making the contribution harder to scan.

**How to change it**
Replace the opening with [what was joined] point-in-time across six venues, and move the feature-store result earlier if possible while retaining the data-quality methods that matter.

*raised by wording, content*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] The signal’s daily Sharpe ratio is annualized with the wrong factor: it should be multiplied by the square root of 252, not 252. *(saves about 7 words)*
2. [Important] The phrase "Before reporting it to the desk" is filler and the bullet gives no reported Sharpe result or comparison. *(saves about 6 words)*

**Why**
1. Under the usual assumptions, annualizing a daily Sharpe ratio uses the square root of approximately 252 trading days. Multiplying by 252 materially inflates the reported Sharpe ratio and undermines confidence in the quantitative analysis.
2. Reporting the calculation is not an accomplishment unless it changed a decision or outcome. Without a resulting Sharpe figure or comparison, the reader sees a method detail rather than evidence of quantitative impact.

**How to change it**
1. Replace "252" with "the square root of 252" and remove "before reporting it to the desk" unless the reporting itself was the accomplishment.
2. Cut "before reporting it to the desk" and add [the reported Sharpe result or comparison] only if that result is available and accurate.

*raised by content, wording*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Important] The wiki-use claim does not establish that the next intern cohort used it in its first week or that onboarding improved. *(saves about 11 words if the unsupported claim is cut)*

**Why**
The existence of documentation does not prove later access or first-week use, which would require usage records, onboarding materials or verified feedback. Even if the cohort used it, the reader cannot tell whether it shortened onboarding or merely provided background reading.

**How to change it**
Either end the bullet after documenting the assumptions, cost model and failure regimes, or add [verified cohort usage and a measurable onboarding benefit or comparison] and move that result earlier in the sentence.

*raised by content, wording*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The phrase "my proof tightens the previous bound by a log factor" does not specify the bound or comparison being improved. *(about 6 words to add, if the comparison is available)*
2. [Polish] The bullet uses the unnecessary first-person pronoun "my" in a résumé phrase. *(no words)*

**Why**
1. A specialist can see that the result is intended to be stronger, but cannot tell which quantity changed or how the old and new bounds compare. The paper-status detail supports dissemination, not the mathematical size of the contribution.
2. The pronoun breaks the otherwise consistent résumé style and makes the line read like a sentence. It adds no information because the bullet already identifies the candidate’s contribution.

**How to change it**
1. Replace "by a log factor" with [the exact old-to-new bound or specific logarithmic comparison], if it can be stated compactly, and replace "my proof" with "the proof."
2. Replace "my proof" with "the proof."

*raised by content, file, wording*

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Polish] The teaching rating lacks the response context needed to interpret its credibility. *(about 4 words to add)*

**Why**
A 4.8/5 rating means more when the reader knows whether it came from a broad course evaluation or a small informal response set. Without that context, the figure is difficult to weigh.

**How to change it**
Add "from [number of respondents]" after the rating if that response count is available; otherwise retain the rating without inventing context.

*raised by content*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The final research-assistant bullet combines unrelated responsibilities into an unordered task list attached to the package accomplishment. *(saves about 5 words if lower-priority duties are removed)*

**Why**
Cluster maintenance, reading-group organization and grading do not clearly belong to the package release, so the entry’s statistical-learning research story loses focus. The reader also cannot see what changed because of those duties, while the ambiguous "which" can appear to refer to the courses rather than the package.

**How to change it**
Separate the cluster, reading-group and grading responsibilities from the package accomplishment or remove lower-priority detail; replace "which was downloaded 3,000 times" with "the package was downloaded 3,000 times."

*raised by content, narrative, wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
[Error] The claim that forecast error fell from 0.20 to 0.15 is mathematically wrong when described as a 33% improvement. *(saves about 3 words)*

**Why**
The reduction is 0.05, and 0.05 divided by the original 0.20 equals 25%, not 33%. The line also does not identify which error metric changed, so the reader cannot interpret the result precisely.

**How to change it**
Replace "a 33% improvement" with "a 25% reduction" or "a reduction of 0.05," and replace "forecast error" with [the specific error metric] if available.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
[Error] The increase from 52% to 58% is a 6-percentage-point increase, not a 6% improvement. *(saves about 5 words if the repeated model phrase is cut)*

**Why**
The absolute difference is six percentage points, while the relative increase is approximately 11.5%. The before-and-after rates also do not by themselves establish that the temporal convolutional model caused the change, so the current wording can misstate both magnitude and attribution.

**How to change it**
Replace "by 6%" with "by 6 percentage points"; if the relative convention is intended, use approximately 11.5%, and soften the model attribution unless a controlled comparison established it. Remove the repeated "with a temporal convolutional model" if it adds no distinct result.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The claim that switching to time-grouped folds closed a 0.02 gap does not establish that the fold change caused the gap reduction, and the gap’s unit is unspecified. *(about 8 words to add, if the figures are available)*

**Why**
A controlled comparison with the same data, model, features and tuning would be needed to attribute the change to fold grouping; time grouping alone also does not guarantee leakage-free validation. A reader cannot judge 0.02 without knowing the score metric, unit, which score was higher or the resulting gap.

**How to change it**
Report the observed result as a decrease in the local-validation-to-leaderboard gap, adding [the score metric, unit, before-and-after gaps and which score was higher]; claim leakage reduction only if [a controlled, properly time-ordered or purged evaluation demonstrated it].

*raised by content, wording*

## Skills

> econometircs

**Problem**
[Error] The skills line misspells "econometrics." *(no words)*

**Why**
The spelling error is immediately visible in a technical skills section and can make the résumé appear less carefully checked. It also weakens confidence in the precision expected of a statistics candidate.

**How to change it**
Replace "econometircs" with "econometrics."

*raised by narrative*

> Kafka

**Problem**
[Important] Kafka is listed under Programming without any résumé entry showing how it was used. *(saves 1 word if removed)*

**Why**
A reader expects a listed technology to be supported by a project or system example. Without that evidence, Kafka looks unsubstantiated and takes attention away from skills demonstrated elsewhere.

**How to change it**
If accurate, add Kafka to a bullet describing the system or data pipeline that used it; otherwise remove it from the skills line.

*raised by narrative*

## Already working

- s2:e2:b0: Pairs a concrete contribution with a strong before-and-after result.

## Set aside (13)

- s2:e0:b1: The phrase "cutting unsold bread from 12% to 7% of production" gives the comparison but not the period over which the reduction occurred.
- s2:e1:b3: The phrase "the team reused in two later projects" shows adoption but not what the feature store changed for those projects.
- s2:e1:b4: The line says "before reporting it to the desk" but does not state what changed as a result of the reporting. (and 1 more like it)
- s3:e0:b0: The phrase "by 7% on 30 equity indices" does not say whether 7% is an average, median, pooled result, or another summary across the indices.
- s3:e0:b1: The phrase "forecast error" does not identify which error metric changed from 0.20 to 0.15.
- s3:e0:b2: The line credits the temporal convolutional model with improving directional hit rate, but the stated before-and-after rates alone do not establish that the model caused the change.
- s3:e1:b2: The phrase "without losing validation score" does not identify the score being measured. (and 1 more like it)
- s2:e2:b3: The pronoun "which" in "which was downloaded 3,000 times" can ambiguously refer to the immediately preceding courses rather than the R package; replace it with "the package was downloaded 3,000 times."
- s2:e1:b3: The long sequence of methods delays the main result, so the reusable feature store is easy to miss during a scan.
- s3:e0:b1: "a 33% improvement" redundantly restates the change already shown by "from 0.20 to 0.15" and makes the result harder to scan.
- s3:e0:b2: "with a temporal convolutional model" repeats the model description from the first bullet without adding a distinct wording benefit.
- s3:e1:b0: "on 300 engineered features" makes the relationship between the ensemble and the features slightly awkward; "using" is more precise.
- s3:e1:b0: "41st of 2,900 teams" already establishes the percentile, so adding "finishing in the top 2%" repeats the result rather than adding information.
