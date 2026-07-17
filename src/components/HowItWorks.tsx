export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Discuss Your Workplace Needs",
      desc: "Contact us by phone, email, or our free quote form to tell us about your Utah facility size and employee snack preferences.",
      isHighlight: false,
    },
    {
      num: 2,
      title: "Custom Machine Selection",
      desc: "We design a tailored breakroom solution with snack, cold drink, and healthy vending machine mixes suited specifically for your team.",
      isHighlight: true,
    },
    {
      num: 3,
      title: "Free Installation & Care",
      desc: "We deliver and install your machines at zero cost, then manage all restocking, cleaning, and maintenance on a regular schedule.",
      isHighlight: false,
    },
  ];

  return (
    <section className="bg-white py-[78px]" id="how-it-works-section">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[46px]">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange">
            3-Step Office Vending Setup
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 mb-3 leading-[1.15] tracking-[-0.01em]">
            How Our Vending Service Works
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed">
            From our free initial site assessment to seamless machine placement and daily stocking, we make workplace vending simple.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="relative max-w-[960px] mx-auto">
          {/* Connector Line (Wide Screen Only) */}
          <div 
            className="absolute top-[28px] left-[16.6%] right-[16.6%] h-[2px] bg-[#E4E8EF] z-1 hidden md:block" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="text-center"
              >
                {/* Number Bubble */}
                <div 
                  className={`w-[56px] h-[56px] rounded-full font-display font-extrabold text-[22px] flex items-center justify-center mx-auto mb-[18px] relative z-10 transition-all duration-300 ${
                    step.isHighlight 
                      ? "bg-orange text-white shadow-[0_6px_16px_rgba(240,129,46,0.30)]" 
                      : "bg-navy text-white shadow-[0_6px_16px_rgba(11,42,91,0.25)]"
                  }`}
                >
                  {step.num}
                </div>

                {/* Details */}
                <h3 className="font-display font-bold text-[18px] text-navy mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-[#5B6472] text-[14.5px] leading-relaxed max-w-[260px] mx-auto">
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
