import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Reviews() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const reviews = [
    {
      initial: "CB",
      color: "#EA4335",
      name: "Chad Boyer",
      subtitle: "Facilities Manager",
      stars: 5,
      ago: "9 months ago",
      text: "As a Facilities Manager, I have been using CPS for 7 years now. They have always taken care of my buildings, even during COVID when it was a crazy time. They are fast to respond to our requests and super easy to work with.",
      tag: "Facilities Management",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVpzseB4txmcupY9PvMZYqQ3YZJo8FpiCTb2KYyiAs9OMeZfo1K=s120-c-rp-mo-br100",
    },
    {
      initial: "PE",
      color: "#1A73E8",
      name: "Panda Eagle",
      subtitle: "Verified Client · 11 reviews",
      stars: 5,
      ago: "9 months ago",
      text: "We have had Cps Markets and Vending in our breakroom for almost 20 years. They are very innovative. Always striving to bring us better products and the freshest food. We appreciate everything they do and how they take care of all our employees here. Thanks so much for helping us thru our slow times and with our busy times. We ran into an issue during Covid and they stood by us the whole time and offered alot of recommendations so we could get our employees to come back into the office.",
      tag: "Vending & Food Service",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW04kdCo1TijtAhXMj7kyHPUeG8HIOL0AAy00SqwCjy0ZpW_is=s120-c-rp-mo-ba12-br100",
    },
    {
      initial: "AL",
      color: "#0F9D58",
      name: "aliz",
      subtitle: "Verified Customer",
      stars: 5,
      ago: "9 months ago",
      text: "Utah’s data-driven vending that just works. Full-service vending & micro-markets—fast, local, reliable. Since 2003: install, refill, repair—handled.",
      tag: "Micro Markets",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocL-9NIjrLRmWeNdqxmf7CtYAwlA3RSMPeKvbiT9cjZ4X4cV2A=s120-c-rp-mo-br100",
    },
    {
      initial: "IJ",
      color: "#9B51E0",
      name: "Israa Jamal",
      subtitle: "Office Administrator · 4 reviews",
      stars: 5,
      ago: "9 months ago",
      text: "Great spot with plenty of vending options! Everything was easy to use, well-stocked, and the customer service was excellent. Very convenient and reliable.",
      tag: "Breakroom Snacks",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWUw1Q58dsU6BCkU7AuokJ1Z9OQ7wO5sD-RiR2GafPnSpB0xCSG=s120-c-rp-mo-br100",
    },
    {
      initial: "CA",
      color: "#F4B400",
      name: "caesar ali",
      subtitle: "Business Owner · 6 reviews",
      stars: 5,
      ago: "9 months ago",
      text: "Great service!",
      tag: "Customer Service",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUlxh4MWDWh05YDgo_q-O7lFK6vv5bYgJfMFWHHHvS2hS-sKMw0=s120-c-rp-mo-br100",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const targetIdx = (startIndex + i) % reviews.length;
      visible.push({ ...reviews[targetIdx], originalIndex: targetIdx });
    }
    return visible;
  };

  return (
    <section className="bg-tint py-12 md:py-16" id="reviews-section">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Header and Rating Flex Group */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 text-left max-w-5xl mx-auto border-b border-line/60 pb-8">
          <div className="max-w-[620px]">
            <h2 className="font-display font-bold text-[28px] sm:text-[34px] text-navy mb-2.5 leading-tight tracking-[-0.01em]">
              What our customers say
            </h2>
            <p className="font-sans text-[#5B6472] text-[15px] sm:text-[16px] leading-relaxed">
              Real, verified 5-star reviews from Google. We are proud to serve Utah businesses with premier vending, micro-markets, and office coffee services.
            </p>
          </div>
          
          {/* Tighter Google Score Card */}
          <div className="flex-shrink-0 self-start md:self-center">
            <div className="inline-flex items-center gap-[14px] bg-white border border-line rounded-[14px] px-5 py-3.5 shadow-sm">
              <div className="font-display font-extrabold text-[36px] sm:text-[40px] text-navy leading-none tracking-tight">
                5.0
              </div>
              <div className="text-left border-l border-line pl-3.5 py-0.5 flex flex-col justify-center">
                {/* Gold Stars */}
                <div className="flex gap-0.5 text-[#F4B400] text-[15px] leading-none mb-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div className="text-[11.5px] font-sans font-medium text-[#5B6472] leading-tight">
                  Based on <span className="font-bold text-navy">5 Google reviews</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {/* Google G Icon */}
                  <svg width="10" height="10" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.2-4.8 3.2-7.8z"/>
                    <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z"/>
                    <path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.3a11 11 0 0 0 0 9.8z"/>
                    <path fill="#EA4335" d="M12 5.5c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.4L6 10.2c.9-2.6 3.2-4.7 6-4.7z"/>
                  </svg>
                  <span className="text-[10px] font-bold text-emerald-600 tracking-wide uppercase">100% Satisfied</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontally-Aligned Balanced Grid Layout with Slider Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {getVisibleReviews().map((rev) => {
            const hasFailed = imgErrors[rev.originalIndex];
            return (
              <motion.div
                key={rev.originalIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-line rounded-[16px] p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between w-full h-[290px]"
              >
                <div className="flex-1 flex flex-col min-h-0">
                  {/* Reviewer Header */}
                  <div className="flex items-center gap-[12px] mb-3 flex-shrink-0">
                    {!hasFailed && rev.avatar ? (
                      <img 
                        src={rev.avatar} 
                        alt={rev.name}
                        className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0 border border-slate-100 shadow-sm"
                        referrerPolicy="no-referrer"
                        onError={() => setImgErrors(prev => ({ ...prev, [rev.originalIndex]: true }))}
                      />
                    ) : (
                      <div 
                        className="w-[40px] h-[40px] rounded-full text-white font-display font-bold text-[13px] flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: rev.color }}
                      >
                        {rev.initial}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-sans font-bold text-[14px] text-navy leading-snug truncate">
                        {rev.name}
                      </h4>
                      <span className="block text-[11px] text-[#5B6472] font-medium leading-none mt-0.5 truncate font-sans">
                        {rev.subtitle}
                      </span>
                    </div>
                    {/* Google G logo on top right */}
                    <svg className="flex-shrink-0 opacity-70 ml-2" width="14" height="14" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.2-4.8 3.2-7.8z"/>
                      <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z"/>
                      <path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.3a11 11 0 0 0 0 9.8z"/>
                      <path fill="#EA4335" d="M12 5.5c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.4L6 10.2c.9-2.6 3.2-4.7 6-4.7z"/>
                    </svg>
                  </div>

                  {/* Stars and Time ago row */}
                  <div className="flex items-center gap-2 mb-2.5 flex-shrink-0">
                    <div className="flex text-[#F4B400] text-[12px] tracking-[0.5px]">
                      {"★".repeat(rev.stars)}
                    </div>
                    <span className="text-[11px] text-[#7E8896] font-sans">
                      {rev.ago}
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="overflow-y-auto flex-1 min-h-0 pr-1.5 scrollbar-thin">
                    <p className="text-[13px] sm:text-[13.5px] text-navy/85 leading-relaxed italic font-sans mb-2">
                      "{rev.text}"
                    </p>
                  </div>
                </div>

                {/* Card Footer Tag and Google verify icon */}
                <div className="flex items-center justify-between border-t border-line/50 pt-3 mt-3 flex-shrink-0">
                  <span className="bg-[#FFF0EA] text-[#E05A10] font-sans font-extrabold text-[10px] px-2.5 py-1 rounded-[6px] uppercase tracking-wider">
                    {rev.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10.5px] text-[#7E8896] font-sans">
                    <svg width="10" height="10" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.2-4.8 3.2-7.8z"/>
                      <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z"/>
                      <path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.3a11 11 0 0 0 0 9.8z"/>
                      <path fill="#EA4335" d="M12 5.5c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.4L6 10.2c.9-2.6 3.2-4.7 6-4.7z"/>
                    </svg>
                    <span>Verified</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Slider Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-line bg-white text-navy flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E05A10]/20 cursor-pointer"
            aria-label="Previous reviews"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  startIndex === idx ? "w-6 bg-[#E05A10]" : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-line bg-white text-navy flex items-center justify-center hover:bg-slate-50 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E05A10]/20 cursor-pointer"
            aria-label="Next reviews"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* See all reviews Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://maps.app.goo.gl/vxbPTai7WQXBg7Et6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans font-bold text-[13.5px] text-navy border border-line bg-white hover:bg-slate-50 px-6 py-2.5 rounded-full shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-orange/30 hover:shadow-md hover:scale-[1.01]"
          >
            {/* Google G Logo SVG */}
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.2-4.8 3.2-7.8z"/>
              <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z"/>
              <path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.3a11 11 0 0 0 0 9.8z"/>
              <path fill="#EA4335" d="M12 5.5c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.4L6 10.2c.9-2.6 3.2-4.7 6-4.7z"/>
            </svg>
            <span>See all reviews on Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
