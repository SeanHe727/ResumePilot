# case-3

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its
weekly labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of
production.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4
Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
- Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping
90% of gross returns and lowering estimated slippage by a third.
- Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano
tests across the 30 indices.
- Joining 120 microstructure features point-in-time across six venues, deduplicating late
prints and versioning each schema, built a feature store the team reused in two later
projects.
- Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to
the desk.
- Documented the backtest assumptions, transaction-cost model and known failure regimes in the
desk’s research wiki for future interns.
Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo
study from 3 days to 5 hours and making runs reproducible by seed.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous
bound by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets
and earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while
maintaining the lab’s shared cluster, organizing the weekly reading group and grading for
two courses, which was downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility
features and an asymmetric loss.
- Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with
a temporal convolutional model.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features,
finishing in the top 2% of the private leaderboard.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between
local validation and leaderboard scores.
- Wrote the team’s feature-selection script using permutation importance, trimming 900
candidate features to 300 without losing validation score.
SKILLS
Programming: Python, R, SQL, C++, Kafka
Methods: time-series econometircs, Bayesian inference, gradient boosting, PyTorch
```

## Reviewer 1

## Top priorities

1. **The daily Sharpe annualization uses the wrong scaling rule and weakens the credibility of the surrounding performance claims.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   Annualizing a daily Sharpe ratio assumes square-root-of-time scaling under the usual return assumptions, not direct multiplication by 252. A quantitative reader could therefore question the reported comparison with the 0.4 Sharpe improvement and treat the desk report as quantitatively unreliable.
   **Instead:** Annualize with the square root of 252, or remove the bullet
2. **The forecast-study results use inconsistent metrics and contain two quantitative ambiguities, including an incorrect percentage.**
   > Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
   “By 7%” does not say whether the QLIKE change is relative or absolute, while “forecast error” does not identify the metric, so the two performance claims cannot be compared cleanly. The change from 0.20 to 0.15 is a 25% reduction, not 33%, and 52% to 58% is a six-percentage-point increase; a technical reader who catches either error may question the other results.
   **Instead:** Name the error metrics, label the 7% as relative if accurate, say 25% reduction, and say 6 percentage points

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- **The bakery bullets need one operating measure and one decision mechanism to make the management impact checkable.**
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  > Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
  “Within budget” identifies the constraint but not the size or duration of the result, so a hiring manager cannot judge how far the store operated within target. The stock-count activity and bread reduction are strong, but the line does not show which ordering or production decision the candidate changed, leaving ownership of the improvement partly unproven.
  **Instead:** Add the budget variance or period, and name the inventory or ordering adjustment

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The 0.4 Sharpe contribution lacks the comparison needed to interpret its size.**
  > Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
  A quantitative reader cannot tell whether 0.4 is incremental Sharpe versus the existing desk book, a standalone signal Sharpe, or an attributed contribution. Those interpretations imply materially different performance, so the result is harder to assess than its precision suggests.
  **Instead:** State the desk-book baseline or attribution comparison
- **The 90% return-retention claim does not identify the return series being retained.**
  > Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.
  The reader cannot tell whether the smoothed signal retained 90% of the unsmoothed signal's gross returns, a benchmark's returns, or some other reference. Without that baseline, the turnover and slippage trade-off cannot be judged.
  **Instead:** Name the reference return for the 90% retention
- **The Diebold–Mariano result is too vague to connect the statistical test to the trading signal's practical improvement.**
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  The bullet does not say what was forecast, how large the gain was, or whether the test supported it, so the test name alone provides little evidence of economic value. It also leaves unclear whether HAR-RV was compared on realized-volatility forecasts or on the return forecast used by the signal.
  **Instead:** Name the forecast target, measured gain, and decisive test result
- **The feature-store bullet describes construction and reuse without showing what the later projects gained from it.**
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  Reuse establishes that the artifact survived beyond the original task, but it does not show whether it saved research time, improved data integrity, or enabled faster project setup. The dangling construction also makes the ownership of the work harder to read.
  **Instead:** State the single downstream benefit of reuse
- **The documentation bullet states what was written and who might use it, but not a demonstrated result.**
  > Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.
  “For future interns” describes intended audience rather than evidence that the wiki improved onboarding, prevented mistakes, or preserved research knowledge. Without reuse, onboarding, or error-reduction evidence, the bullet ends on context instead of measurable value.
  **Instead:** Replace the audience phrase with one measured reuse or onboarding result
- **The feature-store and documentation bullets repeat adjacent research-workflow support without showing distinct downstream value.**
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  > Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.
  Both bullets describe infrastructure or knowledge-preservation work, so ending the internship entry with them as separate achievements can make the research narrative feel diluted. A reader needs either one measurable consequence for each or a shorter combined support point.
  **Instead:** Combine or shorten them around distinct reuse outcomes

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The variance-bound bullet does not identify the estimator, comparison, or assumptions behind the claimed log-factor improvement.**
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  “By a log factor” could mean removing a logarithmic term, dividing the prior bound by one, or changing only part of the rate, and different sparse-regression estimators and targets produce materially different results. Without the old and new bounds and the key condition or target, a specialist cannot verify the contribution and a non-specialist may overread its scope.
  **Instead:** Name the estimator and target, state the old-versus-new bound, and replace “my proof” with “the proof”
- **The simulation bullet names the cluster but not the technical mechanism behind the runtime improvement.**
  > Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours and making runs reproducible by seed.
  A reader can see the three-day-to-five-hour result and reproducibility benefit, but cannot tell whether parallelization, scheduling, vectorization, or another implementation choice produced it. That omission makes the infrastructure achievement less technically assessable.
  **Instead:** Name the mechanism that produced the speedup
- **The package bullet names a topic and download count but not the implemented capability or the meaning of the adoption metric.**
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  Downloads show retrieval or attention, not what users could do with the package or what research outcome it enabled. The count may also include repeated downloads, and the surrounding cluster, reading-group, and grading duties dilute the package's central technical contribution.
  **Instead:** Name the estimator or capability, clarify the download metric, and separate or remove the unrelated duties

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The validation bullet overclaims what the fold change proved and leaves the gap's metric and time-safety details unspecified.**
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  Time-grouped folds can reduce temporal leakage without proving that every leakage source was eliminated or that the fold change alone closed the leaderboard discrepancy. Without the score metric, absolute-difference basis, and strictly chronological holdout detail, a technical reader cannot judge the 0.02 result.
  **Instead:** Describe the observed metric gap reduction and specify chronological time-held-out folds
- **The feature-selection result does not identify which validation performance was preserved relative to the 900-feature version.**
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  “Without losing validation score” could refer to any score or to a comparison that is not directly between the 300- and 900-feature models. Naming the metric and comparison would make the trimming result independently checkable.
  **Instead:** Name the metric and compare the 300-feature result with the 900-feature version
- **The competition bullet repeats the same ranking information in both absolute and percentile form.**
  > Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.
  The rank already gives a precise position with its denominator, while the top-2% statement communicates the same achievement less precisely. Keeping both spends space without adding evidence to the result.
  **Instead:** Keep the 41st-of-2,900 rank and remove the percentile

## Across the whole résumé

- **Sunrise Bakery should follow the quantitative and research work in a compressed Additional Experience section.**
  > Sunrise Bakery | Assistant Store Manager
  Leading with the bakery role makes the candidate appear to be moving away from quantitative work before the reader sees the stronger research evidence. Moving and compressing it preserves the management experience while making the intended career direction immediately clear.
  **Instead:** Move it after the research entries under Additional Experience
- **The Northpeak HAR-RV validation and Volatility Forecasting Study HAR-RV comparison appear duplicative unless their project relationship is made explicit.**
  > over the nested HAR-RV baseline
  Both entries describe an HAR-RV comparison across 30 indices, so a reader may think the same forecast result has been presented twice. That duplication weakens the narrative and makes it unclear which entry owns the result and which merely supports it.
  **Instead:** Identify the relationship and assign each result to the correct entry

## Lower priority (9)

- format, “Derived a variance bound for a…”: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- “Annualized the signal’s daily Sharpe ratio…”: "before reporting it to the desk" describes a reporting action but does not say what the corrected report changed or enabled. (and 1 more like it)
- “Built the lab’s simulation pipeline on…”: "Built the lab’s simulation pipeline on the shared cluster" identifies the setting but not the technical mechanism that produced the speedup.
- “Released an open-source R package for…”, Northpeak Capital, Ridgeway University: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" places several responsibilities alongside the package release without clarifying their separate ownership or results. (and 4 more like it)
- “Wrote the team’s feature-selection script using…”, “Cut validation leakage by switching to…”: "without losing validation score" does not specify which score was preserved or how the selected-feature result compared with the 900-feature version. (and 2 more like it)
- “Ran daily stock counts and supplier…”, “Built the lab’s simulation pipeline on…”, “Derived a variance bound for a…”, “Released an open-source R package for…”, “Cut the signal’s daily turnover from…”, “Confirmed the forecast gain over the…”, “Joining 120 microstructure features point-in-time across…”, “Beat a HAR-RV baseline’s out-of-sample QLIKE…”, “Cut forecast error from 0.20 to…”, “Improved the model’s directional hit rate…”: "Ran daily stock counts and supplier orders" uses an awkward verb-object pairing because orders are placed rather than run; change it to "Conducted daily stock counts and placed supplier orders." (and 15 more like it)
- SQL — no experience or project bullet shows SQL usage; either add a concrete example or remove it. (and 3 more like it)
- time-series econometircs — the skill is misspelled; it should be "time-series econometrics." The research entries suggest related work, but the misspelling still needs correction.
- Northpeak Capital, Volatility Forecasting Study: “Built a short-horizon order-book imbalance signal…” and “Confirmed the forecast gain over the…” repeat: Both describe validating the same forecasting signal against a benchmark; make the validation bullet explicitly support the headline signal result rather than presenting it as a separate achievement. (and 2 more like it)

## Reviewer 2

Your resume has strong quantitative content and unusually good use of metrics. The main problems are a serious Sharpe-ratio error, several numerical/wording inconsistencies, and prioritization that places the bakery role above your more relevant experience.

## Highest-priority corrections

### 1. Remove or correct the Sharpe annualization bullet

This is the most important issue:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252...

Under the usual independence assumption, daily Sharpe is annualized by multiplying by **√252**, not 252. For autocorrelated returns, use an appropriately adjusted calculation.

This bullet would be a major red flag for a quant reviewer. Delete it entirely and recompute any Sharpe figures that depended on that calculation.

### 2. Correct the project percentages

> Cut forecast error from 0.20 to 0.15, a 33% improvement

That is a **25% reduction**:  
\((0.20 - 0.15) / 0.20 = 25\%\)

> Improved directional hit rate by 6%, from 52% to 58%

That is an increase of **6 percentage points**, not 6%. The relative increase is approximately 11.5%.

### 3. Fix the typo

Change:

> time-series econometircs

to:

> time-series econometrics

### 4. Repair the malformed feature-store bullet

Current:

> Joining 120 microstructure features point-in-time across six venues... built a feature store...

Rewrite:

> Built a reusable point-in-time feature store by joining 120 microstructure features across six venues, deduplicating late prints, and versioning schemas; the team reused it in two subsequent projects.

### 5. Use US spelling consistently

Because the resume is set in the USA, change **“labour”** to **“labor.”**

---

## Reposition the experience

For quant roles, the bakery position should not be the first experience recruiters see. Consider splitting the section:

### QUANTITATIVE EXPERIENCE
- Northpeak Capital
- Ridgeway University

### ADDITIONAL EXPERIENCE
- Sunrise Bakery

This preserves your current employment and leadership experience without letting it overshadow your quant background. Keep the bakery role to one or two bullets.

---

## Tighten the Northpeak bullets

You have six bullets, but four strong bullets would be more effective. Also be precise about what “added 0.4 Sharpe to the desk’s book” means. If you only backtested a stand-alone signal, do not imply it was incorporated into the live portfolio.

Suggested version:

**Northpeak Capital | Quantitative Research Intern | Jun 2025–Aug 2025**
- Developed a short-horizon order-book imbalance signal for liquid index futures, improving net out-of-sample Sharpe by 0.4 over an 18-month walk-forward backtest after modeled transaction costs.
- Reduced daily turnover from 34% to 21% with a cost-aware position smoother while retaining 90% of gross returns and lowering estimated slippage by 33%.
- Built a reusable point-in-time feature store by joining 120 microstructure features across six venues, deduplicating late prints, and versioning schemas; the team reused it in two subsequent projects.
- Evaluated forecast performance against a HAR-RV baseline using Diebold–Mariano tests and documented backtest assumptions, transaction costs, and failure regimes.

A few cautions:

- Replace “walk-forward” with your actual validation design if different.
- Say whether the 0.4 improvement refers to stand-alone Sharpe, incremental portfolio Sharpe, or another measure.
- If you tested 30 instruments separately, be prepared to discuss multiple-testing corrections and cross-sectional dependence.
- Avoid disclosing confidential data, methods, or results that Northpeak has not approved.

---

## Consolidate the volatility project

The three bullets partly repeat the same result and create ambiguity about which model or feature set produced each improvement. One or two precise bullets would be stronger.

Suggested version:

**Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024–Present**
- Developed a temporal convolutional model for realized-volatility forecasting across 30 equity indices, reducing out-of-sample QLIKE loss by 7% relative to a HAR-RV baseline.
- Reduced forecast error from 0.20 to 0.15 and increased directional accuracy from 52% to 58% through realized-volatility features and an asymmetric loss function.

Only retain both QLIKE and “forecast error” if they are distinct metrics; otherwise, this appears duplicative. Name the second error metric—for example, RMSE or MAE—instead of saying “forecast error.”

Also, the project closely resembles the Northpeak work: both involve HAR-RV, 30 indices, and volatility forecasting. Make clear that the independent project uses public data and predates the internship, or reviewers may wonder about employer intellectual property.

---

## Improve the research-assistant entry

The final bullet combines too many unrelated responsibilities:

> Released an open-source R package... while maintaining the lab’s shared cluster, organizing the weekly reading group and grading...

Focus on the strongest result—the package—and omit lower-value administrative details if space is limited.

Suggested version:

**Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Jun 2020–Aug 2021**
- Built a reproducible cluster-based simulation pipeline, reducing runtime for a 2,000-run Monte Carlo study from three days to five hours.
- Derived a variance bound for a sparse regression estimator that improves the previous result by a logarithmic factor; the proof appears in Section 3 of a manuscript under review at *JASA*.
- Released an open-source R package for high-dimensional covariance estimation that received 3,000 downloads in its first year.
- Led weekly probability recitations for 60 graduate students, developed 12 problem sets, and earned a 4.8/5 teaching rating.

If the paper is public, add a **Selected Publications** or **Research** section with the title, coauthors, status, and link. Also be ready to explain why this position predates the start of your Ph.D.; the dates may prompt questions, though they are not inherently problematic.

---

## Refine the skills section

Kafka is not a programming language. Reorganize the section:

**Programming:** Python, R, SQL, C++  
**Libraries/Tools:** PyTorch, Kafka, Git, Linux  
**Methods:** Time-series econometrics, Bayesian inference, gradient boosting, statistical learning

Only list tools you can discuss comfortably in an interview. Add relevant libraries such as pandas, NumPy, scikit-learn, statsmodels, or Polars only if they strengthen your candidacy and you have room.

---

## Additional presentation changes

- Use en dashes consistently: `Sep 2021–Expected May 2026`.
- Capitalize consistently: `Ph.D. Candidate in Statistics`.
- Replace the generic code URL label with `GitHub: github.com/...` if that is what it is.
- If applying to quant research roles, include your dissertation topic, advisor, or selected publications.
- Keep bullets to roughly one or two lines where possible.
- Use either periods on every bullet or no periods; you currently use periods consistently, so retain that style.
- Aim for one page if possible, though two pages can be acceptable for a Ph.D. candidate with publications and substantive research.

## Overall assessment

The underlying profile is strong: Ph.D.-level statistics, a relevant quant internship, measurable research output, programming, and competition performance. Fixing the Sharpe calculation and percentage errors is essential. After that, the biggest improvement will come from putting quant experience first, reducing repetition, and making every metric statistically precise.

## Reviewer 3

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

## Reviewer 4

# Resume Review

## Overall assessment

You have strong raw material for **quantitative research, systematic trading, or quantitative developer roles**, especially:

- A Ph.D. in Statistics in progress
- Direct quant research internship experience
- Strong, quantified backtest results
- Time-series, volatility, machine learning, and market microstructure work
- Research and reproducibility experience
- A top-2% competition result
- An open-source package and paper under review

The main problem is **positioning**. The resume currently makes your most recent role—Assistant Store Manager—the most prominent item. A recruiter scanning for quant talent may initially see a retail operations candidate rather than a statistics Ph.D. with trading research experience.

Your biggest improvements should be:

1. Put quant/research experience before the bakery role.
2. Remove or fix the mathematically incorrect Sharpe-ratio bullet.
3. Add a concise summary and a more complete technical-skills section.
4. Clarify your Ph.D. research and current status.
5. Tighten several bullets to sound more precise and research-oriented.

---

## Likely reviewer perspective

### Recruiter glance

**Current verdict: Maybe**

The degree and Northpeak internship are credible, but the first role shown is Assistant Store Manager. That creates an immediate narrative problem:

> “Is this person currently pursuing quant research, or did they move into retail management?”

The answer may be obvious after reading the full resume, but recruiters often do not spend that long on the first pass.

### Hiring manager

**Likely verdict: Interview, if the resume is repositioned**

A quant hiring manager will notice the strongest parts:

- Order-book imbalance signal
- Out-of-sample testing after costs
- Turnover and slippage reduction
- Point-in-time feature engineering
- HAR-RV benchmark comparisons
- Statistical testing
- Cluster-based simulation infrastructure

They will also ask about:

- Whether the 0.4 Sharpe improvement was genuinely incremental and robust
- How transaction costs and market impact were modeled
- Whether the volatility models avoided look-ahead leakage
- Why you are currently working as an assistant store manager
- What your Ph.D. research is about and why it is not listed more prominently

---

# Highest-priority changes

## 1. Reorder the experience section

Do not lead with the bakery role. Use one of these structures:

### Preferred structure

```text
EDUCATION
RESEARCH AND QUANTITATIVE EXPERIENCE
Northpeak Capital
Ridgeway University, Statistical Learning Lab
SELECTED PROJECTS
ADDITIONAL EXPERIENCE
Sunrise Bakery
SKILLS
```

Alternatively, keep reverse chronology but create an **Additional Experience** section for Sunrise Bakery.

The bakery role should not be hidden, especially if it explains your current employment, but it should not define the top of the resume.

You could reduce it to one bullet:

```text
- Managed opening operations and a six-person team while maintaining weekly labor and inventory budgets; reduced unsold production from 12% to 7%.
```

The second bullet is more useful than the first because it contains a measurable operational result.

---

## 2. Delete the Sharpe-ratio bullet immediately

This bullet is mathematically incorrect:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

Annualizing a Sharpe ratio normally uses:

\[
\text{Annualized Sharpe} = \text{Daily Sharpe} \times \sqrt{252}
\]

Multiplying by 252 is a serious credibility problem for a statistics/quantitative research candidate. It could cause a technical reviewer to question the rest of the backtest.

If this was an actual mistake in the analysis, do not try to preserve it. Remove the bullet. If the intended statement was different, replace it with an accurate version, such as:

```text
- Standardized daily-to-annual performance reporting using a 252-trading-day convention and square-root-of-time Sharpe annualization.
```

Only use that replacement if it is factually true.

---

## 3. Add a summary

Your first page needs to immediately identify you as a quant researcher. For example:

```text
Statistics Ph.D. candidate with quantitative research experience in market microstructure, volatility forecasting, time-series modeling, and statistical learning. Built and evaluated transaction-cost-aware signals for liquid index futures, including point-in-time feature pipelines and out-of-sample validation across 30 indices. Proficient in Python, R, SQL, PyTorch, and statistical modeling.
```

Avoid saying “expert” or making claims that are not supported by the rest of the resume.

---

## 4. Clarify the Ph.D. research story

Your education says:

> Ph.D. candidate in Statistics

But the research experience ends in August 2021, immediately before the Ph.D. began. The reader may wonder what you have done during the Ph.D.

Add a current research entry or a brief dissertation line if truthful:

```text
Ridgeway University | Ph.D. Candidate in Statistics
Sep 2021 – Expected May 2026
- Research focus: statistical learning, high-dimensional inference, volatility forecasting, and time-series methods.
- Dissertation work examines [specific problem], using [methods] to [research objective].
```

Do not invent a dissertation topic. But some explanation of your current research is essential.

If the Volatility Forecasting Study is part of your doctoral work, label it accordingly rather than making it appear disconnected:

```text
Volatility Forecasting Study | Doctoral Research Project
```

---

# Bullet-level recommendations

## Northpeak Capital

This is the strongest section and should be near the top. Several bullets can be made more precise.

### Current

> Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.

### Suggested

```text
- Developed a short-horizon order-book imbalance signal for liquid index futures that improved the desk portfolio’s out-of-sample Sharpe by 0.40 over an 18-month backtest after transaction costs.
```

Be careful with “improved the desk portfolio’s Sharpe.” If you mean the standalone signal’s Sharpe, say that instead. The distinction matters.

Possible alternatives:

```text
- Developed a short-horizon order-book imbalance signal for liquid index futures with a 0.40 out-of-sample Sharpe contribution over 18 months after transaction costs.
```

Use the version that accurately reflects the analysis.

### Current

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

### Suggested

```text
- Reduced signal turnover from 34% to 21% using a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by one-third.
```

This is already strong; it mainly needs tightening.

### Current

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

### Suggested

```text
- Compared forecast errors against a nested HAR-RV benchmark across 30 indices using Diebold–Mariano tests; report statistical significance or confidence levels if available.
```

The current version says you used the test but not what it showed. Add the result if you can:

```text
- Confirmed lower forecast loss than the nested HAR-RV baseline across 30 indices using Diebold–Mariano tests, with significance at [threshold] for [number] indices.
```

Do not add a significance claim unless you have the underlying results.

### Current

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

Problems:

- “Joining” is probably a typo or grammatical error.
- The sentence is awkward.
- “Point-in-time” should be connected clearly to avoiding look-ahead bias.

### Suggested

```text
- Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted in two subsequent projects.
```

If the feature store explicitly prevented look-ahead bias, say so:

```text
- Built a point-in-time feature store for 120 microstructure features across six venues, deduplicating late prints and versioning schemas to prevent look-ahead leakage; reused in two subsequent projects.
```

### Current

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.

### Suggested

```text
- Documented backtest assumptions, transaction-cost modeling, validation procedures, and known failure regimes in the desk research wiki.
```

This is useful, but it should come after the technical achievements.

---

## Ridgeway University research experience

These are good bullets, but the section currently looks like an old job rather than part of your ongoing academic profile.

### Current

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours and making runs reproducible by seed.

### Suggested

```text
- Built a reproducible cluster-based simulation pipeline that reduced a 2,000-run Monte Carlo study from 3 days to 5 hours through parallel execution and seed-controlled experiments.
```

Only mention parallel execution if that is what produced the speedup.

### Current

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

### Suggested

```text
- Derived a variance bound for a sparse regression estimator that improves the prior bound by a logarithmic factor; result appears in Section 3 of a manuscript under review at the Journal of the American Statistical Association.
```

This is a strong research bullet. “My proof” is less formal than “derived” or “established.”

### Current

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

This combines too many unrelated achievements.

Split it:

```text
- Released an open-source R package for high-dimensional covariance estimation, downloaded 3,000 times in its first year.
- Maintained the lab’s shared cluster and organized its weekly statistical learning reading group.
```

You can omit the grading responsibility unless teaching is important for the target role.

---

# Projects

The projects are relevant, but the first project repeats itself.

You currently say:

- Beat HAR-RV QLIKE loss by 7%
- Cut forecast error from 0.20 to 0.15
- Improved directional hit rate by 6%

All three bullets mention the same model and dataset. Keep two or three only if they demonstrate distinct skills.

Suggested revision:

```text
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 – Present
- Developed a temporal convolutional model for realized-volatility forecasting, reducing out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices.
- Reduced forecast error from 0.20 to 0.15 and improved directional hit rate from 52% to 58% using realized-volatility features and an asymmetric loss.
- Evaluated robustness across rolling time splits and documented feature availability to avoid look-ahead bias.
```

Only include the third bullet if you actually performed those checks. For quant roles, validation methodology is often more valuable than another performance metric.

Also clarify what “forecast error” means. Is it RMSE, MAE, or another metric? Use the exact metric:

```text
- Reduced out-of-sample RMSE from 0.20 to 0.15...
```

Do not call two different metrics “forecast error” without naming them.

---

## Kaggle project

This is strong and should probably remain.

Suggested revision:

```text
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 – Jun 2023
- Placed 41st of 2,900 teams—top 2%—using a gradient-boosting ensemble over 300 engineered features.
- Eliminated a 0.02 local-validation/leaderboard gap by switching to time-grouped cross-validation, reducing validation leakage.
- Built a permutation-importance feature-selection pipeline that reduced 900 candidate features to 300 without lowering validation performance.
```

“Closed the gap” can sound like optimizing to the leaderboard. “Reduced validation leakage” is clearer.

---

# Skills section

There is a typo:

> time-series econometircs

Correct it to:

> time-series econometrics

Your skills section is too short for a quant resume and the categories could be stronger.

Possible structure:

```text
Programming: Python, R, SQL, C++
Machine Learning: PyTorch, gradient boosting, feature selection, temporal convolutional networks
Statistics: Time-series econometrics, volatility modeling, Bayesian inference, statistical learning, high-dimensional inference
Quantitative Finance: Market microstructure, order-book signals, transaction-cost modeling, backtesting, realized volatility
Data/Infrastructure: Kafka, Linux, Git, distributed computing, reproducible simulation
```

Only include tools you can discuss technically in an interview. If you used NumPy, pandas, scikit-learn, Jupyter, Docker, Git, Linux, or a cloud platform, include them. For quant roles, omitting common implementation tools can make the technical profile look incomplete.

Also consider replacing “Methods” with “Statistical Modeling” or “Quantitative Methods.” Category names themselves help communicate fit.

---

# Publications and research output

The under-review JASA manuscript is a major credibility signal, but it is buried inside a bullet. Add a small publications section:

```text
PUBLICATIONS
Patel, M. et al. “[Paper title].” Under review at the Journal of the American Statistical Association.
```

Use the actual author list and title. Do not imply acceptance or publication.

If your role was not sole-author, avoid language that suggests you independently conducted every part of the paper. “Derived” is appropriate for your specific contribution if accurate.

You could also include:

```text
Research Software
- Open-source R package for high-dimensional covariance estimation; 3,000 downloads in first year.
```

That may be more valuable than placing the package only in an old experience bullet.

---

# ATS and keyword assessment

There is no job description, so an exact ATS match rate cannot be calculated. For the quant-research roles implied by your resume, you already have strong coverage of:

- Statistical learning
- Time-series modeling
- Volatility forecasting
- Market microstructure
- Order-book signals
- Backtesting
- Transaction costs
- Python
- R
- SQL
- PyTorch
- Gradient boosting
- Bayesian inference
- Feature engineering
- Out-of-sample validation

Potentially missing terms, if truthful:

- NumPy
- pandas
- scikit-learn
- Git
- Linux
- C++ development
- Portfolio construction
- Risk modeling
- Market impact
- Execution modeling
- Distributed computing
- Data pipelines
- Docker or cloud infrastructure

Do not add keywords merely because they are common. Add only technologies and methods you have actually used.

---

# Narrative and credibility issues

## Current narrative

The current order tells this story:

1. I manage a bakery.
2. I previously interned in quant research.
3. I did statistics research several years ago.
4. I have independent quant projects.

That is not the story you want.

## Better narrative

The revised resume should tell this story:

1. I am a Statistics Ph.D. candidate.
2. I conduct quantitative research in market microstructure, volatility, and statistical learning.
3. I have direct experience building cost-aware trading signals.
4. I validate models rigorously out of sample.
5. I can build reproducible research infrastructure.
6. I also have measurable operational and leadership experience.

That narrative is much more compelling for quant research roles.

---

# Suggested section order

```text
Morgan Patel
Contact information and GitHub/portfolio

SUMMARY

EDUCATION

QUANTITATIVE RESEARCH EXPERIENCE
Northpeak Capital
Ridgeway University, Statistical Learning Lab

SELECTED PROJECTS
Volatility Forecasting Study
Kaggle Market Prediction Competition

PUBLICATIONS / RESEARCH SOFTWARE

ADDITIONAL EXPERIENCE
Sunrise Bakery

TECHNICAL SKILLS
```

If the resume must fit on two pages, combine Publications and Research Software or keep them as one compact section.

---

# Eight-dimension score

These scores assume a quantitative research or systematic trading target, not a specific job description.

| Dimension | Score | Comments |
|---|---:|---|
| Target-keyword coverage | 8/10 | Strong quant vocabulary, though exact JD coverage is unknown |
| Summary | 3/10 | No summary or immediate target-role framing |
| Skills section | 6/10 | Relevant but sparse; typo and weak category labels |
| Bullet quality | 7/10 | Strong metrics, but one serious mathematical error and several awkward bullets |
| Research credibility | 8/10 | Ph.D., JASA manuscript, open-source package, strong projects |
| Narrative coherence | 5/10 | Bakery role dominates the first impression |
| Page/visual structure | 6/10 | Text structure appears workable, but needs hierarchy and section reordering |
| Credibility signals | 7/10 | Good results, but backtest claims need methodological detail |

**Overall: approximately 6.5–7/10 currently.**

With the ordering, summary, Sharpe correction, and research-positioning changes, this could become an **8/10 quant-research resume**.

---

# Priority action list

## Tier 1 — Do these first

1. Move Sunrise Bakery to Additional Experience.
2. Remove the incorrect Sharpe annualization bullet.
3. Add a three-line quant-focused summary.
4. Explain your current Ph.D. research.
5. Correct “econometircs” and “Joining.”
6. Add a publications/research-software section.
7. Name the exact metrics used for “forecast error.”
8. Clarify whether the 0.4 Sharpe figure is signal Sharpe, portfolio contribution, or portfolio improvement.

## Tier 2 — Strong improvements

1. Add statistical significance or confidence results to the Diebold–Mariano bullet if available.
2. Add point-in-time and leakage-prevention language where technically accurate.
3. Expand skills with actual tools such as pandas, NumPy, scikit-learn, Git, and Linux.
4. Split the overloaded open-source package/cluster/reading-group bullet.
5. Reduce repeated descriptions of the temporal convolutional model.

## Tier 3 — Lower priority

1. Replace “cut” with “reduced” in formal research bullets.
2. Use consistent en dashes in dates.
3. Standardize metric formatting: `0.40`, `7%`, `52% to 58%`.
4. Replace `example.com/code/mpatel` with a real GitHub or portfolio link if available.

---

# Interview bridges

| Resume evidence | How to frame it in an interview |
|---|---|
| Order-book imbalance signal | “I worked on extracting short-horizon predictive information from order-book state while accounting for transaction costs and execution effects.” |
| Position smoother | “The modeling problem was not only predictive accuracy; it was converting forecasts into positions without allowing turnover and slippage to erase the edge.” |
| Point-in-time feature store | “I treated data timing and schema versioning as part of the research problem because otherwise a backtest can look strong while containing subtle look-ahead leakage.” |
| HAR-RV comparison | “I used HAR-RV as a transparent, domain-relevant baseline rather than evaluating the neural model in isolation.” |
| Monte Carlo pipeline | “The cluster pipeline let us run large simulation studies reproducibly, with controlled random seeds and substantially shorter iteration cycles.” |
| Sparse-regression proof | “The theoretical work strengthened my understanding of estimator behavior and complements my empirical model-validation experience.” |
| Bakery management | “Although outside the technical domain, the role gave me direct experience managing people, inventory, operating constraints, and budgets under time pressure.” |

The most important change is not adding more content. It is making the existing technical content appear first, removing the credibility-damaging Sharpe bullet, and making the document unmistakably read as a **statistics Ph.D. candidate pursuing quantitative research**.
