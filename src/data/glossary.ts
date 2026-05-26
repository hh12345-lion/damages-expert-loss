import type { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Account of Profits",
    slug: "account-of-profits",
    definition:
      "An equitable remedy in IP infringement requiring the infringer to disgorge profits made from the wrongful use of intellectual property, rather than compensating the claimant for their own lost profits. The claimant must elect between compensatory damages and an account of profits before final judgment. A damages expert calculates both remedies to inform the strategic election, analysing the infringer's revenues, attributable costs, and profit margin on infringing sales.",
  },
  {
    term: "Aggravated Damages",
    slug: "aggravated-damages",
    definition:
      "Additional damages awarded in tort where the defendant's conduct in committing the wrong or defending the claim was particularly high-handed, insulting, or oppressive. Aggravated damages compensate for injury to the claimant's feelings caused by the manner of the wrong, distinct from exemplary damages which punish the defendant. Expert evidence is rarely required for the aggravated element itself, though financial context may support the overall claim presentation.",
  },
  {
    term: "Allied Maples Principle",
    slug: "allied-maples-principle",
    definition:
      "From Allied Maples Group Ltd v Simmons & Simmons [1995] 1 WLR 1602: where a defendant's negligence deprives the claimant of the chance to obtain a benefit from a third party, damages reflect the value of the chance lost — expressed as a percentage probability multiplied by the full benefit. Central to solicitor negligence, professional negligence, and other claims where the outcome depended on a third party's decision. The expert must support the probability assessment with evidence, not speculation.",
  },
  {
    term: "But-For Analysis",
    slug: "but-for-analysis",
    definition:
      "The counterfactual methodology comparing the claimant's actual financial position after breach with the position they would have been in had the wrong not occurred. The difference, after deducting avoided variable costs and crediting mitigation, represents lost profits or the financial impact of the breach. The standard approach to expectation damages quantification in commercial contract, professional negligence, and IP disputes.",
    link: {
      href: "/practice-areas/commercial-damages",
      label: "Commercial Damages Practice Area",
    },
  },
  {
    term: "Chorzów Factory Standard",
    slug: "chorzow-factory-standard",
    definition:
      "The international law principle from Factory at Chorzów (Germany v Poland) (1928) PCIJ Ser A No 17, requiring full reparation for an internationally wrongful act — wiping out all consequences of the breach and restoring the injured party to the position it would have been in had the breach not occurred. In investment treaty arbitration, experts quantify full reparation using fair market value for expropriation or DCF/lost profits for regulatory breaches.",
    link: {
      href: "/practice-areas/international-arbitration",
      label: "International Arbitration Practice Area",
    },
  },
  {
    term: "Civil Liability Act 2018",
    slug: "civil-liability-act-2018",
    definition:
      "UK legislation that reformed the personal injury discount rate framework, establishing a panel to advise the Lord Chancellor and setting the prescribed discount rate for future pecuniary loss. The Act amended the Damages Act 1996 and led to the current discount rate of -0.25% for future loss of earnings, care costs, and pension loss capitalised via Ogden Tables. It materially increased lump sum awards for future pecuniary losses in PI and clinical negligence claims.",
  },
  {
    term: "Compensatory Damages",
    slug: "compensatory-damages",
    definition:
      "Damages awarded to compensate the claimant for loss suffered, aiming to restore them to the position they would have been in absent the wrong — per Livingstone v Rawyards Coal Co (1880) in tort and Robinson v Harman [1848] in contract. Compensatory damages encompass expectation loss (lost profits), reliance loss (wasted expenditure), and pecuniary special damages in personal injury. They are distinct from restitutionary, aggravated, and exemplary damages.",
  },
  {
    term: "CPR Part 35",
    slug: "cpr-part-35",
    definition:
      "Civil Procedure Rules Part 35 and Practice Direction 35 govern expert evidence in civil proceedings in England and Wales. Experts owe an overriding duty to the court, must provide independent objective opinions within their expertise, and must comply with specific report format requirements including statement of instructions, separation of fact and opinion, and range of opinion where appropriate. Non-compliance can result in exclusion of evidence or adverse costs orders.",
    link: {
      href: "/qualifications",
      label: "Expert Qualifications & CPR Part 35",
    },
  },
  {
    term: "Discount Rate",
    slug: "discount-rate",
    definition:
      "The rate applied to reduce future financial losses to present value when awarding a lump sum, reflecting the assumption that the claimant will invest the award and achieve a real return. For personal injury claims, the Lord Chancellor sets the prescribed rate under the Damages Act 1996 — currently -0.25% for future pecuniary loss following the Civil Liability Act 2018. The discount rate is applied through Ogden Table multipliers to all future loss heads.",
    link: {
      href: "/types-of-damages",
      label: "Types of Damages — Discount Rate",
    },
  },
  {
    term: "Exemplary Damages",
    slug: "exemplary-damages",
    definition:
      "Punitive damages awarded to punish the defendant and deter similar conduct, available only in limited categories established in Rookes v Barnard [1964]: oppressive government action, calculated profit-making wrongdoing, and where statute authorises exemplary damages. Exemplary damages are not available for breach of contract. A quantum expert does not quantify exemplary damages but may provide financial context where punitive conduct involved profit-making wrongdoing.",
  },
  {
    term: "Fatal Accidents Act 1976",
    slug: "fatal-accidents-act-1976",
    definition:
      "UK legislation enabling dependants of a deceased person to claim damages for financial dependency and bereavement where death was caused by wrongful act. Section 1(1) limits claims to specified dependants; s1A provides a fixed bereavement award. Quantum experts calculate financial dependency as the deceased's net income less personal expenditure, capitalised using Ogden multipliers from the date of death. Co-habitees meeting the two-year requirement under s1(3)(b) may claim.",
  },
  {
    term: "FPR Part 25",
    slug: "fpr-part-25",
    definition:
      "Family Procedure Rules Part 25 governs expert evidence in family proceedings, including financial remedy cases where damages or financial loss quantification may arise. The expert's duties mirror CPR Part 35 — independence, overriding duty to the court, and compliant report format. Court permission is required for expert evidence in family proceedings, and the expert's fees may need to be approved in advance.",
    link: {
      href: "/qualifications",
      label: "Expert Qualifications & FPR Part 25",
    },
  },
  {
    term: "Future Loss of Earnings",
    slug: "future-loss-of-earnings",
    definition:
      "The capitalised value of earnings the claimant would have received in the future but for their injury or wrongful dismissal, calculated using the multiplier/multiplicand method. The multiplicand is the annual net loss of earnings; the multiplier is derived from the Ogden Tables at the prescribed discount rate, adjusted for retirement age, mortality, and contingencies. Future loss of earnings is a special damage in personal injury and a pecuniary head in Employment Tribunal claims.",
  },
  {
    term: "General Damages",
    slug: "general-damages",
    definition:
      "Non-quantifiable compensatory damages assessed by the court rather than calculated by an expert — including PSLA (pain, suffering and loss of amenity), loss of amenity, and Smith v Manchester awards for handicap on the labour market. In commercial litigation, general damages loosely maps to direct loss of the bargain. General damages are distinct from special damages, which require precise financial quantification by a damages expert witness.",
    link: {
      href: "/types-of-damages",
      label: "Types of Damages — General vs Special",
    },
  },
  {
    term: "George v Biggs [2023]",
    slug: "george-v-biggs-2023",
    definition:
      "Court of Appeal decision confirming that the Roberts v Johnstone formula for accommodation costs in personal injury claims no longer applies following the negative discount rate. Claimants may recover the full capital cost of disability-adapted accommodation, subject to a deduction for the value of property they already own or could reasonably afford. Quantum experts must model accommodation on this basis in clinical negligence and catastrophic injury claims.",
  },
  {
    term: "Hadley v Baxendale [1854]",
    slug: "hadley-v-baxendale-1854",
    definition:
      "Foundational authority on remoteness of damages for breach of contract. The two-limb rule limits recovery to: (1) losses arising naturally from the breach in the ordinary course of things; and (2) losses within the reasonable contemplation of both parties at contracting as the probable result of breach. Expert witnesses must address remoteness for each head of consequential loss and structure reports to support the applicable limb.",
    link: {
      href: "/guides/commercial-damages-but-for-guide",
      label: "Commercial Damages & But-For Guide",
    },
  },
  {
    term: "Hot-Tubbing (Witness Conferencing)",
    slug: "hot-tubbing-witness-conferencing",
    definition:
      "A procedure in international arbitration and some civil proceedings where opposing experts give evidence concurrently before the tribunal or court, enabling direct dialogue, clarification, and narrowing of issues. Also called witness conferencing under IBA Rules on Evidence. Common in ICC, LCIA, and ICSID proceedings, hot-tubbing requires experts to defend assumptions in real time and respond to the tribunal's questions.",
  },
  {
    term: "IBA Rules on Evidence",
    slug: "iba-rules-on-evidence",
    definition:
      "The IBA Rules on the Taking of Evidence in International Arbitration (2020) provide a widely adopted framework for document production, witness evidence, and expert reports in cross-border arbitration. Article 5 governs party-appointed experts; Article 6 allows tribunal-appointed experts. The Rules emphasise expert independence, written reports, and the opportunity for examination and witness conferencing at the hearing.",
  },
  {
    term: "The Ikarian Reefer Duties",
    slug: "ikarian-reefer-duties",
    definition:
      "From National Justice Compania Naviera SA v Prudential Assurance Co Ltd (The Ikarian Reefer) [1993] 2 Lloyd's Rep 68: the expert's primary duty is to the court or tribunal, not the instructing party. The expert must provide independent, objective assistance, consider all material facts including those unfavourable to the instructing party, and clearly distinguish fact from opinion. These duties apply equally under CPR Part 35 and in international arbitration.",
  },
  {
    term: "Investment Treaty Arbitration",
    slug: "investment-treaty-arbitration",
    definition:
      "Arbitration between an investor and a host state under bilateral investment treaties or multilateral instruments such as the Energy Charter Treaty, typically before ICSID or under UNCITRAL rules. Damages quantification applies the Chorzów Factory full reparation standard, using fair market value for expropriation and DCF or lost profits for other treaty breaches. Quantum economists and forensic accountants provide tribunal-ready expert reports with sensitivity analysis.",
  },
  {
    term: "Judicial College Guidelines (JCG)",
    slug: "judicial-college-guidelines-jcg",
    definition:
      "Published guidelines assisting courts in assessing general damages for personal injury — including brackets for PSLA by injury type and severity. The Guidelines are updated periodically and are persuasive rather than binding. They do not cover special damages, which require expert quantification. Solicitors use the JCG to value the general damages element while instructing a quantum expert for pecuniary heads.",
  },
  {
    term: "Loss of Amenity",
    slug: "loss-of-amenity",
    definition:
      "The inability to enjoy normal life activities — hobbies, social life, physical activities — as a result of injury. Loss of amenity forms part of the PSLA general damages award assessed by the court using Judicial College Guidelines, not quantified by a damages expert witness. It is a non-pecuniary head distinct from financial special damages.",
  },
  {
    term: "Loss of Chance",
    slug: "loss-of-chance",
    definition:
      "Damages for the loss of an opportunity where the outcome depended on a third party's actions or uncertain future events. Quantified as a percentage probability of success multiplied by the value of the benefit, following Allied Maples. Common in professional negligence claims. The expert must support the probability assessment with evidence; speculative percentages will not survive scrutiny.",
  },
  {
    term: "Multiplier/Multiplicand",
    slug: "multiplier-multiplicand",
    definition:
      "The standard method for capitalising future financial losses in UK personal injury claims. The multiplicand is the annual net loss (earnings, care costs, or pension); the multiplier is derived from the Ogden Tables based on life expectancy, age, gender, and discount rate. The product is the lump sum present value of future loss. The formula is: lump sum = multiplicand × multiplier.",
    link: {
      href: "/case-types/loss-of-earnings-personal-injury",
      label: "Loss of Earnings Case Type",
    },
  },
  {
    term: "Nominal Damages",
    slug: "nominal-damages",
    definition:
      "A token sum awarded where a breach of contract or tort is proved but no substantial loss has been suffered. Nominal damages acknowledge the legal right infringed without compensating significant financial harm. No expert evidence is typically required, though the claimant may still need to prove breach.",
  },
  {
    term: "Ogden Tables",
    slug: "ogden-tables",
    definition:
      "Actuarial tables published by the Government Actuary's Department used to calculate multipliers for capitalising future financial losses in personal injury, clinical negligence, and fatal accident claims. Tables 1–8 cover loss of earnings; Tables 35–38 cover loss of pension rights. Multipliers reflect mortality, retirement age, and the prescribed discount rate set by the Lord Chancellor under the Damages Act 1996.",
    link: {
      href: "/case-types/loss-of-earnings-personal-injury",
      label: "Loss of Earnings & Ogden Tables",
    },
  },
  {
    term: "Party-Appointed Expert (PAE)",
    slug: "party-appointed-expert-pae",
    definition:
      "An expert witness instructed by one party to provide an independent opinion on quantum, as opposed to a Single Joint Expert appointed jointly or by the court. Each party may instruct their own expert under CPR Part 35, followed by a joint experts' meeting and joint statement identifying agreed and disputed issues. PAE appointment is standard in high-value commercial and clinical negligence disputes.",
  },
  {
    term: "Pecuniary Loss",
    slug: "pecuniary-loss",
    definition:
      "Financial loss measurable in monetary terms — including past and future loss of earnings, care costs, pension loss, medical expenses, and commercial lost profits. Pecuniary losses are typically special damages in personal injury and are quantified by a forensic accountant or actuary. They are distinct from non-pecuniary losses such as pain and suffering, which are general damages assessed by the court.",
  },
  {
    term: "Periodical Payments Order (PPO)",
    slug: "periodical-payments-order-ppo",
    definition:
      "A court order under the Damages Act 1996 replacing a lump sum for future losses with annual payments indexed to ASHE or another appropriate index. PPOs provide certainty that future care and earnings-related needs will be met regardless of investment performance. Quantum experts model both lump sum and PPO scenarios so the court can compare them in clinical negligence and catastrophic injury claims.",
    link: {
      href: "/case-types/clinical-negligence-quantum",
      label: "Clinical Negligence Quantum",
    },
  },
  {
    term: "PSLA (Pain, Suffering & Loss of Amenity)",
    slug: "psla-pain-suffering-loss-of-amenity",
    definition:
      "General damages compensating the claimant for physical pain, psychological suffering, and loss of enjoyment of life resulting from injury. PSLA is assessed by the court using Judicial College Guidelines, not quantified by a damages expert witness. It is the primary non-pecuniary head in personal injury and clinical negligence claims, distinct from pecuniary special damages.",
    link: {
      href: "/practice-areas/personal-injury-quantum",
      label: "Personal Injury Quantum Practice Area",
    },
  },
  {
    term: "Reasonable Royalty",
    slug: "reasonable-royalty",
    definition:
      "A measure of IP infringement damages based on the royalty rate that would have been agreed in a hypothetical negotiation between a willing licensor and licensee at the date infringement began. The expert analyses comparable licence transactions, the value of the technology to the infringer, and industry licensing practices to arrive at a supported royalty rate applied to infringing sales or use.",
  },
  {
    term: "Restitutionary Damages",
    slug: "restitutionary-damages",
    definition:
      "Damages or remedies aimed at reversing unjust enrichment or disgorging wrongful gain, rather than compensating the claimant's loss. Includes account of profits in IP cases and remedies based on the defendant's gain. Distinct from compensatory damages which focus on the claimant's loss. The expert calculates the defendant's profit or enrichment for election and comparison purposes.",
  },
  {
    term: "SAAMCo Principle",
    slug: "saamco-principle",
    definition:
      "From South Australia Asset Management Corp v York Montague Ltd [1996] AC 191: a professional adviser is liable only for losses within the scope of their duty — the losses for which their advice was responsible, not all losses flowing from the transaction. In professional negligence quantum, the expert must identify which losses fall within SAAMCo scope before applying but-for analysis, preventing over-quantification of irrecoverable heads.",
  },
  {
    term: "Schedule of Loss",
    slug: "schedule-of-loss",
    definition:
      "A structured document setting out all financial heads of claim in personal injury, clinical negligence, and employment claims — past losses with supporting evidence, future losses with Ogden multiplier calculations, interest, and total damages sought. The defendant prepares a Counter-Schedule. The quantum expert's report underpins the Schedule and both documents anchor expert evidence and trial preparation.",
    link: {
      href: "/guides/schedule-of-loss-expert-evidence",
      label: "Schedule of Loss Expert Evidence Guide",
    },
  },
  {
    term: "Single Joint Expert (SJE)",
    slug: "single-joint-expert-sje",
    definition:
      "An expert appointed jointly by the parties or directed by the court under CPR 35.7 to provide a single independent opinion on quantum. SJE appointment reduces costs and narrows issues, common in lower-value PI claims. Both parties may ask written questions under CPR 35.6. The SJE owes the same overriding duty to the court as a party-appointed expert.",
    link: {
      href: "/guides/single-joint-expert-damages",
      label: "Single Joint Expert Guide",
    },
  },
  {
    term: "Smith v Manchester Award",
    slug: "smith-v-manchester-award",
    definition:
      "General damages for residual handicap on the open labour market where the claimant can work but at a reduced level due to injury — following Smith v Manchester Corp (1974). Typically quantified as a lump sum of up to two years' net earnings, reflecting the disadvantage in competing for employment. Distinct from future loss of earnings where the claimant cannot work at all or for a defined period.",
  },
  {
    term: "Special Damages",
    slug: "special-damages",
    definition:
      "Quantifiable financial losses proved by evidence — past loss of earnings, care costs, medical expenses, and future losses capitalised via Ogden Tables. Special damages are distinguished from general damages (PSLA, loss of amenity) which are assessed by the court. A damages expert witness quantifies all pecuniary special damages in the Schedule of Loss.",
    link: {
      href: "/types-of-damages",
      label: "Types of Damages — General vs Special",
    },
  },
  {
    term: "Vento Bands",
    slug: "vento-bands",
    definition:
      "The ranges for injury to feelings awards in Employment Tribunal discrimination claims, established in Vento v Chief Constable of West Yorkshire Police [2002] and updated periodically. As of 2025, the lower band is approximately £1,100–£11,200, the middle band £11,200–£33,700, and the upper band £33,700–£56,200. The quantum expert addresses financial heads of loss; injury to feelings is assessed by the Tribunal without expert evidence.",
    link: {
      href: "/case-types/employment-discrimination-loss",
      label: "Employment Discrimination Loss",
    },
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
