## Highest-priority fixes

1. **Remove or substantially rethink the Northpeak bullet about choosing the best of 400 configurations and reporting its Sharpe as expected live Sharpe.** Selecting the best result from many backtests creates selection bias; that maximum is not an unbiased estimate of live performance. As written, this is likely to concern a quantitative hiring manager. Don’t present it as a live expectation. If you retain the work, describe a defensible evaluation using data not used to select the parameters.
2. **Resolve the repeated futures-signal result.** The Northpeak experience and Kaggle project both claim an order-book imbalance signal improved a futures book over 18 months out of sample. Make clear whether these are separate projects or the same work, and avoid claiming the same result twice.
3. **Fix the parallel Monte Carlo claim.** Using the same random seed on every worker can cause workers to generate duplicate or correlated random streams, undermining the study. Verify what the code actually did and describe its random-stream handling accurately.
4. **Clarify the performance numbers.** The 35% risk-adjusted-return improvement and the Sharpe increase from 1.1 to 1.5 may describe related results. Define the metric and baseline, and distinguish the results so they don’t look like overlapping claims.

## Header and education

- **Contact line:** Make sure the code portfolio link is clickable and points to a relevant, current portfolio. Add another professional profile only if it strengthens the application.
- **Ph.D. entry:** The expected completion date is useful. Consider adding your research area or dissertation topic if it supports the roles you’re targeting; otherwise, the entry is sufficient.
- **Education dates and locations:** These are clear. Keep date formatting consistent throughout the resume.

## Experience

### Sunrise Bakery

- **Assistant Store Manager entry:** Because this is your current role, consider whether present-tense wording would better distinguish ongoing responsibilities from completed results. The current past-tense verbs aren’t inherently wrong, but be consistent.
- **Managed opening shifts and a team of 6…:** Clarify whether the six people are direct reports or the team working those shifts. “Keeping the store within its weekly labour budget” is useful, but specify the result or scope if you can substantiate it. For a U.S.-based resume, use the U.S. spelling of “labor.”
- **Ran daily stock counts…:** The reduction from 12% to 7% is strong. Clarify the measurement period and whether those figures are percentages of production or percentage-point values, so the scale of the result is unmistakable.

### Northpeak Capital

- **Improved risk-adjusted returns by 35%…:** Define “risk-adjusted returns” and the comparison baseline. Without that, the result is difficult to interpret and may appear to overlap with the later Sharpe claim.
- **Validated the signal on 6 years of tick data…:** The validation details are valuable. The final clause makes a broad claim that every decision used only contemporaneously available information; keep that claim only if it accurately covers feature construction, model selection, and all tuning—not just the split design.
- **Wrote a feature store for 120 microstructure features…:** This is a good engineering and adoption result. Clarify your ownership and what “reused” means if you can support it; the count alone doesn’t show the store’s impact.
- **Presented the signal…:** Distinguish approval for a future allocation from an allocation that actually went live. If it did go live, say so only if you can substantiate that outcome.
- **Selected the smoother’s parameters from 400 backtested configurations…:** Remove the claim that the best in-sample or backtested Sharpe was the expected live Sharpe. It signals a basic evaluation problem. If you keep the parameter-selection work, report a properly held-out estimate instead.
- **Built a short-horizon order-book imbalance signal…:** The Sharpe change is compelling, but identify the baseline and clarify how it relates to the 35% improvement above. Also make clear that the 18-month period was genuinely held out from all model and parameter selection. Consider moving this result ahead of the methodological bullets so the outcome is easier to find.

### Ridgeway University research role

- **Cut a 2,000-run Monte Carlo study…:** “Running the runs” is redundant. More importantly, verify the random-seed approach before retaining this bullet: the same seed on every worker can repeat random sequences rather than provide independent simulations. Include the hardware or computing setup if it helps make the runtime comparison meaningful.
- **Derived a variance bound…:** Clarify what “tightens the previous bound by a log factor” means mathematically, and avoid making the result sound accepted or published while the paper is under review. If appropriate, identify your authorship role and keep the manuscript status precise.
- **Taught weekly recitations…:** This is a strong teaching bullet. Add the response count or evaluation context for the 4.8/5 rating if available; a rating without that context can be hard to assess.
- **Released an open-source R package…:** Include a repository or package link if it is accessible. Downloads are useful evidence of reach, but clarify the time window and make sure the count reflects meaningful downloads rather than an automated or cumulative statistic.

## Projects

### Volatility Forecasting Study

- **Beat a HAR-RV baseline’s…:** Specify the evaluation period and how the 7% QLIKE improvement was aggregated across indices. This makes the result easier to interpret and assess.
- **Tested significance with Diebold-Mariano tests…:** The statistical detail is a strength. Clarify what family of comparisons received the Holm correction, especially since you also refer to results in two crisis periods. Avoid implying that all of those claims were corrected if only the 30-index tests were.
- **Wrote up the method…:** A working paper and seminar presentation help establish research communication. Make sure “presented” means you delivered the talk, and add a link to the paper if it is shareable.

### Kaggle Market Prediction Competition

- **Competition entry:** Add the competition’s name or outcome if it is recognizable and meaningful. “Team of 3” gives context, but readers can’t tell how the project performed or what you personally owned.
- **Engineered features and trained gradient-boosting models…:** This bullet is generic and doesn’t give a result or distinguish your contribution. Strengthen it with specific, verifiable scope or impact, or remove it if the next bullets already cover the relevant work.
- **Cut validation leakage…:** Switching to time-grouped folds is a useful methodological decision, but a smaller validation-to-leaderboard gap does not by itself prove leakage was eliminated. Clarify what the 0.02 measures and whether the leaderboard comparison was public or otherwise independent.
- **Added 0.4 to the Sharpe ratio…:** This reads like a separate trading strategy rather than a competition result, and it overlaps with the Northpeak claim. Clarify the project connection and whether this is genuinely separate work; otherwise, consolidate the claim in one place.

## Skills and consistency

- **“time-series econometircs”:** Correct the spelling error. Typos in the skills section are especially conspicuous.
- **Programming list:** PyTorch is a framework rather than a programming language. Organize the entries so languages and libraries/tools are clearly distinguished.
- **Skills relevance:** Kafka is less obviously connected to the research results shown here. Keep it if you can discuss practical experience with it; prioritize skills most relevant to the roles you’re applying for.
- **Formatting and terminology:** Standardize spelling, capitalization, punctuation, and date style across the resume. In particular, use consistent U.S. spelling if that is your target market.
- **Overall focus:** The bakery role may be worth keeping to show current employment and management responsibility, but keep it proportionate to the quantitative experience if you’re applying for quant research roles. The strongest differentiators are your research, validation discipline, and measurable results—make sure those claims are both prominent and statistically defensible.