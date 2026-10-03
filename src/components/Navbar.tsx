import React, { useState, useCallback } from 'react';
import { SALON_INFO } from '../data/salonData';
import { BrandLogo } from './BrandLogo';
import { Calendar, MessageCircle, Menu, X } from 'lucide-react';
import { openWhatsApp, WA_MESSAGES } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: () => void;
  /** Passed from App via useScrollState hook — avoids a second scroll listener here */
  isScrolled: boolean;
}

// Module-level constant — not re-created on every render.
const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Bridal Suite', href: '#bridal' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Client Reviews', href: '#reviews' },
  { label: 'Studio & FAQ', href: '#faq' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Removed independent scroll listener — isScrolled now comes from App via hook.

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleWhatsApp = useCallback(() => {
    openWhatsApp(WA_MESSAGES.general);
  }, []);

  const handleMobileWhatsApp = useCallback(() => {
    setMobileMenuOpen(false);
    openWhatsApp(WA_MESSAGES.general);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#top"
            className="group flex items-center transition-transform hover:scale-[1.01]"
            title="Shinglow By Ayesha Qadeer Salon"
          >
            <BrandLogo size="md" withTagline={true} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide" aria-label="Main navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#e2b4bd] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-950/30 transition-colors whitespace-nowrap"
              title="Chat directly on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-[#fae7eb] to-[#e2b4bd] rounded-lg hover:from-white hover:to-[#f0cdd4] transition-all shadow-lg shadow-[#a13e55]/20 hover:shadow-[#a13e55]/30 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              aria-label="Book an appointment"
            >
              <Calendar className="w-3.5 h-3.5 text-zinc-950" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-nav border-t border-white/10 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base text-zinc-200 hover:text-white py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={handleMobileWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-emerald-400 border border-emerald-500/30 rounded-lg"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp ({SALON_INFO.phone})
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
