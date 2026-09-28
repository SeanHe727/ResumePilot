Assuming you’re applying for quant research roles, your strongest material is the Northpeak internship and the volatility study. The main changes are to fix three credibility issues, clarify how the performance results were measured, and give the most relevant work more prominence.

### Fix these first

- **Northpeak — parameter-selection bullet:** Remove the claim that the best Sharpe among 400 configurations was the *expected live Sharpe*. Selecting the best backtest introduces selection bias; that figure is not a defensible live expectation. Explain how you evaluated the selected parameters on data not used to choose them.
- **Research Assistant — Monte Carlo bullet:** Correct the statement that every worker used the same random seed. If that produced identical simulation streams, the runs were not independent; if you used distinct streams derived from one master seed, make that distinction clear. Verify the implementation before retaining the speedup claim.
- **Kaggle — final bullet:** Remove or correct the futures-book claim. It appears to describe the Northpeak signal, but the Kaggle project predates that internship. As written, the dates and attribution undermine confidence in the resume.

### Education and experience

- **Ph.D. entry:** Keep the expected completion date current. If your dissertation or research area is directly relevant to the jobs you want, add it; that would tell readers more than the degree title alone.
- **B.S. entry:** No substantive change needed unless space is tight.

- **Sunrise Bakery, opening-shifts bullet:** Keep the team and budget scope, but consider shortening this role if you need room for quant work. It demonstrates responsibility, though it is less relevant to the target role.
- **Sunrise Bakery, stock-count bullet:** Keep the before-and-after result. Clarify how unsold bread was measured if the 12% and 7% figures are not directly comparable periods.

- **Northpeak, 35% improvement bullet:** Name the risk-adjusted metric, comparison baseline, evaluation period, and whether costs are included. Otherwise the percentage is difficult to assess, especially alongside the later Sharpe figures.
- **Northpeak, validation bullet:** Keep the point-in-time validation detail. Check that “every backtest decision” is supportable across data availability, feature construction, and execution assumptions; the wording currently makes a broad guarantee.
- **Northpeak, feature-store bullet:** Strong evidence of reusable engineering work. Add scale or your specific ownership only if it helps distinguish your contribution.
- **Northpeak, presentation/allocation bullet:** Distinguish an approved *future* allocation from a strategy that actually traded live. Keep the capacity and failure-case detail; it shows judgment.
- **Northpeak, parameter-selection bullet:** Fix as noted above, and make clear which results were used for tuning versus final evaluation.
- **Northpeak, order-book signal bullet:** Move this nearer the start of the internship: it establishes the project before the smoother and validation details. Specify what “out of sample” means given the 400-configuration search, and confirm the book-level Sharpe comparison uses consistent periods and costs.

- **Research Assistant, Monte Carlo bullet:** Fix the random-stream issue above.
- **Research Assistant, variance-bound bullet:** Strong contribution. Check that the publication status and your characterization of the proof still match the paper; update “under review” when it changes.
- **Research Assistant, teaching bullet:** Consider separating teaching from the research-assistant role if it was a distinct appointment. Also check whether “graduate probability” and the dates accurately describe the course you taught.
- **Research Assistant, R-package bullet:** Keep it. Link to the package if you can, and retain the download figure only if you can substantiate it.

### Projects and skills

- **Volatility study, QLIKE bullet:** Keep the quantified baseline comparison. Identify the test period and how the 30 indices were chosen so readers can judge the result.
- **Volatility study, significance bullet:** Clarify the unit of each test and what “both crisis periods” refers to. Ensure the Holm-corrected claim matches the tests performed, particularly if the index results are dependent.
- **Volatility study, working-paper bullet:** Link the paper if public, and keep its status current. The seminar presentation is useful independent validation.

- **Kaggle, modeling bullet:** This is generic compared with your other work. Add your distinct contribution or a meaningful competition result if you have one.
- **Kaggle, leakage bullet:** Keep the validation lesson, but specify what the 0.02 gap measures so the improvement is interpretable.
- **Kaggle, futures-book bullet:** Remove or correct as noted above.

- **Skills:** Correct **“econometircs”** to **“econometrics.”** Retain Kafka only if you can point to work supporting it. Consider making the code link and any public paper or package easy to find, since they let reviewers verify your strongest claims.

Overall, put the most compelling quant outcome early, but prioritize **credible evaluation over larger-looking backtest numbers**. That will do more for this resume than adding another metric.