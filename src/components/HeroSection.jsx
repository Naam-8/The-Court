import { IMAGES } from "../constants";

export default function HeroSection() {
  return (
    <section className="mt-12 sm:mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      <div>
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-bright-green leading-[1.1]">
          Built for People
          <br />
          Who Play
        </h1>
        <p className="mt-6 font-serif text-muted text-lg sm:text-xl italic max-w-md">
          Private courts. Curated schedule. Members only.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#join"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-bright-green text-black font-sans font-semibold text-base hover:bg-light-green transition-colors"
          >
            Join the Club
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-bright-green text-white font-sans font-medium text-base hover:bg-bright-green/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="relative aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden min-h-[240px]">
        <img
          src={IMAGES.hero}
          alt="Tennis in motion"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            const fallback = e.target.nextElementSibling;
            if (fallback) fallback.classList.remove("hidden");
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <img
            src={IMAGES.tennisRacket}
            alt="Tennis racket"
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
