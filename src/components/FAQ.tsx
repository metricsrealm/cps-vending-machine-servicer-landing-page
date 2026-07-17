import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQItem } from "../types";

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      question: "What does full-service vending include?",
      answer: "We handle refilling, restocking and maintenance — the machines are managed end-to-end by our team. You provide the space; we keep everything running.",
    },
    {
      id: "faq-2",
      question: "What products can we get in the machines?",
      answer: "Snacks, cold drinks and more — we tailor the product mix to what your team actually wants and adjust based on what sells.",
    },
    {
      id: "faq-3",
      question: "What payment methods do the machines accept?",
      answer: "Credit and debit cards, Apple Pay and Google Pay via secure Cantaloupe readers — plus well-maintained bill and coin acceptors for cash.",
    },
    {
      id: "faq-4",
      question: "What if the machine takes someone's money?",
      answer: "Guaranteed product delivery: infrared sensors confirm the item dropped. If it doesn't, the machine automatically re-vends or refunds — no lost money.",
    },
    {
      id: "faq-5",
      question: "What if a machine breaks or runs low?",
      answer: "Real-time telemetry flags low stock and issues, and our team handles proactive maintenance and repairs to keep downtime low.",
    },
    {
      id: "faq-6",
      question: "Which areas of Utah do you serve?",
      answer: "We serve Salt Lake City and the surrounding metro, plus businesses statewide across Utah. If you're not sure we reach you, give us a call.",
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
            Got questions?
          </span>
          <h2 className="font-display font-bold text-[27px] sm:text-[32px] md:text-[38px] text-navy mt-3 leading-[1.15] tracking-[-0.01em]">
            Frequently asked questions
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
