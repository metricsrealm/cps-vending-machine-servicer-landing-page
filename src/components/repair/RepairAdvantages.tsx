import { Wrench, ShieldCheck, WrenchIcon, Activity } from "lucide-react";

export default function RepairAdvantages() {
  const cards = [
    {
      icon: Wrench,
      title: "Vending Machine Repair",
      desc: "CPS provides repair services to help keep vending machines functional and operating properly.",
    },
    {
      icon: ShieldCheck,
      title: "Proactive Maintenance",
      desc: "CPS provides proactive maintenance designed to minimize downtime and keep machines operating reliably.",
    },
    {
      icon: WrenchIcon,
      title: "Vending Machine Service",
      desc: "CPS provides ongoing service and support for business vending operations.",
    },
    {
      icon: Activity,
      title: "Machine Monitoring & Support",
      desc: "CPS uses telemetry and real-time machine information to monitor operations and identify issues that may require service.",
    },
  ];

  return (
    <section className="bg-tint py-[78px]" id="repair-advantages-section">
      <div className="max-w-[1200px] mx-auto px-6" id="repair-advantages-container">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[48px]" id="repair-advantages-header">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange" id="repair-advantages-tagline">
            Vending Repair &amp; Maintenance
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 mb-3 leading-[1.15] tracking-[-0.01em]" id="repair-advantages-heading">
            Professional Vending Machine Repair &amp; Maintenance
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed" id="repair-advantages-description">
            CPS provides repair and proactive maintenance to help minimize downtime and keep vending machines functional.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="repair-advantages-grid">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                id={`repair-advantage-card-${idx + 1}`}
                className="bg-white border border-line rounded-[16px] p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#FFF3E9] text-orange flex items-center justify-center mb-5 flex-shrink-0" id={`repair-advantage-icon-wrap-${idx + 1}`}>
                  <Icon className="w-6 h-6" id={`repair-advantage-icon-${idx + 1}`} />
                </div>
                <h3 className="font-display font-bold text-[18px] text-navy mb-2.5 leading-snug" id={`repair-advantage-title-${idx + 1}`}>
                  {card.title}
                </h3>
                <p className="font-sans text-[#5B6472] text-[14.5px] leading-relaxed flex-1" id={`repair-advantage-desc-${idx + 1}`}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
