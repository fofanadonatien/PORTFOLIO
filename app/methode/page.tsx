import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Reveal, Footer } from "@/components/ui";
import { method } from "@/data/content";

export const metadata: Metadata = {
  title: "Ma façon de travailler",
  description:
    "La démarche que j'applique sur chaque projet : comprendre le besoin, analyser l'existant, modéliser, concevoir, développer, tester, documenter, améliorer.",
};

export default function MethodePage() {
  return (
    <>
      <Nav />

      <article className="pt-16 pb-24">
        <div className="max-w-[820px] mx-auto px-6">
          <Reveal>
            <Link href="/" className="arrow-link mb-8 inline-flex" style={{ transform: "scaleX(1)" }}>
              <span style={{ transform: "rotate(180deg)", display: "inline-block" }}>→</span> Retour à l'accueil
            </Link>
          </Reveal>

          <Reveal>
            <span className="eyebrow block mb-4 mt-6">Ma façon de travailler</span>
            <h1 className="text-[clamp(30px,4.6vw,44px)] leading-[1.1] mb-5">
              Une même démarche, quel que soit le projet.
            </h1>
            <p className="text-[19px] max-w-[680px]" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>
              Que ce soit pour moderniser un ERP ou optimiser un algorithme de tournées, j'applique la même
              logique : comprendre avant d'agir, et documenter ce qui a été décidé.
            </p>
          </Reveal>

          <div className="mt-16 relative">
            <div
              className="absolute left-[19px] top-2 bottom-2 w-px hidden sm:block"
              style={{ background: "var(--line)" }}
              aria-hidden
            />
            <div className="flex flex-col gap-10">
              {method.map((m, i) => (
                <Reveal key={m.step} delay={i * 70}>
                  <div className="flex gap-6 items-start">
                    <div
                      className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full grid place-items-center font-mono text-[12px] font-medium"
                      style={{ background: "var(--surface)", border: "1px solid var(--accent-wash)", color: "var(--accent)" }}
                    >
                      {m.step}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-[18px] mb-2">{m.title}</h3>
                      <p className="text-[15.5px] max-w-[600px]" style={{ color: "var(--ink-2)", lineHeight: 1.65 }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-16 text-center rounded-2xl p-10" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
              <p className="text-[17px] mb-5" style={{ color: "var(--ink-2)" }}>
                Voir cette démarche appliquée sur un vrai projet ?
              </p>
              <Link href="/projets/phaseo" className="btn btn-primary">Lire l'étude de cas PHASEO</Link>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </>
  );
}
