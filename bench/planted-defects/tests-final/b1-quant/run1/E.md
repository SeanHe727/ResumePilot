## Overall assessment

The resume has strong evidence for quantitative research: a research internship with backtesting and transaction-cost work, statistical research, reproducible computing, and competitive project results. The main things to fix are **technical accuracy, overlapping claims, and clarity about what you personally did**—not a lack of accomplishments.

I’m treating this as a general review. The content points most strongly toward quantitative research roles, but the best ordering depends on your target. Since you provided pasted text, I can assess content and reading order only—not the original document’s layout or how it extracts from a file.

## Fix these first

1. **Correct the Sharpe-ratio annualization claim.** Multiplying a daily Sharpe ratio by 252 is not the usual annualization; under common assumptions, the factor is the square root of 252. Recheck the calculation and any reported Sharpe figures that depend on it before keeping this claim.
2. **Resolve the forecast-error arithmetic.** A reduction from 0.20 to 0.15 is 25% relative to 0.20, not 33%. Check whether the stated values, percentage, or definition of “improvement” is wrong.
3. **Remove or distinguish repeated project claims.** The forecasting project repeats the same model and 30-index evaluation across three bullets, and it overlaps with the internship’s HAR-RV comparison. Make clear which work is independent and keep only results that add distinct evidence.
4. **Clarify how strong the statistical and performance claims are.** Specify the comparison, evaluation period, metric, and test design where needed. A backtest result or significance test should not imply more certainty or live performance than it supports.
5. **Fix the typo in Skills** and tighten bullets that bundle unrelated responsibilities or make the action and result hard to connect.

## Line-by-line feedback

### Header

- **Phone, email, and code link:** Check that each is current, accessible, and appropriate to share publicly. The link should lead directly to work that supports the technical profile you want to present.

### Education

- **Ph.D. candidate in Statistics:** Keep the expected completion date accurate and update the status once the degree is awarded. If the degree is still in progress, retain wording that makes that clear.
- **B.S. in Mathematics:** This is clear as written. No material content change is needed.

### Experience

**Sunrise Bakery — Assistant Store Manager**

- **Opening shifts, team of six, and labour budget:** Clarify the scope of your responsibility and what “keeping the store within” the budget means. This is useful evidence of operational responsibility, but the outcome is currently broad and difficult to assess. If you are targeting quantitative research, consider giving this role less space than the directly relevant work while retaining it as current employment.
- **Stock counts, supplier orders, and unsold bread falling from 12% to 7%:** Define how unsold bread was measured and over what period. Make sure the comparison supports attributing the change to the work described, rather than implying causation from a before-and-after figure alone.

**Northpeak Capital — Quantitative Research Intern**

- **Order-book imbalance signal and Sharpe increase:** Clarify what the Sharpe ratio refers to (the signal or the desk book), the comparison behind the increase, and whether it is annualized. “Over 18 months of out-of-sample backtest” is important evidence; make sure the evaluation period and after-costs result are stated precisely and are consistent with how the Sharpe was calculated.
- **Turnover reduction and returns retained:** Specify the comparison used for “keeping 90% of gross returns” and how the one-third slippage reduction was estimated. Readers need to know which results are gross, which account for costs, and whether these are backtest estimates.
- **Forecast gain over nested HAR-RV baseline and Diebold–Mariano tests:** Clarify the forecast metric, horizon, and how results across 30 indices were assessed. Because the baseline is described as nested, verify that the test used is appropriate for that comparison. If many index-level tests were run, explain or account for multiple testing before describing the gain as confirmed.
- **“Joining 120 microstructure features…”:** The opening verb is grammatically inconsistent with the past-tense bullets around it. Also clarify your personal contribution, what “late prints” means to the intended audience, and what made the feature store reusable in the later projects.
- **Daily Sharpe annualized by multiplying by 252:** Recheck this calculation before including it. As written, it describes an incorrect standard annualization method and could undermine confidence in the surrounding quantitative work.
- **Backtest documentation and onboarding:** This is useful evidence of communication and research handoff. Clarify what the next cohort used and how you know it helped; otherwise, the claimed onboarding outcome may sound stronger than the evidence provided.

**Ridgeway University — Research Assistant**

- **Simulation pipeline and runtime reduction:** This is a strong, concrete result. If space permits, clarify what the 2,000 runs involved and whether the before-and-after runtimes were measured under comparable conditions.
- **Variance bound and paper under review:** Keep the paper’s status current and make your contribution and the significance of the “log factor” understandable to readers outside the specialty. Avoid letting “under review” read like a publication.
- **Teaching and rating:** The scope is clear. Add context for the 4.8/5 rating—such as the source or response count—if available, so readers can interpret it.
- **Package, cluster, reading group, and grading:** This bullet combines a software release, infrastructure work, and several academic duties, making the package’s result hard to follow. Separate or prioritize the distinct contributions. Clarify the basis for the 3,000-download figure and avoid implying that the download count measures use or impact beyond what it actually does.

### Projects

**Volatility Forecasting Study**

- **QLIKE result:** State enough about the evaluation to make the comparison interpretable, especially the test period and whether the model and baseline used the same data and evaluation setup. Make sure this project is clearly distinct from the internship work if the datasets, baseline, or analyses overlap.
- **Forecast error from 0.20 to 0.15, described as 33%:** Reconcile the numbers and percentage. Also define what “forecast error” measures; as presented, the percentage does not match the stated values under the usual relative-reduction calculation.
- **Directional hit rate from 52% to 58%:** Distinguish a six-percentage-point increase from a relative percentage increase. This also appears to repeat the same model and evaluation population as the QLIKE bullet. Keep it only if it contributes a distinct result, and clarify the metric and test setup.

**Kaggle Market Prediction Competition**

- **41st of 2,900 teams:** This is a clear, specific result; the top-2% description is consistent with the rank. Keep the competition outcome, and make sure the team contribution is represented accurately.
- **Time-grouped folds and “cut validation leakage”:** A smaller validation-to-leaderboard gap does not, by itself, prove leakage was reduced. Clarify what the 0.02 gap measures and what evidence supports calling the original problem leakage.
- **Permutation-importance script and reduction from 900 to 300 features:** This is a useful technical contribution. Clarify how the feature selection was kept separate from validation data; that matters especially given the preceding leakage claim.

### Skills

- **Programming:** Python, R, and PyTorch have supporting examples elsewhere in the resume. Kafka does not. Either add truthful evidence of how you used Kafka or consider whether it belongs in the list; an unsupported skill is not automatically false, but readers cannot assess its depth from this document.
- **Methods:** Correct the misspelling in “time-series econometircs.” The other methods are supported by the experience and projects, though the list alone does not communicate depth; keep it focused on methods you can discuss and substantiate.

## Presentation and targeting

The Experience section is already in reverse chronological order, and Education is prominent—reasonable choices for a quantitative research profile. Before applying, choose a target role and adjust the emphasis accordingly. For a quant-research target, the internship, statistical research, and forecasting evidence should carry more weight than general store operations. Also check all dates and “Present” wording against the version’s actual submission date.