# Full review: resume.pdf

**82/100** — format 100 · content 72 · wording 79 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 8 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Metro City, USA

**Problem**
[Error] Date of birth and nationality are not listed, consistent with the convention to leave out personal details a reader is not meant to weigh. *(no words)*

**Why**
The finding identifies these details as information to leave off, and neither appears in the résumé text provided. No change is needed; adding them would introduce personal information that is not relevant to evaluating the listed experience.

**How to change it**
Keep the date of birth and nationality off the résumé.

*raised by file*

> from 1.1 to 1.5; Added 0.4

**Problem**
[Error] The Northpeak and Kaggle bullets appear to describe the same signal result with different dates and framing. *(no words)*

**Why**
Both mention an order-book imbalance signal, an 18-month out-of-sample period, and a Sharpe improvement, but the reported figures and entry dates differ. A reader may doubt whether these are separate achievements or inconsistent accounts of one result.

**How to change it**
Clarify whether these are separate results; if they are the same, use one consistent account and place it under the correct entry. If they are separate, make the distinction clear using [the correct dates and comparison for each result].

*raised by narrative*

> Ridgeway University | Ph.D. candidate in Statistics

**Problem**
[Important] Education appears before the recent quantitative research internship. *(no words)*

**Why**
A reader encounters the degrees before the most recent relevant experience. Moving experience first would bring the internship into view sooner.

**How to change it**
Move the Experience section above Education.

*raised by narrative*

> May 2020

**Problem**
[Polish] The listed dates leave about eight months with no study or work shown. *(about 5 words to add)*

**Why**
A reader may ask what happened between the May 2020 degree completion and the February 2021 research-assistant role. The dates alone do not explain the interval.

**How to change it**
If there was relevant study or work during that interval, add [the activity and dates]; otherwise, leave the dates as they are.

*raised by narrative*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Improved risk-adjusted returns by 35% with a cost-aware position smoother on the desk’s futures signal.

**Problem**
[Important] The 35% improvement has no stated comparison or risk-adjusted return measure. *(about 5 words to add)*

**Why**
A reader cannot tell whether the percentage is relative to the original signal, a benchmark, or another reference point. Without the measure and comparator, the result is difficult to judge.

**How to change it**
After “35%,” add [risk-adjusted return measure] and [comparison period or baseline] so the percentage has a clear reference.

*raised by content*

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
1. [Error] Purged walk-forward splits and an embargo do not establish that every backtest decision used only information available at the time. *(saves about 7 words)*
2. [Important] The validation process is stated, but its outcome is missing. *(about 8 words to add)*

**Why**
1. These methods help control chronology and leakage across split boundaries, but do not by themselves verify that inputs, feature transformations, parameter choices, or simulated executions were point-in-time. The absolute claim therefore says more than the stated methods establish.
2. A reader can see how the signal was tested, but not whether it passed, changed, or was rejected as a result. The validation finding is the evidence that makes this work matter.

**How to change it**
1. Replace the absolute claim with a statement that the splits and embargo reduced temporal leakage; retain the stronger claim only if point-in-time inputs and the full decision pipeline were also verified.
2. Add [the key validation result, such as the out-of-sample finding or decision it supported] after the description of the test.

*raised by content, wording*

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Polish] The feature-store reuse result is buried in a relative clause. *(no words)*

**Why**
The sentence gives the reader the reuse outcome only after the feature-store description. That makes the team’s subsequent use of the work harder to notice.

**How to change it**
Move the reuse result out of the “which” clause and state it directly after the feature-store action.

*raised by wording*

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
1. [Polish] “Small live allocation” leaves the scale of the approved test vague. *(about 2 words to add)*
2. [Polish] The approval is placed at the end of a long sentence, making the strongest outcome sound secondary. *(no words)*

**Why**
1. The approval is meaningful evidence, but readers cannot gauge the size of the live test from “small.” A measure of the allocation would make the outcome more concrete.
2. A reader scanning the line encounters the presentation details before the portfolio managers’ decision. That delays the clearest evidence that the work was adopted.

**How to change it**
1. If appropriate to disclose, replace “small” with [allocation size or capital deployed].
2. Move the approval to the start of the sentence and follow it with the presentation details.

*raised by content, wording*

> Selected the smoother’s parameters from 400 backtested configurations and reported the best one’s Sharpe as the expected live Sharpe.

**Problem**
[Error] The best Sharpe from 400 configurations is incorrectly presented as the expected live Sharpe. *(about 7 words to add)*

**Why**
Selecting the highest result across many configurations exposes it to selection bias, which can overstate expected live performance. The selected Sharpe alone does not correct for that bias, and the line gives neither its value nor an evaluation period.

**How to change it**
Replace “expected live Sharpe” with “best Sharpe among the tested configurations” and add [the measured Sharpe and its out-of-sample evaluation period], if available. Call it an expected live Sharpe only if an untouched outer or prospective evaluation supports that estimate.

*raised by content, wording*

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
1. [Polish] The strongest result in this entry is not the opening line. *(no words)*
2. [Polish] The qualifiers before the Sharpe improvement make the result harder to scan. *(no words)*

**Why**
1. The later bullet gives a concrete Sharpe increase from 1.1 to 1.5 after costs over an out-of-sample period. Opening with it would put the clearest result before the supporting details.
2. The instrument and evaluation details interrupt the sentence before its main result. A reader has to pass several qualifiers before reaching the increase.

**How to change it**
1. Move this bullet above the other Northpeak bullets.
2. Move “for liquid index futures” and “over 18 months of out-of-sample backtest after costs” after the Sharpe improvement.

*raised by narrative, wording*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Feb 2021 - Aug 2021

> Cut a 2,000-run Monte Carlo study from 3 days to 5 hours by running the runs in parallel with the same random seed on every worker.

**Problem**
1. [Error] Using the same random seed on every worker can repeat pseudorandom sequences instead of producing distinct Monte Carlo runs. *(about 2 words to add)*
2. [Polish] “Running the runs” is repetitive. *(no words)*

**Why**
1. That can leave the study with fewer than 2,000 distinct simulations and undermine its statistical validity. A shared base seed is appropriate only when it is used to generate distinct worker streams.
2. The phrase adds no information beyond saying that the study ran in parallel. It also makes the sentence less direct.

**How to change it**
1. If workers used independent streams derived from a base seed, say so; otherwise, rerun with properly separated streams and report the resulting run count.
2. Replace “by running the runs in parallel” with “by running the study in parallel.”

*raised by content, wording*

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
1. [Polish] The log-factor comparison does not identify the prior bound or the conditions under which it holds. *(about 4 words to add)*
2. [Polish] The variance-bound result is not the opening line of the entry. *(no words)*

**Why**
1. Without that anchor, a reader cannot gauge what the improvement means or how broad it is. The paper’s review status establishes context but does not clarify the comparison.
2. It identifies a theoretical contribution and its connection to a paper under review at JASA. Leading with that work would make the research contribution easier to notice.

**How to change it**
1. Name or cite [the prior bound] and state [the relevant regime or assumptions], keeping only the detail needed to make the comparison interpretable.
2. Move this bullet above the other bullets in the entry.

*raised by content, narrative*

> Taught weekly recitations for 60 students in graduate probability and writes the problem sets, earning a 4.8/5 teaching rating.

**Problem**
1. [Polish] The teaching rating lacks its source and respondent count. *(about 4 words to add)*
2. [Polish] “Writes” shifts to present tense after “Taught.” *(no words)*

**Why**
1. A reader cannot judge how representative the rating is without knowing who provided it or how many responses it represents. That context distinguishes a course-wide result from a small or informal sample.
2. The tense shift makes it unclear whether writing problem sets was part of the same past teaching work or is ongoing. Consistent tense would clarify the timing.

**How to change it**
1. Identify the rating source, such as course evaluations, and add [number of respondents] if available.
2. Replace “writes” with “wrote” if the problem-set work belongs to the past teaching role.

*raised by content, wording*

> variance bound

**Problem**
[Important] The role’s research, computing, software, and teaching contributions read as parallel work rather than a prioritized account. *(no words)*

**Why**
A reader can see credible contributions across several areas, but may not know which work best defines the role. Without a clear priority, the strongest contribution is less prominent.

**How to change it**
Choose the contribution most relevant to the roles you are targeting and move its bullet to the top of the entry.

*raised by narrative*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Pioneered a data-driven, research-first approach to volatility modeling that delivered robust, actionable insights.

**Problem**
1. [Important] “Robust, actionable insights” does not state what the study found or how the result was useful. *(about 7 words to add)*
2. [Polish] The opening description is self-promotional and does not identify a modeling or validation method. *(about 3 words to add)*

**Why**
1. These are broad evaluations rather than findings a reader can understand or assess. The concrete forecast result and the basis for calling it robust would make the contribution clearer.
2. A reader cannot tell what technical work the study involved or what skill it demonstrates. “Pioneered” and “research-first” evaluate the approach without specifying it.

**How to change it**
1. Replace the phrase with [the main forecasting result, measured against the comparison model or benchmark]; if accurate, include the specific decision or use the finding informed.
2. Replace that phrase with [the forecasting model or validation method you used], naming only a technique actually used.

*raised by content, wording*

> Tested significance with Diebold-Mariano tests across the 30 indices; after a Holm correction the forecast gain held at the 5% level on 24 of them and in both crisis periods.

**Problem**
1. [Important] “The forecast gain” does not identify the forecast metric or its comparator. *(about 5 words to add)*
2. [Polish] The result is buried after the test description, and “on them” is an awkward reference to the indices. *(no words)*

**Why**
1. Statistical significance indicates how the result was tested, but without the metric and comparator a reader cannot interpret what improved. The 5% result alone does not make the gain meaningful.
2. A scanning reader reaches the finding only after the test description. The pronoun also makes the reference less direct than naming the 24 indices.

**How to change it**
1. Replace “forecast gain” with [the forecast metric] and [the comparison model or benchmark], using the actual study terms.
2. Lead with the result, then give the Diebold-Mariano test and Holm correction; replace “on 24 of them” with “for 24 indices.”

*raised by content, wording, narrative*

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
1. [Polish] The paper contents do not specify a method or robustness check. *(about 2 words to add)*
2. [Polish] “Wrote up” is informal and undersells producing the paper. *(no words)*
3. [Polish] The passive wording obscures who presented the paper. *(no words)*

**Why**
1. A reader can see that the work was documented, but not what research technique the paper demonstrates. A specific method or check would make the technical contribution clearer.
2. The phrase makes the work sound like an informal summary rather than a research paper. A direct verb would better describe the documented output.
3. Readers cannot tell from “was presented” whether you or someone else presented the work. If you presented it, saying so makes your role clear.

**How to change it**
1. Replace the generic list with [one specific modeling method or robustness check from the paper], if accurate.
2. Replace “Wrote up” with “Produced” or “Authored,” if accurate.
3. If you presented it, replace “which was presented” with an active construction naming you as the presenter.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Engineered features and trained gradient-boosting models for a market prediction competition.

**Problem**
[Important] The general modeling description gives no outcome or evidence of value. *(about 8 words to add)*

**Why**
A reader cannot tell whether the models performed well or what the work accomplished. A result would make the project’s contribution easier to assess.

**How to change it**
Add [the strongest competition result, with its relevant comparison] if available; otherwise state [what the models improved or enabled].

*raised by content*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Polish] The 0.02 validation-to-leaderboard gap does not identify its score metric or whether it is an absolute difference. *(about 5 words to add)*

**Why**
Without that context, readers cannot interpret the size of the gap or compare it with other results. The validation improvement is also the main result, but it appears at the end of a subordinate clause.

**How to change it**
Specify [the score metric and whether 0.02 is an absolute difference] alongside the gap, and move the result before “which closed.”

*raised by content, wording*

> Added 0.4 to the Sharpe ratio of a futures book with an order-book imbalance signal, tested over 18 months out of sample.

**Problem**
1. [Important] The Sharpe increase has no stated comparison, and the phrase “Added 0.4 to the Sharpe ratio” is awkward. *(about 3 words to add)*
2. [Polish] The concrete results should lead ahead of the general modeling description. *(no words)*

**Why**
1. A reader needs to know what the futures book was compared against to understand what the 0.4 represents. The wording also makes the measured increase less direct.
2. The entry contains both a validation improvement and an out-of-sample Sharpe result, which are more informative than the general modeling description. The Sharpe result is not currently the opening bullet.

**How to change it**
1. Replace “Added 0.4 to the Sharpe ratio” with a direct description of the measured increase, and name [the comparison book or baseline used].
2. Move the concrete result bullets ahead of the general modeling-description bullet, with this result first if it is the strongest competition outcome.

*raised by content, wording, narrative*

## Already working

- s2:e1:b3: Communicates what the software does and names its technical approaches.
