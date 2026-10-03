import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  /** Number of filled stars (typically 1–5) */
  count: number;
  size?: number;
  className?: string;
}

/**
 * Shared star rating renderer.
 * Replaces the 4 inline [...Array(n)].map(Star) copies in Hero.tsx and TestimonialSection.tsx.
 */
export const StarRating: React.FC<StarRatingProps> = React.memo(({ count, size = 14, className = '' }) => (
  <div className={`flex text-amber-400 ${className}`} aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }, (_, i) => (
      <Star key={i} style={{ width: size, height: size }} className="fill-current" />
    ))}
  </div>
));

StarRating.displayName = 'StarRating';
