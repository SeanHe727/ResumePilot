# Resume Review

## Overall assessment

This is a strong early-career quantitative-research resume. It already demonstrates the most important signals for systematic trading:

- Real buy-side experience
- Out-of-sample validation
- Transaction-cost awareness
- Point-in-time data handling
- Backtesting discipline
- Statistical testing
- Research-to-production thinking
- Quantified results

The main weaknesses are not lack of substance. They are **clarity, prioritization, credibility framing, and incomplete signaling of the target role**. The resume reads like a strong quant-research candidate, but it could make the intended role clearer within the first few seconds and reduce ambiguity around several impressive claims.

Assumed target role: **quantitative researcher / systematic trading researcher**, probably at a hedge fund, proprietary trading firm, or asset manager.

---

## Highest-priority changes

1. **Add a short professional summary or research profile.**  
   The resume currently begins with education, so the reader must infer whether you are targeting quant research, quantitative trading, financial machine learning, or academic statistics. A concise profile should establish the target function, markets or research area, core methods, and strongest credibility signal.

2. **Make the first Northpeak bullet more precise and defensible.**  
   The Sharpe improvement is the most important achievement on the page, but it currently leaves several questions unanswered: compared with what baseline, over what exact evaluation design, and whether the improvement belongs to the signal alone or the whole desk book. A hiring manager will investigate this claim immediately.

3. **Strengthen the skills section substantially.**  
   The current section is too short for a quant role and does not reflect the technical depth shown in the experience bullets. It should capture relevant data, research, statistical, engineering, and market-domain capabilities—but only those you can discuss fluently.

4. **Reorder bullets so each role starts with the strongest hiring signal.**  
   Northpeak is already strong, but the first bullet should be completely unambiguous. The university role currently begins with engineering work, while the mathematically strongest research contribution appears second. The order should reflect the target role.

5. **Clarify research status and ownership.**  
   The JASA paper, working paper, open-source package, seminar presentation, and live allocation are valuable credibility signals. Their status and your level of ownership should be unmistakable.

6. **Add a clearer market/data/tooling signal.**  
   The resume mentions Python, R, PyTorch, tick data, futures, realized volatility, and microstructure, but the skills section does not organize these into a coherent quant-research profile.

---

# Section-by-section review

## Header

### What to change

- Add a target-oriented descriptor near your name or in a short summary.
- Replace or supplement the generic code URL with a clearly labeled GitHub or portfolio link if it contains relevant, accessible work.
- Consider adding LinkedIn only if it is complete and consistent with the resume.
- If applying to trading firms, make sure the contact line does not consume disproportionate space.

### Why

The header currently identifies you but not your professional direction. A recruiter should immediately know that you are a statistics Ph.D. candidate with quantitative research and systematic trading experience—not simply a student.

The code URL is potentially useful, but an unlabeled domain creates uncertainty about whether it contains relevant projects, academic code, or an empty portfolio.

---

## Education

### Ridgeway University — Ph.D. candidate in Statistics

### What to change

- Add a dissertation or research-area descriptor if it is relevant to statistical learning, time series, financial econometrics, or high-dimensional statistics.
- Consider adding selected coursework only if it includes important missing signals such as stochastic processes, time-series analysis, optimization, numerical methods, or machine learning.
- Clarify whether the Ph.D. is expected to be completed before the likely start date of the role.
- If you have a strong GPA, comprehensive-exam result, fellowship, award, or relevant academic distinction, consider including one or two of these.

### Why

The degree is a strong credential, but “Statistics” alone does not tell a quant recruiter how your research maps to trading. The resume contains the relevant evidence elsewhere, but the education section could connect it more efficiently.

The expected completion date is especially important for full-time hiring. A recruiter may wonder whether you are seeking an internship, new-grad position, or post-Ph.D. research role.

### B.S. in Mathematics

### What to change

- Keep it, but reduce its visual prominence relative to the Ph.D.
- Add honors only if they are genuinely selective and relevant.
- Do not add older coursework unless you need to fill space or address a specific qualification.

### Why

The bachelor’s degree establishes mathematical preparation, but the Ph.D. and industry experience are much more important for the target role.

---

# Experience

## Northpeak Capital — Quantitative Research Intern

This is the strongest section and should occupy the most attention.

### Bullet 1: order-book imbalance signal and Sharpe improvement

### What to change

- Clarify the benchmark or baseline used for the Sharpe comparison.
- Clarify whether the result is attributable to your signal, a portfolio combination, or the desk book.
- Make the evaluation window and out-of-sample construction consistent with the later six-year-validation claim.
- State the relevant instrument universe or strategy scope if it can be disclosed.
- Make sure “after costs” uses the same transaction-cost assumptions described elsewhere.
- Consider whether “raised the desk book’s Sharpe ratio” overstates your attribution.

### Why

This is an excellent result, but the current wording creates credibility questions. A reviewer may ask:

- Was the Sharpe ratio measured before or after adding the signal?
- Was the comparison risk-adjusted for leverage and volatility targeting?
- Did the desk book already contain related signals?
- Was the 18-month period selected after research?
- Is the six-year validation independent of the 18-month performance period?

The more impressive the metric, the more carefully its experimental setup must be specified.

---

### Bullet 2: turnover reduction and slippage

### What to change

- Clarify whether the 90% figure refers to gross returns retained, expected alpha retained, or another quantity.
- Explain the denominator for the one-third slippage reduction.
- Ensure the turnover figures use a clearly defined measurement convention.
- Consider whether this bullet should appear immediately after the first one or after the validation bullet.

### Why

This bullet shows strong practical trading judgment. Its weakness is ambiguity rather than substance. “Keeping 90% of gross returns” could be interpreted in multiple ways, and “lowering estimated slippage by a third” needs a clear comparison point.

The bullet is particularly valuable because it differentiates you from candidates who only optimize predictive accuracy. Preserve it, but make the definitions precise.

---

### Bullet 3: tick data, purged walk-forward splits, and embargo period

### What to change

- Keep the bullet, but make its relationship to the reported performance result explicit.
- State whether the purging and embargo procedure was used for model selection, hyperparameter tuning, or final evaluation.
- If the method was implemented by you rather than merely used, make that ownership clear.
- Avoid presenting standard validation terms without explaining the specific leakage or dependency problem they addressed.

### Why

This is one of the strongest bullets for a quant-research audience. It signals that you understand temporal leakage and backtest contamination.

However, technical vocabulary alone is not enough. The reader should be able to see why the procedure mattered and which reported result it validates.

---

### Bullet 4: feature store and point-in-time joins

### What to change

- Add the engineering environment if relevant: database, orchestration, storage, or deployment tools.
- Clarify whether the feature store was used in production research, shared internally, or only used for experiments.
- Explain what “reused in two later signal projects” means in terms of adoption or workflow impact.
- Keep the 120-feature figure only if the count is meaningful and consistently defined.

### Why

This bullet shows platform-building ability and research infrastructure maturity. It is especially valuable for firms that expect researchers to own data and experimentation pipelines.

At present, it is good but slightly underspecified. The reader knows what you built, but not enough about its technical environment or operational significance.

---

### Bullet 5: presentation to portfolio managers and live allocation

### What to change

- Clarify your role in the presentation and approval process.
- Explain whether the allocation was paper, simulated, shadow, or live capital.
- If “next quarter” is now in the past, update the status or outcome if you have permission to do so.
- Avoid implying that approval alone proves production success.

### Why

This bullet is a valuable bridge between research and investment decision-making. It shows that you can communicate with portfolio managers and survive an investment review.

The current wording leaves the status of the allocation unresolved. A reader may wonder whether the allocation happened, whether it was actually traded, and what happened afterward.

---

### Bullet 6: research documentation and onboarding

### What to change

- Keep this only if you need evidence of documentation, collaboration, or research-process ownership.
- Move it lower within the role.
- Quantify the onboarding benefit only if you can do so reliably.
- Clarify whether the wiki was used by the full desk, the research team, or interns.

### Why

This is credible but less differentiated than the other Northpeak bullets. It is useful for demonstrating reproducibility and team contribution, but it should not compete visually with the signal, validation, and live-allocation achievements.

---

## Ridgeway University — Research Assistant

### Bullet 1: simulation pipeline and cluster runtime

### What to change

- Identify the type of cluster or compute environment if it is relevant and non-confidential.
- Clarify whether you designed the pipeline, optimized the code, parallelized the workload, or handled all three.
- Explain how reproducibility was enforced beyond recording seeds and configuration files.
- Consider moving this below the mathematical research bullet if applying primarily to quant research rather than quantitative engineering.

### Why

The runtime reduction is strong evidence of practical research engineering. The reproducibility detail is also highly relevant.

However, the current bullet combines performance improvement and reproducibility without indicating the technical mechanism. A quant hiring manager may want to know whether the improvement came from parallelism, vectorization, distributed computing, or workflow redesign.

---

### Bullet 2: variance bound and JASA submission

### What to change

- Clarify your authorship and ownership of the result.
- State the paper’s status consistently and conservatively.
- Explain what “tightens the previous bound by a log factor” means to the intended audience, but do not over-explain it.
- Consider placing this bullet first if targeting statistical research, quantitative modeling, or academically oriented quant teams.
- Ensure the publication status is not presented in a way that implies acceptance.

### Why

This is probably your strongest academic credibility signal. A technical reviewer will notice it immediately, but a recruiter may not understand its importance without a little context.

The phrase “it is now Section 3” is useful evidence of contribution, but the exact authorship and submission status should be unmistakable. Under-review work must remain clearly labeled as such.

---

### Bullet 3: teaching

### What to change

- Keep it only if applying to academic, research-heavy, or collaborative roles where communication matters.
- Move it below the research and engineering bullets.
- Retain the student count and rating if the rating is institutionally comparable and verifiable.
- Consider shortening its visual footprint if space is limited.

### Why

Teaching demonstrates communication and responsibility, but it is less relevant than your statistical research, software, and quantitative modeling work for a trading role.

---

### Bullet 4: open-source R package

### What to change

- Add a link to the package or repository.
- Clarify whether you were the sole author, primary maintainer, or a contributor.
- Explain whether the downloads are from a recognized package repository.
- Add evidence of adoption, citations, contributors, or usage only if available.
- Make the package’s relevance to your target role more apparent through its placement and surrounding content.

### Why

This is a distinctive achievement. It demonstrates that you can turn statistical work into a usable tool, and the download count provides external validation.

The main concern is that “downloaded 3,000 times” can be difficult to interpret without knowing the source and whether downloads represent distinct users. The claim is still useful, but its provenance should be clear.

---

# Projects

## Volatility Forecasting Study

This is a strong project and directly relevant to quant research.

### Bullet 1: QLIKE improvement across equity indices

### What to change

- Clarify the forecast horizon and data frequency.
- State whether the comparison used a fixed or rolling training scheme.
- Define whether the seven percent improvement is an average, median, or aggregate result across indices.
- Explain how the model was selected without contaminating the test set.
- Make clear whether the study is independent research, part of your dissertation, or related to a publication.

### Why

The result is relevant and well quantified, but the aggregation across 30 indices can hide variation. A technical reader will want to know whether the improvement is broad-based or driven by a small number of assets.

The project would be stronger if its experimental design were as rigorous and explicit as the Northpeak backtesting bullets.

---

### Bullet 2: Diebold–Mariano tests and Holm correction

### What to change

- Keep this bullet, but clarify the exact multiple-testing family and what the 5% result refers to.
- Define “both crisis periods” somewhere in the project description or supporting material.
- Verify that the testing procedure accounts for serial dependence and overlapping forecast errors where applicable.
- Avoid making the statistical significance claim sound stronger than the methodology supports.

### Why

This bullet demonstrates unusually good statistical discipline for a machine-learning project. It is a differentiator.

It also creates technical exposure: a reviewer may ask whether the Diebold–Mariano implementation used an appropriate variance estimator, whether the crisis periods were pre-specified, and whether the Holm correction was applied across all 30 indices and all tested variants.

---

### Bullet 3: working paper and seminar presentation

### What to change

- Add the paper’s status more explicitly: working paper, manuscript in preparation, or presented work.
- Include a link if the paper is publicly available.
- Clarify whether you presented the work yourself.
- Avoid allowing this bullet to sound like a publication claim.

### Why

The seminar presentation adds credibility and communication evidence, but the current wording leaves the research status somewhat vague. The resume should distinguish clearly between a working paper, a submitted paper, an accepted paper, and a presentation.

---

## Kaggle Market Prediction Competition

### What to change

- Keep this project only if you are early in your career or need additional evidence of modeling ability.
- Move it below the volatility study and avoid giving it equal visual weight.
- Clarify the competition’s market, prediction horizon, and evaluation metric if they are recognizable and relevant.
- Keep the leakage-related bullet, but make sure it does not imply that the final leaderboard result was produced using a contaminated process.
- Consider removing the third bullet if space is tight.

### Why

The top-two-percent result is a useful external benchmark, but professional research experience and statistically rigorous projects are more persuasive for quant hiring.

The strongest part of the project is not the leaderboard placement; it is the recognition and correction of temporal validation leakage. That is the aspect most aligned with professional quantitative research.

---

# Skills

## What to change

The current skills section is underdeveloped. Expand it into clearly named categories that reflect the evidence already present elsewhere, such as:

- Programming and numerical computing
- Statistical modeling and machine learning
- Time-series and financial econometrics
- Market data and backtesting
- Research engineering and data systems
- Collaboration or research tools, if relevant

Do not add tools merely because you have encountered them once. Include only technologies and methods you could defend in a technical interview.

### Why

The current skills list omits or obscures several important capabilities demonstrated in the resume:

- Tick-data research
- Order-book or microstructure modeling
- Backtesting
- Transaction-cost modeling
- Point-in-time data handling
- Walk-forward validation
- Statistical hypothesis testing
- Monte Carlo simulation
- High-dimensional covariance estimation
- Cluster computing
- Feature engineering
- Reproducible research
- Version control, databases, or cloud tools if applicable

The category names matter. “Methods” is useful but too broad; the resume should make it easy for both an ATS and a recruiter to identify the relevant skill families.

Also, “Python, R, PyTorch” is accurate but incomplete as a professional quant profile. Consider whether you have enough evidence to list relevant libraries, data tools, numerical methods, or research infrastructure.

---

# Narrative and ordering

## What works

The underlying narrative is strong:

1. Mathematical and statistical training
2. Research engineering
3. Statistical theory
4. Financial modeling
5. Professional systematic-trading research
6. Validation, implementation, and investment communication

## What to change

- Make the target role explicit before the education section.
- Give Northpeak the greatest visual emphasis.
- Order each position’s bullets by target-role value rather than chronology.
- Make the distinction between academic research, independent research, and professional investment research immediately visible.
- Consider whether “Projects” should become “Selected Quantitative Research” or remain as-is depending on how formal and publication-oriented the projects are. Choose one framing and use it consistently.

### Why

The content already supports a coherent quant-research story, but the reader currently has to assemble it. A stronger narrative would reduce the effort required to understand your positioning.

---

# Five-reader assessment

## ATS scan

Because there is no job description, an exact keyword-match rate cannot be calculated.

### Likely strengths

The resume contains many common quant-research terms:

- Quantitative research
- Order-book imbalance
- Index futures
- Sharpe ratio
- Out-of-sample backtesting
- Turnover
- Transaction costs
- Slippage
- Tick data
- Walk-forward validation
- Purged splits
- Embargo period
- Feature store
- Point-in-time joins
- Time-series econometrics
- High-dimensional statistics
- Gradient boosting
- PyTorch

### Likely missing or underrepresented terms

Depending on the job, you may need to make the following more visible if truthful:

- Statistical arbitrage
- Alpha research
- Portfolio construction
- Risk modeling
- Execution
- Market microstructure
- Signal research
- Research productionization
- Data engineering
- SQL
- C++
- Linux
- Git
- Docker
- Cloud or distributed computing
- Optimization
- Time-series forecasting

Do not add all of these automatically. The important change is to ensure the skills section and summary reflect capabilities already supported by the experience.

## Recruiter glance

**Verdict: Maybe to Forward**

The Northpeak internship, Sharpe improvement, Ph.D. candidacy, and competition result are compelling. The main problem is that the first glance begins with education and does not immediately state whether you are seeking quantitative research, quantitative trading, or a research-engineering role.

A recruiter will likely forward the resume if the posting clearly targets statistics, machine learning, or quant research. For a highly competitive trading role, the absence of an explicit profile and fuller technical skills section may reduce confidence.

## HR screen

**Verdict: Phone screen**

The resume demonstrates relevant experience, quantitative results, and advanced education. The likely questions would concern graduation timing, eligibility for full-time employment, and whether the Northpeak experience involved actual trading or only research.

## Hiring manager

**Verdict: Interview, with questions**

### Top observations

1. You understand leakage, costs, and out-of-sample evaluation.
2. You have both mathematical research and practical research-engineering experience.
3. You have communicated research to portfolio managers and built reusable infrastructure.

### Likely concerns

- Attribution and statistical significance of the Sharpe improvement
- The exact live status of the approved allocation
- Whether you can work with larger production systems
- Whether you have portfolio construction, risk, and execution experience beyond signal research
- Whether you have the software stack expected by the firm

### Predicted first interview question

A likely first question would focus on how the signal was evaluated and how you ruled out look-ahead bias, selection bias, and transaction-cost underestimation.

## Deep technical reviewer

**Verdict: Strong interest, but credibility checks required**

The resume uses appropriate technical language and gives enough detail to suggest genuine experience. However, the strongest numerical claims need careful definitions. The reviewer will likely probe:

- Baseline construction
- Backtest independence
- Parameter-selection procedure
- Cost assumptions
- Capacity methodology
- Multiple-testing control
- Data survivorship and revisions
- Whether “live allocation” means actual deployment

---

# Claim and consistency audit

| Claim area | Assessment | What to verify or clarify |
|---|---|---|
| Sharpe improvement | Strong but potentially ambiguous | Baseline, period, attribution, costs, volatility assumptions |
| Turnover reduction | Strong | Definition of turnover and comparison point |
| Retention of 90% of gross returns | Ambiguous | What return quantity is being retained |
| Slippage reduction | Strong | Baseline cost model and measurement |
| Six years of tick data | Strong | Data source, instrument universe, and relation to 18-month result |
| Feature store reused twice | Good | Internal adoption and technical environment |
| Live allocation | High-value but sensitive | Whether allocation occurred and whether it was live, simulated, or shadow |
| Runtime reduction | Strong | Technical cause of speedup |
| Variance-bound improvement | Strong academic signal | Authorship and review status |
| JASA under review | Valuable | Preserve “under review”; do not imply acceptance |
| Teaching rating | Useful but secondary | Confirm rating methodology |
| R package downloads | Distinctive | Repository/source and authorship |
| Volatility improvement | Strong | Aggregation method, forecast horizon, test protocol |
| Statistical significance | Strong but technical | Dependence treatment, testing family, pre-specification |
| Kaggle ranking | Useful but secondary | Competition metric and relevance |

---

# Scoring

| Dimension | Score | Notes |
|---|---:|---|
| ATS keyword coverage | 7/10 | Strong quant vocabulary, but no target-role profile and incomplete tooling keywords |
| Summary | 4/10 | No summary or immediate positioning statement |
| Skills section | 5.5/10 | Accurate but too sparse and not organized around quant-research capabilities |
| Bullet quality | 8.5/10 | Highly quantified and technically credible; several claims need sharper definitions |
| Publication/research selection | 7.5/10 | Strong work, but statuses and links could be clearer |
| Narrative coherence | 8/10 | Excellent underlying story, not yet surfaced quickly enough |
| Page and visual effectiveness | 7.5/10 | Likely clean, though the content may need prioritization if it exceeds two pages |
| Credibility signals | 8.5/10 | Strong results, research, software, and investment-facing evidence |

**Overall: 7.5–8.0/10**

This is a strong foundation. The largest gains will come from making the positioning explicit and tightening the interpretation of the most impressive claims—not from adding more achievements.

---

# Ranked changes

## Tier 1 — Do these first

1. **Add an explicit target-role summary or profile.**  
   This fixes the biggest first-impression problem.

2. **Clarify the Sharpe-ratio claim.**  
   Resolve baseline, attribution, evaluation period, and relationship to the six-year dataset.

3. **Expand and reorganize the skills section.**  
   Make the technical profile match the depth shown in the experience.

4. **Clarify live-allocation status.**  
   Distinguish approval, paper trading, shadow deployment, and actual live capital.

5. **Clarify research and publication statuses.**  
   Label the JASA manuscript, working paper, seminar presentation, and package appropriately.

6. **Reorder bullets by relevance.**  
   Put the most role-defining research, validation, and investment-impact evidence first in each section.

## Tier 2 — Important refinements

1. Add links to the package, paper, and relevant code.
2. Add market-data and research-engineering tools if you genuinely use them.
3. Clarify the experimental design of the volatility project.
4. Specify the technical mechanism behind the simulation speedup.
5. Reduce the prominence of teaching and Kaggle relative to professional research.
6. Add relevant Ph.D. research context or dissertation information.

## Tier 3 — Cosmetic

1. Standardize punctuation across bullets.
2. Ensure date formats and location formatting are consistent.
3. Avoid unnecessary first-person or passive phrasing.
4. Check that wrapped bullets do not create awkward single-word lines.
5. Keep all metric formatting consistent: percentages, ratios, time periods, and units.

---

# Interview bridge points

Use these connections when explaining your background verbally:

| Resume topic | What it demonstrates for quant research |
|---|---|
| Order-book signal | Ability to formulate predictive features from market microstructure data |
| Purged and embargoed validation | Understanding of temporal dependence and leakage in financial backtests |
| Cost-aware smoothing | Ability to optimize an alpha signal for implementation rather than just prediction |
| Point-in-time feature store | Awareness of data lineage, timestamp integrity, and reproducible research |
| Monte Carlo pipeline | Ability to build scalable and reproducible research infrastructure |
| Volatility forecasting study | Ability to compare models statistically across assets and regimes |
| Open-source covariance package | Ability to translate technical statistical work into reusable software |

The key is to explain that your strengths are not limited to one strategy or asset class. Your differentiator is the combination of **statistical rigor, financial-data awareness, implementation discipline, and reusable research engineering**.

## Bottom line

Do not add more content until you fix positioning and precision. The resume already has enough evidence for a strong quant-research application. Make the target role obvious at the top, make the largest claims technically unambiguous, expand the skills section to reflect your actual capabilities, and give the strongest professional research evidence more visual priority.