import { useState } from "react";

/**
 * BeforeAfterSlider
 *
 * Simple before/after comparison slider with placeholders.
 * Later, replace the inner placeholder divs with real <img> tags.
 */
export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50); // percentage

  const handleChange = (event) => {
    setPosition(Number(event.target.value));
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative aspect-5/4 rounded-2xl overflow-hidden bg-black/80">
        {/* AFTER layer (full) */}
        <div className="absolute inset-0">
          <img
            src="/images/giphy.gif"
            alt="After"
            className="w-full h-full object-cover"
          />
        </div>

        {/* BEFORE layer (clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src="/images/giphy (1).gif"
            alt="Before"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center divider */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/80"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle with arrows */}
        <div
          className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="h-10 w-10 rounded-full bg-white shadow-lg border border-black/10 flex items-center justify-center">
            <div className="flex items-center gap-1 text-xs text-black/70">
              <span>◀</span>
              <span>▶</span>
            </div>
          </div>
        </div>

        {/* Invisible range input to control the position */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label="Before/after comparison slider"
        />
      </div>
    </div>
  );
}
