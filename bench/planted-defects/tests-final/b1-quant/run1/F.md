# Resume review

Your strongest evidence is the quantitative research internship: it has relevant methods, out-of-sample results, and financial-impact metrics. The biggest priorities are to **remove or correct one mathematically incorrect claim, resolve a grammatical error, clarify how several results were measured, and trim repeated or overloaded bullets**. I’ll describe changes rather than rewrite your lines.

## Contact and structure

- **Make the code link’s destination and purpose clear.** The current URL doesn’t indicate whether it leads to GitHub, a portfolio, or something else. For quant research roles, a directly accessible repository or research portfolio can help substantiate your technical work.
- **Consider adding LinkedIn if you use it professionally.** It’s optional, but makes it easier for recruiters to verify your background.
- **Move Skills higher, likely after Education.** Your current list is short, but Python, R, and quantitative methods are important screening terms. Earlier placement makes them easier to find.
- **Consider removing the repeated work locations.** All roles list the same city, so those entries use space without adding much information. Keep location details if they clarify remote, international, or otherwise relevant experience.
- **A summary is optional.** If you add one, use it to establish your target—such as quantitative research—rather than repeat experience already shown below. You don’t need one if space is tight.

## Education

- **Keep the Ph.D. candidate entry prominent.** It is directly relevant to quantitative research and helps explain the statistical depth of your experience.
- **Add a dissertation or research focus only if it is relevant and concise.** This can help connect your doctoral work to market forecasting, statistical learning, or the particular roles you’re targeting.
- **Include GPA or selected coursework only if they strengthen your application.** They’re not necessary given your research and internship experience.

## Experience

### Sunrise Bakery — Assistant Store Manager

- **Keep the role, but make its relevance to your target clear through the results already present.** Team leadership, budgeting, and inventory control are transferable, but the role is less relevant than your quant work; avoid letting it take disproportionate space.
- **For the opening-shift and team bullet, clarify the result of staying within budget.** The current wording shows responsibility but not whether you met a target, avoided overspend, or improved on a prior result. Add a measurable outcome only if you can support it.
- **For the unsold-bread bullet, define the comparison period or measurement basis if it isn’t obvious elsewhere.** The reduction is useful, but readers may wonder whether the percentages are of units produced, sales, or another measure.

### Northpeak Capital — Quantitative Research Intern

- **For the Sharpe-ratio bullet, specify the basis of comparison and the result’s scope.** Clarify what “desk book” refers to in this context, whether the reported ratios are annualized, and how the signal’s contribution was isolated from the rest of the book. This makes a strong result easier to assess.
- **For the turnover and slippage bullet, make the metrics unambiguous.** Define how turnover was calculated and what “keeping 90% of gross returns” compares against. Also clarify whether the slippage reduction is an estimate from the same cost model used in the backtest.
- **For the Diebold–Mariano test bullet, report enough detail to support the inference.** Consider including the relevant significance result and clarifying the forecast target and horizon. Since you describe the baseline as nested, verify that the chosen test is appropriate for the nested comparison; standard Diebold–Mariano testing may not be the right procedure in that setting. Also consider whether testing across 30 indices requires addressing multiple comparisons.
- **Fix the feature-store bullet’s grammatical construction.** As written, it starts with a participle that doesn’t connect cleanly to the main clause, making it unclear who built the store. The bullet also combines data integration, data-quality work, schema versioning, and later reuse; prioritize the core contribution and make the reuse claim concrete if you can.
- **Remove or correct the Sharpe annualization bullet before applying.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization method; under the usual independent-return assumption, the factor is the square root of 252. More importantly, this bullet describes a reporting calculation rather than a research achievement. As written, it could undermine confidence in the financial math elsewhere on the resume.
- **For the documentation bullet, keep the onboarding result only if you can substantiate it.** The documentation itself is useful evidence of research communication and handoff, but the claim about the next cohort’s onboarding would be stronger with a specific, verifiable effect. Otherwise, prioritize more technical work.

### Ridgeway University — Research Assistant

- **For the simulation-pipeline bullet, retain the before-and-after runtime and reproducibility detail.** This is one of your clearest engineering-impact bullets. If space allows, name the tools or cluster environment you used, but only if they’re relevant and accurate.
- **For the variance-bound bullet, clarify your individual contribution and the paper’s status.** The technical result is valuable, but readers may not know what “tightens the previous bound by a log factor” means. Keep the result precise and make sure the manuscript status remains current.
- **For the teaching bullet, keep the audience and rating only if the rating has context.** A 4.8/5 rating is useful, but readers may wonder how many responses it reflects or what it measures. The problem-set count is secondary if you need space.
- **Split or substantially narrow the final lab bullet.** It currently bundles a package release, cluster maintenance, reading-group organization, grading, and download counts. The download figure appears to describe the package, but the sentence structure makes that unclear. Keep the strongest, most relevant achievements together only when their relationship is clear; otherwise prioritize the package and its adoption, and shorten or remove routine duties.

## Projects

### Volatility Forecasting Study

- **Reduce the overlap among the three bullets.** They all describe results from a temporal convolutional volatility model on 30 equity indices. Keep the distinct outcomes that matter most, and make clear whether they come from the same experiment.
- **Clarify that the 7% QLIKE result and the 33% forecast-error result use different evaluation metrics.** Without that distinction, the bullets can look inconsistent or repetitive. State the relevant metric, evaluation setup, and comparison for each result.
- **Reconsider the directional-hit-rate result or explain why it matters.** Directional accuracy is not an obvious primary metric for volatility forecasting. If it reflects a defined prediction task with practical relevance, make that clear; otherwise, prioritize metrics more directly tied to volatility forecast quality.
- **Avoid repeating technical details without adding information.** The model type and dataset recur across the bullets; use the limited space to distinguish the experiments or results instead.

### Kaggle Market Prediction Competition

- **Keep the placement and private-leaderboard result.** They provide a clear, externally verifiable outcome.
- **For the leakage bullet, explain the evaluation context and what the 0.02 gap represents.** The point is important, but the score scale and the effect of the change are not defined.
- **For the feature-selection bullet, clarify what “without losing validation score” means.** Specify whether the score was unchanged within a tolerance or merely similar, and ensure the validation method is consistent with your leakage-prevention bullet.

## Skills

- **Correct the spelling error in “econometircs.”** A misspelling in a skills list can hurt both credibility and keyword matching.
- **Reorganize the categories.** PyTorch is a framework/library and Kafka is a data-streaming technology, not programming languages. Group tools and technologies under accurate, searchable headings.
- **Add relevant tools or methods only if you can discuss them in an interview.** Your experience suggests there may be useful skills to list—such as SQL, data-processing libraries, version control, or backtesting tools—but don’t add any unless you’ve actually used them and can describe that work.
- **Be precise with broad method labels.** “Time-series econometrics” and “high-dimensional statistics” are relevant, but consider listing more specific methods only where they accurately reflect your work and match the roles you’re pursuing.

## Highest-priority fixes

1. Correct or remove the daily Sharpe annualization bullet.
2. Fix the grammar and clarify the contribution in the feature-store bullet.
3. Clarify the testing approach and statistical evidence behind the internship’s forecast comparison.
4. Reduce repetition in the volatility project and clarify how its metrics differ.
5. Correct and reorganize the Skills section.