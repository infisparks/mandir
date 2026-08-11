"use client";

import React from "react";

interface MeemstonexStickyMobileCTAProps {
  onBookClick: () => void;
}

export function MeemstonexStickyMobileCTA({ onBookClick }: MeemstonexStickyMobileCTAProps) {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden max-w-md mx-auto">
      {/* Floating Island Executive Glass Container */}
      <div className="bg-[#0D0B08]/92 backdrop-blur-xl border border-[#D4AF37]/50 rounded-full p-1.5 shadow-[0_15px_45px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.25)] flex items-center">
        {/* Single Full-Width Primary Lead Button */}
        <button
          onClick={onBookClick}
          className="w-full h-12 gold-btn-luxury shimmer-btn text-[#1A1207] px-5 rounded-full font-black shadow-[0_6px_25px_rgba(200,153,39,0.5)] hover:shadow-[0_8px_30px_rgba(200,153,39,0.7)] flex items-center justify-between gap-2 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer group"
        >
          <div className="flex flex-col text-left leading-none py-0.5 min-w-0">
            <span className="text-[9px] uppercase font-black text-[#5C4208] tracking-widest truncate mb-0.5">
              ✦ FREE MANDIR CONSULTATION
            </span>
            <span className="font-extrabold text-sm text-[#1A1207] tracking-tight truncate">
              Discuss My Project
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#1A1207]/15 border border-[#1A1207]/20 flex items-center justify-center text-[#1A1207] shrink-0 group-hover:translate-x-1 transition-transform duration-200 shadow-xs">
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
