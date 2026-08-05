import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

// ⚠️ Remplace par ton vrai domaine si tu achètes un nom de domaine personnalisé plus tard
const SITE_URL = "https://donatien-fofana.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} - Futur consultant ERP / SI`,
    template: `%s - ${profile.name}`,
  },
  description:
    "Étudiant MIAGE, futur consultant ERP / systèmes d'information. Analyse métier, Java, Angular, Oracle, Spring Boot. Je modernise les systèmes métier sans casser ce qui fonctionne.",
  keywords: [
    "consultant ERP", "MIAGE", "systèmes d'information", "analyste SI",
    "Java", "Angular", "Oracle", "Spring Boot", "stage", "alternance",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: `${profile.name} — Futur consultant ERP / SI`,
    description:
      "Étudiant MIAGE, futur consultant ERP / systèmes d'information. Je fais le pont entre le métier et la technique.",
    siteName: profile.name,
    images: [{ url: "/donatien.jpg", width: 400, height: 400, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — Futur consultant ERP / SI`,
    description: "Étudiant MIAGE, futur consultant ERP / systèmes d'information.",
    images: ["/donatien.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Étudiant MIAGE — futur consultant ERP / SI",
    email: profile.contact.email,
    url: SITE_URL,
    image: `${SITE_URL}/donatien.jpg`,
    sameAs: [profile.contact.linkedin, profile.contact.github],
    knowsAbout: ["ERP", "Systèmes d'information", "Java", "Angular", "Oracle", "SQL"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Université Grenoble Alpes" },
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Applique le thème avant le rendu pour éviter le flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
