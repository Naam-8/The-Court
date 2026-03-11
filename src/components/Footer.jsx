import { InstagramIcon } from "lucide-react";
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
                href="#about"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                About Courtlay
              </a>
              <a
                href="#game"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                Platform
              </a>
              <a
                href="#membership"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                Who We Serve
              </a>
            </nav>
          </div>
          <div>
            <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Connect
            </h4>
            <nav className="flex gap-6">
              <a
                href="#x"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#instagram"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                Instagram
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

        <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-bright-green">
          Courtlay
        </h2>
      </div>
    </footer>
  );
}
