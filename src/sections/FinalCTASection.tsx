import MoneyBackGuarantee from "../components/MoneyBackGuarantee";

const FinalCTASection = () => {
  return (
    <section className="bg-sculptique-yellow py-12 lg:py-20">
      <div className="mx-auto w-full max-w-page px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-1/2 flex flex-col items-start text-left">
            
            {/* Trustpilot Widget */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex bg-[#00b67a] px-1.5 py-0.5 rounded gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-sculptique-text">93.000+ Customers Worldwide</span>
              <div className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#00b67a] fill-current">
                   <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-bold text-sm text-black">Trustpilot</span>
              </div>
            </div>

            <h2 className="font-serif text-3xl leading-snug text-sculptique-text sm:text-4xl lg:text-[44px] lg:leading-[1.2] mb-6">
              Stop Masking Symptoms. Start Restoring Root Cause.
            </h2>

            <p className="text-base leading-relaxed text-sculptique-text mb-6 sm:text-lg">
              You deserve to feel like yourself again. To wake up without puffiness. To see your ankles. To look in the mirror and recognize the vibrant woman staring back. To have energy for the people you love.
            </p>

            <p className="text-base leading-relaxed text-sculptique-text mb-8 sm:text-lg">
              You deserve a solution that actually works. Not temporary relief. Not symptom masking. Complete lymphatic restoration.
            </p>

            <a
              href="https://pay.trysculptique.com/lymphatic/checkout"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-none bg-black px-8 py-4 text-white text-lg font-medium hover:bg-gray-800 transition-colors mb-4"
            >
              Try Lymphatic Drainage Risk-Free
            </a>

            <MoneyBackGuarantee />
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
              alt="Before and after results"
              className="w-full h-auto object-contain rounded-xl"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
