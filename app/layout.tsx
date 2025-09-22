// app/layout.tsx

import "../styles/globals.css";
import { ReactNode } from "react";
import SeoSchema from "@/components/SeoSchema";

export const metadata = {
  title: "Penumarthi Poojitha Nagavalli - Portfolio",
  description:
    "The official portfolio of Penumarthi Poojitha Nagavalli — a researcher in sustainable agriculture, focusing on crop diversity, climate-resilient farming, and innovative value-added products. Experienced in project management, soil and crop research, and herbal product development.",
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
    { name: "Penumarthi Poojitha Nagavalli", url: "https://researchgate.net/profile/Poojitha-Nagavalli" },
    { name: "LinkedIn", url: "https://linkedin.com/in/poojitha-nagavalli" }
  ],

  robots: "index, follow",
  alternates: {
    canonical: "https://researchgate.net/profile/Poojitha-Nagavalli"
  },

  icons: {
    icon: "/favicon.ico"
  },

  openGraph: {
    title: "Penumarthi Poojitha Nagavalli - Portfolio",
    description: "Researcher in sustainable agriculture — Explore my projects, publications, and work experience.",
    url: "https://researchgate.net/profile/Poojitha-Nagavalli",
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
        alt: "Poojitha Nagavalli Research Image 1"
      },
      {
        url: "/poojitha2.jpg",
        width: 1200,
        height: 630,
        alt: "Poojitha Nagavalli Research Image 2"
      },
      {
        url: "/poojitha3.jpg",
        width: 1200,
        height: 630,
        alt: "Poojitha Nagavalli Research Image 3"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Penumarthi Poojitha Nagavalli | Portfolio",
    description: "Sustainable Agriculture Research | ICAR-NIRCA | Publications | Project Work",
    images: ["/poojitha.png", "/poojitha1.jpg", "/poojitha2.jpg", "/poojitha3.jpg"],
    creator: "@poojitha_nagavalli"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SeoSchema /> {/* Structured data for Google Search */}
        {children}
      </body>
    </html>
  );
}
