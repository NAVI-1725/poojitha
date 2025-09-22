// components/HeroSection.tsx
"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Linkedin, Mail, FileText } from "lucide-react";
import { FaDownload, FaEye } from "react-icons/fa";
import { useTheme } from "next-themes";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

// ✅ Added props interface
interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
}

export default function HeroSection({
  name,
  title,
  tagline,
}: HeroSectionProps) {
  const { theme } = useTheme();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => setIsClient(true), []);
  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showResume]);

  const handleViewResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
      handleCloseResume();
    }
  };

  if (!isClient) return null;

  const titles = [
    "Horticulture Researcher",
    "Sustainable Agriculture",
    "Plant Science Enthusiast",
    "Climate Resilience Explorer",
    "Agroecology & Soil Health Learner",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-20 gap-12 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-1000"
    >
      {/* Lottie Background - Plants/Ecology */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30 pointer-events-none">
        <Player
          autoplay
          loop
          src="/assets/hero/eco-nature.json"
          className="w-[90%] h-[90%]"
        />
      </div>

      {/* Animated circles */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none"
      >
        <div className="absolute w-[220px] h-[220px] sm:w-[500px] sm:h-[500px] bg-green-300 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="hidden sm:block absolute w-[220px] h-[220px] md:w-[400px] md:h-[400px] bg-emerald-200 opacity-20 rounded-full blur-2xl animate-bounce delay-1000" />
      </div>

      {/* Left Section */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold text-gray-800 dark:text-white leading-snug">
          Hi, I&apos;m{" "}
          <span className="text-green-700 dark:text-emerald-400">{name}</span>{" "}
          🌱
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300">
          {title}{" "}
          <span className="text-green-700 dark:text-emerald-400">
            <Typewriter
              words={titles}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <a href="#research">
          <button className="flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-green-600 dark:bg-green-500 text-white rounded-full shadow-lg transition-all duration-300">
            View My Work
            <ArrowRight className="w-5 h-5" />
          </button>
        </a>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-8">
          {[
            { title: "5+", desc: "Research Papers" },
            { title: "3+", desc: "Years in Horticulture" },
            { title: "4+", desc: "Field Projects" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-emerald-400">
                {stat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-8 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/poojitha-nagavalli-penumarthi-a57777240/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Linkedin className="w-7 h-7 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-emerald-400" />
          </a>
          <a href="mailto:ppnvalli123@gmail.com" className="hover:scale-110 transition">
            <Mail className="w-7 h-7 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-emerald-400" />
          </a>
        </div>
      </motion.div>

      {/* Right Image & Resume */}
      <motion.div
        className="flex-1 flex flex-col items-center text-center px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[384px] aspect-square">
          <Image
            src="/poojitha1.jpg"
            alt="Poojitha photo"
            priority
            fill
            className="object-cover rounded-3xl shadow-2xl border-4 border-green-500 dark:border-emerald-600 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
          />
        </div>

        <div
          className="mt-6 w-60 sm:w-72 bg-white dark:bg-gray-800 rounded-b-[2rem] rounded-t-[1rem] shadow-lg flex flex-col items-center justify-center gap-3 p-4 cursor-pointer"
          onClick={() => setShowResume(true)}
        >
          <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">Resume</p>
          <FileText className="w-7 h-7 text-green-700 dark:text-emerald-400 mb-2" />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowResume(true)}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition text-sm sm:text-base"
            >
              <FaEye className="w-5 h-5" />
              View
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition text-sm sm:text-base"
            >
              <FaDownload className="w-5 h-5" />
              Download
            </a>
          </div>
        </div>
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
            onClick={handleBackdropClick}
          >
            <motion.div
              ref={resumeRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full p-8 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  🌿 {name}
                </h3>
                <button
                  onClick={handleCloseResume}
                  className="text-gray-500 hover:text-red-500 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="grid gap-6">
                {[
                  {
                    title: "🎯 Professional Summary",
                    content:
                      "Dedicated Horticulture graduate with research experience in crop production, plant breeding, and climate-resilient agriculture. Skilled in sustainable farming practices and academic writing. Passionate about contributing to food security and environmental sustainability.",
                  },
                  {
                    title: "🎓 Education",
                    content:
                      "B.Sc. (Hons) Horticulture – Dr. YSR Horticultural University (2019 – 2023)",
                  },
                  {
                    title: "🌱 Research Interests",
                    content:
                      "Sustainable agriculture, crop physiology, post-harvest management, soil health, and climate adaptation in horticulture.",
                  },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="whitespace-pre-line">{item.content}</p>
                  </div>
                ))}
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-2">📜 Certifications</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Training in Protected Cultivation – Dr. YSRHU</li>
                    <li>Workshop on Post-Harvest Management of Fruits & Vegetables</li>
                    <li>Research Paper Presentation – Climate-Resilient Horticulture</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-2">🏆 Achievements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Gold Medal – B.Sc. (Hons) Horticulture</li>
                    <li>Published Research Paper in International Journal of Agricultural Sciences</li>
                    <li>Recipient of State Merit Scholarship</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-2">🔗 Links</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/poojitha-nagavalli-penumarthi-a57777240/"
                        className="text-green-600 underline"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.researchgate.net/profile/Poojitha-Penumarthi"
                        className="text-green-600 underline"
                      >
                        ResearchGate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
