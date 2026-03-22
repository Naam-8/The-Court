import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

const GALLERY_ITEMS = [
  {
    image: "padel",
    sport: "Padel",
    caption:
      "Live match broadcast integration — court surfaces ready for virtual logo placement",
  },
  {
    image: "openCourt",
    sport: "Squash · Table Tennis",
    caption:
      "Sports-specific surface intelligence built for racquet sport environments",
  },
];

export default function CourtGallerySection() {
  return (
    <section id="court-gallery" className="bg-black overflow-hidden relative">
      <GridBackground />
      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Courtlay{" "}
            <span className="font-serif italic text-bright-green">at work</span>
          </h2>
          <p className="mt-3 font-sans text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Real court environments across racquet sports — seamlessly enhanced
            for broadcast.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.sport}
              className="relative rounded-2xl overflow-hidden bg-white/5 w-full"
              style={{
                height:
                  index === 0
                    ? "clamp(180px, 30vw, 360px)"
                    : "clamp(140px, 22vw, 280px)",
              }}
            >
              <img
                src={IMAGES[item.image]}
                alt={item.sport}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  const fb = e.target.nextElementSibling;
                  if (fb) fb.classList.remove("hidden");
                }}
              />
              {/* Fallback gradient when image missing */}
              <div className="hidden absolute inset-0 bg-gradient-to-br from-white/5 to-white/10" />

              {/* Directional overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-bright-green">
                  {item.sport}
                </span>
                <p className="mt-1 font-sans text-white text-sm sm:text-base font-medium max-w-xs sm:max-w-sm leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
