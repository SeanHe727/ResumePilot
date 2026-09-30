## Highest-priority fixes

1. **Correct the Monte Carlo random-seed detail.** Using the same seed on every worker can make workers generate duplicate random sequences, undermining the study’s independence. Verify how the runs were seeded; if they were duplicates, rerun the study before presenting the speedup as a valid result.
2. **Remove or substantially qualify the “best Sharpe as expected live Sharpe” claim.** Selecting the best result from 400 configurations creates selection bias; that Sharpe is not a defensible estimate of live performance. This also affects how you present the other backtest results.
3. **Resolve the apparent duplication between the internship and Kaggle bullets.** Both describe an order-book imbalance signal on futures over 18 months, with a roughly 0.4 Sharpe improvement. Clarify whether these are the same work, related work, or independent results; don’t present the same result twice.
4. **Make the resume’s target role clear.** For a quant-research application, the bakery role is less relevant than the research experience. Keep it if it demonstrates useful responsibility or fills a timeline, but give it less space than the quantitative work.

## Line-by-line feedback

### Contact line
- **Phone, email, and code link:** Make sure each is current and clickable where appropriate. The code link should lead directly to a polished profile or relevant work, not a generic landing page.

### Education
- **Ph.D. candidate in Statistics | Sep 2021 – Expected May 2026:** Confirm that “candidate” is your university’s formal status and that the expected date is still accurate. If the degree has since been completed or the expected date has changed, update it.
- **B.S. in Mathematics | Sep 2016 – May 2020:** This is clear. Keep the date formatting consistent with the Ph.D. entry.

### Experience

**Sunrise Bakery | Assistant Store Manager**
- **“Managed opening shifts and a team of 6…”** Clarify whether six is the total team or the number you supervised per shift. “Keeping the store within its weekly labour budget” is useful but would be stronger with the relevant scope or outcome. For a U.S. resume, use U.S. spelling consistently (“labor” rather than “labour”).
- **“Ran daily stock counts and supplier orders…”** Explain the measurement period and what “unsold bread” means in this context. That will make the reduction from 12% to 7% easier to assess and verify.

**Northpeak Capital | Quantitative Research Intern**
- **“Improved risk-adjusted returns by 35%…”** Define the measure behind “risk-adjusted returns,” the comparison point, and the evaluation period. Check that this does not restate the Sharpe improvement in the later signal bullet.
- **“Validated the signal on 6 years of tick data…”** The validation design is a strength. Avoid an absolute claim that every decision used only information available at the time unless you can substantiate it across the full pipeline. Be ready to explain how the purging and embargo were implemented.
- **“Wrote a feature store for 120 microstructure features…”** This is concrete and shows reuse. If space allows, make your individual contribution and the team’s subsequent use of it clear.
- **“Presented the signal, its capacity estimate and failure cases…”** Keep the failure-case detail. Distinguish approval for a future allocation from an allocation actually being deployed, and don’t imply live results if there weren’t any.
- **“Selected the smoother’s parameters from 400 backtested configurations…”** Do not characterize the best in-sample or selected backtest Sharpe as the expected live Sharpe. The 400-way search makes the best result particularly vulnerable to selection bias. Reassess whether this bullet belongs on the resume and whether the other reported backtest results account for the same selection process.
- **“Built a short-horizon order-book imbalance signal…”** Specify how this result relates to the earlier 35% improvement and the Kaggle-project result. State the relevant benchmark and period clearly, and explain how the 18-month out-of-sample period was kept separate from model or parameter selection.

**Ridgeway University | Research Assistant**
- **“Cut a 2,000-run Monte Carlo study…”** Verify the random-number setup before keeping this result. The same seed on every worker can produce repeated sequences, so parallel runs may not represent 2,000 independent trials. Also clarify the computation being parallelized; the current wording is repetitive.
- **“Derived a variance bound…”** This is a strong research contribution. Clarify what the comparison to the previous bound means and ensure “under review at JASA” is still the accurate publication status.
- **“Taught weekly recitations…”** Consider adding the number of student responses or the source of the rating, if available; a rating is more interpretable with that context.
- **“Released an open-source R package…”** Keep the adoption metric, but identify how downloads were counted if that figure could otherwise be ambiguous. Make sure the package is accessible from your code link.

### Projects

**Volatility Forecasting Study**
- **Project heading and dates:** The title, tools, and dates are clear. Keep the “Independent Research” label only if it accurately describes the work’s supervision and collaboration.
- **“Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%…”** State enough about the evaluation setup to make the comparison interpretable, including the forecast horizon and test period if they are not clear elsewhere.
- **“Tested significance with Diebold-Mariano tests…”** This is useful methodological detail. Make sure the Holm correction covers the comparisons you describe, and define the crisis periods if they are not obvious from the paper or linked materials.
- **“Wrote up the method…”** Clearly distinguish a working paper and seminar presentation from a publication or formal conference presentation. This currently does so, but keep the wording accurate as the paper’s status changes.

**Kaggle Market Prediction Competition**
- **“Engineered features and trained gradient-boosting models…”** This is too general to show your contribution or outcome. Add meaningful competition context or results, or remove the bullet if you need space.
- **“Cut validation leakage by switching to time-grouped folds…”** Explain how you determined leakage was present and what the 0.02 score gap represents. Otherwise, the causal claim and the significance of the number are hard to judge.
- **“Added 0.4 to the Sharpe ratio…”** Resolve the overlap with the Northpeak signal bullets. If this is the same signal or evaluation, avoid counting it as a separate achievement; if it is separate, make that distinction clear.

### Skills
- **Programming:** Kafka appears without support elsewhere in the resume. Keep it if you can discuss your practical experience with it; otherwise, remove it or add relevant evidence.
- **Methods:** Correct the typo in “time-series econometircs.” Also keep the methods list to areas you can substantiate through your work or discuss confidently in an interview.

### Overall
- Keep dates, punctuation, and location formatting consistent throughout.
- For quant roles, prioritize the research and technical results, and make sure every performance claim identifies its metric, benchmark, costs, and evaluation window where relevant.
- Review the resume for claims that depend on the same signal, test period, or backtest. Repeated metrics can look like separate achievements when they may describe the same work.