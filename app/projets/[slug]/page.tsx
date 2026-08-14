import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudies[params.slug];
  if (!cs) return {};
  return { title: cs.title, description: cs.intro };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return <CaseStudyClient slug={params.slug} />;
}
