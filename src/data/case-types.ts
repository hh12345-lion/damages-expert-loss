import type { ContentPage, FAQ } from "./types";

const professionalNegligenceDamagesFaqs: FAQ[] = [
  {
    question: "What is the SAAMCo principle in professional negligence?",
    answer:
      "The SAAMCo principle (South Australia Asset Management Corp v York Montague [1997]) limits the damages recoverable in professional negligence cases to the loss within the scope of the professional's duty. Where an adviser provides information (not advice), their liability is limited to the additional loss caused by the information being wrong  -  not all losses flowing from the transaction. Expert witnesses must address SAAMCo when quantifying professional negligence losses.",
  },
  {
    question: "What is loss of chance quantification?",
    answer:
      "Where the claimant's loss depends on the actions of a third party (e.g. whether a court would have decided in their favour, or whether a transaction would have completed), the expert quantifies the loss of chance  -  expressing the lost opportunity as a percentage probability multiplied by the full loss. This approach is common in solicitor negligence claims (Allied Maples v Simmons & Simmons [1995]).",
  },
];

export const caseTypes: ContentPage[] = [
  {
    slug: "loss-of-earnings-personal-injury",
    title: "Loss of Earnings (Personal Injury)",
    h1: "Loss of Earnings Personal Injury Damages Expert Witness",
    metaTitle:
      "Loss of Earnings Expert Witness | Personal Injury Quantum",
    metaDescription:
      "UK damages expert witnesses for past and future loss of earnings in personal injury claims  -  net earnings, Ogden Tables, Smith v Manchester, and self-employed quantum for solicitors.",
    paragraphs: [
      "Loss of earnings is often the largest head of special damages in personal injury and clinical negligence claims. A damages expert witness establishes the claimant's pre-incident earning capacity using P60s, tax returns, payslips, and employment records, then calculates past loss from the date of injury to trial on a net basis after income tax and National Insurance. Future loss is capitalised using the multiplier/multiplicand method under the Ogden Tables and the prescribed discount rate, producing a lump sum that reflects the present value of earnings the claimant will not receive.",
      "Claims involving self-employed claimants, company directors, and business owners require forensic analysis of accounts for three to five years pre-accident to establish maintainable net earnings. The expert addresses business growth or decline trajectories that would have occurred absent the injury, apportions remuneration between salary and dividends where relevant, and distinguishes loss attributable to the injury from wider market or operational factors. Where the claimant retains some earning capacity, partial loss models and stepped multiplicands may be appropriate.",
      "Beyond direct earnings loss, the court may award a Smith v Manchester lump sum for handicap on the open labour market  -  compensating for the disadvantage the claimant faces when competing for employment despite returning to work. Expert witnesses quantify this head with reference to judicial guidance and the claimant's residual earning capacity. All figures are presented in a Schedule of Loss compliant with CPR Part 35, with transparent assumptions on retirement age, mortality, and contingencies capable of withstanding cross-examination.",
    ],
    faqs: [
      {
        question:
          "How is future loss of earnings calculated in personal injury?",
        answer:
          "The future loss of earnings is calculated using the multiplier/multiplicand method: the multiplicand is the claimant's annual net loss of earnings; the multiplier is derived from the Ogden Tables, adjusted for the discount rate set by the Lord Chancellor (currently -0.25% under the Civil Liability Act 2018). The product is the lump sum award for future earnings loss.",
      },
      {
        question: "How are self-employed earnings losses calculated?",
        answer:
          "Self-employed loss of earnings requires analysis of the claimant's tax returns, accounts, and business records for 3–5 years pre-accident to establish maintainable pre-accident earnings. The expert then applies the multiplier/multiplicand method to the net loss figure, addressing any business growth or decline trajectory that would have occurred absent the injury.",
      },
    ],
    practiceAreaSlugs: ["personal-injury-quantum"],
    serviceIds: ["loss-of-earnings"],
  },
  {
    slug: "pension-loss-calculation",
    title: "Pension Loss Calculation",
    h1: "Pension Loss Damages Expert Witness | Ogden Tables & Actuarial Evidence",
    metaTitle:
      "Pension Loss Expert Witness | Ogden Tables & Actuarial Evidence",
    metaDescription:
      "Damages expert witnesses for pension loss in personal injury and fatal accident claims  -  defined benefit and contribution schemes, Ogden Tables 35–38, CETV analysis, and actuarial liaison.",
    paragraphs: [
      "Pension loss arises where injury prevents the claimant from working to normal retirement age, reducing pension accrual in defined benefit or defined contribution schemes. A quantum expert quantifies the annual pension the claimant would have received but for the injury, then capitalises that loss using Ogden Tables 35–38 (loss of pension rights) and the prescribed discount rate. State pension loss may also be recoverable where the claimant's National Insurance record is affected.",
      "Defined benefit schemes  -  particularly final salary arrangements  -  may require cash equivalent transfer value (CETV) analysis and liaison with a pensions actuary where scheme rules, early retirement factors, or GMP equalisation complicate the calculation. For defined contribution schemes, the loss is typically measured by employer contributions and member contributions that will not be made during the lost working period, plus any investment growth foregone. Expert reports set out scheme membership history, normal retirement age, and assumptions on salary progression.",
      "The choice between instructing a forensic accountant alone or jointly with an actuary depends on scheme complexity. Straightforward cases are routinely handled by PI quantum experts using the Ogden Tables; multi-scheme memberships, public sector pensions, and cases involving periodical payments may warrant actuarial evidence. All pension loss figures are integrated into the overall Schedule of Loss alongside earnings and care heads, with consistent life expectancy and retirement assumptions across the claim.",
    ],
    faqs: [
      {
        question: "How is pension loss calculated in personal injury claims?",
        answer:
          "Pension loss is calculated using the Ogden Tables  -  specifically Tables 35–38 (loss of pension rights)  -  applying a multiplier to the annual pension loss figure. For defined benefit schemes, the loss is the pension that would have accrued but for the injury. For defined contribution schemes, the loss is the employer contributions that will not be made during the lost working period.",
      },
      {
        question:
          "Do I need an actuary or forensic accountant for pension loss?",
        answer:
          "For straightforward cases, a forensic accountant using the Ogden Tables is sufficient. For complex pension schemes (final salary, defined benefit, or where there are multiple scheme memberships), an actuary may be needed to provide a precise cash equivalent transfer value analysis.",
      },
    ],
    practiceAreaSlugs: ["personal-injury-quantum"],
    serviceIds: ["pension-loss"],
  },
  {
    slug: "fatal-accident-dependency",
    title: "Fatal Accident Dependency",
    h1: "Fatal Accident Dependency Damages Expert Witness | FAA 1976",
    metaTitle:
      "Fatal Accident Dependency Expert Witness | FAA 1976",
    metaDescription:
      "UK quantum experts for Fatal Accidents Act 1976 dependency claims  -  financial and services dependency, bereavement award, Ogden multipliers from date of death, and co-habitee claims.",
    paragraphs: [
      "Claims under the Fatal Accidents Act 1976 compensate dependants for the financial benefit they would have received from the deceased had the death not been caused by the wrong. A damages expert witness calculates financial dependency as the deceased's net income less personal expenditure  -  the proportion of earnings that would have been applied for the benefit of the household. Services dependency covers gratuitous care and domestic services the deceased provided, valued by reference to commercial replacement rates.",
      "The annual dependency figure is capitalised using the Ogden multiplier from the date of death, with adjustments for the dependant's own life expectancy, remarriage contingencies, and shared household economies where multiple dependants claim. The statutory bereavement award under section 1A FAA 1976 is fixed by Parliament and does not require expert quantification, but must be identified separately in the Schedule of Loss. Interest on past dependency and special damages follows established High Court practice.",
      "Dependants include spouses, civil partners, children, parents, and co-habitees who lived with the deceased as husband or wife for at least two years before death under section 1(3)(b). Expert evidence addresses the deceased's pre-death earnings trajectory, pension entitlements, and any future income the dependant would have received from the deceased's estate or employment benefits. Reports comply with CPR Part 35 and integrate with bereavement and funeral expense heads instructed by the legal team.",
    ],
    faqs: [
      {
        question:
          "How is dependency loss calculated under the Fatal Accidents Act 1976?",
        answer:
          "The dependency is established as the financial contribution the deceased would have made to the household  -  typically calculated as the deceased's net income less their own personal expenditure. The resulting annual dependency figure is then capitalised using the Ogden multiplier from the date of death.",
      },
      {
        question: "Can co-habitees claim under the Fatal Accidents Act?",
        answer:
          "Yes  -  under s1(3)(b) FAA 1976, a person who was living with the deceased as husband or wife (or as civil partners) for at least two years before the death can claim. The quantum expert calculates the financial dependency in the same way as a spouse's claim.",
      },
    ],
    practiceAreaSlugs: ["personal-injury-quantum"],
    serviceIds: ["pension-loss", "loss-of-earnings"],
  },
  {
    slug: "future-care-costs",
    title: "Future Care Costs",
    h1: "Future Care Costs Damages Expert Witness",
    metaTitle:
      "Future Care Costs Expert Witness | Clinical & Catastrophic Injury",
    metaDescription:
      "Damages experts capitalising future care, case management, and accommodation costs  -  George v Biggs accommodation, Ogden multipliers, PPO modelling, and Court of Protection deputy costs.",
    paragraphs: [
      "Future care costs form a central head of loss in catastrophic injury and clinical negligence claims where the claimant requires ongoing support, therapy, equipment, and case management. A care expert  -  typically an occupational therapist or specialist nurse  -  assesses the claimant's needs and produces annual costings. The quantum expert capitalises those annual figures using Ogden multipliers based on life expectancy and the prescribed discount rate, presenting both lump sum and periodical payment scenarios where appropriate.",
      "Accommodation claims have been transformed by George v Biggs [2023], in which the Court of Appeal confirmed that the Roberts v Johnstone formula no longer applies and claimants may recover the full capital cost of disability-adapted accommodation, subject to a deduction for the value of property they already own or could afford. Expert witnesses work with architects and property experts to quantify the additional capital and ongoing costs of suitable housing, integrating accommodation with care and equipment heads in the Schedule of Loss.",
      "Court of Protection and deputyship costs, therapies, respite care, and assistive technology are quantified as separate line items with appropriate indexation assumptions. Where the court considers a periodical payments order, the expert models annual care costs indexed to ASHE or another agreed index, comparing the present value of PPO streams against lump sum awards. All assumptions on life expectancy, escalation, and mortality are disclosed for joint expert discussion and trial.",
    ],
    faqs: [
      {
        question: "How are future care costs quantified in damages claims?",
        answer:
          "A care expert (typically an occupational therapist or specialist nurse) assesses the claimant's care needs and costings. The quantum expert then capitalises the annual care cost figure using the Ogden Tables  -  applying a multiplier based on the claimant's life expectancy and the prescribed discount rate.",
      },
      {
        question:
          "What changed following George v Biggs [2023] on accommodation costs?",
        answer:
          "The Court of Appeal in George v Biggs [2023] confirmed that the Roberts v Johnstone formula (which previously produced a nil award when the discount rate was negative) no longer applies. Claimants can now recover the full capital cost of disability-adapted accommodation, with a deduction for the value of the property they already own or could afford.",
      },
    ],
    practiceAreaSlugs: ["clinical-negligence"],
    serviceIds: ["future-care-costs"],
  },
  {
    slug: "clinical-negligence-quantum",
    title: "Clinical Negligence Quantum",
    h1: "Clinical Negligence Quantum Damages Expert Witness",
    metaTitle:
      "Clinical Negligence Quantum Expert Witness | Schedule of Loss",
    metaDescription:
      "Forensic accountants for clinical negligence quantum  -  PSLA context, past and future care, earnings loss, accommodation, PPO modelling, and CRU deductions in medico-legal claims.",
    paragraphs: [
      "Clinical negligence claims combine general damages for pain, suffering, and loss of amenity (PSLA)  -  assessed by the court against Judicial College Guidelines  -  with extensive special damages requiring expert quantification. A damages expert witness prepares the pecuniary Schedule of Loss covering past and future loss of earnings, care and case management, accommodation, therapies, equipment, transport, and Court of Protection costs. The expert coordinates with care, accommodation, and life expectancy experts to ensure consistent assumptions across all heads.",
      "Past special damages are supported by invoices, receipts, and records to trial; future losses are capitalised using Ogden Tables and the discount rate. Following George v Biggs [2023], accommodation is quantified on a full capital cost basis rather than under Roberts v Johnstone. Periodical payments orders may be appropriate for future care and earnings where the claimant's longevity and care needs create significant uncertainty  -  the quantum expert models lump sum and PPO alternatives for the court's comparison.",
      "Compensation Recovery Unit (CRU) deductions for NHS and benefits recoupment are identified in the Schedule so net recoverable damages are clear. Interest on past special damages and general damages follows Senior Courts Act 1981 practice. Expert reports address causation of financial loss as well as quantum, distinguishing losses flowing from the negligent treatment from pre-existing conditions or unrelated events, in compliance with CPR Part 35 duties.",
    ],
    faqs: [
      {
        question: "What heads of damage are recoverable in clinical negligence?",
        answer:
          "Clinical negligence damages include: general damages (PSLA  -  pain, suffering and loss of amenity); past special damages (care, treatment, equipment, earnings loss to trial); future special damages (care, earnings loss, accommodation, equipment, case management, Court of Protection); and interest on past losses. The quantum expert calculates and presents all pecuniary heads in a Schedule of Loss.",
      },
      {
        question: "What is a Schedule of Loss?",
        answer:
          "A Schedule of Loss (or Scott Schedule in the quantum context) sets out all financial heads of claim in a structured format  -  past losses with supporting evidence, future losses with multiplier calculations, and the total damages sought. The defendant prepares a Counter-Schedule. Both documents anchor the expert evidence and trial.",
      },
    ],
    practiceAreaSlugs: ["clinical-negligence"],
    serviceIds: ["future-care-costs"],
  },
  {
    slug: "commercial-contract-damages",
    title: "Commercial Contract Damages",
    h1: "Commercial Contract Breach Damages Expert Witness",
    metaTitle:
      "Commercial Contract Damages Expert Witness | Lost Profits & But-For",
    metaDescription:
      "UK damages experts for breach of contract claims  -  but-for lost profits, expectation vs reliance damages, Hadley v Baxendale remoteness, and mitigation analysis for commercial litigation.",
    paragraphs: [
      "Commercial contract disputes arise across supply agreements, service contracts, distribution arrangements, and bespoke B2B trading relationships. When a party fails to perform, the innocent party's remedy is damages measured by the financial loss suffered. A damages expert witness analyses the contract terms, trading records, and market context to quantify that loss in accordance with Robinson v Harman [1848], constructing a but-for model that projects the claimant's financial position had the contract been performed and compares it to actual results.",
      "The choice between expectation loss (lost profits) and reliance loss (wasted expenditure) is a critical evidential decision. Expectation damages place the claimant in the position they would have been in had the contract been performed; reliance damages recover expenditure incurred in anticipation of performance where profits cannot be proved or the claimant made a bad bargain. Every head must satisfy Hadley v Baxendale remoteness, and the expert addresses mitigation, causation, and the distinction between direct and consequential loss with transparent sensitivity analysis on margin, volume, and cost assumptions.",
      "Our commercial litigation damages hub at /practice-areas/commercial-damages covers the full range of commercial quantum services including lost profits, IP infringement, professional negligence, and shareholder disputes. Expert reports are prepared for the Commercial Court, arbitration, and expert determination proceedings under CPR Part 35, structured so each head of loss can be tested in cross-examination and joint expert meetings.",
    ],
    faqs: [
      {
        question:
          "How does a damages expert quantify commercial contract losses?",
        answer:
          "Using the but-for methodology  -  projecting what the claimant would have earned had the contract been performed and comparing it to the actual outcome. The expert must address remoteness (Hadley v Baxendale), mitigation, and causation  -  presenting the loss under each head separately with supporting financial analysis.",
      },
      {
        question:
          "Can general and special damages both be recovered in commercial cases?",
        answer:
          "In commercial cases, the distinction between general and special damages maps to direct and consequential loss. Direct loss (loss of the bargain) is the equivalent of general damages; consequential loss (third-party contract losses, lost profits on follow-on work) must pass the Hadley v Baxendale remoteness test.",
      },
    ],
    practiceAreaSlugs: ["commercial-damages"],
    serviceIds: ["commercial-loss-profits"],
    relatedLinks: [
      {
        href: "/practice-areas/commercial-damages",
        label: "Commercial Litigation Damages",
      },
    ],
  },
  {
    slug: "ip-infringement-damages",
    title: "IP Infringement Damages",
    h1: "IP Infringement Damages Expert Witness",
    metaTitle:
      "IP Infringement Damages Expert Witness | Lost Profits & Royalty",
    metaDescription:
      "Expert witnesses for patent, trade mark, and copyright damages  -  lost profits, reasonable royalty, account of profits, remedy election, and CDPA additional damages for solicitors.",
    paragraphs: [
      "Intellectual property infringement claims require precise quantification of compensatory damages and, where elected, an account of profits. A damages expert witness quantifies lost profits by analysing sales and margin diverted to the infringer or lost by the rights holder, addressing demand constraints, non-infringing alternatives, and apportionment of overhead. Reasonable royalty damages value the use of the IP through comparable licence transactions and hypothetical negotiation at the date infringement began.",
      "The claimant must elect between compensatory damages and an account of profits  -  remedies that measure different things and may produce materially different outcomes. The expert calculates both so the legal team can make an informed strategic election. Additional damages under section 97(2) Copyright, Designs and Patents Act 1988 may be available where infringement was flagrant, requiring separate analysis of aggravating factors alongside financial quantum.",
      "Trade mark passing off, patent invalidity co-defences, and cross-border licensing structures add complexity to apportionment and currency conversion. Reports are prepared for the High Court (Chancery Division), Intellectual Property Enterprise Court, and arbitration, with methodology that withstands scrutiny on comparable licences, profit margins, and the infringer's internal accounts where disclosed on disclosure.",
    ],
    faqs: [
      {
        question: "What is an account of profits in IP infringement cases?",
        answer:
          "An account of profits is an equitable remedy requiring the infringer to disgorge the profits made from the infringement  -  rather than compensating the claimant for their own loss. The claimant must elect between compensatory damages or an account of profits. The expert calculates both to inform the election.",
      },
      {
        question: "How is a reasonable royalty calculated in patent cases?",
        answer:
          "The expert analyses comparable licence transactions, the value of the patented technology to the infringer, and the hypothetical negotiation between licensor and licensee at the date infringement began  -  arriving at a royalty rate that both parties would have agreed under fair bargaining conditions.",
      },
    ],
    practiceAreaSlugs: ["commercial-damages"],
    serviceIds: ["ip-infringement-damages"],
  },
  {
    slug: "professional-negligence-damages",
    title: "Professional Negligence Damages",
    h1: "Professional Negligence Damages Expert Witness",
    metaTitle:
      "Professional Negligence Damages Expert Witness | SAAMCo & Loss of Chance",
    metaDescription:
      "Damages experts for solicitor, accountant, and financial adviser negligence  -  but-for counterfactuals, SAAMCo scope of duty, Allied Maples loss of chance, and causation attribution.",
    paragraphs: [
      "Professional negligence claims against solicitors, accountants, financial advisers, and other professionals require expert evidence on quantum as well as liability. A damages expert witness constructs a but-for counterfactual establishing what the claimant's financial position would have been had the professional performed the retainer competently, then compares it to the actual outcome. This analysis applies to failed transactions, negligent tax advice, defective litigation strategy, and valuation errors where the claimant alleges a better financial result but for the breach.",
      "The SAAMCo principle (South Australia Asset Management Corp v York Montague Ltd [1997] AC 191) limits recoverable loss to damages within the scope of the professional's duty  -  distinguishing information providers from transactional advisers and capping exposure where the professional's negligence was not the sole cause of loss. Expert witnesses identify which categories of loss fall within and outside scope before quantifying the remainder, addressing attribution between negligence, market movements, and the claimant's own decisions.",
      "Where outcomes depended on third-party conduct  -  judicial decisions, planning permission, or transaction completion  -  Allied Maples loss of chance principles require probability discounting of the full opportunity value. Reports set out each head separately with transparent assumptions, sensitivity analysis on key probabilities, and methodology capable of withstanding cross-examination in the Chancery Division and professional negligence lists.",
    ],
    faqs: professionalNegligenceDamagesFaqs,
    practiceAreaSlugs: ["commercial-damages"],
    serviceIds: ["professional-negligence-quantum"],
  },
  {
    slug: "employment-discrimination-loss",
    title: "Employment & Discrimination Loss",
    h1: "Employment & Discrimination Damages Expert Witness",
    metaTitle:
      "Employment Tribunal Damages Expert Witness | Loss of Earnings & Vento",
    metaDescription:
      "Quantum experts for Employment Tribunal claims  -  unfair dismissal loss of earnings, future loss, pension loss, whistleblowing, and financial heads in discrimination cases.",
    paragraphs: [
      "Employment Tribunal claims for unfair dismissal, discrimination, whistleblowing, and unlawful deduction from wages often require expert evidence on financial loss. A damages expert witness calculates immediate loss from dismissal to the hearing, projects future loss of earnings having regard to labour market conditions and the claimant's mitigation efforts, and quantifies pension loss using Ogden Tables methodology or actuarial evidence for complex schemes.",
      "The Tribunal applies Polkey reductions for chance that the dismissal would have occurred anyway, and contributory fault percentages where the claimant's conduct contributed to dismissal. Expert reports present gross and net figures, address alternative employment obtained or attempted, and model stepped reductions where the claimant is expected to secure comparable employment by a future date. Bonus, commission, LTIP, and benefits in kind are included where they formed part of remuneration.",
      "In discrimination claims, injury to feelings awards fall within Vento bands and are assessed by the Tribunal without expert evidence. The quantum expert confines their analysis to pecuniary heads  -  earnings, pension, and benefits loss  -  while distinguishing them from non-pecuniary awards. Reports comply with Tribunal directions and are prepared for exchange with the respondent's expert where joint or single expert directions are made.",
    ],
    faqs: [
      {
        question:
          "How are loss of earnings calculated in Employment Tribunal cases?",
        answer:
          "Employment Tribunal quantum experts calculate: immediate loss (from dismissal to tribunal); future loss (projected loss of future earnings given labour market conditions); and pension loss (Ogden Tables methodology or actuarial evidence for complex schemes). The Tribunal applies a Polkey reduction and contributory fault percentage as directed.",
      },
      {
        question: "What are Vento bands for discrimination awards?",
        answer:
          "Vento bands are the ranges of injury to feelings awards in discrimination cases  -  lower band (£1,100–£11,200), middle band (£11,200–£33,700), and upper band (£33,700–£56,200) as updated in 2025. The quantum expert addresses the financial heads of loss  -  the injury to feelings award is assessed separately by the Tribunal without expert evidence.",
      },
    ],
    practiceAreaSlugs: ["commercial-damages"],
    serviceIds: ["loss-of-earnings"],
  },
  {
    slug: "investment-treaty-damages",
    title: "Investment Treaty Damages",
    h1: "Investment Treaty Arbitration Damages Expert Witness",
    metaTitle:
      "Investment Treaty Damages Expert Witness | ICSID & Chorzów Factory",
    metaDescription:
      "Quantum economists and forensic accountants for ICSID and UNCITRAL investment treaty claims  -  Chorzów Factory full reparation, FMV, DCF, and fair and equitable treatment breach damages.",
    paragraphs: [
      "Investment treaty arbitration under ICSID, UNCITRAL, and institutional rules requires damages experts familiar with international law standards and tribunal practice. The full reparation principle from Chorzów Factory (PCIJ 1928) requires restoration of the investor to the position it would have been in absent the treaty breach  -  measured through fair market value for expropriation, discounted cash flow for going concerns, or lost profits where appropriate to the facts.",
      "Expropriation and indirect expropriation claims typically rely on FMV at the date of taking or date of award, with DCF supporting valuations where the investment had an established operating history. Fair and equitable treatment and umbrella clause breaches may give rise to lost profits damages quantified through but-for financial models and sensitivity analysis on growth, WACC, and terminal value. Tribunals scrutinise assumptions heavily, and experts must comply with IBA Rules on Evidence and tribunal-specific procedural orders.",
      "ICSID annulment, state counterclaims, and currency conversion add layers to quantum presentation. Experts prepare reports for hot-tubbing and witness conferencing, respond to tribunal-appointed expert directions, and address damages under English law, civil law, and international law sources as applicable to the substantive governing law of the dispute.",
    ],
    faqs: [
      {
        question:
          "What is the full reparation standard in investment treaty cases?",
        answer:
          "Under the Chorzów Factory principle (PCIJ 1928), the full reparation standard requires the respondent state to wipe out all consequences of the breach  -  restoring the investor to the position they would have been in absent the treaty violation. Expert witnesses calculate this using fair market value (for expropriation) or lost profits DCF (for regulatory breaches).",
      },
      {
        question: "When is DCF used in investment treaty arbitration?",
        answer:
          "DCF is the most commonly used method for quantifying investment treaty damages where the investment had an established operating history and reliable projections. Tribunals accept DCF where the cash flow assumptions are well-supported  -  but scrutinise growth rates, WACC, and terminal value assumptions heavily.",
      },
    ],
    practiceAreaSlugs: ["international-arbitration"],
    serviceIds: ["international-arbitration-quantum"],
  },
  {
    slug: "shareholder-dispute-damages",
    title: "Shareholder Dispute Damages",
    h1: "Shareholder Dispute Damages Expert Witness",
    metaTitle:
      "Shareholder Dispute Damages Expert Witness | S994 Unfair Prejudice",
    metaDescription:
      "Damages and valuation experts for S994 unfair prejudice petitions  -  fair value buy-outs, quasi-partnership principles, minority discount disapplication, and diversion of value claims.",
    paragraphs: [
      "Shareholder disputes under section 994 Companies Act 2006 frequently require expert evidence on fair value and financial loss flowing from unfairly prejudicial conduct. While the primary remedy is often a buy-out order at fair value rather than damages in the conventional sense, experts quantify the price at which the minority should be purchased out and any additional losses from diversion of business opportunity, excessive remuneration, or asset stripping.",
      "In quasi-partnership cases  -  where shareholders have legitimate expectations beyond strict legal rights  -  courts apply equitable principles and frequently disapply minority discounts, valuing the minority's interest on a pro-rata share of enterprise value. Valuation methodology follows the approach in Re BSB Holdings and subsequent authorities, with experts addressing maintainable earnings, normalised adjustments, and the appropriate valuation date.",
      "Derivative claims and breach of fiduciary duty may give rise to separate damages quantification for loss caused to the company. Expert witnesses distinguish between valuation for buy-out purposes and damages for diminution in value, preparing CPR Part 35 compliant reports for the Chancery Division and Business and Property Courts.",
    ],
    faqs: [
      {
        question:
          "What damages can a minority shareholder recover in an S994 petition?",
        answer:
          "In unfair prejudice petitions, the court typically orders the majority to buy out the minority at fair value  -  which is not a damages award per se but a valuation-based remedy. Where the unfair conduct has caused additional loss (e.g. diversion of business opportunity), the minority may also seek damages for the diminution in value caused by the breach.",
      },
      {
        question: "What is a quasi-partnership in shareholder disputes?",
        answer:
          "A quasi-partnership is a private company where the relationship between shareholders is akin to a partnership  -  built on personal trust and informal understandings beyond the strict legal documents. Courts in S994 cases apply equitable principles to quasi-partnerships, frequently disapplying minority discounts.",
      },
    ],
    practiceAreaSlugs: ["commercial-damages"],
    serviceIds: ["commercial-loss-profits", "expert-determination"],
  },
  {
    slug: "tax-dispute-quantum",
    title: "Tax Dispute Quantum",
    h1: "Tax Dispute Quantum Expert Witness",
    metaTitle:
      "Tax Dispute Quantum Expert Witness | First-tier Tribunal Evidence",
    metaDescription:
      "Independent valuation and quantum experts for tax tribunal appeals  -  HMRC disputes, IHT business property relief, CGT share valuations, and balance of probabilities expert evidence.",
    paragraphs: [
      "Tax disputes before the First-tier Tribunal (Tax Chamber) frequently turn on valuation of shares, business assets, or the quantum of income, gains, or allowances. A quantum expert provides independent analysis challenging HMRC's assessment  -  covering unquoted share valuations for capital gains tax, inheritance tax business property relief, employment-related securities, and penalty calculations based on the correct tax figure.",
      "Expert evidence must satisfy the civil standard of proof on the balance of probabilities, demonstrating that the expert's methodology is more probably correct than HMRC's position. Reports address valuation date, minority and marketability discounts where applicable, maintainable earnings bases, and comparable transactions. Experts may also quantify losses or allowances flowing from disputed transactions where the quantum of tax depends on underlying commercial figures.",
      "Coordination with legal teams on disclosure, witness statements, and hot-tubbing in complex cases ensures the tribunal receives clear, objective analysis. While valuation methodology overlaps with dedicated business valuation practice, the focus in tax tribunal proceedings is on the quantum figure driving the assessment and penalties, presented in a form the Tribunal can adopt or reject with reasons.",
    ],
    faqs: [
      {
        question: "How does a quantum expert assist in tax tribunal proceedings?",
        answer:
          "In tax disputes, a quantum expert provides an independent valuation or loss calculation that challenges HMRC's assessment. This may cover: the value of shares or business assets at a relevant date; the quantum of a loss or allowance; or the calculation of penalties based on the correct tax figure.",
      },
      {
        question:
          "What is the standard of proof in First-tier Tribunal tax appeals?",
        answer:
          "The civil standard  -  balance of probabilities  -  applies in tax tribunal proceedings. Expert witnesses must satisfy the tribunal that their valuation or quantum calculation is more probably correct than HMRC's position, based on sound methodology and supporting evidence.",
      },
    ],
    practiceAreaSlugs: ["commercial-damages"],
    serviceIds: ["commercial-loss-profits"],
  },
];

export const caseTypeSlugs = caseTypes.map((c) => c.slug);

export function getCaseType(slug: string): ContentPage | undefined {
  return caseTypes.find((c) => c.slug === slug);
}

