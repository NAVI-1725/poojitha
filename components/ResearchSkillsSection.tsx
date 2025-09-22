"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Sustainable Agriculture", logo: "/skill logos/sustainability.png", bg: "/skill logos/feild1.jpg" },
  { name: "Crop Physiology", logo: "/skill logos/crops.png", bg: "/skill logos/feild2.jpg" },
  { name: "Soil Health Analysis", logo: "/skill logos/soil.png", bg: "/skill logos/feild3.jpg" },
  { name: "Post-Harvest Management", logo: "/skill logos/post-harvest.png", bg: "/skill logos/feild4.jpg" },
  { name: "Protected Cultivation", logo: "/skill logos/greenhouse.png", bg: "/skill logos/feild5.jpg" },
  { name: "Academic Writing & Research", logo: "/skill logos/documentation.png", bg: "/skill logos/feild6.jpg" },
];

export default function ResearchSkillsSection() {
  return (
    <section
      id="research-skills"
      className="relative pt-32 pb-40 dark:bg-[#0f172a] transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-4xl md:text-5xl font-extrabold text-center mb-20 md:mb-24 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-transparent bg-clip-text tracking-tight drop-shadow-2xl"
      >
        🌱 Key Skills & Expertise
      </motion.h2>

      <div className="space-y-20">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="relative w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Background Image */}
            <motion.img
              src={skill.bg}
              alt={skill.name}
              className="absolute inset-0 w-full h-full object-cover object-center brightness-105 contrast-110"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: idx * 0.2 }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25 z-10"></div>

            {/* Skill Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20 w-64 bg-white/75 dark:bg-white/15 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center mx-auto mt-[10vh]"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 w-16 object-contain mb-3 transition-transform duration-300 group-hover:scale-125"
              />
              <span className="text-center text-sm font-semibold text-gray-800 dark:text-gray-100">
                {skill.name}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
