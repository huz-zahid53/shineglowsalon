import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  heading: React.ReactNode; // allows italic <span> inside
  subtext?: string;
  align?: 'left' | 'center';
  icon?: React.ReactNode;
}

/**
 * Shared section header — replaces the repeated 3-element
 * (eyebrow label + h2 + italic gradient span) pattern across all 8 sections.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = React.memo(({
  eyebrow,
  heading,
  subtext,
  align = 'left',
  icon,
}) => {
  const centered = align === 'center';
  return (
    <div className={centered ? 'text-center' : ''}>
      <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-[#e2b4bd] mb-2 ${centered ? 'justify-center' : ''}`}>
        {icon}
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight [text-wrap:balance]">
        {heading}
      </h2>
      {subtext && (
        <p className={`text-sm text-zinc-300 mt-3 leading-relaxed font-light ${centered ? 'max-w-xl mx-auto' : ''}`}>
          {subtext}
        </p>
      )}
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';
