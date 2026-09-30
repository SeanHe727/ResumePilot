# Résumé critique

**Assumed target:** Quantitative research / systematic trading, inferred from the Northpeak Capital internship and market-prediction projects. Without a job description, I can’t reliably assess exact ATS matching, seniority fit, or company-specific vocabulary.

## Overall assessment

You have a credible foundation for quantitative research: a statistics Ph.D. in progress, a relevant internship, concrete backtest results, and a strong competition placement. The biggest issue is not lack of substance; it’s that several claims need clearer definitions or contain apparent technical errors. In particular, the Sharpe annualization bullet and the “33% improvement” calculation could seriously undermine confidence in the rest of the résumé.

**Do these first:**
1. Remove the Sharpe annualization bullet; its calculation is wrong.
2. Correct or substantiate the volatility-project improvement calculation.
3. Reorder experience chronologically and remove date of birth and nationality.
4. Split the overloaded research-assistant bullet and remove repetition across project bullets.
5. Fix the typo in Skills and clarify the weaker or ambiguous quantitative claims.

## Section-by-section feedback

### Header and education

- **Remove date of birth and nationality.** They aren’t relevant qualifications and can introduce avoidable bias. Include work authorization only if it is relevant to an application or explicitly requested.
- **Consider placing Experience before Education.** The Northpeak internship is your strongest direct evidence for the assumed target role, so it should be easier to find. Keeping Education first is defensible for a current Ph.D. candidate, but in this version it delays your most role-relevant experience.
- **Make your Ph.D. status and expected completion date easy to read.** The expected date is useful; make sure it remains accurate when you use the résumé.
- **Consider adding a dissertation or research-area description** if it directly connects your statistical work to financial modeling. Don’t add a generic description just to fill space.

### Experience ordering

- **Move Northpeak Capital above the 2020–2021 Research Assistant role.** The current order is not reverse chronological, which can confuse recruiters and automated parsing.
- **Keep dates and date formats consistent** across all entries.

### Research Assistant, Statistical Learning Lab

- **First bullet:** The pipeline ownership is useful, but “other students relied on” is subjective and does not show what improved. Add a concrete indication of the pipeline’s scale, use, or effect if you can substantiate one. Name relevant infrastructure or tools only if they matter to the target role.
- **Second bullet:** This is a strong technical result, but “tightens the previous bound by a log factor” may be hard to evaluate without knowing the comparison. Clarify the technical comparison and your specific contribution. State the paper’s under-review status accurately, and make your authorship/contribution clear.
- **Third bullet:** The student count, number of problem sets, and teaching rating are specific. Keep it if teaching is relevant to the roles you’re pursuing; otherwise, it is lower priority than research and engineering accomplishments.
- **Fourth bullet:** This combines package release, cluster maintenance, reading-group organization, and grading in one bullet. The “which” clause also makes it unclear what earned 3,000 downloads. Separate the package achievement from other responsibilities, or remove the less relevant responsibilities. Identify the package and clarify what the download figure measures and over what period.

### Quantitative Research Intern, Northpeak Capital

- **First bullet:** This is a strong lead achievement. Clarify how the 18-month out-of-sample period relates to the internship and the strategy evaluation, and ensure the improvement is attributable to your signal rather than other changes. If permitted, give enough context about the benchmark, transaction costs, or evaluation method to make the result interpretable.
- **Second bullet:** The turnover and slippage figures are useful, but clarify the comparison behind “keeping 90% of gross returns” and how slippage was estimated. A reader should be able to tell exactly what changed and what was held constant.
- **Third bullet:** The test name alone doesn’t establish the size or significance of the improvement. Specify the forecast target and report the result in a way a reviewer can assess. If you tested across 30 indices, consider how multiple comparisons were handled.
- **Fourth bullet:** The opening construction is grammatically awkward: the participle does not clearly connect to the action that follows. Fix the sentence structure. Also clarify what the feature store enabled, and quantify its reuse or reliability benefit if possible.
- **Fifth bullet:** **Remove this.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization; under the usual independent-return assumption, annualization uses the square root of the number of trading days. This is a prominent technical error and could call the other financial claims into question. If this was only a reporting mistake, it still does not belong as an achievement.
- **Sixth bullet:** Documentation and onboarding are useful supporting evidence, but the “next intern cohort used to onboard in their first week” claim is vague. Keep it after the core research bullets, and retain it only if you can describe a concrete benefit or it demonstrates an important responsibility.

### Projects

#### Volatility Forecasting Study

- **First bullet:** The QLIKE result is relevant and quantified. Add enough evaluation detail to establish the forecast horizon, data split, and that the test period was held out. The repeated reference to the same model across three bullets makes the project feel less substantial than it is.
- **Second bullet:** The arithmetic appears inconsistent: a change from 0.20 to 0.15 is a **25% reduction relative to 0.20**, not 33%. Verify the values and calculation before keeping the percentage. Also identify what “forecast error” measures; it is too vague on its own.
- **Third bullet:** Clarify whether “6%” means six percentage points or a relative increase, and define the hit-rate calculation. This result overlaps with the other model-performance bullets; keep it only if it adds a distinct, useful outcome.
- **Across the project:** Reduce repetition. The bullets should each demonstrate a distinct contribution or result, rather than repeatedly naming the model and reporting adjacent performance measures. Make sure the claimed improvements are supported by a leakage-resistant evaluation.

#### Kaggle Market Prediction Competition

- **First bullet:** This is a clear, externally legible achievement. Keep it. If possible, make the competition and the private-leaderboard result easy to verify.
- **Second bullet:** Be precise about what the 0.02 gap represents and how time-grouped folds addressed leakage. A validation/leaderboard gap is not, by itself, proof of leakage.
- **Third bullet:** This is a useful implementation contribution. Clarify that feature selection was done without using information from validation or test data in a way that would cause leakage. It also overlaps somewhat with the first bullet’s mention of 300 features, so ensure the two bullets have distinct purposes.

### Skills

- **Correct the typo:** “econometircs” is misspelled.
- **Use consistent capitalization and formatting** for skills and categories.
- **Consider adding tools that are important for quant research only if you actually use them**—for example, data-querying, compiled-language, version-control, or market-data tooling. The current list is short, but unsupported additions would hurt more than help.
- The methods listed are relevant, but make sure the skills section reflects capabilities demonstrated in the experience and projects. Don’t use it as a list of keywords you cannot discuss in an interview.

## Reader-perspective assessment

- **ATS:** The résumé already contains relevant quant and finance terminology, including order-book imbalance, market microstructure, out-of-sample testing, transaction costs, Sharpe ratio, and volatility forecasting. An actual match rate cannot be calculated without a job description.
- **Recruiter glance:** Likely to get a closer look because of the Ph.D. and quant internship. The non-chronological experience order and personal details are avoidable distractions.
- **Hiring manager:** Likely to notice the internship results and strong competition placement, but also the Sharpe annualization error, the inconsistent forecast-error percentage, and the need for more methodological detail.
- **Technical reviewer:** The paper’s review status is appropriately signaled, but its title, authorship, and your exact contribution are not provided. I can’t verify the quantitative claims from résumé text alone.

## Provisional score

This is a résumé-quality estimate for the **inferred** quant-research target, not a job-specific match score.

| Dimension | Score | Main reason |
|---|---:|---|
| ATS / role keywords | 6/10 | Relevant vocabulary is present; exact fit depends on the job description. |
| Summary / positioning | 5/10 | No summary or explicit positioning statement; the target is inferred from the experience. |
| Skills | 5/10 | Relevant but sparse, with a typo. |
| Bullet quality | 6/10 | Strong results, weakened by ambiguity, repetition, and two apparent technical errors. |
| Research credibility | 7/10 | Under-review paper and quantitative projects help; publication details are missing. |
| Narrative coherence | 6/10 | Good statistical-to-finance potential, but ordering and project repetition blur the story. |
| Visual / formatting | Not assessable | Plain text doesn’t show page layout or line breaks. |
| Credibility signals | 7/10 | Ph.D., internship, and competition placement are strong; technical corrections are essential. |

**Provisional overall:** around **6.2/10**, excluding visual presentation. Correcting the technical issues and tightening the bullets should improve it meaningfully. A job description is needed to estimate actual interview fit.

## Ranked changes

### High impact — do these

1. **Delete the daily-Sharpe annualization bullet.** It contains a material calculation error and damages technical credibility.
2. **Verify the volatility-project percentage.** The stated values do not support the stated improvement; correct the calculation or remove the percentage.
3. **Reorder Experience in reverse chronological order.** This improves scanning and prevents the résumé from appearing incorrectly sequenced.
4. **Remove date of birth and nationality.** They don’t strengthen your candidacy.
5. **Separate the overloaded Research Assistant package bullet.** Make the download claim’s subject unambiguous and prioritize the package contribution.
6. **Reduce repeated project claims.** Keep distinct outcomes and remove bullets that restate the same model or result without adding new evidence.
7. **Clarify the internship backtest and evaluation claims.** Make the comparisons, metrics, and testing setup interpretable and defensible.

### Medium impact

- Clarify the baseline and contribution behind the variance-bound result.
- Make the feature-store bullet grammatical and quantify its impact if possible.
- Explain what the “0.02 gap” and “90% of gross returns” refer to.
- Add the under-review paper’s identifying details and your contribution, if appropriate.
- Correct the Skills typo and include only tools you can substantiate.

### Cosmetic or conditional

- Consider a brief positioning statement only if it adds a clear connection between your statistics research and quantitative finance.
- Keep teaching and onboarding evidence if it supports the roles you’re targeting or demonstrates otherwise-missing strengths; deprioritize it if space is tight.

## Interview preparation

Be ready to explain, in detail:

- How you separated signal improvement from benchmark choice, costs, and other backtest assumptions.
- How you built the point-in-time feature store and prevented late data or leakage from contaminating evaluation.
- How the volatility model was tested, what each reported metric means, and how you resolved the percentage discrepancy.
- Your exact contribution to the variance-bound work and the paper’s authorship and review status.
- What the Kaggle leakage issue was and how you established that the revised validation procedure was more reliable.

**Bottom line:** The underlying experience is promising. Fix the technical errors first, then improve ordering and precision. Without a job description, I can’t tell you which additional keywords or qualifications are essential for a particular opening.