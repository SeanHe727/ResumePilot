## Highest-priority changes

1. **Remove your date of birth and nationality.** They are generally unnecessary on a U.S. resume and can create privacy and discrimination concerns. Include them only if an employer or country-specific application explicitly requires them.
2. **Fix or remove the Brightcart conversion-rate bullet.** Reporting a simple average of regional rates when regions have different traffic is a serious analytical error and undermines your credibility. If this was an identified mistake that you later corrected, describe the correction and its outcome; otherwise, leave it off.
3. **Correct the Food Pantry “2.4 million shoppers” bullet.** It appears copied from the Brightcart retention bullet and is inconsistent with the pantry project.
4. **Correct the SQL methodology in the “no orders” bullet.** Counting null customer names after starting with the customers table is not the right way to identify customers with no orders. The relevant null field would normally come from the orders side of the join. This could be noticed by a technical reviewer.
5. **Replace vague efficiency claims with clearly defined measurements.** In particular, “reporting efficiency by 90%” needs a measurable definition.

## Header

### `Avery Brooks`

- Keep it prominent and visually distinct.
- Consider adding a relevant professional link, such as GitHub or a portfolio, if it contains the project notebooks or work samples.

### Phone number and email

- Keep both.
- Confirm that the email and phone are current and that the email address sounds professional.

### `example.com/in/abrooks`

- Make sure this is a real, clickable profile URL rather than a placeholder.
- If it is a LinkedIn URL, verify that the profile matches the resume’s dates, titles, and accomplishments.
- Add a GitHub or portfolio link if you have one, especially because your resume emphasizes SQL, Python, dashboards, and forecasting.

### `Date of birth: 9 Jan 1998`

- Remove it. It does not help establish your qualifications and is usually not expected on a U.S. resume.

### `Nationality: Brazilian`

- Remove it unless the application specifically asks for nationality or the information is legally relevant to work authorization.
- If work authorization is important, address that separately and accurately rather than listing nationality alone.

## Education

### `Eastmoor University | B.S. in Statistics | Metro City, USA | Sep 2016 - May 2020`

- This is clear and appropriately formatted.
- If you graduated with strong honors, a relevant concentration, or especially relevant coursework, consider adding that only if it supports the target role.
- Because you now have several years of experience, do not expand this section unnecessarily.
- Check whether the degree should be listed as “Bachelor of Science in Statistics,” depending on your institution’s official wording. Consistency matters more than shortening it.

## Pinecrest Insurance

### `Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022`

- The format is clear.
- Consider adding a one-line description of the team or analytical area only if the company or title is not self-explanatory.
- Your title is relatively junior, so the bullets should strongly establish ownership, analytical judgment, and measurable business impact.

### `Owned the claims backlog report and the weekly numbers the claims managers used.`

- Keep the ownership concept, but add scope or consequence.
- Clarify what “weekly numbers” means: volume, aging, service levels, staffing, or another operational metric.
- “Owned” is useful, but the bullet currently describes responsibility rather than achievement. Explain what you improved, standardized, or enabled.
- If the report supported a specific number of managers, claims, teams, or locations, include that scale.

### `Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.`

- This is one of your strongest bullets because it includes analysis, an operational decision, and a measurable result.
- Clarify the time period over which the hold-time improvement occurred and whether other changes contributed to it.
- “Moved two agents to the evening peak” may sound small without context. Add the relevant scale if available, such as the size of the call center or the volume affected.
- Make sure you can substantiate the causal connection between your findings and the four-minute reduction.

### `Wrote the team’s SQL style guide and review checklist, which cut query errors found in review by half.`

- Keep this; it demonstrates technical leadership and process improvement.
- Add the approximate baseline or number of queries reviewed if available. “By half” is stronger when readers know whether it means two errors down to one or a substantial recurring pattern.
- Clarify whether you created the standards from scratch or formalized an existing process.
- If the guide was adopted beyond your immediate team, state that scope.

### `Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.`

- Split this conceptually or remove the lower-value duties. The sentence combines a strong automation accomplishment with calendar maintenance, documentation, sales support, and help-desk coverage.
- The long list makes the bullet feel unfocused and may make the automation sound like just one task among many.
- Clarify which activity saved the fraud team 10 hours per month. Grammatically, “which” could refer to the entire list rather than the automated extract.
- Quantify the automation more directly if possible: frequency, manual effort eliminated, error reduction, or number of users.
- Keep the cross-functional support only if you are applying for roles where stakeholder support or operational versatility is important.

## Brightcart Retail

### `Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025`

- This is clear and shows progression from Junior Analyst to Data Analyst.
- If Brightcart is your most relevant employer, consider placing the strongest business-impact bullets first rather than beginning with a vague efficiency claim.
- Make sure the end date is correct. If this is your current employer, the date should not appear as ended; if you left in June 2025, the current project overlap is fine but should be intentional.

### `Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL queries.`

- Define “reporting efficiency.” It could mean preparation time, refresh time, manual steps, or errors, and each implies a different accomplishment.
- Avoid presenting a percentage without a clear measurement method.
- Add the scope of the report if available: number of users, business units, or recurring manual hours eliminated.
- This is potentially a strong automation bullet, but it currently sounds inflated because the metric is undefined.

### `Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.`

- Correct the technical description. If the customers table is the left/base table, customer names should generally remain non-null; a null field from the orders table is what would indicate no matching order.
- Consider whether the implementation detail belongs on the resume at all. The business purpose is more valuable than naming the join type unless the role specifically emphasizes SQL technique.
- State what happened as a result of the analysis: outreach, retention work, data cleanup, or a discovered reporting issue.
- As written, the bullet demonstrates a potentially incorrect SQL approach and has no business outcome.

### `Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they reached a dashboard.`

- Keep this; it is specific, technical, and outcome-oriented.
- Clarify the time period for the 15 broken loads if possible.
- Explain what “broken loads” means if the audience may not be deeply technical—missing data, schema changes, stale data, or failed refreshes.
- If the checks reduced incidents, dashboard downtime, or rework, include that additional impact.
- “Most-used” is useful, but identify whether this means most queried, most business-critical, or most dashboard-connected.

### `Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.`

- This is a good stakeholder-management bullet.
- Clarify your role in developing the recommendations, not just presenting them.
- Identify the general subject of the recommendations if it is relevant and nonconfidential.
- “Funded” is a strong result, but make sure the timing and connection are accurate; leadership funding may not have resulted solely from your presentation.
- If the approved work had a budget size or measurable result, that would strengthen the bullet.

### `Reported the national conversion rate as the simple average of 14 regional conversion rates, without weighting by regional traffic.`

- Remove this in its current form. It openly documents a flawed metric calculation with no correction or benefit.
- If this was an error you detected and fixed, it could become a valuable data-quality or metric-governance accomplishment, but only if the resume focuses on the correction, validation, and business impact.
- Do not retain it merely to show transparency; a resume should emphasize accurate, relevant accomplishments.

### `Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.`

- Keep this; it is probably your strongest Brightcart bullet.
- Clarify the period over which the improvement occurred and how much of the lift can reasonably be attributed to the dashboard or resulting campaign.
- Explain what “lapsed buyers” means if the definition was specific.
- Verify that 2.4 million is the number of customers covered by the dashboard rather than the number actively retargeted.
- If the dashboard drove a particular campaign, audience, or testing process, mention that scope.

## Projects

### `City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present`

- This is relevant and well aligned with analytics roles.
- Add a GitHub, portfolio, or notebook link if available.
- Because the project overlaps with your Brightcart employment dates, make clear that it is an independent project; the current label already helps.
- If the project is unfinished, ensure the listed results are complete and reproducible.

### `Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.`

- Keep the scale and data source.
- Check the metric terminology. Mean absolute error normally has the original unit, while a percentage generally indicates a normalized error or percentage-based metric. Make sure the named metric is technically correct.
- State what the 12% is measured against if it is a normalized error.
- If you compared multiple models or used a time-based validation split, those details may be more valuable than simply saying “modeled.”

### `Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell from 310 to 205 a week in a replay of last summer.`

- This is compelling, but make the simulated nature unmistakable. The result comes from a replay, not a live operational change.
- Clarify whether “empty-station hours” refers to total station-hours and how the reduction was calculated.
- Avoid implying that the operator actually reduced empty-station hours unless the operator implemented your recommendation.
- If this was an optimization or simulation, include the assumptions that materially affect the result.

### `Published the notebooks and a short write-up, which the city’s open-data team linked from its bike-share page.`

- Keep this; external validation and public work are valuable.
- Add the actual link and verify that it remains live.
- Clarify whether the team linked directly to your work or merely mentioned the project.
- Check that you have permission to describe the relationship accurately.

## Food Pantry project

### `Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023`

- The project title and tools are clear.
- “Team of 3” is useful if it shows collaboration, but make your individual contribution clear in the bullets.
- Consider whether “Volunteer” belongs in the project heading or whether the work should be framed primarily as an analytical project. Either is acceptable; consistency with the rest of the resume matters.

### `Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.`

- Keep this; it shows analysis leading to an operational result.
- Clarify the time period over which the line reduction was measured.
- Be careful with causality: identify whether the shift change directly produced the improvement or was one of several changes.
- If the Saturday line had a defined measurement method, retain that documentation for interviews.

### `Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.`

- Keep this; it demonstrates messy-data handling and a useful organizational outcome.
- Clarify how repeat visitors were matched and whether the process protected personal information.
- “Unique households” is potentially ambiguous because matching handwritten records may involve assumptions. Be prepared to explain the matching criteria and error controls.
- If the resulting count informed staffing, funding, or reporting, include that impact if space permits.

### `Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by nearly a quarter.`

- Remove this immediately. It appears to duplicate the Brightcart bullet and is not credible in the context of a food pantry serving visit records.
- Replace it with a genuine contribution from this project, if one exists. If there is no additional strong contribution, leave the project with two bullets rather than include an inaccurate one.
- Also verify that “raised repeat purchases by nearly a quarter” does not exaggerate the Brightcart result: a rise from 22% to 27% is a five-percentage-point increase and roughly a 23% relative increase, which should not be described ambiguously.

## Skills

### `Tools: SQL, Python, Excel`

- Keep the three tools, but consider adding the specific technologies you actually use, such as a database system, pandas, scikit-learn, or a visualization platform.
- Only list technologies you can discuss confidently in an interview.
- If you have experience with a BI tool, cloud platform, version control, or statistical software, this section currently understates your toolkit.

### `Methods: dashboards, forecasting, metric design, data-quality checks`

- These are relevant, but they are broad and somewhat uneven in specificity.
- Consider organizing skills by analytical area, but do not add generic traits such as “teamwork” or “communication.”
- “Metric design” is valuable only if your experience supports it; the conversion-rate bullet currently creates doubt in that area.
- Add methods that are clearly demonstrated elsewhere, such as experimentation, cohort analysis, data cleaning, or stakeholder reporting—only if you have actually used them.
- Avoid listing a method merely because it appears in a project; be ready to explain your process, assumptions, and validation.

## Ordering and presentation

- Put the strongest, most defensible impact bullets first within each role.
- The resume currently has several excellent quantified accomplishments, but they are diluted by vague wording, low-value administrative tasks, and one technically incorrect bullet.
- Keep tense consistent: past tense for completed jobs and completed projects; present tense only for the ongoing bike-share project.
- Check line wrapping so that bullets do not leave short fragments on separate lines where possible.
- If this is intended to be a one-page resume, prioritize:
  - the hold-time reduction,
  - SQL process improvement,
  - data-quality checks,
  - retention improvement,
  - customer-review recommendations,
  - bike-share forecasting and simulation,
  - pantry operational improvement.
- Before submitting, verify every number and be prepared to explain the baseline, measurement period, assumptions, and your personal contribution for each quantified result.