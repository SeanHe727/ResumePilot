Assuming you’re targeting quantitative research or statistics roles, the strongest material is your research and modeling work. The main issues to fix are a mathematical error, a percentage calculation, a few unclear or grammatically awkward bullets, and repeated or overloaded claims.

## Header and education

- **Contact line:** Check that the code-profile URL is a direct, working link and leads to relevant work. A generic or inactive link adds little.
- **Ph.D. entry:** Keep the expected graduation date current, and use “candidate” only if that accurately reflects your program status. Your dates make the degree look in progress, which is clear.
- **Degree date formatting:** The education and experience dates are consistent in substance, but settle on one date style throughout the resume.

## Experience

### Sunrise Bakery

- **First bullet:** “A team of 6 bakers and cashiers” is ambiguous: it could mean six people total or six in each role. Clarify the team size. Consider whether the weekly labour-budget result is meaningful enough to quantify further; as written, “keeping the store within” does not show the scale of the responsibility or result. Also choose either US or British spelling consistently.
- **Second bullet:** The unsold-bread reduction is a useful, concrete result. Make sure the comparison periods and calculation are defensible, since production and unsold quantities can vary over time.

### Northpeak Capital

- **First bullet:** “Raised the desk book’s Sharpe ratio” is a strong claim that may sound as though your signal alone changed the performance of the whole book. Clarify the contribution being measured and the backtest assumptions, especially how the 18-month out-of-sample period was selected and whether it includes realistic costs. This will make the result more credible.
- **Second bullet:** Clarify what “daily turnover” and “keeping 90% of gross returns” mean in your evaluation. The slippage reduction is useful, but specify the basis for the estimate if it was modeled rather than observed.
- **Third bullet:** “Forecast gain” is vague: make clear what was forecast and what improved. Since you mention tests across 30 indices, be prepared to explain how you handled multiple comparisons and what the tests established.
- **Fourth bullet:** This bullet has a grammatical problem: the opening “Joining…” phrase does not attach cleanly to the person who built the feature store. It is also dense with technical details. Make the action and the outcome easier to follow, and clarify whether the two later projects actually used the feature store.
- **Fifth bullet:** Remove this bullet. Multiplying a daily Sharpe ratio by 252 is not the standard annualization; under the usual assumptions, annualized Sharpe scales by the square root of the number of trading periods. More importantly, this describes a calculation rather than a contribution, and reporting the incorrect calculation undermines the other quantitative claims.
- **Sixth bullet:** The phrase about the next cohort using the wiki “to onboard” is grammatically awkward and unclear about what they used. Make the relationship between your documentation and their onboarding explicit. The result is useful if you can substantiate it.

### Ridgeway University research assistant

- **First bullet:** Strong evidence of engineering impact and reproducibility. Specify the computing setup or what made the pipeline faster if that helps show the work was technically substantive.
- **Second bullet:** “My proof” is unnecessarily first-person and stands out from the rest of the resume. Clarify your authorship/contribution to the paper and what “by a log factor” means mathematically. Keep “under review” accurate; it should not imply publication or acceptance.
- **Third bullet:** The teaching scale and rating are useful. Clarify that the rating is a student evaluation and, if relevant, how many evaluations it is based on.
- **Fourth bullet:** This combines a research output, cluster maintenance, reading-group organization, and grading in one bullet, so the package’s 3,000-download result is hard to connect to the other activities. Separate or prioritize the contributions. Also consider whether the administrative duties deserve space compared with your research and technical work.

## Projects

### Volatility Forecasting Study

- **First bullet:** Specify whether the 7% QLIKE improvement is a relative reduction, and make the evaluation setup clear enough to distinguish training from out-of-sample data. “On 30 equity indices” alone does not explain how the result was aggregated.
- **Second bullet:** The stated calculation is inconsistent: reducing error from 0.20 to 0.15 is a **25% reduction** relative to 0.20, not a 33% improvement. Check the underlying figures and the definition of “forecast error.” This bullet also overlaps with the first, so make sure it adds a distinct result.
- **Third bullet:** A change from 52% to 58% is **6 percentage points**, not a 6% relative improvement. Also define “directional hit rate” and explain how it was evaluated. This repeats the temporal convolutional model and the same 30-index scope from the first bullet; keep it only if it adds a separate, clearly explained finding.

### Kaggle Market Prediction Competition

- **First bullet:** The 41st-place finish and “top 2%” describe essentially the same result. Keep the ranking context clear, including whether the rank is on the private leaderboard.
- **Second bullet:** “Cut validation leakage” may overstate what changing the fold strategy establishes; it may instead have made validation more representative of the leaderboard setting. Be precise about what changed and how you measured the 0.02 gap. Explain the score scale if it is not obvious.
- **Third bullet:** Explain how the 900 candidate features were generated or selected. “Without losing validation score” is less persuasive if the same validation data guided feature selection; make clear how you avoided overfitting to that validation set.

## Skills

- **Methods:** Correct the misspelling in “econometircs.” Also check that the methods listed reflect skills you can discuss in depth.
- **Skills categories:** PyTorch and Kafka are tools/frameworks rather than programming languages, so the “Programming” label is too narrow for the items under it. Use category labels that accurately describe the contents, and include proficiency or context only if you can support it.

## Overall

- Keep the bakery role if it is your current work, but give the most space and detail to the quantitative research and statistical-learning experience most relevant to your target roles.
- Before submitting, verify every metric, comparison period, and percentage. In a resume with many precise quantitative claims, small calculation or attribution errors can cast doubt on the rest.