import { SALON_INFO } from '../data/salonData';

/**
 * Opens a pre-filled WhatsApp chat with the salon's concierge number.
 * Single source of truth — replaces the 5 duplicate window.open calls
 * scattered across Hero, Navbar, ServiceExplorer, FloatingWhatsApp, and LocationContact.
 */
export function openWhatsApp(message: string): void {
  const url = `https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** Pre-built message templates for consistent tone across the site */
export const WA_MESSAGES = {
  general: `Hi ${SALON_INFO.name}, I would like to inquire about appointments and bridal availability.`,
  hero: (lookName: string) =>
    `Hello ${SALON_INFO.name}, I loved the ${lookName} look on your website and would like to check available wedding slots!`,
  service: (serviceTitle: string) =>
    `Hello ${SALON_INFO.name}, I would like to book or ask for details about: "${serviceTitle}".`,
  directions: `Hello Shinglow, I would like directions or assistance visiting the salon today.`,
  floatingCta: `Hello ${SALON_INFO.name}, I would like to inquire about appointments and wedding dates.`,
} as const;
