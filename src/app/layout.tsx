import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Parlia - Radical Self-Discovery Engine",
  description:
    "Parlia is a radical new self-discovery engine, and home of your Opinion DNA™. Discover your personality, values, and thinking.",
  openGraph: {
    title: "Parlia - Radical Self-Discovery Engine",
    description:
      "Learn about the team behind Parlia and the creation of the Opinion DNA, and discover our mission to improve the world through radical self-realization.",
    images: ["https://www.parlia.com/static/img/sharing_logo_rainbow2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parlia - Radical Self-Discovery Engine",
    description:
      "Learn about the team behind Parlia and the creation of the Opinion DNA, and discover our mission to improve the world through radical self-realization.",
    images: ["https://www.parlia.com/static/img/sharing_logo_rainbow2.png"],
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
