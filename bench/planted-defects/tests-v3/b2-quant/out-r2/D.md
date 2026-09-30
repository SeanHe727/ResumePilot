# Resume review

## Overall assessment

Your resume has strong quantitative substance for quantitative research, systematic trading, or quantitative developer/research roles. The best evidence is the combination of:

- Time-series and statistical-learning research
- Careful backtesting methodology
- Point-in-time data handling
- Feature-store/platform work
- Live-allocation approval
- Open-source and teaching experience

However, the resume currently has **three serious problems**:

1. **A credibility issue caused by model-selection leakage.**
2. **A likely inconsistency or duplication between the Northpeak and Kaggle entries.**
3. **Several bullets are technically impressive but poorly prioritized or insufficiently contextualized for a recruiter.**

The technical reviewer may notice the first two and reject the application despite the strength of the rest.

---

# Highest-priority changes

## 1. Remove or substantially correct the “expected live Sharpe” claim

### Line
> “Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.”

### What to change
Do not present the best in-sample or post-selection Sharpe as an expected live Sharpe. Either:

- Remove this bullet entirely; or
- Reframe the result around the model-selection problem, validation design, degradation analysis, or a genuinely untouched test period.

### Why
This is the most damaging line in the resume. Selecting the best configuration from 400 alternatives and then treating its Sharpe as the expected live Sharpe is classic selection bias. A quant researcher or portfolio manager will immediately question whether the rest of the backtest is trustworthy.

This bullet also directly conflicts with the otherwise careful claims about purged walk-forward validation and point-in-time methodology. It makes the resume look as if it understands leakage only when discussing other parts of the process.

---

## 2. Resolve the apparent duplication between Northpeak and Kaggle

### Lines
Northpeak:
> “Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.”

Kaggle:
> “Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.”

### What to change
Clarify whether these describe:

- The same work;
- Two separate projects using the same methodology;
- A personal project based on publicly available data;
- Or a project completed during the internship and incorrectly repeated under Kaggle.

If they are the same achievement, keep it in only one place. If they are separate, make the distinction unmistakable through the project scope, dataset, ownership, and evaluation setup.

### Why
As written, a reviewer may conclude that you are counting one result twice or moving professional work into a personal competition entry. The matching details—order-book imbalance, futures, 18 months, and a 0.4 Sharpe increase—make the overlap especially conspicuous.

This is a credibility problem, not merely an organization problem.

---

## 3. Correct the technical wording around the Monte Carlo random seeds

### Line
> “Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.”

### What to change
Verify the simulation design. If every worker literally used the same seed, change the underlying implementation and describe the reproducibility mechanism accurately. Parallel Monte Carlo runs generally need independent random streams or independently assigned seeds, not identical seeds across workers.

### Why
Using the same seed on every worker can produce duplicated or correlated simulations, undermining the validity of the Monte Carlo results. A technical reviewer will notice this immediately.

The speedup is valuable, but the current explanation makes the statistical methodology look suspect. Preserve the performance result only if the simulation outputs remained statistically valid.

---

## 4. Reorder the Northpeak bullets

### What to change
Put the strongest and most decision-relevant material first:

1. The signal or research result, if verified and nonduplicative;
2. The validation and transaction-cost methodology;
3. The feature-store or research-infrastructure contribution;
4. The presentation and live-allocation outcome;
5. Any remaining implementation detail.

Remove the parameter-selection bullet unless corrected as described above.

### Why
The current order delays the strongest evidence and places a problematic methodology claim near the end. Hiring managers often read only the first two bullets under an experience entry.

The bullets should establish, in order:

- What you built;
- How rigorously you tested it;
- Whether anyone trusted or used it;
- What infrastructure or process improvement resulted.

---

# Section-by-section and line-by-line review

## Header

### Contact details

### What to change
- Make the code link a complete, clickable URL.
- Replace the placeholder domain if it is not merely anonymized for this review.
- Consider adding a LinkedIn profile only if it is complete and consistent with the resume.
- Add a location or “open to” indication if relevant to the roles you are targeting.

### Why
A recruiter should be able to verify your work without guessing whether `example.com/code/mpatel` is a real portfolio, repository, or personal site. For quant roles, an accessible code or research profile can be a meaningful credibility signal.

---

## Education

### Ph.D. candidate entry

### What to change
- Add your research area, dissertation topic, advisor, or relevant specialization if it is strong and directly related to quant research.
- Include expected completion only if the date is reliable.
- Consider adding relevant graduate coursework only if it fills an obvious gap, such as financial econometrics, stochastic processes, optimization, or machine learning.
- Make clear whether the Ph.D. is in progress and whether you are available for full-time employment before May 2026.

### Why
“Ph.D. candidate in Statistics” establishes strong mathematical credibility but does not immediately tell a recruiter whether your work is relevant to markets, forecasting, statistical learning, or computational research.

### B.S. entry

### What to change
- Keep it, but give it less visual weight than the Ph.D.
- Add honors, awards, or a particularly relevant concentration only if they are meaningful.

### Why
The undergraduate degree is no longer a major differentiator given your doctoral work. Space should favor research, publications, and technical accomplishments.

---

# Experience

## Sunrise Bakery — Assistant Store Manager

### First bullet

> “Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.”

### What to change
- Decide whether this role belongs on the quant resume.
- If retained, make sure it clearly explains the time period and avoids competing visually with your technical experience.
- Keep the team-size and budget-management facts, but do not let this role take more space than necessary.

### Why
This role demonstrates management, operational discipline, and responsibility, but it is not directly relevant to quantitative research. Its presence may cause a recruiter to wonder whether you have been continuously engaged in quantitative work since the internship.

It is more defensible because it is current and shows employment during your Ph.D., but it should be subordinate to your research experience. If you need space, this is the first experience entry to shorten.

### Second bullet

> “Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.”

### What to change
- Keep it only if you retain the bakery role.
- Verify that the percentages are calculated consistently and that you can explain the measurement period and causal contribution.
- Consider whether this operational metric is useful for the specific role you are pursuing.

### Why
The metric is concrete, but it does not help establish quant-research capability. It may be useful as evidence of optimization and inventory control for a general analytics role, but it is low priority for a trading or research application.

---

## Northpeak Capital — Quantitative Research Intern

### First bullet

> “Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.”

### What to change
- Specify what “risk-adjusted returns” means.
- Clarify the evaluation period, baseline, and whether the improvement was out of sample.
- Explain what the smoother changed operationally: turnover, transaction costs, drawdown, capacity, or Sharpe.
- Verify that the result is not the same as the Sharpe improvement claimed later.
- Avoid leaving “position smoother” unexplained.

### Why
“Risk-adjusted returns” is too broad for a quantitative audience. A technical reviewer needs to know whether the 35% refers to Sharpe, information ratio, return per unit of volatility, or another measure.

The bullet also risks sounding like an unqualified performance claim unless the benchmark and testing procedure are clear.

### Second bullet

> “Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.”

### What to change
- Keep the validation methodology.
- State the role of transaction costs, market impact, and latency if they were included.
- Clarify whether the six years covered multiple market regimes.
- Check that the wording does not overclaim: purging and embargoing reduce leakage but do not guarantee that every modeling decision was free from look-ahead or selection bias.

### Why
This is one of the strongest bullets in the resume because it signals that you understand financial validation rather than merely training a model and reporting a backtest.

However, its credibility depends on consistency with the later claim about selecting the best of 400 configurations. You need to explain or remove anything that undermines this methodological story.

### Third bullet

> “Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.”

### What to change
- Keep this bullet.
- Add the implementation technologies if relevant and accurate.
- Clarify whether you designed the data model, ingestion process, validation checks, or only the joining logic.
- If possible, quantify reliability, time saved, or reduction in repeated data preparation.

### Why
This is valuable because it shows platform-level contribution rather than one-off analysis. “Point-in-time joins” is especially relevant to systematic research and should remain prominent.

The current statement establishes reuse but not the engineering difficulty or business impact.

### Fourth bullet

> “Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.”

### What to change
- Keep this bullet if the allocation was actually approved and launched.
- Clarify whether the allocation was approved, deployed, or merely scheduled.
- State whether you monitored live performance, risk, turnover, or post-deployment behavior.
- Avoid implying that approval proves the signal worked.

### Why
This is an excellent credibility signal. It shows that your research passed an investment decision process and that you could communicate uncertainty and failure modes.

The distinction between approval and actual deployment matters to a technical reviewer, so the status should be precise.

### Fifth bullet

> “Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.”

### What to change
Remove or fundamentally correct this claim, as discussed above.

### Why
This is the single largest technical red flag in the resume.

### Sixth bullet

> “Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.”

### What to change
- Resolve the duplication with the Kaggle project.
- Confirm that “out-of-sample” is technically accurate after all tuning and selection.
- State whether the result refers to an incremental signal, a standalone strategy, or the entire desk book.
- Clarify whether “after costs” includes realistic transaction costs and market impact.
- Retain the result only if the ownership and provenance are unambiguous.

### Why
This is potentially the strongest bullet in the resume, but it currently creates the largest consistency problem. The result is impressive enough that it must be presented with especially careful provenance.

---

## Ridgeway University — Research Assistant

### First bullet

> “Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.”

### What to change
Correct the randomization design and then update the description to reflect the actual method. If the same seed was intentional for a controlled experiment, explain why that was statistically appropriate; otherwise, do not retain that detail.

### Why
As written, the bullet may imply that the simulations were duplicated. The computational speedup is useful, but not if it casts doubt on the study’s validity.

### Second bullet

> “Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.”

### What to change
- Keep this, but move the paper itself into a publications or selected research section.
- Identify your authorship position.
- Distinguish clearly between “under review,” “submitted,” and “published.”
- Explain the result’s relevance to high-dimensional statistics or statistical learning.
- Avoid making the bullet sound as though journal acceptance has already occurred.

### Why
This is a strong research credential and one of the clearest signals that you are not only an applied modeler. However, the publication status must be transparent, and the achievement is currently buried in the experience section.

### Third bullet

> “Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.”

### What to change
- Keep it if the role values communication, teaching, or academic experience.
- Move it below the research and software contributions.
- Consider shortening or omitting it for a tightly targeted quant-research resume if space is limited.

### Why
The quantitative evidence is clear, but teaching is secondary for most industry quant roles. It should not compete with your research, backtesting, or software experience.

### Fourth bullet

> “Released an open-source R package for high-dimensional covariance estimation with shrinkage and factor models, downloaded 3,000 times in its first year.”

### What to change
- Keep this prominently.
- Add the package name and repository link if available.
- Clarify whether downloads refer to package downloads, repository clones, or another metric.
- Mention documentation, testing, or external contributors only if meaningful.

### Why
This is an unusually strong combination of statistical method, software delivery, and external adoption. It is one of the best differentiators in the resume and should not be hidden among ordinary research-assistant bullets.

---

# Projects

## Volatility Forecasting Study

### First bullet

> “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.”

### What to change
- Keep this as the lead project bullet.
- Clarify the forecast horizon.
- State how the train, validation, and test periods were separated.
- Explain whether hyperparameter selection occurred inside the training process.
- Identify whether the 30 indices were treated as separate series or jointly modeled.

### Why
This is a strong and relevant result for quantitative research. The HAR-RV baseline, QLIKE metric, realized-volatility features, and multi-index scope all signal domain understanding.

The missing details matter because financial forecasting results are highly sensitive to horizon, split design, and cross-sectional leakage.

### Second bullet

> “Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.”

### What to change
- Keep this bullet.
- Clarify how crisis periods were defined.
- Make sure the Diebold-Mariano test assumptions and dependence structure were handled appropriately.
- Distinguish statistical significance from economic significance.

### Why
This is excellent evidence of research rigor. The multiple-testing correction is particularly valuable. The crisis-period claim needs a definition so it does not look selected after observing the results.

### Third bullet

> “Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.”

### What to change
- Keep it, but move the working paper to a separate research or publications section if it is important.
- Include its status consistently with the JASA paper.
- Make the seminar presentation subordinate to the research result.

### Why
A working paper and seminar presentation demonstrate communication and research maturity, but the current placement makes them look like an afterthought.

---

## Kaggle Market Prediction Competition

### Project title

### What to change
Verify that the project title accurately describes the work. If the underlying work was not actually part of a Kaggle competition, rename the category or move the work to the correct experience section.

### Why
The title currently creates a provenance problem because the bullets sound like institutional trading research rather than competition work.

### First bullet

> “Engineered features and trained gradient-boosting models for a market prediction competition.”

### What to change
- Add the competition outcome, rank, team size, or dataset scale if meaningful.
- Keep this only if the competition itself is a useful credential.
- Avoid giving it space if the project has no result, ranking, or distinctive technical challenge.

### Why
As written, this is generic. It does not establish whether the project was successful or technically differentiated.

### Second bullet

> “Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.”

### What to change
- Keep the leakage diagnosis, but explain the exact temporal grouping and whether embargoing or purging was necessary.
- Verify that the leaderboard improvement was not caused by simply matching the leaderboard more closely.
- Include the competition result if available.

### Why
This is a useful methodological bullet, but “closed the gap” alone is not a success metric. A reviewer will want to know whether the resulting validation procedure improved generalization or merely changed the estimate.

### Third bullet

> “Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.”

### What to change
Resolve the duplication with Northpeak. Do not retain both versions unless the projects are genuinely distinct and clearly separated.

### Why
This is the most obvious internal consistency issue in the document.

---

# Skills

## Programming

> “Python, R, PyTorch, Kafka”

### What to change
- Add tools that are clearly supported by the experience section, such as version control, SQL, Linux, numerical libraries, data-processing tools, or cloud/HPC tools, but only if you actually use them.
- Organize the list by relevance to the target role.
- Do not list Kafka unless you can discuss how you used it.
- Add the code or package repositories separately if they are important.

### Why
Your experience demonstrates more technical capability than the skills section currently communicates. The section looks thin relative to the sophistication of the work.

Kafka is also somewhat disconnected from the rest of the resume unless it was used in a meaningful data pipeline.

## Methods

> “time-series econometircs, high-dimensional statistics, gradient boosting”

### What to change
- Correct the spelling of “econometrics.”
- Use consistent capitalization and punctuation.
- Add methods visibly demonstrated in the resume, such as:
  - Volatility modeling;
  - Financial backtesting;
  - Purged walk-forward validation;
  - Point-in-time data handling;
  - Multiple-testing correction;
  - Monte Carlo simulation;
  - Covariance estimation;
  - Microstructure or order-book modeling.
- Separate statistical methods from financial research methods if the list becomes long.

### Why
The current skills section has a spelling error in a core domain term, which can hurt ATS matching and immediately reduce polish. More importantly, it omits several of your strongest specialized capabilities.

Do not add methods merely because they sound relevant; include only methods you can defend in an interview.

---

# Structural changes

## Add a concise summary or research focus line

### What to change
Add a short summary near the top that identifies you as a Ph.D. candidate working in statistical learning, time-series forecasting, and quantitative research, with evidence of both research and production-oriented implementation.

### Why
At present, a recruiter sees education first and must infer your target profile from the experience section. A short summary would make the intended role clear within the first few seconds.

It should not merely repeat your skills. Its purpose is to connect your academic research, financial modeling, and deployable research infrastructure.

---

## Add a publications or selected research section

### What to change
Create a clearly labeled section for:

- The JASA submission, marked with its exact status;
- The volatility forecasting working paper;
- The R package, if treated as a research software output;
- Relevant seminars or conference presentations.

### Why
Your scholarly work is currently scattered across experience and projects. For quantitative research roles, this causes you to understate your research profile.

---

## Reconsider the section order

### What to change
For quant research applications, consider prioritizing:

1. Header and summary;
2. Education;
3. Quantitative research experience;
4. Selected research/projects;
5. Publications or research outputs;
6. Skills;
7. Nontechnical employment.

### Why
Your current ordering is reasonable chronologically, but it gives the bakery role the same visual status as the internship and research experience. Your strongest evidence should dominate the first page.

---

## Make dates and timeline easy to interpret

### What to change
Explain or visually clarify the overlap among:

- Ph.D. study;
- Research assistant work;
- Northpeak internship;
- Bakery employment;
- Independent research.

### Why
The dates are plausible, but a recruiter may wonder whether the research projects are academic, personal, or professional and how much time was spent on each. Clear categorization will prevent doubts about continuity and availability.

---

# Technical and credibility audit

| Area | Assessment | Required action |
|---|---|---|
| Quantitative performance claims | Strong but high-risk | Define metric, baseline, horizon, and test protocol |
| Backtest validation | Generally strong | Reconcile with 400-configuration selection |
| Hyperparameter selection | Serious concern | Remove or correct the “expected live Sharpe” claim |
| Data leakage awareness | Strong in some bullets | Ensure all projects use equally rigorous procedures |
| Randomized simulation | Potential validity issue | Correct the same-seed implementation or explanation |
| Publication status | Mostly transparent | Add a dedicated research/publications section |
| Ownership of work | Unclear in duplicated signal claims | Separate or consolidate Northpeak and Kaggle work |
| Software contribution | Strong | Give the package and feature-store work more prominence |
| Metrics | Excellent quantity | Add definitions and avoid unsupported causal language |
| Skills section | Underdeveloped | Correct typo and include demonstrated methods/tools |

---

# ATS and recruiter perspective

Because no job description was provided, an exact keyword-match calculation is not possible. Based on the resume’s apparent target—quantitative research or systematic trading—the document contains many valuable domain terms:

- Time-series
- Volatility
- Realized volatility
- QLIKE
- Diebold-Mariano tests
- Walk-forward validation
- Purged splits
- Embargo period
- Point-in-time joins
- Microstructure
- Order-book imbalance
- Futures
- Sharpe ratio
- Transaction costs
- Capacity
- High-dimensional statistics

The main ATS risks are:

- The misspelling of “econometrics”;
- Missing terms such as backtesting, statistical arbitrage, market microstructure, portfolio construction, or risk modeling if they are relevant and truthful;
- No summary that states the intended role;
- A thin skills section;
- Potentially confusing “Kaggle” and professional quant-research terminology.

---

# Scoring

This is a conditional score because there is no job description and the provenance issues are unresolved.

| Dimension | Score | Notes |
|---|---:|---|
| ATS keyword readiness | 7.5/10 | Strong domain terms, but no JD targeting and one core spelling error |
| Summary | 5.5/10 | No summary or immediate target-role framing |
| Skills section | 6.5/10 | Accurate but too thin and missing several demonstrated methods |
| Bullet quality | 7/10 | Strong metrics and technical depth, but several bullets need clarification |
| Research/publication presentation | 7/10 | Strong substance, poorly surfaced |
| Narrative coherence | 6/10 | Quant research story is good but diluted by bakery placement and duplicated signal claims |
| Visual/section prioritization | 7/10 | Readable structure, but technical work needs stronger visual priority |
| Credibility signals | 6/10 | Excellent achievements offset by the 400-configuration and duplicate-Sharpe concerns |
| **Overall** | **6.6/10** | Strong underlying profile, but not yet fully trustworthy or optimized |

If you fix the selection-bias claim, resolve the duplicated work, correct the simulation issue, and improve section prioritization, the resume could plausibly move into the **8/10 range** for appropriate quant-research roles.

---

# Recommended order of changes

## Tier 1 — Do these first

1. Resolve or remove the “best Sharpe as expected live Sharpe” bullet.
2. Explain whether the Northpeak and Kaggle order-book results are the same work.
3. Correct the Monte Carlo random-seed methodology or remove that implementation detail.
4. Correct “econometircs.”
5. Add a clear summary or research-focus line.
6. Move the strongest Northpeak and research bullets earlier.
7. Surface the JASA submission, working paper, and R package in a research/publications section.

## Tier 2 — Strongly recommended

1. Define the 35% risk-adjusted-return improvement.
2. Add backtest details where they establish credibility: horizon, costs, capacity, baseline, and selection procedure.
3. Add package/repository names and links.
4. Expand the skills section using only methods and tools supported by the resume.
5. Clarify the status of the live allocation.
6. Add competition rank or outcome for the Kaggle project, if favorable and verifiable.
7. Clarify crisis-period definitions in the volatility project.

## Tier 3 — Optional

1. Shorten the bakery entry.
2. Reduce teaching detail if space is tight.
3. Add relevant graduate coursework.
4. Add a LinkedIn profile.
5. Improve visual differentiation between professional experience, academic research, and personal projects.

## Bottom line

Your underlying profile is substantially stronger than the current presentation. The main task is not to add more achievements; it is to make the existing achievements **technically defensible, nonduplicative, and easier to prioritize**. The 400-configuration Sharpe claim and the Northpeak/Kaggle overlap should be fixed before sending this resume anywhere.