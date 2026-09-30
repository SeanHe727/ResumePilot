> Here is my resume: tmp/bench/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
I reviewed the file with the format, narrative, content, and wording specialists.

**Coverage:** 4 entries with bullets were reviewed for content and wording; the 2 education entries had no bullets to review. Format and narrative reviews were completed. No job-description comparison was run because no posting was provided. The expanded report is available with `/report --full`.

## Changes to make

### 1. Correct the timeline
- Fix the impossible date range for **Kaggle Market Prediction Competition**: `Jun 2023 - Mar 2023`.
- Account for the gap between the B.S. ending in May 2020 and the Ph.D. beginning in September 2021, if there was relevant work, research, coursework, or another explanation.

### 2. Northpeak Capital
- Remove or consolidate the two bullets describing validation with six years of tick data and purged walk-forward splits; the specialists found them substantially redundant.
- Add the result of the validation rather than ending with the validation procedure.
- Clarify what the reported **0.4 Sharpe improvement** means by identifying the relevant baseline and resulting book-level measure.
- Explain the specific mechanism behind the “cost-aware position smoother.”
- Remove emphatic scope language such as “single-handedly” and “entire” unless the scope is precisely defensible.
- Keep the strongest sequence: signal development, trading-cost/turnover improvement, validation result, then documentation.

### 3. Statistical Learning Lab
- Make the variance-bound result more interpretable by identifying what quantity was bounded and what changed relative to the prior bound.
- Add the implementation detail that produced the simulation speedup, if useful.
- Treat “reproducible by seed” carefully; a seed alone may not establish full reproducibility across parallel execution.
- Add the number of respondents behind the 4.8/5 teaching rating if available.
- Put the research result before infrastructure and teaching details.

### 4. Volatility Forecasting Study
- Replace or remove the opening bullet containing phrases such as **“cutting-edge quantitative synergies,” “next-generation modeling paradigms,”** and **“alpha-driven innovation.”** It does not identify a concrete action or result.
- For the Diebold–Mariano result, identify:
  - the competing forecasts,
  - the benchmark,
  - the loss measure,
  - what “both crisis periods” means, and
  - whether multiple-comparison correction was applied.
- The bullet about porting the VX-9 stack onto QRT and coordinating with the Atlas and Borealis teams appears disconnected from the stated volatility-forecasting project. Explain its connection, move it to the appropriate project, or remove it.

### 5. Kaggle competition
- Correct the dates first.
- Replace the vague teamwork bullet about working with “various people on multiple aspects” with your specific owned component, deliverable, and result.
- Verify the bullet claiming a **0.4 Sharpe improvement to a futures book**. The narrative review identified it as duplicating the Northpeak claim and potentially belonging to that internship rather than the Kaggle project.
- For the validation result, specify the metric and the local-validation and leaderboard scores, not only the 0.02 gap.
- Explain whether the time-grouped folds were chronological and whether overlapping information was purged or embargoed.

### 6. Skills section
The narrative review found no supporting evidence in the experience or project bullets for:

- SQL
- C++
- time-series econometrics
- Bayesian inference
- gradient boosting
- Kubernetes
- Haskell
- Kafka

Either connect these skills to documented work or remove them.

### 7. Formatting and personal information
- The PDF is one page, parses cleanly, and has no layout or ATS extraction blockers.
- Remove personal information such as age, gender, marital status, photos, and similar nonprofessional details if they are present in the document.
- The page itself does not require a formatting redesign; the major work is correcting chronology, attribution, technical specificity, and project coherence.

> /report
# Review: resume.pdf

**75/100** — format 100 · content 60 · wording 75 · narrative 54

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Delete or merge the duplicate validation bullet; it repeats the six-year tick-data, purged walk-forward, and embargo claim.
2. Replace the inflated opening with the specific research or modeling work it represents.
3. Correct the Kaggle dates and then move the project to its true chronological position.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- Make the 0.4-Sharpe claim interpretable by reporting the book's baseline and resulting annualized net Sharpe and stating whether the increment is net of costs. *(about 8 words to add)*
- Add the central out-of-sample performance result or benchmark comparison to the validation claim. *(about 8 words to add)*
- Delete or merge the duplicate validation bullet; it repeats the six-year tick-data, purged walk-forward, and embargo claim. *(saves about 24 words if deleted)*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Oct 2021 - Aug 2022

- Identify the bounded quantity and old-versus-new rate behind the claimed log-factor improvement. *(about 8 words to add)*
- Reorder the entry so the theoretical research result leads and teaching closes the entry, with infrastructure and software between them. *(no words)*
- Replace download count alone with adoption impact such as projects, users, or analyses that used the package. *(about 7 words to replace)*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

- Resolve the mismatch between the "Independent Research" label and the VX-9/Helix/Atlas/Borealis bullet by confirming that the work belongs or removing or relabeling it. *(saves about 17 words if removed)*
- Quantify the forecast error improvement relative to the benchmark behind the "forecast gain." *(about 5 words to add)*
- Replace the inflated opening with the specific research or modeling work it represents. *(about 12 words to replace)*

## Kaggle Market Prediction Competition | Team of 3 | Python | Jun 2023 - Mar 2023

- Add the validation metric and before-and-after scores to the 0.02 gap claim. *(about 6 words to add)*
- Name the component or deliverable you owned instead of saying you worked with various people. *(about 4 words to replace)*
- Replace the team's vague progress claim with what shipped or changed, ideally the final leaderboard rank or score improvement. *(about 6 words to replace)*

## Across the whole résumé

- Correct the Kaggle dates and then move the project to its true chronological position. *(no words)*
- Make both 0.4-Sharpe claims independently judgeable by reporting each book's baseline and resulting Sharpe and stating whether the increment is net of costs. *(about 8 words to add)*
- Account for the unlisted period from May 2020 to September 2021 with the relevant study, work, or other activity. *(about 6 words to add)*
- Remove unsupported skills—SQL, C++, time-series econometrics, Bayesian inference, gradient boosting, Kubernetes, Haskell, and Kafka—or add résumé evidence for each. *(saves about 11 words if removed)*
- Remove age, marital status, hobbies, gender, and photos from the file. *(saves about 10 words)*

## Set aside (11)

Worth knowing, and not worth the space on this page:

- s2:e0:b0, s2:e0:b1, s2:e1:b0, s2:e1:b1, s3:e1:b1, s3:e1:b2, s3:e0:b1: The phrase "short-horizon order-book imbalance signal" names the signal family but not the key decision rule or prediction horizon that made it work. (and 9 more like it)
- s2:e0:b2, s2:e0:b3: The statement "so no look-ahead information leaked into training" overclaims what the split design establishes; it supports leakage reduction but does not prove the entire research pipeline was leakage-free. (and 1 more like it)
- s2:e0:b4, s2:e0:b5: "used by every desk across equities, rates and commodities" states reach but not the concrete benefit or adoption evidence that made the infrastructure valuable. (and 1 more like it)
- s2:e0:b4: The claim "Single-handedly built the firm’s entire trading infrastructure" is an unbounded ownership claim that needs to be narrowed to the actual subsystem or components owned.
- s2:e1:b2: “earning a 4.8/5 teaching rating” omits the number of respondents, so the rating's evidentiary weight is unclear.
- s3:e0:b0: "unlock alpha-driven innovation" is not a checkable outcome; state what changed in forecast performance or what research result was produced. (and 1 more like it)
- s3:e0:b2: "coordinating with the Atlas and Borealis teams" identifies collaborators but not the component or decision that belonged to the candidate. (and 2 more like it)
- s2:e0:b2, s2:e0:b3: The phrase "so no look-ahead information leaked into training" is explanatory process narration that can be removed or compressed. (and 2 more like it)
- s2:e0:b4, s2:e0:b5, s2:e1:b0, s2:e1:b1, s3:e0:b1, s3:e0:b2, s3:e1:b0, s3:e1:b1, s3:e1:b2: The phrases "Single-handedly" and "entire" are redundant emphasis that adds words without identifying the specific infrastructure work. (and 9 more like it)
- s2:e0: The signal-to-optimization-to-validation sequence is strong, but the duplicate validation line and the claim of single-handedly building the firm's entire infrastructure disrupt a focused internship narrative.
- …and 1 more, in `/report --full`.


