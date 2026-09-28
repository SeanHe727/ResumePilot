Your strongest material is the quantified research and trading work. Before polishing, fix three credibility issues: the selected backtest Sharpe described as an *expected live* Sharpe, the Monte Carlo runs using the same seed on every worker, and the futures-book result appearing under both your internship and Kaggle project.

I’m treating each wrapped bullet as one line; these are changes to make, not rewrites.

### Header and education
- **Name and contact line:** Keep the name, phone, and email. Make sure the code link leads directly to work you want an employer to assess; use a professional profile or research page instead if that is more relevant.
- **Date of birth and nationality:** Remove both for a typical U.S. job application. If work authorization matters, address it where the application asks rather than implying it through nationality.
- **Ph.D. line:** Keep it, but check that the expected completion date is still accurate when you apply. Consider adding a dissertation or research focus if it helps establish fit for quant roles.
- **B.S. line:** Keep it; no substantive change needed.

### Northpeak Capital
- **“Improved risk-adjusted returns by 35%…”** Specify the metric, comparison baseline, evaluation period, and whether costs are included. “Risk-adjusted returns” is too broad to interpret the 35%.
- **“Validated the signal on 6 years…”** Keep the safeguards, but verify the claim that *every* backtest decision was point-in-time valid, including feature construction and parameter selection. Narrow that claim if you cannot substantiate it.
- **“Wrote a feature store…”** Keep it. If space is tight, prioritize its reuse in two projects over the feature count.
- **“Presented the signal…”** Keep it, but distinguish approval for a future allocation from actual live performance; update the status if the allocation occurred.
- **“Selected the smoother’s parameters from 400…”** Change this substantially. The best result among 400 configurations is not an unbiased estimate of expected live Sharpe. State how selection was separated from final evaluation, and report an appropriately held-out result if you have one.
- **“Built a short-horizon order-book imbalance signal…”** Clarify what “desk book” means here, how the signal affected it, and whether the 18-month out-of-sample period was untouched during development. Reconcile this result with the 35% claim above so readers understand whether they describe the same work.

### Statistical Learning Lab
- **“Cut a 2,000-run Monte Carlo study…”** Resolve the seed issue before retaining the result. Using the same seed on every worker can make runs repeat the same random sequence and undermine the study. Check what actually ran; if runs were duplicated, redo the study before claiming its findings.
- **“Derived a variance bound…”** Keep the contribution, but confirm the comparison to the previous bound holds under the stated assumptions. Update the paper’s review status before each application.
- **“Taught weekly recitations…”** Correct the tense of “writes.” Also check the dates: if the teaching took place outside the listed February–August 2021 research-assistant role, give it its own entry or otherwise make the timing clear.
- **“Released an open-source R package…”** Keep it. Ensure the download count is current and supportable.

### Volatility Forecasting Study
- **“Pioneered a data-driven…”** Remove the promotional language. This bullet needs the actual forecasting method, benchmark, data, and principal result; otherwise it adds little beside the two bullets below.
- **“Tested significance with Diebold-Mariano tests…”** Keep the specific finding, but identify the forecast metric or comparison it refers to and substantiate how the crisis periods were defined. Check that the testing setup supports the 24-of-30 claim.
- **“Wrote up the method…”** Keep it; make the working paper accessible through your contact link if it is public.

### Kaggle project
- **“Engineered features…”** Add your specific contribution and the competition outcome or ranking if it is meaningful; as written, it is generic.
- **“Cut validation leakage…”** Keep the validation change. Clarify what the 0.02 gap measures so its significance is understandable.
- **“Added 0.4 to the Sharpe ratio…”** Remove this from the Kaggle entry unless it was genuinely a separate result from the Northpeak internship. As written, it appears to repeat the internship’s 1.1-to-1.5 result under a different project, which raises an attribution concern.

### Skills
- **Programming:** Keep only tools you can discuss or use in an interview. Consider adding relevant tools that the experience bullets substantiate but the list omits.
- **Methods:** Keep the focused list; align its terms with the methods you can demonstrate in the bullets and target roles.