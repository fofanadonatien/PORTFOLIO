// ============================================================
//  COMPÉTENCES / CERTIFS / RECO / PARCOURS
//  Pour ajouter une certif : copie un bloc dans `certifications`.
// ============================================================

export const skills = [
  {
    title: "ERP & Systèmes d'information",
    key: "// métier",
    items: ["Analyse fonctionnelle", "Recueil du besoin", "Modélisation métier", "Intégration ERP", "Documentation technique"],
  },
  {
    title: "Architecture & Modélisation",
    key: "// design",
    items: ["UML", "Architecture en couches", "Modélisation BDD", "Choix d'architecture"],
  },
  {
    title: "Données & Décisionnel",
    key: "// data",
    items: ["SQL", "Oracle", "PostgreSQL", "Power BI", "Modélisation en étoile", "Data quality"],
  },
  {
    title: "Méthode & Terrain",
    key: "// projet",
    items: ["Git", "Tests d'intégration", "Coordination d'équipe", "Gestion de projet"],
  },
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
];

// status: "done" (validé) ou "wip" (en cours)
// href : lien de vérification du certificat — à ajouter plus tard, laisse "" en attendant.
export const certifications = [
  {
    badge: "GDA",
    title: "Google Data Analytics",
    status: "done",
    href: "",
    desc: "Le programme complet : de la préparation et du nettoyage des données jusqu'à la visualisation et la prise de décision fondée sur les données. Suivi pour ancrer la dimension « data » de mon profil SI et savoir transformer une donnée en réponse métier.",
  },
  {
    badge: "GPM",
    title: "Google Project Management",
    status: "wip",
    href: "",
    desc: "Les fondamentaux de la gestion de projet : planification, pilotage des risques, méthodes agiles. Une base directement utile pour cadrer des projets d'évolution ERP.",
  },
  {
    badge: "SAP",
    title: "SAP Learning",
    status: "wip",
    href: "",
    desc: "Découverte de l'écosystème SAP — modules, terminologie, logique fonctionnelle — pour construire une culture ERP au-delà de mon expérience sur PHASEO.",
  },
  {
    badge: "AI",
    title: "Google AI",
    status: "wip",
    href: "",
    desc: "Les bases de l'intelligence artificielle appliquée : cas d'usage, limites, bonnes pratiques — pour comprendre où l'IA a sa place dans un système d'information.",
  },
  {
    badge: "GPE",
    title: "Google Prompting Essentials",
    status: "wip",
    href: "",
    desc: "Concevoir des prompts efficaces pour exploiter des modèles de langage dans un contexte professionnel — analyse, documentation, aide à la décision.",
  },
  {
    badge: "CC",
    title: "Cisco CCNA — Routing & Switching",
    status: "wip",
    href: "",
    desc: "Fondamentaux des réseaux et de l'infrastructure, acquis pendant mon année d'informatique appliquée. Utile pour comprendre l'environnement technique dans lequel s'inscrivent les systèmes d'information.",
  },
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

export const lookingFor = {
  eyebrow: "Ce que je recherche",
  title: "Un poste où le métier compte autant que la technique.",
  paragraph:
    "Je souhaite rejoindre une équipe où je pourrai participer au recueil du besoin, à l'analyse fonctionnelle et à la modernisation de systèmes d'information — ERP en particulier. Mon objectif est d'évoluer vers un poste de consultant ERP / Business Analyst, en construisant progressivement mes compétences fonctionnelles autant que techniques.",
};

export const contact = {
  title: "Travaillons ensemble",
  paragraph:
    "Vous cherchez un stagiaire capable de comprendre un besoin métier, de documenter ses choix et de participer à la modernisation d'un système d'information ? Échangeons. Je recherche un stage de 6 mois en M1 (2027), puis une alternance en M2.",
};

// Page /methode — la démarche appliquée sur PHASEO et le VRP, généralisée.
export const method = [
  {
    step: "01",
    title: "Comprendre le besoin",
    desc: "Écouter les utilisateurs métier avant d'écrire une ligne de code. Sur PHASEO, ça voulait dire comprendre comment les agents des collectivités travaillaient réellement avec l'existant.",
  },
  {
    step: "02",
    title: "Analyser l'existant",
    desc: "Cartographier ce qui fonctionne déjà et pourquoi. Un socle Oracle affiné depuis 2009, des quotas d'API sur le VRP : chaque contrainte réelle doit être identifiée avant de concevoir quoi que ce soit.",
  },
  {
    step: "03",
    title: "Modéliser",
    desc: "Structurer les entités, les flux et les règles avant de développer. UML, modélisation en couches, schéma en étoile — poser le modèle rend la suite plus sûre.",
  },
  {
    step: "04",
    title: "Concevoir",
    desc: "Choisir une architecture qui minimise le risque. Sur PHASEO, ça a voulu dire garder le socle métier intact et faire du backend une simple passerelle.",
  },
  {
    step: "05",
    title: "Développer",
    desc: "Construire dans le respect du modèle et des contraintes posées à l'étape précédente — pas l'inverse.",
  },
  {
    step: "06",
    title: "Tester",
    desc: "Vérifier que le comportement existant n'est pas cassé. Tests d'intégration sur les endpoints, validation sur des données réelles.",
  },
  {
    step: "07",
    title: "Documenter",
    desc: "Laisser une trace claire du raisonnement pour l'équipe qui reprend le travail. Une note de décision d'architecture vaut souvent plus qu'une fonctionnalité de plus.",
  },
  {
    step: "08",
    title: "Améliorer",
    desc: "Itérer à partir de l'usage réel et des retours métier. Un système d'information n'est jamais fini — il évolue avec l'organisation.",
  },
];

// Tous les petits textes d'interface (boutons, titres de section fixes, aria-labels)
// qui ne vivent pas déjà dans un objet de contenu ci-dessus.
export const ui = {
  nav: {
    travaux: "Travaux",
    competences: "Compétences",
    methode: "Ma méthode",
    pourquoiErp: "Pourquoi les ERP",
    parcours: "Parcours",
    contact: "Me contacter",
    themeToggle: "Changer de thème",
  },
  footer: {
    tagline: "Futur consultant ERP / SI",
    travaux: "Travaux",
    methode: "Ma méthode",
    pourquoiErp: "Pourquoi les ERP",
    contact: "Contact",
  },
  carousel: {
    prev: "Image précédente",
    next: "Image suivante",
    placeholder: "(à intégrer)",
  },
  home: {
    heroCtaWork: "Voir mes travaux",
    heroCtaContact: "Me contacter",
    workEyebrow: "Travaux sélectionnés",
    workTitle: "Des projets qui racontent une décision.",
    workLead: "Chaque projet suit la même logique : le contexte métier, le problème, la décision prise, et ce qui a été construit.",
    readFullCase: "Lire l'étude de cas complète",
    seeDetail: "Voir le détail",
    codeOnGithub: "Code sur GitHub",
    privateRepo: "Dépôt privé (client)",
    skillsEyebrow: "Compétences",
    skillsTitle: "Ce que je sais faire, par domaine.",
    recoEyebrow: "Recommandation",
    recoTitle: "Ce qu'en dit mon tuteur de stage.",
    recoAvailable: "Lettre disponible",
    certsEyebrow: "Certifications",
    certsTitle: "Une montée en compétences continue.",
    certsFooter: "Je complète régulièrement mes compétences en systèmes d'information, gestion de projet, data, IA et technologies SAP afin d'élargir ma vision des projets numériques.",
    parcoursEyebrow: "Parcours",
    whyErpLink: "Pourquoi les ERP ? →",
    methodLink: "Ma façon de travailler →",
    contactEyebrow: "Contact",
  },
  methodPage: {
    back: "Retour à l'accueil",
    eyebrow: "Ma façon de travailler",
    title: "Une même démarche, quel que soit le projet.",
    lead: "Que ce soit pour moderniser un ERP ou optimiser un algorithme de tournées, j'applique la même logique : comprendre avant d'agir, et documenter ce qui a été décidé.",
    ctaText: "Voir cette démarche appliquée sur un vrai projet ?",
    ctaButton: "Lire l'étude de cas PHASEO",
  },
  whyErpPage: {
    back: "Retour à l'accueil",
    ctaCase: "Lire l'étude de cas PHASEO",
    ctaMethod: "Ma façon de travailler",
  },
  caseStudyPage: {
    back: "Retour aux travaux",
    overview: "Aperçus",
    capturePlaceholder: "(capture à intégrer)",
    technologies: "Technologies",
    viewOnGithub: "Voir sur GitHub",
    ctaText: "Ce type de raisonnement vous parle ?",
    ctaButton: "Me contacter",
  },
};

// Page /pourquoi-erp — le fil entre le BTP, PHASEO et le conseil en SI.
export const whyErp = {
  eyebrow: "Pourquoi les ERP ?",
  title: "Pourquoi je veux faire des ERP mon métier.",
  paragraphs: [
    "Avant l'informatique, j'ai travaillé sur des chantiers de travaux publics en Côte d'Ivoire — voirie et réseaux divers. Je ne construisais jamais sur un terrain vide : je m'insérais dans un existant, je coordonnais des équipes, je respectais des contraintes posées avant moi. C'est cette discipline qui m'a poussé vers l'informatique de gestion, en MIAGE.",
    "Pendant mon stage chez JBA-Soft, j'ai découvert PHASEO, un ERP pour collectivités dont le moteur métier avait été affiné pendant plus de quinze ans. Ma mission n'était pas d'imposer une nouvelle façon de faire, mais de comprendre pourquoi chaque règle existait avant de proposer une évolution. J'ai aimé exactement ça : interroger le métier, comprendre un existant complexe, et ne changer que ce qui devait l'être.",
    "Un ERP n'est jamais qu'un logiciel. C'est la mémoire d'une organisation — ses règles de gestion, ses exceptions, ses habitudes. Le rôle du consultant est de faire le pont entre ceux qui connaissent ce métier sur le bout des doigts et ceux qui vont faire évoluer le système. C'est un métier d'écoute autant que de technique.",
    "C'est pour ça que je vise aujourd'hui le conseil en ERP et systèmes d'information : un métier où je peux continuer à faire ce que j'ai toujours fait — comprendre un terrain, parler aux gens qui le connaissent, et faire avancer les choses sans tout casser.",
  ],
};
