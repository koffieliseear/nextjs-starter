import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Sur Vercel, les déploiements de prévisualisation ne sont jamais indexés :
 * seule la production l'est.
 */
const isIndexable =
  !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
