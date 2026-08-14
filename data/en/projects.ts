// ============================================================
//  ENGLISH VERSION of data/projects.ts — keep the exact same shape.
// ============================================================
import type { Project } from "@/data/projects";
import { miniProjects as miniProjectsFr } from "@/data/projects";

export const projects: Project[] = [
  {
    slug: "phaseo",
    featured: true,
    detailed: true,
    githubPrivate: true,
    tag: "★ Flagship project · JBA-Soft internship",
    title: "PHASEO — modernizing an ERP without touching its business core",
    role: "Functional analysis · Architecture · Web development",
    summary:
      "An ERP for local governments, an Oracle backbone refined since 2009, an aging interface to bring to the web. Angular speaks JSON, the backbone expects XML. **The real question wasn't 'which technology', but 'where to place the conversion without endangering years of business rules'.** I recommended keeping the backbone strictly untouched and making the backend a simple gateway — the lowest-risk choice.",
    stack: ["Angular", "Node / Express", "Oracle", "SOAP / XML", "Business analysis"],
    visualLabel: "Screenshot — PHASEO interface",
  },
  {
    slug: "vrp",
    detailed: true,
    github: "https://github.com/fofanadonatien",
    tag: "Capstone project · Team of 6",
    title: "Delivery route optimization (VRP)",
    role: "Spring Boot backend · Grid strategy · Table components",
    summary:
      "A full-stack route-planning application. On the **Spring Boot backend**, I contributed to the layered architecture (JPA entities, REST endpoints, integration tests); on the algorithm side, I implemented the **Grid clustering strategy** to split up to 400 points while respecting API quotas, plus automated data retrieval by day.",
    stack: ["Spring Boot", "JPA / MapStruct", "PostgreSQL", "Angular", "Leaflet", "Integration tests"],
    visualLabel: "Screenshot — map & comparator",
  },
  {
    slug: "supermarche",
    detailed: true,
    github: "https://github.com/fofanadonatien/Analyse_des_ventes_d_un-supermarche",
    tag: "Data project · Business intelligence",
    title: "Supermarket sales analysis",
    role: "Star schema modeling · KPI dashboards · Recommendations",
    summary:
      "Turning raw sales data into decisions. Data cleaning and validation, star schema modeling, margin and performance dashboards. **Concrete result: identified products responsible for around 10% of losses**, backed by recommendations.",
    stack: ["SQL", "Power BI", "Star schema", "Data quality"],
    visualLabel: "Screenshot — KPI dashboard",
  },
];

export const miniProjects: typeof miniProjectsFr = [
  {
    title: "Minimalist language interpreter",
    desc: "Lexical and syntax analysis, abstract syntax tree (AST), symbol table. Written in C.",
    stack: ["C", "Algorithms"],
    github: "https://github.com/fofanadonatien/PROJET-IINTERPRETEUR-DE-LANGAGE-MINIMALISTE",
  },
  {
    title: "Hardware store management",
    desc: "Catalog with tiered pricing and automated warranty management. Written in Java (OOP).",
    stack: ["Java", "OOP"],
    github: "https://github.com/fofanadonatien/PROJET_QUINCAILLERIE_JAVA",
  },
  {
    title: "Equipment loan management",
    desc: "Relational schema, advanced SQL queries and views for tracking overdue returns.",
    stack: ["SQL", "UML"],
    github: "https://github.com/fofanadonatien/projet-gestion-prets-materiels",
  },
];
