# Full review: resume.pdf

**84/100** — format 100 · content 77 · wording 84 · narrative 61

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 16 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999 | Nationality: Canadian

**Problem**
[Error] The résumé includes personal details that should be left off by convention. *(saves about 8 words)*

**Why**
A reader is not meant to weigh date of birth or nationality when assessing the résumé. Including them uses space for information that is not relevant to the candidate’s qualifications.

**How to change it**
Remove the date of birth and nationality.

*raised by file*

> Mechanical Design Engineer

**Problem**
[Important] The current Mechanical Design Engineer entry takes attention away from an ML/agent target. *(saves about 10 words if shortened)*

**Why**
If you are targeting ML or agent roles, this is the lead experience entry but its mechanical-design focus pulls the reader away from that direction. A shorter entry with its career relevance stated would keep the experience while reducing that distraction.

**How to change it**
If targeting ML/agent roles, shorten this entry to one line and add [how it relates to that career direction].

*raised by narrative*

> Mechanical Design Engineer

**Problem**
[Important] The role sequence does not explain the direction of the candidate’s career progression. *(about 5 words to add)*

**Why**
The titles move from Junior Software Engineer to Machine Learning Engineering Intern and then to Mechanical Design Engineer. A reader may be unsure how the current role fits the direction of the résumé, even though the dates show no notable gap.

**How to change it**
Add [a brief explanation of how the Mechanical Design Engineer role fits the intended career direction].

*raised by narrative*

> M.S. in Computer Engineering

**Problem**
[Important] Education appears before Experience. *(no words)*

**Why**
A reader looking for relevant work history must get past the degrees before reaching the experience entries. Moving Experience first would bring that information forward.

**How to change it**
Move the Experience section ahead of Education.

*raised by narrative*

## Lakeside Auto Parts | Mechanical Design Engineer | Metro City, Country | Jun 2025 - Present

> Ran tolerance stack-up analyses for 12 production parts and signed off first-article inspections with the supplier.

**Problem**
[Important] The inspection work gives its scope but not its outcome. *(about 5 words to add)*

**Why**
A reader can see the analyses covered 12 parts and that you signed off inspections, but cannot tell what changed as a result. The part count shows the work’s reach, not its value to fit, quality, or production.

**How to change it**
Add the clearest result of the analyses or inspections, such as [the fit, quality, or production change], and include [a baseline or acceptance criterion] if available.

*raised by content*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy gain has no comparison basis. *(about 5 words to add)*

**Why**
A reader cannot tell whether 35% is a relative increase or a percentage-point change. Without a baseline, the size of the improvement is difficult to interpret.

**How to change it**
State whether the gain is relative or in percentage points, and add [the comparison baseline, measured on the same evaluation set] if accurate.

*raised by content*

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The routing design comes before its result, making the improvement easy to miss. *(no words)*

**Why**
A scanning reader must get through the design explanation before seeing the reduction from 14% to 6%. That delays the clearest evidence of the routing layer’s impact.

**How to change it**
Move the disagreement reduction to the start of the bullet, before the explanation of how the routing layer works.

*raised by wording*

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The reductions in calls and latency come after the training method and a compressed comparison. *(no words)*

**Why**
A reader sees the technical setup before the results, so the practical gains are less prominent. “Grouped tool-use rollouts” and “equal accuracy” may also be hard to parse without familiarity with the team’s terminology.

**How to change it**
Lead with the 18% reduction in tool calls and 5% reduction in latency, then describe the GRPO training. Replace “grouped tool-use rollouts” with a plain-language description, and clarify that accuracy matched the SFT baseline.

*raised by wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] The claimed purpose of assistant-only loss masking is technically incorrect. *(saves about 9 words if the purpose clause is cut)*
2. [Important] This bullet repeats the adapter method already stated in the accuracy bullet without adding a distinct result. *(saves about 17 words)*

**Why**
1. Assistant-only loss masking excludes tool-output tokens from the training loss, so it does not directly train the model to reproduce those outputs. It can train assistant responses conditioned on tool outputs, which is a different objective.
2. The first bullet already says the adapter was fine-tuned with assistant-only loss masking. Repeating that method uses space without giving the reader another outcome or contribution to evaluate.

**How to change it**
1. Remove this purpose claim. If you retain a description of the training objective, say it trained the model to produce assistant responses conditioned on tool outputs; describe faithful reproduction of tool outputs only if those tokens were included in the loss and that setup was used.
2. Remove this bullet and keep the accuracy result in the first bullet.

*raised by content, wording, narrative*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Important] The feature-extraction description is both unexplained and difficult for readers outside the team to interpret. *(about 4 words to add)*
2. [Important] The backlog result is not the opening of the entry, although it is the strongest line. *(no words)*

**Why**
1. “ML-extracted features” does not show what technical approach you contributed, while “diagnostics triage branch” may not tell a general reader what the system does. That leaves the technical work behind the signal screening hard to judge.
2. This bullet combines a concrete system contribution with a 68% result, so it gives a reader a strong immediate example of impact. Placing it last makes that evidence less likely to be seen on a quick scan.

**How to change it**
1. Replace “diagnostics triage branch” with a plain description of the system and expand “ML-extracted features” with [the specific feature-extraction or model approach], if accurate.
2. Move this bullet to the top of the Mobility Systems Company bullets.

*raised by content, wording, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Error] The 4x GPU-memory reduction is overstated as an effect of switching from FP32 to BF16 alone. *(about 3 words to add if giving a measurement)*

**Why**
BF16 stores each value in half the space of FP32, not one quarter. Overall fine-tuning memory also includes other tensors and optimizer states, so the total reduction depends on which components use BF16.

**How to change it**
State the measured before-and-after reduction if you have it; otherwise describe affected tensors as using roughly half the storage. Keep “4x” only if [other changes and measurements support it].

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet shifts from past tense to present tense in a role that ended in July 2024. *(no words)*
2. [Important] The three-day release-cycle duration has no prior duration for comparison. *(about 4 words to add)*

**Why**
1. “Maintained” describes completed work, but “adds” makes the regression checks sound like a current activity. The tense shift leaves unclear when the checks were added and conflicts with the role dates.
2. A reader can see the resulting cycle length but cannot judge how much it improved. A before-and-after comparison would make the scale of the change clearer.

**How to change it**
1. Change “adds” to “added.”
2. Add the previous duration in a comparison such as “from [previous release-cycle duration] to 3 days,” if available.

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The claim that the migration removed nightly backlogs gives no measure of the operational change. *(about 5 words to add)*
2. [Important] The migration result is not the opening of the entry, although it is the strongest line. *(no words)*

**Why**
1. A reader can see that morning dispatch was affected, but not how much the backlog or dispatch delays changed. Without a before-and-after measure, the operational impact is difficult to judge.
2. The line pairs a 30-service migration with the removal of backlogs that delayed dispatch. Leading with it would make the scale and operational result easier to notice.

**How to change it**
1. Add one available measure, such as [the backlog volume or dispatch-delay reduction compared with before migration].
2. Move this bullet to the top of the Eastern Robotics Co. bullets.

*raised by content, narrative*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The AI-practices claim gives neither a specific practice nor a checkable result, and it does not connect clearly to the runtime work. *(about 8 words to add if replacing with specifics)*

**Why**
A reader cannot picture what you introduced from “AI-first engineering practices,” and “accelerating delivery and improving outcomes” gives no evidence of the change. Because the other bullets describe concrete runtime engineering, this broad claim also feels disconnected from the project.

**How to change it**
Replace the broad practice and benefit claims with [one specific practice or implementation decision] and [one specific delivery or downstream result], if accurate; otherwise remove the bullet.

*raised by content, wording, narrative*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] The 100x comparison is phrased in a way that leaves unclear what grew. *(about 2 words to add)*

**Why**
“The raw conversation grew 100x” does not make explicit what the comparison measures. A reader may not know whether the figure refers to the conversation’s length or another quantity.

**How to change it**
Clarify what the 100x measures by replacing this phrase with [the specific quantity that grew], if accurate.

*raised by wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The 50-way test condition does not show how the failures were verified as resolved. *(about 5 words to add)*
2. [Important] The concrete concurrency result is not the opening bullet of the project. *(no words)*

**Why**
1. The reader can see the scale of the test but not what evidence supports the claim that deadlocks and lost results were removed. Without a test result or before-and-after comparison, the reliability improvement is difficult to assess.
2. This line names specific runtime changes and the failure modes they addressed. Putting it first would give a scanning reader a concrete example of the project’s technical work before the other runtime result.

**How to change it**
1. Keep the fan-out condition and add [the observed test result or before-and-after failure comparison], if available.
2. Move this bullet to the top of the Agent Runtime Suite bullets.

*raised by content, narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The 0.89 correlation does not identify the two quantities being compared. *(about 5 words to add)*
2. [Important] The result is buried after a long, jargon-heavy description of the trial conditions. *(no words)*

**Why**
1. A reader cannot tell what the evaluator’s scores were correlated with, so the figure does not establish what the evaluator tracks. Naming the comparison would make the result interpretable.
2. “Injected degradation” may be unclear outside the team, and the setup comes after the correlation result. That wording and ordering make the main evaluation finding harder to scan.

**How to change it**
1. Name what the evaluator’s scores were correlated against, such as [the degradation levels or rankings used as the comparison], if accurate.
2. Lead with the correlation result, replace “injected degradation” with a plain description of the changes made to reports, and shorten the trial setup.

*raised by content, wording, narrative*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The triage outcome appears misattributed here, and its backlog figure conflicts with the result elsewhere on the résumé. *(saves about 17 words if removed)*
2. The remaining triage description does not explain how screening changed case handling and relies on unclear jargon. *(about 5 words to add)*

**Why**
1. The Mobility Systems bullet assigns a 68% backlog reduction to an industrial inspection triage branch, while this project claims the same result as two-thirds. A reader may conclude that one project has been credited with another’s outcome, and the different figures make the impact inconsistent.
2. “Triage branch” does not tell a general reader what the system does, and “ML-extracted features” does not identify the method. Even apart from the disputed backlog result, the line does not make the contribution to this evaluation project clear.

**How to change it**
1. Remove this bullet if it describes the industrial inspection work; if it belongs to this project, replace it with [the outcome and work actually attributable to this project] and make the backlog figure consistent with the 68% claim elsewhere.
2. If this work belongs to the project, replace “triage branch” and “ML-extracted features” with a plain description of the system and [how screening changed case handling], using [the relevant method] if accurate.

*raised by content, narrative, wording*

## Already working

- s2:e0:b0: Gives both a before-and-after rate and the scope of the change.
- s2:e2:b1: Pairs a clear before-and-after performance result with a concrete regression safeguard.
- s2:e1:b3: Shows both the team's use of the harness and a concrete issue it caught.

## Set aside (6)

- s2:e1:b4: “so the model would learn to reproduce the tool outputs more faithfully” describes an intended effect, not an achieved result.
- s3:e1:b2: The phrase "a triage branch that screens 800+ sensor signals per case using ML-extracted features" does not explain how screening changed case handling.
- s2:e1:b4: “Fine-tuned the adapter with assistant-only loss masking” duplicates the method in the first bullet, using space without adding distinct information.
- s2:e1:b4: “so the model would learn to reproduce the tool outputs more faithfully” is a wordy purpose statement rather than a distinct result.
- s3:e1:b2: “triage branch” is jargon that does not clearly explain what the system or process does.
- s3:e1:b2: “ML-extracted features” is dense jargon; use plain language or spell out the relevant method.
