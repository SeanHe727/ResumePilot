## Highest-priority changes

1. **Remove your date of birth and nationality.** These details are generally unnecessary on a U.S. résumé, can invite bias, and don’t establish work authorization.
2. **Move the 2025 internship above the 2020–2021 research-assistant role.** Experience should normally run newest to oldest.
3. **Correct the Sharpe-ratio annualization claim.** A daily Sharpe ratio is annualized using the square root of the number of trading days, not by multiplying by 252. As written, this is a material technical error and could undermine confidence in the other quantitative claims.
4. **Fix the unfinished internship bullet and the misspelling in Skills.**
5. **Resolve overlaps and inconsistencies among the project metrics.** Several bullets appear to report different improvements from the same model and data without enough information to reconcile them.

## Header and Education

- **Name and contact details:** Keep these. Make sure the portfolio or code link is clickable and leads to a polished, relevant page.
- **Date of birth and nationality:** Remove both, as noted above.
- **Ph.D. entry:** Keep the expected completion date only if it is still accurate. If you have completed the degree or your expected date has changed, update the entry. The location and date formatting are otherwise clear.
- **B.S. entry:** Clear as written. Consider whether your GPA or relevant coursework would add value; include them only if they strengthen your application and are appropriate for the roles you’re targeting.

## Experience

### Ridgeway University — Research Assistant

- **“Owned the lab’s simulation pipeline…”** The line break is just formatting, but the bullet’s impact is not very specific. Clarify what you were responsible for and what improved as a result, if you can support that with evidence.
- **“Derived a variance bound…”** This is a strong research contribution. Make your role in the paper clear, and ensure the claim about improving the prior bound is precise and defensible. “Now Section 3” is less useful than the publication status and your contribution; consider whether that detail earns space.
- **“Taught weekly recitations…”** Strong evidence of teaching and communication. Specify what the 4.8/5 rating measures and, if available, how many students responded so the rating has context.
- **“Released an open-source R package…”** This bullet combines the package, download count, cluster maintenance, reading group, and grading. Separate or prioritize the most relevant achievements; as written, the core accomplishment is hard to find. Clarify what the download figure represents and its source. Also check that the phrasing makes clear which work the download figure refers to.

### Northpeak Capital — Quantitative Research Intern

- **“Built a short-horizon order-book imbalance signal…”** This is a strong result, but make clear what the Sharpe figures measure and how the signal affected the desk book. Keep the out-of-sample and after-costs qualifications prominent, and be ready to explain the backtest design.
- **“Cut the signal’s daily turnover…”** Clarify what “keeping 90% of gross returns” is compared with. Explain the basis for the slippage estimate and make sure the return-retention and slippage figures use consistent comparisons.
- **“Confirmed the forecast gain…”** “Standard Diebold-Mariano tests” is vague. State what forecast metric was tested and what supports the word “confirmed” (for example, the result’s statistical significance). Because you report tests across 30 indices, be prepared to explain how you handled multiple comparisons.
- **“Joining 120 microstructure features…”** This is grammatically incomplete as written. Fix the sentence structure. The work itself is useful, but clarify what you built and how the team’s later reuse demonstrates its value.
- **“Annualized the signal’s daily Sharpe ratio…”** Remove or correct this bullet before submitting. Multiplying a daily Sharpe ratio by 252 is not the standard annualization; the standard factor is the square root of the number of trading days. Also consider whether explaining a calculation belongs on the résumé at all.
- **“Documented the backtest assumptions…”** This is a useful handoff and research-process contribution, but its impact is less concrete than the trading results. Keep it if documentation and team enablement matter for the roles you’re targeting; substantiate the onboarding claim if asked.

## Projects

### Volatility Forecasting Study

- **“Beat a HAR-RV baseline’s out-of-sample QLIKE loss…”** Specify enough about the evaluation setup to make the comparison interpretable, such as the test period or validation design. Confirm that “7%” is calculated consistently and that the result is genuinely out of sample.
- **“Cut forecast error from 0.20 to 0.15…”** The metric is unspecified, and the stated values imply a 25% reduction relative to 0.20, not a 33% reduction. Recheck the calculation and identify the error metric. Also clarify which changes caused the improvement; adding features and changing the loss at the same time makes attribution unclear.
- **“Improved the model’s directional hit rate…”** This overlaps with the first two bullets by repeating the same model and dataset. Keep it only if it adds a distinct, meaningful result. “By 6%” is ambiguous: the change from 52% to 58% is six percentage points, not a 6% relative increase. Define what counts as a correct direction and how the result was evaluated.

### Kaggle Market Prediction Competition

- **“Placed 41st of 2,900 teams…”** This is a clear, strong result. Use the competition’s exact name if the current title is generic, and ensure the stated rank is the final private-leaderboard rank.
- **“Cut validation leakage by switching to time-grouped folds…”** Be precise about the evidence that leakage was reduced. A smaller gap between local validation and leaderboard performance alone may not establish that leakage was the cause. Clarify what the 0.02 difference measures and whether a smaller gap is actually better for that score.
- **“Wrote the team’s feature-selection script…”** This is useful technical detail. Clarify how you ensured feature selection did not itself introduce leakage, and verify that “without losing validation score” refers to the same validation procedure described in the previous bullet.

## Skills and presentation

- **Methods:** Correct the spelling error in “time-series econometircs.” Consider listing skills in a consistent style and including additional relevant tools or methods only if you can substantiate them in an interview.
- **Formatting:** Use consistent punctuation and date formatting throughout. Check that bullets wrap cleanly in the final PDF and that the experience ordering is reverse chronological.
- **Targeting:** For quantitative-research roles, give priority to the internship’s strongest, technically sound results and your research contributions. Remove redundant metrics or lower-impact details if needed to make those stand out.