
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Certyfikat ISO 18436-7 Level 1 | Termowizja – URSO INSTAL",
  description:
    "Certyfikacja termograficzna ISO 18436-7 Level 1. Poznaj kompetencje URSO INSTAL w zakresie diagnostyki termowizyjnej, inspekcji rozdzielnic i urządzeń przemysłowych oraz przygotowywania raportów z badań.",
  alternates: {
    canonical: "/certyfikat-iso",
  },
  openGraph: {
    title: "Certyfikat ISO 18436-7 Level 1 | URSO INSTAL",
    description:
      "Certyfikowana diagnostyka termowizyjna, inspekcje urządzeń przemysłowych i dokumentacja wyników badań. Poznaj kompetencje i metodologię URSO INSTAL.",
    url: "/certyfikat-iso",
    siteName: "URSO INSTAL",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CertyfikatIsoLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
