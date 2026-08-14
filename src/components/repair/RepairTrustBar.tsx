export default function RepairTrustBar() {
  const highlights = [
    { title: "Local Utah Service", sub: "Serving Utah facilities" },
    { title: "Vending Machine Repair", sub: "Commercial machine repair" },
    { title: "Proactive Maintenance", sub: "Minimizing machine downtime" },
    { title: "Ongoing Service", sub: "Technical support & maintenance" },
  ];

  return (
    <section className="bg-navy border-t border-b border-white/10 py-5 text-white overflow-x-auto scrollbar-none" id="repair-trust-bar-section">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between min-w-[720px] gap-4" id="repair-trust-bar-container">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3" id={`repair-trust-bar-item-${idx + 1}`}>
            <div className="w-10 h-10 rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center flex-shrink-0" id={`repair-trust-bar-icon-wrap-${idx + 1}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange" id={`repair-trust-bar-icon-${idx + 1}`}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div id={`repair-trust-bar-text-wrap-${idx + 1}`}>
              <div className="font-display font-bold text-[14px] text-white leading-tight" id={`repair-trust-bar-title-${idx + 1}`}>
                {item.title}
              </div>
              <div className="text-[12px] font-sans text-[#9FB1CB] leading-tight" id={`repair-trust-bar-sub-${idx + 1}`}>
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
