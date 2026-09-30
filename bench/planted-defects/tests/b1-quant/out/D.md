# Resume Review

**Target role inferred from the resume:** Quantitative Researcher / Quantitative Analyst, likely in systematic trading, market microstructure, or quantitative finance.

Because there is no job description, I cannot assess exact ATS keyword coverage or company-specific fit. I’m evaluating the resume against a typical quantitative-research role.

## Overall assessment

You have a strong technical foundation and several unusually good quantitative results:

- 0.4 Sharpe improvement after costs
- 34% to 21% turnover reduction
- 7% QLIKE improvement across 30 indices
- Top 2% competition result
- Reproducible research infrastructure
- Statistical theory and machine-learning research

The main problems are **credibility errors, unclear prioritization, missing context, and a few statements that could cause a technical reviewer to distrust the entire resume**. Fix those before making stylistic improvements.

---

## Highest-priority changes

### 1. Correct or remove the Sharpe-ratio bullet

**What to change:** The bullet stating that you annualized daily Sharpe by multiplying by 252.

**Why:** This is mathematically incorrect. Daily Sharpe is generally annualized using the square root of the number of periods, not the number itself. A quant reviewer will notice immediately. Worse, the bullet currently reads like an intentional methodological error rather than an accidental typo.

**Priority:** Critical. Correct the calculation and verify every reported Sharpe figure derived from it.

---

### 2. Correct the volatility-forecasting percentage

**What to change:** The bullet stating that reducing forecast error from 0.20 to 0.15 was a 33% improvement.

**Why:** That is a 0.05 reduction from a 0.20 baseline, which corresponds to a 25% reduction. The stated 33% figure does not follow from the numbers shown. A reviewer may interpret this as metric inflation.

Also clarify whether this result is distinct from the 7% QLIKE improvement. At present, the project appears to report several metrics without explaining how they relate.

**Priority:** Critical. Recalculate the percentage and make sure the metric, baseline, and evaluation period are internally consistent.

---

### 3. Fix the “Joining 120 microstructure features” bullet

**What to change:** The opening wording and the sentence structure of this bullet.

**Why:** The current construction is grammatically incorrect or incomplete. It also combines several substantial activities:

- point-in-time feature joining
- late-print deduplication
- schema versioning
- feature-store construction
- adoption in two later projects

Those are valuable accomplishments, but the current sentence makes them difficult to parse and obscures what you personally built.

**Why:** This is one of your strongest evidence points for production-quality quantitative research, but its current wording makes it look careless.

**Priority:** High.

---

### 4. Reconsider the current bakery role’s placement and explanation

**What to change:** The way the Sunrise Bakery role is presented, not necessarily the role itself.

**Why:** A quantitative-research recruiter will see a current assistant-store-manager role above a highly relevant quant internship and may immediately wonder:

- Is the Ph.D. still active?
- Is the candidate pursuing quant research full time?
- Why is the current role outside finance or research?
- Is there a gap, financial necessity, or career change?

The role demonstrates management, operations, budgeting, and inventory control, but those skills are not central to quant hiring. Its presence is not automatically negative; the issue is that the resume currently provides no context.

**What to change:** Make the chronology and current academic status unambiguous. Consider whether the role needs all of its current space. Keep the most transferable evidence—team management, budgeting, operational measurement—but avoid allowing it to dominate the top of the experience section.

**Priority:** High.

---

### 5. Add a concise professional summary

**What to change:** Add a short summary immediately below your contact information.

**Why:** The resume currently forces the reader to infer your target identity from several sections. A recruiter has to reconcile:

- Ph.D. candidate in Statistics
- quantitative-research internship
- independent volatility research
- bakery management
- theoretical statistics research

Your strongest positioning is not obvious in the first ten seconds. The summary should establish that you are a statistics Ph.D. candidate focused on quantitative research, time-series modeling, market microstructure, and empirical validation.

**Why:** This would resolve the largest narrative problem without changing your underlying experience.

**Priority:** High.

---

## Section-by-section review

## Header and contact information

### What to change

- Label the code link clearly as a professional repository or portfolio.
- Confirm that the linked material is polished, accessible, and consistent with the resume.
- Consider adding a professional networking profile if you have one.
- Add a location only if it helps with hiring logistics; otherwise the current city information in the experience and education sections is sufficient.

### Why

The code link is valuable for a quantitative candidate, but `example.com/code/mpatel` does not immediately tell a recruiter whether it contains research code, competition work, packages, or general programming projects. The link should make the intended evidence obvious.

Also, make sure every public repository is free of:

- unfinished notebooks
- hard-coded credentials
- inconsistent results
- undocumented backtests
- code that contradicts the resume’s reported numbers

---

## Education

### Ph.D. candidate in Statistics

### What to change

- Add a dissertation or research-area descriptor if it is relevant to quantitative research.
- Clarify whether you are enrolled full time and whether the expected completion date is firm.
- Consider adding selected coursework only if it includes highly relevant subjects not demonstrated elsewhere.
- Make the relationship between your statistical-learning research and your finance work easier to see.

### Why

The Ph.D. is your strongest credential, but “Statistics” alone does not tell a quant recruiter whether your work is theoretical statistics, machine learning, econometrics, time series, or something else. Your experience suggests a useful combination of statistical theory, simulation, forecasting, and financial modeling, but the education section does not help connect those areas.

### Timeline issue

Your education and experience timeline needs clarification:

- B.S. ends in May 2020.
- Graduate Research Assistant role begins in June 2020.
- Ph.D. begins in September 2021.

This may be perfectly reasonable, but the resume currently leaves the transition unexplained. Make sure the reader can tell whether the research-assistant role was a predoctoral research position, a university staff role, or part of an earlier graduate program.

---

## Experience

## Sunrise Bakery

### First bullet: team and labour budget

### What to change

- Retain the management and budget evidence, but make its relevance to the target role less prominent than your quantitative work.
- Ensure “labour” follows the spelling convention used throughout the rest of the resume and your target market.
- Clarify whether you owned the budget, monitored it, or merely operated within it.

### Why

This is credible evidence of responsibility, but “keeping the store within its weekly labour budget” is less distinctive than your research results. A quant recruiter will value it mainly as evidence of reliability, operational discipline, and people management.

### Second bullet: unsold bread

### What to change

- Keep the quantified inventory result.
- Specify the measurement period or comparison period if available.
- Make clear whether the reduction came from forecasting, ordering changes, production changes, or supplier coordination.

### Why

The 12% to 7% result is useful because it shows operational measurement and optimization. Without the mechanism, however, it reads as a generic store-management result rather than evidence of analytical decision-making.

---

## Northpeak Capital

This is the most important section of the resume and should receive the greatest visual and narrative emphasis.

### Order-book imbalance signal

### What to change

- Verify the definition of “added 0.4 Sharpe to the desk’s book.”
- Clarify whether this was an incremental Sharpe contribution, a standalone strategy Sharpe, or a change in portfolio-level Sharpe.
- State clearly that the result was out of sample and after costs, as you already do.
- Confirm that the 18-month period was not used in model selection or parameter tuning.

### Why

This is potentially your strongest finance accomplishment. It is also the kind of claim a technical interviewer will interrogate. “Added 0.4 Sharpe to the desk’s book” can mean several different things, and the distinction matters.

The bullet should be retained only if you can defend:

- the portfolio construction method
- the benchmark
- the transaction-cost assumptions
- the statistical significance
- the turnover treatment
- the degree of your personal ownership

### Turnover and position smoother

### What to change

- Explain what “keeping 90% of gross returns” means relative to the unsmoothed signal.
- Ensure the one-third slippage reduction and the 34% to 21% turnover reduction are calculated on the same sample and definition.
- Clarify whether the result was simulated, paper-traded, or deployed.

### Why

This is a strong signal of practical quant judgment. It demonstrates that you considered trading costs rather than optimizing only predictive accuracy. However, the bullet contains several metrics, and the reader may not know which is the primary outcome.

### HAR-RV and Diebold–Mariano testing

### What to change

- Define the baseline clearly the first time it appears, unless your target audience is strictly technical.
- Explain what was tested: forecast accuracy, return forecasts, volatility forecasts, or another quantity.
- Add statistical interpretation only if you can support it, such as significance level or the direction of the test result.
- Ensure that “across the 30 indices” refers to 30 independent evaluation series and not merely repeated observations pooled together.

### Why

The use of Diebold–Mariano tests is a good differentiator. It shows more rigor than simply reporting a model improvement. But the current bullet gives the test name without enough context to establish what the test validates.

### Feature store

### What to change

- Fix the grammar.
- Clarify the technical stack if relevant: storage layer, orchestration, data format, or versioning system.
- Distinguish what you designed from what you merely used.
- Retain the adoption evidence that the team reused it in two later projects.

### Why

This bullet bridges research and production engineering, which is highly valuable for quant roles. It should be easier to find and understand.

### Annualized Sharpe bullet

As noted above, correct or remove it. Do not leave it in its current form.

### Documentation bullet

### What to change

- Keep the bullet, but specify whether the documentation was used by the research team, reviewed by senior researchers, or incorporated into the desk’s standard process.
- Consider whether “future interns” understates the audience and importance of the work.

### Why

Documentation is useful evidence of research maturity, but the current wording makes it sound like an administrative task. The important point is reproducibility, risk disclosure, and transfer of research knowledge.

---

## Ridgeway University research role

### Simulation pipeline

### What to change

- Keep this near the top of the role because it demonstrates engineering and computational efficiency.
- Identify the cluster environment or relevant tools if they are material to the target role.
- Explain what changed technically to reduce runtime from three days to five hours.
- State whether the pipeline was adopted by other lab members.

### Why

This is an excellent quantitative-research bullet. The 2,000-run scale and runtime reduction are concrete, and reproducibility by seed is directly relevant to reliable research.

### Variance bound and JASA paper

### What to change

- Keep the theoretical result.
- Make the publication status unmistakably clear.
- Add authorship position if it is favorable and accurate.
- Include the paper in a separate Publications or Research Output section rather than leaving it only inside a job bullet.
- Verify whether “my proof” accurately describes your contribution relative to coauthors.

### Why

A JASA submission can be a major credibility signal, but the current presentation buries it. A quant research hiring manager may care about rigorous statistical thinking, and this is your clearest evidence of that.

Do not imply acceptance or publication. “Under review” must remain explicit until the status changes.

### Teaching bullet

### What to change

- Keep it if the role values communication, mentoring, or leadership.
- Consider reducing its space relative to the more technically relevant bullets.
- Retain the 60 students and teaching rating because those are concrete.

### Why

This is credible but not central to most quant researcher applications. It is useful as supporting evidence, not as one of the main reasons to interview you.

### R package, cluster, reading group, and grading bullet

### What to change

- Separate the software contribution from the administrative and teaching responsibilities.
- Verify the 3,000-download figure and define whether it means total downloads, unique users, or package downloads.
- Add a repository or package name if it is publicly available.
- Do not let maintaining the cluster, organizing the reading group, and grading dilute the package achievement.

### Why

The open-source package is valuable evidence of software quality and external adoption. The current bullet hides it inside a long list of unrelated activities.

---

## Projects

## Volatility Forecasting Study

This is relevant, but it currently repeats itself.

### First bullet

### What to change

- Retain the 7% QLIKE result if it is correctly measured.
- State the evaluation design clearly: rolling or expanding window, train/test separation, and whether the results are truly out of sample.
- Clarify whether the 30 indices overlap with the Northpeak work or represent an independent study.

### Why

This is your strongest independent project for demonstrating direct financial modeling experience. The methodological evaluation matters more than simply naming PyTorch.

### Second bullet

### What to change

- Correct the percentage calculation.
- Explain how “forecast error” was defined.
- Determine whether this metric adds information beyond QLIKE.
- Remove it if it is merely a restatement of the first bullet using another presentation of the same result.

### Why

Three bullets currently make the project look repetitive. A technical reader may wonder whether the reported improvements are separate experiments or different summaries of one experiment.

### Third bullet

### What to change

- Clarify how directional hit rate relates to volatility forecasting.
- Explain what “directional” means in this context.
- Confirm that this is not a target mismatch: predicting volatility magnitude and predicting direction are not necessarily the same task.
- Consider whether this result belongs in the project if it was not part of the original model objective.

### Why

The 52% to 58% improvement sounds attractive, but a reviewer may question whether directional hit rate is an appropriate evaluation criterion for a volatility model. It could create more skepticism than value unless the connection is clear.

### Overall project changes

- Reduce repetition among the three bullets.
- Make the evaluation methodology more prominent.
- Include data provenance and leakage controls if the project is public.
- Link to code or a report.
- Clarify whether the model was developed independently or adapted from published work.

---

## Kaggle competition

### Placement result

### What to change

- Keep this result.
- State whether 41st of 2,900 teams was on the private leaderboard, since you already mention that.
- Clarify your individual contribution within the team of three.

### Why

Top 2% is a strong external validation signal, but team competitions require attribution. A recruiter will want to know what you personally designed or implemented.

### Leakage-control bullet

### What to change

- Keep it.
- Explain whether the time-grouped folds were your idea and implementation.
- Make sure the reported 0.02 gap is defined clearly.
- Highlight this as evidence of validation discipline, not merely a score-improvement trick.

### Why

This is one of the better bullets in the project because it shows that you understand temporal leakage, a frequent failure mode in financial machine learning.

### Feature-selection bullet

### What to change

- Clarify why there were 900 candidate features but 300 engineered features in the earlier bullet.
- Explain whether permutation importance was computed within each training fold to avoid leakage.
- State whether the script was used by the whole team or only for your own experiments.

### Why

The technical idea is relevant, but the relationship between the feature counts is unclear. A quant reviewer will be alert to selection leakage and will want to know whether feature selection used information from validation or leaderboard data.

---

## Skills

### What to change

- Correct the spelling of “econometrics.”
- Use technically standard category names.
- Remove or de-emphasize tools that are not supported elsewhere in the resume unless you can demonstrate meaningful proficiency.
- Add the specific quantitative tools that are genuinely central to your work, such as time-series forecasting, market microstructure, volatility modeling, backtesting, statistical testing, or data engineering—provided you can defend each one.
- Consider listing relevant libraries separately from programming languages.
- Indicate proficiency only if the format remains clean and defensible.

### Why

The skills section currently includes:

- Python
- R
- SQL
- C++
- Kafka
- time-series econometrics
- Bayesian inference
- gradient boosting
- PyTorch

But the experience section gives no evidence for some of these, especially Kafka and C++. Conversely, your resume demonstrates several skills that are not named explicitly, including:

- market microstructure
- order-book modeling
- volatility forecasting
- transaction-cost modeling
- feature stores
- point-in-time data handling
- Monte Carlo simulation
- reproducible research
- statistical forecast comparison

That mismatch weakens ATS coverage and makes the skills section look less curated.

### Important concern

Do not add every technology you have touched. For a quant role, unsupported tools can invite questions and make the resume appear keyword-oriented rather than experience-oriented.

---

## Narrative and positioning

### What the resume currently communicates

The document appears to tell four different stories:

1. A statistics Ph.D. candidate doing theoretical and machine-learning research.
2. A quantitative researcher with direct trading and market-microstructure experience.
3. A machine-learning practitioner focused on volatility forecasting.
4. An operations manager in retail.

All four are true, but the target-role story is not sufficiently dominant.

### What to change

Make the following progression visually and substantively clear:

1. Statistical and computational foundation.
2. Applied quantitative research.
3. Financial modeling and empirical validation.
4. Production-quality data and research infrastructure.
5. Leadership and communication as supporting evidence.

### Why

The strongest differentiator is the combination of:

- rigorous statistics
- financial time-series research
- market microstructure
- research engineering
- reproducibility

That combination is more compelling than presenting yourself as a generic machine-learning candidate.

---

## Missing or underdeveloped sections

### Publications or research output

**What to change:** Add a compact Publications, Working Papers, or Research Output section.

**Why:** You mention a JASA paper under review but do not give the reader a formal publication entry. For a statistics Ph.D. candidate, this omission is significant.

Include only accurate statuses:

- published
- accepted
- under review
- working paper
- manuscript in preparation

Do not imply that the JASA paper has been accepted.

### Research interests

**What to change:** Consider a short research-interest line if applying to research-heavy roles.

**Why:** It would help connect your theoretical statistics work, market microstructure, and volatility forecasting. Avoid making this a long list of keywords.

### Academic status

**What to change:** Make your current Ph.D. status and availability unmistakable.

**Why:** The current bakery role makes this particularly important. Recruiters should not have to infer whether you are seeking internships, full-time work after graduation, or part-time research employment.

---

## Technical credibility audit

Before submitting, verify these claims carefully:

| Claim | Main concern |
|---|---|
| 0.4 Sharpe added to the desk’s book | Attribution and portfolio-level definition |
| 18 months out of sample | Whether model selection contaminated the period |
| 90% of gross returns retained | Definition of gross returns and comparison baseline |
| Slippage reduced by one third | Cost model and sample consistency |
| 30 indices | Whether results are independent and correctly aggregated |
| 2,000 runs reduced from three days to five hours | Reproducibility and actual cause of speedup |
| JASA paper under review | Accurate status and authorship |
| 3,000 package downloads | Definition and source of download count |
| 7% QLIKE improvement | Evaluation design and baseline |
| 33% forecast-error improvement | Arithmetic inconsistency |
| 6 percentage-point hit-rate increase | Relevance to volatility forecasting |
| 41st of 2,900 teams | Individual contribution and private leaderboard details |

A technical reviewer will likely ask about several of these. The resume should contain only numbers you can reproduce from code, logs, papers, or documented analyses.

---

## Suggested priority order

### Tier 1: Do these first

1. Correct the Sharpe annualization error.
2. Correct the 33% forecast-error calculation.
3. Fix the malformed feature-store bullet.
4. Clarify the Ph.D., research-assistant, and bakery timeline.
5. Add a targeted summary.
6. Add the JASA paper to a formal research-output section.
7. Verify and clarify the 0.4 Sharpe claim.
8. Resolve the relationship among the three volatility-project results.

### Tier 2: Do next

1. Reorder or shorten the bakery section so quant experience leads the narrative.
2. Separate the R package achievement from administrative duties.
3. Clarify personal contributions to the Kaggle project.
4. Strengthen the skills taxonomy and correct “econometrics.”
5. Add demonstrated quantitative-finance skills that are currently absent from the skills section.
6. Add data-split, leakage-control, and backtesting details where relevant.
7. Make the code portfolio easier to interpret.

### Tier 3: Polish after the above

1. Improve line wrapping and prevent bullets from breaking awkwardly.
2. Standardize punctuation and capitalization.
3. Standardize spelling conventions, including “labour/labor.”
4. Reduce repeated use of “cut,” “improved,” and similar verbs.
5. Ensure each bullet contains one primary accomplishment rather than several loosely connected tasks.

---

## Likely hiring outcomes

| Reader | Likely reaction |
|---|---|
| Recruiter | Interested if the summary makes the quant target explicit; otherwise uncertain because of the bakery role |
| HR screen | Likely positive once Ph.D. status and availability are clarified |
| Quant hiring manager | Strong interest in the Northpeak work, volatility study, and simulation pipeline |
| Technical interviewer | Likely to probe the Sharpe calculation, forecast-error arithmetic, leakage controls, and metric definitions |
| Research-oriented reviewer | Positive about the statistical theory and JASA submission, but may want formal publication details |

## Bottom line

Your resume has the substance for a strong quantitative-research application. The biggest risk is not lack of achievement; it is that **a few technical inconsistencies undermine trust in otherwise impressive results**.

Fix the two mathematical inconsistencies first, clarify ownership and evaluation methodology, make the Ph.D.-to-quant narrative explicit, and give the research output more formal prominence. Do not add more technologies or more bullets until the existing claims are internally precise and easy to verify.