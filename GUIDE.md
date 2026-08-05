# Guide de ton portfolio

Bienvenue. Ce dossier est ton site personnel, prêt à être mis en ligne.
Ce guide t'explique **comment le lancer**, **comment le modifier**, et **comment le déployer**. Pas besoin d'être expert — copie les commandes.

---

## 1. Installer les outils (une seule fois)

1. **Node.js** — télécharge la version « LTS » sur https://nodejs.org et installe-la.
2. **VS Code** — télécharge sur https://code.visualstudio.com et installe-le.
3. **Git** — télécharge sur https://git-scm.com et installe-le.

Pour vérifier que tout est installé, ouvre un terminal et tape :

```
node -v
git --version
```

Si tu vois des numéros de version, c'est bon.

---

## 2. Voir ton site sur ton ordinateur

1. Ouvre ce dossier dans VS Code (Fichier → Ouvrir le dossier).
2. Ouvre le terminal intégré (menu Terminal → Nouveau terminal).
3. La première fois seulement, installe les dépendances :
   ```
   npm install
   ```
4. Lance le site :
   ```
   npm run dev
   ```
5. Ouvre ton navigateur sur **http://localhost:3000**

Chaque fois que tu sauvegardes un fichier, la page se met à jour toute seule.
Pour arrêter le serveur : dans le terminal, appuie sur `Ctrl + C`.

---

## 3. Modifier le contenu (sans toucher au design)

Tout ton contenu est dans le dossier **`data/`**. Tu n'as qu'à éditer ces fichiers :

| Fichier                 | Ce qu'il contient                                                           |
| ----------------------- | --------------------------------------------------------------------------- |
| `data/profile.ts`     | Ton nom, ton titre, ta présentation, tes contacts, les chiffres du bandeau |
| `data/projects.ts`    | Les projets affichés sur l'accueil                                         |
| `data/caseStudies.ts` | Le contenu détaillé des pages PHASEO et VRP                               |
| `data/content.ts`     | Tes compétences, certifications, la recommandation, le parcours            |

### Exemple : ajouter ta future certification SAP

Ouvre `data/content.ts`, trouve la liste `certifications`, et ajoute un bloc :

```ts
{
  badge: "SAP",
  title: "SAP — Module MM (Materials Management)",
  statusLabel: "validé",   // ou "en préparation"
  status: "done",          // "done" = vert, "wip" = orange
  desc: "Ce que tu as appris et pourquoi cette certification renforce ton profil.",
},
```

Sauvegarde → la certif apparaît immédiatement.

### Brancher le lien GitHub du VRP (à faire après avoir créé ton dépôt public)

Chaque projet renvoie vers son dépôt GitHub. Pour le VRP, une fois ton dépôt public créé,
remplace l'URL provisoire `https://github.com/fofanadonatien` à **deux** endroits :

- dans `data/projects.ts` (champ `github` du projet `vrp`),
- dans `data/caseStudies.ts` (champ `repoUrl` du projet `vrp`).
  Les autres liens (supermarché, projets secondaires) pointent déjà vers tes dépôts existants —
  vérifie juste qu'ils sont corrects.

---

## 4. Ajouter tes captures d'écran de projets

1. Mets tes images dans le dossier **`public/`** (ex. `public/phaseo-1.jpg`).
2. Dis-le moi quand on se reparle : je te montrerai la petite modification pour
   remplacer les emplacements gris « capture à intégrer » par tes vraies images.
   (C'est 2 lignes à changer, on le fera ensemble.)

---

## 5. Mettre le site en ligne (gratuit, ~10 min)

### Étape A — Envoyer le projet sur GitHub

1. Crée un compte sur https://github.com si tu n'en as pas.
2. Crée un nouveau dépôt (bouton « New »), nomme-le par exemple `portfolio`, laisse-le **public** ou **privé** (au choix), ne coche rien d'autre, clique « Create ».
3. Dans le terminal VS Code, à la racine du projet, tape ces commandes une par une
   (remplace `TON-PSEUDO` par ton pseudo GitHub) :
   ```
   git init
   git add .
   git commit -m "Mon portfolio"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/portfolio.git
   git push -u origin main
   ```

### Étape B — Déployer sur Vercel

1. Va sur https://vercel.com et connecte-toi avec ton compte GitHub.
2. Clique « Add New… » → « Project ».
3. Choisis ton dépôt `portfolio` → « Import ».
4. Vercel détecte Next.js tout seul. Ne touche à rien, clique **« Deploy »**.
5. Attends ~1 minute. Ton site est en ligne sur une adresse type
   `https://portfolio-tonpseudo.vercel.app`.

### Étape C — Mettre à jour le site plus tard

Après chaque modification, dans le terminal :

```
git add .
git commit -m "Mise à jour"
git push
```

Vercel redéploie automatiquement en ~1 minute. C'est tout.

---

## 6. Une adresse personnalisée (optionnel)

Si tu veux `donatienfofana.fr` au lieu de `.vercel.app` :

- Achète un domaine (~10 €/an) chez OVH, Gandi, ou Namecheap.
- Dans Vercel : Project → Settings → Domains → ajoute ton domaine et suis les instructions.

**Important après avoir un vrai domaine :** remplace l'adresse
`https://donatien-fofana.vercel.app` par ton vrai domaine dans ces 3 fichiers :
`app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.

---

## Besoin d'aide ?

Reviens me voir avec ta question. On fera les README de tes dépôts GitHub ensemble,
et on branchera tes captures + ton CV quand ils seront prêts.
