import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { BrandLogoMark } from './BrandLogo';
import {
  Sparkles,
  Calendar,
  MessageCircle,
  Star,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Heart,
  Eye,
  Layers
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

interface ModelLook {
  id: string;
  name: string;
  category: string;
  tagline: string;
  imageUrl: string;
  hotspots: { title: string; note: string; top: string; left: string }[];
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const modelLooks: ModelLook[] = [
    {
      id: 'barat-couture',
      name: 'Royal Barat Couture',
      category: 'Signature Bridal Artistry',
      tagline: 'High-definition 24hr dewy skin with timeless traditional crimson & gold harmony.',
      imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/975b2e98b_generated_image.png',
      hotspots: [
        { title: 'Airbrush Complexion', note: 'Transfer-resistant matte-dewy hybrid finish', top: '38%', left: '42%' },
        { title: 'Artisanal Eye Sculpt', note: 'Intricate cut-crease with 3D mink lashes', top: '32%', left: '62%' },
        { title: 'Bridal Dupatta Draping', note: 'Crown matha-patti & heavy veil pin engineering', top: '18%', left: '30%' },
      ],
    },
    {
      id: 'valima-glow',
      name: 'Luminous Valima Soft Glam',
      category: 'Ethereal Evening Radiance',
      tagline: 'Sophisticated champagne undertones, glass skin glow, and romantic textured waves.',
      imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/97a369d02_generated_image.png',
      hotspots: [
        { title: 'Glass Skin Radiance', note: 'Botanical oil infusion & liquid highlighter veil', top: '40%', left: '45%' },
        { title: 'Velvet Rose Lips', note: 'Longwear custom mixed nude-rose tint', top: '56%', left: '48%' },
      ],
    },
    {
      id: 'hair-balayage',
      name: 'Dimensional Caramel Balayage',
      category: 'Hair Architecture & Shine',
      tagline: 'Seamless sun-kissed dimension and Olaplex protein restorative mirror glaze.',
      imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/0a862d6d7_generated_image.png',
      hotspots: [
        { title: 'Hand-Painted Dimension', note: 'Seamless melt with zero root demarcation', top: '42%', left: '35%' },
        { title: 'Silk Gloss Finish', note: 'Molecular bond repair & heat shield protection', top: '65%', left: '55%' },
      ],
    },
    {
      id: 'keratin-spa',
      name: 'Keratin Mirror Glassing',
      category: 'Anti-Frizz Hair Therapy',
      tagline: 'Liquid glass hair restructuring that eliminates Lahore humidity frizz for months.',
      imageUrl: 'https://media.base44.com/images/public/6ac0caf265b61c1b4e88e9f0/8c2940e36_generated_image.png',
      hotspots: [
        { title: 'Mirror Hair Glassing', note: 'Thermal sealed anti-frizz keratin protein', top: '48%', left: '50%' },
      ],
    },
  ];

  const [activeLookIdx, setActiveLookIdx] = useState<number>(0);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const currentLook = modelLooks[activeLookIdx];

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${SALON_INFO.name}, I loved the ${currentLook.name} look on your website and would like to check available wedding slots!`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[96vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Ambient Glass Glow Orbs */}
      <div className="ambient-orb w-[580px] h-[580px] bg-[#a13e55]/25 -top-24 -left-24 animate-pulse duration-1000"></div>
      <div className="ambient-orb w-[500px] h-[500px] bg-[#e2b4bd]/20 top-1/4 right-[-140px]"></div>
      <div className="ambient-orb w-[420px] h-[420px] bg-[#d4af37]/10 bottom-0 left-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        {/* Top Announcement Ribbon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-[#e2b4bd] mb-6 backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#e2b4bd] animate-spin-slow" />
          <span>{SALON_INFO.announcement}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left Column: Brand Prose & High-Conversion CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-400 font-medium">
              <span>Haute Bridal Studio</span>
              <span aria-hidden="true" className="text-[#e2b4bd]">·</span>
              <span>Aesthetic Skin</span>
              <span aria-hidden="true" className="text-[#e2b4bd]">·</span>
              <span>Lahore</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.06] [text-wrap:balance]">
              Where Lahore Glows With{' '}
              <span className="italic font-normal text-gradient-rose">Bespoke Radiance.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
              Experience signature bridal transformations, precision hair architecture, and clinical hydra-dermabrasion facials. Handcrafted by master artist Ayesha Qadeer at PCSIR College Road, Lahore.
            </p>

            {/* Quick Conversion CTA Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 text-sm font-semibold text-zinc-950 bg-gradient-to-r from-[#fff0f3] via-[#fae7eb] to-[#e2b4bd] rounded-xl hover:from-white hover:to-[#f3d2d8] transition-all shadow-xl shadow-[#a13e55]/30 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5 group"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                <span>Reserve Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={openWhatsApp}
                className="px-6 py-4 text-sm font-medium text-white glass-panel rounded-xl hover:bg-white/[0.09] hover:border-white/25 transition-all flex items-center gap-2.5 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Concierge</span>
              </button>
            </div>

            {/* Interactive Look Switcher Pills */}
            <div className="pt-3">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-2.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#e2b4bd]" />
                <span>Explore Signature Model Looks</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {modelLooks.map((look, idx) => (
                  <button
                    key={look.id}
                    onClick={() => {
                      setActiveLookIdx(idx);
                      setActiveHotspot(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeLookIdx === idx
                        ? 'bg-white text-zinc-950 font-semibold shadow-md ring-1 ring-[#e2b4bd]'
                        : 'bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white border border-white/5'
                    }`}
                  >
                    {look.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Claim-to-Proof Adjacency */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-white text-sm tabular-nums">4.9 / 5.0</span>
                <span>(148 Google Reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#e2b4bd]" />
                <span className="text-zinc-300 font-medium">{SALON_INFO.established}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>PCSIR College Rd, Lahore</span>
              </div>
            </div>
          </div>

          {/* Right Column: BIG BEAUTY SALON MODEL IMAGE WITH GLASS OVERLAYS */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Back Accent Ambient Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#a13e55]/30 to-[#e2b4bd]/20 rounded-3xl filter blur-2xl -z-10 scale-95 transform translate-y-4"></div>

              {/* The Grand Model Showcase Container */}
              <div className="glass-card rounded-3xl p-3 sm:p-4 border border-white/20 relative shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)] group">
                
                {/* Big Model Image Canvas */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950">
                  <img
                    key={currentLook.id}
                    src={currentLook.imageUrl}
                    alt={`${currentLook.name} - Beauty Salon Model at Shinglow`}
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add(
                          'bg-gradient-to-tr',
                          'from-[#2e121a]',
                          'via-[#180e15]',
                          'to-[#3d1622]'
                        );
                      }
                    }}
                  />

                  {/* Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20 pointer-events-none"></div>

                  {/* Top Floating Badge on Image: Active Season Status */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="glass-panel px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-xl">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-[11px] font-semibold text-zinc-100">
                        Wedding Season 2026/27 Booking
                      </span>
                    </div>

                    <button
                      onClick={() => setShowHotspots(!showHotspots)}
                      className="glass-panel px-3 py-1.5 rounded-full border border-white/20 text-[11px] font-medium text-zinc-200 hover:text-white flex items-center gap-1.5 transition-colors shadow-lg"
                      title="Toggle Artist Highlights"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#e2b4bd]" />
                      <span>{showHotspots ? 'Highlights On' : 'View Clean'}</span>
                    </button>
                  </div>

                  {/* Interactive Hotspots on the Model Face/Hair */}
                  {showHotspots &&
                    currentLook.hotspots.map((spot, idx) => {
                      const isOpened = activeHotspot === idx;
                      return (
                        <div
                          key={idx}
                          className="absolute z-20 cursor-pointer"
                          style={{ top: spot.top, left: spot.left }}
                          onClick={() => setActiveHotspot(isOpened ? null : idx)}
                        >
                          <div className="relative group/spot">
                            <span className="w-4 h-4 rounded-full bg-[#fae7eb] text-zinc-950 flex items-center justify-center text-[10px] font-bold shadow-lg shadow-black/80 ring-2 ring-white/60 animate-pulse">
                              +
                            </span>
                            {/* Hotspot Popover */}
                            <div
                              className={`absolute bottom-6 left-1/2 -translate-x-1/2 glass-panel p-3 rounded-xl border border-white/30 text-white min-w-[200px] shadow-2xl transition-all duration-200 pointer-events-auto ${
                                isOpened
                                  ? 'opacity-100 scale-100'
                                  : 'opacity-0 scale-95 pointer-events-none group-hover/spot:opacity-100 group-hover/spot:scale-100'
                              }`}
                            >
                              <div className="text-[11px] font-bold text-[#e2b4bd] uppercase tracking-wider">
                                {spot.title}
                              </div>
                              <div className="text-[11px] text-zinc-300 mt-0.5 leading-snug">
                                {spot.note}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  {/* Bottom Model Details Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-semibold tracking-widest uppercase text-[#e2b4bd]">
                        {currentLook.category}
                      </span>
                      <span className="text-zinc-400">·</span>
                      <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified In-Studio Work
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                      {currentLook.name}
                    </h2>

                    <p className="text-xs text-zinc-300 mt-1.5 line-clamp-2 font-light leading-relaxed">
                      {currentLook.tagline}
                    </p>

                    {/* Quick Model Selector Dots & Previews */}
                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {modelLooks.map((look, i) => (
                          <button
                            key={look.id}
                            onClick={() => {
                              setActiveLookIdx(i);
                              setActiveHotspot(null);
                            }}
                            className={`w-9 h-9 rounded-lg overflow-hidden border transition-all ${
                              activeLookIdx === i
                                ? 'border-[#e2b4bd] ring-2 ring-[#e2b4bd]/50 scale-105'
                                : 'border-white/20 opacity-60 hover:opacity-100'
                            }`}
                            title={look.name}
                          >
                            <img
                              src={look.imageUrl}
                              alt={look.name}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={openWhatsApp}
                        className="px-3.5 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/20 text-xs font-medium text-white border border-white/20 transition-all flex items-center gap-1.5"
                      >
                        <span>Book This Look</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#e2b4bd]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphism Badge: Salon Authority */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-panel p-4 rounded-2xl max-w-[280px] border border-white/25 shadow-2xl hidden sm:block z-30">
                <div className="flex items-center gap-3.5">
                  <BrandLogoMark size={44} />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Shinglow Bridal Studio</span>
                      <Heart className="w-3 h-3 text-[#e2b4bd] fill-[#e2b4bd]" />
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      PCSIR Staff Colony, College Road Lahore
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Client Review Quote Card */}
              <div className="absolute -top-5 -right-4 sm:-right-8 glass-panel p-3.5 rounded-2xl max-w-[250px] border border-white/25 shadow-2xl hidden sm:block z-30">
                <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="text-[10px] text-zinc-300 ml-1">5.0 Star</span>
                </div>
                <p className="text-[11px] text-zinc-200 italic leading-snug">
                  "My Barat makeup was flawless for over 10 hours under heavy stage lights!"
                </p>
                <div className="text-[9.5px] text-[#e2b4bd] font-medium mt-1">
                  — Mahnoor T. (Barat Bride)
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
