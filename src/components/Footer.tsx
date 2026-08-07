import { useState } from "react";

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="bg-navy-deep text-[#8393A8] pt-[60px] pb-[100px] md:pb-[30px] text-[14.5px]" id="site-footer">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-[40px] text-left">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <a href="#" className="foot-logo mb-4 inline-block focus:outline-none">
              {!logoFailed ? (
                <img 
                  src="https://cpsmarketsandvending.com/wp-content/uploads/2025/07/new-logo.png" 
                  alt="CPS Markets and Vending logo" 
                  className="h-[36px] w-auto object-contain brightness-0 invert transition-all duration-200"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-white text-[18px] tracking-tight leading-none">
                    CPS
                  </span>
                  <span className="text-[9px] font-semibold tracking-[0.18em] text-[#9FB3D1] uppercase leading-none mt-1">
                    MARKETS & VENDING
                  </span>
                </div>
              )}
            </a>
            <p className="font-sans text-[13.5px] text-[#9FB1CB] leading-[1.6] max-w-[320px]">
              Full-service vending for Utah workplaces. We stock, service and maintain your machines so your team always has fresh snacks and cold drinks — with none of the upkeep.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-[14px] tracking-[1px] uppercase text-white mb-5">
              Get in Touch
            </h4>
            <div className="foot-info flex flex-col gap-[14px] font-sans text-[14px]">
              <a 
                href="tel:+13852084074" 
                className="foot-info-item flex gap-2.5 items-start text-[#8393A8] hover:text-white transition-colors duration-150"
                aria-label="Call (385) 208-4074"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange mt-[2px] flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>(385) 208-4074</span>
              </a>
              <a 
                href="mailto:support@cpsmarketsandvending.com" 
                className="foot-info-item flex gap-2.5 items-start text-[#8393A8] hover:text-white transition-colors duration-150"
                aria-label="Email support@cpsmarketsandvending.com"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange mt-[2px] flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="break-all">support@cpsmarketsandvending.com</span>
              </a>
              <div className="foot-info-item flex gap-2.5 items-start">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange mt-[2px] flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Serving Salt Lake City &amp; statewide Utah</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-[14px] tracking-[1px] uppercase text-white mb-5">
              Company
            </h4>
            <ul className="foot-links font-sans flex flex-col gap-3">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-150">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-150">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white transition-colors duration-150">
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom info */}
        <div className="foot-bot border-t border-white/6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12.5px] text-[#607185]">
          <span>© {new Date().getFullYear()} CPS Markets and Vending. All rights reserved.</span>
          <span className="foot-bot-right text-[#8393A8]">Locally owned · Serving Utah</span>
        </div>
      </div>
    </footer>
  );
}
