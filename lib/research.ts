export type ResearchCategory =
  | "Computer Science"
  | "Data Analytics"
  | "Business & Management"
  | "Health Sciences"
  | "Social Sciences"
  | "Education"
  | "Engineering & Science"
  | "Mathematics & Statistics"
  | "Research Methods"
  | "Research Proposals"
  | "Dissertations & Theses"
  | "Datasets"
  | "Programming Resources"
  | "Templates";

export type ResearchLevel =
  | "High School"
  | "Undergraduate"
  | "Postgraduate"
  | "Master's"
  | "Doctoral"
  | "Professional";

export type ResearchAccess =
  | "Free"
  | "Premium"
  | "Coming Soon";

export type ResearchResource = {
  id: string;

  title: string;

  category: ResearchCategory;

  type: string;

  level: ResearchLevel;

  description: string;

  tags: string[];

  format: string;

  access: ResearchAccess;

  basePrice?: number;

  baseCurrency: "USD";

  requestSimilar: boolean;

  preview?: string;
};

export const researchResources: ResearchResource[] = [

  /* =====================================================
     COMPUTER SCIENCE
  ===================================================== */

  {
    id: "IT-CS-001",

    title: "Law Dynamics and Computer Forensics",

    category: "Computer Science",

    type: "Research Paper",

    level: "Postgraduate",

    description:
      "An academic research paper focused on computer forensics, cybercrime investigation, digital evidence, and digital investigation.",

    tags: [
      "Computer Forensics",
      "Cybercrime",
      "Digital Evidence",
      "Digital Investigation",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 19,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This resource examines computer forensics and its relationship with digital investigation, cybercrime, and the collection and analysis of digital evidence.",
  },


  /* =====================================================
     BUSINESS & MANAGEMENT
  ===================================================== */

  {
    id: "IT-BM-001",

    title: "Financial Management Decision Making",

    category: "Business & Management",

    type: "Financial Management Report",

    level: "Postgraduate",

    description:
      "An academic analysis covering financial management decision-making, financial performance, governance, corporate responsibility, and strategic considerations.",

    tags: [
      "Financial Management",
      "Financial Analysis",
      "Corporate Governance",
      "Strategic Management",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 19,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This resource explores financial management decision-making and the role of financial analysis, governance, corporate responsibility, and strategic considerations in organizational performance.",
  },


  {
    id: "IT-BM-002",

    title: "Apple Inc. 2024 – Financial Statement Analysis",

    category: "Business & Management",

    type: "Financial Analysis",

    level: "Postgraduate",

    description:
      "A financial statement analysis examining Apple Inc.'s financial performance, financial position, and key financial indicators.",

    tags: [
      "Financial Statement Analysis",
      "Apple Inc.",
      "Financial Performance",
      "Financial Ratios",
      "Business Analysis",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 19,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This resource provides a structured financial analysis of Apple Inc., examining financial statements and indicators used to evaluate corporate financial performance.",
  },


  {
    id: "IT-BM-003",

    title:
      "Evaluating the Impact of Employee Wellness Programs on Mental Health, Organizational Support, and Return on Investment in Contemporary HR Practices",

    category: "Business & Management",

    type: "Research Paper",

    level: "Postgraduate",

    description:
      "A research study examining employee wellness programs, organizational support, mental health considerations, and return on investment within contemporary human resource practices.",

    tags: [
      "Human Resources",
      "Employee Wellness",
      "Organizational Support",
      "Mental Health",
      "Return on Investment",
      "HR Practices",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 19,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This research examines employee wellness programs and their relationship with organizational support, employee wellbeing, and organizational return on investment.",
  },


  /* =====================================================
     HEALTH SCIENCES
  ===================================================== */

  {
    id: "IT-HS-001",

    title:
      "The Poor Health Care of the Elderly Population in Puerto Rico",

    category: "Health Sciences",

    type: "Research Paper",

    level: "Postgraduate",

    description:
      "A research paper examining healthcare challenges affecting the elderly population in Puerto Rico, including healthcare access, aging, workforce shortages, and health disparities.",

    tags: [
      "Public Health",
      "Geriatric Health",
      "Healthcare Access",
      "Health Disparities",
      "Aging",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 19,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This research examines healthcare challenges affecting older adults in Puerto Rico, including healthcare access, aging, workforce shortages, and disparities in health services.",
  },


  {
    id: "IT-HS-002",

    title: "Electronic Health Records (EHR) Implementation",

    category: "Health Sciences",

    type: "Research Paper",

    level: "Postgraduate",

    description:
      "An academic research paper examining opportunities, challenges, implementation considerations, and organizational implications associated with electronic health records.",

    tags: [
      "Electronic Health Records",
      "EHR",
      "Healthcare Technology",
      "Health Informatics",
      "Digital Health",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 19,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This resource examines electronic health record implementation, including opportunities, challenges, organizational considerations, and the role of technology in healthcare.",
  },


  {
    id: "IT-HS-003",

    title: "Fighting Against Obesity",

    category: "Health Sciences",

    type: "Health Promotion Plan",

    level: "Postgraduate",

    description:
      "A health-focused academic resource examining obesity, health promotion, prevention strategies, and approaches to improving population health outcomes.",

    tags: [
      "Obesity",
      "Health Promotion",
      "Public Health",
      "Prevention",
      "Population Health",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 19,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This resource focuses on obesity prevention and health promotion strategies aimed at improving health outcomes at the individual and population levels.",
  },


  /* =====================================================
     MATHEMATICS & STATISTICS
  ===================================================== */

  {
    id: "IT-MATH-001",

    title:
      "Mathematics Internal Assessment – Height vs Throwing Accuracy in Football",

    category: "Mathematics & Statistics",

    type: "Mathematics Internal Assessment",

    level: "High School",

    description:
      "A mathematical investigation examining the relationship between height and throwing accuracy in football using statistical analysis, correlation, and regression.",

    tags: [
      "Mathematics",
      "Statistics",
      "Correlation",
      "Regression",
      "Football",
      "Data Analysis",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 15,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This mathematical investigation explores the relationship between player height and throwing accuracy using statistical techniques including correlation and regression.",
  },


  {
    id: "IT-MATH-002",

    title:
      "Exploring the Nexus: Oil Price Fluctuations and GDP Growth Correlations Between Russia and Saudi Arabia (1990–2022)",

    category: "Mathematics & Statistics",

    type: "Mathematical & Statistical Analysis",

    level: "Undergraduate",

    description:
      "A quantitative study examining relationships between oil price fluctuations and GDP growth using statistical modelling, correlation, regression, and time-series analysis.",

    tags: [
      "Statistics",
      "Regression Analysis",
      "Correlation",
      "Time-Series Analysis",
      "Statistical Modelling",
      "GDP",
      "Oil Prices",
    ],

    format: "PDF",

    access: "Coming Soon",

    basePrice: 15,

    baseCurrency: "USD",

    requestSimilar: true,

    preview:
      "This quantitative study investigates relationships between oil price movements and GDP growth using statistical modelling, correlation, regression, and time-series techniques.",
  },
];


/* =========================================================
   RESEARCH CATEGORIES
========================================================= */

export const researchCategories: ResearchCategory[] = [

  "Computer Science",

  "Data Analytics",

  "Business & Management",

  "Health Sciences",

  "Social Sciences",

  "Education",

  "Engineering & Science",

  "Mathematics & Statistics",

  "Research Methods",

  "Research Proposals",

  "Dissertations & Theses",

  "Datasets",

  "Programming Resources",

  "Templates",
];