# Résumé critique

**Target role inferred from the résumé:** Quantitative researcher, likely focused on systematic strategies, market microstructure, or volatility forecasting.  
**Important limitation:** There is no job description, target employer, or original résumé file to compare against. I can assess role fit and internal consistency, but not verify claims, judge page layout, or calculate a true job-specific ATS match. I have not searched the web.

## Overall assessment

You have relevant quantitative research experience, strong methods, and several concrete results. The main problem is **credibility risk from incorrect or ambiguous quantitative claims**. In particular, the Sharpe annualization and forecast-error arithmetic need to be resolved before you send this résumé. A few bullets also repeat the same project result or bundle unrelated work together, making your contributions harder to evaluate.

**Provisional score: 68/100.** Treat this as a résumé-only diagnostic, not a score against a specific job description. Correcting the quantitative issues and tightening the project bullets would make a substantial difference.

---

## Likely reader and role fit

A likely first technical reader is a quantitative research lead or portfolio researcher deciding whether your statistical work can translate into trading research. They will look for sound validation, careful handling of costs and leakage, and evidence that your results hold up outside the training sample. Your experience covers many of those topics, but the visible calculation errors may cause them to question other results.

A likely competing candidate would have direct quant-research experience, rigorous backtesting, and strong programming skills. Your differentiators are the combination of market-microstructure work, statistical research, teaching, and a strong competition result. Your main potential gaps are limited visible industry tenure and no clearly stated production deployment or live-trading evidence. Those are possible gaps, not requirements I can confirm without a job description.

## Highest-priority changes

1. **Resolve the Sharpe annualization claim.** Multiplying a daily Sharpe by 252 is not the standard annualization method; under the usual assumptions, the multiplier is √252. More importantly, confirm that the reported Sharpe results use a consistent annualization convention. The current line is likely to prompt questions about the validity of the backtest.
2. **Reconcile the forecast-error arithmetic.** A change from 0.20 to 0.15 is a 25% reduction, not 33%, using the stated values. Check the underlying metric and correct the numbers or the claimed percentage.
3. **Distinguish contribution from attribution.** The increase in the desk book’s Sharpe is a large claim for a short internship. Make sure the résumé clearly supports the benchmark, test period, cost assumptions, and your signal’s contribution to that result.
4. **Reduce redundancy in the volatility project.** Three bullets describe results from the same model and dataset. Keep the distinct findings only if each adds useful evidence, and make their evaluation setup consistent and easy to understand.
5. **Fix the skills typo and improve skill grouping.** “econometircs” is misspelled. Also make the skills section easier to scan by distinguishing programming tools from methods; list proficiency only where you can substantiate it.

---

## Five-perspective read-through

### ATS / keyword scan

Without a job description, this is a **role-based proxy**, not a true ATS match-rate calculation. Your résumé already contains useful terms for quant research, including time-series methods, Python, R, PyTorch, futures, order-book signals, backtesting, transaction costs, volatility forecasting, and high-dimensional statistics.

Potentially relevant terms not established here include **C++**, production research systems, portfolio construction, risk management, and live execution. Add any only if they accurately describe your experience and match the actual role. Kafka appears in Skills but is not substantiated in the experience bullets; consider whether it belongs there or needs context.

### Recruiter glance

**Verdict: Maybe / likely forward if the quantitative claims are sound.** Your Ph.D. in Statistics and quant internship are directly relevant. There is no summary or tagline, so the first read relies on education and job title. The most concerning first-glance issue is the Sharpe annualization line, which could make a recruiter or technical reviewer question the rest of the metrics.

### HR screen

**Verdict: Likely phone screen, contingent on accuracy.** The education and experience suggest a relevant background, and the bullets show measurable work. The résumé does not yet make a concise case for the through-line connecting statistical research, market data, and trading research. A short profile could help if you are applying across different kinds of quant roles, but it is not a substitute for correcting the claims.

### Hiring manager

**Verdict: Maybe, with interview potential after corrections.**

1. The Northpeak internship and market-data work are the strongest evidence of role fit.
2. The incorrect annualization and forecast-error arithmetic are immediate credibility concerns.
3. The hiring manager may ask how the strategy was evaluated, how transaction costs and leakage were handled, and which parts you personally implemented.

**Likely first interview question:** How did you validate the reported Sharpe improvement and ensure it was not driven by a backtest or annualization artifact?

### Technical reviewer

**Truthfulness:** Cannot verify any claim from the résumé alone. Two numerical claims are internally inconsistent as written: the Sharpe annualization and the 0.20-to-0.15 forecast-error reduction.  
**Consistency:** The project bullets appear related but do not explain whether the metrics use the same data splits, baseline, or evaluation period. The package bullet has an unclear “which” reference.  
**Provenance:** The paper under review at JASA is appropriately identified as under review, but add authorship or contribution context if it is important to your candidacy. Do not imply acceptance or publication.

---

## Section-by-section and bullet-by-bullet feedback

### Header and education

- **Contact line:** The example-domain email and URL look like placeholders. If they are anonymized for this review, no change is needed; otherwise, use working professional contact details.
- **Ph.D. entry:** Keep the expected completion date accurate and current. Because the expected date is May 2026, make sure the status and date remain correct when you submit.
- **B.S. entry:** The education is relevant. A GPA, honors, or coursework is optional; include it only if it strengthens the application and is appropriate for the roles you are targeting.

### Northpeak Capital — Quantitative Research Intern

- **Order-book signal / Sharpe result:** This is your strongest industry bullet, but it makes a large causal claim. Clarify the comparison point and evaluation setup, and verify that the 1.1 and 1.5 figures use the same annualization convention, costs, and portfolio definition. Be precise about what “over 18 months of out-of-sample backtest” means.
- **Turnover and slippage:** Useful evidence of cost-aware research. Clarify how turnover and slippage were calculated and what the “90% of gross returns” comparison refers to. Ensure these figures are consistent with the first bullet’s cost model.
- **Diebold–Mariano tests:** Relevant technical validation, but “standard” does not say whether you addressed repeated testing across 30 indices or dependence in the observations. Make clear what forecast comparison was tested and how you interpreted significance.
- **Feature-store bullet:** The opening construction is awkward, and the reader may not know which work you personally performed versus what the team delivered. Clarify your contribution to point-in-time joins, late-print handling, schema versioning, and the store’s reuse. “Two later projects” is useful evidence, but say enough to establish that the feature store was actually adopted.
- **Daily Sharpe annualization:** This is not a research achievement as currently described, and multiplying a daily Sharpe by 252 is not standard annualization. Verify the calculation and correct the underlying analysis and any affected results. Unless this bullet refers to a different, defensible calculation, remove it; as written, it damages credibility.
- **Documentation and onboarding:** Good evidence of research practice and knowledge transfer. The “which” clause is slightly ambiguous; ensure it is unmistakable that the wiki documentation helped the next intern cohort. This is lower priority than the quantitative corrections.

### Ridgeway University — Research Assistant

- **Simulation pipeline:** “Owned” signals responsibility, but the bullet does not show what you improved or delivered. Add a concrete outcome if one exists; otherwise, it is less compelling than your other research evidence.
- **Variance bound / JASA paper:** Strong technical work and a clear under-review status. Clarify your authorship or specific contribution if it is not obvious elsewhere. The bound’s result will matter most to technical readers, so be prepared to explain what the improvement means.
- **Teaching:** Clear scope and outcome. Retain if teaching is relevant to the roles or helps show communication skills; it may be lower priority on a space-constrained industry résumé.
- **R package / other duties:** This bullet combines the package, cluster maintenance, reading-group organization, and grading, making the main accomplishment difficult to identify. Separate or prioritize the material. The 3,000-download claim is useful, but make sure it refers clearly to the package and is supportable.

### Projects

#### Volatility Forecasting Study

- **QLIKE result:** A useful out-of-sample result. Clarify the evaluation setup sufficiently to distinguish genuine out-of-sample performance from tuning or selection on the test period.
- **Forecast-error result:** The stated change from 0.20 to 0.15 is a 25% reduction, not a 33% reduction, based on those numbers. Check whether one of the values or the percentage is wrong, and use a consistent definition of forecast error.
- **Directional hit rate:** A change from 52% to 58% is a gain of six percentage points. Avoid describing it ambiguously as a 6% increase. It also repeats the model and dataset from the first bullet, so keep it only if it shows a distinct and useful evaluation dimension.

Across the three bullets, establish whether QLIKE, forecast error, and directional hit rate were measured on the same test data and against the same model version. Otherwise, the results may look selectively presented.

#### Kaggle Market Prediction Competition

- **Competition placement:** A strong, easy-to-understand result. “Top 2%” is broadly consistent with 41st of 2,900; verify the placement and specify the private leaderboard only if that is the official ranking.
- **Time-grouped folds:** Strong evidence of understanding leakage. Clarify what the 0.02 gap represents and ensure “cut validation leakage” accurately describes the effect of changing the folds.
- **Feature selection:** Relevant implementation work. Explain the validation measure behind “without losing validation score” if needed for clarity, and ensure the reduction from 900 to 300 features is not redundant with the prior competition bullet.

### Skills

- Correct the spelling of **“econometircs.”**
- Separate tools from statistical methods so a reader can scan your technical toolkit quickly.
- Consider whether Kafka is a meaningful qualification for your target roles. It is not otherwise evidenced in the résumé, so a reviewer may ask how you used it.
- Add other languages or methods only if you can substantiate them; do not add common quant keywords merely to match a presumed filter.

---

## Provisional scoring

| Dimension | Score | Weight | Notes |
|---|---:|---:|---|
| ATS keyword match | 7/10 | 15% | Good role-relevant terms; no job description for an actual match calculation. |
| Summary | 6/10 | 10% | No summary; direct experience partly establishes fit. |
| Skills section | 6/10 | 10% | Relevant content, but typo and grouping need attention. |
| Bullet quality | 6.5/10 | 25% | Strong evidence, undermined by arithmetic, attribution, and repetition issues. |
| Publications | 5.5/10 | 10% | Under-review paper is relevant; limited publication detail. |
| Narrative coherence | 7.5/10 | 15% | Strong quantitative thread across research and projects. |
| Page fill and visual | Not assessable | 5% | Plain text does not show layout or page count. |
| Credibility signals | 4.5/10 | 10% | Good metrics, but visible numerical problems need resolution. |

The total is **provisional** because layout cannot be assessed and there is no target job description. The most important score improvement is not adding keywords; it is making the quantitative claims internally consistent and defensible.

## Interview likelihood

These are rough résumé-based estimates, not predictions about a particular employer.

| Reader | Estimated likelihood | Main factor |
|---|---:|---|
| ATS | 70% | Relevant quant-research vocabulary, but no job description to compare against. |
| Recruiter | 65% | Relevant Ph.D. and internship; the metric inconsistency may raise doubts. |
| HR screen | 70% | Relevant education and experience, though the résumé could state its role focus more clearly. |
| Hiring manager | 55% | Strong research potential, balanced against questions about backtest rigor and numerical accuracy. |
| Technical panel | 50% | Technical substance is promising, but the Sharpe and forecast-error issues are likely to be probed. |

**Ceiling:** With the visible issues unresolved, the résumé’s quantitative claims limit confidence. Correcting them, tightening the project section, and tailoring to a specific posting could materially improve the presentation. I cannot responsibly estimate a job-specific ceiling without the job description.

## Interview bridge points

Prepare to connect these topics to systematic research without overstating direct production experience:

| Résumé topic | Connection to emphasize in an interview |
|---|---|
| Order-book signal | Point-in-time market data, signal validation, and the separation of predictive value from trading costs. |
| Turnover smoother | Translating a forecast into positions while managing implementation costs and preserving returns. |
| Feature store | Data integrity, reproducibility, and making research inputs reusable across projects. |
| Volatility model | Comparing forecasting methods on genuinely held-out data and explaining why the evaluation metric matters. |
| Sparse-regression bound | Mathematical rigor, statistical guarantees, and the ability to reason beyond empirical results. |
| Kaggle competition | Leakage prevention, time-aware validation, and disciplined feature selection. |

**Bottom line:** Fix the Sharpe and forecast-error calculations first. Then clarify the attribution and validation details in the Northpeak bullets, reduce repetition in the volatility project, and clean up the skills section. Those changes matter more than cosmetic wording adjustments.