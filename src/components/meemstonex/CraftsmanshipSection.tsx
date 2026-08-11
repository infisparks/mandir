"use client";

import React from "react";

export function CraftsmanshipSection() {
  return (
    <section id="gallery" className="py-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-[#996C05] text-xs font-bold uppercase tracking-widest block mb-1.5">
          Proven Authority
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0A08]">
          Proven Craftsmanship Across India
        </h2>
        <p className="text-[#2C2922] text-xs sm:text-base mt-2 font-medium">
          28+ years &amp; three generations of stone craftsmanship across 100+ cities.
        </p>
      </div>

      {/* Social Proof Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
        <div className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-[#B8860B]/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <span className="font-serif text-2xl sm:text-4xl font-black gold-gradient-text block">28+</span>
          <span className="text-[11px] sm:text-xs text-[#2C2922] font-bold mt-1 block">Years Heritage</span>
        </div>
        <div className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-[#B8860B]/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <span className="font-serif text-2xl sm:text-4xl font-black gold-gradient-text block">3</span>
          <span className="text-[11px] sm:text-xs text-[#2C2922] font-bold mt-1 block">Generations</span>
        </div>
        <div className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-[#B8860B]/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <span className="font-serif text-2xl sm:text-4xl font-black gold-gradient-text block">100+</span>
          <span className="text-[11px] sm:text-xs text-[#2C2922] font-bold mt-1 block">Cities Completed</span>
        </div>
        <div className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-[#B8860B]/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <span className="font-serif text-2xl sm:text-4xl font-black gold-gradient-text block">₹1 Lakh+</span>
          <span className="text-[11px] sm:text-xs text-[#2C2922] font-bold mt-1 block">Custom Scope</span>
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card rounded-2xl overflow-hidden border border-[#B8860B]/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group">
          <div className="relative aspect-[4/3] bg-[#12110E] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Home Mandir Project"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-2.5 left-2.5 bg-[#0B0A08]/80 text-[#D8BC5F] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#B8860B]/30">
              📍 Mumbai, MH
            </span>
          </div>
          <div className="p-4 space-y-1">
            <h3 className="font-serif font-bold text-base text-[#0B0A08]">White Makrana Home Mandir</h3>
            <p className="text-xs text-[#423E34] line-clamp-2">
              Hand-carved white marble structure with floral inlay backdrop and ambient illumination.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden border border-[#B8860B]/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group">
          <div className="relative aspect-[4/3] bg-[#12110E] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
              alt="Pooja Room Suite"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-2.5 left-2.5 bg-[#0B0A08]/80 text-[#D8BC5F] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#B8860B]/30">
              📍 Delhi NCR
            </span>
          </div>
          <div className="p-4 space-y-1">
            <h3 className="font-serif font-bold text-base text-[#0B0A08]">Italian Onyx Pooja Wall Panel</h3>
            <p className="text-xs text-[#423E34] line-clamp-2">
              Backlit translucent stone wall panels with gold inlay for luxury duplexes.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden border border-[#B8860B]/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group">
          <div className="relative aspect-[4/3] bg-[#12110E] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
              alt="Sacred Architecture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-2.5 left-2.5 bg-[#0B0A08]/80 text-[#D8BC5F] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#B8860B]/30">
              📍 Hyderabad, TS
            </span>
          </div>
          <div className="p-4 space-y-1">
            <h3 className="font-serif font-bold text-base text-[#0B0A08]">Grand Marble Temple Pavilion</h3>
            <p className="text-xs text-[#423E34] line-clamp-2">
              Multi-pillar sacred shrine with carved dome (Shikhar) and marble floor detailing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
