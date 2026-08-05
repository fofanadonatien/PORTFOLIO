# Documentation complète du portfolio

Ce document explique **tout** le projet, du premier fichier au dernier, pour quelqu'un qui n'a jamais fait de React/Next.js. L'objectif : que tu puisses, un jour, relire ce fichier et reconstruire un site comme celui-ci toi-même, en comprenant *pourquoi* chaque chose existe, pas seulement *où* la trouver.

Il complète `GUIDE.md` (qui explique comment lancer/modifier/déployer rapidement, sans comprendre le code). Ici, on ouvre le capot.

---

## Sommaire

1. [Vue d'ensemble : c'est quoi, ce projet ?](#1-vue-densemble--cest-quoi-ce-projet-)
2. [Les concepts à connaître avant de lire le code](#2-les-concepts-à-connaître-avant-de-lire-le-code)
3. [L'arborescence complète, expliquée](#3-larborescence-complète-expliquée)
4. [Le principe central : données séparées de l'affichage](#4-le-principe-central--données-séparées-de-laffichage)
5. [Les fichiers de données (`data/`), un par un](#5-les-fichiers-de-données-data-un-par-un)
6. [Les composants réutilisables (`components/`), un par un](#6-les-composants-réutilisables-components-un-par-un)
7. [Les pages (`app/`), une par une](#7-les-pages-app-une-par-une)
8. [Le design system (`app/globals.css`)](#8-le-design-system-appglobalscss)
9. [Les fichiers de configuration](#9-les-fichiers-de-configuration)
10. [Comment tout s'articule (le schéma général)](#10-comment-tout-sarticule-le-schéma-général)
11. [Lancer, modifier, déployer — en bref](#11-lancer-modifier-déployer--en-bref)
12. [Reconstruire ce projet depuis zéro](#12-reconstruire-ce-projet-depuis-zéro)
13. [Glossaire](#13-glossaire)

---

## 1. Vue d'ensemble : c'est quoi, ce projet ?

C'est un **site web personnel** (portfolio) présentant trois études de cas de projets (PHASEO, VRP, analyse de ventes), des compétences, des certifications, et un formulaire de contact. Il tourne avec ces outils :

| Outil | Rôle | Analogie |
|---|---|---|
| **Next.js** | Framework qui organise le site en pages, gère le routage, génère le HTML | La charpente de la maison |
| **React** | Bibliothèque pour construire l'interface avec des « composants » réutilisables | Les briques préfabriquées |
| **TypeScript** | Version de JavaScript qui vérifie les types (évite des erreurs bêtes) | Un correcteur orthographique, mais pour le code |
| **Tailwind CSS** | Bibliothèque de style : on écrit des classes courtes (`text-[15px]`) plutôt que du CSS séparé | La peinture et la déco, appliquées directement sur chaque brique |

Le site est **statique** : à la construction (`npm run build`), Next.js génère à l'avance tout le HTML de chaque page. Il n'y a pas de base de données, pas de serveur qui tourne en continu — juste des fichiers HTML/CSS/JS servis tels quels. C'est rapide, gratuit à héberger (Vercel), et largement suffisant pour un portfolio.

---

## 2. Les concepts à connaître avant de lire le code

### 2.1 Composant

Un **composant** est une fonction JavaScript qui retourne du HTML "augmenté" (voir JSX ci-dessous). C'est un bloc réutilisable : un bouton, une carte, une page entière.

```tsx
function Bonjour() {
  return <p>Bonjour !</p>;
}
```

`Bonjour` est un composant. On l'utilise ensuite comme une balise HTML : `<Bonjour />`.

### 2.2 JSX

Le mélange de JavaScript et de balises façon HTML que tu vois dans les fichiers `.tsx` s'appelle **JSX**. Ce n'est pas du HTML : c'est transformé en JavaScript au moment de la compilation. Différences à retenir :
- `class` devient `className` (parce que `class` est un mot réservé en JavaScript)
- On peut injecter du JavaScript avec des accolades : `<p>{profile.name}</p>` affiche la valeur de la variable `profile.name`
- Une balise doit toujours être fermée : `<img />`, pas `<img>`

### 2.3 Props

Les **props** (« propriétés ») sont les paramètres qu'on passe à un composant, comme les arguments d'une fonction.

```tsx
function Carte({ titre }: { titre: string }) {
  return <h2>{titre}</h2>;
}

<Carte titre="Bonjour" />
```

Ici, `{ titre: string }` est le **type** de la prop (voir TypeScript plus bas) : ça dit « ce composant attend une prop appelée `titre`, qui doit être une chaîne de caractères ».

### 2.4 State (état) et hooks

Un composant peut avoir une **mémoire interne** qui change au fil du temps (ex : « le menu est-il ouvert ? »). On appelle ça le **state**, et on le déclare avec le hook `useState` :

```tsx
const [ouvert, setOuvert] = useState(false);
```

`ouvert` est la valeur actuelle, `setOuvert` est la fonction pour la changer. Quand on appelle `setOuvert(true)`, React redessine automatiquement le composant avec la nouvelle valeur.

Un **hook** est une fonction spéciale de React qui commence toujours par `use` (`useState`, `useEffect`, `useRef`...). Ce projet en utilise trois :
- `useState` : stocker une valeur qui change (ex : le thème clair/sombre dans `Nav.tsx`)
- `useEffect` : exécuter du code après l'affichage du composant (ex : écouter le scroll de la page)
- `useRef` : garder une référence directe vers un élément HTML ou une valeur qui ne doit pas déclencher de réaffichage (ex : le minuteur du carrousel)

### 2.5 Server Components vs Client Components (spécifique à Next.js)

C'est le concept le plus important à comprendre dans ce projet.

- Par défaut, dans le dossier `app/`, **tout composant est un « Server Component »** : il est exécuté uniquement sur le serveur (ou au moment du `build`), jamais dans le navigateur. Résultat : le navigateur ne télécharge que du HTML déjà prêt, plus léger et plus rapide. Mais un Server Component **ne peut pas** utiliser `useState`, `useEffect`, ni réagir à un clic.
- Si un composant a besoin d'interactivité (clic, scroll, minuteur, `localStorage`...), on doit le transformer en **« Client Component »** en ajoutant `"use client";` tout en haut du fichier. Il sera alors aussi exécuté dans le navigateur.

Dans ce projet :
- `app/page.tsx`, `app/methode/page.tsx`, `app/pourquoi-erp/page.tsx`, `app/projets/[slug]/page.tsx` → Server Components (pas de `"use client"` en haut)
- `components/Nav.tsx`, `components/ui.tsx`, `components/Carousel.tsx` → Client Components (ils utilisent `useState`/`useEffect`, donc `"use client";` en première ligne)

Un Server Component peut très bien **afficher** un Client Component à l'intérieur de lui (c'est ce qui se passe : `app/page.tsx` est un Server Component qui affiche `<Nav />`, qui elle est un Client Component). L'inverse n'est pas vrai directement.

### 2.6 Le routage par dossiers (App Router)

Dans Next.js (version « App Router », celle utilisée ici), **l'arborescence du dossier `app/` détermine les URL du site**, automatiquement, sans configuration :

| Fichier | URL correspondante |
|---|---|
| `app/page.tsx` | `/` (l'accueil) |
| `app/methode/page.tsx` | `/methode` |
| `app/pourquoi-erp/page.tsx` | `/pourquoi-erp` |
| `app/projets/[slug]/page.tsx` | `/projets/phaseo`, `/projets/vrp`, `/projets/supermarche`, ... |

Un dossier entre crochets, `[slug]`, est une **route dynamique** : `slug` devient une variable que le composant peut lire (`params.slug`). Une seule page de code (`app/projets/[slug]/page.tsx`) génère donc autant de pages réelles qu'il y a d'entrées dans `data/caseStudies.ts`.

`app/layout.tsx` est spécial : c'est le **gabarit commun** à toutes les pages (balise `<html>`, `<head>`, polices, thème). Chaque page vient s'insérer à l'intérieur via `{children}`.

### 2.7 TypeScript en deux mots

TypeScript ajoute des **types** à JavaScript : on décrit à l'avance la forme attendue d'une donnée, et l'éditeur (ou la commande `npm run build`) te prévient si tu te trompes.

```ts
export type Project = {
  slug: string;
  title: string;
  detailed?: boolean; // le `?` veut dire "optionnel"
};
```

Ça ne change rien au résultat final (le navigateur ne voit jamais les types, ils sont retirés à la compilation) — c'est un filet de sécurité pendant que tu écris le code.

### 2.8 Tailwind CSS

Plutôt que d'écrire des fichiers `.css` séparés, Tailwind fournit des centaines de petites classes utilitaires qu'on combine directement dans le `className` :

```tsx
<div className="flex items-center gap-4 rounded-xl p-5">
```

- `flex` → `display: flex`
- `items-center` → `align-items: center`
- `gap-4` → un espace entre les enfants
- `rounded-xl` → coins arrondis
- `p-5` → du padding

Les crochets `[...]` permettent une valeur précise non prévue par défaut : `text-[15px]` → `font-size: 15px`. C'est ce que tu vois partout dans ce projet.

Ce site n'utilise **pas** les couleurs Tailwind par défaut (`bg-blue-500`...). Il utilise ses propres couleurs, définies comme **variables CSS** (`var(--accent)`, etc. — voir section 8), pour pouvoir gérer un thème clair/sombre proprement. C'est pour ça que tu vois beaucoup de `style={{ color: "var(--ink-2)" }}` à côté des classes Tailwind : les deux méthodes cohabitent, chacune pour ce qu'elle fait de mieux.

### 2.9 SSR / SSG (le rendu du site)

- **SSG** (Static Site Generation) : la page est entièrement construite en HTML **au moment du `npm run build`**, une fois pour toutes. C'est le cas de toutes les pages de ce site.
- `generateStaticParams()` (utilisé dans `app/projets/[slug]/page.tsx`) dit à Next.js : « voici la liste de tous les `slug` possibles, génère une page HTML pour chacun à l'avance ».

---

## 3. L'arborescence complète, expliquée

```
portfolio/
├── app/                        # Les PAGES du site (routage automatique)
│   ├── layout.tsx              # Gabarit commun (balise html, head, polices, thème)
│   ├── page.tsx                # Page d'accueil ( / )
│   ├── globals.css             # Le design system (couleurs, animations, classes custom)
│   ├── sitemap.ts               # Génère /sitemap.xml (SEO)
│   ├── robots.ts                # Génère /robots.txt (SEO)
│   ├── methode/
│   │   └── page.tsx            # Page /methode ("Ma façon de travailler")
│   ├── pourquoi-erp/
│   │   └── page.tsx            # Page /pourquoi-erp
│   └── projets/
│       └── [slug]/
│           └── page.tsx        # Page /projets/phaseo, /projets/vrp, /projets/supermarche
│
├── components/                 # Des morceaux réutilisables sur plusieurs pages
│   ├── Nav.tsx                 # Barre de navigation en haut de page
│   ├── ui.tsx                  # Petits composants génériques (Reveal, RichText, Footer, GithubIcon)
│   └── Carousel.tsx             # Carrousel d'images avec flèches + défilement auto
│
├── data/                        # TOUT le contenu texte du site (aucun code d'affichage ici)
│   ├── profile.ts               # Identité, hero, chiffres clés du bandeau
│   ├── content.ts               # Compétences, certifications, recommandation, parcours, méthode...
│   ├── projects.ts              # Les 3 projets affichés sur l'accueil + projets secondaires
│   └── caseStudies.ts           # Le contenu complet des études de cas détaillées
│
├── public/                      # Fichiers statiques servis tels quels (images, favicon...)
│   └── donatien.jpg
│
├── tailwind.config.ts            # Configuration de Tailwind (couleurs custom, police, etc.)
├── postcss.config.js             # Nécessaire pour que Tailwind fonctionne (branchement technique)
├── next.config.js                # Configuration de Next.js (minimal ici)
├── tsconfig.json                 # Configuration de TypeScript
├── package.json                  # Liste des dépendances + scripts (`npm run dev`, etc.)
├── GUIDE.md                      # Mode d'emploi rapide (lancer / modifier / déployer)
└── DOCUMENTATION.md              # Ce fichier
```

**Règle d'or de ce projet** : si tu veux changer un *texte*, tu vas dans `data/`. Si tu veux changer une *mise en page* ou un *comportement*, tu vas dans `components/` ou `app/`. On détaille pourquoi juste en dessous.

---

## 4. Le principe central : données séparées de l'affichage

Ce portfolio applique un principe simple mais puissant : **le contenu (les textes) et la présentation (le HTML/CSS qui l'affiche) sont dans des fichiers différents.**

- `data/*.ts` → *quoi* afficher (le texte de tes projets, tes compétences, tes chiffres...)
- `components/*.tsx` et `app/*.tsx` → *comment* l'afficher (la mise en page, les couleurs, les animations)

Concrètement, un fichier de données exporte une variable (souvent un tableau ou un objet), et une page l'importe puis la parcourt avec `.map()` pour générer du HTML répété :

```ts
// data/content.ts
export const skills = [
  { title: "ERP & Systèmes d'information", key: "// métier", items: ["Analyse fonctionnelle", ...] },
  { title: "Architecture & Modélisation", key: "// design", items: [...] },
  // ...
];
```

```tsx
// app/page.tsx
import { skills } from "@/data/content";

{skills.map((s) => (
  <div key={s.title}>
    <h4>{s.title}</h4>
    {/* ... */}
  </div>
))}
```

`.map()` est une fonction JavaScript qui transforme chaque élément d'un tableau en autre chose — ici, chaque objet `skill` devient un bloc `<div>`. C'est comme ça que 6 compétences dans `content.ts` deviennent 6 cartes à l'écran, sans qu'on ait à copier-coller du HTML six fois.

**Pourquoi ce découpage ?** Parce que 95 % des mises à jour futures (changer un texte, ajouter une certification, corriger une phrase) se feront dans `data/`, sans jamais toucher au design. C'est exactement pour ça que `GUIDE.md` ne parle que des fichiers `data/`.

L'import `@/data/content` utilise un **alias** : `@/` veut dire « la racine du projet ». C'est configuré dans `tsconfig.json` (`"paths": { "@/*": ["./*"] }`) pour éviter d'écrire des chemins relatifs illisibles comme `../../data/content`.

---

## 5. Les fichiers de données (`data/`), un par un

### 5.1 `data/profile.ts`

Contient deux exports :

- **`profile`** (objet) : identité (nom, rôle), textes du hero (`heroTitle`, `heroLead`), disponibilité, coordonnées de contact (`contact.email`, `contact.linkedin`, etc.). Utilisé dans `app/page.tsx`, `components/Nav.tsx`, `components/ui.tsx` (Footer), et `app/layout.tsx` (métadonnées SEO).
  - Astuce dans `heroTitle` : le texte entre `**...**` (ex. `"Futur **consultant ERP**, ..."`) est repéré par une expression régulière dans `app/page.tsx` (`heroTitle.split(/(\*\*[^*]+\*\*)/g)`) pour être coloré en accent. C'est une mini-syntaxe « markdown faite maison ».
- **`stats`** (tableau) : les chiffres du bandeau sous le hero (17 ans, 400+, 3, 2, 4+...). Chaque élément a `n` (le nombre) et `l` (la légende).

### 5.2 `data/content.ts`

Le plus gros fichier de contenu. Six exports :

| Export | Contenu | Utilisé dans |
|---|---|---|
| `skills` | Les 6 blocs de compétences (métier d'abord, technique ensuite) | `app/page.tsx`, section Compétences |
| `certifications` | Les badges de certifications (titre, statut `done`/`wip`, `href` pour le lien de vérification) | `app/page.tsx`, section Certifications (bandeau défilant) |
| `recommendation` | La citation du tuteur de stage | `app/page.tsx`, section Recommandation |
| `parcours` | Le texte "d'un chantier de VRD à un socle Oracle" | `app/page.tsx`, section Parcours |
| `lookingFor` | "Ce que je recherche" (encart avant le contact) | `app/page.tsx` |
| `contact` | Titre + texte de la section contact ("Travaillons ensemble") | `app/page.tsx` |
| `method` | Les 8 étapes de la démarche (Comprendre → Améliorer) | `app/methode/page.tsx` |
| `whyErp` | Le récit personnel BTP → PHASEO → conseil ERP | `app/pourquoi-erp/page.tsx` |

Chaque certification a un champ `href: ""` (vide pour l'instant). Le composant qui l'affiche (`app/page.tsx`) vérifie s'il est rempli : si oui, la carte devient un vrai lien cliquable (`<a href={c.href}>`) ; sinon, c'est un simple `<div>`. C'est un pattern courant : **préparer une structure de données avant d'avoir toute l'information**, pour ne pas avoir à retoucher le code plus tard — juste la donnée.

### 5.3 `data/projects.ts`

- **`projects`** : les 3 projets affichés en grand sur l'accueil (PHASEO, VRP, supermarché). Chaque projet a un `slug` (utilisé dans l'URL et pour retrouver son étude de cas dans `caseStudies.ts`), un `summary` (résumé affiché sur la carte), un `stack` (tableau de technologies), et des indicateurs (`featured`, `detailed`, `github`, `githubPrivate`) qui pilotent l'affichage conditionnel (voir 7.2).
- **`miniProjects`** : les projets secondaires, affichés en petites cartes, avec juste un lien GitHub direct.

Le type `Project` (ligne 7) documente la forme exacte attendue : c'est utile quand tu ajoutes un projet, TypeScript te dira si tu as oublié un champ obligatoire.

### 5.4 `data/caseStudies.ts`

Le contenu complet des 3 pages d'étude de cas (`/projets/phaseo`, `/projets/vrp`, `/projets/supermarche`). C'est un **objet** (pas un tableau) dont les clés sont les `slug` :

```ts
export const caseStudies: Record<string, CaseStudy> = {
  phaseo: { slug: "phaseo", eyebrow: "...", title: "...", blocks: [...], captures: [...] },
  vrp: { ... },
  supermarche: { ... },
};
```

`Record<string, CaseStudy>` est un type TypeScript qui veut dire « un objet dont je ne connais pas les clés à l'avance, mais dont chaque valeur doit respecter la forme `CaseStudy` ».

Chaque étude de cas suit la même structure :
- `meta` : les 4 encarts en haut (Contexte, Rôle, Stack, Durée)
- `blocks` : les sections de texte (Contexte → Problème → Décision/Approche → Résultat → Ce que j'en retiens), chacune avec un `heading` et un tableau `body` de paragraphes
- `captures` : les emplacements de la galerie d'images (juste un `label` pour l'instant — le jour où tu ajoutes une vraie image, tu ajoutes un champ `src` à l'objet correspondant, voir 6.3)
- `repoUrl` / `repoLabel` / `repoNote` : comment afficher le lien vers le dépôt (public, privé, ou projet d'équipe)

C'est ce fichier que tu enrichis quand tu veux ajouter une 4ᵉ étude de cas : copier un bloc, l'adapter, puis ajouter `detailed: true` sur le projet correspondant dans `projects.ts`. Comme la page `app/projets/[slug]/page.tsx` génère automatiquement une page par clé de `caseStudies`, il n'y a **rien d'autre** à faire pour que `/projets/ton-nouveau-slug` existe.

---

## 6. Les composants réutilisables (`components/`), un par un

### 6.1 `components/Nav.tsx` — la barre de navigation

C'est un **Client Component** (`"use client";` en ligne 1) car il a besoin d'interactivité : détecter le scroll, et changer le thème clair/sombre.

- `const [scrolled, setScrolled] = useState(false)` : mémorise si la page est scrollée de plus de 10px (pour afficher une bordure sous la nav)
- `const [dark, setDark] = useState(false)` : mémorise si le thème sombre est actif
- `useEffect(...)` : au chargement du composant, lit le thème déjà appliqué (`document.documentElement.getAttribute("data-theme")`) et branche un écouteur d'évènement sur le scroll (`window.addEventListener("scroll", ...)`). Le `return () => window.removeEventListener(...)` est important : c'est le **nettoyage**, exécuté quand le composant disparaît, pour ne pas laisser un écouteur actif inutilement.
- `toggle()` : change l'attribut `data-theme` sur `<html>`, sauvegarde le choix dans `localStorage` (pour s'en souvenir à la prochaine visite), et met à jour le state.
- Le tableau de liens (`["Travaux", "/#travaux"], ...`) est parcouru avec `.map()` pour générer les liens du menu.

### 6.2 `components/ui.tsx` — la boîte à outils

Quatre petits composants génériques, tous dans un seul fichier car ils sont courts et liés à l'affichage général :

- **`Reveal`** : fait apparaître son contenu en fondu + léger déplacement vers le haut, **quand l'utilisateur scrolle jusqu'à lui** (pas au chargement de la page). Ça utilise l'API navigateur `IntersectionObserver`, qui « observe » un élément et prévient quand il entre dans l'écran visible :
  ```tsx
  const io = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) { setShown(true); io.unobserve(el); } },
    { threshold: 0.12 }
  );
  ```
  `threshold: 0.12` veut dire « déclenche quand 12 % de l'élément est visible ». `io.unobserve(el)` arrête l'observation une fois déclenché (l'animation ne joue qu'une fois). La prop `delay` (ajoutée pour la page `/methode`) permet un effet « en cascade » : chaque étape apparaît un peu après la précédente, via `transitionDelay` en CSS.
- **`RichText`** : la même astuce que `heroTitle` dans `profile.ts` — transforme `**texte**` en `<strong>texte</strong>` coloré, sans dépendance externe de type "markdown parser".
- **`GithubIcon`** : juste une icône SVG en composant, pour ne pas dupliquer le code SVG partout où on affiche un lien GitHub.
- **`Footer`** : le pied de page, affiché sur toutes les pages.

### 6.3 `components/Carousel.tsx` — le carrousel d'images

Client Component qui affiche une galerie d'images qui défile automatiquement en boucle, avec des flèches pour naviguer manuellement.

**Props** : `slides: { label: string; src?: string }[]` — une liste d'emplacements. Si `src` est absent, un encart gris "à intégrer" s'affiche à la place de l'image.

**Fonctionnement pas à pas** :
1. `const [index, setIndex] = useState(0)` : mémorise quelle image est actuellement affichée.
2. `timerRef` (un `useRef`) garde en mémoire l'identifiant du minuteur (`setInterval`), pour pouvoir l'arrêter plus tard. On utilise `useRef` plutôt que `useState` ici car changer cette valeur ne doit **pas** redessiner le composant.
3. `start()` lance un `setInterval` qui avance d'une image toutes les 4,2 secondes (`autoPlayMs`), sauf si l'utilisateur a activé « réduire les animations » dans son système (`window.matchMedia("(prefers-reduced-motion: reduce)")`), ou s'il n'y a qu'une seule image.
4. `stop()` arrête ce minuteur. Il est appelé à la souris survolant le carrousel (`onMouseEnter={stop}`) et relancé quand elle repart (`onMouseLeave={start}`) — c'est ce qui permet de cliquer tranquillement sur les flèches sans que l'image change sous la souris.
5. Toutes les images sont en fait **toujours présentes dans le HTML**, empilées les unes sur les autres (`absolute inset-0`), et seule celle dont l'index correspond a `opacity: 1` — les autres sont à `opacity: 0`. C'est ce qui crée l'effet de fondu enchaîné (`transition-opacity duration-500`) plutôt qu'un changement brutal.
6. Les boutons flèche appellent `go(-1)` ou `go(1)`, qui change l'index (avec un calcul `(i + dir + count) % count` qui boucle proprement de la dernière image à la première et vice-versa — l'opérateur `%` est le modulo, le reste d'une division) puis relance le minuteur.

**Où il est utilisé** : uniquement dans `app/page.tsx`, sur les cartes de projets de l'accueil, en lui passant directement les `captures` de l'étude de cas correspondante (`caseStudies[p.slug]?.captures`). Le `?.` est l'« optional chaining » : si `caseStudies[p.slug]` n'existe pas, on ne plante pas, on obtient `undefined`, et le `?? [{ label: p.visualLabel }]` juste après fournit une valeur de secours.

**Ajouter une vraie image plus tard** : dans `data/caseStudies.ts`, chaque capture ressemble à `{ label: "Interface web Angular" }`. Le jour où tu as le fichier, tu mets l'image dans `public/` (ex. `public/phaseo-angular.jpg`) puis tu ajoutes `src: "/phaseo-angular.jpg"` à côté du `label`. Rien d'autre à changer : le composant `Carousel` bascule automatiquement du placeholder gris à la vraie image.

---

## 7. Les pages (`app/`), une par une

### 7.1 `app/layout.tsx` — le gabarit commun

C'est le point d'entrée technique de tout le site. Il définit :
- `export const metadata` : les informations SEO par défaut (titre, description, Open Graph pour les aperçus de lien sur les réseaux, mots-clés). Chaque page peut ensuite surcharger `title`/`description` via son propre `export const metadata` (c'est ce que font `app/methode/page.tsx` et `app/pourquoi-erp/page.tsx`).
- Un `<script>` en ligne qui applique le thème (clair/sombre) **avant** que React ne s'exécute, pour éviter un « flash » d'un mauvais thème au chargement.
- Un `<script type="application/ld+json">` : des données structurées lisibles par les moteurs de recherche (« ceci est une personne, voici son métier, ses liens... »), pour améliorer le référencement.
- `{children}` : c'est ici que la page active (accueil, méthode, étude de cas...) vient s'insérer.

### 7.2 `app/page.tsx` — la page d'accueil

La plus longue. Elle empile des sections (`<section>` ou `<header>`), chacune commentée (`{/* HERO */}`, `{/* TRAVAUX */}`...). Dans l'ordre :

1. **Hero** (`<header id="top">`) : titre, texte d'intro, boutons, photo + mini-bio.
2. **Bandeau chiffres** : `stats.map(...)` génère une carte par chiffre. Depuis le passage à 5 chiffres, la grille est en `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5` (2 colonnes sur mobile, 3 sur tablette, 5 sur grand écran) — chaque carte a sa propre bordure, donc peu importe combien d'éléments il y a, la mise en page reste correcte (contrairement à l'ancienne version qui comptait les bordures « à la main » et ne fonctionnait que pour exactement 4 éléments).
3. **Travaux** (`id="travaux"`) : `projects.map(...)` génère une carte par projet. Affichage conditionnel notable :
   - `{p.detailed && <Link>...}` : le lien "Voir le détail" ne s'affiche que si `detailed: true` dans `projects.ts`
   - `{p.featured ? "Lire l'étude de cas complète" : "Voir le détail"}` : le texte du lien change selon que le projet est mis en avant ou non
   - `{p.github && <a>...}` / `{p.githubPrivate && <span>...}` : soit un vrai lien GitHub, soit un badge "dépôt privé", jamais les deux
   - La zone image utilise le `Carousel` (voir 6.3)
   - En dessous, `miniProjects.map(...)` pour les projets secondaires
4. **Compétences** (`id="competences"`) : `skills.map(...)`, une carte par domaine.
5. **Recommandation** (`id="reco"`) : la citation, statique (un seul élément, pas de `.map()`).
6. **Certifications** (`id="certs"`) : le bandeau défilant. `[...certifications, ...certifications]` **duplique** le tableau (l'opérateur `...` s'appelle le *spread*, il "déverse" les éléments d'un tableau dans un nouveau tableau) pour créer un deuxième jeu de cartes identique juste après le premier — c'est ce qui permet à l'animation CSS de boucler sans "trou" visible (voir 8.3). Les cartes dupliquées ont `aria-hidden={true}` pour ne pas être lues deux fois par un lecteur d'écran.
7. **Parcours** (`id="parcours"`) : le texte + les 2 liens vers `/methode` et `/pourquoi-erp`.
8. **Ce que je recherche** : un encart mis en avant (fond + bordure), juste avant le contact.
9. **Contact** (`id="contact"`) : titre/texte issus de `contact` (dans `content.ts`), boutons email/téléphone/LinkedIn/GitHub construits à partir de `profile.contact`.
10. **`<Footer />`**.

### 7.3 `app/projets/[slug]/page.tsx` — les études de cas

C'est une **route dynamique**. Deux fonctions spéciales de Next.js, en plus du composant de page :

```tsx
export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}
```
`Object.keys(caseStudies)` renvoie `["phaseo", "vrp", "supermarche"]`. Cette fonction dit à Next.js : « génère à l'avance une page pour chacun de ces slugs ». C'est ce qui fait qu'ajouter une entrée dans `caseStudies.ts` suffit à créer une nouvelle page, sans toucher à ce fichier.

```tsx
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudies[params.slug];
  if (!cs) return {};
  return { title: cs.title, description: cs.intro };
}
```
Génère un `<title>` différent par page (utile pour le SEO et l'onglet du navigateur).

```tsx
export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies[params.slug];
  if (!cs) notFound();
  // ...
}
```
`params.slug` est automatiquement rempli par Next.js selon l'URL visitée (`/projets/phaseo` → `params.slug === "phaseo"`). `notFound()` affiche la page 404 standard de Next.js si le slug ne correspond à rien dans `caseStudies` (protection utile si tu tapes une mauvaise URL).

Le reste du fichier affiche, dans l'ordre : fil d'ariane, en-tête, méta (grille de 4 encarts), les `blocks` (`.map()` sur les sections), la galerie `captures` (grille statique, contrairement au carrousel de l'accueil — ici on veut voir plusieurs images à la fois), la stack technique + le lien vers le dépôt, et un bloc d'appel à l'action.

### 7.4 `app/methode/page.tsx` et `app/pourquoi-erp/page.tsx`

Deux pages statiques (pas de route dynamique), structurées pareil : lien retour, en-tête, contenu, appel à l'action, `Footer`.

- `/methode` parcourt `method` (dans `content.ts`) avec `.map()` et affiche chaque étape avec un `Reveal` dont le `delay` augmente à chaque itération (`delay={i * 70}`) : c'est ce qui crée l'effet de cascade au scroll. Une ligne verticale (`<div className="absolute left-[19px] ...">`) est positionnée en arrière-plan pour relier visuellement les étapes, en pur CSS (`position: absolute`), sans dépendre du nombre d'étapes.
- `/pourquoi-erp` affiche simplement les paragraphes de `whyErp.paragraphs`.

### 7.5 `app/sitemap.ts` et `app/robots.ts`

Deux fichiers spéciaux reconnus automatiquement par Next.js (à ces noms précis) :
- `sitemap.ts` exporte une fonction qui retourne la liste de toutes les URL du site → Next.js génère `/sitemap.xml` tout seul. Elle combine l'URL racine, les pages statiques (`/methode`, `/pourquoi-erp`) et une page par étude de cas (`Object.keys(caseStudies)`, comme dans `[slug]/page.tsx`).
- `robots.ts` génère `/robots.txt`, qui dit aux moteurs de recherche « vous pouvez tout indexer » et leur indique où trouver le sitemap.

---

## 8. Le design system (`app/globals.css`)

### 8.1 Les variables CSS (couleurs)

Tout en haut, deux blocs définissent des **variables CSS** (pas du Tailwind — du CSS pur, avec `--nom: valeur`) :

```css
:root {
  --canvas: #FCFCFD;   /* fond général de la page */
  --surface: #FFFFFF;  /* fond des cartes */
  --ink: #0F172A;      /* texte principal */
  --ink-2: #475569;    /* texte secondaire, plus clair */
  --ink-3: #94A3B8;    /* texte tertiaire, encore plus clair */
  --line: #E7EBF0;     /* bordures */
  --accent: #1E40AF;   /* couleur d'accent (liens, icônes actives) */
  /* ... */
}

[data-theme="dark"] {
  --canvas: #0B0F16;
  /* les mêmes variables, redéfinies avec des couleurs sombres */
}
```

Le thème sombre ne duplique **aucun composant** : il redéfinit juste la valeur des variables quand l'attribut `data-theme="dark"` est présent sur `<html>` (posé par `Nav.tsx`, voir 6.1). Chaque composant qui écrit `style={{ color: "var(--ink-2)" }}` change donc automatiquement de couleur selon le thème actif, sans aucune logique conditionnelle dans le JSX.

### 8.2 Les classes utilitaires custom

En plus des classes Tailwind, quelques classes maison, réutilisées partout : `.eyebrow` (le petit label en majuscules au-dessus des titres de section), `.chip` (les pastilles de technologies), `.btn`/`.btn-primary`/`.btn-ghost` (les boutons), `.arrow-link` (les liens avec flèche qui s'écarte au survol).

### 8.3 Les animations

- `.reveal` / `.reveal.in` : l'état caché et l'état visible utilisés par le composant `Reveal` (6.2) — c'est du CSS pur (`opacity`, `transform`, `transition`), React ne fait qu'ajouter/retirer la classe `in`.
- `.marquee` / `.marquee-track` / `@keyframes marquee` : le défilement en boucle des certifications. Le principe : `.marquee-track` contient la liste **dupliquée** (voir 7.2, point 6) et glisse en continu de `translateX(0)` à `translateX(-50%)` (soit exactement la largeur du premier jeu de cartes) grâce à `animation: marquee 32s linear infinite`. Comme le deuxième jeu de cartes est identique au premier, au moment où l'animation boucle (`infinite`), rien ne "saute" visuellement — l'œil ne voit pas la coupure. `.marquee:hover .marquee-track { animation-play-state: paused; }` met en pause au survol.
- `@media (prefers-reduced-motion: reduce)` : un bloc spécial qui **désactive** toutes ces animations si l'utilisateur a demandé, dans les réglages de son système, à réduire les animations (accessibilité). C'est une bonne pratique à toujours garder si tu ajoutes de nouvelles animations.

---

## 9. Les fichiers de configuration

- **`package.json`** : liste les dépendances (`next`, `react`, `react-dom` pour le site ; `tailwindcss`, `typescript`... pour le développement) et les scripts (`npm run dev`, `npm run build`, `npm run start`, `npm run lint`).
- **`tailwind.config.ts`** : dit à Tailwind (1) où chercher les classes utilisées (`content: [...]`, sinon il ne sait pas quoi générer), et (2) déclare les couleurs custom (`accent`, `ink`, etc.) comme des classes Tailwind à part entière (`text-accent`, `border-line`...) qui pointent vers les variables CSS de la section 8.1.
- **`postcss.config.js`** : la « tuyauterie » qui permet à Tailwind de s'intégrer au processus de build CSS. Tu n'as normalement jamais besoin d'y toucher.
- **`next.config.js`** : configuration de Next.js — ici minimale (`reactStrictMode: true`, qui aide à détecter des erreurs pendant le développement).
- **`tsconfig.json`** : configuration de TypeScript, notamment l'alias `@/*` évoqué en section 4.

---

## 10. Comment tout s'articule (le schéma général)

```
 data/*.ts  (le contenu : textes, chiffres, listes)
      │
      │  import { ... } from "@/data/..."
      ▼
 components/*.tsx  (les briques réutilisables : Nav, Reveal, Carousel, Footer...)
      │
      │  <Nav />  <Carousel slides={...} />  etc.
      ▼
 app/**/page.tsx  (les pages : elles assemblent data + components)
      │
      │  Next.js lit l'arborescence de app/ pour créer les URL
      ▼
 npm run build → fichiers HTML/CSS/JS statiques
      │
      ▼
 Vercel héberge ces fichiers → ton site est en ligne
```

Exemple concret, du texte à l'écran, pour une certification :

1. Tu écris `{ badge: "SAP", title: "SAP Learning", status: "wip", href: "", desc: "..." }` dans `data/content.ts` (tableau `certifications`).
2. `app/page.tsx` importe ce tableau et fait `certifications.map((c) => ...)`.
3. Pour chaque `c`, du JSX est généré : un badge rond avec `{c.badge}`, un titre `{c.title}`, une pastille colorée selon `c.status`.
4. Au build, Next.js transforme tout ça en HTML statique.
5. Le CSS de `globals.css` (variables de couleur + classes Tailwind) habille ce HTML.
6. Le navigateur affiche la carte, et l'anime en boucle grâce à `.marquee-track`.

---

## 11. Lancer, modifier, déployer — en bref

Le détail pas-à-pas (avec les commandes exactes) est dans `GUIDE.md`. En résumé :

```bash
npm install     # une seule fois, installe les dépendances
npm run dev     # lance le site en local sur http://localhost:3000, se met à jour en direct
npm run build   # vérifie que tout compile sans erreur ET génère la version de production
```

Pour modifier un texte : ouvre le fichier concerné dans `data/`, change la chaîne de caractères entre guillemets, sauvegarde. Pour ajouter un élément à une liste (une certification, un projet...) : copie un bloc existant dans le même tableau, adapte les valeurs.

Le déploiement se fait via Vercel connecté au dépôt GitHub : chaque `git push` sur la branche principale redéploie automatiquement le site.

---

## 12. Reconstruire ce projet depuis zéro

Si un jour tu veux recréer un site avec cette architecture, sans repartir de ce dépôt, voici les grandes étapes :

1. **Créer le projet** :
   ```bash
   npx create-next-app@latest mon-portfolio --typescript --tailwind --app
   ```
   Ça installe Next.js + React + TypeScript + Tailwind déjà branchés ensemble, avec un dossier `app/` prêt à l'emploi.

2. **Définir ton design system** dans `app/globals.css` : choisis 5-6 variables CSS de couleur (`--canvas`, `--surface`, `--ink`, `--accent`...), un jeu clair et un jeu sombre sous `[data-theme="dark"]`. Déclare-les dans `tailwind.config.ts` (`theme.extend.colors`) pour pouvoir les utiliser aussi en classes Tailwind.

3. **Créer le dossier `data/`** et y mettre, dès le départ, un fichier par « type » de contenu (profil, projets, compétences...). Réfléchis à la forme de chaque objet (quels champs) avant d'écrire le composant qui l'affiche — ça t'évite de tout réécrire après coup.

4. **Créer les composants de base** dans `components/` : une nav, un pied de page, un composant d'animation au scroll (`IntersectionObserver`). Garde-les simples et génériques (ils ne doivent contenir aucun texte "en dur", tout vient de `data/` ou des props).

5. **Construire `app/page.tsx`** section par section, en import­ant `data/` et en utilisant `.map()` pour chaque liste. Ajoute `id="..."` sur chaque `<section>` pour pouvoir y créer des liens d'ancre (`/#travaux`).

6. **Ajouter les routes dynamiques** si tu as des pages répétitives (études de cas, articles de blog...) : un dossier `app/quelque-chose/[slug]/page.tsx`, une fonction `generateStaticParams()` qui liste les clés de ton objet de données, et le tour est joué.

7. **Soigner le SEO** : `app/layout.tsx` pour les métadonnées globales, `app/sitemap.ts` et `app/robots.ts` pour les fichiers techniques.

8. **Déployer** : pousser sur GitHub, connecter le dépôt à Vercel, laisser Vercel détecter Next.js automatiquement.

---

## 13. Glossaire

| Terme | Définition simple |
|---|---|
| **Composant** | Une fonction qui retourne du HTML (en JSX), réutilisable comme une balise |
| **Props** | Les paramètres qu'on passe à un composant |
| **State** | Une donnée qui peut changer et qui déclenche un réaffichage quand elle change |
| **Hook** | Une fonction React spéciale (`useState`, `useEffect`, `useRef`...) qui donne des super-pouvoirs à un composant |
| **JSX** | La syntaxe qui mélange JavaScript et balises façon HTML |
| **Server Component** | Un composant exécuté uniquement côté serveur/build, jamais dans le navigateur (par défaut dans `app/`) |
| **Client Component** | Un composant exécuté aussi dans le navigateur, activé avec `"use client"`, nécessaire pour l'interactivité |
| **Route** | Une URL du site, associée à un fichier `page.tsx` |
| **Route dynamique** | Un dossier `[nom]` dont la valeur varie selon l'URL visitée |
| **`generateStaticParams`** | Fonction Next.js qui dit quelles pages générer à l'avance pour une route dynamique |
| **SSG** | Static Site Generation : le HTML est généré une fois, au moment du build |
| **Props/type optionnel (`?`)** | En TypeScript, un champ qui peut être présent ou absent |
| **`.map()`** | Fonction JavaScript qui transforme chaque élément d'un tableau en autre chose (ici, en JSX) |
| **Spread (`...`)** | Opérateur qui "déverse" les éléments d'un tableau/objet dans un autre |
| **Optional chaining (`?.`)** | `a?.b` renvoie `undefined` au lieu de planter si `a` est `null`/`undefined` |
| **Nullish coalescing (`??`)** | `a ?? b` renvoie `b` seulement si `a` est `null`/`undefined` (valeur de secours) |
| **`IntersectionObserver`** | API du navigateur qui détecte quand un élément entre/sort de l'écran visible |
| **Variable CSS (`--nom`)** | Une valeur CSS réutilisable, redéfinissable (ex. pour un thème sombre) |
| **Tailwind CSS** | Bibliothèque de classes utilitaires CSS courtes, combinées directement dans le HTML |
| **Alias d'import (`@/`)** | Un raccourci configuré (`tsconfig.json`) qui pointe vers la racine du projet |
