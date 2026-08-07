export const siteConfig = {
  name: "Sigma Estimations",
  shortName: "Sigma",
  tagline: "Building Tomorrow with Precision and Excellence.",
  description:
    "Sigma Estimations provides accurate construction estimating, quantity takeoffs and project management solutions for residential, commercial and industrial developments across the USA, Canada, Australia and the Middle East.",
  url: "https://www.sigmaestimations.com",
  phone: "+1 (813) 555-0199",
  email: "info@sigmaestimations.com",
  address: "4820 Harborview Drive, Suite 300, Tampa, FL 33602, USA",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/143071387/admin/dashboard",
    facebook: "https://www.facebook.com/profile.php?id=61592920655191",
    instagram: "https://www.instagram.com/sigma_estimations/?hl=en",
  },
};

siteConfig.social.whatsApp = `https://wa.me/${siteConfig.phone.replace(/[^\d]/g, "")}`;

export const stats = [
  { label: "Projects Completed", value: 500, suffix: "+", icon: "Building2" },
  { label: "Years of Experience", value: 15, suffix: "+", icon: "Award" },
  { label: "Client Satisfaction", value: 98, suffix: "%", icon: "ThumbsUp" },
  { label: "Expert Engineers", value: 50, suffix: "+", icon: "HardHat" },
];

export const trustedCompanies = [
  { name: "Meridian Group", icon: "Building2" },
  { name: "Cornerstone Developers", icon: "Landmark" },
  { name: "Atlas Infrastructure", icon: "Factory" },
  { name: "Harbor & Vance", icon: "Anchor" },
  { name: "Sterling Build Co.", icon: "HardHat" },
  { name: "Vantage Point Capital", icon: "TrendingUp" },
  { name: "Ironclad Contracting", icon: "Hammer" },
  { name: "Nexus Urban Partners", icon: "Building" },
];

export const serviceImages = {
  "construction-estimating":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop",
  "quantity-takeoff":
    "/images/estimation.webp",
  "material-takeoff":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2400&auto=format&fit=crop",
  "cost-estimation":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2400&auto=format&fit=crop",
  "residential-construction":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
  "commercial-construction":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
  "industrial-projects":
    "https://images.unsplash.com/photo-1553413077-190483e1c1e0?q=80&w=2400&auto=format&fit=crop",
  "project-management":
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
  "bid-preparation":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2400&auto=format&fit=crop",
  "consulting-services":
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2400&auto=format&fit=crop",
};

export const services = [
  {
    slug: "construction-estimating",
    icon: "Calculator",
    title: "Construction Estimating",
    short: "Detailed, code-compliant cost estimates that hold up from bid day to closeout.",
    description:
      "Our estimators build line-item budgets from architectural and structural drawings, calibrated against current regional material and labor indices so your bids are competitive and your margins stay protected.",
    features: [
      "Full line-item cost breakdown by CSI division",
      "Regional labor and material pricing calibration",
      "Bid-day accuracy with tracked assumptions",
      "Delivered in your preferred spreadsheet or software format",
    ],
    highlights: [
      {
        heading: "Analyze the Drawings",
        text: "Our estimators review your full architectural and structural set line by line, flagging scope gaps and constructability issues before pricing begins, so nothing gets missed on bid day.",
        image:
          "/Services/Construction-Estimating/Analyze the drawing.webp",
      },
      {
        heading: "Calculate the Costs",
        text: "Every division of work is priced against current regional labor and material indices, then assembled into a clean, bid-ready cost report your team can submit with confidence.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "quantity-takeoff",
    icon: "Ruler",
    title: "Quantity Takeoff",
    short: "Precise material quantities extracted directly from your drawing set.",
    description:
      "Using digital takeoff software cross-checked by senior reviewers, we quantify every concrete yard, stud, panel and fixture, delivered in the format your procurement team already works in.",
    features: [
      "Digital takeoff from PDF, DWG or BIM files",
      "Senior-reviewer quality check on every quantity",
      "Trade-by-trade quantity breakdowns",
      "Fast turnaround for active bids",
    ],
    highlights: [
      {
        heading: "Calculate Quantities",
        text: "Our estimators analyze your structural plans to calculate quantities for columns, beams, girders, connections, bracing, decking and embeds. We factor in fabrication, erection, welding and bolting labor to provide detailed, bid-ready cost reports.",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
      },
      {
        heading: "Verify Every Count",
        text: "A senior reviewer cross-checks every quantity against the drawing set before it's delivered, so your procurement team can order with confidence and avoid costly overages or shortages.",
        image:
          "/images/estimation.webp",
      },
    ],
  },
  {
    slug: "material-takeoff",
    icon: "Layers",
    title: "Material Takeoff",
    short: "Trade-by-trade material lists ready for supplier quoting.",
    description:
      "From framing lumber to MEP rough-in, we break down materials by trade and phase, so your purchasing team can lock in pricing before ground is broken.",
    features: [
      "Material lists organized by trade and phase",
      "Supplier-ready quoting format",
      "Waste and overage factored in",
      "Cross-checked against the latest drawing revision",
    ],
    highlights: [
      {
        heading: "Break Down by Trade",
        text: "We organize every material list by trade and construction phase, from framing lumber to MEP rough-in, so your purchasing team can lock in supplier pricing before ground is broken.",
        image:
          "/Services/Material-takeoff/break down by trade.webp",
      },
      {
        heading: "Account for Waste",
        text: "Realistic waste and overage factors are built into every quantity, so your material orders match what actually gets used on site, not just the theoretical minimum.",
        image:
          "/Services/Material-takeoff/account for waste.webp",
      },
    ],
  },
  {
    slug: "cost-estimation",
    icon: "TrendingUp",
    title: "Cost Estimation",
    short: "Full project cost models spanning hard costs, soft costs and contingency.",
    description:
      "We model total project cost across every division of work, layering in escalation, contingency and regional adjustment factors so stakeholders can plan with confidence.",
    features: [
      "Hard cost, soft cost and contingency modeling",
      "Escalation and regional adjustment factors",
      "Stakeholder-ready summary reporting",
      "Scenario comparison for value engineering",
    ],
    highlights: [
      {
        heading: "Model the Full Budget",
        text: "We build complete cost models spanning hard costs, soft costs and contingency, layering in escalation and regional adjustment factors so your budget reflects real-world conditions.",
        image:
          "/Services/Cost-estimating/Model the Full Budget.webp",
      },
      {
        heading: "Compare Scenarios",
        text: "Need to weigh design options? We build side-by-side cost scenarios so your team can make informed value-engineering decisions before committing to a direction.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "residential-construction",
    icon: "Home",
    title: "Residential Construction",
    short: "Estimating support for custom homes, multifamily and residential developments.",
    description:
      "From single-family custom builds to mid-rise multifamily, we support builders and developers with estimates tuned to residential specifications and finish levels.",
    features: [
      "Custom home and multifamily estimating",
      "Finish-level cost tiers for buyer packages",
      "Support across all residential project phases",
      "Familiar with regional residential code requirements",
    ],
    highlights: [
      {
        heading: "Estimate Any Finish Level",
        text: "From builder-grade to luxury custom finishes, we tier every estimate to match the buyer package, so pricing stays accurate across your entire product line.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      },
      {
        heading: "Support Every Phase",
        text: "From initial feasibility through final closeout, our team stays engaged across the full residential build cycle, keeping your numbers aligned as the project evolves.",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "commercial-construction",
    icon: "Building2",
    title: "Commercial Construction",
    short: "Ground-up and tenant improvement estimating for commercial developers.",
    description:
      "Retail, office, hospitality and mixed-use — our commercial estimating team understands the code requirements and finish standards that drive commercial budgets.",
    features: [
      "Ground-up and tenant improvement estimating",
      "Retail, office, hospitality and mixed-use experience",
      "Trade-coordinated commercial cost breakdowns",
      "Familiar with commercial code and finish standards",
    ],
    highlights: [
      {
        heading: "Ground-Up & Tenant Fit-Outs",
        text: "Whether it's a new build or a tenant improvement package, our estimators understand the code requirements and finish standards that drive commercial budgets across retail, office and hospitality.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      },
      {
        heading: "Coordinate Every Trade",
        text: "Commercial projects involve dozens of moving pieces. We coordinate cost breakdowns across every trade package so nothing falls through the cracks between subcontractors.",
        image:
          "/Services/Commercial-Construction/cordinate every trade.webp",
      },
    ],
  },
  {
    slug: "industrial-projects",
    icon: "Factory",
    title: "Industrial Projects",
    short: "Estimating for warehouses, distribution centers and industrial facilities.",
    description:
      "We support large-scale industrial and logistics projects with estimates that account for heavy structural systems, specialized MEP and long-lead equipment.",
    features: [
      "Heavy structural and specialized MEP estimating",
      "Long-lead equipment cost tracking",
      "Warehouse and distribution center experience",
      "Large-scale, multi-phase project support",
    ],
    highlights: [
      {
        heading: "Heavy Structural Systems",
        text: "Industrial facilities demand a different level of structural and MEP detail. We account for heavy steel systems, specialized equipment loads and long-lead procurement in every estimate.",
        image:
          "/Services/industrial-projects/heavy structural system (1).webp",
      },
      {
        heading: "Track Long-Lead Equipment",
        text: "We flag and track long-lead equipment costs early, so procurement delays don't catch your schedule or budget off guard on large-scale logistics and distribution projects.",
        image:
          "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "project-management",
    icon: "ClipboardList",
    title: "Project Management",
    short: "On-the-ground coordination that keeps budgets and schedules aligned.",
    description:
      "Our project managers translate estimates into executable schedules, tracking cost against progress so surprises are caught before they become change orders.",
    features: [
      "Cost-loaded schedule development",
      "Ongoing budget-to-progress tracking",
      "Early change order risk identification",
      "Direct coordination with your site team",
    ],
    highlights: [
      {
        heading: "Turn Estimates Into Schedules",
        text: "We translate your approved estimate into a cost-loaded schedule, so budget and timeline move together instead of drifting apart as construction progresses.",
        image:
          "/Services/Project-management/turn estimates into schedules.webp",
      },
      {
        heading: "Catch Issues Early",
        text: "By tracking cost against real progress on site, we flag budget risk before it becomes a change order, giving your team time to react instead of react late.",
        image:
          "/Services/Project-management/Catch issue early (1).webp",
      },
    ],
  },
  {
    slug: "bid-preparation",
    icon: "FileCheck2",
    title: "Bid Preparation",
    short: "Complete, submission-ready bid packages built to win.",
    description:
      "We assemble compliant, competitively priced bid packages — from scope narratives to pricing schedules — so your proposal is ready the moment the deadline hits.",
    features: [
      "Scope narratives and pricing schedules",
      "Compliance-checked bid packages",
      "Competitive pricing strategy support",
      "Deadline-ready formatting and submission checklist",
    ],
    highlights: [
      {
        heading: "Build a Winning Package",
        text: "From scope narratives to pricing schedules, we assemble a complete, compliance-checked bid package designed to be competitive and submission-ready the moment the deadline hits.",
        image:
          "/Services/bid-preparation/build a winning package.webp",
      },
      {
        heading: "Never Miss a Deadline",
        text: "Our formatting and submission checklist is built around your bid deadline, not ours, so your package is ready with time to spare, not scrambled together at the last minute.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "consulting-services",
    icon: "Users",
    title: "Consulting Services",
    short: "Independent advisory support for cost validation and value engineering.",
    description:
      "When you need a second opinion, our consultants provide independent cost validation, value engineering and constructability review for projects at any stage.",
    features: [
      "Independent cost validation",
      "Value engineering recommendations",
      "Constructability review at any project stage",
      "Unbiased second-opinion reporting",
    ],
    highlights: [
      {
        heading: "Get an Independent Opinion",
        text: "When you need a second set of eyes, our consultants provide unbiased cost validation and constructability review, independent of the estimate that's already on the table.",
        image:
          "/Services/consulting-services/get an independent opinion.webp",
      },
      {
        heading: "Find the Savings",
        text: "Our value engineering reviews look for smart substitutions and sequencing changes that protect design intent while trimming cost, at any stage of the project.",
        image:
          "/Services/consulting-services/find the saving.webp",
      },
    ],
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
      "Sigma Estimations' takeoffs are the most reliable we've used in twelve years of bidding. Their numbers hold up through the entire build.",
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
      "Working across UAE and North American code requirements, Sigma Estimations has never missed a regional standard in three years of partnership.",
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
    question: "What types of projects does Sigma Estimations provide estimating for?",
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
  { year: "2010", title: "Founded in Tampa, Florida", description: "Sigma Estimations opens with a three-person estimating team serving local residential builders." },
  { year: "2014", title: "Commercial Division Launched", description: "Expanded services to commercial and tenant improvement estimating across the Southeast." },
  { year: "2017", title: "Crossed 200 Projects", description: "Reached 200 completed projects and opened a second office to serve growing demand." },
  { year: "2020", title: "International Expansion", description: "Began serving clients in Canada and Australia, adapting workflows to regional code standards." },
  { year: "2023", title: "Middle East Operations", description: "Opened Gulf-region capability to support large-scale industrial and logistics estimating." },
  { year: "2025", title: "500+ Projects Milestone", description: "Surpassed 500 completed projects with a team of over 50 engineers and estimators." },
];

// lib/data.js — add this export alongside your existing `projects` array

export const samples = [
  {
    title: "Painting",
    image: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800&q=80",
    file: "/samples/PAINTING/ESTIMATE - DAVID T. CARDENAS SENIOR CENTER & POLICE HEADQUARTERS.xlsx",
  },
  {
    title: "Roofing",
    image: "https://images.unsplash.com/photo-1635424824800-692767998d07?w=800&q=80",
    file: "/samples/ROOFING/ESTIMATE - ALTUS PUBLIC SCHOOLS L. MENDEL RIVERS ELEMENTARY -V1.xlsx",
  },
  {
    title: "Concrete",
    category: "Concrete",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800&q=80",
    file: "/samples/CONCRETE/ESTIMATE - STORAGE BUILDING AT GADSDEN CITY HS ATHLETIC FIELDS -V1.xlsx",
  },

  {
    title: "Drywall & Studs",
    image: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800&q=80",
    file: "/samples/DRYWALL, STUDS/ESTIMATE - MAVIS TIRES & BRAKES -V1.xlsx",
  },
];