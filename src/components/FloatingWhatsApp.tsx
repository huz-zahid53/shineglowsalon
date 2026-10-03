import React, { useState, useCallback } from 'react';
import { SALON_INFO } from '../data/salonData';
import { openWhatsApp, WA_MESSAGES } from '../utils/whatsapp';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = useCallback(() => {
    openWhatsApp(WA_MESSAGES.floatingCta);
  }, []);

  const dismissTooltip = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {showTooltip && (
        <div className="glass-panel px-3.5 py-2 rounded-xl text-xs text-zinc-200 border border-emerald-500/30 flex items-center gap-2.5 shadow-2xl animate-fade-in hidden sm:flex">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span>Chat with {SALON_INFO.name} Studio</span>
          <button
            onClick={dismissTooltip}
            className="text-zinc-400 hover:text-white ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all relative"
        aria-label="Chat with Shinglow Salon on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" aria-hidden="true" />
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.2]" />
      </button>
    </div>
  );
};
