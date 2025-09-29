// app/layout.tsx

import "../styles/globals.css";
import { ReactNode } from "react";
import SeoSchema from "@/components/SeoSchema";

export const metadata = {
  title: "Penumarthi Poojitha Nagavalli - Portfolio",
  description:
    "The official portfolio of Penumarthi Poojitha Nagavalli — a Researcher in Sustainable Development, focusing on crop diversity, climate-resilient farming, and innovative value-added products. Experienced in project management, soil and crop research, and herbal product development.",

  keywords: [
    "Penumarthi Poojitha Nagavalli",
    "Poojitha Nagavalli",
    "Penumarthi Poojitha",
    "Sustainable Agriculture Research",
    "Crop Diversity",
    "Climate Resilient Farming",
    "ICAR-NIRCA",
    "Watersheds Support Services & Activities Network",
    "Herbal Product Development",
    "Turmeric Value Addition",
    "Ashwagandha Value Addition",
    "Organic Farming",
    "Seed System Research",
    "Soil Nutrient Analysis",
    "Nursery Management",
    "Research Portfolio",
    "Agriculture Research India",
    "Agriculture Project Management",
    "CSR Agricultural Projects",
    "Research Publications",
    "African Journal of Biological Sciences",
    "IJRAR",
    "IJECC",
    "Rubicon Publications",
    "IJPS"
  ],

  authors: [
    {
      name: "Penumarthi Poojitha Nagavalli",
      url: "https://researchgate.net/profile/Poojitha-Nagavalli"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/poojitha-nagavalli"
    }
  ],

  robots: "index, follow",

  alternates: {
    canonical: "https://poojitha-nagavalli.vercel.app"
  },

  icons: {
    icon: "/favicon.ico"
  },

  openGraph: {
    title: "Penumarthi Poojitha Nagavalli - Portfolio",
    description:
      "Researcher in Sustainable Development — Explore my projects, publications, and work experience.",
    url: "https://poojitha-nagavalli.vercel.app",
    siteName: "Penumarthi Poojitha Nagavalli - Portfolio",
    images: [
      {
        url: "/poojitha.png",
        width: 1200,
        height: 630,
        alt: "Penumarthi Poojitha Nagavalli"
      },
      {
        url: "/poojitha1.jpg",
        width: 1200,
        height: 630,
        alt: "Research Image 1"
      },
      {
        url: "/poojitha2.jpg",
        width: 1200,
        height: 630,
        alt: "Research Image 2"
      },
      {
        url: "/poojitha3.jpg",
        width: 1200,
        height: 630,
        alt: "Research Image 3"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Penumarthi Poojitha Nagavalli | Portfolio",
    description:
      "Sustainable Agriculture Research | ICAR-NIRCA | Publications | Project Work",
    images: [
      "/poojitha.png",
      "/poojitha1.jpg",
      "/poojitha2.jpg",
      "/poojitha3.jpg"
    ],
    creator: "@poojitha_nagavalli"
  },

  // ✅ Correct place for Google Search Console verification
  verification: {
    google: "dngPrn_xrdnDoWtyLxrNXfC49QPFKoTqjVkN-UiRZ5M"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Inject structured data for SEO */}
        <SeoSchema />
        {children}
      </body>
    </html>
  );
}