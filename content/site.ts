export type NavItem = {
  href: string;
  label: string;
};

export type PromoCard = {
  title: string;
  description: string;
  href: string;
  tone:
    | "orange"
    | "midnight"
    | "slate"
    | "lemon"
    | "darkSlate"
    | "chalk"
    | "restaurant"
    | "retail"
    | "commerce";
  badge?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
};

export const primaryNav: NavItem[] = [
  {
    href: "/",
    label: "Intro"
  },
  {
    href: "/why",
    label: "Why PAYNEXPRO?"
  },
  {
    href: "/connect",
    label: "Connect"
  }
];

export const partnerCards: PromoCard[] = [
  {
    title: "NEXEDGE",
    description: "Grow your residual portfolio with a modern zero-fee strategy.",
    href: "/why#programs",
    tone: "orange",
    badge: "New"
  },
  {
    title: "Why PAYNEXPRO?",
    description: "See how our partner-first model is built to scale with you.",
    href: "/why",
    tone: "midnight"
  },
  {
    title: "Connect",
    description: "Meet the team, get support, and open the right conversation fast.",
    href: "/connect",
    tone: "lemon"
  },
  {
    title: "Smart POS",
    description: "Flexible hardware and ordering systems for modern operators.",
    href: "/#platform",
    tone: "chalk"
  },
  {
    title: "Partner Hub",
    description: "Sales tools, onboarding kits, launch collateral, and support flows.",
    href: "/why#support",
    tone: "slate"
  },
  {
    title: "Equipment",
    description: "Countertop, mobile, and unattended devices that fit your mix.",
    href: "/#equipment",
    tone: "darkSlate"
  },
  {
    title: "Software",
    description: "Reporting, invoicing, and recurring payments beyond the terminal.",
    href: "/#software",
    tone: "slate"
  }
];

export const merchantCards: PromoCard[] = [
  {
    title: "Why PAYNEXPRO?",
    description: "Transparent service, cleaner economics, and a sharper support model.",
    href: "/why",
    tone: "midnight"
  },
  {
    title: "Pricing Strategy",
    description: "Choose cost-plus, dual pricing, or fee-offset models with confidence.",
    href: "/why#pricing",
    tone: "orange"
  },
  {
    title: "Smart POS",
    description: "Everything you need to run transactions, tickets, and reports.",
    href: "/#platform",
    tone: "chalk"
  },
  {
    title: "Equipment",
    description: "Find the right device footprint for your checkout environment.",
    href: "/#equipment",
    tone: "darkSlate"
  },
  {
    title: "Software",
    description: "For more than just taking payments.",
    href: "/#software",
    tone: "slate"
  },
  {
    title: "I own a restaurant",
    description: "Fast checkout, handhelds, and service-ready workflows.",
    href: "/connect#sales",
    tone: "restaurant"
  },
  {
    title: "I run a retail store",
    description: "Inventory-friendly tools for fast-moving sales floors.",
    href: "/connect#sales",
    tone: "retail"
  },
  {
    title: "I sell online",
    description: "Unified reporting, links, invoices, and recurring billing.",
    href: "/connect#sales",
    tone: "commerce"
  }
];

export const industryWords = [
  "restaurants",
  "bars & breweries",
  "retail stores",
  "healthcare teams",
  "home services",
  "growing agencies"
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "PAYNEXPRO feels like a partner, not a processor. The rollout was clean, the support team stayed close, and our merchants noticed the difference immediately.",
    author: "Alicia Warren",
    company: "North Harbor Payments"
  },
  {
    quote:
      "The sales support is unusually strong. We had pricing tools, proposal help, and actual human follow-through instead of generic partner promises.",
    author: "Marcus Lee",
    company: "Summit Merchant Advisors"
  },
  {
    quote:
      "We moved from a patchwork stack into one cleaner system. Reporting improved, checkout got faster, and our service team finally had context.",
    author: "Dylan Cortez",
    company: "Cinder & Oak Hospitality"
  }
];

export const whyPrinciples = [
  {
    title: "Partner-first economics",
    body: "We build around long-term channel growth, clean agreements, and a model that does not undercut the people bringing the business in."
  },
  {
    title: "Modern operating stack",
    body: "From countertop devices to invoices and recurring billing, the stack is designed to support real operators instead of single-use transactions."
  },
  {
    title: "White-glove launch support",
    body: "Deployments are planned, not improvised. That means tighter installs, better staff confidence, and fewer post-live surprises."
  },
  {
    title: "Transparent communication",
    body: "Pricing conversations, support boundaries, and rollout expectations are kept clear so clients and partners can plan with confidence."
  }
];

export const contactChannels = [
  {
    title: "Sales conversations",
    body: "Tell us about your business model, locations, volume, or growth plan and we will point you to the right solution path.",
    anchor: "sales"
  },
  {
    title: "Partner onboarding",
    body: "Building an ISO, agent network, or referral channel? We can map the launch flow, resources, and support model with you.",
    anchor: "partners"
  },
  {
    title: "Client support",
    body: "Need terminals, software, billing, or reporting help? Start here and we will route the request to the right team quickly.",
    anchor: "support"
  }
];
