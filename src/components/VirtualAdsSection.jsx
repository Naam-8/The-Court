import BeforeAfterSlider from "./BeforeAfterSlider";
import GridBackground from "./GridBackground";

export default function VirtualAdsSection() {
  return (
    <section
      id="virtual-ads"
      className="mx-auto bg-black overflow-hidden relative"
    >
      <GridBackground />
      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20 mx-auto">
        <h2 className="text-center font-sans text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-white">
          How{" "}
          <span className="font-serif italic text-bright-green">
            Virtual Ads
          </span>{" "}
          Works?
        </h2>

        <p className="text-center font-sans text-base sm:text-lg text-muted mt-4">
          Virtual Ads is a new way to advertise your brand on the court.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 sm:mt-20">
          <BeforeAfterSlider />
          <BeforeAfterSlider />
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
}
