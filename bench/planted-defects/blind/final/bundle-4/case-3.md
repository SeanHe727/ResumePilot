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
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel
with the same random seed on every worker.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous
bound by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets
and earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation with shrinkage
and factor models, downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
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
Programming: Python, R, PyTorch, Kafka
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

2 errors, 19 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Managed opening shifts

**Problem**
[Important] The Sunrise Bakery role takes space from experience more directly relevant to quantitative research.

**Why**
The operational work is clear, but it does not support the résumé’s quantitative-research direction. Its current space may draw attention away from the more relevant research and modeling work.

**How to change it**
Shorten Sunrise Bakery to one line or move it to a brief Other Experience section.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] “By 35%” gives an improvement figure without identifying the comparison.

**Why**
A reader cannot tell whether the risk-adjusted returns were compared with the unsmoothed signal, another benchmark, or a different period. Without that comparison, the size of the improvement is difficult to interpret.

**How to change it**
Replace “by 35%” with “by 35% versus [comparison] over [evaluation period],” if accurate.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Important] The splits and embargo do not establish that every backtest decision used only information available at the time.
2. [Important] “Validated the signal” does not state what the validation found.

**Why**
1. Purged walk-forward splits and an embargo can reduce leakage between training and test data, but they do not rule out look-ahead in feature construction, timestamps, or other backtest decisions. The current wording makes a broader point-in-time validity claim than the stated methods support.
2. The reader can see how the test was structured, but not whether the signal performed consistently or what conclusion the work supported. A concise result would show why the validation mattered.

**How to change it**
1. Replace the guarantee with a statement that the splits and embargo were used to reduce leakage; retain the stronger claim only if an audit confirmed point-in-time validity for every backtest decision.
2. After the split details, add [out-of-sample performance or stability result, compared with a baseline], if available.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Important] Reporting the best Sharpe from 400 backtested configurations as an expected live Sharpe treats a selected backtest result as a live-performance expectation.
2. [Important] The selected Sharpe is presented as an expected live result without giving its value or evaluation basis.

**Why**
1. Selecting the highest Sharpe across many configurations tends to select for favorable noise and can inflate the estimate. Without independent validation or an adjustment for that selection, the best backtest result does not establish expected live Sharpe.
2. Without the actual result and its evaluation basis, a reader cannot judge its magnitude or what evidence supports the expectation. The line also leaves the selected smoother’s practical result unstated.

**How to change it**
1. Replace “expected live Sharpe” with “best observed backtest Sharpe”; retain a live expectation only if independent validation or a selection-bias adjustment supports it.
2. Replace that phrase with [selected Sharpe value and evaluation basis, compared with a baseline], if available; otherwise state the concrete result of the selected smoother without calling it an expected live Sharpe.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
1. [Important] The backtest Sharpe change is presented as an established impact on the desk book.
2. [Important] The Sharpe improvement is buried after the signal description and the out-of-sample and cost qualifiers.

**Why**
1. An 18-month out-of-sample backtest after costs is evidence, but by itself it does not establish that the signal caused the desk book’s Sharpe increase. The result may be noisy and depends on a valid comparison and attribution.
2. Readers scanning the bullet may reach the result only after the technical description and evaluation details. Moving the quantified impact forward would make it easier to notice.

**How to change it**
1. Describe the 1.1-to-1.5 change as a backtest comparison rather than a desk-book impact; retain the stronger claim only if live or otherwise appropriate attribution supports it.
2. Move the 1.1-to-1.5 Sharpe result closer to the start of the bullet, keeping the out-of-sample and after-cost qualifiers with it.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Important] Using the same random seed on every worker can make workers repeat or overlap random-number streams.
2. [Important] “Running the runs” is repetitive and makes the method sound awkward.

**Why**
1. If each worker starts the same generator from the same seed and consumes values alike, nominal runs may be repeats rather than independent Monte Carlo replicates. The time reduction may be real, but it does not establish a valid speedup for independent simulations.
2. The repeated word draws attention to the phrasing rather than the parallelization that produced the time reduction. A more direct method description will be easier to scan.

**How to change it**
1. If the workers used a stream-splitting method that produced independent streams, name it; otherwise rerun with independent worker streams and report the resulting timing.
2. Replace “running the runs in parallel” with “parallelizing the simulation.”

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The bullet uses a first-person pronoun, breaking the résumé’s verb-led phrase format.
2. [Important] “By a log factor” does not specify the logarithmic improvement or the term it improves relative to.
3. [Important] The paper-status clause already follows the tightened-bound result, so the suggested reordering is unnecessary.

**Why**
1. “My proof” shifts the line into first person while the surrounding résumé bullets use concise, verb-led phrasing. That inconsistency makes the entry read less cleanly.
2. A reader can tell the result is an improvement, but cannot judge its size or understand what was tightened. The paper status supports credibility but does not clarify the comparison itself.
3. The line states that the proof tightens the previous bound before saying it is Section 3 of a paper under review. Readers therefore encounter the result before the paper status, as the finding recommends.

**How to change it**
1. Replace “my proof” with “the proof,” or restructure the clause without a first-person pronoun.
2. Replace “by a log factor” with [the specific logarithmic improvement and the term it improves relative to], if you can state that compactly.
3. No reordering is needed; the result already precedes the paper-status clause.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] The stated Holm correction across 30 indices does not establish that the gain was significant in both crisis periods.
2. [Important] “Both crisis periods” does not identify which periods were tested.
3. [Important] The result comes after the test methods and correction, making the finding easier to miss.

**Why**
1. Holm correction controls the familywise error rate only for the hypotheses included in the correction. If the crisis-period results were separate tests and were not included, the correction across indices does not support a 5% significance claim for those periods.
2. A reader cannot tell which market conditions the robustness result covers. That makes this part of the evidence harder to interpret.
3. Readers may not reach the main result until after the validation details. Leading with the finding would make the outcome easier to scan, with the methods still available as supporting evidence.

**How to change it**
1. If the crisis-period tests were included in the Holm correction, state that; otherwise remove or qualify the 5% significance claim for those periods.
2. Replace “both crisis periods” with [name the two crisis periods], if accurate.
3. Move the result—“The forecast gain held at the 5% level on 24 of 30 indices and in both crisis periods”—before the Diebold–Mariano test and Holm-correction details.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The competition entry gives no competition result.
2. [Polish] “For a market prediction competition” repeats context already given in the project title.

**Why**
1. A reader can see what work was done, but not whether it improved predictions or how the entry performed. A result tied to a comparison would make the contribution easier to evaluate.
2. The title already tells the reader that this is a market prediction competition. Repeating that context uses space without adding information about the work.

**How to change it**
1. After the work described, add [competition result, such as rank or score, compared with a baseline], if available.
2. Cut “for a market prediction competition” from the bullet.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The claim that switching to time-grouped folds “closed a 0.02 gap” attributes the leaderboard gap to validation leakage without establishing that cause.

**Why**
Time-grouped folds can reduce leakage when random folds mix time periods, but the gap can also come from distribution shift, sampling noise, or other causes. The line does not establish that leakage caused the gap.

**How to change it**
If a comparison supports the attribution, specify how the fold change affected leakage and the gap; otherwise say the gap narrowed from 0.02 after switching to time-grouped folds.

> order-book imbalance signal

**Problem**
[Error] The same order-book signal achievement appears under two different entries without a clear distinction.

**Why**
The matching signal description, 18-month out-of-sample period, and 0.4 Sharpe increase make the Northpeak and Kaggle bullets look like the same achievement. A reader may question whether the work is duplicated or misattributed, which can weaken confidence in both entries.

**How to change it**
Clarify whether these are separate projects; if they are, distinguish their work and results, or keep the achievement under the correct entry.

## Skills

> econometircs

**Problem**
[Error] The Methods skill is misspelled: “econometircs” should be “econometrics.”

**Why**
A spelling error in a technical skill can make the résumé look insufficiently checked. It may also distract readers from the expertise the skill is meant to signal.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Important] Kafka is listed as a programming skill without supporting experience in the entries.

**Why**
A reader cannot see where the candidate used Kafka or what they did with it. Without that context, the skill may appear unsubstantiated.

**How to change it**
Add supporting experience if accurate; otherwise remove Kafka from the skills list.

## What already works

- “Wrote a feature store for 120…”: Connects a defined technical contribution to subsequent team reuse.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: Leads with a quantified result and a clear baseline.
- “Added 0.4 to the Sharpe ratio…”: Pairs a clear performance change with a named signal and an out-of-sample evaluation period.

## Reviewer 2

## Highest-priority fixes

1. **Remove or substantially rethink the Northpeak bullet about choosing the best of 400 configurations and reporting its Sharpe as expected live Sharpe.** Selecting the best result from many backtests creates selection bias; that maximum is not an unbiased estimate of live performance. As written, this is likely to concern a quantitative hiring manager. Don’t present it as a live expectation. If you retain the work, describe a defensible evaluation using data not used to select the parameters.
2. **Resolve the repeated futures-signal result.** The Northpeak experience and Kaggle project both claim an order-book imbalance signal improved a futures book over 18 months out of sample. Make clear whether these are separate projects or the same work, and avoid claiming the same result twice.
3. **Fix the parallel Monte Carlo claim.** Using the same random seed on every worker can cause workers to generate duplicate or correlated random streams, undermining the study. Verify what the code actually did and describe its random-stream handling accurately.
4. **Clarify the performance numbers.** The 35% risk-adjusted-return improvement and the Sharpe increase from 1.1 to 1.5 may describe related results. Define the metric and baseline, and distinguish the results so they don’t look like overlapping claims.

## Header and education

- **Contact line:** Make sure the code portfolio link is clickable and points to a relevant, current portfolio. Add another professional profile only if it strengthens the application.
- **Ph.D. entry:** The expected completion date is useful. Consider adding your research area or dissertation topic if it supports the roles you’re targeting; otherwise, the entry is sufficient.
- **Education dates and locations:** These are clear. Keep date formatting consistent throughout the resume.

## Experience

### Sunrise Bakery

- **Assistant Store Manager entry:** Because this is your current role, consider whether present-tense wording would better distinguish ongoing responsibilities from completed results. The current past-tense verbs aren’t inherently wrong, but be consistent.
- **Managed opening shifts and a team of 6…:** Clarify whether the six people are direct reports or the team working those shifts. “Keeping the store within its weekly labour budget” is useful, but specify the result or scope if you can substantiate it. For a U.S.-based resume, use the U.S. spelling of “labor.”
- **Ran daily stock counts…:** The reduction from 12% to 7% is strong. Clarify the measurement period and whether those figures are percentages of production or percentage-point values, so the scale of the result is unmistakable.

### Northpeak Capital

- **Improved risk-adjusted returns by 35%…:** Define “risk-adjusted returns” and the comparison baseline. Without that, the result is difficult to interpret and may appear to overlap with the later Sharpe claim.
- **Validated the signal on 6 years of tick data…:** The validation details are valuable. The final clause makes a broad claim that every decision used only contemporaneously available information; keep that claim only if it accurately covers feature construction, model selection, and all tuning—not just the split design.
- **Wrote a feature store for 120 microstructure features…:** This is a good engineering and adoption result. Clarify your ownership and what “reused” means if you can support it; the count alone doesn’t show the store’s impact.
- **Presented the signal…:** Distinguish approval for a future allocation from an allocation that actually went live. If it did go live, say so only if you can substantiate that outcome.
- **Selected the smoother’s parameters from 400 backtested configurations…:** Remove the claim that the best in-sample or backtested Sharpe was the expected live Sharpe. It signals a basic evaluation problem. If you keep the parameter-selection work, report a properly held-out estimate instead.
- **Built a short-horizon order-book imbalance signal…:** The Sharpe change is compelling, but identify the baseline and clarify how it relates to the 35% improvement above. Also make clear that the 18-month period was genuinely held out from all model and parameter selection. Consider moving this result ahead of the methodological bullets so the outcome is easier to find.

### Ridgeway University research role

- **Cut a 2,000-run Monte Carlo study…:** “Running the runs” is redundant. More importantly, verify the random-seed approach before retaining this bullet: the same seed on every worker can repeat random sequences rather than provide independent simulations. Include the hardware or computing setup if it helps make the runtime comparison meaningful.
- **Derived a variance bound…:** Clarify what “tightens the previous bound by a log factor” means mathematically, and avoid making the result sound accepted or published while the paper is under review. If appropriate, identify your authorship role and keep the manuscript status precise.
- **Taught weekly recitations…:** This is a strong teaching bullet. Add the response count or evaluation context for the 4.8/5 rating if available; a rating without that context can be hard to assess.
- **Released an open-source R package…:** Include a repository or package link if it is accessible. Downloads are useful evidence of reach, but clarify the time window and make sure the count reflects meaningful downloads rather than an automated or cumulative statistic.

## Projects

### Volatility Forecasting Study

- **Beat a HAR-RV baseline’s…:** Specify the evaluation period and how the 7% QLIKE improvement was aggregated across indices. This makes the result easier to interpret and assess.
- **Tested significance with Diebold-Mariano tests…:** The statistical detail is a strength. Clarify what family of comparisons received the Holm correction, especially since you also refer to results in two crisis periods. Avoid implying that all of those claims were corrected if only the 30-index tests were.
- **Wrote up the method…:** A working paper and seminar presentation help establish research communication. Make sure “presented” means you delivered the talk, and add a link to the paper if it is shareable.

### Kaggle Market Prediction Competition

- **Competition entry:** Add the competition’s name or outcome if it is recognizable and meaningful. “Team of 3” gives context, but readers can’t tell how the project performed or what you personally owned.
- **Engineered features and trained gradient-boosting models…:** This bullet is generic and doesn’t give a result or distinguish your contribution. Strengthen it with specific, verifiable scope or impact, or remove it if the next bullets already cover the relevant work.
- **Cut validation leakage…:** Switching to time-grouped folds is a useful methodological decision, but a smaller validation-to-leaderboard gap does not by itself prove leakage was eliminated. Clarify what the 0.02 measures and whether the leaderboard comparison was public or otherwise independent.
- **Added 0.4 to the Sharpe ratio…:** This reads like a separate trading strategy rather than a competition result, and it overlaps with the Northpeak claim. Clarify the project connection and whether this is genuinely separate work; otherwise, consolidate the claim in one place.

## Skills and consistency

- **“time-series econometircs”:** Correct the spelling error. Typos in the skills section are especially conspicuous.
- **Programming list:** PyTorch is a framework rather than a programming language. Organize the entries so languages and libraries/tools are clearly distinguished.
- **Skills relevance:** Kafka is less obviously connected to the research results shown here. Keep it if you can discuss practical experience with it; prioritize skills most relevant to the roles you’re applying for.
- **Formatting and terminology:** Standardize spelling, capitalization, punctuation, and date style across the resume. In particular, use consistent U.S. spelling if that is your target market.
- **Overall focus:** The bakery role may be worth keeping to show current employment and management responsibility, but keep it proportionate to the quantitative experience if you’re applying for quant research roles. The strongest differentiators are your research, validation discipline, and measurable results—make sure those claims are both prominent and statistically defensible.

## Reviewer 3

Your strongest material is the Northpeak work and the volatility study. Before polishing, fix two claims that could undermine a quant reviewer’s confidence: **the best of 400 backtests is not an expected live Sharpe**, and **using the same random seed on every parallel worker may duplicate simulations**. Check what actually happened and describe the methods and results accurately.

## Header and education
- **Contact line:** Make sure the code link leads to work you want an employer to assess. Add a professional profile only if it contributes something distinct.
- **Ph.D. line:** Keep the expected graduation date current. If you are applying to quant roles, consider adding your research area or dissertation topic if it helps explain your fit.
- **B.S. line:** Fine as is; no change needed unless space is tight.

## Experience

**Sunrise Bakery**
- **Team and budget bullet:** Clarify the scope of your responsibility—whether you set staffing or managed shifts against a budget set by someone else. Use spelling consistently throughout the résumé (“labour” versus “labor”).
- **Stock and waste bullet:** Specify the period over which waste fell from 12% to 7%, and make sure the reduction can reasonably be attributed to your changes.

**Northpeak Capital**
- **35% risk-adjusted returns bullet:** Name the metric and comparison period. Explain how this result relates to the later Sharpe change from 1.1 to 1.5 so they do not look like two conflicting accounts of the same improvement.
- **Six years of tick data bullet:** Distinguish the full data history from the 18-month out-of-sample period below. Keep the point-in-time claim only if it applies to feature construction, parameter selection, and execution assumptions—not just the split.
- **Feature-store bullet:** Strong evidence of reusable work. Clarify your contribution if others built it with you; retain the reuse claim if you can substantiate it.
- **Portfolio-manager presentation bullet:** Distinguish approval for a *future* allocation from a signal that actually went live. The capacity and failure-case details are valuable.
- **400 configurations bullet:** Change the methodology and the claim. Selecting the best backtest creates selection bias; its Sharpe should not be presented as expected live Sharpe. State how selection was done and report a genuinely held-out or subsequent result if one exists.
- **Order-book signal bullet:** This is a strong lead bullet and should appear earlier. Specify the benchmark, costs, and meaning of “out of sample,” particularly given the parameter search above.

**Statistical Learning Lab**
- **Monte Carlo bullet:** Verify the seed setup. If every worker restarted the same random stream, the runs may not be independent; fix the study if necessary before claiming the speedup as a valid simulation result.
- **Variance-bound bullet:** Retain the result, but ensure the “log factor” comparison uses the same assumptions as the prior bound. Identify the paper if it is public, and keep “under review” distinct from publication.
- **Teaching bullet:** Good quantified experience. If teaching was a separate appointment rather than part of the research-assistant role, label it separately.
- **R-package bullet:** Good impact measure. Verify the download count and, if relevant, make your authorship or maintenance role clear.

## Projects
**Volatility Forecasting Study**
- **QLIKE bullet:** Define the evaluation window and how the 7% reduction was aggregated across indices. Make clear that the baseline and model used comparable information.
- **Significance bullet:** Strong robustness detail; clarify what “in both crisis periods” means—separate significance tests, positive gains, or both.
- **Working-paper bullet:** Good evidence of completion. Link the paper if publicly available; distinguish a departmental presentation from an external conference.

**Kaggle competition**
- **Modeling bullet:** Name the competition and add your specific contribution or result if available; the current description is less informative than your other bullets.
- **Leakage bullet:** Keep it, but check that the 0.02 gap is tied to a named metric and that leaderboard feedback was not used to tune the validation approach.
- **Futures-book bullet:** Remove it from this project or correct its attribution. It reads like a second version of the Northpeak order-book result, not a Kaggle competition outcome.

## Skills
- Correct the typo in **“econometircs.”**
- Separate programming languages from libraries and infrastructure; PyTorch and Kafka are not programming languages.
- Keep skills you can discuss concretely in an interview. If Kafka is important, show where you used it.

Finally, put the most relevant, defensible quant results first within each role. Credible validation will help this résumé more than another headline performance number.

## Reviewer 4

# Résumé review

**Target role inferred from the résumé:** quantitative researcher / quantitative research intern, particularly in systematic strategies and financial time series. There’s no job description, so the keyword and fit assessment below is a role-based estimate—not a match against a specific employer’s requirements.

## Overall assessment

There’s strong, relevant material here: tick data, point-in-time joins, out-of-sample testing, costs, statistical tests, and measurable results. The main risk is not a lack of quant experience; it’s **credibility and clarity**. In particular, the claim about choosing the best of 400 configurations and treating its Sharpe as expected live Sharpe will raise serious questions. The repeated order-book signal claim and the identical-seed Monte Carlo detail could also undermine confidence.

Address those issues first. Then make the target role and your recent timeline easier to understand, and fix the skills typo.

## Highest-priority changes

1. **Resolve the 400-configuration / expected-live-Sharpe claim.** Selecting the best result from many configurations creates selection bias; that result is not, by itself, a sound estimate of live performance. Explain the evaluation safeguards and uncertainty, or remove the unsupported live-performance interpretation. This is the most important technical credibility issue.
2. **Reconcile the two order-book imbalance claims.** The Northpeak internship and Kaggle project both claim a signal tested over 18 months out of sample, with a Sharpe improvement. Clarify whether these are the same strategy, result, or work. As written, a reader could infer that one achievement has been presented twice or that the earlier project generated a later internship result.
3. **Fix the Monte Carlo random-stream description.** Using the same random seed on every worker can produce identical or correlated streams, invalidating the intended independent simulations. Verify what was actually done and describe the parallel random-number setup accurately.
4. **Make the target and timeline clear.** The current Assistant Store Manager role is the first experience entry and is outside the inferred target field. Keep it honest, but make clear how it fits alongside the Ph.D. and quant work, including whether it is part-time. Ensure the resume’s top section quickly signals the quant-research direction.
5. **Correct the typo** in the Methods skills list: “econometircs.”
6. **Replace placeholder contact details if they are literal.** The 555 phone number and `example.com` address look like sample data. If they are placeholders in this version, no issue; if not, use reliable contact information and a working portfolio link.

## Section-by-section review

### Header and education

- **There is no target-role headline or summary.** A reader has to infer your direction from the experience section. Add a concise positioning section that makes the quant-research focus and strongest relevant evidence apparent; don’t use it to repeat the experience bullets.
- **Ph.D. status and expected date are clear.** Keep the expected completion date current, and make sure it remains consistent with the experience timeline.
- **The education section is appropriately near the top** for a Ph.D. candidate applying to research roles.

### Sunrise Bakery — Assistant Store Manager

- **The role is recent and prominent, but not directly relevant to quant research.** Keep it if it reflects your current employment, while ensuring the resume gives more visual weight to your research qualifications.
- **The first bullet lists team size and budget responsibility, but the result is difficult to assess.** Specify what “within budget” means and how you measured it, if you have a concrete, supportable outcome.
- **The inventory bullet has a useful before-and-after metric.** Clarify the measurement period and whether the reduction was sustained, so the percentage has context.
- **Clarify how this work fits with your Ph.D. and research activities.** The current dates invite questions about workload and chronology.

### Northpeak Capital — Quantitative Research Intern

- **The 35% improvement claim needs a defined metric and comparison.** State what “risk-adjusted returns” refers to, what it was compared against, and how costs and evaluation period were handled. This may be related to the later Sharpe claim; if so, make the relationship unambiguous.
- **The validation bullet has strong methodological detail.** Keep the emphasis on point-in-time evaluation, but make sure the description of the splits and embargo is precise and defensible.
- **The feature-store bullet is relevant and shows reusable engineering work.** Add evidence of scope or impact only if you can support it; “reused in two later signal projects” is a good start.
- **The presentation and allocation bullet shows communication and decision impact.** Distinguish approval for a future allocation from a live deployment or realized performance. The current wording says approval occurred, not necessarily that the allocation was implemented.
- **The 400-configuration bullet is a major concern.** The best backtested configuration is not automatically an estimate of expected live Sharpe. Explain how you accounted for multiple testing, selection bias, and any final holdout—or remove the inference about live performance.
- **The final signal bullet is strong but buried.** Move the strongest, clearest quant result higher within the role. Also explain how it relates to the 35% result and the Kaggle signal claim below, if they are related.

### Ridgeway University — Research Assistant

- **The parallel-computing result is compelling, but the random-seed detail is alarming.** Identical seeds across workers can make Monte Carlo runs redundant or dependent. Verify the implementation and make the statistical validity clear.
- **The estimator result is technically valuable.** Preserve the distinction between your contribution and the paper’s status. Be ready to substantiate the “log factor” comparison and your role in the proof. “Under review at JASA” is appropriately qualified if that remains accurate.
- **The teaching bullet is credible but less relevant to quant research.** Keep it if space allows, especially if communication is important for the role; otherwise prioritize research, modeling, and software evidence.
- **The R package is a useful software and adoption signal.** Treat download counts as downloads, not as active users, and keep the timeframe attached to the figure.

### Projects

- **Volatility Forecasting Study is a strong project for the inferred target.** Preserve the baseline, out-of-sample result, and statistical testing. Make the data period and evaluation design easy to identify, and be prepared to explain how you handled dependence across the 30 indices and the crisis-period comparisons.
- **Label the working paper accurately.** A seminar presentation is useful evidence of research communication, but it is not a publication or peer-reviewed acceptance.
- **The Kaggle project’s first bullet is too generic.** It names activities but gives no result, competition standing, or specific contribution.
- **The leakage bullet needs a clearer interpretation.** A smaller gap between validation and leaderboard scores does not, on its own, establish that leakage was reduced. Explain what leakage you identified and how the change corrected it.
- **Reconcile the Kaggle Sharpe result with the Northpeak result.** The close match in signal, test duration, and metric makes the overlap especially noticeable. Clearly distinguish the work, ownership, and result—or avoid claiming the same achievement twice.

### Skills

- **Correct the spelling error** in “time-series econometircs.”
- **Connect listed skills to evidence where possible.** Kafka appears in the skills list but not in the experience or projects. Keep it if you can discuss substantive use; otherwise it may invite questions without helping your case.
- **Use the skills section to make relevant capabilities easy to scan.** The current Methods list is brief relative to the detailed evidence elsewhere; include only methods you can defend in an interview.

## Domain lens: quantitative research

### Likely reviewer

A quantitative researcher or portfolio manager would likely read this after an initial recruiter screen. They will care about valid backtests, selection bias, transaction costs, data leakage, and whether reported performance could survive implementation. The strongest evidence here is the mix of statistical research and financial-market work. The biggest concern is whether the performance claims were evaluated rigorously.

### Company context and uncertainty

“Northpeak Capital” is not enough to identify a specific company or strategy, and there is no job description. I’m not assuming a particular asset class, investment process, or technology stack beyond what your résumé states. Your vocabulary already signals systematic research; the improvement needed is mainly precision about performance evaluation and attribution.

### Role-based keyword scan

These are **proxy terms for quant research**, not extracted from a specific job posting:

| Term | Resume match |
|---|---|
| Quantitative research | Partial |
| Python | Yes |
| Statistical modeling | Partial |
| Time-series analysis | Yes |
| Futures | Yes |
| Market microstructure | Yes |
| Tick data | Yes |
| Point-in-time data | Yes |
| Walk-forward testing | Yes |
| Out-of-sample validation | Yes |
| Transaction costs | Yes |
| Sharpe ratio | Yes |
| Order-book imbalance | Yes |
| Feature engineering | Partial |
| Signal research | Yes |
| Portfolio construction | Absent |
| Capacity analysis | Yes |
| Execution or market impact | Absent |
| Production deployment | Partial |
| Data leakage controls | Yes |

The breadth is good for a quant-research résumé. The main improvement is to make the evaluation and performance claims more trustworthy—not to add keywords indiscriminately.

### Competitive position

- **Likely competing candidates:** graduate students or early-career researchers with direct quant internships, stronger evidence of live strategy work, or more extensive financial publications.
- **Your strengths:** Ph.D.-level statistics, rigorous time-series and statistical testing, practical futures and order-book work, and reusable data tooling.
- **Potential gaps versus direct-fit applicants:** limited clearly established live deployment or production performance, no publication listed as accepted, and uncertainty around the duplicate signal result and backtest selection process.

## Five-perspective read-through

### ATS / keyword scan

**Proxy coverage:** roughly 15–16 of 20 common quant-research terms are present or represented; this is not a genuine ATS match score without a job description. Strong coverage includes Python, futures, tick data, walk-forward testing, out-of-sample validation, costs, Sharpe, and order-book imbalance.

The most useful truthful additions would be terms for specific skills you already demonstrate but do not name explicitly. Don’t add portfolio construction, execution, or production claims unless your experience supports them.

### Recruiter glance — 10 seconds

**Verdict: Maybe.** The Ph.D. and quant internship provide credibility, but there is no brief target-role framing, and the most recent title is in retail management. The recruiter may wonder whether you are still pursuing quant research.

### HR screen — 30 seconds

**Verdict: Borderline to phone screen.** The education and internship look relevant. The unclear current-role context and absence of a concise summary make your trajectory harder to assess quickly.

### Hiring manager — 2 minutes

**Verdict: Maybe, with interview potential after clarification.**

1. They’ll notice strong research methods and specific market-data experience.
2. They’ll question the expected-live-Sharpe inference from selecting among 400 configurations.
3. They’ll look closely at whether the internship and Kaggle bullets describe overlapping work.

**Likely first interview question:** How did you control for selection bias when choosing among the 400 configurations, and what evidence supports the expected live performance?

### Technical reviewer — 10 minutes

**Truthfulness:** Cannot verify claims from the résumé alone. The selection-bias claim and random-seed description require immediate review.  
**Consistency:** The order-book signal appears in both the internship and Kaggle project, with similar test duration and performance framing. Clarify attribution and avoid double-counting.

## Scorecard

These scores assess the résumé as written for the **inferred** role; they are not calibrated to a specific job posting.

| Dimension | Score | Weight | Weighted | Notes |
|---|---:|---:|---:|---|
| ATS keyword match | 7/10 | 15% | 1.05 | Good role-related vocabulary; no JD to score against |
| Summary and positioning | 4/10 | 10% | 0.40 | No target-role framing or summary |
| Skills section | 5/10 | 10% | 0.50 | Relevant core skills, but typo and an unsubstantiated Kafka listing |
| Bullet quality | 6/10 | 25% | 1.50 | Strong metrics, offset by ambiguity and technical credibility risks |
| Publication evidence | 5/10 | 10% | 0.50 | Under-review paper and working paper, no accepted publication listed |
| Narrative coherence | 5.5/10 | 15% | 0.83 | Quant story is present but obscured by current unrelated role and repeated claim |
| Page fill and visual | 7/10 | 5% | 0.35 | Readable text structure; page layout cannot be assessed from plain text |
| Credibility signals | 5.5/10 | 10% | 0.55 | Strong metrics and research, but major validation questions |
| **Total** |  | **100%** | **5.68/10** | **Approximately 57/100** |

The score is dragged down by credibility and positioning issues, not by a lack of relevant experience. It could rise substantially if the performance-evaluation issues are resolved accurately.

## Interview likelihood

These are directional estimates, not application-specific predictions.

| Reader | Estimated likelihood | Main factor |
|---|---:|---|
| ATS | 65–80% pass on a typical quant-research keyword screen | Strong method and market terms; actual criteria unknown |
| Recruiter | 45% forward | Quant internship helps; current retail role needs context |
| HR | 50% phone screen | Ph.D. and relevant experience, but no clear positioning |
| Hiring manager | 35% interview | Relevant work, tempered by backtest and attribution concerns |
| Technical panel | 25% strong-positive assessment | Random-seed and selection-bias issues need defensible explanations |

**Ceiling estimate:** As written, approximately **57/100** under this rubric. Resolving the validation and attribution concerns, clarifying positioning, and fixing the skills section could plausibly move it into the **mid-70s**. The résumé alone can’t establish how much further it would go without a specific job description or evidence of live deployment.

## Interview bridge points

These are preparation topics, not suggested résumé wording.

| Resume topic | What to connect in an interview |
|---|---|
| Point-in-time feature store | How reliable historical data and leakage controls support repeatable signal research |
| Futures signal and cost-aware smoothing | How you tested whether a strategy’s apparent performance survives trading costs and position constraints |
| 400-configuration search | How you handled multiple testing, selection bias, and final out-of-sample evaluation |
| Volatility forecasting study | How statistical forecast evaluation can inform risk estimation, while distinguishing forecast accuracy from trading value |
| Sparse regression result | How theoretical guarantees and finite-sample behavior informed your modeling choices |
| Monte Carlo speedup | How you parallelized computation while preserving independent random streams and valid uncertainty estimates |
| Retail management | How you handled operational responsibility alongside research, while being clear about your current career direction |

**Verdict:** Fix the statistical-validation and duplicate-claim issues first. Then improve role positioning and clarify the current job’s context. The underlying quant-research experience is promising; the résumé needs to make its strongest claims easier to trust and its career direction easier to understand.
