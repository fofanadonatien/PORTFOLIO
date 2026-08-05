// ============================================================
//  ÉTUDES DE CAS DÉTAILLÉES (pages /projets/[slug])
//  Structure : contexte → problème → décision → réalisé → appris
//  IMPORTANT : ne jamais exposer d'identifiants ou de noms
//  internes précis du client. On décrit le raisonnement.
// ============================================================

export type CaseBlock = { heading: string; body: string[] };
export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  meta: { label: string; value: string }[];
  blocks: CaseBlock[];
  stack: string[];
  captures: { label: string }[]; // emplacements pour tes captures
  repoLabel?: string;
  repoNote?: string;
  repoUrl?: string; // lien cliquable si le dépôt est public
};

export const caseStudies: Record<string, CaseStudy> = {
  phaseo: {
    slug: "phaseo",
    eyebrow: "Projet phare · Stage de licence · JBA-Soft",
    title: "Moderniser un ERP sans toucher au cœur métier",
    intro:
      "Comment faire passer sur le web une application de gestion vieillissante, quand son moteur métier a été affiné pendant plus de quinze ans et qu'on n'a pas le droit d'y introduire le moindre risque.",
    meta: [
      { label: "Contexte", value: "Stage · éditeur d'ERP pour collectivités" },
      { label: "Rôle", value: "Analyse, architecture, développement web" },
      { label: "Stack", value: "Angular · Node · Oracle · XML" },
      { label: "Durée", value: "Stage de 3e année de licence" },
    ],
    blocks: [
      {
        heading: "Le contexte métier",
        body: [
          "L'application gère le quotidien de collectivités locales : interlocuteurs, contrats, propriétés, compteurs, facturation. Son moteur métier repose sur une base Oracle enrichie depuis 2009, portant des années de règles de gestion validées par l'usage.",
          "L'interface historique, en client lourd, devait être modernisée vers le web. L'objectif de mon stage : concevoir une première version web (Angular + Node) connectée à cette base, et poser l'architecture de communication entre les deux mondes.",
        ],
      },
      {
        heading: "Le problème à résoudre",
        body: [
          "Le nouveau frontend Angular communique naturellement en JSON. Le moteur métier Oracle, lui, attend ses écritures dans un format XML précis, hérité de l'application d'origine.",
          "La vraie question n'était donc pas « JSON ou XML », mais : à quel endroit de la chaîne placer la conversion ? Deux options s'affrontaient — convertir à l'intérieur d'Oracle (en ajoutant du code au socle), ou convertir dans le backend Node (en laissant le socle totalement intact.)",
        ],
      },
      {
        heading: "La décision d'architecture",
        body: [
          "J'ai comparé les deux options selon trois critères : le risque sur la logique métier existante, la vitesse de mise en œuvre, et l'autonomie de l'équipe. Ajouter du code au socle Oracle, même non intrusif, imposait une validation externe à chaque évolution et touchait un patrimoine critique. Faire la traduction dans Node laissait le socle strictement intact et gardait la main côté équipe applicative.",
          "J'ai recommandé de conserver la traduction JSON ⇄ XML dans le backend, qui joue le rôle de simple passerelle vers le mécanisme d'écriture existant. Le socle n'est ni modifié ni dupliqué : il reçoit exactement le format qu'il connaît déjà.",
          "Point que je tiens à souligner, parce qu'il résume ma façon de travailler : pour le canal d'appel, une variante paraissait plus rapide sur le papier. Je ne l'ai pas retenue par défaut — je l'ai classée comme hypothèse à ne valider qu'après confirmation écrite qu'elle ne changeait rien au comportement existant. Sur un moteur métier de cette ancienneté, un risque non prouvé n'est pas un raccourci acceptable.",
        ],
      },
      {
        heading: "Ce qui a été construit",
        body: [
          "Une première version web des écrans de gestion des interlocuteurs et clients (recherche, fiche détaillée, informations), connectée aux données réelles via le backend.",
          "La couche de traduction côté backend, qui transporte les données vers le moteur d'écriture existant sans porter de règle métier.",
          "Une note de décision d'architecture argumentée et une documentation technique détaillée, laissées à l'équipe à la fin du stage.",
        ],
      },
      {
        heading: "Ce que j'en retiens",
        body: [
          "Le plus utile n'a pas été de coder des écrans, mais d'apprendre à poser une décision sous contrainte : peser un risque, refuser une facilité non prouvée, et documenter le raisonnement pour ceux qui reprendront le travail.",
          "C'est exactement la posture d'un consultant en systèmes d'information : on module rarement du neuf sur du vide — on intègre le nouveau au patrimoine existant sans le briser.",
        ],
      },
    ],
    stack: ["Angular", "TypeScript", "Node / Express", "Oracle", "SOAP / XML", "Analyse fonctionnelle"],
    captures: [
      { label: "Écran de recherche d'interlocuteurs" },
      { label: "Fiche détaillée d'un client" },
      { label: "Vue des informations personnelles" },
    ],
    repoLabel: "Dépôt privé",
    repoNote:
      "Le code reste privé par respect de la confidentialité du client. Les captures utilisent des données de démonstration.",
  },

  vrp: {
    slug: "vrp",
    eyebrow: "Projet intégrateur · Équipe de 6 · MIAGE",
    title: "Optimiser des tournées de livraison, du backend à l'algorithme",
    intro:
      "Un projet d'équipe full-stack : planifier des tournées de véhicules sur des centaines de points, en composant avec les limites d'API gratuites. Ma contribution portait sur le backend Spring Boot et sur la stratégie d'optimisation Grid.",
    meta: [
      { label: "Contexte", value: "Projet intégrateur académique (6 personnes)" },
      { label: "Mon rôle", value: "Backend Spring Boot · stratégie Grid · UI tableau" },
      { label: "Stack", value: "Spring Boot · Angular · PostgreSQL" },
      { label: "Nature", value: "Application full-stack" },
    ],
    blocks: [
      {
        heading: "Le problème",
        body: [
          "L'application génère des scénarios de livraison et compare des stratégies d'optimisation de tournées (Vehicle Routing Problem) sur un grand nombre de points, jusqu'à 400, autour de Grenoble.",
          "La difficulté principale venait des limites des API gratuites d'optimisation : nombre de points par requête plafonné, blocages en cas de trop de requêtes, échecs sur les longs itinéraires. Impossible d'envoyer tous les points d'un coup.",
        ],
      },
      {
        heading: "Ma contribution",
        body: [
          "Côté backend Spring Boot, j'ai participé à l'architecture en couches du domaine : entités JPA (clients, commandes, produits, tournées, journées, livraisons…), endpoints REST documentés, mappers, et tests d'intégration sur les contrôleurs.",
          "Côté algorithme, j'ai implémenté la stratégie de clustering « Grid » : la carte est découpée en une grille, et les points d'une même case sont regroupés. C'est l'approche rapide et géométriquement cohérente, comparée en parallèle à une stratégie gloutonne.",
          "J'ai aussi travaillé sur les composants d'interface en tableau et sur l'automatisation de la récupération des données selon la journée sélectionnée.",
        ],
      },
      {
        heading: "L'approche technique",
        body: [
          "Pour tenir les quotas, le traitement découpe le problème global en sous-groupes de points, ajoute un dépôt fixe à chaque groupe pour la cohérence des tournées, et introduit des temporisations entre les appels pour éviter les blocages. Un repli en ligne droite garantit que l'affichage ne casse jamais si un tracé échoue.",
        ],
      },
      {
        heading: "Ce que j'en retiens",
        body: [
          "Travailler à six sur une même base de code m'a appris autant que la technique : découpage des responsabilités, conventions communes, intégration des parties. Et côté back, structurer proprement un domaine en couches avec des tests rend le tout maintenable — une compétence directement transférable à un contexte ERP.",
        ],
      },
    ],
    stack: ["Spring Boot", "JPA / Hibernate", "MapStruct", "PostgreSQL", "Angular", "Leaflet", "Tests d'intégration"],
    captures: [
      { label: "Carte des tournées optimisées" },
      { label: "Comparateur de stratégies" },
    ],
    repoLabel: "Projet d'équipe",
    repoNote:
      "Projet réalisé en groupe de 6. Les contributions décrites ici sont les miennes.",
    repoUrl: "https://github.com/fofanadonatien", // ⚠️ remplace par l'URL du dépôt public une fois créé
  },
};
