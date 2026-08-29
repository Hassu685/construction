export const siteConfig = {
  name: "BuildNova Estimating & Construction",
  shortName: "BuildNova",
  tagline: "Building Tomorrow with Precision and Excellence.",
  description:
    "BuildNova provides accurate construction estimating, quantity takeoffs and project management solutions for residential, commercial and industrial developments across the USA, Canada, Australia and the Middle East.",
  url: "https://www.buildnova-estimating.com",
  phone: "+1 (813) 555-0199",
  email: "estimates@buildnova-estimating.com",
  address: "4820 Harborview Drive, Suite 300, Tampa, FL 33602, USA",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};

export const stats = [
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Expert Engineers", value: 50, suffix: "+" },
];

export const trustedCompanies = [
  "Meridian Group",
  "Cornerstone Developers",
  "Atlas Infrastructure",
  "Harbor & Vance",
  "Sterling Build Co.",
  "Vantage Point Capital",
  "Ironclad Contracting",
  "Nexus Urban Partners",
];

export const services = [
  {
    slug: "construction-estimating",
    icon: "Calculator",
    title: "Construction Cost Estimating",
    short: "Accurate, code-aligned budgets that stay solid from bid submission to project closeout.",
    description:
      "Our estimating team develops itemized budgets straight from architectural and structural plans, benchmarked against up-to-date regional labor and material rates — keeping your bids sharp and your margins intact.",
  },
  {
    slug: "quantity-takeoff",
    icon: "Ruler",
    title: "Quantity Takeoff Services",
    short: "Accurate material counts pulled straight from your project drawings.",
    description:
      "With digital takeoff tools verified by senior estimators, we measure every unit of concrete, framing, panels and fixtures, formatted to match your procurement workflow.",
  },
  {
    slug: "material-takeoff",
    icon: "Layers",
    title: "Material Takeoff",
    short: "Trade-specific material breakdowns prepared for supplier bidding.",
    description:
      "Covering everything from lumber framing to MEP systems, we organize materials by trade and construction phase, helping your team secure pricing before construction starts.",
  },
  {
    slug: "cost-estimation",
    icon: "TrendingUp",
    title: "Project Cost Estimation",
    short: "Comprehensive cost projections covering hard costs, soft costs and reserves.",
    description:
      "We build detailed cost models across all work divisions, factoring in inflation, contingency reserves and location-based pricing adjustments so decision-makers can budget accurately.",
  },
  {
    slug: "residential-construction",
    icon: "Home",
    title: "Residential Construction Estimating",
    short: "Estimating services for custom homes, multifamily housing and residential projects.",
    description:
      "Whether it's a single custom home or a mid-rise apartment complex, we provide builders and developers estimates aligned with residential codes and finish quality.",
  },
  {
    slug: "commercial-construction",
    icon: "Building2",
    title: "Commercial Construction Estimating",
    short: "New-build and renovation estimating for commercial property developers.",
    description:
      "From retail and offices to hospitality and mixed-use spaces, our team knows the compliance standards and finish expectations that shape commercial project budgets.",
  },
  {
    slug: "industrial-projects",
    icon: "Factory",
    title: "Industrial Project Estimating",
    short: "Cost estimating for warehouses, distribution hubs and industrial buildings.",
    description:
      "We assist large industrial and logistics developments with estimates covering heavy-duty structural elements, specialized MEP work and equipment with long procurement lead times.",
  },
  {
    slug: "project-management",
    icon: "ClipboardList",
    title: "Construction Project Management",
    short: "Field-level coordination to keep timelines and budgets on track.",
    description:
      "Our project managers convert estimates into actionable schedules, monitoring spend against progress to flag issues before they turn into costly change orders.",
  },
  {
    slug: "bid-preparation",
    icon: "FileCheck2",
    title: "Bid Preparation Services",
    short: "Full, ready-to-submit bid packages designed to win contracts.",
    description:
      "We put together compliant, competitively priced bid documents — from scope descriptions to pricing sheets — so your submission is ready well ahead of deadline.",
  },
  {
    slug: "consulting-services",
    icon: "Users",
    title: "Estimating Consulting Services",
    short: "Independent expert review for cost verification and value engineering.",
    description:
      "Need a second opinion? Our consultants offer unbiased cost checks, value engineering insight and constructability assessments at any project stage.",
  },
];

export const whyChoose = [
  {
    icon: "Target",
    title: "Accurate Estimates",
    description: "Line-item precision benchmarked against current regional pricing data.",
  },
  {
    icon: "Zap",
    title: "Fast Turnaround",
    description: "Most takeoffs and estimates delivered within 24–72 hours of drawing receipt.",
  },
  {
    icon: "GraduationCap",
    title: "Experienced Engineers",
    description: "A team averaging over a decade in estimating, engineering and field construction.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Competitive Pricing",
    description: "Estimating packages structured to protect your bid margin, not erode it.",
  },
  {
    icon: "Cpu",
    title: "Advanced Technology",
    description: "Digital takeoff platforms and BIM-integrated workflows for cleaner data.",
  },
  {
    icon: "Globe2",
    title: "International Standards",
    description: "Fluent in ICC, CSA, NCC and Gulf-region codes across four continents.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We review your project scope, drawings and timeline to define exactly what's needed.",
    icon: "MessageSquare",
  },
  {
    number: "02",
    title: "Project Analysis",
    description: "Our engineers study the drawing set for constructability, scope gaps and risk areas.",
    icon: "SearchCheck",
  },
  {
    number: "03",
    title: "Quantity Takeoff",
    description: "Every material and assembly is quantified using digital takeoff software.",
    icon: "Ruler",
  },
  {
    number: "04",
    title: "Cost Estimation",
    description: "Quantities are priced against current labor and material indices for your region.",
    icon: "Calculator",
  },
  {
    number: "05",
    title: "Planning",
    description: "We package the estimate into a schedule-aligned budget ready for stakeholder review.",
    icon: "CalendarClock",
  },
  {
    number: "06",
    title: "Delivery",
    description: "Final documents are delivered in your preferred format, with a walkthrough call included.",
    icon: "PackageCheck",
  },
];

export const projects = [
  {
    slug: "meridian-heights-residences",
    title: "Meridian Heights Residences",
    category: "Residential",
    location: "Austin, Texas, USA",
    year: "2024",
    value: "$42M",
    size: "310,000 sq ft",
    image: "residential-highrise",
    description:
      "Full estimating and quantity takeoff services for a 220-unit luxury multifamily development, including structural, MEP and finishes packages delivered across four phased bid packages.",
  },
  {
    slug: "harborline-corporate-campus",
    title: "Harborline Corporate Campus",
    category: "Commercial",
    location: "Tampa, Florida, USA",
    year: "2023",
    value: "$68M",
    size: "480,000 sq ft",
    image: "commercial-office",
    description:
      "Ground-up cost estimation and bid preparation for a three-building corporate campus, coordinated across seven subcontractor trade packages.",
  },
  {
    slug: "atlas-distribution-hub",
    title: "Atlas Distribution Hub",
    category: "Industrial",
    location: "Calgary, Alberta, Canada",
    year: "2024",
    value: "$91M",
    size: "1.2M sq ft",
    image: "industrial-warehouse",
    description:
      "Material takeoff and cost modeling for a cold-climate distribution facility, including specialized structural and refrigeration MEP systems.",
  },
  {
    slug: "vantage-point-residences",
    title: "Vantage Point Residences",
    category: "Residential",
    location: "Scottsdale, Arizona, USA",
    year: "2022",
    value: "$18M",
    size: "86,000 sq ft",
    image: "residential-custom",
    description:
      "Custom estimating for a portfolio of eleven high-end single-family residences, with finish-level cost tiers for each buyer package.",
  },
  {
    slug: "cornerstone-retail-plaza",
    title: "Cornerstone Retail Plaza",
    category: "Commercial",
    location: "Brisbane, Australia",
    year: "2023",
    value: "$27M",
    size: "142,000 sq ft",
    image: "commercial-retail",
    description:
      "Tenant improvement and shell estimating across nine retail anchors, aligned to NCC code requirements and staged tenant fit-out schedules.",
  },
  {
    slug: "sterling-logistics-park",
    title: "Sterling Logistics Park",
    category: "Industrial",
    location: "Dubai, United Arab Emirates",
    year: "2024",
    value: "$115M",
    size: "1.8M sq ft",
    image: "industrial-logistics",
    description:
      "End-to-end project management and cost control for a multi-phase logistics park, coordinated with Gulf-region code and procurement standards.",
  },
];

export const testimonials = [
  {
    name: "Daniel Ortega",
    role: "VP of Preconstruction, Cornerstone Developers",
    quote:
      "BuildNova's takeoffs are the most reliable we've used in twelve years of bidding. Their numbers hold up through the entire build.",
    rating: 5,
  },
  {
    name: "Melissa Chan",
    role: "Director of Estimating, Harbor & Vance",
    quote:
      "The turnaround time is unmatched. We submit drawings on a Monday and have a fully reviewed estimate before Thursday, every time.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    role: "Principal, Whitfield Architecture Group",
    quote:
      "They catch constructability issues before they become change orders. That alone has saved our clients hundreds of thousands.",
    rating: 5,
  },
  {
    name: "Amira Al-Farsi",
    role: "Project Director, Sterling Build Co.",
    quote:
      "Working across UAE and North American code requirements, BuildNova has never missed a regional standard in three years of partnership.",
    rating: 5,
  },
  {
    name: "Trevor Lang",
    role: "Owner, Lang Custom Homes",
    quote:
      "As a smaller builder, their estimating team feels like an extension of my own office. Responsive, precise, and fairly priced.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What types of projects does BuildNova provide estimating for?",
    answer:
      "We support residential, commercial and industrial projects of any scale, from custom single-family homes to multi-phase logistics parks, for builders, developers, architects and general contractors.",
  },
  {
    question: "How long does a typical estimate take to complete?",
    answer:
      "Most quantity takeoffs and cost estimates are delivered within 24 to 72 hours of receiving a complete drawing set, depending on project size and complexity. Rush turnaround is available for active bids.",
  },
  {
    question: "What file formats do you accept for takeoffs?",
    answer:
      "We work directly from PDF, DWG, RVT and most common CAD and BIM formats. If you're unsure whether your files are compatible, send them over and we'll confirm within the hour.",
  },
  {
    question: "Do you provide estimating services outside the United States?",
    answer:
      "Yes. Our team regularly delivers estimates for projects in Canada, Australia and the Middle East, and we build our cost models against the relevant regional code and pricing standards for each.",
  },
  {
    question: "How is pricing structured for your estimating services?",
    answer:
      "Pricing is typically based on project size, trade scope and drawing complexity. We provide a fixed quote before work begins, so there are no surprises on your invoice.",
  },
  {
    question: "Can you support us through the full bid submission process?",
    answer:
      "Yes. Beyond takeoffs and estimates, our bid preparation service assembles complete, submission-ready packages including scope narratives and pricing schedules.",
  },
  {
    question: "Do you offer ongoing project management after the estimate is delivered?",
    answer:
      "Many of our clients retain us for project management once construction begins, so budget tracking and schedule coordination stay connected to the original estimate.",
  },
];

export const teamHighlights = [
  { icon: "Award", value: "15+", label: "Years in Business" },
  { icon: "Building2", value: "500+", label: "Projects Delivered" },
  { icon: "Globe2", value: "4", label: "Continents Served" },
  { icon: "Users2", value: "50+", label: "Engineers & Estimators" },
];

export const timeline = [
  { year: "2010", title: "Founded in Tampa, Florida", description: "BuildNova opens with a three-person estimating team serving local residential builders." },
  { year: "2014", title: "Commercial Division Launched", description: "Expanded services to commercial and tenant improvement estimating across the Southeast." },
  { year: "2017", title: "Crossed 200 Projects", description: "Reached 200 completed projects and opened a second office to serve growing demand." },
  { year: "2020", title: "International Expansion", description: "Began serving clients in Canada and Australia, adapting workflows to regional code standards." },
  { year: "2023", title: "Middle East Operations", description: "Opened Gulf-region capability to support large-scale industrial and logistics estimating." },
  { year: "2025", title: "500+ Projects Milestone", description: "Surpassed 500 completed projects with a team of over 50 engineers and estimators." },
];
