"use client";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import { Reveal, RichText, Footer, GithubIcon } from "@/components/ui";
import { Carousel } from "@/components/Carousel";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const {
    profile,
    stats,
    skills,
    certifications,
    recommendation,
    parcours,
    lookingFor,
    contact,
    projects,
    miniProjects,
    caseStudies,
    ui,
  } = t;
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
              <Link href="#travaux" className="btn btn-primary">{ui.home.heroCtaWork}</Link>
              <Link href="#contact" className="btn btn-ghost">{ui.home.heroCtaContact}</Link>
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
        <div className="max-w-content mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl px-5 py-[22px]" style={{ background: "var(--canvas)", border: "1px solid var(--line)" }}>
              <div className="text-[26px] font-semibold" style={{ letterSpacing: "-.02em" }}>{s.n}</div>
              <div className="text-[13px] mt-1.5" style={{ color: "var(--ink-2)", lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TRAVAUX */}
      <section id="travaux" className="py-20">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="mb-11 max-w-[640px]">
              <span className="eyebrow block mb-3">{ui.home.workEyebrow}</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)] mb-3.5">{ui.home.workTitle}</h2>
              <p className="text-[18px]" style={{ color: "var(--ink-2)" }}>{ui.home.workLead}</p>
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
                            {p.featured ? ui.home.readFullCase : ui.home.seeDetail} →
                          </Link>
                        )}
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[13.5px] font-medium transition-colors hover:text-accent" style={{ color: "var(--ink-2)" }}>
                            <GithubIcon size={15} /> {ui.home.codeOnGithub}
                          </a>
                        )}
                        {p.githubPrivate && (
                          <span className="inline-flex items-center gap-2 text-[13px] font-mono" style={{ color: "var(--ink-3)" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            {ui.home.privateRepo}
                          </span>
                        )}
                      </div>
                    </div>
                    <div style={{ borderLeft: "1px solid var(--line)" }}>
                      <Carousel slides={caseStudies[p.slug]?.captures ?? [{ label: p.visualLabel }]} />
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
              <span className="eyebrow block mb-3">{ui.home.skillsEyebrow}</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)]">{ui.home.skillsTitle}</h2>
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
              <span className="eyebrow block mb-3">{ui.home.recoEyebrow}</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)]">{ui.home.recoTitle}</h2>
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
                  {ui.home.recoAvailable}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS — vitrine horizontale */}
      <section id="certs" className="py-20" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="mb-11 max-w-[640px]">
              <span className="eyebrow block mb-3">{ui.home.certsEyebrow}</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)]">{ui.home.certsTitle}</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="marquee -mx-6 px-6">
              <div className="marquee-track gap-4">
                {[...certifications, ...certifications].map((c, i) => {
                  const CardTag = c.href ? "a" : "div";
                  return (
                    <CardTag
                      key={`${c.title}-${i}`}
                      {...(c.href ? { href: c.href, target: "_blank", rel: "noopener" } : {})}
                      aria-hidden={i >= certifications.length ? true : undefined}
                      className="flex-shrink-0 w-[200px] rounded-xl p-5 flex flex-col items-center text-center gap-3 transition-colors"
                      style={{ background: "var(--canvas)", border: "1px solid var(--line)", cursor: c.href ? "pointer" : "default" }}
                    >
                      <div className="relative w-14 h-14 rounded-full grid place-items-center font-mono font-medium text-[13px]" style={{ background: "var(--accent-wash)", color: "var(--accent)" }}>
                        {c.badge}
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full" style={{ background: c.status === "done" ? "var(--ok)" : "var(--warn)", border: "2px solid var(--canvas)" }} />
                      </div>
                      <h4 className="text-[14px] leading-snug">{c.title}</h4>
                    </CardTag>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="text-[14.5px] mt-6 max-w-[620px]" style={{ color: "var(--ink-3)" }}>
              {ui.home.certsFooter}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PARCOURS */}
      <section id="parcours" className="py-20">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="max-w-[760px]">
              <span className="eyebrow block mb-3">{ui.home.parcoursEyebrow}</span>
              <h2 className="text-[clamp(26px,3.4vw,34px)] mb-3.5">{parcours.title}</h2>
              {parcours.paragraphs.map((p, i) => (
                <p key={i} className="text-[18px] max-w-[760px] mb-4" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{p}</p>
              ))}
              <div className="flex flex-wrap gap-x-8 gap-y-2 mt-2">
                <Link href="/pourquoi-erp" className="arrow-link">{ui.home.whyErpLink}</Link>
                <Link href="/methode" className="arrow-link">{ui.home.methodLink}</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CE QUE JE RECHERCHE */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <div className="rounded-2xl p-11" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
              <span className="eyebrow block mb-3">{lookingFor.eyebrow}</span>
              <h2 className="text-[clamp(24px,3vw,30px)] mb-4 max-w-[640px]">{lookingFor.title}</h2>
              <p className="text-[18px] max-w-[680px]" style={{ color: "var(--ink-2)", lineHeight: 1.65 }}>{lookingFor.paragraph}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <span className="eyebrow">{ui.home.contactEyebrow}</span>
            <h2 className="text-[clamp(28px,4vw,40px)] mt-3 mb-4">{contact.title}</h2>
            <p className="text-[18px] max-w-[640px] mx-auto mb-[30px]" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>
              {contact.paragraph}
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
