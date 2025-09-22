// components/AboutSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from "next/head";

interface AboutSectionProps {
  bio: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  website: string;
}

interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [
  { title: "Sustainable Agriculture", description: "Experienced in climate-resilient farming models, crop diversification, and biodiversity conservation." },
  { title: "Horticulture & Value Addition", description: "Specialized in fruit science, product diversification of turmeric, ashwagandha, and chilli with focus on quality and innovation." },
  { title: "Community Engagement", description: "Led CSR projects, empowered women, enhanced soil and water management, and collaborated with farmers for natural farming adoption." },
];

const profileImages = ["/poojitha1.jpg", "/poojitha2.jpg", "/poojitha3.jpg"];

export default function AboutSection({
  bio,
  phone,
  email,
  location,
  linkedin,
  website,
}: AboutSectionProps) {
  const router = useRouter();
  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfileIndex((prev) => (prev + 1) % profileImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleConnectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/#contact");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ block: "start" });
    }, 100);
  };

  return (
    <>
      <Head>
        <title>About - Penumarthi Poojitha Nagavalli</title>
        <meta
          name="description"
          content="Explore the journey of Penumarthi Poojitha Nagavalli, sustainable agriculture researcher and horticulture specialist, focusing on crop diversity, climate resilience, and community development."
        />
        <meta property="og:image" content="/poojitha.png" />
      </Head>

      <section
        id="about"
        className="scroll-mt-32 relative overflow-x-hidden bg-gradient-to-br from-green-50 via-gray-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 md:px-12 pt-32 pb-24 min-h-screen"
      >
        {/* background accents */}
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-green-300 dark:bg-green-800 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-yellow-300 dark:bg-yellow-800 opacity-20 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:text-left lg:flex-row gap-16 z-10 relative">
          {/* profile image */}
          <motion.div
            className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
            initial={{ rotateY: 180, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500 via-yellow-500 to-pink-400 blur-2xl opacity-40 animate-pulse rounded-full z-0" />
            <img
              src={profileImages[profileIndex]}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full z-10 transition-transform duration-700"
            />
          </motion.div>

          {/* about me */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-green-700 dark:text-white tracking-tight mb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              👋 About Me
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {bio}
            </motion.p>

            <motion.ul
              className="text-gray-700 dark:text-gray-300 mt-2 space-y-2 text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <li><strong>Phone:</strong> {phone}</li>
              <li><strong>Email:</strong> {email}</li>
              <li><strong>Location:</strong> {location}</li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a href={linkedin} className="text-green-600 underline" target="_blank" rel="noopener noreferrer">{linkedin}</a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href={website} className="text-green-600 underline" target="_blank" rel="noopener noreferrer">{website}</a>
              </li>
            </motion.ul>

            <motion.p
              className="text-sm font-medium text-gray-400 italic mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Researcher • Horticulturist • Sustainable Agriculture
            </motion.p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24 pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="group relative flex flex-col justify-between gap-4 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-xl bg-white/60 dark:bg-white/5 transition duration-300 hover:shadow-green-400/40 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.2, duration: 0.6, ease: 'easeOut' }}
              >
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 flex items-center gap-2 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-center text-base text-gray-600 dark:text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Interested in collaborating on sustainable agriculture, community projects, or horticulture research? Let's connect!
        </motion.p>
        <motion.button
          onClick={handleConnectClick}
          className="mt-4 px-10 py-4 bg-gradient-to-r from-green-600 to-yellow-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-green-500/50 hover:scale-105 active:scale-95 transition-transform duration-300 mx-auto block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          🌱 Let's Connect!
        </motion.button>
      </section>
    </>
  );
}
