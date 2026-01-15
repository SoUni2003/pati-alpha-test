import { useState } from "react";

const FAQS = [
  {
    question: "How is this different from lymphatic drops I saw on TikTok?",
    answer:
      "Our formula contains therapeutic doses of clinically proven ingredients in capsule form, which bypasses stomach acid destruction. TikTok drops are typically diluted herbal water with no bioavailability. We target all 6 mechanisms of lymphatic dysfunction simultaneously, not just temporary fluid movement.",
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className="w-full"
            >
              <div className="flex items-center justify-between rounded-2xl bg-sculptique-cream px-6 py-5 text-left transition hover:bg-opacity-80 sm:px-8">
                <h3 className="font-semibold text-sculptique-text sm:text-lg">
                  {faq.question}
                </h3>
                <svg
                  className={`h-6 w-6 flex-shrink-0 text-sculptique-text transition ${
                    expandedIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {expandedIndex === idx && (
                <div className="border-l-2 border-sculptique-cream bg-sculptique-cream/50 px-6 py-5 sm:px-8">
                  <p className="text-base leading-7 text-sculptique-muted sm:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
