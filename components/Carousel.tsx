"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type Slide = { label: string; src?: string };

// Galerie qui défile seule (boucle, pause au survol) + flèches pour naviguer soi-même.
// Tant qu'une capture n'a pas de `src`, elle affiche un emplacement gris "à intégrer".
export function Carousel({ slides, autoPlayMs = 4200 }: { slides: Slide[]; autoPlayMs?: number }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = slides.length;

  const stop = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  };
  const start = () => {
    stop();
    if (count <= 1) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs);
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  if (count === 0) return null;

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + count) % count);
    start(); // une interaction manuelle relance simplement le minuteur
  };

  return (
    <div className="relative h-full min-h-[180px] overflow-hidden" onMouseEnter={stop} onMouseLeave={start}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 grid place-items-center p-[26px] transition-opacity duration-500"
          style={{ opacity: i === index ? 1 : 0, background: "linear-gradient(135deg, var(--line-soft), var(--surface))" }}
          aria-hidden={i !== index}
        >
          {slide.src ? (
            <Image src={slide.src} alt={slide.label} fill className="object-cover" sizes="(max-width:1024px) 100vw, 420px" />
          ) : (
            <div className="text-center font-mono text-[13px]" style={{ color: "var(--ink-3)" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2.5 opacity-50">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
              </svg>
              {slide.label}<br /><span className="opacity-70">(à intégrer)</span>
            </div>
          )}
        </div>
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Image précédente"
            onClick={() => go(-1)}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full grid place-items-center opacity-70 hover:opacity-100 transition-opacity"
            style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--ink-2)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={() => go(1)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full grid place-items-center opacity-70 hover:opacity-100 transition-opacity"
            style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--ink-2)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
          <span
            className="absolute bottom-2.5 right-3 z-10 font-mono text-[10.5px] px-1.5 py-0.5 rounded"
            style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--ink-3)" }}
          >
            {index + 1} / {count}
          </span>
        </>
      )}
    </div>
  );
}
