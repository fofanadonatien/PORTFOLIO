// ============================================================
//  PROJETS — pour ajouter un projet, copie un bloc et adapte-le.
//  `slug` = l'adresse de la page détaillée (ex: /projets/phaseo).
//  Mets `detailed: true` seulement si tu écris une page complète.
// ============================================================

export type Project = {
  slug: string;
  featured?: boolean;
  detailed?: boolean;
  tag: string;
  tagFlag?: boolean;
  title: string;
  role: string;
  summary: string; // affiché sur la carte d'accueil
  stack: string[];
  visualLabel: string; // légende du placeholder capture
  github?: string; // lien vers le dépôt (si public)
  githubPrivate?: boolean; // true = dépôt privé, pas de lien
};

export const projects: Project[] = [
  {
    slug: "phaseo",
    featured: true,
    detailed: true,
    githubPrivate: true,
    tag: "★ Projet phare · Stage JBA-Soft",
    title: "PHASEO — moderniser un ERP sans toucher au cœur métier",
    role: "Analyse fonctionnelle · Architecture · Développement web",
    summary:
      "Un ERP pour collectivités, un socle Oracle affiné depuis 2009, une interface vieillissante à passer sur le web. Angular parle JSON, le socle attend du XML. **La vraie question n'était pas « quelle techno », mais « où placer la conversion sans mettre en danger des années de règles métier ».** J'ai recommandé de garder le socle strictement intact et de faire du backend une simple passerelle — le choix du risque minimal.",
    stack: ["Angular", "Node / Express", "Oracle", "SOAP / XML", "Analyse métier"],
    visualLabel: "Capture — interface PHASEO",
  },
  {
    slug: "vrp",
    detailed: true,
    // ⚠️ Remplace par l'URL de ton dépôt public une fois créé :
    github: "https://github.com/fofanadonatien",
    tag: "Projet intégrateur · Équipe de 6",
    title: "Optimisation de tournées de livraison (VRP)",
    role: "Backend Spring Boot · Stratégie Grid · Composants tableau",
    summary:
      "Une application full-stack de planification de tournées. Côté **backend Spring Boot**, j'ai contribué à l'architecture en couches (entités JPA, endpoints REST, tests d'intégration) ; côté algorithme, j'ai implémenté la **stratégie de clustering Grid** pour découper jusqu'à 400 points en respectant les quotas d'API, plus l'automatisation de la récupération des données par journée.",
    stack: ["Spring Boot", "JPA / MapStruct", "PostgreSQL", "Angular", "Leaflet", "Tests IT"],
    visualLabel: "Capture — carte & comparateur",
  },
  {
    slug: "supermarche",
    detailed: false,
    github: "https://github.com/fofanadonatien/Analyse_des_ventes_d_un-supermarche",
    tag: "Projet data · Décisionnel",
    title: "Analyse des ventes d'un supermarché",
    role: "Modélisation en étoile · Dashboards KPI · Recommandations",
    summary:
      "Transformer des données de ventes brutes en décisions. Nettoyage et validation des données, modélisation en schéma en étoile, dashboards de marges et de performance. **Résultat concret : identification de produits responsables d'environ 10 % des pertes**, avec recommandations à l'appui.",
    stack: ["SQL", "Power BI", "Schéma en étoile", "Data quality"],
    visualLabel: "Capture — dashboard KPI",
  },
];

// Projets secondaires (grille compacte, lien direct GitHub)
export const miniProjects = [
  {
    title: "Interpréteur de langage minimaliste",
    desc: "Analyse lexicale et syntaxique, arbre syntaxique (AST), table des symboles. En C.",
    stack: ["C", "Algorithmique"],
    github: "https://github.com/fofanadonatien/PROJET-IINTERPRETEUR-DE-LANGAGE-MINIMALISTE",
  },
  {
    title: "Gestion de quincaillerie",
    desc: "Catalogue avec tarification différenciée et gestion automatisée des garanties. En Java (POO).",
    stack: ["Java", "POO"],
    github: "https://github.com/fofanadonatien/PROJET_QUINCAILLERIE_JAVA",
  },
  {
    title: "Gestion de prêts de matériel",
    desc: "Schéma relationnel, requêtes SQL avancées et vues pour le suivi des retards.",
    stack: ["SQL", "UML"],
    github: "https://github.com/fofanadonatien/projet-gestion-prets-materiels",
  },
];
