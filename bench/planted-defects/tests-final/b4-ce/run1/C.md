Your strongest material is the measured ML, systems, and evaluation work. The main changes are to remove duplicated claims, clarify what each metric compares, and make the resume’s target role clearer. I’m not rewriting any lines below.

### Header and education
- **Date of birth and nationality:** Remove them unless a particular application requires them. They usually do not help a U.S. resume and take space from qualifications.
- **Code link:** Check that it leads directly to work you want an employer to review. A specific, working portfolio or repository is more useful than a general profile.
- **Education entries:** Replace any placeholder locations or institution names before applying. Keep the expected graduation date clearly marked so it cannot be mistaken for a completed degree.

### Experience
**Lakeside Auto Parts**
- **Scrap-rate bullet:** Clarify whether 6% to 4% means a two-percentage-point reduction, and how much of that change is attributable to your die design. That makes the result easier to assess.
- **Tolerance/inspection bullet:** Clarify your authority in “signed off” and, if possible, the outcome of the analyses. The current bullet describes responsibility more than impact.
- **Role as a whole:** If you are applying for ML or software roles, keep this section concise and give more space to directly relevant work. It is your current role, so it should remain visible.

**Mobility Systems Company**
- **Diagnostic-accuracy bullet:** Specify the metric and comparison behind the 35% improvement. “Accuracy” and “domain adapter” are too broad for a reader to judge the result.
- **Routing-layer bullet:** Explain what reviewer disagreement measures and whether 14% to 6% is on the same evaluation set. The access restriction is interesting, but its benefit needs a clearer basis.
- **GRPO bullet:** Name the evaluation conditions behind “equal accuracy,” and check that the latency and tool-call reductions are both attributable to this change. Keep the terminology only if you can explain it readily in an interview.
- **Evaluation-harness bullet:** Strong, concrete bullet. Clarify what constituted an accuracy regression or how the harness affected release decisions if space permits.
- **Second fine-tuning bullet:** Remove or substantially differentiate it: it repeats the first bullet’s assistant-only loss masking. Also check the claim that this masking taught the model to reproduce *tool outputs*; that mechanism may not support the conclusion as stated.
- **Triage-branch bullet:** Strong outcome, but clarify what “pending-case backlog” covers and whether the 68% reduction was measured against a stable baseline. Keep this claim here rather than repeating it under Projects.

**Eastern Robotics Co.**
- **GPU-memory bullet:** Verify what memory was measured and what else changed. A switch from FP32 to BF16 alone does not necessarily explain a fourfold reduction in total fine-tuning memory.
- **API-latency bullet:** Strong and well quantified. Make clear whether the 420 ms and 180 ms figures came from comparable load conditions.
- **CI bullet:** Change the present-tense “adds” to past tense for a role that ended in 2024. Clarify whether release cycles shortened *because of* the checks or whether that was a broader team result.
- **Event-queue bullet:** Good scope and mechanism. Quantify the dispatch or backlog improvement if you have reliable data; otherwise, the outcome is still useful.

### Projects
**Agent Runtime Suite**
- **“AI-first engineering practices” bullet:** Remove it or replace its subject matter with a specific contribution you can substantiate. Unlike the next two bullets, it does not say what you built or how the claimed improvement was measured.
- **Context-management bullet:** Define what stayed under 10K tokens—per request, agent, or another unit—and what “100x” compares. Otherwise the stress-test result is hard to interpret.
- **Concurrency bullet:** Strong technical detail. Clarify whether “removing” means you reproduced and eliminated the failures in tests or observed their elimination in production.

**Research-Agent Evaluation Framework**
- **Metrics-integration bullet:** Identify your own contribution if “integrated” involved work by multiple contributors. That matters particularly for an open-source project.
- **Kendall-correlation bullet:** Strong evidence. Specify what was ranked or correlated and whether the 400+ trials were independent report-level cases.
- **Backlog bullet:** Remove it from this project. It repeats the Mobility Systems triage claim and appears unrelated to the evaluation framework, which could make both entries less credible.

### Skills and final checks
- **Skills:** Match the list to the jobs you want. For ML/software applications, include relevant tools demonstrated in the bullets and omit skills you cannot discuss confidently. For mechanical roles, consider whether SolidWorks belongs here.
- **Dates and overlap:** The internship, master’s program, current engineering role, and projects overlap. That can be entirely legitimate, but check that the dates and employment arrangements are accurate and easy to explain.
- **Length and consistency:** After removing the two duplicate bullets and the vague project bullet, use the recovered space only for evidence that adds something new. Standardize spelling and tense throughout; the resume currently mixes “penalises” with U.S.-style context and has the past-role tense mismatch noted above.