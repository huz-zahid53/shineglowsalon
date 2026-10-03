import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { BrandLogo } from './BrandLogo';
import { Instagram, Facebook, MapPin, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#080509] text-zinc-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="block">
              <BrandLogo size="lg" withTagline={true} />
            </a>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-light">
              From bridal mornings to self-care afternoons, Shinglow by Ayesha Qadeer is Lahore's trusted sanctuary for bespoke hair architecture, clinical skin radiance, and occasion glamour.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-zinc-200 font-semibold">
              Salon Portfolio
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Signature Treatments
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-white transition-colors">
                  Bridal Suite &amp; Trousseau
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-white transition-colors">
                  Radiance Transformations
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Editorial Visual Archive
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Verified Google Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Studio Info */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="uppercase tracking-widest text-zinc-200 font-semibold">
              Lahore Sanctuary
            </div>
            <div className="flex items-start gap-2 text-zinc-300 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#e2b4bd] shrink-0 mt-0.5" />
              <span>{SALON_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Phone className="w-4 h-4 text-[#e2b4bd] shrink-0" />
              <a href={`tel:${SALON_INFO.phone}`} className="hover:text-white transition-colors">
                {SALON_INFO.phone}
              </a>
            </div>
            <div className="text-[11px] text-zinc-500 pt-1">
              Open Daily: {SALON_INFO.timings.split(':').slice(1).join(':').trim()} · Dedicated Customer Parking
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} {SALON_INFO.fullName} · Lahore, Pakistan. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
