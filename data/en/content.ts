// ============================================================
//  ENGLISH VERSION of data/content.ts — keep the exact same shape.
// ============================================================
import {
  skills as skillsFr,
  certifications as certificationsFr,
  recommendation as recommendationFr,
  parcours as parcoursFr,
  lookingFor as lookingForFr,
  contact as contactFr,
  method as methodFr,
  whyErp as whyErpFr,
  ui as uiFr,
} from "@/data/content";

export const skills: typeof skillsFr = [
  {
    title: "ERP & Information Systems",
    key: "// business",
    items: ["Functional analysis", "Requirements gathering", "Business modeling", "ERP integration", "Technical documentation"],
  },
  {
    title: "Architecture & Modeling",
    key: "// design",
    items: ["UML", "Layered architecture", "Database modeling", "Architecture decisions"],
  },
  {
    title: "Data & Business Intelligence",
    key: "// data",
    items: ["SQL", "Oracle", "PostgreSQL", "Power BI", "Star schema modeling", "Data quality"],
  },
  {
    title: "Method & Field Experience",
    key: "// process",
    items: ["Git", "Integration testing", "Team coordination", "Project management"],
  },
  {
    title: "Backend & API",
    key: "// java",
    items: ["Java", "Spring Boot", "JPA / Hibernate", "REST API", "MapStruct", "Node / Express"],
  },
  {
    title: "Frontend",
    key: "// web",
    items: ["Angular", "TypeScript", "RxJS", "HTML / CSS"],
  },
];

export const certifications: typeof certificationsFr = [
  {
    badge: "GDA",
    title: "Google Data Analytics",
    status: "done",
    href: "",
    desc: "The full program: from data preparation and cleaning to visualization and data-driven decision making. I took it to strengthen the 'data' dimension of my IS profile and learn to turn data into a business answer.",
  },
  {
    badge: "GPM",
    title: "Google Project Management",
    status: "wip",
    href: "",
    desc: "The fundamentals of project management: planning, risk management, agile methods. A solid base for scoping ERP evolution projects.",
  },
  {
    badge: "SAP",
    title: "SAP Learning",
    status: "wip",
    href: "",
    desc: "Discovering the SAP ecosystem — modules, terminology, functional logic — to build an ERP culture beyond my experience on PHASEO.",
  },
  {
    badge: "AI",
    title: "Google AI",
    status: "wip",
    href: "",
    desc: "The basics of applied artificial intelligence: use cases, limitations, best practices — to understand where AI fits into an information system.",
  },
  {
    badge: "GPE",
    title: "Google Prompting Essentials",
    status: "wip",
    href: "",
    desc: "Designing effective prompts to use language models in a professional context — analysis, documentation, decision support.",
  },
  {
    badge: "CC",
    title: "Cisco CCNA — Routing & Switching",
    status: "wip",
    href: "",
    desc: "Networking and infrastructure fundamentals, acquired during my applied computer science year. Useful for understanding the technical environment information systems operate in.",
  },
];

export const recommendation: typeof recommendationFr = {
  quote:
    "The goal of building an Angular and Node.js prototype connected to an Oracle database, with a view to rewriting our specialized ERP, was successfully achieved. Donatien first took the time to understand the business and the data model, then set up the development architecture, and left us with detailed documentation. He showed initiative and consideration for his colleagues. I recommend him without hesitation.",
  author: "Antoine Certosio",
  authorRole: "Managing Director — JBA-Soft",
  initials: "AC",
};

export const parcours: typeof parcoursFr = {
  title: "From a road-works site to an Oracle backbone: the same instinct.",
  paragraphs: [
    "On my construction sites in Côte d'Ivoire, I never tore down what was already there — I coordinated teams and moved complex projects forward while respecting the structures already in place. Faced with an ERP carrying years of business rules, I had the exact same instinct: modernize the interface without ever putting what works at risk.",
    "That mindset — understanding the field, talking to the people who know the business, translating their need into a system without breaking everything — is what draws me toward information systems and ERP consulting.",
  ],
};

export const lookingFor: typeof lookingForFr = {
  eyebrow: "What I'm looking for",
  title: "A role where the business matters as much as the technology.",
  paragraph:
    "I want to join a team where I can take part in requirements gathering, functional analysis, and the modernization of information systems — ERP in particular. My goal is to grow into an ERP Consultant / Business Analyst role, building both my functional and technical skills along the way.",
};

export const contact: typeof contactFr = {
  title: "Let's work together",
  paragraph:
    "Looking for an intern who can understand a business need, document their decisions, and help modernize an information system? Let's talk. I'm looking for a 6-month internship in my first Master's year (2027), then a work-study program in my second.",
};

export const method: typeof methodFr = [
  {
    step: "01",
    title: "Understand the need",
    desc: "Listen to business users before writing a line of code. On PHASEO, that meant understanding how local government staff actually worked with the existing system.",
  },
  {
    step: "02",
    title: "Analyze what exists",
    desc: "Map out what already works and why. An Oracle backbone refined since 2009, API quotas on the VRP project: every real constraint has to be identified before designing anything.",
  },
  {
    step: "03",
    title: "Model",
    desc: "Structure the entities, flows, and rules before developing. UML, layered modeling, star schema — laying out the model first makes everything that follows safer.",
  },
  {
    step: "04",
    title: "Design",
    desc: "Choose an architecture that minimizes risk. On PHASEO, that meant keeping the business backbone untouched and making the backend a simple gateway.",
  },
  {
    step: "05",
    title: "Develop",
    desc: "Build within the model and constraints set at the previous step — not the other way around.",
  },
  {
    step: "06",
    title: "Test",
    desc: "Verify that existing behavior isn't broken. Integration tests on endpoints, validation against real data.",
  },
  {
    step: "07",
    title: "Document",
    desc: "Leave a clear trail of the reasoning for whoever picks up the work next. An architecture decision note is often worth more than one extra feature.",
  },
  {
    step: "08",
    title: "Improve",
    desc: "Iterate based on real usage and business feedback. An information system is never finished — it evolves with the organization.",
  },
];

export const whyErp: typeof whyErpFr = {
  eyebrow: "Why ERP?",
  title: "Why I want to make ERP my career.",
  paragraphs: [
    "Before computer science, I worked on public works sites in Côte d'Ivoire — roads and utility networks. I never built on empty ground: I fit into what already existed, coordinated teams, and worked within constraints set before I arrived. That discipline is what pushed me toward business computing, in a MIAGE program.",
    "During my internship at JBA-Soft, I discovered PHASEO, an ERP for local governments whose business engine had been refined for over fifteen years. My job wasn't to impose a new way of doing things, but to understand why each rule existed before proposing a change. I loved exactly that: questioning the business, understanding a complex existing system, and changing only what needed to change.",
    "An ERP is never just software. It's an organization's memory — its business rules, its exceptions, its habits. A consultant's role is to bridge the people who know that business inside out and the people who are going to evolve the system. It's a job of listening as much as of technology.",
    "That's why I'm now aiming for ERP and information systems consulting: a field where I get to keep doing what I've always done — understanding the ground, talking to the people who know it, and moving things forward without breaking them.",
  ],
};

export const ui: typeof uiFr = {
  nav: {
    travaux: "Work",
    competences: "Skills",
    methode: "My approach",
    pourquoiErp: "Why ERP",
    parcours: "Background",
    contact: "Contact me",
    themeToggle: "Toggle theme",
  },
  footer: {
    tagline: "Future ERP / IS Consultant",
    travaux: "Work",
    methode: "My approach",
    pourquoiErp: "Why ERP",
    contact: "Contact",
  },
  carousel: {
    prev: "Previous image",
    next: "Next image",
    placeholder: "(coming soon)",
  },
  home: {
    heroCtaWork: "See my work",
    heroCtaContact: "Contact me",
    workEyebrow: "Selected work",
    workTitle: "Projects that tell a decision.",
    workLead: "Every project follows the same logic: the business context, the problem, the decision made, and what was built.",
    readFullCase: "Read the full case study",
    seeDetail: "See details",
    codeOnGithub: "Code on GitHub",
    privateRepo: "Private repository (client)",
    skillsEyebrow: "Skills",
    skillsTitle: "What I can do, by area.",
    recoEyebrow: "Recommendation",
    recoTitle: "What my internship supervisor says.",
    recoAvailable: "Letter available",
    certsEyebrow: "Certifications",
    certsTitle: "Continuous upskilling.",
    certsFooter: "I regularly build my skills in information systems, project management, data, AI, and SAP technologies to broaden my view of digital projects.",
    parcoursEyebrow: "Background",
    whyErpLink: "Why ERP? →",
    methodLink: "My approach →",
    contactEyebrow: "Contact",
  },
  methodPage: {
    back: "Back to home",
    eyebrow: "My approach",
    title: "The same approach, whatever the project.",
    lead: "Whether it's modernizing an ERP or optimizing a routing algorithm, I apply the same logic: understand before acting, and document what was decided.",
    ctaText: "Want to see this approach applied to a real project?",
    ctaButton: "Read the PHASEO case study",
  },
  whyErpPage: {
    back: "Back to home",
    ctaCase: "Read the PHASEO case study",
    ctaMethod: "My approach",
  },
  caseStudyPage: {
    back: "Back to work",
    overview: "Screenshots",
    capturePlaceholder: "(screenshot coming soon)",
    technologies: "Technologies",
    viewOnGithub: "View on GitHub",
    ctaText: "Does this way of thinking resonate with you?",
    ctaButton: "Contact me",
  },
};
