# Résumé critique

**Assumed target:** Quantitative researcher / systematic trading researcher, inferred from the Northpeak Capital internship and the finance projects. Without a job description, this is a general review—not a company-specific or JD-matched critique.

## Overall assessment

You have strong, relevant evidence for quantitative research: futures signals, out-of-sample testing, transaction costs, market microstructure, statistical methods, and research communication. The main problems are **credibility and clarity**, not a lack of relevant experience:

1. A parameter-selection bullet may undermine confidence in the out-of-sample results.
2. The same 18-month order-book signal result appears in both the internship and the competition project.
3. The strongest Northpeak result is near the bottom of that section.
4. The résumé has no summary, and the skills section has a spelling error and limited evidence for some listed tools.

Resolve the first two issues before polishing wording or adding keywords.

## Target-role lens

A likely reader is a quant-research hiring manager or portfolio manager. They will look for evidence that you can develop a signal, test it without leakage or overfitting, account for costs and capacity, and explain its limitations. They will be familiar with Sharpe ratios, backtests, and order-book features; those terms alone won’t distinguish you. They’ll want to understand **how the results were validated and whether they held up outside the selection process**.

I can’t assess a particular employer, extract actual job-description priorities, or reliably score ATS compatibility without a JD. The résumé itself suggests a strong methods fit, but direct professional experience is limited to one short internship.

## Changes to make, section by section

### Education

- **Ph.D. candidate line:** Keep the expected completion date. Make sure it is still accurate when you submit the résumé; the date will be an important consideration for roles with a start-date requirement.
- **B.S. line:** No clear change needed. If you need space, this is less important than preserving the quantitative research evidence.

### Sunrise Bakery — Assistant Store Manager

- **Opening-shift/team/budget bullet:** Clarify the scale or outcome of the budget responsibility if you have meaningful evidence for it. As written, “keeping the store within its weekly labour budget” is a responsibility claim, while the other bullets emphasize measurable results.
- **Stock-count/supplier-order bullet:** This is a concrete operational result. Make sure the 12%-to-7% comparison has a clear basis and that it was attributable to your changes. Retain it if it helps explain your current role; otherwise, this experience takes attention away from your target field and may be shortened.

### Northpeak Capital — Quantitative Research Intern

- **35% risk-adjusted returns bullet:** Specify what the 35% measures, what it is compared with, and the test period and evaluation setting. Without that context, a large performance improvement is difficult to interpret.
- **Six years of tick data / purged walk-forward validation bullet:** This is valuable evidence of validation discipline. Keep it close to the performance claim it supports. Be prepared to explain the split design and how the embargo addressed leakage.
- **Feature-store bullet:** Keep the point-in-time join detail; it signals awareness of look-ahead bias. Clarify your contribution and what “reused in two later signal projects” means, since that is stronger evidence of impact than simply building the store.
- **Presentation/live-allocation bullet:** Keep this. It demonstrates communication and that the work received a real decision-maker response. Make clear whether the allocation followed a research review and what “small” means if that detail can be shared.
- **400-configuration selection / expected live Sharpe bullet:** Revisit this before submitting. Reporting the best Sharpe selected from 400 configurations as the expected live Sharpe can read as treating a selected backtest result as a forward expectation. That raises overfitting and credibility concerns, especially beside claims of out-of-sample validation. Keep the claim only if you can clearly distinguish the selection data from an untouched evaluation set and support the live expectation; otherwise, remove or substantially rethink this point.
- **Order-book imbalance signal / Sharpe 1.1 to 1.5 bullet:** Move this higher within the internship section if it is a distinct, well-supported result. Clarify whether it is the same signal and the same 18-month test reported in the Kaggle section. If it is the same work, don’t present it twice as though it were separate evidence. Also make the Sharpe comparison and testing period directly interpretable.

**Ordering:** Once you resolve the overlap between the two performance claims and the parameter-selection concern, put the clearest, best-validated research outcome first. Keep supporting validation and implementation evidence near that outcome.

### Ridgeway University — Research Assistant

- **Monte Carlo speed-up bullet:** The result is compelling, but “the same random seed on every worker” may raise a technical concern: identical seeds can produce duplicated or correlated random streams. Verify that this accurately describes the implementation and that the study preserved independent random streams and valid replication. If it does not, correct the underlying description before using the speed-up claim.
- **Variance-bound / JASA bullet:** Keep the contribution and the paper’s status explicit. Be ready to explain your role in the proof and what “tightens the previous bound by a log factor” means. “Under review” is an appropriate status; don’t imply acceptance or publication.
- **Teaching bullet:** It demonstrates communication and responsibility, but is less central to quant research. Retain it if space permits; prioritize research evidence if you need to cut.
- **R package / downloads bullet:** Keep this. It shows you shipped usable research software and gives a scale signal. Be prepared to substantiate the download count and explain how you measured it.

### Projects

#### Volatility Forecasting Study

- **QLIKE result bullet:** Strong and relevant. Make sure the baseline, evaluation period, and forecasting setup are clear enough to interpret the 7% improvement. Avoid implying that results across 30 indices establish general performance beyond those tests.
- **Significance-testing bullet:** Keep the multiple-testing detail; it adds credibility. Be ready to explain the testing procedure and how you identified the crisis periods.
- **Working-paper/seminar bullet:** This helps show follow-through, but distinguish a departmental seminar presentation from an external conference or publication. The 12-page length itself is less persuasive than the work’s status and audience.

#### Kaggle Market Prediction Competition

- **Feature/model bullet:** This is currently generic compared with your other bullets. It needs a specific result or contribution to earn space; otherwise, it adds little beyond the project title.
- **Validation-leakage bullet:** Keep the time-grouped-fold detail. Explain how you measured the 0.02 gap and why closing it improved confidence in model evaluation.
- **Order-book signal / 18-month result bullet:** This appears to repeat the Northpeak internship result. Determine whether this was genuinely separate work, a project that later informed the internship, or the same result described twice. Make the timeline and ownership clear, and keep the result only where it can be represented accurately as distinct evidence.

### Skills

- Correct the spelling error in **“time-series econometircs.”** A typo in a skills keyword can hurt both credibility and search matching.
- Check that **Kafka** is supported by enough practical experience to discuss in an interview; it currently has no supporting example in the résumé.
- Consider whether the skills section should make your most relevant methods and finance experience easier to find. Currently, your bullets carry much of that evidence, while the section itself is brief.
- Keep tool and method claims at a level you can defend with specific examples. Don’t add tools such as SQL or C++ just because they may appear in quant postings unless you have real experience.

### Overall structure

- Consider adding a concise summary or role-focused heading. The résumé currently starts with education, so a reader has to infer your target from the experience section. If you add one, it should clarify your quantitative-research direction and evidence—not make unsupported claims.
- The résumé’s strongest narrative is statistical research applied to systematic finance. Make that thread apparent earlier and keep the bakery role from overshadowing it.
- I can’t assess page balance, line breaks, or whether the résumé is one or two pages from plain text alone.

## Five-perspective read-through

### ATS-style scan

A provisional scan against common quantitative-research concepts—not keywords from a specific JD:

| Term or concept | Résumé evidence |
|---|---|
| Quantitative research | Present |
| Futures | Present |
| Time-series methods | Present, including a misspelling in Skills |
| Backtesting | Present |
| Out-of-sample evaluation | Present |
| Transaction costs | Present |
| Market microstructure | Present |
| Order-book signals | Present |
| Risk-adjusted performance | Present |
| Sharpe ratio | Present |
| Point-in-time data | Present |
| Statistical validation | Present |
| Machine learning | Present |
| Python | Present |
| R | Present |
| Portfolio capacity | Partial |
| Execution or market impact | Not evident |
| C++ | Not listed |
| SQL | Not listed |
| Live-trading performance | Partial; an allocation is mentioned, but realized results aren’t given |

The résumé has good vocabulary for quant research, but this is not a meaningful ATS match rate without the actual posting.

### Recruiter glance

**Verdict: Maybe to forward.** The quantitative internship and Ph.D. are relevant, but the résumé has no headline or summary to immediately frame the bakery role and the transition back to quantitative research.

### HR screen

**Verdict: Borderline to phone screen.** The education and internship appear relevant. The main concerns are how the repeated trading result is attributed and whether the résumé clearly establishes your current career direction.

### Hiring manager

**Verdict: Maybe; potentially interview-worthy after credibility issues are resolved.**

1. The signal research and validation work is directly relevant.
2. The 400-configuration selection claim could make the performance evidence seem less reliable.
3. The repeated 18-month order-book result needs explanation.

**Likely first question:** How did you separate parameter selection from final evaluation when reporting the Sharpe results?

### Technical reviewer

**Truthfulness:** Metrics, publication status, adoption claims, and performance results cannot be independently verified from the résumé text.  
**Technical concern:** The seed description in the Monte Carlo bullet needs verification. The parameter-selection bullet needs a clear validation explanation.  
**Consistency:** The order-book result appears in two places; clarify whether it is duplicated or genuinely separate.

## Provisional scoring

These scores assess the résumé for the **inferred** quant-research target, not a specific job. Visual design cannot be reliably judged from plain text.

| Dimension | Score | Weight | Notes |
|---|---:|---:|---|
| ATS keywords | 7/10 | 15% | Relevant terminology; no JD-specific comparison |
| Summary | 6/10 | 10% | No summary or target framing |
| Skills section | 6/10 | 10% | Relevant foundations, but typo and limited detail |
| Bullet quality | 7/10 | 25% | Strong metrics and methods; credibility and duplication issues |
| Publications | 7/10 | 10% | Under-review paper and working paper; limited publication record |
| Narrative coherence | 6.5/10 | 15% | Strong quant thread, but it starts late and the current role distracts |
| Page fill and visual | Not assessable; provisional 5.5/10 | 5% | Layout and page count unavailable |
| Credibility signals | 7.5/10 | 10% | Ph.D., JASA review, software release, and internship; some claims need clarification |
| **Provisional total** | **~69/100** | **100%** | The score is limited by missing JD and layout information |

## Interview likelihood

These are directional estimates, not calibrated probabilities; a specific JD could change them substantially.

| Reader | Estimated chance of progressing | Main factor |
|---|---:|---|
| ATS | Not estimable | No JD to compare against |
| Recruiter | 50–65% | Relevant Ph.D. and internship, but no summary and a non-quant current role |
| HR screen | 45–60% | Quantitative qualifications are visible, but role direction and timeline may invite questions |
| Hiring manager | 40–60% | Relevant signal research, offset by validation and duplicate-result concerns |
| Technical panel | 35–55% | Strong methods evidence, but the seed and parameter-selection details need to withstand scrutiny |

## Ranked changes

### High impact

1. **Resolve the 400-configuration / expected-live-Sharpe claim.** It currently risks undermining trust in the rest of the backtest evidence.
2. **Resolve the repeated 18-month order-book result.** Establish whether the internship and project describe the same work and make ownership and timing unambiguous.
3. **Verify the Monte Carlo random-seed description.** A technically questionable explanation can distract from an otherwise strong performance result.
4. **Reorder the Northpeak bullets after resolving those issues.** Put the clearest and best-validated result first, with the evidence supporting it nearby.
5. **Correct the Skills typo.** It is an easy fix with outsized potential to make the document look careless.

### Medium impact

1. Clarify the 35% performance measure, comparison, time period, and evaluation setting.
2. Add a concise target-role summary or heading if it accurately reflects your experience.
3. Make the competition feature-engineering bullet more informative or remove it if it has no distinct result.
4. Clarify the bakery budget claim and the basis for the unsold-bread reduction.
5. Reassess whether Kafka belongs in Skills without supporting evidence elsewhere.

### Cosmetic / lower priority

1. Use consistent spelling conventions throughout. The U.S. location alongside “labour” may look inconsistent.
2. If space is tight, reduce less role-relevant teaching or bakery detail before cutting the strongest research evidence.
3. Check that the JASA status, download count, and allocation claim remain accurate and precisely represented.

**Verdict:** Fix the validation, attribution, and technical-accuracy issues first. Then improve the role framing and ordering. Minor polish is secondary.

## Interview preparation: bridge points to explain verbally

- **Futures signal research:** Explain how your statistical training informed signal construction, validation, and interpretation.
- **Purged walk-forward testing:** Be prepared to describe the leakage risks the splits addressed and how you protected the evaluation period.
- **Point-in-time feature store:** Explain why point-in-time joins matter in trading research and how the team reused the infrastructure.
- **Volatility forecasting:** Describe what the QLIKE comparison and multiple-testing correction establish—and what they do not establish.
- **Variance-bound research:** Explain your personal contribution and how the mathematical result relates to practical model behavior.
- **Bakery operations:** If asked about the current role, connect it to operational ownership without suggesting it is quantitative-finance experience.

### Checks I could not perform

Without the source file, job description, or supporting records, I could not verify layout, page count, metrics, publication metadata, or ATS fit. No cover letter was provided.