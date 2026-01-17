import { useState } from "react";

const ACCORDION_ITEMS = [
  {
    title: "Ingredients proven by science",
    content: (
      <div className="space-y-4 pb-4 pt-2 text-sm text-sculptique-muted">
        <p>
          <span className="font-bold text-sculptique-text">
            Sculptique Ingredients:
          </span>
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-sculptique-text">
          <li>
            <span className="font-semibold text-sculptique-text">
              Echinacea purpurea Extract
            </span>{" "}
            – Known for its anti-inflammatory properties, it may support skin
            health.
          </li>
          <li>
            <span className="font-semibold text-sculptique-text">
              Dandelion Extract
            </span>{" "}
            – Traditionally used as a diuretic, it may help reduce water
            retention.
          </li>
          <li>
            <span className="font-semibold text-sculptique-text">
              Burdock Powder
            </span>{" "}
            – Contains antioxidants that may promote skin clarity.
          </li>
          <li>
            <span className="font-semibold text-sculptique-text">
              Cleavers Extract
            </span>{" "}
            – Believed to support lymphatic drainage and detoxification.
          </li>
          <li>
            <span className="font-semibold text-sculptique-text">Rutin</span> –
            A flavonoid that may strengthen blood vessels and improve
            circulation.
          </li>
          <li>
            <span className="font-semibold text-sculptique-text">
              Bromelain Powder
            </span>{" "}
            – An enzyme from pineapple that may reduce inflammation and support
            tissue repair.
          </li>
          <li>
            <span className="font-semibold text-sculptique-text">
              Lemon Powder
            </span>{" "}
            – Rich in vitamin C, it may aid in collagen production and skin
            rejuvenation.
          </li>
          <li>
            <span className="font-semibold text-sculptique-text">
              Kelp Extract
            </span>{" "}
            – A source of iodine and minerals that may support skin metabolism.
          </li>
        </ul>
        <p className="pt-2 text-center font-medium text-sculptique-text">
          These natural ingredients work together to reduce puffiness, bloating,
          fluid retention.
        </p>
      </div>
    ),
  },
  {
    title: "How does it actually work?",
    content: (
      <div className="space-y-4 pb-4 pt-2 text-sm text-sculptique-muted">
        <p>
          Your lymphatic system is your body's internal cleaning crew—a network
          of vessels that processes 3-4 liters of cellular waste and excess
          fluid every single day.
        </p>
        <p>
          Sculptique is the only formula that addresses ALL 6 mechanisms of
          lymphatic dysfunction simultaneously—not with symbolic doses, but with
          therapeutic amounts based on clinical research. Not just moving fluid
          temporarily. Not just reducing inflammation. Complete restoration.
        </p>
      </div>
    ),
  },
  {
    title: "Shipping and returns",
    content: (
      <div className="space-y-4 pb-4 pt-2 text-sm text-sculptique-muted">
        <p>
          We offer{" "}
          <span className="font-semibold text-sculptique-text">
            Free Express Shipping from USA
          </span>{" "}
          on all orders.
        </p>
        <p>
          Try it Risk-Free for 60 Days. If you are not satisfied with your
          results, we offer a{" "}
          <span className="font-semibold text-sculptique-text">
            60-day money-back guarantee
          </span>
          .
        </p>
      </div>
    ),
  },
];

const ProductInfoAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-8 flex flex-col gap-6 font-sans">
      <div className="flex flex-col gap-4">
        {/* Delivery Info */}
        <div className="flex items-center gap-2 text-[13px] text-sculptique-text">
          <img
            src="https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"
            alt="Delivery"
            className="h-5 w-auto flex-shrink-0"
          />
          <p>
            Delivered on{" "}
            <span className="font-bold text-[#008f53]">
              Wednesday, 21 January
            </span>{" "}
            with Express Shipping
          </p>
        </div>

        {/* Add To Cart Button */}
        <button
          type="button"
          className="w-full rounded bg-black py-4 text-center text-lg font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-neutral-800 hover:shadow-lg"
        >
          Add to cart
        </button>

        {/* Refills & Payment Info */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-sculptique-text sm:text-sm">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 21h5v-5" />
              </svg>
              <span>Refills Ship Bi-Monthly</span>
            </div>
            <span className="h-3 w-px bg-gray-300"></span>
            <div className="flex items-center gap-1.5">
              <img
                src="https://cdn.shopify.com/s/files/1/0779/0673/9384/files/clock.webp"
                alt=""
                className="h-3.5 w-auto"
              />
              <span>Stop or Cancel Anytime</span>
            </div>
          </div>

          {/* Payment Icons */}
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654"
            alt="Payment methods"
            className="h-6 w-auto"
          />
        </div>

        {/* New Year Banner */}
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src="https://trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486" // Note: This URL might be wrong based on the name, but replacing with a likely banner URL if found, or user can update.
            alt="New Year New Me Sale"
            className="w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/600x200/000000/FFF?text=NEW+YEAR+NEW+ME+BANNER";
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
            alt=""
            className="h-6 w-6 object-contain"
          />
          <p className="text-sm font-medium text-sculptique-text">
            60-Day Money-Back Guarantee
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864"
            alt=""
            className="h-6 w-6 object-contain"
          />
          <p className="text-sm font-medium text-sculptique-text">
            Free Shipping From USA Included
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="relative overflow-hidden rounded-2xl bg-sculptique-yellow-primary p-5">
        <div className="flex items-start gap-4">
          <img
            src="https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
            alt="Margaret Ellison"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-semibold text-sculptique-text">
                Margaret Ellison | FL
              </span>
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-700">
                <img
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"
                  alt="Verified"
                  className="h-3 w-auto"
                />
                Verified Customer
              </div>
            </div>
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267"
              alt="5 stars"
              className="mt-1 h-3.5 w-auto"
            />
          </div>
        </div>
        <h3 className="mt-4 font-serif text-lg font-medium leading-tight text-sculptique-text">
          Even my husband noticed... the spark came back.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-sculptique-muted">
          After years of hiding under coverups, picking apart my body, and
          feeling disconnected, I finally feel at ease again. I feel less
          bloated, lighter, like my body is working with me not against me.
          These past months, I've been present. Even my marriage feels renewed,
          not just in how I look but in how I feel. It's hard to explain, but
          once you try it you'll get it. I'd recommend this to my closest
          friends without question.
        </p>
      </div>

      {/* Accordions */}
      <div className="flex flex-col gap-3">
        {ACCORDION_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`overflow-hidden border bg-white rounded-[32px] transition-all duration-300 ${
                isOpen ? "border-[#1f8f55]" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-sculptique-text transition-colors"
              >
                <span>{item.title}</span>
                <span
                  className={`ml-2 flex h-6 w-6 items-center justify-center rounded-full transition-transform bg-[#e8f5e9] text-[#1f8f55] ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductInfoAccordion;
