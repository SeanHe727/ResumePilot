# Resume review

I’m treating the target as a **quantitative research role**, based on the Northpeak internship and market-forecasting projects. Without a job description, I can’t reliably score keyword match or tailor the vocabulary to a particular firm. I also can’t assess page layout from plain text.

## Fix these first

1. **Remove or correct the Sharpe annualization bullet.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization method; for independent daily returns, it is typically multiplied by the square root of 252. As written, this is a conspicuous technical error that could undermine confidence in the rest of your results. Don’t retain the claim unless you can accurately explain and substantiate the method.
2. **Correct the forecast-error arithmetic.** A decrease from 0.20 to 0.15 is a **25% reduction** relative to the starting value, not a 33% improvement. Recheck the calculation and make sure the stated improvement uses a clearly defined convention.
3. **Fix the skills typo:** “econometircs” should be corrected.
4. **Move Northpeak above the university research-assistant role.** Experience should normally be in reverse chronological order.
5. **Remove date of birth and nationality** from a US resume. They’re not useful qualifications and can introduce privacy and bias concerns. Include work authorization only if relevant and accurate.
6. **Replace placeholder-looking contact details** if they are literal. The 555 phone number and `example.com` email/domain will look nonfunctional. If you anonymized them for this review, disregard this point.

## Changes by section and bullet

### Education

- **Keep the Ph.D. expected date**, but make sure “candidate” accurately reflects your program status.
- **Consider moving Education below Experience** for industry applications. Your internship and research work are now more directly relevant than the undergraduate degree.
- The education dates are coherent with the listed research-assistant role, but the resume doesn’t say whether that role was undergraduate research or a separate appointment. Clarify the context if it might otherwise be confusing.

### Research Assistant

- **Simulation-pipeline bullet:** The ownership claim is useful, but “other students relied on” is vague. Add concrete scope or impact—such as reproducibility, scale, or users—if you can support it.
- **Variance-bound bullet:** This is one of your strongest research signals. Make the paper’s status and your contribution unmistakable, and consider whether a publication/preprint entry would give the work better visibility. “Now Section 3” is less informative to a hiring reader than authorship, paper identity, and research contribution.
- **Teaching bullet:** The student count, materials, and rating are specific. Keep it if teaching is relevant to the role or if you need evidence of communication; otherwise, give the space to technical research or engineering work.
- **R-package bullet:** This combines several unrelated responsibilities, so the package result is easy to miss and the “3,000 downloads” figure is hard to connect to the rest of the sentence. Separate the package accomplishment from lab operations, or remove lower-priority duties. Clarify the download metric if it could be confused with unique users or installations.

### Quantitative Research Intern

- **Order the internship before the older research-assistant role.**
- **Order-book signal bullet:** This is a strong, role-relevant result, but clarify what “raised the desk book’s Sharpe ratio” means—especially the comparison, attribution, annualization convention, and how the out-of-sample period was defined. As written, a reader may wonder whether the result is attributable to your signal alone or to the wider book.
- **Turnover/smoother bullet:** Keep the result, but ensure “keeping 90% of gross returns” and the slippage reduction are defined consistently with the first bullet’s evaluation period and cost assumptions.
- **Diebold–Mariano bullet:** The test name is relevant, but the resume gives no test results. Add the statistical outcome or supporting evidence if it is appropriate to disclose. Be prepared to explain the baseline, forecast target, test assumptions, and whether you addressed multiple comparisons across 30 indices.
- **Feature-store bullet:** The opening construction is grammatically awkward, and the sentence makes your contribution hard to follow. Clarify what you personally built and what “reused in two later projects” means. Keep the six-venue and point-in-time details if you can explain how they prevented data leakage.
- **Sharpe annualization bullet:** Remove it unless corrected and technically defensible; in its present form it is a serious credibility problem.
- **Research-wiki bullet:** This is useful evidence of documentation and handoff, but lower priority than the signal and feature-store work. Keep it if space allows, and make sure the claim about onboarding is specific and verifiable.

### Projects

#### Volatility Forecasting Study

- **The first and third bullets repeat the same model and dataset.** Different results can justify separate bullets, but make sure each adds a distinct piece of evidence rather than restating the same experiment.
- **Resolve the 0.20-to-0.15 percentage issue** noted above, and identify the forecast-error metric so a reader can interpret it.
- **Clarify whether the 6% hit-rate change is a relative increase or six percentage points.** Also ensure the comparison uses the same test set and baseline as the other reported results.
- The project overlaps with your internship’s HAR-RV comparison and volatility forecasting. Make the independent project’s scope and contribution distinct so it doesn’t read like duplicated experience.

#### Kaggle competition

- **Keep the placement:** 41st of 2,900 teams is a clear, useful result.
- **Clarify the validation-gap metric.** The 0.02 figure has no named score or scale, and “cut validation leakage” may overstate what changing folds alone established. Be precise about what changed and what the evidence shows.
- **Feature-selection bullet:** The reduction from 900 to 300 features is concrete. State the score metric or evaluation context if it is needed to make “without losing validation score” meaningful.

### Skills

- Correct the spelling error in “time-series econometrics.”
- Consider organizing skills so a reader can quickly distinguish programming tools from statistical methods. The current list is short, but it doesn’t mention tools such as SQL, Git, Linux, or C++—include any only if you have real working experience with them.
- Keep the methods list aligned with what you can discuss in technical depth. The resume uses time-series forecasting, realized volatility, order-book features, and high-dimensional statistics; make sure the skills section reflects the most relevant methods you actually used.

## Overall assessment

**Strongest signals:** a relevant quantitative-research internship, measurable backtest results, a top competition finish, and credible statistical research experience.

**Main concerns:** the incorrect Sharpe annualization claim, inconsistent forecast-improvement arithmetic, overlapping project bullets, and a few results that need clearer evaluation definitions. These are more important to fix than adding extra keywords.

For a quantitative-research application, prioritize correcting the technical claims, clarifying the backtest evidence, and tightening duplicated or overloaded bullets. A job description would be needed to judge whether your methods and terminology match a particular team.