const MissionSection = () => {
  return (
    <section className="bg-sculptique-cream py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <h2 className="max-w-3xl font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
          We're On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of Bloating…And Feel Like Themselves Again
        </h2>

        <div className="mt-12 rounded-3xl bg-white p-8 sm:p-12 lg:p-16">
          <p className="text-center text-base font-semibold text-sculptique-text sm:text-lg">
            Here's where we're at right now:
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-sculptique-green sm:text-5xl">
                93K+
              </div>
              <p className="mt-2 text-base text-sculptique-muted">
                Transformations Completed
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-sculptique-green sm:text-5xl">
                4.8/5
              </div>
              <p className="mt-2 text-base text-sculptique-muted">
                Average Rating from Real Customers
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-sculptique-green sm:text-5xl">
                60 Days
              </div>
              <p className="mt-2 text-base text-sculptique-muted">
                Money-Back Guarantee
              </p>
            </div>
          </div>

          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
            alt="Trustpilot review"
            className="mx-auto mt-10 h-12 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
