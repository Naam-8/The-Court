import { useState } from "react";
import { IMAGES } from "../constants";

/**
 * BeforeAfterSlider
 *
 * Simple before/after comparison slider with placeholders.
 * Later, replace the inner placeholder divs with real <img> tags.
 *
 * Props:
 * - beforeSrc: optional URL for the "before" image
 * - afterSrc: optional URL for the "after" image
 *   If not provided, defaults to the existing GIFs.
 */
export default function BeforeAfterSlider({
  beforeSrc = IMAGES.sliderOneWAd,
  afterSrc = IMAGES.sliderOneAd,
}) {
  const [position, setPosition] = useState(50); // percentage
  const [currentBeforeSrc] = useState(beforeSrc);
  const [currentAfterSrc] = useState(afterSrc);
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);

  const handleChange = (event) => {
    setPosition(Number(event.target.value));
  };

  const handleBeforeError = () => {
    setBeforeError(true);
  };

  const handleAfterError = () => {
    setAfterError(true);
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative aspect-9/5 rounded-2xl overflow-hidden bg-black/80">
        {/* AFTER layer (full) */}
        <div className="absolute inset-0">
          {afterError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white text-sm">
              After view not available
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <img
                src={currentAfterSrc}
                alt="After"
                onError={handleAfterError}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>

        {/* BEFORE layer (clipped by slider position, not resized) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {beforeError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white text-sm">
              Before view not available
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <img
                src={currentBeforeSrc}
                alt="Before"
                onError={handleBeforeError}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
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
