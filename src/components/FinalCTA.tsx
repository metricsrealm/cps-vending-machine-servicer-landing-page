import { trackPhoneClick } from "../lib/gtm";

export default function FinalCTA() {
  const bulletClaims = [
    "Free quote",
    "No obligation",
    "Serving statewide Utah",
  ];

  return (
    <section 
      className="relative text-white py-[78px] text-center" 
      id="home-final-cta-section"
      style={{
        background: `linear-gradient(180deg, rgba(8,26,55,.90), rgba(8,26,55,.94)), url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6" id="home-final-cta-container">
        <div className="max-w-3xl mx-auto" id="home-final-cta-content-wrap">
          {/* Title */}
          <h2 className="font-display font-extrabold text-[28px] sm:text-[34px] md:text-[40px] text-white leading-tight mb-3.5" id="home-final-cta-heading">
            Upgrade Your Utah Workplace Vending Today
          </h2>
          {/* Subtitle */}
          <p className="font-sans text-[#CBD6E6] text-[17px] max-w-[560px] mx-auto leading-relaxed mb-[30px]" id="home-final-cta-description">
            Get a free, no-obligation quote from Utah's premier vending machine supplier. We handle all installation, stocking, and maintenance so you can focus on your business.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap gap-4 justify-center" id="home-final-cta-buttons-row">
            <a 
              href="#quote" 
              className="bg-orange hover:bg-orange-dark text-white font-display font-bold text-[17px] px-8 py-[17px] rounded-[12px] shadow-lg shadow-orange/25 hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
              id="home-final-cta-quote-btn"
            >
              Get My Free Quote →
            </a>
            <a 
              href="tel:+13852084074" 
              onClick={() => trackPhoneClick("FinalCTA", "(385) 208-4074")}
              className="inline-flex items-center justify-center gap-2 border border-white/55 hover:border-white text-white hover:bg-white/10 font-display font-bold text-[17px] px-8 py-[17px] rounded-[12px] transition-all hover:scale-[1.01] active:scale-[0.99] focus:outline-none"
              id="home-final-cta-phone-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange" id="home-final-cta-phone-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span id="home-final-cta-phone-text">(385) 208-4074</span>
            </a>
          </div>

          {/* Bullet claims */}
          <div className="flex flex-wrap gap-[26px] justify-center mt-[26px] text-[13px] font-semibold tracking-[0.03em] text-[#9FB1CB]" id="home-final-cta-claims-row">
            {bulletClaims.map((claim, idx) => (
              <span key={idx} className="flex items-center gap-[7px]" id={`home-final-cta-claim-${idx + 1}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange" id={`home-final-cta-claim-icon-${idx + 1}`}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span id={`home-final-cta-claim-text-${idx + 1}`}>{claim}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
