"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  timeline?: string;
  image?: string;
  codeLink?: string;
  liveLink?: string;
  techStack?: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [sectionKey, setSectionKey] = useState(0);

  useEffect(() => {
    setSectionKey(Date.now());
  }, [projects]);

  const handleUnavailableClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Details not available. Please check back soon.");
  };

  return (
    <section
      key={sectionKey}
      id="projects"
      className="relative pt-28 px-4 pb-16 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-80 h-80 bg-green-400 opacity-30 rounded-full blur-3xl animate-ping top-0 left-10" />
        <div className="absolute w-80 h-80 bg-emerald-400 opacity-30 rounded-full blur-3xl animate-pulse right-10 bottom-0" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-transparent bg-clip-text drop-shadow-2xl"
      >
        🌱 Featured Research & Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group bg-white/40 dark:bg-white/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-green-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 bg-gradient-to-br from-emerald-300 via-green-300 to-transparent blur-xl z-0" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {project.title}
              </h3>

              {project.timeline && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {project.timeline}
                </p>
              )}

              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4 h-0 group-hover:h-auto overflow-hidden">
                {project.description}
              </p>

              {project.techStack && (
                <div className="flex flex-wrap justify-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-white/20 dark:text-white border border-white/10 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* View Button */}
              <div className="flex justify-center gap-3 mt-2">
                <a
                  href="#"
                  onClick={handleUnavailableClick}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-green-600 text-white hover:bg-green-700 shadow-sm"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
