import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    'Hello Original Adda Gourmet Cafe! I would like to make an enquiry.'
  );
  const whatsappUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Tooltip / Prompt bubble on desktop (dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-stone-900 text-white text-xs py-2 px-3.5 rounded-full shadow-xl border border-stone-800 animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with us on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-stone-400 hover:text-white ml-1 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Original Adda Gourmet Cafe on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        title="WhatsApp Original Adda"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
