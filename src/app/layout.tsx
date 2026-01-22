import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Watch Ka | Stream Together",
  description:
    "Watch Ka helps you discover shows, plan group watch parties, and keep everyone in sync with a shared, real-time watchlist.",
  keywords: [
    "watch parties",
    "streaming planner",
    "watchlist",
    "TV tracking",
    "Watch Ka"
  ],
  openGraph: {
    title: "Watch Ka",
    description:
      "Coordinate watch parties, explore trending shows, and manage a shared watchlist in one place.",
    url: "https://agentic-b1e047c2.vercel.app",
    siteName: "Watch Ka",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch Ka",
    description:
      "Run cinematic nights your way—Watch Ka makes it effortless to discover, plan, and watch together."
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
