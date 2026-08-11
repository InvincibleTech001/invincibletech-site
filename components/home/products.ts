import {
  Bot,
  BarChart3,
  Globe2,
  MapPinned,
  BookOpen,
} from "lucide-react";

export interface Product {
  title: string;
  subtitle: string;
  description: string;

  icon: React.ElementType;

  stack: string[];

  status: "Live" | "In Development" | "Prototype" | "Coming Soon";

  href: string;

  button: string;

  external?: boolean;

  preview:
    | "assistant"
    | "dashboard"
    | "tourism"
    | "mapping"
    | "docs";

  featured?: boolean;
}

export const products: Product[] = [
  {
    title: "AI Business Assistant",

    subtitle: "Conversational AI",

    description:
      "An intelligent assistant for customer support, document search, workflow automation and business operations.",

    icon: Bot,

    stack: [
      "Next.js",
      "Python",
      "OpenAI",
    ],

    status: "In Development",

    href: "/products/ai-assistant",

    button: "Explore Product",

    preview: "assistant",

    featured: true,
  },

  {
    title: "Analytics Dashboard",

    subtitle: "Business Intelligence",

    description:
      "Interactive dashboards powered by modern analytics for finance, healthcare, education and enterprise reporting.",

    icon: BarChart3,

    stack: [
      "Power BI",
      "SQL",
      "Python",
    ],

    status: "Prototype",

    href: "/products/dashboard",

    button: "Explore Product",

    preview: "dashboard",
  },

  {
    title: "Furahika Adventures",

    subtitle: "Tourism Platform",

    description:
      "A tourism and travel platform developed by InvincibleTech for our tourism subsidiary, offering destination discovery, accommodation booking, safari reservations and travel planning.",

    icon: Globe2,

    stack: [
      "Next.js",
      "Maps API",
      "Booking",
    ],

    status: "Coming Soon",

    href: "https://furahikaadventures.com",

    button: "Visit Platform",

    external: true,

    preview: "tourism",
  },

  {
    title: "Institution Mapping",

    subtitle: "GIS Platform",

    description:
      "Interactive mapping solution for institutions, infrastructure and public services using modern GIS technologies.",

    icon: MapPinned,

    stack: [
      "Leaflet",
      "PostGIS",
      "Next.js",
    ],

    status: "Prototype",

    href: "/products/mapping",

    button: "Explore Product",

    preview: "mapping",
  },

  {
    title: "InvincibleDocs™",

    subtitle: "Knowledge Hub",

    description:
      "An expanding library of original research resources, datasets, analytical projects, templates, code samples and educational materials.",

    icon: BookOpen,

    stack: [
      "Research",
      "Power BI",
      "Python",
    ],

    status: "Coming Soon",

    href: "/knowledge",

    button: "Explore Library",

    preview: "docs",

    featured: true,
  },
];