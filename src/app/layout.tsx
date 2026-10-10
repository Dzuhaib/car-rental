import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BRAND } from "@/lib/site";

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
  metadataBase: new URL("https://burhanrentacar.pk"),
  title: {
    default: `Rent a Car in Karachi with Driver | ${BRAND.name}`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Chauffeur-driven car rental in Karachi: 24/7 airport pick & drop at Jinnah International Airport, corporate and executive travel, wedding VIP transport, and inter-city journeys. Transparent pricing and flexible daily, weekly, or monthly packages.",
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: `Rent a Car in Karachi with Driver | ${BRAND.name}`,
    description:
      "Chauffeur-driven car rental in Karachi. 24/7 airport pickups, corporate travel, wedding VIP transport, and inter-city journeys.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
