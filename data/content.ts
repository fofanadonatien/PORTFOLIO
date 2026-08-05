// ============================================================
//  COMPÉTENCES / CERTIFS / RECO / PARCOURS
//  Pour ajouter une certif : copie un bloc dans `certifications`.
// ============================================================

export const skills = [
  {
    title: "Backend & API",
    key: "// java",
    items: ["Java", "Spring Boot", "JPA / Hibernate", "API REST", "MapStruct", "Node / Express"],
  },
  {
    title: "Frontend",
    key: "// web",
    items: ["Angular", "TypeScript", "RxJS", "HTML / CSS"],
  },
  {
    title: "ERP & Systèmes d'information",
    key: "// métier",
    items: ["Analyse fonctionnelle", "Modélisation métier", "Intégration ERP", "Documentation technique"],
  },
  {
    title: "Données & Décisionnel",
    key: "// data",
    items: ["SQL", "Oracle", "PostgreSQL", "Power BI", "Modélisation en étoile", "Data quality"],
  },
  {
    title: "Architecture & Modélisation",
    key: "// design",
    items: ["UML", "Architecture en couches", "Modélisation BDD", "Choix d'architecture"],
  },
  {
    title: "Méthode & Terrain",
    key: "// projet",
    items: ["Git", "Tests d'intégration", "Coordination d'équipe", "Gestion de projet"],
  },
];

// status: "done" (validé) ou "wip" (en cours)
export const certifications = [
  {
    badge: "G",
    title: "Google Data Analytics",
    statusLabel: "7 cours validés",
    status: "done",
    desc: "Le programme complet : de la préparation et du nettoyage des données jusqu'à la visualisation et la prise de décision fondée sur les données. Suivi pour ancrer la dimension « data » de mon profil SI et savoir transformer une donnée en réponse métier.",
  },
  {
    badge: "CC",
    title: "Cisco CCNA — Routing & Switching",
    statusLabel: "modules validés",
    status: "wip",
    desc: "Fondamentaux des réseaux et de l'infrastructure, acquis pendant mon année d'informatique appliquée. Utile pour comprendre l'environnement technique dans lequel s'inscrivent les systèmes d'information.",
  },
  // ── Pour ajouter ta future certif SAP, décommente et adapte ce bloc : ──
  // {
  //   badge: "SAP",
  //   title: "SAP — Module MM (Materials Management)",
  //   statusLabel: "en préparation",
  //   status: "wip",
  //   desc: "Description de ce que tu as appris et pourquoi tu l'as suivie.",
  // },
];

export const recommendation = {
  quote:
    "L'objectif de développer une maquette en Angular et Node.js avec une connexion à une base Oracle, en vue de réécrire notre ERP spécialisé, a été réalisé avec succès. Donatien a d'abord su appréhender le métier et le modèle de données, puis mettre en place l'architecture de développement, et nous a quittés en laissant une documentation détaillée. Il a fait preuve d'initiative et d'attention envers ses collègues. Je le recommande sans hésitation.",
  author: "Antoine Certosio",
  authorRole: "Gérant — JBA-Soft",
  initials: "AC",
};

export const parcours = {
  title: "D'un chantier de VRD à un socle Oracle : le même réflexe.",
  paragraphs: [
    "Sur mes chantiers en Côte d'Ivoire, je ne démolissais pas l'existant — je coordonnais des équipes et faisais avancer des projets complexes en respectant les structures en place. Face à un ERP qui porte des années de règles métier, j'ai eu exactement le même réflexe : moderniser l'interface sans jamais mettre en danger ce qui fonctionne.",
    "C'est ce tempérament — comprendre le terrain, parler aux gens du métier, traduire leur besoin en système sans tout casser — qui me porte vers le conseil en systèmes d'information et les ERP.",
  ],
};
