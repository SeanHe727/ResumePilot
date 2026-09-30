# case-6

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
Date of birth: 21 Jul 1998 | Nationality: Indian
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s
futures signal.
- Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo
period, so every backtest decision used only information available at the time.
- Wrote a feature store for 120 microstructure features with point-in-time joins, which the
research team reused in two later signal projects.
- Presented the signal, its capacity estimate and failure cases to the portfolio managers, who
approved a small live allocation for the next quarter.
- Selected the smoother’s parameters from 400 backtested configurations and reported the best
one’s Sharpe as the expected live Sharpe.
- Built a short-horizon order-book imbalance signal for liquid index futures that raised the
desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after
costs.
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021
- Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel
with the same random seed on every worker.
- Derived a variance bound for a sparse regression estimator that tightens the previous bound
by a log factor; it is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability and writes the problem
sets, earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation with shrinkage
and factor models, downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Pioneered a data-driven, research-first approach to volatility modeling that delivered
robust, actionable insights.
- Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm
correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.
- Wrote up the method, robustness checks and results as a 12-page working paper, which was
presented at the department’s financial econometrics seminar.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Engineered features and trained gradient-boosting models for a market prediction
competition.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between
local validation and leaderboard scores.
- Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested
over 18 months out of sample.
SKILLS
Programming: Python, R, PyTorch
Methods: time-series econometrics, high-dimensional statistics, gradient boosting
```

## Reviewer 1

# Résumé critique — inferred target: quantitative research

**Overall:** You have credible quant-research evidence—market data, out-of-sample testing, statistical methods, and a reused research tool. The biggest issue is not presentation polish: two methodological claims could make a technical reviewer doubt the validity of your results. Fix those before applying. I’m assessing this for quantitative research roles generally; without a job description, I can’t measure a real JD keyword match or tailor the review to a particular employer.

## Domain lens

**Likely reviewer:** A quant-research hiring manager or researcher who evaluates signals, backtests, and research infrastructure. They will look for evidence that results survive realistic validation and trading costs, and will be alert to leakage, selection bias, and unclear attribution.

**Company context and JD vocabulary:** No company or JD was provided, so I can’t assess company-specific priorities or extract its vocabulary. The résumé itself points toward quant research in systematic trading. Relevant terms already present include *futures, microstructure, order-book imbalance, time-series econometrics, walk-forward splits, point-in-time joins, Sharpe,* and *transaction costs*.

**Likely gaps to check against each posting:**
- **Potentially serious:** SQL, C++, production research systems, execution, or portfolio construction—only add them if you actually have the experience and the target role asks for them.
- **Not assessable from this résumé alone:** Whether direct experience with the employer’s asset class, trading stack, or research process is required.

**Transfer of your strongest work:** Your walk-forward validation, point-in-time feature store, and volatility-forecast testing are relevant to systematic research because they show work on temporal validation, usable data, and statistical testing. Your résumé should make the reliability and limits of those results clear—not just their headline performance.

## Five-perspective read-through

### ATS scan

There’s no JD, so this is an indicative scan against common quant-research terms, not a measured ATS match.

| Common term | Match |
|---|---|
| Quantitative research | Partial — in a job title |
| Python | Yes |
| Statistics | Yes |
| Time-series econometrics | Yes |
| Backtesting | Yes |
| Futures | Yes |
| Microstructure | Yes |
| Order-book imbalance | Yes |
| Walk-forward validation | Yes |
| Point-in-time data | Yes |
| Transaction costs | Yes |
| Sharpe ratio | Yes |
| Risk-adjusted returns | Yes |
| Volatility forecasting | Yes |
| Monte Carlo | Yes |
| Gradient boosting | Yes |
| PyTorch | Yes |
| Portfolio construction | Partial — capacity and allocation are mentioned |
| SQL | Not listed |
| C++ | Not listed |

Do not add tools or methods just to match a posting. If SQL, C++, or production deployment are genuine skills, their absence could matter for some roles.

### Recruiter glance

**Verdict: Forward, with a question mark.** The quantitative-research internship and Ph.D. candidate status are immediately relevant. The personal details take up space and may distract; the strongest performance evidence is not consistently presented first.

### HR screen

**Verdict: Likely phone screen for a general quant-research role.** The education, internship, programming, and research experience clear a plausible baseline. There is no summary, but the experience section largely establishes your direction. The accuracy concerns below could become a problem once a technical reader examines the bullets.

### Hiring manager

**Verdict: Maybe—potentially interview-worthy after technical credibility issues are resolved.**

1. The futures, microstructure, validation, and feature-store work is directly relevant.
2. The claim that the best of 400 configurations is the expected live Sharpe is a substantial warning sign.
3. The same order-book result appears in both the internship and project sections, so its ownership and context are unclear.

**Likely first question:** How did you account for selection bias when choosing among 400 backtested configurations?

### Technical reviewer

I can’t independently verify the figures from the résumé alone. I can, however, flag claims that need clarification or methodological support:

- The parameter-selection claim appears to treat the best backtest result as an expected live result. That does not account for selection bias.
- The Monte Carlo bullet says every worker used the same random seed. If this produced identical or correlated random streams, the run count and resulting uncertainty estimates may be misleading.
- The Sharpe improvement appears in two sections with the same signal and 18-month test period. Clarify whether these are the same result or distinct work.
- The JASA paper is appropriately identified as under review; don’t imply acceptance or publication.
- “Pioneered” and “robust, actionable insights” are vague, high-level claims without a concrete result.

## Changes by section and bullet

### Contact and personal details

- **Remove date of birth and nationality.** They aren’t needed to assess your research qualifications and disclose personal information that can invite bias.
- **Keep contact details to professional essentials.** Make sure the code link leads directly to relevant, well-documented work; a bare profile link is less persuasive than an accessible portfolio.
- **Consider a concise target-role headline or summary only if it helps position you.** There’s no need to add one just to fill space; the experience already signals quant research.

### Education

- **Keep the expected Ph.D. completion date.** It answers an important timing question.
- **Consider adding a dissertation or research focus if it is directly relevant to the roles you’re pursuing.** The degree alone does not show what your doctoral research contributes.
- **Check whether your B.S. needs to remain.** It is reasonable to keep, but it is less important than your Ph.D. work and relevant experience.

### Northpeak Capital — Quantitative Research Intern

- **“Improved risk-adjusted returns by 35%…”** Clarify what “risk-adjusted returns” means, the comparison baseline, the measurement period, and whether the result is out of sample and net of costs. Without that context, the percentage is hard to evaluate.
- **“Validated the signal on 6 years of tick data…”** This is useful evidence. Clarify how the splits and embargo were selected and whether the final result came from an untouched test period. The current wording describes good safeguards but not the final evaluation design.
- **“Wrote a feature store for 120 microstructure features…”** Keep this; reuse by other projects is meaningful evidence of impact. Make sure “feature store” accurately describes what you built, and specify your contribution if it was shared work.
- **“Presented the signal… approved a small live allocation…”** Keep the approval outcome, but be precise about whether the allocation was approved, launched, or actually traded. Those are different levels of evidence.
- **“Selected the smoother’s parameters from 400 backtested configurations…”** This needs a substantive change, not just polishing. Reporting the best configuration’s Sharpe as expected live Sharpe is not statistically justified by itself and raises an overfitting concern. Explain how you corrected for multiple testing or evaluated the selected parameters on independent data; otherwise, remove the claim about it being expected live performance.
- **“Built a short-horizon order-book imbalance signal…”** This is a strong, specific result, but it overlaps with the Kaggle project bullet. Clarify whether it is the same signal and result. If so, keep the full achievement in one place and make the other entry distinct; if not, distinguish their datasets, ownership, or evaluation periods.
- **Reorder the internship bullets after fixing the claims.** The clearest, defensible results and strongest evidence of research impact should appear first. The parameter-selection bullet should not lead or remain prominent while its statistical basis is unclear.

### Ridgeway University — Research Assistant

- **“Cut a 2,000-run Monte Carlo study…”** Resolve the same-seed issue before using this claim. Parallel workers generally need independent, reproducible random streams; using the same seed on every worker could duplicate or correlate runs. Confirm how the code generated streams and whether the study’s results remain valid.
- **“Derived a variance bound…”** Keep this and retain the under-review status. It is a strong research contribution. Make sure “tightens the previous bound by a log factor” is technically precise and supportable.
- **“Taught weekly recitations…”** Correct the tense so the teaching and problem-set contributions are consistent with a past role. If the 4.8/5 rating is useful, indicate what it measures and, if available, how many students responded.
- **“Released an open-source R package…”** Keep this. The download count is a useful adoption signal; include the package name or a direct link so a reviewer can verify and explore it.

### Volatility Forecasting Study

- **“Pioneered a data-driven, research-first approach…”** Remove or substantially reconsider this bullet. It is generic and self-promotional, and it doesn’t tell a quant reviewer what you tested, what improved, or how you measured the result.
- **“Tested significance with Diebold-Mariano tests…”** This is the strongest project bullet. Clarify what “forecast gain” measures and what the two crisis periods are, if that context matters to the role. Keep the multiple-testing correction visible.
- **“Wrote up the method…”** Keep the working-paper and seminar details, but make the status clear: a departmental seminar presentation is useful evidence of communication, not the same as publication or external peer review.

### Kaggle Market Prediction Competition

- **“Engineered features and trained gradient-boosting models…”** This is too generic to show your contribution. Add meaningful context about the competition outcome or the work you personally owned, if you have it.
- **“Cut validation leakage…”** Clarify the setup. A 0.02 validation-to-leaderboard gap is not by itself proof that leakage was reduced; explain what was leaking and why time-grouped folds addressed it.
- **“Added 0.4 to the Sharpe ratio…”** Resolve the overlap with the Northpeak bullet before keeping this. The résumé currently makes it difficult to tell whether this was competition work, internship work, or one result credited in both places.

### Skills

- **Add only relevant, demonstrable tools and methods that are missing.** The current list is short for quant roles; some postings may expect SQL, C++, Git, Linux, market-data tooling, or portfolio/execution methods. Don’t add any that you cannot discuss in an interview.
- **Make the category labels and contents specific enough to be useful.** “Methods” combines broad areas; a reviewer should be able to distinguish your statistical, machine-learning, and financial-research capabilities without inferring too much.

## Eight-dimension scoring

These scores are estimates for a general quant-research role, not a particular posting. Visual scoring is especially tentative because I only have the text, not the rendered résumé.

| Dimension | Score | Weight | Weighted | Notes |
|---|---:|---:|---:|---|
| ATS keywords | 7.5/10 | 15% | 1.13 | Relevant vocabulary, but no JD match can be verified. |
| Summary | 7/10 | 10% | 0.70 | No summary; experience mostly establishes the target. |
| Skills | 6.5/10 | 10% | 0.65 | Relevant but sparse. |
| Bullet quality | 7/10 | 25% | 1.75 | Strong evidence, weakened by methodological and attribution issues. |
| Publications/research | 7.5/10 | 10% | 0.75 | Relevant research; publication status is appropriately qualified. |
| Narrative coherence | 7.5/10 | 15% | 1.13 | Clear quant-research direction, with some duplicated or generic material. |
| Page fill and visual | 7.5/10 | 5% | 0.38 | Cannot assess layout or page count from plain text. |
| Credibility signals | 6.5/10 | 10% | 0.65 | Good metrics and adoption evidence, but technical claims need resolution. |
| **Total** |  | **100%** | **7.14/10** | **Promising, but fix the credibility issues before submission.** |

## Interview likelihood

These are rough estimates for a general quant-research opening, not predictions for a specific employer.

| Reader | Indicative likelihood | Main factor |
|---|---:|---|
| ATS | 65–80% | Good general quant vocabulary; actual JD match unknown. |
| Recruiter | 70–80% | Relevant internship and Ph.D.; personal details should be removed. |
| HR | 65–75% | Meets a plausible baseline for quant research. |
| Hiring manager | 40–60% | Relevant work, but parameter selection and duplicated results invite scrutiny. |
| Technical panel | 35–55% | Strong topics, with important validation and reproducibility questions. |

**Ceiling:** The résumé has a solid base for quant research. Its near-term improvement depends less on adding keywords than on resolving the validity, attribution, and clarity issues above. A JD-specific ceiling cannot be estimated without the posting.

## Interview discussion points

| Résumé topic | What to be ready to explain |
|---|---|
| Futures signal and smoother | The baseline, evaluation period, cost assumptions, and whether the performance estimate is genuinely out of sample. |
| Selection among 400 configurations | How you handled multiple testing and obtained an unbiased estimate of selected-model performance. |
| Walk-forward testing | Split design, embargo rationale, and which data remained untouched until final evaluation. |
| Monte Carlo study | How independent random streams were produced across workers and how reproducibility was maintained. |
| Feature store | How point-in-time correctness was enforced and what the later projects reused. |
| Variance bound | Your individual contribution, the prior result being improved, and the significance of the log-factor tightening. |
| Forecasting study | What the forecast metric measures, why the statistical test was appropriate, and how the correction affected the conclusion. |

## Prioritized verdict

**Tier 1 — fix before applying**
1. Resolve the 400-configuration selection-bias claim and whether the reported Sharpe is a defensible estimate of live performance.
2. Verify and accurately describe the Monte Carlo random-seed setup.
3. Reconcile the repeated order-book signal and Sharpe result across Northpeak and the Kaggle project.
4. Clarify the basis and evaluation conditions for the 35% and Sharpe-improvement claims.
5. Remove the birth date and nationality.

**Tier 2 — worthwhile**
1. Strengthen or remove the generic volatility-project bullet.
2. Add context to the Kaggle work, including outcome and individual contribution where available.
3. Make the teaching bullet’s tense and rating context clear.
4. Add relevant skills only where they are both true and useful for target postings.
5. Link to the R package and relevant code or research artifacts.

**Tier 3 — lower priority**
1. Refine minor wording and ordering after the factual and methodological issues are settled.
2. Add a summary only if a specific posting makes your target or research focus unclear.

**Verdict:** Make the Tier 1 changes first. They address trust and technical defensibility—the issues most likely to determine whether a quant researcher advances this résumé.

## Reviewer 2

5 errors, 10 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998 | Nationality: Indian

**Problem**
[Error] The personal details listed are not appropriate to include as résumé content.

**Why**
Date of birth and nationality are details a reader is not meant to weigh when assessing the candidate. Including them gives space to information unrelated to the qualifications presented.

**How to change it**
Remove the date of birth and nationality.

> raised the desk book’s Sharpe ratio from 1.1 to 1.5; Added 0.4 to the Sharpe ratio

**Problem**
[Error] The Northpeak and Kaggle bullets appear to assign the same order-book imbalance Sharpe result to different entries and periods. *(no words if moved; about 5 words if distinguished)*

**Why**
The Northpeak bullet reports a change from 1.1 to 1.5 over 18 months out of sample, while the Kaggle bullet reports a 0.4 gain over 18 months out of sample. A reader may wonder whether this is one achievement attributed to two projects or two genuinely distinct results, which can undermine confidence in both entries.

**How to change it**
Keep the result under the entry that owns it, or distinguish the signals and results so both accounts can be true [with their separate periods and figures, if accurate].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement has no stated comparison or measurement period.

**Why**
Without a baseline, a reader cannot tell what the percentage measures. Without a period, they cannot judge which performance window supports the claim.

**How to change it**
Add the comparison and period, such as [35% relative to the unsmoothed signal over the backtest period], if accurate.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not guarantee that every backtest decision used only information available at the time.
2. [Important] “Validated the signal” does not state what the validation found.

**Why**
1. These methods can reduce leakage between training and test periods, but they do not establish that the underlying data, features, or execution assumptions were point-in-time accurate. The sentence claims a guarantee that the split methods alone cannot support.
2. The line describes a rigorous test but gives no result that lets a reader judge whether the signal performed well enough to matter. Adding the finding and its comparison would make the validation’s value assessable.

**How to change it**
1. Replace the guarantee with a statement that the splits and embargo reduced leakage. Keep a point-in-time guarantee only if data and decision timestamps were separately verified; otherwise cut the trailing clause.
2. Add the key out-of-sample result and comparison, such as [performance metric versus the desk’s benchmark].

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The approval result is buried in a relative clause.

**Why**
A reader encounters the presentation before learning its outcome, so the bullet’s result is easy to miss. Stating the approval directly after the presentation makes the consequence of the work clearer.

**How to change it**
Move “approved a small live allocation for the next quarter” out of the “who” clause and state it directly after the presentation.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe selected from 400 backtested configurations is not an unbiased estimate of expected live Sharpe.

**Why**
Selecting the highest Sharpe across many configurations tends to select a result that benefited from backtest noise. Calling that result an expected live Sharpe makes the estimate sound more reliable than the selection process supports.

**How to change it**
Replace “expected live Sharpe” with “best backtested Sharpe.” Keep a live expectation only if it came from an independent or appropriately selection-adjusted estimate, and name that method if used.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Important] Using the same random seed on every worker ordinarily gives the workers identical random-number sequences, so the runs may be duplicates rather than distinct Monte Carlo replications.

**Why**
Duplicate runs can undermine the study’s estimates and uncertainty assessments, even if parallel execution reduced its runtime. A common master seed is appropriate only if it was used to assign workers distinct streams or substreams, which the bullet does not specify.

**How to change it**
If workers used distinct streams or substreams derived from a common seed, say so; otherwise remove the same-seed claim and report only runs and runtime that were valid.

> Taught weekly recitations for 60 students in graduate probability and writes the problem sets, earning a 4.8/5 teaching rating.

**Problem**
[Error] “Taught” is past tense, but “writes” is present tense for a role that ended in August 2021.

**Why**
The tense change makes it unclear whether writing problem sets was part of the completed role or is ongoing. That ambiguity can make the work history seem inconsistent.

**How to change it**
Change “writes” to “wrote” to match “Taught” and the role’s end date.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The forecast gain is not interpretable without its benchmark or size.
2. [Important] The significant result is buried after the testing method and correction.

**Why**
1. The significance test indicates that a difference was detected, but the reader cannot tell which forecasts were compared or whether the improvement mattered in practice. Naming the benchmark and metric would make the result assessable.
2. Readers encounter the testing details before the main finding, which makes the result harder to scan. Leading with the outcome puts the strongest evidence first while preserving the supporting methods.

**How to change it**
1. Add [the forecast metric and benchmark] and, if available, [the measured gain versus that benchmark].
2. Move the result clause beginning “after a Holm correction” to the start of the bullet, then give the test and correction.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The feature engineering and model training are described without an outcome.

**Why**
A reader cannot tell whether the approach improved the competition result or otherwise changed the outcome. A result with a comparison would make the contribution assessable.

**How to change it**
Add the competition outcome and its comparison, such as [score or rank improvement versus baseline or prior model].

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The stated score-gap change does not establish that validation leakage was reduced or that the fold change caused the gap to close.
2. [Important] The 0.02 score gap lacks the metric and does not say whether it is an absolute or relative difference.

**Why**
1. Time-grouped folds can reduce leakage, but a change in the score gap can have other causes. As written, the result supports a change in the gap, not a measured reduction in leakage.
2. Without that context, a reader cannot interpret the size of the gap or understand what was brought into alignment. Naming the metric and gap basis makes the evidence usable.

**How to change it**
1. If leakage was independently demonstrated, name the diagnostic; otherwise say that switching to time-grouped folds closed the 0.02 score gap, without claiming it cut leakage.
2. Specify the competition metric and gap basis as [metric] and [absolute or relative difference], if accurate.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
[Important] The 0.4 Sharpe gain is presented as established, but the stated 18-month test alone does not establish that the estimate is reliable.

**Why**
Sharpe estimates can be noisy, and the line does not say whether the test was untouched, whether the result was selected after repeated testing, or whether realistic costs were included. The gain may be real, but the stated test duration is not enough to show that.

**How to change it**
If the test was untouched and the estimate is reliable, state how the 0.4 gain was calculated and validated; otherwise describe it as an observed out-of-sample estimate or remove the gain.

## What already works

- “Wrote a feature store for 120…”: Connects a technical deliverable to later research-team reuse.
- “Released an open-source R package for…”: Shows adoption with a quantified first-year download count.

## Reviewer 3

## Highest-priority changes

1. **Remove or correct the bullet claiming the best Sharpe among 400 configurations as expected live Sharpe.** Selecting the best result from many backtests creates substantial selection bias; it is not a defensible estimate of live performance. If you had a genuinely independent final test, explain that evaluation instead. Otherwise, remove the claim.
2. **Resolve the apparent duplicate order-book result.** The Northpeak and Kaggle sections both claim an order-book imbalance signal added 0.4 Sharpe over 18 months out of sample. If these are the same work, present it once and make the relationship clear; if they are separate, distinguish their data, setting, and results.
3. **Verify the Monte Carlo random-number setup.** Giving every worker the same random seed can produce duplicate or correlated random streams, undermining the study. Check the implementation and results, and describe the seeding accurately.
4. **Remove the vague, promotional volatility-project bullet.** It offers no specific method or result, so it takes space away from evidence of your work.

## Header and education

- **Date of birth and nationality:** Remove both for applications in the United States. They are generally unnecessary and can introduce bias. If work eligibility is relevant, address that separately and only as needed.
- **Contact details:** Keep the phone, email, and code profile. Make sure the profile link works and displays as a complete, usable URL.
- **Ph.D. entry:** The expected completion date is useful. Consider adding your research area or dissertation focus if it supports the quant-research roles you want.
- **B.S. entry:** Add the specific degree field if it is not clear from the degree title. Include GPA only if it strengthens your application.

## Experience

### Northpeak Capital

- **“Improved risk-adjusted returns by 35%…”** Define what “risk-adjusted returns” means, the comparison baseline, evaluation period, and whether the figure is after costs. As written, the outcome is hard to interpret and may overlap with your Sharpe claims below.
- **“Validated the signal on 6 years of tick data…”** The validation details are relevant, but the claim that *every* backtest decision used only information available at the time is too absolute. Specify the actual validation safeguards and ensure the wording does not imply that purged splits and an embargo alone eliminate every source of leakage.
- **“Wrote a feature store for 120 microstructure features…”** Clarify your contribution and, if space allows, the tools or design choices that matter for the role. The reuse by two later projects is useful evidence of adoption; make sure that number is accurate and that “feature store” describes what you built.
- **“Presented the signal…who approved a small live allocation…”** Distinguish approval from actual deployment and results. Since the allocation was for a future quarter, don’t imply it generated live performance. Keep the capacity estimate and failure cases if they demonstrate sound research judgment.
- **“Selected the smoother’s parameters from 400 backtested configurations…”** Remove the claim that the best configuration’s Sharpe was the expected live Sharpe. This is the most serious methodological concern in the resume because it treats a selected backtest result as a live expectation. If there was a separate, untouched evaluation, describe that process accurately; otherwise, omit this claim.
- **“Built a short-horizon order-book imbalance signal…”** This appears to duplicate the Kaggle result. Resolve that before keeping it in both places. Also make the Sharpe comparison interpretable: identify the baseline, portfolio or book, evaluation period, and whether the figure is annualized and net of costs. Ensure the 18-month period was genuinely out of sample.

### Ridgeway University, Research Assistant

- **“Cut a 2,000-run Monte Carlo study…”** Check the shared-seed detail before presenting this result. Identical seeds across workers may cause duplicate or correlated runs, rather than independent Monte Carlo samples. Also clarify what the timing comparison includes if setup or hardware differs.
- **“Derived a variance bound…”** The theoretical contribution is strong. Give enough context for a reader to understand what the bound improves on, and keep the paper’s status precise. Saying the result is “Section 3” is less useful than conveying your contribution and the paper’s review status.
- **“Taught weekly recitations…”** Fix the tense inconsistency between “taught” and “writes.” Clarify the teaching rating’s source and sample size if you have that information; otherwise, the rating may be difficult to assess.
- **“Released an open-source R package…”** Add the package name or a link if available, and identify the source of the download count. Download totals can be useful, but readers need enough context to interpret them.

## Projects

### Volatility Forecasting Study

- **“Pioneered a data-driven, research-first approach…”** Remove this bullet or replace it with a concrete description of your method or contribution. The current wording is generic, self-promotional, and unsupported by a result.
- **“Tested significance with Diebold-Mariano tests…”** This is specific and potentially strong. Clarify what forecast measure or comparison the tests assessed, and what “both crisis periods” refers to. Make sure the claim about 24 indices is not ambiguous about whether that count applies before or after the correction.
- **“Wrote up the method…as a 12-page working paper…”** The page count is unlikely to help. Emphasize the paper’s status and your role in presenting it; provide a link if available. Make clear whether the seminar presentation was yours.

### Kaggle Market Prediction Competition

- **“Engineered features and trained gradient-boosting models…”** This is too general on its own. Add a concrete outcome from the competition or remove it if the other bullets already cover your contribution.
- **“Cut validation leakage by switching to time-grouped folds…”** Explain what the 0.02 gap measures and why the change demonstrates reduced leakage rather than merely a change in validation behavior. Be cautious about treating a leaderboard score as a clean test result, since repeated submissions can lead to adaptation to the leaderboard.
- **“Added 0.4 to the Sharpe ratio…”** Resolve the apparent duplication with the Northpeak bullet. If this is the same signal or result, don’t claim it as a separate project outcome. If it is distinct, make the distinction clear and provide enough context to evaluate the result.

## Skills

- **Programming line:** PyTorch is a framework, not a programming language. Separate languages from libraries or frameworks so the categories are accurate.
- **Methods line:** The listed methods are relevant, but broad. Add other directly relevant tools or techniques only if you can substantiate them, and avoid listing skills you cannot discuss in an interview.
- **Overall:** Consider adding the technical tools you used in the experience and projects if they are important to your target roles and missing here. Don’t add a tool solely to make the section longer.

## Reviewer 4

Your strongest material is the quantified research and trading work. Before polishing, fix three credibility issues: the selected backtest Sharpe described as an *expected live* Sharpe, the Monte Carlo runs using the same seed on every worker, and the futures-book result appearing under both your internship and Kaggle project.

I’m treating each wrapped bullet as one line; these are changes to make, not rewrites.

### Header and education
- **Name and contact line:** Keep the name, phone, and email. Make sure the code link leads directly to work you want an employer to assess; use a professional profile or research page instead if that is more relevant.
- **Date of birth and nationality:** Remove both for a typical U.S. job application. If work authorization matters, address it where the application asks rather than implying it through nationality.
- **Ph.D. line:** Keep it, but check that the expected completion date is still accurate when you apply. Consider adding a dissertation or research focus if it helps establish fit for quant roles.
- **B.S. line:** Keep it; no substantive change needed.

### Northpeak Capital
- **“Improved risk-adjusted returns by 35%…”** Specify the metric, comparison baseline, evaluation period, and whether costs are included. “Risk-adjusted returns” is too broad to interpret the 35%.
- **“Validated the signal on 6 years…”** Keep the safeguards, but verify the claim that *every* backtest decision was point-in-time valid, including feature construction and parameter selection. Narrow that claim if you cannot substantiate it.
- **“Wrote a feature store…”** Keep it. If space is tight, prioritize its reuse in two projects over the feature count.
- **“Presented the signal…”** Keep it, but distinguish approval for a future allocation from actual live performance; update the status if the allocation occurred.
- **“Selected the smoother’s parameters from 400…”** Change this substantially. The best result among 400 configurations is not an unbiased estimate of expected live Sharpe. State how selection was separated from final evaluation, and report an appropriately held-out result if you have one.
- **“Built a short-horizon order-book imbalance signal…”** Clarify what “desk book” means here, how the signal affected it, and whether the 18-month out-of-sample period was untouched during development. Reconcile this result with the 35% claim above so readers understand whether they describe the same work.

### Statistical Learning Lab
- **“Cut a 2,000-run Monte Carlo study…”** Resolve the seed issue before retaining the result. Using the same seed on every worker can make runs repeat the same random sequence and undermine the study. Check what actually ran; if runs were duplicated, redo the study before claiming its findings.
- **“Derived a variance bound…”** Keep the contribution, but confirm the comparison to the previous bound holds under the stated assumptions. Update the paper’s review status before each application.
- **“Taught weekly recitations…”** Correct the tense of “writes.” Also check the dates: if the teaching took place outside the listed February–August 2021 research-assistant role, give it its own entry or otherwise make the timing clear.
- **“Released an open-source R package…”** Keep it. Ensure the download count is current and supportable.

### Volatility Forecasting Study
- **“Pioneered a data-driven…”** Remove the promotional language. This bullet needs the actual forecasting method, benchmark, data, and principal result; otherwise it adds little beside the two bullets below.
- **“Tested significance with Diebold-Mariano tests…”** Keep the specific finding, but identify the forecast metric or comparison it refers to and substantiate how the crisis periods were defined. Check that the testing setup supports the 24-of-30 claim.
- **“Wrote up the method…”** Keep it; make the working paper accessible through your contact link if it is public.

### Kaggle project
- **“Engineered features…”** Add your specific contribution and the competition outcome or ranking if it is meaningful; as written, it is generic.
- **“Cut validation leakage…”** Keep the validation change. Clarify what the 0.02 gap measures so its significance is understandable.
- **“Added 0.4 to the Sharpe ratio…”** Remove this from the Kaggle entry unless it was genuinely a separate result from the Northpeak internship. As written, it appears to repeat the internship’s 1.1-to-1.5 result under a different project, which raises an attribution concern.

### Skills
- **Programming:** Keep only tools you can discuss or use in an interview. Consider adding relevant tools that the experience bullets substantiate but the list omits.
- **Methods:** Keep the focused list; align its terms with the methods you can demonstrate in the bullets and target roles.
