# case-6

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Built a short-horizon order-book imbalance signal for liquid index futures that raised the
desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after
costs.
- Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping
90% of gross returns and lowering estimated slippage by a third.
- Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano
tests across the 30 indices.
- Joining 120 microstructure features point-in-time across six venues, deduplicating late
prints and versioning each schema, built a feature store the team reused in two later
projects.
- Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to
the desk.
- Documented the backtest assumptions, transaction-cost model and known failure regimes in the
desk’s research wiki, which the next intern cohort used to onboard in their first week.
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021
- Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks
other students relied on.
- Derived a variance bound for a sparse regression estimator that tightens the previous bound
by a log factor; it is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets
and earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while
maintaining the lab’s shared cluster, organizing the weekly reading group and grading for
two courses, which was downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility
features and an asymmetric loss.
- Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with
a temporal convolutional model.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features,
finishing in the top 2% of the private leaderboard.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between
local validation and leaderboard scores.
- Wrote the team’s feature-selection script using permutation importance, trimming 900
candidate features to 300 without losing validation score.
SKILLS
Programming: Python, R, PyTorch, Kafka
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

## Highest-priority fixes

1. **Correct the Sharpe annualization claim.** Multiplying a daily Sharpe ratio by 252 is mathematically wrong under the standard convention; it is typically scaled by the square root of the number of trading days. As written, this undermines confidence in the other performance figures. Correct the calculation and verify whether the Sharpe figures elsewhere are annualized consistently—or remove this bullet.
2. **Fix the percentage calculation in the forecasting project.** A change from 0.20 to 0.15 is a **25% reduction** when measured against the starting value, not 33%. Also identify what “forecast error” measures.
3. **Resolve unclear or potentially overstated results.** In particular, make clear how the internship signal affected the desk book, what “90% of gross returns” means, and what data and evaluation procedure support the project metrics.
4. **Correct the malformed feature-store bullet and typo.** The bullet beginning “Joining” has a grammatical construction problem; “econometircs” is misspelled.

## Header and education

- **Contact details:** Make sure the code link is a direct, working URL and that the contact information is current. A portfolio or research link is useful for quantitative roles if it contains relevant work.
- **Ph.D. line:** The expected completion date is helpful. Consider adding a research area or dissertation focus if it strengthens your fit for the roles you’re targeting; otherwise, the degree and dates are clear.
- **B.S. line:** Clear as written. Keep the date and location formatting consistent with the Ph.D. entry.

## Experience

### Northpeak Capital

- **Order-book signal bullet:** This is compelling, but clarify whether the 1.1-to-1.5 Sharpe change is the signal’s contribution to the desk book or a comparison between two backtests. Specify that the ratio is annualized and define the out-of-sample period and cost assumptions. Also ensure the result is approved for disclosure.
- **Turnover and slippage bullet:** Define what “90% of gross returns” refers to and how slippage was estimated. Make sure the return, turnover, and slippage comparisons use the same baseline and period.
- **Diebold-Mariano test bullet:** Clarify what forecast was tested and what “gain” means. If you report significance across 30 indices, consider whether overlapping observations or multiple comparisons affect the tests. This supports a forecast comparison, not necessarily the trading performance claim in the first bullet.
- **Feature-store bullet:** Fix the sentence’s grammatical construction: the opening “Joining” does not connect cleanly to the stated result. Preserve the useful specifics—point-in-time data, six venues, and reuse—but distinguish your work from the team’s and make clear whether the store was used in production or research.
- **Sharpe annualization bullet:** Correct or remove it, as noted above. In its current form, it is a serious credibility problem.
- **Documentation bullet:** The onboarding result is useful if you can substantiate it, but “used to onboard in their first week” is awkward and may overstate the documentation’s role. Keep the claim only if you know how it was used.

### Ridgeway University research assistant role

- **Pipeline ownership bullet:** “Owned” and “relied on” are broad. Add scope or a concrete outcome if you can—such as what the pipeline enabled or what reproducibility checks covered. Otherwise, this bullet is less informative than your research and teaching achievements.
- **Variance-bound bullet:** This is a strong research contribution. Clarify your role in the work and use the paper’s exact publication status. “It is now Section 3” is less meaningful to most readers than the contribution and its status.
- **Teaching bullet:** Strong and specific. Make clear whether the 4.8/5 rating is a student evaluation and, if relevant, what it was measured out of or over what period.
- **R package and lab duties bullet:** This combines several different responsibilities, and “which” has an unclear referent. Separate the package achievement from the cluster, reading-group, and grading duties, or prioritize the most relevant parts. Clarify that the 3,000 downloads refer to the package and indicate the time period or source if available.

## Projects

### Volatility Forecasting Study

- **QLIKE bullet:** Specify the evaluation setup sufficiently to show that the result is genuinely out of sample, especially the train/test split and whether results are aggregated across indices. This is a strong metric if the comparison is reproducible and clearly defined.
- **Forecast-error bullet:** Correct the 33% calculation and name the error metric. Also clarify the comparison baseline: the first bullet already describes a model trained on realized-volatility features, while this bullet describes adding those features.
- **Directional-hit-rate bullet:** The move from 52% to 58% is a six-percentage-point increase, not a six-percent increase. Define what direction is being predicted and whether this is evaluated on the same out-of-sample period. The temporal convolutional model is mentioned elsewhere, so avoid repeating model details unless this bullet adds distinct information.

### Kaggle competition

- **Placement bullet:** Strong result. Confirm that “41st” and the top-2% figure refer to the private leaderboard, and retain the competition’s exact official name if possible.
- **Validation-fold bullet:** Switching to time-grouped folds is a good methodological detail. Be careful with “cut validation leakage”: a smaller gap between local validation and leaderboard scores does not by itself prove leakage was reduced. Describe the validation change and the observed gap accurately.
- **Feature-selection bullet:** The reduction from 900 candidates to 300 is clear. Clarify that the validation score was preserved under the time-grouped evaluation, if that is the comparison you mean, and avoid implying that leaderboard results were used to guide feature selection.

## Skills

- **Programming line:** Kafka is a data-streaming tool rather than a programming language. Group it with tools or technologies rather than programming languages, and keep the categories accurate.
- **Methods line:** Correct the spelling of “econometrics.” The listed methods are relevant, but broad terms are most useful when the experience or projects clearly demonstrate them; make sure each is a method you can discuss in detail.

Overall, the resume has strong quantitative evidence, but the mathematical error and a few ambiguous performance claims should be addressed before you send it. Prioritize accuracy and clear evaluation details over adding more metrics.

## Reviewer 2

# Résumé critique

**Target role inferred from the résumé:** Quantitative researcher, likely focused on systematic strategies, market microstructure, or volatility forecasting.  
**Important limitation:** There is no job description, target employer, or original résumé file to compare against. I can assess role fit and internal consistency, but not verify claims, judge page layout, or calculate a true job-specific ATS match. I have not searched the web.

## Overall assessment

You have relevant quantitative research experience, strong methods, and several concrete results. The main problem is **credibility risk from incorrect or ambiguous quantitative claims**. In particular, the Sharpe annualization and forecast-error arithmetic need to be resolved before you send this résumé. A few bullets also repeat the same project result or bundle unrelated work together, making your contributions harder to evaluate.

**Provisional score: 68/100.** Treat this as a résumé-only diagnostic, not a score against a specific job description. Correcting the quantitative issues and tightening the project bullets would make a substantial difference.

---

## Likely reader and role fit

A likely first technical reader is a quantitative research lead or portfolio researcher deciding whether your statistical work can translate into trading research. They will look for sound validation, careful handling of costs and leakage, and evidence that your results hold up outside the training sample. Your experience covers many of those topics, but the visible calculation errors may cause them to question other results.

A likely competing candidate would have direct quant-research experience, rigorous backtesting, and strong programming skills. Your differentiators are the combination of market-microstructure work, statistical research, teaching, and a strong competition result. Your main potential gaps are limited visible industry tenure and no clearly stated production deployment or live-trading evidence. Those are possible gaps, not requirements I can confirm without a job description.

## Highest-priority changes

1. **Resolve the Sharpe annualization claim.** Multiplying a daily Sharpe by 252 is not the standard annualization method; under the usual assumptions, the multiplier is √252. More importantly, confirm that the reported Sharpe results use a consistent annualization convention. The current line is likely to prompt questions about the validity of the backtest.
2. **Reconcile the forecast-error arithmetic.** A change from 0.20 to 0.15 is a 25% reduction, not 33%, using the stated values. Check the underlying metric and correct the numbers or the claimed percentage.
3. **Distinguish contribution from attribution.** The increase in the desk book’s Sharpe is a large claim for a short internship. Make sure the résumé clearly supports the benchmark, test period, cost assumptions, and your signal’s contribution to that result.
4. **Reduce redundancy in the volatility project.** Three bullets describe results from the same model and dataset. Keep the distinct findings only if each adds useful evidence, and make their evaluation setup consistent and easy to understand.
5. **Fix the skills typo and improve skill grouping.** “econometircs” is misspelled. Also make the skills section easier to scan by distinguishing programming tools from methods; list proficiency only where you can substantiate it.

---

## Five-perspective read-through

### ATS / keyword scan

Without a job description, this is a **role-based proxy**, not a true ATS match-rate calculation. Your résumé already contains useful terms for quant research, including time-series methods, Python, R, PyTorch, futures, order-book signals, backtesting, transaction costs, volatility forecasting, and high-dimensional statistics.

Potentially relevant terms not established here include **C++**, production research systems, portfolio construction, risk management, and live execution. Add any only if they accurately describe your experience and match the actual role. Kafka appears in Skills but is not substantiated in the experience bullets; consider whether it belongs there or needs context.

### Recruiter glance

**Verdict: Maybe / likely forward if the quantitative claims are sound.** Your Ph.D. in Statistics and quant internship are directly relevant. There is no summary or tagline, so the first read relies on education and job title. The most concerning first-glance issue is the Sharpe annualization line, which could make a recruiter or technical reviewer question the rest of the metrics.

### HR screen

**Verdict: Likely phone screen, contingent on accuracy.** The education and experience suggest a relevant background, and the bullets show measurable work. The résumé does not yet make a concise case for the through-line connecting statistical research, market data, and trading research. A short profile could help if you are applying across different kinds of quant roles, but it is not a substitute for correcting the claims.

### Hiring manager

**Verdict: Maybe, with interview potential after corrections.**

1. The Northpeak internship and market-data work are the strongest evidence of role fit.
2. The incorrect annualization and forecast-error arithmetic are immediate credibility concerns.
3. The hiring manager may ask how the strategy was evaluated, how transaction costs and leakage were handled, and which parts you personally implemented.

**Likely first interview question:** How did you validate the reported Sharpe improvement and ensure it was not driven by a backtest or annualization artifact?

### Technical reviewer

**Truthfulness:** Cannot verify any claim from the résumé alone. Two numerical claims are internally inconsistent as written: the Sharpe annualization and the 0.20-to-0.15 forecast-error reduction.  
**Consistency:** The project bullets appear related but do not explain whether the metrics use the same data splits, baseline, or evaluation period. The package bullet has an unclear “which” reference.  
**Provenance:** The paper under review at JASA is appropriately identified as under review, but add authorship or contribution context if it is important to your candidacy. Do not imply acceptance or publication.

---

## Section-by-section and bullet-by-bullet feedback

### Header and education

- **Contact line:** The example-domain email and URL look like placeholders. If they are anonymized for this review, no change is needed; otherwise, use working professional contact details.
- **Ph.D. entry:** Keep the expected completion date accurate and current. Because the expected date is May 2026, make sure the status and date remain correct when you submit.
- **B.S. entry:** The education is relevant. A GPA, honors, or coursework is optional; include it only if it strengthens the application and is appropriate for the roles you are targeting.

### Northpeak Capital — Quantitative Research Intern

- **Order-book signal / Sharpe result:** This is your strongest industry bullet, but it makes a large causal claim. Clarify the comparison point and evaluation setup, and verify that the 1.1 and 1.5 figures use the same annualization convention, costs, and portfolio definition. Be precise about what “over 18 months of out-of-sample backtest” means.
- **Turnover and slippage:** Useful evidence of cost-aware research. Clarify how turnover and slippage were calculated and what the “90% of gross returns” comparison refers to. Ensure these figures are consistent with the first bullet’s cost model.
- **Diebold–Mariano tests:** Relevant technical validation, but “standard” does not say whether you addressed repeated testing across 30 indices or dependence in the observations. Make clear what forecast comparison was tested and how you interpreted significance.
- **Feature-store bullet:** The opening construction is awkward, and the reader may not know which work you personally performed versus what the team delivered. Clarify your contribution to point-in-time joins, late-print handling, schema versioning, and the store’s reuse. “Two later projects” is useful evidence, but say enough to establish that the feature store was actually adopted.
- **Daily Sharpe annualization:** This is not a research achievement as currently described, and multiplying a daily Sharpe by 252 is not standard annualization. Verify the calculation and correct the underlying analysis and any affected results. Unless this bullet refers to a different, defensible calculation, remove it; as written, it damages credibility.
- **Documentation and onboarding:** Good evidence of research practice and knowledge transfer. The “which” clause is slightly ambiguous; ensure it is unmistakable that the wiki documentation helped the next intern cohort. This is lower priority than the quantitative corrections.

### Ridgeway University — Research Assistant

- **Simulation pipeline:** “Owned” signals responsibility, but the bullet does not show what you improved or delivered. Add a concrete outcome if one exists; otherwise, it is less compelling than your other research evidence.
- **Variance bound / JASA paper:** Strong technical work and a clear under-review status. Clarify your authorship or specific contribution if it is not obvious elsewhere. The bound’s result will matter most to technical readers, so be prepared to explain what the improvement means.
- **Teaching:** Clear scope and outcome. Retain if teaching is relevant to the roles or helps show communication skills; it may be lower priority on a space-constrained industry résumé.
- **R package / other duties:** This bullet combines the package, cluster maintenance, reading-group organization, and grading, making the main accomplishment difficult to identify. Separate or prioritize the material. The 3,000-download claim is useful, but make sure it refers clearly to the package and is supportable.

### Projects

#### Volatility Forecasting Study

- **QLIKE result:** A useful out-of-sample result. Clarify the evaluation setup sufficiently to distinguish genuine out-of-sample performance from tuning or selection on the test period.
- **Forecast-error result:** The stated change from 0.20 to 0.15 is a 25% reduction, not a 33% reduction, based on those numbers. Check whether one of the values or the percentage is wrong, and use a consistent definition of forecast error.
- **Directional hit rate:** A change from 52% to 58% is a gain of six percentage points. Avoid describing it ambiguously as a 6% increase. It also repeats the model and dataset from the first bullet, so keep it only if it shows a distinct and useful evaluation dimension.

Across the three bullets, establish whether QLIKE, forecast error, and directional hit rate were measured on the same test data and against the same model version. Otherwise, the results may look selectively presented.

#### Kaggle Market Prediction Competition

- **Competition placement:** A strong, easy-to-understand result. “Top 2%” is broadly consistent with 41st of 2,900; verify the placement and specify the private leaderboard only if that is the official ranking.
- **Time-grouped folds:** Strong evidence of understanding leakage. Clarify what the 0.02 gap represents and ensure “cut validation leakage” accurately describes the effect of changing the folds.
- **Feature selection:** Relevant implementation work. Explain the validation measure behind “without losing validation score” if needed for clarity, and ensure the reduction from 900 to 300 features is not redundant with the prior competition bullet.

### Skills

- Correct the spelling of **“econometircs.”**
- Separate tools from statistical methods so a reader can scan your technical toolkit quickly.
- Consider whether Kafka is a meaningful qualification for your target roles. It is not otherwise evidenced in the résumé, so a reviewer may ask how you used it.
- Add other languages or methods only if you can substantiate them; do not add common quant keywords merely to match a presumed filter.

---

## Provisional scoring

| Dimension | Score | Weight | Notes |
|---|---:|---:|---|
| ATS keyword match | 7/10 | 15% | Good role-relevant terms; no job description for an actual match calculation. |
| Summary | 6/10 | 10% | No summary; direct experience partly establishes fit. |
| Skills section | 6/10 | 10% | Relevant content, but typo and grouping need attention. |
| Bullet quality | 6.5/10 | 25% | Strong evidence, undermined by arithmetic, attribution, and repetition issues. |
| Publications | 5.5/10 | 10% | Under-review paper is relevant; limited publication detail. |
| Narrative coherence | 7.5/10 | 15% | Strong quantitative thread across research and projects. |
| Page fill and visual | Not assessable | 5% | Plain text does not show layout or page count. |
| Credibility signals | 4.5/10 | 10% | Good metrics, but visible numerical problems need resolution. |

The total is **provisional** because layout cannot be assessed and there is no target job description. The most important score improvement is not adding keywords; it is making the quantitative claims internally consistent and defensible.

## Interview likelihood

These are rough résumé-based estimates, not predictions about a particular employer.

| Reader | Estimated likelihood | Main factor |
|---|---:|---|
| ATS | 70% | Relevant quant-research vocabulary, but no job description to compare against. |
| Recruiter | 65% | Relevant Ph.D. and internship; the metric inconsistency may raise doubts. |
| HR screen | 70% | Relevant education and experience, though the résumé could state its role focus more clearly. |
| Hiring manager | 55% | Strong research potential, balanced against questions about backtest rigor and numerical accuracy. |
| Technical panel | 50% | Technical substance is promising, but the Sharpe and forecast-error issues are likely to be probed. |

**Ceiling:** With the visible issues unresolved, the résumé’s quantitative claims limit confidence. Correcting them, tightening the project section, and tailoring to a specific posting could materially improve the presentation. I cannot responsibly estimate a job-specific ceiling without the job description.

## Interview bridge points

Prepare to connect these topics to systematic research without overstating direct production experience:

| Résumé topic | Connection to emphasize in an interview |
|---|---|
| Order-book signal | Point-in-time market data, signal validation, and the separation of predictive value from trading costs. |
| Turnover smoother | Translating a forecast into positions while managing implementation costs and preserving returns. |
| Feature store | Data integrity, reproducibility, and making research inputs reusable across projects. |
| Volatility model | Comparing forecasting methods on genuinely held-out data and explaining why the evaluation metric matters. |
| Sparse-regression bound | Mathematical rigor, statistical guarantees, and the ability to reason beyond empirical results. |
| Kaggle competition | Leakage prevention, time-aware validation, and disciplined feature selection. |

**Bottom line:** Fix the Sharpe and forecast-error calculations first. Then clarify the attribution and validation details in the Northpeak bullets, reduce repetition in the volatility project, and clean up the skills section. Those changes matter more than cosmetic wording adjustments.

## Reviewer 3

6 errors, 8 important, 1 polish. Errors are marked [Error]; fix those first.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold-Mariano inference does not validly confirm a forecast gain in a nested-model comparison.
2. [Important] The line does not give the size of the forecast gain or the outcome of the tests.

**Why**
1. Standard DM tests can have incorrect size for nested forecasts, so the test named here does not by itself establish a gain. Testing across 30 indices also does not establish a gain across the set unless the inference accounts for multiple comparisons.
2. A reader can see that a comparison was made, but cannot judge the size of the claimed advantage. Naming the test and the number of indices does not show its result.

**How to change it**
1. If used, name the nested-model-appropriate inference method and any multiple-testing adjustment actually applied; otherwise soften the confirmation claim.
2. Replace “Confirmed the forecast gain” with the measured forecast-error improvement versus the nested HAR-RV baseline and its test outcome [forecast-error change and test result]; keep the test and index count as supporting context.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] The opening participial phrase dangles instead of clearly connecting the feature-joining actions to building the store.
2. [Important] The reuse outcome comes after several implementation details, making the clearest evidence of value easy to miss.

**Why**
1. As written, the phrase beginning “Joining” appears to modify an unstated actor, while “built” introduces a different subject. A reader may have to pause to work out who did the joining and deduplication.
2. A scanning reader may not reach the adoption result before moving on. The implementation details are useful, but leading with reuse would make the feature store’s value more visible.

**How to change it**
1. Change the opening to “Built a feature store by joining...” and retain the relevant deduplication and schema-versioning details.
2. Move “the team reused in two later projects” to the front, then keep only the one or two implementation details that best explain the reusable feature store.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
[Error] Multiplying the daily Sharpe ratio by 252 does not correctly annualize it.

**Why**
The usual annualization for daily returns multiplies the daily Sharpe ratio by √252, not 252. That scaling assumes daily returns are sufficiently uncorrelated; serial correlation requires an annualization that accounts for it.

**How to change it**
Replace “252” with “√252” if the uncorrelated-returns assumption holds; otherwise use an annualization that accounts for serial correlation.

> Documented the backtest assumptions

**Problem**
[Important] The feature-store, annualization, and onboarding details pull attention from the internship’s signal and trading-cost results.

**Why**
The signal result, turnover improvement, and statistical validation form a clear core, but these other bullets branch away from it. The annualization bullet distracts from the research narrative, and the onboarding detail is less central.

**How to change it**
Remove the annualization bullet and shorten or cut the onboarding detail.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
[Important] “The previous bound” does not identify the comparator or setting for the log-factor improvement.

**Why**
The log-factor tightening is the central evidence of the contribution, but a reader cannot place its significance without knowing which bound or setting anchors the comparison. The claim is therefore hard to assess.

**How to change it**
Name the prior bound or the problem setting in which the improvement holds: [specific comparator or setting].

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The estimator result is the strongest research contribution, but the package, cluster, teaching, and course duties read as a mixed task list. *(no words if moved; any duty cuts save words)*

**Why**
The list of duties separates the package’s adoption evidence from the release, so a scanning reader may miss the result or its connection to the package. The strongest research contribution also risks being overshadowed by routine responsibilities.

**How to change it**
Lead with the estimator result; move the download phrase directly after “open-source R package,” and separate the package achievement from the bundled routine duties by trimming or relocating them.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The stated 33% improvement is wrong: a decrease from 0.20 to 0.15 is a 25% reduction.
2. [Important] The line does not name the forecast-error metric or say what the 0.20 value represents.

**Why**
1. The decrease is 0.05. Relative to the original error of 0.20, that is a 25% reduction, not 33%, so the stated improvement overstates the change.
2. Without the metric, a reader cannot interpret what the values measure. Without the comparison context, it is hard to tell what changed.

**How to change it**
1. Change “33%” to “25%” (or describe it as “a decrease of 0.05”).
2. Replace “forecast error” with [error metric], and clarify what the 0.20 value represents, such as [comparison model or prior version], if accurate.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The hit rate rose by 6 percentage points, not 6% relative to its original value. *(adds 1 word)*
2. [Polish] The temporal convolutional model detail repeats information from the first bullet and adds little here.

**Why**
1. The rate moved from 52% to 58%, a rise of 6 percentage points. Relative to the original 52% rate, the increase is about 11.5%, so “by 6%” misstates the change.
2. The first bullet already names the model type. Repeating it in this result takes space without helping the reader distinguish the contribution.

**How to change it**
1. Change “by 6%” to “by 6 percentage points”; keep the stated values “from 52% to 58%.”
2. Remove “with a temporal convolutional model.”

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] “Finishing in the top 2%” repeats the information in the rank of 41st out of 2,900.

**Why**
The rank already communicates the placement. The extra phrase takes space without adding information.

**How to change it**
Cut “finishing in the top 2%.”

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The gap closing does not establish that validation leakage was reduced or that the fold change caused the closure.

**Why**
Time grouping can block some temporal leakage but may leave other leakage paths open. The validation-to-leaderboard gap can also change because of sampling variation, distribution shift, or evaluation differences.

**How to change it**
If a controlled comparison supports the causal claim, specify the leakage path and comparison; otherwise describe the fold change and observed 0.02 gap closure without attributing the closure to reduced leakage.

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.”

**Why**
The misspelling is visible in a skills line that should make methods expertise easy to scan. It can distract a reader from the skills themselves.

**How to change it**
Replace “econometircs” with “econometrics.”

## What already works

- “Built a short-horizon order-book imbalance signal…”: Leads with a concrete performance change and gives the reader the comparison and backtest context needed to interpret it.
- “Cut the signal’s daily turnover from…”: Connects a trading-cost improvement to the performance retained, making the trade-off clear.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: Pairs a quantified outcome with an explicit out-of-sample baseline comparison.

## Reviewer 4

Your strongest material is the quantified research and trading work. Before polishing the wording, **correct the performance claims**: the Sharpe annualization and one percentage calculation are wrong as written, and the significance test needs review.

## Header and education
- **Contact line:** Replace the phone number, email, and URL if these are placeholders; make sure the code link leads to work you want an employer to assess.
- **Ph.D. entry:** Keep the expected completion date current. If your dissertation area is relevant to quant research, consider identifying it; otherwise the degree and dates are enough.
- **B.S. entry:** No change needed.

## Northpeak Capital
1. **Order-book signal:** Clarify what “desk book” includes and how the 18-month out-of-sample period was separated from development. The Sharpe increase is compelling, but readers need to know what was tested and whether the comparison is like-for-like.
2. **Turnover and slippage:** Specify whether turnover is measured as a percentage of the portfolio per day and whether slippage is modeled or observed. That distinction matters when evaluating the claimed improvement.
3. **Diebold–Mariano tests:** Recheck the method. Standard Diebold–Mariano inference is generally not appropriate for a *nested* forecast comparison without accounting for nesting. State the valid test you used, or remove the significance claim until verified.
4. **Feature store:** Fix the sentence’s grammar: its opening construction does not connect cleanly to “built.” Keep the point-in-time joining and reuse details; they show valuable data-engineering rigor.
5. **Sharpe annualization:** Correct this and audit the number reported to the desk. A daily Sharpe is conventionally multiplied by **√252**, not 252, subject to assumptions about return dependence. This is a material credibility issue, not a wording issue.
6. **Documentation:** Keep it, but consider shortening it if space is tight. The earlier bullets carry more weight for a quant-research application.

## Research assistant
1. **Simulation pipeline:** Add a concrete indication of its scale or the checks you owned. “Other students relied on” is less persuasive than a specific outcome.
2. **Variance bound:** Keep this prominent. Verify that “under review at JASA” is still accurate when you apply.
3. **Teaching:** Keep if teaching or communication is relevant to the roles you want; otherwise give the space to research. Check whether “graduate probability” and the 60-student figure describe the same course.
4. **R package:** Separate the package’s 3,000-download result from cluster, reading-group, and grading duties. As written, too many unrelated activities obscure the strongest achievement.

## Projects
**Volatility Forecasting Study**
1. **QLIKE result:** State how the test period and baseline were chosen. This helps establish that the 7% out-of-sample improvement is credible.
2. **Forecast error:** Correct the arithmetic: a drop from 0.20 to 0.15 is a **25% reduction** relative to 0.20, not 33%. Identify the error metric; otherwise readers cannot relate it to the QLIKE result above.
3. **Directional hit rate:** Call the move from 52% to 58% **6 percentage points**, not simply 6%, and define what “directional” means for this forecast. Consider combining or cutting this bullet if it repeats the model and dataset without adding a distinct result.

**Kaggle competition**
1. **Placement:** Keep it; 41st of 2,900 supports the top-2% claim. Name the competition if it is publicly verifiable.
2. **Validation leakage:** Clarify what was leaking and whether the revised folds were adopted before final model selection. Closing a validation–leaderboard gap alone does not demonstrate that leakage was eliminated.
3. **Feature selection:** Keep it if the script was your distinct contribution; otherwise this section may be more detailed than the higher-value research experience.

## Skills
- Correct **“econometircs” to “econometrics.”**
- Reclassify the list: Python and R are programming languages; PyTorch is a framework, and Kafka is a platform/tool. Accurate grouping makes the section easier to scan.
- Include only methods and tools you could discuss in depth in an interview.
