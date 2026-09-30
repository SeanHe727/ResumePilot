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