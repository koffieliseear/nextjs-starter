/**
 * Source unique des informations du site.
 * À remplir au début de chaque projet : tout le reste (métadonnées, SEO,
 * en-tête, pied de page, image de partage) lit ces valeurs.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  /** URL publique du site, sans barre oblique finale. */
  url: string;
  /** Langue au format Open Graph (ex. fr_FR, en_US). */
  locale: string;
  contact: {
    email?: string;
    phone?: string;
  };
  nav: NavItem[];
  socials: NavItem[];
};

export const siteConfig: SiteConfig = {
  name: "Nom du site",
  description: "Description du site.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
  locale: "fr_FR",
  contact: {
    email: "contact@example.com",
  },
  nav: [{ label: "Accueil", href: "/" }],
  socials: [],
};
