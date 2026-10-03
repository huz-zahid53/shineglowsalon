import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { BrandLogo } from './BrandLogo';
import { X, Calendar, Clock, Sparkles, CheckCircle2, MessageSquare, User, Phone } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

// Module-level constants — never re-created on render.
const TIME_SLOTS = [
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '07:00 PM',
] as const;

function getTomorrow(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  // Fix: initialise with preSelectedService directly — component unmounts
  // when closed so the initial value is always fresh on re-mount.
  const [selectedService, setSelectedService] = useState<string>(
    preSelectedService ?? SERVICES[0].title
  );
  const [selectedDate, setSelectedDate] = useState<string>(getTomorrow);
  const [selectedTime, setSelectedTime] = useState<string>('02:30 PM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preSelectedService when it changes after mount
  // (e.g. user clicks a different service card while modal is already open)
  useEffect(() => {
    if (preSelectedService) {
      setSelectedService(preSelectedService);
    }
  }, [preSelectedService]);

  // Accessibility: close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Focus trap: move focus into modal on open
  const firstFocusRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isOpen) firstFocusRef.current?.focus();
  }, [isOpen]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;

    const lines: string[] = [
      `Assalam-o-Alaikum ${SALON_INFO.name},`,
      `I would like to confirm an appointment reservation:`,
      `• Service: ${selectedService}`,
      `• Preferred Date: ${selectedDate}`,
      `• Preferred Time: ${selectedTime}`,
      `• Client Name: ${clientName}`,
      `• Contact: ${clientPhone}`,
    ];
    if (notes.trim()) lines.push(`• Special Notes: ${notes}`);
    lines.push(`Kindly verify slot availability.`);

    openWhatsApp(lines.join('\n'));
    setIsSuccess(true);
  }, [selectedService, selectedDate, selectedTime, clientName, clientPhone, notes]);

  const handleReset = useCallback(() => {
    setIsSuccess(false);
    onClose();
  }, [onClose]);

  // Guard after all hooks — hooks must be called unconditionally.
  if (!isOpen) return null;

  const modalId = 'booking-modal-title';

  return (
    /* Backdrop — clicking outside closes modal */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalId}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          ref={firstFocusRef}
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 id={modalId} className="font-serif text-2xl text-white font-normal">
              Booking Request Prepared
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Your appointment request for <strong className="text-white">{selectedService}</strong> has been transferred to our WhatsApp concierge. Our team in Lahore will confirm your exact slot within a few minutes.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#fae7eb] to-[#e2b4bd] text-zinc-950 text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <BrandLogo size="sm" withTagline={true} />
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#e2b4bd] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
                <Sparkles className="w-3 h-3" />
                <span>Concierge</span>
              </div>
            </div>

            <div>
              <h3 id={modalId} className="font-serif text-2xl sm:text-3xl text-white font-light">
                Reserve Your <span className="italic text-gradient-rose">Glow Session.</span>
              </h3>
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="bm-service" className="block text-xs font-medium text-zinc-300 mb-1.5">
                Selected Treatment
              </label>
              <select
                id="bm-service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs focus:outline-none focus:border-[#e2b4bd]"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title} className="bg-zinc-900 text-white">
                    {s.title} ({s.priceTag})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="bm-date" className="flex items-center gap-1 text-xs font-medium text-zinc-300 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#e2b4bd]" />
                  <span>Preferred Date</span>
                </label>
                <input
                  id="bm-date"
                  type="date"
                  value={selectedDate}
                  min={getTomorrow()}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs focus:outline-none focus:border-[#e2b4bd]"
                />
              </div>

              <div>
                <label htmlFor="bm-time" className="flex items-center gap-1 text-xs font-medium text-zinc-300 mb-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#e2b4bd]" />
                  <span>Time Slot</span>
                </label>
                <select
                  id="bm-time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs focus:outline-none focus:border-[#e2b4bd]"
                >
                  {TIME_SLOTS.map((time) => (
                    <option key={time} value={time} className="bg-zinc-900 text-white">
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Client Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="bm-name" className="flex items-center gap-1 text-xs font-medium text-zinc-300 mb-1.5">
                  <User className="w-3.5 h-3.5 text-[#e2b4bd]" />
                  <span>Full Name</span>
                </label>
                <input
                  id="bm-name"
                  type="text"
                  placeholder="e.g. Ayesha Malik"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#e2b4bd]"
                />
              </div>

              <div>
                <label htmlFor="bm-phone" className="flex items-center gap-1 text-xs font-medium text-zinc-300 mb-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#e2b4bd]" />
                  <span>Phone / WhatsApp</span>
                </label>
                <input
                  id="bm-phone"
                  type="tel"
                  placeholder="0300 1234567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#e2b4bd]"
                />
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label htmlFor="bm-notes" className="block text-xs font-medium text-zinc-300 mb-1.5">
                Special Requests or Outfit Notes <span className="text-zinc-500">(Optional)</span>
              </label>
              <textarea
                id="bm-notes"
                rows={2}
                placeholder="Bridal event date, outfit color, skin sensitivity, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#e2b4bd] resize-none"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#fae7eb] via-[#f0cdd4] to-[#e2b4bd] text-zinc-950 text-xs font-bold hover:from-white hover:to-[#f5d9df] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#a13e55]/20 hover:scale-[1.01]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Confirm &amp; Dispatch on WhatsApp</span>
              </button>
              <p className="text-[11px] text-center text-zinc-400 mt-2">
                Fast confirmation with zero upfront payment required for regular appointments.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
