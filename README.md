# nextjs-starter

Modèle de départ pour mes sites Next.js : Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, ESLint, Prettier.

Le starter fournit **la structure et des modèles vides, jamais les décisions d'un projet** : chaque site remplit son brief, son design et ses tokens.

## Créer un nouveau projet

```bash
npx create-next-app@latest mon-nouveau-site --example https://github.com/koffieliseear/nextjs-starter
cd mon-nouveau-site
cp .env.example .env.local
npm run dev
```

## À faire dans chaque nouveau projet, dans l'ordre

1. **`BRIEF.md`** : remplir l'intention du projet (objectif, public, ton, pages, contraintes).
2. **`design/inspiration/`** : déposer les captures, nommées selon ce qu'elles illustrent.
3. **`DESIGN.md`** : distiller les inspirations à la lumière du brief (avec Claude), et arbitrer les contradictions.
4. **`src/styles/tokens.css`** et **`src/lib/fonts.ts`** : reporter les couleurs, rayons et polices de DESIGN.md.
5. **`src/config/site.ts`** : nom, description, navigation, contact, réseaux. `package.json` : changer `"name"`.
6. **`src/app/icon.svg`** et **`src/app/opengraph-image.tsx`** : icône et image de partage du projet.
7. **Pages** : construire les sections (`components/sections`), puis les patterns et composants `ui` dont elles ont besoin. Ajouter chaque page à `src/app/sitemap.ts`.
8. **Production** : définir `NEXT_PUBLIC_SITE_URL` dans les variables d'environnement de l'hébergeur.

## Arborescence

```
BRIEF.md                 intention du projet (prime sur tout)
DESIGN.md                décisions visuelles
CLAUDE.md                règles pour Claude (importe AGENTS.md)
AGENTS.md                généré par Next.js, ne pas modifier

design/                  inspirations, jamais publiées (images non versionnées)
  inspiration/
  media-direction/

public/
  images/brand/          logo, visuels de marque
  images/pages/          images par page (home/, services/…)
  images/illustrations/
  images/CREDITS.md      sources et licences des images
  videos/                petites vidéos uniquement (< 2-3 Mo)

src/
  app/                   routes, layout, not-found, sitemap, robots, icône, image de partage
  config/site.ts         infos du site, source unique
  styles/tokens.css      tokens de design (seules couleurs disponibles dans Tailwind)
  lib/fonts.ts           polices du projet
  lib/cn.ts              utilitaire de classes
  components/
    ui/                  primitives : Button, Container
    layout/              Header, Footer
    patterns/            assemblages de composants ui (par projet)
    sections/            blocs de page (par projet)
    media/               AppImage, AppVideo
```

## Commandes

```bash
npm run dev           # serveur de développement (http://localhost:3000)
npm run build         # build de production
npm run lint          # ESLint
npm run typecheck     # vérification des types TypeScript
npm run format        # formate tout le code avec Prettier
npm run check         # format + lint + types + build : à lancer avant chaque commit
```
