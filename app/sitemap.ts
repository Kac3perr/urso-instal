
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://ursoinstal.pl";

const pages = [
  "",
  "/termowizja",
  "/elektryka-automatyka",
  "/pomiary-sep",
  "/o-firmie",
  "/kontakt",
  "/certyfikat-iso",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
