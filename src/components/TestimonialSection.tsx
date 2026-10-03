import React from 'react';
import { REVIEWS } from '../data/salonData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative bg-black/30 border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#e2b4bd] mb-2">
              Client Testimonials
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Words From Our <span className="italic font-normal text-gradient-rose">Cherished Brides.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 glass-panel px-4 py-2 rounded-xl text-xs text-zinc-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-white tabular-nums">4.9 Overall Score</span>
            <span className="text-zinc-500">·</span>
            <span>148 Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/10 relative group"
            >
              <div>
                <Quote className="w-8 h-8 text-[#e2b4bd]/20 mb-4" />
                <div className="flex text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-light">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="text-sm font-medium text-white">{rev.clientName}</div>
                <div className="text-xs text-[#e2b4bd] mt-0.5">{rev.event}</div>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mt-2">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{rev.verifiedOn}</span>
                  <span className="text-zinc-600">·</span>
                  <span>{rev.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
