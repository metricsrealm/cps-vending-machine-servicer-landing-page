import { motion } from "motion/react";

export default function Features() {
  const features = [
    {
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 3h15v13H1z" />
          <path d="M16 8h4l3 3v5h-7" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: "Guaranteed product delivery",
      desc: "Infrared sensors confirm the item dropped — if it doesn't, the machine re-vends or refunds automatically.",
    },
    {
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      ),
      title: "Smart inventory management",
      desc: "Telemetry tracks sales in real time, so restocks happen before you run out of the popular stuff.",
    },
    {
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9z" />
        </svg>
      ),
      title: "Energy efficient",
      desc: "ENERGY STAR machines keep cold drinks cold while sipping power — kind to your utility bill.",
    },
  ];

  const partners = [
    "Cantaloupe",
    "U-Select-It",
    "Apple Pay",
    "Google Pay",
    "Visa · Mastercard",
  ];

  return (
    <section 
      className="text-white py-[78px]" 
      id="technology-section"
      style={{
        background: "linear-gradient(160deg, #0B2A5B 0%, #0A2148 100%)"
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[46px]">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-[#FFB877]">
            Reliable technology
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-white mt-3 mb-3 leading-[1.15] tracking-[-0.01em]">
            State-of-the-art machines that just work
          </h2>
          <p className="font-sans text-[#B9C6DA] text-[16.5px] leading-relaxed">
            A vending machine is only as good as its ability to deliver your product. Ours are built to solve the everyday frustrations.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] max-w-[1000px] mx-auto">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.05] border border-white/[0.10] rounded-[14px] p-6 text-left"
            >
              <div className="w-[46px] h-[46px] rounded-[11px] bg-orange/16 text-orange flex items-center justify-center mb-3.5">
                {feat.svg}
              </div>
              <h3 className="font-display font-bold text-[17px] text-white mb-[7px]">
                {feat.title}
              </h3>
              <p className="font-sans text-[#C3CFE0] text-[14px] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Partners Footer Area */}
        <div className="border-t border-white/[0.10] pt-[30px] mt-[44px] text-center max-w-4xl mx-auto flex flex-wrap gap-3.5 justify-center">
          <span className="w-full text-center text-[12px] tracking-[0.12em] uppercase text-[#8FA3C0] font-semibold mb-1">
            Powered by trusted partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="font-display font-bold text-[13.5px] text-[#DCE5F1] bg-white/[0.06] border border-white/[0.12] px-4 py-2 rounded-[8px] cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
