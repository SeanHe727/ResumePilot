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