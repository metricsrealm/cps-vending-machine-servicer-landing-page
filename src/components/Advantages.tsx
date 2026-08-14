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
      title: "Full-Service Vending Management",
      desc: "We handle everything: free installation, daily restocking, and proactive maintenance. You provide the space; our local team manages your commercial vending machines.",
    },
    {
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
      title: "Modern Cashless Payments",
      desc: "All our office vending machines support contactless payments—including Apple Pay, Google Pay, credit cards, and debit cards, plus cash and coins.",
    },
    {
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-3-3-3 3" />
        </svg>
      ),
      title: "Smart Inventory & Restocking",
      desc: "We use advanced real-time telemetry to monitor inventory 24/7, restocking popular snack and beverage options before they ever run out.",
    },
    {
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "Trusted Local Utah Service",
      desc: "Enjoy rapid response times and expert support from our local team, proudly serving businesses across Salt Lake City, Provo, Ogden, and beyond.",
    },
  ];

  return (
    <section className="bg-white py-[78px]" id="home-advantages-section">
      <div className="max-w-[1200px] mx-auto px-6" id="home-advantages-container">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[46px]" id="home-advantages-header">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange" id="home-advantages-tagline">
            Utah's Vending Experts
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 mb-3 leading-[1.15] tracking-[-0.01em]" id="home-advantages-heading">
            Professional Vending Machine Services for Utah Businesses
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed" id="home-advantages-description">
            We provide comprehensive, worry-free vending machine supplier services. From free machine placement to modern restocking and rapid repairs, we do it all.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] max-w-[960px] mx-auto" id="home-advantages-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-line rounded-[16px] p-[28px] shadow-sm hover:shadow-md transition-all duration-300 text-left"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              id={`home-advantage-card-${idx + 1}`}
            >
              {/* Icon Wrapper */}
              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#FFF3E9] text-orange flex items-center justify-center mb-4" id={`home-advantage-icon-${idx + 1}`}>
                {card.svg}
              </div>

              {/* Text Details */}
              <h3 className="font-display font-bold text-[19px] text-navy mb-2 leading-none" id={`home-advantage-title-${idx + 1}`}>
                {card.title}
              </h3>
              <p className="font-sans text-[#5B6472] text-[15px] leading-relaxed" id={`home-advantage-desc-${idx + 1}`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
