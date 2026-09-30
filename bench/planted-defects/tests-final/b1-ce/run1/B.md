Your strongest material is the quantified engineering work. The main fixes are **chronology, a couple of metric inconsistencies, and bullets that are either vague or overloaded**. I’ll refer to each line rather than rewrite it.

## Header and education

- **Contact line:** Check that the code link goes directly to a polished, relevant portfolio or code profile. Add a professional profile link only if it strengthens your application; avoid links that are inactive or sparse.
- **M.S. line:** Keep the expected graduation date, and make sure the date format is consistent with the rest of the resume. If you have relevant coursework or a strong GPA, consider including it; otherwise, the line is sufficient.
- **B.S. line:** Consider adding GPA only if it is a selling point, especially for early-career roles. Otherwise, keep this concise.

## Experience

- **Section order:** Put the Mobility Systems internship before the Eastern Robotics job because it is more recent. Reverse-chronological ordering makes your current experience easier to find.
- **Eastern Robotics title and date line:** The role and dates are clear. Confirm that the title reflects your official title and that location formatting matches the internship entry.

### Eastern Robotics bullets

- **Diagnostics dashboards and on-call bullet:** Clarify what you owned: the dashboards, the rotation, or both. As written, the relationship between the dashboards and the rotation is hard to parse, and the accomplishment is not especially concrete.
- **Latency and caching bullet:** This is one of your strongest bullets. Clarify whether the before-and-after latency figures came from production or load testing, and state the measurement conditions if they matter. The build threshold is useful, but distinguish it from the achieved p95 result.
- **CI and release-cycle bullet:** Explain how the release-cycle duration was measured and how directly the regression checks caused the reduction. This helps the reader judge the size of your contribution.
- **Fleet migration bullet:** This combines migration, library work, onboarding, on-call responsibility, and backlog impact. Split or prioritize the accomplishments so the technical change and its outcome do not get buried. Also quantify the backlog improvement if you have a reliable figure.

### Mobility Systems internship bullets

- **Triage branch and backlog bullet:** Clarify what “diagnostics triage branch” means to an outside reader, and define the backlog comparison behind the 68% reduction—especially its starting point and measurement period. “ML-extracted features” may also need a little more context.
- **Accuracy bullet:** Specify whether the change from 71% to 79% is an eight-percentage-point gain, and retain the held-out evaluation detail. The methods are technically dense; make sure the key contribution and result remain understandable to a reader who does not know your training setup.
- **Edge-inference latency bullet:** Reconcile “single-request” inference with dynamic batching. Readers may wonder how batching affected the latency of a single request. State the workload and measurement conditions, and make clear whether the 40% change is latency, throughput, or another measure.
- **GRPO and end-to-end latency bullet:** This is grammatically incomplete because it starts with a method description but has no clear subject. It also overlaps with the previous latency bullet. Clarify how the two latency results differ, identify the measured baseline, and make the result—not the list of techniques—the focus. Expand specialized acronyms if your target audience may not know them.
- **Sparse-reward training bullet:** Explain what improved when training stabilized, ideally with a measurable result or a clear practical consequence. A single rollout per prompt may invite questions from technical reviewers, so state the reason for that choice and its effect accurately. Also standardize spelling: “Stabilised” is British English while the resume otherwise reads as US English.
- **Runbook bullet:** The adoption outcome is useful. Clarify your specific role in creating the rules and whether the runbook changed reviewer practice or operations in a meaningful way. If you have no further evidence of impact, keep the claim modest and precise.

## Projects

- **Agent Runtime Suite heading:** “Owner” is vague as a project role. Make your responsibility clear, and check that the dates accurately reflect when you began and whether the project is still active.
- **AI-first practices bullet:** This is currently the weakest bullet: “accelerating delivery and improving outcomes” is broad and unsupported. Replace the general claim with a specific practice and demonstrable result, or remove the bullet if you cannot substantiate it.
- **Tool-call latency bullet:** The math does not match: a change from 900 ms to 600 ms is a **33.3% reduction**, not 50%. Correct either the percentage or the figures. Also make clear how latency was measured and under what workload.
- **Task-completion bullet:** A change from 71% to 83% is a **12-percentage-point increase**, not a 12% relative increase. Label the metric accurately and include enough benchmark context for the result to be interpretable.
- **Evaluation framework contribution bullet:** Strong evidence of adoption. Clarify your authorship or contribution to the eight metrics and ensure “default benchmark for every release” is precise and still true.
- **Degradation-evaluation bullet:** Explain what the evaluator’s correlation was compared against and how the degradation trials were set up. “Tracks injected degradation” is broad; make clear what the correlation demonstrates. Confirm that the 400+ trials are counted and described consistently.
- **Pipeline-defects bullet:** “Structural pipeline defects” and “layered instrumentation” are vague to readers outside the project. Identify the nature of your contribution more clearly, and distinguish between defects you found, changes you made, and fixes made by others. Add downstream impact if you can support it.

## Skills

- **Programming line:** Git is a tool, not a programming language, so it does not fit cleanly under this heading. Separate languages from tools, and keep the list focused on skills relevant to the roles you are targeting.
- **ML & Agents line:** Kubernetes is infrastructure rather than an ML or agent technique; group it accordingly. Consider making broad entries such as “agent evaluation” more specific, and include other tools or frameworks only if you have used them enough to discuss confidently in an interview.

## Final checks

- Use consistent date, location, punctuation, and spelling conventions throughout.
- Check the final PDF for awkward line breaks, especially the split “on-call” text.
- Verify that every metric has a clear baseline, measurement context, and unit. The conflicting latency percentage is especially important to fix before sending the resume.