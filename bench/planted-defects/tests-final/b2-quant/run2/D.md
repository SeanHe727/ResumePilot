# Résumé review

**Target role inferred from the résumé:** quantitative researcher / quantitative research intern, particularly in systematic strategies and financial time series. There’s no job description, so the keyword and fit assessment below is a role-based estimate—not a match against a specific employer’s requirements.

## Overall assessment

There’s strong, relevant material here: tick data, point-in-time joins, out-of-sample testing, costs, statistical tests, and measurable results. The main risk is not a lack of quant experience; it’s **credibility and clarity**. In particular, the claim about choosing the best of 400 configurations and treating its Sharpe as expected live Sharpe will raise serious questions. The repeated order-book signal claim and the identical-seed Monte Carlo detail could also undermine confidence.

Address those issues first. Then make the target role and your recent timeline easier to understand, and fix the skills typo.

## Highest-priority changes

1. **Resolve the 400-configuration / expected-live-Sharpe claim.** Selecting the best result from many configurations creates selection bias; that result is not, by itself, a sound estimate of live performance. Explain the evaluation safeguards and uncertainty, or remove the unsupported live-performance interpretation. This is the most important technical credibility issue.
2. **Reconcile the two order-book imbalance claims.** The Northpeak internship and Kaggle project both claim a signal tested over 18 months out of sample, with a Sharpe improvement. Clarify whether these are the same strategy, result, or work. As written, a reader could infer that one achievement has been presented twice or that the earlier project generated a later internship result.
3. **Fix the Monte Carlo random-stream description.** Using the same random seed on every worker can produce identical or correlated streams, invalidating the intended independent simulations. Verify what was actually done and describe the parallel random-number setup accurately.
4. **Make the target and timeline clear.** The current Assistant Store Manager role is the first experience entry and is outside the inferred target field. Keep it honest, but make clear how it fits alongside the Ph.D. and quant work, including whether it is part-time. Ensure the resume’s top section quickly signals the quant-research direction.
5. **Correct the typo** in the Methods skills list: “econometircs.”
6. **Replace placeholder contact details if they are literal.** The 555 phone number and `example.com` address look like sample data. If they are placeholders in this version, no issue; if not, use reliable contact information and a working portfolio link.

## Section-by-section review

### Header and education

- **There is no target-role headline or summary.** A reader has to infer your direction from the experience section. Add a concise positioning section that makes the quant-research focus and strongest relevant evidence apparent; don’t use it to repeat the experience bullets.
- **Ph.D. status and expected date are clear.** Keep the expected completion date current, and make sure it remains consistent with the experience timeline.
- **The education section is appropriately near the top** for a Ph.D. candidate applying to research roles.

### Sunrise Bakery — Assistant Store Manager

- **The role is recent and prominent, but not directly relevant to quant research.** Keep it if it reflects your current employment, while ensuring the resume gives more visual weight to your research qualifications.
- **The first bullet lists team size and budget responsibility, but the result is difficult to assess.** Specify what “within budget” means and how you measured it, if you have a concrete, supportable outcome.
- **The inventory bullet has a useful before-and-after metric.** Clarify the measurement period and whether the reduction was sustained, so the percentage has context.
- **Clarify how this work fits with your Ph.D. and research activities.** The current dates invite questions about workload and chronology.

### Northpeak Capital — Quantitative Research Intern

- **The 35% improvement claim needs a defined metric and comparison.** State what “risk-adjusted returns” refers to, what it was compared against, and how costs and evaluation period were handled. This may be related to the later Sharpe claim; if so, make the relationship unambiguous.
- **The validation bullet has strong methodological detail.** Keep the emphasis on point-in-time evaluation, but make sure the description of the splits and embargo is precise and defensible.
- **The feature-store bullet is relevant and shows reusable engineering work.** Add evidence of scope or impact only if you can support it; “reused in two later signal projects” is a good start.
- **The presentation and allocation bullet shows communication and decision impact.** Distinguish approval for a future allocation from a live deployment or realized performance. The current wording says approval occurred, not necessarily that the allocation was implemented.
- **The 400-configuration bullet is a major concern.** The best backtested configuration is not automatically an estimate of expected live Sharpe. Explain how you accounted for multiple testing, selection bias, and any final holdout—or remove the inference about live performance.
- **The final signal bullet is strong but buried.** Move the strongest, clearest quant result higher within the role. Also explain how it relates to the 35% result and the Kaggle signal claim below, if they are related.

### Ridgeway University — Research Assistant

- **The parallel-computing result is compelling, but the random-seed detail is alarming.** Identical seeds across workers can make Monte Carlo runs redundant or dependent. Verify the implementation and make the statistical validity clear.
- **The estimator result is technically valuable.** Preserve the distinction between your contribution and the paper’s status. Be ready to substantiate the “log factor” comparison and your role in the proof. “Under review at JASA” is appropriately qualified if that remains accurate.
- **The teaching bullet is credible but less relevant to quant research.** Keep it if space allows, especially if communication is important for the role; otherwise prioritize research, modeling, and software evidence.
- **The R package is a useful software and adoption signal.** Treat download counts as downloads, not as active users, and keep the timeframe attached to the figure.

### Projects

- **Volatility Forecasting Study is a strong project for the inferred target.** Preserve the baseline, out-of-sample result, and statistical testing. Make the data period and evaluation design easy to identify, and be prepared to explain how you handled dependence across the 30 indices and the crisis-period comparisons.
- **Label the working paper accurately.** A seminar presentation is useful evidence of research communication, but it is not a publication or peer-reviewed acceptance.
- **The Kaggle project’s first bullet is too generic.** It names activities but gives no result, competition standing, or specific contribution.
- **The leakage bullet needs a clearer interpretation.** A smaller gap between validation and leaderboard scores does not, on its own, establish that leakage was reduced. Explain what leakage you identified and how the change corrected it.
- **Reconcile the Kaggle Sharpe result with the Northpeak result.** The close match in signal, test duration, and metric makes the overlap especially noticeable. Clearly distinguish the work, ownership, and result—or avoid claiming the same achievement twice.

### Skills

- **Correct the spelling error** in “time-series econometircs.”
- **Connect listed skills to evidence where possible.** Kafka appears in the skills list but not in the experience or projects. Keep it if you can discuss substantive use; otherwise it may invite questions without helping your case.
- **Use the skills section to make relevant capabilities easy to scan.** The current Methods list is brief relative to the detailed evidence elsewhere; include only methods you can defend in an interview.

## Domain lens: quantitative research

### Likely reviewer

A quantitative researcher or portfolio manager would likely read this after an initial recruiter screen. They will care about valid backtests, selection bias, transaction costs, data leakage, and whether reported performance could survive implementation. The strongest evidence here is the mix of statistical research and financial-market work. The biggest concern is whether the performance claims were evaluated rigorously.

### Company context and uncertainty

“Northpeak Capital” is not enough to identify a specific company or strategy, and there is no job description. I’m not assuming a particular asset class, investment process, or technology stack beyond what your résumé states. Your vocabulary already signals systematic research; the improvement needed is mainly precision about performance evaluation and attribution.

### Role-based keyword scan

These are **proxy terms for quant research**, not extracted from a specific job posting:

| Term | Resume match |
|---|---|
| Quantitative research | Partial |
| Python | Yes |
| Statistical modeling | Partial |
| Time-series analysis | Yes |
| Futures | Yes |
| Market microstructure | Yes |
| Tick data | Yes |
| Point-in-time data | Yes |
| Walk-forward testing | Yes |
| Out-of-sample validation | Yes |
| Transaction costs | Yes |
| Sharpe ratio | Yes |
| Order-book imbalance | Yes |
| Feature engineering | Partial |
| Signal research | Yes |
| Portfolio construction | Absent |
| Capacity analysis | Yes |
| Execution or market impact | Absent |
| Production deployment | Partial |
| Data leakage controls | Yes |

The breadth is good for a quant-research résumé. The main improvement is to make the evaluation and performance claims more trustworthy—not to add keywords indiscriminately.

### Competitive position

- **Likely competing candidates:** graduate students or early-career researchers with direct quant internships, stronger evidence of live strategy work, or more extensive financial publications.
- **Your strengths:** Ph.D.-level statistics, rigorous time-series and statistical testing, practical futures and order-book work, and reusable data tooling.
- **Potential gaps versus direct-fit applicants:** limited clearly established live deployment or production performance, no publication listed as accepted, and uncertainty around the duplicate signal result and backtest selection process.

## Five-perspective read-through

### ATS / keyword scan

**Proxy coverage:** roughly 15–16 of 20 common quant-research terms are present or represented; this is not a genuine ATS match score without a job description. Strong coverage includes Python, futures, tick data, walk-forward testing, out-of-sample validation, costs, Sharpe, and order-book imbalance.

The most useful truthful additions would be terms for specific skills you already demonstrate but do not name explicitly. Don’t add portfolio construction, execution, or production claims unless your experience supports them.

### Recruiter glance — 10 seconds

**Verdict: Maybe.** The Ph.D. and quant internship provide credibility, but there is no brief target-role framing, and the most recent title is in retail management. The recruiter may wonder whether you are still pursuing quant research.

### HR screen — 30 seconds

**Verdict: Borderline to phone screen.** The education and internship look relevant. The unclear current-role context and absence of a concise summary make your trajectory harder to assess quickly.

### Hiring manager — 2 minutes

**Verdict: Maybe, with interview potential after clarification.**

1. They’ll notice strong research methods and specific market-data experience.
2. They’ll question the expected-live-Sharpe inference from selecting among 400 configurations.
3. They’ll look closely at whether the internship and Kaggle bullets describe overlapping work.

**Likely first interview question:** How did you control for selection bias when choosing among the 400 configurations, and what evidence supports the expected live performance?

### Technical reviewer — 10 minutes

**Truthfulness:** Cannot verify claims from the résumé alone. The selection-bias claim and random-seed description require immediate review.  
**Consistency:** The order-book signal appears in both the internship and Kaggle project, with similar test duration and performance framing. Clarify attribution and avoid double-counting.

## Scorecard

These scores assess the résumé as written for the **inferred** role; they are not calibrated to a specific job posting.

| Dimension | Score | Weight | Weighted | Notes |
|---|---:|---:|---:|---|
| ATS keyword match | 7/10 | 15% | 1.05 | Good role-related vocabulary; no JD to score against |
| Summary and positioning | 4/10 | 10% | 0.40 | No target-role framing or summary |
| Skills section | 5/10 | 10% | 0.50 | Relevant core skills, but typo and an unsubstantiated Kafka listing |
| Bullet quality | 6/10 | 25% | 1.50 | Strong metrics, offset by ambiguity and technical credibility risks |
| Publication evidence | 5/10 | 10% | 0.50 | Under-review paper and working paper, no accepted publication listed |
| Narrative coherence | 5.5/10 | 15% | 0.83 | Quant story is present but obscured by current unrelated role and repeated claim |
| Page fill and visual | 7/10 | 5% | 0.35 | Readable text structure; page layout cannot be assessed from plain text |
| Credibility signals | 5.5/10 | 10% | 0.55 | Strong metrics and research, but major validation questions |
| **Total** |  | **100%** | **5.68/10** | **Approximately 57/100** |

The score is dragged down by credibility and positioning issues, not by a lack of relevant experience. It could rise substantially if the performance-evaluation issues are resolved accurately.

## Interview likelihood

These are directional estimates, not application-specific predictions.

| Reader | Estimated likelihood | Main factor |
|---|---:|---|
| ATS | 65–80% pass on a typical quant-research keyword screen | Strong method and market terms; actual criteria unknown |
| Recruiter | 45% forward | Quant internship helps; current retail role needs context |
| HR | 50% phone screen | Ph.D. and relevant experience, but no clear positioning |
| Hiring manager | 35% interview | Relevant work, tempered by backtest and attribution concerns |
| Technical panel | 25% strong-positive assessment | Random-seed and selection-bias issues need defensible explanations |

**Ceiling estimate:** As written, approximately **57/100** under this rubric. Resolving the validation and attribution concerns, clarifying positioning, and fixing the skills section could plausibly move it into the **mid-70s**. The résumé alone can’t establish how much further it would go without a specific job description or evidence of live deployment.

## Interview bridge points

These are preparation topics, not suggested résumé wording.

| Resume topic | What to connect in an interview |
|---|---|
| Point-in-time feature store | How reliable historical data and leakage controls support repeatable signal research |
| Futures signal and cost-aware smoothing | How you tested whether a strategy’s apparent performance survives trading costs and position constraints |
| 400-configuration search | How you handled multiple testing, selection bias, and final out-of-sample evaluation |
| Volatility forecasting study | How statistical forecast evaluation can inform risk estimation, while distinguishing forecast accuracy from trading value |
| Sparse regression result | How theoretical guarantees and finite-sample behavior informed your modeling choices |
| Monte Carlo speedup | How you parallelized computation while preserving independent random streams and valid uncertainty estimates |
| Retail management | How you handled operational responsibility alongside research, while being clear about your current career direction |

**Verdict:** Fix the statistical-validation and duplicate-claim issues first. Then improve role positioning and clarify the current job’s context. The underlying quant-research experience is promising; the résumé needs to make its strongest claims easier to trust and its career direction easier to understand.