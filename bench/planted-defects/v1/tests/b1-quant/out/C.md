Your resume has strong quantitative content and useful metrics, but credibility issues, duplication, vague jargon, and a few inconsistencies weaken it. The biggest priority is making every claim specific, believable, and easy for a quant recruiter to understand.

## Highest-priority changes

1. **Remove personal information**
   Delete:
   - Age
   - Marital status
   - “watching TV, video games”

   Age and marital status are not appropriate on a US resume and can create bias concerns. If you want an interests line, use specific, conversation-worthy interests only, such as “competitive chess, distance running, or game development.”

2. **Delete the duplicate validation bullet**
   These two internship bullets say the same thing:
   - “Validated the signal on 6 years…”
   - “Tested the signal on six years…”

   Keep one.

3. **Remove or substantially qualify the infrastructure claim**
   > “Single-handedly built the firm’s entire trading infrastructure…”

   This sounds implausible for a three-month internship and may undermine otherwise credible accomplishments. Replace it with a narrower, supportable statement, for example:

   > Built reusable backtesting and market-data components adopted by three research teams across equities, rates, and commodities.

   Only use that version if it is accurate.

4. **Fix the Kaggle dates**
   “Jun 2023 – Mar 2023” runs backward. Correct the start/end dates.

5. **Remove vague jargon and unexplained internal names**
   These bullets communicate little:
   - “Leveraged cutting-edge quantitative synergies…”
   - “Ported the VX-9 stack onto QRT under the Helix program…”

   Recruiters will not know those internal names. Describe the actual model, system, data, and result.

6. **Remove the duplicated order-book project**
   The Kaggle bullet repeats the same result as the Northpeak internship, including the 0.4 Sharpe improvement. If these are different projects, make the distinction explicit. If not, remove it from Projects. Repeating an accomplishment in unrelated contexts can create credibility concerns.

---

## Section-by-section recommendations

### Header

Use:

> Morgan Patel  
> (555) 010-4410 | morgan.patel@example.com | GitHub: example.com/code/mpatel | Metro City, USA

Label the portfolio link as GitHub, personal site, or code portfolio. Add LinkedIn if it is polished.

### Education

For a Ph.D. candidate, consider adding:
- Dissertation or research focus
- Advisor, if relevant and recognized
- Selected coursework only if highly relevant
- Publications in a separate section

Example:

> **Ridgeway University**, Metro City, USA  
> Ph.D. Candidate in Statistics, expected May 2026  
> Research: high-dimensional statistics, time-series modeling, and statistical learning

Use an en dash and consistent date formatting throughout: `Sep 2021 – May 2026`.

If the paper and R package are important, a **Research & Publications** section may showcase your academic profile better than burying them under a position that ended in 2022.

### Northpeak Capital

The first four substantive bullets are strong, but they can be tightened.

Suggested version:

- Developed a short-horizon order-book imbalance signal for liquid index futures that improved the desk portfolio’s backtested Sharpe ratio by 0.4 over an 18-month out-of-sample period after estimated transaction costs.
- Designed a cost-aware position smoother that reduced daily turnover from 34% to 21%, retained 90% of gross returns, and lowered estimated slippage by 33%.
- Evaluated the signal on six years of tick data using purged walk-forward validation and embargo periods to prevent look-ahead leakage.
- Documented backtest assumptions, transaction-cost methodology, and known failure regimes to support reproducibility and future research.

A few cautions:
- Make clear that the Sharpe result is **backtested**, not live.
- Be prepared to explain the transaction-cost model, splits, holding period, and definition of daily turnover.
- Ensure you are not disclosing confidential information.
- “Improved Sharpe by 0.4” is usually clearer than “added 0.4 Sharpe.”

### Graduate Research Assistant

This is strong overall. Consider splitting teaching into a separate title if you formally served as a teaching assistant.

Suggested edits:

- Built a reproducible simulation pipeline on a shared computing cluster, reducing runtime for a 2,000-run Monte Carlo study from three days to five hours.
- Derived a variance bound for a sparse regression estimator that improves the previous result by a logarithmic factor; incorporated into Section 3 of a manuscript under review at *JASA*.
- Developed an open-source R package for high-dimensional covariance estimation using shrinkage and factor models; reached 3,000 downloads in its first year.
- Led weekly graduate probability recitations for 60 students, authored 12 problem sets, and earned a 4.8/5 teaching rating.

If the paper is under review, list its title and coauthors in a Publications section. Do not imply acceptance.

### Volatility Forecasting Study

The current section never explains:
- What you forecasted
- Which models you used
- What baseline you beat
- What metric improved
- What the “30 indices” were

Replace the vague bullets with something like:

- Compared `[model names]` with GARCH and historical-volatility baselines for one-day-ahead volatility forecasting across 30 equity indices.
- Improved average `[QLIKE/RMSE]` by `[X%]` relative to the strongest baseline using a `[brief model description]`.
- Applied Diebold–Mariano tests across 30 indices; forecast improvements were significant at the 5% level for 24 indices and remained significant during two crisis periods.
- Built a reproducible PyTorch training and evaluation pipeline with rolling-window retraining and time-series cross-validation.

Use only claims you can support. “Cutting-edge,” “next-generation,” “synergies,” and “unlock alpha” should all be removed.

Also consider replacing “Present” with an expected completion date or adding a concrete output such as:
- Working paper
- GitHub repository
- Preprint
- Conference presentation

### Kaggle project

The first bullet is too generic:

> “Worked with various people on multiple aspects…”

Delete it or replace it with your specific contribution.

Potential version:

- Designed the team’s time-series validation framework, replacing random folds with time-grouped splits and reducing the gap between local validation and leaderboard performance by 0.02.
- Built `[specific model or feature pipeline]`, improving the team’s validation score by `[amount]`.
- Finished in the top `[X% or rank]` of `[number]` teams.

Include the rank only if it helps. Correct the dates and remove the duplicated internship signal.

### Skills

Reclassify the tools. Haskell is a programming language, not infrastructure.

Suggested format:

> **Languages:** Python, R, SQL, C++, Haskell  
> **ML/Statistics:** time-series econometrics, Bayesian inference, gradient boosting, PyTorch  
> **Data & Infrastructure:** Kubernetes, Kafka, Git, Linux, `[cloud/cluster tools if applicable]`

Additional guidance:
- “PyTorch” is a framework, not a method.
- List only technologies you could discuss comfortably in an interview.
- Consider adding specific Python libraries relevant to quant research: NumPy, pandas, scikit-learn, statsmodels, Polars, or similar.
- Add Git and Linux if you use them; quant roles commonly expect both.

## Formatting and positioning

- Keep the resume to **one page** if possible for internship/new-graduate recruiting.
- Use consistent capitalization, punctuation, and date formatting.
- Keep most bullets to one or two lines.
- Put the strongest result first in each role.
- Avoid first-person language and adjectives such as “cutting-edge” or “single-handedly.”
- Add a **Publications** section if you have a paper under review and an open-source package with meaningful adoption.
- Ensure the period from August 2022 onward is understandable. Since you remain a Ph.D. candidate, ongoing research can be shown under Education or a current research position.

## Recommended section order for quant roles

1. Education  
2. Quantitative Experience  
3. Research & Publications  
4. Selected Projects  
5. Technical Skills  

Overall, your best material is the Northpeak signal research, computational research pipeline, theoretical result, and R package. Remove the inflated or generic statements so those credible achievements stand out.