Your strongest material is the quantified work at Brightcart and the food-pantry project. The main fixes are a few claims that a reviewer could challenge on statistical or technical grounds. I’ve kept this to what to change and why, without rewriting your lines.

## Header and education
- **Contact line:** Check that the profile URL is your live, intended link. A working link lets a reviewer verify your background.
- **Date of birth and nationality:** Remove these for typical U.S. applications. They usually do not help assess qualifications and may introduce irrelevant personal information. Check local conventions if you apply elsewhere.
- **Education line:** Keep it. The degree, institution, location, and dates are clear.

## Experience
**Order:** Put Brightcart before Pinecrest. Reverse chronological order makes your most recent experience easiest to find.

### Pinecrest Insurance
- **Checkout A/B test:** Do not present daily p-value checks and stopping at the first result below 0.05 as sound test practice. Repeated checking with that stopping rule can inflate false-positive risk. Say what decision or analysis you actually owned, but only claim a reliable result if the test used an appropriate stopping or sequential-testing method.
- **Call-center analysis:** Keep the operational result. If the shift move was not the only change affecting hold times, avoid implying you established that it alone caused the drop.
- **SQL style guide:** Change “Writes” to past tense to match a role that ended in 2022. Be ready to substantiate how the reduction in review errors was measured.
- **Fraud extract:** Separate the automation from the calendar, sales, onboarding, and help-desk duties—or cut the less relevant duties. As written, it is unclear which work saved the fraud team 10 hours a month.

### Brightcart Retail
- **Retention dashboard:** Keep the scale and business relevance, but qualify the “lifting” claim unless you can show that the dashboard or retargeting caused the increase from 22% to 27%. The observed change is **5 percentage points**.
- **Revenue report:** Keep it. The before-and-after time saving and the method are clear.
- **Customers with no orders:** Correct the join logic. A left join from orders to customers, followed by a null *customer name*, does not reliably identify customers with no orders; it may identify unmatched records or missing names. Describe the actual join direction and the field used to establish the absence of an order.
- **Attribution models:** Fix the sentence’s grammar: its opening action phrase does not connect cleanly to “raised.” Also clarify what “dbt-style” means if you did not use dbt. The 58%-to-81% change is **23 percentage points**.
- **Quarterly review:** Keep it. Funding of two recommendations is a concrete sign of influence; specify your contribution to those recommendations if it was shared work.
- **Merchandiser training:** Keep it. The audience and reduction in requests make the result useful; ensure the halving is based on a comparable before-and-after period.

## Projects
### City Bike-Share Demand Study
- **Demand model:** Name the error metric precisely. Mean absolute error ordinarily has the units of the quantity predicted; “12% mean absolute error” needs a defined percentage-based metric or denominator.
- **Empty-station hours:** Correct the arithmetic: 300 to 200 is a **33% reduction**, not 50%. Make clear that this was a replay or simulation, not a real-world operational result.
- **Forecast hit rate:** A rise from 60% to 75% is **15 percentage points**, or a **25% relative increase**—not a 15% relative increase. Define “hit rate” so readers know what counted as a hit.

### Food Pantry Visit Analysis
- **Visit-pattern analysis:** Keep the outcome. If other changes affected wait times, avoid attributing the entire reduction solely to the shift move.
- **Visit-log cleaning:** Keep it, but verify that “9,000 handwritten visit logs” accurately describes the records and that the household matching method supports the unique-household count.
- **Coordinator guide:** Keep it. It demonstrates that the work could continue after you left.

## Skills
- **Tools:** Keep the list accurate, and consider adding tools you used confidently in the roles or projects; the experience mentions dashboards and SQL modeling without naming their platforms.
- **Methods:** Keep only methods you can explain in an interview. In particular, make sure “forecasting” and “metric design” reflect the work you personally did.