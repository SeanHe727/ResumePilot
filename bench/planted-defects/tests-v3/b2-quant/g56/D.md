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