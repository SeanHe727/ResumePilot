> Here is my resume: bench/planted-defects/tests-v3/clean-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed:

- All 4 entries with bullets for content and wording
- Whole-resume narrative
- Formatting and ATS extraction
- Education entries were not eligible for bullet review
- No job-description match was run because no posting was provided

Main changes to make:

1. **Move EXPERIENCE above EDUCATION.** This puts the Northpeak Capital internship and Statistical Learning Lab research before the academic background.
2. **Clarify causal claims.** The Northpeak bullet claiming the signal raised Sharpe from 1.1 to 1.5 may attribute the entire improvement to that signal. Similarly, clarify what the validation process demonstrated rather than implying that purged splits alone prove all decisions used only contemporaneous information.
3. **Make results more prominent and precise.** Several bullets bury outcomes such as portfolio-manager approval, reuse in later projects, and onboarding impact. Other phrases need clearer metrics, including “tightens the previous bound by a log factor,” “closed a 0.02 gap,” and “without losing validation score.”
4. **Tighten bullet ordering and wording.** Lead the Northpeak entry with the primary performance result, put implementation/adoption outcomes before secondary documentation work, and remove redundant ranking information in the Kaggle entry.
5. **Review the lower-impact project bullet.** The volatility-project bullet about writing a paper and presenting it describes artifacts and venue but does not state an outcome; replace or supplement it with the effect of that communication if you have one.

The file is one page, parses cleanly, has no layout warnings, and uses quantified results in most bullets. The full specialist report is available in `/report --full`.

> /report
# Review: resume.pdf

**91/100** — format 100 · content 87 · wording 87 · narrative 86

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

1 error, 11 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Ridgeway University | Ph.D. candidate in Statistics

**Problem**
[Important] Experience appears after Education, so the resume does not establish the candidate’s research and market direction before the academic background. *(no words)*

**Why**
The Northpeak Capital internship and Statistical Learning Lab role are the most relevant evidence of applied quantitative work. Leading with degrees makes the document read more like an academic profile before the reader reaches that evidence.

**How to change it**
Move the EXPERIENCE section above EDUCATION, while keeping Northpeak Capital first within EXPERIENCE and the Statistical Learning Lab role immediately after it.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Important] The line attributes the entire increase in the desk book’s Sharpe ratio from 1.1 to 1.5 to the signal without showing that the signal caused the full improvement. *(no words for the reorder; adds about 2 words if “was associated with” replaces “raised”)*

**Why**
An out-of-sample comparison showing Sharpe increasing from 1.1 to 1.5 does not by itself establish that the signal caused the full 0.4 increase. Other implementation changes, interactions, or sampling variation could account for part of the difference, which can make the causal claim look overstated to a quant reader.

**How to change it**
Lead with the Sharpe result, but replace “raised” with “was associated with” unless a controlled incremental or ablation comparison supports the causal wording.

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Important] The method behind the “cost-aware position smoother” is too compressed for a quant reader to assess. *(adds about 1–4 words for [the specific smoothing method])*

**Why**
The phrase shows the objective but not the technical approach that produced the turnover and slippage improvements. Without a recognizable method name, the reader cannot readily judge the candidate’s modeling or optimization skill from this result.

**How to change it**
Replace or qualify “position smoother” with [the specific smoothing method used], while retaining the measured turnover, gross-return, and slippage results.

> Validated the signal on 6 years of tick data with purged walk-forward splits and an embargo period, so every backtest decision used only information available at the time.

**Problem**
[Error] Purged walk-forward splits and an embargo period cannot support the claim that every backtest decision used only information available at the time. *(adds about 4–10 words for the leakage result and [validation result]; saves about 11 words if the unsupported clause is cut)*

**Why**
Purging and embargoing reduce leakage between training and evaluation windows, particularly from overlapping labels and nearby observations. They do not establish that every feature, data version, parameter choice, or execution assumption was historically available, so the current wording makes the validation claim broader than the method supports.

**How to change it**
Replace that clause with a statement that the procedure reduced leakage from overlapping labels and adjacent observations, and add [the measured validation result and its comparison] after the method. Retain the stronger point-in-time claim only if the entire data, feature, decision, and execution pipeline was independently verified as point-in-time; otherwise remove it.

> Wrote a feature store for 120 microstructure features with point-in-time joins, which the research team reused in two later signal projects.

**Problem**
[Important] The feature store’s stated outcome is limited to reuse in two later signal projects, without showing what that reuse improved. *(no words for the reorder; adds about 3–8 words for [the downstream benefit] if available)*

**Why**
Reuse proves adoption, but the reader cannot tell what benefit the feature store delivered to those projects. A downstream effect would make the contribution more valuable and concrete rather than leaving adoption as the endpoint.

**How to change it**
Move the reuse outcome to the front, and add [the most direct benefit of the reuse, such as research time saved or a process improvement] after “two later signal projects,” if available.

> Presented the signal, its capacity estimate and failure cases to the portfolio managers, who approved a small live allocation for the next quarter.

**Problem**
[Important] The line does not state the capacity estimate or the scale of the “small live allocation.” *(no words for the reorder; adds about 2–8 words for [allocation size] and [capacity estimate] if available)*

**Why**
Portfolio-manager approval is useful evidence, but the reader cannot judge the practical size of the opportunity or what threshold the capacity analysis met. “Small” gives context without measuring the contribution, so the approval is less informative than it could be.

**How to change it**
Lead with the approval outcome, replace “small” with [the allocation size or risk limit], and add [the capacity estimate or decision threshold] if it was the strongest evidence behind approval.

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Important] The onboarding outcome is delayed until the final clause instead of leading the bullet. *(no words)*

**Why**
The research wiki and its contents are useful, but the reader reaches the practical result only after the implementation detail. Delaying the outcome weakens the first impression of a contribution that otherwise demonstrates durable team value.

**How to change it**
Move the onboarding result to the front, then retain the backtest assumptions, transaction-cost model, known failure regimes, and research-wiki detail after it.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Important] The claim that every run was reproducible from its seed and configuration file overstates what those two artifacts alone can guarantee. *(adds about 4–8 words for the recorded reproducibility controls, if accurate)*

**Why**
Reproducibility can also depend on the input data, code and package versions, numerical settings, and nondeterminism from parallel execution on the shared cluster. A seed and configuration file are sufficient only if those other factors were controlled or recorded, so the absolute claim invites a technical challenge.

**How to change it**
Qualify the claim by saying the runs were reproducible from their seed and configuration file under [recorded data, software versions, and execution environment], or remove the absolute reproducibility claim.

> Derived a variance bound for a sparse regression estimator that tightens the previous bound by a log factor; it is now Section 3 of a paper under review at JASA.

**Problem**
[Important] The claimed logarithmic-factor improvement to the previous variance bound is not established with enough detail to verify the comparison. *(adds about 3–10 words for the specific comparison, if available)*

**Why**
A logarithmic-factor improvement is meaningful only when the new and previous bounds concern the same target under comparable assumptions, estimator, parameter regime, sample-size dependence, and probability guarantee. The reader also cannot gauge the size of the improvement or identify the prior result from “a log factor,” while “it” leaves the subject unclear.

**How to change it**
Replace “it” with the specific subject, and replace “tightens the previous bound by a log factor” with [the exact improvement factor or concise comparison with the previous bound] under [matching assumptions and guarantee].

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Wrote up the method, robustness checks and results as a 12-page working paper, which was presented at the department’s financial econometrics seminar.

**Problem**
[Important] The line describes writing and presenting a working paper but does not state what the communication achieved. *(saves about 5–10 words by cutting the contents list and page count; adds about 2–6 words for [the communication outcome] if available)*

**Why**
A reader can see dissemination, but not why it demonstrates influence, recognition, or value beyond producing a document. The page count and department seminar measure the artifact and venue rather than the result of the communication, while “Wrote up,” “which was presented,” and the list of paper contents delay and undersell the contribution.

**How to change it**
Replace “Wrote up” with a direct reference to the working paper and remove the list of paper contents and “12-page” unless length matters. State [an invited or selected presentation, audience size, faculty feedback, adoption, or follow-up collaboration] if accurate, and make the presentation active rather than passive.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Polish] The line gives both “41st of 2,900 teams” and “top 2%,” which communicate nearly the same ranking information. *(saves about 4–6 words)*

**Why**
The duplicate ranking context uses valuable space without adding a second accomplishment. Removing one figure would make room for a more distinctive detail or simply make the result more efficient.

**How to change it**
Keep either “41st of 2,900 teams” or “top 2%,” not both.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The line gives a 0.02 gap between local validation and leaderboard scores without identifying the score metric or making clear how the gap changed. *(adds about 2–8 words for [the score metric] and the comparison detail)*

**Why**
A reader can see that the discrepancy improved, but cannot tell what the 0.02 represents or whether it was reduced by 0.02 or eliminated. Naming the metric and comparison would make the leakage-control result technically interpretable and easier to judge.

**How to change it**
Keep the 0.02 figure, but replace or supplement “gap between local validation and leaderboard scores” with [the score metric] and, if accurate, [whether the local score moved closer to the leaderboard score].

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Important] The phrase “without losing validation score” does not identify which validation metric was preserved or whether it remained identical or merely comparable. *(adds about 1–4 words for [the validation metric])*

**Why**
The direction of the result is understandable, but a named metric is needed for a technical reader to interpret what preservation means. The current wording makes the feature-reduction benefit less concrete than the 900-to-300 figure.

**How to change it**
Replace “validation score” with [the validation metric], and use wording that accurately indicates whether it stayed identical or remained comparable.

## Already working

- s3:e0:b0: Leads with a quantified comparative result rather than a task description.

## Set aside (1)

1 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-7c916c10.md.

