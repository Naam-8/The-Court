import { Linkedin } from "lucide-react";
import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

export default function Footer() {
  return (
    <footer className="mx-auto bg-black overflow-hidden relative">
      <GridBackground />
      <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid sm:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div>
            <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Sitemap
            </h4>
            <nav className="flex flex-wrap gap-6">
              <a
                href="#home"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                Overview
              </a>
              <a
                href="#solutions"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                Platform
              </a>
              <a
                href="#join"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                Connect
              </a>
            </nav>
          </div>
          <div>
            <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Connect
            </h4>
            <nav className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/courtlay/"
                target="_blank"
                className="flex items-center gap-2 font-sans text-white hover:text-bright-green transition-colors font-semibold"
              >
                <Linkedin size={20} fill="currentColor" />
                <span className="text-xl">LinkedIn</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 pt-8 border-t border-white/10">
          <p className="font-serif text-muted italic text-xl ">
            Creating more valuable, more relevant racquet sports broadcasts.
          </p>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div>
            <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-2">
              Company
            </h4>
            <p className="font-sans text-white">
              Courtlay — Virtual advertising for racquet sports.
            </p>
          </div>
        </div>

        <a href="/" className="">
          <img src={IMAGES.logo} alt="Courtlay" className="w-full h-32 pt-10" />
        </a>
      </div>
    </footer>
  );
}
