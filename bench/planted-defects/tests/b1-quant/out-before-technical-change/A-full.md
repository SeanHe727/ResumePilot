# Full review: resume.pdf

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

### Clarify whether “0.4 Sharpe” is an incremental portfolio Sharpe lift, a standalone signal Sharpe, or an attributed contribution to the desk’s book.

> added 0.4 Sharpe to the desk’s book

The performance number is not interpretable until the reader knows exactly what portfolio or signal the Sharpe belongs to.

*raised by content · costs about 7 words to add*

### State the baseline slippage level and evaluation basis for the claimed one-third reduction.

> lowering estimated slippage by a third

A relative reduction is difficult to judge without the original level and whether the estimate came from the same backtest, live data, or another comparison.

*raised by content · costs about 8 words to add*

### Replace the heteroskedasticity test as evidence against look-ahead leakage with the actual point-in-time controls, timestamp ordering, and chronological holdout used.

> test for heteroskedasticity

Heteroskedasticity and information leakage are separate issues, so the current method makes an invalid inference about backtest validity.

*raised by content · costs about 15 words to add*

### Describe explicit chronological train, validation, and untouched test boundaries, with parameter choices restricted to information available before each test window.

> walk- forward test over the same period as out-of-sample

Those boundaries are necessary to establish that the reported performance was genuinely out of sample rather than selected using future information.

*raised by content · costs about 14 words to add*

### Remove the claim that the same six-year period was out of sample after tuning parameters on the full sample, or replace it with results from a genuinely untouched chronological test.

> Tuned the signal’s parameters on the full 6-year sample

The current sequence describes contaminated validation and should not label its Sharpe result out of sample.

*raised by content · costs about 4 words to remove, or about 12 words to add for a corrected test description*

### Rewrite the feature-store bullet with a direct action and move the cleaning details after the main result.

> Joining 120 microstructure features

The current participial opener is awkward, and deduplication and schema versioning delay the main achievement.

*raised by wording · costs saves about 4 words*

### Shorten the walk-forward wording and correct the awkward hyphenation after fixing the validation claim.

> walk- forward test over the same period

The current phrase is difficult to scan and appears internally inconsistent with tuning on the same period.

*raised by wording · costs saves about 6 words*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2021 - Aug 2021

### Keep the graduate research entry focused on its strongest research contribution, with teaching, software, infrastructure, reading-group, and grading work separated or clearly subordinated.

> Graduate Research Assistant, Statistical Learning Lab

The current entry combines too many unrelated responsibilities, making the research contribution harder to identify at a glance.

*raised by narrative · costs no words if reordered; about 10 words if a subheading is added*

### Name the technical mechanism that made the simulation pipeline reduce the Monte Carlo runtime from three days to five hours.

> Built the lab’s simulation pipeline

The speedup is compelling, but the mechanism tells a technical reader what you actually built or optimized.

*raised by content · costs about 7 words to add*

### Replace “by a log factor” with the old and new logarithmic terms and the parameter inside the logarithm.

> tightens the previous bound by a log factor

The theoretical improvement is not conventionally interpretable without the exact terms being compared.

*raised by content · costs about 10 words to add*

### Add the number of student responses to the 4.8/5 teaching rating.

> 4.8/5 teaching rating

The response count lets the reader judge whether the rating reflects a meaningful sample.

*raised by content · costs about 4 words to add*

### Separate the open-source package achievement from the cluster, reading-group, and grading responsibilities.

> while maintaining the lab’s shared cluster

The package release is a distinct research-software contribution, while the other duties currently bury it in a long list.

*raised by content, wording · costs about 2 words to add*

### Replace the package’s download count with evidence of use or value if available, while retaining the count as a reach signal.

> downloaded 3,000 times in its first year

Downloads show distribution but do not establish whether the package was adopted, useful, or influential.

*raised by content · costs about 7 words to add*

### Move the download result next to the package-release action instead of leaving it as a long trailing clause.

> which was downloaded 3,000 times

The main software achievement will scan more quickly when its result is not delayed by the surrounding responsibilities.

*raised by wording · costs saves about 3 words*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Jun 2020 - May 2021

### Add the budget variance or labour-cost improvement to show the value of keeping the store within its weekly labour budget.

> within its weekly labour budget

Budget compliance demonstrates control, but the variance or savings would show whether that control produced a meaningful result.

*raised by content · costs about 5 words to add*

### Add the measurement period to the reduction in unsold bread from 12% to 7%.

> from 12% to 7% of production

A defined period makes the before-and-after comparison more defensible without requiring much additional text.

*raised by content · costs about 4 words to add*

### Use separate, specific verbs for conducting stock counts and placing supplier orders.

> Ran daily stock counts and supplier orders

“Ran” is broad enough to obscure the two different operational actions behind the result.

*raised by wording · costs no words*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

### Rewrite the QLIKE result as a relative reduction and add the evaluation period and whether the 7% is averaged across the 30 indices.

> out-of-sample QLIKE loss by 7%

The reader needs the denominator, time scope, and aggregation method to interpret the size of the improvement.

*raised by content · costs about 10 words to add*

### Name the metric behind “forecast error,” state whether it is evaluated on the same 30 indices, and correct the percentage implied by 0.20 to 0.15.

> forecast error

The current wording is both nonspecific and mathematically inconsistent: the stated values represent a 25% reduction relative to 0.20, not a 33% improvement.

*raised by content · costs saves about 3 words and adds about 8 words*

### Remove “a 33% improvement” after correcting the result to “from 0.20 to 0.15,” unless a different denominator can be explicitly defined.

> a 33% improvement

The before-and-after values already show the change, so the conflicting percentage adds risk without adding information.

*raised by content · costs saves about 4 words*

### Change “improved ... by 6%” to “raised ... by 6 percentage points,” and state the forecast horizon and whether the rates are averaged across the 30 indices.

> from 52% to 58%

This distinguishes an absolute hit-rate change from a relative increase and defines the scope of the comparison.

*raised by content · costs about 8 words to add*

### Replace the generic verb “Improved” with a direct action that identifies what the model or feature change did to the hit rate.

> Improved the model’s directional hit rate

A more specific verb will make the causal contribution clearer without changing the numerical result.

*raised by wording · costs no words*

### Combine the repeated volatility-model performance claims into one result-focused bullet and use the saved space for metric, horizon, and evaluation-scope details.

> temporal convolutional model

The current bullets repeatedly attribute different improvements on the same 30-index study to the same temporal-convolutional approach.

*raised by narrative · costs saves about 18 words*

### Remove “by 6%” when retaining the explicit 52%-to-58% comparison.

> by 6%

The values already show the change, so the phrase is both redundant and incorrectly expressed as a relative percentage.

*raised by wording · costs saves 2 words*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

### State what you personally owned in the gradient-boosting ensemble work rather than presenting only the team’s placement.

> with a gradient-boosting ensemble

The placement is valuable, but a recruiter needs to know which modeling or engineering contribution was yours.

*raised by content · costs about 7 words to add*

### Keep either “Placed 41st of 2,900 teams” or “top 2% of the private leaderboard,” not both.

> finishing in the top 2%

The rank and team count already establish the top-2% result, so the second phrase repeats the same outcome.

*raised by wording · costs saves about 8 words*

### Name the validation metric and state that the 0.02 difference is absolute, then show whether the fold change affected model selection or final leaderboard performance.

> closed a 0.02 gap

Closing a validation gap matters only when the reader knows what was measured and what downstream decision or competition result changed.

*raised by content · costs about 13 words to add*

### Identify the validation score preserved when reducing 900 features to 300, and add the practical benefit such as training time, memory use, or generalization.

> without losing validation score

The feature reduction is concrete, but its value is unclear without the metric retained or the resource or modeling improvement produced.

*raised by content · costs about 10 words to add*

### Lead directly with permutation importance when describing the feature-selection script.

> using permutation importance

Putting the method next to the action makes the candidate’s contribution faster to scan.

*raised by wording · costs saves about 2 words*

### Compress the validation result into a direct metric-and-outcome phrase after specifying the metric.

> which closed a 0.02 gap between local validation and leaderboard scores

The current trailing clause is wordy and delays the result.

*raised by wording · costs saves about 5 words*

## Across the whole résumé

### Remove SQL, C++, Kafka, and Bayesian inference from the skills section unless you add evidence of using them elsewhere in the résumé.

> SQL

A recruiter will otherwise see a list of unsupported tools and methods rather than a skills section grounded in demonstrated work.

*raised by narrative · costs saves about 4 words, or adds about 12 words if evidence is added*

### Correct “time-series econometircs” to “time-series econometrics,” and either support it with a clearly identified method or remove it.

> time-series econometircs

The misspelling damages credibility, and the current entries do not clearly demonstrate time-series econometrics.

*raised by narrative · costs saves about 2 words, or adds about 8 words if evidence is added*

### Move the target-relevant projects ahead of Sunrise Bakery or place Sunrise Bakery in an Additional Experience subsection.

> Sunrise Bakery

This keeps Northpeak Capital and the quantitative projects together instead of interrupting the research progression with an unrelated retail role.

*raised by narrative · costs no words*

### Add a dated entry covering the unrepresented period from August 2021 through December 2023.

> Jan 2024 - Present

The résumé currently shows a visible timeline gap between the graduate research role and Northpeak Capital, while the volatility study begins only in January 2024.

*raised by narrative · costs about 8 words to add*

### Remove the personal pronoun from the proof bullet so it remains a résumé phrase rather than a first-person sentence.

> my proof

Consistent phrase construction makes the document look more polished and avoids adding ownership that “Derived” already establishes.

*raised by file · costs saves 2 words*

### Replace repeated outcomes and compressed method clauses with shorter, direct result-first wording throughout the affected entries.

> finishing in the top 2% of the private leaderboard

This creates room for the missing evaluation details without weakening the strongest achievements.

*raised by wording · costs saves about 25 words*

## Set aside (5)

- s2:e1:b3, s2:e0:b3, s2:e0:b5: The phrase "which was downloaded 3,000 times in its first year" proves distribution but not whether the package was used or valuable. (and 3 more like it)
- s2:e2:b1, s2:e1:b3, s2:e0:b3, s2:e0:b4, s3:e0:b2: "Ran daily stock counts and supplier orders" uses a broad verb that underspecifies the two different actions. (and 4 more like it)
- s2:e1:b1: "my proof" repeats the ownership already conveyed by "Derived" and adds no new information.
- whole resume, dates: The 2020 bachelor's degree is followed by the bakery role and then the graduate research role, so the education-to-work sequence is visible; no additional gap is shown there.
- s2:e0: s2:e0:b0 and s2:e0:b4 repeat: Both describe the signal's backtest and out-of-sample validation; b4 adds a second validation narrative rather than advancing the main story. (and 1 more like it)
