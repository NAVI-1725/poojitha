"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#research-skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth scroll handler for hash links
  const handleScrollTo = (href: string) => {
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu if open
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-lg transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo & Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#home");
          }}
          className="flex items-center space-x-3"
        >
          <img
            src="/favicon.ico"
            alt="Penumarthi Poojitha Nagavalli Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md border-2 border-green-400 hover:scale-110 transition-transform duration-300"
          />
          <motion.span
            className="hidden sm:inline text-base sm:text-lg md:text-xl font-bold font-montserrat 
            bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 
            bg-clip-text text-transparent tracking-tight whitespace-nowrap"
            animate={{ x: [0, -1.5, 1.5, -1.5, 1.5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
          >
            Penumarthi Poojitha Nagavalli
          </motion.span>
        </a>

        {/* Desktop Menu & Controls */}
        <div className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(item.href);
                    }}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-white shadow-md"
                        : "text-gray-800 dark:text-gray-200 hover:text-green-700 hover:bg-green-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-green-100 dark:bg-gray-700 hover:bg-green-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-green-700" />}
          </button>

          {/* Hamburger Menu */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-green-700 dark:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-xl rounded-b-2xl flex flex-col items-center space-y-6 py-6"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(item.href);
                  }}
                  className={`text-base px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-white shadow-md"
                      : "text-gray-800 dark:text-gray-200 hover:text-green-700 hover:bg-green-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
