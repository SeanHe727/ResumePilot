Your resume has strong scope and measurable results. The biggest fixes are **two analytically incorrect bullets**, **one incorrect percentage**, and a few claims that need clearer attribution. Here’s what to change, line by line, without rewriting them.

### Header and education
- **Contact line:** Check that the profile link works and leads to a complete, current profile. Add a project portfolio link only if it gives a reviewer useful evidence of your work.
- **Date of birth and nationality:** Remove both for most U.S. job applications. They aren’t needed to assess your qualifications and can introduce bias.
- **Education line:** Keep it, but make the date and location formatting consistent with the rest of the resume.

### Brightcart Retail
- **Retention dashboard:** Clarify whether the increase from 22% to 27% can be attributed to the dashboard or retargeting, rather than simply occurring afterward. Keep the result, but don’t imply stronger causation than you can support.
- **Monthly revenue report:** Strong bullet. Specify whether “2 hours” is the new total reporting time or the remaining manual work; that distinction makes the improvement easier to assess.
- **Customers with no orders:** Correct the SQL logic. To identify customers without matching orders, the null check must be on a column from the **orders** table, not the customer name. As written, this suggests a fundamental error.
- **Campaign attribution:** Separate your actions from the outcome more clearly: the opening construction is hard to follow. Also check whether “dbt-style” is accurate—name dbt if you used it, or describe the modeling approach without implying that you did.
- **Quarterly customer review:** Keep this; funded recommendations are useful evidence of influence. If possible, identify the business area those recommendations concerned so the impact has context.
- **Merchandiser training:** Strong bullet. Clarify the period or baseline for “halving” requests if you have it.

### Pinecrest Insurance
- **Checkout A/B test:** Change this substantially. Checking a p-value daily and stopping at the first result below 0.05 inflates the false-positive risk. State the actual test design and decision rule accurately; if the test was conducted as described, don’t present that stopping method as sound statistical practice.
- **Call-center analysis:** Strong, concrete result. Be prepared to support the connection between your findings, the staffing change, and the hold-time reduction.
- **SQL style guide:** Good bullet. Clarify how query errors were measured and over what period if those details are available.
- **Fraud extract and other duties:** Narrow this to the automation and its 10-hour monthly saving. The unrelated duties obscure the achievement and make the bullet difficult to scan.

### City Bike-Share Demand Study
- **“Leveraged data-driven insights…”:** Remove this bullet. It gives no specific action, method, or result, while the next two bullets do.
- **Empty-station hours:** Correct the math: 300 to 200 is a **33% reduction**, not 50%. Make it unmistakable that this was a historical replay or simulation, not an observed operational improvement.
- **Forecast hit rate:** Clarify the metric and report the change accurately: 60% to 75% is **15 percentage points** (or a 25% relative increase), not an unqualified “15%.” Specify what counts as a “hit.”
- **Project dates:** Keep “Present” only if you’re still actively working on it.

### Food Pantry Visit Analysis
- **Staffing and wait time:** Strong result. Check that the 50-to-20-minute comparison uses comparable Saturday periods.
- **Handwritten logs:** Change the passive opening so your contribution is immediately clear. Explain how you validated household matching if you can; that affects confidence in the unique-household count.
- **Update guide:** Keep it. It shows the work was usable after you left; the outcome is more valuable than the document alone.

### Skills
- **Tools and methods:** Keep only skills you can demonstrate in an interview. Consider adding tools already evidenced in the bullets—such as a specific dashboard platform or dbt—**only if you actually used them**. “Data-quality checks” and “metric design” will carry more weight if the experience bullets show where you applied them.

Fix the SQL, A/B-test, and percentage issues before sending this resume; they’re the most likely to undermine an otherwise strong analyst application.