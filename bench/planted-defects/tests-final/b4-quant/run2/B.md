## Highest-priority fixes

1. **Remove or correct the annualized-Sharpe bullet.** Multiplying a daily Sharpe ratio by 252 is mathematically incorrect; under the usual assumptions, annualization uses the square root of the number of trading days. This error could undermine confidence in the quantitative work elsewhere on the resume. Recheck any reported Sharpe figures that depend on this calculation.

2. **Correct the forecast-error calculation in the volatility project.** A change from 0.20 to 0.15 is a 25% reduction relative to 0.20, not 33%. Also identify what “forecast error” measures; the improvement depends on the metric and its direction.

3. **Fix the “Joining 120…” bullet.** Its opening construction is grammatically incorrect, and the sentence makes it hard to tell what you did and what the resulting feature store enabled.

4. **Remove personal details that do not help you get the role.** Delete date of birth and nationality. They are generally unnecessary on a U.S. resume and may introduce irrelevant bias. If work authorization matters for a particular application, address that separately and accurately.

5. **Put experience in reverse chronological order.** Move the 2025 Northpeak role ahead of the 2020–2021 research assistant role. If the internship had not finished by the date you submitted the resume, make sure its dates and verb tense do not imply that it had.

## Header and education

- **Name and contact details:** Keep the phone and email, and make sure the code link is a direct, working link to relevant work. A descriptive label for the link will make its purpose clearer. Use a professional email address and confirm the phone number’s country code is appropriate for the roles you are pursuing.
- **Ph.D. entry:** Make the expected completion date easy to identify and consider adding your research area or dissertation focus. That helps employers understand what your doctoral work is about, beyond the degree name.
- **B.S. entry:** The degree field is useful; include honors or GPA only if they strengthen your candidacy. The dates and institution are clear.
- **Section order:** For research-heavy or academic applications, education near the top is reasonable. For industry quant roles, consider putting experience first, since your internship has directly relevant results.

## Experience

### Research Assistant, Statistical Learning Lab

- **“Owned the lab’s simulation pipeline…”** Specify what ownership involved and what the reproducibility checks covered. “Other students relied on” is vague; it does not show the pipeline’s scope or the result of your work.
- **“Derived a variance bound…”** This is a strong research contribution, but clarify the comparison behind “tightens the previous bound by a log factor” and make your role in the paper clear. A paper under review can change status, so keep that status current; link to a preprint or publication if available.
- **“Taught weekly recitations…”** Keep the teaching scale and materials, but clarify the source of the 4.8/5 rating and, if possible, how many students responded. That makes the rating easier to interpret.
- **“Released an open-source R package…”** This bullet combines the package, cluster maintenance, reading-group organization, and grading. Separate or trim the unrelated duties so the package’s impact is easy to see. The final “which” has an unclear referent, and the 3,000-download figure needs context (for example, the source and timeframe, if verifiable).

### Quantitative Research Intern, Northpeak Capital

- **“Built a short-horizon order-book imbalance signal…”** Clarify how the signal’s contribution to the desk book’s Sharpe was isolated from other changes, and define the backtest period and evaluation setup. A desk-level result is a substantial claim; be precise about what you personally drove and whether this was simulated or live performance.
- **“Cut the signal’s daily turnover…”** State how turnover and gross returns are defined, and ensure “keeping 90% of gross returns” is directly comparable before and after smoothing. Explain the basis for the estimated slippage reduction so the cost claim is interpretable.
- **“Confirmed the forecast gain…”** Identify the forecast metric and the relevant test result, if the tests support a statistical-significance claim. “Standard Diebold-Mariano tests” alone does not show the result, and testing across 30 indices raises questions about dependence and multiple comparisons.
- **“Joining 120 microstructure features…”** Fix the grammar and clarify whether you joined data, constructed features, or both. Explain what “point-in-time” and schema versioning protected against, and specify how the team’s reuse demonstrates impact.
- **“Annualized the signal’s daily Sharpe…”** Delete this bullet unless it documents a corrected calculation that is genuinely useful. As written, it reports an incorrect method and adds no accomplishment.
- **“Documented the backtest assumptions…”** This is useful supporting work, but the onboarding outcome is awkwardly expressed and difficult to verify. Keep it if you can make the extent of adoption or impact clear; otherwise prioritize the stronger research and modeling results.

## Projects

### Volatility Forecasting Study

- **First bullet, QLIKE result:** Keep the benchmark comparison, but specify what the 7% represents and ensure the comparison uses the same data, test period, and evaluation protocol for both models.
- **Second bullet, forecast error:** Correct the percentage and name the error metric. As noted above, the stated before-and-after values do not support the claimed 33% reduction.
- **Third bullet, directional hit rate:** “Improved by 6%” is ambiguous because the values move from 52% to 58%, a six-percentage-point increase. Also explain what counts as a directional hit if it is not self-evident to your target audience.
- **Across all three bullets:** The temporal convolutional model and 30-index evaluation appear repeatedly. Consolidate or prioritize the distinct results so the project does not read as three versions of the same claim. Make clear that the project is independent and describe the evaluation split sufficiently to establish that the results are out of sample.

### Kaggle Market Prediction Competition

- **“Placed 41st of 2,900 teams…”** The placement and top-2% result are consistent but partly redundant. Name the specific competition so the result can be recognized or checked, and retain the team size.
- **“Cut validation leakage…”** Clarify what the 0.02 gap measures and how time-grouped folds addressed the leakage. “Cut leakage” can sound like a measured quantity; the current wording does not explain how you established that.
- **“Wrote the team’s feature-selection script…”** Explain the practical benefit of reducing the feature set, since retaining the same validation score is not itself a clear performance gain. Also ensure permutation importance was computed without leaking validation information into feature selection.

## Skills and presentation

- **Methods:** Correct the misspelling of “econometrics.” Consider whether the listed methods are specific enough for the positions you want; name only techniques you can discuss and apply confidently.
- **Programming:** Python, R, and PyTorch are clear. Add other tools only if you can substantiate them in an interview and they are relevant to your target roles.
- **Formatting:** The supplied text contains many mid-sentence line breaks. In the final document, let the layout wrap text naturally rather than inserting hard line breaks, and keep dates, headings, and bullet formatting consistent. Make sure the resume remains readable when parsed by applicant-tracking systems.