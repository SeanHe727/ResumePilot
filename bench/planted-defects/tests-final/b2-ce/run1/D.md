# Résumé critique

**Assumed target:** applied ML / LLM-agent engineering, inferred from the experience and project sections. There’s no job description, so I can’t assess exact ATS match, role-specific keywords, or company fit. I’m reviewing only the text provided; I can’t verify the metrics or assess page layout.

## Overall assessment

You have strong technical material: measurable latency and memory improvements, agent evaluation work, and production-facing systems experience. The main problems are **repetition, one vague project bullet, a duplicated backlog claim, and limited context around several metrics**. The résumé also lacks a summary or headline that tells a recruiter what role you’re targeting.

## Changes to make, section by section

### Header

- **Remove the date of birth.** It is not useful for assessing your engineering qualifications and can invite irrelevant bias.
- **Consider removing nationality unless it is specifically needed.** If work authorization is relevant to an application, provide that information in the form the employer requests rather than volunteering nationality here.
- **Make sure the code link leads directly to a professional portfolio or relevant work.** A link that doesn’t quickly demonstrate your technical contributions adds little.
- **Add a target-role headline or brief summary.** The résumé currently opens with education, so a recruiter has to infer whether you’re targeting ML engineering, agent engineering, robotics, or general software engineering. Your strongest evidence points toward applied ML/agent systems.

### Education

- **Keep the expected graduation date clearly marked as expected**, as you have done.
- **Consider adding GPA only if it is strong and relevant.** Otherwise, the current education details are sufficient.
- **Check that the degree and institution names are the official versions.** Nothing in the text itself signals an issue.

### Mobility Systems Company — Machine Learning Engineering Intern

- **First bullet:** Keep the diagnostic-accuracy result, but give enough context to make the 35% meaningful—especially the baseline or evaluation setup, if you can do so accurately. “Accuracy” can refer to different measures, so a reader may wonder what improved.
- **Second bullet:** The architecture and disagreement reduction are compelling. Clarify, if the underlying facts support it, how disagreement was measured and over what evaluation set. Without that context, 14% to 6% is difficult to interpret.
- **Third bullet:** This is a strong technical bullet with a clear method and two outcomes. Preserve the distinction between the SFT comparison and the equal-accuracy condition; those details help make the result credible. If space permits, give the reader a sense of the evaluation scale.
- **Fourth bullet:** The evaluation harness is relevant, but “catching 2 accuracy regressions” would be stronger with context about what qualified as a regression or why catching them mattered. As written, the impact is plausible but somewhat underspecified.
- **Fifth bullet:** This repeats the assistant-only loss-masking work already described in the first bullet and adds no outcome. Remove it or use the space for a distinct, substantiated contribution.
- **Sixth bullet:** This is a high-value production-impact claim. Keep it, but ensure the 68% backlog reduction is clearly attributable to this work and that the time period is easy to understand. The same backlog result appears again under Projects, so don’t present it as two separate accomplishments unless they are genuinely distinct.

### Eastern Robotics Co. — Junior Software Engineer

- **First bullet:** The 4× GPU-memory reduction is clear and relevant. If available, include the context that makes the comparison interpretable, such as the model or fine-tuning setup. Avoid implying a broader performance improvement if the demonstrated result is memory use.
- **Second bullet:** This is one of the clearest bullets: it provides before-and-after latency and a concrete regression safeguard. If the load-test conditions materially affect the result, state them.
- **Third bullet:** Fix the tense inconsistency: the bullet shifts from past-tense “Maintained” to present-tense “adds.” Also clarify what “release cycles to 3 days” measures and what the previous cycle length was, if you have that information.
- **Fourth bullet:** The migration gives useful scale and technical detail. The operational benefit is plausible, but “removing the nightly backlogs” is not quantified. Add a measure only if you have a reliable one; otherwise, make sure the extent of the improvement is clear without overstating it.

### Projects

#### Agent Runtime Suite

- **First bullet:** This is the weakest bullet in the résumé. “Drove adoption,” “AI-first,” “accelerating delivery,” and “improving outcomes” are broad claims without evidence. Replace it with a specific, verifiable contribution and outcome, or remove it.
- **Second bullet:** The stress-test result is distinctive. Clarify what “raw conversation grew 100×” means in measurable terms; otherwise readers may not know what was compared. Keep the test conditions clear enough to support the under-10K-token claim.
- **Third bullet:** This is technically specific and has a clear failure mode. If possible, make the scale or test conditions more interpretable; “50-way fan-out” is useful, but the reader may still wonder how the failures were detected and compared.

#### Research-Agent Evaluation Framework

- **First bullet:** This establishes a concrete contribution, but “integrated” does not show whether you implemented, adapted, or connected the metrics. Make your level of contribution clear, especially since your role is identified as “Contributor.”
- **Second bullet:** The correlation result and trial count are useful evidence. Explain what the reported correlation means in this evaluation context, or be prepared to do so in an interview. Make sure the claim accurately reflects your contribution to the study and framework.
- **Third bullet:** This repeats the pending-case backlog result from your internship section. Remove the duplicate unless this is a separate result from a distinct system or project; if it is separate, make that distinction unmistakable. Repeating the same metric makes the résumé look padded and creates attribution questions.
- **Clarify the relationship between this project and your internship.** The dates overlap, which is entirely plausible, but a reader may wonder whether this was independent open-source work, part of the internship, or another collaboration.

### Skills

- **Expand the section selectively.** It currently has only a few tools and broad labels, while the experience bullets demonstrate additional relevant methods and systems work. Include only skills you can substantiate and discuss in an interview.
- **Make “agent evaluation” more specific if possible.** As written, it is broad and difficult to distinguish from general familiarity.
- **Keep the grouping aligned with the roles you’re applying for.** The section should make your ML/agent engineering fit apparent, not just list a few programming languages and libraries.

## Domain and hiring-reader assessment

Since there’s no job description or named employer, the following is a **general assessment for applied ML/LLM-agent engineering roles**, not a company-specific one.

- **Likely reviewer:** An ML engineering manager or technical recruiter screening for evidence that you can evaluate and ship model-based systems, not just experiment with them.
- **What is likely to stand out:** The combination of agent/tool-use work, evaluation, latency and memory improvements, and robotics/industrial systems.
- **What may cause doubt:** Duplicate claims, the vague “AI-first” bullet, limited detail behind some metrics, and uncertainty about the division between internship and project work.
- **Competitive gap:** Candidates with direct production ownership of LLM-agent systems may have an advantage. Your résumé can help bridge that gap by making your system scope, evaluation design, deployment setting, and individual contribution explicit—without implying experience you did not have.

### Five-perspective read-through

- **ATS:** Exact keyword match cannot be scored without a job description. The résumé does contain relevant terms for an inferred agent/ML target, including GRPO, LoRA, PyTorch, evaluation, latency, and multi-agent systems.
- **Recruiter glance:** **Maybe / likely forward if the target is ML or agent engineering.** The technical direction is present, but there is no short summary to make it obvious immediately.
- **HR screen:** **Likely phone screen for a relevant role.** The degree and experience are clear, but a summary would help connect them to the target.
- **Hiring manager:** **Maybe to interview.** The measurable engineering work is promising; duplication and unclear attribution are the main preventable concerns.
- **Technical reviewer:** **Interested, with follow-up questions.** Expect questions about evaluation datasets, metric definitions, baselines, your individual role, and how the reported improvements were measured.

## Provisional scoring

These scores are directional only because the target job and visual file are unavailable.

| Dimension | Score | Notes |
|---|---:|---|
| ATS keyword fit | Not scorable | Requires a specific job description. |
| Summary | 4/10 | No summary or target headline. |
| Skills | 6/10 | Relevant foundation, but sparse and broad. |
| Bullet quality | 7/10 | Good metrics and technical substance; repetition and vague claims weaken it. |
| Publications | N/A | No publication section; not necessarily needed for the inferred industry target. |
| Narrative coherence | 7/10 | Strong technical direction, but the target role and project attribution could be clearer. |
| Page and visual presentation | Not scorable | Plain text does not show formatting, page count, or line breaks in the final document. |
| Credibility signals | 7/10 | Strong quantified work, but several claims need more measurement context. |

## Priority changes

### High impact

1. **Remove the duplicate assistant-only loss-masking bullet.** It repeats an existing accomplishment without adding evidence.
2. **Resolve the repeated 68% backlog claim.** Keep one instance unless the project and internship claims are demonstrably separate.
3. **Remove or substantiate the “AI-first engineering practices” bullet.** It currently offers no verifiable evidence.
4. **Add a concise target-role summary or headline.** This makes the intended fit clear at first glance.
5. **Fix the tense error and clarify the release-cycle result** in the CI bullet.

### Medium impact

1. Add measurement or evaluation context to the accuracy, disagreement, latency, and correlation claims where available.
2. Clarify your individual contribution to the evaluation framework and the relationship between that project and your internship.
3. Expand the skills section with relevant, demonstrable skills already supported by your experience.

### Cosmetic

1. Remove date of birth and consider removing nationality unless requested.
2. Check consistency in tense, terminology, and spelling conventions throughout.

## Interview bridge topics

These are topics to prepare—not suggested résumé wording:

| Résumé topic | Connection to explain in an interview |
|---|---|
| Tool-use fine-tuning and loss masking | How you validated model behavior and prevented training targets from teaching the wrong outputs. |
| Specialist-agent routing and independent review | How you controlled information flow and measured agreement or disagreement. |
| GRPO and tool-call reduction | How the reward design affected efficiency, and how you checked that accuracy did not degrade. |
| Evaluation harness and adapter comparisons | How you selected metrics, designed comparisons, and acted on detected regressions. |
| Industrial diagnostics triage | How the system fit into an operational workflow and how backlog reduction was measured. |
| Runtime context management and concurrency | How you tested memory/context constraints and handled failures under fan-out. |
| Robot-fleet migration and API optimization | How reliability, latency, and operational requirements shaped the implementation. |

**Bottom line:** The underlying experience is stronger than the current presentation. Remove repetition, clarify what each metric means, make your ownership and project relationships easier to follow, and state your target role up front.