import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";

const SITE_URL = "https://donatien-fofana.vercel.app"; // ⚠️ mets ton vrai domaine

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = Object.keys(caseStudies).map((slug) => ({
    url: `${SITE_URL}/projets/${slug}`,
    lastModified: new Date(),
  }));
  return [{ url: SITE_URL, lastModified: new Date() }, ...cases];
}
