import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

const MIN_HEIGHT = "min-h-[700px] sm:min-h-[900px] lg:min-h-[900px]";

export default function ClubSection() {
  return (
    <section id="about" className="mx-auto bg-white">
      <div className={`relative overflow-hidden ${MIN_HEIGHT}`}>
        {/* Background image */}
        <div className="absolute inset-10">
          <img
            src={IMAGES.clubBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-4xl"
            onError={(e) => {
              e.target.style.display = "none";
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.classList.remove("hidden");
            }}
          />
          <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-900/90 to-black/95" />
        </div>

        {/* Overlay content */}
        <div
          className={`relative z-10 p-10 sm:p-12 lg:p-16 flex flex-col lg:flex-row justify-between lg:items-stretch gap-6 ${MIN_HEIGHT}`}
        >
          <div className="self-start">
            <div className="bg-white rounded-4xl px-6 py-4 sm:px-8 sm:py-5 shadow-xl max-w-md">
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                A Place to{" "}
                <span className="font-serif italic">Play Tennis</span>
              </h2>
            </div>
          </div>

          <div className="self-end lg:self-end lg:mt-auto">
            <div className="bg-white rounded-4xl px-10 py-8 sm:px-12 sm:py-12 shadow-xl max-w-md lg:max-w-lg">
              <h3 className="font-sans text-lg sm:text-xl font-bold text-black mb-3">
                What this Club is
              </h3>
              <p className="font-sans text-black/90 text-sm sm:text-base leading-relaxed">
                A place where tennis feels easy and enjoyable.
              </p>
              <p className="font-sans text-black/90 text-sm sm:text-base leading-relaxed mt-2">
                Where playing, conversation, and time on court come together
                naturally.
              </p>
              <p className="font-sans text-black/90 text-sm sm:text-base leading-relaxed mt-2">
                The court is at the center — comfort and good company come with
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
