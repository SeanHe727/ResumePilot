# Résumé review

**Target role inferred from the résumé:** Quantitative researcher, especially systematic strategies, market microstructure, or volatility research. Without a job description, I can’t reliably assess company fit or calculate a true ATS match rate.

## Highest-priority changes

1. **Correct the Sharpe-ratio annualization claim.** Multiplying a daily Sharpe ratio by 252 is incorrect under the usual annualization convention; it is typically multiplied by the square root of 252. As written, this is a serious technical credibility issue. Recheck any annualized Sharpe figures derived from it.
2. **Reconcile the volatility error reduction.** A change from 0.20 to 0.15 is a **25% reduction** relative to 0.20, not 33%. Check the underlying figures and correct the percentage or the stated endpoints.
3. **Make the accomplishments auditable.** For unusually strong results—especially the Sharpe improvement, forecast results, and download count—ensure the résumé provides enough context to assess the comparison, evaluation period, and your contribution. These claims are likely to invite detailed questions.
4. **Fix the methods typo.** “econometircs” is misspelled. Correct it.
5. **Reduce duplication in the volatility project.** The first three bullets all describe performance of the same model or feature set. Make each bullet earn its space by communicating a distinct contribution or result, and clarify how the metrics relate.
6. **Clarify your paper’s status and contribution.** The under-review paper is a useful research signal, but the current bullet doesn’t say whether you are an author or what your contribution was. Make the authorship and submission status explicit, without implying publication.
7. **Separate the overloaded R-package bullet.** It combines a release, downloads, cluster maintenance, reading-group organization, and grading. The main achievement gets obscured, and the sentence makes it unclear what caused the download result. Give the strongest accomplishment priority and keep unrelated duties from diluting it.

## Bullet-by-bullet review

### Northpeak Capital — Quantitative Research Intern

- **Order-book signal and Sharpe result:** Keep this prominent, but verify the attribution and clarify the evaluation setup. A résumé reader may interpret “raised the desk book’s Sharpe” as evidence of a live trading result, while the bullet describes an out-of-sample backtest. Make the distinction unambiguous and be ready to explain costs, benchmark, and what “over 18 months” means.
- **Turnover and slippage:** The figures are compelling, but clarify that the return-retention and slippage comparisons use the same test period and a consistent cost model. Otherwise, the reader may not know what the 90% is relative to.
- **Diebold–Mariano tests:** This signals statistical care. Be prepared to explain the forecast comparison, the test setup, and how you handled testing across 30 indices. As written, the reader cannot tell whether you account for multiple comparisons or dependence across markets.
- **Feature store:** Fix the opening grammatical construction: as written, it makes the feature store sound like the thing doing the joining. Also clarify what the team reused and what your work contributed. Point-in-time data handling is particularly relevant for this target role, so don’t let the sentence’s grammar hide it.
- **Sharpe annualization:** Correct or remove this bullet before sending the résumé. The stated calculation is wrong, and its presence could make a reviewer question the other quantitative claims.
- **Research wiki:** This is useful evidence of documentation and knowledge transfer, but it is less differentiating than the research and data work above. Keep it only if there is room after stronger material; make sure the onboarding result is supportable.

### Ridgeway University — Research Assistant

- **Simulation pipeline:** “Owned” signals responsibility, but the bullet is broad and gives no evidence of what you improved or delivered. Add a concrete outcome if you have one; otherwise, consider whether this deserves space ahead of the more distinctive research and teaching evidence.
- **Variance bound and JASA submission:** Strong research evidence. Clarify your authorship and the paper’s submission status, and ensure the claim accurately describes the result. “Now Section 3” is less useful to an employer than your contribution and the finding itself.
- **Teaching:** The class size, number of problem sets, and rating make this concrete. Keep it if teaching is relevant to the roles you’ll apply for; for industry quant roles, it may be lower priority than research or engineering outcomes.
- **R package and lab duties:** This is too crowded to scan. Separate the package’s adoption from the operational and course duties, or choose the most relevant material. Also make sure the download count is attributable to the package and that the measurement period is clear.

### Volatility Forecasting Study

- **QLIKE result:** This is directly relevant to quantitative research. Add enough context for a reader to understand the evaluation and comparison, and make clear how this result differs from the following error-reduction claims.
- **Error reduction:** Recheck the percentage: 0.20 to 0.15 is a 25% reduction. Also state clearly which error measure those values refer to; “forecast error” is too nonspecific for a technical reader.
- **Directional hit rate:** Define what “directional” means for a volatility forecast. Without that explanation, a reviewer may question whether the measure is appropriate or whether it is measuring a different task. This bullet also repeats the same model and dataset context, so make its distinct value clear.

### Kaggle Market Prediction Competition

- **Placement:** Strong, easy-to-scan evidence. Identify the competition more precisely if its name or platform would help readers recognize it. Keep the distinction between the private leaderboard and overall placement accurate.
- **Validation leakage:** Good technical judgment. Clarify what the 0.02 gap measures and how the time-grouped folds addressed the leakage, if space allows.
- **Feature-selection script:** Useful implementation evidence, but it overlaps somewhat with the ensemble and feature-engineering result in the first bullet. Make the separate contribution apparent and verify that “without losing validation score” is supported by the comparison you performed.

## Sections and presentation

- **Add a short summary only if it helps establish your target.** The résumé currently leads with education and contains no explicit target-role framing. A concise summary could help a recruiter identify you as a quantitative researcher and connect the academic, trading, and forecasting work. Don’t use it to repeat the bullets.
- **Consider moving the strongest relevant experience ahead of education.** For a quant-research job, the Northpeak internship is likely to matter more than the degree details at first glance. The best ordering depends on the roles you’re targeting.
- **Expand the skills section selectively.** It is sparse relative to the projects and experience. Include only tools and methods you can discuss in detail. Kafka appears in skills but not in the experience or project bullets, so either show credible use elsewhere in the résumé or reconsider listing it.
- **Make skill names consistent and specific.** Correct the typo and check that the method labels accurately describe your experience. A short list is preferable to broad claims you cannot substantiate.
- **Add a publications section if the paper is a meaningful research credential.** The current mention is embedded in a bullet and gives no title, authorship, or full citation details. Keep its under-review status unmistakable.
- **Check date and status accuracy.** Confirm that the Ph.D. expected completion date is current and that the “candidate” designation remains accurate. The résumé doesn’t show a thesis topic or research area, which may be useful for research-focused applications.

## Reader-perspective snapshot

- **Recruiter:** Likely to see a strong quantitative profile, but the résumé doesn’t state a target role, and the education-first opening delays the most relevant industry signal.
- **Technical hiring manager:** Likely to notice the order-book work, statistical testing, and forecasting projects. The annualization error and inconsistent percentage are the biggest credibility risks.
- **Technical reviewer:** Likely to probe the backtest assumptions, statistical tests, authorship of the JASA submission, and the definitions behind the reported metrics.

## Overall assessment

This is a promising quant-research résumé with strong evidence across trading, statistics, and machine learning. Its main weakness is not a lack of accomplishments; it is **precision and credibility**. Fix the calculation errors first, make the strongest results easier to evaluate, and reduce crowded or repetitive bullets.

A job-specific ATS score, interview probability, and company vocabulary match can’t be assessed responsibly without a job description. I also can’t judge page layout or visual balance from the plain text provided.