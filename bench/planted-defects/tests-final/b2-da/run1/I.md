## Highest-priority changes

1. **Remove date of birth and nationality** for a U.S.-style resume. They are unnecessary and can introduce discrimination concerns. Address work authorization separately only if an application requests it.
2. **Correct the two numerical errors in the bike-share project:**
   - 300 to 200 is a **33% reduction**, not 50%.
   - 60% to 75% is a **15-percentage-point increase**, not a 15% increase.
3. **Remove or substantially change the A/B-test bullet.** Repeatedly checking a conventional p-value and stopping below 0.05 creates an optional-stopping problem and undermines the validity of the result.
4. **Fix the left-join bullet.** Testing for a null customer name is not a reliable way to identify unmatched orders; the test should use a non-nullable key from the joined table. The bullet also needs a business outcome.
5. **Clarify your current positioning.** A box-office role after several years in analytics may confuse recruiters. Keep it because it is current employment, but separate it as additional experience or make the reason for the analytics transition clear elsewhere.
6. **Strengthen the skills section.** It is too sparse relative to the experience described.

---

## Header and contact information

### Name
- No change needed.

### Phone, email, LinkedIn
- Ensure the LinkedIn URL is live, customized, and matches the dates and titles on the resume.
- If the website is a portfolio rather than LinkedIn, label it clearly and include projects or code that support your analytics claims.
- Add your city and state if you are applying locally or want recruiters to understand your location. Do not add a full street address.

### Date of birth and nationality
- Remove both for U.S. applications. Neither helps establish your qualifications.
- Do not replace nationality with immigration details unless there is a specific reason. Work-authorization questions are normally handled in the application.

---

## Education

### Eastmoor University line
- Keep it concise as it is.
- Use consistent date punctuation throughout the resume, preferably an en dash rather than a hyphen.
- Add GPA only if it is strong and still useful this far after graduation.
- Add relevant coursework only if you need specific keywords that are not demonstrated in your experience. With five years of experience, coursework generally has low value.
- If the degree was earned outside the United States despite the location shown, make the location and degree equivalency unambiguous.

---

## Experience

### Riverside Cinema — role heading
- Keep the dates accurate and make sure “Present” is still correct.
- Consider moving this role into an **Additional Experience** section below the analytics roles. It is current, but it should not visually overshadow your more relevant work.
- If there was a layoff, career transition, relocation, or other reason for the shift, do not add a lengthy explanation to the resume. A short summary or cover letter can establish that you are actively returning to analytics.

### “Sold tickets and concessions…”
- Add scale if available: transactions per shift, cash volume, drawer accuracy, customer volume, or error rate.
- Reduce emphasis on routine duties unless you need this bullet to show reliability and current employment.
- Keep only one bullet for basic service duties; analytics recruiters will give this limited weight.

### “Trained 3 new attendants…”
- Keep this because it demonstrates trust and training ability.
- Add an outcome if one can be supported, such as reduced onboarding time, fewer refund errors, or independent shift readiness.
- Avoid overstating leadership based solely on training three people.

---

### Brightcart Retail — role heading
- This is your strongest and most relevant role. Give it the most space.
- If you were promoted or your scope changed during the three years, show that progression.
- Consider adding the principal technology environment if it is not otherwise obvious.

### Retention-dashboard bullet
- Keep the customer scale and repeat-purchase metric; both are strong.
- Clarify the time period over which repeat purchase rose.
- Be careful with causality. If the dashboard supported a campaign but did not independently cause the increase, make your contribution distinct from the marketing team’s work.
- State whether the increase was measured through an experiment, a cohort comparison, or an observational before-and-after analysis if space permits.

### Monthly-revenue-report bullet
- Keep it; the reduction from three days to two hours is compelling.
- Add the relevant database, BI platform, scheduling tool, or orchestration tool if those are valuable keywords and were actually used.
- Clarify whether the time saving occurred every month and whether the report’s accuracy or availability also improved.
- Make sure “three days” means analyst labor rather than elapsed processing time.

### Customers-with-no-orders bullet
- Correct the matching logic. A nullable descriptive field such as customer name should not be used to determine whether a join matched.
- Add the purpose and outcome: how many records were found, what issue was corrected, or what decision the analysis supported.
- If there was no meaningful business result, delete this bullet. As written, it describes a basic SQL operation and may make your SQL level appear more junior than the rest of the resume suggests.
- Verify that the join direction matches the stated goal. Finding customers with no orders normally starts from the full customer population and tests for a missing order key.

### Attribution/data-model bullet
- Change the opening construction so it uses a clear past-tense action verb. The current gerund-led structure is awkward and less direct than your other bullets.
- Keep the 58% to 81% improvement; it is a strong data-quality result.
- Clarify whether “tied to a campaign” means correctly attributed, merely assigned, or recovered from missing attribution.
- Replace “dbt-style” with the actual technology if you used dbt. If you did not use dbt, avoid implying experience with it and describe the modeling approach accurately.
- Mention validation or reconciliation if relevant, because attribution changes can improve coverage while still introducing incorrect matches.
- Consider reducing implementation detail if it prevents the business importance from being immediately clear.

### Quarterly-review bullet
- Keep the funding outcome; it demonstrates influence beyond report production.
- Clarify what area the recommendations addressed so recruiters can understand their business significance.
- Add the value of the funded initiatives or later results if known.
- Reduce ambiguity around what “its” refers to.

### Merchandiser-training bullet
- Keep it; the combination of enablement and reduced requests is strong.
- Add the dashboard platform if relevant.
- State the period over which requests were halved and, if possible, the starting and ending request volume.
- Ensure that the reduction was measured rather than estimated.
- Clarify whether you created the training materials as well as delivered the sessions, if true.

---

### Pinecrest Insurance — role heading
- No structural change is required.
- Ensure the title reflects the official title. Do not inflate it, but you can add a functional specialization in parentheses if that is accurate and useful.

### A/B-test bullet
- Remove this bullet unless you can accurately describe a statistically valid testing method.
- Daily checking followed by stopping at the first conventional significance threshold inflates the false-positive rate. A knowledgeable analytics hiring manager may treat this as a serious warning sign.
- If the actual test used a fixed sample size, a pre-registered stopping rule, sequential testing, alpha spending, or another valid correction, state the real method.
- Do not merely remove the description of daily checking while presenting the result as valid if the underlying analysis was flawed.

### Call-center bullet
- Keep it; it connects analysis to an operational change and a substantial outcome.
- Clarify whether you recommended the staffing move or whether leadership independently acted on your findings.
- Add the analysis method or tool only if it strengthens your fit for the target role.
- State the measurement period for the hold-time reduction if known.
- Avoid implying permanent causality if the result was measured only during a short pilot.

### SQL-style-guide bullet
- Change the verb to past tense to match a completed role.
- Keep the error reduction, but define the measurement period or the number of reviews if available.
- Clarify whether you authored the guide or maintained an existing one.
- Consider identifying the types of errors reduced if that demonstrates technical depth.
- Verify that “by half” is supported by tracked counts rather than an informal estimate.

### Fraud-extract/admin bullet
- Shorten or divide the content conceptually. The long list of unrelated administrative tasks hides the valuable automation result.
- Center the bullet on the fraud extract, the automation method, and the ten-hour monthly saving.
- Remove the calendar, onboarding, sales-question, and help-desk details unless the target role specifically values broad team operations.
- If you retain any secondary responsibilities, group only closely related ones.
- Add the technology used and note any improvement in reliability, timeliness, or data quality.
- Avoid “while also,” which makes the bullet read as workload description rather than accomplishment.

---

## Projects

### City Bike-Share Demand Study — heading
- Add a repository, dashboard, report, or portfolio link if the work is public and polished.
- If it is no longer actively maintained, replace “Present” with the actual completion date.
- State whether this used historical simulation only; that distinction matters because no real-world system appears to have been deployed.
- If the project is still active, indicate what remains in progress through the project materials rather than leaving recruiters to guess.

### Demand-model bullet
- Keep the scale, data period, and error metric.
- Explain the validation design in the linked project: time-based split, rolling validation, or holdout period. Random splitting can leak future information in forecasting.
- Compare the 12% error with a baseline model so readers can judge whether it is strong.
- Define the exact target and metric in the project documentation. “Within 12% mean absolute error” is technically unclear if you mean mean absolute percentage error.
- Confirm that all features would have been available at prediction time.

### Empty-station-hours bullet
- Correct the arithmetic: the reduction from 300 to 200 is approximately 33%.
- Make the unit precise. If you mean accumulated station-hours across locations, use that definition consistently.
- Do not present a replay or simulation as a real operational reduction. Make its simulated or back-tested nature explicit.
- Describe the rebalancing assumptions in the project, because results can depend heavily on fleet capacity, truck availability, and perfect-foresight assumptions.
- Avoid claiming causality beyond what the replay supports.

### Forecast-hit-rate bullet
- Correct the percentage language. The change is 15 percentage points, or 25% relative to the original rate.
- Define “hit rate.” It is not a standard forecasting metric without a threshold or success criterion.
- Explain how this measure differs from the error metric in the first bullet; otherwise the two bullets may appear redundant.
- Verify that weather and event data were available as forecasts rather than actual future observations. Using realized future weather would create leakage.
- If 120 stations already appears in the preceding bullet, use the space for methodology, comparison, or business relevance instead of repeating it.

---

### Food Pantry Visit Analysis — heading
- Keep the volunteer designation and team size.
- Clarify your individual contribution where the bullets could otherwise be interpreted as team accomplishments.
- Add a project link only if privacy has been fully protected and the pantry has approved publication.

### Visit-pattern bullet
- Keep the operational outcome; it is strong and socially meaningful.
- Clarify whether the change was directly based on your analysis and how long the shorter line was observed.
- Use measured averages or medians rather than single-day observations if that is what the numbers represent.
- Be careful about attributing the entire reduction to moving one shift if other operational changes happened at the same time.

### Handwritten-log bullet
- Keep the scale and first-time household count.
- Explain your role in transcription, cleaning, record linkage, or validation if it demonstrates useful technical work.
- Be precise about how repeat visitors were matched, especially if names, addresses, or other personal data were involved.
- Avoid exposing sensitive data in any portfolio materials.
- If matching was probabilistic or involved uncertain duplicates, document the validation approach and error handling.

### One-page-guide bullet
- Keep it because it shows sustainability and knowledge transfer.
- Add evidence of continued use, such as the number of successful monthly updates, if available.
- Clarify whether the guide covered data entry, cleaning, refresh steps, or reporting.
- This is the least quantitatively impressive project bullet, so retain it mainly if operational handoff is valued in your target roles.

---

## Skills

### Tools
- Expand this section to reflect the tools already implied by your experience.
- Include specific databases, BI platforms, data warehouses, version-control tools, orchestration tools, and Python libraries only if you can use them confidently in an interview.
- If you used dbt, list it directly; if you only used similar SQL patterns, do not list dbt.
- Consider indicating relative proficiency only if the distinctions are honest and clear. Avoid graphical skill bars.
- “Excel” is broad; include advanced capabilities only if they are real and relevant.

### Methods
- Add stronger analytical keywords supported by your bullets, such as experimentation, cohort or retention analysis, dimensional/data modeling, data validation, automation, and time-series forecasting.
- Remove generic terms that add little differentiation if space becomes tight.
- Use standard terminology recruiters are likely to search for.
- Do not list methods that conflict with the work described—for example, do not claim experimental design unless you can discuss valid stopping rules, power, and inference.

---

## Formatting and overall positioning

- Keep the resume to one page if possible, given your experience level.
- Use consistent date formatting, capitalization, bullet punctuation, and past/present tense.
- Avoid manual line breaks inside bullets if they were inserted rather than caused by normal text wrapping; they can create awkward parsing.
- Use an ATS-safe layout without text boxes, icons, multiple columns, or important information in headers and footers.
- Prioritize bullets in this order within each role: business impact, analytical complexity, automation/data quality, then training/documentation.
- You probably do not need a summary, but one may help if the current cinema role makes your target unclear. If included, it should establish your analytics experience and target role without explaining personal circumstances.
- Tailor the skills and bullet ordering for each application, especially for product analytics, marketing analytics, operations analytics, or BI roles.