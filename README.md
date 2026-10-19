# nextjs-starter

Modèle de départ pour mes sites Next.js : Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, ESLint.

## Créer un nouveau projet

```bash
npx create-next-app@latest mon-nouveau-site --example https://github.com/koffieliseear/nextjs-starter
```

## À faire dans chaque nouveau projet

1. `package.json` : changer `"name"`.
2. `src/app/layout.tsx` : changer `title` et `description`.
3. `src/app/page.tsx` : remplacer la page d'accueil.
4. Si besoin de variables d'environnement : les déclarer dans `.env.example`, et mettre les vraies valeurs dans `.env.local`.

## Commandes

```bash
npm run dev     # serveur de développement (http://localhost:3000)
npm run build   # build de production
npm run lint    # vérification du code
```
