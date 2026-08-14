import type { Metadata } from "next";
import MethodeClient from "./MethodeClient";

export const metadata: Metadata = {
  title: "Ma façon de travailler",
  description:
    "La démarche que j'applique sur chaque projet : comprendre le besoin, analyser l'existant, modéliser, concevoir, développer, tester, documenter, améliorer.",
};

export default function MethodePage() {
  return <MethodeClient />;
}
