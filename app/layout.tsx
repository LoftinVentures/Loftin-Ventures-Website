import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "JAY L² — Lose the weight. Keep the strength.",
    template: "%s | JAY L²",
  },
  description: siteConfig.description,
  applicationName: "JAY L²",
  authors: [{ name: "JAY L²" }],
  creator: "JAY L²",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "JAY L²",
    title: "JAY L² — Lose the weight. Keep the strength.",
    description: siteConfig.description,
    images: [
      {
        url: "/jay-l2-campaign.jpg",
        width: 1536,
        height: 807,
        alt: "JAY L² — Lose the weight. Keep the strength.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAY L² — Lose the weight. Keep the strength.",
    description: siteConfig.description,
    images: ["/jay-l2-campaign.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <StructuredData />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
