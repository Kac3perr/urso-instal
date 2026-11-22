
import type { Metadata } from "next";
import ServiceSelector from "./components/sections/ServiceSelector";

export const metadata: Metadata = {
  title: "URSO INSTAL – Termowizja i Automatyka Przemysłowa Śląsk",
  description:
    "URSO INSTAL oferuje termowizję przemysłową, diagnostykę instalacji elektrycznych, prefabrykację szaf sterowniczych i automatykę przemysłową. Obsługujemy Śląsk i całą Polskę.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "URSO INSTAL – Termowizja i Automatyka Przemysłowa",
    description:
      "Diagnostyka termowizyjna, elektryka i automatyka przemysłowa. Specjalistyczne usługi dla zakładów przemysłowych.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return <ServiceSelector />;
}
