Assuming you are targeting quantitative research, trading, or statistical ML roles.

## Highest-priority fixes

1. **Delete or correct the Sharpe annualization bullet.** Multiplying daily Sharpe by 252 is mathematically wrong; the conventional scaling is by the square root of 252, subject to assumptions about return dependence. As written, this could undermine the entire internship.
2. **Correct the 0.20-to-0.15 calculation.** That is a 25% reduction, not 33%.
3. **Change “6%” to “6 percentage points”** for the move from 52% to 58%.
4. **Correct “econometircs” to “econometrics.”**
5. **Reconsider the Diebold–Mariano claim.** A “standard” DM test may be inappropriate for nested models, and testing across 30 indices raises dependence and multiple-testing questions.
6. **Reduce or relocate the bakery role.** It is legitimate experience, but its current position makes it the first thing a quant recruiter sees.
7. **Separate the overloaded R-package bullet.** It combines four unrelated responsibilities and leaves the download metric with an unclear referent.

---

# Line-by-line review

## Header

### Name
- **No change needed.**

### Phone | email | portfolio
- Make sure the final version uses real contact details rather than placeholders.
- Ensure the code link opens directly to a polished GitHub profile or portfolio rather than requiring navigation.
- Add LinkedIn only if it is complete and consistent with the resume.
- If the code portfolio is weak or inactive, remove it; an underdeveloped profile can hurt more than help.

---

## Education

### Ph.D. candidate line
- Use “candidate” only if you have formally advanced to candidacy; otherwise use the degree program designation.
- Consider adding your research area, dissertation topic, or advisor if directly relevant to quant roles.
- Keep the expected graduation date, since recruiters need to know availability.
- Verify that the date is accurate and consistent with all applications.

### B.S. line
- No substantive change is required.
- Add honors or GPA only if they are strong and useful.
- If space becomes tight, this line can be shortened because the Ph.D. carries more weight.

---

## Experience

### Sunrise Bakery | Assistant Store Manager
- For quant applications, move this into an **Additional Experience** section or reduce it to one bullet.
- The concern is not the type of work; it is that this current role appears above your highly relevant quant internship and may obscure your professional narrative.
- Be prepared for recruiters to wonder how this role fits with the Ph.D. and quant career path. The resume does not need an explanation, but the chronology must be accurate.

### “Managed opening shifts…”
- Change “labour” to “labor” for consistency with a U.S.-based resume.
- Strengthen the budget result if possible. “Within budget” only indicates meeting a requirement, not the size or difficulty of the achievement.
- Avoid giving equal space to routine shift responsibilities and high-value quantitative work.

### “Ran daily stock counts…”
- Clarify that 12% and 7% are percentages of production, preferably over a defined period.
- Treat the change as either a five-percentage-point reduction or approximately a 42% relative reduction; do not blur the two.
- This is the stronger bakery bullet because it demonstrates measurable operational improvement.

---

## Northpeak Capital | Quantitative Research Intern

### “Built a short-horizon order-book imbalance signal…”
- Clarify whether the Sharpe improvement applies to the signal, a combined backtest, or the actual desk book.
- “Desk book’s Sharpe ratio” can imply a live portfolio result, while the rest of the line says it came from a backtest. Remove that ambiguity.
- Confirm that “out-of-sample” is technically accurate and that the 18-month period was not repeatedly used for model selection.
- Ensure the Sharpe figures use the correct annualization methodology.
- This is otherwise your strongest bullet and should remain first.

### “Cut the signal’s daily turnover…”
- Define turnover consistently with the desk’s convention; turnover definitions vary.
- Clarify whether the one-third slippage reduction came from realized trading or a transaction-cost model.
- “Keeping 90% of gross returns” needs a precise comparison point, such as the unsmoothed strategy, although you do not need to add more detail if space is limited.
- Retain the bullet because it demonstrates practical awareness of implementation costs.

### “Confirmed the forecast gain…with standard Diebold-Mariano tests…”
- Remove “standard” unless you can defend the exact testing procedure.
- Recheck whether the DM test is valid for your nested-model comparison. Standard DM inference can be problematic in nested settings.
- Identify the forecast metric being tested; “forecast gain” is too vague for a technical audience.
- Account for serial dependence, cross-index dependence, and multiple comparisons if you claim significance across 30 indices.
- Check whether “30 indices” is consistent with the earlier statement about liquid index futures.
- This bullet needs methodological precision because quant reviewers may challenge it.

### “Joining 120 microstructure features…built a feature store…”
- Fix the sentence structure. The long introductory phrase delays the main action and makes ownership of the work harder to follow.
- Lead with the core deliverable conceptually, then keep point-in-time joins, late-print deduplication, and schema versioning as supporting technical details.
- Clarify whether you independently built the store or contributed to a team system.
- Keep the reuse result; reuse in two later projects is credible evidence of value.
- Make sure “six venues” is plausible for the instruments described elsewhere.

### “Annualized the signal’s daily Sharpe ratio by multiplying it by 252…”
- **Delete this bullet.**
- The calculation is wrong. Conventional annualization uses the square root of the number of periods, not the number of periods itself.
- Even after correcting the calculation, this is not a resume-worthy accomplishment; it describes routine reporting rather than impact.
- Recalculate every Sharpe figure elsewhere in the resume to ensure this mistake did not affect them.

### “Documented the backtest assumptions…”
- Keep this if you have space; it shows research discipline and handoff quality.
- Clarify the onboarding impact only if you can support it. The current wording may imply that the documentation alone caused onboarding to take one week.
- Consider prioritizing this below modeling, validation, and infrastructure bullets.

---

## Ridgeway University | Research Assistant

### “Built the lab’s simulation pipeline…”
- Keep this bullet.
- If available, specify the main source of the speedup—parallelization, vectorization, job scheduling, caching, or another method—because technical reviewers will care how it was achieved.
- Ensure the three-day and five-hour measurements used comparable hardware and workload.
- The reproducibility detail is valuable and should remain.

### “Derived a variance bound…”
- Remove first-person phrasing for consistency with the rest of the resume.
- Consider moving this achievement into a **Publications** or **Research** section, especially if the paper has a title, preprint, or coauthors.
- “Section 3” is less useful than the mathematical contribution itself.
- Verify that “under review at JASA” is current. Update it immediately if the paper’s status changes.
- Be careful not to imply sole ownership if the result was collaborative.

### “Taught weekly recitations…”
- Keep if teaching is valued or if you need evidence of communication ability.
- Add context for the 4.8/5 rating only if available, such as response count or departmental comparison; otherwise it may appear selectively reported.
- Consider separating teaching into its own entry if it was formally a teaching assistant role rather than part of the research assistantship.
- If space is tight for an industry resume, this is lower priority than research and engineering achievements.

### “Released an open-source R package…while maintaining…”
- Split the package achievement from the unrelated service responsibilities.
- Keep the package and download metric together so it is immediately clear what was downloaded.
- Remove or heavily reduce cluster maintenance if it duplicates the simulation-pipeline bullet.
- Remove reading-group organization and grading unless leadership or teaching is central to the target role.
- Verify the source and definition of the 3,000 downloads; package download counts can include automated mirrors or CI systems.
- This line currently dilutes a strong software achievement by attaching too many secondary duties.

---

## Projects

### Volatility Forecasting Study | Independent Research
- Add a repository, paper, or technical report link if the work is public and polished.
- Because the project has been ongoing since January 2024, indicate its current output or status somewhere if possible.
- Make clear whether this work is separate from the Northpeak internship. The shared HAR-RV baseline, 30 indices, and similar forecasting language could make recruiters suspect duplication or reuse of confidential work.
- Do not expose employer data, methods, or results if any part of the project overlaps with internship work.

### “Beat a HAR-RV baseline’s…QLIKE loss by 7%…”
- Keep this as the lead project bullet.
- Clarify the evaluation period, forecast horizon, and aggregation method if space permits.
- Report statistical significance only if the test is valid and appropriately adjusted.
- Ensure the baseline was tuned and evaluated fairly; HAR-RV is a common benchmark that technical interviewers may examine closely.
- Confirm that “30 equity indices” is the correct asset description.

### “Cut forecast error from 0.20 to 0.15, a 33% improvement…”
- Correct the arithmetic: the reduction from 0.20 to 0.15 is 25%.
- Name the error metric. Raw numbers have little meaning without scale and definition.
- Clarify whether this is a separate experiment from the 7% QLIKE result.
- Remove the bullet if it merely restates the first result using another metric without adding a distinct insight.
- Separate the effects of adding realized-volatility features and adding asymmetric loss if you cannot attribute the gain to both through an ablation study.

### “Improved the model’s directional hit rate by 6%…from 52% to 58%…”
- Change the improvement to six percentage points. The relative increase is approximately 11.5%, not 6%.
- Define what “directional” means for volatility forecasting.
- Avoid repeating the model type and 30-index scope if those facts are already established directly above.
- State whether 58% is statistically distinguishable from 50%; otherwise the number may not be persuasive.
- Keep only if directional accuracy matters to the strategy or research objective.

---

## Kaggle Market Prediction Competition

### Title line
- Use the competition’s exact official name if it can be disclosed.
- Add a Kaggle profile or competition link if it verifies the result.
- “Team of 3” is useful because it prevents readers from assuming an individual placement.

### “Placed 41st of 2,900 teams…”
- Keep this bullet.
- Top 2% is accurate, though the exact placement already communicates the result.
- Ensure 2,900 is the final number of eligible teams rather than total registrations.
- Make clear that 41st was the private/final leaderboard result, which you already partly do.

### “Cut validation leakage…”
- Be precise about the claim. Closing a local-to-leaderboard gap is evidence of better validation alignment, but it does not by itself prove leakage was eliminated.
- Explain the grouping unit only if it can be stated briefly and is technically important.
- Identify the score scale if a 0.02 gap is otherwise hard to interpret.
- Keep this bullet because time-aware validation is highly relevant to quant work.

### “Wrote the team’s feature-selection script…”
- Keep the ownership detail.
- Ensure permutation importance was calculated without using the final holdout or private leaderboard feedback.
- “Without losing validation score” should reflect a genuinely untouched validation set, not repeated tuning on the same folds.
- If space is tight, this is less distinctive than the placement and leakage-control bullets.

---

## Skills

### “Programming: Python, R, PyTorch, Kafka”
- Reorganize by type. Python and R are languages; PyTorch is a framework; Kafka is data infrastructure.
- Only retain Kafka if you can discuss real hands-on use. Nothing in the experience section currently supports it.
- Add SQL, Git, Linux, cloud tools, or cluster technologies only if you genuinely have working proficiency.
- Avoid self-ratings unless an application explicitly requests them.

### “Methods: time-series econometircs…”
- Correct “econometircs” to “econometrics.”
- Keep hyphenation consistent for “time-series.”
- Ensure every listed method is supported by an experience or project bullet.
- Consider adding the most relevant demonstrated methods, such as volatility forecasting, market microstructure, Monte Carlo simulation, or causal/statistical testing, but only if they reflect real expertise.
- “Gradient boosting” may fit better under modeling techniques than broad statistical methods.

---

## Overall structure and presentation

- Create separate **Relevant Experience** and **Additional Experience** sections so the quant internship and research work receive priority without hiding the bakery role.
- Consider adding a **Publications** section for the JASA submission and any public research output.
- Keep the strongest evidence near the top: Northpeak, statistical research, volatility forecasting, and Kaggle.
- Standardize date punctuation and use en dashes consistently.
- Avoid bullets that combine more than one main achievement.
- Audit every percentage for whether it means a relative percent change or a percentage-point change.
- Audit every technical claim for reproducibility, especially Sharpe ratios, out-of-sample status, statistical significance, and transaction costs.
- Make sure the final resume does not imply that independent work used confidential internship data or methods.