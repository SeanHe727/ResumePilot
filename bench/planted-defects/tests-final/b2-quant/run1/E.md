## Overall assessment

This is a strong quantitative-research resume on substance: it shows research, careful validation, reusable tooling, and measurable results. The biggest fixes are **not stylistic**. A few claims need clearer definitions, and two methodological statements could undermine confidence in the rest of the work if left unexplained.

I’m reviewing the pasted text only, so I can’t assess the original layout or how a document parser would read it. You haven’t named a target role; the recommendations below are general, with a quant-research or statistical/ML-research role as the most evident direction from the experience shown.

## Highest-priority changes

1. **Fix or remove the claim that the best Sharpe from 400 configurations was reported as expected live Sharpe.** Selecting the best result from many backtests tends to overstate performance; that selected historical Sharpe is not, by itself, an expected live Sharpe. As written, this raises a substantive research-validity concern.
2. **Verify the Monte Carlo random-seed description.** Using the same seed on every worker can produce duplicate random streams if the workers run the same draws. If that happened, the parallel runs may not represent independent simulations. Make sure the description accurately reflects how independent streams were generated.
3. **Reconcile the order-book signal results.** A 0.4 Sharpe increase appears in both the internship and Kaggle sections, while the internship also reports a Sharpe increase from 1.1 to 1.5. Clarify whether these are the same signal, same backtest, and same contribution. If they are, the resume currently risks presenting one result as separate achievements.
4. **Make the performance claims interpretable.** Define what the 35% improvement means, what the 0.02 validation/leaderboard gap measures, and how the 7% QLIKE improvement was aggregated. Without that context, readers can’t judge what the numbers actually show.

## What to change and why

### Contact and education

- **Contact details:** If the `example.com` address and portfolio URL, or the phone number, are redactions for this review, no change is needed. If they are literal, replace them with usable contact information and a working portfolio link.
- **Ph.D. candidate and expected date:** Confirm the candidate status and expected May 2026 date are current for the version you submit. Update them if your status or completion timeline changes.
- **B.S. entry:** No material issue apparent. Keep dates and degree details consistent with your other application materials.

### Sunrise Bakery — Assistant Store Manager

- **Opening-shift/team/budget bullet:** Clarify whether you directly supervised the six employees or coordinated the shift, and whether you owned the labor budget or monitored performance against it. Those are different levels of responsibility. Since this is a current role, check that the past-tense verb fits the activity you still perform.
- **Stock-count/supplier-order bullet:** State the period and basis for the reduction from 12% to 7% if you can substantiate them. Readers need to know what “unsold bread” measures and whether the comparison uses comparable production periods.

The bakery role is valid experience, not something you need to hide. But if you’re targeting quant research, consider whether it should take the first position in the experience section or be separated from the most relevant experience. That is an emphasis decision, not a judgment about the job.

### Northpeak Capital — Quantitative Research Intern

- **35% risk-adjusted-returns bullet:** Identify what “risk-adjusted returns” means in this claim and the comparison behind the 35%. As written, it’s unclear whether this refers to Sharpe, another metric, or a particular test period. Also check whether it describes the same result as the later 1.1-to-1.5 Sharpe claim.
- **Six years of tick data / purged walk-forward bullet:** The validation details are useful. Check that the statement about every decision using only information available at the time is accurate for the data, universe, and testing process—not just the split design. Keep the distinction between a backtest result and a live result clear.
- **Feature-store bullet:** This is good evidence of reusable work. Clarify your individual contribution if the feature store was built collaboratively, and make sure “feature store” accurately describes what you implemented. The reuse in two later projects is valuable evidence of impact.
- **Portfolio-manager presentation / allocation bullet:** Preserve the distinction between **approval** and **deployment**. The current wording says an allocation was approved for a future quarter; it should not lead a reader to infer that the strategy was already running live or had live results. Update the status if deployment later occurred.
- **400 configurations / expected live Sharpe bullet:** This is the most urgent change. Do not present the highest result selected from 400 backtests as expected live performance. The selection process creates a material risk of overfitting. If you retain information about the parameter search, make sure its interpretation is methodologically sound and does not overstate what the backtest supports.
- **Order-book signal / 1.1-to-1.5 Sharpe bullet:** Clarify whether this is the same signal and result as the 35% claim or the Kaggle bullet. Specify what the 18-month out-of-sample period refers to, and keep “out-of-sample backtest” distinct from actual live performance. If these bullets describe overlapping work, avoid counting the same result as multiple independent achievements.

### Ridgeway University — Research Assistant

- **Monte Carlo speedup bullet:** Check the random-number setup before emphasizing the speedup. If every worker used the same seed and therefore repeated the same draws, the study’s effective number of independent simulations may be lower than stated. Describe the implementation accurately; don’t imply independent replications unless the random streams were independent.
- **Variance-bound / JASA bullet:** Keep the contribution, but make sure “my proof” accurately distinguishes your work from coauthors’ work. The “under review” status is time-sensitive; update it if the paper’s status changes. The technical claim is strong, so it should be precise and supportable.
- **Teaching bullet:** Clarify the basis for the 60-student figure if it could mean total enrollment across terms rather than one class. For the 4.8/5 rating, include evaluation context if available; otherwise readers may not know how many responses or which period the rating represents.
- **R package bullet:** State what the 3,000-download figure counts and where it came from, if you have that information. Downloads, installs, and unique users are not necessarily the same measure.

### Projects

**Volatility Forecasting Study**

- **7% QLIKE improvement bullet:** Explain the comparison basis—especially how results were aggregated across indices and what the evaluation period or forecast horizon was. The result is promising, but a reader needs enough context to interpret it.
- **Diebold–Mariano/Holm bullet:** This is useful evidence of statistical testing. Check that “held at the 5% level on 24” precisely describes the corrected test results. If “both crisis periods” matters to your claim, make clear what periods you mean.
- **Working-paper/seminar bullet:** Keep the presentation evidence. Make sure the paper’s current status is described accurately; don’t let “working paper” imply publication or formal acceptance.

**Kaggle Market Prediction Competition**

- **Feature/model bullet:** This is currently generic compared with the rest of the resume. Add the competition’s identifying details and your specific contribution or result if those are available. A team-of-three label alone doesn’t show what you personally did.
- **Validation-gap bullet:** Be cautious about calling the change a reduction in “leakage.” A smaller gap between local validation and leaderboard scores does not, by itself, establish that leakage was the cause or was fixed. Also identify what the 0.02 measures if you retain the number.
- **0.4 Sharpe bullet:** Resolve the overlap with the Northpeak order-book signal claims before keeping it. If it is the same signal or backtest, make the relationship clear so the resume doesn’t appear to count the result twice. If it is a separate result, make that distinction evident.

### Skills

- **“time-series econometircs”:** Correct the spelling. This is a visible typo in a section meant to establish technical credibility.
- **Kafka:** It appears only in the skills list. If you have relevant project or work evidence, make that experience visible; otherwise consider whether it belongs in the skills section.
- **Methods list:** The listed methods are broadly supported elsewhere in the resume. Keep the list focused on methods you can discuss in detail and have actually used, rather than treating it as a keyword inventory.

## Strengths to preserve

- The resume contains concrete evidence of research quality: time-aware validation, out-of-sample testing, statistical tests, and robustness work.
- Reusable technical contributions—the feature store and R package—show impact beyond a single analysis.
- The teaching and bakery work add evidence of communication, operational responsibility, and team coordination. Their prominence should depend on the role you’re targeting.

## Questions to resolve before submitting

- Are the Sharpe results in Northpeak and Kaggle separate analyses, or repeated descriptions of the same signal or backtest?
- What exactly is the 35% improvement, and what is its baseline?
- How were independent random streams handled in the Monte Carlo study?
- Was the small live allocation actually deployed, and are there live results you can report?
- What does the Kaggle 0.02 gap measure, and what evidence supports describing the issue as leakage?
- Which role are you targeting? That will determine whether the bakery role stays prominent and which research details deserve the most space.