"use client";

import React from "react";

interface MeemstonexStickyMobileCTAProps {
  onBookClick: () => void;
}

export function MeemstonexStickyMobileCTA({ onBookClick }: MeemstonexStickyMobileCTAProps) {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden max-w-lg mx-auto">
      {/* Floating Island Executive Glass Container */}
      <div className="bg-[#0D0B08]/92 backdrop-blur-xl border border-[#D4AF37]/50 rounded-2xl p-2 px-2.5 shadow-[0_15px_45px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.2)] flex items-center gap-2">
        {/* Button 1: Direct Phone Call Button (+91 92145 97877) */}
        <a
          href="tel:+919214597877"
          className="emerald-btn-glow relative flex items-center justify-center gap-2 h-12 px-3 sm:px-3.5 rounded-xl text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 font-extrabold text-xs tracking-wide group"
          title="Call +91 92145 97877"
        >
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-300 opacity-75"></span>
            <i className="fa-solid fa-phone text-base sm:text-lg text-white drop-shadow-xs relative z-10"></i>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[8px] sm:text-[9px] uppercase font-black text-emerald-200 tracking-wider">
              Call Direct
            </span>
            <span className="font-extrabold text-[11px] sm:text-xs text-white drop-shadow-xs whitespace-nowrap">
              +91 92145 97877
            </span>
          </div>
        </a>

        {/* Button 2: Ultra-Luxurious Gold "Discuss My Project" Primary Lead Button */}
        <button
          onClick={onBookClick}
          className="flex-1 h-12 gold-btn-luxury shimmer-btn text-[#1A1207] px-3.5 rounded-xl font-black shadow-[0_6px_25px_rgba(200,153,39,0.45)] hover:shadow-[0_8px_30px_rgba(200,153,39,0.65)] flex items-center justify-between gap-1.5 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer group min-w-0"
        >
          <div className="flex flex-col text-left leading-none py-0.5 min-w-0">
            <span className="text-[8px] sm:text-[9px] uppercase font-black text-[#5C4208] tracking-widest truncate mb-0.5">
              ✦ Consultation
            </span>
            <span className="font-extrabold text-xs sm:text-sm text-[#1A1207] tracking-tight truncate">
              Discuss My Project
            </span>
          </div>

          <div className="w-6 h-6 rounded-lg bg-[#1A1207]/15 border border-[#1A1207]/20 flex items-center justify-center text-[#1A1207] shrink-0 group-hover:translate-x-1 transition-transform duration-200 shadow-xs">
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
