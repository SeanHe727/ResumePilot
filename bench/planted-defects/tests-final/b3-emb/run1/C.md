Your strongest material is the quantified engineering work at Voltline and Clearwater. The main changes are to fix two technical claims, remove two project bullets that appear to belong to your job, and make the project and skills sections more credible.

### Header and education
- **Contact line:** Make sure the code link goes directly to work a reviewer can inspect. If the address and link are placeholders only for this review, no change is needed.
- **Education line:** Keep it as is unless you have unusually relevant coursework, honors, or a capstone worth the space.

### Voltline Robotics
- **Firmware-update speed:** Specify what became 60% faster—download, installation, or total update time—and the conditions measured. Compression and resume address different parts of an update, so the result is otherwise hard to interpret.
- **Hardware-in-the-loop rig:** Clarify whether the 400 tests ran on *every* build and what they covered. That makes the scale and value of the rig easier to judge.
- **Crash logger:** Make the connection between the saved data and the five diagnosed failures precise. “Found the root cause” may overstate what the logger alone established.
- **Vibration sampling:** Correct or remove the claim that sampling a 5 kHz signal at 8 kHz avoids aliasing. An 8 kHz sample rate cannot directly capture a 5 kHz signal without aliasing; if you measured a filtered or down-converted signal instead, describe the actual method.
- **Interrupt/main-loop counter:** Correct or remove the claim that `volatile` fixed a race condition. It does not, by itself, provide atomic access or synchronization. State the actual fix only after verifying it.
- **Fleet firmware:** Keep this prominent: it gives scope and two strong outcomes. Check that the fault reduction is attributable to this work and that the 300-unit figure describes the fleet affected.

### Clearwater Sensors
- **End-of-line automation:** Strong bullet. Verify that the 90-to-25-second figures cover the same portion of the test process.
- **Solder-paste investigation:** Strong causal story. Check whether the return-rate change can fairly be attributed to the reflow-profile update rather than other simultaneous changes.
- **Calibration procedure:** Clarify whether complaints fell *because of* the procedure and whether both quarterly counts cover comparable periods.
- **Eight-board fixture:** Strong result. Make clear whether 40-to-150 boards per hour is station throughput under comparable operating conditions; readers may otherwise expect an eightfold increase.

### Projects
- **Weather station, opening bullet:** Remove it. It uses promotional language but provides no technical detail or evidence, unlike the two bullets below it.
- **Weather station, current reduction:** Keep it; add the measurement conditions if space permits. Average current depends heavily on reading frequency, transmission schedule, and measurement duration.
- **Weather station, publication and school adoption:** Keep if you can substantiate the adoption. Ensure the linked repository makes the schematics and firmware easy to find.
- **Formula Student, first bullet:** Remove or correct it. A warehouse robot fleet does not appear to belong to a Formula Student electric-car project.
- **Formula Student, CAN-bus bullet:** Clarify your personal contribution and testing responsibility. The passive phrasing obscures both.
- **Formula Student, final bullet:** Remove it. It repeats the Voltline fleet result under a project dated years earlier, creating a serious credibility problem.

### Skills and overall presentation
- **Tools:** Keep only skills you can discuss confidently. In particular, make sure your experience supports the listed C++, STM32, and FPGA skills; the resume currently gives little evidence for some of them.
- **Methods:** Prioritize methods relevant to the roles you want. “Firmware” is broad beside the more specific items.
- **Dates:** Your most recent job ends in June 2025. If this is your current resume, be ready to account for the period since then; don’t change dates to hide a gap.