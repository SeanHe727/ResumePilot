## Highest-priority fixes

1. **Correct the Sharpe annualization claim.** Multiplying a daily Sharpe ratio by 252 is mathematically wrong under the standard convention; it is typically scaled by the square root of the number of trading days. As written, this undermines confidence in the other performance figures. Correct the calculation and verify whether the Sharpe figures elsewhere are annualized consistently—or remove this bullet.
2. **Fix the percentage calculation in the forecasting project.** A change from 0.20 to 0.15 is a **25% reduction** when measured against the starting value, not 33%. Also identify what “forecast error” measures.
3. **Resolve unclear or potentially overstated results.** In particular, make clear how the internship signal affected the desk book, what “90% of gross returns” means, and what data and evaluation procedure support the project metrics.
4. **Correct the malformed feature-store bullet and typo.** The bullet beginning “Joining” has a grammatical construction problem; “econometircs” is misspelled.

## Header and education

- **Contact details:** Make sure the code link is a direct, working URL and that the contact information is current. A portfolio or research link is useful for quantitative roles if it contains relevant work.
- **Ph.D. line:** The expected completion date is helpful. Consider adding a research area or dissertation focus if it strengthens your fit for the roles you’re targeting; otherwise, the degree and dates are clear.
- **B.S. line:** Clear as written. Keep the date and location formatting consistent with the Ph.D. entry.

## Experience

### Northpeak Capital

- **Order-book signal bullet:** This is compelling, but clarify whether the 1.1-to-1.5 Sharpe change is the signal’s contribution to the desk book or a comparison between two backtests. Specify that the ratio is annualized and define the out-of-sample period and cost assumptions. Also ensure the result is approved for disclosure.
- **Turnover and slippage bullet:** Define what “90% of gross returns” refers to and how slippage was estimated. Make sure the return, turnover, and slippage comparisons use the same baseline and period.
- **Diebold-Mariano test bullet:** Clarify what forecast was tested and what “gain” means. If you report significance across 30 indices, consider whether overlapping observations or multiple comparisons affect the tests. This supports a forecast comparison, not necessarily the trading performance claim in the first bullet.
- **Feature-store bullet:** Fix the sentence’s grammatical construction: the opening “Joining” does not connect cleanly to the stated result. Preserve the useful specifics—point-in-time data, six venues, and reuse—but distinguish your work from the team’s and make clear whether the store was used in production or research.
- **Sharpe annualization bullet:** Correct or remove it, as noted above. In its current form, it is a serious credibility problem.
- **Documentation bullet:** The onboarding result is useful if you can substantiate it, but “used to onboard in their first week” is awkward and may overstate the documentation’s role. Keep the claim only if you know how it was used.

### Ridgeway University research assistant role

- **Pipeline ownership bullet:** “Owned” and “relied on” are broad. Add scope or a concrete outcome if you can—such as what the pipeline enabled or what reproducibility checks covered. Otherwise, this bullet is less informative than your research and teaching achievements.
- **Variance-bound bullet:** This is a strong research contribution. Clarify your role in the work and use the paper’s exact publication status. “It is now Section 3” is less meaningful to most readers than the contribution and its status.
- **Teaching bullet:** Strong and specific. Make clear whether the 4.8/5 rating is a student evaluation and, if relevant, what it was measured out of or over what period.
- **R package and lab duties bullet:** This combines several different responsibilities, and “which” has an unclear referent. Separate the package achievement from the cluster, reading-group, and grading duties, or prioritize the most relevant parts. Clarify that the 3,000 downloads refer to the package and indicate the time period or source if available.

## Projects

### Volatility Forecasting Study

- **QLIKE bullet:** Specify the evaluation setup sufficiently to show that the result is genuinely out of sample, especially the train/test split and whether results are aggregated across indices. This is a strong metric if the comparison is reproducible and clearly defined.
- **Forecast-error bullet:** Correct the 33% calculation and name the error metric. Also clarify the comparison baseline: the first bullet already describes a model trained on realized-volatility features, while this bullet describes adding those features.
- **Directional-hit-rate bullet:** The move from 52% to 58% is a six-percentage-point increase, not a six-percent increase. Define what direction is being predicted and whether this is evaluated on the same out-of-sample period. The temporal convolutional model is mentioned elsewhere, so avoid repeating model details unless this bullet adds distinct information.

### Kaggle competition

- **Placement bullet:** Strong result. Confirm that “41st” and the top-2% figure refer to the private leaderboard, and retain the competition’s exact official name if possible.
- **Validation-fold bullet:** Switching to time-grouped folds is a good methodological detail. Be careful with “cut validation leakage”: a smaller gap between local validation and leaderboard scores does not by itself prove leakage was reduced. Describe the validation change and the observed gap accurately.
- **Feature-selection bullet:** The reduction from 900 candidates to 300 is clear. Clarify that the validation score was preserved under the time-grouped evaluation, if that is the comparison you mean, and avoid implying that leaderboard results were used to guide feature selection.

## Skills

- **Programming line:** Kafka is a data-streaming tool rather than a programming language. Group it with tools or technologies rather than programming languages, and keep the categories accurate.
- **Methods line:** Correct the spelling of “econometrics.” The listed methods are relevant, but broad terms are most useful when the experience or projects clearly demonstrate them; make sure each is a method you can discuss in detail.

Overall, the resume has strong quantitative evidence, but the mathematical error and a few ambiguous performance claims should be addressed before you send it. Prioritize accuracy and clear evaluation details over adding more metrics.