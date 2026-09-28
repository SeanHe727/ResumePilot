# case-6

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

6 errors, 15 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 21 Jul 1998

**Problem**
[Error] The résumé includes personal details readers are not meant to weigh.

**Why**
Date of birth and nationality are personal details that are not relevant to assessing the listed qualifications and experience. Including them can distract from the evidence the résumé should foreground.

**How to change it**
Remove “Date of birth: 21 Jul 1998” and “Nationality: Indian.”

> Research Assistant, Statistical Learning Lab

**Problem**
[Important] Experience is not listed newest-first: the 2025 internship appears below the 2020–2021 research role.

**Why**
A reader expects the more recent experience first and may otherwise have to scan past an older role to find the internship. The current order makes the chronology harder to follow.

**How to change it**
Move the Northpeak Capital | Quantitative Research Intern entry above the Ridgeway University | Research Assistant entry.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks other students relied on.

**Problem**
1. [Important] The wording does not say what you did to create or maintain the reproducibility checks or what they enabled.
2. [Important] The pipeline claim names the setting but not the specific work you did, and “Owned” frames it as responsibility rather than action.

**Why**
1. Saying that other students relied on the checks suggests they were useful, but does not tell a reader whether they helped reproduce results, catch errors, or support a particular research workflow. That leaves the value of the work hard to judge.
2. A reader can identify the broad area of work but cannot see the technical skill behind owning the pipeline. Naming one concrete task would make your contribution more legible.

**How to change it**
1. Replace the general reliance claim with [what the checks enabled or improved] and, if available, [one measure of their use or effect]; name what you did to create or maintain them.
2. Replace “Owned the lab’s simulation pipeline” with [one specific pipeline task or check you implemented].

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
[Polish] The phrase “it is now Section 3” puts the paper context after the result and uses an indirect reference.

**Why**
A reader reaches the result before learning that it appears in a paper under review at JASA. The indirect “it” also makes the connection less immediate, slowing down a quick scan.

**How to change it**
Move “Section 3 of a paper under review at JASA” before the bound result and cut “it is now.”

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The package result is buried after unrelated duties, and “which” has an unclear referent. *(no words if moved; about 5 words added to clarify the referent)*

**Why**
The package’s uptake is the line’s clearest evidence of impact, but it comes after a list of other work. A reader may also have to pause to work out what was downloaded.

**How to change it**
Move the open-source R package and its download result together to the start of the line, explicitly naming the package as the item downloaded; cut or separate the other duties.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The claim that the signal raised the desk book’s Sharpe ratio overstates what the stated backtest establishes.

**Why**
An 18-month out-of-sample backtest can estimate a historical change, but by itself does not establish that the signal raised the desk’s book Sharpe. That conclusion depends on a like-for-like comparison and on the result being robust rather than sample-specific.

**How to change it**
Describe this as a backtested change in the book’s Sharpe, and specify the comparison if available: [how the with-signal and without-signal books were compared].

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Important] The line says “confirmed” a gain with a standard Diebold-Mariano test over a nested baseline, which does not justify that conclusion as written.
2. [Important] The line does not state how large the forecast gain was or what the tests found.

**Why**
1. Usual Diebold-Mariano inference can be invalid for nested forecast models under the null, so a standard test does not necessarily confirm the gain. Testing across 30 indices can also require addressing multiple comparisons.
2. The reader sees that a comparison was made but cannot judge the size or strength of the improvement from the test description alone. That leaves the outcome vague.

**How to change it**
1. If used, name the appropriate nested-model adjustment, such as a Clark-West test, and explain [how the 30 comparisons were handled]. If you did not use a suitable adjustment, soften or remove “confirmed.”
2. Replace “Confirmed the forecast gain” with [forecast-error improvement versus nested HAR-RV and the test result across indices].

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] “Joining ... built” is grammatically incorrect because the participial opening does not agree with the main clause.
2. [Important] The long sequence of methods comes before the feature-store result, so the key outcome arrives late.

**Why**
1. The opening phrase makes the joining appear to be the subject of “built,” rather than describing an action by you. That grammatical mismatch can interrupt a reader’s understanding of the accomplishment.
2. Readers encounter the joining, deduplication, and versioning details before learning what they produced. That delays the concrete result in a quick scan.

**How to change it**
1. Make the opening a finite clause with “I joined,” and supply “I” as the subject of “built.”
2. Move “built a feature store” before the sequence of methods, leaving those methods after the result.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is not the conventional annualization method and substantially overstates the annualized Sharpe.
2. [Important] The line ends with a routine reporting step instead of a meaningful outcome.

**Why**
1. Under the usual assumption of independent daily returns with stable variance, annualization uses the square root of the number of trading days, not the number itself. Multiplying by 252 therefore produces a much larger figure than the conventional annualized Sharpe.
2. “Before reporting it to the desk” does not show what changed or how the annualized figure was used. It spends space on process without giving the reader a result.

**How to change it**
1. Replace “252” with “√252,” assuming the standard annualization assumptions apply.
2. Cut “before reporting it to the desk.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reported change from 0.20 to 0.15 is a 25% reduction, not a 33% improvement.
2. [Important] The line does not identify the error metric represented by 0.20 and 0.15.

**Why**
1. The reduction is 0.05, which is 25% of the original error of 0.20. A 33% reduction would require a different starting value or endpoint, so the percentage contradicts the reported figures.
2. A reader cannot interpret or compare the result without knowing what was measured. Naming the metric gives the figures a usable anchor.

**How to change it**
1. Change “33% improvement” to “25% reduction,” or provide the correct figures if they differ.
2. Replace “forecast error” with [the error metric used to calculate 0.20 and 0.15]; if relevant, add [the evaluation baseline or comparison].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The increase from 52% to 58% is 6 percentage points, not a 6% relative increase.
2. [Important] The line repeats the index count and model details from the first bullet without adding a distinct result.

**Why**
1. The figures show a six-percentage-point gain, which is about an 11.5% relative increase from 52%. Calling it “6%” can therefore misstate the result and leave the unit ambiguous.
2. “On 30 equity indices” and “with a temporal convolutional model” repeat information already given in the first bullet. Keeping those details here costs space without distinguishing this result.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points,” if accurate; use “by about 11.5%” only if you mean the relative increase.
2. Cut “on 30 equity indices” and “with a temporal convolutional model” from this bullet.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The 41st-place finish already establishes a top-2% result, making the final phrase repetitive.

**Why**
A reader can see the placement and total number of teams directly. Restating the percentile does not add a distinct result.

**How to change it**
Cut “finishing in the top 2%.”

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 score gap does not establish that switching folds cut validation leakage.

**Why**
A smaller gap is compatible with reduced leakage, but it can also result from leaderboard noise, sampling variation, or other changes. The gap alone does not show that leakage was reduced.

**How to change it**
If a separate check showed that leakage decreased, describe that check; otherwise, say that switching to time-grouped folds closed the 0.02 score gap.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] The 0.02 gap and unchanged validation score do not identify their scoring metrics.

**Why**
Without the metric name, a reader cannot interpret what a 0.02 difference means or compare the result with other competition outcomes. The preserved “validation score” is likewise unclear without its metric.

**How to change it**
Replace “scores” and “validation score” with [the name of the scoring metric] and [the name of the validation metric], respectively.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The result is buried after the explanation of the fold change.

**Why**
The reader reaches the 0.02 gap only after the method and the claim about leakage. Leading with the observed result makes the point quicker to scan.

**How to change it**
Move the result about closing the 0.02 score gap before the explanation that you switched to time-grouped folds.

## Skills

> econometircs

**Problem**
[Error] “econometircs” is misspelled in the Methods skills line.

**Why**
The spelling error is visible in a skills label and can distract a reader from the technical knowledge the section is meant to show.

**How to change it**
Replace “econometircs” with “econometrics.”

## What already works

- “Cut the signal’s daily turnover from…”: The line links a named intervention to multiple measurable outcomes.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: Connects a measured result to a named baseline and out-of-sample evaluation.

## Reviewer 2

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

## Reviewer 3

## Highest-priority changes

1. **Remove your date of birth and nationality.** These details are generally unnecessary on a U.S. résumé, can invite bias, and don’t establish work authorization.
2. **Move the 2025 internship above the 2020–2021 research-assistant role.** Experience should normally run newest to oldest.
3. **Correct the Sharpe-ratio annualization claim.** A daily Sharpe ratio is annualized using the square root of the number of trading days, not by multiplying by 252. As written, this is a material technical error and could undermine confidence in the other quantitative claims.
4. **Fix the unfinished internship bullet and the misspelling in Skills.**
5. **Resolve overlaps and inconsistencies among the project metrics.** Several bullets appear to report different improvements from the same model and data without enough information to reconcile them.

## Header and Education

- **Name and contact details:** Keep these. Make sure the portfolio or code link is clickable and leads to a polished, relevant page.
- **Date of birth and nationality:** Remove both, as noted above.
- **Ph.D. entry:** Keep the expected completion date only if it is still accurate. If you have completed the degree or your expected date has changed, update the entry. The location and date formatting are otherwise clear.
- **B.S. entry:** Clear as written. Consider whether your GPA or relevant coursework would add value; include them only if they strengthen your application and are appropriate for the roles you’re targeting.

## Experience

### Ridgeway University — Research Assistant

- **“Owned the lab’s simulation pipeline…”** The line break is just formatting, but the bullet’s impact is not very specific. Clarify what you were responsible for and what improved as a result, if you can support that with evidence.
- **“Derived a variance bound…”** This is a strong research contribution. Make your role in the paper clear, and ensure the claim about improving the prior bound is precise and defensible. “Now Section 3” is less useful than the publication status and your contribution; consider whether that detail earns space.
- **“Taught weekly recitations…”** Strong evidence of teaching and communication. Specify what the 4.8/5 rating measures and, if available, how many students responded so the rating has context.
- **“Released an open-source R package…”** This bullet combines the package, download count, cluster maintenance, reading group, and grading. Separate or prioritize the most relevant achievements; as written, the core accomplishment is hard to find. Clarify what the download figure represents and its source. Also check that the phrasing makes clear which work the download figure refers to.

### Northpeak Capital — Quantitative Research Intern

- **“Built a short-horizon order-book imbalance signal…”** This is a strong result, but make clear what the Sharpe figures measure and how the signal affected the desk book. Keep the out-of-sample and after-costs qualifications prominent, and be ready to explain the backtest design.
- **“Cut the signal’s daily turnover…”** Clarify what “keeping 90% of gross returns” is compared with. Explain the basis for the slippage estimate and make sure the return-retention and slippage figures use consistent comparisons.
- **“Confirmed the forecast gain…”** “Standard Diebold-Mariano tests” is vague. State what forecast metric was tested and what supports the word “confirmed” (for example, the result’s statistical significance). Because you report tests across 30 indices, be prepared to explain how you handled multiple comparisons.
- **“Joining 120 microstructure features…”** This is grammatically incomplete as written. Fix the sentence structure. The work itself is useful, but clarify what you built and how the team’s later reuse demonstrates its value.
- **“Annualized the signal’s daily Sharpe ratio…”** Remove or correct this bullet before submitting. Multiplying a daily Sharpe ratio by 252 is not the standard annualization; the standard factor is the square root of the number of trading days. Also consider whether explaining a calculation belongs on the résumé at all.
- **“Documented the backtest assumptions…”** This is a useful handoff and research-process contribution, but its impact is less concrete than the trading results. Keep it if documentation and team enablement matter for the roles you’re targeting; substantiate the onboarding claim if asked.

## Projects

### Volatility Forecasting Study

- **“Beat a HAR-RV baseline’s out-of-sample QLIKE loss…”** Specify enough about the evaluation setup to make the comparison interpretable, such as the test period or validation design. Confirm that “7%” is calculated consistently and that the result is genuinely out of sample.
- **“Cut forecast error from 0.20 to 0.15…”** The metric is unspecified, and the stated values imply a 25% reduction relative to 0.20, not a 33% reduction. Recheck the calculation and identify the error metric. Also clarify which changes caused the improvement; adding features and changing the loss at the same time makes attribution unclear.
- **“Improved the model’s directional hit rate…”** This overlaps with the first two bullets by repeating the same model and dataset. Keep it only if it adds a distinct, meaningful result. “By 6%” is ambiguous: the change from 52% to 58% is six percentage points, not a 6% relative increase. Define what counts as a correct direction and how the result was evaluated.

### Kaggle Market Prediction Competition

- **“Placed 41st of 2,900 teams…”** This is a clear, strong result. Use the competition’s exact name if the current title is generic, and ensure the stated rank is the final private-leaderboard rank.
- **“Cut validation leakage by switching to time-grouped folds…”** Be precise about the evidence that leakage was reduced. A smaller gap between local validation and leaderboard performance alone may not establish that leakage was the cause. Clarify what the 0.02 difference measures and whether a smaller gap is actually better for that score.
- **“Wrote the team’s feature-selection script…”** This is useful technical detail. Clarify how you ensured feature selection did not itself introduce leakage, and verify that “without losing validation score” refers to the same validation procedure described in the previous bullet.

## Skills and presentation

- **Methods:** Correct the spelling error in “time-series econometircs.” Consider listing skills in a consistent style and including additional relevant tools or methods only if you can substantiate them in an interview.
- **Formatting:** Use consistent punctuation and date formatting throughout. Check that bullets wrap cleanly in the final PDF and that the experience ordering is reverse chronological.
- **Targeting:** For quantitative-research roles, give priority to the internship’s strongest, technically sound results and your research contributions. Remove redundant metrics or lower-impact details if needed to make those stand out.

## Reviewer 4

# Résumé critique

**Assumed target:** Quantitative research / systematic trading, inferred from the Northpeak Capital internship and market-prediction projects. Without a job description, I can’t reliably assess exact ATS matching, seniority fit, or company-specific vocabulary.

## Overall assessment

You have a credible foundation for quantitative research: a statistics Ph.D. in progress, a relevant internship, concrete backtest results, and a strong competition placement. The biggest issue is not lack of substance; it’s that several claims need clearer definitions or contain apparent technical errors. In particular, the Sharpe annualization bullet and the “33% improvement” calculation could seriously undermine confidence in the rest of the résumé.

**Do these first:**
1. Remove the Sharpe annualization bullet; its calculation is wrong.
2. Correct or substantiate the volatility-project improvement calculation.
3. Reorder experience chronologically and remove date of birth and nationality.
4. Split the overloaded research-assistant bullet and remove repetition across project bullets.
5. Fix the typo in Skills and clarify the weaker or ambiguous quantitative claims.

## Section-by-section feedback

### Header and education

- **Remove date of birth and nationality.** They aren’t relevant qualifications and can introduce avoidable bias. Include work authorization only if it is relevant to an application or explicitly requested.
- **Consider placing Experience before Education.** The Northpeak internship is your strongest direct evidence for the assumed target role, so it should be easier to find. Keeping Education first is defensible for a current Ph.D. candidate, but in this version it delays your most role-relevant experience.
- **Make your Ph.D. status and expected completion date easy to read.** The expected date is useful; make sure it remains accurate when you use the résumé.
- **Consider adding a dissertation or research-area description** if it directly connects your statistical work to financial modeling. Don’t add a generic description just to fill space.

### Experience ordering

- **Move Northpeak Capital above the 2020–2021 Research Assistant role.** The current order is not reverse chronological, which can confuse recruiters and automated parsing.
- **Keep dates and date formats consistent** across all entries.

### Research Assistant, Statistical Learning Lab

- **First bullet:** The pipeline ownership is useful, but “other students relied on” is subjective and does not show what improved. Add a concrete indication of the pipeline’s scale, use, or effect if you can substantiate one. Name relevant infrastructure or tools only if they matter to the target role.
- **Second bullet:** This is a strong technical result, but “tightens the previous bound by a log factor” may be hard to evaluate without knowing the comparison. Clarify the technical comparison and your specific contribution. State the paper’s under-review status accurately, and make your authorship/contribution clear.
- **Third bullet:** The student count, number of problem sets, and teaching rating are specific. Keep it if teaching is relevant to the roles you’re pursuing; otherwise, it is lower priority than research and engineering accomplishments.
- **Fourth bullet:** This combines package release, cluster maintenance, reading-group organization, and grading in one bullet. The “which” clause also makes it unclear what earned 3,000 downloads. Separate the package achievement from other responsibilities, or remove the less relevant responsibilities. Identify the package and clarify what the download figure measures and over what period.

### Quantitative Research Intern, Northpeak Capital

- **First bullet:** This is a strong lead achievement. Clarify how the 18-month out-of-sample period relates to the internship and the strategy evaluation, and ensure the improvement is attributable to your signal rather than other changes. If permitted, give enough context about the benchmark, transaction costs, or evaluation method to make the result interpretable.
- **Second bullet:** The turnover and slippage figures are useful, but clarify the comparison behind “keeping 90% of gross returns” and how slippage was estimated. A reader should be able to tell exactly what changed and what was held constant.
- **Third bullet:** The test name alone doesn’t establish the size or significance of the improvement. Specify the forecast target and report the result in a way a reviewer can assess. If you tested across 30 indices, consider how multiple comparisons were handled.
- **Fourth bullet:** The opening construction is grammatically awkward: the participle does not clearly connect to the action that follows. Fix the sentence structure. Also clarify what the feature store enabled, and quantify its reuse or reliability benefit if possible.
- **Fifth bullet:** **Remove this.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization; under the usual independent-return assumption, annualization uses the square root of the number of trading days. This is a prominent technical error and could call the other financial claims into question. If this was only a reporting mistake, it still does not belong as an achievement.
- **Sixth bullet:** Documentation and onboarding are useful supporting evidence, but the “next intern cohort used to onboard in their first week” claim is vague. Keep it after the core research bullets, and retain it only if you can describe a concrete benefit or it demonstrates an important responsibility.

### Projects

#### Volatility Forecasting Study

- **First bullet:** The QLIKE result is relevant and quantified. Add enough evaluation detail to establish the forecast horizon, data split, and that the test period was held out. The repeated reference to the same model across three bullets makes the project feel less substantial than it is.
- **Second bullet:** The arithmetic appears inconsistent: a change from 0.20 to 0.15 is a **25% reduction relative to 0.20**, not 33%. Verify the values and calculation before keeping the percentage. Also identify what “forecast error” measures; it is too vague on its own.
- **Third bullet:** Clarify whether “6%” means six percentage points or a relative increase, and define the hit-rate calculation. This result overlaps with the other model-performance bullets; keep it only if it adds a distinct, useful outcome.
- **Across the project:** Reduce repetition. The bullets should each demonstrate a distinct contribution or result, rather than repeatedly naming the model and reporting adjacent performance measures. Make sure the claimed improvements are supported by a leakage-resistant evaluation.

#### Kaggle Market Prediction Competition

- **First bullet:** This is a clear, externally legible achievement. Keep it. If possible, make the competition and the private-leaderboard result easy to verify.
- **Second bullet:** Be precise about what the 0.02 gap represents and how time-grouped folds addressed leakage. A validation/leaderboard gap is not, by itself, proof of leakage.
- **Third bullet:** This is a useful implementation contribution. Clarify that feature selection was done without using information from validation or test data in a way that would cause leakage. It also overlaps somewhat with the first bullet’s mention of 300 features, so ensure the two bullets have distinct purposes.

### Skills

- **Correct the typo:** “econometircs” is misspelled.
- **Use consistent capitalization and formatting** for skills and categories.
- **Consider adding tools that are important for quant research only if you actually use them**—for example, data-querying, compiled-language, version-control, or market-data tooling. The current list is short, but unsupported additions would hurt more than help.
- The methods listed are relevant, but make sure the skills section reflects capabilities demonstrated in the experience and projects. Don’t use it as a list of keywords you cannot discuss in an interview.

## Reader-perspective assessment

- **ATS:** The résumé already contains relevant quant and finance terminology, including order-book imbalance, market microstructure, out-of-sample testing, transaction costs, Sharpe ratio, and volatility forecasting. An actual match rate cannot be calculated without a job description.
- **Recruiter glance:** Likely to get a closer look because of the Ph.D. and quant internship. The non-chronological experience order and personal details are avoidable distractions.
- **Hiring manager:** Likely to notice the internship results and strong competition placement, but also the Sharpe annualization error, the inconsistent forecast-error percentage, and the need for more methodological detail.
- **Technical reviewer:** The paper’s review status is appropriately signaled, but its title, authorship, and your exact contribution are not provided. I can’t verify the quantitative claims from résumé text alone.

## Provisional score

This is a résumé-quality estimate for the **inferred** quant-research target, not a job-specific match score.

| Dimension | Score | Main reason |
|---|---:|---|
| ATS / role keywords | 6/10 | Relevant vocabulary is present; exact fit depends on the job description. |
| Summary / positioning | 5/10 | No summary or explicit positioning statement; the target is inferred from the experience. |
| Skills | 5/10 | Relevant but sparse, with a typo. |
| Bullet quality | 6/10 | Strong results, weakened by ambiguity, repetition, and two apparent technical errors. |
| Research credibility | 7/10 | Under-review paper and quantitative projects help; publication details are missing. |
| Narrative coherence | 6/10 | Good statistical-to-finance potential, but ordering and project repetition blur the story. |
| Visual / formatting | Not assessable | Plain text doesn’t show page layout or line breaks. |
| Credibility signals | 7/10 | Ph.D., internship, and competition placement are strong; technical corrections are essential. |

**Provisional overall:** around **6.2/10**, excluding visual presentation. Correcting the technical issues and tightening the bullets should improve it meaningfully. A job description is needed to estimate actual interview fit.

## Ranked changes

### High impact — do these

1. **Delete the daily-Sharpe annualization bullet.** It contains a material calculation error and damages technical credibility.
2. **Verify the volatility-project percentage.** The stated values do not support the stated improvement; correct the calculation or remove the percentage.
3. **Reorder Experience in reverse chronological order.** This improves scanning and prevents the résumé from appearing incorrectly sequenced.
4. **Remove date of birth and nationality.** They don’t strengthen your candidacy.
5. **Separate the overloaded Research Assistant package bullet.** Make the download claim’s subject unambiguous and prioritize the package contribution.
6. **Reduce repeated project claims.** Keep distinct outcomes and remove bullets that restate the same model or result without adding new evidence.
7. **Clarify the internship backtest and evaluation claims.** Make the comparisons, metrics, and testing setup interpretable and defensible.

### Medium impact

- Clarify the baseline and contribution behind the variance-bound result.
- Make the feature-store bullet grammatical and quantify its impact if possible.
- Explain what the “0.02 gap” and “90% of gross returns” refer to.
- Add the under-review paper’s identifying details and your contribution, if appropriate.
- Correct the Skills typo and include only tools you can substantiate.

### Cosmetic or conditional

- Consider a brief positioning statement only if it adds a clear connection between your statistics research and quantitative finance.
- Keep teaching and onboarding evidence if it supports the roles you’re targeting or demonstrates otherwise-missing strengths; deprioritize it if space is tight.

## Interview preparation

Be ready to explain, in detail:

- How you separated signal improvement from benchmark choice, costs, and other backtest assumptions.
- How you built the point-in-time feature store and prevented late data or leakage from contaminating evaluation.
- How the volatility model was tested, what each reported metric means, and how you resolved the percentage discrepancy.
- Your exact contribution to the variance-bound work and the paper’s authorship and review status.
- What the Kaggle leakage issue was and how you established that the revised validation procedure was more reliable.

**Bottom line:** The underlying experience is promising. Fix the technical errors first, then improve ordering and precision. Without a job description, I can’t tell you which additional keywords or qualifications are essential for a particular opening.
