import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sisllc-international.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/tech`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/government`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];
}
