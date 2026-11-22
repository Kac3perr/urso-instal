
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ursoinstal.pl";

  const pages = [
    "",
    "/termowizja",
    "/elektryka-automatyka",
    "/o-firmie",
    "/pomiary-sep",
    "/kontakt",
    "/certyfikat-iso",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
