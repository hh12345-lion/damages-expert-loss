import type { ExpertProfile } from "./types";

export const experts: ExpertProfile[] = [
  {
    name: "Helen Cartwright",
    jobTitle: "Forensic Accountant — PI & Commercial Quantum",
    description:
      "Helen is a Fellow of the Institute of Chartered Accountants in England and Wales (FCA) with over 20 years of experience quantifying damages across personal injury, clinical negligence, and commercial litigation. She prepares Schedules of Loss and CPR Part 35 compliant expert reports covering past and future loss of earnings, pension loss, Smith v Manchester awards, and handicap on the open labour market using Ogden Tables methodology. In commercial disputes, Helen applies but-for counterfactual analysis to quantify lost profits, wasted expenditure, and consequential losses, addressing Hadley v Baxendale remoteness and mitigation. She holds APIL First Tier accreditation and is a Fellow of the Expert Witness Institute (FEWI), with experience in the High Court, County Court, and Employment Tribunal.",
    credentials: [
      "FCA (Fellow, ICAEW)",
      "APIL First Tier Accredited",
      "Fellow, Expert Witness Institute (FEWI)",
      "CPR Part 35 expert witness",
    ],
    specialisms: [
      "Loss of earnings quantification",
      "Schedule of Loss preparation",
      "Ogden Tables & discount rate",
      "Commercial lost profits & but-for analysis",
      "Clinical negligence quantum",
      "Employment Tribunal loss of earnings",
    ],
  },
  {
    name: "Richard Pemberton",
    jobTitle: "Actuary — Pension Loss & Life Expectancy",
    description:
      "Richard is a Fellow of the Institute and Faculty of Actuaries (FIA) specialising in pension loss quantification, life expectancy analysis, and periodical payments order modelling for catastrophic injury and clinical negligence claims. He provides cash equivalent transfer value analysis for complex defined benefit schemes, coordinates with forensic accountants on Ogden Tables 35–38 pension loss calculations, and models lump sum versus PPO scenarios indexed to ASHE. Richard also advises on fatal accident dependency claims under the Fatal Accidents Act 1976, capitalising financial dependency using Ogden multipliers from the date of death. His reports support High Court and Court of Protection proceedings where long-term financial security of the claimant is critical.",
    credentials: [
      "FIA (Fellow, Institute and Faculty of Actuaries)",
      "PPO & ASHE indexation modelling",
      "Defined benefit & CETV analysis",
      "Fatal accident dependency quantification",
    ],
    specialisms: [
      "Defined benefit pension loss",
      "Defined contribution scheme loss",
      "Periodical payments orders (PPO)",
      "Life expectancy & mortality tables",
      "State pension loss",
      "Fatal accident dependency (FAA 1976)",
    ],
  },
  {
    name: "Dr Amara Okafor",
    jobTitle: "Economist — International Arbitration Quantum",
    description:
      "Dr Okafor holds a PhD in Economics and has 14 years of experience quantifying damages in ICC, LCIA, ICSID, and UNCITRAL arbitrations. She applies the Chorzów Factory full reparation standard in investment treaty disputes, constructing DCF models, fair market value analyses, and lost profits quantification under English law and civil law systems. Dr Okafor has extensive experience with the IBA Rules on Evidence, including preparation for witness conferencing (hot-tubbing) and tribunal-appointed expert proceedings. Her reports include rigorous sensitivity analysis on growth rates, WACC, and terminal value assumptions, and she has acted in expropriation, fair and equitable treatment, and cross-border commercial arbitration across energy, infrastructure, and financial services sectors.",
    credentials: [
      "PhD Economics",
      "IBA Rules on Evidence specialist",
      "ICC, LCIA & ICSID arbitration experience",
      "Investment treaty & commercial quantum",
    ],
    specialisms: [
      "Investment treaty damages (ICSID/UNCITRAL)",
      "DCF & fair market value valuation",
      "Chorzów Factory full reparation",
      "Cross-border commercial arbitration",
      "Lost profits in international disputes",
      "Witness conferencing preparation",
    ],
  },
];
