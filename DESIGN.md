# DESIGN.md

> **Décisions visuelles du projet.** Elles servent `BRIEF.md` et sont appliquées dans le code par
> `src/styles/tokens.css` et `src/lib/fonts.ts`. Si ce fichier et le code divergent, mets-les à jour ensemble.
> Remplace chaque `[…]` puis supprime cet encadré.

## Direction

[2 à 4 phrases : l'ambiance visée, et pourquoi elle sert le brief.
ex. « Éditorial sobre, beaucoup de blanc, contrastes forts → public expert, ton sérieux. »]

## Références

Ce qu'on retient de chaque inspiration (`design/inspiration/`). Une capture absente de cette liste ne sert pas de référence.

- `[fichier ou dossier]` → [ce qu'on garde]. PAS [ce qu'on ne garde pas].
- ex. `wordpress-theme/` → typographie et rythme vertical des articles. PAS ses couleurs.
- ex. `dribbble/hero-split.png` → structure du hero (texte à gauche, visuel à droite). PAS le dégradé.

## Tokens

Valeurs définies dans `src/styles/tokens.css`. Seules ces couleurs existent dans Tailwind.

| Token                     | Valeur | Usage                      |
| ------------------------- | ------ | -------------------------- |
| `bg`                      | `[#…]` | fond de page               |
| `surface`                 | `[#…]` | cartes, sections alternées |
| `fg`                      | `[#…]` | texte principal            |
| `muted`                   | `[#…]` | texte secondaire           |
| `border`                  | `[#…]` | bordures, séparateurs      |
| `accent` / `accent-hover` | `[#…]` | actions : boutons, liens   |
| `accent-fg`               | `[#…]` | texte posé sur l'accent    |

- **Rayons :** boutons `[…]`, cartes `[…]`, médias `[…]`
- **Ombres :** [ex. une seule, très légère, pour les cartes]
- **Largeurs :** contenu `[72rem]`, texte long `[42rem]`
- **Mode sombre :** [oui / non]

## Typographie

- **Titres :** [police] · graisses [ex. 600]
- **Texte :** [police] · graisses [ex. 400, 500]
- **Échelle :** [ex. h1 48px, h2 32px, h3 24px, texte 18px]
- **Règles :** [ex. 2 graisses max par page, pas de texte en capitales au-delà de 3 mots]

## Composants existants

Avant d'en créer un nouveau, vérifier qu'aucun de ceux-ci ne convient. Tout nouveau composant est ajouté à cette liste.

- `ui/Button` : variantes `primary`, `secondary`, `ghost` · tailles `sm`, `md` · devient un lien avec `href`
- `ui/Container` : largeurs `content` et `reading`
- `layout/Header`, `layout/Footer` : lisent `src/config/site.ts`
- `media/AppImage` : alt obligatoire, ratios `16/9`, `4/3`, `3/2`, `1/1`
- `media/AppVideo` : poster obligatoire, mode `decorative`, respecte « réduire les animations »

## Images

- **Style :** [ex. photos réelles, lumière naturelle, tons chauds]
- **Traitement :** [ex. aucun filtre, coins arrondis via `rounded-media`]
- **Ratios :** [ex. hero 16:9 · cartes 4:3 · portraits 1:1]
- **Illustrations :** [ex. trait fin, 2 couleurs max]
- **Interdit :** [ex. banques d'images « corporate », fonds détourés flottants]

## Vidéos

- **Usage :** [ex. uniquement le hero de l'accueil]
- **Fond décoratif :** muette, en boucle, [10 s] max, toujours avec poster
- **Hébergement :** petits fichiers dans `public/videos/`, sinon [service ou CMS]
- **Jamais** de lecture automatique avec le son

## Mouvement

- [ex. transitions de 150 à 200 ms, pas d'animation au défilement]
- La préférence « réduire les animations » est respectée globalement (`globals.css`).

## À éviter

- [ex. dégradés, glassmorphism, emojis dans l'interface]
