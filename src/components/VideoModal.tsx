"use client";

import React from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  author: string;
  embedId?: string;
  onBookClick: () => void;
}

export function VideoModal({ isOpen, onClose, title, author, embedId, onBookClick }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0A08]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-toast-in">
      <div className="bg-[#12110E] border border-[#B8860B]/40 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-[#0B0A08]/80 hover:bg-[#0B0A08] text-[#FFFEFA] hover:text-[#D8BC5F] flex items-center justify-center border border-[#B8860B]/30 transition-colors shadow-lg cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {embedId ? (
            <iframe
              src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="relative aspect-video w-full bg-[#0B0A08] flex items-center justify-center">
              <img
                src="/meemstonex/thumbnail.webp"
                alt={title}
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/meemstonex/thumbnail.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08] via-[#0B0A08]/40 to-transparent flex flex-col items-center justify-center p-4 text-center">
                <div className="w-16 h-16 rounded-full gold-gradient-bg text-[#FFFEFA] flex items-center justify-center shadow-2xl mb-3 animate-pulse cursor-pointer">
                  <i className="fa-solid fa-play text-2xl ml-1"></i>
                </div>
                <p className="text-[#FFFEFA] font-serif font-bold text-lg sm:text-xl drop-shadow">{title}</p>
                <p className="text-[#D8BC5F] text-xs font-bold mt-1">{author} • Craftsmanship Documentary</p>
              </div>
            </div>
          )}
        </div>

        {/* Details & Action */}
        <div className="p-5 space-y-4 text-center">
          <p className="text-[#E5DAC6] text-xs sm:text-sm">
            Experience 3rd generation artisan precision &amp; turnkey marble mandir craftsmanship in action.
          </p>

          <button
            onClick={() => {
              onClose();
              onBookClick();
            }}
            className="w-full gold-gradient-bg shimmer-btn py-3.5 px-4 rounded-xl text-[#FFFEFA] font-extrabold text-sm uppercase tracking-wide flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
          >
            <span>Discuss My Mandir Project</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
