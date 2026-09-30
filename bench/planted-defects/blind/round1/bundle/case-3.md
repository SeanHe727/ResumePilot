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
Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2021 - Aug 2021
- Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo
study from 3 days to 5 hours and making runs reproducible by seed.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous
bound by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets
and earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while
maintaining the lab’s shared cluster, organizing the weekly reading group and grading for
two courses, which was downloaded 3,000 times in its first year.
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Jun 2020 - May 2021
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its
weekly labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of
production.
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

Your resume has strong quantitative content and unusually good use of metrics. The main issues are two mathematical errors, some credibility/consistency concerns, repetitive project bullets, and a few phrasing problems.

## Fix these immediately

### 1. Correct the Sharpe annualization error

This bullet is mathematically incorrect:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252...

Under the standard assumption, daily Sharpe is annualized by multiplying by **√252**, not 252. Serial correlation may require further adjustment.

Better yet, remove this bullet entirely—it highlights a routine calculation rather than an accomplishment. Also verify that every Sharpe figure elsewhere in the resume was calculated correctly.

### 2. Correct the percentage improvement

Going from 0.20 to 0.15 is a **25% reduction**, not 33%:

\[
(0.20 - 0.15) / 0.20 = 25\%
\]

Rewrite:

> Reduced forecast error from 0.20 to 0.15 (25%) by adding realized-volatility features and an asymmetric loss.

Also name the error metric. “Forecast error” alone is too vague.

### 3. Fix the typo

> time-series **econometircs**

should be:

> time-series **econometrics**

## Strengthen the Northpeak internship

This is your most relevant experience, so it should be polished and easy to trust.

### Sharpe bullet

Current:

> Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.

“Added 0.4 Sharpe” is slightly ambiguous. Clarify whether this means the portfolio Sharpe increased by 0.4 or whether the signal had a Sharpe of 0.4.

Possible rewrite:

> Developed a short-horizon order-book imbalance signal for liquid index futures that increased simulated portfolio Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.

If possible, also state whether the test was fully held out and whether the Sharpe increase was incremental to the existing book.

### Turnover bullet

This is strong. Tighten it:

> Reduced daily turnover from 34% to 21% using a cost-aware position smoother, retaining 90% of gross returns while lowering estimated slippage by 33%.

### Diebold–Mariano bullet

Current:

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

Potential issues:

- “the 30 indices” should be “30 indices.”
- A standard Diebold–Mariano test can be problematic for nested models depending on the setup.
- “Confirmed” is too absolute without significance levels.

If methodologically accurate, use:

> Evaluated forecast improvements against a HAR-RV baseline across 30 indices using Diebold–Mariano tests with HAC standard errors.

Include the result if possible:

> ...finding statistically significant improvements on 24 of 30 indices at the 5% level.

Only make that claim if supported. Also check whether multiple-testing adjustment is appropriate.

### Feature-store bullet

The opening modifier is awkward:

> Joining 120 microstructure features point-in-time..., built a feature store...

Rewrite:

> Built a point-in-time feature store spanning 120 microstructure features across six venues; deduplicated late prints and versioned schemas, enabling reuse in two subsequent research projects.

### Documentation bullet

This is useful but lower priority than model or implementation results. Keep it only if space allows:

> Documented backtest assumptions, transaction-cost methodology, and known failure regimes in the desk’s research wiki.

## Consolidate the volatility project

The three bullets repeat the same model and dataset. They also present several metrics without explaining how they relate.

Current claims:

- 7% lower QLIKE loss
- Error from 0.20 to 0.15
- Hit rate from 52% to 58%

Combine them into two bullets:

> Developed a temporal convolutional model for realized-volatility forecasting across 30 equity indices, reducing out-of-sample QLIKE loss by 7% versus a HAR-RV baseline.  
> Increased directional accuracy from 52% to 58% by incorporating realized-volatility features and an asymmetric loss.

If the 0.20-to-0.15 result uses another important metric, identify it explicitly:

> Reduced out-of-sample MAE from 0.20 to 0.15 (25%)...

Also clarify what “directional accuracy” means—presumably predicting whether volatility rises or falls.

Because this project appears closely related to the internship, make sure the resume does not imply that proprietary internship work was reused independently. Distinguish the datasets, dates, and methods if necessary.

## Improve the research assistant section

The final bullet is overloaded:

> Released an open-source R package ... while maintaining ... organizing ... and grading...

The 3,000 downloads are the valuable result. Give that its own bullet:

> Released an open-source R package for high-dimensional covariance estimation that received 3,000 downloads in its first year.

The cluster administration, reading group, and grading can be omitted or moved elsewhere. They dilute the research impact.

The proof bullet is strong, but tighten it:

> Derived a variance bound for a sparse regression estimator, improving the prior bound by a logarithmic factor; the result appears in Section 3 of a manuscript under review at *JASA*.

Be careful with “my proof” if this is collaborative work. “Derived” communicates ownership without sounding informal.

### Verify the dates

The role is listed as only June–August 2021, yet it includes:

- a paper under review,
- 12 problem sets,
- weekly recitations,
- grading for two courses,
- cluster maintenance,
- a reading group,
- an R package,
- and a major simulation pipeline.

That volume within three months may look implausible. If this work continued during your Ph.D., correct the date range or split it into separate research and teaching roles.

Also, the role begins before the listed Ph.D. start date. That may be accurate, but verify it.

## Education improvements

If relevant, add:

- Dissertation or research focus
- Adviser
- Expected graduation date
- Selected coursework, only if early-career and directly relevant
- GPA only if strong

Example:

**Ridgeway University**, Metro City, USA  
Ph.D. Candidate in Statistics, expected May 2026  
Dissertation: *[Title or concise topic]* | Adviser: *[Name]*

Only use “Ph.D. Candidate” if you have formally advanced to candidacy; otherwise use “Ph.D. Student.”

You can omit the start dates from education to reduce clutter:

- Ph.D. in Statistics, expected May 2026
- B.S. in Mathematics, May 2020

## Skills section

Kafka is not a programming language. Reorganize the section:

**Languages:** Python, R, SQL, C++  
**Machine Learning & Statistics:** Time-series econometrics, Bayesian inference, gradient boosting, deep learning  
**Tools:** PyTorch, Kafka

Consider adding relevant tools only if you can discuss them comfortably in an interview, such as Git, Linux, Docker, Spark, AWS, NumPy, pandas, scikit-learn, or PostgreSQL.

“PyTorch” is a framework, not a method.

## Other recommendations

### Keep the bakery role, but compact it

It shows leadership and work history between degrees. Two bullets are enough:

> Supervised opening shifts and a six-person team while meeting weekly labor-budget targets.  
> Reduced unsold bread from 12% to 7% of production by improving inventory counts and supplier ordering.

For a one-page quant resume, this should be the first section cut if you need space for research, publications, or technical work.

### Improve contact information

Replace the raw code URL with a recognizable label:

> GitHub: github.com/mpatel

Add LinkedIn only if it is polished. Do not include a full street address.

### Use consistent style

- Use en dashes consistently for dates: `Jun 2025–Aug 2025`
- Use U.S. spelling consistently: “labor,” not “labour,” given the U.S. location
- Use “transaction costs” rather than “after costs” where appropriate
- Keep bullets to one or two lines where possible
- Avoid ending some bullets with periods and others without them

## Suggested section order for quant roles

1. Education  
2. Quantitative Experience  
3. Research / Projects  
4. Publications, if applicable  
5. Technical Skills  
6. Additional Experience

If the JASA manuscript is genuine and sufficiently advanced, add a **Publications & Manuscripts** section with the full citation and status. That will carry more weight than burying it in a bullet.

## Highest-priority changes

1. Delete or correct the `252` Sharpe annualization bullet.
2. Change the 0.20-to-0.15 improvement from 33% to 25%.
3. Fix “econometrics.”
4. Verify the research assistant dates.
5. Consolidate the repetitive volatility-project bullets.
6. Clarify exactly what “added 0.4 Sharpe” means.
7. Rewrite the feature-store bullet.
8. Separate languages, methods, and tools in the skills section.

The underlying experience is strong, but quantitative hiring managers will notice calculation errors immediately. Correctness and methodological precision are especially important for this type of resume.

## Reviewer 2

Your resume has strong quantitative research content, but it currently mixes excellent evidence with a few technical red flags, redundant bullets, and wording that may make a recruiter question the analysis. The biggest issue is the Sharpe-ratio bullet.

## Highest-priority changes

### 1. Remove the incorrect Sharpe-ratio bullet

> “Annualized the signal’s daily Sharpe ratio by multiplying it by 252…”

This is incorrect under the usual assumptions. A daily Sharpe ratio is generally annualized by multiplying by **√252**, not 252. More importantly, this bullet describes a basic reporting step rather than an accomplishment and could undermine confidence in the rest of the analysis.

Delete it. If you need to mention annualization, incorporate it into the first bullet:

> Built a short-horizon order-book imbalance signal for liquid index futures that improved the desk’s out-of-sample Sharpe by 0.4 over an 18-month backtest after transaction costs.

If the 0.4 figure is an absolute Sharpe improvement, say so explicitly.

### 2. Remove redundancy in the volatility forecasting project

These bullets overlap substantially:

- “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%…”
- “Cut forecast error from 0.20 to 0.15…”
- “Improved the model’s directional hit rate…”

They appear to describe the same model and dataset. The “forecast error” metric is also unclear: Is it RMSE, MAE, or something else? QLIKE is already a meaningful volatility-forecasting metric.

Use two bullets with clearly defined metrics:

> - Reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices using a temporal convolutional model trained on realized-volatility features.  
> - Improved directional accuracy from 52% to 58% using an asymmetric loss, with evaluation based on rolling time-series splits.

Only retain the 0.20-to-0.15 result if you name the metric and explain why it is not redundant with QLIKE.

### 3. Clarify statistical significance

“Confirmed the forecast gain … with standard Diebold-Mariano tests” is weaker than reporting the result.

If accurate, use:

> - Demonstrated statistically significant forecast improvement versus a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices; report the test specification and adjusted p-values if relevant.

Avoid implying significance unless you can provide p-values or confidence intervals. Also clarify whether tests were adjusted for multiple comparisons.

### 4. Fix the overloaded research-assistant bullet

This bullet contains too many unrelated accomplishments:

> “Released an open-source R package… while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses…”

Split it into separate bullets. For example:

> - Released an open-source R package for high-dimensional covariance estimation, downloaded more than 3,000 times in its first year.  
> - Maintained the lab’s shared computing cluster and built reproducible workflows for simulation studies.  
> - Organized the weekly reading group and graded for two graduate courses.

You may not need all three. For a quant or research role, prioritize the package and computing work.

## Suggested revised experience section

### Northpeak Capital — Quantitative Research Intern

- Built a short-horizon order-book imbalance signal for liquid index futures that improved the desk’s out-of-sample Sharpe by 0.4 over an 18-month backtest after transaction costs.
- Reduced daily turnover from 34% to 21% with a cost-aware position smoother, retaining 90% of gross returns while reducing estimated slippage by one-third.
- Evaluated forecast performance against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices; report p-values or confidence intervals if available.
- Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted by two subsequent projects.
- Documented backtest assumptions, transaction-cost methodology, and known failure regimes in the desk’s research wiki.

“Joining 120 features” is awkward. “Integrated,” “aligned,” or “joined” the data sources is clearer. Also explain what “point-in-time” means only if the audience may not know it; for quant roles, it is appropriate terminology.

### Statistical Learning Lab — Graduate Research Assistant

- Built a reproducible cluster-based simulation pipeline, reducing a 2,000-run Monte Carlo study from three days to five hours.
- Derived a variance bound for a sparse regression estimator, tightening the prior result by a logarithmic factor; the proof appears in Section 3 of a manuscript under review at JASA.
- Released an open-source R package for high-dimensional covariance estimation, downloaded more than 3,000 times in its first year.
- Taught weekly recitations for 60 graduate probability students, wrote 12 problem sets, and received a 4.8/5 teaching rating.

The JASA statement is fine if accurate, but “manuscript under review” is not the same as publication. Consider adding a separate **Publications / Research** section if you have a title, coauthors, or preprint link.

## Improve the project section

The projects are strong but would benefit from more methodological precision.

### Volatility Forecasting Study

Use something like:

> - Reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices using a temporal convolutional model and realized-volatility features.  
> - Increased directional accuracy from 52% to 58% using an asymmetric loss and rolling time-series evaluation.

Specify the train/test design, such as “rolling-origin evaluation” or “walk-forward validation,” if space permits. This is especially important for time-series work.

### Kaggle project

This is already effective. Slightly tighten it:

> - Ranked 41st among 2,900 teams—top 2%—with a gradient-boosting ensemble using 300 engineered features.  
> - Eliminated validation leakage by switching to time-grouped folds, reducing the local-validation/leaderboard gap by 0.02.  
> - Automated permutation-importance-based feature selection, reducing 900 candidate features to 300 without degrading validation performance.

Be careful with “eliminated” unless leakage was fully removed. “Reduced” or “addressed” is safer.

## Fix the skills section

There is a typo:

> “time-series econometircs”

should be:

> **time-series econometrics**

Consider organizing the skills as:

**Programming:** Python, C++, R, SQL, Kafka  
**Machine Learning:** PyTorch, gradient boosting, time-series forecasting  
**Statistics:** Bayesian inference, statistical learning, volatility modeling, hypothesis testing

Only list tools you can discuss in an interview. If you used specific Python libraries—such as pandas, NumPy, scikit-learn, statsmodels, or Polars—you could include the most relevant ones.

## Formatting and content recommendations

- Use consistent date formatting: `Jun 2025 – Aug 2025` throughout.
- Put the location on the same line as the employer or omit it if space is tight.
- Make sure `example.com/code/mpatel` is a real, polished portfolio or GitHub link.
- Consider adding a one-line dissertation topic under the Ph.D. if it is relevant to the target role.
- Add an expected graduation date prominently: `Ph.D. Candidate in Statistics, expected May 2026`.
- If applying to quant research roles, consider adding a **Research / Publications** section with your JASA submission, preprints, or dissertation work.
- The bakery role is fine, especially if it fills an employment gap, but it should probably have only one or two concise bullets.
- Avoid unexplained claims such as “added 0.4 Sharpe” unless you define whether this is an absolute increase, annualized figure, net-of-costs result, or marginal contribution.

## Overall assessment

The strongest material is:

1. The Northpeak signal research and turnover reduction.
2. The sparse-regression theoretical result.
3. The reproducible simulation pipeline.
4. The Kaggle ranking.

The main improvements are to remove the incorrect Sharpe calculation, consolidate duplicate model results, define evaluation methodology, and make the technical claims more precise. With those changes, the resume would present as substantially more credible and polished for quantitative research or statistical machine-learning roles.

## Reviewer 3

# Resume Review

You have a strong quantitative research profile: rigorous statistical work, relevant market modeling, meaningful backtesting results, and a top-2% competition result. The main problems are **one serious technical error, a few credibility/clarity issues, and some redundancy**.

## Highest-priority changes

### 1. Remove the Sharpe-ratio annualization bullet

This bullet is incorrect:

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

For a daily Sharpe ratio, annualization is typically:

\[
\text{Annualized Sharpe} = \text{Daily Sharpe} \times \sqrt{252}
\]

More importantly, this bullet makes the resume look like it contains a deliberate trap or an uncorrected methodological mistake. Remove it entirely unless you actually corrected the calculation and can describe the correction.

### 2. Fix the numerical inconsistency in the volatility project

You wrote:

> Cut forecast error from 0.20 to 0.15, a 33% improvement

The reduction from 0.20 to 0.15 is **25%**, not 33%:

\[
(0.20 - 0.15) / 0.20 = 25\%
\]

Also specify what “forecast error” means: RMSE, MAE, QLIKE, or another metric. Since you already report QLIKE, avoid adding an ambiguous second metric unless it demonstrates something distinct.

### 3. Reduce repetitive project bullets

These two bullets overlap:

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7%...

> Improved the model’s directional hit rate by 6%... with a temporal convolutional model.

Both describe the same model improvement. Combine them or use the second bullet to explain the technical contribution: architecture, validation design, loss function, or robustness testing.

### 4. Correct terminology and typos

- `econometircs` → **econometrics**
- “Joining 120 microstructure features” → **Joined 120 microstructure features**
- “added 0.4 Sharpe” → **increased the book’s Sharpe ratio by 0.4** or **contributed 0.4 to the book’s Sharpe ratio**
- “daily Sharpe ratio” is awkward. Use **annualized Sharpe ratio**, **daily Sharpe ratio**, or simply **Sharpe ratio**, depending on what you actually calculated.

### 5. Clarify whether the results are real, simulated, or hypothetical

Your Northpeak bullet says:

> added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.

A backtest does not literally add to a live book. Use wording such as:

> Improved simulated book Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.

If the signal was deployed or paper-traded, say that explicitly. Also clarify whether the 0.4 figure is:
- an absolute increase in Sharpe,
- an incremental contribution,
- or a standalone signal Sharpe.

Quant recruiters will scrutinize this distinction.

---

# Suggested structure

For quant research, I would use:

1. Contact information  
2. Education  
3. Technical skills  
4. Experience  
5. Research/projects  

Your Ph.D. is highly relevant, so putting **Education first** is appropriate. Put skills above experience if you are targeting roles with strict technical screening.

Your contact line should also label the link:

```text
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com
GitHub: example.com/code/mpatel
```

If this is GitHub, use the actual GitHub URL and label it “GitHub.” Add LinkedIn if relevant.

---

# Suggested rewritten version

Below is a tightened version using your existing information. I have not added unsupported technologies or results.

## EDUCATION

**Ridgeway University**, Metro City, USA  
**Ph.D. Candidate in Statistics**, expected May 2026 | Sep 2021–Present  
**B.S. in Mathematics**, May 2020 | Sep 2016–May 2020

If relevant, add a dissertation title, research focus, or selected coursework such as:

```text
Research Areas: Statistical learning, time-series modeling, high-dimensional statistics
```

Do not add coursework if you already have substantial research experience and need space.

## TECHNICAL SKILLS

```text
Programming: Python, R, SQL, C++
Machine Learning: PyTorch, gradient boosting, sparse regression
Statistics: Time-series econometrics, Bayesian inference, volatility modeling, high-dimensional statistics
Data/Infrastructure: Kafka, distributed computing, simulation pipelines
```

Only include Kafka if you can discuss how you used it. If not, remove it. You could also list relevant Python libraries if accurate, such as NumPy, pandas, scikit-learn, or statsmodels.

## EXPERIENCE

### Northpeak Capital — Quantitative Research Intern  
Metro City, USA | Jun 2025–Aug 2025

- Developed a short-horizon order-book imbalance signal for liquid index futures that improved simulated book Sharpe by 0.4 over an 18-month out-of-sample backtest after transaction costs.
- Reduced signal turnover from 34% to 21% using a cost-aware position smoother, preserving 90% of gross returns while reducing estimated slippage by one-third.
- Evaluated forecast improvements against a nested HAR-RV baseline using Diebold–Mariano tests across 30 indices; include significance levels if available.
- Joined 120 point-in-time microstructure features across six venues, deduplicated late prints, and versioned schemas to build a reusable feature store adopted by two subsequent projects.
- Documented backtest assumptions, transaction-cost methodology, validation procedures, and known failure regimes in the desk’s research wiki.

The fourth bullet is strong but dense. If space is tight, shorten it:

> Built a reusable feature store by joining 120 point-in-time microstructure features across six venues, deduplicating late prints, and versioning schemas; adopted by two subsequent projects.

### Ridgeway University — Graduate Research Assistant, Statistical Learning Lab  
Metro City, USA | Jun 2021–Aug 2021

- Built a reproducible cluster-based simulation pipeline that reduced a 2,000-run Monte Carlo study from 3 days to 5 hours.
- Derived a variance bound for a sparse regression estimator, tightening the previous bound by a logarithmic factor; proof included as Section 3 of a JASA manuscript under review.
- Developed and released an open-source R package for high-dimensional covariance estimation, downloaded 3,000 times in its first year.
- Taught weekly graduate probability recitations for 60 students, authored 12 problem sets, and earned a 4.8/5 teaching rating.

The original fourth bullet combined too many unrelated responsibilities:

> ...while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses...

Unless these activities are important for the target role, omit them. The research, software, and teaching bullets are stronger.

### Sunrise Bakery — Assistant Store Manager  
Metro City, USA | Jun 2020–May 2021

- Managed opening operations and a team of six bakers and cashiers while maintaining weekly labor-budget targets.
- Managed inventory counts and supplier orders, reducing unsold bread from 12% to 7% of daily production.

This is fine as a short section. For quant roles, keep it to one or two bullets.

## PROJECTS

### Volatility Forecasting Study — Python, PyTorch  
Independent Research | Jan 2024–Present

- Developed a temporal convolutional model for realized-volatility forecasting that reduced out-of-sample QLIKE loss by 7% versus a HAR-RV baseline across 30 equity indices.
- Improved directional hit rate from 52% to 58% using realized-volatility features and an asymmetric loss function.
- Evaluated model performance using time-aware out-of-sample validation; report the test period and confidence intervals if available.

Only retain the third bullet if you actually performed this validation and it adds information beyond the first bullet. If “forecast error” is an important separate result, write it with the correct metric:

> Reduced **[RMSE/MAE/etc.]** from 0.20 to 0.15, a 25% reduction.

Do not describe the model as “trained on realized-volatility features” in one bullet and “improved by adding realized-volatility features” in another unless the distinction is clear.

### Kaggle Market Prediction Competition — Python  
Team of 3 | Mar 2023–Jun 2023

- Placed 41st out of 2,900 teams, ranking in the top 2% of the private leaderboard, using a gradient-boosting ensemble and 300 engineered features.
- Reduced validation leakage by implementing time-grouped cross-validation, closing the gap between local validation and leaderboard scores from 0.02.
- Built a permutation-importance feature-selection pipeline that reduced 900 candidate features to 300 without reducing validation performance.

This is already strong. If the competition has a name, include it. Also specify the competition platform instead of saying only “Kaggle Market Prediction Competition.”

---

# Additional recommendations

## Add research outputs if available

For a Ph.D. candidate, consider adding a small section for:

```text
PUBLICATIONS & PRESENTATIONS
- Patel, M. “Title.” Manuscript under review at Journal of the American Statistical Association.
- [Conference presentation or working paper]
```

Do not overstate the JASA status. Use the exact status, such as:
- “Manuscript under review”
- “Submitted”
- “Working paper”

## Add a dissertation or research-interest line

For quant research applications, a short line can help target the resume:

```text
Research Interests: Financial econometrics, volatility forecasting, market microstructure, statistical learning
```

Place it under your Ph.D. or in a short summary. A summary is optional; your background is strong enough that the resume can work without one.

## Be prepared to explain every quantitative claim

Be ready to discuss:

- How the 0.4 Sharpe contribution was calculated
- Whether transaction costs were fully incorporated
- How you avoided look-ahead bias and survivorship bias
- Why the HAR-RV baseline was appropriate
- How the Diebold–Mariano tests were conducted
- Whether you adjusted for multiple comparisons across 30 indices
- How the feature store enforced point-in-time correctness
- Why QLIKE was selected for volatility forecasting
- How the temporal convolutional model compared with simpler alternatives

## Overall assessment

This is a strong resume for quantitative research, systematic trading, financial machine learning, or statistical modeling roles. The primary concern is not lack of experience; it is **technical precision**. Remove the incorrect Sharpe annualization bullet, correct the 25%/33% discrepancy, define ambiguous metrics, and consolidate repetitive project content. Those changes will make the resume substantially more credible to technical reviewers.

## Reviewer 4

## Top priorities

1. Replace the generic Diebold-Mariano claim with the nested-model correction actually used, report the forecast gain, loss function, and statistical result, and explain whether the 30-index tests used multiplicity control or a joint evaluation.
2. Correct the Sharpe annualization: multiplying a daily Sharpe by 252 is wrong because annualization uses the square root of the number of periods, so verify the calculation and whether the 0.4 figure was independently computed.

## What already works

- “Built a short-horizon order-book imbalance signal…”: Combines a trading-relevant result with a defined asset class and signal type.
- “Built a short-horizon order-book imbalance signal…”: Uses out-of-sample and after-cost qualifiers rather than presenting an unqualified backtest result.
- “Placed 41st of 2,900 teams with…”: The placement is a highly legible and credible impact signal.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Correct the Sharpe annualization: multiplying a daily Sharpe by 252 is wrong because annualization uses the square root of the number of periods, so verify the calculation and whether the 0.4 figure was independently computed.
- Clarify whether “0.4 Sharpe” is the signal’s standalone Sharpe or its incremental contribution relative to the pre-existing book, and state the attribution basis if needed.
- Define the 90% return-retention comparison and identify the baseline or estimation method behind the one-third slippage reduction.
- Replace the generic Diebold-Mariano claim with the nested-model correction actually used, report the forecast gain, loss function, and statistical result, and explain whether the 30-index tests used multiplicity control or a joint evaluation.
- Lead with your ownership of the feature-store work and state the measurable benefit of its reuse rather than opening with the feature-joining process.
- Replace “for future interns” with a checkable reuse or onboarding outcome and state whether the documentation became a review or handoff standard.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2021 - Aug 2021

- Replace “my proof tightens the previous bound by a log factor” with the old and new rates under the same assumptions, because “log factor” does not reveal whether the improvement removes log(p), changes the logarithm’s argument, or improves only a constant.
- State the theorem’s practical or theoretical consequence rather than relying on its placement as Section 3 of a JASA-submitted paper.
- Remove the personal pronoun and tighten the bullet to “Derived a variance bound for a sparse regression estimator, tightening the previous bound by a log factor.”
- Add the number of respondents to the 4.8/5 teaching evaluation and compress the wording to “rated 4.8/5 by students.”
- Separate the R-package release from cluster maintenance, reading-group organization, and grading, and attach the 3,000-download result directly to the package.
- Add the capability or user problem enabled by the open-source R package instead of naming only high-dimensional covariance estimation.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Jun 2020 - May 2021

- Keep the Sunrise Bakery entry compact because its management work is internally consistent but less relevant to the quantitative arc.
- Add the weekly labour-budget variance, savings, or budget amount and specify the staffing or scheduling action behind the result.
- Add the period over which unsold bread fell from 12% to 7% and identify the ordering adjustment that connected stock counts and supplier orders to the reduction.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Rewrite the HAR-RV result as a 7% reduction in average out-of-sample QLIKE loss and add the forecast horizon and evaluation design.
- Define “forecast error,” correct the 0.20-to-0.15 reduction from 33% to 25%, and avoid presenting the absolute change and percentage as redundant versions of the same result.
- Do not attribute the error reduction to both realized-volatility features and an asymmetric loss unless separate tests show each contribution.
- Define whose direction the hit rate predicts, report the change as 6 percentage points from 52% to 58%, and identify the comparable baseline or evaluation that supports attributing the gain to the model.
- Consolidate the three overlapping performance bullets into distinct results, because the QLIKE reduction, forecast-error reduction, and hit-rate increase all describe the same 30-index study and repeat the temporal-convolutional-model framing.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- Identify your own contribution to the team’s gradient-boosting result instead of presenting the ensemble and 300 features as an undifferentiated team accomplishment.
- Replace “cut validation leakage” with the supported observation about the local-validation-to-leaderboard gap, naming the metric and whether 0.02 is absolute or relative, and state the time key and fold-contained feature work if applicable.
- State the validation score or comparison basis for the 900-to-300 feature reduction and clarify that permutation importance and selection were fit within each training fold if that is how leakage was prevented.
- Keep one ranking expression rather than both “41st of 2,900 teams” and “top 2% of the private leaderboard.”

## Across the whole résumé

- For an industry quant or ML application, move EXPERIENCE above EDUCATION so the Northpeak internship and statistical-learning research lead the document, with the Ph.D. immediately afterward as supporting credentials.
- Explain the Jul-Dec 2023 gap between the Kaggle competition and the volatility study if there was relevant work, coursework, or research during that period.
- Remove SQL, C++, Kafka, and Bayesian inference unless another résumé line can substantiate them, and correct “time-series econometircs” to “time-series econometrics.”

## Lower priority (5)

- “Released an open-source R package for…”: “while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses” bundles three additional jobs into the package bullet without showing what changed because of them.
- “Released an open-source R package for…”: “which was downloaded 3,000 times in its first year” measures adoption but not whether the downloads represented active users, research use, or a meaningful technical outcome.
- “Built a short-horizon order-book imbalance signal…”: "over 18 months of out-of-sample backtest after costs" still leaves the backtest frequency, number of observations, and attribution method unclear if the Sharpe figure is challenged.
- “Managed opening shifts and a team…”, “Ran daily stock counts and supplier…”: The phrase "keeping the store within its weekly labour budget" gives no measurable scale; add the weekly variance, savings, or budget amount that proves the result. (and 3 more like it)
- “Cut forecast error from 0.20 to…”, “Improved the model’s directional hit rate…”: "by adding realized-volatility features and an asymmetric loss" attributes the outcome to two interventions without showing whether either was tested separately. (and 1 more like it)
