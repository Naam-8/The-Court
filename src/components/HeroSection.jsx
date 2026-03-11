import { IMAGES } from "../constants";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mt-10 sm:mt-14 lg:mt-20 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center"
    >
      <div>
        <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-bright-green leading-tight">
          Smarter racquet
          <br />
          sport broadcasts
        </h1>
        <p className="mt-3 font-serif text-muted text-base sm:text-lg italic max-w-xs sm:max-w-sm">
          Virtual ads, built for the court.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#join"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-bright-green text-black font-sans font-semibold text-xs sm:text-sm hover:bg-light-green transition-colors"
          >
            Talk to our team
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border-2 border-bright-green text-white font-sans font-medium text-xs sm:text-sm hover:bg-bright-green/10 transition-colors"
          >
            Explore the platform
          </a>
        </div>
      </div>

      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-bright-green/40 bg-white/5">
        <video
          className="w-full h-full object-cover"
          src="/videos/court-original.mp4"
          poster={IMAGES.hero}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
