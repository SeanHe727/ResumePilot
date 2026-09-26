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