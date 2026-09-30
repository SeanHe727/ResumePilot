Your strongest material is the quantified engineering work. Before polishing wording, fix the technical claims and the entries that appear to be in the wrong section.

### Fix first: credibility issues

- **Voltline — 5 kHz vibration signal sampled at 8 kHz:** Correct or remove the claim that this captured the signal “without aliasing.” An 8 kHz sampling rate cannot capture a 5 kHz signal without aliasing under ordinary sampling assumptions. Explain the actual measurement approach if there was more to it.
- **Voltline — race condition fixed by declaring the counter `volatile`:** Verify what fixed the race and describe that change accurately. `volatile` alone does not make shared access atomic or provide synchronization, so this line is likely to raise concerns with embedded-software reviewers.
- **Formula Student — robot fleet and 300-robot bullets:** Remove these from the car project or put the work under the correct experience. They appear to duplicate the Voltline motor-controller work and conflict with the Formula Student context.

### Experience

- **Section order:** Put Voltline before Clearwater Sensors. Reverse chronological order makes your most recent role easiest to find.
- **Clearwater — test time, 90 to 25 seconds:** Keep the result, but make sure “per unit” and the 20,000-units-per-month volume are unambiguous despite the line break. This is a strong scale-and-impact bullet.
- **Clearwater — returns, 2.1% to 0.4%:** Specify what the percentages measure and over what period, if you can substantiate it. That makes the causal claim easier to assess.
- **Clearwater — calibration complaints, 15 to 2 a quarter:** Clarify whether both counts use the same quarterly basis. Otherwise the comparison takes a second read.
- **Clearwater — eight-board fixture:** Keep it; the fixture and throughput result are concrete.
- **Voltline — update speed improved 60%:** Specify the measure—download time, installation time, or another metric. “Speed” is ambiguous here.
- **Voltline — HIL rig:** Keep it; tests per build is useful evidence of scope.
- **Voltline — crash logger:** Clarify whether its data *identified* the root causes or helped investigations identify them. This keeps the claim precise.
- **Voltline — motor-controller rewrite:** Keep the scope and outcomes, but be ready to substantiate how the 60% field-fault reduction was measured.

### Projects and skills

- **Weather station — “next-generation, innovation-driven…” bullet:** Remove it. It makes broad claims without telling the reader what you built; the following two bullets provide much better evidence.
- **Weather station — current reduction and published design:** Keep both. Check that the current figures were measured under comparable operating conditions.
- **Formula Student — CAN-bus bullet:** Make your own contribution clear. The passive construction obscures what you wrote or tested, and the reference to the motor controller needs enough context to distinguish it from the Voltline work.
- **Formula Student — Electronics Lead:** Add a specific leadership responsibility or outcome if the title is accurate. The current project bullets do not show what you led on a 12-person team.
- **Skills:** Separate languages, platforms, and equipment rather than placing C, STM32, and oscilloscopes together under “Tools.” Consider removing the broad “firmware” skill; your experience already demonstrates it more convincingly.

**Education and contact:** The education entry needs no substantive change. For a submitted version, ensure the contact details and code link are real, current, and lead to work you want reviewed.