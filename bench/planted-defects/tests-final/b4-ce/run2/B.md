## Highest-priority changes

1. **Remove your date of birth and nationality.** They are generally unnecessary on a North American resume and can introduce privacy and bias concerns. If work authorization is relevant, state that separately and only if it helps your application.
2. **Remove duplicated or conflicting accomplishments.** The assistant-only loss-masking claim appears twice in the Mobility Systems role, and the sensor-triage backlog claim appears in both Experience and Projects.
3. **Make the target role clearer.** Your resume spans mechanical design, robotics software, and ML/agents. For each application, emphasize the most relevant work and explain any details that might otherwise seem surprising—especially your current mechanical design role alongside a computer engineering master’s program.
4. **Define the metrics behind your strongest claims.** Several percentages lack a stated baseline, evaluation set, or measurement period. Without that context, readers may not know what the numbers mean.

## Header and education

- **Contact details:** Make sure the code portfolio link works, is professional, and leads directly to relevant work. Consider adding a LinkedIn profile if it supports your application.
- **Date of birth and nationality:** Remove both, as noted above.
- **M.S. entry:** Keep the expected completion date clearly marked as expected. If you are applying for roles in a different country from your university, make your location or relocation status clear elsewhere if relevant.
- **B.S. entry:** The location format differs from the M.S. entry. Use a consistent city-and-country format throughout.
- **Dates across education and employment:** The master’s program overlaps with the internship and current job. That can be entirely valid, but clarify the arrangement if the dates and locations could make the work history seem implausible—for example, if a role was part-time, remote, or otherwise concurrent with study.
- **Overall relevance:** For ML or software applications, the electrical engineering degree is relevant, but the mechanical-design role may need context. For mechanical roles, the reverse may be true. Tailor what you emphasize rather than presenting every experience as equally central.

## Experience

### Lakeside Auto Parts — Mechanical Design Engineer

- **“Designed stamping dies…”** The scrap-rate result is useful. Clarify the measurement period or comparison basis so readers can interpret the change; also distinguish the percentage-point change from the relative reduction if you report either.
- **“Ran tolerance stack-up analyses…”** The number of parts gives scope, but the outcome is unclear. Explain what the analyses or first-article sign-offs enabled or prevented, if you can support that claim. Make your responsibility in the supplier sign-off process precise.
- **Role and timeline:** Because this is a mechanical design role while you are pursuing a computer engineering degree and have recent ML experience, make sure the dates, location, and employment arrangement are accurate and easy to understand.

### Mobility Systems Company — Machine Learning Engineering Intern

- **“Improved diagnostic accuracy by 35%…”** State whether this is a relative or absolute increase and what evaluation set, baseline, or metric supports it. “Validated tool-use trajectories” and “assistant-only loss masking” are specialized terms; retain them if they matter to your target roles, but ensure the result is understandable without assuming the reader knows your training setup.
- **“Designed a routing layer…”** Clarify how “reviewer disagreement” was measured and over what sample. A lower disagreement rate is not automatically better, so explain why the reduction indicates an improvement. The scope of the agents and their “in-scope signals” could also be more concrete.
- **“Trained the triage agent with GRPO…”** This is technically detailed, but the key evidence is spread across several clauses. Make the benchmark or test conditions behind “equal accuracy” clear, and clarify how calls per case and latency were measured. Check that the stated accuracy comparison is meaningful for the same workload and evaluation set.
- **“Wrote the evaluation harness…”** This is a strong, specific contribution. Clarify what counted as an accuracy regression and whether the two regressions were caught before deployment or release. The 14-checkpoint figure is useful if the comparison process is central to your target role.
- **“Fine-tuned the adapter with assistant-only loss masking…”** This repeats the technique already mentioned in the first bullet. Remove the duplication or retain only the distinct contribution; as written, it reads like the same work is being claimed twice. Also verify that the stated purpose accurately describes what the masking changed during training.
- **“Built a diagnostics triage branch…”** The scale and backlog result are strong, but the backlog claim is duplicated in the Research-Agent project below. Keep the result in only the most appropriate place. Clarify the backlog measurement period and how the triage branch contributed to the reduction; “ML-extracted features” is broad unless the reader can infer what role the features played.

### Eastern Robotics Co. — Junior Software Engineer

- **“Cut GPU memory…by 4x…”** Clarify whether memory use fell to one-quarter of its prior level or whether you are using “4x” another way. Because changing from FP32 to BF16 alone may not explain a fourfold change in every setup, make sure the measurement and attribution are defensible.
- **“Reduced p95 API latency…”** This has a clear before-and-after measure and a concrete implementation. Add the load-test conditions if they are important to interpreting the result; otherwise the 200 ms build threshold already gives useful context.
- **“Maintained the CI pipeline…and adds…”** Fix the tense inconsistency: the other bullets describe completed work, but this one switches to present tense. Also define what “release cycles to 3 days” measures and the prior comparison point, if available.
- **“Migrated 30 robot-fleet services…”** The scope and operational benefit are clear. If possible, quantify the effect of removing the nightly backlog or clarify how it affected morning dispatch. Avoid implying you personally delivered the entire migration if it was a team effort.

## Projects

### Agent Runtime Suite

- **“Drove adoption of AI-first engineering practices…”** This is broad and difficult to verify. Either substantiate the adoption and outcome with concrete evidence or remove it. It is less informative than your technical bullets as written.
- **“Kept working context under 10K tokens…”** Clarify what “raw conversation grew 100x” compares and how context size was measured. If you have evidence that the system remained useful—not just within the token limit—make that evaluation visible.
- **“Separated concurrency pools…”** This is one of the more concrete project claims. Clarify the test conditions behind “50-way fan-out” and, if available, how you verified that deadlocks and lost tool results were eliminated.

### Research-Agent Evaluation Framework

- **“Integrated 8 citation and faithfulness metrics…”** Identify the framework or repository so readers can understand the project’s context and your contribution. Make clear whether you implemented the metrics, connected existing ones, or both.
- **“Showed the evaluator tracks injected degradation…”** Explain what the Kendall correlation is between—for example, which evaluator output and which degradation measure—and how the 400+ trials were constructed. The figure is compelling only if readers can interpret what it validates.
- **“Cut the pending-case backlog…”** This duplicates the sensor-triage result under Mobility Systems and appears unrelated to the research-agent evaluation project. Remove it from this project unless it was genuinely part of the project; if it was, clearly distinguish the work and outcome from the Experience claim.

## Skills

- **Programming:** The list is very short compared with the experience shown. Include relevant languages and tools only if you have actually used them and can discuss them in an interview. If you have substantial experience with systems, APIs, robotics, or design software, the current list does not show it.
- **ML & Agents:** These entries are broad. Make sure the skills section reflects the specific methods, frameworks, and evaluation tools you used in the bullets, rather than relying on general labels.
- **Consistency:** Use consistent naming and capitalization for tools and methods. Avoid adding skills solely to match a job posting unless you can substantiate them.

Finally, verify that every date is accurate and that any “Present” role or project is still active when you submit the resume.