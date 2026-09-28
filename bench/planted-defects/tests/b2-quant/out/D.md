# Resume Review

## Overall assessment

This is a strong quantitative-research resume in terms of technical substance, but it currently has three serious problems:

1. **Credibility risk:** One bullet openly describes selecting the best Sharpe from 400 configurations and presenting it as expected live Sharpe. That reads as backtest overfitting and could undermine the rest of the resume.
2. **Duplication:** The order-book imbalance result appears in both the Northpeak internship and the Kaggle project, almost identically.
3. **Target-role ambiguity:** The resume points toward quantitative research, but the summary is absent, the skills section is thin, and the current bakery role is visually prominent. A recruiter must infer the intended role rather than being told immediately.

The underlying experience is good enough for quantitative research, quantitative developer, or financial machine-learning roles, but the document needs tighter prioritization and a more careful presentation of validation methodology.

---

# Section-level changes

## Header

### Contact information

**Change:** Add a location or clarify whether you are open to relocation, if relevant. Consider whether the code-link label makes its purpose obvious.

**Why:** Quantitative-research recruiters generally expect a location, and a generic code URL gives no indication whether it contains research code, publications, or unrelated projects.

**Change:** Verify that the code site contains projects corresponding to the claims in the resume, especially the feature store, volatility forecasting, and R package work.

**Why:** The resume makes unusually specific technical claims. A technical reviewer may check the link.

---

## Education

### Ridgeway University — Ph.D. candidate in Statistics

**Change:** Make the research area or specialization visible near the degree.

**Why:** “Ph.D. candidate in Statistics” is relevant but broad. The rest of the resume shows statistical learning, time series, volatility forecasting, and financial econometrics. Those areas should be immediately connected to the degree.

**Change:** Clarify whether the Ph.D. is ongoing despite the graduate research assistantship ending in August 2021.

**Why:** The dates create a potential question: the Ph.D. begins in September 2021, but the listed university research role ends in August 2021. This may be correct, but the timeline currently makes the relationship between the program and the research lab unclear.

### Ridgeway University — B.S. in Mathematics

**Change:** Keep this only if needed for completeness or if the institution is a meaningful credential. Give the Ph.D. more visual emphasis.

**Why:** For quantitative research roles, the current doctoral program is much more important than the undergraduate degree. The undergraduate entry should not compete with it for attention.

---

# Experience

## Sunrise Bakery — Assistant Store Manager

### “Managed opening shifts and a team of 6 bakers and cashiers…”

**Change:** Keep this role for employment continuity, but reduce its visual and bullet-level prominence if applying to quantitative roles.

**Why:** It demonstrates operations management and responsibility, but it is not directly relevant to quantitative research. Its current placement above the most relevant technical experience may cause a quick reader to wonder whether you are primarily pursuing retail operations.

**Change:** Make sure “weekly labour budget” uses spelling consistent with the rest of the resume and target market.

**Why:** The resume otherwise uses US conventions. Inconsistent spelling can look careless, especially in an application to a detail-oriented firm.

**Change:** Quantify the budget outcome if you have a defensible figure; otherwise avoid giving this bullet more space than the technical roles.

**Why:** The bullet states that you kept the store within budget but does not show the scale or result. It is less persuasive than your other quantified achievements.

### “Ran daily stock counts and supplier orders…”

**Change:** Keep only if you need to demonstrate current employment or operational ownership. Place less emphasis on it than on finance and research work.

**Why:** The reduction from 12% to 7% is concrete and credible, but the achievement is unrelated to the target quantitative domain. It should not displace relevant research evidence.

**Change:** Clarify whether the percentages refer to unsold units, revenue, or production volume if there is any possible ambiguity.

**Why:** “12% to 7% of production” is understandable, but operational metrics need a clearly defined denominator.

---

## Northpeak Capital — Quantitative Research Intern

This is the strongest section and should remain the centerpiece of the resume.

### “Improved risk-adjusted returns by 35%…”

**Change:** Define the exact metric behind “risk-adjusted returns,” the comparison baseline, and whether the result is in-sample, validation, or out-of-sample.

**Why:** “Risk-adjusted returns” is vague, and a 35% improvement is a high-impact claim that will attract scrutiny. The reader needs to know whether this means Sharpe ratio, return per unit of volatility, or another measure.

**Change:** State the costs, constraints, and evaluation period associated with the result if they are not already clear elsewhere.

**Why:** A trading result is only meaningful when the reader knows whether transaction costs, capacity, turnover, and realistic execution assumptions were included.

### “Validated the signal on 6 years of tick data…”

**Change:** Keep this bullet and make it one of the first bullets in the internship.

**Why:** This is one of the most valuable claims in the resume. Purged walk-forward splits and an embargo period signal awareness of leakage and time-series validation, which are central to quantitative research.

**Change:** Clarify the relationship between the six years of data, training windows, validation windows, and the final test period.

**Why:** “Validated on six years” is not enough to establish that the result was genuinely out of sample. A technical reviewer will want to know how the data was partitioned.

### “Wrote a feature store for 120 microstructure features…”

**Change:** Keep this bullet. Add the production or research workflow impact if you can substantiate it, such as reproducibility, reduced feature-generation time, or reduced point-in-time errors.

**Why:** This shows platform-building ability rather than only model experimentation. Reuse by two later projects is useful evidence of adoption, but the bullet could better establish why the feature store mattered.

**Change:** Ensure “point-in-time joins” is technically accurate for the implementation.

**Why:** This is a strong domain-specific phrase, but it invites technical questioning about timestamp handling, data revisions, corporate actions, and leakage controls.

### “Presented the signal…”

**Change:** Keep this bullet, but distinguish clearly between research approval and actual deployment or trading.

**Why:** Approval for a small live allocation is a valuable credibility signal, but the current wording may be interpreted as evidence of realized live performance when it only establishes authorization.

**Change:** Include the size, duration, or status of the live allocation only if those details are permitted and verifiable.

**Why:** Without deployment scale or outcome, the claim demonstrates communication and internal trust but not necessarily production success.

### “Selected the smoother’s parameters from 400 backtested configurations…”

**Change:** Remove this bullet or substantially change its role in the resume by presenting it as a methodological limitation or model-selection problem, not as a positive achievement.

**Why:** In its current form, this is the most damaging line on the resume. Selecting the best configuration from 400 backtests and calling its Sharpe the expected live Sharpe is classic multiple-testing or backtest-overfitting risk. A quantitative researcher may conclude that the reported performance is unreliable.

**Change:** If the selection procedure was corrected later, describe the correction elsewhere in the experience or project material, but do not present the uncorrected best result as expected performance.

**Why:** The issue is not merely wording. It concerns statistical validity. This bullet can cause a technical reviewer to discount the other performance claims.

### “Built a short-horizon order-book imbalance signal…”

**Change:** Keep the achievement in only one location. It should probably remain under Northpeak if it was performed during the internship.

**Why:** This is a strong, domain-relevant result, but duplicating it under the Kaggle project makes the resume look padded and raises uncertainty about where the work was actually done.

**Change:** Verify that “added 0.4 Sharpe” has a precisely defined comparison, period, and cost model.

**Why:** Sharpe improvements are highly sensitive to annualization, portfolio construction, turnover, leverage, and transaction-cost assumptions. The claim needs to be defensible in an interview.

**Change:** Avoid presenting the same result as both an internship achievement and a competition achievement unless the two efforts are genuinely separate.

**Why:** The current duplication could be interpreted as double-counting one project or misrepresenting ownership.

---

## Ridgeway University — Graduate Research Assistant

### “Cut a 2,000-run Monte Carlo study from 3 days to 5 hours…”

**Change:** Keep this bullet, but clarify whether the speedup came from parallelization alone or also from hardware, code, algorithm, or implementation changes.

**Why:** It demonstrates computational efficiency, but the phrase “same random seed on every worker” deserves careful treatment. Using the identical seed on every worker may create correlated or duplicate random streams depending on the implementation.

**Change:** Verify that the reproducibility claim is statistically and technically correct.

**Why:** A technical reviewer may question whether identical seeds preserve independent Monte Carlo draws. This is a potential credibility issue.

### “Derived a variance bound for a sparse regression estimator…”

**Change:** Keep this as a high-value research bullet, but clarify your authorship and the status of the JASA paper.

**Why:** The mathematical contribution is impressive, but “my proof” may overstate ownership if the paper has multiple authors. The resume should make individual contribution and publication status unambiguous.

**Change:** Make sure the paper is explicitly identified as under review rather than accepted or published.

**Why:** “Under review at JASA” is appropriate if accurate. Do not allow formatting elsewhere to imply publication.

**Change:** Explain the significance of the log-factor improvement only if a technical audience is expected.

**Why:** For quant research roles, the result signals mathematical depth. For less technical screening, the current wording may be difficult to interpret, so it should be balanced by more obviously applied accomplishments elsewhere.

### “Taught weekly recitations for 60 students…”

**Change:** Keep this only if applying to research, academic, or highly technical roles where communication and teaching matter. Otherwise reduce its prominence.

**Why:** It demonstrates communication, responsibility, and technical explanation, but it is less relevant than your modeling, validation, and software work.

**Change:** Verify that the 4.8/5 rating is based on a meaningful number of responses and that the institution permits its use.

**Why:** Course evaluations can be viewed as weak evidence if the response count is not known.

### “Released an open-source R package…”

**Change:** Keep this bullet and consider giving it more prominence.

**Why:** This is one of the strongest credibility signals on the resume: independent software, a technically relevant method, and measurable adoption.

**Change:** Clarify whether the 3,000 downloads are package downloads, unique users, or another platform metric.

**Why:** Adoption metrics are persuasive only when their meaning is clear. A technical reviewer may distinguish downloads from active use or external citations.

**Change:** Include evidence of maintenance, documentation, tests, or external users if available.

**Why:** Those details would establish software quality and sustained adoption rather than one-time release activity.

---

# Projects

## Volatility Forecasting Study

This is a highly relevant project and should remain prominent.

### “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%…”

**Change:** Keep this bullet, but specify the data period and ensure “out-of-sample” is used accurately.

**Why:** The comparison is highly relevant to financial econometrics. However, a reviewer will want to know whether the 30 indices were evaluated over a genuinely untouched test period and whether model choices were made before seeing those results.

**Change:** Clarify whether the 30 indices were treated as separate series, pooled, or used in a cross-sectional training setup.

**Why:** That distinction affects how generalizable the result is and how much information may have been shared across assets.

**Change:** Add the economic or operational relevance only if supported by the research design.

**Why:** A lower forecast loss does not automatically imply trading value. Do not let the bullet imply trading performance unless the study tested it.

### “Tested significance with Diebold-Mariano tests…”

**Change:** Keep this bullet, but verify whether the multiple-index testing procedure accounts for multiple comparisons and cross-sectional dependence.

**Why:** Reporting significance for 24 of 30 indices is useful, but a technical reviewer may ask whether the 5% threshold was adjusted and whether the tests are independent.

**Change:** Clarify what “both crisis periods” means and whether those periods were pre-specified.

**Why:** Post hoc selection of crisis periods could weaken the claim. Pre-specified evaluation periods are more credible.

### “Wrote up the method…”

**Change:** Keep this as supporting evidence, but make the working-paper and seminar status explicit and consistent.

**Why:** It demonstrates communication and research maturity. It should not be confused with peer-reviewed publication.

**Change:** Consider whether the 12-page length adds value.

**Why:** Page count is less persuasive than the paper’s availability, technical quality, or seminar audience. Keep the fact only if it signals substantial work rather than padding.

---

## Kaggle Market Prediction Competition

### “Engineered features and trained gradient-boosting models…”

**Change:** Add the competition result, ranking, or measurable outcome if one exists.

**Why:** As written, this is a generic activity statement. It does not show how well the work performed or what you contributed relative to the team.

**Change:** Clarify your individual contribution within the team of three.

**Why:** Team projects require ownership boundaries. This is especially important because another bullet duplicates work listed under Northpeak.

### “Cut validation leakage by switching to time-grouped folds…”

**Change:** Keep this bullet, but explain whether the change improved leaderboard performance, reduced the validation-to-leaderboard gap, or both.

**Why:** This is a strong methodological point. The current claim shows a 0.02 gap closing, but the reader needs to understand whether the resulting validation estimate became more realistic.

**Change:** Ensure “leakage” is technically accurate and not simply a change in split strategy.

**Why:** Time-grouped folds can reduce temporal leakage, but the exact source of leakage should be clear if questioned.

### “Added 0.4 to the Sharpe ratio…”

**Change:** Remove this bullet from the project unless it represents a separate result from the Northpeak work.

**Why:** It appears to duplicate the internship bullet almost exactly. This is the clearest structural problem in the resume.

**Change:** If it is genuinely separate, distinguish the data, period, strategy, ownership, and evaluation setup.

**Why:** Without those distinctions, a reviewer may conclude that one achievement has been counted twice.

---

# Skills

## Programming

**Change:** Put the most role-relevant tools first and distinguish regularly used tools from merely familiar tools.

**Why:** Python, SQL, and C++ are likely more important for quantitative research than Kafka unless the target role specifically involves data infrastructure or streaming systems.

**Change:** Add relevant libraries and tooling only if you can discuss them technically.

**Why:** A quantitative recruiter may expect common numerical, machine-learning, data, and backtesting tooling. However, listing tools you cannot defend is worse than omitting them.

**Change:** Consider adding version control, testing, Linux, cloud, or distributed-computing tools if they are genuinely part of your experience.

**Why:** The experience bullets imply research infrastructure and parallel computation, but the skills section does not currently expose that engineering capability.

## Methods

**Change:** Correct the spelling of “time-series econometrics.”

**Why:** The current spelling error is especially damaging because it is a core target-domain method.

**Change:** Group methods by type rather than presenting a short undifferentiated list.

**Why:** Time-series econometrics, Bayesian inference, gradient boosting, and PyTorch represent different categories. Clear grouping helps both ATS parsing and human scanning.

**Change:** Add the specific methods demonstrated in the experience if accurate, such as purged walk-forward validation, embargoed validation, volatility modeling, market microstructure, feature engineering, and statistical testing.

**Why:** These are stronger signals for quantitative research than generic “gradient boosting.” They are already evidenced in the experience section and should be easier to find.

**Change:** Do not add “quantitative research,” “algorithmic trading,” or similar labels unless the rest of the document supports them—which it generally does—but ensure the terminology is consistent.

**Why:** The resume currently implies the target field without explicitly naming it in a summary or heading.

---

# Missing summary

**Change:** Add a concise professional summary at the top that identifies the target role, doctoral status, core quantitative domain, and strongest evidence of research or trading impact.

**Why:** This is the single biggest presentation gap. Without a summary, the recruiter must infer whether you are seeking a quantitative researcher, quant developer, data scientist, or academic role.

**Change:** Make the first two lines carry your strongest signals: doctoral statistics training, quantitative research experience, time-series or market-microstructure expertise, and validated modeling results.

**Why:** Recruiters may spend only a few seconds deciding whether to continue. The resume currently opens with education rather than a clear professional identity.

**Change:** Do not use the summary to claim live-trading expertise beyond what the resume can substantiate.

**Why:** The resume has real quant-research evidence, but the live-allocation claim is limited. Keep the positioning ambitious but precise.

---

# Ordering and prioritization

**Change:** Consider moving the most relevant quantitative experience and research projects ahead of the bakery role, or visually separating the bakery position as additional experience.

**Why:** The current chronology is reasonable, but the most recent job is not the most relevant one. For a quant application, relevance should be immediately visible.

**Change:** Put the strongest Northpeak bullets first, followed by the volatility project, then the R package and statistical-learning work.

**Why:** The reader should encounter market validation, point-in-time data handling, production-oriented research infrastructure, and financial forecasting before less relevant operational or teaching work.

**Change:** Do not include every technically interesting result if it creates contradictions or excessive density.

**Why:** Six bullets for a three-month internship is a lot, especially when one is actively damaging and another is duplicated elsewhere. Selectivity will make the credible achievements stronger.

---

# Technical credibility issues to resolve before submitting

These require factual review, not merely editing:

1. **Parameter selection from 400 configurations:** Determine whether the reported Sharpe was adjusted for multiple testing or evaluated on untouched data. The current presentation is a major red flag.
2. **Duplicate order-book signal:** Establish whether the Northpeak and Kaggle bullets describe the same work.
3. **35% risk-adjusted return improvement:** Define the metric, baseline, period, and out-of-sample status.
4. **0.4 Sharpe improvement:** Define how Sharpe was calculated and whether costs, turnover, and capacity were included.
5. **Monte Carlo random seeds:** Confirm that identical worker seeds did not produce duplicate or correlated simulations.
6. **Statistical significance across 30 indices:** Check multiple-testing and dependence issues.
7. **JASA paper status and authorship:** Make contribution and publication status exact.
8. **3,000 R-package downloads:** Define the metric and confirm the number.

---

# Five-perspective assessment

## ATS scan

**Likely result for a quantitative-research posting:** Marginal to strong, depending on the job description.

**Strengths:**
- Python, R, SQL, C++
- PyTorch and gradient boosting
- Time-series modeling
- Microstructure and order-book features
- Walk-forward validation
- Point-in-time joins
- Sharpe and QLIKE metrics
- Statistical testing

**Weaknesses:**
- No explicit target-role title
- No summary
- “Time-series econometrics” is misspelled
- Skills section omits several methods demonstrated in the experience
- No explicit mention of backtesting, portfolio construction, or algorithmic trading terminology, if those are appropriate to the intended role

## Recruiter glance

**Verdict: Maybe, with potential to become Forward.**

The doctoral degree and Northpeak internship are credible signals, but the recruiter may not immediately understand the intended role. The bakery position as the current job creates ambiguity, and the absence of a summary makes the document less immediately targeted.

## HR screen

**Verdict: Likely phone screen for quant-research roles, assuming the technical claims are accurate.**

The resume shows doctoral training, relevant internship experience, strong quantitative projects, and measurable outcomes. The main risks are unclear positioning, duplicate achievements, and the potentially problematic model-selection bullet.

## Hiring manager

**Verdict: Maybe to Interview, depending heavily on the target role.**

The hiring manager will notice:
1. Strong awareness of leakage and time-series validation.
2. Practical work with microstructure data and feature infrastructure.
3. Significant risk in the claim involving selection from 400 backtests.
4. Possible double-counting of the order-book signal.
5. Good combination of mathematical theory, software, and applied financial modeling.

**Likely first interview question:** How did you prevent overfitting and account for multiple testing when selecting among the 400 configurations?

## Technical reviewer

**Verdict: Interested but cautious.**

The technical depth is promising, but the reviewer will likely investigate the statistical validity of the performance claims before trusting the results. The parameter-selection bullet may cause them to scrutinize every backtest claim.

---

# Recommended change order

## Highest priority

1. Resolve or remove the 400-configuration model-selection bullet.
2. Remove the duplicated order-book achievement or establish that the two results are different.
3. Add a targeted summary identifying the intended quantitative role.
4. Correct “econometircs.”
5. Define the evaluation methodology behind the 35% and 0.4 Sharpe claims.
6. Clarify the timeline between the Ph.D. and the graduate research assistantship.

## Medium priority

1. Reorder or visually de-emphasize the bakery role.
2. Strengthen the skills section using methods already demonstrated in the resume.
3. Clarify ownership in the Kaggle team project.
4. Add measurable outcomes to the generic Kaggle modeling bullet.
5. Clarify the R-package adoption metric.
6. Make publication and working-paper status consistent and precise.

## Low priority

1. Improve the code-link labeling.
2. Add location or relocation information if useful.
3. Reduce less relevant teaching or retail detail depending on available space.
4. Standardize spelling and terminology throughout.

## Bottom line

Do not submit this version unchanged. The resume has strong raw material, especially the Northpeak internship, volatility study, R package, and statistical-learning work. But the uncorrected model-selection claim and duplicated trading result create avoidable credibility problems. Fix those first, then add a clear quant-research identity at the top and make the validation methodology the central narrative.