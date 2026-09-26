> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Format/ATS:** reviewed; parses cleanly as a one-page, 568-word resume with no layout blockers.
- **Content:** reviewed all **5 entries with bullets** and all **18 bullets**.
- **Wording:** reviewed those same 5 entries.
- **Narrative:** reviewed the complete document.
- **Job match:** not reviewed because no job posting was provided.
- **Full report:** available via `/report --full`.

### Highest-priority changes

1. **Correct or remove Northpeak bullet `s2:e0:b4`.**  
   It says parameters were tuned on the full six-year sample and that the same period was reported as out-of-sample. The content review found that this describes contaminated validation, so the result should not be labeled out-of-sample unless the chronology and data boundaries are corrected.

2. **Rework Northpeak bullet `s2:e0:b2`.**  
   The resume connects a Sharpe-ratio test for heteroskedasticity with proving the absence of look-ahead leakage. Those are separate methodological questions. Specify the actual chronological controls, point-in-time handling, and untouched holdout used for leakage testing.

3. **Clarify the performance figures.**
   - `s2:e0:b0`: explain whether “added 0.4 Sharpe” means an incremental portfolio improvement, standalone signal Sharpe, or another measure.
   - `s3:e0:b1`: “33% improvement” conflicts with a change from 0.20 to 0.15, which represents a 25% reduction unless a different denominator is intended.
   - `s3:e0:b2`: a change from 52% to 58% is a **6-percentage-point** change, not necessarily a 6% improvement.
   - For the forecasting bullets, identify the metric, evaluation period, and whether results are averaged across the 30 indices.

4. **Make the career timeline explainable.**  
   The narrative review identified an unexplained period from **August 2021 to June 2025**. The volatility project begins in January 2024, leaving August 2021 through December 2023 unrepresented. Add relevant dated work, study, research, or other activity if applicable.

5. **Reduce interruption from the bakery role.**  
   Keep Northpeak first, but move the relevant projects before Sunrise Bakery or place the bakery role under an additional-experience section. This keeps the quantitative-research progression together.

6. **Remove or support unsupported skills.**  
   The skills section lists SQL, C++, Kafka, Bayesian inference, and time-series econometrics, but the reviewed entries do not demonstrate them. Either connect each skill to documented experience or remove it. Also correct the spelling of “econometrics.”

7. **Cut repetition within projects and Northpeak.**
   - Northpeak has multiple bullets describing backtesting and validation; consolidate the repeated validation material.
   - The volatility project has several bullets reporting model-performance improvements; retain distinct results with clearly different metrics or purposes.
   - The Kaggle project repeats its placement as “41st of 2,900” and “top 2%.”

8. **Separate unrelated responsibilities in the research-assistant entry.**  
   The package release, cluster maintenance, reading group, and grading are currently combined. Prioritize the research and software contributions, and give separate evidence for the other responsibilities if they are important.

9. **Add context where figures depend on interpretation.**
   - Include the baseline or evaluation basis for the slippage reduction.
   - Identify the old and new terms for “tightens the previous bound by a log factor.”
   - Add the number of responses behind the 4.8/5 teaching rating.
   - State what practical result followed from the feature store and software package, not only reuse or download counts.

The resume’s strongest documented material is the quantitative internship, statistical-learning research, forecasting project, and competition result. The most urgent issue is methodological accuracy in the Northpeak validation bullets, followed by clarifying metric definitions and explaining the timeline.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 76 · wording 86 · narrative 66

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Remove SQL, C++, Kafka, and Bayesian inference from the skills section unless you add evidence of using them elsewhere in the résumé.
2. Name the metric behind “forecast error,” state whether it is evaluated on the same 30 indices, and correct the percentage implied by 0.20 to 0.15.
3. Rewrite the QLIKE result as a relative reduction and add the evaluation period and whether the 7% is averaged across the 30 indices.

## Already working

- s2:e0:b0: Provides a concrete performance result.
- s2:e0:b0: Includes an 18-month out-of-sample period and transaction costs.
- s3:e1:b2: The bullet clearly distinguishes the candidate's contribution by saying they wrote the script.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Clarify whether “0.4 Sharpe” is an incremental portfolio Sharpe lift, a standalone signal Sharpe, or an attributed contribution to the desk’s book. *(about 7 words to add)*
- State the baseline slippage level and evaluation basis for the claimed one-third reduction. *(about 8 words to add)*
- Replace the heteroskedasticity test as evidence against look-ahead leakage with the actual point-in-time controls, timestamp ordering, and chronological holdout used. *(about 15 words to add)*
- Describe explicit chronological train, validation, and untouched test boundaries, with parameter choices restricted to information available before each test window. *(about 14 words to add)*
- Remove the claim that the same six-year period was out of sample after tuning parameters on the full sample, or replace it with results from a genuinely untouched chronological test. *(about 4 words to remove, or about 12 words to add for a corrected test description)*
- Rewrite the feature-store bullet with a direct action and move the cleaning details after the main result. *(saves about 4 words)*
- Shorten the walk-forward wording and correct the awkward hyphenation after fixing the validation claim. *(saves about 6 words)*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2021 - Aug 2021

- Keep the graduate research entry focused on its strongest research contribution, with teaching, software, infrastructure, reading-group, and grading work separated or clearly subordinated. *(no words if reordered; about 10 words if a subheading is added)*
- Name the technical mechanism that made the simulation pipeline reduce the Monte Carlo runtime from three days to five hours. *(about 7 words to add)*
- Replace “by a log factor” with the old and new logarithmic terms and the parameter inside the logarithm. *(about 10 words to add)*
- Add the number of student responses to the 4.8/5 teaching rating. *(about 4 words to add)*
- Separate the open-source package achievement from the cluster, reading-group, and grading responsibilities. *(about 2 words to add)*
- Replace the package’s download count with evidence of use or value if available, while retaining the count as a reach signal. *(about 7 words to add)*
- Move the download result next to the package-release action instead of leaving it as a long trailing clause. *(saves about 3 words)*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Jun 2020 - May 2021

- Add the budget variance or labour-cost improvement to show the value of keeping the store within its weekly labour budget. *(about 5 words to add)*
- Add the measurement period to the reduction in unsold bread from 12% to 7%. *(about 4 words to add)*
- Use separate, specific verbs for conducting stock counts and placing supplier orders. *(no words)*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Rewrite the QLIKE result as a relative reduction and add the evaluation period and whether the 7% is averaged across the 30 indices. *(about 10 words to add)*
- Name the metric behind “forecast error,” state whether it is evaluated on the same 30 indices, and correct the percentage implied by 0.20 to 0.15. *(saves about 3 words and adds about 8 words)*
- Remove “a 33% improvement” after correcting the result to “from 0.20 to 0.15,” unless a different denominator can be explicitly defined. *(saves about 4 words)*
- Change “improved ... by 6%” to “raised ... by 6 percentage points,” and state the forecast horizon and whether the rates are averaged across the 30 indices. *(about 8 words to add)*
- Replace the generic verb “Improved” with a direct action that identifies what the model or feature change did to the hit rate. *(no words)*
- Combine the repeated volatility-model performance claims into one result-focused bullet and use the saved space for metric, horizon, and evaluation-scope details. *(saves about 18 words)*
- Remove “by 6%” when retaining the explicit 52%-to-58% comparison. *(saves 2 words)*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- State what you personally owned in the gradient-boosting ensemble work rather than presenting only the team’s placement. *(about 7 words to add)*
- Keep either “Placed 41st of 2,900 teams” or “top 2% of the private leaderboard,” not both. *(saves about 8 words)*
- Name the validation metric and state that the 0.02 difference is absolute, then show whether the fold change affected model selection or final leaderboard performance. *(about 13 words to add)*
- Identify the validation score preserved when reducing 900 features to 300, and add the practical benefit such as training time, memory use, or generalization. *(about 10 words to add)*
- Lead directly with permutation importance when describing the feature-selection script. *(saves about 2 words)*
- Compress the validation result into a direct metric-and-outcome phrase after specifying the metric. *(saves about 5 words)*

## Across the whole résumé

- Remove SQL, C++, Kafka, and Bayesian inference from the skills section unless you add evidence of using them elsewhere in the résumé. *(saves about 4 words, or adds about 12 words if evidence is added)*
- Correct “time-series econometircs” to “time-series econometrics,” and either support it with a clearly identified method or remove it. *(saves about 2 words, or adds about 8 words if evidence is added)*
- Move the target-relevant projects ahead of Sunrise Bakery or place Sunrise Bakery in an Additional Experience subsection. *(no words)*
- Add a dated entry covering the unrepresented period from August 2021 through December 2023. *(about 8 words to add)*
- Remove the personal pronoun from the proof bullet so it remains a résumé phrase rather than a first-person sentence. *(saves 2 words)*
- Replace repeated outcomes and compressed method clauses with shorter, direct result-first wording throughout the affected entries. *(saves about 25 words)*

## Set aside (5)

Worth knowing, and not worth the space on this page:

- s2:e1:b3, s2:e0:b3, s2:e0:b5: The phrase "which was downloaded 3,000 times in its first year" proves distribution but not whether the package was used or valuable. (and 3 more like it)
- s2:e2:b1, s2:e1:b3, s2:e0:b3, s2:e0:b4, s3:e0:b2: "Ran daily stock counts and supplier orders" uses a broad verb that underspecifies the two different actions. (and 4 more like it)
- s2:e1:b1: "my proof" repeats the ownership already conveyed by "Derived" and adds no new information.
- whole resume, dates: The 2020 bachelor's degree is followed by the bakery role and then the graduate research role, so the education-to-work sequence is visible; no additional gap is shown there.
- s2:e0: s2:e0:b0 and s2:e0:b4 repeat: Both describe the signal's backtest and out-of-sample validation; b4 adds a second validation narrative rather than advancing the main story. (and 1 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-fb301b68.md.

