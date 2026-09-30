# Resume review

The strongest material is your quantified data work: the retention lift, reporting-time reduction, and self-serve dashboard adoption. The main fixes are to correct a few technical or statistical claims, make results easier to interpret, and focus the skills section on the tools and methods relevant to data analyst roles.

## Header

- **Name, phone, email, and LinkedIn:** Keep these. Make sure the LinkedIn URL is clickable and your profile supports the experience described here.
- **Date of birth:** Remove it. It is not relevant to your qualifications and can introduce bias.
- **Nationality:** Remove it unless a specific application asks for it. If work authorization is relevant, state that directly rather than listing nationality.
- **Missing location:** Consider adding your current city and state/country near your contact details, especially if you are applying to location-specific roles.
- **Technical links:** Add a portfolio, GitHub, or project link if you have one. For a data analyst resume, a portfolio with clear project methods and results may be more useful than GitHub alone.

## Education

- **Eastmoor University entry:** This is clear and appropriately concise. Since you have several years of experience, coursework is probably unnecessary. Include GPA only if it is strong and useful for the roles you’re targeting.

## Experience

### Riverside Cinema — Box Office Attendant

- **“Sold tickets and concessions during evening shifts and balanced the cash drawer at close.”** This is clear, but less relevant to analyst roles than the rest of your experience. Keep it if you need to show your current employment; consider trimming detail that does not demonstrate responsibility, accuracy, or customer service.
- **“Trained 3 new attendants on the ticketing system and the refund policy.”** Keep the training detail and number. If space is tight, prioritize this over routine shift duties because it shows trust and communication.

### Brightcart Retail — Data Analyst

- **Retention dashboard bullet:** Strong combination of audience, business use, and outcome. Clarify what “lifting” means—whether the increase is a measured result attributable to the campaign or a change observed after launch—and ensure the comparison period or measurement basis is defensible.
- **Revenue-reporting bullet:** Keep this. It clearly communicates the process improvement and time saved. If you have room, make sure the dashboard’s audience or recurring use is apparent; otherwise the current result is already compelling.
- **Customers-with-no-orders bullet:** Recheck the join direction and null field. As written, a left join from orders to customers would not normally identify customers with no orders; that generally requires starting with customers and checking for missing matching orders. Also, counting a null customer name may be unreliable if names can be missing for other reasons. Describe the finding’s value or follow-up, if there was one; the current bullet explains a query technique but not its impact.
- **“Joining 40 source tables…” bullet:** Fix the sentence structure: it currently reads as a fragment, and the action/result relationship is hard to follow. Clarify whether you personally joined the tables, what “dbt-style” means in this context, and how the attribution change was measured. The increase from 58% to 81% is valuable, so make that result easy to spot. Use “dbt” as a skill only if you actually used the tool, rather than SQL models with a similar approach.
- **Quarterly customer review bullet:** Keep the evidence that leadership acted on your recommendations. Clarify the nature or importance of the funded recommendations if that can be stated accurately; “two of three” is useful but leaves their impact unclear.
- **Self-serve dashboard training bullet:** Keep this. It shows adoption and reduced analyst workload. Confirm how you measured the halving of ad hoc requests and over what period.

### Pinecrest Insurance — Junior Analyst

- **Checkout A/B test bullet:** Change the described testing method. Checking the p-value daily and stopping at the first value below 0.05 is a form of repeated significance testing that can inflate the false-positive rate. Use a prespecified test duration/sample size or a valid sequential-testing method, and include the test’s outcome or business decision if available.
- **Call-center analysis bullet:** Strong: it connects analysis to an operational change and a measurable result. Clarify whether the hold-time reduction was observed after the staffing change and over what period, if you can support that detail.
- **SQL style-guide bullet:** Fix the tense: “Writes” conflicts with the past-tense bullets and the role’s end date. Keep the review-error reduction, but clarify the time period or basis for “by half” if known.
- **Fraud-extract and miscellaneous duties bullet:** The automation and 10-hours-per-month saving are useful, but the long list of calendar, sales, onboarding, and help-desk tasks obscures the analytical achievement. Separate or trim the unrelated duties so the fraud automation and its impact are prominent. Also clarify what the saved hours represent and who benefited.

## Projects

### City Bike-Share Demand Study

- **First bullet:** The scope and error metric are useful, but “within 12% mean absolute error” is ambiguous. Mean absolute error is usually expressed in the demand measure’s units; a percentage error measure needs to be identified as such. Specify which metric you calculated and how you validated the forecast.
- **Second bullet:** The arithmetic does not match: reducing empty-station hours from 300 to 200 is a one-third reduction, not 50%. Reconcile the values or the percentage. Also make clear that this was a replay/backtest, not a change implemented in the real bike-share system, so readers do not mistake a simulated result for an operational outcome.
- **Third bullet:** Clarify what “forecast hit rate” means and how it differs from the first bullet’s error metric. Explain the basis for the 15% increase: 60% to 75% is a 15-percentage-point increase, or a 25% relative increase. State the intended interpretation and keep it consistent.
- **Project dates:** Jan 2025–Present is fine if you are still actively maintaining or extending it. If the work is finished, use the actual end date.

### Food Pantry Visit Analysis

- **First bullet:** Strong operational impact. Clarify whether the line-time reduction was measured after the shift change and over what period.
- **Second bullet:** Keep this; it shows data cleaning and a clear deliverable. “Matched repeat visitors” may need a brief explanation elsewhere in the project description if the matching method or privacy safeguards are relevant to the role.
- **Third bullet:** This is a useful sign that the work remained usable after your involvement. Keep it if you have room; it is less important than the measured operational and data-cleaning results.

## Skills

- **Tools: SQL, Python, Excel:** This is too limited for many data analyst postings. Add relevant tools you can use confidently—especially BI/dashboard platforms, databases, and analytics or statistical libraries. Do not list tools you have only briefly encountered.
- **Methods:** These are broad categories rather than specific capabilities. Make clear which analytical methods you can perform; for example, distinguish forecasting, experimentation, and metric definition if those are genuine strengths. Your A/B test bullet should be corrected before presenting experimentation as a skill.
- **Organization:** Consider grouping skills by category so recruiters and ATS can scan them quickly. Include dbt only if you used dbt itself, not merely a dbt-like modeling approach.

## Formatting and focus

- Keep dates and punctuation consistent across entries.
- Check the wrapped lines for clear bullet formatting and avoid splitting phrases in ways that make a bullet harder to scan.
- The resume already has relevant project work, so prioritize the stronger analytical achievements over routine duties when space is limited.
- Before finalizing, verify every percentage, baseline, measurement period, and attribution claim. The bike-study percentage mismatch and the A/B testing method are the most important issues to resolve.