> Here is my resume: tmp/bench/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
I reviewed the file with the format, narrative, content, and wording specialists.

**Coverage:** all 4 entries with bullets received both content and wording reviews; the narrative review covered all 6 entries; the format review covered the full file. No job-description match was run because no posting was provided.

## Changes to make

### 1. Remove non-resume personal information
The format review identified this content:

> “Age: 25 | Marital status: Single | Hobbies: watching TV, video games”

Remove age, marital status, and hobbies from the resume.

### 2. Northpeak Capital — Quantitative Research Intern
- **Remove or consolidate `s2:e0:b3`**, which repeats the validation method already described in `s2:e0:b2`.
- Clarify whether “added 0.4 Sharpe” means incremental Sharpe for the combined book or the standalone signal.
- Define the comparison behind:
  - daily turnover falling from 34% to 21%;
  - retaining 90% of gross returns;
  - reducing estimated slippage by one-third.
- Add the validation result to `s2:e0:b2`; the current line describes the testing procedure but not what the testing showed.
- Scope or substantiate `s2:e0:b4`. The claims about “single-handedly” building the firm’s “entire trading infrastructure” and its use by every desk are broader than the surrounding entry supports.
- Keep the documentation bullet, but the narrative specialist recommends placing it after the research and validation work.

### 3. Statistical Learning Lab — Graduate Research Assistant
- Clarify what “reproducible by seed” means for parallel execution in `s2:e1:b0`; a single seed may not establish deterministic parallel reruns.
- Make the theoretical contribution in `s2:e1:b1` more specific by stating the old and new bound, assumptions, or exact order-term improvement.
- Do not rely on “Section 3 of a paper under review at JASA” as the main evidence of impact. Keep the publication status accurate, but foreground the mathematical result.
- Keep teaching after the research contributions.
- The package bullet is structurally clear; the main issue is that its technical descriptors are densely stacked.

### 4. Volatility Forecasting Study
- Remove or replace `s3:e0:b0`. Phrases such as “cutting-edge quantitative synergies,” “next-generation modeling paradigms,” and “alpha-driven innovation” do not identify a model, dataset, action, or result.
- In `s3:e0:b1`, specify:
  - the forecast-error baseline;
  - the loss metric;
  - the magnitude of the gain;
  - whether the 5% threshold was adjusted for testing 30 indices.
- Explain or remove the unexplained labels in `s3:e0:b2`: “VX-9,” “QRT,” “Helix,” “Atlas,” and “Borealis.”
- State what you personally delivered and what resulted from the porting work. The narrative reader flagged this line as possibly pasted from another project because it is not clearly connected to the volatility study.

### 5. Kaggle Market Prediction Competition
- Correct the reversed date range: **Jun 2023 – Mar 2023**.
- Replace `s3:e1:b0` with the specific work you owned. “Worked with various people on multiple aspects” does not identify your contribution.
- Clarify the score metric and whether the 0.02 validation-to-leaderboard difference is an absolute gap in `s3:e1:b1`.
- Explain how the time-grouped folds enforced forward-looking validation and handled overlapping observations, if applicable.
- `s3:e1:b2` substantially repeats the Northpeak trading-signal claim. Remove it from this project or replace it with competition-specific work and results.

### 6. Resume narrative and chronology
- The narrative is coherent from mathematics and statistics training to statistical learning, market prediction, and quantitative research.
- There is an unexplained period between **Aug 2022 and Jun 2025** while the Ph.D. continues. Add context if there was relevant research, employment, or another activity during that period.
- Once corrected, the project dates should be placed in reverse chronological order.
- Check the Skills section against the experience bullets. It claims infrastructure experience that the body of the resume does not currently demonstrate clearly.

### 7. Formatting
The file is one page, extracts cleanly, has no layout warnings, and is ATS-readable. The format review did not identify a structural or parsing problem; the required changes are primarily content, chronology, and scope.

> /report
# Review: resume.pdf

**75/100** — format 100 · content 59 · wording 74 · narrative 58

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Correct the Kaggle project's reversed date range before treating its chronology as reliable.
2. Keep age, gender, and photos out of the résumé file.
3. Remove the duplicate validation bullet because b2 and b3 repeat the same six-year purged walk-forward and embargo method.

## Already working

- s2:e1:b0: Combines a concrete technical contribution with a large, easy-to-interpret runtime improvement.
- s2:e0:b0: Shows ownership of a specific quantitative research contribution.
- s3:e1:b1: Clearly connects a specific validation change to a measurable reduction in evaluation mismatch.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Remove the duplicate validation bullet because b2 and b3 repeat the same six-year purged walk-forward and embargo method. *(saves about 24 words)*
- Specify whether the 0.4 Sharpe is incremental combined-book Sharpe from a net-of-costs comparison of the book with and without the signal, rather than standalone signal Sharpe. *(about 8 words to add)*
- Replace the overbroad ownership claim with a bounded subsystem and the infrastructure contribution you personally owned. *(about 8 words to add)*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Oct 2021 - Aug 2022

- State the old and new order terms under the same assumptions instead of saying only that the bound improved by a log factor. *(about 8 words to add)*
- Specify the deterministic per-replicate random-stream method for parallel execution, or soften the claim to "ensuring seed-level reproducibility." *(about 5 words to add)*
- Name the distinctive covariance estimator or capability you personally implemented instead of listing only shrinkage and factor models. *(about 4 words to add)*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Replace the inflated filler with the actual modeling method and technical work performed. *(no words)*
- Replace the unsupported innovation and forecast-gain claims with the magnitude of forecast-error reduction versus a named baseline and loss measure. *(about 8 words to add)*
- Name the specific migration ownership and add a result such as migration time, reliability, latency, or deployment improvement. *(about 6 words to add)*

## Kaggle Market Prediction Competition | Team of 3 | Python | Jun 2023 - Mar 2023

- Correct the reversed dates, retain b1, and replace b0 and b2 with competition-specific contributions. *(about 40 words to replace)*
- If the competition entry keeps the repeated signal claim, specify whether its 0.4 Sharpe is a net-of-cost, controlled comparison of the book with and without the signal. *(about 8 words to add)*
- Define the leaderboard scoring metric and state whether the 0.02 difference is an absolute score gap. *(about 4 words to add)*

## Across the whole résumé

- Correct the Kaggle project's reversed date range before treating its chronology as reliable. *(no words)*
- Explain the Aug 2022–Jun 2025 gap in listed experience while the Ph.D. continues. *(about 6 words to add)*
- Keep age, gender, and photos out of the résumé file. *(saves about 12 words)*

## Set aside (24)

Worth knowing, and not worth the space on this page:

- s2:e1:b1: “it is now Section 3 of a paper under review at JASA” is publication context rather than evidence of what the tighter bound changes or enables. (and 1 more like it)
- s2:e1:b2: “earning a 4.8/5 teaching rating” lacks the number of respondents or response rate, so the reader cannot judge how representative the score is.
- s3:e0:b1: "on 24 of them" does not say whether the 5% threshold was adjusted for the 30 simultaneous comparisons.
- s3:e0:b2: "VX-9 stack," "QRT," and "Helix program" are unexplained labels, so the reader cannot tell which transferable systems or migration skills they represent.
- s3:e1:b0: "Worked with various people" does not establish the candidate's role or ownership within the three-person team. (and 3 more like it)
- s3:e1:b1: "switching to time-grouped folds" does not establish the strict forward-time or purge/embargo protocol that makes the leakage claim defensible.
- s3:e1:b2: "over 18 months of out-of-sample backtest" does not indicate whether the test was genuinely walk-forward or accounted for slippage, fees, and market impact.
- s2:e0:b1: "Daily turnover" does not define the turnover convention or capital normalization.
- s2:e0:b1: "keeping 90% of gross returns" does not say relative to which implementation or whether net performance improved after the slippage reduction.
- s2:e0:b2, s2:e0:b3: "so no look-ahead information leaked into training" is stronger than the named controls prove without the label, purge and embargo horizons. (and 1 more like it)
- …and 14 more, in `/report --full`.


