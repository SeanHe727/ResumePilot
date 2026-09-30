## Highest-priority fixes

1. **Correct or remove the Sharpe annualization bullet.** Multiplying a daily Sharpe ratio by 252 is incorrect; under the usual assumptions, annualization uses the square root of 252. As written, this undermines confidence in the quantitative work and conflicts with your other Sharpe claims.
2. **Resolve the volatility project’s conflicting improvement figures.** The change from 0.20 to 0.15 is a 25% reduction when measured against 0.20, not 33%. Also specify what “forecast error” measures and whether both figures use the same test set and baseline.
3. **Remove or consolidate redundant volatility bullets.** The three bullets repeat the same model, data, and performance story. Keep distinct findings only, and make each claim’s metric and comparison clear.
4. **Fix the skills typo.** “econometircs” is misspelled.
5. **Clarify the Northpeak feature-store bullet’s grammar and the lab package bullet’s attribution.** Both currently make it difficult to tell what you did or what the result refers to.

## Header and education

- **Name and contact line:** The contact details are clear. Make sure the code link goes directly to a professional portfolio or relevant work, and that it is accessible without special permissions.
- **Ph.D. line:** Keep the expected completion date current. Because your Ph.D. overlaps with your current store-management role, clarify the arrangement if a reader might wonder how you balance them.
- **B.S. line:** No substantive change needed. Keep date and location formatting consistent with the Ph.D. line.

## Experience

### Sunrise Bakery — Assistant Store Manager

- **Role and dates:** This is the current role, but the bullets use past-tense verbs. Make tense consistent with whether the duties are ongoing or completed.
- **Opening-shift and team bullet:** “Keeping the store within its weekly labour budget” is a useful outcome, but would be more persuasive with a measure of how consistently you met the budget or the scale of the budget. For a U.S.-based resume, use consistent U.S. spelling (“labor”).
- **Inventory bullet:** The reduction from 12% to 7% is strong. Specify the measurement period and how “unsold bread” is calculated; make clear whether those figures are percentages of production. This helps readers assess the size and reliability of the improvement.

### Northpeak Capital — Quantitative Research Intern

- **Order-book signal bullet:** Clarify whether the Sharpe figures are annualized, what “desk book” means to an outside reader, and how much of the change you can attribute to your signal. Include enough detail about the backtest setup to make the 18-month out-of-sample result interpretable.
- **Turnover bullet:** Define how daily turnover is measured and whether it is one-way or two-way. “Keeping 90% of gross returns” could also be clearer about which returns and comparison it refers to.
- **Diebold–Mariano test bullet:** “Standard” is vague. State the forecast-comparison setup and how you handled testing across 30 indices, including any multiple-testing correction if applicable. A statistical forecast gain and an economic trading gain are different claims; keep that distinction clear.
- **Feature-store bullet:** The opening “Joining…” phrase creates a dangling construction, so it is unclear who performed the joining and how that action connects to building the store. Clarify the action and keep the result—reuse in two projects—clearly tied to the feature store.
- **Sharpe annualization bullet:** Correct the calculation or remove the bullet. Multiplying a daily Sharpe by 252 is not the standard annualization; the usual factor is √252, subject to assumptions. Also check that this calculation is consistent with the Sharpe figures elsewhere.
- **Research-wiki bullet:** This is a useful handoff and documentation contribution. The onboarding outcome is less concrete than your other results, so keep it only if you can substantiate the claim and it does not crowd out stronger technical evidence.

### Ridgeway University — Research Assistant

- **Simulation-pipeline bullet:** Strong, measurable result. If available, add context that helps readers interpret the speedup, such as the computing setup or what changed in the pipeline.
- **Variance-bound bullet:** “Tightens the previous bound by a log factor” may be too vague for a technical reader. Ensure the mathematical improvement is stated precisely elsewhere in the resume or paper, and clarify your contribution if the paper has multiple authors. “My proof” also stands out from the resume’s otherwise impersonal style.
- **Teaching bullet:** The workload and rating are useful. Add the rating’s source or response context if it is not self-evident, so readers can judge how representative it is.
- **R-package and service bullet:** This combines the package, cluster maintenance, reading group, and grading in one bullet, making the 3,000-download result’s subject ambiguous. Separate or clearly distinguish the package accomplishment from the service duties. If possible, identify the package’s public repository and clarify what the download count measures.

## Projects

### Volatility Forecasting Study

- **Project title and dates:** Since the project is ongoing and independent, make sure the dates and ownership are accurate. If this work overlaps with the Northpeak research, distinguish the project’s data, methods, and contribution so it does not appear to duplicate internship work.
- **QLIKE bullet:** Specify the evaluation design and baseline details needed to judge the 7% improvement, including whether the test period was held out and how the comparison was aggregated across indices.
- **Forecast-error bullet:** The claimed 33% improvement does not match the change from 0.20 to 0.15 under the usual calculation; that is a 25% reduction relative to 0.20. Name the error metric and the comparison baseline. This bullet also overlaps with the other model-performance bullets.
- **Directional-hit-rate bullet:** This repeats the model and 30-index setup. Keep it only if directional accuracy is meaningfully different from the other reported results, and make the evaluation period and baseline clear.

### Kaggle Market Prediction Competition

- **Placement bullet:** The rank and top-2% result are consistent. Identify the specific competition so the result is verifiable, and retain the private-leaderboard distinction.
- **Validation-leakage bullet:** A smaller gap between validation and leaderboard scores does not, on its own, establish that leakage was reduced. Support that interpretation with the validation design, and clarify what the 0.02 difference measures.
- **Feature-selection bullet:** Explain how permutation importance was calculated and ensure the validation data was not used in a way that leaks information into feature selection. This is especially important given the preceding discussion of validation leakage.

## Skills and consistency

- **Programming:** List tools you can use confidently and, where useful, distinguish languages from frameworks or infrastructure tools. Kafka may be less relevant to the target roles unless you can connect it to work experience.
- **Methods:** Correct the spelling error. Consider whether the listed methods are specific enough to support the technical claims elsewhere in the resume.
- **Throughout:** Standardize date separators, punctuation, and spelling conventions. Also check that every percentage has a clearly defined denominator and every performance metric identifies its comparison or evaluation context.