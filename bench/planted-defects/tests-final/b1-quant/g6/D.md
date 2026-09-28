# Résumé critique

**Target inferred from the résumé:** Quantitative Research / Quant Researcher, likely focused on systematic strategies, market microstructure, or volatility forecasting.  
**Important limitation:** There’s no job description or target company, so I can’t measure fit to a specific posting or company. The ATS check and vocabulary assessment below use a general quant-research role as a proxy. I’ve assessed only the text you provided; I can’t verify the underlying results.

## Overall assessment

You have relevant research experience, strong quantitative results, and a credible mix of academic and applied work. The main concern is **trustworthiness of the numbers**: one Sharpe-ratio claim appears mathematically wrong, and one project’s percentage improvement does not match its stated figures. Those are higher priorities than adding keywords or polishing style. The résumé also needs clearer prioritization: the bakery role is the first experience a recruiter sees, while some of your strongest quant evidence is later in the document.

## Domain-specialist lens

### Likely reviewer

For a quant-research role, the first specialist reader would likely be a quantitative recruiter or research lead, followed by a researcher who evaluates statistical validity, backtest design, and implementation detail. They will look for evidence that results are robust out of sample and net of costs—not just that a model produced a strong metric.

### Company context

The company and posting aren’t specified, so I can’t assess its business model, research culture, or preferred vocabulary. The résumé points toward a trading or investment research environment, but that is an inference, not confirmed context.

### Role vocabulary and gaps

These are common terms for the inferred role, **not extracted from a specific job description**:

| Role-relevant area | Evidence in the résumé | Assessment |
|---|---|---|
| Quantitative research | Internship title and research projects | Present |
| Python / R | Skills section | Present |
| Time-series modeling | Volatility project and methods list | Present, but fix the misspelling in the methods list |
| Market microstructure | Order-book signal and venue-level data | Present |
| Backtesting / out-of-sample evaluation | Several bullets | Present; add methodological detail where possible |
| Transaction costs / slippage | Internship bullets | Present; distinguish estimated from realized effects |
| Statistical testing | Diebold–Mariano tests | Present, but statistical significance and testing scope are unclear |
| Portfolio construction / risk controls | Sharpe and turnover claims | Partial; attribution and construction details are missing |
| SQL / C++ / production research infrastructure | Not shown | Absent; include only if you have the experience |
| Deployment / live trading | Not shown | Absent; don’t imply live results if these are backtests |

**Most important likely gap:** the résumé shows backtesting and research infrastructure, but does not establish whether any strategy was paper-traded, deployed, or monitored live. That may be a hard experience gap for some roles, not a wording problem.

### Methodology transfer

- **Order-book signal:** A quant research lead can see relevance to market microstructure strategy research, but will want to understand signal attribution, execution assumptions, and out-of-sample design.
- **Turnover smoother:** This maps directly to trading-cost-aware portfolio construction; clarify how slippage was estimated and what “90% of gross returns” measures.
- **Forecast testing:** The Diebold–Mariano comparison shows statistical discipline, but the reviewer will want the forecast metric, significance, and treatment of multiple comparisons.
- **Simulation pipeline:** Reproducibility and runtime improvements transfer to research infrastructure; clarify how much was your contribution versus shared-cluster capability.
- **Sparse-regression proof:** This demonstrates theoretical depth, but its practical relevance depends on the role. Make your authorship/contribution and the paper’s status easy to interpret.

### Competitive landscape

The likely competing applicant has a quantitative degree plus direct trading, portfolio, or production experience. Your advantages are the mix of statistical theory, reproducible research tooling, and market-microstructure work. Likely disadvantages are the lack of stated live-trading/deployment experience and the absence of some common implementation tools—notably SQL or C++, if the posting requires them.

## Five-perspective read-through

### ATS scan — proxy, not a JD match

Approximate match: **13/20 (65%, marginal)** for a general quant-research keyword set.

**Clearly present:** quantitative research, Python, R, time series, market microstructure, order book, futures, backtesting, out-of-sample testing, transaction costs, slippage, Sharpe ratio, volatility forecasting, feature engineering.

**Partial or missing:** portfolio construction, risk management, SQL, C++, execution, live trading, production deployment.

This is not a measured score against a real posting. Don’t add absent terms unless you can substantiate them.

### Recruiter glance — 10 seconds

**Verdict: Maybe / likely forward if the role values research depth.** The Ph.D. candidate status and quant internship help. The current bakery role appears first, however, and there is no summary or tagline to immediately frame your quant profile. A recruiter may wonder whether you are still pursuing quant work or whether the bakery role is your main current occupation.

### HR screen — 30 seconds

**Verdict: Borderline to phone screen.** The education and internship establish a plausible baseline, and the résumé contains relevant metrics. The summary is absent, the bakery role gets first-bullet attention, and the questionable Sharpe annualization could undermine confidence if noticed.

### Hiring manager — 2 minutes

**Verdict: Maybe, with a path to interview after corrections.**

1. The strongest evidence is the market-microstructure internship and the JASA-under-review research.
2. The most serious concern is the daily-Sharpe annualization claim; the stated calculation appears incorrect.
3. The forecasting project repeats related results, and one improvement percentage conflicts with its figures.

**Likely first question:** How exactly were the strategy’s Sharpe ratio, out-of-sample period, transaction costs, and slippage calculated?

### Technical reviewer — 10 minutes

**Truthfulness:** Not independently verifiable from the supplied résumé. One mathematical issue and one arithmetic inconsistency need resolution before submission.  
**Consistency:** The volatility-project bullets appear partly redundant, and the bakery role may distract from the intended quant narrative.  
**Authorship/provenance:** The JASA paper is appropriately described as under review, but the résumé should make your author/contributor status clear. The backtest and slippage estimates should not be presented in a way that could be mistaken for live results.

## Line-by-line review: what to change and why

### Header and education

- **Name and contact details:** No obvious issue in the text provided. Make sure the code link leads directly to a relevant, polished portfolio or project—not just a general profile.
- **Ph.D. entry:** Consider adding your research focus or dissertation area if it is relevant to the target roles. The degree title alone doesn’t show what you specialize in.
- **Expected completion date:** Keep it if accurate. Some roles have degree-completion requirements, so make the timing easy to see.
- **B.S. entry:** Fine as written. No need to add coursework unless a posting asks for it or it fills a specific skills gap.

### Sunrise Bakery

- **Role and placement:** Keep the experience if you want to show current employment, but consider reducing its prominence or detail for a quant application. It currently leads the experience section and can cause a recruiter to misread your current career direction.
- **Opening-shift/team bullet:** The management responsibility is clear, but “keeping the store within its weekly labour budget” gives no scale or outcome beyond meeting budget. Decide whether this is worth space in a quant résumé; standardize spelling to the target region if you retain it.
- **Stock-count/supplier-order bullet:** The reduction from 12% to 7% is useful, but define what “unsold bread” means and the measurement period. Without that, the result is hard to assess.

### Northpeak Capital

- **Order-book signal bullet:** Strong and highly relevant. Before using it, verify the Sharpe figures, how the signal’s contribution was isolated, and what “the desk book’s Sharpe” refers to. A reader may question whether an intern-built signal alone caused the full change.
- **Turnover/smoother bullet:** Relevant and well quantified. Clarify the basis for “90% of gross returns” and label the slippage reduction as estimated, since you describe it as an estimate. Make sure the turnover and performance comparisons use the same period and assumptions.
- **Diebold–Mariano bullet:** Good evidence of statistical testing. State the forecast metric and, if relevant, whether results were significant and how you handled testing across 30 indices. Otherwise, “confirmed” may sound stronger than the evidence supports.
- **Feature-store bullet:** Fix the sentence construction: its opening gerund makes the relationship between the data-joining work and the main action awkward. Also clarify your individual ownership and what “reused in two later projects” means in practice.
- **Annualized-Sharpe bullet:** **Resolve or remove this before applying.** For a daily Sharpe under the usual independent-return assumption, annualization uses the square root of 252, not 252 itself. If you used a different quantity or convention, explain and verify it; as written, it signals a basic financial-math error.
- **Research-wiki bullet:** Useful evidence of documentation and handoff, but less valuable than the research results. Keep it only if space permits or if documentation and team onboarding matter to the posting.

### Ridgeway University research assistant role

- **Simulation-pipeline bullet:** Strong, specific, and relevant to research engineering. Preserve the reproducibility detail. If possible, make clear what part of the speedup came from your work.
- **Sparse-regression/JASA bullet:** A strong research credential. Make your author role clear and ensure the paper’s status is accurate and current. The reader should not have to infer whether this is a publication, submission, or work in progress.
- **Teaching bullet:** Quantified and credible, but teaching may be a lower priority than research for industry roles. Keep it if it demonstrates communication or if you have room.
- **R-package/other duties bullet:** It combines an open-source result with cluster maintenance, reading-group organization, and grading. Those are several different claims competing for attention. Give the package’s adoption evidence more prominence and reduce or separate supporting responsibilities where appropriate. Ensure the download count is accurate and its source is defensible.

### Projects

- **Volatility Forecasting Study — first bullet:** Relevant and quantified. Explain enough about the evaluation setup to distinguish this result from the internship’s HAR-RV comparison, and clarify whether the 30 indices and evaluation period are shared across project bullets.
- **Volatility Forecasting Study — second bullet:** Check the arithmetic. A change from 0.20 to 0.15 is a **25% reduction** from the stated starting value, not 33%. Also resolve how this result relates to the first bullet’s 7% QLIKE improvement. As written, the bullets risk looking like inconsistent versions of the same result.
- **Volatility Forecasting Study — third bullet:** This appears to repeat the same model and data scope as the first bullet. Keep distinct outcomes only if they show meaningfully different evidence; otherwise the repetition dilutes the stronger result.
- **Kaggle placement bullet:** Strong external validation. “41st of 2,900” and “top 2%” are consistent, though the rank itself is more informative. Keep the competition context clear enough that the result can be understood.
- **Time-grouped-folds bullet:** Demonstrates awareness of leakage, which is valuable. Clarify the meaning of the 0.02 gap and avoid implying that validation leakage was fully eliminated unless that is what you verified.
- **Feature-selection bullet:** Useful technical detail, but it overlaps with the competition bullet’s feature-engineering story. Keep it if it shows a separate contribution; otherwise prioritize the placement and leakage-control evidence.

### Skills

- **Methods:** Correct the misspelling of “econometrics.” “High-dimensional statistics” is relevant, but the current list doesn’t show the specific methods behind your projects. Add more detail only where it is accurate and useful for target roles.
- **Programming:** Python and R are supported elsewhere. Kafka is less self-explanatory in this context; indicate its relevance through experience or remove it if it is not important to the roles you want.
- **Organization:** The skills section would be easier to scan if tools, methods, and domain areas were distinguished. Don’t add SQL, C++, or other common quant keywords unless you can support them in an interview.

### Missing or underemphasized elements

- There is no **summary/profile** to identify you immediately as a quant researcher and connect statistical research to trading applications. Consider whether one would help for your target roles; keep it evidence-based rather than generic.
- There is no separate **publications** section. Since the JASA paper is a meaningful credential, decide whether listing it separately would make it easier to find; clearly mark its current status and your authorship.
- The résumé does not establish **live or deployed strategy experience**. If you have it, make it explicit. If you don’t, avoid wording that could make backtests sound like realized desk performance.
- No immigration or work-authorization information is shown. Include it only if the application requires it.

## Eight-dimension scoring

These scores are provisional because there is no specific job description, and I can’t assess layout or verify claims from plain text.

| Dimension | Score | Weight | Weighted | Notes |
|---|---:|---:|---:|---|
| ATS keywords | 6.5/10 | 15% | 0.98 | Good quant-research vocabulary; no posting-specific match possible |
| Summary | 4/10 | 10% | 0.40 | No summary or immediate career framing |
| Skills section | 6/10 | 10% | 0.60 | Relevant tools and methods; typo and limited detail |
| Bullet quality | 5.5/10 | 25% | 1.38 | Strong metrics, offset by arithmetic/credibility issues and repetition |
| Publication selection | 5.5/10 | 10% | 0.55 | JASA-under-review work is promising but difficult to find and assess |
| Narrative coherence | 6.5/10 | 15% | 0.98 | Clear quantitative strengths, but bakery role leads and projects overlap |
| Page fill & visual | 6/10 | 5% | 0.30 | Cannot evaluate layout, pagination, or visual hierarchy from pasted text |
| Credibility signals | 4/10 | 10% | 0.40 | Strong venues and metrics, but the Sharpe claim and improvement arithmetic need correction |
| **Total** |  | **100%** | **5.6/10** | Provisional; fix factual and mathematical issues before polishing |

## Interview likelihood

These are low-confidence estimates for a **generic quant-research role**, not predictions for a specific posting.

| Reader | Estimated likelihood | Main factor |
|---|---:|---|
| ATS | 55% | Relevant quant terms are present, but role-specific requirements are unknown |
| Recruiter | 50% | Ph.D. and internship help; current bakery role leads the experience section |
| HR screen | 45% | Relevant background, but no summary and a potentially alarming calculation |
| Hiring manager | 35% | Strong research material, but metric validity and attribution need clarification |
| Technical panel | 30% | Could rise substantially if the metrics and methodology withstand scrutiny |

**Ceiling estimate:** Current résumé **5.6/10** → approximately **6.8–7.3/10** after fixing the quantitative issues, removing redundancy, and strengthening role framing. A hard ceiling cannot be judged without the target posting; live-trading or implementation requirements could be a structural gap.

## Actionable improvements, ranked

### Tier 1 — do these first

1. **Verify or remove the Sharpe annualization claim.** As written, it uses the wrong standard annualization factor and could undermine the whole résumé’s credibility.
2. **Reconcile the volatility project’s metrics.** The 0.20-to-0.15 change is 25%, not 33%, and the relationship between that result and the separate 7% QLIKE result is unclear.
3. **Remove or consolidate overlapping project bullets.** Repeatedly describing the same model, dataset, and period makes the evidence look padded rather than stronger.
4. **Clarify the internship results’ attribution and assumptions.** Distinguish estimated from realized slippage, define the return-retention metric, and explain the backtest basis sufficiently for a technical reader.
5. **Fix the feature-store bullet’s grammar and ownership.** Its current construction is awkward and makes your contribution harder to understand.
6. **Improve the opening impression for quant roles.** The bakery role currently heads the experience section; make sure the first screen communicates your quantitative identity and strongest relevant evidence.

### Tier 2 — worthwhile if accurate and space allows

1. Make the JASA paper’s authorship and under-review status unmistakable.
2. Clarify the Diebold–Mariano comparison’s metric, significance, and testing scope.
3. Separate the R-package achievement from unrelated lab duties so the adoption evidence is visible.
4. Add relevant implementation or research skills only if you can substantiate them.
5. Define the bakery inventory metric and measurement window if you retain the bullet.
6. Consider a concise summary and/or separate publications section if the final layout supports them.

### Tier 3 — lower priority

1. Standardize regional spelling.
2. Reconsider whether Kafka belongs in the skills section without context.
3. Trim lower-priority teaching or documentation detail only if you need space after higher-impact corrections.

**Verdict:** Fix the quantitative inconsistencies and credibility risks first. Then improve the first-screen framing and remove redundancy. Cosmetic polishing should come last.

## Interview bridge points

I’m not providing scripted lines or sample rewrites, as requested. Use these as the ideas to connect verbally:

| Résumé topic | Connection to quant-research work |
|---|---|
| Order-book imbalance signal | Explain the path from market-microstructure features to a testable signal, and how you separated signal quality from execution and portfolio effects. |
| Cost-aware position smoothing | Discuss the trade-off between turnover, transaction costs, and retained returns, including how the cost estimates were formed. |
| Diebold–Mariano testing | Describe how you compared forecasts, selected the evaluation metric, and interpreted results across multiple indices. |
| Reproducible simulation pipeline | Connect reproducibility and runtime improvements to faster, more reliable research iteration. |
| Sparse-regression result | Explain the statistical contribution and your specific role in the paper. |
| Volatility-forecasting project | Distinguish each evaluation metric and describe how you avoided leakage and maintained a valid out-of-sample test. |
| Kaggle competition | Connect time-aware validation and feature selection to robust financial modeling, while explaining the limits of competition results. |

**Mechanical notes:** The pasted text contains no em-dashes and no obvious banned buzzwords. I can’t check page count, typography, bullet wrapping, or source-file compilation from the plain text.