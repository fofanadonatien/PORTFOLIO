import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Reveal, Footer } from "@/components/ui";
import { whyErp } from "@/data/content";

export const metadata: Metadata = {
  title: "Pourquoi les ERP ?",
  description:
    "Du BTP à l'ERP PHASEO : pourquoi je vise une carrière dans le conseil en systèmes d'information.",
};

export default function PourquoiErpPage() {
  return (
    <>
      <Nav />

      <article className="pt-16 pb-24">
        <div className="max-w-[760px] mx-auto px-6">
          <Reveal>
            <Link href="/" className="arrow-link mb-8 inline-flex" style={{ transform: "scaleX(1)" }}>
              <span style={{ transform: "rotate(180deg)", display: "inline-block" }}>→</span> Retour à l'accueil
            </Link>
          </Reveal>

          <Reveal>
            <span className="eyebrow block mb-4 mt-6">{whyErp.eyebrow}</span>
            <h1 className="text-[clamp(30px,4.6vw,44px)] leading-[1.1] mb-8">{whyErp.title}</h1>
          </Reveal>

          <div className="flex flex-col gap-5">
            {whyErp.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-[18px]" style={{ color: "var(--ink-2)", lineHeight: 1.7 }}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-wrap gap-3">
              <Link href="/projets/phaseo" className="btn btn-primary">Lire l'étude de cas PHASEO</Link>
              <Link href="/methode" className="btn btn-ghost">Ma façon de travailler</Link>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </>
  );
}
