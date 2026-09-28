# Résumé critique — inferred target: quantitative research

**Overall:** You have credible quant-research evidence—market data, out-of-sample testing, statistical methods, and a reused research tool. The biggest issue is not presentation polish: two methodological claims could make a technical reviewer doubt the validity of your results. Fix those before applying. I’m assessing this for quantitative research roles generally; without a job description, I can’t measure a real JD keyword match or tailor the review to a particular employer.

## Domain lens

**Likely reviewer:** A quant-research hiring manager or researcher who evaluates signals, backtests, and research infrastructure. They will look for evidence that results survive realistic validation and trading costs, and will be alert to leakage, selection bias, and unclear attribution.

**Company context and JD vocabulary:** No company or JD was provided, so I can’t assess company-specific priorities or extract its vocabulary. The résumé itself points toward quant research in systematic trading. Relevant terms already present include *futures, microstructure, order-book imbalance, time-series econometrics, walk-forward splits, point-in-time joins, Sharpe,* and *transaction costs*.

**Likely gaps to check against each posting:**
- **Potentially serious:** SQL, C++, production research systems, execution, or portfolio construction—only add them if you actually have the experience and the target role asks for them.
- **Not assessable from this résumé alone:** Whether direct experience with the employer’s asset class, trading stack, or research process is required.

**Transfer of your strongest work:** Your walk-forward validation, point-in-time feature store, and volatility-forecast testing are relevant to systematic research because they show work on temporal validation, usable data, and statistical testing. Your résumé should make the reliability and limits of those results clear—not just their headline performance.

## Five-perspective read-through

### ATS scan

There’s no JD, so this is an indicative scan against common quant-research terms, not a measured ATS match.

| Common term | Match |
|---|---|
| Quantitative research | Partial — in a job title |
| Python | Yes |
| Statistics | Yes |
| Time-series econometrics | Yes |
| Backtesting | Yes |
| Futures | Yes |
| Microstructure | Yes |
| Order-book imbalance | Yes |
| Walk-forward validation | Yes |
| Point-in-time data | Yes |
| Transaction costs | Yes |
| Sharpe ratio | Yes |
| Risk-adjusted returns | Yes |
| Volatility forecasting | Yes |
| Monte Carlo | Yes |
| Gradient boosting | Yes |
| PyTorch | Yes |
| Portfolio construction | Partial — capacity and allocation are mentioned |
| SQL | Not listed |
| C++ | Not listed |

Do not add tools or methods just to match a posting. If SQL, C++, or production deployment are genuine skills, their absence could matter for some roles.

### Recruiter glance

**Verdict: Forward, with a question mark.** The quantitative-research internship and Ph.D. candidate status are immediately relevant. The personal details take up space and may distract; the strongest performance evidence is not consistently presented first.

### HR screen

**Verdict: Likely phone screen for a general quant-research role.** The education, internship, programming, and research experience clear a plausible baseline. There is no summary, but the experience section largely establishes your direction. The accuracy concerns below could become a problem once a technical reader examines the bullets.

### Hiring manager

**Verdict: Maybe—potentially interview-worthy after technical credibility issues are resolved.**

1. The futures, microstructure, validation, and feature-store work is directly relevant.
2. The claim that the best of 400 configurations is the expected live Sharpe is a substantial warning sign.
3. The same order-book result appears in both the internship and project sections, so its ownership and context are unclear.

**Likely first question:** How did you account for selection bias when choosing among 400 backtested configurations?

### Technical reviewer

I can’t independently verify the figures from the résumé alone. I can, however, flag claims that need clarification or methodological support:

- The parameter-selection claim appears to treat the best backtest result as an expected live result. That does not account for selection bias.
- The Monte Carlo bullet says every worker used the same random seed. If this produced identical or correlated random streams, the run count and resulting uncertainty estimates may be misleading.
- The Sharpe improvement appears in two sections with the same signal and 18-month test period. Clarify whether these are the same result or distinct work.
- The JASA paper is appropriately identified as under review; don’t imply acceptance or publication.
- “Pioneered” and “robust, actionable insights” are vague, high-level claims without a concrete result.

## Changes by section and bullet

### Contact and personal details

- **Remove date of birth and nationality.** They aren’t needed to assess your research qualifications and disclose personal information that can invite bias.
- **Keep contact details to professional essentials.** Make sure the code link leads directly to relevant, well-documented work; a bare profile link is less persuasive than an accessible portfolio.
- **Consider a concise target-role headline or summary only if it helps position you.** There’s no need to add one just to fill space; the experience already signals quant research.

### Education

- **Keep the expected Ph.D. completion date.** It answers an important timing question.
- **Consider adding a dissertation or research focus if it is directly relevant to the roles you’re pursuing.** The degree alone does not show what your doctoral research contributes.
- **Check whether your B.S. needs to remain.** It is reasonable to keep, but it is less important than your Ph.D. work and relevant experience.

### Northpeak Capital — Quantitative Research Intern

- **“Improved risk-adjusted returns by 35%…”** Clarify what “risk-adjusted returns” means, the comparison baseline, the measurement period, and whether the result is out of sample and net of costs. Without that context, the percentage is hard to evaluate.
- **“Validated the signal on 6 years of tick data…”** This is useful evidence. Clarify how the splits and embargo were selected and whether the final result came from an untouched test period. The current wording describes good safeguards but not the final evaluation design.
- **“Wrote a feature store for 120 microstructure features…”** Keep this; reuse by other projects is meaningful evidence of impact. Make sure “feature store” accurately describes what you built, and specify your contribution if it was shared work.
- **“Presented the signal… approved a small live allocation…”** Keep the approval outcome, but be precise about whether the allocation was approved, launched, or actually traded. Those are different levels of evidence.
- **“Selected the smoother’s parameters from 400 backtested configurations…”** This needs a substantive change, not just polishing. Reporting the best configuration’s Sharpe as expected live Sharpe is not statistically justified by itself and raises an overfitting concern. Explain how you corrected for multiple testing or evaluated the selected parameters on independent data; otherwise, remove the claim about it being expected live performance.
- **“Built a short-horizon order-book imbalance signal…”** This is a strong, specific result, but it overlaps with the Kaggle project bullet. Clarify whether it is the same signal and result. If so, keep the full achievement in one place and make the other entry distinct; if not, distinguish their datasets, ownership, or evaluation periods.
- **Reorder the internship bullets after fixing the claims.** The clearest, defensible results and strongest evidence of research impact should appear first. The parameter-selection bullet should not lead or remain prominent while its statistical basis is unclear.

### Ridgeway University — Research Assistant

- **“Cut a 2,000-run Monte Carlo study…”** Resolve the same-seed issue before using this claim. Parallel workers generally need independent, reproducible random streams; using the same seed on every worker could duplicate or correlate runs. Confirm how the code generated streams and whether the study’s results remain valid.
- **“Derived a variance bound…”** Keep this and retain the under-review status. It is a strong research contribution. Make sure “tightens the previous bound by a log factor” is technically precise and supportable.
- **“Taught weekly recitations…”** Correct the tense so the teaching and problem-set contributions are consistent with a past role. If the 4.8/5 rating is useful, indicate what it measures and, if available, how many students responded.
- **“Released an open-source R package…”** Keep this. The download count is a useful adoption signal; include the package name or a direct link so a reviewer can verify and explore it.

### Volatility Forecasting Study

- **“Pioneered a data-driven, research-first approach…”** Remove or substantially reconsider this bullet. It is generic and self-promotional, and it doesn’t tell a quant reviewer what you tested, what improved, or how you measured the result.
- **“Tested significance with Diebold-Mariano tests…”** This is the strongest project bullet. Clarify what “forecast gain” measures and what the two crisis periods are, if that context matters to the role. Keep the multiple-testing correction visible.
- **“Wrote up the method…”** Keep the working-paper and seminar details, but make the status clear: a departmental seminar presentation is useful evidence of communication, not the same as publication or external peer review.

### Kaggle Market Prediction Competition

- **“Engineered features and trained gradient-boosting models…”** This is too generic to show your contribution. Add meaningful context about the competition outcome or the work you personally owned, if you have it.
- **“Cut validation leakage…”** Clarify the setup. A 0.02 validation-to-leaderboard gap is not by itself proof that leakage was reduced; explain what was leaking and why time-grouped folds addressed it.
- **“Added 0.4 to the Sharpe ratio…”** Resolve the overlap with the Northpeak bullet before keeping this. The résumé currently makes it difficult to tell whether this was competition work, internship work, or one result credited in both places.

### Skills

- **Add only relevant, demonstrable tools and methods that are missing.** The current list is short for quant roles; some postings may expect SQL, C++, Git, Linux, market-data tooling, or portfolio/execution methods. Don’t add any that you cannot discuss in an interview.
- **Make the category labels and contents specific enough to be useful.** “Methods” combines broad areas; a reviewer should be able to distinguish your statistical, machine-learning, and financial-research capabilities without inferring too much.

## Eight-dimension scoring

These scores are estimates for a general quant-research role, not a particular posting. Visual scoring is especially tentative because I only have the text, not the rendered résumé.

| Dimension | Score | Weight | Weighted | Notes |
|---|---:|---:|---:|---|
| ATS keywords | 7.5/10 | 15% | 1.13 | Relevant vocabulary, but no JD match can be verified. |
| Summary | 7/10 | 10% | 0.70 | No summary; experience mostly establishes the target. |
| Skills | 6.5/10 | 10% | 0.65 | Relevant but sparse. |
| Bullet quality | 7/10 | 25% | 1.75 | Strong evidence, weakened by methodological and attribution issues. |
| Publications/research | 7.5/10 | 10% | 0.75 | Relevant research; publication status is appropriately qualified. |
| Narrative coherence | 7.5/10 | 15% | 1.13 | Clear quant-research direction, with some duplicated or generic material. |
| Page fill and visual | 7.5/10 | 5% | 0.38 | Cannot assess layout or page count from plain text. |
| Credibility signals | 6.5/10 | 10% | 0.65 | Good metrics and adoption evidence, but technical claims need resolution. |
| **Total** |  | **100%** | **7.14/10** | **Promising, but fix the credibility issues before submission.** |

## Interview likelihood

These are rough estimates for a general quant-research opening, not predictions for a specific employer.

| Reader | Indicative likelihood | Main factor |
|---|---:|---|
| ATS | 65–80% | Good general quant vocabulary; actual JD match unknown. |
| Recruiter | 70–80% | Relevant internship and Ph.D.; personal details should be removed. |
| HR | 65–75% | Meets a plausible baseline for quant research. |
| Hiring manager | 40–60% | Relevant work, but parameter selection and duplicated results invite scrutiny. |
| Technical panel | 35–55% | Strong topics, with important validation and reproducibility questions. |

**Ceiling:** The résumé has a solid base for quant research. Its near-term improvement depends less on adding keywords than on resolving the validity, attribution, and clarity issues above. A JD-specific ceiling cannot be estimated without the posting.

## Interview discussion points

| Résumé topic | What to be ready to explain |
|---|---|
| Futures signal and smoother | The baseline, evaluation period, cost assumptions, and whether the performance estimate is genuinely out of sample. |
| Selection among 400 configurations | How you handled multiple testing and obtained an unbiased estimate of selected-model performance. |
| Walk-forward testing | Split design, embargo rationale, and which data remained untouched until final evaluation. |
| Monte Carlo study | How independent random streams were produced across workers and how reproducibility was maintained. |
| Feature store | How point-in-time correctness was enforced and what the later projects reused. |
| Variance bound | Your individual contribution, the prior result being improved, and the significance of the log-factor tightening. |
| Forecasting study | What the forecast metric measures, why the statistical test was appropriate, and how the correction affected the conclusion. |

## Prioritized verdict

**Tier 1 — fix before applying**
1. Resolve the 400-configuration selection-bias claim and whether the reported Sharpe is a defensible estimate of live performance.
2. Verify and accurately describe the Monte Carlo random-seed setup.
3. Reconcile the repeated order-book signal and Sharpe result across Northpeak and the Kaggle project.
4. Clarify the basis and evaluation conditions for the 35% and Sharpe-improvement claims.
5. Remove the birth date and nationality.

**Tier 2 — worthwhile**
1. Strengthen or remove the generic volatility-project bullet.
2. Add context to the Kaggle work, including outcome and individual contribution where available.
3. Make the teaching bullet’s tense and rating context clear.
4. Add relevant skills only where they are both true and useful for target postings.
5. Link to the R package and relevant code or research artifacts.

**Tier 3 — lower priority**
1. Refine minor wording and ordering after the factual and methodological issues are settled.
2. Add a summary only if a specific posting makes your target or research focus unclear.

**Verdict:** Make the Tier 1 changes first. They address trust and technical defensibility—the issues most likely to determine whether a quant researcher advances this résumé.