import type { MetadataRoute } from "next";
import { hasProductionUrl, site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Without a confirmed public domain, block indexing rather than expose localhost URLs.
  if (!hasProductionUrl) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
