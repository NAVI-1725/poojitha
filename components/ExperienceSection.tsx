"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Young Professional",
      org: "ICAR - National Institute for Research on Climate Resilient Agriculture (NIRCA), Rajahmundry",
      desc: "Focused on product diversification, value addition, quality control, and development of innovative products using turmeric and ashwagandha while ensuring compliance with FSSAI standards.",
      logo: "/experience/ICAR-1.png",
      year: "Aug 2024 – Present",
    },
    {
      title: "Program Officer",
      org: "Watershed Support Services & Activities Network (WASSAN), Rayalaseema",
      desc: "Worked on seed systems, natural/organic farming, biodiversity conservation, CSR projects, and soil nutrient analysis. Supported community-led agricultural development initiatives across Andhra Pradesh and Karnataka.",
      logo: "/experience/wassam.png",
      year: "Mar 2023 – Aug 2024",
    },
    {
      title: "Project Researcher",
      org: "FOLU India – FISRAP Project",
      desc: "Contributed to developing climate-resilient rainfed agriculture strategies for marginalized farmers, integrating sustainability and crop diversity.",
      logo: "/experience/FOLU.png",
      year: "2023",
    },
    {
      title: "Project Associate",
      org: "CROPS4HD – Bioversity International & Partners",
      desc: "Promoted orphan crops in Karnataka to improve nutrition, food diversity, and farmer seed systems through collaborative field research and training programs.",
      logo: "/experience/bioversity.png",
      year: "2022 – 2023",
    },
    {
      title: "Academic Publications",
      org: "Research Journals & Book Chapters",
      desc: "Published multiple works on strawberry cultivation, papaya seed treatment, and quality fruit production across reputed journals including AJBS, IJRAR, IJECC, IJPS, and Rubicon book chapters.",
      logo: "/experience/acedemic.png",
      links: [
        {
          name: "ResearchGate",
          url: "https://www.researchgate.net/profile/Poojitha-Penumarthi",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 pt-32 pb-20 px-6 min-h-screen bg-gradient-to-br from-green-100 via-yellow-100 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-96 h-96 top-0 left-10 bg-green-300 dark:bg-green-700 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-96 h-96 bottom-0 right-10 bg-yellow-400 dark:bg-yellow-700 rounded-full blur-3xl opacity-30"
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-green-600 via-yellow-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-2xl"
      >
        💼 Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto perspective-1000">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative group bg-white/60 dark:bg-white/10 backdrop-blur-2xl border border-gray-200 dark:border-white/20 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-6 md:p-8 transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2 transform-style-preserve-3d"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition duration-700 bg-gradient-to-br from-green-300 via-yellow-300 to-emerald-300 dark:from-green-600 dark:via-yellow-600 dark:to-emerald-600 blur-2xl z-0" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {exp.logo && (
                <div className="mb-4 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-green-400 transition-all duration-500 animate-pulse blur-md"></div>
                  <Image
                    src={exp.logo}
                    alt={`${exp.org} logo`}
                    width={90}
                    height={90}
                    className="object-contain mx-auto drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)] relative z-10 h-20 w-20"
                  />
                </div>
              )}

              <h3 className="text-xl md:text-2xl font-semibold text-green-700 dark:text-green-400 mb-1">
                {exp.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-300 font-medium mb-2">
                {exp.org}
              </p>

              {exp.year && (
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
                  {exp.year}
                </p>
              )}

              <div className="w-full overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {exp.desc}
                </p>

                {/* Links */}
                {exp.links && (
                  <div className="flex justify-center flex-wrap gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {exp.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-600 text-white rounded-full text-sm shadow hover:bg-green-700 transition"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
