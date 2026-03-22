import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

const linkClass =
  "font-sans text-sm font-medium text-white/90 hover:text-bright-green transition-colors";

const exploreLinks = [
  { href: "#home", label: "Overview" },
  { href: "#solutions", label: "Platform" },
  { href: "#join", label: "Connect" },
];

const legalLinks = [
  { href: "/legal-disclaimer", label: "Legal Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    Icon: Facebook,
    filled: false,
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    Icon: Instagram,
    filled: false,
  },
  {
    href: "https://www.linkedin.com/company/courtlay/",
    label: "LinkedIn",
    Icon: Linkedin,
    filled: true,
  },
  {
    href: "mailto:info@courtlay.com",
    label: "Email",
    Icon: Mail,
    filled: false,
  },
];

function SocialIconLinks() {
  return (
    <nav
      className="flex flex-wrap items-center gap-6"
      aria-label="Social links"
    >
      {socialLinks.map(({ href, label, Icon, filled }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={
            href.startsWith("mailto:") ? undefined : "noopener noreferrer"
          }
          className="inline-flex text-white/90 hover:text-bright-green transition-colors"
          aria-label={label}
        >
          <Icon
            size={20}
            strokeWidth={filled ? undefined : 1.75}
            fill={filled ? "currentColor" : "none"}
          />
        </a>
      ))}
    </nav>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="mx-auto bg-black overflow-hidden relative">
      <GridBackground />
      <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16 lg:items-start pb-12 border-b border-white/10">
          <div className="max-w-xl space-y-8">
            <p className="font-serif text-muted italic text-xl">
              Creating more valuable, more relevant racquet sports broadcasts.
            </p>
            <div>
              <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-2">
                Company
              </h4>
              <p className="font-sans text-white">
                Courtlay — Virtual advertising for racquet sports.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-4">
                Explore
              </h4>
              <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Site">
                {exploreLinks.map(({ href, label }) => (
                  <a key={href} href={href} className={linkClass}>
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-4">
                Connect with us
              </h4>
              <SocialIconLinks />
            </div>
          </div>
        </div>

        <a href="/" className="block">
          <img
            src={IMAGES.logo}
            alt="Courtlay"
            className="w-full h-32 pt-10 object-contain object-center"
          />
        </a>

        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-x-12 lg:gap-x-20 md:gap-y-4">
            <p className="font-sans text-sm text-muted text-center md:text-left md:shrink-0">
              © {new Date().getFullYear()} Courtlay. All rights reserved.
            </p>

            <nav
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-end md:shrink-0"
              aria-label="Legal"
            >
              {legalLinks.map(({ href, label }, i) => (
                <span key={href} className="inline-flex items-center gap-x-3">
                  {i > 0 && (
                    <span className="text-muted select-none" aria-hidden>
                      |
                    </span>
                  )}
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
