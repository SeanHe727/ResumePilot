## Highest-priority fixes

1. **Remove or correct the claim that the best of 400 backtested configurations has the expected live Sharpe.** Choosing the best result after testing many configurations creates selection bias; its backtest Sharpe is not a sound estimate of live performance. This is the most serious credibility issue on the resume.
2. **Resolve the overlap between the internship and competition signal bullets.** Both describe an order-book imbalance signal and an 18-month out-of-sample result. Make clear whether these are separate projects and results; don’t claim the same result twice.
3. **Reconcile the two internship performance claims.** A 35% improvement in risk-adjusted returns and a Sharpe increase from 1.1 to 1.5 could describe the same result, but that is not clear. State the metric, comparison, period, and whether the two claims refer to one or different contributions.
4. **Fix the Monte Carlo random-seed statement.** Giving every worker the same seed can produce identical random streams, undermining the simulation. Describe the reproducibility approach accurately and verify that the runs used independent random streams.
5. **Correct the spelling error in Skills:** “econometircs.”

## Line-by-line review

### Header
- **Name and contact details:** No substantive changes needed. Make sure the code-profile link is live and relevant to the roles you’re targeting.

### Education
- **Ph.D. candidate line:** The expected completion date is useful. If the doctorate is central to the roles you want, consider adding a concise research focus or dissertation area so employers can quickly see its relevance.
- **B.S. line:** Fine as is. Add GPA only if it is strong and useful for the roles you’re pursuing.

### Experience — Sunrise Bakery
- **Assistant Store Manager line:** The team size and budget responsibility are useful. Because this role overlaps with the Ph.D. timeline and is outside the target field, clarify the role’s hours or status if the overlap might prompt questions; retain it if it demonstrates meaningful management experience.
- **Stock-counts bullet:** The reduction is a good result, but specify the period measured and what “unsold bread” represents. The change from 12% to 7% is a five-percentage-point reduction, so ensure the wording and calculation are precise.

### Experience — Northpeak Capital
- **“Improved risk-adjusted returns by 35%” bullet:** Name the measure behind “risk-adjusted returns,” identify the comparison or baseline, and specify the evaluation period. Reconcile it with the later Sharpe claim so the reader can tell whether these are separate outcomes.
- **Six years of tick data / purged walk-forward bullet:** This communicates sound validation practices. Be cautious with the absolute claim that every decision used only information available at the time: purging and embargoes address particular leakage risks, but don’t establish that on their own. Make sure the claimed protocol matches the actual process and explain the distinction between model selection and final evaluation.
- **Feature-store bullet:** Good evidence of reusable infrastructure. Add the tools or technical scope if those matter for your target roles, and clarify what “reused in two later signal projects” means in practice.
- **Presentation and live-allocation bullet:** The approval is a strong outcome. Clarify whether the allocation actually began and its status now; “approved” and “live” are different stages. Include a size only if you can disclose it.
- **400 configurations / best Sharpe bullet:** Remove or substantially revise the performance claim. Selecting the top result among many tested configurations inflates the apparent Sharpe, so it should not be presented as expected live performance. If you retain this work, focus on how you handled selection bias or independently evaluated the chosen parameters.
- **Order-book imbalance signal / Sharpe 1.1 to 1.5 bullet:** Clarify how this relates to the 35% improvement above and identify the baseline, backtest dates, and cost assumptions. It is a strong result if it is independently measured and does not duplicate the Kaggle project claim.

### Experience — Ridgeway University
- **Monte Carlo bullet:** Correct the same-seed issue before presenting this as a reliable simulation speedup. Also identify the compute environment or number of workers if that helps make the comparison credible.
- **Variance-bound bullet:** “Tightens … by a log factor” is technical but underspecified; make sure the claimed improvement is precise and meaningful to the reader. Clarify your contribution and the paper’s authorship/status. A paper under review is not an accepted publication, so keep that distinction clear.
- **Teaching bullet:** The student count and rating are useful. Add the rating’s source or sample size if it is available and helps establish context.
- **R-package bullet:** Include the package name or a link so the work is verifiable. If possible, clarify how downloads were counted and whether they represent usage or just downloads.

### Projects — Volatility Forecasting Study
- **QLIKE result bullet:** State the evaluation period and how the 7% improvement was aggregated across the 30 indices. This helps readers judge the result and compare it with the statistical-significance bullet.
- **Significance bullet:** This is a useful validation detail. Clarify whether the crisis periods were selected in advance and how you handled dependence across indices, if relevant to your test. Make sure the “24 of them” result is consistent with the stated correction and test setup.
- **Working-paper / seminar bullet:** The paper and presentation add credibility. Provide a link if available, and make the paper’s current status clear. The seminar venue and date may also help readers understand the presentation’s scope.

### Projects — Kaggle Market Prediction Competition
- **Competition bullet:** Too general to show your contribution or outcome. Add the competition’s result or ranking and specify what part of the modeling work you personally owned.
- **Time-grouped-folds bullet:** “Cut validation leakage” could suggest the change improved the model, when it may instead have exposed a gap between local validation and leaderboard performance. Explain what the 0.02 gap measures and avoid implying that changing the folds removed all leakage.
- **Order-book imbalance bullet:** This closely resembles the Northpeak signal result. Clarify whether this was a separate signal, a separate dataset, and a separate 18-month test. If it is the same work or result, don’t present it as a second independent accomplishment.

### Skills
- **Methods line:** Correct the spelling error. Also check that every listed method is specific enough to be meaningful and supported by your experience.
- **Programming line:** Fine if accurate. Consider ordering skills by relevance to the jobs you’re applying for; include additional tools only if you have genuinely used them.