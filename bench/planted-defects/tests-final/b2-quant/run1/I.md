## Highest-priority issues

1. **Remove or correct the parameter-selection bullet at Northpeak.** Choosing the best of 400 backtests and treating its Sharpe as the expected live Sharpe is a major overfitting and selection-bias error. It could disqualify you for quantitative research roles.
2. **Correct and rerun the Monte Carlo work if workers truly used the same random seed.** That can create duplicate random streams and invalidate simulation results.
3. **Resolve the duplicated order-book imbalance achievement.** It appears under both Northpeak and the Kaggle project, with overlapping language and the same 18-month horizon. Recruiters may suspect double-counting or accidental disclosure.
4. **Fix the typo in “econometircs.”**
5. **Make terminology and spelling consistent**, particularly US versus UK spelling.

## Header

**Name**
- No change needed.

**Phone, email, portfolio link**
- Ensure the link goes directly to a polished professional profile or code portfolio, not a generic landing page.
- Use a recognizable label or domain if the destination is not obvious from the URL.
- Check that public repositories have clear documentation, working setup instructions, and no proprietary material.

## Education

**Ph.D. candidate in Statistics**
- Verify that “candidate” is your institutionally correct status; use it only if you have formally advanced to candidacy.
- Consider adding a concise research focus, dissertation area, or advisor only if it strengthens your fit for quantitative research roles.
- Standardize the date style throughout the résumé; an en dash is more polished than a hyphen.
- Keep this degree first.

**B.S. in Mathematics**
- Keep it concise.
- Add honors, GPA, or distinctions only if strong and useful.
- Because both degrees are from the same university, consider visually consolidating the institution to save space, while keeping the degrees and dates distinct.

## Experience

### Sunrise Bakery — Assistant Store Manager

**Role heading**
- Keep this if it is current employment and helps explain your timeline.
- For quant applications, give it less space than Northpeak and research experience. Its management value is useful, but it should not dominate technical evidence.

**“Managed opening shifts…”**
- Change “labour” to “labor” because the résumé otherwise uses US location and conventions.
- Clarify whether staying within budget was your direct responsibility or a team outcome.
- If possible, quantify the budget size or frequency of compliance; otherwise, the current outcome is somewhat general.
- Keep the team size because it demonstrates leadership.

**“Ran daily stock counts…”**
- Keep the 12% to 7% result.
- Clarify the measurement period and whether this reduction was attributable to a process you introduced rather than ordinary variation.
- Consider using a more standard waste or spoilage metric if “unsold bread” does not fully describe the business impact.

### Northpeak Capital — Quantitative Research Intern

**Role heading**
- This should be your most prominent experience for quant roles.
- Check confidentiality restrictions before naming internal systems, exact performance figures, allocation decisions, or strategy details.

**“Improved risk-adjusted returns by 35%…”**
- Specify what “risk-adjusted returns” means; the phrase is too broad without a named metric.
- State the evaluation period and whether the result was in sample, validation, or out of sample.
- Clarify whether transaction costs, turnover, and market impact were included.
- Avoid implying live performance if the result came only from a backtest.
- This bullet may overlap with the later Sharpe-ratio bullet; distinguish the smoother from the underlying signal or combine their story conceptually.

**“Validated the signal on 6 years…”**
- Keep the methodological detail because it signals awareness of leakage.
- State whether the six years were used for development, validation, testing, or a mixture; “validated” alone may hide repeated reuse.
- Ensure the embargo length and purge logic were appropriate for the label horizon.
- Shorten the explanatory clause if space is tight; quant reviewers already understand the purpose, while nontechnical reviewers may find the sentence dense.

**“Wrote a feature store for 120…”**
- Keep this; it demonstrates reusable engineering rather than one-off research.
- Clarify your ownership level: whether you designed, implemented, productionized, or maintained it.
- Add scale, latency, data volume, or reliability only if accurate.
- “Two later signal projects” is useful adoption evidence, but make sure those projects were genuinely downstream users.

**“Presented the signal…”**
- Keep the portfolio-manager exposure and live-allocation outcome.
- Clarify whether the allocation was actually deployed or merely approved/planned. Do not imply deployment if your internship ended before it occurred.
- Be cautious about disclosing allocation decisions.
- If space is limited, this is less technically valuable than the research, validation, and reusable-infrastructure bullets.

**“Selected the smoother’s parameters from 400…”**
- Do not leave this bullet as written.
- The described procedure is methodologically unsound because the maximum Sharpe across 400 configurations is optimistically biased.
- Replace the underlying process—not just the wording—with nested or untouched holdout evaluation, pre-specified selection criteria, regularization, or a multiple-testing/selection-bias adjustment.
- Report only results from data not used in parameter selection.
- Never describe the best backtested Sharpe as the expected live Sharpe.
- If you cannot validate the work properly, remove this bullet entirely.

**“Built a short-horizon order-book imbalance signal…”**
- This is likely your strongest Northpeak bullet and should appear earlier.
- Clarify whether the change from 1.1 to 1.5 is incremental to an existing book or the standalone signal’s result.
- State whether costs include fees, spread, slippage, and market impact.
- Confirm that the 18-month period was genuinely untouched out of sample.
- Avoid “desk book” if the signal was tested only in a simulated portfolio.
- Resolve its apparent duplication with the Kaggle bullet.

### Ridgeway University — Research Assistant

**Role heading**
- The dates are clear, but this role predates the Ph.D. start. That is plausible; no change is necessary unless the institutional status needs clarification.
- This section is strong and relevant for quant research.

**“Cut a 2,000-run Monte Carlo study…”**
- Treat the random-seed statement as a critical technical problem.
- Using the same seed on every worker can generate identical or correlated streams, reducing the effective number of simulations and invalidating uncertainty estimates.
- Verify the parallel random-number implementation. Use independent, reproducible streams or appropriately spawned substreams.
- Rerun the study if duplicate streams were produced.
- Keep the runtime improvement only after confirming that all 2,000 runs were statistically distinct.
- On the résumé, emphasize reproducibility and correct parallelization rather than identical worker seeds.

**“Derived a variance bound…”**
- Keep this high-value research bullet.
- Verify that “tightens…by a log factor” is mathematically precise and supported by the paper.
- Clarify your individual contribution if the paper has multiple authors.
- Use the journal’s full name or abbreviation consistently.
- Confirm that “under review” is current; update it when the status changes.
- Avoid implying acceptance or publication.

**“Taught weekly recitations…”**
- Keep if space allows because it demonstrates communication and teaching.
- Verify whether you wrote all 12 problem sets independently or contributed to them.
- Give context for the 4.8/5 rating if necessary, such as the response basis, but only if the comparison is favorable and accurate.
- For a one-page quant résumé, this may be lower priority than research output.

**“Released an open-source R package…”**
- Keep this.
- Link the package or source repository if it is public and polished.
- Specify the source of the 3,000-download count and avoid cumulative-download ambiguity.
- Mention testing, documentation, or maintenance only if these were substantial.
- Ensure your personal ownership is clear if others contributed.

## Projects

### Volatility Forecasting Study

**Project heading**
- “Present” is appropriate only if the project is still actively maintained or developed.
- If the work is substantially complete, use an end date to avoid making it look indefinitely unfinished.
- Consider linking the paper and repository if public.

**“Beat a HAR-RV baseline…”**
- Keep the quantified comparison.
- Clarify the exact evaluation design, especially train/validation/test separation and whether model choices were made using the test indices or periods.
- Explain whether the 7% is an average across indices, an aggregate loss reduction, or another summary.
- Confirm that the HAR-RV baseline was well tuned and used equivalent information.
- State whether the result includes multiple forecast horizons if applicable.

**“Tested significance with Diebold-Mariano tests…”**
- Keep the multiple-testing correction; it demonstrates rigor.
- Verify that the Diebold–Mariano assumptions and loss differential treatment were appropriate for overlapping forecasts and serial dependence.
- Define the two crisis periods elsewhere in the paper or project materials.
- Clarify whether crisis-period findings were pre-specified or exploratory.
- Avoid overstating statistical significance as economic or practical significance.

**“Wrote up the method…”**
- Clarify whether you personally presented the work; the current passive construction obscures that.
- If the seminar was internal rather than competitively selected, describe it accurately and do not make it sound like an external conference acceptance.
- Keep the working-paper length only if it adds value; research quality and availability matter more than page count.
- Link the paper if it is ready for review.

### Kaggle Market Prediction Competition

**Project heading**
- Name the actual competition if permitted. A generic title makes the result difficult to verify.
- Include placement, percentile, medal, or rank if favorable.
- Clarify your contribution within the three-person team.

**“Engineered features and trained…”**
- This is too generic compared with the rest of the résumé.
- Add the specific feature families, model responsibilities, or measurable contribution.
- State the competition outcome.
- Avoid retaining this bullet if it cannot distinguish your work from routine competition participation.

**“Cut validation leakage…”**
- Keep the methodological correction.
- Clarify the unit of the 0.02 gap because the metric is not named.
- Be careful with “cut validation leakage”: closing the local-to-leaderboard gap suggests better validation alignment, but it does not by itself prove leakage was eliminated.
- State whether the folds respected both time order and any asset/group dependencies.

**“Added 0.4 to the Sharpe ratio…”**
- Remove this unless it is genuinely separate from the Northpeak work.
- The overlap in strategy type, futures context, and 18-month out-of-sample period makes it appear duplicated.
- It also does not clearly connect to the stated Kaggle competition.
- If it is separate, establish distinct data, ownership, timeframe, and competition relevance.
- Do not include any Northpeak intellectual property or confidential result in a personal-project section.

## Skills

**Programming: Python, R, PyTorch, Kafka**
- Separate programming languages from frameworks and infrastructure; these items are not the same category.
- Kafka is not supported anywhere else on the résumé. Remove it unless you can demonstrate meaningful hands-on use.
- PyTorch is a framework rather than a programming language.
- Add only tools you can discuss technically and use without substantial assistance.
- Align the section with evidence already present in experience and projects.

**Methods: time-series econometircs…**
- Correct “econometircs” to “econometrics.”
- Use consistent capitalization and hyphenation.
- Consider whether “gradient boosting” belongs under methods or modeling techniques; organize categories consistently.
- Add methods only when supported by a bullet or research artifact.
- Prioritize skills relevant to the target role rather than creating a broad inventory.

## Ordering and presentation

- For quantitative roles, place **Northpeak first**, then the **research assistantship**. Keep the current bakery role, but allocate fewer bullets to it.
- Within Northpeak, lead with the strongest signal result, then validation, infrastructure reuse, portfolio-manager communication, and any properly validated parameter-selection work.
- Use consistent punctuation, date dashes, capitalization, and US spelling.
- Keep bullets from breaking awkwardly across lines where possible.
- Make every performance claim explicit about **sample status, costs, metric, and evaluation period**.
- Audit all claims for confidentiality, reproducibility, and double-counting before submitting.