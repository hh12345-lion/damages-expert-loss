import type { FAQ } from "./types";

export const faqItems: FAQ[] = [
  {
    question: "What is a damages expert witness?",
    answer:
      "A damages expert witness is a qualified financial professional — typically a forensic accountant, actuary, or economist — retained to provide an independent, court-admissible opinion on the quantum of financial losses in litigation or arbitration. Their role is to quantify past and future pecuniary losses, prepare Schedules of Loss, and give evidence that withstands scrutiny and cross-examination. In personal injury and clinical negligence, quantum experts apply the Ogden Tables and prescribed discount rate to capitalise future losses. In commercial disputes, they apply but-for counterfactual analysis and address Hadley v Baxendale remoteness. Expert reports must comply with CPR Part 35 in civil proceedings (and FPR Part 25 in family financial remedy cases where applicable), and the expert owes their primary duty to the court, not the instructing solicitor.",
  },
  {
    question:
      "What is the difference between general and special damages?",
    answer:
      "General damages compensate non-quantifiable harm assessed by the court — in personal injury, this includes PSLA (pain, suffering and loss of amenity), loss of amenity, and Smith v Manchester awards for handicap on the labour market. Special damages compensate quantifiable financial losses proved by evidence — past loss of earnings, care costs, medical expenses, and future losses capitalised using the Ogden multiplier/multiplicand method. In commercial litigation, the terminology maps differently: direct loss of the bargain equates to expectation damages (often treated as the primary compensatory head), while consequential losses are special damages subject to Hadley v Baxendale remoteness. A damages expert witness quantifies special damages and pecuniary heads; general damages in PI are typically assessed by the court using Judicial College Guidelines without expert quantification.",
  },
  {
    question: "What are the Ogden Tables?",
    answer:
      "The Ogden Tables are actuarial tables published by the Government Actuary's Department, used to calculate the present value of future financial losses in personal injury, clinical negligence, and fatal accident claims. The expert applies a multiplier — derived from the claimant's life expectancy, age, gender, and the prescribed discount rate — to an annual multiplicand (the annual net loss figure) to produce a lump sum capitalisation of future loss. Tables 1–8 cover loss of earnings for males and females at various retirement ages; Tables 35–38 cover loss of pension rights. The multiplier reflects both mortality risk and the time value of money. Following the Civil Liability Act 2018, the discount rate for future pecuniary loss is currently -0.25%, which materially affects multipliers and lump sum awards.",
  },
  {
    question:
      "What is the discount rate and how does it affect damages?",
    answer:
      "The discount rate is the rate used to reduce future losses to present value when awarding a lump sum, reflecting the assumption that the claimant will invest the award and achieve a real return. For personal injury claims, the Lord Chancellor sets the prescribed discount rate under the Damages Act 1996 as amended by the Civil Liability Act 2018 — currently -0.25% for future pecuniary loss. A negative discount rate increases multipliers in the Ogden Tables, producing higher lump sum awards for future loss of earnings, care costs, and pension loss. The discount rate applies to all future pecuniary heads capitalised via Ogden methodology. It does not apply to past losses, which are awarded at actual value plus interest under Senior Courts Act 1981 s35A.",
  },
  {
    question:
      "How is loss of earnings calculated in personal injury?",
    answer:
      "Past loss of earnings is calculated as the claimant's net earnings (gross less tax and National Insurance) for the period from accident to trial, less any earnings actually received during incapacity, and adjusted for periods of partial capacity. Future loss of earnings uses the multiplier/multiplicand method: the multiplicand is the annual net loss of earnings projected to retirement age (or a defined period for temporary losses); the multiplier is taken from the Ogden Tables at the prescribed discount rate. For self-employed claimants, the expert analyses tax returns, accounts, and business records for 3–5 years pre-accident to establish maintainable earnings. Smith v Manchester awards for residual handicap on the open labour market are typically quantified as a general damages lump sum of up to two years' net earnings where the claimant can work but at a reduced level.",
  },
  {
    question: "What is the but-for test in commercial damages?",
    answer:
      "The but-for test asks: but for the breach or wrong, what financial position would the claimant be in? The damages expert constructs a counterfactual financial model projecting revenues, costs, and profits absent the breach, then compares this to the actual post-breach performance. The difference — after deducting avoided variable costs and crediting reasonable mitigation — represents the net financial loss. This is the standard methodology for quantifying expectation damages under Robinson v Harman [1848]. The expert must also address Hadley v Baxendale remoteness for consequential losses, causation where multiple factors contributed, and the duty to mitigate. Transparent assumptions and sensitivity analysis on key variables are essential for reports that withstand cross-examination in the High Court and arbitration.",
  },
  {
    question:
      "How does a damages expert witness differ from a medical expert?",
    answer:
      "A medical expert assesses causation of injury, diagnosis, prognosis, treatment needs, and life expectancy — providing the clinical foundation for the claim. A damages expert witness (quantum expert) quantifies the financial consequences of those clinical findings: loss of earnings, pension loss, care costs, accommodation, equipment, and case management. The quantum expert does not opine on medical matters but relies on medical and care expert evidence to quantify pecuniary heads. In clinical negligence, the care expert assesses needs and costings; the quantum expert capitalises those figures using Ogden Tables. The disciplines are complementary — instructing both early ensures the Schedule of Loss reflects accurate life expectancy assumptions and care cost inputs.",
  },
  {
    question: "What is CPR Part 35 and how does it apply?",
    answer:
      "Civil Procedure Rules Part 35 and Practice Direction 35 govern expert evidence in civil proceedings in England and Wales. Experts must provide independent, objective opinions within their area of expertise, comply with specific report format requirements, and owe an overriding duty to the court — not the instructing party. The expert's report must state the substance of all material instructions, set out facts and assumptions separately from opinion, and address range of opinion where appropriate. Non-compliance can result in exclusion of evidence or adverse costs orders. CPR 35.7 provides for Single Joint Experts. In family financial remedy proceedings, FPR Part 25 applies equivalent duties. International arbitration follows the IBA Rules on Evidence, which impose similar independence requirements on party-appointed and tribunal-appointed experts.",
  },
  {
    question:
      "Should I use a Single Joint Expert or party-appointed expert?",
    answer:
      "A Single Joint Expert (SJE) is appointed jointly by both parties or directed by the court under CPR 35.7 to provide one independent opinion on quantum, reducing costs and narrowing issues. SJE appointment is common in lower-value personal injury claims and where quantum is relatively straightforward. Party-appointed experts (PAEs) are instructed separately by each side and produce competing reports, followed by joint expert meetings and a joint statement under CPR Part 35. PAE appointment is standard in high-value clinical negligence, complex commercial disputes, and international arbitration where each party requires independent analysis to test the other's case. The choice depends on claim value, complexity, adversarial strategy, and whether the court is likely to direct an SJE. Early discussion with your opponent at the CMC often determines the approach.",
  },
  {
    question:
      "How much does a damages expert witness cost in the UK?",
    answer:
      "UK damages expert witnesses typically charge £150–£300 per hour for general personal injury quantum work, £250–£500 per hour for commercial damages specialists, and £500–£1,000 or more per hour for senior international arbitration quantum experts. A standard PI Schedule of Loss typically costs £1,500–£6,000; a complex clinical negligence quantum report £8,000–£25,000; commercial quantum reports £8,000–£30,000 or above; and major arbitration engagements £50,000–£500,000 depending on complexity. Actuaries for pension loss charge £200–£450 per hour. Total costs depend on document volume, number of heads of loss, whether oral evidence is required, and timetable pressure. Costs are generally recoverable from the unsuccessful party in civil litigation and awarded in the arbitration costs decision.",
  },
  {
    question:
      "What credentials should a UK damages expert witness hold?",
    answer:
      "For personal injury and commercial quantum work, look for ACA or FCA (ICAEW), ACCA or FCCA, CFA, or CFE credentials with active forensic accounting practice. PI specialists should hold APIL First Tier accreditation and ideally Fellowship of the Expert Witness Institute (FEWI). For pension loss and periodical payments modelling, a Fellow of the Institute and Faculty of Actuaries (FIA) is appropriate for complex defined benefit schemes. For international arbitration quantum, a PhD in Economics or Finance with IBA Rules on Evidence experience and a track record in investment treaty or cross-border commercial arbitration is expected. Beyond credentials, the expert should have 10 or more years of quantum experience, CPR Part 35 compliant report writing, prior court or tribunal testimony, and professional indemnity insurance.",
  },
  {
    question: "How early should I instruct a damages expert witness?",
    answer:
      "Instruct a damages expert as early as possible — ideally at the pre-action protocol stage or immediately upon issuing proceedings — to allow sufficient time for document review, loss modelling, and report preparation before disclosure and trial deadlines. Early instruction enables the expert to advise on what financial records to request, whether the loss claim is viable before significant costs are incurred, and whether actuarial or care expert input is needed. For clinical negligence, instruct the quantum expert once medical and care expert reports are available or anticipated. For commercial claims, early instruction allows the expert to advise on document preservation and counterfactual modelling assumptions. Late instruction risks incomplete analysis, rushed assumptions, and a report that cannot withstand scrutiny at trial or in arbitration.",
  },
];
