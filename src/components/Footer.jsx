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
                Home
              </a>
              <a
                href="#about"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                About
              </a>
              <a
                href="#game"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                The Game
              </a>
              <a
                href="#membership"
                className="font-sans text-white hover:text-bright-green transition-colors"
              >
                Membership Plans
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
            Private courts. Curated schedule. Members only.
          </p>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div>
            <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-2">
              Address
            </h4>
            <p className="font-sans text-white">
              215 Court Street
              <br />
              Brooklyn, NY 11201
            </p>
          </div>
        </div>

        <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-bright-green">
          The Court
        </h2>
      </div>
    </footer>
  );
}
