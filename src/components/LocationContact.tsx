import React, { useCallback } from 'react';
import { SALON_INFO } from '../data/salonData';
import { openWhatsApp, WA_MESSAGES } from '../utils/whatsapp';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Instagram, Facebook } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const openDirections = useCallback(() => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(SALON_INFO.address)}`, '_blank', 'noopener,noreferrer');
  }, []);

  const handleWhatsApp = useCallback(() => {
    openWhatsApp(WA_MESSAGES.directions);
  }, []);

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#e2b4bd] mb-2">
                Visit The Sanctuary
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                Our Lahore <span className="italic font-normal text-gradient-rose">Studio.</span>
              </h2>
              <p className="text-sm text-zinc-300 mt-3 font-light leading-relaxed">
                Step into a serene space designed with warm fluted glass, private bridal dressing suites, and dedicated aesthetic treatment booths.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#a13e55]/20 text-[#e2b4bd] shrink-0 border border-[#e2b4bd]/20" aria-hidden="true">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Location</div>
                  <address className="text-sm font-medium text-white mt-1 leading-snug not-italic">
                    {SALON_INFO.address}
                  </address>
                  <div className="text-xs text-zinc-400 mt-1">{SALON_INFO.city}</div>
                </div>
              </div>

              {/* Timings */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#a13e55]/20 text-[#e2b4bd] shrink-0 border border-[#e2b4bd]/20" aria-hidden="true">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Timings</div>
                  <div className="text-sm font-medium text-white mt-1">{SALON_INFO.timings}</div>
                  <div className="text-xs text-emerald-400 mt-1">Open 7 Days a Week</div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-950/40 text-emerald-400 shrink-0 border border-emerald-500/30" aria-hidden="true">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Direct Inquiries</div>
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="text-sm font-medium text-white hover:text-[#e2b4bd] transition-colors mt-1 block"
                  >
                    {SALON_INFO.phone}
                  </a>
                  <div className="text-xs text-zinc-400 mt-1">Direct call or WhatsApp concierge</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={openDirections}
                className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white text-xs font-medium border border-white/15 flex items-center gap-2 transition-all"
                aria-label="Open salon location in Google Maps"
              >
                <Navigation className="w-4 h-4 text-[#e2b4bd]" aria-hidden="true" />
                <span>Open in Google Maps</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-4 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 text-xs font-medium border border-emerald-500/30 flex items-center gap-2 transition-all"
                aria-label="Chat on WhatsApp for directions"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Instant WhatsApp</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="p-3 rounded-xl glass-panel text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                aria-label="Follow Shinglow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="p-3 rounded-xl glass-panel text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                aria-label="Follow Shinglow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-xs text-zinc-400">@shinglowbyayeshaqadeer</span>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-2 sm:p-3 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden relative">
                <iframe
                  src={SALON_INFO.mapUrl}
                  title="Shinglow Salon Location on Google Maps"
                  className="w-full h-full border-0 filter invert-[0.9] hue-rotate-180 contrast-125"
                  loading="lazy"
                  allowFullScreen
                  aria-label="Interactive map showing Shinglow Salon location in Lahore"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
