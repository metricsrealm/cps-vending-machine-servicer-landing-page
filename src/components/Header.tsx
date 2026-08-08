import { Phone } from "lucide-react";
import { useState } from "react";
import { trackPhoneClick } from "../lib/gtm";

export default function Header() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B2A5B]/96 backdrop-blur-[8px] border-b border-white/8" id="site-header">
      <div className="max-w-7xl mx-auto px-6 h-[88px] flex items-center justify-between">
        {/* Logo Section */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-orange/50 rounded-lg"
          aria-label="CPS Markets and Vending - Home"
        >
          {!logoFailed ? (
            <img 
              src="https://cpsmarketsandvending.com/wp-content/uploads/2025/07/new-logo.png" 
              alt="CPS Markets and Vending logo" 
              width="200"
              height="52"
              fetchPriority="high"
              decoding="async"
              className="h-[52px] w-auto object-contain brightness-0 invert transition-all duration-200"
              referrerPolicy="no-referrer"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-white text-[18px] tracking-[0.02em] leading-[1.05]">
                CPS
              </span>
              <span className="text-[10px] font-semibold tracking-[0.18em] text-[#9fb3d1] uppercase leading-none mt-1">
                MARKETS & VENDING
              </span>
            </div>
          )}
        </a>

        {/* Action Items */}
        <div className="flex items-center gap-[18px]">
          {/* Phone Link */}
          <a 
            href="tel:+13852084074" 
            onClick={() => trackPhoneClick("Header", "(385) 208-4074")}
            className="flex items-center gap-2 text-white hover:text-orange transition-colors group focus:outline-none focus:ring-2 focus:ring-orange/50 rounded-lg p-1"
            aria-label="Call CPS Markets and Vending at (385) 208-4074"
          >
            <Phone className="h-[20px] w-[20px] text-orange flex-shrink-0" aria-hidden="true" />
            <div className="flex flex-col text-left">
              <span className="text-[12px] font-medium text-[#9fb3d1] leading-none">Call Local</span>
              <span className="font-display font-bold text-[16px] tracking-wide mt-0.5">(385) 208-4074</span>
            </div>
          </a>

          {/* CTA Button */}
          <a 
            href="#quote" 
            className="hidden sm:inline-flex items-center justify-center font-display font-bold text-[16px] text-white bg-orange hover:bg-orange-dark px-[26px] py-[15px] rounded-[12px] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-orange/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-navy"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
