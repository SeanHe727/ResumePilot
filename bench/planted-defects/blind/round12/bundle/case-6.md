# case-6

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its
weekly labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of
production.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s
futures signal.
- Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo
period, so every backtest decision used only information available at the time.
- Wrote a feature store for 120 microstructure features with point-in-time joins, which the
research team reused in two later signal projects.
- Presented the signal, its capacity estimate and failure cases to the portfolio managers, who
approved a small live allocation for the next quarter.
- Selected the smoother’s parameters from 400 backtested configurations and reported the best
one’s Sharpe as the expected live Sharpe.
- Built a short-horizon order-book imbalance signal for liquid index futures that raised the
desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after
costs.
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel
with the same random seed on every worker.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous
bound by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets
and earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation with shrinkage
and factor models, downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm
correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.
- Wrote up the method, robustness checks and results as a 12-page working paper, which was
presented at the department’s financial econometrics seminar.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Engineered features and trained gradient-boosting models for a market prediction
competition.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between
local validation and leaderboard scores.
- Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested
over 18 months out of sample.
SKILLS
Programming: Python, R, PyTorch, Kafka
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

# Resume Review

I’m inferring that this resume targets **quantitative research / quantitative developer / systematic trading roles**, because the strongest evidence is in the Northpeak Capital internship, volatility research, futures signals, and statistical learning background. Without a job description, I can’t assess exact ATS keyword coverage or company-specific terminology.

## Highest-priority changes

1. **Resolve the credibility problems in the Northpeak section.**  
   The current version contains several claims that a technical interviewer may interpret as backtest leakage, selection bias, or inconsistent measurement.

2. **Remove or consolidate duplicated trading-signal claims.**  
   The Northpeak section and Kaggle section appear to describe essentially the same order-book imbalance signal and performance result. This creates uncertainty about what you personally built and where.

3. **Add a concise target-oriented summary.**  
   A recruiter currently has to infer whether you are pursuing quantitative research, quantitative development, statistical modeling, or academia.

4. **Reorder bullets so the strongest, most credible evidence appears first.**  
   Several roles begin with less relevant or technically ambiguous material.

5. **Correct the skills section and make it more specific.**  
   There is a spelling error, one unexplained technology, and insufficient detail about the tools used for research and production-quality workflows.

---

# Section-by-section review

## Header

### What to change

- **Verify that the code link goes to a real, polished portfolio.**  
  For quant roles, the link should demonstrate relevant work such as research notebooks, reproducible experiments, packages, or technical writing. An empty or generic repository can hurt more than having no link.

- **Add a location or work-authorization signal if relevant to your target market.**  
  This is especially useful for finance employers that recruit by office or require specific authorization. Do not add it if it is unnecessary or sensitive.

- **Consider adding a LinkedIn profile only if it is complete and consistent with the resume.**  
  An incomplete profile creates an avoidable credibility issue.

- **Do not add a generic objective statement.**  
  What is missing is a concise professional positioning summary, not an objective.

---

## Education

### Ph.D. candidate in Statistics

### What to change

- **Add your research area or dissertation topic.**  
  “Ph.D. candidate in Statistics” is strong but broad. Quantitative research readers need to know whether your work involves time series, statistical learning, econometrics, optimization, high-dimensional inference, or another relevant area.

- **Clarify whether the Ph.D. is in progress, completed, or expected to be completed before the target role begins.**  
  The expected date is useful, but the resume should make your availability and candidacy status unambiguous.

- **Add a small number of highly relevant courses only if they strengthen the target.**  
  Relevant examples would include time-series analysis, stochastic processes, optimization, numerical methods, or financial econometrics. Do not add a long coursework list.

- **Include your advisor, dissertation title, or research group only if those details are meaningful for the role.**  
  They can help for research-heavy quant positions, but they are less valuable for purely engineering-oriented roles.

### B.S. in Mathematics

### What to change

- **Reduce the visual emphasis on the B.S. relative to the Ph.D.**  
  Your graduate training is the more important signal for the target role.

- **Consider removing the undergraduate degree if space is needed.**  
  Because you are near completion of a Ph.D., the B.S. is no longer essential unless the institution or degree provides a particularly useful signal.

---

# Experience

## Sunrise Bakery — Assistant Store Manager

### Section-level issue

This role is recent and currently appears above your much more relevant quantitative research internship. That is a major positioning problem.

### What to change

- **Move this role below Northpeak Capital and the university research experience, or place it in a separate “Additional Experience” section.**  
  A recruiter scanning for quant experience may otherwise assume that store management is your current professional direction.

- **Keep the role if it explains your current employment or fills a chronology gap.**  
  Do not hide it if it is your actual current job. Instead, visually subordinate it to research experience.

- **Use it to show operational leadership, budget ownership, and process improvement—not as a central technical credential.**  
  Its value is evidence of responsibility and execution, not quantitative finance expertise.

### Bullet 1: Managing opening shifts and a team of six

### What to change

- **Make the scale and ownership clearer.**  
  The bullet currently combines shift management, team supervision, and labor-budget control without showing the degree of responsibility or result.

- **Add a measurable budget or operational outcome if one exists.**  
  “Within budget” is a baseline expectation rather than a strong accomplishment unless you can show the size of the budget, savings, or improvement.

- **Clarify whether you supervised employees directly or coordinated their work.**  
  This distinction matters for leadership credibility.

### Bullet 2: Reducing unsold bread from 12% to 7%

### What to change

- **Keep this bullet; it is the strongest bakery achievement.**  
  It has a clear before-and-after metric and shows inventory reasoning.

- **Explain the mechanism at a high level.**  
  The current wording says you ran counts and placed orders, but not what analytical or operational change caused the reduction. The reader should understand whether the improvement came from forecasting, order timing, production adjustments, or supplier coordination.

- **Avoid overstating the quantitative sophistication.**  
  Present it as a measurable operations improvement, not as a forecasting model unless you actually built one.

---

## Northpeak Capital — Quantitative Research Intern

This should be the centerpiece of the resume. It currently contains strong evidence, but also the most serious technical concerns.

### Bullet 1: 35% improvement in risk-adjusted returns

### What to change

- **Specify the metric represented by “risk-adjusted returns.”**  
  A technical reader will want to know whether this means Sharpe ratio, information ratio, return per unit of volatility, or another measure.

- **Clarify the comparison period, universe, transaction-cost assumptions, and baseline.**  
  Without these, the 35% figure is difficult to evaluate and may appear inflated.

- **Reconcile this claim with the later Sharpe-ratio claim.**  
  The resume currently reports both a 35% improvement and an increase from 1.1 to 1.5. Those may be consistent, but the relationship is not obvious.

- **Identify your individual contribution to the smoother.**  
  “Improved” can imply ownership of the entire strategy. Make sure the bullet accurately distinguishes your work from the desk’s existing signal.

### Bullet 2: Six years of tick data and purged walk-forward validation

### What to change

- **Keep this near the top; it is one of the strongest bullets.**  
  It demonstrates awareness of temporal leakage and realistic validation.

- **State what was being validated.**  
  The reader should know whether this was the smoother, the signal, the full strategy, or a research pipeline.

- **Clarify the embargo design if it was a meaningful part of the methodology.**  
  A quant interviewer may ask what interval was embargoed and why.

- **Avoid presenting the validation method as proof of live performance.**  
  It supports the credibility of the backtest but does not establish that the strategy will work live.

### Bullet 3: Feature store with 120 microstructure features

### What to change

- **Specify the implementation and engineering scope.**  
  “Wrote a feature store” is useful, but a quant developer or research engineering reviewer will want to know whether you handled point-in-time correctness, feature versioning, storage, latency, testing, or deployment.

- **Explain what “reused in two later signal projects” means.**  
  Clarify whether the team reused the infrastructure, the features, or both.

- **Retain the point-in-time-join detail.**  
  That is a valuable signal because it directly addresses look-ahead bias.

### Bullet 4: Presentation and live allocation

### What to change

- **Keep this bullet; it provides an important research-to-decision-making outcome.**

- **Clarify your role in the live allocation decision.**  
  Portfolio managers approving a small allocation is strong evidence, but it should not imply that you managed capital or made the final investment decision.

- **Add the scale or risk limits of the allocation if permitted.**  
  A small live allocation is otherwise difficult to interpret.

- **Identify the failure cases you presented.**  
  Demonstrating that you examined failure modes is valuable, but the current wording leaves that evidence underdeveloped.

### Bullet 5: Selecting parameters from 400 configurations and reporting the best Sharpe as expected live Sharpe

### What to change

- **Remove this bullet or substantially correct its methodological framing.**  
  As written, it is a serious red flag. Selecting the best configuration from 400 trials and then calling its in-sample or selected Sharpe the “expected live Sharpe” is a classic multiple-testing and selection-bias problem.

- **If the work was intentional and later corrected, describe the correction rather than the flawed estimate.**  
  The important achievement would be recognizing and addressing selection bias, not reporting the best result as an expectation.

- **Do not claim an expected live Sharpe unless it was estimated using an independent holdout, nested validation, or another defensible procedure.**  
  A technical reviewer may reject the entire research section if this remains unchanged.

### Bullet 6: Order-book imbalance signal and Sharpe increase from 1.1 to 1.5

### What to change

- **Determine whether this is the same signal described in the Kaggle project.**  
  If it is the same work, remove the duplicate from one section and keep the more credible, better-contextualized version.

- **Clarify what “the desk book” means.**  
  It is not immediately clear whether this was an existing portfolio, a simulated book, or a research portfolio.

- **Clarify the source of the 18-month out-of-sample period.**  
  State whether it was truly untouched during model selection and whether the period includes transaction costs, slippage, capacity constraints, and changing market regimes.

- **Avoid presenting a Sharpe increase alone as evidence of production readiness.**  
  Add the relevant constraints or supporting diagnostics if available.

### Ordering within Northpeak

### What to change

Use the ordering to tell a coherent story:

1. Signal or strategy contribution and result  
2. Leakage-resistant validation  
3. Feature infrastructure  
4. Communication and live evaluation  
5. Robustness, limitations, or failure analysis  

Do not place the parameter-selection bullet in its current form among the strongest accomplishments.

---

## Ridgeway University — Research Assistant

### Bullet 1: Reducing a Monte Carlo study from three days to five hours

### What to change

- **Keep this bullet, but correct or clarify the random-number-generation description.**  
  Saying that every worker used “the same random seed” can imply that workers generated identical or correlated random streams, which would undermine the simulation.

- **State whether you used independent reproducible streams or separate worker seeds.**  
  Reproducibility is positive; duplicated random streams are not.

- **Add the implementation environment if relevant.**  
  For quant research roles, parallel computing, vectorization, cluster execution, or job scheduling can be useful signals.

### Bullet 2: Variance bound and JASA paper

### What to change

- **Keep this as evidence of mathematical depth, but make authorship and publication status precise.**  
  “My proof” and “is now Section 3” may overstate your role or imply acceptance when the paper is only under review.

- **Identify whether you are first author, coauthor, or contributor.**  
  This matters to technical reviewers.

- **Use the exact status of the manuscript consistently.**  
  Under review, submitted, revise-and-resubmit, accepted, and published have materially different credibility.

- **Explain the relevance to quantitative research through the surrounding context, not by overstating the finance connection.**  
  The value is statistical theory, proof ability, and technical rigor.

### Bullet 3: Teaching 60 students and 12 problem sets

### What to change

- **Move this below the research and software bullets.**  
  It is a positive teaching and communication signal but is not among your strongest quant credentials.

- **Keep the teaching rating only if the source and scale are legitimate.**  
  A 4.8/5 rating is useful, but it should not receive more emphasis than research results.

- **Clarify whether you designed the course material or only delivered assigned recitations.**  
  This determines the level of ownership.

### Bullet 4: Open-source R package with 3,000 downloads

### What to change

- **Move this bullet ahead of teaching.**  
  It demonstrates software development, public delivery, and adoption.

- **Clarify how downloads are measured.**  
  Downloads from CRAN, GitHub, or another source carry different meanings.

- **Add evidence of quality if available.**  
  Tests, documentation, continuous integration, external contributors, or use in research would strengthen the claim.

- **Keep the package name or link if it is publicly available and polished.**  
  This is one of the best opportunities to substantiate your technical claims.

---

# Projects

## Volatility Forecasting Study

This is a strong project and should receive more prominence, especially if you are applying for systematic research roles.

### Bullet 1: Beating HAR-RV by 7% on 30 equity indices

### What to change

- **Keep this bullet near the top of the project.**  
  It shows a relevant financial forecasting problem, a meaningful baseline, and a multi-market evaluation.

- **Clarify the data period and forecast horizon.**  
  These materially affect the interpretation of the result.

- **Specify whether the evaluation was fully out of sample and how hyperparameters were selected.**  
  The current wording is promising but not enough to establish that the comparison is fair.

- **Explain why a temporal convolutional model was appropriate.**  
  This can be addressed in the project link or interview, but the resume should show the methodological reasoning if space allows.

### Bullet 2: Diebold-Mariano tests and Holm correction

### What to change

- **Keep this bullet; it is unusually strong statistical validation.**

- **Clarify the unit of the 5% result.**  
  The reader should know whether the test was performed separately for each index, across forecast horizons, or in another structure.

- **State whether the crisis-period result was pre-specified or selected after examining the data.**  
  This affects the credibility of the robustness claim.

- **Avoid allowing the statistical test detail to overwhelm the practical result.**  
  The bullet should support the forecasting claim rather than read like a methods appendix.

### Bullet 3: Working paper and seminar presentation

### What to change

- **Keep this as the final project bullet.**

- **Clarify the paper’s status.**  
  “Working paper” is appropriate, but do not let it be mistaken for a publication.

- **Add the paper or presentation link if available.**  
  A technical reviewer will want to inspect the methodology.

- **State whether you were the sole author or part of a team.**  
  This is important for evaluating ownership.

---

## Kaggle Market Prediction Competition

This section is currently weaker than the volatility project and contains a possible duplication problem.

### Bullet 1: Feature engineering and gradient boosting

### What to change

- **Add the competition result or remove the bullet.**  
  As written, it describes activities without showing performance, ranking, or a concrete technical outcome.

- **Specify the dataset or prediction task only if it helps explain the relevance.**  
  Generic competition language does not differentiate you.

### Bullet 2: Closing the validation-leaderboard gap

### What to change

- **Keep this if you can explain the leakage mechanism and the resulting validation design.**  
  It demonstrates an understanding of temporal validation.

- **Clarify whether the improvement was measured by reducing overestimation, improving leaderboard performance, or both.**  
  “Closed a 0.02 gap” is not automatically a positive result unless the reader understands what the gap represents.

- **Avoid presenting this as independent evidence if it is connected to the Northpeak work.**  
  The resume should distinguish academic, competition, and professional work clearly.

### Bullet 3: Adding 0.4 to a futures-book Sharpe ratio

### What to change

- **Investigate and resolve the apparent duplication with Northpeak’s final bullet.**  
  This is the most serious issue in the Projects section.

- **If it is a separate experiment, explain the difference in dataset, signal, period, and portfolio construction.**  
  Otherwise, remove it from the Kaggle section.

- **Do not claim ownership of a “futures book” if this was only a simulated competition portfolio.**  
  Use terminology that accurately reflects the environment.

- **Avoid repeating the same 18-month period and same signal concept in two locations.**  
  Repetition makes the resume look padded and may prompt questions about whether the results are being double-counted.

---

# Skills

## Programming

### What to change

- **Add the specific tools used in the experience bullets.**  
  The resume currently mentions Python, R, PyTorch, and Kafka but does not show enough evidence of how each was used.

- **Only retain Kafka if you used it meaningfully.**  
  It currently appears without any supporting experience, which can look like keyword stuffing.

- **Consider including relevant data and research tooling if accurate.**  
  Examples of categories to evaluate include SQL, version control, testing, numerical libraries, distributed computing, databases, and cloud or cluster tooling.

- **Separate research languages from production or infrastructure tools.**  
  This helps readers understand your technical profile.

## Methods

### What to change

- **Correct “econometircs” to “econometrics.”**  
  A spelling error in a core target-domain skill is especially damaging.

- **Use consistent and conventional method names.**  
  “Time-series econometrics” should be presented consistently with the terminology used in your projects and publications.

- **Add methods demonstrated by the resume.**  
  Your experience supports areas such as point-in-time validation, walk-forward testing, multiple-testing correction, volatility forecasting, microstructure features, high-dimensional statistics, Monte Carlo simulation, and statistical inference.

- **Do not list methods you cannot discuss deeply.**  
  Quant interviews often probe every method named in the skills section.

- **Consider including portfolio and market methods only if they are genuinely part of your expertise.**  
  For example, transaction-cost modeling, capacity estimation, signal evaluation, and risk adjustment should appear only if you can explain the implementation and assumptions.

---

# Narrative and structure

## Missing summary

### What to change

Add a short summary at the top that establishes:

- Your status as a statistics Ph.D. candidate
- Your target function in quantitative research or systematic modeling
- Your strongest technical areas
- Your finance or market-microstructure experience
- One or two credibility signals, such as the live allocation, multi-market forecasting study, or open-source package

The summary should not repeat every achievement. Its purpose is to prevent the recruiter from misclassifying you as primarily an academic statistician or a general software candidate.

## Ordering

### What to change

A stronger ordering would be:

1. Header  
2. Summary  
3. Education  
4. Northpeak Capital  
5. Volatility Forecasting Study  
6. Ridgeway University research  
7. Additional experience, including Sunrise Bakery  
8. Kaggle project, if it remains sufficiently differentiated  
9. Skills  

If you are applying to a research-heavy role, you could place the volatility project immediately after Northpeak. If you are applying to a software-heavy quant role, the feature-store and package work should receive more emphasis.

## Relevance balance

### What to change

- Make Northpeak and the volatility project visually dominant.
- Reduce the prominence of teaching and bakery management.
- Keep mathematical theory because it differentiates you, but explain its role accurately.
- Remove any bullet that only states an activity without a result, technical challenge, or meaningful scale.

---

# Technical credibility concerns to fix before applying

These are more important than stylistic improvements:

1. **Best-of-400 configuration selection**  
   The current interpretation of the best Sharpe as expected live Sharpe is not defensible without an independent evaluation procedure.

2. **Potential duplicate signal result**  
   The order-book imbalance claim appears in both Northpeak and Kaggle.

3. **Inconsistent performance metrics**  
   The 35% risk-adjusted-return improvement and the 1.1-to-1.5 Sharpe increase need to be reconciled.

4. **Random seeds in parallel Monte Carlo**  
   “The same random seed on every worker” may imply correlated or duplicate simulations.

5. **Ambiguous ownership**  
   Several bullets could imply ownership of a desk strategy, live allocation, paper, or software package beyond your actual role.

6. **Backtest methodology is underspecified**  
   Add enough context to establish that the reported results were out of sample, cost-adjusted, capacity-aware, and not selected after repeated testing.

7. **Publication status and authorship**  
   Make the JASA manuscript status and your author role precise.

---

# Suggested scoring

Because there is no job description, the ATS score is necessarily provisional.

| Dimension | Score | Reason |
|---|---:|---|
| Target-domain keyword coverage | 7/10 | Strong finance and statistics terms, but the skills section is thin and contains a spelling error |
| Summary and positioning | 4/10 | No summary; target role must be inferred |
| Skills section | 5.5/10 | Relevant foundation, but incomplete, unsupported Kafka entry, and typo |
| Bullet quality | 7/10 | Strong metrics and technical depth, offset by ambiguity and methodological concerns |
| Publication/research credibility | 7/10 | Strong mathematical and empirical work, but statuses and authorship need precision |
| Narrative coherence | 6/10 | Quantitative research is present but not prioritized structurally |
| Visual/page effectiveness | Not assessable | Plain text does not show layout, page count, or spacing |
| Credibility signals | 6.5/10 | Live allocation, package downloads, and published-quality research are strong; several claims require clarification |

**Overall current assessment: approximately 65–72/100 depending on formatting and the accuracy of the backtest claims.**  
The resume has substantially better raw evidence than its current presentation suggests, but the methodological ambiguities could materially reduce interview chances at a sophisticated quant employer.

---

# Recommended change order

## Tier 1 — Do these first

1. Correct or remove the best-of-400 parameter-selection claim.
2. Resolve the duplicated order-book signal and Sharpe result.
3. Reconcile the 35% return claim with the 1.1-to-1.5 Sharpe claim.
4. Add a target-oriented summary.
5. Move Sunrise Bakery into a less prominent position.
6. Correct the econometrics typo.
7. Clarify the random-seed methodology in the Monte Carlo bullet.
8. Make authorship, manuscript status, and project ownership precise.

## Tier 2 — Strong improvements

1. Add data periods, forecast horizons, baselines, and validation details to the forecasting work.
2. Add implementation details for the feature store and R package.
3. Add the relevant tools used for testing, data management, version control, and computing infrastructure.
4. Reorder the research bullets around your strongest quantitative evidence.
5. Add links to the package, working paper, and polished technical projects.

## Tier 3 — Lower priority

1. Remove the undergraduate degree if space is tight.
2. Reduce teaching detail.
3. Add minor formatting polish.
4. Expand the bakery section only if you are applying to roles where operations leadership matters.

The most important principle is: **make the resume more technically conservative, not more promotional.** Your strongest advantage is that you have unusually credible statistical and empirical research experience. The current questionable claims risk undermining that advantage.

## Reviewer 2

## Highest-priority changes

1. **Resolve credibility and methodology issues in the quant bullets.** Several claims currently sound overstated or potentially biased:
   - Reporting the best Sharpe from 400 configurations as the expected live Sharpe is statistically inappropriate.
   - The two order-book signal claims appear duplicated across Northpeak and Kaggle, with potentially inconsistent ownership and results.
   - “Improved risk-adjusted returns by 35%” needs a clearly defined metric, benchmark, period, and whether costs were included.
2. **Fix the typo:** “econometircs” should be corrected.
3. **Clarify your target.** For quantitative research roles, move the most relevant research, technical skills, and publications higher. The bakery role should be shortened unless it demonstrates a specific leadership, operations, or employment-continuity purpose.
4. **Improve reproducibility language.** Using “the same random seed on every worker” can imply that workers generated identical or correlated random streams rather than independent reproducible streams.
5. **Remove or revise claims that imply data leakage, selection bias, or unsupported causality.**

---

## Header

### Contact information
- **Change:** Replace the placeholder website domain if this is not the actual URL, and make sure the link goes directly to a relevant code, research, or professional profile.
- **Why:** A nonfunctional or obviously generic URL undermines the rest of the application.
- **Consider adding:** A LinkedIn, Google Scholar, personal research page, or GitHub link if relevant to the role. Do not add all of them if they contain little useful content.

---

## Education

### Ph.D. candidate in Statistics
- **Change:** Add your expected degree or research focus only if it strengthens your candidacy and is not already evident elsewhere. Also clarify whether you are currently enrolled full-time if the overlapping employment dates could raise questions.
- **Why:** Your Ph.D. is probably your strongest qualification for quant research and statistical roles, but the entry currently provides no specialization, advisor, dissertation topic, or relevant coursework.
- **Check:** Make sure “Expected May 2026” is still accurate. If you have defended, advanced to candidacy, or changed the expected date, update it.

### B.S. in Mathematics
- **Change:** Keep it, but consider removing it if space is tight unless it adds something not covered by your Ph.D. or is required for an application.
- **Why:** For a Ph.D. candidate with substantial research experience, the undergraduate degree is less important than publications, methods, and technical work.

---

## Experience

### Sunrise Bakery — Assistant Store Manager
- **Change:** Keep this role only if you need to show current employment, leadership, operational responsibility, or continuity. Reduce its visual prominence if applying to quantitative roles.
- **Why:** It is not directly relevant to quant research, but removing it could create an unexplained current-employment gap. Its value is mainly in management and operational accountability.

#### “Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.”
- **Change:** Specify the scope of responsibility more precisely if possible: scheduling authority, budget size, staffing complexity, or measurable operational result.
- **Why:** “Managed” and “keeping within budget” are credible but generic. The bullet would be stronger if the scale and your direct responsibility were clear.
- **Check:** Use consistent spelling throughout the resume. You use “labour,” which is acceptable, but match the conventions of the country and employer.

#### “Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.”
- **Change:** Add the time period over which the reduction occurred and make clear whether the reduction was attributable solely to your process or to a broader store initiative.
- **Why:** The result is measurable and useful, but without a timeframe it is difficult to assess. “Cutting” may overstate causality if other changes contributed.

---

### Northpeak Capital — Quantitative Research Intern

This is your most important section for quant applications. It should be ordered by credibility and relevance, not simply by chronology or dramatic impact.

#### “Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.”
- **Change:** Define “risk-adjusted returns,” identify the comparison baseline, state the evaluation period, and clarify whether the result was in-sample, out-of-sample, simulated, or live. Include transaction costs and capacity assumptions if they are relevant.
- **Why:** A 35% improvement is a major claim. Without these details, recruiters may interpret it as a loosely defined or overfit result.
- **Check:** Ensure this is not merely another presentation of the Sharpe improvement stated later. Avoid reporting multiple versions of the same result unless each measures something distinct.

#### “Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.”
- **Change:** Specify what was purged, why the embargo length was appropriate, and whether hyperparameter selection and model evaluation were fully separated.
- **Why:** The methodology is technically strong, but the final causal claim is too absolute. Purging and embargoing reduce certain leakage risks; they do not automatically prove that every backtest decision was free of look-ahead bias.
- **Consider:** Mention the number of folds or the train/test structure if space permits and it demonstrates rigor.

#### “Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.”
- **Change:** Keep this bullet, but clarify your role in designing the point-in-time safeguards and the technical environment if relevant.
- **Why:** This is one of the strongest bullets because it combines scale, infrastructure, leakage prevention, and downstream adoption.
- **Check:** Make sure “feature store” is accurate. If it was a library, pipeline, database, or research framework rather than a true feature-store system, use terminology that matches the implementation.

#### “Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.”
- **Change:** Clarify whether the allocation actually occurred, whether you participated in monitoring it, and what “small” means only if disclosure rules permit. Otherwise, focus on the approval or handoff without implying a live result you cannot document.
- **Why:** This is valuable evidence of communication and investment relevance, but “approved” and “live allocation” can attract scrutiny. The claim should be precise and compliant with any confidentiality restrictions.
- **Check:** The tense and date should align with the internship dates. If the allocation happened after the internship, state your involvement accurately.

#### “Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.”
- **Change:** Remove this bullet or substantially change its substance. Do not present the best in-sample or search-selected Sharpe as the expected live Sharpe.
- **Why:** This describes selection bias and likely multiple-testing bias. The best result among 400 configurations is not an unbiased estimate of future performance and directly conflicts with the otherwise careful validation narrative.
- **Better content direction:** If you keep the underlying work, describe how you controlled for configuration selection, used a final untouched holdout, adjusted expectations, or reported performance after selection. Do not claim a live expectation based solely on the best backtest.

#### “Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.”
- **Change:** Verify ownership, chronology, and the exact contribution. State whether this is the same signal referenced in the Kaggle project and explain the relationship if it is.
- **Why:** This is a strong result, but it currently appears duplicated elsewhere. A recruiter may wonder whether the same accomplishment is being claimed twice or whether the project was transferred from an independent competition into professional work.
- **Check carefully:** “Desk book’s Sharpe ratio” suggests a portfolio-level impact, while “built a signal” suggests an individual research contribution. Make the attribution technically and professionally accurate.
- **Add if possible:** The benchmark, number of observations or trades, and whether the 18-month period was genuinely untouched during development.

---

### Ridgeway University — Research Assistant, Statistical Learning Lab

#### “Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.”
- **Change:** Correct the random-number methodology description. Use independent, reproducible random streams or an equivalent rigorously controlled approach, if that is what you actually implemented.
- **Why:** The same seed on every worker can produce duplicated random sequences and invalidate the simulation. A technically sophisticated reader may view this as a serious flaw.
- **Check:** Verify whether the original study used identical seeds intentionally and whether the speed comparison held simulation quality and hardware constant.

#### “Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.”
- **Change:** Clarify your authorship and contribution, and avoid implying acceptance. Identify the manuscript status accurately.
- **Why:** “Under review” is not the same as publication, and the bullet currently emphasizes the paper’s location rather than the significance and scope of your contribution.
- **Check:** Confirm that the comparison is mathematically accurate: “by a log factor” can be interpreted differently depending on the exact bound. Make sure the claim is supported by the paper and advisor-approved.
- **Consider:** Add a publications or research-output entry elsewhere if the manuscript is central to your application.

#### “Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.”
- **Change:** Keep this for academic, teaching, or communication-focused roles; shorten or deprioritize it for industry quant applications.
- **Why:** It demonstrates communication and subject mastery, but it is less relevant than your modeling, research, and production-oriented work.
- **Check:** State who provided the rating and the response rate if the rating could otherwise appear selectively reported.

#### “Released an open-source R package for high-dimensional covariance estimation with shrinkage and factor models, downloaded 3,000 times in its first year.”
- **Change:** Add the package name and a link if the package is public. Clarify the download source and whether the figure counts unique users, downloads, or repository events.
- **Why:** This is a strong, verifiable accomplishment, but the current wording makes the result difficult to validate.
- **Consider:** Mention testing, documentation, maintenance, or external adoption if those are more meaningful than raw downloads.

---

## Projects

### Volatility Forecasting Study

#### “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.”
- **Change:** Specify the forecast horizon, evaluation period, data frequency, and whether the comparison used identical information sets and tuning procedures.
- **Why:** The result is relevant and quantitative, but performance claims need enough context to distinguish a robust result from an arbitrary split or favorable setup.
- **Check:** Ensure “out-of-sample” means the test data were not used for architecture, feature, or hyperparameter decisions.

#### “Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.”
- **Change:** Clarify whether the crisis-period tests were included in the multiple-testing correction and whether the forecast-error dependence assumptions were handled appropriately.
- **Why:** This is methodologically impressive, but readers may question whether “both crisis periods” was specified in advance and whether the result is being selectively emphasized.
- **Check:** Make sure the wording distinguishes statistical significance from economic significance. A statistically significant QLIKE improvement does not necessarily imply trading value.

#### “Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.”
- **Change:** Add a link to the paper if available and specify your presentation role if others were coauthors.
- **Why:** This supports research communication, but the page count adds little value compared with the paper’s title, status, or availability.
- **Consider:** If the paper is central, give it a separate publications or working papers section rather than leaving it only under Projects.

---

### Kaggle Market Prediction Competition

#### “Engineered features and trained gradient-boosting models for a market prediction competition.”
- **Change:** Add the outcome that makes the project notable: rank, score, team result, dataset scale, or technical constraint.
- **Why:** As written, this is a generic description and does not distinguish the project from routine modeling work.

#### “Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.”
- **Change:** Explain which direction the gap moved and why the revised fold design was appropriate. Avoid implying that closing the gap alone proves the new validation scheme was correct.
- **Why:** The bullet shows awareness of leakage, but leaderboard alignment is not itself proof of valid evaluation. The revised methodology and its justification matter more than the numerical gap.

#### “Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.”
- **Change:** Remove this bullet or resolve its overlap with the Northpeak bullet. Confirm that it was actually part of the Kaggle project, that you had authority to describe a futures book, and that the data and signal were not reused from your internship.
- **Why:** This currently creates a serious credibility problem. It appears to claim a professional portfolio impact inside a competition project, while also resembling the Northpeak result.
- **Check:** Do not retain both claims unless they clearly refer to different signals, datasets, periods, and outcomes.

---

## Skills

### “Programming: Python, R, PyTorch, Kafka”
- **Change:** Organize skills by proficiency or relevance and include key tools demonstrated in the experience section, if applicable.
- **Why:** Kafka is not otherwise supported in the resume, while important quant tools or libraries may be missing. Unsupported skills can look like keyword padding.
- **Check:** Only list technologies you could discuss in a technical interview. If PyTorch was used only in the project, that is fine, but the project should make the depth clear.

### “Methods: time-series econometircs, high-dimensional statistics, gradient boosting”
- **Change:** Correct the spelling of “econometrics.”
- **Change:** Use consistent capitalization and formatting across categories.
- **Why:** The typo is particularly damaging in a methods section because it concerns one of your stated areas of expertise.
- **Consider:** Include methods that are clearly demonstrated in the resume, such as volatility forecasting, time-series validation, point-in-time data handling, multiple-testing correction, and statistical learning. Do not turn this into an exhaustive list of every technique you have encountered.

---

## Structural and formatting changes

- **Order bullets by importance and credibility.** Put the strongest, most verifiable accomplishments first within each role.
- **Separate research outputs from projects if applying to academic or research-heavy positions.** Your working paper, under-review paper, seminar presentation, and open-source package deserve more visibility.
- **Avoid repeated accomplishments.** The order-book imbalance signal and 18-month Sharpe improvement currently appear to be duplicated.
- **Use consistent date and punctuation formatting.** Keep date ranges, separators, capitalization, and bullet punctuation uniform.
- **Check line wrapping in the final PDF.** Several bullets break awkwardly; make sure wrapped lines align cleanly and do not create excessive white space.
- **Add links selectively.** Link to the R package, working paper, code repository, and publications where public. Links make technical claims more credible.
- **Be careful with confidentiality.** Confirm that naming the “desk,” portfolio-manager approval, live allocation, returns, and internal project reuse complies with Northpeak’s policies.
- **Quantify responsibly.** Every performance metric should identify its benchmark, period, evaluation design, and cost treatment where relevant. This is especially important because your resume otherwise signals strong statistical awareness.

## Reviewer 3

Below is a line-by-line review, assuming you are targeting quantitative research or trading roles.

## Highest-priority issues

1. **Remove or correct the claim about choosing the best of 400 backtests and treating its Sharpe as expected live Sharpe.** This describes selection bias and backtest overfitting, not sound model validation.
2. **Correct the Monte Carlo random-seed statement.** Using the same seed on every worker can duplicate simulations and invalidate effective sample size.
3. **Resolve the repeated order-book imbalance result.** Nearly the same result appears under both Northpeak Capital and the Kaggle project, making ownership, provenance, and confidentiality unclear.
4. **Fix “econometircs.”** A typo in the final skills line is especially noticeable.
5. **Clarify how the two Northpeak performance claims differ.** The 35% improvement and the Sharpe increase from 1.1 to 1.5 may look like duplicate descriptions of the same work.

---

# Contact information

### Name
No change needed.

### Phone and email
No change needed if these are professional and active. If the details were anonymized for this review, use your real information in the submitted version.

### `example.com/code/mpatel`
Identify the destination type, such as a code portfolio or GitHub profile, and make sure it contains polished, relevant repositories. A generic-looking URL gives recruiters little reason to click it.

Consider adding LinkedIn only if it is complete and consistent with the resume.

---

# Education

### Ph.D. candidate line
- Confirm that you have formally advanced to candidacy; otherwise, use your institution’s accurate status.
- Use consistent date formatting and dash style throughout the resume.
- Consider adding your dissertation or research area, especially if it relates to financial econometrics, time series, or statistical learning. Your current line does not show your doctoral specialization beyond the broad degree name.
- Add GPA only if it is strong and meaningful.
- If relevant, include an advisor, fellowship, or major academic distinction.

### B.S. line
- No major issue.
- Consider adding honors or GPA if strong.
- Because both degrees are from the same university, you can reduce repeated institution and location information if space is tight.
- Relevant coursework is probably unnecessary given your Ph.D. status unless it fills a specific technical gap.

---

# Experience

## Sunrise Bakery

### Employer/title/date line
- Check the start date carefully. If the resume is being used before September 2025, this position cannot be marked “Present.”
- For a quant-focused resume, keep this role brief. It demonstrates leadership and operational responsibility, but it should not occupy space needed for research, publications, or technical work.
- Consider placing it after directly relevant experience regardless of strict chronology, provided the section organization remains clear.

### Opening-shift/team/budget bullet
- Keep the management scope and team size.
- Add a measurable budget outcome if you can substantiate one. Merely staying within budget is less distinctive than showing the degree of control or improvement.
- Change “labour” to “labor” if you are using U.S. English, as the location and other conventions suggest.
- Fix the awkward line wrapping in the final document.

### Stock-count/supplier-order bullet
- This is a strong operational bullet because it includes a clear before-and-after result.
- Clarify the measurement period if the 12% and 7% figures could have been seasonal or based on a short window.
- Make sure “unsold bread” was consistently defined and measured.
- Keep this bullet if retaining the role.

---

## Northpeak Capital

### Employer/title/date line
- This is your most relevant experience and should receive the most attention.
- If disclosure rules permit, add the asset class or desk context at the role level rather than making readers infer it from individual bullets.
- Confirm that all described work and metrics are permitted under confidentiality obligations.

### Cost-aware smoother / 35% bullet
- Specify what “risk-adjusted returns” means. It is too vague for a quantitative audience.
- Clarify the baseline against which the 35% improvement was measured.
- State whether the result was genuinely out of sample and after estimated transaction costs.
- Determine whether this is the same result as the later Sharpe increase. If so, consolidate or remove one; if not, distinguish the projects and evaluation periods clearly.
- Avoid implying causation beyond what the backtest supports.

### Six years of tick data / purged walk-forward bullet
- This is technically strong.
- Verify that the claim about every decision using only available information includes preprocessing, feature construction, universe selection, parameter tuning, and model selection—not merely train/test splitting.
- Add the number of folds or test windows only if it strengthens credibility without making the bullet too dense.
- Keep the embargo reference only if label overlap or a similar leakage mechanism actually required it.
- Reduce jargon if applying to mixed technical/nontechnical audiences, but retain it for quant research roles.

### Feature store bullet
- Confirm that “feature store” is accurate. If it was a research library, table, or pipeline rather than a governed production feature store, use the correct category.
- Clarify your ownership level if others helped design or productionize it.
- The reuse by two projects is valuable and should remain.
- If possible, quantify scale or efficiency impact rather than relying only on feature count.
- Ensure “point-in-time joins” were validated against revisions, timestamps, and late-arriving data.

### Presentation/live allocation bullet
- This is a strong business-impact bullet.
- If the allocation subsequently went live, update the bullet with the actual outcome rather than leaving it at approval.
- If it did not go live, make sure “approved” remains literally accurate and does not overstate a preliminary decision.
- Clarify whether “failure cases” were stress tests, regime limitations, or operational constraints if space permits.
- Avoid disclosing allocation details that are confidential.

### 400 configurations / best Sharpe bullet
- **This should not remain as written.**
- Selecting the best result from 400 backtests and treating that in-sample maximum as expected live performance is a textbook multiple-testing and selection-bias problem.
- Replace the underlying methodology before describing it: use nested or untouched validation, account for the search process, report uncertainty, and distinguish observed backtest Sharpe from expected live Sharpe.
- If this bullet is intended to show a lesson learned, that context is currently absent and recruiters will instead read it as poor research judgment.
- Do not simply soften the wording while preserving the same flawed inference.

### Order-book imbalance / Sharpe 1.1 to 1.5 bullet
- Resolve its apparent duplication with the Kaggle bullet.
- Explain internally whether this was a separate signal, the same signal, or work transferred from a personal project. Only include the claim where it truthfully belongs.
- Confirm that you are allowed to disclose the desk’s Sharpe and performance change.
- Eighteen months is a short evaluation period for a Sharpe claim, so include complementary evidence if available: number of observations, regimes, instruments, turnover, cost assumptions, or statistical uncertainty.
- Clarify whether the 1.1-to-1.5 comparison is incremental to an existing book, a standalone signal, or a combined portfolio.
- If this is the same work as the first Northpeak bullet, keep only the more defensible and specific result.

---

## Ridgeway University — Research Assistant

### Employer/title/date line
- No major issue.
- Because this role predates the stated Ph.D. start, make sure the title and affiliation accurately reflect your employment status at that time.
- If you held a different formal title, use the institution’s official one.

### Monte Carlo runtime / same seed bullet
- **Correct this immediately.**
- Using the same random seed on every worker commonly causes workers to generate identical random streams, reducing the effective number of independent runs and potentially invalidating the study.
- If you actually used independent, reproducible substreams derived from a master seed, describe that accurately.
- If the workers truly reused identical streams, rerun the study correctly before claiming the result.
- The runtime improvement is good, but scientific validity matters more than speed.

### Variance-bound/JASA bullet
- This is a strong research contribution.
- Verify that “tightens the previous bound by a log factor” is precise and supported by the manuscript.
- Make your contribution consistent with the paper’s authorship and contribution record; “my proof” can create concern if the work was collaborative.
- Include the paper in a separate Publications or Working Papers section, with full status and a link if publicly available.
- Do not imply JASA endorsement merely because the manuscript is under review there.
- Update the status promptly if it is rejected, revised, accepted, or submitted elsewhere.

### Teaching bullet
- Strong evidence of communication and teaching ability.
- Verify whether you taught the recitations independently or assisted the course instructor, and ensure the verb reflects your actual responsibility.
- Clarify the source and response basis of the 4.8/5 rating if it was based on a small number of respondents.
- Consider trimming this bullet if space is needed for publications or more relevant research work.

### R package bullet
- Strong and relevant.
- Add a repository or package link if the package is public and well maintained.
- Specify the source of the 3,000-download count and avoid combining mirrors or automated downloads unless that is standard for the platform.
- Mention your ownership or maintainer status if it is not clear.
- Consider adding testing, documentation, citations, or adoption metrics if stronger than raw downloads.

---

# Projects

## Volatility Forecasting Study

### Project/title/date line
- “Present” is reasonable only if the project is still actively maintained.
- If the work is effectively complete, use an end date.
- Consider moving this into a Research or Working Papers section because it appears more substantial than a typical project.
- Add a paper or repository link if public.

### HAR-RV/QLIKE bullet
- Strong and appropriately quantitative.
- Clarify how hyperparameters and model variants were selected so the 7% result is demonstrably out of sample.
- Specify whether 7% is an average across indices, pooled result, median, or another aggregation.
- Ensure the same data-cleaning and realized-volatility construction were used for both models.
- Consider reporting uncertainty or consistency across indices rather than only the aggregate improvement.
- Confirm that the comparison accounts for model complexity and tuning effort.

### Diebold-Mariano/Holm bullet
- Strong evidence of statistical discipline.
- Verify that the Diebold-Mariano implementation accounted for serial correlation and multi-step forecast overlap where applicable.
- Define the crisis periods elsewhere in the paper or supporting material; the phrase is too vague on its own.
- Clarify whether the Holm correction covered 30 tests, multiple horizons, multiple models, or a larger family of comparisons.
- Ensure “held at the 5% level” accurately reflects the corrected hypothesis-testing result.

### Working-paper/seminar bullet
- Good evidence of communication and completion.
- State the presentation date or paper status elsewhere if useful.
- Make clear whether the seminar was invited, selected, or a routine internal presentation; do not leave room for an inflated interpretation.
- Link the paper if public.
- If this is your strongest independent research, consider placing the working paper in a dedicated section and listing the presentation separately.

---

## Kaggle Market Prediction Competition

### Project/title/date line
- Add the competition’s exact public name and your final rank or percentile if respectable.
- Confirm that it was actually a Kaggle competition; a generic title without a link or placement is difficult to verify.
- State your individual responsibility within the team rather than relying only on “Team of 3.”

### Generic feature-engineering/model bullet
- This is too generic compared with the rest of the resume.
- Add concrete technical scope, individual contribution, or measurable outcome.
- If the next bullet already captures your main contribution, remove this one rather than retaining a weak summary.
- Avoid listing routine activities that almost every competition participant performed.

### Time-grouped folds/leakage bullet
- Good methodological content.
- Clarify the metric behind the 0.02 gap.
- Be careful with “cut validation leakage”: changing folds may reduce temporal leakage, but convergence between local and leaderboard scores alone does not prove leakage was eliminated.
- State whether the leaderboard comparison used the public or private leaderboard, since optimizing against the public board can itself introduce overfitting.
- Keep the emphasis on validation reliability.

### Futures-book/imbalance/Sharpe bullet
- **Resolve or remove this because it closely duplicates the Northpeak bullet.**
- It also appears disconnected from the stated Kaggle competition unless the competition specifically involved a futures portfolio and order-book data.
- Do not place employer-derived work under a personal competition project.
- Do not claim the same performance improvement in two settings.
- If this was genuinely separate work, document the distinct dataset, period, objective, and result, while checking for confidentiality and data-licensing restrictions.
- As currently presented, this duplication is likely to trigger credibility concerns during interviews.

---

# Skills

### Programming line
- Separate programming languages, libraries/frameworks, and infrastructure tools. Python and R are languages; PyTorch is a framework; Kafka is infrastructure.
- Only list Kafka if you can discuss architecture, producers/consumers, partitioning, delivery semantics, and operational use at the depth implied by the target role.
- Add core quantitative tools you genuinely use, particularly SQL, NumPy, pandas, scikit-learn, Git, Linux, cloud platforms, or distributed-computing tools, if applicable.
- Do not add tools merely for keyword coverage.
- Consider indicating proficiency only if the labels are defensible.

### Methods line
- Correct **“econometircs”** to **“econometrics.”**
- Use consistent capitalization.
- Consider adding methods already demonstrated in the resume, such as time-series cross-validation, market microstructure, Monte Carlo methods, volatility modeling, or causal/statistical inference, but only where you have real depth.
- “Gradient boosting” is narrower and more tool-like than the other categories; organize the list more coherently.
- Avoid an overly long keyword list. The experience bullets should remain the primary evidence of expertise.

---

# Formatting and organization

- Keep bullets on single logical lines in the source document; the current hard line breaks make the resume look copied from a narrow text field.
- Use one date style consistently, preferably with en dashes rather than hyphens.
- Use either U.S. or British spelling consistently; U.S. conventions are more natural given the listed locations.
- Consider adding sections for **Publications/Working Papers** and possibly **Open Source**. Your paper and package are stronger credentials than ordinary projects.
- For quant applications, a likely order is Education, Quantitative/Research Experience, Research or Publications, Projects, Additional Experience, and Skills.
- Keep the resume to one page if feasible for internships or early-career industry roles; two pages can be justified if you include substantive publications and research detail.
- Remove any claim you cannot explain technically, reproduce, or defend under detailed interview questioning.

The resume has strong raw material, especially the point-in-time validation work, open-source package, theoretical result, and volatility project. Its main risk is not lack of substance but **credibility damage from flawed validation statements, duplicated performance claims, and ambiguous metric attribution**.

## Reviewer 4

8 errors, 19 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> raised the desk book’s Sharpe ratio from 1.1 to 1.5

**Problem**
[Error] The résumé attributes the same order-book imbalance result to both the internship and competition entries.

**Why**
Northpeak reports a rise from 1.1 to 1.5 over 18 months out of sample, while the competition entry reports an added 0.4 over the same period. The matching signal, period, and improvement make the claims look duplicated and can cause a reader to question the accuracy of the accomplishments.

**How to change it**
Keep the result in only one entry, or distinguish the claims with [the different book, period, baseline, or experiment] so the figures cannot be mistaken for duplicated work.

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Northpeak Capital should lead the experience section, with Sunrise Bakery moved to Additional Experience or shortened substantially.

**Why**
The current lead entry makes the career appear to be moving from quantitative research into retail management. Leading with the relevant quantitative internship would establish the target direction before presenting the unrelated current role.

**How to change it**
Move the Northpeak Capital entry above Sunrise Bakery, then move Sunrise Bakery to an Additional Experience subsection or shorten it substantially.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The measurable labour-budget result is buried after the shift and team details.

**Why**
A scanning reader reaches the responsibility and team size before the outcome. The budget claim is also too vague to show how closely spending tracked the budget or what changed because of the work.

**How to change it**
Move the labour-budget result to the start of the bullet and replace or follow it with [weekly labour spend or variance against budget], if accurate; retain the team size only if it establishes useful scope.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Polish] “Ran” is imprecise for supplier orders.

**Why**
Orders are normally placed, managed, or coordinated, so “ran” leaves the responsibility unclear. A more precise verb will make the operational scope easier to understand.

**How to change it**
Replace “Ran” before “supplier orders” with “placed” or “managed,” if accurate; keep “Ran” only for the stock counts if needed.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement in risk-adjusted returns has no stated comparator.

**Why**
A quantitative reader cannot tell whether the figure is versus the original signal, an unsmoothed position, a benchmark, or another baseline. Without that comparison, the size and defensibility of the result are unclear.

**How to change it**
Replace or expand “by 35%” with [35% improvement in risk-adjusted returns versus the actual baseline].

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] The validation claim is too strong: purged walk-forward splits and an embargo period do not establish that every backtest decision used only information available at the time.
2. [Important] The validation method is presented without stating what result or research decision it produced.
3. [Important] The explanatory clause about information availability delays the technical validation point without adding a checkable result.

**Why**
1. Those techniques address temporal overlap and some label leakage, but they do not by themselves rule out leakage from feature construction, data revisions, universe selection, preprocessing, or later-informed choices. The absolute claim can therefore make a quantitative reader question the research controls rather than credit the validation design.
2. A hiring reader can see that the process was careful, but not whether it confirmed robustness, rejected the signal, supported deployment, or changed the research direction. The technical method therefore carries more weight than the outcome.
3. The purged splits and embargo period already identify the validation approach, while the absolute explanation overstates what those methods prove. Keeping the clause makes the bullet longer and invites scrutiny of an unsupported claim instead of highlighting the actual method.

**How to change it**
1. Replace that clause with wording that says the splits and embargo reduced temporal leakage, or add evidence that every input, transformation, and selection rule was point-in-time controlled.
2. Add [out-of-sample performance result, robustness finding, or decision the validation supported] after the validation method.
3. Cut the clause after “embargo period,” or replace it with a shorter, accurate statement that the methods reduced temporal leakage.

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The reuse clause is grammatically attached to the point-in-time joins rather than clearly to the feature store.

**Why**
A reader could interpret the sentence as saying the joins were reused, not the feature store. That weakens the evidence that the deliverable itself had continuing value.

**How to change it**
Move “reused in two later signal projects” so it immediately follows “feature store,” or replace “which” with a clause explicitly referring to the store.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The approval result is buried after the presentation details.

**Why**
The live-allocation approval is the strongest evidence of impact, but the bullet opens with the presentation activity. A reader scanning the internship section may miss the deployment consequence.

**How to change it**
Move the approval result to the beginning of the bullet and follow it with the presentation details; replace “small” with [allocation size, capital range, or risk budget], if disclosable.

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
1. [Error] Selecting the best Sharpe from 400 backtested configurations makes it selection-period performance, not an expected live Sharpe.
2. [Important] The reported Sharpe has no identified comparison or evaluation set supporting the live expectation.
3. [Important] The phrase about reporting the best Sharpe as the expected live Sharpe conflates a backtested result with a live expectation and obscures the intended action.
4. [Important] The parameter-selection process does not state what decision or outcome it enabled.

**Why**
1. Taking the maximum across many configurations creates selection bias and makes the reported Sharpe optimistically biased. It is not an unbiased live-performance estimate unless the selected configuration is evaluated on genuinely untouched data or the search is otherwise accounted for.
2. The 400 configurations establish search breadth, but the reader cannot tell whether the figure came from training data, an unseen period, or a benchmark. That distinction is essential to interpreting the measurement and its credibility.
3. A reader cannot tell whether the line describes a reporting error, a deployment decision, or a genuine live-performance forecast. The wording therefore makes the bullet difficult to interpret even before the selection bias is considered.
4. The reader sees an optimization task but not its consequence. Without a deployment decision, robustness finding, or out-of-sample result, the bullet adds process detail without showing why the selection mattered.

**How to change it**
1. Replace “expected live Sharpe” with “best selection-period Sharpe,” or report [selected configuration’s holdout Sharpe] only if it comes from an untouched holdout, nested validation, or another method accounting for the 400-way search.
2. Replace or expand the final clause with [selected configuration’s holdout Sharpe] versus [baseline or benchmark holdout Sharpe], if those facts are available.
3. Cut the phrase or replace it with a clear action and evaluation label, such as reporting the best selection-period Sharpe or using [selected configuration’s holdout Sharpe] for the live expectation if supported.
4. Add [deployment decision, robustness finding, or out-of-sample performance result] after the selection.

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The main Sharpe improvement is buried at the end of the bullet.

**Why**
The result is the strongest evidence of value, but the reader must first pass through the signal description and test period. Leading with the improvement would make the achievement easier to scan without adding words.

**How to change it**
Move the Sharpe improvement to the beginning of the bullet and place the signal description and test context after it.

> Improved risk-adjusted returns by 35%

**Problem**
[Error] The 35% performance claim and the selected Sharpe are not labelled consistently as achieved out-of-sample performance or selected backtest performance.

**Why**
One bullet sounds like an achieved return improvement, while another explicitly describes choosing the best result from 400 configurations. A reader cannot tell whether the 35% figure is also selection-biased or whether it was independently evaluated, which weakens trust in both claims.

**How to change it**
Label the 35% result with its actual comparator and evaluation status, and label the Sharpe as selection-period or holdout performance so both claims use the same performance terminology.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Error] The Monte Carlo method is invalid as written because every worker uses the same random seed.
2. [Polish] “Running the runs” repeats the same noun and makes the parallelization description indirect.

**Why**
1. Initializing every worker with the same seed normally produces identical or overlapping pseudorandom streams, so the nominal 2,000 runs may contain duplicate simulations rather than independent replicates. Parallel execution explains the runtime reduction, but not with independently valid Monte Carlo sampling under this seeding scheme.
2. The phrase draws attention to the wording instead of the computational method. A direct description would make the speed improvement easier to scan.

**How to change it**
1. Replace that phrase with “independent worker-specific random-number streams or nonoverlapping substreams derived from a master seed,” while retaining the 3-day-to-5-hour runtime result.
2. Replace “running the runs” with “executing simulations” or “running simulations,” subject to the corrected independent-stream description.

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The bullet uses a first-person pronoun and breaks the résumé’s impersonal style.

**Why**
“My proof” makes this line stylistically inconsistent with the other résumé bullets. It also adds ownership wording without changing the mathematical evidence.

**How to change it**
Replace “my proof” with “the proof” or remove the possessive before “tightens the previous bound.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] The 7% QLIKE improvement is ambiguous between a relative reduction and a percentage-point difference.

**Why**
A quantitative reader needs to know how the improvement was calculated before judging its size. Without that distinction, the figure can be interpreted in more than one way.

**How to change it**
Clarify the phrase as [7% relative reduction in QLIKE loss] or [7-percentage-point reduction], using the actual calculation.

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Error] The Diebold–Mariano tests across the 30 indices do not support the claim that the gain was significant in both crisis periods.
2. [Important] The two crisis periods are not identified.

**Why**
1. A full-sample DM test evaluates the average loss difference over the full evaluation period and cannot establish significance within specific subperiods. Separate crisis-period tests, with multiplicity correction covering those additional hypotheses, are required; correcting only the 30 index-level tests does not support the crisis-period claim.
2. A reader cannot assess the robustness claim if the periods cannot be located or distinguished. Naming them would make the subperiod comparison verifiable without adding much detail.

**How to change it**
1. Report only the Holm-adjusted result for 24 of 30 indices unless separate crisis-period tests were run with an appropriate correction; if they were, name that correction family.
2. Replace “both crisis periods” with [the names or date ranges of the two crisis periods], if accurate; otherwise remove the claim.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The competition modeling line states activity but no achievement or comparison.

**Why**
A reader can see that features were engineered and models trained, but cannot judge whether the work improved the submission or produced a competitive result. The heading already supplies the competition context, so the ending uses space without adding evidence.

**How to change it**
Cut the repeated competition context and add [competition placement, leaderboard percentile, score improvement, or final score] versus [the relevant baseline or field].

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 reduction cannot be attributed entirely to switching fold design without a controlled comparison.
2. [Important] The 0.02 gap does not identify the score or metric being compared.

**Why**
1. The change could also reflect sampling variation, model or feature changes, leaderboard noise, or temporal distribution shift. Time-grouped folds can reduce some temporal leakage, but they do not by themselves prove that the fold change caused the smaller gap.
2. The reader can see the before-and-after discrepancy but cannot tell whether 0.02 is large or small or what evaluation measure it uses. Naming the metric would make the comparison interpretable.

**How to change it**
1. If the comparison was controlled, say the switch was associated with or produced an observed 0.02 reduction; otherwise remove the causal attribution.
2. Add [evaluation metric] immediately before “scores,” if accurate, while retaining the 0.02 comparison.

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Error] The competition bullet appears to duplicate the internship’s order-book signal result.
2. [Important] “Added 0.4 to the Sharpe ratio” does not identify the baseline or whether 0.4 means ratio points or a relative increase.

**Why**
1. Both entries claim the same signal type, 18-month out-of-sample period, and 0.4 Sharpe improvement, even though the entries have different dates and contexts. A reader may therefore doubt whether the work was performed twice or whether one entry is taking credit for the other.
2. The reader cannot interpret the size of the improvement without knowing what the ratio was before the signal or what it was compared against. The unit of the change is also ambiguous.

**How to change it**
1. Credit the result in only the entry where the experiment was performed, or distinguish it with [the different baseline, period, book, or experiment].
2. Replace the phrase with [increased Sharpe from baseline to result] or add [baseline futures book, benchmark, or prior strategy] and specify whether 0.4 means ratio points or a relative increase.

> Added 0.4 to the Sharpe ratio

**Problem**
[Important] The competition project mixes a modeling workflow with a separate futures-signal result.

**Why**
The feature-engineering and gradient-boosting work belongs to the competition heading, while the order-book signal reads like a different research experiment. The combination makes the project appear unfocused and leaves the relationship between the two accomplishments unclear.

**How to change it**
Keep the competition modeling bullets under this entry and move the futures-signal result to the entry where it was actually performed, or distinguish it with [the different book, period, or experiment].

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled; the correct spelling is “econometrics.”

**Why**
The error is visible in the Methods skills list and can make the candidate appear less careful in a field where terminology matters. It also weakens keyword matching for the correctly spelled method.

**How to change it**
Replace “econometircs” with “econometrics.”

> Kafka

**Problem**
[Important] Kafka is listed under Programming without evidence of use elsewhere in the résumé.

**Why**
A reader cannot verify how Kafka was used or whether the skill is relevant to the candidate’s demonstrated work. The unsupported keyword can reduce confidence in the skills list.

**How to change it**
Add an entry showing [Kafka use and the related work], if accurate; otherwise remove Kafka from the skills list.
