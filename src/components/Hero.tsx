import { Check, Phone } from "lucide-react";
import { motion } from "motion/react";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  const ticks = [
    "Refill, restock & maintenance handled",
    "Apple Pay, Google Pay & cards",
    "Real-time inventory tracking",
    "Guaranteed product delivery",
  ];

  return (
    <section 
      className="relative overflow-hidden bg-[#0B2A5B]" 
      id="hero-section"
      style={{
        background: `linear-gradient(90deg, rgba(8,26,55,.94) 0%, rgba(8,26,55,.82) 45%, rgba(8,26,55,.55) 100%), url('https://cpsmarketsandvending.com/wp-content/uploads/2025/09/IMG_4257.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[48px] items-center py-20 md:py-[84px] lg:py-[96px] pb-24 md:pb-[104px]">
          {/* Left column: Text Content */}
          <motion.div 
            className="lg:col-span-7 text-white text-left max-w-[560px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/16 px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold tracking-wide mb-[22px]">
              <span className="text-star tracking-[1px]">★★★★★</span>
              <span>5.0/5 Rated on Google &nbsp;·&nbsp; Serving Utah</span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-extrabold text-[34px] sm:text-[40px] md:text-[48px] lg:text-[52px] text-white tracking-tight leading-[1.15] mb-[18px]">
              Full-Service Vending Machines for Your <span className="text-orange">Utah Workplace</span>
            </h1>

            {/* Subheading */}
            <p className="text-[18px] text-[#D5DEEC] font-normal leading-relaxed mb-[26px] max-w-[500px]">
              We stock, service and maintain everything — cashless taps and reliable cash, always ready. You just enjoy the breakroom.
            </p>

            {/* Core USP Ticks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[22px] gap-y-3 mb-[30px]">
              {ticks.map((tick, idx) => (
                <div key={idx} className="flex items-start gap-[9px] text-[14.5px] font-medium text-[#EAF0F8]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#4ADE80] mt-[2px] flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{tick}</span>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#quote" 
                className="bg-orange hover:bg-orange-dark text-white font-display font-bold text-[17px] px-8 py-[17px] rounded-[12px] shadow-lg shadow-orange/32 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Get a Free Quote →
              </a>
              <span className="text-[#B9C6DA] text-[14px] flex items-center gap-2">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>or call </span>
                <a href="tel:+13852084074" className="text-white font-display font-bold hover:text-orange underline transition-colors">
                  (385) 208-4074
                </a>
              </span>
            </div>
          </motion.div>

          {/* Right column: Interactive Quote Form */}
          <motion.div 
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
