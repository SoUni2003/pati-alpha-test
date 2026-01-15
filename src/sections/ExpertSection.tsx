const ExpertSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
        </h2>

        <div className="mt-12 rounded-3xl bg-sculptique-cream p-8 sm:p-12 lg:p-16">
          <blockquote>
            <p className="text-base leading-8 text-sculptique-muted sm:text-lg lg:text-xl lg:leading-9">
              "Your nutrition plays a powerful role in your appearance. If your body is missing key vitamins and nutrients, it can't process fat and upkeep healthy connective tissue, which is why unprocessed fat flows up and starts pushing up against your skin, forming bumps you know as cellulite.
            </p>

            <p className="mt-6 text-base leading-8 text-sculptique-muted sm:text-lg lg:text-xl lg:leading-9">
              SmoothSkin by Sculptique™ contains ingredients that are scientifically proven to enhance microcirculation, boost lymphatic drainage, and reduce inflammation, which restores your tissue and breaks down the fat cells in your skin."
            </p>
          </blockquote>

          <p className="mt-8 font-semibold text-sculptique-text">Dr. Emily Chen</p>
          <p className="text-sm text-sculptique-muted">Premier New York Skin Clinic</p>
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
              alt="60 day guarantee"
              className="h-16 w-auto"
              loading="lazy"
            />
            <p className="mt-3 text-sm font-medium text-sculptique-muted">60-Day Money-Back Guarantee</p>
          </div>

          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
            alt="Trustpilot review"
            className="h-12 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
