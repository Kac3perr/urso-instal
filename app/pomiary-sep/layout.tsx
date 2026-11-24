
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pomiary elektryczne SEP G1 E+D | Pomiary instalacji – URSO INSTAL",
  description:
    "Pomiary elektryczne SEP G1 E+D na Śląsku i w całej Polsce. Pomiary odbiorcze i okresowe instalacji, impedancji pętli zwarcia, rezystancji izolacji, wyłączników RCD oraz ciągłości przewodów ochronnych. Dokumentacja wyników pomiarów.",
  alternates: {
    canonical: "/pomiary-sep",
  },
  openGraph: {
    title: "Pomiary elektryczne SEP G1 E+D | URSO INSTAL",
    description:
      "Pomiary odbiorcze i okresowe instalacji elektrycznych. Kontrola parametrów ochronnych, testy RCD, pomiary rezystancji izolacji i impedancji pętli zwarcia.",
    url: "/pomiary-sep",
    siteName: "URSO INSTAL",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PomiarySepLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
