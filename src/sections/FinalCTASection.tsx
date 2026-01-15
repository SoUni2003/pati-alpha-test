const FinalCTASection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <div className="rounded-3xl bg-sculptique-cream p-8 sm:p-12 lg:p-16">
          <h2 className="max-w-2xl font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
            Stop Masking Symptoms. Start Restoring Root Cause.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-sculptique-muted sm:text-lg lg:text-xl">
            You deserve to feel like yourself again. To wake up without puffiness. To see your ankles. To look in the mirror and recognize the vibrant woman staring back. To have energy for the people you love.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-sculptique-muted sm:text-lg lg:text-xl">
            You deserve a solution that actually works. Not temporary relief. Not symptom masking. Complete lymphatic restoration.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="https://pay.trysculptique.com/lymphatic/checkout"
              className="inline-flex items-center justify-center rounded-full bg-sculptique-green px-10 py-4 text-lg font-semibold uppercase tracking-wide text-white shadow-[0px_16px_40px_rgba(26,71,42,0.35)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0px_20px_48px_rgba(26,71,42,0.45)]"
            >
              Try Lymphatic Drainage Risk-Free
            </a>

            <div className="inline-flex items-center gap-3 text-sm text-sculptique-muted sm:text-base">
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
                alt="60 day guarantee"
                className="h-12 w-auto"
                loading="lazy"
              />
              60-Day Money-Back Guarantee
            </div>
          </div>

          <div className="mt-10">
            <img
              src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
              alt="Before and after results"
              className="h-64 w-auto object-contain sm:h-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
