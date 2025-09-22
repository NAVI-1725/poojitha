"use client";

import Image from "next/image";

const educationList = [
  {
    title: "M.Sc. (Ag) Horticulture – Fruit Science",
    institution: "Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS), Prayagraj, UP.",
    year: "2020 – 2022",
    image: "/experience/SHIATS_LOGO.png",
    alt: "SHUATS Prayagraj",
  },
  {
    title: "B.Sc. (Hons) Horticulture",
    institution: "HNB Garhwal University, Dehradun, Uttarakhand.",
    year: "2016 – 2020",
    image: "/experience/HNBG.png",
    alt: "HNB Garhwal University",
  },
  {
    title: "Specialized Trainings & Certifications",
    institution:
      "• Herbal Extraction Business – ICAR-DMAPR (2024)\n• Agriculture 4.0 – Just Agriculture (Online)\n• Nursery Management – CBED, Dehradun",
    year: "2019 – 2024",
    image: "/experience/expericenceimage.png",
    alt: "Training Programs",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen py-24 px-6 bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#fefce8] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-24 bg-gradient-to-r from-green-600 via-yellow-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-lg">
        🎓 My Education
      </h2>

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-green-300 via-yellow-400 to-emerald-300 dark:from-green-600 dark:via-yellow-700 dark:to-emerald-600 transform -translate-x-1/2 rounded-full" />

        <div className="flex flex-col gap-24">
          {educationList.map((edu, idx) => (
            <div
              key={edu.title}
              className={`relative flex flex-col md:flex-row items-center justify-${
                idx % 2 === 0 ? "start" : "end"
              } gap-6 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 relative z-10">
                <Image
                  src={edu.image}
                  alt={edu.alt}
                  fill
                  className="object-contain rounded-full border-4 border-green-300 dark:border-green-600 shadow-md"
                />
              </div>

              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl px-6 py-4 shadow-xl w-full md:w-2/3 whitespace-pre-line">
                <h3 className="text-xl md:text-2xl font-bold text-green-700 dark:text-green-400">
                  {edu.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 text-base break-words md:max-w-[32rem]">
                  {edu.institution}
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {edu.year}
                </p>
              </div>

              <div className="absolute w-5 h-5 bg-green-400 dark:bg-green-600 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
