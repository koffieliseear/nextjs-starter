@AGENTS.md

# Règles du projet

`AGENTS.md` (importé ci-dessus) est régénéré par `next dev` : ne pas le modifier. Les règles propres au projet sont ici.

## Ordre de lecture et priorités

1. **BRIEF.md** : intention du projet. Prime sur tout le reste.
2. **DESIGN.md** : décisions visuelles prises pour servir le brief.
3. **Skills frontend** : méthode et bonnes pratiques générales. Ils ne proposent pas de nouvelle direction visuelle une fois DESIGN.md rempli.
4. **design/inspiration/** : référence ponctuelle, uniquement quand un fichier est cité, et selon la section « Références » de DESIGN.md. Ne jamais reproduire une capture à l'identique.

Lire BRIEF.md et DESIGN.md avant toute tâche de conception, d'interface ou de contenu.
Si une demande contredit DESIGN.md, ou si une décision de DESIGN.md semble desservir le brief, le signaler au lieu de trancher seul.
Si BRIEF.md ou DESIGN.md contient encore des `[…]`, demander les informations manquantes avant de concevoir.

## Où vit quoi

- Infos du site (nom, URL, description, navigation, contact) : `src/config/site.ts`, jamais en dur ailleurs.
- Couleurs, rayons, ombres, largeurs : `src/styles/tokens.css`. Polices : `src/lib/fonts.ts`.
- Composants, du plus simple au plus composé :
  `components/ui` → `components/patterns` → `components/sections` → pages (`src/app`).
  `components/layout` contient l'en-tête et le pied de page.
- Médias publiés : `public/images/{brand,pages,illustrations}/` et `public/videos/`.
- Inspirations : `design/`. Rien de `design/` n'est copié dans `public/` ni importé dans `src/`.

## Règles de code

- Réutiliser d'abord les composants existants (inventaire dans DESIGN.md). Tout nouveau composant y est ajouté.
- Uniquement les classes issues des tokens : pas de couleur, d'ombre ni de rayon en dur, pas de valeur arbitraire Tailwind (`bg-[#…]`) sauf exception justifiée.
- Une page assemble des sections ; elle ne contient presque pas de style.
- Composants serveur par défaut ; `"use client"` seulement quand c'est nécessaire, au plus bas niveau possible.
- Toute image passe par `AppImage`, toute vidéo par `AppVideo`.
- Chaque nouvelle page : `metadata` avec `title` et `description`, et ajout de sa route dans `src/app/sitemap.ts`.
- Accessibilité : un seul `h1` par page, hiérarchie de titres respectée, éléments interactifs utilisables au clavier, contrastes conformes au brief.

## Médias

- Noms en minuscules avec tirets, sous la forme `page-contenu.ext` (ex. `home-hero-equipe-atelier.jpg`).
- Toute image qui n'appartient pas au client est ajoutée à `public/images/CREDITS.md`.
- Pas de vidéo lourde dans le dépôt (au-delà de 2-3 Mo) : hébergement externe, voir DESIGN.md.

## Avant de dire qu'une tâche est terminée

Lancer `npm run check` (format, lint, types, build) et corriger ce qui échoue.
