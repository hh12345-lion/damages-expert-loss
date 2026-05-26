import type { GuidePage } from "./types";

const guides: GuidePage[] = [
  {
    slug: "loss-of-earnings-ogden-tables-guide",
    title: "Loss of Earnings & Ogden Tables Guide",
    h1: "Loss of Earnings & the Ogden Tables: A Solicitor's Guide",
    metaTitle:
      "Loss of Earnings & Ogden Tables Guide UK | Damages Expert Witness",
    metaDescription:
      "Solicitor's guide to loss of earnings quantification: multiplier/multiplicand method, Ogden Tables 1–8, discount rate, Smith v Manchester, and self-employed claims.",
    aboutServiceId: "loss-of-earnings",
    paragraphs: [
      "Loss of earnings is the most frequently instructed pecuniary head in personal injury and clinical negligence claims. Whether the claimant was employed, self-employed, or a company director, the quantum expert must establish a reliable pre-accident earnings baseline and apply the Ogden Tables to capitalise future losses at the prescribed discount rate.",
      "This guide explains the multiplier/multiplicand methodology, the relevant Ogden Tables, and the practical issues solicitors encounter when briefing a forensic accountant on loss of earnings — including Smith v Manchester awards, partial capacity, and self-employed claimants.",
    ],
    sections: [
      {
        heading: "The Multiplier/Multiplicand Method",
        content:
          "Future loss of earnings is calculated as: lump sum = annual net loss (multiplicand) × Ogden multiplier. The multiplicand is the claimant's net annual earnings loss — gross earnings less tax, National Insurance, and any residual earnings from permitted work. For past loss, the expert calculates net loss for each period from accident to trial without capitalisation. For future loss, the multiplicand is projected to normal retirement age (or an earlier date if medical evidence supports limited duration), adjusted for career progression where supported by pre-accident earnings history. The multiplier is not chosen arbitrarily — it is taken from the Ogden Tables at the prescribed discount rate, reflecting the claimant's age, gender, and life expectancy. Solicitors should ensure medical evidence on work capacity and retirement age is obtained before the quantum expert finalises the multiplicand assumptions.",
      },
      {
        heading: "Ogden Tables 1–8: Loss of Earnings",
        content:
          "Tables 1–4 provide multipliers for male claimants at retirement ages 50, 55, 60, and 65; Tables 5–8 provide equivalent multipliers for female claimants. The expert selects the table matching the claimant's gender and projected retirement age, then applies the discount rate adjustment. Table A (discount rate adjustment) converts base multipliers to the current prescribed rate — currently -0.25% under the Civil Liability Act 2018. A negative discount rate increases multipliers materially compared to the historical +2.5% rate, producing higher lump sum awards. The expert must also address contingencies: mortality risk is built into the tables, but additional deductions may apply for adverse health unrelated to the claim, criminal conduct, or other factors reducing life expectancy below actuarial norms.",
      },
      {
        heading: "The Discount Rate and Civil Liability Act 2018",
        content:
          "The Lord Chancellor sets the prescribed discount rate for future pecuniary loss under the Damages Act 1996, as reformed by the Civil Liability Act 2018. The current rate of -0.25% reflects evidence that claimants invest lump sums conservatively and face negative real returns after inflation. This rate applies to all future pecuniary heads — earnings, care, pension — capitalised via Ogden methodology. Solicitors should not assume a static rate: the rate may be reviewed by the panel established under the 2018 Act. Expert reports should state the rate used, cite the relevant statutory instrument, and model sensitivity at alternative rates where the claim value is significant, so the court can assess the impact of any future rate change on settlement negotiations.",
      },
      {
        heading: "Smith v Manchester and Handicap on the Labour Market",
        content:
          "Where the claimant can return to work but at a reduced level — lower earnings, fewer hours, or disadvantage in competing for employment — a Smith v Manchester Corp (1974) award compensates residual handicap on the open labour market. This is a general damages head, typically quantified as a lump sum of up to two years' net earnings, distinct from future loss of earnings where the claimant cannot work at all. The expert must clearly separate: (a) past loss to trial; (b) future loss of earnings for periods of total incapacity; and (c) Smith v Manchester for residual handicap. Double-counting between future loss and Smith v Manchester is a common defendant challenge — the report structure should prevent overlap.",
      },
      {
        heading: "Self-Employed and Director Claimants",
        content:
          "Self-employed loss of earnings requires analysis of tax returns, accounts, and business records for 3–5 years pre-accident to establish maintainable pre-accident earnings. The expert must distinguish between drawings, dividends, and reinvested profits, and address whether the business would have grown or declined absent the injury. For company directors, remuneration may include salary, dividends, and benefits in kind — all must be captured in the net earnings baseline. Where the business has continued at reduced profitability, the expert compares actual post-accident performance with the but-for projected performance. Complex cases may require separate business valuation input, but the quantum expert should lead the loss of earnings calculation with clear assumptions stated for cross-examination.",
      },
    ],
    faqs: [
      {
        question: "Which Ogden Tables apply to loss of earnings?",
        answer:
          "Tables 1–8 provide loss of earnings multipliers for male and female claimants at retirement ages 50, 55, 60, and 65. Table A adjusts multipliers for the current prescribed discount rate. The expert selects the table matching the claimant's gender and projected retirement age based on medical and employment evidence.",
      },
      {
        question: "Can past and future loss of earnings be claimed together?",
        answer:
          "Yes. Past loss is calculated as actual net earnings loss from accident to trial. Future loss is capitalised using the multiplier/multiplicand method from trial to retirement. Both heads appear separately in the Schedule of Loss with interest on past losses under Senior Courts Act 1981 s35A.",
      },
    ],
    relatedLinks: [
      { href: "/case-types/loss-of-earnings-personal-injury", label: "Loss of Earnings Case Type" },
      { href: "/services#loss-of-earnings", label: "Loss of Earnings Service" },
      { href: "/glossary/ogden-tables", label: "Glossary: Ogden Tables" },
      { href: "/types-of-damages", label: "Types of Damages" },
    ],
  },
  {
    slug: "schedule-of-loss-expert-evidence",
    title: "Schedule of Loss Expert Evidence Guide",
    h1: "Preparing a Schedule of Loss: Expert Evidence Guide",
    metaTitle:
      "Schedule of Loss Expert Evidence Guide UK | Damages Expert Witness",
    metaDescription:
      "How UK solicitors prepare Schedules of Loss with quantum expert evidence: past and future losses, Counter-Schedules, updating before trial, and CPR Part 35 compliance.",
    aboutServiceId: "loss-of-earnings",
    paragraphs: [
      "The Schedule of Loss is the central document anchoring quantum in personal injury, clinical negligence, and employment claims. It sets out every pecuniary head of claim with supporting calculations, enabling the court, defendants, and experts to identify the issues in dispute.",
      "This guide explains what the Schedule must contain, how the quantum expert contributes, and how to manage the Counter-Schedule process through to trial — including updates for changed circumstances and new expert evidence.",
    ],
    sections: [
      {
        heading: "What a Schedule of Loss Must Contain",
        content:
          "A comprehensive Schedule of Loss includes: past special damages (loss of earnings, care, medical expenses, travel, equipment) with supporting documentation referenced; future losses with Ogden multiplier calculations for each head (earnings, care, pension, case management, accommodation); Smith v Manchester and other general damages heads where applicable; interest calculations on past losses under s35A Senior Courts Act 1981; CRU (Compensation Recovery Unit) benefit deductions; and a grand total. Each head should state the assumptions relied upon — retirement age, life expectancy, hours of care, hourly rates — and cross-reference the expert report. The Schedule is a pleading document: figures must be capable of substantiation at trial.",
      },
      {
        heading: "Past vs Future Losses",
        content:
          "Past losses are awarded at actual value plus interest — no capitalisation required. The expert calculates net loss for each period, credits benefits and residual earnings, and applies the appropriate interest rate (typically half the short-term investment account rate for special damages from accident to trial). Future losses require Ogden capitalisation: the expert states the multiplicand, the multiplier source (table number and discount rate), and the product. Where future loss is contested on duration or amount, the expert should present alternative scenarios — for example, loss to age 55 vs age 65 — clearly labelled for the court's assessment.",
      },
      {
        heading: "The Quantum Expert's Contribution",
        content:
          "The forensic accountant or quantum expert prepares the underlying calculations that populate the Schedule. This includes: analysing tax records and employment contracts for earnings; reviewing care expert costings and applying multipliers; calculating pension loss using Ogden Tables 35–38; modelling accommodation costs post George v Biggs [2023]; and preparing interest schedules. The expert's CPR Part 35 report should mirror the Schedule structure, with the report providing the reasoning and assumptions and the Schedule providing the summary figures. Instructing the expert early ensures the Schedule reflects defensible methodology before it is served on the defendant.",
      },
      {
        heading: "Counter-Schedules and Joint Discussions",
        content:
          "The defendant serves a Counter-Schedule responding to each head — accepting, disputing, or proposing alternative figures. Quantum experts on both sides should then meet under CPR Part 35 to produce a joint statement identifying agreed figures, disputed assumptions, and the reasons for disagreement. Agreed past losses and interest should be recorded to narrow trial issues. Disputed multiplicands, retirement ages, and care hours are the typical battlegrounds. Solicitors should ensure the joint meeting agenda covers each Schedule head systematically, with the experts permitted to discuss methodology openly while maintaining their independent duties to the court.",
      },
      {
        heading: "Updating the Schedule Before Trial",
        content:
          "Schedules must be updated for: additional past loss periods as trial is adjourned; changed medical prognosis affecting life expectancy or care needs; new care expert evidence revising hourly rates or hours; and discount rate changes if a new statutory rate is set. The expert should provide a supplementary report or addendum rather than informal Schedule amendments without report support. Late substantial increases may attract adverse costs comment — proactive updating at each case management hearing demonstrates good conduct. For cases proceeding to periodical payments, the Schedule should present both lump sum and PPO scenarios for the court's comparison under Damages Act 1996.",
      },
    ],
    faqs: [
      {
        question: "Who prepares the Schedule of Loss — solicitor or expert?",
        answer:
          "The solicitor is responsible for the Schedule as a pleading document, but the quantum expert provides the calculations and assumptions underpinning each pecuniary head. Best practice is for the expert to produce a draft calculation schedule that the solicitor incorporates into the formal Schedule of Loss served on the defendant.",
      },
      {
        question: "When should the Schedule of Loss be served?",
        answer:
          "Timing is directed by the court's case management orders — typically with or after the expert report, and updated before trial. In PI multi-track cases, the Schedule is usually required before the CMC or as directed in the directions questionnaire. Early preparation supports Part 36 offers and settlement negotiations.",
      },
    ],
    relatedLinks: [
      { href: "/glossary/schedule-of-loss", label: "Glossary: Schedule of Loss" },
      { href: "/services#loss-of-earnings", label: "Loss of Earnings Service" },
      { href: "/case-types/clinical-negligence-quantum", label: "Clinical Negligence Quantum" },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
    ],
  },
  {
    slug: "commercial-damages-but-for-guide",
    title: "Commercial Damages But-For Guide",
    h1: "Commercial Damages & the But-For Methodology: Solicitor Guide",
    metaTitle:
      "Commercial Damages But-For Methodology Guide UK | Damages Expert Witness",
    metaDescription:
      "Solicitor's guide to commercial damages quantification: but-for test, expectation vs reliance loss, Hadley v Baxendale remoteness, mitigation, and expert report structure.",
    aboutServiceId: "commercial-loss-profits",
    paragraphs: [
      "Commercial damages experts quantify financial losses arising from breach of contract, IP infringement, professional negligence, and shareholder disputes. The foundational methodology is but-for analysis — constructing the financial position the claimant would have achieved absent the breach and comparing it to actual performance.",
      "This guide explains how solicitors should brief experts on the but-for test, the distinction between expectation and reliance damages, and how Hadley v Baxendale remoteness and mitigation shape the recoverable loss.",
    ],
    sections: [
      {
        heading: "The But-For Test Explained",
        content:
          "The but-for test asks: but for the defendant's breach, what would the claimant's financial position have been? The expert builds a counterfactual model using pre-breach financial data, management accounts, business plans, and market evidence to project revenues, costs, and profits that would have been achieved. This is compared to actual post-breach performance. The difference — net of avoided variable costs and adjusted for reasonable mitigation — is the loss of expected profit under Robinson v Harman [1848]. Causation must be addressed: where market downturns or the claimant's own decisions also contributed to poor performance, the expert must apportion loss attributable to the breach separately from external factors.",
      },
      {
        heading: "Expectation vs Reliance Damages",
        content:
          "Expectation damages (lost profits) place the claimant in the position they would have been in had the contract been performed — the default measure where profits can be calculated with reasonable certainty. Reliance damages (wasted expenditure) return the claimant to the position before the contract was made, recovering expenditure incurred in reliance on performance under Anglia Television Ltd v Reed [1972]. The claimant may elect reliance damages where expectation loss cannot be proved, or where they made a bad bargain — though the defendant may raise the bad bargain defence. The expert should quantify both measures where appropriate, clearly labelling the election implications for the solicitor's advice.",
      },
      {
        heading: "Hadley v Baxendale Remoteness",
        content:
          "Not all financial shortfalls are recoverable. Hadley v Baxendale [1854] limits recovery to: (1) losses arising naturally from the breach in the ordinary course of things; and (2) losses within the reasonable contemplation of both parties at contracting as the probable result of breach. Victoria Laundry illustrates the distinction — ordinary lost profits passed Limb 1; exceptional government contract profits failed Limb 2 without specific disclosure. The expert report must address remoteness for each head of consequential loss, identifying the limb relied upon and citing pre-contractual communications supporting contemplation. Quantifying a loss the law does not allow is wasted costs — structure the report to separate recoverable direct loss from consequential loss subject to remoteness challenge.",
      },
      {
        heading: "Mitigation and Avoided Loss",
        content:
          "The claimant must take reasonable steps to minimise loss following breach. The expert identifies available mitigation — alternative suppliers, redeployment of resources, substitute contracts — and quantifies the loss that proper mitigation would have avoided. Failure to mitigate reduces recoverable damages, though the burden is on the defendant to prove unreasonableness. Proactive mitigation analysis in the expert report strengthens the claimant's position and anticipates the defence. Where the claimant did mitigate, avoided costs are deducted from gross loss to produce net recoverable damages.",
      },
      {
        heading: "Expert Report Structure for Commercial Claims",
        content:
          "A CPR Part 35 compliant commercial damages report should include: executive summary of total loss by head; description of the breach and causation analysis; but-for model assumptions and data sources; period-by-period loss calculation; remoteness analysis for each consequential head; mitigation assessment; sensitivity analysis on key variables (revenue growth, margin, duration); and appendices with supporting financial schedules. For IP claims, separate sections for lost profits, reasonable royalty, and account of profits support the claimant's election. Clear separation of fact, assumption, and opinion assists the court and facilitates productive joint expert meetings.",
      },
    ],
    faqs: [
      {
        question: "What documents should I provide for a commercial damages expert?",
        answer:
          "Provide the contract and amendments, management accounts and audited financial statements for relevant periods, business plans and forecasts, correspondence relating to the breach, invoices and bank statements, and any prior quantum assessments. A clear letter of instruction identifying the heads of loss, legal framework, and timetable is essential under CPR Part 35.",
      },
      {
        question: "How does a commercial damages expert differ from a PI quantum expert?",
        answer:
          "A commercial damages expert applies but-for counterfactual modelling and Hadley v Baxendale remoteness to business losses. A PI quantum expert applies Ogden Tables and the prescribed discount rate to personal financial losses. Both are forensic accountants in many cases, but the methodology and legal framework differ significantly.",
      },
    ],
    relatedLinks: [
      { href: "/practice-areas/commercial-damages", label: "Commercial Damages Practice Area" },
      { href: "/services#commercial-loss-profits", label: "Commercial Lost Profits Service" },
      { href: "/glossary/hadley-v-baxendale-1854", label: "Glossary: Hadley v Baxendale" },
      { href: "/case-types/commercial-contract-damages", label: "Commercial Contract Damages" },
    ],
  },
  {
    slug: "international-arbitration-quantum",
    title: "International Arbitration Quantum Guide",
    h1: "Quantum of Damages in International Arbitration: A Solicitor's Guide",
    metaTitle:
      "International Arbitration Quantum Guide UK | Damages Expert Witness",
    metaDescription:
      "Solicitor's guide to damages quantification in ICC, LCIA, and ICSID arbitration: IBA Rules, hot-tubbing, Chorzów Factory, DCF methodology, and tribunal expert practice.",
    aboutServiceId: "international-arbitration-quantum",
    paragraphs: [
      "Damages quantification in international arbitration follows the substantive law governing the dispute — which may be English contract law, civil law principles, or international investment law. The quantum expert must adapt methodology to the applicable standard of reparation while meeting the procedural requirements of the arbitral institution.",
      "This guide covers the IBA Rules on Evidence approach to experts, witness conferencing (hot-tubbing), the Chorzów Factory full reparation standard, and practical differences between ICC, LCIA, and ICSID proceedings.",
    ],
    sections: [
      {
        heading: "IBA Rules on Evidence: Party and Tribunal Experts",
        content:
          "Article 5 of the IBA Rules on the Taking of Evidence in International Arbitration (2020) governs party-appointed experts. Each party submits an expert report with the expert's qualifications, instructions, methodology, and conclusions. Article 6 allows the tribunal to appoint its own expert, whose findings are subject to party comment. Experts must be independent and owe their primary duty to the tribunal. Reports should follow the IBA structure: scope of assignment, factual assumptions, methodology, results, and sensitivity analysis. Tribunals in ICC, LCIA, and ICSID cases routinely expect party experts to meet before the hearing and produce a joint document identifying agreements and disagreements.",
      },
      {
        heading: "Hot-Tubbing and Witness Conferencing",
        content:
          "Witness conferencing — commonly called hot-tubbing — involves opposing experts giving evidence concurrently before the tribunal, enabling direct dialogue and real-time clarification. The tribunal may direct the sequence of questioning, put its own questions, and ask experts to respond to each other's assumptions. This procedure is standard in investment treaty and complex commercial arbitration. Experts must defend their models under immediate scrutiny — unsupported DCF assumptions or cherry-picked comparables are exposed quickly. Solicitors should prepare experts for conferencing by reviewing the opposing report in detail and agreeing a list of methodological disputes in advance.",
      },
      {
        heading: "The Chorzów Factory Full Reparation Standard",
        content:
          "In investment treaty arbitration, the applicable standard is full reparation under customary international law, as articulated in Factory at Chorzów (1928): the respondent must wipe out all consequences of the illegal act and restore the claimant to the position it would have been in had the act not occurred. For direct expropriation, fair market value at the date of expropriation is the primary measure. For indirect expropriation and fair and equitable treatment breaches, tribunals apply DCF or lost profits methodology depending on the investment's characteristics. The expert must identify the applicable standard in the report introduction and align methodology accordingly — English contract law but-for analysis alone is insufficient in ICSID proceedings.",
      },
      {
        heading: "DCF Methodology in Arbitration",
        content:
          "Discounted cash flow analysis is the most common method for quantifying investment treaty and commercial arbitration damages where the business had an operating history and reliable projections. The expert constructs free cash flow projections, applies a discount rate (WACC), and calculates terminal value. Tribunals scrutinise growth rates, margin assumptions, and terminal value methodology heavily — sensitivity tables showing outcomes at alternative assumptions are essential. DCF is inappropriate for start-ups without track record or where cash flows are too speculative; market-based approaches (comparable transactions, stock market multiples) may be preferred. The expert should explain why the chosen method is appropriate for the specific investment.",
      },
      {
        heading: "ICC, LCIA, and ICSID: Procedural Differences",
        content:
          "ICC arbitration under the ICC Rules typically involves terms of reference, a procedural timetable for expert reports, and a hearing with witness conferencing at the tribunal's discretion. LCIA arbitration under the LCIA Rules follows similar principles with emphasis on efficient case management. ICSID proceedings (Convention and Additional Facility) have specific requirements for expert evidence in annulment and enforcement contexts, and investment treaty claims often involve state respondents with sovereign defences affecting quantum. UNCITRAL ad hoc rules apply in many bilateral treaty cases. Regardless of institution, instruct counsel to confirm the applicable substantive law on damages early — the quantum expert's methodology must follow that law, not assume English law by default.",
      },
    ],
    faqs: [
      {
        question: "How does damages quantification differ in international arbitration?",
        answer:
          "Damages follow the substantive law governing the dispute — English law, civil law, or international law for investment treaties. Investment treaty cases apply the Chorzów Factory full reparation standard, often using FMV or DCF. Procedure is governed by institutional rules and the IBA Rules on Evidence rather than CPR Part 35.",
      },
      {
        question: "When should I instruct a quantum expert in arbitration?",
        answer:
          "Instruct as early as possible after the statement of claim/defence framework is established, allowing time for document production, model construction, and expert meetings before the hearing. Major arbitration quantum engagements require months of analysis — late instruction risks inadequate sensitivity analysis and unprepared conferencing.",
      },
    ],
    relatedLinks: [
      { href: "/practice-areas/international-arbitration", label: "International Arbitration Practice Area" },
      { href: "/services#international-arbitration-quantum", label: "Arbitration Quantum Service" },
      { href: "/case-types/investment-treaty-damages", label: "Investment Treaty Damages" },
      { href: "/glossary/chorzow-factory-standard", label: "Glossary: Chorzów Factory" },
    ],
  },
  {
    slug: "clinical-negligence-quantum-guide",
    title: "Clinical Negligence Quantum Guide",
    h1: "Clinical Negligence Quantum: Expert Evidence Guide",
    metaTitle:
      "Clinical Negligence Quantum Expert Evidence Guide UK | Damages Expert Witness",
    metaDescription:
      "Expert evidence guide for clinical negligence quantum: all heads of damage, George v Biggs accommodation, PPO vs lump sum, Schedule of Loss, and the quantum expert's role.",
    aboutServiceId: "future-care-costs",
    paragraphs: [
      "Clinical negligence claims involving catastrophic injury require coordinated expert evidence across multiple disciplines — medical, care, occupational therapy, accommodation, and quantum. The forensic accountant or quantum expert integrates these inputs into a Schedule of Loss that capitalises future pecuniary losses.",
      "This guide explains all recoverable heads of damage, the post-George v Biggs approach to accommodation, periodical payments versus lump sum awards, and how solicitors should manage the quantum expert's role through to trial.",
    ],
    sections: [
      {
        heading: "All Heads of Damage in Clinical Negligence",
        content:
          "Clinical negligence damages include: general damages (PSLA — assessed by the court using Judicial College Guidelines, not quantified by the expert); past special damages (care, treatment, equipment, loss of earnings to trial, travel, accommodation); and future special damages (care, case management, loss of earnings, pension loss, equipment, Court of Protection costs, accommodation). The quantum expert calculates and presents all pecuniary heads in the Schedule of Loss. CRU benefit deductions must be applied to past care and NHS treatment recoveries. Interest on past special damages is calculated under s35A. The expert does not opine on PSLA but must ensure pecuniary heads do not overlap with general damages awards.",
      },
      {
        heading: "George v Biggs and Accommodation Costs",
        content:
          "Following George v Biggs [2023], the Roberts v Johnstone formula for accommodation no longer applies. Claimants may recover the full capital cost of disability-adapted accommodation, with a deduction for the value of property they already own or could reasonably afford without adaptation. The accommodation expert assesses the capital cost of suitable property; the quantum expert presents the net claim after deduction. This change materially increased accommodation recoveries when the discount rate was negative and Roberts v Johnstone produced nil awards. Reports must cite George v Biggs explicitly and avoid outdated Roberts v Johnstone calculations that defendants will challenge immediately.",
      },
      {
        heading: "PPO vs Lump Sum: Modelling Both Scenarios",
        content:
          "Under the Damages Act 1996, the court may order periodical payments for future care, earnings-related losses, and other heads instead of a lump sum. PPOs provide annual payments indexed to ASHE (or another index), protecting the claimant against investment risk and longevity. Lump sums give immediate capital but require careful investment management. The quantum expert — often with actuarial input for PPO modelling — prepares both scenarios: lump sum capitalisation via Ogden Tables and PPO annual payments with escalation assumptions. The court compares net present cost, claimant preference, and defendant's PPO offer (which the claimant cannot be compelled to accept without court order). Early PPO modelling supports settlement discussions.",
      },
      {
        heading: "The Schedule of Loss in Clinical Negligence",
        content:
          "High-value clinical negligence Schedules are complex multi-disciplinary documents. The quantum expert coordinates inputs from: the care expert (hours, rates, life expectancy); the occupational therapist (equipment, adaptations); the accommodation expert (capital costs); the medical expert (life expectancy, capacity for work); and the case manager (annual case management fees). Each future head is capitalised separately with appropriate Ogden multipliers — care and case management may use different life expectancy assumptions if medical evidence supports it. The Schedule should be updated as trial approaches and new expert evidence is served, with supplementary quantum reports supporting material revisions.",
      },
      {
        heading: "The Quantum Expert's Role and Coordination",
        content:
          "The quantum expert is the financial integrator of the claim — not a substitute for care or medical experts. Instruct the quantum expert once care and life expectancy evidence is available or anticipated on a stated assumption basis. The expert should attend joint expert meetings with the defendant's quantum expert to agree life expectancy, care hours, and methodological approaches where possible. For Court of Protection cases, the expert may also quantify deputy and management costs. APIL-accredited forensic accountants with clinical negligence experience understand the interplay between heads and the defendant's typical challenges — instruct early to avoid Schedule revisions that delay trial.",
      },
    ],
    faqs: [
      {
        question: "What heads of damage are recoverable in clinical negligence?",
        answer:
          "General damages (PSLA) plus past and future special damages including care, case management, loss of earnings, pension loss, accommodation, equipment, and Court of Protection costs. The quantum expert calculates all pecuniary heads; PSLA is assessed by the court.",
      },
      {
        question: "How are future care costs calculated?",
        answer:
          "A care expert assesses needs and costings. The quantum expert capitalises the annual care cost using Ogden multipliers based on life expectancy and the prescribed discount rate. Following George v Biggs [2023], accommodation is capitalised at full net cost after property deduction.",
      },
    ],
    relatedLinks: [
      { href: "/practice-areas/clinical-negligence", label: "Clinical Negligence Practice Area" },
      { href: "/services#future-care-costs", label: "Future Care Costs Service" },
      { href: "/case-types/clinical-negligence-quantum", label: "Clinical Negligence Quantum" },
      { href: "/guides/schedule-of-loss-expert-evidence", label: "Schedule of Loss Guide" },
    ],
  },
  {
    slug: "single-joint-expert-damages",
    title: "Single Joint Expert Damages Guide",
    h1: "Single Joint Expert in Damages Cases: A Solicitor's Guide",
    metaTitle:
      "Single Joint Expert Damages Guide UK | CPR 35.7 | Damages Expert Witness",
    metaDescription:
      "Solicitor's guide to Single Joint Experts in damages cases: CPR 35.7, when courts order SJEs, PI vs commercial practice, joint instructions, and written questions.",
    aboutServiceId: "loss-of-earnings",
    paragraphs: [
      "A Single Joint Expert (SJE) provides one independent opinion on quantum, appointed jointly by the parties or directed by the court under CPR 35.7. SJE appointment can reduce costs and narrow issues — but requires careful management of the joint instruction process.",
      "This guide explains when SJEs are appropriate in damages cases, how PI practice differs from commercial litigation, and the procedural steps for joint letters of instruction and written questions under CPR Part 35.",
    ],
    sections: [
      {
        heading: "CPR 35.7 and the Court's Power to Direct an SJE",
        content:
          "CPR 35.7 allows the court to direct that evidence on a particular issue is to be given by a Single Joint Expert selected by the court, agreed by the parties, or chosen from a list supplied by the parties. Practice Direction 35 emphasises that SJEs should be used where possible to save costs and promote settlement. The court will consider: whether the issue is within a recognised body of expertise; whether an SJE is proportionate to claim value; and whether the parties can agree instructions. Either party may apply for SJE appointment, or the court may raise it of its own motion at the CMC. Opposition requires good reason — disproportionate complexity or fundamental disagreement on instruction scope.",
      },
      {
        heading: "When an SJE Is Appropriate in Damages Cases",
        content:
          "SJE appointment works well for: straightforward loss of earnings claims with clear employment records; fatal accident dependency calculations; employment tribunal loss of earnings; and lower-value PI claims where both parties want to avoid duplicate expert costs. SJE is less suitable for: high-value clinical negligence with multiple interacting heads; complex commercial but-for disputes where each party needs independent analysis; international arbitration (where party-appointed experts are the norm); and cases where the parties' instructions would fundamentally differ on assumptions. Solicitors should assess whether a joint instruction is achievable before agreeing or applying for SJE appointment.",
      },
      {
        heading: "PI vs Commercial SJE Practice",
        content:
          "In personal injury, SJEs are routinely directed for loss of earnings and pension loss in multi-track claims where quantum is not heavily contested. The APIL-accredited forensic accountant is the typical SJE profile. In commercial litigation, party-appointed experts are the default in High Court disputes — SJEs are rare except for discrete valuation issues (e.g. a property valuation point). Family financial remedy proceedings use SJE directions under FPR Part 25 for business valuations. Employment Tribunal cases may use jointly instructed experts by agreement without formal CPR 35.7 direction. Match the expert type to the practice area: a commercial forensic accountant for contract loss, not a PI specialist without commercial experience.",
      },
      {
        heading: "The Joint Letter of Instruction",
        content:
          "Both parties must agree the letter of instruction to the SJE — or the court will determine disputed terms. The joint letter should: identify the issues for the expert; set out agreed facts and disputed facts; specify the legal framework (without asking the expert to advise on law); list documents to be provided; state the timetable; and address fee arrangements (typically split equally unless the court orders otherwise). Disputes on instruction scope should be resolved before the expert begins work — an expert receiving contradictory instructions from each party cannot fulfil their CPR Part 35 duties. Solicitors should negotiate the joint letter as carefully as they would a Part 36 offer.",
      },
      {
        heading: "Written Questions and Challenging the SJE Report",
        content:
          "Under CPR 35.6, parties may put written questions to the SJE once — for clarification, and in some circumstances to challenge methodology. Questions must be proportionate and not a fishing exercise. The SJE's answers are part of their evidence. Where a party fundamentally disagrees with the SJE's conclusions, they may apply for permission to adduce their own expert evidence under CPR 35.7(4) — but permission is not granted lightly where an SJE was directed. Cross-examination at trial remains available. For damages SJEs, focus questions on: multiplicand assumptions, retirement age, discount rate application, and care hour inputs — the typical pressure points in PI quantum.",
      },
    ],
    faqs: [
      {
        question: "Who pays the Single Joint Expert's fees?",
        answer:
          "Typically the parties share the SJE's fees equally in the first instance, with costs following the event at conclusion. The court may order a different apportionment. The joint letter of instruction should agree fee arrangements and the expert's hourly rate or fixed fee before work commences.",
      },
      {
        question: "Can I challenge an SJE report I disagree with?",
        answer:
          "You may put written questions under CPR 35.6 once. For fundamental disagreement, apply under CPR 35.7(4) for permission to instruct your own expert — but permission is discretionary and may not be granted if the SJE process was agreed. Cross-examination at trial remains available.",
      },
    ],
    relatedLinks: [
      { href: "/glossary/single-joint-expert-sje", label: "Glossary: Single Joint Expert" },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/qualifications", label: "Expert Qualifications" },
      { href: "/faq", label: "Damages Expert Witness FAQ" },
    ],
  },
];

export { guides };

export const guideSlugs = guides.map((g) => g.slug);

export function getGuide(slug: string): GuidePage | undefined {
  return guides.find((g) => g.slug === slug);
}
