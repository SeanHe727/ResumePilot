# case-6

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

## Highest-priority fixes

1. **Correct the Monte Carlo random-seed detail.** Using the same seed on every worker can make workers generate duplicate random sequences, undermining the study’s independence. Verify how the runs were seeded; if they were duplicates, rerun the study before presenting the speedup as a valid result.
2. **Remove or substantially qualify the “best Sharpe as expected live Sharpe” claim.** Selecting the best result from 400 configurations creates selection bias; that Sharpe is not a defensible estimate of live performance. This also affects how you present the other backtest results.
3. **Resolve the apparent duplication between the internship and Kaggle bullets.** Both describe an order-book imbalance signal on futures over 18 months, with a roughly 0.4 Sharpe improvement. Clarify whether these are the same work, related work, or independent results; don’t present the same result twice.
4. **Make the resume’s target role clear.** For a quant-research application, the bakery role is less relevant than the research experience. Keep it if it demonstrates useful responsibility or fills a timeline, but give it less space than the quantitative work.

## Line-by-line feedback

### Contact line
- **Phone, email, and code link:** Make sure each is current and clickable where appropriate. The code link should lead directly to a polished profile or relevant work, not a generic landing page.

### Education
- **Ph.D. candidate in Statistics | Sep 2021 – Expected May 2026:** Confirm that “candidate” is your university’s formal status and that the expected date is still accurate. If the degree has since been completed or the expected date has changed, update it.
- **B.S. in Mathematics | Sep 2016 – May 2020:** This is clear. Keep the date formatting consistent with the Ph.D. entry.

### Experience

**Sunrise Bakery | Assistant Store Manager**
- **“Managed opening shifts and a team of 6…”** Clarify whether six is the total team or the number you supervised per shift. “Keeping the store within its weekly labour budget” is useful but would be stronger with the relevant scope or outcome. For a U.S. resume, use U.S. spelling consistently (“labor” rather than “labour”).
- **“Ran daily stock counts and supplier orders…”** Explain the measurement period and what “unsold bread” means in this context. That will make the reduction from 12% to 7% easier to assess and verify.

**Northpeak Capital | Quantitative Research Intern**
- **“Improved risk-adjusted returns by 35%…”** Define the measure behind “risk-adjusted returns,” the comparison point, and the evaluation period. Check that this does not restate the Sharpe improvement in the later signal bullet.
- **“Validated the signal on 6 years of tick data…”** The validation design is a strength. Avoid an absolute claim that every decision used only information available at the time unless you can substantiate it across the full pipeline. Be ready to explain how the purging and embargo were implemented.
- **“Wrote a feature store for 120 microstructure features…”** This is concrete and shows reuse. If space allows, make your individual contribution and the team’s subsequent use of it clear.
- **“Presented the signal, its capacity estimate and failure cases…”** Keep the failure-case detail. Distinguish approval for a future allocation from an allocation actually being deployed, and don’t imply live results if there weren’t any.
- **“Selected the smoother’s parameters from 400 backtested configurations…”** Do not characterize the best in-sample or selected backtest Sharpe as the expected live Sharpe. The 400-way search makes the best result particularly vulnerable to selection bias. Reassess whether this bullet belongs on the resume and whether the other reported backtest results account for the same selection process.
- **“Built a short-horizon order-book imbalance signal…”** Specify how this result relates to the earlier 35% improvement and the Kaggle-project result. State the relevant benchmark and period clearly, and explain how the 18-month out-of-sample period was kept separate from model or parameter selection.

**Ridgeway University | Research Assistant**
- **“Cut a 2,000-run Monte Carlo study…”** Verify the random-number setup before keeping this result. The same seed on every worker can produce repeated sequences, so parallel runs may not represent 2,000 independent trials. Also clarify the computation being parallelized; the current wording is repetitive.
- **“Derived a variance bound…”** This is a strong research contribution. Clarify what the comparison to the previous bound means and ensure “under review at JASA” is still the accurate publication status.
- **“Taught weekly recitations…”** Consider adding the number of student responses or the source of the rating, if available; a rating is more interpretable with that context.
- **“Released an open-source R package…”** Keep the adoption metric, but identify how downloads were counted if that figure could otherwise be ambiguous. Make sure the package is accessible from your code link.

### Projects

**Volatility Forecasting Study**
- **Project heading and dates:** The title, tools, and dates are clear. Keep the “Independent Research” label only if it accurately describes the work’s supervision and collaboration.
- **“Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%…”** State enough about the evaluation setup to make the comparison interpretable, including the forecast horizon and test period if they are not clear elsewhere.
- **“Tested significance with Diebold-Mariano tests…”** This is useful methodological detail. Make sure the Holm correction covers the comparisons you describe, and define the crisis periods if they are not obvious from the paper or linked materials.
- **“Wrote up the method…”** Clearly distinguish a working paper and seminar presentation from a publication or formal conference presentation. This currently does so, but keep the wording accurate as the paper’s status changes.

**Kaggle Market Prediction Competition**
- **“Engineered features and trained gradient-boosting models…”** This is too general to show your contribution or outcome. Add meaningful competition context or results, or remove the bullet if you need space.
- **“Cut validation leakage by switching to time-grouped folds…”** Explain how you determined leakage was present and what the 0.02 score gap represents. Otherwise, the causal claim and the significance of the number are hard to judge.
- **“Added 0.4 to the Sharpe ratio…”** Resolve the overlap with the Northpeak signal bullets. If this is the same signal or evaluation, avoid counting it as a separate achievement; if it is separate, make that distinction clear.

### Skills
- **Programming:** Kafka appears without support elsewhere in the resume. Keep it if you can discuss your practical experience with it; otherwise, remove it or add relevant evidence.
- **Methods:** Correct the typo in “time-series econometircs.” Also keep the methods list to areas you can substantiate through your work or discuss confidently in an interview.

### Overall
- Keep dates, punctuation, and location formatting consistent throughout.
- For quant roles, prioritize the research and technical results, and make sure every performance claim identifies its metric, benchmark, costs, and evaluation window where relevant.
- Review the resume for claims that depend on the same signal, test period, or backtest. Repeated metrics can look like separate achievements when they may describe the same work.

## Reviewer 2

4 errors, 14 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “order-book imbalance signal”; “tested over 18 months out of sample”

**Problem**
[Error] The Northpeak and Kaggle bullets appear to list the same futures signal achievement under two different entries.

**Why**
Both describe an order-book imbalance signal for a futures book tested over 18 months, and the Kaggle bullet reports a 0.4 Sharpe increase while the Northpeak bullet gives a Sharpe change from 1.1 to 1.5. A reader may wonder whether the work is duplicated or whether these are separate results, which can undermine confidence in both entries.

**How to change it**
If these are separate projects, distinguish their work and results [how they differ]; if they are the same achievement, keep it under the correct entry and remove the duplicate.

> “Sunrise Bakery”

**Problem**
[Important] Sunrise Bakery leads the experience section with work unrelated to the résumé’s quantitative focus.

**Why**
As the first experience entry, the bakery role shapes a reader’s initial impression before they reach the quantitative research. Its two bullets take space that could foreground more relevant experience.

**How to change it**
Shorten the Sunrise Bakery entry to one line or remove it.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] “Keeping the store within its weekly labour budget” gives no figure showing the budget result.

**Why**
A reader cannot tell whether labour costs were just at the limit or meaningfully under budget, or how consistent the result was. A figure would make the management outcome easier to assess.

**How to change it**
Add [the typical amount or percentage under budget, compared with the weekly labour budget] if you can support it.

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] “Managed” and “Ran” are past tense even though this is a current role.

**Why**
Past-tense verbs make ongoing responsibilities sound completed. Present tense makes clear that the work continues in the current role.

**How to change it**
Change “Managed” to “Manage” and “Ran” to “Run.”

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line attributes the reduction in unsold bread to stock counts and supplier orders without explaining how they changed production or ordering decisions.

**Why**
Counts and orders can reduce unsold bread if they inform bake quantities or product mix, but the bullet does not establish that link. Without comparable measurement periods, demand changes or other factors could explain the reduction instead.

**How to change it**
If the counts and orders informed production adjustments, say how and specify the comparison periods; otherwise report the change in unsold bread without attributing it to those activities.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] “Risk-adjusted returns by 35%” does not name the metric or its comparison.

**Why**
A reader cannot tell whether the change refers to Sharpe or another risk-adjusted measure, or what baseline the 35% is measured against. Without that context, the result is difficult to interpret.

**How to change it**
Replace “risk-adjusted returns” with [risk-adjusted metric and comparison, such as Sharpe before versus after], if accurate; retain 35% only if it describes that comparison.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Important] Purged walk-forward splits and an embargo do not guarantee that every backtest decision used only information available at the time.
2. [Important] “Validated the signal” does not say what the validation found.

**Why**
1. Those procedures can reduce leakage from overlapping observations, but do not by themselves guarantee point-in-time validity. Future information can still enter through timestamps, data revisions, feature construction, or execution assumptions.
2. A reader can see that you tested the signal carefully, but not whether it held up or what conclusion the test supported. A concise out-of-sample finding would show why the validation mattered.

**How to change it**
1. If all inputs and decisions were reconstructed using only information available at each decision time, specify that point-in-time control; otherwise remove or soften the guarantee and cut the wordy explanation.
2. After “Validated the signal,” add [the key out-of-sample finding], such as whether performance held up against a stated baseline.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe among 400 backtested configurations is not an expected live Sharpe.

**Why**
Choosing the strongest result from many configurations tends to inflate its measured Sharpe. That result alone does not establish expected live performance, so a reader may doubt the claim’s reliability.

**How to change it**
Replace “expected live Sharpe” with “observed backtest Sharpe”; call it an expected live Sharpe only if supported by an adjustment for selection and genuinely unseen validation.

> “risk-adjusted returns by 35%”; “raised the desk book’s Sharpe ratio from 1.1 to 1.5”

**Problem**
[Important] The two Northpeak bullets appear to claim roughly the same improvement in the futures book’s risk-adjusted performance.

**Why**
One bullet reports a 35% improvement in risk-adjusted returns, while another reports the futures book’s Sharpe rising from 1.1 to 1.5. A reader may not know whether these are separate results or two descriptions of the same achievement.

**How to change it**
Combine the bullets if they describe the same result; if they are distinct, make clear [how the results differ].

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Error] Using the same random seed on every worker can duplicate random-number streams, so it does not establish 2,000 independent Monte Carlo trials.

**Why**
Workers initialized with the same seed and generator can produce identical random-number sequences, which means the runs may not be independent. The line gives no indication that the workers used separately managed random streams.

**How to change it**
If the workers used independently managed random streams, say so; otherwise, do not claim 2,000 independent Monte Carlo runs.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] “My proof” uses a first-person pronoun and splits the result across clauses.

**Why**
The phrasing shifts attention away from the tightened bound and makes the result less direct. It also turns a résumé phrase into a first-person sentence.

**How to change it**
Replace the clause beginning “my proof” with a phrase foregrounding the bound tightened by a log factor, followed by the compact status “Section 3 of a paper under review at JASA.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
[Important] The stated Diebold–Mariano tests across 30 indices do not establish that the gain was significant within both crisis periods.

**Why**
A full-sample test does not establish statistical significance within a crisis-period subsample. If significance is claimed separately for the crisis periods, the relevant tests and the scope of the multiplicity correction need to cover those comparisons.

**How to change it**
If crisis-period tests were run and appropriately corrected, specify that; otherwise remove the 5%-significance claim for the crisis periods or describe only the observed forecast gains there.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The competition modeling bullet gives no result from the work.
2. [Important] “For a market prediction competition” repeats context already stated in the project title.

**Why**
1. A reader cannot tell whether the modeling improved prediction or how it contributed to the competition. A concrete outcome would make the work’s value easier to assess.
2. The title already tells the reader that this is a market prediction competition. Repeating that context uses space without adding information.

**How to change it**
1. Add [competition score or rank, with the relevant comparison] if available; otherwise name another concrete result of the modeling.
2. Delete “for a market prediction competition.”

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The score change does not establish that the new folds reduced leakage or caused the 0.02 gap to close.

**Why**
Time-grouped folds can reduce leakage when related observations cross folds, but leaderboard gaps can also arise from distribution shift, noise, or other evaluation differences. The claimed causal link depends on the split design and evidence that leakage was the source of the gap.

**How to change it**
Describe the observed validation and leaderboard score change without attributing it to leakage, unless you can identify how the split prevented leakage and show that it caused the gap to close.

## Skills

> “econometircs”

**Problem**
[Error] “econometircs” is misspelled; the correct spelling is “econometrics.”

**Why**
A spelling error in a Methods skill is immediately visible and can make the skills section look insufficiently checked. It also makes the method harder to find in a quick scan.

**How to change it**
Replace “econometircs” with “econometrics.”

> “Kafka”

**Problem**
[Important] Kafka is listed as a programming skill without supporting experience elsewhere in the résumé.

**Why**
A reader cannot see where you used Kafka or assess the depth of your experience with it. That can make the skill list feel less credible.

**How to change it**
Add supporting experience [relevant Kafka use] if accurate; otherwise remove Kafka from Programming.

## What already works

- “Wrote a feature store for 120…”: Connects a technical deliverable to later team reuse and gives a clear scale signal.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: Connects a quantified result to a named baseline and out-of-sample metric.

## Reviewer 3

I’d prioritize **fixing the two methodological red flags** before polishing wording: reporting the best of 400 backtests as an expected live Sharpe, and using the same random seed on every parallel worker. Both could make a quant reviewer question results elsewhere on the resume.

### Header and education
- **Contact line:** Make sure the code URL leads to a working, relevant profile and that the email and phone are professional. Reviewers may check the link.
- **Ph.D. line:** Confirm the expected graduation date is still accurate. If you’re applying to quant roles, consider adding a specific research area if it helps explain your fit.
- **B.S. line:** No essential change.

### Experience
**Sunrise Bakery**
- **Opening shifts/team/budget:** Keep it if management or reliability matters to the jobs you’re targeting. Otherwise, shorten this role to leave more space for quantitative work. The budget result is useful, but it does not need as much room as your research.
- **Stock counts/unsold bread:** Keep the 12%-to-7% result if you can substantiate how it was measured. It is the clearest impact in this role.

**Northpeak Capital**
- **35% risk-adjusted returns:** Specify the metric and evaluation period, and distinguish a backtest result from live performance. “Risk-adjusted returns” is too imprecise, particularly beside the later Sharpe claim.
- **Six years of tick data:** Clarify which data was used for development versus evaluation, and verify that the purging and embargo matched the signal’s information horizon. The causal claim about *every* decision is stronger than the split description alone establishes.
- **Feature store:** Keep this; the point-in-time joins and reuse show valuable engineering impact. Check that “120 features” and “two later projects” are accurate and attributable to your work.
- **Portfolio-manager presentation:** Keep it, but distinguish approval of a future allocation from an allocation that actually went live. Those are materially different outcomes.
- **400 configurations/expected live Sharpe:** **Remove the claim that the best backtest Sharpe was the expected live Sharpe.** Selecting the maximum from 400 configurations creates selection bias. State what independent validation or uncertainty assessment you actually performed; if none, do not imply an unbiased live expectation.
- **Order-book signal/Sharpe 1.1 to 1.5:** Move this near the start of the internship, before the validation and presentation details. Make clear whether the 18 months is a genuinely untouched out-of-sample period and whether this is the same result described as a 35% improvement. As written, those claims may look like two achievements when they may be one.

**Ridgeway University**
- **Monte Carlo study:** **Correct the random-seed description.** The same seed on every worker can duplicate simulated draws rather than provide independent runs. Verify how random streams were assigned and whether the reported study and runtime are valid before retaining the result.
- **Variance bound:** Keep the contribution, but verify the comparison to the previous bound and the paper’s current submission status. Both are specific claims a research interviewer may probe.
- **Teaching:** Check that the role, course level, problem-set count, and rating accurately reflect your responsibilities. If they do, this is credible evidence of communication ability.
- **R package:** Keep the adoption metric, but ensure the download count has a defensible source and period.

### Projects
**Volatility Forecasting Study**
- **7% QLIKE improvement:** Explain, at least in an interview or linked paper, how models and hyperparameters were chosen and what data remained untouched for evaluation. The result is compelling only if the out-of-sample design is sound.
- **Diebold–Mariano tests:** Check that the tests account for the forecast horizon and that the Holm correction covers the full family of comparisons you are claiming. Clarify whether the crisis-period result is a separate test or a descriptive observation.
- **Working paper/seminar:** Keep this if the paper is accessible or available on request. Verify the presentation status.

**Kaggle competition**
- **Features/models:** This is generic; either add a verifiable contribution or result, or remove it to make room for stronger evidence.
- **Time-grouped folds:** Keep the leakage fix, but check that the 0.02 difference is stated in the competition’s actual scoring metric. A closer match to the leaderboard is not, by itself, proof that all leakage was removed.
- **Futures-book Sharpe:** Remove this from the Kaggle project unless it truly was part of that competition. It closely duplicates the Northpeak order-book claim and makes attribution unclear.

### Skills
- **Programming:** Keep only tools you can discuss or use confidently; in particular, check whether Kafka belongs in this category based on your actual experience.
- **Methods:** Correct the spelling of **“econometircs.”** Consider prioritizing methods most relevant to the roles you’re applying for.

Overall, put the strongest quant result first within each role, remove the apparent duplicate, and make the boundaries between training, model selection, out-of-sample backtesting, and live performance unmistakable.

## Reviewer 4

# Résumé review

**Target inferred from the résumé:** quantitative researcher / systematic-trading researcher. Without a job description or named employer, I can’t reliably score ATS keyword fit or assess company-specific terminology. I’ll focus on whether the résumé makes a strong, credible case for that kind of role.

## Highest-priority changes

1. **Resolve the 18-month order-book-signal duplication.** The Northpeak and Kaggle sections both claim an out-of-sample order-book-imbalance result over 18 months. If this is the same work, the duplicate makes the résumé look padded; if they are separate efforts, distinguish their data, methods, and outcomes.
2. **Revisit the Monte Carlo random-seed claim.** Giving every worker the same seed can produce duplicate random-number streams, compromising the study. Verify that the runs used independent but reproducible streams, and make sure the description accurately reflects that.
3. **Fix the parameter-selection and Sharpe claims.** Selecting the best result from 400 configurations and presenting its Sharpe as expected live Sharpe invites concerns about multiple testing and backtest overfitting. Clarify how selection bias was addressed; don’t present a best backtest result as a live expectation unless you can substantiate that interpretation.
4. **Reorder for the target role.** The bakery role is first, while the most relevant quant experience is later. That makes the initial impression less focused. Keep employment history accurate, but make the quantitative work easiest to find.
5. **Add a brief target-role signal near the top.** There’s no summary or equivalent cue that connects your statistics research, trading research, and engineering work. Without one, the reader has to infer your intended role.
6. **Correct the skills typo** in “time-series econometircs.” It is a visible proofreading error and may interfere with keyword matching.

## Line-by-line review

### Education

- **Ph.D. candidate, Statistics, expected May 2026:** Keep the expected date while it is accurate. If your completion date or status changes, update it promptly. For quant roles, this is a useful signal, but the résumé should also make your applied research relevance obvious.
- **B.S. in Mathematics:** Relevant foundation. No change needed unless space is tight; the Ph.D. is the more important education signal.

### Sunrise Bakery — Assistant Store Manager

- **Opening shifts, team of six, weekly labor budget:** This shows responsibility and people management, but “within budget” doesn’t convey the scale or outcome. Add context or a measurable result if you have one. Consider reducing the space this role receives relative to quant work.
- **Stock counts, supplier orders, unsold bread from 12% to 7%:** A clear operational result. Clarify the period over which it changed and whether the figures are percentage points or a relative reduction. Use consistent US spelling for “labor” elsewhere in the document.

### Northpeak Capital — Quantitative Research Intern

- **35% improvement in risk-adjusted returns from a cost-aware smoother:** Strong potential headline, but currently hard to evaluate. Specify what “risk-adjusted returns” refers to, the comparison baseline, and the evaluation period. Make clear whether this was a backtest or a live result.
- **Six years of tick data, purged walk-forward splits, embargo period:** Strong validation detail. Keep it, but make sure the résumé also explains what was validated and how costs were handled. This is one of your most relevant credibility signals.
- **Feature store for 120 microstructure features, reused in two projects:** Good evidence of reusable infrastructure. Clarify your individual contribution and what “reused” means in practice, if you can substantiate it.
- **Presentation to portfolio managers and approval for a small allocation:** Useful evidence that your research reached a decision-maker. Distinguish approval from actual deployment or live performance; the current wording doesn’t say whether the allocation went live.
- **Best Sharpe from 400 configurations described as expected live Sharpe:** This is the biggest technical credibility risk in the section. The selection process itself can inflate the best backtest result. Explain your correction or validation for that selection effect, and avoid treating the selected result as an expected live outcome unless you have a defensible basis.
- **Order-book signal raising Sharpe from 1.1 to 1.5:** This is a strong result, but it overlaps with the Kaggle bullet. Keep the claim in the section that best represents where the work was done, or clearly distinguish the two if they are different. Also make clear what the comparison measures and how the 18-month out-of-sample period was defined.

**Section-level note:** Six bullets for a three-month internship is a lot, especially with overlap and a potentially problematic Sharpe claim. Prioritize the strongest, most defensible results rather than giving every activity equal space.

### Ridgeway University — Research Assistant

- **Monte Carlo study reduced from three days to five hours:** A compelling performance result, but “the same random seed on every worker” raises a serious question about whether workers generated independent simulations. Verify the random-number setup before keeping this claim as written. If the streams were independent, describe that accurately.
- **Variance bound and JASA paper under review:** Strong research evidence. Clarify your authorship/contribution and make the paper’s status easy to interpret. “Now Section 3” is not as informative to an outside reader as the paper’s title, author list, and publication status would be.
- **Teaching 60 students, 12 problem sets, 4.8/5 rating:** A credible teaching record, but less relevant to most quant-research roles. Keep it if the résumé has room; otherwise prioritize research, coding, and trading evidence.
- **Open-source R package, 3,000 downloads:** A useful adoption signal. Add context for what the download count covers and when it was measured, if available. Make sure the package’s relevance to the role is apparent.

### Projects

#### Volatility Forecasting Study

- **7% QLIKE improvement across 30 equity indices:** One of the strongest project claims. State or clarify the comparison period and how the 7% is aggregated across indices; readers will want to know that the benchmark and evaluation setup are comparable.
- **Diebold–Mariano tests, Holm correction, 24 of 30 indices, crisis periods:** Good evidence of statistical care. Clarify what “both crisis periods” refers to and how those periods were defined. This is a strength worth keeping.
- **12-page working paper and seminar presentation:** Useful evidence of communication and research maturity. Make clear that this is a working paper, not a published paper; the current wording does that reasonably well.

#### Kaggle Market Prediction Competition

- **Feature engineering and gradient boosting:** Too generic on its own. Add a concrete result, competition placement, or distinctive methodological contribution if you have one; otherwise this bullet contributes little.
- **Time-grouped folds and smaller validation-to-leaderboard gap:** Relevant evidence of leakage awareness. Be precise: a smaller score gap is not, by itself, proof that leakage was removed. Explain what leakage risk the split addressed, if you can.
- **Order-book imbalance signal, +0.4 Sharpe over 18 months:** This appears to duplicate the Northpeak achievement. Resolve the overlap before submitting. If it is the same work, retaining both claims could undermine trust; if it is different, make the distinction clear.

### Skills

- **Programming: Python, R, PyTorch, Kafka:** These are relevant, but Kafka is not supported by an experience bullet. Add evidence of how you used it, if relevant, or remove it if your experience is limited. Include other tools only if you can discuss them confidently in an interview.
- **Methods: time-series econometircs, high-dimensional statistics, gradient boosting:** Correct the typo. Also check whether the methods listed reflect your strongest demonstrated capabilities; the current list is short relative to the research and validation methods shown elsewhere.

## Reader-perspective assessment

- **ATS:** Exact keyword matching can’t be assessed without a job description. The typo may affect matching, and the skills section doesn’t surface some methods demonstrated in your bullets.
- **Recruiter glance:** **Maybe.** The Ph.D. and Northpeak internship are credible signals, but the bakery role appears first and there’s no brief target-role cue.
- **HR screen:** **Likely to advance if the role is open to an early-career candidate.** The education and internship fit, but the résumé should make the intended quant-research direction clearer.
- **Hiring manager:** **Maybe to interview.** The strongest signals are the rigorous validation work, market microstructure features, and the volatility study. The main concerns are the duplicate Sharpe claim, the 400-configuration selection issue, and the random-seed description.
- **Technical reviewer:** **Could be positive, but will probe methodology.** Expect detailed questions about multiple testing, out-of-sample definitions, transaction costs, random-number streams, and whether reported performance was live or backtested.

## Recommended order of edits

### High impact
- Resolve the duplicated signal claim.
- Verify and correct the Monte Carlo random-seed description.
- Address the selection-bias issue behind the 400-configuration Sharpe claim.
- Clarify whether reported trading results were backtested, approved for allocation, or live.
- Reorder the résumé so quant experience and research dominate the opening impression.
- Add a concise target-role cue, without claiming expertise you don’t have.

### Medium impact
- Add evaluation-period, baseline, and aggregation context to the performance results.
- Clarify your contribution and the paper’s status in the JASA bullet.
- Support or remove Kafka from the skills list.
- Add substance to the generic Kaggle bullet, or reduce the space it occupies.
- Correct the econometrics typo and standardize spelling.

### Lower priority
- Add timeframe or measurement context to the bakery and package-adoption metrics.
- Reduce teaching detail if space is limited.
- The plain-text version doesn’t let me assess page balance, layout, or formatting.

## Interview bridges to prepare

Be ready to explain these connections in your own words; these are preparation topics, not suggested résumé wording:

| Resume topic | Connection to quantitative research |
|---|---|
| Statistical Ph.D. research | Turning mathematical assumptions into estimators, bounds, and defensible empirical tests |
| Monte Carlo study | Reproducible numerical experimentation, parallel computation, and validation of simulation results |
| Microstructure feature store | Building point-in-time-safe research infrastructure that can support multiple signal investigations |
| Trading-signal validation | Preventing leakage and separating model-selection results from genuine out-of-sample evidence |
| Volatility forecasting | Comparing forecasts statistically across assets and market regimes |
| Store management | Operating under constraints, coordinating a team, and managing inventory and budgets |

**Bottom line:** There is strong material here for early-career quantitative research roles. The most important work is not adding more accomplishments; it is resolving credibility risks, clarifying what was backtested versus deployed, and making the quantitative story the first thing a reader sees.
