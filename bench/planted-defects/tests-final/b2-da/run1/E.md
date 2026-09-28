## Overall assessment

This shows credible data-analyst experience: measurable reporting improvements, customer and campaign analysis, and examples of analysis informing operational decisions. The main fixes are to resolve a few **method and math credibility issues**, clarify what caused the reported outcomes, and make the skills section more specific.

I’m treating this as a general data-analyst resume; the evidence points toward **customer/product analytics** or **BI/data analyst** roles, but you haven’t named a target. I reviewed the pasted text only, so the visual layout and original-file parsing are **not assessed**.

## Change these first

1. **Pinecrest A/B test:** The bullet says you checked the p-value daily and stopped as soon as it fell below 0.05. Repeatedly checking and stopping at that threshold can inflate false-positive risk, so the result shouldn’t be presented as conventionally significant unless the test used a valid sequential-testing method. Verify the test design and analysis. If it did not account for repeated checking, don’t claim a statistically significant result.
2. **Bike-share reduction:** The change from 300 to 200 empty-station hours is a reduction of about **33%**, not 50%. Correct the percentage or verify the underlying figures.
3. **Bike-share outcome framing:** The empty-station result is from a replay, which is a simulation—not evidence that real-world empty-station hours were reduced. Make the simulated nature unmistakable and avoid presenting it as an operational result.
4. **Privacy:** Remove your date of birth. Nationality usually doesn’t help establish job eligibility and may expose you to bias; omit it unless an application specifically requires it. Don’t substitute a work-authorization claim unless it is accurate and relevant.
5. **SQL example at Brightcart:** The stated join direction appears inconsistent with finding customers who had no orders. A left join from orders to customers would not normally identify customers with no orders, and a null customer name could also mean the name is missing. Verify the actual query logic and describe the method accurately.

## Line-by-line changes

### Header, education, and experience structure

- **Contact details:** Keep them if they’re current. Consider putting your location in the header rather than repeating the same city under every role.
- **Education:** Keep the degree and dates; the statistics background is relevant to analytics.
- **Riverside Cinema role:** Keep it so your current employment and dates are clear. For data-analyst applications, consider placing it in a clearly labeled additional-experience section so it doesn’t draw the first attention away from your analytics work. Preserve its dates and current status.
- **Brightcart and Pinecrest titles and dates:** They are clear as written. Keep the chronology accurate if you reorganize sections.

### Riverside Cinema

- **Sold tickets and concessions / balanced the cash drawer:** This is clear, but less relevant to analytics roles. Keep it brief if space is tight.
- **Trained 3 new attendants:** Keep if you want to show training and communication. If you need room, prioritize analytics evidence over this bullet.

### Brightcart Retail

- **Weekly retention dashboard:** Keep the scale and business outcome; they’re strong evidence. Clarify how the 90-day repeat-purchase change was measured and how directly the dashboard or campaign contributed to it. Otherwise, the current wording may imply stronger causation than you can substantiate.
- **Monthly revenue report:** Keep this; it gives a clear before-and-after efficiency result. Make sure the three-day and two-hour figures refer to comparable reporting cycles and include the full work involved.
- **Customers with no orders:** Verify and correct the join direction and null check, as noted above. Also shift the emphasis away from explaining a basic SQL operation and toward why the analysis mattered, if you have a supported outcome to include.
- **Forty source tables / loyalty systems / attribution logic:** This bullet is difficult to follow and has a grammatical issue: it starts with “Joining” but the sentence’s subject and action are unclear. Simplify its structure, clarify whether you used dbt itself or SQL models in a dbt-like style, and confirm that “40 source tables” accurately describes your work. Keep the 58%–81% result, but make clear what the measure represents and what you personally did.
- **Quarterly customer review:** Keep the funded recommendations; they show that your work informed a decision. Clarify whether two recommendations were funded, rather than implying that your presentation alone caused that outcome.
- **Dashboard training:** Keep the number trained and the change in ad hoc requests. Verify that “halving” is based on a comparable before-and-after period, and make the connection between the training and reduction clear.

### Pinecrest Insurance

- **A/B test:** Resolve the testing-method issue before keeping any conclusion about significance. If you retain the experience, make sure the description reflects the actual test design and does not overstate what the results establish.
- **Call-center analysis:** Keep the analysis and hold-time result. Clarify the measurement period and how the staffing change relates to the reduction, so the bullet doesn’t claim more causal certainty than the evidence supports.
- **SQL style guide:** Change the verb tense to match the completed role. Clarify whether you wrote the guide and checklist yourself or contributed to them, and define the period or count behind the reduction in review errors if available.
- **Fraud extract and other duties:** This bullet bundles automation, time saved, calendar upkeep, sales questions, onboarding documents, and help-desk coverage. Make the analytics contribution and its 10-hours-per-month result easier to find; the unrelated duties dilute it. Check that the time saving is attributable to the automation and measured consistently.

### Projects

**City Bike-Share Demand Study**

- **Demand forecast:** Keep the station count and error result, but explain what “12% mean absolute error” means in your evaluation. MAE is usually expressed in the target’s units unless it has been normalized; state the metric and validation approach clearly enough that the result can be interpreted.
- **Empty-station replay:** Correct the percentage and label the outcome as simulated, as noted above. Make sure the replay comparison uses the same assumptions and period.
- **Forecast hit rate:** Define what counts as a “hit.” The change from 60% to 75% is **15 percentage points**, not a 15% relative increase. Make the distinction unambiguous. Also check whether this bullet and the forecast-error bullet report separate, useful measures; if not, avoid repeating the same result in different terms.

**Food Pantry Visit Analysis**

- **Visit timing and Saturday line:** Keep the operational result, but clarify that “line” means wait time and how the 50-to-20-minute comparison was measured. Make clear whether the shift change followed your analysis and whether the before-and-after periods are comparable.
- **Handwritten logs and unique households:** Keep the scale and the useful outcome. If relevant to the project, explain how repeat visitors were matched and how you protected sensitive visit information; don’t disclose identifying details.
- **Monthly update guide:** Keep this if you want to show that the work remained usable after the project. It’s a valuable sustainability detail, though it may be lower priority than the analysis and operational outcome if space is limited.

### Skills

- **Tools:** SQL, Python, and Excel are useful, but the section is sparse relative to the work described. Add specific platforms or tools only if you actually used them and can discuss them.
- **Methods:** “Dashboards” describes a deliverable more than a method. Organize this section around concrete analytical methods and capabilities you can support with the experience above; don’t add skills just because they appear in a job posting.

## Best next step

The strongest improvement would be to correct the testing and bike-share claims, then tighten the Brightcart bullets so each clearly communicates your contribution, the result, and how that result was measured. If you share a target job description, I can assess which evidence to foreground for that role.