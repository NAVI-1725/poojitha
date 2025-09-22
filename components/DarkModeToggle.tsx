"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-5 right-5 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow-lg transition-all hover:scale-110"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
