## Highest-priority changes

1. **Remove your date of birth and nationality.** They aren’t relevant to your qualifications and can introduce avoidable bias. If work authorization matters for a role, address that separately and accurately.
2. **Fix the bike-share percentage claim.** Going from 300 empty-station hours to 200 is a one-third reduction, not 50%.
3. **Rework the A/B testing bullet.** Checking significance daily and stopping at the first p-value below 0.05 is statistically invalid unless you used an appropriate sequential-testing method. As written, it signals a serious misunderstanding of experiment design.
4. **Correct the SQL description about customers with no orders.** The join direction and the field being checked appear wrong for that task.
5. **Resolve the tense and grammar issues** in the Pinecrest SQL-style-guide bullet and the Brightcart attribution bullet.

## Header and education

- **Name and contact details:** These are appropriately concise. Make sure the profile link is a complete, working URL and that the email address and phone number are ones you monitor.
- **Date of birth and nationality:** Remove both, as noted above.
- **Education line:** The degree, institution, location, and dates are clear. Check whether the university’s official degree title is “B.S. in Statistics” and use that exact form. You don’t need to add coursework unless it is directly relevant to the roles you’re targeting.

## Experience

### Riverside Cinema

- **Box office and concessions bullet:** This is accurate but mostly lists duties. If you keep the role for analyst applications, consider whether you can add a meaningful measure of volume, accuracy, or customer-service responsibility. If not, keep it brief.
- **Training bullet:** This gives a useful number of people trained. Add an outcome only if you can substantiate one; otherwise, the current level of detail is fine.

### Brightcart Retail

- **Retention dashboard bullet:** Strong scope and business result. Clarify what “2.4M customers” refers to and the period or population used for the retention measure. The increase from 22% to 27% is a **5-percentage-point** change; make the unit clear so it isn’t mistaken for a 5% relative increase. Also be precise about how directly the dashboard contributed to the result.
- **Revenue-report bullet:** A good automation and time-saving accomplishment. Clarify whether “3 days” means working time or elapsed time, since the comparison with 2 hours is otherwise ambiguous.
- **Customers-with-no-orders bullet:** Check both the join logic and the null check. To identify customers with no matching orders, the query generally needs to preserve the customer records and check for a missing value on the **orders** side. A null customer name can occur for other reasons and may not identify customers without orders. The bullet also describes a method but not what the finding enabled, so add a concrete result if you have one.
- **Attribution bullet:** The opening gerund phrase has a grammar problem: the comma separates the described work from its verb. The bullet also packs several substantial tasks together; make the contribution and outcome easier to follow. Confirm that “dbt-style SQL models” accurately describes the tools and implementation, rather than implying you used dbt if you did not. Clarify what the change from 58% to 81% measures and over what period.
- **Quarterly review bullet:** This is a strong example of influencing decisions. If you can, briefly identify the type of recommendations or their eventual impact. Keep the claim tied to what you personally presented.
- **Dashboard training bullet:** Useful evidence of enablement and reduced demand on the analytics team. State the period or baseline behind “halving” if it isn’t already clear to a reader.

### Pinecrest Insurance

- **A/B test bullet:** This needs substantial attention for the statistical reason above. Repeatedly checking p-values and stopping when one crosses 0.05 increases the false-positive risk. If you used a valid sequential design, make that clear; otherwise, don’t present this as sound testing practice.
- **Call-center analysis bullet:** The before-and-after result is compelling. Clarify the period over which hold time was measured and your role in the staffing change, so the wording doesn’t imply you personally made the operational decision if you only recommended it.
- **SQL-style-guide bullet:** The role ended in 2022, so “Writes” is inconsistent with the surrounding past-tense bullets. Correct the tense to match what you did. Also make sure “cut query errors … by half” has a clear measurement period or basis.
- **Fraud-extract and other duties bullet:** This is overloaded with several unrelated responsibilities, which obscures the strongest result. The final clause also makes it unclear exactly what saved the fraud team 10 hours a month. Separate the automation result from other duties if those duties are important to retain, and clarify what the time-saving figure measures.

## Projects

### City Bike-Share Demand Study

- **Project heading and dates:** The heading is clear. Since it is marked as ongoing, keep the date current and make sure the project is genuinely still active. A code or portfolio link could help readers assess the work.
- **Forecasting bullet:** “Mean absolute error” is normally expressed in the units of the predicted quantity, so “within 12% mean absolute error” is unclear. Check whether you mean MAE, a normalized error, or a percentage-based metric, and label it accurately. Also clarify the forecasting grain and how you validated the model, especially how you avoided using future information.
- **Empty-station-hours bullet:** Correct the arithmetic: 300 to 200 is a reduction of 100 hours, or one-third. Also make clear that this was a replay or simulation, not a real-world reduction, and explain the comparison baseline or assumptions if space allows.
- **Forecast hit-rate bullet:** The change from 60% to 75% is 15 percentage points, not a 15% relative increase. Define what counts as a “hit” and how you evaluated it. Since this overlaps with the forecasting bullet, make sure the two metrics show distinct aspects of the work rather than repeating the same result.

### Food Pantry Visit Analysis

- **Shift and wait-time bullet:** This is a clear, practical outcome. Add the measurement period or basis for the wait-time figures if it isn’t obvious.
- **Visit-log bullet:** The data-cleaning scale is useful, but “matched repeat visitors” could prompt questions about how records were matched. If relevant, clarify the matching process and how you handled personal or sensitive information. The unique-household result would be stronger if you can quantify it.
- **Guide bullet:** This demonstrates that the work was maintainable after the project ended. Keep it; the coordinator’s ongoing use is a useful outcome.

## Skills and overall presentation

- **Tools:** SQL, Python, and Excel are relevant, but the experience suggests there may be other tools worth listing if you actually used them—such as a BI platform, version control, or a transformation tool. Don’t list tools based only on similarity to what you used.
- **Methods:** “Dashboards” is more of an output than a method, and the other terms are broad. Make this section more specific to skills you can confidently discuss in an interview. Given the A/B-test bullet, don’t list experimentation or statistical testing unless you can describe a sound approach.
- **Targeting:** Your analyst experience is the main story. Keep the cinema role concise so it doesn’t compete with that story, and tailor the resume to the specific analyst role rather than adding a generic summary.