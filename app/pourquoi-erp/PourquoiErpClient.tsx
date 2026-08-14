"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Reveal, Footer } from "@/components/ui";
import { useLanguage } from "@/components/LanguageProvider";

export default function PourquoiErpClient() {
  const { t } = useLanguage();
  const { whyErp, ui } = t;

  return (
    <>
      <Nav />
      <article className="pt-16 pb-24">
        <div className="max-w-[760px] mx-auto px-6">
          <Reveal>
            <Link href="/" className="arrow-link mb-8 inline-flex" style={{ transform: "scaleX(1)" }}>
              <span style={{ transform: "rotate(180deg)", display: "inline-block" }}>→</span> {ui.whyErpPage.back}
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
              <Link href="/projets/phaseo" className="btn btn-primary">{ui.whyErpPage.ctaCase}</Link>
              <Link href="/methode" className="btn btn-ghost">{ui.whyErpPage.ctaMethod}</Link>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </>
  );
}
