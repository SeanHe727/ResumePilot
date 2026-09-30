> Here is my resume: bench/planted-defects/tests-final/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 5 bullet-bearing entries for content and wording, plus narrative and ATS formatting. Education required no bullet review; job-description matching did not run because no posting was provided.

Most important changes:

1. **Correct or remove invalid quantitative claims.**
   - A drop from 0.20 to 0.15 is **25%**, not 33%.
   - A rise from 52% to 58% is **6 percentage points**, not 6%.
   - Daily Sharpe should not be annualized by multiplying by 252; the specialist recommends cutting that bullet.
   - Reassess whether the Diebold–Mariano test is valid against the nested HAR-RV baseline.

2. **Reorder the resume around quantitative work.**  
   Move Sunrise Bakery below the quantitative projects and shorten it under “Additional Experience.” Leading with it obscures the Statistics Ph.D./quant-research trajectory.

3. **Tighten clarity and organization.**
   - Correct “econometircs” to “econometrics.”
   - Use present tense for the current bakery role.
   - Remove the first-person “my proof.”
   - Split the R-package achievement from unrelated lab administration duties.
   - Define metrics, horizons, estimators, and validation measures where currently unspecified.

The file is one page, parses cleanly in ATS software, and has no layout warnings. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**89/100** — format 100 · content 84 · wording 89 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

8 errors, 14 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Leading experience with Sunrise Bakery makes the page initially read as a retail-management résumé.

**Why**
The first role shapes a recruiter's initial interpretation, even though the Northpeak internship and quantitative projects are more relevant to the apparent target. The current order delays the candidate's strongest evidence of quantitative fit.

**How to change it**
Move Sunrise Bakery below the quantitative projects, place it under Additional Experience, and condense it to one line.

> Sep 2025 - Present

**Problem**
[Polish] The résumé does not explain the immediate pivot from a quantitative internship to bakery management.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
1. [Polish] The line does not show how staffing was managed to keep labour within budget.
2. [Polish] "Managed" uses the wrong tense for a current role.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
1. [Important] The routine tasks do not explain how stock information was used to reduce unsold bread.
2. [Important] "Ran daily stock counts and supplier orders" uses the wrong tense and applies "Ran" awkwardly to orders.

**Why**
1. The 12% to 7% result is strong, but the ordering decision that produced it is missing. Without that connection, the line shows task execution more clearly than inventory-management skill.
2. The current role calls for present tense, and orders are normally placed rather than run. The existing construction makes an otherwise measurable line sound imprecise.

**How to change it**
1. Replace "supplier orders" with [how stock or sales data was used to adjust supplier order quantities], if accurate.
2. Replace the phrase with "Conduct daily stock counts and place supplier orders."

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Error] "Over 18 months of out-of-sample backtest" is grammatically incorrect.

**Why**
The duration modifies a singular backtest and therefore needs an article and a compound adjective. The current wording interrupts an otherwise strong quantitative result.

**How to change it**
Replace it with "over an 18-month out-of-sample backtest."

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Polish] "Cost-aware position smoother" does not identify the mechanism used to reduce turnover.

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold-Mariano tests do not validly confirm forecast gains against a nested HAR-RV baseline.
2. [Important] "Confirmed the forecast gain" gives neither the size of the gain nor the result across the 30 indices.
3. [Polish] "Standard" is filler because it does not distinguish or explain the tests.

**Why**
1. For nested estimated forecasting models, the loss differential can be degenerate under the null, making the standard Diebold-Mariano test generally miscalibrated. Testing 30 indices also requires treatment of cross-index dependence and multiple comparisons, so the present confirmation claim may undermine technical credibility.
2. Naming a benchmark and a test does not show whether the improvement was substantial or broadly supported. A reader cannot judge the economic or statistical importance of the result.

**How to change it**
1. If performed, cite an appropriate nested-model test such as a Clark-West test or a suitable bootstrap with dependence and multiplicity handled. Otherwise, say only that the model showed lower out-of-sample forecast loss than the HAR-RV baseline.
2. After using a valid analysis, replace the phrase with the change in [forecast-loss metric versus HAR-RV] and report [number of 30 indices meeting the stated significance threshold].

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Important] The reusable feature-store result is buried after three substantial implementation details.

**Why**
A scanning reader may register data preparation without reaching the evidence that the deliverable created continuing team value. Leading with the result makes both ownership and reuse visible sooner.

**How to change it**
Move this phrase to the opening, then place the existing feature, venue, deduplication, and schema details after "by."

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is the wrong annualization.
2. [Important] The line reports a calculation without showing any resulting value or decision.

**Why**
1. Expected return scales linearly with time, while volatility ordinarily scales with the square root of time. Under the conventional independent or weakly dependent-return assumption, daily Sharpe is multiplied by √252, not 252.
2. Routine metric preparation does not strengthen the entry unless it informed a concrete research, allocation, or risk decision. Without such an outcome, the bullet is weaker than the surrounding signal-development results.

**How to change it**
1. Replace "252" with "√252."
2. Delete the line unless the report enabled a specific outcome. If it did, replace the quoted phrase with "supporting [specific desk decision the report enabled]."

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] "Used to onboard in their first week" shows adoption but not an improved onboarding outcome.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Error] A seed and configuration file alone do not guarantee that every cluster run is reproducible.

**Why**
Reproduction also depends on inputs, software and library versions, the execution environment, random-number streams, and potentially nondeterministic parallel scheduling. The absolute claim therefore exposes the candidate to a technical challenge that the stated artifacts cannot answer.

**How to change it**
Replace the claim with "recording each run’s seed and configuration file" unless the pipeline also preserved the environment and controlled parallel nondeterminism. If it did, add [container or locked environment and deterministic task-level random-number streams].

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] "A sparse regression estimator" does not identify the estimator or the setting in which the bound applies.
2. [Important] "Tightens the previous bound by a log factor" does not state which factor or asymptotic bound changed.
3. [Important] The entry's strongest research result is not placed first.
4. [Polish] "My proof" uses a personal pronoun that is inconsistent with résumé-style phrases.

**Why**
1. A statistical-learning reader cannot determine what problem class was addressed or formulate a meaningful technical follow-up. That weakens the specificity of one of the entry's strongest research contributions.
2. The comparison sounds important, but a specialist cannot determine the precise theoretical advance. Naming the old and new orders would make the result technically verifiable.
3. The JASA submission and improved variance bound are likely to attract a quantitative research reader more quickly than the simulation-pipeline result. Leaving that contribution second reduces its impact during a rapid scan.

**How to change it**
1. Replace the phrase with [estimator name or estimator class under the key assumption], retaining only the most distinguishing technical detail.
2. Replace "by a log factor" with "from [old asymptotic order] to [new asymptotic order]," if compact and accurate.
3. Move this bullet above the simulation-pipeline bullet.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Error] Unrelated duties separate the package from its download result and make "which was downloaded" appear to modify "two courses."
2. [Polish] The package description gives no technical detail about implementation or validation.

**Why**
1. The interruption obscures which work produced the 3,000 downloads, while the grammatical attachment creates an illogical reading. Even once reconnected, download volume shows adoption rather than the research task or workflow users gained.

**How to change it**
1. Move "downloaded 3,000 times in its first year" directly after the package description and move the intervening duties to a separate bullet. Add [the research task or workflow the package enabled or improved] if known.

> maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses

**Problem**
[Important] The entry reads as a mixed inventory rather than a coherent research-assistant story.

**Why**
Theoretical research, computing, teaching, package development, cluster administration, reading-group organization, and grading compete for attention. This makes it harder for a quantitative reader to identify the candidate's central research contribution.

**How to change it**
Center the entry on the theoretical, simulation, and package work. Move teaching and service duties to separate Teaching or Additional Experience material, or cut the least relevant duties.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
1. [Polish] "Out-of-sample QLIKE loss" does not state the forecast horizon.
2. [Polish] "Realized-volatility features" describes the model inputs too broadly.
3. [Polish] "HAR-RV" and "QLIKE" are unexplained specialist abbreviations.

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The claimed 33% improvement from reducing error from 0.20 to 0.15 is arithmetically incorrect.
2. [Important] "Forecast error" does not name the metric represented by 0.20 and 0.15.
3. [Polish] "Realized-volatility features and an asymmetric loss" leaves both model changes generic.

**Why**
1. The absolute reduction is 0.05, which is 25% of the original 0.20 value. A visible arithmetic error in a quantitative résumé directly damages confidence in the candidate's numerical care.
2. The values cannot be interpreted or compared without knowing whether they are QLIKE, RMSE, MAE, or another measure. The missing label makes the quantified improvement less useful.

**How to change it**
1. Replace "33%" with "25%."
2. Replace the phrase with [named error metric].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] "By 6%" incorrectly describes the change in hit rate from 52% to 58%.
2. [Important] "Directional hit rate" does not specify the predicted direction or forecast horizon.
3. "With a temporal convolutional model" names the model class but not the relevant implementation choice.

**Why**
1. The change is 6 percentage points; as a relative improvement over 52%, it is approximately 11.5%. Confusing percentages with percentage points creates another avoidable quantitative-accuracy concern.
2. A reader needs both details to understand what the 52% to 58% result measures and how demanding the task was. Without them, the metric remains underspecified.
3. The reader already sees the model family elsewhere in the project, so repeating it adds little evidence of technical ownership. A distinguishing architecture or training choice would better explain what produced the hit-rate gain.

**How to change it**
1. Replace "by 6%" with "by 6 percentage points."
2. Add "[predicted volatility direction and forecast horizon]" immediately after the phrase.
3. Replace the phrase with "using [relevant temporal-convolution implementation choice]," if that choice materially contributed to the result.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] "Finishing in the top 2%" duplicates the more precise placement of 41st among 2,900 teams.

**Why**
The exact rank already establishes the percentile and is stronger evidence. Repeating the same result uses space that could support technical detail.

**How to change it**
Cut the phrase and move "on the private leaderboard" directly after "2,900 teams."

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 validation-to-leaderboard gap does not identify the scoring metric.

**Why**
Without the metric or its scale, a reader cannot judge how meaningful closing a 0.02 gap was. Naming it would make the validation improvement interpretable.

**How to change it**
Add the metric immediately after "0.02," producing "a 0.02 [competition scoring metric] gap," if accurate.

## Skills

> econometircs

**Problem**
[Error] "Econometircs" is misspelled.

**Why**
A typo in a Methods skills line is especially conspicuous because it appears in a compact list of claimed expertise. It can make a reader question proofreading care.

**How to change it**
Replace "econometircs" with "econometrics."

## Already working

- s2:e2:b2: Combines instructional scope, a concrete teaching contribution and a measured outcome.
- s3:e1:b2: Shows direct ownership through the team’s feature-selection script.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-e0f51d01.md.

