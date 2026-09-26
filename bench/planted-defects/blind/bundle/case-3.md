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
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its
weekly labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of
production.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4
Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
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
desk’s research wiki for future interns.
Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo
study from 3 days to 5 hours and making runs reproducible by seed.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous
bound by a log factor and is now Section 3 of a paper under review at JASA.
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
Programming: Python, R, SQL, C++, Kafka
Methods: time-series econometircs, Bayesian inference, gradient boosting, PyTorch
```

## Reviewer 1

Your resume has strong quantitative experience and several impressive measurable results. The main issues are **credibility, redundancy, prioritization, and a few technical inaccuracies**.

## Highest-priority changes

### 1. Remove the incorrect Sharpe-ratio bullet

This bullet is wrong:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

A daily Sharpe ratio is generally annualized by multiplying by **√252**, not 252. More importantly, this bullet highlights a reporting error and could seriously damage your credibility. Delete it. If the desk actually received an incorrectly annualized number, correct the result elsewhere and do not present the mistake as an accomplishment.

### 2. Fix the technical typo and wording

- `time-series econometircs` → **time-series econometrics**
- `Joining 120 microstructure features point-in-time...` → likely **Joined 120 microstructure features point-in-time...**
- “added 0.4 Sharpe” should be clarified as **increased the strategy’s annualized Sharpe by 0.40** or **produced a 0.40 incremental Sharpe contribution**, depending on what you actually measured.
- “over 18 months of out-of-sample backtest” → **over an 18-month out-of-sample backtest**
- “keeping 90% of gross returns” is ambiguous. Say whether this means retaining 90% of the original signal’s gross P&L or return.

### 3. Resolve the duplicated and potentially inconsistent project claims

The volatility project has three bullets that overlap:

- Beat HAR-RV QLIKE loss by 7%
- Cut forecast error from 0.20 to 0.15
- Improved directional hit rate from 52% to 58%

These may all be valid, but the relationship between them is unclear. Also, reducing error from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement:

\[
(0.20 - 0.15)/0.20 = 25\%
\]

Use one consistent metric and explain the experiment. For example:

- **Reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices using a temporal convolutional network and realized-volatility features.**
- **Improved directional accuracy from 52% to 58% after adding an asymmetric loss function; results were evaluated using rolling, time-ordered validation.**

Only include the error reduction if the metric is clearly defined and genuinely distinct from QLIKE.

### 4. Make the resume target-specific

For quantitative research, quant trading, or ML roles, your strongest material is:

1. Northpeak Capital
2. Volatility Forecasting Study
3. Graduate research
4. Kaggle project
5. Education
6. Bakery experience, if space permits

The bakery role is not bad, but it is currently taking space from more relevant technical work. You could either:

- Move it to an **Additional Experience** section with one bullet, or
- Keep it only if you are applying broadly or want to explain current employment.

For a quant-focused resume, reduce it to:

> **Assistant Store Manager, Sunrise Bakery** — Managed opening operations and a six-person team; reduced unsold production from 12% to 7% through improved inventory tracking and ordering.

### 5. Improve the education section

Because you are a Ph.D. candidate, education should probably appear first for research and quant roles. Add relevant details if available:

- Dissertation or research area
- Advisor
- Expected graduation date
- Selected coursework, if useful
- GPA only if strong
- Publications, working papers, or conference presentations

For example:

> **Ph.D. Candidate, Statistics**, Ridgeway University — Expected May 2026  
> Research: statistical learning, high-dimensional inference, time-series modeling  
> Dissertation: “…”

Your JASA paper should ideally be listed in a separate **Publications / Research** section rather than buried in a bullet. Do not imply acceptance. Use wording such as:

> Patel, M. et al. “Paper Title.” Manuscript under review at *Journal of the American Statistical Association*.

Only include the journal name if the submission is real and you are an author.

## Experience section: suggested edits

### Northpeak Capital

This is the strongest section, but it should be more concise and precise. I would revise it to something like:

- **Developed a short-horizon order-book imbalance signal for liquid index futures that improved annualized out-of-sample Sharpe by 0.40 over an 18-month backtest after transaction costs.**
- **Reduced daily turnover from 34% to 21% using a cost-aware position smoother, retaining 90% of gross returns and reducing estimated slippage by one-third.**
- **Validated the signal against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices.**
- **Built a point-in-time feature store from 120 microstructure features across six venues, handling late-print deduplication and schema versioning; reused in two subsequent projects.**
- **Documented backtest assumptions, transaction-cost methodology, and known failure regimes for future researchers.**

Potential concern: “added 0.4 Sharpe to the desk’s book” is a very strong claim. Be prepared to explain exactly how it was calculated, including whether it is an incremental portfolio Sharpe, standalone Sharpe, or marginal contribution. If it is not strictly defensible, use more cautious language:

> Produced a 0.40 improvement in simulated annualized Sharpe relative to the desk’s existing signal specification.

### Graduate Research Assistant

This section contains excellent material but the final bullet combines too many unrelated responsibilities. Split it:

- **Built a reproducible cluster-based simulation pipeline, reducing a 2,000-run Monte Carlo study from three days to five hours.**
- **Derived a variance bound for a sparse regression estimator, tightening the prior result by a logarithmic factor; proof forms Section 3 of a manuscript under review at JASA.**
- **Released an open-source R package for high-dimensional covariance estimation, downloaded 3,000 times in its first year.**
- **Taught weekly recitations for 60 graduate probability students, writing 12 problem sets and earning a 4.8/5 teaching rating.**

Remove or separate this phrase unless it is important for the target role:

> while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses

It makes the bullet overcrowded and dilutes the stronger technical achievements.

## Projects section

The projects are relevant, but make the methodology more rigorous and avoid presenting every result as a separate “improvement.”

### Volatility Forecasting Study

Suggested version:

> **Volatility Forecasting Study** | Python, PyTorch | Jan 2024–Present  
> - Built a temporal convolutional model for realized-volatility forecasting across 30 equity indices; reduced out-of-sample QLIKE loss by 7% versus a HAR-RV benchmark.  
> - Used rolling time-series validation and an asymmetric loss function to improve directional accuracy from 52% to 58%.  
> - Evaluated robustness across forecast horizons, index groups, and alternative realized-volatility feature sets.

Only include the last bullet if you actually performed those analyses. It would strengthen the project substantially.

### Kaggle project

This is good, but “300 engineered features” and “900 candidate features” should be made consistent. Explain that 900 candidates were reduced to 300 final features:

- **Placed 41st of 2,900 teams, ranking in the top 2% of the private leaderboard, using a gradient-boosting ensemble.**
- **Reduced validation leakage by replacing random folds with time-grouped cross-validation, closing the local-validation/leaderboard gap from 0.02 to near zero.**
- **Reduced 900 candidate features to 300 using permutation importance without reducing validation performance.**

Be careful with the phrase “closed the gap” unless you can document that it actually closed rather than merely reduced it.

## Skills section

Correct and reorganize it:

> **Programming:** Python, R, SQL, C++, Kafka  
> **Machine Learning:** PyTorch, gradient boosting, sparse regression, feature selection  
> **Statistics / Econometrics:** Time-series econometrics, Bayesian inference, volatility modeling, high-dimensional inference  
> **Systems / Data:** Distributed computing, feature stores, point-in-time data pipelines, schema versioning

Only list Kafka, C++, or distributed computing if you can discuss specific projects using them. Skills sections are often tested in interviews.

## Formatting and presentation

- Use an actual GitHub or portfolio URL rather than `example.com/code/mpatel`.
- Add LinkedIn if relevant.
- Use en dashes consistently: `Jun 2025–Aug 2025`.
- Keep bullet formatting consistent; avoid manually wrapped lines that create awkward breaks.
- Use either periods on every bullet or no periods on any bullet.
- Consider removing “USA” from every location if all positions are in the same country.
- Put the most relevant section first. For quant or research applications, use:
  1. Education
  2. Research / Publications
  3. Relevant Experience
  4. Projects
  5. Additional Experience
  6. Skills
- Aim for two pages if necessary; do not force a Ph.D.-level resume onto one page at the expense of important research.

## Most important credibility checks

Before sending this resume, verify that you can explain:

- Exactly how the `+0.40 Sharpe` result was computed
- Whether all backtests were genuinely out-of-sample and point-in-time
- How transaction costs and slippage were modeled
- Why the QLIKE and error metrics tell different stories
- Whether “directional hit rate” is meaningful for your volatility target
- The precise meaning of “90% of gross returns”
- Your contribution and authorship status for the JASA manuscript

Overall, the resume has strong content. The biggest improvement would be to **remove the incorrect Sharpe bullet, reduce redundancy, separate research from administrative duties, and make every quantitative claim technically precise and defensible**.

## Reviewer 2

## Top priorities

1. Delete the incorrect Sharpe-calculation bullet and replace it with a validated performance comparison.
   Multiplying a daily Sharpe ratio by 252 is technically wrong and turns a procedural bullet into a credibility problem.
2. Correct 33% to a 25% reduction and identify the error metric, evaluation split, and forecast horizon.
   The percentage is mathematically wrong, and the missing conditions prevent independent judgment of the result.
3. Move Sunrise Bakery below the quantitative research and project material or into Additional Experience.
   Its current position gives an unrelated role more prominence than the experience relevant to quantitative research.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- Add the labour-budget variance and explain the inventory decision and timeframe behind the reduction in unsold bread.
  The reader cannot judge the scale of the labour result or how the listed activities caused the waste reduction.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Define the Sharpe comparison and add the baseline and practical consequence for slippage and retained returns.
  The reader cannot judge the economic significance without knowing what the figures are measured against.
- State the measured forecast gain and lead with the reusable feature-store outcome rather than dense implementation details.
  The test name does not show improvement, and the infrastructure result can be missed before the main verb appears.
- Replace “for future interns” with evidence that the documentation enabled reproducible handoff or reduced onboarding and rework.
  The current wording states an intended audience, not a result.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- Name the technical change behind the simulation speedup.
  The runtime result is strong, but the reader cannot tell what produced it.
- Specify the estimator, variance target, and exact meaning of the logarithmic tightening.
  A technical reader cannot assess the scope or significance of the theoretical result from the current terms.
- Separate the package contribution from unrelated duties and replace downloads with evidence of ownership and adoption.
  The overloaded bullet hides the strongest software result, while downloads alone do not show use or maintenance.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Change “by 6%” to “by 6 percentage points” and state how the 30-index rates were aggregated.
  The current percentage is ambiguous and does not show whether the result is pooled or averaged.
- Consolidate the repeated volatility-model bullets and distinguish QLIKE loss, forecast error, and hit rate.
  The same model story currently occupies several bullets without clearly separated contributions.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- Explain the technical choice behind the 300 features and remove the redundant top-2% ranking phrase.
  The rank is already clear, while the modeling choice would better demonstrate quantitative skill.
- Replace the leakage claim with its specific temporal mechanism and document fold-wise preprocessing, feature engineering, and feature selection.
  Without these details, the reader cannot verify that time-grouped folds actually prevented leakage.

## Across the whole résumé

- Remove unsupported skills and correct “time-series econometircs” to “time-series econometrics.”
  Unsupported skills broaden the profile without evidence, and the misspelling is immediately visible.
- Remove the personal pronoun from the proof bullet.
  It makes one résumé line read like a sentence instead of a consistent phrase.

## Lower priority (9)

- “Confirmed the forecast gain over the…”: The phrase "standard Diebold-Mariano tests" does not say which forecast loss or comparison statistic was used, leaving the validation method only partly reconstructable. (and 1 more like it)
- “Taught weekly recitations for 60 students…”: The bullet measures student reach and satisfaction but not whether the teaching improved student performance or course outcomes.
- “Placed 41st of 2,900 teams with…”: The phrase "on 300 engineered features" gives scale but not the specific modeling or feature-engineering choice that connects the method to the placement.
- “Wrote the team’s feature-selection script using…”: The line should clarify that permutation importance was calculated inside each training fold, if that is how leakage was prevented during feature selection.
- The dates show no literal employment gap: the Ph.D. runs from September 2021 to the present period, including the interval without listed research employment. However, the resume shows no Ph.D.-period research activity between August 2021 and the Northpeak internship in June 2025, so the academic timeline reads thinner than the degree title suggests.
- Sunrise Bakery: The two bullets form a coherent store-operations entry, but the role is disconnected from the quantitative-research story and should not lead the relevant experience.
- “Derived a variance bound for a…”: "my proof" adds a possessive that is unnecessary because the bullet already establishes ownership through "Derived".
- “Improved the model’s directional hit rate…”: "Improved" is a generic opening verb that describes the result without specifying the action taken.
- “Wrote the team’s feature-selection script using…”: "without losing validation score" can be compressed to "with no validation-score loss" without changing the meaning.

## Reviewer 3

# Resume Review

You have strong quantitative research experience and unusually good metrics. The main issues are **targeting, technical credibility, redundancy, and a few factual/wording errors**.

## Highest-priority changes

### 1. Remove the incorrect Sharpe-ratio bullet

This bullet is mathematically wrong:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

A daily Sharpe ratio is generally annualized by multiplying by **√252**, not 252. More importantly, this bullet makes the resume look less credible and may suggest poor research hygiene.

**Delete it entirely.**

---

### 2. Correct the spelling and categorization in Skills

Current:

> Methods: time-series econometircs, Bayesian inference, gradient boosting, PyTorch

Change to:

> **Programming:** Python, R, SQL, C++, Kafka  
> **Machine Learning:** PyTorch, gradient boosting, temporal convolutional networks  
> **Statistics/Methods:** Time-series econometrics, Bayesian inference, Monte Carlo simulation, volatility modeling  
> **Quantitative Finance:** Order-book modeling, market microstructure, backtesting, transaction-cost modeling

Kafka should not be listed under Programming. Put it under **Data/Infrastructure** if you have meaningful experience with it.

Also, only list Kafka if you can discuss how you used it. If not, remove it.

---

### 3. Add a target-oriented summary

For quant research, quantitative developer, or ML research roles, a short summary would help connect the Ph.D., research, and trading experience.

Example:

> **Statistics Ph.D. candidate with experience in quantitative research, market microstructure, time-series modeling, and statistical learning. Built and evaluated trading signals across 30 futures/index markets, developed reproducible simulation and feature pipelines, and published open-source statistical software.**

Use a summary only if it is tailored to the role. For a highly academic research position, you could omit it and use the space for publications or research interests.

---

### 4. Make the Northpeak role the centerpiece

This is your strongest experience, but several bullets need correction or tightening.

#### Current

> Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.

#### Improved

> Developed a short-horizon order-book imbalance signal for liquid index futures that improved portfolio Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.

Be precise about whether it improved **portfolio Sharpe**, **strategy Sharpe**, or **incremental Sharpe**. “Added 0.4 Sharpe” can be ambiguous.

#### Current

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

#### Improved

> Reduced daily turnover from 34% to 21% with a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by 33%.

This is already strong; the revised version is simply more direct.

#### Current

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-M Mariano tests across the 30 indices.

There is a typo in “Diebold-M Mariano.” It should be **Diebold–Mariano**.

Also, “confirmed” is too strong unless the result was statistically significant.

#### Improved

> Evaluated forecast improvements against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices; report statistical significance and p-values if available.

For example:

> Evaluated forecast improvements against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices, with improvements statistically significant at the 5% level in 24 markets.

Only include that version if accurate.

#### Current

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

“Joining” is incorrect here.

#### Improved

> Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted by two subsequent projects.

If possible, include the technologies used—for example, Python, SQL, Kafka, Parquet, Spark, or a database—but only if accurate.

#### Current

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.

#### Improved

> Documented backtest assumptions, transaction-cost methodology, and known failure regimes in the desk’s research wiki, improving reproducibility for future researchers.

This is a good collaboration and research-rigor bullet. Keep it.

---

## Recommended Northpeak version

```text
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 – Aug 2025
• Developed a short-horizon order-book imbalance signal for liquid index futures that improved portfolio Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.
• Reduced daily turnover from 34% to 21% with a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by 33%.
• Evaluated forecast improvements against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices.
• Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted by two subsequent projects.
• Documented backtest assumptions, transaction-cost methodology, and known failure regimes in the desk’s research wiki for future researchers.
```

Use four bullets if you need to keep the resume to one page; use five if applying to quant research roles and the resume can be two pages.

---

## 5. Fix the project redundancies and metric inconsistency

The Volatility Forecasting Study currently says essentially the same thing three times:

- Beat HAR-RV by 7% on QLIKE
- Cut forecast error from 0.20 to 0.15
- Improved directional hit rate using a temporal convolutional model

The second and third bullets repeat the model description. Also, reducing error from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement:

\[
(0.20 - 0.15) / 0.20 = 25\%
\]

More importantly, QLIKE loss and “forecast error” may be different metrics. Name the metric explicitly.

### Recommended version

```text
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 – Present
• Trained a temporal convolutional network on realized-volatility features, reducing out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices.
• Reduced [specified error metric] from 0.20 to 0.15, a 25% improvement, using realized-volatility features and an asymmetric loss function.
• Improved directional hit rate from 52% to 58% across 30 indices; evaluated robustness across rolling time-series splits.
```

Avoid saying “forecast error” unless you specify whether it is RMSE, MAE, MAPE, QLIKE, or another measure.

Also, “Jan 2024 – Present” should be accurate. If the project is complete, use an end date.

---

## 6. Improve the research assistant section

The current final bullet combines too many unrelated responsibilities:

> Released an open-source R package... while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses...

Split it into separate bullets or remove lower-value duties. The package and download count are valuable; routine grading and reading-group organization are less important for quantitative roles.

### Recommended version

```text
Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 – Aug 2021
• Built a reproducible simulation pipeline on a shared computing cluster, reducing a 2,000-run Monte Carlo study from 3 days to 5 hours.
• Derived a variance bound for a sparse regression estimator, tightening the prior bound by a logarithmic factor; proof incorporated as Section 3 of a JASA manuscript under review.
• Developed and released an open-source R package for high-dimensional covariance estimation, downloaded 3,000 times in its first year.
• Taught weekly graduate-probability recitations for 60 students, writing 12 problem sets and earning a 4.8/5 teaching rating.
```

If the JASA paper has a title, coauthors, or a public preprint, add a **Publications** section. A paper under review is especially valuable for quant research, statistics, and ML research applications.

---

## 7. Reconsider how you present the bakery position

For a quant or technical application, this role creates an apparent career-transition question because it is your current position after a quantitative research internship.

Do not hide it, but make the context clear. Possible explanations include:

- You are working temporarily while completing the Ph.D.
- You are returning to school or between research roles.
- The role is part-time.
- You are seeking a transition into quantitative research.

If true, label it:

> **Assistant Store Manager, Part-Time**

or add a short context line in the cover letter.

The bullets are reasonable, but they are not very relevant to technical roles. Keep only two concise bullets:

```text
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 – Present
• Supervise opening operations and a team of six bakers and cashiers while maintaining weekly labor-budget targets.
• Managed daily inventory counts and supplier orders, reducing unsold bread from 12% to 7% of production.
```

Use **labor** rather than **labour** if applying to U.S. employers.

If space is limited, place this role under an **Additional Experience** section after your technical experience.

---

## 8. Add GitHub, LinkedIn, or research links

Your contact line currently includes:

> example.com/code/mpatel

That looks like a generic code link rather than an identifiable GitHub or portfolio URL. Use direct links:

```text
Morgan Patel
Metro City, USA | +1 (555) 010-4410 | morgan.patel@example.com
github.com/mpatel | linkedin.com/in/morganpatel | morganpatel.github.io
```

For your profile and projects, include links to:

- The R package
- The volatility forecasting repository
- The Kaggle profile
- A Google Scholar profile or publication/preprint
- A technical portfolio, if available

Do not include links to private or inaccessible repositories.

---

# Suggested overall structure

For quant research, quantitative developer, or ML roles:

```text
NAME AND CONTACT
SUMMARY
TECHNICAL SKILLS
EXPERIENCE
PROJECTS / RESEARCH
PUBLICATIONS
EDUCATION
```

For an academic or research-heavy role:

```text
NAME AND CONTACT
RESEARCH INTERESTS
EDUCATION
RESEARCH EXPERIENCE
PUBLICATIONS
PROJECTS
TEACHING
TECHNICAL SKILLS
```

Your Ph.D. should likely be listed before work experience if applying to research-oriented positions.

---

## Main issues to fix before submitting

- Delete the incorrect Sharpe annualization bullet.
- Correct **econometrics** spelling.
- Correct **Diebold–Mariano** spelling.
- Change “Joining 120...” to “Joined 120...”
- Correct 0.20 to 0.15 from **33%** to **25%** improvement.
- Specify the exact error metric in the forecasting project.
- Remove repetitive project bullets.
- Clarify whether the Northpeak Sharpe improvement is portfolio, strategy, or incremental Sharpe.
- Add statistical significance or p-values for Diebold–Mariano tests if available.
- Add direct GitHub/LinkedIn/research links.
- Explain or de-emphasize the current bakery role for technical applications.
- Add a publications section if the JASA paper or other research is publicly available.

Overall, the resume has a strong foundation for **quantitative research, quantitative development, statistical machine learning, and financial data science**. Its biggest weakness is not lack of achievement; it is that a few imprecise or incorrect statements could undermine an otherwise highly technical profile.

## Reviewer 4

Your resume has strong quantitative content and unusually good use of metrics. The main problems are a serious Sharpe-ratio error, several numerical/wording inconsistencies, and prioritization that places the bakery role above your more relevant experience.

## Highest-priority corrections

### 1. Remove or correct the Sharpe annualization bullet

This is the most important issue:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252...

Under the usual independence assumption, daily Sharpe is annualized by multiplying by **√252**, not 252. For autocorrelated returns, use an appropriately adjusted calculation.

This bullet would be a major red flag for a quant reviewer. Delete it entirely and recompute any Sharpe figures that depended on that calculation.

### 2. Correct the project percentages

> Cut forecast error from 0.20 to 0.15, a 33% improvement

That is a **25% reduction**:  
\((0.20 - 0.15) / 0.20 = 25\%\)

> Improved directional hit rate by 6%, from 52% to 58%

That is an increase of **6 percentage points**, not 6%. The relative increase is approximately 11.5%.

### 3. Fix the typo

Change:

> time-series econometircs

to:

> time-series econometrics

### 4. Repair the malformed feature-store bullet

Current:

> Joining 120 microstructure features point-in-time across six venues... built a feature store...

Rewrite:

> Built a reusable point-in-time feature store by joining 120 microstructure features across six venues, deduplicating late prints, and versioning schemas; the team reused it in two subsequent projects.

### 5. Use US spelling consistently

Because the resume is set in the USA, change **“labour”** to **“labor.”**

---

## Reposition the experience

For quant roles, the bakery position should not be the first experience recruiters see. Consider splitting the section:

### QUANTITATIVE EXPERIENCE
- Northpeak Capital
- Ridgeway University

### ADDITIONAL EXPERIENCE
- Sunrise Bakery

This preserves your current employment and leadership experience without letting it overshadow your quant background. Keep the bakery role to one or two bullets.

---

## Tighten the Northpeak bullets

You have six bullets, but four strong bullets would be more effective. Also be precise about what “added 0.4 Sharpe to the desk’s book” means. If you only backtested a stand-alone signal, do not imply it was incorporated into the live portfolio.

Suggested version:

**Northpeak Capital | Quantitative Research Intern | Jun 2025–Aug 2025**
- Developed a short-horizon order-book imbalance signal for liquid index futures, improving net out-of-sample Sharpe by 0.4 over an 18-month walk-forward backtest after modeled transaction costs.
- Reduced daily turnover from 34% to 21% with a cost-aware position smoother while retaining 90% of gross returns and lowering estimated slippage by 33%.
- Built a reusable point-in-time feature store by joining 120 microstructure features across six venues, deduplicating late prints, and versioning schemas; the team reused it in two subsequent projects.
- Evaluated forecast performance against a HAR-RV baseline using Diebold–Mariano tests and documented backtest assumptions, transaction costs, and failure regimes.

A few cautions:

- Replace “walk-forward” with your actual validation design if different.
- Say whether the 0.4 improvement refers to stand-alone Sharpe, incremental portfolio Sharpe, or another measure.
- If you tested 30 instruments separately, be prepared to discuss multiple-testing corrections and cross-sectional dependence.
- Avoid disclosing confidential data, methods, or results that Northpeak has not approved.

---

## Consolidate the volatility project

The three bullets partly repeat the same result and create ambiguity about which model or feature set produced each improvement. One or two precise bullets would be stronger.

Suggested version:

**Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024–Present**
- Developed a temporal convolutional model for realized-volatility forecasting across 30 equity indices, reducing out-of-sample QLIKE loss by 7% relative to a HAR-RV baseline.
- Reduced forecast error from 0.20 to 0.15 and increased directional accuracy from 52% to 58% through realized-volatility features and an asymmetric loss function.

Only retain both QLIKE and “forecast error” if they are distinct metrics; otherwise, this appears duplicative. Name the second error metric—for example, RMSE or MAE—instead of saying “forecast error.”

Also, the project closely resembles the Northpeak work: both involve HAR-RV, 30 indices, and volatility forecasting. Make clear that the independent project uses public data and predates the internship, or reviewers may wonder about employer intellectual property.

---

## Improve the research-assistant entry

The final bullet combines too many unrelated responsibilities:

> Released an open-source R package... while maintaining the lab’s shared cluster, organizing the weekly reading group and grading...

Focus on the strongest result—the package—and omit lower-value administrative details if space is limited.

Suggested version:

**Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Jun 2020–Aug 2021**
- Built a reproducible cluster-based simulation pipeline, reducing runtime for a 2,000-run Monte Carlo study from three days to five hours.
- Derived a variance bound for a sparse regression estimator that improves the previous result by a logarithmic factor; the proof appears in Section 3 of a manuscript under review at *JASA*.
- Released an open-source R package for high-dimensional covariance estimation that received 3,000 downloads in its first year.
- Led weekly probability recitations for 60 graduate students, developed 12 problem sets, and earned a 4.8/5 teaching rating.

If the paper is public, add a **Selected Publications** or **Research** section with the title, coauthors, status, and link. Also be ready to explain why this position predates the start of your Ph.D.; the dates may prompt questions, though they are not inherently problematic.

---

## Refine the skills section

Kafka is not a programming language. Reorganize the section:

**Programming:** Python, R, SQL, C++  
**Libraries/Tools:** PyTorch, Kafka, Git, Linux  
**Methods:** Time-series econometrics, Bayesian inference, gradient boosting, statistical learning

Only list tools you can discuss comfortably in an interview. Add relevant libraries such as pandas, NumPy, scikit-learn, statsmodels, or Polars only if they strengthen your candidacy and you have room.

---

## Additional presentation changes

- Use en dashes consistently: `Sep 2021–Expected May 2026`.
- Capitalize consistently: `Ph.D. Candidate in Statistics`.
- Replace the generic code URL label with `GitHub: github.com/...` if that is what it is.
- If applying to quant research roles, include your dissertation topic, advisor, or selected publications.
- Keep bullets to roughly one or two lines where possible.
- Use either periods on every bullet or no periods; you currently use periods consistently, so retain that style.
- Aim for one page if possible, though two pages can be acceptable for a Ph.D. candidate with publications and substantive research.

## Overall assessment

The underlying profile is strong: Ph.D.-level statistics, a relevant quant internship, measurable research output, programming, and competition performance. Fixing the Sharpe calculation and percentage errors is essential. After that, the biggest improvement will come from putting quant experience first, reducing repetition, and making every metric statistically precise.
