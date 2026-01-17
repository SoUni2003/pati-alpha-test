const ExpertSection = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1248px] px-4 lg:px-0">
        <div className="flex flex-col-reverse overflow-hidden rounded-[32px] bg-[#F8F8F8] md:flex-row">
          <div className="flex w-full flex-col justify-center p-6 sm:p-10 lg:p-8 md:w-[48%]">
            <span className="mb-4 text-sm font-medium text-gray-500 uppercase tracking-wide">
              July 4th, 2025
            </span>

            <h2 className="mb-8 font-lora text-3xl leading-tight text-sculptique-text sm:text-4xl lg:text-[32px]">
              Expert Advice from Dr. Emily Chen of a Premier New York Skin
              Clinic
            </h2>

            <div className="space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              <p>
                “Your nutrition plays a powerful role in your appearance. If
                your body is missing key vitamins and nutrients, it can’t
                process fat and upkeep healthy connective tissue, which is why
                unprocessed fat flows up and starts pushing up against your
                skin, forming bumps you know as cellulite.
              </p>
              <p>
                SmoothSkin by Sculptique™ contains ingredients that are
                scientifically proven to enhance microcirculation, boost
                lymphatic drainage, and reduce inflammation, which restores your
                tissue and breaks down the fat cells in your skin.”
              </p>
            </div>

            <div className="mt-10 flex flex-col items-start gap-6">
              <button className="rounded bg-black px-8 py-4 text-center text-base font-bold text-white transition hover:bg-gray-800 w-full sm:w-auto">
                Try Lymphatic Drainage Risk-Free
              </button>

              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-medium text-gray-900">
                  60-Day Money-Back Guarantee
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[400px] w-full bg-[#F3EEE0] md:h-[551px] md:w-[52%]">
            <img
              src="https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"
              alt="Dr. Emily Chen"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
