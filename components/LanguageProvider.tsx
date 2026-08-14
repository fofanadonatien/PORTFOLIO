"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { profile as profileFr, stats as statsFr } from "@/data/profile";
import {
  skills as skillsFr,
  certifications as certificationsFr,
  recommendation as recommendationFr,
  parcours as parcoursFr,
  lookingFor as lookingForFr,
  contact as contactFr,
  method as methodFr,
  whyErp as whyErpFr,
  ui as uiFr,
} from "@/data/content";
import { projects as projectsFr, miniProjects as miniProjectsFr } from "@/data/projects";
import { caseStudies as caseStudiesFr } from "@/data/caseStudies";

import { profile as profileEn, stats as statsEn } from "@/data/en/profile";
import {
  skills as skillsEn,
  certifications as certificationsEn,
  recommendation as recommendationEn,
  parcours as parcoursEn,
  lookingFor as lookingForEn,
  contact as contactEn,
  method as methodEn,
  whyErp as whyErpEn,
  ui as uiEn,
} from "@/data/en/content";
import { projects as projectsEn, miniProjects as miniProjectsEn } from "@/data/en/projects";
import { caseStudies as caseStudiesEn } from "@/data/en/caseStudies";

export type Lang = "fr" | "en";

// Un seul objet par langue : chaque page/composant lit dedans ce dont il a besoin.
const dictionaries = {
  fr: {
    profile: profileFr,
    stats: statsFr,
    skills: skillsFr,
    certifications: certificationsFr,
    recommendation: recommendationFr,
    parcours: parcoursFr,
    lookingFor: lookingForFr,
    contact: contactFr,
    method: methodFr,
    whyErp: whyErpFr,
    projects: projectsFr,
    miniProjects: miniProjectsFr,
    caseStudies: caseStudiesFr,
    ui: uiFr,
  },
  en: {
    profile: profileEn,
    stats: statsEn,
    skills: skillsEn,
    certifications: certificationsEn,
    recommendation: recommendationEn,
    parcours: parcoursEn,
    lookingFor: lookingForEn,
    contact: contactEn,
    method: methodEn,
    whyErp: whyErpEn,
    projects: projectsEn,
    miniProjects: miniProjectsEn,
    caseStudies: caseStudiesEn,
    ui: uiEn,
  },
};

type Dictionary = typeof dictionaries.fr;

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dictionary } | null>(null);

// Enveloppe tout le site (posée dans app/layout.tsx). Mémorise la langue choisie
// dans localStorage, comme le fait déjà le bouton clair/sombre dans Nav.tsx.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "fr") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
