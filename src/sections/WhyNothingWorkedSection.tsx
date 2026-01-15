const REASONS = [
  {
    title: "You cut out gluten, dairy, sugar. You ate clean for months.",
    reason: "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
    image: "https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
    icon: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853",
  },
  {
    title: "You tried viral lymphatic drops from TikTok.",
    reason: "They're just pricey water with trace herbs. The \"active ingredients\" are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.",
    image: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
    icon: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853",
  },
  {
    title: "You got lymphatic massage or bought compression socks.",
    reason: "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
    image: "https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176",
    icon: "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853",
  },
];

const WhyNothingWorkedSection = () => {
  return (
    <section className="bg-sculptique-cream py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          Why Nothing Has Worked
        </h2>

        <div className="mt-12 space-y-12">
          {REASONS.map((reason, idx) => (
            <div key={idx} className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              <div className="w-full lg:w-6/12">
                <h3 className="font-serif text-2xl font-semibold text-sculptique-text sm:text-3xl">
                  {reason.title}
                </h3>

                <div className="mt-4 flex items-start gap-3">
                  <img
                    src={reason.icon}
                    alt=""
                    className="mt-1 h-6 w-6 flex-shrink-0"
                    loading="lazy"
                  />
                  <p className="text-base leading-7 text-sculptique-muted sm:text-lg">
                    Why it failed
                  </p>
                </div>

                <p className="mt-4 text-base leading-7 text-sculptique-muted sm:text-lg">
                  {reason.reason}
                </p>
              </div>

              <div className="h-64 w-full overflow-hidden rounded-2xl bg-white shadow-sm lg:h-80 lg:w-6/12">
                <img
                  src={reason.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNothingWorkedSection;
