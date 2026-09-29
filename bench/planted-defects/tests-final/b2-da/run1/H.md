## Highest-priority changes

1. **Remove date of birth and nationality** unless a specific application requires them. They are generally unnecessary on a U.S. resume and can create privacy and discrimination concerns.
2. **Fix the A/B testing bullet.** Stopping the test the first day the p-value went below 0.05 is statistically problematic and may signal optional stopping or p-hacking.
3. **Correct the project metrics.** The “50% reduction” from 300 to 200 is mathematically incorrect, and “15%” from 60% to 75% should be described as a percentage-point change.
4. **Fix the SQL bullet about customers with no orders.** The stated null-counting method appears technically incorrect or at least unclear.
5. **Make causal claims more precise.** Several bullets attribute business results directly to your work without explaining the analysis-to-action link or evaluation period.

## Header

### Contact information

- Keep the phone number, email, and professional profile link.
- Make sure the profile URL is complete and professional. If it is a LinkedIn profile, label it clearly rather than using an ambiguous generic URL.
- Consider adding a location only if relevant to the role. A city and state can help with local positions but is not always necessary for remote applications.

### Date of birth

- Remove it. It is not normally needed for U.S. hiring and creates an unnecessary personal-data disclosure.

### Nationality

- Remove it unless an employer specifically requests it for a work authorization, visa, or international hiring process.
- If work authorization is relevant, address that separately and directly rather than listing nationality.

## Education

### Eastmoor University | B.S. in Statistics | Metro City, USA | Sep 2016–May 2020

- This is clear and appropriately formatted.
- Use an en dash consistently for date ranges rather than a hyphen.
- Consider adding relevant coursework, honors, GPA, or statistical technologies only if they strengthen your candidacy and are accurate. With your experience level, these are optional rather than necessary.
- Check whether your degree should be listed as “Bachelor of Science” or “B.S.” and use the institution’s official wording consistently.

## Experience

### Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025–Present

- Verify the dates. If this is not actually a current position, “Present” is misleading.
- Because this role is less relevant to data analyst applications, keep it concise unless it demonstrates transferable skills or explains your current employment.
- Consider adding scale if available, such as transaction volume, number of customers served, or responsibility for closing procedures. The current bullets describe duties but not the size or quality of the work.

#### “Sold tickets and concessions during evening shifts and balanced the cash drawer at close.”

- Clarify the scope of the work. “Balanced the cash drawer” is useful, but the bullet would be stronger if it established volume, accuracy, frequency, or responsibility level.
- The evening-shift detail is not important unless the schedule, reliability, or high-volume setting is relevant to the position.
- Keep the bullet if you want to show employment continuity and customer-facing experience; otherwise, it is a low-priority bullet for an analytics resume.

#### “Trained 3 new attendants on the ticketing system and the refund policy.”

- This is stronger than the first bullet because it demonstrates training and trust.
- Add context about the training process or result if available, such as whether the new employees reached independent operation faster or avoided errors.
- Make sure the number three is accurate and that the training was meaningfully yours rather than informal peer assistance.

### Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022–Jun 2025

This is your strongest section and should receive the most space. The main improvements are technical precision, clearer causality, and consistent grammar.

#### “Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.”

- Clarify whether the dashboard itself caused the increase or whether a marketing campaign informed by the dashboard produced the increase.
- Add the time period over which the increase occurred and, if available, the comparison group or measurement method.
- Distinguish between a five-percentage-point increase and a relative percentage increase. The current wording can be interpreted either way.
- Explain what “lapsed buyers” means if the definition was important to the analysis.
- The 2.4M-customer scale is valuable, but make sure it refers to the dashboard’s actual population rather than the entire company database.

#### “Cut the monthly revenue report from 3 days of spreadsheet work to 2 hours by moving it to scheduled SQL queries and a shared dashboard.”

- This is one of the clearest bullets in the resume. Keep the before-and-after time measurement.
- Clarify whether the time reduction was per reporting cycle and whether the process became fully automated or still required manual review.
- If the dashboard became a recurring source of truth for a particular team, that adoption would further establish its value.

#### “Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.”

- Review the SQL logic carefully. In a left join from customers to orders, the null field would normally be an order-side identifier, not the customer’s name. A customer name should generally remain populated for customers retained from the customer table.
- State the business use or result. Finding customers with no orders is an analysis step, not yet an accomplishment unless it supported a campaign, data-quality fix, retention effort, or other decision.
- Avoid describing a basic SQL operation as the main achievement unless it led to a meaningful outcome.
- Specify which table was on the left side of the join and which field was used to identify missing orders.

#### “Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.”

- Fix the grammar and sentence structure. The opening participial phrase currently creates a dangling or unclear subject.
- Use past tense consistently with the rest of the role.
- Clarify whether you actually used dbt. “dbt-style” may sound imprecise or inflated if the work was only modeled using similar conventions.
- Explain how the increase from 58% to 81% was validated. It could reflect improved tracking, changed attribution rules, or genuinely more attributable orders; those are not the same outcome.
- Consider clarifying the time period and business significance of the attribution improvement.
- The 40-table and two-system scope is strong, but make sure the bullet remains understandable to nontechnical reviewers.

#### “Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.”

- This demonstrates communication and influence, which is valuable.
- Clarify whether you created the analysis, presented it, or both.
- “Funded” shows leadership adoption, but it does not show the eventual business impact. If later results exist, those would be more persuasive.
- Check whether “customer review” is the correct name for the deliverable; it may be a review, analysis, or presentation.

#### “Trained 20 merchandisers to answer their own questions with the self-serve dashboards, halving ad hoc data requests.”

- This is a strong enablement bullet.
- Add the measurement period or baseline for the reduction in requests. “Halving” is persuasive, but readers need to know whether that was measured over a month, quarter, or another interval.
- Clarify whether the dashboards were created by you or simply used in the training.
- “Answer their own questions” is understandable but somewhat informal; make the underlying capability and outcome more precise without overstating it.

### Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020–Jul 2022

#### “Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.”

- Change this substantially. This wording describes a flawed testing practice because repeatedly checking the p-value and stopping at the first significant result inflates the false-positive rate.
- Specify the planned sample size, test duration, stopping rule, sequential-testing method, or other valid experimental design if one was used.
- Include the business result only if it was based on a statistically and operationally sound test.
- If this was genuinely how the test was conducted, do not present it as a methodological strength. It may raise concerns for analytics and experimentation roles.

#### “Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.”

- This is a strong outcome-oriented bullet.
- Clarify whether the staffing change was your recommendation and whether the hold-time reduction was measured after implementation.
- Include the evaluation period if available.
- Be careful with causal wording: the analysis supported the staffing decision, while the operational change likely produced the reduction.

#### “Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.”

- Change the verb tense to past tense because the role has ended.
- Clarify whether you wrote the materials independently or contributed to them.
- Define the measurement period and baseline for “cut query errors by half.”
- Explain whether the errors were syntax errors, logic errors, performance issues, or another category. That distinction affects how impressive and relevant the accomplishment is.

#### “Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.”

- Split the core automation achievement from the administrative duties. The long list buries the strongest result.
- The calendar, onboarding, and help-desk responsibilities are not especially relevant to an analytics application unless you are applying for a broad operations role.
- Clarify which activity saved the 10 hours. As written, the sentence could imply that all of the listed duties produced the savings.
- Describe the automation’s scope, frequency, or error reduction if available.
- Keep only the support duties that demonstrate a relevant skill, such as stakeholder service, process ownership, or cross-functional communication.

## Projects

### City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025–Present

- Verify that the project is still active. If it is complete, use a completion date.
- Add the relevant libraries, modeling tools, visualization tools, or data sources only if they are genuinely important and you can discuss them in an interview.
- Make the evaluation design clear. Forecasting claims should identify whether the results came from a time-based holdout, rolling validation, or another out-of-sample method.

#### “Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.”

- Correct the metric terminology. Mean absolute error is normally expressed in the original units, such as rides, not as a percentage.
- If the result is a percentage, verify whether the metric was mean absolute percentage error, normalized MAE, or another measure.
- Clarify whether “next-day demand” means hourly demand predictions for the next day or a daily total.
- State the validation approach if space permits; otherwise, the result may sound like an in-sample performance claim.

#### “Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.”

- Correct the arithmetic. Reducing 300 to 200 is a reduction of 100 hours, or approximately 33.3%, not 50%.
- Do not use “cut” without indicating that this was a simulated replay rather than a real operational deployment.
- Explain the assumptions behind the replay, including whether travel time, vehicle capacity, station capacity, and available staff were modeled.
- Distinguish this result from actual observed performance. A simulation demonstrates potential impact, not confirmed operational impact.

#### “Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.”

- Change the metric description: 60% to 75% is a 15-percentage-point increase and a 25% relative increase.
- Define “forecast hit rate.” Readers need to know what counted as a hit and what tolerance was used.
- State whether the comparison used the same holdout data and whether the features were available before the forecast time. This helps rule out leakage.
- Explain whether the improvement was consistent across stations or concentrated in a subset.
- This may overlap with the first project bullet. Make sure the bullets show distinct achievements: model accuracy, feature improvement, and operational simulation should not sound like repeated versions of the same result.

### Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023–Aug 2023

- This is a useful project because it demonstrates applied analysis, stakeholder work, and practical impact.
- Make your individual contribution clear because the project was completed by a team of three.
- If the pantry or data involved sensitive personal information, avoid including identifying details and be prepared to explain how privacy was protected.

#### “Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.”

- This is a strong operational-impact bullet.
- Clarify that your analysis informed the staffing change and that the wait-time reduction was measured afterward.
- Include the post-change measurement period if available.
- Be cautious about claiming the analysis alone caused the reduction if other changes occurred at the same time.

#### “Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.”

- This demonstrates data cleaning and entity matching well.
- Clarify the matching method at a high level if it was manual, rule-based, or probabilistic.
- Be precise about whether “unique households” was directly observed or inferred from the available fields.
- Consider noting any limitations, such as incomplete records or uncertain matches, if the result depended on assumptions.

#### “Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.”

- Keep this. It shows documentation, maintainability, and successful handoff.
- Clarify how you know it was used after the project ended—for example, whether the coordinator confirmed use or whether you observed subsequent updates.
- If the guide enabled independent maintenance without further assistance, that is an important outcome to preserve.

## Skills

### “Tools: SQL, Python, Excel”

- This is accurate but underspecified for a data analyst resume.
- Add databases, visualization platforms, Python libraries, version-control tools, or modeling tools only if you have meaningful experience with them and can discuss them.
- If you used SQL in a particular warehouse or used Python for specific analysis libraries, listing those details would help recruiters assess fit.
- Do not add technologies merely because they appear in a job description.

### “Methods: dashboards, forecasting, metric design, data-quality checks”

- These are relevant, but some are broad and may be interpreted as vague.
- Make sure each method is supported by a corresponding experience or project bullet. Forecasting is supported; dashboards and data quality are also supported. “Metric design” is less clearly demonstrated and may need stronger evidence elsewhere.
- Consider separating analytical methods from business capabilities if you have enough skills to justify categories.
- Avoid listing generic traits or methods that you cannot explain technically in an interview.

## Overall presentation

- Use consistent punctuation across bullets. Most bullets currently end with periods, so keep that standard throughout.
- Use consistent date formatting and dash characters.
- Keep verb tense consistent: current roles use present tense; completed roles and projects use past tense.
- Prioritize outcomes over routine duties, particularly in the cinema and insurance sections.
- Make the distinction between **percentage points**, **percent change**, and **percentage reduction** precise throughout.
- Avoid claiming direct causation when your work informed a decision or enabled a process. State the connection accurately.
- The resume has strong quantified results, but several metrics need validation details so they appear credible rather than inflated.
- For a data analyst target, the strongest content is the Brightcart experience, the staffing analysis at Pinecrest, and the technically sound portions of the bike-share project. Those should receive the most emphasis.