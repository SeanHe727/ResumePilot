> Here is my resume: bench/planted-defects/tests-final/b1-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the full resume for narrative and formatting. Education had no bullets to review. Job-description matching was not run because no posting was provided.

The main changes flagged:
- Move Experience above Education and put Crestway Foods before Lakeview Distribution; the current work-history order is not newest-first.
- Clarify the Last-Mile Routing Study’s distance results: the resume gives conflicting reductions, and 120 to 90 miles is a 25% reduction, not 40%.
- Recheck the accuracy claims at Lakeview and the 112% OEE figure at Crestway; the reviewers flagged questions about how those measures were calculated or defined.

The format review found that the resume is one page and parses cleanly for ATS. Other entry-level notes include adding outcomes where bullets describe duties without them, and clarifying the context for the current florist role. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 74 · wording 83 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 6 important, 24 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> B.S. in Industrial Engineering

**Problem**
[Important] Experience should appear above Education because the relevant work now carries more weight than the degree.

**Why**
Several years of relevant experience give a recruiter more current evidence of your qualifications than the degree alone. Putting Experience first makes that evidence visible sooner.

**How to change it**
Move the Experience section above Education.

> Jul 2018 - Jan 2021

**Problem**
[Important] Experience is not in reverse chronological order.

**Why**
Lakeview (2018–2021) appears above Crestway (2021–2025), even though Crestway is the more recent role. This can make the work history harder to scan in the expected order.

**How to change it**
Move the Crestway Foods entry above Lakeview Distribution.

> Delivery Driver and Shop Assistant

**Problem**
[Polish] The current florist role takes space without explaining how it fits the career direction.

## Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present

> Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the door.

**Problem**
1. [Polish] The delivery bullet gives volume but no outcome showing the effect of the deliveries.
2. [Polish] The verbs use past tense for a role listed as current.

> Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled.

**Problem**
1. [Polish] The wedding and cooler duties have no stated outcome.
2. [Polish] The verbs use past tense for a role listed as current.

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only SKUs that sold every week.

**Problem**
[Error] The stated accuracy increase is not supported by changing the SKU population used in the MAPE calculation.

**Why**
Restricting the calculation to SKUs that sold every week changes the population being measured, so the increase from 70% to 85% could reflect the narrower SKU set rather than improved forecasting. A like-for-like comparison requires the same SKU population and MAPE method for both figures.

**How to change it**
Compare both figures using the same SKU population and MAPE method; if the figures apply only to weekly-selling SKUs, label them that way instead of claiming overall forecast accuracy rose.

> Ran a time study of the returns desk; my findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
1. [Important] The processing-time result is buried after the study setup.
2. [Polish] The phrase uses a personal pronoun and leaves your role in establishing the triage station unclear.

**Why**
1. A reader scanning the bullet may notice the time study before noticing the reduction from 3 days to 1. Leading with the result makes the operational impact easier to see.

**How to change it**
1. Move the quantified processing-time result to the start of the bullet, before the time-study setup.

> Wrote the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
1. [Polish] The scheduling-rules detail does not show what operational change the rules introduced.
2. [Polish] The bullet repeats “dock” in “at the dock.”
3. [Polish] The dock-scheduling bullet should appear before the other Lakeview bullets.

> Set up cycle counting for the 2,000 highest-value locations, raising inventory record accuracy from 91% to 98.5% within a year.

**Problem**
[Important] The inventory-accuracy figures do not identify the population measured.

**Why**
A reader cannot tell whether the comparison covers the 2,000 high-value locations or the wider inventory. Naming the measured population makes the improvement easier to interpret.

**How to change it**
Clarify whether both figures cover the 2,000 locations; if they do, say so alongside “inventory record accuracy,” or specify [population included in the accuracy measure].

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
[Polish] The seasonal-model description does not identify its distinguishing technique or input.

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
[Polish] The reorder-point bullet describes work and review cadence but gives no result.

> Scoring 40 vendors weekly on on-time delivery, fill rate, lead-time variance and invoice accuracy, and sharing the scorecards with buyers before each quarterly review, raised on-time inbound deliveries from 81% to 93%.

**Problem**
1. [Error] The opening gerund does not fit grammatically with the past-tense main verb.
2. [Important] The inbound-delivery result comes after a long method description.

**Why**
1. “Scoring” starts a phrase that does not connect grammatically to “raised.” The mismatch makes the sentence harder to follow.
2. The 81% to 93% improvement is the main impact, but readers may have to work through the scoring and scorecard details before they find it. Leading with the result makes the accomplishment easier to scan.

**How to change it**
1. Change the opening to a past-tense construction, such as “Scored,” to match “raised.”
2. Move the quantified result to the start of the bullet, before the vendor-scoring and scorecard details.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
1. [Error] The reported OEE of 112% is invalid under the standard definition.
2. [Polish] The bullet names the losses reduced but not the intervention used to reduce them.

**Why**
1. Standard overall equipment effectiveness is availability multiplied by performance and quality, each expressed as a proportion capped at 100%. The resulting OEE cannot exceed 100%, so 112% indicates a calculation or measurement problem, or that the result is a different metric.

**How to change it**
1. Recalculate OEE from availability, performance, and quality data and report the valid result; if 112% is a different metric, name that metric instead of OEE.

> Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide, which the team still uses for promotions.

**Problem**
1. [Polish] The sentence does not say what the workflow or guide improved.
2. [Polish] “Its” could refer to either the forecasting workflow or the exception-handling guide.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
[Error] The route-length change is a 25% reduction, not a 40% reduction.

**Why**
The decrease from 120 to 90 miles is 30 miles. Relative to the original 120 miles, that is a 25% reduction, so the stated percentage is arithmetically incorrect.

**How to change it**
Replace “a 40% reduction” with “a 25% reduction.”

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.
> Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time windows to the routing model.

**Problem**
[Polish] The customer-time-window method is repeated across the route-length and on-time-delivery bullets.

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
The route-length bullet should be presented before the other project bullets if it is retained.

**Why**
The finding identifies this as the strongest line, but it is not the first project bullet. Moving it earlier would give its quantified result more prominence; first resolve the repeated route-distance claim so the entry does not present the same result twice.

**How to change it**
If you retain this claim after resolving the duplicate, move it to the top of the project bullets.

> Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time windows to the routing model.

**Problem**
[Polish] The on-time-delivery change is 9 percentage points, not an unqualified 9%.

> planned route miles 18%

**Problem**
[Error] The two route-distance figures are presented as if they describe the same improvement, but their reductions differ.

**Why**
The first project bullet reports an 18% reduction in planned route miles, while the next describes the route-length reduction as 40%. A reader cannot tell whether these are different measures or inconsistent figures, which weakens confidence in the project results.

**How to change it**
Clarify whether planned route miles and average route length are distinct measures; if not, make the figures consistent using the correct underlying result.

> cutting planned route miles 18%

**Problem**
[Important] The route-distance result is repeated across two bullets.

**Why**
One bullet reports planned route miles cut by 18%, while another reports average route length falling from 120 to 90 miles. Presenting both as separate results of the routing model can make the project seem repetitive and leave a reader unsure whether they describe distinct measures.

**How to change it**
Keep one route-distance claim rather than presenting the same result twice; if the measures are different, distinguish them clearly using only accurate details.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Polish] The summary does not say whether the recommendations were adopted or what changed.
2. [Polish] The analysis description does not identify what you examined or how.

> The donation intake process was mapped and two duplicate data-entry steps were removed, so donations reached the shelves a day sooner.

**Problem**
1. [Polish] The donation-intake result uses passive voice and does not identify who mapped the process.
2. [Polish] “A day sooner” does not identify the comparison behind the time improvement.
3. [Polish] The donation-intake result should be moved ahead of the general analysis bullet.

> Wrote a slotting guide that the volunteer coordinators used to re-slot the warehouse again after its spring expansion.

**Problem**
1. [Polish] The slotting-guide bullet shows adoption but not what the re-slotting achieved.
2. [Polish] The bullet does not say what informed the slotting recommendations.
3. [Polish] “Again” repeats the idea that the warehouse was re-slotted.

## Already working

- s3:e0:b0: Connects the work to a concrete outcome and names what it was compared against.
- s2:e2:b1: Pairs a specific cost improvement with a time period and a clear logistics change.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ebded2a5.md.

