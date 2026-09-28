Assuming you’re targeting **quant research or trading roles**, you have strong relevant evidence—especially the out-of-sample results, statistical testing, and research outputs. The biggest issues are credibility and clarity: one bullet overstates what a backtest can establish, some metrics may be duplicated, and several accomplishments need more context.

## Highest-priority changes

1. **Remove or substantially rethink the Northpeak bullet about selecting the best of 400 configurations and reporting its Sharpe as expected live Sharpe.** Choosing the best result across many configurations creates selection bias; that backtest Sharpe is not, by itself, a sound estimate of live Sharpe. As written, this may undermine confidence in the rest of your backtesting claims. If you have a separate, defensible estimate, explain how it was obtained and account for selection bias.
2. **Resolve possible duplication among the Northpeak return bullets and the Kaggle project.** The 18-month order-book signal result appears in both the internship and project sections, and the 35% improvement may describe the same work. Clarify which results are distinct; don’t count the same result twice.
3. **Make each performance result interpretable.** State the metric, comparison point, evaluation period, and whether the result is backtested or live. This is especially important for the 35% improvement, the Sharpe increase, and the Kaggle validation gap.
4. **Fix the technical skills categorization and the typo in “econometircs.”** PyTorch is a framework and Kafka is a platform/tool, not a programming language; “econometircs” is misspelled.

## Header and Education

- **Contact information:** Add direct links to your GitHub, LinkedIn, and any relevant portfolio or research work if you have them. “example.com/code/mpatel” is not clearly identifiable as a GitHub or portfolio link. Direct links make it easier to verify your code and research.
- **Ph.D. entry:** Keep the expected completion date prominent and make sure “candidate” accurately reflects your current status. Your research area or dissertation focus could help establish relevance to quant roles.
- **B.S. entry:** This is clear. Include GPA only if it strengthens your application; don’t add it just to fill space.

## Experience

### Sunrise Bakery — Assistant Store Manager

- **“Managed opening shifts…” bullet:** The team size is useful, but “keeping the store within its weekly labour budget” doesn’t say what changed or how well you performed. If you have a meaningful budget result, include it; otherwise, consider whether this bullet earns space on a quant-focused resume. Also use US spelling (“labor”) for consistency with the US location.
- **“Ran daily stock counts…” bullet:** The reduction from 12% to 7% is a useful result. Clarify whether those figures are percentages of production or percentage-point values, and give the measurement period or the scale/value of the waste if available. This will make the result easier to assess.

### Northpeak Capital — Quantitative Research Intern

- **“Improved risk-adjusted returns by 35%…” bullet:** Specify what “risk-adjusted returns” means, what it was compared against, and whether the result was backtested or live. It may be describing the same work as the later Sharpe bullet; make the relationship clear or avoid repeating the same achievement.
- **“Validated the signal on 6 years…” bullet:** The validation method is relevant and technically strong. Make sure the other bullets support the implication that the test was free of look-ahead or selection bias. In particular, this claim sits uneasily beside the bullet about selecting the best of 400 configurations.
- **“Wrote a feature store…” bullet:** This shows reusable engineering work. Add the relevant tools or stack if they help establish your technical fit, and clarify what “120 microstructure features” refers to if that would not be obvious to a quant reader.
- **“Presented the signal…” bullet:** Distinguish approval for a future allocation from actual deployment and results. Since the bullet says the allocation was for “the next quarter,” update the status if that quarter has passed; don’t imply live performance if there wasn’t any.
- **“Selected the smoother’s parameters…” bullet:** This is the most concerning line. A best Sharpe selected from 400 backtests is likely inflated by trying many configurations, so calling it expected live Sharpe is not justified without a robust correction or independent evaluation. Remove the claim in its current form or explain the selection-bias controls and how the live expectation was estimated.
- **“Built a short-horizon order-book imbalance signal…” bullet:** This is one of your strongest results and should appear earlier in the role. Specify the dates or evaluation setup and how the signal’s contribution was isolated from the rest of the desk book. Check that it is genuinely distinct from the 35% result and the Kaggle bullet.

### Ridgeway University — Research Assistant

- **“Cut a 2,000-run Monte Carlo study…” bullet:** The speed improvement is clear, but “the same random seed on every worker” raises a technical concern: identical seeds can produce duplicated or correlated random streams. Describe the random-stream setup accurately and make clear that the runs remained statistically valid and reproducible.
- **“Derived a variance bound…” bullet:** This is strong research evidence. Clarify your specific contribution and, if the result can be summarized precisely, what the “log factor” comparison means. Keep the paper’s status clearly as under review, not accepted.
- **“Taught weekly recitations…” bullet:** This demonstrates communication and teaching, but it is less central to quant research than your technical work. Keep it if you have room; otherwise, prioritize research, engineering, and project outcomes. If retained, make sure the rating’s scale is clear.
- **“Released an open-source R package…” bullet:** Add a direct link to the package or repository. Clarify the source and time period for the download count if that is not self-evident.

## Projects

### Volatility Forecasting Study

- **“Beat a HAR-RV baseline…” bullet:** This is a strong result. Add enough evaluation context for a reader to judge it: forecast horizon, data period or split, and how the 7% QLIKE reduction was calculated. Ensure the time-series split rules are clear enough to establish that the result is out of sample.
- **“Tested significance…” bullet:** The correction and number of indices with significant gains are useful details. Clarify what “in both crisis periods” means in relation to the 24 indices, so the result can’t be misread.
- **“Wrote up the method…” bullet:** The seminar presentation is useful, but the page count is less persuasive than access to the work. Link the paper or code if available, and keep its status clear as a working paper.

### Kaggle Market Prediction Competition

- **Project title and team information:** Add the competition outcome—such as rank or score—if it was notable. The team size alone doesn’t show how the work performed or what you personally contributed.
- **“Engineered features…” bullet:** This is currently generic and doesn’t distinguish your contribution. Keep it only if you can make the specific technical work or outcome clear; otherwise, it adds little beyond the next bullet.
- **“Cut validation leakage…” bullet:** Explain what the 0.02 gap measures and how you determined that the change reduced leakage. A smaller validation-to-leaderboard gap alone may not establish that leakage was the cause.
- **“Added 0.4 to the Sharpe ratio…” bullet:** This appears to duplicate the Northpeak order-book signal result. Remove it if it is the same work; if it is distinct, make that distinction unmistakable.

## Skills

- **Reorganize the categories:** Keep Python and R under programming languages; list PyTorch and Kafka under appropriate framework or technology categories. The current label makes the section technically inaccurate.
- **Correct “econometircs” to “econometrics.”**
- **Check that every listed skill is supported elsewhere in the resume and that you can discuss it in an interview.** Kafka is not currently demonstrated in your experience or projects, so either substantiate it or leave it off. Add other relevant tools only if you have genuinely used them.

## Final checks

- The chronology is generally clear. Verify that “Present” and the future-quarter allocation language reflect the current status of those roles and projects.
- Make sure the final PDF doesn’t break important technical phrases awkwardly across lines. Your text has several wrapped bullets; that is fine in a document, but the exported layout should remain easy to scan.
- For quant roles, give the most space and strongest ordering to defensible research, backtesting methodology, and measurable technical results.