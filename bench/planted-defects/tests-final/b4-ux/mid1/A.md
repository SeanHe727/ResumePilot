> Here is my resume: bench/planted-defects/tests-final/b4-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five experience/project entries for content and wording, plus the full resume’s narrative and formatting. Education had no bullets to review. No job-description match was run because no posting was provided.

The main changes to address:

- **Correct metric labeling:** The transit-map change from 65% to 85% is a 20-percentage-point increase, not 20%. The Pinegrove bullet reports a System Usability Scale score of 104, which is outside the scale’s valid range; verify the figure.
- **Reorder the story:** Put Pinegrove above Northwind for reverse-chronological order. The narrative review also recommends reducing the surf-school role’s prominence and moving Education below Experience and Projects.
- **Clarify claims and tighten wording:** Northwind’s “Net Promoter Score” label does not match the 0–10 average rating described in the bullet, and “Writes” conflicts with the role’s end date. Several outcome claims would benefit from a baseline or comparison period.

The file parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 81 · narrative 72

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Northwind Health | UX Research Associate

**Problem**
[Important] The experience entries are not in newest-first order.

**Why**
Northwind Health, dated Jul 2019–Feb 2022, appears above Pinegrove Financial, dated Mar 2022–Jun 2025. A reader scanning the experience section may get the chronology in the wrong order.

**How to change it**
Move Pinegrove Financial above Northwind Health.

> Harborview Surf School | Surf Instructor

**Problem**
[Important] Harborview Surf School takes two bullets and appears before the UX roles despite being unrelated to the UX research story.

**Why**
The role currently has prominent placement and space ahead of the UX experience. That can distract from the experience most relevant to the résumé’s research focus.

**How to change it**
Shorten Harborview Surf School to one line and place it after the UX roles.

> Lakeshore University

**Problem**
[Important] Education appears before Experience and Projects, even though the work history now carries more weight than the degree.

**Why**
The current order gives the degree attention before the more substantial work history and projects. A reader reaches the strongest evidence of your experience later.

**How to change it**
Move Education below Experience and Projects.

## Harborview Surf School | Surf Instructor | Metro City, USA | Aug 2025 - Present

> Surf Instructor

**Problem**
[Important] The teaching and equipment-check duties are separate responsibilities that together do not build the UX research story.

**Why**
A reader can see what the role involved, but neither duty connects to the UX research experience that anchors the résumé. Giving both duties equal space gives this unrelated role more weight without strengthening that story.

**How to change it**
Keep the more relevant duty, or compress both duties into a single short line.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Raised the patient app’s Net Promoter Score from 6.1 to 8.4, calculated as the average 0-10 recommendation rating across 2,000 monthly survey responses.

**Problem**
1. [Error] The line labels an average recommendation rating as Net Promoter Score.
2. [Important] The line gives the outcome but not the work that produced it.
3. [Polish] The explanation of the rating calculation is lengthy and slows the result.

**Why**
1. Net Promoter Score is the percentage of promoters minus the percentage of detractors, not the average rating. The calculation described produces a mean recommendation rating, so 6.1 and 8.4 are not NPS values as stated.
2. A reader can see the result and its measurement, but cannot tell what UX research or product change you contributed. Without that link, the result gives less evidence of your skills.

**How to change it**
1. If 6.1 and 8.4 are averages, call them average recommendation ratings. If they are NPS values, use the promoter-minus-detractor calculation and report the resulting scores.
2. Keep the result and measurement, and add the key research or product change behind it: [what you changed to improve the app’s recommendation rating].

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Important] The strongest line in this entry does not appear first.

**Why**
The appointment-reminder bullet connects patient interviews to a change and a measured reduction in missed appointments. Opening with it would bring that clearer outcome to the reader sooner.

**How to change it**
Move the appointment-reminder bullet before the Net Promoter Score bullet.

> Writes the screener and consent templates for all patient studies, cutting study setup time from two weeks to three days.

**Problem**
[Error] “Writes” incorrectly presents work in a role that ended in February 2022 as ongoing.

**Why**
The present-tense claim conflicts with the end date of the role. As written, it says the templates are currently being written in a role that ended.

**How to change it**
If this describes work done during the role, replace “Writes” with “Wrote.” If the work continues outside the role, clarify that it continues outside this position.

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
[Polish] The 30% reduction in support calls has no stated baseline or comparison period.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
1. [Important] The dispute-form completion claim gives neither the before-and-after rates nor the comparison behind the 40% change.
2. [Polish] The repeated “by” makes the dispute-form sentence awkward.

**Why**
1. A reader cannot tell what completion looked like before and after, or whether 40% means a relative increase or percentage points. Those details make the size of the improvement easier to judge.

**How to change it**
1. Replace the percentage-only claim with the starting and ending completion rates and, if needed, clarify whether the change is relative or in percentage points: [before and after rates and comparison period].

> Ran 18 moderated usability sessions a quarter from a recruiting panel of 400 customers, so every major release was tested with real account holders before launch.

**Problem**
[Polish] The explanation after the usability sessions is longer than needed.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Important] The statement-support result is buried after a long list of sources and methods.
2. [Polish] The 23% reduction in repeat support calls has no stated baseline or comparison period.
3. [Error] “Synthesizing” is inconsistent with the past-tense completed work and leaves the sentence without a clear main verb.

**Why**
1. A scanning reader reaches the 23% reduction only after several research inputs and methods. Keeping the most telling inputs or methods would make the research skill easier to see without crowding out the outcome.
3. The line describes a completed result, but its opening verb is in the present participle form. That makes the sentence’s action harder to follow.

**How to change it**
1. Move the statement-support result to the beginning, then keep only the most relevant source and one or two methods; cut the remaining list.
3. Change “Synthesizing” to “Synthesized.”

> Raised the onboarding flow’s System Usability Scale score from 68 to 104 across two rounds of moderated testing with 20 customers.

**Problem**
[Error] A System Usability Scale score of 104 is outside the scale’s valid range.

**Why**
Standard SUS scores range from 0 to 100, so 104 cannot be a valid score. This indicates a scoring or reporting error, or that a different measure was used.

**How to change it**
Correct the score to [the valid SUS score], or name the different measure if 104 is not a SUS score.

> Trained 12 product managers to run their own unmoderated tests with a shared script template, which doubled the number of tests run each quarter.

**Problem**
[Polish] “Which doubled” can refer to the shared script template rather than the training.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
1. [Important] The first project bullet gives the test setup but no observed outcome.
2. [Polish] The first project bullet repeats the participant count and task setup in the next bullet.

**Why**
1. A reader cannot tell whether the redesign helped riders or what the work was worth. The participant count shows the test’s scale, not its result.

**How to change it**
1. Replace the testing clause with [the strongest route-finding outcome and what it was compared with].

> Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds and errors from 11 to 3 across the 12 sessions.

**Problem**
1. [Important] The results bullet describes the evaluation but not how the map was redesigned.
2. [Polish] The results bullet repeats the timed-task setup and participant count from the previous bullet.

**Why**
1. The results are compelling, but this line alone does not show the design skill or approach behind them. Naming the most important design change would help a reader understand how the redesign produced the results.

**How to change it**
1. Add [the single most important design change] if space allows, and keep the before-and-after result as the main point.

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
[Error] The change from 65% to 85% is 20 percentage points, not 20%.

**Why**
Subtracting the starting rate from the ending rate gives 85% − 65% = 20 percentage points. The relative increase from 65% is about 30.8%, not 20%, so “20%” misstates the change and can be read as a relative increase.

**How to change it**
Change the phrase to “Raised task success by 20 percentage points, from 65% to 85%.”

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Conducted user interviews and created wireframes for a free clinic’s online booking flow.

**Problem**
1. [Important] The line names the work but not its effect.
2. [Polish] “Online” adds little to a line that already describes a digital booking flow.

**Why**
1. A reader can see the activities, but not whether the redesign improved booking or helped the clinic in another way. Without an outcome, the impact of the work remains unclear.

**How to change it**
1. Add the outcome after “booking flow,” such as [what changed for patients or the clinic]; if you have a before-and-after measure, include the comparison.

> Ten clinic patients were recruited and two rounds of hallway testing were run, and the six issues that stopped first-time users were fixed.

**Problem**
1. [Important] The line gives the number of issues fixed but no post-fix evidence.
2. [Polish] The six issues fixed are the clearest outcome, but appear after the recruitment and testing details.
3. [Polish] The passive phrasing hides your role in recruiting, testing, and fixing the issues.

**Why**
1. The reader cannot tell whether fixing those issues made booking easier or enabled more first-time users to complete it. A post-fix measure would show whether the changes helped.

**How to change it**
1. Keep the six-issue result, and add a post-fix measure if available, such as [first-time booking completion before and after the fixes].

> Wrote the clinic’s volunteer handbook for maintaining the booking pages, which two later volunteer teams used to add Spanish-language booking.

**Problem**
[Polish] “Which two later volunteer teams used” has an unclear antecedent.

## Already working

- s2:e2:b0: Connects the research to a clear post-launch change in customer behavior.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c9bd67f7.md.

