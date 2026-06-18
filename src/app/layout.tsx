import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentRoot } from "@/components/cookies/CookieConsentRoot";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title:
    "Damages Expert Witness UK | Quantum, Loss of Earnings & Commercial Damages",
  description:
    "UK-only damages expert witness referral for solicitors and counsel. Forensic accountants and quantum experts for personal injury, commercial disputes, clinical negligence, and UK-seated arbitration. CPR Part 35 compliant.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <CookieConsentRoot>
          <Header />
          <main className="min-w-0 flex-1">{children}</main>
          <Footer />
        </CookieConsentRoot>
      </body>
    </html>
  );
}
