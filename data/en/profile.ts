// ============================================================
//  ENGLISH VERSION of data/profile.ts — keep the exact same shape.
// ============================================================
import { profile as profileFr, stats as statsFr } from "@/data/profile";

export const profile: typeof profileFr = {
  name: "Donatien Fofana",
  role: "MIAGE student · heading toward ERP / IS consulting",
  heroTitle: "Future **ERP consultant**, between the business and the information system.",
  heroLead:
    "MIAGE student, training in information systems and ERP consulting. I like understanding a business need and turning it into a concrete solution — without breaking what already works.",
  availability: "MIAGE student — looking for a 6-month internship (2027-2028)",
  introText:
    "After a career in public works, I went back to studying business computing. Today I'm aiming for a career in ERP and information systems consulting — a field where listening to the business matters as much as mastering the technology.",
  photo: "/donatien.jpg",
  location: "Lyon / Grenoble",
  formation: "MIAGE · Université Grenoble Alpes",
  stackShort: "Java · Angular · Oracle · SQL",

  contact: {
    email: "donatienfofana00@gmail.com",
    phone: "+33 7 63 93 40 06",
    phoneHref: "+33763934006",
    linkedin: "https://www.linkedin.com/in/donatien-fofana-74b1b72b3",
    github: "https://github.com/fofanadonatien",
  },
};

export const stats: typeof statsFr = [
  { n: "17 years", l: "of business logic preserved in the PHASEO ERP since 2009" },
  { n: "400+", l: "delivery points optimized in the VRP project" },
  { n: "3", l: "full projects presented as detailed case studies" },
  { n: "2", l: "fields of experience: Civil Engineering • Computer Science" },
  { n: "4+", l: "certification tracks (Data • ERP • AI • Project Management)" },
];
