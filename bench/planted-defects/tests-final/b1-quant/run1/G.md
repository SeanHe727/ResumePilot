## Overall assessment

The resume has a strong quantitative-research profile: a Statistics Ph.D., a quant internship, research experience, and results-heavy projects. Its main weakness is **credibility risk**: one Sharpe-ratio calculation is wrong, several results need clearer definitions, and the forecasting project repeats overlapping claims with inconsistent arithmetic.

**Fit verdict: risky fit for quantitative research roles as written.** The background looks relevant, but the Sharpe annualization error could undermine confidence in the other metrics. There’s no target job description here, so I can’t assess role-specific fit.

## Highest-priority changes

1. **Correct or remove the Sharpe annualization claim.** A daily Sharpe ratio is generally annualized using the square root of the number of trading days, not by multiplying by 252. The current claim is mathematically incorrect.
2. **Reconcile the forecasting metrics.** A change from 0.20 to 0.15 is a 25% reduction, not 33%. Also clarify whether QLIKE loss and “forecast error” are separate measures.
3. **Clarify what was actually backtested versus used by the desk.** Some wording could be read as describing real trading performance, while the stated evidence is an out-of-sample backtest.
4. **Reduce duplication in the volatility project.** Three bullets describe similar results from the same model and dataset; distinguish their contributions or remove redundant claims.
5. **Make each metric auditable.** Define the evaluation period, comparison, metric, and relevant implementation details where they’re not already clear.

## Section-by-section review

### Header

- **Phone, email, and portfolio link:** If these are placeholders used to anonymize the resume, no change is needed. If they are literal, replace them with working contact details and a portfolio link that resolves.
- **Portfolio link:** Make sure it points to work relevant to the roles you’re targeting and that any linked code or results are accessible.

### Education

- **Ph.D. candidate in Statistics:** Add a research area or dissertation topic if it directly supports the roles you’re applying for. The expected graduation date is useful; keep it current.
- **B.S. in Mathematics:** This is clear. Consider adding honors, GPA, or notable coursework only if it strengthens your candidacy and is accurate.

### Sunrise Bakery — Assistant Store Manager

- **Managed opening shifts and a team of 6…:** Clarify whether this is full-time, part-time, or otherwise concurrent with your Ph.D. role. That will prevent readers from having to guess how the dates fit together. The labor-budget result is less specific than your other metrics, so include a measurable outcome only if you can substantiate one.
- **Ran daily stock counts…:** The reduction from 12% to 7% is concrete. Clarify how “unsold bread” is calculated and over what period, if you can do so briefly. For quant-focused applications, consider whether this role needs both bullets; it may take space from more relevant research.

### Northpeak Capital — Quantitative Research Intern

- **Order-book imbalance signal / Sharpe ratio:** Clarify whether the Sharpe ratios are annualized, what “desk book” refers to, and whether this was a simulated strategy or part of a live portfolio. Define the comparison period and enough of the backtest setup to make the result interpretable.
- **Turnover / gross returns / slippage:** Specify how turnover and slippage were measured or estimated, and what the 90% refers to. Make clear whether the slippage change is a modeled estimate or an observed trading result.
- **Diebold–Mariano tests:** State what forecast loss or error the tests compare and how you handled testing across 30 indices. Without that context, “standard” does not tell a reader how robust the result is; multiple comparisons may also matter.
- **120 microstructure features / feature store:** The opening construction makes this bullet difficult to parse. Clarify the feature-joining work, the point-in-time safeguards, and what “reused in two later projects” means. Keep the reuse claim only if you can explain who used it and what they reused.
- **Daily Sharpe multiplied by 252:** Correct the annualization method or remove this claim. As written, it is mathematically wrong and is the most serious credibility issue in the resume.
- **Research wiki / onboarding:** This is a useful documentation and handoff contribution, but clarify your specific contribution and the basis for the “first week” onboarding claim. If space is tight, prioritize research results and technical contributions over this bullet.

### Ridgeway University — Research Assistant

- **Simulation pipeline:** The runtime reduction and reproducibility detail are strong. If possible, add enough context to show what changed technically or what the 2,000-run study involved; otherwise the scale of the result is hard to assess.
- **Variance bound / paper under review:** Clarify your contribution to the proof and your authorship or coauthorship role. Also identify the paper’s current status precisely; “under review” can become outdated and should be updated as needed.
- **Teaching recitations:** This is clear and quantified. For research-focused applications, consider whether the problem-set count and teaching rating are worth the space relative to research details; include the rating only if you can explain its source and sample size.
- **R package / cluster / reading group / grading:** This combines several distinct responsibilities, making your contribution to the package and its adoption unclear. Separate or prioritize the accomplishments, and be ready to substantiate the download count and explain what the download metric measures.

### Projects

#### Volatility Forecasting Study

- **QLIKE result:** Define the evaluation setup and comparison precisely enough that a reader can distinguish this result from the other forecast metrics below.
- **0.20 to 0.15 / 33% improvement:** Resolve the arithmetic: those values imply a 25% reduction. Also state what “forecast error” measures and ensure it is distinct from QLIKE if both results are accurate.
- **Directional hit rate:** This overlaps with the preceding model-performance bullets. Keep it only if it adds a distinct, relevant result, and clarify how the directional target and test period were defined.
- **Across the project:** These bullets repeatedly mention a temporal convolutional model, realized-volatility features, and 30 indices. Avoid repeating the same setup; make sure each retained result represents a distinct contribution. Clarify whether the project overlaps with the Northpeak internship work.

#### Kaggle Market Prediction Competition

- **41st of 2,900 / top 2%:** These claims appear consistent, but specify whether the rank is from the official final private leaderboard. Keep team attribution clear.
- **“Cut validation leakage” / 0.02 gap:** A smaller gap between local validation and leaderboard scores does not by itself establish that leakage was reduced. Use that claim only if you can explain what leakage existed and how the validation change addressed it.
- **Permutation importance / 900 to 300 features:** Clarify whether feature selection was performed without using the final test set or leaking validation information. This is especially important because feature selection based on validation performance can itself bias results.

### Skills

- **“time-series econometircs”:** Correct the spelling.
- **Programming list:** Keep Kafka only if you have enough hands-on experience to discuss it; it currently has no supporting example elsewhere in the resume.
- **Methods list:** The methods are relevant but broad. Add specific methods or tools only if they are accurate and useful for your target roles; avoid listing skills you would not be comfortable defending in an interview.