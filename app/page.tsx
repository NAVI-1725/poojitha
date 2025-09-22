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

  const experiences: Experience[] = [
    {
      role: "Young Professional",
      company: "ICAR-NIRCA, Rajahmundry",
      duration: "Aug 2024 – Present",
      details: [
        "Product diversification, value addition, marketing strategies",
        "New product development with turmeric & ashwagandha",
        "Quality control & FSSAI compliance",
      ],
    },
    {
      role: "Program Officer",
      company: "Watersheds Support Services & Activities Network, Rayalaseema",
      duration: "Mar 2023 – Aug 2024",
      details: [
        "Research on seed systems, natural/organic farming, biodiversity conservation",
        "CSR projects in Satya Sai District & North Karnataka",
        "Soil nutrient analysis and crop diversity trials",
      ],
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
            bio="Experienced researcher focused on sustainable agriculture, crop diversity, climate-resilient farming, value addition of turmeric & ashwagandha, and impactful project management."
            phone="+91 9634784127"
            email="ppnvalli123@gmail.com"
            location="Flat No - G1, Veerabhadra Appartements, Syamala Nagar, Rajahmundry, Andhra Pradesh, 533103"
            linkedin="https://linkedin.com/in/poojitha-nagavalli"
            website="https://researchgate.net/profile/Poojitha-Nagavalli"
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
