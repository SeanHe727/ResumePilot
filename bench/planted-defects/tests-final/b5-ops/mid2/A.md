> Here is my resume: bench/planted-defects/tests-final/b5-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, plus the resume’s narrative and formatting. Education had no bullets to assess; no job description was provided for a role-specific match.

The main changes to address are:
- **Correct the routing project math:** 120 to 90 miles is a 25% reduction, not 40%. Clarify which routes and time period the averages cover.
- **Verify two operational metrics:** OEE “from 71% to 112%” needs checking; the reviewer notes that conventional OEE above 100% may signal a reference-rate or calculation issue. Also clarify how doubling work-in-process fits with the stated lead-time reduction while throughput stayed constant.
- **Strengthen project evidence:** Replace the broad, unsupported efficiency claim with specific work or an outcome. For the food-bank project, add whether recommendations were adopted and what the changes achieved, if you can substantiate that.

The report also flags moving Experience before Education, correcting “forcasting” to “forecasting,” and removing date of birth and nationality. **ATS parsing is clean.** The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 71 · wording 83 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 9 important, 8 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Nov 1995

**Problem**
[Error] The file includes personal details that are conventionally left off a résumé.

**Why**
Date of birth and nationality are not details a reader is meant to weigh when assessing qualifications. Including them uses space on information unrelated to the candidate’s work and education.

**How to change it**
Remove the date of birth and nationality from the file.

> Riverbend Polytechnic | B.S. in Industrial Engineering

**Problem**
[Important] Experience should appear before education.

**Why**
The résumé has several years of relevant work, which is more directly useful to a recruiter than the degree alone. Putting education first delays that evidence.

**How to change it**
Move the EXPERIENCE section ahead of EDUCATION.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
[Important] The reorder-point work describes its scope and inputs but gives no business outcome.

**Why**
A reader can see the policy covered every SKU and used 18 months of data, but cannot tell whether it improved availability, reduced excess stock, or otherwise helped the business. Without that result, the scale of the work does not show its value.

**How to change it**
Add the most telling outcome after the work, such as [change in stockouts or inventory versus the prior policy]. Cut the monthly-review detail if space is tight.

> Scoring 40 vendors weekly on on-time delivery, fill rate, lead-time variance and invoice accuracy, and sharing the scorecards with buyers before each quarterly review, raised on-time inbound deliveries from 81% to 93%.

**Problem**
[Important] The vendor-scoring method comes before and buries the 12-point improvement.

**Why**
The reader has to pass through the weekly scoring and quarterly-review details before reaching the result. That makes the clearest evidence of impact harder to notice.

**How to change it**
Move “raised on-time inbound deliveries from 81% to 93%” to the start of the bullet, then follow it with the scoring and sharing method.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
[Error] The claimed OEE of 112% is invalid as conventional OEE and makes the reported improvement unreliable.

**Why**
Conventional OEE cannot exceed 100%; a raw calculation above that limit points to a reference-rate or calculation problem, such as an ideal cycle rate set too slowly. The 71%-to-112% comparison is therefore not reliable as stated, and the endpoint is not interpretable as conventional OEE.

**How to change it**
Recheck the ideal cycle rate and calculation inputs, then report the recalculated OEE. If 112% is a different measure, name that measure instead; otherwise remove or correct the figure.

> Cut average order lead time through the warehouse from 10 days to 5 while holding daily throughput constant and doubling work-in-process to keep pickers busy.

**Problem**
1. [Error] At constant throughput in the same steady-state flow, doubling work-in-process is inconsistent with cutting lead time from 10 days to 5.
2. [Polish] The two extra claims about throughput and work-in-process make the main lead-time result harder to scan.

**Why**
1. By Little’s Law, lead time is proportional to work-in-process when throughput is constant. Those claims therefore imply a lead time rising from 10 days to 20, not falling to 5, which puts the figures’ credibility in doubt.

**How to change it**
1. Recheck the WIP and lead-time figures and their measurement boundaries. If throughput and boundaries were the same, correct the WIP claim; otherwise clarify the different measures or remove the conflicting claim.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Spearheaded a data-driven, optimization-first transformation of last-mile logistics that unlocked significant efficiency gains.

**Problem**
1. [Important] The claim of significant efficiency gains names no specific improvement or evidence.
2. [Polish] The opening bullet uses abstract jargon instead of identifying the project work or technique.

**Why**
1. A reader cannot judge the value of the work from a general claim of significance. The next bullet gives a measurable result, so this phrase adds a broad claim without making the evidence clearer.

**How to change it**
1. Replace the phrase with [the specific operational change] and, if available, [the result and what it is compared against]; avoid repeating the next bullet’s measure.

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
1. [Error] Reducing an average route length from 120 to 90 miles is a 25% reduction, not 40%.
2. [Important] The strongest result is not the project’s opening bullet.
3. [Polish] The route-length averages do not identify which routes or period they cover.

**Why**
1. The decrease is 30 miles out of the original 120, which is 25%. The incorrect percentage conflicts with the stated figures and undermines the credibility of the result.
2. The route-length comparison is the clearest measurable result in the project section. Leading with the general transformation claim makes the more concrete evidence less prominent.

**How to change it**
1. Change “a 40% reduction” to “a 25% reduction,” or verify and correct the route-length figures.
2. Move this bullet above the opening project bullet; correct the percentage as noted.

> Shared the model and a one-page summary with the grocer’s dispatch team, who piloted the routes on two trucks for a month.

**Problem**
1. [Important] The pilot’s scale and duration are given, but its outcome is not.
2. [Polish] Sharing the model and summary does not explain how the pilot was evaluated or acted on.

**Why**
1. A pilot on two trucks suggests practical relevance, but the reader cannot tell whether the routes performed better, were adopted, or exposed a limitation. Without an outcome, the pilot’s value is unclear.

**How to change it**
1. Add [the pilot’s observed result, compared with the prior routes or another relevant baseline], if available.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Important] The recommendations are described without saying whether they were adopted or what changed.
2. [Polish] The description of warehouse analysis does not identify the operation examined or the analysis used.

**Why**
1. A reader can see that recommendations were delivered, but not their value to the warehouse. Without an outcome, the work is difficult to distinguish from analysis that did not affect operations.

**How to change it**
1. Replace the general recommendation statement with [the change that followed, if any] and [a measure of that change compared with before].

> Mapped the donation intake process with the warehouse lead and removed two duplicate data-entry steps, so donations reached the shelves a day sooner.

**Problem**
1. [Important] The strongest result in this entry is not the opening bullet.
2. [Polish] “A day sooner” has no stated comparison timeframe.

**Why**
1. The intake-process change and its effect are more concrete than the general analysis-and-recommendations statement. Leading with that result would make the entry’s evidence easier to notice.

**How to change it**
1. Move this bullet above the current opening bullet.

> Wrote a slotting guide that the volunteer coordinators used to re-slot the warehouse again after its spring expansion.

**Problem**
1. [Important] The re-slotting is described without saying what it achieved.
2. [Polish] The slotting guide does not say what informed its placement recommendations.
3. [Polish] “Again” makes it unclear whether the warehouse was re-slotted more than once.

**Why**
1. The coordinators’ use of the guide shows that it was applied, but a reader cannot judge what improved for the warehouse. An operational result would establish the value of the work.

**How to change it**
1. Add [the operational result of re-slotting and its measure compared with before], if available.

## Skills

> forcasting

**Problem**
[Error] “Forcasting” is misspelled in Skills > Methods.

**Why**
The spelling error is visible in a skills section, where a reader is checking technical qualifications. It can distract from the skills listed and the care taken with the résumé.

**How to change it**
Replace “forcasting” with “forecasting.”

## Already working

- s2:e0:b0: Pairs operational improvement with a financial outcome.
- s2:e0:b1: Connects the logistics change directly to a quantified cost outcome.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-88d8672f.md.

