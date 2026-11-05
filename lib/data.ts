export interface ProjectScreenshot {
  url: string;
  alt: string;
  caption: string;
}

export interface DetailedTech {
  name: string;
  purpose: string;
  usage: string;
  whyRelevant: string;
}

export interface Contribution {
  area: string;
  details: string;
}

export interface Feature {
  title: string;
  description: string;
  badge?: string;
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface Learning {
  topic: string;
  takeaway: string;
}

export interface ProjectOverview {
  summary: string;
  problem: string;
  purpose: string;
  targetUsers: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  detailedTechnologyStack: DetailedTech[];
  overview: ProjectOverview;
  contributions: Contribution[];
  features: Feature[];
  challenges: Challenge[];
  learnings: Learning[];
  screenshots: ProjectScreenshot[];
  projectUrl?: string;
  githubUrl?: string;
  status?: string;
}

export interface AlsoBuiltProject {
  title: string;
  subtitle: string;
  blurb: string;
  points: string[];
  stack: string[];
  link?: { href: string; label: string };
}

export interface StackLayer {
  name: string;
  note: string;
  items: string[];
}

export const profile = {
  name: "Itisha Naukudkar",
  role: "Web Developer",
  tagline: "I build responsive web applications with React, Next.js and TypeScript.",
  email: "itishanaukudkar@gmail.com",
  phone: "+91 97695 37521",
  phoneRaw: "919769537521",
  linkedin: "https://linkedin.com/in/itisha-naukudkar",
  github: "https://github.com/Itishanaukudkar11",
  resume: "/Itisha_Naukudkar_Resume.pdf",
  aboutParagraph:
    "I'm a web developer who builds fast, responsive web applications with React, Next.js and TypeScript. I work across the whole product: the interface people use, the APIs behind it, and the content system that keeps it easy to update. I enjoy learning new technologies and solving problems.",
  experience: {
    role: "Full Stack Developer Intern",
    company: "Pipetech AI Technologies Pvt Ltd",
    location: "Ghansoli, Mahape",
    period: "6-month internship, ongoing",
    description:
      "Working on frontend applications, engineering prototypes, APIs, CMS integrations, and modern deployment workflows.",
  },
  education: {
    degree: "B.Sc. Information Technology",
    institution: "Mumbai University",
    period: "2022–2025",
    description:
      "Core curriculum in software engineering, database systems, web technologies, and computational logic.",
  },
  learning: {
    topic: "Full Stack Web Development",
    focus: "Advanced React architectures, Node.js microservices, Express APIs, and scalable cloud deployment.",
  },
};

export const stackLayers: StackLayer[] = [
  {
    name: "Interface",
    note: "Modern, responsive browser experiences",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Logic",
    note: "Strictly typed, resilient application logic",
    items: ["JavaScript (ES6+)", "TypeScript", "React Hook Form", "Zod", "PHP"],
  },
  {
    name: "Server",
    note: "Performant backend routes & headless CMS",
    items: ["Node.js", "Express.js", "Next.js API Routes", "Strapi CMS"],
  },
  {
    name: "Data",
    note: "Structured persistence & real-time stores",
    items: ["MySQL", "PostgreSQL", "Firebase Firestore"],
  },
  {
    name: "Connect and Ship",
    note: "Integrations, developer tooling & cloud hosting",
    items: [
      "REST APIs",
      "Google Sheets API",
      "Resend",
      "Slack Webhooks",
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
    ],
  },
];

export const projects: ProjectItem[] = [
  
  {
    id: "rashtragranth",
    slug: "rashtragranth",
    title: "Rashtragranth",
    category: "Theatre / Booking Platform",
    shortDescription:
      "A landing and enquiry platform for a theatre production based on the Constitution of India, allowing schools and colleges to submit booking and workshop enquiries.",
    role: "Full Stack Developer — Landing Architecture, Validation & API Flow",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Google Sheets API"],
    overview: {
      summary:
        "Rashtragranth is a dedicated web and booking enquiry platform for a widely celebrated theatrical production based on the Constitution of India, created to streamline performance bookings.",
      problem:
        "Educational institutions inquiring about performances previously relied on unformatted phone calls and emails, resulting in lost booking details.",
      purpose:
        "To provide a culturally evocative landing experience with an intelligent, validated booking enquiry system that automatically routes inquiries to operational channels.",
      targetUsers:
        "School principals, university cultural coordinators, drama club leads, and institutional event organizers.",
    },
    contributions: [
      {
        area: "Strict Client-Side Validation",
        details:
          "Built synchronized enquiry forms with real-time validation, input sanitization, and future-date restrictions using React Hook Form and Zod.",
      },
      {
        area: "Automated Multi-Channel Routing",
        details:
          "Configured serverless API routes that validate incoming submissions and dispatch formatted entries to Google Sheets, email, and Slack.",
      },
    ],
    detailedTechnologyStack: [
      {
        name: "Next.js (App Router)",
        purpose: "Full Stack Framework",
        usage: "Serves static presentation pages with serverless API route handlers for enquiry ingestion.",
        whyRelevant: "Delivers sub-second load times on mobile networks while providing serverless endpoints.",
      },
      {
        name: "React Hook Form & Zod",
        purpose: "Schema Validation",
        usage: "Enforces strict schemas for institutional contact info and event date ranges.",
        whyRelevant: "Eliminates malformed enquiries before they hit backend dispatch pipelines.",
      },
      {
        name: "Google Sheets API",
        purpose: "Automated Lead Capture",
        usage: "Appends new enquiry records into a live shared spreadsheet for the production management team.",
        whyRelevant: "Gives non-technical theatre coordinators immediate access to bookings without a dedicated database admin.",
      },
      {
        name: "Tailwind CSS",
        purpose: "Editorial Styling",
        usage: "Created responsive grid layouts and refined button hover animations.",
        whyRelevant: "Ensures visual prestige fitting a serious production on the Indian Constitution.",
      },
    ],
    features: [
      {
        title: "Intelligent Enquiry Form",
        description:
          "Custom validation with future-date enforcement, institution type classification, and attendee range selection.",
        badge: "Forms",
      },
      {
        title: "Direct Google Sheets Integration",
        description:
          "Instant synchronization of valid booking submissions into the management team's spreadsheet.",
        badge: "Automation",
      },
      {
        title: "Multi-Channel Alerts",
        description:
          "Automated email notifications to organizers and webhook triggers sent directly to the production Slack workspace.",
        badge: "Alerts",
      },
      {
        title: "Mobile-First Showcase",
        description:
          "Optimized media showcase and historical synopsis formatted for seamless reading across all mobile screens.",
        badge: "Responsive",
      },
    ],
    challenges: [
      {
        title: "Preventing Invalid or Past-Dated Booking Inquiries",
        description:
          "Users occasionally submitted dates in the past or invalid phone numbers, creating confusion for event schedulers.",
        solution:
          "Engineered a custom Zod refinement validating dynamic future date bounds and standard 10-digit mobile number patterns.",
      },
    ],
    learnings: [
      {
        topic: "Production Schema Validation",
        takeaway:
          "Gained deep proficiency in crafting reusable Zod schemas and combining them with React Hook Form for zero-jank form UX.",
      },
    ],
    screenshots: [
      {
        url: "/project/rashtragranth/screenshot-1.png",
        alt: "Rashtragranth Production Landing Page",
        caption: "Hero section showcasing the theatrical production and mission overview.",
      },
      {
        url: "/project/rashtragranth/screenshot-2.png",
        alt: "Rashtragranth Validated Booking Form",
        caption: "Interactive booking enquiry form with real-time field validation and date pickers.",
      },
      {
        url: "/project/rashtragranth/screenshot-3.png",
        alt: "Rashtragranth Performance Synopsis & Schedule",
        caption: "Educational workshop breakdown and performance synopsis section for institutions.",
      },
    ],
  },
  {
    id: "sparksfly",
    slug: "sparksfly",
    title: "SparksFly Serviced Apartments",
    category: "Hospitality / Website Development",
    shortDescription:
      "A responsive serviced-apartment website featuring property information, accommodation listings, location details and enquiry-oriented browsing.",
    role: "Frontend Developer — UI Components, Showcase & Responsive Layouts",
    technologies: ["Next.js", "JavaScript", "React", "CSS"],
    projectUrl: "https://sparksflyservicedapartments.com/",
    overview: {
      summary:
        "SparksFly Serviced Apartments is a commercial hospitality website designed to showcase premium serviced apartment accommodations, long-stay amenities, and strategic city locations.",
      problem:
        "Corporate clients and guests needed a transparent way to view apartment floorplans, amenities, nearby hubs, and submit enquiries without third-party commission markups.",
      purpose:
        "To present an inviting accommodation portal with seamless property discovery, comprehensive amenity guides, and clear enquiry pathways.",
      targetUsers:
        "Corporate executives, relocating families, business travelers, and vacationers seeking fully serviced accommodations.",
    },
    contributions: [
      {
        area: "Component Architecture & Showcase Pages",
        details:
          "Developed reusable UI components for apartment listings, About pages, FAQs, Blogs, and Contact forms.",
      },
      {
        area: "Homepage & Apartment Discovery",
        details:
          "Contributed to the homepage flow and apartment discovery interfaces highlighting studio, 1BHK, and 2BHK offerings.",
      },
      {
        area: "Responsive Cross-Device Layouts",
        details:
          "Engineered fluid CSS grid and flexbox layouts ensuring that room photos and text stay crisp across devices.",
      },
    ],
    detailedTechnologyStack: [
      {
        name: "Next.js & React",
        purpose: "Web Architecture",
        usage: "Powers modular page templates, reusable card components, and client-side smooth transitions.",
        whyRelevant: "Ensures fast initial loading and clean separation between listing components and static copy.",
      },
      {
        name: "JavaScript (ES6+)",
        purpose: "Interaction Logic",
        usage: "Handles carousel interactions, expandable FAQ accordions, and dynamic enquiry form states.",
        whyRelevant: "Provides dependable client-side behaviors across all major modern mobile browsers.",
      },
      {
        name: "Modern CSS",
        purpose: "Visual Presentation",
        usage: "Crafted bespoke typography hierarchies and warm hospitality color accents.",
        whyRelevant: "Delivers an elegant, bespoke brand identity distinct from cookie-cutter hotel templates.",
      },
    ],
    features: [
      {
        title: "Apartment Tier Showcase",
        description:
          "Detailed previews of executive suites, studio configurations, and multi-bedroom serviced units.",
        badge: "Showcase",
      },
      {
        title: "Amenity & Services Breakdown",
        description:
          "Clear icon-backed presentations of high-speed Wi-Fi, housekeeping, kitchen facilities, and 24/7 security.",
        badge: "Amenities",
      },
      {
        title: "Interactive Location Guide",
        description:
          "Proximity highlights covering commercial IT parks, transit stations, and dining districts.",
        badge: "Location",
      },
      {
        title: "Direct Stay Enquiry Flow",
        description:
          "User-friendly form allowing potential guests to specify check-in dates, duration, and special requests.",
        badge: "Enquiry",
      },
    ],
    challenges: [
      {
        title: "Optimizing High-Resolution Photography on Mobile Networks",
        description:
          "Showcasing spacious apartment interiors required numerous large images, risking sluggish loading.",
        solution:
          "Used responsive image sizing, modern formats, and lazy loading to ensure high-priority hero elements loaded first.",
      },
    ],
    learnings: [
      {
        topic: "Commercial Hospitality UX",
        takeaway:
          "Learned how thoughtful visual spacing and transparent amenity specifications build immediate booking trust.",
      },
    ],
    screenshots: [
      {
        url: "/project/sparksfly/screenshot-1.png",
        alt: "SparksFly Serviced Apartments Homepage",
        caption: "Homepage hero welcoming guests with clean property highlights and direct enquiry CTAs.",
      },
      {
        url: "/project/sparksfly/screenshot-2.png",
        alt: "SparksFly Apartment Suite Listings",
        caption: "Showcase section displaying suite options, square footage, and included hospitality amenities.",
      },
      {
        url: "/project/sparksfly/screenshot-3.png",
        alt: "SparksFly Location & Amenities Guide",
        caption: "Comprehensive amenity grid and nearby business connectivity information.",
      },
    ],
  },
  {
    id: "mechadata",
    slug: "mechadata",
    title: "MechaData",
    category: "Engineering Data / 3D Visualization",
    shortDescription:
      "An engineering data visualization interface focused on equipment information, CAD model exploration and technical datasheet presentation.",
    role: "Frontend Developer — UI/UX & 3D Model Explorer",
    technologies: ["React", "JavaScript", "Vite", "3D Visualization", "Tailwind CSS"],
    overview: {
      summary:
        "MechaData is an interactive platform prototype connecting 3D mechanical CAD representations with live equipment specifications and maintenance datasheets.",
      problem:
        "Engineers struggle to correlate static PDF datasheets with physical 3D assembly models, leading to misidentified components.",
      purpose:
        "To provide a synchronized viewport where selecting mechanical equipment highlights its sub-assemblies in 3D while surfacing operational tolerances.",
      targetUsers:
        "Maintenance engineers, plant reliability teams, equipment inspectors, and CAD technicians.",
    },
    contributions: [
      {
        area: "3D Viewport UI Controls",
        details:
          "Designed intuitive orbit, pan, explode, and sectioning toolbars with smooth camera transition states.",
      },
      {
        area: "Datasheet Drawer & Spec Cards",
        details:
          "Engineered a responsive slide-over panel displaying mechanical properties, torque limits, and wear part numbers.",
      },
      {
        area: "Command Center Dashboard",
        details:
          "Built operations dashboard tracking active datasheets, BOM validations, and conversion activity.",
      },
    ],
    detailedTechnologyStack: [
      {
        name: "React & Vite",
        purpose: "UI Runtime & Build Tool",
        usage: "Delivers rapid development iteration and lightweight bundle delivery.",
        whyRelevant: "Provides near-instant HMR and lean runtime overhead for graphics-intensive apps.",
      },
      {
        name: "3D Visualization",
        purpose: "Interactive CAD Rendering",
        usage: "Renders mechanical assemblies with materials and raycasted mesh selection.",
        whyRelevant: "Enables browser-based inspection of complex assemblies without desktop CAD software.",
      },
      {
        name: "JavaScript (ES6+)",
        purpose: "Viewport Math",
        usage: "Handles viewport projection math, bounding box centering, and camera orbit dampening.",
        whyRelevant: "Enables smooth camera easing and screen-to-world coordinate translation.",
      },
      {
        name: "Tailwind CSS",
        purpose: "HUD Interface",
        usage: "Styled floating control bars, translucent pills, and inspection drawers.",
        whyRelevant: "Allows the 3D model canvas to remain prominent while keeping controls accessible.",
      },
    ],
    features: [
      {
        title: "Command Center Dashboard",
        description:
          "Live overview of active datasheets, BOM validations, conversions, and activity feeds.",
        badge: "Overview",
      },
      {
        title: "Two-Way Datasheet Conversion",
        description:
          "Multi-stage pipeline converting mechanical datasheets into CAD drawing specifications.",
        badge: "Conversion",
      },
      {
        title: "Interactive 3D CAD Viewer",
        description:
          "Interactive 3D model preview with CAD assembly tree, inspection controls, and model properties.",
        badge: "3D View",
      },
      {
        title: "Component Properties Inspector",
        description:
          "Real-time breakdown of material alloy, mass, volume, and tolerance standards.",
        badge: "Inspector",
      },
    ],
    challenges: [
      {
        title: "Synchronizing 2D Panels with 3D Orbiting Meshes",
        description:
          "Hotspot labels must track their exact 3D coordinates on screen during camera rotation.",
        solution:
          "Used world-to-screen matrix projections throttled to requestAnimationFrame.",
      },
    ],
    learnings: [
      {
        topic: "Browser 3D Rendering Fundamentals",
        takeaway:
          "Acquired a solid understanding of 3D projection matrices, frustum culling, and orbit controls.",
      },
    ],
    screenshots: [
      {
        url: "/project/mechadata/screenshot-1.png",
        alt: "MechaData Command Center & Operations Dashboard",
        caption: "Command Center dashboard featuring live metrics, active datasheets, BOM validations, and conversion activity.",
      },
      {
        url: "/project/mechadata/screenshot-2.png",
        alt: "MechaData Mechanical Datasheet Conversion Pipeline",
        caption: "Two-way mechanical datasheet to engineering CAD conversion workflow with multi-stage progress tracking.",
      },
      {
        url: "/project/mechadata/screenshot-3.png",
        alt: "MechaData Interactive 3D CAD Viewer",
        caption: "Interactive 3D mechanical model preview with CAD assembly tree, inspection controls, and model properties.",
      },
    ],
  },
  {
    id: "edgepilot-tender",
    slug: "edgepilot-tender",
    title: "EdgePilot Tender",
    category: "AI-Assisted Tender Intelligence",
    shortDescription:
      "An enterprise tender intelligence interface designed to organize tender information, explore clauses, compare bids, analyze risks and support review workflows.",
    role: "Frontend Developer Intern — Review Workflows & Comparative UI",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    overview: {
      summary:
        "EdgePilot Tender is an enterprise tender analysis platform interface that helps bidding teams parse RFP packages, evaluate compliance, and identify risks.",
      problem:
        "Tender documents span hundreds of pages with buried penalty clauses and ambiguous scope requirements.",
      purpose:
        "To streamline the tender review workflow by organizing documents into navigable clauses and presenting bid comparisons.",
      targetUsers:
        "Bid managers, commercial directors, proposal engineers, and legal compliance officers.",
    },
    contributions: [
      {
        area: "Clause Navigation & Document Viewer",
        details:
          "Designed a dual-pane reader allowing users to jump between categorized clause summaries and original contracts.",
      },
      {
        area: "Comparative Bid Matrix",
        details:
          "Created interactive side-by-side matrix comparisons evaluating vendor pricing and delivery milestones.",
      },
    ],
    detailedTechnologyStack: [
      {
        name: "Next.js & React",
        purpose: "Application Foundation",
        usage: "Handles app routing, optimized components, and responsive layout structures.",
        whyRelevant: "Ensures fast initial loading for data-heavy enterprise portals.",
      },
      {
        name: "TypeScript",
        purpose: "Strict Contract Typing",
        usage: "Structures tender metadata, clause risk criteria, bidder profiles, and timelines.",
        whyRelevant: "Guarantees reliable data structures across intricate review schemas.",
      },
      {
        name: "Tailwind CSS",
        purpose: "Enterprise Editorial Styling",
        usage: "Implemented an understated palette with clear typography hierarchy.",
        whyRelevant: "Provides a fatigue-free reading experience for long technical documents.",
      },
    ],
    features: [
      {
        title: "Clause Classification Navigator",
        description:
          "Instant breakdown of tender documents into Scope of Work, Penalties, Payment Terms, and Warranties.",
        badge: "Classification",
      },
      {
        title: "Side-by-Side Bid Matrix",
        description:
          "Comparative grid contrasting multiple supplier proposals against benchmark parameters.",
        badge: "Comparison",
      },
      {
        title: "Contractual Risk Scoring",
        description:
          "Visual risk indicators highlighting liquidated damages clauses and high-liability indemnity.",
        badge: "Risk",
      },
      {
        title: "Audit Checklist",
        description:
          "Review milestones allowing teams to mark clauses as reviewed, flagged, or approved.",
        badge: "Compliance",
      },
    ],
    challenges: [
      {
        title: "Presenting Exhaustive Clause Text Clearly",
        description:
          "Readers needed to view section hierarchy without losing their place in long contracts.",
        solution:
          "Built a sticky breadcrumb sub-header and synchronous table-of-contents sidebar with active scroll spy.",
      },
    ],
    learnings: [
      {
        topic: "Enterprise Content Hierarchy",
        takeaway:
          "Learned how to structure information architecture for technical readers who demand clarity over decoration.",
      },
    ],
    screenshots: [
      {
        url: "/project/edgepilot-tender/screenshot-1.png",
        alt: "EdgePilot Tender Dashboard & Clause Breakdown",
        caption: "Main tender overview displaying categorized clause summaries and deadline tracking.",
      },
      {
        url: "/project/edgepilot-tender/screenshot-2.png",
        alt: "EdgePilot Tender Risk Matrix View",
        caption: "Risk scoring matrix highlighting high-liability contractual terms and damages.",
      },
      {
        url: "/project/edgepilot-tender/screenshot-3.png",
        alt: "EdgePilot Tender Comparative Bid Evaluation",
        caption: "Multi-vendor bid comparison matrix evaluating costs, schedule deviations, and compliance.",
      },
    ],
  },
  
];

export const alsoBuiltProjects: AlsoBuiltProject[] = [
  {
    title: "Healthify+",
    subtitle: "Healthcare management system",
    blurb:
      "A healthcare web app with secure Firebase Authentication, medication reminders, a health journal, breathing exercises, a wellness dashboard and emergency contacts.",
    points: [
      "Firestore stores each user's reminders, journals, profile and chatbot history.",
      "Profile management and password update, in a clean responsive React UI.",
    ],
    stack: ["React.js", "Firebase", "Firestore", "JavaScript", "CSS", "Git"],
    link: {
      href: "https://github.com/Itishanaukudkar11/healthify-plus",
      label: "View on GitHub",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: ProjectItem;
  next: ProjectItem;
} {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;
  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  };
}
