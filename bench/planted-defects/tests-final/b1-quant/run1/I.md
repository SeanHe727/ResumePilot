## Highest-priority fixes

1. **Correct the Sharpe annualization bullet.** Daily Sharpe is generally annualized using \(\sqrt{252}\), not 252. As written, this signals a serious quantitative error.
2. **Correct the forecast-error percentage.** A decline from 0.20 to 0.15 is a **25% reduction**, not 33%.
3. **Change “6%” to “6 percentage points”** for the move from 52% to 58%. Relative improvement would be about 11.5%.
4. **Reassess the Diebold–Mariano claim.** Standard DM tests can be inappropriate for nested models; confirm whether a nested-model adjustment or another test was required.
5. **Fix “econometircs” to “econometrics.”**
6. **Remove or heavily consolidate duplicated volatility-project results.** All three bullets currently describe closely related improvements from the same model.

## Contact information

**Name**
- No change needed.

**Phone and email**
- No substantive change needed.
- Make sure the email is professional and the phone number is the one you actually monitor.

**Portfolio/code URL**
- Label the destination if it is not immediately recognizable as GitHub or a portfolio.
- Use a custom LinkedIn or GitHub URL if available. Recruiters should know what they are opening.

## Education

**Ph.D. candidate line**
- Keep “candidate” only if you have formally advanced to candidacy; otherwise use the institution’s accurate status.
- Consider adding your dissertation area, advisor, or a short research-focus phrase if you are applying to quantitative research roles. Your current education section does not explain your doctoral specialty.
- Use an en dash consistently for date ranges rather than a hyphen.

**B.S. line**
- No major content issue.
- Add honors or GPA only if they are strong and useful.
- If the Ph.D. was entered directly after the research-assistant period, the chronology is understandable, but make sure dates accurately show any gap or transition.

## Experience

### Sunrise Bakery — Assistant Store Manager

**Role heading**
- Because this is your current and most recent role, it appears before your quantitative internship and receives substantial attention. For quant applications, consider placing it in an “Additional Experience” section or reducing it to one bullet.
- Do not omit it if doing so creates an unexplained employment period.
- Use “labor” rather than “labour” because the resume otherwise uses U.S. conventions.

**Opening-shift/team bullet**
- Clarify the scope of your management responsibility: whether six people were direct reports, per-shift staffing, or the total team.
- Add the actual budget result if available, rather than merely saying the store stayed within budget. The current wording shows responsibility but limited measurable impact.
- Remove unnecessary operational detail if space is tight; it is less relevant than your quantitative work.

**Inventory/waste bullet**
- Keep the 12% to 7% result, but specify that this is a five-percentage-point reduction, or quantify the cost savings if known.
- Clarify the measurement period so the improvement does not appear anecdotal.
- Make sure you can explain how your actions caused the reduction.

### Northpeak Capital — Quantitative Research Intern

**Role heading**
- This is your most relevant experience. Consider giving it greater visual prominence than the bakery role even if you retain strict reverse chronology.
- Ensure the firm and results are not subject to confidentiality restrictions.

**Order-book signal/Sharpe bullet**
- Clarify whether the 1.1-to-1.5 change belongs to the entire desk book, a simulated subportfolio, or the signal itself. Claiming that one intern signal changed a desk book’s Sharpe may sound overstated.
- Make the backtest status unmistakable; do not imply live performance.
- Confirm that “out-of-sample” was genuinely untouched or walk-forward data, especially if the model was repeatedly tuned against that period.
- Consider whether 18 months is enough evidence for the stated performance, particularly for a short-horizon strategy.
- Define the futures universe more precisely if confidentiality permits.

**Turnover/slippage bullet**
- Clarify how daily turnover was calculated because conventions differ.
- Explain whether “keeping 90% of gross returns” refers to the original signal’s gross return, gross P&L, or another metric.
- Replace “by a third” with an exact percentage if you have one.
- Distinguish estimated slippage from observed execution costs. The current wording could be read as realized savings.

**Diebold–Mariano bullet**
- Verify that the statistical test was appropriate for nested models. Standard DM inference can be biased in that setting.
- Clarify what was forecast and what loss function was tested.
- Resolve the universe description: the prior bullet refers to liquid index futures, while this one says 30 indices.
- If 30 separate tests were conducted, account for multiple testing or state that correction was used.
- Remove “standard” unless it communicates a specific methodology; currently it adds little and may draw attention to the test-selection issue.

**Feature-store bullet**
- Fix the sentence structure. It begins with an introductory participial phrase whose subject does not align cleanly with the main clause.
- Lead conceptually with the feature store rather than the act of joining data.
- Clarify whether there were 120 features total or 120 per venue.
- Separate the data-engineering work from the reuse impact if the sentence remains difficult to scan.
- “Point-in-time” is valuable, but be prepared to explain how look-ahead leakage was prevented.
- “Two later projects” is good evidence of reuse; retain that outcome.

**Sharpe annualization bullet**
- Correct the methodology: annualization normally uses the square root of 252 for daily Sharpe, assuming the relevant conditions.
- If this bullet documents a mistake rather than an achievement, remove it entirely. A resume should not highlight an incorrectly reported risk metric.
- Recheck every Sharpe figure elsewhere after correcting the calculation.

**Documentation/onboarding bullet**
- Clarify how you know the documentation enabled onboarding in the first week.
- Quantify adoption only if it can be supported.
- Shorten the list of documented items if space is needed, but retain the failure-regime reference because it signals research discipline.
- Use consistent comma style in lists.

### Ridgeway University — Research Assistant

**Role heading**
- Clarify whether this was a post-baccalaureate research-assistant role, since it occurred after the B.S. and before the Ph.D.
- If the role continued into the Ph.D. under another title, ensure the dates and titles reflect that.

**Simulation-pipeline bullet**
- Strong bullet overall.
- Clarify whether runtime fell from 72 wall-clock hours to five wall-clock hours under comparable compute resources.
- If parallelization drove the gain, indicate that elsewhere only if relevant and accurate.
- Retain the reproducibility details; they strengthen the claim.

**Variance-bound/publication bullet**
- Avoid first person; the rest of the resume does not use it.
- Specify your authorship status if the paper is under review and you are not the sole author.
- Verify that naming JASA complies with the journal’s review and disclosure expectations.
- Clarify whether the logarithmic-factor improvement applies under the same assumptions as the prior bound.
- If space allows, identify the estimator or problem class more specifically.

**Teaching bullet**
- This mixes research-assistant and teaching-assistant responsibilities. Either adjust the title to reflect both roles or separate teaching into its own entry.
- Clarify whether you independently wrote all 12 problem sets or contributed to them.
- State the basis of the 4.8/5 rating if it was a formal course evaluation.
- Consider removing this bullet for highly technical industry applications if stronger research material is available.

**R package/cluster/reading group/grading bullet**
- Split or reduce this content conceptually; it combines four unrelated responsibilities.
- Fix the ambiguous “which.” Grammatically, it may appear to refer to the entire preceding list rather than specifically to the package.
- Keep the 3,000-download result attached unambiguously to the package.
- Prioritize package development and adoption over routine service work.
- Move cluster maintenance, reading-group organization, and grading elsewhere or remove them unless they fill a specific requirement.
- Clarify the download source and measurement period if asked.

## Projects

### Volatility Forecasting Study

**Project heading**
- If this overlaps with your dissertation or the Northpeak work, explain the relationship so it does not look like the same work reported twice.
- “Present” is appropriate only if you are actively working on it.
- Add a repository, paper, or report link if public.
- Consider listing major libraries beyond PyTorch only if they add useful signal.

**QLIKE bullet**
- This is the strongest of the three project bullets.
- Specify the evaluation design sufficiently to establish that the result is genuinely out of sample.
- Clarify whether 7% is an average across indices, a pooled result, or another aggregation.
- Include uncertainty or statistical significance only if it was properly assessed.
- Avoid reusing nearly identical “30 equity indices” language in multiple bullets.

**Forecast-error bullet**
- Correct the arithmetic: 0.20 to 0.15 is a 25% reduction relative to 0.20.
- Name the error metric; “forecast error” is too vague.
- Clarify what each number represents and whether lower is better.
- Explain whether the realized-volatility features were absent from the baseline in the first bullet; currently the description is conceptually confusing because HAR-RV itself uses realized-volatility terms.
- Separate the effects of added features and asymmetric loss if you cannot attribute the improvement to each.
- Remove this bullet if it largely duplicates the QLIKE result.

**Directional-hit-rate bullet**
- Change “6%” to “6 percentage points.” The move from 52% to 58% is not a 6% relative increase.
- Clarify how direction was defined.
- State whether 58% was statistically distinguishable from chance or from the baseline if that analysis exists.
- Remove the repeated model and universe description if those are already clear from the preceding bullet.
- Keep this metric only if directional accuracy matters to the target roles.

### Kaggle Market Prediction Competition

**Project heading**
- Add the competition’s actual name if permitted; the generic description is less credible and cannot be verified easily.
- Include a public profile or competition link if available.

**Placement bullet**
- Check the top-2% claim: 41 out of 2,900 is approximately the top 1.4%, so “top 2%” is conservative but less precise.
- Clarify whether 41st was the final private-leaderboard placement.
- Keep either the exact rank and field size or the percentile if space is limited; both are somewhat redundant.
- Be ready to explain your individual contribution within the team of three.

**Leakage/validation bullet**
- “Cut validation leakage” is imprecise because leakage is usually eliminated or mitigated rather than measured through the leaderboard gap.
- Clarify the specific leakage mechanism prevented by time-grouped folds.
- Explain what the 0.02 score represents because its significance depends on the competition metric.
- Avoid treating a reduced local-to-leaderboard gap as definitive proof that leakage was removed.

**Feature-selection bullet**
- Strong ownership signal.
- Clarify whether permutation importance was computed in a leakage-safe validation framework.
- If runtime or model complexity improved, quantify it; otherwise the outcome is mainly reduced feature count.
- “Without losing validation score” is useful, but ensure the comparison was made on untouched validation folds.

## Skills

**Programming**
- Separate programming languages from frameworks and infrastructure. Python and R are languages; PyTorch is a machine-learning framework; Kafka is a data-streaming platform.
- Add SQL, Git, Linux, cloud tools, or cluster technologies only if you can use them competently and they are relevant.
- Consider indicating proficiency only if the distinctions are honest and informative.
- Kafka may appear unsupported because none of the bullets mentions using it. Either connect it to experience or remove it.

**Methods**
- Correct “econometircs” to “econometrics.”
- Use consistent capitalization.
- Consider adding methods already demonstrated in the resume, such as market microstructure, volatility forecasting, Monte Carlo simulation, and statistical inference.
- Avoid an excessively long keyword list; prioritize methods supported by bullets.
- “Gradient boosting” may fit better under machine learning than statistical methods, depending on how you organize the section.

## Formatting and consistency

- Keep every bullet on one line in the source document when possible; allow the layout software to wrap it naturally.
- Use consistent en dashes for date ranges.
- Use U.S. spelling throughout if applying in the U.S.
- Keep punctuation consistent across all bullets.
- Avoid first person.
- Ensure every quantitative claim has a clear denominator, baseline, period, and metric.
- Aim for one page unless your publications and doctoral research justify a second page.
- For quant roles, prioritize research, statistical rigor, coding, data quality, and backtesting discipline over general management experience.