## Highest-priority changes

1. **Remove the date of birth and nationality** for a U.S.-style resume. They are unnecessary, can invite bias, and use valuable space. Include work authorization only if it is strategically helpful and accurate.
2. **Move Experience above Education.** With roughly five years of relevant experience, your work history should lead.
3. **Put Brightcart before Pinecrest.** Experience should be in reverse chronological order.
4. **Delete or correct the unweighted conversion-rate bullet.** It currently advertises a methodological error.
5. **Delete or correct the final Food Pantry bullet.** It appears copied from the Brightcart role and is inconsistent with the project’s subject and scale.
6. **Correct the forecasting metric terminology.** A percentage usually indicates mean absolute percentage error, not mean absolute error.
7. **Reduce vague claims and causal overstatement.** Several bullets need clearer measures, baselines, timeframes, or attribution.

## Contact information

### Name, phone, email, LinkedIn
- Keep these.
- Verify that the LinkedIn URL works and that the profile matches the resume.
- If the URL shown is only anonymized for this review, no issue. If it is the actual text, replace it with the real profile address.
- Consider adding the repository or portfolio containing the bike-share notebooks because that project has external validation.

### Date of birth and nationality
- Remove both for U.S. applications.
- If applying in a country where these details are customary, follow local norms instead.

## Education

### Eastmoor University | B.S. in Statistics | Metro City, USA | Sep 2016 - May 2020
- Move this section below Experience, and potentially below Projects.
- Use consistent date punctuation throughout; an en dash is cleaner than a hyphen.
- Do not add coursework now unless it is unusually relevant to a target role.
- Add honors or GPA only if they are strong and still useful after several years of experience.

## Experience structure

### Pinecrest Insurance | Junior Analyst
- Move this role below Brightcart.
- Keep the title and dates clear as shown.
- If “Junior Analyst” was your official title, retain it even though later bullets show substantial responsibility.

### “Owned the claims backlog report and the weekly numbers the claims managers used.”
- Add the scale, purpose, or result of the reporting responsibility.
- Clarify what “weekly numbers” means; it is too informal and vague.
- Explain whether the work improved timeliness, accuracy, prioritization, or backlog management. As written, it describes ownership but not value.

### “Analyzed 18 months of call-center data…cut average hold time from 9 to 5 minutes.”
- Keep this; it is one of the strongest bullets.
- Add the unit to both figures if it is not already unmistakable.
- Clarify the evaluation period and whether the reduction was measured after implementation.
- Make sure the staffing change can reasonably be credited with the result; if other changes contributed, avoid implying sole causation.

### “Wrote the team’s SQL style guide and review checklist…”
- Keep it.
- Define the measurement behind “by half” if possible: review period, number of queries, or error rate.
- Clarify whether these were logic errors, syntax errors, or broader quality issues. That distinction makes the achievement more credible.

### Long automation/calendar/help-desk bullet
- Remove the unrelated administrative responsibilities from this bullet.
- Keep the automation accomplishment and its 10-hours-per-month result together.
- The calendar, onboarding, sales questions, and help-desk duties dilute the technical impact and make the role appear more administrative.
- If any secondary duty produced a meaningful result, treat it separately; otherwise omit it.
- Clarify whether the time savings were measured or estimated.

## Brightcart Retail | Data Analyst

### Role heading
- Move this role above Pinecrest.
- If June 2025 is not the correct end date, fix it. If it is correct, no explanation is necessarily required, but ensure your current status is clear elsewhere if relevant.

### “Improved reporting efficiency by 90%…”
- Replace “reporting efficiency” with the actual quantity measured, such as preparation time, analyst hours, turnaround time, or manual steps.
- Include before-and-after figures if available.
- Clarify whether the process became fully scheduled or still required manual validation.
- The current percentage sounds impressive but is difficult to interpret or verify.

### “Found customers with no orders by left-joining…counting rows with a null customer name.”
- Correct the SQL logic. In this join pattern, the null check should generally be on a field from the unmatched orders side, not the customer name from the preserved customer side.
- Remove most of the elementary implementation detail unless the query was unusually complex.
- Add why identifying these customers mattered and what action or result followed.
- As written, the bullet risks making a technical reviewer question your SQL fundamentals.

### “Wrote data-quality checks on the 40 most-used tables…”
- Keep this; it is strong.
- Clarify the period over which the 15 broken loads were caught.
- If possible, indicate whether the checks blocked publication, alerted owners, or automatically stopped downstream refreshes.
- Make sure “most-used” was determined objectively rather than estimated.

### “Presented the quarterly customer review…”
- Keep it, but provide more substance about the recommendations or their expected value.
- “Funded” is useful evidence of influence, but it does not show whether the recommendations were implemented or produced results.
- If later outcomes are available, prioritize those over the presentation itself.

### “Reported the national conversion rate as the simple average…without weighting…”
- Remove this bullet unless it describes an error you discovered and corrected.
- It currently presents a flawed aggregation method as an accomplishment.
- If regional traffic volumes differ, an unweighted average can materially misstate the national rate.
- Verify whether the correct method should use summed conversions divided by summed traffic rather than merely averaging regional rates.

### “Built the weekly retention dashboard for 2.4M customers…lifting…”
- Keep this if the data and attribution are supportable.
- Add the timeframe over which repeat purchase moved from 22% to 27%.
- Clarify whether this was an experiment, a campaign comparison, or an observed change after adoption.
- Avoid claiming that the dashboard itself caused the lift unless you have a defensible causal design.
- Confirm whether the change is **5 percentage points** rather than 5 percent; reviewers may distinguish the two.

## Projects

### City Bike-Share Demand Study heading
- Keep the technologies and dates.
- If the project is complete and only occasionally maintained, replace “Present” with the completion date. Use “Present” only if active work is continuing.
- Add a direct repository or publication link if public.

### Forecasting bullet
- Correct the metric name. A result expressed as 12% is likely mean absolute percentage error; mean absolute error normally uses the outcome’s units.
- State how the evaluation was performed, such as a held-out time period or backtest, if space permits.
- Confirm that the model was evaluated against an appropriate baseline. Without one, 12% is hard to assess.

### Rebalancing replay bullet
- Keep the result, but make the simulated nature unmistakable.
- Do not imply that the operator actually changed its schedule if this was only a historical replay.
- Briefly define the assumptions used in the replay if they materially affect the outcome.
- “Last summer” will age poorly; use a specific season or year.

### Publication/open-data bullet
- Keep it. External recognition makes the project credible.
- Include the relevant link.
- Clarify whether the city linked directly to your analysis, repository, or general write-up.

## Food Pantry Visit Analysis

### Project heading
- Keep the volunteer context and team size.
- Be prepared to explain your individual contribution within the team.

### Visit-pattern and waiting-time bullet
- Keep it.
- Add the measurement period for the reduction from 50 to 20 minutes.
- Be careful with causality if other operational changes occurred at the same time.
- Clarify whether these are average, median, or peak wait times.

### Handwritten-log cleaning bullet
- Keep it; the scale and organizational value are strong.
- Clarify how repeat visitors were matched and validated, especially if names were inconsistent.
- Be ready to discuss privacy handling because this involved potentially sensitive service-use records.
- If the work included deduplication accuracy checks, mention the validation evidence rather than only the cleaning volume.

### “Built a retention dashboard for about 2.4 million shoppers…”
- Delete this immediately or replace it with the correct pantry-project accomplishment.
- It duplicates the scale and subject matter of the Brightcart retention work.
- A food pantry project involving 9,000 logs would not plausibly contain 2.4 million shoppers or retail repeat purchases.
- This inconsistency could make a recruiter question the accuracy of the entire resume.

## Skills

### “Tools: SQL, Python, Excel”
- Add specific, genuinely used technologies where relevant: SQL dialects, Python libraries, visualization tools, version control, cloud platforms, or orchestration tools.
- Do not add tools you cannot discuss in an interview.
- Your bullets mention dashboards but no dashboard platform; identify it if one was used.
- Consider indicating advanced Excel capabilities only if you can substantiate them.

### “Methods: dashboards, forecasting, metric design, data-quality checks”
- Make this more technically specific or remove items already demonstrated clearly in the experience section.
- “Dashboards” is a deliverable, not really a method.
- Add relevant statistical or analytical methods only if you have applied them.
- Ensure forecasting is supported by the bike-share project’s methodology and evaluation.

## Formatting and consistency

- Use reverse chronological order throughout.
- Keep date formatting consistent, preferably abbreviated months with en dashes.
- Avoid bullets that wrap to three or more lines when they contain multiple unrelated ideas.
- Use consistent terminology for percentages versus percentage-point changes.
- Make sure every major metric has a clear definition, timeframe, or baseline.
- Prioritize business outcome over routine responsibility, while avoiding unsupported causal claims.
- Keep the resume to one page if possible; you have enough strong material once the weak and erroneous bullets are removed.