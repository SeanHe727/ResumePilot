> Here is my resume: bench/planted-defects/tests-v3/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume: all 5 bullet-bearing entries received content and wording reviews, plus format and narrative reviews. Education entries had no bullets to review; no job description was provided.

The main changes to make are:

1. **Reorder the resume**
   - Move Projects above Experience, or otherwise prevent Sunrise Bakery from opening the quantitative resume.
   - Shorten the bakery role or explain its relevance so it does not carry the same visual weight as your research experience.

2. **Correct quantitative and methodological claims**
   - The volatility-error change from **0.20 to 0.15** is a **25% reduction**, not a 33% improvement.
   - The directional hit-rate change from **52% to 58%** is a **6-percentage-point increase**, not 6%.
   - Review the claim about annualizing daily Sharpe by multiplying by 252; the wording specialist flagged the convention as incorrect.
   - Rework the Diebold–Mariano testing claim so it reports the actual metric or statistical finding rather than saying the test “confirmed” the gain.

3. **Make outcomes and technical contributions more specific**
   - Clarify what you personally built in the order-book signal and position smoother.
   - Move the feature-store outcome earlier in that internship entry.
   - Explain what the research package implemented and separate it from cluster maintenance, reading-group organization, and grading.
   - Clarify what “closed a 0.02 gap” means in the Kaggle project.

4. **Clean up wording and consistency**
   - Remove the first-person phrase “my proof.”
   - Use present-tense bullets for the current bakery role.
   - Correct **“econometircs”** to **“econometrics.”**
   - Remove redundant “top 2%” wording after “41st of 2,900 teams.”
   - Either document where Kafka was used or remove it from Skills; the narrative review found no supporting experience bullet.

The resume is one page, extracts cleanly, and is ATS-readable. The full specialist report is available in `/report --full`.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 83 · wording 85 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

8 errors, 16 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The resume opens with Sunrise Bakery instead of the quantitative research and project work most relevant to the target reader. *(no words if sections move; saves about 20 words if Sunrise Bakery is shortened)*

**Why**
A recruiter scanning the first section may initially read the candidate as a store manager rather than a statistics Ph.D. candidate pursuing quantitative research. The strongest evidence of technical fit is pushed below an unrelated current role, weakening the first impression.

**How to change it**
Move PROJECTS above EXPERIENCE, or otherwise place the quantitative research and strongest market-prediction material before Sunrise Bakery. Shorten Sunrise Bakery to one line or explain its relevance without giving it the same visual weight as the research roles.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
1. [Important] “Managed” does not specify the opening responsibility, and the present role uses inconsistent past-tense wording. *(about 1–3 words to add; no net words if wording is replaced)*
2. [Important] The labour-budget claim states compliance but not the measured result against the approved budget. *(about 3–6 words to add)*

**Why**
1. A hiring reader can see the team size but not whether the work involved scheduling, opening controls, cash reconciliation, or production coordination. “Managed” and “keeping” also read as past-tense actions under a role listed as Present, which makes the current work appear dated.
2. A reader cannot tell whether the store was barely within budget or materially under it. Without a variance or savings figure, the scale of the management result is difficult to judge.

**How to change it**
1. Replace “Managed” with the specific responsibility you owned, such as [staff scheduling], [opening checklist execution], or [cash reconciliation], if accurate, and use present-tense wording throughout the current-role bullets.
2. Add [the weekly labour-budget variance or amount saved] after the budget claim, measured against the approved budget.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line attributes the entire decrease in unsold bread to stock counts and supplier orders without establishing that causal effect. *(about 1 word to add or no words if text is replaced)*

**Why**
Demand, promotions, product mix, or production changes could also explain the fall from 12% to 7%. Presenting the association as a demonstrated result risks making the claim look overstated to a careful reader.

**How to change it**
If the effect was not isolated, replace “cutting” with “while ... fell”; if the activities directly drove documented production or ordering changes, state those changes explicitly. Also change “Ran” and “cutting” to present-tense wording for the current role.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The order-book signal description does not identify the specific feature or modeling choice that demonstrates the technical contribution. *(about 3–8 words to add)*

**Why**
A quant reader can identify the research area but cannot tell whether the contribution involved imbalance horizons, normalization, forecasting, or portfolio construction. The strong Sharpe result therefore does not reveal what the candidate personally designed.

**How to change it**
Add [the most distinctive signal-construction or modeling choice] immediately after “signal,” if it distinguishes your contribution.

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
1. [Important] “Cost-aware position smoother” describes a tool generally but does not show how it produced the trade-off. *(about 3–8 words to add)*
2. [Polish] The turnover, retained-return, and slippage results are chained together so the main trade-off is difficult to scan. *(saves about 3–6 words)*

**Why**
1. The turnover, return-retention, and slippage results are strong, but the reader cannot distinguish a meaningful optimization or control method from a generic smoothing adjustment. That makes ownership of the improvement harder to assess.
2. The reader must parse several metrics before understanding the overall benefit of the smoother. The strong outcome is consequently less immediate than it should be in a quantitative-research bullet.

**How to change it**
1. Replace or expand the phrase with [the single most distinctive objective or constraint used], if that detail demonstrates your implementation.
2. Move the principal trade-off result immediately after the smoother and compress the secondary turnover or slippage detail afterward; retain the figures that best show the decision value.

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] The claim that standard Diebold–Mariano tests confirmed the gain over HAR-RV is methodologically incorrect for a nested comparison. *(about 5–12 words to add, or saves about 3 words if the confirmation claim is softened)*
2. [Important] The bullet does not state the forecast metric or the size of the gain that supposedly was confirmed. *(about 6–15 words to add)*

**Why**
1. The usual Diebold–Mariano test is not valid without adjustment when comparing an augmented model with a nested HAR-RV model. Across 30 indices, dependence and multiple comparisons also need to be addressed, so the current wording overstates what the tests establish.
2. A reader can see that a test was performed but cannot judge whether the improvement was economically or statistically meaningful. The test name establishes process, not evidence.

**How to change it**
1. Use an appropriate nested-model comparison, such as a Clark–West test or suitable bootstrap, with dependence-robust inference and a stated multiple-comparison procedure; if that was not done, report the test results without claiming they confirmed the gain.
2. Replace “forecast gain” with [the forecast metric and its improvement versus the nested HAR-RV baseline], and add [the concise test outcome, such as the share of indices with significant improvement or relevant p-value range], if available.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] The feature-store bullet begins with a dangling modifier and delays its outcome behind three implementation details. *(no words)*
2. [Important] The feature-store reuse count does not show what the later projects gained from using it. *(about 3–8 words to add)*

**Why**
1. “Joining” does not attach cleanly to the later subject, so the sentence is grammatically unstable. The result that the team reused the feature store is also buried, making the bullet harder to scan for impact.
2. Reuse signals adoption, but a hiring reader cannot tell whether it reduced research time, data errors, or backtesting inconsistency. The number of projects therefore shows reach without showing the value of that reach.

**How to change it**
1. Move the feature-store result immediately after the subject or begin with the feature store as the grammatical subject; then place the joining, deduplication, and schema-versioning details after the outcome.
2. Add [the single downstream benefit of reuse], or retain the reuse count as the impact if no stronger outcome was measured.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] The daily Sharpe ratio was annualized with the wrong formula: multiplying by 252 materially overstates it. *(no words)*
2. [Important] The Sharpe-ratio bullet ends with an administrative reporting action instead of a research or decision outcome. *(about 4–10 words to add, or saves about 5 words if removed)*

**Why**
1. A daily Sharpe ratio is conventionally annualized by multiplying by √252, not 252. The current method confuses Sharpe-ratio annualization with return annualization and makes the reported risk-adjusted result unreliable.
2. Reporting a corrected metric does not by itself show that the work changed a model choice, desk comparison, or investment decision. The bullet therefore reads as a calculation rather than an achievement.

**How to change it**
1. Replace “252” with “√252” so the line says the daily Sharpe ratio was annualized using the conventional square-root-of-time factor.
2. Replace the reporting clause with [the desk decision, comparison, or research outcome enabled by the calculation], or remove the bullet if no such outcome exists.

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Important] The documentation bullet says the material supported first-week onboarding but does not quantify the operational benefit and uses an ambiguous reference. *(about 2–8 words to add)*

**Why**
A reader cannot tell whether onboarding time fell, how many interns used the material, or how much friction it removed. “Which” can refer to the wiki or its contents, and “used to onboard” is less direct than describing what the documentation did.

**How to change it**
Change the relative clause to make the documentation the subject, such as saying it supported or shortened onboarding, and add [one measurable onboarding effect] if available.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Error] The reproducibility claim overstates what a seed and configuration file can establish on a shared cluster. *(about 5–15 words to add, or saves about 10 words if removed)*

**Why**
Those two items do not capture code, data, dependencies, software versions, random-number implementation, hardware, or parallel-execution behavior. Different nodes, libraries, thread schedules, or floating-point reductions could therefore produce different results despite the same seed and configuration.

**How to change it**
If the pipeline also pinned the code, data, software environment, RNG implementation and stream assignment, and deterministic execution settings, describe reproducibility within that recorded environment; otherwise remove or soften the claim.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Error] The proof bullet uses a first-person pronoun, and “previous bound” does not identify the baseline result. *(about 3–8 words to add; no words for the pronoun replacement)*

**Why**
“My proof” breaks the resume's phrase-based style. A theoretical reader also cannot quickly judge the log-factor improvement without knowing which theorem or prior bound it improves.

**How to change it**
Replace “my proof” with “the proof,” and, if space permits, add [the prior bound, theorem, or cited result] after “previous bound.”

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Important] The teaching bullet gives a strong rating but does not state what changed for students. *(about 3–8 words to add)*

**Why**
The rating is evidence of perceived effectiveness, but the reader still has to infer the educational outcome from the teaching activities. A student-learning or course result would make the contribution more concrete.

**How to change it**
If available and accurate, replace or supplement the rating with [a student-learning or course outcome], keeping the rating only if it remains the strongest evidence.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package bullet does not identify what the candidate implemented inside the R package. *(about 3–8 words to add)*
2. [Important] The final research-assistant bullet bundles unrelated duties into the package achievement and leaves the download result with an unclear antecedent. *(no words if text only moves; saves about 5–10 words if duties are cut)*

**Why**
1. A technical reader can see the domain and language but cannot distinguish developing an estimator or algorithm from packaging existing work. The substantive technical contribution is therefore unclear.
2. Cluster maintenance, reading-group administration, and grading interrupt the main accomplishment, while “which” can grammatically refer to several preceding activities. The strong package result is consequently harder to scan and the entry ends as an unordered task list.

**How to change it**
1. Add [the specific estimator, algorithm, or user-facing functionality implemented] after the package purpose, if accurate.
2. Move “the package was downloaded 3,000 times in its first year” immediately after the package release, then split or separately list cluster maintenance, reading-group organization, and grading.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The “33% improvement” is numerically incorrect, and the bullet does not identify the forecast-error metric. *(about 1–3 words to add)*
2. [Important] The second volatility-study bullet repeats the first bullet's realized-volatility feature method and overlaps with its model-performance result. *(saves about 4–8 words)*

**Why**
1. Reducing the error from 0.20 to 0.15 is a 0.05 absolute reduction, or 25% relative to the original 0.20. A reader also cannot interpret those values without knowing whether the measure is RMSE, MAE, QLIKE, or another metric.
2. Both bullets describe improving volatility forecasts through the same modeling work and feature additions, so the reader may not know whether they are separate experiments or duplicate evidence. The repetition makes the distinct contribution of the second result harder to identify.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction in forecast error” or “cut forecast error by 0.05,” and replace “forecast error” with [the name of the forecast-error metric] if accurate.
2. Combine the overlapping results or make one clearly support the other by removing the repeated method from the second bullet and stating the distinct action or evaluation it adds.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
[Error] The increase from 52% to 58% is 6 percentage points, not a 6% improvement, and the repeated model reference does not explain the distinct contribution. *(about 1–4 words to add)*

**Why**
A technically literate reader distinguishes a percentage-point change from a relative percentage change; the relative increase here is approximately 11.5%. Repeating “temporal convolutional model” without naming a new action makes the bullet look redundant with the preceding model description.

**How to change it**
Replace “by 6%” with “by 6 percentage points” or, if intended, “an 11.5% relative improvement”; replace the repeated model phrase with the distinct action that produced this result, if available.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 validation-to-leaderboard gap is not defined, and “closed” does not show which score moved or what the final gap became. *(about 5–12 words to add)*

**Why**
A reader cannot tell whether 0.02 is an absolute score difference, a percentage, or another metric. Without the direction of movement or resulting gap, the effect of changing the folds is difficult to judge.

**How to change it**
Replace or expand the phrase with [the validation metric and units for the gap, the score that moved, and the resulting gap], if available.

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] “Without losing validation score” does not identify the validation metric or how closely the reduced-feature model matched the original. *(about 4–10 words to add)*

**Why**
The feature reduction is clear, but the reader cannot tell whether the score was exactly preserved, approximately preserved, or within a stated tolerance. Naming the metric and before-and-after values would make the result independently judgeable.

**How to change it**
Replace the phrase with [the validation metric and the before-and-after score or acceptable difference], if available.

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.” *(no words)*

**Why**
A misspelling in a technical skills section is immediately visible and can make the reader question the care taken with other technical details. It also weakens the credibility of a skill that is directly relevant to quantitative research.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Polish] Kafka is listed under Programming without evidence of its use anywhere in the resume. *(about 3–8 words to add, or saves 1 word if removed)*

**Why**
A reader may question whether Kafka was actually used or whether the skills list contains unsupported technologies. The mismatch also leaves an apparent gap between the listed skill and the feature-store work where it would be most relevant.

**How to change it**
If Kafka was used in the Northpeak feature-store work, add that use to the relevant bullet; otherwise remove Kafka from Programming.

## Already working

- s3:e0:b0: Uses a named baseline and evaluation metric rather than an unsupported claim of improvement.

## Set aside (4)

4 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-7ab31704.md.

