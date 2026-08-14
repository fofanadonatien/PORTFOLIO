import type { Metadata } from "next";
import PourquoiErpClient from "./PourquoiErpClient";

export const metadata: Metadata = {
  title: "Pourquoi les ERP ?",
  description:
    "Du BTP à l'ERP PHASEO : pourquoi je vise une carrière dans le conseil en systèmes d'information.",
};

export default function PourquoiErpPage() {
  return <PourquoiErpClient />;
}
