## Highest-priority changes

1. **Resolve credibility and methodology issues in the quant bullets.** Several claims currently sound overstated or potentially biased:
   - Reporting the best Sharpe from 400 configurations as the expected live Sharpe is statistically inappropriate.
   - The two order-book signal claims appear duplicated across Northpeak and Kaggle, with potentially inconsistent ownership and results.
   - “Improved risk-adjusted returns by 35%” needs a clearly defined metric, benchmark, period, and whether costs were included.
2. **Fix the typo:** “econometircs” should be corrected.
3. **Clarify your target.** For quantitative research roles, move the most relevant research, technical skills, and publications higher. The bakery role should be shortened unless it demonstrates a specific leadership, operations, or employment-continuity purpose.
4. **Improve reproducibility language.** Using “the same random seed on every worker” can imply that workers generated identical or correlated random streams rather than independent reproducible streams.
5. **Remove or revise claims that imply data leakage, selection bias, or unsupported causality.**

---

## Header

### Contact information
- **Change:** Replace the placeholder website domain if this is not the actual URL, and make sure the link goes directly to a relevant code, research, or professional profile.
- **Why:** A nonfunctional or obviously generic URL undermines the rest of the application.
- **Consider adding:** A LinkedIn, Google Scholar, personal research page, or GitHub link if relevant to the role. Do not add all of them if they contain little useful content.

---

## Education

### Ph.D. candidate in Statistics
- **Change:** Add your expected degree or research focus only if it strengthens your candidacy and is not already evident elsewhere. Also clarify whether you are currently enrolled full-time if the overlapping employment dates could raise questions.
- **Why:** Your Ph.D. is probably your strongest qualification for quant research and statistical roles, but the entry currently provides no specialization, advisor, dissertation topic, or relevant coursework.
- **Check:** Make sure “Expected May 2026” is still accurate. If you have defended, advanced to candidacy, or changed the expected date, update it.

### B.S. in Mathematics
- **Change:** Keep it, but consider removing it if space is tight unless it adds something not covered by your Ph.D. or is required for an application.
- **Why:** For a Ph.D. candidate with substantial research experience, the undergraduate degree is less important than publications, methods, and technical work.

---

## Experience

### Sunrise Bakery — Assistant Store Manager
- **Change:** Keep this role only if you need to show current employment, leadership, operational responsibility, or continuity. Reduce its visual prominence if applying to quantitative roles.
- **Why:** It is not directly relevant to quant research, but removing it could create an unexplained current-employment gap. Its value is mainly in management and operational accountability.

#### “Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.”
- **Change:** Specify the scope of responsibility more precisely if possible: scheduling authority, budget size, staffing complexity, or measurable operational result.
- **Why:** “Managed” and “keeping within budget” are credible but generic. The bullet would be stronger if the scale and your direct responsibility were clear.
- **Check:** Use consistent spelling throughout the resume. You use “labour,” which is acceptable, but match the conventions of the country and employer.

#### “Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.”
- **Change:** Add the time period over which the reduction occurred and make clear whether the reduction was attributable solely to your process or to a broader store initiative.
- **Why:** The result is measurable and useful, but without a timeframe it is difficult to assess. “Cutting” may overstate causality if other changes contributed.

---

### Northpeak Capital — Quantitative Research Intern

This is your most important section for quant applications. It should be ordered by credibility and relevance, not simply by chronology or dramatic impact.

#### “Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.”
- **Change:** Define “risk-adjusted returns,” identify the comparison baseline, state the evaluation period, and clarify whether the result was in-sample, out-of-sample, simulated, or live. Include transaction costs and capacity assumptions if they are relevant.
- **Why:** A 35% improvement is a major claim. Without these details, recruiters may interpret it as a loosely defined or overfit result.
- **Check:** Ensure this is not merely another presentation of the Sharpe improvement stated later. Avoid reporting multiple versions of the same result unless each measures something distinct.

#### “Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.”
- **Change:** Specify what was purged, why the embargo length was appropriate, and whether hyperparameter selection and model evaluation were fully separated.
- **Why:** The methodology is technically strong, but the final causal claim is too absolute. Purging and embargoing reduce certain leakage risks; they do not automatically prove that every backtest decision was free of look-ahead bias.
- **Consider:** Mention the number of folds or the train/test structure if space permits and it demonstrates rigor.

#### “Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.”
- **Change:** Keep this bullet, but clarify your role in designing the point-in-time safeguards and the technical environment if relevant.
- **Why:** This is one of the strongest bullets because it combines scale, infrastructure, leakage prevention, and downstream adoption.
- **Check:** Make sure “feature store” is accurate. If it was a library, pipeline, database, or research framework rather than a true feature-store system, use terminology that matches the implementation.

#### “Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.”
- **Change:** Clarify whether the allocation actually occurred, whether you participated in monitoring it, and what “small” means only if disclosure rules permit. Otherwise, focus on the approval or handoff without implying a live result you cannot document.
- **Why:** This is valuable evidence of communication and investment relevance, but “approved” and “live allocation” can attract scrutiny. The claim should be precise and compliant with any confidentiality restrictions.
- **Check:** The tense and date should align with the internship dates. If the allocation happened after the internship, state your involvement accurately.

#### “Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.”
- **Change:** Remove this bullet or substantially change its substance. Do not present the best in-sample or search-selected Sharpe as the expected live Sharpe.
- **Why:** This describes selection bias and likely multiple-testing bias. The best result among 400 configurations is not an unbiased estimate of future performance and directly conflicts with the otherwise careful validation narrative.
- **Better content direction:** If you keep the underlying work, describe how you controlled for configuration selection, used a final untouched holdout, adjusted expectations, or reported performance after selection. Do not claim a live expectation based solely on the best backtest.

#### “Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.”
- **Change:** Verify ownership, chronology, and the exact contribution. State whether this is the same signal referenced in the Kaggle project and explain the relationship if it is.
- **Why:** This is a strong result, but it currently appears duplicated elsewhere. A recruiter may wonder whether the same accomplishment is being claimed twice or whether the project was transferred from an independent competition into professional work.
- **Check carefully:** “Desk book’s Sharpe ratio” suggests a portfolio-level impact, while “built a signal” suggests an individual research contribution. Make the attribution technically and professionally accurate.
- **Add if possible:** The benchmark, number of observations or trades, and whether the 18-month period was genuinely untouched during development.

---

### Ridgeway University — Research Assistant, Statistical Learning Lab

#### “Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.”
- **Change:** Correct the random-number methodology description. Use independent, reproducible random streams or an equivalent rigorously controlled approach, if that is what you actually implemented.
- **Why:** The same seed on every worker can produce duplicated random sequences and invalidate the simulation. A technically sophisticated reader may view this as a serious flaw.
- **Check:** Verify whether the original study used identical seeds intentionally and whether the speed comparison held simulation quality and hardware constant.

#### “Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.”
- **Change:** Clarify your authorship and contribution, and avoid implying acceptance. Identify the manuscript status accurately.
- **Why:** “Under review” is not the same as publication, and the bullet currently emphasizes the paper’s location rather than the significance and scope of your contribution.
- **Check:** Confirm that the comparison is mathematically accurate: “by a log factor” can be interpreted differently depending on the exact bound. Make sure the claim is supported by the paper and advisor-approved.
- **Consider:** Add a publications or research-output entry elsewhere if the manuscript is central to your application.

#### “Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.”
- **Change:** Keep this for academic, teaching, or communication-focused roles; shorten or deprioritize it for industry quant applications.
- **Why:** It demonstrates communication and subject mastery, but it is less relevant than your modeling, research, and production-oriented work.
- **Check:** State who provided the rating and the response rate if the rating could otherwise appear selectively reported.

#### “Released an open-source R package for high-dimensional covariance estimation with shrinkage and factor models, downloaded 3,000 times in its first year.”
- **Change:** Add the package name and a link if the package is public. Clarify the download source and whether the figure counts unique users, downloads, or repository events.
- **Why:** This is a strong, verifiable accomplishment, but the current wording makes the result difficult to validate.
- **Consider:** Mention testing, documentation, maintenance, or external adoption if those are more meaningful than raw downloads.

---

## Projects

### Volatility Forecasting Study

#### “Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.”
- **Change:** Specify the forecast horizon, evaluation period, data frequency, and whether the comparison used identical information sets and tuning procedures.
- **Why:** The result is relevant and quantitative, but performance claims need enough context to distinguish a robust result from an arbitrary split or favorable setup.
- **Check:** Ensure “out-of-sample” means the test data were not used for architecture, feature, or hyperparameter decisions.

#### “Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.”
- **Change:** Clarify whether the crisis-period tests were included in the multiple-testing correction and whether the forecast-error dependence assumptions were handled appropriately.
- **Why:** This is methodologically impressive, but readers may question whether “both crisis periods” was specified in advance and whether the result is being selectively emphasized.
- **Check:** Make sure the wording distinguishes statistical significance from economic significance. A statistically significant QLIKE improvement does not necessarily imply trading value.

#### “Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.”
- **Change:** Add a link to the paper if available and specify your presentation role if others were coauthors.
- **Why:** This supports research communication, but the page count adds little value compared with the paper’s title, status, or availability.
- **Consider:** If the paper is central, give it a separate publications or working papers section rather than leaving it only under Projects.

---

### Kaggle Market Prediction Competition

#### “Engineered features and trained gradient-boosting models for a market prediction competition.”
- **Change:** Add the outcome that makes the project notable: rank, score, team result, dataset scale, or technical constraint.
- **Why:** As written, this is a generic description and does not distinguish the project from routine modeling work.

#### “Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.”
- **Change:** Explain which direction the gap moved and why the revised fold design was appropriate. Avoid implying that closing the gap alone proves the new validation scheme was correct.
- **Why:** The bullet shows awareness of leakage, but leaderboard alignment is not itself proof of valid evaluation. The revised methodology and its justification matter more than the numerical gap.

#### “Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.”
- **Change:** Remove this bullet or resolve its overlap with the Northpeak bullet. Confirm that it was actually part of the Kaggle project, that you had authority to describe a futures book, and that the data and signal were not reused from your internship.
- **Why:** This currently creates a serious credibility problem. It appears to claim a professional portfolio impact inside a competition project, while also resembling the Northpeak result.
- **Check:** Do not retain both claims unless they clearly refer to different signals, datasets, periods, and outcomes.

---

## Skills

### “Programming: Python, R, PyTorch, Kafka”
- **Change:** Organize skills by proficiency or relevance and include key tools demonstrated in the experience section, if applicable.
- **Why:** Kafka is not otherwise supported in the resume, while important quant tools or libraries may be missing. Unsupported skills can look like keyword padding.
- **Check:** Only list technologies you could discuss in a technical interview. If PyTorch was used only in the project, that is fine, but the project should make the depth clear.

### “Methods: time-series econometircs, high-dimensional statistics, gradient boosting”
- **Change:** Correct the spelling of “econometrics.”
- **Change:** Use consistent capitalization and formatting across categories.
- **Why:** The typo is particularly damaging in a methods section because it concerns one of your stated areas of expertise.
- **Consider:** Include methods that are clearly demonstrated in the resume, such as volatility forecasting, time-series validation, point-in-time data handling, multiple-testing correction, and statistical learning. Do not turn this into an exhaustive list of every technique you have encountered.

---

## Structural and formatting changes

- **Order bullets by importance and credibility.** Put the strongest, most verifiable accomplishments first within each role.
- **Separate research outputs from projects if applying to academic or research-heavy positions.** Your working paper, under-review paper, seminar presentation, and open-source package deserve more visibility.
- **Avoid repeated accomplishments.** The order-book imbalance signal and 18-month Sharpe improvement currently appear to be duplicated.
- **Use consistent date and punctuation formatting.** Keep date ranges, separators, capitalization, and bullet punctuation uniform.
- **Check line wrapping in the final PDF.** Several bullets break awkwardly; make sure wrapped lines align cleanly and do not create excessive white space.
- **Add links selectively.** Link to the R package, working paper, code repository, and publications where public. Links make technical claims more credible.
- **Be careful with confidentiality.** Confirm that naming the “desk,” portfolio-manager approval, live allocation, returns, and internal project reuse complies with Northpeak’s policies.
- **Quantify responsibly.** Every performance metric should identify its benchmark, period, evaluation design, and cost treatment where relevant. This is especially important because your resume otherwise signals strong statistical awareness.