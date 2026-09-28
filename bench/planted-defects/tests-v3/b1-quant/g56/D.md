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