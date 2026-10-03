import React, { useState, useCallback } from 'react';
import { FAQS } from '../data/salonData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // useCallback so identity is stable — prevents child re-renders.
  const toggle = useCallback((idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#e2b4bd] mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#e2b4bd]" aria-hidden="true" />
            <span>Essential Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight [text-wrap:balance]">
            Frequently Asked <span className="italic font-normal text-gradient-rose">Questions.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            Everything you need to know about bridal reservations, trials, and hygiene standards.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" role="list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `faq-panel-${idx}`;
            const headingId = `faq-heading-${idx}`;

            return (
              // Fix: use faq.question as key — stable and unique, not array index.
              <div
                key={faq.question}
                role="listitem"
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  id={headingId}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2b4bd] focus-visible:ring-inset"
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-zinc-100 hover:text-[#e2b4bd] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full glass-panel flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#a13e55]/30 text-[#e2b4bd]' : 'text-zinc-400'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-6 pt-0 text-sm text-zinc-300 font-light leading-relaxed border-t border-white/5 mt-1"
                  >
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
