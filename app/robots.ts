import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://sisllc-international.com/sitemap.xml",
    host: "https://sisllc-international.com",
  };
}
