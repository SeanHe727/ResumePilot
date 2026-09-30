## Highest-priority fixes

1. **Remove or substantially qualify the claim that the best of 400 configurations had an expected live Sharpe.** Selecting the maximum from many backtests creates selection bias; that Sharpe is not a sound estimate of live performance. Use a genuinely untouched evaluation set for performance claims, and make clear how parameter selection was separated from testing.
2. **Resolve the repeated order-book-signal results.** The Northpeak and Kaggle sections both claim an order-book imbalance signal added Sharpe over 18 months. If these are the same work or result, don’t present them twice. If they are distinct, make the distinction clear and verify that the metrics and test periods are accurate.
3. **Make the performance claims interpretable.** Define the Sharpe or other metric, its baseline, measurement period, and whether results are annualized and net of costs. The “35%” claim especially needs a clear definition.
4. **Remove your date of birth and nationality.** They are generally unnecessary on a U.S.-style résumé. Include work-authorization information only if relevant to the application.

## Header

- **Name:** Fine.
- **Phone and email:** Fine, assuming they are current and professional.
- **Code link:** Make sure it is live, clickable, and shows relevant work. A portfolio or LinkedIn link could be useful if you maintain one.
- **Date of birth and nationality:** Remove them. They do not help establish your qualifications and can introduce bias.

## Education

- **Ph.D. entry:** Keep the expected completion date current. If you have reached formal candidacy, the title is appropriate; otherwise, use the status that accurately reflects your program. Consider adding a concise research focus if it strengthens your fit for the roles you’re targeting.
- **B.S. entry:** Clear as written. Add honors or distinctions only if you have relevant ones to report.

## Experience

### Northpeak Capital — Quantitative Research Intern

- **“Improved risk-adjusted returns by 35%” bullet:** Define what “risk-adjusted returns” means and what the 35% compares against. Include the evaluation period and clarify whether the result was out of sample and after costs. Also distinguish this result from the separate Sharpe increase later in the section.
- **Six years of tick data / purged walk-forward bullet:** The validation approach is a strength, but the claim that *every* decision used only information available at the time is too absolute—especially given the 400-configuration selection described below. Specify the evaluation design accurately and make clear how tuning was kept separate from reported test results.
- **Feature-store bullet:** Good evidence of reusable work. Add the relevant tools or stack if useful, and clarify what “reused in two later signal projects” means if you can substantiate it. Keep the point-in-time-join detail; it is relevant to quant research.
- **Presentation / live allocation bullet:** Clarify whether the allocation actually went live or was only approved for a future period. If it went live, report the status or outcome only if you can support it. “Small” is vague; quantify it only if disclosure is allowed.
- **400 configurations / expected live Sharpe bullet:** Remove this as written. The best result among many tested configurations is subject to multiple-testing bias and should not be presented as the expected live Sharpe. If the work is important to mention, report it in a way that distinguishes exploratory selection from genuinely independent validation.
- **Order-book imbalance / Sharpe 1.1 to 1.5 bullet:** Clarify whether this is the same signal or result as the 35% claim. State what the starting and ending Sharpe measure, whether they are annualized, the test period, and how costs were handled. Explain whether the increase is attributable to the signal alone or to the broader book.

### Ridgeway University — Research Assistant

- **Monte Carlo speed-up bullet:** The runtime improvement is strong, but check the description of the random seeds. If each worker was initialized with the same seed and generated the same stream, runs may not have been independent, undermining the study. Describe the actual reproducible random-stream setup accurately; don’t claim the same seed per worker unless that was methodologically sound.
- **Variance-bound bullet:** This is a strong research contribution. Clarify the nature of the comparison behind “tightens the previous bound by a log factor,” and ensure the paper’s status is current. “Under review” should not imply acceptance.
- **Teaching bullet:** Fix the tense mismatch between the past teaching activity and the present-tense reference to writing problem sets. Also specify what the 4.8/5 rating measures if that context is not obvious.
- **R package bullet:** Useful evidence of impact. Identify or link the package, and make sure the 3,000-download figure comes from a reliable source and refers to a clear time period.

## Projects

### Volatility Forecasting Study

- **“Pioneered a data-driven, research-first approach” bullet:** Remove it or replace it with a specific, verifiable contribution. As written, it is promotional but doesn’t tell the reader what you did or found.
- **Diebold–Mariano / Holm-correction bullet:** This is one of the most informative bullets. Clarify what forecasts or benchmarks were compared, what the evaluation period was, and whether crisis periods were part of the same testing plan. The phrase about 24 indices and both crisis periods is ambiguous; make the scope of each result clear. Account for multiple comparisons across all tests you report.
- **Working-paper / seminar bullet:** The paper and presentation are relevant; the page count is less important. Add a link if the paper is shareable, and keep the status of the work clear.

### Kaggle Market Prediction Competition

- **Features and gradient-boosting bullet:** It is too general to show what you contributed or how the competition went. Add a concrete result or contribution if available, such as placement or a meaningful evaluation outcome.
- **Time-grouped-folds / 0.02-gap bullet:** Clarify what the 0.02 represents and whether the gap narrowed or disappeared. Be precise about what changed in the validation process; correcting leakage can alter validation scores rather than simply improve them. Also note that repeated use of a public leaderboard can itself encourage overfitting.
- **Order-book signal / 0.4 Sharpe bullet:** This appears to duplicate the Northpeak result. Remove it if it is the same work or metric. If it is separate, clearly distinguish the project, signal, data, and evaluation period so the two claims don’t look like double-counting.

## Skills

- **Programming:** The list is short for a quantitative research résumé. Add tools you can genuinely use in an interview or on the job, such as relevant database, systems, or version-control tools.
- **Methods:** Consider adding methods that are both relevant to your target roles and demonstrated elsewhere in the résumé. Avoid listing broad topics you cannot discuss in depth.
- **Overall:** Keep the skills section factual; don’t add proficiency ratings unless they are meaningful and defensible.

## Presentation and consistency

- Keep date, location, separator, and punctuation formatting consistent throughout.
- Ensure line breaks and bullet wrapping are clean in the final document.
- Prioritize the strongest, defensible quant-research evidence. The résumé has good technical material, but the repeated Sharpe claims and the selected-best-of-400 claim currently create avoidable credibility concerns.