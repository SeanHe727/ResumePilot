> Here is my resume: bench/planted-defects/tests/b1-quant/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Content:** all 5 entries with bullets
- **Wording:** all 5 entries with bullets
- **Narrative:** full resume
- **Format/ATS:** completed
- **Job-description match:** not reviewed because no posting was provided
- Education entries were not content-reviewed because they contain no bullets

### Changes to prioritize

1. **Correct the quantitative claims**
   - The volatility-study bullet reports a change from **0.20 to 0.15** as a “33% improvement.” The reviewers flagged this as mathematically inconsistent.
   - The directional hit-rate change from **52% to 58%** should be described using percentage points, not simply “6%.”
   - The Northpeak bullet describing annualization by multiplying daily Sharpe by **252** was flagged as technically incorrect. Verify and correct that method before keeping the claim.

2. **Clarify what performance figures mean**
   - Explain what the **0.4 Sharpe increase** is measured against.
   - Clarify whose or which **gross returns** were retained at 90%.
   - Add the size or result of the gain validated with the Diebold–Mariano tests.
   - Define the relevant score and comparison when describing the **0.02 validation/leaderboard gap**.

3. **Separate major accomplishments from supporting duties**
   - The research-assistant entry combines the R-package release, cluster maintenance, reading-group organization, and course grading in one bullet. The reviewers recommend separating these so the package’s **3,000 first-year downloads** are immediately associated with the package.
   - The Northpeak feature-store bullet similarly buries the result beneath implementation details. Make the reuse by two later projects easier to identify.
   - The Northpeak documentation bullet has no evidence of adoption or impact; add that only if you can substantiate it.

4. **Improve the narrative order**
   - The quantitative-research core is clear, but the current bakery-management role interrupts it.
   - Consider placing the volatility study closer to Northpeak Capital and moving Sunrise Bakery to a shorter **Additional Experience** section after the quantitative work.
   - If the bakery role is not temporary, add a brief factual explanation of the transition.

5. **Address wording and consistency issues**
   - Remove the first-person wording in “my proof.”
   - Keep tense consistent for completed work.
   - Replace or clarify vague phrases such as “without losing validation score.”
   - Put outcomes before lengthy method descriptions where the result is currently buried.
   - The format reader also noted one personal pronoun and that only **9 of 18 bullets** begin with action verbs.

6. **Check the skills section**
   - The narrative review identified skills such as **C++, SQL, and Kafka** that are not demonstrated in the experience or project bullets. Either substantiate them elsewhere in the resume or remove them if they are not relevant to the target role.

The file itself is one page, parses cleanly for ATS systems, has no layout warnings, and contains substantial quantitative detail. The full specialist reasoning and entry-by-entry findings are available in the detailed report at `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 88 · narrative 62

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The Sharpe annualization is wrong, and the reporting step has no demonstrated result.**
   > Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.
   Daily Sharpe is normally multiplied by √252, not 252, so the current wording materially overstates performance. Reporting the figure adds little unless it enabled a decision.
   **How to change it:** Replace "252" with "√252" and replace the reporting phrase with [the decision enabled], or remove the bullet.
2. **The 0.20-to-0.15 change is a 25% reduction, not a 33% improvement, and the metric is unnamed.**
   > Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.
   The reduction is 0.05 divided by 0.20, or 25%. A technical reader also cannot interpret "forecast error" without the specific loss metric.
   **How to change it:** Name [the error metric] and replace the phrase with "a 25% reduction."
3. **The hit-rate change is six percentage points, not 6%.**
   > Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.
   The direct change from 52% to 58% is six percentage points; 6% suggests a relative increase. That ambiguity weakens confidence in the figures.
   **How to change it:** Replace it with "by 6 percentage points."

## Already working

- s2:e1:b0: Shows direct ownership of a trading-signal build.
- s3:e0:b0: Names a credible benchmark rather than reporting an isolated model score.
- s3:e1:b0: The placement is highly legible: 41st among 2,900 teams is approximately the top 2%.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

- **The labour-budget result lacks a measurable variance.** *(about 4 words)*
  > Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
  The reader cannot judge whether spending was meaningfully under budget or merely compliant. The team size establishes scope but not achievement strength.
  **How to change it:** Replace or supplement it with [weekly spend versus budget] or [budget variance].

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

- **The 0.4 Sharpe result does not name its comparison.** *(about 5 words)*
  > Built a short-horizon order-book imbalance signal for liquid index futures that added 0.4 Sharpe to the desk’s book over 18 months of out-of-sample backtest after costs.
  A reader cannot tell whether it is incremental Sharpe versus the existing desk book, standalone signal Sharpe, or another benchmark. The portfolio impact is therefore difficult to interpret.
  **How to change it:** Name the reference, such as [the desk book before adding the signal].
- **The turnover bullet does not identify whose returns were retained.** *(about 3 words)*
  > Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.
  The 90% figure could refer to the unsmoothed signal, original strategy, or another benchmark. "A third" also makes the percentages less consistent.
  **How to change it:** Write "retaining 90% of the pre-smoothing gross returns" if accurate, and change "by a third" to "by 33%."
- **The forecast-validation bullet gives a test name but neither the measured gain nor its outcome.** *(about 8 words)*
  > Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.
  The reader cannot tell what improved or whether the improvement was statistically supported. It reads as process rather than evidence.
  **How to change it:** Add [the forecast-loss improvement] and [the number or share of significant indices and relevant p-value or metric].
- **The feature-store bullet buries its result and does not show the value of reuse.** *(about 5 words)*
  > Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.
  Implementation details precede the main achievement, while reuse alone does not show whether the store saved time, prevented errors, or enabled a result.
  **How to change it:** Lead with "Built a feature store reused in two later projects," then add the methods and [the clearest downstream benefit].
- **The documentation bullet shows no evidence that anyone used or benefited from the wiki.** *(about 5 words)*
  > Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki for future interns.
  "For future interns" describes intended audience, not adoption or impact. The contribution therefore remains prospective.
  **How to change it:** Add [users, reuse, hours saved, errors avoided, or a handoff outcome].

## Ridgeway University | Graduate Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

- **The proof comparison is vague and uses inconsistent person and tense.** *(about 8 words)*
  > Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.
  A technical reader cannot identify the logarithmic factor, variance quantity, or matching assumptions. "My proof tightens" also conflicts with the résumé's past-tense, third-person style.
  **How to change it:** Write "the proof tightened" and specify [the estimator], [variance quantity], and [exact factor or old-versus-new bound].
- **The package bullet combines unrelated duties and leaves the download figure's antecedent unclear.** *(saves about 12 words)*
  > Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.
  The package, cluster, reading group, and grading compete for attention. A reader may not know what was downloaded, weakening the strongest evidence.
  **How to change it:** Attach the result directly to "the R package" and move or cut the other duties unless [their impact] matters.

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

- **The validation bullet does not define the leakage result or the 0.02 gap.** *(about 8 words)*
  > Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.
  Leakage is a diagnosis, not a readily judged outcome. The reader also cannot tell the metric, direction, or whether 0.02 is an absolute difference.
  **How to change it:** Add [the metric], [original gap], and [revised absolute gap], then retain the leakage explanation.
- **The feature-selection claim does not establish what "without losing validation score" means.** *(about 6 words)*
  > Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.
  The scores may have been identical, within tolerance, or merely not detectably different. Without the comparison, the no-loss claim is hard to assess.
  **How to change it:** Add [the two scores] or [the tolerance and repeated/time-split validation basis].

## Across the whole résumé

- **Sunrise Bakery currently dominates the narrative and obscures the quantitative direction.** *(saves about 20 words)*
  > Assistant Store Manager
  Its newest, first-listed title may look like the candidate's main trajectory or a backward move. The résumé needs context for work alongside doctoral research.
  **How to change it:** Move it below quantitative entries or shorten it to one line, and add [part-time, interim, or alongside doctoral research].

## Set aside (22)

Worth knowing, and not worth the space on this page:

- format: uses a personal pronoun; resume lines are phrases, not sentences — "Derived a variance bound for a sparse regression estimator; my proof..."
- s3:e0:b1: The phrase "forecast error" does not identify which error metric changed from 0.20 to 0.15.
- s2:e2:b2: "earning a 4.8/5 teaching rating" gives no number of respondents, response rate, or comparison group.
- s2:e0:b1: In "Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production," the result is buried after the operational methods; lead with the reduction instead: "Cut unsold bread from 12% to 7% of production by running daily stock counts and supplier orders."
- s2:e2:b0: "making runs reproducible by seed" is awkward and less direct than describing the implementation as seeded runs.
- s2:e2:b1: "my proof" violates resume person consistency and adds a first-person pronoun; use "the proof" instead. (and 1 more like it)
- s2:e1:b1: "lowering estimated slippage by a third" uses a fraction while the rest of the bullet uses percentages, making the quantified results less consistent and immediately scannable; write "by 33%" instead.
- s2:e1:b3: "Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built" buries the main result behind three methods; lead with "Built a feature store reused in two later projects" and follow with the implementation details. (and 1 more like it)
- whole resume, order: Shorten Sunrise Bakery to one line or move it to an Additional Experience section after the quantitative entries; in its current position as the newest role, it dominates the career narrative and obscures the intended quantitative direction. (and 1 more like it)
- whole resume, order: Add a brief explanation for the current transition into bakery management if it is not temporary—for example, a concise phrase indicating that it is part-time, interim, or undertaken alongside doctoral research. Without context, the latest title suggests a backward move in seniority.
- …and 12 more, in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ac0751cd.md.

