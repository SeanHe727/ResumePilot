## Overall assessment

You have strong evidence for quantitative research: time-series modeling, statistical testing, point-in-time data handling, and a research publication in progress. The main issue is not a lack of substance; it’s **credibility and clarity**. A few claims are ambiguous, one is methodologically concerning, and the same trading result appears in multiple places.

**Fit verdict: risky fit for quantitative research as written.** The technical profile is relevant, but a quant interviewer is likely to probe the backtest-selection claim and the repeated signal claims closely. I can’t assess fit for a particular role without a job description.

## Changes to make, by section

### Header

- **Phone, email, and website:** These look like placeholders. Replace them with real contact details and a working portfolio/code link, or remove the link if you don’t have a relevant one. A placeholder website can make the resume look unfinished.

### Education

- **Ph.D. candidate entry:** Keep the expected completion date current and consistent with your actual status. If you are still enrolled, the date is useful; if your status or expected date has changed, update it.
- **B.S. entry:** This is clear. No specific change needed.

### Experience

#### Sunrise Bakery — Assistant Store Manager

- **Opening shifts, team of six, and labour budget:** “Keeping the store within” the budget describes a responsibility, but not the result or your contribution. Add evidence of scope or impact if you have it; otherwise, consider whether this detail earns space on a quant-focused resume.
- **Stock counts, supplier orders, and unsold bread:** The 12% to 7% figure is useful, but the comparison is hard to evaluate without the time period, how “unsold bread” is calculated, and whether production or demand changed. Make sure the result can be attributed to your actions.

#### Northpeak Capital — Quantitative Research Intern

- **35% improvement in risk-adjusted returns:** Specify what “risk-adjusted returns” means and how the 35% was calculated. As written, it is difficult to compare with the Sharpe-ratio claims later in this section.
- **Six years of tick data and walk-forward validation:** This is a strong methodological detail. Be ready to explain the split design, embargo length, and how feature selection and parameter choices avoided leakage. The claim that every decision used only information available at the time is absolute, so make sure the entire research process—not only the final backtest—supports it.
- **Feature store for 120 features:** Clarify your individual contribution and what “reused” means. Be prepared to explain how the point-in-time joins handled timestamp alignment and whether this was a maintained system or a research pipeline.
- **Presentation and small live allocation:** Distinguish approval from an allocation actually being made, and an allocation from measured live performance. The current wording could be read as though the strategy was already running live.
- **Selecting parameters from 400 configurations and calling the best Sharpe “expected live Sharpe”:** This is the highest-risk claim. Selecting the best result among many configurations creates selection bias; the best backtested Sharpe is not, by itself, an estimate of live Sharpe. Revisit the claim and the methodology behind it. If you had a separate, untouched evaluation procedure, make that distinction clear; otherwise, this wording undermines confidence in the surrounding backtest results.
- **Order-book signal raising Sharpe from 1.1 to 1.5:** Define what the Sharpe figures measure, what baseline they compare, and whether the result is annualized and after which costs. This also appears to overlap with the Kaggle project’s signal and 18-month result. Explain whether these are the same work and make the ownership and timeline consistent; don’t present one result as separate accomplishments.

#### Ridgeway University — Research Assistant

- **Monte Carlo speedup and same seed on every worker:** The speedup is compelling, but the seed detail may raise a concern: identical seeds on workers can produce duplicate or correlated random streams, depending on the setup. Verify and describe the actual seeding approach accurately. If the runs were not statistically independent, don’t imply that the speedup preserved the original study’s validity.
- **Variance bound and paper under review:** Keep the distinction between your contribution and the paper’s status precise. Be prepared to explain the assumptions behind the comparison and what “tightens the previous bound by a log factor” means. “Under review” is appropriate only while that is still the paper’s status.
- **Teaching recitations:** This is clear and quantified. Keep it if teaching is relevant to the roles you’re targeting or if you have room; it is less central for many industry quant roles than your research results.
- **R package and 3,000 downloads:** Add a way to verify the package, if available, and make sure the download count’s source and time period are clear. Be ready to distinguish total downloads from unique users and to explain which parts you built.

### Projects

#### Volatility Forecasting Study

- **7% lower QLIKE loss on 30 indices:** Clarify how the 7% is aggregated across indices and the evaluation period. The comparison is meaningful only if the model and HAR-RV baseline use comparable data, tuning, and forecast protocols.
- **Diebold–Mariano tests and Holm correction:** This is useful evidence, but be prepared to explain the test setup, dependence assumptions, and how the crisis periods were defined. Make sure “held at the 5% level” accurately describes the corrected results across the indices.
- **Working paper and seminar presentation:** This is clear. Keep the paper’s status distinct from a publication or formal conference presentation.

#### Kaggle Market Prediction Competition

- **Feature engineering and gradient boosting:** This is too general to show what you contributed or how well the team performed. Include competition context or a verifiable result if you have it; otherwise, it takes space without adding much evidence.
- **“Cut validation leakage” by changing folds:** Changing to time-grouped folds may reduce leakage risk, but it doesn’t establish that leakage was actually removed. Explain what caused the original validation/leaderboard gap and what the 0.02 measures. Be careful not to imply that the leaderboard was a clean test set if it influenced model choices.
- **Order-book signal and 18-month result:** This appears to duplicate the Northpeak result. Resolve the provenance before keeping both claims: establish whether it was the same signal, developed at different times, and what contribution belongs to each experience. If they are separate, the resume needs to make that distinction clear; if not, repeating the result can look like double-counting.

### Skills

- **“time-series econometircs”:** Correct the spelling error. Typos in a skills section are especially noticeable because it is short.
- **Kafka:** Keep it only if you can discuss a concrete use of it; nothing else on the resume currently supports the claim.
- **Methods list:** The listed methods are relevant, but make sure each is specific enough for an interviewer to test and supported elsewhere in the resume.

## Fix these first

1. Resolve the repeated order-book signal and Sharpe claims across Northpeak and Kaggle.
2. Reassess the claim that the best of 400 backtests represents expected live Sharpe.
3. Define the return and Sharpe metrics, baselines, costs, and evaluation periods.
4. Check the parallel random-seed description for statistical correctness.
5. Replace placeholder contact details, fix the typo, and verify that every numerical claim has a defensible source.