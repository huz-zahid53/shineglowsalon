import { useState, useEffect, useCallback } from 'react';

interface ScrollState {
  scrollY: number;
  scrollProgress: number; // 0–100
  isScrolled: boolean;    // true when scrollY > 40px
}

/**
 * Single consolidated scroll state hook.
 * Replaces the duplicate scroll listeners in App.tsx (progress tracker)
 * and Navbar.tsx (isScrolled detector) that both attached to window independently.
 *
 * Usage:
 *   const { scrollProgress, isScrolled } = useScrollState();
 */
export function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollProgress: 0,
    isScrolled: false,
  });

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    setState({
      scrollY: y,
      scrollProgress: totalHeight > 0 ? (y / totalHeight) * 100 : 0,
      isScrolled: y > 40,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return state;
}
