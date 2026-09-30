## Overall assessment

This has solid evidence for **data analyst, BI analyst, or product/operations analytics** roles: operational reporting, SQL, data-quality work, dashboards, and projects with measurable outcomes. The main concern is not lack of experience—it’s **credibility and accuracy**. One bullet describes a statistically invalid national conversion calculation, another describes SQL logic that may not find customers without orders, and a pantry-project bullet appears copied from your retail role. Fix those before applying.

I reviewed the pasted text only. I couldn’t assess the original document’s visual layout or how it extracts from a resume file. I have not rewritten any lines or supplied replacement wording.

## Changes to make, section by section

### Contact and personal details

- **Remove your date of birth and nationality** unless an application specifically requires them. They aren’t needed to assess your analytics qualifications, and nationality is not the same as work authorization.
- **Check the profile link in the version you submit.** The supplied address appears anonymized; make sure your actual resume has a working, complete link.

### Education

- **B.S. in Statistics:** Keep this. It supports your analytical work.
- **Dates and location:** These are clear as written. No change is necessary unless you want to shorten the education entry to make room for more relevant experience.

### Pinecrest Insurance

- **Claims backlog report and weekly numbers:** Clarify what you were responsible for and how the managers used the reporting. “Owned” signals responsibility, but “the weekly numbers” is vague and doesn’t show the report’s purpose or scope.
- **Call-center analysis and hold-time reduction:** Keep the result, but verify the connection between your analysis, moving two agents, and the reduction from 9 to 5 minutes. Make clear whether you recommended the change or implemented it, and how the before-and-after periods were measured. The outcome is strong; the attribution needs to be defensible.
- **SQL style guide and review checklist:** Keep this, but be ready to support “cut query errors by half” with a timeframe and a clear basis for the comparison. Without that context, the size of the improvement is hard to interpret.
- **Fraud-flag automation and other duties:** Separate the automation achievement from the calendar, sales questions, onboarding documents, and Friday help-desk coverage—or remove the less relevant duties. The current bullet bundles unrelated work, obscures the technical contribution, and makes the 10-hours-a-month saving harder to connect to the automation. Verify how that time saving was estimated.

### Brightcart Retail

- **90% reporting-efficiency improvement:** Define what “efficiency” measures and how it was calculated. As written, 90% is a large but ambiguous claim. If you can’t substantiate the metric, don’t rely on it.
- **Customers with no orders:** Recheck this bullet’s SQL logic before keeping it. To find customers with no matching orders, the query needs to preserve the customer records and test for a missing value on the **orders** side of the join—typically an order identifier that cannot be null for a matched order. Checking for a null customer name can instead identify records with missing names. As written, the method does not reliably support the stated finding.
- **Data-quality checks across 40 tables:** Keep this. It gives useful scale and a concrete result. Add context if available about the period covered and what counted as a broken load; that would make the “15” more meaningful.
- **Quarterly review and funded recommendations:** Keep this. Clarify your role in developing the recommendations, and don’t imply that presenting them caused the funding unless you can support that connection. Funding also does not necessarily mean the recommendations were implemented.
- **National conversion rate:** Correct or remove this before submitting. A simple average of 14 regional rates does not generally produce the national conversion rate when regions have different traffic volumes. Calculate the overall rate from the combined totals if the underlying counts support it; if you intentionally mean the average regional rate, label and interpret it as such. This issue is particularly important because it conflicts with the statistical judgment the rest of the resume is asking readers to trust.
- **Retention dashboard and 22% to 27% repeat purchase:** Keep the dashboard and result if you can substantiate them. Clarify the measurement period, cohort definition, and your contribution. Be careful with the claim that the dashboard “lifted” the rate: the bullet says marketing used it for retargeting, but that alone does not establish that the dashboard or campaign caused the increase. Also distinguish a five-percentage-point change from a relative percentage increase when discussing the result.

### Projects

**City Bike-Share Demand Study**

- **Forecasting 120 stations with 12% mean absolute error:** Keep the scale and evaluation, but make sure “12%” has a defined basis. Mean absolute error is ordinarily expressed in the same units as the demand being predicted; a percentage form needs a clear normalization. Be prepared to explain how you split training and test data and avoided using future information.
- **Rebalancing replay and empty-station hours:** Keep the result only with the simulation context prominent. You describe a replay, not a live operational deployment. Clarify what was replayed, what assumptions the comparison used, and whether the reduction came from your forecast-driven approach rather than a different schedule or other assumptions.
- **Published notebooks and city link:** This is useful evidence of a public project. Keep the distinction clear: the open-data team linking to your work shows it was linked from their page; don’t imply endorsement or adoption unless that happened. Include a working link in the actual resume if appropriate.

**Food Pantry Visit Analysis**

- **Shift change and shorter Saturday line:** Keep the outcome, but clarify your role in a team of three and how the line-time comparison was measured. The bullet currently moves quickly from analysis to an operational result without showing who made the change or how the result was attributed.
- **9,000 handwritten logs and unique-household count:** This demonstrates substantial data cleanup. Clarify your role and how repeat visitors were matched, since matching handwritten records can be uncertain. Because these are sensitive visit records, ensure the work was authorized and that no identifiable or confidential information is exposed in any public materials.
- **Retention dashboard for 2.4 million shoppers:** Remove this from the pantry project. It appears copied from the Brightcart role and is unrelated to a food pantry. Leaving it here creates a serious credibility problem and makes the reader question the surrounding project claims.

### Skills

- **Tools:** SQL, Python, and Excel are relevant. Add other tools only if you have actually used them and can discuss that use; the resume currently gives no detail about the environment behind the dashboards or analysis.
- **Methods:** “Dashboards,” “forecasting,” and “data-quality checks” are supported elsewhere in the resume. “Metric design” needs particular care given the incorrect national conversion-rate calculation; keep it only if you can demonstrate sound metric definitions and aggregation choices. Use the space for methods that are both relevant to your target and supported by your experience.

## Fix these first

1. Remove the copied 2.4-million-shopper bullet from the pantry project.
2. Correct or remove the national conversion-rate bullet, and verify the SQL logic in the no-orders bullet.
3. Substantiate the large impact claims—especially the 90% efficiency improvement, hold-time reduction, and retention lift.

If you share a target job description, I can assess which of the remaining material to emphasize for that role.