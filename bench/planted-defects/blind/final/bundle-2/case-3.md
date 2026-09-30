# case-3

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
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
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021
- Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks
other students relied on.
- Derived a variance bound for a sparse regression estimator that tightens the previous bound
by a log factor; it is now Section 3 of a paper under review at JASA.
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
Programming: Python, R, PyTorch, Kafka
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

5 errors, 9 important, 1 polish. Errors are marked [Error]; fix those first.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Important] The claim that the tests “Confirmed” the gain is stronger than the stated evidence supports. *(no words if softened)*
2. [Important] The line gives neither the size of the gain nor the Diebold–Mariano test result. *(adds about 4 words)*

**Why**
1. Separate tests across 30 indices can produce nominally significant results without establishing an overall gain, particularly if results were selected after testing. The line does not say whether the gain was significant on each index or whether multiple comparisons were accounted for.
2. A reader can see that the forecast was tested against a baseline but cannot tell how large or statistically supported the improvement was. The number of indices shows breadth, not the result.

**How to change it**
1. If a multiple-comparison adjustment was used, name it; otherwise report the per-index test results or replace “Confirmed” with “evaluated.”
2. Add one anchor, such as [forecast-error improvement relative to HAR-RV] or [Diebold-Mariano test result].

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] “Joining” is an ungrammatical opening for this past-tense sentence.
2. [Important] The long list of implementation details delays the feature-store result.

**Why**
1. The opening reads as an unfinished action phrase before the sentence reaches “built.” A reader may have to pause to work out how the listed actions connect to the feature-store result.
2. The line gives several implementation details before reaching the feature store reused in later projects. That makes the main result less immediate to a reader scanning the entry.

**How to change it**
1. Replace “Joining” with “Joined” and make the remaining listed actions parallel past-tense verbs.
2. Move “built a feature store” and its reuse in two later projects to the start of the bullet, before the implementation details.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
[Error] Multiplying a daily Sharpe ratio by 252 is not the correct annualization. *(adds about 4 words if accurate)*

**Why**
Under the usual independent-return assumption, annualizing a daily Sharpe ratio means multiplying by the square root of 252. Multiplying by 252 scales the mean return, so a reader may question the reported Sharpe ratio.

**How to change it**
If that is what you did, replace “252” with “the square root of 252”; otherwise report the daily Sharpe ratio.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Owned the lab’s simulation pipeline on the shared cluster and the reproducibility checks other students relied on.

**Problem**
1. [Important] The line names the shared-cluster pipeline without showing what you built or how you made it reproducible. *(adds about 3–8 words if accurate)*
2. [Important] The line says other students relied on the checks without saying what the checks enabled or prevented. *(adds about 3–8 words)*

**Why**
1. It claims ownership of technical work but gives no implementation or validation detail. A reader cannot judge the technical contribution from the system name alone.
2. Reliance alone does not show what changed for lab users or why the checks mattered. A concrete outcome would help a reader judge the contribution.

**How to change it**
1. If you implemented one, add [one concrete pipeline or reproducibility technique you implemented]; otherwise soften the ownership claim to the work you can substantiate.
2. Replace “other students relied on” with [what the checks enabled or prevented], and, if available, add one measure of their use or effect.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
[Important] The placement of “which was downloaded” leaves the package’s adoption measure with an unclear referent.

**Why**
The download count is useful evidence of package adoption, but the sentence puts it after unrelated duties. A reader may connect “which” to those duties rather than to the package.

**How to change it**
Move “which was downloaded 3,000 times in its first year” directly after “open-source R package.”

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is 25%, not 33%.
2. [Important] The line does not identify the measure represented by “forecast error.” *(adds about 1–3 words)*

**Why**
1. The decrease is 0.05, which is 25% of the starting error of 0.20. The stated 33% improvement contradicts the figures and may make a reader doubt the calculation.
2. A reader cannot interpret or compare the values without knowing what was measured. Naming the metric is the key detail needed to make the result useful.

**How to change it**
1. Replace “33% improvement” with “25% reduction” if the figures are correct.
2. Replace “forecast error” with [metric used], if accurate.

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] The change from 52% to 58% is 6 percentage points, not a 6% increase. *(adds about 2 words)*
2. [Polish] The second bullet repeats the index count and model already given in the first bullet.

**Why**
1. Those values show a 6-percentage-point increase; the relative increase from 52% is about 11.5%. Readers may otherwise interpret “6%” as a relative change and misread the result.
2. A reader has already seen that the study covers 30 equity indices and uses a temporal convolutional model. Repeating those details takes space that could distinguish this result from the first bullet.

**How to change it**
1. Replace “by 6%” with “by 6 percentage points” to match the reported values.
2. Cut “on 30 equity indices” and “with a temporal convolutional model” from the second bullet.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The line describes the team’s approach without identifying your specific contribution. *(adds about 3–6 words)*

**Why**
The entry identifies this as a team project, so a reader cannot tell whether you built the model, engineered features, or contributed another part of the work. That makes your individual role difficult to assess.

**How to change it**
Replace or qualify this approach phrase with [your specific contribution to the model or features].

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The line does not identify the score metric or what kind of difference 0.02 represents. *(adds about 2–5 words)*

**Why**
Without that context, a reader cannot interpret the size of the gap or compare the two scores meaningfully. The number alone does not show whether it is an absolute score difference or another comparison.

**How to change it**
After “0.02,” add [score metric and difference type].

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled.

**Why**
The spelling error is visible in the Methods skills line. It can distract readers from the skills being presented.

**How to change it**
Replace “econometircs” with “econometrics.”

## What already works

- “Cut the signal’s daily turnover from…”: Makes the trade-off from reducing turnover legible with multiple relevant measures.
- “Beat a HAR-RV baseline’s out-of-sample QLIKE…”: Pairs a quantified result with a named baseline and out-of-sample evaluation.
- “Wrote the team’s feature-selection script using…”: The feature-count comparison makes the scale of the reduction concrete.

## Reviewer 2

# Résumé review

**Target role inferred from the résumé:** Quantitative researcher, especially systematic strategies, market microstructure, or volatility research. Without a job description, I can’t reliably assess company fit or calculate a true ATS match rate.

## Highest-priority changes

1. **Correct the Sharpe-ratio annualization claim.** Multiplying a daily Sharpe ratio by 252 is incorrect under the usual annualization convention; it is typically multiplied by the square root of 252. As written, this is a serious technical credibility issue. Recheck any annualized Sharpe figures derived from it.
2. **Reconcile the volatility error reduction.** A change from 0.20 to 0.15 is a **25% reduction** relative to 0.20, not 33%. Check the underlying figures and correct the percentage or the stated endpoints.
3. **Make the accomplishments auditable.** For unusually strong results—especially the Sharpe improvement, forecast results, and download count—ensure the résumé provides enough context to assess the comparison, evaluation period, and your contribution. These claims are likely to invite detailed questions.
4. **Fix the methods typo.** “econometircs” is misspelled. Correct it.
5. **Reduce duplication in the volatility project.** The first three bullets all describe performance of the same model or feature set. Make each bullet earn its space by communicating a distinct contribution or result, and clarify how the metrics relate.
6. **Clarify your paper’s status and contribution.** The under-review paper is a useful research signal, but the current bullet doesn’t say whether you are an author or what your contribution was. Make the authorship and submission status explicit, without implying publication.
7. **Separate the overloaded R-package bullet.** It combines a release, downloads, cluster maintenance, reading-group organization, and grading. The main achievement gets obscured, and the sentence makes it unclear what caused the download result. Give the strongest accomplishment priority and keep unrelated duties from diluting it.

## Bullet-by-bullet review

### Northpeak Capital — Quantitative Research Intern

- **Order-book signal and Sharpe result:** Keep this prominent, but verify the attribution and clarify the evaluation setup. A résumé reader may interpret “raised the desk book’s Sharpe” as evidence of a live trading result, while the bullet describes an out-of-sample backtest. Make the distinction unambiguous and be ready to explain costs, benchmark, and what “over 18 months” means.
- **Turnover and slippage:** The figures are compelling, but clarify that the return-retention and slippage comparisons use the same test period and a consistent cost model. Otherwise, the reader may not know what the 90% is relative to.
- **Diebold–Mariano tests:** This signals statistical care. Be prepared to explain the forecast comparison, the test setup, and how you handled testing across 30 indices. As written, the reader cannot tell whether you account for multiple comparisons or dependence across markets.
- **Feature store:** Fix the opening grammatical construction: as written, it makes the feature store sound like the thing doing the joining. Also clarify what the team reused and what your work contributed. Point-in-time data handling is particularly relevant for this target role, so don’t let the sentence’s grammar hide it.
- **Sharpe annualization:** Correct or remove this bullet before sending the résumé. The stated calculation is wrong, and its presence could make a reviewer question the other quantitative claims.
- **Research wiki:** This is useful evidence of documentation and knowledge transfer, but it is less differentiating than the research and data work above. Keep it only if there is room after stronger material; make sure the onboarding result is supportable.

### Ridgeway University — Research Assistant

- **Simulation pipeline:** “Owned” signals responsibility, but the bullet is broad and gives no evidence of what you improved or delivered. Add a concrete outcome if you have one; otherwise, consider whether this deserves space ahead of the more distinctive research and teaching evidence.
- **Variance bound and JASA submission:** Strong research evidence. Clarify your authorship and the paper’s submission status, and ensure the claim accurately describes the result. “Now Section 3” is less useful to an employer than your contribution and the finding itself.
- **Teaching:** The class size, number of problem sets, and rating make this concrete. Keep it if teaching is relevant to the roles you’ll apply for; for industry quant roles, it may be lower priority than research or engineering outcomes.
- **R package and lab duties:** This is too crowded to scan. Separate the package’s adoption from the operational and course duties, or choose the most relevant material. Also make sure the download count is attributable to the package and that the measurement period is clear.

### Volatility Forecasting Study

- **QLIKE result:** This is directly relevant to quantitative research. Add enough context for a reader to understand the evaluation and comparison, and make clear how this result differs from the following error-reduction claims.
- **Error reduction:** Recheck the percentage: 0.20 to 0.15 is a 25% reduction. Also state clearly which error measure those values refer to; “forecast error” is too nonspecific for a technical reader.
- **Directional hit rate:** Define what “directional” means for a volatility forecast. Without that explanation, a reviewer may question whether the measure is appropriate or whether it is measuring a different task. This bullet also repeats the same model and dataset context, so make its distinct value clear.

### Kaggle Market Prediction Competition

- **Placement:** Strong, easy-to-scan evidence. Identify the competition more precisely if its name or platform would help readers recognize it. Keep the distinction between the private leaderboard and overall placement accurate.
- **Validation leakage:** Good technical judgment. Clarify what the 0.02 gap measures and how the time-grouped folds addressed the leakage, if space allows.
- **Feature-selection script:** Useful implementation evidence, but it overlaps somewhat with the ensemble and feature-engineering result in the first bullet. Make the separate contribution apparent and verify that “without losing validation score” is supported by the comparison you performed.

## Sections and presentation

- **Add a short summary only if it helps establish your target.** The résumé currently leads with education and contains no explicit target-role framing. A concise summary could help a recruiter identify you as a quantitative researcher and connect the academic, trading, and forecasting work. Don’t use it to repeat the bullets.
- **Consider moving the strongest relevant experience ahead of education.** For a quant-research job, the Northpeak internship is likely to matter more than the degree details at first glance. The best ordering depends on the roles you’re targeting.
- **Expand the skills section selectively.** It is sparse relative to the projects and experience. Include only tools and methods you can discuss in detail. Kafka appears in skills but not in the experience or project bullets, so either show credible use elsewhere in the résumé or reconsider listing it.
- **Make skill names consistent and specific.** Correct the typo and check that the method labels accurately describe your experience. A short list is preferable to broad claims you cannot substantiate.
- **Add a publications section if the paper is a meaningful research credential.** The current mention is embedded in a bullet and gives no title, authorship, or full citation details. Keep its under-review status unmistakable.
- **Check date and status accuracy.** Confirm that the Ph.D. expected completion date is current and that the “candidate” designation remains accurate. The résumé doesn’t show a thesis topic or research area, which may be useful for research-focused applications.

## Reader-perspective snapshot

- **Recruiter:** Likely to see a strong quantitative profile, but the résumé doesn’t state a target role, and the education-first opening delays the most relevant industry signal.
- **Technical hiring manager:** Likely to notice the order-book work, statistical testing, and forecasting projects. The annualization error and inconsistent percentage are the biggest credibility risks.
- **Technical reviewer:** Likely to probe the backtest assumptions, statistical tests, authorship of the JASA submission, and the definitions behind the reported metrics.

## Overall assessment

This is a promising quant-research résumé with strong evidence across trading, statistics, and machine learning. Its main weakness is not a lack of accomplishments; it is **precision and credibility**. Fix the calculation errors first, make the strongest results easier to evaluate, and reduce crowded or repetitive bullets.

A job-specific ATS score, interview probability, and company vocabulary match can’t be assessed responsibly without a job description. I also can’t judge page layout or visual balance from the plain text provided.

## Reviewer 3

Your strongest material is the quantified research and trading work. Before polishing, fix two numerical errors and one statistical-method claim; those matter more than wording.

### Contact and education
- **Contact line:** Check that the code link leads to work you want a quant-research reviewer to see. If it does, keep it.
- **Ph.D. line:** Keep the expected completion date accurate. Consider adding your research area if it helps connect the degree to the roles you’re targeting.
- **B.S. line:** No change needed unless space is tight.

### Northpeak Capital
- **Sharpe 1.1 to 1.5:** Keep the result, but clarify whether these are annualized Sharpes and what “desk book” includes. An 18-month backtest is a limited window, so be ready to explain its out-of-sample design.
- **Turnover 34% to 21%:** Define what “daily turnover” measures and check that the gross-return retention and slippage estimates use the same comparison. Otherwise, the three figures are hard to interpret together.
- **Diebold–Mariano tests:** Revisit the test claim with your statistical setup. Standard DM tests can be inappropriate for *nested* forecasting models; say what test and comparison you actually used. Also clarify why a volatility-forecast baseline is the comparator for the order-book signal.
- **Feature store:** Make the action grammatically consistent: the bullet starts with “Joining” but then switches to “built.” Keep the point-in-time controls and reuse outcome; they make this a strong engineering bullet.
- **Sharpe annualization:** Correct this urgently. Daily Sharpe is conventionally annualized by multiplying by **√252**, not 252, under the usual assumptions. Check whether the reported 1.1-to-1.5 result was affected, and correct any desk reporting if necessary.
- **Documentation:** Keep it if you have room. The onboarding use is concrete; this is less important than the research and data-quality results above it.

### Research assistant
- **Simulation pipeline:** Add a measure of scale or a specific reproducibility improvement if you have one; “owned” and “relied on” alone don’t show the impact.
- **Variance bound:** Strong bullet. Verify that the log-factor comparison, your contribution, and the paper’s current review status are all precise.
- **Teaching:** Keep if teaching or communication matters for your target roles; otherwise, this is a candidate to cut for space.
- **R package:** Separate the package’s 3,000 downloads from the cluster, reading-group, and grading duties. As written, one long bullet obscures which work produced that outcome.

### Projects
- **Volatility study—QLIKE:** Keep. Specify the evaluation period or split if space permits, so the out-of-sample result is assessable.
- **Forecast error 0.20 to 0.15:** Fix the arithmetic: that is a **25% reduction** relative to 0.20, not a 33% improvement. Name the error metric as well.
- **Hit rate 52% to 58%:** Call this a **6-percentage-point** increase, not an unspecified 6% increase. Consider whether this adds enough distinct evidence alongside the two preceding bullets.
- **Competition placement:** The rank supports “top 2%”; keep it. Make sure the private-leaderboard claim is accurate.
- **Validation leakage:** Distinguish preventing leakage from closing a validation–leaderboard score gap. The 0.02 gap measures agreement between scores, not leakage itself.
- **Feature selection:** Keep if you can substantiate the unchanged validation score using the time-grouped folds mentioned above.

### Skills
- **Programming:** Move Kafka out of “Programming” if you used it as a platform rather than a language.
- **Methods:** Correct **“econometircs”** to **“econometrics.”** Keep this section limited to methods you can discuss confidently in an interview.

## Reviewer 4

The strongest material is the quantified research and modeling work. The main fixes are a serious Sharpe-ratio error, a few credibility and clarity issues, and several overlapping or overloaded bullets. I’ll refer to each line without rewriting it.

## Header and education

- **Contact line:** Check that the phone number, email, and code link are real and current. The domain and phone number look like placeholders; if you anonymized them for this review, ignore this point.
- **Ph.D. line:** Keep the expected completion date accurate and update it as needed. Consider adding a concise research focus if it helps connect your statistics work to the roles you’re targeting.
- **B.S. line:** This is clear. No change needed.

## Northpeak Capital

- **“Built a short-horizon…”** Keep the strong result, but make sure you can substantiate that the signal—not other changes—raised the desk book’s Sharpe. Be prepared to explain the 18-month out-of-sample design, universe, benchmark, and transaction-cost assumptions. The phrase “desk book” may imply broader attribution than your work supports.
- **“Cut the signal’s daily turnover…”** Clarify how “keeping 90% of gross returns” is measured and against what comparison. Also be ready to explain how the slippage reduction was estimated; otherwise, the precise figures may invite questions.
- **“Confirmed the forecast gain…”** Specify the outcome being tested and the statistical result, if space permits. “Standard” is vague, and testing across 30 indices raises a multiple-comparisons question. Make sure the test was appropriate for the forecasts and evaluation period.
- **“Joining 120 microstructure features…”** Fix the sentence structure: the opening phrase does not attach cleanly to the action in the sentence. Also make the feature-store contribution and its reuse easier to parse, and quantify scale or impact if you can.
- **“Annualized the signal’s daily Sharpe ratio…”** Remove this bullet. Multiplying a daily Sharpe ratio by 252 is not the standard annualization; under common assumptions, annualization uses the square root of the number of trading days. As written, this undermines the credibility of the other quantitative claims.
- **“Documented the backtest assumptions…”** Keep this only if you have room after stronger technical accomplishments. The onboarding impact is useful but currently asserted rather than demonstrated; retain it only if you can support the claim about how the next cohort used it.

## Ridgeway University research assistant role

- **“Owned the lab’s simulation pipeline…”** This is broad and does not say what you built, improved, or maintained. Add a concrete scope or outcome, or remove it if the space is better used for research results.
- **“Derived a variance bound…”** The contribution is strong, but “tightens the previous bound by a log factor” may be difficult to interpret without the technical context. State the comparison precisely enough to be defensible. Consider including the paper’s citation or a separate publications entry, and describe the review status accurately.
- **“Taught weekly recitations…”** This is a useful teaching result. Clarify the basis for the 4.8/5 rating if it is not obvious, such as the evaluation source or response count. Keep the student and problem-set counts only if they add value for your target roles.
- **“Released an open-source R package…”** This combines the package, cluster maintenance, reading group, and grading into one crowded bullet. Split or prioritize the most relevant work. The cluster maintenance also overlaps with the first bullet. Make clear which work led to the 3,000 downloads and how that figure was measured.

## Projects

### Volatility Forecasting Study

- **“Beat a HAR-RV baseline’s…”** Strong result, but specify the evaluation setup well enough to distinguish this study from the Northpeak signal work, which also mentions HAR-RV and 30 indices. Confirm the 7% figure is based on a clearly defined aggregation and out-of-sample protocol.
- **“Cut forecast error from 0.20 to 0.15…”** Check the stated percentage: a reduction from 0.20 to 0.15 is **25%**, not 33%, using the starting value as the denominator. Correct the calculation or remove the percentage. Also explain what “forecast error” measures, since it is less specific than the QLIKE metric in the preceding bullet.
- **“Improved the model’s directional hit rate…”** This repeats the same model and 30-index framing as the first bullet. Keep it only if directional accuracy is a distinct, relevant result; otherwise, consolidate the project’s claims. Ensure the direction being predicted and the evaluation method are clear.

### Kaggle Market Prediction Competition

- **“Placed 41st of 2,900 teams…”** This is a good result. Use the competition’s official name so a reader can identify it, and ensure the ranking and private-leaderboard claim refer to the same final competition results.
- **“Cut validation leakage…”** Keep this if you can explain exactly how the original split leaked information and how the revised score gap was measured. This also affects the credibility of the next bullet’s validation-score claim.
- **“Wrote the team’s feature-selection script…”** Confirm that the “without losing validation score” comparison used the time-grouped, leakage-safe folds described in the preceding bullet. If it used the earlier validation setup, the result may be misleading.

## Skills and overall presentation

- **Methods line:** Correct the typo in “econometircs.” Group skills consistently and include only methods you can discuss in depth. For quantitative research roles, consider whether relevant tools or languages you genuinely use are missing; don’t add them just to fill the section.
- **Bullet selection:** The resume has several repeated or crowded claims, especially around the volatility model, cluster work, and the feature store. Trim weaker or overlapping bullets so the strongest research and technical results stand out.
- **Consistency:** Check that date formats, capitalization, and punctuation are consistent throughout. Also ensure the Ph.D. status and expected graduation date match your current situation.
