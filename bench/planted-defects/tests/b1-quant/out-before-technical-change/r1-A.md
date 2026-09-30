> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the resume with:

- Content review: all 5 entries containing bullets
- Wording review: all 5 of those entries
- Narrative review: the full resume
- Format/ATS review
- JD match: not run because no job posting was provided

The file is one page, parses cleanly, and has no layout or ATS blockers. The detailed report is available with `/report --full`.

## Changes to prioritize

### 1. Correct the Northpeak validation claims

This is the most important issue.

- The bullet describing a “Sharpe-ratio test for heteroskedasticity” does not establish that look-ahead leakage was absent. Replace that diagnostic with the actual leakage-control procedure used, such as a chronological holdout and event-time checks, and state the resulting validation outcome.
- The bullet saying parameters were tuned on the full six-year sample and then evaluated with a walk-forward test over that same period does not support calling the result out-of-sample. Use a genuinely untouched forward period, or remove the out-of-sample claim.
- The validation bullets overlap. Consolidate them around one clear sequence: data split, leakage controls, and result.

### 2. Clarify what several figures mean

The reviewers identified figures that need a clearer baseline or metric:

- “Keeping 90% of gross returns”: specify what the 90% is relative to.
- The volatility project’s “0.20 to 0.15” result: name the error metric and baseline model.
- “Improved directional hit rate by 6%”: distinguish a relative increase from a six-percentage-point increase.
- “Tightens the previous bound by a log factor”: explain the mathematical nature of the improvement and the assumptions under which it holds.
- “Closed a 0.02 gap”: identify the score and whether the gap is absolute or relative.

### 3. Make outcomes more explicit

Several bullets describe useful work but stop before explaining its effect:

- For the feature store, state what the two later projects gained from it.
- For the wiki, indicate adoption or the practical effect on onboarding or reproducibility if you have evidence.
- For the R package, make the download figure attach unambiguously to the package and identify what capability the package provided.
- For the bakery role, quantify the labor-budget result if you have the figure.

### 4. Separate unrelated responsibilities

The research-assistant entry combines:

- The R-package release
- Cluster maintenance
- Reading-group organization
- Grading

The reviewers recommend separating the software accomplishment from the administrative or teaching responsibilities, or removing lower-value duties to keep the entry focused.

Similarly, the Northpeak entry should foreground the research result and validation design before infrastructure and documentation details.

### 5. Tighten repeated wording

The wording review flagged repetition in several places:

- In the Kaggle project, “41st of 2,900 teams” and “top 2%” communicate nearly the same result.
- In the volatility project, the improvement percentage and both endpoint values repeat the same change.
- In the Northpeak entry, process details about joining, deduplicating, and versioning data come before the result.
- Remove the first-person wording in “my proof.”
- Attach “downloaded 3,000 times” directly to the package so its antecedent is clear.

### 6. Reconsider the overall ordering

The narrative review recommends moving Sunrise Bakery into an “Additional Experience” section or shortening it so the main Experience section reads as a quantitative-research sequence.

It also flagged skills that are not demonstrated elsewhere in the resume, including SQL, C++, and Kafka. Either connect those skills to a project or experience entry, or reconsider listing them.

### 7. Minor format cleanup

The format is otherwise clean and ATS-readable. One wording issue was detected: the resume uses a personal pronoun in a line beginning with “Derived …; my proof…”. Remove the pronoun and keep the line in resume-phrase form.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 78 · wording 84 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Replace the invalid Sharpe-ratio diagnostic with a concrete leakage-control procedure and its resulting decision.
2. Remove or correct the contaminated walk-forward claim before presenting Northpeak as the lead experience.
3. State the actual Sharpe result and the uncontaminated validation outcome instead of only describing the test design.

## Already working

- s2:e0:b0: Strong outcome-oriented research result.
- s2:e1:b1: Demonstrates original theoretical research rather than routine implementation.
- s3:e0:b0: Uses a recognized HAR-RV benchmark rather than making an unsupported absolute performance claim.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Remove or correct the contaminated walk-forward claim before presenting Northpeak as the lead experience. *(about 10 words to replace)*
- Replace the invalid Sharpe-ratio diagnostic with a concrete leakage-control procedure and its resulting decision. *(about 8 words to replace)*
- State the actual Sharpe result and the uncontaminated validation outcome instead of only describing the test design. *(about 6 words to add)*
- Clarify that the 90% return figure is relative to the original strategy's gross returns or another explicit baseline. *(about 4 words to add)*
- Make the feature-store bullet direct and specify both its point-in-time safeguards and the work it enabled or saved. *(about 8 words to add)*
- Replace the future-interns framing with evidence that the research documentation improved reproduction, onboarding, or later projects. *(about 5 words to add)*
- Use the cleaner phrasing "in an 18-month out-of-sample backtest after costs" for the lead result. *(no words)*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2021 - Aug 2021

- Name the implementation choice that reduced the Monte Carlo runtime and keep the reproducibility result. *(about 5 words to add)*
- Explain what "tightens the previous bound by a log factor" means under the estimator's assumptions. *(about 8 words to add)*
- Replace the first-person proof wording and publication-process detail with a concise statement of the theoretical result. *(saves about 7 words)*
- Add the teaching-rating response count or evaluation basis. *(about 4 words to add)*
- Separate the R-package accomplishment from the unrelated lab duties and identify the package's method or capability and meaningful adoption. *(about 10 words to add)*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Jun 2020 - May 2021

- Quantify the labour-budget result or state what staying within budget enabled. *(about 5 words to add)*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Add the forecast horizon and define whether the 7% QLIKE reduction is an average relative result across the 30 indices or another aggregation. *(about 6 words to add)*
- Identify the error metric and baseline in the 0.20-to-0.15 comparison, and separate the effects of the realized-volatility features and asymmetric loss. *(about 8 words to add)*
- Describe the hit-rate change as a six-percentage-point increase, specify the forecasted direction and horizon, and avoid repeating the model description. *(saves about 3 words)*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- Distinguish your individual contribution from the three-person team's gradient-boosting result and keep only one of the two ranking descriptions. *(saves about 5 words)*
- Name the score, whether the 0.02 change is absolute or relative, and the before-and-after values when describing the validation-leaderboard gap. *(about 6 words to add)*
- Foreground the reduction from 900 to 300 features and attach the preserved validation metric or downstream benefit to it. *(about 5 words to add)*

## Across the whole résumé

- Move Sunrise Bakery to Additional Experience or shorten it substantially so the main sequence preserves the statistics and quantitative-finance arc. *(no words)*
- Remove unsupported skills or add evidence for SQL, C++, Kafka, Bayesian inference, and time-series econometrics, while correcting the spelling of econometrics. *(saves about 5 words if removed)*
- Remove the personal pronoun from the research bullet so the resume consistently uses phrase-style entries. *(saves 1 word)*

## Set aside (7)

Worth knowing, and not worth the space on this page:

- format, s2:e1:b1: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..." (and 1 more like it)
- s2:e1:b0, s2:e1:b1, s2:e1:b3, s2:e0:b1, s2:e0:b3, s2:e0:b5, s2:e2:b0, s3:e0:b0, s3:e0:b1, s3:e0:b2, s3:e1:b0, s3:e1:b1, s3:e1:b2: "Built the lab’s simulation pipeline on the shared cluster" names the setting but not the key implementation choice that enabled the runtime reduction. (and 17 more like it)
- s2:e1:b2, s2:e1:b3, s2:e0:b5: "earning a 4.8/5 teaching rating" lacks the response count or evaluation basis needed to judge how representative the rating is. (and 2 more like it)
- s2:e1:b3, s2:e1: "while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses" lists additional duties without stating what they improved or how much responsibility they involved. (and 5 more like it)
- s2:e1:b1, s2:e0:b0, s2:e0:b1, s2:e0:b2, s2:e0:b3, s2:e0:b4, s2:e0:b5, s3:e0:b1, s3:e0:b2, s3:e1:b0, s3:e1:b1, s3:e1:b2: "is now Section 3 of a paper under review at JASA" adds publication-process detail that is less concise than stating the research result itself. (and 14 more like it)
- whole resume, order, skills: Move Sunrise Bakery out of the main quantitative Experience sequence into an Additional Experience section, or shorten it substantially; its placement between research roles interrupts the statistics and quantitative-finance arc. (and 5 more like it)
- s3:e0: s3:e0:b0 and s3:e0:b1 repeat: Both report forecasting improvement from the same volatility-modeling work; b1 adds a second error metric but largely repeats the performance claim. (and 1 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-4b6bfc81.md.

