import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4551792868413065');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4551792868413065&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
