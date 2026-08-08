import { trackPhoneClick } from "../lib/gtm";

export default function MobileCallBar() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-line px-4 py-3 flex md:hidden gap-3 shadow-[0_-6px_20px_rgba(8,26,55,0.12)]"
      id="mobile-call-bar"
    >
      <a 
        href="tel:+13852084074" 
        onClick={() => trackPhoneClick("MobileCallBar", "(385) 208-4074")}
        className="flex-1 inline-flex items-center justify-center gap-2 font-display font-extrabold text-white bg-navy active:bg-navy-light py-[12.5px] px-4 rounded-xl text-[14.5px] transition-colors focus:outline-none"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call Now
      </a>
      <a 
        href="#quote" 
        className="flex-1 inline-flex items-center justify-center gap-1.5 font-display font-extrabold text-white bg-orange active:bg-orange-dark py-[12.5px] px-4 rounded-xl text-[14.5px] transition-colors focus:outline-none"
      >
        <span>Get a Quote</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  );
}
