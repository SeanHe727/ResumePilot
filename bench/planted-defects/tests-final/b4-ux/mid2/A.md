> Here is my resume: bench/planted-defects/tests-final/b4-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the full resume’s narrative and format. No job-description match was run because no posting was provided.

The main changes to address:
- Put Experience before Education and reorder the roles newest-first; consider reducing the unrelated surf-school role to one line.
- Verify the metrics: the Northwind bullet’s NPS calculation appears mislabeled, Pinegrove’s SUS score of 104 needs checking, and the transit project’s 65%→85% result is a 20-percentage-point increase, not a 20% increase.
- Fix the tense mismatch in the Northwind role, and strengthen bullets that describe tasks without showing their outcomes. The transit and clinic projects also have some repeated testing details.

The file parses cleanly for ATS. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 80 · narrative 77

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 6 important, 15 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022; Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

**Problem**
[Important] Experience is not in reverse-chronological order.

**Why**
Northwind, dated July 2019 to February 2022, appears above Pinegrove, dated March 2022 to June 2025. That interrupts the expected newest-first sequence and makes the work history harder to scan.

**How to change it**
Move Pinegrove Financial above Northwind Health within Experience.

> Lakeshore University | B.A. in Cognitive Science

**Problem**
[Important] Experience should appear above Education because the professional UX research work is more relevant to the current direction.

**Why**
The degree dates from 2015–2019, while the résumé contains several years of professional UX research experience. Putting the relevant experience first gives readers that evidence sooner.

**How to change it**
Move the Experience section above Education.

## Harborview Surf School | Surf Instructor | Metro City, USA | Aug 2025 - Present

> Taught weekend group lessons to beginners aged 8 to 60, keeping each class to one instructor for every six students.

**Problem**
1. [Polish] The lesson bullet gives no student outcome or teaching approach, and the instructor ratio is not connected to a result.
2. [Polish] The instructor ratio is wordier than necessary.

> Ran the rental desk’s morning equipment checks and logged board and wetsuit repairs for the shop owner.

**Problem**
[Polish] The equipment checks and repair log have no stated operational effect or measure of their usefulness.

> Surf Instructor

**Problem**
[Important] The current Harborview entry takes space from the UX direction of the résumé.

**Why**
This is the current role, but its surf-instruction and rental-desk duties are not as relevant to the UX research direction shown elsewhere. Giving the entry less space would leave more room for that experience.

**How to change it**
Shorten Harborview to a single line by compressing or cutting a bullet, keeping the details most relevant to the roles you want.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Raised the patient app’s Net Promoter Score from 6.1 to 8.4, calculated as the average 0-10 recommendation rating across 2,000 monthly survey responses.

**Problem**
1. [Error] The line describes an average recommendation rating as Net Promoter Score, which is incorrect.
2. [Important] The line gives a score change but does not say what you did to contribute to it.
3. [Polish] The trailing calculation explanation adds detail that buries the accomplishment.

**Why**
1. NPS is calculated as the percentage of promoters minus the percentage of detractors, not as the mean recommendation rating. As written, the calculation measures something other than NPS, which could undermine confidence in the result.
2. A reader can see the result, but not what research or product work led to the change. Without that link, it is harder to connect the outcome to your UX research skills.

**How to change it**
1. If 6.1 and 8.4 are mean ratings, call the measure an “average recommendation rating.” If they are NPS values, use the promoter-minus-detractor calculation and report the resulting scores.
2. Add [the research or recommendation that informed an app change]. Keep the calculation detail only if space allows.

> Writes the screener and consent templates for all patient studies, cutting study setup time from two weeks to three days.

**Problem**
[Error] “Writes” incorrectly presents the Northwind responsibility as current even though the role ended in February 2022.

**Why**
The present tense conflicts with the dates attached to the role, making it sound as though you still perform this work for Northwind. The résumé places you in another role from March 2022 through June 2025, so a reader may question when this responsibility took place.

**How to change it**
If this was Northwind work, replace “Writes” with “Wrote.” If it continues outside that role, identify the current role or context instead.

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
1. [Polish] The bullet does not specify what kind of testing you conducted.
2. [Polish] The phrase about support calls is wordier than necessary.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
[Important] The 40% completion increase has no stated baseline or comparison period.

**Why**
A reader cannot tell whether 40% means a relative increase or a percentage-point change. Without a starting completion rate or period, the scale of the improvement is also difficult to judge.

**How to change it**
Clarify whether the change is relative or in percentage points, and add [the starting completion rate or comparison period] if available.

> Ran 18 moderated usability sessions a quarter from a recruiting panel of 400 customers, so every major release was tested with real account holders before launch.

**Problem**
1. [Polish] The release-coverage clause describes testing coverage but not what the research changed or improved.
2. [Polish] The release-coverage clause is long and adds little beyond the sessions and panel details.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Error] The support-call result is buried after a long methods list, and “Synthesizing” leaves the completed-role bullet without a past-tense opening verb.
2. [Polish] The 23% reduction has no stated baseline or comparison period.

**Why**
1. A scanning reader may miss the clearest evidence of value before reaching the end of the line. The opening participle also does not match a completed role, so the sentence lacks a clear past-tense lead.

**How to change it**
1. Move “cut repeat support calls about statements by 23%” to the beginning and change “Synthesizing” to “Synthesized”; retain only the most telling listed input or method.

> Raised the onboarding flow’s System Usability Scale score from 68 to 104 across two rounds of moderated testing with 20 customers.

**Problem**
[Error] The reported System Usability Scale score of 104 is outside the standard 0–100 range.

**Why**
Standard SUS scores range from 0 to 100, so 104 cannot be a valid score on that scale. This signals a scoring or reporting error and could make a reader question the other figures.

**How to change it**
Replace 104 with the correctly calculated SUS score; if a nonstandard scale was used, identify it instead of calling it a standard SUS score.

> Trained 12 product managers to run their own unmoderated tests with a shared script template, which doubled the number of tests run each quarter.

**Problem**
[Polish] The result about doubling tests is delayed after a long clause.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
[Important] The first bullet repeats evaluation details reported below without stating a result of the redesign.

**Why**
A reader sees the participant count and timed tasks here, then sees the measured outcomes in the following bullets. Keeping the same testing details without a result makes the project section repetitive rather than adding evidence of impact.

**How to change it**
Cut the repeated testing detail and let the following bullets carry the outcomes, or add a concise result with its comparison point here if you keep the evaluation detail.

> Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds and errors from 11 to 3 across the 12 sessions.

**Problem**
[Polish] The second bullet repeats the testing setup and sample already given in the first bullet.

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The change from 65% to 85% is 20 percentage points, not a 20% relative increase.
2. [Polish] The third bullet repeats the sample size stated in the preceding bullets.

**Why**
1. The difference between the two reported rates is 20 percentage points. Relative to the original 65%, the increase is about 30.8%, so “20%” misstates the change if it is read as a relative increase.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points,” keeping the stated 65% and 85% figures.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Conducted user interviews and created wireframes for a free clinic’s online booking flow.

**Problem**
[Polish] The interview and wireframe bullet does not say what the work changed.

> Ten clinic patients were recruited and two rounds of hallway testing were run, and the six issues that stopped first-time users were fixed.

**Problem**
1. [Polish] The result about the six issues is buried after the testing details.
2. [Polish] The passive testing description obscures your role.

## Already working

- s2:e1:b1: Includes the interview count and before-and-after missed-appointment rates.
- s2:e2:b0: Connects specific research to a shipped design and a measurable outcome.
- s3:e1:b2: Names a concrete capability the later teams added: Spanish-language booking.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-01bf6048.md.

