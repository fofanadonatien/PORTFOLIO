"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    setDark(!dark);
  };

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors"
      style={{
        background: "color-mix(in srgb, var(--canvas) 82%, transparent)",
        borderColor: scrolled ? "var(--line)" : "transparent",
      }}
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-[15px] flex items-center gap-2.5" style={{ letterSpacing: "-.01em" }}>
          <span className="w-2 h-2 rounded-sm inline-block" style={{ background: "var(--accent)" }} />
          {profile.name}
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {[
            ["Travaux", "/#travaux"],
            ["Compétences", "/#competences"],
            ["Parcours", "/#parcours"],
            ["Recommandation", "/#reco"],
          ].map(([label, href]) => (
            <Link key={label} href={href} className="text-sm transition-colors hover:text-ink" style={{ color: "var(--ink-2)" }}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <button
            onClick={toggle}
            aria-label="Changer de thème"
            className="w-[34px] h-[34px] rounded-md grid place-items-center transition-colors"
            style={{ border: "1px solid var(--line)", background: "var(--surface)", color: "var(--ink-2)" }}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            )}
          </button>
          <Link href="/#contact" className="btn btn-primary">Me contacter</Link>
        </div>
      </div>
    </nav>
  );
}
