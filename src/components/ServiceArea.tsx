import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function ServiceArea() {
  const cities = [
    "Bountiful",
    "Brigham City",
    "Draper",
    "Eagle Mountain",
    "Fillmore",
    "Herriman",
    "Lehi",
    "Logan",
    "Murray",
    "Ogden",
    "Orem",
    "Provo",
    "Riverton",
    "Salt Lake City",
    "Sandy",
    "Saratoga Springs",
    "South Jordan",
    "Taylorsville",
    "West Jordan",
    "West Valley City",
  ];

  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    // Auto-clear notification after 4 seconds
    setTimeout(() => {
      setSelectedCity((prev) => (prev === city ? null : prev));
    }, 4000);
  };

  return (
    <section className="bg-white py-[78px]" id="home-service-area-section">
      <div className="max-w-[1200px] mx-auto px-6 text-center" id="home-service-area-container">
        {/* Pin Icon */}
        <div className="w-[52px] h-[52px] rounded-full bg-[#FFF3E9] text-orange flex items-center justify-center mx-auto mb-4" id="home-service-area-icon-wrap">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="home-service-area-pin-icon">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        {/* Header */}
        <div className="max-w-[680px] mx-auto mb-0 text-center" id="home-service-area-header">
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 mb-3 leading-[1.15] tracking-[-0.01em]" id="home-service-area-heading">
            Local Vending Machine Company Serving Utah
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed" id="home-service-area-description">
            We provide reliable commercial vending machine services across the Wasatch Front and statewide—serving Salt Lake City, West Valley City, Sandy, Draper, Murray, South Jordan, Lehi, Provo, Orem, Ogden, and more.
          </p>
        </div>

        {/* City Pills Grid */}
        <div className="flex flex-wrap gap-[10px] justify-center max-w-[820px] mx-auto mt-[26px]" id="home-service-area-cities-grid">
          {cities.map((city, idx) => {
            const citySlug = city.toLowerCase().replace(/\s+/g, '-');
            return (
              <button
                key={idx}
                onClick={() => handleCityClick(city)}
                id={`home-service-city-btn-${citySlug}`}
                className={`font-sans font-semibold text-[14px] px-[18px] py-[9px] rounded-full border transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange/30 ${
                  selectedCity === city
                    ? "bg-orange text-white border-orange shadow-sm"
                    : "bg-white border-line text-navy hover:border-orange hover:text-orange"
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>

        {/* Framer Motion City Alert */}
        <div className="h-10 mt-4 flex justify-center items-center" id="home-service-area-alert-wrap">
          <AnimatePresence mode="wait">
            {selectedCity && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                id="home-service-area-city-alert"
                className="inline-flex items-center gap-2 bg-navy text-white text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg border border-white/10"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" id="home-service-alert-indicator" />
                <span id="home-service-alert-message">Yes, our delivery trucks serve <span className="font-bold text-orange" id="home-service-alert-city-name">{selectedCity}</span> daily!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Bottom */}
        <div className="area-call mt-[34px]" id="home-service-area-bottom-cta">
          <p className="font-sans font-semibold text-[#5B6472] text-[16px] mb-3.5" id="home-service-area-bottom-prompt">
            Outside these areas? We serve businesses statewide.
          </p>
          <a
            href="tel:+13852084074"
            id="home-service-area-phone-btn"
            className="inline-flex items-center justify-center gap-2.5 font-display font-bold text-[17px] text-navy hover:border-navy border border-line bg-white px-8 py-[17px] rounded-[12px] hover:scale-[1.01] active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-orange/40"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange" id="home-service-area-phone-icon">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span id="home-service-area-phone-text">Call and ask us: (385) 208-4074</span>
          </a>
        </div>
      </div>
    </section>
  );
}
