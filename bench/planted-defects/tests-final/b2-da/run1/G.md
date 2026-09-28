## Overall assessment

You have strong, measurable work in the Brightcart role, plus useful examples of analysis being adopted. The main issue is **credibility and precision**, not lack of accomplishments: several bullets overstate causality, one analytics bullet describes faulty join logic, and one project metric is mathematically inconsistent.

**Fit verdict: risky fit** for a general data analyst application based on this resume alone. The experience is relevant, but the technical and measurement issues could undermine otherwise strong results. Without a target job description, I can’t assess role-specific fit.

## Changes to make first

1. **Fix the technical and numerical inconsistencies** in the Brightcart and bike-share bullets.
2. **Rework or remove the A/B-test claim** unless you can describe a statistically valid stopping procedure.
3. **Clarify how you measured outcomes and established causality** for results attributed to dashboards, recommendations, staffing changes, or forecasting.
4. **Remove personal details that don’t help establish your qualifications**, especially date of birth.
5. **Tighten the long or ambiguous bullets** and make tense consistent.

## Line-by-line review

### Header

- **Phone, email, and profile URL:** Check that these are your real, working details in the submitted version. The example-domain email and URL look like placeholders.
- **Date of birth:** Remove it. It is generally irrelevant to the role and can invite bias.
- **Nationality:** Usually remove it from a U.S. resume. If work authorization is relevant, address that directly and accurately rather than relying on nationality.

### Education

- **Eastmoor University | B.S. in Statistics | Metro City, USA | Sep 2016–May 2020:** This is clear and appropriately concise. Keep it unless the target role calls for relevant coursework, honors, or academic projects that would strengthen your case.

### Experience

#### Riverside Cinema

- **Sold tickets and concessions…balanced the cash drawer…:** This is clear, but it is less relevant to data analyst roles than your analytics experience. Keep it briefly if you want to show current employment or account for your recent work history; otherwise, give it less space.
- **Trained 3 new attendants…:** This demonstrates responsibility, but the training is not especially relevant to analytics. Keep it only if you have room or want to show communication and onboarding experience.

#### Brightcart Retail

- **Built the weekly retention dashboard…lifting 90-day repeat purchase from 22% to 27%:** This is one of your strongest bullets, but it implies the dashboard caused the increase. Clarify what intervention drove the change and how you measured the dashboard’s contribution. Also state the comparison period or cohort if you can substantiate it. The change is **5 percentage points**, so ensure the metric is described consistently.
- **Cut the monthly revenue report from 3 days…to 2 hours…:** Strong, specific process improvement. Clarify whether the time saved refers to preparation time, elapsed time, or both, and whether the new process was used consistently.
- **Found customers with no orders by left-joining…counting rows with a null customer name:** Fix this before submitting. As written, the join and null check do not establish that customers had no orders. A null customer name would generally indicate an unmatched customer record or missing name—not a customer with no orders. Verify the tables, join direction, and field being checked; otherwise this may signal a basic SQL misunderstanding.
- **Joining 40 source tables…raised the share of orders tied to a campaign from 58% to 81%:** This is difficult to parse and has a grammatical problem: the opening phrase does not connect cleanly to the result. Clarify your specific contribution, what “dbt-style” means (and whether you actually used dbt), and how the attribution logic was validated. Define the denominator behind the campaign-linked share and explain whether the change reflects better data coverage, a change in attribution rules, or both.
- **Presented the quarterly customer review…two of its three recommendations were funded…:** Useful evidence of influence. Specify your role in producing the analysis and recommendations, and be ready to substantiate the funding outcome. Avoid implying that the presentation alone caused the funding decision unless you can support that.
- **Trained 20 merchandisers…halving ad hoc data requests:** Good adoption outcome. Clarify the measurement period and what counts as an ad hoc request; otherwise, “halving” is hard to evaluate. Make sure the reduction can reasonably be attributed to the training and dashboards.

#### Pinecrest Insurance

- **Ran the checkout A/B test until significance by checking the p-value every day and stopping…below 0.05:** This is a major statistical concern. Repeatedly checking a conventional p-value and stopping at the first significant result inflates the false-positive risk. Don’t present this as sound experimentation. Include it only if you can explain a valid sequential-testing method or reanalyze the test appropriately; otherwise, remove the claim.
- **Analyzed 18 months of call-center data…moved two agents…cut average hold time from 9 to 5 minutes:** This is a strong operational outcome, but the wording claims a direct effect. Clarify what analysis informed the staffing change, how long the before/after periods were, and whether other factors could explain the reduction.
- **Writes the team’s SQL style guide…:** The tense is inconsistent with a past role; the resume otherwise describes completed work. Also make clear whether you authored the guide or contributed to it. The claimed 50% reduction needs a defined comparison period and a clear measure of “query errors.”
- **Automated the monthly fraud-flag extract while also maintaining…which saved the fraud team 10 hours a month:** This combines automation with several unrelated administrative duties, so the main accomplishment gets buried. Separate the relevant achievement from routine responsibilities, or remove the less relevant details. Clarify how the 10-hour saving was estimated and ensure it refers to team time saved rather than time shifted elsewhere.

### Projects

#### City Bike-Share Demand Study

- **Modeled hourly demand…forecasting next-day demand within 12% mean absolute error:** Clarify the exact error measure and units. “12% mean absolute error” is ambiguous unless the error was normalized or expressed as a percentage. Also be ready to explain the train/test split, baseline, and how you avoided data leakage.
- **Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay…:** The arithmetic is inconsistent: a reduction from 300 to 200 is **one-third**, not 50%. Correct the figure or the percentage. More importantly, label this clearly as a simulation/replay result, not a real-world reduction, and explain the replay assumptions.
- **Raised forecast hit rate by 15%…from 60% to 75%…:** The move from 60% to 75% is **15 percentage points**, not a 15% relative increase. Define “hit rate” and the threshold for a hit, and say how it was evaluated. Explain how this result relates to the MAE metric in the previous bullet so the project doesn’t appear to use whichever metric looks best.

#### Food Pantry Visit Analysis

- **Mapped 14 months…so the pantry moved one volunteer shift and cut the Saturday line…:** This shows applied impact, but it implies the analysis caused the line reduction. Clarify how the wait time was measured and whether the change could be attributed to the shift adjustment.
- **Cleaned 9,000 handwritten visit logs…matched repeat visitors…:** A concrete contribution. Be prepared to explain how you matched records, handled uncertain matches, and protected visitor privacy. “Unique households” should reflect a defensible matching method.
- **Wrote a one-page guide…used to update the visit table each month:** Good evidence of handoff and continued use. Keep it if you can confirm the coordinator continued using it after the project.

### Skills

- **Tools: SQL, Python, Excel:** This is clear but broad. Add specific tools or libraries only if you have actually used them and can discuss them in an interview. The current list doesn’t show the environment or technical depth behind your experience.
- **Methods: dashboards, forecasting, metric design, data-quality checks:** These are relevant but general. Keep the skills section focused on methods you can explain with concrete examples from the resume; avoid listing a method if the projects don’t demonstrate it.

## Final checks

- Use consistent past tense for completed work and consistent punctuation and date formatting.
- Keep the current cinema role concise relative to the analytics roles.
- For each metric, be prepared to explain the baseline, measurement window, calculation, and your contribution.
- Tailor the ordering and detail to a specific job description. Without one, the resume reads primarily as a general data analyst resume rather than one aimed at a particular specialty.