# case-3

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly
labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk
book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.
- Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90%
of gross returns and lowering estimated slippage by a third.
- Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests
across the 30 indices.
- Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and
versioning each schema, built a feature store the team reused in two later projects.
- Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the
desk.
- Documented the backtest assumptions, transaction-cost model and known failure regimes in the
desk’s research wiki, which the next intern cohort used to onboard in their first week.
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study
from 3 days to 5 hours, with every run reproducible from its seed and configuration file.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound
by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and
earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while maintaining the
lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was
downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features
and an asymmetric loss.
- Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a
temporal convolutional model.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing
in the top 2% of the private leaderboard.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local
validation and leaderboard scores.
- Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate
features to 300 without losing validation score.
SKILLS
Programming: Python, R, PyTorch, Kafka
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

## Overall

The strongest material is the quant research, statistical work, and concrete outcomes. The main things to address are **one important calculation error, several ambiguous or overstated metrics, redundant project bullets, and a few overloaded or awkward bullets**. For quant roles, make sure readers can tell which results are from backtests, which are forecast evaluations, and which were used in live trading.

## Header and education

- **Contact line:** Check that the code link goes directly to a relevant, polished portfolio or repository. If you have a LinkedIn profile that supports your candidacy, include it; don’t add one just to fill space.
- **Ph.D. entry:** The expected completion date is useful. Consider adding a concise research focus if it directly supports the roles you’re targeting; it would help connect the degree to the experience below.
- **Education dates:** The dates are clear and consistent. The research assistant role begins shortly after the B.S.; that is not a problem, but be prepared to explain the transition if asked.

## Experience

### Sunrise Bakery

- **Opening-shifts/team/budget bullet:** “Managed” and “keeping the store within its weekly labour budget” leave the scope and result somewhat unclear. Clarify your responsibility for the team and budget, and use the spelling convention consistent with the jobs you’re targeting.
- **Stock-counts/supplier-orders bullet:** The reduction from 12% to 7% is strong, but clarify what “unsold bread” measures and over what period. That helps readers judge the size and reliability of the result.
- **Role relevance:** This is your current role, so keeping it may make sense. If you’re applying to quant research positions, consider whether it should take less space than the directly relevant research experience.

### Northpeak Capital

- **Sharpe improvement bullet:** Clarify whether both Sharpe ratios are annualized, what “the desk book” refers to, and whether the result is solely attributable to your signal. Also make clear that this is a backtest result rather than a live-trading result.
- **Turnover/slippage bullet:** Define the turnover measure and the comparison used for “keeping 90% of gross returns.” The relationship among gross returns, costs, and estimated slippage is currently hard to interpret.
- **Diebold–Mariano test bullet:** State what forecast loss or measure was tested and how you handled the fact that you tested across 30 indices. Because HAR-RV is described as a nested baseline, verify that the test procedure is appropriate for nested models; simply calling the tests “standard” may invite methodological questions.
- **Feature-store bullet:** The opening construction is grammatically awkward: the “Joining…” phrase does not attach cleanly to the subject that follows. Also clarify what the feature store enabled or improved, if you can support that with a specific result.
- **Annualized-Sharpe bullet:** **Correct or remove this.** Annualizing a daily Sharpe ratio generally uses the square root of 252, not 252, subject to the assumptions behind that annualization. As written, the calculation is wrong and could undermine confidence in the other quantitative claims. It also reads as a calculation step rather than an achievement.
- **Research-wiki bullet:** The documentation and handoff are useful, but the final clause is awkward and unclear about how the next cohort used it. Make the adoption or onboarding benefit more concrete if possible.

### Ridgeway University research assistant role

- **Simulation-pipeline bullet:** Strong, measurable impact. If space permits, add context that helps readers assess the comparison, such as the computing setup or what changed to produce the speedup. Keep the reproducibility detail.
- **Variance-bound bullet:** “My proof” is more personal than the rest of the resume, and “tightens the previous bound by a log factor” may be too vague for a technical reader. Clarify the comparison and describe the paper’s status precisely; under review is not the same as accepted or published.
- **Teaching bullet:** This is clear and quantified. If the rating is based on a small number of responses, give enough context to avoid making the score seem more definitive than it is.
- **Open-source package/other duties bullet:** This combines the package release, cluster maintenance, reading-group organization, grading, and download count. Separate the package result from unrelated duties or remove lower-priority details. Make clear that the downloads refer to the package, and include its name or a link if useful.

## Projects

### Volatility Forecasting Study

- **QLIKE bullet:** Useful result, but clarify the evaluation setup enough to distinguish it from the Northpeak HAR-RV comparison. The same baseline and 30-index scope appear elsewhere, so readers may wonder whether these are separate studies or repeated results.
- **Forecast-error bullet:** The arithmetic does not match the stated percentage: a reduction from 0.20 to 0.15 is a **25% reduction** using 0.20 as the starting value, not 33%. Also identify the error measure and confirm the comparison isolates the effect of the added features and loss function.
- **Directional-hit-rate bullet:** A change from 52% to 58% is **six percentage points**, not a 6% increase. This also repeats the same model and index set from the first bullet. Keep it only if it adds a distinct evaluation result, and make the relationship among the three bullets clear.

### Kaggle competition

- **Placement bullet:** The rank and top-2% claim are consistent. Make sure the placement refers to the final/private leaderboard if that is what you mean.
- **Validation-leakage bullet:** Explain what caused the leakage or score gap. Switching to time-grouped folds may have made validation more representative rather than directly “cutting” leakage; distinguish those claims.
- **Feature-selection bullet:** This is a useful technical contribution. “Without losing validation score” could be more informative if you can state the measure or show that the result held on a genuinely separate evaluation set.

## Skills

- **Methods line:** Correct the typo in “econometircs.”
- **Skills content:** The listed tools and methods are relevant, but consider whether each is supported by the experience shown. Add other role-relevant tools only if you can substantiate them; avoid adding skills simply to make the list longer.

## Reviewer 2

6 errors, 14 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Ridgeway University | Ph.D. candidate in Statistics

**Problem**
[Important] Education appears before the quantitative internship and research experience.

**Why**
A recruiter scanning for quantitative experience encounters the education entries before the work most directly relevant to that direction. Moving Experience earlier would make the internship and research work visible sooner.

**How to change it**
Move the Experience section above Education without changing the entry text.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The Sunrise Bakery entry is the clearest departure from the résumé’s quantitative focus.

**Why**
The store-management role draws attention away from the quantitative internship and research work. Keeping its current two-bullet detail gives that less relevant experience more space than a quant-focused version needs.

**How to change it**
For a quant-focused version, shorten the entry to a single line or remove it.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line attributes the reduction in unsold bread to the stock counts and supplier orders without establishing that they caused it.

**Why**
Those practices could reduce waste if overordering was a substantial cause, but the line does not establish that. Changes in demand, production, or other operations could also explain the reduction, so a reader may question the attribution.

**How to change it**
If the counts and orders were shown to drive the reduction, retain the attribution; otherwise report the 12%-to-7% change without attributing it to those actions. Lead with the reduction so it is not buried after the methods.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The line attributes the Sharpe-ratio increase to the signal without showing that the backtest establishes that causal comparison.

**Why**
A before-and-after Sharpe comparison alone does not show that the signal caused the increase. Without a suitable signal-on versus signal-off comparison using consistent portfolio construction and costs, and an assessment of uncertainty and robustness, a reader may discount the attribution.

**How to change it**
If the backtest included the suitable comparison, describe it; otherwise replace the attribution with the stated comparison: the desk book’s Sharpe ratio was 1.5 with the signal versus 1.1 in the comparison.

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] The Diebold–Mariano tests do not establish the claimed forecast gain over a nested baseline.
2. [Important] The line does not give the size of the forecast gain being tested.

**Why**
1. Standard Diebold–Mariano tests are generally not valid for comparisons against a nested forecast model without adjustment. Testing across 30 indices also raises dependence and multiple-comparison concerns, so a reader cannot treat these tests as confirmation of a general gain.
2. A reader can see that a comparison was tested, but cannot tell whether the measured improvement was material. The test and the index count do not substitute for the size of the gain or the metric used to measure it.

**How to change it**
1. If run, name an appropriate nested-model procedure, such as a Clark–West test or suitable bootstrap, and say how dependence and multiple comparisons were addressed; otherwise soften or remove the confirmation claim.
2. Replace “forecast gain” with [measured forecast-error improvement versus the nested HAR-RV baseline], using the result and metric actually reported.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] The opening verb uses the wrong tense for a completed internship and makes the construction ungrammatical.

**Why**
“Joining” sets up an opening phrase that does not connect grammatically to “built.” A reader has to work through the long introductory construction before reaching the feature-store result.

**How to change it**
Recast the opening so the completed actions use past-tense verbs, including changing “Joining” to “Joined,” and make “built” part of the same grammatical construction.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the usual annualization calculation.
2. [Important] The line gives no reported annualized Sharpe value, so the calculation is not evidence of an outcome.
3. [Polish] The phrase “before reporting it to the desk” describes a routine step rather than a meaningful result.

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
[Important] Seeds and configuration files alone do not establish that every run is reproducible.

**Why**
On a shared cluster, reproducibility can also depend on the software environment, random-number generators and their stream assignments, and nondeterministic parallel or numerical operations. The claim could hold if these factors were controlled or captured, but the line does not say that.

**How to change it**
If the full environment and random-stream setup were controlled and recorded, specify that; otherwise soften the claim to say that each run’s seed and configuration were recorded.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The personal possessive “my” adds no information and does not fit the résumé’s phrase-style lines.

**Why**
The possessive shifts the line into a first-person construction without clarifying who proved the result. Removing it keeps the accomplishment in the résumé’s established style.

**How to change it**
Replace “my proof” with “the proof” or omit “my proof.”

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The entry reads as a mixed task list, burying the research work among teaching and operational duties.
2. [Important] The download figure does not clearly identify the package as what was downloaded.

**Why**
1. The package is a clear research accomplishment, but cluster maintenance, reading-group organization, and grading compete with it for attention. A reader scanning the entry may miss the work most relevant to the research profile.
2. After a list of other activities, a reader has to infer that the 3,000 downloads belong to the package. That makes the evidence for the package’s reach less immediate.

**How to change it**
1. Separate the package accomplishment from the unrelated responsibilities, or remove the lower-priority duties from this entry.
2. Move the download result next to “open-source R package” and replace “which” with “the package”; cut the unrelated cluster, reading-group, and grading duties from this line or place them elsewhere.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The stated percentage is wrong: the reduction from 0.20 to 0.15 is 25%, not 33%.
2. [Important] The line does not identify which forecast-error metric the values measure.

**Why**
1. The error falls by 0.05 from an original 0.20, and 0.05 divided by 0.20 is 0.25. A reader checking the arithmetic may doubt the accuracy of the result.
2. Without the metric, a reader cannot tell what forecasting property improved or compare the result with other forecasting results. The values alone do not make the performance change interpretable.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [the error metric used] and, if needed to identify the comparison, add [the evaluation set or period].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change from 52% to 58% is a 6-percentage-point increase, not a 6% increase.
2. [Important] The line repeats the temporal convolutional model named in the preceding bullet.

**Why**
1. The relative increase from a starting hit rate of 52% is about 11.5%; the stated 6% matches the absolute difference in percentage points. Calling it 6% gives a reader the wrong interpretation of the result.
2. The repeated method adds no new information after the preceding bullet has already identified the model. It takes space that could help the reader focus on the hit-rate result.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points,” matching the 52%-to-58% change.
2. Cut “with a temporal convolutional model” from this bullet.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] “Cut validation leakage” is unclear because the 0.02 figure describes a score gap, not an amount of leakage.
2. [Important] The 0.02 score gap is uninterpretable without the scoring metric and whether the gap is absolute or relative.

**Why**
1. A reader cannot tell from the line how leakage was measured or how much it fell. The stated gap between validation and leaderboard scores does not, by itself, quantify leakage reduction.
2. A reader cannot tell what the 0.02 represents or judge its size without knowing the metric and scale. Naming both would make the reported change comparable and meaningful.

**How to change it**
1. Replace “Cut validation leakage” with the concrete action—switching to time-grouped folds—and describe the 0.02 score-gap result without calling it a reduction in leakage.
2. Clarify the phrase with [the scoring metric] and [whether the 0.02 gap is absolute or relative].

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.”

**Why**
A spelling error in a skills label can distract a reader and make the line look insufficiently checked. The intended term is clear from the misspelling.

**How to change it**
Replace “econometircs” with “econometrics.”

## What already works

- “Cut the signal’s daily turnover from…”: Shows the trade-off between reducing turnover and preserving gross returns.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: Pairs a named evaluation metric with a direct baseline comparison.

## Reviewer 3

# Resume review

**Target role inferred from the resume:** quantitative researcher, likely focused on systematic trading or financial time series. Without a job description, I can’t reliably judge role-specific keyword coverage or company fit. I’ll focus on what the resume itself signals.

**Bottom line:** You have strong, relevant quantitative experience and several unusually concrete results. Fix the Sharpe-ratio error and the forecast-improvement arithmetic before sending this anywhere. Then improve the ordering and clarity so the quant-research story is what a reader sees first.

## Highest-priority changes

1. **Remove or correct the Sharpe annualization bullet.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization; it is normally scaled by the square root of the number of trading days. As written, this is a serious technical credibility problem, especially on a quant resume.
2. **Correct the forecast-error percentage.** A change from 0.20 to 0.15 is a 25% reduction relative to 0.20, not 33%. Check the underlying metric and correct the stated percentage—or remove it if the numbers do not support it.
3. **Fix the dangling construction in the feature-store bullet.** Its opening participial phrase does not connect cleanly to the main clause, making a strong technical achievement harder to understand.
4. **Fix the misspelling in Skills.** “econometircs” should be corrected; a misspelled methods keyword can undermine polish and keyword matching.
5. **Make the quant experience visible before the unrelated current role.** The first listed job is Assistant Store Manager, which may lead a recruiter to question your current direction before they reach your quant internship. Keep the role truthful, but consider separating non-quant work from research experience or otherwise making the relevance hierarchy clearer.

## Review by section and bullet

### Header and education

- **Contact details:** Make sure the portfolio link is real, working, and points to relevant work. The supplied address appears to be a placeholder; if it is only anonymized here, disregard this.
- **Education:** The Ph.D. and mathematics B.S. are directly relevant. Consider adding a concise research area or dissertation topic if it strengthens the connection to financial forecasting or statistical modeling. The resume currently makes the reader infer that connection from the experience and project sections.
- **Education placement:** Leading with education is reasonable for a Ph.D. candidate, but the resume’s first work experience is unrelated to quant research. Consider how the top third of the page can signal your target role sooner.

### Sunrise Bakery — Assistant Store Manager

- **Opening-shift/team bullet:** The team size and budget responsibility help establish leadership, but “keeping the store within its weekly labour budget” does not say whether you met, improved, or simply monitored the budget. Clarify the result if you have a defensible measure. This is also less relevant than your research work, so keep it concise.
- **Stock-count/supplier-order bullet:** The reduction from 12% to 7% is a useful, concrete result. Clarify what period or measurement the percentages cover and what “unsold bread” is measured against, so the result is interpretable. This is the stronger of the two bakery bullets.

### Northpeak Capital — Quantitative Research Intern

This is the most important experience section for the inferred target role. Keep its strongest, technically credible material prominent.

- **Order-book signal and Sharpe bullet:** Strong relevance and a clear after-costs, out-of-sample claim. Make sure you can explain how the 18-month test was constructed, what the Sharpe figures represent, and what your individual contribution was. The claim is substantial enough that a technical interviewer is likely to probe it.
- **Turnover and slippage bullet:** Strong evidence of attention to trading costs. Clarify what “keeping 90% of gross returns” means and ensure its measurement is consistent with the first bullet’s after-costs result.
- **Diebold–Mariano test bullet:** The statistical validation is relevant. Be ready to explain the loss differential tested, how the baseline was defined, and whether you addressed testing across 30 indices. If available and accurate, the significance or robustness result would make the claim easier to assess.
- **Feature-store bullet:** The underlying work—point-in-time data, multiple venues, late-print deduplication, and reuse—is valuable. Fix the sentence construction, and make sure the reader can distinguish your contribution from the team’s broader work.
- **Sharpe annualization bullet:** Remove or correct it. As written, the calculation is wrong under standard annualization, and its presence raises doubts about the surrounding performance metrics.
- **Research-wiki/onboarding bullet:** This is a useful supporting example of documentation and team impact, but it is less important than the modeling and data work. Keep it only if space allows, and be precise about how the next cohort used it.

### Ridgeway University — Research Assistant

- **Simulation-pipeline bullet:** Strong engineering and reproducibility evidence. Keep it prominent among the research-assistant bullets. Be prepared to explain the before-and-after runtime and what changed in the pipeline.
- **Variance-bound/paper bullet:** A theoretical result is a useful differentiator, and the under-review status is appropriately disclosed. Make sure the wording accurately reflects your authorship and the paper’s current status. Consider giving the work clearer publication or research visibility rather than leaving all the context inside an experience bullet.
- **Teaching bullet:** The scale and rating are concrete, but teaching is less relevant to a quant-research role than your research and engineering work. Keep it if you want to signal communication or it fits your space; otherwise, prioritize more directly relevant research details.
- **R-package/other-responsibilities bullet:** This combines several separate activities—package release, cluster maintenance, reading-group organization, and grading—so the key accomplishment gets buried and the final “which” clause is difficult to follow. Separate or prioritize the items, and make clear that the 3,000 downloads refer to the package. The adoption figure is worth preserving if verifiable.

### Projects

#### Volatility Forecasting Study

- **QLIKE bullet:** A 7% out-of-sample improvement is relevant. Specify enough about the evaluation setup to distinguish it from the internship work and to make the comparison reproducible in discussion.
- **Forecast-error bullet:** The stated 33% improvement conflicts with the listed values; correct that arithmetic or verify that the values and percentage use different definitions. As written, they do not agree.
- **Directional-hit-rate bullet:** A move from 52% to 58% is a six-percentage-point increase, not a six-percent increase. Also explain the comparison baseline and evaluation setup sufficiently to make the result meaningful. This bullet and the QLIKE bullet may describe the same experiment; make the distinct contribution of each clear rather than repeating the model and data context.

#### Kaggle Market Prediction Competition

- **Placement bullet:** This is a strong, easy-to-scan result. The rank and “top 2%” are consistent: 41st out of 2,900 is approximately the top 1.4%.
- **Time-grouped-folds bullet:** The validation/leakage point is useful, but be precise about what the 0.02 gap measures and how the change addressed leakage. Don’t claim that the change eliminated leakage unless you can substantiate that.
- **Feature-selection bullet:** The reduction from 900 candidates to 300 without a validation-score loss is a clear engineering result. Keep it if it adds a distinct contribution beyond the ranking bullet.

### Skills

- Correct the spelling of **econometrics**.
- “Programming” groups Python and R with Kafka, which is better understood as a platform or technology than a programming language. Group skills so the category labels accurately describe their contents.
- Add tools such as SQL, C++, Git, or Linux **only if you have used them and can discuss them**. They may matter for some quant-research roles, but the lack of a job description means I can’t say which are required here.
- Consider whether every listed skill is supported by experience or a project. Kafka currently appears only in Skills, so a reader may ask what you used it for.

## Role-fit lens

- **Likely first technical reader:** A quant-research hiring manager or senior researcher. They will care about statistical rigor, out-of-sample testing, transaction costs, data leakage, and whether you can explain your personal contribution to the results.
- **What the resume already signals well:** Statistics training, empirical market work, order-book data, transaction-cost awareness, reproducible computing, and a strong blend of theoretical and applied research.
- **What may be less clear:** Your current professional direction, the boundary between your work and your teams’ work, and the experimental details behind several performance claims.
- **Likely competing profile:** A statistics, computer-science, engineering, or finance graduate with direct trading research and stronger evidence of production tools. Your differentiators are the Ph.D. training, theoretical result, and demonstrated market-data work. Your resume does not yet establish experience with certain tools or production systems; add those only if true.

## Reader-by-reader assessment

- **Recruiter glance — Maybe, leaning forward:** The Ph.D. and quant internship are credible signals, but the current bakery role appears first and the target role is not stated near the top.
- **HR screen — Likely screen for an entry-level quant-research role:** The education and internship align well, though an HR reader may not know how to weigh the unrelated current role.
- **Hiring manager — Maybe, with interview potential:** The internship has strong, role-relevant substance. The incorrect Sharpe calculation and forecast percentage would be major concerns until resolved.
- **Technical reviewer — Interested but likely to probe:** The methods and results are promising, but expect detailed questions about backtest design, data timing, costs, baseline comparisons, and the inconsistencies noted above.

## Provisional scorecard

This is a **resume-quality estimate, not a score against a specific job description**.

| Area | Estimate | Main reason |
|---|---:|---|
| Target-role signals | 7/10 | Strong quant content, but no explicit positioning near the top |
| Skills section | 6/10 | Relevant core skills; typo and category issue; tool depth is unclear |
| Bullet quality | 6/10 | Strong metrics, offset by incorrect arithmetic and a few unclear claims |
| Research credibility | 7/10 | Good statistical and market evidence; publication status is disclosed |
| Narrative and ordering | 6/10 | Relevant experience is present but not surfaced as clearly as it could be |
| Visual presentation | Not assessable | Plain text does not show page length, spacing, or layout |

## Changes to make first

### High impact

1. **Fix the annualized-Sharpe claim and verify the related reported Sharpe figures.** This is the most serious technical credibility issue.
2. **Correct the 0.20-to-0.15 percentage claim and the hit-rate percentage wording.** Internal arithmetic consistency matters particularly on a quantitative resume.
3. **Move the quant-research story ahead of the unrelated current role.** Help a recruiter identify your direction before they make assumptions from the first job listed.
4. **Repair the feature-store and R-package bullet construction.** Both contain valuable work that is currently obscured by sentence structure.
5. **Add a brief, specific positioning statement only if it clarifies your quant focus.** The resume otherwise makes readers infer your intended role.

### Medium impact

1. Clarify the measurement period or denominator for the bakery waste result.
2. Clarify what “90% of gross returns” means in the turnover result.
3. Make the distinction between the forecasting project’s three results clearer.
4. Give the under-review paper and research focus enough context for readers to recognize their relevance.
5. Reorganize Skills so categories are accurate and the most relevant verified skills are easiest to find.

### Lower impact

- Keep or remove teaching and onboarding documentation based on space and the role’s emphasis on communication.
- Add other tools only if you can substantiate them; do not add keywords just to anticipate an unknown job description.

**Verdict:** Fix the technical and arithmetic errors first, then improve the ordering and bullet clarity. You already have strong material for a quant-research application; the main risk is that avoidable credibility and presentation problems distract from it.

## Reviewer 4

Your strongest material is the Northpeak research and the quantified research results. Before polishing, fix the **three claims that could undermine credibility**: the Sharpe annualization, the Diebold–Mariano test, and the forecast-error percentage. I’m assuming you’re targeting quant-research roles; if not, the ordering advice may differ.

### Header and education
- **Contact line:** Check that the code URL resolves to work you want employers to see. Otherwise, remove it.
- **Ph.D.:** Keep the expected completion date, but ensure it still reflects your current plan. The education entries otherwise need no substantive change.

### Experience
**Sunrise Bakery**
- **Opening shifts/team:** Keep the leadership evidence. If applying to quant roles, shorten this entry before cutting technical detail elsewhere; its relevance is management, not research.
- **Unsold bread:** Keep the before-and-after measure. Specify the period over which it fell if that makes the result more credible.
- **Placement:** Put Northpeak ahead of Sunrise for quant applications, or otherwise make the technical experience easier to find first.

**Northpeak Capital**
- **Sharpe 1.1 to 1.5:** Clarify whether this is the *desk book’s* Sharpe or the tested strategy’s, and how a backtested signal was incorporated into the book. That distinction matters more than the size of the result.
- **Turnover/slippage:** Keep the trade-off between lower costs and retained returns. Check that turnover, returns, and slippage all use clearly defined, consistent measurement periods.
- **Diebold–Mariano tests:** Recheck the statistical claim. Standard DM testing may not be appropriate if the models are nested; say only what the test design supports.
- **Feature store:** Change the opening construction: “Joining … built” currently makes the action, rather than you, the subject. Keep the point-in-time handling and later reuse; they show research and engineering value.
- **Sharpe annualization:** Correct this and verify what was reported to the desk. Under the usual assumptions, daily Sharpe is annualized by multiplying by **√252**, not 252. Because this says the incorrect figure was reported, treat it as a factual issue, not a wording fix.
- **Documentation:** Keep it if space allows. The onboarding use makes otherwise routine documentation meaningful.

**Statistical Learning Lab**
- **Simulation pipeline:** Keep the runtime reduction and reproducibility detail.
- **Variance bound:** Keep the contribution, but verify the paper’s current review status and make your individual contribution unmistakable.
- **Teaching:** Keep if teaching or communication is relevant; it is a candidate to shorten for a research-focused one-page resume.
- **R package/other duties:** Separate or cut the cluster, reading-group, and grading duties. They bury the package and its 3,000-download result in an overfull bullet.

### Projects
**Volatility Forecasting Study**
- **QLIKE:** Keep the baseline comparison, and identify the out-of-sample evaluation period or split if space permits.
- **Error 0.20 to 0.15:** Correct the arithmetic: that is a **25% reduction** relative to 0.20, not 33%. Identify the error metric, and distinguish this result from the QLIKE result.
- **Hit rate 52% to 58%:** Call this a **6-percentage-point** increase, not an unqualified 6% increase. Consider cutting this bullet if it repeats the same model setup without adding an independently important outcome.

**Kaggle competition**
- **Placement:** Keep; the private-leaderboard rank is clear evidence of performance.
- **Leakage:** Keep, but be precise about what was leaking and whether the time-grouped folds addressed it. “Closed a gap” alone does not establish that leakage was eliminated.
- **Feature selection:** Keep if you have room; it shows your own contribution within the team.

### Skills
- **Methods:** Fix the typo in “economit rcs.” Retain only methods you could discuss confidently in an interview.
- **Programming:** Reconsider whether Kafka belongs under “Programming”; categorize it accurately, and keep it only if you have meaningful hands-on experience.
