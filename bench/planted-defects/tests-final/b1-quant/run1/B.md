## Overall

The strongest material is the quant research, statistical work, and concrete outcomes. The main things to address are **one important calculation error, several ambiguous or overstated metrics, redundant project bullets, and a few overloaded or awkward bullets**. For quant roles, make sure readers can tell which results are from backtests, which are forecast evaluations, and which were used in live trading.

## Header and education

- **Contact line:** Check that the code link goes directly to a relevant, polished portfolio or repository. If you have a LinkedIn profile that supports your candidacy, include it; don’t add one just to fill space.
- **Ph.D. entry:** The expected completion date is useful. Consider adding a concise research focus if it directly supports the roles you’re targeting; it would help connect the degree to the experience below.
- **Education dates:** The dates are clear and consistent. The research assistant role begins shortly after the B.S.; that is not a problem, but be prepared to explain the transition if asked.

## Experience

### Sunrise Bakery

- **Opening-shifts/team/budget bullet:** “Managed” and “keeping the store within its weekly labour budget” leave the scope and result somewhat unclear. Clarify your responsibility for the team and budget, and use the spelling convention consistent with the jobs you’re targeting.
- **Stock-counts/supplier-orders bullet:** The reduction from 12% to 7% is strong, but clarify what “unsold bread” measures and over what period. That helps readers judge the size and reliability of the result.
- **Role relevance:** This is your current role, so keeping it may make sense. If you’re applying to quant research positions, consider whether it should take less space than the directly relevant research experience.

### Northpeak Capital

- **Sharpe improvement bullet:** Clarify whether both Sharpe ratios are annualized, what “the desk book” refers to, and whether the result is solely attributable to your signal. Also make clear that this is a backtest result rather than a live-trading result.
- **Turnover/slippage bullet:** Define the turnover measure and the comparison used for “keeping 90% of gross returns.” The relationship among gross returns, costs, and estimated slippage is currently hard to interpret.
- **Diebold–Mariano test bullet:** State what forecast loss or measure was tested and how you handled the fact that you tested across 30 indices. Because HAR-RV is described as a nested baseline, verify that the test procedure is appropriate for nested models; simply calling the tests “standard” may invite methodological questions.
- **Feature-store bullet:** The opening construction is grammatically awkward: the “Joining…” phrase does not attach cleanly to the subject that follows. Also clarify what the feature store enabled or improved, if you can support that with a specific result.
- **Annualized-Sharpe bullet:** **Correct or remove this.** Annualizing a daily Sharpe ratio generally uses the square root of 252, not 252, subject to the assumptions behind that annualization. As written, the calculation is wrong and could undermine confidence in the other quantitative claims. It also reads as a calculation step rather than an achievement.
- **Research-wiki bullet:** The documentation and handoff are useful, but the final clause is awkward and unclear about how the next cohort used it. Make the adoption or onboarding benefit more concrete if possible.

### Ridgeway University research assistant role

- **Simulation-pipeline bullet:** Strong, measurable impact. If space permits, add context that helps readers assess the comparison, such as the computing setup or what changed to produce the speedup. Keep the reproducibility detail.
- **Variance-bound bullet:** “My proof” is more personal than the rest of the resume, and “tightens the previous bound by a log factor” may be too vague for a technical reader. Clarify the comparison and describe the paper’s status precisely; under review is not the same as accepted or published.
- **Teaching bullet:** This is clear and quantified. If the rating is based on a small number of responses, give enough context to avoid making the score seem more definitive than it is.
- **Open-source package/other duties bullet:** This combines the package release, cluster maintenance, reading-group organization, grading, and download count. Separate the package result from unrelated duties or remove lower-priority details. Make clear that the downloads refer to the package, and include its name or a link if useful.

## Projects

### Volatility Forecasting Study

- **QLIKE bullet:** Useful result, but clarify the evaluation setup enough to distinguish it from the Northpeak HAR-RV comparison. The same baseline and 30-index scope appear elsewhere, so readers may wonder whether these are separate studies or repeated results.
- **Forecast-error bullet:** The arithmetic does not match the stated percentage: a reduction from 0.20 to 0.15 is a **25% reduction** using 0.20 as the starting value, not 33%. Also identify the error measure and confirm the comparison isolates the effect of the added features and loss function.
- **Directional-hit-rate bullet:** A change from 52% to 58% is **six percentage points**, not a 6% increase. This also repeats the same model and index set from the first bullet. Keep it only if it adds a distinct evaluation result, and make the relationship among the three bullets clear.

### Kaggle competition

- **Placement bullet:** The rank and top-2% claim are consistent. Make sure the placement refers to the final/private leaderboard if that is what you mean.
- **Validation-leakage bullet:** Explain what caused the leakage or score gap. Switching to time-grouped folds may have made validation more representative rather than directly “cutting” leakage; distinguish those claims.
- **Feature-selection bullet:** This is a useful technical contribution. “Without losing validation score” could be more informative if you can state the measure or show that the result held on a genuinely separate evaluation set.

## Skills

- **Methods line:** Correct the typo in “econometircs.”
- **Skills content:** The listed tools and methods are relevant, but consider whether each is supported by the experience shown. Add other role-relevant tools only if you can substantiate them; avoid adding skills simply to make the list longer.