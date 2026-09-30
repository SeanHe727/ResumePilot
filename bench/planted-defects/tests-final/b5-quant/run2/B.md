## Highest-priority changes

1. **Remove or correct the bullet claiming the best Sharpe among 400 configurations as expected live Sharpe.** Selecting the best result from many backtests creates substantial selection bias; it is not a defensible estimate of live performance. If you had a genuinely independent final test, explain that evaluation instead. Otherwise, remove the claim.
2. **Resolve the apparent duplicate order-book result.** The Northpeak and Kaggle sections both claim an order-book imbalance signal added 0.4 Sharpe over 18 months out of sample. If these are the same work, present it once and make the relationship clear; if they are separate, distinguish their data, setting, and results.
3. **Verify the Monte Carlo random-number setup.** Giving every worker the same random seed can produce duplicate or correlated random streams, undermining the study. Check the implementation and results, and describe the seeding accurately.
4. **Remove the vague, promotional volatility-project bullet.** It offers no specific method or result, so it takes space away from evidence of your work.

## Header and education

- **Date of birth and nationality:** Remove both for applications in the United States. They are generally unnecessary and can introduce bias. If work eligibility is relevant, address that separately and only as needed.
- **Contact details:** Keep the phone, email, and code profile. Make sure the profile link works and displays as a complete, usable URL.
- **Ph.D. entry:** The expected completion date is useful. Consider adding your research area or dissertation focus if it supports the quant-research roles you want.
- **B.S. entry:** Add the specific degree field if it is not clear from the degree title. Include GPA only if it strengthens your application.

## Experience

### Northpeak Capital

- **“Improved risk-adjusted returns by 35%…”** Define what “risk-adjusted returns” means, the comparison baseline, evaluation period, and whether the figure is after costs. As written, the outcome is hard to interpret and may overlap with your Sharpe claims below.
- **“Validated the signal on 6 years of tick data…”** The validation details are relevant, but the claim that *every* backtest decision used only information available at the time is too absolute. Specify the actual validation safeguards and ensure the wording does not imply that purged splits and an embargo alone eliminate every source of leakage.
- **“Wrote a feature store for 120 microstructure features…”** Clarify your contribution and, if space allows, the tools or design choices that matter for the role. The reuse by two later projects is useful evidence of adoption; make sure that number is accurate and that “feature store” describes what you built.
- **“Presented the signal…who approved a small live allocation…”** Distinguish approval from actual deployment and results. Since the allocation was for a future quarter, don’t imply it generated live performance. Keep the capacity estimate and failure cases if they demonstrate sound research judgment.
- **“Selected the smoother’s parameters from 400 backtested configurations…”** Remove the claim that the best configuration’s Sharpe was the expected live Sharpe. This is the most serious methodological concern in the resume because it treats a selected backtest result as a live expectation. If there was a separate, untouched evaluation, describe that process accurately; otherwise, omit this claim.
- **“Built a short-horizon order-book imbalance signal…”** This appears to duplicate the Kaggle result. Resolve that before keeping it in both places. Also make the Sharpe comparison interpretable: identify the baseline, portfolio or book, evaluation period, and whether the figure is annualized and net of costs. Ensure the 18-month period was genuinely out of sample.

### Ridgeway University, Research Assistant

- **“Cut a 2,000-run Monte Carlo study…”** Check the shared-seed detail before presenting this result. Identical seeds across workers may cause duplicate or correlated runs, rather than independent Monte Carlo samples. Also clarify what the timing comparison includes if setup or hardware differs.
- **“Derived a variance bound…”** The theoretical contribution is strong. Give enough context for a reader to understand what the bound improves on, and keep the paper’s status precise. Saying the result is “Section 3” is less useful than conveying your contribution and the paper’s review status.
- **“Taught weekly recitations…”** Fix the tense inconsistency between “taught” and “writes.” Clarify the teaching rating’s source and sample size if you have that information; otherwise, the rating may be difficult to assess.
- **“Released an open-source R package…”** Add the package name or a link if available, and identify the source of the download count. Download totals can be useful, but readers need enough context to interpret them.

## Projects

### Volatility Forecasting Study

- **“Pioneered a data-driven, research-first approach…”** Remove this bullet or replace it with a concrete description of your method or contribution. The current wording is generic, self-promotional, and unsupported by a result.
- **“Tested significance with Diebold-Mariano tests…”** This is specific and potentially strong. Clarify what forecast measure or comparison the tests assessed, and what “both crisis periods” refers to. Make sure the claim about 24 indices is not ambiguous about whether that count applies before or after the correction.
- **“Wrote up the method…as a 12-page working paper…”** The page count is unlikely to help. Emphasize the paper’s status and your role in presenting it; provide a link if available. Make clear whether the seminar presentation was yours.

### Kaggle Market Prediction Competition

- **“Engineered features and trained gradient-boosting models…”** This is too general on its own. Add a concrete outcome from the competition or remove it if the other bullets already cover your contribution.
- **“Cut validation leakage by switching to time-grouped folds…”** Explain what the 0.02 gap measures and why the change demonstrates reduced leakage rather than merely a change in validation behavior. Be cautious about treating a leaderboard score as a clean test result, since repeated submissions can lead to adaptation to the leaderboard.
- **“Added 0.4 to the Sharpe ratio…”** Resolve the apparent duplication with the Northpeak bullet. If this is the same signal or result, don’t claim it as a separate project outcome. If it is distinct, make the distinction clear and provide enough context to evaluate the result.

## Skills

- **Programming line:** PyTorch is a framework, not a programming language. Separate languages from libraries or frameworks so the categories are accurate.
- **Methods line:** The listed methods are relevant, but broad. Add other directly relevant tools or techniques only if you can substantiate them, and avoid listing skills you cannot discuss in an interview.
- **Overall:** Consider adding the technical tools you used in the experience and projects if they are important to your target roles and missing here. Don’t add a tool solely to make the section longer.