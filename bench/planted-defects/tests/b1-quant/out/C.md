## Highest-priority fixes

1. **Correct or remove the Sharpe annualization bullet immediately.** A daily Sharpe ratio is normally annualized using \(\sqrt{252}\), not 252. This error could disqualify you for quantitative roles and casts doubt on the other calculations.
2. **Reconcile the education and research-assistant dates.** Your Graduate Research Assistant position ends when the Ph.D. begins, even though it is described as graduate-level work. If the dates are accurate, explain the affiliation or degree context; if not, correct them.
3. **Fix the volatility-project arithmetic.** A decline from 0.20 to 0.15 is a 25% reduction relative to 0.20, not 33%.
4. **Fix the hit-rate terminology.** Moving from 52% to 58% is an increase of 6 percentage points, not 6%.
5. **Correct “econometircs.”** A typo in a core technical skill is particularly damaging.
6. **Check the validity of the Diebold–Mariano claim.** Standard DM tests can be inappropriate for nested forecasting models. Make sure your test choice, standard errors, and multiple-comparison treatment are defensible.
7. **Resolve the apparent gap in Ph.D.-period research.** Your listed university research role ends in August 2021, while your Ph.D. runs from September 2021 to 2026. For a Ph.D. candidate seeking quantitative work, having no listed research or teaching role during the degree is conspicuous.

---

## Header

### Name
No change needed.

### Phone and email
No substantive change needed. Make sure the email is professional and the phone number is the one you reliably answer.

### Code link
- Use a direct, recognizable repository or portfolio URL rather than a generic-looking path.
- Ensure the destination has polished pinned projects, documentation, and no unfinished or low-quality public repositories.
- Consider adding LinkedIn only if it is complete and consistent with the resume.

---

## Education

### Ph.D. line
- Verify that “candidate” is formally accurate. Some universities reserve that term for students who have passed qualifying or candidacy requirements.
- Reconcile the start date with the Graduate Research Assistant dates.
- Add your research area, dissertation topic, or advisor if relevant to quantitative research roles. The degree alone does not show what you have studied during the last several years.
- Use consistent date punctuation and preferably typographic en dashes throughout.

### B.S. line
- Keep it concise.
- Add honors or GPA only if they are strong and useful.
- If the 2020–2021 research position was connected to a master’s program, post-baccalaureate appointment, or another status, that missing context needs to appear somewhere.

---

## Experience

### Sunrise Bakery — position line
- Keep this role if it is your current employment, but allocate less space to it than to quantitative work.
- If you are targeting quant roles, two bullets are sufficient; the role should demonstrate leadership and operational discipline without dominating the page.
- Be prepared to explain how you are simultaneously completing the Ph.D. and working in this role.

### “Managed opening shifts…”
- Change “labour” to “labor” for consistency with the stated U.S. location.
- Clarify whether you directly supervised all six employees or coordinated a six-person shift.
- The budget outcome is useful, but “keeping within budget” is less differentiated than a quantified improvement. Add a stronger result only if one is available and supportable.

### “Ran daily stock counts…”
- Keep the 12% to 7% result.
- Specify the measurement period and how “unsold bread” was calculated if space permits; otherwise the number may appear selectively chosen.
- Make clear whether the change was attributable to your ordering decisions rather than a broader change in sales or production.

---

## Northpeak Capital

### Position line
- This is your strongest directly relevant experience and should remain prominent.
- Confirm that every performance figure and description is permitted under the employer’s confidentiality rules.
- If Northpeak is not widely known, a brief indication of the firm or desk type may help, but only if permitted.

### “Built a short-horizon order-book imbalance signal…”
- Clarify what “added 0.4 Sharpe” means: incremental portfolio Sharpe, change in the book’s Sharpe, or standalone signal Sharpe.
- Verify that the 18-month period was genuinely out of sample and not used repeatedly for model selection.
- Make sure “after costs” includes a defensible transaction-cost and market-impact model.
- Consider whether “the desk’s book” discloses proprietary information or overstates production adoption.
- Check consistency with the later reference to 30 indices; there may not be 30 genuinely liquid index-futures markets in the intended universe.

### “Cut the signal’s daily turnover…”
- Define the turnover convention internally and be able to explain it in interviews; turnover percentages are calculated in several different ways.
- Verify that 90% of gross returns and one-third lower estimated slippage were measured on the same evaluation sample.
- Retain the word “estimated” for slippage unless you have live execution evidence.
- Ensure the smoother was tested without tuning to the final out-of-sample period.

### “Confirmed the forecast gain…with standard Diebold–Mariano tests…”
- Revisit the statistical method. If the models are nested, a standard Diebold–Mariano test may not have the appropriate null distribution; a nested-model adjustment may be needed.
- State “test” or “tests” consistently with what you actually ran.
- Account for serial correlation with an appropriate long-run variance estimate.
- If you tested 30 markets separately, address multiple testing rather than implying that all results independently confirmed the same conclusion.
- Clarify whether “30 indices” means equity indices, index futures, or another universe.

### “Joining 120 microstructure features…”
- Fix the grammar: the bullet currently lacks a clear subject and main-sentence construction.
- Separate the data-engineering actions from the resulting feature-store outcome conceptually.
- Preserve the reuse result; adoption in two later projects is the most valuable part.
- Clarify what “point-in-time” guarantees were implemented, since this is an important anti-leakage claim.
- Keep the venue count only if it is not confidential.

### “Annualized the signal’s daily Sharpe ratio…”
- Remove this bullet even after correcting the formula. Correct annualization is a basic calculation, not a resume-level accomplishment.
- Recalculate every Sharpe figure elsewhere using the proper convention. The usual scaling is by \(\sqrt{252}\), subject to the return frequency and assumptions.
- Check whether autocorrelation in a short-horizon strategy requires a more careful annualization method than simple square-root scaling.

### “Documented the backtest assumptions…”
- Keep this only if space allows after stronger research bullets.
- Quantify use or adoption if possible; “for future interns” describes intended value rather than demonstrated impact.
- Make sure the documented failure regimes do not contradict the strength of the earlier performance claims.

---

## Ridgeway University — Graduate Research Assistant

### Position line
- Correct or explain the dates relative to the Ph.D.
- Verify that “Graduate Research Assistant” was the formal title if you had not yet started the listed graduate degree.
- If this work continued during the Ph.D., update the dates and distinguish changing responsibilities if necessary.

### “Built the lab’s simulation pipeline…”
- This is a strong bullet.
- Confirm that the three-day and five-hour measurements used comparable compute resources and workloads.
- If reproducibility involved more than fixed seeds—such as environment pinning, configuration tracking, or workflow management—make that scope clear elsewhere or in interviews.
- Avoid implying that fixed seeds alone guarantee full reproducibility.

### “Derived a variance bound…”
- Remove first-person wording for consistency with the rest of the resume.
- Clarify your individual contribution if the paper has multiple authors.
- Make sure “tightens…by a log factor” is accurate under the same assumptions as the previous bound.
- Verify that naming JASA is permitted while the paper is under review; some journals use double-anonymous review.
- Consider giving the paper its own publications or research section, especially if it is central to your Ph.D.

### “Taught weekly recitations…”
- Keep the 4.8/5 rating because it provides external evidence of effectiveness.
- Confirm whether you wrote all 12 problem sets or contributed to them; avoid implying sole authorship if they were collaborative.
- If space is tight for a quant resume, this is less important than research, publications, and technical work.

### “Released an open-source R package…while maintaining…”
- Split or substantially simplify this content. It currently combines package development, cluster administration, reading-group organization, grading, and download statistics.
- Ensure the 3,000-download result clearly applies only to the package.
- Prioritize the package and its adoption; the unrelated administrative tasks dilute the accomplishment.
- Identify the source of the download count and make sure automated dependency downloads are not being presented as active users.
- Move cluster administration into another bullet only if it involved meaningful technical ownership.

---

## Projects

### Volatility Forecasting Study — heading
- State what remains ongoing if the project has been listed as active since January 2024.
- Add a repository, paper, or reproducible artifact if available.
- Make sure this independent project is clearly distinct from the Northpeak work and does not use employer data, code, or ideas that could create an intellectual-property concern.
- Consider moving it into a research section if it is part of your Ph.D.

### “Beat a HAR-RV baseline…”
- Keep this as the lead project result.
- Specify whether the 7% is a relative QLIKE reduction and use the same convention throughout.
- Confirm that the baseline was properly tuned and evaluated on identical rolling or expanding windows.
- Describe uncertainty or statistical significance somewhere in the project if the difference is central.
- Use consistent terminology for the 30 assets: “equity indices” here versus “indices” or “index futures” elsewhere.

### “Cut forecast error from 0.20 to 0.15…”
- Correct the percentage: this is a 25% reduction relative to 0.20.
- Identify the error metric; “forecast error” is too vague, especially after the previous bullet specifically names QLIKE.
- Do not attribute the improvement jointly to added features and a changed loss unless you ran ablations that isolate each contribution.
- Resolve the redundancy with the first bullet, which already says the model was trained on realized-volatility features.
- Check whether 0.20 and 0.15 are comparable across all 30 indices or are averages with a stated aggregation method.

### “Improved the model’s directional hit rate…”
- Change “6%” to “6 percentage points,” unless you intend to report the approximately 11.5% relative increase.
- Define the predicted direction. For volatility, direction could mean change in volatility, movement relative to a threshold, or another target.
- Verify that 58% is statistically distinguishable from 50% after accounting for serial dependence and repeated testing.
- This bullet may be redundant if the QLIKE result is the project’s primary objective; retain it only if directional accuracy is economically relevant.

---

## Kaggle Market Prediction Competition

### Heading
- Use the actual competition name if disclosure is allowed. The current title is too generic to verify or understand.
- If the competition is well known, include the platform result in a form recruiters can confirm.

### “Placed 41st of 2,900 teams…”
- This is a strong and specific result.
- Top 2% is mathematically accurate, though the exact rank already communicates it.
- Confirm that 41st was the final private-leaderboard rank rather than an interim position.
- Make clear that this was a team result and avoid implying sole ownership of the entire model.

### “Cut validation leakage…”
- Use “leakage” only if information from the validation period actually entered model training or feature construction.
- Closing the local-to-leaderboard gap does not by itself prove leakage; it may reflect a more representative validation design.
- Verify that time-grouped folds respected both temporal ordering and any entity/group dependence.
- Explain the score scale if a 0.02 gap is not obviously material for that competition.

### “Wrote the team’s feature-selection script…”
- This is a good individual-contribution bullet.
- Confirm that permutation importance was calculated only within properly isolated training or validation folds.
- Quantify “without losing validation score” more precisely if there was a small change rather than literally zero change.
- Ensure that the reduction from 900 to 300 did not use private-leaderboard feedback.

---

## Skills

### “Programming: Python, R, SQL, C++, Kafka”
- Move Kafka out of the programming-language category; it is a platform/tool.
- Separate languages from frameworks, libraries, and infrastructure.
- Keep C++ only if you can handle technical interview questions in it.
- Add proficiency evidence through projects rather than expanding the list indiscriminately.

### “Methods: time-series econometircs…”
- Correct “econometircs” to “econometrics.”
- Move PyTorch out of “Methods”; it is a framework.
- Standardize capitalization and hyphenation.
- Ensure the methods list reflects demonstrated work. Market microstructure, forecasting, statistical learning, backtesting, and transaction-cost modeling may be more directly supported than a generic framework name.
- Add Bayesian inference only if it appears in your research or you can discuss substantive applications.

---

## Structural changes

- Add a **Research/Publications** section if the JASA submission, dissertation work, or independent volatility study is substantive. Your current resume does not adequately show what you did during most of the Ph.D.
- Put the most relevant quantitative material first. Depending on your target, education followed by quantitative experience/research may be stronger than leading the experience section with the bakery role.
- Reduce duplication across the three volatility-project bullets.
- Use consistent U.S. spelling, date formatting, punctuation, and terminology.
- Check all percentages for whether they represent relative changes or percentage-point changes.
- Be prepared to defend every performance claim with evaluation windows, baselines, transaction costs, uncertainty estimates, and leakage controls. Quant reviewers will scrutinize those details closely.