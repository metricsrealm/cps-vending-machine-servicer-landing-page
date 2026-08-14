import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQItem } from "../../types";

export default function RepairFAQ() {
  const faqItems: FAQItem[] = [
    {
      id: "faq-repair-1",
      question: "Does CPS provide vending machine repair in Utah?",
      answer: "Yes. CPS provides commercial vending machine repair, technical troubleshooting, and service for businesses across Utah to keep equipment operating properly.",
    },
    {
      id: "faq-repair-2",
      question: "Does CPS provide vending machine maintenance?",
      answer: "Yes. CPS provides proactive vending machine maintenance designed to minimize downtime and keep vending machines functional.",
    },
    {
      id: "faq-repair-3",
      question: "How do I request vending machine repair or service?",
      answer: "You can request service by calling CPS directly at (385) 208-4074 or by submitting our online request form. Our team will review your request and follow up promptly.",
    },
    {
      id: "faq-repair-4",
      question: "Does CPS provide ongoing vending machine service?",
      answer: "Yes. CPS provides ongoing vending machine service, restocking, cleaning, and routine maintenance for business breakrooms and workplace facilities throughout Utah.",
    },
    {
      id: "faq-repair-5",
      question: "How does CPS monitor vending machines for service issues?",
      answer: "CPS uses smart telemetry and real-time machine visibility to monitor inventory levels, operational status, and system performance to identify service needs.",
    },
    {
      id: "faq-repair-6",
      question: "Does CPS use real-time monitoring for vending machines?",
      answer: "Yes. Real-time telemetry generates automated machine alerts for issues such as bill jams and temperature variances, allowing CPS to dispatch technicians proactively.",
    },
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-tint py-[78px]" id="repair-faq-section">
      <div className="max-w-[1200px] mx-auto px-6" id="repair-faq-container">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[46px]" id="repair-faq-header">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange" id="repair-faq-tagline">
            Repair &amp; Service FAQ
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 leading-[1.15] tracking-[-0.01em]" id="repair-faq-heading">
            Frequently asked questions about vending repair
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed max-w-[500px] mx-auto" id="repair-faq-description">
            Don't see your question? Call us — we're happy to help.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-[780px] mx-auto space-y-3" id="repair-faq-list">
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`repair-faq-item-card-${idx + 1}`}
                className={`bg-white border rounded-[12px] overflow-hidden transition-all duration-180 ${
                  isOpen ? "border-[#D8E0EC] shadow-md shadow-navy/10" : "border-line"
                }`}
              >
                {/* Question Trigger */}
                <button
                  id={`repair-faq-btn-${idx + 1}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={item.id}
                  className="w-full flex items-center justify-between gap-4 text-left px-[22px] py-[19px] font-display font-semibold text-[16px] text-navy hover:text-orange focus:outline-none cursor-pointer"
                >
                  <span id={`repair-faq-question-${idx + 1}`}>{item.question}</span>
                  <svg 
                    id={`repair-faq-icon-${idx + 1}`}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`text-orange flex-shrink-0 transition-transform duration-250 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Answer Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={item.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-[22px] pb-[20px] pt-0 font-sans text-[#5B6472] text-[15px] leading-relaxed" id={`repair-faq-answer-${idx + 1}`}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
