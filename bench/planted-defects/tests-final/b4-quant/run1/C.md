Your strongest material is the quantified research and trading work. The main fixes are **technical accuracy, clearer attribution, and removing details that could distract from your qualifications**. Below, I’m referring to each entry or bullet rather than rewriting any of them.

### Header and education
- **Contact line:** Check that the phone number, email, and code link are real, current, and lead to work you want reviewed. The displayed URL and phone number look like placeholders.
- **Date of birth and nationality:** Remove both from a U.S. resume unless an application specifically requires them. They do not establish your qualifications and can invite bias.
- **Ph.D. entry:** Keep the expected completion date current. If you have a relevant research area or dissertation topic, consider adding it so a reader can place your statistical work quickly.
- **B.S. entry:** No substantive change needed; check that its location and dates match your records.

### Experience
Put **Northpeak before the Research Assistant role**: your experience is currently out of reverse-chronological order.

**Research Assistant**
- **Simulation pipeline:** Specify the scale or consequence of the pipeline and reproducibility checks. “Other students relied on” signals responsibility but gives little sense of its impact.
- **Variance bound:** Clarify your contribution to the paper and preserve the distinction between *under review* and *published*. Make sure the log-factor comparison uses the same assumptions as the prior bound.
- **Teaching:** Confirm that the role, graduate-course level, problem-set count, and rating are accurate and attributable to this appointment. Otherwise, this strong bullet can raise timeline or ownership questions.
- **R package and other duties:** Separate the package’s measurable result from cluster maintenance, reading-group organization, and grading. Combining them obscures the package contribution and makes the download figure grammatically ambiguous.

**Northpeak Capital**
- **Sharpe improvement:** Identify whether 1.1 and 1.5 are annualized, how the 18-month out-of-sample period was constructed, and whether both figures use the same after-cost assumptions. Present this strictly as a backtest result, not realized desk performance; also confirm the figures are cleared for disclosure.
- **Turnover and slippage:** Define what “daily turnover” measures and distinguish estimated slippage from observed execution costs. Check that the 90% gross-return retention and one-third slippage reduction use consistent comparison periods.
- **Diebold–Mariano tests:** Recheck the test choice and claim. A standard Diebold–Mariano test can be inappropriate for nested forecasting models; use a comparison method suited to the models and loss function, and account for testing across 30 indices where relevant. Also make clear how this volatility-forecast comparison relates to the order-book internship work.
- **Feature store:** Fix the sentence’s construction so the data integration work and your ownership of the feature store are unambiguous. Retain the point-in-time and reuse details—they are valuable evidence of rigor and impact.
- **Sharpe annualization:** Correct the calculation before using any annualized Sharpe elsewhere. Multiplying a daily Sharpe by **252** is not the usual annualization; under the standard independence assumption, the factor is **√252**, with further care needed if returns are autocorrelated. This bullet currently undermines confidence in the other metrics.
- **Research wiki:** Keep it if you can substantiate the onboarding use; otherwise, focus on what was documented and why it mattered. It is useful evidence of handoff, but less important than the research results.

### Projects
**Volatility Forecasting Study**
- **QLIKE result:** State how the out-of-sample evaluation was set up and whether the 7% is an aggregate across indices or a particular result. That lets a reader assess the comparison.
- **Error reduction:** Correct the percentage: a drop from **0.20 to 0.15 is a 25% reduction**, not 33%. Name the error metric, and explain how this result differs from the QLIKE result.
- **Directional hit rate:** Change “6%” to **6 percentage points** for a move from 52% to 58%. Define the direction being predicted and, if you keep this metric, indicate whether the gain is robust across indices.

**Kaggle competition**
- **Placement:** The rank and “top 2%” agree; verify that the rank refers to the private leaderboard. This is a strong, clear result.
- **Validation leakage:** Be precise about what the time-grouped folds prevented. Closing a local-versus-leaderboard gap supports better validation alignment but does not, by itself, prove leakage was eliminated.
- **Feature selection:** Clarify that feature selection was performed within the validation procedure, if that is what happened. Otherwise, this bullet could unintentionally raise the same leakage concern as the preceding one.

### Skills
- **Methods:** Correct the typo in “econometircs.” Keep listed methods aligned with work you can discuss in an interview.
- **Programming:** Consider distinguishing languages from frameworks: PyTorch is a framework, not a programming language.