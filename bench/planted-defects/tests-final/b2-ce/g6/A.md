> Here is my resume: bench/planted-defects/tests-final/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience/project entries for content and wording, plus the full resume’s narrative and format. Education entries have no bullets to review. No job-description match was run because no posting was provided.

The main changes to consider:
- Clarify the 35% diagnostic-accuracy improvement: state what it was compared with and whether it’s a relative change or percentage-point gain.
- Resolve repeated and inconsistent achievement claims: the adapter fine-tuning appears twice, and the backlog reduction appears in two entries as both 68% and two-thirds. Combine them or clarify if they refer to separate work.
- Tighten claims whose wording may go beyond what the stated method or evidence establishes, including the assistant-only loss-masking rationale and the claims about eliminating deadlocks or reducing memory by 4×.

The reviewers also flagged a 10-month gap in the timeline, suggested putting Experience before Education, and noted personal details that are conventionally omitted. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 79 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 13 important, 6 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “M.S. in Computer Engineering”

**Problem**
[Important] Education appears before Experience, putting the more relevant work later in the résumé. *(no words)*

**Why**
The current order leads with the degrees, while the work history and project experience come afterward. A reader may reach the most relevant evidence later than necessary; keeping the active M.S. visible preserves the current education context.

**How to change it**
Move Experience before Education and keep the active M.S. entry in Education.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy improvement lacks a measurement basis. *(about 8 words)*

**Why**
A reader cannot tell whether 35% is a relative gain or a percentage-point increase, or what result it is compared against. Without that context, the size and meaning of the improvement are difficult to assess.

**How to change it**
Clarify the calculation and add [comparison baseline or comparator and evaluation set]; if accurate, say whether the change is relative or in percentage points.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.
> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Important] The disagreement reduction appears after the routing-layer description, and the calls and latency reductions appear after a long methods phrase. *(no words)*

**Why**
The results are the clearest measures of impact in these bullets, but the reader encounters the technical setup first. That ordering makes the outcomes harder to spot while scanning.

**How to change it**
Move the disagreement reduction closer to the opening of the routing bullet; lead the GRPO bullet with the calls and latency reductions, then briefly state how they were achieved.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The harness wording uses indirect phrasing. *(saves about 2 words)*

**Why**
“The team used to” makes the sentence longer without clarifying the harness’s role. A reader has to get past that phrase to see that the harness compared the checkpoints.

**How to change it**
Replace “the team used to compare” with wording that states the harness compared the checkpoints directly.

> “fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking” and “Fine-tuned the adapter with assistant-only loss masking”

**Problem**
[Error] The same assistant-only-loss-masking adapter work is described twice without showing whether the bullets cover distinct work. *(saves about 14 words if the fifth bullet is removed)*

**Why**
The first bullet reports an accuracy improvement from fine-tuning the adapter, and the fifth repeats that fine-tuning method. A reader may conclude the fifth bullet adds no separate achievement, making the experience look repetitive.

**How to change it**
If these describe the same work, remove the fifth bullet or fold any distinct detail into the first; if they are separate, clarify how the work differed.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Important] The stated switch from FP32 to BF16 mixed precision does not by itself support a fourfold reduction in total GPU memory. *(about 7 words)*

**Why**
BF16 uses about half the storage per converted value, not one quarter, and mixed-precision training may retain some FP32 state. Without measurement conditions, a reader cannot tell what produced the claimed fourfold total reduction.

**How to change it**
If a benchmark measured 4x, specify the GPU-memory measure and comparison conditions; otherwise report the measured reduction the setup supports or soften the claim.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
The load-test evidence comes after the latency result and implementation details. *(no words)*

**Why**
The load test is relevant evidence for the latency claim, but its placement makes it easier to miss while scanning. A reader may see the result without noticing the stated validation.

**How to change it**
Move the load-test clause closer to the opening or directly after the latency result.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The CI bullet switches from past-tense “Maintained” to present-tense “adds” for a role that ended in July 2024. *(no words)*
2. [Important] The three-day figure does not define what the release-cycle measure represents or what it is compared with. *(about 6 words)*
3. [Polish] The release-cycle result appears after the methods, making it harder to spot when scanning. *(no words)*

**Why**
1. The tense shift makes the timing of the work unclear, while “Maintained the CI pipeline” describes an ongoing duty rather than naming what was changed. The release-cycle result also comes after the methods, so it is less visible when scanning.
2. A reader cannot tell whether three days is the duration of a cycle or the release cadence. Without a prior comparison, the amount of change is also unclear.
3. The result is the clearest measure of impact in the CI bullet, but it comes after the pipeline and regression-check details. Moving it earlier would make the outcome more visible.

**How to change it**
1. Replace “adds” with “added,” replace “Maintained” with the specific CI change if accurate, and move the release-cycle result closer to the opening.
2. Clarify what the three days measures and add [baseline duration or cadence].
3. Move the release-cycle result closer to the opening, then briefly state the CI work that achieved it.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The event-queue migration is credited with removing the nightly backlog without evidence that queued work could finish before dispatch, and the claimed operational change is unmeasured. *(about 12 words)*
2. [Important] The bullet claims the migration removed nightly backlogs but gives no measure of the backlog or dispatch-delay change. *(about 6 words)*

**Why**
1. A queue can smooth bursts but does not itself increase processing capacity, and retries can add work. A reader cannot judge the effect on backlog or dispatch delays from the 30 migrated services alone.
2. The operational result is stated, but the reader cannot judge its scale. The count of migrated services shows scope, not the effect on the backlog or dispatch.

**How to change it**
1. If measured, specify [the workload and capacity evidence showing the backlog cleared before dispatch] and add [backlog volume or dispatch delay before versus after]; otherwise remove or soften the backlog-removal claim.
2. Add one before-and-after measure, such as [backlog volume or dispatch delay before versus after].

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Polish] “AI-first engineering practices” does not identify the practice whose adoption was driven. *(about 3 words)*

**Why**
The phrase does not show what changed or what work supported the adoption. A reader cannot see the technical or organizational contribution behind the claim.

**How to change it**
Replace the broad phrase with the specific practice introduced, such as [practice adopted], if accurate.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Important] The under-10K-token claim does not define working context or establish that the complete model input stayed below that threshold throughout the test. *(about 10 words)*
2. [Polish] The “100x” conversation-growth figure does not state its starting point. *(about 6 words)*

**Why**
1. Raw conversation growth does not show the size of each request sent to the model. Counting only retained conversation state could omit system instructions, tool content, summaries, or an oversized turn.
2. Without a reference point, a reader cannot interpret the scale of the stress test or judge what the growth represents. The figure therefore adds little context to the under-10K-token result.

**How to change it**
1. If measured, specify that the peak complete serialized input on every model call stayed below the threshold; otherwise state the narrower context measure actually tracked.
2. Clarify the starting point with [starting conversation size or point of comparison], if accurate.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The runtime bullet claims that the two changes removed deadlocks and lost tool results without establishing that outcome. *(about 8 words)*
2. [Important] The runtime bullet gives a 50-way test condition but no validation measure for the claimed removal of failures. *(about 8 words)*
3. [Polish] The two fixes come before the result, making the impact harder to scan. *(no words)*

**Why**
1. Separating pools does not rule out deadlocks caused by pool saturation or cross-pool dependencies, and stream completion alone does not ensure results were incorporated or safely committed. The line gives no evidence that these failures were eliminated under the stated workload.
2. A reader can see the stated load condition and outcome but not what evidence established that the failures were removed. A measured result would make the claim easier to judge.
3. The bullet names the pool separation and cache-write change before stating the claimed effect. A reader must reach the end of the line to see the outcome.

**How to change it**
1. If tests covered the 50-way workload and relevant failure cases, state the tested conditions and result; otherwise describe the changes as mitigations rather than saying they removed the failures.
2. Add [deadlock or lost-result rate before and after at 50-way fan-out], if measured.
3. Move the claimed removal of deadlocks and lost results to the opening, then briefly state the two changes.

> “AI-first engineering practices”

**Problem**
[Polish] The two concrete runtime improvements belong together, while the broad adoption claim reads as a separate item. *(no words)*

**Why**
The adoption bullet names general benefits without a checkable result, unlike the two specific runtime bullets. Keeping it alongside those concrete improvements makes the project’s technical focus less clear.

**How to change it**
Keep the two runtime improvements together and move the adoption claim to a more relevant section or remove it if it cannot be tied to a specific result.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metrics bullet names the integration but not what it changed for the framework or its users. *(about 7 words)*

**Why**
A reader can see that eight metrics were added, but not what using them in the evaluation module enabled. Without that outcome, the contribution’s value beyond the technical deliverable is hard to judge.

**How to change it**
Keep the eight-metric contribution, then add [the capability or user outcome the metrics enabled].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The 0.89 Kendall correlation does not establish on its own that the evaluator tracks degradation, and the line does not name what the scores were correlated with. *(about 15 words)*

**Why**
The coefficient is interpretable only if the degradation ordering and score direction are justified and the analysis accounts for ties and repeated variants of the same report. A pooled correlation could also hide inconsistent results across reports or removal types; without the comparator, a reader cannot tell what the coefficient demonstrates.

**How to change it**
Name [the known degradation order or severity used as the comparator], if accurate, and specify the degradation ordering, score direction, treatment of ties and repeated reports, and uncertainty; otherwise describe an observed association in the tested trials. Lead with the correlation result and shorten the trailing explanation.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The same backlog-reduction achievement is attributed to two different projects with slightly different figures. *(about 4 words if clarification is needed)*
2. The triage-method clause is dense after the backlog result. *(saves about 6 words)*

**Why**
1. The internship and research-agent entries both describe a triage branch screening 800+ sensor signals and reducing the pending-case backlog. A reader may see this as one result counted twice, and the difference between 68% and two-thirds leaves the reported figure uncertain.
2. The line states the reduction first, then follows it with several technical details. That clause slows the reader after the result and may make the main point harder to scan.

**How to change it**
1. If this is one achievement, use one consistent figure and keep it under the entry for the work that produced it; if these are separate results, clarify what made the branches and outcomes distinct.
2. Tighten the method clause after the result if those details are not essential, while preserving the details needed to distinguish this work.

## Skills

> “fine-tuning a domain adapter”

**Problem**
[Important] The listed adapter fine-tuning work does not establish that LoRA was used. *(about 5 words to name a use, or no words if removed)*

**Why**
The experience bullets mention fine-tuning adapters but do not identify LoRA. A reader may question whether LoRA belongs in the skills list if the résumé provides no example of using it.

**How to change it**
Add an entry showing LoRA use if accurate; otherwise remove LoRA from the skills list.

## Set aside (6)

6 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8f7d405c.md.

