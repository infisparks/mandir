export interface QuestionOption {
  label: string;
  key: string;
}

export interface QualificationQuestion {
  num: number;
  question: string;
  field: string;
  options: QuestionOption[];
}

export interface CampaignConfig {
  id: string;
  title: string;
  subtitle: string;
  questions: QualificationQuestion[];
}

export const CAMPAIGNS: Record<string, CampaignConfig> = {
  meemstonex: {
    id: "meemstonex",
    title: "Meemstonex Custom Mandir Project",
    subtitle: "Tell Us About Your Sacred Architecture Vision",
    questions: [
      {
        num: 1,
        question: "What are you looking to create? *",
        field: "project_type",
        options: [
          { label: "Home Mandir / Pooja Room", key: "A" },
          { label: "Luxury Marble Interior", key: "B" },
          { label: "Mosque / Mimber / Mehrab", key: "C" },
          { label: "Fountain / Wall Panel / Inlay", key: "D" },
          { label: "Other Custom Marble Project", key: "E" },
        ],
      },
      {
        num: 2,
        question: "Approximate project budget *",
        field: "budget",
        options: [
          { label: "₹1–2 lakh", key: "A" },
          { label: "₹2–3 lakh", key: "B" },
          { label: "₹3–5 lakh", key: "C" },
          { label: "₹5 lakh+ (Grand Bespoke)", key: "D" },
          { label: "Not decided yet", key: "E" },
        ],
      },
      {
        num: 3,
        question: "When do you want it completed? *",
        field: "timeline",
        options: [
          { label: "Within 30 days", key: "A" },
          { label: "1–3 months", key: "B" },
          { label: "3–6 months", key: "C" },
          { label: "6+ months", key: "D" },
          { label: "Just exploring", key: "E" },
        ],
      },
      {
        num: 4,
        question: "Current stage of project *",
        field: "stage",
        options: [
          { label: "Planning", key: "A" },
          { label: "Design finalised", key: "B" },
          { label: "Construction underway", key: "C" },
          { label: "Interior work underway", key: "D" },
          { label: "Ready for installation", key: "E" },
        ],
      },
    ],
  },
  firstoptionagency: {
    id: "firstoptionagency",
    title: "First Option Agency",
    subtitle: "Let's Understand Your Business Before We Grow It",
    questions: [
      {
        num: 1,
        question: "What industry are you in? *",
        field: "industry",
        options: [
          { label: "Doctor / Clinic", key: "A" },
          { label: "Manufacturer / Distributor", key: "B" },
          { label: "IT / Tech / SaaS", key: "C" },
          { label: "Service Business", key: "D" },
          { label: "Other", key: "E" },
        ],
      },
      {
        num: 2,
        question: "What is your role in the business? *",
        field: "role",
        options: [
          { label: "Founder / Owner", key: "A" },
          { label: "Partner", key: "B" },
          { label: "Marketing Head", key: "C" },
          { label: "Team Member", key: "D" },
        ],
      },
      {
        num: 3,
        question: "What is your current monthly revenue? *",
        field: "revenue",
        options: [
          { label: "Below ₹5L", key: "A" },
          { label: "₹5L – ₹10L", key: "B" },
          { label: "₹10L – ₹25L", key: "C" },
          { label: "₹25L – ₹50L", key: "D" },
          { label: "₹50L+", key: "E" },
        ],
      },
      {
        num: 4,
        question: "Are you ready to invest in a proper marketing system if it makes financial sense? *",
        field: "investmentReady",
        options: [
          { label: "Yes", key: "A" },
          { label: "Maybe", key: "B" },
          { label: "Just exploring", key: "C" },
        ],
      },
    ],
  },
};

export const DEFAULT_CAMPAIGN_ID = "meemstonex";

export function getCampaignConfig(campaignId?: string | null): CampaignConfig {
  if (campaignId && CAMPAIGNS[campaignId]) {
    return CAMPAIGNS[campaignId];
  }
  return CAMPAIGNS[DEFAULT_CAMPAIGN_ID];
}
