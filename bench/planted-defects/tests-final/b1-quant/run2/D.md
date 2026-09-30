# Résumé critique

**Target role inferred from the résumé:** Quantitative researcher, especially market-microstructure or systematic-strategy research.  
**Important limitation:** There’s no job description or target employer, so I can’t assess fit to a particular posting or calculate a genuine JD keyword-match score. The ATS scan and ratings below are general estimates for this inferred role.

## Domain-specialist lens

### Likely reviewer
A quant research lead, portfolio researcher, or desk-side hiring manager would likely focus on whether your backtests are credible, your statistics are sound, and your research can translate into a usable signal. They’ll see a promising mix of market data, forecasting, and statistical methods, but may scrutinize the short internship, the size of the reported improvements, and your treatment of Sharpe ratios.

### Employer context
No employer is specified, so company-specific priorities and vocabulary can’t be assessed. For a typical quant research role, relevant signals include rigorous out-of-sample testing, point-in-time data, transaction-cost modeling, reproducibility, and clear evidence that a research result survived practical constraints.

### Role vocabulary: general proxy
The résumé already includes many useful terms: quantitative research, order book, microstructure, futures, backtesting, out-of-sample testing, transaction costs, slippage, Sharpe ratio, volatility forecasting, HAR-RV, Python, R, PyTorch, and high-dimensional statistics. SQL, C++, and execution algorithms are absent; whether those matter depends on the posting. Don’t add them unless they reflect real experience.

### Vocabulary alignment
Your content is strongest when it names the financial data or research problem directly. Preserve terms such as *order-book imbalance*, *index futures*, and *point-in-time* where accurate. Check that broad labels such as *Methods* don’t obscure your specific strengths in time-series forecasting, econometrics, and statistical learning.

### Gap ranking
- **Potentially serious, depending on the posting:** Production research experience, SQL or C++, and direct execution or portfolio-construction work.
- **Not established as gaps from this résumé alone:** The skills above may simply be omitted; add them only if you can substantiate them.
- **Immediate credibility issue:** The claim about annualizing a daily Sharpe ratio by multiplying by 252 is mathematically suspect and needs correction or removal.

### Methodology transfer
- **Order-book signal and cost-aware smoothing:** Directly relevant to systematic strategy research, provided the backtest design and cost assumptions are defensible.
- **Diebold–Mariano testing:** Shows statistical evaluation discipline; a reviewer may ask how you handled testing across 30 indices.
- **Point-in-time feature store:** Transfers well to research infrastructure and reproducible market-data workflows.
- **Volatility forecasting study:** Relevant to forecasting and model comparison, though the project bullets repeat the same model and dataset.
- **Simulation pipeline and estimator result:** Demonstrate statistical depth and computational discipline, but are less directly connected to trading unless you make that connection in conversation.

### Competitive landscape
The obvious competitor may have a longer quant internship, direct production-strategy experience, and stronger C++/SQL or execution-system skills. Your strengths are the combination of graduate statistics, financial-market research, documented data hygiene, and measurable research outputs. Your résumé needs to make the rigor and practical relevance of those outputs unmistakable.

## Five-perspective read-through

### ATS scan — general proxy, not a JD score

| Term | Match? |
|---|---|
| Quantitative research | Yes |
| Time series | Yes |
| Order book | Yes |
| Market microstructure | Yes |
| Index futures | Yes |
| Backtesting | Yes |
| Out-of-sample | Yes |
| Transaction costs | Yes |
| Slippage | Yes |
| Sharpe ratio | Yes |
| Volatility forecasting | Yes |
| HAR-RV | Yes |
| Python | Yes |
| R | Yes |
| PyTorch | Yes |
| Feature engineering | Yes |
| High-dimensional statistics | Yes |
| SQL | No |
| C++ | No |
| Execution algorithms | No |

**Proxy match:** 17/20. This is not a score for any specific application; an actual posting could change the terms and their importance.

### Recruiter glance — 10 seconds
**Verdict: Maybe.** The Ph.D. candidate status and quant internship are credible signals, but there’s no summary or clear headline to position you quickly. The current bakery role may prompt questions about your near-term career direction and time commitments.

### HR screen — 30 seconds
**Verdict: Borderline to phone screen.** Your education and quant internship appear relevant, but the résumé should make your target role clearer and resolve the apparent Sharpe annualization error. The ongoing Ph.D. timeline should be current and easy to interpret.

### Hiring manager — 2 minutes
**Verdict: Maybe, with potential to interview after credibility fixes.**

1. The quant internship has the most directly relevant material: an order-book signal, cost-aware smoothing, statistical testing, and point-in-time features.
2. The Sharpe annualization bullet is a serious concern; it could undermine confidence in the rest of the analysis.
3. Several project results overlap, and one stated percentage improvement does not match the values given.

**Likely first question:** How did you construct the out-of-sample evaluation, account for trading costs, and establish that the signal’s improvement was robust?

### Technical reviewer — 10 minutes
**Truthfulness:** Can’t independently verify claims from the résumé alone. Several metrics need clearer definitions or reconciliation.  
**Consistency:** One mathematical issue and one calculation mismatch stand out. The paper under review is appropriately identified as under review.

## Eight-dimension scoring

These are provisional résumé-quality scores for the inferred role, not a calibrated score against a specific job description.

| Dimension | Score | Weight | Weighted | Notes |
|---|---:|---:|---:|---|
| ATS keywords | 7/10 | 15% | 1.05 | Strong general quant vocabulary; no JD for a true match assessment. |
| Summary | 5/10 | 10% | 0.50 | No summary or headline to frame your target role. |
| Skills section | 6/10 | 10% | 0.60 | Relevant core tools, but one typo and limited evidence/context. |
| Bullet quality | 6/10 | 25% | 1.50 | Strong quantified material, offset by credibility and consistency problems. |
| Publications | 5/10 | 10% | 0.50 | One under-review paper is mentioned, but no publication section or fuller citation. |
| Narrative coherence | 7/10 | 15% | 1.05 | Clear quantitative thread, with some distracting or overlapping content. |
| Page fill and visual | 6/10 | 5% | 0.30 | Text-only copy doesn’t allow a real layout or page-fill review. |
| Credibility signals | 6/10 | 10% | 0.60 | Good research evidence, but the Sharpe claim and percentage discrepancy need attention. |
| **Total** |  | **100%** | **6.10/10 (61.0/100)** | **Provisional; fixable issues are depressing the score.** |

## Interview likelihood

These are rough judgments based only on the supplied résumé and inferred target, not measured probabilities for a particular employer.

| Reader | Estimated outcome | Main factor |
|---|---:|---|
| ATS | 70% likely to pass a general quant keyword screen | Many relevant terms appear, but the actual JD is unknown. |
| Recruiter | 55% likely to forward | Relevant education and internship, but target positioning is implicit. |
| HR | 55% likely to schedule a screen | Relevant background, with questions about dates, current role, and career focus. |
| Hiring manager | 40% likely to interview as written | Strongest concern is confidence in the quantitative claims. |
| Technical panel | 45% likely to see potential | Good methods and research range, but they will probe the metrics and backtest methodology. |

**Ceiling estimate:** Current résumé: roughly 61/100 on this provisional rubric. With the credibility, consistency, and focus changes below: approximately 75–80/100 for a suitable quant-research posting. A posting requiring extensive production trading experience or specific programming tools could impose a lower ceiling; no JD is available to judge that.

## Changes to make, ranked

### Tier 1 — High impact

1. **Correct or remove the daily Sharpe annualization claim.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization method; under common assumptions, the factor is the square root of the number of trading days. As written, this is the most damaging credibility issue in the résumé. Verify the calculation and the precise quantity you reported.

2. **Reconcile the forecast-error percentage.** A reduction from 0.20 to 0.15 is a 25% reduction relative to 0.20, not 33%. Check the underlying metric, baseline, and denominator. If 33% refers to something else, make that distinction clear.

3. **Clarify the internship’s performance comparisons.** For the Sharpe increase, specify what the 1.1 and 1.5 represent and ensure the comparison is like-for-like. For the smoother, make the meaning of “90% of gross returns” and the slippage estimate unambiguous. A quant reviewer will want to understand the benchmark, costs, and evaluation window.

4. **Fix the feature-store bullet’s grammar and sentence structure.** Its opening construction is awkward, making a strong infrastructure accomplishment harder to understand. Also clarify your personal contribution and what “reused in two later projects” means in practice.

5. **Improve the top-of-page positioning.** Add a concise role-focused summary or headline so a recruiter immediately understands that you are pursuing quant research, rather than having to infer it from the experience section. Keep it factual and consistent with your actual experience.

6. **Check the Ph.D. status and dates.** The expected graduation date is May 2026. Confirm that this remains accurate and that the status is current when you apply. If relevant, make it possible to understand your availability without leaving the recruiter to infer it.

### Tier 2 — Medium impact

1. **Reduce repetition across the three volatility-project bullets.** They all describe the same model and evaluation setting. Keep the distinct results that best demonstrate forecasting quality and model value; avoid presenting closely related measurements as separate achievements without explaining how they differ.

2. **Review the three quant-project results for statistical context.** The 6-point increase in directional hit rate, the QLIKE improvement, and the forecast-error reduction would be stronger if a reader could tell whether they come from the same test period, baseline, and experimental setup. Keep the claims comparable and reproducible.

3. **Refine the Diebold–Mariano claim.** State clearly what forecasts were compared and what the test supports. Since you report results across 30 indices, be ready to explain whether you addressed repeated testing or how you interpreted results across that set.

4. **Resolve the package bullet’s competing emphasis.** The package release and download count are useful; cluster maintenance, reading-group organization, and grading crowd the same bullet and make its main accomplishment harder to scan. Separate or deprioritize duties that don’t support your target role.

5. **Reconsider the ordering or prominence of the current bakery role.** Keep the role if it is current and important, but for a quant-focused application it should not take attention away from the directly relevant internship and research. Make the transition from the Ph.D. and quant internship to this role understandable if a reviewer asks.

6. **Make the skills section more precise.** Correct the spelling error in “econometircs.” Consider whether every listed tool belongs there, and whether skills important to a particular job posting are genuinely supported by your experience. Don’t add tools just to match keywords.

7. **Add publication detail where appropriate.** The under-review status is transparent, which is good. A publication or research section could give the reviewer enough information to identify the work and understand your contribution; don’t imply acceptance or publication.

8. **Clarify the Kaggle leakage claim.** Switching to time-grouped folds is a sensible response to leakage risk, but “cut validation leakage” sounds like a directly measured quantity. Make sure the claim accurately describes what changed and what the 0.02 gap measures.

### Tier 3 — Cosmetic or lower priority

1. **Standardize spelling and style.** The résumé uses “labour,” which is fine if intentional, but keep spelling conventions consistent across the document.
2. **Use consistent method names and capitalization** in the Skills section.
3. **Check the code link.** Ensure it is accessible, current, and contains work you’re comfortable having a technical reviewer inspect.
4. **Review the final layout.** The supplied text doesn’t show typography, page count, or line breaks, so check those in the actual document.

**Verdict:** Fix the Tier 1 items before applying. The Sharpe calculation and the forecast-error arithmetic matter much more than cosmetic edits. Tier 2 changes are worthwhile, especially reducing repetition and clarifying experimental context. Tier 3 changes can wait.

## Interview bridge points

| Résumé topic | How it connects to quant research | What to be ready to explain |
|---|---|---|
| Order-book imbalance signal | Turning high-frequency market data into a testable predictive signal | Feature construction, time alignment, out-of-sample design, benchmark, and costs |
| Cost-aware position smoothing | Converting a forecast into a trading decision that accounts for turnover and slippage | How the smoother works and how you measured the return/cost trade-off |
| Diebold–Mariano tests | Using statistical tests to compare forecast performance | The exact forecast errors compared, assumptions, and interpretation across indices |
| Point-in-time feature store | Preventing look-ahead and data-quality problems in research pipelines | Late-print handling, point-in-time logic, schema versioning, and downstream use |
| Volatility forecasting study | Applying statistical learning to financial time-series prediction | Baseline choice, test period, metric definitions, and whether improvements were robust |
| Monte Carlo pipeline | Making statistical experiments computationally efficient and reproducible | What caused the speedup and how you maintained reproducibility |
| Sparse-regression bound | Bringing theoretical statistical work to applied modeling problems | Your precise contribution, the bound’s assumptions, and its practical implication |

*End of critique.*