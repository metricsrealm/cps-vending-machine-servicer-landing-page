import { motion } from "motion/react";

export default function Advantages() {
  const cards = [
    {
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 21V9h6v12" />
        </svg>
      ),
      title: "We handle everything",
      desc: "Refilling, restocking and maintenance are on us. You supply the space; we manage the machines.",
    },
    {
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
      title: "Pay your way",
      desc: "Cashless taps with Apple Pay, Google Pay and cards — plus reliable bill and coin acceptance for everyone else.",
    },
    {
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-3-3-3 3" />
        </svg>
      ),
      title: "Always stocked",
      desc: "Real-time inventory tracking keeps your favorites available and minimizes empty-machine moments.",
    },
    {
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "Local Utah team",
      desc: "Proactive maintenance and friendly support from a local team serving Salt Lake City and beyond.",
    },
  ];

  return (
    <section className="bg-white py-[78px]" id="why-cps-section">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[46px]">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange">
            Why CPS
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 mb-3 leading-[1.15] tracking-[-0.01em]">
            A breakroom that runs itself
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed">
            We handle the machines end-to-end, so your team gets fresh snacks and cold drinks without the hassle — and you get none of the upkeep.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] max-w-[960px] mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-line rounded-[16px] p-[28px] shadow-sm hover:shadow-md transition-all duration-300 text-left"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
            >
              {/* Icon Wrapper */}
              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#FFF3E9] text-orange flex items-center justify-center mb-4">
                {card.svg}
              </div>

              {/* Text Details */}
              <h3 className="font-display font-bold text-[19px] text-navy mb-2 leading-none">
                {card.title}
              </h3>
              <p className="font-sans text-[#5B6472] text-[15px] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
