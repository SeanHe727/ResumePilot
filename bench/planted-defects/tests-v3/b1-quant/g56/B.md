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