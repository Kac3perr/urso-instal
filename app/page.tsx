
import type { Metadata } from "next";
import ServiceSelector from "./components/sections/ServiceSelector";

export const metadata: Metadata = {
  title: "URSO INSTAL – Termowizja Przemysłowa i Automatyka Śląsk",

  description:
    "URSO INSTAL – badania termowizyjne rozdzielnic, diagnostyka instalacji elektrycznych, prefabrykacja szaf sterowniczych i automatyka przemysłowa. Usługi dla firm na Śląsku i w całej Polsce.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "URSO INSTAL – Termowizja Przemysłowa i Automatyka Śląsk",
    description:
      "Badania termowizyjne rozdzielnic, diagnostyka instalacji elektrycznych, prefabrykacja szaf sterowniczych i automatyka przemysłowa dla przemysłu.",
    url: "/",
    siteName: "URSO INSTAL",
    locale: "pl_PL",
    type: "website",
  },
};

export default function Home() {
  return <ServiceSelector />;
}
