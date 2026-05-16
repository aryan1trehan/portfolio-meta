import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enhanccee — Meta Ads Agency | Up to 7x ROAS | India & International",
  description:
    "Enhanccee is a performance-first Meta Ads agency. We've scaled boAt, AstroTalk, BeatO, and 6+ brands globally. Up to 7x ROAS across e-com, fashion, healthcare & hospitality.",
  openGraph: {
    title: "Enhanccee — We Engineer Revenue, Not Just Reach",
    description:
      "Performance-first Meta Ads agency. ₹78Cr+ managed. 25+ brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">{children}</body>
    </html>
  );
}
