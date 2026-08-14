// ============================================================
//  ENGLISH VERSION of data/caseStudies.ts — keep the exact same shape
//  and the exact same keys (phaseo, vrp, supermarche) as the French file.
// ============================================================
import type { CaseStudy } from "@/data/caseStudies";

export const caseStudies: Record<string, CaseStudy> = {
  phaseo: {
    slug: "phaseo",
    eyebrow: "Flagship project · Undergraduate internship · JBA-Soft",
    title: "Modernizing an ERP without touching its business core",
    intro:
      "How do you bring an aging management application to the web when its business engine has been refined for over fifteen years, and you're not allowed to introduce the slightest risk?",
    meta: [
      { label: "Context", value: "Internship · ERP vendor for local governments" },
      { label: "Role", value: "Analysis, architecture, web development" },
      { label: "Stack", value: "Angular · Node · Oracle · XML" },
      { label: "Duration", value: "Undergraduate internship, 3rd year" },
    ],
    blocks: [
      {
        heading: "The business context",
        body: [
          "The application handles the day-to-day operations of local governments: contacts, contracts, properties, meters, billing. Its business engine relies on an Oracle database enriched since 2009, carrying years of business rules validated by real-world use.",
          "The legacy interface, a thick client, had to be modernized for the web. My internship's goal: design a first web version (Angular + Node) connected to that database, and lay out the architecture for communication between the two worlds.",
        ],
      },
      {
        heading: "The problem to solve",
        body: [
          "The new Angular frontend naturally speaks JSON. The Oracle business engine, on the other hand, expects its writes in a precise XML format, inherited from the original application.",
          "The real question wasn't 'JSON or XML', but: where in the chain should the conversion happen? Two options were on the table — convert inside Oracle (adding code to the backbone), or convert in the Node backend (leaving the backbone completely untouched).",
        ],
      },
      {
        heading: "The architecture decision",
        body: [
          "I compared the two options against three criteria: the risk to existing business logic, implementation speed, and team autonomy. Adding code to the Oracle backbone, even non-intrusive code, would require external validation for every future change and would touch a critical asset. Doing the translation in Node left the backbone strictly untouched and kept control on the application team's side.",
          "I recommended keeping the JSON ⇄ XML translation in the backend, which acts as a simple gateway to the existing write mechanism. The backbone is neither modified nor duplicated: it receives exactly the format it already knows.",
          "One point I want to highlight, because it sums up how I work: for the call channel, one variant looked faster on paper. I didn't default to it — I flagged it as a hypothesis to validate only after written confirmation that it changed nothing in existing behavior. On a business engine this mature, an unproven shortcut isn't an acceptable risk.",
        ],
      },
      {
        heading: "What was built",
        body: [
          "A first web version of the contact and client management screens (search, detail view, personal information), connected to real data through the backend.",
          "The backend translation layer, which carries data to the existing write engine without holding any business rule itself.",
          "A documented architecture decision note and detailed technical documentation, left with the team at the end of the internship.",
        ],
      },
      {
        heading: "What I took away from it",
        body: [
          "The most useful part wasn't coding screens — it was learning to make a decision under constraint: weighing a risk, refusing an unproven shortcut, and documenting the reasoning for whoever picks up the work next.",
          "That's exactly the posture of an information systems consultant: you rarely build on empty ground — you integrate something new into an existing asset without breaking it.",
        ],
      },
    ],
    stack: ["Angular", "TypeScript", "Node / Express", "Oracle", "SOAP / XML", "Functional analysis"],
    captures: [
      { label: "Legacy interface (thick client)" },
      { label: "Angular web interface" },
      { label: "Oracle database structure" },
      { label: "XML exchange example" },
      { label: "Architecture diagram" },
      { label: "Flow diagram" },
      { label: "Technical documentation excerpt" },
      { label: "Code excerpt" },
      { label: "Application demo" },
    ],
    repoLabel: "Private repository",
    repoNote:
      "The code stays private out of respect for client confidentiality. The screenshots use demo data.",
  },

  vrp: {
    slug: "vrp",
    eyebrow: "Capstone project · Team of 6 · MIAGE",
    title: "Optimizing delivery routes, from backend to algorithm",
    intro:
      "A full-stack team project: planning vehicle routes across hundreds of points, while working around the limits of free APIs. My contribution focused on the Spring Boot backend and the Grid optimization strategy.",
    meta: [
      { label: "Context", value: "Academic capstone project (6 people)" },
      { label: "My role", value: "Spring Boot backend · Grid strategy · table UI" },
      { label: "Stack", value: "Spring Boot · Angular · PostgreSQL" },
      { label: "Type", value: "Full-stack application" },
    ],
    blocks: [
      {
        heading: "The problem",
        body: [
          "The application generates delivery scenarios and compares route optimization strategies (Vehicle Routing Problem) across a large number of points — up to 400 — around Grenoble.",
          "The main difficulty came from the limits of free optimization APIs: a capped number of points per request, throttling after too many requests, failures on long routes. Sending all the points at once simply wasn't possible.",
        ],
      },
      {
        heading: "My contribution",
        body: [
          "On the Spring Boot backend, I contributed to the domain's layered architecture: JPA entities (customers, orders, products, routes, days, deliveries...), documented REST endpoints, mappers, and integration tests on the controllers.",
          "On the algorithm side, I implemented the 'Grid' clustering strategy: the map is split into a grid, and points within the same cell are grouped together. It's the fast, geometrically coherent approach, benchmarked alongside a greedy strategy.",
          "I also worked on the table interface components and on automating data retrieval based on the selected day.",
        ],
      },
      {
        heading: "The technical approach",
        body: [
          "To stay within the quotas, the process splits the overall problem into smaller point groups, adds a fixed depot to each group for route consistency, and introduces delays between API calls to avoid throttling. A straight-line fallback guarantees the display never breaks if a route trace fails.",
        ],
      },
      {
        heading: "What I took away from it",
        body: [
          "Working with six people on the same codebase taught me as much as the technical side: splitting responsibilities, shared conventions, integrating each part. And on the backend, structuring a domain cleanly in layers with tests makes the whole thing maintainable — a skill that transfers directly to an ERP context.",
        ],
      },
    ],
    stack: ["Spring Boot", "JPA / Hibernate", "MapStruct", "PostgreSQL", "Angular", "Leaflet", "Integration tests"],
    captures: [
      { label: "Home screen" },
      { label: "Leaflet route map" },
      { label: "Grid vs Greedy comparator" },
      { label: "Architecture diagram" },
      { label: "Domain UML diagram" },
      { label: "Spring Boot backend overview" },
      { label: "REST API endpoints" },
      { label: "Optimization result" },
    ],
    repoLabel: "Team project",
    repoNote: "Built as a team of 6. The contributions described here are my own.",
    repoUrl: "https://github.com/fofanadonatien",
  },

  supermarche: {
    slug: "supermarche",
    eyebrow: "Personal project · Data Analyst / BI",
    title: "Turning raw sales data into business decisions",
    intro:
      "A four-year dataset of sales, promotions, and losses, modeled and turned into a Power BI dashboard to answer a simple question: where is money actually being made, and where is it being lost?",
    meta: [
      { label: "Context", value: "Personal project · Data Analyst / BI" },
      { label: "Role", value: "Modeling, DAX, dashboards, recommendations" },
      { label: "Stack", value: "Power BI · DAX · Power Query" },
      { label: "Data", value: "Kaggle-style dataset (2020-2023 sales)" },
    ],
    blocks: [
      {
        heading: "The context",
        body: [
          "This project analyzes a supermarket's commercial performance using four raw datasets: sales, products/categories, promotions, and per-store losses, covering 2020-2023.",
          "The goal wasn't to produce nice-looking charts, but to answer concrete management questions: which products are profitable, do promotions actually help margin, and where are losses concentrated?",
        ],
      },
      {
        heading: "The problem",
        body: [
          "The raw data couldn't answer any of these questions directly: revenue says nothing about profitability, sales volume says nothing about a promotion's real effect, and losses weren't measured against the revenue of the products involved.",
          "The data had to be cleaned and modeled first — the dashboard only came after.",
        ],
      },
      {
        heading: "My approach",
        body: [
          "Cleaning and transforming the four sources in Power Query, then modeling a star schema to link sales, products, promotions, and losses.",
          "Writing DAX measures to answer management questions directly: revenue, gross margin, promotion ROI, loss rate, and the top products' contribution to total margin.",
          "Building the Power BI dashboards from these measures, designed for decision-making rather than exhaustiveness.",
        ],
      },
      {
        heading: "What the numbers showed",
        body: [
          "Over the period: €3.37M in revenue (+20.6%), an average gross margin of 36.91%, and an overall loss rate of 9.97%.",
          "The 10 best-performing products generate 65% of total margin — a strong concentration of profitability in a small number of items.",
          "45% of promotions don't improve profitability despite higher sales volumes. Losses, meanwhile, are concentrated mostly on perishable fresh products.",
        ],
      },
      {
        heading: "Recommendations",
        body: [
          "Target promotions on higher-margin products rather than volume, adjust order quantities to limit unsold stock on perishable items, and train staff on managing returns and losses.",
        ],
      },
      {
        heading: "What I took away from it",
        body: [
          "The most useful part wasn't building visuals — it was getting the data model right before querying it. A poorly designed star schema would have made every DAX measure unreliable.",
          "That's a skill that transfers directly to BI work in an ERP context: before reporting a figure, you need to understand how it's produced and what it actually represents.",
        ],
      },
    ],
    stack: ["Power BI", "DAX", "Power Query", "Star schema modeling", "Business analysis"],
    captures: [
      { label: "Dashboard overview" },
      { label: "Power BI visuals (revenue, margin, losses)" },
      { label: "Data model and queries" },
      { label: "Star schema model" },
      { label: "Data cleaning (Power Query)" },
      { label: "Key KPIs (revenue, margin, loss rate)" },
      { label: "Business recommendations" },
    ],
    repoLabel: "Personal project",
    repoNote: "Public Kaggle-style dataset, cleaned and modeled for this project.",
    repoUrl: "https://github.com/fofanadonatien/Analyse_des_ventes_d_un-supermarche",
  },
};
