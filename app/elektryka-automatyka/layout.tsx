
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Automatyka przemysłowa i prefabrykacja szaf sterowniczych",

  description:
    "Projektowanie i prefabrykacja szaf sterowniczych, modernizacja maszyn, sterowanie PLC, instalacje elektryczne i pomiary SEP G1 E+D. URSO INSTAL – Śląsk i cała Polska.",

  alternates: {
    canonical: "/elektryka-automatyka",
  },

  openGraph: {
    title:
      "Automatyka przemysłowa i prefabrykacja szaf sterowniczych | URSO INSTAL",
    description:
      "Prefabrykacja szaf sterowniczych, modernizacja układów automatyki, sterowanie PLC i pomiary elektryczne dla przemysłu.",
    url: "/elektryka-automatyka",
    siteName: "URSO INSTAL",
    locale: "pl_PL",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ElektrykaAutomatykaLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
