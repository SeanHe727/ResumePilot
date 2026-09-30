# Resume review

**Target role inferred from the resume:** quantitative researcher, likely focused on systematic trading or financial time series. Without a job description, I can’t reliably judge role-specific keyword coverage or company fit. I’ll focus on what the resume itself signals.

**Bottom line:** You have strong, relevant quantitative experience and several unusually concrete results. Fix the Sharpe-ratio error and the forecast-improvement arithmetic before sending this anywhere. Then improve the ordering and clarity so the quant-research story is what a reader sees first.

## Highest-priority changes

1. **Remove or correct the Sharpe annualization bullet.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization; it is normally scaled by the square root of the number of trading days. As written, this is a serious technical credibility problem, especially on a quant resume.
2. **Correct the forecast-error percentage.** A change from 0.20 to 0.15 is a 25% reduction relative to 0.20, not 33%. Check the underlying metric and correct the stated percentage—or remove it if the numbers do not support it.
3. **Fix the dangling construction in the feature-store bullet.** Its opening participial phrase does not connect cleanly to the main clause, making a strong technical achievement harder to understand.
4. **Fix the misspelling in Skills.** “econometircs” should be corrected; a misspelled methods keyword can undermine polish and keyword matching.
5. **Make the quant experience visible before the unrelated current role.** The first listed job is Assistant Store Manager, which may lead a recruiter to question your current direction before they reach your quant internship. Keep the role truthful, but consider separating non-quant work from research experience or otherwise making the relevance hierarchy clearer.

## Review by section and bullet

### Header and education

- **Contact details:** Make sure the portfolio link is real, working, and points to relevant work. The supplied address appears to be a placeholder; if it is only anonymized here, disregard this.
- **Education:** The Ph.D. and mathematics B.S. are directly relevant. Consider adding a concise research area or dissertation topic if it strengthens the connection to financial forecasting or statistical modeling. The resume currently makes the reader infer that connection from the experience and project sections.
- **Education placement:** Leading with education is reasonable for a Ph.D. candidate, but the resume’s first work experience is unrelated to quant research. Consider how the top third of the page can signal your target role sooner.

### Sunrise Bakery — Assistant Store Manager

- **Opening-shift/team bullet:** The team size and budget responsibility help establish leadership, but “keeping the store within its weekly labour budget” does not say whether you met, improved, or simply monitored the budget. Clarify the result if you have a defensible measure. This is also less relevant than your research work, so keep it concise.
- **Stock-count/supplier-order bullet:** The reduction from 12% to 7% is a useful, concrete result. Clarify what period or measurement the percentages cover and what “unsold bread” is measured against, so the result is interpretable. This is the stronger of the two bakery bullets.

### Northpeak Capital — Quantitative Research Intern

This is the most important experience section for the inferred target role. Keep its strongest, technically credible material prominent.

- **Order-book signal and Sharpe bullet:** Strong relevance and a clear after-costs, out-of-sample claim. Make sure you can explain how the 18-month test was constructed, what the Sharpe figures represent, and what your individual contribution was. The claim is substantial enough that a technical interviewer is likely to probe it.
- **Turnover and slippage bullet:** Strong evidence of attention to trading costs. Clarify what “keeping 90% of gross returns” means and ensure its measurement is consistent with the first bullet’s after-costs result.
- **Diebold–Mariano test bullet:** The statistical validation is relevant. Be ready to explain the loss differential tested, how the baseline was defined, and whether you addressed testing across 30 indices. If available and accurate, the significance or robustness result would make the claim easier to assess.
- **Feature-store bullet:** The underlying work—point-in-time data, multiple venues, late-print deduplication, and reuse—is valuable. Fix the sentence construction, and make sure the reader can distinguish your contribution from the team’s broader work.
- **Sharpe annualization bullet:** Remove or correct it. As written, the calculation is wrong under standard annualization, and its presence raises doubts about the surrounding performance metrics.
- **Research-wiki/onboarding bullet:** This is a useful supporting example of documentation and team impact, but it is less important than the modeling and data work. Keep it only if space allows, and be precise about how the next cohort used it.

### Ridgeway University — Research Assistant

- **Simulation-pipeline bullet:** Strong engineering and reproducibility evidence. Keep it prominent among the research-assistant bullets. Be prepared to explain the before-and-after runtime and what changed in the pipeline.
- **Variance-bound/paper bullet:** A theoretical result is a useful differentiator, and the under-review status is appropriately disclosed. Make sure the wording accurately reflects your authorship and the paper’s current status. Consider giving the work clearer publication or research visibility rather than leaving all the context inside an experience bullet.
- **Teaching bullet:** The scale and rating are concrete, but teaching is less relevant to a quant-research role than your research and engineering work. Keep it if you want to signal communication or it fits your space; otherwise, prioritize more directly relevant research details.
- **R-package/other-responsibilities bullet:** This combines several separate activities—package release, cluster maintenance, reading-group organization, and grading—so the key accomplishment gets buried and the final “which” clause is difficult to follow. Separate or prioritize the items, and make clear that the 3,000 downloads refer to the package. The adoption figure is worth preserving if verifiable.

### Projects

#### Volatility Forecasting Study

- **QLIKE bullet:** A 7% out-of-sample improvement is relevant. Specify enough about the evaluation setup to distinguish it from the internship work and to make the comparison reproducible in discussion.
- **Forecast-error bullet:** The stated 33% improvement conflicts with the listed values; correct that arithmetic or verify that the values and percentage use different definitions. As written, they do not agree.
- **Directional-hit-rate bullet:** A move from 52% to 58% is a six-percentage-point increase, not a six-percent increase. Also explain the comparison baseline and evaluation setup sufficiently to make the result meaningful. This bullet and the QLIKE bullet may describe the same experiment; make the distinct contribution of each clear rather than repeating the model and data context.

#### Kaggle Market Prediction Competition

- **Placement bullet:** This is a strong, easy-to-scan result. The rank and “top 2%” are consistent: 41st out of 2,900 is approximately the top 1.4%.
- **Time-grouped-folds bullet:** The validation/leakage point is useful, but be precise about what the 0.02 gap measures and how the change addressed leakage. Don’t claim that the change eliminated leakage unless you can substantiate that.
- **Feature-selection bullet:** The reduction from 900 candidates to 300 without a validation-score loss is a clear engineering result. Keep it if it adds a distinct contribution beyond the ranking bullet.

### Skills

- Correct the spelling of **econometrics**.
- “Programming” groups Python and R with Kafka, which is better understood as a platform or technology than a programming language. Group skills so the category labels accurately describe their contents.
- Add tools such as SQL, C++, Git, or Linux **only if you have used them and can discuss them**. They may matter for some quant-research roles, but the lack of a job description means I can’t say which are required here.
- Consider whether every listed skill is supported by experience or a project. Kafka currently appears only in Skills, so a reader may ask what you used it for.

## Role-fit lens

- **Likely first technical reader:** A quant-research hiring manager or senior researcher. They will care about statistical rigor, out-of-sample testing, transaction costs, data leakage, and whether you can explain your personal contribution to the results.
- **What the resume already signals well:** Statistics training, empirical market work, order-book data, transaction-cost awareness, reproducible computing, and a strong blend of theoretical and applied research.
- **What may be less clear:** Your current professional direction, the boundary between your work and your teams’ work, and the experimental details behind several performance claims.
- **Likely competing profile:** A statistics, computer-science, engineering, or finance graduate with direct trading research and stronger evidence of production tools. Your differentiators are the Ph.D. training, theoretical result, and demonstrated market-data work. Your resume does not yet establish experience with certain tools or production systems; add those only if true.

## Reader-by-reader assessment

- **Recruiter glance — Maybe, leaning forward:** The Ph.D. and quant internship are credible signals, but the current bakery role appears first and the target role is not stated near the top.
- **HR screen — Likely screen for an entry-level quant-research role:** The education and internship align well, though an HR reader may not know how to weigh the unrelated current role.
- **Hiring manager — Maybe, with interview potential:** The internship has strong, role-relevant substance. The incorrect Sharpe calculation and forecast percentage would be major concerns until resolved.
- **Technical reviewer — Interested but likely to probe:** The methods and results are promising, but expect detailed questions about backtest design, data timing, costs, baseline comparisons, and the inconsistencies noted above.

## Provisional scorecard

This is a **resume-quality estimate, not a score against a specific job description**.

| Area | Estimate | Main reason |
|---|---:|---|
| Target-role signals | 7/10 | Strong quant content, but no explicit positioning near the top |
| Skills section | 6/10 | Relevant core skills; typo and category issue; tool depth is unclear |
| Bullet quality | 6/10 | Strong metrics, offset by incorrect arithmetic and a few unclear claims |
| Research credibility | 7/10 | Good statistical and market evidence; publication status is disclosed |
| Narrative and ordering | 6/10 | Relevant experience is present but not surfaced as clearly as it could be |
| Visual presentation | Not assessable | Plain text does not show page length, spacing, or layout |

## Changes to make first

### High impact

1. **Fix the annualized-Sharpe claim and verify the related reported Sharpe figures.** This is the most serious technical credibility issue.
2. **Correct the 0.20-to-0.15 percentage claim and the hit-rate percentage wording.** Internal arithmetic consistency matters particularly on a quantitative resume.
3. **Move the quant-research story ahead of the unrelated current role.** Help a recruiter identify your direction before they make assumptions from the first job listed.
4. **Repair the feature-store and R-package bullet construction.** Both contain valuable work that is currently obscured by sentence structure.
5. **Add a brief, specific positioning statement only if it clarifies your quant focus.** The resume otherwise makes readers infer your intended role.

### Medium impact

1. Clarify the measurement period or denominator for the bakery waste result.
2. Clarify what “90% of gross returns” means in the turnover result.
3. Make the distinction between the forecasting project’s three results clearer.
4. Give the under-review paper and research focus enough context for readers to recognize their relevance.
5. Reorganize Skills so categories are accurate and the most relevant verified skills are easiest to find.

### Lower impact

- Keep or remove teaching and onboarding documentation based on space and the role’s emphasis on communication.
- Add other tools only if you can substantiate them; do not add keywords just to anticipate an unknown job description.

**Verdict:** Fix the technical and arithmetic errors first, then improve the ordering and bullet clarity. You already have strong material for a quant-research application; the main risk is that avoidable credibility and presentation problems distract from it.