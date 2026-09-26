# Full review: resume.pdf

**82/100** — format 100 · content 71 · wording 82 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Correct the latency claim from a 50% reduction to a 33.3% reduction.
2. Change “by 12%” to “by 12 percentage points” for the task-completion increase from 71% to 83%.
3. Move Mobility Systems Company above Eastern Robotics Co. so Experience is in reverse chronological order.

## Already working

- s2:e0:b1: Combines a concrete outcome, baseline, final result, and percentile.
- s2:e1:b1: Uses a directly interpretable baseline-to-result comparison.
- s3:e0:b1: The p95 baseline and final latency make the performance result readily judgeable.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

### Add an operational result to the dashboard and on-call ownership, and quantify the backlog removal in the migration bullet.

> "Owned the diagnostics service’s monitoring dashboards"; "removed the nightly backlogs"

The reader should see what the monitoring responsibility enabled and have a proof point for the claimed dispatch improvement, such as incident response, backlog size, delay, or processing time.

*raised by content · costs about 8 words to add*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

### Replace the invalid test-set early-stopping claim with validation-based stopping and a new independently held-out test result.

> "early stopping on the test set"

Using the test set to choose when training stops means the reported 91% is not truly held out; reserve the test set for one final evaluation and report that resulting figure.

*raised by content, wording · costs about 8 words to replace*

### Add the starting backlog or comparison period to make the 68% pending-case reduction independently judgeable.

> "cutting the pending-case backlog 68%"

The reader needs a baseline or defined time window to understand the operational scale of the improvement.

*raised by content · costs about 5 words to add*

### Name the evaluated diagnostic task and confirm that the 71% baseline and 79% result used the same held-out protocol.

> "diagnostic accuracy"

The accuracy change is only interpretable if the reader knows what was classified and that both figures were measured comparably.

*raised by content · costs about 6 words to add*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

### Correct the latency claim from a 50% reduction to a 33.3% reduction.

> "a 50% reduction"

The arithmetic must match the stated 900 ms to 600 ms change or the performance result loses credibility.

*raised by content · costs no words*

### Change “by 12%” to “by 12 percentage points” for the task-completion increase from 71% to 83%.

> "by 12%"

This distinguishes the observed percentage-point change from the approximately 16.9% relative increase and makes the result mathematically precise.

*raised by content · costs about 2 words to add*

### Replace or remove the generic claim about accelerating delivery and improving downstream outcomes unless you can attach a measurable result or checkable fact.

> "accelerating delivery and improving outcomes for downstream teams"

The bullet should tell the reader what practices were adopted and what changed, rather than assert benefits that cannot be verified.

*raised by content, wording · costs saves about 8 words*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

### Add the technical implementation behind the eight metrics, define what the 0.89 Kendall correlation compares, and state what the validation enabled.

> "Upstreamed 8 citation and faithfulness metrics"; "a Kendall correlation of 0.89"

The contribution will be more distinctive and interpretable if the reader can see how the metrics were implemented, what two quantities tracked one another, and whether the result became a release gate, regression test, or benchmark qualification.

*raised by content · costs about 12 words to add*

## Across the whole résumé

### Move Mobility Systems Company above Eastern Robotics Co. so Experience is in reverse chronological order.

> "Oct 2024 - May 2025" appears below "Aug 2022 - Jul 2024"

A recruiter scanning the section should see the most recent role first and should not have to reconcile the dates against the layout.

*raised by narrative · costs no words*

### Make the overlap between the master's degree, internship, and projects explicit so the concurrent timeline is immediately clear.

> "Sep 2024 - Expected Jun 2026" and "Aug 2025 - Present"

A reader should be able to understand that these roles and projects occurred while the degree was in progress rather than infer an unexplained chronology.

*raised by narrative · costs about 6 words to add*

## Set aside (14)

- s2:e0:b0, s2:e0:b1, s2:e0:b2, s2:e0:b3: The scope signal "across two major releases" is useful but incomplete because the reader cannot tell how many services, alerts, incidents, or engineers were covered. (and 6 more like it)
- s2:e1:b2: "rank the 3 specialist agents’ findings by statistical significance" is not supported by "uses cross-entropy"; add the actual uncertainty or significance calculation, or describe the ranking as confidence- or loss-based.
- s2:e1:b2: The bullet has no result showing what changed because the routing layer was designed.
- s2:e1:b3, s3:e0:b1: "reduced end-to-end latency 5%" needs the latency baseline or statistic and a definition of the end-to-end boundary. (and 1 more like it)
- s2:e1:b3: The long list of reward components does not show how the optimization affected the system beyond the latency figure.
- s2:e1:b5: "adopted them as the team’s runbook" would be more credible with the adoption scope, such as the number of reviewers or operational workflows using it.
- s3:e0:b0, s3:e0: "Drove adoption of AI-first engineering practices across the platform" does not say which practices were adopted or by how many teams or users. (and 1 more like it)
- s3:e0:b2: "the benchmark suite" does not identify its task count, evaluation scope, or whether the same suite was used before and after.
- s3:e1:b2: “with layered instrumentation” names the diagnostic approach without identifying the one tracing, logging, or test technique that found the defects. (and 1 more like it)
- s2:e0:b0, s2:e0:b1, s2:e0:b2, s2:e0:b3, s2:e1:b0, s2:e1:b1, s2:e1:b2, s2:e1:b3, s2:e1:b5, s3:e1:b0, s3:e1:b1, s3:e1:b2: "Owned the diagnostics service’s monitoring dashboards across two major releases and the on- call rotation that used them" combines dashboard ownership with rotation ownership in an unclear construction. (and 12 more like it)
- skills: SQL — no experience or project entry shows SQL usage; listing it without evidence weakens the skills-to-work connection. (and 8 more like it)
- s2:e0: s2:e0:b0 and s2:e0:b3 repeat: Both describe ownership of operational monitoring and on-call responsibilities; b3 adds the migration and logging work, while b0 is the narrower version.
- format: Experience is not newest-first: "Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024" is listed above the more recent "Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025".
- s2:e0:b3: "while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation" adds three secondary responsibilities that compete with the primary migration.
