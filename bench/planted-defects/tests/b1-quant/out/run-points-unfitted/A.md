> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all 5 entries with bullets for content and wording, the full resume narrative, and formatting. Education entries were not reviewed because they have no bullets. No job-description match was run because no posting was provided.

The main changes to make are:

1. **Correct quantitative issues before editing style**
   - **Northpeak Capital, b4:** The annualization calculation—multiplying a daily Sharpe ratio by 252—was flagged as materially incorrect. Verify the methodology and replace or remove this line.
   - **Volatility Forecasting Study, b1:** The move from 0.20 to 0.15 is a **25% reduction**, not a 33% improvement. Also identify the error metric.
   - **Volatility Forecasting Study, b2:** The change from 52% to 58% should be described as **6 percentage points**, not 6%.

2. **Clarify the strongest quantitative claims**
   - **Northpeak, b0:** Define what “added 0.4 Sharpe” means and identify the baseline.
   - **Northpeak, b2:** State the actual forecast improvement and forecast target/horizon rather than only mentioning the Diebold–Mariano test.
   - **Kaggle, b1:** Identify the metric represented by the 0.02 validation/leaderboard gap and whether closing it improved the final result.
   - **Volatility Study, b0:** Clarify whether the 7% QLIKE result is a relative reduction or percentage-point difference.

3. **Reduce overlap and repetition**
   - The three Volatility Study bullets report overlapping results from the same model and evaluation set. Distinguish the objectives clearly or remove one of the overlapping claims.
   - The Kaggle placement and “top 2%” statements express essentially the same outcome; retain the more informative version.
   - The Northpeak feature-store and documentation bullets should support the main research results rather than receive equal emphasis.

4. **Improve organization**
   - The resume’s quantitative research arc is clear across the Ph.D., Northpeak, research assistantship, and projects, but placing **Sunrise Bakery** first interrupts that sequence.
   - Move it to an **Additional Experience** section below the quantitative material, or shorten it substantially.
   - Within the research-assistant entry, separate or prioritize the theoretical research, computing pipeline, software release, and teaching responsibilities so they do not read as one mixed role.

5. **Tighten wording and remove ambiguity**
   - Replace imprecise wording such as “Ran daily stock counts and supplier orders.”
   - Remove the first-person pronoun in the research-assistant bullet.
   - Break up the long feature-store modifier in the Northpeak entry.
   - Remove redundant phrases such as “for future interns” and repeated model descriptions.

6. **Check the Skills section**
   - The narrative review found that SQL, C++, Kafka, Bayesian inference, and time-series econometrics are not demonstrated in the experience or project bullets. Either substantiate those skills elsewhere in the resume or remove them.
   - “Time-series econometrics” is currently misspelled.

The file itself is one page, 555 words, parses cleanly for ATS, and has no layout warnings. The full report, including the entry-by-entry findings, is available with `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 79 · wording 84 · narrative 62

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Remove the Sharpe annualization bullet unless it is rewritten to document a corrected annualization method and a resulting research or reporting improvement.
   Multiplying a daily Sharpe ratio by 252 is a material quantitative error, and the current bullet describes a reporting calculation rather than research impact.
2. Correct the forecast-error calculation from 33% to 25% and name the error metric being reduced.
   A decrease from 0.20 to 0.15 is 25%, not 33%, so the current arithmetic error can undermine confidence in the quantitative analysis.
3. State whether the 7% QLIKE result is a relative reduction in loss or a percentage-point difference, and use that definition in the comparison wording.
   The reader cannot interpret the magnitude of the improvement without knowing what the percentage is relative to.

## Already working

- s2:e1:b0: Strong quantified investment impact.
- s3:e0:b0: Names the benchmark, evaluation metric, model family, feature type, and dataset scope.
- s3:e1:b0: Leads with a highly credible competition result.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- Replace the labour-budget claim with the actual variance from target, such as the amount or percentage under budget, while retaining the six-person team scope. *(about 5 words to add)*
  “Within budget” establishes compliance but does not let the reader assess the scale of the management result.
- Add the period over which unsold bread fell from 12% to 7%, and use a sustained-period comparison if one is available. *(about 4 words to add)*
  The reader cannot tell whether the reduction was maintained or was only a short-term fluctuation.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Define “added 0.4 Sharpe” as incremental portfolio Sharpe, standalone signal Sharpe, or a named attribution against a specific baseline. *(about 7 words to add)*
  A reader cannot interpret the trading result or compare its magnitude without knowing which Sharpe quantity changed and what it was measured against.
- Clarify the research judgment behind the order-book imbalance signal by naming the construction choice or market-information hypothesis that produced it. *(about 8 words to add)*
  The current line identifies the signal family but does not show what you decided to model or why that design should contain predictive information.
- Explain what made the position smoother cost-aware, such as the turnover, liquidity, or transaction-cost constraint it optimized. *(about 7 words to add)*
  The intervention is named, but the reader cannot tell what mechanism connected the smoother to lower execution costs.
- State the measured forecast improvement produced by the signal, such as the error reduction or forecast metric difference, instead of only saying that a gain was confirmed. *(about 7 words to add)*
  A named statistical test supports the comparison, but the reader still needs the result that the test evaluated.
- Identify the forecast target and horizon used in the Diebold-Mariano comparison, such as the volatility target and forecast interval. *(about 6 words to add)*
  Without the target and horizon, the reader cannot tell what forecasting task the reported test addressed.
- Replace “reused in two later projects” with the concrete value the feature store delivered, such as setup time saved, data errors prevented, or analyses enabled. *(about 8 words to add)*
  Reuse establishes adoption but does not show whether the system materially improved the later projects.
- Replace the cumbersome feature-store modifier chain with a direct construction, such as “Built a feature store by joining 120 point-in-time microstructure features across six venues, deduplicating late prints, and versioning schemas.” *(saves about 3 words)*
  The current opening delays the main verb and makes the technical scope harder to scan.
- Remove “for future interns” from the documentation bullet unless you can replace it with evidence that the wiki enabled later research or handoff work. *(saves 3 words)*
  The intended audience matters less to a recruiter than whether the documentation was used and what it enabled.
- Treat the feature-store and documentation bullets as supporting work, and place them after the signal-development and evaluation results. *(no words)*
  The entry has a clear research sequence, so infrastructure and handoff work should reinforce rather than compete with the headline trading achievements.

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- Make the theoretical research contribution the main bullet and separate the infrastructure, teaching, software, reading-group, and grading work into distinct supporting bullets or a separate responsibilities line. *(no words)*
  The current entry reads as several unrelated roles, making the variance-bound contribution harder to identify.
- Name the implementation choice that produced the simulation speedup, such as parallelization, job orchestration, or cluster scheduling. *(about 5 words to add)*
  The timing result is strong, but the reader cannot tell what technical work caused the reduction from three days to five hours.
- Add the proof technique or key assumption that enabled the sparse-regression variance bound. *(about 7 words to add)*
  The result is concrete, but a technical reader cannot assess the mathematical judgment behind it from “Derived a variance bound” alone.
- Give the exact old and new bounds, or state precisely what logarithmic factor changed, instead of only saying the previous bound was tightened. *(about 8 words to add)*
  The reader needs a concrete comparison to judge the significance of the theoretical improvement.
- Add the instructional method or a concrete student outcome to the recitation bullet, while retaining the 60-student scale and teaching rating. *(about 7 words to add)*
  The current wording shows recurring activity and evaluation but not what you did instructionally or what students achieved.
- State the package’s distinctive capability or problem solved and connect the 3,000 downloads to research use, citation, or adoption. *(about 12 words to add)*
  The current bullet shows that software was released and downloaded but not what made it useful or whether it entered a research workflow.
- Split the cluster maintenance, reading-group organization, and grading into separate bullets only if each has a result; otherwise remove them from the research contribution bullet. *(saves about 8 words)*
  Bundling unrelated duties obscures the package achievement and gives no outcome for any of the added responsibilities.
- Remove “my” from “my proof” so the line remains a résumé phrase rather than a first-person sentence. *(saves 1 word)*
  The personal pronoun breaks the document’s otherwise consistent résumé style.
- Shorten “is now Section 3 of a paper under review at JASA” to “in a JASA paper under review.” *(saves about 6 words)*
  The shorter status clause preserves the external credibility signal while reducing an overly long sentence ending.
- Attach the download figure directly to the R-package clause rather than using “which” after the intervening responsibilities. *(no words)*
  The current relative clause is grammatically ambiguous about what was downloaded.
- Remove “maintaining the lab’s shared cluster” from the software bullet because the preceding simulation bullet already establishes that responsibility. *(saves about 5 words)*
  Repeating the same responsibility uses space that could clarify the package’s distinctive contribution.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Say whether realized-volatility features and the asymmetric loss were ablated separately or introduced together, and attribute the improvement only to effects the tests support. *(about 9 words to add)*
  The current wording cannot show which of the two modeling choices caused the error reduction.
- Report the directional hit-rate change as 6 percentage points, retaining the endpoint values only if they add useful context. *(about 2 words to add)*
  The stated movement from 52% to 58% is a six-percentage-point increase, not a 6% relative improvement.
- Keep the directional-hit-rate bullet only if it represents a distinct decision objective; otherwise remove it because it repeats the same model and 30-index evaluation. *(saves about 12 words if removed)*
  The model and evaluation universe already appear in the forecasting result, so the extra bullet needs a distinct purpose to justify its space.
- Merge the QLIKE-loss and forecast-error results into one bullet or remove one, because both report performance gains from the same forecasting study. *(saves about 12 words if one is removed)*
  Separate bullets make the project appear repetitive unless the two metrics answer clearly different evaluation questions.
- Shorten the method phrase after the QLIKE result and do not repeat “temporal convolutional model” in the directional bullet. *(saves about 8 words)*
  The method wording delays the result in one bullet and repeats information already established in the preceding bullet.
- Use either the corrected 25% reduction or the 0.20-to-0.15 endpoints in the error bullet, not both. *(saves about 4 words)*
  The current phrase states the same result twice and makes the already incorrect percentage more prominent.
- Use either “6 percentage points” or the 52%-to-58% endpoints in the directional bullet, not both. *(saves about 5 words)*
  The current wording redundantly reports the change and its endpoints.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- Keep either “41st of 2,900 teams” or “top 2% of the private leaderboard,” not both. *(saves about 8 words)*
  The two phrases communicate the same competition result, so retaining both spends space without adding evidence.
- Identify the metric for the 0.02 gap, state that it is an absolute or relative difference, and report whether closing it improved the final leaderboard result. *(about 10 words to add)*
  The reader cannot judge the significance of the leakage fix or whether it translated into better competition performance.
- State the concrete benefit of reducing 900 candidate features to 300, such as faster training, lower inference cost, or improved generalization. *(about 7 words to add)*
  Preserving validation score shows no loss, but it does not explain why the reduction mattered.
- Name the modeling decision or feature-engineering contribution that made the gradient-boosting result possible rather than only naming the ensemble and feature count. *(about 8 words to add)*
  The ranking is independently credible, but the reader cannot see what technical judgment or individual contribution drove it.
- Replace the relative-clause wording with a compact result phrase such as “reducing the local-validation-to-leaderboard gap by 0.02.” *(saves about 4 words)*
  The shorter construction preserves the leakage result while making the bullet easier to scan.
- Shorten “Wrote the team’s feature-selection script” to “Wrote a feature-selection script.” *(saves 2 words)*
  The project heading already establishes the team context, so the shorter wording preserves individual ownership without repetition.

## Across the whole résumé

- Move Sunrise Bakery to an Additional Experience section below Northpeak Capital, Ridgeway research, the Volatility Forecasting Study, and the Kaggle project. *(no words)*
  Its current first position makes the résumé appear to move from quantitative research into retail management instead of presenting the quantitative research path as the main narrative.

## Set aside (18)

Worth knowing, and not worth the space on this page:

- s2:e1:b0: The method is only named as a "short-horizon order-book imbalance signal," so the line gives little evidence of the research judgment behind its construction.
- s2:e1:b1: The phrase "cost-aware position smoother" names the intervention without showing what constraint or mechanism made it cost-aware.
- s2:e1:b5: The phrase "for future interns" describes the intended audience but not whether anyone used the documentation or what work it enabled.
- s2:e0:b0: "keeping the store within its weekly labour budget" is somewhat wordy and could be compressed to "maintaining weekly labour-budget compliance."
- s2:e0:b1: "Ran daily stock counts and supplier orders" uses "Ran" imprecisely because stock counts are conducted but supplier orders are placed or managed.
- s3:e0:b1: "from 0.20 to 0.15, a 33% improvement" states the result twice; retain either the before-and-after values or the percentage.
- s2:e2:b3: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" bundles three separate responsibilities into one overloaded clause.
- s2:e2:b3: "which was downloaded 3,000 times in its first year" is grammatically ambiguous because "which" follows several intervening responsibilities; attach the metric directly to the R package.
- s2:e1:b2: "with standard Diebold-Mariano tests" uses a generic modifier that does not add useful information.
- s2:e1:b3: "Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built" creates a cumbersome modifier chain and delays the main verb.
- …and 8 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-e8f924df.md.

