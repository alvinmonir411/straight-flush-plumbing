import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Straight Flush Plumbing Solutions | Brisbane & Chermside Plumber",
  description:
    "Expert plumbing solutions for a healthier home. 24/7 emergency repairs, drain cleaning, leak detection, and hot water services across Brisbane & Chermside.",
  keywords: [
    "Plumber Brisbane",
    "Chermside Plumbing",
    "Emergency Plumber Brisbane",
    "Straight Flush Plumbing",
    "Drain Cleaning Brisbane",
    "Hot Water Repair",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
