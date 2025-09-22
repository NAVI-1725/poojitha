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
      institution: "Hemavati Nandan Bahuguna Garwal University, Dehradun",
      duration: "2016–2020",
    },
  ];

  const trainings: string[] = [
    "Herbal Extraction Business (ICAR-DMAPR, Dec 2024)",
    "Agriculture 4.0 (Just Agriculture, Online)",
    "Nursery Management (CBED, Dehradun)",
  ];

  // ✅ Fully updated projects array for new ProjectsSection
  const projects = [
    {
      title: "FOLU India (FISRAP Project)",
      description:
        "A strategic initiative by the Food and Land Use Coalition focused on India’s agricultural and environmental sustainability, linking food systems with climate action.",
      liveLink: "https://www.foodandlandusecoalition.org/country/india/",
      videoLink: "https://www.facebook.com/watch/?v=7855182067873000&ref=sharing",
      techStack: ["Sustainability", "Agriculture", "Policy"],
    },
    {
      title: "CROPS4HD Project",
      description:
        "A collaborative global project driving innovation in climate-resilient and nutrition-focused agriculture, supporting farmers and ecosystems worldwide.",
      liveLink: "https://crops4hd.org/",
      techStack: ["Climate Resilience", "Agroecology", "Nutrition"],
    },
    {
      title: "ICAR-NIRCA Project",
      description:
        "A government-led research initiative under ICAR focused on crop resilience, resource optimization, and sustainable food security across India.",
      liveLink: "https://nirca.icar.gov.in/imgclips.php",
      techStack: ["Research", "Food Security", "Innovation"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="home">
          <HeroSection
            name="Penumarthi Poojitha Nagavalli"
            title="Researcher in Sustainable Development"
            tagline="Designing innovative farming models for crop diversity & climate resilience"
          />
        </section>

        <section id="about">
          <AboutSection
            bio="  I am Penumarthi Poojitha Nagavalli, a professional driving impactful, community-centered solutions. I specialize in program design, value chain optimization, and stakeholder engagement, having delivered measurable results at ICAR–NIRCA and WASSAN. Passionate about policy-making, innovation, and inclusive development, I translate grassroots insights into scalable, evidence-based strategies that enhance livelihoods, foster resilience, and bridge research, practice, and high-impact transformation across sectors."
            email="ppnvalli123@gmail.com"
            location="Rajahmundry, Andhra Pradesh"
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
