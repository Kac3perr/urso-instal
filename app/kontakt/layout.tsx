
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kontakt URSO INSTAL | Termowizja, automatyka i pomiary SEP",
  description:
    "Skontaktuj się z URSO INSTAL – Marcin Zdybek. Zapytaj o termowizję przemysłową, pomiary elektryczne SEP G1 E+D, prefabrykację szaf sterowniczych i automatykę przemysłową. Obsługujemy Śląsk i całą Polskę.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt URSO INSTAL | Marcin Zdybek",
    description:
      "Potrzebujesz inspekcji termowizyjnej, pomiarów elektrycznych lub wsparcia w automatyce przemysłowej? Skontaktuj się z URSO INSTAL.",
    url: "/kontakt",
    siteName: "URSO INSTAL",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KontaktLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
