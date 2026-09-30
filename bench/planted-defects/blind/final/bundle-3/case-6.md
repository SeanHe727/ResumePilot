# case-6

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly
labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk
book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.
- Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90%
of gross returns and lowering estimated slippage by a third.
- Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests
across the 30 indices.
- Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and
versioning each schema, built a feature store the team reused in two later projects.
- Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the
desk.
- Documented the backtest assumptions, transaction-cost model and known failure regimes in the
desk’s research wiki, which the next intern cohort used to onboard in their first week.
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study
from 3 days to 5 hours, with every run reproducible from its seed and configuration file.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound
by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and
earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while maintaining the
lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was
downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features
and an asymmetric loss.
- Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a
temporal convolutional model.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing
in the top 2% of the private leaderboard.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local
validation and leaderboard scores.
- Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate
features to 300 without losing validation score.
SKILLS
Programming: Python, R, PyTorch, Kafka
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

Assuming you’re targeting quantitative research roles, your strongest material is the Northpeak internship, research, and forecasting work. **Fix the statistical and arithmetic claims before sending this resume**; those are more consequential than formatting.

### Header and education
- **Contact line:** Check that the code link leads to work you want an employer to evaluate. If you have a professional profile or research page, decide whether it is more useful than that link.
- **Ph.D. entry:** Add your research area or dissertation topic if it helps explain your fit for quant roles. Keep the expected completion date accurate.
- **B.S. entry:** No change needed unless you need space; it is less important than your current research.

### Sunrise Bakery
- **Opening shifts/team/budget bullet:** Keep it if you want to demonstrate management experience, but make the budget claim more specific if you can substantiate it. For quant applications, give this role less space than your technical work.
- **Stock/unsold bread bullet:** Keep the measurable outcome. Be ready to explain how you measured the 12% and 7% figures; they represent a **5-percentage-point** reduction.

### Northpeak Capital
- **Sharpe-ratio bullet:** Clarify whether 1.1 to 1.5 describes the *desk book* or a backtested strategy, and how you attributed the change to your signal. A claim about improving an entire book invites close scrutiny.
- **Turnover/slippage bullet:** Specify what “daily turnover” measures and distinguish observed results from *estimated* slippage. Make sure the 90% gross-return comparison uses the same baseline.
- **Diebold–Mariano bullet:** Recheck the test choice and assumptions: standard DM tests can be inappropriate for nested forecast models. Also clarify what “across the 30 indices” means statistically rather than implying 30 independent confirmations.
- **Feature-store bullet:** Fix the grammar so your contribution is unambiguous. Retain the point-in-time joins and reuse by later projects; those are strong evidence of research infrastructure work.
- **Sharpe annualization bullet:** **Correct or remove it.** Daily Sharpe is ordinarily annualized using the square root of the number of trading days, not by multiplying by 252. As written, this is a serious credibility problem.
- **Documentation bullet:** Keep it if space permits. It shows good research practice, though it is less important than the signal, validation, and infrastructure bullets.

### Statistical Learning Lab
- **Simulation-pipeline bullet:** Strong; keep it. Confirm that the timing comparison is like-for-like.
- **Variance-bound bullet:** Strong; keep it, but verify the claimed improvement and current paper status. Make your individual contribution clear without overstating authorship.
- **Teaching bullet:** Consider moving it below the research achievements or shortening it if space is tight. Verify whether the recitations were part of this research-assistant role.
- **R-package/other duties bullet:** Separate the package’s impact from cluster maintenance, reading-group organization, and grading. Combining four activities obscures the most relevant achievement. Verify the download count and period.

### Projects
- **Volatility study, QLIKE bullet:** Keep it; identify the evaluation period or test setup if space allows, so the out-of-sample result is interpretable.
- **Volatility study, error bullet:** **Correct the arithmetic:** a decrease from 0.20 to 0.15 is **25% relative to 0.20**, not 33%. Also name the error metric and distinguish this result from the QLIKE result.
- **Volatility study, hit-rate bullet:** A change from 52% to 58% is **6 percentage points**, not an unqualified 6% improvement. Consider whether the hit-rate result adds enough beyond the other two bullets; explain the evaluation setup if you retain it.
- **Kaggle placement bullet:** Keep it. Check that the rank and private-leaderboard placement are final; 41st of 2,900 is approximately the top 1.4%, so “top 2%” is consistent.
- **Kaggle leakage bullet:** Explain, if necessary, why the original folds leaked information. “Closed a gap” alone does not establish that leakage was eliminated.
- **Kaggle feature-selection bullet:** Keep it if you can explain how permutation importance was calculated without using held-out or leaderboard information.

### Skills and overall presentation
- **Methods line:** Correct **“econometircs”** to **“econometrics.”**
- **Skills categories:** PyTorch is a framework and Kafka is a data-streaming technology, not programming languages. Organize the categories accurately and list only tools you can discuss confidently.
- **Prioritization:** If the resume runs long, cut or condense lower-relevance operational and teaching details before removing evidence of rigorous validation, research contributions, or production-quality data work.

## Reviewer 2

Assuming you’re targeting quantitative research or statistics roles, the strongest material is your research and modeling work. The main issues to fix are a mathematical error, a percentage calculation, a few unclear or grammatically awkward bullets, and repeated or overloaded claims.

## Header and education

- **Contact line:** Check that the code-profile URL is a direct, working link and leads to relevant work. A generic or inactive link adds little.
- **Ph.D. entry:** Keep the expected graduation date current, and use “candidate” only if that accurately reflects your program status. Your dates make the degree look in progress, which is clear.
- **Degree date formatting:** The education and experience dates are consistent in substance, but settle on one date style throughout the resume.

## Experience

### Sunrise Bakery

- **First bullet:** “A team of 6 bakers and cashiers” is ambiguous: it could mean six people total or six in each role. Clarify the team size. Consider whether the weekly labour-budget result is meaningful enough to quantify further; as written, “keeping the store within” does not show the scale of the responsibility or result. Also choose either US or British spelling consistently.
- **Second bullet:** The unsold-bread reduction is a useful, concrete result. Make sure the comparison periods and calculation are defensible, since production and unsold quantities can vary over time.

### Northpeak Capital

- **First bullet:** “Raised the desk book’s Sharpe ratio” is a strong claim that may sound as though your signal alone changed the performance of the whole book. Clarify the contribution being measured and the backtest assumptions, especially how the 18-month out-of-sample period was selected and whether it includes realistic costs. This will make the result more credible.
- **Second bullet:** Clarify what “daily turnover” and “keeping 90% of gross returns” mean in your evaluation. The slippage reduction is useful, but specify the basis for the estimate if it was modeled rather than observed.
- **Third bullet:** “Forecast gain” is vague: make clear what was forecast and what improved. Since you mention tests across 30 indices, be prepared to explain how you handled multiple comparisons and what the tests established.
- **Fourth bullet:** This bullet has a grammatical problem: the opening “Joining…” phrase does not attach cleanly to the person who built the feature store. It is also dense with technical details. Make the action and the outcome easier to follow, and clarify whether the two later projects actually used the feature store.
- **Fifth bullet:** Remove this bullet. Multiplying a daily Sharpe ratio by 252 is not the standard annualization; under the usual assumptions, annualized Sharpe scales by the square root of the number of trading periods. More importantly, this describes a calculation rather than a contribution, and reporting the incorrect calculation undermines the other quantitative claims.
- **Sixth bullet:** The phrase about the next cohort using the wiki “to onboard” is grammatically awkward and unclear about what they used. Make the relationship between your documentation and their onboarding explicit. The result is useful if you can substantiate it.

### Ridgeway University research assistant

- **First bullet:** Strong evidence of engineering impact and reproducibility. Specify the computing setup or what made the pipeline faster if that helps show the work was technically substantive.
- **Second bullet:** “My proof” is unnecessarily first-person and stands out from the rest of the resume. Clarify your authorship/contribution to the paper and what “by a log factor” means mathematically. Keep “under review” accurate; it should not imply publication or acceptance.
- **Third bullet:** The teaching scale and rating are useful. Clarify that the rating is a student evaluation and, if relevant, how many evaluations it is based on.
- **Fourth bullet:** This combines a research output, cluster maintenance, reading-group organization, and grading in one bullet, so the package’s 3,000-download result is hard to connect to the other activities. Separate or prioritize the contributions. Also consider whether the administrative duties deserve space compared with your research and technical work.

## Projects

### Volatility Forecasting Study

- **First bullet:** Specify whether the 7% QLIKE improvement is a relative reduction, and make the evaluation setup clear enough to distinguish training from out-of-sample data. “On 30 equity indices” alone does not explain how the result was aggregated.
- **Second bullet:** The stated calculation is inconsistent: reducing error from 0.20 to 0.15 is a **25% reduction** relative to 0.20, not a 33% improvement. Check the underlying figures and the definition of “forecast error.” This bullet also overlaps with the first, so make sure it adds a distinct result.
- **Third bullet:** A change from 52% to 58% is **6 percentage points**, not a 6% relative improvement. Also define “directional hit rate” and explain how it was evaluated. This repeats the temporal convolutional model and the same 30-index scope from the first bullet; keep it only if it adds a separate, clearly explained finding.

### Kaggle Market Prediction Competition

- **First bullet:** The 41st-place finish and “top 2%” describe essentially the same result. Keep the ranking context clear, including whether the rank is on the private leaderboard.
- **Second bullet:** “Cut validation leakage” may overstate what changing the fold strategy establishes; it may instead have made validation more representative of the leaderboard setting. Be precise about what changed and how you measured the 0.02 gap. Explain the score scale if it is not obvious.
- **Third bullet:** Explain how the 900 candidate features were generated or selected. “Without losing validation score” is less persuasive if the same validation data guided feature selection; make clear how you avoided overfitting to that validation set.

## Skills

- **Methods:** Correct the misspelling in “econometircs.” Also check that the methods listed reflect skills you can discuss in depth.
- **Skills categories:** PyTorch and Kafka are tools/frameworks rather than programming languages, so the “Programming” label is too narrow for the items under it. Use category labels that accurately describe the contents, and include proficiency or context only if you can support it.

## Overall

- Keep the bakery role if it is your current work, but give the most space and detail to the quantitative research and statistical-learning experience most relevant to your target roles.
- Before submitting, verify every metric, comparison period, and percentage. In a resume with many precise quantitative claims, small calculation or attribution errors can cast doubt on the rest.

## Reviewer 3

# Résumé critique

**Target role inferred from the résumé:** Quantitative researcher, especially market-microstructure or systematic-strategy research.  
**Important limitation:** There’s no job description or target employer, so I can’t assess fit to a particular posting or calculate a genuine JD keyword-match score. The ATS scan and ratings below are general estimates for this inferred role.

## Domain-specialist lens

### Likely reviewer
A quant research lead, portfolio researcher, or desk-side hiring manager would likely focus on whether your backtests are credible, your statistics are sound, and your research can translate into a usable signal. They’ll see a promising mix of market data, forecasting, and statistical methods, but may scrutinize the short internship, the size of the reported improvements, and your treatment of Sharpe ratios.

### Employer context
No employer is specified, so company-specific priorities and vocabulary can’t be assessed. For a typical quant research role, relevant signals include rigorous out-of-sample testing, point-in-time data, transaction-cost modeling, reproducibility, and clear evidence that a research result survived practical constraints.

### Role vocabulary: general proxy
The résumé already includes many useful terms: quantitative research, order book, microstructure, futures, backtesting, out-of-sample testing, transaction costs, slippage, Sharpe ratio, volatility forecasting, HAR-RV, Python, R, PyTorch, and high-dimensional statistics. SQL, C++, and execution algorithms are absent; whether those matter depends on the posting. Don’t add them unless they reflect real experience.

### Vocabulary alignment
Your content is strongest when it names the financial data or research problem directly. Preserve terms such as *order-book imbalance*, *index futures*, and *point-in-time* where accurate. Check that broad labels such as *Methods* don’t obscure your specific strengths in time-series forecasting, econometrics, and statistical learning.

### Gap ranking
- **Potentially serious, depending on the posting:** Production research experience, SQL or C++, and direct execution or portfolio-construction work.
- **Not established as gaps from this résumé alone:** The skills above may simply be omitted; add them only if you can substantiate them.
- **Immediate credibility issue:** The claim about annualizing a daily Sharpe ratio by multiplying by 252 is mathematically suspect and needs correction or removal.

### Methodology transfer
- **Order-book signal and cost-aware smoothing:** Directly relevant to systematic strategy research, provided the backtest design and cost assumptions are defensible.
- **Diebold–Mariano testing:** Shows statistical evaluation discipline; a reviewer may ask how you handled testing across 30 indices.
- **Point-in-time feature store:** Transfers well to research infrastructure and reproducible market-data workflows.
- **Volatility forecasting study:** Relevant to forecasting and model comparison, though the project bullets repeat the same model and dataset.
- **Simulation pipeline and estimator result:** Demonstrate statistical depth and computational discipline, but are less directly connected to trading unless you make that connection in conversation.

### Competitive landscape
The obvious competitor may have a longer quant internship, direct production-strategy experience, and stronger C++/SQL or execution-system skills. Your strengths are the combination of graduate statistics, financial-market research, documented data hygiene, and measurable research outputs. Your résumé needs to make the rigor and practical relevance of those outputs unmistakable.

## Five-perspective read-through

### ATS scan — general proxy, not a JD score

| Term | Match? |
|---|---|
| Quantitative research | Yes |
| Time series | Yes |
| Order book | Yes |
| Market microstructure | Yes |
| Index futures | Yes |
| Backtesting | Yes |
| Out-of-sample | Yes |
| Transaction costs | Yes |
| Slippage | Yes |
| Sharpe ratio | Yes |
| Volatility forecasting | Yes |
| HAR-RV | Yes |
| Python | Yes |
| R | Yes |
| PyTorch | Yes |
| Feature engineering | Yes |
| High-dimensional statistics | Yes |
| SQL | No |
| C++ | No |
| Execution algorithms | No |

**Proxy match:** 17/20. This is not a score for any specific application; an actual posting could change the terms and their importance.

### Recruiter glance — 10 seconds
**Verdict: Maybe.** The Ph.D. candidate status and quant internship are credible signals, but there’s no summary or clear headline to position you quickly. The current bakery role may prompt questions about your near-term career direction and time commitments.

### HR screen — 30 seconds
**Verdict: Borderline to phone screen.** Your education and quant internship appear relevant, but the résumé should make your target role clearer and resolve the apparent Sharpe annualization error. The ongoing Ph.D. timeline should be current and easy to interpret.

### Hiring manager — 2 minutes
**Verdict: Maybe, with potential to interview after credibility fixes.**

1. The quant internship has the most directly relevant material: an order-book signal, cost-aware smoothing, statistical testing, and point-in-time features.
2. The Sharpe annualization bullet is a serious concern; it could undermine confidence in the rest of the analysis.
3. Several project results overlap, and one stated percentage improvement does not match the values given.

**Likely first question:** How did you construct the out-of-sample evaluation, account for trading costs, and establish that the signal’s improvement was robust?

### Technical reviewer — 10 minutes
**Truthfulness:** Can’t independently verify claims from the résumé alone. Several metrics need clearer definitions or reconciliation.  
**Consistency:** One mathematical issue and one calculation mismatch stand out. The paper under review is appropriately identified as under review.

## Eight-dimension scoring

These are provisional résumé-quality scores for the inferred role, not a calibrated score against a specific job description.

| Dimension | Score | Weight | Weighted | Notes |
|---|---:|---:|---:|---|
| ATS keywords | 7/10 | 15% | 1.05 | Strong general quant vocabulary; no JD for a true match assessment. |
| Summary | 5/10 | 10% | 0.50 | No summary or headline to frame your target role. |
| Skills section | 6/10 | 10% | 0.60 | Relevant core tools, but one typo and limited evidence/context. |
| Bullet quality | 6/10 | 25% | 1.50 | Strong quantified material, offset by credibility and consistency problems. |
| Publications | 5/10 | 10% | 0.50 | One under-review paper is mentioned, but no publication section or fuller citation. |
| Narrative coherence | 7/10 | 15% | 1.05 | Clear quantitative thread, with some distracting or overlapping content. |
| Page fill and visual | 6/10 | 5% | 0.30 | Text-only copy doesn’t allow a real layout or page-fill review. |
| Credibility signals | 6/10 | 10% | 0.60 | Good research evidence, but the Sharpe claim and percentage discrepancy need attention. |
| **Total** |  | **100%** | **6.10/10 (61.0/100)** | **Provisional; fixable issues are depressing the score.** |

## Interview likelihood

These are rough judgments based only on the supplied résumé and inferred target, not measured probabilities for a particular employer.

| Reader | Estimated outcome | Main factor |
|---|---:|---|
| ATS | 70% likely to pass a general quant keyword screen | Many relevant terms appear, but the actual JD is unknown. |
| Recruiter | 55% likely to forward | Relevant education and internship, but target positioning is implicit. |
| HR | 55% likely to schedule a screen | Relevant background, with questions about dates, current role, and career focus. |
| Hiring manager | 40% likely to interview as written | Strongest concern is confidence in the quantitative claims. |
| Technical panel | 45% likely to see potential | Good methods and research range, but they will probe the metrics and backtest methodology. |

**Ceiling estimate:** Current résumé: roughly 61/100 on this provisional rubric. With the credibility, consistency, and focus changes below: approximately 75–80/100 for a suitable quant-research posting. A posting requiring extensive production trading experience or specific programming tools could impose a lower ceiling; no JD is available to judge that.

## Changes to make, ranked

### Tier 1 — High impact

1. **Correct or remove the daily Sharpe annualization claim.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization method; under common assumptions, the factor is the square root of the number of trading days. As written, this is the most damaging credibility issue in the résumé. Verify the calculation and the precise quantity you reported.

2. **Reconcile the forecast-error percentage.** A reduction from 0.20 to 0.15 is a 25% reduction relative to 0.20, not 33%. Check the underlying metric, baseline, and denominator. If 33% refers to something else, make that distinction clear.

3. **Clarify the internship’s performance comparisons.** For the Sharpe increase, specify what the 1.1 and 1.5 represent and ensure the comparison is like-for-like. For the smoother, make the meaning of “90% of gross returns” and the slippage estimate unambiguous. A quant reviewer will want to understand the benchmark, costs, and evaluation window.

4. **Fix the feature-store bullet’s grammar and sentence structure.** Its opening construction is awkward, making a strong infrastructure accomplishment harder to understand. Also clarify your personal contribution and what “reused in two later projects” means in practice.

5. **Improve the top-of-page positioning.** Add a concise role-focused summary or headline so a recruiter immediately understands that you are pursuing quant research, rather than having to infer it from the experience section. Keep it factual and consistent with your actual experience.

6. **Check the Ph.D. status and dates.** The expected graduation date is May 2026. Confirm that this remains accurate and that the status is current when you apply. If relevant, make it possible to understand your availability without leaving the recruiter to infer it.

### Tier 2 — Medium impact

1. **Reduce repetition across the three volatility-project bullets.** They all describe the same model and evaluation setting. Keep the distinct results that best demonstrate forecasting quality and model value; avoid presenting closely related measurements as separate achievements without explaining how they differ.

2. **Review the three quant-project results for statistical context.** The 6-point increase in directional hit rate, the QLIKE improvement, and the forecast-error reduction would be stronger if a reader could tell whether they come from the same test period, baseline, and experimental setup. Keep the claims comparable and reproducible.

3. **Refine the Diebold–Mariano claim.** State clearly what forecasts were compared and what the test supports. Since you report results across 30 indices, be ready to explain whether you addressed repeated testing or how you interpreted results across that set.

4. **Resolve the package bullet’s competing emphasis.** The package release and download count are useful; cluster maintenance, reading-group organization, and grading crowd the same bullet and make its main accomplishment harder to scan. Separate or deprioritize duties that don’t support your target role.

5. **Reconsider the ordering or prominence of the current bakery role.** Keep the role if it is current and important, but for a quant-focused application it should not take attention away from the directly relevant internship and research. Make the transition from the Ph.D. and quant internship to this role understandable if a reviewer asks.

6. **Make the skills section more precise.** Correct the spelling error in “econometircs.” Consider whether every listed tool belongs there, and whether skills important to a particular job posting are genuinely supported by your experience. Don’t add tools just to match keywords.

7. **Add publication detail where appropriate.** The under-review status is transparent, which is good. A publication or research section could give the reviewer enough information to identify the work and understand your contribution; don’t imply acceptance or publication.

8. **Clarify the Kaggle leakage claim.** Switching to time-grouped folds is a sensible response to leakage risk, but “cut validation leakage” sounds like a directly measured quantity. Make sure the claim accurately describes what changed and what the 0.02 gap measures.

### Tier 3 — Cosmetic or lower priority

1. **Standardize spelling and style.** The résumé uses “labour,” which is fine if intentional, but keep spelling conventions consistent across the document.
2. **Use consistent method names and capitalization** in the Skills section.
3. **Check the code link.** Ensure it is accessible, current, and contains work you’re comfortable having a technical reviewer inspect.
4. **Review the final layout.** The supplied text doesn’t show typography, page count, or line breaks, so check those in the actual document.

**Verdict:** Fix the Tier 1 items before applying. The Sharpe calculation and the forecast-error arithmetic matter much more than cosmetic edits. Tier 2 changes are worthwhile, especially reducing repetition and clarifying experimental context. Tier 3 changes can wait.

## Interview bridge points

| Résumé topic | How it connects to quant research | What to be ready to explain |
|---|---|---|
| Order-book imbalance signal | Turning high-frequency market data into a testable predictive signal | Feature construction, time alignment, out-of-sample design, benchmark, and costs |
| Cost-aware position smoothing | Converting a forecast into a trading decision that accounts for turnover and slippage | How the smoother works and how you measured the return/cost trade-off |
| Diebold–Mariano tests | Using statistical tests to compare forecast performance | The exact forecast errors compared, assumptions, and interpretation across indices |
| Point-in-time feature store | Preventing look-ahead and data-quality problems in research pipelines | Late-print handling, point-in-time logic, schema versioning, and downstream use |
| Volatility forecasting study | Applying statistical learning to financial time-series prediction | Baseline choice, test period, metric definitions, and whether improvements were robust |
| Monte Carlo pipeline | Making statistical experiments computationally efficient and reproducible | What caused the speedup and how you maintained reproducibility |
| Sparse-regression bound | Bringing theoretical statistical work to applied modeling problems | Your precise contribution, the bound’s assumptions, and its practical implication |

*End of critique.*

## Reviewer 4

4 errors, 13 important, 1 polish. Errors are marked [Error]; fix those first.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The line does not establish that stock counts and supplier orders caused unsold bread to fall from 12% to 7%.

**Why**
Counts and orders could inform decisions that reduce waste, but the bullet does not say they led to changes in production volume or product mix. It also gives no measurement period or method to show that the two rates are comparable, so a reader may question the causal claim.

**How to change it**
Name the production or other operational changes the counts informed and how the before-and-after rates were measured; if they did not establish the causal link, remove that attribution.

> Assistant Store Manager

**Problem**
[Important] The Sunrise Bakery entry interrupts the résumé’s quantitative-research direction.

**Why**
The two bullets fit together as store operations, but the entry does not support the quantitative-research direction. As written, it takes space and attention from more relevant experience; keep it only if it is needed to account for current employment.

**How to change it**
Shorten the Sunrise Bakery entry to one line, or cut it if it is not needed to account for current employment.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The Sharpe-ratio increase is attributed to the signal without establishing that the rest of the book and evaluation conditions stayed fixed.

**Why**
A reader cannot tell whether the rest of the book, risk constraints, or evaluation method changed between configurations. If they did, the Sharpe improvement could reflect those changes rather than the signal’s incremental contribution.

**How to change it**
If the rest of the book, risk constraints, and evaluation method were held fixed, state that; otherwise, describe the Sharpe figures as a comparison between backtest configurations.

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Important] The phrase “keeping 90% of gross returns” does not specify what the 90% is relative to.

**Why**
A reader cannot tell whether this means 90% of the original gross returns or another measure. That ambiguity makes the trade-off between lower turnover and retained returns difficult to interpret.

**How to change it**
Clarify what the 90% is relative to; if accurate, replace “gross returns” with “original gross returns.”

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Important] Standard Diebold-Mariano inference may not validly confirm a gain over a nested forecast baseline.
2. [Important] The bullet does not state what the forecast-gain test found.

**Why**
1. Standard DM inference can fail for nested forecast models, so the test named here may not support the claim as stated. Testing across 30 indices also does not establish a joint gain unless multiple comparisons and dependence were suitably addressed.
2. A reader cannot tell how large the gain was or whether the tests supported it across the indices. The test name and index count describe the evaluation, not its result, so the claimed confirmation lacks a stated outcome.

**How to change it**
1. If used, name the appropriate nested-model test and the inference adjustments actually run; otherwise, soften the claim to say the tests indicated a gain rather than confirmed it.
2. Replace “Confirmed the forecast gain” with [forecast-error improvement and test result across the indices], if accurate.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 overstates the annualized Sharpe under the usual independent daily-return assumption.
2. [Important] The reporting step is process detail without a stated result or consequence.

**Why**
1. Under that assumption, the annualization factor is the square root of 252, not 252. The current calculation therefore materially overstates the reported annualized Sharpe, which can undermine confidence in the result.
2. A reader sees that the Sharpe ratio was reported, but not what value was reported or what it informed. Without a resulting metric or decision, the step provides little evidence of impact.

**How to change it**
1. Replace “252” with “the square root of 252,” if using the usual annualization convention.
2. Replace the reporting clause with [the resulting reported metric and what it informed], if there was a meaningful use or outcome.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
[Polish] The bullet uses a first-person pronoun.

**Why**
“My proof” introduces first-person wording into a résumé bullet. It also makes the line less consistent with the résumé’s phrasing elsewhere.

**How to change it**
Replace “my proof” with “the proof.”

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package’s download result is separated from its release by a list of unrelated duties, and “which” has an unclear referent.
2. [Important] The list of unrelated duties interrupts the package-release result.

**Why**
1. After the duties are listed, a scanning reader may not connect the download count to the R package. That weakens the clearest evidence of the package’s reach.
2. The cluster, reading-group, and grading duties shift attention away from the open-source package before its download result appears. Separating or removing them would keep the adoption evidence next to the work it measures.

**How to change it**
1. Move the download clause directly after “R package” and make its referent explicit: “The package was downloaded 3,000 times in its first year.” Split the duties into a separate bullet or remove them.
2. Move the duties to a separate bullet or remove them, and put the download result next to the package release.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is 25%, not a 33% improvement.
2. [Important] The bullet gives forecast-error values without naming the error metric.
3. [Important] The realized-volatility method repeats information in the preceding bullet.

**Why**
1. The reduction is 0.05, which is 25% of the original 0.20. A 33% reduction from 0.20 would produce an error of about 0.13, so the stated percentage conflicts with the figures.
2. A reader cannot tell what the values measure or compare this result with other forecasting results. Naming the metric would make the change interpretable.
3. The preceding bullet already names realized-volatility features. Repeating the method here adds clutter without distinguishing this result.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [name of forecast-error metric].
3. Remove “by adding realized-volatility features,” or use that space for distinct detail.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The hit rate increased by 6 percentage points, not 6% relative to its original value.
2. [Important] The model description repeats information in the first bullet.

**Why**
1. The figures show a change from 52% to 58%, which is a 6-percentage-point increase. Relative to 52%, the increase is about 11.5%, so “by 6%” misstates or obscures the size of the result.
2. The first bullet already identifies the temporal convolutional model. Repeating it here takes space from the result and makes the entry less easy to scan.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points,” keeping the stated figures from 52% to 58%.
2. Remove “with a temporal convolutional model.”

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The closing 0.02 gap after switching folds does not establish that validation leakage was reduced.

**Why**
Time-grouped folds can prevent leakage across time, but they also change the validation estimate. A smaller gap alone does not show that leakage caused the original gap or that the change reduced it.

**How to change it**
If a controlled comparison identified a leakage pathway that the new folds blocked, describe that evidence; otherwise, say the folds closed the 0.02 gap without attributing the change to reduced leakage.

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled; the correct spelling is “econometrics.”

**Why**
The typo appears in the Methods skills line and may make a reader question the care taken with the résumé. Correcting it preserves the intended skill while removing a visible error.

**How to change it**
Replace “econometircs” with “econometrics.”

## What already works

- “Built the lab’s simulation pipeline on…”: Pairs a concrete time reduction with the 2,000-run study it affected.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: States a measurable out-of-sample result against a named forecasting baseline.
- “Placed 41st of 2,900 teams with…”: Shows a clear competition result with both rank and field size.
