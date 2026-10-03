import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'BESPOKE BRIDAL COUTURE',
    'HYDRA OXYGEN DIAMOND GLOW',
    'DIMENSIONAL BALAYAGE',
    'KERATIN GLASS RESTORATION',
    'SIGNATURE MEHNDI & PARTY GLAM',
    'ORGANIC BOTANICAL FACIALS',
    'VIP PRIVATE BRIDAL SUITE',
    'PCSIR COLLEGE ROAD LAHORE'
  ];

  return (
    <div className="relative border-y border-white/[0.08] bg-black/40 backdrop-blur-md overflow-hidden py-4">
      <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-5 text-xs tracking-[0.22em] uppercase font-medium text-zinc-400">
            <span className="text-zinc-300 hover:text-[#e2b4bd] transition-colors">{text}</span>
            <span className="text-[#e2b4bd]/60 font-serif text-base select-none">✳</span>
          </div>
        ))}
      </div>
    </div>
  );
};
