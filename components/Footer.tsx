import { FaWhatsapp } from "react-icons/fa6";
import { Mail, Linkedin } from "lucide-react";
import { SiResearchgate } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Branding */}
        <div className="text-center text-xs text-gray-300 order-2 md:order-1 w-full md:w-auto">
          © {new Date().getFullYear()} Penumarthi Poojitha Nagavalli — Monitoring, Evaluation & Reporting (M&E) • Community Engagement & Capacity Building • Policy Support & Evidence-Based Strategy
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 order-1 md:order-2">
          {/* Email */}
          <a
            href="mailto:ppnvalli123@gmail.com?subject=Collaboration&body=Hi Poojitha,%0D%0A%0D%0AI came across your portfolio and would love to connect with you regarding a potential collaboration."
            aria-label="Email"
            className="hover:text-yellow-300 transition"
          >
            <Mail className="h-5 w-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/poojitha-nagavalli-penumarthi-a57777240/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          {/* ResearchGate */}
          <a
            href="https://www.researchgate.net/profile/Poojitha-Penumarthi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
            className="hover:text-emerald-400 transition"
          >
            <SiResearchgate className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
