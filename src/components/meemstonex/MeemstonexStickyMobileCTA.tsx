"use client";

import React from "react";

interface MeemstonexStickyMobileCTAProps {
  onBookClick: () => void;
}

export function MeemstonexStickyMobileCTA({ onBookClick }: MeemstonexStickyMobileCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-[#0B0A08]/95 backdrop-blur-md border-t border-[#B8860B]/30 flex items-center gap-2 shadow-2xl">
      <a
        href="https://wa.me/?text=Hi%20Meemstonex,%20I'd%20like%20to%20discuss%20a%20custom%20marble%20mandir%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md"
        title="WhatsApp Quick Chat"
      >
        <i className="fa-brands fa-whatsapp text-lg"></i>
      </a>
      <button
        onClick={onBookClick}
        className="flex-1 gold-gradient-bg shimmer-btn text-[#FFFEFA] py-2.5 px-4 rounded-full font-bold text-xs shadow-[0_0_25px_rgba(184,134,11,0.25)] flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <span>Discuss My Project</span>
        <i className="fa-solid fa-arrow-right text-xs"></i>
      </button>
    </div>
  );
}
