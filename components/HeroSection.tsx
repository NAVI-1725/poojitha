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

    "Fields to Policy",
    "Sowing Ideas, Growing Sustainable Futures",
    "Harvesting Solutions for Rural Transformation",
    "Bridging Communities, Crops, and Policy for Lasting Impact",
    "From Soil to Strategy: Driving Sustainable Development",
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
          .P
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
            { title: "5+", desc: "Research Papers & case studies" },
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
          <a
            href="https://researchgate.net/profile/Poojitha-Penumarthi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaEye className="w-7 h-7 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-emerald-400" />
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
  src="/poojitha2.jpg"
  alt="Poojitha photo"
  priority
  fill
  className="object-cover shadow-2xl border-4 border-green-500 dark:border-emerald-600 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_95%_70%,_75%_100%,_40%_100%,_10%_80%,_0%_45%,_15%_15%,_40%_5%)]"
/>

        </div>

        <div
          className="mt-6 w-60 sm:w-72 bg-white dark:bg-gray-800 rounded-b-[2rem] rounded-t-[1rem] shadow-lg flex flex-col items-center justify-center gap-3 p-4 cursor-pointer"
          onClick={() => setShowResume(true)}
        >
          <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">Resume</p>
          <FileText className="w-7 h-7 text-green-700 dark:text-emerald-400 mb-2" />
          <div className="flex items-center gap-4">
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

      
    </section>
  );
}
