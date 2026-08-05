import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import { Reveal, RichText, Footer, GithubIcon } from "@/components/ui";
import { profile, stats } from "@/data/profile";
import { projects, miniProjects } from "@/data/projects";
import { skills, certifications, recommendation, parcours } from "@/data/content";

export default function Home() {
  const heroTitle = profile.heroTitle.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      <Nav />

      {/* HERO */}
      <header id="top" className="pt-24 pb-[72px] overflow-hidden">
        <div className="max-w-content mx-auto px-6 grid lg:grid-cols-[1.35fr_.9fr] gap-14 items-center">
          <Reveal className="!opacity-100 !translate-y-0">
            <div className="inline-flex items-center gap-2 text-[13px] mb-6 px-3 py-1.5 rounded-full"
              style={{ border: "1px solid var(--line)", background: "var(--surface)", color: "var(--ink-2)" }}>
              <span className="relative w-[7px] h-[7px] rounded-full live-dot" style={{ background: "var(--ok)" }} />
              {profile.availability}
            </div>
            <h1 className="text-[clamp(34px,5.4vw,54px)] leading-[1.06] mb-5">
              {heroTitle.map((p, i) =>
                p.startsWith("**") ? <span key={i} style={{ color: "var(--accent)" }}>{p.slice(2, -2)}</span> : <span key={i}>{p}</span>
              )}
            </h1>
            <p className="text-[19px] mb-[30px] max-w-[560px]" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>
              {profile.heroLead}
            </p>
            <div className="flex gap-3 flex-wrap mb-[34px]">
              <Link href="#travaux" className="btn btn-primary">Voir mes travaux</Link>
              <Link href="#contact" className="btn btn-ghost">Me contacter</Link>
            </div>
            <div className="flex gap-6 flex-wrap text-[13.5px]" style={{ color: "var(--ink-2)" }}>
              <span><b style={{ color: "var(--ink)" }}>MIAGE</b> · Université Grenoble Alpes</span>
              <span><b style={{ color: "var(--ink)" }}>Java</b> · Angular · Oracle · SQL</span>
              <span><b style={{ color: "var(--ink)" }}>Lyon</b> / Grenoble</span>
            </div>
          </Reveal>

          {/* photo + présentation */}
          <Reveal className="!opacity-100 !translate-y-0">
            <aside className="rounded-2xl overflow-hidden shadow-soft" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
              <div className="relative aspect-[4/3]">
                <Image src={profile.photo} alt={profile.name} fill priority className="object-cover object-top" sizes="(max-width:1024px) 100vw, 400px" />
              </div>
              <div className="px-6 pt-[22px] pb-[26px]">
                <div className="text-[19px] font-semibold" style={{ letterSpacing: "-.01em" }}>{profile.name}</div>
                <div className="text-[13px] font-mono my-1" style={{ color: "var(--accent)" }}>{profile.role}</div>
                <p className="text-[14px] mt-2.5" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{profile.introText}</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </header>

      {/* BANDEAU CHIFFRES */}
      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--surface)" }}>
        <div className="max-w-content mx-auto px-0 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="px-6 py-[30px]" style={{ borderLeft: i % 4 === 0 ? "none" : "1px solid var(--line)", borderTop: i >= 2 ? "1px solid var(--line)" : undefined }}>
              <div className="text-[28px] font-semibold" style={{ letterSpacing: "-.02em" }}>{s.n}</div>
              <div className="text-[13px] mt-1" style={{ color: "var(--ink-2)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TRAVAUX */}
      <section id="travaux" className="py-20">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="mb-11 max-w-[640px]">
              <span className="eyebrow block mb-3">Travaux sélectionnés</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)] mb-3.5">Des projets qui racontent une décision.</h2>
              <p className="text-[18px]" style={{ color: "var(--ink-2)" }}>Chaque projet suit la même logique : le contexte métier, le problème, la décision prise, et ce qui a été construit.</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {projects.map((p) => (
              <Reveal key={p.slug}>
                <article className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-soft"
                  style={{ background: "var(--surface)", border: `1px solid ${p.featured ? "var(--accent-wash)" : "var(--line)"}` }}>
                  <div className="grid lg:grid-cols-[1fr_.85fr]">
                    <div className="p-[34px]">
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider mb-4" style={{ color: "var(--accent)" }}>{p.tag}</span>
                      <h3 className="text-[24px] mb-3">{p.title}</h3>
                      <div className="text-[13px] font-mono mb-3.5" style={{ color: "var(--ink-3)" }}>{p.role}</div>
                      <p className="text-[15px] mb-5" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}><RichText text={p.summary} /></p>
                      <div className="flex flex-wrap gap-1.5 mb-[22px]">
                        {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        {p.detailed && (
                          <Link href={`/projets/${p.slug}`} className="arrow-link">
                            {p.featured ? "Lire l'étude de cas complète" : "Voir le détail"} →
                          </Link>
                        )}
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[13.5px] font-medium transition-colors hover:text-accent" style={{ color: "var(--ink-2)" }}>
                            <GithubIcon size={15} /> Code sur GitHub
                          </a>
                        )}
                        {p.githubPrivate && (
                          <span className="inline-flex items-center gap-2 text-[13px] font-mono" style={{ color: "var(--ink-3)" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            Dépôt privé (client)
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="grid place-items-center p-[26px] min-h-[180px]" style={{ borderLeft: "1px solid var(--line)", background: "linear-gradient(135deg, var(--line-soft), var(--surface))" }}>
                      <div className="text-center font-mono text-[13px]" style={{ color: "var(--ink-3)" }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2.5 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                        {p.visualLabel}<br /><span className="opacity-70">(à intégrer)</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* projets secondaires */}
          <div className="grid md:grid-cols-3 gap-4 mt-5">
            {miniProjects.map((m) => (
              <Reveal key={m.title}>
                <a href={m.github} target="_blank" rel="noopener" className="group block rounded-xl p-[22px] h-full transition-all duration-200 hover:-translate-y-0.5" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
                  <div className="flex items-start justify-between mb-[7px]">
                    <h4 className="text-[15px]">{m.title}</h4>
                    <span className="transition-colors group-hover:text-accent" style={{ color: "var(--ink-3)" }}><GithubIcon size={16} /></span>
                  </div>
                  <p className="text-[13px] mb-3.5" style={{ color: "var(--ink-2)", lineHeight: 1.5 }}>{m.desc}</p>
                  <div className="flex flex-wrap gap-1.5">{m.stack.map((s) => <span key={s} className="chip !text-[10.5px]">{s}</span>)}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="py-20" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="mb-11 max-w-[640px]">
              <span className="eyebrow block mb-3">Compétences</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)]">Ce que je sais faire, par domaine.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((s) => (
              <Reveal key={s.title}>
                <div className="rounded-xl p-[26px] h-full" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
                  <h4 className="text-[15px] mb-3.5 flex items-center gap-2.5">{s.title}<span className="font-mono text-[11px] font-normal" style={{ color: "var(--ink-3)" }}>{s.key}</span></h4>
                  <div className="flex flex-wrap gap-1.5">{s.items.map((i) => <span key={i} className="chip">{i}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMANDATION */}
      <section id="reco" className="py-20">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="mb-11 max-w-[640px]">
              <span className="eyebrow block mb-3">Recommandation</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)]">Ce qu'en dit mon tuteur de stage.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative rounded-2xl p-11 shadow-soft" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
              <span className="absolute top-7 left-[34px] font-mono text-[60px] leading-[.6]" style={{ color: "var(--accent-wash)" }}>&quot;</span>
              <blockquote className="text-[19px] max-w-[720px] my-6 relative" style={{ lineHeight: 1.6, letterSpacing: "-.01em" }}>{recommendation.quote}</blockquote>
              <div className="flex items-center gap-3.5 pt-[22px]" style={{ borderTop: "1px solid var(--line)" }}>
                <div className="w-11 h-11 rounded-[10px] grid place-items-center font-semibold text-[15px] text-white" style={{ background: "var(--accent)" }}>{recommendation.initials}</div>
                <div>
                  <b className="block text-[15px]">{recommendation.author}</b>
                  <span className="text-[13px]" style={{ color: "var(--ink-2)" }}>{recommendation.authorRole}</span>
                </div>
                <span className="ml-auto text-[12px] font-mono hidden sm:inline-flex items-center gap-1.5" style={{ color: "var(--ok)" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  Lettre disponible
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="py-20" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="mb-11 max-w-[640px]">
              <span className="eyebrow block mb-3">Certifications</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)]">Une montée en compétences continue.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <Reveal key={c.title}>
                <div className="rounded-xl p-6 h-full flex gap-4" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
                  <div className="w-[42px] h-[42px] rounded-[9px] grid place-items-center flex-shrink-0 font-mono font-medium text-[12px]" style={{ background: "var(--accent-wash)", color: "var(--accent)" }}>{c.badge}</div>
                  <div>
                    <h4 className="text-[15px] mb-1.5">
                      {c.title}
                      <span className="font-mono text-[10.5px] uppercase tracking-wide px-2 py-0.5 rounded ml-2 align-middle"
                        style={c.status === "done"
                          ? { background: "color-mix(in srgb, var(--ok) 12%, transparent)", color: "var(--ok)" }
                          : { background: "color-mix(in srgb, var(--warn) 14%, transparent)", color: "var(--warn)" }}>
                        {c.statusLabel}
                      </span>
                    </h4>
                    <p className="text-[13px]" style={{ color: "var(--ink-2)", lineHeight: 1.5 }}>{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section id="parcours" className="py-20">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="max-w-[760px]">
              <span className="eyebrow block mb-3">Parcours</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)] mb-3.5">{parcours.title}</h2>
              {parcours.paragraphs.map((p, i) => (
                <p key={i} className="text-[18px] max-w-[760px] mb-4" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2 className="text-[clamp(28px,4vw,40px)] mt-3 mb-4">Un stage, une alternance, un projet ?</h2>
            <p className="text-[18px] max-w-[640px] mx-auto mb-[30px]" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>
              Je cherche un stage de 6 mois en M1 (systèmes d'information / ERP / développement), puis une alternance en M2. N'hésitez pas à m'écrire ou à m'appeler.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href={`mailto:${profile.contact.email}`} className="btn btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
                {profile.contact.email}
              </a>
              <a href={`tel:${profile.contact.phoneHref}`} className="btn btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {profile.contact.phone}
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener" className="btn btn-ghost">LinkedIn</a>
              <a href={profile.contact.github} target="_blank" rel="noopener" className="btn btn-ghost">GitHub</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
