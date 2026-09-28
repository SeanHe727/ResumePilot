Your strongest material is the Northpeak work and the volatility study. Before polishing, fix two claims that could undermine a quant reviewer’s confidence: **the best of 400 backtests is not an expected live Sharpe**, and **using the same random seed on every parallel worker may duplicate simulations**. Check what actually happened and describe the methods and results accurately.

## Header and education
- **Contact line:** Make sure the code link leads to work you want an employer to assess. Add a professional profile only if it contributes something distinct.
- **Ph.D. line:** Keep the expected graduation date current. If you are applying to quant roles, consider adding your research area or dissertation topic if it helps explain your fit.
- **B.S. line:** Fine as is; no change needed unless space is tight.

## Experience

**Sunrise Bakery**
- **Team and budget bullet:** Clarify the scope of your responsibility—whether you set staffing or managed shifts against a budget set by someone else. Use spelling consistently throughout the résumé (“labour” versus “labor”).
- **Stock and waste bullet:** Specify the period over which waste fell from 12% to 7%, and make sure the reduction can reasonably be attributed to your changes.

**Northpeak Capital**
- **35% risk-adjusted returns bullet:** Name the metric and comparison period. Explain how this result relates to the later Sharpe change from 1.1 to 1.5 so they do not look like two conflicting accounts of the same improvement.
- **Six years of tick data bullet:** Distinguish the full data history from the 18-month out-of-sample period below. Keep the point-in-time claim only if it applies to feature construction, parameter selection, and execution assumptions—not just the split.
- **Feature-store bullet:** Strong evidence of reusable work. Clarify your contribution if others built it with you; retain the reuse claim if you can substantiate it.
- **Portfolio-manager presentation bullet:** Distinguish approval for a *future* allocation from a signal that actually went live. The capacity and failure-case details are valuable.
- **400 configurations bullet:** Change the methodology and the claim. Selecting the best backtest creates selection bias; its Sharpe should not be presented as expected live Sharpe. State how selection was done and report a genuinely held-out or subsequent result if one exists.
- **Order-book signal bullet:** This is a strong lead bullet and should appear earlier. Specify the benchmark, costs, and meaning of “out of sample,” particularly given the parameter search above.

**Statistical Learning Lab**
- **Monte Carlo bullet:** Verify the seed setup. If every worker restarted the same random stream, the runs may not be independent; fix the study if necessary before claiming the speedup as a valid simulation result.
- **Variance-bound bullet:** Retain the result, but ensure the “log factor” comparison uses the same assumptions as the prior bound. Identify the paper if it is public, and keep “under review” distinct from publication.
- **Teaching bullet:** Good quantified experience. If teaching was a separate appointment rather than part of the research-assistant role, label it separately.
- **R-package bullet:** Good impact measure. Verify the download count and, if relevant, make your authorship or maintenance role clear.

## Projects
**Volatility Forecasting Study**
- **QLIKE bullet:** Define the evaluation window and how the 7% reduction was aggregated across indices. Make clear that the baseline and model used comparable information.
- **Significance bullet:** Strong robustness detail; clarify what “in both crisis periods” means—separate significance tests, positive gains, or both.
- **Working-paper bullet:** Good evidence of completion. Link the paper if publicly available; distinguish a departmental presentation from an external conference.

**Kaggle competition**
- **Modeling bullet:** Name the competition and add your specific contribution or result if available; the current description is less informative than your other bullets.
- **Leakage bullet:** Keep it, but check that the 0.02 gap is tied to a named metric and that leaderboard feedback was not used to tune the validation approach.
- **Futures-book bullet:** Remove it from this project or correct its attribution. It reads like a second version of the Northpeak order-book result, not a Kaggle competition outcome.

## Skills
- Correct the typo in **“econometircs.”**
- Separate programming languages from libraries and infrastructure; PyTorch and Kafka are not programming languages.
- Keep skills you can discuss concretely in an interview. If Kafka is important, show where you used it.

Finally, put the most relevant, defensible quant results first within each role. Credible validation will help this résumé more than another headline performance number.