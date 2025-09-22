"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Community Engagement, Capacity Building & Farmer Empowerment", bg: "/skill logos/feild1.jpg" },
  { name: "Stakeholder Engagement & Networking, Communication & Knowledge Dissemination", bg: "/skill logos/feild7.jpg" },
  { name: "Communication & Knowledge Dissemination", bg: "/skill logos/feild2.jpg" },
  { name: "Monitoring, Evaluation & Reporting", bg: "/skill logos/feild4.jpg" },
  { name: "Linking Grassroots Insights with Policy & Development Goals", bg: "/skill logos/feild5.jpg" },
  { name: "Policy Support & Evidence-Based Program Design", bg: "/skill logos/feild6.jpg" },
];

export default function ResearchSkillsSection() {
  return (
    <section
      id="research-skills"
      className="relative pt-32 pb-40 bg-gradient-to-br from-green-50 via-white to-emerald-100 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] transition-colors duration-700"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-4xl md:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-transparent bg-clip-text tracking-tight drop-shadow-2xl"
      >
        🌱 Key Skills & Expertise
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 max-w-7xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="relative h-[50vh] rounded-3xl overflow-hidden shadow-xl group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: idx * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Background Image */}
            <motion.img
              src={skill.bg}
              alt={skill.name}
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 transition-all duration-500 group-hover:from-emerald-900/70 group-hover:via-emerald-700/30" />

            {/* Skill Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center px-4"
            >
              <span className="text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                {skill.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
