import type { ServiceItem } from "./types";

export const services: ServiceItem[] = [
  {
    id: "loss-of-earnings",
    name: "Loss of Earnings Quantification",
    shortDescription:
      "Past and future loss of earnings in personal injury and employment claims using Ogden Tables.",
    description:
      "Our forensic accountants quantify past and future loss of earnings in personal injury, clinical negligence, and employment tribunal claims. Analysis covers net earnings, self-employed income, director remuneration, Smith v Manchester awards, and handicap on the open labour market  -  all capitalised using the Ogden Tables and prescribed discount rate.",
    methodology: [
      { step: "Document review", detail: "Tax returns, P60s, accounts, and employment records for 3–5 years pre-incident" },
      { step: "Maintainable earnings", detail: "Establish pre-incident net earnings baseline adjusted for tax and NI" },
      { step: "Future loss model", detail: "Apply multiplier/multiplicand using Ogden Tables and discount rate" },
      { step: "Schedule of Loss", detail: "Prepare structured Schedule with supporting calculations and assumptions" },
    ],
    caseTypeSlugs: ["loss-of-earnings-personal-injury", "employment-discrimination-loss"],
  },
  {
    id: "pension-loss",
    name: "Pension Loss Assessment",
    shortDescription:
      "Defined benefit and contribution pension loss using Ogden Tables H and actuarial evidence.",
    description:
      "Pension loss quantification for personal injury and fatal accident claims  -  covering defined benefit schemes, defined contribution employer contributions, and state pension loss. Complex schemes may require actuarial CETV analysis alongside forensic accounting.",
    methodology: [
      { step: "Scheme analysis", detail: "Review pension statements, scheme rules, and membership history" },
      { step: "Loss quantification", detail: "Calculate annual pension loss using Ogden Tables 35–38" },
      { step: "Actuarial liaison", detail: "Coordinate with actuary for complex final salary schemes" },
      { step: "Report", detail: "Expert report compliant with CPR Part 35 duties" },
    ],
    caseTypeSlugs: ["pension-loss-calculation", "fatal-accident-dependency"],
  },
  {
    id: "future-care-costs",
    name: "Future Care Cost Quantification",
    shortDescription:
      "Capitalisation of care, case management, and accommodation costs post George v Biggs.",
    description:
      "Quantum experts capitalise annual care costs assessed by care experts, applying Ogden multipliers. Following George v Biggs [2023], full accommodation costs are recoverable. We model lump sum and periodical payment scenarios for clinical negligence and catastrophic injury claims.",
    methodology: [
      { step: "Care expert input", detail: "Review occupational therapist or nurse care assessments and costings" },
      { step: "Capitalisation", detail: "Apply Ogden multiplier based on life expectancy and discount rate" },
      { step: "Accommodation", detail: "Calculate full capital cost less existing property deduction" },
      { step: "PPO modelling", detail: "Compare lump sum vs periodical payments indexed to ASHE" },
    ],
    caseTypeSlugs: ["future-care-costs", "clinical-negligence-quantum"],
  },
  {
    id: "commercial-loss-profits",
    name: "Commercial Loss & Lost Profits",
    shortDescription:
      "But-for analysis for breach of contract, shareholder disputes, and business interruption.",
    description:
      "Commercial damages experts construct counterfactual financial models to quantify lost profits, wasted expenditure, and consequential losses. Analysis addresses Hadley v Baxendale remoteness, mitigation, and causation for High Court commercial disputes and arbitration.",
    methodology: [
      { step: "Counterfactual model", detail: "Project financial position but for the breach" },
      { step: "Loss quantification", detail: "Compare projected vs actual outcomes for each head of loss" },
      { step: "Remoteness", detail: "Address Hadley v Baxendale for consequential losses" },
      { step: "Expert report", detail: "Structured report with transparent assumptions for cross-examination" },
    ],
    caseTypeSlugs: ["commercial-contract-damages", "shareholder-dispute-damages"],
  },
  {
    id: "ip-infringement-damages",
    name: "IP Infringement Damages",
    shortDescription:
      "Lost profits, reasonable royalty, and account of profits analysis for IP disputes.",
    description:
      "Expert witnesses quantify compensatory damages and account of profits in patent, trade mark, and copyright infringement cases. Analysis supports the claimant's election between remedies and addresses additional damages under CDPA s97(2).",
    methodology: [
      { step: "Lost profits", detail: "Quantify sales and margin lost due to infringement" },
      { step: "Reasonable royalty", detail: "Analyse comparable licences and hypothetical negotiation" },
      { step: "Account of profits", detail: "Calculate infringer's profits for election purposes" },
      { step: "Report", detail: "Present all remedies to inform strategic election" },
    ],
    caseTypeSlugs: ["ip-infringement-damages"],
  },
  {
    id: "professional-negligence-quantum",
    name: "Professional Negligence Quantum",
    shortDescription:
      "But-for counterfactuals, SAAMCo scope, and loss of chance for adviser negligence claims.",
    description:
      "Damages quantification for solicitor, accountant, and financial adviser negligence  -  applying but-for methodology, SAAMCo scope of duty limits, and Allied Maples loss of chance principles.",
    methodology: [
      { step: "Scope of duty", detail: "Identify losses within SAAMCo scope of the retainer" },
      { step: "Counterfactual", detail: "Model position had professional performed competently" },
      { step: "Loss of chance", detail: "Apply probability discounting for contingent outcomes" },
      { step: "Causation", detail: "Address attribution between negligence and other factors" },
    ],
    caseTypeSlugs: ["professional-negligence-damages"],
  },
  {
    id: "international-arbitration-quantum",
    name: "International Arbitration Quantum",
    shortDescription:
      "ICC, LCIA, ICSID quantum experts for investment treaty and cross-border disputes.",
    description:
      "Quantum economists and forensic accountants for international arbitration  -  applying Chorzów Factory full reparation, DCF methodology, fair market value, and IBA Rules on Evidence standards across English law and civil law systems.",
    methodology: [
      { step: "Applicable law", detail: "Identify substantive damages law governing the dispute" },
      { step: "Valuation method", detail: "Select FMV, DCF, or lost profits approach" },
      { step: "Model construction", detail: "Build supported financial projections with sensitivity analysis" },
      { step: "Tribunal evidence", detail: "Expert report and hot-tubbing preparation" },
    ],
    caseTypeSlugs: ["investment-treaty-damages"],
  },
  {
    id: "expert-determination",
    name: "Expert Determination & ADR",
    shortDescription:
      "Independent quantum determination for contractual disputes outside court.",
    description:
      "Forensic accountants appointed as expert determiners to resolve quantum disputes under contractual expert determination clauses  -  providing binding or non-binding assessments of damages without full litigation.",
    methodology: [
      { step: "Terms review", detail: "Analyse expert determination clause and procedural rules" },
      { step: "Submissions", detail: "Review party submissions and supporting financial evidence" },
      { step: "Determination", detail: "Independent quantum assessment with reasoned decision" },
      { step: "Award", detail: "Deliver determination within contractual timeframe" },
    ],
    caseTypeSlugs: ["commercial-contract-damages", "shareholder-dispute-damages"],
  },
];

export function getService(id: string): ServiceItem | undefined {
  return services.find((s) => s.id === id);
}
