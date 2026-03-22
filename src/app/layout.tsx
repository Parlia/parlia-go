import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://go.parlia.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Parlia - Radical Self-Discovery Engine & Opinion DNA™",
    template: "%s | Parlia",
  },
  description:
    "Parlia is a radical new self-discovery engine, and home of your Opinion DNA™. Discover your personality, values, and thinking.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Parlia",
    title: "Parlia - Radical Self-Discovery Engine & Opinion DNA™",
    description:
      "Parlia is a radical new self-discovery engine. Discover your personality, values, and thinking with Opinion DNA™.",
    images: [
      {
        url: "/images/parlia-logo.svg",
        width: 406,
        height: 118,
        alt: "Parlia Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parlia - Radical Self-Discovery Engine & Opinion DNA™",
    description:
      "Parlia is a radical new self-discovery engine. Discover your personality, values, and thinking with Opinion DNA™.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
