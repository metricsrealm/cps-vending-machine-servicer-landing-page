export default function RepairHowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Tell Us About Your Machine",
      desc: "Explain your vending machine issue or service need by phone or online request form.",
      isHighlight: false,
    },
    {
      num: 2,
      title: "Service & Troubleshooting",
      desc: "CPS assesses the service need and provides appropriate support for your equipment.",
      isHighlight: true,
    },
    {
      num: 3,
      title: "Repair & Ongoing Maintenance",
      desc: "CPS provides repair and maintenance intended to keep your vending machine operating reliably.",
      isHighlight: false,
    },
  ];

  return (
    <section className="bg-tint py-[78px]" id="repair-how-it-works-section">
      <div className="max-w-[1200px] mx-auto px-6" id="repair-how-it-works-container">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[46px]" id="repair-how-it-works-header">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange" id="repair-how-it-works-tagline">
            3-Step Service Process
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 mb-3 leading-[1.15] tracking-[-0.01em]" id="repair-how-it-works-heading">
            How Our Vending Repair &amp; Maintenance Service Works
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed" id="repair-how-it-works-description">
            Getting professional repair and maintenance for your workplace vending machines is straightforward and hassle-free.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="relative max-w-[960px] mx-auto" id="repair-how-it-works-flow-wrap">
          {/* Connector Line (Wide Screen Only) */}
          <div 
            id="repair-how-it-works-connector-line"
            className="absolute top-[28px] left-[16.6%] right-[16.6%] h-[2px] bg-[#E4E8EF] z-1 hidden md:block" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10" id="repair-how-it-works-steps-grid">
            {steps.map((step, idx) => (
              <div
                key={idx}
                id={`repair-how-it-works-step-${idx + 1}`}
                className="text-center"
              >
                {/* Number Bubble */}
                <div 
                  id={`repair-how-it-works-bubble-${idx + 1}`}
                  className={`w-[56px] h-[56px] rounded-full font-display font-extrabold text-[22px] flex items-center justify-center mx-auto mb-[18px] relative z-10 transition-all duration-300 ${
                    step.isHighlight 
                      ? "bg-orange text-white shadow-[0_6px_16px_rgba(240,129,46,0.30)]" 
                      : "bg-navy text-white shadow-[0_6px_16px_rgba(11,42,91,0.25)]"
                  }`}
                >
                  {step.num}
                </div>

                {/* Details */}
                <h3 className="font-display font-bold text-[18px] text-navy mb-2" id={`repair-how-it-works-title-${idx + 1}`}>
                  {step.title}
                </h3>
                <p className="font-sans text-[#5B6472] text-[14.5px] leading-relaxed max-w-[260px] mx-auto" id={`repair-how-it-works-desc-${idx + 1}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
