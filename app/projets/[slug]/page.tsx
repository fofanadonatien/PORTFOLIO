import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Reveal, Footer } from "@/components/ui";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudies[params.slug];
  if (!cs) return {};
  return { title: cs.title, description: cs.intro };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies[params.slug];
  if (!cs) notFound();

  return (
    <>
      <Nav />

      <article className="pt-16 pb-24">
        <div className="max-w-[820px] mx-auto px-6">
          {/* fil d'ariane */}
          <Reveal>
            <Link href="/#travaux" className="arrow-link mb-8 inline-flex" style={{ transform: "scaleX(1)" }}>
              <span style={{ transform: "rotate(180deg)", display: "inline-block" }}>→</span> Retour aux travaux
            </Link>
          </Reveal>

          {/* en-tête */}
          <Reveal>
            <span className="eyebrow block mb-4 mt-6">{cs.eyebrow}</span>
            <h1 className="text-[clamp(30px,4.6vw,44px)] leading-[1.1] mb-5">{cs.title}</h1>
            <p className="text-[19px] max-w-[680px]" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{cs.intro}</p>
          </Reveal>

          {/* méta */}
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-10 rounded-xl overflow-hidden" style={{ border: "1px solid var(--line)", background: "var(--line)" }}>
              {cs.meta.map((m) => (
                <div key={m.label} className="p-4" style={{ background: "var(--surface)" }}>
                  <div className="font-mono text-[11px] uppercase tracking-wide mb-1.5" style={{ color: "var(--ink-3)" }}>{m.label}</div>
                  <div className="text-[13.5px] font-medium">{m.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* corps */}
          <div className="mt-14 flex flex-col gap-12">
            {cs.blocks.map((b) => (
              <Reveal key={b.heading}>
                <section>
                  <h2 className="text-[22px] mb-4">{b.heading}</h2>
                  {b.body.map((p, i) => (
                    <p key={i} className="text-[16.5px] mb-3.5" style={{ color: "var(--ink-2)", lineHeight: 1.7 }}>{p}</p>
                  ))}
                </section>
              </Reveal>
            ))}
          </div>

          {/* captures */}
          <Reveal>
            <section className="mt-14">
              <h2 className="text-[22px] mb-5">Aperçus</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {cs.captures.map((c, i) => (
                  <div key={i} className="rounded-xl grid place-items-center aspect-[16/10]" style={{ border: "1px solid var(--line)", background: "linear-gradient(135deg, var(--line-soft), var(--surface))" }}>
                    <div className="text-center font-mono text-[12.5px]" style={{ color: "var(--ink-3)" }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 20"/></svg>
                      {c.label}<br /><span className="opacity-70">(capture à intégrer)</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* stack + repo */}
          <Reveal>
            <section className="mt-14 pt-10" style={{ borderTop: "1px solid var(--line)" }}>
              <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-wide mb-3" style={{ color: "var(--ink-3)" }}>Technologies</h3>
                  <div className="flex flex-wrap gap-1.5">{cs.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                </div>
                {cs.repoLabel && (
                  <div className="text-right">
                    {cs.repoUrl ? (
                      <a href={cs.repoUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[13px] px-3 py-1.5 rounded-lg font-mono transition-colors hover:text-accent" style={{ border: "1px solid var(--line)", background: "var(--surface)", color: "var(--ink-2)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>
                        Voir sur GitHub
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-[13px] px-3 py-1.5 rounded-lg font-mono" style={{ border: "1px solid var(--line)", background: "var(--surface)", color: "var(--ink-2)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        {cs.repoLabel}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {cs.repoNote && <p className="text-[13px] mt-4" style={{ color: "var(--ink-3)", lineHeight: 1.5 }}>{cs.repoNote}</p>}
            </section>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="mt-14 text-center rounded-2xl p-10" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
              <p className="text-[17px] mb-5" style={{ color: "var(--ink-2)" }}>Ce type de raisonnement vous parle ?</p>
              <Link href="/#contact" className="btn btn-primary">Me contacter</Link>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </>
  );
}
