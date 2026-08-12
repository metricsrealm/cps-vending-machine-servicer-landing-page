import { Wrench, ShieldCheck, Cpu, RefreshCw } from "lucide-react";

export default function RepairAdvantages() {
  const cards = [
    {
      icon: Wrench,
      title: "Vending Machine Repair",
      desc: "Prompt technical repair services to fix machine malfunctions, product delivery issues, and keep your workplace vending operational.",
    },
    {
      icon: ShieldCheck,
      title: "Preventive Maintenance",
      desc: "Proactive maintenance schedules designed to prevent equipment breakdowns, ensure component longevity, and maintain peak machine efficiency.",
    },
    {
      icon: Cpu,
      title: "Machine Troubleshooting & Support",
      desc: "Expert service support to diagnose and resolve electrical, mechanical, or payment system issues on your workplace vending machines.",
    },
    {
      icon: RefreshCw,
      title: "Ongoing Vending Service",
      desc: "Comprehensive restocking, cleaning, and routine service as part of full-service vending support for Utah facilities.",
    },
  ];

  return (
    <section className="bg-tint py-[78px]" id="advantages-section">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[48px]">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange">
            Vending Repair &amp; Maintenance
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 mb-3 leading-[1.15] tracking-[-0.01em]">
            Professional Vending Service to Minimize Downtime
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed">
            We help Utah businesses keep their vending equipment operating properly with technical repair, preventive maintenance, and ongoing service support.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-line rounded-[16px] p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#FFF3E9] text-orange flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-[18px] text-navy mb-2.5 leading-snug">
                  {card.title}
                </h3>
                <p className="font-sans text-[#5B6472] text-[14.5px] leading-relaxed flex-1">
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
