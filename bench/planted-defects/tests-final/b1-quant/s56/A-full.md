# Full review: resume.pdf

**89/100** — format 100 · content 84 · wording 89 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

8 errors, 14 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] Leading experience with Sunrise Bakery makes the page initially read as a retail-management résumé. *(saves about 15 words)*

**Why**
The first role shapes a recruiter's initial interpretation, even though the Northpeak internship and quantitative projects are more relevant to the apparent target. The current order delays the candidate's strongest evidence of quantitative fit.

**How to change it**
Move Sunrise Bakery below the quantitative projects, place it under Additional Experience, and condense it to one line.

*raised by narrative*

> Sep 2025 - Present

**Problem**
[Polish] The résumé does not explain the immediate pivot from a quantitative internship to bakery management. *(about 5 words)*

**Why**
Northpeak ends in August 2025 and Sunrise begins in September 2025, so a reader may question whether the candidate has changed career direction. Without context, that uncertainty can weaken the otherwise clear quantitative narrative.

**How to change it**
In the shortened Additional Experience entry, add a brief qualifier such as [reason for taking the role or its relationship to the current quantitative search], if appropriate.

*raised by narrative*

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
1. [Polish] The line does not show how staffing was managed to keep labour within budget. *(about 4 words)*
2. [Polish] "Managed" uses the wrong tense for a current role. *(no words)*

**Why**
1. A hiring manager can see the responsibility and outcome but not the management judgment connecting them. That leaves the candidate's scheduling or labour-allocation skill unproven.
2. The entry runs through "Present," so past tense makes the status of the responsibility inconsistent. A reader may wonder whether the management duty has already ended.

**How to change it**
1. Replace "Managed opening shifts" with [specific scheduling, coverage, or labour-allocation action used], retaining "a team of 6 bakers and cashiers."
2. Replace "Managed" with "Manage."

*raised by content, wording*

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
1. [Important] The routine tasks do not explain how stock information was used to reduce unsold bread. *(about 6 words)*
2. [Important] "Ran daily stock counts and supplier orders" uses the wrong tense and applies "Ran" awkwardly to orders. *(about 2 words)*

**Why**
1. The 12% to 7% result is strong, but the ordering decision that produced it is missing. Without that connection, the line shows task execution more clearly than inventory-management skill.
2. The current role calls for present tense, and orders are normally placed rather than run. The existing construction makes an otherwise measurable line sound imprecise.

**How to change it**
1. Replace "supplier orders" with [how stock or sales data was used to adjust supplier order quantities], if accurate.
2. Replace the phrase with "Conduct daily stock counts and place supplier orders."

*raised by content, wording*

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.

**Problem**
[Error] "Over 18 months of out-of-sample backtest" is grammatically incorrect. *(no words)*

**Why**
The duration modifies a singular backtest and therefore needs an article and a compound adjective. The current wording interrupts an otherwise strong quantitative result.

**How to change it**
Replace it with "over an 18-month out-of-sample backtest."

*raised by wording*

> Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90% of gross returns and lowering estimated slippage by a third.

**Problem**
[Polish] "Cost-aware position smoother" does not identify the mechanism used to reduce turnover. *(about 3 words)*

**Why**
A quantitative hiring manager can see that trading costs were incorporated but cannot tell whether the candidate designed an optimization penalty, trading bands, or another method. That limits the line's value as evidence of technical ownership.

**How to change it**
Replace the phrase with "[smoothing or optimization method] using [transaction-cost input]," if accurate.

*raised by content*

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
1. [Error] Standard Diebold-Mariano tests do not validly confirm forecast gains against a nested HAR-RV baseline. *(about 3 words)*
2. [Important] "Confirmed the forecast gain" gives neither the size of the gain nor the result across the 30 indices. *(about 7 words)*
3. [Polish] "Standard" is filler because it does not distinguish or explain the tests. *(saves 1 word)*

**Why**
1. For nested estimated forecasting models, the loss differential can be degenerate under the null, making the standard Diebold-Mariano test generally miscalibrated. Testing 30 indices also requires treatment of cross-index dependence and multiple comparisons, so the present confirmation claim may undermine technical credibility.
2. Naming a benchmark and a test does not show whether the improvement was substantial or broadly supported. A reader cannot judge the economic or statistical importance of the result.
3. The adjective adds no information about test construction or application. It also risks suggesting routine validity where the nested-model setting requires a more precise method.

**How to change it**
1. If performed, cite an appropriate nested-model test such as a Clark-West test or a suitable bootstrap with dependence and multiplicity handled. Otherwise, say only that the model showed lower out-of-sample forecast loss than the HAR-RV baseline.
2. After using a valid analysis, replace the phrase with the change in [forecast-loss metric versus HAR-RV] and report [number of 30 indices meeting the stated significance threshold].
3. Cut "standard" when revising the testing claim.

*raised by content, wording*

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
[Important] The reusable feature-store result is buried after three substantial implementation details. *(no words)*

**Why**
A scanning reader may register data preparation without reaching the evidence that the deliverable created continuing team value. Leading with the result makes both ownership and reuse visible sooner.

**How to change it**
Move this phrase to the opening, then place the existing feature, venue, deduplication, and schema details after "by."

*raised by content, wording*

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] Multiplying a daily Sharpe ratio by 252 is the wrong annualization. *(no words)*
2. [Important] The line reports a calculation without showing any resulting value or decision. *(saves about 16 words)*

**Why**
1. Expected return scales linearly with time, while volatility ordinarily scales with the square root of time. Under the conventional independent or weakly dependent-return assumption, daily Sharpe is multiplied by √252, not 252.
2. Routine metric preparation does not strengthen the entry unless it informed a concrete research, allocation, or risk decision. Without such an outcome, the bullet is weaker than the surrounding signal-development results.

**How to change it**
1. Replace "252" with "√252."
2. Delete the line unless the report enabled a specific outcome. If it did, replace the quoted phrase with "supporting [specific desk decision the report enabled]."

*raised by content*

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Polish] "Used to onboard in their first week" shows adoption but not an improved onboarding outcome. *(about 5 words)*

**Why**
The reader knows that the next cohort consulted the wiki but not whether it accelerated a milestone or replaced a weaker process. Usage is still useful evidence, but it should not imply an unmeasured improvement.

**How to change it**
If measured, replace the phrase with "reduced time to [specific onboarding milestone] from [prior time] to [new time]." Otherwise, retain the current adoption evidence without adding an improvement claim.

*raised by content*

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study from 3 days to 5 hours, with every run reproducible from its seed and configuration file.

**Problem**
[Error] A seed and configuration file alone do not guarantee that every cluster run is reproducible. *(no words)*

**Why**
Reproduction also depends on inputs, software and library versions, the execution environment, random-number streams, and potentially nondeterministic parallel scheduling. The absolute claim therefore exposes the candidate to a technical challenge that the stated artifacts cannot answer.

**How to change it**
Replace the claim with "recording each run’s seed and configuration file" unless the pipeline also preserved the environment and controlled parallel nondeterminism. If it did, add [container or locked environment and deterministic task-level random-number streams].

*raised by content*

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] "A sparse regression estimator" does not identify the estimator or the setting in which the bound applies. *(about 4 words)*
2. [Important] "Tightens the previous bound by a log factor" does not state which factor or asymptotic bound changed. *(about 3 words)*
3. [Important] The entry's strongest research result is not placed first. *(no words)*
4. [Polish] "My proof" uses a personal pronoun that is inconsistent with résumé-style phrases. *(no words)*

**Why**
1. A statistical-learning reader cannot determine what problem class was addressed or formulate a meaningful technical follow-up. That weakens the specificity of one of the entry's strongest research contributions.
2. The comparison sounds important, but a specialist cannot determine the precise theoretical advance. Naming the old and new orders would make the result technically verifiable.
3. The JASA submission and improved variance bound are likely to attract a quantitative research reader more quickly than the simulation-pipeline result. Leaving that contribution second reduces its impact during a rapid scan.
4. The rest of the résumé relies on implied first person, so the pronoun is visually and stylistically conspicuous. It also makes the clause read more like prose than a concise accomplishment statement.

**How to change it**
1. Replace the phrase with [estimator name or estimator class under the key assumption], retaining only the most distinguishing technical detail.
2. Replace "by a log factor" with "from [old asymptotic order] to [new asymptotic order]," if compact and accurate.
3. Move this bullet above the simulation-pipeline bullet.
4. Replace "; my proof tightens" with ", tightening" and change "and is now" to "; the proof is now."

*raised by content, narrative, wording, file*

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Error] Unrelated duties separate the package from its download result and make "which was downloaded" appear to modify "two courses." *(about 6 words)*
2. [Polish] The package description gives no technical detail about implementation or validation. *(about 6 words)*

**Why**
1. The interruption obscures which work produced the 3,000 downloads, while the grammatical attachment creates an illogical reading. Even once reconnected, download volume shows adoption rather than the research task or workflow users gained.
2. A technical reader can identify the statistical topic but not the programming or engineering contribution behind the release. That leaves the 3,000 downloads as adoption evidence without showing what the candidate actually built or tested.

**How to change it**
1. Move "downloaded 3,000 times in its first year" directly after the package description and move the intervening duties to a separate bullet. Add [the research task or workflow the package enabled or improved] if known.
2. Add [the core estimator implemented or the most meaningful validation or testing method], choosing one detail that best demonstrates the work.

*raised by content, wording*

> maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses

**Problem**
[Important] The entry reads as a mixed inventory rather than a coherent research-assistant story. *(saves about 8 words)*

**Why**
Theoretical research, computing, teaching, package development, cluster administration, reading-group organization, and grading compete for attention. This makes it harder for a quantitative reader to identify the candidate's central research contribution.

**How to change it**
Center the entry on the theoretical, simulation, and package work. Move teaching and service duties to separate Teaching or Additional Experience material, or cut the least relevant duties.

*raised by narrative*

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal convolutional model trained on realized-volatility features.

**Problem**
1. [Polish] "Out-of-sample QLIKE loss" does not state the forecast horizon. *(about 2 words)*
2. [Polish] "Realized-volatility features" describes the model inputs too broadly. *(about 3 words)*
3. [Polish] "HAR-RV" and "QLIKE" are unexplained specialist abbreviations. *(about 6 words)*

**Why**
1. Forecasting performance can vary materially by horizon. Without that context, a quantitative reader cannot confidently interpret the 7% comparison.
2. A technical reader can identify the model family but cannot see the feature choice that demonstrates the underlying research work. The generic label therefore understates the candidate's modeling contribution.
3. Readers within volatility research may recognize them immediately, but broader quantitative and recruiting audiences may not. Unexplained terminology can obscure an otherwise clear 7% performance result.

**How to change it**
1. Add "[forecast horizon]" immediately before "out-of-sample QLIKE loss."
2. Replace the phrase with [most important realized-volatility feature set], naming only the feature choice most responsible for the result.
3. Spell out heterogeneous autoregressive realized volatility and quasi-likelihood on first use, retaining "HAR-RV" and "QLIKE" in parentheses if they recur.

*raised by content, wording*

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The claimed 33% improvement from reducing error from 0.20 to 0.15 is arithmetically incorrect. *(no words)*
2. [Important] "Forecast error" does not name the metric represented by 0.20 and 0.15. *(about 1 word)*
3. [Polish] "Realized-volatility features and an asymmetric loss" leaves both model changes generic. *(about 4 words)*

**Why**
1. The absolute reduction is 0.05, which is 25% of the original 0.20 value. A visible arithmetic error in a quantitative résumé directly damages confidence in the candidate's numerical care.
2. The values cannot be interpreted or compared without knowing whether they are QLIKE, RMSE, MAE, or another measure. The missing label makes the quantified improvement less useful.
3. A reader cannot reconstruct what changed or identify the technical decision responsible for the result. This makes the line sound like a high-level summary rather than evidence of model-development skill.

**How to change it**
1. Replace "33%" with "25%."
2. Replace the phrase with [named error metric].
3. Replace the phrase with "[most important added realized-volatility features] and [named asymmetric loss]," limiting the detail to the two choices most responsible for the improvement.

*raised by content, wording*

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
1. [Error] "By 6%" incorrectly describes the change in hit rate from 52% to 58%. *(about 2 words)*
2. [Important] "Directional hit rate" does not specify the predicted direction or forecast horizon. *(about 4 words)*
3. "With a temporal convolutional model" names the model class but not the relevant implementation choice. *(about 2 words)*

**Why**
1. The change is 6 percentage points; as a relative improvement over 52%, it is approximately 11.5%. Confusing percentages with percentage points creates another avoidable quantitative-accuracy concern.
2. A reader needs both details to understand what the 52% to 58% result measures and how demanding the task was. Without them, the metric remains underspecified.
3. The reader already sees the model family elsewhere in the project, so repeating it adds little evidence of technical ownership. A distinguishing architecture or training choice would better explain what produced the hit-rate gain.

**How to change it**
1. Replace "by 6%" with "by 6 percentage points."
2. Add "[predicted volatility direction and forecast horizon]" immediately after the phrase.
3. Replace the phrase with "using [relevant temporal-convolution implementation choice]," if that choice materially contributed to the result.

*raised by content, wording*

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] "Finishing in the top 2%" duplicates the more precise placement of 41st among 2,900 teams. *(saves about 6 words)*

**Why**
The exact rank already establishes the percentile and is stronger evidence. Repeating the same result uses space that could support technical detail.

**How to change it**
Cut the phrase and move "on the private leaderboard" directly after "2,900 teams."

*raised by wording*

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
[Important] The 0.02 validation-to-leaderboard gap does not identify the scoring metric. *(about 2 words)*

**Why**
Without the metric or its scale, a reader cannot judge how meaningful closing a 0.02 gap was. Naming it would make the validation improvement interpretable.

**How to change it**
Add the metric immediately after "0.02," producing "a 0.02 [competition scoring metric] gap," if accurate.

*raised by content*

## Skills

> econometircs

**Problem**
[Error] "Econometircs" is misspelled. *(no words)*

**Why**
A typo in a Methods skills line is especially conspicuous because it appears in a compact list of claimed expertise. It can make a reader question proofreading care.

**How to change it**
Replace "econometircs" with "econometrics."

*raised by narrative*

## Already working

- s2:e2:b2: Combines instructional scope, a concrete teaching contribution and a measured outcome.
- s3:e1:b2: Shows direct ownership through the team’s feature-selection script.

## Set aside (1)

- s3:e0:b2: “with a temporal convolutional model” names the model class but not the relevant implementation choice.
