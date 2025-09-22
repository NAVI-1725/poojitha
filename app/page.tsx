// app/page.tsx
'use client';

import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import ResearchSkillsSection from "@/components/ResearchSkillsSection";

interface Experience {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export default function Home() {
  const atBottomRef = useRef(false);
  const scrollToTopActive = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;

      if (isAtBottom) {
        if (!atBottomRef.current) {
          atBottomRef.current = true;
          scrollToTopActive.current = false;
          timeoutRef.current = setTimeout(() => {
            scrollToTopActive.current = true;
          }, 3000);
        } else if (scrollToTopActive.current && e.deltaY > 0) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          atBottomRef.current = false;
          scrollToTopActive.current = false;
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }
      } else {
        atBottomRef.current = false;
        scrollToTopActive.current = false;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const experiences = [
  {
    title: "Young Professional",
    org: "ICAR-NIRCA, Rajahmundry",
    desc: "Product diversification, value addition, marketing strategies. New product development with turmeric & ashwagandha. Quality control & FSSAI compliance.",
    logo: "/experience/ICAR-1.png",
    year: "Aug 2024 – Present",
  },
  {
    title: "Program Officer",
    org: "Watersheds Support Services & Activities Network, Rayalaseema",
    desc: "Research on seed systems, natural/organic farming, biodiversity conservation. CSR projects in Satya Sai District & North Karnataka. Soil nutrient analysis and crop diversity trials.",
    logo: "/experience/wassam.png",
    year: "Mar 2023 – Aug 2024",
  },
];

  const education: Education[] = [
    {
      degree: "M.Sc. (Ag) Horticulture – Fruit Science",
      institution: "SHUATS, Prayagraj",
      duration: "2020–2022",
    },
    {
      degree: "B.Sc. (Hons) Horticulture",
      institution: "HNB Garhwal University, Dehradun",
      duration: "2016–2020",
    },
  ];

  const trainings: string[] = [
    "Herbal Extraction Business (ICAR-DMAPR, Dec 2024)",
    "Agriculture 4.0 (Just Agriculture, Online)",
    "Nursery Management (CBED, Dehradun)",
  ];

  const projects = [
    {
      title: "FOLU India (FISRAP Project)",
      description: "Climate-resilient rainfed agriculture strategy",
    },
    {
      title: "CROPS4HD Project",
      description: "Promoted orphan crops & nutrition in Karnataka",
    },
    {
      title: "ICAR-NIRCA Project",
      description: "Value addition of Turmeric, Ashwagandha, Chilli",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="home">
          <HeroSection
            name="Penumarthi Poojitha Nagavalli"
            title="Researcher in Sustainable Agriculture"
            tagline="Designing innovative farming models for crop diversity & climate resilience"
          />
        </section>

        <section id="about">
  <AboutSection
    bio="I'm Penumarthi Poojitha Nagavalli, a horticulture and sustainable agriculture researcher dedicated to climate-resilient farming, biodiversity conservation, and crop innovation. With experience at ICAR-NIRCA and Watershed Support Services Network, I design innovative farming models, promote natural farming, and lead community-driven agricultural projects."
    phone="+91 9634784127"
    email="ppnvalli123@gmail.com"
    location="Flat No - G1, Veerabhadra Appartements, Syamala Nagar, Rajahmundry, Andhra Pradesh, 533103"
    linkedin="https://linkedin.com/in/poojitha-nagavalli"
    website="https://researchgate.net/profile/Poojitha-Penumarthi"
  />
</section>


        <section id="experience">
          <ExperienceSection experiences={experiences} />
        </section>

        <section id="education">
          <EducationSection education={education} trainings={trainings} />
        </section>

        <section id="research-skills">
          <ResearchSkillsSection />
        </section>

        <section id="projects">
          <ProjectsSection projects={projects} />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
