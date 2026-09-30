Your strongest material is the quantified research and trading work. Before polishing the wording, **correct the performance claims**: the Sharpe annualization and one percentage calculation are wrong as written, and the significance test needs review.

## Header and education
- **Contact line:** Replace the phone number, email, and URL if these are placeholders; make sure the code link leads to work you want an employer to assess.
- **Ph.D. entry:** Keep the expected completion date current. If your dissertation area is relevant to quant research, consider identifying it; otherwise the degree and dates are enough.
- **B.S. entry:** No change needed.

## Northpeak Capital
1. **Order-book signal:** Clarify what “desk book” includes and how the 18-month out-of-sample period was separated from development. The Sharpe increase is compelling, but readers need to know what was tested and whether the comparison is like-for-like.
2. **Turnover and slippage:** Specify whether turnover is measured as a percentage of the portfolio per day and whether slippage is modeled or observed. That distinction matters when evaluating the claimed improvement.
3. **Diebold–Mariano tests:** Recheck the method. Standard Diebold–Mariano inference is generally not appropriate for a *nested* forecast comparison without accounting for nesting. State the valid test you used, or remove the significance claim until verified.
4. **Feature store:** Fix the sentence’s grammar: its opening construction does not connect cleanly to “built.” Keep the point-in-time joining and reuse details; they show valuable data-engineering rigor.
5. **Sharpe annualization:** Correct this and audit the number reported to the desk. A daily Sharpe is conventionally multiplied by **√252**, not 252, subject to assumptions about return dependence. This is a material credibility issue, not a wording issue.
6. **Documentation:** Keep it, but consider shortening it if space is tight. The earlier bullets carry more weight for a quant-research application.

## Research assistant
1. **Simulation pipeline:** Add a concrete indication of its scale or the checks you owned. “Other students relied on” is less persuasive than a specific outcome.
2. **Variance bound:** Keep this prominent. Verify that “under review at JASA” is still accurate when you apply.
3. **Teaching:** Keep if teaching or communication is relevant to the roles you want; otherwise give the space to research. Check whether “graduate probability” and the 60-student figure describe the same course.
4. **R package:** Separate the package’s 3,000-download result from cluster, reading-group, and grading duties. As written, too many unrelated activities obscure the strongest achievement.

## Projects
**Volatility Forecasting Study**
1. **QLIKE result:** State how the test period and baseline were chosen. This helps establish that the 7% out-of-sample improvement is credible.
2. **Forecast error:** Correct the arithmetic: a drop from 0.20 to 0.15 is a **25% reduction** relative to 0.20, not 33%. Identify the error metric; otherwise readers cannot relate it to the QLIKE result above.
3. **Directional hit rate:** Call the move from 52% to 58% **6 percentage points**, not simply 6%, and define what “directional” means for this forecast. Consider combining or cutting this bullet if it repeats the model and dataset without adding a distinct result.

**Kaggle competition**
1. **Placement:** Keep it; 41st of 2,900 supports the top-2% claim. Name the competition if it is publicly verifiable.
2. **Validation leakage:** Clarify what was leaking and whether the revised folds were adopted before final model selection. Closing a validation–leaderboard gap alone does not demonstrate that leakage was eliminated.
3. **Feature selection:** Keep it if the script was your distinct contribution; otherwise this section may be more detailed than the higher-value research experience.

## Skills
- Correct **“econometircs” to “econometrics.”**
- Reclassify the list: Python and R are programming languages; PyTorch is a framework, and Kafka is a platform/tool. Accurate grouping makes the section easier to scan.
- Include only methods and tools you could discuss in depth in an interview.