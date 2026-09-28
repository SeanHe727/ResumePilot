# Full review: resume.pdf

**88/100** — format 100 · content 83 · wording 84 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 19 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Sunrise Bakery currently appears before the more relevant Northpeak Capital quantitative internship. *(no words)*

**Why**
The first position gives an unrelated retail role more narrative weight than the quantitative research experience most relevant to the apparent target. A reader may therefore miss the strongest finance and modeling evidence before reaching it.

**How to change it**
Move Northpeak Capital ahead of Sunrise Bakery within EXPERIENCE, or reduce Sunrise Bakery to a single line at the end of the section.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] “Keeping the store within its weekly labour budget” does not show the size of the budget result. *(about 3–5 words to add)*

**Why**
A reader can see the target but cannot judge how close spending was to budget or what changed because of the management. One variance or dollar amount would make the claim more credible and easier to compare.

**How to change it**
Replace that phrase with “keeping weekly labour spend within [variance] of budget,” using the actual variance or amount the candidate can defend.

*raised by content*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
1. [Important] The 12%-to-7% reduction is attributed entirely to stock counts and supplier orders without establishing that causal link. *(about 1 word to add, or no words if the sentence is replaced)*
2. [Important] The 12%-to-7% result is buried after the task list instead of leading the bullet. *(no words)*

**Why**
1. Production quantities, demand, batch sizes, markdowns, donations, product mix, and seasonality can also affect unsold-bread rates. The arithmetic is valid, but the causal claim requires consistent before-and-after records and evidence that these activities changed production or purchasing decisions.
2. The measurable outcome is the strongest evidence in the line, but the reader encounters operational duties first. Leading with the result would make the bakery contribution faster to scan without changing its substance.

**How to change it**
1. If supported by records, state the specific production or demand-planning changes that produced the result; otherwise use “Tracked daily stock and supplier orders; unsold bread fell from 12% to 7% of production.”
2. Move the “unsold bread fell from 12% to 7% of production” result to the start of the bullet, then follow it with the stock-count and supplier-order details.

*raised by content, wording*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold–Mariano testing is not sufficient as the sole confirmation when the competing HAR-RV model is nested. *(about 2 words to add)*
2. [Important] The feature-store bullet does not state the size of the forecast gain or the statistical result supporting it. *(about 5 words to add)*

**Why**
1. Nesting can distort the usual Diebold–Mariano null distribution, so the reported test may not support the claimed confirmation. Testing 30 indices also requires appropriate variance estimation and control for dependence and multiple comparisons; without those details, a technical reader may question the validity of the result.
2. A reader can see that validation occurred across 30 indices, but cannot judge what the tests established. The scope of testing is context rather than evidence of the improvement's magnitude or significance.

**How to change it**
1. Replace the standard Diebold–Mariano procedure with an appropriate nested-model procedure such as a Clark–West test, using suitable variance estimation and multiple-testing control across the 30 indices.
2. Keep the baseline and test names, but replace or follow “forecast gain” with [the measured improvement versus the nested HAR-RV baseline and the relevant statistical result or significance level].

*raised by content*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] The feature-store sentence has a dangling modifier because “Joining 120 microstructure features” does not clearly have the grammatical subject as its actor. *(no words)*
2. [Important] The feature-store bullet does not explain what its reuse enabled or improved in the two later projects. *(about 5 words to add)*
3. [Important] The long sequence of implementation details delays the reusable feature-store result and its later-project impact. *(no words)*

**Why**
1. A reader may not know whether the candidate, the feature store, or another process joined and deduplicated the features. That weakens ownership of the technical work and makes the contribution harder to scan.
2. The phrase “the team reused” demonstrates adoption but not value. A reader cannot tell whether reuse saved research time, improved data reliability, or supported a material result, so the infrastructure contribution is difficult to assess.
3. The reader encounters joining, deduplication, and schema-versioning details before learning that the team reused the feature store. This puts methods ahead of the outcome and makes the contribution less immediately scannable.

**How to change it**
1. Make the candidate or the feature store the grammatical subject of the opening actions; for example, move the feature-store result before the joining, deduplication, and schema-versioning details.
2. Keep “reused in two later projects” and add [the single most important consequence of that reuse], if available.
3. Move the feature-store result and “reused in two later projects” earlier in the bullet, then follow it with the joining, deduplication, and schema-versioning details.

*raised by wording, content*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] The daily Sharpe ratio was annualized incorrectly by multiplying it by 252 instead of √252. *(no words)*
2. [Important] The Sharpe-ratio bullet gives neither the resulting annualized value nor a comparison against a benchmark. *(about 5 words to add)*
3. [Important] The bullet ends with a reporting activity instead of a research result or decision enabled by the work. *(saves about 5 words if the bullet is removed)*

**Why**
1. A daily Sharpe ratio is conventionally annualized by multiplying it by the square root of 252, not by 252. Multiplication by 252 annualizes a mean-return component and materially misstates the risk-adjusted ratio.
2. The reader cannot use the calculation as evidence because the reported result is absent. A calculation without its output consumes space without showing how the signal performed relative to a relevant standard.
3. Reporting a metric does not show what changed because of the calculation. A hiring reader may therefore see this as procedural work rather than evidence of contribution to Northpeak.

**How to change it**
1. Replace “252” with “√252” in the annualization description.
2. Replace the calculation description with [the resulting annualized Sharpe ratio compared with the relevant desk benchmark or baseline], if accurate.
3. Replace the reporting-only ending with [the decision or research conclusion the annualized metric supported], if accurate; otherwise remove the bullet.

*raised by content, wording*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.

**Problem**
[Important] The documentation bullet describes its intended audience rather than a demonstrated result. *(about 4 words to add)*

**Why**
A reader can see that the assumptions, cost model, and failure regimes were documented, but cannot tell whether anyone used the material or what it improved. This makes the work sound like an internal task rather than evidence of effective handoff or reuse.

**How to change it**
Keep the specific documentation subjects and replace or supplement “for future interns” with [the number of later users, projects, or handoffs that used the wiki], if available.

*raised by content, wording*

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours and making runs reproducible by seed.

**Problem**
[Important] A fixed seed alone does not guarantee reproducibility in a shared-cluster pipeline. *(about 4–7 words to add)*

**Why**
Parallel scheduling, random-number stream assignment, software versions, numerical libraries, and nondeterministic reductions can change results even when the same seed is used. Claiming reproducibility by seed therefore overstates what the line establishes unless those additional factors were controlled or documented.

**How to change it**
If those controls were used, say “reproducible with fixed per-replicate random streams and a controlled environment”; otherwise soften the claim to “supporting reproducibility with fixed random seeds.”

*raised by content, wording*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Error] The phrase “my proof” uses a first-person pronoun in a résumé written as phrases rather than first-person sentences. *(no words)*
2. [Important] The proof's claimed tightening is not established by the line alone. *(about 2–4 words to add)*
3. [Polish] The publication-status detail competes with the mathematical result instead of supporting it. *(saves about 4 words)*

**Why**
1. The pronoun breaks the document's grammatical style and draws attention to the writer instead of the mathematical result. Consistent phrasing makes the technical contribution scan more professionally.
2. The reader is told that the bound improves a previous result, but cannot identify which bound or source is being compared. Without that baseline, the claimed log-factor improvement is difficult to interpret or verify.
3. The bound improvement is the technical contribution, while the paper status is secondary context. Putting the status first or at equal length makes the key result harder to find.

**How to change it**
1. Replace “my proof” with “the proof.”
2. Replace “the previous bound” with the named prior result or citation, such as [the prior bound by Author/Year], if accurate; keep “by a log factor” as the comparison.
3. Move the bound result first and shorten the status to “included as Section 3 of a JASA submission.”

*raised by file, wording, content*

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
1. [Important] The teaching rating lacks the number of respondents needed to judge how representative it is. *(about 3–5 words to add)*
2. [Important] The teaching result appears after two activity details instead of being attached directly to the teaching work. *(no words)*

**Why**
1. A 4.8/5 score is strong evidence, but its credibility depends partly on the response count. Without that context, a reader cannot distinguish broad student feedback from a rating based on only a few submissions.
2. The 4.8/5 rating is the bullet's clearest evidence of effectiveness, but its late position makes the result less scannable. Leading with or attaching the rating to the recitations gives the outcome priority.

**How to change it**
1. Add the available response count after the rating, such as “4.8/5 from [number of respondents]”; omit it if unavailable.
2. Move the rating immediately after “Taught weekly recitations for 60 students” or lead the bullet with the rating, without changing the underlying figure.

*raised by content, wording*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The open-source package bullet does not identify the candidate's technical contribution inside the package. *(about 4–8 words to add)*
2. [Important] The package's download result is separated from its subject by several unrelated responsibilities, creating an ambiguous “which.” *(no words)*

**Why**
1. The reader can see that a package was released and downloaded, but not what statistical or software skill made it valuable. The download count measures reach rather than the method implemented.
2. The reader must determine whether the 3,000 downloads belong to the package or to the cluster, reading group, or grading work. That delays the package's strongest impact evidence and makes the bullet harder to scan.

**How to change it**
1. Add the package's most important technical contribution after that phrase, such as [implemented, optimized, or validated a specific estimator or capability], if accurate.
2. Move “which was downloaded 3,000 times in its first year” directly after the package description, then place the cluster, reading-group, and grading responsibilities separately or omit the least relevant ones.

*raised by content, wording*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
[Important] “By 7%” does not state whether the QLIKE loss improved by 7% relative or by 7 percentage points. *(about 1 word to add)*

**Why**
QLIKE is a numeric loss, so the phrase can be read as either a relative reduction or an absolute change in the loss value. The ambiguity prevents the reader from interpreting the size of the result precisely.

**How to change it**
Replace “by 7%” with the accurate metric-specific wording, such as “by 7% relative,” if that is what the comparison shows.

*raised by wording*

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is a 25% reduction, not a 33% improvement. *(saves about 1 word)*
2. [Important] The phrase “forecast error” does not identify the metric producing the change from 0.20 to 0.15. *(about 1–3 words to add)*

**Why**
1. The absolute reduction is 0.05, and 0.05 divided by the original 0.20 equals 25%. Calling it 33% misstates the relative change and can make the otherwise quantitative result appear unreliable.
2. A finance or machine-learning reader cannot interpret or compare the values without knowing whether they are RMSE, MAE, or another metric. Naming the metric makes the result easier to verify and prevents the numbers from appearing context-free.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction.”
2. Replace “forecast error” with “[name of error metric]”; if the comparison used a distinct holdout, add “on [evaluation set].”

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
[Error] The change from 52% to 58% is an increase of 6 percentage points, not a 6% relative improvement. *(adds about 1 word)*

**Why**
The displayed values show an absolute increase of six points; expressed relatively, the increase is approximately 11.5%. Using “6%” can make the result appear inconsistent with its own figures.

**How to change it**
Replace “by 6%” with “by 6 percentage points.”

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 validation-to-leaderboard gap does not identify the metric or its units. *(about 1 word to add)*

**Why**
A reader cannot judge whether 0.02 is a large or small discrepancy without knowing what score was compared. Naming the metric makes the leakage result interpretable without requiring another figure.

**How to change it**
Replace “a 0.02 gap” with “a 0.02 [metric] gap” or the accurate metric-specific wording, if known.

*raised by content*

## Skills

> econometircs

**Problem**
[Error] The Methods skills line misspells “econometrics.” *(no words)*

**Why**
The error is immediately visible in a high-level skills section and can undermine confidence in the candidate's attention to detail. It is especially costly because the misspelled term names a relevant quantitative field.

**How to change it**
Replace “econometircs” with “econometrics.”

*raised by narrative*

## Set aside (9)

- s2:e2:b1: “my proof tightens the previous bound by a log factor” is not established by the line alone.
- s2:e0:b0, s2:e0:b1: "Managed opening shifts and a team" combines shift responsibility with people management, making the ownership of each activity slightly imprecise. (and 1 more like it)
- s3:e0:b2: “With a temporal convolutional model” repeats the method from the first bullet without explaining what changed or distinguishing this result from the earlier one.
- s2:e1:b0, s2:e1:b1: "over 18 months of out-of-sample backtest" uses an awkward singular construction that makes the testing period less clear. (and 1 more like it)
- s2:e1:b2: "standard Diebold-Mariano tests" uses a generic qualifier that does not tell the reader anything beyond the named test.
- s3:e1:b0: "with a gradient-boosting ensemble on 300 engineered features" makes the relationship between the model and the features slightly awkward to parse.
- s3:e1:b1: "which closed a 0.02 gap" makes the result slightly less direct because the antecedent of "which" is the entire preceding clause.
- s3:e1:b2: "without losing validation score" does not say whether the score stayed exactly unchanged or what metric was preserved.
- s3:e1:b2: The feature-count result is buried after the ownership, tool, and method details instead of appearing near the opening.
