import React, { useState, useEffect, useCallback, memo } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ServiceExplorer } from './components/ServiceExplorer';
import { BridalCustomizer } from './components/BridalCustomizer';
import { TransformationSlider } from './components/TransformationSlider';
import { EditorialGallery } from './components/EditorialGallery';
import { TestimonialSection } from './components/TestimonialSection';
import { FaqSection } from './components/FaqSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { useScrollState } from './hooks/useScrollState';

// Memo-wrap purely-presentational components so they don't re-render
// every time the booking modal state changes in the parent.
const MemoMarquee = memo(Marquee);
const MemoTransformationSlider = memo(TransformationSlider);
const MemoEditorialGallery = memo(EditorialGallery);
const MemoTestimonialSection = memo(TestimonialSection);
const MemoFaqSection = memo(FaqSection);
const MemoFooter = memo(Footer);
const MemoFloatingWhatsApp = memo(FloatingWhatsApp);

// Inline noise SVG — kept as a module-level constant to avoid
// rebuilding the data-URI string on every render.
const NOISE_BG_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
} as const;

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  // Single consolidated scroll state — replaces the duplicate listeners
  // that previously lived independently in App.tsx and Navbar.tsx.
  const { scrollProgress, isScrolled } = useScrollState();

  useEffect(() => {
    // 1. Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    // Fix: track every RAF ID so every frame is properly cancellable.
    let currentRafId: number;
    function raf(time: number) {
      lenis.raf(time);
      currentRafId = requestAnimationFrame(raf);
    }
    currentRafId = requestAnimationFrame(raf);

    // 2. Pause Lenis when tab is hidden — saves CPU on background tabs.
    const handleVisibilityChange = () => {
      if (document.hidden) lenis.stop();
      else lenis.start();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 3. Ambient GSAP floating orbs
    const ctx = gsap.context(() => {
      gsap.to('.ambient-orb', {
        y: 'random(-25, 25)',
        x: 'random(-20, 20)',
        scale: 'random(0.95, 1.05)',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 1.5,
      });
    });

    return () => {
      cancelAnimationFrame(currentRafId);
      lenis.destroy();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      ctx.revert();
    };
  }, []);

  const handleOpenBooking = useCallback((serviceTitle?: string) => {
    setSelectedServiceForBooking(serviceTitle);
    setIsBookingOpen(true);
  }, []);

  const handleCloseBooking = useCallback(() => {
    setIsBookingOpen(false);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#0b080d] text-[#f7f3ef] relative selection:bg-[#e2b4bd] selection:text-[#1a0a14]">
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#a13e55] via-[#e2b4bd] to-amber-200 z-[60] transition-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Global Noise Texture Scrim */}
      <div
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.035] mix-blend-screen"
        style={NOISE_BG_STYLE}
        aria-hidden="true"
      />

      {/* Navigation — receives isScrolled from the shared hook */}
      <Navbar onOpenBooking={handleOpenBooking} isScrolled={isScrolled} />

      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <MemoMarquee />
        <ServiceExplorer onSelectService={handleOpenBooking} />
        <BridalCustomizer />
        <MemoTransformationSlider />
        <MemoEditorialGallery />
        <MemoTestimonialSection />
        <MemoFaqSection />
        <LocationContact />
      </main>

      <MemoFooter />
      <MemoFloatingWhatsApp />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedService={selectedServiceForBooking}
      />
    </div>
  );
}
