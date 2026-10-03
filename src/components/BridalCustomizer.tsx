import React, { useState, useCallback } from 'react';
import { BRIDAL_PACKAGES, SALON_INFO } from '../data/salonData';
import { Sparkles, Check, Plus, Minus, MessageCircle, Crown, Heart } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface UpgradeOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

// Static data — module-level so it's never re-created on render.
const AVAILABLE_ADDONS: UpgradeOption[] = [
  {
    id: 'airbrush-finish',
    name: 'Airbrush HD Complexion Upgrade',
    price: 8000,
    description: 'Ultra-fine micro-mist silicone foundation for flawless 24hr photography hold.',
  },
  {
    id: 'hydra-facial',
    name: 'Pre-Bridal Diamond Hydra-Facial',
    price: 7500,
    description: 'Medical-grade oxygen dermabrasion 48 hours prior for an illuminated natural skin canvas.',
  },
  {
    id: 'olaplex-botox',
    name: 'Olaplex Silk Restoration & Hair Botox',
    price: 14000,
    description: 'Intense anti-humidity glass hair treatment for glossy bridal hairstyles that never frizz.',
  },
];

const GUEST_PRICE_PER_PERSON = 12000;

export const BridalCustomizer: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>(BRIDAL_PACKAGES[1].id);
  const [guestCount, setGuestCount] = useState<number>(0);
  const [activeAddons, setActiveAddons] = useState<string[]>(['hydra-facial']);

  const selectedTier = BRIDAL_PACKAGES.find((t) => t.id === selectedTierId) ?? BRIDAL_PACKAGES[0];

  const addonsTotal = activeAddons.reduce((sum, id) => {
    const item = AVAILABLE_ADDONS.find((a) => a.id === id);
    return sum + (item?.price ?? 0);
  }, 0);

  const guestTotal = guestCount * GUEST_PRICE_PER_PERSON;
  const totalInvestment = selectedTier.basePrice + addonsTotal + guestTotal;

  const toggleAddon = useCallback((id: string) => {
    setActiveAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const decrementGuests = useCallback(() => setGuestCount((n) => Math.max(0, n - 1)), []);
  const incrementGuests = useCallback(() => setGuestCount((n) => n + 1), []);

  const handleWhatsAppCustomQuote = useCallback(() => {
    const selectedAddonNames = activeAddons
      .map((id) => AVAILABLE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const lines: string[] = [
      `Assalam-o-Alaikum ${SALON_INFO.name},`,
      `I would like to reserve my Bridal Package:`,
      `• Package: ${selectedTier.name} (${selectedTier.priceDisplay})`,
    ];
    if (selectedAddonNames) lines.push(`• Custom Upgrades: ${selectedAddonNames}`);
    if (guestCount > 0) lines.push(`• Additional Guests/Sisters Glam: ${guestCount} person(s)`);
    lines.push(`• Estimated Investment: PKR ${totalInvestment.toLocaleString()}`);
    lines.push(`Please let me know available wedding dates.`);

    openWhatsApp(lines.join('\n'));
  }, [activeAddons, selectedTier, guestCount, totalInvestment]);

  return (
    <section id="bridal" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0e0a10] via-[#140b12] to-[#0e0a10]">
      <div className="ambient-orb w-[600px] h-[600px] bg-[#a13e55]/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#e2b4bd] mb-3">
            <Crown className="w-3.5 h-3.5 text-[#e2b4bd]" aria-hidden="true" />
            <span>Bespoke Bridal Suite</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight [text-wrap:balance]">
            Curate Your Dream <span className="italic font-normal text-gradient-rose">Bridal Journey.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-3 leading-relaxed">
            Tailor your Barat, Valima, or Nikkah experience with bespoke beauty upgrades and family packages.
          </p>
        </div>

        {/* 3-Column Tier Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" role="radiogroup" aria-label="Select bridal package">
          {BRIDAL_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedTierId;
            return (
              <div
                key={pkg.id}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelectedTierId(pkg.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedTierId(pkg.id); }}
                className={`cursor-pointer rounded-2xl p-6 sm:p-8 transition-all relative flex flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-[#e2b4bd] ${
                  isSelected
                    ? 'glass-panel border-[#e2b4bd]/50 shadow-2xl shadow-[#a13e55]/30 ring-1 ring-[#e2b4bd]/40'
                    : 'glass-card border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#a13e55] to-[#c46b85] text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 mb-1">{pkg.recommendedFor}</div>
                  <h3 className="font-serif text-2xl text-white font-medium mb-2">{pkg.name}</h3>
                  <p className="text-xs text-zinc-300 mb-5 leading-relaxed">{pkg.subtitle}</p>

                  <div className="font-serif text-2xl sm:text-3xl text-[#e2b4bd] font-normal mb-6 pb-6 border-b border-white/10 tabular-nums">
                    {pkg.priceDisplay}
                  </div>

                  <ul className="space-y-3" aria-label="Package features">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                        <Check className="w-3.5 h-3.5 text-[#e2b4bd] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <div
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#fae7eb] to-[#e2b4bd] text-zinc-950 shadow-md'
                        : 'bg-white/[0.06] text-zinc-300 hover:bg-white/10'
                    }`}
                  >
                    {isSelected ? 'Selected Experience' : 'Choose Package'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Upgrades & Live Quote Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Addons Selection */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1">
                  Enhance Your Bridal Package
                </h4>
                <p className="text-xs text-zinc-400">
                  Select recommended treatments to prepare your skin and hair before the grand ceremony.
                </p>
              </div>

              <div className="space-y-3" role="group" aria-label="Optional add-ons">
                {AVAILABLE_ADDONS.map((addon) => {
                  const isChecked = activeAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onClick={() => toggleAddon(addon.id)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleAddon(addon.id); }}
                      className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[#e2b4bd] ${
                        isChecked
                          ? 'bg-white/[0.08] border-[#e2b4bd]/40'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isChecked ? 'bg-[#e2b4bd] text-zinc-950' : 'border border-white/30 text-transparent'
                          }`}
                          aria-hidden="true"
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{addon.name}</div>
                          <div className="text-xs text-zinc-400 mt-0.5">{addon.description}</div>
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-[#e2b4bd] whitespace-nowrap tabular-nums">
                        +PKR {addon.price.toLocaleString()}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Guest Stepper */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-white">Bridal Party / Sisters & Mother Makeup</div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    PKR {GUEST_PRICE_PER_PERSON.toLocaleString()} per person including hairstyle and lash application.
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/[0.06] rounded-lg p-1 border border-white/10 shrink-0" role="group" aria-label="Guest count">
                  <button
                    onClick={decrementGuests}
                    disabled={guestCount === 0}
                    className="w-7 h-7 rounded flex items-center justify-center text-zinc-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Decrease guest count"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-semibold text-white w-6 text-center tabular-nums" aria-live="polite">
                    {guestCount}
                  </span>
                  <button
                    onClick={incrementGuests}
                    className="w-7 h-7 rounded flex items-center justify-center text-zinc-300 hover:text-white"
                    aria-label="Increase guest count"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Quote Summary */}
            <div className="lg:col-span-5 glass-card rounded-xl p-6 border border-white/15 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Bespoke Estimate</span>
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-emerald-400" aria-hidden="true" />
                  Lahore Studio
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-zinc-300">
                  <span>{selectedTier.name}</span>
                  <span className="tabular-nums font-medium text-white">PKR {selectedTier.basePrice.toLocaleString()}</span>
                </div>

                {activeAddons.map((addonId) => {
                  const item = AVAILABLE_ADDONS.find((a) => a.id === addonId);
                  if (!item) return null;
                  return (
                    <div key={item.id} className="flex justify-between text-zinc-400">
                      <span>+ {item.name}</span>
                      <span className="tabular-nums">PKR {item.price.toLocaleString()}</span>
                    </div>
                  );
                })}

                {guestCount > 0 && (
                  <div className="flex justify-between text-zinc-400">
                    <span>+ Guest Makeup ({guestCount} guest{guestCount !== 1 ? 's' : ''})</span>
                    <span className="tabular-nums">PKR {guestTotal.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">Total Investment</span>
                  <span className="text-xs text-zinc-500">Includes consultation & prep</span>
                </div>
                <div className="text-2xl font-serif text-white font-medium tabular-nums" aria-live="polite">
                  PKR {totalInvestment.toLocaleString()}
                </div>
              </div>

              <button
                onClick={handleWhatsAppCustomQuote}
                className="w-full py-3.5 text-xs font-bold text-zinc-950 bg-gradient-to-r from-[#fae7eb] via-[#f0cdd4] to-[#e2b4bd] rounded-xl hover:from-white hover:to-[#f5d9df] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#a13e55]/20 hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>Book This Package on WhatsApp</span>
              </button>

              <div className="text-center text-[11px] text-zinc-500">
                Ayesha Qadeer personally oversees every signature bridal consultation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
