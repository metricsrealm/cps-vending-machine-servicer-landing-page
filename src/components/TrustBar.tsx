import { Check, Star } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      type: "google",
      text: "Rated on Google",
    },
    {
      type: "tick",
      text: "Locally owned",
    },
    {
      type: "tick",
      text: "Full-service management",
    },
    {
      type: "tick",
      text: "Serving statewide Utah",
    },
  ];

  return (
    <section className="bg-white border-b border-line py-[18px]" id="home-trustbar-section">
      <div className="max-w-[1200px] mx-auto px-6" id="home-trustbar-container">
        <div className="flex flex-wrap items-center justify-center gap-0" id="home-trustbar-list">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center gap-[9px] px-[30px] py-[6px] text-navy font-semibold text-[14.5px] leading-none w-full sm:w-1/2 md:w-auto ${
                index !== trustItems.length - 1 ? "md:border-r md:border-line" : ""
              }`}
              id={`home-trustbar-item-${index + 1}`}
            >
              {item.type === "google" ? (
                <div className="flex items-center gap-[9px]" id={`home-trustbar-content-${index + 1}`}>
                  <span className="text-star tracking-[1px] text-[14.5px] leading-none font-bold" id={`home-trustbar-stars-${index + 1}`}>★★★★★</span>
                  <span className="font-sans text-navy" id={`home-trustbar-text-${index + 1}`}>{item.text}</span>
                </div>
              ) : (
                <div className="flex items-center gap-[9px]" id={`home-trustbar-content-${index + 1}`}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-tick flex-shrink-0" id={`home-trustbar-icon-${index + 1}`}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="font-sans text-navy" id={`home-trustbar-text-${index + 1}`}>{item.text}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
