import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

// Extracted images as constants — avoids hard-coding URLs inline in JSX
const AFTER_IMG = 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/975b2e98b_generated_image.png';
const BEFORE_IMG = 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/0a862d6d7_generated_image.png';

export const TransformationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const rafRef = useRef<number | undefined>(undefined);

  /**
   * RAF-throttled position updater — instead of calling setSliderPosition
   * on every mousemove/touchmove event (up to 120fps on high-refresh screens),
   * we schedule one state update per animation frame.
   */
  const scheduleUpdate = useCallback((clientX: number) => {
    if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = undefined;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(pct);
    });
  }, []);

  // Cancel any pending RAF on unmount
  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    scheduleUpdate(e.clientX);
  }, [scheduleUpdate]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    scheduleUpdate(e.touches[0].clientX);
  }, [scheduleUpdate]);

  const handleStart = useCallback(() => { isDragging.current = true; }, []);
  const handleEnd = useCallback(() => { isDragging.current = false; }, []);

  return (
    <section id="transformations" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#e2b4bd] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e2b4bd]" aria-hidden="true" />
            <span>Visible Artistry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight [text-wrap:balance]">
            The Signature <span className="italic font-normal text-gradient-rose">Radiance Reveal.</span>
          </h2>
          <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
            Drag the divider to observe how our skin prep, precision undertone formulation, and featherweight HD veil transform everyday radiance into timeless elegance.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onMouseMove={handleMouseMove}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            onTouchMove={handleTouchMove}
            role="img"
            aria-label="Before and after transformation slider. Drag to compare."
            className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/15 shadow-2xl glass-card"
          >
            {/* "After" Layer — full background */}
            <div className="absolute inset-0 bg-zinc-950">
              <img
                src={AFTER_IMG}
                alt="After Shinglow bridal transformation — luminous glam look"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-6 right-6 glass-panel px-4 py-2 rounded-xl text-xs font-semibold text-white border border-white/20">
                After · Signature Shinglow Radiance
              </div>
            </div>

            {/* "Before" Layer — clip-path masked */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              aria-hidden="true"
            >
              <img
                src={BEFORE_IMG}
                alt="Before — natural canvas and hair prep"
                className="w-full h-full object-cover brightness-90 contrast-95"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 glass-panel px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 border border-white/20">
                Before · Natural Canvas &amp; Hair Prep
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
              aria-hidden="true"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-panel border border-white/40 flex items-center justify-center text-white shadow-xl bg-black/60 backdrop-blur-md pointer-events-auto">
                <SlidersHorizontal className="w-4 h-4 text-[#e2b4bd]" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-zinc-400 px-2" aria-hidden="true">
            <span>← Slide left to reveal Bridal Glam</span>
            <span className="text-zinc-500">Interactive Tactile Comparison</span>
            <span>Slide right to view Bare Canvas →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
