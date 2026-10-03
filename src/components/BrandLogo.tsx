import React from 'react';

interface BrandLogoMarkProps {
  size?: number;
  className?: string;
}

export const BrandLogoMark: React.FC<BrandLogoMarkProps> = ({ size = 36, className = '' }) => {
  const uniqueId = React.useId();
  const gradRose = `roseGold-${uniqueId}`;
  const gradAccent = `goldAccent-${uniqueId}`;
  const gradHalo = `haloGlow-${uniqueId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:rotate-3 ${className}`}
      aria-label="Shinglow Luxury Brand Mark"
    >
      <defs>
        <linearGradient id={gradRose} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff2f4" />
          <stop offset="30%" stopColor="#fae7eb" />
          <stop offset="70%" stopColor="#e2b4bd" />
          <stop offset="100%" stopColor="#a13e55" />
        </linearGradient>
        <linearGradient id={gradAccent} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f6d8df" />
          <stop offset="100%" stopColor="#c46b85" />
        </linearGradient>
        <radialGradient id={gradHalo} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e2b4bd" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#a13e55" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0b080d" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Deep Obsidian Curved Glass Base */}
      <rect width="100" height="100" rx="24" fill="#0e0a10" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* Subtle Ambient Halo Glow */}
      <circle cx="50" cy="50" r="44" fill={`url(#${gradHalo})`} />

      {/* Fine Concentric Hairline Rings */}
      <circle cx="50" cy="50" r="41" fill="none" stroke={`url(#${gradRose})`} strokeWidth="1.2" strokeOpacity="0.7" strokeDasharray="80 3" />
      <circle cx="50" cy="50" r="45" fill="none" stroke={`url(#${gradRose})`} strokeWidth="0.7" strokeOpacity="0.35" />

      {/* Micro Celestial Cardinal Diamonds */}
      <polygon points="50,6 51.5,9 50,12 48.5,9" fill={`url(#${gradRose})`} />
      <polygon points="50,88 51.5,91 50,94 48.5,91" fill={`url(#${gradRose})`} />
      <polygon points="6,50 9,51.5 12,50 9,48.5" fill={`url(#${gradRose})`} />
      <polygon points="88,50 91,51.5 94,50 91,48.5" fill={`url(#${gradRose})`} />

      {/* Interlocking Calligraphic "S" Contour */}
      <path
        d="M64 29 C56 21 40 23 35 31 C30 39 36 47 48 51 C61 55 68 61 64 72 C60 83 43 82 34 76 C31 74 30 71 31 69 C32 67 34 67 36 68 C43 73 57 75 60 68 C63 61 58 57 46 53 C33 49 26 41 30 31 C34 21 48 18 61 24 C64 25 65 27 64 29 Z"
        fill={`url(#${gradRose})`}
      />

      {/* Central Radiance Glow Star */}
      <g transform="translate(62, 36)">
        <path d="M0,-12 Q0,0 12,0 Q0,0 0,12 Q0,0 -12,0 Q0,0 0,-12 Z" fill={`url(#${gradAccent})`} />
        <path d="M-6,-6 L6,6 M-6,6 L6,-6" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.75" />
        <circle cx="0" cy="0" r="2" fill="#ffffff" />
      </g>
    </svg>
  );
};

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  withTagline = true,
  className = '',
}) => {
  const markSizes = {
    sm: 30,
    md: 38,
    lg: 48,
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
  };

  const subSizes = {
    sm: 'text-[8.5px]',
    md: 'text-[9.5px]',
    lg: 'text-[11px]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <BrandLogoMark size={markSizes[size]} />
      <div className="flex flex-col">
        <span className={`font-serif tracking-tight font-medium text-white leading-none ${titleSizes[size]}`}>
          Shinglow<span className="text-[#e2b4bd]">.</span>
        </span>
        {withTagline && (
          <span
            className={`uppercase tracking-[0.26em] text-[#e2b4bd]/80 font-medium mt-1 font-sans leading-none ${subSizes[size]}`}
          >
            By Ayesha Qadeer
          </span>
        )}
      </div>
    </div>
  );
};
