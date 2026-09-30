## Overall

Your resume has strong quantitative evidence, but it currently has four major problems:

1. **One technically incorrect claim:** annualizing Sharpe by multiplying by 252.
2. **Some bullets are redundant or inflated:** especially in the volatility project and quantitative internship.
3. **The strongest research work is mixed with less relevant material:** the bakery role and administrative lab duties take up valuable space.
4. **Several claims need more context:** methodology, validation design, publication status, links, and whether metrics are truly comparable.

For a quantitative research, statistics, or machine-learning role, I would keep the resume to **one or two pages**, lead with the most relevant research, and make every numerical claim technically defensible.

---

# Header

### `Morgan Patel`

- Keep your name prominent.
- Make sure the font size and spacing clearly distinguish it from the rest of the document.

### `+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel`

Change:

- Add the full protocol to the portfolio URL if this is an online resume: the current form may not be recognized as a clickable link by resume parsers.
- Use a professional code-profile label or destination that makes clear what the link contains.
- If the page includes your research code, publications, package, or projects, make sure those materials are actually available and documented.
- Consider adding LinkedIn, Google Scholar, ORCID, or a publications link if relevant. For a statistics or quant role, a code link alone may undersell your research profile.
- Do not include a full street address; city and country are sufficient if you add location information.

---

# Education

### `Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026`

Change:

- Use the official degree notation from the university if applicable, such as whether the program is a Ph.D. in Statistics or a Ph.D. candidate in Statistics.
- Add a dissertation title, research area, or advisor only if it strengthens your fit for the target role. Your current resume otherwise leaves your doctoral specialization unclear.
- Clarify whether you have passed qualifying exams or advanced to candidacy if that distinction matters in your academic system. “Ph.D. candidate” can mean different things to different employers.
- Ensure the expected graduation date is current. If the date changes, update it consistently across applications.
- Because you have substantial research experience, consider placing a short research-focus line beneath the degree rather than leaving the degree as a standalone credential.

### `Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020`

Change:

- Add honors, GPA, relevant coursework, or a concentration only if they are strong and relevant. At your stage, coursework is less important than research and experience.
- Check whether your doctorate and bachelor’s degree should be grouped under one university heading to reduce repetition and save space.
- The four-year gap between the bachelor’s degree and the doctorate is not necessarily a problem, but make sure the research assistant role and doctoral program make the timeline clear.

---

# Experience

## Sunrise Bakery

### `Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present`

Change:

- Keep this role only if it is current, demonstrates leadership, or explains your employment history. For a quant-focused resume, it is less relevant than your research work and should be visually subordinate.
- If you are applying to general management, operations, or analytics roles, it becomes more useful. If you are applying only to quant research positions, consider shortening the section rather than giving it the same visual weight as Northpeak Capital.
- Verify that the dates do not create an unexplained overlap with another position or academic commitment.

### `Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.`

Change:

- Use consistent American or British spelling. You use “labour” here, while the rest of the resume uses American conventions such as “programming” and “model.” Choose one style.
- Clarify the scale of the budget if it is meaningful. “Within budget” is positive but does not show the size or difficulty of the responsibility.
- Consider whether “opening shifts” is important to the target employer. It is useful for operations roles but less relevant for quantitative research.
- Keep the team size because it provides concrete evidence of management responsibility.

### `Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.`

Change:

- Clarify the measurement period and whether the reduction was sustained. A short-term improvement can otherwise sound less robust.
- Explain how “unsold bread” was calculated if the metric is not self-evident.
- Keep the metric; it is the strongest bullet in this role because it shows operational analysis and a measurable result.
- Consider whether this belongs on a quant resume if space is limited. It is useful mainly as evidence of process improvement and data-informed decision-making.

---

## Northpeak Capital

### `Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025`

Change:

- This should be one of the most prominent sections on the resume.
- If the internship was on a specific desk or asset class, include that context if it does not create confidentiality concerns.
- Make sure all performance claims are approved for external use. Sharpe ratios, trading signals, and desk results can be sensitive even when anonymized.
- Consider placing this role before the bakery role, regardless of chronology, if your resume format allows a “selected relevant experience” section.

### `Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.`

Change:

- Clarify whether the Sharpe increase is attributable solely to your signal or to adding the signal to an existing portfolio. The current wording could imply that you caused the entire portfolio improvement.
- State or make clear the annualization convention, risk-free-rate assumption, and whether the Sharpe estimate is net of all specified costs. These details matter because the numerical improvement is substantial.
- Identify the validation design more clearly: rolling, expanding, walk-forward, or another scheme. “Out-of-sample” alone is not enough for a quant reviewer.
- Make sure the 18-month period does not overlap with training or parameter-selection data.
- Retain the result if it is defensible, but expect interviewers to ask for turnover, drawdown, capacity, statistical significance, and stability by market regime.

### `Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.`

Change:

- Clarify whether the 90% retention refers to gross returns, net returns, alpha, or another measure. “Keeping 90% of gross returns” can be interpreted ambiguously.
- Specify whether turnover is one-way or two-way and how it is measured.
- Explain whether the slippage reduction is estimated from a model or observed in execution data. The distinction affects credibility.
- Make sure the three percentages use compatible baselines and periods.
- This is a strong bullet, but it may be too dense. Keep the metrics, while reducing any ambiguity around the denominators.

### `Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.`

Change:

- Define or clarify what “forecast gain” means: lower QLIKE, lower MSE, improved directional accuracy, or another measure.
- Clarify how you handled multiple comparisons across 30 indices. Running a test for each index without adjustment can produce overstated significance.
- State whether the Diebold–Mariano test used a small-sample correction and an appropriate loss-differential variance estimator, especially if forecasts overlap.
- “Nested” models require care because the standard Diebold–Mariano test can be inappropriate or biased in some nested-model settings. Verify that your test procedure is methodologically suitable.
- Keep this bullet only if you can explain the testing choices confidently. Otherwise, it may invite more technical scrutiny than it helps.

### `Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.`

Change:

- Fix the grammatical construction. The opening participle does not connect cleanly to the subject and makes the sentence difficult to parse.
- Clarify whether the feature store was implemented by you individually or by a team you contributed to.
- Explain what “point-in-time” means in this context: preventing look-ahead, aligning event timestamps, or preserving historical feature availability.
- Quantify the engineering impact if possible, such as reduced preparation time, improved reproducibility, or reduced data failures.
- Keep the reuse by two later projects; it demonstrates lasting impact.
- This is one of your most valuable bullets for quant roles, but it currently reads as technically dense and grammatically awkward.

### `Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.`

**Remove this bullet.**

- This calculation is incorrect. A Sharpe ratio based on daily returns is generally annualized by multiplying by the square root of 252, not by 252.
- Multiplying by 252 substantially overstates the ratio and undermines confidence in the rest of the performance analysis.
- If this was an intentional error inserted for review, it should not appear on the resume. If it actually happened, correct the underlying analysis and all dependent performance claims before presenting the work.
- Also check the other project metrics for similar annualization, aggregation, or percentage-change errors.

### `Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.`

Change:

- Keep this if documentation and research reproducibility are valued by the target employer.
- Clarify whether the next cohort’s use was formally measured or simply observed. The current claim is plausible, but it may be difficult to verify.
- Mention the most important documentation topics only if space permits; the bullet currently lists several items without showing the practical outcome beyond onboarding.
- This is a useful supporting bullet, but it should come after the research, validation, and feature-engineering bullets.

---

## Ridgeway University Research Assistant

### `Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021`

Change:

- Keep this role prominent; it supports both statistical research and engineering ability.
- Consider adding the faculty member, lab website, or research area if it is recognizable and relevant.
- The title is clear, although the lab’s focus could be more informative than the generic role title.

### `Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.`

Change:

- Keep this bullet. It is concrete, technically relevant, and well quantified.
- Clarify what caused the speed improvement if you want to emphasize engineering depth: parallelization, vectorization, job scheduling, or another change.
- “Every run reproducible” is a strong claim; ensure that software versions, random-number behavior, data inputs, and configuration files were actually controlled sufficiently to support it.
- Consider stating whether the pipeline was used by others or only for one study. Reuse would strengthen the impact.

### `Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.`

Change:

- This is potentially your strongest academic bullet, but it needs precision.
- Clarify whether “by a log factor” means the new bound improves the previous result by a multiplicative logarithmic term or removes a logarithmic factor. Those are materially different claims.
- Avoid implying acceptance or publication. “Under review” is appropriate, but include the paper title, coauthors, preprint, or DOI link elsewhere if available.
- Confirm that the paper is actually under review at JASA and that naming the journal is permitted and accurate.
- Consider adding the estimator or theoretical setting if the target audience would benefit; as written, the claim may be too abstract for nonacademic recruiters but compelling to technical reviewers.

### `Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.`

Change:

- Keep this only if teaching, communication, or academic roles are relevant.
- Clarify whether the rating was based on all students or a subset of respondents; numerical evaluations can be misleading without response context.
- “Writing 12 problem sets” is useful but secondary. If space is limited, prioritize the enrollment, course level, and teaching outcome.
- This bullet supports communication skills but does not directly strengthen a quant-research application as much as your research and engineering bullets.

### `Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.`

Change:

- Split this content into separate bullets or remove the less relevant responsibilities. It currently combines software release, systems administration, event organization, and grading.
- Fix the ambiguous pronoun: “which was downloaded” could refer to the cluster, reading group, courses, or package. The package should be the unmistakable subject of the download statistic.
- Add a link to the package and identify its repository or package index.
- Clarify whether the 3,000 downloads were total downloads, unique installations, or another metric. Download counts vary substantially in meaning.
- Keep the package development as a separate technical achievement. Consider removing or compressing the cluster maintenance, reading group, and grading details unless they are important for the specific role.
- Verify that the package is still accessible, documented, tested, and installable.

---

# Projects

## Volatility Forecasting Study

### `Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present`

Change:

- This project overlaps heavily with the Northpeak internship. Explain the distinction clearly or reduce one of the sections.
- If the project generated a paper, preprint, presentation, or public repository, add the relevant link.
- Clarify whether the study uses the same data, features, baseline, or model family as the internship work. Otherwise, reviewers may wonder whether the two sections describe the same project twice.
- “Present” should be updated if the project is no longer active.
- Include the data source and evaluation design if space allows, especially because financial forecasting results are highly sensitive to leakage and validation choices.

### `Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.`

Change:

- Clarify whether “7%” is an average across indices, a median, or a pooled result.
- State whether the comparison is statistically significant or whether the result is simply a point estimate.
- Explain the out-of-sample split or rolling evaluation design. This is essential for a time-series claim.
- Specify whether the HAR-RV baseline was tuned under the same information constraints and evaluated over the same period.
- Avoid repeating the same baseline and 30-index result in multiple bullets unless each bullet demonstrates a genuinely different contribution.

### `Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.`

Change:

- Define “forecast error.” It could mean QLIKE, RMSE, MAE, or another metric, and the interpretation changes significantly.
- Check the arithmetic and wording. A reduction from 0.20 to 0.15 is a 25% reduction relative to 0.20, not a 33% improvement under the usual baseline-relative calculation. It is a 33.3% reduction relative to 0.15, which is not the standard way to report improvement.
- Do not present both this bullet and the previous QLIKE bullet unless they refer to different metrics and evaluation settings. If they do, make that distinction explicit.
- Separate the effects of adding features and changing the loss function if you want to claim that both contributed. Otherwise, the bullet implies attribution that may not have been established through ablation studies.
- This is the most important numerical correction on the project section after the Sharpe issue.

### `Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.`

Change:

- Correct the percentage terminology. Moving from 52% to 58% is a 6-percentage-point increase, approximately an 11.5% relative increase.
- Define whether the 52% and 58% figures are pooled, averaged across indices, or calculated another way.
- Explain whether the directional target is economically meaningful and whether transaction costs or class imbalance affect the interpretation.
- This repeats the temporal convolutional model and the 30-index evaluation from the earlier bullets. Consider retaining only one of the overlapping model-performance claims.
- If the hit rate improvement is not statistically or economically significant, avoid giving it equal prominence with the QLIKE result.

---

## Kaggle Market Prediction Competition

### `Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023`

Change:

- Include the competition’s exact name if it is publicly recognizable.
- Add a link to your competition profile or solution write-up if available.
- “Team of 3” is useful, but explain your individual contribution through the bullets rather than leaving the team structure as the only context.
- If the competition was not financial or time-series related, make sure it does not receive too much space relative to more relevant work.

### `Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.`

Change:

- Verify the percentile. Rank 41 out of 2,900 is approximately the top 1.4%, so “top 2%” is broadly true but less precise.
- Clarify whether the result was your team’s final private-leaderboard ranking and whether the competition had a separate public leaderboard.
- State your specific contribution if the ensemble was a team effort.
- Keep this bullet; the ranking is strong and easy to understand.

### `Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.`

Change:

- Be precise about what changed. You do not normally “cut leakage” as a directly measured quantity; you reduced a validation design problem by changing the folds.
- Explain whether the 0.02 gap was in the competition metric and whether the gap narrowed on one split or consistently across repeated evaluations.
- Clarify that the time-grouped folds were designed to mirror the competition’s temporal structure. This makes the methodological point stronger.
- Keep the bullet because it demonstrates good validation judgment, but avoid implying that the leaderboard gap alone proves leakage was eliminated.

### `Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.`

Change:

- Clarify whether the feature-selection procedure was performed within each training fold. If permutation importance was calculated using all data before validation, it could itself introduce leakage.
- State whether the validation score was unchanged within a tolerance or exactly unchanged; exact equality may sound implausible.
- Identify your individual contribution, since this was a team project.
- Keep this bullet if the feature-selection process was methodologically sound and reproducible.

---

# Skills

### `Programming: Python, R, PyTorch, Kafka`

Change:

- Separate programming languages, machine-learning frameworks, and infrastructure/tools. They are different kinds of skills and should not appear as if they have equivalent status.
- Add specific technologies only if you can discuss them in an interview and have used them materially.
- Consider including SQL, Git, Linux, cloud tools, numerical libraries, or distributed-computing tools if you used them in the listed work. Do not add them merely because they are common job-description keywords.
- Kafka is notable, but your experience bullets do not currently show how you used it. Either connect it to an experience or remove it.
- PyTorch is a framework rather than a programming language; classify it accordingly.

### `Methods: time-series econometircs, high-dimensional statistics, gradient boosting`

Change:

- Correct the spelling of “econometrics.”
- Use consistent capitalization and terminology across the skills section.
- “Gradient boosting” is a model family, while the other entries are broader methodological areas. Consider organizing methods by category so the distinctions are clear.
- Add methods that are directly demonstrated in the resume, such as volatility forecasting, time-series validation, Monte Carlo simulation, sparse regression, covariance estimation, microstructure modeling, or statistical testing.
- Do not list methods that you have only encountered briefly. The current experience supports a more specific and credible methods section.

---

# Priority changes

Make these changes first:

1. **Remove the incorrect Sharpe-ratio annualization bullet and audit every performance calculation.**
2. **Correct the 0.20-to-0.15 percentage claim.**
3. **Correct “6%” to a percentage-point description for the hit-rate change.**
4. **Fix the grammar and ambiguity in the feature-store bullet.**
5. **Clarify or split the overloaded R-package and lab-responsibilities bullet.**
6. **Remove redundancy between the Northpeak internship and volatility project.**
7. **Add validation details and multiple-testing context to the forecasting claims.**
8. **Add links for the R package, paper or preprint, project repository, and competition profile.**
9. **Correct “econometircs” and reorganize the skills categories.**
10. **Make the bakery role visually secondary if the target is quantitative research.**

Your underlying material is strong—particularly the simulation pipeline, theoretical result, feature-store work, and competition ranking—but the resume needs tighter technical accuracy and clearer separation between independently measured results, team outcomes, and claims that require additional statistical qualification.