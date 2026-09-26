# Resume Review

You have a strong quantitative profile: a Ph.D. in statistics, quant research experience, rigorous validation methods, measurable research results, and an open-source package. The main problems are credibility, duplication, formatting, and several irrelevant or vague details.

## Highest-Priority Changes

### 1. Remove personal information that should not be on a resume

Delete:

- Age
- Marital status
- Hobbies

These are irrelevant to hiring and may introduce bias. Your contact header should contain only:

```text
Morgan Patel
Metro City, USA | +1 (555) 010-4410 | morgan.patel@example.com
GitHub: github.com/mpatel | LinkedIn: linkedin.com/in/mpatel
```

Use the actual GitHub or portfolio URL rather than `example.com/code/mpatel`.

---

### 2. Remove duplicate and contradictory bullets

You have two nearly identical bullets in the Northpeak role:

> Validated the signal on 6 years of tick data...

> Tested the signal on six years of tick-level data...

Keep one. The stronger version is:

```text
Validated the signal on 6 years of tick-level data using purged walk-forward splits and embargo periods, eliminating look-ahead bias in model training.
```

You also repeat the order-book signal in both Northpeak and the Kaggle project. If it was the same work, do not claim the same result twice. If it was independently recreated, make that distinction explicit.

---

### 3. Remove or substantially revise the infrastructure claim

This bullet is not credible as written for an internship:

> Single-handedly built the firm’s entire trading infrastructure, which is now used by every desk across equities, rates and commodities.

It raises several concerns:

- “Single-handedly” sounds exaggerated.
- Building an entire firm-wide trading infrastructure during a summer internship is unlikely.
- It does not specify what you actually built.
- “Every desk” is an extremely broad claim.

Replace it with a precise, defensible description, such as:

```text
Built reusable components for the desk’s research and backtesting infrastructure, improving experiment reproducibility and supporting research across [asset classes/desks].
```

If you actually built a production system, name the components and quantify them:

```text
Developed a Python/Kafka backtesting pipeline used by 4 research teams, reducing setup time for new experiments by 60% and standardizing transaction-cost assumptions.
```

Only use this if accurate.

---

### 4. Fix the date error

This project currently says:

```text
Jun 2023 - Mar 2023
```

That is impossible chronologically. Correct it to the actual dates, likely one of:

```text
Jun 2022 – Mar 2023
```

or

```text
Jun 2023 – Mar 2024
```

Also verify whether the Northpeak internship date is correct. If it is a future role, do not describe it in the past tense until completed.

---

### 5. Delete the vague, buzzword-heavy project bullet

Remove:

> Leveraged cutting-edge quantitative synergies and next-generation modeling paradigms to unlock alpha-driven innovation.

This is empty language and will hurt your credibility. Replace it with technical specifics:

```text
Compared neural-network and statistical volatility models using rolling-origin evaluation across 30 equity indices.
```

Your resume should emphasize:

- Dataset size
- Forecast horizon
- Baselines
- Features
- Evaluation methodology
- Economic significance
- Out-of-sample performance

---

### 6. Explain or remove unexplained internal names

This bullet is difficult to understand:

> Ported the VX-9 stack onto QRT under the Helix program, coordinating with the Atlas and Borealis teams.

It contains several unexplained proper nouns and no measurable outcome. A recruiter cannot tell what you did.

Rewrite it in plain language:

```text
Migrated the volatility forecasting pipeline to [platform/tool], coordinating with 3 teams and reducing model runtime by [X]%.
```

If these are confidential internal project names, omit them. State the technical work and result instead.

---

## Experience Section

Your strongest material is already here. Make the bullets more concise and technically specific.

### Northpeak Capital — Quantitative Research Intern

Suggested revision:

```text
Northpeak Capital | Quantitative Research Intern
Metro City, USA | Jun 2025 – Aug 2025

• Developed a short-horizon order-book imbalance signal for liquid index futures that improved the desk’s book by 0.4 Sharpe over an 18-month out-of-sample backtest after transaction costs.
• Reduced signal turnover from 34% to 21% using a cost-aware position smoother, retaining 90% of gross returns and reducing estimated slippage by one-third.
• Validated the strategy on 6 years of tick-level data using purged walk-forward splits and embargo periods to prevent look-ahead bias.
• Built reusable research/backtesting infrastructure for [specific use case], supporting [number] researchers or desks and improving [runtime/reproducibility/throughput] by [metric].
• Documented backtest assumptions, transaction-cost models, validation methodology, and known failure regimes in the team research wiki.
```

You can omit the documentation bullet if space is limited, unless the role values research communication and reproducibility.

Be prepared to explain:

- How the 0.4 Sharpe improvement was calculated
- Whether it was incremental or standalone Sharpe
- The transaction-cost assumptions
- Why the result was not overfit
- The number of instruments and observations
- Why the signal remained effective after turnover reduction

### Graduate Research Assistant

This section is strong. Improve wording slightly:

```text
Ridgeway University | Graduate Research Assistant, Statistical Learning Lab
Metro City, USA | Oct 2021 – Aug 2022

• Built a reproducible Monte Carlo simulation pipeline on a shared compute cluster, reducing a 2,000-run study from 3 days to 5 hours.
• Derived a variance bound for a sparse regression estimator, tightening the prior bound by a logarithmic factor; results comprise Section 3 of a manuscript under review at JASA.
• Taught weekly recitations for 60 graduate probability students, authored 12 problem sets, and earned a 4.8/5 teaching rating.
• Developed and released an open-source R package for high-dimensional covariance estimation using shrinkage and factor models; reached 3,000 downloads in its first year.
```

If the paper has a title, authorship status, or preprint link, add it in a publications section.

---

## Projects Section

The projects need clearer technical descriptions and less overlap with your professional experience.

### Volatility Forecasting Study

Possible revision:

```text
Volatility Forecasting Study | Python, PyTorch | Jan 2024 – Present
• Compared statistical and neural-network volatility forecasts across 30 equity indices using rolling out-of-sample evaluation and Diebold–Mariano tests.
• Observed statistically significant forecast improvements at the 5% level on 24 of 30 indices, including both tested crisis periods.
• [Add a bullet describing the model architecture, features, forecast horizon, or economic value.]
• GitHub: [link] | Paper/report: [link]
```

The project needs one implementation-focused bullet. For example:

```text
• Implemented rolling-window training, benchmark comparisons, and reproducible experiment tracking for 1-day and 5-day volatility forecasts.
```

Only include the relevant horizon and tools you actually used.

### Kaggle Competition

First, correct the dates and make your contribution specific:

```text
Kaggle Market Prediction Competition | Python | [Correct dates]
• Collaborated on a 3-person team to develop time-series prediction models and feature pipelines for [competition name].
• Replaced random cross-validation with time-grouped folds, reducing the gap between local validation and leaderboard scores from 0.02 to near zero.
• Implemented [specific model/features/preprocessing technique], contributing to a final rank of [ranking/percentile].
```

Delete:

> Worked with various people on multiple aspects of the competition to help the team make progress.

It says nothing measurable about your contribution.

Also remove the repeated order-book signal bullet unless it was genuinely separate work.

---

## Skills Section

Your current skills section mixes tools, methods, and infrastructure inconsistently. “Haskell” should not be listed under Infrastructure.

Use categories like these:

```text
TECHNICAL SKILLS

Programming: Python, R, SQL, C++

Machine Learning & Statistics: Time-series econometrics, Bayesian inference, statistical learning, gradient boosting, PyTorch, Monte Carlo simulation, high-dimensional statistics

Quantitative Research: Signal research, volatility forecasting, time-series cross-validation, purged walk-forward validation, transaction-cost modeling, order-book data, backtesting

Infrastructure & Data: Kubernetes, Kafka, Linux, Git, [NumPy, pandas, scikit-learn, Polars, Spark—only if applicable]
```

Important points:

- Add `NumPy`, `pandas`, `scikit-learn`, and similar core libraries if you use them professionally.
- Add specific cloud, database, and CI/CD tools only if you can discuss them.
- Remove Haskell unless the target role specifically values it or you have meaningful project experience.
- Include `C++` only if you have used it substantially; for quant roles, be ready to discuss performance, memory, and implementation details.
- Do not list a technology merely because you encountered it once.

For quant research applications, the “Quantitative Research” category is more useful than a generic “Methods” category.

---

## Education Section

Your education is important enough to include your research area.

```text
Ridgeway University — Ph.D. Candidate, Statistics
Metro City, USA | Expected May 2026
Research focus: Statistical learning, high-dimensional inference, time-series modeling

Ridgeway University — B.S., Mathematics
Metro City, USA | May 2020
```

Consider adding:

- Dissertation title or research topic
- Advisor, if relevant
- Publications or preprints
- Awards, fellowships, or honors
- Relevant coursework only if applying to a role where it adds value

A separate publications section would strengthen the resume:

```text
PUBLICATIONS & RESEARCH

Patel, M. et al. “[Paper Title].” Manuscript under review at Journal of the American Statistical Association.
Patel, M. “[Package Name].” Open-source R package, [GitHub/CRAN link].
```

Do not imply that the JASA paper is accepted; “manuscript under review” is appropriate.

---

## Recommended Order

For a quantitative research or quant developer role, use:

1. Contact information
2. Education
3. Experience
4. Research/Publications
5. Projects
6. Technical skills

Because you are a Ph.D. candidate, education can reasonably come before experience. If applying specifically to industry quant roles and Northpeak is your strongest credential, experience first is also defensible.

---

## Overall Assessment

### Strong points

- Excellent quantitative credentials
- Concrete performance and efficiency metrics
- Strong validation methodology
- Relevant market microstructure experience
- Research publication potential
- Open-source software with adoption
- Teaching and communication evidence

### Main risks

- Overclaiming or implausible scope
- Duplicate achievements
- Unexplained internal jargon
- Empty buzzwords
- Date inconsistency
- Skills section that does not clearly reflect quant research
- Missing links to code, papers, and projects

Your resume could be very competitive after editing. The most important principle is to make every claim precise, independently defensible, and easy for a recruiter or researcher to understand.