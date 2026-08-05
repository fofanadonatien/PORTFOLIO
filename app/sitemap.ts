import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";

const SITE_URL = "https://donatien-fofana.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = Object.keys(caseStudies).map((slug) => ({
    url: `${SITE_URL}/projets/${slug}`,
    lastModified: new Date(),
  }));
  const pages = ["/methode", "/pourquoi-erp"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
  return [{ url: SITE_URL, lastModified: new Date() }, ...pages, ...cases];
}
