# case-3

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly
labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk
book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.
- Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90%
of gross returns and lowering estimated slippage by a third.
- Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests
across the 30 indices.
- Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and
versioning each schema, built a feature store the team reused in two later projects.
- Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the
desk.
- Documented the backtest assumptions, transaction-cost model and known failure regimes in the
desk’s research wiki, which the next intern cohort used to onboard in their first week.
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study
from 3 days to 5 hours, with every run reproducible from its seed and configuration file.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound
by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and
earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while maintaining the
lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was
downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features
and an asymmetric loss.
- Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a
temporal convolutional model.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing
in the top 2% of the private leaderboard.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local
validation and leaderboard scores.
- Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate
features to 300 without losing validation score.
SKILLS
Programming: Python, R, PyTorch, Kafka
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

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

## Reviewer 2

## Overall assessment

You have strong quantitative-research experience, but the resume currently has four problems:

1. **A few claims are technically incorrect or potentially misleading.**
2. **Several bullets duplicate the same achievement rather than adding distinct evidence.**
3. **Some bullets are overloaded with multiple unrelated responsibilities.**
4. **Your strongest research experience is diluted by lower-value details and wording issues.**

For a quantitative research or statistical modeling role, prioritize methodological rigor, reproducibility, validation design, implementation scale, and clearly attributable impact.

---

## Header

### Contact information
- Keep the phone number and email.
- Make sure `example.com/code/mpatel` is a real, accessible portfolio or code repository. If it is a GitHub profile, use the direct GitHub URL and ensure the repositories are polished, documented, and relevant.
- Consider adding a LinkedIn profile only if it is complete and consistent with the resume.
- Do not include a full street address.

---

# EDUCATION

### Ridgeway University | Ph.D. candidate in Statistics | Sep 2021–Expected May 2026

- Specify your expected degree more formally if relevant to the target role, such as whether you are pursuing a Ph.D. in Statistics or a particular concentration. Do not add detail that is not useful for the job.
- Consider adding a dissertation topic, advisor, or selected research areas if they are directly relevant to quantitative research.
- If you have passed qualifying exams, received departmental honors, or published work, those may be more valuable than the generic “Ph.D. candidate” label.
- Make the date formatting consistent throughout the resume. Use either en dashes or hyphens consistently, and use the same month format everywhere.

### Ridgeway University | B.S. in Mathematics | Sep 2016–May 2020

- This entry is fine.
- Consider adding a GPA, honors, or relevant coursework only if it is strong and useful. At your experience level, coursework is probably unnecessary.
- The gap between your bachelor’s graduation and the start of your Ph.D. is covered by the research assistant role, so there is no obvious issue.

---

# EXPERIENCE

## Sunrise Bakery | Assistant Store Manager

### “Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.”

- Clarify whether you personally supervised the six employees or whether six people worked during the opening shifts. The current wording leaves that somewhat ambiguous.
- Add the scale of the budget or the size of the operation if it is meaningful, since “within budget” is a weak outcome without context.
- Use one spelling convention consistently. “Labour” is acceptable, but if you are targeting U.S. employers, “labor” may be more natural.
- This is not directly relevant to quantitative research, so keep it brief unless it explains current employment, leadership, or a gap. One strong management bullet may be enough.

### “Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.”

- This is a useful quantified operations achievement.
- Clarify the measurement period or comparison basis if possible. A recruiter may wonder whether this was measured over a week, month, or season.
- Explain the operational contribution more clearly in your own revision: the reader should understand what changed because of your work, not merely that the percentage fell.
- Make sure “unsold bread” is actually measured as a percentage of production and not as a percentage of sales or inventory. The metric must be defensible.

---

## Northpeak Capital | Quantitative Research Intern

### “Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.”

- This is one of your strongest bullets, but it needs more methodological context.
- Clarify whether the signal was added to the existing desk book or evaluated as a standalone strategy. “Raised the desk book’s Sharpe ratio” implies attribution that may be difficult to establish for an intern project.
- State the relevant universe or number of contracts if space permits.
- “After costs” is good; preserve that information.
- Make sure the 18-month period was genuinely out-of-sample and that no parameter selection or model changes occurred during that period.
- Consider whether the Sharpe comparison is annualized consistently and calculated over the same return series. The claim will attract scrutiny.

### “Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.”

- This is also strong, but the measurement bases need to be explicit.
- Explain whether “keeping 90% of gross returns” means retaining 90% of the original gross P&L, return, or alpha.
- “Lowering estimated slippage by a third” should be tied to the same test period and cost model as the first bullet.
- Avoid presenting several related percentages without making their denominators and comparison points clear.
- Check that “gross returns” and “slippage” are not being mixed in a way that makes the result difficult to interpret.

### “Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.”

- This bullet is technically valuable because it shows statistical testing, but it is too vague.
- Specify what was tested: forecast loss, predictive accuracy, or return performance.
- “Forecast gain” is imprecise. Use terminology that distinguishes predictive accuracy from trading performance.
- Include the significance level, number of significant series, or another result if you have one. Merely saying you used Diebold–Mariano tests does not tell the reader what they showed.
- Check whether “nested” is appropriate for the test implementation. Standard Diebold–Mariano testing can require care with nested models; if the baseline was nested, make sure your test handled that issue correctly.

### “Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.”

- This has a grammatical problem: the opening participial phrase does not attach correctly to the subject.
- “Joining” is also ambiguous. It may mean combining data, or it may be a mistaken tense choice. Make the operation unambiguous.
- Clarify whether the features were joined point-in-time, whether the raw data were aligned point-in-time, or both.
- This bullet contains several distinct contributions: data alignment, late-print handling, schema versioning, and feature-store development. Decide whether to keep them together or separate them based on space.
- Quantify scale if available: data volume, latency, number of instruments, or reduction in leakage/debugging time.
- “Reused in two later projects” is useful evidence of adoption, but identify the value of that reuse if you can.

### “Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.”

- Remove this bullet.
- The calculation is incorrect. A daily Sharpe ratio is generally annualized by multiplying by the square root of the number of periods, not by the number of periods itself.
- More importantly, this bullet exposes an error rather than demonstrating a strength. It could undermine confidence in the rest of the quantitative work.
- If the calculation was corrected later, do not include the mistake unless you are discussing it in an interview as a learning experience.

### “Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.”

- Keep this only if you need evidence of research communication, documentation, or knowledge transfer.
- The claim about onboarding in the first week is useful but slightly informal and difficult to verify. If you have a stronger measure of adoption, use that instead.
- Make sure the documentation covered data leakage, universe selection, execution assumptions, missing data, and parameter selection—not just general assumptions.
- This is a good supporting bullet, but it should come after the core modeling and research results.

---

## Ridgeway University | Research Assistant, Statistical Learning Lab

### “Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.”

- This is an excellent bullet.
- Add the tools or technologies used only if they are relevant and not already clear from the skills section.
- “Every run reproducible” is a strong claim; retain it only if the pipeline truly controlled seeds, configurations, software versions, and data inputs.
- Consider specifying the type of parallelization or cluster environment if the target roles value production-scale computation.

### “Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.”

- This demonstrates advanced mathematical ability and is highly relevant for statistical research roles.
- Avoid first-person phrasing such as “my proof”; make the contribution sound professional and precise.
- Verify the journal name and submission status. “Under review” is appropriate only if the paper has actually been submitted and is currently under review.
- “Tightens the previous bound by a log factor” may be unclear to non-specialists. Keep the technical statement, but ensure the result is mathematically accurate and understandable.
- If you are a coauthor, clarify your authorship position elsewhere in the publication entry or resume. Do not imply sole authorship if the work is collaborative.
- Consider adding a publications or working papers section if this paper is important to your candidacy.

### “Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.”

- This is clear and well quantified.
- For research-focused roles, it is less important than the simulation and theory work. Keep it if teaching is relevant, if you are applying to academic roles, or if you need evidence of communication.
- Clarify whether 60 students was the total course enrollment or the number attending your recitations.
- Ensure the teaching rating is institutionally recognized and based on a meaningful number of responses.

### “Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.”

- This bullet is overloaded. It combines software publication, systems administration, academic service, and grading.
- The grammatical structure makes “which” ambiguous: the package, the grading, or the overall set of activities may have been downloaded 3,000 times.
- Separate the software achievement from the unrelated lab responsibilities, or remove the lower-value responsibilities.
- Keep the download count only if it comes from a reliable source and refers to actual package downloads rather than page views or repository clones.
- Add evidence of package quality or adoption if available: documentation, tests, external users, citations, or maintenance.
- “Maintaining the lab’s shared cluster” could be valuable, but it needs a measurable result or technical scope to justify space.

---

# PROJECTS

## Volatility Forecasting Study | Independent Research

### “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.”

- This is relevant, but it overlaps substantially with your Northpeak Capital experience, which also mentions HAR-RV and volatility forecasting.
- Clarify whether this is a genuinely independent study or materially related to the internship work. If the projects use similar data, baselines, and methods, the overlap may look like double-counting.
- Define the evaluation design sufficiently to establish that the result is credible: rolling or expanding windows, forecast horizon, and whether hyperparameters were selected without using the test period.
- Make sure “by 7%” refers to a relative reduction in QLIKE, not a seven-percentage-point change.

### “Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.”

- The arithmetic is wrong. A decrease from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement.
- Do not keep this bullet until the metric and percentage are corrected.
- “Forecast error” is too generic. Identify the actual error metric.
- This bullet may duplicate the previous one. If both describe the same experiment, retain only the more informative result.
- The causal claim that the improvement came from both added features and an asymmetric loss needs an ablation or comparison to support it. Otherwise, the bullet implies more attribution than the experiment establishes.

### “Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.”

- The arithmetic and wording are inconsistent. Moving from 52% to 58% is a **6 percentage-point increase**, or approximately an **11.5% relative increase**.
- State which interpretation you mean and use the correct terminology.
- This repeats “temporal convolutional model” and “30 equity indices” from the first bullet. Avoid repeating information unless it establishes a different result.
- Directional accuracy can be misleading if the forecasts are close to zero or if the classes are imbalanced. Include this result only if it was evaluated with an appropriate trading or statistical baseline.
- Consider whether directional hit rate is actually relevant to the role. QLIKE and forecast calibration may be more persuasive for a volatility-modeling position.

### Project-level recommendation
- This project currently has three bullets describing largely overlapping model results. Reduce it to two distinct contributions:
  - one about experimental design and out-of-sample forecast performance;
  - one about diagnostic analysis, ablation, calibration, or implementation.
- Do not include multiple metrics merely to make the project look more quantitative. Each metric should add new information.

---

## Kaggle Market Prediction Competition | Team of 3

### “Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.”

- This is a strong, concise result.
- “41st of 2,900” already communicates the ranking; “top 2%” is correct but somewhat redundant.
- Clarify your individual contribution if the work was done by a team. Otherwise, the reader may not know whether you built the ensemble, engineered the features, or primarily contributed elsewhere.
- Name the framework only if it strengthens the entry and is not already obvious from your skills.

### “Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.”

- This demonstrates good modeling judgment.
- Be careful with the phrase “cut validation leakage.” The change likely reduced leakage or improved the validity of the validation process; it did not necessarily quantify leakage directly.
- Explain whether the 0.02 gap narrowed because the local score decreased, the leaderboard score increased, or both.
- Ensure that the relationship between local validation and private leaderboard scores is stated consistently. A gap can be measured in either direction, and the reader should not have to infer it.
- This is a valuable bullet because it shows awareness of time dependence and evaluation design.

### “Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.”

- This is a useful implementation contribution.
- Clarify why there were 900 candidate features if the previous bullet says the final model used 300 engineered features; the sequence is probably logical, but it should be easy to follow.
- “Without losing validation score” is a good result, but make sure the score was measured using the corrected time-grouped validation scheme rather than a leaky split.
- If permutation importance was computed in a way that could be unstable or computationally expensive, be prepared to explain the procedure in interviews.
- As with the other team project, make your individual ownership clear.

---

# SKILLS

### “Programming: Python, R, PyTorch, Kafka”

- Separate programming languages from frameworks, libraries, and infrastructure.
- Python and R are languages; PyTorch is a machine-learning framework; Kafka is a distributed messaging platform.
- Add only tools you can discuss in detail. Kafka appears nowhere in the experience bullets, so either connect it to a real project or remove it.
- Consider adding version control, SQL, Linux, cluster tools, cloud platforms, or numerical libraries only if you have meaningful experience with them.
- Do not list a skill solely because you touched it briefly.

### “Methods: time-series econometircs, high-dimensional statistics, gradient boosting”

- Correct the spelling of **econometrics**.
- Make the methodological categories parallel and specific. “High-dimensional statistics” is broad; it is acceptable, but your experience could support more precise areas such as sparse regression, covariance estimation, volatility forecasting, or time-series forecasting.
- “Gradient boosting” is a modeling method, while the other entries are broader fields. Consider organizing skills by type so the section is easier to scan.
- Include statistical testing, experimental design, time-series cross-validation, and market microstructure only if you can substantiate them through the experience section.
- Do not let the skills section introduce methods that are not evidenced elsewhere.

---

## Highest-priority changes

1. **Delete the Sharpe annualization bullet.**
2. **Correct the 0.20-to-0.15 calculation from 33% to 25%, or replace the metric with the correct one.**
3. **Correct the “52% to 58%” wording to distinguish percentage points from relative percentage improvement.**
4. **Fix the grammar of the feature-store bullet.**
5. **Fix the ambiguity and overload in the R-package/lab-responsibilities bullet.**
6. **Reduce duplication among the three volatility-project bullets.**
7. **Clarify attribution and evaluation methodology for the Northpeak results.**
8. **Correct “econometircs.”**
9. **Make team contributions explicit in the Kaggle entry.**
10. **Ensure every quantitative claim has a clear denominator, comparison period, and evaluation protocol.**

Your underlying material is strong, particularly the simulation pipeline, statistical theory, feature-store work, time-series validation, and quantified trading research. The main task is to make the resume technically airtight and remove anything that could cause a quantitative interviewer to question the reliability of your calculations.

## Reviewer 3

# Resume review

## Overall assessment

This resume is strongest for **quantitative research, systematic trading, statistical modeling, or applied machine-learning research internships/full-time roles**. The technical evidence is substantially stronger than the presentation currently suggests.

The biggest issues are:

1. **A serious credibility error in the Sharpe-ratio bullet.**
2. **The current bakery role appears before your most relevant quantitative experience.**
3. **Several bullets repeat the same result rather than showing distinct capabilities.**
4. **The Ph.D. research is underrepresented and the JASA paper is buried in experience.**
5. **There is no summary or research-interest framing to connect statistics, machine learning, and quantitative finance.**
6. **One bullet has an obvious grammar/word-choice problem, and there is a typo in Skills.**
7. **Some quantitative claims need methodological context to be credible to a technical reviewer.**

I would not submit this version to a quant-research role without fixing the annualization statement, restructuring the top half, and tightening the project bullets.

---

# Highest-priority changes

## 1. Remove or correct the Sharpe-ratio bullet immediately

> “Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.”

This is the most damaging line in the resume. For independently distributed daily returns, annualizing a Sharpe ratio generally involves multiplying by the square root of the number of periods, not the number of periods itself. The current wording signals a fundamental misunderstanding of a core quantitative-finance concept.

Change this in one of two ways:

- Correct the calculation and explain the convention used, if this was an actual reporting correction; or
- Remove the bullet entirely if it describes a mistake that was not part of a successful deliverable.

Do not leave it as written. A quant hiring manager could reject the application based on this line alone.

## 2. Move quantitative experience ahead of the bakery position

The bakery role is currently the first item under Experience because it is current. That is chronological, but it makes the first experience a non-quantitative management job and delays the strongest evidence.

For quant applications, use a structure that places **Northpeak Capital and quantitative research first**, then puts the bakery job in a clearly separated additional or other-experience section. Do not hide the role or create a misleading chronology; simply prioritize relevance.

Why this matters: recruiters often decide whether to continue within seconds. Your first role currently signals retail operations rather than quantitative research.

## 3. Add a concise summary or research-focus section

The resume begins with Education and provides no immediate explanation of your target profile. Add a short summary that establishes:

- Ph.D. candidacy and expected completion;
- statistical learning/time-series or financial modeling focus;
- quantitative research experience;
- programming and research strengths;
- target direction, such as systematic trading, quantitative research, or applied statistical modeling.

This is particularly important because the resume combines academia, finance, retail management, and competitions. Without a framing statement, the reader has to infer the intended career path.

## 4. Correct the feature-store bullet

> “Joining 120 microstructure features point-in-time…”

“Joining” appears to be the wrong word or an unfinished edit. It also makes the sentence difficult to parse and weakens confidence in the claimed engineering work.

Change this bullet so that it clearly distinguishes:

- what data integration task you performed;
- what point-in-time or leakage-control constraint you handled;
- what versioning or schema work you performed;
- what you personally built;
- how the team reused the result.

This is otherwise a valuable bullet because it demonstrates research infrastructure and data-quality discipline.

## 5. Fix “econometircs”

> “time-series econometircs”

Correct the spelling. Also decide whether this should be categorized as a method, a domain area, or both. A technical reviewer will notice the typo immediately because econometrics is central to several of your finance bullets.

---

# Section-by-section and line-by-line review

## Header

> “Morgan Patel  
> +1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel”

### Change

- Replace placeholder contact details if these are not intentionally anonymized.
- Make the code link point directly to a useful profile or repository collection.
- Consider adding LinkedIn only if it is complete and professional.
- Add a location only if relevant to the roles you are targeting.

### Why

The current domain and phone number look fictional. If they are placeholders for this review, that is fine; if they appear in the actual resume, they damage credibility. A quantitative candidate’s code link should make it easy to inspect the volatility study, packages, or reproducible research.

---

## Education

> “Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026”

### Change

- Add your research area or dissertation focus.
- Add an advisor, dissertation title, or selected research topic if it strengthens your candidacy.
- Include relevant coursework only if it is genuinely useful for the target role and not already demonstrated elsewhere.
- Add expected completion consistently throughout the resume.
- Consider adding publications or working papers immediately after Education.

### Why

The Ph.D. is one of your strongest credibility signals, but the line currently gives no indication of what you study. A quant reviewer needs to understand whether the doctorate is focused on statistical theory, machine learning, time series, high-dimensional inference, or another area.

The JASA paper and the variance-bound work are more persuasive than generic coursework, so they should not remain buried under an old research-assistant position.

> “Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020”

### Change

- Keep this line, but reduce its visual prominence relative to the Ph.D.
- Add honors, distinction, or relevant achievement only if there is a meaningful one.
- Do not add routine coursework unless space permits and it directly supports the target role.

### Why

The bachelor’s degree establishes mathematical preparation, but the Ph.D. and research output are much more relevant. The current education block gives both degrees similar visual weight.

---

# Experience

## Sunrise Bakery

> “Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present”

### Change

- Move this role below the quantitative experience or into an “Additional Experience” section.
- Keep it concise.
- If the role explains your current employment situation or demonstrates leadership, preserve it; otherwise, do not give it the same space as Northpeak or your research work.

### Why

The role is not inherently negative, but its current placement makes the resume appear less targeted. It should support your story without becoming the first thing a quant recruiter sees.

> “Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.”

### Change

- Retain only if you need evidence of leadership, operations, or responsibility.
- Use consistent US spelling if the rest of the resume targets US employers.
- Add a business metric only if you can substantiate one, such as budget size or operational volume.

### Why

The bullet is clear and credible, but it has little relevance to quantitative research. Its value is managerial responsibility, not technical qualification.

> “Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.”

### Change

- Keep this as the stronger bakery bullet.
- Clarify the time period and whether the reduction was attributable primarily to your process.
- If space is tight, retain this bullet and remove the weaker management bullet.

### Why

This demonstrates measurement, operational optimization, and a quantified result. It is still not quant experience, but it gives the role a concrete accomplishment.

---

## Northpeak Capital

> “Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025”

### Change

- Put this experience before Sunrise Bakery.
- If the desk, asset class, or strategy can be named safely, add that context.
- Make clear whether the work was research-only, paper-traded, or deployed.

### Why

This is the most directly relevant employer on the resume. The current ordering understates its importance.

> “Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.”

### Change

- Clarify whether the 1.1-to-1.5 change represents the desk’s full portfolio, an incremental strategy, or a simulated combination.
- State the relevant backtest period and evaluation protocol if space permits.
- Distinguish simulated performance from live performance.
- Confirm that “raised” is justified; if the signal was not incorporated into the desk book, do not imply that it changed actual desk performance.
- Clarify the annualization convention used for the reported Sharpe ratio.

### Why

This is a powerful result, but the current claim may sound overstated. Quant reviewers will want to know whether the improvement came from adding the signal, replacing another signal, changing portfolio construction, or evaluating a standalone strategy.

> “Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.”

### Change

- Define what “keeping 90% of gross returns” means: 90% of the original gross return, net return, or performance after the smoothing intervention.
- Specify whether the slippage reduction is estimated from a model or observed in execution.
- Ensure the turnover numbers use the same measurement convention and period as the first bullet.

### Why

The result is relevant and shows awareness of implementation costs, but the relationships among gross return, turnover, slippage, and net performance are not fully clear. A technical reader may question whether the metrics are being compared consistently.

> “Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.”

### Change

- Report the statistical evidence only if it is meaningful and correctly applied.
- Include the significance level, proportion of datasets showing significance, or another compact indicator of the result.
- Explain what “nested” means in your test setup if the comparison required a special treatment.
- Address whether testing across 30 indices created a multiple-comparisons issue.

### Why

“Standard” is vague and “confirmed” is stronger than the evidence may support. The Diebold–Mariano test is useful, but its presence alone does not establish robustness. This bullet should demonstrate statistical rigor rather than merely naming a test.

> “Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.”

### Change

- Fix the opening grammar/word choice.
- Separate the data engineering actions from the outcome.
- Clarify the point-in-time methodology and how it prevented look-ahead leakage.
- Name the technology used, if it is not already apparent from Skills.
- Preserve the reuse outcome because it demonstrates durable infrastructure.

### Why

This is one of the most differentiated bullets in the resume. It shows that you can build research infrastructure, not merely fit models. It currently loses impact because the sentence is grammatically broken and the technical contribution is compressed.

> “Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.”

### Change

- Correct or delete, as discussed above.

### Why

This is a high-severity technical error, not a cosmetic issue.

> “Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.”

### Change

- Keep this bullet.
- Clarify whether the onboarding result was measured or informally observed.
- Consider placing it after the technical research bullets rather than among the headline performance results.

### Why

It demonstrates research hygiene, communication, and institutional usefulness. It should support the technical story, not compete with the core modeling achievements.

---

## Ridgeway University research role

> “Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021”

### Change

- Consider renaming or restructuring this section so that research experience is visibly distinct from general employment.
- If this work continued after August 2021 through your Ph.D., explain the continuity elsewhere rather than leaving an apparent gap in research activity.

### Why

The role contains some of the strongest evidence on the resume, but the title and dates make it look like an older, completed assistantship disconnected from your current doctoral research.

> “Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.”

### Change

- Keep this bullet.
- Add the relevant tooling or workflow if it is important to the target role.
- Clarify whether the speedup came from parallelization, algorithmic changes, cluster scheduling, or another intervention.
- Preserve the reproducibility detail.

### Why

This is an excellent research-engineering bullet: it includes scale, performance, and reproducibility. The reader would benefit from knowing what technical mechanism produced the improvement.

> “Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.”

### Change

- Keep this as a central research bullet.
- Move the paper itself into a Publications or Selected Research section.
- State your authorship position and the paper’s exact status.
- Remove first-person phrasing if the rest of the resume remains third-person/implicit.
- Explain the relevance to high-dimensional statistics or statistical learning through the section heading or surrounding context, not by adding unsupported claims.

### Why

This is your strongest academic credibility signal. “Under review at JASA” is meaningful, but it must be presented precisely. The paper should not be identifiable only through a job bullet.

> “Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.”

### Change

- Keep if applying to academic, research, or teaching-oriented roles.
- Shorten or omit for industry applications where space is limited.
- Clarify whether the rating was from formal student evaluations.

### Why

It demonstrates communication and mastery of probability, but it is less important than your research, modeling, and engineering evidence for a quant role.

> “Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.”

### Change

- Split this into separate accomplishments or remove the least relevant responsibilities.
- Keep the package release and download count prominent.
- Move cluster maintenance, reading-group organization, and grading elsewhere or omit them depending on target role.
- Link directly to the package.
- Clarify whether 3,000 downloads means package downloads, repository downloads, or another measure.

### Why

The bullet currently combines software publication, systems administration, academic service, and teaching support. That makes it difficult to identify the main accomplishment. The open-source package is valuable; the unrelated duties dilute it.

---

# Projects

## Volatility Forecasting Study

> “Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present”

### Change

- Make the project clearly distinguishable from the Northpeak work.
- Add a repository or paper link if available.
- Explain whether this is part of your Ph.D. research, independent work, or a portfolio project.
- If the project is ongoing, identify what is complete versus still under development.

### Why

This is relevant to quantitative research, but the current label “Independent Research” does not establish the project’s rigor, reproducibility, or relationship to your broader research profile.

> “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.”

### Change

- Keep this as the lead project bullet.
- State the time-split or walk-forward validation design.
- Clarify whether the 7% is an average, median, or aggregate improvement.
- Confirm that the baseline and model use identical information sets.
- Mention the sample period if it is important to interpret the result.

### Why

This is a strong, directly relevant result. Its credibility depends on proving that the comparison is genuinely out of sample and free of leakage.

> “Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.”

### Change

- Remove or consolidate this unless it measures a materially different metric from QLIKE.
- If retained, define “forecast error” precisely and explain why this metric is necessary alongside QLIKE.
- Verify the percentage: a reduction from 0.20 to 0.15 is a 25% reduction relative to 0.20, not a 33% reduction. A 0.05 improvement is one-third of the original residual difference only under a different interpretation.

### Why

The arithmetic and metric definition are problematic. This bullet may be interpreted as overstating performance, especially because QLIKE and generic “forecast error” are not interchangeable.

> “Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.”

### Change

- Remove or consolidate this bullet unless directional accuracy is a central evaluation criterion.
- Correct the description of the improvement: 52% to 58% is a six-percentage-point increase, not necessarily a six-percent increase.
- Add statistical uncertainty or a benchmark if you retain the metric.
- Avoid repeating the same model and dataset without adding a distinct contribution.

### Why

This repeats the temporal-convolutional-model claim and introduces another metric without explaining its relevance to the stated forecasting objective. It makes the project look metric-heavy rather than methodologically rigorous.

### Project-level recommendation

Reduce this project to the most defensible, nonredundant evidence. The current three bullets appear to report three favorable views of the same experiment. A reviewer may wonder whether you are selecting metrics opportunistically.

---

## Kaggle Market Prediction Competition

> “Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023”

### Change

- Name the competition if it is recognizable and appropriate.
- Include the competition domain or dataset type.
- State your individual contribution separately from team results.

### Why

A named competition gives the result more credibility. “Team of 3” is useful, but the reader needs to know what you personally implemented.

> “Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.”

### Change

- Keep this as the lead competition bullet.
- Verify the percentile calculation and whether 41st place is indeed within the top 2%.
- Clarify your contribution to the ensemble and feature engineering.
- If the competition is not directly relevant to the target role, consider allocating less space to it than to research publications or quant work.

### Why

This is a strong external validation signal, but team results should not imply sole ownership.

> “Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.”

### Change

- Keep this bullet.
- Explain what the original leakage mechanism was.
- Clarify whether the 0.02 gap was in the target metric and whether closing it improved generalization or merely reduced optimistic validation.
- Use this as evidence of experimental discipline, not just competition performance.

### Why

This is arguably more impressive than the leaderboard rank because it demonstrates awareness of temporal leakage, a major issue in financial modeling.

> “Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.”

### Change

- Keep if you can explain how permutation importance was computed without leakage.
- Clarify whether feature selection occurred within each training fold or before cross-validation.
- State whether the feature-selection process was used for the final private leaderboard submission.

### Why

This demonstrates practical modeling judgment, but feature selection can itself leak information if performed outside the validation loop. A technical reviewer will likely ask about this.

---

# Skills

> “Programming: Python, R, PyTorch, Kafka”

### Change

- Keep only tools you can discuss in detail.
- Add version-control, database, Linux, distributed-computing, or numerical libraries only if you genuinely used them.
- Connect Kafka to a specific project or remove it if it is merely familiarity.
- Consider distinguishing programming languages from frameworks and infrastructure tools.

### Why

Kafka currently appears without evidence elsewhere in the resume. Unsupported skills look like keyword padding. Your resume would benefit more from demonstrating reproducibility, data pipelines, research infrastructure, and statistical tooling than from listing isolated technologies.

> “Methods: time-series econometircs, high-dimensional statistics, gradient boosting”

### Change

- Correct the spelling of “econometrics.”
- Add methods that are clearly supported by the experience, such as volatility forecasting, microstructure modeling, statistical testing, Monte Carlo simulation, sparse regression, or covariance estimation.
- Organize methods so that the most relevant quantitative-finance capabilities appear first.
- Avoid listing broad methods without evidence in the bullets.

### Why

The current list underrepresents your actual technical breadth. It also omits the most recognizable domain terms from your experience, including order-book modeling, realized volatility, time-series forecasting, and transaction-cost modeling.

---

# Missing or underdeveloped sections

## Add a Publications or Selected Research section

At minimum, include the JASA submission with:

- paper title;
- author list or your authorship position;
- exact submission status;
- relevant link, if available.

You may also include the open-source R package in a separate Research Software section or alongside selected publications.

This matters because a Ph.D. candidate applying to quantitative research roles should not make the reviewer discover the main research output inside an old job bullet.

## Add links to technical work

Where available, link to:

- the R package;
- the volatility forecasting project;
- code or documentation for the competition;
- papers or preprints;
- a professional code portfolio.

Do not link to unfinished or non-reproducible repositories merely to add links.

## Consider adding a summary of selected technical strengths

A summary or research-focus section should make the connection among:

- statistical theory;
- financial time series;
- machine learning;
- backtesting and leakage control;
- research engineering.

Without that connection, the resume reads as several good but somewhat disconnected experiences.

---

# Technical credibility audit

| Claim or area | Assessment | What to change |
|---|---|---|
| Sharpe annualization | Serious technical error as written | Correct or remove |
| Sharpe improvement from 1.1 to 1.5 | Potentially strong but under-specified | Clarify portfolio attribution, backtest/live status, and annualization |
| Slippage reduced by one-third | Plausible but model-dependent | Identify whether estimated or observed |
| Diebold–Mariano testing | Relevant but vague | Add statistical context and avoid “confirmed” unless justified |
| Feature store reused twice | Strong | Fix grammar and explain leakage/versioning contribution |
| Monte Carlo speedup | Strong and credible | Explain source of speedup |
| JASA paper under review | Strong | Move to Publications and state authorship/status precisely |
| R package downloads | Strong if measured correctly | Define the download metric and provide a link |
| QLIKE improvement | Strong if validation is rigorous | State aggregation and walk-forward design |
| Forecast error 0.20 to 0.15 | Numerically questionable | Verify metric and percentage |
| Hit rate 52% to 58% | Needs more context | Use percentage-point language and provide uncertainty/benchmark |
| Kaggle ranking | Strong external signal | Identify personal contribution |
| Feature-selection result | Potentially strong | Explain fold-wise leakage control |

---

# Suggested priority order

## Tier 1: Do these before submitting

1. Correct or remove the Sharpe annualization bullet.
2. Fix the malformed feature-store bullet.
3. Correct the “econometrics” typo.
4. Move Northpeak and research experience ahead of the bakery role for quant applications.
5. Add a summary or research-focus section.
6. Add the JASA paper to a Publications or Selected Research section.
7. Correct or remove the “33% improvement” claim and verify all percentage calculations.
8. Remove redundancy in the volatility forecasting project.
9. Clarify which results were backtested, paper-traded, or live.
10. Add links to your package, code, or papers.

## Tier 2: Strong improvements

1. Explain the statistical testing and validation design more precisely.
2. Separate the R package from unrelated lab administration and grading.
3. Clarify personal versus team contribution in the Kaggle project.
4. Add supported quantitative-finance methods to Skills.
5. Explain how the simulation pipeline achieved its speedup.
6. Identify the provenance and meaning of all performance metrics.
7. Make the Ph.D. research focus visible near Education.

## Tier 3: Optional polish

1. Reduce the bakery section to one bullet if space is tight.
2. Reduce teaching detail for industry applications.
3. Standardize punctuation, date formatting, and capitalization.
4. Avoid repeating “30 indices” in every project bullet.
5. Make section headings visually distinguish research, quantitative experience, and additional employment.

---

# Likely reader reactions

- **Recruiter:** Maybe. The Ph.D. and Northpeak internship are strong, but the bakery role appearing first and the lack of a summary create uncertainty about your target.
- **Hiring manager:** Maybe to interview. The research and infrastructure work are compelling, but the Sharpe-ratio error and ambiguous performance claims are serious concerns.
- **Technical reviewer:** Concerned until the financial-metrics issues are fixed. The candidate appears capable, but the current resume contains one apparent fundamental error and several claims requiring validation.
- **After the Tier 1 changes:** Stronger interview case, especially for quantitative research, statistical modeling, or systematic trading roles.

## Bottom line

You have the substance for a strong quantitative-research resume. The main problem is not lack of achievement; it is **ordering, framing, redundancy, and technical credibility**. Fix the Sharpe-ratio line first, make Northpeak and your doctoral research dominant, surface the publication/software evidence, and ensure every percentage and validation claim is mathematically and methodologically defensible.

## Reviewer 4

8 errors, 16 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The resume opens with Sunrise Bakery instead of the quantitative research and project work most relevant to the target reader. *(no words if sections move; saves about 20 words if Sunrise Bakery is shortened)*

**Why**
A recruiter scanning the first section may initially read the candidate as a store manager rather than a statistics Ph.D. candidate pursuing quantitative research. The strongest evidence of technical fit is pushed below an unrelated current role, weakening the first impression.

**How to change it**
Move PROJECTS above EXPERIENCE, or otherwise place the quantitative research and strongest market-prediction material before Sunrise Bakery. Shorten Sunrise Bakery to one line or explain its relevance without giving it the same visual weight as the research roles.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
1. [Important] “Managed” does not specify the opening responsibility, and the present role uses inconsistent past-tense wording.
2. [Important] The labour-budget claim states compliance but not the measured result against the approved budget.

**Why**
1. A hiring reader can see the team size but not whether the work involved scheduling, opening controls, cash reconciliation, or production coordination. “Managed” and “keeping” also read as past-tense actions under a role listed as Present, which makes the current work appear dated.
2. A reader cannot tell whether the store was barely within budget or materially under it. Without a variance or savings figure, the scale of the management result is difficult to judge.

**How to change it**
1. Replace “Managed” with the specific responsibility you owned, such as [staff scheduling], [opening checklist execution], or [cash reconciliation], if accurate, and use present-tense wording throughout the current-role bullets.
2. Add [the weekly labour-budget variance or amount saved] after the budget claim, measured against the approved budget.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line attributes the entire decrease in unsold bread to stock counts and supplier orders without establishing that causal effect.

**Why**
Demand, promotions, product mix, or production changes could also explain the fall from 12% to 7%. Presenting the association as a demonstrated result risks making the claim look overstated to a careful reader.

**How to change it**
If the effect was not isolated, replace “cutting” with “while ... fell”; if the activities directly drove documented production or ordering changes, state those changes explicitly. Also change “Ran” and “cutting” to present-tense wording for the current role.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The order-book signal description does not identify the specific feature or modeling choice that demonstrates the technical contribution.

**Why**
A quant reader can identify the research area but cannot tell whether the contribution involved imbalance horizons, normalization, forecasting, or portfolio construction. The strong Sharpe result therefore does not reveal what the candidate personally designed.

**How to change it**
Add [the most distinctive signal-construction or modeling choice] immediately after “signal,” if it distinguishes your contribution.

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
1. [Important] “Cost-aware position smoother” describes a tool generally but does not show how it produced the trade-off.
2. [Polish] The turnover, retained-return, and slippage results are chained together so the main trade-off is difficult to scan.

**Why**
1. The turnover, return-retention, and slippage results are strong, but the reader cannot distinguish a meaningful optimization or control method from a generic smoothing adjustment. That makes ownership of the improvement harder to assess.
2. The reader must parse several metrics before understanding the overall benefit of the smoother. The strong outcome is consequently less immediate than it should be in a quantitative-research bullet.

**How to change it**
1. Replace or expand the phrase with [the single most distinctive objective or constraint used], if that detail demonstrates your implementation.
2. Move the principal trade-off result immediately after the smoother and compress the secondary turnover or slippage detail afterward; retain the figures that best show the decision value.

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] The claim that standard Diebold–Mariano tests confirmed the gain over HAR-RV is methodologically incorrect for a nested comparison.
2. [Important] The bullet does not state the forecast metric or the size of the gain that supposedly was confirmed.

**Why**
1. The usual Diebold–Mariano test is not valid without adjustment when comparing an augmented model with a nested HAR-RV model. Across 30 indices, dependence and multiple comparisons also need to be addressed, so the current wording overstates what the tests establish.
2. A reader can see that a test was performed but cannot judge whether the improvement was economically or statistically meaningful. The test name establishes process, not evidence.

**How to change it**
1. Use an appropriate nested-model comparison, such as a Clark–West test or suitable bootstrap, with dependence-robust inference and a stated multiple-comparison procedure; if that was not done, report the test results without claiming they confirmed the gain.
2. Replace “forecast gain” with [the forecast metric and its improvement versus the nested HAR-RV baseline], and add [the concise test outcome, such as the share of indices with significant improvement or relevant p-value range], if available.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] The feature-store bullet begins with a dangling modifier and delays its outcome behind three implementation details.
2. [Important] The feature-store reuse count does not show what the later projects gained from using it.

**Why**
1. “Joining” does not attach cleanly to the later subject, so the sentence is grammatically unstable. The result that the team reused the feature store is also buried, making the bullet harder to scan for impact.
2. Reuse signals adoption, but a hiring reader cannot tell whether it reduced research time, data errors, or backtesting inconsistency. The number of projects therefore shows reach without showing the value of that reach.

**How to change it**
1. Move the feature-store result immediately after the subject or begin with the feature store as the grammatical subject; then place the joining, deduplication, and schema-versioning details after the outcome.
2. Add [the single downstream benefit of reuse], or retain the reuse count as the impact if no stronger outcome was measured.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] The daily Sharpe ratio was annualized with the wrong formula: multiplying by 252 materially overstates it.
2. [Important] The Sharpe-ratio bullet ends with an administrative reporting action instead of a research or decision outcome.

**Why**
1. A daily Sharpe ratio is conventionally annualized by multiplying by √252, not 252. The current method confuses Sharpe-ratio annualization with return annualization and makes the reported risk-adjusted result unreliable.
2. Reporting a corrected metric does not by itself show that the work changed a model choice, desk comparison, or investment decision. The bullet therefore reads as a calculation rather than an achievement.

**How to change it**
1. Replace “252” with “√252” so the line says the daily Sharpe ratio was annualized using the conventional square-root-of-time factor.
2. Replace the reporting clause with [the desk decision, comparison, or research outcome enabled by the calculation], or remove the bullet if no such outcome exists.

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Important] The documentation bullet says the material supported first-week onboarding but does not quantify the operational benefit and uses an ambiguous reference.

**Why**
A reader cannot tell whether onboarding time fell, how many interns used the material, or how much friction it removed. “Which” can refer to the wiki or its contents, and “used to onboard” is less direct than describing what the documentation did.

**How to change it**
Change the relative clause to make the documentation the subject, such as saying it supported or shortened onboarding, and add [one measurable onboarding effect] if available.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Error] The reproducibility claim overstates what a seed and configuration file can establish on a shared cluster.

**Why**
Those two items do not capture code, data, dependencies, software versions, random-number implementation, hardware, or parallel-execution behavior. Different nodes, libraries, thread schedules, or floating-point reductions could therefore produce different results despite the same seed and configuration.

**How to change it**
If the pipeline also pinned the code, data, software environment, RNG implementation and stream assignment, and deterministic execution settings, describe reproducibility within that recorded environment; otherwise remove or soften the claim.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Error] The proof bullet uses a first-person pronoun, and “previous bound” does not identify the baseline result.

**Why**
“My proof” breaks the resume's phrase-based style. A theoretical reader also cannot quickly judge the log-factor improvement without knowing which theorem or prior bound it improves.

**How to change it**
Replace “my proof” with “the proof,” and, if space permits, add [the prior bound, theorem, or cited result] after “previous bound.”

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Important] The teaching bullet gives a strong rating but does not state what changed for students.

**Why**
The rating is evidence of perceived effectiveness, but the reader still has to infer the educational outcome from the teaching activities. A student-learning or course result would make the contribution more concrete.

**How to change it**
If available and accurate, replace or supplement the rating with [a student-learning or course outcome], keeping the rating only if it remains the strongest evidence.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package bullet does not identify what the candidate implemented inside the R package.
2. [Important] The final research-assistant bullet bundles unrelated duties into the package achievement and leaves the download result with an unclear antecedent. *(no words if text only moves; saves about 5–10 words if duties are cut)*

**Why**
1. A technical reader can see the domain and language but cannot distinguish developing an estimator or algorithm from packaging existing work. The substantive technical contribution is therefore unclear.
2. Cluster maintenance, reading-group administration, and grading interrupt the main accomplishment, while “which” can grammatically refer to several preceding activities. The strong package result is consequently harder to scan and the entry ends as an unordered task list.

**How to change it**
1. Add [the specific estimator, algorithm, or user-facing functionality implemented] after the package purpose, if accurate.
2. Move “the package was downloaded 3,000 times in its first year” immediately after the package release, then split or separately list cluster maintenance, reading-group organization, and grading.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The “33% improvement” is numerically incorrect, and the bullet does not identify the forecast-error metric.
2. [Important] The second volatility-study bullet repeats the first bullet's realized-volatility feature method and overlaps with its model-performance result.

**Why**
1. Reducing the error from 0.20 to 0.15 is a 0.05 absolute reduction, or 25% relative to the original 0.20. A reader also cannot interpret those values without knowing whether the measure is RMSE, MAE, QLIKE, or another metric.
2. Both bullets describe improving volatility forecasts through the same modeling work and feature additions, so the reader may not know whether they are separate experiments or duplicate evidence. The repetition makes the distinct contribution of the second result harder to identify.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction in forecast error” or “cut forecast error by 0.05,” and replace “forecast error” with [the name of the forecast-error metric] if accurate.
2. Combine the overlapping results or make one clearly support the other by removing the repeated method from the second bullet and stating the distinct action or evaluation it adds.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
[Error] The increase from 52% to 58% is 6 percentage points, not a 6% improvement, and the repeated model reference does not explain the distinct contribution.

**Why**
A technically literate reader distinguishes a percentage-point change from a relative percentage change; the relative increase here is approximately 11.5%. Repeating “temporal convolutional model” without naming a new action makes the bullet look redundant with the preceding model description.

**How to change it**
Replace “by 6%” with “by 6 percentage points” or, if intended, “an 11.5% relative improvement”; replace the repeated model phrase with the distinct action that produced this result, if available.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 validation-to-leaderboard gap is not defined, and “closed” does not show which score moved or what the final gap became.

**Why**
A reader cannot tell whether 0.02 is an absolute score difference, a percentage, or another metric. Without the direction of movement or resulting gap, the effect of changing the folds is difficult to judge.

**How to change it**
Replace or expand the phrase with [the validation metric and units for the gap, the score that moved, and the resulting gap], if available.

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] “Without losing validation score” does not identify the validation metric or how closely the reduced-feature model matched the original.

**Why**
The feature reduction is clear, but the reader cannot tell whether the score was exactly preserved, approximately preserved, or within a stated tolerance. Naming the metric and before-and-after values would make the result independently judgeable.

**How to change it**
Replace the phrase with [the validation metric and the before-and-after score or acceptable difference], if available.

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.”

**Why**
A misspelling in a technical skills section is immediately visible and can make the reader question the care taken with other technical details. It also weakens the credibility of a skill that is directly relevant to quantitative research.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Polish] Kafka is listed under Programming without evidence of its use anywhere in the resume.

**Why**
A reader may question whether Kafka was actually used or whether the skills list contains unsupported technologies. The mismatch also leaves an apparent gap between the listed skill and the feature-store work where it would be most relevant.

**How to change it**
If Kafka was used in the Northpeak feature-store work, add that use to the relevant bullet; otherwise remove Kafka from Programming.

## What already works

- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: Uses a named baseline and evaluation metric rather than an unsupported claim of improvement.
