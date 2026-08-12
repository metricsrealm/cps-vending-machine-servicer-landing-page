import { Activity, BellRing, UserCheck, MonitorCheck } from "lucide-react";

export default function RepairFeatures() {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Machine Monitoring",
      desc: "CPS utilizes telemetry and real-time visibility to monitor machine status, health, and inventory levels.",
    },
    {
      icon: BellRing,
      title: "Machine Alerts",
      desc: "CPS can receive machine alerts for issues such as bill jams and temperature variances.",
    },
    {
      icon: UserCheck,
      title: "Proactive Service",
      desc: "Machine information helps CPS identify service needs and dispatch technicians proactively.",
    },
    {
      icon: MonitorCheck,
      title: "Reliable Vending Equipment",
      desc: "CPS uses modern vending equipment designed for dependable operation.",
    },
  ];

  return (
    <section className="bg-white py-[78px]" id="features-section">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[48px]">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange">
            Smart Vending Technology
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 mb-3 leading-[1.15] tracking-[-0.01em]">
            Smart Technology for More Reliable Vending
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed">
            CPS uses modern vending technology and real-time machine data to support reliable operation, inventory management, and proactive service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-tint border border-line rounded-[16px] p-6 sm:p-7 flex gap-5 items-start hover:border-orange/40 transition-all duration-200"
              >
                <div className="w-[48px] h-[48px] rounded-[12px] bg-white border border-line text-orange flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[18px] text-navy mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-[#5B6472] text-[14.5px] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
