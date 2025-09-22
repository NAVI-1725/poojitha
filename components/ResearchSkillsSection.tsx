"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Sustainable Agriculture", logo: "/skill logos/sustainability.png" },
  { name: "Crop Physiology", logo: "/skill logos/crops.png" },
  { name: "Soil Health Analysis", logo: "/skill logos/soil.png" },
  { name: "Post-Harvest Management", logo: "/skill logos/post-harvest.png" },
  { name: "Protected Cultivation", logo: "/skill logos/greenhouse.png" },
  { name: "Academic Writing & Research", logo: "/skill logos/documentation.png" },
];

const fieldImages = [
  "/skill logos/feild1.jpg",
  "/skill logos/feild2.jpg",
  "/skill logos/feild3.jpg",
  "/skill logos/feild4.jpg",
  "/skill logos/feild5.jpg",
  "/skill logos/feild6.jpg",
];

export default function ResearchSkillsSection() {
  return (
    <section
      id="research-skills"
      className="relative pt-32 pb-40 px-6 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] overflow-hidden transition-colors duration-500 min-h-screen"
    >
      {/* Background Floating Field Images */}
      {fieldImages.map((src, idx) => {
        const size = 150 + Math.random() * 120; // Bigger images
        const top = Math.random() * 85; 
        const left = Math.random() * 85; 
        const delay = Math.random() * 5; 
        return (
          <motion.img
            key={idx}
            src={src}
            alt={`Field ${idx + 1}`}
            className="absolute rounded-2xl shadow-xl filter brightness-110 contrast-110"
            style={{ width: size, height: size, top: `${top}%`, left: `${left}%` }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.35 + Math.random() * 0.3, scale: 1 }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay,
            }}
          />
        );
      })}

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 md:mb-24 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-transparent bg-clip-text tracking-tight drop-shadow-2xl"
      >
        🌱 Key Skills & Expertise
      </motion.h2>

      {/* Skill Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, rotate: -5 + Math.random() * 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white/75 dark:bg-white/15 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center group hover:scale-110 hover:rotate-1 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-16 w-16 object-contain mb-3 transition-transform duration-300 group-hover:scale-125"
            />
            <span className="text-center text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-green-700 dark:group-hover:text-yellow-400">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
