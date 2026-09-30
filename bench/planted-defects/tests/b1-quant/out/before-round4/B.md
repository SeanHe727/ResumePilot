Your resume has strong quantitative experience and several impressive measurable results. The main issues are **credibility, redundancy, prioritization, and a few technical inaccuracies**.

## Highest-priority changes

### 1. Remove the incorrect Sharpe-ratio bullet

This bullet is wrong:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

A daily Sharpe ratio is generally annualized by multiplying by **√252**, not 252. More importantly, this bullet highlights a reporting error and could seriously damage your credibility. Delete it. If the desk actually received an incorrectly annualized number, correct the result elsewhere and do not present the mistake as an accomplishment.

### 2. Fix the technical typo and wording

- `time-series econometircs` → **time-series econometrics**
- `Joining 120 microstructure features point-in-time...` → likely **Joined 120 microstructure features point-in-time...**
- “added 0.4 Sharpe” should be clarified as **increased the strategy’s annualized Sharpe by 0.40** or **produced a 0.40 incremental Sharpe contribution**, depending on what you actually measured.
- “over 18 months of out-of-sample backtest” → **over an 18-month out-of-sample backtest**
- “keeping 90% of gross returns” is ambiguous. Say whether this means retaining 90% of the original signal’s gross P&L or return.

### 3. Resolve the duplicated and potentially inconsistent project claims

The volatility project has three bullets that overlap:

- Beat HAR-RV QLIKE loss by 7%
- Cut forecast error from 0.20 to 0.15
- Improved directional hit rate from 52% to 58%

These may all be valid, but the relationship between them is unclear. Also, reducing error from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement:

\[
(0.20 - 0.15)/0.20 = 25\%
\]

Use one consistent metric and explain the experiment. For example:

- **Reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices using a temporal convolutional network and realized-volatility features.**
- **Improved directional accuracy from 52% to 58% after adding an asymmetric loss function; results were evaluated using rolling, time-ordered validation.**

Only include the error reduction if the metric is clearly defined and genuinely distinct from QLIKE.

### 4. Make the resume target-specific

For quantitative research, quant trading, or ML roles, your strongest material is:

1. Northpeak Capital
2. Volatility Forecasting Study
3. Graduate research
4. Kaggle project
5. Education
6. Bakery experience, if space permits

The bakery role is not bad, but it is currently taking space from more relevant technical work. You could either:

- Move it to an **Additional Experience** section with one bullet, or
- Keep it only if you are applying broadly or want to explain current employment.

For a quant-focused resume, reduce it to:

> **Assistant Store Manager, Sunrise Bakery** — Managed opening operations and a six-person team; reduced unsold production from 12% to 7% through improved inventory tracking and ordering.

### 5. Improve the education section

Because you are a Ph.D. candidate, education should probably appear first for research and quant roles. Add relevant details if available:

- Dissertation or research area
- Advisor
- Expected graduation date
- Selected coursework, if useful
- GPA only if strong
- Publications, working papers, or conference presentations

For example:

> **Ph.D. Candidate, Statistics**, Ridgeway University — Expected May 2026  
> Research: statistical learning, high-dimensional inference, time-series modeling  
> Dissertation: “…”

Your JASA paper should ideally be listed in a separate **Publications / Research** section rather than buried in a bullet. Do not imply acceptance. Use wording such as:

> Patel, M. et al. “Paper Title.” Manuscript under review at *Journal of the American Statistical Association*.

Only include the journal name if the submission is real and you are an author.

## Experience section: suggested edits

### Northpeak Capital

This is the strongest section, but it should be more concise and precise. I would revise it to something like:

- **Developed a short-horizon order-book imbalance signal for liquid index futures that improved annualized out-of-sample Sharpe by 0.40 over an 18-month backtest after transaction costs.**
- **Reduced daily turnover from 34% to 21% using a cost-aware position smoother, retaining 90% of gross returns and reducing estimated slippage by one-third.**
- **Validated the signal against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices.**
- **Built a point-in-time feature store from 120 microstructure features across six venues, handling late-print deduplication and schema versioning; reused in two subsequent projects.**
- **Documented backtest assumptions, transaction-cost methodology, and known failure regimes for future researchers.**

Potential concern: “added 0.4 Sharpe to the desk’s book” is a very strong claim. Be prepared to explain exactly how it was calculated, including whether it is an incremental portfolio Sharpe, standalone Sharpe, or marginal contribution. If it is not strictly defensible, use more cautious language:

> Produced a 0.40 improvement in simulated annualized Sharpe relative to the desk’s existing signal specification.

### Graduate Research Assistant

This section contains excellent material but the final bullet combines too many unrelated responsibilities. Split it:

- **Built a reproducible cluster-based simulation pipeline, reducing a 2,000-run Monte Carlo study from three days to five hours.**
- **Derived a variance bound for a sparse regression estimator, tightening the prior result by a logarithmic factor; proof forms Section 3 of a manuscript under review at JASA.**
- **Released an open-source R package for high-dimensional covariance estimation, downloaded 3,000 times in its first year.**
- **Taught weekly recitations for 60 graduate probability students, writing 12 problem sets and earning a 4.8/5 teaching rating.**

Remove or separate this phrase unless it is important for the target role:

> while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses

It makes the bullet overcrowded and dilutes the stronger technical achievements.

## Projects section

The projects are relevant, but make the methodology more rigorous and avoid presenting every result as a separate “improvement.”

### Volatility Forecasting Study

Suggested version:

> **Volatility Forecasting Study** | Python, PyTorch | Jan 2024–Present  
> - Built a temporal convolutional model for realized-volatility forecasting across 30 equity indices; reduced out-of-sample QLIKE loss by 7% versus a HAR-RV benchmark.  
> - Used rolling time-series validation and an asymmetric loss function to improve directional accuracy from 52% to 58%.  
> - Evaluated robustness across forecast horizons, index groups, and alternative realized-volatility feature sets.

Only include the last bullet if you actually performed those analyses. It would strengthen the project substantially.

### Kaggle project

This is good, but “300 engineered features” and “900 candidate features” should be made consistent. Explain that 900 candidates were reduced to 300 final features:

- **Placed 41st of 2,900 teams, ranking in the top 2% of the private leaderboard, using a gradient-boosting ensemble.**
- **Reduced validation leakage by replacing random folds with time-grouped cross-validation, closing the local-validation/leaderboard gap from 0.02 to near zero.**
- **Reduced 900 candidate features to 300 using permutation importance without reducing validation performance.**

Be careful with the phrase “closed the gap” unless you can document that it actually closed rather than merely reduced it.

## Skills section

Correct and reorganize it:

> **Programming:** Python, R, SQL, C++, Kafka  
> **Machine Learning:** PyTorch, gradient boosting, sparse regression, feature selection  
> **Statistics / Econometrics:** Time-series econometrics, Bayesian inference, volatility modeling, high-dimensional inference  
> **Systems / Data:** Distributed computing, feature stores, point-in-time data pipelines, schema versioning

Only list Kafka, C++, or distributed computing if you can discuss specific projects using them. Skills sections are often tested in interviews.

## Formatting and presentation

- Use an actual GitHub or portfolio URL rather than `example.com/code/mpatel`.
- Add LinkedIn if relevant.
- Use en dashes consistently: `Jun 2025–Aug 2025`.
- Keep bullet formatting consistent; avoid manually wrapped lines that create awkward breaks.
- Use either periods on every bullet or no periods on any bullet.
- Consider removing “USA” from every location if all positions are in the same country.
- Put the most relevant section first. For quant or research applications, use:
  1. Education
  2. Research / Publications
  3. Relevant Experience
  4. Projects
  5. Additional Experience
  6. Skills
- Aim for two pages if necessary; do not force a Ph.D.-level resume onto one page at the expense of important research.

## Most important credibility checks

Before sending this resume, verify that you can explain:

- Exactly how the `+0.40 Sharpe` result was computed
- Whether all backtests were genuinely out-of-sample and point-in-time
- How transaction costs and slippage were modeled
- Why the QLIKE and error metrics tell different stories
- Whether “directional hit rate” is meaningful for your volatility target
- The precise meaning of “90% of gross returns”
- Your contribution and authorship status for the JASA manuscript

Overall, the resume has strong content. The biggest improvement would be to **remove the incorrect Sharpe bullet, reduce redundancy, separate research from administrative duties, and make every quantitative claim technically precise and defensible**.