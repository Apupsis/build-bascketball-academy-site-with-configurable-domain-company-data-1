import type { Metadata } from "next";
import "./globals.css";
import { companyConfig } from "@/config/company";

export const metadata: Metadata = {
  title: `${companyConfig.company.name} - ${companyConfig.company.tagline}`,
  description: "Premier basketball academy offering youth development, elite training, and private coaching. Train with experienced coaches and reach your full potential.",
  keywords: ["basketball academy", "basketball training", "youth basketball", "sports training", "basketball camp"],
  openGraph: {
    title: `${companyConfig.company.name} - ${companyConfig.company.tagline}`,
    description: "Premier basketball academy offering youth development, elite training, and private coaching.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
