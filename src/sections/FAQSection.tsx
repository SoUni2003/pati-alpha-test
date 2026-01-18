import { useState } from "react";
import MoneyBackGuarantee from "../components/MoneyBackGuarantee";

const FAQS = [
  {
    question: "How is this different from lymphatic drops I saw on TikTok?",
    answer:
      "Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.\n\nSculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.",
  },
  {
    question: "Why didn't my diet changes work?",
    answer:
      "Diet addresses what goes into your body, but cannot fix the underlying drainage mechanism that's already broken. Lymphatic vessels need specific nutrients and compounds to repair and restore function—that's what our formula does.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most customers notice initial changes (reduced bloating, better sleep) within 2-3 weeks. More significant improvements (smoother skin, reduced cellulite appearance) typically appear by 6-8 weeks of consistent use. Everyone's body is different, which is why we offer a 60-day money-back guarantee.",
  },
  {
    question: "Is this safe? Any side effects?",
    answer:
      "Our formula is 100% natural and clinically tested. Side effects are rare and typically mild (occasional gentle digestive adjustment). We recommend consulting your doctor if you're on blood thinners or have specific health conditions.",
  },
  {
    question: "Can I take this with other supplements?",
    answer:
      "Yes, our ingredients are designed to work synergistically with most supplements. However, if you're on medications or have concerns about interactions, please consult your healthcare provider.",
  },
  {
    question: "How do I use it?",
    answer:
      "Take 2 capsules daily with water, preferably in the morning with breakfast. Consistency is key—your body needs daily support to repair and maintain lymphatic function.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "We offer a 100% satisfaction 60-day money-back guarantee. If you're not seeing results or satisfied for any reason, simply reach out and we'll process a full refund, no questions asked.",
  },
  {
    question: "Where is this manufactured?",
    answer:
      "Our formula is manufactured in an FDA-registered facility in the USA, following GMP (Good Manufacturing Practice) standards. Every batch is third-party tested for purity and potency.",
  },
  {
    question: "Why isn't this in stores?",
    answer:
      "We keep our formula direct-to-consumer to maintain quality control, offer better pricing, and ensure freshness. Retail markups and storage conditions can compromise ingredient potency.",
  },
  {
    question: "Is this vegan/gluten-free?",
    answer:
      "Yes! Our formula is 100% vegan, gluten-free, non-GMO, and contains no artificial additives, fillers, or dyes. It's clean nutrition designed for everyone.",
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <div className="rounded-2xl bg-sculptique-yellow p-6 sm:px-10 sm:py-14 md:px-16 md:py-16">
          <h2 className="mb-12 text-center font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[42px]">
            Frequently Asked Questions
          </h2>

          <div className="">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-white/40">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className="flex w-full items-start justify-between py-5 text-left sm:items-center"
                >
                  <h3 className="pr-4 font-sans text-lg text-sculptique-text sm:text-[19px]">
                    {faq.question}
                  </h3>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-sculptique-text transition-transform duration-300 ${
                      expandedIndex === idx ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    expandedIndex === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-4 pb-5 text-base leading-relaxed text-sculptique-text/80 sm:text-lg">
                      {faq.answer.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
            <button className="w-full sm:w-auto min-w-[320px] rounded bg-black px-8 py-4 text-lg font-bold text-white transition hover:bg-gray-900">
                Try Lymphatic Drainage Risk-Free
            </button>
            <MoneyBackGuarantee />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
