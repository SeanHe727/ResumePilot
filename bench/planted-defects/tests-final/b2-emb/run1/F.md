# Resume review

The strongest material is your quantified embedded-systems work. The main risks are two technically questionable claims and a project section that appears to duplicate or misattribute work experience. Resolve those before polishing wording.

## Header and structure

- **Contact information:** Keep the phone and email. Make the code link clearly recognizable as your GitHub or portfolio; the current URL doesn’t identify what it links to. Add LinkedIn if you use it professionally. A city is optional, but can help recruiters understand location.
- **Section order:** Consider moving Education below Experience and Projects. Your post-graduation experience is now substantial enough that it should lead.
- **Education line:** The degree, school, and dates are clear. Add GPA or relevant coursework only if it strengthens your candidacy; neither is necessary by default.

## Voltline Robotics

- **Firmware updates — “Improved update speed by 60%…”** Clarify what “speed” measures: transfer rate, total update time, or something else. The number is compelling, but readers need to know what improved and how it was measured.
- **Hardware-in-the-loop rig — “400 motor-control tests on every firmware build.”** This is a strong, specific accomplishment. If you can substantiate it, add the outcome it enabled—such as defect detection, test coverage, or time saved. Otherwise, the test count already gives useful scale.
- **Crash logger — “last 2 seconds of sensor data to flash…”** Strong technical detail and a concrete result. If relevant and accurate, clarify whether the logger captured data before a crash or fault, and how it helped isolate those failures.
- **Vibration sampling — “5 kHz … at 8 kHz … without aliasing.”** **Verify and correct this claim.** Sampling at 8 kHz cannot capture a 5 kHz signal without aliasing: the sampling rate must be greater than twice the highest frequency of interest, with appropriate anti-alias filtering. As written, this is a technical error that may undermine your credibility with embedded or signal-processing reviewers.
- **Shared counter — “fixed a race condition … by declaring the counter volatile.”** **Verify the actual fix.** `volatile` can affect compiler behavior, but it does not generally make shared access atomic or provide synchronization. It is not, by itself, a reliable race-condition fix. Describe the real solution accurately; if `volatile` was only part of it, make that distinction.
- **Motor-controller rewrite — 300-unit fleet, jitter, and fault reduction.** This is your strongest Voltline bullet: it has scope and measurable results. Move it earlier in the role. Make sure the measurement period and the relationship between the firmware change and the reduction in motor faults are defensible.

## Clearwater Sensors

- **End-of-line test automation — 90 to 25 seconds, 20,000 units/month.** Strong quantified result. Ensure the volume clearly refers to the line or process affected, not necessarily units you personally tested.
- **Solder-paste investigation — returns from 2.1% to 0.4%.** Clear investigation and business outcome. The causal chain is understandable; be prepared to explain how the solder-paste change and reflow-profile update were verified.
- **Calibration procedure — complaints from 15 to 2 per quarter.** Good result, but make clear what period the comparison covers, if you can. That will help readers judge the improvement.
- **Test fixture — 8 boards at once, throughput from 40 to 150 per hour.** A strong, concrete accomplishment. Keep the unit of throughput clear and be ready to explain how you measured it.

## Projects

### Low-Power Weather Station

- **“Next-generation, innovation-driven…”** Remove this line. It is promotional language without evidence of what you built or why it is technically notable.
- **Power reduction — 4.2 mA to 0.9 mA.** Excellent measurable result. Keep it near the top of the project.
- **Open schematics and firmware; a local school built two stations.** This is a distinctive impact point. Preserve it, and make sure the public materials are accessible from the link in your header or a project link.

### Formula Student Electric Car

- **“Worked on firmware and testing for the robot fleet’s motor controllers.”** This appears inconsistent with the Formula Student project, which is presented as an electric car team. It also conflicts with the Voltline robot-fleet material. Check whether this describes the Formula Student car or a different project, and correct the attribution.
- **CAN-bus dashboard firmware bullet.** This is relevant but currently vague and passive: the reader can’t tell what you owned or what the testing established. Clarify your contribution and the technical scope, if you can do so accurately.
- **“Rewrote motor-control firmware for a fleet of about 300 robots…”** This closely repeats the Voltline accomplishment, including the fleet size and results. It is difficult to reconcile with the Formula Student project as described. Remove it from this project unless it was genuinely separate work; if it was, clearly distinguish the system, context, and results. Repeating the same achievement in two sections risks looking like inflated or misattributed experience.
- **Project role — “Electronics Lead, Team of 12.”** The leadership title is useful, but the bullets don’t yet show what you led or how you worked with the team. Add leadership evidence only if you can support it with specific responsibilities or outcomes.

## Skills

- **“Tools: C, C++, STM32, oscilloscopes, FPGA.”** The category mixes programming languages, a microcontroller platform, test equipment, and FPGA experience. Separate these into accurate categories so recruiters and ATS can scan them easily. Include FPGA only if you can discuss your hands-on experience with it.
- **“Methods: firmware, hardware-in-the-loop testing, CAN, low-power design.”** This also mixes a broad work area, a test approach, a communications bus, and a design concern. Organize skills by type, and consider including specific technologies already demonstrated in your experience—only if you’re comfortable discussing them in an interview.
- **Skills relevance:** Put the most role-relevant skills first. Avoid adding tools, frameworks, or technologies you haven’t used enough to defend.

## Priorities

1. Correct or remove the sampling-rate and `volatile` claims after checking the underlying technical details.
2. Resolve the Formula Student/robot-fleet overlap and the duplicated 300-unit accomplishment.
3. Move the strongest, verified impact bullets toward the top of each role.
4. Replace vague or promotional project content with verifiable technical contribution and impact.
5. Reorganize the skills section into clear, consistent categories.