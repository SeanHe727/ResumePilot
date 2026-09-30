Below is a line-by-line review, assuming you are targeting quantitative research, trading, or financial ML roles.

## Highest-priority issues

1. **Remove or correct the parameter-selection bullet at Northpeak.** Selecting the best of 400 backtests and treating its Sharpe as the expected live Sharpe is severe multiple-testing/selection bias. It undermines the credibility of the otherwise strong validation claims. Re-evaluate with nested selection, a genuinely untouched holdout, or an adjustment for backtest overfitting before including it.

2. **Correct and rerun the Monte Carlo work if every worker used the same seed.** Identical seeds can produce duplicate random streams, meaning the runs may not be independent and the study may not contain 2,000 distinct simulations. Do not present the result until you verify that the parallel random-number generation was valid.

3. **Resolve the duplicated order-book imbalance accomplishment.** A nearly identical result appears under both Northpeak and the Kaggle project. This creates questions about duplication, ownership, confidentiality, and whether one project is being represented twice. Keep it only under the activity where it actually occurred, or clearly distinguish genuinely separate work.

4. **Fix the skills typo.** “Econometircs” should be corrected.

---

## Header

### Name
- No substantive change needed.
- Make sure it is visually prominent but not oversized.

### Phone, email, and code profile
- Identify the code link clearly by platform or purpose rather than leaving it as a bare URL. Recruiters should immediately know whether it leads to GitHub, a portfolio, or something else.
- Confirm that the linked profile contains polished repositories relevant to the claims on the resume.
- Add LinkedIn only if it is complete and consistent with the resume.
- Keep location off the header unless geographic availability matters; your entries already establish location.

---

## Education

### Ph.D. candidate line
- Use a consistent date style throughout, preferably with en dashes rather than hyphens.
- Confirm that “candidate” is your institution’s official status. If candidacy has not formally been conferred, use the accurate degree status instead.
- Consider adding a dissertation area, advisor, or a very short research focus if it directly supports quant roles.
- If space becomes tight, the repeated university location can be simplified through formatting rather than repeated text.

### B.S. line
- No major content problem.
- Add honors or GPA only if they are strong and useful.
- Because both degrees are from the same institution, consider visually grouping them to reduce repetition.

---

## Experience

### Sunrise Bakery heading
- For quant applications, move this into an **Additional Experience** section or below research-relevant work. Its current position makes it the first experience recruiters see, even though Northpeak is much more relevant.
- Keep it because it demonstrates current employment and management, but limit it to the strongest one or two bullets.
- The overlap with doctoral study is not inherently a problem, but be prepared to explain the workload if asked.

### “Managed opening shifts…”
- Keep the team size and budget responsibility.
- Replace or quantify “within its weekly labour budget” if possible; the current phrasing establishes compliance but not the scale or degree of performance.
- Use US spelling consistently because the resume is set in the USA. “Labour” conflicts with that convention.
- Avoid the awkward line break within the bullet in the final PDF.

### “Ran daily stock counts…”
- Strong, credible operational metric.
- Clarify whether the reduction was sustained and over what period, if you can do so accurately.
- Check that “unsold bread” is the business’s actual waste measure. If it excludes discounted, donated, or discarded inventory, use the precise metric.

---

## Northpeak Capital

### Heading
- Strong and directly relevant.
- If the desk or asset class is not confidential, adding it could provide useful context. Do not disclose proprietary details.

### “Improved risk-adjusted returns by 35%…”
- Define the metric behind “risk-adjusted returns.” The phrase is too broad to evaluate and may overlap with the later Sharpe claim.
- Clarify whether the 35% is relative or absolute.
- Make clear whether this was a backtest, paper-trading result, or live performance. As written, it can sound like realized live performance.
- Retain the transaction-cost aspect because it strengthens the claim.

### “Validated the signal on 6 years…”
- Strong methodology bullet.
- State whether the six years included a final untouched test period; purging and embargoing do not by themselves prevent model-selection overfitting.
- If the work involved repeated tuning, ensure the final evaluation was isolated from that process.
- The last clause is explanatory and slightly long. Tighten the concept rather than defining point-in-time validation at textbook length.
- Avoid implying perfect absence of leakage unless you verified feature timestamps, labels, joins, roll construction, and execution assumptions.

### “Wrote a feature store for 120…”
- Strong engineering and reuse evidence.
- Verify that “feature store” is technically accurate; if it was a research pipeline or library rather than a production feature store, use the correct classification.
- Add scale or performance information only if meaningful, such as instruments, data volume, or time saved.
- Clarify your ownership if this was collaborative.
- Make sure “two later signal projects” is permissible to disclose.

### “Presented the signal…”
- Strong stakeholder-impact bullet.
- Clarify whether the allocation was actually deployed or merely approved. Do not imply implementation if it did not happen.
- If the allocation was scheduled after your internship, distinguish approval from subsequent live results.
- “Failure cases” is valuable and signals rigor; keep that idea.
- Check whether mentioning portfolio-manager approval or allocation timing violates confidentiality.

### “Selected the smoother’s parameters from 400…”
- Do not retain this claim in its current substance.
- Reporting the maximum Sharpe from 400 tested configurations as expected live Sharpe is statistically invalid because it ignores selection bias and uncertainty.
- Re-run the analysis using a defensible model-selection procedure, then report only results from untouched data.
- If you cannot re-evaluate it, remove the bullet entirely. Merely changing the wording would not fix the methodological issue.

### “Built a short-horizon order-book imbalance signal…”
- This is potentially your strongest bullet, but it overlaps with both the first Northpeak bullet and the Kaggle bullet.
- Clarify whether the change from 1.1 to 1.5 applies to the signal alone, a combined desk book, or a simulated portfolio.
- Specify that the result is backtested prominently enough that it cannot be mistaken for live performance.
- Confirm that “out of sample” was genuinely untouched after all feature and parameter choices.
- Ensure costs include realistic fees, spread, slippage, latency, turnover, and market impact where relevant.
- Keep only one primary performance bullet if this and the 35% claim describe the same result.
- Verify that the information is not proprietary.

---

## Ridgeway University research assistantship

### Heading
- Strongly relevant experience.
- If this was full-time before the Ph.D., the dates make sense. If it was part of another formal program, identify that accurately.

### “Cut a 2,000-run Monte Carlo study…same random seed…”
- This contains a serious technical flaw.
- Using the same seed on every worker can duplicate random streams and invalidate the effective simulation count.
- Check whether the framework automatically generated independent substreams despite the stated seed. If not, rerun with appropriate parallel random-number streams.
- Do not claim a valid 2,000-run study until independence or controlled stream separation is established.
- After validation, retain the runtime improvement because it is a strong metric.

### “Derived a variance bound…”
- Strong research bullet.
- Replace first-person phrasing with the same impersonal style used elsewhere.
- Verify that the claimed logarithmic improvement holds under comparable assumptions to the prior bound. Recruiters with statistical backgrounds may probe this.
- Identify your contribution accurately if the proof or paper is coauthored.
- “Under review at JASA” is acceptable only if the manuscript has actually been submitted and remains under review. Update the status as it changes.
- Consider adding the paper title or a publications section if the work is publicly available.

### “Taught weekly recitations…”
- Good evidence of communication and teaching ability.
- Verify whether you wrote all 12 problem sets independently or contributed to them.
- Provide the basis of the 4.8/5 rating if space permits, especially if the response count was substantial.
- This is less important than research for quant roles, so it can be shortened or removed if you need space.

### “Released an open-source R package…”
- Strong technical and external-impact bullet.
- Link the package through the header portfolio or a project/publications entry if it is public.
- Clarify whether 3,000 refers to CRAN downloads, GitHub clones, or another measure.
- State your ownership accurately if there were co-maintainers.
- Consider mentioning testing, documentation, or performance only if those are notable and space allows.

---

## Projects

### Volatility Forecasting Study heading
- Strong, relevant project.
- Because it has been ongoing since January 2024, make clear through its content or status whether it is active research, completed analysis with continuing revisions, or a working paper under development.
- Add a repository or paper link if public.

### “Beat a HAR-RV baseline…”
- Strong benchmark and metric selection.
- State whether the 7% is an average across indices, a median, or an aggregate loss reduction.
- Confirm that model and hyperparameter selection were separated from final out-of-sample evaluation.
- Explain the forecast horizon elsewhere in the project if it is central; without it, the result is harder to assess.
- Verify that the baseline was tuned fairly and used the same information set.

### “Tested significance with Diebold-Mariano tests…”
- Good attention to multiple testing.
- Check that the Diebold–Mariano implementation accounts appropriately for overlapping forecasts and serial correlation.
- Define “both crisis periods” by date or event if space permits; the current reference has no antecedent.
- Avoid presenting statistical significance as economic significance. Keep the QLIKE improvement and robustness interpretation distinct.
- Ensure the Holm correction was applied to the correct family of hypotheses.

### “Wrote up the method…”
- Strong evidence of completion and communication.
- If you were the presenter, make that unambiguous.
- If the paper is available, link it.
- “Presented at the department’s seminar” is useful, but do not let the 12-page length occupy space if stronger indicators such as acceptance, audience, or public availability exist.

---

## Kaggle project

### Heading
- Add the actual competition name if it is public.
- Include your final rank, percentile, medal, or score if respectable. Without an outcome, the entry feels incomplete.
- Clarify your individual contribution within the team of three.

### “Engineered features and trained…”
- Too generic compared with the rest of the resume.
- Add the feature type, model family, validation responsibility, or measurable contribution—but only facts that distinguish your work.
- If you cannot make it specific, remove it in favor of stronger bullets.

### “Cut validation leakage…”
- Strong diagnostic and methodological bullet.
- Clarify what the 0.02 measures; a raw number is meaningless without the competition metric.
- Be careful with “cut validation leakage.” Time-grouped folds may reduce temporal leakage, but the closing of a local-to-leaderboard gap is not direct proof that all leakage was removed.
- Confirm that leaderboard feedback was not repeatedly used as another tuning set.

### “Added 0.4 to the Sharpe ratio…”
- Remove this from the Kaggle entry unless it genuinely occurred within that competition.
- It appears to duplicate the Northpeak order-book imbalance result almost exactly.
- Kaggle competitions usually have defined leaderboard metrics, so a separate “futures book” Sharpe claim needs clear provenance.
- If this was internship work, it belongs only under Northpeak and may be subject to confidentiality.
- If it was a distinct project, differentiate the dataset, period, methodology, and outcome while ensuring you are not double-counting the same work.

---

## Skills

### “Programming: Python, R, PyTorch, Kafka”
- Separate programming languages from frameworks and infrastructure. PyTorch and Kafka are not programming languages.
- Add SQL if you can use it competently; it is commonly expected in quant and data roles. Do not add it merely as a keyword.
- Consider listing relevant tools such as Git, Linux, cloud platforms, databases, or distributed-computing systems only if you can discuss them in an interview.
- Your experience mentions production-like data work, but the skills section currently does not reflect data engineering tools beyond Kafka.
- Avoid proficiency labels unless you can support them consistently.

### “Methods: time-series econometircs…”
- Correct the spelling of “econometrics.”
- Standardize capitalization.
- Consider adding only methods demonstrated elsewhere in the resume. Every listed method should be defensible through a bullet or project.
- The section currently omits several demonstrated areas, such as Monte Carlo methods, market microstructure, forecasting, backtesting, and statistical learning. Add the most role-relevant ones, but avoid creating a long keyword list.
- “Gradient boosting” is narrower and more tool-like than the other methods; organize the categories consistently.

---

## Overall structure and presentation

- For quant roles, prioritize content in this order: **Education, Quantitative/Research Experience, Projects, Additional Experience, Skills**.
- Keep the resume to one page if possible unless your publication record justifies a second page.
- Eliminate awkward mid-phrase line breaks in the final PDF.
- Use consistent US spelling, punctuation, capitalization, and date formatting.
- Distinguish clearly among **live results, paper trading, out-of-sample backtests, and in-sample/model-selection results**.
- Audit every performance number for:
  - the evaluation period,
  - benchmark,
  - costs,
  - selection procedure,
  - untouched test data,
  - statistical uncertainty,
  - and whether the result was live or simulated.
- Avoid claiming team or desk outcomes as solely yours unless attribution is accurate.
- Check all Northpeak bullets for confidentiality before sending the resume externally.
- Your strongest differentiators are the Northpeak work, statistical research, open-source package, and volatility study. The resume should make those visible before the bakery role and generic Kaggle material.