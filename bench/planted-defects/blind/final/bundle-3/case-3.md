# case-3

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

Your strongest material is the quant research internship, but several claims currently undermine its credibility. I’d fix the **backtest selection, random-seed, and duplicated-result bullets first**.

### Header and education
- **Contact line:** Use a working link to your code or research, and check that the email and phone are the ones you want recruiters to use. A location can help if you’re applying across markets.
- **Date of birth and nationality:** Remove these from a US resume. If work authorization matters for a particular application, address that through the application’s requested fields.
- **Ph.D. entry:** Keep the expected completion date current and consistent with your applications. Consider adding a research focus only if it helps establish your fit for quant roles.
- **B.S. entry:** No substantive change needed.

### Northpeak Capital
- **“Improved risk-adjusted returns by 35%”:** Name the metric, comparison baseline, and evaluation period. Otherwise the percentage is hard to assess, especially beside the later Sharpe claim.
- **“Validated the signal on 6 years of tick data”:** Distinguish development data from the 18-month out-of-sample test cited later. Check that “every backtest decision” is supportable across feature construction, parameter selection, and execution assumptions—not just the splits.
- **Feature store:** Good concrete contribution. Clarify your ownership and the nature of the two later uses if you can do so without disclosing proprietary details.
- **Presentation/live allocation:** Keep the distinction between *approval* and actual live performance. Confirm that “next quarter” still describes the outcome accurately.
- **“Selected … 400 backtested configurations”:** Change the substance of this claim. The best backtested Sharpe is not an unbiased estimate of expected live Sharpe after selecting from 400 configurations. Explain how you accounted for selection and how you estimated prospective performance; don’t present the winning backtest as a live expectation.
- **Order-book signal/Sharpe 1.1 to 1.5:** This is a strong result, but specify what the baseline and resulting book represent, and reconcile its test period with the six years above. Ensure the 18 months was genuinely out of sample with respect to the choices you report.

### Ridgeway research assistantship
- **Monte Carlo runtime:** Change the “same random seed on every worker” detail. It suggests workers may have repeated identical random draws, compromising the study. Verify what actually happened and describe the independent or appropriately managed random streams used; if runs were duplicated, correct the experiment before claiming the result.
- **Variance bound:** Strong research contribution. Verify the comparison to the prior bound and the paper’s current submission status; make your individual contribution clear.
- **Teaching:** Fix the tense (“writes” conflicts with the completed role dates). If teaching was a separate appointment, label it accurately rather than folding it into the research assistantship.
- **R package:** Retain if the download count and first-year window are verifiable. Clarify your contribution if others coauthored it.

### Projects
- **Volatility study, “Pioneered…”:** Replace the broad self-assessment with what you actually modeled, what you compared it against, and the measured result. As written, it gives no evidence of forecasting performance.
- **Diebold–Mariano tests:** Identify the forecasting target, horizon, benchmark, and size of the gain. Check that the testing setup and Holm correction support both the “24” finding and the separate “both crisis periods” claim.
- **Working paper:** Keep it, but make the presentation status precise and provide a link if the paper is public.
- **Kaggle, model-building bullet:** Add your specific contribution or a meaningful competition result; the current description is generic.
- **Kaggle, leakage bullet:** Good diagnostic result. Make clear which score gap closed and whether the revised validation better predicted the leaderboard rather than merely matching it once.
- **Kaggle, “Added 0.4 to the Sharpe…”:** Remove or relocate this. It appears to repeat the Northpeak result and is difficult to reconcile with a Kaggle team project; leaving it here raises questions about attribution and dates.

### Skills
- Keep skills you can discuss in depth. Add relevant tools only if you used them and they help match your target roles; the experience bullets should substantiate the list.

## Reviewer 2

## Highest-priority fixes

1. **Remove or substantially qualify the claim that the best of 400 configurations had an expected live Sharpe.** Selecting the maximum from many backtests creates selection bias; that Sharpe is not a sound estimate of live performance. Use a genuinely untouched evaluation set for performance claims, and make clear how parameter selection was separated from testing.
2. **Resolve the repeated order-book-signal results.** The Northpeak and Kaggle sections both claim an order-book imbalance signal added Sharpe over 18 months. If these are the same work or result, don’t present them twice. If they are distinct, make the distinction clear and verify that the metrics and test periods are accurate.
3. **Make the performance claims interpretable.** Define the Sharpe or other metric, its baseline, measurement period, and whether results are annualized and net of costs. The “35%” claim especially needs a clear definition.
4. **Remove your date of birth and nationality.** They are generally unnecessary on a U.S.-style résumé. Include work-authorization information only if relevant to the application.

## Header

- **Name:** Fine.
- **Phone and email:** Fine, assuming they are current and professional.
- **Code link:** Make sure it is live, clickable, and shows relevant work. A portfolio or LinkedIn link could be useful if you maintain one.
- **Date of birth and nationality:** Remove them. They do not help establish your qualifications and can introduce bias.

## Education

- **Ph.D. entry:** Keep the expected completion date current. If you have reached formal candidacy, the title is appropriate; otherwise, use the status that accurately reflects your program. Consider adding a concise research focus if it strengthens your fit for the roles you’re targeting.
- **B.S. entry:** Clear as written. Add honors or distinctions only if you have relevant ones to report.

## Experience

### Northpeak Capital — Quantitative Research Intern

- **“Improved risk-adjusted returns by 35%” bullet:** Define what “risk-adjusted returns” means and what the 35% compares against. Include the evaluation period and clarify whether the result was out of sample and after costs. Also distinguish this result from the separate Sharpe increase later in the section.
- **Six years of tick data / purged walk-forward bullet:** The validation approach is a strength, but the claim that *every* decision used only information available at the time is too absolute—especially given the 400-configuration selection described below. Specify the evaluation design accurately and make clear how tuning was kept separate from reported test results.
- **Feature-store bullet:** Good evidence of reusable work. Add the relevant tools or stack if useful, and clarify what “reused in two later signal projects” means if you can substantiate it. Keep the point-in-time-join detail; it is relevant to quant research.
- **Presentation / live allocation bullet:** Clarify whether the allocation actually went live or was only approved for a future period. If it went live, report the status or outcome only if you can support it. “Small” is vague; quantify it only if disclosure is allowed.
- **400 configurations / expected live Sharpe bullet:** Remove this as written. The best result among many tested configurations is subject to multiple-testing bias and should not be presented as the expected live Sharpe. If the work is important to mention, report it in a way that distinguishes exploratory selection from genuinely independent validation.
- **Order-book imbalance / Sharpe 1.1 to 1.5 bullet:** Clarify whether this is the same signal or result as the 35% claim. State what the starting and ending Sharpe measure, whether they are annualized, the test period, and how costs were handled. Explain whether the increase is attributable to the signal alone or to the broader book.

### Ridgeway University — Research Assistant

- **Monte Carlo speed-up bullet:** The runtime improvement is strong, but check the description of the random seeds. If each worker was initialized with the same seed and generated the same stream, runs may not have been independent, undermining the study. Describe the actual reproducible random-stream setup accurately; don’t claim the same seed per worker unless that was methodologically sound.
- **Variance-bound bullet:** This is a strong research contribution. Clarify the nature of the comparison behind “tightens the previous bound by a log factor,” and ensure the paper’s status is current. “Under review” should not imply acceptance.
- **Teaching bullet:** Fix the tense mismatch between the past teaching activity and the present-tense reference to writing problem sets. Also specify what the 4.8/5 rating measures if that context is not obvious.
- **R package bullet:** Useful evidence of impact. Identify or link the package, and make sure the 3,000-download figure comes from a reliable source and refers to a clear time period.

## Projects

### Volatility Forecasting Study

- **“Pioneered a data-driven, research-first approach” bullet:** Remove it or replace it with a specific, verifiable contribution. As written, it is promotional but doesn’t tell the reader what you did or found.
- **Diebold–Mariano / Holm-correction bullet:** This is one of the most informative bullets. Clarify what forecasts or benchmarks were compared, what the evaluation period was, and whether crisis periods were part of the same testing plan. The phrase about 24 indices and both crisis periods is ambiguous; make the scope of each result clear. Account for multiple comparisons across all tests you report.
- **Working-paper / seminar bullet:** The paper and presentation are relevant; the page count is less important. Add a link if the paper is shareable, and keep the status of the work clear.

### Kaggle Market Prediction Competition

- **Features and gradient-boosting bullet:** It is too general to show what you contributed or how the competition went. Add a concrete result or contribution if available, such as placement or a meaningful evaluation outcome.
- **Time-grouped-folds / 0.02-gap bullet:** Clarify what the 0.02 represents and whether the gap narrowed or disappeared. Be precise about what changed in the validation process; correcting leakage can alter validation scores rather than simply improve them. Also note that repeated use of a public leaderboard can itself encourage overfitting.
- **Order-book signal / 0.4 Sharpe bullet:** This appears to duplicate the Northpeak result. Remove it if it is the same work or metric. If it is separate, clearly distinguish the project, signal, data, and evaluation period so the two claims don’t look like double-counting.

## Skills

- **Programming:** The list is short for a quantitative research résumé. Add tools you can genuinely use in an interview or on the job, such as relevant database, systems, or version-control tools.
- **Methods:** Consider adding methods that are both relevant to your target roles and demonstrated elsewhere in the résumé. Avoid listing broad topics you cannot discuss in depth.
- **Overall:** Keep the skills section factual; don’t add proficiency ratings unless they are meaningful and defensible.

## Presentation and consistency

- Keep date, location, separator, and punctuation formatting consistent throughout.
- Ensure line breaks and bullet wrapping are clean in the final document.
- Prioritize the strongest, defensible quant-research evidence. The résumé has good technical material, but the repeated Sharpe claims and the selected-best-of-400 claim currently create avoidable credibility concerns.

## Reviewer 3

# Résumé critique

**Target role inferred:** Quantitative researcher, likely focused on systematic strategies, time-series research, or market microstructure. There’s no job description or employer, so I can’t assess company fit or calculate a meaningful JD keyword-match rate. I’m evaluating the résumé against that inferred role and the text provided; I can’t verify the claims or assess the visual layout from plain text.

## Overall assessment

You have credible, relevant material: a statistics Ph.D. in progress, quantitative research experience, out-of-sample testing, market-microstructure work, and several concrete results. The main issues are **not a lack of relevant experience**. They are clarity, ordering, and credibility:

1. A backtest-selection claim raises a serious methodological concern.
2. Several performance claims lack enough context to interpret or compare.
3. The same 18-month order-book result appears in two places and may be duplicated.
4. Your strongest experience bullets are buried below weaker or riskier ones.
5. Some wording is vague, and one bullet has a tense/grammar problem.

Before submitting, resolve the backtest claim and reconcile the repeated Sharpe result. Those matter more than adding keywords.

## Domain lens: quantitative research

### Likely reviewer

A quantitative research hiring manager or senior researcher would look for evidence that you can form a research hypothesis, avoid data leakage and selection bias, measure performance after costs, and explain whether an apparent result is likely to survive live trading. They will be skeptical of impressive backtest metrics without a clear benchmark, testing procedure, or accounting for the number of strategies tried.

### What I can and can’t assess

The résumé points toward quantitative research, and it already includes relevant language such as *futures*, *tick data*, *microstructure*, *walk-forward splits*, *embargo*, and *Sharpe ratio*. Without a JD, I can’t determine which specific tools or methods this employer prioritizes, or whether the target is closer to research, execution, portfolio construction, or statistical methodology.

### Competitive positioning

- **Likely advantage:** The combination of a statistics Ph.D. and practical futures research, including costs and out-of-sample testing.
- **Likely disadvantage:** Candidates with a longer record of live deployment, direct portfolio P&L ownership, or more extensive industry experience may look more immediately proven.
- **Implication:** Make the rigor and limits of your research easy to assess. Do not imply that a selected backtest result is an expected live result.

## Review by reader

### ATS

A precise match rate isn’t possible without a JD. The résumé contains a solid base of quantitative-research terms, but the Skills section is sparse. If accurate, consider including additional tools and methods you’ve actually used—such as SQL, C++, Git, Linux, statistical testing, portfolio construction, or execution modeling. Don’t add them just because they are common in quant postings.

### Recruiter glance

**Verdict: Maybe, leaning forward.** The Ph.D. and quantitative-research internship are relevant signals, but there’s no short statement of your research focus, and the header includes personal details that are usually unnecessary on a U.S. résumé.

### HR screen

**Verdict: Phone screen, if the role’s baseline requirements match.** Your education and internship establish a plausible fit. The biggest issue at this stage is that several metrics are difficult to interpret without a clear baseline or definition.

### Hiring manager

**Verdict: Maybe.** The strongest evidence is relevant, but the backtest-selection bullet could undermine confidence in the rest of the results.

They will likely notice:

1. You have direct exposure to futures, tick data, and order-book signals.
2. You demonstrate care around costs and time-aware validation.
3. Your claims about selected configurations and Sharpe improvements need clarification.

**Likely first question:** How did you account for testing 400 configurations when estimating the strategy’s expected performance?

### Technical reviewer

**Truthfulness:** Not independently verifiable from the résumé. One claim raises a methodological red flag; see the Northpeak bullet review below.  
**Consistency:** The order-book result appears in both the internship and Kaggle sections, with potentially different descriptions. Clarify whether these are distinct results.

## Line-by-line changes

### Header

- **Remove date of birth and nationality** unless an application specifically requires them. They aren’t normally useful for evaluating a U.S. résumé and can invite irrelevant screening.
- **Keep contact details, but make the code link clearly identifiable as a portfolio or repository link.** The current URL is understandable, but a reviewer should be able to tell what it leads to.
- **Consider adding a brief research-focus descriptor near your name.** A recruiter should be able to infer your target area quickly rather than reconstruct it from the full page.

### Education

- **Keep the Ph.D. expected completion date explicit.** It helps reviewers assess availability and seniority.
- **Check whether your Ph.D. status will still be current when you apply.** Update the date or degree status if it changes.
- **Consider whether your dissertation or research area is relevant enough to include.** It could help establish a clear connection between your academic work and quant research, but only if it is specific and relevant.

### Northpeak Capital — Quantitative Research Intern

- **Move the final order-book signal bullet higher if it is your strongest verified result.** As written, a substantial performance result appears after several bullets, including a claim that may concern a reviewer.
- **“Improved risk-adjusted returns by 35%” needs a defined metric and comparison.** Specify what “returns” means in this context, what the 35% is relative to, and whether the figure is after costs. Otherwise, readers can’t interpret or compare the result.
- **The validation bullet is relevant, but explain the protocol precisely enough to distinguish it from a general claim of rigor.** “Every backtest decision used only information available at the time” is broad; make sure the actual process supports that assertion.
- **Keep the feature-store result, but clarify the extent of your ownership and what “reused” means.** Adoption by two projects is useful evidence; its significance is clearer if readers can tell whether the work was exploratory code or a maintained research tool.
- **Keep the presentation and allocation outcome, but clarify the status of the allocation.** If it was approved but not yet deployed, or deployed without measured results, make that distinction clear. “Small” is also subjective.
- **Resolve the 400-configuration claim before using it.** Selecting the best result among hundreds of backtests and reporting its Sharpe as “expected live Sharpe” suggests selection bias and overstates what a backtest can establish. If you used a separate holdout, multiple-testing adjustment, or other correction, make that treatment clear. If you did not, don’t present the selected Sharpe as an expected live result.
- **Clarify whether the order-book signal here is the same one described in the Kaggle project.** If it is, avoid presenting the same 18-month performance result twice as though it were independent evidence. If it is different, make the distinction apparent.
- **For the Sharpe increase from 1.1 to 1.5, identify what is being compared and how performance was measured.** The result is potentially strong, but readers need to know whether it is after costs, portfolio-level or signal-level, and whether the figures come from the same out-of-sample period.

### Ridgeway University — Research Assistant

- **Revisit the Monte Carlo random-seed detail.** “The same random seed on every worker” can create identical or correlated random streams rather than a valid parallel simulation. Confirm that you used independent, correctly managed random streams; if not, the runtime result may be real, but the experiment’s validity needs attention.
- **Make the variance-bound result more assessable.** State your specific contribution and the conditions under which the improvement holds. “Tightens the previous bound by a log factor” is interesting but leaves the result hard to evaluate.
- **Keep the under-review status explicit, as you do.** If you include this work in a separate publications section, maintain the same status and identify your role accurately.
- **Fix the teaching bullet’s tense and clarify your responsibilities.** It switches from past-tense teaching to present-tense “writes,” and the relationship between teaching recitations and creating problem sets is unclear.
- **Keep the package adoption metric if it is supportable, but make the download count interpretable.** Downloads can include repeat or automated activity; a repository, package name, or other adoption evidence can help a reviewer assess the claim.

### Volatility Forecasting Study

- **Remove or replace the “pioneered a data-driven, research-first approach…” bullet.** It makes broad, promotional claims but gives no method, result, or evidence. It is weaker than your concrete statistical-testing bullet.
- **Keep the Diebold–Mariano and Holm-correction result, but clarify the test setup if space permits.** The number of indices and the correction are useful specifics; readers may also want to know what models or forecasts were compared and how “crisis periods” were defined.
- **Clarify the working paper’s status and your individual contribution.** A seminar presentation is useful, but a 12-page length does not establish research quality or publication status.

### Kaggle competition

- **Make the project’s outcome clearer.** The first bullet lists standard modeling activities but no competition result, rank, score, or distinct research contribution. If there was no meaningful outcome, consider reducing its space.
- **Be precise about the validation-leakage claim.** A smaller gap between local validation and leaderboard scores does not, by itself, prove leakage was eliminated. Explain what the time-grouped folds prevented and how you measured the change.
- **Reconcile the order-book result with the internship bullet.** If this is the same signal and same evaluation period, consolidate the evidence. If it is a separate signal, make the distinction clear so the repeated metric doesn’t look like double-counting.

### Skills

- **Expand the section only with tools and methods you can substantiate.** Three programming languages and three methods may undersell your capabilities, especially for a technical research role.
- **Organize skills so reviewers can quickly distinguish programming tools from research methods and financial-domain experience.** The current labels are clear but minimal.
- **Avoid adding a tool solely to satisfy a presumed ATS filter.** A technical reviewer may ask you to use it.

### Structure and ordering

- **Put the strongest, most defensible evidence first within each position.** The present order does not consistently do that, and the selected-best-backtest bullet could cast doubt on the results around it.
- **Consider a publications or research-output section if the paper under review and working paper are substantial.** Clearly label statuses; do not make a paper under review sound published.
- **The résumé has no summary, which is not automatically a problem.** A short research-focus statement may help if it gives a recruiter a useful frame that isn’t already obvious from the title and first bullets.

## Provisional score

These scores are **directional only**: without a JD, target employer, or rendered document, ATS alignment and visual quality cannot be properly scored.

| Dimension | Score | Notes |
|---|---:|---|
| ATS keyword alignment | 6/10 | Relevant quant vocabulary, but no JD for comparison |
| Summary and positioning | 5/10 | No concise statement of research focus |
| Skills | 6/10 | Relevant but very short |
| Bullet quality | 6/10 | Good specifics mixed with vague or under-explained claims |
| Publications and research outputs | 6/10 | Work is mentioned, but status and presentation could be clearer |
| Narrative coherence | 7/10 | Strong academic-to-industry direction; some project overlap |
| Page fill and visual presentation | Not assessable | Plain text only |
| Credibility signals | 6/10 | Strong evidence potential, but the selection-bias issue needs resolution |

**Most important improvement:** Correct or remove the claim that the best of 400 backtests represents expected live Sharpe. That is a methodological credibility issue, not a wording issue.

## Prioritized actions

### High impact — do these first

1. **Resolve the 400-configuration selection claim.** Explain any valid correction or independent evaluation; otherwise, do not characterize the selected backtest Sharpe as expected live performance.
2. **Reconcile the repeated 18-month order-book result.** Establish whether it is one result or two, and present it only as distinct evidence if the experiments genuinely differ.
3. **Add context to the performance figures.** Define the comparison, measurement basis, costs, and testing period where needed.
4. **Check the parallel Monte Carlo random-stream setup.** Identical seeds across workers can invalidate the statistical experiment if they produce duplicate streams.
5. **Remove the vague volatility-modeling bullet and fix the teaching bullet’s tense.** These are straightforward clarity problems.

### Medium impact

1. Reorder each role’s bullets to lead with the strongest defensible, role-relevant evidence.
2. Clarify your individual contributions, the validation procedures, and the status of any proposed or approved live allocation.
3. Expand Skills with additional tools or methods only where you have real experience.
4. Make research-output status and authorship transparent.

### Cosmetic or optional

1. Remove personal details that are not useful for the target market.
2. Add a research-focus descriptor if it makes the target role clearer.
3. Add project outcomes or competition results only when they are meaningful and verifiable.

## Interview preparation

For the central topics, be ready to explain:

| Resume topic | What to be ready to explain |
|---|---|
| The 400-configuration search | How you controlled for selection bias and what evidence supports any live-performance estimate |
| Walk-forward testing | Split design, embargo rationale, and how you avoided look-ahead or leakage |
| Order-book signal | Whether it is the same result across sections, what the Sharpe comparison represents, and how costs were handled |
| Feature store | Your specific contribution, point-in-time correctness, and how the later projects used it |
| Monte Carlo study | How random streams were managed across workers and how you checked that parallelization preserved the experiment |
| Volatility forecast study | Forecasts compared, testing procedure, correction for multiple comparisons, and your contribution |

**Verdict:** You have a credible foundation for quantitative-research applications. Tighten the evidence and resolve the methodological concern before polishing wording or adding more keywords.

## Reviewer 4

5 errors, 12 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998 | Nationality: Indian

**Problem**
[Error] The résumé includes personal details conventionally omitted from a résumé.

**Why**
A reader is not meant to weigh date of birth or nationality when assessing the candidate’s qualifications. Including them uses space without supporting the application.

**How to change it**
Remove the personal-details line.

> raised the desk book’s Sharpe ratio from 1.1 to 1.5; Added 0.4 to the Sharpe ratio

**Problem**
[Error] The same order-book imbalance result appears in entries with different dates and project contexts.

**Why**
The Northpeak entry describes a signal raising Sharpe from 1.1 to 1.5 over 18 months out of sample, while the Kaggle entry says an order-book signal added 0.4 to a futures book’s Sharpe over 18 months out of sample. A reader may question which entry owns the result or whether these are distinct achievements.

**How to change it**
Clarify [which entry owns the result], or distinguish [how the signals and results differ] so both accounts can be true.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] “Improved risk-adjusted returns by 35%” does not identify the metric or comparison behind the percentage.

**Why**
A reader cannot tell whether the percentage refers to Sharpe, another risk-adjusted metric, or something else. Without a comparison basis, the size and significance of the result are difficult to assess.

**How to change it**
Replace “risk-adjusted returns” with [risk-adjusted metric] and add [comparison baseline and evaluation period] if space permits.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not guarantee that every backtest decision used only information available at the time.
2. [Important] “Validated the signal” gives no result from the validation.

**Why**
1. Those techniques reduce leakage between training and validation windows, but they do not ensure that every feature, timestamp, universe choice, or execution assumption was historically available. The absolute claim therefore goes beyond what the stated validation method supports.
2. The reader can see the testing method and period, but not what the test established. Without an outcome and comparison, the validation detail does not show whether the signal performed well.

**How to change it**
1. Replace that explanation with wording that the splits and embargo were used to reduce leakage; retain the stronger claim only if you can verify point-in-time availability for all inputs and decisions.
2. After “embargo period,” add [out-of-sample result and comparison baseline]; keep the information-timing explanation only if room remains.

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The feature-store reuse result is delayed in a wordy relative clause.

**Why**
The clause makes the reader work through the sentence before reaching the evidence of adoption. Putting the reuse result directly after the feature-store description makes that outcome easier to spot.

**How to change it**
Replace the relative clause with a direct phrase such as “reused by the research team in two later signal projects.”

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Important] “Small live allocation” does not say how large the approved allocation was.
2. [Polish] The approval outcome is buried in a long relative clause.

**Why**
1. Approval is meaningful evidence that the work was taken forward, but the reader cannot tell how much capital or what share of the book it represented. That leaves the scale of the outcome unclear.
2. The sentence spends extra words connecting the presentation to the result instead of stating the result directly. This makes the live-allocation approval less immediate.

**How to change it**
1. If disclosable, replace “small” with [allocation size or share of the book].
2. Replace the clause with a direct result such as “secured approval for a small live allocation for the next quarter.”

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe from 400 backtested configurations is not, by itself, an unbiased estimate of expected live Sharpe.

**Why**
Selecting the highest Sharpe across many configurations creates selection bias: the winner is likely to look unusually strong by chance. A reader cannot treat its backtested result as an estimate of expected live performance without independent validation.

**How to change it**
Replace “the expected live Sharpe” with “the best backtested Sharpe among 400 configurations”; describe it as expected live Sharpe only if an independent validation method to estimate that result was run.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
[Important] Using the same random seed on every worker can produce duplicate random-number streams rather than independent Monte Carlo runs.

**Why**
With the same generator and setup, workers initialized with the same seed produce identical streams if they consume random numbers in the same way. That can make the effective number of independent runs smaller than 2,000 and undermine Monte Carlo estimates based on independent replicates.

**How to change it**
If the workers used distinct, properly separated random streams, state that; otherwise, do not describe the study as 2,000 independent Monte Carlo runs.

> Taught weekly recitations for 60 students in graduate probability and writes the problem sets, earning a 4.8/5 teaching rating.

**Problem**
[Error] “Writes” is present tense in a role that ended in August 2021 and conflicts with “Taught.”

**Why**
The dates place the work in the past, while “writes” suggests an ongoing responsibility. That makes the timing of the claimed work inconsistent.

**How to change it**
Change “writes” to “wrote.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Pioneered a data-driven, research-first approach to volatility modeling that delivered robust, actionable insights.

**Problem**
[Important] “Pioneered a data-driven, research-first approach” is self-assessing, and “robust, actionable insights” does not say what the study found or how it was used.

**Why**
A reader cannot judge the value of the work from broad claims of robustness or usefulness. A concrete finding or resulting decision would make the outcome assessable.

**How to change it**
Cut “Pioneered a data-driven, research-first approach” and replace “robust, actionable insights” with [the study’s main finding and, if applicable, what decision or use it informed].

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] “The forecast gain” does not identify the forecast measure or the baseline it improved on.
2. [Important] The statistical result is buried after the method.

**Why**
1. Without the metric and comparison, readers cannot interpret what the reported significance establishes. Naming the comparison would make the result easier to assess.
2. The finding that the gain held at the 5% level on 24 of 30 indices is the clearest evidence of the result. Leading with it lets the reader see that evidence before the test details.

**How to change it**
1. Clarify “the forecast gain” with [forecast-error metric] compared with [baseline model].
2. Move the finding that the gain held at the 5% level on 24 of 30 indices to the start of the bullet, then name the Diebold-Mariano tests and Holm correction.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
1. [Important] The feature and model work has no stated outcome or evidence of what it achieved.
2. [Polish] “For a market prediction competition” repeats the project context already stated in the title.

**Why**
1. A reader can see the activity, but not whether the model performed well or improved on anything. One result with a useful comparison would make the contribution easier to assess.
2. The title already identifies this as a market prediction competition. Repeating that context uses space without adding information about the work.

**How to change it**
1. Add [competition rank or prediction metric versus baseline] to show the model’s result.
2. Cut “for a market prediction competition.”

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The fold change is credited with reducing leakage and closing the score gap without evidence that it caused either result.

**Why**
Time-grouped folds can reduce leakage when they prevent the relevant information from crossing time boundaries, but switching folds alone does not establish that leakage was reduced. Nor does it show that the change caused the gap to close without comparable before-and-after evaluations.

**How to change it**
If comparable evaluations showed this, specify the leakage mechanism and the scores before and after the change; otherwise, describe the switch to time-grouped folds without claiming it cut leakage or closed the gap.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Important] The competition work described does not establish that the order-book signal was evaluated as a futures strategy.
2. [Important] The 0.4 Sharpe increase has no stated comparison strategy or book.
3. [Important] “Added 0.4 to the Sharpe ratio” is ambiguous about whether the ratio increased by 0.4 or reached 0.4.

**Why**
1. Engineering features and training prediction models do not by themselves show that an order-book imbalance signal was evaluated as a futures strategy. An 18-month out-of-sample period alone also does not establish that the reported Sharpe increase is attributable to the signal under realistic trading assumptions.
2. A reader needs the comparison to understand what changed when the signal was added and how to interpret the reported gain. Without it, the number does not show what performance it improved on.
3. A reader cannot tell whether 0.4 is the size of the change or the resulting Sharpe ratio. That ambiguity affects the meaning of the reported performance result.

**How to change it**
1. If a separate futures-book backtest produced this result, identify the evaluation and its relevant assumptions; otherwise remove the Sharpe claim or describe only the competition model results.
2. Name the comparison behind the increase, such as the same book without the signal, if accurate, and retain the 18-month out-of-sample period.
3. If the ratio increased by 0.4, say “increased Sharpe by 0.4”; if it reached 0.4, say “raised Sharpe to 0.4.”

## What already works

- “Released an open-source R package for…”: The line states both what the package does and the methods it supports.
