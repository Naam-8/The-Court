
export default function CtaSection() {
  return (
    <section id="cta" className="mx-auto">
      <div className="relative overflow-hidden bg-black">
        <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-bright-green">
              See Courtlay in action
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-white/80 max-w-xl">
              Request a short walkthrough of how our virtual advertising
              platform works with live racquet sports broadcasts.
            </p>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-bright-green text-black font-sans font-semibold text-sm sm:text-base hover:bg-light-green transition-colors whitespace-nowrap"
          >
            Request a presentation
          </a>
        </div>
      </div>
    </section>
  );
}
