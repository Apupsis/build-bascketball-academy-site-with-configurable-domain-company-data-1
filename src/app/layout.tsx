import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { companyConfig } from "@/config/company";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
  variable: "--font-tajawal",
});

const { company, domain } = companyConfig;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${domain}`),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "أفضل أكاديمية كرة سلة في مصر. تدريب احترافي للناشئين والشباب مع مدربين معتمدين دولياً. سجل الآن واحجز جلستك التجريبية المجانية.",
  keywords: ["كرة سلة", "أكاديمية كرة سلة", "تدريب كرة سلة", "القاهرة", "مصر", "ناشئين", "رياضة"],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: `https://${domain}`,
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description:
      "أفضل أكاديمية كرة سلة في مصر. تدريب احترافي للناشئين والشباب مع مدربين معتمدين دولياً.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: `${company.name} - أكاديمية كرة السلة`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: "أفضل أكاديمية كرة سلة في مصر.",
    images: ["https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}