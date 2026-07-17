import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQItem } from "../types";

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      question: "What does full-service vending machine management include?",
      answer: "Our vending services are 100% full-service. We handle free delivery, professional installation, proactive restocking, and regular machine maintenance at absolutely no cost to your business.",
    },
    {
      id: "faq-2",
      question: "What snacks and beverages can be stocked in our breakroom?",
      answer: "We offer a wide selection of popular brand-name snacks, cold drinks, carbonated sodas, healthy alternative foods, energy drinks, and juices tailored to your employees' specific requests.",
    },
    {
      id: "faq-3",
      question: "Do your Utah vending machines support cashless payment options?",
      answer: "Yes. All of our vending systems are equipped with secure card readers supporting credit cards, debit cards, Apple Pay, Google Pay, and other cashless taps, alongside traditional cash/coin options.",
    },
    {
      id: "faq-4",
      question: "What happens if a vending machine has an error or drop issue?",
      answer: "Our machines use advanced infrared product sensors to verify every transaction. If an item fails to drop, the machine automatically tries again or refunds the user, preventing lost-money hassles.",
    },
    {
      id: "faq-5",
      question: "How do you handle vending machine maintenance and restocking?",
      answer: "We use built-in smart telemetry to track inventory and machine health in real time. Our local service trucks dispatch automatically for restocking and prompt repairs to guarantee high uptime.",
    },
    {
      id: "faq-6",
      question: "Which Utah cities and business types do you service?",
      answer: "We provide commercial vending services to offices, warehouses, manufacturing plants, and distribution centers in Salt Lake City, West Valley City, West Jordan, Provo, Orem, Sandy, Ogden, Draper, Murray, South Jordan, and Lehi.",
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
