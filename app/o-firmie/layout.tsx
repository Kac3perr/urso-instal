
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "O firmie URSO INSTAL | Termowizja i automatyka przemysłowa",
  description:
    "Poznaj URSO INSTAL – działalność Marcina Zdybka w zakresie termowizji przemysłowej, diagnostyki instalacji elektrycznych, prefabrykacji szaf sterowniczych i automatyki przemysłowej. Usługi na Śląsku i w całej Polsce.",
  alternates: {
    canonical: "/o-firmie",
  },
  openGraph: {
    title: "O firmie URSO INSTAL | Termowizja i automatyka przemysłowa",
    description:
      "URSO INSTAL łączy diagnostykę termowizyjną, elektrykę i automatykę przemysłową. Poznaj zakres działalności, kwalifikacje i podejście do realizacji usług.",
    url: "/o-firmie",
    siteName: "URSO INSTAL",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
