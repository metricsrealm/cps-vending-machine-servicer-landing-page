import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQItem } from "../../types";

export default function RepairFAQ() {
  const faqItems: FAQItem[] = [
    {
      id: "faq-repair-1",
      question: "Does CPS provide vending machine repair in Utah?",
      answer: "Yes. CPS provides professional vending machine repair, technical troubleshooting, and service to keep workplace vending equipment operating properly.",
    },
    {
      id: "faq-repair-2",
      question: "What is included in proactive vending machine maintenance?",
      answer: "Our maintenance includes regular inspection, cleaning, component checks, telemetry monitoring, and ongoing technical support for your workplace vending machines.",
    },
    {
      id: "faq-repair-3",
      question: "Which Utah cities do you service for vending repairs and maintenance?",
      answer: "We service commercial facilities across Salt Lake City, West Valley City, West Jordan, Provo, Orem, Sandy, Ogden, Draper, Murray, South Jordan, Lehi, and statewide Utah.",
    },
    {
      id: "faq-repair-4",
      question: "How do I request vending machine repair or service?",
      answer: "You can request service by calling us directly at (385) 208-4074 or by submitting our online request form. We will get in touch promptly to discuss your machine's needs.",
    },
    {
      id: "faq-repair-5",
      question: "Does CPS offer telemetry and real-time inventory monitoring?",
      answer: "Yes. We use built-in smart telemetry to monitor machine health, inventory levels, and system status in real time, helping prevent downtime before it occurs.",
    },
    {
      id: "faq-repair-6",
      question: "Do you service machines with cashless payment systems?",
      answer: "Yes. We support and service modern vending equipment equipped with credit card readers, mobile pay (Apple Pay, Google Pay), and traditional cash payment systems.",
    },
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-tint py-[78px]" id="faq-section">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[680px] mx-auto text-center mb-[46px]">
          <span className="font-display font-bold text-[12px] tracking-[0.14em] uppercase text-orange">
            Repair &amp; Service FAQ
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 leading-[1.15] tracking-[-0.01em]">
            Frequently asked questions about vending repair
          </h2>
          <p className="font-sans text-[#5B6472] text-[16.5px] leading-relaxed max-w-[500px] mx-auto">
            Don't see your question? Call us — we're happy to help.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-[780px] mx-auto space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border rounded-[12px] overflow-hidden transition-all duration-180 ${
                  isOpen ? "border-[#D8E0EC] shadow-md shadow-navy/10" : "border-line"
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={item.id}
                  className="w-full flex items-center justify-between gap-4 text-left px-[22px] py-[19px] font-display font-semibold text-[16px] text-navy hover:text-orange focus:outline-none cursor-pointer"
                >
                  <span>{item.question}</span>
                  <svg 
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
                      <div className="px-[22px] pb-[20px] pt-0 font-sans text-[#5B6472] text-[15px] leading-relaxed">
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
