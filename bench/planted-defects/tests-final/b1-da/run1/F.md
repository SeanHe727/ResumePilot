## Overall

You have several strong, quantified outcomes, but a few accuracy and consistency issues could undermine trust. Fix those first, then tighten vague metrics and add links to your work. I’m describing what to change and why, not rewriting any bullets.

## Contact information

- **Remove your date of birth and nationality.** They aren’t needed for most U.S. applications and can expose you to irrelevant bias. If work authorization or sponsorship is relevant, state that directly instead.
- **Add a GitHub or portfolio link if it contains relevant work.** The bike-share project would benefit from a direct link to its notebooks and write-up. Keep LinkedIn; a GitHub link is useful when it shows clean, documented analysis.

## Structure and ordering

- **Move Experience ahead of Education.** With several years of relevant work, your professional experience is likely the strongest evidence for a data analyst role.
- **Consider placing Skills near the top.** This makes relevant keywords easier for recruiters and applicant-tracking systems to find. Keep the section concise and limited to skills you can discuss confidently.

## Pinecrest Insurance

- **Claims backlog report bullet:** Specify what you owned beyond producing the report—for example, its scope, audience, or how managers used it. “The weekly numbers” is vague, so a reader can’t tell what you analyzed or why it mattered.
- **Call-center analysis bullet:** Keep the quantified result. Clarify the measurement period or volume behind the hold-time comparison if you have it, and make sure the staffing change and improvement are accurately attributed to your analysis.
- **SQL style-guide bullet:** Keep the result, but give context for “cut query errors … by half,” such as the timeframe or number of reviews compared. That makes the improvement easier to assess.
- **Fraud-extract bullet:** Separate the automation impact from the unrelated calendar, sales, onboarding, and help-desk duties—or remove those details if they aren’t relevant to your target role. As written, the long list distracts from the useful result. Clarify how the 10 hours saved was measured.

## Brightcart Retail

- **Reporting-efficiency bullet:** Define what “efficiency” means. If you measured preparation time, manual effort, or turnaround time, identify the measure and comparison period. “90%” is impressive but hard to interpret without that context.
- **Customers-with-no-orders bullet:** Verify the SQL logic before including this. If you left-joined customers to orders, testing for a null **customer name** is not a reliable way to identify unmatched orders; the customer record is on the preserved side of that join. Check a field from the orders table that should be present for a match. Also say what the finding was used for and, if available, how many customers it affected.
- **Data-quality-checks bullet:** This is a solid technical accomplishment. Add the period over which the checks caught the 15 broken loads and, if known, what the checks prevented or enabled.
- **Quarterly-review bullet:** Keep the funding outcome. Clarify the connection between your recommendations and the funded decisions, and include the resulting business outcome if you can support it.
- **National-conversion-rate bullet:** **Do not present this as an accomplishment.** A simple average of regional conversion rates can misstate the national rate when regions have different traffic. Recalculate from total conversions divided by total eligible traffic (or use an appropriate traffic-weighted calculation). If this flawed figure was shared at work, correct the underlying reporting before using any related result on your resume.
- **Retention-dashboard bullet:** Check the causal claim that the dashboard lifted repeat purchase from 22% to 27%. A dashboard used for retargeting does not, by itself, establish that it caused the increase; use evidence such as a controlled test if you have it, or avoid claiming causation. Also clarify the measurement period and population behind the rates, and what “for 2.4M customers” means.

## Projects

### City Bike-Share Demand Study

- **Forecasting bullet:** Clarify the forecast target and evaluation setup. “12% mean absolute error” is ambiguous because ordinary mean absolute error is expressed in the target’s units, while a percentage error needs a defined percentage metric. State the evaluation period or holdout approach in the resume if space allows.
- **Rebalancing bullet:** Make clear that the decrease came from a retrospective replay, not a live operational change. Briefly clarify how the replay compared the forecast-driven approach with the operator’s schedule so readers can interpret the result fairly.
- **Publication bullet:** Keep this—being linked by the city’s open-data team is useful validation. Add a direct link to the notebooks or write-up.

### Food Pantry Visit Analysis

- **Visit and wait-time bullet:** Keep the outcome. Clarify the period over which the Saturday line was measured and how wait time was recorded, if you have those details.
- **Data-cleaning and household-count bullet:** Keep the scale and result. If possible, indicate how repeat visitors were matched or validated, since the reliability of the unique-household count depends on that method.
- **2.4-million-shoppers bullet:** **Remove this from the pantry project.** It appears to duplicate the Brightcart retention-dashboard claim and is inconsistent with a food-pantry analysis. As it stands, it looks like a copy-paste error and raises questions about the accuracy of the rest of the resume.

## Skills and Education

- **Skills:** The current list is credible but sparse for a data analyst resume. Add relevant tools, platforms, or specific analytical methods you have actually used—such as a BI tool, database platform, or version control—only if you can discuss them in an interview. “Dashboards” and “metric design” are broad; be prepared to describe the methods behind them.
- **Education:** The degree and dates are clear. Relevant coursework or GPA is optional; include it only if it adds value for the roles you’re targeting.

## Fix first

1. Recheck the left-join logic and the national conversion calculation.
2. Remove the mismatched pantry bullet and verify the Brightcart retention claim.
3. Clarify the metrics that currently lack a defined measure or evaluation method.
4. Add direct links to your project work and remove personal details that aren’t needed.