"use client";

import React, { useState } from "react";

export function MeemstonexFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqs = [
    {
      id: 1,
      q: "How long does a custom mandir take?",
      a: "Most custom projects take between 3 to 6 weeks from design sign-off to site delivery, depending on size and intricate carving complexity.",
    },
    {
      id: 2,
      q: "Do you handle installation across India?",
      a: "Yes, our dedicated master installation craftsmen deliver and assemble turnkey marble structures in 100+ cities across India as well as overseas.",
    },
    {
      id: 3,
      q: "Can I see the design before production?",
      a: "Yes. Production only begins after you review and approve 2D/3D layouts, exact dimensions, and marble samples.",
    },
    {
      id: 4,
      q: "What if my dimensions are unusual?",
      a: "Customization is our core specialization. We engineer structural marble assemblies for tight alcoves, corner walls, or high-ceiling duplexes.",
    },
    {
      id: 5,
      q: "Is the price fixed after approval?",
      a: "Yes. Your project estimate is 100% fixed upon design sign-off, with zero hidden charges.",
    },
  ];

  return (
    <section id="faq" className="py-14 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-[#996C05] text-xs font-bold uppercase tracking-widest block mb-1.5">
          Direct Answers
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#0B0A08]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="glass-card rounded-2xl border border-[#B8860B]/20 overflow-hidden">
              <button
                className="w-full p-4 sm:p-5 text-left font-serif font-bold text-sm sm:text-base text-[#0B0A08] flex justify-between items-center gap-3 cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <span>{faq.q}</span>
                <i
                  className={`fa-solid fa-chevron-down text-xs text-[#996C05] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-[#2C2922] leading-relaxed border-t border-[#B8860B]/10 pt-2.5 font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
