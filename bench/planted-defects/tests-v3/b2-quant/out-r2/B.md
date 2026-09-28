## Highest-priority changes

1. **Resolve the duplicated trading result.**  
   The Northpeak internship and Kaggle project both claim an order-book imbalance signal increased a futures book’s Sharpe from 1.1 to 1.5 over 18 months. This looks copied, misattributed, or factually inconsistent. Decide where the work belongs and remove it from the other section. If the work involved both settings, distinguish your contribution and the datasets clearly.

2. **Fix the backtest-selection claim.**  
   The statement about selecting parameters from 400 configurations and treating the best Sharpe as expected live Sharpe is a serious methodological red flag. It describes multiple-testing/selection bias and makes the result sound overstated. Remove the “expected live Sharpe” interpretation or replace it with an honest out-of-sample or validation estimate. For a quant audience, this line may hurt more than it helps.

3. **Correct the Monte Carlo implementation claim.**  
   Using the same random seed on every worker can produce identical or correlated simulations, undermining the validity of the Monte Carlo study. Change the technical detail to indicate reproducible but independent random streams, or remove the seed detail if that is not what you actually implemented.

4. **Correct the skills typo.**  
   “econometircs” should be corrected to “econometrics.” A typo in a core methods skill is especially damaging for a quantitative resume.

5. **Clarify the status and meaning of the Ph.D.**  
   “Ph.D. candidate” is appropriate only if you have reached candidacy under your program’s definition. If you have not, use the university’s accurate status. Also consider adding your research area if it is relevant to the roles you want.

---

## Header

### Contact information
- **Verify the portfolio URL.** `example.com/code/mpatel` looks like a placeholder. Use a real, accessible repository or portfolio link.
- **Add LinkedIn, Google Scholar, or a personal research page only if current and relevant.** For quant research roles, a GitHub repository, working-paper page, or publication profile may be more useful than a generic personal site.
- **Check phone and email formatting.** The format is clean, but make sure the email address and phone number are professional and monitored.

---

## Education

### Ph.D. candidate in Statistics
- **Add a research specialization if it supports your target roles.** Your experience suggests financial econometrics, time-series modeling, statistical learning, and high-dimensional statistics. Naming the most relevant area would help recruiters understand your fit quickly.
- **Consider adding dissertation status or expected defense timing only if useful.** The expected completion date is sufficient for most applications, but a dissertation title or research area could strengthen research-oriented applications.
- **Ensure the May 2026 date is current.** If your completion date has changed, update it consistently everywhere.

### B.S. in Mathematics
- **Consider adding honors, GPA, or relevant coursework only if strong and useful.** This degree is several years old and your graduate experience is stronger, so these details are optional rather than necessary.
- **Consider shortening the education section if space is tight.** The Ph.D. is the more important credential for quant and research positions.

---

## Experience

### Assistant Store Manager, Sunrise Bakery

- **Check the chronology.** This role begins in September 2025, while the quantitative internship ended in August 2025. If the resume is being used before or shortly after September 2025, “Present” may be inaccurate. If this is a current secondary job while you finish the Ph.D., consider making that context clear elsewhere.
- **Clarify relevance or reduce the section’s prominence.** The role demonstrates management, operations, budgeting, and process control, but it is not directly relevant to quant research. Keep it if it explains current employment or demonstrates transferable responsibility; otherwise, place it under an “Additional Experience” section.
- **Change “labour” to “labor” for consistency with the U.S. location and the rest of the resume.**
- **Quantify the budget result if available.** The bullet says you kept the store within budget, but does not show the scale or outcome. Add a measurable result only if you can substantiate it.
- **Clarify the 12% to 7% inventory metric.** State what period or measurement basis it uses if space allows. “Unsold bread” could mean waste by units, value, or production volume, and the current wording leaves that ambiguous.
- **Check whether “production” and “unsold bread” are measured consistently.** The denominator should be clear enough that the reduction is credible.

### Quantitative Research Intern, Northpeak Capital

- **Define “risk-adjusted returns.”** This phrase is vague. Specify the metric used, such as Sharpe ratio, information ratio, drawdown-adjusted return, or another desk-approved measure.
- **Clarify the 35% improvement.** State whether it is a relative or percentage-point increase, and identify the evaluation period, benchmark, and transaction-cost assumptions. Without that context, the number is difficult to interpret.
- **Avoid implying live performance if this was only a backtest.** Make sure the wording distinguishes simulated, paper, and live results.
- **Review the validation bullet for unnecessary jargon.** “Purged walk-forward splits” and “embargo period” are valuable to a quant audience, but the explanation after “so” is somewhat long. Keep the technical terms, but make sure the line focuses on the methodological safeguard rather than explaining basic logic.
- **State the data scope more precisely if permitted.** “Six years of tick data” is useful, but asset class, instruments, and approximate observation scale would make the claim more meaningful. Do not disclose confidential information.
- **Clarify the feature-store contribution.** The bullet is strong, but “reused in two later signal projects” should be accurate and ideally distinguish deployment or adoption from merely being available.
- **Verify the “live allocation” claim and its timing.** Make clear whether portfolio managers approved your signal, your research recommendation, or a broader strategy. “Approved” is a strong claim and should be supportable.
- **Remove or materially change the parameter-selection bullet.** As written, it signals overfitting and incorrect interpretation of the selected Sharpe. This is the most problematic line in the internship section.
- **Resolve the relationship between the first and final quant bullets.** Both describe a futures strategy, costs, Sharpe improvement, and a smoother or order-book imbalance signal. They may be separate contributions, but the resume currently makes them look overlapping or contradictory.
- **Correct the “18 months of out-of-sample backtest” wording if necessary.** An 18-month historical evaluation is not necessarily “out of sample” unless the model and all decisions were frozen before that period. Also, an intern may not have personally produced 18 months of live out-of-sample results during a three-month internship. Use the technically correct distinction among training, validation, test, and live periods.
- **Support the Sharpe improvement with context.** Include whether it is net of realistic costs, how turnover and capacity were handled, and whether the difference is statistically or economically meaningful. Avoid adding detail that would disclose proprietary information.

### Research Assistant, Statistical Learning Lab

- **Fix the randomization detail as noted above.** Same seeds across workers are not an appropriate description of independent Monte Carlo simulation. This bullet could undermine confidence in your statistical judgment.
- **Clarify what “cut” refers to.** The runtime reduction is compelling, but distinguish wall-clock time from total compute time if relevant. Parallelization often reduces elapsed time while increasing total compute.
- **Make the theoretical contribution more precise.** “Tightens the previous bound by a log factor” is potentially strong, but a reader may want to know whether the result is a theorem, a corollary, or an empirical observation. Use the accurate mathematical description.
- **Handle the JASA status carefully.** “Under review” is acceptable if true, but do not imply acceptance or publication. Consider adding a publication/manuscript section if the paper is central to your candidacy.
- **Verify the teaching rating and sample size.** A 4.8/5 rating is useful, but its credibility improves if the evaluation instrument and approximate response count are known.
- **Clarify whether the R package is still maintained.** Downloads are a good metric, but maintenance, documentation, tests, citations, or institutional adoption may be more relevant for technical roles. Include only metrics you can verify.

---

## Projects

### Volatility Forecasting Study

- **Specify what “beat” means.** The QLIKE improvement should identify the evaluation design, forecast horizon, aggregation method across indices, and whether the comparison is relative or absolute.
- **Clarify the data split.** “Out-of-sample” should be supported by a clearly separated test period and no tuning on that period. This is especially important because the rest of the resume emphasizes rigorous validation.
- **Explain the 30-index aggregation carefully.** Results across assets can be dominated by a few indices or by different sample lengths. If space permits, indicate whether the reported gain is an average, median, pooled result, or another aggregate.
- **Review the significance claim.** The Diebold–Mariano and Holm-correction details are good, but “held at the 5% level” should accurately reflect the exact hypothesis and correction procedure. Avoid implying that statistical significance establishes economic usefulness.
- **Clarify the “both crisis periods” statement.** Name or define the periods elsewhere if they are not obvious from the paper. Also make sure the crisis-period result was not selected after examining many candidate subperiods.
- **Add a repository or paper link if available.** This project is one of the strongest parts of the resume; allowing reviewers to inspect the work would increase its value.
- **Check whether “working paper” is the correct status.** If it is only a class or seminar paper, label it accurately. If it has a public manuscript, include a publication or working-paper entry instead of relying only on the project section.

### Kaggle Market Prediction Competition

- **Add the competition name, placement, or score if it was strong.** As written, “market prediction competition” is generic and does not establish the project’s outcome.
- **Clarify your individual contribution to the team project.** The team size is useful, but the bullets should make clear which parts you personally implemented.
- **Remove the first bullet or make it more specific.** “Engineered features and trained gradient-boosting models” is generic compared with the more rigorous bullets elsewhere. It needs concrete scope or outcome to justify its space.
- **Review the leakage claim.** Explain what caused the validation–leaderboard gap and how you established that the revised folds reduced leakage rather than simply changing the evaluation distribution.
- **Resolve the duplicated futures-signal bullet.** It appears nearly identical to the Northpeak result and may make the resume look padded or inconsistent. Remove it, attribute it correctly, or clearly distinguish the dataset and work.
- **Be cautious with “added 0.4 to the Sharpe ratio.”** State the baseline, evaluation period, costs, turnover, and whether the result was simulated or live. A raw Sharpe increase without context can look like backtest overfitting.

---

## Skills

### Programming
- **Order skills by proficiency and relevance.** Put the strongest and most role-relevant tools first, but only list technologies you can discuss in an interview.
- **Add key tools demonstrated in the experience section if applicable.** For example, if you used SQL, Git, Linux, cloud infrastructure, distributed computing, or specific data libraries, include them only if you genuinely have working proficiency.
- **Clarify Kafka’s role or remove it.** Kafka appears nowhere else in the resume. An unexplained skill can invite questions about whether you have meaningful experience with it.

### Methods
- **Correct “econometircs” to “econometrics.”**
- **Use consistent capitalization and terminology.** “Time-series econometrics” may be more precise than a broad label if that is your actual area, but do not add or change terminology unless it accurately reflects your training.
- **Consider including methods demonstrated in the bullets.** Your resume visibly uses Monte Carlo methods, volatility modeling, statistical testing, walk-forward validation, point-in-time joins, and high-dimensional statistics. The skills section should reflect the strongest of these if space permits.
- **Avoid listing methods you cannot defend technically.** Given the backtesting and multiple-testing issues in a few bullets, be prepared to explain exactly how you implemented each listed method.

---

## Structure and presentation

- **Add section separation for relevance.** If the bakery role is retained, consider distinguishing it from quantitative experience so recruiters do not mistake it for your primary professional direction.
- **Consider a publications or research section.** Your theorem, JASA submission, package, and working paper may deserve more visibility than they receive in the current experience/project format.
- **Use consistent date and location formatting.** The current layout is generally consistent; check spacing, dash style, and whether all dates reflect the same convention.
- **Check line wrapping.** Several bullets wrap awkwardly, especially around “labour budget,” “embargo period,” and the final Northpeak bullet. Adjust margins, font size, or wording length so each bullet remains easy to scan.
- **Prioritize credibility over quantity.** The resume has strong technical content, but duplicated results, ambiguous backtest language, and the Monte Carlo seed detail create avoidable credibility concerns. Correct those before adding more accomplishments.
- **Tailor the emphasis to the role.** For quant research, lead with Northpeak, volatility forecasting, statistical learning, and rigorous validation. For general data science, emphasize modeling, software, reproducibility, and the R package. For academic roles, elevate publications, theory, teaching, and research methods.