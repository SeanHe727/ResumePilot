# case-3

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
Date of birth: 21 Jul 1998 | Nationality: Indian
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks
other students relied on.
- Derived a variance bound for a sparse regression estimator that tightens the previous bound
by a log factor; it is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets
and earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while
maintaining the lab’s shared cluster, organizing the weekly reading group and grading for
two courses, which was downloaded 3,000 times in its first year.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Built a short-horizon order-book imbalance signal for liquid index futures that raised the
desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after
costs.
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
desk’s research wiki, which the next intern cohort used to onboard in their first week.
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
Programming: Python, R, PyTorch
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

## Highest-priority fixes

1. **Remove or correct the annualized-Sharpe bullet.** Multiplying a daily Sharpe ratio by 252 is mathematically incorrect; under the usual assumptions, annualization uses the square root of the number of trading days. This error could undermine confidence in the quantitative work elsewhere on the resume. Recheck any reported Sharpe figures that depend on this calculation.

2. **Correct the forecast-error calculation in the volatility project.** A change from 0.20 to 0.15 is a 25% reduction relative to 0.20, not 33%. Also identify what “forecast error” measures; the improvement depends on the metric and its direction.

3. **Fix the “Joining 120…” bullet.** Its opening construction is grammatically incorrect, and the sentence makes it hard to tell what you did and what the resulting feature store enabled.

4. **Remove personal details that do not help you get the role.** Delete date of birth and nationality. They are generally unnecessary on a U.S. resume and may introduce irrelevant bias. If work authorization matters for a particular application, address that separately and accurately.

5. **Put experience in reverse chronological order.** Move the 2025 Northpeak role ahead of the 2020–2021 research assistant role. If the internship had not finished by the date you submitted the resume, make sure its dates and verb tense do not imply that it had.

## Header and education

- **Name and contact details:** Keep the phone and email, and make sure the code link is a direct, working link to relevant work. A descriptive label for the link will make its purpose clearer. Use a professional email address and confirm the phone number’s country code is appropriate for the roles you are pursuing.
- **Ph.D. entry:** Make the expected completion date easy to identify and consider adding your research area or dissertation focus. That helps employers understand what your doctoral work is about, beyond the degree name.
- **B.S. entry:** The degree field is useful; include honors or GPA only if they strengthen your candidacy. The dates and institution are clear.
- **Section order:** For research-heavy or academic applications, education near the top is reasonable. For industry quant roles, consider putting experience first, since your internship has directly relevant results.

## Experience

### Research Assistant, Statistical Learning Lab

- **“Owned the lab’s simulation pipeline…”** Specify what ownership involved and what the reproducibility checks covered. “Other students relied on” is vague; it does not show the pipeline’s scope or the result of your work.
- **“Derived a variance bound…”** This is a strong research contribution, but clarify the comparison behind “tightens the previous bound by a log factor” and make your role in the paper clear. A paper under review can change status, so keep that status current; link to a preprint or publication if available.
- **“Taught weekly recitations…”** Keep the teaching scale and materials, but clarify the source of the 4.8/5 rating and, if possible, how many students responded. That makes the rating easier to interpret.
- **“Released an open-source R package…”** This bullet combines the package, cluster maintenance, reading-group organization, and grading. Separate or trim the unrelated duties so the package’s impact is easy to see. The final “which” has an unclear referent, and the 3,000-download figure needs context (for example, the source and timeframe, if verifiable).

### Quantitative Research Intern, Northpeak Capital

- **“Built a short-horizon order-book imbalance signal…”** Clarify how the signal’s contribution to the desk book’s Sharpe was isolated from other changes, and define the backtest period and evaluation setup. A desk-level result is a substantial claim; be precise about what you personally drove and whether this was simulated or live performance.
- **“Cut the signal’s daily turnover…”** State how turnover and gross returns are defined, and ensure “keeping 90% of gross returns” is directly comparable before and after smoothing. Explain the basis for the estimated slippage reduction so the cost claim is interpretable.
- **“Confirmed the forecast gain…”** Identify the forecast metric and the relevant test result, if the tests support a statistical-significance claim. “Standard Diebold-Mariano tests” alone does not show the result, and testing across 30 indices raises questions about dependence and multiple comparisons.
- **“Joining 120 microstructure features…”** Fix the grammar and clarify whether you joined data, constructed features, or both. Explain what “point-in-time” and schema versioning protected against, and specify how the team’s reuse demonstrates impact.
- **“Annualized the signal’s daily Sharpe…”** Delete this bullet unless it documents a corrected calculation that is genuinely useful. As written, it reports an incorrect method and adds no accomplishment.
- **“Documented the backtest assumptions…”** This is useful supporting work, but the onboarding outcome is awkwardly expressed and difficult to verify. Keep it if you can make the extent of adoption or impact clear; otherwise prioritize the stronger research and modeling results.

## Projects

### Volatility Forecasting Study

- **First bullet, QLIKE result:** Keep the benchmark comparison, but specify what the 7% represents and ensure the comparison uses the same data, test period, and evaluation protocol for both models.
- **Second bullet, forecast error:** Correct the percentage and name the error metric. As noted above, the stated before-and-after values do not support the claimed 33% reduction.
- **Third bullet, directional hit rate:** “Improved by 6%” is ambiguous because the values move from 52% to 58%, a six-percentage-point increase. Also explain what counts as a directional hit if it is not self-evident to your target audience.
- **Across all three bullets:** The temporal convolutional model and 30-index evaluation appear repeatedly. Consolidate or prioritize the distinct results so the project does not read as three versions of the same claim. Make clear that the project is independent and describe the evaluation split sufficiently to establish that the results are out of sample.

### Kaggle Market Prediction Competition

- **“Placed 41st of 2,900 teams…”** The placement and top-2% result are consistent but partly redundant. Name the specific competition so the result can be recognized or checked, and retain the team size.
- **“Cut validation leakage…”** Clarify what the 0.02 gap measures and how time-grouped folds addressed the leakage. “Cut leakage” can sound like a measured quantity; the current wording does not explain how you established that.
- **“Wrote the team’s feature-selection script…”** Explain the practical benefit of reducing the feature set, since retaining the same validation score is not itself a clear performance gain. Also ensure permutation importance was computed without leaking validation information into feature selection.

## Skills and presentation

- **Methods:** Correct the misspelling of “econometrics.” Consider whether the listed methods are specific enough for the positions you want; name only techniques you can discuss and apply confidently.
- **Programming:** Python, R, and PyTorch are clear. Add other tools only if you can substantiate them in an interview and they are relevant to your target roles.
- **Formatting:** The supplied text contains many mid-sentence line breaks. In the final document, let the layout wrap text naturally rather than inserting hard line breaks, and keep dates, headings, and bullet formatting consistent. Make sure the resume remains readable when parsed by applicant-tracking systems.

## Reviewer 2

# Resume review

I’m treating the target as a **quantitative research role**, based on the Northpeak internship and market-forecasting projects. Without a job description, I can’t reliably score keyword match or tailor the vocabulary to a particular firm. I also can’t assess page layout from plain text.

## Fix these first

1. **Remove or correct the Sharpe annualization bullet.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization method; for independent daily returns, it is typically multiplied by the square root of 252. As written, this is a conspicuous technical error that could undermine confidence in the rest of your results. Don’t retain the claim unless you can accurately explain and substantiate the method.
2. **Correct the forecast-error arithmetic.** A decrease from 0.20 to 0.15 is a **25% reduction** relative to the starting value, not a 33% improvement. Recheck the calculation and make sure the stated improvement uses a clearly defined convention.
3. **Fix the skills typo:** “econometircs” should be corrected.
4. **Move Northpeak above the university research-assistant role.** Experience should normally be in reverse chronological order.
5. **Remove date of birth and nationality** from a US resume. They’re not useful qualifications and can introduce privacy and bias concerns. Include work authorization only if relevant and accurate.
6. **Replace placeholder-looking contact details** if they are literal. The 555 phone number and `example.com` email/domain will look nonfunctional. If you anonymized them for this review, disregard this point.

## Changes by section and bullet

### Education

- **Keep the Ph.D. expected date**, but make sure “candidate” accurately reflects your program status.
- **Consider moving Education below Experience** for industry applications. Your internship and research work are now more directly relevant than the undergraduate degree.
- The education dates are coherent with the listed research-assistant role, but the resume doesn’t say whether that role was undergraduate research or a separate appointment. Clarify the context if it might otherwise be confusing.

### Research Assistant

- **Simulation-pipeline bullet:** The ownership claim is useful, but “other students relied on” is vague. Add concrete scope or impact—such as reproducibility, scale, or users—if you can support it.
- **Variance-bound bullet:** This is one of your strongest research signals. Make the paper’s status and your contribution unmistakable, and consider whether a publication/preprint entry would give the work better visibility. “Now Section 3” is less informative to a hiring reader than authorship, paper identity, and research contribution.
- **Teaching bullet:** The student count, materials, and rating are specific. Keep it if teaching is relevant to the role or if you need evidence of communication; otherwise, give the space to technical research or engineering work.
- **R-package bullet:** This combines several unrelated responsibilities, so the package result is easy to miss and the “3,000 downloads” figure is hard to connect to the rest of the sentence. Separate the package accomplishment from lab operations, or remove lower-priority duties. Clarify the download metric if it could be confused with unique users or installations.

### Quantitative Research Intern

- **Order the internship before the older research-assistant role.**
- **Order-book signal bullet:** This is a strong, role-relevant result, but clarify what “raised the desk book’s Sharpe ratio” means—especially the comparison, attribution, annualization convention, and how the out-of-sample period was defined. As written, a reader may wonder whether the result is attributable to your signal alone or to the wider book.
- **Turnover/smoother bullet:** Keep the result, but ensure “keeping 90% of gross returns” and the slippage reduction are defined consistently with the first bullet’s evaluation period and cost assumptions.
- **Diebold–Mariano bullet:** The test name is relevant, but the resume gives no test results. Add the statistical outcome or supporting evidence if it is appropriate to disclose. Be prepared to explain the baseline, forecast target, test assumptions, and whether you addressed multiple comparisons across 30 indices.
- **Feature-store bullet:** The opening construction is grammatically awkward, and the sentence makes your contribution hard to follow. Clarify what you personally built and what “reused in two later projects” means. Keep the six-venue and point-in-time details if you can explain how they prevented data leakage.
- **Sharpe annualization bullet:** Remove it unless corrected and technically defensible; in its present form it is a serious credibility problem.
- **Research-wiki bullet:** This is useful evidence of documentation and handoff, but lower priority than the signal and feature-store work. Keep it if space allows, and make sure the claim about onboarding is specific and verifiable.

### Projects

#### Volatility Forecasting Study

- **The first and third bullets repeat the same model and dataset.** Different results can justify separate bullets, but make sure each adds a distinct piece of evidence rather than restating the same experiment.
- **Resolve the 0.20-to-0.15 percentage issue** noted above, and identify the forecast-error metric so a reader can interpret it.
- **Clarify whether the 6% hit-rate change is a relative increase or six percentage points.** Also ensure the comparison uses the same test set and baseline as the other reported results.
- The project overlaps with your internship’s HAR-RV comparison and volatility forecasting. Make the independent project’s scope and contribution distinct so it doesn’t read like duplicated experience.

#### Kaggle competition

- **Keep the placement:** 41st of 2,900 teams is a clear, useful result.
- **Clarify the validation-gap metric.** The 0.02 figure has no named score or scale, and “cut validation leakage” may overstate what changing folds alone established. Be precise about what changed and what the evidence shows.
- **Feature-selection bullet:** The reduction from 900 to 300 features is concrete. State the score metric or evaluation context if it is needed to make “without losing validation score” meaningful.

### Skills

- Correct the spelling error in “time-series econometrics.”
- Consider organizing skills so a reader can quickly distinguish programming tools from statistical methods. The current list is short, but it doesn’t mention tools such as SQL, Git, Linux, or C++—include any only if you have real working experience with them.
- Keep the methods list aligned with what you can discuss in technical depth. The resume uses time-series forecasting, realized volatility, order-book features, and high-dimensional statistics; make sure the skills section reflects the most relevant methods you actually used.

## Overall assessment

**Strongest signals:** a relevant quantitative-research internship, measurable backtest results, a top competition finish, and credible statistical research experience.

**Main concerns:** the incorrect Sharpe annualization claim, inconsistent forecast-improvement arithmetic, overlapping project bullets, and a few results that need clearer evaluation definitions. These are more important to fix than adding extra keywords.

For a quantitative-research application, prioritize correcting the technical claims, clarifying the backtest evidence, and tightening duplicated or overloaded bullets. A job description would be needed to judge whether your methods and terminology match a particular team.

## Reviewer 3

7 errors, 11 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998

**Problem**
[Error] The date of birth and nationality should be removed.

**Why**
These are personal details a reader is not meant to weigh when assessing the résumé. Including them adds irrelevant information and may distract from the candidate’s qualifications.

**How to change it**
Remove “Date of birth: 21 Jul 1998 | Nationality: Indian” from the résumé.

> Ridgeway University | Research Assistant, Statistical Learning Lab

**Problem**
[Important] The experience entries are not in newest-first order.

**Why**
The 2020–2021 Ridgeway role appears above the more recent 2025 Northpeak internship. Readers expect recent experience first, so the current order makes the chronology less clear and gives older experience earlier visibility.

**How to change it**
Move the Northpeak Capital internship and its bullets above the Ridgeway University Research Assistant entry.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package’s strongest result is buried after a list of separate duties.
2. [Important] The download count shows reach but not what the package helped users do.
3. [Important] The package’s outcome is delayed until after the separate duty list.

**Why**
1. A reader reaches the download figure only after the cluster, reading-group, and grading duties. That makes the package’s outcome less visible on a quick scan.
2. A reader can tell that people accessed the package, but not what task or analysis it enabled. Without that context, the practical value of the contribution is hard to judge.
3. The download result is the clearest outcome attached to the package, but its position makes the reader pass through several other responsibilities first. That weakens the package’s impact on a quick scan.

**How to change it**
1. Move the download result directly after the package achievement, before the duty list; place the duties in a separate bullet.
2. Add [the main task or analysis the package enabled] if you know a concise, accurate description.
3. Move the download clause to immediately follow the package achievement, before the duty list.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] The usual Diebold–Mariano test is not valid for confirming a forecast gain against a nested HAR-RV baseline.
2. [Important] The comparison gives neither the size of the forecast gain nor the test result.

**Why**
1. The usual test does not account for the special distribution of loss differences when forecasts come from nested models. Testing across 30 indices can also require adjustments for multiple comparisons and cross-index dependence, so the reported confirmation may not support the claim as written.
2. A reader can see that the model was compared with HAR-RV, but cannot judge the size of the difference or what the tests established. That leaves the claimed gain difficult to assess.

**How to change it**
1. If used, name a test appropriate for nested forecasts and the adjustments for multiple testing and cross-index dependence; otherwise soften “Confirmed” to describe the comparison without claiming confirmation.
2. Replace “forecast gain” with [forecast-error change versus HAR-RV] and add one concise test result if it supports the comparison.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Error] The opening participle does not grammatically connect to the main clause.

**Why**
“Joining” introduces an action, but the sentence then says that action “built” the feature store. This makes it unclear who performed the joining, deduplication, and versioning.

**How to change it**
Move “Built a feature store” to the start, then make the remaining actions describe how it was built.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 uses the wrong annualization factor under the usual independence assumption.
2. [Important] The reporting destination does not show what impact the annualization had.

**Why**
1. Under that assumption, annualization multiplies a daily Sharpe ratio by the square root of the number of trading days, not the number of days itself. Serial dependence may require a different adjustment, so the calculation as stated can overstate the annualized ratio.
2. A reader can tell where the calculation was reported, but not what decision it informed or what changed as a result. The line therefore ends on process detail rather than the contribution’s relevance.

**How to change it**
1. Replace “252” with the square root of 252 under the usual independence assumption; if accounting for serial dependence, state the adjustment used.
2. Replace the phrase with [the decision it informed or outcome it changed] if accurate; otherwise cut the clause or the line.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The stated 33% improvement is arithmetically wrong: the reduction from 0.20 to 0.15 is 25%.
2. [Important] “Forecast error” does not identify the metric measured by the 0.20 and 0.15 values.

**Why**
1. The decrease is 0.05, which is 25% of the starting error of 0.20. A 33% reduction would not produce the stated final value, so the mismatch can undermine confidence in the result.
2. Without the metric name, a reader cannot tell what those values represent or compare this change with other forecasting results. The percentage calculation is also harder to interpret without knowing the measure.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with [the metric used], if accurate.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The increase from 52% to 58% is 6 percentage points, not a 6% relative increase.
2. [Important] This bullet repeats the index count and model type already given in the first bullet.

**Why**
1. The difference between the two hit rates is 6 percentage points; relative to the starting rate of 52%, the increase is about 11.5%. Calling it “6%” can make the size of the result seem different from what the figures show.
2. The repeated details take space without distinguishing this result from the earlier forecast comparison. That makes the hit-rate outcome less prominent.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points” to match the reported figures.
2. Cut “on 30 equity indices” and “with a temporal convolutional model” from this bullet.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 reduction in the score gap does not establish that validation leakage was cut.
2. [Important] The 0.02 gap is not interpretable without the score metric and its scale.
3. [Important] The result is delayed in the “which closed” clause.

**Why**
1. A smaller gap shows that the local validation and leaderboard scores became closer, but does not show that leakage caused the original gap or that the new folds removed it. Distribution differences or leaderboard variability could also explain the change, so the causal claim is not established.
2. A reader cannot tell what the gap measures or judge its significance from the number alone. Naming the metric would make the comparison easier to understand.
3. The 0.02-gap change is the main result, but it appears after the explanation of the fold change. A reader scanning the bullet may miss the outcome.

**How to change it**
1. If split-design and data-timing checks confirm leakage was reduced, describe those checks; otherwise say that switching to time-grouped folds reduced the score gap by 0.02, without claiming it cut leakage.
2. Add [the score metric and scale] if needed to interpret the gap.
3. Move the 0.02-gap result to the start of the bullet, before the time-grouped-fold explanation.

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled; the correct spelling is “econometrics.”

**Why**
The typo appears in the Methods skills line, where readers expect accurate terminology. It can distract from the skills being presented and weaken confidence in the résumé’s proofreading.

**How to change it**
Replace “econometircs” with “econometrics.”

## What already works

- “Built a short-horizon order-book imbalance signal…”: Clearly states the strategy result and its baseline.
- “Cut the signal’s daily turnover from…”: Connects a specific intervention to multiple quantified outcomes.
- “Placed 41st of 2,900 teams with…”: Pairs a clear competition result with its scale.

## Reviewer 4

Your strongest material is the quantified research and trading work. Before polishing it, fix the **outdated dates and three technical claims** below; they could undermine confidence in the rest of the resume.

### Header and education
- **Contact line:** Make the code link clickable and check that it leads to work you want employers to see. Why: reviewers may use it to assess your projects.
- **Date of birth and nationality:** Remove both unless an application specifically requires them. Why: they generally do not help a US resume and disclose unnecessary personal information.
- **Ph.D. line:** Update “Expected May 2026” to your actual status and current expected date, if applicable. Why: that date has passed.
- **B.S. line:** Keep it if relevant; no substantive change needed.

### Experience
Move **Northpeak Capital above Ridgeway University** so experience is in reverse chronological order.

**Ridgeway University**
- **Simulation pipeline:** Specify the scale or effect of the pipeline and reproducibility checks, if measurable. Why: “owned” conveys responsibility but not its significance.
- **Variance bound:** Verify the claimed log-factor improvement and update the paper’s current submission status. Clarify your contribution if the result is coauthored. Why: both the technical claim and publication status invite scrutiny.
- **Teaching:** Check that the 4.8/5 rating is attributable to your teaching and that “writing 12 problem sets” reflects your role. Why: precise, defensible attribution makes these strong metrics credible.
- **R package:** Separate the package’s impact from the cluster, reading-group, and grading duties; keep the most relevant duties. Why: too many activities obscure the 3,000-download result, and the final “which” is ambiguous.

**Northpeak Capital**
- **Sharpe increase:** State clearly whether both Sharpe figures come from the same *backtest*, rather than implying a realized improvement to the desk’s live book. Be ready to substantiate the out-of-sample period, costs, and attribution to your signal. Why: this is a high-impact claim.
- **Turnover reduction:** Verify that gross returns, slippage, and turnover use consistent measurement periods and assumptions. Why: otherwise the trade-off is hard to interpret.
- **Diebold–Mariano tests:** Recheck the inference: standard DM tests can be inappropriate for a nested-model comparison. Describe only the testing method you actually used and can defend. Why: a technically questionable significance claim can weaken the whole research section.
- **Feature store:** Fix the sentence structure and make your contribution to the point-in-time joins and schema versioning unambiguous. Why: the current opening obscures an otherwise strong engineering accomplishment.
- **Sharpe annualization:** **Correct the reported result with the desk if it remains in use, and remove this bullet.** Multiplying a daily Sharpe by 252 is not the standard annualization; under common assumptions the factor is √252, with additional care needed for serial correlation. Why: this is a material calculation error, not a resume achievement.
- **Research wiki:** Keep it if documentation and handoff matter for your target roles; otherwise give space to stronger research results. Why: it is useful evidence of collaboration but less distinctive than the signal work.

### Projects
**Volatility Forecasting Study**
- **Project date:** Confirm whether “Present” is still accurate and update it if not. Why: ongoing dates should reflect current activity.
- **QLIKE result:** Define the evaluation setup sufficiently to support the 7% out-of-sample improvement, and ensure the baseline is directly comparable. Why: the result’s credibility depends on the comparison.
- **Forecast-error result:** Correct the percentage: **0.20 to 0.15 is a 25% reduction** relative to 0.20, not 33%. Name the error metric. Why: both the arithmetic and metric need to be clear.
- **Directional hit rate:** Call the change from 52% to 58% **6 percentage points**, not an unqualified 6% improvement. Why: percent and percentage-point changes differ.
- **Across these three bullets:** Check whether they describe distinct experiments or the same model and test set; reduce repetition if it is the latter. Why: repeated claims can look like three independent results when they are not.

**Kaggle competition**
- **Placement:** Keep the rank and private-leaderboard distinction; verify that the competition name is identifiable. Why: the rank is strong, and readers may want to check it.
- **Leakage:** Make sure “leakage” is what you established, rather than just a validation mismatch. Why: it is a specific methodological diagnosis.
- **Feature selection:** Clarify how you assessed “without losing validation score,” using the time-grouped validation described above. Why: that connection makes the selection result more convincing.

### Skills
- Correct **“econometircs” to “econometrics.”** Why: a typo in the skills section is conspicuous.
- Keep only tools and methods you can discuss confidently, and consider whether your documented work supports adding any important omitted tools. Why: the skills list should be both accurate and useful for the roles you seek.
