import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMPANY.siteUrl;
  const now = new Date();
  const routes = [
    { url: "/", priority: 1 },
    { url: "/proizvodi", priority: 0.9 },
    { url: "/usluge", priority: 0.9 },
    { url: "/reference-kupci", priority: 0.8 },
    { url: "/o-nama", priority: 0.7 },
    { url: "/uvjeti-poslovanja", priority: 0.5 },
    { url: "/kontakt", priority: 0.7 },
    { url: "/lokacija", priority: 0.5 },
  ];
  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
