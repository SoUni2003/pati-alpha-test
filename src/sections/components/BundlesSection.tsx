import { useState } from "react";

const BENEFIT_GRADIENT = {
  inactive: ["#d7f0de", "#9ed9b4"],
  active: ["#1f8f55", "#0b6c3b"],
};

const BUNDLES = [
  {
    title: "1 Bottle",
    subtitle: "1 bottle total | Save $27.99",
    price: "$31.96",
    compareAt: "$59.95",
    benefits: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
      },
    ],
    badge: null,
    accent: {
      inactiveBorder: "#d7d1bd",
      activeBorder: "#147648",
      inactiveBackground: "#ffffff",
      activeBackground: "linear-gradient(180deg, #e4f3e8 0%, #cde8d5 100%)",
      inactiveRadio: "#c7bfa7",
      activeRadio: "#147648",
    },
  },
  {
    title: "Buy 2 Get 1 Free",
    subtitle: "3 bottles total | Save $115.93",
    price: "$63.92",
    compareAt: "$179.85",
    benefits: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
        badgeText: "New Year's Sale",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",
        text: "Free Anti-Bloating Protocol E-book",
      },
    ],
    badge: null,
    accent: {
      inactiveBorder: "#b0d3bb",
      activeBorder: "#146b41",
      inactiveBackground: "linear-gradient(180deg, #f6fbf7 0%, #edf6ef 100%)",
      activeBackground: "linear-gradient(180deg, #d3eddc 0%, #b3dfc6 100%)",
      inactiveRadio: "#3c9b62",
      activeRadio: "#145c3a",
    },
  },
  {
    title: "Buy 3 Get 2 Free",
    subtitle: "5 bottles total | Save $203.87",
    price: "$95.88",
    compareAt: "$299.75",
    benefits: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",
        text: "Free Anti-Bloating Protocol E-book",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309",
        text: "$20 Gift Card",
      },
    ],
    badge: null,
    accent: {
      inactiveBorder: "#d7d1bd",
      activeBorder: "#147648",
      inactiveBackground: "#ffffff",
      activeBackground: "linear-gradient(180deg, #e1f3e6 0%, #c1e4cf 100%)",
      inactiveRadio: "#c7bfa7",
      activeRadio: "#147648",
    },
  },
];

const BundlesSection = () => {
  const [selectedBundle, setSelectedBundle] = useState(BUNDLES[1].title);

  return (
    <section className="bg-white py-2 lg:py-4">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <div className="">
        

          <div className="space-y-6">
            {BUNDLES.map((bundle, index) => {
              const selected = selectedBundle === bundle.title;
              const inputId = `bundle-${index}`;

              return (
                <label
                  key={bundle.title}
                  htmlFor={inputId}
                  className="relative block cursor-pointer overflow-hidden rounded-xl border transition duration-200 "
                  style={{
                    background: selected ? bundle.accent.activeBackground : bundle.accent.inactiveBackground,
                    borderColor: selected ? bundle.accent.activeBorder : bundle.accent.inactiveBorder,
                    boxShadow: selected
                      ? "0 18px 40px rgba(20, 90, 56, 0.22)"
                      : "0 10px 28px rgba(70, 63, 52, 0.08)",
                  }}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name="bundle"
                    className="sr-only"
                    checked={selected}
                    onChange={() => setSelectedBundle(bundle.title)}
                  />
                  <div className="flex items-start justify-between gap-4 p-4">
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2"
                        style={{
                          borderColor: selected ? bundle.accent.activeRadio : bundle.accent.inactiveRadio,
                        }}
                      >
                        {selected && <span className="h-3 w-3 rounded-full" style={{ backgroundColor: bundle.accent.activeRadio }} />}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-sculptique-text sm:text-2xl">
                          {bundle.title}
                        </h3>
                        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-sculptique-muted sm:text-[11px]">
                          {bundle.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-2xl leading-none text-sculptique-text sm:text-[28px]">
                        {bundle.price}
                      </p>
                      <p className="text-xs text-sculptique-muted line-through sm:text-sm">
                        {bundle.compareAt}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-1 space-y-0.5">
                    {bundle.benefits.map((benefit, benefitIndex) => {
                      const gradient = selected ? BENEFIT_GRADIENT.active : BENEFIT_GRADIENT.inactive;

                      return (
                        <li
                          key={benefit.text}
                          style={{ background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)` }}
                          className="relative flex items-center gap-2  px-3 py-2 text-xs font-semibold text-white sm:text-sm"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/18">
                            <img src={benefit.icon} alt="" className="h-4 w-4" loading="lazy" />
                          </span>
                          <span className="flex-1 leading-tight">{benefit.text}</span>
                          {benefit.badgeText && benefitIndex === 0 && (
                            <span className="flex-shrink-0 rounded-full bg-[#e52521] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
                              {benefit.badgeText}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
