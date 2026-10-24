import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Pages publiques à indexer. Ajoute chaque nouvelle page ici.
 * Pour des pages issues d'un CMS (articles, projets…), récupère-les et
 * ajoute-les à la liste.
 */
const routes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
